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
* 炸金花-规则
*/
var gamezjh;
(function (gamezjh) {
    var page;
    (function (page) {
        var ZjhRulePage = /** @class */ (function (_super) {
            __extends(ZjhRulePage, _super);
            function ZjhRulePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                _this._asset = [
                    Path_game_zjh.atlas_game_ui + "zhajinhua.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            ZjhRulePage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.zhajinhua.ZhaJinHua_GuiZeUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            ZjhRulePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_tab.selectHandler = Handler.create(this, this.selectHandler, null, false);
                if (this.dataSource) {
                    this._viewUI.btn_tab.selectedIndex = this.dataSource;
                }
                else {
                    this._viewUI.btn_tab.selectedIndex = 0 /* TYPE_WANFA_JIESHAO */;
                }
            };
            ZjhRulePage.prototype.selectHandler = function (index) {
                this._viewUI.lab_wanfa.visible = this._viewUI.btn_tab.selectedIndex == 0 /* TYPE_WANFA_JIESHAO */;
                this._viewUI.lab_type.visible = this._viewUI.btn_tab.selectedIndex == 1 /* TYPE_CARD_TYPE */;
                this._viewUI.lab_jiesuan.visible = this._viewUI.btn_tab.selectedIndex == 2 /* TYPE_SETTLEMENT */;
            };
            ZjhRulePage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_tab.selectedIndex = -1;
                }
                _super.prototype.close.call(this);
            };
            return ZjhRulePage;
        }(game.gui.base.Page));
        page.ZjhRulePage = ZjhRulePage;
    })(page = gamezjh.page || (gamezjh.page = {}));
})(gamezjh || (gamezjh = {}));
//# sourceMappingURL=ZjhRulePage.js.map