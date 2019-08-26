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
* 奔驰宝马
*/
var gamebenchibaoma;
(function (gamebenchibaoma) {
    var page;
    (function (page_1) {
        var TextFieldU = utils.TextFieldU;
        var Path_game_benchibaoma = gamebenchibaoma.data.Path;
        var MONEY_NUM = 40; // 特效金币数量
        var MONEY_FLY_TIME = 30; // 金币飞行时间间隔
        var SEAT_NUM = 6; // 座位数量
        var CHIP_TYPE_NUM = 5; // 筹码类型种类
        var BET_AREA_NUM = 8; // 下注区域数
        var ALL_GAME_ROOM_CONFIG_ID = [161, 162, 163, 164]; // 可进入的maplv
        var MONEY_LIMIT_CONFIG = {
            "161": [5000, 2000, 5000],
            "162": [20000, 5000, 8000],
            "163": [50000, 10000, 25000],
            "164": [100000, 20000, 50000],
        };
        var ROOM_CHIP_CONFIG = {
            "161": [1, 10, 50, 100, 1000],
            "162": [10, 50, 100, 500, 1000],
            "163": [50, 100, 500, 1000, 5000],
            "164": [100, 500, 1000, 5000, 10000],
        };
        var CAR_TYPE_DATA = [
            5 /* CAR_TYPE_LBJNX */, 1 /* CAR_TYPE_LBJN */, 6 /* CAR_TYPE_BSJX */, 2 /* CAR_TYPE_BSJ */,
            7 /* CAR_TYPE_BCX */, 3 /* CAR_TYPE_BC */, 8 /* CAR_TYPE_BMX */, 4 /* CAR_TYPE_BM */,
            5 /* CAR_TYPE_LBJNX */, 1 /* CAR_TYPE_LBJN */, 6 /* CAR_TYPE_BSJX */, 2 /* CAR_TYPE_BSJ */,
            7 /* CAR_TYPE_BCX */, 3 /* CAR_TYPE_BC */, 8 /* CAR_TYPE_BMX */, 4 /* CAR_TYPE_BM */,
            5 /* CAR_TYPE_LBJNX */, 1 /* CAR_TYPE_LBJN */, 6 /* CAR_TYPE_BSJX */, 2 /* CAR_TYPE_BSJ */,
            7 /* CAR_TYPE_BCX */, 3 /* CAR_TYPE_BC */, 8 /* CAR_TYPE_BMX */, 4 /* CAR_TYPE_BM */,
            5 /* CAR_TYPE_LBJNX */, 1 /* CAR_TYPE_LBJN */, 6 /* CAR_TYPE_BSJX */, 2 /* CAR_TYPE_BSJ */,
            7 /* CAR_TYPE_BCX */, 3 /* CAR_TYPE_BC */, 8 /* CAR_TYPE_BMX */, 4 /* CAR_TYPE_BM */,
        ];
        var CAR_SKIN = [
            "",
            Path_game_benchibaoma.ui_benchibaoma + "tu_lb1.png",
            Path_game_benchibaoma.ui_benchibaoma + "tu_bsj1.png",
            Path_game_benchibaoma.ui_benchibaoma + "tu_bc1.png",
            Path_game_benchibaoma.ui_benchibaoma + "tu_bm1.png",
            Path_game_benchibaoma.ui_benchibaoma + "tu_lb2.png",
            Path_game_benchibaoma.ui_benchibaoma + "tu_bsj2.png",
            Path_game_benchibaoma.ui_benchibaoma + "tu_bc2.png",
            Path_game_benchibaoma.ui_benchibaoma + "tu_bm2.png"
        ];
        var BcbmMapPage = /** @class */ (function (_super) {
            __extends(BcbmMapPage, _super);
            function BcbmMapPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._seatList = []; //座位UI集合
                _this._unitSeated = []; //入座精灵信息集合
                _this._chipList = []; //筹码UI集合
                _this._chipGuangList = []; //筹码光效UI集合
                _this._chipArr = []; //筹码大小类型
                _this._chipSortScore = 0; //筹码层级
                _this._lottery = ""; //中奖区域
                _this._betMainTotal = 0; //玩家总下注
                _this._allChips = []; //所有筹码
                _this._areaList = []; //下注区域UI集合
                _this._areaKuangList = []; //下注区域边框集合
                _this._allTotalBetUI = []; //下注文本
                _this._allMainBetUI = []; //自己下注文本
                _this._allTotalBet = []; //所有玩家总下注
                _this._allMainBet = []; //所有主玩家下注
                _this._rebetList = []; //重复下注列表
                _this._lotteryKuangIndex = 0;
                _this._lotteryStartTime = 0;
                _this._mainPlayerBenefit = 0; //玩家收益
                _this._clipList = []; //飘字集合
                _this._countDown = 0; //倒计时时间戳
                _this._lotteryIndex = 0;
                _this._mainHeadPos = [[0, 0], [0, -10]]; //主玩家座位头像初始位置
                _this._headStartPos = [[0, 0], [0, 171], [0, 340], [0, 0], [0, 171], [0, 340]]; //座位头像初始位置
                _this._headEndPos = [[10, 0], [10, 171], [10, 340], [-10, 0], [-10, 171], [-10, 340]]; //座位头像移动位置
                _this._isFirstOpen = false;
                //下注
                _this._betWait = false;
                _this._diff = 500;
                _this._timeList = {};
                _this._firstList = {};
                _this._timeList1 = {};
                _this._firstList1 = {};
                _this._nameStrInfo = ["xs", "px", "gsy", "gg", "cs", "tdg"];
                //战斗结构体更新
                _this._battleIndex = -1;
                _this._isNeedDuang = false;
                _this._delta = 1000;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + 'dating.atlas',
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "tuichu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    Path_game_benchibaoma.atlas_game_ui + "benchibaoma.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/suiji.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            BcbmMapPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.benchibaoma.BenChiBaoMaUI');
                this.addChild(this._viewUI);
                this._viewUI.txt_status.visible = false;
                if (!this._pageHandle) {
                    this._pageHandle = PageHandle.Get("BcbmMapPage"); //额外界面控制器
                }
                this._viewUI.main_player.clip_money.visible = false;
                this._effPage = new page_1.BcbmEffectPage(this._game, this._viewUI.box_car, this._viewUI);
                this._seatList = [];
                for (var i = 0; i < SEAT_NUM; i++) {
                    this._seatList.push(this._viewUI["seat" + i]);
                    this._seatList[i].clip_money.visible = false;
                }
                this._chipList = [];
                this._chipGuangList = [];
                for (var i = 0; i < CHIP_TYPE_NUM; i++) {
                    this._chipList.push(this._viewUI["btn_chip" + i]);
                    this._chipGuangList.push(this._viewUI["guang" + i]);
                    if (i == 0) {
                        this._curChipY = this._chipList[i].y;
                    }
                }
                this._allChips = [];
                this._allTotalBet = [];
                this._allMainBet = [];
                this._rebetList = [];
                for (var i = 0; i < BET_AREA_NUM; i++) {
                    this._allChips[i] = [];
                    this._allTotalBet[i] = 0;
                    this._allMainBet[i] = 0;
                    this._rebetList[i] = 0;
                }
                this._areaList = [];
                this._areaKuangList = [];
                this._allMainBetUI = [];
                this._allTotalBetUI = [];
                for (var i = 0; i < BET_AREA_NUM; i++) {
                    this._areaList.push(this._viewUI["area" + i]);
                    this._areaKuangList.push(this._viewUI["kuang" + i]);
                    this._areaKuangList[i].visible = false;
                    this._allMainBetUI[i] = this._viewUI["txt_main_" + i];
                    this._allTotalBetUI[i] = this._viewUI["txt_total_" + i];
                }
                //车标
                this._carTypeData = [];
                for (var i = 0; i < CAR_TYPE_DATA.length; i++) {
                    var type = CAR_TYPE_DATA[i];
                    if (this._viewUI["img_che_" + i]) {
                        this._viewUI["img_che_" + i].skin = CAR_SKIN[type];
                    }
                    if (!this._carTypeData[type]) {
                        this._carTypeData[type] = [];
                    }
                    this._carTypeData[type].push(i);
                }
                this._viewUI.list_record.itemRender = this.createChildren("game_ui.benchibaoma.component.RecordItemUI", MapRecordRender);
                this._viewUI.list_record.renderHandler = new Handler(this, this.renderHandler);
                if (!this._htmlText) {
                    this._htmlText = TextFieldU.createHtmlText(this._viewUI.txt_online);
                }
                this._viewUI.mouseThrough = true;
                this._game.playMusic(Path_game_benchibaoma.music_benchibaoma + "BGM_1.mp3");
                this._viewUI.btn_repeat.disabled = true;
            };
            // 页面打开时执行函数
            BcbmMapPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._bcbmStory = this._game.sceneObjectMgr.story;
                this._viewUI.box_menu.zOrder = 99;
                this._viewUI.box_menu.visible = false;
                this._betWait = false;
                this._countDown = 0;
                this._lotteryKuangIndex = 0;
                this.resetUI();
                this.onSelectChip(0);
                this.onUpdateUnit();
                this.onUpdateUnitOffline();
                this.onUpdateSeatedList();
                this.onUpdateMapInfo();
                this.updateBetNum();
                this.onUpdateRecord();
                this._game.sceneObjectMgr.on(BenchibaomaMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
                this._game.sceneObjectMgr.on(BenchibaomaMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.on(BenchibaomaMapInfo.EVENT_STATUS_CONTINUE, this, this.onUpdateUnit); //继续游戏状态改变后
                this._game.sceneObjectMgr.on(BenchibaomaMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown); //倒计时时间戳更新
                this._game.sceneObjectMgr.on(BenchibaomaMapInfo.EVENT_SEATED_LIST, this, this.onUpdateSeatedList); //入座列表更新
                this._game.sceneObjectMgr.on(BenchibaomaMapInfo.EVENT_STATUS_CHECK, this, this.initRoomConfig); //地图传送参数
                this._game.sceneObjectMgr.on(BenchibaomaMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord); //游戏记录更新
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this._viewUI.btn_spread.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rule.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zhanji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chong.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_repeat.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_playerList.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                for (var i = 0; i < this._seatList.length; i++) {
                    this._seatList[i] && this._seatList[i].on(LEvent.CLICK, this, this.onSelectSeat, [i]);
                }
                for (var i = 0; i < this._chipList.length; i++) {
                    this._chipList[i] && this._chipList[i].on(LEvent.CLICK, this, this.onSelectChip, [i]);
                }
                for (var i = 0; i < this._areaList.length; i++) {
                    this._areaList[i] && this._areaList[i].on(LEvent.CLICK, this, this.onAreaBetClick, [i]);
                }
            };
            BcbmMapPage.prototype.onMouseClick = function (e) {
                if (e.target != this._viewUI.btn_spread) {
                    this.showMenu(false);
                }
            };
            BcbmMapPage.prototype.showMenu = function (isShow) {
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
                        Laya.Tween.clearAll(this._viewUI.box_menu);
                        Laya.Tween.to(this._viewUI.box_menu, { y: -this._viewUI.box_menu.height }, 300, Laya.Ease.circIn, Handler.create(this, function () {
                            _this._viewUI.btn_spread.visible = true;
                            _this._viewUI.box_menu.visible = false;
                        }));
                    }
                }
            };
            //按钮缓动回调
            BcbmMapPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_spread:
                        this.showMenu(true);
                        break;
                    case this._viewUI.btn_rule:
                        this._game.uiRoot.general.open(page_1.BenchibaomaPageDef.PAGE_BCBM_RULE);
                        break;
                    case this._viewUI.btn_set:
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING);
                        break;
                    case this._viewUI.btn_qifu:
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU);
                        break;
                    case this._viewUI.btn_zhanji:
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, function (page) {
                            page.dataSource = page_1.BenchibaomaPageDef.GAME_NAME;
                        });
                        break;
                    case this._viewUI.btn_back:
                        var totalBet = 0;
                        for (var i = 0; i < this._allMainBet.length; i++) {
                            totalBet += this._allMainBet[i];
                        }
                        if (totalBet && this._bcbmMapInfo && this._bcbmMapInfo.GetPlayState() == 1) {
                            this._game.showTips("游戏尚未结束，请先打完这局哦~");
                            return;
                        }
                        TongyongPageDef.ins.alertClose("benchibaoma", this, this.onClickCancle);
                        break;
                    case this._viewUI.btn_playerList: //玩家列表
                        this._game.uiRoot.general.open(page_1.BenchibaomaPageDef.PAGE_BCBM_PLAYER_LIST);
                        break;
                    case this._viewUI.btn_repeat:
                        if (this.showIsGuest())
                            return;
                        this.repeatBet();
                        break;
                    case this._viewUI.btn_chong:
                        this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                        break;
                    default:
                        break;
                }
            };
            //确定退出回调
            BcbmMapPage.prototype.onClickCancle = function () {
                this._game.sceneObjectMgr.leaveStory(true);
                // this.close();
            };
            //选择座位入座
            BcbmMapPage.prototype.onSelectSeat = function (index) {
                if (this.showIsGuest())
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                if (mainUnit.GetMoney() < this._seatlimit) {
                    this._game.uiRoot.topUnder.showTips("金币不足");
                    return;
                }
                this._game.network.call_benchibaoma_seated(index + 1);
            };
            //选择筹码
            BcbmMapPage.prototype.onSelectChip = function (index) {
                this._curChip = this._chipArr[index];
                for (var i = 0; i < this._chipList.length; i++) {
                    this._chipGuangList[i].visible = i == index;
                    this._chipList[i].y = i == index ? this._curChipY - 10 : this._curChipY;
                }
            };
            //重复下注
            BcbmMapPage.prototype.repeatBet = function () {
                var _this = this;
                if (this.showIsGuest())
                    return;
                if (this._betWait)
                    return; //投注间隔
                var betArr = [];
                var total = 0;
                for (var i = 0; i < this._rebetList.length; i++) {
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
                                    this._game.network.call_benchibaoma_bet(this._chipArr[j], i + 1);
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
            BcbmMapPage.prototype.onAreaBetClick = function (index, e) {
                var _this = this;
                if (this.showIsGuest())
                    return;
                if (this._curStatus != 3 /* PLAY_STATUS_BET */) {
                    this._game.uiRoot.topUnder.showTips("当前不在下注时间，请在下注时间再进行下注！");
                    return;
                }
                if (this._betWait)
                    return; //投注间隔
                var total = this._allMainBet[index];
                if (this._curChip + total > this._betlimit) {
                    this._game.uiRoot.topUnder.showTips(StringU.substitute("本投注点限红{0}哦~", this._betlimit));
                    return;
                }
                var money = this._game.sceneObjectMgr.mainUnit.GetMoney();
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
                this._areaKuangList[index].visible = true;
                Laya.timer.once(500, this, function () {
                    _this._betWait = false;
                    _this._areaKuangList[index].visible = false;
                });
                this._game.network.call_benchibaoma_bet(this._curChip, index + 1);
            };
            //帧心跳
            BcbmMapPage.prototype.update = function (diff) {
                if (!this._viewUI)
                    return;
                _super.prototype.update.call(this, diff);
                if (this._effPage) {
                    this._effPage.Update(diff);
                }
                if (this._lotteryKuangIndex > 0) {
                    var time = this._game.sync.serverTimeBys * 1000 - this._lotteryStartTime;
                    if (time >= 0) {
                        time %= 600;
                        if (time > 300)
                            time = 600 - time;
                        var per = time / 300;
                        this._areaKuangList[this._lotteryKuangIndex - 1].alpha = per;
                    }
                }
            };
            //帧间隔心跳
            BcbmMapPage.prototype.deltaUpdate = function () {
                if (!this._viewUI)
                    return;
                var bool = this._curStatus == 3 /* PLAY_STATUS_BET */;
                if (!bool) {
                    this._viewUI.box_time.visible = false;
                    return;
                }
                var curTime = this._game.sync.serverTimeBys;
                var time = Math.floor(this._countDown - curTime);
                // this.updateClip(time);
                this._viewUI.box_time.visible = time > 0;
                this._viewUI.box_time.txt_time.text = time.toString();
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
            };
            //玩家进来了
            BcbmMapPage.prototype.onUnitAdd = function (u) {
                this.onUpdateUnit();
            };
            //玩家出去了
            BcbmMapPage.prototype.onUnitRemove = function (u) {
                this.onUpdateUnit();
            };
            BcbmMapPage.prototype.onUpdateUnit = function (qifu_index) {
                var _this = this;
                if (!this._bcbmMapInfo)
                    return;
                //主玩家的座位
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (mainUnit) {
                    var headImg = mainUnit.GetHeadImg();
                    this._viewUI.main_player.txt_name.text = getMainPlayerName(mainUnit.GetName());
                    var money = EnumToString.getPointBackNum(mainUnit.GetMoney(), 2);
                    money >= 0 && (this._viewUI.main_player.txt_money.text = money.toString());
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
                var onlineNum = 0;
                for (var key in this._game.sceneObjectMgr.unitDic) {
                    if (this._game.sceneObjectMgr.unitDic.hasOwnProperty(key)) {
                        var unit = this._game.sceneObjectMgr.unitDic[key];
                        if (unit) {
                            onlineNum++;
                        }
                    }
                }
                var maplv = this._bcbmMapInfo.GetMapLevel();
                if (maplv == Web_operation_fields.GAME_ROOM_CONFIG_BENCHIBAOMA_1) {
                    var curHour = Sync.getHours(this._game.sync.serverTimeBys * 1000); //当前几点钟
                    if (curHour >= 1 && curHour < 13) {
                        onlineNum += 50;
                    }
                    else {
                        onlineNum += 150;
                    }
                }
                else if (maplv == Web_operation_fields.GAME_ROOM_CONFIG_BENCHIBAOMA_2) {
                    var curHour = Sync.getHours(this._game.sync.serverTimeBys * 1000); //当前几点钟
                    if (curHour >= 19 || curHour < 1) {
                        onlineNum += 100;
                    }
                }
                var innerHtml = StringU.substitute("在线<span style='color:#18ff00'>{0}</span>人", onlineNum);
                this._htmlText.innerHTML = innerHtml;
                this.onUpdateChipGrey();
                this.onUpdateSeatedList(qifu_index);
            };
            BcbmMapPage.prototype.playTween = function (img, index, isTween) {
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
            BcbmMapPage.prototype.playTween1 = function (img, index, isTween) {
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
            BcbmMapPage.prototype.onOptHandler = function (optcode, msg) {
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
            //更新地图信息
            BcbmMapPage.prototype.onUpdateMapInfo = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._bcbmMapInfo = mapinfo;
                if (mapinfo) {
                    this.initRoomConfig();
                    this.onUpdateBattle();
                    this.onUpdateStatus();
                    this.onUpdateSeatedList();
                    this.onUpdateRecord();
                    this.onUpdateCountDown();
                    this.onUpdateUnit();
                }
            };
            BcbmMapPage.prototype.initRoomConfig = function () {
                var maplv = this._bcbmMapInfo.GetMapLevel();
                if (maplv && ALL_GAME_ROOM_CONFIG_ID.indexOf(maplv) != -1) {
                    this._chipArr = ROOM_CHIP_CONFIG[maplv];
                    this._seatlimit = MONEY_LIMIT_CONFIG[maplv][1];
                    this._betlimit = MONEY_LIMIT_CONFIG[maplv][2];
                    if (!this._chipArr)
                        return;
                    for (var i = 0; i < this._chipArr.length; i++) {
                        this._chipList[i].label = EnumToString.sampleChipNum(this._chipArr[i]);
                    }
                    if (!this._curChip)
                        this.onSelectChip(0);
                }
            };
            //更新座位信息
            BcbmMapPage.prototype.onUpdateSeatedList = function (qifu_index) {
                var _this = this;
                if (!this._bcbmMapInfo)
                    return;
                var seatedList = this._bcbmMapInfo.GetSeatedList();
                if (seatedList != "") {
                    // logd(mapinfo.GetSeatedList());
                    this._unitSeated = JSON.parse(seatedList);
                }
                if (!this._unitSeated.length) {
                    return;
                }
                var _loop_1 = function (i) {
                    var unitIndex = this_1._unitSeated[i][0];
                    var unit = this_1._game.sceneObjectMgr.getUnitByIdx(unitIndex);
                    if (unit) {
                        this_1._seatList[i].txt_name.text = getMainPlayerName(unit.GetName());
                        this_1._seatList[i].txt_name.fontSize = 15;
                        this_1._seatList[i].txt_money.text = EnumToString.getPointBackNum(unit.GetMoney(), 2).toString();
                        var unitHeadImg = unit.GetHeadImg();
                        if (unitHeadImg) {
                            this_1._seatList[i].img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unitHeadImg + ".png";
                        }
                        this_1._seatList[i].img_txk.visible = unit.GetVipLevel() > 0;
                        if (this_1._seatList[i].img_txk.visible) {
                            this_1._seatList[i].img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + unit.GetVipLevel() + ".png";
                        }
                        //祈福成功 头像上就有动画
                        if (qifu_index && unitIndex == qifu_index) {
                            this_1._seatList[i].qifu_type.visible = true;
                            this_1._seatList[i].qifu_type.skin = this_1._qifuTypeImgUrl;
                            this_1.playTween1(this_1._seatList[i].qifu_type, qifu_index);
                        }
                        //时间戳变化 才加上祈福标志
                        if (unit.GetQFEndTime(unit.GetQiFuType() - 1) > this_1._game.sync.serverTimeBys) {
                            if (qifu_index && unitIndex == qifu_index) {
                                Laya.timer.once(2500, this_1, function () {
                                    _this._seatList[i].img_qifu.visible = true;
                                    if (unit.GetQiFuType()) {
                                        var qifuImgUrl = _this._nameStrInfo[unit.GetQiFuType() - 1];
                                        _this._seatList[i].img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + qifuImgUrl + ".png";
                                    }
                                });
                            }
                            else {
                                this_1._seatList[i].img_qifu.visible = true;
                                if (unit.GetQiFuType()) {
                                    var qifuImgUrl = this_1._nameStrInfo[unit.GetQiFuType() - 1];
                                    this_1._seatList[i].img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + qifuImgUrl + ".png";
                                }
                            }
                        }
                        else {
                            this_1._seatList[i].img_qifu.visible = false;
                        }
                    }
                    else {
                        this_1._seatList[i].txt_name.text = "";
                        this_1._seatList[i].txt_name.fontSize = 20;
                        this_1._seatList[i].txt_money.text = "点击入座";
                        this_1._seatList[i].img_icon.skin = PathGameTongyong.ui_tongyong_general + "tu_weizi.png";
                        this_1._seatList[i].img_qifu.visible = false;
                        this_1._seatList[i].qifu_type.visible = false;
                        this_1._seatList[i].img_txk.visible = false;
                    }
                };
                var this_1 = this;
                for (var i = 0; i < this._seatList.length; i++) {
                    _loop_1(i);
                }
            };
            BcbmMapPage.prototype.onUpdateCountDown = function () {
                if (!this._bcbmMapInfo)
                    return;
                this._countDown = this._bcbmMapInfo.GetCountDown();
            };
            BcbmMapPage.prototype.onUpdateChipGrey = function () {
                if (!this._game.sceneObjectMgr.mainUnit)
                    return;
                var money = this._game.sceneObjectMgr.mainUnit.GetMoney();
                for (var i = 0; i < this._chipList.length; i++) {
                    var index = this._chipList.length - 1 - i;
                    if (money < this._chipArr[index]) {
                        this._chipList[index].disabled = true;
                        this._chipList[index].y = this._curChipY;
                        if (this._curChip == this._chipArr[index]) {
                        }
                    }
                    else {
                        this._chipList[index].disabled = false;
                    }
                }
            };
            BcbmMapPage.prototype.isPlayingEff = function () {
                return this._effPage && this._effPage.isPlaying;
            };
            BcbmMapPage.prototype.onUpdateUnitOffline = function () {
                var mainPlayer = this._game.sceneObjectMgr.mainPlayer;
                if (!mainPlayer)
                    return;
                var mainPlayerInfo = mainPlayer.playerInfo;
                this._viewUI.main_player.txt_name.text = getMainPlayerName(mainPlayerInfo.nickname);
                this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + mainPlayerInfo.headimg + ".png";
                // let money = parseFloat(mainPlayerInfo.money.toFixed(2));
                this._viewUI.main_player.txt_money.text = EnumToString.getPointBackNum(mainPlayerInfo.money, 2).toString();
                this._viewUI.main_player.img_qifu.visible = mainPlayer.GetQiFuEndTime(mainPlayerInfo.qifu_type - 1) > this._game.sync.serverTimeBys;
                if (this._viewUI.main_player.img_qifu.visible) {
                    this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[mainPlayerInfo.qifu_type - 1] + ".png";
                }
                this._viewUI.main_player.img_txk.visible = mainPlayerInfo.vip_level > 0;
                if (this._viewUI.main_player.img_txk.visible) {
                    this._viewUI.main_player.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + mainPlayerInfo.vip_level + ".png";
                }
            };
            BcbmMapPage.prototype.updateMoney = function () {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (mainUnit) {
                    // let money = parseFloat(mainUnit.GetMoney().toFixed(2));
                    this._viewUI.main_player.txt_money.text = EnumToString.getPointBackNum(mainUnit.GetMoney(), 2).toString();
                }
            };
            BcbmMapPage.prototype.onUpdateBattle = function () {
                if (!this._bcbmMapInfo)
                    return;
                var battleInfoMgr = this._bcbmMapInfo.battleInfoMgr;
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
                    if (info instanceof gamecomponent.object.BattleInfoBCBMLottery) {
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            this._lotteryInfo = info;
                            this._lotteryIndex = info.lotteryIndex;
                            this._lottery = BcbmMapPage.CHE_NAME[info.lotteryIndex - 1];
                            console.log("奔驰宝马开奖索引：" + this._lotteryIndex);
                            // let carArr:number[] = this._carTypeData[this._lotteryIndex];
                            // let index:number = carArr[Math.floor(Math.random()*carArr.length)];
                            var index = info.lotteryPos - 1;
                            if (this._effPage) {
                                this._effPage.playEff(index, info.startTime, Handler.create(this, this.onEffComplete, null, false));
                                if (!this._bcbmStory.isReconnect) {
                                    this._game.playSound(Path_game_benchibaoma.music_benchibaoma + "paoche.mp3");
                                }
                            }
                        }
                    }
                    if (info instanceof gamecomponent.object.BattleInfoSettle) {
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            this.onBattleSettle(info);
                        }
                    }
                }
            };
            BcbmMapPage.prototype.onEffComplete = function (callType, type, index, isFirst, totalIdx, startIdx, endIdx) {
                var _this = this;
                if (totalIdx === void 0) { totalIdx = 0; }
                if (startIdx === void 0) { startIdx = 0; }
                if (endIdx === void 0) { endIdx = 0; }
                if (callType == 1 || callType == 2) {
                    if (totalIdx < startIdx + 5 || totalIdx > endIdx - 15) {
                        this._game.playSound(Path_game_benchibaoma.music_benchibaoma + "zhuandong.mp3");
                    }
                    else {
                        var yu = (totalIdx - startIdx - 5) % 3;
                        if (yu == 0) {
                            this._game.playSound(Path_game_benchibaoma.music_benchibaoma + "zhuandong.mp3");
                        }
                    }
                    if (totalIdx == endIdx) {
                        this._lotteryKuangIndex = this._lotteryIndex;
                        this._lotteryStartTime = this._game.sync.serverTimeBys * 1000;
                        if (this._areaKuangList[this._lotteryKuangIndex - 1])
                            this._areaKuangList[this._lotteryKuangIndex - 1].visible = true;
                        Laya.timer.once(3000, this, function () {
                            if (_this._areaKuangList[_this._lotteryKuangIndex - 1])
                                _this._areaKuangList[_this._lotteryKuangIndex - 1].visible = false;
                            _this._lotteryKuangIndex = 0;
                            _this._lotteryStartTime = 0;
                        });
                    }
                }
            };
            //战斗日志来更新桌面上的筹码
            BcbmMapPage.prototype.onBattleBet = function (info, index) {
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
                            this.moveHead(this._seatList[i], this._headStartPos[i][0], this._headStartPos[i][1], this._headEndPos[i][0], this._headEndPos[i][1]);
                            startIdx = 3 + i;
                        }
                    }
                    if (startIdx == 1) {
                        this.moveHead(this._viewUI.btn_playerList, 70, 657, 89, 639);
                    }
                }
                targetIdx = info.BetIndex;
                var type = this._chipArr.indexOf(info.BetVal) + 1;
                this.createChip(startIdx, targetIdx, type, info.BetVal, index, info.SeatIndex);
                this.updateChipOnTable(targetIdx - 1, info.BetVal, isMainPlayer);
            };
            //头像出筹码动态效果
            BcbmMapPage.prototype.moveHead = function (view, startX, startY, endX, endY) {
                Laya.Tween.clearAll(view);
                Laya.Tween.to(view, { x: endX, y: endY }, 150, null, Handler.create(this, function () {
                    Laya.Tween.to(view, { x: startX, y: startY }, 150);
                }));
            };
            BcbmMapPage.prototype.updateChipOnTable = function (index, bet, isMainPlayer) {
                if (index < 0 || index >= this._allTotalBet.length)
                    return;
                this._allTotalBet[index] += bet;
                if (isMainPlayer) {
                    this._allMainBet[index] += bet;
                    this._betMainTotal += bet;
                }
                this.updateBetNum();
            };
            BcbmMapPage.prototype.updateBetNum = function () {
                for (var i = 0; i < this._allMainBet.length; i++) {
                    this._allMainBetUI[i].text = this._allMainBet[i] + "";
                    this._allTotalBetUI[i].text = this._allTotalBet[i] + "";
                }
            };
            BcbmMapPage.prototype.onBattleSettle = function (info) {
                if (!this._game.sceneObjectMgr.mainUnit)
                    return;
                if (this._game.sceneObjectMgr.mainUnit.GetIndex() == info.SeatIndex) {
                    this._mainPlayerBenefit = parseFloat(info.SettleVal);
                }
                if (info.SettleVal == 0)
                    return;
                if (info.SettleVal == 0)
                    return;
                this.addMoneyClip(info.SeatIndex, info.SettleVal);
            };
            //更新地图状态
            BcbmMapPage.prototype.onUpdateStatus = function () {
                var _this = this;
                if (!this._bcbmMapInfo)
                    return;
                var mapStatus = this._bcbmMapInfo.GetMapState();
                if (this._curStatus == mapStatus)
                    return;
                this._curStatus = mapStatus;
                this._viewUI.btn_repeat.disabled = this._curStatus != 3 /* PLAY_STATUS_BET */;
                if (this._game.uiRoot.HUD.isOpened(page_1.BenchibaomaPageDef.PAGE_BCBM_TONGSHA) && this._curStatus >= 2 /* PLAY_STATUS_WASH_CARD */) {
                    this._pageHandle.pushClose({ id: page_1.BenchibaomaPageDef.PAGE_BCBM_TONGSHA, parent: this._game.uiRoot.HUD });
                }
                this._viewUI.box_tip.visible = false;
                this._viewUI.txt_status.visible = false;
                switch (this._curStatus) {
                    case 0 /* PLAY_STATUS_NONE */: // 准备阶段
                        // this._viewUI.box_tip.visible = true;
                        this._viewUI.txt_status.text = "";
                        this.resetUI();
                        this._pageHandle.pushClose({ id: TongyongPageDef.PAGE_TONGYONG_SETTLE, parent: this._game.uiRoot.HUD });
                        break;
                    case 2 /* PLAY_STATUS_WASH_CARD */: // 游戏开始
                        this.resetUI();
                        this._pageHandle.pushOpen({ id: page_1.BenchibaomaPageDef.PAGE_BCBM_BEGIN, parent: this._game.uiRoot.HUD });
                        this._game.playSound(Path_game_benchibaoma.music_benchibaoma + "dingding_start.mp3");
                        this._game.playSound(Path_game_benchibaoma.music_benchibaoma + "xiazhu_start.mp3");
                        break;
                    case 3 /* PLAY_STATUS_BET */: // 下注阶段
                        this._pageHandle.pushClose({ id: page_1.BenchibaomaPageDef.PAGE_BCBM_BEGIN, parent: this._game.uiRoot.HUD });
                        this.onUpdateSeatedList();
                        this._viewUI.box_tip.visible = true;
                        this._viewUI.txt_status.text = "";
                        this._viewUI.clip_status.index = 0;
                        var bool = false;
                        for (var i = 0; i < this._rebetList.length; i++) {
                            if (this._rebetList[i] > 0) {
                                bool = true;
                                break;
                            }
                        }
                        this._viewUI.btn_repeat.disabled = !bool;
                        // for (let i = 0; i < this._areaKuangList.length; i++) {
                        //     this._areaKuangList[i].visible = true;
                        //     // this._areaKuangList[i].ani1.play(0, true);
                        //     Laya.timer.once(1000, this, () => {
                        //         // this._areaKuangList[i].ani1.stop();
                        //     });
                        // }
                        break;
                    case 4 /* PLAY_STATUS_STOP_BET */: // 停止下注阶段
                        this._pageHandle.pushOpen({ id: page_1.BenchibaomaPageDef.PAGE_BCBM_END, parent: this._game.uiRoot.HUD });
                        this._game.playSound(Path_game_benchibaoma.music_benchibaoma + "dingding_end.mp3");
                        this._game.playSound(Path_game_benchibaoma.music_benchibaoma + "xiazhu_end.mp3");
                        this._bcbmStory.isReconnect = false;
                        break;
                    case 5 /* PLAY_STATUS_PUSH_CARD */: // 发牌阶段
                        this._pageHandle.pushClose({ id: page_1.BenchibaomaPageDef.PAGE_BCBM_END, parent: this._game.uiRoot.HUD });
                        this._viewUI.box_tip.visible = true;
                        this._viewUI.txt_status.text = "";
                        this._viewUI.clip_status.index = 1;
                        var betAllTotal = 0;
                        for (var i = 0; i < this._allMainBet.length; i++) {
                            betAllTotal += this._allMainBet[i];
                        }
                        if (betAllTotal > 0) {
                            for (var i = 0; i < this._allMainBet.length; i++) {
                                this._rebetList[i] = this._allMainBet[i];
                            }
                        }
                        break;
                    case 6 /* PLAY_STATUS_SHOW_CARD */: // 停止下注（开牌）阶段
                        this._viewUI.box_tip.visible = true;
                        this._viewUI.txt_status.text = "";
                        this._viewUI.clip_status.index = 1;
                        break;
                    case 7 /* PLAY_STATUS_SETTLE */: // 结算阶段
                        this.onUpdateSeatedList();
                        this._viewUI.box_tip.visible = true;
                        this._viewUI.txt_status.text = "";
                        this._viewUI.clip_status.index = 2;
                        this.flyChipEffect();
                        this.updateMoney();
                        Laya.timer.once(1000, this, function () {
                            if (_this._mainPlayerBenefit > 0) {
                                var rand = MathU.randomRange(1, 3);
                                _this._game.playSound(StringU.substitute(PathGameTongyong.music_tongyong + "win{0}.mp3", rand), true);
                            }
                            else if (_this._mainPlayerBenefit < 0) {
                                var rand = MathU.randomRange(1, 4);
                                _this._game.playSound(StringU.substitute(PathGameTongyong.music_tongyong + "lose{0}.mp3", rand), true);
                            }
                        });
                        break;
                    case 8 /* PLAY_STATUS_SHOW_INFO */: // 显示结算框阶段
                        //打开结算界面
                        this._viewUI.clip_status.index = 2;
                        this._pageHandle.pushOpen({
                            id: TongyongPageDef.PAGE_TONGYONG_SETTLE,
                            dataSource: { myBet: this._betMainTotal, myBenefit: this._mainPlayerBenefit, lottery: this._lottery },
                            parent: this._game.uiRoot.HUD
                        });
                        break;
                    case 9 /* PLAY_STATUS_RELAX */: // 休息阶段
                        Laya.Tween.clearAll(this);
                        Laya.timer.clearAll(this);
                        this.resetUI();
                        this._pageHandle.pushClose({ id: TongyongPageDef.PAGE_TONGYONG_SETTLE, parent: this._game.uiRoot.HUD });
                        this._bcbmStory.isReconnect = false;
                        this._viewUI.txt_status.text = "";
                        break;
                }
                this._pageHandle.updatePageHandle(); //更新额外界面的开关状态
                this._pageHandle.reset(); //清空额外界面存储数组
            };
            BcbmMapPage.prototype.onUpdateRecord = function () {
                if (!this._bcbmMapInfo)
                    return;
                var recordArr = [];
                var gameRecord = this._bcbmMapInfo.GetGameRecord();
                if (gameRecord != "") {
                    recordArr = JSON.parse(gameRecord);
                    //倒序
                    // for (let i = 0; i < recordArr.length / 2; i++) {
                    //     let val = recordArr[i];
                    //     recordArr[i] = recordArr[recordArr.length - 1 - i];
                    //     recordArr[recordArr.length - 1 - i] = val;
                    // }
                }
                this._viewUI.list_record.dataSource = recordArr;
            };
            BcbmMapPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            //重置UI
            BcbmMapPage.prototype.resetUI = function () {
                this._battleIndex = -1;
                this._mainPlayerBenefit = 0;
                this._betMainTotal = 0;
                this._lottery = "";
                this.clearClips();
                this.clearChip();
                for (var i = 0; i < this._allMainBet.length; i++) {
                    this._allMainBet[i] = 0;
                    this._allTotalBet[i] = 0;
                    this._allMainBetUI[i].text = "0";
                    this._allTotalBetUI[i].text = "0";
                }
                if (this._effPage) {
                    this._effPage.clear();
                }
            };
            BcbmMapPage.prototype.showIsGuest = function () {
                if (this._game.sceneObjectMgr.mainPlayer.IsIsGuest()) {
                    TongyongPageDef.ins.alertRecharge("亲爱的玩家，您正使用游客模式进行游戏，该模式下的游戏数据（包括付费数据）在删除游戏、更换设备后清空！对此造成的损失，本平台将不承担任何责任。为保障您的虚拟财产安全，我们强力建议您绑定手机号升级为正式账号。", function () { }, function () { }, true, PathGameTongyong.ui_tongyong_general + "btn_qd.png");
                    return true;
                }
                return false;
            };
            //金币变化 飘字clip
            BcbmMapPage.prototype.addMoneyClip = function (index, value) {
                var valueClip = value >= 0 ? new BenchibaomaClip(BenchibaomaClip.ADD_MONEY_FONT) : new BenchibaomaClip(BenchibaomaClip.SUB_MONEY_FONT);
                var preSkin = value >= 0 ? PathGameTongyong.ui_tongyong_general + "tu_jia.png" : PathGameTongyong.ui_tongyong_general + "tu_jian.png";
                valueClip.scale(0.8, 0.8);
                valueClip.anchorX = 0.5;
                valueClip.setText(Math.abs(value) + "", true, false, preSkin);
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
                    // logd("座位" + seatIndex);
                    if (!seatIndex)
                        return;
                    if (!bool)
                        return;
                    playerIcon = this._seatList[seatIndex - 1];
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
            BcbmMapPage.prototype.clearClips = function () {
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
            //创建筹码
            BcbmMapPage.prototype.createChip = function (startIdx, targetIdx, type, value, index, unitIndex) {
                var _this = this;
                if (targetIdx < 1 || targetIdx > this._allChips.length)
                    return;
                var chip = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CHIP_MARK, BenChiBaoMaChip);
                chip.setData(startIdx, targetIdx, type, value, index, unitIndex);
                this._allChips[targetIdx - 1].push(chip);
                if (this._curStatus != 3 /* PLAY_STATUS_BET */) {
                    chip.drawChip();
                }
                else {
                    Laya.timer.once(350, this, function () {
                        chip.sendChip();
                        _this._game.playSound(Path_game_benchibaoma.music_benchibaoma + "chouma.mp3", false);
                    });
                }
                this._chipSortScore = index; //存下来最后一个筹码层级
            };
            //结算飘筹码
            BcbmMapPage.prototype.flyChipEffect = function () {
                var _this = this;
                var _loop_2 = function (i) {
                    var chipArr = this_2._allChips[i];
                    if (i + 1 != this_2._lotteryIndex) {
                        this_2._game.playSound(Path_game_benchibaoma.music_benchibaoma + "piaoqian.mp3", false);
                        for (var j = 0; j < chipArr.length; j++) {
                            var chip = chipArr[j];
                            chip.flyChip(2, false, j, this_2._game); //庄家先收筹码
                        }
                    }
                    else {
                        Laya.timer.once(1100, this_2, function () {
                            _this._game.playSound(Path_game_benchibaoma.music_benchibaoma + "piaoqian.mp3", false);
                            for (var j = 0; j < 20; j++) {
                                var ranType = MathU.randomRange(1, 5);
                                var ranVal = _this._chipArr[ranType - 1];
                                _this._chipSortScore++;
                                _this.bankerFlyChip(2, i + 1, ranType, ranVal, _this._chipSortScore, -1);
                            }
                        });
                        Laya.timer.once(3000, this_2, this_2.bankerFlyToPlayerChip, [i]);
                    }
                };
                var this_2 = this;
                //遍历四个区域的游戏结果
                for (var i = 0; i < this._allChips.length; i++) {
                    _loop_2(i);
                }
            };
            BcbmMapPage.prototype.bankerFlyToPlayerChip = function (index) {
                var chipArr = this._allChips[index];
                if (!chipArr)
                    return;
                this._game.playSound(Path_game_benchibaoma.music_benchibaoma + "piaoqian.mp3", false);
                for (var j = 0; j < chipArr.length; j++) {
                    var chip = chipArr[j];
                    if (!chip)
                        continue;
                    var mainIndex = this._game.sceneObjectMgr.mainUnit.GetIndex();
                    if (chip._seatIndex == mainIndex) {
                        chip.flyChip(0, false, j, this._game); //主玩家收筹码
                    }
                    else {
                        var isSeat = false;
                        for (var k = 0; k < this._unitSeated.length; k++) {
                            var seatInfo = this._unitSeated[k];
                            if (seatInfo && seatInfo[0] == chip._seatIndex) {
                                chip.flyChip(3 + k, false, j, this._game); //入座玩家收筹码
                                isSeat = true;
                                break;
                            }
                        }
                        if (!isSeat) {
                            chip.flyChip(1, false, j, this._game); //其他玩家收筹码
                        }
                    }
                }
            };
            //庄家飞筹码去输的区域
            BcbmMapPage.prototype.bankerFlyChip = function (startIdx, targetIdx, type, value, index, unitIndex) {
                if (targetIdx < 1 || targetIdx > this._allChips.length)
                    return;
                var chip = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CHIP_MARK, BenChiBaoMaChip);
                chip.setData(startIdx, targetIdx, type, value, index, unitIndex);
                this._allChips[targetIdx - 1].push(chip);
                Laya.timer.once(350, this, function () {
                    chip.sendChip();
                });
            };
            //清除筹码
            BcbmMapPage.prototype.clearChip = function () {
                if (this._allChips) {
                    this._game.sceneObjectMgr.clearOfflineObject();
                    for (var i = 0; i < this._allChips.length; i++) {
                        this._allChips[i] = [];
                    }
                }
            };
            BcbmMapPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_spread.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_back.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_rule.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_set.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_zhanji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_chong.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_repeat.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_playerList.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(BenchibaomaMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
                    this._game.sceneObjectMgr.off(BenchibaomaMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                    this._game.sceneObjectMgr.off(BenchibaomaMapInfo.EVENT_STATUS_CONTINUE, this, this.onUpdateUnit); //继续游戏状态改变后
                    this._game.sceneObjectMgr.off(BenchibaomaMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown); //倒计时时间戳更新
                    this._game.sceneObjectMgr.off(BenchibaomaMapInfo.EVENT_SEATED_LIST, this, this.onUpdateSeatedList); //入座列表更新
                    this._game.sceneObjectMgr.off(BenchibaomaMapInfo.EVENT_STATUS_CHECK, this, this.initRoomConfig); //地图传送参数
                    this._game.sceneObjectMgr.off(BenchibaomaMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord); //游戏记录更新
                    this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                    this.resetUI();
                    if (this._seatList) {
                        for (var i = 0; i < this._seatList.length; i++) {
                            this._seatList[i] && this._seatList[i].off(LEvent.CLICK, this, this.onSelectSeat);
                            this._seatList[i] = null;
                        }
                        this._seatList.length = 0;
                    }
                    if (this._unitSeated) {
                        for (var i = 0; i < this._unitSeated.length; i++) {
                            this._unitSeated[i] = null;
                        }
                        this._unitSeated.length = 0;
                    }
                    if (this._chipList) {
                        for (var i = 0; i < this._chipList.length; i++) {
                            this._chipList[i] && this._chipList[i].off(LEvent.CLICK, this, this.onSelectChip);
                        }
                        this._chipList.length = 0;
                    }
                    this._chipGuangList = [];
                    this._allChips = [];
                    if (this._areaKuangList) {
                        for (var i = 0; i < this._areaList.length; i++) {
                            this._areaList[i] && this._areaList[i].off(LEvent.CLICK, this, this.onAreaBetClick);
                        }
                        this._areaKuangList = [];
                    }
                    this._areaList = [];
                    this._allMainBetUI = [];
                    this._allTotalBetUI = [];
                    if (this._effPage) {
                        this._effPage.clear();
                        this._effPage.destroy();
                        this._effPage = null;
                    }
                    if (this._htmlText) {
                        this._htmlText = null;
                    }
                    if (this._bcbmStory) {
                        this._bcbmStory.clear();
                        this._bcbmStory = null;
                    }
                    this._game.uiRoot.HUD.close(page_1.BenchibaomaPageDef.PAGE_BCBM_BEGIN);
                    this._game.uiRoot.HUD.close(page_1.BenchibaomaPageDef.PAGE_BCBM_END);
                    this._game.stopAllSound();
                    this._game.stopMusic();
                    Laya.Tween.clearAll(this);
                    Laya.timer.clearAll(this);
                }
                _super.prototype.close.call(this);
            };
            BcbmMapPage.CHE_NAME = [
                "大兰博基尼", "大保时捷", "大奔驰", "大宝马",
                "小兰博基尼", "小保时捷", "小奔驰", "小宝马"
            ];
            return BcbmMapPage;
        }(game.gui.base.Page));
        page_1.BcbmMapPage = BcbmMapPage;
        var CAR_SKIN_RENDER = [
            "",
            Path_game_benchibaoma.ui_benchibaoma + "tu_lb2.png",
            Path_game_benchibaoma.ui_benchibaoma + "tu_bsj2.png",
            Path_game_benchibaoma.ui_benchibaoma + "tu_bc2.png",
            Path_game_benchibaoma.ui_benchibaoma + "tu_bm2.png",
            Path_game_benchibaoma.ui_benchibaoma + "tu_lb3.png",
            Path_game_benchibaoma.ui_benchibaoma + "tu_bsj3.png",
            Path_game_benchibaoma.ui_benchibaoma + "tu_bc3.png",
            Path_game_benchibaoma.ui_benchibaoma + "tu_bm3.png"
        ];
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
                this.img_icon.skin = CAR_SKIN_RENDER[this._data];
            };
            MapRecordRender.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            return MapRecordRender;
        }(ui.game_ui.benchibaoma.component.RecordItemUI));
    })(page = gamebenchibaoma.page || (gamebenchibaoma.page = {}));
})(gamebenchibaoma || (gamebenchibaoma = {}));
//# sourceMappingURL=BcbmMapPage.js.map