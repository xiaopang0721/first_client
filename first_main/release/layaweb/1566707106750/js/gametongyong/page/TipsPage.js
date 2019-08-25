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
* name 提示
*/
var gametongyong;
(function (gametongyong) {
    var page;
    (function (page) {
        var TipsPage = /** @class */ (function (_super) {
            __extends(TipsPage, _super);
            function TipsPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                ];
                _this._isNeedBlack = true;
                return _this;
            }
            // 页面初始化函数
            TipsPage.prototype.init = function () {
                this._viewUI = this.createView("game_ui.tongyong.TipsUI");
                this.addChild(this._viewUI);
                this._viewUI.btn_enter.on(LEvent.CLICK, this, this.onMouseHandle);
                this._viewUI.btn_cancle.on(LEvent.CLICK, this, this.onMouseHandle);
            };
            TipsPage.prototype.onMouseHandle = function (e) {
                if (e.currentTarget == this._viewUI.btn_enter) {
                    if (this._ecb != null) {
                        this._ecb.apply(this);
                        this._ecb = null;
                    }
                    _super.prototype.close.call(this);
                }
                else {
                    this.close();
                }
            };
            // 页面打开时执行函数
            TipsPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
            };
            TipsPage.prototype.close = function () {
                if (this._viewUI) {
                    if (this._ccb != null) {
                        this._ccb.apply(this);
                        this._ccb = null;
                    }
                }
                _super.prototype.close.call(this);
            };
            Object.defineProperty(TipsPage.prototype, "isOnlyOK", {
                set: function (isOnlyOK) {
                    this._isOnlyOK = isOnlyOK;
                    if (isOnlyOK) {
                        this._viewUI.btn_enter.centerX = 0;
                        this._viewUI.btn_cancle.visible = false;
                    }
                    else {
                        this._viewUI.btn_enter.right = 30;
                        this._viewUI.btn_cancle.left = 30;
                        this._viewUI.btn_enter.visible = true;
                        this._viewUI.btn_cancle.visible = true;
                    }
                },
                enumerable: true,
                configurable: true
            });
            TipsPage.prototype.setInfo = function (str, ecb, ccb, okSkin) {
                this._viewUI.txt_label.text = str;
                this._ecb = ecb;
                this._ccb = ccb;
                if (okSkin) {
                    this._viewUI.btn_enter.skin = okSkin;
                }
            };
            return TipsPage;
        }(game.gui.base.Page));
        page.TipsPage = TipsPage;
    })(page = gametongyong.page || (gametongyong.page = {}));
})(gametongyong || (gametongyong = {}));
//# sourceMappingURL=TipsPage.js.map