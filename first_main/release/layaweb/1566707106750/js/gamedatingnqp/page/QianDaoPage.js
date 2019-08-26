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
* name 签到
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page_1) {
        var QianDaoPage = /** @class */ (function (_super) {
            __extends(QianDaoPage, _super);
            function QianDaoPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._qiandaos = [];
                _this._awards = [];
                _this._asset = [
                    DatingPath.atlas_dating_ui + "qiandao.atlas",
                ];
                _this._isNeedDuang = true;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                return _this;
            }
            // 页面初始化函数
            QianDaoPage.prototype.init = function () {
                this._viewUI = this.createView("dating.QianDaoUI");
                this.addChild(this._viewUI);
                this._viewUI.btn_qiandao.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdateData);
                for (var i = 0; i < this._viewUI.box_qiandao.numChildren; i++) {
                    this._qiandaos[i] = this._viewUI["qiandao" + i];
                    this._qiandaos[i].visible = false;
                    if (i % 2 == 1) {
                        this._qiandaos[i].img.skin = DatingPath.ui_dating + "/qiandao/tu_qd03.png";
                    }
                }
                for (var i = 0; i < this._viewUI.box_award.numChildren; i++) {
                    this._awards[i] = this._viewUI["award" + i];
                }
            };
            QianDaoPage.prototype.onOptHandler = function (optcode, msg) {
                if (msg.type == Operation_Fields.OPRATE_GAME) {
                    switch (msg.reason) {
                        case Operation_Fields.OPRATE_GAME_SIGN_IN_SUCCESS:
                            this._qiandaos[this._days].visible = true;
                            this._qiandaos[this._days].ani1.play(0, false);
                            this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_GET_REWARD, function (page) {
                                page.setData(msg.data, DatingPath.ui_dating + "/qiandao/jl_4.png");
                            });
                            break;
                    }
                }
            };
            // 页面打开时执行函数
            QianDaoPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this.onUpdateData();
            };
            QianDaoPage.prototype.onUpdateData = function () {
                this._days = WebConfig.info.sign_in_days;
                for (var i = 0; i < this._qiandaos.length; i++) {
                    this._qiandaos[i].visible = this._days > i;
                }
                // this._isCanSign = !WebConfig.info.last_signin_time || !Sync.getIsToday(WebConfig.info.last_signin_time, this._game.sync.serverTimeBys);
                // this._viewUI.btn_qiandao.disabled = !WebConfig.info.is_can_qd;
            };
            QianDaoPage.prototype.onBtnTweenEnd = function (e, target) {
                if (target == this._viewUI.btn_qiandao) { //签到
                    if (WebConfig.info && !WebConfig.info.mobile) {
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDPHONE, function (page) {
                            page.dataSource = 3; //绑定手机类型
                        });
                        return;
                    }
                    if (WebConfig.info && WebConfig.info.is_need_bank && !WebConfig.info.yinhangka) {
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDYHK);
                        return;
                    }
                    if (WebConfig.info.is_can_qd) {
                        this._game.showTips("今日已成功签到，请明日再来！");
                        return;
                    }
                    this._game.network.call_signin();
                }
            };
            QianDaoPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdateData);
                }
                _super.prototype.close.call(this);
            };
            return QianDaoPage;
        }(game.gui.base.Page));
        page_1.QianDaoPage = QianDaoPage;
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=QianDaoPage.js.map