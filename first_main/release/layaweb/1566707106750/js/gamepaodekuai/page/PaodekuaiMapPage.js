var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* 跑得快
*/
var gamepaodekuai;
(function (gamepaodekuai) {
    var page;
    (function (page_1) {
        var MONEY_NUM = 24; // 特效金币数量
        var MONEY_FLY_TIME = 50; // 金币飞行时间间隔
        var PaodekuaiMapPage = /** @class */ (function (_super) {
            __extends(PaodekuaiMapPage, _super);
            function PaodekuaiMapPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._battleIndex = -1;
                _this._clipList = []; //飘字
                _this._winerPos = []; //赢家
                _this._settleLoseInfo = []; //结算信息，闲家输
                _this._moneyImg = []; //飘金币里的金币
                _this._isPlaying = false; //是否进行中
                _this._isGameEnd = false; //是否本局游戏结束
                _this._isPlayXiPai = false; //是否播放洗牌
                _this._pointTemp = []; //每局积分
                _this._pointBomb = []; //每局炸弹积分
                _this._chooseCards = []; //选中的牌
                _this._surplusCards = [0, 0, 0, 0]; //各个座位剩余牌数
                _this._headPos = []; //各个头像坐标
                _this._qiangCount = 0; //抢关次数
                _this._promptHitCount = 0; //提示按钮点击次数
                _this._playCardsConfig = {
                    "player": 0,
                    "card_type": 0,
                    "card_len": 0,
                    "max_val": 0,
                };
                _this._diff = 500;
                _this._timeList = {};
                _this._firstList = {};
                _this._nameStrInfo = ["xs", "px", "gsy", "gg", "cs", "tdg"];
                _this._isNeedDuang = false;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    Path_game_paodekuai.atlas_game_ui + "paodekuai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                    Path_game_paodekuai.atlas_game_ui + "paodekuai/effect/quanguan.atlas",
                    Path_game_paodekuai.atlas_game_ui + "paodekuai/effect/feiji.atlas",
                    Path_game_paodekuai.atlas_game_ui + "paodekuai/effect/shunzi.atlas",
                    Path_game_paodekuai.atlas_game_ui + "paodekuai/effect/boom.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            PaodekuaiMapPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.paodekuai.PaoDeKuaiUI');
                this._feijiView = new ui.game_ui.paodekuai.component.feijiUI();
                this._shunZiView = new ui.game_ui.paodekuai.component.shunziUI();
                this._bombView = new ui.game_ui.paodekuai.component.boomUI();
                this.addChild(this._viewUI);
                this._pageHandle = PageHandle.Get("PaodekuaiMapPage"); //额外界面控制器
                if (!this._paodekuaiMgr) {
                    if (this._game.sceneObjectMgr.story instanceof PaodekuaiStory) {
                        this._paodekuaiStory = this._game.sceneObjectMgr.story;
                    }
                    else if (this._game.sceneObjectMgr.story instanceof PaodekuaiCardRoomStory) {
                        this._paodekuaiStory = this._game.sceneObjectMgr.story;
                    }
                    this._paodekuaiMgr = this._paodekuaiStory.paodekuaiMgr;
                }
                this._game.playMusic(Path.music + "paodekuai/pdk_BGM.mp3");
            };
            // 页面打开时执行函数
            PaodekuaiMapPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this.updateViewUI();
                this.onUpdateUnitOffline();
                if (this._paodekuaiStory instanceof gamecomponent.story.StoryRoomCardBase) {
                    this.onUpdateMapInfo();
                }
                this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE, this, this.updateCardRoomDisplayInfo);
                this._game.sceneObjectMgr.on(PaodekuaiMapInfo.EVENT_PDK_STATUS_CHECK, this, this.onUpdateMapState);
                this._game.sceneObjectMgr.on(PaodekuaiMapInfo.EVENT_PDK_BATTLE_CHECK, this, this.updateBattledInfo);
                this._game.sceneObjectMgr.on(PaodekuaiMapInfo.EVENT_PDK_COUNT_DOWN, this, this.updateCountDown); //倒计时更新
                this._game.mainScene.on(SceneOperator.AVATAR_MOUSE_CLICK_HIT, this, this.onClickCards);
                this._game.mainScene.on(SceneOperator.AVATAR_MOUSE_UP_HIT_ALL, this, this.onChooseCards);
                this._viewUI.view_xipai.ani_xipai.on(LEvent.COMPLETE, this, this.onWashCardOver);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this._viewUI.btn_menu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_cardtype.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rules.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_record.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_pass.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chupai.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qiang.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_buqiang.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_tishi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_tuoguan.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this.setCardRoomBtnEvent(true);
            };
            //打开时要处理的东西
            PaodekuaiMapPage.prototype.updateViewUI = function () {
                this._viewUI.img_menu.visible = false;
                this._viewUI.box_btn.visible = false;
                this._viewUI.text_cardroomid.visible = this.isCardRoomType;
                this._viewUI.view_cardroom.visible = false;
                this._viewUI.box_qiang.visible = false;
                this._viewUI.lab_per.visible = false;
                this._viewUI.text_round.visible = false;
                this._viewUI.lab_per.text = "倍数：1";
                this._viewUI.text_cardroomid.visible = false;
                this._viewUI.btn_tuoguan.visible = false;
                this._viewUI.img_tishi.visible = false;
                this._viewUI.img_pass.visible = false;
                this._viewUI.img_chupai.visible = false;
                this._viewUI.view_fapai.visible = false;
                this._viewUI.view_xipai.visible = false;
                this._viewUI.view_xipai.ani_xipai.stop();
                this._viewUI.view_paixie.cards.visible = false;
                this._viewUI.view_paixie.ani_chupai.stop();
                for (var i = 0; i < 4; i++) {
                    this._viewUI["view_player" + i].visible = false;
                    this._viewUI["view_player" + i].img_tuoguan.visible = false;
                    this._viewUI["img_first" + i].visible = false;
                    this._viewUI["img_tishi" + i].visible = false;
                    this._viewUI["img_type" + i].visible = false;
                    this._viewUI["img_quanguan" + i].visible = false;
                    if (i > 0) {
                        this._viewUI["box_count" + i].visible = false;
                        this._viewUI["view_baodan" + i].visible = false;
                    }
                }
            };
            //按钮点击
            PaodekuaiMapPage.prototype.onBtnTweenEnd = function (e, target) {
                var _this = this;
                switch (target) {
                    case this._viewUI.btn_menu:
                        this._viewUI.img_menu.visible = true;
                        this._viewUI.btn_menu.visible = false;
                        break;
                    case this._viewUI.btn_back:
                        var mapinfo = this._game.sceneObjectMgr.mapInfo;
                        if (this.isCardRoomType) {
                            if (!this.canEndCardGame())
                                return;
                            if (this._paodekuaiStory.isCardRoomMaster() && !this._isGameEnd) {
                                this.masterDismissCardGame();
                                return;
                            }
                        }
                        else {
                            if (mapinfo && mapinfo.GetPlayState() == 1) {
                                this._game.showTips("游戏尚未结束，请先打完这局哦~");
                                return;
                            }
                        }
                        this.resetData();
                        this.clearMapInfoListen();
                        this._paodekuaiMgr.clear();
                        this._paodekuaiStory.clear();
                        this.clearClip();
                        this.clearMoneyImg();
                        this._game.sceneObjectMgr.leaveStory(true);
                        break;
                    case this._viewUI.btn_cardtype:
                        this._game.uiRoot.general.open(page_1.PaodekuaiPageDef.PAGE_PDK_RULE, function (page) {
                            page.dataSource = 1;
                        });
                        break;
                    case this._viewUI.btn_rules:
                        this._game.uiRoot.general.open(page_1.PaodekuaiPageDef.PAGE_PDK_RULE);
                        break;
                    case this._viewUI.btn_set:
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING);
                        break;
                    case this._viewUI.btn_record:
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, function (page) {
                            page.dataSource = {
                                gameid: page_1.PaodekuaiPageDef.GAME_NAME,
                                isCardRoomType: _this._mapInfo.GetMapLevel() == Web_operation_fields.GAME_ROOM_CONFIG_CARD_ROOM,
                            };
                        });
                        break;
                    case this._viewUI.view_cardroom.btn_invite: //房卡邀请
                        // 微信邀请玩家参与房卡游戏
                        if (this.isCardRoomType && this._mapInfo.GetCardRoomId()) {
                            this._game.network.call_get_roomcard_share(page_1.PaodekuaiPageDef.GAME_NAME);
                        }
                        break;
                    case this._viewUI.view_cardroom.btn_dismiss: //房卡解散
                        this.masterDismissCardGame();
                        break;
                    case this._viewUI.view_cardroom.btn_start: ////房卡开始
                        this.setCardGameStart();
                        break;
                    case this._viewUI.btn_chupai:
                        if (this._chooseCards.length == 0)
                            return;
                        var type = this._paodekuaiMgr.checkCardsType(this._chooseCards);
                        if (type == 0) {
                            this._game.showTips("无效的牌");
                            return;
                        }
                        if (!this.checkPlayCard(type, this._chooseCards.length, this._paodekuaiMgr.maxCardVal)) {
                            this._game.showTips("牌型不对，请重新选牌");
                            return;
                        }
                        var cards = [];
                        for (var i = 0; i < this._chooseCards.length; i++) {
                            cards.push(this._chooseCards[i].GetVal());
                        }
                        var str = JSON.stringify(cards);
                        this._game.network.call_pdk_play_card(type, cards.length, this._paodekuaiMgr.maxCardVal, str);
                        break;
                    case this._viewUI.btn_pass:
                        this._game.network.call_pdk_pass_card();
                        break;
                    case this._viewUI.btn_qiang:
                        this._game.network.call_pdk_qiang_guan(1);
                        break;
                    case this._viewUI.btn_buqiang:
                        this._game.network.call_pdk_qiang_guan(0);
                        break;
                    case this._viewUI.btn_tishi:
                        this.ClickBtnTiShi();
                        break;
                    case this._viewUI.btn_tuoguan:
                        this._game.network.call_pdk_trusteeship();
                        break;
                    case this._viewUI.btn_qifu: //祈福
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU);
                        break;
                    default:
                        break;
                }
            };
            PaodekuaiMapPage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_GET_ROOMCARD_SHARE) {
                    if (data && data.success == 0) {
                        var img_url = data.msg.img_url;
                        var wx_context = data.msg.context || PaodekuaiMgr.WXSHARE_DESC;
                        var wx_title = data.msg.title + this._mapInfo.GetCardRoomId() || StringU.substitute(PaodekuaiMgr.WXSHARE_TITLE, this._mapInfo.GetCardRoomId());
                        this._game.wxShareUrl(wx_title, wx_context, img_url);
                    }
                }
            };
            PaodekuaiMapPage.prototype.onWashCardOver = function () {
                var _this = this;
                if (!this._isPlayXiPai)
                    return;
                Laya.Tween.to(this._viewUI.view_xipai, { x: 968, y: 90, alpha: 0, rotation: -30, scaleX: 0.35, scaleY: 0.35 }, 500);
                Laya.timer.once(500, this, function () {
                    _this._viewUI.view_paixie.cards.visible = true;
                    _this._viewUI.view_paixie.ani_chupai.play(0, false);
                    _this._isPlayXiPai = false;
                });
            };
            PaodekuaiMapPage.prototype.playDealAni = function () {
                this._viewUI.view_xipai.x = 640;
                this._viewUI.view_xipai.y = 310;
                this._viewUI.view_xipai.scaleX = 1;
                this._viewUI.view_xipai.scaleY = 1;
                this._viewUI.view_xipai.alpha = 1;
                this._viewUI.view_xipai.rotation = 0;
                this._viewUI.view_xipai.visible = true;
                this._viewUI.view_xipai.ani_xipai.play(0, false);
                this._isPlayXiPai = true;
            };
            //点击任意地方关闭菜单
            PaodekuaiMapPage.prototype.onMouseClick = function (e) {
                if (e.currentTarget != this._viewUI.btn_menu) {
                    this._viewUI.img_menu.visible = false;
                    this._viewUI.btn_menu.visible = true;
                }
            };
            PaodekuaiMapPage.prototype.onUnitAdd = function (u) {
                this.onUpdateUnit();
            };
            //玩家出去了
            PaodekuaiMapPage.prototype.onUnitRemove = function (u) {
                this.onUpdateUnit();
            };
            //精灵显示
            PaodekuaiMapPage.prototype.onUpdateUnit = function (qifu_index) {
                var _this = this;
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                if (!mapinfo)
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var idx = mainUnit.GetIndex();
                if (!idx)
                    return;
                if (this._mainIdx != idx) {
                    this._mainIdx = idx;
                }
                var _loop_1 = function (index) {
                    var posIdx = this_1.GetSeatFromUiPos(index);
                    var unit = this_1._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    this_1._viewUI["view_player" + index].visible = unit;
                    if (unit) {
                        var name_1 = getMainPlayerName(unit.GetName());
                        this_1._viewUI["view_player" + index].txt_name.text = name_1;
                        this_1._viewUI["view_player" + index].img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unit.GetHeadImg() + ".png";
                        var money = EnumToString.getPointBackNum(unit.GetMoney(), 2);
                        this_1._viewUI["view_player" + index].txt_money.text = money;
                        //托管状态
                        if (unit.GetIdentity() == 1) {
                            this_1._viewUI["view_player" + index].img_tuoguan.visible = true;
                            if (posIdx == idx) {
                                this_1._viewUI.btn_tuoguan.skin = Path_game_paodekuai.ui_paodekuai + "btn_tg1.png";
                            }
                        }
                        else if (unit.GetIdentity() == 0) {
                            this_1._viewUI["view_player" + index].img_tuoguan.visible = false;
                            if (posIdx == idx) {
                                this_1._viewUI.btn_tuoguan.skin = Path_game_paodekuai.ui_paodekuai + "btn_tg0.png";
                            }
                        }
                        //头像框
                        this_1._viewUI["view_player" + index].img_txk.visible = unit.GetVipLevel() > 0;
                        if (this_1._viewUI["view_player" + index].img_txk.visible) {
                            this_1._viewUI["view_player" + index].img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + unit.GetVipLevel() + ".png";
                        }
                        //祈福成功 头像上就有动画
                        if (qifu_index && posIdx == qifu_index) {
                            this_1._viewUI["view_player" + index].qifu_type.visible = true;
                            this_1._viewUI["view_player" + index].qifu_type.skin = this_1._qifuTypeImgUrl;
                            this_1.playTween(this_1._viewUI["view_player" + index].qifu_type, qifu_index);
                        }
                        //时间戳变化 才加上祈福标志
                        if (unit.GetQiFuEndTime() > this_1._game.sync.serverTimeBys) {
                            if (qifu_index && posIdx == qifu_index) {
                                Laya.timer.once(2500, this_1, function () {
                                    _this._viewUI["view_player" + index].img_qifu.visible = true;
                                    if (_this._viewUI["view_player" + index].img_qifu.visible && unit.GetQiFuType()) {
                                        _this._viewUI["view_player" + index].img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + _this._nameStrInfo[unit.GetQiFuType() - 1] + ".png";
                                    }
                                });
                            }
                            else {
                                this_1._viewUI["view_player" + index].img_qifu.visible = true;
                                if (this_1._viewUI["view_player" + index].img_qifu.visible && unit.GetQiFuType()) {
                                    this_1._viewUI["view_player" + index].img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this_1._nameStrInfo[unit.GetQiFuType() - 1] + ".png";
                                }
                            }
                        }
                        else {
                            this_1._viewUI["view_player" + index].img_qifu.visible = false;
                        }
                    }
                };
                var this_1 = this;
                for (var index = 0; index < this._unitCounts; index++) {
                    _loop_1(index);
                }
            };
            PaodekuaiMapPage.prototype.playTween = function (img, index, isTween) {
                if (!img)
                    return;
                if (!this._timeList[index]) {
                    this._timeList[index] = 0;
                }
                if (this._timeList[index] >= 2500) {
                    this._timeList[index] = 0;
                    this._firstList[index] = 0;
                    img.visible = false;
                    return;
                }
                Laya.Tween.to(img, { alpha: isTween ? 1 : 0.2 }, this._diff, Laya.Ease.linearNone, Handler.create(this, this.playTween, [img, index, !isTween]), this._firstList[index] ? this._diff : 0);
                this._timeList[index] += this._diff;
                this._firstList[index] = 1;
            };
            //地图监听
            PaodekuaiMapPage.prototype.onUpdateMapInfo = function () {
                var mapInfo = this._game.sceneObjectMgr.mapInfo;
                this._mapInfo = mapInfo;
                if (mapInfo) {
                    var extra = mapInfo.GetCardRoomExtra();
                    if (extra == "")
                        return;
                    var data_1 = JSON.parse(extra);
                    this._unitCounts = data_1.unit_count;
                    this._cardCounts = data_1.cards_count;
                    this._qiangGuan = data_1.qiangguan;
                    this._guanShang = data_1.guanshang;
                    this._paodekuaiMgr.bombA = data_1.bombA;
                    this._paodekuaiMgr.siDaiSan = data_1.sidaisan;
                    this._paodekuaiMgr.shunziCount = data_1.shunzi;
                    this._paodekuaiMgr.totalUnitCount = this._unitCounts;
                    for (var i = 0; i < this._unitCounts; i++) {
                        this._surplusCards[i] = this._cardCounts;
                    }
                    if (this._unitCounts == 3) {
                        this._viewUI.box_player2.x = 26;
                        this._viewUI.box_player2.y = 179;
                        this._headPos = [[33, 553], [1160, 197], [27, 197]];
                    }
                    else if (this._unitCounts == 4) {
                        this._viewUI.box_player2.x = 475;
                        this._viewUI.box_player2.y = 18;
                        this._headPos = [[33, 553], [1160, 197], [477, 34], [27, 197]];
                    }
                    if (this._paodekuaiMgr.isReLogin) {
                        this._paodekuaiStory.mapLv = this._mapInfo.GetMapLevel();
                        this._isGameEnd = false;
                        this.resetBattleIdx();
                        this.updateBattledInfo();
                        this.onUpdateMapState();
                        this.updateCountDown();
                    }
                    if (this.isCardRoomType) {
                        this.updateCardRoomDisplayInfo();
                    }
                    this.onUpdateUnit();
                }
            };
            //假精灵数据
            PaodekuaiMapPage.prototype.onUpdateUnitOffline = function () {
                if (!this._paodekuaiMgr.unitOffline)
                    return;
                var unitOffline = this._paodekuaiMgr.unitOffline;
                var mPlayer = this._game.sceneObjectMgr.mainPlayer;
                if (unitOffline) {
                    this._viewUI.view_player0.visible = true;
                    var money = void 0;
                    if (mPlayer) {
                        money = mPlayer.playerInfo.money;
                        this._viewUI.view_player0.txt_name.text = getMainPlayerName(mPlayer.playerInfo.nickname);
                        this._viewUI.view_player0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + mPlayer.playerInfo.headimg + ".png";
                        this._viewUI.view_player0.img_qifu.visible = mPlayer.playerInfo.qifu_endtime > this._game.sync.serverTimeBys;
                        if (this._viewUI.view_player0.img_qifu.visible && mPlayer.playerInfo.qifu_type) {
                            this._viewUI.view_player0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[mPlayer.playerInfo.qifu_type - 1] + ".png";
                        }
                        //头像框
                        this._viewUI.view_player0.img_txk.visible = mPlayer.playerInfo.vip_level > 0;
                        if (this._viewUI.view_player0.img_txk.visible) {
                            this._viewUI.view_player0.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + mPlayer.playerInfo.vip_level + ".png";
                        }
                    }
                    else {
                        money = unitOffline.GetMoney();
                        this._viewUI.view_player0.txt_name.text = getMainPlayerName(unitOffline.GetName());
                        this._viewUI.view_player0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unitOffline.GetHeadImg() + ".png";
                        this._viewUI.view_player0.img_qifu.visible = unitOffline.GetQiFuEndTime() > this._game.sync.serverTimeBys;
                        if (this._viewUI.view_player0.img_qifu.visible && unitOffline.GetQiFuType()) {
                            this._viewUI.view_player0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[unitOffline.GetQiFuType() - 1] + ".png";
                        }
                        //头像框
                        this._viewUI.view_player0.img_txk.visible = unitOffline.GetVipLevel() > 0;
                        if (this._viewUI.view_player0.img_txk.visible) {
                            this._viewUI.view_player0.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + unitOffline.GetVipLevel() + ".png";
                        }
                    }
                    money = EnumToString.getPointBackNum(money, 2);
                    this._viewUI.view_player0.txt_money.text = money.toString();
                }
            };
            //隐藏房卡模式UI
            PaodekuaiMapPage.prototype.updateCardRoomDisplayInfo = function () {
                if (!this._mapInfo)
                    return;
                if (!this._game.sceneObjectMgr.mainUnit)
                    return;
                this.onUpdateUnit();
                if (this._mapInfo.GetCardRoomId()) {
                    this.setCardRoomBtnVisible();
                }
            };
            // 房卡按纽及状态
            PaodekuaiMapPage.prototype.setCardRoomBtnVisible = function () {
                this._viewUI.view_cardroom.visible = this.isCardRoomType;
                if (!this._paodekuaiMgr.isReLogin) {
                    this._viewUI.text_cardroomid.visible = true;
                }
                this._viewUI.text_cardroomid.text = "房间号：" + this._mapInfo.GetCardRoomId();
                if (this.isCardRoomType) {
                    if (!this._paodekuaiMgr.isReLogin) {
                        this._viewUI.view_cardroom.btn_invite.visible = true;
                        this._viewUI.view_cardroom.btn_invite.x = this._paodekuaiStory.isCardRoomMaster() ? 420 : this._viewUI.view_cardroom.btn_start.x;
                        this._viewUI.view_cardroom.btn_dismiss.visible = this._paodekuaiStory.isCardRoomMaster();
                        this._viewUI.view_cardroom.btn_start.visible = this._paodekuaiStory.isCardRoomMaster();
                    }
                    else {
                        this._viewUI.view_cardroom.visible = false;
                    }
                }
                this._paodekuaiMgr.isReLogin = false;
            };
            // 房卡事件和初始界面布局
            PaodekuaiMapPage.prototype.setCardRoomBtnEvent = function (isOn) {
                if (this.isCardRoomType && isOn) {
                    this._viewUI.view_cardroom.btn_invite.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.view_cardroom.btn_start.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.view_cardroom.btn_dismiss.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                }
                else {
                    this._viewUI.view_cardroom.btn_invite.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.view_cardroom.btn_start.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.view_cardroom.btn_dismiss.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                }
            };
            // 是否可以提前终止游戏
            PaodekuaiMapPage.prototype.canEndCardGame = function () {
                if (this._isPlaying) {
                    TongyongPageDef.ins.alertRecharge(StringU.substitute("游戏中禁止退出，请先完成本轮" + this._mapInfo.GetCardRoomGameNumber() + "局游戏哦~~"), function () {
                    }, function () {
                    }, true, PathGameTongyong.ui_tongyong_general + "btn_qd.png");
                    return false;
                }
                return !this._isPlaying;
            };
            // 游戏结束 场景恢复
            PaodekuaiMapPage.prototype.setGameEnd = function () {
                this._viewUI.view_cardroom.visible = false;
                this._viewUI.text_cardroomid.visible = false;
                this._isGameEnd = true;
                this._paodekuaiMgr.resetData();
                this._paodekuaiMgr.clear();
                this.resetData();
                this._battleIndex = -1;
            };
            //地图状态
            PaodekuaiMapPage.prototype.onUpdateMapState = function () {
                if (!this._mapInfo)
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var mainIdx = mainUnit.GetIndex();
                if (mainIdx == 0)
                    return;
                this._curStatus = this._mapInfo.GetMapState();
                var betPos = this._mapInfo.GetCurrentBetPos();
                var state = this._mapInfo.GetMapState();
                var round = this._mapInfo.GetRound() + 1;
                this._viewUI.view_paixie.visible = state < 5 /* MAP_STATE_DEAL_END */;
                if (state == 4 /* MAP_STATE_DEAL */) {
                    this._viewUI.view_fapai.visible = true;
                    this._viewUI.view_fapai.ani1.play(0, true);
                }
                else {
                    this._viewUI.view_fapai.visible = false;
                    this._viewUI.view_fapai.ani1.stop();
                }
                this._viewUI.text_round.text = "局数：" + round + "/" + this._mapInfo.GetCardRoomGameNumber();
                this._isPlaying = state >= 3 /* MAP_STATE_SHUFFLE */ && state < 11 /* MAP_STATE_END */;
                if (this.isCardRoomType) {
                    if (this._isPlaying) { //隐藏下按钮
                        this._viewUI.view_cardroom.visible = false;
                        this._viewUI.text_round.visible = true;
                        this._viewUI.lab_per.visible = true;
                        this._viewUI.text_cardroomid.visible = false;
                    }
                }
                if (state == 3 /* MAP_STATE_SHUFFLE */) {
                    this._pageHandle.pushClose({ id: page_1.PaodekuaiPageDef.PAGE_PDK_CARDROOM_SETTLE, parent: this._game.uiRoot.HUD });
                    this.playDealAni();
                }
                if (state >= 5 /* MAP_STATE_DEAL_END */) {
                    if (!this._paodekuaiMgr.isShowCards) {
                        this._paodekuaiMgr.showMainCards();
                        for (var i = 1; i < this._unitCounts; i++) {
                            var seat = this.GetSeatFromUiPos(i);
                            var unit = this._game.sceneObjectMgr.getUnitByIdx(seat);
                            this._viewUI["box_count" + i].visible = unit;
                            this._viewUI["lab_count" + i].text = this._surplusCards[i];
                        }
                    }
                }
                if (state == 6 /* MAP_STATE_QIANGGUAN */) {
                    if (betPos == mainIdx) {
                        this._viewUI.box_qiang.visible = true;
                    }
                }
                else {
                    this._viewUI.box_qiang.visible = false;
                }
                if (state == 7 /* MAP_STATE_PLAYING */) {
                    this._viewUI.btn_tuoguan.visible = true;
                    if (betPos == mainIdx) {
                        this._viewUI.box_btn.visible = true;
                        this.CheckBtnStatus(mainIdx);
                    }
                    else {
                        this._viewUI.box_btn.visible = false;
                    }
                    //清除不出的提示和出的牌
                    this._paodekuaiMgr.clearPlayingCard(betPos);
                    var posIdx = (betPos - mainIdx + this._unitCounts) % this._unitCounts;
                    this._viewUI["img_tishi" + posIdx].visible = false;
                    this._viewUI["img_type" + posIdx].visible = false;
                    //如果有炸弹现结的飘字
                    if (this._clipList.length > 0) {
                        Laya.timer.once(2000, this, this.clearClip);
                    }
                }
                else {
                    this._viewUI.box_btn.visible = false;
                    this._viewUI.btn_tuoguan.visible = false;
                }
                if (state == 10 /* MAP_STATE_WAIT */) {
                    this.openSettlePage();
                    this.clearClip();
                    this.updateViewUI();
                    this.onUpdateUnit();
                    this.resetData();
                    this.clearMoneyImg();
                    this._paodekuaiMgr.resetData();
                    this._paodekuaiMgr.clear();
                }
                if (state == 8 /* MAP_STATE_SETTLE */) {
                    this.addBankerWinEff();
                    for (var i = 1; i < 4; i++) {
                        this._viewUI["view_baodan" + i].visible = false;
                    }
                }
                if (state == 11 /* MAP_STATE_END */) {
                    if (this.isCardRoomType) {
                        this.openSettlePage();
                        this.clearClip();
                        this.updateViewUI();
                        this.onUpdateUnit();
                        this.resetData();
                        this.clearMoneyImg();
                        this._paodekuaiMgr.resetData();
                        this._paodekuaiMgr.clear();
                        this._battleIndex = -1;
                    }
                }
                this._pageHandle.updatePageHandle();
                this._pageHandle.reset();
            };
            //打开结算界面
            PaodekuaiMapPage.prototype.openSettlePage = function () {
                if (this._pointTemp.length == 0)
                    return;
                if (!this._mapInfo)
                    return;
                if (!this._mainIdx)
                    return;
                var temps = [];
                var infoTemps = [];
                for (var i = 1; i < 5; i++) {
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(i);
                    var point = 0; //积分
                    for (var k = 0; k < this._pointTemp.length / 2; k++) {
                        if (i == this._pointTemp[k * 2]) {
                            point = this._pointTemp[k * 2 + 1];
                            break;
                        }
                    }
                    for (var k = 0; k < this._pointBomb.length / 2; k++) {
                        if (i == this._pointBomb[k * 2]) {
                            point = point + this._pointBomb[k * 2 + 1];
                            break;
                        }
                    }
                    var cardCount = void 0; //手牌数量
                    var posIdx = (i - this._mainIdx + this._unitCounts) % this._unitCounts;
                    for (var index = 0; index < this._surplusCards.length; index++) {
                        if (posIdx == index) {
                            var count = this._surplusCards[index];
                            if (count == 1) {
                                cardCount = count + "张(报单)";
                            }
                            else if (count == this._cardCounts) {
                                cardCount = count + "张(全关)";
                            }
                            else {
                                cardCount = count + "张";
                            }
                            break;
                        }
                    }
                    if (unit) {
                        var obj = {
                            isMain: this._game.sceneObjectMgr.mainUnit.GetIndex() == i,
                            name: unit.GetName(),
                            point: point,
                            totalPoint: EnumToString.getPointBackNum(unit.GetMoney(), 2),
                            cardCount: cardCount,
                            multiple: this._qiangCount * 2 + 1,
                        };
                        temps.push(obj);
                    }
                }
                infoTemps.push(this._mapInfo.GetRound() + 1);
                infoTemps.push(this._mapInfo.GetCardRoomGameNumber());
                infoTemps.push(temps);
                this._pageHandle.pushOpen({ id: page_1.PaodekuaiPageDef.PAGE_PDK_CARDROOM_SETTLE, dataSource: infoTemps, parent: this._game.uiRoot.HUD });
            };
            //更新倒计时时间戳
            PaodekuaiMapPage.prototype.updateCountDown = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._countDown = mapinfo.GetCountDown();
                if (!mapinfo)
                    return;
            };
            //操作倒计时
            PaodekuaiMapPage.prototype.deltaUpdate = function () {
                if (!(this._game.sceneObjectMgr.mapInfo instanceof PaodekuaiMapInfo))
                    return;
                if (!this._viewUI)
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                if (!this._mainIdx) {
                    this._mainIdx = mainUnit.GetIndex();
                }
                if (this._mainIdx == 0)
                    return;
                if (this._curStatus != 7 /* MAP_STATE_PLAYING */ && this._curStatus != 6 /* MAP_STATE_QIANGGUAN */) {
                    this._viewUI.view_time.visible = false;
                    this._viewUI.view_time.ani1.gotoAndStop(24);
                    return;
                }
                var betPos = this._mapInfo.GetCurrentBetPos();
                var posIdx = (betPos - this._mainIdx + this._unitCounts) % this._unitCounts;
                var temp = [];
                if (this._guanShang == 0) {
                    if (this._unitCounts == 4) {
                        temp = [[640, 430], [1111, 223], [626, 59], [168, 223]];
                    }
                    else if (this._unitCounts == 3) {
                        temp = [[640, 430], [1111, 223], [168, 223]];
                    }
                }
                else if (this._guanShang == 1) {
                    if (this._unitCounts == 4) {
                        temp = [[640, 490], [1111, 223], [626, 59], [168, 223]];
                    }
                    else if (this._unitCounts == 3) {
                        temp = [[640, 490], [1111, 223], [168, 223]];
                    }
                }
                this._viewUI.view_time.x = temp[posIdx][0];
                this._viewUI.view_time.y = temp[posIdx][1];
                var curTime = this._game.sync.serverTimeBys;
                var time = Math.floor(this._countDown - curTime);
                if (time > 0) {
                    this._viewUI.view_time.visible = true;
                    this._viewUI.view_time.txt_time.text = time.toString();
                    if (time == 3 && !this._viewUI.view_time.ani1.isPlaying) {
                        this._viewUI.view_time.ani1.play(1, true);
                    }
                }
                else {
                    this._viewUI.view_time.visible = false;
                    this._viewUI.view_time.ani1.gotoAndStop(24);
                }
            };
            //各种特殊牌效果播完
            PaodekuaiMapPage.prototype.onPlayAniOver = function (view) {
                view.ani1.off(LEvent.COMPLETE, this, this.onPlayAniOver);
                view.ani1.gotoAndStop(1);
                this._viewUI.box_view.removeChild(view);
            };
            //战斗日志
            PaodekuaiMapPage.prototype.updateBattledInfo = function () {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var battleInfoMgr = this._mapInfo.battleInfoMgr;
                var mainIdx = mainUnit.GetIndex();
                if (mainIdx == 0)
                    return;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    var posIdx = (battleInfo.SeatIndex - mainIdx + this._unitCounts) % this._unitCounts;
                    switch (battleInfo.Type) {
                        case 3: { //出牌
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var idx = info.SeatIndex;
                                var cards = [];
                                if (posIdx == 1) {
                                    for (var k = info.Cards.length - 1; k >= 0; k--) {
                                        cards.push(info.Cards[k]);
                                    }
                                }
                                else {
                                    cards = info.Cards;
                                }
                                this._paodekuaiMgr.playingCard(idx, cards);
                                if (idx == mainIdx) {
                                    this._chooseCards = [];
                                    this._promptHitCount = 0;
                                }
                                this._viewUI["img_tishi" + posIdx].visible = false;
                                this._surplusCards[posIdx] = this._surplusCards[posIdx] - info.Cards.length;
                                if (posIdx > 0) {
                                    this._viewUI["box_count" + posIdx].visible = true;
                                    this._viewUI["lab_count" + posIdx].text = this._surplusCards[posIdx];
                                }
                                var type = info.CardType;
                                if (type >= 9) {
                                    type = 7;
                                }
                                if (type > 2) { //单张和对子不显示牌型
                                    if (posIdx == 1) {
                                        if (type == 7) {
                                            this._viewUI.img_type1.x = -50;
                                        }
                                        else {
                                            this._viewUI.img_type1.x = 40;
                                        }
                                    }
                                    if (!this._paodekuaiMgr.isReLogin) {
                                        //各种特效
                                        if (type == 7) { //飞机特效
                                            //播飞机特效
                                            if (this._feijiView.ani1.isPlaying) {
                                                this._feijiView.ani1.gotoAndStop(1);
                                                this._feijiView.ani1.play(1, false);
                                            }
                                            else {
                                                this._viewUI.box_view.addChild(this._feijiView);
                                                this._feijiView.ani1.on(LEvent.COMPLETE, this, this.onPlayAniOver, [this._feijiView]);
                                                this._feijiView.ani1.play(1, false);
                                            }
                                        }
                                        else if (type == 5) { //炸弹特效
                                            if (this._bombView.ani1.isPlaying) {
                                                this._bombView.ani1.gotoAndStop(1);
                                                this._bombView.ani1.play(1, false);
                                            }
                                            else {
                                                this._viewUI.box_view.addChild(this._bombView);
                                                this._bombView.ani1.on(LEvent.COMPLETE, this, this.onPlayAniOver, [this._bombView]);
                                                this._bombView.ani1.play(1, false);
                                            }
                                        }
                                        else if (type == 4) { //顺子特效
                                            if (this._shunZiView.ani1.isPlaying) {
                                                this._shunZiView.ani1.gotoAndStop(1);
                                                this._shunZiView.ani1.play(1, false);
                                            }
                                            else {
                                                this._viewUI.box_view.addChild(this._shunZiView);
                                                this._shunZiView.ani1.on(LEvent.COMPLETE, this, this.onPlayAniOver, [this._shunZiView]);
                                                this._shunZiView.ani1.play(1, false);
                                            }
                                        }
                                    }
                                    this._viewUI["img_type" + posIdx].visible = true;
                                    this._viewUI["img_type" + posIdx].skin = Path_game_paodekuai.ui_paodekuai + "paodekuai/px_" + type + ".png";
                                }
                                else {
                                    this._viewUI["img_type" + posIdx].visible = false;
                                }
                                if (!this._paodekuaiMgr.isReLogin) {
                                    var unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                                    if (unit) {
                                        var headNum = parseInt(unit.GetHeadImg());
                                        var sexType = headNum > 10 ? "nv" : "nan";
                                        var str = void 0;
                                        if (type <= 2) {
                                            str = Path_game_paodekuai.music_paodekuai + sexType + "_" + type + "_" + info.Val + ".mp3";
                                        }
                                        else if (type > 2) {
                                            str = Path_game_paodekuai.music_paodekuai + sexType + "_" + type + ".mp3";
                                        }
                                        this._game.playSound(str, false);
                                    }
                                }
                                this._playCardsConfig.player = info.SeatIndex;
                                this._playCardsConfig.card_type = info.CardType;
                                this._playCardsConfig.card_len = info.Len;
                                this._playCardsConfig.max_val = info.Val;
                                this._viewUI.view_time.visible = false;
                                this._viewUI.view_time.ani1.gotoAndStop(24);
                            }
                            break;
                        }
                        case 1: { //过牌
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var idx = info.SeatIndex;
                                this._viewUI["img_tishi" + posIdx].visible = true;
                                this._viewUI["img_type" + posIdx].visible = false;
                                if (idx == mainIdx) {
                                    this._promptHitCount = 0;
                                }
                                this._paodekuaiMgr.clearPlayingCard(idx);
                                if (!this._paodekuaiMgr.isReLogin) {
                                    var unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                                    if (unit) {
                                        var headNum = parseInt(unit.GetHeadImg());
                                        var sexType = headNum > 10 ? "nv" : "nan";
                                        var musicType = 1;
                                        if (this._guanShang == 1) {
                                            musicType = 4;
                                        }
                                        else if (this._guanShang == 0) {
                                            musicType = MathU.randomRange(1, 4);
                                        }
                                        this._game.playSound(Path_game_paodekuai.music_paodekuai + sexType + "_pass" + musicType + ".mp3", false);
                                    }
                                }
                                this._viewUI.view_time.visible = false;
                            }
                            break;
                        }
                        case 7: { //先手
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var idx = info.SeatIndex;
                                for (var k = 0; k < this._unitCounts; k++) {
                                    if (posIdx == k) {
                                        this._viewUI["img_first" + k].visible = true;
                                    }
                                    else {
                                        this._viewUI["img_first" + k].visible = false;
                                    }
                                }
                            }
                            break;
                        }
                        case 10: { //抢关
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var idx = info.SeatIndex;
                                if (info.BetVal == 1) {
                                    for (var k = 0; k < this._unitCounts; k++) {
                                        if (posIdx == k) {
                                            this._viewUI["img_first" + k].visible = true;
                                        }
                                        else {
                                            this._viewUI["img_first" + k].visible = false;
                                        }
                                    }
                                    this._qiangCount = this._qiangCount + 1;
                                    var per = this._qiangCount * 2 + 1;
                                    this._viewUI.lab_per.text = "倍数：" + per;
                                }
                                if (idx == mainIdx) {
                                    this._viewUI.box_qiang.visible = false;
                                }
                                if (!this._paodekuaiMgr.isReLogin) {
                                    var unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                                    if (unit) {
                                        var headNum = parseInt(unit.GetHeadImg());
                                        var sexType = headNum > 10 ? "nv" : "nan";
                                        var musicType = info.BetVal == 1 ? "_woqiang" : "_buqiang";
                                        var str = void 0;
                                        str = Path_game_paodekuai.music_paodekuai + sexType + musicType + ".mp3";
                                        this._game.playSound(str, false);
                                    }
                                }
                            }
                            break;
                        }
                        case 33: { //报单
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var idx = info.SeatIndex;
                                if (idx != mainIdx) {
                                    this._viewUI["view_baodan" + posIdx].visible = true;
                                }
                                if (!this._paodekuaiMgr.isReLogin) {
                                    var unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                                    if (unit) {
                                        var headNum = parseInt(unit.GetHeadImg());
                                        var sexType = headNum > 10 ? "nv" : "nan";
                                        this._game.playSound(Path_game_paodekuai.music_paodekuai + sexType + "_yizhang.mp3", false);
                                    }
                                }
                            }
                            break;
                        }
                        case 12: { //全关
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var idx = info.SeatIndex;
                                this._viewUI["img_quanguan" + posIdx].visible = true;
                            }
                            break;
                        }
                        case 11: { //结算
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                if (info.SettleVal > 0) {
                                    this._winerPos.push(posIdx);
                                }
                                else {
                                    this._settleLoseInfo.push(posIdx);
                                }
                                if (info.SeatIndex == mainIdx) {
                                    this._moneyChange = info.SettleVal;
                                }
                                this.addMoneyClip(info.SettleVal, info.SeatIndex);
                                //存下结算数据
                                this._pointTemp.push(info.SeatIndex);
                                this._pointTemp.push(info.SettleVal);
                            }
                            break;
                        }
                        case 37: { //炸弹现结
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                this.addMoneyClip(info.SpecialVal, info.SeatIndex);
                                //存下结算数据
                                this._pointBomb.push(info.SeatIndex);
                                this._pointBomb.push(info.SpecialVal);
                            }
                            break;
                        }
                        case 24: { //摊牌
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var idx = info.SeatIndex;
                                for (var k = 1; k < this._unitCounts + 1; k++) {
                                    this._paodekuaiMgr.clearPlayingCard(k);
                                }
                                if (idx != mainIdx) {
                                    var cards = [];
                                    if (posIdx == 1) {
                                        for (var k = info.Cards.length - 1; k >= 0; k--) {
                                            cards.push(info.Cards[k]);
                                        }
                                    }
                                    else {
                                        cards = info.Cards;
                                    }
                                    this._paodekuaiMgr.showCards(idx, cards);
                                }
                                this._viewUI["img_tishi" + posIdx].visible = false;
                                this._viewUI["img_type" + posIdx].visible = false;
                            }
                            break;
                        }
                    }
                }
            };
            //重连之后，战斗日志从哪开始刷
            PaodekuaiMapPage.prototype.resetBattleIdx = function () {
                //不是房卡模式，就不用算
                if (!this.isCardRoomType)
                    return;
                var battleInfoMgr = this._mapInfo.battleInfoMgr;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    if (battleInfo.Type == 24) {
                        this._battleIndex = i;
                    }
                }
            };
            //出牌判断
            PaodekuaiMapPage.prototype.checkPlayCard = function (type, length, val) {
                if (this._playCardsConfig.player > 0) {
                    if (type == 5) { //炸弹
                        if (this._playCardsConfig.card_type == 5) {
                            if (val <= this._playCardsConfig.max_val)
                                return false;
                        }
                    }
                    else {
                        if (this._playCardsConfig.player != this._mainIdx) { //说明上次出牌不是你大的
                            //牌型要一致
                            if (type != this._playCardsConfig.card_type)
                                return false;
                            //值要比上家大
                            if (val <= this._playCardsConfig.max_val)
                                return false;
                            //判断牌的长度
                            if (type == 1 || type == 2 || type == 4 || type == 6) {
                                if (length != this._playCardsConfig.card_len)
                                    return false;
                            }
                            else {
                                //出的牌多了
                                if (length > this._playCardsConfig.card_len) {
                                    return false;
                                }
                                else if (length < this._playCardsConfig.card_len) {
                                    //判断下是不是最后几张
                                    var count = this._surplusCards[0];
                                    if (length != count)
                                        return false;
                                }
                            }
                        }
                    }
                }
                return true;
            };
            //点牌
            PaodekuaiMapPage.prototype.onClickCards = function (hitAvatar) {
                var card = hitAvatar.card; //点中的那张牌 
                if (card._isPlaying)
                    return; //打出去的牌不能点
                var mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                if (card.toggle) {
                    this._chooseCards.push(card);
                    this._paodekuaiMgr.SortCards(this._chooseCards);
                    // if (this._playCardsConfig.player == 0 || this._playCardsConfig.player == mainIdx) {
                    //     this.ClickCardRelevance();
                    // }
                }
                else {
                    var index = this._chooseCards.indexOf(card);
                    this._chooseCards.splice(index, 1);
                }
                this.CheckBtnChuPai();
            };
            //点击第二张和第四张联想出三带二和飞机
            PaodekuaiMapPage.prototype.ClickCardRelevance = function () {
                //只有点出第二张和第四张才会有
                var length = this._chooseCards.length;
                if (length != 2)
                    return;
                var szTemp = this._paodekuaiMgr.findShunZi(this._paodekuaiMgr.allCards);
                var copyCards = [];
                this._paodekuaiMgr.copyTalbe(this._paodekuaiMgr.allCards, copyCards);
                //选中的牌必须是单张
                var temp = this._paodekuaiMgr.findDuiZi(copyCards);
                var isExist;
                for (var i = 0; i < this._chooseCards.length; i++) {
                    isExist = false;
                    for (var k = 0; k < copyCards.length; k++) {
                        if (this._chooseCards[i].GetVal() == copyCards[k].GetVal()) {
                            isExist = true;
                            break;
                        }
                    }
                    if (!isExist)
                        return;
                }
                //选中的几张不是一个顺子的
                var existCount = 0;
                for (var i_1 = 0; i_1 < szTemp.length; i_1++) {
                    var temp_1 = szTemp[i_1];
                    existCount = 0; //换了一个顺子，数量清零
                    for (var j = 0; j < this._chooseCards.length; j++) {
                        for (var k_1 = 0; k_1 < temp_1.length; k_1++) {
                            if (this._chooseCards[j].GetCardVal() == temp_1[k_1].GetCardVal()) {
                                existCount++;
                                break;
                            }
                        }
                    }
                }
                //选了2张
                var cards = [];
                this._paodekuaiMgr.copyTalbe(this._paodekuaiMgr.allCards, cards);
                if (length == 2) {
                    if (existCount == 2)
                        return; //在同一个顺子里
                    var stTemp = this._paodekuaiMgr.findSanZhang(cards);
                    if (stTemp.length != 1)
                        return; //只有一个三条的时候，才需要联想
                    if (stTemp[0].length != 3)
                        return; //这个是炸弹
                    for (var i_2 = 0; i_2 < stTemp[0].length; i_2++) {
                        for (var k_2 = 0; k_2 < this._paodekuaiMgr.allCards.length; k_2++) {
                            var card = this._paodekuaiMgr.allCards[k_2];
                            if (card.GetVal() == stTemp[0][i_2].GetVal()) {
                                if (!card.toggle) {
                                    card.toggle = true;
                                    this._chooseCards.push(card);
                                }
                                break;
                            }
                        }
                    }
                    this._paodekuaiMgr.SortCards(this._chooseCards);
                }
            };
            //滑动选牌
            PaodekuaiMapPage.prototype.onChooseCards = function () {
                this._chooseCards = [];
                //挑出选中的牌
                for (var i = 0; i < this._paodekuaiMgr.allCards.length; i++) {
                    var card = this._paodekuaiMgr.allCards[i];
                    if (card.toggle) {
                        this._chooseCards.push(card);
                        this._paodekuaiMgr.SortCards(this._chooseCards);
                    }
                }
                var cards = [];
                this._paodekuaiMgr.copyTalbe(this._chooseCards, cards);
                //把所有的牌归位
                for (var i = 0; i < this._paodekuaiMgr.allCards.length; i++) {
                    var card = this._paodekuaiMgr.allCards[i];
                    card.toggle = false;
                }
                //有选中牌的话
                if (cards.length > 0) {
                    this.FreePlayCard(cards);
                }
                //把选中的牌上移
                for (var i = 0; i < this._chooseCards.length; i++) {
                    for (var k = 0; k < this._paodekuaiMgr.allCards.length; k++) {
                        var card = this._paodekuaiMgr.allCards[k];
                        if (card.GetVal() == this._chooseCards[i].GetVal()) {
                            if (!card.toggle) {
                                card.toggle = true;
                            }
                            break;
                        }
                    }
                }
                this.CheckBtnChuPai();
            };
            //移动选牌，自由出牌
            PaodekuaiMapPage.prototype.FreePlayCard = function (cards) {
                var playCards = [];
                if (playCards.length == 0) { //找下3连飞机
                    var temp = this._paodekuaiMgr.promptBtn(cards, 9, cards.length, 1, true);
                    if (temp.length > 0) {
                        playCards = temp[0];
                    }
                }
                if (playCards.length == 0) { //找下2连飞机
                    var temp = this._paodekuaiMgr.promptBtn(cards, 7, cards.length, 1, true);
                    if (temp.length > 0) {
                        playCards = temp[0];
                    }
                }
                if (playCards.length == 0) { //连对
                    var temp = this._paodekuaiMgr.promptBtn(cards, 6, cards.length, 1, true);
                    if (temp.length > 0) {
                        playCards = temp[0];
                    }
                }
                if (playCards.length == 0) { //顺子
                    var temp1 = this._paodekuaiMgr.findShunZi(cards);
                    if (temp1.length > 0) {
                        playCards = temp1[0];
                    }
                }
                if (playCards.length > 0) {
                    this._chooseCards = [];
                    for (var i = 0; i < playCards.length; i++) {
                        for (var k = 0; k < this._paodekuaiMgr.allCards.length; k++) {
                            var card = this._paodekuaiMgr.allCards[k];
                            if (card.GetVal() == playCards[i].GetVal()) {
                                if (!card.toggle) {
                                    this._chooseCards.push(card);
                                    this._paodekuaiMgr.SortCards(this._chooseCards);
                                }
                                break;
                            }
                        }
                    }
                }
            };
            //提示按钮
            PaodekuaiMapPage.prototype.ClickBtnTiShi = function () {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                //先整理下牌
                for (var i = 0; i < this._paodekuaiMgr.allCards.length; i++) {
                    var card = this._paodekuaiMgr.allCards[i];
                    card.toggle = false;
                }
                this._chooseCards = [];
                var mainIdx = mainUnit.GetIndex();
                if (this._playCardsConfig.card_type == 0 || this._playCardsConfig.player == mainIdx) {
                    if (this._paodekuaiMgr.allCards.length == 0)
                        return;
                    var val = this._paodekuaiMgr.allCards[this._paodekuaiMgr.allCards.length - 1].GetCardVal();
                    var count = 0;
                    for (var i = 0; i < this._paodekuaiMgr.allCards.length; i++) {
                        if (val == this._paodekuaiMgr.allCards[i].GetCardVal()) {
                            count++;
                        }
                    }
                    for (var i = 0; i < count; i++) {
                        var card = this._paodekuaiMgr.allCards[this._paodekuaiMgr.allCards.length - (1 + i)];
                        if (!card.toggle) {
                            card.toggle = true;
                            this._chooseCards.push(card);
                            this._paodekuaiMgr.SortCards(this._chooseCards);
                        }
                    }
                }
                else {
                    var allcards = this._paodekuaiMgr.promptBtn(this._paodekuaiMgr.allCards, this._playCardsConfig.card_type, this._playCardsConfig.card_len, this._playCardsConfig.max_val, false);
                    if (allcards.length > 0) {
                        //点击次数超出最大了，那就从0开始
                        this._promptHitCount = this._promptHitCount >= allcards.length ? 0 : this._promptHitCount;
                        var cards = allcards[this._promptHitCount];
                        this._promptHitCount++;
                        for (var i = 0; i < cards.length; i++) {
                            for (var k = 0; k < this._paodekuaiMgr.allCards.length; k++) {
                                var card = this._paodekuaiMgr.allCards[k];
                                if (card.GetVal() == cards[i].GetVal()) {
                                    if (!card.toggle) {
                                        card.toggle = true;
                                        this._chooseCards.push(card);
                                        this._paodekuaiMgr.SortCards(this._chooseCards);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                }
                this.CheckBtnChuPai();
            };
            //选完牌之后，校验出牌按钮状态
            PaodekuaiMapPage.prototype.CheckBtnChuPai = function () {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var mainIdx = mainUnit.GetIndex();
                //没有发牌权
                if (this._playCardsConfig.player != mainIdx && this._playCardsConfig.player != 0) {
                    var cards = this._paodekuaiMgr.promptBtn(this._paodekuaiMgr.allCards, this._playCardsConfig.card_type, this._playCardsConfig.card_len, this._playCardsConfig.max_val, false);
                    if (cards.length == 0)
                        return;
                }
                var type = this._paodekuaiMgr.checkCardsType(this._chooseCards);
                if (type == 0) {
                    this._viewUI.btn_chupai.mouseEnabled = false;
                    this._viewUI.img_chupai.visible = true;
                }
                else {
                    if (!this.checkPlayCard(type, this._chooseCards.length, this._paodekuaiMgr.maxCardVal)) {
                        this._viewUI.btn_chupai.mouseEnabled = false;
                        this._viewUI.img_chupai.visible = true;
                    }
                    else {
                        this._viewUI.btn_chupai.mouseEnabled = true;
                        this._viewUI.img_chupai.visible = false;
                    }
                }
            };
            //轮到自己时，按钮状态
            PaodekuaiMapPage.prototype.CheckBtnStatus = function (mainIdx) {
                if (this._playCardsConfig.player == mainIdx || this._playCardsConfig.card_type == 0) { //有发牌权
                    this._viewUI.img_pass.visible = true;
                    this._viewUI.btn_pass.mouseEnabled = false;
                    this._viewUI.img_tishi.visible = false;
                    this._viewUI.btn_tishi.visible = true;
                    this._viewUI.btn_tishi.mouseEnabled = true;
                    this._viewUI.img_chupai.visible = true;
                    this._viewUI.btn_chupai.visible = true;
                    this._viewUI.btn_chupai.mouseEnabled = false;
                    var type = this._paodekuaiMgr.checkCardsType(this._chooseCards);
                    if (type == 0) { //选的牌不对
                        for (var i = 0; i < this._paodekuaiMgr.allCards.length; i++) {
                            var card = this._paodekuaiMgr.allCards[i];
                            card.toggle = false;
                        }
                        this._chooseCards = [];
                        this._viewUI.btn_chupai.mouseEnabled = false;
                        this._viewUI.img_chupai.visible = true;
                    }
                    else {
                        this._viewUI.btn_chupai.mouseEnabled = true;
                        this._viewUI.img_chupai.visible = false;
                    }
                }
                else {
                    //手里的牌
                    var cards = this._paodekuaiMgr.promptBtn(this._paodekuaiMgr.allCards, this._playCardsConfig.card_type, this._playCardsConfig.card_len, this._playCardsConfig.max_val, false);
                    var result = cards.length > 0 ? true : false;
                    this._viewUI.btn_tishi.mouseEnabled = result;
                    this._viewUI.img_tishi.visible = !result;
                    if (this._guanShang == 1) {
                        this._viewUI.img_tishi.visible = false;
                        this._viewUI.btn_pass.mouseEnabled = !result;
                        this._viewUI.btn_chupai.visible = result;
                        this._viewUI.img_chupai.visible = result;
                        this._viewUI.btn_tishi.visible = result;
                    }
                    else if (this._guanShang == 0) {
                        this._viewUI.btn_pass.mouseEnabled = true;
                        this._viewUI.img_pass.visible = false;
                    }
                    //选中的牌
                    var choose = this._paodekuaiMgr.promptBtn(this._chooseCards, this._playCardsConfig.card_type, this._playCardsConfig.card_len, this._playCardsConfig.max_val, false);
                    if (choose.length == 0) { //不能出的牌
                        for (var i = 0; i < this._paodekuaiMgr.allCards.length; i++) {
                            var card = this._paodekuaiMgr.allCards[i];
                            card.toggle = false;
                        }
                        this._chooseCards = [];
                        this._viewUI.btn_chupai.mouseEnabled = false;
                        this._viewUI.img_chupai.visible = this._viewUI.btn_chupai.visible;
                    }
                    else {
                        this._viewUI.btn_chupai.mouseEnabled = true;
                        this._viewUI.img_chupai.visible = false;
                    }
                }
                if (this._guanShang == 1) {
                    this._viewUI.btn_pass.visible = false;
                    this._viewUI.img_pass.visible = false;
                }
            };
            //UI的位置转为座位
            PaodekuaiMapPage.prototype.GetSeatFromUiPos = function (pos) {
                var seat = 0;
                var mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var posIdx = (pos + mainIdx) % this._unitCounts;
                seat = posIdx == 0 ? this._unitCounts : posIdx;
                return seat;
            };
            //飘钱
            PaodekuaiMapPage.prototype.addBankerWinEff = function () {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                if (!this._mainIdx)
                    return;
                if (this._settleLoseInfo.length < 1)
                    return;
                if (this._winerPos.length < 1)
                    return;
                for (var i = 0; i < this._winerPos.length; i++) {
                    if (this._winerPos[i] == 0) {
                        this.settleSound();
                    }
                }
                for (var i = 0; i < this._settleLoseInfo.length; i++) {
                    if (this._settleLoseInfo[i] == 0) {
                        this.settleSound();
                    }
                }
                if (this._winerPos.length == 1) { //抢关的人赢了
                    for (var i = 0; i < this._settleLoseInfo.length; i++) {
                        var unitPos = this._settleLoseInfo[i];
                        this.addMoneyFly(unitPos, this._winerPos[0]);
                    }
                }
                else if (this._settleLoseInfo.length == 1) { //抢关的人输了
                    for (var i = 0; i < this._winerPos.length; i++) {
                        var unitPos = this._winerPos[i];
                        this.addMoneyFly(this._settleLoseInfo[0], unitPos);
                    }
                }
            };
            //结算音效
            PaodekuaiMapPage.prototype.settleSound = function () {
                var _this = this;
                var timeInternal = MONEY_NUM * MONEY_FLY_TIME;
                Laya.timer.once(timeInternal, this, function () {
                    var maxRan = _this._moneyChange >= 0 ? 3 : 4;
                    var musicType = MathU.randomRange(1, maxRan);
                    var str = _this._moneyChange >= 0 ? "win" : "lose";
                    _this._game.playSound(PathGameTongyong.music_tongyong + str + musicType + ".mp3", true);
                });
            };
            //金币变化 飘金币特效
            PaodekuaiMapPage.prototype.addMoneyFly = function (fromPos, tarPos) {
                if (!this._game.mainScene || !this._game.mainScene.camera)
                    return;
                var fromX = this._game.mainScene.camera.getScenePxByCellX(this._headPos[fromPos][0]);
                var fromY = this._game.mainScene.camera.getScenePxByCellY(this._headPos[fromPos][1]);
                var tarX = this._game.mainScene.camera.getScenePxByCellX(this._headPos[tarPos][0]);
                var tarY = this._game.mainScene.camera.getScenePxByCellY(this._headPos[tarPos][1]);
                var _loop_2 = function (i) {
                    var posBeginX = MathU.randomRange(fromX + 23, fromX + 70);
                    var posBeginY = MathU.randomRange(fromY + 23, fromY + 70);
                    var posEndX = MathU.randomRange(tarX + 23, tarX + 65);
                    var posEndY = MathU.randomRange(tarY + 23, tarY + 65);
                    var moneyImg = new LImage(PathGameTongyong.ui_tongyong_general + "icon_money.png");
                    moneyImg.scale(0.7, 0.7);
                    if (!moneyImg.parent)
                        this_2._viewUI.addChild(moneyImg);
                    moneyImg.pos(posBeginX, posBeginY);
                    // Laya.Bezier 贝塞尔曲线  取得点
                    Laya.Tween.to(moneyImg, { x: posEndX }, i * MONEY_FLY_TIME, null);
                    Laya.Tween.to(moneyImg, { y: posEndY }, i * MONEY_FLY_TIME, null, Handler.create(this_2, function () {
                        moneyImg.removeSelf();
                    }));
                };
                var this_2 = this;
                for (var i = 0; i < MONEY_NUM; i++) {
                    _loop_2(i);
                }
            };
            //金币变化 飘字clip
            PaodekuaiMapPage.prototype.addMoneyClip = function (value, pos) {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var idx = mainUnit.GetIndex();
                var valueClip = value >= 0 ? new PaodekuaiClip(PaodekuaiClip.ADD_MONEY_FONT) : new PaodekuaiClip(PaodekuaiClip.SUB_MONEY_FONT);
                var preSkin = value >= 0 ? PathGameTongyong.ui_tongyong_general + "tu_jia.png" : PathGameTongyong.ui_tongyong_general + "tu_jian.png";
                valueClip.scale(0.8, 0.8);
                valueClip.anchorX = 0.5;
                var moneyStr = EnumToString.getPointBackNum(Math.abs(value), 2);
                valueClip.setText(moneyStr + "", true, false, preSkin);
                var index = (pos - idx + this._unitCounts) % this._unitCounts;
                var posX = this._headPos[index][0] + 50;
                var posY = this._headPos[index][1] + 50;
                var deep = this._viewUI.img_menu.parent.getChildIndex(this._viewUI.img_menu);
                if (!valueClip.parent)
                    this._viewUI.box_view.addChildAt(valueClip, deep);
                valueClip.pos(posX, posY);
                this._clipList.push(valueClip);
                Laya.Tween.clearAll(valueClip);
                Laya.Tween.to(valueClip, { y: posY - 80 }, 1000);
            };
            //清理飘钱动画
            PaodekuaiMapPage.prototype.clearClip = function () {
                if (this._clipList && this._clipList.length) {
                    for (var i = 0; i < this._clipList.length; i++) {
                        var clip = this._clipList[i];
                        clip.removeSelf();
                        clip.destroy();
                        clip = null;
                    }
                }
                this._clipList = [];
            };
            //清理金币
            PaodekuaiMapPage.prototype.clearMoneyImg = function () {
                if (this._moneyImg.length > 0) {
                    for (var i = 0; i < this._moneyImg.length; i++) {
                        var moneyImg = this._moneyImg[i];
                        moneyImg.removeSelf();
                    }
                }
                this._moneyImg = [];
            };
            //算下几个人了
            PaodekuaiMapPage.prototype.getUnitCount = function () {
                var count = 0;
                var unitDic = this._game.sceneObjectMgr.unitDic;
                if (unitDic) {
                    for (var key in unitDic) {
                        count++;
                    }
                }
                return count;
            };
            PaodekuaiMapPage.prototype.onOptHandler = function (optcode, msg) {
                var _this = this;
                if (msg.type == Operation_Fields.OPRATE_GAME) {
                    switch (msg.reason) {
                        case Operation_Fields.OPRATE_GAME_QIFU_SUCCESS_RESULT:
                            var dataInfo_1 = JSON.parse(msg.data);
                            //打开祈福动画界面
                            this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU_ANI, function (page) {
                                page.dataSource = StringU.substitute(PathGameTongyong.ui_tongyong_qifu + "f_{0}1.png", _this._nameStrInfo[dataInfo_1.msg.qf_id - 1]);
                            });
                            //相对应的玩家精灵做出反应
                            this._qifuTypeImgUrl = StringU.substitute(PathGameTongyong.ui_tongyong_qifu + "f_{0}2.png", this._nameStrInfo[dataInfo_1.msg.qf_id - 1]);
                            this.onUpdateUnit(dataInfo_1.qifu_index);
                            break;
                    }
                }
                else if (msg.type == Operation_Fields.OPRATE_TELEPORT) {
                    switch (msg.reason) {
                        case Operation_Fields.OPRATE_TELEPORT_MAP_CREATE_ROOM_SUCCESS: //在地图中重新创建房间成功
                            this.resetData();
                            this.clearClip();
                            this.clearMoneyImg();
                            this._battleIndex = -1;
                            this._game.sceneObjectMgr.clearOfflineObject();
                            break;
                    }
                }
            };
            Object.defineProperty(PaodekuaiMapPage.prototype, "isCardRoomType", {
                get: function () {
                    return this._paodekuaiStory instanceof gamecomponent.story.StoryRoomCardBase;
                },
                enumerable: true,
                configurable: true
            });
            //房卡模式，开始游戏
            PaodekuaiMapPage.prototype.setCardGameStart = function () {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                if (!mapinfo)
                    return;
                if (mapinfo.GetPlayState())
                    return;
                if (mainUnit.GetRoomMaster() != 1) {
                    TongyongPageDef.ins.alertRecharge(StringU.substitute("只有房主才可以选择开始游戏哦"), function () {
                    }, function () {
                    }, true, PathGameTongyong.ui_tongyong_general + "btn_qd.png");
                    return;
                }
                if (this.getUnitCount() < this._unitCounts) {
                    TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，再等等嘛，需要" + this._unitCounts + "个人才可以开始"), function () {
                    }, function () {
                    }, true, PathGameTongyong.ui_tongyong_general + "btn_qd.png");
                    return;
                }
                this._paodekuaiStory.startRoomCardGame(mainUnit.guid, this._mapInfo.GetCardRoomId());
            };
            // 房卡模式解散游戏,是否需要房主限制
            PaodekuaiMapPage.prototype.masterDismissCardGame = function () {
                var _this = this;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                if (mainUnit.GetRoomMaster() != 1) {
                    TongyongPageDef.ins.alertRecharge(StringU.substitute("只有房主才可以解散房间哦"), function () {
                    }, function () {
                    }, true, PathGameTongyong.ui_tongyong_general + "btn_qd.png");
                }
                else {
                    if (!this._isGameEnd) {
                        TongyongPageDef.ins.alertRecharge("游戏未开始，解散房间不会扣除金币！\n是否解散房间？", function () {
                            _this._paodekuaiStory.endRoomCardGame(mainUnit.GetIndex(), _this._mapInfo.GetCardRoomId());
                            _this._game.sceneObjectMgr.leaveStory();
                        }, null, false, PathGameTongyong.ui_tongyong_general + "btn_tx.png");
                    }
                }
            };
            //重置数据
            PaodekuaiMapPage.prototype.resetData = function () {
                //不是房卡模式，才会去设置
                if (!this.isCardRoomType) {
                    this._battleIndex = -1;
                }
                this._paodekuaiMgr.isReLogin = false;
                this._paodekuaiMgr.isReDealCard = false;
                this._winerPos = [];
                this._settleLoseInfo = [];
                this._pointTemp = [];
                this._surplusCards = [this._cardCounts, this._cardCounts, this._cardCounts, this._cardCounts];
                this._playCardsConfig.player = 0;
                this._playCardsConfig.card_type = 0;
                this._playCardsConfig.card_len = 0;
                this._playCardsConfig.max_val = 0;
                this._moneyChange = 0;
                this._pointBomb = [];
                this._qiangCount = 0;
                this._chooseCards = [];
                this._promptHitCount = 0;
            };
            PaodekuaiMapPage.prototype.clearMapInfoListen = function () {
                this._game.sceneObjectMgr.off(PaodekuaiMapInfo.EVENT_PDK_STATUS_CHECK, this, this.onUpdateMapState);
                this._game.sceneObjectMgr.off(PaodekuaiMapInfo.EVENT_PDK_BATTLE_CHECK, this, this.updateBattledInfo);
                this._game.sceneObjectMgr.off(PaodekuaiMapInfo.EVENT_PDK_COUNT_DOWN, this, this.updateCountDown); //倒计时更新
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE, this, this.updateCardRoomDisplayInfo);
                Laya.timer.clearAll(this);
                Laya.Tween.clearAll(this);
            };
            //清理特殊牌效果
            PaodekuaiMapPage.prototype.clearCardsView = function () {
                this._feijiView.removeSelf();
                this._feijiView.destroy();
                this._feijiView = null;
                this._bombView.removeSelf();
                this._bombView.destroy();
                this._bombView = null;
                this._shunZiView.removeSelf();
                this._shunZiView.destroy();
                this._shunZiView = null;
            };
            PaodekuaiMapPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_menu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_back.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_cardtype.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_rules.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_set.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_record.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_pass.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_chupai.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_qiang.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_buqiang.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_tishi.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_tuoguan.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._game.sceneObjectMgr.off(PaodekuaiMapInfo.EVENT_PDK_STATUS_CHECK, this, this.onUpdateMapState);
                    this._game.sceneObjectMgr.off(PaodekuaiMapInfo.EVENT_PDK_BATTLE_CHECK, this, this.updateBattledInfo);
                    this._game.sceneObjectMgr.off(PaodekuaiMapInfo.EVENT_PDK_COUNT_DOWN, this, this.updateCountDown); //倒计时更新
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE, this, this.updateCardRoomDisplayInfo);
                    this._game.mainScene.off(SceneOperator.AVATAR_MOUSE_CLICK_HIT, this, this.onClickCards);
                    this._game.mainScene.off(SceneOperator.AVATAR_MOUSE_UP_HIT_ALL, this, this.onChooseCards);
                    this._viewUI.view_xipai.ani_xipai.off(LEvent.COMPLETE, this, this.onWashCardOver);
                    this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                    Laya.timer.clearAll(this);
                    Laya.Tween.clearAll(this);
                    this._mapInfo = null;
                    this._game.stopMusic();
                    this._game.stopAllSound();
                    this.setCardRoomBtnEvent(false);
                    this.clearCardsView();
                }
                _super.prototype.close.call(this);
            };
            return PaodekuaiMapPage;
        }(game.gui.base.Page));
        page_1.PaodekuaiMapPage = PaodekuaiMapPage;
    })(page = gamepaodekuai.page || (gamepaodekuai.page = {}));
})(gamepaodekuai || (gamepaodekuai = {}));
//# sourceMappingURL=PaodekuaiMapPage.js.map