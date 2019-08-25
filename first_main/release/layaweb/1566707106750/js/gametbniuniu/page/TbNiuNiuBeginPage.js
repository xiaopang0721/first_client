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
var gametbniuniu;
(function (gametbniuniu) {
    var page;
    (function (page) {
        var TbNiuNiuBeginPage = /** @class */ (function (_super) {
            __extends(TbNiuNiuBeginPage, _super);
            function TbNiuNiuBeginPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    Path_game_tbniuniu.atlas_game_ui + "tbniuniu.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            TbNiuNiuBeginPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.tbniuniu.GoUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            TbNiuNiuBeginPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.ani1.on(LEvent.COMPLETE, this, this.onPlayComplte);
                this._viewUI.ani1.play(0, false);
            };
            TbNiuNiuBeginPage.prototype.onPlayComplte = function () {
                this.close();
            };
            TbNiuNiuBeginPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.ani1.off(LEvent.COMPLETE, this, this.onPlayComplte);
                }
                _super.prototype.close.call(this);
            };
            return TbNiuNiuBeginPage;
        }(game.gui.base.Page));
        page.TbNiuNiuBeginPage = TbNiuNiuBeginPage;
    })(page = gametbniuniu.page || (gametbniuniu.page = {}));
})(gametbniuniu || (gametbniuniu = {}));
//# sourceMappingURL=TbNiuNiuBeginPage.js.map