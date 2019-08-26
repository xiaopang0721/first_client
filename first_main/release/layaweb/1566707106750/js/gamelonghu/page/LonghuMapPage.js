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
* 牛牛
*/
var gamelonghu;
(function (gamelonghu) {
    var page;
    (function (page_1) {
        var TextFieldU = utils.TextFieldU;
        var CARDS_TOTAL_COUNT = 416; // 8副牌总数
        var PLAYER_LEAST_MONEY = 20; // 投注最少携带金额
        var ALL_GAME_ROOM_CONFIG_ID = [81, 82, 83, 84]; // 可进入的maplv
        var ROOM_CHIP_CONFIG = {
            "81": [1, 10, 50, 100, 1000],
            "82": [10, 50, 100, 500, 1000],
            "83": [50, 100, 500, 1000, 5000],
            "84": [100, 500, 1000, 5000, 10000],
        };
        var ROBOT_NUM_CONFIG = {
            "81": [100, 150, 200, 300],
            "82": [70, 100, 130, 200],
            "83": [30, 60, 100, 150],
            "84": [10, 30, 60, 90],
        };
        var LonghuMapPage = /** @class */ (function (_super) {
            __extends(LonghuMapPage, _super);
            function LonghuMapPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._mainPlayerBenefit = 0; //玩家收益
                _this._lottery = ""; //中奖区域
                _this._areaList = []; //下注区域UI集合
                _this._areaKuangUIList = []; //下注区域边框集合
                _this._txtTotalUIList = []; //总下注文本UI集合
                _this._txtBetUIList = []; //玩家下注文本UI集合
                _this._seatUIList = []; //座位UI集合
                _this._chipUIList = []; //筹码UI集合
                _this._chipGuangUIList = []; //筹码光效UI集合
                _this._chipArr = []; //筹码大小类型
                _this._cardsArr = []; //开牌信息集合
                _this._clipList = []; //飘字集合
                _this._chipSortScore = 0; //筹码层级
                _this._unitSeated = []; //入座精灵信息集合
                _this._chipTotalList = [[], [], [], [], [], [], [], [], [], [], []]; //区域绘制筹码集合
                _this._betTotalList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //区域下注总额集合（所有玩家）
                _this._betMainList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //区域下注总额集合（主玩家）
                _this._rebetList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //重复下注列表(11个区域)
                _this._mainHeadPos = [[0, 0], [0, -10]]; //主玩家座位头像初始位置
                _this._headStartPos = [[0, 0], [0, 158], [0, 316], [0, 0], [0, 158], [0, 316]]; //座位头像初始位置
                _this._headEndPos = [[10, 0], [10, 158], [10, 316], [-10, 0], [-10, 158], [-10, 316]]; //座位头像移动位置
                _this._isFirstOpen = false;
                _this._betAllTotal = 0;
                _this._betMainTotal = 0;
                _this._curTurnNum = 0; //当前回合数
                _this._diff = 500;
                _this._timeList = {};
                _this._firstList = {};
                _this._timeList1 = {};
                _this._firstList1 = {};
                _this._nameStrInfo = ["xs", "px", "gsy", "gg", "cs", "tdg"];
                //战斗结构体更新
                _this._battleIndex = -1;
                _this.areaName = ["和", "龙", "虎", "龙黑", "龙红", "龙梅", "龙方", "虎黑", "虎红", "虎梅", "虎方"];
                //龙虎斗区域下注
                _this._betWait = false;
                _this._isNeedDuang = false;
                _this._delta = 1000;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    Path_game_longhu.atlas_game_ui + "longhu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "tuichu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/suiji.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/kaipai.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            LonghuMapPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.longhu.LongHuUI');
                this.addChild(this._viewUI);
                this.initView();
                if (!this._pageHandle) {
                    this._pageHandle = PageHandle.Get("LonghuMapPage"); //额外界面控制器
                }
                this._longhuStory = this._game.sceneObjectMgr.story;
                if (this._longhuStory) {
                    this._longhuMgr = this._longhuStory.longhuMgr;
                    if (this._longhuMgr) {
                        this._longhuMgr.on(LonghuMgr.DEAL_OVER, this, this.onUpdateAniDeal);
                        this._longhuMgr.on(LonghuMgr.SHOW_OVER, this, this.onUpdateResult);
                    }
                    this.onUpdateMapInfo();
                }
                this._viewUI.mouseThrough = true;
                this._game.playMusic(Path_game_longhu.music_longhu + "lh_bgm.mp3");
            };
            // 页面打开时执行函数
            LonghuMapPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_spread.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rule.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chongzhi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zhanji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_repeat.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_playerList.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_road.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.long_win.aniWin.on(LEvent.COMPLETE, this, this.onAniPlayOver);
                this._viewUI.hu_win.aniWin.on(LEvent.COMPLETE, this, this.onAniPlayOver);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(LonghuMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
                this._game.sceneObjectMgr.on(LonghuMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.on(LonghuMapInfo.EVENT_GAME_TURN_CHANGE, this, this.onUpdateTurn); //回合数变化
                this._game.sceneObjectMgr.on(LonghuMapInfo.EVENT_GAME_NO, this, this.onUpdateGameNo); //牌局号
                this._game.sceneObjectMgr.on(LonghuMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown); //倒计时时间戳更新
                this._game.sceneObjectMgr.on(LonghuMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord); //游戏记录更新
                this._game.sceneObjectMgr.on(LonghuMapInfo.EVENT_SEATED_LIST, this, this.onUpdateSeatedList); //入座列表更新
                this._game.sceneObjectMgr.on(LonghuMapInfo.EVENT_CARD_POOL_CHANGE, this, this.onUpdateCardPool); //牌库数量变化
                this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this._viewUI.kaipai_long.ani_kaipai.on(LEvent.COMPLETE, this, this.onSeeCardOver, [1]);
                this._viewUI.kaipai_hu.ani_kaipai.on(LEvent.COMPLETE, this, this.onSeeCardOver, [2]);
                this.onUpdateUnitOffline();
                this.onUpdateSeatedList();
                this.initRoomConfig();
                this.onUpdateCountDown();
                this.onUpdateBattle();
                this.onUpdateStatus();
                this.onUpdateCardPool();
                this.onUpdateRecord(1);
                this.onUpdateTurn();
                this.updateOnline();
                this.onUpdateChipGrey();
            };
            //帧间隔心跳
            LonghuMapPage.prototype.deltaUpdate = function () {
                var bool = this._curStatus == 3 /* PLAY_STATUS_BET */ || this._curStatus == 6 /* PLAY_STATUS_SETTLE */;
                if (!bool)
                    return;
                var curTime = this._game.sync.serverTimeBys;
                var time = Math.floor(this._countDown - curTime);
                this._viewUI.box_time.ani1.gotoAndStop(24);
                this._viewUI.box_time.visible = time > 0;
                this._viewUI.box_time.txt_time.text = time.toString();
                if (this._curStatus == 3 /* PLAY_STATUS_BET */) {
                    if (time <= 3 && !this._viewUI.box_time.ani1.isPlaying) {
                        this._viewUI.box_time.ani1.play(1, true);
                    }
                    if (time > 3) {
                        this._viewUI.box_time.ani1.gotoAndStop(24);
                    }
                    if (time == 1) {
                        this._game.playSound(PathGameTongyong.music_tongyong + "time2.mp3", false);
                    }
                    else if (time == 2 || time == 3) {
                        this._game.playSound(PathGameTongyong.music_tongyong + "time1.mp3", false);
                    }
                }
            };
            //玩家进来了
            LonghuMapPage.prototype.onUnitAdd = function (u) {
                this.onUpdateUnit();
            };
            //玩家出去了
            LonghuMapPage.prototype.onUnitRemove = function (u) {
                this.onUpdateUnit();
            };
            LonghuMapPage.prototype.onUpdateAniDeal = function () {
                this._viewUI.ani_deal.ani1.stop();
                this._viewUI.ani_deal.visible = false;
            };
            LonghuMapPage.prototype.onAniPlayOver = function () {
                this._viewUI.long_win.visible = false;
                this._viewUI.hu_win.visible = false;
            };
            LonghuMapPage.prototype.onUpdateResult = function () {
                var _this = this;
                if (this._curStatus >= 7 /* PLAY_STATUS_SHOW_INFO */)
                    return;
                if (!this._longhuMgr.allCards.length)
                    return;
                var longCard = this._longhuMgr.allCards[1];
                var huCard = this._longhuMgr.allCards[2];
                if (longCard.GetCardVal() == 0 || huCard.GetCardVal() == 0)
                    return;
                //胜利动画
                var result = [];
                if (longCard.GetCardVal() > huCard.GetCardVal()) {
                    this._viewUI.long_win.visible = true;
                    this._viewUI.long_win.aniWin.play(0, false);
                    Laya.timer.once(300, this, function () {
                        _this._game.playSound(Path_game_longhu.music_longhu + "long_win.mp3", false);
                    });
                    result.push(1);
                }
                else if (longCard.GetCardVal() < huCard.GetCardVal()) {
                    this._viewUI.hu_win.visible = true;
                    this._viewUI.hu_win.aniWin.play(0, false);
                    Laya.timer.once(300, this, function () {
                        _this._game.playSound(Path_game_longhu.music_longhu + "hu_win.mp3", false);
                    });
                    result.push(2);
                }
                else {
                    Laya.timer.once(300, this, function () {
                        _this._game.playSound(Path_game_longhu.music_longhu + "he.mp3", false);
                    });
                    result.push(0);
                }
                if (this._longhuMapInfo && this._curTurnNum <= 30) {
                    result.push(3 - longCard.GetCardColor() + 3);
                    result.push(3 - huCard.GetCardColor() + 7);
                }
                var _loop_1 = function (i) {
                    Laya.timer.once(600, this_1, function () {
                        _this.kuangShanShuo(result[i]);
                    });
                };
                var this_1 = this;
                for (var i = 0; i < result.length; i++) {
                    _loop_1(i);
                }
            };
            LonghuMapPage.prototype.kuangShanShuo = function (index) {
                var _this = this;
                this._areaKuangUIList[index].visible = true;
                this._areaKuangUIList[index].ani1.play(0, true);
                Laya.timer.once(3000, this, function () {
                    _this._areaKuangUIList[index].ani1.stop();
                    _this._areaKuangUIList[index].visible = false;
                });
            };
            LonghuMapPage.prototype.onUpdateMapInfo = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._longhuMapInfo = mapinfo;
                if (mapinfo) {
                    this.initRoomConfig();
                    this.onUpdateCountDown();
                    this.onUpdateBattle();
                    this.onUpdateStatus();
                    // this.updateBanker();
                    this.onUpdateCardPool();
                    this.onUpdateRecord(1);
                    this.onUpdateTurn();
                    this.updateOnline();
                    this.onUpdateChipGrey();
                    if (!this._longhuMgr.isReConnect) {
                        this._viewUI.ani_deal.ani1.stop();
                        this._viewUI.ani_deal.visible = false;
                    }
                }
            };
            LonghuMapPage.prototype.onUpdateUnitOffline = function () {
                var mainPlayer = this._game.sceneObjectMgr.mainPlayer;
                if (!mainPlayer)
                    return;
                var mainPlayerInfo = mainPlayer.playerInfo;
                this._viewUI.main_player.txt_name.text = getMainPlayerName(mainPlayerInfo.nickname);
                if (mainPlayerInfo.headimg) {
                    this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + mainPlayerInfo.headimg + ".png";
                }
                var money = EnumToString.getPointBackNum(mainPlayerInfo.money, 2);
                this._viewUI.main_player.txt_money.text = money.toString();
                this._viewUI.main_player.img_qifu.visible = mainPlayer.GetQiFuEndTime(mainPlayerInfo.qifu_type - 1) > this._game.sync.serverTimeBys;
                if (this._viewUI.main_player.img_qifu.visible) {
                    this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[mainPlayerInfo.qifu_type - 1] + ".png";
                }
                this._viewUI.main_player.img_txk.visible = mainPlayerInfo.vip_level > 0;
                if (this._viewUI.main_player.img_txk.visible) {
                    this._viewUI.main_player.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + mainPlayerInfo.vip_level + ".png";
                }
            };
            LonghuMapPage.prototype.onUpdateUnit = function (qifu_index) {
                var _this = this;
                if (!this._longhuMapInfo)
                    return;
                //主玩家的座位
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (mainUnit) {
                    var headImg = mainUnit.GetHeadImg();
                    this._viewUI.main_player.txt_name.text = getMainPlayerName(mainUnit.GetName());
                    var money = EnumToString.getPointBackNum(mainUnit.GetMoney(), 2);
                    this._viewUI.main_player.txt_money.text = money.toString();
                    var mainIdx = mainUnit.GetIndex();
                    this._viewUI.main_player.img_txk.visible = mainUnit.GetVipLevel() > 0;
                    if (this._viewUI.main_player.img_txk.visible) {
                        this._viewUI.main_player.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + mainUnit.GetVipLevel() + ".png";
                    }
                    //祈福成功 头像上就有动画
                    if (qifu_index && mainIdx == qifu_index) {
                        this._viewUI.main_player.qifu_type.visible = true;
                        this._viewUI.main_player.qifu_type.skin = this._qifuTypeImgUrl;
                        this.playTween(this._viewUI.main_player.qifu_type, qifu_index);
                    }
                    //时间戳变化 才加上祈福标志
                    if (mainUnit.GetQFEndTime(mainUnit.GetQiFuType() - 1) > this._game.sync.serverTimeBys) {
                        if (qifu_index && mainIdx == qifu_index) {
                            Laya.timer.once(2500, this, function () {
                                _this._viewUI.main_player.img_qifu.visible = true;
                                if (mainUnit.GetQiFuType()) {
                                    var qifuImgUrl = _this._nameStrInfo[mainUnit.GetQiFuType() - 1];
                                    _this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + qifuImgUrl + ".png";
                                }
                            });
                        }
                        else {
                            this._viewUI.main_player.img_qifu.visible = true;
                            if (mainUnit.GetQiFuType()) {
                                var qifuImgUrl = this._nameStrInfo[mainUnit.GetQiFuType() - 1];
                                this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + qifuImgUrl + ".png";
                            }
                        }
                    }
                    else {
                        this._viewUI.main_player.img_qifu.visible = false;
                        if (headImg) {
                            this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + headImg + ".png";
                        }
                    }
                }
                this.onUpdateChipGrey();
                this.onUpdateSeatedList(qifu_index);
            };
            LonghuMapPage.prototype.playTween = function (img, index, isTween) {
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
            LonghuMapPage.prototype.playTween1 = function (img, index, isTween) {
                if (!img)
                    return;
                if (!this._timeList1[index]) {
                    this._timeList1[index] = 0;
                }
                if (this._timeList1[index] >= 2500) {
                    this._timeList1[index] = 0;
                    this._firstList1[index] = 0;
                    img.visible = false;
                    return;
                }
                Laya.Tween.to(img, { alpha: isTween ? 1 : 0.2 }, this._diff, Laya.Ease.linearNone, Handler.create(this, this.playTween1, [img, index, !isTween]), this._firstList1[index] ? this._diff : 0);
                this._timeList1[index] += this._diff;
                this._firstList1[index] = 1;
            };
            LonghuMapPage.prototype.onOptHandler = function (optcode, msg) {
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
            LonghuMapPage.prototype.updateOnline = function () {
                if (!this._robotConfig)
                    return;
                var onlineNum = 0;
                for (var key in this._game.sceneObjectMgr.unitDic) {
                    if (this._game.sceneObjectMgr.unitDic.hasOwnProperty(key)) {
                        var unit = this._game.sceneObjectMgr.unitDic[key];
                        if (unit) {
                            onlineNum++;
                        }
                    }
                }
                var curHour = Sync.getHours(this._game.sync.serverTimeBys * 1000); //当前几点钟
                var index = curHour >= 1 && curHour < 7 ? 0 : curHour >= 7 && curHour < 13 ? 1 : curHour >= 13 && curHour < 19 ? 2 : 3;
                var innerHtml = StringU.substitute("在线<span style='color:#18ff00'>{0}</span>人", onlineNum + this._robotConfig[index]);
                this._htmlText.innerHTML = innerHtml;
            };
            LonghuMapPage.prototype.updateMoney = function () {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (mainUnit) {
                    var money = EnumToString.getPointBackNum(mainUnit.GetMoney(), 2);
                    this._viewUI.main_player.txt_money.text = money.toString();
                }
            };
            LonghuMapPage.prototype.onSeeCardOver = function (index) {
                if (this._longhuMgr.isReConnect)
                    return;
                if (this._cardsArr.length < 2)
                    return;
                if (index == 1) {
                    this._viewUI.kaipai_long.ani_kaipai.stop();
                    this._viewUI.kaipai_long.visible = false;
                    this._game.playSound(StringU.substitute(Path_game_longhu.music_longhu + "dian{0}.mp3", this._cardsArr[0].GetCardVal()), false);
                }
                else {
                    this._viewUI.kaipai_hu.ani_kaipai.stop();
                    this._viewUI.kaipai_hu.visible = false;
                    this._game.playSound(StringU.substitute(Path_game_longhu.music_longhu + "dian{0}.mp3", this._cardsArr[1].GetCardVal()), false);
                }
            };
            LonghuMapPage.prototype.onUpdateBattle = function () {
                var _this = this;
                if (!this._longhuMapInfo)
                    return;
                var battleInfoMgr = this._longhuMapInfo.battleInfoMgr;
                if (!battleInfoMgr)
                    return;
                var _loop_2 = function (i) {
                    var info = battleInfoMgr.info[i];
                    if (info instanceof gamecomponent.object.BattleInfoDeal) {
                        if (this_2._battleIndex < i) {
                            this_2._battleIndex = i;
                            this_2._cardsArr = this_2._cardsArr.concat(this_2._longhuMgr.initCard(info.Cards));
                            if (!this_2._longhuMgr.isReConnect) { //不是断线重连，搓牌
                                var cardVal_1 = info.Cards[0];
                                var seatIndex = info.SeatIndex;
                                if (seatIndex == 2) {
                                    this_2._viewUI.kaipai_long.visible = true;
                                    this_2._viewUI.kaipai_long.ani_kaipai.play(0, false);
                                    this_2._viewUI.kaipai_long.card.skin = StringU.substitute(PathGameTongyong.ui_tongyong_pai + "{0}.png", cardVal_1);
                                    this_2._longhuMgr.yincang(1);
                                }
                                else {
                                    Laya.timer.once(1500, this_2, function () {
                                        _this._viewUI.kaipai_hu.visible = true;
                                        _this._viewUI.kaipai_hu.ani_kaipai.play(0, false);
                                        _this._viewUI.kaipai_hu.card.skin = StringU.substitute(PathGameTongyong.ui_tongyong_pai + "{0}.png", cardVal_1);
                                        _this._longhuMgr.yincang(2);
                                    });
                                }
                            }
                        }
                    }
                    if (info instanceof gamecomponent.object.BattleInfoAreaBet) {
                        if (this_2._battleIndex < i) {
                            if (!this_2._game.sceneObjectMgr.mainUnit)
                                return { value: void 0 };
                            this_2._battleIndex = i;
                            this_2.onBattleBet(info, i);
                        }
                    }
                    if (info instanceof gamecomponent.object.BattleInfoSettle) {
                        if (this_2._battleIndex < i) {
                            if (!this_2._game.sceneObjectMgr.mainUnit)
                                return { value: void 0 };
                            this_2._battleIndex = i;
                            this_2.onBattleSettle(info);
                        }
                    }
                    if (info instanceof gamecomponent.object.BattleLogCardsResult) {
                        if (this_2._battleIndex < i) {
                            if (!this_2._game.sceneObjectMgr.mainUnit)
                                return { value: void 0 };
                            this_2._battleIndex = i;
                            this_2.onBattleResult(info);
                        }
                    }
                };
                var this_2 = this;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var state_1 = _loop_2(i);
                    if (typeof state_1 === "object")
                        return state_1.value;
                }
                if (this._longhuMgr.isReConnect && this._curStatus == 7 /* PLAY_STATUS_SHOW_INFO */ && this._betAllTotal > 0) {
                    this.showSettleInfo();
                }
            };
            //战斗日志来更新桌面上的筹码
            LonghuMapPage.prototype.onBattleBet = function (info, index) {
                //主玩家的座位
                var mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var startIdx;
                var targetIdx;
                var isMainPlayer = info.SeatIndex == mainIdx;
                if (isMainPlayer) { //主玩家
                    startIdx = 0;
                    this.moveHead(this._viewUI.main_player, this._mainHeadPos[0][0], this._mainHeadPos[0][1], this._mainHeadPos[1][0], this._mainHeadPos[1][1]);
                }
                else { //其他玩家
                    startIdx = 1;
                    for (var i = 0; i < this._unitSeated.length; i++) {
                        var unitIndex = this._unitSeated[i][0];
                        var unit = this._game.sceneObjectMgr.getUnitByIdx(unitIndex);
                        if (unit && info.SeatIndex == unitIndex) {
                            this.moveHead(this._seatUIList[i], this._headStartPos[i][0], this._headStartPos[i][1], this._headEndPos[i][0], this._headEndPos[i][1]);
                            startIdx = 3 + i;
                        }
                    }
                    if (startIdx == 1) {
                        this.moveHead(this._viewUI.btn_playerList, 70, 657, 80, 647);
                    }
                }
                targetIdx = info.BetIndex;
                var type = this._chipArr.indexOf(info.BetVal) + 1;
                this.createChip(startIdx, targetIdx, type, info.BetVal, index, info.SeatIndex);
                this.updateChipOnTable(targetIdx - 1, info.BetVal, isMainPlayer);
            };
            //头像出筹码动态效果
            LonghuMapPage.prototype.moveHead = function (view, startX, startY, endX, endY) {
                Laya.Tween.clearAll(view);
                Laya.Tween.to(view, { x: endX, y: endY }, 150, null, Handler.create(this, function () {
                    Laya.Tween.to(view, { x: startX, y: startY }, 150);
                }));
            };
            LonghuMapPage.prototype.updateChipOnTable = function (index, bet, isMainPlayer) {
                if (isMainPlayer) {
                    this._betMainList[index] += bet;
                    this._betMainTotal += bet;
                }
                this._betTotalList[index] += bet;
                this._betAllTotal += bet;
                this.updateBetNum();
            };
            LonghuMapPage.prototype.updateBetNum = function () {
                for (var i = 0; i < 11; i++) {
                    if (i < 3) {
                        this._htmlTextArr[i].innerHTML = StringU.substitute("<span style='color:#ffd200'>{0}</span><span style='color:#ffffff'>/{1}</span>", this._betMainList[i], this._betTotalList[i]);
                    }
                    else {
                        this._txtTotalUIList[i].text = this._betTotalList[i];
                    }
                    if (i > 2) {
                        this._txtBetUIList[i - 3].text = this._betMainList[i];
                    }
                }
            };
            //创建筹码
            LonghuMapPage.prototype.createChip = function (startIdx, targetIdx, type, value, index, unitIndex) {
                var _this = this;
                var chip = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CHIP_MARK, LonghuChip);
                chip.setData(startIdx, targetIdx, type, value, index, unitIndex);
                this._chipTotalList[targetIdx - 1].push(chip);
                if (this._longhuMgr.isReConnect && this._curStatus != 3 /* PLAY_STATUS_BET */) {
                    chip.drawChip();
                }
                else {
                    Laya.timer.once(350, this, function () {
                        chip.sendChip();
                        _this._game.playSound(Path_game_longhu.music_longhu + "chouma.mp3", false);
                    });
                }
                this._chipSortScore = index; //存下来最后一个筹码层级
            };
            //庄家飞筹码去输的区域
            LonghuMapPage.prototype.bankerFlyChip = function (startIdx, targetIdx, type, value, index, unitIndex) {
                var chip = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CHIP_MARK, LonghuChip);
                chip.setData(startIdx, targetIdx, type, value, index, unitIndex);
                this._chipTotalList[targetIdx - 1].push(chip);
                Laya.timer.once(350, this, function () {
                    chip.sendChip();
                });
            };
            LonghuMapPage.prototype.onBattleSettle = function (info) {
                if (this._game.sceneObjectMgr.mainUnit.GetIndex() == info.SeatIndex) {
                    this._mainPlayerBenefit = parseFloat(info.SettleVal);
                }
                if (info.SettleVal == 0)
                    return;
                this.addMoneyClip(info.SeatIndex, info.SettleVal);
            };
            LonghuMapPage.prototype.onBattleResult = function (info) {
                for (var i = 0; i < info.Results.length; i++) {
                    if (this._curTurnNum > 30 && info.Results[i] > 3)
                        continue;
                    if (!this._lottery)
                        this._lottery = this.areaName[info.Results[i] - 1];
                    else
                        this._lottery += " , " + this.areaName[info.Results[i] - 1];
                }
            };
            //结算飘筹码
            LonghuMapPage.prototype.flyChipEffect = function () {
                var _this = this;
                if (this._cardsArr && !this._cardsArr.length)
                    return;
                if (this._curStatus != 6 /* PLAY_STATUS_SETTLE */)
                    return;
                var resultList = [0, 0, 0, 0, 0, 0, 0, 0];
                var longCard = this._cardsArr[0];
                var huCard = this._cardsArr[1];
                var isHeJu = false;
                if (longCard.GetCardVal() > huCard.GetCardVal()) {
                    resultList[0] = 1;
                    resultList[2] = 1;
                    if (this._betTotalList[1] <= 0)
                        resultList[1] = 1;
                }
                else if (longCard.GetCardVal() < huCard.GetCardVal()) {
                    resultList[0] = 1;
                    resultList[1] = 1;
                    if (this._betTotalList[2] <= 0)
                        resultList[2] = 1;
                }
                else {
                    isHeJu = true;
                    if (this._betTotalList[0] <= 0)
                        resultList[0] = 1;
                }
                for (var i = 0; i < 4; i++) {
                    if (longCard.GetCardColor() != i) {
                        resultList[3 - i + 3] = 1;
                    }
                    else {
                        if (this._betTotalList[3 - i + 3] <= 0)
                            resultList[3 - i + 3] = 1;
                    }
                    if (huCard.GetCardColor() != i) {
                        resultList[3 - i + 7] = 1;
                    }
                    else {
                        if (this._betTotalList[3 - i + 7] <= 0)
                            resultList[3 - i + 7] = 1;
                    }
                }
                var _loop_3 = function (i) {
                    var chipArr = this_3._chipTotalList[i] || [];
                    if (resultList[i] == 1) {
                        this_3._game.playSound(Path_game_longhu.music_longhu + "piaoqian.mp3", false);
                        for (var j = 0; j < chipArr.length; j++) {
                            var chip = chipArr[j];
                            chip.flyChip(2, false, j, this_3._game); //庄家先收筹码
                        }
                    }
                    else {
                        if (!(isHeJu && (i == 1 || i == 2))) {
                            Laya.timer.once(800, this_3, function () {
                                _this._game.playSound(Path_game_longhu.music_longhu + "piaoqian.mp3", false);
                                for (var j = 0; j < 20; j++) {
                                    if (i > 2 && _this._curTurnNum > 30) {
                                        continue;
                                    }
                                    var ranType = MathU.randomRange(1, 5);
                                    var ranVal = _this._chipArr[ranType - 1];
                                    _this._chipSortScore++;
                                    _this.bankerFlyChip(2, i + 1, ranType, ranVal, _this._chipSortScore, -1);
                                }
                            });
                        }
                        Laya.timer.once(2000, this_3, function () {
                            _this._game.playSound(Path_game_longhu.music_longhu + "piaoqian.mp3", false);
                            for (var j = 0; j < chipArr.length; j++) {
                                var chip = chipArr[j];
                                var mainIndex = _this._game.sceneObjectMgr.mainUnit.GetIndex();
                                if (chip._seatIndex == mainIndex) {
                                    chip.flyChip(0, false, j, _this._game); //主玩家收筹码
                                }
                                else {
                                    var isSeat = false;
                                    for (var k = 0; k < _this._unitSeated.length; k++) {
                                        var seatInfo = _this._unitSeated[k];
                                        if (seatInfo && seatInfo[0] == chip._seatIndex) {
                                            chip.flyChip(3 + k, false, j, _this._game); //入座玩家收筹码
                                            isSeat = true;
                                            break;
                                        }
                                    }
                                    if (!isSeat) {
                                        chip.flyChip(1, false, j, _this._game); //其他玩家收筹码
                                    }
                                }
                            }
                        });
                    }
                };
                var this_3 = this;
                for (var i = 0; i < this._chipTotalList.length; i++) {
                    _loop_3(i);
                }
            };
            //金币变化 飘字clip
            LonghuMapPage.prototype.addMoneyClip = function (index, value) {
                var valueClip = value >= 0 ? new LonghuClip(LonghuClip.ADD_MONEY_FONT) : new LonghuClip(LonghuClip.SUB_MONEY_FONT);
                var preSkin = value >= 0 ? PathGameTongyong.ui_tongyong_general + "tu_jia.png" : PathGameTongyong.ui_tongyong_general + "tu_jian.png";
                valueClip.scale(0.8, 0.8);
                valueClip.anchorX = 0.5;
                valueClip.setText(Math.abs(value), true, false, preSkin);
                var playerIcon;
                if (index == this._game.sceneObjectMgr.mainUnit.GetIndex()) {
                    playerIcon = this._viewUI.main_player;
                }
                else {
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(index);
                    if (!unit)
                        return;
                    var seatIndex = unit.GetSeat();
                    var bool = false;
                    for (var i = 0; i < this._unitSeated.length; i++) {
                        var unitIndex = this._unitSeated[i][0];
                        if (index == unitIndex) {
                            bool = true;
                        }
                    }
                    if (!seatIndex)
                        return;
                    if (!bool)
                        return;
                    playerIcon = this._seatUIList[seatIndex - 1];
                }
                valueClip.x = playerIcon.clip_money.x;
                valueClip.y = playerIcon.clip_money.y;
                playerIcon.clip_money.parent.addChild(valueClip);
                this._clipList.push(valueClip);
                playerIcon.clip_money.visible = false;
                Laya.Tween.clearAll(valueClip);
                Laya.Tween.to(valueClip, { y: valueClip.y - 25 }, 1500);
            };
            //清理飘字clip
            LonghuMapPage.prototype.clearClips = function () {
                if (this._clipList && this._clipList.length) {
                    for (var i = 0; i < this._clipList.length; i++) {
                        var clip = this._clipList[i];
                        clip.removeSelf();
                        clip.destroy(true);
                        clip = null;
                    }
                }
                this._clipList = [];
            };
            //更新地图状态
            LonghuMapPage.prototype.onUpdateStatus = function () {
                var _this = this;
                if (!this._longhuMapInfo)
                    return;
                this.initRoomConfig();
                var mapStatus = this._longhuMapInfo.GetMapState();
                if (this._curStatus == mapStatus)
                    return;
                this._curStatus = mapStatus;
                this._viewUI.btn_repeat.disabled = this._curStatus != 3 /* PLAY_STATUS_BET */;
                switch (this._curStatus) {
                    case 0 /* PLAY_STATUS_NONE */: // 准备阶段
                        this._viewUI.txt_status.index = 1;
                        this.resetAll();
                        break;
                    case 1 /* PLAY_STATUS_GAMESTART */: // 游戏开始
                        this._viewUI.txt_status.index = 0;
                        this.resetAll();
                        this.updateOnline();
                        this._pageHandle.pushOpen({ id: page_1.LonghuPageDef.PAGE_LONGHU_VS, parent: this._game.uiRoot.HUD });
                        this._game.playSound(Path_game_longhu.music_longhu + "paoxiao.mp3", false);
                        if (this._curTurnNum == 1) {
                            this._viewUI.xipai.x = 640;
                            this._viewUI.xipai.y = 310;
                            this._viewUI.xipai.scaleX = 1;
                            this._viewUI.xipai.scaleY = 1;
                            this._viewUI.xipai.alpha = 1;
                            this._viewUI.xipai.rotation = 0;
                            this._viewUI.xipai.visible = true;
                            this._viewUI.xipai.ani_xipai.play(0, false);
                            Laya.timer.once(800, this, function () {
                                Laya.Tween.to(_this._viewUI.xipai, { x: 922, y: 144, alpha: 0, rotation: -30, scaleX: 0.35, scaleY: 0.35 }, 500);
                            });
                            Laya.timer.once(1300, this, function () {
                                _this._viewUI.paixieRight.cards.visible = true;
                                _this._viewUI.paixieRight.ani_chupai.play(0, false);
                            });
                        }
                        break;
                    case 2 /* PLAY_STATUS_PUSH_CARD */: // 发牌阶段
                        this._viewUI.txt_status.index = 4;
                        this._pageHandle.pushClose({ id: page_1.LonghuPageDef.PAGE_LONGHU_VS, parent: this._game.uiRoot.HUD });
                        // this._viewUI.ani_deal.visible = true;
                        // this._viewUI.ani_deal.ani1.play(0, true);
                        break;
                    case 3 /* PLAY_STATUS_BET */: // 下注阶段
                        if (this._longhuMgr.isReConnect && Math.floor(this._longhuMapInfo.GetCountDown() - this._game.sync.serverTimeBys) < 13) {
                            this.onUpdateSeatedList();
                            this._viewUI.txt_status.index = 3;
                            var bool = false;
                            for (var i = 0; i < this._rebetList.length; i++) {
                                if (this._rebetList[i] > 0) {
                                    bool = true;
                                    break;
                                }
                            }
                            this._viewUI.btn_repeat.disabled = !bool;
                            this._longhuMgr.isReConnect = false;
                        }
                        else {
                            this._pageHandle.pushOpen({ id: page_1.LonghuPageDef.PAGE_LONGHU_BEGIN, parent: this._game.uiRoot.HUD });
                            this._game.playSound(Path_game_longhu.music_longhu + "dingding_start.mp3");
                            this._game.playSound(Path_game_longhu.music_longhu + "xiazhu_start.mp3");
                            this.onUpdateSeatedList();
                            this._viewUI.txt_status.index = 3;
                            var bool = false;
                            for (var i = 0; i < this._rebetList.length; i++) {
                                if (this._rebetList[i] > 0) {
                                    bool = true;
                                    break;
                                }
                            }
                            this._viewUI.btn_repeat.disabled = !bool;
                        }
                        var _loop_4 = function (i) {
                            if (this_4._curTurnNum > 30 && i > 2)
                                return "continue";
                            this_4._areaKuangUIList[i].visible = true;
                            this_4._areaKuangUIList[i].ani1.play(0, true);
                            Laya.timer.once(1000, this_4, function () {
                                _this._areaKuangUIList[i].ani1.stop();
                                _this._areaKuangUIList[i].visible = false;
                            });
                        };
                        var this_4 = this;
                        for (var i = 0; i < this._areaKuangUIList.length; i++) {
                            _loop_4(i);
                        }
                        break;
                    case 4 /* PLAY_STATUS_STOP_BET */: // 停止下注阶段
                        this._pageHandle.pushClose({ id: page_1.LonghuPageDef.PAGE_LONGHU_BEGIN, parent: this._game.uiRoot.HUD });
                        this._pageHandle.pushOpen({ id: page_1.LonghuPageDef.PAGE_LONGHU_END, parent: this._game.uiRoot.HUD });
                        this._game.playSound(Path_game_longhu.music_longhu + "dingding_end.mp3");
                        this._game.playSound(Path_game_longhu.music_longhu + "xiazhu_end.mp3");
                        break;
                    case 5 /* PLAY_STATUS_SHOW_CARD */: // 开牌阶段
                        this._pageHandle.pushClose({ id: page_1.LonghuPageDef.PAGE_LONGHU_END, parent: this._game.uiRoot.HUD });
                        var betAllTotal = 0;
                        for (var i = 0; i < this._betMainList.length; i++) {
                            betAllTotal += this._betMainList[i];
                        }
                        if (betAllTotal > 0) {
                            for (var i = 0; i < this._betMainList.length; i++) {
                                this._rebetList[i] = this._betMainList[i];
                            }
                        }
                        this._viewUI.txt_status.index = 5;
                        break;
                    case 6 /* PLAY_STATUS_SETTLE */: // 结算阶段
                        this.onUpdateSeatedList();
                        this._viewUI.txt_status.index = 6;
                        this.flyChipEffect();
                        // this.updateMoney();
                        Laya.timer.once(1000, this, function () {
                            if (_this._mainPlayerBenefit >= 0) {
                                var rand = MathU.randomRange(1, 3);
                                _this._game.playSound(StringU.substitute(PathGameTongyong.music_tongyong + "win{0}.mp3", rand), true);
                            }
                            else if (_this._mainPlayerBenefit < 0) {
                                var rand = MathU.randomRange(1, 4);
                                _this._game.playSound(StringU.substitute(PathGameTongyong.music_tongyong + "lose{0}.mp3", rand), true);
                            }
                        });
                        break;
                    case 7 /* PLAY_STATUS_SHOW_INFO */: // 显示结算信息阶段
                        this._viewUI.txt_status.index = 6;
                        if (!this._longhuMgr.isReConnect) {
                            this.showSettleInfo();
                        }
                        if (this._viewUI.box_menu.y >= 0) { //每局重新开始把菜单收起来
                            this._viewUI.box_menu.y = -this._viewUI.box_menu.height;
                            this._viewUI.box_menu.visible = false;
                            this._viewUI.btn_spread.visible = true;
                        }
                        break;
                    case 8 /* PLAY_STATUS_RELAX */: // 休息阶段
                        this._pageHandle.pushClose({ id: TongyongPageDef.PAGE_TONGYONG_SETTLE, parent: this._game.uiRoot.HUD });
                        this._viewUI.txt_status.index = 1;
                        this.resetAll();
                        this.onUpdateCardPool(1);
                        break;
                }
                this._pageHandle.updatePageHandle(); //更新额外界面的开关状态
                this._pageHandle.reset(); //清空额外界面存储数组
            };
            //按钮缓动回调
            LonghuMapPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_spread:
                        this.showMenu(true);
                        break;
                    case this._viewUI.btn_playerList: //玩家列表
                        this._game.uiRoot.general.open(page_1.LonghuPageDef.PAGE_LONGHU_PLAYER_LIST);
                        break;
                    case this._viewUI.btn_road: //大路详情
                        this._game.uiRoot.general.open(page_1.LonghuPageDef.PAGE_LONGHU_ROAD);
                        break;
                    case this._viewUI.btn_qifu: //祈福
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU);
                        break;
                    case this._viewUI.btn_rule: //规则
                        this._game.uiRoot.general.open(page_1.LonghuPageDef.PAGE_LONGHU_RULE);
                        break;
                    case this._viewUI.btn_chongzhi: //充值
                        this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                        break;
                    case this._viewUI.btn_set: //设置
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING);
                        break;
                    case this._viewUI.btn_zhanji: //战绩
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, function (page) {
                            page.dataSource = page_1.LonghuPageDef.GAME_NAME;
                        });
                        break;
                    case this._viewUI.btn_repeat: //重复下注
                        this.repeatBet();
                        break;
                    case this._viewUI.btn_back: //返回
                        var totalBet = 0;
                        for (var i = 0; i < this._betMainList.length; i++) {
                            totalBet += this._betMainList[i];
                        }
                        if (totalBet && this._longhuMapInfo && this._longhuMapInfo.GetPlayState() == 1) {
                            this._game.showTips("游戏尚未结束，请先打完这局哦~");
                            return;
                        }
                        TongyongPageDef.ins.alertClose("longhu", this, this.onClickCancle);
                        break;
                    default:
                        break;
                }
            };
            LonghuMapPage.prototype.onClickCancle = function () {
                this._game.sceneObjectMgr.leaveStory(true);
                // this.close();
            };
            //重复下注
            LonghuMapPage.prototype.repeatBet = function () {
                var _this = this;
                if (this.showIsGuest())
                    return;
                if (this._betWait)
                    return; //投注间隔
                var betArr = [];
                var total = 0;
                for (var i = 0; i < this._rebetList.length; i++) {
                    if (this._rebetList[i] + this._betMainList[i] > this._betlimit) {
                        this._game.uiRoot.topUnder.showTips(StringU.substitute("投注点限红{0}哦~", this._betlimit));
                        return;
                    }
                }
                for (var i = 0; i < this._rebetList.length; i++) {
                    if (this._betMainList[1] > 0) { //龙
                        if (this._rebetList[2] > 0) {
                            this._game.uiRoot.topUnder.showTips("老板，龙虎不能同时下注哦~");
                            return;
                        }
                    }
                    if (this._betMainList[2] > 0) { //虎
                        if (this._rebetList[1] > 0) {
                            this._game.uiRoot.topUnder.showTips("老板，龙虎不能同时下注哦~");
                            return;
                        }
                    }
                    total += this._rebetList[i];
                }
                if (total > this._game.sceneObjectMgr.mainUnit.GetMoney()) {
                    this._game.uiRoot.topUnder.showTips("老板,您的金币不够重复下注啦~");
                    return;
                }
                for (var i = 0; i < this._rebetList.length; i++) {
                    if (this._curTurnNum > 30 && i > 2)
                        continue;
                    var antes = this._rebetList[i]; //之前区域i下注总额
                    if (antes) {
                        //从最大筹码开始循环，优先丢出大额筹码，剩下零头再由小额筹码去拼凑
                        for (var j = this._chipArr.length - 1; j >= 0; j--) {
                            if (!antes)
                                break;
                            var num = Math.floor(antes / this._chipArr[j]);
                            if (num) {
                                antes = antes - this._chipArr[j] * num;
                                for (var k = 0; k < num; k++) {
                                    this._game.network.call_longhu_bet(this._chipArr[j], i + 1);
                                }
                            }
                        }
                    }
                }
                this._betWait = true;
                Laya.timer.once(500, this, function () {
                    _this._betWait = false;
                });
            };
            LonghuMapPage.prototype.onAreaBetClick = function (index, e) {
                var _this = this;
                if (this.showIsGuest())
                    return;
                if (this._curStatus != 3 /* PLAY_STATUS_BET */) {
                    this._game.uiRoot.topUnder.showTips("当前不在下注时间，请在下注时间再进行下注！");
                    return;
                }
                if (this._curTurnNum > 30) {
                    if (index > 2) {
                        this._game.uiRoot.topUnder.showTips("老板，30局后不能下注花色哦~");
                        return;
                    }
                }
                if (this._betWait)
                    return; //投注间隔
                var total = this._betMainList[index];
                if (this._curChip + total > this._betlimit) {
                    this._game.uiRoot.topUnder.showTips(StringU.substitute("本投注点限红{0}哦~", this._betlimit));
                    return;
                }
                if (index == 1) { //龙
                    if (this._betMainList[2] > 0) {
                        this._game.uiRoot.topUnder.showTips("老板，龙虎不能同时下注哦~");
                        return;
                    }
                }
                if (index == 2) { //虎
                    if (this._betMainList[1] > 0) {
                        this._game.uiRoot.topUnder.showTips("老板，龙虎不能同时下注哦~");
                        return;
                    }
                }
                var money = this._game.sceneObjectMgr.mainUnit.GetMoney(); //玩家携带金币
                var betBefore = 0;
                for (var i = 0; i < this._betMainList.length; i++) {
                    betBefore += this._betMainList[i];
                }
                if (money + betBefore < PLAYER_LEAST_MONEY) {
                    TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", PLAYER_LEAST_MONEY), function () {
                        _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                    }, function () {
                    }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
                    return;
                }
                if (!this._curChip || this._curChip > money) {
                    TongyongPageDef.ins.alertRecharge("老板，您的金币不足哦~\n补充点金币去大杀四方吧~", function () {
                        _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                    }, function () {
                    }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
                    return;
                }
                this._betWait = true;
                Laya.timer.once(500, this, function () {
                    _this._betWait = false;
                });
                // this._rebetList[index] += this._curChip;
                this._game.network.call_longhu_bet(this._curChip, index + 1);
            };
            //筹码点击事件
            LonghuMapPage.prototype.onClickChip = function (index, e) {
                if (this._chipArr[index] == this._curChip)
                    return;
                this._game.uiRoot.btnTween(e.currentTarget);
                this.onSelectChip(index);
            };
            //选择筹码
            LonghuMapPage.prototype.onSelectChip = function (index) {
                this._curChip = this._chipArr[index];
                for (var i = 0; i < this._chipUIList.length; i++) {
                    this._chipGuangUIList[i].visible = i == index;
                    this._chipUIList[i].y = i == index ? this._curChipY - 10 : this._curChipY;
                }
            };
            //选择座位入座
            LonghuMapPage.prototype.onSelectSeat = function (index) {
                if (this.showIsGuest())
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                if (mainUnit.GetMoney() < this._seatlimit) {
                    this._game.uiRoot.topUnder.showTips("金币不足");
                    return;
                }
                this._game.network.call_longhu_seated(index + 1);
            };
            LonghuMapPage.prototype.onMouseClick = function (e) {
                if (e.target != this._viewUI.btn_spread) {
                    this.showMenu(false);
                }
            };
            LonghuMapPage.prototype.showMenu = function (isShow) {
                var _this = this;
                if (isShow) {
                    this._viewUI.box_menu.visible = true;
                    this._viewUI.btn_spread.visible = false;
                    this._viewUI.box_menu.y = -this._viewUI.box_menu.height;
                    Laya.Tween.to(this._viewUI.box_menu, { y: 10 }, 300, Laya.Ease.circIn);
                }
                else {
                    if (this._viewUI.box_menu.y >= 0) {
                        Laya.Tween.to(this._viewUI.box_menu, { y: -this._viewUI.box_menu.height }, 300, Laya.Ease.circIn, Handler.create(this, function () {
                            _this._viewUI.btn_spread.visible = true;
                            _this._viewUI.box_menu.visible = false;
                        }));
                    }
                }
            };
            LonghuMapPage.prototype.showIsGuest = function () {
                if (this._game.sceneObjectMgr.mainPlayer.IsIsGuest()) {
                    TongyongPageDef.ins.alertRecharge("亲爱的玩家，您正使用游客模式进行游戏，该模式下的游戏数据（包括付费数据）在删除游戏、更换设备后清空！对此造成的损失，本平台将不承担任何责任。为保障您的虚拟财产安全，我们强力建议您绑定手机号升级为正式账号。", function () { }, function () { }, true, PathGameTongyong.ui_tongyong_general + "btn_qd.png");
                    return true;
                }
                return false;
            };
            //显示结算界面
            LonghuMapPage.prototype.showSettleInfo = function () {
                if (!this._cardsArr)
                    return;
                if (!this._cardsArr.length)
                    return;
                var longCard = this._cardsArr[0];
                var huCard = this._cardsArr[1];
                var myBet = this._betMainTotal;
                if (!longCard || !huCard)
                    return;
                if (longCard.GetCardVal() == huCard.GetCardVal()) {
                    myBet = this._betMainTotal - this._betMainList[0] - this._betMainList[1];
                }
                var myBenefit = this._mainPlayerBenefit;
                // let allBet = this._betAllTotal;
                // let bankerBenefit = this._longhuMapInfo.GetBankerBenefit() / 100;
                var lottery = this._lottery;
                this._pageHandle.pushOpen({
                    id: TongyongPageDef.PAGE_TONGYONG_SETTLE,
                    dataSource: { myBet: myBet, myBenefit: myBenefit, lottery: lottery },
                    parent: this._game.uiRoot.HUD
                });
            };
            //重置所有显示对象
            LonghuMapPage.prototype.resetAll = function () {
                Laya.Tween.clearAll(this);
                Laya.timer.clearAll(this);
                this.resetData();
                this._longhuMgr.clear();
                this.clearClips();
                this.clearObjects();
                this.resetUI();
                Laya.timer.clear(this, this.kuangShanShuo);
            };
            //清除筹码
            LonghuMapPage.prototype.clearObjects = function () {
                if (this._chipTotalList) {
                    this._game.sceneObjectMgr.clearOfflineObject();
                    for (var i = 0; i < this._chipTotalList.length; i++) {
                        this._chipTotalList[i] = [];
                    }
                }
            };
            LonghuMapPage.prototype.onUpdateGameNo = function () {
                var gameNo = this._longhuMapInfo.GetGameNo();
                if (gameNo) {
                    this._viewUI.txt_id.visible = true;
                    this._viewUI.txt_id.text = "牌局号：" + gameNo;
                }
            };
            LonghuMapPage.prototype.onUpdateCountDown = function () {
                if (!this._longhuMapInfo)
                    return;
                this._countDown = this._longhuMapInfo.GetCountDown();
            };
            LonghuMapPage.prototype.onUpdateRecord = function (val) {
                var _this = this;
                if (!this._longhuMapInfo)
                    return;
                var recordArr = [];
                var newRecordArr = [];
                var gameRecord = this._longhuMapInfo.GetGameRecord();
                if (gameRecord != "") {
                    var data_1 = JSON.parse(gameRecord);
                    if (data_1.length > 18) {
                        for (var i = 0; i < 18; i++) {
                            recordArr[17 - i] = data_1[data_1.length - 1 - i];
                            newRecordArr[17 - i] = data_1[data_1.length - 1 - i];
                        }
                        if (!val) {
                            newRecordArr[newRecordArr.length - 1] = 99;
                            this._viewUI.list_record.dataSource = newRecordArr;
                            Laya.timer.once(1000, this, function () {
                                _this._viewUI.list_record.dataSource = recordArr;
                            });
                        }
                        else {
                            this._viewUI.list_record.dataSource = recordArr;
                        }
                    }
                    else {
                        this._viewUI.list_record.dataSource = data_1;
                    }
                }
                else { //没数据要初始化
                    this._viewUI.list_record.dataSource = recordArr;
                }
            };
            LonghuMapPage.prototype.onUpdateSeatedList = function (qifu_index) {
                var _this = this;
                if (!this._longhuMapInfo)
                    return;
                var seatedList = this._longhuMapInfo.GetSeatedList();
                if (seatedList != "") {
                    this._unitSeated = JSON.parse(seatedList);
                }
                if (!this._unitSeated.length) {
                    return;
                }
                var _loop_5 = function (i) {
                    var unitIndex = this_5._unitSeated[i][0];
                    var unit = this_5._game.sceneObjectMgr.getUnitByIdx(unitIndex);
                    if (unit) {
                        this_5._seatUIList[i].txt_name.text = getMainPlayerName(unit.GetName());
                        this_5._seatUIList[i].txt_money.text = EnumToString.getPointBackNum(unit.GetMoney(), 2).toString();
                        this_5._seatUIList[i].txt_name.fontSize = 15;
                        var unitHeadImg = unit.GetHeadImg();
                        if (unitHeadImg) {
                            this_5._seatUIList[i].img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unitHeadImg + ".png";
                        }
                        this_5._seatUIList[i].img_txk.visible = unit.GetVipLevel() > 0;
                        if (this_5._seatUIList[i].img_txk.visible) {
                            this_5._seatUIList[i].img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + unit.GetVipLevel() + ".png";
                        }
                        //祈福成功 头像上就有动画
                        if (qifu_index && unitIndex == qifu_index) {
                            this_5._seatUIList[i].qifu_type.visible = true;
                            this_5._seatUIList[i].qifu_type.skin = this_5._qifuTypeImgUrl;
                            this_5.playTween1(this_5._seatUIList[i].qifu_type, qifu_index);
                        }
                        //时间戳变化 才加上祈福标志
                        if (unit.GetQFEndTime(unit.GetQiFuType() - 1) > this_5._game.sync.serverTimeBys) {
                            if (qifu_index && unitIndex == qifu_index) {
                                Laya.timer.once(2500, this_5, function () {
                                    _this._seatUIList[i].img_qifu.visible = true;
                                    if (unit.GetQiFuType()) {
                                        var qifuImgUrl = _this._nameStrInfo[unit.GetQiFuType() - 1];
                                        _this._seatUIList[i].img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + qifuImgUrl + ".png";
                                    }
                                });
                            }
                            else {
                                this_5._seatUIList[i].img_qifu.visible = true;
                                if (unit.GetQiFuType()) {
                                    var qifuImgUrl = this_5._nameStrInfo[unit.GetQiFuType() - 1];
                                    this_5._seatUIList[i].img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + qifuImgUrl + ".png";
                                }
                            }
                        }
                        else {
                            this_5._seatUIList[i].img_qifu.visible = false;
                        }
                    }
                    else {
                        this_5._seatUIList[i].txt_name.text = "";
                        this_5._seatUIList[i].txt_money.text = "点击入座";
                        this_5._seatUIList[i].txt_name.fontSize = 20;
                        this_5._seatUIList[i].img_icon.skin = PathGameTongyong.ui_tongyong_general + "tu_weizi.png";
                        this_5._seatUIList[i].img_qifu.visible = false;
                        this_5._seatUIList[i].qifu_type.visible = false;
                        this_5._seatUIList[i].img_txk.visible = false;
                    }
                };
                var this_5 = this;
                for (var i = 0; i < this._seatUIList.length; i++) {
                    _loop_5(i);
                }
            };
            //初始化UI界面
            LonghuMapPage.prototype.initView = function () {
                this._viewUI.box_menu.y = -290;
                this._viewUI.box_menu.zOrder = 99;
                this._viewUI.box_menu.visible = false;
                this._areaList = [];
                this._chipUIList = [];
                this._seatUIList = [];
                this._chipGuangUIList = [];
                this._areaKuangUIList = [];
                this._txtTotalUIList = [];
                this._txtBetUIList = [];
                this._htmlTextArr = [];
                for (var i = 0; i < 11; i++) {
                    this._areaList.push(this._viewUI["area" + i]);
                    this._areaKuangUIList.push(this._viewUI["kuang" + i]);
                    this._txtTotalUIList.push(this._viewUI["txt_total" + i]);
                    this._areaKuangUIList[i].visible = false;
                    this._areaList[i].on(LEvent.CLICK, this, this.onAreaBetClick, [i]);
                    if (i < 3) {
                        this._htmlTextArr[i] = TextFieldU.createHtmlText(this._txtTotalUIList[i]);
                        this._htmlTextArr[i].style.lineHeight = 30;
                        this._htmlTextArr[i].style.valign = "middle";
                        this._htmlTextArr[i].innerHTML = "<span style='color:#ffd200'>0</span><span style='color:#ffffff'>/0</span>";
                    }
                    else {
                        this._txtTotalUIList[i].text = "0";
                    }
                }
                for (var i = 0; i < 8; i++) {
                    this._txtBetUIList.push(this._viewUI["txt_bet" + (i + 3)]);
                    this._txtBetUIList[i].text = "0";
                }
                for (var i = 0; i < 5; i++) {
                    this._chipUIList.push(this._viewUI["btn_chip" + i]);
                    this._chipUIList[i].on(LEvent.CLICK, this, this.onSelectChip, [i]);
                    this._chipGuangUIList.push(this._viewUI["guang" + i]);
                    if (i == 0) {
                        this._curChipY = this._chipUIList[i].y;
                        this._chipGuangUIList[i].visible = true;
                    }
                    else {
                        this._chipGuangUIList[i].visible = false;
                    }
                }
                for (var i = 0; i < 6; i++) {
                    this._seatUIList.push(this._viewUI["seat" + i]);
                    this._seatUIList[i].clip_money.visible = false;
                    this._seatUIList[i].on(LEvent.CLICK, this, this.onSelectSeat, [i]);
                }
                this._viewUI.list_record.itemRender = this.createChildren("game_ui.longhu.component.RecordRenderUI", MapRecordRender);
                this._viewUI.list_record.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_record.dataSource = [];
                if (!this._htmlText) {
                    this._htmlText = TextFieldU.createHtmlText(this._viewUI.txt_online);
                }
                this._turnClip = new LonghuClip(LonghuClip.GAME_ROUND);
                //主玩家UI
                this._viewUI.main_player.clip_money.visible = false;
                //界面UI
                this._viewUI.txt_id.visible = false;
                this._viewUI.box_time.visible = false;
                this._viewUI.xipai.visible = false;
                this._viewUI.paixieRight.ani_chupai.stop();
                this._viewUI.ani_deal.ani1.stop();
                this._viewUI.ani_deal.visible = false;
                this._viewUI.long_win.visible = false;
                this._viewUI.hu_win.visible = false;
                this._viewUI.kaipai_long.visible = false;
                this._viewUI.kaipai_hu.visible = false;
                this._viewUI.box_banker.visible = false;
                this._viewUI.btn_repeat.disabled = true;
            };
            LonghuMapPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            LonghuMapPage.prototype.initRoomConfig = function () {
                var maplv = this._longhuMapInfo.GetMapLevel();
                if (maplv && ALL_GAME_ROOM_CONFIG_ID.indexOf(maplv) != -1) {
                    this._chipArr = ROOM_CHIP_CONFIG[maplv];
                    this._robotConfig = ROBOT_NUM_CONFIG[maplv];
                    this._seatlimit = LonghuMapPage.MONEY_LIMIT_CONFIG[maplv][1];
                    this._betlimit = LonghuMapPage.MONEY_LIMIT_CONFIG[maplv][2];
                    if (this._robotConfig) {
                        this.updateOnline();
                    }
                    if (!this._chipArr)
                        return;
                    for (var i = 0; i < this._chipArr.length; i++) {
                        this._chipUIList[i].label = EnumToString.sampleChipNum(this._chipArr[i]);
                    }
                    if (!this._curChip)
                        this.onSelectChip(0);
                }
            };
            LonghuMapPage.prototype.onUpdateCardPool = function (data) {
                if (!this._longhuMapInfo)
                    return;
                var cardPoolCount = this._longhuMapInfo.GetCardPoolCount();
                if (data) { //手动更新
                    this._viewUI.txt_cardRight.text = cardPoolCount.toString();
                    this._viewUI.txt_cardLeft.text = (CARDS_TOTAL_COUNT - cardPoolCount).toString();
                }
                else { //监听更新
                    this._viewUI.txt_cardRight.text = cardPoolCount.toString();
                    this._viewUI.txt_cardLeft.text = (CARDS_TOTAL_COUNT - cardPoolCount - 2).toString();
                }
            };
            LonghuMapPage.prototype.onUpdateTurn = function () {
                if (!this._longhuMapInfo)
                    return;
                this._turnClip.x = this._viewUI.txt_turn.x;
                this._turnClip.y = this._viewUI.txt_turn.y;
                this._turnClip.anchorX = 0.5;
                this._viewUI.txt_turn.visible = false;
                this._viewUI.txt_turn.parent.addChild(this._turnClip);
                this._curTurnNum = this._longhuMapInfo.GetRound();
                this._turnClip.setText(this._curTurnNum, true, false);
            };
            LonghuMapPage.prototype.onUpdateChipGrey = function () {
                if (!this._game.sceneObjectMgr.mainUnit)
                    return;
                var money = this._game.sceneObjectMgr.mainUnit.GetMoney();
                for (var i = 0; i < this._chipUIList.length; i++) {
                    var index = this._chipUIList.length - 1 - i;
                    if (money < this._chipArr[index]) {
                        this._chipUIList[index].disabled = true;
                        this._chipUIList[index].y = this._curChipY;
                        this._chipGuangUIList[index].visible = false;
                    }
                    else {
                        this._chipUIList[index].disabled = false;
                    }
                }
            };
            //重置UI
            LonghuMapPage.prototype.resetUI = function () {
                //主玩家UI
                this._viewUI.main_player.clip_money.visible = false;
                //界面UI
                for (var i = 0; i < 11; i++) {
                    if (i < 8) {
                        this._txtBetUIList[i].text = "0";
                    }
                    if (i < 3) {
                        this._htmlTextArr[i].innerHTML = "<span style='color:#ffd200'>0</span>/<span style='color:#ffffff'>0</span>";
                    }
                    else {
                        this._txtTotalUIList[i].text = "0";
                    }
                }
            };
            LonghuMapPage.prototype.resetData = function () {
                this._battleIndex = -1;
                this._cardsArr = [];
                for (var i = 0; i < 11; i++) {
                    this._chipTotalList[i] = [];
                }
                this._betTotalList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                this._betMainList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                this._mainPlayerBenefit = 0;
                this._betMainTotal = 0;
                this._betAllTotal = 0;
                this._lottery = "";
                this._longhuMgr && (this._longhuMgr.isReConnect = false);
            };
            LonghuMapPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_spread.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_back.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_rule.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_chongzhi.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_set.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_zhanji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_repeat.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_playerList.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_road.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.long_win.aniWin.off(LEvent.COMPLETE, this, this.onAniPlayOver);
                    this._viewUI.hu_win.aniWin.off(LEvent.COMPLETE, this, this.onAniPlayOver);
                    for (var i = 0; i < this._areaList.length; i++) {
                        this._areaList[i] && this._areaList[i].off(LEvent.CLICK, this, this.onAreaBetClick);
                    }
                    this._areaList = [];
                    for (var i = 0; i < this._chipUIList.length; i++) {
                        this._chipUIList[i] && this._chipUIList[i].off(LEvent.CLICK, this, this.onSelectChip);
                    }
                    this._chipUIList = [];
                    for (var i = 0; i < this._seatUIList.length; i++) {
                        this._seatUIList[i] && this._seatUIList[i].off(LEvent.CLICK, this, this.onSelectSeat, [i]);
                    }
                    this._seatUIList = [];
                    this._chipTotalList = [];
                    this._viewUI.paixieRight.ani_chupai.stop();
                    this._viewUI.ani_deal.ani1.stop();
                    if (this._longhuMgr) {
                        this._longhuMgr.off(LonghuMgr.DEAL_OVER, this, this.onUpdateAniDeal);
                        this._longhuMgr.off(LonghuMgr.SHOW_OVER, this, this.onUpdateResult);
                    }
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(LonghuMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
                    this._game.sceneObjectMgr.off(LonghuMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                    this._game.sceneObjectMgr.off(LonghuMapInfo.EVENT_GAME_TURN_CHANGE, this, this.onUpdateTurn); //回合数变化
                    this._game.sceneObjectMgr.off(LonghuMapInfo.EVENT_GAME_NO, this, this.onUpdateGameNo); //牌局号
                    this._game.sceneObjectMgr.off(LonghuMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown); //倒计时时间戳更新
                    this._game.sceneObjectMgr.off(LonghuMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord); //游戏记录更新
                    this._game.sceneObjectMgr.off(LonghuMapInfo.EVENT_SEATED_LIST, this, this.onUpdateSeatedList); //入座列表更新
                    this._game.sceneObjectMgr.off(LonghuMapInfo.EVENT_CARD_POOL_CHANGE, this, this.onUpdateCardPool); //牌库数量变化
                    this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                    this._viewUI.kaipai_long.ani_kaipai.off(LEvent.COMPLETE, this, this.onSeeCardOver);
                    this._viewUI.kaipai_hu.ani_kaipai.off(LEvent.COMPLETE, this, this.onSeeCardOver);
                    this._game.uiRoot.HUD.close(page_1.LonghuPageDef.PAGE_LONGHU_BEGIN);
                    this._game.uiRoot.HUD.close(page_1.LonghuPageDef.PAGE_LONGHU_END);
                    this.resetAll();
                    this._longhuStory && this._longhuStory.clear();
                    this._game.stopAllSound();
                    this._game.stopMusic();
                }
                _super.prototype.close.call(this);
            };
            LonghuMapPage.MONEY_LIMIT_CONFIG = {
                "81": [5000, 2000, 5000],
                "82": [20000, 5000, 8000],
                "83": [50000, 10000, 25000],
                "84": [100000, 20000, 50000],
            };
            return LonghuMapPage;
        }(game.gui.base.Page));
        page_1.LonghuMapPage = LonghuMapPage;
        var MapRecordRender = /** @class */ (function (_super) {
            __extends(MapRecordRender, _super);
            function MapRecordRender() {
                return _super.call(this) || this;
            }
            MapRecordRender.prototype.setData = function (game, data) {
                this._game = game;
                this._data = data;
                if (this._data != 1 && this._data != 2 && this._data != 3) {
                    this.visible = false;
                    return;
                }
                this.visible = true;
                this.record.skin = StringU.substitute(Path_game_longhu.ui_longhu + "zs_{0}.png", this._data == 1 ? "2" : this._data == 3 ? "1" : "0");
            };
            MapRecordRender.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            return MapRecordRender;
        }(ui.game_ui.longhu.component.RecordRenderUI));
    })(page = gamelonghu.page || (gamelonghu.page = {}));
})(gamelonghu || (gamelonghu = {}));
//# sourceMappingURL=LonghuMapPage.js.map