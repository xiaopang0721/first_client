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
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page) {
        var HudSharePage = /** @class */ (function (_super) {
            __extends(HudSharePage, _super);
            function HudSharePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "fenxiang.atlas",
                    DatingPath.sk_dating + "caishen01.png",
                ];
                _this._isNeedBlack = true;
                return _this;
            }
            // 页面初始化函数
            HudSharePage.prototype.init = function () {
                this._viewUI = this.createView("dating.FenXiangUI");
                this.addChild(this._viewUI);
                if (!this._avatar) {
                    this._avatar = new AvatarUIShow();
                    this._viewUI.box_sk.addChild(this._avatar);
                }
            };
            // 页面打开时执行函数
            HudSharePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_wxhy.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_fxq.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                this._avatar.loadSkeleton(DatingPath.sk_dating + "caishen01", this._viewUI.box_sk.width / 2, this._viewUI.box_sk.height / 2 + 3);
                this.onUpdatePlayerInfo();
            };
            HudSharePage.prototype.update = function (diff) {
                if (this._avatar) {
                    this._avatar.onDraw();
                    this._viewUI.box_sk.addChild(this._avatar);
                }
            };
            HudSharePage.prototype.onUpdatePlayerInfo = function () {
                if (!this._clipJf) {
                    this._clipJf = new DatingClip(DatingClip.FENXIANG_FONT);
                    this._clipJf.x = this._viewUI.clip_money.x + (FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, "daysharegivemoney") > 9 ? -60 : 0);
                    this._clipJf.y = this._viewUI.clip_money.y;
                    this._viewUI.clip_money.parent && this._viewUI.clip_money.parent.addChild(this._clipJf);
                    this._viewUI.clip_money.removeSelf();
                }
                if (FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, "daysharegivemoney")) {
                    this._clipJf.setText(FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, "daysharegivemoney"), true, false);
                }
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
                    if (this._avatar) {
                        this._avatar.clear();
                        this._avatar.destroy();
                        this._avatar = null;
                    }
                }
                _super.prototype.close.call(this);
            };
            return HudSharePage;
        }(game.gui.base.Page));
        page.HudSharePage = HudSharePage;
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=HudSharePage.js.map