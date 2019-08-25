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
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page) {
        var KeFuPage = /** @class */ (function (_super) {
            __extends(KeFuPage, _super);
            function KeFuPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._tabItems = [];
                _this._zxKeFu = "";
                _this._keFu = [];
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
                this._viewUI.list_kefu.vScrollBarSkin = "";
                this._viewUI.list_kefu.scrollBar.elasticDistance = 100;
                this._viewUI.list_kefu.itemRender = this.createChildren("dating.component.KeFuRenderUI", KeFuItemRender);
                this._viewUI.list_kefu.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_kefu.scrollTo(this._scrollBarValue || 0);
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
                gamedatingnqp.DatingGame.ins.jianPanMgr.on(JianPanMgr.EVENT_KEYBOARD_SHOW, this, this.onJianPanShow);
                gamedatingnqp.DatingGame.ins.jianPanMgr.on(JianPanMgr.EVENT_KEYBOARD_HIDE, this, this.onJianPanHide);
                this._game.playSound(Path.music_kefu);
                this.onSucessHandler();
            };
            KeFuPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource, index + 1);
                }
            };
            KeFuPage.prototype.selectHandler = function (index) {
                this.updateSelect();
            };
            KeFuPage.prototype.updateSelect = function () {
                var btn0 = this._tabItems[KeFuPage.TYPE_LIANXI_KEFU];
                btn0 && (btn0.visible = (this._zxKeFu && this._zxKeFu.length > 0));
                var btn1 = this._tabItems[KeFuPage.TYPE_WEIXIN_KEFU];
                btn1 && (btn1.visible = (this._keFu && this._keFu.length > 0));
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
                else if (index == KeFuPage.TYPE_WEIXIN_KEFU) {
                    this._viewUI.list_kefu.scrollBar.stopScroll();
                    this._viewUI.list_kefu.dataSource = this._keFu;
                    this._viewUI.list_kefu.visible = this._keFu && this._keFu.length > 0;
                    this._viewUI.list_kefu.scrollTo(0);
                }
                this._viewUI.list_kefu.visible = index == KeFuPage.TYPE_WEIXIN_KEFU;
                this._viewUI.panel_wenti.visible = index == KeFuPage.TYPE_CHANGJIAN_WENTI;
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
            KeFuPage.prototype.onSucessHandler = function () {
                this._zxKeFu = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, 'serviceonline') || "";
                var qqkf = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, 'QQ_KF') || "";
                qqkf = qqkf.split(',');
                var wxkf = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, 'WX_KF') || "";
                wxkf = wxkf.split(',');
                if (qqkf && qqkf.length) {
                    for (var i = 0; i < qqkf.length; i++) {
                        var obj = { type: "QQ客服", head: StringU.substitute("tx_{0}.png", i + 1 > 10 ? "qq" : i + 1), num: qqkf[i] }; //头像和号码绑定
                        this._keFu.push(obj);
                    }
                }
                if (wxkf && wxkf.length) {
                    for (var i = 0; i < wxkf.length; i++) {
                        var obj = { type: "微信客服", head: StringU.substitute("tx_{0}.png", i + 11 > 20 ? "wx" : i + 11), num: wxkf[i] }; //头像和号码绑定
                        this._keFu.push(obj);
                    }
                }
                this._keFu.sort(this.randomSort);
                this.updateSelect();
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
                var p_w = this._viewUI.panel_onlinekf.width * this._game.clientScale;
                var p_h = this._viewUI.panel_onlinekf.height * this._game.clientScale;
                var b_w = this._viewUI.box.width * this._game.clientScale;
                var b_h = this._viewUI.box.height * this._game.clientScale;
                var x = 0;
                var y = 0;
                x = (Laya.stage.width - b_w) * .5 + (this._viewUI.panel_onlinekf.x * this._game.clientScale);
                y = (Laya.stage.height - b_h) * .5 + ((this._viewUI.panel_onlinekf.y) * this._game.clientScale);
                if (height) {
                    var bottom = (Laya.stage.height - b_h) * .5 + ((720 - this._viewUI.panel_onlinekf.y - this._viewUI.panel_onlinekf.height) * this._game.clientScale);
                    y = y - Number(height) + Number(bottom);
                }
                this._game.datingGame.resizeIframe(x, y, p_w, p_h);
            };
            KeFuPage.prototype.showIframe = function () {
                if (WebConfig.iframe)
                    return;
                if (!this._zxKeFu)
                    return;
                var p_w = this._viewUI.panel_onlinekf.width * this._game.clientScale;
                var p_h = this._viewUI.panel_onlinekf.height * this._game.clientScale;
                var b_w = this._viewUI.box.width * this._game.clientScale;
                var b_h = this._viewUI.box.height * this._game.clientScale;
                var x = 0;
                var y = 0;
                x = (Laya.stage.width - b_w) * .5 + (this._viewUI.panel_onlinekf.x * this._game.clientScale);
                y = (Laya.stage.height - b_h) * .5 + (this._viewUI.panel_onlinekf.y * this._game.clientScale);
                this._game.datingGame.showIframe(this._zxKeFu, x, y, p_w, p_h);
            };
            KeFuPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.list_kefu.dataSource = [];
                    gamedatingnqp.DatingGame.ins.jianPanMgr.off(JianPanMgr.EVENT_KEYBOARD_SHOW, this, this.onJianPanShow);
                    gamedatingnqp.DatingGame.ins.jianPanMgr.off(JianPanMgr.EVENT_KEYBOARD_HIDE, this, this.onJianPanHide);
                    this._game.datingGame.closeIframe();
                }
                _super.prototype.close.call(this);
            };
            KeFuPage.TYPE_CHANGJIAN_WENTI = 0; //常见问题
            KeFuPage.TYPE_WEIXIN_KEFU = 1; //微信/QQ客服
            KeFuPage.TYPE_LIANXI_KEFU = 2; //联系客服
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
                this.img_head.skin = DatingPath.ui_dating + 'kehu/' + data.head;
                this.txt_id.text = data.num;
                this.img_logo.skin = DatingPath.ui_dating + 'chongzhi/' + (data.type == "QQ客服" ? "QQH5.png" : "WXSM.png");
                this.txt_name.text = data.type + index;
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
        }(ui.nqp.dating.component.KeFuRenderUI));
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=KeFuPage.js.map