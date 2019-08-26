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
var gamebenchibaoma;
(function (gamebenchibaoma) {
    var page;
    (function (page) {
        var BcbmRulePage = /** @class */ (function (_super) {
            __extends(BcbmRulePage, _super);
            function BcbmRulePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                _this._asset = [
                    Path_game_benchibaoma.atlas_game_ui + "benchibaoma.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            BcbmRulePage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.benchibaoma.BenChiBaoMa_GuiZeUI');
                this.addChild(this._viewUI);
                this._viewUI.panel_rule.vScrollBarSkin = "";
                this._viewUI.panel_rule.vScrollBar.autoHide = true;
                this._viewUI.panel_rule.vScrollBar.elasticDistance = 100;
            };
            // 页面打开时执行函数
            BcbmRulePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
            };
            BcbmRulePage.prototype.close = function () {
                _super.prototype.close.call(this);
            };
            return BcbmRulePage;
        }(game.gui.base.Page));
        page.BcbmRulePage = BcbmRulePage;
    })(page = gamebenchibaoma.page || (gamebenchibaoma.page = {}));
})(gamebenchibaoma || (gamebenchibaoma = {}));
//# sourceMappingURL=BcbmRulePage.js.map