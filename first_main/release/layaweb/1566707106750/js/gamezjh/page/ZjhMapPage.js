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
* 炸金花
*/
var gamezjh;
(function (gamezjh) {
    var page;
    (function (page_1) {
        //音效url
        var MUSIC_PATH = {
            bgMusic: "bgroom.mp3",
            win: "biwin.mp3",
            chip: "chouma.mp3",
            shouqian: "shouqian.mp3",
            bipai: "bpl_",
            genzhu: "genzhu_",
            guzhuyizhi: "guzhuyizhi_",
            jiazhu: "jiazhu_",
            kanpai: "kanpai_",
            qipai: "qipai_",
            PKMusic: "PK.mp3",
            bipaishu: "bipaishu.mp3",
        };
        var ZjhMapPage = /** @class */ (function (_super) {
            __extends(ZjhMapPage, _super);
            function ZjhMapPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._chipTemp = [2, 3, 5, 7]; //加注筹码
                _this._isAuto = false; //是否自动跟注
                _this._isCompare = false; //是否比牌
                _this._isDeal = false; //发牌结束
                _this._posList = [0, 0, 0]; //比牌信息
                _this._compareUnits = [];
                _this._winnerPos = 0; //胜利方
                _this._cardType = ["高牌", "对子", "顺子", "金花", "金花顺", "豹子", "特殊牌"];
                _this._totalChip = [];
                _this._headPos = [[188, 569], [1155, 390], [1159, 191], [18, 191], [18, 390]];
                _this._showCards = []; //就明牌用的
                _this._battleIndex = -1;
                _this._settleGold = 0;
                _this._xiQian = []; //喜钱
                _this._guZhuYiZhiTemp = []; //孤注一掷比牌的信息
                _this._isPlayGuZhuYiZhi = false; //是否在播孤注一掷动画
                _this._xiQianList = {}; //喜钱动画
                _this._xiQianPos = [[460, 180], [940, 315], [940, 120], [80, 120], [80, 315]];
                _this._clipList = []; //喜钱飘字
                _this._isGiveUp = false; //是否弃牌
                _this._needChip = {
                    "1": [1, 20],
                    "2": [5, 200],
                    "3": [20, 500],
                    "4": [50, 1000],
                };
                _this._diff = 500;
                _this._timeList = {};
                _this._firstList = {};
                _this._nameStrInfo = ["xs", "px", "gsy", "gg", "cs", "tdg"];
                _this._isNeedDuang = false;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    Path_game_zjh.atlas_game_ui + "zhajinhua.atlas",
                    Path_game_zjh.atlas_game_ui + "zhajinhua/effect/yanhua.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    Path_game_zjh.atlas_game_ui + "zhajinhua/effect/btn.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    Path_game_zjh.atlas_game_ui + "zhajinhua/effect/bipai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                    Path_game_zjh.music_zjh + "PK.mp3",
                ];
                return _this;
            }
            // 页面初始化函数
            ZjhMapPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.zhajinhua.ZhaJinHuaUI');
                this.addChild(this._viewUI);
                if (!this._zjhMgr) {
                    this._zjhStory = this._game.sceneObjectMgr.story;
                    this._zjhMgr = this._zjhStory.zjhMgr;
                    this._zjhMgr.on(ZjhMgr.EVENT_CHECK, this, this.onAfterDealCards);
                    this._zjhMgr.on(ZjhMgr.XIQIAN_END, this, this.addMoneyXiQian);
                }
                this._game.playMusic(Path_game_zjh.music_zjh + MUSIC_PATH.bgMusic);
            };
            // 页面打开时执行函数
            ZjhMapPage.prototype.onOpen = function () {
                var _this = this;
                _super.prototype.onOpen.call(this);
                this.hiddenViews();
                this.onUpdateUnitOffline();
                if (!this._zjhMgr.isReLogin) {
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, function (page) {
                        _this._viewUI.btn_continue.visible = page.dataSource;
                    });
                }
                else {
                    this.onUpdateMap();
                }
                this._viewUI.btn_menu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_add.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.box_see.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_closen.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_giveup.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_compare.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_call.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_auto.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_continue.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rules.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_cardtype.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_xiqian.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_record.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                // this._viewUI.view_compare.on(LEvent.CLICK, this, () => { });
                // this._viewUI.view_guzhu.on(LEvent.CLICK, this, () => { });
                for (var i = 0; i < 4; i++) {
                    this._viewUI["btn_chip" + i] && this._viewUI["btn_chip" + i].on(LEvent.CLICK, this, this.onBtnChipClick, [i]);
                    var index = i + 1;
                    this._viewUI["view_player" + index] && this._viewUI["view_player" + index].on(LEvent.CLICK, this, this.onBtnCompareClick, [i + 1]);
                }
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMap);
                this._game.sceneObjectMgr.on(ZjhMapInfo.EVENT_ZJH_STATUS_CHECK, this, this.updateMapInfo);
                this._game.sceneObjectMgr.on(ZjhMapInfo.EVENT_ZJH_BATTLE_CHECK, this, this.updateBattledInfo);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
            };
            ZjhMapPage.prototype.onBtnTweenEnd = function (e, target) {
                var _this = this;
                if (target != this._viewUI.btn_compare) {
                    this._isCompare = false;
                    for (var i = 1; i < 5; i++) {
                        this._viewUI["view_player" + i].view_arrow.visible = false;
                    }
                }
                if (target != this._viewUI.btn_add)
                    this._viewUI.img_choose.visible = false;
                switch (target) {
                    case this._viewUI.btn_menu: //菜单
                        this._viewUI.img_menu.visible = true;
                        this._viewUI.btn_menu.visible = false;
                        break;
                    case this._viewUI.btn_add: //加注
                        this._viewUI.img_choose.visible = !this._viewUI.img_choose.visible;
                        break;
                    case this._viewUI.box_see: //看牌
                        this._game.network.call_zhajinhua_see_card();
                        break;
                    case this._viewUI.btn_closen: //返回
                        if (this._game.sceneObjectMgr.mapInfo instanceof MapInfo) {
                            var mainUnit = this._game.sceneObjectMgr.mainUnit;
                            if (!mainUnit.IsGiveUp() && !mainUnit.IsIsDefeated() && this._game.sceneObjectMgr.mapInfo.GetPlayState() == 1) {
                                this._game.showTips("游戏尚未结束，请先打完这局哦~");
                                return;
                            }
                        }
                        if (this._valueClip) {
                            this._valueClip.removeSelf();
                            this._valueClip.destroy(true);
                            this._valueClip = null;
                        }
                        this.clearListen();
                        this.clearXiQian();
                        this._zjhMgr.clear();
                        this._zjhStory.clear();
                        this._game.sceneObjectMgr.leaveStory(true);
                        break;
                    case this._viewUI.btn_giveup: //弃牌
                        this._game.network.call_zhajinhua_give_up();
                        break;
                    case this._viewUI.btn_compare: //比牌
                        this.onBtnCompare();
                        break;
                    case this._viewUI.btn_call: //跟注
                        this._game.network.call_zhajinhua_call();
                        break;
                    case this._viewUI.btn_auto: //自动跟注
                        this.onBtnAutoCall();
                        break;
                    case this._viewUI.btn_continue: //继续游戏
                        //钱够不够
                        if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money >= this._needChip[this._zjhStory.mapLv][1]) {
                            if (this._game.sceneObjectMgr.mapInfo instanceof MapInfo) {
                                if (this._valueClip) {
                                    this._valueClip.removeSelf();
                                    this._valueClip.destroy(true);
                                    this._valueClip = null;
                                }
                                this.resetData();
                                this.hiddenViews();
                                this.clearXiQian();
                                this._zjhMgr.clear();
                                // this._zjhStory.removeListen();
                                this._game.sceneObjectMgr.leaveStory();
                            }
                            else {
                                this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, function (page) {
                                    _this._viewUI.btn_continue.visible = page.dataSource;
                                });
                            }
                        }
                        else {
                            this.onNotEnoughMoney();
                        }
                        break;
                    case this._viewUI.btn_rules: //规则
                        this._game.uiRoot.general.open(page_1.ZjhPageDef.PAGE_ZHAJINHUA_RULE);
                        break;
                    case this._viewUI.btn_cardtype: //牌型
                        this._game.uiRoot.general.open(page_1.ZjhPageDef.PAGE_ZHAJINHUA_RULE, function (page) {
                            page.dataSource = 1;
                        });
                        break;
                    case this._viewUI.btn_xiqian: //喜钱
                        this._viewUI.img_xiqian.visible = !this._viewUI.img_xiqian.visible;
                        break;
                    case this._viewUI.btn_set: //设置
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING);
                        break;
                    case this._viewUI.btn_qifu: //祈福
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU);
                        break;
                    case this._viewUI.btn_record: //战绩
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, function (page) {
                            page.dataSource = page_1.ZjhPageDef.GAME_NAME;
                        });
                        break;
                    default:
                        break;
                }
            };
            //只是为了隐藏菜单
            ZjhMapPage.prototype.onMouseClick = function (e) {
                if (e.currentTarget != this._viewUI.btn_menu) {
                    this._viewUI.img_menu.visible = false;
                    this._viewUI.btn_menu.visible = true;
                }
            };
            //加注
            ZjhMapPage.prototype.onBtnChipClick = function (index, e) {
                this._game.network.call_zhajinhua_filling(this._chipTemp[index]);
                this._viewUI.img_choose.visible = false;
            };
            //自动跟注按钮
            ZjhMapPage.prototype.onBtnAutoCall = function () {
                if (!this._mapInfo)
                    return;
                this._isAuto = !this._isAuto;
                if (this._isAuto) {
                    Laya.timer.loop(1000, this, this.autoCall);
                    this._viewUI.btn_auto.label = "取消跟注";
                    this._viewUI.img_ani1.visible = true;
                    this._viewUI.ani1.play(1, true);
                }
                else {
                    this._viewUI.img_ani1.visible = false;
                    this._viewUI.ani1.gotoAndStop(0);
                    Laya.timer.clear(this, this.autoCall);
                    this._viewUI.btn_auto.label = "自动跟注";
                    //防一下，就怕到你的瞬间，点了取消自动跟注
                    if (this._game.sceneObjectMgr.mainUnit.GetIndex() == this._mapInfo.GetCurrentBetPos()) {
                        this._viewUI.btn_compare.visible = true;
                        this._viewUI.btn_call.visible = true;
                        this._viewUI.btn_add.visible = true;
                    }
                }
            };
            //自动跟注定时器
            ZjhMapPage.prototype.autoCall = function () {
                if (!this._mapInfo)
                    return;
                if (!this._mapInfo.GetPlayState()) { //游戏结算完要干掉定时器啦！
                    Laya.timer.clear(this, this.autoCall);
                    return;
                }
                var betPos = this._mapInfo.GetCurrentBetPos();
                var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                if (!this._game.sceneObjectMgr.mainPlayer)
                    return;
                if (idx == betPos) {
                    //钱够不够
                    var needMoney = this._mapInfo.GetCurChip();
                    if (this._game.sceneObjectMgr.mainUnit.IsSeeCard())
                        needMoney = needMoney * 2;
                    if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money >= needMoney) {
                        this._game.network.call_zhajinhua_call();
                    }
                    else {
                        this.onBtnCompare();
                    }
                }
            };
            //比牌按钮
            ZjhMapPage.prototype.onBtnCompare = function () {
                var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var count = 0;
                var targetPos = 0;
                if (!this._game.sceneObjectMgr.mainPlayer)
                    return;
                for (var i = 1; i < 5; i++) {
                    var pos = (idx + i) % 5 == 0 ? 5 : (idx + i) % 5;
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(pos);
                    if (unit) {
                        if (!unit.IsGiveUp() && !unit.IsIsDefeated() && unit.IsReady()) {
                            count++;
                            targetPos = pos;
                        }
                    }
                }
                if (count > 1) {
                    var needMoney = this._mapInfo.GetCurChip();
                    if (this._game.sceneObjectMgr.mainUnit.IsSeeCard())
                        needMoney = needMoney * 2;
                    if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money >= needMoney) {
                        this._isCompare = true;
                        for (var i = 1; i < 5; i++) {
                            var pos = (idx + i) % 5 == 0 ? 5 : (idx + i) % 5;
                            var unit = this._game.sceneObjectMgr.getUnitByIdx(pos);
                            if (unit) {
                                if (!unit.IsGiveUp() && !unit.IsIsDefeated() && unit.IsReady())
                                    this._viewUI["view_player" + i].view_arrow.visible = !this._viewUI["view_player" + i].view_arrow.visible;
                            }
                        }
                    }
                    else {
                        this._game.network.call_zhajinhua_compare(targetPos);
                    }
                }
                else if (count == 1) {
                    this._game.network.call_zhajinhua_compare(targetPos);
                }
            };
            //比牌飘头像
            ZjhMapPage.prototype.flyHead = function () {
                var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var posIdx1 = (this._posList[0] - idx + 5) % 5;
                var posIdx2 = (this._posList[1] - idx + 5) % 5;
                Laya.Tween.to(this._viewUI["view_head" + posIdx1], { x: 398, y: 249 }, 300);
                Laya.Tween.to(this._viewUI["view_head" + posIdx2], { x: 793, y: 310 }, 300, null, Handler.create(this, this.openComparePage));
            };
            //比牌动画结束
            ZjhMapPage.prototype.compareAniStop = function () {
                this._viewUI.view_bipai1.visible = true;
                this._viewUI.view_bipai1.ani1.play(1, false);
                this._viewUI.view_compare.ani1.stop();
                this._viewUI.view_pk.ani1.stop();
            };
            ZjhMapPage.prototype.bipai1AniStop = function () {
                this._viewUI.view_bipai1.visible = false;
                if (this._posList[2] == this._posList[0]) {
                    this._viewUI.view_effect1.visible = true;
                    this._viewUI.view_effect1.ani1.play(1, false);
                }
                else if (this._posList[2] == this._posList[1]) {
                    this._viewUI.view_effect0.visible = true;
                    this._viewUI.view_effect0.ani1.play(1, false);
                }
                this._viewUI.view_bipai1.ani1.stop();
            };
            ZjhMapPage.prototype.updateViewWin = function () {
                if (this._posList[2] == this._posList[0]) {
                    this._viewUI.view_compare.view_win0.img_win.visible = true;
                    this._viewUI.view_compare.view_win0.ani1.play(1, false);
                    this._viewUI.view_compare.box_card1.disabled = true;
                }
                else if (this._posList[2] == this._posList[1]) {
                    this._viewUI.view_compare.view_win1.img_win.visible = true;
                    this._viewUI.view_compare.view_win1.ani1.play(1, false);
                    this._viewUI.view_compare.box_card0.disabled = true;
                }
                this._viewUI.view_effect0.ani1.stop();
                this._viewUI.view_effect1.ani1.stop();
            };
            //头像归位
            ZjhMapPage.prototype.headPlace = function () {
                this._viewUI.view_compare.visible = false;
                this._viewUI.view_pk.visible = false;
                var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var posIdx1 = (this._posList[0] - idx + 5) % 5; //比
                var posIdx2 = (this._posList[1] - idx + 5) % 5; //被比
                var posIdx3 = this._posList[2] == this._posList[1] ? posIdx1 : posIdx2; //输
                Laya.Tween.to(this._viewUI["view_head" + posIdx1], { x: this._headPos[posIdx1][0], y: this._headPos[posIdx1][1] }, 300);
                Laya.Tween.to(this._viewUI["view_head" + posIdx2], { x: this._headPos[posIdx2][0], y: this._headPos[posIdx2][1] }, 300);
                if (posIdx3 == 0) {
                    this._zjhMgr.fanpai();
                    this._viewUI.box_see.visible = false;
                    this._viewUI.btn_giveup.visible = false;
                    this._viewUI.btn_auto.visible = false;
                    this._viewUI.btn_call.visible = false;
                    this._viewUI.btn_add.visible = false;
                    this._viewUI.img_type.visible = true;
                    var mPlayer = this._game.sceneObjectMgr.mainPlayer;
                    if (mPlayer) {
                        var val = mPlayer.playerInfo.cards;
                        var cardType = this._zjhMgr.checkCardsType(val);
                        this._viewUI.text_type.text = this._cardType[cardType];
                    }
                    this._viewUI.btn_continue.visible = true;
                    this.onNotEnoughMoney();
                }
                this._viewUI["box_opt" + posIdx3].visible = true;
                this._viewUI["text_opt" + posIdx3].text = "比牌失败";
                var unitIdx = this._posList[2] == this._posList[1] ? this._posList[0] : this._posList[1]; //输
                var unit = this._game.sceneObjectMgr.getUnitByIdx(unitIdx);
                if (unit) {
                    this._zjhMgr.setDisabled(true, unit);
                }
            };
            //打开比牌界面
            ZjhMapPage.prototype.openComparePage = function () {
                this._game.playSound(Path_game_zjh.music_zjh + MUSIC_PATH.PKMusic, false);
                this._viewUI.view_compare.visible = true;
                this._viewUI.view_compare.mouseEnabled = false;
                this._viewUI.view_pk.visible = true;
                this._viewUI.view_compare.view_win0.img_win.visible = false;
                this._viewUI.view_compare.view_win1.img_win.visible = false;
                this._viewUI.view_compare.box_card0.disabled = false;
                this._viewUI.view_compare.box_card1.disabled = false;
                this._viewUI.view_compare.ani1.play(1, false);
                this._viewUI.view_pk.ani1.play(1, false);
            };
            //比牌
            ZjhMapPage.prototype.onBtnCompareClick = function (index, e) {
                if (this._isCompare) {
                    var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                    var pos = (idx + index) % 5 == 0 ? 5 : (idx + index) % 5;
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(pos);
                    if (unit.IsGiveUp())
                        return;
                    if (unit.IsIsDefeated())
                        return;
                    if (!unit.IsReady())
                        return;
                    this._game.network.call_zhajinhua_compare(pos);
                    for (var i = 1; i < 5; i++) {
                        this._viewUI["view_player" + i].view_arrow.visible = false;
                    }
                    this._isCompare = false;
                }
            };
            ZjhMapPage.prototype.onUnitAdd = function (u) {
                this.onUpdateUnit();
            };
            //玩家出去了
            ZjhMapPage.prototype.onUnitRemove = function (u) {
                this.onUpdateUnit();
                //游戏结束了，清除筹码
                if (!this._mapInfo)
                    return;
                if (this._mapInfo.GetMapState() == 7 /* MAP_STATE_SHOW */)
                    this._zjhMgr.clearCardObject();
            };
            ZjhMapPage.prototype.onUpdateUnit = function (qifu_index) {
                var _this = this;
                if (!this._mapInfo)
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                //主玩家的座位
                if (!mainUnit)
                    return;
                var idx = mainUnit.GetIndex();
                var betPos = this._mapInfo.GetCurrentBetPos();
                var max = 5;
                var _loop_1 = function (index) {
                    var posIdx = (idx + index) % max == 0 ? 5 : (idx + index) % max;
                    var unit = this_1._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    this_1._viewUI["view_head" + index].visible = unit;
                    if (unit) {
                        var name_1 = getMainPlayerName(unit.GetName());
                        this_1._viewUI["view_head" + index].text_name.text = name_1;
                        this_1._viewUI["view_head" + index].img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unit.GetHeadImg() + ".png";
                        var money = EnumToString.getPointBackNum(unit.GetMoney(), 2);
                        this_1._viewUI["view_head" + index].text_money.text = money;
                        this_1._viewUI["text_total" + index].text = unit.GetTotalChip().toString();
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
                    if (index >= 1) {
                        //最后一个阶段，就不用隐藏了
                        if (this_1._mapInfo.GetMapState() != 7 /* MAP_STATE_SHOW */) {
                            this_1._viewUI["view_player" + index].visible = unit;
                            if (unit) {
                                this_1._viewUI["view_player" + index].img_frame.visible = false;
                                this_1._viewUI["view_player" + index].view_arrow.visible = false;
                            }
                        }
                    }
                };
                var this_1 = this;
                for (var index = 0; index < max; index++) {
                    _loop_1(index);
                }
            };
            ZjhMapPage.prototype.playTween = function (img, index, isTween) {
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
            ZjhMapPage.prototype.onOptHandler = function (optcode, msg) {
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
            //地图监听
            ZjhMapPage.prototype.onUpdateMap = function () {
                var _this = this;
                var mapInfo = this._game.sceneObjectMgr.mapInfo;
                this._mapInfo = mapInfo;
                if (mapInfo) {
                    this._viewUI.view_compare.ani1.on(LEvent.COMPLETE, this, this.compareAniStop);
                    this._viewUI.view_bipai1.ani1.on(LEvent.COMPLETE, this, this.bipai1AniStop);
                    this._viewUI.view_compare.view_win0.ani1.on(LEvent.COMPLETE, this, this.headPlace);
                    this._viewUI.view_compare.view_win1.ani1.on(LEvent.COMPLETE, this, this.headPlace);
                    this._viewUI.view_effect0.ani1.on(LEvent.COMPLETE, this, this.updateViewWin);
                    this._viewUI.view_effect1.ani1.on(LEvent.COMPLETE, this, this.updateViewWin);
                    this._viewUI.view_xipai.ani_xipai.on(LEvent.COMPLETE, this, this.afterShuffleCards);
                    for (var index = 0; index < 5; index++) {
                        this._viewUI["view_shu" + index].ani1.on(LEvent.COMPLETE, this, this.headPlace, [index]);
                    }
                    if (this._zjhMgr.isReLogin) {
                        this._zjhStory.mapLv = this._mapInfo.GetMapLevel();
                        this.loginAgainInit();
                    }
                    this._viewUI.btn_continue.visible = false;
                    this._zjhStory.isGiveUp = false;
                    this.initView();
                    this.updateMapInfo();
                    this.updateBattledInfo();
                    this._zjhMgr.isReLogin = false;
                }
                else {
                    this.onUpdateUnitOffline();
                    this.resetData();
                    this.hiddenViews();
                    this.clearXiQian();
                    this._zjhMgr.clear();
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, function (page) {
                        _this._viewUI.btn_continue.visible = page.dataSource;
                    });
                    this._zjhStory.isGiveUp = false;
                    this._viewUI.btn_continue.visible = false;
                }
            };
            ZjhMapPage.prototype.onUpdateUnitOffline = function () {
                if (!this._zjhMgr.unitOffline)
                    return;
                var unitOffline = this._zjhMgr.unitOffline;
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
            //发完牌了，显示看牌按钮还有发筹码
            ZjhMapPage.prototype.onAfterDealCards = function () {
                if (!this._mapInfo)
                    return;
                var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                for (var i = 1; i < 6; i++) {
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(i);
                    if (unit) {
                        var posIdx = (i - idx + 5) % 5;
                        this.createObj(posIdx, 0, this._needChip[this._zjhStory.mapLv][0], i - 1);
                        this._game.playSound(Path_game_zjh.music_zjh + MUSIC_PATH.chip, false);
                    }
                }
                for (var index = 0; index < 5; index++) {
                    var posIdx = (idx + index) % 5 == 0 ? 5 : (idx + index) % 5;
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    if (unit)
                        this._viewUI["box_chip" + index].visible = true;
                }
                if (!this._game.sceneObjectMgr.mainUnit.IsSeeCard()) {
                    if (!this._game.sceneObjectMgr.mainUnit.IsGiveUp())
                        this._viewUI.box_see.visible = true;
                }
                this._zjhMgr.cardIndex = 0;
                this._isDeal = true;
                var betPos = this._mapInfo.GetCurrentBetPos();
                this._viewUI.btn_giveup.visible = true;
                this._viewUI.view_paixie.visible = false;
                this._viewUI.view_paixie.ani1.stop();
                if (idx == betPos) {
                    this._viewUI.btn_add.visible = true;
                    this._viewUI.btn_call.visible = true;
                    if (this._mapInfo.GetRound() < 2) {
                        this._viewUI.btn_compare.visible = false;
                    }
                    else {
                        this._viewUI.btn_compare.visible = true;
                    }
                }
                else {
                    this._viewUI.btn_auto.visible = true;
                }
            };
            ZjhMapPage.prototype.updateMapInfo = function () {
                if (!this._mapInfo)
                    return;
                var mainUint = this._game.sceneObjectMgr.mainUnit;
                if (!mainUint)
                    return;
                this._viewUI.text_money.text = this._mapInfo.GetJackpot().toString();
                var round = this._mapInfo.GetRound() > 20 ? 20 : this._mapInfo.GetRound();
                this._viewUI.text_round.text = round + "/20轮";
                //比牌加注按钮
                var curBet = this._mapInfo.GetCurChip();
                this._viewUI.btn_compare.label = "比牌";
                this._viewUI.btn_call.label = "跟注";
                if (curBet > 0) {
                    if (mainUint.IsSeeCard()) {
                        curBet = curBet * 2;
                    }
                    this._viewUI.btn_compare.label = curBet + "比牌";
                    this._viewUI.btn_call.label = curBet + "跟注";
                    if (this._game.sceneObjectMgr.mainUnit.GetMoney() < curBet) {
                        this._viewUI.btn_call.disabled = true;
                        this._viewUI.btn_add.disabled = true;
                    }
                }
                if (this._zjhStory.mapLv) {
                    for (var i = 0; i < 4; i++) {
                        this._viewUI["btn_chip" + i].disabled = false;
                        if (this._mapInfo.GetCurChip() >= this._needChip[this._zjhStory.mapLv][0] * this._chipTemp[i]) {
                            this._viewUI["btn_chip" + i].disabled = true;
                        }
                    }
                    if (this._mapInfo.GetCurChip() >= this._needChip[this._zjhStory.mapLv][0] * this._chipTemp[this._chipTemp.length - 1]) {
                        this._viewUI.btn_add.disabled = true;
                    }
                }
                if (!this._isAuto)
                    this._viewUI.img_ani1.visible = false;
                this.updateMapUI();
            };
            //根据地图状态刷新界面
            ZjhMapPage.prototype.updateMapUI = function () {
                var _this = this;
                if (!this._mapInfo)
                    return;
                var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var betPos = this._mapInfo.GetCurrentBetPos();
                var statue = this._mapInfo.GetMapState();
                this.initView();
                if (!this._game.sceneObjectMgr.mainUnit.IsIsDefeated() && !this._game.sceneObjectMgr.mainUnit.IsGiveUp() && !this._isGiveUp) {
                    this._viewUI.btn_continue.visible = false;
                }
                if (statue == 1 /* MAP_STATE_SHUFFLE */) {
                    this._viewUI.view_xipai.visible = true;
                    this._viewUI.view_xipai.ani_xipai.play(1, false);
                }
                else {
                    this._viewUI.view_xipai.visible = false;
                    this._viewUI.view_xipai.ani_xipai.stop();
                }
                if (statue == 3 /* MAP_STATE_CARD */) {
                    this._viewUI.text_info.text = "牌局号：" + this._mapInfo.GetGameNo();
                    this._viewUI.text_info.visible = true;
                    this._viewUI.text_roomtype.visible = true;
                    this._viewUI.text_maxchip.visible = true;
                    this._viewUI.view_paixie.visible = true;
                    this._viewUI.view_paixie.ani1.play(1, true);
                }
                if (statue > 3 /* MAP_STATE_CARD */) {
                    if (!this._game.sceneObjectMgr.mainUnit.IsGiveUp() && !this._game.sceneObjectMgr.mainUnit.IsIsDefeated() && this._isDeal && !this._isGiveUp) {
                        this._viewUI.btn_giveup.visible = true;
                        if (idx != betPos) {
                            this._viewUI.btn_auto.visible = true;
                            this._viewUI.btn_add.visible = false;
                            this._viewUI.btn_call.visible = false;
                            this._viewUI.btn_compare.visible = false;
                        }
                        else {
                            this._viewUI.btn_add.visible = true;
                            this._viewUI.btn_call.visible = true;
                            this._viewUI.btn_auto.visible = false;
                            if (this._mapInfo.GetRound() < 2) {
                                this._viewUI.btn_compare.visible = false;
                            }
                            else {
                                this._viewUI.btn_compare.visible = true;
                            }
                        }
                    }
                }
                if (statue == 4 /* MAP_STATE_BEGIN */) {
                    for (var index = 0; index < 5; index++) {
                        this._viewUI["view_head" + index].img_frame.visible = false;
                    }
                    var posIdx = (betPos - idx + 5) % 5;
                    this._viewUI["view_head" + posIdx].img_frame.visible = true;
                    var now_time = this._game.sync.serverTimeBys * 1000;
                    this._endTime = this._mapInfo.GetCountDown() * 1000;
                    this._totalTime = this._endTime - now_time;
                    if (this._isGiveUp && this._viewUI.btn_giveup.visible) { //异常（已弃牌但是弃牌按钮还在）
                        this.updateBattledInfo(); //跑一下战斗日志刷新UI
                    }
                }
                if (statue >= 5 /* MAP_STATE_COMPARE */) {
                    for (var index = 0; index < 5; index++) {
                        this._viewUI["view_head" + index].img_frame.visible = false;
                    }
                    this._viewUI.btn_add.visible = false;
                    this._viewUI.btn_call.visible = false;
                    this._viewUI.btn_auto.visible = false;
                    this._viewUI.btn_compare.visible = false;
                    this._viewUI.btn_giveup.visible = false;
                }
                if (statue == 7 /* MAP_STATE_SHOW */) {
                    this._viewUI.box_see.visible = false;
                    this._viewUI.img_type.visible = true;
                    var mPlayer = this._game.sceneObjectMgr.mainPlayer;
                    if (mPlayer) {
                        var val = mPlayer.playerInfo.cards;
                        var cardType = this._zjhMgr.checkCardsType(val);
                        this._viewUI.text_type.text = this._cardType[cardType];
                    }
                    Laya.timer.once(500, this, function () {
                        for (var i = 0; i < _this._showCards.length; i++) {
                            var pos = _this._showCards[i].id;
                            _this._zjhMgr.showCard(_this._showCards[i].cards, pos);
                        }
                        if (idx == _this._winnerPos) {
                            _this._viewUI.view_win.visible = true;
                            _this._viewUI.view_win.ani1.play(1, false);
                            _this._game.playSound(Path_game_zjh.music_zjh + MUSIC_PATH.win, false);
                        }
                        for (var index = 1; index < 5; index++) {
                            var posIdx = (idx + index) % 5 == 0 ? 5 : (idx + index) % 5;
                            if (posIdx == _this._winnerPos)
                                _this._viewUI["view_player" + index].img_frame.visible = true;
                            _this._viewUI["view_player" + index].img_frame.ani1.play(1, false);
                        }
                        _this.flyChipEffect();
                        if (_this._settleGold != 0) {
                            var pos = (_this._winnerPos - idx + 5) % 5;
                            _this.addMoneyClip(_this._settleGold);
                        }
                        _this._viewUI.btn_continue.visible = true;
                        if (_this._xiQian.length > 0) {
                            for (var k = 0; k < _this._xiQian.length; k++) {
                                _this.addXiQian(_this._xiQian[k].val, _this._xiQian[k].idx);
                            }
                        }
                        _this.onNotEnoughMoney();
                    });
                }
            };
            //充值弹框
            ZjhMapPage.prototype.onNotEnoughMoney = function () {
                var _this = this;
                if (!this._game.sceneObjectMgr.mainPlayer)
                    return;
                if (this._game.sceneObjectMgr.mainPlayer.GetMoney() < this._needChip[this._zjhStory.mapLv][1]) {
                    TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", this._needChip[this._zjhStory.mapLv][1]), function () {
                        _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                    }, function () {
                    }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
                }
            };
            //在场活的精灵数量
            ZjhMapPage.prototype.unitCount = function () {
                var count = 0;
                for (var index = 1; index < 6; index++) {
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(index);
                    if (unit) {
                        if (!unit.IsGiveUp() && !unit.IsIsDefeated()) {
                            count++;
                        }
                    }
                }
                return count;
            };
            //战斗日志
            ZjhMapPage.prototype.updateBattledInfo = function () {
                if (!this._mapInfo)
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var battleInfoMgr = this._mapInfo.battleInfoMgr;
                var mainIdx = mainUnit.GetIndex();
                var cards = this._game.sceneObjectMgr.mainPlayer.playerInfo.cards;
                var cardType = this._zjhMgr.checkCardsType(cards);
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    var index = battleInfoMgr.info.length;
                    switch (battleInfo.Type) {
                        case 1: { //放弃
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var idx = battleInfo.SeatIndex;
                                var unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                                if (unit) {
                                    if (!this._zjhMgr.isReLogin) {
                                        var type = Math.floor((parseInt(unit.GetHeadImg()) - 1) / 10) + 1;
                                        this._game.playSound(Path_game_zjh.music_zjh + MUSIC_PATH.qipai + type + ".mp3", false);
                                        if (idx == mainIdx) {
                                            this.onNotEnoughMoney();
                                            this._zjhMgr.fanpai();
                                            this._viewUI.img_choose.visible = false;
                                            this._viewUI.btn_continue.visible = true;
                                            this._viewUI.box_see.visible = false;
                                            this._viewUI.img_type.visible = true;
                                            this._viewUI.btn_giveup.visible = false;
                                            this._viewUI.btn_auto.visible = false;
                                            this._viewUI.btn_call.visible = false;
                                            this._viewUI.btn_add.visible = false;
                                            this._isAuto = false;
                                            Laya.timer.clear(this, this.autoCall);
                                            this._viewUI.text_type.text = this._cardType[cardType];
                                            this._isGiveUp = true;
                                        }
                                        var posIdx = (idx - mainIdx + 5) % 5;
                                        this._zjhMgr.setDisabled(true, unit);
                                        this._viewUI["box_opt" + posIdx].visible = true;
                                        this._viewUI["text_opt" + posIdx].text = "弃牌";
                                    }
                                }
                            }
                            break;
                        }
                        case 2: { //跟注
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                this.updateChipInfo(info, i);
                                var idx = info.SeatIndex;
                                var unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                                if (unit) {
                                    if (!this._zjhMgr.isReLogin) {
                                        var type = Math.floor((parseInt(unit.GetHeadImg()) - 1) / 10) + 1;
                                        this._game.playSound(Path_game_zjh.music_zjh + MUSIC_PATH.genzhu + type + ".mp3", false);
                                    }
                                }
                            }
                            break;
                        }
                        case 3: { //明牌
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                //明牌用
                                var cards_1 = [];
                                var info = battleInfoMgr.info[i];
                                var pos = info.SeatIndex;
                                for (var index_1 = 0; index_1 < info.Cards.length; index_1++) {
                                    var card = info.Cards[index_1];
                                    cards_1.push(card.GetVal());
                                }
                                var obj = {
                                    id: pos,
                                    cards: cards_1,
                                };
                                this._showCards.push(obj);
                            }
                            break;
                        }
                        case 4: { //比牌
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                this.updateChipInfo(info, i);
                                this.compareInfo(info);
                                var idx = info.SeatIndex;
                                var unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                                if (unit) {
                                    if (!this._zjhMgr.isReLogin) {
                                        var type = Math.floor((parseInt(unit.GetHeadImg()) - 1) / 10) + 1;
                                        this._game.playSound(Path_game_zjh.music_zjh + MUSIC_PATH.bipai + type + ".mp3", false);
                                    }
                                }
                            }
                            break;
                        }
                        case 7: { //看牌
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var idx = battleInfo.SeatIndex;
                                var unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                                if (unit) {
                                    if (!this._zjhMgr.isReLogin) {
                                        var type = Math.floor((parseInt(unit.GetHeadImg()) - 1) / 10) + 1;
                                        this._game.playSound(Path_game_zjh.music_zjh + MUSIC_PATH.kanpai + type + ".mp3", false);
                                        if (idx == mainIdx) {
                                            this._zjhMgr.fanpai();
                                            this._viewUI.box_see.visible = false;
                                            this._viewUI.img_type.visible = true;
                                            this._viewUI.text_type.text = this._cardType[cardType];
                                            for (var chipId = 0; chipId < 4; chipId++) {
                                                this._viewUI["btn_chip" + chipId].label = this._chipTemp[chipId] * this._needChip[this._zjhStory.mapLv][0] * 2;
                                            }
                                            var curBet = this._mapInfo.GetCurChip();
                                            if (curBet > 0) {
                                                this._viewUI.btn_compare.label = 2 * curBet + "比牌";
                                                this._viewUI.btn_call.label = 2 * curBet + "跟注";
                                            }
                                        }
                                        var posIdx = (idx - mainIdx + 5) % 5;
                                        this._viewUI["box_opt" + posIdx].visible = true;
                                        this._viewUI["text_opt" + posIdx].text = "看牌";
                                    }
                                }
                            }
                            break;
                        }
                        case 8: { //孤注一掷
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                this._guZhuYiZhiTemp.push(info.SeatIndex);
                                this._guZhuYiZhiTemp.push(info.TargetIdx);
                                this._guZhuYiZhiTemp.push(info.WinIdx);
                                if (this._guZhuYiZhiTemp.length / 3 == this.unitCount() - 1 || info.WinIdx == info.TargetIdx) {
                                    this.guZhuYiZhiPlay();
                                    var idx = info.SeatIndex;
                                    var unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                                    if (unit) {
                                        if (!this._zjhMgr.isReLogin) {
                                            var type = Math.floor((parseInt(unit.GetHeadImg()) - 1) / 10) + 1;
                                            this._game.playSound(Path_game_zjh.music_zjh + MUSIC_PATH.guzhuyizhi + type + ".mp3", false);
                                        }
                                    }
                                }
                            }
                            break;
                        }
                        case 9: { //加注
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                this.updateChipInfo(info, i);
                                var idx = info.SeatIndex;
                                var unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                                if (unit) {
                                    if (!this._zjhMgr.isReLogin) {
                                        var type = Math.floor((parseInt(unit.GetHeadImg()) - 1) / 10) + 1;
                                        this._game.playSound(Path_game_zjh.music_zjh + MUSIC_PATH.jiazhu + type + ".mp3", false);
                                    }
                                }
                            }
                            break;
                        }
                        case 11: { //结算
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                this._winnerPos = info.SeatIndex;
                                this._settleGold = info.SettleVal;
                            }
                            break;
                        }
                        case 14: { //喜钱
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var obj = {
                                    idx: info.SeatIndex,
                                    val: info.BetVal,
                                };
                                this._xiQian.push(obj);
                            }
                            break;
                        }
                        default:
                            break;
                    }
                }
            };
            //战斗日志来更新桌面上的筹码
            ZjhMapPage.prototype.updateChipInfo = function (info, index) {
                //主玩家的座位
                var mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var idx = info.SeatIndex;
                var posIdx = (idx - mainIdx + 5) % 5;
                var type = 0;
                var value = info.BetVal;
                var unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                var minChip = this._needChip[this._zjhStory.mapLv][0];
                var per = info.BetVal / minChip;
                if (info.SeeCard == 1) {
                    if (this._chipTemp.indexOf(per / 2) > -1) {
                        type = this._chipTemp.indexOf(per / 2) + 1;
                    }
                    value = value / 2;
                    this.createObj(posIdx, type, value, index + 5);
                }
                else {
                    if (this._chipTemp.indexOf(per) > -1) {
                        type = this._chipTemp.indexOf(per) + 1;
                    }
                }
                this.createObj(posIdx, type, value, index + 5);
                if (!this._zjhMgr.isReLogin)
                    this._game.playSound(Path_game_zjh.music_zjh + MUSIC_PATH.chip, false);
            };
            //比牌
            ZjhMapPage.prototype.compareInfo = function (info) {
                this._posList[0] = parseInt(info.SeatIndex);
                this._posList[1] = parseInt(info.TargetIdx);
                this._posList[2] = parseInt(info.WinIdx);
                for (var i = 0; i < this._posList.length; i++) {
                    this._compareUnits.push(this._game.sceneObjectMgr.getUnitByIdx(this._posList[i]));
                }
                this.flyHead();
            };
            //比牌-孤注一掷
            ZjhMapPage.prototype.guZhuYiZhiPlay = function () {
                var _this = this;
                if (this._guZhuYiZhiTemp.length == 0)
                    return;
                if (this._isPlayGuZhuYiZhi)
                    return;
                this._viewUI.view_guzhu.visible = true;
                this._viewUI.view_guzhu.mouseEnabled = false;
                this._viewUI.view_guzhu.ani1.play(1, false);
                this._isPlayGuZhuYiZhi = true;
                var mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var count = 0;
                var targetCount = 0;
                var compareCount = 0;
                var time = 4000 * 3 / this._guZhuYiZhiTemp.length;
                var _loop_2 = function (i) {
                    var idx = 0;
                    var posIdx = 0;
                    if (i == 0) {
                        idx = this_2._guZhuYiZhiTemp[i];
                        posIdx = (idx - mainIdx + 5) % 5;
                        this_2._viewUI["view_pk" + posIdx].visible = true;
                        this_2._viewUI["view_pk" + posIdx].ani1.play(1, false);
                    }
                    else if (i % 3 == 1) {
                        idx = this_2._guZhuYiZhiTemp[i];
                        posIdx = (idx - mainIdx + 5) % 5;
                        Laya.timer.once(time * targetCount, this_2, function () {
                            _this._viewUI["view_pk" + posIdx].visible = true;
                            _this._viewUI["view_pk" + posIdx].ani1.play(1, false);
                        });
                        targetCount++;
                    }
                    else if (i % 3 == 2) {
                        //这个是赢的位置，那输的就是另一个
                        var loseIdx_1 = this_2._guZhuYiZhiTemp[i] == this_2._guZhuYiZhiTemp[i - 1] ? this_2._guZhuYiZhiTemp[0] : this_2._guZhuYiZhiTemp[i - 1];
                        Laya.timer.once(time * count + time, this_2, function () {
                            compareCount++;
                            posIdx = (loseIdx_1 - mainIdx + 5) % 5;
                            _this._viewUI["view_pk" + posIdx].visible = false;
                            _this._viewUI["view_shu" + posIdx].visible = true;
                            _this._viewUI["view_shu" + posIdx].ani1.play(1, false);
                            _this._game.playSound(Path_game_zjh.music_zjh + MUSIC_PATH.bipaishu, false);
                            var unit = _this._game.sceneObjectMgr.getUnitByIdx(loseIdx_1);
                            if (unit) {
                                _this._zjhMgr.setDisabled(true, unit);
                            }
                            if (compareCount == _this._guZhuYiZhiTemp.length / 3) {
                                _this._viewUI.view_guzhu.visible = false;
                                _this._viewUI.view_guzhu.ani1.stop();
                                _this._guZhuYiZhiTemp = [];
                                _this._isPlayGuZhuYiZhi = false;
                                for (var index = 0; index < 5; index++) {
                                    _this._viewUI["view_pk" + index].visible = false;
                                    _this._viewUI["view_pk" + index].ani1.stop();
                                }
                                if (posIdx == 0) {
                                    _this._viewUI.btn_continue.visible = true;
                                }
                            }
                        });
                        count++;
                    }
                };
                var this_2 = this;
                for (var i = 0; i < this._guZhuYiZhiTemp.length; i++) {
                    _loop_2(i);
                }
            };
            //关闭孤注一掷输的动画
            ZjhMapPage.prototype.stopGuZhuYiZhiLose = function (index) {
                this._viewUI["view_shu" + index].visible = false;
            };
            //创建筹码
            ZjhMapPage.prototype.createObj = function (posIdx, type, value, index) {
                var chip = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CHIP_MARK, ZjhChip);
                chip.setData(posIdx, type, value, index);
                this._totalChip.push(chip);
                if (this._zjhMgr.isReLogin) {
                    chip.drawChip();
                }
                else {
                    chip.sendChip();
                }
            };
            //结算飘筹码
            ZjhMapPage.prototype.flyChipEffect = function () {
                var mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var idx = this._winnerPos;
                for (var i = 0; i < this._totalChip.length; i++) {
                    var chip = this._totalChip[i];
                    var posIdx = (idx - mainIdx + 5) % 5;
                    chip.flyChip(posIdx);
                }
                this._totalChip = [];
                this._game.playSound(Path_game_zjh.music_zjh + MUSIC_PATH.shouqian, false);
            };
            //金币变化 飘字clip
            ZjhMapPage.prototype.addMoneyClip = function (value) {
                var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                this._valueClip = new ZjhClip(ZjhClip.ADD_MONEY_FONT);
                var preSkin = PathGameTongyong.ui_tongyong_general + "tu_jia.png";
                this._valueClip.scale(0.8, 0.8);
                this._valueClip.anchorX = 0.5;
                this._valueClip.anchorY = 0.5;
                var moneyStr = EnumToString.getPointBackNum(Math.abs(value), 2);
                var index = (this._winnerPos - idx + 5) % 5;
                var posX = this._headPos[index][0] + 50;
                var posY = this._headPos[index][1] + 50;
                this._valueClip.setText(moneyStr + "", false, false, preSkin);
                var deep = this._viewUI.img_menu.parent.getChildIndex(this._viewUI.img_menu);
                if (!this._valueClip.parent)
                    this._viewUI.box_view.addChildAt(this._valueClip, deep);
                this._valueClip.pos(posX, posY);
                Laya.Tween.clearAll(this._valueClip);
                Laya.Tween.to(this._valueClip, { y: posY - 70 }, 1000);
            };
            //喜钱动画
            ZjhMapPage.prototype.addXiQian = function (value, posIdx) {
                var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var index = (posIdx - idx + 5) % 5;
                var xiQian = this._xiQianList[index];
                if (!xiQian) {
                    this._xiQianList[index] = xiQian = new page_1.ZjhXiQianPage(value, this._zjhMgr);
                    xiQian.anchorX = xiQian.anchorY = 0.5;
                    xiQian.left = this._xiQianPos[index][0];
                    xiQian.top = this._xiQianPos[index][1];
                    if (index == 0) {
                        xiQian.scale(1, 1);
                    }
                    else {
                        xiQian.scale(0.7, 0.7);
                    }
                }
                var deep = this._viewUI.img_menu.parent.getChildIndex(this._viewUI.img_menu);
                !xiQian.parent && this._viewUI.box_view.addChildAt(xiQian, deep);
            };
            //喜钱 飘字clip
            ZjhMapPage.prototype.addMoneyXiQian = function () {
                this._zjhMgr.off(ZjhMgr.XIQIAN_END, this, this.addMoneyXiQian);
                for (var i = 0; i < this._xiQian.length; i++) {
                    var value = this._xiQian[i].val;
                    var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                    var valueClip = new ZjhClip(ZjhClip.ADD_MONEY_XIQIAN);
                    var preSkin = Path_game_zjh.ui_zjh + "xq_j.png";
                    valueClip.scale(0.8, 0.8);
                    valueClip.anchorX = 0.5;
                    valueClip.setText(value + "", false, false, preSkin);
                    var index = (this._xiQian[i].idx - idx + 5) % 5;
                    var posX = this._headPos[index][0] + 50;
                    var posY = this._headPos[index][1] - 60;
                    var deep = this._viewUI.img_menu.parent.getChildIndex(this._viewUI.img_menu);
                    if (!valueClip.parent)
                        this._viewUI.box_view.addChildAt(valueClip, deep);
                    valueClip.pos(posX, posY);
                    this._clipList.push(valueClip);
                }
            };
            //清理所有喜钱动画
            ZjhMapPage.prototype.clearXiQian = function () {
                for (var key in this._xiQianList) {
                    if (this._xiQianList.hasOwnProperty(key)) {
                        var xiqian = this._xiQianList[key];
                        xiqian.removeSelf();
                        xiqian.destroy();
                        xiqian = null;
                    }
                }
                this._xiQianList = {};
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
            ZjhMapPage.prototype.initView = function () {
                //界面UI
                if (this._zjhStory.mapLv) {
                    var str = "";
                    if (this._zjhStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_ZJH_1) {
                        str = "新手场：底注：";
                    }
                    else if (this._zjhStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_ZJH_2) {
                        str = "小资场：底注：";
                    }
                    else if (this._zjhStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_ZJH_3) {
                        str = "老板场：底注：";
                    }
                    else if (this._zjhStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_ZJH_4) {
                        str = "富豪场：底注：";
                    }
                    this._viewUI.text_roomtype.text = str + this._needChip[this._zjhStory.mapLv][0];
                    this._viewUI.text_maxchip.text = " 单注上限：" + this._needChip[this._zjhStory.mapLv][0] * this._chipTemp[this._chipTemp.length - 1] * 2;
                    var per = 1;
                    var mainUint = this._game.sceneObjectMgr.mainUnit;
                    if (mainUint) {
                        if (mainUint.IsSeeCard()) {
                            per = 2;
                        }
                    }
                    for (var i = 0; i < 4; i++) {
                        this._viewUI["btn_chip" + i].label = this._chipTemp[i] * this._needChip[this._zjhStory.mapLv][0] * per;
                    }
                }
            };
            //重连上线的
            ZjhMapPage.prototype.loginAgainInit = function () {
                if (!this._zjhMgr.isReLogin)
                    return;
                if (!this._mapInfo)
                    return;
                this._isDeal = true;
                this._viewUI.text_info.visible = true;
                this._viewUI.text_roomtype.visible = true;
                this._viewUI.text_maxchip.visible = true;
                this._viewUI.view_bipai1.visible = false;
                this._viewUI.view_compare.visible = false;
                this._viewUI.view_pk.visible = false;
                this._viewUI.btn_giveup.visible = true;
                this.onUpdateUnit();
                if (!this._game.sceneObjectMgr.mainUnit.IsSeeCard())
                    this._viewUI.box_see.visible = true;
                for (var index = 0; index < 5; index++) {
                    var idx_1 = this._game.sceneObjectMgr.mainUnit.GetIndex();
                    var posIdx = (idx_1 + index) % 5 == 0 ? 5 : (idx_1 + index) % 5;
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    this._viewUI["view_head" + index].x = this._headPos[index][0];
                    this._viewUI["view_head" + index].y = this._headPos[index][1];
                    if (unit) {
                        this._viewUI["box_chip" + index].visible = true;
                        if (unit.IsIsDefeated()) {
                            this._viewUI["box_opt" + index].visible = true;
                            this._viewUI["text_opt" + index].text = "比牌失败";
                        }
                        else if (unit.IsGiveUp()) {
                            this._viewUI["box_opt" + index].visible = true;
                            this._viewUI["text_opt" + index].text = "弃牌";
                        }
                        else if (unit.IsSeeCard()) {
                            this._viewUI["box_opt" + index].visible = true;
                            this._viewUI["text_opt" + index].text = "看牌";
                        }
                    }
                }
                this._viewUI.text_money.text = this._mapInfo.GetJackpot().toString();
                var round = this._mapInfo.GetRound() > 20 ? 20 : this._mapInfo.GetRound();
                this._viewUI.text_round.text = round + "/20轮";
                this._viewUI.text_info.text = "牌局号：" + this._mapInfo.GetGameNo();
                //轮到自己操作时重连
                var betPos = this._mapInfo.GetCurrentBetPos();
                var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                if (idx == betPos) {
                    this._viewUI.btn_add.visible = true;
                    this._viewUI.btn_call.visible = true;
                    this._viewUI.btn_auto.visible = false;
                    if (round < 2) {
                        this._viewUI.btn_compare.visible = false;
                    }
                    else {
                        this._viewUI.btn_compare.visible = true;
                    }
                    this._viewUI.view_head0.img_frame.visible = true;
                }
                else {
                    this._viewUI.btn_auto.visible = true;
                }
                //筹码
                var battleInfoMgr = this._mapInfo.battleInfoMgr;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    switch (battleInfo.Type) {
                        case 2: { //跟注
                            var info = battleInfoMgr.info[i];
                            this.updateChipInfo(info, i);
                            break;
                        }
                        case 4: { //比牌
                            var info = battleInfoMgr.info[i];
                            this.updateChipInfo(info, i);
                            break;
                        }
                        case 9: { //加注
                            var info = battleInfoMgr.info[i];
                            this.updateChipInfo(info, i);
                            break;
                        }
                        case 10: { //下注底分
                            var info = battleInfoMgr.info[i];
                            this.updateChipInfo(info, i);
                            break;
                        }
                        default:
                            break;
                    }
                }
            };
            //操作倒计时
            ZjhMapPage.prototype.update = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                if (!mapinfo)
                    return;
                var state = mapinfo.GetMapState();
                if (state != 4 /* MAP_STATE_BEGIN */)
                    return;
                var now_time = this._game.sync.serverTimeBys * 1000;
                var remain_time = this._endTime - now_time;
                if (remain_time > 0) {
                    var angle = remain_time / this._totalTime * 360;
                    angle = 360 - angle;
                    for (var i = 0; i < 5; i++) {
                        var imgMask = this._viewUI["view_head" + i].img_mask;
                        imgMask.graphics.clear();
                        imgMask.graphics.drawPie(imgMask.width / 2, imgMask.height / 2, 200, angle - 90, 360 - 90, "");
                    }
                }
            };
            //洗牌之后
            ZjhMapPage.prototype.afterShuffleCards = function () {
                var _this = this;
                Laya.Tween.to(this._viewUI.view_xipai, { x: 820, y: 150, alpha: 0.05, rotation: -56, scaleX: 0.3, scaleY: 0.3 }, 500, null, Handler.create(this, function () {
                    _this._viewUI.view_paihe.cards.visible = true;
                    _this._viewUI.view_paihe.ani_chupai.play(0, false);
                    _this._viewUI.view_xipai.visible = false;
                }));
            };
            //继续游戏时需要影藏的东西
            ZjhMapPage.prototype.hiddenViews = function () {
                for (var index = 1; index < 5; index++) {
                    this._viewUI["view_player" + index].view_arrow.visible = false;
                    this._viewUI["view_player" + index].img_frame.visible = false;
                }
                for (var i = 0; i < 5; i++) {
                    this._viewUI["view_head" + i].img_frame.visible = false;
                    this._viewUI["view_head" + i].visible = false;
                    this._viewUI["box_opt" + i].visible = false;
                    this._viewUI["box_chip" + i].visible = false;
                    this._viewUI["view_pk" + i].visible = false;
                    this._viewUI["view_pk" + i].ani1.stop();
                    this._viewUI["view_head" + i].x = this._headPos[i][0];
                    this._viewUI["view_head" + i].y = this._headPos[i][1];
                    this._viewUI["view_shu" + i].visible = false;
                    this._viewUI["view_shu" + i].ani1.stop();
                }
                this._viewUI.img_type.visible = false;
                this._viewUI.box_see.visible = false;
                this._viewUI.text_money.text = "0";
                this._viewUI.text_round.text = "0/20轮";
                this._viewUI.btn_giveup.visible = false;
                this._viewUI.btn_compare.visible = false;
                this._viewUI.btn_auto.visible = false;
                this._viewUI.btn_call.visible = false;
                this._viewUI.btn_add.visible = false;
                this._viewUI.view_win.visible = false;
                this._viewUI.btn_continue.visible = false;
                this._viewUI.view_compare.visible = false;
                this._viewUI.view_compare.view_player0.visible = false;
                this._viewUI.view_compare.view_player1.visible = false;
                this._viewUI.view_guzhu.visible = false;
                this._viewUI.img_menu.visible = false;
                this._viewUI.img_choose.visible = false;
                this._viewUI.img_xiqian.visible = false;
                this._viewUI.text_info.visible = false;
                this._viewUI.text_roomtype.visible = false;
                this._viewUI.text_maxchip.visible = false;
                this._viewUI.view_bipai1.visible = false;
                this._viewUI.view_effect0.visible = false;
                this._viewUI.view_effect1.visible = false;
                this._viewUI.view_pk.visible = false;
                this._viewUI.view_paixie.visible = false;
                this._viewUI.view_guzhu.ani1.stop();
                this._viewUI.view_win.ani1.stop();
                this._viewUI.view_compare.ani1.stop();
                this._viewUI.view_bipai1.ani1.stop();
                this._viewUI.view_compare.view_win0.ani1.stop();
                this._viewUI.view_compare.view_win1.ani1.stop();
                this._viewUI.view_effect0.ani1.stop();
                this._viewUI.view_effect1.ani1.stop();
                this._viewUI.view_paixie.ani1.stop();
                this._viewUI.view_paihe.cards.visible = false;
                this._viewUI.view_xipai.visible = false;
            };
            ZjhMapPage.prototype.resetData = function () {
                this._isAuto = false;
                this._isCompare = false;
                this._posList = [0, 0, 0];
                this._compareUnits = [];
                this._winnerPos = 0;
                this._totalChip = [];
                this._showCards = [];
                this._battleIndex = -1;
                this._settleGold = 0;
                this._xiQian = [];
                Laya.timer.clear(this, this.autoCall);
                this._viewUI.btn_auto.label = "自动跟注";
                this._isDeal = false;
                this._viewUI.btn_call.disabled = false;
                this._viewUI.btn_add.disabled = false;
                this._viewUI.view_xipai.scale(1, 1);
                this._viewUI.view_xipai.x = 480;
                this._viewUI.view_xipai.y = 200;
                this._viewUI.view_xipai.rotation = 0;
                this._viewUI.view_xipai.alpha = 1;
                if (this._zjhStory) {
                    this._zjhStory.isDealCard = false;
                    this._zjhStory.checkReconect = false;
                }
                this._isGiveUp = false;
            };
            ZjhMapPage.prototype.clearListen = function () {
                this._viewUI.view_compare.ani1.off(LEvent.COMPLETE, this, this.compareAniStop);
                this._viewUI.view_bipai1.ani1.off(LEvent.COMPLETE, this, this.bipai1AniStop);
                this._viewUI.view_compare.view_win0.ani1.off(LEvent.COMPLETE, this, this.headPlace);
                this._viewUI.view_compare.view_win1.ani1.off(LEvent.COMPLETE, this, this.headPlace);
                this._viewUI.view_effect0.ani1.off(LEvent.COMPLETE, this, this.updateViewWin);
                this._viewUI.view_effect1.ani1.off(LEvent.COMPLETE, this, this.updateViewWin);
                this._viewUI.view_xipai.ani_xipai.off(LEvent.COMPLETE, this, this.afterShuffleCards);
                this._game.sceneObjectMgr.off(ZjhMapInfo.EVENT_ZJH_STATUS_CHECK, this, this.updateMapInfo);
                this._game.sceneObjectMgr.off(ZjhMapInfo.EVENT_ZJH_BATTLE_CHECK, this, this.updateBattledInfo);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                Laya.Tween.clearAll(this);
                Laya.timer.clearAll(this);
            };
            ZjhMapPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_menu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_add.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_closen.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.box_see.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_giveup.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_compare.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_call.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_auto.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_continue.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_rules.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_cardtype.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_set.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_record.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_xiqian.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.view_compare.ani1.off(LEvent.COMPLETE, this, this.compareAniStop);
                    this._viewUI.view_bipai1.ani1.off(LEvent.COMPLETE, this, this.bipai1AniStop);
                    this._viewUI.view_compare.view_win0.ani1.off(LEvent.COMPLETE, this, this.headPlace);
                    this._viewUI.view_compare.view_win1.ani1.off(LEvent.COMPLETE, this, this.headPlace);
                    this._viewUI.view_effect0.ani1.off(LEvent.COMPLETE, this, this.updateViewWin);
                    this._viewUI.view_effect1.ani1.off(LEvent.COMPLETE, this, this.updateViewWin);
                    this._viewUI.view_xipai.ani_xipai.off(LEvent.COMPLETE, this, this.afterShuffleCards);
                    this._game.sceneObjectMgr.off(ZjhMapInfo.EVENT_ZJH_STATUS_CHECK, this, this.updateMapInfo);
                    this._game.sceneObjectMgr.off(ZjhMapInfo.EVENT_ZJH_BATTLE_CHECK, this, this.updateBattledInfo);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMap);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                    this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                    // this._viewUI.view_compare.off(LEvent.CLICK, this, () => { });
                    // this._viewUI.view_guzhu.off(LEvent.CLICK, this, () => { });
                    this._viewUI.view_xipai.ani_xipai.off(LEvent.COMPLETE, this, this.afterShuffleCards);
                    for (var i = 0; i < 4; i++) {
                        this._viewUI["btn_chip" + i] && this._viewUI["btn_chip" + i].off(LEvent.CLICK, this, this.onBtnChipClick, [i]);
                        this._viewUI["view_player" + (i + 1).toString()] && this._viewUI["view_player" + (i + 1).toString()].off(LEvent.CLICK, this, this.onBtnCompareClick, [i]);
                    }
                    for (var index = 0; index < 5; index++) {
                        this._viewUI["view_shu" + index] && this._viewUI["view_shu" + index].ani1.off(LEvent.COMPLETE, this, this.stopGuZhuYiZhiLose, [index]);
                    }
                    if (this._valueClip) {
                        this._valueClip.removeSelf();
                        this._valueClip.destroy(true);
                        this._valueClip = null;
                    }
                    this.clearListen();
                    this.clearXiQian();
                    this._zjhMgr.clear();
                    this._zjhStory.clear();
                    this._totalChip = [];
                    if (this._zjhMgr) {
                        this._zjhMgr.off(ZjhMgr.EVENT_CHECK, this, this.onAfterDealCards);
                        this._zjhMgr.off(ZjhMgr.XIQIAN_END, this, this.addMoneyXiQian);
                    }
                    this._game.stopMusic();
                    this._game.stopAllSound();
                    Laya.Tween.clearAll(this);
                    Laya.timer.clearAll(this);
                    this._mapInfo = null;
                }
                _super.prototype.close.call(this);
            };
            return ZjhMapPage;
        }(game.gui.base.Page));
        page_1.ZjhMapPage = ZjhMapPage;
    })(page = gamezjh.page || (gamezjh.page = {}));
})(gamezjh || (gamezjh = {}));
//# sourceMappingURL=ZjhMapPage.js.map