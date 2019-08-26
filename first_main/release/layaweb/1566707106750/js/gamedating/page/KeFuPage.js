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
* name 客服
*/
var gamedating;
(function (gamedating) {
    var page;
    (function (page) {
        var KeFuPage = /** @class */ (function (_super) {
            __extends(KeFuPage, _super);
            function KeFuPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._tabItems = [];
                _this._zxKeFu = "";
                _this._qqKeFu = [];
                _this._wxKeFu = [];
                _this._asset = [
                    DatingPath.atlas_dating_ui + "kehu.atlas",
                ];
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                return _this;
            }
            // 页面初始化函数
            KeFuPage.prototype.init = function () {
                this._viewUI = this.createView("dating.KeHuUI");
                this.addChild(this._viewUI);
                this._viewUI.list_kefu.visible = false;
                this._viewUI.list_kefu.hScrollBarSkin = "";
                this._viewUI.list_kefu.scrollBar.elasticDistance = 100;
                this._viewUI.list_kefu.itemRender = this.createChildren("dating.component.KeFuRenderUI", KeFuItemRender);
                this._viewUI.list_kefu.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_kefu.scrollBar.changeHandler = new Handler(this, this.changeHandler);
                this._viewUI.list_kefu.scrollTo(this._scrollBarValue || 0);
                this._viewUI.img_next.visible = false;
                this._viewUI.img_prev.visible = false;
                for (var index = 0; index < this._viewUI.tab_kefu.numChildren; index++) {
                    var item = this._viewUI.tab_kefu.getChildByName("item" + index);
                    item.visible = (index == KeFuPage.TYPE_CHANGJIAN_WENTI);
                    this._tabItems[index] = item;
                }
                this._viewUI.tab_kefu.selectHandler = new Handler(this, this.selectHandler);
                this._viewUI.tab_kefu.selectedIndex = KeFuPage.TYPE_CHANGJIAN_WENTI;
            };
            // 页面打开时执行函数
            KeFuPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                gamedating.DatingGame.ins.jianPanMgr.on(JianPanMgr.EVENT_KEYBOARD_SHOW, this, this.onJianPanShow);
                gamedating.DatingGame.ins.jianPanMgr.on(JianPanMgr.EVENT_KEYBOARD_HIDE, this, this.onJianPanHide);
                this._game.network.call_get_service();
                this._game.playSound(Path.music_kefu);
            };
            KeFuPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource, index + 1);
                }
            };
            KeFuPage.prototype.changeHandler = function (value) {
                if (!this._viewUI.list_kefu.dataSource || !this._viewUI.list_kefu.dataSource.length)
                    return;
                this._scrollBarValue = value;
                this._viewUI.img_next.visible = this._viewUI.list_kefu.scrollBar.value < this._viewUI.list_kefu.scrollBar.max;
                this._viewUI.img_prev.visible = this._viewUI.list_kefu.scrollBar.value > this._viewUI.list_kefu.scrollBar.min;
            };
            KeFuPage.prototype.selectHandler = function (index) {
                this.updateSelect();
            };
            KeFuPage.prototype.updateSelect = function () {
                var btn0 = this._tabItems[KeFuPage.TYPE_LIANXI_KEFU];
                btn0 && (btn0.visible = (this._zxKeFu && this._zxKeFu.length > 0));
                var btn1 = this._tabItems[KeFuPage.TYPE_QQ_KEFU];
                btn1 && (btn1.visible = (this._qqKeFu && this._qqKeFu.length > 0));
                var btn2 = this._tabItems[KeFuPage.TYPE_WEIXIN_KEFU];
                btn2 && (btn2.visible = (this._wxKeFu && this._wxKeFu.length > 0));
                this.updatePos();
                var index = this._viewUI.tab_kefu.selectedIndex;
                if (index == KeFuPage.TYPE_LIANXI_KEFU) {
                    if (!WebConfig.info.is_outer_jump) {
                        this.showIframe();
                    }
                    else {
                        WebConfig.openUrl(this._zxKeFu);
                        return;
                    }
                }
                else if (index == KeFuPage.TYPE_QQ_KEFU) {
                    this._viewUI.list_kefu.scrollBar.stopScroll();
                    this._viewUI.list_kefu.dataSource = this._qqKeFu;
                    this._viewUI.list_kefu.visible = this._qqKeFu && this._qqKeFu.length > 0;
                    this._viewUI.list_kefu.scrollTo(0);
                    this._viewUI.img_next.visible = this._qqKeFu.length > 10;
                }
                else if (index == KeFuPage.TYPE_WEIXIN_KEFU) {
                    this._viewUI.list_kefu.scrollBar.stopScroll();
                    this._viewUI.list_kefu.dataSource = this._wxKeFu;
                    this._viewUI.list_kefu.visible = this._wxKeFu && this._wxKeFu.length > 0;
                    this._viewUI.list_kefu.scrollTo(0);
                    this._viewUI.img_next.visible = this._wxKeFu.length > 10;
                }
                this._viewUI.img_next.visible = index == KeFuPage.TYPE_QQ_KEFU || index == KeFuPage.TYPE_WEIXIN_KEFU;
                this._viewUI.img_prev.visible = index == KeFuPage.TYPE_QQ_KEFU || index == KeFuPage.TYPE_WEIXIN_KEFU;
                this._viewUI.list_kefu.visible = index == KeFuPage.TYPE_QQ_KEFU || index == KeFuPage.TYPE_WEIXIN_KEFU;
                this._viewUI.panel.visible = index == KeFuPage.TYPE_CHANGJIAN_WENTI;
                !WebConfig.info.is_outer_jump && this._game.datingGame.visibleIframe(index == KeFuPage.TYPE_LIANXI_KEFU);
            };
            KeFuPage.prototype.onJianPanShow = function (height) {
                this.resizeIframe(height);
            };
            KeFuPage.prototype.onJianPanHide = function () {
                this.resizeIframe();
            };
            KeFuPage.prototype.updatePos = function () {
                var total_y = this._tabItems[0].y;
                for (var index = 0; index < this._tabItems.length; index++) {
                    var btn = this._tabItems[index];
                    if (!btn || !btn.visible)
                        continue;
                    btn.y = total_y;
                    total_y += btn.height + 4;
                }
            };
            KeFuPage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_SERVICEONLINE) {
                    if (data && data.success == 0) { //平台获取客服信息
                        if (data.msg) {
                            this._zxKeFu = data.msg.zxkf || "";
                            if (data.msg.qqkf && data.msg.qqkf.length) {
                                for (var i = 0; i < data.msg.qqkf.length; i++) {
                                    var obj = { type: "QQ客服", head: StringU.substitute(DatingPath.ui_dating + "kehu/tx_{0}.png", i + 1 > 10 ? "qq" : i + 1), num: data.msg.qqkf[i] }; //头像和号码绑定
                                    this._qqKeFu[i] = obj;
                                }
                                this._qqKeFu.sort(this.randomSort);
                            }
                            if (data.msg.wxkf && data.msg.wxkf.length) {
                                for (var i = 0; i < data.msg.wxkf.length; i++) {
                                    var obj = { type: "微信客服", head: StringU.substitute(DatingPath.ui_dating + "kehu/tx_{0}.png", i + 11 > 20 ? "wx" : i + 11), num: data.msg.wxkf[i] }; //头像和号码绑定
                                    this._wxKeFu[i] = obj;
                                }
                                this._wxKeFu.sort(this.randomSort);
                            }
                        }
                        this.updateSelect();
                    }
                }
            };
            KeFuPage.prototype.randomSort = function (a, b) {
                return Math.random() > 0.5 ? -1 : 1;
            };
            KeFuPage.prototype.update = function (diff) {
                _super.prototype.update.call(this, diff);
            };
            //重新布局
            KeFuPage.prototype.layout = function () {
                _super.prototype.layout.call(this);
                this.resizeIframe();
                if (!this._viewUI.list_kefu)
                    return;
                this._viewUI.list_kefu.refresh();
            };
            KeFuPage.prototype.resizeIframe = function (height) {
                if (!WebConfig.iframe)
                    return;
                var p_w = this._viewUI.panel.width * this._game.clientScale;
                var p_h = this._viewUI.panel.height * this._game.clientScale;
                var b_w = this._viewUI.box.width * this._game.clientScale;
                var b_h = this._viewUI.box.height * this._game.clientScale;
                var x = 0;
                var y = 0;
                x = (Laya.stage.width - b_w) * .5 + (this._viewUI.panel.x * this._game.clientScale);
                y = (Laya.stage.height - b_h) * .5 + ((this._viewUI.panel.y) * this._game.clientScale);
                if (height) {
                    var bottom = (Laya.stage.height - b_h) * .5 + ((720 - this._viewUI.panel.y - this._viewUI.panel.height) * this._game.clientScale);
                    y = y - Number(height) + Number(bottom);
                }
                this._game.datingGame.resizeIframe(x, y, p_w, p_h);
            };
            KeFuPage.prototype.showIframe = function () {
                if (WebConfig.iframe)
                    return;
                if (!this._zxKeFu)
                    return;
                var p_w = this._viewUI.panel.width * this._game.clientScale;
                var p_h = this._viewUI.panel.height * this._game.clientScale;
                var b_w = this._viewUI.box.width * this._game.clientScale;
                var b_h = this._viewUI.box.height * this._game.clientScale;
                var x = 0;
                var y = 0;
                x = (Laya.stage.width - b_w) * .5 + (this._viewUI.panel.x * this._game.clientScale);
                y = (Laya.stage.height - b_h) * .5 + (this._viewUI.panel.y * this._game.clientScale);
                this._game.datingGame.showIframe(this._zxKeFu, x, y, p_w, p_h);
            };
            KeFuPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.list_kefu.dataSource = [];
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                    gamedating.DatingGame.ins.jianPanMgr.off(JianPanMgr.EVENT_KEYBOARD_SHOW, this, this.onJianPanShow);
                    gamedating.DatingGame.ins.jianPanMgr.off(JianPanMgr.EVENT_KEYBOARD_HIDE, this, this.onJianPanHide);
                    this._game.datingGame.closeIframe();
                }
                _super.prototype.close.call(this);
            };
            KeFuPage.TYPE_CHANGJIAN_WENTI = 0; //常见问题
            KeFuPage.TYPE_WEIXIN_KEFU = 1; //微信客服
            KeFuPage.TYPE_QQ_KEFU = 2; //QQ客服
            KeFuPage.TYPE_LIANXI_KEFU = 3; //联系客服
            return KeFuPage;
        }(game.gui.base.Page));
        page.KeFuPage = KeFuPage;
        var KeFuItemRender = /** @class */ (function (_super) {
            __extends(KeFuItemRender, _super);
            function KeFuItemRender() {
                return _super.call(this) || this;
            }
            KeFuItemRender.prototype.setData = function (game, data, index) {
                this._game = game;
                this._data = data;
                if (!this._data) {
                    this.visible = false;
                    return;
                }
                this.visible = true;
                this.img_head.skin = data.head;
                this.txt_id.text = data.type + index;
                this.txt_number.text = data.num;
                this.txt_name.text = "";
                this.btn_link.label = data.type == "QQ客服" ? "联系QQ客服" : "复制微信号";
                this.btn_link.on(LEvent.CLICK, this, this.onMouseHandle);
            };
            KeFuItemRender.prototype.onMouseHandle = function (e) {
                var _this = this;
                this._game.uiRoot.btnTween(e.currentTarget, this, function () {
                    if (_this._data.type == "QQ客服") {
                        _this._game.datingGame.qqOpen(_this._data.num);
                    }
                    else {
                        WebConfig.copyTxt(_this._data.num);
                        _this._game.datingGame.wxOpen();
                        _this._game.showTips("复制成功");
                    }
                });
            };
            KeFuItemRender.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            return KeFuItemRender;
        }(ui.dating.component.KeFuRenderUI));
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=KeFuPage.js.map