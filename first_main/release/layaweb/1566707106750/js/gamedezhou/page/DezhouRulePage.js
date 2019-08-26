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
var gamedezhou;
(function (gamedezhou) {
    var page;
    (function (page) {
        var DezhouRulePage = /** @class */ (function (_super) {
            __extends(DezhouRulePage, _super);
            function DezhouRulePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                _this._asset = [
                    Path_game_dezhou.atlas_game_ui + "dezhou.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            DezhouRulePage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.dezhou.DeZhou_GuiZeUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            DezhouRulePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_tab.selectHandler = Handler.create(this, this.selectHandler, null, false);
                if (this.dataSource) {
                    this._viewUI.btn_tab.selectedIndex = this.dataSource;
                }
                else {
                    this._viewUI.btn_tab.selectedIndex = DezhouRulePage.TYPE_WANFA_JIESHAO;
                }
                this._viewUI.panal_wanfa.vScrollBarSkin = "";
                this._viewUI.panal_wanfa.vScrollBar.autoHide = true;
                this._viewUI.panal_wanfa.vScrollBar.elasticDistance = 100;
                this._viewUI.panal_jiesuan.vScrollBarSkin = "";
                this._viewUI.panal_jiesuan.vScrollBar.autoHide = true;
                this._viewUI.panal_jiesuan.vScrollBar.elasticDistance = 100;
                this._viewUI.panal_settle.vScrollBarSkin = "";
                this._viewUI.panal_settle.vScrollBar.autoHide = true;
                this._viewUI.panal_settle.vScrollBar.elasticDistance = 100;
            };
            DezhouRulePage.prototype.selectHandler = function (index) {
                this._viewUI.panal_wanfa.visible = this._viewUI.btn_tab.selectedIndex == DezhouRulePage.TYPE_WANFA_JIESHAO;
                this._viewUI.panal_jiesuan.visible = this._viewUI.btn_tab.selectedIndex == DezhouRulePage.TYPE_CARD_TYPE;
                this._viewUI.panal_settle.visible = this._viewUI.btn_tab.selectedIndex == DezhouRulePage.TYPE_SETTLEMENT;
            };
            DezhouRulePage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_tab.selectedIndex = -1;
                }
                _super.prototype.close.call(this);
            };
            DezhouRulePage.TYPE_WANFA_JIESHAO = 0;
            DezhouRulePage.TYPE_CARD_TYPE = 1;
            DezhouRulePage.TYPE_SETTLEMENT = 2;
            return DezhouRulePage;
        }(game.gui.base.Page));
        page.DezhouRulePage = DezhouRulePage;
    })(page = gamedezhou.page || (gamedezhou.page = {}));
})(gamedezhou || (gamedezhou = {}));
//# sourceMappingURL=DezhouRulePage.js.map