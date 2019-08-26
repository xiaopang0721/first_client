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
* 牌九-房间
*/
var gamepaijiu;
(function (gamepaijiu) {
    var page;
    (function (page_1) {
        var ChipConfig = {
            "121": [1, 50],
            "122": [10, 100],
            "123": [50, 500],
            "124": [200, 1000],
        };
        var CardType = ["地高九", "天高九", "地杠", "天杠", "地王", "天王", "杂五", "杂七", "杂八", "杂九",
            "双零霖", "双高脚", "双红头", "双斧头", "双板凳", "双长三", "双梅", "双鹅", "双人", "双地", "双天",
            "至尊", "零点", "一点", "二点", "三点", "四点", "五点", "六点", "七点", "八点", "九点"]; //牌型
        var BetConfig = {
            1: [1],
            2: [1, 2],
            3: [1, 2, 3],
            4: [1, 2, 3, 4],
            5: [1, 2, 3, 4, 5],
            6: [1, 2, 3, 5, 6],
            7: [1, 2, 4, 5, 7],
            8: [1, 2, 4, 6, 8],
            9: [1, 2, 5, 7, 9],
            10: [1, 3, 5, 8, 10],
            11: [1, 3, 6, 8, 11],
            12: [1, 3, 6, 9, 12],
            13: [1, 3, 7, 10, 13],
            14: [1, 4, 7, 11, 14],
            15: [1, 4, 8, 11, 15],
            16: [1, 4, 8, 12, 16],
            17: [1, 4, 9, 13, 17],
            18: [1, 5, 9, 14, 18],
            19: [1, 5, 10, 14, 19],
            20: [1, 5, 10, 15, 20],
            21: [1, 5, 11, 16, 21],
            22: [1, 6, 11, 17, 22],
            23: [1, 6, 12, 17, 23],
            24: [1, 6, 12, 18, 24],
            25: [1, 6, 13, 19, 25],
            26: [1, 7, 13, 20, 26],
            27: [1, 7, 14, 20, 27],
            28: [1, 7, 14, 21, 28],
            29: [1, 7, 15, 22, 29],
            30: [1, 8, 15, 23, 30],
        };
        var MONEY_NUM = 40; // 特效金币数量
        var MONEY_FLY_TIME = 30; // 金币飞行时间间隔
        //音效url
        var MUSIC_PATH = {
            bgMusic: "qzpj_bgm.mp3",
            moneyMusic: "piaoqian.mp3",
            randBankerMusic: "suijizhuangjia.mp3",
            bankerMusic: "dingzhuang.mp3",
            playDiceMusic: "yaotouzi.mp3",
            showCardMusic: "qzpj_playcard.mp3",
            loseMusic: "tongyong/lose",
            winMusic: "tongyong/win",
        };
        var PaijiuMapPage = /** @class */ (function (_super) {
            __extends(PaijiuMapPage, _super);
            function PaijiuMapPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._battleIndex = -1;
                _this._bankerTemp = []; //所有抢庄的人
                _this._clipList = []; //飘字
                _this._settleWinInfo = []; //结算信息,闲家赢
                _this._settleLoseInfo = []; //结算信息，闲家输
                _this._betPerTemp = []; //下注倍数配置
                _this._bankerPer = 0; //抢庄倍数
                _this._betTemps = []; //各个精灵下注倍数
                _this._settleInfo = []; //所有结算信息
                _this._allType = []; //所有人的牌型
                _this._cardConfig = [12, 24, 23, 14, 25, 34, 26, 35, 36, 45, 15, 16, 46, 56, 22, 33, 55, 13, 44, 11, 66]; //牌值对应的牌
                _this._diff = 500;
                _this._timeList = {};
                _this._firstList = {};
                _this._nameStrInfo = ["xs", "px", "gsy", "gg", "cs", "tdg"];
                //随一个庄家
                _this._randCount = 0;
                _this._isNeedDuang = false;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    Path_game_paijiu.atlas_game_ui + "paijiu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/shaizi.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/hulu.atlas",
                    Path_game_paijiu.atlas_game_ui + "paijiu/gupai.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            PaijiuMapPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.paijiu.PaiJiuUI');
                this.addChild(this._viewUI);
                this._pageHandle = PageHandle.Get("PaijiuMapPage"); //额外界面控制器
                if (!this._paijiuStory) {
                    this._paijiuStory = this._game.sceneObjectMgr.story;
                    this._paijiuMgr = this._paijiuStory.paijiuMgr;
                    this._paijiuMgr.on(PaijiuMgr.CONTINUE_MATCH, this, this.onContinueGame);
                }
                this._game.playMusic(Path_game_paijiu.music_paijiu + MUSIC_PATH.bgMusic);
            };
            // 页面打开时执行函数
            PaijiuMapPage.prototype.onOpen = function () {
                var _this = this;
                _super.prototype.onOpen.call(this);
                this.updateViewUI();
                this.onUpdateUnitOffline();
                if (!this._paijiuMgr.isRelogin) {
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, function (page) {
                        _this._viewUI.btn_continue.visible = page.dataSource;
                    });
                    this._viewUI.btn_continue.visible = false;
                }
                else {
                    this.onUpdateMapInfo();
                }
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.on(PaijiuMapInfo.EVENT_PG_STATUS_CHECK, this, this.onUpdateMapState);
                this._game.sceneObjectMgr.on(PaijiuMapInfo.EVENT_PG_BATTLE_CHECK, this, this.updateBattledInfo);
                this._game.sceneObjectMgr.on(PaijiuMapInfo.EVENT_PG_COUNT_DOWN, this, this.updateCountDown); //倒计时更新
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this._viewUI.btn_menu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_cardtype.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rules.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_record.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_continue.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_cards.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chongzhi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                for (var i = 1; i < 6; i++) {
                    this._viewUI["btn_bet" + i] && this._viewUI["btn_bet" + i].on(LEvent.CLICK, this, this.onBet, [i]);
                }
                for (var i = 0; i < 5; i++) {
                    this._viewUI["btn_banker" + i] && this._viewUI["btn_banker" + i].on(LEvent.CLICK, this, this.onBanker, [i]);
                }
            };
            //打开时要处理的东西
            PaijiuMapPage.prototype.updateViewUI = function () {
                this._viewUI.img_menu.visible = false;
                this._viewUI.btn_continue.visible = false;
                this._viewUI.text_info.visible = false;
                this._viewUI.text_roomtype.visible = false;
                this._viewUI.box_bet.visible = false;
                this._viewUI.view_type.visible = false;
                this._viewUI.img_time.visible = false;
                this._viewUI.img_time.ani1.stop();
                this._viewUI.box_banker.visible = false;
                this._viewUI.view_touzi.visible = false;
                this._viewUI.view_touzi.ani1.stop();
                this._viewUI.box_cards.visible = false;
                this._viewUI.box_betnum.visible = false;
                this._viewUI.btn_cards.visible = false;
                var val = 10; //抢庄动画
                if (this._paijiuMgr.isRelogin) {
                    val = 15;
                }
                for (var i = 0; i < 4; i++) {
                    this._viewUI["view_head" + i].visible = false;
                    this._viewUI["view_banker" + i].visible = false;
                    this._viewUI["view_banker" + i].ani1.gotoAndStop(val);
                    this._viewUI["view_arrow" + i].visible = false;
                    this._viewUI["view_arrow" + i].ani1.stop();
                    if (i > 0) {
                        this._viewUI["view_player" + i].box_betnum.visible = false;
                        this._viewUI["view_player" + i].view_type.visible = false;
                    }
                }
            };
            //按钮点击
            PaijiuMapPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_menu:
                        this._viewUI.img_menu.visible = true;
                        this._viewUI.btn_menu.visible = false;
                        break;
                    case this._viewUI.btn_back:
                        var mapinfo = this._game.sceneObjectMgr.mapInfo;
                        if (mapinfo && mapinfo.GetPlayState() == 1) {
                            this._game.showTips("游戏尚未结束，请先打完这局哦~");
                            return;
                        }
                        this._battleIndex = -1;
                        this.resetData();
                        this._paijiuMgr.clear();
                        this._paijiuStory.clear();
                        this.clearMapInfoListen();
                        this.clearClip();
                        this._game.sceneObjectMgr.leaveStory(true);
                        // this.close();
                        break;
                    case this._viewUI.btn_cardtype:
                        this._game.uiRoot.general.open(page_1.PaijiuPageDef.PAGE_PAIJIU_RULE, function (page) {
                            page.dataSource = 1;
                        });
                        break;
                    case this._viewUI.btn_rules:
                        this._game.uiRoot.general.open(page_1.PaijiuPageDef.PAGE_PAIJIU_RULE);
                        break;
                    case this._viewUI.btn_set:
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING);
                        break;
                    case this._viewUI.btn_qifu:
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU);
                        break;
                    case this._viewUI.btn_record:
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, function (page) {
                            page.dataSource = page_1.PaijiuPageDef.GAME_NAME;
                        });
                        break;
                    case this._viewUI.btn_continue:
                        this.onContinueGame();
                        break;
                    case this._viewUI.btn_cards:
                        this._viewUI.box_cards.visible = !this._viewUI.box_cards.visible;
                        if (this._viewUI.box_cards.visible) {
                            this.showOtherCards();
                        }
                        break;
                    case this._viewUI.btn_chongzhi:
                        this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                        break;
                    default:
                        break;
                }
            };
            //点击任意地方关闭菜单
            PaijiuMapPage.prototype.onMouseClick = function (e) {
                if (e.currentTarget != this._viewUI.btn_menu) {
                    this._viewUI.img_menu.visible = false;
                    this._viewUI.btn_menu.visible = true;
                }
            };
            //选择抢庄倍数
            PaijiuMapPage.prototype.onBanker = function (index, e) {
                if (e.currentTarget) {
                    this._game.uiRoot.btnTween(e.currentTarget);
                }
                //下注按钮的倍数
                var val = index;
                this._game.network.call_qzpaijiu_banker(val);
            };
            //选择下注倍数
            PaijiuMapPage.prototype.onBet = function (index, e) {
                if (e.currentTarget) {
                    this._game.uiRoot.btnTween(e.currentTarget);
                }
                //下注按钮的倍数
                var val = this._betPerTemp[index - 1];
                this._game.network.call_qzpaijiu_bet(val);
            };
            //继续游戏
            PaijiuMapPage.prototype.onContinueGame = function () {
                if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < ChipConfig[this._paijiuStory.mapLv][1]) {
                    this.onNotEnoughMoney();
                    return;
                }
                if (this._game.sceneObjectMgr.mapInfo instanceof MapInfo) {
                    this._battleIndex = -1;
                    this.clearClip();
                    this.resetData();
                    this.updateViewUI();
                    // this._paijiuStory.removeListen();
                    // this.clearMapInfoListen();
                    this._paijiuMgr.clear();
                    this._paijiuMgr.resetData();
                    this._game.sceneObjectMgr.leaveStory();
                }
                else {
                    this.onUpdateMapInfo();
                }
            };
            PaijiuMapPage.prototype.onUnitAdd = function (u) {
                this.onUpdateUnit();
            };
            //玩家出去了
            PaijiuMapPage.prototype.onUnitRemove = function (u) {
                this.onUpdateUnit();
                var posIdx = (u.GetIndex() - this._mainIdx + 4) % 4;
                this._viewUI["view_banker" + posIdx].visible = false;
            };
            //精灵显示
            PaijiuMapPage.prototype.onUpdateUnit = function (qifu_index) {
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
                var maxCount = 4;
                var _loop_1 = function (index) {
                    var posIdx = (idx + index) % maxCount == 0 ? 4 : (idx + index) % maxCount;
                    var unit = this_1._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    this_1._viewUI["view_head" + index].visible = unit;
                    if (unit) {
                        //庄家存一下
                        if (unit.GetIdentity() == 1) {
                            this_1._bankerIdx = posIdx;
                        }
                        var name_1 = getMainPlayerName(unit.GetName());
                        this_1._viewUI["view_head" + index].text_name.text = name_1;
                        this_1._viewUI["view_head" + index].img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unit.GetHeadImg() + ".png";
                        if (this_1._curStatus != 9 /* MAP_STATE_SETTLE */ || this_1._paijiuMgr.isRelogin) {
                            this_1.updateMoney();
                        }
                        //头像框
                        this_1._viewUI["view_head" + index].img_txk.visible = unit.GetVipLevel() > 0;
                        if (this_1._viewUI["view_head" + index].img_txk.visible) {
                            this_1._viewUI["view_head" + index].img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + unit.GetVipLevel() + ".png";
                        }
                        //祈福成功 头像上就有动画
                        if (qifu_index && posIdx == qifu_index) {
                            this_1._viewUI["view_head" + index].qifu_type.visible = true;
                            this_1._viewUI["view_head" + index].qifu_type.skin = this_1._qifuTypeImgUrl;
                            this_1.playTween(this_1._viewUI["view_head" + index].qifu_type, qifu_index);
                        }
                        //时间戳变化 才加上祈福标志
                        if (unit.GetQiFuEndTime() > this_1._game.sync.serverTimeBys) {
                            if (qifu_index && posIdx == qifu_index) {
                                Laya.timer.once(2500, this_1, function () {
                                    _this._viewUI["view_head" + index].img_qifu.visible = true;
                                    if (_this._viewUI["view_head" + index].img_qifu.visible && unit.GetQiFuType()) {
                                        _this._viewUI["view_head" + index].img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + _this._nameStrInfo[unit.GetQiFuType() - 1] + ".png";
                                    }
                                });
                            }
                            else {
                                this_1._viewUI["view_head" + index].img_qifu.visible = true;
                                if (this_1._viewUI["view_head" + index].img_qifu.visible && unit.GetQiFuType()) {
                                    this_1._viewUI["view_head" + index].img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this_1._nameStrInfo[unit.GetQiFuType() - 1] + ".png";
                                }
                            }
                        }
                        else {
                            this_1._viewUI["view_head" + index].img_qifu.visible = false;
                        }
                    }
                };
                var this_1 = this;
                for (var index = 0; index < maxCount; index++) {
                    _loop_1(index);
                }
            };
            PaijiuMapPage.prototype.playTween = function (img, index, isTween) {
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
            PaijiuMapPage.prototype.onOptHandler = function (optcode, msg) {
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
            };
            //金币变化
            PaijiuMapPage.prototype.updateMoney = function () {
                if (!this._game.sceneObjectMgr.mainUnit)
                    return;
                var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var max = 4;
                for (var index = 0; index < max; index++) {
                    var posIdx = (idx + index) % max == 0 ? 4 : (idx + index) % max;
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    if (unit) {
                        var money = EnumToString.getPointBackNum(unit.GetMoney(), 2);
                        this._viewUI["view_head" + index].text_money.text = money;
                    }
                }
            };
            //地图监听
            PaijiuMapPage.prototype.onUpdateMapInfo = function () {
                var _this = this;
                var mapInfo = this._game.sceneObjectMgr.mapInfo;
                this._mapInfo = mapInfo;
                if (mapInfo) {
                    this._viewUI.view_touzi.ani1.on(LEvent.COMPLETE, this, this.showArrow);
                    this._viewUI.btn_continue.visible = false;
                    this.onUpdateUnit();
                    if (this._paijiuMgr.isRelogin) {
                        this._paijiuStory.mapLv = this._mapInfo.GetMapLevel();
                        this.resetBattleIdx();
                        this.onUpdateMapState();
                        this.updateBattledInfo();
                        this._paijiuMgr.isRelogin = false;
                        if (mapInfo.GetMapState() == 10 /* MAP_STATE_WAIT */) {
                            this.clearClip();
                            this.updateViewUI();
                            this.onUpdateUnit();
                            this._paijiuMgr.resetData();
                            this._paijiuMgr.clear();
                        }
                    }
                }
                else {
                    this.onUpdateUnitOffline();
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, function (page) {
                        _this._viewUI.btn_continue.visible = page.dataSource;
                    });
                    this._viewUI.btn_continue.visible = false;
                }
            };
            //假精灵数据
            PaijiuMapPage.prototype.onUpdateUnitOffline = function () {
                if (!this._paijiuMgr.unitOffline)
                    return;
                var unitOffline = this._paijiuMgr.unitOffline;
                var mPlayer = this._game.sceneObjectMgr.mainPlayer;
                if (unitOffline) {
                    this._viewUI.view_head0.visible = true;
                    var money = void 0;
                    if (mPlayer) {
                        if (!mPlayer.playerInfo)
                            return;
                        money = mPlayer.playerInfo.money;
                        this._viewUI.view_head0.text_name.text = getMainPlayerName(mPlayer.playerInfo.nickname);
                        this._viewUI.view_head0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + mPlayer.playerInfo.headimg + ".png";
                        this._viewUI.view_head0.img_qifu.visible = mPlayer.playerInfo.qifu_endtime > this._game.sync.serverTimeBys;
                        if (this._viewUI.view_head0.img_qifu.visible && mPlayer.playerInfo.qifu_type) {
                            this._viewUI.view_head0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[mPlayer.playerInfo.qifu_type - 1] + ".png";
                        }
                        //头像框
                        this._viewUI.view_head0.img_txk.visible = mPlayer.playerInfo.vip_level > 0;
                        if (this._viewUI.view_head0.img_txk.visible) {
                            this._viewUI.view_head0.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + mPlayer.playerInfo.vip_level + ".png";
                        }
                    }
                    else {
                        money = unitOffline.GetMoney();
                        this._viewUI.view_head0.text_name.text = getMainPlayerName(unitOffline.GetName());
                        this._viewUI.view_head0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unitOffline.GetHeadImg() + ".png";
                        this._viewUI.view_head0.img_qifu.visible = unitOffline.GetQiFuEndTime() > this._game.sync.serverTimeBys;
                        if (this._viewUI.view_head0.img_qifu.visible && unitOffline.GetQiFuType()) {
                            this._viewUI.view_head0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[unitOffline.GetQiFuType() - 1] + ".png";
                        }
                        //头像框
                        this._viewUI.view_head0.img_txk.visible = unitOffline.GetVipLevel() > 0;
                        if (this._viewUI.view_head0.img_txk.visible) {
                            this._viewUI.view_head0.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + unitOffline.GetVipLevel() + ".png";
                        }
                    }
                    money = EnumToString.getPointBackNum(money, 2);
                    this._viewUI.view_head0.text_money.text = money.toString();
                }
            };
            //地图状态
            PaijiuMapPage.prototype.onUpdateMapState = function () {
                if (!this._mapInfo)
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                if (!this._paijiuStory.mapLv)
                    return;
                this._curStatus = this._mapInfo.GetMapState();
                this.updateCountDown();
                var idx = mainUnit.GetIndex();
                if (!idx)
                    return;
                var betPos = this._mapInfo.GetCurrentBetPos();
                var state = this._mapInfo.GetMapState();
                this._viewUI.text_info.text = "牌局号：" + this._mapInfo.GetGameNo();
                this._viewUI.text_info.visible = true;
                this._viewUI.text_roomtype.visible = true;
                var str = "";
                if (this._paijiuStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_PAIJIU_1) {
                    str = "新手场：底注：";
                }
                else if (this._paijiuStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_PAIJIU_2) {
                    str = "小资场：底注：";
                }
                else if (this._paijiuStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_PAIJIU_3) {
                    str = "老板场：底注：";
                }
                else if (this._paijiuStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_PAIJIU_4) {
                    str = "富豪场：底注：";
                }
                this._viewUI.text_roomtype.text = str + ChipConfig[this._paijiuStory.mapLv][0];
                this._viewUI.btn_cards.visible = true;
                this.showOtherCards();
                if (state == 1 /* MAP_STATE_BANKER */) {
                    this._pageHandle.pushClose({ id: page_1.PaijiuPageDef.PAGE_PAIJIU_SETTLE, parent: this._game.uiRoot.HUD });
                    this._viewUI.box_banker.visible = true;
                    var money = mainUnit.GetMoney();
                    var maxVal = Math.floor(money / (ChipConfig[this._paijiuStory.mapLv][0] * 30));
                    maxVal = maxVal > 4 ? 4 : maxVal;
                    for (var i = 0; i < 5; i++) {
                        if (i <= maxVal) {
                            this._viewUI["btn_banker" + i].visible = true;
                        }
                        else {
                            this._viewUI["btn_banker" + i].visible = false;
                        }
                    }
                }
                else {
                    this._viewUI.box_banker.visible = false;
                }
                if (state == 2 /* MAP_STATE_BANKER_PLAY */) {
                    Laya.timer.loop(100, this, this.randBanker);
                    this.randBanker();
                }
                if (state >= 3 /* MAP_STATE_BET */) {
                    for (var i = 0; i < 4; i++) {
                        var unitIdx = (idx + i) % 4 == 0 ? 4 : (idx + i) % 4;
                        var unit = this._game.sceneObjectMgr.getUnitByIdx(unitIdx);
                        if (unit) {
                            if (unit.GetIdentity() != 1) {
                                this._viewUI["view_banker" + i].visible = false;
                            }
                            else {
                                this._viewUI["view_banker" + i].visible = true;
                            }
                        }
                        this._viewUI["view_banker" + i].ani1.stop();
                    }
                }
                if (state == 3 /* MAP_STATE_BET */) {
                    if (mainUnit.GetIdentity() != 1) {
                        this._viewUI.box_betnum.visible = false;
                    }
                    else {
                        if (this._bankerPer == 0) {
                            this._viewUI.img_bg.skin = Path_game_paijiu.ui_paijiu + "tu_bei.png";
                            this._viewUI.img_num1.skin = Path_game_paijiu.ui_paijiu + "bei_1.png";
                            this._viewUI.img_num1.visible = true;
                            this._viewUI.img_num1.x = 60;
                            this._bankerPer = 1;
                        }
                    }
                    for (var i = 1; i < 4; i++) {
                        var unitIdx = (idx + i) % 4 == 0 ? 4 : (idx + i) % 4;
                        var unit = this._game.sceneObjectMgr.getUnitByIdx(unitIdx);
                        if (unit) {
                            if (unit.GetIdentity() != 1) {
                                this._viewUI["view_player" + i].box_betnum.visible = false;
                            }
                            else {
                                //都不抢庄，那最后要显示抢1倍
                                if (this._bankerPer == 0) {
                                    this._viewUI["view_player" + i].img_bg.skin = Path_game_paijiu.ui_paijiu + "tu_bei.png";
                                    this._viewUI["view_player" + i].img_num1.skin = Path_game_paijiu.ui_paijiu + "bei_1.png";
                                    this._viewUI["view_player" + i].img_num1.visible = true;
                                    this._viewUI["view_player" + i].img_num1.x = 60;
                                    this._bankerPer = 1;
                                }
                            }
                        }
                        this._viewUI["view_banker" + i].ani1.stop();
                    }
                    //随庄家的动画
                    for (var i = 0; i < this._bankerTemp.length; i++) {
                        var unit = this._game.sceneObjectMgr.getUnitByIdx(this._bankerTemp[i]);
                        var index = (this._bankerTemp[i] - mainUnit.GetIndex() + 4) % 4;
                        if (unit.GetIdentity() == 1) {
                            this._viewUI["view_banker" + index].ani1.play(1, false);
                            this._bankerIdx = this._bankerTemp[i];
                            this._game.playSound(Path_game_paijiu.music_paijiu + MUSIC_PATH.bankerMusic, false);
                            break;
                        }
                    }
                    Laya.timer.clear(this, this.randBanker);
                    //是庄家，就不显示下注了
                    if (mainUnit.GetIdentity() == 1) {
                        this._viewUI.box_bet.visible = false;
                    }
                    else {
                        this._viewUI.box_bet.visible = true;
                    }
                    //下注按钮的倍数显示
                    var banker = this._game.sceneObjectMgr.getUnitByIdx(this._bankerIdx);
                    var bankerMoney = banker.GetMoney();
                    var bankePer = Math.floor(bankerMoney / (3 * ChipConfig[this._paijiuStory.mapLv][0]));
                    var selfMoney = mainUnit.GetMoney();
                    var xianPer = Math.floor(selfMoney / this._bankerPer);
                    var betPer = bankePer > xianPer ? xianPer : bankePer;
                    if (betPer > 30) {
                        betPer = 30;
                    }
                    if (betPer == 0) {
                        betPer = 1;
                    }
                    var temps = BetConfig[betPer];
                    this._betPerTemp = [];
                    for (var i = 0; i < temps.length; i++) {
                        this._betPerTemp.push(temps[i]);
                    }
                    for (var i = 0; i < this._betPerTemp.length; i++) {
                        var index = i + 1;
                        this._viewUI["btn_bet" + index].label = this._betPerTemp[i] + "倍";
                    }
                    for (var k = this._betPerTemp.length + 1; k < 6; k++) {
                        this._viewUI["btn_bet" + k].visible = false;
                    }
                }
                else {
                    this._viewUI.box_bet.visible = false;
                }
                if (state == 4 /* MAP_STATE_DICE */) {
                    this._viewUI.view_touzi.visible = true;
                    this._viewUI.view_touzi.ani1.play(1, false);
                    this._game.playSound(Path_game_paijiu.music_paijiu + MUSIC_PATH.playDiceMusic, false);
                }
                else {
                    this._viewUI.view_touzi.visible = false;
                    this._viewUI.view_touzi.ani1.stop();
                }
                if (state == 9 /* MAP_STATE_SETTLE */) {
                    this.addBankerWinEff();
                }
                if (state == 10 /* MAP_STATE_WAIT */) {
                    //传数据，打开结算界面
                    this.operSettlePage();
                    this.clearClip();
                    this.resetData();
                    this.updateViewUI();
                    this.onUpdateUnit();
                    this._paijiuMgr.resetData();
                    this._paijiuMgr.clear();
                    this._paijiuMgr.isReDealCard = false;
                }
                if (state == 11 /* MAP_STATE_END */) {
                    this._viewUI.btn_continue.visible = true;
                }
                this._pageHandle.updatePageHandle();
                this._pageHandle.reset();
            };
            //判断下是不是有人钱不够了
            PaijiuMapPage.prototype.checkMoney = function () {
                var flag = false;
                for (var i = 1; i < 5; i++) {
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(i);
                    if (unit) {
                        if (unit.GetMoney() < ChipConfig[this._paijiuStory.mapLv][1]) {
                            flag = true;
                            break;
                        }
                    }
                }
                return flag;
            };
            //打开结算界面
            PaijiuMapPage.prototype.operSettlePage = function () {
                if (this._betTemps.length == 0)
                    return;
                if (this._settleInfo.length == 0)
                    return;
                if (this._allType.length == 0)
                    return;
                if (!this._mapInfo)
                    return;
                var temps = [];
                var infoTemps = [];
                for (var i = 1; i < 5; i++) {
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(i);
                    var betNum = void 0; //下注倍数
                    for (var k = 0; k < this._betTemps.length / 2; k++) {
                        if (i == this._betTemps[k * 2]) {
                            betNum = this._betTemps[k * 2 + 1];
                        }
                    }
                    var money = void 0; //结算金币
                    for (var j = 0; j < this._settleInfo.length / 2; j++) {
                        if (i == this._settleInfo[j * 2]) {
                            money = this._settleInfo[j * 2 + 1];
                        }
                    }
                    var cardType = void 0; //牌型
                    for (var l = 0; l < this._allType.length / 2; l++) {
                        if (i == this._allType[l * 2]) {
                            cardType = CardType[this._allType[l * 2 + 1]];
                        }
                    }
                    if (unit) {
                        var obj = {
                            isMain: this._game.sceneObjectMgr.mainUnit.GetIndex() == i,
                            isbanker: unit.GetIdentity() == 1,
                            name: unit.GetName(),
                            point: ChipConfig[this._paijiuStory.mapLv][0],
                            betmultiple: betNum ? betNum : "",
                            bankermultiple: this._bankerPer,
                            money: money,
                            cardtype: cardType,
                        };
                        temps.push(obj);
                    }
                }
                infoTemps.push(this._mapInfo.GetRound() == 0);
                infoTemps.push(this.checkMoney());
                infoTemps.push(this._mapInfo.GetCountDown());
                infoTemps.push(temps);
                this._pageHandle.pushOpen({ id: page_1.PaijiuPageDef.PAGE_PAIJIU_SETTLE, dataSource: infoTemps, parent: this._game.uiRoot.HUD });
            };
            //显示剩余卡牌
            PaijiuMapPage.prototype.showOtherCards = function () {
                //剩余牌显示
                var cardStr = this._mapInfo.GetCardRecord();
                if (cardStr != "") {
                    var cardTemp = JSON.parse(cardStr);
                    for (var i = 1; i < 33; i++) {
                        var val = i;
                        if (val > 21) {
                            val = i - 11;
                        }
                        var cardType = this._cardConfig[val - 1];
                        if (cardTemp.indexOf(i) >= 0) {
                            this._viewUI["img_card" + i].skin = Path_game_paijiu.ui_paijiu + "paijiu_" + cardType + ".png";
                        }
                        else {
                            this._viewUI["img_card" + i].skin = Path_game_paijiu.ui_paijiu + "gupai/paijiu_" + cardType + ".png";
                        }
                    }
                }
            };
            PaijiuMapPage.prototype.randBanker = function () {
                var idx = this._bankerTemp[this._randCount % this._bankerTemp.length];
                var posIdx = (idx - this._mainIdx + 4) % 4;
                for (var i = 0; i < 4; i++) {
                    if (i == posIdx) {
                        this._viewUI["view_banker" + i].visible = true;
                    }
                    else {
                        this._viewUI["view_banker" + i].visible = false;
                    }
                }
                this._randCount++;
                if (this._randCount >= 11) {
                    for (var i = 1; i < 5; i++) {
                        var unit = this._game.sceneObjectMgr.getUnitByIdx(i);
                        var index = (i - this._mainIdx + 4) % 4;
                        if (unit) {
                            if (unit.GetIdentity() == 1) {
                                this._viewUI["view_banker" + index].visible = true;
                            }
                            else {
                                this._viewUI["view_banker" + index].visible = false;
                            }
                        }
                    }
                    Laya.timer.clear(this, this.randBanker);
                }
                if (this._bankerTemp.length > 1) {
                    this._game.playSound(Path_game_paijiu.music_paijiu + MUSIC_PATH.randBankerMusic, false);
                }
            };
            //更新倒计时时间戳
            PaijiuMapPage.prototype.updateCountDown = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                if (!mapinfo)
                    return;
                this._countDown = mapinfo.GetCountDown();
            };
            //操作倒计时
            PaijiuMapPage.prototype.deltaUpdate = function () {
                if (!(this._game.sceneObjectMgr.mapInfo instanceof PaijiuMapInfo))
                    return;
                if (!this._viewUI)
                    return;
                if (this._curStatus != 1 /* MAP_STATE_BANKER */ && this._curStatus != 3 /* MAP_STATE_BET */
                    && this._curStatus) {
                    this._viewUI.img_time.visible = false;
                    return;
                }
                var curTime = this._game.sync.serverTimeBys;
                var time = Math.floor(this._countDown - curTime) + 1;
                if (time > 0) {
                    this._viewUI.img_time.visible = true;
                    this._viewUI.img_time.txt_time.text = time.toString();
                }
                else {
                    this._viewUI.img_time.visible = false;
                }
            };
            //战斗日志
            PaijiuMapPage.prototype.updateBattledInfo = function () {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var battleInfoMgr = this._mapInfo.battleInfoMgr;
                var mainIdx = mainUnit.GetIndex();
                if (!mainIdx)
                    return;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    switch (battleInfo.Type) {
                        case 12: { //抢庄
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var idx = info.SeatIndex;
                                var type = info.BetVal;
                                var unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                                if (unit) {
                                    //玩家自己
                                    if (idx == mainIdx) {
                                        this._viewUI.box_betnum.visible = true;
                                        this._viewUI.img_num0.visible = false;
                                        if (type == 0) {
                                            this._viewUI.img_bg.skin = Path_game_paijiu.ui_paijiu + "qiang_0.png";
                                            this._viewUI.img_num1.visible = false;
                                        }
                                        else {
                                            this._viewUI.img_bg.skin = Path_game_paijiu.ui_paijiu + "tu_bei.png";
                                            this._viewUI.img_num1.skin = Path_game_paijiu.ui_paijiu + "bei_" + type + ".png";
                                            this._viewUI.img_num1.visible = true;
                                            this._viewUI.img_num1.x = 60;
                                        }
                                        this._viewUI.box_banker.visible = false;
                                    }
                                    else {
                                        var posIdx = (idx - mainIdx + 4) % 4;
                                        this._viewUI["view_player" + posIdx].box_betnum.visible = true;
                                        this._viewUI["view_player" + posIdx].img_num0.visible = false;
                                        if (type == 0) {
                                            this._viewUI["view_player" + posIdx].img_bg.skin = Path_game_paijiu.ui_paijiu + "qiang_0.png";
                                            this._viewUI["view_player" + posIdx].img_num1.visible = false;
                                        }
                                        else {
                                            this._viewUI["view_player" + posIdx].img_bg.skin = Path_game_paijiu.ui_paijiu + "tu_bei.png";
                                            this._viewUI["view_player" + posIdx].img_num1.skin = Path_game_paijiu.ui_paijiu + "bei_" + type + ".png";
                                            this._viewUI["view_player" + posIdx].img_num1.visible = true;
                                            this._viewUI["view_player" + posIdx].img_num1.x = 60;
                                        }
                                    }
                                }
                                if (type > this._bankerPer) {
                                    this._bankerPer = type;
                                    this._bankerTemp = [];
                                    this._bankerTemp.push(idx);
                                }
                                else if (type == this._bankerPer) {
                                    this._bankerTemp.push(idx);
                                }
                            }
                            break;
                        }
                        case 13: { //下注
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var idx = info.SeatIndex;
                                var val = info.BankerRate;
                                var unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                                if (unit) {
                                    //玩家自己
                                    if (idx == mainIdx) {
                                        this._viewUI.box_betnum.visible = true;
                                        this._viewUI.img_bg.skin = Path_game_paijiu.ui_paijiu + "tu_bei1.png";
                                        if (val < 10) {
                                            this._viewUI.img_num1.visible = false;
                                            this._viewUI.img_num0.visible = true;
                                            this._viewUI.img_num0.skin = Path_game_paijiu.ui_paijiu + "bei_" + val + ".png";
                                            this._viewUI.img_num0.x = 60;
                                        }
                                        else {
                                            this._viewUI.img_num1.visible = true;
                                            this._viewUI.img_num1.skin = Path_game_paijiu.ui_paijiu + "bei_" + Math.floor(val / 10) + ".png";
                                            this._viewUI.img_num1.x = 48;
                                            this._viewUI.img_num0.visible = true;
                                            this._viewUI.img_num0.skin = Path_game_paijiu.ui_paijiu + "bei_" + val % 10 + ".png";
                                            this._viewUI.img_num0.x = 72;
                                        }
                                        this._viewUI.box_bet.visible = false;
                                    }
                                    else {
                                        var posIdx = (idx - mainIdx + 4) % 4;
                                        this._viewUI["view_player" + posIdx].box_betnum.visible = true;
                                        this._viewUI["view_player" + posIdx].img_bg.skin = Path_game_paijiu.ui_paijiu + "tu_bei1.png";
                                        if (val < 10) {
                                            this._viewUI["view_player" + posIdx].img_num1.visible = false;
                                            this._viewUI["view_player" + posIdx].img_num0.visible = true;
                                            this._viewUI["view_player" + posIdx].img_num0.skin = Path_game_paijiu.ui_paijiu + "bei_" + val + ".png";
                                            this._viewUI["view_player" + posIdx].img_num0.x = 60;
                                        }
                                        else {
                                            this._viewUI["view_player" + posIdx].img_num1.visible = true;
                                            this._viewUI["view_player" + posIdx].img_num1.skin = Path_game_paijiu.ui_paijiu + "bei_" + Math.floor(val / 10) + ".png";
                                            this._viewUI["view_player" + posIdx].img_num1.x = 48;
                                            this._viewUI["view_player" + posIdx].img_num0.visible = true;
                                            this._viewUI["view_player" + posIdx].img_num0.skin = Path_game_paijiu.ui_paijiu + "bei_" + val % 10 + ".png";
                                            this._viewUI["view_player" + posIdx].img_num0.x = 72;
                                        }
                                    }
                                    //存下下注倍数
                                    this._betTemps.push(idx);
                                    this._betTemps.push(val);
                                }
                            }
                            break;
                        }
                        case 24: { //摊牌
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var idx = info.SeatIndex;
                                this._paijiuMgr.showCards(info.Cards, idx);
                                var posIdx = (idx - mainIdx + 4) % 4;
                                var cardType = this._paijiuMgr.checkCardsType(info.Cards);
                                var type = void 0;
                                var typeIdx = type; //牌型key
                                if (cardType > 0) {
                                    type = cardType;
                                    typeIdx = type - 1;
                                }
                                else {
                                    type = this._paijiuMgr.checkCardsCount(info.Cards);
                                    typeIdx = 22 + type;
                                }
                                //存下牌型
                                this._allType.push(idx);
                                this._allType.push(typeIdx);
                                //显示牌型
                                if (posIdx == 0) {
                                    this._viewUI.view_type.visible = true;
                                    this._viewUI.view_type.ani1.play(1, false);
                                    if (cardType > 0) {
                                        this._viewUI.view_type.img_type.skin = Path_game_paijiu.ui_paijiu + "pjtype_" + type + ".png";
                                    }
                                    else {
                                        this._viewUI.view_type.img_type.skin = Path_game_paijiu.ui_paijiu + "pjdian_" + type + ".png";
                                    }
                                }
                                else {
                                    this._viewUI["view_player" + posIdx].view_type.visible = true;
                                    this._viewUI["view_player" + posIdx].view_type.ani1.play(1, false);
                                    if (cardType > 0) {
                                        this._viewUI["view_player" + posIdx].view_type.img_type.skin = Path_game_paijiu.ui_paijiu + "pjtype_" + type + ".png";
                                    }
                                    else {
                                        this._viewUI["view_player" + posIdx].view_type.img_type.skin = Path_game_paijiu.ui_paijiu + "pjdian_" + type + ".png";
                                    }
                                }
                                if (!this._paijiuMgr.isRelogin) {
                                    this._game.playSound(Path_game_paijiu.music_paijiu + MUSIC_PATH.showCardMusic, false);
                                }
                            }
                            break;
                        }
                        case 11: { //结算
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                if (info.SeatIndex != this._bankerIdx) {
                                    if (info.SettleVal > 0) {
                                        this._settleWinInfo.push(info.SeatIndex);
                                        this._settleWinInfo.push(info.SettleVal);
                                    }
                                    else {
                                        this._settleLoseInfo.push(info.SeatIndex);
                                        this._settleLoseInfo.push(info.SettleVal);
                                    }
                                }
                                else {
                                    this._bankerMoneyChange = info.SettleVal;
                                }
                                this._settleInfo.push(info.SeatIndex);
                                this._settleInfo.push(info.SettleVal);
                                //记下主玩家货币变化
                                if (info.SeatIndex == mainIdx) {
                                    this._moneyChange = info.SettleVal;
                                }
                            }
                            break;
                        }
                        case 2: { //摇骰子结果
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                this._viewUI.view_touzi.img_dice1.skin = PathGameTongyong.ui_tongyong_general + "effect/shaizi/shaizi" + info.BetVal + ".png";
                                this._viewUI.view_touzi.img_dice2.skin = PathGameTongyong.ui_tongyong_general + "effect/shaizi/shaizi" + info.SeeCard + ".png";
                                //找下庄家
                                var bankerIdx = void 0;
                                for (var k = 1; k < 5; k++) {
                                    var unit = this._game.sceneObjectMgr.getUnitByIdx(k);
                                    if (unit) {
                                        if (unit.GetIdentity() == 1) {
                                            bankerIdx = k;
                                        }
                                    }
                                }
                                var pos = (info.BetVal + info.SeeCard - 1) % 4 + bankerIdx;
                                if (pos > 4) {
                                    pos = pos - 4;
                                }
                                this._paijiuMgr.firstPos = pos;
                                //断线重连发牌，要在摇了骰子之后
                                if (this._paijiuStory.checkReconect) {
                                    this._paijiuStory.reDealCards();
                                }
                            }
                            break;
                        }
                    }
                }
            };
            PaijiuMapPage.prototype.showArrow = function () {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                //箭头
                var posIdx = (this._paijiuMgr.firstPos + 4 - mainUnit.GetIndex()) % 4;
                this._viewUI["view_arrow" + posIdx].visible = true;
                this._viewUI["view_arrow" + posIdx].ani1.play(1, true);
            };
            //重连之后，战斗日志从哪开始刷
            PaijiuMapPage.prototype.resetBattleIdx = function () {
                //第二回合特殊处理
                if (this._mapInfo.GetRound() != 1)
                    return;
                var battleInfoMgr = this._mapInfo.battleInfoMgr;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    if (battleInfo.Type == 11) {
                        this._battleIndex = i;
                    }
                }
            };
            //庄家赢钱
            PaijiuMapPage.prototype.addBankerWinEff = function () {
                var _this = this;
                var timeInternal = MONEY_NUM * MONEY_FLY_TIME;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                if (!this._bankerIdx)
                    return;
                Laya.timer.once(timeInternal, this, function () {
                    _this.addBankerLoseEff();
                    _this.addMoneyClip(_this._bankerMoneyChange, _this._bankerIdx);
                    _this.updateMoney();
                    if (_this._moneyChange >= 0) {
                        var musicType = MathU.randomRange(1, 3);
                        _this._game.playSound(PathGameTongyong.music_tongyong + MUSIC_PATH.winMusic + musicType + ".mp3", true);
                    }
                    else {
                        var musicType = MathU.randomRange(1, 4);
                        _this._game.playSound(PathGameTongyong.music_tongyong + MUSIC_PATH.loseMusic + musicType + ".mp3", true);
                    }
                });
                //通赔
                if (this._settleLoseInfo.length < 1)
                    return;
                var mainIdx = mainUnit.GetIndex();
                var bankerPos = (this._bankerIdx - mainIdx + 4) % 4;
                for (var i = 0; i < this._settleLoseInfo.length / 2; i++) {
                    var index = i * 2;
                    var unitPos = (this._settleLoseInfo[index] - mainIdx + 4) % 4;
                    if (i < this._settleLoseInfo.length / 2) {
                        this.addMoneyFly(unitPos, bankerPos);
                        this.addMoneyClip(this._settleLoseInfo[index + 1], this._settleLoseInfo[index]);
                    }
                }
                this._game.playSound(Path_game_paijiu.music_paijiu + MUSIC_PATH.moneyMusic, false);
            };
            //庄家输钱
            PaijiuMapPage.prototype.addBankerLoseEff = function () {
                //通吃
                if (this._settleWinInfo.length < 1)
                    return;
                var mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var bankerPos = (this._bankerIdx - mainIdx + 4) % 4;
                for (var i = 0; i < this._settleWinInfo.length / 2; i++) {
                    var index = i * 2;
                    var unitPos = (this._settleWinInfo[index] - mainIdx + 4) % 4;
                    if (i < this._settleWinInfo.length / 2) {
                        this.addMoneyFly(bankerPos, unitPos);
                        this.addMoneyClip(this._settleWinInfo[index + 1], this._settleWinInfo[index]);
                    }
                }
                this._game.playSound(Path_game_paijiu.music_paijiu + MUSIC_PATH.moneyMusic, false);
            };
            //金币变化 飘金币特效
            PaijiuMapPage.prototype.addMoneyFly = function (fromPos, tarPos) {
                if (!this._game.mainScene || !this._game.mainScene.camera)
                    return;
                var fromX = this._game.mainScene.camera.getScenePxByCellX(this._viewUI["view_head" + fromPos].x);
                var fromY = this._game.mainScene.camera.getScenePxByCellY(this._viewUI["view_head" + fromPos].y);
                var tarX = this._game.mainScene.camera.getScenePxByCellX(this._viewUI["view_head" + tarPos].x);
                var tarY = this._game.mainScene.camera.getScenePxByCellY(this._viewUI["view_head" + tarPos].y);
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
            PaijiuMapPage.prototype.addMoneyClip = function (value, pos) {
                var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var valueClip = value >= 0 ? new PaijiuClip(PaijiuClip.ADD_MONEY_FONT) : new PaijiuClip(PaijiuClip.SUB_MONEY_FONT);
                var preSkin = value >= 0 ? PathGameTongyong.ui_tongyong_general + "tu_jia.png" : PathGameTongyong.ui_tongyong_general + "tu_jian.png";
                valueClip.scale(0.8, 0.8);
                valueClip.anchorX = 0.5;
                var moneyStr = EnumToString.getPointBackNum(Math.abs(value), 2);
                valueClip.setText(moneyStr + "", true, false, preSkin);
                var index = (pos - idx + 4) % 4;
                var posX = this._viewUI["view_head" + index].x + 50;
                var posY = this._viewUI["view_head" + index].y + 50;
                var deep = this._viewUI.img_menu.parent.getChildIndex(this._viewUI.img_menu);
                if (!valueClip.parent)
                    this._viewUI.box_view.addChildAt(valueClip, deep);
                valueClip.pos(posX, posY);
                this._clipList.push(valueClip);
                Laya.Tween.clearAll(valueClip);
                Laya.Tween.to(valueClip, { y: posY - 80 }, 1000);
            };
            //清理飘钱动画
            PaijiuMapPage.prototype.clearClip = function () {
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
            //充值弹框
            PaijiuMapPage.prototype.onNotEnoughMoney = function () {
                var _this = this;
                if (!this._game.sceneObjectMgr.mainPlayer)
                    return;
                if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < ChipConfig[this._paijiuStory.mapLv][1]) {
                    TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", ChipConfig[this._paijiuStory.mapLv][1]), function () {
                        _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                    }, function () {
                    }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
                }
            };
            //重置数据
            PaijiuMapPage.prototype.resetData = function () {
                // this._battleIndex = -1;
                this._paijiuMgr && (this._paijiuMgr.isRelogin = false);
                this._paijiuStory && (this._paijiuStory.checkReconect = false);
                this._bankerTemp = [];
                this._randCount = 0;
                this._bankerIdx = 0;
                this._settleWinInfo = [];
                this._settleLoseInfo = [];
                this._betPerTemp = [];
                this._bankerMoneyChange = 0;
                for (var i = 1; i < 6; i++) {
                    this._viewUI["btn_bet" + i].visible = true;
                }
                this._bankerPer = 0;
                this._betTemps = [];
                this._settleInfo = [];
                this._allType = [];
                for (var i = 0; i < 4; i++) {
                    this._viewUI["view_banker" + i].ani1.gotoAndStop(10);
                }
            };
            PaijiuMapPage.prototype.clearMapInfoListen = function () {
                this._game.sceneObjectMgr.off(PaijiuMapInfo.EVENT_PG_STATUS_CHECK, this, this.onUpdateMapState);
                this._game.sceneObjectMgr.off(PaijiuMapInfo.EVENT_PG_BATTLE_CHECK, this, this.updateBattledInfo);
                this._game.sceneObjectMgr.off(PaijiuMapInfo.EVENT_PG_COUNT_DOWN, this, this.updateCountDown); //倒计时更新
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this._viewUI.view_touzi.ani1.off(LEvent.COMPLETE, this, this.showArrow);
                Laya.timer.clearAll(this);
                Laya.Tween.clearAll(this);
            };
            PaijiuMapPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_menu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_continue.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_back.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_cardtype.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_rules.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_set.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_record.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_chongzhi.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_cards.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._game.sceneObjectMgr.off(PaijiuMapInfo.EVENT_PG_STATUS_CHECK, this, this.onUpdateMapState);
                    this._game.sceneObjectMgr.off(PaijiuMapInfo.EVENT_PG_BATTLE_CHECK, this, this.updateBattledInfo);
                    this._game.sceneObjectMgr.off(PaijiuMapInfo.EVENT_PG_COUNT_DOWN, this, this.updateCountDown); //倒计时更新
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                    this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                    this._viewUI.view_touzi.ani1.off(LEvent.COMPLETE, this, this.showArrow);
                    Laya.timer.clearAll(this);
                    Laya.Tween.clearAll(this);
                    if (this._paijiuMgr) {
                        this._paijiuMgr.off(PaijiuMgr.CONTINUE_MATCH, this, this.onContinueGame);
                    }
                    this._mapInfo = null;
                    this._game.stopMusic();
                    this._game.stopAllSound();
                }
                _super.prototype.close.call(this);
            };
            return PaijiuMapPage;
        }(game.gui.base.Page));
        page_1.PaijiuMapPage = PaijiuMapPage;
    })(page = gamepaijiu.page || (gamepaijiu.page = {}));
})(gamepaijiu || (gamepaijiu = {}));
//# sourceMappingURL=PaijiuMapPage.js.map