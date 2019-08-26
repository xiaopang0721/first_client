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
* 十三水-规则
*/
var gameshisanshui;
(function (gameshisanshui) {
    var page;
    (function (page) {
        var ShisanshuiRulePage = /** @class */ (function (_super) {
            __extends(ShisanshuiRulePage, _super);
            function ShisanshuiRulePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                _this._asset = [
                    Path_game_shisanshui.atlas_game_ui + "shisanshui.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            ShisanshuiRulePage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.shisanshui.ShiSanShui_GuiZeUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            ShisanshuiRulePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_tab.selectHandler = Handler.create(this, this.selectHandler, null, false);
                if (this.dataSource) {
                    this._viewUI.btn_tab.selectedIndex = this.dataSource;
                }
                else {
                    this._viewUI.btn_tab.selectedIndex = 0 /* TYPE_WANFA_JIESHAO */;
                }
                this._viewUI.panel_rule.vScrollBarSkin = "";
                this._viewUI.panel_rule.vScrollBar.autoHide = true;
                this._viewUI.panel_rule.vScrollBar.elasticDistance = 100;
                this._viewUI.panel_type.vScrollBarSkin = "";
                this._viewUI.panel_type.vScrollBar.autoHide = true;
                this._viewUI.panel_type.vScrollBar.elasticDistance = 100;
                this._viewUI.panel_daxiao.vScrollBarSkin = "";
                this._viewUI.panel_daxiao.vScrollBar.autoHide = true;
                this._viewUI.panel_daxiao.vScrollBar.elasticDistance = 100;
            };
            ShisanshuiRulePage.prototype.selectHandler = function (index) {
                this._viewUI.panel_rule.visible = this._viewUI.btn_tab.selectedIndex == 0 /* TYPE_WANFA_JIESHAO */;
                this._viewUI.panel_type.visible = this._viewUI.btn_tab.selectedIndex == 1 /* TYPE_CARD_TYPE */;
                this._viewUI.panel_daxiao.visible = this._viewUI.btn_tab.selectedIndex == 2 /* TYPE_DAXIAO */;
            };
            ShisanshuiRulePage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_tab.selectedIndex = -1;
                }
                _super.prototype.close.call(this);
            };
            return ShisanshuiRulePage;
        }(game.gui.base.Page));
        page.ShisanshuiRulePage = ShisanshuiRulePage;
    })(page = gameshisanshui.page || (gameshisanshui.page = {}));
})(gameshisanshui || (gameshisanshui = {}));
//# sourceMappingURL=ShisanshuiRulePage.js.map