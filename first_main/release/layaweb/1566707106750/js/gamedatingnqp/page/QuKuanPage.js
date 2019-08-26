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
var gamedatingnqp;
(function (gamedatingnqp) {
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
                this._viewUI.list_tab.itemRender = this.createChildren("dating.component.TabItemRender1UI", TabItemRender);
                this._viewUI.list_tab.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_tab.selectHandler = new Handler(this, this.selectHandler);
                this._drawchannel = [];
                if (FreeStyle.getData('baseconfig_c', 'drawalipayuse') == '1')
                    this._drawchannel.push({ bindtype: Web_operation_fields.ALIPAY });
                if (FreeStyle.getData('baseconfig_c', 'drawbankuse') == '1')
                    this._drawchannel.push({ bindtype: Web_operation_fields.BANK });
                this._drawchannel.push({ title: "提现记录" });
                this._viewUI.list_tab.dataSource = this._drawchannel;
                this._viewUI.hslider.min = 0; //设置 this._viewUI.hslider0 最低位置值。
                this._viewUI.hslider.tick = 1; //设置 this._viewUI.hslider0 刻度值。
                this._viewUI.hslider.value = 0; //设置 this._viewUI.hslider0 当前位置值。
                this._viewUI.hslider.changeHandler = new Handler(this, this.onChange0); //设置 this._viewUI.hslider0 位置变化处理器。
                gamedatingnqp.DatingGame.ins.cunQuMgr.on(CunQuMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);
                if (!this._inputMoney) {
                    this._inputMoney = new page_1.MyTextInput();
                    this._inputMoney.x = this._viewUI.view_money.x;
                    this._inputMoney.y = this._viewUI.view_money.y;
                    this._inputMoney.width = this._viewUI.view_money.width;
                    this._viewUI.view_money.parent.addChild(this._inputMoney);
                    this._viewUI.view_money.removeSelf();
                }
                this._inputMoney.settext(this._game, TeaStyle.COLOR_INPUT_DEFAULT, "请输入兑换的金额", TeaStyle.COLOR_WHITE, 24, 11, page_1.MyTextInput.TYPE_INPUT_NUMBER, false, Handler.create(this, this.onInputUpdate, null, false));
                this._bankMinDraw = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, 'drawbankmin');
                this._alipayMinDraw = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, 'drawalipaymin');
                this._viewUI.box_shoubang.addChild(this._viewUI.btn_max);
                this._viewUI.box_shoubang.addChild(this._viewUI.btn_clear);
                this._viewUI.list_tab.selectedIndex = -1;
                this._viewUI.list_tab.selectedIndex = 0;
            };
            // 页面打开时执行函数
            QuKuanPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.txt_zhanghao.on(LEvent.CLICK, this, this.onMouseClick);
                this._inputMoney.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_clear.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_max.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_help.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_duihuan.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onPlayerInfoUpdate);
                this._notStageClickUI = [this._inputMoney];
                this._viewUI.btn_clear.visible = false;
            };
            QuKuanPage.prototype.close = function () {
                if (this._viewUI) {
                    gamedatingnqp.DatingGame.ins.cunQuMgr.clear();
                    gamedatingnqp.DatingGame.ins.cunQuMgr.off(CunQuMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onPlayerInfoUpdate);
                    if (this._inputMoney) {
                        this._inputMoney.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                        this._inputMoney.destroy();
                        this._inputMoney = null;
                    }
                }
                _super.prototype.close.call(this);
            };
            QuKuanPage.prototype.onInputUpdate = function () {
                var value = parseInt(this._inputMoney.input.text) || 0;
                if (value == 0)
                    this._inputMoney.clearInput();
                this._viewUI.hslider.value = value;
                this._viewUI.btn_clear.visible = value > 0;
            };
            QuKuanPage.prototype.onPlayerInfoUpdate = function () {
                var money = WebConfig.info.money;
                if (money < 0)
                    money = 0;
                this._viewUI.txt_curmoney.text = money + '';
                this._damaLeft = WebConfig.info.drawingRequiredFlow - WebConfig.info.drawingCurrentFlow;
                this._damaLeft = this._damaLeft < 0 ? 0 : this._damaLeft;
                this._viewUI.txt_dama.text = this._damaLeft.toString();
                this._viewUI.hslider.max = money;
                // 打码量大于0，不让取款
                this._inputMoney.disabled = this._viewUI.hslider.disabled = this._viewUI.btn_max.disabled = this._viewUI.btn_duihuan.disabled = this._damaLeft > 0;
                var data = this._viewUI.list_tab.dataSource[this._viewUI.list_tab.selectedIndex];
                if (!data)
                    return;
                if (data.bindtype == Web_operation_fields.BANK) //银行卡
                 {
                    if (WebConfig.info.yinhangka) {
                        var str = parsecode(WebConfig.info.yinhangka);
                        this._viewUI.txt_zhanghao.text = str;
                        this._viewUI.txt_zhanghao.mouseEnabled = false;
                    }
                    else {
                        this._viewUI.txt_zhanghao.text = "点击绑定银行卡信息";
                        this._viewUI.txt_zhanghao.mouseEnabled = true;
                    }
                }
                else if (data.bindtype == Web_operation_fields.ALIPAY) //支付宝
                 {
                    if (WebConfig.info.zhifubao) {
                        var str = parsecode(WebConfig.info.zhifubao);
                        this._viewUI.txt_zhanghao.text = str;
                        this._viewUI.txt_zhanghao.mouseEnabled = false;
                    }
                    else {
                        this._viewUI.txt_zhanghao.text = "点击绑定支付宝信息";
                        this._viewUI.txt_zhanghao.mouseEnabled = true;
                    }
                }
            };
            QuKuanPage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_DRAWING) {
                    if (data && data.success == 0) {
                        this._inputMoney.clearInput();
                        this._viewUI.hslider.value = 0;
                        this._game.showTips("取款成功");
                    }
                }
            };
            QuKuanPage.prototype.onUpdateDataInfo = function (data) {
                this._dataInfo = [];
                var value = gamedatingnqp.DatingGame.ins.cunQuMgr.dataInfo;
                var count = 0;
                for (var key in value) {
                    if (value[key] && value[key].length > 0)
                        count++;
                }
                this._viewUI.txt_no.visible = !count;
                this._viewUI.list_record.visible = count > 0;
                if (!count) {
                    if (!data)
                        gamedatingnqp.DatingGame.ins.cunQuMgr.getData(1);
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
            QuKuanPage.prototype.onChange0 = function (value) {
                this._viewUI.btn_clear.visible = value > 0;
                if (value == 0)
                    this._inputMoney.clearInput();
                else
                    this._inputMoney.setText_0(Math.floor(value).toString());
            };
            QuKuanPage.prototype.selectHandler = function (index) {
                if (index === void 0) { index = -1; }
                var data = this._viewUI.list_tab.dataSource[this._viewUI.list_tab.selectedIndex];
                if (!data) {
                    return;
                }
                if (!data.bindtype) {
                    this._viewUI.box_shoubang.visible = false;
                    this._viewUI.box_record.visible = true;
                    this._viewUI.list_record.dataSource = null;
                    this.onUpdateDataInfo();
                }
                else {
                    if (data.bindtype == Web_operation_fields.BANK) //银行卡
                        this._inputMoney.setPrompt = '请输入兑换的金额(最低' + this._bankMinDraw + ')';
                    else
                        this._inputMoney.setPrompt = '请输入兑换的金额(最低' + this._alipayMinDraw + ')';
                    this._viewUI.box_shoubang.visible = true;
                    this._viewUI.box_record.visible = false;
                    this._viewUI.btn_clear.visible = false;
                    this._inputMoney.clearInput();
                    this.onPlayerInfoUpdate();
                }
            };
            QuKuanPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                    if (cell instanceof CunQuT) {
                        var page_2 = Math.floor((index + 10) / CunQuMgr.PAGE_MAX) + 1;
                        if (!gamedatingnqp.DatingGame.ins.cunQuMgr.dataInfo[page_2]) {
                            if (gamedatingnqp.DatingGame.ins.cunQuMgr.dataInfo[page_2 - 1] && gamedatingnqp.DatingGame.ins.cunQuMgr.dataInfo[page_2 - 1].length >= CunQuMgr.PAGE_MAX) {
                                gamedatingnqp.DatingGame.ins.cunQuMgr.dataInfo[page_2] = {};
                                gamedatingnqp.DatingGame.ins.cunQuMgr.getData(page_2);
                            }
                        }
                    }
                }
            };
            QuKuanPage.prototype.onMouseClick = function (e) {
                if (e.currentTarget == this._viewUI.txt_zhanghao) {
                    var pwd = this._game.sceneObjectMgr.mainPlayer.GetTakePassword();
                    if (!pwd || pwd.length == 0) {
                        // 打开设置密码界面
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_SHEZHI_MIMA);
                        return;
                    }
                    var data_1 = this._viewUI.list_tab.dataSource[this._viewUI.list_tab.selectedIndex];
                    if (data_1.bindtype == Web_operation_fields.BANK) {
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDYHK);
                    }
                    else if (data_1.bindtype == Web_operation_fields.ALIPAY) {
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDZFB);
                    }
                }
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
            QuKuanPage.prototype.onBtnTweenEnd = function (e, target) {
                var data;
                var money;
                switch (target) {
                    case this._viewUI.btn_help: //帮助
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_QUKUANSXDML);
                        break;
                    case this._viewUI.btn_clear: //清除
                        this._viewUI.hslider.value = 0;
                        this._inputMoney.clearInput();
                        this._viewUI.btn_clear.visible = false;
                        break;
                    case this._viewUI.btn_max: //最大
                        money = Math.floor(WebConfig.info.money);
                        if (money < 0)
                            money = 0;
                        this._viewUI.hslider.value = money;
                        this._inputMoney.setText_0(money.toString());
                        this._viewUI.btn_clear.visible = money > 0;
                        break;
                    case this._viewUI.btn_duihuan: //取出
                        money = parseFloat(this._inputMoney.input.text);
                        data = this._viewUI.list_tab.dataSource[this._viewUI.list_tab.selectedIndex];
                        if (data.bindtype == Web_operation_fields.BANK) {
                            if (!WebConfig.info.yinhangka) {
                                this._game.showTips("未绑定银行卡");
                                this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDYHK);
                                return;
                            }
                            if (money < this._bankMinDraw) {
                                this._game.showTips("小于最低兑换金额");
                                return;
                            }
                        }
                        else if (data.bindtype == Web_operation_fields.ALIPAY) {
                            if (!WebConfig.info.zhifubao) {
                                this._game.showTips("未绑定支付宝");
                                this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDZFB);
                                return;
                            }
                            if (money < this._alipayMinDraw) {
                                this._game.showTips("小于最低兑换金额");
                                return;
                            }
                        }
                        if (!this._inputMoney.input.text) {
                            this._game.showTips("请输入兑换金额");
                            return;
                        }
                        if (money > WebConfig.info.money) {
                            this._game.showTips("超出可取范围");
                            return;
                        }
                        if (money < data.minmoney) {
                            this._game.showTips("小于最小可取范围");
                            return;
                        }
                        if (this._inputMoney.input.text.indexOf(".") != -1) {
                            this._game.showTips("只能取出整数金额");
                            return;
                        }
                        var pwd = this._game.sceneObjectMgr.mainPlayer.GetTakePassword();
                        if (!pwd || pwd.length == 0) {
                            // 打开设置密码界面
                            this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_SHEZHI_MIMA);
                            return;
                        }
                        if (this._game.sceneObjectMgr.mainPlayer.GetDrawMoneyErrorTimes() >= 3) {
                            // 打开超过错误次数界面
                            this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_MIMA_TISHI);
                            return;
                        }
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_SHURU_MIMA, function (page) {
                            page.dataSource = [data.bindtype, money];
                        });
                        break;
                    case this._inputMoney:
                        this.openJianPan(this._inputMoney, this._viewUI, -20);
                        break;
                }
            };
            QuKuanPage.prototype.openJianPan = function (textUI, viewUI, centerY) {
                gamedatingnqp.DatingGame.ins.jianPanMgr.openJianPan(textUI, viewUI, centerY);
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
        }(ui.nqp.dating.component.QuKuanTUI));
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
        }(ui.nqp.dating.component.TabItemRender1UI));
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=QuKuanPage.js.map