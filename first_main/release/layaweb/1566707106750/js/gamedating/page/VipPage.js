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
    (function (page_1) {
        var VipPage = /** @class */ (function (_super) {
            __extends(VipPage, _super);
            function VipPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._vipList = [];
                _this._asset = [
                    DatingPath.atlas_dating_ui + "vip.atlas",
                ];
                _this._isNeedDuang = true;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                return _this;
            }
            // 页面初始化函数
            VipPage.prototype.init = function () {
                this._viewUI = this.createView("dating.VIPUI");
                this.addChild(this._viewUI);
                if (!this._htmlText) {
                    this._htmlText = TextFieldU.createHtmlText(this._viewUI.txt_tip);
                }
                this._viewUI.list_vip.hScrollBarSkin = "";
                this._viewUI.list_vip.scrollBar.elasticDistance = 100;
                this._viewUI.list_vip.itemRender = this.createChildren("dating.component.VipRenderUI", VipRender);
                this._viewUI.list_vip.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_vip.visible = false;
            };
            VipPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            // 页面打开时执行函数
            VipPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_chongzhi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_help.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                gamedating.DatingGame.ins.vipMgr.on(VipMgr.EVENT_VIP_CHANGE, this, this.onVipUpdate);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this._viewUI.ani1.on(LEvent.COMPLETE, this, this.onCompleteAni1);
                this._game.network.call_get_vip_list();
                this._viewUI.vip_cur.skin = StringU.substitute(DatingPath.ui_dating + "vip/tu_V{0}.png", WebConfig.info.vip_level);
                this._viewUI.vip_next.skin = StringU.substitute(DatingPath.ui_dating + "vip/tu_V{0}.png", WebConfig.info.vip_level + 1 > 10 ? 10 : WebConfig.info.vip_level + 1);
                this._viewUI.ani2.gotoAndStop(0);
            };
            VipPage.prototype.onCompleteAni1 = function () {
                this._viewUI.ani1.gotoAndStop(0);
                this._viewUI.ani2.play(0, false);
            };
            VipPage.prototype.onVipUpdate = function (type) {
                if (type == VipMgr.TYPE_VIP_LEVEL_CHANGE) { //vip等级变更
                    this._viewUI.ani1.play(0, false);
                    this.onUpdateJinDu();
                    this._viewUI.list_vip.dataSource = this._vipList;
                }
                else if (type == VipMgr.TYPE_VIP_RECHARGE_CHANGE) { //累充金额变更
                    this.onUpdateJinDu();
                }
                else if (type == VipMgr.TYPE_VIP_RECEIVED_CHANGE) { //vip奖励领取标识变更
                    this._viewUI.list_vip.dataSource = this._vipList;
                }
            };
            VipPage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_PLAYERLVLIST) { //获取vip等级列表
                    if (data && data.success == 0) {
                        if (data.msg.list && data.msg.list.length > 0) {
                            this._vipList = data.msg.list.splice(0, 10);
                            this._viewUI.list_vip.dataSource = this._vipList;
                            this._viewUI.list_vip.visible = this._vipList.length > 0;
                            this.onUpdateJinDu();
                        }
                    }
                }
                if (data.code == Web_operation_fields.CLIENT_IRCODE_PLAYERLVAWARE) { //领取vip等级奖励
                    if (data && data.success == 0) {
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_GET_REWARD, function (page) {
                            page.setData(gamedating.DatingGame.ins.vipMgr.award, DatingPath.ui_dating_tongyong + "jb_2.png");
                        });
                        this._viewUI.list_vip.dataSource = this._vipList;
                    }
                }
            };
            VipPage.prototype.onUpdateJinDu = function () {
                var mainPlayer = this._game.sceneGame.sceneObjectMgr.mainPlayer;
                if (!this._game.sceneGame.sceneObjectMgr.mainPlayer)
                    return;
                if (!this._vipList || !this._vipList.length)
                    return;
                var playerInfo = mainPlayer.playerInfo;
                var index = playerInfo.vip_level > 9 ? 9 : playerInfo.vip_level;
                var nextLeiChong = this._vipList[index].min_gems;
                this._viewUI.vip_cur.skin = StringU.substitute(DatingPath.ui_dating + "vip/tu_V{0}.png", playerInfo.vip_level);
                this._viewUI.vip_next.skin = StringU.substitute(DatingPath.ui_dating + "vip/tu_V{0}.png", playerInfo.vip_level + 1 > 10 ? 10 : playerInfo.vip_level + 1);
                this._viewUI.bar_jindu.value = playerInfo.total_recharge / nextLeiChong ? playerInfo.total_recharge / nextLeiChong : 0;
                this._viewUI.txt_jindu.text = playerInfo.vip_level < 10 ? playerInfo.total_recharge + "/" + nextLeiChong : "VIP已达满级";
                var zaiChong = nextLeiChong - playerInfo.total_recharge < 0 ? 0 : nextLeiChong - playerInfo.total_recharge;
                var nextLv = this._vipList[index].lv;
                var str1 = StringU.substitute("<span style='color:#ff0000'>{0}</span>", zaiChong);
                var str2 = StringU.substitute("<span style='color:#ff0000'>V{0}</span>", nextLv);
                var innerHtml = StringU.substitute("再充值{0}元，即可领取{1}豪礼，充值越多，福利越高。", str1, str2);
                this._htmlText.innerHTML = innerHtml;
                this._htmlText.visible = playerInfo.vip_level < 10;
            };
            VipPage.prototype.onBtnTweenEnd = function (e, target) {
                var _this = this;
                switch (target) {
                    case this._viewUI.btn_chongzhi: //充值
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_CHONGZHI);
                        break;
                    case this._viewUI.btn_help: //帮助
                        if (!this._vipList || !this._vipList.length)
                            return;
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_VIP_LEVEL, function (page) {
                            page.dataSource = _this._vipList;
                        });
                        break;
                }
            };
            VipPage.prototype.close = function () {
                if (this._viewUI) {
                    gamedating.DatingGame.ins.vipMgr.off(VipMgr.EVENT_VIP_CHANGE, this, this.onVipUpdate);
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                    this._viewUI.ani1.off(LEvent.COMPLETE, this, this.onCompleteAni1);
                }
                _super.prototype.close.call(this);
            };
            return VipPage;
        }(game.gui.base.Page));
        page_1.VipPage = VipPage;
        var VipRender = /** @class */ (function (_super) {
            __extends(VipRender, _super);
            function VipRender() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            VipRender.prototype.setData = function (game, data) {
                if (data.lv > 10) {
                    this.visible = false;
                    return;
                }
                this._game = game;
                this._data = data;
                var playerInfo = this._game.sceneGame.sceneObjectMgr.mainPlayer.playerInfo;
                this.txt_award.text = data.aware + "";
                this.txt_leiji.text = data.min_gems + "";
                this.img_vip.skin = StringU.substitute(DatingPath.ui_dating + "vip/btn_v{0}.png", data.lv);
                this.img_yilingqu.visible = playerInfo.vip_received.indexOf(data.lv) != -1;
                this.btn_get.visible = !this.img_yilingqu.visible;
                this.btn_get.disabled = playerInfo.vip_level < data.lv;
                this.btn_get.on(LEvent.CLICK, this, this.onClickGetHandle);
            };
            VipRender.prototype.onClickGetHandle = function (e) {
                var _this = this;
                if (this._game && this._data) {
                    this._game.uiRoot.btnTween(e.currentTarget, this, function () {
                        _this._game.network.call_get_vip_award(_this._data.lv);
                        gamedating.DatingGame.ins.vipMgr.award = _this._data.aware;
                    });
                }
            };
            VipRender.prototype.destory = function (destoryChildern) {
                if (destoryChildern === void 0) { destoryChildern = true; }
                _super.prototype.destroy.call(this, destoryChildern);
                this.btn_get.off(LEvent.CLICK, this, this.onClickGetHandle);
            };
            return VipRender;
        }(ui.dating.component.VipRenderUI));
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=VipPage.js.map