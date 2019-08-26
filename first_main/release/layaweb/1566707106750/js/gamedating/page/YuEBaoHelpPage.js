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
var gamedating;
(function (gamedating) {
    var page;
    (function (page) {
        var YuEBaoHelpPage = /** @class */ (function (_super) {
            __extends(YuEBaoHelpPage, _super);
            function YuEBaoHelpPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._numbtns = [];
                _this._asset = [
                    DatingPath.atlas_dating_ui + "baoxianxiang.atlas",
                ];
                _this._isNeedBlack = true;
                return _this;
            }
            // 页面初始化函数
            YuEBaoHelpPage.prototype.init = function () {
                this._viewUI = this.createView("dating.YuEBao_BZUI");
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            YuEBaoHelpPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
            };
            YuEBaoHelpPage.prototype.close = function () {
                if (this._viewUI) {
                }
                _super.prototype.close.call(this);
            };
            return YuEBaoHelpPage;
        }(game.gui.base.Page));
        page.YuEBaoHelpPage = YuEBaoHelpPage;
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=YuEBaoHelpPage.js.map