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
         * 登陆界面
         */
        var LoginPage = /** @class */ (function (_super) {
            __extends(LoginPage, _super);
            function LoginPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "denglu.atlas",
                    Path.atlas_ui + "loading.atlas",
                ];
                _this._isNeedDuang = false;
                return _this;
            }
            // 页面初始化函数
            LoginPage.prototype.init = function () {
                this._viewUI = this.createView("dating.DengLuUI", ["dating.Loading_DHUI"]);
                this._bgView = new LoadingDH(1);
                this._bgView.left = this._bgView.right = -1;
                this._bgView.bottom = this._bgView.top = -1;
                this._viewUI.addChildAt(this._bgView, 0);
                this._bgView.onOpen(this._game);
                this.addChild(this._viewUI);
                var wx_open = localGetItem("is_wx_open");
                if (wx_open && !WebConfig.isSingleEnter) {
                    if (!WebConfig.logintype) {
                        if (WebConfig.isSingleEnter) {
                            WebConfig.logintype = "134";
                        }
                        else {
                            WebConfig.logintype = "1234";
                        }
                    }
                    var index = WebConfig.logintype.indexOf(Web_operation_fields.ACCOUNT_TYPE_WEIXIN);
                    if (wx_open == "true" && !WebConfig.isSingleEnter) {
                        if (index == -1) {
                            WebConfig.logintype = WebConfig.logintype + Web_operation_fields.ACCOUNT_TYPE_WEIXIN.toString();
                        }
                    }
                    else {
                        if (index != -1) {
                            var aa = WebConfig.logintype.split("");
                            if (aa && aa.length) {
                                if (aa.splice(index, 1)) {
                                    WebConfig.logintype = aa.join("");
                                }
                            }
                        }
                    }
                }
                if (WebConfig.logintype) {
                    var layout = [
                        ["centerX", 0],
                        ["left", 360, "right", 360],
                        ["left", 220, "centerX", 0, "right", 220],
                        ["left", 100, "left", 380, "right", 380, "right", 100]
                    ];
                    var list = WebConfig.logintype.split("");
                    var arr = [];
                    for (var index = 0; index < list.length; index++) {
                        var v = parseInt(list[index]);
                        if (!v || isNaN(v) || v > 4 || arr.indexOf(v) != -1)
                            continue;
                        arr.push(v);
                    }
                    this._viewUI.btn_youke.visible = false;
                    this._viewUI.btn_wx.visible = false;
                    this._viewUI.btn_denglu.visible = false;
                    this._viewUI.btn_phone.visible = false;
                    arr.sort(function (a, b) {
                        return a - b;
                    });
                    WebConfig.logintype = arr.join('');
                    WebConfig.app_type = (WebConfig.logintype && WebConfig.logintype.length > 0) ? Web_operation_fields.GAME_APP_TYPE_1 : Web_operation_fields.GAME_APP_TYPE_2;
                    for (var index = 0; index < arr.length; index++) {
                        var type = arr[index];
                        var btn = null;
                        if (type == Web_operation_fields.ACCOUNT_TYPE_GUEST && !this._viewUI.btn_youke.visible) {
                            this._viewUI.btn_youke.visible = true;
                            btn = this._viewUI.btn_youke;
                        }
                        else if (type == Web_operation_fields.ACCOUNT_TYPE_WEIXIN && !this._viewUI.btn_wx.visible) {
                            this._viewUI.btn_wx.visible = true;
                            btn = this._viewUI.btn_wx;
                        }
                        else if (type == Web_operation_fields.ACCOUNT_TYPE_USERNAME && !this._viewUI.btn_denglu.visible) {
                            this._viewUI.btn_denglu.visible = true;
                            btn = this._viewUI.btn_denglu;
                        }
                        else if (type == Web_operation_fields.ACCOUNT_TYPE_MOBILE && !this._viewUI.btn_phone.visible) {
                            this._viewUI.btn_phone.visible = true;
                            btn = this._viewUI.btn_phone;
                        }
                        if (btn && btn.visible) {
                            var key = layout[arr.length - 1][2 * index];
                            var value = layout[arr.length - 1][2 * index + 1];
                            btn[key] = value;
                        }
                    }
                }
            };
            // 页面打开时执行函数
            LoginPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_denglu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_youke.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_wx.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_phone.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            };
            LoginPage.prototype.onBtnTweenEnd = function (e, target) {
                var _this = this;
                switch (target) {
                    case this._viewUI.btn_denglu: //登陆
                        this._game.uiRoot.general.open(page.DatingPageDef.PAGE_ZHLOGIN);
                        break;
                    case this._viewUI.btn_youke: //游客登陆
                        this._game.alert("您选择了游客模式登录游戏，由于该模式下的游戏数据(包括付费数据)在删除游戏、更换设备后将被清空!对此造成的损失，本平台将不承担任何责任。为了您的虚拟财产安全,我们强烈建议您使用手机登录和账号登录游戏!", function () {
                            _this._game.sceneGame.login("LoginPage youke", Web_operation_fields.ACCOUNT_TYPE_GUEST);
                        }, function () {
                        }, true);
                        break;
                    case this._viewUI.btn_wx: //微信登陆
                        this._game.datingGame.wxLogin();
                        break;
                    case this._viewUI.btn_phone: //手机登陆
                        this._game.uiRoot.general.open(page.DatingPageDef.PAGE_SJLOGIN);
                        break;
                }
            };
            // 清理下页面
            LoginPage.prototype.close = function () {
                if (this._viewUI) {
                    if (this._bgView) {
                        this._bgView.close();
                        this._bgView.removeSelf();
                        this._bgView.destroy();
                        this._bgView = null;
                    }
                    WebConfig.update_appVersion = null;
                }
                _super.prototype.close.call(this);
            };
            return LoginPage;
        }(game.gui.base.Page));
        page.LoginPage = LoginPage;
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=LoginPage.js.map