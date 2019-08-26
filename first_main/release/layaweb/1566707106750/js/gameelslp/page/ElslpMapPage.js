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
* 俄罗斯轮盘
*/
var gameelslp;
(function (gameelslp) {
    var page;
    (function (page_1) {
        var TextFieldU = utils.TextFieldU;
        var ALL_GAME_ROOM_CONFIG_ID = [232, 233, 234, 235]; // 可进入的maplv
        var MAX_POS = 49; //共有49个下注区域
        var MONEY_LIMIT_CONFIG = {
            "232": [5000, 2000, 5000],
            "233": [20000, 5000, 8000],
            "234": [50000, 10000, 25000],
            "235": [100000, 20000, 50000],
        };
        var ROOM_CHIP_CONFIG = {
            "232": [1, 10, 50, 100, 1000],
            "233": [10, 50, 100, 500, 1000],
            "234": [50, 100, 500, 1000, 5000],
            "235": [100, 500, 1000, 5000, 10000],
        };
        var ROBOT_NUM_CONFIG = {
            "232": [100, 150, 200, 300],
            "233": [70, 100, 130, 200],
            "234": [30, 60, 100, 150],
            "235": [10, 30, 60, 90],
        };
        var ElslpMapPage = /** @class */ (function (_super) {
            __extends(ElslpMapPage, _super);
            function ElslpMapPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._lottery = ""; //中奖区域
                _this._mainPlayerBenefit = 0; //玩家收益
                _this._areaList = []; //下注区域UI集合
                _this._areaKuangUIList = []; //下注区域边框集合
                _this._txtBetUIList = []; //下注文本UI集合
                _this._seatUIList = []; //座位UI集合
                _this._chipUIList = []; //筹码UI集合
                _this._chipGuangUIList = []; //筹码光效UI集合
                _this._chipArr = []; //筹码大小类型
                _this._clipList = []; //飘字集合
                _this._chipSortScore = 0; //筹码层级
                _this._unitSeated = []; //入座精灵信息集合
                _this._chipTotalList = []; //区域绘制筹码集合
                _this._betTotalList = []; //区域下注总额集合（所有玩家）
                _this._betMainList = []; //区域下注总额集合（主玩家）
                _this._rebetList = []; //重复下注列表(49个区域)
                _this._mainHeadPos = [[0, 0], [0, -10]]; //主玩家座位头像初始位置
                _this._headStartPos = [[0, 0], [0, 158], [0, 316], [0, 0], [0, 158], [0, 316]]; //座位头像初始位置
                _this._headEndPos = [[10, 0], [10, 158], [10, 316], [-10, 0], [-10, 158], [-10, 316]]; //座位头像移动位置
                _this._isFirstOpen = false;
                _this._betWinArea = [];
                _this._betAllTotal = 0;
                _this._betMainTotal = 0;
                _this._diff = 500;
                _this._timeList = {};
                _this._firstList = {};
                _this._timeList1 = {};
                _this._firstList1 = {};
                _this._nameStrInfo = ["xs", "px", "gsy", "gg", "cs", "tdg"];
                //战斗结构体更新
                _this._battleIndex = -1;
                _this.areaName = {
                    89: "第三打",
                    90: "第二打",
                    91: "第一打",
                    92: "第三列",
                    93: "第二列",
                    94: "第一列",
                    95: "双",
                    96: "单",
                    97: "黑",
                    98: "红",
                    99: "小",
                    100: "大",
                };
                //区域下注
                _this._betWait = false;
                _this._isNeedDuang = false;
                _this._delta = 1000;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    Path_game_elslp.atlas_game_ui + "eluosizhuanpan.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "tuichu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            ElslpMapPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.eluosizhuanpan.ELuoSiLunPanUI');
                this.addChild(this._viewUI);
                this.initView();
                if (!this._pageHandle) {
                    this._pageHandle = PageHandle.Get("ElslpMapPage"); //额外界面控制器
                }
                this._elslpStory = this._game.sceneObjectMgr.story;
                if (this._elslpStory) {
                    this.onUpdateMapInfo();
                }
                this._viewUI.mouseThrough = true;
                this._game.playMusic(Path_game_elslp.music_elslp + "toubao_bgm.mp3");
            };
            // 页面打开时执行函数
            ElslpMapPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_spread.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rule.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zhanji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_repeat.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_playerList.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_record.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chong.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(ElslpMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
                this._game.sceneObjectMgr.on(ElslpMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.on(ElslpMapInfo.EVENT_GAME_NO, this, this.onUpdateGameNo); //牌局号
                this._game.sceneObjectMgr.on(ElslpMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown); //倒计时时间戳更新
                this._game.sceneObjectMgr.on(ElslpMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord); //游戏记录更新
                this._game.sceneObjectMgr.on(ElslpMapInfo.EVENT_SEATED_LIST, this, this.onUpdateSeatedList); //入座列表更新
                this._game.sceneObjectMgr.on(ElslpMapInfo.EVENT_BET_WIN_AREA, this, this.onUpdateBetWin); //本局中奖区域
                this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this.onUpdateStatus();
                this.onUpdateBattle();
                this.onUpdateGameNo();
                this.onUpdateCountDown();
                this.onUpdateRecord();
                this.onUpdateSeatedList();
                this.onUpdateBetWin();
                this.onUpdateUnitOffline();
                this.onUpdateSeatedList();
            };
            //帧间隔心跳
            ElslpMapPage.prototype.deltaUpdate = function () {
                if (!this._viewUI)
                    return;
                var bool = this._curStatus == 2 /* PLAY_STATUS_BET */;
                if (!bool) {
                    this._viewUI.box_time.visible = false;
                    return;
                }
                var curTime = this._game.sync.serverTimeBys;
                var time = Math.floor(this._countDown - curTime);
                this._viewUI.box_time.ani1.gotoAndStop(24);
                this._viewUI.box_time.visible = time > 0;
                this._viewUI.box_time.txt_time.text = time.toString();
                if (this._curStatus == 2 /* PLAY_STATUS_BET */) {
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
            ElslpMapPage.prototype.onUnitAdd = function (u) {
                this.onUpdateUnit();
            };
            //玩家出去了
            ElslpMapPage.prototype.onUnitRemove = function (u) {
                this.onUpdateUnit();
            };
            ElslpMapPage.prototype.onUpdateResult = function () {
                for (var i = 0; i < MAX_POS; i++) {
                    for (var j = 0; j < this._betWinArea.length; j++) {
                        if (i + 1 == this._betWinArea[j]) {
                            this.kuangShanShuo(i);
                            break;
                        }
                    }
                }
            };
            ElslpMapPage.prototype.kuangShanShuo = function (index) {
                var _this = this;
                this._areaKuangUIList[index].visible = true;
                Laya.timer.once(3000, this, function () {
                    _this._areaKuangUIList[index].visible = false;
                });
            };
            ElslpMapPage.prototype.onUpdateMapInfo = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._elslpMapInfo = mapinfo;
                if (mapinfo) {
                    this.initRoomConfig();
                    this.onUpdateCountDown();
                    this.onUpdateBattle();
                    this.onUpdateStatus();
                    this.onUpdateRecord();
                    this.updateOnline();
                    this.onUpdateChipGrey();
                }
            };
            ElslpMapPage.prototype.onUpdateUnitOffline = function () {
                var mainPlayer = this._game.sceneObjectMgr.mainPlayer;
                if (!mainPlayer)
                    return;
                var mainPlayerInfo = mainPlayer.playerInfo;
                this._viewUI.main_player.txt_name.text = getMainPlayerName(mainPlayerInfo.nickname);
                if (mainPlayerInfo.headimg) {
                    this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + mainPlayerInfo.headimg + ".png";
                }
                var money = EnumToString.getPointBackNum(mainPlayerInfo.money, 2).toString();
                this._viewUI.main_player.txt_money.text = money.toString();
                this._viewUI.main_player.img_qifu.visible = mainPlayerInfo.qifu_endtime > this._game.sync.serverTimeBys;
                if (this._viewUI.main_player.img_qifu.visible) {
                    this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[mainPlayerInfo.qifu_type - 1] + ".png";
                }
                this._viewUI.main_player.img_txk.visible = mainPlayerInfo.vip_level > 0;
                if (this._viewUI.main_player.img_txk.visible) {
                    this._viewUI.main_player.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + mainPlayerInfo.vip_level + ".png";
                }
            };
            ElslpMapPage.prototype.onUpdateUnit = function (qifu_index) {
                var _this = this;
                if (!this._elslpMapInfo)
                    return;
                var battleInfoMgr = this._elslpMapInfo.battleInfoMgr;
                //主玩家的座位
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (mainUnit) {
                    var headImg = mainUnit.GetHeadImg();
                    this._viewUI.main_player.txt_name.text = getMainPlayerName(mainUnit.GetName());
                    if (headImg) {
                        this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + headImg + ".png";
                    }
                    var money = EnumToString.getPointBackNum(mainUnit.GetMoney(), 2).toString();
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
                    if (mainUnit.GetQiFuEndTime() > this._game.sync.serverTimeBys) {
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
                    }
                }
                this.onUpdateChipGrey();
                this.onUpdateSeatedList(qifu_index);
            };
            ElslpMapPage.prototype.playTween = function (img, index, isTween) {
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
            ElslpMapPage.prototype.playTween1 = function (img, index, isTween) {
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
            ElslpMapPage.prototype.onOptHandler = function (optcode, msg) {
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
            ElslpMapPage.prototype.updateOnline = function () {
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
            ElslpMapPage.prototype.updateMoney = function () {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (mainUnit) {
                    var money = EnumToString.getPointBackNum(mainUnit.GetMoney(), 2).toString();
                    this._viewUI.main_player.txt_money.text = money.toString();
                }
            };
            ElslpMapPage.prototype.onUpdateBattle = function () {
                if (!this._elslpMapInfo)
                    return;
                var battleInfoMgr = this._elslpMapInfo.battleInfoMgr;
                if (!battleInfoMgr)
                    return;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var info = battleInfoMgr.info[i];
                    if (info instanceof gamecomponent.object.BattleInfoAreaBet) {
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            this.onBattleBet(info, i);
                        }
                    }
                    if (info instanceof gamecomponent.object.BattleInfoSettle) {
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            this.onBattleSettle(info);
                        }
                    }
                    if (info instanceof gamecomponent.object.BattleLogCardsResult) { //中奖区域
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            this.onBattleResult(info);
                        }
                    }
                }
                if (this._curStatus == 6 /* PLAY_STATUS_SHOW_INFO */ && this._betAllTotal > 0) {
                    this.showSettleInfo();
                }
            };
            //战斗日志来更新桌面上的筹码
            ElslpMapPage.prototype.onBattleBet = function (info, index) {
                //主玩家的座位
                if (!this._game.sceneObjectMgr.mainUnit)
                    return;
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
            ElslpMapPage.prototype.moveHead = function (view, startX, startY, endX, endY) {
                Laya.Tween.clearAll(view);
                Laya.Tween.to(view, { x: endX, y: endY }, 150, null, Handler.create(this, function () {
                    Laya.Tween.to(view, { x: startX, y: startY }, 150);
                }));
            };
            ElslpMapPage.prototype.updateChipOnTable = function (index, bet, isMainPlayer) {
                if (isMainPlayer) {
                    this._betMainList[index] += bet;
                    this._betMainTotal += bet;
                }
                this._betTotalList[index] += bet;
                this._betAllTotal += bet;
                this.updateBetNum();
            };
            ElslpMapPage.prototype.updateBetNum = function () {
                for (var i = 0; i < MAX_POS; i++) {
                    this._txtBetUIList[i].text = this._betMainList[i] > 0 ? this._betMainList[i].toString() : "";
                }
            };
            //创建筹码
            ElslpMapPage.prototype.createChip = function (startIdx, targetIdx, type, value, index, unitIndex) {
                var _this = this;
                var chip = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CHIP_MARK, ElslpChip);
                chip.setData(startIdx, targetIdx, type, value, index, unitIndex);
                this._chipTotalList[targetIdx - 1].push(chip);
                if (this._curStatus != 2 /* PLAY_STATUS_BET */) {
                    chip.drawChip();
                }
                else {
                    Laya.timer.once(350, this, function () {
                        chip.sendChip();
                        _this._game.playSound(Path_game_elslp.music_elslp + "chouma.mp3", false);
                    });
                }
                this._chipSortScore = index; //存下来最后一个筹码层级
            };
            //庄家飞筹码去输的区域
            ElslpMapPage.prototype.bankerFlyChip = function (startIdx, targetIdx, type, value, index, unitIndex) {
                var chip = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CHIP_MARK, ElslpChip);
                chip.setData(startIdx, targetIdx, type, value, index, unitIndex);
                this._chipTotalList[targetIdx - 1].push(chip);
                Laya.timer.once(350, this, function () {
                    chip.sendChip();
                });
            };
            ElslpMapPage.prototype.onBattleSettle = function (info) {
                if (!this._game.sceneObjectMgr.mainUnit)
                    return;
                if (this._game.sceneObjectMgr.mainUnit.GetIndex() == info.SeatIndex) {
                    this._mainPlayerBenefit = parseFloat(info.SettleVal);
                }
                if (info.SettleVal == 0)
                    return;
                this.addMoneyClip(info.SeatIndex, info.SettleVal);
            };
            ElslpMapPage.prototype.onBattleResult = function (info) {
                for (var i = 0; i < info.Results.length; i++) {
                    var idx = info.Results[i];
                    var str = void 0;
                    if (idx < 89) {
                        str = idx + "点";
                        this._rewardNumber = idx;
                    }
                    else {
                        str = this.areaName[idx];
                    }
                    if (!this._lottery)
                        this._lottery = str;
                    else
                        this._lottery += " , " + str;
                }
            };
            //结算飘筹码
            ElslpMapPage.prototype.flyChipEffect = function () {
                var _this = this;
                if (this._curStatus != 5 /* PLAY_STATUS_SETTLE */)
                    return;
                var resultList = [];
                for (var i = 0; i < MAX_POS; i++) {
                    for (var j = 0; j < this._betWinArea.length; j++) {
                        if (i + 1 == this._betWinArea[j] && this._betTotalList[i]) {
                            resultList[i] = 0;
                            break;
                        }
                        else {
                            resultList[i] = 1;
                        }
                    }
                }
                var _loop_1 = function (i) {
                    var chipArr = this_1._chipTotalList[i] || [];
                    if (resultList[i] == 1) {
                        this_1._game.playSound(Path_game_elslp.music_elslp + "piaoqian.mp3", false);
                        for (var j = 0; j < chipArr.length; j++) {
                            var chip = chipArr[j];
                            chip.flyChip(2, false, j, this_1._game); //庄家先收筹码
                        }
                    }
                    else {
                        Laya.timer.once(800, this_1, function () {
                            _this._game.playSound(Path_game_elslp.music_elslp + "piaoqian.mp3", false);
                            for (var j = 0; j < 20; j++) {
                                var ranType = MathU.randomRange(1, 5);
                                var ranVal = _this._chipArr[ranType - 1];
                                _this._chipSortScore++;
                                _this.bankerFlyChip(2, i + 1, ranType, ranVal, _this._chipSortScore, -1);
                            }
                        });
                        Laya.timer.once(2000, this_1, function () {
                            _this._game.playSound(Path_game_elslp.music_elslp + "piaoqian.mp3", false);
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
                var this_1 = this;
                for (var i = 0; i < this._chipTotalList.length; i++) {
                    _loop_1(i);
                }
            };
            //金币变化 飘字clip
            ElslpMapPage.prototype.addMoneyClip = function (index, value) {
                var valueClip = value >= 0 ? new ElslpClip(ElslpClip.ADD_MONEY_FONT) : new ElslpClip(ElslpClip.SUB_MONEY_FONT);
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
            ElslpMapPage.prototype.clearClips = function () {
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
            ElslpMapPage.prototype.onUpdateStatus = function () {
                var _this = this;
                if (!this._elslpMapInfo)
                    return;
                this.initRoomConfig();
                var mapStatus = this._elslpMapInfo.GetMapState();
                if (this._curStatus == mapStatus)
                    return;
                this._curStatus = mapStatus;
                this._viewUI.btn_repeat.disabled = this._curStatus != 2 /* PLAY_STATUS_BET */;
                this._viewUI.box_tip.visible = false;
                switch (this._curStatus) {
                    case 0 /* PLAY_STATUS_NONE */: // 准备阶段
                        this.resetAll();
                        break;
                    case 1 /* PLAY_STATUS_GAMESTART */: // 游戏开始
                        this.updateOnline();
                        this.resetAll();
                        break;
                    case 2 /* PLAY_STATUS_BET */: // 下注阶段
                        if (Math.floor(this._elslpMapInfo.GetCountDown() - this._game.sync.serverTimeBys) < 13) {
                            this.onUpdateSeatedList();
                            this._viewUI.clip_status.index = 0;
                            var bool = false;
                            for (var i = 0; i < this._rebetList.length; i++) {
                                if (this._rebetList[i] > 0) {
                                    bool = true;
                                    break;
                                }
                            }
                            this._viewUI.btn_repeat.disabled = !bool;
                        }
                        else {
                            this._pageHandle.pushOpen({ id: page_1.ElslpPageDef.PAGE_ELSLP_BEGIN, parent: this._game.uiRoot.HUD });
                            this._game.playSound(Path_game_elslp.music_elslp + "dingding_start.mp3");
                            this._game.playSound(Path_game_elslp.music_elslp + "xiazhu_start.mp3");
                            this.onUpdateSeatedList();
                            var bool = false;
                            for (var i = 0; i < this._rebetList.length; i++) {
                                if (this._rebetList[i] > 0) {
                                    bool = true;
                                    break;
                                }
                            }
                            this._viewUI.btn_repeat.disabled = !bool;
                        }
                        break;
                    case 3 /* PLAY_STATUS_STOP_BET */: // 停止下注阶段
                        this._pageHandle.pushClose({ id: page_1.ElslpPageDef.PAGE_ELSLP_BEGIN, parent: this._game.uiRoot.HUD });
                        this._pageHandle.pushOpen({ id: page_1.ElslpPageDef.PAGE_ELSLP_END, parent: this._game.uiRoot.HUD });
                        this._game.playSound(Path_game_elslp.music_elslp + "dingding_end.mp3");
                        this._game.playSound(Path_game_elslp.music_elslp + "xiazhu_end.mp3");
                        this._viewUI.clip_status.index = 1;
                        break;
                    case 4 /* PLAY_STATUS_SHOW */: //开奖
                        this._pageHandle.pushOpen({ id: page_1.ElslpPageDef.PAGE_ELSLP_DIAL, parent: this._game.uiRoot.HUD, dataSource: this._rewardNumber });
                        var betAllTotal = 0;
                        for (var i = 0; i < this._betMainList.length; i++) {
                            betAllTotal += this._betMainList[i];
                        }
                        if (betAllTotal > 0) {
                            for (var i = 0; i < this._betMainList.length; i++) {
                                this._rebetList[i] = this._betMainList[i];
                            }
                        }
                        break;
                    case 5 /* PLAY_STATUS_SETTLE */: // 结算阶段
                        this._pageHandle.pushClose({ id: page_1.ElslpPageDef.PAGE_ELSLP_DIAL, parent: this._game.uiRoot.HUD });
                        this.onUpdateResult();
                        this._viewUI.clip_status.index = 2;
                        this._pageHandle.pushClose({ id: page_1.ElslpPageDef.PAGE_ELSLP_END, parent: this._game.uiRoot.HUD });
                        this.onUpdateSeatedList();
                        this.flyChipEffect();
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
                    case 6 /* PLAY_STATUS_SHOW_INFO */: // 显示结算信息阶段
                        this.showSettleInfo();
                        this._viewUI.clip_status.index = 2;
                        if (this._viewUI.box_menu.y >= 0) { //每局重新开始把菜单收起来
                            this._viewUI.box_menu.y = -this._viewUI.box_menu.height;
                            this._viewUI.box_menu.visible = false;
                            this._viewUI.btn_spread.visible = true;
                        }
                        break;
                    case 7 /* PLAY_STATUS_RELAX */: // 休息阶段
                        this._pageHandle.pushClose({ id: TongyongPageDef.PAGE_TONGYONG_SETTLE, parent: this._game.uiRoot.HUD });
                        this.resetAll();
                        break;
                }
                this._pageHandle.updatePageHandle(); //更新额外界面的开关状态
                this._pageHandle.reset(); //清空额外界面存储数组
            };
            //按钮缓动回调
            ElslpMapPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_spread: //菜单
                        this.showMenu(true);
                        break;
                    case this._viewUI.btn_playerList: //玩家列表
                        this._game.uiRoot.general.open(page_1.ElslpPageDef.PAGE_ELSLP_PLAYER_LIST);
                        break;
                    case this._viewUI.btn_record: //走势图
                        this._game.uiRoot.general.open(page_1.ElslpPageDef.PAGE_ELSLP_ROAD);
                        break;
                    case this._viewUI.btn_chong: //充值
                        this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                        break;
                    case this._viewUI.btn_rule: //规则
                        this._game.uiRoot.general.open(page_1.ElslpPageDef.PAGE_ELSLP_RULE);
                        break;
                    case this._viewUI.btn_set: //设置
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING);
                        break;
                    case this._viewUI.btn_qifu: //设置
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU);
                        break;
                    case this._viewUI.btn_zhanji: //战绩
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, function (page) {
                            page.dataSource = page_1.ElslpPageDef.GAME_NAME;
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
                        if (totalBet && this._elslpMapInfo && this._elslpMapInfo.GetPlayState() == 1) {
                            this._game.showTips("游戏尚未结束，请先打完这局哦~");
                            return;
                        }
                        TongyongPageDef.ins.alertClose("toubao", this, this.onClickCancle);
                        break;
                    default:
                        break;
                }
            };
            //确定退出回调
            ElslpMapPage.prototype.onClickCancle = function () {
                this._game.sceneObjectMgr.leaveStory(true);
            };
            //重复下注
            ElslpMapPage.prototype.repeatBet = function () {
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
                    if (this._betMainList[0] > 0) { //小
                        if (this._betMainList[5] > 0) {
                            this._game.uiRoot.topUnder.showTips("老板，大小不能同时下注哦~");
                            return;
                        }
                    }
                    if (this._betMainList[5] > 0) { //大
                        if (this._betMainList[0] > 0) {
                            this._game.uiRoot.topUnder.showTips("老板，大小不能同时下注哦~");
                            return;
                        }
                    }
                    if (this._betMainList[1] > 0) { //单
                        if (this._betMainList[4] > 0) {
                            this._game.uiRoot.topUnder.showTips("老板，单双不能同时下注哦~");
                            return;
                        }
                    }
                    if (this._betMainList[4] > 0) { //双
                        if (this._betMainList[1] > 0) {
                            this._game.uiRoot.topUnder.showTips("老板，单双不能同时下注哦~");
                            return;
                        }
                    }
                    if (this._betMainList[2] > 0) { //红
                        if (this._betMainList[3] > 0) {
                            this._game.uiRoot.topUnder.showTips("老板，红黑不能同时下注哦~");
                            return;
                        }
                    }
                    if (this._betMainList[3] > 0) { //黑
                        if (this._betMainList[2] > 0) {
                            this._game.uiRoot.topUnder.showTips("老板，红黑不能同时下注哦~");
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
                                    // this._game.network.call_eluosilunpan_bet(this._chipArr[j], i + 1);
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
            ElslpMapPage.prototype.onAreaBetClick = function (index, e) {
                var _this = this;
                if (this.showIsGuest())
                    return;
                if (this._curStatus != 2 /* PLAY_STATUS_BET */) {
                    this._game.uiRoot.topUnder.showTips("当前不在下注时间，请在下注时间再进行下注！");
                    return;
                }
                if (this._betWait)
                    return; //投注间隔
                var total = this._betMainList[index];
                if (this._curChip + total > this._betlimit) {
                    this._game.uiRoot.topUnder.showTips(StringU.substitute("本投注点限红{0}哦~", this._betlimit));
                    return;
                }
                if (index == 0) { //小
                    if (this._betMainList[5] > 0) {
                        this._game.uiRoot.topUnder.showTips("老板，大小不能同时下注哦~");
                        return;
                    }
                }
                if (index == 5) { //大
                    if (this._betMainList[0] > 0) {
                        this._game.uiRoot.topUnder.showTips("老板，大小不能同时下注哦~");
                        return;
                    }
                }
                if (index == 1) { //单
                    if (this._betMainList[4] > 0) {
                        this._game.uiRoot.topUnder.showTips("老板，单双不能同时下注哦~");
                        return;
                    }
                }
                if (index == 4) { //双
                    if (this._betMainList[1] > 0) {
                        this._game.uiRoot.topUnder.showTips("老板，单双不能同时下注哦~");
                        return;
                    }
                }
                if (index == 2) { //红
                    if (this._betMainList[3] > 0) {
                        this._game.uiRoot.topUnder.showTips("老板，红黑不能同时下注哦~");
                        return;
                    }
                }
                if (index == 3) { //黑
                    if (this._betMainList[2] > 0) {
                        this._game.uiRoot.topUnder.showTips("老板，红黑不能同时下注哦~");
                        return;
                    }
                }
                var money = this._game.sceneObjectMgr.mainUnit.GetMoney();
                var betBefore = 0;
                for (var i = 0; i < this._betMainList.length; i++) {
                    betBefore += this._betMainList[i];
                }
                if (!this._curChip) {
                    TongyongPageDef.ins.alertRecharge("老板，您的金币不足哦~\n补充点金币去大杀四方吧~", function () {
                        _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                    }, function () {
                    }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
                    return;
                }
                if (this._curChip > money) {
                    this._game.uiRoot.topUnder.showTips("老板，您的金币不足哦~");
                    return;
                }
                this._betWait = true;
                Laya.timer.once(500, this, function () {
                    _this._betWait = false;
                });
                this._rebetList[index] += this._curChip;
                // this._game.network.call_eluosilunpan_bet(this._curChip, index + 1)
            };
            ElslpMapPage.prototype.onUpdateChipGrey = function () {
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
            //选择筹码
            ElslpMapPage.prototype.onSelectChip = function (index) {
                this._curChip = this._chipArr[index];
                for (var i = 0; i < this._chipUIList.length; i++) {
                    this._chipGuangUIList[i].visible = i == index;
                    this._chipUIList[i].y = i == index ? this._curChipY - 10 : this._curChipY;
                }
            };
            //选择座位入座
            ElslpMapPage.prototype.onSelectSeat = function (index) {
                if (this.showIsGuest())
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                if (mainUnit.GetMoney() < this._seatlimit) {
                    this._game.uiRoot.topUnder.showTips("金币不足");
                    return;
                }
                // this._game.network.call_eluosilunpan_seated(index + 1);
            };
            ElslpMapPage.prototype.onMouseClick = function (e) {
                if (e.target != this._viewUI.btn_spread) {
                    this.showMenu(false);
                }
            };
            ElslpMapPage.prototype.showMenu = function (isShow) {
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
            ElslpMapPage.prototype.showIsGuest = function () {
                if (this._game.sceneObjectMgr.mainPlayer.IsIsGuest()) {
                    TongyongPageDef.ins.alertRecharge("您选择了游客模式登录游戏，由于该模式下的游戏数据(包括付费数据)在删除游戏、更换设备后将被清空！对此造成的损失，本平台将不承担任何责任。为了您的虚拟财产安全，我们强烈建议您先绑定手机！", function () { }, function () { }, true, PathGameTongyong.ui_tongyong_general + "btn_qd.png");
                    return true;
                }
                return false;
            };
            ElslpMapPage.prototype.resetAll = function () {
                Laya.Tween.clearAll(this);
                Laya.timer.clearAll(this);
                this.clearClips();
                this.resetUI();
                this.resetData();
                this._game.sceneObjectMgr.clearOfflineObject();
                Laya.timer.clear(this, this.kuangShanShuo);
            };
            ElslpMapPage.prototype.onUpdateGameNo = function () {
                var gameNo = this._elslpMapInfo.GetGameNo();
                if (gameNo) {
                    this._viewUI.txt_id.visible = true;
                    this._viewUI.txt_id.text = "牌局号：" + gameNo;
                }
            };
            ElslpMapPage.prototype.onUpdateCountDown = function () {
                if (!this._elslpMapInfo)
                    return;
                this._countDown = this._elslpMapInfo.GetCountDown();
            };
            ElslpMapPage.prototype.onUpdateRecord = function () {
                if (!this._elslpMapInfo)
                    return;
                var recordArr = [];
                var newRecordArr = [];
                var gameRecord = this._elslpMapInfo.GetGameRecord();
                if (gameRecord != "") {
                    recordArr = JSON.parse(gameRecord);
                }
                if (recordArr.length > 10) {
                    for (var i = recordArr.length - 10; i < recordArr.length; i++) {
                        newRecordArr.push(recordArr[i] + 1);
                    }
                }
                else {
                    for (var i = 0; i < recordArr.length; i++) {
                        newRecordArr.push(recordArr[i] + 1);
                    }
                }
                this._viewUI.list_record.dataSource = newRecordArr;
            };
            ElslpMapPage.prototype.onUpdateBetWin = function () {
                if (!this._elslpMapInfo)
                    return;
                var roadRecord = this._elslpMapInfo.GetRoadRecord();
                if (roadRecord != "") {
                    this._betWinArea = JSON.parse(roadRecord);
                }
            };
            ElslpMapPage.prototype.onUpdateSeatedList = function (qifu_index) {
                var _this = this;
                if (!this._elslpMapInfo)
                    return;
                var seatedList = this._elslpMapInfo.GetSeatedList();
                if (seatedList != "") {
                    this._unitSeated = JSON.parse(seatedList);
                }
                if (!this._unitSeated.length) {
                    return;
                }
                var _loop_2 = function (i) {
                    var unitIndex = this_2._unitSeated[i][0];
                    var unit = this_2._game.sceneObjectMgr.getUnitByIdx(unitIndex);
                    if (unit) {
                        this_2._seatUIList[i].txt_name.text = getMainPlayerName(unit.GetName());
                        this_2._seatUIList[i].txt_money.text = EnumToString.getPointBackNum(unit.GetMoney(), 2).toString();
                        this_2._seatUIList[i].txt_name.fontSize = 15;
                        var unitHeadImg = unit.GetHeadImg();
                        if (unitHeadImg) {
                            this_2._seatUIList[i].img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unitHeadImg + ".png";
                        }
                        this_2._seatUIList[i].img_txk.visible = unit.GetVipLevel() > 0;
                        if (this_2._seatUIList[i].img_txk.visible) {
                            this_2._seatUIList[i].img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + unit.GetVipLevel() + ".png";
                        }
                        //祈福成功 头像上就有动画
                        if (qifu_index && unitIndex == qifu_index) {
                            this_2._seatUIList[i].qifu_type.visible = true;
                            this_2._seatUIList[i].qifu_type.skin = this_2._qifuTypeImgUrl;
                            this_2.playTween1(this_2._seatUIList[i].qifu_type, qifu_index);
                        }
                        //时间戳变化 才加上祈福标志
                        if (unit.GetQiFuEndTime() > this_2._game.sync.serverTimeBys) {
                            if (qifu_index && unitIndex == qifu_index) {
                                Laya.timer.once(2500, this_2, function () {
                                    _this._seatUIList[i].img_qifu.visible = true;
                                    if (unit.GetQiFuType()) {
                                        var qifuImgUrl = _this._nameStrInfo[unit.GetQiFuType() - 1];
                                        _this._seatUIList[i].img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + qifuImgUrl + ".png";
                                    }
                                });
                            }
                            else {
                                this_2._seatUIList[i].img_qifu.visible = true;
                                if (unit.GetQiFuType()) {
                                    var qifuImgUrl = this_2._nameStrInfo[unit.GetQiFuType() - 1];
                                    this_2._seatUIList[i].img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + qifuImgUrl + ".png";
                                }
                            }
                        }
                        else {
                            this_2._seatUIList[i].img_qifu.visible = false;
                        }
                    }
                    else {
                        this_2._seatUIList[i].txt_name.text = "";
                        this_2._seatUIList[i].txt_money.text = "点击入座";
                        this_2._seatUIList[i].txt_name.fontSize = 20;
                        this_2._seatUIList[i].img_icon.skin = PathGameTongyong.ui_tongyong_general + "tu_weizi.png";
                        this_2._seatUIList[i].img_qifu.visible = false;
                        this_2._seatUIList[i].qifu_type.visible = false;
                        this_2._seatUIList[i].img_txk.visible = false;
                    }
                };
                var this_2 = this;
                for (var i = 0; i < this._seatUIList.length; i++) {
                    _loop_2(i);
                }
            };
            //显示结算界面
            ElslpMapPage.prototype.showSettleInfo = function () {
                var myBet = this._betMainTotal;
                var allBet = this._betAllTotal;
                var myBenefit = this._mainPlayerBenefit;
                var bankerBenefit = this._elslpMapInfo.GetBankerBenefit();
                this._pageHandle.pushOpen({
                    id: TongyongPageDef.PAGE_TONGYONG_SETTLE,
                    dataSource: { myBet: myBet, myBenefit: myBenefit, lottery: this._lottery },
                    parent: this._game.uiRoot.HUD
                });
            };
            //初始化UI界面
            ElslpMapPage.prototype.initView = function () {
                this._viewUI.box_menu.y = -290;
                this._viewUI.box_menu.zOrder = 99;
                this._viewUI.box_menu.visible = false;
                this._areaList = [];
                this._chipUIList = [];
                this._seatUIList = [];
                this._chipGuangUIList = [];
                this._areaKuangUIList = [];
                this._txtBetUIList = [];
                this._htmlTextArr = [];
                for (var i = 0; i < MAX_POS; i++) {
                    this._areaList.push(this._viewUI["area" + i]);
                    this._areaList[i].on(LEvent.CLICK, this, this.onAreaBetClick, [i]);
                    this._areaKuangUIList.push(this._viewUI["kuang" + i]);
                    this._txtBetUIList.push(this._viewUI["txt_main" + i]);
                    this._txtBetUIList[i].text = "";
                    this._areaKuangUIList[i].visible = false;
                    this._chipTotalList[i] = [];
                    this._betMainList[i] = 0;
                    this._betTotalList[i] = 0;
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
                this._viewUI.list_record.itemRender = this.createChildren("game_ui.eluosizhuanpan.component.AnNiu1UI", MapRecordRender);
                this._viewUI.list_record.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_record.dataSource = [];
                if (!this._htmlText) {
                    this._htmlText = TextFieldU.createHtmlText(this._viewUI.txt_online);
                }
                //主玩家UI
                this._viewUI.main_player.clip_money.visible = false;
                //界面UI
                this._viewUI.txt_id.visible = false;
                this._viewUI.box_time.visible = false;
                this._viewUI.btn_repeat.disabled = true;
            };
            ElslpMapPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            ElslpMapPage.prototype.initRoomConfig = function () {
                var maplv = this._elslpMapInfo.GetMapLevel();
                if (maplv && ALL_GAME_ROOM_CONFIG_ID.indexOf(maplv) != -1) {
                    this._chipArr = ROOM_CHIP_CONFIG[maplv];
                    this._robotConfig = ROBOT_NUM_CONFIG[maplv];
                    this._seatlimit = MONEY_LIMIT_CONFIG[maplv][1];
                    this._betlimit = MONEY_LIMIT_CONFIG[maplv][2];
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
            //重置UI
            ElslpMapPage.prototype.resetUI = function () {
                //主玩家UI
                this._viewUI.main_player.clip_money.visible = false;
                //界面UI
                for (var i = 0; i < MAX_POS; i++) {
                    this._txtBetUIList[i].text = "";
                }
            };
            ElslpMapPage.prototype.resetData = function () {
                this._battleIndex = -1;
                for (var i = 0; i < MAX_POS; i++) {
                    this._chipTotalList[i] = [];
                    this._betMainList[i] = 0;
                    this._betTotalList[i] = 0;
                }
                this._betMainTotal = 0;
                this._betAllTotal = 0;
                this._mainPlayerBenefit = 0;
                this._lottery = "";
                this._rewardNumber = "";
            };
            ElslpMapPage.prototype.clearMapInfoListen = function () {
                this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
                this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_GAME_NO, this, this.onUpdateGameNo); //牌局号
                this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown); //倒计时时间戳更新
                this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord); //游戏记录更新
                this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_SEATED_LIST, this, this.onUpdateSeatedList); //入座列表更新
                this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_BET_WIN_AREA, this, this.onUpdateBetWin); //本局中奖区域
                this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
            };
            ElslpMapPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_spread.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_back.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_rule.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_set.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_zhanji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_repeat.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_playerList.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_record.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_chong.off(LEvent.CLICK, this, this.onBtnClickWithTween);
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
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
                    this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                    this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_GAME_NO, this, this.onUpdateGameNo); //牌局号
                    this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown); //倒计时时间戳更新
                    this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord); //游戏记录更新
                    this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_SEATED_LIST, this, this.onUpdateSeatedList); //入座列表更新
                    this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_BET_WIN_AREA, this, this.onUpdateBetWin); //本局中奖区域
                    this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                    this._game.uiRoot.HUD.close(page_1.ElslpPageDef.PAGE_ELSLP_BEGIN);
                    this._game.uiRoot.HUD.close(page_1.ElslpPageDef.PAGE_ELSLP_END);
                    this.resetAll();
                    this._elslpStory && this._elslpStory.clear();
                    this._game.stopAllSound();
                    this._game.stopMusic();
                }
                _super.prototype.close.call(this);
            };
            return ElslpMapPage;
        }(game.gui.base.Page));
        page_1.ElslpMapPage = ElslpMapPage;
        //按钮颜色
        var NUMBER_SKIN = ["zs_lv", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui",
            "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen",
            "zs_hui", "zs_fen", "zs_hui", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen"];
        var MapRecordRender = /** @class */ (function (_super) {
            __extends(MapRecordRender, _super);
            function MapRecordRender() {
                return _super.call(this) || this;
            }
            MapRecordRender.prototype.setData = function (game, data) {
                this._game = game;
                this._data = data;
                if (!this._data) {
                    this.visible = false;
                    return;
                }
                this.visible = true;
                var count = this._data - 1;
                this.txt_count.text = count.toString();
                this.ing_type.skin = Path_game_elslp.ui_elslp + NUMBER_SKIN[count] + ".png";
            };
            MapRecordRender.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            return MapRecordRender;
        }(ui.game_ui.eluosizhuanpan.component.AnNiu1UI));
    })(page = gameelslp.page || (gameelslp.page = {}));
})(gameelslp || (gameelslp = {}));
//# sourceMappingURL=ElslpMapPage.js.map