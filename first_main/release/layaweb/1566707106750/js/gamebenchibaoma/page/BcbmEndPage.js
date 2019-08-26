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
var gamebenchibaoma;
(function (gamebenchibaoma) {
    var page;
    (function (page) {
        var BcbmEndPage = /** @class */ (function (_super) {
            __extends(BcbmEndPage, _super);
            function BcbmEndPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    Path_game_benchibaoma.atlas_game_ui + "benchibaoma.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            BcbmEndPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.benchibaoma.StopUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            BcbmEndPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.ani1.on(LEvent.COMPLETE, this, this.onPlayComplte);
                this._viewUI.ani1.play(0, false);
            };
            BcbmEndPage.prototype.onPlayComplte = function () {
                this.close();
            };
            BcbmEndPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.ani1 && this._viewUI.ani1.off(LEvent.COMPLETE, this, this.onPlayComplte);
                }
                _super.prototype.close.call(this);
            };
            return BcbmEndPage;
        }(game.gui.base.Page));
        page.BcbmEndPage = BcbmEndPage;
    })(page = gamebenchibaoma.page || (gamebenchibaoma.page = {}));
})(gamebenchibaoma || (gamebenchibaoma = {}));
//# sourceMappingURL=BcbmEndPage.js.map