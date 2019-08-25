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
* name 活动公告
*/
var gamedating;
(function (gamedating) {
    var page;
    (function (page_1) {
        var HuoDongGongGaoPage = /** @class */ (function (_super) {
            __extends(HuoDongGongGaoPage, _super);
            function HuoDongGongGaoPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._activeList = [];
                _this._asset = [
                    DatingPath.atlas_dating_ui + "gonggao.atlas",
                ];
                _this._isNeedDuang = true;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                return _this;
            }
            // 页面初始化函数
            HuoDongGongGaoPage.prototype.init = function () {
                this._viewUI = this.createView("dating.GongGaoUI");
                this.addChild(this._viewUI);
                this._viewUI.img0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.list.vScrollBarSkin = "";
                this._viewUI.list.scrollBar.autoHide = false;
                this._viewUI.list.scrollBar.elasticDistance = 100;
                this._viewUI.list.itemRender = this.createChildren("dating.component.TabItemRenderUI", TabItemRender);
                this._viewUI.list.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list.selectHandler = new Handler(this, this.selectHandler);
                this._viewUI.tab.selectHandler = new Handler(this, this.tbselectHandler);
                this._viewUI.list.dataSource = [];
                this._viewUI.tab.selectedIndex = 0;
            };
            HuoDongGongGaoPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            HuoDongGongGaoPage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_GETACTIVELIST) { //公告
                    if (data && data.success == 0) {
                        this._activeList = (data.msg && data.msg.list && data.msg.list.length > 0) ? data.msg.list : [];
                        if (this._viewUI.tab.selectedIndex == 0) {
                            this._viewUI.list.selectedIndex = -1;
                            this._viewUI.list.dataSource = this._activeList;
                            if (this._activeList && this._activeList.length > 0) {
                                this._viewUI.list.selectedIndex = 0;
                            }
                            this._viewUI.box0.visible = this._activeList && this._activeList.length > 0;
                        }
                    }
                }
            };
            HuoDongGongGaoPage.prototype.selectHandler = function (index) {
                if (index === void 0) { index = 0; }
                var data = this._viewUI.list.dataSource[index];
                if (this._viewUI.tab.selectedIndex == 0 && data) {
                    this._viewUI.img0.skin = data.img_url;
                }
                else {
                    for (var indx = 0; indx < 3; indx++) {
                        this._viewUI["item" + indx].visible = indx == index;
                    }
                }
            };
            HuoDongGongGaoPage.prototype.tbselectHandler = function (index) {
                this._viewUI.list.selectedIndex = -1;
                if (index == 0) {
                    this._viewUI.list.dataSource = this._activeList;
                }
                else {
                    this._viewUI.list.dataSource = ["信誉保证", "新玩家必读", "反作弊公告"];
                }
                this._viewUI.list.selectedIndex = 0;
                for (var indx = 0; indx < 2; indx++) {
                    this._viewUI["box" + indx].visible = indx == index;
                }
            };
            // 页面打开时执行函数
            HuoDongGongGaoPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this._game.network.call_get_active_list();
            };
            HuoDongGongGaoPage.prototype.onBtnTweenEnd = function (e, target) {
                if (target == this._viewUI.img0) {
                    var indx = this._viewUI.list.selectedIndex;
                    var cc_1 = this._viewUI.list.dataSource[indx];
                    if (!cc_1 || !cc_1.endtime)
                        return;
                    if (cc_1.endtime < this._game.sceneGame.sync.serverTimeBys) {
                        this._game.network.call_get_active_list();
                    }
                    else {
                        if (cc_1.topopup > 1) {
                            if (cc_1.topopup == Web_operation_fields.GAME_GONGGAO_OPENPAGE_TYPE_CHONGZHI && WebConfig.info.isguest) { //充值
                                this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDPHONE); //游客弹出绑定手机
                                return;
                            }
                            else if (cc_1.topopup == Web_operation_fields.GAME_GONGGAO_OPENPAGE_TYPE_HUODONG) { //优惠活动
                                this._game.uiRoot.general.open(page_1.DatingPageDef.GONGGAO_GOTO[cc_1.topopup], function (page) {
                                    page.dataSource = cc_1.sub_topopup;
                                });
                                return;
                            }
                            else if (cc_1.topopup == Web_operation_fields.GAME_GONGGAO_OPENPAGE_TYPE_FANGKA) { //房卡标签
                                var page_2 = this._game.uiRoot.HUD.getPage(page_1.DatingPageDef.PAGE_HUD);
                                if (page_2) {
                                    page_2.tabToFangKa();
                                    this.close();
                                    return;
                                }
                            }
                            else {
                                this._game.uiRoot.general.open(page_1.DatingPageDef.GONGGAO_GOTO[cc_1.topopup]);
                                return;
                            }
                        }
                    }
                }
            };
            HuoDongGongGaoPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                }
                _super.prototype.close.call(this);
            };
            return HuoDongGongGaoPage;
        }(game.gui.base.Page));
        page_1.HuoDongGongGaoPage = HuoDongGongGaoPage;
        var TabItemRender = /** @class */ (function (_super) {
            __extends(TabItemRender, _super);
            function TabItemRender() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
              *
              * @param game
              * @param data
              */
            TabItemRender.prototype.setData = function (game, data) {
                this.dataSource = data;
                this.txt_name.text = data.title || data;
            };
            return TabItemRender;
        }(ui.dating.component.TabItemRenderUI));
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=HuoDongGongGaoPage.js.map