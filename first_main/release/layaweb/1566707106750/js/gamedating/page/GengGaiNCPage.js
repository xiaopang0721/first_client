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
* name 更改昵称
*/
var gamedating;
(function (gamedating) {
    var page;
    (function (page) {
        var GengGaiNCPage = /** @class */ (function (_super) {
            __extends(GengGaiNCPage, _super);
            function GengGaiNCPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "geren.atlas",
                ];
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                return _this;
            }
            // 页面初始化函数
            GengGaiNCPage.prototype.init = function () {
                this._viewUI = this.createView("dating.GeRenNCUI");
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            GengGaiNCPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this._viewUI.btn_clear.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_enter.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.txt_name.on(LEvent.FOCUS, this, this.onFocus);
                this._viewUI.txt_name.on(LEvent.BLUR, this, this.onBlur);
            };
            GengGaiNCPage.prototype.onFocus = function (input) {
                if (input == this._viewUI.txt_name) {
                    this._viewUI.box.centerY = -100;
                }
            };
            GengGaiNCPage.prototype.onBlur = function (input) {
                if (input == this._viewUI.txt_name) {
                    this._viewUI.box.centerY = 0;
                }
            };
            GengGaiNCPage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_SETINFO) {
                    if (data && data.success == 0) {
                        this.close();
                    }
                }
            };
            GengGaiNCPage.prototype.onBtnTweenEnd = function (e, target) {
                if (target == this._viewUI.btn_clear) {
                    this._viewUI.txt_name.text = "";
                }
                else if (target == this._viewUI.btn_enter) {
                    var len = getTextLength(this._viewUI.txt_name.text, 2);
                    if (len > this._viewUI.txt_name.maxChars) {
                        this._game.showTips("名字超过最大限度！");
                        return;
                    }
                    this._game.network.call_set_info("", "", "", "", "", this._viewUI.txt_name.text);
                }
            };
            GengGaiNCPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                    this._viewUI.txt_name.off(LEvent.FOCUS, this, this.onFocus);
                    this._viewUI.txt_name.off(LEvent.BLUR, this, this.onBlur);
                }
                _super.prototype.close.call(this);
            };
            return GengGaiNCPage;
        }(game.gui.base.Page));
        page.GengGaiNCPage = GengGaiNCPage;
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=GengGaiNCPage.js.map