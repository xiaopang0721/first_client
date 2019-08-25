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
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page_1) {
        var HudMainPage = /** @class */ (function (_super) {
            __extends(HudMainPage, _super);
            function HudMainPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._box_btn_top = {};
                _this._box_btn_bottom = {};
                /**hud关闭相关气泡框逻辑 */
                _this._isCanClose = false;
                _this._beforeArr = [];
                _this._asset = [
                    DatingPath.atlas_dating_ui + "dating.atlas",
                    DatingPath.atlas_dating_ui + "datingsk.atlas",
                ];
                _this._isNeedDuang = false;
                return _this;
            }
            // private _banner: Banner;
            // 页面初始化函数
            HudMainPage.prototype.init = function () {
                this._viewUI = this.createView("nqp.dating.DaTingUI");
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            HudMainPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this.initQiPaoUI();
                this._viewUI.list_btns.hScrollBarSkin = "";
                this._viewUI.list_btns.scrollBar.elasticDistance = 100;
                this._viewUI.list_btns.itemRender = GameItemRender;
                this._viewUI.list_btns.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_btns.scrollTo(WebConfig.scrollBarValue || 0);
                this._viewUI.btn_xiaoxi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_kefu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_gren.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_add.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_remen.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_yuebao.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qukuan.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_bangding.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_daili.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chongzhi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_fenxiang.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zhuanpan.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qiandao.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_vip.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_shouchong.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_guanwang.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_GAMELIST_UPDATE, this, this.onUpdateGameList);
                this.onUpdatePlayerInfo(true);
                this._game.playMusic(Path.music_bg);
                this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_xiaoxi, this, this.checkout, new Point(70, -10), 1, null, [this._viewUI.btn_xiaoxi]);
                this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_bangding, this, this.checkout, new Point(70, -10), 1, null, [this._viewUI.btn_bangding]);
                this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_qiandao, this, this.checkout, new Point(70, -10), 1, null, [this._viewUI.btn_qiandao]);
                this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_zhuanpan, this, this.checkout, new Point(70, -10), 1, null, [this._viewUI.btn_zhuanpan]);
                this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_daili, this, this.checkout, new Point(70, -10), 1, null, [this._viewUI.btn_daili]);
                this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_vip, this, this.checkout, new Point(70, -10), 1, null, [this._viewUI.btn_vip]);
                //hud弹窗逻辑
                this.alertPage();
                //气泡框逻辑
                this.showQiPaoKuang();
            };
            HudMainPage.prototype.close = function () {
                if (this._viewUI) {
                    var listData = this._game.datingGame.hudTabScrollData;
                    listData.value = this._viewUI.list_btns.scrollBar.value;
                    listData.tabIndex = 11;
                    listData.subValue = 22;
                    this._viewUI.list_btns.dataSource = [];
                    this._game.stopMusic();
                    Laya.Tween.clearAll(this);
                    this.clearTweens();
                    this._viewUI.list_btns.dataSource = [];
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_GAMELIST_UPDATE, this, this.onUpdateGameList);
                    if (this._clip_money) {
                        this._clip_money.removeSelf();
                        this._clip_money.destroy();
                        this._clip_money = null;
                    }
                    if (this._clip_vip) {
                        this._clip_vip.removeSelf();
                        this._clip_vip.destroy();
                        this._clip_vip = null;
                    }
                    this._game.sceneGame.scaleEffectFactory.remove(this._viewUI.btn_fenxiang);
                    this._box_btn_top = null;
                    this._box_btn_bottom = null;
                }
                _super.prototype.close.call(this);
            };
            HudMainPage.prototype.checkout = function (btn) {
                switch (btn) {
                    case this._viewUI.btn_xiaoxi:
                        return this._game.datingGame.mailMgr.isShowRed;
                    case this._viewUI.btn_bangding:
                        return WebConfig.info.isguest;
                    case this._viewUI.btn_qiandao:
                        return !WebConfig.info.is_can_qd;
                    case this._viewUI.btn_zhuanpan:
                        return WebConfig.info.is_can_lp;
                    case this._viewUI.btn_daili:
                        return WebConfig.info.is_can_qmdl_lq;
                    case this._viewUI.btn_vip:
                        return this._game.datingGame.vipMgr.checkVipReceivedIndex() != 0;
                }
            };
            // private _qifuNameStr: string[] = ["xs", "px", "gsy", "gg", "cs", "tdg"];
            HudMainPage.prototype.onUpdatePlayerInfo = function (first) {
                if (first === void 0) { first = false; }
                var mainPlayer = this._game.sceneGame.sceneObjectMgr.mainPlayer;
                if (!mainPlayer)
                    return;
                var playerInfo = mainPlayer.playerInfo;
                if (!playerInfo)
                    return;
                this._viewUI.txt_id.text = playerInfo.nickname;
                if (first)
                    this.onUpdateGameList();
                if (!this._clip_money) {
                    this._clip_money = new gamedatingnqp.ClipUtil(gamedatingnqp.ClipUtil.MONEY_WHITE);
                    this._clip_money.x = this._viewUI.clip_money.x;
                    this._clip_money.y = this._viewUI.clip_money.y;
                    this._viewUI.clip_money.parent && this._viewUI.clip_money.parent.addChild(this._clip_money);
                    this._viewUI.clip_money.removeSelf();
                }
                if (!this._clip_vip) {
                    this._clip_vip = new gamedatingnqp.ClipUtil(gamedatingnqp.ClipUtil.DATING_VIP_FONT);
                    this._clip_vip.centerX = this._viewUI.clip_vip.centerX;
                    this._clip_vip.centerY = this._viewUI.clip_vip.centerY;
                    this._viewUI.clip_vip.parent && this._viewUI.clip_vip.parent.addChild(this._clip_vip);
                    this._viewUI.clip_vip.removeSelf();
                }
                this._clip_vip.setText(playerInfo.vip_level, true);
                this._clip_money.setText(playerInfo.money, true, false, playerInfo.money < 0 ? DatingPath.ui_dating_tongyong + "tu_jianhao.png" : null);
                this._viewUI.btn_gren.skin = DatingPath.ui_dating + "touxiang/tu_tx" + playerInfo.headimg + ".png";
                this._viewUI.img_txk.skin = DatingPath.ui_dating + "touxiang/tu_txk" + playerInfo.headKuang + ".png";
                // if (playerInfo.vip_level > 0) {
                // 	this._viewUI.img_txk.skin = DatingPath.ui_dating + "touxiang/tu_v" + playerInfo.vip_level + ".png";
                // }
                // if (playerInfo.qifu_type > 0 && playerInfo.qifu_endtime > this._game.sync.serverTimeBys) {
                // 	this._viewUI.btn_gren.skin = DatingPath.ui_dating + "touxiang/head_" + this._qifuNameStr[playerInfo.qifu_type - 1] + ".png";
                // }
                this._viewUI.btn_bangding.visible = !WebConfig.info.mobile && FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, "reggivemoney") > 0;
                if (!WebConfig.info.isqmdl) {
                    this._game.uiRoot.general.close(page_1.DatingPageDef.PAGE_QUANMINDAILI);
                }
                // if (!WebConfig.info.islxqd) {
                // 	this._game.uiRoot.general.close(DatingPageDef.PAGE_QIANDAO)
                // }
                // if (!WebConfig.info.isxylp) {
                // 	this._game.uiRoot.general.close(DatingPageDef.PAGE_ZHUANPAN)
                // }
                if (!FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, "daysharegivemoney")) {
                    this._viewUI.btn_fenxiang.visible = false;
                }
                this.updatePos();
                //分享动态
                if (WebConfig.info.isCanFenXiang && FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, "daysharegivemoney") > 0) {
                    this._game.sceneGame.scaleEffectFactory.add(this._viewUI.btn_fenxiang);
                }
                else {
                    this._game.sceneGame.scaleEffectFactory.remove(this._viewUI.btn_fenxiang);
                }
                //检测vip领取奖励情况
                // if (!DatingPageDef.FirstAlert && this._game.datingGame.vipMgr.checkVipReceived()) {
                // 	this._game.uiRoot.general.open(DatingPageDef.PAGE_VIP_UP);
                // }
                // DatingPageDef.FirstAlert = true;
            };
            HudMainPage.prototype.updatePos = function () {
                this.judgeBtnShow();
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
                    total_x1 -= item.width + 20;
                }
            };
            //需要隐藏的判断按钮
            HudMainPage.prototype.judgeBtnShow = function () {
                //首充
                var mainPlayer = this._game.sceneGame.sceneObjectMgr.mainPlayer;
                if (!mainPlayer)
                    return;
                var is_get_fitst_pay = mainPlayer.playerInfo.is_get_fitst_pay;
                var isOpenFirst = Number(FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_FIRSTPAYCONFIG_C, "isopen"));
                if (isOpenFirst && !is_get_fitst_pay) {
                    this._viewUI.btn_shouchong.visible = true;
                }
                else {
                    this._viewUI.btn_shouchong.visible = false;
                }
            };
            HudMainPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_xiaoxi: //消息
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_XIAOXI);
                        break;
                    case this._viewUI.btn_kefu: //客服
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_KEFU);
                        break;
                    case this._viewUI.btn_gren: //个人信息
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_XINXI);
                        break;
                    case this._viewUI.btn_add: //刷新金币
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_CHONGZHI);
                        break;
                    case this._viewUI.btn_zhuanpan: //大转盘
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_ZHUANPAN);
                        break;
                    case this._viewUI.btn_qiandao: //签到
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_QIANDAO);
                        break;
                    case this._viewUI.btn_vip:
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_VIP);
                        break;
                    case this._viewUI.btn_remen: //活动
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_HUODONG);
                        break;
                    case this._viewUI.btn_yuebao: //余额宝
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_YUEBAO);
                        break;
                    case this._viewUI.btn_qukuan: //取款
                        if (WebConfig.info && !WebConfig.info.mobile) {
                            this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDPHONE, function (page) {
                                page.dataSource = 3; //绑定手机类型
                            });
                        }
                        else {
                            this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_QUKUAN);
                        }
                        break;
                    case this._viewUI.btn_bangding: //绑定送钱
                        if (WebConfig.info && !WebConfig.info.mobile) {
                            this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDMONEY);
                        }
                        break;
                    case this._viewUI.btn_daili: //全民代理
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_QUANMINDAILI);
                        break;
                    case this._viewUI.btn_chongzhi: //充值
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_CHONGZHI);
                        break;
                    case this._viewUI.btn_fenxiang: //分享
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_HUD_SHARE);
                        break;
                    case this._viewUI.btn_shouchong: //首充
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_FIRST_RECHARGE);
                        break;
                    case this._viewUI.btn_guanwang: //官网
                        WebConfig.openUrl(WebConfig.gwUrl);
                        break;
                    case this._viewUI.img_hd: //黑底
                        //进行下一步
                        if (this._isCanClose) {
                            var ani = void 0;
                            if (this._type == gamedatingnqp.DatingGame.QIPAOKUANGGW) {
                                ani = this._viewUI.ani7;
                            }
                            else if (this._type == gamedatingnqp.DatingGame.QIPAOKUANGHD) {
                                ani = this._viewUI.ani5;
                            }
                            this.closeQiPaoKuang(ani);
                        }
                        break;
                    default:
                        break;
                }
            };
            //====================弹窗气泡相关=start======================================
            /**hud弹窗逻辑 */
            HudMainPage.prototype.alertPage = function () {
                this._game.datingGame.popUpData;
                this._game.datingGame.firstAlertPage();
            };
            //显示气泡框
            HudMainPage.prototype.showQiPaoKuang = function () {
                //判断从游戏退出次数
                if (this._game.sceneGame.ExitGmeTimes == 1) {
                    this.alertQiPaoKuang(gamedatingnqp.DatingGame.QIPAOKUANGGW);
                }
                else if (this._game.sceneGame.ExitGmeTimes == 2) {
                    this.alertQiPaoKuang(gamedatingnqp.DatingGame.QIPAOKUANGHD);
                }
            };
            HudMainPage.prototype.initQiPaoUI = function () {
                this._viewUI.img_hd.visible = false;
                this._viewUI.box_qipaok.visible = false;
                this._viewUI.box_qipaok.mouseThrough = true;
                this._viewUI.img_hd.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            };
            HudMainPage.prototype.closeQiPaoKuang = function (ani) {
                ani.play();
                ani.on(LEvent.COMPLETE, this, this.completCloseQiPao, [ani]);
            };
            HudMainPage.prototype.completCloseQiPao = function (ani) {
                this._viewUI.img_hd.visible = false;
                this._viewUI.box_qipaok.visible = false;
                this._isCanClose = false;
                ani.stop();
                ani.off(LEvent.COMPLETE, this, this.completCloseQiPao);
            };
            HudMainPage.prototype.alertQiPaoKuang = function (type) {
                this._type = type;
                this._viewUI.img_hd.visible = true;
                this._viewUI.box_qipaok.visible = true;
                this._viewUI.box_gw.visible = false;
                this._viewUI.box_hd.visible = false;
                //第一次退出子游戏 推广官网  EVENT_LOAD_MAP该事件是地图清理时会抛出的
                var ani;
                if (type == gamedatingnqp.DatingGame.QIPAOKUANGGW) {
                    //官网气泡框
                    this._viewUI.box_gw.visible = true;
                    ani = this._viewUI.ani6;
                }
                else if (type == gamedatingnqp.DatingGame.QIPAOKUANGHD) {
                    //活动气泡框
                    this._viewUI.box_hd.visible = true;
                    ani = this._viewUI.ani4;
                }
                ani.play(0, false);
                ani.on(LEvent.COMPLETE, this, this.completOpenQiPao, [ani]);
            };
            HudMainPage.prototype.completOpenQiPao = function (ani) {
                ani.stop();
                this._isCanClose = true;
                ani.off(LEvent.COMPLETE, this, this.completOpenQiPao);
            };
            HudMainPage.prototype.onUpdateGameList = function () {
                var listData = this._game.datingGame.hudTabScrollData;
                // if (this.isBtnListOpen){
                // 	Laya.timer.once(2000, this, this.onUpdateGameList);
                // 	return;
                // }
                var data = [];
                for (var i = 0; i < page_1.DatingPageDef.GAME_SORT_LIST.length; i++) {
                    var element = page_1.DatingPageDef.GAME_SORT_LIST[i];
                    data[i] = [i, element];
                }
                this._viewUI.list_btns.dataSource = data;
                this._viewUI.list_btns.scrollTo(0);
                this._viewUI.list_btns.scrollBar.touchScrollEnable = true;
            };
            HudMainPage.prototype.update = function (diff) {
                _super.prototype.update.call(this, diff);
                if (this._viewUI.list_btns.dataSource) {
                    this._viewUI.list_btns.cells.forEach(function (element) {
                        var item = element;
                        item && item.update(diff);
                    });
                }
            };
            HudMainPage.prototype.renderHandler = function (cell, index) {
                if (!cell)
                    return;
                cell.setData([this, this._game], cell.dataSource);
            };
            HudMainPage.prototype.pushTweens = function (t) {
                if (!this._tweens)
                    this._tweens = [];
                if (this._tweens.indexOf(t) == -1)
                    this._tweens.push(t);
            };
            HudMainPage.prototype.clearTweens = function () {
                if (!this._tweens)
                    return;
                for (var i = 0; i < this._tweens.length; i++) {
                    var t = this._tweens[i];
                    Laya.Tween.clear(t);
                }
                this._tweens.length = 0;
                this._tweens = null;
            };
            /**
             * 点击列表中大按钮，控制视图动效
             * @param index
             * @param isOpen
             */
            HudMainPage.prototype.onClickBigBtn = function (index, isOpen, complateFun) {
                var _this = this;
                var cells = this._viewUI.list_btns.cells;
                if (isOpen) {
                    this._viewUI.list_btns.scrollBar.touchScrollEnable = !isOpen;
                    this._beforeScrollValue = this._viewUI.list_btns.scrollBar.value;
                    this._viewUI.list_btns.tweenTo(index, 200, Handler.create(this, function () {
                        var myCell;
                        // 先找到自己
                        cells.forEach(function (element) {
                            var cell = element;
                            if (cell.dataSource) {
                                var i = cell.dataSource[0];
                                if (i == index)
                                    myCell = cell;
                            }
                        });
                        var b = false;
                        // 移開其他
                        cells.forEach(function (element) {
                            var cell = element;
                            if (cell.dataSource) {
                                var i = cell.dataSource[0];
                                if (i > index) {
                                    var offset_X = 0;
                                    offset_X = 1560 - myCell.x;
                                    offset_X = cell.x + offset_X;
                                    _this._beforeArr.push([i, cell.x]); // 存下来，复位用
                                    _this.pushTweens(Laya.Tween.to(cell, { x: offset_X }, 500, Laya.Ease.circIn));
                                    b = true;
                                }
                            }
                        });
                        complateFun();
                    }));
                }
                else {
                    complateFun();
                    // 其他的回來
                    cells.forEach(function (element) {
                        var cell = element;
                        if (cell.dataSource) {
                            var i = cell.dataSource[0];
                            for (var o = 0; o < _this._beforeArr.length; o++) {
                                var c = _this._beforeArr[o];
                                if (c[0] == i)
                                    _this.pushTweens(Laya.Tween.to(cell, { x: c[1] }, 500, Laya.Ease.circOut));
                            }
                        }
                    });
                    this._beforeArr.length = 0;
                    // 復位
                    Laya.timer.once(600, this, function () {
                        _this.pushTweens(Laya.Tween.to(_this._viewUI.list_btns.scrollBar, { value: _this._beforeScrollValue }, 500, null, Handler.create(_this, function () {
                            _this._viewUI.list_btns.scrollBar.touchScrollEnable = !isOpen;
                        })));
                    });
                }
            };
            return HudMainPage;
        }(game.gui.base.Page));
        page_1.HudMainPage = HudMainPage;
        /**
         * 大厅入口 1 级list
         */
        var GameItemRender = /** @class */ (function (_super) {
            __extends(GameItemRender, _super);
            function GameItemRender() {
                var _this = _super.call(this) || this;
                _this._isCanDo = true;
                return _this;
            }
            GameItemRender.prototype.pushTweens = function (t) {
                if (!this._tweens)
                    this._tweens = [];
                if (this._tweens.indexOf(t) == -1)
                    this._tweens.push(t);
            };
            GameItemRender.prototype.clearTweens = function () {
                if (!this._tweens)
                    return;
                for (var i = 0; i < this._tweens.length; i++) {
                    var t = this._tweens[i];
                    Laya.Tween.clear(t);
                }
                this._tweens.length = 0;
                this._tweens = null;
            };
            GameItemRender.prototype.setData = function (arr, data) {
                if (!data) {
                    this.visible = false;
                    Laya.timer.clearAll(this);
                    this.clearTweens();
                    return;
                }
                this.datas = data;
                this._page = arr[0];
                this._game = arr[1];
                this._index = data[0];
                this._data = data[1];
                this._isOpen = false;
                this.show();
            };
            GameItemRender.prototype.destroy = function () {
                this.btn.off(LEvent.CLICK, this, this.doList);
                this.list.dataSource = [];
                if (this._avatar) {
                    this._avatar.clear();
                    this._avatar.destroy();
                    this._avatar = null;
                }
                Laya.timer.clearAll(this);
                this.clearTweens();
                Laya.Tween.clearAll(this);
                _super.prototype.destroy.call(this);
            };
            GameItemRender.prototype.update = function (diff) {
                if (!this._data)
                    return;
                if (this._avatar) {
                    this._avatar.onDraw();
                }
                if (this.list.dataSource) {
                    this.list.cells.forEach(function (element) {
                        var item = element;
                        item && item.update(diff);
                    });
                }
            };
            GameItemRender.prototype.show = function () {
                var b_btn = '';
                switch (this._index) {
                    case page_1.DatingPageDef.TYPE_CHESS:
                        b_btn = 'qipaiduizhan';
                        break;
                    case page_1.DatingPageDef.TYPE_GAME:
                        b_btn = 'jj';
                        break;
                    case page_1.DatingPageDef.TYPE_BAIREN:
                        b_btn = 'bairen';
                        break;
                }
                this.img_back.visible = false;
                if (!this._avatar) {
                    this._avatar = new AvatarUIShow();
                    this.btn.addChild(this._avatar);
                }
                this.box.scaleX = 1;
                this.img.width = 622;
                this._avatar.visible = true;
                this.img_btn.skin = DatingPath.ui_dating + 'datingsk/' + b_btn + '.png';
                var sk_url = DatingPath.sk_dating + "DZ_" + b_btn;
                this._avatar.loadSkeleton(sk_url, this.btn.width / 2, this.btn.height / 2 + 3);
                this.btn.on(LEvent.CLICK, this, this.doList);
                // 渲染子列表
                this.list.hScrollBarSkin = "";
                this.list.scrollBar.elasticDistance = 100;
                this.list.itemRender = GameSubItemRender;
                this.list.renderHandler = new Handler(this, this.renderHandler);
                this.list.scrollTo(WebConfig.scrollBarValue || 0);
                this.list.scrollBar.touchScrollEnable = false;
                this.list.dataSource = this._data;
            };
            GameItemRender.prototype.renderHandler = function (cell, index) {
                if (!cell)
                    return;
                cell.setData(this._game, cell.dataSource, this._index, index);
                if (!this._isOpen && index > 3)
                    cell.alpha = 0;
            };
            /**
             * 点击事件
             */
            GameItemRender.prototype.doList = function (e) {
                var _this = this;
                if (!this._isCanDo)
                    return;
                if (this._page.isBtnListOpen && !this._isOpen)
                    return;
                this._isCanDo = false;
                Laya.timer.once(1200, this, function () { _this._isCanDo = true; });
                this._page.isBtnListOpen = this._isOpen = !this._isOpen;
                // 关闭的时候，子列表不让移动
                this.list.scrollBar.touchScrollEnable = this._isOpen;
                if (this._isOpen) {
                    // 翻轉
                    this.pushTweens(Laya.Tween.to(this.box, { scaleX: -1 }, 200));
                    // 翻轉中途替換圖片
                    Laya.timer.once(100, this, function () {
                        _this.img_back.visible = _this._isOpen;
                        _this.img_btn.visible = _this._avatar.visible = !_this._isOpen;
                    });
                }
                this._page.onClickBigBtn(this._index, this._isOpen, function () {
                    // 控制子列表显示与隐藏
                    _this.doSubList();
                    // 白色底图是否展开
                    if (_this._isOpen) {
                        // this.width = 1280;
                        _this.pushTweens(Laya.Tween.to(_this.img, { width: 1540 }, 100));
                    }
                    else {
                        // this.width = 533;
                        _this.pushTweens(Laya.Tween.to(_this.img, { width: 622 }, 100));
                        // 翻轉
                        _this.pushTweens(Laya.Tween.to(_this.box, { scaleX: 1 }, 200));
                        // 翻轉中途替換圖片
                        Laya.timer.once(100, _this, function () {
                            _this.img_back.visible = _this._isOpen;
                            _this.img_btn.visible = _this._avatar.visible = !_this._isOpen;
                        });
                    }
                });
            };
            /**
             * 控制子列表显示与隐藏
             */
            GameItemRender.prototype.doSubList = function () {
                var _this = this;
                if (!this.list || !this.list.cells)
                    return;
                var cells = this.list.cells;
                if (!this._isOpen) {
                    this.list.tweenTo(0, 500);
                }
                var i = 0;
                if (this._isOpen) { // 進場
                    this.list.cells.forEach(function (element) {
                        var cell = element;
                        if (cell.thisIndex < 4) {
                            cell.alpha = 1;
                        }
                        else {
                            cell.x += 200;
                            Laya.timer.once(100 * i, _this, function () {
                                _this.pushTweens(Laya.Tween.to(cell, { alpha: 1, x: cell.x - 200 }, 500));
                            });
                            i++;
                        }
                        // 波浪
                        var scale = Math.random() > 0.5 ? 1.05 : 0.95;
                        _this.pushTweens(Laya.Tween.from(cell, { scaleX: scale, scaleY: scale }, 500, Laya.Ease.backInOut));
                    });
                }
                else { // 離場
                    this.list.cells.forEach(function (element) {
                        var cell = element;
                        if (cell.thisIndex < 4) {
                            cell.alpha = 1;
                        }
                        else {
                            _this.pushTweens(Laya.Tween.to(cell, { alpha: 0 }, 200));
                        }
                        // 不管有哪个cell看不见，这边先 波浪 了~
                        var scale = Math.random() > 0.5 ? 1.05 : 0.95;
                        _this.pushTweens(Laya.Tween.from(cell, { scaleX: scale, scaleY: scale }, 500, Laya.Ease.backInOut));
                    });
                    // 虽然很恶心~~但是因为离场时的tween控制的cell，运动过程中，因为离开了画布，可能被回收并拿来填充其他数据了，不这么做会有可能某些视图看不见
                    Laya.timer.once(210, this, function () {
                        _this.list.cells.forEach(function (element) {
                            var cell = element;
                            if (cell.thisIndex < 4)
                                cell.alpha = 1;
                        });
                    });
                }
            };
            return GameItemRender;
        }(ui.nqp.dating.component.HudBtn_TUI));
        /**
         * 大厅入口 2 级list
         */
        var GameSubItemRender = /** @class */ (function (_super) {
            __extends(GameSubItemRender, _super);
            function GameSubItemRender() {
                return _super.call(this) || this;
            }
            GameSubItemRender.prototype.setData = function (game, data, index, thisIndex) {
                if (!data) {
                    this.visible = false;
                    return;
                }
                this.visible = true;
                this._game = game;
                this._data = data;
                this._index = index;
                this.thisIndex = thisIndex;
                this.show();
            };
            GameSubItemRender.prototype.destroy = function () {
                if (this._avatar) {
                    this._avatar.clear(true);
                    this._avatar.destroy();
                    this._avatar = null;
                }
                this.clearUpdate();
                this.clearProgress();
                this.off(LEvent.CLICK, this, this.onMouseHandle);
                _super.prototype.destroy.call(this);
            };
            GameSubItemRender.prototype.update = function (diff) {
                if (!this._data)
                    return;
                if (this._avatar) {
                    this._avatar.onDraw();
                }
                if (this._updateEffect) {
                    this._updateEffect.onDraw();
                }
                if (!LoadingMgr.ins.isLoaded(this._data) && LoadingMgr.ins.getProgress(this._data) >= 0.01) {
                    this.showProgress(LoadingMgr.ins.getProgress(this._data));
                    this.clearUpdate();
                }
                else {
                    this.clearProgress();
                }
            };
            GameSubItemRender.prototype.show = function () {
                if (!this._avatar) {
                    this._avatar = new AvatarUIShow();
                    this.btn.addChild(this._avatar);
                }
                var offset_x = this.thisIndex % 2 == 0 ? 18 : 0;
                var sk_url = DatingPath.sk_dating + "DZ_" + this._data;
                this._avatar.loadSkeleton(sk_url, this.btn.width / 2 + 5 + offset_x, this.btn.height / 2 + 18);
                this.on(LEvent.CLICK, this, this.onMouseHandle);
                // 是否显示更新标签
                if (!LoadingMgr.ins.isLoaded(this._data) && LoadingMgr.ins.getProgress(this._data) == 0)
                    this.showUpdate(offset_x);
            };
            GameSubItemRender.prototype.showUpdate = function (offset_x) {
                if (!this._updateEffect) {
                    this._updateEffect = new AnimationFrame({
                        source: 'update',
                        fileName: '',
                        interval: 12,
                        frameCount: 12,
                        start: 10000
                    });
                }
                this._updateEffect.x = this.width - 70 + offset_x;
                this._updateEffect.y = -15;
                this.addChild(this._updateEffect);
                this._updateEffect.play(true);
            };
            GameSubItemRender.prototype.clearUpdate = function () {
                if (this._updateEffect) {
                    this._updateEffect.destroy();
                    this._updateEffect = null;
                }
            };
            GameSubItemRender.prototype.showProgress = function (value) {
                if (!this._loadingTip) {
                    this._loadingTip = new HudLoadingTip();
                    this.addChild(this._loadingTip);
                    var offset_x = this.thisIndex % 2 == 0 ? 18 : 0;
                    this._loadingTip.x = this.width - 53 + offset_x;
                }
                this._loadingTip.progress = value;
                this._loadingTip.update();
            };
            GameSubItemRender.prototype.clearProgress = function () {
                if (this._loadingTip) {
                    this._loadingTip.destroy();
                    this._loadingTip = null;
                }
            };
            GameSubItemRender.prototype.onMouseHandle = function (e) {
                var _this = this;
                if (!this._data)
                    return;
                if (this._loadingTip) {
                    this._game.showTips("正在更新中...");
                    return;
                }
                this._game.uiRoot.btnTween(this._avatar, this, function () {
                    if (LoadingMgr.ins.isLoaded(_this._data)) {
                        _this.openPage();
                    }
                    else {
                        JsLoader.ins.startLoad(_this._data, Handler.create(_this, function (assets) {
                            LoadingMgr.ins.load(_this._data, assets);
                        }));
                    }
                });
            };
            GameSubItemRender.prototype.openPage = function () {
                var _this = this;
                var pageDef = getPageDef(this._data);
                //判断是否绑定了手机
                //游客绑定提示
                var mainPlayer = this._game.sceneObjectMgr.mainPlayer;
                var playerInfo = mainPlayer.playerInfo;
                if (!playerInfo)
                    return;
                if (!playerInfo.mobile) {
                    this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_GUEST_TIP);
                }
                //調試模式
                var CLOSE_LIST = isDebug ? [] : [];
                if (pageDef["__enterMapLv"]) {
                    this._game.sceneObjectMgr.intoStory(pageDef.GAME_NAME, pageDef["__enterMapLv"], true);
                }
                else if (CLOSE_LIST.indexOf(this._data) == -1) {
                    this._game.uiRoot.HUD.open(this._data + 1, function (page) {
                        page.dataSource = WebConfig.hudgametype = _this._index; // 等于type
                        _this._game.uiRoot.HUD.closeAll([_this._data + 1]);
                    }, function (page) {
                        // 场次返回大厅回调
                        if (_this._game.sceneObjectMgr.mainPlayer && !_this._game.sceneGame.inScene) {
                            _this._game.uiRoot.HUD.open(page_1.DatingPageDef.PAGE_HUD, null, null, false, 0);
                        }
                    });
                }
                else {
                    this._game.showTips("开发中,敬请期待!");
                }
            };
            return GameSubItemRender;
        }(ui.nqp.dating.component.HudOne_TUI));
        var HudLoadingTip = /** @class */ (function (_super) {
            __extends(HudLoadingTip, _super);
            function HudLoadingTip() {
                var _this = _super.call(this) || this;
                if (!_this._updateEffect) {
                    _this._updateEffect = new AnimationFrame({
                        source: 'loading',
                        fileName: '',
                        interval: 12,
                        frameCount: 24,
                        start: 10000
                    });
                }
                _this.box.addChild(_this._updateEffect);
                _this._updateEffect.play(true);
                _this._updateEffect.x = -3;
                _this._updateEffect.y = 30;
                _this.img.y = 30;
                _this.txt.text = "0%";
                return _this;
            }
            Object.defineProperty(HudLoadingTip.prototype, "progress", {
                set: function (value) {
                    this.txt.text = Math.round(value * 100) + "%";
                    this.img.y = (1 - value) * 30 + 3;
                    this._updateEffect.y = (1 - value) * 30 - 10;
                },
                enumerable: true,
                configurable: true
            });
            HudLoadingTip.prototype.destroy = function () {
                if (this._updateEffect) {
                    this._updateEffect.destroy();
                    this._updateEffect = null;
                }
                this.removeSelf();
                _super.prototype.destroy.call(this);
            };
            HudLoadingTip.prototype.update = function () {
                if (this._updateEffect) {
                    this._updateEffect.onDraw();
                }
            };
            return HudLoadingTip;
        }(ui.nqp.dating.component.LoadingTipTUI));
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=HudMainPage.js.map