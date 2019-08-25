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
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page) {
        var Tips = /** @class */ (function (_super) {
            __extends(Tips, _super);
            function Tips(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + 'tongyong.atlas',
                ];
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                _this._isNeedDuang = false;
                return _this;
            }
            // 页面初始化函数
            Tips.prototype.init = function () {
                this._viewUI = this.createView("dating.TipsUI");
                this.addChild(this._viewUI);
                this._viewUI.btn_enter.on(LEvent.CLICK, this, this.onMouseHandle);
                this._viewUI.btn_cancle.on(LEvent.CLICK, this, this.onMouseHandle);
            };
            Tips.prototype.onMouseDown = function (e) {
                return true;
            };
            Tips.prototype.onMouseHandle = function (e) {
                if (e.currentTarget == this._viewUI.btn_enter) {
                    if (this._ecb != null) {
                        this._ecb.apply(this, [false]);
                        this._ecb = null;
                    }
                    _super.prototype.close.call(this);
                }
                else {
                    if (this._ccb != null) {
                        this._ccb.apply(this, [false]);
                        this._ccb = null;
                    }
                    this.close();
                }
            };
            // 页面打开时执行函数
            Tips.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
            };
            Tips.prototype.close = function () {
                if (this._viewUI) {
                    if (this._ccb != null) {
                        this._ccb.apply(this, [true]);
                        this._ccb = null;
                    }
                }
                _super.prototype.close.call(this);
            };
            Object.defineProperty(Tips.prototype, "isOnlyOK", {
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
            Tips.prototype.setInfo = function (str, ecb, ccb, okSkin, cancleSkin) {
                this._viewUI.txt_label.text = str;
                // TextField.setHtmlText(this._viewUI.txt_label, str);//支持HTML
                this._ecb = ecb;
                this._ccb = ccb;
                if (okSkin) {
                    this._viewUI.btn_enter.skin = okSkin;
                }
                if (cancleSkin) {
                    this._viewUI.btn_cancle.skin = cancleSkin;
                }
            };
            return Tips;
        }(game.gui.base.Page));
        page.Tips = Tips;
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=Tips.js.map