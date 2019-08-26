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
* 红黑大战地图
*/
var gamehonghei;
(function (gamehonghei) {
    var page;
    (function (page_1) {
        var TextFieldU = utils.TextFieldU;
        var PLAYER_LEAST_MONEY = 50; // 投注最少携带金额
        var ALL_GAME_ROOM_CONFIG_ID = [101, 102, 103, 104]; // 可进入的maplv
        //房间配置
        var MONEY_LIMIT_CONFIG = {
            "101": [5000, 2000, 5000],
            "102": [20000, 5000, 8000],
            "103": [50000, 10000, 25000],
            "104": [100000, 20000, 50000],
        };
        //房间下注选择筹码
        var ROOM_CHIP_CONFIG = {
            "101": [1, 10, 50, 100, 1000],
            "102": [10, 50, 100, 500, 1000],
            "103": [50, 100, 500, 1000, 5000],
            "104": [100, 500, 1000, 5000, 10000],
        };
        //机器人配置
        var ROBOT_NUM_CONFIG = {
            "101": [100, 150, 200, 300],
            "102": [70, 100, 130, 200],
            "103": [30, 60, 100, 150],
            "104": [10, 30, 60, 90],
        };
        var HongheiMapPage = /** @class */ (function (_super) {
            __extends(HongheiMapPage, _super);
            function HongheiMapPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._mainPlayerBenefit = 0; //玩家收益
                _this._betMainTotal = 0; //玩家总下注
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
                _this._chipTotalList = [[], [], [], [], [], [], []]; //区域绘制筹码集合
                _this._betTotalList = [0, 0, 0, 0, 0, 0, 0]; //区域下注总额集合（所有玩家）
                _this._betMainList = [0, 0, 0, 0, 0, 0, 0]; //区域下注总额集合（主玩家）
                _this._rebetList = [0, 0, 0, 0, 0, 0, 0]; //重复下注列表(7个区域)
                _this._mainHeadPos = [[0, 0], [0, -10]]; //主玩家座位头像初始位置
                _this._headStartPos = [[0, 0], [0, 148], [0, 296], [0, 0], [0, 148], [0, 296]]; //座位头像初始位置
                _this._headEndPos = [[10, 0], [10, 148], [10, 296], [-10, 0], [-10, 148], [-10, 296]]; //座位头像移动位置
                _this._resultArry = [];
                _this._diff = 500;
                _this._timeList = {};
                _this._firstList = {};
                _this._timeList1 = {};
                _this._firstList1 = {};
                _this._nameStrInfo = ["xs", "px", "gsy", "gg", "cs", "tdg"];
                //战斗结构体更新
                _this._battleIndex = -1;
                _this.areaName = ["红", "黑", "对8以上", "顺子", "金花", "顺金", "豹子"];
                //下注
                _this._betWait = false;
                _this._isNeedDuang = false;
                _this._delta = 1000;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    Path_game_honghei.atlas_game_ui + "honghei.atlas",
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
            HongheiMapPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.honghei.HongHeiUI');
                this.addChild(this._viewUI);
                this.initView();
                if (!this._pageHandle) {
                    this._pageHandle = PageHandle.Get("HongheiMapPage"); //额外界面控制器
                }
                this._hongheiStory = this._game.sceneObjectMgr.story;
                if (this._hongheiStory) {
                    this._hongheiMgr = this._hongheiStory.hongheiMgr;
                    if (this._hongheiMgr) {
                        this._hongheiMgr.on(HongheiMgr.DEAL_OVER, this, this.onUpdateAniDeal);
                        this._hongheiMgr.on(HongheiMgr.OPEN_OVER, this, this.onOpenCardOver);
                        this._hongheiMgr.on(HongheiMgr.OPEN_OVER1, this, this.onOpenCardOver1);
                    }
                    this.onUpdateMapInfo();
                }
                this._viewUI.mouseThrough = true;
                this._game.playMusic(Path_game_honghei.music_honghei + "honghei_bgm.mp3");
            };
            // 页面打开时执行函数
            HongheiMapPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_spread.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rule.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zhanji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_repeat.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_playerList.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_road.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chongzhi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(HongheiMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
                this._game.sceneObjectMgr.on(HongheiMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                // this._game.sceneObjectMgr.on(HongheiMapInfo.EVENT_GAME_NO, this, this.onUpdateGameNo);//牌局号
                this._game.sceneObjectMgr.on(HongheiMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown); //倒计时时间戳更新
                this._game.sceneObjectMgr.on(HongheiMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord); //游戏记录更新
                this._game.sceneObjectMgr.on(HongheiMapInfo.EVENT_SEATED_LIST, this, this.onUpdateSeatedList); //入座列表更新
                this._game.sceneObjectMgr.on(HongheiMapInfo.EVENT_CARD_RECORD, this, this.onUpdateCardRecord); //牌型更新
                this._game.sceneObjectMgr.on(HongheiMapInfo.EVENT_STATUS_CHECK, this, this.initRoomConfig); //地图传送参数
                this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this.onUpdateUnitOffline();
                this.onUpdateSeatedList();
            };
            //帧间隔心跳
            HongheiMapPage.prototype.deltaUpdate = function () {
                var bool = this._curStatus == 4 /* PLAY_STATUS_BET */ || this._curStatus == 7 /* PLAY_STATUS_SETTLE */;
                if (!bool)
                    return;
                if (!this._hongheiMapInfo)
                    return;
                var curTime = this._game.sync.serverTimeBys;
                var time = Math.floor(this._countDown - curTime);
                this._viewUI.box_time.visible = time > 0;
                this._viewUI.box_time.txt_time.text = time.toString();
                this._viewUI.box_time.ani1.gotoAndStop(24);
                if (this._curStatus == 4 /* PLAY_STATUS_BET */) {
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
            HongheiMapPage.prototype.onUnitAdd = function (u) {
                this.onUpdateUnit();
            };
            //玩家出去了
            HongheiMapPage.prototype.onUnitRemove = function (u) {
                this.onUpdateUnit();
            };
            HongheiMapPage.prototype.onUpdateAniDeal = function () {
                this._viewUI.ani_deal.ani1.stop();
                this._viewUI.ani_deal.visible = false;
            };
            HongheiMapPage.prototype.onSeeCardOver = function (index) {
                if (index == 1) {
                    this._viewUI.kaipaiHong.ani_kaipai.stop();
                    this._viewUI.kaipaiHong.visible = false;
                    this._hongheiMgr.showcard(index);
                    var url = Path_game_honghei.ui_honghei + "brnntype_normal_{0}.png";
                    this._viewUI.box_hei.visible = true;
                    var cardType = this._resultArry[7] == 6 ? 0 : this._resultArry[7];
                    this._viewUI.img_card1Type.skin = StringU.substitute(url, cardType);
                    this._game.playSound(StringU.substitute(Path_game_honghei.music_honghei + "type{0}.mp3", cardType), false);
                }
                else {
                    this._viewUI.kaipaiHei.ani_kaipai.stop();
                    this._viewUI.kaipaiHei.visible = false;
                    this._hongheiMgr.showcard(index);
                    var url = Path_game_honghei.ui_honghei + "brnntype_normal_{0}.png";
                    this._viewUI.box_hong.visible = true;
                    var cardType = this._resultArry[8] == 6 ? 0 : this._resultArry[8];
                    this._viewUI.img_card2Type.skin = StringU.substitute(url, cardType);
                    this._game.playSound(StringU.substitute(Path_game_honghei.music_honghei + "type{0}.mp3", cardType), false);
                }
            };
            HongheiMapPage.prototype.onUpdateMapInfo = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._hongheiMapInfo = mapinfo;
                if (mapinfo) {
                    this.initRoomConfig();
                    this.onUpdateBattle();
                    this.onUpdateRecord();
                    this.onUpdateCardRecord();
                    this.onUpdateStatus();
                    this.updateOnline();
                    if (!this._hongheiMgr.isReconnect) {
                        this._viewUI.ani_deal.ani1.stop();
                        this._viewUI.ani_deal.visible = false;
                    }
                }
            };
            HongheiMapPage.prototype.onUpdateChipGrey = function () {
                if (!this._game.sceneObjectMgr.mainUnit)
                    return;
                var money = this._game.sceneObjectMgr.mainUnit.GetMoney();
                for (var i = 0; i < this._chipUIList.length; i++) {
                    var index = this._chipUIList.length - 1 - i;
                    if (money < this._chipArr[index]) {
                        this._chipUIList[index].disabled = true;
                        this._chipUIList[index].y = this._curChipY;
                        if (this._curChip == this._chipArr[index]) {
                        }
                    }
                    else {
                        this._chipUIList[index].disabled = false;
                    }
                }
            };
            HongheiMapPage.prototype.onUpdateUnitOffline = function () {
                var mainPlayer = this._game.sceneObjectMgr.mainPlayer;
                if (!mainPlayer)
                    return;
                var mainPlayerInfo = mainPlayer.playerInfo;
                this._viewUI.main_player.txt_name.text = getMainPlayerName(mainPlayerInfo.nickname);
                this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + mainPlayerInfo.headimg + ".png";
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
            HongheiMapPage.prototype.onUpdateUnit = function (qifu_index) {
                var _this = this;
                if (!this._hongheiMapInfo)
                    return;
                var battleInfoMgr = this._hongheiMapInfo.battleInfoMgr;
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
            HongheiMapPage.prototype.playTween = function (img, index, isTween) {
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
            HongheiMapPage.prototype.playTween1 = function (img, index, isTween) {
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
            HongheiMapPage.prototype.onOptHandler = function (optcode, msg) {
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
            //更新在线人数
            HongheiMapPage.prototype.updateOnline = function () {
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
            HongheiMapPage.prototype.updateMoney = function () {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (mainUnit) {
                    var money = EnumToString.getPointBackNum(mainUnit.GetMoney(), 2);
                    this._viewUI.main_player.txt_money.text = money.toString();
                }
            };
            HongheiMapPage.prototype.onUpdateBattle = function () {
                if (!this._hongheiMapInfo)
                    return;
                var battleInfoMgr = this._hongheiMapInfo.battleInfoMgr;
                if (!battleInfoMgr)
                    return;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var info = battleInfoMgr.info[i];
                    if (info instanceof gamecomponent.object.BattleInfoDeal) {
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            this._cardsArr = this._cardsArr.concat(info);
                        }
                    }
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
                    if (info instanceof gamecomponent.object.BattleLogCardsResult) {
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            this._resultArry = info.Results;
                            this.onBattleResult(info);
                        }
                    }
                }
            };
            //战斗日志来更新桌面上的筹码
            HongheiMapPage.prototype.onBattleBet = function (info, index) {
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
                        this.moveHead(this._viewUI.btn_playerList, 67, 661, 77, 651);
                    }
                }
                targetIdx = info.BetIndex;
                var type = this._chipArr.indexOf(info.BetVal) + 1;
                this.createChip(startIdx, targetIdx, type, info.BetVal, index, info.SeatIndex);
                this.updateChipOnTable(targetIdx - 1, info.BetVal, isMainPlayer);
            };
            //头像出筹码动态效果
            HongheiMapPage.prototype.moveHead = function (view, startX, startY, endX, endY) {
                Laya.Tween.clearAll(view);
                Laya.Tween.to(view, { x: endX, y: endY }, 150, null, Handler.create(this, function () {
                    Laya.Tween.to(view, { x: startX, y: startY }, 150);
                }));
            };
            HongheiMapPage.prototype.updateChipOnTable = function (index, bet, isMainPlayer) {
                if (isMainPlayer) {
                    this._betMainList[index] += bet;
                    this._betMainTotal += bet;
                }
                this._betTotalList[index] += bet;
                this.updateBetNum();
            };
            HongheiMapPage.prototype.updateBetNum = function () {
                for (var i = 0; i < 7; i++) {
                    if (i < 3) {
                        this._htmlTextArr[i].innerHTML = StringU.substitute("<span style='color:#ffd200'>{0}</span><span style='color:#ffffff'>/{1}</span>", this._betMainList[i], this._betTotalList[i]);
                    }
                    else {
                        this._txtTotalUIList[i].text = this._betTotalList[i];
                    }
                }
                for (var i = 0; i < 4; i++) {
                    this._txtBetUIList[i].text = this._betMainList[i + 3];
                }
            };
            //创建筹码
            HongheiMapPage.prototype.createChip = function (startIdx, targetIdx, type, value, index, unitIndex) {
                var _this = this;
                var chip = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CHIP_MARK, HongheiChip);
                chip.setData(startIdx, targetIdx, type, value, index, unitIndex);
                this._chipTotalList[targetIdx - 1].push(chip);
                if (this._hongheiMgr.isReconnect && this._curStatus != 4 /* PLAY_STATUS_BET */) {
                    chip.drawChip();
                }
                else {
                    Laya.timer.once(350, this, function () {
                        chip.sendChip();
                        _this._game.playSound(Path_game_honghei.music_honghei + "chouma.mp3", false);
                    });
                }
                this._chipSortScore = index; //存下来最后一个筹码层级
            };
            //庄家飞筹码去输的区域
            HongheiMapPage.prototype.bankerFlyChip = function (startIdx, targetIdx, type, value, index, unitIndex) {
                var chip = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CHIP_MARK, HongheiChip);
                chip.setData(startIdx, targetIdx, type, value, index, unitIndex);
                this._chipTotalList[targetIdx - 1].push(chip);
                Laya.timer.once(350, this, function () {
                    chip.sendChip();
                });
            };
            HongheiMapPage.prototype.onBattleSettle = function (info) {
                if (!this._game.sceneObjectMgr.mainUnit)
                    return;
                if (this._game.sceneObjectMgr.mainUnit.GetIndex() == info.SeatIndex) {
                    this._mainPlayerBenefit = parseFloat(info.SettleVal);
                }
                if (info.SettleVal == 0)
                    return;
                this.addMoneyClip(info.SeatIndex, info.SettleVal);
            };
            HongheiMapPage.prototype.onBattleResult = function (info) {
                for (var i = 0; i < info.Results.length; i++) {
                    if (i < this.areaName.length) {
                        //中奖区域
                        if (info.Results[i] == 0) {
                            if (!this._lottery) {
                                this._lottery = this.areaName[i];
                            }
                            else {
                                this._lottery += " , " + this.areaName[i];
                            }
                        }
                    }
                }
            };
            //结算飘筹码
            HongheiMapPage.prototype.flyChipEffect = function () {
                var _this = this;
                if (!this._resultArry.length)
                    return;
                var location = this._resultArry[0] == 0 ? 2 : 9;
                var _loop_1 = function (i) {
                    var chipArr = [];
                    chipArr = this_1._chipTotalList[i];
                    //玩家输了
                    if (this_1._resultArry[i] == 1) {
                        this_1._game.playSound(Path_game_honghei.music_honghei + "piaoqian.mp3", false);
                        for (var j = 0; j < chipArr.length; j++) {
                            var chip = chipArr[j];
                            //庄家先收筹码
                            chip.flyChip(location, false, j, this_1._game);
                        }
                    }
                    else {
                        this_1._areaKuangUIList[i].visible = true;
                        Laya.timer.once(3000, this_1, function () {
                            _this._areaKuangUIList[i].visible = false;
                        });
                        Laya.timer.once(800, this_1, function () {
                            _this._game.playSound(Path_game_honghei.music_honghei + "piaoqian.mp3", false);
                            for (var j = 0; j < 20; j++) {
                                var ranType = MathU.randomRange(1, 5);
                                var ranVal = _this._chipArr[ranType - 1];
                                _this._chipSortScore++;
                                _this.bankerFlyChip(location, i + 1, ranType, ranVal, _this._chipSortScore, -1);
                            }
                        });
                        Laya.timer.once(2000, this_1, function () {
                            _this._game.playSound(Path_game_honghei.music_honghei + "piaoqian.mp3", false);
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
            //显示结算界面
            HongheiMapPage.prototype.showSettleInfo = function () {
                if (!this._resultArry.length)
                    return;
                var myBenefit = 0;
                if (this._mainPlayerBenefit) {
                    myBenefit = this._mainPlayerBenefit;
                }
                this._pageHandle.pushOpen({
                    id: TongyongPageDef.PAGE_TONGYONG_SETTLE,
                    dataSource: { myBet: this._betMainTotal, myBenefit: this._mainPlayerBenefit, lottery: this._lottery },
                    parent: this._game.uiRoot.HUD
                });
            };
            //开牌结束(开始播放搓牌动作)
            HongheiMapPage.prototype.onOpenCardOver = function () {
                var _this = this;
                var _loop_2 = function (i) {
                    Laya.timer.once(1800 * i, this_2, function () {
                        _this.onBattleDeal(_this._cardsArr[i]);
                    });
                };
                var this_2 = this;
                for (var i = 0; i < this._cardsArr.length; i++) {
                    _loop_2(i);
                }
            };
            //开牌结束(不播放搓牌动作)
            HongheiMapPage.prototype.onOpenCardOver1 = function () {
                if (!this._resultArry.length)
                    return;
                this._viewUI.kaipaiHong.ani_kaipai.stop();
                this._viewUI.kaipaiHong.visible = false;
                this._hongheiMgr.showcard(1);
                var url = Path_game_honghei.ui_honghei + "brnntype_normal_{0}.png";
                this._viewUI.box_hei.visible = true;
                this._viewUI.img_card1Type.skin = StringU.substitute(url, this._resultArry[7] == 6 ? 0 : this._resultArry[7]);
                this._viewUI.kaipaiHei.ani_kaipai.stop();
                this._viewUI.kaipaiHei.visible = false;
                this._hongheiMgr.showcard(2);
                this._viewUI.box_hong.visible = true;
                this._viewUI.img_card2Type.skin = StringU.substitute(url, this._resultArry[8] == 6 ? 0 : this._resultArry[8]);
            };
            HongheiMapPage.prototype.onBattleDeal = function (info) {
                var cards = this._hongheiMgr.initCard(info.Cards);
                if (info.SeatIndex == 1) {
                    this._viewUI.kaipaiHong.card.skin = StringU.substitute(PathGameTongyong.ui_tongyong_pai + "{0}.png", info.Cards[2]);
                    this._viewUI.kaipaiHong.visible = true;
                    this._viewUI.kaipaiHong.ani_kaipai.play(0, false);
                }
                else {
                    this._viewUI.kaipaiHei.card.skin = StringU.substitute(PathGameTongyong.ui_tongyong_pai + "{0}.png", info.Cards[2]);
                    this._viewUI.kaipaiHei.visible = true;
                    this._viewUI.kaipaiHei.ani_kaipai.play(0, false);
                }
                this._hongheiMgr.hidecard(info.SeatIndex);
            };
            //金币变化 飘字clip
            HongheiMapPage.prototype.addMoneyClip = function (index, value) {
                var valueClip = value >= 0 ? new HongheiClip(HongheiClip.ADD_MONEY_FONT) : new HongheiClip(HongheiClip.SUB_MONEY_FONT);
                var preSkin = value >= 0 ? PathGameTongyong.ui_tongyong_general + "tu_jia.png" : PathGameTongyong.ui_tongyong_general + "tu_jian.png";
                valueClip.scale(0.8, 0.8);
                valueClip.anchorX = 0.5;
                valueClip.setText(EnumToString.getPointBackNum(Math.abs(value), 2), true, false, preSkin);
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
            HongheiMapPage.prototype.clearClips = function () {
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
            HongheiMapPage.prototype.onUpdateStatus = function () {
                var _this = this;
                if (!this._hongheiMapInfo)
                    return;
                var mapStatus = this._hongheiMapInfo.GetMapState();
                if (this._curStatus == mapStatus)
                    return;
                this._curStatus = mapStatus;
                this._viewUI.btn_repeat.disabled = this._curStatus != 4 /* PLAY_STATUS_BET */;
                this._viewUI.paixieRight.cards.visible = this._curStatus > 2 /* PLAY_STATUS_WASH_CARD */ || this._curStatus == 5 /* PLAY_STATUS_STOP_BET */;
                this._viewUI.box_status.visible = false;
                switch (this._curStatus) {
                    case 0 /* PLAY_STATUS_NONE */: // 准备阶段
                        break;
                    case 1 /* PLAY_STATUS_GAMESTART */: // 游戏开始
                        this._viewUI.txt_status.text = "";
                        this._viewUI.box_status.visible = true;
                        this._viewUI.clip_status.index = 0;
                        this.resetAll();
                        this._pageHandle.pushOpen({ id: page_1.HongheiPageDef.PAGE_HHDZ_START, parent: this._game.uiRoot.HUD });
                        break;
                    case 2 /* PLAY_STATUS_WASH_CARD */: // 洗牌
                        this.resetAll();
                        this._pageHandle.pushClose({ id: page_1.HongheiPageDef.PAGE_HHDZ_START, parent: this._game.uiRoot.HUD });
                        this._viewUI.txt_status.text = "";
                        this._viewUI.box_status.visible = true;
                        this._viewUI.clip_status.index = 2;
                        this._viewUI.xipai.x = 640;
                        this._viewUI.xipai.y = 310;
                        this._viewUI.xipai.scaleX = 1;
                        this._viewUI.xipai.scaleY = 1;
                        this._viewUI.xipai.alpha = 1;
                        this._viewUI.xipai.rotation = 0;
                        this._viewUI.xipai.visible = true;
                        this._viewUI.xipai.ani_xipai.play(0, false);
                        Laya.timer.once(800, this, function () {
                            Laya.Tween.to(_this._viewUI.xipai, { x: 847, y: 186, alpha: 0, rotation: -30, scaleX: 0.35, scaleY: 0.35 }, 500);
                        });
                        Laya.timer.once(1300, this, function () {
                            _this._viewUI.paixieRight.cards.visible = true;
                            _this._viewUI.paixieRight.ani_chupai.play(0, false);
                        });
                        break;
                    case 3 /* PLAY_STATUS_PUSH_CARD */: // 发牌阶段
                        this._viewUI.txt_status.text = "";
                        this._viewUI.box_status.visible = true;
                        this._viewUI.clip_status.index = 4;
                        this._viewUI.ani_deal.visible = true;
                        this._viewUI.ani_deal.ani1.play(0, true);
                        break;
                    case 4 /* PLAY_STATUS_BET */: // 下注阶段
                        if (Math.floor(this._hongheiMapInfo.GetCountDown() - this._game.sync.serverTimeBys) >= 14) {
                            this._pageHandle.pushOpen({ id: page_1.HongheiPageDef.PAGE_HHDZ_BEGIN, parent: this._game.uiRoot.HUD });
                            this._game.playSound(Path_game_honghei.music_honghei + "dingding_start.mp3");
                            this._game.playSound(Path_game_honghei.music_honghei + "xiazhu_start.mp3");
                        }
                        this.onUpdateSeatedList();
                        this._viewUI.txt_status.text = "";
                        this._viewUI.box_status.visible = true;
                        this._viewUI.clip_status.index = 3;
                        var bool = false;
                        for (var i = 0; i < this._rebetList.length; i++) {
                            if (this._rebetList[i] > 0) {
                                bool = true;
                                break;
                            }
                        }
                        this._viewUI.btn_repeat.disabled = !bool;
                        break;
                    case 5 /* PLAY_STATUS_STOP_BET */: // 停止下注
                        this._pageHandle.pushClose({ id: page_1.HongheiPageDef.PAGE_HHDZ_BEGIN, parent: this._game.uiRoot.HUD });
                        this._pageHandle.pushOpen({ id: page_1.HongheiPageDef.PAGE_HHDZ_END, parent: this._game.uiRoot.HUD });
                        this._viewUI.txt_status.text = "";
                        this._game.playSound(Path_game_honghei.music_honghei + "dingding_end.mp3");
                        this._game.playSound(Path_game_honghei.music_honghei + "xiazhu_end.mp3");
                        break;
                    case 6 /* PLAY_STATUS_SHOW_CARD */: // 开牌阶段
                        this._pageHandle.pushClose({ id: page_1.HongheiPageDef.PAGE_HHDZ_END, parent: this._game.uiRoot.HUD });
                        this._viewUI.txt_status.text = "";
                        this._viewUI.box_status.visible = true;
                        this._viewUI.clip_status.index = 5;
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
                    case 7 /* PLAY_STATUS_SETTLE */: // 结算阶段
                        this.onUpdateSeatedList();
                        this._viewUI.txt_status.text = "";
                        this._viewUI.box_status.visible = true;
                        this._viewUI.clip_status.index = 6;
                        if (Math.floor(this._hongheiMapInfo.GetCountDown() - this._game.sync.serverTimeBys) >= 4) {
                            this.flyChipEffect();
                            if (this._resultArry.length) {
                                Laya.timer.once(500, this, function () {
                                    if (_this._resultArry[0] == 0) {
                                        _this._game.playSound(Path_game_honghei.music_honghei + "win_red.mp3");
                                        _this._game.uiRoot.HUD.open(page_1.HongheiPageDef.PAGE_HHDZ_RESULT, function (page) {
                                            page.dataSource = 1;
                                        });
                                    }
                                    else if (_this._resultArry[1] == 0) {
                                        _this._game.playSound(Path_game_honghei.music_honghei + "win_black.mp3");
                                        _this._game.uiRoot.HUD.open(page_1.HongheiPageDef.PAGE_HHDZ_RESULT, function (page) {
                                            page.dataSource = 0;
                                        });
                                    }
                                });
                            }
                        }
                        Laya.timer.once(1500, this, function () {
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
                    case 8 /* PLAY_STATUS_SETTLE_SHOW */: // 结算结果展示
                        this._pageHandle.pushClose({ id: page_1.HongheiPageDef.PAGE_HHDZ_RESULT, parent: this._game.uiRoot.HUD });
                        if (Math.floor(this._hongheiMapInfo.GetCountDown() - this._game.sync.serverTimeBys) >= 2) {
                            this.showSettleInfo();
                        }
                        //每局重新开始把菜单收起来
                        if (this._viewUI.box_menu.y >= 0) {
                            this._viewUI.box_menu.y = -this._viewUI.box_menu.height;
                            this._viewUI.box_menu.visible = false;
                            this._viewUI.btn_spread.visible = true;
                        }
                        break;
                    case 9 /* PLAY_STATUS_RELAX */: // 休息阶段
                        this._pageHandle.pushClose({ id: TongyongPageDef.PAGE_TONGYONG_SETTLE, parent: this._game.uiRoot.HUD });
                        this._viewUI.clip_status.index = 1;
                        this.resetAll();
                        break;
                }
                this._pageHandle.updatePageHandle(); //更新额外界面的开关状态
                this._pageHandle.reset(); //清空额外界面存储数组
            };
            //按钮缓动回调
            HongheiMapPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_spread: //菜单
                        this.showMenu(true);
                        break;
                    case this._viewUI.btn_playerList: //玩家列表
                        this._game.uiRoot.general.open(page_1.HongheiPageDef.PAGE_HHDZ_PLAYER_LIST);
                        break;
                    case this._viewUI.btn_road: //大路详情
                        this._game.uiRoot.general.open(page_1.HongheiPageDef.PAGE_HHDZ_ZOUSHI);
                        break;
                    case this._viewUI.btn_qifu: //祈福
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU);
                        break;
                    case this._viewUI.btn_rule: //规则
                        this._game.uiRoot.general.open(page_1.HongheiPageDef.PAGE_HHDZ_RULE);
                        break;
                    case this._viewUI.btn_set: //设置
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING);
                        break;
                    case this._viewUI.btn_zhanji: //战绩
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, function (page) {
                            page.dataSource = page_1.HongheiPageDef.GAME_NAME;
                        });
                        break;
                    case this._viewUI.btn_repeat: //重复下注
                        if (this.showIsGuest())
                            return;
                        this.repeatBet();
                        break;
                    case this._viewUI.btn_back: //返回
                        var totalBet = 0;
                        for (var i = 0; i < 7; i++) {
                            totalBet += this._betMainList[i];
                        }
                        if (totalBet && this._hongheiMapInfo && this._hongheiMapInfo.GetPlayState() == 1) {
                            this._game.showTips("游戏尚未结束，请先打完这局哦~");
                            return;
                        }
                        TongyongPageDef.ins.alertClose("honghei", this, this.onClickCancle);
                        break;
                    case this._viewUI.btn_chongzhi: //充值
                        this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                        break;
                    default:
                        break;
                }
            };
            //重复下注
            HongheiMapPage.prototype.repeatBet = function () {
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
                    if (this._betMainList[0] > 0) { //红
                        if (this._rebetList[1] > 0) {
                            this._game.uiRoot.topUnder.showTips("老板，红黑不能同时下注哦~");
                            return;
                        }
                    }
                    if (this._betMainList[1] > 0) { //黑
                        if (this._rebetList[0] > 0) {
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
                                    this._game.network.call_hhdazhan_bet(this._chipArr[j], i + 1);
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
            HongheiMapPage.prototype.onAreaBetClick = function (index, e) {
                var _this = this;
                if (this.showIsGuest())
                    return;
                if (this._curStatus != 4 /* PLAY_STATUS_BET */) {
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
                if (index == 0) { //红
                    if (this._betMainList[1] > 0) {
                        this._game.uiRoot.topUnder.showTips("老板，红黑不能同时下注哦~");
                        return;
                    }
                }
                if (index == 1) { //黑
                    if (this._betMainList[0] > 0) {
                        this._game.uiRoot.topUnder.showTips("老板，红黑不能同时下注哦~");
                        return;
                    }
                }
                var money = this._game.sceneObjectMgr.mainUnit.GetMoney();
                var betBefore = 0;
                for (var i = 0; i < 7; i++) {
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
                this._rebetList[index] += this._curChip;
                this._game.network.call_hhdazhan_bet(this._curChip, index + 1);
            };
            //筹码点击事件
            HongheiMapPage.prototype.onClickChip = function (index, e) {
                if (this._chipArr[index] == this._curChip)
                    return;
                this._game.uiRoot.btnTween(e.currentTarget);
                this.onSelectChip(index);
            };
            //选择筹码
            HongheiMapPage.prototype.onSelectChip = function (index) {
                this._curChip = this._chipArr[index];
                for (var i = 0; i < this._chipUIList.length; i++) {
                    this._chipGuangUIList[i].visible = i == index;
                    this._chipUIList[i].y = i == index ? this._curChipY - 10 : this._curChipY;
                }
            };
            //选择座位入座
            HongheiMapPage.prototype.onSelectSeat = function (index) {
                if (this.showIsGuest())
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                if (mainUnit.GetMoney() < this._seatlimit) {
                    this._game.uiRoot.topUnder.showTips("金币不足");
                    return;
                }
                this._game.network.call_hhdazhan_seated(index + 1);
            };
            HongheiMapPage.prototype.onMouseClick = function (e) {
                if (e.target != this._viewUI.btn_spread) {
                    this.showMenu(false);
                }
            };
            HongheiMapPage.prototype.showMenu = function (isShow) {
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
            HongheiMapPage.prototype.showIsGuest = function () {
                if (this._game.sceneObjectMgr.mainPlayer.IsIsGuest()) {
                    TongyongPageDef.ins.alertRecharge("亲爱的玩家，您正使用游客模式进行游戏，该模式下的游戏数据（包括付费数据）在删除游戏、更换设备后清空！对此造成的损失，本平台将不承担任何责任。为保障您的虚拟财产安全，我们强力建议您绑定手机号升级为正式账号。", function () { }, function () { }, true, PathGameTongyong.ui_tongyong_general + "btn_qd.png");
                    return true;
                }
                return false;
            };
            HongheiMapPage.prototype.resetAll = function () {
                Laya.Tween.clearAll(this);
                Laya.timer.clearAll(this);
                this.clearClips();
                this.resetUI();
                this.resetData();
                this._hongheiMgr.clear();
            };
            HongheiMapPage.prototype.onClickCancle = function () {
                this._game.sceneObjectMgr.leaveStory(true);
                // this.close();
            };
            HongheiMapPage.prototype.onUpdateGameNo = function () {
                var gameNo = this._hongheiMapInfo.GetGameNo();
                if (gameNo) {
                    this._viewUI.txt_id.visible = true;
                    this._viewUI.txt_id.text = "牌局号：" + gameNo;
                }
            };
            HongheiMapPage.prototype.onUpdateCountDown = function () {
                if (!this._hongheiMapInfo)
                    return;
                this._countDown = this._hongheiMapInfo.GetCountDown();
            };
            HongheiMapPage.prototype.onUpdateRecord = function () {
                if (!this._hongheiMapInfo)
                    return;
                var recordArr = [];
                var gameRecord = this._hongheiMapInfo.GetGameRecord();
                if (gameRecord != "") {
                    recordArr = JSON.parse(gameRecord);
                }
                var tempRecord = [];
                var length = recordArr.length;
                var maxlenth = this._viewUI.list_record0.repeatX;
                if (length > maxlenth) {
                    for (var i = 0; i < maxlenth; i++) {
                        tempRecord[i] = recordArr[recordArr.length - maxlenth + i];
                    }
                }
                else {
                    tempRecord = recordArr;
                }
                this._viewUI.list_record0.dataSource = tempRecord;
            };
            HongheiMapPage.prototype.onUpdateCardRecord = function () {
                if (!this._hongheiMapInfo)
                    return;
                var recordArr = [];
                var cardRecord = this._hongheiMapInfo.GetCardRecord();
                if (cardRecord != "") {
                    recordArr = JSON.parse(cardRecord);
                }
                var tempRecord = [];
                var length = recordArr.length;
                var maxlenth = this._viewUI.list_record1.repeatX;
                if (length > maxlenth) {
                    for (var i = 0; i < maxlenth; i++) {
                        tempRecord[i] = recordArr[recordArr.length - maxlenth + i];
                    }
                }
                else {
                    tempRecord = recordArr;
                }
                this._viewUI.list_record1.dataSource = tempRecord;
            };
            HongheiMapPage.prototype.onUpdateSeatedList = function (qifu_index) {
                var _this = this;
                if (!this._hongheiMapInfo)
                    return;
                var seatedList = this._hongheiMapInfo.GetSeatedList();
                if (seatedList != "") {
                    this._unitSeated = JSON.parse(seatedList);
                }
                if (!this._unitSeated.length) {
                    return;
                }
                var _loop_3 = function (i) {
                    var unitIndex = this_3._unitSeated[i][0];
                    var unit = this_3._game.sceneObjectMgr.getUnitByIdx(unitIndex);
                    if (unit) {
                        this_3._seatUIList[i].txt_name.text = getMainPlayerName(unit.GetName());
                        this_3._seatUIList[i].txt_name.fontSize = 15;
                        this_3._seatUIList[i].txt_money.text = EnumToString.getPointBackNum(unit.GetMoney(), 2).toString();
                        var unitHeadImg = unit.GetHeadImg();
                        if (unitHeadImg) {
                            this_3._seatUIList[i].img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unitHeadImg + ".png";
                        }
                        this_3._seatUIList[i].img_txk.visible = unit.GetVipLevel() > 0;
                        if (this_3._seatUIList[i].img_txk.visible) {
                            this_3._seatUIList[i].img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + unit.GetVipLevel() + ".png";
                        }
                        //祈福成功 头像上就有动画
                        if (qifu_index && unitIndex == qifu_index) {
                            this_3._seatUIList[i].qifu_type.visible = true;
                            this_3._seatUIList[i].qifu_type.skin = this_3._qifuTypeImgUrl;
                            this_3.playTween1(this_3._seatUIList[i].qifu_type, qifu_index);
                        }
                        //时间戳变化 才加上祈福标志
                        if (unit.GetQFEndTime(unit.GetQiFuType() - 1) > this_3._game.sync.serverTimeBys) {
                            if (qifu_index && unitIndex == qifu_index) {
                                Laya.timer.once(2500, this_3, function () {
                                    _this._seatUIList[i].img_qifu.visible = true;
                                    if (unit.GetQiFuType()) {
                                        var qifuImgUrl = _this._nameStrInfo[unit.GetQiFuType() - 1];
                                        _this._seatUIList[i].img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + qifuImgUrl + ".png";
                                    }
                                });
                            }
                            else {
                                this_3._seatUIList[i].img_qifu.visible = true;
                                if (unit.GetQiFuType()) {
                                    var qifuImgUrl = this_3._nameStrInfo[unit.GetQiFuType() - 1];
                                    this_3._seatUIList[i].img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + qifuImgUrl + ".png";
                                }
                            }
                        }
                        else {
                            this_3._seatUIList[i].img_qifu.visible = false;
                        }
                    }
                    else {
                        this_3._seatUIList[i].txt_name.text = "";
                        this_3._seatUIList[i].txt_money.text = "点击入座";
                        this_3._seatUIList[i].txt_money.fontSize = 20;
                        this_3._seatUIList[i].img_icon.skin = PathGameTongyong.ui_tongyong_general + "tu_weizi.png";
                        this_3._seatUIList[i].img_qifu.visible = false;
                        this_3._seatUIList[i].qifu_type.visible = false;
                        this_3._seatUIList[i].img_txk.visible = false;
                    }
                };
                var this_3 = this;
                for (var i = 0; i < this._seatUIList.length; i++) {
                    _loop_3(i);
                }
            };
            //初始化UI界面
            HongheiMapPage.prototype.initView = function () {
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
                //下注区域光效和文本
                for (var i = 0; i < 7; i++) {
                    this._areaList.push(this._viewUI["area" + i]);
                    this._areaKuangUIList.push(this._viewUI["kuang" + i]);
                    this._txtTotalUIList.push(this._viewUI["txt_total" + i]);
                    this._areaKuangUIList[i].visible = false;
                    this._areaList[i].on(LEvent.CLICK, this, this.onAreaBetClick, [i]);
                    //下注文本：玩家下注数/总下注数
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
                //玩家下注数文本
                for (var i = 0; i < 4; i++) {
                    this._txtBetUIList.push(this._viewUI["txt_bet" + i]);
                    this._txtBetUIList[i].text = "0";
                }
                //筹码选择区域
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
                //座位
                for (var i = 0; i < 6; i++) {
                    this._seatUIList.push(this._viewUI["seat" + i]);
                    this._seatUIList[i].clip_money.visible = false;
                    this._seatUIList[i].on(LEvent.CLICK, this, this.onSelectSeat, [i]);
                }
                //开牌动作
                this._viewUI.kaipaiHong.visible = false;
                this._viewUI.kaipaiHong.ani_kaipai.stop();
                this._viewUI.kaipaiHong.ani_kaipai.on(LEvent.COMPLETE, this, this.onSeeCardOver, [1]);
                this._viewUI.kaipaiHei.visible = false;
                this._viewUI.kaipaiHei.ani_kaipai.stop();
                this._viewUI.kaipaiHei.ani_kaipai.on(LEvent.COMPLETE, this, this.onSeeCardOver, [2]);
                this._viewUI.list_record0.itemRender = this.createChildren("game_ui.honghei.component.RecordRenderUI", MapRecordRender1);
                this._viewUI.list_record0.renderHandler = new Handler(this, this.renderHandler1);
                this._viewUI.list_record1.itemRender = this.createChildren("game_ui.honghei.component.DuiZi1UI", MapRecordRender2);
                this._viewUI.list_record1.renderHandler = new Handler(this, this.renderHandler2);
                if (!this._htmlText) {
                    this._htmlText = TextFieldU.createHtmlText(this._viewUI.txt_online);
                }
                //主玩家UI
                this._viewUI.main_player.clip_money.visible = false;
                //界面UI
                this._viewUI.txt_id.visible = false;
                this._viewUI.box_time.visible = false;
                this._viewUI.xipai.visible = false;
                this._viewUI.paixieRight.ani_chupai.stop();
                this._viewUI.ani_deal.ani1.stop();
                this._viewUI.ani_deal.visible = false;
                this._viewUI.box_hong.visible = false;
                this._viewUI.box_hei.visible = false;
                this._viewUI.btn_repeat.disabled = true;
            };
            HongheiMapPage.prototype.renderHandler1 = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            HongheiMapPage.prototype.renderHandler2 = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            HongheiMapPage.prototype.initRoomConfig = function () {
                var maplv = this._hongheiMapInfo.GetMapLevel();
                if (maplv && ALL_GAME_ROOM_CONFIG_ID.indexOf(maplv) != -1) {
                    this._chipArr = ROOM_CHIP_CONFIG[maplv];
                    this._seatlimit = MONEY_LIMIT_CONFIG[maplv][1];
                    this._betlimit = MONEY_LIMIT_CONFIG[maplv][2];
                    this._robotConfig = ROBOT_NUM_CONFIG[maplv];
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
            HongheiMapPage.prototype.resetUI = function () {
                //主玩家UI
                this._viewUI.main_player.clip_money.visible = false;
                //界面UI
                for (var i = 0; i < 7; i++) {
                    if (i < 3) {
                        this._htmlTextArr[i].innerHTML = "<span style='color:#ffd200'>0</span><span style='color:#ffffff'>/0</span>";
                    }
                    else {
                        this._txtTotalUIList[i].text = "0";
                    }
                }
                //玩家下注数文本
                for (var i = 0; i < 4; i++) {
                    this._txtBetUIList[i].text = "0";
                }
                this._viewUI.box_hong.visible = false;
                this._viewUI.box_hei.visible = false;
            };
            HongheiMapPage.prototype.resetData = function () {
                this._battleIndex = -1;
                this._cardsArr = [];
                this._resultArry = [];
                for (var i = 0; i < 7; i++) {
                    this._chipTotalList[i] = [];
                }
                this._betTotalList = [0, 0, 0, 0, 0, 0, 0];
                this._betMainList = [0, 0, 0, 0, 0, 0, 0];
                this._mainPlayerBenefit = 0;
                this._betMainTotal = 0;
                this._lottery = "";
                this._hongheiMgr && (this._hongheiMgr.isReconnect = false);
            };
            HongheiMapPage.prototype.close = function () {
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
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(HongheiMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
                    this._game.sceneObjectMgr.off(HongheiMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                    this._game.sceneObjectMgr.off(HongheiMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown); //倒计时时间戳更新
                    this._game.sceneObjectMgr.off(HongheiMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord); //游戏记录更新
                    this._game.sceneObjectMgr.off(HongheiMapInfo.EVENT_SEATED_LIST, this, this.onUpdateSeatedList); //入座列表更新
                    this._game.sceneObjectMgr.off(HongheiMapInfo.EVENT_CARD_RECORD, this, this.onUpdateCardRecord); //牌型更新
                    this._game.sceneObjectMgr.off(HongheiMapInfo.EVENT_STATUS_CHECK, this, this.initRoomConfig); //地图传送参数
                    this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
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
                    this._viewUI.kaipaiHong.ani_kaipai.off(LEvent.COMPLETE, this, this.onSeeCardOver);
                    this._viewUI.kaipaiHei.ani_kaipai.off(LEvent.COMPLETE, this, this.onSeeCardOver);
                    this._viewUI.paixieRight.ani_chupai.stop();
                    this._viewUI.ani_deal.ani1.stop();
                    if (this._hongheiMgr) {
                        this._hongheiMgr.off(HongheiMgr.DEAL_OVER, this, this.onUpdateAniDeal);
                        this._hongheiMgr.off(HongheiMgr.OPEN_OVER, this, this.onOpenCardOver);
                        this._hongheiMgr.off(HongheiMgr.OPEN_OVER1, this, this.onOpenCardOver1);
                    }
                    this._game.uiRoot.HUD.close(page_1.HongheiPageDef.PAGE_HHDZ_BEGIN);
                    this._game.uiRoot.HUD.close(page_1.HongheiPageDef.PAGE_HHDZ_END);
                    this.resetAll();
                    this._hongheiStory && this._hongheiStory.clear();
                    this._game.stopAllSound();
                    this._game.stopMusic();
                    Laya.Tween.clearAll(this);
                    Laya.timer.clearAll(this);
                }
                _super.prototype.close.call(this);
            };
            return HongheiMapPage;
        }(game.gui.base.Page));
        page_1.HongheiMapPage = HongheiMapPage;
        var MapRecordRender1 = /** @class */ (function (_super) {
            __extends(MapRecordRender1, _super);
            function MapRecordRender1() {
                return _super.call(this) || this;
            }
            MapRecordRender1.prototype.setData = function (game, data) {
                this._game = game;
                this._data = data;
                if (this._data != -1 && this._data != 1) {
                    this.visible = false;
                    return;
                }
                this.visible = true;
                this.record.skin = StringU.substitute(Path_game_honghei.ui_honghei + "zs_{0}.png", this._data == 1 ? "0" : "1");
            };
            MapRecordRender1.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            return MapRecordRender1;
        }(ui.game_ui.honghei.component.RecordRenderUI));
        var MapRecordRender2 = /** @class */ (function (_super) {
            __extends(MapRecordRender2, _super);
            function MapRecordRender2() {
                return _super.call(this) || this;
            }
            MapRecordRender2.prototype.setData = function (game, data) {
                this._game = game;
                this._data = data;
                if (!this._data) {
                    this.visible = false;
                    return;
                }
                this.visible = true;
                if (this._data == 1 || this._data == 7) {
                    this.txt_cardType.text = "单张";
                }
                else if (this._data == 2 || this._data == 8) {
                    this.txt_cardType.text = "对子";
                }
                else if (this._data == 3) {
                    this.txt_cardType.text = "顺子";
                }
                else if (this._data == 4) {
                    this.txt_cardType.text = "金花";
                }
                else if (this._data == 5) {
                    this.txt_cardType.text = "顺金";
                }
                else if (this._data == 6) {
                    this.txt_cardType.text = "豹子";
                }
                if (this._data == 1 || this._data == 2 || this._data == 7) {
                    this.img.skin = PathGameTongyong.ui_tongyong_general + "tu_dzdt.png";
                }
                else {
                    this.img.skin = PathGameTongyong.ui_tongyong_general + "tu_dzdt1.png";
                }
            };
            MapRecordRender2.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            return MapRecordRender2;
        }(ui.game_ui.honghei.component.DuiZi1UI));
    })(page = gamehonghei.page || (gamehonghei.page = {}));
})(gamehonghei || (gamehonghei = {}));
//# sourceMappingURL=HongheiMapPage.js.map