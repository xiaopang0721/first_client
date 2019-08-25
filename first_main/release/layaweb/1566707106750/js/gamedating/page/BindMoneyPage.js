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
* name 绑定送钱
*/
var gamedating;
(function (gamedating) {
    var page;
    (function (page) {
        var BindMoneyPage = /** @class */ (function (_super) {
            __extends(BindMoneyPage, _super);
            function BindMoneyPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "bangding.atlas",
                ];
                _this._isNeedBlack = true;
                return _this;
            }
            // 页面初始化函数
            BindMoneyPage.prototype.init = function () {
                this._viewUI = this.createView("dating.BangDingUI");
                this.addChild(this._viewUI);
                if (!this._clipBindMoney) {
                    this._clipBindMoney = new DatingClip(DatingClip.BIND_FONT);
                    this._clipBindMoney.x = this._viewUI.clip.x;
                    this._clipBindMoney.y = this._viewUI.clip.y;
                    this._clipBindMoney.right = 0;
                    this._viewUI.clip.parent.addChild(this._clipBindMoney);
                    this._viewUI.clip.removeSelf();
                }
                this._clipBindMoney.setText(0, true);
            };
            // 页面打开时执行函数
            BindMoneyPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_zhuce.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.playSound(Path.music + "money.mp3");
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                this.onUpdatePlayerInfo();
            };
            BindMoneyPage.prototype.onUpdatePlayerInfo = function () {
                if (!WebConfig.info)
                    return;
                if (!WebConfig.info.bindSendMoney || WebConfig.info.bindSendMoney <= 0) {
                    this.close();
                }
                else {
                    this._clipBindMoney.setText(WebConfig.info.bindSendMoney, true);
                }
            };
            BindMoneyPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_zhuce: //注册
                        this._game.uiRoot.general.open(page.DatingPageDef.PAGE_BINDPHONE);
                        break;
                }
            };
            BindMoneyPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                    if (this._clipBindMoney) {
                        this._clipBindMoney.removeSelf();
                        this._clipBindMoney.destroy();
                        this._clipBindMoney = null;
                    }
                }
                _super.prototype.close.call(this);
            };
            return BindMoneyPage;
        }(game.gui.base.Page));
        page.BindMoneyPage = BindMoneyPage;
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=BindMoneyPage.js.map