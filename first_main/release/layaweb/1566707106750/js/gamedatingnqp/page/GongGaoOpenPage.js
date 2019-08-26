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
* name 公告打开界面
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page) {
        var GongGaoOpenPage = /** @class */ (function (_super) {
            __extends(GongGaoOpenPage, _super);
            function GongGaoOpenPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "xinxi.atlas",
                ];
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                return _this;
            }
            // 页面初始化函数
            GongGaoOpenPage.prototype.init = function () {
                this._viewUI = this.createView("dating.XinXi3UI");
                this.addChild(this._viewUI);
                this._viewUI.box_tu.visible = false;
                this._viewUI.box_wenzi.visible = false;
                this._viewUI.box_wenzitu.visible = false;
            };
            // 页面打开时执行函数
            GongGaoOpenPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
            };
            GongGaoOpenPage.prototype.setData = function (data) {
                this._data = data;
                this._viewUI.box_wenzi.visible = this._data.b_type == 1;
                this._viewUI.box_tu.visible = this._data.b_type == 2;
                this._viewUI.box_wenzitu.visible = !this._viewUI.box_wenzi.visible && !this._viewUI.box_tu.visible;
                if (this._data.b_type == 1) { //纯文字
                    this._viewUI.lab_wenzi.text = data.context;
                    this._viewUI.lab_wenzi.height = this._viewUI.lab_wenzi.textField.textHeight;
                }
                if (this._data.b_type == 2) { //纯图片
                    this._viewUI.img_tu.skin = this._data.img_url;
                }
                else { //图片+文字
                    this._viewUI.img_wenzitu.skin = this._data.img_url;
                    this._viewUI.lab_wenzitu.text = data.context;
                    this._viewUI.lab_wenzitu.height = this._viewUI.lab_wenzitu.textField.textHeight;
                }
            };
            GongGaoOpenPage.prototype.close = function () {
                if (this._viewUI) {
                }
                _super.prototype.close.call(this);
            };
            return GongGaoOpenPage;
        }(game.gui.base.Page));
        page.GongGaoOpenPage = GongGaoOpenPage;
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=GongGaoOpenPage.js.map