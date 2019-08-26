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
var gamehonghei;
(function (gamehonghei) {
    var page;
    (function (page) {
        var HongheiResultPage = /** @class */ (function (_super) {
            __extends(HongheiResultPage, _super);
            function HongheiResultPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    Path_game_honghei.atlas_game_ui + "honghei.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/bigwin.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            HongheiResultPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.honghei.YingUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            HongheiResultPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.img_result.skin = StringU.substitute(Path_game_honghei.ui_honghei + "winTxt{0}.png", this.dataSource);
                this._viewUI.ani1.on(LEvent.COMPLETE, this, this.onPlayComplte);
                this._viewUI.ani1.play(0, false);
            };
            HongheiResultPage.prototype.onPlayComplte = function () {
                this.close();
            };
            HongheiResultPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.ani1.off(LEvent.COMPLETE, this, this.onPlayComplte);
                }
                _super.prototype.close.call(this);
            };
            return HongheiResultPage;
        }(game.gui.base.Page));
        page.HongheiResultPage = HongheiResultPage;
    })(page = gamehonghei.page || (gamehonghei.page = {}));
})(gamehonghei || (gamehonghei = {}));
//# sourceMappingURL=HongheiResultPage.js.map