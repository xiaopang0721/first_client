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
        var CloseTipsPage = /** @class */ (function (_super) {
            __extends(CloseTipsPage, _super);
            function CloseTipsPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "tuichu.atlas",
                ];
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                _this._isNeedDuang = false;
                return _this;
            }
            // 页面初始化函数
            CloseTipsPage.prototype.init = function () {
                this._viewUI = this.createView("game_ui.tongyong.Tips_backUI");
                this.addChild(this._viewUI);
                this._viewUI.btn_enter.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_cancle.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            };
            CloseTipsPage.prototype.onBtnTweenEnd = function (e, target) {
                if (target == this._viewUI.btn_enter) {
                    if (this._ecb != null) {
                        this._ecb.run();
                        this._ecb.recover();
                        this._ecb = null;
                    }
                    this.close();
                }
                else {
                    this.close();
                }
            };
            // 页面打开时执行函数
            CloseTipsPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
            };
            CloseTipsPage.prototype.close = function () {
                if (this._viewUI) {
                    if (this._ccb != null) {
                        this._ccb.run();
                        this._ccb.recover();
                        this._ccb = null;
                    }
                }
                _super.prototype.close.call(this);
            };
            CloseTipsPage.prototype.setInfo = function (gameId, ecb, ccb) {
                this._viewUI.img_meinv.skin = StringU.substitute(PathGameTongyong.ui_tongyong_tuichu + "{0}0.png", gameId);
                this._viewUI.img_guanggao.skin = StringU.substitute(PathGameTongyong.ui_tongyong_tuichu + "{0}1.png", gameId);
                this._viewUI.img_meinv.visible = true;
                this._viewUI.img_guanggao.visible = true;
                this._ecb = ecb;
                this._ccb = ccb;
            };
            return CloseTipsPage;
        }(game.gui.base.Page));
        page.CloseTipsPage = CloseTipsPage;
    })(page = gametongyong.page || (gametongyong.page = {}));
})(gametongyong || (gametongyong = {}));
//# sourceMappingURL=CloseTipsPage.js.map