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
var gametongyong;
(function (gametongyong) {
    var page;
    (function (page) {
        var QiFuPlayAniPage = /** @class */ (function (_super) {
            __extends(QiFuPlayAniPage, _super);
            function QiFuPlayAniPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                ];
                return _this;
            }
            // 页面初始化函数a
            QiFuPlayAniPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.tongyong.effect.QiFuUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            QiFuPlayAniPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.img0.skin = this.dataSource;
                this._viewUI.img1.skin = this.dataSource;
                this.timer.once(2500, this, this.close);
            };
            QiFuPlayAniPage.prototype.close = function () {
                if (this._viewUI) {
                    this.timer.clearAll(this);
                }
                _super.prototype.close.call(this);
            };
            return QiFuPlayAniPage;
        }(game.gui.base.Page));
        page.QiFuPlayAniPage = QiFuPlayAniPage;
    })(page = gametongyong.page || (gametongyong.page = {}));
})(gametongyong || (gametongyong = {}));
//# sourceMappingURL=QiFuPlayAniPage.js.map