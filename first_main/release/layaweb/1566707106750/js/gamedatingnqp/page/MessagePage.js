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
* name 活动公告
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page_1) {
        var MessagePage = /** @class */ (function (_super) {
            __extends(MessagePage, _super);
            function MessagePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._activeList = [];
                _this._asset = [
                    DatingPath.atlas_dating_ui + "xinxi.atlas",
                ];
                _this._isNeedDuang = true;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                return _this;
            }
            // 页面初始化函数
            MessagePage.prototype.init = function () {
                this._viewUI = this.createView("dating.XinXiUI");
                this.addChild(this._viewUI);
                this._viewUI.list_gonggao.vScrollBarSkin = "";
                this._viewUI.list_gonggao.scrollBar.autoHide = false;
                this._viewUI.list_gonggao.scrollBar.elasticDistance = 100;
                this._viewUI.list_gonggao.itemRender = this.createChildren("dating.XinXi_lb2UI", GongGaoItemRender);
                this._viewUI.list_gonggao.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_gonggao.dataSource = [];
                this._viewUI.list_mail.vScrollBarSkin = "";
                this._viewUI.list_mail.scrollBar.autoHide = false;
                this._viewUI.list_mail.scrollBar.elasticDistance = 100;
                this._viewUI.list_mail.itemRender = this.createChildren("dating.component.XinXi_lbUI", MailItemRender);
                this._viewUI.list_mail.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_mail.dataSource = [];
                this._viewUI.tab.selectHandler = new Handler(this, this.tabSelectHandler);
                this._viewUI.tab.selectedIndex = 0;
            };
            // 页面打开时执行函数
            MessagePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                var gonggao = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_GAMEBULLETIN_C, '');
                for (var key in gonggao) {
                    this._activeList.push(gonggao[key]);
                }
                if (this._activeList) {
                    this._viewUI.list_gonggao.selectedIndex = -1;
                    this._viewUI.list_gonggao.dataSource = this._activeList;
                    if (this._activeList && this._activeList.length > 0) {
                        this._viewUI.list_gonggao.selectedIndex = 0;
                    }
                    this._viewUI.list_gonggao.visible = this._activeList && this._activeList.length > 0;
                    this._viewUI.txt_no_gonggao.visible = !this._viewUI.list_gonggao.visible;
                }
                this._game.datingGame.mailMgr.on(MailMgr.EVENT_CHANGE, this, this.onUpdateMail);
                this.onUpdateMail();
            };
            MessagePage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            MessagePage.prototype.tabSelectHandler = function (index) {
                this._viewUI.box_gonggao.visible = index + 1 == MessagePage.TYPE_GONGGAO;
                this._viewUI.box_mail.visible = index + 1 == MessagePage.TYPE_MAIL;
            };
            MessagePage.prototype.onUpdateMail = function () {
                var arr = this._game.datingGame.mailMgr.mails;
                if (arr.length > 0) {
                    this._viewUI.list_mail.dataSource = arr;
                }
                this._viewUI.list_mail.visible = arr && arr.length > 0;
                this._viewUI.txt_no_mail.visible = !this._viewUI.list_mail.visible;
            };
            MessagePage.prototype.close = function () {
                this._game.datingGame.firstAlertPage();
                if (this._viewUI) {
                    this._game.datingGame.mailMgr.off(MailMgr.EVENT_CHANGE, this, this.onUpdateMail);
                }
                _super.prototype.close.call(this);
            };
            MessagePage.TYPE_GONGGAO = 1; //公告类型
            MessagePage.TYPE_MAIL = 2; //邮件类型
            return MessagePage;
        }(game.gui.base.Page));
        page_1.MessagePage = MessagePage;
        var GongGaoItemRender = /** @class */ (function (_super) {
            __extends(GongGaoItemRender, _super);
            function GongGaoItemRender() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GongGaoItemRender.prototype.setData = function (game, data) {
                this._game = game;
                this._data = data;
                this.txt_title.text = data.title;
                this.txt_name.text = data.create_user;
                this.txt_content.text = data.desc;
                this.txt_time.text = Sync.getTimeStr(data.create_time * 1000);
                this.on(LEvent.CLICK, this, this.onMouseHandle);
            };
            GongGaoItemRender.prototype.onMouseHandle = function () {
                var _this = this;
                if (!this._data.isread) {
                    this._game.datingGame.mailMgr.readMail(this._data.id);
                }
                this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_NEW_GONGGAO, function (page) {
                    page.setData(_this._data);
                });
            };
            return GongGaoItemRender;
        }(ui.nqp.dating.XinXi_lb2UI));
        var MailItemRender = /** @class */ (function (_super) {
            __extends(MailItemRender, _super);
            function MailItemRender() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MailItemRender.prototype.setData = function (game, data) {
                this._game = game;
                this._data = data;
                this.txt_title.text = data.title;
                this.txt_name.text = data.mail_from;
                this.txt_content.text = data.desc;
                this.txt_time.text = Sync.getTimeStr(data.mail_time * 1000);
                this.btn_dingyue.visible = data.isread > 0;
                this.on(LEvent.CLICK, this, this.onMouseHandle);
            };
            MailItemRender.prototype.onMouseHandle = function () {
                var _this = this;
                if (!this._data.isread) {
                    this._game.datingGame.mailMgr.readMail(this._data.id);
                }
                this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_NEW_OPEN, function (page) {
                    page.setData(_this._data);
                });
            };
            return MailItemRender;
        }(ui.nqp.dating.component.XinXi_lbUI));
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=MessagePage.js.map