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
* name 保存二维码
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page) {
        var TuiGuangSavePage = /** @class */ (function (_super) {
            __extends(TuiGuangSavePage, _super);
            function TuiGuangSavePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "tuiguang.atlas",
                    DatingPath.ui_dating + "tuiguang/tu_tg3.jpg",
                ];
                _this._isNeedBlack = true;
                return _this;
            }
            // 页面初始化函数
            TuiGuangSavePage.prototype.init = function () {
                this._viewUI = this.createView("dating.TuiGuangSaveUI");
                this.addChild(this._viewUI);
                this._viewUI.img_ewm.skin = WebConfig.ewmUrl;
            };
            // 页面打开时执行函数
            TuiGuangSavePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_save.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            };
            TuiGuangSavePage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_save: //保存图片
                        this._game.datingGame.saveQrcodeImage();
                        break;
                }
            };
            TuiGuangSavePage.prototype.close = function () {
                if (this._viewUI) {
                }
                _super.prototype.close.call(this);
            };
            return TuiGuangSavePage;
        }(game.gui.base.Page));
        page.TuiGuangSavePage = TuiGuangSavePage;
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=TuiGuangSavePage.js.map