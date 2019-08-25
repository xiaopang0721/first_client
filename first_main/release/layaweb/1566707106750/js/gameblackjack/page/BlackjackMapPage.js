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
* 21点-房间
*/
var gameblackjack;
(function (gameblackjack) {
    var page;
    (function (page_1) {
        var ChipConfig = {
            "31": [3, 300, 20],
            "32": [10, 1000, 200],
            "33": [30, 3000, 500],
            "34": [100, 10000, 1000],
        };
        //音效url
        var MUSIC_PATH = {
            bgMusic: "black_bgm.mp3",
            baoPaiMusic: "baopai.mp3",
            chipMusic: "chouma.mp3",
            startMusic: "kais.mp3",
            teShuPaiMusic: "tesupai.mp3",
            loseMusic: "tongyong/lose",
            winMusic: "tongyong/win",
        };
        var BlackjackMapPage = /** @class */ (function (_super) {
            __extends(BlackjackMapPage, _super);
            function BlackjackMapPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._battleIndex = -1;
                _this._betPos = 0; //下注位置
                _this._betVal = 0; //拉霸下注数额
                _this._lastBetVal = 0; //最终下注数额，续押用
                _this._betInfo = []; //各个位置下注信息
                _this._buyInfo = []; //各个位置买保险信息
                _this._allCardsInfo = []; //所有座位的牌
                _this._betTemp = []; //下注的位置，购买保险用
                _this._partPos = []; //分牌过的位置
                _this._doubleSeat = []; //双倍下注的位置
                _this._totalBetNum = []; //各个位置总下注
                _this._totalChip = []; //所有下注筹码
                _this._insuranceChip = []; //买保险筹码
                _this._clipList = []; //飘字
                _this._dealCards = false; //是否发完牌
                _this._boomPos = { 10: [530, 240], 20: [320, 208], 30: [160, 130], 40: [900, 130], 50: [740, 208] }; //爆炸位置
                _this._boomPosPart = {
                    10: [505, 225], 11: [585, 225], 20: [317, 199], 21: [385, 229], 30: [153, 115],
                    31: [207, 154], 40: [877, 139], 41: [935, 97], 50: [697, 218], 51: [764, 188]
                }; //爆炸位置,分牌的
                _this._doublePos = { 10: [645, 309], 20: [463, 283], 30: [316, 211], 40: [981, 205], 50: [826, 280] }; //双倍标识位置
                _this._doublePosPart = {
                    10: [607, 301], 11: [684, 301], 20: [440, 275], 21: [505, 303], 30: [288, 196],
                    31: [340, 233], 40: [949, 228], 41: [1004, 188], 50: [781, 300], 51: [845, 271]
                }; //双倍标识位置,分牌的
                _this._diff = 500;
                _this._timeList = {};
                _this._firstList = {};
                _this._nameStrInfo = ["xs", "px", "gsy", "gg", "cs", "tdg"];
                _this._chipTypeBet = 1; //下注丢筹码
                _this._chipTypeBuy = 2; //买保险丢筹码
                _this._chipTypeDouble = 3; //双倍下注丢筹码
                _this._chipTypePart = 4; //分牌丢筹码
                _this._chipTypeWin = 5; //赢了丢筹码
                _this._chipTypeHjk = 6; //庄家黑杰克，发给买保险的
                _this._chipCount = [[1, 1], [5, 2], [10, 3], [15, 1], [20, 2], [25, 3], [35, 1], [45, 3], [55, 3],
                    [60, 1], [65, 2], [70, 3], [75, 1], [80, 2], [85, 3], [90, 1], [95, 2], [100, 3],]; //单次下注筹码数量
                _this._isNeedDuang = false;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    Path_game_blackjack.atlas_game_ui + "ershiyidian.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    Path_game_blackjack.atlas_game_ui + "ershiyidian/effect.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_2.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            BlackjackMapPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.ershiyidian.ErShiYiDianUI');
                this.addChild(this._viewUI);
                if (!this._blackjackMgr) {
                    this._blackjackStory = this._game.sceneObjectMgr.story;
                    this._blackjackMgr = this._blackjackStory.blackjackMgr;
                    this._blackjackMgr.on(BlackjackMgr.DEAL_CARDS, this, this.onAfterDealCards);
                }
                this._game.playMusic(Path_game_blackjack.music_blackjack + MUSIC_PATH.bgMusic);
            };
            // 页面打开时执行函数
            BlackjackMapPage.prototype.onOpen = function () {
                var _this = this;
                _super.prototype.onOpen.call(this);
                this.updateViewUI();
                this.onUpdateUnitOffline();
                if (!this._blackjackMgr.isReLogin) {
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, function (page) {
                        _this._viewUI.btn_continue.visible = page.dataSource;
                    });
                    this._viewUI.btn_continue.visible = false;
                }
                else {
                    this.onUpdateMapInfo();
                }
                this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(BlackjackMapInfo.EVENT_BLACKJACK_STATUS_CHECK, this, this.onUpdateMapState);
                this._game.sceneObjectMgr.on(BlackjackMapInfo.EVENT_BLACKJACK_BATTLE_CHECK, this, this.updateBattledInfo);
                this.onUpdateMapState();
                this.updateBattledInfo();
                this._viewUI.btn_menu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rule.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_seeting.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_record.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_xuya.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_bet.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_min.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_max.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_enter.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_buy.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_notbuy.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_ask.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_part.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_double.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_stop.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_complete.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_continue.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_baodian.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chongzhi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                for (var i = 0; i < 5; i++) {
                    this._viewUI["img_pool" + i] && this._viewUI["img_pool" + i].on(LEvent.CLICK, this, this.onChoosePos, [i]);
                }
            };
            //打开时要处理的东西
            BlackjackMapPage.prototype.updateViewUI = function () {
                this._viewUI.img_menu.visible = false;
                this._viewUI.box_state0.visible = false;
                this._viewUI.box_state1.visible = false;
                this._viewUI.box_state2.visible = false;
                this._viewUI.box_bet.visible = false;
                this._viewUI.btn_continue.visible = false;
                this._viewUI.view_boom.visible = false;
                this._viewUI.view_fapai.visible = false;
                this._viewUI.text_info.visible = false;
                this._viewUI.text_roomtype.visible = false;
                this._viewUI.txt_choose0.visible = false;
                this._viewUI.view_boom.ani1.stop();
                this._viewUI.view_qipao5_0.visible = false;
                this._viewUI.view_hjk5.visible = false;
                this._viewUI.view_wxl5.visible = false;
                this._viewUI.view_xipai.visible = false;
                this._viewUI.view_xipai.ani_xipai.stop();
                this._viewUI.view_paixie.img_card.visible = false;
                this._viewUI.view_paixie.ani1.stop();
                for (var i = 0; i < 5; i++) {
                    this._viewUI["view_player" + i].visible = false;
                    this._viewUI["box_chip" + i].visible = false;
                    this._viewUI["view_player" + i].img_frame.visible = false;
                    this._viewUI["txt_name" + i].visible = false;
                    this._viewUI["box_prompt" + i].visible = false;
                    this._viewUI["img_choose" + i].visible = false;
                    this._viewUI["img_chip" + i].visible = false;
                    this._viewUI["view_hjk" + i].visible = false;
                    this._viewUI["img_double" + i].visible = false;
                    this._viewUI["view_hjk" + i].ani1.stop();
                    this._viewUI["view_wxl" + i].visible = false;
                    this._viewUI["view_wxl" + i].ani1.stop();
                    this._viewUI["img_pos" + i].visible = false;
                    this._viewUI["img_baoxian" + i].visible = false;
                    this._viewUI["img_bao" + i].visible = false;
                    for (var index = 0; index < 2; index++) {
                        this._viewUI["view_qipao" + i + "_" + index].visible = false;
                        this._viewUI["view_qipao" + i + "_" + index].img_bg.skin = Path_game_blackjack.ui_blackjack + "bg_1.png";
                        this._viewUI["view_wxl" + i + "_" + index].visible = false;
                        this._viewUI["img_double" + i + "_" + index].visible = false;
                        this._viewUI["view_wxl" + i + "_" + index].ani1.stop();
                    }
                }
                this._viewUI.hslider_bet.min = 1; //设置 this.hslider_bet 最低位置值。
                this._viewUI.hslider_bet.max = 100; //设置 this.hslider_bet 最高位置值。
                this._viewUI.hslider_bet.value = 1; //设置 this.hslider_bet 当前位置值。
                this._viewUI.hslider_bet.tick = 1; //设置 this.hslider_bet 刻度值。
                this._viewUI.hslider_bet.showLabel = false;
                this._viewUI.hslider_bet.changeHandler = new Handler(this, this.onChangeHslider); //设置 this.hslider_bet 位置变化处理器。
                this._viewUI.img_heguan.skin = Path_game_blackjack.ui_blackjack + "heguan.png";
            };
            //按钮点击
            BlackjackMapPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_menu: //菜单
                        this._viewUI.img_menu.visible = true;
                        this._viewUI.btn_menu.visible = false;
                        break;
                    case this._viewUI.btn_back: //返回
                        var mapinfo = this._game.sceneObjectMgr.mapInfo;
                        if (mapinfo && mapinfo.GetPlayState() == 1) {
                            this._game.showTips("游戏尚未结束，请先打完这局哦~");
                            return;
                        }
                        this.resetData();
                        this.clearMapInfoListen();
                        this._blackjackMgr.clear();
                        this._blackjackStory.clear();
                        this.clearClip();
                        this._game.sceneObjectMgr.leaveStory(true);
                        // this.close();
                        break;
                    case this._viewUI.btn_rule: //规则
                        this._game.uiRoot.general.open(page_1.BlackjackPageDef.PAGE_BLACKJACK_RULE);
                        break;
                    case this._viewUI.btn_seeting: //设置
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING);
                        break;
                    case this._viewUI.btn_record: //战绩
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, function (page) {
                            page.dataSource = page_1.BlackjackPageDef.GAME_NAME;
                        });
                        break;
                    case this._viewUI.btn_xuya: //续压
                        this._viewUI.box_bet.visible = false;
                        var betVal = this._lastBetVal;
                        if (betVal > this._game.sceneObjectMgr.mainPlayer.playerInfo.money) {
                            betVal = this._game.sceneObjectMgr.mainPlayer.playerInfo.money;
                        }
                        if (this._betPos == 0) {
                            this._betPos = this._game.sceneObjectMgr.mainUnit.GetIndex();
                        }
                        this._game.network.call_blackjack_bet(betVal.toString(), this._betPos);
                        break;
                    case this._viewUI.btn_bet: //押注
                        this._viewUI.box_bet.visible = true;
                        this._viewUI.btn_bet.visible = false;
                        this._viewUI.btn_enter.visible = true;
                        break;
                    case this._viewUI.btn_min: //最小
                        this._viewUI.box_bet.visible = false;
                        var minBet = ChipConfig[this._blackjackStory.mapLv][0];
                        if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < ChipConfig[this._blackjackStory.mapLv][0]) {
                            this._game.showTips("金币不足");
                            return;
                        }
                        if (this._betPos == 0) {
                            this._betPos = this._game.sceneObjectMgr.mainUnit.GetIndex();
                        }
                        this._game.network.call_blackjack_bet(minBet.toString(), this._betPos);
                        break;
                    case this._viewUI.btn_max: //最大
                        this._viewUI.box_bet.visible = false;
                        var maxBet = ChipConfig[this._blackjackStory.mapLv][1];
                        var hasMoney = this._game.sceneObjectMgr.mainPlayer.playerInfo.money;
                        if (maxBet > hasMoney) {
                            maxBet = hasMoney;
                        }
                        if (maxBet < ChipConfig[this._blackjackStory.mapLv][0]) {
                            this._game.showTips("金币不足");
                            return;
                        }
                        if (this._betPos == 0) {
                            this._betPos = this._game.sceneObjectMgr.mainUnit.GetIndex();
                        }
                        this._game.network.call_blackjack_bet(maxBet.toString(), this._betPos);
                        break;
                    case this._viewUI.btn_enter:
                        this._viewUI.box_bet.visible = false;
                        if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < ChipConfig[this._blackjackStory.mapLv][0]) {
                            this._game.showTips("金币不足");
                            return;
                        }
                        if (this._betPos == 0) {
                            this._betPos = this._game.sceneObjectMgr.mainUnit.GetIndex();
                        }
                        this._game.network.call_blackjack_bet(this._betVal.toString(), this._betPos);
                        break;
                    case this._viewUI.btn_buy: //买保险
                        var needMoney = 0;
                        for (var buyIdx = 0; buyIdx < this._betInfo.length; buyIdx++) {
                            if (this._betInfo[buyIdx].pos == this._betPos * 10) {
                                needMoney = this._betInfo[buyIdx].chip / 2;
                            }
                        }
                        if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < needMoney) {
                            this._game.showTips("金币不足，购买失败！");
                            return;
                        }
                        this._game.network.call_blackjack_buy_insurance(1, this._betPos);
                        break;
                    case this._viewUI.btn_notbuy: //不买保险
                        this._game.network.call_blackjack_buy_insurance(2, this._betPos);
                        break;
                    case this._viewUI.btn_ask: //要牌
                        this._game.network.call_blackjack_ask_card();
                        break;
                    case this._viewUI.btn_part: //分牌
                        this._game.network.call_blackjack_part_card();
                        break;
                    case this._viewUI.btn_double: //双倍
                        this._game.network.call_blackjack_bet_double();
                        break;
                    case this._viewUI.btn_stop: //停牌
                        this._game.network.call_blackjack_stop_card();
                        break;
                    case this._viewUI.btn_complete:
                        this._viewUI.box_bet.visible = false;
                        this._game.network.call_blackjack_bet_complete();
                        break;
                    case this._viewUI.btn_continue: //继续游戏
                        if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < ChipConfig[this._blackjackStory.mapLv][2]) {
                            this.onNotEnoughMoney();
                            return;
                        }
                        if (this._game.sceneObjectMgr.mapInfo instanceof MapInfo) {
                            this.clearClip();
                            this.resetData();
                            this.updateViewUI();
                            // this._blackjackStory.removeListen();
                            // this.clearMapInfoListen();
                            this._blackjackMgr.clear();
                            this._blackjackMgr.resetData();
                            this._game.sceneObjectMgr.leaveStory();
                        }
                        else {
                            this.onUpdateMapInfo();
                        }
                        break;
                    case this._viewUI.btn_baodian: //宝典
                        this._game.uiRoot.general.open(page_1.BlackjackPageDef.PAGE_BLACKJACK_BAODIAN);
                        break;
                    case this._viewUI.btn_chongzhi: //充值
                        this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                        break;
                    case this._viewUI.btn_qifu: //祈福
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU);
                        break;
                    default:
                        break;
                }
            };
            //点击任意地方关闭菜单
            BlackjackMapPage.prototype.onMouseClick = function (e) {
                if (e.currentTarget != this._viewUI.btn_menu) {
                    this._viewUI.img_menu.visible = false;
                    this._viewUI.btn_menu.visible = true;
                }
            };
            //下注滚动条
            BlackjackMapPage.prototype.onChangeHslider = function (value) {
                if (!this._game.sceneObjectMgr.mainPlayer)
                    return;
                this._betVal = value * ChipConfig[this._blackjackStory.mapLv][0];
                var hasMoney = this._game.sceneObjectMgr.mainPlayer.playerInfo.money;
                if (this._betVal > hasMoney) {
                    this._betVal = hasMoney;
                }
                this._viewUI.text_bet.text = this._betVal.toString();
            };
            //选择位置
            BlackjackMapPage.prototype.onChoosePos = function (index, e) {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                if (!mapinfo)
                    return;
                if (index == 0)
                    return;
                //只有下注的时候才能选位置
                var status = mapinfo.GetMapState();
                if (status != 2 /* MAP_STATE_BET */)
                    return;
                var mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var isBetMain = false; //自己的位置是否下注过
                var isBetTarget = false; //目标位置是不是已经被下注了
                if (this._game.sceneObjectMgr.mainUnit.IsBetComplete()) {
                    return;
                }
                var unitIdx = (mainIdx + index) % 5 == 0 ? 5 : (mainIdx + index) % 5;
                //该座位有人
                var unit = this._game.sceneObjectMgr.getUnitByIdx(unitIdx);
                if (unit)
                    return;
                for (var i = 0; i < this._betInfo.length; i++) {
                    if (this._betInfo[i].pos == mainIdx * 10) {
                        isBetMain = true;
                    }
                    //已经被抢了，按钮置灰，直接return 
                    if (this._betInfo[i].pos == unitIdx * 10) {
                        this._viewUI.btn_max.disabled = true;
                        this._viewUI.btn_min.disabled = true;
                        this._viewUI.btn_bet.disabled = true;
                        return;
                    }
                }
                if (!isBetMain)
                    return; //没下注，不能选其他位置
                this._viewUI.btn_max.disabled = false;
                this._viewUI.btn_min.disabled = false;
                this._viewUI.btn_bet.disabled = false;
                this._viewUI.btn_bet.visible = true;
                this._viewUI.btn_enter.visible = false;
                this._viewUI.btn_enter.disabled = false;
                this._viewUI.btn_complete.disabled = false;
                var idx = (this._betPos - mainIdx + 5) % 5;
                this._viewUI["img_choose" + idx].visible = false;
                this._viewUI["box_prompt" + idx].visible = false;
                this._betPos = unitIdx;
                idx = (this._betPos - mainIdx + 5) % 5;
                this._viewUI["img_choose" + idx].visible = true;
                this._viewUI["box_prompt" + idx].visible = false;
                this._viewUI["txt_prompt" + idx].text = "点击在此区域下注";
                this._viewUI["img_prompt" + idx].skin = Path_game_blackjack.ui_blackjack + "tu_qipuao1.png";
            };
            BlackjackMapPage.prototype.onUnitAdd = function (u) {
                this.onUpdateUnit();
            };
            //玩家出去了
            BlackjackMapPage.prototype.onUnitRemove = function (u) {
                this.onUpdateUnit();
                //隐藏下买保险标识
                var posIdx = (u.GetIndex() - this._game.sceneObjectMgr.mainUnit.GetIndex() + 5) % 5;
                this._viewUI["img_baoxian" + posIdx].visible = false;
            };
            //精灵显示
            BlackjackMapPage.prototype.onUpdateUnit = function (qifu_index) {
                var _this = this;
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                if (!mapinfo)
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                if (!this._blackjackStory.mapLv)
                    return;
                var idx = mainUnit.GetIndex();
                if (!idx)
                    return;
                var max_val = ChipConfig[this._blackjackStory.mapLv][1];
                var curMoney = mainUnit.GetMoney();
                var moneyStr;
                if (max_val < curMoney) {
                    moneyStr = max_val.toString();
                }
                else {
                    moneyStr = EnumToString.getPointBackNum(mainUnit.GetMoney(), 2).toString();
                }
                this._viewUI.btn_max.label = "最大注" + moneyStr;
                var betPos = this._mapInfo.GetCurrentBetPos();
                var max = 5;
                var _loop_1 = function (index) {
                    var posIdx = (idx + index) % max == 0 ? 5 : (idx + index) % max;
                    var unit = this_1._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    this_1._viewUI["view_player" + index].visible = unit;
                    this_1._viewUI["img_chip" + index].visible = unit;
                    this_1._viewUI["img_pos" + index].visible = unit;
                    if (unit) {
                        var name_1 = getMainPlayerName(unit.GetName());
                        this_1._viewUI["view_player" + index].text_name.text = name_1;
                        var money = EnumToString.getPointBackNum(unit.GetMoney(), 2);
                        this_1._viewUI["view_player" + index].text_money.text = money;
                        this_1._viewUI["img_pos" + index].skin = Path_game_blackjack.ui_blackjack + "tu_weizhi" + posIdx + ".png";
                        if (unit == mainUnit) {
                            //点了下注完成，按钮都隐藏
                            if (unit.IsBetComplete()) {
                                this_1._viewUI.box_state0.visible = false;
                                for (var i = 0; i < 5; i++) {
                                    this_1._viewUI["box_prompt" + i].visible = false;
                                }
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
                        if (unit.GetQFEndTime(unit.GetQiFuType() - 1) > this_1._game.sync.serverTimeBys) {
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
                            this_1._viewUI["view_player" + index].img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unit.GetHeadImg() + ".png";
                        }
                    }
                };
                var this_1 = this;
                for (var index = 0; index < max; index++) {
                    _loop_1(index);
                }
            };
            BlackjackMapPage.prototype.playTween = function (img, index, isTween) {
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
            BlackjackMapPage.prototype.onOptHandler = function (optcode, msg) {
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
            //地图监听
            BlackjackMapPage.prototype.onUpdateMapInfo = function () {
                var _this = this;
                var mapInfo = this._game.sceneObjectMgr.mapInfo;
                this._mapInfo = mapInfo;
                if (mapInfo) {
                    this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                    this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                    this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                    this._viewUI.view_boom.ani1.on(LEvent.COMPLETE, this, this.afterBoom);
                    this._viewUI.view_xipai.ani_xipai.on(LEvent.COMPLETE, this, this.afterXiPai);
                    this._viewUI.btn_continue.visible = false;
                    if (this._blackjackMgr.isReLogin) {
                        this._blackjackStory.mapLv = this._mapInfo.GetMapLevel();
                        this.updateBattledInfo();
                        this.onUpdateMapState();
                        this.onAfterDealCards();
                        this._viewUI.view_paixie.img_card.visible = true;
                        this._blackjackMgr.isReLogin = false;
                    }
                    this.onUpdateUnit();
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
            BlackjackMapPage.prototype.onUpdateUnitOffline = function () {
                if (!this._blackjackMgr.unitOffline)
                    return;
                var unitOffline = this._blackjackMgr.unitOffline;
                var mPlayer = this._game.sceneObjectMgr.mainPlayer;
                if (unitOffline) {
                    this._viewUI.view_player0.visible = true;
                    var money = void 0;
                    if (mPlayer) {
                        if (mPlayer.playerInfo) {
                            money = mPlayer.playerInfo.money;
                            this._viewUI.view_player0.text_name.text = getMainPlayerName(mPlayer.playerInfo.nickname);
                            this._viewUI.view_player0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + mPlayer.playerInfo.headimg + ".png";
                            this._viewUI.view_player0.img_qifu.visible = mPlayer.GetQiFuEndTime(mPlayer.playerInfo.qifu_type - 1) > this._game.sync.serverTimeBys;
                            if (this._viewUI.view_player0.img_qifu.visible && mPlayer.playerInfo.qifu_type) {
                                this._viewUI.view_player0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[mPlayer.playerInfo.qifu_type - 1] + ".png";
                            }
                            //头像框
                            this._viewUI.view_player0.img_txk.visible = mPlayer.playerInfo.vip_level > 0;
                            if (this._viewUI.view_player0.img_txk.visible) {
                                this._viewUI.view_player0.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + mPlayer.playerInfo.vip_level + ".png";
                            }
                        }
                    }
                    else {
                        money = unitOffline.GetMoney();
                        this._viewUI.view_player0.text_name.text = getMainPlayerName(unitOffline.GetName());
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
                    this._viewUI.view_player0.text_money.text = money.toString();
                }
            };
            //地图状态
            BlackjackMapPage.prototype.onUpdateMapState = function () {
                var _this = this;
                if (!this._mapInfo)
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var idx = mainUnit.GetIndex();
                if (!idx)
                    return;
                var betPos = this._mapInfo.GetCurrentBetPos();
                var statue = this._mapInfo.GetMapState();
                this._viewUI.btn_min.label = "最小注" + ChipConfig[this._blackjackStory.mapLv][0];
                this._viewUI.text_bet.text = ChipConfig[this._blackjackStory.mapLv][0];
                this._betVal = ChipConfig[this._blackjackStory.mapLv][0];
                this._viewUI.text_info.text = "牌局号：" + this._mapInfo.GetGameNo();
                this._viewUI.text_info.visible = true;
                this._viewUI.text_roomtype.visible = true;
                var str = "";
                if (this._blackjackStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_BLACKJACK_1) {
                    str = "新手场：底注：";
                }
                else if (this._blackjackStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_BLACKJACK_2) {
                    str = "小资场：底注：";
                }
                else if (this._blackjackStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_BLACKJACK_3) {
                    str = "老板场：底注：";
                }
                else if (this._blackjackStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_BLACKJACK_4) {
                    str = "富豪场：底注：";
                }
                this._viewUI.text_roomtype.text = str + ChipConfig[this._blackjackStory.mapLv][0];
                if (!this._dealCards) {
                    this.onAfterDealCards();
                }
                if (statue != 1 /* MAP_STATE_SHUFFLE */) {
                    this._viewUI.view_xipai.visible = false;
                    this._viewUI.view_xipai.ani_xipai.stop();
                }
                if (statue == 2 /* MAP_STATE_BET */) {
                    this._viewUI.box_state0.visible = true;
                    if (this._betTemp.length == 0) {
                        this._viewUI.btn_max.disabled = false;
                        this._viewUI.btn_min.disabled = false;
                        this._viewUI.btn_bet.disabled = false;
                        this._viewUI.btn_enter.disabled = false;
                    }
                }
                else {
                    this._viewUI.box_state0.visible = false;
                    this._viewUI.box_bet.visible = false;
                    for (var index = 0; index < 5; index++) {
                        this._viewUI["box_prompt" + index].visible = false;
                        this._viewUI["img_choose" + index].visible = false;
                    }
                }
                if (statue != 6 /* MAP_STATE_BUY */) {
                    this._viewUI.box_state1.visible = false;
                    for (var index = 0; index < 5; index++) {
                        this._viewUI["box_prompt" + index].visible = false;
                    }
                }
                if (statue == 8 /* MAP_STATE_XIAN */) {
                    this._viewUI.btn_part.disabled = false;
                    this._viewUI.btn_double.disabled = false;
                }
                else {
                    this._viewUI.box_state2.visible = false;
                }
                if (statue == 1 /* MAP_STATE_SHUFFLE */) {
                    this._game.playSound(Path_game_blackjack.music_blackjack + MUSIC_PATH.startMusic, false);
                    this._viewUI.view_xipai.visible = true;
                    this._viewUI.view_xipai.ani_xipai.play(1, false);
                }
                else if (statue == 2 /* MAP_STATE_BET */) {
                    this.onUpdateUnit();
                    this._viewUI.btn_complete.visible = false;
                    this._viewUI.btn_enter.visible = false;
                    this._viewUI.btn_bet.visible = true;
                    this._viewUI.btn_xuya.visible = true;
                    //没选择过下注位置，默认自己的位置
                    if (this._betPos == 0) {
                        this._viewUI.img_choose0.visible = true;
                    }
                    if (this._lastBetVal == 0) {
                        this._viewUI.btn_xuya.disabled = true;
                    }
                    else {
                        this._viewUI.btn_xuya.disabled = false;
                    }
                    //倒计时
                    var now_time = this._game.sync.serverTimeBys * 1000;
                    var endTime = this._mapInfo.GetCountDown() * 1000;
                    this._totalTime = endTime - now_time;
                    this._endTime = this._mapInfo.GetCountDown() * 1000;
                    this._mainIndex = idx;
                    for (var i = 0; i < 5; i++) {
                        this._viewUI["view_player" + i].img_frame.visible = true;
                    }
                }
                if (statue == 3 /* MAP_STATE_DEAL */) {
                    this._viewUI["img_choose" + (this._betPos - idx + 5) % 5].visible = false;
                    this._betPos = 0;
                    for (var i = 0; i < 5; i++) {
                        this._viewUI["view_player" + i].img_frame.visible = false;
                    }
                }
                if (statue == 4 /* MAP_STATE_DEALING */) {
                    this._viewUI.view_fapai.visible = true;
                    this._viewUI.view_fapai.ani1.play(1, true);
                }
                if (statue >= 5 /* MAP_STATE_DEAL_END */) {
                    this._viewUI.view_fapai.visible = false;
                    this._viewUI.view_fapai.ani1.stop();
                }
                if (statue == 6 /* MAP_STATE_BUY */) {
                    if (this._betPos == 0) {
                        this._betPos = idx;
                    }
                    var needMoney = 0;
                    for (var i = 0; i < this._betInfo.length; i++) {
                        if (this._betInfo[i].pos == this._betPos * 10) {
                            needMoney = this._betInfo[i].chip / 2;
                        }
                    }
                    this._viewUI.box_state1.visible = true;
                    //倒计时
                    var now_time = this._game.sync.serverTimeBys * 1000;
                    var endTime = this._mapInfo.GetCountDown() * 1000;
                    this._totalTime = endTime - now_time;
                    this._endTime = this._mapInfo.GetCountDown() * 1000;
                    this._mainIndex = idx;
                    for (var i = 0; i < 5; i++) {
                        this._viewUI["view_player" + i].img_frame.visible = true;
                    }
                }
                if (statue == 7 /* MAP_STATE_SEECARD */) {
                    if (this._betPos > 0) {
                        this._viewUI["box_prompt" + (this._betPos - idx + 5) % 5].visible = false;
                    }
                    for (var i = 0; i < 5; i++) {
                        this._viewUI["view_player" + i].img_frame.visible = false;
                    }
                    this._viewUI.img_heguan.skin = Path_game_blackjack.ui_blackjack + "heguan_06.png";
                }
                if (statue == 8 /* MAP_STATE_XIAN */) {
                    //庄家不是黑杰克，收走保险筹码
                    var bankerCount = 0;
                    for (var i = 0; i < this._allCardsInfo.length; i++) {
                        if (this._allCardsInfo[i].pos == 60) {
                            var cards = this._allCardsInfo[i].cards;
                            var temp = this._blackjackMgr.checkCardsType(cards, false);
                            bankerCount = temp[1] > 0 ? temp[1] : temp[0];
                            this._viewUI.view_qipao5_0.txt_count.text = bankerCount.toString();
                        }
                    }
                    if (bankerCount != 100) {
                        for (var i = 0; i < this._insuranceChip.length; i++) {
                            var chip = this._insuranceChip[i];
                            chip.loseBaoXianChip();
                        }
                    }
                    //分牌后，牌是否置灰
                    var isPart = false;
                    if (this._partPos.indexOf(Math.floor(betPos / 10)) >= 0) {
                        isPart = true;
                    }
                    this._blackjackMgr.setDisabled(betPos, isPart);
                    //闲家各种状态
                    for (var i = 0; i < 5; i++) {
                        this._viewUI["view_player" + i].img_frame.visible = false;
                    }
                    var now_time = this._game.sync.serverTimeBys * 1000;
                    var endTime = this._mapInfo.GetCountDown() * 1000;
                    this._totalTime = endTime - now_time;
                    this._endTime = this._mapInfo.GetCountDown() * 1000;
                    this._mainIndex = idx;
                    this._curBetPos = betPos;
                    var needMoney = 0;
                    var betIdx = void 0;
                    for (var i = 0; i < this._betInfo.length; i++) {
                        if (this._betInfo[i].pos == betPos) {
                            needMoney = this._betInfo[i].chip;
                            betIdx = this._betInfo[i].idx;
                            if (this._betInfo[i].idx == idx) {
                                this._viewUI.box_state2.visible = true;
                            }
                            else {
                                this._viewUI.box_state2.visible = false;
                            }
                        }
                    }
                    //置灰分牌和双倍下注按钮
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(betIdx);
                    if (unit) {
                        if (unit.GetMoney() < needMoney) {
                            this._viewUI.btn_double.disabled = true;
                            this._viewUI.btn_part.disabled = true;
                        }
                        else {
                            for (var i = 0; i < this._allCardsInfo.length; i++) {
                                if (this._allCardsInfo[i].pos == betPos) {
                                    var cards = this._allCardsInfo[i].cards;
                                    if (cards.length != 2) {
                                        this._viewUI.btn_double.disabled = true;
                                        this._viewUI.btn_part.disabled = true;
                                    }
                                    else {
                                        this._viewUI.btn_double.disabled = false;
                                        if (this._blackjackMgr.cardCount(cards[0]) != this._blackjackMgr.cardCount(cards[1]) || this._partPos.indexOf(Math.floor(betPos / 10)) >= 0) {
                                            this._viewUI.btn_part.disabled = true;
                                        }
                                        else {
                                            this._viewUI.btn_part.disabled = false;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    var posIdx = (Math.floor(betPos / 10) - idx + 5) % 5;
                    Laya.timer.once(500, this, this.updateHeGuan);
                }
                if (statue == 9 /* MAP_STATE_ZHUANG */) {
                    Laya.timer.clear(this, this.updateHeGuan);
                    this._blackjackMgr.setDisabled(betPos, false);
                    Laya.timer.once(500, this, function () {
                        _this._blackjackMgr.fanpaiOne();
                        _this._viewUI.img_heguan.skin = Path_game_blackjack.ui_blackjack + "heguan.png";
                        //显示庄家点数
                        for (var i = 0; i < _this._allCardsInfo.length; i++) {
                            var cardIdx = _this._allCardsInfo[i].pos;
                            if (cardIdx == 60) {
                                var cards = _this._allCardsInfo[i].cards;
                                var count = _this._blackjackMgr.checkCardsType(cards, false);
                                if (count[0] == 100) {
                                    _this._viewUI.view_hjk5.visible = true;
                                    _this._viewUI.view_hjk5.ani1.play(1, false);
                                    _this._viewUI.view_qipao5_0.visible = false;
                                    if (!_this._blackjackMgr.isReLogin) {
                                        _this._game.playSound(Path_game_blackjack.music_blackjack + MUSIC_PATH.teShuPaiMusic, false);
                                    }
                                }
                                else {
                                    if (count[1] > 0) {
                                        _this._viewUI.view_qipao5_0.txt_count.text = count[0] + "/" + count[1];
                                    }
                                    else {
                                        _this._viewUI.view_qipao5_0.txt_count.text = count[0];
                                    }
                                    _this._viewUI.view_qipao5_0.visible = true;
                                    _this._viewUI.view_qipao5_0.img_bg.skin = Path_game_blackjack.ui_blackjack + "bg_1.png";
                                }
                            }
                        }
                    });
                }
                if (statue == 11 /* MAP_STATE_SETTLEING */) {
                    //结算中，有庄家黑杰克直接结算，也有正常游戏结算
                    this._viewUI.img_heguan.skin = Path_game_blackjack.ui_blackjack + "heguan.png";
                    this._blackjackMgr.fanpaiOne();
                    var bankerCount = 0;
                    for (var i = 0; i < this._allCardsInfo.length; i++) {
                        if (this._allCardsInfo[i].pos == 60) {
                            var cards = this._allCardsInfo[i].cards;
                            var temp = this._blackjackMgr.checkCardsType(cards, false);
                            bankerCount = temp[1] > 0 ? temp[1] : temp[0];
                            if (bankerCount > 0) {
                                this._viewUI.view_qipao5_0.txt_count.text = bankerCount.toString();
                            }
                        }
                    }
                    //庄家是黑杰克，保险的筹码表现
                    if (bankerCount == 100) {
                        this._viewUI.view_hjk5.visible = true;
                        this._viewUI.view_hjk5.ani1.play(1, false);
                        this._viewUI.view_qipao5_0.visible = false;
                        if (!this._blackjackMgr.isReLogin) {
                            this._game.playSound(Path_game_blackjack.music_blackjack + MUSIC_PATH.teShuPaiMusic, false);
                        }
                        var _loop_2 = function (buyIdx) {
                            if (this_2._buyInfo[buyIdx].optType == 1) {
                                var betVal = 0;
                                for (var k = 0; k < this_2._betInfo.length; k++) {
                                    if (this_2._buyInfo[buyIdx].pos * 10 == this_2._betInfo[k].pos) {
                                        betVal = this_2._betInfo[k].chip;
                                    }
                                }
                                var chipType = Math.floor(betVal / ChipConfig[this_2._blackjackStory.mapLv][0]);
                                this_2.createObj(this_2._chipTypeHjk, this_2._buyInfo[buyIdx].pos, idx, this_2._buyInfo[buyIdx].idx, chipType);
                                Laya.timer.once(1000, this_2, function () {
                                    for (var k = 0; k < _this._insuranceChip.length; k++) {
                                        var chip = _this._insuranceChip[k];
                                        chip.flyAllChip(_this._buyInfo[buyIdx].pos, _this._buyInfo[buyIdx].idx);
                                    }
                                });
                            }
                        };
                        var this_2 = this;
                        for (var buyIdx = 0; buyIdx < this._buyInfo.length; buyIdx++) {
                            _loop_2(buyIdx);
                        }
                    }
                    var _loop_3 = function (index) {
                        var pos = Math.floor(this_3._allCardsInfo[index].pos / 10);
                        var isPart = false;
                        if (this_3._partPos.indexOf(pos) >= 0) {
                            isPart = true;
                        }
                        if (this_3._allCardsInfo[index].pos != 60) {
                            var childPos = this_3._allCardsInfo[index].pos % 10;
                            var posIdx = (pos - idx + 5) % 5;
                            var cards = this_3._allCardsInfo[index].cards;
                            var temp = this_3._blackjackMgr.checkCardsType(cards, isPart);
                            var count = temp[1] > 0 ? temp[1] : temp[0];
                            var ownerIdx_1;
                            var betVal = 0;
                            for (var k = 0; k < this_3._betInfo.length; k++) {
                                if (this_3._allCardsInfo[index].pos == this_3._betInfo[k].pos) {
                                    ownerIdx_1 = this_3._betInfo[k].idx;
                                    betVal = this_3._betInfo[k].chip;
                                }
                            }
                            var chipType_1 = Math.floor(betVal / ChipConfig[this_3._blackjackStory.mapLv][0]);
                            if (count > bankerCount) {
                                this_3._viewUI["view_qipao" + posIdx + "_" + childPos].img_bg.skin = Path_game_blackjack.ui_blackjack + "bg_2.png";
                                //创建筹码
                                Laya.timer.once(1000, this_3, function () {
                                    _this.createObj(_this._chipTypeWin, _this._allCardsInfo[index].pos, idx, ownerIdx_1, chipType_1);
                                });
                                Laya.timer.once(2000, this_3, function () {
                                    for (var i = 0; i < _this._totalChip.length; i++) {
                                        var chip = _this._totalChip[i];
                                        chip.flyAllChip(_this._allCardsInfo[index].pos, ownerIdx_1);
                                    }
                                });
                            }
                            else if (count < bankerCount || count == 0) {
                                for (var i = 0; i < this_3._totalChip.length; i++) {
                                    var chip = this_3._totalChip[i];
                                    chip.loseFlyChip(this_3._allCardsInfo[index].pos);
                                }
                            }
                            else {
                                Laya.timer.once(2000, this_3, function () {
                                    for (var i = 0; i < _this._totalChip.length; i++) {
                                        var chip = _this._totalChip[i];
                                        chip.flyAllChip(_this._allCardsInfo[index].pos, ownerIdx_1);
                                    }
                                });
                            }
                        }
                    };
                    var this_3 = this;
                    //正常的结算筹码表现
                    for (var index = 0; index < this._allCardsInfo.length; index++) {
                        _loop_3(index);
                    }
                }
                if (statue == 12 /* MAP_STATE_END */) {
                    this.onNotEnoughMoney();
                    this._viewUI.btn_continue.visible = true;
                }
            };
            BlackjackMapPage.prototype.updateHeGuan = function () {
                if (!this._mapInfo)
                    return;
                var posIdx = (Math.floor(this._mapInfo.GetCurrentBetPos() / 10) - this._game.sceneObjectMgr.mainUnit.GetIndex() + 5) % 5;
                this._viewUI.img_heguan.skin = Path_game_blackjack.ui_blackjack + "heguan_" + posIdx + ".png";
            };
            //发完牌了，显示看牌按钮还有发筹码
            BlackjackMapPage.prototype.onAfterDealCards = function () {
                var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                this._viewUI.view_fapai.visible = false;
                this._dealCards = true;
                this._viewUI.view_fapai.ani1.stop();
                for (var i = 0; i < this._allCardsInfo.length; i++) {
                    var cardIdx = this._allCardsInfo[i].pos;
                    var cards = this._allCardsInfo[i].cards;
                    var posIdx = (Math.floor(cardIdx / 10) - idx + 5) % 5;
                    var isPart = false;
                    if (this._partPos.indexOf(Math.floor(cardIdx / 10)) > -1) {
                        isPart = true;
                    }
                    var count = this._blackjackMgr.checkCardsType(cards, isPart);
                    if (this._allCardsInfo[i].pos < 60) {
                        if (count[0] == 100) {
                            this._viewUI["view_hjk" + posIdx].visible = true;
                            this._viewUI["view_hjk" + posIdx].ani1.play(1, false);
                            this._viewUI["view_qipao" + posIdx + "_0"].visible = false;
                            if (!this._blackjackMgr.isReLogin) {
                                this._game.playSound(Path_game_blackjack.music_blackjack + MUSIC_PATH.teShuPaiMusic, false);
                            }
                        }
                        else {
                            if (count[1] > 0) {
                                this._viewUI["view_qipao" + posIdx + "_0"].txt_count.text = count[0] + "/" + count[1];
                            }
                            else {
                                this._viewUI["view_qipao" + posIdx + "_0"].txt_count.text = count[0];
                            }
                            this._viewUI["view_qipao" + posIdx + "_0"].visible = true;
                            this._viewUI["view_qipao" + posIdx + "_0"].img_bg.skin = Path_game_blackjack.ui_blackjack + "bg_1.png";
                        }
                    }
                }
            };
            //个人操作倒计时
            BlackjackMapPage.prototype.update = function () {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                if (!mapinfo)
                    return;
                var now_time = this._game.sync.serverTimeBys * 1000;
                var remain_time = this._endTime - now_time;
                if (remain_time > 0) {
                    var statue = mapinfo.GetMapState();
                    var angle = remain_time / this._totalTime * 360;
                    angle = 360 - angle;
                    if (statue == 8 /* MAP_STATE_XIAN */) {
                        for (var index = 0; index < this._betInfo.length; index++) {
                            if (this._betInfo[index].pos == this._curBetPos) {
                                var posIdx = (this._betInfo[index].idx - this._mainIndex + 5) % 5;
                                this._viewUI["view_player" + posIdx].img_frame.visible = true;
                                var imgMask = this._viewUI["view_player" + posIdx].img_mask;
                                imgMask.graphics.clear();
                                imgMask.graphics.drawPie(imgMask.width / 2, imgMask.height / 2, 200, angle - 90, 360 - 90, "");
                            }
                        }
                    }
                    else {
                        for (var i = 0; i < 5; i++) {
                            var imgMask = this._viewUI["view_player" + i].img_mask;
                            imgMask.graphics.clear();
                            imgMask.graphics.drawPie(imgMask.width / 2, imgMask.height / 2, 200, angle - 90, 360 - 90, "");
                            var unitIdx = (i + this._mainIndex) % 5 == 0 ? 5 : (i + this._mainIndex) % 5;
                            var unit = this._game.sceneObjectMgr.getUnitByIdx(unitIdx);
                            if (unit) {
                                if (statue == 2 /* MAP_STATE_BET */) {
                                    if (unit.IsBetComplete()) {
                                        this._viewUI["view_player" + i].img_frame.visible = false;
                                    }
                                    else {
                                        this._viewUI["view_player" + i].img_frame.visible = true;
                                    }
                                }
                                else if (statue == 6 /* MAP_STATE_BUY */) {
                                    var count = void 0;
                                    for (var index = 0; index < this._betInfo.length; index++) {
                                        if (this._betInfo[index].idx == unitIdx) {
                                            count++;
                                        }
                                    }
                                    if (this._buyInfo.length >= count) {
                                        this._viewUI["view_player" + i].img_frame.visible = false;
                                    }
                                    else {
                                        this._viewUI["view_player" + i].img_frame.visible = true;
                                    }
                                }
                            }
                        }
                    }
                }
            };
            //战斗日志
            BlackjackMapPage.prototype.updateBattledInfo = function () {
                var _this = this;
                if (!this._mapInfo)
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var battleInfoMgr = this._mapInfo.battleInfoMgr;
                var mainIdx = mainUnit.GetIndex();
                if (!mainIdx)
                    return;
                var _loop_4 = function (i) {
                    var battleInfo = battleInfoMgr.info[i];
                    var index = battleInfoMgr.info.length;
                    switch (battleInfo.Type) {
                        case 22: { //下注
                            if (this_4._battleIndex < i) {
                                this_4._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var obj = {
                                    pos: info.Pos,
                                    idx: info.SeatIndex,
                                    chip: info.BetVal,
                                };
                                this_4._betInfo.push(obj);
                                //显示下注多少用
                                var bet_obj = {
                                    pos: info.Pos / 10,
                                    chip: info.BetVal,
                                };
                                this_4._totalBetNum.push(bet_obj);
                                var posIdx = (info.Pos / 10 - mainIdx + 5) % 5;
                                //存下自己下注过的位置
                                if (info.SeatIndex == mainIdx) {
                                    this_4._betTemp.push(info.Pos);
                                    this_4._viewUI.btn_max.disabled = true;
                                    this_4._viewUI.btn_min.disabled = true;
                                    this_4._viewUI.btn_bet.disabled = true;
                                    this_4._viewUI.btn_enter.disabled = true;
                                    this_4._viewUI["img_choose" + posIdx].visible = false;
                                }
                                //下注的是自己位置，显示下注完成按钮
                                if (info.Pos == mainIdx * 10) {
                                    this_4._viewUI.btn_complete.visible = true;
                                    this_4._viewUI.btn_xuya.visible = false;
                                    this_4._lastBetVal = info.BetVal;
                                    //空位置显示下东西
                                    for (var unitIdx = 1; unitIdx < 6; unitIdx++) {
                                        var unit = this_4._game.sceneObjectMgr.getUnitByIdx(unitIdx);
                                        if (!unit) {
                                            var posIndex = (unitIdx - mainIdx + 5) % 5;
                                            var isBet = false;
                                            for (var k = 0; k < this_4._betInfo.length; k++) {
                                                //已经被抢了，按钮置灰，直接return 
                                                if (this_4._betInfo[k].pos == unitIdx * 10) {
                                                    isBet = true;
                                                    break;
                                                }
                                            }
                                            if (!isBet) {
                                                this_4._viewUI["txt_prompt" + posIndex].text = "点击在此区域下注";
                                                this_4._viewUI["img_prompt" + posIndex].skin = Path_game_blackjack.ui_blackjack + "tu_qipuao1.png";
                                                this_4._viewUI["box_prompt" + posIndex].visible = true;
                                            }
                                        }
                                    }
                                }
                                //显示下注总筹码
                                this_4._viewUI["box_chip" + posIdx].visible = true;
                                var chipStr = EnumToString.getPointBackNum(info.BetVal, 2);
                                this_4._viewUI["text_chip" + posIdx].text = chipStr;
                                //创建筹码
                                var chipType = Math.floor(info.BetVal / ChipConfig[this_4._blackjackStory.mapLv][0]);
                                this_4.createObj(this_4._chipTypeBet, info.Pos, mainIdx, info.SeatIndex, chipType);
                                //抢注的位置显示名字
                                if (info.Pos != info.SeatIndex * 10) {
                                    var unit = this_4._game.sceneObjectMgr.getUnitByIdx(info.SeatIndex);
                                    var name_2 = unit.GetName();
                                    if (unit.type == UnitField.TYPE_ID_PLAYER) {
                                        if (unit.GetIndex() == mainIdx) {
                                            name_2 = getMainPlayerName(unit.GetName());
                                        }
                                        else {
                                            name_2 = getOtherPlayerName(unit.GetName());
                                        }
                                    }
                                    this_4._viewUI["txt_name" + posIdx].visible = true;
                                    this_4._viewUI["txt_name" + posIdx].text = name_2;
                                    this_4._viewUI["box_prompt" + posIdx].visible = false;
                                }
                            }
                            break;
                        }
                        case 15: { //发牌
                            if (this_4._battleIndex < i) {
                                this_4._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                //新整一个数组
                                var cardsTemp = [];
                                for (var cardIdx = 0; cardIdx < info.Cards.length; cardIdx++) {
                                    cardsTemp.push(info.Cards[cardIdx]);
                                }
                                var obj = {
                                    pos: info.SeatIndex,
                                    cards: cardsTemp,
                                };
                                this_4._allCardsInfo.push(obj);
                            }
                            break;
                        }
                        case 16: { //买保险
                            if (this_4._battleIndex < i) {
                                this_4._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var obj = {
                                    pos: info.Pos,
                                    idx: info.SeatIndex,
                                    optType: info.OptType,
                                };
                                this_4._buyInfo.push(obj);
                                //下一家购买保险
                                if (info.SeatIndex == mainIdx) {
                                    this_4._betTemp.splice(0, 1);
                                    var betIdx = (this_4._betPos - mainIdx + 5) % 5;
                                    this_4._viewUI["box_prompt" + betIdx].visible = false;
                                    if (this_4._betTemp.length > 0) {
                                        this_4._betPos = this_4._betTemp[0] / 10;
                                        betIdx = (this_4._betPos - mainIdx + 5) % 5;
                                        this_4._viewUI["box_prompt" + betIdx].visible = true;
                                        this_4._viewUI["txt_prompt" + betIdx].text = "是否为您下注的" + (this_4._betPos - mainIdx + 5) % 5 + "号位购买保险";
                                        this_4._viewUI["img_prompt" + betIdx].skin = Path_game_blackjack.ui_blackjack + "tu_qipuao.png";
                                    }
                                    else {
                                        this_4._viewUI.box_state1.visible = false;
                                    }
                                }
                                //显示下注总筹码
                                var betVal = info.BetVal;
                                var posIdx = (info.Pos - mainIdx + 5) % 5;
                                for (var idx = 0; idx < this_4._totalBetNum.length; idx++) {
                                    if (this_4._totalBetNum[idx].pos == info.Pos) {
                                        this_4._totalBetNum[idx].chip = this_4._totalBetNum[idx].chip + betVal;
                                        var chipStr = EnumToString.getPointBackNum(this_4._totalBetNum[idx].chip, 2);
                                        this_4._viewUI["text_chip" + posIdx].text = chipStr;
                                    }
                                }
                                if (info.OptType == 1) {
                                    //创建筹码
                                    var chipType = Math.floor(info.BetVal / ChipConfig[this_4._blackjackStory.mapLv][0]);
                                    this_4.createObj(this_4._chipTypeBuy, info.Pos, mainIdx, info.SeatIndex, chipType);
                                    //显示买保险标识
                                    this_4._viewUI["img_baoxian" + posIdx].visible = this_4._viewUI["img_chip" + posIdx].visible;
                                    this_4._viewUI["img_bao" + posIdx].visible = this_4._viewUI["txt_name" + posIdx].visible;
                                }
                            }
                            break;
                        }
                        case 17: { //双倍下注
                            if (this_4._battleIndex < i) {
                                this_4._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                this_4._doubleSeat.push(info.Pos);
                                //显示下注总筹码
                                for (var idx = 0; idx < this_4._totalBetNum.length; idx++) {
                                    if (this_4._totalBetNum[idx].pos == Math.floor(info.Pos / 10)) {
                                        this_4._totalBetNum[idx].chip = this_4._totalBetNum[idx].chip + info.BetVal;
                                        var posIdx_1 = (Math.floor(info.Pos / 10) - mainIdx + 5) % 5;
                                        var chipStr = EnumToString.getPointBackNum(this_4._totalBetNum[idx].chip, 2);
                                        this_4._viewUI["text_chip" + posIdx_1].text = chipStr;
                                    }
                                }
                                //创建筹码
                                var chipType = Math.floor(info.BetVal / ChipConfig[this_4._blackjackStory.mapLv][0]);
                                this_4.createObj(this_4._chipTypeDouble, info.Pos, mainIdx, info.SeatIndex, chipType);
                                var isPart = false;
                                var pos = Math.floor(info.Pos / 10);
                                var posIdx = (pos - mainIdx + 5) % 5;
                                var childPos = info.Pos % 10;
                                var doubleIdx = (info.Pos - mainIdx * 10 + 50) % 50 + 10;
                                if (this_4._partPos.indexOf(pos) >= 0) {
                                    isPart = true;
                                }
                                if (!isPart) {
                                    this_4._viewUI["img_double" + posIdx].visible = true;
                                    this_4._viewUI["img_double" + posIdx].x = this_4._doublePos[doubleIdx][0];
                                    this_4._viewUI["img_double" + posIdx].y = this_4._doublePos[doubleIdx][1];
                                }
                                else {
                                    this_4._viewUI["img_double" + posIdx + "_" + childPos].visible = true;
                                    this_4._viewUI["img_double" + posIdx + "_" + childPos].x = this_4._doublePosPart[doubleIdx][0];
                                    this_4._viewUI["img_double" + posIdx + "_" + childPos].y = this_4._doublePosPart[doubleIdx][1];
                                }
                            }
                            break;
                        }
                        case 18: { //分牌
                            if (this_4._battleIndex < i) {
                                this_4._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                this_4._partPos.push(info.Pos / 10);
                                for (var k = 0; k < this_4._allCardsInfo.length; k++) {
                                    if (info.Pos == this_4._allCardsInfo[k].pos) {
                                        var card = [];
                                        card.push(this_4._allCardsInfo[k].cards[1]);
                                        var obj_1 = {
                                            pos: info.Pos + 1,
                                            cards: card,
                                        };
                                        this_4._allCardsInfo.push(obj_1);
                                        this_4._allCardsInfo[k].cards.splice(1, 1);
                                    }
                                }
                                if (!this_4._blackjackMgr.isReLogin) {
                                    this_4._blackjackMgr.partCard(info.Pos);
                                    this_4._blackjackMgr.setDisabled(info.Pos, true);
                                }
                                //显示下注总筹码
                                var posIdx = (Math.floor(info.Pos / 10) - mainIdx + 5) % 5;
                                for (var idx = 0; idx < this_4._totalBetNum.length; idx++) {
                                    if (this_4._totalBetNum[idx].pos == Math.floor(info.Pos / 10)) {
                                        this_4._totalBetNum[idx].chip = this_4._totalBetNum[idx].chip + info.BetVal;
                                        var chipStr = EnumToString.getPointBackNum(this_4._totalBetNum[idx].chip, 2);
                                        this_4._viewUI["text_chip" + posIdx].text = chipStr;
                                    }
                                }
                                //创建筹码
                                for (var chipId = 0; chipId < this_4._totalChip.length; chipId++) {
                                    var chip = this_4._totalChip[chipId];
                                    if (chip._posIndex == info.Pos) {
                                        chip.moveChip(info.Pos);
                                    }
                                }
                                var obj = {
                                    pos: info.Pos + 1,
                                    idx: info.SeatIndex,
                                    chip: info.BetVal,
                                };
                                this_4._betInfo.push(obj);
                                var chipType = Math.floor(info.BetVal / ChipConfig[this_4._blackjackStory.mapLv][0]);
                                this_4.createObj(this_4._chipTypePart, info.Pos + 1, mainIdx, info.SeatIndex, chipType);
                                //显示点数
                                this_4._viewUI["view_qipao" + posIdx + "_1"].visible = true;
                                //分牌按钮置灰
                                if (info.SeatIndex == mainIdx) {
                                    this_4._viewUI.btn_part.disabled = true;
                                }
                            }
                            break;
                        }
                        case 19: { //要牌
                            if (this_4._battleIndex < i) {
                                this_4._battleIndex = i;
                                var info_1 = battleInfoMgr.info[i];
                                var handle = Handler.create(this_4, this_4._blackjackMgr.createObj);
                                var posIdx_2 = (Math.floor(info_1.SeatIndex / 10) - mainIdx + 5) % 5;
                                var _loop_5 = function (cardIdx) {
                                    if (this_4._allCardsInfo[cardIdx].pos == info_1.SeatIndex) {
                                        this_4._allCardsInfo[cardIdx].cards.push(info_1.Card);
                                        var isPart_1 = false;
                                        var pos = Math.floor(info_1.SeatIndex / 10);
                                        if (this_4._partPos.indexOf(pos) >= 0) {
                                            isPart_1 = true;
                                        }
                                        if (!this_4._blackjackMgr.isReLogin) {
                                            this_4._blackjackMgr.addCard(info_1.Card, handle, info_1.SeatIndex, this_4._allCardsInfo[cardIdx].cards.length - 1, isPart_1);
                                            this_4._game.playSound(PathGameTongyong.music_tongyong + "fapai.mp3", false);
                                        }
                                        var count_1 = this_4._blackjackMgr.checkCardsType(this_4._allCardsInfo[cardIdx].cards, isPart_1);
                                        //显示点数
                                        var childPos_1 = info_1.SeatIndex % 10;
                                        var boomIdx_1 = (info_1.SeatIndex - mainIdx * 10 + 50) % 50 + 10;
                                        if (info_1.SeatIndex < 60) {
                                            Laya.timer.once(200, this_4, function () {
                                                if (count_1[0] == 0) {
                                                    _this._viewUI["view_qipao" + posIdx_2 + "_" + childPos_1].img_bg.skin = Path_game_blackjack.ui_blackjack + "bg_4.png";
                                                    _this._viewUI["view_qipao" + posIdx_2 + "_" + childPos_1].txt_count.text = "爆牌";
                                                    if (!_this._blackjackMgr.isReLogin) {
                                                        _this._game.playSound(Path_game_blackjack.music_blackjack + MUSIC_PATH.baoPaiMusic, false);
                                                        if (!isPart_1) {
                                                            _this._viewUI.view_boom.x = _this._boomPos[boomIdx_1][0];
                                                            _this._viewUI.view_boom.y = _this._boomPos[boomIdx_1][1];
                                                        }
                                                        else {
                                                            _this._viewUI.view_boom.x = _this._boomPosPart[boomIdx_1][0];
                                                            _this._viewUI.view_boom.y = _this._boomPosPart[boomIdx_1][1];
                                                        }
                                                        _this._viewUI.view_boom.visible = true;
                                                        _this._viewUI.view_boom.ani1.play(1, false);
                                                    }
                                                }
                                                else {
                                                    _this._viewUI["view_qipao" + posIdx_2 + "_" + childPos_1].img_bg.skin = Path_game_blackjack.ui_blackjack + "bg_1.png";
                                                    if (count_1[0] == 99) {
                                                        if (!_this._blackjackMgr.isReLogin) {
                                                            _this._game.playSound(Path_game_blackjack.music_blackjack + MUSIC_PATH.teShuPaiMusic, false);
                                                        }
                                                        if (!isPart_1) {
                                                            _this._viewUI["view_wxl" + posIdx_2].visible = true;
                                                            _this._viewUI["view_wxl" + posIdx_2].ani1.play(1, false);
                                                        }
                                                        else {
                                                            _this._viewUI["view_wxl" + posIdx_2 + "_" + childPos_1].visible = true;
                                                            _this._viewUI["view_wxl" + posIdx_2 + "_" + childPos_1].ani1.play(1, false);
                                                        }
                                                        _this._viewUI["view_qipao" + posIdx_2 + "_" + childPos_1].visible = false;
                                                    }
                                                    else {
                                                        if (count_1[1] > 0) {
                                                            //双倍下注，特殊对待
                                                            if (_this._doubleSeat.indexOf(info_1.SeatIndex) >= 0) {
                                                                _this._viewUI["view_qipao" + posIdx_2 + "_" + childPos_1].txt_count.text = count_1[1];
                                                            }
                                                            else {
                                                                _this._viewUI["view_qipao" + posIdx_2 + "_" + childPos_1].txt_count.text = count_1[0] + "/" + count_1[1];
                                                            }
                                                        }
                                                        else {
                                                            _this._viewUI["view_qipao" + posIdx_2 + "_" + childPos_1].txt_count.text = count_1[0];
                                                        }
                                                    }
                                                }
                                            });
                                        }
                                        else if (info_1.SeatIndex == 60) {
                                            Laya.timer.once(200, this_4, function () {
                                                if (count_1[0] == 0) {
                                                    _this._viewUI.view_qipao5_0.img_bg.skin = Path_game_blackjack.ui_blackjack + "bg_4.png";
                                                    _this._viewUI.view_qipao5_0.txt_count.text = "爆牌";
                                                    if (!_this._blackjackMgr.isReLogin) {
                                                        _this._game.playSound(Path_game_blackjack.music_blackjack + MUSIC_PATH.baoPaiMusic, false);
                                                        _this._viewUI.view_boom.x = 530;
                                                        _this._viewUI.view_boom.y = 140;
                                                        _this._viewUI.view_boom.visible = true;
                                                        _this._viewUI.view_boom.ani1.play(1, false);
                                                    }
                                                }
                                                else {
                                                    _this._viewUI.view_qipao5_0.img_bg.skin = Path_game_blackjack.ui_blackjack + "bg_1.png";
                                                    if (count_1[0] == 99) {
                                                        if (!_this._blackjackMgr.isReLogin) {
                                                            _this._game.playSound(Path_game_blackjack.music_blackjack + MUSIC_PATH.teShuPaiMusic, false);
                                                        }
                                                        _this._viewUI.view_wxl5.visible = true;
                                                        _this._viewUI.view_wxl5.ani1.play(1, false);
                                                        _this._viewUI.view_qipao5_0.visible = false;
                                                    }
                                                    else {
                                                        if (count_1[1] > 0) {
                                                            _this._viewUI.view_qipao5_0.txt_count.text = count_1[0] + "/" + count_1[1];
                                                        }
                                                        else {
                                                            _this._viewUI.view_qipao5_0.txt_count.text = count_1[0];
                                                        }
                                                    }
                                                }
                                            });
                                        }
                                    }
                                    //改变按钮状态
                                    if (this_4._allCardsInfo[cardIdx].pos == this_4._mapInfo.GetCurrentBetPos()) {
                                        for (var k = 0; k < this_4._betInfo.length; k++) {
                                            if (this_4._allCardsInfo[cardIdx].pos == this_4._betInfo[k].pos) {
                                                if (this_4._betInfo[k].idx == mainIdx) {
                                                    var cards = this_4._allCardsInfo[cardIdx].cards;
                                                    if (cards.length > 2) {
                                                        this_4._viewUI.btn_double.disabled = true;
                                                    }
                                                    else {
                                                        this_4._viewUI.btn_double.disabled = false;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                };
                                for (var cardIdx = 0; cardIdx < this_4._allCardsInfo.length; cardIdx++) {
                                    _loop_5(cardIdx);
                                }
                            }
                            break;
                        }
                        case 34: { //21点翻牌
                            if (this_4._battleIndex < i) {
                                this_4._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                for (var cardIdx = 0; cardIdx < this_4._allCardsInfo.length; cardIdx++) {
                                    if (this_4._allCardsInfo[cardIdx].pos == info.SeatIndex) {
                                        this_4._allCardsInfo[cardIdx].cards.push(info.Card);
                                    }
                                }
                                if (info.SeatIndex == 60) {
                                    this_4._blackjackMgr.setCardVal(info.Card);
                                }
                            }
                            break;
                        }
                        case 20: { //停牌
                            if (this_4._battleIndex < i) {
                                this_4._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var posIdx = (Math.floor(info.Pos / 10) - mainIdx + 5) % 5;
                                var childPos = info.Pos % 10;
                                for (var cardIdx = 0; cardIdx < this_4._allCardsInfo.length; cardIdx++) {
                                    if (this_4._allCardsInfo[cardIdx].pos == info.Pos) {
                                        var isPart = false;
                                        var pos = Math.floor(info.Pos / 10);
                                        if (this_4._partPos.indexOf(pos) >= 0) {
                                            isPart = true;
                                        }
                                        var count = this_4._blackjackMgr.checkCardsType(this_4._allCardsInfo[cardIdx].cards, isPart);
                                        //显示点数
                                        if (info.SeatIndex < 60) {
                                            var cardCount = count[0] > count[1] ? count[0] : count[1];
                                            this_4._viewUI["view_qipao" + posIdx + "_" + childPos].txt_count.text = cardCount;
                                        }
                                    }
                                }
                            }
                            break;
                        }
                        case 11: { //结算
                            if (this_4._battleIndex < i) {
                                this_4._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                this_4.addMoneyClip(info.SettleVal, info.SeatIndex);
                            }
                            break;
                        }
                        default:
                            break;
                    }
                };
                var this_4 = this;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    _loop_4(i);
                }
            };
            //创建筹码
            BlackjackMapPage.prototype.createObj = function (optType, posIdx, mainIdx, ownerIdx, val) {
                var isPart = false;
                if (this._partPos.indexOf(Math.floor(posIdx / 10)) >= 0) {
                    isPart = true;
                }
                var maxCount = 0;
                for (var i = 0; i < this._chipCount.length; i++) {
                    if (val <= this._chipCount[i][0]) {
                        maxCount = this._chipCount[i][1];
                        break;
                    }
                }
                for (var chipCount = 0; chipCount < maxCount; chipCount++) {
                    var index = chipCount;
                    if (optType == this._chipTypeDouble) {
                        index = index + maxCount;
                    }
                    var chip = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CHIP_MARK, BlackjackChip);
                    chip.setData(optType, posIdx, mainIdx, index, isPart, ownerIdx, val);
                    if (optType == this._chipTypeBet || optType == this._chipTypeDouble || optType == this._chipTypePart) {
                        this._totalChip.push(chip);
                        if (this._blackjackMgr.isReLogin) {
                            chip.drawChip();
                        }
                        else {
                            chip.sendChip();
                        }
                    }
                    else if (optType == this._chipTypeBuy) {
                        this._insuranceChip.push(chip);
                        chip.sendinsuranceChip();
                    }
                    else if (optType == this._chipTypeWin) {
                        this._totalChip.push(chip);
                        chip.winFlyChip(posIdx, isPart);
                    }
                    else if (optType == this._chipTypeHjk) {
                        this._insuranceChip.push(chip);
                        chip.sendHjkChip();
                    }
                }
                if (!this._blackjackMgr.isReLogin) {
                    this._game.playSound(Path_game_blackjack.music_blackjack + MUSIC_PATH.chipMusic, false);
                }
            };
            //清理筹码
            BlackjackMapPage.prototype.clearChip = function () {
                if (this._totalChip && this._totalChip.length) {
                    for (var i = 0; i < this._totalChip.length; i++) {
                        var chip = this._totalChip[i];
                        this._game.sceneObjectMgr.clearOfflineObject(chip);
                        // chip.clear();
                        // chip = null;
                    }
                }
                this._totalChip = [];
                if (this._insuranceChip && this._insuranceChip.length) {
                    for (var i = 0; i < this._insuranceChip.length; i++) {
                        var chip = this._insuranceChip[i];
                        this._game.sceneObjectMgr.clearOfflineObject(chip);
                        // chip.clear();
                        // chip = null;
                    }
                }
                this._insuranceChip = [];
            };
            //金币变化 飘字clip
            BlackjackMapPage.prototype.addMoneyClip = function (value, pos) {
                var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                if (!idx)
                    return;
                var valueClip = value >= 0 ? new BlackjackClip(BlackjackClip.ADD_MONEY_FONT) : new BlackjackClip(BlackjackClip.SUB_MONEY_FONT);
                var preSkin = value >= 0 ? PathGameTongyong.ui_tongyong_general + "tu_jia.png" : PathGameTongyong.ui_tongyong_general + "tu_jian.png";
                valueClip.scale(0.8, 0.8);
                valueClip.anchorX = 0.5;
                var moneyStr = EnumToString.getPointBackNum(Math.abs(value), 2);
                valueClip.setText(moneyStr + "", true, false, preSkin);
                var index = (pos - idx + 5) % 5;
                var moveX = 50;
                var moveY = 30;
                //中间那个飘字位置比较特殊
                if (index == 0) {
                    moveX = -50;
                    moveY = 80;
                }
                var posX = this._viewUI["view_player" + index].x + moveX;
                var posY = this._viewUI["view_player" + index].y + moveY;
                var deep = this._viewUI.img_menu.parent.getChildIndex(this._viewUI.img_menu);
                if (!valueClip.parent)
                    this._viewUI.box_view.addChildAt(valueClip, deep);
                valueClip.pos(posX, posY);
                this._clipList.push(valueClip);
                Laya.Tween.clearAll(valueClip);
                Laya.Tween.to(valueClip, { y: posY - 70 }, 1000);
                if (index == 0) {
                    var maxRan = value >= 0 ? 3 : 4;
                    var musicType = MathU.randomRange(1, maxRan);
                    var str = value >= 0 ? MUSIC_PATH.winMusic : MUSIC_PATH.loseMusic;
                    this._game.playSound(PathGameTongyong.music_tongyong + str + musicType + ".mp3", true);
                }
            };
            //清理飘钱动画
            BlackjackMapPage.prototype.clearClip = function () {
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
            //爆牌效果播完要隐藏
            BlackjackMapPage.prototype.afterBoom = function () {
                this._viewUI.view_boom.visible = false;
            };
            //洗牌动画之后
            BlackjackMapPage.prototype.afterXiPai = function () {
                var _this = this;
                Laya.Tween.clearAll(this._viewUI.view_xipai);
                Laya.Tween.to(this._viewUI.view_xipai, { x: 977, y: 37, rotation: 7, scaleX: 0.5, scaleY: 0.5 }, 300, null, Handler.create(this, function () {
                    _this._viewUI.view_paixie.img_card.visible = true;
                    _this._viewUI.view_paixie.ani1.play(1, false);
                    _this._viewUI.view_xipai.visible = false;
                }));
            };
            //充值弹框
            BlackjackMapPage.prototype.onNotEnoughMoney = function () {
                var _this = this;
                if (!this._game.sceneObjectMgr.mainPlayer)
                    return;
                if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < ChipConfig[this._blackjackStory.mapLv][2]) {
                    TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", ChipConfig[this._blackjackStory.mapLv][2]), function () {
                        _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                    }, function () {
                    }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
                }
            };
            //重置数据
            BlackjackMapPage.prototype.resetData = function () {
                this._battleIndex = -1;
                this._betPos = 0;
                this._betVal = 0;
                this._betInfo = [];
                this._buyInfo = [];
                this._allCardsInfo = [];
                this._betTemp = [];
                this._totalBetNum = [];
                this._partPos = [];
                this._totalChip = [];
                this._doubleSeat = [];
                this._blackjackMgr && (this._blackjackMgr.isReLogin = false);
                this._viewUI.view_xipai.rotation = 0;
                this._viewUI.view_xipai.scaleX = 1;
                this._viewUI.view_xipai.scaleY = 1;
                this._viewUI.view_xipai.x = 636;
                this._viewUI.view_xipai.y = 243;
                this.clearChip();
                this._dealCards = false;
                this._blackjackStory && (this._blackjackStory._isDealCard = false);
            };
            BlackjackMapPage.prototype.clearMapInfoListen = function () {
                this._viewUI.view_boom.ani1.off(LEvent.COMPLETE, this, this.afterBoom);
                this._viewUI.view_xipai.ani_xipai.off(LEvent.COMPLETE, this, this.afterXiPai);
                this._game.sceneObjectMgr.off(BlackjackMapInfo.EVENT_BLACKJACK_STATUS_CHECK, this, this.onUpdateMapState);
                this._game.sceneObjectMgr.off(BlackjackMapInfo.EVENT_BLACKJACK_BATTLE_CHECK, this, this.updateBattledInfo);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                Laya.Tween.clearAll(this);
                Laya.timer.clearAll(this);
            };
            BlackjackMapPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_menu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_back.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_rule.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_seeting.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_record.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_xuya.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_bet.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_min.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_max.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_enter.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_buy.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_notbuy.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_ask.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_part.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_double.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_stop.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_complete.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_continue.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_baodian.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_chongzhi.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.view_boom.ani1.off(LEvent.COMPLETE, this, this.afterBoom);
                    this._viewUI.view_xipai.ani_xipai.off(LEvent.COMPLETE, this, this.afterXiPai);
                    this._viewUI.view_boom.ani1.off(LEvent.COMPLETE, this, this.afterBoom);
                    this._viewUI.view_xipai.ani_xipai.off(LEvent.COMPLETE, this, this.afterXiPai);
                    this._game.sceneObjectMgr.off(BlackjackMapInfo.EVENT_BLACKJACK_STATUS_CHECK, this, this.onUpdateMapState);
                    this._game.sceneObjectMgr.off(BlackjackMapInfo.EVENT_BLACKJACK_BATTLE_CHECK, this, this.updateBattledInfo);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                    this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                    Laya.Tween.clearAll(this);
                    Laya.timer.clearAll(this);
                    this._totalChip = [];
                    this._betInfo = [];
                    this._buyInfo = [];
                    this._allCardsInfo = [];
                    this._betTemp = [];
                    this._partPos = [];
                    this._doubleSeat = [];
                    this._totalBetNum = [];
                    this._totalChip = [];
                    this._insuranceChip = [];
                    this._clipList = [];
                    this.clearClip();
                    if (this._blackjackMgr) {
                        this._blackjackMgr.off(BlackjackMgr.DEAL_CARDS, this, this.onAfterDealCards);
                    }
                    this._mapInfo = null;
                    this._game.stopMusic();
                    this._game.stopAllSound();
                }
                _super.prototype.close.call(this);
            };
            return BlackjackMapPage;
        }(game.gui.base.Page));
        page_1.BlackjackMapPage = BlackjackMapPage;
    })(page = gameblackjack.page || (gameblackjack.page = {}));
})(gameblackjack || (gameblackjack = {}));
//# sourceMappingURL=BlackjackMapPage.js.map