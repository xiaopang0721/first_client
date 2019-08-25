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
* name
*/
var gameshuiguoji;
(function (gameshuiguoji) {
    var page;
    (function (page) {
        var ShuiGuoJiRulePage = /** @class */ (function (_super) {
            __extends(ShuiGuoJiRulePage, _super);
            function ShuiGuoJiRulePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                _this._asset = [
                    Path_game_shuiguoji.atlas_game_ui + "shuiguoji.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            ShuiGuoJiRulePage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.shuiguoji.ShuiGuoJi_GuiZeUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            ShuiGuoJiRulePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.panel_rule.vScrollBarSkin = "";
                this._viewUI.panel_rule.vScrollBar.autoHide = true;
                this._viewUI.panel_rule.vScrollBar.elasticDistance = 100;
            };
            ShuiGuoJiRulePage.prototype.close = function () {
                if (this._viewUI) {
                }
                _super.prototype.close.call(this);
            };
            return ShuiGuoJiRulePage;
        }(game.gui.base.Page));
        page.ShuiGuoJiRulePage = ShuiGuoJiRulePage;
    })(page = gameshuiguoji.page || (gameshuiguoji.page = {}));
})(gameshuiguoji || (gameshuiguoji = {}));
//# sourceMappingURL=ShuiGuoJiRulePage.js.map