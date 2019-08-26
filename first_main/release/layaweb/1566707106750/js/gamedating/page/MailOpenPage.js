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
* name 邮件打开界面
*/
var gamedating;
(function (gamedating) {
    var page;
    (function (page) {
        var MailOpenPage = /** @class */ (function (_super) {
            __extends(MailOpenPage, _super);
            function MailOpenPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "xinxi.atlas",
                ];
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                return _this;
            }
            // 页面初始化函数
            MailOpenPage.prototype.init = function () {
                this._viewUI = this.createView("dating.XinXi1UI");
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            MailOpenPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_shanchu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            };
            MailOpenPage.prototype.onBtnTweenEnd = function (e, target) {
                var _this = this;
                if (target == this._viewUI.btn_shanchu) {
                    this._game.alert("确定要删除该邮件?", function () {
                        gamedating.DatingGame.ins.mailMgr.delMail(_this._data.id, function (data) {
                            _this.close();
                        });
                    }, function () {
                    }, false);
                }
            };
            MailOpenPage.prototype.setData = function (data) {
                this._data = data;
                this._viewUI.txt_content.text = data.context;
                this._viewUI.txt_content.height = this._viewUI.txt_content.textField.textHeight;
            };
            MailOpenPage.prototype.close = function () {
                if (this._viewUI) {
                }
                _super.prototype.close.call(this);
            };
            return MailOpenPage;
        }(game.gui.base.Page));
        page.MailOpenPage = MailOpenPage;
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=MailOpenPage.js.map