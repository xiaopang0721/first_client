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
    (function (page_1) {
        var YuEBaoPage = /** @class */ (function (_super) {
            __extends(YuEBaoPage, _super);
            function YuEBaoPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "baoxianxiang.atlas",
                    DatingPath.atlas_dating_ui + "yuebao.atlas",
                ];
                _this._isNeedBlack = true;
                return _this;
            }
            // 页面初始化函数
            YuEBaoPage.prototype.init = function () {
                this._viewUI = this.createView("dating.YuEBaoUI");
                this.addChild(this._viewUI);
                this._viewUI.txt_last.text = "";
                this._viewUI.txt_money.text = "";
                this._viewUI.txt_total.text = "";
                this._viewUI.txt_daily.text = "";
                this._viewUI.txt_rate.text = "";
            };
            // 页面打开时执行函数
            YuEBaoPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_record.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_help.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zhuanchu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zhuanru.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                this.onUpdatePlayerInfo();
                this.onUpdateMoneyInfo();
            };
            YuEBaoPage.prototype.onUpdatePlayerInfo = function () {
                if (!WebConfig.info)
                    return;
                this._viewUI.txt_money.text = "总金额：" + WebConfig.info.savaBoxMoney;
                this._viewUI.txt_daily.text = EnumToString.getPointBackNum(WebConfig.info.savaBoxMoney * WebConfig.info.savebox_rate, 2).toString(); //每日收益
            };
            YuEBaoPage.prototype.onUpdateMoneyInfo = function () {
                if (!WebConfig.info)
                    return;
                this._viewUI.txt_last.text = EnumToString.getPointBackNum(WebConfig.info.savebox_last_profit / 100, 2).toString(); //昨日收益
                this._viewUI.txt_total.text = EnumToString.getPointBackNum(WebConfig.info.savebox_total_profit / 100, 2).toString(); //累计收益
                this._viewUI.txt_rate.text = EnumToString.getPointBackNum(WebConfig.info.savebox_rate * 10000, 2) + "‱"; //每日利率（万分比）
            };
            YuEBaoPage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_SAVEBOXIN) { //存入
                    if (data && data.success == 0) {
                        this.onUpdateMoneyInfo();
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_SAVEBOXOUT) { //取出
                    if (data && data.success == 0) {
                        this.onUpdateMoneyInfo();
                    }
                }
            };
            YuEBaoPage.prototype.onBtnTweenEnd = function (e, target) {
                if (target == this._viewUI.btn_record) {
                    this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_YUEBAO_RECORD);
                }
                else if (target == this._viewUI.btn_help) {
                    this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_YUEBAO_HELP);
                }
                else if (target == this._viewUI.btn_zhuanru) {
                    this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_YUEBAO_CUNQU, function (page) {
                        page.dataSource = 1;
                    });
                }
                else if (target == this._viewUI.btn_zhuanchu) {
                    this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_YUEBAO_CUNQU, function (page) {
                        page.dataSource = 2;
                    });
                }
            };
            YuEBaoPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                }
                _super.prototype.close.call(this);
            };
            return YuEBaoPage;
        }(game.gui.base.Page));
        page_1.YuEBaoPage = YuEBaoPage;
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=YuEBaoPage.js.map