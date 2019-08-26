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
* name 更改昵称
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page) {
        var GengGaiNCPage = /** @class */ (function (_super) {
            __extends(GengGaiNCPage, _super);
            function GengGaiNCPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "geren.atlas",
                ];
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                return _this;
            }
            // 页面初始化函数
            GengGaiNCPage.prototype.init = function () {
                this._viewUI = this.createView("dating.GeRenNCUI");
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            GengGaiNCPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_clear.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_enter.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.txt_name.on(LEvent.FOCUS, this, this.onFocus);
                this._viewUI.txt_name.on(LEvent.BLUR, this, this.onBlur);
                this._viewUI.txt_name.on(LEvent.INPUT, this, this.ChangeTextInput);
                this.ChangeTextInput();
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
            };
            GengGaiNCPage.prototype.onUpdatePlayerInfo = function () {
                var mainPlayer = this._game.sceneGame.sceneObjectMgr.mainPlayer;
                if (!mainPlayer)
                    return;
                var playerInfo = mainPlayer.playerInfo;
                if (!playerInfo)
                    return;
                if (playerInfo.isNicknameChanged) {
                    this._game.showTips("修改昵称成功哦~");
                    this.close();
                }
            };
            GengGaiNCPage.prototype.ChangeTextInput = function () {
                //长度
                this._viewUI.btn_enter.visible = false;
                this._viewUI.box_lb.visible = true;
                var len = getTextLength(this._viewUI.txt_name.text, 2);
                if (len <= 0 || len > this._viewUI.txt_name.maxChars) {
                    // this._game.showTips("名字超过最大限度！")
                    return;
                }
                this._viewUI.btn_enter.visible = true;
                this._viewUI.box_lb.visible = false;
            };
            GengGaiNCPage.prototype.onFocus = function (input) {
                if (input == this._viewUI.txt_name) {
                    this._viewUI.box.centerY = -100;
                }
            };
            GengGaiNCPage.prototype.onBlur = function (input) {
                if (input == this._viewUI.txt_name) {
                    this._viewUI.box.centerY = 0;
                }
            };
            GengGaiNCPage.prototype.onBtnTweenEnd = function (e, target) {
                if (target == this._viewUI.btn_clear) {
                    this._viewUI.txt_name.text = "";
                }
                else if (target == this._viewUI.btn_enter) {
                    // this._game.network.call_set_info("", "", "", "", "", this._viewUI.txt_name.text);
                    this._game.network.call_set_role_info(2, this._viewUI.txt_name.text);
                }
            };
            GengGaiNCPage.prototype.close = function () {
                this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                if (this._viewUI) {
                    this._viewUI.txt_name.off(LEvent.FOCUS, this, this.onFocus);
                    this._viewUI.txt_name.off(LEvent.BLUR, this, this.onBlur);
                }
                _super.prototype.close.call(this);
            };
            return GengGaiNCPage;
        }(game.gui.base.Page));
        page.GengGaiNCPage = GengGaiNCPage;
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=GengGaiNCPage.js.map