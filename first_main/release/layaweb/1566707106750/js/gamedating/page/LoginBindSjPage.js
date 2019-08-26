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
var gamedating;
(function (gamedating) {
    var page;
    (function (page) {
        /**
         * 手机绑定
         */
        var LoginBindSjPage = /** @class */ (function (_super) {
            __extends(LoginBindSjPage, _super);
            function LoginBindSjPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "denglu.atlas",
                ];
                _this._isNeedDuang = true;
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                return _this;
            }
            // 页面初始化函数
            LoginBindSjPage.prototype.init = function () {
                this._viewUI = this.createView("dating.DengLuSJ1UI");
                this.addChild(this._viewUI);
                if (!this._inputPhone) {
                    this._inputPhone = new page.MyTextInput();
                    this._inputPhone.x = this._viewUI.txt_phone.x + 5;
                    this._inputPhone.y = this._viewUI.txt_phone.y + 5;
                    this._inputPhone.width = this._viewUI.txt_phone.width;
                    this._viewUI.txt_phone.parent.addChild(this._inputPhone);
                    this._viewUI.txt_phone.removeSelf();
                }
                if (!this._inputCode) {
                    this._inputCode = new page.MyTextInput();
                    this._inputCode.x = this._viewUI.txt_code.x + 5;
                    this._inputCode.y = this._viewUI.txt_code.y + 5;
                    this._inputCode.width = this._viewUI.txt_code.width;
                    this._viewUI.txt_code.parent.addChild(this._inputCode);
                    this._viewUI.txt_code.removeSelf();
                }
                this._promptColor = WebConfig.baseplatform == page.DatingPageDef.BASE_PLATFORM_TYPE_DZQP ? "#777777" : "#b4b6b9";
                this._inputColor = WebConfig.baseplatform == page.DatingPageDef.BASE_PLATFORM_TYPE_DZQP ? "#000000" : "#060606";
            };
            // 页面打开时执行函数
            LoginBindSjPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_bind.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_get_code.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._inputPhone.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._inputCode.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this._inputPhone.settext(this._game, this._promptColor, "请输入手机号...", this._inputColor, 26, 11, page.MyTextInput.TYPE_INPUT_NUMBER);
                this._inputCode.settext(this._game, this._promptColor, "请输入验证码...", this._inputColor, 26, 6, page.MyTextInput.TYPE_INPUT_NUMBER);
                this._notStageClickUI = [this._inputPhone, this._inputCode];
            };
            LoginBindSjPage.prototype.onMouseClick = function (e) {
                for (var index = 0; index < this._notStageClickUI.length; index++) {
                    var v = this._notStageClickUI[index];
                    if (v.contains(e.target)) {
                        return;
                    }
                }
                if (this._viewUI != gamedating.DatingGame.ins.jianPanMgr.pageUI)
                    return;
                gamedating.DatingGame.ins.jianPanMgr.closeJianPan();
            };
            LoginBindSjPage.prototype.onBtnTweenEnd = function (e, target) {
                if (target == this._viewUI.btn_get_code) {
                    if (!this._inputPhone.input.text || this._inputPhone.input.text.length < 11) {
                        this._game.showTips("请输入正确手机号码！");
                        return;
                    }
                    this._game.network.call_get_bindvf(this._inputPhone.input.text);
                }
                else if (target == this._viewUI.btn_bind) {
                    if (!this._inputPhone.input.text || this._inputPhone.input.text.length < 11) {
                        this._game.showTips("请输入正确手机号码！");
                        return;
                    }
                    if (!this._inputCode.input.text) {
                        this._game.showTips("验证码不能为空");
                        return;
                    }
                    if (WebConfig.info) {
                        this._game.network.call_bind(WebConfig.account, Web_operation_fields.ACCOUNT_TYPE_MOBILE, "", "", "", "", this._inputPhone.input.text, this._inputCode.input.text, WebConfig.device, WebConfig.info.invite_code);
                    }
                }
                else if (target == this._inputPhone) {
                    this.openJianPan(this._inputPhone, this._viewUI, -10);
                }
                else if (target == this._inputCode) {
                    this.openJianPan(this._inputCode, this._viewUI, -10);
                }
            };
            LoginBindSjPage.prototype.openJianPan = function (textUI, viewUI, centerY) {
                gamedating.DatingGame.ins.jianPanMgr.openJianPan(textUI, viewUI, centerY);
            };
            LoginBindSjPage.prototype.onSucessHandler = function (data) {
                var _this = this;
                if (data.code == Web_operation_fields.CLIENT_IRCODE_PLAYERBIND) {
                    if (data && data.success == 0) {
                        this.close();
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_GETBINDVF) {
                    if (data && data.success == 0) {
                        Laya.timer.once(60000, this, function () {
                            _this._viewUI.btn_get_code.disabled = false;
                        });
                        this._viewUI.btn_get_code.disabled = true;
                        this._game.showTips("发送验证码成功");
                    }
                }
            };
            // 清理下页面
            LoginBindSjPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                    this._inputPhone.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._inputPhone.destroy();
                    this._inputPhone = null;
                    this._inputCode.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._inputCode.destroy();
                    this._inputCode = null;
                }
                _super.prototype.close.call(this);
            };
            return LoginBindSjPage;
        }(game.gui.base.Page));
        page.LoginBindSjPage = LoginBindSjPage;
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=LoginBindSjPage.js.map