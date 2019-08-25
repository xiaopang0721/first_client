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
* name 获得奖励
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page) {
        var RewardPage = /** @class */ (function (_super) {
            __extends(RewardPage, _super);
            function RewardPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "huode.atlas",
                ];
                _this._isNeedBlack = true;
                _this._isNeedDuang = false;
                return _this;
            }
            // 页面初始化函数
            RewardPage.prototype.init = function () {
                this._viewUI = this.createView("dating.HuoDeUI");
                this.addChild(this._viewUI);
            };
            RewardPage.prototype.setData = function (data, skin) {
                this._viewUI.txt_num.text = data + "金币";
                // this._viewUI.img.skin = skin || this._viewUI.img.skin;
            };
            // 页面打开时执行函数
            RewardPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
            };
            RewardPage.prototype.close = function () {
                if (this._viewUI) {
                }
                _super.prototype.close.call(this);
            };
            return RewardPage;
        }(game.gui.base.Page));
        page.RewardPage = RewardPage;
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=RewardPage.js.map