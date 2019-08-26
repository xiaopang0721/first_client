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
* 二八杠-结算页面
*/
var gameebgang;
(function (gameebgang) {
    var page;
    (function (page) {
        var EBGangSettle = /** @class */ (function (_super) {
            __extends(EBGangSettle, _super);
            function EBGangSettle(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isGameEnd = false; //是否结束
                //倒计时
                _this._endTime = _this._game.sync.serverTimeBys + 5;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            EBGangSettle.prototype.init = function () {
                this._viewUI = this.createView('game_ui.ebgang.JieSuanUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            EBGangSettle.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.list_settle.vScrollBarSkin = "";
                this._viewUI.list_settle.scrollBar.elasticDistance = 100;
                this._viewUI.list_settle.itemRender = this.createChildren("game_ui.tongyong.JieSuanRenderUI", ListRecordItem);
                this._viewUI.list_settle.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_settle.dataSource = this.dataSource[3];
                this._isGameEnd = this.dataSource[0] + 1 == this.dataSource[4];
                this.setGameEndBtnState(this._isGameEnd);
                this._ebgStory = this._game.sceneObjectMgr.story;
                this._ebgMgr = this._ebgStory.ebgMgr;
            };
            // 设置最后结束时的按纽状态
            EBGangSettle.prototype.setGameEndBtnState = function (isEventOn) {
                this._viewUI.lab_xinxi.visible = !this._isGameEnd;
                this._viewUI.btn_continue.visible = false;
                // this._viewUI.btn_continue.visible = this._isGameEnd;
                // let state = this._game.sceneObjectMgr.mapInfo.GetMapState();
                // if (isEventOn) {
                //     this._viewUI.btn_continue.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                // } else {
                //     this._viewUI.btn_continue.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                // }
            };
            //按钮点击
            EBGangSettle.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_continue:
                        if (this._ebgMgr) {
                            this._ebgMgr.event(EBGangMgr.CONTINUE_GAME);
                            // this._game.sceneObjectMgr.changeStory(EbgangPageDef.GAME_NAME, this._game.sceneObjectMgr.story.maplv.toString(), false);
                        }
                        this.close();
                        break;
                    default:
                        break;
                }
            };
            EBGangSettle.prototype.onBlackSpriteClick = function () {
                if (!this._isGameEnd)
                    return;
                _super.prototype.onBlackSpriteClick.call(this);
            };
            EBGangSettle.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            EBGangSettle.prototype.deltaUpdate = function () {
                var curTime = this._game.sync.serverTimeBys;
                var time = Math.floor(this._endTime - curTime) + 1;
                if (time > 0) {
                    var str = this.dataSource[1] ? "有玩家余额不足，本轮游戏结束" : time + "S后开始第" + (this.dataSource[0] + 2) + "局，本轮共" + this.dataSource[4] + "局";
                    this._viewUI.lab_xinxi.text = str;
                }
                else {
                    this._isClickBlack = true;
                    // 最后一局不自动关闭
                    if (!this._isGameEnd)
                        this.close();
                }
            };
            EBGangSettle.prototype.close = function () {
                this.setGameEndBtnState(false);
                _super.prototype.close.call(this);
            };
            return EBGangSettle;
        }(game.gui.base.Page));
        page.EBGangSettle = EBGangSettle;
        var ListRecordItem = /** @class */ (function (_super) {
            __extends(ListRecordItem, _super);
            function ListRecordItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ListRecordItem.prototype.setData = function (game, data) {
                this._game = game;
                this._data = data;
                this.img_bg.visible = this._data.isMain;
                this.img_banker.visible = this._data.isbanker;
                this.lab_name.text = this._data.name;
                this.lab_point.text = this._data.point;
                this.lab_multiple.text = String(this._data.betmultiple);
                this.lab_money.text = this._data.money;
                // this.lab_bankermultiple.text = this._data.isbanker ? this._data.bankermultiple : "0";
                // this.lab_cardtype.text = this._data.cardtype;
                this.lab_name.color = this._data.isMain ? "#cc90ff" : "#ffffff";
                this.lab_point.color = this._data.isMain ? "#cc90ff" : "#ffffff";
                this.lab_multiple.color = this._data.isMain ? "#cc90ff" : "#ffffff";
                this.lab_money.color = parseFloat(this._data.money) >= 0 ? "#069e00" : "#ff0000";
                // this.lab_bankermultiple.color = this._data.isMain ? "#cc90ff" : "#ffffff";
                // this.lab_cardtype.color = this._data.isMain ? "#cc90ff" : "#ffffff";
            };
            ListRecordItem.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            return ListRecordItem;
        }(ui.game_ui.tongyong.JieSuanRenderUI));
    })(page = gameebgang.page || (gameebgang.page = {}));
})(gameebgang || (gameebgang = {}));
//# sourceMappingURL=EBGangSettle.js.map