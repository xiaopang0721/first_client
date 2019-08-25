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
* 规则界面
*/
var gamebairendezhou;
(function (gamebairendezhou) {
    var page;
    (function (page) {
        var TYPE_WANFA_JIESHAO = 0;
        var TYPE_CARD_TYPE = 1;
        var TYPE_SETTLE_BEISHU = 2;
        var BairendezhouRulePage = /** @class */ (function (_super) {
            __extends(BairendezhouRulePage, _super);
            function BairendezhouRulePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                _this._asset = [
                    Path_game_bairendezhou.atlas_game_ui + "bairendezhou.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            BairendezhouRulePage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.bairendezhou.BaiRenDeZhou_GuiZeUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            BairendezhouRulePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.panal_wanfa.vScrollBarSkin = "";
                this._viewUI.panal_wanfa.vScrollBar.autoHide = true;
                this._viewUI.panal_wanfa.vScrollBar.elasticDistance = 140;
                //更新滚动条最大滚动数值
                this._viewUI.btn_tab.selectHandler = Handler.create(this, this.selectHandler, null, false);
                if (this.dataSource) {
                    this._viewUI.btn_tab.selectedIndex = this.dataSource;
                }
                else {
                    this._viewUI.btn_tab.selectedIndex = TYPE_WANFA_JIESHAO;
                }
            };
            BairendezhouRulePage.prototype.selectHandler = function (index) {
                this._viewUI.img_wanfa.visible = this._viewUI.btn_tab.selectedIndex == TYPE_WANFA_JIESHAO;
                this._viewUI.img_paixing.visible = this._viewUI.btn_tab.selectedIndex == TYPE_CARD_TYPE;
                this._viewUI.img_beishu.visible = this._viewUI.btn_tab.selectedIndex == TYPE_SETTLE_BEISHU;
            };
            BairendezhouRulePage.prototype.close = function () {
                _super.prototype.close.call(this);
            };
            return BairendezhouRulePage;
        }(game.gui.base.Page));
        page.BairendezhouRulePage = BairendezhouRulePage;
    })(page = gamebairendezhou.page || (gamebairendezhou.page = {}));
})(gamebairendezhou || (gamebairendezhou = {}));
//# sourceMappingURL=BairendezhouRulePage.js.map