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
         * 账号登陆
         */
        var LoginZhPage = /** @class */ (function (_super) {
            __extends(LoginZhPage, _super);
            function LoginZhPage(v, onOpenFunc, onCloseFunc) {
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
            LoginZhPage.prototype.init = function () {
                this._viewUI = this.createView("dating.DengLuZHUI");
                this.addChild(this._viewUI);
                if (!WebConfig.isSingleEnter) {
                    if (!this._inputName) {
                        this._inputName = new page.MyTextInput();
                        this._inputName.x = this._viewUI.input_Name.x + 5;
                        this._inputName.y = this._viewUI.input_Name.y + 5;
                        this._inputName.width = this._viewUI.input_Name.width;
                        this._viewUI.input_Name.parent.addChild(this._inputName);
                        this._viewUI.input_Name.removeSelf();
                    }
                    if (!this._inputKey) {
                        this._inputKey = new page.MyTextInput();
                        this._inputKey.x = this._viewUI.input_Key.x + 5;
                        this._inputKey.y = this._viewUI.input_Key.y + 5;
                        this._inputKey.width = this._viewUI.input_Key.width;
                        this._viewUI.input_Key.parent.addChild(this._inputKey);
                        this._viewUI.input_Key.removeSelf();
                    }
                    this._promptColor = WebConfig.baseplatform == page.DatingPageDef.BASE_PLATFORM_TYPE_DZQP ? "#777777" : "#b4b6b9";
                    this._inputColor = WebConfig.baseplatform == page.DatingPageDef.BASE_PLATFORM_TYPE_DZQP ? "#000000" : "#060606";
                }
            };
            Object.defineProperty(LoginZhPage.prototype, "dataSource", {
                set: function (v) {
                    if (!v || v.length < 11) {
                        this._dataSource = "";
                    }
                    else {
                        this._dataSource = v;
                    }
                },
                enumerable: true,
                configurable: true
            });
            // 页面打开时执行函数
            LoginZhPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                if (!WebConfig.isSingleEnter) {
                    var pname = localGetItem("input_Name");
                    if (!pname || pname.toLowerCase() == "null")
                        pname = "";
                    this._inputName.input.text = this._dataSource || pname;
                    this._inputKey.input.text = localGetItem("keyword") || "";
                    this._inputName.settext(this._game, this._promptColor, "请输入账号或手机号…", this._inputColor, 26, 20, page.MyTextInput.TYPE_INPUT_ENGLISH);
                    this._inputKey.settext(this._game, this._promptColor, "请输入密码...", this._inputColor, 26, 20, page.MyTextInput.TYPE_INPUT_ENGLISH, true);
                    this._inputName.input.on(LEvent.INPUT, this, this.onChange);
                    this._inputName.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._inputKey.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                    gamedating.DatingGame.ins.jianPanMgr.on(JianPanMgr.EVENT_CHANGE, this, this.onUpdateInput);
                    this._notStageClickUI = [this._inputName, this._inputKey];
                }
                else {
                    var pname = localGetItem("input_Name");
                    if (!pname || pname.toLowerCase() == "null")
                        pname = "";
                    this._viewUI.input_Name.text = this._dataSource || pname;
                    this._viewUI.input_Key.text = localGetItem("keyword") || "";
                    this.changeToPwd();
                    this._viewUI.input_Name.on(LEvent.INPUT, this, this.onChange);
                    this._viewUI.input_Name.prompt = "请输入账号…";
                    this._viewUI.input_Key.restrict = "";
                    this._viewUI.input_Name.restrict = "";
                    this._viewUI.input_Key.on(LEvent.FOCUS, this, this.onFocus);
                    this._viewUI.input_Name.on(LEvent.FOCUS, this, this.onFocus);
                    this._viewUI.input_Key.on(LEvent.BLUR, this, this.onBlur);
                    this._viewUI.input_Name.on(LEvent.BLUR, this, this.onBlur);
                }
                this._viewUI.btn_denglu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
            };
            LoginZhPage.prototype.onMouseClick = function (e) {
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
            LoginZhPage.prototype.onUpdateInput = function () {
                if (gamedating.DatingGame.ins.jianPanMgr.inputTextUI == this._inputName) {
                    this.onChange();
                }
            };
            LoginZhPage.prototype.onFocus = function (input) {
                if (input == this._viewUI.input_Key) {
                    this._viewUI.input_Key.text = this._dlmm;
                }
                this._viewUI.box.centerY = -150;
            };
            LoginZhPage.prototype.onBlur = function (input) {
                if (input == this._viewUI.input_Key) {
                    this.changeToPwd();
                }
                this._viewUI.box.centerY = 20;
            };
            LoginZhPage.prototype.changeToPwd = function () {
                this._dlmm = this._viewUI.input_Key.text;
                var key = "";
                for (var i = 0; i < this._dlmm.length; i++) {
                    key += "●";
                }
                this._viewUI.input_Key.text = key;
            };
            LoginZhPage.prototype.onChange = function () {
                if (!WebConfig.isSingleEnter) {
                    this._inputKey.prompt.text = "请输入密码...";
                    this._inputKey.input.text = "";
                    this._inputKey.password = "";
                }
                else {
                    this._viewUI.input_Key.text = "";
                    this._dlmm = "";
                }
                localRemoveItem("keyword");
            };
            LoginZhPage.prototype.onInputChanged = function () {
                if (!WebConfig.isSingleEnter) {
                    if (this._inputName.input.text.indexOf("@debugasdf") != -1) {
                        this._game.showTips("GM打开");
                        WebConfig.gameGmOpen = true;
                        WebConfig.VConsole();
                        return true;
                    }
                }
                else {
                    if (this._viewUI.input_Name.text.indexOf("@debugasdf") != -1) {
                        this._game.showTips("GM打开");
                        WebConfig.gameGmOpen = true;
                        WebConfig.VConsole();
                        return true;
                    }
                }
            };
            LoginZhPage.prototype.onBtnTweenEnd = function (e, target) {
                if (target == this._viewUI.btn_denglu) {
                    if (this.onInputChanged())
                        return;
                    if (!WebConfig.isSingleEnter) {
                        var name_1 = this._inputName.input.text;
                        var mima = this._inputKey.password;
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
                        localSetItem("input_Name", this._inputName.input.text || "");
                        localSetItem("keyword", this._inputKey.password || "");
                        this._game.sceneGame.login("LoginZhPage denglu", Web_operation_fields.ACCOUNT_TYPE_USERNAME, { account: accout, pwd: pwd });
                    }
                    else {
                        var name_2 = this._viewUI.input_Name.text;
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
                        localSetItem("input_Name", accout || "");
                        localSetItem("keyword", pwd || "");
                        this._game.sceneGame.login("LoginZhPage denglu", Web_operation_fields.ACCOUNT_TYPE_USERNAME, { account: accout, pwd: pwd });
                    }
                }
                else if (target == this._inputName) {
                    this.openJianPan(this._inputName, this._viewUI, -10);
                }
                else if (target == this._inputKey) {
                    this.openJianPan(this._inputKey, this._viewUI, -10);
                }
            };
            LoginZhPage.prototype.openJianPan = function (textUI, viewUI, centerY) {
                gamedating.DatingGame.ins.jianPanMgr.openJianPan(textUI, viewUI, centerY);
            };
            LoginZhPage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_LOGIN) {
                    if (data && data.success == 0) {
                    }
                }
            };
            // 清理下页面
            LoginZhPage.prototype.close = function () {
                if (this._viewUI) {
                    if (!WebConfig.isSingleEnter) {
                        gamedating.DatingGame.ins.jianPanMgr.off(JianPanMgr.EVENT_CHANGE, this, this.onUpdateInput);
                        this._inputName.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                        this._inputName.destroy();
                        this._inputName = null;
                        this._inputKey.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                        this._inputKey.destroy();
                        this._inputKey = null;
                    }
                    else {
                        this._viewUI.input_Key.off(LEvent.FOCUS, this, this.onFocus);
                        this._viewUI.input_Name.off(LEvent.FOCUS, this, this.onFocus);
                        this._viewUI.input_Key.off(LEvent.BLUR, this, this.onBlur);
                        this._viewUI.input_Name.off(LEvent.BLUR, this, this.onBlur);
                    }
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                }
                _super.prototype.close.call(this);
            };
            return LoginZhPage;
        }(game.gui.base.Page));
        page.LoginZhPage = LoginZhPage;
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=LoginZhPage.js.map