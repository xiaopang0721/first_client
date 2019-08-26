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
* name 推广帮助
*/
var gamedating;
(function (gamedating) {
    var page;
    (function (page) {
        var TuiGuangHelpPage = /** @class */ (function (_super) {
            __extends(TuiGuangHelpPage, _super);
            function TuiGuangHelpPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "tuiguang.atlas",
                ];
                _this._isNeedBlack = true;
                return _this;
            }
            // 页面初始化函数
            TuiGuangHelpPage.prototype.init = function () {
                this._viewUI = this.createView("dating.TuiGuangHelpUI");
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            TuiGuangHelpPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.txt_more.visible = this.dataSource == page.TuiGuangPage.TYPE_QUANMIN_DAILI;
            };
            TuiGuangHelpPage.prototype.onBtnTweenEnd = function (e, target) {
            };
            TuiGuangHelpPage.prototype.close = function () {
                if (this._viewUI) {
                }
                _super.prototype.close.call(this);
            };
            return TuiGuangHelpPage;
        }(game.gui.base.Page));
        page.TuiGuangHelpPage = TuiGuangHelpPage;
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=TuiGuangHelpPage.js.map