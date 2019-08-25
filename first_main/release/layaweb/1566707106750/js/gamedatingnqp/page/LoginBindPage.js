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
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page) {
        /**
         * 登录绑定注册界面
         */
        var LoginBindPage = /** @class */ (function (_super) {
            __extends(LoginBindPage, _super);
            function LoginBindPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isCheck = false;
                _this._isNew = false;
                _this._isLoop = false;
                _this._countdown = 59;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "denglu.atlas",
                ];
                _this._delta = 1000;
                _this._isNeedDuang = true;
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                return _this;
            }
            // 页面初始化函数
            LoginBindPage.prototype.init = function () {
                this._viewUI = this.createView("dating.DengLuBD1UI");
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
                    if (!this._inputPsd) {
                        this._inputPsd = new page.MyTextInput();
                        this._inputPsd.x = this._viewUI.txt_psd.x + 5;
                        this._inputPsd.y = this._viewUI.txt_psd.y + 5;
                        this._inputPsd.width = this._viewUI.txt_psd.width;
                        this._viewUI.txt_psd.parent.addChild(this._inputPsd);
                        this._viewUI.txt_psd.removeSelf();
                    }
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
                    if (!this._inputSetPsd) {
                        this._inputSetPsd = new page.MyTextInput();
                        this._inputSetPsd.x = this._viewUI.txt_set_psd.x + 5;
                        this._inputSetPsd.y = this._viewUI.txt_set_psd.y + 5;
                        this._inputSetPsd.width = this._viewUI.txt_set_psd.width;
                        this._viewUI.txt_set_psd.parent.addChild(this._inputSetPsd);
                        this._viewUI.txt_set_psd.removeSelf();
                    }
                    if (!this._inputSetNewPsd) {
                        this._inputSetNewPsd = new page.MyTextInput();
                        this._inputSetNewPsd.x = this._viewUI.txt_set_newpsd.x + 5;
                        this._inputSetNewPsd.y = this._viewUI.txt_set_newpsd.y + 5;
                        this._inputSetNewPsd.width = this._viewUI.txt_set_newpsd.width;
                        this._viewUI.txt_set_newpsd.parent.addChild(this._inputSetNewPsd);
                        this._viewUI.txt_set_newpsd.removeSelf();
                    }
                    this._promptColor = "#b4b6b9";
                    this._inputColor = "#ffffff";
                }
            };
            Object.defineProperty(LoginBindPage.prototype, "dataSource", {
                set: function (v) {
                    this._dataSource = this._type = v;
                },
                enumerable: true,
                configurable: true
            });
            // 页面打开时执行函数
            LoginBindPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._inputPhone.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._inputCode.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._inputAccount.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._inputPsd.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._inputSetPsd.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._inputSetNewPsd.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_get_code.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_phone_clear.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_account_clear.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_login.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_see_psd.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_see_newpsd.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_see_newpsd1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set_over.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_sure.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.lab_get_code.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.lab_login_phone.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.lab_login_account.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.lab_kefu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this._viewUI.ani2.on(LEvent.COMPLETE, this, this.funcAfterAni2);
                this._viewUI.ani3.on(LEvent.COMPLETE, this, this.funcAfterAni3);
                if (!WebConfig.isSingleEnter) {
                    var pname = localGetItem("txt_account");
                    if (!pname || pname.toLowerCase() == "null")
                        pname = "";
                    this._inputAccount.input.text = pname;
                    this._inputPsd.input.text = localGetItem("keyword") || "";
                    this._inputPhone.settext(this._game, this._promptColor, "请输入手机号...", this._inputColor, 26, 11, page.MyTextInput.TYPE_INPUT_NUMBER);
                    this._inputCode.settext(this._game, this._promptColor, "请输入验证码...", this._inputColor, 26, 6, page.MyTextInput.TYPE_INPUT_NUMBER);
                    this._inputAccount.settext(this._game, this._promptColor, "请输入手机号/账户...", this._inputColor, 26, 20, page.MyTextInput.TYPE_INPUT_ENGLISH);
                    this._inputPsd.settext(this._game, this._promptColor, "请输入密码...", this._inputColor, 26, 20, page.MyTextInput.TYPE_INPUT_ENGLISH, true);
                    this._inputSetPsd.settext(this._game, this._promptColor, "请设置密码...", this._inputColor, 26, 10, page.MyTextInput.TYPE_INPUT_ENGLISH, true);
                    this._inputSetNewPsd.settext(this._game, this._promptColor, "请设置新密码...", this._inputColor, 26, 10, page.MyTextInput.TYPE_INPUT_ENGLISH, true);
                    this._notStageClickUI = [this._inputPhone, this._inputCode, this._inputAccount, this._inputPsd, this._inputSetPsd, this._inputSetNewPsd];
                    this._viewUI.btn_account_clear.visible = this._inputPhone.input.text.length > 0;
                    this._inputAccount.input.on(LEvent.INPUT, this, this.onChange);
                    this._inputAccount.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._inputPsd.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._game.datingGame.jianPanMgr.on(JianPanMgr.EVENT_CHANGE, this, this.onUpdateInput);
                }
                else {
                    var pname = localGetItem("txt_account");
                    if (!pname || pname.toLowerCase() == "null")
                        pname = "";
                    this._viewUI.txt_account.text = pname;
                    this._viewUI.txt_psd.text = localGetItem("keyword") || "";
                    this.changeToPwd();
                    this._viewUI.txt_account.on(LEvent.INPUT, this, this.onChange);
                    this._viewUI.txt_account.prompt = "请输入账号…";
                    this._viewUI.txt_psd.restrict = "";
                    this._viewUI.txt_account.restrict = "";
                    this._viewUI.btn_account_clear.visible = this._viewUI.txt_account.text.length > 0;
                    this._viewUI.txt_psd.on(LEvent.FOCUS, this, this.onFocus);
                    this._viewUI.txt_account.on(LEvent.FOCUS, this, this.onFocus);
                    this._viewUI.txt_psd.on(LEvent.BLUR, this, this.onBlur);
                    this._viewUI.txt_account.on(LEvent.BLUR, this, this.onBlur);
                }
                this._viewUI.box_login_phone.visible = false;
                this._viewUI.box_registered.visible = false;
                this._viewUI.box_set_psd.visible = false;
                this._viewUI.box_phone.visible = this._type == LoginBindPage.TYPE_BIND_PHONE || this._type == LoginBindPage.TYPE_RESET_PASSWORD;
                this._viewUI.btn_phone_clear.visible = false;
                if (this._type == LoginBindPage.TYPE_RESET_PASSWORD) {
                    this._inputPhone.input.text = WebConfig.info.mobile;
                    this._inputPhone.prompt.text = "";
                }
                if (this._viewUI.box_phone.visible) {
                    this._viewUI.btn_get_code.visible = true;
                    this._viewUI.box_send_over.visible = !this._viewUI.btn_get_code.visible;
                }
                this._viewUI.box_login_account.visible = this._type == LoginBindPage.TYPE_LOGIN_PASSWORD;
                this._viewUI.btn_see_psd.visible = this._type == LoginBindPage.TYPE_LOGIN_PASSWORD;
                this._viewUI.btn_account_clear.visible = this._type == LoginBindPage.TYPE_LOGIN_PASSWORD;
                this._viewUI.box_bind.visible = this._type == LoginBindPage.TYPE_BIND_PHONE;
                this._viewUI.btn_phone_clear.visible = this._type == LoginBindPage.TYPE_BIND_PHONE;
                this._viewUI.box_reset.visible = this._type == LoginBindPage.TYPE_RESET_PASSWORD;
                this._viewUI.btn_close.visible = true;
            };
            LoginBindPage.prototype.onMouseClick = function (e) {
                for (var index = 0; index < this._notStageClickUI.length; index++) {
                    var v = this._notStageClickUI[index];
                    if (v.contains(e.target)) {
                        return;
                    }
                }
                if (this._viewUI != this._game.datingGame.jianPanMgr.pageUI)
                    return;
                this._game.datingGame.jianPanMgr.closeJianPan();
            };
            LoginBindPage.prototype.onUpdateInput = function () {
                var _this = this;
                if (this._game.datingGame.jianPanMgr.inputTextUI == this._inputAccount) {
                    this.onChange();
                }
                else if (this._game.datingGame.jianPanMgr.inputTextUI == this._inputPhone) {
                    this._viewUI.btn_phone_clear.visible = this._inputPhone.input.text.length > 0;
                }
                else if (this._game.datingGame.jianPanMgr.inputTextUI == this._inputCode) {
                    if (this._inputCode.input.text.length == 6) {
                        if (this._isCheck) {
                            return;
                        }
                        this._isCheck = true;
                        Laya.timer.once(1000, this, function () { _this._isCheck = false; });
                        if (!this._inputPhone.input.text || this._inputPhone.input.text.length < 11) {
                            this._game.showTips("请输入正确手机号码！");
                            return;
                        }
                        if (!this._inputCode.input.text) {
                            this._game.showTips("验证码不能为空");
                            return;
                        }
                        if (!this._viewUI.box_send_over.visible) {
                            this._game.showTips("请先获取验证码");
                            this._game.datingGame.jianPanMgr.closeJianPan();
                            this._inputCode.clearInput();
                            return;
                        }
                        if (this._type == LoginBindPage.TYPE_BIND_PHONE) { //手机绑定
                            if (WebConfig.info) {
                                this._game.network.call_bind(WebConfig.account, Web_operation_fields.ACCOUNT_TYPE_MOBILE, "", "", "", "", this._inputPhone.input.text, this._inputCode.input.text, WebConfig.device, WebConfig.info.invite_code);
                                this._game.datingGame.jianPanMgr.closeJianPan();
                                this._viewUI.ani1.play(0, true);
                                this._viewUI.box_send_over.visible = false;
                                this._viewUI.btn_get_code.visible = false;
                            }
                        }
                        else if (this._type == LoginBindPage.TYPE_RESET_PASSWORD) { //手机重置密码 校验验证码
                            this._game.network.call_check_login_vf(this._inputPhone.input.text, this._inputCode.input.text, WebConfig.server_name);
                            this._game.datingGame.jianPanMgr.closeJianPan();
                            this._viewUI.ani1.play(0, true);
                            this._viewUI.box_send_over.visible = false;
                        }
                        else { //手机验证码登录游戏
                            var data_1 = {
                                mobile: this._inputPhone.input.text,
                                code: this._inputCode.input.text,
                            };
                            this._game.sceneGame.login("LoginSjPage login", Web_operation_fields.ACCOUNT_TYPE_MOBILE, data_1);
                        }
                    }
                }
                else if (this._game.datingGame.jianPanMgr.inputTextUI == this._inputSetPsd) {
                    if (this._inputSetPsd.input.text.length == 6) {
                        this._viewUI.btn_set_over.visible = true;
                        this._viewUI.lab_tip.visible = false;
                    }
                }
                else if (this._game.datingGame.jianPanMgr.inputTextUI == this._inputSetNewPsd) {
                    if (this._inputSetNewPsd.input.text.length == 6) {
                        this._viewUI.btn_sure.visible = true;
                        this._viewUI.lab_tip1.visible = false;
                    }
                }
            };
            LoginBindPage.prototype.onFocus = function (input) {
                if (input == this._viewUI.txt_psd) {
                    this._viewUI.txt_psd.text = this._dlmm;
                }
                this._viewUI.box.centerY = -150;
            };
            LoginBindPage.prototype.onBlur = function (input) {
                if (input == this._viewUI.txt_psd) {
                    this.changeToPwd();
                }
                this._viewUI.box.centerY = 20;
            };
            LoginBindPage.prototype.changeToPwd = function () {
                this._dlmm = this._viewUI.txt_psd.text;
                var key = "";
                for (var i = 0; i < this._dlmm.length; i++) {
                    key += "●";
                }
                this._viewUI.txt_psd.text = key;
            };
            LoginBindPage.prototype.onChange = function () {
                if (!WebConfig.isSingleEnter) {
                    this._inputPsd.prompt.text = "请输入密码...";
                    this._inputPsd.input.text = "";
                    this._inputPsd.password = "";
                    this._viewUI.btn_account_clear.visible = this._inputAccount.input.text.length > 0;
                }
                else {
                    this._viewUI.txt_psd.text = "";
                    this._dlmm = "";
                }
                localRemoveItem("keyword");
            };
            LoginBindPage.prototype.onBtnTweenEnd = function (e, target) {
                var _this = this;
                if ((target == this._viewUI.btn_get_code || target == this._viewUI.lab_get_code) && this._type == LoginBindPage.TYPE_LOGIN_PHONE) { //获取登录验证码
                    if (!this._inputPhone.input.text || this._inputPhone.input.text.length < 11) {
                        this._game.showTips("请输入正确手机号码！");
                        return;
                    }
                    this._game.sceneGame.connectSoctet(function () {
                        _this._game.network.call_get_login_vf(WebConfig.server_name, _this._inputPhone.input.text);
                    }, "LoginSjPage get_code");
                }
                else if ((target == this._viewUI.btn_get_code || target == this._viewUI.lab_get_code) && this._type == LoginBindPage.TYPE_BIND_PHONE) { //获取绑定验证码
                    if (!this._inputPhone.input.text || this._inputPhone.input.text.length < 11) {
                        this._game.showTips("请输入正确手机号码！");
                        return;
                    }
                    this._game.network.call_get_bindvf(this._inputPhone.input.text);
                }
                else if ((target == this._viewUI.btn_get_code || target == this._viewUI.lab_get_code) && this._type == LoginBindPage.TYPE_RESET_PASSWORD) { //获取重置验证码
                    if (!this._inputPhone.input.text || this._inputPhone.input.text.length < 11) {
                        this._game.showTips("请输入正确手机号码！");
                        return;
                    }
                    this._game.network.call_get_reset_code(this._inputPhone.input.text);
                }
                else if (target == this._viewUI.btn_set_over) { //新用户，绑定账号，设置密码
                    if (!this._inputPhone.input.text) {
                        this._game.showTips("账号不能为空");
                        return;
                    }
                    var password = this._inputSetPsd.isPassword ? this._inputSetPsd.password : this._inputSetPsd.input.text;
                    if (!password) {
                        this._game.showTips("密码需要6~10位英文数字");
                        return;
                    }
                    if (password.length < 6) {
                        this._game.showTips("密码需要6~10位英文数字");
                        return;
                    }
                    // if (WebConfig.info) {
                    this._game.network.call_bind("", Web_operation_fields.ACCOUNT_TYPE_USERNAME, "", this._inputPhone.input.text, password, password, "", "", WebConfig.device, "");
                    // }
                }
                else if (target == this._viewUI.btn_sure) { //重置密码
                    if (!this._inputPhone.input.text) {
                        this._game.showTips("账号不能为空");
                        return;
                    }
                    var new_password = this._inputSetNewPsd.isPassword ? this._inputSetNewPsd.password : this._inputSetNewPsd.input.text;
                    if (!new_password) {
                        this._game.showTips("密码需要6~10位英文数字");
                        return;
                    }
                    if (new_password.length < 6) {
                        this._game.showTips("密码需要6~10位英文数字");
                        return;
                    }
                    if (WebConfig.info) {
                        var data2 = {
                            server_name: WebConfig.server_name,
                            mobile: this._inputPhone.input.text,
                            vfcode: this._inputCode.input.text,
                            pwd1: new_password,
                            pwd2: new_password,
                        };
                        this._game.network.call_reset_pwd(data2.vfcode, data2.pwd1, data2.pwd2);
                    }
                }
                else if (target == this._viewUI.btn_login) {
                    if (this.onInputChanged())
                        return;
                    if (!WebConfig.isSingleEnter) {
                        var name_1 = this._inputAccount.input.text;
                        var mima = this._inputPsd.isPassword ? this._inputPsd.password : this._inputPsd.input.text;
                        var accout = name_1.trim();
                        var pwd = mima.trim();
                        if (!accout.length || accout.toLowerCase() == "null") {
                            this._game.showTips("请输入正确的账号");
                            return;
                        }
                        if (!mima.length || mima.toLowerCase() == "null") {
                            this._game.showTips("密码需要6~10位英文数字");
                            return;
                        }
                        //写入本地缓存
                        localSetItem("txt_account", this._inputAccount.input.text || "");
                        localSetItem("keyword", this._inputPsd.password || "");
                        this._game.sceneGame.login("LoginZhPage denglu", Web_operation_fields.ACCOUNT_TYPE_USERNAME, { account: accout, pwd: pwd });
                    }
                    else {
                        var name_2 = this._viewUI.txt_account.text;
                        var mima = this._dlmm;
                        var accout = name_2.trim();
                        var pwd = mima.trim();
                        if (!accout.length || accout.toLowerCase() == "null") {
                            this._game.showTips("请输入正确的账号");
                            return;
                        }
                        if (!mima.length || mima.toLowerCase() == "null") {
                            this._game.showTips("密码需要6~10位英文数字");
                            return;
                        }
                        //写入本地缓存
                        localSetItem("txt_account", accout || "");
                        localSetItem("keyword", pwd || "");
                        this._game.sceneGame.login("LoginZhPage denglu", Web_operation_fields.ACCOUNT_TYPE_USERNAME, { account: accout, pwd: pwd });
                    }
                }
                else if (target == this._inputPhone) {
                    if (this._type != LoginBindPage.TYPE_RESET_PASSWORD) {
                        this.openJianPan(this._inputPhone, this._viewUI, -30);
                    }
                }
                else if (target == this._inputCode) {
                    this.openJianPan(this._inputCode, this._viewUI, -30);
                }
                else if (target == this._inputAccount) {
                    this.openJianPan(this._inputAccount, this._viewUI, -30);
                }
                else if (target == this._inputPsd) {
                    this.openJianPan(this._inputPsd, this._viewUI, -30);
                }
                else if (target == this._inputSetPsd) {
                    this.openJianPan(this._inputSetPsd, this._viewUI, -30);
                }
                else if (target == this._inputSetNewPsd) {
                    this.openJianPan(this._inputSetNewPsd, this._viewUI, -30);
                }
                else if (target == this._viewUI.lab_kefu) {
                    this._game.uiRoot.general.open(page.DatingPageDef.PAGE_KEFU);
                }
                else if (target == this._viewUI.lab_login_account) {
                    this._viewUI.box_login_account.visible = true;
                    this._viewUI.box_login_phone.visible = false;
                    this._viewUI.box_phone.visible = false;
                    this._viewUI.btn_close.visible = true;
                    this._type = LoginBindPage.TYPE_LOGIN_PASSWORD;
                }
                else if (target == this._viewUI.lab_login_phone) {
                    this._viewUI.box_login_account.visible = false;
                    this._viewUI.box_send_over.visible = false;
                    this._viewUI.box_login_phone.visible = true;
                    this._viewUI.box_phone.visible = true;
                    this._viewUI.btn_close.visible = true;
                    this._type = LoginBindPage.TYPE_LOGIN_PHONE;
                }
                else if (target == this._viewUI.btn_see_psd) { //密码登录， 密码是否可见
                    if (this._viewUI.btn_see_psd.skin == DatingPath.ui_dating + "denglu/btn_eyeon.png") {
                        this._viewUI.btn_see_psd.skin = DatingPath.ui_dating + "denglu/btn_eyeoff.png";
                        this._inputPsd.showPassword(true);
                    }
                    else {
                        this._viewUI.btn_see_psd.skin = DatingPath.ui_dating + "denglu/btn_eyeon.png";
                        this._inputPsd.showPassword(false);
                    }
                }
                else if (target == this._viewUI.btn_see_newpsd) { //注册设置密码， 密码是否可见
                    if (this._viewUI.btn_see_newpsd.skin == DatingPath.ui_dating + "denglu/btn_eyeon.png") {
                        this._viewUI.btn_see_newpsd.skin = DatingPath.ui_dating + "denglu/btn_eyeoff.png";
                        this._inputSetPsd.showPassword(true);
                    }
                    else {
                        this._viewUI.btn_see_newpsd.skin = DatingPath.ui_dating + "denglu/btn_eyeon.png";
                        this._inputSetPsd.showPassword(false);
                    }
                }
                else if (target == this._viewUI.btn_see_newpsd1) { //重置密码， 密码是否可见
                    if (this._viewUI.btn_see_newpsd1.skin == DatingPath.ui_dating + "denglu/btn_eyeon.png") {
                        this._viewUI.btn_see_newpsd1.skin = DatingPath.ui_dating + "denglu/btn_eyeoff.png";
                        this._inputSetNewPsd.showPassword(true);
                    }
                    else {
                        this._viewUI.btn_see_newpsd1.skin = DatingPath.ui_dating + "denglu/btn_eyeon.png";
                        this._inputSetNewPsd.showPassword(false);
                    }
                }
                else if (target == this._viewUI.btn_phone_clear) {
                    this._inputPhone.clearInput();
                    this._viewUI.btn_phone_clear.visible = false;
                }
                else if (target == this._viewUI.btn_account_clear) {
                    this._inputAccount.clearInput();
                    this._viewUI.btn_account_clear.visible = false;
                }
            };
            LoginBindPage.prototype.onInputChanged = function () {
                if (!WebConfig.isSingleEnter) {
                    if (this._inputAccount.input.text.indexOf("@debugasdf") != -1) {
                        this._game.showTips("GM打开");
                        WebConfig.gameGmOpen = true;
                        WebConfig.VConsole();
                        return true;
                    }
                }
                else {
                    if (this._viewUI.txt_account.text.indexOf("@debugasdf") != -1) {
                        this._game.showTips("GM打开");
                        WebConfig.gameGmOpen = true;
                        WebConfig.VConsole();
                        return true;
                    }
                }
            };
            LoginBindPage.prototype.openJianPan = function (textUI, viewUI, centerY) {
                this._game.datingGame.jianPanMgr.openJianPan(textUI, viewUI, centerY);
            };
            LoginBindPage.prototype.onOptHandler = function (optcode, msg) {
                if (msg.type == Operation_Fields.OPRATE_WEB) { //与web交互操作错误类型
                    switch (msg.reason) {
                        case Operation_Fields.OPRATE_WEB_FAIL_RESULT: // web返回的错误信息
                            if (msg.data == 24) { //验证码错误
                                this._viewUI.txt_warn.text = Web_operation_fields.web_interface_result_table[msg.data];
                                this._viewUI.ani1.gotoAndStop(0);
                                this._viewUI.ani2.play(0, false);
                                this._inputCode.visible = false;
                                this._inputCode.clearInput();
                                this._viewUI.btn_close.visible = false;
                                this._viewUI.box_send_over.visible = true;
                            }
                            else if (msg.data == 19) { //该手机已绑定
                                this._viewUI.txt_warn.text = Web_operation_fields.web_interface_result_table[msg.data];
                                this._viewUI.ani1.gotoAndStop(0);
                                this._viewUI.ani2.play(0, false);
                                this._inputCode.visible = false;
                                this._inputPhone.clearInput();
                                this._inputCode.clearInput();
                                this._viewUI.btn_close.visible = false;
                                this._viewUI.btn_get_code.visible = true;
                            }
                            break;
                    }
                }
            };
            /**
             * 帧间隔心跳
             */
            LoginBindPage.prototype.deltaUpdate = function () {
                if (!this._isLoop)
                    return;
                this.countdown();
            };
            LoginBindPage.prototype.onSucessHandler = function (data) {
                var _this = this;
                if (data.code == Web_operation_fields.CLIENT_IRCODE_PLAYERBIND) { //手机绑定成功
                    if (data && data.success == 0) {
                        if (data.msg.type == Web_operation_fields.ACCOUNT_TYPE_MOBILE) {
                            this._viewUI.ani1.gotoAndStop(0);
                            this._viewUI.ani3.play(0, false);
                        }
                        else if (data.msg.type == Web_operation_fields.ACCOUNT_TYPE_USERNAME) {
                            this.close();
                        }
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_GETLOGINVF) { //获取登录验证码
                    if (data && data.success == 0) {
                        this._isNew = data.msg.isnew > 0;
                        this._viewUI.btn_get_code.visible = false;
                        this._viewUI.lab_get_code.visible = false;
                        this._viewUI.lab_login_account.visible = false;
                        this._viewUI.box_send_over.visible = true;
                        this._viewUI.lab_reget.visible = true;
                        this._viewUI.lab_send_phone.text = this._inputPhone.input.text;
                        Laya.timer.once(60000, this, function () {
                            _this._viewUI.lab_reget.visible = false;
                            _this._viewUI.lab_get_code.visible = true;
                        });
                        this._isLoop = true;
                        this._game.showTips("发送验证码成功");
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_GETBINDVF) { //获取绑定验证码
                    if (data && data.success == 0) {
                        this._viewUI.btn_get_code.visible = false;
                        this._viewUI.lab_get_code.visible = false;
                        this._viewUI.lab_login_account.visible = false;
                        this._viewUI.box_send_over.visible = true;
                        this._viewUI.lab_reget.visible = true;
                        this._viewUI.lab_send_phone.text = this._inputPhone.input.text;
                        Laya.timer.once(60000, this, function () {
                            _this._viewUI.lab_reget.visible = false;
                            _this._viewUI.lab_get_code.visible = true;
                        });
                        this._isLoop = true;
                        this._game.showTips("发送验证码成功");
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_RPWDVF) {
                    if (data && data.success == 0) {
                        this._viewUI.btn_get_code.visible = false;
                        this._viewUI.lab_get_code.visible = false;
                        this._viewUI.lab_login_account.visible = false;
                        this._viewUI.box_send_over.visible = true;
                        this._viewUI.lab_reget.visible = true;
                        this._viewUI.lab_send_phone.text = this._inputPhone.input.text;
                        Laya.timer.once(60000, this, function () {
                            _this._viewUI.lab_reget.visible = false;
                            _this._viewUI.lab_get_code.visible = true;
                        });
                        this._isLoop = true;
                        this._game.showTips("获取验证码成功");
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_CHECKLOGINVF) { //验证码通过
                    if (data && data.success == 0) {
                        //重置密码
                        this._viewUI.box_reset.visible = true;
                        this._viewUI.box_login_phone.visible = false;
                        this._viewUI.box_phone.visible = false;
                        this._viewUI.box_set_psd.visible = true;
                        this._viewUI.btn_sure.visible = false;
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_RESETPWD) { //重置密码成功
                    if (data && data.success == 0) {
                        this._game.showTips("设置新密码成功");
                        this.close();
                    }
                }
            };
            LoginBindPage.prototype.funcAfterAni2 = function () {
                this._viewUI.btn_close.visible = true;
                this._inputCode.visible = true;
            };
            LoginBindPage.prototype.funcAfterAni3 = function () {
                this._viewUI.box_registered.visible = true;
                this._viewUI.btn_set_over.visible = false;
                this._viewUI.box_phone.visible = false;
                this._viewUI.box_bind.visible = false;
            };
            LoginBindPage.prototype.countdown = function () {
                if (this._countdown > 0) {
                    this._countdown--;
                    this._viewUI.lab_reget.text = StringU.substitute("重新获取（{0}）", this._countdown);
                }
                else {
                    this._countdown = 59;
                    this._viewUI.lab_reget.text = StringU.substitute("重新获取（{0}）", this._countdown);
                    this._isLoop = false;
                }
            };
            // 清理下页面
            LoginBindPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                    this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                    this._viewUI.ani3.off(LEvent.COMPLETE, this, this.funcAfterAni3);
                    this._inputPhone.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._inputPhone.destroy();
                    this._inputPhone = null;
                    this._inputCode.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._inputCode.destroy();
                    this._inputCode = null;
                }
                _super.prototype.close.call(this);
            };
            LoginBindPage.TYPE_LOGIN_PASSWORD = 1; //密码登录
            LoginBindPage.TYPE_LOGIN_PHONE = 2; //手机登录
            LoginBindPage.TYPE_BIND_PHONE = 3; //手机绑定
            LoginBindPage.TYPE_RESET_PASSWORD = 4; //重置密码
            LoginBindPage.TYPE_PLATFORM_HABO = 5; //哈勃平台
            return LoginBindPage;
        }(game.gui.base.Page));
        page.LoginBindPage = LoginBindPage;
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=LoginBindPage.js.map