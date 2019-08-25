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
* name 推广
*/
var gamedating;
(function (gamedating) {
    var page;
    (function (page) {
        var HudSharePage = /** @class */ (function (_super) {
            __extends(HudSharePage, _super);
            function HudSharePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "fenxiang.atlas",
                ];
                _this._isNeedBlack = true;
                return _this;
            }
            // 页面初始化函数
            HudSharePage.prototype.init = function () {
                this._viewUI = this.createView("dating.FenXiangUI");
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            HudSharePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_wxhy.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_fxq.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                this.onUpdatePlayerInfo();
            };
            HudSharePage.prototype.onUpdatePlayerInfo = function () {
                if (!WebConfig.info)
                    return;
                if (!this._clipJf) {
                    this._clipJf = new DatingClip(DatingClip.FENXIANG_FONT);
                    this._clipJf.x = this._viewUI.clip_money.x + (WebConfig.info.daysharegivemoney > 9 ? -3 : 0);
                    this._clipJf.y = this._viewUI.clip_money.y;
                    this._viewUI.clip_money.parent && this._viewUI.clip_money.parent.addChild(this._clipJf);
                    this._viewUI.clip_money.removeSelf();
                }
                this._clipJf.setText(WebConfig.info.daysharegivemoney, true, false);
                this._viewUI.img_yuan.left = this._clipJf.width + 32;
            };
            HudSharePage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_wxhy: //分享微信好友
                        this._game.datingGame.wxShareQrcodeImg("", "", Web_operation_fields.WXSCENESESSION);
                        break;
                    case this._viewUI.btn_fxq: //分享朋友圈
                        this._game.datingGame.wxShareQrcodeImg("", "", Web_operation_fields.WXSCENETIMELINE);
                        break;
                }
            };
            HudSharePage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                    if (this._clipJf) {
                        this._clipJf.removeSelf();
                        this._clipJf.destroy();
                        this._clipJf = null;
                    }
                }
                _super.prototype.close.call(this);
            };
            return HudSharePage;
        }(game.gui.base.Page));
        page.HudSharePage = HudSharePage;
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=HudSharePage.js.map