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
* name 提示
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page_1) {
        var GuestTipPage = /** @class */ (function (_super) {
            __extends(GuestTipPage, _super);
            function GuestTipPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + 'tongyong.atlas',
                ];
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                _this._isNeedDuang = false;
                return _this;
            }
            // 页面初始化函数
            GuestTipPage.prototype.init = function () {
                this._viewUI = this.createView("dating.DengLuYKUI");
                this.addChild(this._viewUI);
                this._viewUI.btn_sj.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.txt_sj.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            };
            GuestTipPage.prototype.onBtnTweenEnd = function (e, target) {
                this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDPHONE, function (page) {
                    page.dataSource = 3; //绑定手机类型
                });
            };
            // 页面打开时执行函数
            GuestTipPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
            };
            GuestTipPage.prototype.close = function () {
                if (this._viewUI) {
                }
                _super.prototype.close.call(this);
            };
            return GuestTipPage;
        }(game.gui.base.Page));
        page_1.GuestTipPage = GuestTipPage;
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=GuestTipPage.js.map