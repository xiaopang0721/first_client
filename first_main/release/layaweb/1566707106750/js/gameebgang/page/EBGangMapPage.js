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
* 二八杠-房间
*/
var gameebgang;
(function (gameebgang) {
    var page;
    (function (page_1) {
        var BANKER_RATE_DEFAULT = [0, 3, 0, 0, 0]; //抢庄的默认倍数;
        //音效url
        var MUSIC_PATH = {
            musicBGM: "28g_BGM.mp3",
            musicSendCard: "bar_send_card.mp3",
            musicOpenCard: "bar_open_card.mp3",
            musicDice: "bar_throw_dice.mp3",
            musicFlyChip: "chouma_fly.mp3",
            musicRandBanker: "dingzhuang.mp3",
            musicBanker: "suijizhuangjia.mp3",
            musicStart: "start.mp3",
            loseMusic: "tongyong/lose",
            winMusic: "tongyong/win",
        };
        var EBGangMapPage = /** @class */ (function (_super) {
            __extends(EBGangMapPage, _super);
            function EBGangMapPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._battleIndex = -1;
                _this._bankerRate = [0, 3, 0, 0, 0]; // 抢庄倍数  固定3倍起
                _this._betRate = [1, 0, 0, 0, 0]; // 抢庄倍数  固定3倍起
                _this._bankerTemp = []; //所有抢庄的人
                _this._mainIdx = 0; //主玩家座位号
                _this._bankerIdx = 0; //庄家位置
                _this._bankerBet = 0; //庄家抢庄倍数
                _this._chips = new Array(); //所有筹码 
                _this._chipSortScore = 0; //筹码层级
                _this._showCardDice1 = 1; // 开牌顺序1(逆时针)
                _this._showCardDice2 = 1; // 开牌顺序2(逆时针)
                _this._showCardCountList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 已出牌数量统计
                _this._unitCards = []; // 所有精灵拿到的牌  
                _this._unitBets = []; //所有精灵下注倍数  庄家为抢庄倍数
                _this._settleWinInfo = []; //结算信息,闲家赢 index是座位号
                _this._settleLoseInfo = []; //结算信息，闲家输 index是座位号
                _this._settleInfo = []; //所有结算信息 index是座位号
                _this._betTemps = []; //除庄家外各个精灵下注倍数
                _this._totalPoint = [0, 0, 0, 0, 0]; // 当前玩家累计积分 分别是座位号-积分值 
                _this._chipIndex = 1; // 桌上筹码的显示层级
                _this._isPlaying = false; //是否进行中
                _this._isGameEnd = false; //是否本局游戏结束
                _this._ui_tongyong_effect_shanzi = PathGameTongyong.ui_tongyong_general + "effect/shaizi/shaizi%s.png"; // 决定出牌顺序时的骰子
                _this._clipList = []; //飘字
                _this._diff = 500;
                _this._timeList = {};
                _this._firstList = {};
                //随一个庄家
                _this._randCount = 0;
                _this._nameStrInfo = ["xs", "px", "gsy", "gg", "cs", "tdg"];
                _this._isNeedDuang = false;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    Path_game_ebgang.atlas_game_ui + "ebgang.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "jiaru.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    Path_game_ebgang.atlas_game_ui + "ebgang/effect/yanhua.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/shaizi.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/hulu.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            EBGangMapPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.ebgang.EBGangUI');
                this.addChild(this._viewUI);
                if (!this._pageHandle) {
                    this._pageHandle = PageHandle.Get("EBGangMapPage"); //额外界面控制器
                }
                if (!this._EBGangMgr) {
                    this._EBGangStory = this._game.sceneObjectMgr.story;
                    this._EBGangMgr = this._EBGangStory.ebgMgr;
                    this._EBGangMgr.on(EBGangMgr.CONTINUE_GAME, this, this.onClickContinueGame);
                }
                this._game.playMusic(Path_game_ebgang.music_ebgang + MUSIC_PATH.musicBGM);
            };
            // 页面打开时执行函数
            EBGangMapPage.prototype.onOpen = function () {
                var _this = this;
                _super.prototype.onOpen.call(this);
                this.updateViewUI();
                this.onUpdateUnitOffline();
                this.resetData();
                if (this._EBGangStory.isReConnected) {
                    this.onUpdateMapInfo();
                }
                else {
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, function (page) {
                        _this._viewUI.btn_continue.visible = page.dataSource;
                    });
                    this._viewUI.btn_continue.visible = false;
                }
                this._viewUI.view_dice.ani1.on(LEvent.COMPLETE, this, this.afterDicePlay);
                this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(EBGangMapInfo.EVENT_EBG_STATUS_CHECK, this, this.onUpdateMapState);
                this._game.sceneObjectMgr.on(EBGangMapInfo.EVENT_EBG_BATTLE_CHECK, this, this.updateBattledInfo);
                this._game.sceneObjectMgr.on(EBGangMapInfo.EVENT_EBG_COUNT_DOWN, this, this.updateCountDown); //倒计时更新
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._viewUI.btn_cardtype.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_menu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rules.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_record.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_banker1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_banker2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_banker3.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_banker4.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_banker_no.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_cards.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chongzhi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_continue.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                for (var i = 1; i < 6; i++) {
                    this._viewUI["btn_bet" + i] && this._viewUI["btn_bet" + i].on(LEvent.CLICK, this, this.onBet, [i]);
                }
            };
            //打开时要处理的东西
            EBGangMapPage.prototype.updateViewUI = function () {
                this._viewUI.img_menu.visible = false;
                this.setUITextRound(false);
                for (var i = 0; i < 4; i++) {
                    this._viewUI["view_head" + i].visible = false;
                }
                this.setGameStartViewUI();
                this.resetBetButtonX(false);
                this.resetBankerButton(false);
            };
            // 游戏回合开始时的UI状态
            EBGangMapPage.prototype.setGameStartViewUI = function () {
                this._viewUI.box_bet.visible = false;
                this._viewUI.box_banker.visible = false;
                this._viewUI.btn_continue.visible = false;
                this._viewUI.img_qiang.visible = false;
                this._viewUI.img_time.visible = false;
                this._viewUI.box_betRate.visible = false;
                this._viewUI.view_dice.visible = false;
                this._viewUI.view_dice.ani1.gotoAndStop(2);
                this._viewUI.box_cards.visible = false;
                var val = 10; //抢庄动画
                if (this._EBGangStory.isReConnected) {
                    val = 15;
                }
                for (var i = 0; i < 4; i++) {
                    this._viewUI["view_head" + i].view_banker.visible = false;
                    this._viewUI["view_head" + i].view_banker.ani1.gotoAndStop(val);
                    this._viewUI["box_banker_tip" + i].visible = false;
                    this._viewUI["view_player" + i].visible = false;
                    this._viewUI["view_showcard" + i].visible = false;
                    this._viewUI["view_showcard" + i].ani1.gotoAndStop(1);
                    if (i > 0) {
                        this._viewUI["view_player" + i].view_type.visible = false;
                        this._viewUI["view_player" + i].img_frame.visible = false;
                        this._viewUI["view_player" + i].img_banker.visible = false;
                        this._viewUI["view_player" + i].box_betRate.visible = false;
                    }
                }
                this.resetBetButtonX(false);
                this.resetBankerButton(false);
            };
            //地图状态
            EBGangMapPage.prototype.onUpdateMapState = function () {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                this.updateCountDown();
                this._currState = this._mapInfo.GetMapState();
                this.setUITextRound(this._currState >= 2 /* MAP_STATE_CARDROOM_WAIT */);
                this.hideBankerTips(this._currState);
                this._isPlaying = this._currState >= 3 /* MAP_STATE_SHUFFLE */ && this._currState < 17 /* MAP_STATE_END */;
                switch (this._currState) {
                    case 0 /* MAP_STATE_NONE */:
                        this._pageHandle.pushClose({ id: page_1.EbgangPageDef.PAGE_EBG_SETTLEMENT, parent: this._game.uiRoot.general });
                        break;
                    case 3 /* MAP_STATE_SHUFFLE */:
                        this.setGameStart(this._currState);
                        break;
                    case 5 /* MAP_STATE_BANKER */:
                        this._pageHandle.pushClose({ id: page_1.EbgangPageDef.PAGE_EBG_BEGIN, parent: this._game.uiRoot.HUD });
                        this.setBankerButtonState(this._currState);
                        break;
                    case 6 /* MAP_STATE_SET_BANKER */:
                        this.setRandomBanker();
                        break;
                    case 7 /* MAP_STATE_BET */:
                        this.setBetButtonState(this._currState, mainUnit);
                        break;
                    case 9 /* MAP_STATE_CHOOSE_SHOW_CARDS */:
                        this.setChooseShowCards(this._currState);
                        break;
                    case 10 /* MAP_STATE_SORT_SHOW_CARDS */:
                        this._viewUI.view_dice.visible = false;
                        this._game.playSound(Path_game_ebgang.music_ebgang + MUSIC_PATH.musicSendCard, false);
                        break;
                    case 13 /* MAP_STATE_COMPARE */:
                        break;
                    case 15 /* MAP_STATE_SETTLEING */:
                        this.setCardRecord();
                        this.showCardCountList();
                        this.addBankerWinEff();
                        break;
                    case 16 /* MAP_STATE_WAIT */:
                        this.onUpdateUnit();
                        //传数据，打开单局结算界面
                        this.openSettlePage();
                        this.resetRoundData();
                        this._EBGangMgr.resetData();
                        break;
                    case 17 /* MAP_STATE_END */:
                        //传数据，打开单局结算界面
                        this.openSettlePage();
                        this.setGameEnd();
                        break;
                    default:
                        break;
                }
                this._pageHandle.updatePageHandle(); //更新额外界面的开关状态
                this._pageHandle.reset(); //清空额外界面存储数组
            };
            // 房间左下角信息
            EBGangMapPage.prototype.setUITextRound = function (isVisible) {
                this._viewUI.text_info.visible = isVisible;
                this._viewUI.text_roomtype.visible = isVisible;
                this._viewUI.text_round.visible = isVisible;
                if (isVisible) {
                    var gameNo = this._mapInfo.GetGameNo();
                    var hasGameNo = gameNo != "";
                    this._viewUI.text_info.visible = hasGameNo;
                    if (hasGameNo)
                        this._viewUI.text_info.text = "牌局号：" + gameNo;
                    var str = "底注：" + EBGangMgr.ROOM_CONFIG[this._EBGangStory.mapLv];
                    this._viewUI.text_roomtype.text = str;
                    var total_roundcount = EBGangMgr.MAX_ROUND_COUNT;
                    this._viewUI.text_round.text = "局数：" + (this._mapInfo.GetRound() + 1).toString() + "/" + total_roundcount.toString();
                }
            };
            // 重置 下注按纽的坐标
            EBGangMapPage.prototype.resetBetButtonX = function (isVisible) {
                this._viewUI.btn_bet1.visible = isVisible;
                this._viewUI.btn_bet1.x = 0;
                this._viewUI.btn_bet1.left = 0;
                var _width = this._viewUI.btn_bet1.width;
                for (var i = 2; i <= 5; i++) {
                    this._viewUI["btn_bet" + i].visible = isVisible;
                    this._viewUI["btn_bet" + i].left = this._viewUI["btn_bet" + (i - 1)].left + _width + 20;
                }
            };
            EBGangMapPage.prototype.resetBankerButton = function (isVisible) {
                this._viewUI.btn_banker_no.visible = true;
                for (var i = 1; i < 5; i++) {
                    this._viewUI["btn_banker" + i].visible = isVisible;
                }
            };
            // 抢庄相关的提示
            EBGangMapPage.prototype.hideBankerTips = function (state) {
                this._viewUI.box_banker.visible = this._currState == 5 /* MAP_STATE_BANKER */;
                if (state > 6 /* MAP_STATE_SET_BANKER */) {
                    for (var index = 0; index < 4; index++) {
                        this._viewUI["box_banker_tip" + index].visible = false;
                    }
                }
            };
            //选择下注倍数
            EBGangMapPage.prototype.onBet = function (index, e) {
                if (e.currentTarget) {
                    this._game.uiRoot.btnTween(e.currentTarget);
                }
                //下注按钮的倍数
                this._viewUI.box_bet.visible = false;
                this._viewUI.txt_tip.text = "等待玩家下注";
                this._viewUI.box_tip.visible = true;
                var val = this._betRate[index - 1];
                this._game.network.call_ebgang_bet(val);
            };
            //精灵显示
            EBGangMapPage.prototype.onUpdateUnit = function (qifu_index) {
                var _this = this;
                var mapinfo = this._mapInfo;
                if (!mapinfo)
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var idx = mainUnit.GetIndex();
                if (!idx)
                    return;
                var _loop_1 = function (index) {
                    var posIdx = (idx + index) % EBGangMgr.MAX_SEATS_COUNT == 0 ? EBGangMgr.MAX_SEATS_COUNT : (idx + index) % EBGangMgr.MAX_SEATS_COUNT;
                    var unit = this_1._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    this_1._viewUI["view_head" + index].visible = unit;
                    if (unit) {
                        //庄家存一下
                        if (unit.GetIdentity() == 1) {
                            this_1._bankerIdx = unit.GetIndex();
                            this_1._bankerBet = unit.GetLzNum();
                            if (unit.GetIndex() == idx) {
                                this_1._viewUI.box_bet.visible = false;
                            }
                        }
                        this_1._viewUI["view_head" + index].text_name.text = getMainPlayerName(unit.GetName());
                        this_1._viewUI["view_head" + index].text_money.text = EnumToString.getPointBackNum(unit.GetMoney(), 2);
                        // this.GetDoubleFloat(unit.GetMoney());
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
                        if (unit.GetQFEndTime(unit.GetQiFuType() - 1) > this_1._game.sync.serverTimeBys) {
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
                            this_1._viewUI["view_head" + index].img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unit.GetHeadImg() + ".png";
                        }
                    }
                };
                var this_1 = this;
                for (var index = 0; index < EBGangMgr.MAX_SEATS_COUNT; index++) {
                    _loop_1(index);
                }
            };
            EBGangMapPage.prototype.playTween = function (img, index, isTween) {
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
            EBGangMapPage.prototype.onUpdateMapInfo = function () {
                var _this = this;
                var mapInfo = this._game.sceneObjectMgr.mapInfo;
                this._mapInfo = mapInfo;
                if (mapInfo) {
                    this._viewUI.btn_continue.visible = false;
                    this.onUpdateUnit();
                    if (this._EBGangStory.isReConnected) {
                        this._EBGangStory.mapLv = this._mapInfo.GetMapLevel();
                        this.clearAllSeatMoneyClip();
                        // this._game.sceneObjectMgr.clearOfflineObject();
                        this._isGameEnd = false;
                        this.setCardRecord();
                        this.resetBattleIdx();
                        this.updateBattledInfo();
                        this.onUpdateMapState();
                        this.resetBankerHeadIcon();
                        this._EBGangStory.isReConnected = false;
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
            EBGangMapPage.prototype.onUpdateUnitOffline = function () {
                if (!this._EBGangMgr.unitOffline)
                    return;
                var unitOffline = this._EBGangMgr.unitOffline;
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
                        this._viewUI.view_head0.img_qifu.visible = mPlayer.GetQiFuEndTime(mPlayer.playerInfo.qifu_type - 1) > this._game.sync.serverTimeBys;
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
            //获取两位小数
            EBGangMapPage.prototype.GetDoubleFloat = function (val) {
                var moneyStr;
                moneyStr = EnumToString.getPointBackNum(val, 2).toString();
                return moneyStr;
            };
            EBGangMapPage.prototype.randBanker = function () {
                var idx = this._bankerTemp[this._randCount % this._bankerTemp.length];
                var posIdx = this.getUIUnitIndex(idx);
                for (var i = 0; i < 4; i++) {
                    this._viewUI["view_head" + i].view_banker.visible = i == posIdx;
                }
                this._randCount++;
                if (this._randCount >= 20) {
                    // 看精灵的庄家下标是否发生了变化
                    for (var i = 1; i < 5; i++) {
                        var unit = this._game.sceneObjectMgr.getUnitByIdx(i);
                        if (unit) {
                            if (this._bankerIdx == 0 && unit.GetIdentity() == 1) {
                                this._bankerIdx = unit.GetIndex();
                                this._bankerBet = unit.GetLzNum();
                                Laya.timer.clear(this, this.randBanker);
                            }
                        }
                    }
                    // 庄家确定后
                    if (this._bankerIdx > 0) {
                        this._viewUI.img_qiang.visible = false;
                        var ctrl_idx = this.getUIUnitIndex(this._bankerIdx);
                        for (var i = 0; i < 4; i++) {
                            var isBanker = ctrl_idx == i;
                            this._viewUI["view_head" + i].view_banker.visible = isBanker;
                            this._viewUI["view_player" + i].visible = false;
                            this._viewUI["box_banker_tip" + i].visible = false;
                            if (isBanker) {
                                this._viewUI["view_head" + i].view_banker.ani1.play(1, false);
                                this._game.playSound(Path_game_ebgang.music_ebgang + MUSIC_PATH.musicBanker, false);
                                Laya.timer.clear(this, this.randBanker);
                            }
                            if (i > 0) {
                                this._viewUI["view_player" + i].img_banker.visible = false;
                            }
                        }
                    }
                }
                if (this._bankerTemp.length > 1) {
                    this._game.playSound(Path_game_ebgang.music_ebgang + MUSIC_PATH.musicRandBanker, false);
                }
            };
            // 根据精灵对象得到最大抢庄倍数
            EBGangMapPage.prototype.getMaxBankerNumByUnit = function (unit) {
                if (!unit)
                    return 0;
                var _max_banker_num = Math.floor(unit.GetMoney() / EBGangMgr.ROOM_CONFIG[this._EBGangStory.mapLv]);
                if (_max_banker_num > EBGangMgr.MAX_BANKER_NUM) {
                    _max_banker_num = EBGangMgr.MAX_BANKER_NUM;
                }
                return _max_banker_num;
            };
            // 根据当前庄家抢庄倍数得到最大下注倍数
            EBGangMapPage.prototype.getMaxBetNumByUnit = function (unit) {
                if (!unit)
                    return 0;
                var _max_bet_num = Math.floor(this._bankerBet / (this._EBGangMgr.totalUnitCount - 1));
                var _self_max_bet_num = Math.floor(unit.GetMoney() / EBGangMgr.ROOM_CONFIG[this._EBGangStory.mapLv]);
                if (_self_max_bet_num > _max_bet_num) {
                    _self_max_bet_num = _max_bet_num;
                }
                return _self_max_bet_num;
            };
            // 设置抢庄按纽状态
            EBGangMapPage.prototype.setBankerButtonState = function (state) {
                if (this._viewUI.box_banker.visible) {
                    this.resetBankerButton(false);
                    this._viewUI.txt_tip.text = "请选择本局能承受的最大赔付倍数进行抢庄!";
                    var bankLableText = "倍抢庄";
                    this._bankerRate = BANKER_RATE_DEFAULT;
                    this._viewUI.box_tip.visible = true;
                    var _max_banker_num = this.getMaxBankerNumByUnit(this._game.sceneObjectMgr.mainUnit);
                    this._viewUI.btn_banker1.visible = _max_banker_num >= EBGangMgr.MIN_BANKER_NUM;
                    if (this._viewUI.btn_banker1.visible) {
                        var _banker2_num = Math.floor(_max_banker_num / 3);
                        this._viewUI.btn_banker2.visible = _banker2_num > EBGangMgr.MIN_BANKER_NUM;
                        if (this._viewUI.btn_banker2.visible) {
                            this._bankerRate[2] = _banker2_num;
                            this._viewUI.btn_banker2.label = _banker2_num.toString() + bankLableText;
                            var _banker3_num = Math.floor(_max_banker_num * 2 / 3);
                            this._viewUI.btn_banker3.visible = _banker3_num > _banker2_num;
                            if (this._viewUI.btn_banker3.visible) {
                                this._bankerRate[3] = _banker3_num;
                                this._viewUI.btn_banker3.label = _banker3_num.toString() + bankLableText;
                                this._viewUI.btn_banker4.visible = _max_banker_num > _banker3_num;
                                if (this._viewUI.btn_banker4.visible) {
                                    this._bankerRate[4] = _max_banker_num;
                                    this._viewUI.btn_banker4.label = _max_banker_num.toString() + bankLableText;
                                }
                            }
                        }
                    }
                }
            };
            // 下注状态
            EBGangMapPage.prototype.setBetButtonState = function (state, mainUnit) {
                // 庄家就不显示下注了
                var isBetState = state == 7 /* MAP_STATE_BET */;
                this._viewUI.txt_tip.text = "开始下注";
                this._viewUI.box_tip.visible = isBetState;
                if (isBetState) {
                    this.resetBetButtonX(false);
                    // 隐藏庄家抢几倍的图标
                    var bankerUIIndex = this.getUIUnitIndex(this._bankerIdx);
                    this._viewUI["box_banker_tip" + bankerUIIndex].visible = false;
                    var isBanker = mainUnit.GetIdentity() == 1;
                    this._viewUI.box_bet.visible = !isBanker;
                    if (!this._viewUI.box_bet.visible)
                        return;
                    // 下注按钮的倍数显示 
                    var _self_max_bet_num = this.getMaxBetNumByUnit(mainUnit);
                    if (_self_max_bet_num >= 1) {
                        this._viewUI.btn_bet1.left = 350;
                        this._viewUI.btn_bet1.visible = true;
                        if (this._viewUI.btn_bet1.visible) {
                            this._betRate[0] = 1;
                            var str_bet = "注";
                            this._viewUI.btn_bet1.label = this._betRate[0].toString() + str_bet;
                            var _bet_num2 = Math.floor(_self_max_bet_num / 4);
                            if (_bet_num2 < 2)
                                _bet_num2 = 2;
                            this._viewUI.btn_bet2.visible = _bet_num2 <= _self_max_bet_num;
                            if (this._viewUI.btn_bet2.visible) {
                                this._viewUI.btn_bet1.left = 180;
                                this._viewUI.btn_bet2.left = this._viewUI.btn_bet1.left + this._viewUI.btn_bet1.width + 20;
                                this._viewUI.btn_bet2.label = _bet_num2 + str_bet;
                                this._betRate[1] = _bet_num2;
                                var _bet_num3 = Math.floor(_self_max_bet_num / 2);
                                if (_bet_num3 < 3)
                                    _bet_num3 = 3;
                                this._viewUI.btn_bet3.visible = _bet_num3 <= _self_max_bet_num && _bet_num3 > _bet_num2;
                                if (this._viewUI.btn_bet3.visible) {
                                    this._viewUI.btn_bet3.left = this._viewUI.btn_bet2.left + this._viewUI.btn_bet2.width + 20;
                                    ;
                                    this._viewUI.btn_bet3.label = _bet_num3 + str_bet;
                                    this._betRate[2] = _bet_num3;
                                    var _bet_num4 = Math.floor(_self_max_bet_num * (3 / 4));
                                    if (_bet_num4 < 4)
                                        _bet_num4 = 4;
                                    this._viewUI.btn_bet4.visible = _bet_num4 <= _self_max_bet_num && _bet_num4 > _bet_num3;
                                    if (this._viewUI.btn_bet4.visible) {
                                        this.resetBetButtonX(true);
                                        this._viewUI.btn_bet5.visible = _bet_num4 < _self_max_bet_num;
                                        this._viewUI.btn_bet4.label = _bet_num4 + str_bet;
                                        this._betRate[3] = _bet_num4;
                                        if (this._viewUI.btn_bet5.visible) {
                                            this.resetBetButtonX(true);
                                            this._viewUI.btn_bet5.label = _self_max_bet_num + str_bet;
                                            this._betRate[4] = _self_max_bet_num;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            };
            // 抢庄后随机一个庄家的动画
            EBGangMapPage.prototype.setRandomBanker = function () {
                if (this._bankerTemp.length == 0) {
                    for (var i = 1; i < 5; i++) {
                        var unit = this._game.sceneObjectMgr.getUnitByIdx(i);
                        if (unit) {
                            this._bankerTemp.push(i);
                        }
                    }
                }
                Laya.timer.loop(100, this, this.randBanker);
                this.randBanker();
            };
            // 摇完骰子后显示
            EBGangMapPage.prototype.setChooseShowCards = function (state) {
                var isChooseShowCard = state == 9 /* MAP_STATE_CHOOSE_SHOW_CARDS */;
                this._viewUI.view_dice.visible = isChooseShowCard;
                if (isChooseShowCard) {
                    this._viewUI.box_tip.visible = false;
                    this._viewUI.txt_tip.text = "";
                    this._viewUI.view_dice.img_dice1.skin = this._ui_tongyong_effect_shanzi.replace("%s", this._showCardDice1.toString());
                    this._viewUI.view_dice.img_dice2.skin = this._ui_tongyong_effect_shanzi.replace("%s", this._showCardDice2.toString());
                    this._viewUI.view_dice.ani1.play(1, false);
                    this._game.playSound(Path_game_ebgang.music_ebgang + MUSIC_PATH.musicDice, false);
                }
            };
            EBGangMapPage.prototype.getFirstShowCardUnitSeatIndex = function () {
                var showCardSeatIndex = (this._bankerIdx + this._showCardDice1 + this._showCardDice2 - 1) % EBGangMgr.MAX_SEATS_COUNT;
                showCardSeatIndex = showCardSeatIndex == 0 ? EBGangMgr.MAX_SEATS_COUNT : showCardSeatIndex;
                return showCardSeatIndex;
            };
            // 按顺序开牌
            EBGangMapPage.prototype.playFirstShowCardAni = function () {
                this._viewUI.box_bet.visible = false;
                var seat_index = this.getFirstShowCardUnitSeatIndex();
                var ui_index = this.getUIUnitIndex(seat_index);
                for (var i = 0; i < EBGangMgr.MAX_SEATS_COUNT; i++) {
                    var bShowIcon = ui_index == i;
                    this._viewUI["view_showcard" + i].visible = bShowIcon;
                    if (bShowIcon) {
                        this._viewUI["view_showcard" + i].ani1.play(1, true);
                    }
                }
            };
            // 游戏结束 场景恢复
            EBGangMapPage.prototype.setGameEnd = function () {
                this._viewUI.btn_continue.visible = true;
                for (var i = 0; i < EBGangMgr.MAX_SEATS_COUNT; i++) {
                    this._viewUI["view_showcard" + i].visible = false;
                    this._viewUI["view_showcard" + i].ani1.gotoAndStop(1);
                }
                this._isGameEnd = true;
                // this._EBGangMgr.clear();
                this._EBGangMgr.resetData();
                this.resetData();
            };
            //更新倒计时时间戳
            EBGangMapPage.prototype.updateCountDown = function () {
                if (!this._mapInfo)
                    return;
                this._countDown = this._mapInfo.GetCountDown();
            };
            //操作倒计时
            EBGangMapPage.prototype.deltaUpdate = function () {
                if (!(this._mapInfo instanceof EBGangMapInfo))
                    return;
                if (!this._viewUI)
                    return;
                if (this._currState != 5 /* MAP_STATE_BANKER */ && this._currState != 7 /* MAP_STATE_BET */) {
                    return;
                }
                var curTime = this._game.sync.serverTimeBys;
                // let time = Math.floor(this._countDown - curTime) + 1;
                var time = Math.floor(this._countDown - curTime);
                this._viewUI.img_time.visible = time > 0;
                this._viewUI.img_time.txt_time.text = time.toString();
                // if (time <= 3 && !this._viewUI.img_time.ani1.isPlaying) {
                //     this._viewUI.img_time.ani1.play(1, true);
                // }
                if (time > 3) {
                    this._viewUI.img_time.ani1.gotoAndStop(24);
                }
            };
            // 通过当前玩家的座位号 得到对应的UI界面上的控件index
            EBGangMapPage.prototype.getUIUnitIndex = function (idx) {
                return (idx - this._mainIdx + EBGangMgr.MAX_SEATS_COUNT) % EBGangMgr.MAX_SEATS_COUNT;
            };
            // 已出牌数量统计
            EBGangMapPage.prototype.setShowedCardList = function (cardValue) {
                var _index = cardValue - 1;
                var _count = this._showCardCountList[_index] + 1;
                this._showCardCountList[_index] = _count;
                this._viewUI["text_cards" + _index].text = _count.toString();
            };
            // 根据地图数据重置已出牌数量
            EBGangMapPage.prototype.setCardRecord = function () {
                var str_cardRecord = this._mapInfo.GetCardRecord();
                if (str_cardRecord != "") {
                    this._showCardCountList = JSON.parse(str_cardRecord);
                }
            };
            // 已出牌数量统计
            EBGangMapPage.prototype.showCardCountList = function () {
                if (this._showCardCountList.length > 0) {
                    for (var index = 0; index < this._showCardCountList.length; index++) {
                        this._viewUI["text_cards" + index].text = this._showCardCountList[index].toString();
                    }
                }
            };
            // 牌点数图片 0是背景色 1是点数图
            EBGangMapPage.prototype.getCardTypeSkin = function (type, v1, v2) {
                var skin = new Array();
                var num = (v1 + v2) % 10;
                switch (type) {
                    // 对子                
                    case EBGangMgr.EBG_CARDS_TYPE_DOUBLE:
                        skin[0] = "4";
                        skin[1] = "b" + v1.toString();
                        break;
                    // 单张
                    case EBGangMgr.EBG_CARDS_TYPE_SINGLE:
                        skin[0] = num < 7 ? "1" : "2";
                        skin[1] = num.toString();
                        break;
                    // 二八杠
                    case EBGangMgr.EBG_CARDS_TYPE_EBGANG:
                        skin[0] = "3";
                        skin[1] = "28";
                        break;
                    // 点半
                    case EBGangMgr.EBG_CARDS_TYPE_DIANBAN:
                        skin[0] = num < 7 ? "1" : "2";
                        skin[1] = v2 > v1 ? v1.toString() + "5" : v2.toString() + "5";
                        break;
                    // 鳖十
                    case EBGangMgr.EBG_CARDS_TYPE_BIESHI:
                        skin[0] = "0";
                        skin[1] = "0";
                        break;
                    default:
                        break;
                }
                return skin;
            };
            //战斗日志
            EBGangMapPage.prototype.updateBattledInfo = function () {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var battleInfoMgr = this._mapInfo.battleInfoMgr;
                var mainIdx = mainUnit.GetIndex();
                if (!mainIdx)
                    return;
                if (this._mainIdx != mainIdx) {
                    this._mainIdx = mainIdx;
                }
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    switch (battleInfo.Type) {
                        case 2: { // 摇骰子结果
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                this._showCardDice1 = info.BetVal;
                                this._showCardDice2 = info.SeeCard;
                                // 找下庄家
                                if (this._bankerIdx == 0) {
                                    for (var k = 1; k <= EBGangMgr.MAX_SEATS_COUNT; k++) {
                                        var unit = this._game.sceneObjectMgr.getUnitByIdx(k);
                                        if (unit && unit.GetIdentity() == 1) {
                                            this._bankerIdx = unit.GetIndex();
                                            this._bankerBet = unit.GetLzNum();
                                        }
                                    }
                                }
                                this._EBGangMgr.firstPos = this.getFirstShowCardUnitSeatIndex();
                                //断线重连发牌，要在摇了骰子之后
                                if (this._EBGangStory._isDealCard) {
                                    this._EBGangStory.reDealCards();
                                }
                            }
                            break;
                        }
                        case 11: { // 结算
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
                                if (info.SettleVal) {
                                    this._totalPoint[info.SeatIndex] = this._totalPoint[info.SeatIndex] + info.SettleVal;
                                    //记下主玩家货币变化
                                    if (info.SeatIndex == mainIdx)
                                        this._moneyChange = info.SettleVal;
                                }
                            }
                            break;
                        }
                        case 12: { // 抢庄
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var idx = info.SeatIndex;
                                var isTryBanker = info.BetVal > 0;
                                var unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                                if (unit) {
                                    //玩家自己 
                                    var posIdx = this.getUIUnitIndex(idx);
                                    if (idx == mainIdx) {
                                        this._viewUI.box_banker.visible = false;
                                        this._viewUI.img_qiang.visible = !isTryBanker;
                                        this._viewUI.box_tip.visible = false;
                                        this._viewUI.txt_tip.text = "";
                                    }
                                    else {
                                        this._viewUI["view_player" + posIdx].visible = true;
                                        this._viewUI["view_player" + posIdx] && (this._viewUI["view_player" + posIdx].img_banker.visible = !isTryBanker);
                                    }
                                    this._viewUI["box_banker_tip" + posIdx].visible = isTryBanker;
                                    if (isTryBanker) {
                                        var str_bank_len = info.BetVal.toString().length;
                                        var skin_bei = Path_game_ebgang.ui_ebgang + "bei_";
                                        var isShow = str_bank_len > 0;
                                        this._viewUI["img_banker_qiang" + posIdx].visible = isShow;
                                        this._viewUI["img_banker_num3_" + posIdx].visible = isShow;
                                        this._viewUI["img_banker_bei" + posIdx].visible = isShow;
                                        this._viewUI["img_banker_num2_" + posIdx].visible = false;
                                        this._viewUI["img_banker_num1_" + posIdx].visible = false;
                                        if (!isShow)
                                            return;
                                        var qiang_x = this._viewUI["img_banker_qiang" + posIdx].x + 5;
                                        var diff_x = 25;
                                        var diff_mulipie = 1;
                                        this._viewUI["img_banker_num3_" + posIdx].skin = skin_bei + (info.BetVal % 10).toString() + ".png";
                                        this._viewUI["img_banker_num2_" + posIdx].visible = str_bank_len > 1;
                                        if (this._viewUI["img_banker_num2_" + posIdx].visible) {
                                            diff_mulipie++;
                                            this._viewUI["img_banker_num2_" + posIdx].skin = skin_bei + (Math.floor(info.BetVal / 10) % 10).toString() + ".png";
                                            this._viewUI["img_banker_num2_" + posIdx].x = qiang_x + diff_x * diff_mulipie;
                                            this._viewUI["img_banker_num1_" + posIdx].visible = str_bank_len > 2;
                                            if (this._viewUI["img_banker_num1_" + posIdx].visible) {
                                                diff_mulipie++;
                                                this._viewUI["img_banker_num1_" + posIdx].skin = skin_bei + (Math.floor(info.BetVal / 100) % 10).toString() + ".png";
                                                this._viewUI["img_banker_num1_" + posIdx].x = qiang_x + diff_x;
                                            }
                                        }
                                        this._viewUI["img_banker_num2_" + posIdx].x = qiang_x + diff_x * (diff_mulipie - 1);
                                        this._viewUI["img_banker_num3_" + posIdx].x = qiang_x + diff_x * diff_mulipie;
                                        this._viewUI["img_banker_bei" + posIdx].x = qiang_x + diff_x * (diff_mulipie + 1) + 5;
                                        this._bankerTemp.push(idx);
                                    }
                                }
                            }
                            break;
                        }
                        case 13: { // 下注
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var idx = info.SeatIndex;
                                var val = info.BankerRate;
                                var unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                                var startIdx = 0;
                                if (unit.GetIdentity() == 0)
                                    this._unitBets[idx] = val;
                                if (unit) {
                                    //玩家自己
                                    if (idx == mainIdx) {
                                        this._viewUI.img_qiang.visible = false;
                                        this._viewUI.box_bet.visible = false;
                                        this._viewUI.box_betRate.visible = true;
                                        this._viewUI.img_betRate1.visible = true;
                                        this._viewUI.img_betRate2.visible = false;
                                        this._viewUI.img_betRate3.visible = false;
                                        if (val < 10) {
                                            this._viewUI.img_betRate1.skin = Path_game_ebgang.ui_ebgang + "bei_" + val + ".png";
                                            this._viewUI.img_betRate1.x = 34;
                                        }
                                        else if (val < 100) {
                                            this._viewUI.img_betRate2.visible = true;
                                            this._viewUI.img_betRate2.skin = Path_game_ebgang.ui_ebgang + "bei_" + val % 10 + ".png";
                                            this._viewUI.img_betRate2.x = 58;
                                            this._viewUI.img_betRate1.skin = Path_game_ebgang.ui_ebgang + "bei_" + Math.floor(val / 10) + ".png";
                                            this._viewUI.img_betRate1.x = 34;
                                        }
                                        else {
                                            this._viewUI.img_betRate3.visible = true;
                                            this._viewUI.img_betRate3.skin = Path_game_ebgang.ui_ebgang + "bei_" + val % 10 + ".png";
                                            this._viewUI.img_betRate3.x = 58;
                                            this._viewUI.img_betRate2.visible = true;
                                            this._viewUI.img_betRate2.skin = Path_game_ebgang.ui_ebgang + "bei_" + Math.floor(val / 10) % 10 + ".png";
                                            this._viewUI.img_betRate2.x = 34;
                                            this._viewUI.img_betRate1.skin = Path_game_ebgang.ui_ebgang + "bei_" + Math.floor(val / 100) + ".png";
                                            this._viewUI.img_betRate1.x = 12;
                                        }
                                        this._viewUI.img_betRateX.x = this._viewUI.img_betRate1.x - 25;
                                    }
                                    else {
                                        var posIdx = this.getUIUnitIndex(idx);
                                        startIdx = posIdx;
                                        this._viewUI["view_player" + posIdx].visible = true;
                                        this._viewUI["view_player" + posIdx] && (this._viewUI["view_player" + posIdx].img_banker.visible = false);
                                        this._viewUI["view_player" + posIdx] && (this._viewUI["view_player" + posIdx].box_betRate.visible = true);
                                        this._viewUI["view_player" + posIdx] && (this._viewUI["view_player" + posIdx].img_betRate1.visible = true);
                                        this._viewUI["view_player" + posIdx] && (this._viewUI["view_player" + posIdx].img_betRate2.visible = false);
                                        this._viewUI["view_player" + posIdx] && (this._viewUI["view_player" + posIdx].img_betRate3.visible = false);
                                        if (val < 10) {
                                            this._viewUI["view_player" + posIdx] && (this._viewUI["view_player" + posIdx].img_betRate1.skin = Path_game_ebgang.ui_ebgang + "bei_" + val + ".png");
                                            this._viewUI["view_player" + posIdx] && (this._viewUI["view_player" + posIdx].img_betRate1.x = 34);
                                        }
                                        else if (val < 100) {
                                            this._viewUI["view_player" + posIdx] && (this._viewUI["view_player" + posIdx].img_betRate2.visible = true);
                                            this._viewUI["view_player" + posIdx] && (this._viewUI["view_player" + posIdx].img_betRate2.skin = Path_game_ebgang.ui_ebgang + "bei_" + val % 10 + ".png");
                                            this._viewUI["view_player" + posIdx] && (this._viewUI["view_player" + posIdx].img_betRate2.x = 58);
                                            this._viewUI["view_player" + posIdx] && (this._viewUI["view_player" + posIdx].img_betRate1.skin = Path_game_ebgang.ui_ebgang + "bei_" + Math.floor(val / 10) + ".png");
                                            this._viewUI["view_player" + posIdx] && (this._viewUI["view_player" + posIdx].img_betRate1.x = 34);
                                        }
                                        else {
                                            this._viewUI["view_player" + posIdx] && (this._viewUI["view_player" + posIdx].img_betRate3.visible = true);
                                            this._viewUI["view_player" + posIdx] && (this._viewUI["view_player" + posIdx].img_betRate3.skin = Path_game_ebgang.ui_ebgang + "bei_" + val % 10 + ".png");
                                            this._viewUI["view_player" + posIdx] && (this._viewUI["view_player" + posIdx].img_betRate3.x = 58);
                                            this._viewUI["view_player" + posIdx] && (this._viewUI["view_player" + posIdx].img_betRate2.visible = true);
                                            this._viewUI["view_player" + posIdx] && (this._viewUI["view_player" + posIdx].img_betRate2.skin = Path_game_ebgang.ui_ebgang + "bei_" + Math.floor(val / 10) % 10 + ".png");
                                            this._viewUI["view_player" + posIdx] && (this._viewUI["view_player" + posIdx].img_betRate2.x = 34);
                                            this._viewUI["view_player" + posIdx] && (this._viewUI["view_player" + posIdx].img_betRate1.visible = true);
                                            this._viewUI["view_player" + posIdx] && (this._viewUI["view_player" + posIdx].img_betRate1.skin = Path_game_ebgang.ui_ebgang + "bei_" + Math.floor(val / 100) + ".png");
                                            this._viewUI["view_player" + posIdx] && (this._viewUI["view_player" + posIdx].img_betRate1.x = 12);
                                        }
                                        this._viewUI["view_player" + posIdx].img_betRateX.x = this._viewUI["view_player" + posIdx].img_betRate1.x - 25;
                                    }
                                    //存下下注倍数
                                    this._betTemps.push(idx);
                                    this._betTemps.push(val);
                                    this.flyCreateChip(startIdx, info.SeatIndex, val);
                                    this._game.playSound(Path_game_ebgang.music_ebgang + MUSIC_PATH.musicFlyChip, false);
                                }
                            }
                            break;
                        }
                        case 25: { // 摊牌
                            if (this._battleIndex < i) {
                                this._viewUI.view_dice.visible = false;
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var idx = info.SeatIndex;
                                var cards = [];
                                var pos = info.CardType;
                                for (var index = 0; index < info.Cards.length; index++) {
                                    var cardValue = info.Cards[index] % 10;
                                    if (cardValue == 0)
                                        cardValue = 10;
                                    cards.push(cardValue);
                                    this.setShowedCardList(cardValue);
                                }
                                var posIdx = this.getUIUnitIndex(idx);
                                this._viewUI["view_showcard" + posIdx].visible = false;
                                this._EBGangMgr.showCards(cards, idx);
                                this._unitCards[posIdx] = cards;
                                var card_skin = this.getCardTypeSkin(info.CardType, cards[0], cards[1]);
                                if (posIdx == 0) {
                                    this._viewUI.view_player0.visible = true;
                                    this._viewUI.view_player0.ani1.play(1, false);
                                    this._viewUI.view_player0.img_bg.skin = Path_game_ebgang.ui_ebgang + "brnntype_bgimg_" + card_skin[0] + ".png";
                                    this._viewUI.view_player0.img_type.skin = Path_game_ebgang.ui_ebgang + "brnntype_normal_" + card_skin[1] + ".png";
                                }
                                else {
                                    this._viewUI["view_player" + posIdx].visible = true;
                                    this._viewUI["view_player" + posIdx].view_type.visible = true;
                                    this._viewUI["view_player" + posIdx].view_type.ani1.play(1, false);
                                    this._viewUI["view_player" + posIdx].view_type.img_bg.skin = Path_game_ebgang.ui_ebgang + "brnntype_bgimg_" + card_skin[0] + ".png";
                                    this._viewUI["view_player" + posIdx].view_type.img_type.skin = Path_game_ebgang.ui_ebgang + "brnntype_normal_" + card_skin[1] + ".png";
                                }
                                this._game.playSound(Path_game_ebgang.music_ebgang + MUSIC_PATH.musicOpenCard, false);
                            }
                            break;
                        }
                        case 4: { // 比牌
                            break;
                        }
                    }
                }
            };
            //判断下是不是有人钱不够了
            EBGangMapPage.prototype.chkUnitMoneyNotEnough = function () {
                var flag = false;
                for (var i = 1; i <= EBGangMgr.MAX_SEATS_COUNT; i++) {
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(i);
                    if (unit) {
                        if (unit.GetMoney() < EBGangMgr.ROOM_JOIN_CONFIG[this._EBGangStory.mapLv]) {
                            flag = true;
                            break;
                        }
                    }
                }
                return flag;
            };
            // 下注后飞筹码到牌桌上 起始位置  回收位置  下注额
            EBGangMapPage.prototype.flyCreateChip = function (startIdx, seatIdx, betValue) {
                // 需求变更 这边直接按倍数扔对应面值的筹码
                var chipArr = EBGangMgr.ROOM_CHIP_CONFIG["111"];
                if (chipArr && chipArr.length > 0) {
                    //从最大筹码开始循环，优先丢出大额筹码，剩下零头再由小额筹码去拼凑
                    for (var j = chipArr.length - 1; j >= 0; j--) {
                        if (betValue <= 0)
                            break;
                        var num = Math.floor(betValue / chipArr[j]);
                        if (num > 0) {
                            betValue = betValue - chipArr[j] * num;
                            for (var k = 0; k < num; k++) {
                                this._chipIndex++;
                                this.createChip(startIdx, this._bankerIdx, j + 1, chipArr[j], this._chipIndex, seatIdx);
                            }
                        }
                    }
                }
                else {
                    this._chipIndex++;
                    this.createChip(startIdx, this._bankerIdx, 1, betValue, this._chipIndex, seatIdx);
                }
            };
            //金币变化 飘金币特效
            EBGangMapPage.prototype.addChipFly = function (fromPos, tarPos) {
                var _unitChips = this._chips[fromPos];
                if (_unitChips) {
                    for (var i = 0; i < _unitChips.length; i++) {
                        var chip = _unitChips[i];
                        if (chip) {
                            chip.backFlyChip(tarPos, true);
                        }
                    }
                }
            };
            //金币变化 飘字clip
            EBGangMapPage.prototype.addMoneyClip = function (value, seatIndex) {
                var valueClip = value >= 0 ? new EbgangClip(EbgangClip.ADD_MONEY_FONT) : new EbgangClip(EbgangClip.SUB_MONEY_FONT);
                var preSkin = value >= 0 ? PathGameTongyong.ui_tongyong_general + "tu_jia.png" : PathGameTongyong.ui_tongyong_general + "tu_jian.png";
                valueClip.scale(0.8, 0.8);
                valueClip.anchorX = 0.5;
                var moneyStr = this.GetDoubleFloat(Math.abs(value));
                valueClip.setText(moneyStr + "", true, false, preSkin);
                var index = this.getUIUnitIndex(seatIndex);
                var posX = this._viewUI["view_head" + index].x + 50;
                var posY = this._viewUI["view_head" + index].y + 50;
                var deep = this._viewUI.img_menu.parent.getChildIndex(this._viewUI.img_menu);
                if (!valueClip.parent)
                    this._viewUI.box_view.addChildAt(valueClip, deep);
                valueClip.pos(posX, posY);
                // this._clipList.push(valueClip);
                this._clipList[seatIndex] = valueClip;
                Laya.Tween.clearAll(valueClip);
                Laya.Tween.to(valueClip, { y: posY - 80 }, 1000);
            };
            // 清理指定座位的飘钱动画
            EBGangMapPage.prototype.clearSeatMoneyClip = function (seatIndex) {
                if (this._clipList && this._clipList.length > 0) {
                    var clip = this._clipList[seatIndex];
                    if (clip) {
                        clip.removeSelf();
                        clip.destroy();
                        clip = null;
                    }
                }
            };
            //清理飘钱动画
            EBGangMapPage.prototype.clearAllSeatMoneyClip = function () {
                if (this._clipList && this._clipList.length > 0) {
                    for (var i = 0; i < this._clipList.length; i++) {
                        this.clearSeatMoneyClip(i);
                    }
                }
                this._clipList = [];
            };
            //庄家赢钱
            EBGangMapPage.prototype.addBankerWinEff = function () {
                var _this = this;
                var timeInternal = 750;
                // EBGangMapPage.MONEY_NUM * EBGangMapPage.MONEY_FLY_TIME;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                if (!this._bankerIdx)
                    return;
                var bankerPos = this.getUIUnitIndex(this._bankerIdx);
                for (var index = 0; index < EBGangMgr.MAX_SEATS_COUNT; index++) {
                    this.addChipFly(index, bankerPos);
                }
                this._game.playSound(Path_game_ebgang.music_ebgang + MUSIC_PATH.musicFlyChip, false);
                Laya.timer.once(timeInternal, this, function () {
                    _this.addBankerLoseEff();
                    _this.addMoneyClip(_this._bankerMoneyChange, _this._bankerIdx);
                    if (_this._moneyChange >= 0) {
                        var musicType = MathU.randomRange(1, 3);
                        _this._game.playSound(PathGameTongyong.music_tongyong + MUSIC_PATH.winMusic + musicType + ".mp3", true);
                    }
                    else {
                        var musicType = MathU.randomRange(1, 4);
                        _this._game.playSound(PathGameTongyong.music_tongyong + MUSIC_PATH.loseMusic + musicType + ".mp3", true);
                    }
                });
                if (this._settleLoseInfo.length <= 0) {
                    //通赔
                    return;
                }
                for (var i = 0; i < this._settleLoseInfo.length / 2; i++) {
                    var index = i * 2;
                    if (i < this._settleLoseInfo.length / 2) {
                        this.addMoneyClip(this._settleLoseInfo[index + 1], this._settleLoseInfo[index]);
                    }
                }
            };
            //庄家输钱
            EBGangMapPage.prototype.addBankerLoseEff = function () {
                if (this._settleWinInfo.length <= 0) {
                    //通吃
                    return;
                }
                var mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var bankerPos = this.getUIUnitIndex(this._bankerIdx);
                for (var i = 0; i < this._settleWinInfo.length / 2; i++) {
                    var index = i * 2;
                    var unitPos = this.getUIUnitIndex(this._settleWinInfo[index]);
                    if (i < this._settleWinInfo.length / 2) {
                        // this.addMoneyFly(bankerPos, unitPos);   
                        this.addChipFly(unitPos, unitPos);
                        this.addMoneyClip(this._settleWinInfo[index + 1], this._settleWinInfo[index]);
                    }
                }
                this._game.playSound(Path_game_ebgang.music_ebgang + MUSIC_PATH.musicFlyChip, false);
            };
            // 摇骰子动画之后
            EBGangMapPage.prototype.afterDicePlay = function () {
                this.playFirstShowCardAni();
            };
            //重连之后，战斗日志从哪开始刷
            EBGangMapPage.prototype.resetBattleIdx = function () {
                //非首回合需特殊处理
                if (this._mapInfo.GetRound() == 0)
                    return;
                var battleInfoMgr = this._mapInfo.battleInfoMgr;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    if (battleInfo.Type == 11) {
                        this._battleIndex = i;
                    }
                }
            };
            // 重连后重新设置庄家头象
            EBGangMapPage.prototype.resetBankerHeadIcon = function () {
                if (this._currState >= 7 /* MAP_STATE_BET */) {
                    for (var i = 1; i <= EBGangMgr.MAX_SEATS_COUNT; i++) {
                        var unit = this._game.sceneObjectMgr.getUnitByIdx(i);
                        if (unit) {
                            var ui_index = this.getUIUnitIndex(i);
                            var is_banker = unit.GetIdentity() == 1;
                            this._viewUI["view_head" + ui_index].view_banker.visible = is_banker;
                            this._viewUI["view_head" + ui_index].view_banker.img_banker.visible = is_banker;
                            if (is_banker) {
                                this._viewUI["view_head" + ui_index].view_banker.ani1.gotoAndStop(3);
                                this._viewUI["view_head" + ui_index].view_banker.ani1.play(1, false);
                            }
                        }
                    }
                }
            };
            //充值弹框
            EBGangMapPage.prototype.onNotEnoughMoney = function () {
                var _this = this;
                if (!this._game.sceneObjectMgr.mainPlayer)
                    return;
                if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < EBGangMgr.ROOM_JOIN_CONFIG[this._EBGangStory.mapLv]) {
                    TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", EBGangMgr.ROOM_JOIN_CONFIG[this._EBGangStory.mapLv]), function () {
                        _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                    }, function () {
                    }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
                }
            };
            // 单局重置数据
            EBGangMapPage.prototype.resetRoundData = function () {
                this._bankerTemp = [];
                this._randCount = 0;
                this._bankerIdx = 0;
                this._bankerBet = 0;
                this._betRate = [0, 0, 0, 0, 0];
                this._bankerRate = [1, 3, 0, 0, 0];
                this._showCardDice1 = 1;
                this._showCardDice2 = 1;
                this._unitCards = [];
                this._chipIndex = 1;
                this._unitBets = [];
                this._settleWinInfo = [];
                this._settleLoseInfo = [];
                this._settleInfo = [];
                this._betTemps = [];
                this._moneyChange = 0;
                for (var index = 0; index < EBGangMgr.MAX_SEATS_COUNT; index++) {
                    if (this._chips[index]) {
                        for (var chipIndex = 0; chipIndex < this._chips[index].length; chipIndex++) {
                            this._game.sceneObjectMgr.clearOfflineObject(this._chips[index][chipIndex]);
                        }
                    }
                    this._chips[index] = [];
                }
                this._EBGangStory._isDealCard = false;
                this._EBGangStory._isSortCard = false;
            };
            //重置数据
            EBGangMapPage.prototype.resetData = function () {
                this.resetRoundData();
                this._battleIndex = -1;
                this._showCardCountList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                this._totalPoint = [0, 0, 0, 0, 0];
            };
            // 所有下注倍数总和
            EBGangMapPage.prototype.getTotalBetNum = function () {
                var betNum = 0;
                for (var index = 0; index < this._unitBets.length; index++) {
                    if (this._unitBets[index] != undefined && this._unitBets[index] > 0) {
                        betNum += this._unitBets[index];
                    }
                }
                return betNum;
            };
            //打开结算界面
            EBGangMapPage.prototype.openSettlePage = function () {
                if (this._betTemps.length == 0 || this._unitBets.length == 0 || this._settleInfo.length == 0 || !this._mapInfo)
                    return;
                var temps = [];
                var infoTemps = [];
                var bankerNum = 0; //庄家倍数
                var point = EBGangMgr.ROOM_CONFIG[this._EBGangStory.mapLv];
                // 第一次只是为了算出庄家输赢的倍数而已
                for (var i = 1; i <= EBGangMgr.MAX_SEATS_COUNT; i++) {
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(i);
                    var money = void 0; //结算金币
                    for (var j = 0; j < this._settleInfo.length / 2; j++) {
                        if (i == this._settleInfo[j * 2]) {
                            money = this._settleInfo[j * 2 + 1];
                        }
                    }
                    // 庄家的倍数取三个闲家加起来的倍数取绝对值，如闲家A赢50倍，闲家B输66倍，闲家C赢33倍，那么庄家就是17倍
                    var betNum = void 0; //下注倍数
                    for (var k = 0; k < this._betTemps.length / 2; k++) {
                        if (i == this._betTemps[k * 2]) {
                            betNum = this._betTemps[k * 2 + 1];
                        }
                    }
                    if (betNum) {
                        var val = parseFloat(money) >= 0 ? betNum : -betNum;
                        bankerNum = bankerNum + val;
                    }
                }
                for (var i = 1; i <= EBGangMgr.MAX_SEATS_COUNT; i++) {
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(i);
                    var money = void 0; //结算金币
                    for (var j = 0; j < this._settleInfo.length / 2; j++) {
                        if (i == this._settleInfo[j * 2]) {
                            money = this._settleInfo[j * 2 + 1];
                        }
                    }
                    var betNum = 0; //下注倍数
                    for (var k = 0; k < this._betTemps.length / 2; k++) {
                        if (i == this._betTemps[k * 2]) {
                            betNum = this._betTemps[k * 2 + 1];
                        }
                    }
                    if (unit) {
                        var obj = {
                            isMain: this._mainIdx == i,
                            isbanker: unit.GetIdentity() == 1,
                            name: unit.GetName(),
                            point: point,
                            betmultiple: betNum ? betNum : Math.abs(bankerNum),
                            money: this.GetDoubleFloat(Number(money)),
                            totalPoint: unit.GetMoney(),
                        };
                        temps.push(obj);
                    }
                }
                infoTemps.push(this._mapInfo.GetRound());
                infoTemps.push(this.chkUnitMoneyNotEnough());
                infoTemps.push(this._countDown);
                infoTemps.push(temps);
                infoTemps.push(EBGangMgr.MAX_ROUND_COUNT);
                this._pageHandle.pushOpen({
                    id: page_1.EbgangPageDef.PAGE_EBG_SETTLEMENT,
                    dataSource: infoTemps,
                    parent: this._game.uiRoot.general
                });
            };
            EBGangMapPage.prototype.clearMapInfoListen = function () {
                this._game.sceneObjectMgr.off(EBGangMapInfo.EVENT_EBG_STATUS_CHECK, this, this.onUpdateMapState);
                this._game.sceneObjectMgr.off(EBGangMapInfo.EVENT_EBG_BATTLE_CHECK, this, this.updateBattledInfo);
                this._game.sceneObjectMgr.off(EBGangMapInfo.EVENT_EBG_COUNT_DOWN, this, this.updateCountDown); //倒计时更新                
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                Laya.Tween.clearAll(this);
                Laya.timer.clearAll(this);
            };
            //创建筹码
            EBGangMapPage.prototype.createChip = function (startIdx, targetIdx, type, value, index, unitIndex) {
                var _this = this;
                var chip = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CHIP_MARK, EBGangChip);
                chip.setData(startIdx, targetIdx, type, value, index, unitIndex);
                this._chips[startIdx].push(chip);
                if (this._EBGangStory.isReConnected && (this._currState > 7 /* MAP_STATE_BET */ && this._currState < 17 /* MAP_STATE_END */)) {
                    chip.drawChip();
                }
                else {
                    Laya.timer.once(350, this, function () {
                        chip.sendChip();
                        _this._game.playSound(Path_game_ebgang.music_ebgang + "chouma.mp3", false);
                    });
                }
                this._chipSortScore = index; //存下来最后一个筹码层级
            };
            //点击任意地方关闭菜单
            EBGangMapPage.prototype.onMouseClick = function (e) {
                if (e.currentTarget != this._viewUI.btn_menu) {
                    this._viewUI.img_menu.visible = false;
                    this._viewUI.btn_menu.visible = true;
                }
            };
            //点击继续游戏操作
            EBGangMapPage.prototype.onClickContinueGame = function () {
                var _this = this;
                this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, function (page) {
                    _this._viewUI.btn_continue.visible = page.dataSource;
                });
                this._viewUI.btn_continue.visible = false;
                this._battleIndex = -1;
                this.clearAllSeatMoneyClip();
                this.resetData();
                this.updateViewUI();
                this._EBGangMgr.clear();
                this._EBGangMgr.resetData();
                this._game.sceneObjectMgr.leaveStory();
                this.showCardCountList();
            };
            EBGangMapPage.prototype.onUnitAdd = function (u) {
                this.onUpdateUnit();
            };
            //玩家出去了
            EBGangMapPage.prototype.onUnitRemove = function (u) {
                this.onUpdateUnit();
                var seatIndex = u.GetIndex();
                this.clearSeatMoneyClip(seatIndex);
                this._EBGangMgr.clearSeatCards(seatIndex);
                var uiIdx = this.getUIUnitIndex(u.GetIndex()).toString();
                this._viewUI["view_head" + uiIdx].visible = false;
                this._viewUI["view_head" + uiIdx].view_banker.visible = false;
                this._viewUI["view_player" + uiIdx].visible = false;
                this._viewUI["view_showcard" + uiIdx].visible = false;
                this._viewUI["box_banker_tip" + uiIdx].visible = false;
            };
            // 开始游戏动画
            EBGangMapPage.prototype.setGameStart = function (state) {
                this.clearAllSeatMoneyClip();
                this._game.sceneObjectMgr.clearOfflineObject();
                if (state == 3 /* MAP_STATE_SHUFFLE */) {
                    this._EBGangMgr.totalUnitCount = EBGangMgr.MAX_SEATS_COUNT;
                    this._pageHandle.pushOpen({ id: page_1.EbgangPageDef.PAGE_EBG_BEGIN, parent: this._game.uiRoot.HUD });
                    if (this._game.sceneObjectMgr.mainUnit) {
                        this._mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                    }
                    this.setGameStartViewUI();
                    this._game.playSound(Path_game_ebgang.music_ebgang + MUSIC_PATH.musicStart, false);
                    this._isGameEnd = false;
                }
            };
            EBGangMapPage.prototype.onOptHandler = function (optcode, msg) {
                var _this = this;
                if (msg.type == Operation_Fields.OPRATE_GAME) {
                    switch (msg.reason) {
                        case Operation_Fields.OPRATE_GAME_QIFU_SUCCESS_RESULT:
                            var dataInfo_1 = JSON.parse(msg.data);
                            //打开祈福动画界面
                            this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU_ANI, function (page) {
                                page.dataSource = StringU.substitute(PathGameTongyong.ui_tongyong_qifu + "f_{0}1.png", _this._nameStrInfo[dataInfo_1.qf_id - 1]);
                            });
                            //相对应的玩家精灵做出反应
                            this._qifuTypeImgUrl = StringU.substitute(PathGameTongyong.ui_tongyong_qifu + "f_{0}2.png", this._nameStrInfo[dataInfo_1.qf_id - 1]);
                            this.onUpdateUnit(dataInfo_1.qifu_index);
                            break;
                    }
                }
            };
            //按钮点击
            EBGangMapPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_banker_no: //不抢庄
                        this._game.network.call_ebgang_banker(0);
                        this._viewUI.img_qiang.visible = true;
                        break;
                    case this._viewUI.btn_banker1: //抢庄倍率1
                        this._game.network.call_ebgang_banker(this._bankerRate[1]);
                        this._viewUI.box_banker.visible = false;
                        break;
                    case this._viewUI.btn_banker2: //抢庄倍率2
                        this._game.network.call_ebgang_banker(this._bankerRate[2]);
                        this._viewUI.box_banker.visible = false;
                        break;
                    case this._viewUI.btn_banker3: //抢庄倍率3
                        this._game.network.call_ebgang_banker(this._bankerRate[3]);
                        this._viewUI.box_banker.visible = false;
                        break;
                    case this._viewUI.btn_banker4: //抢庄倍率4
                        this._game.network.call_ebgang_banker(this._bankerRate[4]);
                        this._viewUI.box_banker.visible = false;
                        break;
                    case this._viewUI.btn_menu: //菜单
                        this._viewUI.img_menu.visible = true;
                        this._viewUI.btn_menu.visible = false;
                        break;
                    case this._viewUI.btn_back: //返回
                        var mapinfo = this._mapInfo;
                        if (mapinfo && mapinfo.GetPlayState() == 1) {
                            this._game.showTips("游戏尚未结束，请先打完这局哦~");
                            return;
                        }
                        this._battleIndex = -1;
                        this.clearMapInfoListen();
                        this.clearAllSeatMoneyClip();
                        this.resetData();
                        this._game.sceneObjectMgr.leaveStory(true);
                        // this.close();
                        break;
                    case this._viewUI.btn_cardtype: //牌型
                        this._game.uiRoot.general.open(page_1.EbgangPageDef.PAGE_EBG_RULE, function (page) {
                            page.dataSource = 10;
                        });
                        break;
                    case this._viewUI.btn_rules: //规则
                        this._game.uiRoot.general.open(page_1.EbgangPageDef.PAGE_EBG_RULE, function (page) {
                            page.dataSource = PageDef.TYPE_HOT;
                        });
                        break;
                    case this._viewUI.btn_set: //设置
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING);
                        break;
                    case this._viewUI.btn_qifu: //祈福
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU);
                        break;
                    case this._viewUI.btn_record: //战绩
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, function (page) {
                            page.dataSource = page_1.EbgangPageDef.GAME_NAME;
                        });
                        break;
                    case this._viewUI.btn_continue: //继续游戏
                        // 房卡模式下继续游戏则重新创建房间
                        if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < EBGangMgr.ROOM_JOIN_CONFIG[this._EBGangStory.mapLv]) {
                            this.onNotEnoughMoney();
                            return;
                        }
                        if (this._mapInfo instanceof MapInfo) {
                            this._battleIndex = -1;
                            this.clearAllSeatMoneyClip();
                            this.resetData();
                            this.updateViewUI();
                            // this._EBGangStory.removeListen();
                            // this.clearMapInfoListen();
                            this._EBGangMgr.clear();
                            this._EBGangMgr.resetData();
                            this._game.sceneObjectMgr.leaveStory();
                            this.showCardCountList();
                        }
                        else {
                            this.onUpdateMapInfo();
                        }
                        break;
                    case this._viewUI.btn_cards: //出牌统计
                        this._viewUI.box_cards.visible = !this._viewUI.box_cards.visible;
                        if (this._viewUI.box_cards.visible)
                            this.showCardCountList();
                        break;
                    case this._viewUI.btn_chongzhi: //充值
                        this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                        break;
                    default:
                        break;
                }
            };
            EBGangMapPage.prototype.getUnitCount = function () {
                var count = 0;
                var unitDic = this._game.sceneObjectMgr.unitDic;
                if (unitDic) {
                    for (var key in unitDic) {
                        count++;
                    }
                }
                return count;
            };
            EBGangMapPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_menu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_continue.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_back.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_cardtype.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_rules.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_set.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_record.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_banker1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_banker2.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_banker3.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_banker4.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_banker_no.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_cards.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_chongzhi.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.view_dice.ani1.off(LEvent.COMPLETE, this, this.afterDicePlay);
                    this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                    this._game.sceneObjectMgr.off(EBGangMapInfo.EVENT_EBG_STATUS_CHECK, this, this.onUpdateMapState);
                    this._game.sceneObjectMgr.off(EBGangMapInfo.EVENT_EBG_BATTLE_CHECK, this, this.updateBattledInfo);
                    this._game.sceneObjectMgr.off(EBGangMapInfo.EVENT_EBG_COUNT_DOWN, this, this.updateCountDown); //倒计时更新                
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                    Laya.Tween.clearAll(this);
                    Laya.timer.clearAll(this);
                    this._chips = [];
                    if (this._EBGangMgr) {
                        this._EBGangMgr.off(EBGangMgr.CONTINUE_GAME, this, this.onClickContinueGame);
                    }
                    this._EBGangMgr.clear();
                    this._EBGangStory.clear();
                    this._mapInfo = null;
                    this._game.stopMusic();
                    this._game.stopAllSound();
                }
                _super.prototype.close.call(this);
            };
            return EBGangMapPage;
        }(game.gui.base.Page));
        page_1.EBGangMapPage = EBGangMapPage;
    })(page = gameebgang.page || (gameebgang.page = {}));
})(gameebgang || (gameebgang = {}));
//# sourceMappingURL=EBGangMapPage.js.map