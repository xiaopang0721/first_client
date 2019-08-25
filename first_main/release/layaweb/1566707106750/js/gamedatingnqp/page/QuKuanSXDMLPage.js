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
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page) {
        var QuKuanSXDMLPage = /** @class */ (function (_super) {
            __extends(QuKuanSXDMLPage, _super);
            function QuKuanSXDMLPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._numbtns = [];
                _this._asset = [
                    DatingPath.atlas_dating_ui + "qukuan.atlas",
                ];
                _this._isNeedBlack = true;
                return _this;
            }
            // 页面初始化函数
            QuKuanSXDMLPage.prototype.init = function () {
                this._viewUI = this.createView("dating.Qukuan_sxdmlUI");
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            QuKuanSXDMLPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_enter.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            };
            QuKuanSXDMLPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_enter.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                }
                _super.prototype.close.call(this);
            };
            QuKuanSXDMLPage.prototype.onBtnTweenEnd = function (e, target) {
                this.close();
            };
            return QuKuanSXDMLPage;
        }(game.gui.base.Page));
        page.QuKuanSXDMLPage = QuKuanSXDMLPage;
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=QuKuanSXDMLPage.js.map