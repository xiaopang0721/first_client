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
var gamedatingnqp;
(function (gamedatingnqp) {
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
                this._viewUI = this.createView("nqp.dating.YuEBaoUI");
                this.addChild(this._viewUI);
                this._viewUI.txt_totalGet.text = "";
                this._viewUI.txt_evGet.text = "";
                this._viewUI.txt_evRate.text = "";
                this._viewUI.txt_preGet.text = "-";
                this._viewUI.txt_zr_curMoney.text = "--";
                this._viewUI.txt_zc_curMoney.text = "--";
                this._viewUI.txt_zr_yuebao.text = "--";
                this._viewUI.txt_zc_yuebao.text = "--";
                this._viewUI.txt_zr_lixi.text = "";
                this._viewUI.txt_jilu_no.visible = false;
                this._viewUI.list_jilu.vScrollBarSkin = "";
                this._viewUI.list_jilu.scrollBar.elasticDistance = 100;
                this._viewUI.list_jilu.itemRender = this.createChildren("nqp.dating.component.YuEBaoTUI", BaoXianXiangT);
                this._viewUI.list_jilu.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_jilu.visible = false;
                this._viewUI.btn_tabs.selectHandler = new Handler(this, this.selectHandler);
                this._viewUI.btn_tabs.selectedIndex = YuEBaoPage.SUB_PAGE_XINXI;
                this.selectHandler(YuEBaoPage.SUB_PAGE_XINXI);
                if (!this._zrInputMoney) {
                    this._zrInputMoney = new page_1.MyTextInput();
                    this._zrInputMoney.x = this._viewUI.view_zr.x;
                    this._zrInputMoney.y = this._viewUI.view_zr.y;
                    this._zrInputMoney.width = this._viewUI.view_zr.width;
                    this._viewUI.view_zr.parent.addChild(this._zrInputMoney);
                    this._viewUI.view_zr.removeSelf();
                    this._viewUI.btn_zr_cancle.parent.addChild(this._viewUI.btn_zr_cancle);
                }
                if (!this._zcInputMoney) {
                    this._zcInputMoney = new page_1.MyTextInput();
                    this._zcInputMoney.x = this._viewUI.view_zc.x;
                    this._zcInputMoney.y = this._viewUI.view_zc.y;
                    this._zcInputMoney.width = this._viewUI.view_zc.width;
                    this._viewUI.view_zc.parent.addChild(this._zcInputMoney);
                    this._viewUI.view_zc.removeSelf();
                    this._viewUI.btn_zc_cancle.parent.addChild(this._viewUI.btn_zc_cancle);
                }
            };
            // 页面打开时执行函数
            YuEBaoPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                if (!this._clipMoney) {
                    this._clipMoney = new DatingClip(DatingClip.YUEBAO_FONT);
                    this._clipMoney.scaleX = this._clipMoney.scaleY = 0.6;
                    this._clipMoney.centerX = this._viewUI.clip_money.centerX;
                    this._clipMoney.y = 230;
                    this._viewUI.clip_money.parent.addChild(this._clipMoney);
                    this._viewUI.clip_money.removeSelf();
                }
                this._zrInputMoney.settext(this._game, TeaStyle.COLOR_INPUT_DEFAULT, "请输入金额…", TeaStyle.COLOR_WHITE, 24, 11, page_1.MyTextInput.TYPE_INPUT_NUMBER_WITH_POINT, false, Handler.create(this, this.onInputUpdate, ['zr'], false));
                this._zcInputMoney.settext(this._game, TeaStyle.COLOR_INPUT_DEFAULT, "请输入金额…", TeaStyle.COLOR_WHITE, 24, 11, page_1.MyTextInput.TYPE_INPUT_NUMBER_WITH_POINT, false, Handler.create(this, this.onInputUpdate, ['zc'], false));
                var lixi = EnumToString.getPointBackNum(this.getLixi(WebConfig.info.savaBoxMoney), 2);
                TextFieldU.setHtmlText(this._viewUI.txt_zr_lixi, "明天24:00可产生利息：" + HtmlFormat.addHtmlColor(lixi.toString(), lixi <= 0 ? TeaStyle.COLOR_WHITE : TeaStyle.COLOR_GREEN));
                this._viewUI.btn_help.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zc_cancle.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zr_cancle.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zc_max.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zr_max.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zc_zhuanchu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zr_zhuanru.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._zrInputMoney.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._zcInputMoney.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.bar_zr.value = 0;
                this._viewUI.bar_zr.tick = 0.01;
                this._viewUI.bar_zr.changeHandler = Handler.create(this, this.onZrBarChange, null, false);
                this._viewUI.bar_zc.value = 0;
                this._viewUI.bar_zc.tick = 0.01;
                this._viewUI.bar_zc.changeHandler = Handler.create(this, this.onZcBarChange, null, false);
                this._viewUI.btn_zr_cancle.visible = this._viewUI.btn_zc_cancle.visible = false;
                this._notStageClickUI = [this._zrInputMoney, this._zcInputMoney];
                this._game.network.call_get_savebox_list();
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                this.onUpdatePlayerInfo();
                this.onUpdateMoneyInfo();
            };
            YuEBaoPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_help.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_zc_cancle.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_zr_cancle.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_zc_max.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_zr_max.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_zc_zhuanchu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_zr_zhuanru.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._zrInputMoney.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._zrInputMoney.destroy();
                    this._zrInputMoney = null;
                    this._zcInputMoney.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._zcInputMoney.destroy();
                    this._zcInputMoney = null;
                    this._viewUI.list_jilu.dataSource = [];
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                }
                _super.prototype.close.call(this);
            };
            YuEBaoPage.prototype.getLixi = function (money) {
                var min = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, 'savebox_min');
                if (money <= min)
                    return 0;
                return money * parseFloat(FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, 'savebox_rate')) * 0.01;
            };
            YuEBaoPage.prototype.onInputUpdate = function (type) {
                var value = 0;
                if (type == 'zr') {
                    value = parseFloat(this._zrInputMoney.input.text) || 0;
                    this._viewUI.bar_zr.value = value;
                    this._viewUI.btn_zr_cancle.visible = value != 0;
                }
                else {
                    value = parseFloat(this._zcInputMoney.input.text) || 0;
                    this._viewUI.bar_zc.value = value;
                    this._viewUI.btn_zc_cancle.visible = value != 0;
                }
            };
            YuEBaoPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.dataSource["index"] = index;
                    cell.setData(this._game, cell.dataSource);
                }
            };
            YuEBaoPage.prototype.onZrBarChange = function (value) {
                value = value ? value : 0;
                if (value == 0) {
                    this._viewUI.bar_zr.value = value;
                    this._zrInputMoney.clearInput();
                }
                else {
                    this._zrInputMoney.setText_0(value.toString());
                }
                this._viewUI.btn_zr_cancle.visible = value != 0;
                var lixi = EnumToString.getPointBackNum(this.getLixi(WebConfig.info.savaBoxMoney + value), 2);
                TextFieldU.setHtmlText(this._viewUI.txt_zr_lixi, "明天24:00可产生利息：" + HtmlFormat.addHtmlColor(lixi.toString(), lixi <= 0 ? TeaStyle.COLOR_WHITE : TeaStyle.COLOR_GREEN));
            };
            YuEBaoPage.prototype.onZcBarChange = function (value) {
                value = value ? value : 0;
                if (value == 0) {
                    this._viewUI.bar_zc.value = value;
                    this._zcInputMoney.clearInput();
                }
                else {
                    this._zcInputMoney.setText_0(value.toString());
                }
                this._viewUI.btn_zc_cancle.visible = value != 0;
            };
            YuEBaoPage.prototype.selectHandler = function (index) {
                this._viewUI.box_xx.visible = index == YuEBaoPage.SUB_PAGE_XINXI;
                this._viewUI.box_zr.visible = index == YuEBaoPage.SUB_PAGE_ZHUANRU;
                this._viewUI.box_zc.visible = index == YuEBaoPage.SUB_PAGE_ZHUANCHU;
                this._viewUI.box_jilu.visible = index == YuEBaoPage.SUB_PAGE_JILU;
                if (index == YuEBaoPage.SUB_PAGE_ZHUANRU) {
                    var value = parseFloat(this._zrInputMoney.input.text) || 0;
                    var lixi = EnumToString.getPointBackNum(this.getLixi(WebConfig.info.savaBoxMoney + value), 2);
                    TextFieldU.setHtmlText(this._viewUI.txt_zr_lixi, "明天24:00可产生利息：" + HtmlFormat.addHtmlColor(lixi.toString(), lixi <= 0 ? TeaStyle.COLOR_WHITE : TeaStyle.COLOR_GREEN));
                }
            };
            YuEBaoPage.prototype.onUpdatePlayerInfo = function () {
                if (!WebConfig.info)
                    return;
                this._clipMoney.setText(WebConfig.info.savaBoxMoney, true);
                this._viewUI.bar_zr.max = WebConfig.info.money;
                this._viewUI.bar_zc.max = WebConfig.info.savaBoxMoney;
                this._viewUI.txt_zc_curMoney.text = this._viewUI.txt_zr_curMoney.text = WebConfig.info.money.toString(); // 携带金额
                this._viewUI.txt_zc_yuebao.text = this._viewUI.txt_zr_yuebao.text = WebConfig.info.savaBoxMoney.toString(); //余额宝
                this._viewUI.txt_evGet.text = EnumToString.getPointBackNum(this.getLixi(WebConfig.info.savaBoxMoney), 2).toString(); //每日收益	
            };
            YuEBaoPage.prototype.onUpdateMoneyInfo = function () {
                if (!WebConfig.info)
                    return;
                this._viewUI.txt_preGet.text = "昨日收益" + EnumToString.getPointBackNum(WebConfig.info.savebox_last_profit / 100, 2) + "元"; //昨日收益
                this._viewUI.txt_totalGet.text = EnumToString.getPointBackNum(WebConfig.info.savebox_total_profit / 100, 2).toString(); //累计收益
                this._viewUI.txt_evRate.text = EnumToString.getPointBackNum(parseFloat(FreeStyle.getData('baseconfig_c', 'savebox_rate')) * 0.01 * 10000, 2) + "‱"; //每日利率（万分比）			
            };
            YuEBaoPage.prototype.onSucessHandler = function (data) {
                if (data.reason == Operation_Fields.OPRATE_GAME_POWER_YUEBAO_OUT_SUCCESS || data.reason == Operation_Fields.OPRATE_GAME_POWER_YUEBAO_IN_SUCCESS) { //存入、取出				
                    this.onUpdateMoneyInfo();
                    this._zcInputMoney.clearInput();
                    this._zrInputMoney.clearInput();
                    this._viewUI.bar_zc.value = 0;
                    this._viewUI.bar_zr.value = 0;
                    this._game.network.call_get_savebox_list();
                    if (data.reason == Operation_Fields.OPRATE_GAME_POWER_YUEBAO_IN_SUCCESS)
                        this._game.showTips("您已成功转入" + (data.data / 100) + "元");
                    // else
                    // 	this._game.showTips("您已成功取出" + data.data + "元");
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_SAVEBOXLIST) { //存取列表
                    if (data && data.success == 0) {
                        if (data.msg) {
                            this._viewUI.list_jilu.dataSource = data.msg.list;
                        }
                        else {
                            this._viewUI.list_jilu.dataSource = [];
                        }
                        this._viewUI.list_jilu.visible = data.msg && data.msg.list && data.msg.list.length > 0;
                        this._viewUI.txt_jilu_no.visible = !this._viewUI.list_jilu.visible;
                    }
                }
            };
            YuEBaoPage.prototype.onBtnTweenEnd = function (e, target) {
                var money;
                switch (target) {
                    case this._viewUI.btn_help:
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_YUEBAO_HELP);
                        break;
                    case this._viewUI.btn_zc_cancle:
                        this._zcInputMoney.clearInput();
                        this._viewUI.bar_zc.value = 0;
                        break;
                    case this._viewUI.btn_zr_cancle:
                        this._zrInputMoney.clearInput();
                        this._viewUI.bar_zr.value = 0;
                        break;
                    case this._viewUI.btn_zc_max:
                        this._zcInputMoney.setText_0(WebConfig.info.savaBoxMoney.toString());
                        this._viewUI.bar_zc.value = WebConfig.info.savaBoxMoney;
                        this._viewUI.btn_zc_cancle.visible = WebConfig.info.money > 0;
                        break;
                    case this._viewUI.btn_zr_max:
                        this._zrInputMoney.setText_0(WebConfig.info.money.toString());
                        this._viewUI.bar_zr.value = WebConfig.info.money;
                        this._viewUI.btn_zr_cancle.visible = WebConfig.info.money > 0;
                        break;
                    case this._viewUI.btn_zc_zhuanchu: // 转出
                        money = parseFloat(this._zcInputMoney.input.text);
                        if (!this._zcInputMoney.input.text || !money) {
                            this._game.showTips("金额输入错误");
                            return;
                        }
                        if (money > WebConfig.info.savaBoxMoney) {
                            this._game.showTips("余额不足");
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
                            page.dataSource = [0, money * 100];
                        });
                        break;
                    case this._viewUI.btn_zr_zhuanru: // 转入
                        money = parseFloat(this._zrInputMoney.input.text);
                        if (!this._zrInputMoney.input.text || !money) {
                            this._game.showTips("金额输入错误");
                            return;
                        }
                        if (money > WebConfig.info.money) {
                            this._game.showTips("余额不足");
                            return;
                        }
                        this._game.network.call_save_yuebao(money * 100);
                        break;
                    case this._zrInputMoney:
                    case this._zcInputMoney:
                        gamedatingnqp.DatingGame.ins.jianPanMgr.openJianPan(target, this._viewUI, -60);
                        break;
                }
            };
            YuEBaoPage.prototype.onMouseClick = function (e) {
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
            YuEBaoPage.SUB_PAGE_XINXI = 0; // 信息
            YuEBaoPage.SUB_PAGE_ZHUANRU = 1; // 转入
            YuEBaoPage.SUB_PAGE_ZHUANCHU = 2; // 转出
            YuEBaoPage.SUB_PAGE_JILU = 3; // 记录
            return YuEBaoPage;
        }(game.gui.base.Page));
        page_1.YuEBaoPage = YuEBaoPage;
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
                var color = data.money < 0 ? TeaStyle.COLOR_GREEN : TeaStyle.COLOR_RED;
                TextFieldU.setHtmlText(this.txt_money, HtmlFormat.addHtmlColor((-data.money).toString(), color));
                this.txt_yue.text = data.new_savebox_money;
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
        }(ui.nqp.dating.component.YuEBaoTUI));
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=YuEBaoPage.js.map