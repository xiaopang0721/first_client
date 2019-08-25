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
* name 主界面
*/
var gamedating;
(function (gamedating) {
    var page;
    (function (page_1) {
        var HudMainPage = /** @class */ (function (_super) {
            __extends(HudMainPage, _super);
            function HudMainPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._tabList = [page_1.DatingPageDef.TYPE_HOT, page_1.DatingPageDef.TYPE_CHESS, page_1.DatingPageDef.TYPE_BAIREN, page_1.DatingPageDef.TYPE_GAME, page_1.DatingPageDef.TYPE_CARD];
                _this._qifuNameStr = ["xs", "px", "gsy", "gg", "cs", "tdg"];
                _this._box_btn_top = {};
                _this._box_btn_bottom = {};
                _this._asset = [
                    DatingPath.atlas_dating_ui + "dating.atlas",
                    DatingPath.atlas_dating_ui + "touxiang.atlas",
                    DatingPath.atlas_dating_ui + "datingrk.atlas",
                    DatingPath.sk_dating + "DZ_baijiale.png",
                    DatingPath.sk_dating + "DZ_bairendezhou.png",
                    DatingPath.sk_dating + "DZ_benchibaoma.png",
                    DatingPath.sk_dating + "DZ_blackjack.png",
                    DatingPath.sk_dating + "DZ_dezhou.png",
                    DatingPath.sk_dating + "DZ_brniuniu.png",
                    DatingPath.sk_dating + "DZ_buyu.png",
                    DatingPath.sk_dating + "DZ_ddz.png",
                    DatingPath.sk_dating + "DZ_ebgang.png",
                    DatingPath.sk_dating + "DZ_honghei.png",
                    DatingPath.sk_dating + "DZ_longhu.png",
                    DatingPath.sk_dating + "DZ_niuniu.png",
                    DatingPath.sk_dating + "DZ_paijiu.png",
                    DatingPath.sk_dating + "DZ_toubao.png",
                    DatingPath.sk_dating + "DZ_sangong.png",
                    DatingPath.sk_dating + "DZ_shisanshui.png",
                    DatingPath.sk_dating + "DZ_shuiguoji.png",
                    DatingPath.sk_dating + "DZ_tbniuniu.png",
                    DatingPath.sk_dating + "DZ_zjh.png",
                    DatingPath.sk_dating + "DZ_paodekuai.png",
                    DatingPath.sk_dating + "DZ_zoo.png",
                    DatingPath.sk_dating + "DZ_saolei.png",
                    DatingPath.sk_dating + "DZ_caishendao.png",
                    DatingPath.sk_dating + "DZ_majiang.png",
                ];
                _this._isNeedDuang = false;
                return _this;
            }
            // 页面初始化函数
            HudMainPage.prototype.init = function () {
                this._viewUI = this.createView("dating.DaTingUI");
                this.addChild(this._viewUI);
                this._banner = new Banner();
                this._banner.setData(this._viewUI.panel);
                this._viewUI.btn_fresh.visible = false;
                this._viewUI.box_target.visible = true;
                this._viewUI.btn_copy.visible = WebConfig.platform != "dazhong";
                this._viewUI.img_lianxi.visible = !this._viewUI.btn_copy.visible;
                this._viewUI.img_ewm.skin = WebConfig.ewmUrl;
            };
            // 页面打开时执行函数
            HudMainPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.list_game.hScrollBarSkin = "";
                this._viewUI.list_game.scrollBar.elasticDistance = 100;
                this._viewUI.list_game.itemRender = GameItemRender;
                this._viewUI.list_game.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_game.scrollBar.changeHandler = new Handler(this, this.changeHandler);
                this._viewUI.list_game.scrollTo(WebConfig.scrollBarValue || 0);
                this._viewUI.tab_target.selectHandler = new Handler(this, this.tab_targetSelectHandler);
                var index = this._tabList.indexOf(WebConfig.hudtabIndex);
                this._viewUI.tab_target.selectedIndex = index > -1 ? index : 0;
                this._viewUI.btn_new.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_kefu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_gren.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_copy.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_yhhd.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_bxx.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qukuan.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_bdsq.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_tkzx.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                // this._viewUI.btn_gtui.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chongzhi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_baobiao.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_fenxiang.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_fresh.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_xyzp.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qd.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_gonggao.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_shezhi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_share.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_cunru.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_tuiguang.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_cardroom.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_vip_ad.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_vip.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_GAMELIST_UPDATE, this, this.onUpdateGameList);
                this.onUpdatePlayerInfo();
                this._game.playMusic(Path.music_bg);
                this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_new, this, this.checkout, new Point(70, -10), 1, null, [this._viewUI.btn_new]);
                this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_bdsq, this, this.checkout, new Point(70, -10), 1, null, [this._viewUI.btn_bdsq]);
                this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_qd, this, this.checkout, new Point(70, -10), 1, null, [this._viewUI.btn_qd]);
                this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_xyzp, this, this.checkout, new Point(70, -10), 1, null, [this._viewUI.btn_xyzp]);
                this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_tkzx, this, this.checkout, new Point(70, -10), 1, null, [this._viewUI.btn_tkzx]);
                this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_vip, this, this.checkout, new Point(70, -10), 1, null, [this._viewUI.btn_vip]);
                this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.img_txk, this, this.checkout, new Point(80, -20), 1, null, [this._viewUI.img_txk]);
            };
            HudMainPage.prototype.checkout = function (btn) {
                switch (btn) {
                    case this._viewUI.btn_new:
                        return gamedating.DatingGame.ins.mailMgr.isShowRed;
                    case this._viewUI.btn_bdsq:
                        return WebConfig.info.isguest;
                    case this._viewUI.btn_qd:
                        return WebConfig.info.is_can_qd;
                    case this._viewUI.btn_xyzp:
                        return WebConfig.info.is_can_lp;
                    case this._viewUI.btn_tkzx:
                        return WebConfig.info.is_can_qmdl_lq;
                    case this._viewUI.btn_vip:
                        return gamedating.DatingGame.ins.vipMgr.checkVipReceived();
                    case this._viewUI.img_txk:
                        return gamedating.DatingGame.ins.vipMgr.checkVipReceived();
                }
            };
            HudMainPage.prototype.changeHandler = function (value) {
                if (!this._viewUI.list_game.dataSource || !this._viewUI.list_game.dataSource.length)
                    return;
                WebConfig.scrollBarValue = value;
                this._viewUI.img_next.visible = this._viewUI.list_game.scrollBar.value < this._viewUI.list_game.scrollBar.max;
                this._viewUI.img_prev.visible = this._viewUI.list_game.scrollBar.value > this._viewUI.list_game.scrollBar.min;
            };
            HudMainPage.prototype.tab_targetSelectHandler = function (index) {
                WebConfig.hudtabIndex = this._tabList[index];
                this._viewUI.list_game.scrollBar.stopScroll();
                this.onUpdateGameList(true);
            };
            HudMainPage.prototype.onUpdateGameList = function (isSelect) {
                if (this._viewUI.tab_target.selectedIndex == -1)
                    return;
                var indx = this._tabList[this._viewUI.tab_target.selectedIndex];
                var list = page_1.DatingPageDef.GAME_SORT_LIST[indx];
                this._viewUI.list_game.dataSource = list;
                if (isSelect) {
                    this._viewUI.list_game.scrollTo(0);
                }
                else {
                    this._viewUI.list_game.scrollTo(WebConfig.scrollBarValue || 0);
                }
            };
            HudMainPage.prototype.update = function (diff) {
                _super.prototype.update.call(this, diff);
                if (this._banner) {
                    this._banner.update(diff);
                }
                if (this._viewUI.list_game.dataSource) {
                    this._viewUI.list_game.cells.forEach(function (element) {
                        var item = element;
                        item && item.update(diff);
                    });
                }
            };
            HudMainPage.prototype.layout = function () {
                _super.prototype.layout.call(this);
                if (!this._viewUI)
                    return;
                if (!this._viewUI.list_game || !this._viewUI.list_game.dataSource)
                    return;
                this._viewUI.list_game.refresh();
            };
            HudMainPage.prototype.onUpdatePlayerInfo = function (first) {
                if (first === void 0) { first = true; }
                if (!WebConfig.info)
                    return;
                this._viewUI.txt_id.text = "ID:" + WebConfig.info.userid;
                this._viewUI.txt_name.text = WebConfig.info.nickname;
                this.onUpdateGameList();
                if (!this._clip_money) {
                    this._clip_money = new DatingClip(DatingClip.MONEY_FONT2);
                    this._clip_money.x = this._viewUI.clip_money.x;
                    this._clip_money.y = this._viewUI.clip_money.y;
                    this._viewUI.clip_money.parent && this._viewUI.clip_money.parent.addChild(this._clip_money);
                    this._viewUI.clip_money.removeSelf();
                }
                this._clip_money.setText(WebConfig.info.money, true, false, WebConfig.info.money < 0 ? DatingPath.ui_dating_tongyong + "tu_jianhao.png" : null);
                this._viewUI.btn_gren.skin = DatingPath.ui_dating + "touxiang/head_" + WebConfig.info.headimg + ".png";
                this._viewUI.img_txk.visible = WebConfig.info.vip_level > 0;
                if (WebConfig.info.vip_level > 0) {
                    this._viewUI.img_txk.skin = DatingPath.ui_dating + "touxiang/tu_v" + WebConfig.info.vip_level + ".png";
                }
                if (WebConfig.info.qifu_type > 0 && WebConfig.info.qifu_endtime > this._game.sceneGame.sync.serverTimeBys) {
                    this._viewUI.btn_gren.skin = DatingPath.ui_dating + "touxiang/head_" + this._qifuNameStr[WebConfig.info.qifu_type - 1] + ".png";
                }
                if (WebConfig.info && !WebConfig.info.mobile) {
                    this._viewUI.btn_bdsq.visible = WebConfig.info.bindSendMoney > 0;
                    this._banner.lockEnable = !this._viewUI.btn_bdsq.visible;
                    if (!this._clipBindMoney) {
                        this._clipBindMoney = new DatingClip(DatingClip.DATING_BIND_FONT);
                        this._clipBindMoney.x = this._viewUI.clip_bindsendmoney.x;
                        this._clipBindMoney.y = this._viewUI.clip_bindsendmoney.y;
                        this._clipBindMoney.left = 0;
                        this._viewUI.clip_bindsendmoney.parent.addChild(this._clipBindMoney);
                        this._viewUI.clip_bindsendmoney.removeSelf();
                    }
                    this._clipBindMoney.setText(WebConfig.info.bindSendMoney, true);
                    this._viewUI.img_yuan.left = this._clipBindMoney.width;
                    //未绑定 每次进去都弹出来
                    if (this._banner.lockEnable) {
                        this._viewUI.img_bang_or_sao.skin = DatingPath.ui_dating + "dating/tu_lb4.png";
                        this._clipBindMoney.visible = false;
                        this._viewUI.img_yuan.visible = false;
                        this._viewUI.img_bang_bg.visible = false;
                        this._viewUI.img_ewm.visible = true;
                    }
                    else {
                        this._viewUI.img_bang_or_sao.skin = DatingPath.ui_dating + "dating/tu_lb2.png";
                        this._clipBindMoney.visible = true;
                        this._viewUI.img_yuan.visible = true;
                        this._viewUI.img_bang_bg.visible = true;
                        this._viewUI.img_ewm.visible = false;
                    }
                    this._viewUI.img_bang_bg.on(LEvent.CLICK, this, this.onBtnClickWithTween, [false]);
                    if (!this._game.datingGame.firstAlert) {
                        var loginPopUp = WebConfig.info.login_popup.split(",");
                        if (loginPopUp) {
                            for (var i = 0; i < loginPopUp.length; i++) {
                                if (loginPopUp[i]) {
                                    this._game.uiRoot.general.open(page_1.DatingPageDef.LOGIN_POPUP[loginPopUp[i]]);
                                }
                            }
                        }
                    }
                }
                else {
                    if (!this._game.datingGame.firstAlert) {
                        var loginPopUp = WebConfig.info.login_popup.split(",");
                        if (loginPopUp) {
                            for (var i = 0; i < loginPopUp.length; i++) {
                                if (loginPopUp[i] && loginPopUp[i] != 1) {
                                    this._game.uiRoot.general.open(page_1.DatingPageDef.LOGIN_POPUP[loginPopUp[i]]);
                                }
                            }
                        }
                    }
                    if (this._clipBindMoney) {
                        this._clipBindMoney.removeSelf();
                        this._clipBindMoney.destroy();
                        this._clipBindMoney = null;
                    }
                    this._viewUI.clip_bindsendmoney.visible = false;
                    this._viewUI.img_yuan.visible = false;
                    this._viewUI.img_bang_bg.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.img_bang_or_sao.skin = DatingPath.ui_dating + "dating/tu_lb4.png";
                    this._viewUI.img_bang_bg.visible = false;
                    this._viewUI.img_ewm.visible = true;
                    this._banner.lockEnable = false;
                    this._viewUI.img_ewm.skin = WebConfig.ewmUrl;
                    this._game.uiRoot.general.close(page_1.DatingPageDef.PAGE_BINDMONEY);
                    this._viewUI.btn_bdsq.visible = false;
                }
                // this._viewUI.btn_gtui.visible = this._viewUI.btn_tkzx.visible = WebConfig.info.isqmdl;
                this._viewUI.btn_qd.visible = WebConfig.info.islxqd;
                this._viewUI.btn_xyzp.visible = WebConfig.info.isxylp;
                if (!WebConfig.info.isqmdl) {
                    this._game.uiRoot.general.close(page_1.DatingPageDef.PAGE_SHARE);
                    this._game.uiRoot.general.close(page_1.DatingPageDef.PAGE_QUANMINDAILI);
                }
                if (!WebConfig.info.islxqd) {
                    this._game.uiRoot.general.close(page_1.DatingPageDef.PAGE_QIANDAO);
                }
                if (!WebConfig.info.isxylp) {
                    this._game.uiRoot.general.close(page_1.DatingPageDef.PAGE_ZHUANPAN);
                }
                if (!WebConfig.info.daysharegivemoney) {
                    this._viewUI.box4.visible = false;
                    this._viewUI.btn_fenxiang.visible = false;
                }
                this.updatePos();
                //分享动态
                if (WebConfig.info.isCanFenXiang && WebConfig.info.daysharegivemoney > 0) {
                    this._game.sceneGame.scaleEffectFactory.add(this._viewUI.btn_fenxiang);
                }
                else {
                    this._game.sceneGame.scaleEffectFactory.remove(this._viewUI.btn_fenxiang);
                }
                //检测vip领取奖励情况
                if (!this._game.datingGame.firstAlert && gamedating.DatingGame.ins.vipMgr.checkVipReceived()) {
                    this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_VIP_UP);
                }
                this._game.datingGame.firstAlert = true;
            };
            HudMainPage.prototype.updatePos = function () {
                var childNum = this._viewUI.box_btn_bottom.numChildren;
                var total_x = 60;
                for (var index = 0; index < childNum; index++) {
                    var item = void 0;
                    if (!this._box_btn_bottom[index]) //缓存下
                     {
                        this._box_btn_bottom[index] = this._viewUI.box_btn_bottom.getChildByName("item" + index);
                    }
                    item = this._box_btn_bottom[index];
                    if (!item || !item.visible)
                        continue;
                    item.x = total_x;
                    total_x += item.width + 10;
                }
                var childNum1 = this._viewUI.box_btn_top.numChildren;
                var total_x1 = 410;
                for (var index = 0; index < childNum1; index++) {
                    var item = void 0;
                    if (!this._box_btn_top[index]) //缓存下
                     {
                        this._box_btn_top[index] = this._viewUI.box_btn_top.getChildByName("item" + index);
                    }
                    item = this._box_btn_top[index];
                    if (!item || !item.visible)
                        continue;
                    item.x = total_x1;
                    total_x1 -= item.width + 7;
                }
            };
            HudMainPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_new: //消息
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_XIAOXI);
                        break;
                    case this._viewUI.btn_kefu: //客服
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_KEFU);
                        break;
                    case this._viewUI.btn_gren: //个人信息
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_XINXI);
                        break;
                    case this._viewUI.btn_copy: //复制
                        this._game.copyUrl();
                        break;
                    case this._viewUI.btn_shezhi: //设置
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_XINXI, function (page) {
                            page.dataSource = page_1.GeRenXinXiPage.TYPE_SHEZHI;
                        });
                        break;
                    case this._viewUI.btn_fresh: //刷新金币
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_CHONGZHI);
                        break;
                    case this._viewUI.btn_xyzp: //大转盘
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_ZHUANPAN);
                        break;
                    case this._viewUI.btn_qd: //签到
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_QIANDAO);
                        break;
                    case this._viewUI.btn_gonggao: //公告
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_HUODONGGONGGAO);
                        break;
                    case this._viewUI.btn_vip_ad:
                    case this._viewUI.btn_vip:
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_VIP);
                        break;
                    case this._viewUI.btn_yhhd: //活动
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_HUODONG);
                        break;
                    case this._viewUI.btn_bxx: //余额宝
                    case this._viewUI.btn_cunru:
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_YUEBAO);
                        break;
                    case this._viewUI.btn_qukuan: //取款
                        if (!WebConfig.info)
                            return;
                        if (WebConfig.info.isguest) {
                            this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDPHONE);
                        }
                        else {
                            this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_QUKUAN);
                        }
                        break;
                    case this._viewUI.img_bang_bg: //banner处理
                        if (!this._banner.canClick)
                            break;
                    case this._viewUI.btn_bdsq: //绑定送钱
                        if (WebConfig.info && !WebConfig.info.mobile) {
                            this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDMONEY);
                        }
                        break;
                    // case this._viewUI.btn_gtui://推广
                    // 	if (WebConfig.info.isguest) {
                    // 		// this._game.showTips("请先绑定")
                    // 		this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDPHONE)
                    // 		return;
                    // 	}
                    // 	this._game.uiRoot.general.open(DatingPageDef.PAGE_SHARE)
                    // 	break;
                    case this._viewUI.btn_tkzx: //全民代理
                    case this._viewUI.btn_tuiguang:
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_QUANMINDAILI);
                        break;
                    case this._viewUI.btn_cardroom:
                        this._viewUI.tab_target.selectedIndex = 4;
                        break;
                    case this._viewUI.btn_chongzhi: //充值
                        if (WebConfig.info && !WebConfig.info.mobile) {
                            this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDPHONE);
                            return;
                        }
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_CHONGZHI);
                        break;
                    case this._viewUI.btn_fenxiang: //分享
                    case this._viewUI.btn_share:
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_HUD_SHARE);
                        break;
                    case this._viewUI.btn_baobiao: //报表
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BAOBIAO);
                        break;
                    default:
                        break;
                }
            };
            HudMainPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource, this._tabList[this._viewUI.tab_target.selectedIndex].toString());
                }
            };
            HudMainPage.prototype.tabToFangKa = function () {
                this._viewUI.tab_target.selectedIndex = 4;
            };
            HudMainPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.stopMusic();
                    Laya.timer.clearAll(this);
                    this._viewUI.list_game.dataSource = [];
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_GAMELIST_UPDATE, this, this.onUpdateGameList);
                    if (this._clip_money) {
                        this._clip_money.removeSelf();
                        this._clip_money.destroy();
                        this._clip_money = null;
                    }
                    if (this._clipBindMoney) {
                        this._clipBindMoney.removeSelf();
                        this._clipBindMoney.destroy();
                        this._clipBindMoney = null;
                    }
                    this._game.sceneGame.scaleEffectFactory.remove(this._viewUI.btn_fenxiang);
                    this._box_btn_top = null;
                    this._box_btn_bottom = null;
                }
                _super.prototype.close.call(this);
            };
            return HudMainPage;
        }(game.gui.base.Page));
        page_1.HudMainPage = HudMainPage;
        var GameItemRender = /** @class */ (function (_super) {
            __extends(GameItemRender, _super);
            function GameItemRender() {
                var _this = _super.call(this) || this;
                _this._no_gengx = ["dfwqp", "qpdz", "qpky", "qpttkx", "zzqp"];
                _this.img_close.y = 145;
                return _this;
            }
            GameItemRender.prototype.setData = function (game, data, type) {
                if (!data) {
                    this.visible = false;
                    return;
                }
                if (data && this._datar == data && this._typer == type)
                    return;
                Laya.timer.clearAll(this);
                Laya.Tween.clearAll(this);
                this._game = game;
                this._datar = data;
                this._data = data.replace("r_", "");
                this._typer = type;
                this._type = this._datar.indexOf("r_") == -1 ? type : page_1.DatingPageDef.TYPE_CARD;
                this.visible = true;
                this.clearloadingAni();
                this._isNeedCheckLoad = false;
                if (!this._hitArea) {
                    this._hitArea = new Laya.HitArea();
                    var w = this.width * .5;
                    var h = this.height * .5;
                    // this.graphics.drawCircle(w,h,100,"#ff0000")//调试 可点区域
                    this._hitArea.hit.drawCircle(w, h, 100, "#ff0000");
                    this.hitArea = this._hitArea;
                }
                if (!this._avatar) {
                    this._avatar = new AvatarUIShow();
                    this.addChild(this._avatar);
                }
                var sk_url = DatingPath.sk_dating + (this._data.indexOf("DZ_") == -1 ? ("DZ_" + this._data) : this._data);
                this._avatar.loadSkeleton(sk_url, this.img_bg.x, this.img_bg.y);
                if (this._avatar)
                    this._avatar.visible = true;
                this.img_bg.visible = false;
                if (this._type == page_1.DatingPageDef.TYPE_CARD) {
                    if (!this._fangka) {
                        this._fangka = new LImage(DatingPath.ui_dating + "datingrk/tu_fangka.png");
                        this._fangka.mouseEnabled = false;
                        this._fangka.x = 10 - this.width * .5;
                        this._fangka.y = 20 - this.height * .5;
                        this._avatar.addChild(this._fangka);
                    }
                }
                else {
                    if (this._fangka) {
                        this._fangka.removeSelf();
                        this._fangka.destroy();
                        this._fangka = null;
                    }
                }
                var isOpenEnter = page_1.DatingPageDef.getIsOpenEnter(this._type, this._data);
                this.img_close.visible = !isOpenEnter;
                this.addChild(this.img_close);
                this.onGameAssetUpdate();
                this.on(LEvent.CLICK, this, this.onMouseHandle);
            };
            GameItemRender.prototype.onGameAssetUpdate = function () {
                if (LoadingMgr.ins.isLoaded(this._data) || this.img_close.visible || this._no_gengx.indexOf(WebConfig.platform) != -1) {
                    if (this._gengx) {
                        this._gengx.removeSelf();
                        this._gengx.destroy();
                        this._gengx = null;
                    }
                }
                else {
                    if (!this._gengx) {
                        this._gengx = new LImage(DatingPath.ui_dating + "dating/tu_gengxin.png");
                        this._gengx.mouseEnabled = false;
                        this._gengx.x = 150;
                        this._gengx.y = 30;
                        this.addChild(this._gengx);
                    }
                }
            };
            GameItemRender.prototype.update = function (diff) {
                if (!this._data)
                    return;
                if (this._avatar) {
                    this._avatar.pos(this.img_bg.x, this.img_bg.y);
                    this._avatar.onDraw();
                }
                if (this._isNeedCheckLoad) {
                    return;
                }
                if (LoadingMgr.ins.isLoaded(this._data)) {
                    this._isNeedCheckLoad = true;
                    this.clearloadingAni();
                    this.onGameAssetUpdate();
                    return;
                }
                var p = LoadingMgr.ins.getProgress(this._data);
                if (!p) {
                    this.clearloadingAni();
                    return;
                }
                this.setProgress(p);
            };
            GameItemRender.prototype.setProgress = function (p) {
                if (!this._loadingAni) {
                    this._loadingAni = new LoadingAni();
                    this._loadingAni.x = this.width * .5;
                    this._loadingAni.y = this.height * .5;
                    this.addChild(this._loadingAni);
                }
                this._loadingAni.setData(p);
            };
            GameItemRender.prototype.onMouseHandle = function (e) {
                var _this = this;
                if (!this._data)
                    return;
                if (this.img_close.visible) {
                    this._game.showTips("敬请期待！");
                    return;
                }
                if (this._loadingAni) {
                    this._game.showTips("正在更新中...");
                    return;
                }
                this._game.uiRoot.btnTween(this._avatar, this, function () {
                    if (LoadingMgr.ins.isLoaded(_this._data)) {
                        _this.openPage();
                    }
                    else {
                        _this.setProgress(0);
                        JsLoader.ins.startLoad(_this._data, Handler.create(_this, _this.onJsComplete));
                    }
                });
            };
            GameItemRender.prototype.onJsComplete = function (assets) {
                if (LoadingMgr.ins.isLoaded(this._data)) {
                    this.openPage();
                }
                else {
                    LoadingMgr.ins.load(this._data, assets);
                }
            };
            GameItemRender.prototype.openPage = function () {
                var _this = this;
                var pageDef = getPageDef(this._data);
                //調試模式
                var CLOSE_LIST = isDebug ? [] : [];
                if (pageDef["__enterMapLv"]) {
                    this._game.sceneGame.sceneObjectMgr.intoStory(pageDef.GAME_NAME, pageDef["__enterMapLv"], true);
                }
                else if (CLOSE_LIST.indexOf(this._data) == -1) {
                    this._game.uiRoot.HUD.open(this._data + 1, function (page) {
                        page.dataSource = WebConfig.hudgametype = _this._type;
                        _this._game.uiRoot.HUD.closeAll([_this._data + 1]);
                    }, function (page) {
                        if (_this._game.sceneObjectMgr.mainPlayer && !_this._game.sceneGame.inScene) {
                            _this._game.uiRoot.HUD.open(page_1.DatingPageDef.PAGE_HUD, null, null, false, 0);
                        }
                    });
                }
                else {
                    this._game.showTips("开发中,敬请期待!");
                }
            };
            GameItemRender.prototype.clearloadingAni = function () {
                if (this._loadingAni) {
                    this._loadingAni.removeSelf();
                    this._loadingAni.clear();
                    this._loadingAni = null;
                }
            };
            GameItemRender.prototype.destroy = function () {
                Laya.timer.clearAll(this);
                Laya.Tween.clearAll(this);
                this.clearloadingAni();
                if (this._avatar) {
                    this._avatar.clear();
                    this._avatar.destroy();
                    this._avatar = null;
                }
                if (this._hitArea) {
                    if (this._hitArea.hit) {
                        this._hitArea.hit.clear();
                        this._hitArea.hit.destroy();
                        this._hitArea.hit = null;
                    }
                    this._hitArea = null;
                    this.hitArea = null;
                }
                if (this._fangka) {
                    this._fangka.removeSelf();
                    this._fangka.destroy();
                    this._fangka = null;
                }
                if (this._gengx) {
                    this._gengx.removeSelf();
                    this._gengx.destroy();
                    this._gengx = null;
                }
                this.off(LEvent.CLICK, this, this.onMouseHandle);
                _super.prototype.destroy.call(this);
            };
            return GameItemRender;
        }(ui.dating.component.HudItemRender1UI));
        var Banner = /** @class */ (function () {
            function Banner() {
                this._delay = 2000;
                this._stopTime = 1500;
                this._boxs = [];
                this._curIdex = 0;
                this._showBoxs = [];
                this._showBoxPosX = [-340, 0, 340];
                this._waitTime = 0;
                this._timeDown = 5000;
            }
            Banner.prototype.setData = function (panel) {
                this._panel = panel;
                this._panel.on(LEvent.MOUSE_OVER, this, this.onMouseOver);
                var num = panel.numChildren;
                this._clip = panel.getChildByName("clip");
                this._clip.visible = false;
                for (var index = 0; index < num; index++) {
                    var box = panel.getChildByName("item" + index);
                    if (!box)
                        continue;
                    if (WebConfig.info && !WebConfig.info.daysharegivemoney && index == 4)
                        continue;
                    box.visible = true;
                    this._boxs.push(box);
                }
                this._showBoxs = [this._boxs[this._boxs.length - 1], this._boxs[0], this._boxs[1]];
                for (var i = 0; i < this._showBoxs.length; i++) {
                    this._showBoxs[i].x = this._showBoxPosX[i];
                }
            };
            Banner.prototype.onMouseOver = function () {
                this._lock = true;
                this._panel.off(LEvent.MOUSE_OVER, this, this.onMouseOver);
                this._panel.on(LEvent.MOUSE_DOWN, this, this.onMouseDown);
                this._panel.on(LEvent.MOUSE_OUT, this, this.onMouseOut);
            };
            Banner.prototype.onMouseDown = function (e) {
                this._oldMouseX = Laya.stage.mouseX;
                this._panel.off(LEvent.MOUSE_DOWN, this, this.onMouseDown);
                this._panel.on(LEvent.MOUSE_UP, this, this.onMouseUp);
                this._onMouseDown = true;
            };
            Banner.prototype.startPlay = function (diff) {
                if (Laya.timer.currTimer - this._waitTime < 500)
                    return;
                this._waitTime = Laya.timer.currTimer;
                if (!diff) {
                    diff = Laya.stage.mouseX - this._oldMouseX;
                    this.canClick = Math.abs(diff) < 5;
                }
                if (!diff)
                    return;
                Laya.timer.clearAll(this);
                if (diff > 0) //右
                 {
                    var cur = this._curIdex - 1 < 0 ? this._boxs.length - 1 : this._curIdex - 1;
                    var prev = cur - 1 < 0 ? this._boxs.length - 1 : cur - 1;
                    Laya.Tween.to(this._showBoxs[1], { x: this._showBoxPosX[2] }, 500);
                    this._boxs[prev].x = this._showBoxPosX[0];
                    Laya.Tween.to(this._showBoxs[0], { x: this._showBoxPosX[1] }, 500);
                    //显示对象改变
                    for (var i = this._showBoxs.length - 1; i >= 0; i--) {
                        this._showBoxs[i] = this._showBoxs[i - 1];
                        if (i == 0) {
                            this._showBoxs[i] = this._boxs[prev];
                        }
                    }
                    this._curIdex = cur;
                }
                else { //左
                    var cur = this._curIdex + 1 > this._boxs.length - 1 ? 0 : this._curIdex + 1;
                    var next = cur + 1 > this._boxs.length - 1 ? 0 : cur + 1;
                    Laya.Tween.to(this._showBoxs[1], { x: this._showBoxPosX[0] }, 500);
                    this._boxs[next].x = this._showBoxPosX[2];
                    Laya.Tween.to(this._showBoxs[2], { x: this._showBoxPosX[1] }, 500);
                    //显示对象改变
                    for (var i = 0; i < this._showBoxs.length; i++) {
                        this._showBoxs[i] = this._showBoxs[i + 1];
                        if (i == 2) {
                            this._showBoxs[i] = this._boxs[next];
                        }
                    }
                    this._curIdex = cur;
                }
                this._clip.index = this._curIdex;
            };
            Banner.prototype.onMouseUp = function (e) {
                this._onMouseDown && this.startPlay();
                this._onMouseDown = false;
                this._panel.off(LEvent.MOUSE_UP, this, this.onMouseUp);
                this._panel.on(LEvent.MOUSE_DOWN, this, this.onMouseDown);
            };
            Banner.prototype.onMouseOut = function (e) {
                this._onMouseDown && this.startPlay();
                this._onMouseDown = false;
                this._panel.off(LEvent.MOUSE_OUT, this, this.onMouseOut);
                this._panel.off(LEvent.MOUSE_UP, this, this.onMouseUp);
                this._panel.off(LEvent.MOUSE_DOWN, this, this.onMouseDown);
                this._panel.on(LEvent.MOUSE_OVER, this, this.onMouseOver);
                this._lock = false;
            };
            Banner.prototype.update = function (diff) {
                if (this._lock)
                    return;
                if (this._onMouseDown) {
                    this._timeDown = 5000;
                    return;
                }
                if (this._timeDown < 0) {
                    this.startPlay(1);
                    this._timeDown = 5000;
                    return;
                }
                this._timeDown -= diff;
            };
            return Banner;
        }());
        var LoadingAni = /** @class */ (function (_super) {
            __extends(LoadingAni, _super);
            function LoadingAni() {
                var _this = _super.call(this) || this;
                _this._v = 0;
                _this._img_bg = new LImage(DatingPath.ui_dating_tongyong + "load_bg.png");
                _this._img_bg.anchorX = _this._img_bg.anchorY = 0.5;
                _this.addChild(_this._img_bg);
                _this._img_bg_mask = new LImage(DatingPath.ui_dating_tongyong + "load_bg1.png");
                _this._img_bg_mask.anchorX = _this._img_bg_mask.anchorY = 0.5;
                // this.addChild(this._img_bg_mask);
                _this._img_bg_front = new Laya.Sprite();
                _this._img_bg_front.mask = _this._img_bg_mask;
                _this.addChild(_this._img_bg_front);
                _this._label = new Label();
                _this._label.fontSize = 14;
                _this._label.align = "center";
                _this._label.bold = true;
                _this._label.color = "#fff";
                _this._label.width = 36;
                _this._label.height = 14;
                _this._label.anchorX = _this._label.anchorY = 0.5;
                _this.addChild(_this._label);
                _this.setData();
                return _this;
            }
            LoadingAni.prototype.setData = function (v) {
                if (v === void 0) { v = 0; }
                if (v > 1)
                    v = 1;
                if (v <= 0)
                    v = 0.01;
                if (this._v == v)
                    return;
                this._v = v;
                this._img_bg_front.graphics.clear();
                var endAngle = 360 * v;
                this._img_bg_front.graphics.drawPie(0, 0, 20, -90, endAngle - 90, "#00ff47");
                this._label.changeText(Math.floor(v * 100).toString() + "%");
            };
            LoadingAni.prototype.clear = function () {
                if (this._img_bg) {
                    this._img_bg.removeSelf();
                    this._img_bg.destroy();
                    this._img_bg = null;
                }
                if (this._img_bg_front) {
                    this._img_bg_front.removeSelf();
                    this._img_bg_front.destroy();
                    this._img_bg_front = null;
                }
                if (this._img_bg_mask) {
                    this._img_bg_mask.removeSelf();
                    this._img_bg_mask.destroy();
                    this._img_bg_mask = null;
                }
                if (this._label) {
                    this._label.removeSelf();
                    this._label.destroy();
                    this._label = null;
                }
            };
            return LoadingAni;
        }(Laya.Sprite));
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=HudMainPage.js.map