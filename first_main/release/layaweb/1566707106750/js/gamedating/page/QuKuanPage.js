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
* name 保险
*/
var gamedating;
(function (gamedating) {
    var page;
    (function (page_1) {
        var QuKuanPage = /** @class */ (function (_super) {
            __extends(QuKuanPage, _super);
            function QuKuanPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "qukuan.atlas",
                ];
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                return _this;
            }
            // 页面初始化函数
            QuKuanPage.prototype.init = function () {
                this._viewUI = this.createView("dating.QuKuanUI");
                this.addChild(this._viewUI);
                this._viewUI.list_record.vScrollBarSkin = "";
                this._viewUI.list_record.scrollBar.elasticDistance = 100;
                this._viewUI.list_record.itemRender = this.createChildren("dating.component.QuKuanTUI", CunQuT);
                this._viewUI.list_record.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_record.visible = false;
                this._viewUI.list_tab.vScrollBarSkin = "";
                this._viewUI.list_tab.scrollBar.elasticDistance = 100;
                this._viewUI.list_tab.itemRender = this.createChildren("dating.component.TabItemRenderUI", TabItemRender);
                this._viewUI.list_tab.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_tab.selectHandler = new Handler(this, this.selectHandler);
                this._viewUI.hslider.min = 0; //设置 this._viewUI.hslider0 最低位置值。
                this._viewUI.hslider.tick = 1; //设置 this._viewUI.hslider0 刻度值。
                this._viewUI.hslider.value = 0; //设置 this._viewUI.hslider0 当前位置值。
                this._viewUI.hslider.changeHandler = new Handler(this, this.onChange0); //设置 this._viewUI.hslider0 位置变化处理器。
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                gamedating.DatingGame.ins.cunQuMgr.on(CunQuMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);
                if (!this._inputMoney) {
                    this._inputMoney = new page_1.MyTextInput();
                    this._inputMoney.x = this._viewUI.txt_money.x;
                    this._inputMoney.y = this._viewUI.txt_money.y;
                    this._inputMoney.width = this._viewUI.txt_money.width;
                    this._viewUI.txt_money.parent.addChild(this._inputMoney);
                    this._viewUI.txt_money.removeSelf();
                }
                if (!this._inputKey) {
                    this._inputKey = new page_1.MyTextInput();
                    this._inputKey.x = this._viewUI.txt_qkmm.x;
                    this._inputKey.y = this._viewUI.txt_qkmm.y;
                    this._inputKey.width = this._viewUI.txt_qkmm.width;
                    this._viewUI.txt_qkmm.parent.addChild(this._inputKey);
                    this._viewUI.txt_qkmm.removeSelf();
                }
                this._promptColor = WebConfig.baseplatform == page_1.DatingPageDef.BASE_PLATFORM_TYPE_DZQP ? "#777777" : "#444444";
                this._inputColor = WebConfig.baseplatform == page_1.DatingPageDef.BASE_PLATFORM_TYPE_DZQP ? "#f8ea5e" : "#ffffff";
                this._drawchannel = [{ title: "提现记录" }];
                this.onUpdatePlayerInfo();
            };
            // 页面打开时执行函数
            QuKuanPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._inputMoney.settext(this._game, this._promptColor, "请输入金额…", this._inputColor, 24, 11, page_1.MyTextInput.TYPE_INPUT_NUMBER);
                this._inputKey.settext(this._game, this._promptColor, "请输入密码…", this._inputColor, 24, 6, page_1.MyTextInput.TYPE_INPUT_NUMBER, true);
                this._inputMoney.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._inputKey.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_clear.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_bind.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_max.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_duihuan.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this._game.network.call_get_drawchannel();
                this._notStageClickUI = [this._inputMoney, this._inputKey];
            };
            QuKuanPage.prototype.onMouseClick = function (e) {
                for (var index = 0; index < this._notStageClickUI.length; index++) {
                    var v = this._notStageClickUI[index];
                    if (v.contains(e.target)) {
                        return;
                    }
                }
                if (this._viewUI != gamedating.DatingGame.ins.jianPanMgr.pageUI)
                    return;
                gamedating.DatingGame.ins.jianPanMgr.closeJianPan();
            };
            QuKuanPage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_DRAWCHANNEL) {
                    if (data && data.success == 0) {
                        this._drawchannel = data.msg && data.msg.list ? data.msg.list.concat(this._drawchannel) : this._drawchannel;
                        this._viewUI.list_tab.dataSource = this._drawchannel;
                        this.onUpdatePlayerInfo();
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_DRAWING) {
                    if (data && data.success == 0) {
                        this._inputKey.clearInput();
                        this._inputMoney.clearInput();
                        this._viewUI.hslider.value = 0;
                        this._game.showTips("取款成功");
                    }
                }
            };
            QuKuanPage.prototype.onUpdateDataInfo = function (data) {
                this._dataInfo = [];
                var value = gamedating.DatingGame.ins.cunQuMgr.dataInfo;
                var count = 0;
                for (var key in value) {
                    if (value[key] && value[key].length > 0)
                        count++;
                }
                this._viewUI.txt_no.visible = !count;
                this._viewUI.list_record.visible = count > 0;
                if (!count) {
                    if (!data)
                        gamedating.DatingGame.ins.cunQuMgr.getData(1);
                    return;
                }
                for (var key in value) {
                    if (value.hasOwnProperty(key)) {
                        var cc = value[key];
                        if (cc) {
                            for (var index = 0; index < cc.length; index++) {
                                var aa = cc[index];
                                aa["rank"] = index + parseInt(key) * CunQuMgr.PAGE_MAX - CunQuMgr.PAGE_MAX;
                            }
                            this._dataInfo = this._dataInfo.concat(cc);
                        }
                    }
                }
                this._viewUI.list_record.dataSource = this._dataInfo;
            };
            QuKuanPage.prototype.onUpdatePlayerInfo = function () {
                if (!WebConfig.info)
                    return;
                this._viewUI.list_tab.dataSource = this._drawchannel;
                this.selectHandler();
                var money = WebConfig.info.money;
                if (money < 0)
                    money = 0;
                this._viewUI.hslider.max = Math.floor(money);
            };
            QuKuanPage.prototype.onChange0 = function (value) {
                this._inputMoney.input.text = Math.floor(value).toString();
                if (this._inputMoney.input.text) {
                    this._inputMoney.prompt.text = "";
                }
            };
            QuKuanPage.prototype.selectHandler = function (index) {
                if (index === void 0) { index = -1; }
                var data = this._viewUI.list_tab.dataSource[this._viewUI.list_tab.selectedIndex];
                if (!data) {
                    this._game.showTips("无效操作");
                    return;
                }
                if (!data.bindtype) {
                    this._viewUI.box_shoubang.visible = false;
                    this._viewUI.box_record.visible = true;
                    this._viewUI.list_record.dataSource = null;
                    this.onUpdateDataInfo();
                }
                else {
                    this._viewUI.box_shoubang.visible = true;
                    this._viewUI.box_record.visible = false;
                    if (!this._clip_money) {
                        this._clip_money = new DatingClip(DatingClip.MONEY_FONT2);
                        this._clip_money.x = this._viewUI.clip_money.x;
                        this._clip_money.y = this._viewUI.clip_money.y;
                        this._viewUI.clip_money.parent.addChild(this._clip_money);
                        this._viewUI.clip_money.removeSelf();
                    }
                    var money = WebConfig.info.money;
                    if (money < 0)
                        money = 0;
                    this._clip_money.setText(WebConfig.info.money, true, false);
                    if (data.bindtype == Web_operation_fields.BANK) //银行卡
                     {
                        this._viewUI.txt_name.text = "收款银行卡：";
                        if (WebConfig.info.yinhangka) {
                            var str = parsecode(WebConfig.info.yinhangka);
                            this._viewUI.txt_zhanghao.text = str;
                            this._viewUI.btn_bind.visible = false;
                        }
                        else {
                            this._viewUI.txt_zhanghao.text = "未绑定银行卡账号";
                            this._viewUI.btn_bind.visible = true;
                        }
                    }
                    else if (data.bindtype == Web_operation_fields.ALIPAY) //支付宝
                     {
                        this._viewUI.txt_name.text = "收款支付宝：";
                        if (WebConfig.info.zhifubao) {
                            var str = parsecode(WebConfig.info.zhifubao);
                            this._viewUI.txt_zhanghao.text = str;
                            this._viewUI.btn_bind.visible = false;
                        }
                        else {
                            this._viewUI.txt_zhanghao.text = "未绑定支付宝账号";
                            this._viewUI.btn_bind.visible = true;
                        }
                    }
                    if (index != -1) {
                        this._inputKey.input.text = "";
                    }
                }
            };
            QuKuanPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                    if (cell instanceof CunQuT) {
                        var page_2 = Math.floor((index + 10) / CunQuMgr.PAGE_MAX) + 1;
                        if (!gamedating.DatingGame.ins.cunQuMgr.dataInfo[page_2]) {
                            if (gamedating.DatingGame.ins.cunQuMgr.dataInfo[page_2 - 1] && gamedating.DatingGame.ins.cunQuMgr.dataInfo[page_2 - 1].length >= CunQuMgr.PAGE_MAX) {
                                gamedating.DatingGame.ins.cunQuMgr.dataInfo[page_2] = {};
                                gamedating.DatingGame.ins.cunQuMgr.getData(page_2);
                            }
                        }
                    }
                }
            };
            QuKuanPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_clear: //清除
                        this._viewUI.hslider.value = 0;
                        this._inputMoney.input.text = "";
                        this._inputMoney.prompt.text = "请输入金额...";
                        break;
                    case this._viewUI.btn_max: //最大
                        var money = Math.floor(WebConfig.info.money);
                        if (money < 0)
                            money = 0;
                        this._viewUI.hslider.value = money;
                        this._inputMoney.input.text = money.toString();
                        this._inputMoney.prompt.text = "";
                        break;
                    case this._viewUI.btn_bind: //绑定
                        var data_1 = this._viewUI.list_tab.dataSource[this._viewUI.list_tab.selectedIndex];
                        if (WebConfig.info && WebConfig.info.mobile) {
                            if (data_1.bindtype == Web_operation_fields.BANK) {
                                this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDYHK);
                            }
                            else if (data_1.bindtype == Web_operation_fields.ALIPAY) {
                                this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDZFB);
                            }
                        }
                        else {
                            this._game.showTips("请先绑定手机号码！");
                            this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDPHONE);
                        }
                        break;
                    case this._viewUI.btn_duihuan: //取出
                        if (WebConfig.info && !WebConfig.info.mobile) {
                            this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDPHONE);
                            return;
                        }
                        var data1 = this._viewUI.list_tab.dataSource[this._viewUI.list_tab.selectedIndex];
                        if (data1.bindtype == Web_operation_fields.BANK) {
                            if (!WebConfig.info.yinhangka) {
                                this._game.showTips("未绑定银行卡");
                                return;
                            }
                        }
                        else if (data1.bindtype == Web_operation_fields.ALIPAY) {
                            if (!WebConfig.info.zhifubao) {
                                this._game.showTips("未绑定支付宝");
                                return;
                            }
                        }
                        if (!this._inputMoney.input.text || parseInt(this._inputMoney.input.text) > WebConfig.info.money) {
                            this._game.showTips("超出可取范围");
                            return;
                        }
                        if (!this._inputMoney.input.text || parseInt(this._inputMoney.input.text) < data1.minmoney) {
                            this._game.showTips("小于最小可取范围");
                            return;
                        }
                        if (this._inputMoney.input.text.indexOf(".") != -1) {
                            this._game.showTips("只能取出整数金额");
                            return;
                        }
                        if (!this._inputKey.password) {
                            this._game.showTips("取款密码不能为空");
                            return;
                        }
                        this._game.network.call_goto_draw(this._inputMoney.input.text, data1.bindtype.toString(), this._inputKey.password);
                        break;
                    case this._inputMoney:
                        this.openJianPan(this._inputMoney, this._viewUI, -20);
                        break;
                    case this._inputKey:
                        this.openJianPan(this._inputKey, this._viewUI, -180);
                        break;
                }
            };
            QuKuanPage.prototype.openJianPan = function (textUI, viewUI, centerY) {
                gamedating.DatingGame.ins.jianPanMgr.openJianPan(textUI, viewUI, centerY);
            };
            QuKuanPage.prototype.close = function () {
                if (this._viewUI) {
                    gamedating.DatingGame.ins.cunQuMgr.clear();
                    gamedating.DatingGame.ins.cunQuMgr.off(CunQuMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                    if (this._clip_money) {
                        this._clip_money.removeSelf();
                        this._clip_money.destroy();
                        this._clip_money = null;
                    }
                    this._inputMoney.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._inputMoney.destroy();
                    this._inputMoney = null;
                    this._inputKey.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._inputKey.destroy();
                    this._inputKey = null;
                }
                _super.prototype.close.call(this);
            };
            return QuKuanPage;
        }(game.gui.base.Page));
        page_1.QuKuanPage = QuKuanPage;
        var CunQuT = /** @class */ (function (_super) {
            __extends(CunQuT, _super);
            function CunQuT() {
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
            CunQuT.prototype.setData = function (game, data) {
                this.dataSource = data;
                this.txt_time.text = Sync.getTimeStr(data.create_time * 1000);
                this.txt_zt.text = data.status;
                this.txt_money.text = data.money;
                this.txt_type.text = data.drawtype;
                this.img_bg.skin = StringU.substitute(DatingPath.ui_dating_tongyong + "tu_bb{0}.png", data.rank % 2 == 0 ? 1 : 2);
                this.visible = true;
                Laya.Tween.clearAll(this);
                if (!this._isTween) {
                    this.visible = true;
                    var x = this.x;
                    this.x = this.width + 10;
                    Laya.Tween.to(this, {
                        x: x
                    }, 500, Laya.Ease.linearIn, null, data.rank * 200);
                    this._isTween = true;
                }
                else {
                    this.x = this._itemX;
                }
            };
            return CunQuT;
        }(ui.dating.component.QuKuanTUI));
        var TabItemRender = /** @class */ (function (_super) {
            __extends(TabItemRender, _super);
            function TabItemRender() {
                return _super !== null && _super.apply(this, arguments) || this;
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
            TabItemRender.prototype.setData = function (game, data) {
                this.dataSource = data;
                if (data.bindtype == Web_operation_fields.BANK) {
                    this.txt_name.text = "银行卡";
                }
                else if (data.bindtype == Web_operation_fields.ALIPAY) {
                    this.txt_name.text = "支付宝";
                }
                else {
                    this.txt_name.text = data.title;
                }
            };
            return TabItemRender;
        }(ui.dating.component.TabItemRenderUI));
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=QuKuanPage.js.map