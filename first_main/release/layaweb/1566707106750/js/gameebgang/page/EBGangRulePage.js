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
* 二八杠-规则
*/
var gameebgang;
(function (gameebgang) {
    var page;
    (function (page) {
        var EBGangRulePage = /** @class */ (function (_super) {
            __extends(EBGangRulePage, _super);
            function EBGangRulePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                _this._asset = [
                    Path_game_ebgang.atlas_game_ui + "ebgang.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            EBGangRulePage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.ebgang.EBGang_GuiZeUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            EBGangRulePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.lab_settle.skin = Path_game_ebgang.ui_ebgang + "guize_3.png";
                this._viewUI.btn_tab.selectHandler = Handler.create(this, this.selectHandler, null, false);
                this._viewUI.btn_tab.selectedIndex = 0 /* TYPE_WANFA_JIESHAO */;
                this._viewUI.panel_rule.vScrollBarSkin = "";
                this._viewUI.panel_rule.vScrollBar.autoHide = true;
                this._viewUI.panel_rule.vScrollBar.elasticDistance = 100;
                this._viewUI.panel_type.vScrollBarSkin = "";
                this._viewUI.panel_type.vScrollBar.autoHide = true;
                this._viewUI.panel_type.vScrollBar.elasticDistance = 100;
                this._viewUI.lab_daxiao.visible = false;
                this.setTabSelectedIndex();
            };
            EBGangRulePage.prototype.setTabSelectedIndex = function () {
                if (this._dataSource) {
                    var selectedIndex = Math.floor(this._dataSource / 10);
                    this._viewUI.btn_tab.selectedIndex = selectedIndex > 2 ? 0 : selectedIndex;
                }
            };
            EBGangRulePage.prototype.selectHandler = function (index) {
                this._viewUI.lab_wanfa.visible = this._viewUI.btn_tab.selectedIndex == 0 /* TYPE_WANFA_JIESHAO */;
                this._viewUI.panel_type.visible = this._viewUI.btn_tab.selectedIndex == 1 /* TYPE_CARD_TYPE */;
                this._viewUI.lab_settle.visible = this._viewUI.btn_tab.selectedIndex == 2 /* TYPE_SETTLE */;
            };
            EBGangRulePage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_tab.selectedIndex = 0;
                }
                _super.prototype.close.call(this);
            };
            return EBGangRulePage;
        }(game.gui.base.Page));
        page.EBGangRulePage = EBGangRulePage;
    })(page = gameebgang.page || (gameebgang.page = {}));
})(gameebgang || (gameebgang = {}));
//# sourceMappingURL=EBGangRulePage.js.map