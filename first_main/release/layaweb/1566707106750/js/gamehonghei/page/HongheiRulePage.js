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
* 红黑大战规则
*/
var gamehonghei;
(function (gamehonghei) {
    var page;
    (function (page) {
        var HongheiRulePage = /** @class */ (function (_super) {
            __extends(HongheiRulePage, _super);
            function HongheiRulePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                _this._asset = [
                    Path_game_honghei.atlas_game_ui + "honghei.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            HongheiRulePage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.honghei.HongHei_GuiZeUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            HongheiRulePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.panel_wanfa.vScrollBarSkin = "";
                this._viewUI.panel_wanfa.vScrollBar.autoHide = true;
                this._viewUI.panel_wanfa.vScrollBar.elasticDistance = 100;
                //更新滚动条最大滚动数值
                this._viewUI.btn_tab.selectHandler = Handler.create(this, this.selectHandler, null, false);
                if (this.dataSource) {
                    this._viewUI.btn_tab.selectedIndex = this.dataSource;
                }
                else {
                    this._viewUI.btn_tab.selectedIndex = 0 /* TYPE_WANFA_JIESHAO */;
                }
            };
            HongheiRulePage.prototype.selectHandler = function (index) {
                this._viewUI.img_wanfa.visible = this._viewUI.btn_tab.selectedIndex == 0 /* TYPE_WANFA_JIESHAO */;
                this._viewUI.img_beishu.visible = this._viewUI.btn_tab.selectedIndex == 1 /* TYPE_CARD_BEISHU */;
            };
            HongheiRulePage.prototype.close = function () {
                _super.prototype.close.call(this);
            };
            return HongheiRulePage;
        }(game.gui.base.Page));
        page.HongheiRulePage = HongheiRulePage;
    })(page = gamehonghei.page || (gamehonghei.page = {}));
})(gamehonghei || (gamehonghei = {}));
//# sourceMappingURL=HongheiRulePage.js.map