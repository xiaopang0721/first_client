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
* 停止下注
*/
var gamebairendezhou;
(function (gamebairendezhou) {
    var page;
    (function (page) {
        var BairendezhouEndPage = /** @class */ (function (_super) {
            __extends(BairendezhouEndPage, _super);
            function BairendezhouEndPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            BairendezhouEndPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.bairendezhou.StopUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            BairendezhouEndPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.ani1.on(LEvent.COMPLETE, this, this.onPlayComplte);
                this._viewUI.ani1.play(0, false);
            };
            BairendezhouEndPage.prototype.onPlayComplte = function () {
                this.close();
            };
            BairendezhouEndPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.ani1.off(LEvent.COMPLETE, this, this.onPlayComplte);
                }
                _super.prototype.close.call(this);
            };
            return BairendezhouEndPage;
        }(game.gui.base.Page));
        page.BairendezhouEndPage = BairendezhouEndPage;
    })(page = gamebairendezhou.page || (gamebairendezhou.page = {}));
})(gamebairendezhou || (gamebairendezhou = {}));
//# sourceMappingURL=BairendezhouEndPage.js.map