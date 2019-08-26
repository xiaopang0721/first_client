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
var gameelslp;
(function (gameelslp) {
    var page;
    (function (page) {
        var ElslpBeginPage = /** @class */ (function (_super) {
            __extends(ElslpBeginPage, _super);
            function ElslpBeginPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    Path_game_elslp.atlas_game_ui + "eluosizhuanpan.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            ElslpBeginPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.eluosizhuanpan.GoUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            ElslpBeginPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.ani1.on(LEvent.COMPLETE, this, this.onPlayComplte);
                this._viewUI.ani1.play(0, false);
            };
            ElslpBeginPage.prototype.onPlayComplte = function () {
                this.close();
            };
            ElslpBeginPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.ani1.off(LEvent.COMPLETE, this, this.onPlayComplte);
                }
                _super.prototype.close.call(this);
            };
            return ElslpBeginPage;
        }(game.gui.base.Page));
        page.ElslpBeginPage = ElslpBeginPage;
    })(page = gameelslp.page || (gameelslp.page = {}));
})(gameelslp || (gameelslp = {}));
//# sourceMappingURL=ElslpBeginPage.js.map