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
* 跑得快-规则
*/
var gamepaodekuai;
(function (gamepaodekuai) {
    var page;
    (function (page) {
        var PaodekuaiRulePage = /** @class */ (function (_super) {
            __extends(PaodekuaiRulePage, _super);
            function PaodekuaiRulePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                _this._asset = [
                    Path_game_paodekuai.atlas_game_ui + "paodekuai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            PaodekuaiRulePage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.paodekuai.PaoDeKuai_GuiZeUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            PaodekuaiRulePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_tab.selectHandler = Handler.create(this, this.selectHandler, null, false);
                if (this.dataSource) {
                    this._viewUI.btn_tab.selectedIndex = this.dataSource;
                }
                else {
                    this._viewUI.btn_tab.selectedIndex = 0 /* TYPE_JIANJIE */;
                }
                this._viewUI.panel_jianjie.vScrollBarSkin = "";
                this._viewUI.panel_jianjie.vScrollBar.autoHide = true;
                this._viewUI.panel_jianjie.vScrollBar.elasticDistance = 100;
                this._viewUI.panel_type.vScrollBarSkin = "";
                this._viewUI.panel_type.vScrollBar.autoHide = true;
                this._viewUI.panel_type.vScrollBar.elasticDistance = 100;
                this._viewUI.panel_wanfa.vScrollBarSkin = "";
                this._viewUI.panel_wanfa.vScrollBar.autoHide = true;
                this._viewUI.panel_wanfa.vScrollBar.elasticDistance = 100;
                this._viewUI.panel_qiangguan.vScrollBarSkin = "";
                this._viewUI.panel_qiangguan.vScrollBar.autoHide = true;
                this._viewUI.panel_qiangguan.vScrollBar.elasticDistance = 100;
                this._viewUI.panel_jiesuan.vScrollBarSkin = "";
                this._viewUI.panel_jiesuan.vScrollBar.autoHide = true;
                this._viewUI.panel_jiesuan.vScrollBar.elasticDistance = 100;
            };
            PaodekuaiRulePage.prototype.selectHandler = function (index) {
                this._viewUI.panel_jianjie.visible = this._viewUI.btn_tab.selectedIndex == 0 /* TYPE_JIANJIE */;
                this._viewUI.panel_type.visible = this._viewUI.btn_tab.selectedIndex == 1 /* TYPE_TYPE */;
                this._viewUI.panel_wanfa.visible = this._viewUI.btn_tab.selectedIndex == 2 /* TYPE_WANFA */;
                this._viewUI.panel_qiangguan.visible = this._viewUI.btn_tab.selectedIndex == 3 /* TYPE_QIANGGUAN */;
                this._viewUI.panel_jiesuan.visible = this._viewUI.btn_tab.selectedIndex == 4 /* TYPE_JIESUAN */;
            };
            PaodekuaiRulePage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_tab.selectedIndex = -1;
                }
                _super.prototype.close.call(this);
            };
            return PaodekuaiRulePage;
        }(game.gui.base.Page));
        page.PaodekuaiRulePage = PaodekuaiRulePage;
    })(page = gamepaodekuai.page || (gamepaodekuai.page = {}));
})(gamepaodekuai || (gamepaodekuai = {}));
//# sourceMappingURL=PaodekuaiRulePage.js.map