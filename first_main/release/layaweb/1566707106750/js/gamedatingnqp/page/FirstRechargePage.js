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
* name 首充
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page) {
        var FirstRechargePage = /** @class */ (function (_super) {
            __extends(FirstRechargePage, _super);
            function FirstRechargePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "shouchong.atlas",
                ];
                _this._isNeedDuang = false;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                return _this;
            }
            // 页面初始化函数
            FirstRechargePage.prototype.init = function () {
                this._viewUI = this.createView("dating.ShouChongUI");
                this.addChild(this._viewUI);
            };
            FirstRechargePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this.initClip();
                this.getData();
                if (!this._avatar) {
                    this._avatar = new AvatarUIShow();
                    this._viewUI.box_sk.addChild(this._avatar);
                }
                this._avatar.loadSkeleton(DatingPath.sk_dating + "shouchang", this._viewUI.box_sk.width / 2, this._viewUI.box_sk.height / 2 + 20);
                this._viewUI.box_btn.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
            };
            FirstRechargePage.prototype.update = function (diff) {
                if (this._avatar) {
                    this._avatar.onDraw();
                }
            };
            FirstRechargePage.prototype.onOptHandler = function (optcode, msg) {
                if (msg.type == Operation_Fields.OPRATE_GAME) { //游戏操作错误类型
                    switch (msg.reason) {
                        case Operation_Fields.OPRATE_GAME_FIRST_PAY_SUCCESS: // 领取成功
                            this._game.showTips("奖励领取成功哦~");
                            this.close();
                            break;
                    }
                }
            };
            FirstRechargePage.prototype.initClip = function () {
                if (!this._clipCZ) {
                    this._clipCZ = new DatingClip(DatingClip.SHOUCHONG_FONT0);
                    this._clipCZ.x = this._viewUI.clip_cz.x;
                    this._clipCZ.y = this._viewUI.clip_cz.y;
                    this._viewUI.clip_cz.parent.addChild(this._clipCZ);
                    this._viewUI.clip_cz.removeSelf();
                }
                if (!this._clipBack) {
                    this._clipBack = new DatingClip(DatingClip.SHOUCHONG_FONT);
                    this._clipBack.x = this._viewUI.clip_back.x;
                    this._clipBack.y = this._viewUI.clip_back.y;
                    this._viewUI.clip_back.parent.addChild(this._clipBack);
                    this._viewUI.clip_back.removeSelf();
                }
            };
            FirstRechargePage.prototype.getData = function () {
                this._gift_type = Number(FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_FIRSTPAYCONFIG_C, "gift_type")); //1是百分比 2是固定值
                this._viewUI.img_yuan.visible = false;
                this._viewUI.img_percent.visible = false;
                if (this._gift_type == 1) {
                    this._viewUI.img_percent.visible = true;
                }
                else if (this._gift_type == 2) {
                    this._viewUI.img_yuan.visible = true;
                }
                this._gift_val = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_FIRSTPAYCONFIG_C, "gift_val"); //赠送金额或者比例
                this._isopen = Number(FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_FIRSTPAYCONFIG_C, "isopen")); //是否开启首充 0是关闭 1开启
                this._pay_min = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_FIRSTPAYCONFIG_C, "pay_min"); //单笔首充最低金额
                this._clipBack.setText(this._gift_val, true);
                this._clipCZ.setText(this._pay_min, true);
                this.updateUI();
            };
            FirstRechargePage.prototype.updateUI = function () {
                var mainPlayer = this._game.sceneGame.sceneObjectMgr.mainPlayer;
                if (!mainPlayer)
                    return;
                var flag = mainPlayer.playerInfo.is_can_first_get;
                this._viewUI.btn_info.skin = DatingPath.ui_dating + "shouchong/" + (flag ? "tu_lq.png" : "tu_yjhd.png");
                this._viewUI.btn_info.tag = flag ? 1 : 2;
            };
            FirstRechargePage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.box_btn:
                        //领取或者前往充值
                        var tag = this._viewUI.btn_info.tag;
                        if (tag == 1) {
                            //领取
                            var mainPlayer = this._game.sceneGame.sceneObjectMgr.mainPlayer;
                            if (!mainPlayer)
                                return;
                            var isGet = mainPlayer.playerInfo.is_get_fitst_pay;
                            if (isGet) {
                                this._game.showTips("已经领取过了哦~");
                                return;
                            }
                            //协议
                            this._game.network.call_get_first_pay();
                        }
                        else if (tag == 2) {
                            //前往充值
                            this._game.uiRoot.general.open(page.DatingPageDef.PAGE_CHONGZHI);
                        }
                        break;
                }
            };
            FirstRechargePage.prototype.close = function () {
                this._game.datingGame.firstAlertPage();
                this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                if (this._avatar) {
                    this._avatar.clear();
                    this._avatar.destroy();
                    this._avatar = null;
                }
                if (this._viewUI) {
                }
                _super.prototype.close.call(this);
            };
            return FirstRechargePage;
        }(game.gui.base.Page));
        page.FirstRechargePage = FirstRechargePage;
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=FirstRechargePage.js.map