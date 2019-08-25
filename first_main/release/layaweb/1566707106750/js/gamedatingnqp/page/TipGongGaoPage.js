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
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page) {
        var TipGongGaoPage = /** @class */ (function (_super) {
            __extends(TipGongGaoPage, _super);
            function TipGongGaoPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isClickBlack = false;
                _this._isNeedDuang = false;
                // this._isNeedBlack = true;
                _this._asset = [
                    DatingPath.atlas_dating_ui + 'tongyong.atlas',
                ];
                return _this;
            }
            // 页面初始化函数
            TipGongGaoPage.prototype.init = function () {
                this._viewUI = this.createView('nqp.dating.TipsGongGaoUI');
                this.addChild(this._viewUI);
                this._viewUI.txt_label.text = "       为保证服务器的运行稳定和服务质量，所有服务器将于2019年6月28日上午8:00停机维护。预计维护时间为上午8:00至10:00，请各位玩家相互转告，并提前留意游戏时间，以免造成不必要的损失。对于维护期间给您带来的不便，敬请谅解，感谢所有玩家的支持和配合。";
            };
            // 页面打开时执行函数
            TipGongGaoPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                if (window["___main_preload"] && typeof window["___main_preload"]["closeAll"] === 'function') {
                    window["___main_preload"]["closeAll"]();
                }
                WebConfig.closeHelloImg();
                this._game.showLoadProgress();
            };
            TipGongGaoPage.prototype.close = function () {
                if (this._viewUI) {
                    _super.prototype.close.call(this);
                }
            };
            return TipGongGaoPage;
        }(game.gui.base.Page));
        page.TipGongGaoPage = TipGongGaoPage;
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=TipGongGaoPage.js.map