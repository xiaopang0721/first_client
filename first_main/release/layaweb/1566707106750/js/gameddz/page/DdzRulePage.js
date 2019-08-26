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
* 斗地主-规则
*/
var gameddz;
(function (gameddz) {
    var page;
    (function (page) {
        var DdzRulePage = /** @class */ (function (_super) {
            __extends(DdzRulePage, _super);
            function DdzRulePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                _this._asset = [
                    Path_game_ddz.atlas_game_ui + "doudizhu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            DdzRulePage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.doudizhu.DouDiZhu_GuiZeUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            DdzRulePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_tab.selectHandler = Handler.create(this, this.selectHandler, null, false);
                if (this.dataSource) {
                    this._viewUI.btn_tab.selectedIndex = this.dataSource;
                }
                else {
                    this._viewUI.btn_tab.selectedIndex = 0 /* TYPE_WANFA */;
                }
            };
            DdzRulePage.prototype.selectHandler = function (index) {
                this._viewUI.img_wanfa.visible = this._viewUI.btn_tab.selectedIndex == 0 /* TYPE_WANFA */;
                this._viewUI.img_type.visible = this._viewUI.btn_tab.selectedIndex == 1 /* TYPE_TYPE */;
                this._viewUI.img_daxiao.visible = this._viewUI.btn_tab.selectedIndex == 2 /* TYPE_DAXIAO */;
                this._viewUI.img_beishu.visible = this._viewUI.btn_tab.selectedIndex == 3 /* TYPE_BEISHU */;
                this._viewUI.img_point.visible = this._viewUI.btn_tab.selectedIndex == 4 /* TYPE_POINT */;
            };
            DdzRulePage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_tab.selectedIndex = -1;
                }
                _super.prototype.close.call(this);
            };
            return DdzRulePage;
        }(game.gui.base.Page));
        page.DdzRulePage = DdzRulePage;
    })(page = gameddz.page || (gameddz.page = {}));
})(gameddz || (gameddz = {}));
//# sourceMappingURL=DdzRulePage.js.map