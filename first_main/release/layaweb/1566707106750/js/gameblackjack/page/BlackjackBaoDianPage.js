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
* 21点-宝典
*/
var gameblackjack;
(function (gameblackjack) {
    var page;
    (function (page) {
        var BlackjackBaoDianPage = /** @class */ (function (_super) {
            __extends(BlackjackBaoDianPage, _super);
            function BlackjackBaoDianPage(v, onOpenFunc, onCloseFunc) {
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
            BlackjackBaoDianPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.ershiyidian.ErShiYiDian_BaoDianUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            BlackjackBaoDianPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.panel_baodian.vScrollBarSkin = "";
                this._viewUI.panel_baodian.vScrollBar.autoHide = true;
                this._viewUI.panel_baodian.vScrollBar.elasticDistance = 100;
            };
            BlackjackBaoDianPage.prototype.close = function () {
                _super.prototype.close.call(this);
            };
            return BlackjackBaoDianPage;
        }(game.gui.base.Page));
        page.BlackjackBaoDianPage = BlackjackBaoDianPage;
    })(page = gameblackjack.page || (gameblackjack.page = {}));
})(gameblackjack || (gameblackjack = {}));
//# sourceMappingURL=BlackjackBaoDianPage.js.map