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
* name 公告
*/
var gamedating;
(function (gamedating) {
    var page;
    (function (page) {
        var GongGaoPage = /** @class */ (function (_super) {
            __extends(GongGaoPage, _super);
            function GongGaoPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                //跑马灯速度
                _this._speed = 120;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "gonggao.atlas",
                ];
                _this._isNeedDuang = false;
                _this._isNeedBlack = false;
                _this._isClickBlack = false;
                _this.mouseEnabled = false;
                _this.mouseThrough = true;
                return _this;
            }
            GongGaoPage.prototype.setSpeed = function (v) {
                this._speed = 120 + v;
            };
            // 页面初始化函数
            GongGaoPage.prototype.init = function () {
                this._viewUI = this.createView("dating.DaTingGgUI");
                this.addChild(this._viewUI);
                this._viewUI.mouseThrough = true;
                this.addChild(this._viewUI);
                this.initHtmlText();
            };
            GongGaoPage.prototype.initHtmlText = function () {
                if (!this._htmlText) {
                    this._htmlText = TextFieldU.createHtmlText(this._viewUI.txt_label);
                    this._htmlText.style.lineHeight = 45;
                    this._htmlText.style.valign = "middle";
                    this._htmlText.style.wordWrap = false;
                }
            };
            GongGaoPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                gamedating.DatingGame.ins.noticeMgr.on(NoticesMgr.EVENT_CHANGE, this, this.onUpdateNotes);
                this.onUpdateNotes();
            };
            GongGaoPage.prototype.onUpdateNotes = function () {
                if (this._isShowNotice)
                    return;
                var notice = gamedating.DatingGame.ins.noticeMgr.getNotice();
                if (notice) {
                    var obj = EnumToString.getGongGaoText(notice);
                    this._htmlText.innerHTML = obj.msg;
                    this._txtW = this._htmlText.contextWidth;
                    this._htmlText.x = this._viewUI.img_bg.width - 50;
                    this.layout();
                    this._total = (this._txtW + this._htmlText.x) * 1000 / this._speed;
                    this._time = 0;
                    this._isShowNotice = true;
                    this._viewUI.box_notice.visible = true;
                }
                else {
                    this._isShowNotice = false;
                    this._viewUI.box_notice.visible = false;
                }
            };
            GongGaoPage.prototype.layout = function () {
                _super.prototype.layout.call(this);
                this._htmlText && (this._from = this._htmlText.x);
                this._to = -this._txtW;
            };
            GongGaoPage.prototype.update = function (diff) {
                if (this._isShowNotice) {
                    if (this._total >= this._time) {
                        this._time += diff;
                        this._htmlText.x = MathU.lerp(this._from, this._to, this._time / this._total);
                    }
                    else {
                        this._isShowNotice = false;
                        this._viewUI.box_notice.visible = false;
                        this.onUpdateNotes();
                    }
                }
            };
            GongGaoPage.prototype.close = function () {
                gamedating.DatingGame.ins.noticeMgr.off(NoticesMgr.EVENT_CHANGE, this, this.onUpdateNotes);
                _super.prototype.close.call(this);
            };
            return GongGaoPage;
        }(game.gui.base.Page));
        page.GongGaoPage = GongGaoPage;
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=GongGaoPage.js.map