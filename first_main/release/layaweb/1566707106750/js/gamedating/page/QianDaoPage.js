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
var gamedating;
(function (gamedating) {
    var page;
    (function (page_1) {
        var QianDaoPage = /** @class */ (function (_super) {
            __extends(QianDaoPage, _super);
            function QianDaoPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._days = -1;
                _this._imgs = [];
                _this._txts = [];
                _this._icons = [];
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
                this._viewUI.list.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list.dataSource = [0, 0, 0, 0, 0, 0, 0];
                this._viewUI.btn_qiandao.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_xq.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
            };
            QianDaoPage.prototype.onSucessHandler = function (data) {
                var _this = this;
                if (data.code == Web_operation_fields.CLIENT_IRCODE_GETSIGNIN) {
                    if (data && data.success == 0) {
                        this._last_signin_time = data.msg.last_signin_time;
                        this._days = data.msg.days;
                        this.onUpdateData();
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_SIGINCFG) {
                    if (data && data.success == 0) {
                        this._msglist = data.msg.list;
                        this.onUpdateData();
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_SIGIN) {
                    if (data && data.success == 0) {
                        this._days = data.msg.days;
                        this._last_signin_time = data.msg.signin_time;
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_GET_REWARD, function (page) {
                            page.setData(data.msg.award, _this._icons[_this._days - 1].skin);
                        });
                        this.onUpdateData();
                    }
                }
            };
            QianDaoPage.prototype.onUpdateData = function () {
                if (this._days < 0 || !this._msglist) {
                    return;
                }
                for (var index = 0; index < this._msglist.length; index++) {
                    this._msglist[index]["days"] = this._days;
                }
                this._isCanSign = !this._last_signin_time || !Sync.getIsToday(this._last_signin_time, this._game.sceneGame.sync.serverTimeBys);
                this._viewUI.list.dataSource = this._msglist;
                // this._viewUI.btn_qiandao.disabled = !this._isCanSign;
            };
            QianDaoPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    var ylq = this._imgs[index];
                    var txt = this._txts[index];
                    var icon = this._icons[index];
                    if (!ylq) {
                        this._imgs[index] = ylq = cell.getChildByName("ylq");
                        this._icons[index] = icon = cell.getChildByName("img");
                        this._txts[index] = txt = cell.getChildByName("txt");
                    }
                    ylq.visible = cell.dataSource.days > index;
                    txt.text = cell.dataSource.award_name;
                    cell.visible = cell.dataSource != 0;
                }
            };
            // 页面打开时执行函数
            QianDaoPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._game.network.call_get_siginin();
                this._game.network.call_get_signincfg();
            };
            QianDaoPage.prototype.onBtnTweenEnd = function (e, target) {
                if (target == this._viewUI.btn_qiandao) { //签到
                    if (WebConfig.info && !WebConfig.info.mobile) {
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDPHONE);
                        return;
                    }
                    if (WebConfig.info && WebConfig.info.is_need_bank && !WebConfig.info.yinhangka) {
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDYHK);
                        return;
                    }
                    if (!this._isCanSign) {
                        this._game.showTips("今日已成功签到，请明日再来！");
                        return;
                    }
                    this._game.network.call_siginin();
                }
                else if (target == this._viewUI.btn_xq) { //详情
                    this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_QIANDAOXQ);
                }
            };
            QianDaoPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                }
                _super.prototype.close.call(this);
            };
            return QianDaoPage;
        }(game.gui.base.Page));
        page_1.QianDaoPage = QianDaoPage;
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=QianDaoPage.js.map