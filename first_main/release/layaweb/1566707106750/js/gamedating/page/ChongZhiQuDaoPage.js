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
* name 充值渠道
*/
var gamedating;
(function (gamedating) {
    var page;
    (function (page) {
        var ChongZhiQuDaoPage = /** @class */ (function (_super) {
            __extends(ChongZhiQuDaoPage, _super);
            function ChongZhiQuDaoPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "chongzhi.atlas",
                ];
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                _this._isNeedDuang = false;
                return _this;
            }
            // 页面初始化函数
            ChongZhiQuDaoPage.prototype.init = function () {
                this._viewUI = this.createView("dating.ChongZhi_1UI");
                this.addChild(this._viewUI);
                this._viewUI.list_money.itemRender = this.createChildren("dating.component.MoneyItemRenderUI", MoneyItemRender);
                this._viewUI.list_money.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_money.mouseHandler = new Handler(this, this.moneyselectHandler);
            };
            ChongZhiQuDaoPage.prototype.moneyselectHandler = function (e, index) {
                if (e.type != LEvent.CLICK)
                    return;
                this._viewUI.txt_input.text = this._viewUI.list_money.dataSource[index];
            };
            ChongZhiQuDaoPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            ChongZhiQuDaoPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_clear: //清除
                        this._viewUI.txt_input.text = "";
                        break;
                    case this._viewUI.btn_pay: //支付
                        if (!this._viewUI.txt_input.text || !parseInt(this._viewUI.txt_input.text)) {
                            this._game.showTips("金额输入错误");
                            return;
                        }
                        if (parseInt(this._viewUI.txt_input.text) < this._dataSource.minmoney) {
                            this._game.showTips(StringU.substitute("充值金额不低于{0}元", this._dataSource.minmoney));
                            return;
                        }
                        if (parseInt(this._viewUI.txt_input.text) > this._dataSource.maxmoney) {
                            this._game.showTips(StringU.substitute("充值金额不超过{0}元", this._dataSource.maxmoney));
                            return;
                        }
                        // if (!WebConfig.info.username) {
                        // 	this._game.showTips("请先绑定")
                        // 	this._game.uiRoot.general.open(PageDef.PAGE_BINDACCOUNT)
                        // 	return;
                        // }
                        var dd = this._dataSource;
                        if (!dd) {
                            this._game.showTips("无效操作");
                            return;
                        }
                        this._game.network.call_goto_pay(this._viewUI.txt_input.text, dd.id, dd.paytype);
                        break;
                }
            };
            // 页面打开时执行函数
            ChongZhiQuDaoPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                var arr = this._dataSource.quickmoney ? this._dataSource.quickmoney.split(",") : [];
                arr.length = 8;
                this._viewUI.list_money.dataSource = arr;
                this._viewUI.txt_input.prompt = StringU.substitute("充值金额不低于{0}元", this._dataSource.minmoney);
                this._viewUI.txt_name.text = StringU.substitute("充值渠道 " + (this._dataSource.index + 1));
                this._viewUI.txt_xe.text = StringU.substitute("单笔限额:{0}元 - {1}元", this._dataSource.minmoney, this._dataSource.maxmoney);
                this._viewUI.txt_input.disabled = this._dataSource.is_disable_input;
                this._viewUI.btn_clear.visible = !this._dataSource.is_disable_input;
                this._viewUI.btn_clear.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_pay.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            };
            ChongZhiQuDaoPage.prototype.close = function () {
                if (this._viewUI) {
                }
                _super.prototype.close.call(this);
            };
            return ChongZhiQuDaoPage;
        }(game.gui.base.Page));
        page.ChongZhiQuDaoPage = ChongZhiQuDaoPage;
        var MoneyItemRender = /** @class */ (function (_super) {
            __extends(MoneyItemRender, _super);
            function MoneyItemRender() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MoneyItemRender.prototype.setData = function (game, data) {
                if (!data) {
                    this.visible = false;
                    return;
                }
                this.btn.label = data;
            };
            return MoneyItemRender;
        }(ui.dating.component.MoneyItemRenderUI));
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=ChongZhiQuDaoPage.js.map