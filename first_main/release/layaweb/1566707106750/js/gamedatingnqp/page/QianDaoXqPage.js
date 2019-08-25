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
* name 签到详情
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page) {
        var QianDaoXqPage = /** @class */ (function (_super) {
            __extends(QianDaoXqPage, _super);
            function QianDaoXqPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "qiandao.atlas",
                ];
                _this._isNeedDuang = true;
                return _this;
            }
            // 页面初始化函数
            QianDaoXqPage.prototype.init = function () {
                this._viewUI = this.createView("dating.QianDao_xqUI");
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            QianDaoXqPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
            };
            QianDaoXqPage.prototype.onBtnTweenEnd = function (e, target) {
            };
            QianDaoXqPage.prototype.close = function () {
                if (this._viewUI) {
                }
                _super.prototype.close.call(this);
            };
            return QianDaoXqPage;
        }(game.gui.base.Page));
        page.QianDaoXqPage = QianDaoXqPage;
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=QianDaoXqPage.js.map