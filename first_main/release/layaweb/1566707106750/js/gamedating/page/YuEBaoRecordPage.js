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
        var YuEBaoRecordPage = /** @class */ (function (_super) {
            __extends(YuEBaoRecordPage, _super);
            function YuEBaoRecordPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "baoxianxiang.atlas",
                ];
                _this._isNeedBlack = true;
                return _this;
            }
            // 页面初始化函数
            YuEBaoRecordPage.prototype.init = function () {
                this._viewUI = this.createView("dating.YuEBao_JLUI");
                this.addChild(this._viewUI);
                this._viewUI.list_record.vScrollBarSkin = "";
                this._viewUI.list_record.scrollBar.elasticDistance = 100;
                this._viewUI.list_record.itemRender = this.createChildren("dating.component.YuEBaoTUI", BaoXianXiangT);
                this._viewUI.list_record.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_record.visible = false;
                this._game.network.call_get_savebox_list();
            };
            YuEBaoRecordPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.dataSource["index"] = index;
                    cell.setData(this._game, cell.dataSource);
                }
            };
            // 页面打开时执行函数
            YuEBaoRecordPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
            };
            YuEBaoRecordPage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_SAVEBOXLIST) { //存取列表
                    if (data && data.success == 0) {
                        if (data.msg) {
                            this._viewUI.list_record.dataSource = data.msg.list;
                        }
                        else {
                            this._viewUI.list_record.dataSource = [];
                        }
                        this._viewUI.list_record.visible = data.msg && data.msg.list && data.msg.list.length > 0;
                        this._viewUI.txt_no.visible = !this._viewUI.list_record.visible;
                    }
                }
            };
            YuEBaoRecordPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                }
                _super.prototype.close.call(this);
            };
            return YuEBaoRecordPage;
        }(game.gui.base.Page));
        page.YuEBaoRecordPage = YuEBaoRecordPage;
        var BaoXianXiangT = /** @class */ (function (_super) {
            __extends(BaoXianXiangT, _super);
            function BaoXianXiangT() {
                var _this = _super.call(this) || this;
                _this._itemX = _this.x;
                return _this;
            }
            /**
             *
             * @param game
             * id:"21"
                lv:"1"
                maxmoney:"50000"
                minmoney:"1"
                name:"支付宝"
                paytype:"ZFBH5"
             * @param data
             */
            BaoXianXiangT.prototype.setData = function (game, data) {
                this._data = data;
                this.txt_time.text = Sync.getTimeStr(data.op_time * 1000);
                this.txt_zt.text = (data.op_type == Web_operation_fields.USE_MONEY_LOG_TYPE_SAFEBOX_INTEREST) ? "利息" : (data.op_type == Web_operation_fields.USE_MONEY_LOG_TYPE_SAFEBOX_IN ? "存入" : "取出");
                this.txt_money.text = data.money;
                this.img_bg.skin = StringU.substitute(DatingPath.ui_dating_tongyong + "tu_bb{0}.png", data.index % 2 == 0 ? 1 : 2);
                this.visible = true;
                Laya.Tween.clearAll(this);
                if (!this._isTween) {
                    this.visible = true;
                    var x = this.x;
                    this.x = this.width + 10;
                    Laya.Tween.to(this, {
                        x: x
                    }, 500, Laya.Ease.linearIn, null, data.index * 200);
                    this._isTween = true;
                }
                else {
                    this.x = this._itemX;
                }
            };
            return BaoXianXiangT;
        }(ui.dating.component.YuEBaoTUI));
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=YuEBaoRecordPage.js.map