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
* name 转盘帮助
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page) {
        var ZhuanPanHelpPage = /** @class */ (function (_super) {
            __extends(ZhuanPanHelpPage, _super);
            function ZhuanPanHelpPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "zhuanpan.atlas",
                ];
                _this._isNeedBlack = true;
                return _this;
            }
            // 页面初始化函数
            ZhuanPanHelpPage.prototype.init = function () {
                this._viewUI = this.createView("dating.ZhuanPan_bzUI");
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            ZhuanPanHelpPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                // this._viewUI.btn_bylp.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            };
            ZhuanPanHelpPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                }
            };
            ZhuanPanHelpPage.prototype.close = function () {
                if (this._viewUI) {
                }
                _super.prototype.close.call(this);
            };
            return ZhuanPanHelpPage;
        }(game.gui.base.Page));
        page.ZhuanPanHelpPage = ZhuanPanHelpPage;
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=ZhuanPanHelpPage.js.map