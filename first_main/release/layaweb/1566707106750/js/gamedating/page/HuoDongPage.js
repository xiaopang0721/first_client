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
* name 活动
*/
var gamedating;
(function (gamedating) {
    var page;
    (function (page) {
        var HuoDongPage = /** @class */ (function (_super) {
            __extends(HuoDongPage, _super);
            function HuoDongPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this.list_proid = [];
                _this._asset = [
                    DatingPath.atlas_dating_ui + "huodong.atlas",
                    DatingPath.atlas_dating_ui + "tongyong.atlas",
                ];
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                return _this;
            }
            // 页面初始化函数
            HuoDongPage.prototype.init = function () {
                this._viewUI = this.createView("dating.HuoDongUI");
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            HuoDongPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.list_tab.vScrollBarSkin = "";
                this._viewUI.list_tab.scrollBar.elasticDistance = 100;
                this._viewUI.list_tab.itemRender = this.createChildren("dating.component.TabItemRender1UI", TabItemRender);
                this._viewUI.list_tab.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_tab.selectHandler = new Handler(this, this.selectHandler);
                this._viewUI.list_tab.scrollBar.on(LEvent.CHANGE, this, this.onChange);
                this._viewUI.list_tab.dataSource = [];
                this._viewUI.list_tab.selectedIndex = 0;
                this._viewUI.list_tab.visible = false;
                this._viewUI.myhd0.visible = false;
                this._viewUI.myhd1.visible = false;
                this._viewUI.txt.text = "";
                this._viewUI.txt_myhd.text = "";
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this._game.network.call_get_promo_list();
            };
            HuoDongPage.prototype.selectHandler = function (index) {
                this.updateSelectHandle();
            };
            HuoDongPage.prototype.updateSelectHandle = function () {
                var selectedIndex = this._viewUI.list_tab.selectedIndex;
                if (selectedIndex < 0)
                    return;
                if (!this._viewUI.list_tab.dataSource || !this._viewUI.list_tab.dataSource.length)
                    return;
                var selectedItem = this._viewUI.list_tab.dataSource[selectedIndex];
                if (!selectedItem)
                    return;
                for (var idx = 0; idx < this._viewUI.list_tab.dataSource.length; idx++) {
                    var data_1 = this._viewUI.list_tab.dataSource[idx];
                    if (data_1) {
                        this._viewUI.myhd0.visible = !selectedItem.img_url;
                        this._viewUI.myhd1.visible = selectedItem.img_url;
                        if (selectedItem.img_url) {
                            this._viewUI.img_myhd.skin = selectedItem.img_url;
                            this._viewUI.txt_myhd.text = selectedItem.content;
                            this._viewUI.txt_myhd.height = this._viewUI.txt_myhd.textField.textHeight;
                        }
                        else {
                            this._viewUI.txt.text = selectedItem.content;
                            this._viewUI.txt.height = this._viewUI.txt.textField.textHeight;
                        }
                    }
                }
            };
            HuoDongPage.prototype.onChange = function () {
                this._viewUI.img_next.visible = this._viewUI.list_tab.scrollBar.value < this._viewUI.list_tab.scrollBar.max;
                this._viewUI.img_prev.visible = this._viewUI.list_tab.scrollBar.value > this._viewUI.list_tab.scrollBar.min;
            };
            HuoDongPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            HuoDongPage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_GETPROMOLIST) {
                    if (data && data.success == 0) { //获取优惠活动
                        this._viewUI.list_tab.dataSource = data.msg && data.msg.list && data.msg.list.length > 0 ? data.msg.list : [];
                        this._viewUI.list_tab.visible = data.msg && data.msg.list && data.msg.list.length > 0;
                        for (var i = 0; i < data.msg.list.length; i++) {
                            if (data.msg.list[i]) {
                                this.list_proid[i] = data.msg.list[i].pro_id;
                            }
                        }
                        if (this.dataSource) {
                            this._viewUI.list_tab.selectedIndex = this.list_proid.indexOf(this.dataSource);
                        }
                        this.updateSelectHandle();
                    }
                }
            };
            HuoDongPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                }
                _super.prototype.close.call(this);
            };
            return HuoDongPage;
        }(game.gui.base.Page));
        page.HuoDongPage = HuoDongPage;
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
                if (!data || !data.title) {
                    this.visible = false;
                    return;
                }
                this.visible = true;
                this.dataSource = data;
                this.txt_name.text = data.title;
            };
            return TabItemRender;
        }(ui.dating.component.TabItemRender1UI));
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=HuoDongPage.js.map