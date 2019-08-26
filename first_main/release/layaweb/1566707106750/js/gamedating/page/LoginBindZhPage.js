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
         * 账号绑定
         */
        var LoginBindZhPage = /** @class */ (function (_super) {
            __extends(LoginBindZhPage, _super);
            function LoginBindZhPage(v, onOpenFunc, onCloseFunc) {
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
            LoginBindZhPage.prototype.init = function () {
                this._viewUI = this.createView("dating.DengLuZH1UI");
                this.addChild(this._viewUI);
                if (!WebConfig.isSingleEnter) {
                    if (!this._inputAccount) {
                        this._inputAccount = new page.MyTextInput();
                        this._inputAccount.x = this._viewUI.txt_account.x + 5;
                        this._inputAccount.y = this._viewUI.txt_account.y + 5;
                        this._inputAccount.width = this._viewUI.txt_account.width;
                        this._viewUI.txt_account.parent.addChild(this._inputAccount);
                        this._viewUI.txt_account.removeSelf();
                    }
                    if (!this._inputKey) {
                        this._inputKey = new page.MyTextInput();
                        this._inputKey.x = this._viewUI.txt_mima.x + 5;
                        this._inputKey.y = this._viewUI.txt_mima.y + 5;
                        this._inputKey.width = this._viewUI.txt_mima.width;
                        this._viewUI.txt_mima.parent.addChild(this._inputKey);
                        this._viewUI.txt_mima.removeSelf();
                    }
                    if (!this._inputKeyQueRen) {
                        this._inputKeyQueRen = new page.MyTextInput();
                        this._inputKeyQueRen.x = this._viewUI.txt_qrxmm.x + 5;
                        this._inputKeyQueRen.y = this._viewUI.txt_qrxmm.y + 5;
                        this._inputKeyQueRen.width = this._viewUI.txt_qrxmm.width;
                        this._viewUI.txt_qrxmm.parent.addChild(this._inputKeyQueRen);
                        this._viewUI.txt_qrxmm.removeSelf();
                    }
                    this._promptColor = WebConfig.baseplatform == page.DatingPageDef.BASE_PLATFORM_TYPE_DZQP ? "#777777" : "#b4b6b9";
                    this._inputColor = WebConfig.baseplatform == page.DatingPageDef.BASE_PLATFORM_TYPE_DZQP ? "#000000" : "#060606";
                }
            };
            // 页面打开时执行函数
            LoginBindZhPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                if (!WebConfig.isSingleEnter) {
                    this._inputAccount.settext(this._game, this._promptColor, "请输入账号…", this._inputColor, 26, 20, page.MyTextInput.TYPE_INPUT_ENGLISH);
                    this._inputKey.settext(this._game, this._promptColor, "请输入密码…", this._inputColor, 26, 20, page.MyTextInput.TYPE_INPUT_ENGLISH, true);
                    this._inputKeyQueRen.settext(this._game, this._promptColor, "请再次输入密码...", this._inputColor, 26, 20, page.MyTextInput.TYPE_INPUT_ENGLISH, true);
                    this._inputAccount.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._inputKey.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._inputKeyQueRen.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._notStageClickUI = [this._inputAccount, this._inputKey, this._inputKeyQueRen];
                }
                else {
                    this._viewUI.txt_account.restrict = "";
                    this._viewUI.txt_mima.restrict = "";
                    this._viewUI.txt_qrxmm.restrict = "";
                }
                this._viewUI.btn_bind.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
            };
            LoginBindZhPage.prototype.onMouseClick = function (e) {
                if (WebConfig.isSingleEnter)
                    return;
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
            LoginBindZhPage.prototype.onBtnTweenEnd = function (e, target) {
                if (target == this._viewUI.btn_bind) {
                    if (!WebConfig.isSingleEnter) {
                        if (!this._inputAccount.input.text) {
                            this._game.showTips("用户名不能为空");
                            return;
                        }
                        if (!this._inputKey.password) {
                            this._game.showTips("密码需要6~10位英文数字");
                            return;
                        }
                        if (this._inputKey.password.length < 6) {
                            this._game.showTips("密码需要6~10位英文数字");
                            return;
                        }
                        if (this._inputKey.password != this._inputKeyQueRen.password) {
                            this._game.showTips("两次密码不一致");
                            return;
                        }
                        if (WebConfig.info) {
                            this._game.network.call_bind(WebConfig.account, Web_operation_fields.ACCOUNT_TYPE_USERNAME, "", this._inputAccount.input.text, this._inputKeyQueRen.password, this._inputKey.password, "", "", WebConfig.device, WebConfig.info.invite_code);
                        }
                    }
                    else {
                        if (!this._viewUI.txt_account.text) {
                            this._game.showTips("用户名不能为空");
                            return;
                        }
                        if (!this._viewUI.txt_mima.text) {
                            this._game.showTips("密码需要6~10位英文数字");
                            return;
                        }
                        if (this._viewUI.txt_mima.text.length < 6) {
                            this._game.showTips("密码需要6~10位英文数字");
                            return;
                        }
                        if (this._viewUI.txt_mima.text != this._viewUI.txt_qrxmm.text) {
                            this._game.showTips("两次密码不一致");
                            return;
                        }
                        if (WebConfig.info) {
                            this._game.network.call_bind(WebConfig.account, Web_operation_fields.ACCOUNT_TYPE_USERNAME, "", this._viewUI.txt_account.text, this._viewUI.txt_qrxmm.text, this._viewUI.txt_mima.text, "", "", WebConfig.device, WebConfig.info.invite_code);
                        }
                    }
                }
                else if (target == this._inputAccount) {
                    this.openJianPan(this._inputAccount, this._viewUI, -70);
                }
                else if (target == this._inputKey) {
                    this.openJianPan(this._inputKey, this._viewUI, -70);
                }
                else if (target == this._inputKeyQueRen) {
                    this.openJianPan(this._inputKeyQueRen, this._viewUI, -70);
                }
            };
            LoginBindZhPage.prototype.openJianPan = function (textUI, viewUI, centerY) {
                gamedating.DatingGame.ins.jianPanMgr.openJianPan(textUI, viewUI, centerY);
            };
            LoginBindZhPage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_PLAYERBIND) {
                    if (data && data.success == 0) {
                        this.close();
                    }
                }
            };
            // 清理下页面
            LoginBindZhPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                    if (!WebConfig.isSingleEnter) {
                        this._inputAccount.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                        this._inputAccount.destroy();
                        this._inputAccount = null;
                        this._inputKey.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                        this._inputKey.destroy();
                        this._inputKey = null;
                        this._inputKeyQueRen.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                        this._inputKeyQueRen.destroy();
                        this._inputKeyQueRen = null;
                    }
                }
                _super.prototype.close.call(this);
            };
            return LoginBindZhPage;
        }(game.gui.base.Page));
        page.LoginBindZhPage = LoginBindZhPage;
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=LoginBindZhPage.js.map