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
* name 官网
*/
var gamedating;
(function (gamedating) {
    var page;
    (function (page) {
        var GuanWangPage = /** @class */ (function (_super) {
            __extends(GuanWangPage, _super);
            function GuanWangPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                // DatingPath.atlas_dating_ui + "guanwang.atlas",
                ];
                _this._isNeedBlack = true;
                return _this;
            }
            // 页面初始化函数
            GuanWangPage.prototype.init = function () {
                this._viewUI = this.createView("dating.GuanWangUI");
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            GuanWangPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                // this._viewUI.img_guanwang.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_copy.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            };
            GuanWangPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_copy: //官网
                        this._game.copyUrl();
                        break;
                    case this._viewUI.img_guanwang: //复制官网
                        WebConfig.openUrl(WebConfig.gwUrl);
                        break;
                }
            };
            GuanWangPage.prototype.close = function () {
                if (this._viewUI) {
                }
                _super.prototype.close.call(this);
            };
            return GuanWangPage;
        }(game.gui.base.Page));
        page.GuanWangPage = GuanWangPage;
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=GuanWangPage.js.map