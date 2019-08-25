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
* 十三水-全垒打
*/
var gameshisanshui;
(function (gameshisanshui) {
    var page;
    (function (page) {
        var ShisanshuiQuanLeiDa = /** @class */ (function (_super) {
            __extends(ShisanshuiQuanLeiDa, _super);
            function ShisanshuiQuanLeiDa(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = false;
                _this._isClickBlack = false;
                _this._asset = [
                    Path_game_shisanshui.atlas_game_ui + "shisanshui.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            ShisanshuiQuanLeiDa.prototype.init = function () {
                this._viewUI = this.createView('game_ui.shisanshui.QuanLeiDaUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            ShisanshuiQuanLeiDa.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.ani1.on(LEvent.COMPLETE, this, this.close);
            };
            ShisanshuiQuanLeiDa.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.ani1.off(LEvent.COMPLETE, this, this.close);
                }
                _super.prototype.close.call(this);
            };
            return ShisanshuiQuanLeiDa;
        }(game.gui.base.Page));
        page.ShisanshuiQuanLeiDa = ShisanshuiQuanLeiDa;
    })(page = gameshisanshui.page || (gameshisanshui.page = {}));
})(gameshisanshui || (gameshisanshui = {}));
//# sourceMappingURL=ShisanshuiQuanLeiDa.js.map