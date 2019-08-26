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
* 十三水-房间
*/
var gameshisanshui;
(function (gameshisanshui) {
    var page;
    (function (page_1) {
        var ChipConfig = {
            "151": [1],
            "152": [5],
            "153": [20],
            "154": [50],
        };
        var QiangPos = [[634, 526], [973, 373], [615, 141], [265, 373]]; //抢和靶子的位置
        var QiangRola = {
            0: [[1, 0], [1, -40], [-1, 0]],
            1: [[-1, 20], [-1, -18], [-1, -46]],
            2: [[-1, -51], [-1, -95], [1, 55]],
            3: [[1, 70], [1, 18], [1, 0]],
        };
        var MONEY_NUM = 24; // 特效金币数量
        var MONEY_FLY_TIME = 50; // 金币飞行时间间隔
        var MAX_SEAT = 4; //最大玩家数
        //音效url
        var MUSIC_PATH = {
            bgMusic: "13s_bgm.mp3",
            biPaiMusic: "start_bipai.mp3",
            chuPaiMusic: "start_chupai.mp3",
            cardTypeMusic: "sss_",
            daQiangMusic: "daqiang_",
            quanLeiDaMusic: "all_",
        };
        var ShisanshuiMapPage = /** @class */ (function (_super) {
            __extends(ShisanshuiMapPage, _super);
            function ShisanshuiMapPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._battleIndex = -1;
                _this._clipList = []; //飘字
                _this._settleWinInfo = []; //结算信息,闲家赢
                _this._settleLoseInfo = []; //结算信息，闲家输
                _this._totalVla = 0; //总共几水
                _this._moneyImg = []; //飘金币里的金币
                _this._daQiangInfo = []; //打枪信息
                _this._touQiang = 0; //打枪头墩数额
                _this._zhongQiang = 0; //打枪中墩数额
                _this._weiQiang = 0; //打枪尾墩数额
                _this._compareCount = 0; //计算比牌次数，打枪用
                _this._isPlaying = false; //是否进行中
                _this._isGameEnd = false; //是否本局游戏结束
                _this._specialCardsInfo = []; //特殊牌的数据
                _this._playAniCount = 0; //特殊牌特效播放次数
                _this._pointTemp = []; //每局积分
                _this._showCards = []; //每局每人的牌
                _this._isPlayCard = false; //是否出牌了
                _this._diff = 500;
                _this._timeList = {};
                _this._firstList = {};
                _this._nameStrInfo = ["xs", "px", "gsy", "gg", "cs", "tdg"];
                _this._isNeedDuang = false;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    Path_game_shisanshui.atlas_game_ui + "shisanshui.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                    Path_game_shisanshui.atlas_game_ui + "shisanshui/effect/paixing.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            ShisanshuiMapPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.shisanshui.ShiSanShuiUI');
                this.addChild(this._viewUI);
                this._pageHandle = PageHandle.Get("ShisanshuiMapPage"); //额外界面控制器
                if (!this._shisanshuiMgr) {
                    if (this._game.sceneObjectMgr.story instanceof ShisanshuiStory) {
                        this._shisanshuiStory = this._game.sceneObjectMgr.story;
                    }
                    else if (this._game.sceneObjectMgr.story instanceof ShisanshuiCardRoomStory) {
                        this._shisanshuiStory = this._game.sceneObjectMgr.story;
                    }
                    this._shisanshuiMgr = this._shisanshuiStory.sssMgr;
                }
                this._game.playMusic(Path_game_shisanshui.music_shisanshui + MUSIC_PATH.bgMusic);
            };
            // 页面打开时执行函数
            ShisanshuiMapPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this.updateViewUI();
                this.onUpdateUnitOffline();
                if (this._shisanshuiStory instanceof gamecomponent.story.StoryRoomCardBase) {
                    this.onUpdateMapInfo();
                }
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(ShisanshuiMapInfo.EVENT_SSS_STATUS_CHECK, this, this.onUpdateMapState);
                this._game.sceneObjectMgr.on(ShisanshuiMapInfo.EVENT_SSS_BATTLE_CHECK, this, this.updateBattledInfo);
                this._game.sceneObjectMgr.on(ShisanshuiMapInfo.EVENT_SSS_COUNT_DOWN, this, this.updateCountDown); //倒计时更新
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE, this, this.updateCardRoomDisplayInfo);
                this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this._viewUI.btn_menu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_cardtype.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rules.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_record.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chongzhi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.view_type.ani1.on(LEvent.COMPLETE, this, this.onPlayAniOver);
                if (!this.isCardRoomType) {
                    this._viewUI.btn_continue.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                }
                this.setCardRoomBtnEvent(true);
            };
            //打开时要处理的东西
            ShisanshuiMapPage.prototype.updateViewUI = function () {
                this._viewUI.text_cardroomid.visible = this.isCardRoomType;
                this._viewUI.img_menu.visible = false;
                this._viewUI.btn_continue.visible = false;
                this._viewUI.text_info.visible = false;
                this._viewUI.text_roomtype.visible = false;
                this._viewUI.btn_continue.visible = false;
                this._viewUI.img_time.visible = false;
                this._viewUI.view_bazi.visible = false;
                this._viewUI.view_bazi.ani1.stop();
                this._viewUI.view_qiang.visible = false;
                this._viewUI.view_qiang.ani1.stop();
                this._viewUI.view_type.visible = false;
                this._viewUI.view_type.ani1.stop();
                this._viewUI.vw_card.visible = false;
                this._viewUI.text_round.visible = false;
                this._viewUI.text_cardroomid.visible = false;
                this._viewUI.view_type.view_guang.ani1.gotoAndStop(1);
                for (var i = 0; i < MAX_SEAT; i++) {
                    this._viewUI["view_player" + i].visible = false;
                    this._viewUI["view_settle" + i].visible = false;
                    this._viewUI["box_show" + i].visible = false;
                    this._viewUI["view_show" + i].ani1.stop();
                    this._viewUI["box_special" + i].visible = false;
                    this._viewUI["img_special" + i].scale(1, 1);
                    for (var k = 0; k < 3; k++) {
                        this._viewUI["img_type_" + i + "_" + k].visible = false;
                    }
                }
            };
            //按钮点击
            ShisanshuiMapPage.prototype.onBtnTweenEnd = function (e, target) {
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
                            if (this._shisanshuiStory.isCardRoomMaster() && !this._isGameEnd) {
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
                        this._shisanshuiMgr.clear();
                        this._shisanshuiStory.clear();
                        this.clearClip();
                        this.clearMoneyImg();
                        this._game.sceneObjectMgr.leaveStory(true);
                        // this.close();
                        break;
                    case this._viewUI.btn_cardtype:
                        this._game.uiRoot.general.open(page_1.ShisanshuiPageDef.PAGE_SSS_RULE, function (page) {
                            page.dataSource = 1;
                        });
                        break;
                    case this._viewUI.btn_rules:
                        this._game.uiRoot.general.open(page_1.ShisanshuiPageDef.PAGE_SSS_RULE);
                        break;
                    case this._viewUI.btn_qifu:
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU);
                        break;
                    case this._viewUI.btn_set:
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING);
                        break;
                    case this._viewUI.btn_record:
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, function (page) {
                            page.dataSource = {
                                gameid: page_1.ShisanshuiPageDef.GAME_NAME,
                                isCardRoomType: _this._mapInfo.GetMapLevel() == Web_operation_fields.GAME_ROOM_CONFIG_CARD_ROOM,
                            };
                        });
                        break;
                    case this._viewUI.btn_continue:
                        if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < ChipConfig[this._shisanshuiStory.mapLv][0] * 4) {
                            this.onNotEnoughMoney();
                            return;
                        }
                        if (this._game.sceneObjectMgr.mapInfo instanceof MapInfo) {
                            this.clearClip();
                            this.clearMoneyImg();
                            this.resetData();
                            this.updateViewUI();
                            // this._shisanshuiStory.removeListen();
                            // this.clearMapInfoListen();
                            this._shisanshuiMgr.clear();
                            this._shisanshuiMgr.resetData();
                            this._game.sceneObjectMgr.leaveStory();
                        }
                        else {
                            this.onUpdateMapInfo();
                        }
                        break;
                    case this._viewUI.btn_chongzhi:
                        this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                        break;
                    case this._viewUI.vw_card.btn_invite: //房卡邀请
                        // 微信邀请玩家参与房卡游戏
                        if (this.isCardRoomType && this._mapInfo.GetCardRoomId()) {
                            this._game.network.call_get_roomcard_share(page_1.ShisanshuiPageDef.GAME_NAME);
                        }
                        break;
                    case this._viewUI.vw_card.btn_dismiss: //房卡解散
                        this.masterDismissCardGame();
                        break;
                    case this._viewUI.vw_card.btn_start: ////房卡开始
                        this.setCardGameStart();
                        break;
                    default:
                        break;
                }
            };
            ShisanshuiMapPage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_GET_ROOMCARD_SHARE) {
                    if (data && data.success == 0) {
                        var img_url = data.msg.img_url;
                        var wx_context = data.msg.context || ShisanshuiMgr.WXSHARE_DESC;
                        var wx_title = data.msg.title + this._mapInfo.GetCardRoomId() || StringU.substitute(ShisanshuiMgr.WXSHARE_TITLE, this._mapInfo.GetCardRoomId());
                        this._game.wxShareUrl(wx_title, wx_context, img_url);
                    }
                }
            };
            //点击任意地方关闭菜单
            ShisanshuiMapPage.prototype.onMouseClick = function (e) {
                if (e.currentTarget != this._viewUI.btn_menu) {
                    this._viewUI.img_menu.visible = false;
                    this._viewUI.btn_menu.visible = true;
                }
            };
            ShisanshuiMapPage.prototype.onUnitAdd = function (u) {
                this.onUpdateUnit();
            };
            //玩家出去了
            ShisanshuiMapPage.prototype.onUnitRemove = function (u) {
                this.onUpdateUnit();
            };
            //精灵显示
            ShisanshuiMapPage.prototype.onUpdateUnit = function (qifu_index) {
                var _this = this;
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                if (!mapinfo)
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var idx = mainUnit.GetIndex();
                if (this._mainIdx != idx) {
                    this._mainIdx = idx;
                }
                var _loop_1 = function (index) {
                    var posIdx = (idx + index) % MAX_SEAT == 0 ? MAX_SEAT : (idx + index) % MAX_SEAT;
                    var unit = this_1._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    this_1._viewUI["view_player" + index].visible = unit;
                    if (unit) {
                        var name_1 = getMainPlayerName(unit.GetName());
                        this_1._viewUI["view_player" + index].txt_name.text = name_1;
                        this_1._viewUI["view_player" + index].img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unit.GetHeadImg() + ".png";
                        var money = EnumToString.getPointBackNum(unit.GetMoney(), 2);
                        this_1._viewUI["view_player" + index].txt_money.text = money;
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
                                        _this._viewUI["view_player" + index].img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + _this._nameStrInfo[unit.GetQiFuType() - 1] + ".png";
                                    }
                                });
                            }
                            else {
                                this_1._viewUI["view_player" + index].img_qifu.visible = true;
                                if (this_1._viewUI["view_player" + index].img_qifu.visible && unit.GetQiFuType()) {
                                    this_1._viewUI["view_player" + index].img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this_1._nameStrInfo[unit.GetQiFuType() - 1] + ".png";
                                }
                            }
                        }
                        else {
                            this_1._viewUI["view_player" + index].img_qifu.visible = false;
                        }
                    }
                };
                var this_1 = this;
                for (var index = 0; index < MAX_SEAT; index++) {
                    _loop_1(index);
                }
            };
            ShisanshuiMapPage.prototype.playTween = function (img, index, isTween) {
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
            ShisanshuiMapPage.prototype.onOptHandler = function (optcode, msg) {
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
            //地图监听
            ShisanshuiMapPage.prototype.onUpdateMapInfo = function () {
                var _this = this;
                var mapInfo = this._game.sceneObjectMgr.mapInfo;
                this._mapInfo = mapInfo;
                if (mapInfo) {
                    this._viewUI.btn_continue.visible = false;
                    if (this._shisanshuiMgr.isReLogin) {
                        this._shisanshuiStory.mapLv = this._mapInfo.GetMapLevel();
                        this._shisanshuiMgr.isReLogin = false;
                        this._shisanshuiMgr.isReDealCard = false;
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
                else {
                    if (this.isCardRoomType)
                        return;
                    this.onUpdateUnitOffline();
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, function (page) {
                        _this._viewUI.btn_continue.visible = page.dataSource;
                    });
                    this._viewUI.btn_continue.visible = false;
                }
            };
            //假精灵数据
            ShisanshuiMapPage.prototype.onUpdateUnitOffline = function () {
                if (!this._shisanshuiMgr.unitOffline)
                    return;
                var unitOffline = this._shisanshuiMgr.unitOffline;
                var mPlayer = this._game.sceneObjectMgr.mainPlayer;
                if (unitOffline) {
                    this._viewUI.view_player0.visible = true;
                    var money = void 0;
                    if (mPlayer) {
                        if (!mPlayer.playerInfo)
                            return;
                        money = mPlayer.playerInfo.money;
                        this._viewUI.view_player0.txt_name.text = getMainPlayerName(mPlayer.playerInfo.nickname);
                        this._viewUI.view_player0.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + mPlayer.playerInfo.headimg + ".png";
                        this._viewUI.view_player0.img_qifu.visible = mPlayer.playerInfo.qifu_endtime > this._game.sync.serverTimeBys;
                        if (this._viewUI.view_player0.img_qifu.visible && mPlayer.playerInfo.qifu_type) {
                            this._viewUI.view_player0.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[mPlayer.playerInfo.qifu_type - 1] + ".png";
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
                        this._viewUI.view_player0.img_icon.skin = Path_game_shisanshui.ui_shisanshui + "head_" + unitOffline.GetHeadImg() + ".png";
                        this._viewUI.view_player0.img_qifu.visible = unitOffline.GetQiFuEndTime() > this._game.sync.serverTimeBys;
                        if (this._viewUI.view_player0.img_qifu.visible && unitOffline.GetQiFuType()) {
                            this._viewUI.view_player0.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[unitOffline.GetQiFuType() - 1] + ".png";
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
            ShisanshuiMapPage.prototype.updateCardRoomDisplayInfo = function () {
                if (!this._mapInfo)
                    return;
                if (!this._game.sceneObjectMgr.mainUnit)
                    return;
                this.onUpdateUnit();
                if (this._mapInfo.GetCardRoomId() && !this._isPlaying && !this._isGameEnd) {
                    this.setCardRoomBtnVisible();
                }
            };
            // 房卡按纽及状态
            ShisanshuiMapPage.prototype.setCardRoomBtnVisible = function () {
                this._viewUI.vw_card.visible = this.isCardRoomType;
                if (!this._shisanshuiMgr.isReLogin) {
                    this._viewUI.text_cardroomid.visible = true;
                }
                this._viewUI.text_cardroomid.text = "房间号：" + this._mapInfo.GetCardRoomId();
                if (this.isCardRoomType) {
                    this._viewUI.vw_card.btn_invite.visible = true;
                    this._viewUI.vw_card.btn_invite.x = this._shisanshuiStory.isCardRoomMaster() ? 420 : this._viewUI.vw_card.btn_start.x;
                    this._viewUI.vw_card.btn_dismiss.visible = this._shisanshuiStory.isCardRoomMaster();
                    this._viewUI.vw_card.btn_start.visible = this._shisanshuiStory.isCardRoomMaster();
                }
            };
            // 房卡事件和初始界面布局
            ShisanshuiMapPage.prototype.setCardRoomBtnEvent = function (isOn) {
                if (this.isCardRoomType && isOn) {
                    this._viewUI.vw_card.btn_invite.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.vw_card.btn_start.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.vw_card.btn_dismiss.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                }
                else {
                    this._viewUI.vw_card.btn_invite.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.vw_card.btn_start.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.vw_card.btn_dismiss.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                }
            };
            // 是否可以提前终止游戏
            ShisanshuiMapPage.prototype.canEndCardGame = function () {
                if (this._isPlaying) {
                    TongyongPageDef.ins.alertRecharge(StringU.substitute("游戏中禁止退出，请先完成本轮" + this._mapInfo.GetCardRoomGameNumber() + "局游戏哦~~"), function () {
                    }, function () {
                    }, true, PathGameTongyong.ui_tongyong_general + "btn_qd.png");
                    return false;
                }
                return !this._isPlaying;
            };
            // 游戏结束 场景恢复
            ShisanshuiMapPage.prototype.setGameEnd = function () {
                this._viewUI.btn_continue.visible = !this.isCardRoomType;
                this._viewUI.vw_card.visible = false;
                this._isGameEnd = true;
                this._shisanshuiMgr.resetData();
                this._shisanshuiMgr.clear();
                this.resetData();
                this._battleIndex = -1;
            };
            //地图状态
            ShisanshuiMapPage.prototype.onUpdateMapState = function () {
                var _this = this;
                if (!this._mapInfo)
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                this._curStatus = this._mapInfo.GetMapState();
                var idx = mainUnit.GetIndex();
                var betPos = this._mapInfo.GetCurrentBetPos();
                var state = this._mapInfo.GetMapState();
                this._viewUI.text_info.text = "牌局号：" + this._mapInfo.GetGameNo();
                var round = this._mapInfo.GetRound() + 1;
                this._viewUI.text_round.text = "局数：" + round + "/" + this._mapInfo.GetCardRoomGameNumber();
                this._viewUI.text_roomtype.visible = !this.isCardRoomType;
                var str = "";
                this._isPlaying = state >= 3 /* MAP_STATE_SHUFFLE */ && state < 12 /* MAP_STATE_END */;
                if (this._shisanshuiStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_SHISANSHUI_1) {
                    str = "新手场：底注：";
                }
                else if (this._shisanshuiStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_SHISANSHUI_2) {
                    str = "小资场：底注：";
                }
                else if (this._shisanshuiStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_SHISANSHUI_3) {
                    str = "老板场：底注：";
                }
                else if (this._shisanshuiStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_SHISANSHUI_4) {
                    str = "富豪场：底注：";
                }
                if (!this.isCardRoomType) {
                    this._viewUI.text_roomtype.text = str + ChipConfig[this._shisanshuiStory.mapLv][0];
                }
                if (this.isCardRoomType) {
                    if (this._isPlaying) { //隐藏下按钮
                        this._viewUI.text_info.visible = true;
                        this._viewUI.text_round.visible = true;
                        this._viewUI.text_cardroomid.visible = false;
                        this._viewUI.vw_card.btn_invite.visible = false;
                        this._viewUI.vw_card.btn_dismiss.visible = false;
                        this._viewUI.vw_card.btn_start.visible = false;
                    }
                }
                else {
                    this._viewUI.text_info.visible = true;
                }
                if (state == 3 /* MAP_STATE_SHUFFLE */) {
                    this._pageHandle.pushClose({ id: page_1.ShisanshuiPageDef.PAGE_SSS_CARDROOM_SETTLE, parent: this._game.uiRoot.HUD });
                }
                if (state == 6 /* MAP_STATE_PLAYING */) {
                    if (!this._isPlayCard) {
                        //隐藏牌
                        this._shisanshuiMgr.setCardVisible(false);
                        this._game.uiRoot.general.open(page_1.ShisanshuiPageDef.PAGE_SSS_PLAYING, function (page) {
                            page.setBattleInfoIdx(_this._battleIndex);
                        });
                        this._game.playSound(Path_game_shisanshui.music_shisanshui + MUSIC_PATH.chuPaiMusic, false);
                    }
                    for (var i = 1; i < MAX_SEAT; i++) {
                        var seat = this.GetSeatFromUiPos(i);
                        var unit = this._game.sceneObjectMgr.getUnitByIdx(seat);
                        if (unit) {
                            this._viewUI["box_show" + i].visible = true;
                            this._viewUI["view_show" + i].ani1.play(1, true);
                        }
                    }
                }
                else {
                    if (this._game.uiRoot.general.isOpened(page_1.ShisanshuiPageDef.PAGE_SSS_PLAYING)) {
                        this._game.uiRoot.general.close(page_1.ShisanshuiPageDef.PAGE_SSS_PLAYING);
                    }
                    for (var i = 0; i < MAX_SEAT; i++) {
                        this._viewUI["box_show" + i].visible = false;
                        this._viewUI["view_show" + i].ani1.stop();
                    }
                }
                if (state != 7 /* MAP_STATE_COMPARE */) {
                    this._viewUI.view_bazi.visible = false;
                    this._viewUI.view_bazi.ani1.stop();
                    this._viewUI.view_qiang.visible = false;
                    this._viewUI.view_qiang.ani1.stop();
                }
                else {
                    this._game.playSound(Path_game_shisanshui.music_shisanshui + MUSIC_PATH.biPaiMusic, false);
                }
                if (state != 8 /* MAP_STATE_QUANLEIDA */) {
                    if (this._game.uiRoot.general.isOpened(page_1.ShisanshuiPageDef.PAGE_SSS_QUANLEIDA)) {
                        this._game.uiRoot.general.close(page_1.ShisanshuiPageDef.PAGE_SSS_QUANLEIDA);
                    }
                }
                if (state == 9 /* MAP_STATE_SPECIAL */) {
                    this.playSpecialAni();
                    this.onPlayAniOver();
                }
                else {
                    this._viewUI.view_type.visible = false;
                    this._viewUI.view_type.ani1.stop();
                }
                if (state == 11 /* MAP_STATE_WAIT */) {
                    this.openSettlePage();
                    this.clearClip();
                    this.updateViewUI();
                    this.onUpdateUnit();
                    this.resetData();
                    this.clearMoneyImg();
                    this._shisanshuiMgr.resetData();
                    this._shisanshuiMgr.clear();
                }
                if (state == 10 /* MAP_STATE_SETTLE */) {
                    this.addBankerWinEff();
                }
                if (state == 12 /* MAP_STATE_END */) {
                    if (!this.isCardRoomType) {
                        this._viewUI.btn_continue.visible = true;
                    }
                    else {
                        this.openSettlePage();
                        this.clearClip();
                        this.updateViewUI();
                        this.onUpdateUnit();
                        this.resetData();
                        this.clearMoneyImg();
                        this._shisanshuiMgr.resetData();
                        this._shisanshuiMgr.clear();
                        this._battleIndex = -1;
                    }
                }
                this._pageHandle.updatePageHandle();
                this._pageHandle.reset();
            };
            //打开结算界面
            ShisanshuiMapPage.prototype.openSettlePage = function () {
                if (this._pointTemp.length == 0)
                    return;
                if (!this._mapInfo)
                    return;
                var temps = [];
                var infoTemps = [];
                for (var i = 1; i < 5; i++) {
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(i);
                    var score = 0; //积分
                    for (var k = 0; k < this._pointTemp.length / 2; k++) {
                        if (i == this._pointTemp[k * 2]) {
                            score = this._pointTemp[k * 2 + 1];
                            break;
                        }
                    }
                    var cards = []; //手牌
                    for (var index = 0; index < this._showCards.length; index++) {
                        if (this._showCards[index].seat == i) {
                            cards = this._showCards[index].cards;
                            break;
                        }
                    }
                    if (unit) {
                        var obj = {
                            isMain: this._game.sceneObjectMgr.mainUnit.GetIndex() == i,
                            name: unit.GetName(),
                            score: score,
                            totalPoint: EnumToString.getPointBackNum(unit.GetMoney(), 2),
                            cardtype: cards,
                        };
                        temps.push(obj);
                    }
                }
                infoTemps.push(this._mapInfo.GetRound() + 1);
                infoTemps.push(this._mapInfo.GetCardRoomGameNumber());
                infoTemps.push(temps);
                this._pageHandle.pushOpen({ id: page_1.ShisanshuiPageDef.PAGE_SSS_CARDROOM_SETTLE, dataSource: infoTemps, parent: this._game.uiRoot.HUD });
            };
            //特殊牌特效播放
            ShisanshuiMapPage.prototype.playSpecialAni = function () {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var mainIdx = mainUnit.GetIndex();
                if (mainIdx == 0)
                    return;
                for (var i = 0; i < this._specialCardsInfo.length; i++) {
                    var seat = this._specialCardsInfo[i].seat;
                    this._shisanshuiMgr.compare(seat, 1);
                    this._shisanshuiMgr.compare(seat, 2);
                    this._shisanshuiMgr.compare(seat, 3);
                    var posIdx = (seat - mainIdx + MAX_SEAT) % MAX_SEAT;
                    this._viewUI["box_special" + posIdx].visible = false;
                }
            };
            //特殊牌播放停止后执行
            ShisanshuiMapPage.prototype.onPlayAniOver = function () {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var mainIdx = mainUnit.GetIndex();
                if (mainIdx == 0)
                    return;
                this._viewUI.view_type.view_guang.ani1.gotoAndStop(1);
                if (this._playAniCount >= this._specialCardsInfo.length) {
                    this._viewUI.view_type.ani1.gotoAndStop(1);
                    this._viewUI.view_type.visible = false;
                    return;
                }
                ;
                this._viewUI.view_type.visible = true;
                this._viewUI.view_type.ani1.play(1, false);
                var type = this._specialCardsInfo[this._playAniCount].type;
                this._viewUI.view_type.img_type.skin = Path_game_shisanshui.ui_shisanshui + "effect/paixing/tu_paix" + type + ".png";
                this._viewUI.view_type.img_type1.skin = Path_game_shisanshui.ui_shisanshui + "effect/paixing/tu_paix" + type + "_1.png";
                //显示特殊牌
                var seat = this._specialCardsInfo[this._playAniCount].seat;
                var posIdx = (seat - mainIdx + MAX_SEAT) % MAX_SEAT;
                this._viewUI["box_special" + posIdx].visible = true;
                this._viewUI["img_special" + posIdx].scale(0.5, 0.5);
                this._viewUI["img_special" + posIdx].skin = Path_game_shisanshui.ui_shisanshui + "effect/paixing/tu_paix" + type + ".png";
                this._viewUI.view_type.view_guang.ani1.play(1, false);
                this._playAniCount = this._playAniCount + 1;
            };
            //更新倒计时时间戳
            ShisanshuiMapPage.prototype.updateCountDown = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._countDown = mapinfo.GetCountDown();
                if (!mapinfo)
                    return;
            };
            //操作倒计时
            ShisanshuiMapPage.prototype.deltaUpdate = function () {
                if (!(this._game.sceneObjectMgr.mapInfo instanceof ShisanshuiMapInfo))
                    return;
                if (!this._viewUI)
                    return;
                if (this._curStatus != 6 /* MAP_STATE_PLAYING */) {
                    this._viewUI.img_time.visible = false;
                    this._viewUI.img_time.ani1.gotoAndStop(24);
                    return;
                }
                var curTime = this._game.sync.serverTimeBys;
                var time = Math.floor(this._countDown - curTime);
                if (time > 0) {
                    this._viewUI.img_time.visible = true;
                    this._viewUI.img_time.txt_time.text = time.toString();
                    if (time == 3 && !this._viewUI.img_time.ani1.isPlaying) {
                        this._viewUI.img_time.ani1.play(1, true);
                    }
                }
                else {
                    this._viewUI.img_time.visible = false;
                    this._viewUI.img_time.ani1.gotoAndStop(24);
                }
            };
            //战斗日志
            ShisanshuiMapPage.prototype.updateBattledInfo = function () {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var battleInfoMgr = this._mapInfo.battleInfoMgr;
                var mainIdx = mainUnit.GetIndex();
                if (mainIdx == 0)
                    return;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    switch (battleInfo.Type) {
                        case 5: { //明牌
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var idx = info.SeatIndex;
                                var cards = [];
                                var touDun = [];
                                var zhongDun = [];
                                var weiDun = [];
                                for (var index = 0; index < info.Cards.length; index++) {
                                    var card = info.Cards[index];
                                    cards.push(card);
                                    if (index < 3) {
                                        touDun.push(card);
                                    }
                                    else if (index < 8) {
                                        zhongDun.push(card);
                                    }
                                    else {
                                        weiDun.push(card);
                                    }
                                }
                                //存下牌，结算界面表现用
                                var obj = {
                                    seat: idx,
                                    cards: info.Cards,
                                };
                                this._showCards.push(obj);
                                this._shisanshuiMgr.showCards(cards, idx);
                                this._shisanshuiMgr.playingCard(idx);
                                var posIdx = (idx - mainIdx + MAX_SEAT) % MAX_SEAT;
                                this._viewUI["box_show" + posIdx].visible = false;
                                this._viewUI["view_show" + posIdx].ani1.stop();
                                //判断下3个墩的牌型
                                var type0 = this._shisanshuiMgr.checkCardsType(touDun) + 1;
                                var type1 = this._shisanshuiMgr.checkCardsType(zhongDun) + 1;
                                var type2 = this._shisanshuiMgr.checkCardsType(weiDun) + 1;
                                this._viewUI["img_type_" + posIdx + "_0"].skin = Path_game_shisanshui.ui_shisanshui + "tu_px" + type0 + ".png";
                                this._viewUI["img_type_" + posIdx + "_1"].skin = Path_game_shisanshui.ui_shisanshui + "tu_px" + type1 + ".png";
                                this._viewUI["img_type_" + posIdx + "_2"].skin = Path_game_shisanshui.ui_shisanshui + "tu_px" + type2 + ".png";
                                //自己拼完牌，关闭界面
                                if (idx == mainIdx) {
                                    //显示牌
                                    this._shisanshuiMgr.setCardVisible(true);
                                    if (this._game.uiRoot.general.isOpened(page_1.ShisanshuiPageDef.PAGE_SSS_SPECIAL)) {
                                        this._game.uiRoot.general.close(page_1.ShisanshuiPageDef.PAGE_SSS_SPECIAL);
                                    }
                                    if (this._game.uiRoot.general.isOpened(page_1.ShisanshuiPageDef.PAGE_SSS_PLAYING)) {
                                        this._game.uiRoot.general.close(page_1.ShisanshuiPageDef.PAGE_SSS_PLAYING);
                                    }
                                    this._isPlayCard = true;
                                }
                            }
                            break;
                        }
                        case 30: { //十三水比牌
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var dun = info.Dun - 1;
                                var dunTemp = ["头墩", "中墩", "尾墩"];
                                var unit = this._game.sceneObjectMgr.getUnitByIdx(info.SeatIndex);
                                var isSpecial = false; //是不是特殊牌
                                for (var index = 0; index < this._specialCardsInfo.length; index++) {
                                    if (this._specialCardsInfo[index].seat == info.SeatIndex) {
                                        isSpecial = true;
                                        break;
                                    }
                                }
                                var posIdx = (info.SeatIndex - mainIdx + MAX_SEAT) % MAX_SEAT;
                                if (isSpecial) { //特殊牌就不显示墩位
                                    this._viewUI["box_card" + posIdx].visible = false;
                                }
                                else {
                                    this._shisanshuiMgr.compare(info.SeatIndex, info.Dun);
                                    this._viewUI["box_card" + posIdx].visible = true;
                                }
                                this._viewUI["img_type_" + posIdx + "_" + dun].visible = unit;
                                if (info.SeatIndex == mainIdx) {
                                    this._viewUI["view_settle" + dun].visible = true;
                                    this._viewUI["view_settle" + dun].lab_val.text = info.Val;
                                    this._viewUI["view_settle" + dun].lab_pos.text = dunTemp[dun];
                                    this._viewUI["view_settle" + dun].lab_num.text = "(0)";
                                    this._viewUI.view_settle3.visible = true;
                                    this._viewUI.view_settle3.lab_pos.text = "总计";
                                    this._viewUI.view_settle3.lab_num.text = "(0)";
                                    this._totalVla = this._totalVla + info.Val;
                                    this._viewUI.view_settle3.lab_val.text = this._totalVla.toString();
                                }
                                if (info.Dun == 3) {
                                    this._compareCount++;
                                    if (this._compareCount == this.unitCount()) {
                                        this.daQiangEff();
                                    }
                                }
                            }
                            break;
                        }
                        case 32: { //打枪
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var obj = {
                                    target: info.SeatIndex,
                                    attack: info.attacker,
                                    touDun: info.touVal,
                                    zhongDun: info.zhongVal,
                                    weiDun: info.weiVal,
                                };
                                this._daQiangInfo.push(obj);
                            }
                            break;
                        }
                        case 1: { //全垒打
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                if (!this._game.uiRoot.general.isOpened(page_1.ShisanshuiPageDef.PAGE_SSS_QUANLEIDA)) {
                                    this._game.uiRoot.general.open(page_1.ShisanshuiPageDef.PAGE_SSS_QUANLEIDA);
                                }
                                var unit = this._game.sceneObjectMgr.getUnitByIdx(info.SeatIndex);
                                if (unit) {
                                    var headNum = parseInt(unit.GetHeadImg());
                                    var sexType = headNum > 10 ? "nv" : "nan";
                                    this._game.playSound(Path_game_shisanshui.music_shisanshui + MUSIC_PATH.quanLeiDaMusic + sexType + ".mp3", false);
                                    this._qldUnit = unit;
                                }
                            }
                            break;
                        }
                        case 36: { //全垒打结算
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var unit = this._game.sceneObjectMgr.getUnitByIdx(info.SeatIndex);
                                if (info.SeatIndex == mainIdx) {
                                    var touVal = this._touQiang;
                                    var zhongVal = this._zhongQiang;
                                    var weiVal = this._weiQiang;
                                    if (unit == this._qldUnit) {
                                        touVal = this._touQiang + info.touDun;
                                        zhongVal = this._zhongQiang + info.zhongDun;
                                        weiVal = this._weiQiang + info.weiDun;
                                    }
                                    else {
                                        touVal = this._touQiang - info.touDun;
                                        zhongVal = this._zhongQiang - info.zhongDun;
                                        weiVal = this._weiQiang - info.weiDun;
                                    }
                                    var totalVal = touVal + zhongVal + weiVal;
                                    this._viewUI.view_settle0.lab_num.text = "(" + touVal + ")";
                                    this._viewUI.view_settle1.lab_num.text = "(" + zhongVal + ")";
                                    this._viewUI.view_settle2.lab_num.text = "(" + weiVal + ")";
                                    this._viewUI.view_settle3.lab_num.text = "(" + totalVal + ")";
                                }
                            }
                            break;
                        }
                        case 37: { //特殊牌结算
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                if (info.SeatIndex == mainIdx) {
                                    var touVal = this._touQiang;
                                    var zhongVal = this._zhongQiang;
                                    var weiVal = this._weiQiang;
                                    var totalVal = touVal + zhongVal + weiVal + info.SpecialVal;
                                    this._viewUI.view_settle3.lab_num.text = "(" + totalVal + ")";
                                }
                            }
                            break;
                        }
                        case 38: { //特殊牌型
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var obj = {
                                    seat: info.SeatIndex,
                                    type: info.cardType,
                                };
                                this._specialCardsInfo.push(obj);
                                var posIdx = (info.SeatIndex - mainIdx + MAX_SEAT) % MAX_SEAT;
                                this._viewUI["box_special" + posIdx].visible = true;
                                this._viewUI["img_special" + posIdx].skin = Path_game_shisanshui.ui_shisanshui + "effect/paixing/tu_teshupai.png";
                            }
                            break;
                        }
                        case 11: { //结算
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                if (info.SettleVal > 0) {
                                    this._settleWinInfo.push(info.SeatIndex);
                                    this._settleWinInfo.push(info.SettleVal);
                                }
                                else if (info.SettleVal < 0) {
                                    this._settleLoseInfo.push(info.SeatIndex);
                                    this._settleLoseInfo.push(info.SettleVal);
                                }
                                this.addMoneyClip(info.SettleVal, info.SeatIndex);
                                //存下结算数据
                                this._pointTemp.push(info.SeatIndex);
                                this._pointTemp.push(info.SettleVal);
                            }
                            break;
                        }
                    }
                }
            };
            //重连之后，战斗日志从哪开始刷
            ShisanshuiMapPage.prototype.resetBattleIdx = function () {
                //不是房卡模式，就不用算
                if (!this.isCardRoomType)
                    return;
                var battleInfoMgr = this._mapInfo.battleInfoMgr;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    if (battleInfo.Type == 11) {
                        this._battleIndex = i;
                    }
                }
            };
            //打枪
            ShisanshuiMapPage.prototype.daQiangEff = function () {
                var _this = this;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var count = 1;
                var _loop_2 = function (i) {
                    Laya.timer.once(1000 * count, this_2, function () {
                        if (_this._daQiangInfo[i].target == mainUnit.GetIndex()) {
                            _this._touQiang = _this._touQiang - _this._daQiangInfo[i].touDun;
                            _this._zhongQiang = _this._zhongQiang - _this._daQiangInfo[i].zhongDun;
                            _this._weiQiang = _this._weiQiang - _this._daQiangInfo[i].weiDun;
                        }
                        else if (_this._daQiangInfo[i].attack == mainUnit.GetIndex()) {
                            _this._touQiang = _this._touQiang + _this._daQiangInfo[i].touDun;
                            _this._zhongQiang = _this._zhongQiang + _this._daQiangInfo[i].zhongDun;
                            _this._weiQiang = _this._weiQiang + _this._daQiangInfo[i].weiDun;
                        }
                        _this._viewUI.view_settle0.lab_num.text = "(" + _this._touQiang + ")";
                        _this._viewUI.view_settle1.lab_num.text = "(" + _this._zhongQiang + ")";
                        _this._viewUI.view_settle2.lab_num.text = "(" + _this._weiQiang + ")";
                        _this._viewUI.view_settle3.lab_num.text = "(" + (_this._touQiang + _this._zhongQiang + _this._weiQiang) + ")";
                        //打枪动画
                        var qiangPos = (_this._daQiangInfo[i].attack - mainUnit.GetIndex() + MAX_SEAT) % MAX_SEAT;
                        var baZiPos = (_this._daQiangInfo[i].target - mainUnit.GetIndex() + MAX_SEAT) % MAX_SEAT;
                        _this._viewUI.view_bazi.x = QiangPos[baZiPos][0];
                        _this._viewUI.view_bazi.y = QiangPos[baZiPos][1];
                        _this._viewUI.view_bazi.visible = true;
                        _this._viewUI.view_bazi.ani1.play(1, false);
                        var targetIdx = (_this._daQiangInfo[i].target - _this._daQiangInfo[i].attack + MAX_SEAT) % MAX_SEAT - 1;
                        _this._viewUI.view_qiang.x = QiangPos[qiangPos][0];
                        _this._viewUI.view_qiang.y = QiangPos[qiangPos][1];
                        _this._viewUI.view_qiang.scaleX = QiangRola[qiangPos][targetIdx][0];
                        _this._viewUI.view_qiang.rotation = QiangRola[qiangPos][targetIdx][1];
                        _this._viewUI.view_qiang.visible = true;
                        _this._viewUI.view_qiang.ani1.play(1, false);
                        var unit = _this._game.sceneObjectMgr.getUnitByIdx(_this._daQiangInfo[i].attack);
                        if (unit) {
                            var headNum = parseInt(unit.GetHeadImg());
                            var sexType = headNum > 10 ? "nv" : "nan";
                            _this._game.playSound(Path_game_shisanshui.music_shisanshui + MUSIC_PATH.daQiangMusic + sexType + ".mp3", false);
                        }
                    });
                    count++;
                };
                var this_2 = this;
                for (var i = 0; i < this._daQiangInfo.length; i++) {
                    _loop_2(i);
                }
            };
            //看下在场几个人
            ShisanshuiMapPage.prototype.unitCount = function () {
                var count = 0;
                for (var i = 0; i < MAX_SEAT; i++) {
                    var index = i + 1;
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(index);
                    if (unit) {
                        count++;
                    }
                }
                return count;
            };
            //UI的位置转为座位
            ShisanshuiMapPage.prototype.GetSeatFromUiPos = function (pos) {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var mainIdx = mainUnit.GetIndex();
                if (mainIdx == 0)
                    return;
                var seat = 0;
                var posIdx = (pos + mainIdx) % MAX_SEAT;
                seat = posIdx == 0 ? MAX_SEAT : posIdx;
                return seat;
            };
            //庄家赢钱
            ShisanshuiMapPage.prototype.addBankerWinEff = function () {
                var _this = this;
                var timeInternal = MONEY_NUM * MONEY_FLY_TIME;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                if (!this._mainIdx)
                    return;
                Laya.timer.once(timeInternal, this, function () {
                    _this.addBankerLoseEff();
                });
                if (this._settleLoseInfo.length < 1)
                    return;
                var mainIdx = mainUnit.GetIndex();
                var bankerPos = (this._mainIdx - mainIdx + MAX_SEAT) % MAX_SEAT;
                for (var i = 0; i < this._settleLoseInfo.length / 2; i++) {
                    var index = i * 2;
                    var unitPos = (this._settleLoseInfo[index] - mainIdx + MAX_SEAT) % MAX_SEAT;
                    if (i < this._settleLoseInfo.length / 2) {
                        var fromX = this._game.mainScene.camera.getScenePxByCellX(this._viewUI["view_player" + unitPos].x) + 23;
                        var fromY = this._game.mainScene.camera.getScenePxByCellY(this._viewUI["view_player" + unitPos].y) + 70;
                        this.subMoneyFly(fromX, fromY);
                    }
                }
            };
            //庄家输钱
            ShisanshuiMapPage.prototype.addBankerLoseEff = function () {
                if (this._settleWinInfo.length < 1)
                    return;
                if (!this._game.mainScene || !this._game.mainScene.camera)
                    return;
                var mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var bankerPos = (this._mainIdx - mainIdx + MAX_SEAT) % MAX_SEAT;
                for (var i = 0; i < this._settleWinInfo.length / 2; i++) {
                    var index = i * 2;
                    var unitPos = (this._settleWinInfo[index] - mainIdx + MAX_SEAT) % MAX_SEAT;
                    if (i < this._settleWinInfo.length / 2) {
                        var tarX = this._game.mainScene.camera.getScenePxByCellX(this._viewUI["view_player" + unitPos].x) + 23;
                        var tarY = this._game.mainScene.camera.getScenePxByCellY(this._viewUI["view_player" + unitPos].y) + 65;
                        this.addMoneyFly(tarX, tarY, i);
                    }
                }
            };
            //金币变化 飘金币特效
            ShisanshuiMapPage.prototype.addMoneyFly = function (tarX, tarY, index) {
                var posEndX = MathU.randomRange(tarX, tarX);
                var posEndY = MathU.randomRange(tarY, tarY);
                var _loop_3 = function (i) {
                    if (i < MONEY_NUM / (this_3._settleWinInfo.length / 2) * (index + 1) && i >= MONEY_NUM / (this_3._settleWinInfo.length / 2) * index) {
                        var moneyImg_1 = this_3._moneyImg[i];
                        // Laya.Bezier 贝塞尔曲线  取得点
                        Laya.Tween.to(moneyImg_1, { x: posEndX }, i * MONEY_FLY_TIME, null);
                        Laya.Tween.to(moneyImg_1, { y: posEndY }, i * MONEY_FLY_TIME, null, Handler.create(this_3, function () {
                            moneyImg_1.removeSelf();
                        }));
                    }
                };
                var this_3 = this;
                for (var i = 0; i < this._moneyImg.length; i++) {
                    _loop_3(i);
                }
            };
            ShisanshuiMapPage.prototype.subMoneyFly = function (fromX, fromY) {
                var posBeginX = MathU.randomRange(fromX, fromX);
                var posBeginY = MathU.randomRange(fromY, fromY);
                for (var i = 0; i < MONEY_NUM / (this._settleLoseInfo.length / 2); i++) {
                    var posEndX = MathU.randomPointInCicle(new Vector2(640, 360), 0, 50).x;
                    var posEndY = MathU.randomPointInCicle(new Vector2(640, 360), 0, 50).y;
                    var moneyImg = new LImage(PathGameTongyong.ui_tongyong_general + "icon_money.png");
                    moneyImg.scale(0.7, 0.7);
                    if (!moneyImg.parent)
                        this._viewUI.addChild(moneyImg);
                    moneyImg.pos(posBeginX, posBeginY);
                    // Laya.Bezier 贝塞尔曲线  取得点
                    Laya.Tween.to(moneyImg, { x: posEndX }, i * MONEY_FLY_TIME, null);
                    Laya.Tween.to(moneyImg, { y: posEndY }, i * MONEY_FLY_TIME, null);
                    this._moneyImg.push(moneyImg);
                }
            };
            //金币变化 飘字clip
            ShisanshuiMapPage.prototype.addMoneyClip = function (value, pos) {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var idx = mainUnit.GetIndex();
                var valueClip = value >= 0 ? new ShisanshuiClip(ShisanshuiClip.ADD_MONEY_FONT) : new ShisanshuiClip(ShisanshuiClip.SUB_MONEY_FONT);
                var preSkin = value >= 0 ? PathGameTongyong.ui_tongyong_general + "tu_jia.png" : PathGameTongyong.ui_tongyong_general + "tu_jian.png";
                valueClip.scale(0.8, 0.8);
                valueClip.anchorX = 0.5;
                var moneyStr = EnumToString.getPointBackNum(Math.abs(value), 2);
                valueClip.setText(moneyStr + "", true, false, preSkin);
                var index = (pos - idx + MAX_SEAT) % MAX_SEAT;
                var posX = this._viewUI["view_player" + index].x + 50;
                var posY = this._viewUI["view_player" + index].y + 50;
                var deep = this._viewUI.img_menu.parent.getChildIndex(this._viewUI.img_menu);
                if (!valueClip.parent)
                    this._viewUI.box_view.addChildAt(valueClip, deep);
                valueClip.pos(posX, posY);
                this._clipList.push(valueClip);
                Laya.Tween.clearAll(valueClip);
                Laya.Tween.to(valueClip, { y: posY - 80 }, 1000);
            };
            //清理飘钱动画
            ShisanshuiMapPage.prototype.clearClip = function () {
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
            ShisanshuiMapPage.prototype.clearMoneyImg = function () {
                if (this._moneyImg.length > 0) {
                    for (var i = 0; i < this._moneyImg.length; i++) {
                        var moneyImg = this._moneyImg[i];
                        moneyImg.removeSelf();
                    }
                }
                this._moneyImg = [];
            };
            //充值弹框
            ShisanshuiMapPage.prototype.onNotEnoughMoney = function () {
                var _this = this;
                if (!this._game.sceneObjectMgr.mainPlayer)
                    return;
                if (this._game.sceneObjectMgr.mainPlayer.GetMoney() < ChipConfig[this._shisanshuiStory.mapLv][0] * 8) {
                    TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", ChipConfig[this._shisanshuiStory.mapLv][0] * 8), function () {
                        _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                    }, function () {
                    }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
                }
            };
            //算下几个人了
            ShisanshuiMapPage.prototype.getUnitCount = function () {
                var count = 0;
                var unitDic = this._game.sceneObjectMgr.unitDic;
                if (unitDic) {
                    for (var key in unitDic) {
                        count++;
                    }
                }
                return count;
            };
            Object.defineProperty(ShisanshuiMapPage.prototype, "isCardRoomType", {
                get: function () {
                    return this._shisanshuiStory instanceof gamecomponent.story.StoryRoomCardBase;
                },
                enumerable: true,
                configurable: true
            });
            //房卡模式，开始游戏
            ShisanshuiMapPage.prototype.setCardGameStart = function () {
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
                this._shisanshuiMgr.totalUnitCount = this.getUnitCount();
                if (this._shisanshuiMgr.totalUnitCount < ShisanshuiMgr.MIN_CARD_SEATS_COUNT) {
                    TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，再等等嘛，需要两个人才可以开始"), function () {
                    }, function () {
                    }, true, PathGameTongyong.ui_tongyong_general + "btn_qd.png");
                    return;
                }
                this._shisanshuiStory.startRoomCardGame(mainUnit.guid, this._mapInfo.GetCardRoomId());
            };
            // 房卡模式解散游戏,是否需要房主限制
            ShisanshuiMapPage.prototype.masterDismissCardGame = function () {
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
                            _this._shisanshuiStory.endRoomCardGame(mainUnit.GetIndex(), _this._mapInfo.GetCardRoomId());
                            _this._game.sceneObjectMgr.leaveStory(true);
                        }, null, false, PathGameTongyong.ui_tongyong_general + "btn_tx.png");
                    }
                }
            };
            //重置数据
            ShisanshuiMapPage.prototype.resetData = function () {
                //不是房卡模式，才会去设置
                if (!this.isCardRoomType) {
                    this._battleIndex = -1;
                }
                this._shisanshuiMgr.isReLogin = false;
                this._shisanshuiStory && (this._shisanshuiStory.isReConnected = false);
                this._settleWinInfo = [];
                this._settleLoseInfo = [];
                this._totalVla = 0;
                this._daQiangInfo = [];
                this._touQiang = 0;
                this._zhongQiang = 0;
                this._weiQiang = 0;
                this._compareCount = 0;
                this._qldUnit = null;
                this._specialCardsInfo = [];
                this._playAniCount = 0;
                this._pointTemp = [];
                this._showCards = [];
                this._isPlayCard = false;
            };
            ShisanshuiMapPage.prototype.clearMapInfoListen = function () {
                this._game.sceneObjectMgr.off(ShisanshuiMapInfo.EVENT_SSS_STATUS_CHECK, this, this.onUpdateMapState);
                this._game.sceneObjectMgr.off(ShisanshuiMapInfo.EVENT_SSS_BATTLE_CHECK, this, this.updateBattledInfo);
                this._game.sceneObjectMgr.off(ShisanshuiMapInfo.EVENT_SSS_COUNT_DOWN, this, this.updateCountDown); //倒计时更新
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE, this, this.updateCardRoomDisplayInfo);
                this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                Laya.timer.clearAll(this);
                Laya.Tween.clearAll(this);
            };
            ShisanshuiMapPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_menu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_continue.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_cardtype.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_rules.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_record.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_chongzhi.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.view_type.ani1.off(LEvent.COMPLETE, this, this.onPlayAniOver);
                    this._game.sceneObjectMgr.off(ShisanshuiMapInfo.EVENT_SSS_STATUS_CHECK, this, this.onUpdateMapState);
                    this._game.sceneObjectMgr.off(ShisanshuiMapInfo.EVENT_SSS_BATTLE_CHECK, this, this.updateBattledInfo);
                    this._game.sceneObjectMgr.off(ShisanshuiMapInfo.EVENT_SSS_COUNT_DOWN, this, this.updateCountDown); //倒计时更新
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE, this, this.updateCardRoomDisplayInfo);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                    this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                    Laya.timer.clearAll(this);
                    Laya.Tween.clearAll(this);
                    this._mapInfo = null;
                    this._game.stopMusic();
                    this._game.stopAllSound();
                    this.setCardRoomBtnEvent(false);
                }
                _super.prototype.close.call(this);
            };
            return ShisanshuiMapPage;
        }(game.gui.base.Page));
        page_1.ShisanshuiMapPage = ShisanshuiMapPage;
    })(page = gameshisanshui.page || (gameshisanshui.page = {}));
})(gameshisanshui || (gameshisanshui = {}));
//# sourceMappingURL=ShisanshuiMapPage.js.map