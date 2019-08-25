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
* name
*/
var gamedating;
(function (gamedating) {
    var page;
    (function (page) {
        var YuEBaoCunQuPage = /** @class */ (function (_super) {
            __extends(YuEBaoCunQuPage, _super);
            function YuEBaoCunQuPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "baoxianxiang.atlas",
                ];
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                return _this;
            }
            // 页面初始化函数
            YuEBaoCunQuPage.prototype.init = function () {
                this._viewUI = this.createView("dating.YuEBao_ZRUI");
                this.addChild(this._viewUI);
                this._viewUI.txt_money.text = "";
                this._viewUI.txt_yuebao.text = "";
                if (!this._inputMoney) {
                    this._inputMoney = new page.MyTextInput();
                    this._inputMoney.x = this._viewUI.txt_input.x;
                    this._inputMoney.y = this._viewUI.txt_input.y;
                    this._inputMoney.width = this._viewUI.txt_input.width;
                    this._viewUI.txt_input.parent.addChild(this._inputMoney);
                    this._viewUI.txt_input.removeSelf();
                }
                if (!this._inputKey) {
                    this._inputKey = new page.MyTextInput();
                    this._inputKey.x = this._viewUI.txt_key.x;
                    this._inputKey.y = this._viewUI.txt_key.y;
                    this._inputKey.width = this._viewUI.txt_key.width;
                    this._viewUI.txt_key.parent.addChild(this._inputKey);
                    this._viewUI.txt_key.removeSelf();
                }
                this._promptColor = WebConfig.baseplatform == page.DatingPageDef.BASE_PLATFORM_TYPE_DZQP ? "#777777" : "#b4b6b9";
                this._inputColor = WebConfig.baseplatform == page.DatingPageDef.BASE_PLATFORM_TYPE_DZQP ? "#fffbb5" : "#ffffff";
                this._notStageClickUI = [this._inputMoney, this._inputKey];
            };
            // 页面打开时执行函数
            YuEBaoCunQuPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.box_cun.visible = this.dataSource == YuEBaoCunQuPage.TYPE_CUNKUAN;
                this._viewUI.box_qu.visible = this.dataSource == YuEBaoCunQuPage.TYPE_QUKUAN;
                this._viewUI.txt_type.text = this.dataSource == YuEBaoCunQuPage.TYPE_CUNKUAN ? "存　入：" : "取　出：";
                this._inputMoney.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._inputKey.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_all.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_enter.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                gamedating.DatingGame.ins.jianPanMgr.on(JianPanMgr.EVENT_CHANGE, this, this.onChange);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                this._inputMoney.settext(this._game, this._promptColor, "请输入金额...", this._inputColor, 26, 11, page.MyTextInput.TYPE_INPUT_NUMBER);
                this._inputKey.settext(this._game, this._promptColor, "请输入密码...", this._inputColor, 26, 11, page.MyTextInput.TYPE_INPUT_NUMBER, true);
                this.onUpdatePlayerInfo();
            };
            YuEBaoCunQuPage.prototype.onChange = function () {
                if (this.dataSource == YuEBaoCunQuPage.TYPE_QUKUAN)
                    return;
                var num = parseInt(this._inputMoney.input.text) || 0;
                var rate = 0;
                if (WebConfig.info && num >= WebConfig.info.savebox_min) {
                    rate = WebConfig.info.savebox_rate;
                }
                var total = num * rate;
                this._viewUI.txt_rate_money.changeText(EnumToString.getPointBackNum(total, 2).toString());
            };
            YuEBaoCunQuPage.prototype.onUpdatePlayerInfo = function () {
                if (!WebConfig.info)
                    return;
                this._viewUI.txt_money.text = WebConfig.info.money.toString();
                this._viewUI.txt_yuebao.text = WebConfig.info.savaBoxMoney.toString();
            };
            YuEBaoCunQuPage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_SAVEBOXIN) { //存入
                    if (data && data.success == 0) {
                        this._inputMoney.clearInput();
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_SAVEBOXOUT) { //取出
                    if (data && data.success == 0) {
                        this._inputMoney.clearInput();
                        this._inputKey.clearInput();
                    }
                }
            };
            YuEBaoCunQuPage.prototype.onBtnTweenEnd = function (e, target) {
                if (!WebConfig.info)
                    return;
                if (target == this._viewUI.btn_enter) {
                    var money = parseFloat(this._inputMoney.input.text);
                    if (!this._inputMoney.input.text || !money) {
                        this._game.showTips("金额输入错误");
                        return;
                    }
                    if (this.dataSource == YuEBaoCunQuPage.TYPE_CUNKUAN) {
                        if (money > WebConfig.info.money) {
                            this._game.showTips("余额不足");
                            return;
                        }
                        this._game.network.call_saveboxin(money);
                    }
                    else {
                        if (!WebConfig.info.mobile) {
                            this._game.uiRoot.general.open(page.DatingPageDef.PAGE_BINDPHONE);
                            this._game.showTips("请先绑定手机");
                            return;
                        }
                        if (!WebConfig.info.yinhangka) {
                            this._game.uiRoot.general.open(page.DatingPageDef.PAGE_BINDYHK);
                            this._game.showTips("请先绑定银行卡");
                            return;
                        }
                        if (!this._inputKey.input.text) {
                            this._game.showTips("取款密码不能为空");
                            return;
                        }
                        if (money > WebConfig.info.savaBoxMoney) {
                            this._game.showTips("余额不足");
                            return;
                        }
                        this._game.network.call_saveboxout(money, this._inputKey.password);
                    }
                }
                else if (target == this._viewUI.btn_all) {
                    if (this.dataSource == YuEBaoCunQuPage.TYPE_CUNKUAN) //存入
                     {
                        this._inputMoney.input.text = Math.floor(WebConfig.info.money).toString();
                    }
                    else { //取出
                        this._inputMoney.input.text = Math.floor(WebConfig.info.savaBoxMoney).toString();
                    }
                    this._inputMoney.prompt.text = "";
                }
                else if (target == this._inputMoney) {
                    gamedating.DatingGame.ins.jianPanMgr.openJianPan(this._inputMoney, this._viewUI, -120);
                }
                else if (target == this._inputKey) {
                    gamedating.DatingGame.ins.jianPanMgr.openJianPan(this._inputKey, this._viewUI, -120);
                }
                if (target != this._viewUI.btn_enter) {
                    this.onChange();
                }
            };
            YuEBaoCunQuPage.prototype.onMouseClick = function (e) {
                for (var index = 0; index < this._notStageClickUI.length; index++) {
                    var v = this._notStageClickUI[index];
                    if (v.contains(e.target)) {
                        return;
                    }
                }
                gamedating.DatingGame.ins.jianPanMgr.closeJianPan();
            };
            YuEBaoCunQuPage.prototype.close = function () {
                if (this._viewUI) {
                    gamedating.DatingGame.ins.jianPanMgr.off(JianPanMgr.EVENT_CHANGE, this, this.onChange);
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                }
                _super.prototype.close.call(this);
            };
            YuEBaoCunQuPage.TYPE_CUNKUAN = 1; //存款
            YuEBaoCunQuPage.TYPE_QUKUAN = 2; //取款
            return YuEBaoCunQuPage;
        }(game.gui.base.Page));
        page.YuEBaoCunQuPage = YuEBaoCunQuPage;
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=YuEBaoCunQuPage.js.map