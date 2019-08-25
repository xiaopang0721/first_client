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
* 设置取款密码
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page) {
        var QuKuanSetPage = /** @class */ (function (_super) {
            __extends(QuKuanSetPage, _super);
            function QuKuanSetPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "qukuan.atlas",
                ];
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                return _this;
            }
            // 页面初始化函数
            QuKuanSetPage.prototype.init = function () {
                this._viewUI = this.createView("dating.QuKuan_shezhiMMUI");
                this.addChild(this._viewUI);
                this._viewUI.btn_mima_enter.visible = false;
                if (!this._inputKey) {
                    this._inputKey = new page.MyTextInput();
                    this._inputKey.x = this._viewUI.view_input.x;
                    this._inputKey.y = this._viewUI.view_input.y;
                    this._inputKey.width = this._viewUI.view_input.width;
                    this._viewUI.view_input.parent.addChild(this._inputKey);
                    this._viewUI.view_input.removeSelf();
                }
            };
            // 页面打开时执行函数
            QuKuanSetPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._inputKey.settext(this._game, TeaStyle.COLOR_INPUT_DEFAULT, "请输入6位数字取款密码", TeaStyle.COLOR_WHITE, 24, 6, page.MyTextInput.TYPE_INPUT_NUMBER, false, Handler.create(this, this.onUpdateInput, null, false));
                this._inputKey.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.img_eyes.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_mima_enter.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this._notStageClickUI = [this._inputKey];
            };
            QuKuanSetPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                    this._viewUI.img_eyes.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._inputKey.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._inputKey.destroy();
                    this._inputKey = null;
                }
                _super.prototype.close.call(this);
            };
            QuKuanSetPage.prototype.onUpdateInput = function () {
                var pwd = this._inputKey.isPassword ? this._inputKey.password : this._inputKey.input.text;
                if (pwd.length >= 6 && pwd.length <= 10) {
                    this._viewUI.txt_tishi.visible = false;
                    this._viewUI.btn_mima_enter.visible = true;
                }
                else {
                    this._viewUI.txt_tishi.visible = true;
                    this._viewUI.btn_mima_enter.visible = false;
                }
            };
            QuKuanSetPage.prototype.onMouseClick = function (e) {
                for (var index = 0; index < this._notStageClickUI.length; index++) {
                    var v = this._notStageClickUI[index];
                    if (v.contains(e.target)) {
                        return;
                    }
                }
                if (this._viewUI != gamedatingnqp.DatingGame.ins.jianPanMgr.pageUI)
                    return;
                gamedatingnqp.DatingGame.ins.jianPanMgr.closeJianPan();
            };
            QuKuanSetPage.prototype.onSucessHandler = function (data) {
                if (data.reason == Operation_Fields.OPRATE_GAME_PWD_SUCCESS) {
                    this._game.showTips("密码设置成功");
                    this.close();
                }
            };
            QuKuanSetPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_mima_enter: //确认绑定
                        var pwd = this._inputKey.isPassword ? this._inputKey.password : this._inputKey.input.text;
                        if (!pwd) {
                            this._game.showTips("取款密码不能为空");
                            return;
                        }
                        this._game.network.call_set_money_pwd(pwd);
                        break;
                    case this._inputKey:
                        this.openJianPan(this._inputKey, this._viewUI, -60);
                        break;
                    case this._viewUI.img_eyes:
                        if (this._inputKey.isPassword) {
                            this._viewUI.img_eyes.skin = DatingPath.ui_dating + 'tongyong/btn_eyeon.png';
                        }
                        else {
                            this._viewUI.img_eyes.skin = DatingPath.ui_dating + 'tongyong/btn_eyeoff.png';
                        }
                        this._inputKey.showPassword(!this._inputKey.isPassword);
                        break;
                }
            };
            QuKuanSetPage.prototype.openJianPan = function (textUI, viewUI, centerY) {
                gamedatingnqp.DatingGame.ins.jianPanMgr.openJianPan(textUI, viewUI, centerY);
            };
            return QuKuanSetPage;
        }(game.gui.base.Page));
        page.QuKuanSetPage = QuKuanSetPage;
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=QuKuanSetPage.js.map