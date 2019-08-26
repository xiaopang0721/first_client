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
* name 绑定支付宝
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page) {
        var QuKuanBindZFBPage = /** @class */ (function (_super) {
            __extends(QuKuanBindZFBPage, _super);
            function QuKuanBindZFBPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "qukuan.atlas",
                ];
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                return _this;
            }
            // 页面初始化函数
            QuKuanBindZFBPage.prototype.init = function () {
                this._viewUI = this.createView("dating.QuKuan_zfbUI");
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            QuKuanBindZFBPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                WebConfig.info && (this._viewUI.txt_name.text = WebConfig.info.real_name);
                this._viewUI.btn_bind.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.txt_name.on(LEvent.FOCUS, this, this.onFocus);
                this._viewUI.txt_zh.on(LEvent.FOCUS, this, this.onFocus);
                this._viewUI.txt_name.on(LEvent.BLUR, this, this.onBlur);
                this._viewUI.txt_zh.on(LEvent.BLUR, this, this.onBlur);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
            };
            QuKuanBindZFBPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_bind.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.txt_name.off(LEvent.FOCUS, this, this.onFocus);
                    this._viewUI.txt_zh.off(LEvent.FOCUS, this, this.onFocus);
                    this._viewUI.txt_name.off(LEvent.BLUR, this, this.onBlur);
                    this._viewUI.txt_zh.off(LEvent.BLUR, this, this.onBlur);
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                }
                _super.prototype.close.call(this);
            };
            QuKuanBindZFBPage.prototype.onFocus = function (input) {
                this._viewUI.box.centerY = -100;
            };
            QuKuanBindZFBPage.prototype.onBlur = function (input) {
                this._viewUI.box.centerY = 20;
            };
            QuKuanBindZFBPage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_BINGDALIPAY) {
                    if (data && data.success == 0) {
                        this._game.sceneGame.sceneObjectMgr.event(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE);
                        this._game.showTips("绑定成功");
                        this.close();
                    }
                }
            };
            QuKuanBindZFBPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_bind: //确认绑定
                        if (!this._viewUI.txt_name.text) {
                            this._game.showTips("真实姓名不能为空");
                            return;
                        }
                        if (!this._viewUI.txt_zh.text) {
                            this._game.showTips("账户不能为空");
                            return;
                        }
                        var reg_1 = new RegExp("^[\u4e00-\u9fa5]+$");
                        if (!reg_1.test(this._viewUI.txt_name.text)) {
                            this._game.showTips("真实姓名只能输入中文");
                            return;
                        }
                        this._game.network.call_bindalipay(this._viewUI.txt_zh.text, '', this._viewUI.txt_name.text);
                        break;
                }
            };
            QuKuanBindZFBPage.prototype.openJianPan = function (textUI, viewUI, centerY) {
                gamedatingnqp.DatingGame.ins.jianPanMgr.openJianPan(textUI, viewUI, centerY);
            };
            return QuKuanBindZFBPage;
        }(game.gui.base.Page));
        page.QuKuanBindZFBPage = QuKuanBindZFBPage;
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=QuKuanBindZFBPage.js.map