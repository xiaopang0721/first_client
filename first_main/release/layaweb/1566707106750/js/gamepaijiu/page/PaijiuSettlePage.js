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
* 牌九-结算
*/
var gamepaijiu;
(function (gamepaijiu) {
    var page;
    (function (page) {
        var PaijiuSettlePage = /** @class */ (function (_super) {
            __extends(PaijiuSettlePage, _super);
            function PaijiuSettlePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            PaijiuSettlePage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.paijiu.JieSuanUI');
                this.addChild(this._viewUI);
                this._paijiuStory = this._game.sceneObjectMgr.story;
                this._paijiuMgr = this._paijiuStory.paijiuMgr;
            };
            // 页面打开时执行函数
            PaijiuSettlePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.list_settle.vScrollBarSkin = "";
                this._viewUI.list_settle.scrollBar.elasticDistance = 100;
                this._viewUI.list_settle.itemRender = this.createChildren("game_ui.tongyong.JieSuanRender1UI", ListRecordItem);
                this._viewUI.list_settle.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_settle.dataSource = this.dataSource[3];
                this._endTime = this.dataSource[2];
                this._viewUI.lab_xinxi.visible = this.dataSource[0];
                this._viewUI.btn_continue.visible = false;
                // if (this.dataSource[1]) {
                //     this._viewUI.btn_continue.visible = true;
                // } else {
                //     this._viewUI.btn_continue.visible = !this.dataSource[0];
                // }
                // this._viewUI.btn_continue.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            };
            //按钮点击
            PaijiuSettlePage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_continue:
                        this._paijiuMgr.event(PaijiuMgr.CONTINUE_MATCH);
                        this.close();
                        break;
                    default:
                        break;
                }
            };
            PaijiuSettlePage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            PaijiuSettlePage.prototype.deltaUpdate = function () {
                if (!this._viewUI)
                    return;
                var curTime = this._game.sync.serverTimeBys;
                var time = Math.floor(this._endTime - curTime) + 1;
                if (time > 0) {
                    var str = this.dataSource[1] ? "有玩家余额不足，本轮游戏结束" : time + "S后开始第2局，本轮共2局";
                    this._viewUI.lab_xinxi.text = str;
                }
                else {
                    if (!this._viewUI.btn_continue.visible) {
                        this.close();
                    }
                }
            };
            PaijiuSettlePage.prototype.close = function () {
                this._viewUI.btn_continue.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                _super.prototype.close.call(this);
            };
            return PaijiuSettlePage;
        }(game.gui.base.Page));
        page.PaijiuSettlePage = PaijiuSettlePage;
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
                this.lab_betmultiple.text = this._data.betmultiple;
                this.lab_money.text = this._data.money;
                this.lab_bankermultiple.text = this._data.isbanker ? this._data.bankermultiple : "";
                this.lab_cardtype.text = this._data.cardtype;
                this.lab_name.color = this._data.isMain ? "#cc90ff" : "#ffffff";
                this.lab_point.color = this._data.isMain ? "#cc90ff" : "#ffffff";
                this.lab_betmultiple.color = this._data.isMain ? "#cc90ff" : "#ffffff";
                this.lab_money.color = parseFloat(this._data.money) >= 0 ? "#069e00" : "#ff0000";
                this.lab_bankermultiple.color = this._data.isMain ? "#cc90ff" : "#ffffff";
                this.lab_cardtype.color = this._data.isMain ? "#cc90ff" : "#ffffff";
            };
            ListRecordItem.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            return ListRecordItem;
        }(ui.game_ui.tongyong.JieSuanRender1UI));
    })(page = gamepaijiu.page || (gamepaijiu.page = {}));
})(gamepaijiu || (gamepaijiu = {}));
//# sourceMappingURL=PaijiuSettlePage.js.map