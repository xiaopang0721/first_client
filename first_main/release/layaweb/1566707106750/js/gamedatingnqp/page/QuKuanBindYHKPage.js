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
* name 客服
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page) {
        var QuKuanBindYHKPage = /** @class */ (function (_super) {
            __extends(QuKuanBindYHKPage, _super);
            function QuKuanBindYHKPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "qukuan.atlas",
                ];
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                return _this;
            }
            // 页面初始化函数
            QuKuanBindYHKPage.prototype.init = function () {
                this._viewUI = this.createView("dating.QuKuan_yhkUI");
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            QuKuanBindYHKPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                WebConfig.info && (this._viewUI.txt_name.text = WebConfig.info.real_name);
                this._viewUI.btn_bind.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.txt_khh.on(LEvent.FOCUS, this, this.onFocus);
                this._viewUI.txt_khzh.on(LEvent.FOCUS, this, this.onFocus);
                this._viewUI.txt_zh.on(LEvent.FOCUS, this, this.onFocus);
                this._viewUI.txt_name.on(LEvent.FOCUS, this, this.onFocus);
                this._viewUI.txt_khh.on(LEvent.BLUR, this, this.onBlur);
                this._viewUI.txt_khzh.on(LEvent.BLUR, this, this.onBlur);
                this._viewUI.txt_zh.on(LEvent.BLUR, this, this.onBlur);
                this._viewUI.txt_name.on(LEvent.BLUR, this, this.onBlur);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
            };
            QuKuanBindYHKPage.prototype.onFocus = function (input) {
                this._viewUI.box.centerY = -100;
            };
            QuKuanBindYHKPage.prototype.onBlur = function (input) {
                this._viewUI.box.centerY = 20;
            };
            QuKuanBindYHKPage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_BINDBANK) {
                    if (data && data.success == 0) {
                        this._game.showTips("绑定成功");
                        this.close();
                    }
                }
            };
            QuKuanBindYHKPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_bind: //确认绑定
                        //正则表达式
                        if (!this._viewUI.txt_khh.text) {
                            this._game.showTips("开户银行不能为空");
                            return;
                        }
                        if (!this._viewUI.txt_khzh.text) {
                            this._game.showTips("开户支行不能为空");
                            return;
                        }
                        if (!this._viewUI.txt_zh.text || this._viewUI.txt_zh.text.length < 11) {
                            this._game.showTips("银行卡不对");
                            return;
                        }
                        if (!this._viewUI.txt_name.text) {
                            this._game.showTips("真实姓名不能为空");
                            return;
                        }
                        var reg_1 = new RegExp("^[\u4e00-\u9fa5]+$");
                        if (!reg_1.test(this._viewUI.txt_name.text)) {
                            this._game.showTips("真实姓名只能输入中文");
                            return;
                        }
                        if (!reg_1.test(this._viewUI.txt_khh.text)) {
                            this._game.showTips("开户银行只能输入中文");
                            return;
                        }
                        if (!reg_1.test(this._viewUI.txt_khzh.text)) {
                            this._game.showTips("开户支行只能输入中文");
                            return;
                        }
                        this._game.network.call_bindbank(this._viewUI.txt_zh.text, '', this._viewUI.txt_khh.text, this._viewUI.txt_khzh.text, this._viewUI.txt_name.text);
                        break;
                }
            };
            QuKuanBindYHKPage.prototype.openJianPan = function (textUI, viewUI, centerY) {
                gamedatingnqp.DatingGame.ins.jianPanMgr.openJianPan(textUI, viewUI, centerY);
            };
            QuKuanBindYHKPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                    this._viewUI.txt_khh.off(LEvent.FOCUS, this, this.onFocus);
                    this._viewUI.txt_khzh.off(LEvent.FOCUS, this, this.onFocus);
                    this._viewUI.txt_zh.off(LEvent.FOCUS, this, this.onFocus);
                    this._viewUI.txt_name.off(LEvent.FOCUS, this, this.onFocus);
                    this._viewUI.txt_khh.off(LEvent.BLUR, this, this.onBlur);
                    this._viewUI.txt_khzh.off(LEvent.BLUR, this, this.onBlur);
                    this._viewUI.txt_zh.off(LEvent.BLUR, this, this.onBlur);
                    this._viewUI.txt_name.off(LEvent.BLUR, this, this.onBlur);
                }
                _super.prototype.close.call(this);
            };
            return QuKuanBindYHKPage;
        }(game.gui.base.Page));
        page.QuKuanBindYHKPage = QuKuanBindYHKPage;
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=QuKuanBindYHKPage.js.map