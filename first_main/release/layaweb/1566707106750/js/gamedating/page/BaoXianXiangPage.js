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
* name 保险箱
*/
var gamedating;
(function (gamedating) {
    var page;
    (function (page) {
        var BaoXianXiangPage = /** @class */ (function (_super) {
            __extends(BaoXianXiangPage, _super);
            function BaoXianXiangPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._numbtns = [];
                _this._asset = [
                    DatingPath.atlas_dating_ui + "baoxianxiang.atlas",
                ];
                _this._isNeedBlack = true;
                return _this;
            }
            // 页面初始化函数
            BaoXianXiangPage.prototype.init = function () {
                this._viewUI = this.createView("dating.BaoXianXiangUI");
                this.addChild(this._viewUI);
                this._viewUI.list_record.vScrollBarSkin = "";
                this._viewUI.list_record.scrollBar.elasticDistance = 100;
                this._viewUI.list_record.itemRender = this.createChildren("dating.component.BaoXianXiangTUI", BaoXianXiangT);
                this._viewUI.list_record.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_record.visible = false;
                if (!this._clip_money1) {
                    this._clip_money1 = new DatingClip(DatingClip.MONEY_FONT2);
                    this._clip_money1.x = this._viewUI.clip_0.x;
                    this._clip_money1.y = this._viewUI.clip_0.y;
                    this._viewUI.clip_0.parent.addChild(this._clip_money1);
                    this._viewUI.clip_0.removeSelf();
                }
                if (!this._clip_money2) {
                    this._clip_money2 = new DatingClip(DatingClip.MONEY_FONT2);
                    this._clip_money2.x = this._viewUI.clip2.x;
                    this._clip_money2.y = this._viewUI.clip2.y;
                    this._viewUI.clip2.parent.addChild(this._clip_money2);
                    this._viewUI.clip2.removeSelf();
                }
                this._clip_money1.setText("");
                this._clip_money2.setText("");
            };
            BaoXianXiangPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.dataSource["index"] = index;
                    cell.setData(this._game, cell.dataSource);
                }
            };
            // 页面打开时执行函数
            BaoXianXiangPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_tab.selectHandler = new Handler(this, this.selectHandler);
                this._viewUI.btn_pop.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_all.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_enter.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                for (var index = 0; index < 10; index++) {
                    this._numbtns[index] = this._viewUI["btn" + index];
                    this._viewUI["btn" + index].on(LEvent.CLICK, this, this.onBtnClickWithTween);
                }
                this._viewUI.txt_input.on(LEvent.INPUT, this, this.onChange);
                this._viewUI.btn_tab.selectedIndex = 0;
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                this.onUpdatePlayerInfo();
            };
            BaoXianXiangPage.prototype.onChange = function () {
                if (this._viewUI.btn_tab.selectedIndex != 0) {
                    return;
                }
                var num = parseInt(this._viewUI.txt_input.text) || 0;
                var rate = 0;
                if (num >= WebConfig.info.savebox_min) {
                    rate = WebConfig.info.savebox_rate;
                }
                var total = num * rate;
                // let strTotal: string = total.toString();
                // let index = strTotal.lastIndexOf(".");
                // let min;
                // if (index == -1) {
                // 	min = 0;
                // } else {
                // 	min = Math.min(strTotal.length - index - 1, 4)
                // }
                // let str = total <= 0 ? "0" : total.toFixed(min);
                this._viewUI.txt_rate_money.changeText(EnumToString.getPointBackNum(total, 2).toString());
            };
            BaoXianXiangPage.prototype.onUpdatePlayerInfo = function () {
                if (!WebConfig.info)
                    return;
                this._clip_money1.setText(WebConfig.info.money, true);
                this._clip_money2.setText(WebConfig.info.savaBoxMoney, true);
            };
            BaoXianXiangPage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_SAVEBOXIN) { //存入
                    if (data && data.success == 0) {
                        this._viewUI.txt_input.text = "";
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_SAVEBOXOUT) { //取出
                    if (data && data.success == 0) {
                        this._viewUI.txt_input.text = "";
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_SAVEBOXLIST) { //存取列表
                    if (data && data.success == 0) {
                        if (data.msg) {
                            this._viewUI.list_record.dataSource = data.msg.list && data.msg.list.length > 0 ? data.msg.list : [];
                        }
                        else {
                            this._viewUI.list_record.dataSource = [];
                        }
                        this._viewUI.list_record.visible = data.msg && data.msg.list && data.msg.list.length > 0;
                        this._viewUI.txt_no.visible = !this._viewUI.list_record.visible;
                    }
                }
            };
            BaoXianXiangPage.prototype.selectHandler = function (index) {
                if (index == 0) {
                    this._viewUI.txt_type.text = "存　入：";
                    this._viewUI.btn_enter.skin = DatingPath.ui_dating + "baoxianxiang/btn_cr1.png";
                    this._viewUI.box_lixi.visible = true;
                }
                else if (index == 1) {
                    this._viewUI.txt_type.text = "取　出：";
                    this._viewUI.btn_enter.skin = DatingPath.ui_dating + "baoxianxiang/btn_qc1.png";
                    this._viewUI.box_lixi.visible = false;
                }
                else {
                    this._game.network.call_get_savebox_list();
                }
                this._viewUI.box_bxx.visible = index != 2;
                this._viewUI.box_record.visible = index == 2;
                this._viewUI.txt_input.text = "";
                this._viewUI.txt_rate_money.text = "";
            };
            BaoXianXiangPage.prototype.onBtnTweenEnd = function (e, target) {
                if (target == this._viewUI.btn_enter) {
                    var money = parseFloat(this._viewUI.txt_input.text);
                    if (!this._viewUI.txt_input.text || !money) {
                        this._game.showTips("金额输入错误");
                        return;
                    }
                    if (this._viewUI.btn_tab.selectedIndex == 0) {
                        if (money > WebConfig.info.money) {
                            this._game.showTips("余额不足");
                            return;
                        }
                        this._game.network.call_saveboxin(money);
                    }
                    else {
                        if (money > WebConfig.info.savaBoxMoney) {
                            this._game.showTips("余额不足");
                            return;
                        }
                        this._game.network.call_saveboxout(money, "");
                    }
                }
                else if (target == this._viewUI.btn_pop) {
                    if (this._viewUI.txt_input.text.length > 0)
                        this._viewUI.txt_input.text = this._viewUI.txt_input.text.slice(0, -1);
                }
                else if (target == this._viewUI.btn_all) {
                    if (this._viewUI.btn_tab.selectedIndex == 0) //存入
                     {
                        this._viewUI.txt_input.text = Math.floor(WebConfig.info.money).toString();
                    }
                    else { //取出
                        this._viewUI.txt_input.text = Math.floor(WebConfig.info.savaBoxMoney).toString();
                    }
                }
                else {
                    var indx = this._numbtns.indexOf(target);
                    if (indx != -1) {
                        this._viewUI.txt_input.text += indx.toString();
                    }
                }
                if (target != this._viewUI.btn_enter) {
                    this.onChange();
                }
            };
            BaoXianXiangPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                    if (this._clip_money1) {
                        this._clip_money1.removeSelf();
                        this._clip_money1.destroy();
                        this._clip_money1 = null;
                    }
                    if (this._clip_money2) {
                        this._clip_money2.removeSelf();
                        this._clip_money2.destroy();
                        this._clip_money2 = null;
                    }
                }
                _super.prototype.close.call(this);
            };
            return BaoXianXiangPage;
        }(game.gui.base.Page));
        page.BaoXianXiangPage = BaoXianXiangPage;
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
        }(ui.dating.component.BaoXianXiangTUI));
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=BaoXianXiangPage.js.map