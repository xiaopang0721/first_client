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
* name 绑定
*/
var gamedating;
(function (gamedating) {
    var page;
    (function (page) {
        var BangDingPage = /** @class */ (function (_super) {
            __extends(BangDingPage, _super);
            function BangDingPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "bangding.atlas",
                    DatingPath.atlas_dating_ui + "zhuce.atlas",
                ];
                _this._isNeedBlack = true;
                return _this;
            }
            // 页面初始化函数
            BangDingPage.prototype.init = function () {
                this._viewUI = this.createView("dating.ZhuCeUI");
                this.addChild(this._viewUI);
                if (!this._cdSp) {
                    this._cdSp = new CDSprite();
                    this._cdSp.init(this._game, this._viewUI.btn_get_code.width, this._viewUI.btn_get_code.height, this._viewUI.btn_get_code.height, 1, true);
                }
            };
            // 页面打开时执行函数
            BangDingPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_get_code.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_bind.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this.onUpdatePlayerInfo();
            };
            BangDingPage.prototype.onUpdatePlayerInfo = function () {
                if (!WebConfig.info)
                    return;
                if (!WebConfig.info.isguest) {
                    this.close();
                    return;
                }
                this._viewUI.txt_id.text = WebConfig.info.userid;
                this._viewUI.invitor_code.text = WebConfig.info.from_invitor_code || "";
            };
            BangDingPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_bind: //绑定
                        if (!this._viewUI.txt_name.text) {
                            this._game.showTips("名字不能为空");
                            return;
                        }
                        if (!this._viewUI.txt_phone.text || this._viewUI.txt_phone.text.length < 11) {
                            this._game.showTips("请输入正确手机号码！");
                            return;
                        }
                        if (!this._viewUI.txt_code.text) {
                            this._game.showTips("验证码不能为空");
                            return;
                        }
                        if (!this._viewUI.txt_mima.text) {
                            this._game.showTips("密码不能为空");
                            return;
                        }
                        if (this._viewUI.txt_mima.text.length < 6) {
                            this._game.showTips("密码不能少于6位");
                            return;
                        }
                        if (this._viewUI.txt_mima.text != this._viewUI.txt_mima2.text) {
                            this._game.showTips("两次密码不一致");
                            return;
                        }
                        WebConfig.keyword = this._viewUI.txt_mima.text;
                        WebConfig.account = this._viewUI.txt_phone.text;
                        // this._game.sceneGame.call_bind_info(
                        // 	WebConfig.device,
                        // 	this._viewUI.txt_name.text,
                        // 	this._viewUI.txt_phone.text,
                        // 	this._viewUI.txt_code.text,
                        // 	this._viewUI.txt_mima.text,
                        // 	this._viewUI.txt_mima2.text,
                        // 	this._viewUI.invitor_code.text
                        // )
                        break;
                    case this._viewUI.btn_get_code: //获取验证码
                        if (!this._viewUI.txt_phone.text || this._viewUI.txt_phone.text.length < 11) {
                            this._game.showTips("请输入正确手机号码！");
                            return;
                        }
                        this._game.sceneGame.network.call_get_bindvf(this._viewUI.txt_phone.text);
                        break;
                }
            };
            BangDingPage.prototype.onSucessHandler = function (data) {
                var _this = this;
                if (data.code == Web_operation_fields.CLIENT_IRCODE_GETBINDVF) {
                    if (data && data.success == 0) {
                        Laya.timer.once(60000, this, function () {
                            _this._viewUI.btn_get_code.disabled = false;
                        });
                        this._viewUI.btn_get_code.disabled = true;
                        this._game.showTips("发送验证码成功");
                    }
                }
            };
            BangDingPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                }
                _super.prototype.close.call(this);
            };
            return BangDingPage;
        }(game.gui.base.Page));
        page.BangDingPage = BangDingPage;
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=BangDingPage.js.map