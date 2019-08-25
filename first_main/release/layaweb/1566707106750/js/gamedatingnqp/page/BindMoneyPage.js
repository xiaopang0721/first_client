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
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page_1) {
        var BindMoneyPage = /** @class */ (function (_super) {
            __extends(BindMoneyPage, _super);
            function BindMoneyPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._bindSendMoney = 0;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "bangding.atlas",
                    DatingPath.sk_dating + "bangdingsongjin.png",
                ];
                _this._isNeedBlack = true;
                return _this;
            }
            // 页面初始化函数
            BindMoneyPage.prototype.init = function () {
                this._viewUI = this.createView("dating.BangDingUI");
                this.addChild(this._viewUI);
                this._bindSendMoney = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, "reggivemoney");
                if (!this._clipBindMoney) {
                    this._clipBindMoney = new DatingClip(DatingClip.BIND_FONT);
                    this._clipBindMoney.x = this._viewUI.clip.x + (this._bindSendMoney > 9 ? -50 : 0);
                    this._clipBindMoney.y = this._viewUI.clip.y;
                    this._viewUI.clip.parent.addChild(this._clipBindMoney);
                    this._viewUI.clip.removeSelf();
                }
                this._clipBindMoney.setText(0, true);
            };
            // 页面打开时执行函数
            BindMoneyPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_bind.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                if (!this._avatar) {
                    this._avatar = new AvatarUIShow();
                    this._viewUI.box_sk.addChild(this._avatar);
                    this._avatar.loadSkeleton(DatingPath.sk_dating + "bangdingsongjin");
                }
                this._game.playSound(Path.music + "money.mp3");
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this.onUpdatePlayerInfo();
            };
            BindMoneyPage.prototype.update = function (diff) {
                if (this._avatar) {
                    this._avatar.onDraw();
                }
            };
            BindMoneyPage.prototype.onUpdatePlayerInfo = function () {
                if (!WebConfig.info)
                    return;
                if (!this._bindSendMoney || this._bindSendMoney <= 0) {
                    this.close();
                }
                else {
                    this._clipBindMoney.setText(this._bindSendMoney, true);
                }
            };
            BindMoneyPage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_PLAYERBIND) { //手机绑定成功
                    if (data && data.success == 0) {
                        if (data.msg.type == Web_operation_fields.ACCOUNT_TYPE_USERNAME) {
                            this.close();
                        }
                    }
                }
            };
            BindMoneyPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_bind: //注册
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDPHONE, function (page) {
                            page.dataSource = 3; //绑定手机类型
                        });
                        break;
                }
            };
            BindMoneyPage.prototype.close = function () {
                this._game.datingGame.firstAlertPage();
                if (this._viewUI) {
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                    if (this._clipBindMoney) {
                        this._clipBindMoney.removeSelf();
                        this._clipBindMoney.destroy();
                        this._clipBindMoney = null;
                    }
                    if (this._avatar) {
                        this._avatar.clear();
                        this._avatar.destroy();
                        this._avatar = null;
                    }
                }
                _super.prototype.close.call(this);
            };
            return BindMoneyPage;
        }(game.gui.base.Page));
        page_1.BindMoneyPage = BindMoneyPage;
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=BindMoneyPage.js.map