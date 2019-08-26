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
* 水果机
*/
var gameshuiguoji;
(function (gameshuiguoji) {
    var page;
    (function (page_1) {
        var ALL_FIRUT = [
            8 /* TYPE_BAR */, 1 /* TYPE_PINGGUO */, 1 /* TYPE_PINGGUO */, 3 /* TYPE_MANGGUO */, 5 /* TYPE_XIGUA */,
            5 /* TYPE_XIGUA */, 9 /* TYPE_LUCKEY */, 1 /* TYPE_PINGGUO */, 2 /* TYPE_CHENGZI */, 2 /* TYPE_CHENGZI */,
            4 /* TYPE_LINGDANG */, 7 /* TYPE_QIQI */, 7 /* TYPE_QIQI */, 1 /* TYPE_PINGGUO */, 3 /* TYPE_MANGGUO */,
            3 /* TYPE_MANGGUO */, 6 /* TYPE_XINGXING */, 6 /* TYPE_XINGXING */, 9 /* TYPE_LUCKEY */, 1 /* TYPE_PINGGUO */,
            4 /* TYPE_LINGDANG */, 2 /* TYPE_CHENGZI */, 4 /* TYPE_LINGDANG */, 8 /* TYPE_BAR */
        ];
        var FIRUT_MUSIC = [
            "slot_z_apple.mp3", "slot_z_orange.mp3", "slot_z_mango.mp3", "slot_z_bell.mp3", "slot_z_water.mp3",
            "slot_z_star.mp3", "slot_z_77.mp3", "slot_z_bar.mp3"
        ];
        var ROOM_CHIP_CONFIG = [1, 5, 10, 20, 50, 100];
        var FRIUT_ALL_NUM = 8;
        var ShuiGuoJiMapPage = /** @class */ (function (_super) {
            __extends(ShuiGuoJiMapPage, _super);
            function ShuiGuoJiMapPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._chipList = []; //筹码UI集合
                _this._chipGuangList = []; //筹码光效UI集合
                _this._playerGold = 0;
                _this._caiBet = 0;
                _this._caiNumber = 0;
                _this._isRequest = false; //是否请求协议中
                _this._isPlayGame = false; //是否游戏中
                _this._canCaiMoney = 0; //可以猜大小的中奖金额
                _this._isAutoStart = false; //是否自动开始
                _this._prizeMoneyCache = 0;
                _this._isPlayDXEff = false; //播放比大小动画
                _this._isOpenRewardTips = false;
                _this._isCanResetBet = false;
                _this._isStartDownTime = 0;
                //下注
                _this._clickBetTime = 0;
                //按钮缓动回调
                _this._clickTime = 0;
                _this._diff = 500;
                _this._timeList = {};
                _this._firstList = {};
                _this._nameStrInfo = ["xs", "px", "gsy", "gg", "cs", "tdg"];
                _this._isNeedDuang = false;
                _this._delta = 0;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    Path_game_shuiguoji.atlas_game_ui + "shuiguoji.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + 'dating.atlas',
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/bigwin.atlas",
                    Path_game_shuiguoji.atlas_game_ui + "shuiguoji/effect/jinbi0.atlas",
                    Path_game_shuiguoji.atlas_game_ui + "shuiguoji/effect/jinbi1.atlas",
                    Path_game_shuiguoji.atlas_game_ui + "shuiguoji/effect/zhongjiang.atlas",
                    Path.custom_atlas_scene + 'chip.atlas',
                ];
                return _this;
            }
            // 页面初始化函数
            ShuiGuoJiMapPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.shuiguoji.ShuiGuoJiUI', ["game_ui.shuiguoji.JiangCiUI"]);
                this.addChild(this._viewUI);
                this._viewUI.mouseThrough = true;
                this._effPage = new page_1.ShuiGuoJiEffectPage(this._game, this._viewUI.box_main, this._viewUI);
                for (var i = 0; i < ROOM_CHIP_CONFIG.length; i++) {
                    this._chipList.push(this._viewUI["btn_chip" + i]);
                    this._chipList[i].label = ROOM_CHIP_CONFIG[i] + "";
                    this._chipGuangList.push(this._viewUI["guang" + i]);
                    if (i == 0) {
                        this._curChipY = this._chipList[i].y - 10;
                    }
                }
                //玩家金币
                this._playerGoldClip = new ShuiguojiClip(ShuiguojiClip.SGJ_GOLD);
                this._viewUI.clip_gold.visible = false;
                this._viewUI.clip_gold.parent.addChild(this._playerGoldClip);
                this._playerGoldClip.x = this._viewUI.clip_gold.x;
                this._playerGoldClip.y = this._viewUI.clip_gold.y;
                this._allBetClip = [];
                this._allBetClipBg = [];
                this._allBetBtn = [];
                this._allBetNum = [];
                this._allBetAni = [];
                for (var i = 0; i < FRIUT_ALL_NUM; i++) {
                    var uibet = this._viewUI["ui_bet_" + (i + 1)];
                    this._allBetClipBg[i] = new ShuiguojiClip(ShuiguojiClip.SGJ_BET_SCORE);
                    uibet.clip_bet.parent.addChild(this._allBetClipBg[i]);
                    this._allBetClipBg[i].setText("8888", true);
                    this._allBetClipBg[i].x = uibet.clip_bet.x;
                    this._allBetClipBg[i].y = uibet.clip_bet.y;
                    this._allBetClipBg[i].alpha = 0.4;
                    this._allBetClipBg[i].gray = true;
                    this._allBetClip[i] = new ShuiguojiClip(ShuiguojiClip.SGJ_BET_SCORE);
                    uibet.clip_bet.visible = false;
                    uibet.clip_bet.parent.addChild(this._allBetClip[i]);
                    this._allBetClip[i].setText("0", true);
                    this._allBetClip[i].x = uibet.clip_bet.x;
                    this._allBetClip[i].y = uibet.clip_bet.y;
                    this._allBetClip[i].anchorX = 1;
                    this._allBetClip[i].right = 4;
                    this._allBetBtn[i] = this._viewUI["btn_bet_" + (i + 1)];
                    this._allBetNum[i] = 0;
                    this._allBetAni[i] = this._viewUI["ani" + (i + 1)];
                    this._allBetAni[i].gotoAndStop(1);
                }
                this._caiBetClipBg = new ShuiguojiClip(ShuiguojiClip.SGJ_BET_SCORE);
                this._viewUI.clip_win.parent.addChild(this._caiBetClipBg);
                this._caiBetClipBg.x = this._viewUI.clip_win.x;
                this._caiBetClipBg.y = this._viewUI.clip_win.y;
                this._caiBetClipBg.anchorX = 1;
                this._caiBetClipBg.right = 4;
                this._caiBetClipBg.setText("888888888", true);
                this._caiBetClipBg.alpha = 0.4;
                this._caiBetClipBg.gray = true;
                this._caiBetClip = new ShuiguojiClip(ShuiguojiClip.SGJ_BET_SCORE);
                this._viewUI.clip_win.visible = false;
                this._viewUI.clip_win.parent.addChild(this._caiBetClip);
                this._caiBetClip.x = this._viewUI.clip_win.x;
                this._caiBetClip.y = this._viewUI.clip_win.y;
                this._caiBetClip.anchorX = 1;
                this._caiBetClip.right = 4;
                this._caiBetClip.setText("0", true);
                this._caiNumberClipBg = new ShuiguojiClip(ShuiguojiClip.SGJ_BET_SCORE);
                this._viewUI.clip_num.parent.addChild(this._caiNumberClipBg);
                this._caiNumberClipBg.x = this._viewUI.clip_num.x;
                this._caiNumberClipBg.y = this._viewUI.clip_num.y;
                this._caiNumberClipBg.anchorX = 1;
                this._caiNumberClipBg.right = 4;
                this._caiNumberClipBg.setText("88", true);
                this._caiNumberClipBg.alpha = 0.4;
                this._caiNumberClipBg.gray = true;
                this._caiNumberClip = new ShuiguojiClip(ShuiguojiClip.SGJ_BET_SCORE);
                this._viewUI.clip_num.visible = false;
                this._viewUI.clip_num.parent.addChild(this._caiNumberClip);
                this._caiNumberClip.x = this._viewUI.clip_num.x;
                this._caiNumberClip.y = this._viewUI.clip_num.y;
                this._caiNumberClip.anchorX = 1;
                this._caiNumberClip.right = 4;
                this._caiNumberClip.setText("0", true);
                this._viewUI.ani9.gotoAndStop(1);
                if (isDebug) {
                    this._testBtn = new Button(Path_game_shuiguoji.ui_shuiguoji + "btn_jt1.png", "测试");
                    this._testBtn.x = 1160;
                    this._testBtn.y = 460;
                    this._testBtn.stateNum = 1;
                    // this._viewUI.getChildAt(0).addChild(this._testBtn);
                }
            };
            // 页面打开时执行函数
            ShuiGuoJiMapPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._sgjStory = this._game.sceneObjectMgr.story;
                if (this._sgjStory) {
                    this.onUpdateMapInfo();
                }
                if (this._testBtn)
                    this._testBtn.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                for (var i = 0; i < this._chipList.length; i++) {
                    this._chipList[i] && this._chipList[i].on(LEvent.CLICK, this, this.onSelectChip, [i]);
                }
                for (var i = 0; i < this._allBetBtn.length; i++) {
                    this._allBetBtn[i] && this._allBetBtn[i].on(LEvent.CLICK, this, this.onBtnBetClickWithTween);
                }
                for (var i = 0; i < this._allBetAni.length; i++) {
                    this._allBetAni[i] && this._allBetAni[i].on(LEvent.COMPLETE, this, this.onBetAniComplete, [i]);
                }
                this._viewUI.btn_xl.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_fanhui.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rule.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_record.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_cancel_bet.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_bet_all.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_left.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_right.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_big.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_small.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chong.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_start.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_cancel_auto.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_start.on(LEvent.MOUSE_DOWN, this, this.onStartDown);
                this._viewUI.btn_start.on(LEvent.MOUSE_UP, this, this.onStartUp);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(ShuiguojiMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this._viewUI.ui_jc.onOpen(this._game);
                this._viewUI.img_set.y = -290;
                this._viewUI.img_set.zOrder = 99;
                this._viewUI.img_set.visible = false;
                this._curChip = 0;
                this.onSelectChip(0);
                this.ResetBet();
                this._isOpenRewardTips = false;
                this._isCanResetBet = false;
                this.setRequest(false);
                this.setCanCaiMoney(0);
                this.setStartBtn(false);
                this.updatePlayerInfo();
                this.updatePlayerGold();
                this.onUpdateUnitOffline();
                this._prizeMoneyCache = 0;
                this.setCaiBet(0);
                this.setCaiNumber(0);
                this._game.playMusic(Path_game_shuiguoji.music_shuiguoji + "sgj_BGM.mp3");
            };
            ShuiGuoJiMapPage.prototype.onUpdateUnitOffline = function () {
                var mainPlayer = this._game.sceneObjectMgr.mainPlayer;
                if (!mainPlayer)
                    return;
                var mainPlayerInfo = mainPlayer.playerInfo;
                this._viewUI.txt_name.text = getMainPlayerName(mainPlayerInfo.nickname);
                this._viewUI.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + mainPlayerInfo.headimg + ".png";
                // this._viewUI.main_player.img_qifu.visible = mainPlayerInfo.qifu_endtime > this._game.sync.serverTimeBys;
                // if (this._viewUI.main_player.img_qifu.visible) {
                //     this._viewUI.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[mainPlayerInfo.qifu_type - 1] + ".png";
                // }
            };
            /**按钮点击事件 带缓动 */
            ShuiGuoJiMapPage.prototype.onBtnBetClickWithTween = function (e) {
                var index = this._allBetBtn.indexOf(e.currentTarget);
                if (index == -1)
                    return;
                var soundurl = Path_game_shuiguoji.music_shuiguoji + "pressed_fruit_" + (index + 1) + ".mp3";
                this._game.uiRoot.btnTween(e.currentTarget, this, this.onClickBet, e, soundurl);
            };
            ShuiGuoJiMapPage.prototype.onMouseClick = function (e) {
                if (e.target != this._viewUI.btn_xl) {
                    this.showMenu(false);
                }
            };
            ShuiGuoJiMapPage.prototype.showMenu = function (isShow) {
                var _this = this;
                if (isShow) {
                    this._viewUI.img_set.visible = true;
                    this._viewUI.btn_xl.visible = false;
                    this._viewUI.img_set.y = -this._viewUI.img_set.height;
                    Laya.Tween.to(this._viewUI.img_set, { y: 10 }, 300, Laya.Ease.circIn);
                }
                else {
                    if (this._viewUI.img_set.y >= 0) {
                        Laya.Tween.to(this._viewUI.img_set, { y: -this._viewUI.img_set.height }, 300, Laya.Ease.circIn, Handler.create(this, function () {
                            _this._viewUI.btn_xl.visible = true;
                            _this._viewUI.img_set.visible = false;
                        }));
                    }
                }
            };
            ShuiGuoJiMapPage.prototype.onStartDown = function (e) {
                this._isStartDownTime = Laya.timer.currTimer;
            };
            ShuiGuoJiMapPage.prototype.onStartUp = function (e) {
                this._isStartDownTime = 0;
            };
            ShuiGuoJiMapPage.prototype.onBetAniComplete = function (index) {
                this._allBetAni[index].gotoAndStop(1);
            };
            ShuiGuoJiMapPage.prototype.onClickBet = function (e, target) {
                if (Laya.timer.currTimer < this._clickBetTime || this._isRequest)
                    return;
                this._clickBetTime = Laya.timer.currTimer + 200;
                if (this._viewUI.btn_start.disabled) {
                    return;
                }
                var index = this._allBetBtn.indexOf(target);
                if (index == -1)
                    return;
                if (this._prizeMoneyCache > 0) {
                    this._prizeMoneyCache = 0;
                    this.setCanCaiMoney(0);
                    this.setCaiBet(0);
                }
                this.addFriutBet(this._curChip, index);
            };
            //重置下注
            ShuiGuoJiMapPage.prototype.ResetBet = function () {
                if (Laya.timer.currTimer < this._clickBetTime || this._isRequest)
                    return;
                this._clickBetTime = Laya.timer.currTimer + 200;
                if (this._viewUI.btn_start.disabled) {
                    return;
                }
                if (this._prizeMoneyCache > 0) {
                    this._prizeMoneyCache = 0;
                    this.setCanCaiMoney(0);
                    this.setCaiBet(0);
                }
                for (var i = 0; i < this._allBetNum.length; i++) {
                    this.setFriutBet(0, i);
                }
            };
            //所有下注加1
            ShuiGuoJiMapPage.prototype.BetAll = function () {
                if (Laya.timer.currTimer < this._clickBetTime || this._isRequest)
                    return;
                this._clickBetTime = Laya.timer.currTimer + 200;
                if (this._viewUI.btn_start.disabled) {
                    return;
                }
                if (this._prizeMoneyCache > 0) {
                    this._prizeMoneyCache = 0;
                    this.setCanCaiMoney(0);
                    this.setCaiBet(0);
                }
                for (var i = 0; i < this._allBetNum.length; i++) {
                    if (!this.addFriutBet(this._curChip, i))
                        break;
                }
            };
            ShuiGuoJiMapPage.prototype.onBtnTweenEnd = function (e, target) {
                if (Laya.timer.currTimer < this._clickTime)
                    return;
                this._clickTime = Laya.timer.currTimer;
                switch (target) {
                    case this._viewUI.btn_xl: //菜单
                        this.showMenu(true);
                        break;
                    case this._viewUI.btn_fanhui: //退出
                        var isPlay = this._effPage && this._effPage.isPlaying;
                        if (isPlay) {
                            this._game.showTips("游戏中禁止退出，请先打完这局哦~");
                            TongyongPageDef.ins.alertRecharge(StringU.substitute("游戏中禁止退出，请先打完这局哦~"), function () {
                            }, function () {
                            }, true, PathGameTongyong.ui_tongyong_general + "btn_qd.png");
                            return;
                        }
                        this._game.sceneObjectMgr.off(ShuiguojiMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                        this._game.sceneObjectMgr.leaveStory(true);
                        break;
                    case this._viewUI.btn_rule: //规则
                        this._game.uiRoot.general.open(page_1.ShuiguojiPageDef.PAGE_SHUIGUOJI_RULE);
                        break;
                    case this._viewUI.btn_set: //设置
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING);
                        break;
                    case this._viewUI.btn_qifu:
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU);
                        break;
                    case this._viewUI.btn_record: //战绩
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, function (page) {
                            page.dataSource = page_1.ShuiguojiPageDef.GAME_NAME;
                        });
                        break;
                    case this._viewUI.btn_left: //减少猜大小下注量
                        if (this._isAutoStart)
                            return;
                        if (this._canCaiMoney > 0 && !this._isRequest && this._caiBet >= this._canCaiMoney) {
                            this.setCaiBet(this._caiBet * 0.5);
                        }
                        break;
                    case this._viewUI.btn_right: //增加猜大小下注量
                        if (this._isAutoStart)
                            return;
                        if (this._canCaiMoney > 0 && !this._isRequest && this._caiBet <= this._canCaiMoney) {
                            if (this._caiBet > this._playerGold) {
                                this._game.uiRoot.topUnder.showTips("老板,您的金币不够下注啦~");
                                return;
                            }
                            this.setCaiBet(this._caiBet * 2);
                        }
                        break;
                    case this._viewUI.btn_big: //猜大
                        if (this._isAutoStart)
                            return;
                        if (this._canCaiMoney > 0 && !this._isRequest && this._caiBet > 0) {
                            var param_1 = "1," + this._caiBet.toFixed(0);
                            this.setRequest(true);
                            this._game.network.call_shuiguoji_lottery(1, param_1);
                        }
                        break;
                    case this._viewUI.btn_small: //猜小
                        if (this._isAutoStart)
                            return;
                        if (this._canCaiMoney > 0 && !this._isRequest && this._caiBet > 0) {
                            var param_2 = "0," + this._caiBet.toFixed(0);
                            this.setRequest(true);
                            this._game.network.call_shuiguoji_lottery(1, param_2);
                        }
                        break;
                    case this._viewUI.btn_start: //开始
                        this.startBet();
                        break;
                    case this._viewUI.btn_cancel_auto: //取消自动
                        this.setStartBtn(false);
                        break;
                    case this._viewUI.btn_bet_all: //全部下注
                        this.BetAll();
                        break;
                    case this._viewUI.btn_cancel_bet: //取消下注
                        this.ResetBet();
                        break;
                    case this._viewUI.btn_chong: //充值
                        this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                        break;
                    case this._testBtn: //测试
                        var param = "";
                        for (var i = 0; i < this._allBetNum.length; i++) {
                            param += (i + 1) + "," + this._allBetNum[i] + ",";
                        }
                        this._game.network.call_shuiguoji_lottery(2, param);
                        break;
                    default:
                        break;
                }
            };
            ShuiGuoJiMapPage.prototype.startBet = function () {
                if (this._prizeMoneyCache > 0) {
                    this._prizeMoneyCache = 0;
                    this.setCanCaiMoney(0);
                    this.setCaiBet(0);
                    // return;
                }
                this._playerGold = 0;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (mainUnit) {
                    this._playerGold = mainUnit.GetMoney();
                }
                var betMoney = this.callBetMoney();
                if (betMoney <= 0) {
                    this.setStartBtn(false);
                    this._game.uiRoot.topUnder.showTips("老板,请先下注啦~");
                    return;
                }
                if (this._playerGold < betMoney) {
                    this.setStartBtn(false);
                    this._game.uiRoot.topUnder.showTips("老板,您的金币不够下注啦~");
                    return;
                }
                var param = "";
                for (var i = 0; i < this._allBetNum.length; i++) {
                    param += (i + 1) + "," + this._allBetNum[i] + ",";
                }
                this.setRequest(true);
                this._viewUI.ui_jc.setPlayEff(true);
                // this.setCaiBet(0);
                this._prizeMoneyCache = 0;
                this._game.network.call_shuiguoji_lottery(0, param);
            };
            //帧间隔心跳
            ShuiGuoJiMapPage.prototype.deltaUpdate = function () {
                if (!this._viewUI)
                    return;
                if (this._isStartDownTime > 0 && Laya.timer.currTimer > this._isStartDownTime + 1200) {
                    var betMoney = this.callBetMoney();
                    if (betMoney <= 0) {
                        this.setStartBtn(false);
                        this._game.uiRoot.topUnder.showTips("老板,请先下注啦~");
                    }
                    else {
                        this.setStartBtn(true);
                    }
                }
                if (this._effPage) {
                    this._effPage.Update(0);
                }
                if (this._isAutoStart && !this._isRequest) {
                    if (!this.isPlayingEff()) {
                        this.startBet();
                    }
                }
                if (this._isPlayDXEff) {
                    this.setCaiNumber(Math.ceil(Math.random() * 14));
                }
                if (this._isOpenRewardTips && !this._game.uiRoot.general.isOpened(page_1.ShuiguojiPageDef.PAGE_SHUIGUOJI_PRIZE)) {
                    this._isOpenRewardTips = false;
                    this.updateStartBtn();
                }
            };
            //-----------------------------------------
            ShuiGuoJiMapPage.prototype.setRequest = function (val) {
                this._isRequest = val;
                this.updatePlayGame();
            };
            ShuiGuoJiMapPage.prototype.setCanCaiMoney = function (val) {
                this._canCaiMoney = val;
                if (val == 0)
                    this._isPlayDXEff = false;
                this.updatePlayGame();
                if (val == 0) {
                    this._viewUI.ani9.gotoAndStop(1);
                }
            };
            ShuiGuoJiMapPage.prototype.updatePlayGame = function () {
                var isPlay = this._isRequest ? true : (this._canCaiMoney > 0 ? true : this.isPlayingEff());
                this.setPlayGame(isPlay);
            };
            ShuiGuoJiMapPage.prototype.setPlayGame = function (val) {
                this._isPlayGame = val;
                this.updateStartBtn();
            };
            ShuiGuoJiMapPage.prototype.isPlayingEff = function () {
                return (this._effPage && this._effPage.isPlaying) || this._game.uiRoot.general.isOpened(page_1.ShuiguojiPageDef.PAGE_SHUIGUOJI_PRIZE);
            };
            //筹码-------------------
            //选择筹码
            ShuiGuoJiMapPage.prototype.onSelectChip = function (index) {
                if (this._curChip == ROOM_CHIP_CONFIG[index]) {
                    return;
                }
                this._curChip = ROOM_CHIP_CONFIG[index];
                for (var i = 0; i < this._chipList.length; i++) {
                    this._chipGuangList[i].visible = i == index;
                    this._chipList[i].y = i == index ? this._curChipY - 10 : this._curChipY;
                }
            };
            //-------------------------------
            //开始按钮
            ShuiGuoJiMapPage.prototype.setStartBtn = function (isAuto) {
                this._isStartDownTime = 0;
                this._isAutoStart = isAuto;
                this._viewUI.btn_cancel_auto.visible = isAuto;
                this._viewUI.btn_start.visible = !isAuto;
            };
            //开始按钮
            ShuiGuoJiMapPage.prototype.updateStartBtn = function () {
                this._viewUI.btn_start.disabled = this.isPlayingEff() || this._isRequest || this._isPlayDXEff;
            };
            //下注------------------------------------------------
            //加注
            ShuiGuoJiMapPage.prototype.addFriutBet = function (val, index) {
                if (index < 0 || index >= this._allBetNum.length)
                    return false;
                if (this._isCanResetBet) {
                    this._isCanResetBet = false;
                    for (var i = 0; i < this._allBetNum.length; i++) {
                        this.setFriutBet(0, i);
                    }
                }
                if (val > this._playerGold) {
                    this._game.uiRoot.topUnder.showTips("老板,您的金币不够下注啦~");
                    return false;
                }
                if (val + this._allBetNum[index] > 9999) {
                    this._game.uiRoot.topUnder.showTips("老板,已达到下注上限啦~");
                    return false;
                }
                this.setFriutBet(this._allBetNum[index] + val, index);
                return true;
            };
            //设置下注
            ShuiGuoJiMapPage.prototype.setFriutBet = function (val, index) {
                if (index < 0 || index >= this._allBetNum.length)
                    return;
                this._allBetNum[index] = val;
                // let valstr:string = this.getBetStr(val);
                this._allBetClip[index].setText(val, true);
                this.updatePlayerGold(true);
            };
            ShuiGuoJiMapPage.prototype.getBetStr = function (val) {
                if (val < 10) {
                    return "000" + val;
                }
                else if (val < 100) {
                    return "00" + val;
                }
                else if (val < 1000) {
                    return "0" + val;
                }
                else {
                    return val.toFixed(0);
                }
            };
            //计算下注总额
            ShuiGuoJiMapPage.prototype.callBetMoney = function () {
                var totalBet = 0;
                for (var i = 0; i < this._allBetNum.length; i++) {
                    totalBet += this._allBetNum[i];
                }
                return totalBet;
            };
            ShuiGuoJiMapPage.prototype.playTween = function (img, index, isTween) {
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
            ShuiGuoJiMapPage.prototype.onOptHandler = function (optcode, msg) {
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
                            this.updatePlayerInfo(dataInfo_1.qifu_index);
                            break;
                    }
                }
            };
            //--------------------------------------
            //界面底部玩家信息
            ShuiGuoJiMapPage.prototype.updatePlayerInfo = function (qifu_index) {
                var _this = this;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (mainUnit) {
                    var headImg = mainUnit.GetHeadImg();
                    this._viewUI.txt_name.text = getMainPlayerName(mainUnit.GetName());
                    if (headImg) {
                        this._viewUI.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + headImg + ".png";
                    }
                    var mainIdx = mainUnit.GetIndex();
                    this._viewUI.img_txk.visible = mainUnit.GetVipLevel() > 0;
                    if (this._viewUI.img_txk.visible) {
                        this._viewUI.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + mainUnit.GetVipLevel() + ".png";
                    }
                    //祈福成功 头像上就有动画
                    if (qifu_index && mainIdx == qifu_index) {
                        this._viewUI.qifu_type.visible = true;
                        this._viewUI.qifu_type.skin = this._qifuTypeImgUrl;
                        this.playTween(this._viewUI.qifu_type, qifu_index);
                    }
                    //时间戳变化 才加上祈福标志
                    if (mainUnit.GetQiFuEndTime() > this._game.sync.serverTimeBys) {
                        if (qifu_index && mainIdx == qifu_index) {
                            Laya.timer.once(2500, this, function () {
                                _this._viewUI.img_qifu.visible = true;
                                if (_this._viewUI.img_qifu.visible) {
                                    _this._viewUI.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + _this._nameStrInfo[mainUnit.GetQiFuType() - 1] + ".png";
                                }
                            });
                        }
                        else {
                            this._viewUI.img_qifu.visible = true;
                            if (this._viewUI.img_qifu.visible) {
                                this._viewUI.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[mainUnit.GetQiFuType() - 1] + ".png";
                            }
                        }
                    }
                    else {
                        this._viewUI.img_qifu.visible = false;
                    }
                }
            };
            //更新玩家金币
            ShuiGuoJiMapPage.prototype.updatePlayerGold = function (isCalBet) {
                if (isCalBet === void 0) { isCalBet = false; }
                //主玩家的座位
                this._playerGold = 0;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (mainUnit) {
                    this._playerGold = mainUnit.GetMoney();
                    if (isCalBet) {
                        var betMoney = this.callBetMoney();
                        this._playerGold -= betMoney;
                    }
                    this._playerGold -= this._prizeMoneyCache;
                    if (this._canCaiMoney > 0) {
                        this._playerGold -= (this._caiBet - this._canCaiMoney);
                    }
                    this._playerGold = EnumToString.getPointBackNum(this._playerGold, 2);
                    this._playerGoldClip && this._playerGoldClip.setText(this._playerGold, true);
                    for (var i = 0; i < this._chipList.length; i++) {
                        this._chipList[i].disabled = ROOM_CHIP_CONFIG[i] > this._playerGold;
                    }
                }
            };
            //猜大小下注
            ShuiGuoJiMapPage.prototype.setCaiBet = function (val) {
                this._caiBet = val;
                this._caiBetClip && this._caiBetClip.setText(this._caiBet.toString(), true);
                this.updatePlayerGold();
            };
            //猜大小数字
            ShuiGuoJiMapPage.prototype.setCaiNumber = function (val) {
                this._caiNumber = val;
                this._caiNumberClip && this._caiNumberClip.setText(this._caiNumber.toFixed(0), true);
            };
            ShuiGuoJiMapPage.prototype.onUpdateMapInfo = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._sgjMapInfo = mapinfo;
                if (mapinfo) {
                    this.onUpdateBattle();
                }
            };
            ShuiGuoJiMapPage.prototype.onUpdateUnit = function () {
                if (!this._viewUI)
                    return;
                this.updatePlayerInfo();
                this.updatePlayerGold();
            };
            ShuiGuoJiMapPage.prototype.onUpdateBattle = function () {
                var _this = this;
                if (!this._viewUI)
                    return;
                if (!this._sgjMapInfo)
                    return;
                var battleInfoMgr = this._sgjMapInfo.battleInfoMgr;
                if (!battleInfoMgr)
                    return;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var info = battleInfoMgr.info[i];
                    if (info instanceof gamecomponent.object.BattleInfoSGJ) {
                        this._lotteryInfo = info;
                        if (this._lotteryInfo.prizeType == 6) {
                            //猜大小
                            this.setCanCaiMoney(0);
                            this._isPlayDXEff = true;
                            this._prizeMoneyCache = this._lotteryInfo.prizeTotalMoney;
                            this._game.playSound(Path_game_shuiguoji.music_shuiguoji + "Bidaxiao.mp3");
                            Laya.timer.once(3200, this, function () {
                                _this._isPlayDXEff = false;
                                _this.updateStartBtn();
                                _this.setCaiBet(_this._lotteryInfo.prizeTotalMoney);
                                _this.setCaiNumber(_this._lotteryInfo.prizeContent[0].money);
                                if (_this._lotteryInfo.prizeContent[0].index == 0) {
                                    _this._game.playSound(Path_game_shuiguoji.music_shuiguoji + "Bidaxiao_win.mp3");
                                }
                                else {
                                    _this._game.playSound(Path_game_shuiguoji.music_shuiguoji + "Bidaxiao_lose.mp3");
                                }
                            });
                            this.setRequest(false);
                        }
                        else {
                            if (this._effPage) {
                                this._effPage.playEff(this._lotteryInfo, Handler.create(this, this.onEffComplete, null, false));
                            }
                            this._prizeMoneyCache = this._lotteryInfo.prizeTotalMoney;
                            this._isCanResetBet = true;
                            this.setCaiBet(0);
                            this.setCanCaiMoney(0);
                            this._viewUI.ui_jc.setJacketMoney(this.getJacketMoney());
                        }
                        this.setRequest(false);
                    }
                }
            };
            ShuiGuoJiMapPage.prototype.onEffComplete = function (callType, type, index, isFirst, totalIdx, startIdx, endIdx) {
                var _this = this;
                if (totalIdx === void 0) { totalIdx = 0; }
                if (startIdx === void 0) { startIdx = 0; }
                if (endIdx === void 0) { endIdx = 0; }
                if (callType == 1) {
                    //奖励点
                    var firutType_1 = ALL_FIRUT[index];
                    var prizeMoney = this.getPrizeMoney(index);
                    if (prizeMoney > 0) {
                        this.setCanCaiMoney(this._canCaiMoney + prizeMoney);
                        this.setCaiBet(this._caiBet + prizeMoney);
                        this._allBetAni[8 - firutType_1].play(1, false);
                        if (!this._viewUI.ani9.isPlaying) {
                            this._viewUI.ani9.play(1, true);
                        }
                    }
                    this._game.playSound(Path_game_shuiguoji.music_shuiguoji + "dingzhuang.mp3");
                    Laya.timer.once(200, this, function () {
                        _this._game.playSound(Path_game_shuiguoji.music_shuiguoji + FIRUT_MUSIC[firutType_1 - 1]);
                    });
                    if (isFirst) {
                        if (type == page_1.ShuiGuoJiEffectPage.PRIZE_TYPE_DA_SAN_YUAN ||
                            type == page_1.ShuiGuoJiEffectPage.PRIZE_TYPE_DA_SI_XI ||
                            type == page_1.ShuiGuoJiEffectPage.PRIZE_TYPE_PULL_SCREEN) {
                            var musicUrl_1 = "slot_z_big_slam.mp3";
                            if (type == page_1.ShuiGuoJiEffectPage.PRIZE_TYPE_DA_SAN_YUAN) {
                                musicUrl_1 = "slot_z_big_three.mp3";
                            }
                            else if (type == page_1.ShuiGuoJiEffectPage.PRIZE_TYPE_DA_SI_XI) {
                                musicUrl_1 = "slot_z_four.mp3";
                            }
                            Laya.timer.once(800, this, function () {
                                _this._game.playSound(Path_game_shuiguoji.music_shuiguoji + musicUrl_1);
                                _this._game.uiRoot.general.open(page_1.ShuiguojiPageDef.PAGE_SHUIGUOJI_TIP_EFFECT, function (page) {
                                    page.dataSource = type;
                                });
                            });
                        }
                        if (type == page_1.ShuiGuoJiEffectPage.PRIZE_TYPE_LUCKEY) {
                            this._game.playSound(Path_game_shuiguoji.music_shuiguoji + "Lucky.mp3");
                        }
                    }
                }
                else if (callType == 2) {
                    //格子点
                    if (totalIdx == startIdx + 1) {
                        var ranIndex = Math.floor(Math.random() * 7 + 1);
                        this._game.playSound(Path_game_shuiguoji.music_shuiguoji + "slot_begin_2.mp3");
                    }
                    else if (totalIdx == endIdx - 6) {
                        this._game.playSound(Path_game_shuiguoji.music_shuiguoji + "slot_slowdown.mp3");
                    }
                    else if (totalIdx > startIdx + 30 && totalIdx < endIdx - 6) {
                        if ((endIdx - totalIdx) % 9 == 0) {
                            this._game.playSound(Path_game_shuiguoji.music_shuiguoji + "slot_fast.mp3");
                        }
                    }
                }
                else {
                    //结束
                    if (this._lotteryInfo.prizeTotalMoney > 0) {
                        this._isOpenRewardTips = true;
                        this._game.uiRoot.general.open(page_1.ShuiguojiPageDef.PAGE_SHUIGUOJI_PRIZE, function (page) {
                            page.dataSource = _this._lotteryInfo;
                        });
                    }
                    this._viewUI.ui_jc.setPlayEff(false);
                    this._viewUI.ui_jc.setJacketMoney(0);
                    this.updatePlayGame();
                }
            };
            ShuiGuoJiMapPage.prototype.getPrizeMoney = function (index) {
                if (!this._lotteryInfo || !this._lotteryInfo.prizeContent)
                    return 0;
                for (var i = 0; i < this._lotteryInfo.prizeContent.length; i++) {
                    if (this._lotteryInfo.prizeContent[i].index == index) {
                        return this._lotteryInfo.prizeContent[i].money;
                    }
                }
                return 0;
            };
            ShuiGuoJiMapPage.prototype.getJacketMoney = function () {
                if (!this._lotteryInfo || !this._lotteryInfo.jacketContent)
                    return 0;
                var money = 0;
                for (var i = 0; i < this._lotteryInfo.jacketContent.length; i++) {
                    money += this._lotteryInfo.jacketContent[i].money;
                }
                return money;
            };
            ShuiGuoJiMapPage.prototype.close = function () {
                if (this._viewUI) {
                    if (this._testBtn) {
                        this._testBtn.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                        this._testBtn.removeSelf();
                        this._testBtn.destroy();
                        this._testBtn = null;
                    }
                    this._viewUI.ui_jc && this._viewUI.ui_jc.destroy();
                    this._viewUI.btn_xl.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_fanhui.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_set.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_rule.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_record.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    for (var i = 0; i < this._chipList.length; i++) {
                        this._chipList[i] && this._chipList[i].off(LEvent.CLICK, this, this.onSelectChip);
                    }
                    this._chipList.length = 0;
                    for (var i = 0; i < this._allBetBtn.length; i++) {
                        this._allBetBtn[i] && this._allBetBtn[i].off(LEvent.CLICK, this, this.onBtnBetClickWithTween);
                    }
                    this._allBetBtn.length = 0;
                    for (var i = 0; i < this._allBetAni.length; i++) {
                        this._allBetAni[i] && this._allBetAni[i].off(LEvent.COMPLETE, this, this.onBetAniComplete);
                    }
                    this._allBetAni.length = 0;
                    this._viewUI.btn_cancel_bet.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_bet_all.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_left.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_right.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_big.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_small.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_chong.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_start.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_cancel_auto.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_start.off(LEvent.MOUSE_DOWN, this, this.onStartDown);
                    this._viewUI.btn_start.off(LEvent.MOUSE_UP, this, this.onStartUp);
                }
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(ShuiguojiMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                if (this._playerGoldClip) {
                    this._playerGoldClip.removeSelf();
                    this._playerGoldClip.destroy(true);
                    this._playerGoldClip = null;
                }
                if (this._caiBetClip) {
                    this._caiBetClip.removeSelf();
                    this._caiBetClip.destroy(true);
                    this._caiBetClip = null;
                }
                if (this._caiBetClipBg) {
                    this._caiBetClipBg.removeSelf();
                    this._caiBetClipBg.destroy(true);
                    this._caiBetClipBg = null;
                }
                if (this._caiNumberClip) {
                    this._caiNumberClip.removeSelf();
                    this._caiNumberClip.destroy(true);
                    this._caiNumberClip = null;
                }
                if (this._caiNumberClipBg) {
                    this._caiNumberClipBg.removeSelf();
                    this._caiNumberClipBg.destroy(true);
                    this._caiNumberClipBg = null;
                }
                if (this._allBetClip) {
                    for (var i = 0; i < this._allBetClip.length; i++) {
                        this._allBetClip[i].removeSelf();
                        this._allBetClip[i].destroy(true);
                        this._allBetClip[i] = null;
                    }
                    this._allBetClip.length = 0;
                }
                if (this._allBetClipBg) {
                    for (var i = 0; i < this._allBetClipBg.length; i++) {
                        this._allBetClipBg[i].removeSelf();
                        this._allBetClipBg[i].destroy(true);
                        this._allBetClipBg[i] = null;
                    }
                    this._allBetClipBg.length = 0;
                }
                for (var i = 0; i < this._chipList.length; i++) {
                    this._chipGuangList[i].disabled = false;
                    this._chipList[i].disabled = this._chipGuangList[i].disabled;
                }
                if (this._effPage)
                    this._effPage.clear();
                this._game.stopAllSound();
                this._game.stopMusic();
                Laya.Tween.clearAll(this);
                Laya.timer.clearAll(this);
                _super.prototype.close.call(this);
            };
            ShuiGuoJiMapPage.prototype.clear = function () {
                _super.prototype.clear.call(this);
                if (this._viewUI) {
                    this._viewUI.destroy();
                    this._viewUI = null;
                }
                if (this._effPage) {
                    this._effPage.destroy(true);
                    this._effPage = null;
                }
                if (this._chipList) {
                    this._chipList.length = 0;
                    this._chipGuangList.length = 0;
                }
                if (this._playerGoldClip) {
                    this._playerGoldClip.removeSelf();
                    this._playerGoldClip.destroy(true);
                    this._playerGoldClip = null;
                }
                if (this._allBetBtn) {
                    this._allBetBtn.length = 0;
                    this._allBetAni.length = 0;
                    for (var i = 0; i < this._allBetClip.length; i++) {
                        this._allBetClip[i].removeSelf();
                        this._allBetClip[i].destroy(true);
                        this._allBetClip[i] = null;
                    }
                    this._allBetClip.length = 0;
                }
                if (this._caiBetClip) {
                    this._caiBetClip.removeSelf();
                    this._caiBetClip.destroy(true);
                    this._caiBetClip = null;
                }
                if (this._caiBetClipBg) {
                    this._caiBetClipBg.removeSelf();
                    this._caiBetClipBg.destroy(true);
                    this._caiBetClipBg = null;
                }
                if (this._caiNumberClip) {
                    this._caiNumberClip.removeSelf();
                    this._caiNumberClip.destroy(true);
                    this._caiNumberClip = null;
                }
                if (this._caiNumberClipBg) {
                    this._caiNumberClipBg.removeSelf();
                    this._caiNumberClipBg.destroy(true);
                    this._caiNumberClipBg = null;
                }
            };
            ShuiGuoJiMapPage.ALL_FIRUT_BS = [
                100, 5, 3, 15, 20,
                3, 0, 5, 3, 10,
                20, 3, 40, 5, 3,
                15, 30, 3, 0, 5,
                3, 10, 20, 50
            ];
            return ShuiGuoJiMapPage;
        }(game.gui.base.Page));
        page_1.ShuiGuoJiMapPage = ShuiGuoJiMapPage;
    })(page = gameshuiguoji.page || (gameshuiguoji.page = {}));
})(gameshuiguoji || (gameshuiguoji = {}));
//# sourceMappingURL=ShuiGuoJiMapPage.js.map