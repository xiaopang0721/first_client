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
var gamebrniuniu;
(function (gamebrniuniu) {
    var page;
    (function (page) {
        var BrNiuNiuTongShaPage = /** @class */ (function (_super) {
            __extends(BrNiuNiuTongShaPage, _super);
            function BrNiuNiuTongShaPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            BrNiuNiuTongShaPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.tongyong.effect.TongPeiUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            BrNiuNiuTongShaPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.ani1.on(LEvent.COMPLETE, this, this.onPlayComplte);
                this._viewUI.ani1.play(0, false);
            };
            BrNiuNiuTongShaPage.prototype.onPlayComplte = function () {
                var _this = this;
                Laya.timer.once(1000, this, function () {
                    _this.close();
                });
            };
            BrNiuNiuTongShaPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.ani1.off(LEvent.COMPLETE, this, this.onPlayComplte);
                }
                Laya.timer.clearAll(this);
                _super.prototype.close.call(this);
            };
            return BrNiuNiuTongShaPage;
        }(game.gui.base.Page));
        page.BrNiuNiuTongShaPage = BrNiuNiuTongShaPage;
    })(page = gamebrniuniu.page || (gamebrniuniu.page = {}));
})(gamebrniuniu || (gamebrniuniu = {}));
//# sourceMappingURL=BrNiuNiuTongShaPage.js.map