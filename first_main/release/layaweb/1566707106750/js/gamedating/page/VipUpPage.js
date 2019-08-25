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
var gamedating;
(function (gamedating) {
    var page;
    (function (page) {
        var VipUpPage = /** @class */ (function (_super) {
            __extends(VipUpPage, _super);
            function VipUpPage(v, onOpenFunc, onCloseFunc) {
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
            VipUpPage.prototype.init = function () {
                this._viewUI = this.createView("dating.VipUpUI");
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            VipUpPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.clip_num.index = this._game.sceneGame.sceneObjectMgr.mainPlayer.playerInfo.vip_level - 1;
                this._viewUI.btn_goto.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            };
            VipUpPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_goto: //前往vip
                        this._game.uiRoot.general.open(page.DatingPageDef.PAGE_VIP);
                        this.close();
                        break;
                }
            };
            VipUpPage.prototype.close = function () {
                if (this._viewUI) {
                }
                _super.prototype.close.call(this);
            };
            return VipUpPage;
        }(game.gui.base.Page));
        page.VipUpPage = VipUpPage;
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=VipUpPage.js.map