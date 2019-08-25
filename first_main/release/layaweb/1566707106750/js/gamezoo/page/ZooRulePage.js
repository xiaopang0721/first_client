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
var gamezoo;
(function (gamezoo) {
    var page;
    (function (page) {
        var ZooRulePage = /** @class */ (function (_super) {
            __extends(ZooRulePage, _super);
            function ZooRulePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                _this._asset = [
                    Path_game_zoo.atlas_game_ui + "feiqinzoushou.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            ZooRulePage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.feiqinzoushou.FeiQinZouShou_GuiZeUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            ZooRulePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.panel_rule.vScrollBarSkin = "";
                this._viewUI.panel_rule.vScrollBar.autoHide = true;
                this._viewUI.panel_rule.vScrollBar.elasticDistance = 100;
            };
            ZooRulePage.prototype.close = function () {
                _super.prototype.close.call(this);
            };
            ZooRulePage.TYPE_WANFA_JIESHAO = 0;
            ZooRulePage.TYPE_CARD_LEIXING = 1;
            ZooRulePage.TYPE_CARD_DAXIAO = 2;
            ZooRulePage.TYPE_CARD_BEISHU = 3;
            ZooRulePage.TYPE_GUANYU_WOMEN = 4;
            return ZooRulePage;
        }(game.gui.base.Page));
        page.ZooRulePage = ZooRulePage;
    })(page = gamezoo.page || (gamezoo.page = {}));
})(gamezoo || (gamezoo = {}));
//# sourceMappingURL=ZooRulePage.js.map