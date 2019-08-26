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
* name vip
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page) {
        var VipLevelPage = /** @class */ (function (_super) {
            __extends(VipLevelPage, _super);
            function VipLevelPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "vip.atlas",
                ];
                _this._isNeedDuang = false;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                return _this;
            }
            // 页面初始化函数
            VipLevelPage.prototype.init = function () {
                this._viewUI = this.createView("dating.VipLevelUI");
                this.addChild(this._viewUI);
                this._viewUI.list_vip.vScrollBarSkin = "";
                this._viewUI.list_vip.scrollBar.elasticDistance = 100;
                this._viewUI.list_vip.itemRender = this.createChildren("dating.component.VipLevelRenderUI", VipLevelRender);
                this._viewUI.list_vip.renderHandler = new Handler(this, this.renderHandler);
            };
            VipLevelPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            // 页面打开时执行函数
            VipLevelPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.list_vip.dataSource = this.dataSource;
            };
            VipLevelPage.prototype.close = function () {
                if (this._viewUI) {
                }
                _super.prototype.close.call(this);
            };
            return VipLevelPage;
        }(game.gui.base.Page));
        page.VipLevelPage = VipLevelPage;
        var VipLevelRender = /** @class */ (function (_super) {
            __extends(VipLevelRender, _super);
            function VipLevelRender() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            VipLevelRender.prototype.setData = function (game, data) {
                if (data.lv > 10)
                    return;
                this._game = game;
                this._data = data;
                this.txt_level.text = data.name;
                this.txt_award.text = data.aware + "";
                this.txt_leichong.text = data.min_gems + "";
                this.img_bg.skin = StringU.substitute(DatingPath.ui_dating_tongyong + "tu_bb{0}.png", data.id % 2 == 0 ? 1 : 2);
            };
            return VipLevelRender;
        }(ui.nqp.dating.component.VipLevelRenderUI));
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=VipLevelPage.js.map