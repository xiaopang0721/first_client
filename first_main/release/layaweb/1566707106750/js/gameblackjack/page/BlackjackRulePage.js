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
* 21点-规则
*/
var gameblackjack;
(function (gameblackjack) {
    var page;
    (function (page) {
        var BlackjackRulePage = /** @class */ (function (_super) {
            __extends(BlackjackRulePage, _super);
            function BlackjackRulePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                _this._asset = [
                    Path_game_blackjack.atlas_game_ui + "ershiyidian.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            BlackjackRulePage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.ershiyidian.ErShiYiDian_GuiZeUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            BlackjackRulePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.panel_rule.vScrollBarSkin = "";
                this._viewUI.panel_rule.vScrollBar.autoHide = true;
                this._viewUI.panel_rule.vScrollBar.elasticDistance = 100;
            };
            BlackjackRulePage.prototype.close = function () {
                _super.prototype.close.call(this);
            };
            return BlackjackRulePage;
        }(game.gui.base.Page));
        page.BlackjackRulePage = BlackjackRulePage;
    })(page = gameblackjack.page || (gameblackjack.page = {}));
})(gameblackjack || (gameblackjack = {}));
//# sourceMappingURL=BlackjackRulePage.js.map