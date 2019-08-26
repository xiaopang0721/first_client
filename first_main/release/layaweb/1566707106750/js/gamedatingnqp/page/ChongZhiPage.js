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
* name 充值
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page) {
        var ChongZhiPage = /** @class */ (function (_super) {
            __extends(ChongZhiPage, _super);
            function ChongZhiPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._chongzhitype = ["ZFBSM", "ZFBSM", "WXH5", "WXSM", "QQH5", "QQSM", "JDSM", "YLSM", "VIPPay", "YLSM", "ZFBSM", "WXSM", "KJCZ", "YSF"];
                _this._asset = [
                    DatingPath.atlas_dating_ui + "chongzhi.atlas",
                ];
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                _this._delta = MathU.randomRange(3000, 10000);
                return _this;
            }
            // 页面初始化函数
            ChongZhiPage.prototype.init = function () {
                this._viewUI = this.createView("dating.ChongZhiUI");
                this.addChild(this._viewUI);
                this._viewUI.list_record.vScrollBarSkin = "";
                this._viewUI.list_record.scrollBar.elasticDistance = 100;
                this._viewUI.list_record.itemRender = this.createChildren("dating.component.ChongZhiT1UI", ChongZhiT);
                this._viewUI.list_record.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_record.visible = false;
                this._viewUI.list_tab.vScrollBarSkin = "";
                this._viewUI.list_tab.scrollBar.elasticDistance = 100;
                this._viewUI.list_tab.itemRender = this.createChildren("dating.component.TabItemRender2UI", TabItemRender);
                this._viewUI.list_tab.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_tab.selectHandler = new Handler(this, this.selectHandler);
                this._viewUI.list_vip.vScrollBarSkin = "";
                this._viewUI.list_vip.scrollBar.elasticDistance = 100;
                this._viewUI.list_vip.itemRender = this.createChildren("dating.component.VipItemRenderUI", VipItemRender);
                this._viewUI.list_vip.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_vip.visible = false;
                this._viewUI.list_qudao.hScrollBarSkin = "";
                this._viewUI.list_qudao.scrollBar.elasticDistance = 100;
                this._viewUI.list_qudao.itemRender = this.createChildren("dating.component.ChongZhi_dsfUI", VipItemRender2);
                this._viewUI.list_qudao.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_qudao.selectHandler = new Handler(this, this.qudaoselectHandler);
                this._viewUI.list_qudao.visible = false;
                this._viewUI.list_yh.hScrollBarSkin = "";
                this._viewUI.list_yh.scrollBar.elasticDistance = 100;
                this._viewUI.list_yh.itemRender = this.createChildren("dating.component.ChongZhi_skUI", BankerItemRender);
                this._viewUI.list_yh.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_yh.selectHandler = new Handler(this, this.yhSelectHandler);
                this._viewUI.list_yh.visible = false;
                this._viewUI.list_sm.hScrollBarSkin = "";
                this._viewUI.list_sm.scrollBar.elasticDistance = 100;
                this._viewUI.list_sm.itemRender = this.createChildren("dating.component.ChongZhi_skUI", SMItemRender);
                this._viewUI.list_sm.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_sm.selectHandler = new Handler(this, this.smSelectHandler);
                this._viewUI.list_sm.visible = false;
                this._viewUI.list_money.itemRender = this.createChildren("dating.component.MoneyItemRenderUI", MoneyItemRender);
                this._viewUI.list_money.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_money.mouseHandler = new Handler(this, this.moneyselectHandler);
                // this._viewUI.list_chongzhi.itemRender = this.createChildren("dating.component.ChongZhi_TUI", ChongZhiJiaRender);
                // this._viewUI.list_chongzhi.visible = false;
                this._game.datingGame.chongZhiMgr.on(ChongZhiMgr.EVENT_CHANGE_RANDOM_NAME, this, this.onUpdateRandomName);
                this._game.datingGame.chongZhiMgr.on(ChongZhiMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                this._paychannel = [{ name: "充值记录" }];
                this._viewUI.list_tab.dataSource = this._paychannel;
                this.onUpdatePlayerInfo();
                this.onUpdateRandomName();
            };
            ChongZhiPage.prototype.moneyselectHandler = function (e, index) {
                var _this = this;
                if (e.type != LEvent.CLICK)
                    return;
                this._game.uiRoot.btnTween(e.currentTarget, this, function () {
                    _this._viewUI.txt_input.text = _this._viewUI.list_money.dataSource[index];
                });
            };
            ChongZhiPage.prototype.qudaoselectHandler = function () {
                this._qudao = this._viewUI.list_qudao.dataSource[this._viewUI.list_qudao.selectedIndex];
                if (this._qudao.quickmoney) {
                    var arr = this._qudao.quickmoney ? this._qudao.quickmoney.split(",") : [];
                    arr.length = 8;
                    this._viewUI.list_money.dataSource = arr;
                    this._viewUI.txt_input.text = "";
                }
            };
            ChongZhiPage.prototype.yhSelectHandler = function () {
                var data = this._viewUI.list_yh.dataSource[this._viewUI.list_yh.selectedIndex];
                this._viewUI.txt_yh0.text = data.remittype;
                this._viewUI.txt_yh1.text = data.remitname;
                this._viewUI.txt_yh2.text = data.remitnum;
                this._viewUI.txt_yh3.text = data.remitaddr;
                this._viewUI.txt_yh4.text = data.min_limit > 0 ? StringU.substitute("银行卡最低{0}元起充，低于{1}元充值不受理", data.min_limit, data.min_limit) : '';
                this._viewUI.ingput_yh0.text = "";
                this._viewUI.ingput_yh1.text = "";
            };
            ChongZhiPage.prototype.smSelectHandler = function () {
                var data = this._viewUI.list_sm.dataSource[this._viewUI.list_sm.selectedIndex];
                if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_ZFBHK) { //支付宝
                    this._viewUI.txt_sm1.text = data.alipaynum;
                }
                else if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_YSFSM) { //云闪付
                    this._viewUI.txt_sm1.text = data.ysfpaynum;
                }
                else if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_WXHK) { //微信
                    this._viewUI.txt_sm1.text = data.wxnum;
                }
                this._viewUI.txt_sm2.text = "";
                this._viewUI.txt_sm3.text = "";
            };
            ChongZhiPage.prototype.onUpdateRandomName = function () {
                // this._viewUI.list_chongzhi.dataSource = this._game.datingGame.chongZhiMgr.getRandomNameList();
                // this._viewUI.list_chongzhi.visible = true;
            };
            //按钮点击
            ChongZhiPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_kj:
                        this._data.list[0].kc_url && WebConfig.openUrl(this._data.list[0].kc_url);
                        break;
                    case this._viewUI.btn_clear:
                        this._viewUI.txt_input.text = "";
                        break;
                    case this._viewUI.btn_save_ewm:
                        if (this._viewUI.img_wx_ewm.skin) {
                            WebConfig.saveHttpImage(Laya.URL.formatURL(this._viewUI.img_wx_ewm.skin));
                        }
                        break;
                    case this._viewUI.btn_open_wx:
                        if (!this._data)
                            return;
                        if (this._data.type == Web_operation_fields.GAME_PAYIMG_TYPE_ZFBHK) {
                            this._game.showTips("打开支付宝");
                        }
                        else if (this._data.type == Web_operation_fields.GAME_PAYIMG_TYPE_WXHK) {
                            this._game.wxOpen();
                        }
                        break;
                    case this._viewUI.btn_sm_finish: //扫码提交充值
                        if (!this._viewUI.txt_sm2.text) {
                            this._game.showTips("金额信息错误");
                            return;
                        }
                        if (this._viewUI.txt_sm2.text.indexOf(".") != -1 && this._viewUI.txt_sm2.text.length - this._viewUI.txt_sm2.text.indexOf(".") > 3) {
                            this._game.showTips("金额小数点不能超过两位");
                            return;
                        }
                        if (!this._viewUI.txt_sm3.text) {
                            this._game.showTips("请输入存款信息");
                            return;
                        }
                        // let sm_text = this._data.type == 12 ? this._viewUI.txt_wxsm4.text : this._data.type == 11 ? this._viewUI.txt_zfbsm4.text : this._viewUI.txt_ysfsm4.text;
                        var limit_sm = this._viewUI.txt_sm4.text.replace(/[^0-9]/ig, "");
                        limit_sm = limit_sm.substr(0, limit_sm.length / 2);
                        if (this._data && limit_sm && parseInt(this._viewUI.txt_sm2.text) < parseInt(limit_sm)) {
                            this._game.showTips(StringU.substitute("充值金额不能小于{0}元", limit_sm));
                            return;
                        }
                        var smDataStr = this._viewUI.txt_sm1.text + "," + this._viewUI.txt_sm3.text;
                        this._game.network.call_recharge_confirm(WebConfig.account, parseFloat(this._viewUI.txt_sm2.text) * 100, this._data.type, smDataStr);
                        break;
                    case this._viewUI.btn_yh_tjcz: //银行卡提交充值
                        if (!this._viewUI.ingput_yh0.text) {
                            this._game.showTips("金额信息错误");
                            return;
                        }
                        if (this._viewUI.ingput_yh0.text.indexOf(".") != -1 && this._viewUI.ingput_yh0.text.length - this._viewUI.ingput_yh0.text.indexOf(".") > 3) {
                            this._game.showTips("金额小数点不能超过两位");
                            return;
                        }
                        if (!this._viewUI.ingput_yh1.text) {
                            this._game.showTips("请输入存款信息");
                            return;
                        }
                        var limit_yh = this._viewUI.txt_yh4.text.replace(/[^0-9]/ig, "");
                        limit_yh = limit_yh.substr(0, limit_yh.length / 2);
                        if (this._data && limit_yh && parseInt(this._viewUI.ingput_yh0.text) < parseInt(limit_yh)) {
                            this._game.showTips(StringU.substitute("充值金额不能小于{0}元", limit_yh));
                            return;
                        }
                        var yhDataStr = this._viewUI.txt_yh2.text + "," + this._viewUI.ingput_yh1.text;
                        this._game.network.call_recharge_confirm(WebConfig.account, parseFloat(this._viewUI.ingput_yh0.text) * 100, this._data.type, yhDataStr);
                        break;
                    case this._viewUI.btn_pay: //支付
                        if (!this._qudao) {
                            this._game.showTips("无效操作");
                            return;
                        }
                        if (!this._viewUI.txt_input.text || !parseInt(this._viewUI.txt_input.text)) {
                            this._game.showTips("金额输入错误");
                            return;
                        }
                        if (parseInt(this._viewUI.txt_input.text) < this._qudao.minmoney) {
                            this._game.showTips(StringU.substitute("充值金额不低于{0}元", this._qudao.minmoney));
                            return;
                        }
                        if (parseInt(this._viewUI.txt_input.text) > this._qudao.maxmoney) {
                            this._game.showTips(StringU.substitute("充值金额不超过{0}元", this._qudao.maxmoney));
                            return;
                        }
                        // if (!WebConfig.info.username) {
                        // 	this._game.showTips("请先绑定")
                        // 	this._game.uiRoot.general.open(PageDef.PAGE_BINDACCOUNT)
                        // 	return;
                        // }
                        this._game.network.call_goto_pay(this._viewUI.txt_input.text, this._qudao.id, this._qudao.paytype);
                        break;
                    case this._viewUI.btn_yh_copy0:
                        WebConfig.copyTxt(this._viewUI.txt_yh0.text);
                        break;
                    case this._viewUI.btn_yh_copy1:
                        WebConfig.copyTxt(this._viewUI.txt_yh1.text);
                        break;
                    case this._viewUI.btn_yh_copy2:
                        WebConfig.copyTxt(this._viewUI.txt_yh2.text);
                        break;
                    case this._viewUI.btn_yh_copy3:
                        WebConfig.copyTxt(this._viewUI.txt_yh3.text);
                        break;
                    // case this._viewUI.btn_sm_copy0:
                    // 	WebConfig.copyTxt(this._viewUI.txt_sm0.text);
                    // 	break;
                    case this._viewUI.btn_sm_copy1:
                        WebConfig.copyTxt(this._viewUI.txt_sm1.text);
                        break;
                    case this._viewUI.btn_back:
                        this._viewUI.box_yh_fk.visible = false;
                        this._viewUI.box_yh_sk.visible = true;
                        break;
                    case this._viewUI.btn_next_yh:
                        this._viewUI.box_yh_fk.visible = true;
                        this._viewUI.box_yh_sk.visible = false;
                        break;
                    case this._viewUI.btn_back_sm:
                        this._viewUI.box_smfk.visible = false;
                        this._viewUI.box_smsk.visible = true;
                        break;
                    case this._viewUI.btn_next:
                        this._viewUI.box_smfk.visible = true;
                        this._viewUI.box_smsk.visible = false;
                        break;
                }
            };
            /**
              * 帧间隔心跳
              */
            ChongZhiPage.prototype.deltaUpdate = function () {
                this._game.network.call_get_ramdon_name(13, this._delta * 0.001);
                this._delta = MathU.randomRange(3000, 10000);
            };
            // 页面打开时执行函数
            ChongZhiPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_sm_finish.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_open_wx.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_save_ewm.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_yh_tjcz.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_kj.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_clear.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_pay.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back_sm.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_next_yh.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_next.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_yh_copy0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_yh_copy1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_yh_copy2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_yh_copy3.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_sm_copy1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                // this._viewUI.btn_sm_copy0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this._game.network.call_get_paychannel("apppay");
            };
            ChongZhiPage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_PAYCHANNEL) {
                    if (data && data.success == 0) {
                        this._paychannel = data.msg.list ? data.msg.list.concat(this._paychannel) : this._paychannel;
                        this._bankRate = data.msg.bank_rate;
                        this._alipayRate = data.msg.alipay_rate;
                        this._wxRate = data.msg.wx_rate;
                        this._ysfRate = data.msg.ysf_rate;
                        this.onUpdatePlayerInfo();
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_PAY) {
                    if (data && data.success == 0) {
                        data.msg && WebConfig.openUrl(data.msg);
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_REMIT_NEW) {
                    if (data && data.success == 0) {
                        this._game.showTips("转账成功!");
                    }
                }
            };
            // private onChange() {
            // 	this._viewUI.img_next.visible = this._viewUI.list_tab.scrollBar.value < this._viewUI.list_tab.scrollBar.max;
            // 	this._viewUI.img_prev.visible = this._viewUI.list_tab.scrollBar.value > this._viewUI.list_tab.scrollBar.min;
            // }
            ChongZhiPage.prototype.onUpdatePlayerInfo = function () {
                if (!WebConfig.info)
                    return;
                for (var i = 0; i < this._paychannel.length; i++) {
                    if (this._paychannel[i].type == Web_operation_fields.GAME_PAYIMG_TYPE_BANKHK) {
                        this._paychannel[i].rate = this._bankRate;
                    }
                    else if (this._paychannel[i].type == Web_operation_fields.GAME_PAYIMG_TYPE_ZFBHK) {
                        this._paychannel[i].rate = this._alipayRate;
                    }
                    else if (this._paychannel[i].type == Web_operation_fields.GAME_PAYIMG_TYPE_WXHK) {
                        this._paychannel[i].rate = this._wxRate;
                    }
                    else if (this._paychannel[i].type == Web_operation_fields.GAME_PAYIMG_TYPE_YSFSM) {
                        this._paychannel[i].rate = this._ysfRate;
                    }
                }
                this._viewUI.list_tab.dataSource = this._paychannel;
                this.selectHandler();
            };
            //tab选中
            ChongZhiPage.prototype.selectHandler = function () {
                var data = this._data = this._viewUI.list_tab.dataSource[this._viewUI.list_tab.selectedIndex];
                if (!data) {
                    this._game.showTips("无效操作");
                    return;
                }
                this._viewUI.box_kj.visible = data.type == Web_operation_fields.GAME_PAYIMG_TYPE_FAST;
                this._viewUI.box_yh.visible = data.type == Web_operation_fields.GAME_PAYIMG_TYPE_BANKHK;
                this._viewUI.box_sm.visible = data.type == Web_operation_fields.GAME_PAYIMG_TYPE_WXHK || data.type == Web_operation_fields.GAME_PAYIMG_TYPE_ZFBHK || data.type == Web_operation_fields.GAME_PAYIMG_TYPE_YSFSM;
                this._viewUI.box_zhuanzhang.visible = !this._viewUI.box_yh.visible && !this._viewUI.box_sm.visible && !this._viewUI.box_kj.visible;
                if (data.name == "充值记录") {
                    this._game.datingGame.chongZhiMgr.clearDataInfo();
                    this._viewUI.box_cz.visible = false;
                    this._viewUI.box_record.visible = true;
                    this._viewUI.list_record.dataSource = null;
                    this.onUpdateDataInfo();
                }
                else {
                    if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_BANKHK) {
                        this._viewUI.box_yh_fk.visible = false;
                        this._viewUI.box_yh_sk.visible = true;
                        this._viewUI.list_yh.visible = true;
                        this._viewUI.list_yh.dataSource = data && data.list ? data.list : [];
                        this._viewUI.list_yh.selectedIndex = 0;
                        this.yhSelectHandler();
                        this._viewUI.txt_yh0.text = this._viewUI.list_yh.dataSource[0].remittype;
                        this._viewUI.txt_yh1.text = this._viewUI.list_yh.dataSource[0].remitname;
                        this._viewUI.txt_yh2.text = this._viewUI.list_yh.dataSource[0].remitnum;
                        this._viewUI.txt_yh3.text = this._viewUI.list_yh.dataSource[0].remitaddr;
                        this._viewUI.txt_yh4.text = this._viewUI.list_yh.dataSource[0].min_limit > 0 ? StringU.substitute("银行卡最低{0}元起充，低于{1}元充值不受理", this._viewUI.list_yh.dataSource[0].min_limit, this._viewUI.list_yh.dataSource[0].min_limit) : '';
                        this._viewUI.ingput_yh0.text = "";
                        this._viewUI.ingput_yh1.text = "";
                    }
                    else if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_ZFBHK) {
                        this._viewUI.box_smfk.visible = false;
                        this._viewUI.box_smsk.visible = true;
                        this._viewUI.list_sm.visible = true;
                        this._viewUI.list_sm.dataSource = data && data.list ? data.list : [];
                        this._viewUI.list_tab.scrollBar.value = 0;
                        this._viewUI.list_sm.selectedIndex = 0;
                        this.smSelectHandler();
                        if (data.list && data.list.length) {
                            this._viewUI.txt_sm1.text = data.list[0].alipaynum;
                            this._viewUI.img_wx_ewm.skin = data.list[0].alipay_ewm_url;
                            this._viewUI.txt_sm4.text = data.list[0].min_limit > 0 ? StringU.substitute("支付宝最低{0}元起充，低于{1}元充值不受理", data.list[0].min_limit, data.list[0].min_limit) : '';
                        }
                        this._viewUI.btn_open_wx.visible = false;
                        this._viewUI.img_sm_zh.skin = "datingnqp_ui/chongzhi/tu_zfbzh.png";
                    }
                    else if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_WXHK) {
                        this._viewUI.box_smfk.visible = false;
                        this._viewUI.box_smsk.visible = true;
                        this._viewUI.list_sm.visible = true;
                        this._viewUI.list_sm.dataSource = data && data.list ? data.list : [];
                        this._viewUI.list_tab.scrollBar.value = 0;
                        this._viewUI.list_sm.selectedIndex = 0;
                        this.smSelectHandler();
                        if (data.list && data.list.length) {
                            this._viewUI.txt_sm1.text = data.list[0].wxnum;
                            this._viewUI.img_wx_ewm.skin = data.list[0].wx_ewm_url;
                            this._viewUI.txt_sm4.text = data.list[0].min_limit > 0 ? StringU.substitute("微信最低{0}元起充，低于{1}元充值不受理", data.list[0].min_limit, data.list[0].min_limit) : '';
                        }
                        this._viewUI.btn_open_wx.visible = true;
                        this._viewUI.img_sm_zh.skin = "datingnqp_ui/chongzhi/tu_wxzh.png";
                    }
                    else if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_YSFSM) {
                        this._viewUI.box_smfk.visible = false;
                        this._viewUI.box_smsk.visible = true;
                        this._viewUI.list_sm.visible = true;
                        this._viewUI.list_sm.dataSource = data && data.list ? data.list : [];
                        this._viewUI.list_tab.scrollBar.value = 0;
                        this._viewUI.list_sm.selectedIndex = 0;
                        this.smSelectHandler();
                        if (data.list && data.list.length) {
                            this._viewUI.txt_sm1.text = data.list[0].ysfpaynum;
                            this._viewUI.img_wx_ewm.skin = data.list[0].ysfpay_ewm_url;
                            this._viewUI.txt_sm4.text = data.list[0].min_limit > 0 ? StringU.substitute("云闪付最低{0}元起充，低于{1}元充值不受理", data.list[0].min_limit, data.list[0].min_limit) : '';
                        }
                        this._viewUI.btn_open_wx.visible = false;
                        this._viewUI.img_sm_zh.skin = "datingnqp_ui/chongzhi/tu_ysfzh.png";
                    }
                    else {
                        var isVip = data.type == Web_operation_fields.GAME_PAYIMG_TYPE_VIP;
                        this._viewUI.box_vip.visible = isVip;
                        this._viewUI.box_qudao.visible = !isVip;
                        this._viewUI.box_cz.visible = true;
                        this._viewUI.box_record.visible = false;
                        if (isVip) {
                            this._viewUI.list_vip.dataSource = data.list;
                            this._viewUI.list_vip.visible = data && data.list && data.list.length > 0;
                        }
                        else {
                            this._viewUI.list_qudao.dataSource = data && data.list ? data.list : [];
                            this._viewUI.list_qudao.visible = data && data.list && data.list.length;
                            this._viewUI.list_qudao.scrollBar.value = 0;
                            if (data.list && data.list.length) {
                                var arr = data.list[0].quickmoney ? data.list[0].quickmoney.split(",") : [];
                                arr.length = 8;
                                this._viewUI.list_money.dataSource = arr;
                            }
                        }
                    }
                }
            };
            ChongZhiPage.prototype.onUpdateDataInfo = function (data) {
                this._dataInfo = [];
                var value = this._game.datingGame.chongZhiMgr.dataInfo;
                var count = 0;
                for (var key in value) {
                    if (value[key] && value[key].length > 0)
                        count++;
                }
                this._viewUI.txt_no.visible = !count;
                this._viewUI.list_record.visible = count > 0;
                if (!count) {
                    if (!data)
                        this._game.datingGame.chongZhiMgr.getData(1);
                    return;
                }
                for (var key in value) {
                    if (value.hasOwnProperty(key)) {
                        var cc = value[key];
                        if (cc) {
                            for (var index = 0; index < cc.length; index++) {
                                var aa = cc[index];
                                aa["rank"] = index + parseInt(key) * ChongZhiMgr.PAGE_MAX - ChongZhiMgr.PAGE_MAX;
                            }
                            this._dataInfo = this._dataInfo.concat(cc);
                        }
                    }
                }
                this._viewUI.list_record.dataSource = this._dataInfo;
            };
            ChongZhiPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.name = "item" + index;
                    cell.setData(this._game, cell.dataSource, index, this._viewUI);
                }
            };
            ChongZhiPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.datingGame.chongZhiMgr.off(ChongZhiMgr.EVENT_CHANGE_RANDOM_NAME, this, this.onUpdateRandomName);
                    this._game.datingGame.chongZhiMgr.off(ChongZhiMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                    this._game.datingGame.chongZhiMgr.clearDataInfo();
                }
                _super.prototype.close.call(this);
            };
            return ChongZhiPage;
        }(game.gui.base.Page));
        page.ChongZhiPage = ChongZhiPage;
        var TabItemRender = /** @class */ (function (_super) {
            __extends(TabItemRender, _super);
            function TabItemRender() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._chongzhitype = ["btn_zfbcz", "btn_zfb", "btn_wx3", "btn_wx2", "btn_qq", "btn_qq", "btn_jd", "btn_yl", "btn_vip", "btn_yhk", "btn_zfbcz", "btn_wx2", "btn_kj", "btn_ysf2", "btn_ysf"];
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
            TabItemRender.prototype.setData = function (game, data) {
                var icon = this._chongzhitype[data.type - 1];
                if (icon) {
                    this.img_icon.skin = StringU.substitute(DatingPath.ui_dating + "chongzhi/{0}.png", icon);
                    this.img_icon.visible = true;
                }
                else {
                    this.img_icon.visible = false;
                }
                if (data.name == "充值记录") {
                    this.img_icon.skin = StringU.substitute(DatingPath.ui_dating + "chongzhi/btn_czjl.png", icon);
                    this.img_icon.visible = true;
                }
                this.box_rate.visible = false;
                this.txt_rate.text = "+" + data.rate + "%";
                this.box_rate.visible = data.rate > 0;
                this._posY = 7;
                Laya.Tween.clearAll(this.box_rate);
                if (this.box_rate.visible) {
                    this.tweenMove(true);
                }
            };
            TabItemRender.prototype.tweenMove = function (isUp) {
                Laya.Tween.to(this.box_rate, { y: isUp ? this._posY - 5 : this._posY + 5 }, 1200, Laya.Ease.linearIn, Handler.create(this, this.tweenMove, [!isUp]));
            };
            TabItemRender.prototype.destroy = function () {
                Laya.Tween.clearAll(this.box_rate);
            };
            return TabItemRender;
        }(ui.nqp.dating.component.TabItemRender2UI));
        var ChongZhiT = /** @class */ (function (_super) {
            __extends(ChongZhiT, _super);
            function ChongZhiT() {
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
            ChongZhiT.prototype.setData = function (game, data) {
                this.dataSource = data;
                this.txt_time.text = Sync.getTimeStr(data.create_time * 1000);
                this.txt_zt.text = data.status;
                if (data.statustype == 1) {
                    this.txt_zt.color = TeaStyle.COLOR_GREEN;
                }
                else if (data.statustype == 2) {
                    this.txt_zt.color = TeaStyle.COLOR_RED;
                }
                else {
                    this.txt_zt.color = TeaStyle.COLOR_YELLOW;
                }
                this.txt_money.text = data.money;
                this.txt_type.text = data.recharge_type;
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
            return ChongZhiT;
        }(ui.nqp.dating.component.ChongZhiT1UI));
        var ChongZhiJiaRender = /** @class */ (function (_super) {
            __extends(ChongZhiJiaRender, _super);
            function ChongZhiJiaRender() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(ChongZhiJiaRender.prototype, "dataSource", {
                set: function (v) {
                    if (v && v.name && v.money) {
                        this.txt_name.text = v.name;
                        this.txt_money.text = v.money + "元";
                        this.visible = true;
                    }
                    else {
                        this.visible = false;
                    }
                },
                enumerable: true,
                configurable: true
            });
            return ChongZhiJiaRender;
        }(ui.nqp.dating.component.ChongZhi_TUI));
        var VipItemRender = /** @class */ (function (_super) {
            __extends(VipItemRender, _super);
            function VipItemRender() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            VipItemRender.prototype.setData = function (game, data) {
                this._data = data;
                this._game = game;
                this.txt_name.text = data.remitname;
                this.txt_num.text = data.remitnum;
                this.img_type.skin = StringU.substitute(DatingPath.ui_dating + "chongzhi/{0}.png", data.apptype == "WX" ? "WXSM" : data.apptype == "QQ" ? "QQH5" : data.apptype);
                this.btn_go.on(LEvent.CLICK, this, this.onMouseHandle, [data.apptype, data.remitnum]);
            };
            VipItemRender.prototype.onMouseHandle = function (apptype, remitnum, e) {
                var _this = this;
                this._game.uiRoot.btnTween(e.currentTarget, this, function () {
                    WebConfig.copyTxt(_this._data.remitnum);
                    if (apptype == "WX") {
                        _this._game.showTips("复制成功");
                        _this._game.datingGame.wxOpen();
                    }
                    else if (apptype == "QQ") {
                        _this._game.datingGame.qqOpen(parseInt(remitnum));
                    }
                    else {
                        WebConfig.copyTxt(remitnum.toString());
                        _this._game.showTips("复制成功");
                    }
                });
            };
            return VipItemRender;
        }(ui.nqp.dating.component.VipItemRenderUI));
        var VipItemRender2 = /** @class */ (function (_super) {
            __extends(VipItemRender2, _super);
            function VipItemRender2() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            VipItemRender2.prototype.setData = function (game, data, index, viewUI) {
                if (!data) {
                    this.visible = false;
                    return;
                }
                this.visible = true;
                this._data = data;
                this._game = game;
                this._data.index = index;
                this._viewUI = viewUI;
                this.txt_name.text = StringU.substitute("{0} {1}", data.name, index + 1);
                this.txt_money.text = StringU.substitute("单笔:{0}元 - {1}元", data.minmoney, data.maxmoney);
            };
            return VipItemRender2;
        }(ui.nqp.dating.component.ChongZhi_dsfUI));
        var BankerItemRender = /** @class */ (function (_super) {
            __extends(BankerItemRender, _super);
            function BankerItemRender() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BankerItemRender.prototype.setData = function (game, data, index, viewUI) {
                if (!data) {
                    this.visible = false;
                    return;
                }
                this.visible = true;
                this._data = data;
                this._game = game;
                this._data.index = index;
                this._viewUI = viewUI;
                this.txt_name.text = "收款账号" + (index + 1);
            };
            return BankerItemRender;
        }(ui.nqp.dating.component.ChongZhi_skUI));
        var SMItemRender = /** @class */ (function (_super) {
            __extends(SMItemRender, _super);
            function SMItemRender() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SMItemRender.prototype.setData = function (game, data, index, viewUI) {
                if (!data) {
                    this.visible = false;
                    return;
                }
                this.visible = true;
                this._data = data;
                this._game = game;
                this._data.index = index;
                this._viewUI = viewUI;
                this.txt_name.text = data.title;
            };
            return SMItemRender;
        }(ui.nqp.dating.component.ChongZhi_skUI));
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
                this.txt_num.text = data;
            };
            return MoneyItemRender;
        }(ui.nqp.dating.component.MoneyItemRenderUI));
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=ChongZhiPage.js.map