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
* name 邮件界面
*/
var gamedating;
(function (gamedating) {
    var page;
    (function (page_1) {
        var MailPage = /** @class */ (function (_super) {
            __extends(MailPage, _super);
            function MailPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "xinxi.atlas",
                ];
                _this._isNeedBlack = true;
                return _this;
            }
            // 页面初始化函数
            MailPage.prototype.init = function () {
                this._viewUI = this.createView("dating.XinXiUI");
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            MailPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.list.vScrollBarSkin = "";
                this._viewUI.list.scrollBar.elasticDistance = 100;
                this._viewUI.list.itemRender = this.createChildren("dating.component.XinXi_lbUI", GameItemRender);
                this._viewUI.list.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list.visible = false;
                gamedating.DatingGame.ins.mailMgr.on(MailMgr.EVENT_CHANGE, this, this.onUpdateMail);
                this.onUpdateMail();
            };
            MailPage.prototype.onUpdateMail = function () {
                var arr = gamedating.DatingGame.ins.mailMgr.mails;
                if (arr.length > 0) {
                    this._viewUI.list.dataSource = arr;
                }
                this._viewUI.list.visible = arr && arr.length > 0;
                this._viewUI.txt_no.visible = !this._viewUI.list.visible;
            };
            MailPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            MailPage.prototype.onBtnTweenEnd = function (e, target) {
            };
            MailPage.prototype.close = function () {
                if (this._viewUI) {
                    gamedating.DatingGame.ins.mailMgr.off(MailMgr.EVENT_CHANGE, this, this.onUpdateMail);
                }
                _super.prototype.close.call(this);
            };
            return MailPage;
        }(game.gui.base.Page));
        page_1.MailPage = MailPage;
        var GameItemRender = /** @class */ (function (_super) {
            __extends(GameItemRender, _super);
            function GameItemRender() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameItemRender.prototype.setData = function (game, data) {
                this._game = game;
                this._data = data;
                this.txt_title.text = data.title;
                this.txt_name.text = data.mail_from;
                this.txt_time.text = Sync.getTimeStr(data.mail_time * 1000);
                this.btn_dingyue.visible = data.isread > 0;
                this.on(LEvent.CLICK, this, this.onMouseHandle);
            };
            GameItemRender.prototype.onMouseHandle = function () {
                var _this = this;
                if (!this._data.isread) {
                    gamedating.DatingGame.ins.mailMgr.readMail(this._data.id);
                }
                this._game.uiRoot.general.open(page_1.DatingPageDef.PANEL_NEW_OPEN, function (page) {
                    page.setData(_this._data);
                });
            };
            return GameItemRender;
        }(ui.dating.component.XinXi_lbUI));
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=MailPage.js.map