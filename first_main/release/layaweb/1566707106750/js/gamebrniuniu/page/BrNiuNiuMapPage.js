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
var gamebrniuniu;
(function (gamebrniuniu) {
    var page;
    (function (page_1) {
        var TextFieldU = utils.TextFieldU;
        var MAX_CARDS_COUNT = 5; // 场上共5副牌
        var PLAYER_LEAST_MONEY = 50; // 投注最少携带金额
        var ROOM_CHIP_CONFIG = {
            "71": [1, 5, 10, 20, 50],
            "72": [1, 10, 20, 50, 100],
            "73": [10, 20, 50, 100, 500],
            "74": [20, 50, 100, 500, 1000],
        };
        var ROBOT_NUM_CONFIG = {
            "71": [100, 150, 200, 300],
            "72": [70, 100, 130, 200],
            "73": [30, 60, 100, 150],
            "74": [10, 30, 60, 90],
        };
        var BrNiuNiuMapPage = /** @class */ (function (_super) {
            __extends(BrNiuNiuMapPage, _super);
            function BrNiuNiuMapPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._mainPlayerBenefit = 0; //玩家收益
                _this._settleInfo = []; //结算信息集合
                _this._areaList = []; //下注区域UI集合
                _this._aniKaiPaiList = []; //开牌动作集合
                _this._areaKuangList = []; //下注区域边框集合
                _this._cardsTypeList = []; //卡牌类型UI集合
                _this._seatUIList = []; //座位UI集合
                _this._chipUIList = []; //筹码UI集合
                _this._chipGuangUIList = []; //筹码光效UI集合
                _this._chipArr = []; //筹码大小类型
                _this._cardsArr = []; //开牌信息集合
                _this._clipList = []; //飘字集合
                _this._resultList = []; //结算结果集合
                _this._chipSortScore = 0; //筹码层级
                _this._chipTian = []; //天所有筹码
                _this._chipDi = []; //地所有筹码
                _this._chipXuan = []; //玄所有筹码
                _this._chipHuang = []; //黄所有筹码
                _this._unitSeated = []; //入座精灵信息集合
                _this._betTotal0 = 0; //天下注总额（所有玩家）
                _this._betTotal1 = 0; //地下注总额（所有玩家）
                _this._betTotal2 = 0; //玄下注总额（所有玩家）
                _this._betTotal3 = 0; //黄下注总额（所有玩家）
                _this._betMain0 = 0; //天下注总额（主玩家）
                _this._betMain1 = 0; //地下注总额（主玩家）
                _this._betMain2 = 0; //玄下注总额（主玩家）
                _this._betMain3 = 0; //黄下注总额（主玩家）
                _this._rebetList = [0, 0, 0, 0]; //重复下注列表
                _this._mainHeadPos = [[0, 0], [0, -10]]; //主玩家座位头像初始位置
                _this._headStartPos = [[0, 0], [0, 158], [0, 316], [0, 0], [0, 158], [0, 316]]; //座位头像初始位置
                _this._headEndPos = [[10, 0], [10, 158], [10, 316], [-10, 0], [-10, 158], [-10, 316]]; //座位头像移动位置
                _this._isFirstOpen = false;
                _this._drawCardType = false;
                _this._betAllTotal = 0;
                _this._betMainTotal = 0;
                _this._isReConnect = true;
                _this._isReDrawChips = true;
                _this._diff = 500;
                _this._timeList = {};
                _this._firstList = {};
                _this._timeList1 = {};
                _this._firstList1 = {};
                _this._nameStrInfo = ["xs", "px", "gsy", "gg", "cs", "tdg"];
                //战斗结构体更新
                _this._battleIndex = -1;
                //天地玄黄下注
                _this._betWait = false;
                _this._isNeedDuang = false;
                _this._delta = 1000;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    Path_game_brniuniu.atlas_game_ui + "brniuniu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "tuichu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/suiji.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/kaipai.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            BrNiuNiuMapPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.brniuniu.BaiRenNNUI');
                this.addChild(this._viewUI);
                this.initView();
                if (!this._pageHandle) {
                    this._pageHandle = PageHandle.Get("BrNiuNiuMapPage"); //额外界面控制器
                }
                this._niuStory = this._game.sceneObjectMgr.story;
                if (this._niuStory) {
                    this._niuMgr = this._niuStory.niuMgr;
                    if (this._niuMgr) {
                        this._niuMgr.on(BrNiuNiuMgr.DEAL_OVER, this, this.onUpdateAniDeal);
                        this._niuMgr.on(BrNiuNiuMgr.SEE_CARD_OVER, this, this.onSeeCardOver);
                    }
                    this.onUpdateMapInfo();
                }
                this._viewUI.mouseThrough = true;
                this._game.playMusic(Path_game_brniuniu.music_brniuniu + "nn_bgm.mp3");
            };
            // 页面打开时执行函数
            BrNiuNiuMapPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_spread.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_cardType.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rule.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chongzhi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zhanji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_repeat.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_playerList.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_shangzhuang.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(BrniuniuMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.on(BrniuniuMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
                this._game.sceneObjectMgr.on(BrniuniuMapInfo.EVENT_GAME_NO, this, this.onUpdateGameNo); //牌局号
                this._game.sceneObjectMgr.on(BrniuniuMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown); //倒计时时间戳更新
                this._game.sceneObjectMgr.on(BrniuniuMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord); //游戏记录更新
                this._game.sceneObjectMgr.on(BrniuniuMapInfo.EVENT_SEATED_LIST, this, this.onUpdateSeatedList); //入座列表更新
                this._game.sceneObjectMgr.on(BrniuniuMapInfo.EVENT_MAP_BANKER_CHANGE, this, this.updateBanker); //地图庄家变更
                this._game.sceneObjectMgr.on(BrniuniuMapInfo.EVENT_SZ_LIST, this, this.updateBanker); //上庄列表更新
                this._game.sceneObjectMgr.on(BrniuniuMapInfo.EVENT_SYSTEM_MONEY_CHANGE, this, this.updateBanker); //系统庄金币更新
                this._game.sceneObjectMgr.on(BrniuniuMapInfo.EVENT_ROAD_RECORD_CHANGE, this, this.updateRoad); //大路信息更新
                this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this.onUpdateRecord();
                this.onUpdateUnitOffline();
                this.onUpdateSeatedList();
            };
            //帧间隔心跳
            BrNiuNiuMapPage.prototype.deltaUpdate = function () {
                var bool = this._curStatus == 3 /* PLAY_STATUS_BET */ || this._curStatus == 7 /* PLAY_STATUS_SETTLE */;
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
            BrNiuNiuMapPage.prototype.onUnitAdd = function (u) {
                this.onUpdateUnit();
            };
            //玩家出去了
            BrNiuNiuMapPage.prototype.onUnitRemove = function (u) {
                this.onUpdateUnit();
            };
            BrNiuNiuMapPage.prototype.onUpdateAniDeal = function () {
                this._viewUI.ani_deal.ani1.stop();
                this._viewUI.ani_deal.visible = false;
            };
            BrNiuNiuMapPage.prototype.onSeeCardOver = function (index) {
                this._aniKaiPaiList[index].ani_kaipai.stop();
                this._aniKaiPaiList[index].visible = false;
                this._cardsTypeList[index].visible = true;
                this._cardsTypeList[index].ani1.play(0, false);
            };
            BrNiuNiuMapPage.prototype.onUpdateMapInfo = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._niuMapInfo = mapinfo;
                if (mapinfo) {
                    this.initRoomConfig();
                    this.updateBanker(0);
                    this.onUpdateBattle();
                    this.onUpdateStatus();
                    this.onUpdateGameNo();
                    this.onUpdateRecord();
                    this.onUpdateSeatedList();
                    this.onUpdateChipGrey();
                    this.updateRoad();
                    if (!this._niuMgr.isReDrawCards) {
                        this._viewUI.ani_deal.ani1.stop();
                        this._viewUI.ani_deal.visible = false;
                    }
                }
            };
            BrNiuNiuMapPage.prototype.onUpdateChipGrey = function () {
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
            BrNiuNiuMapPage.prototype.onUpdateUnitOffline = function () {
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
            BrNiuNiuMapPage.prototype.onUpdateUnit = function (qifu_index) {
                var _this = this;
                if (!this._niuMapInfo)
                    return;
                //主玩家的座位
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (mainUnit) {
                    var headImg = mainUnit.GetHeadImg();
                    this._viewUI.main_player.txt_name.text = getMainPlayerName(mainUnit.GetName());
                    var money = EnumToString.getPointBackNum(mainUnit.GetMoney(), 2);
                    this._viewUI.main_player.txt_money.text = money.toString();
                    if (this._game.sceneObjectMgr.mainUnit.GetIndex() == this._niuMapInfo.GetBankerSeat()) {
                        this._viewUI.btn_repeat.disabled = true;
                    }
                    this.onUpdateChipGrey();
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
                        if (headImg) {
                            this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + headImg + ".png";
                        }
                        this._viewUI.main_player.img_qifu.visible = false;
                    }
                }
                this.updateBanker(0);
                this.onUpdateSeatedList(qifu_index);
                this.updateOnline();
            };
            BrNiuNiuMapPage.prototype.playTween = function (img, index, isTween) {
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
            BrNiuNiuMapPage.prototype.playTween1 = function (img, index, isTween) {
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
            BrNiuNiuMapPage.prototype.onOptHandler = function (optcode, msg) {
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
            BrNiuNiuMapPage.prototype.updateOnline = function () {
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
            BrNiuNiuMapPage.prototype.updateMoney = function () {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (mainUnit) {
                    var money = EnumToString.getPointBackNum(mainUnit.GetMoney(), 2);
                    this._viewUI.main_player.txt_money.text = money.toString();
                }
            };
            BrNiuNiuMapPage.prototype.onUpdateBattle = function () {
                if (!this._niuMapInfo)
                    return;
                var battleInfoMgr = this._niuMapInfo.battleInfoMgr;
                if (!battleInfoMgr)
                    return;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var info = battleInfoMgr.info[i];
                    if (info instanceof gamecomponent.object.BattleInfoDeal) {
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            if (info.SeatIndex == 1)
                                this._bankerCards = this._niuMgr.initCard(info.Cards);
                            this._cardsArr = this._cardsArr.concat(info);
                        }
                        if (info.SeatIndex > 1) {
                            if (this._resultList.length < 4) {
                                var cards = this._niuMgr.initCard(info.Cards);
                                var bankerIsWin = this._niuMgr.bankeriswin(this._bankerCards, cards);
                                this._resultList.push(bankerIsWin);
                            }
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
                }
                if (this._isReConnect && this._curStatus == 8 /* PLAY_STATUS_SHOW_INFO */ && this._betAllTotal > 0) {
                    this.showSettleInfo();
                }
            };
            //战斗日志来更新桌面上的筹码
            BrNiuNiuMapPage.prototype.onBattleBet = function (info, index) {
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
            BrNiuNiuMapPage.prototype.moveHead = function (view, startX, startY, endX, endY) {
                Laya.Tween.clearAll(view);
                Laya.Tween.to(view, { x: endX, y: endY }, 150, null, Handler.create(this, function () {
                    Laya.Tween.to(view, { x: startX, y: startY }, 150);
                }));
            };
            BrNiuNiuMapPage.prototype.updateChipOnTable = function (index, bet, isMainPlayer) {
                if (index == 0) {
                    if (isMainPlayer)
                        this._betMain0 += bet;
                    this._betTotal0 += bet;
                }
                else if (index == 1) {
                    if (isMainPlayer)
                        this._betMain1 += bet;
                    this._betTotal1 += bet;
                }
                else if (index == 2) {
                    if (isMainPlayer)
                        this._betMain2 += bet;
                    this._betTotal2 += bet;
                }
                else if (index == 3) {
                    if (isMainPlayer)
                        this._betMain3 += bet;
                    this._betTotal3 += bet;
                }
                if (isMainPlayer) {
                    this._betMainTotal += bet;
                }
                this._betAllTotal += bet;
                this.updateBetNum();
            };
            BrNiuNiuMapPage.prototype.updateBetNum = function () {
                this._viewUI.txt_total0.text = this._betTotal0.toString();
                this._viewUI.txt_total1.text = this._betTotal1.toString();
                this._viewUI.txt_total2.text = this._betTotal2.toString();
                this._viewUI.txt_total3.text = this._betTotal3.toString();
                this._viewUI.txt_bet0.text = this._betMain0.toString();
                this._viewUI.txt_bet1.text = this._betMain1.toString();
                this._viewUI.txt_bet2.text = this._betMain2.toString();
                this._viewUI.txt_bet3.text = this._betMain3.toString();
            };
            //创建筹码
            BrNiuNiuMapPage.prototype.createChip = function (startIdx, targetIdx, type, value, index, unitIndex) {
                var _this = this;
                var chip = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CHIP_MARK, BrNiuNiuChip);
                chip.setData(startIdx, targetIdx, type, value, index, unitIndex);
                if (targetIdx == 1) {
                    this._chipTian.push(chip);
                }
                else if (targetIdx == 2) {
                    this._chipDi.push(chip);
                }
                else if (targetIdx == 3) {
                    this._chipXuan.push(chip);
                }
                else if (targetIdx == 4) {
                    this._chipHuang.push(chip);
                }
                if (this._isReDrawChips && this._curStatus != 3 /* PLAY_STATUS_BET */) {
                    chip.drawChip();
                }
                else {
                    Laya.timer.once(350, this, function () {
                        chip.sendChip();
                        _this._game.playSound(Path_game_brniuniu.music_brniuniu + "chouma.mp3", false);
                    });
                }
                this._chipSortScore = index; //存下来最后一个筹码层级
            };
            //庄家飞筹码去输的区域
            BrNiuNiuMapPage.prototype.bankerFlyChip = function (startIdx, targetIdx, type, value, index, unitIndex) {
                var chip = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CHIP_MARK, BrNiuNiuChip);
                chip.setData(startIdx, targetIdx, type, value, index, unitIndex);
                if (targetIdx == 1) {
                    this._chipTian.push(chip);
                }
                else if (targetIdx == 2) {
                    this._chipDi.push(chip);
                }
                else if (targetIdx == 3) {
                    this._chipXuan.push(chip);
                }
                else if (targetIdx == 4) {
                    this._chipHuang.push(chip);
                }
                Laya.timer.once(500, this, function () {
                    chip.sendChip();
                });
            };
            BrNiuNiuMapPage.prototype.onBattleSettle = function (info) {
                if (!this._game.sceneObjectMgr.mainUnit)
                    return;
                if (this._game.sceneObjectMgr.mainUnit.GetIndex() == info.SeatIndex) {
                    this._mainPlayerBenefit = parseFloat(info.SettleVal);
                }
                if (info.SettleVal == 0)
                    return;
                this.addMoneyClip(info.SeatIndex, info.SettleVal);
                // this._settleInfo.push(parseFloat(info.SeatIndex));
                // this._settleInfo.push(parseFloat(info.SettleVal));
            };
            BrNiuNiuMapPage.prototype.onReconnectDeal = function () {
                if (this._curStatus >= 6 /* PLAY_STATUS_SHOW_CARD */ && this._curStatus < 9 /* PLAY_STATUS_RELAX */) {
                    for (var j = 0; j < this._cardsArr.length; j++) {
                        var cards = this._niuMgr.initCard(this._cardsArr[j].Cards);
                        var playerIndex = this._cardsArr[j].SeatIndex - 1;
                        var url = Path_game_brniuniu.ui_brniuniu + "brnntype_normal_{0}.png";
                        var url_bg = Path_game_brniuniu.ui_brniuniu + "brnntype_bgimg_{0}.png";
                        var cardType = this._niuMgr.checkCardsType(cards);
                        var bgType = cardType >= 10 ? 4 : cardType >= 1 ? 3 : 1;
                        this._cardsTypeList[playerIndex].img_type.skin = StringU.substitute(url, cardType);
                        this._cardsTypeList[playerIndex].img_type.disabled = cardType == 0;
                        this._cardsTypeList[playerIndex].img_bg.skin = StringU.substitute(url_bg, bgType);
                        this._cardsTypeList[playerIndex].visible = true;
                    }
                    this._drawCardType = true;
                }
            };
            BrNiuNiuMapPage.prototype.onBattleShowCards = function (info) {
                var _this = this;
                var cards = this._niuMgr.initCard(info.Cards);
                var count = info.SeatIndex - 1 == 0 ? 4 : info.SeatIndex - 2;
                var playerIndex = info.SeatIndex - 1;
                if (!this._isReConnect) {
                    Laya.timer.once(count * 1800, this, function () {
                        _this._aniKaiPaiList[playerIndex].card.skin = StringU.substitute(PathGameTongyong.ui_tongyong_pai + "{0}.png", info.Cards[4]);
                        _this._aniKaiPaiList[playerIndex].visible = true;
                        _this._aniKaiPaiList[playerIndex].ani_kaipai.play(0, false);
                        _this._niuMgr.yincang(playerIndex);
                    });
                }
                var url = Path_game_brniuniu.ui_brniuniu + "brnntype_normal_{0}.png";
                var url_bg = Path_game_brniuniu.ui_brniuniu + "brnntype_bgimg_{0}.png";
                var cardType = this._niuMgr.checkCardsType(cards);
                var bgType = cardType >= 10 ? 4 : cardType >= 1 ? 3 : 1;
                this._cardsTypeList[playerIndex].img_type.skin = StringU.substitute(url, cardType);
                this._cardsTypeList[playerIndex].img_type.disabled = cardType == 0;
                this._cardsTypeList[playerIndex].img_bg.skin = StringU.substitute(url_bg, bgType);
                Laya.timer.once(1700 + count * 1800, this, function () {
                    _this._game.playSound(Path_game_brniuniu.music_brniuniu + "" + StringU.substitute("niu{0}_nv.mp3", cardType));
                });
            };
            //结算飘筹码
            BrNiuNiuMapPage.prototype.flyChipEffect = function () {
                var _this = this;
                var _loop_1 = function (i) {
                    var chipArr = [];
                    chipArr = i == 0 ? this_1._chipTian : i == 1 ? this_1._chipDi : i == 2 ? this_1._chipXuan : this_1._chipHuang;
                    if (this_1._resultList[i] == 1) {
                        this_1._game.playSound(Path_game_brniuniu.music_brniuniu + "piaoqian.mp3", false);
                        for (var j = 0; j < chipArr.length; j++) {
                            var chip = chipArr[j];
                            chip.flyChip(2, false, j, this_1._game); //庄家先收筹码
                        }
                    }
                    else {
                        Laya.timer.once(1100, this_1, function () {
                            _this._game.playSound(Path_game_brniuniu.music_brniuniu + "piaoqian.mp3", false);
                            for (var j = 0; j < 20; j++) {
                                var ranType = MathU.randomRange(1, 5);
                                var ranVal = _this._chipArr[ranType - 1];
                                _this._chipSortScore++;
                                _this.bankerFlyChip(2, i + 1, ranType, ranVal, _this._chipSortScore, -1);
                            }
                        });
                        Laya.timer.once(3000, this_1, function () {
                            _this._game.playSound(Path_game_brniuniu.music_brniuniu + "piaoqian.mp3", false);
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
                //遍历四个区域的游戏结果
                for (var i = 0; i < this._resultList.length; i++) {
                    _loop_1(i);
                }
            };
            //金币变化 飘字clip
            BrNiuNiuMapPage.prototype.addMoneyClip = function (index, value) {
                var valueClip = value >= 0 ? new BrniuniuClip(BrniuniuClip.ADD_MONEY_FONT) : new BrniuniuClip(BrniuniuClip.SUB_MONEY_FONT);
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
            BrNiuNiuMapPage.prototype.clearClips = function () {
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
            //清理场景对象
            BrNiuNiuMapPage.prototype.clearObjects = function () {
                this._game.sceneObjectMgr.clearOfflineObject();
                this._chipTian = [];
                this._chipDi = [];
                this._chipXuan = [];
                this._chipHuang = [];
            };
            //更新地图状态
            BrNiuNiuMapPage.prototype.onUpdateStatus = function () {
                var _this = this;
                if (!this._niuMapInfo)
                    return;
                this.initRoomConfig();
                var mapStatus = this._niuMapInfo.GetMapState();
                if (this._curStatus == mapStatus)
                    return;
                this._curStatus = mapStatus;
                this._viewUI.btn_repeat.disabled = this._curStatus != 3 /* PLAY_STATUS_BET */;
                this._viewUI.img_banker.visible = this._curStatus < 5 /* PLAY_STATUS_PUSH_CARD */ || this._curStatus >= 9 /* PLAY_STATUS_RELAX */;
                this._viewUI.box_status.visible = !(this._curStatus == 2 /* PLAY_STATUS_WASH_CARD */ || this._curStatus == 4 /* PLAY_STATUS_STOP_BET */);
                this._viewUI.paixie.cards.visible = this._curStatus >= 2 /* PLAY_STATUS_WASH_CARD */ || this._curStatus == 4 /* PLAY_STATUS_STOP_BET */;
                if (this._game.uiRoot.HUD.isOpened(page_1.BrniuniuPageDef.PAGE_NIUNIU_TONGSHA) && this._curStatus >= 2 /* PLAY_STATUS_WASH_CARD */) {
                    this._pageHandle.pushClose({ id: page_1.BrniuniuPageDef.PAGE_NIUNIU_TONGSHA, parent: this._game.uiRoot.HUD });
                }
                switch (this._curStatus) {
                    case 0 /* PLAY_STATUS_NONE */: // 准备阶段
                        // this._viewUI.txt_status.index = 0;
                        this.resetAll();
                        Laya.Tween.clearAll(this);
                        Laya.timer.clearAll(this);
                        break;
                    case 1 /* PLAY_STATUS_GAMESTART */: // 游戏开始
                        this.resetAll();
                        Laya.Tween.clearAll(this);
                        Laya.timer.clearAll(this);
                        this._viewUI.txt_status.index = 2;
                        this._viewUI.xipai.x = 640;
                        this._viewUI.xipai.y = 310;
                        this._viewUI.xipai.scaleX = 1;
                        this._viewUI.xipai.scaleY = 1;
                        this._viewUI.xipai.alpha = 1;
                        this._viewUI.xipai.rotation = 0;
                        this._viewUI.xipai.visible = true;
                        this._viewUI.xipai.ani_xipai.play(0, false);
                        Laya.timer.once(800, this, function () {
                            Laya.Tween.clearAll(_this._viewUI.xipai);
                            Laya.Tween.to(_this._viewUI.xipai, { x: 922, y: 144, alpha: 0, rotation: -30, scaleX: 0.35, scaleY: 0.35 }, 500);
                        });
                        Laya.timer.once(1300, this, function () {
                            _this._viewUI.paixie.cards.visible = true;
                            _this._viewUI.paixie.ani_chupai.play(0, false);
                        });
                        break;
                    case 2 /* PLAY_STATUS_WASH_CARD */: // 洗牌阶段
                        this.resetAll();
                        this._pageHandle.pushOpen({ id: page_1.BrniuniuPageDef.PAGE_BRNIUNIU_BEGIN, parent: this._game.uiRoot.HUD });
                        this._game.playSound(Path_game_brniuniu.music_brniuniu + "dingding_start.mp3");
                        this._game.playSound(Path_game_brniuniu.music_brniuniu + "xiazhu_start.mp3");
                        break;
                    case 3 /* PLAY_STATUS_BET */: // 下注阶段
                        this._pageHandle.pushClose({ id: page_1.BrniuniuPageDef.PAGE_BRNIUNIU_BEGIN, parent: this._game.uiRoot.HUD });
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
                        if (this._game.sceneObjectMgr.mainUnit) {
                            if (this._game.sceneObjectMgr.mainUnit.GetIndex() == this._niuMapInfo.GetBankerSeat()) {
                                this._viewUI.btn_repeat.disabled = true;
                            }
                        }
                        var _loop_2 = function (i) {
                            this_2._areaKuangList[i].visible = true;
                            this_2._areaKuangList[i].ani1.play(0, true);
                            Laya.timer.once(1000, this_2, function () {
                                _this._areaKuangList[i].ani1.stop();
                            });
                        };
                        var this_2 = this;
                        for (var i = 0; i < this._areaKuangList.length; i++) {
                            _loop_2(i);
                        }
                        break;
                    case 4 /* PLAY_STATUS_STOP_BET */: // 停止下注阶段
                        this._pageHandle.pushOpen({ id: page_1.BrniuniuPageDef.PAGE_BRNIUNIU_END, parent: this._game.uiRoot.HUD });
                        this._game.playSound(Path_game_brniuniu.music_brniuniu + "dingding_end.mp3");
                        this._game.playSound(Path_game_brniuniu.music_brniuniu + "xiazhu_end.mp3");
                        this._isReConnect = false;
                        break;
                    case 5 /* PLAY_STATUS_PUSH_CARD */: // 发牌阶段
                        this._pageHandle.pushClose({ id: page_1.BrniuniuPageDef.PAGE_BRNIUNIU_END, parent: this._game.uiRoot.HUD });
                        this._viewUI.txt_status.index = 4;
                        this._viewUI.ani_deal.visible = true;
                        this._viewUI.ani_deal.ani1.play(0, true);
                        var isBet = this._betMain0 + this._betMain1 + this._betMain2 + this._betMain3 > 0;
                        isBet && (this._rebetList[0] = this._betMain0);
                        isBet && (this._rebetList[1] = this._betMain1);
                        isBet && (this._rebetList[2] = this._betMain2);
                        isBet && (this._rebetList[3] = this._betMain3);
                        this._isReConnect = false;
                        break;
                    case 6 /* PLAY_STATUS_SHOW_CARD */: // 开牌阶段
                        this._viewUI.txt_status.index = 5;
                        for (var i = 0; i < this._cardsArr.length; i++) {
                            var index = i + 1 == this._cardsArr.length ? 0 : i + 1;
                            this.onBattleShowCards(this._cardsArr[index]);
                        }
                        if (this._isReConnect && !this._drawCardType) {
                            this.onReconnectDeal();
                        }
                        break;
                    case 7 /* PLAY_STATUS_SETTLE */: // 结算阶段
                        this.onUpdateSeatedList();
                        this._viewUI.txt_status.index = 6;
                        if (!this._isReConnect) {
                            this.flyChipEffect();
                        }
                        if (this._isReConnect && !this._drawCardType) {
                            this.onReconnectDeal();
                        }
                        // this.updateMoney();
                        Laya.timer.once(1000, this, function () {
                            var isTongSha = true;
                            var isTongPei = true;
                            for (var i = 0; i < _this._resultList.length; i++) {
                                if (_this._resultList[i] == 1) {
                                    isTongPei = false;
                                }
                                if (_this._resultList[i] == -1) {
                                    isTongSha = false;
                                }
                            }
                            if (isTongSha) { //庄家通杀
                                _this._game.playSound(Path_game_brniuniu.music_brniuniu + "zjtongchi.mp3", false);
                                _this._pageHandle.pushOpen({ id: page_1.BrniuniuPageDef.PAGE_NIUNIU_TONGSHA, parent: _this._game.uiRoot.HUD });
                            }
                            if (isTongPei) { //庄家通赔
                                // this._game.playSound(Path.music_qzniuniu + "zjtongpei.mp3", false);
                                _this._pageHandle.pushOpen({ id: page_1.BrniuniuPageDef.PAGE_NIUNIU_TONGPEI, parent: _this._game.uiRoot.HUD });
                            }
                            if (!isTongSha) {
                                if (_this._mainPlayerBenefit >= 0) {
                                    var rand = MathU.randomRange(1, 3);
                                    _this._game.playSound(StringU.substitute(PathGameTongyong.music_tongyong + "win{0}.mp3", rand), true);
                                }
                                else if (_this._mainPlayerBenefit < 0) {
                                    var rand = MathU.randomRange(1, 4);
                                    _this._game.playSound(StringU.substitute(PathGameTongyong.music_tongyong + "lose{0}.mp3", rand), true);
                                }
                            }
                        });
                        break;
                    case 8 /* PLAY_STATUS_SHOW_INFO */: // 显示结算信息阶段
                        this._pageHandle.pushClose({ id: page_1.BrniuniuPageDef.PAGE_NIUNIU_TONGSHA, parent: this._game.uiRoot.HUD });
                        this._pageHandle.pushClose({ id: page_1.BrniuniuPageDef.PAGE_NIUNIU_TONGPEI, parent: this._game.uiRoot.HUD });
                        this._viewUI.txt_status.index = 6;
                        if (!this._isReConnect) {
                            this.showSettleInfo();
                        }
                        if (this._isReConnect && !this._drawCardType) {
                            this.onReconnectDeal();
                        }
                        break;
                    case 9 /* PLAY_STATUS_RELAX */: // 休息阶段
                        this._pageHandle.pushClose({ id: page_1.BrniuniuPageDef.PAGE_BRNIUNIU_SETTLE, parent: this._game.uiRoot.HUD });
                        this._viewUI.txt_status.index = 1;
                        this.resetAll();
                        Laya.Tween.clearAll(this);
                        Laya.timer.clearAll(this);
                        break;
                }
                this._pageHandle.updatePageHandle(); //更新额外界面的开关状态
                this._pageHandle.reset(); //清空额外界面存储数组
            };
            //按钮缓动回调
            BrNiuNiuMapPage.prototype.onBtnTweenEnd = function (e, target) {
                var _this = this;
                switch (target) {
                    case this._viewUI.btn_spread:
                        this.showMenu(true);
                        break;
                    case this._viewUI.btn_playerList: //玩家列表
                        this._game.uiRoot.general.open(page_1.BrniuniuPageDef.PAGE_BRNIUNIU_PLAYER_LIST);
                        break;
                    case this._viewUI.btn_qifu: //祈福
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU);
                        break;
                    case this._viewUI.btn_shangzhuang: //申请上庄
                        if (this.showIsGuest())
                            return;
                        this._game.uiRoot.general.open(page_1.BrniuniuPageDef.PAGE_BRNIUNIU_SZ_LIST, function (page) {
                            page.dataSource = _this._szlimit;
                        });
                        break;
                    case this._viewUI.btn_cardType:
                        this._game.uiRoot.general.open(page_1.BrniuniuPageDef.PAGE_BRNIUNIU_RULE, function (page) {
                            page.dataSource = 1;
                        });
                        break;
                    case this._viewUI.btn_rule:
                        this._game.uiRoot.general.open(page_1.BrniuniuPageDef.PAGE_BRNIUNIU_RULE);
                        break;
                    case this._viewUI.btn_chongzhi:
                        this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                        break;
                    case this._viewUI.btn_set:
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING);
                        break;
                    case this._viewUI.btn_zhanji:
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, function (page) {
                            page.dataSource = page_1.BrniuniuPageDef.GAME_NAME;
                        });
                        break;
                    case this._viewUI.btn_repeat:
                        this.repeatBet();
                        break;
                    case this._viewUI.btn_back:
                        var totalBet = this._betMain0 + this._betMain1 + this._betMain2 + this._betMain3;
                        if (totalBet && this._niuMapInfo && this._niuMapInfo.GetPlayState() == 1) {
                            this._game.showTips("游戏尚未结束，请先打完这局哦~");
                            return;
                        }
                        if (this._niuMapInfo && this._niuMapInfo.GetBankerSeat() == this._game.sceneObjectMgr.mainUnit.GetIndex()) {
                            this._game.showTips("老板，您是庄家哦，请先申请下庄后再离开~");
                            return;
                        }
                        TongyongPageDef.ins.alertClose("brniuniu", this, this.onClickCancle);
                        break;
                    default:
                        break;
                }
            };
            BrNiuNiuMapPage.prototype.onClickCancle = function () {
                this._game.sceneObjectMgr.leaveStory(true);
                // this.close();
            };
            //重复下注
            BrNiuNiuMapPage.prototype.repeatBet = function () {
                var _this = this;
                if (this.showIsGuest())
                    return;
                if (this._betWait)
                    return; //投注间隔
                var bankerUnit = this._game.sceneObjectMgr.getUnitByIdx(this._niuMapInfo.GetBankerSeat());
                var limitMoney = 0;
                if (bankerUnit) {
                    limitMoney = bankerUnit.GetMoney() / 4;
                    var allTotal = this._betTotal0 + this._betTotal1 + this._betTotal2 + this._betTotal3;
                    if (allTotal > limitMoney) {
                        this._game.uiRoot.topUnder.showTips("当前下注总额超出牌局可下注额度，无法下注~");
                        return;
                    }
                }
                var total = 0; //重复下注筹码总额
                for (var i = 0; i < this._rebetList.length; i++) {
                    total += this._rebetList[i];
                }
                if (total > this._game.sceneObjectMgr.mainUnit.GetMoney()) {
                    this._game.uiRoot.topUnder.showTips("老板,您的金币不够重复下注啦~");
                    return;
                }
                var money = this._game.sceneObjectMgr.mainUnit.GetMoney();
                var betBefore = this._betMain0 + this._betMain1 + this._betMain2 + this._betMain3;
                limitMoney = (money + betBefore) / 6;
                if (total + betBefore > limitMoney) {
                    this._game.uiRoot.topUnder.showTips("老板，下注金额不能超过携带金币的六分之一哦~");
                    return;
                }
                for (var i = 0; i < this._rebetList.length; i++) {
                    var antes = this._rebetList[i]; //之前区域i下注总额
                    if (antes) {
                        var total_1 = i == 0 ? this._betMain0 : i == 1 ? this._betMain1 : i == 2 ? this._betMain2 : this._betMain3;
                        if (antes + total_1 > this._betlimit) {
                            this._game.uiRoot.topUnder.showTips(StringU.substitute("本投注点限红{0}哦~", this._betlimit));
                            return;
                        }
                        //从最大筹码开始循环，优先丢出大额筹码，剩下零头再由小额筹码去拼凑
                        for (var j = this._chipArr.length - 1; j >= 0; j--) {
                            if (!antes)
                                break;
                            var num = Math.floor(antes / this._chipArr[j]);
                            if (num) {
                                antes = antes - this._chipArr[j] * num;
                                for (var k = 0; k < num; k++) {
                                    this._game.network.call_brniuniu_bet(this._chipArr[j], i + 1);
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
            BrNiuNiuMapPage.prototype.onAreaBetClick = function (index, e) {
                var _this = this;
                if (this.showIsGuest())
                    return;
                if (this._curStatus != 3 /* PLAY_STATUS_BET */) {
                    this._game.uiRoot.topUnder.showTips("当前不在下注时间，请在下注时间再进行下注！");
                    return;
                }
                if (this._game.sceneObjectMgr.mainUnit.GetIndex() == this._niuMapInfo.GetBankerSeat()) {
                    this._game.uiRoot.topUnder.showTips("老板，您现在当庄哦~不能下注~");
                    return;
                }
                if (this._betWait)
                    return; //投注间隔
                var total = index == 0 ? this._betMain0 : index == 1 ? this._betMain1 : index == 2 ? this._betMain2 : this._betMain3;
                if (this._curChip + total > this._betlimit) {
                    this._game.uiRoot.topUnder.showTips(StringU.substitute("本投注点限红{0}哦~", this._betlimit));
                    return;
                }
                var bankerUnit = this._game.sceneObjectMgr.getUnitByIdx(this._niuMapInfo.GetBankerSeat());
                var limitMoney = 0;
                if (bankerUnit) {
                    var allTotal = this._betTotal0 + this._betTotal1 + this._betTotal2 + this._betTotal3;
                    limitMoney = bankerUnit.GetMoney() / 4;
                    if (allTotal > limitMoney) {
                        this._game.uiRoot.topUnder.showTips("当前下注总额超出牌局可下注额度，无法下注~");
                        return;
                    }
                }
                var money = this._game.sceneObjectMgr.mainUnit.GetMoney();
                var betBefore = this._betMain0 + this._betMain1 + this._betMain2 + this._betMain3;
                limitMoney = (money + betBefore) / 6;
                if (this._curChip + betBefore > limitMoney) {
                    this._game.uiRoot.topUnder.showTips("老板，下注金额不能超过携带金币的六分之一哦~");
                    return;
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
                this._game.network.call_brniuniu_bet(this._curChip, index + 1);
            };
            //筹码点击事件
            BrNiuNiuMapPage.prototype.onClickChip = function (index, e) {
                if (this._chipArr[index] == this._curChip)
                    return;
                this._game.uiRoot.btnTween(e.currentTarget);
                this.onSelectChip(index);
            };
            //选择筹码
            BrNiuNiuMapPage.prototype.onSelectChip = function (index) {
                this._curChip = this._chipArr[index];
                for (var i = 0; i < this._chipUIList.length; i++) {
                    this._chipGuangUIList[i].visible = i == index;
                    this._chipUIList[i].y = i == index ? this._curChipY - 10 : this._curChipY;
                }
            };
            //选择座位入座
            BrNiuNiuMapPage.prototype.onSelectSeat = function (index) {
                if (this.showIsGuest())
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                if (mainUnit.GetIndex() == this._niuMapInfo.GetBankerSeat()) {
                    this._game.uiRoot.topUnder.showTips("老板，您是庄家哦~不能入座啦~");
                    return;
                }
                if (mainUnit.GetMoney() < this._seatlimit) {
                    this._game.uiRoot.topUnder.showTips("金币不足");
                    return;
                }
                this._game.network.call_brniuniu_seated(index + 1);
            };
            BrNiuNiuMapPage.prototype.onMouseClick = function (e) {
                if (e.target != this._viewUI.btn_spread) {
                    this.showMenu(false);
                }
            };
            BrNiuNiuMapPage.prototype.showMenu = function (isShow) {
                var _this = this;
                if (isShow) {
                    this._viewUI.box_menu.visible = true;
                    this._viewUI.btn_spread.visible = false;
                    this._viewUI.box_menu.y = -this._viewUI.box_menu.height;
                    Laya.Tween.clearAll(this._viewUI.box_menu);
                    Laya.Tween.to(this._viewUI.box_menu, { y: 10 }, 300, Laya.Ease.circIn);
                }
                else {
                    if (this._viewUI.box_menu.y >= 0) {
                        Laya.Tween.to(this._viewUI.box_menu, { y: -this._viewUI.box_menu.height }, 300, Laya.Ease.circIn, Handler.create(this, function () {
                            Laya.Tween.clearAll(_this._viewUI.box_menu);
                            _this._viewUI.btn_spread.visible = true;
                            _this._viewUI.box_menu.visible = false;
                        }));
                    }
                }
            };
            BrNiuNiuMapPage.prototype.showIsGuest = function () {
                if (this._game.sceneObjectMgr.mainPlayer.IsIsGuest()) {
                    TongyongPageDef.ins.alertRecharge("亲爱的玩家，您正使用游客模式进行游戏，该模式下的游戏数据（包括付费数据）在删除游戏、更换设备后清空！对此造成的损失，本平台将不承担任何责任。为保障您的虚拟财产安全，我们强力建议您绑定手机号升级为正式账号。", function () { }, function () { }, true, PathGameTongyong.ui_tongyong_general + "btn_qd.png");
                    return true;
                }
                return false;
            };
            BrNiuNiuMapPage.prototype.resetAll = function () {
                this.clearClips();
                this.resetData();
                this.clearObjects();
                this.resetUI();
                this._niuMgr.clear(); //清理场景假对象
            };
            BrNiuNiuMapPage.prototype.onUpdateGameNo = function () {
                var gameNo = this._niuMapInfo.GetGameNo();
                if (this._niuMapInfo && gameNo) {
                    this._viewUI.txt_id.visible = true;
                    this._viewUI.txt_id.text = "牌局号：" + gameNo;
                }
            };
            BrNiuNiuMapPage.prototype.onUpdateCountDown = function () {
                if (!this._niuMapInfo)
                    return;
                this._countDown = this._niuMapInfo.GetCountDown();
            };
            BrNiuNiuMapPage.prototype.onUpdateRecord = function () {
                if (!this._niuMapInfo)
                    return;
                var recordArr = [];
                var gameRecord = this._niuMapInfo.GetGameRecord();
                if (gameRecord != "") {
                    recordArr = JSON.parse(gameRecord);
                    //倒序
                    for (var i = 0; i < recordArr.length / 2; i++) {
                        var val = recordArr[i];
                        recordArr[i] = recordArr[recordArr.length - 1 - i];
                        recordArr[recordArr.length - 1 - i] = val;
                    }
                }
            };
            BrNiuNiuMapPage.prototype.onUpdateSeatedList = function (qifu_index) {
                var _this = this;
                if (!this._niuMapInfo)
                    return;
                var seatedList = this._niuMapInfo.GetSeatedList();
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
                        this_3._seatUIList[i].txt_money.text = EnumToString.getPointBackNum(unit.GetMoney(), 2).toString();
                        this_3._seatUIList[i].txt_name.fontSize = 15;
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
                        this_3._seatUIList[i].txt_name.fontSize = 20;
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
            //显示结算界面
            BrNiuNiuMapPage.prototype.showSettleInfo = function () {
                var myBet = this._betMainTotal;
                var allBet = this._betAllTotal;
                var myBenefit = this._mainPlayerBenefit;
                var bankerBenefit = this._niuMapInfo.GetBankerBenefit() / 100;
                this._pageHandle.pushOpen({
                    id: page_1.BrniuniuPageDef.PAGE_BRNIUNIU_SETTLE,
                    dataSource: { myBet: myBet, myBenefit: myBenefit, allBet: allBet, bankerBenefit: bankerBenefit, bankerHead: this._bankerHead, bankerName: this._bankerName },
                    parent: this._game.uiRoot.HUD
                });
            };
            //初始化UI界面
            BrNiuNiuMapPage.prototype.initView = function () {
                this._viewUI.box_menu.zOrder = 99;
                this._viewUI.box_menu.visible = false;
                this._areaList = [];
                this._chipUIList = [];
                this._seatUIList = [];
                this._chipGuangUIList = [];
                this._cardsTypeList = [];
                this._areaKuangList = [];
                this._aniKaiPaiList = [];
                for (var i = 0; i < 4; i++) {
                    this._areaList.push(this._viewUI["area" + i]);
                    this._areaList[i].on(LEvent.CLICK, this, this.onAreaBetClick, [i]);
                    this._areaKuangList.push(this._viewUI["kuang" + i]);
                    this._areaKuangList[i].visible = false;
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
                    this._aniKaiPaiList.push(this._viewUI["kaipai" + i]);
                    this._aniKaiPaiList[i].ani_kaipai.on(LEvent.COMPLETE, this, this.onSeeCardOver, [i]);
                    this._aniKaiPaiList[i].ani_kaipai.stop();
                    this._aniKaiPaiList[i].visible = false;
                    this._cardsTypeList.push(this._viewUI["cardType" + i]);
                }
                for (var i = 0; i < 6; i++) {
                    this._seatUIList.push(this._viewUI["seat" + i]);
                    this._seatUIList[i].clip_money.visible = false;
                    this._seatUIList[i].on(LEvent.CLICK, this, this.onSelectSeat, [i]);
                }
                if (!this._htmlText) {
                    this._htmlText = TextFieldU.createHtmlText(this._viewUI.txt_online);
                }
                for (var i = 0; i < 5; i++) {
                    this._cardsTypeList[i].visible = false;
                }
                this._viewUI.roadList0.visible = false;
                this._viewUI.roadList0.itemRender = this.createChildren("game_ui.brniuniu.component.RoadRenderUI", RoadRecordRender);
                this._viewUI.roadList0.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.roadList1.visible = false;
                this._viewUI.roadList1.itemRender = this.createChildren("game_ui.brniuniu.component.RoadRenderUI", RoadRecordRender);
                this._viewUI.roadList1.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.roadList2.visible = false;
                this._viewUI.roadList2.itemRender = this.createChildren("game_ui.brniuniu.component.RoadRenderUI", RoadRecordRender);
                this._viewUI.roadList2.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.roadList3.visible = false;
                this._viewUI.roadList3.itemRender = this.createChildren("game_ui.brniuniu.component.RoadRenderUI", RoadRecordRender);
                this._viewUI.roadList3.renderHandler = new Handler(this, this.renderHandler);
                //主玩家UI
                this._viewUI.main_player.clip_money.visible = false;
                //界面UI
                this._viewUI.txt_id.visible = false;
                this._viewUI.banker_cards.visible = false;
                this._viewUI.box_time.visible = false;
                this._viewUI.xipai.visible = false;
                this._viewUI.paixie.ani_chupai.stop();
                this._viewUI.ani_deal.ani1.stop();
                this._viewUI.ani_deal.visible = false;
                this._viewUI.btn_repeat.disabled = true;
            };
            BrNiuNiuMapPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            BrNiuNiuMapPage.prototype.initRoomConfig = function () {
                var maplv = this._niuMapInfo.GetMapLevel();
                if (maplv) {
                    var config = ROOM_CHIP_CONFIG[maplv];
                    config && (this._chipArr = config);
                    config = ROBOT_NUM_CONFIG[maplv];
                    config && (this._robotConfig = config);
                    config = BrNiuNiuMapPage.MONEY_LIMIT_CONFIG[maplv];
                    config && (this._szlimit = config[0]);
                    config && (this._seatlimit = config[1]);
                    config && (this._betlimit = config[2]);
                    this._viewUI.txt_limit.text = this._szlimit.toString();
                    if (this._robotConfig) {
                        this.updateOnline();
                    }
                    if (!this._chipArr)
                        return;
                    for (var i = 0; i < this._chipArr.length; i++) {
                        this._chipUIList[i].label = this._chipArr[i].toString();
                    }
                    if (!this._curChip)
                        this.onSelectChip(0);
                }
            };
            BrNiuNiuMapPage.prototype.updateRoad = function () {
                if (!this._niuMapInfo)
                    return;
                if (this._niuMapInfo.GetRoadRecord() == "")
                    return;
                var roadInfo = JSON.parse(this._niuMapInfo.GetRoadRecord());
                var data0 = [];
                var data1 = [];
                var data2 = [];
                var data3 = [];
                for (var i = 0; i < roadInfo.length; i++) {
                    if (roadInfo[i][2] == 1) {
                        data0.push([roadInfo[i][0], roadInfo[i][1]]);
                    }
                    if (roadInfo[i][2] == 2) {
                        data1.push([roadInfo[i][0], roadInfo[i][1]]);
                    }
                    if (roadInfo[i][2] == 3) {
                        data2.push([roadInfo[i][0], roadInfo[i][1]]);
                    }
                    if (roadInfo[i][2] == 4) {
                        data3.push([roadInfo[i][0], roadInfo[i][1]]);
                    }
                }
                this._viewUI.roadList0.dataSource = data0;
                this._viewUI.roadList0.visible = true;
                this._viewUI.roadList1.dataSource = data1;
                this._viewUI.roadList1.visible = true;
                this._viewUI.roadList2.dataSource = data2;
                this._viewUI.roadList2.visible = true;
                this._viewUI.roadList3.dataSource = data3;
                this._viewUI.roadList3.visible = true;
            };
            BrNiuNiuMapPage.prototype.updateBanker = function (data) {
                if (!this._niuMapInfo)
                    return;
                if (this._curStatus == 8 /* PLAY_STATUS_SHOW_INFO */)
                    return;
                var bankerUnit = this._game.sceneObjectMgr.getUnitByIdx(this._niuMapInfo.GetBankerSeat());
                if (bankerUnit) {
                    this._bankerName = bankerUnit.GetName();
                    var bankerHeadImg = bankerUnit.GetHeadImg();
                    if (bankerHeadImg) {
                        this._bankerHead = PathGameTongyong.ui_tongyong_touxiang + "head_" + bankerHeadImg + ".png";
                        if (bankerUnit.GetQiFuType() && bankerUnit.GetQFEndTime(bankerUnit.GetQiFuType() - 1) > this._game.sync.serverTimeBys) {
                            this._bankerHead = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[bankerUnit.GetQiFuType() - 1] + ".png";
                        }
                    }
                    this._viewUI.img_txk_zhuang.visible = bankerUnit.GetVipLevel() > 0;
                    if (this._viewUI.img_txk_zhuang.visible) {
                        this._viewUI.img_txk_zhuang.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + bankerUnit.GetVipLevel() + ".png";
                    }
                    this._viewUI.icon_banker.skin = this._bankerHead;
                    this._viewUI.txt_zhuangjia.text = this._bankerName;
                    this._viewUI.txt_lianzhuang.text = bankerUnit.GetLzNum().toString();
                    var money = EnumToString.getPointBackNum(bankerUnit.GetMoney(), 2);
                    this._viewUI.txt_zhuangMoney.text = money.toString();
                    this._viewUI.box_lianzhuang.visible = true;
                }
                else {
                    this._bankerHead = Path_game_brniuniu.ui_brniuniu + "tu_xtz.png";
                    this._bankerName = "牛魔王";
                    this._viewUI.icon_banker.skin = this._bankerHead;
                    this._viewUI.txt_zhuangjia.text = this._bankerName;
                    this._viewUI.txt_zhuangMoney.text = this._niuMapInfo.GetMoney().toString();
                    this._viewUI.box_lianzhuang.visible = false;
                }
                if (data == 1 && !this._isFirstOpen) {
                    this._isFirstOpen = true;
                }
                if (data == 1 && this._isFirstOpen) {
                    this._game.uiRoot.topUnder.showTips("庄家下庄，庄家更换");
                }
                if (this._niuMapInfo.GetSzList() == "") {
                    this._viewUI.btn_shangzhuang.skin = PathGameTongyong.ui_tongyong_general + "btn_sq0.png";
                    return;
                }
                var unitSz = JSON.parse(this._niuMapInfo.GetSzList());
                var isShenQing = false;
                if (!this._game.sceneObjectMgr.mainUnit)
                    return;
                var mainIndex = this._game.sceneObjectMgr.mainUnit.GetIndex();
                if (!unitSz.length) {
                    isShenQing = false;
                }
                else {
                    for (var i = 0; i < unitSz.length; i++) {
                        var unitIndex = unitSz[i][0];
                        if (mainIndex == unitIndex) {
                            isShenQing = true;
                        }
                    }
                }
                var url = isShenQing ? PathGameTongyong.ui_tongyong_general + "btn_sq1.png" : PathGameTongyong.ui_tongyong_general + "btn_sq0.png";
                if (mainIndex == this._niuMapInfo.GetBankerSeat())
                    url = PathGameTongyong.ui_tongyong_general + "btn_sq3.png";
                this._viewUI.btn_shangzhuang.skin = url;
            };
            //重置UI
            BrNiuNiuMapPage.prototype.resetUI = function () {
                for (var i = 0; i < this._cardsTypeList.length; i++) {
                    this._cardsTypeList && (this._cardsTypeList[i].visible = false);
                }
                //主玩家UI
                this._viewUI.main_player.clip_money.visible = false;
                //界面UI
                this._viewUI.img_banker.visible = true;
                this._viewUI.banker_cards.visible = false;
                this._viewUI.txt_total0.text = "0";
                this._viewUI.txt_total1.text = "0";
                this._viewUI.txt_total2.text = "0";
                this._viewUI.txt_total3.text = "0";
                this._viewUI.txt_bet0.text = "0";
                this._viewUI.txt_bet1.text = "0";
                this._viewUI.txt_bet2.text = "0";
                this._viewUI.txt_bet3.text = "0";
            };
            BrNiuNiuMapPage.prototype.resetData = function () {
                this._battleIndex = -1;
                this._settleInfo = [];
                this._resultList = [];
                this._cardsArr = [];
                this._betTotal0 = 0;
                this._betTotal1 = 0;
                this._betTotal2 = 0;
                this._betTotal3 = 0;
                this._betMain0 = 0;
                this._betMain1 = 0;
                this._betMain2 = 0;
                this._betMain3 = 0;
                this._betMainTotal = 0;
                this._betAllTotal = 0;
                this._mainPlayerBenefit = 0;
                this._isReConnect = false;
                this._isReDrawChips = false;
                this._drawCardType = false; //重连后画完牌型
            };
            BrNiuNiuMapPage.prototype.clearMapInfoListen = function () {
                this._game.sceneObjectMgr.off(BrniuniuMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.off(BrniuniuMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
                this._game.sceneObjectMgr.off(BrniuniuMapInfo.EVENT_GAME_NO, this, this.onUpdateGameNo); //牌局号
                this._game.sceneObjectMgr.off(BrniuniuMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown); //倒计时时间戳更新
                this._game.sceneObjectMgr.off(BrniuniuMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord); //游戏记录更新
                this._game.sceneObjectMgr.off(BrniuniuMapInfo.EVENT_SEATED_LIST, this, this.onUpdateSeatedList); //入座列表更新
                this._game.sceneObjectMgr.off(BrniuniuMapInfo.EVENT_MAP_BANKER_CHANGE, this, this.updateBanker); //地图庄家变更
                this._game.sceneObjectMgr.off(BrniuniuMapInfo.EVENT_SZ_LIST, this, this.updateBanker); //上庄列表更新
                this._game.sceneObjectMgr.off(BrniuniuMapInfo.EVENT_SYSTEM_MONEY_CHANGE, this, this.updateBanker); //系统庄金币更新
                this._game.sceneObjectMgr.off(BrniuniuMapInfo.EVENT_ROAD_RECORD_CHANGE, this, this.updateRoad); //大路信息更新
                this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
            };
            BrNiuNiuMapPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_spread.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_cardType.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_back.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_rule.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_chongzhi.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_set.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_zhanji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_repeat.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_playerList.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_shangzhuang.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(BrniuniuMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                    this._game.sceneObjectMgr.off(BrniuniuMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
                    this._game.sceneObjectMgr.off(BrniuniuMapInfo.EVENT_GAME_NO, this, this.onUpdateGameNo); //牌局号
                    this._game.sceneObjectMgr.off(BrniuniuMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown); //倒计时时间戳更新
                    this._game.sceneObjectMgr.off(BrniuniuMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord); //游戏记录更新
                    this._game.sceneObjectMgr.off(BrniuniuMapInfo.EVENT_SEATED_LIST, this, this.onUpdateSeatedList); //入座列表更新
                    this._game.sceneObjectMgr.off(BrniuniuMapInfo.EVENT_MAP_BANKER_CHANGE, this, this.updateBanker); //地图庄家变更
                    this._game.sceneObjectMgr.off(BrniuniuMapInfo.EVENT_SZ_LIST, this, this.updateBanker); //上庄列表更新
                    this._game.sceneObjectMgr.off(BrniuniuMapInfo.EVENT_SYSTEM_MONEY_CHANGE, this, this.updateBanker); //系统庄金币更新
                    this._game.sceneObjectMgr.off(BrniuniuMapInfo.EVENT_ROAD_RECORD_CHANGE, this, this.updateRoad); //大路信息更新
                    this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                    for (var i = 0; i < this._areaList.length; i++) {
                        this._areaList[i] && this._areaList[i].off(LEvent.CLICK, this, this.onAreaBetClick);
                    }
                    this._areaList = [];
                    for (var i = 0; i < this._chipUIList.length; i++) {
                        this._chipUIList[i] && this._chipUIList[i].off(LEvent.CLICK, this, this.onSelectChip);
                    }
                    this._chipUIList = [];
                    for (var i = 0; i < this._aniKaiPaiList.length; i++) {
                        this._aniKaiPaiList[i] && this._aniKaiPaiList[i].ani_kaipai.off(LEvent.COMPLETE, this, this.onSeeCardOver);
                    }
                    this._aniKaiPaiList = [];
                    for (var i = 0; i < this._seatUIList.length; i++) {
                        this._seatUIList[i] && this._seatUIList[i].off(LEvent.CLICK, this, this.onSelectSeat, [i]);
                    }
                    this._seatUIList = [];
                    this._chipHuang = [];
                    this._viewUI.paixie.ani_chupai.stop();
                    this._viewUI.ani_deal.ani1.stop();
                    this.resetAll();
                    if (this._niuMgr) {
                        this._niuMgr.off(BrNiuNiuMgr.DEAL_OVER, this, this.onUpdateAniDeal);
                        this._niuMgr.off(BrNiuNiuMgr.SEE_CARD_OVER, this, this.onSeeCardOver);
                    }
                    this._game.uiRoot.HUD.close(page_1.BrniuniuPageDef.PAGE_BRNIUNIU_BEGIN);
                    this._game.uiRoot.HUD.close(page_1.BrniuniuPageDef.PAGE_BRNIUNIU_END);
                    this._game.uiRoot.HUD.close(page_1.BrniuniuPageDef.PAGE_NIUNIU_TONGSHA);
                    this._game.uiRoot.HUD.close(page_1.BrniuniuPageDef.PAGE_NIUNIU_TONGPEI);
                    this._game.stopAllSound();
                    this._game.stopMusic();
                    this._niuStory && this._niuStory.clear();
                    Laya.timer.clearAll(this);
                    Laya.Tween.clearAll(this);
                }
                _super.prototype.close.call(this);
            };
            BrNiuNiuMapPage.MONEY_LIMIT_CONFIG = {
                "71": [5000, 2000, 200],
                "72": [20000, 5000, 500],
                "73": [50000, 10000, 1000],
                "74": [100000, 20000, 2000],
            };
            return BrNiuNiuMapPage;
        }(game.gui.base.Page));
        page_1.BrNiuNiuMapPage = BrNiuNiuMapPage;
        var RoadRecordRender = /** @class */ (function (_super) {
            __extends(RoadRecordRender, _super);
            function RoadRecordRender() {
                var _this = _super.call(this) || this;
                _this._typeList = ["无", "1", "2", "3", "4", "5", "6", "7", "8", "9", "牛", "牛", "牛", "牛", "牛"];
                return _this;
            }
            RoadRecordRender.prototype.setData = function (game, data) {
                this._game = game;
                this._data = data;
                if (!this._data) {
                    this.visible = false;
                    return;
                }
                this.visible = true;
                this.txt_type.text = this._typeList[this._data[0]];
                this.img_bg.skin = StringU.substitute(Path_game_brniuniu.ui_brniuniu + "tu_{0}.png", this._data[1] == -1 ? "k1" : "k");
            };
            RoadRecordRender.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            return RoadRecordRender;
        }(ui.game_ui.brniuniu.component.RoadRenderUI));
    })(page = gamebrniuniu.page || (gamebrniuniu.page = {}));
})(gamebrniuniu || (gamebrniuniu = {}));
//# sourceMappingURL=BrNiuNiuMapPage.js.map