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
* 红黑大战开始动画
*/
var gamehonghei;
(function (gamehonghei) {
    var page;
    (function (page) {
        var HongheiStartPage = /** @class */ (function (_super) {
            __extends(HongheiStartPage, _super);
            function HongheiStartPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    Path_game_honghei.atlas_game_ui + "honghei.atlas",
                    Path_game_honghei.atlas_game_ui + "honghei/effect/bipai.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            HongheiStartPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.honghei.BiPaiUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            HongheiStartPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.ani1.on(LEvent.COMPLETE, this, this.onPlayComplte);
                this._viewUI.ani1.play(0, false);
            };
            HongheiStartPage.prototype.onPlayComplte = function () {
                this.close();
            };
            HongheiStartPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.ani1.off(LEvent.COMPLETE, this, this.onPlayComplte);
                }
                _super.prototype.close.call(this);
            };
            return HongheiStartPage;
        }(game.gui.base.Page));
        page.HongheiStartPage = HongheiStartPage;
    })(page = gamehonghei.page || (gamehonghei.page = {}));
})(gamehonghei || (gamehonghei = {}));
//# sourceMappingURL=HongheiStartPage.js.map