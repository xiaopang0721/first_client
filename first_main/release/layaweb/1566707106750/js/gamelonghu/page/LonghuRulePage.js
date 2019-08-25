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
var gamelonghu;
(function (gamelonghu) {
    var page;
    (function (page) {
        var LonghuRulePage = /** @class */ (function (_super) {
            __extends(LonghuRulePage, _super);
            function LonghuRulePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                _this._asset = [
                    Path_game_longhu.atlas_game_ui + "longhu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            LonghuRulePage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.longhu.LongHu_GuiZeUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            LonghuRulePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.txt_beishu.vScrollBarSkin = "";
                this._viewUI.txt_beishu.vScrollBar.autoHide = true;
                this._viewUI.txt_beishu.vScrollBar.elasticDistance = 100;
                //更新滚动条最大滚动数值
                this._viewUI.btn_tab.selectHandler = Handler.create(this, this.selectHandler, null, false);
                if (this.dataSource) {
                    this._viewUI.btn_tab.selectedIndex = this.dataSource;
                }
                else {
                    this._viewUI.btn_tab.selectedIndex = 0 /* TYPE_WANFA_JIESHAO */;
                }
            };
            LonghuRulePage.prototype.selectHandler = function (index) {
                this._viewUI.txt_wanfa.visible = this._viewUI.btn_tab.selectedIndex == 0 /* TYPE_WANFA_JIESHAO */;
                this._viewUI.txt_beishu.visible = this._viewUI.btn_tab.selectedIndex == 1 /* TYPE_CARD_BEISHU */;
            };
            LonghuRulePage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_tab.selectedIndex = -1;
                }
                _super.prototype.close.call(this);
            };
            return LonghuRulePage;
        }(game.gui.base.Page));
        page.LonghuRulePage = LonghuRulePage;
    })(page = gamelonghu.page || (gamelonghu.page = {}));
})(gamelonghu || (gamelonghu = {}));
//# sourceMappingURL=LonghuRulePage.js.map