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
* 取款密码错误次数超过提示
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page) {
        var QuKuanTishiPage = /** @class */ (function (_super) {
            __extends(QuKuanTishiPage, _super);
            function QuKuanTishiPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "qukuan.atlas",
                ];
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                _this._delta = 1000;
                return _this;
            }
            // 页面初始化函数
            QuKuanTishiPage.prototype.init = function () {
                this._viewUI = this.createView("dating.QuKuan_tsUI");
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            QuKuanTishiPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_enter.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.txt_time.text = Sync.getTimeShortStr((this._game.sceneObjectMgr.mainPlayer.GetDrawMoneyErrorCD() - this._game.sync.serverTimeBys) * 1000);
            };
            QuKuanTishiPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_enter.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                }
                _super.prototype.close.call(this);
            };
            QuKuanTishiPage.prototype.deltaUpdate = function () {
                this._viewUI.txt_time.text = Sync.getTimeShortStr((this._game.sceneObjectMgr.mainPlayer.GetDrawMoneyErrorCD() - this._game.sync.serverTimeBys) * 1000);
            };
            QuKuanTishiPage.prototype.onMouseClick = function (e) {
                this.close();
            };
            return QuKuanTishiPage;
        }(game.gui.base.Page));
        page.QuKuanTishiPage = QuKuanTishiPage;
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=QuKuanTishiPage.js.map