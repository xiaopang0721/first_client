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
var gamebairendezhou;
(function (gamebairendezhou) {
    var page;
    (function (page) {
        var BairendezhouResultPage = /** @class */ (function (_super) {
            __extends(BairendezhouResultPage, _super);
            function BairendezhouResultPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    Path_game_bairendezhou.atlas_game_ui + "bairendezhou.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/bigwin.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            BairendezhouResultPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.bairendezhou.YingUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            BairendezhouResultPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.img_result.skin = StringU.substitute(Path_game_bairendezhou.ui_bairendezhou + "winTxt{0}.png", this.dataSource);
                this._viewUI.ani1.on(LEvent.COMPLETE, this, this.onPlayComplte);
                this._viewUI.ani1.play(0, false);
            };
            BairendezhouResultPage.prototype.onPlayComplte = function () {
                this.close();
            };
            BairendezhouResultPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.ani1.off(LEvent.COMPLETE, this, this.onPlayComplte);
                }
                _super.prototype.close.call(this);
            };
            return BairendezhouResultPage;
        }(game.gui.base.Page));
        page.BairendezhouResultPage = BairendezhouResultPage;
    })(page = gamebairendezhou.page || (gamebairendezhou.page = {}));
})(gamebairendezhou || (gamebairendezhou = {}));
//# sourceMappingURL=BairendezhouResultPage.js.map