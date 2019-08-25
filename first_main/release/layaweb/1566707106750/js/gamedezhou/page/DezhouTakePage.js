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
*name
*/
var gamedezhou;
(function (gamedezhou) {
    var page;
    (function (page) {
        var DezhouTakePage = /** @class */ (function (_super) {
            __extends(DezhouTakePage, _super);
            function DezhouTakePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._takeValue = 0;
                _this._takeMoney = [[50, 400], [100, 2000], [500, 5000], [1000, 20000]]; //携带金币最大最小限制
                _this._minValue = 0;
                _this._maxValue = 0;
                _this._minValuePos = 73;
                _this._maxValuePos = 527;
                _this._mapLv = 0;
                _this._asset = [
                    Path_game_dezhou.atlas_game_ui + "dezhou.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                ];
                _this._isNeedBlack = true;
                return _this;
            }
            // 页面初始化函数
            DezhouTakePage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.dezhou.DaiRuUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            DezhouTakePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this.initView();
                this._viewUI.btn_enter.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_DEZHOU_MONEY_UPDATE, this, this.onDezhouMoneyChange);
            };
            DezhouTakePage.prototype.setdata = function (val) {
                this._mapLv = val;
            };
            DezhouTakePage.prototype.onDezhouMoneyChange = function () {
                this._player = this._game.sceneObjectMgr.mainPlayer;
                if (!this._player)
                    return;
                if (!this._player.playerInfo.dezhouMoney) {
                    this._game.showTips("带入金币错误");
                    return;
                }
                if (this.dataSource == 0) {
                    this._game.sceneObjectMgr.intoStory(page.DezhouPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_DEZHOU_1.toString());
                }
                else if (this.dataSource == 1) {
                    this._game.sceneObjectMgr.intoStory(page.DezhouPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_DEZHOU_2.toString());
                }
                else if (this.dataSource == 2) {
                    this._game.sceneObjectMgr.intoStory(page.DezhouPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_DEZHOU_3.toString());
                }
                else if (this.dataSource == 3) {
                    this._game.sceneObjectMgr.intoStory(page.DezhouPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_DEZHOU_4.toString());
                }
                this.close();
            };
            DezhouTakePage.prototype.initView = function () {
                this._player = this._game.sceneObjectMgr.mainPlayer;
                if (this.dataSource) {
                    this._mapLv = this.dataSource;
                }
                this._minValue = this._takeMoney[this._mapLv][0];
                this._maxValue = this._takeMoney[this._mapLv][1];
                this._viewUI.text_min.text = this._minValue.toString();
                this._viewUI.text_max.text = this._maxValue.toString();
                //玩家金币小于最大携带金额的二分之一
                if (this._player.playerInfo.money < this._maxValue / 2) {
                    this._maxValue = Math.floor(this._player.playerInfo.money);
                    this._takeValue = this._maxValue;
                }
                else {
                    this._takeValue = Math.floor(this._maxValue / 2);
                }
                this._viewUI.hslider_take.min = this._minValue; //最低位置值。
                this._viewUI.hslider_take.max = this._maxValue; //最高位置值。
                this._viewUI.hslider_take.value = this._takeValue; //当前位置值。
                this._viewUI.text_take.text = this._takeValue.toString();
                this._viewUI.hslider_take.changeHandler = new Handler(this, this.onChangeHslider); //设置位置变化处理器。
                this._viewUI.img_take.x = this._minValuePos + (this._maxValuePos - this._minValuePos) * (this._takeValue - this._minValue) / (this._maxValue - this._minValue);
            };
            DezhouTakePage.prototype.onBtnTweenEnd = function (e, target) {
                var _this = this;
                this._player = this._game.sceneObjectMgr.mainPlayer;
                if (!this._player)
                    return;
                switch (target) {
                    case this._viewUI.btn_enter:
                        if (this._player.playerInfo.money < this._takeValue) {
                            TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", this._takeValue), function () {
                                _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                            }, function () {
                            }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
                            return;
                        }
                        this._game.network.call_dezhou_take_money_to_room(this._takeValue);
                        break;
                }
            };
            //带入金币滚动条
            DezhouTakePage.prototype.onChangeHslider = function (value) {
                this._takeValue = value;
                this._player = this._game.sceneObjectMgr.mainPlayer;
                //最大值大于玩家拥有
                if (this._player.playerInfo.money < this._takeValue) {
                    this._takeValue = this._player.playerInfo.money;
                }
                this._viewUI.text_take.text = this._takeValue.toString();
                this._viewUI.img_take.x = this._minValuePos + (this._maxValuePos - this._minValuePos) * (this._takeValue - this._minValue) / (this._maxValue - this._minValue);
            };
            DezhouTakePage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_enter.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_DEZHOU_MONEY_UPDATE, this, this.onDezhouMoneyChange);
                }
                _super.prototype.close.call(this);
            };
            return DezhouTakePage;
        }(game.gui.base.Page));
        page.DezhouTakePage = DezhouTakePage;
    })(page = gamedezhou.page || (gamedezhou.page = {}));
})(gamedezhou || (gamedezhou = {}));
//# sourceMappingURL=DezhouTakePage.js.map