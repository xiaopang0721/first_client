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
* name 安卓游戏退出提示
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page) {
        var TipsQuit = /** @class */ (function (_super) {
            __extends(TipsQuit, _super);
            function TipsQuit(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + 'tongyong.atlas',
                ];
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                _this._isNeedDuang = false;
                return _this;
            }
            // 页面初始化函数
            TipsQuit.prototype.init = function () {
                this._viewUI = this.createView("dating.TiShiUI");
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            TipsQuit.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.lb_go.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_close.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_sure.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                var mainPlayer = this._game.sceneGame.sceneObjectMgr.mainPlayer;
                if (!mainPlayer)
                    return;
                this._viewUI.lb_consume.text = mainPlayer.playerInfo.today_score;
                this._viewUI.lb_jf.text = mainPlayer.playerInfo.today_score;
            };
            TipsQuit.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.lb_go:
                        this._game.uiRoot.general.open(page.DatingPageDef.PAGE_ZHUANPAN);
                        this.close();
                        break;
                    case this._viewUI.btn_close:
                        this.close();
                        break;
                    case this._viewUI.btn_sure:
                        //退出游戏
                        WebConfig && WebConfig.closeApp && WebConfig.closeApp();
                        break;
                }
            };
            TipsQuit.prototype.close = function () {
                _super.prototype.close.call(this);
            };
            return TipsQuit;
        }(game.gui.base.Page));
        page.TipsQuit = TipsQuit;
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=TipsQuit.js.map