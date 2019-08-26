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
* name 捕鱼规则
*/
var gamebuyu;
(function (gamebuyu) {
    var page;
    (function (page) {
        var BuyuGuiZePage = /** @class */ (function (_super) {
            __extends(BuyuGuiZePage, _super);
            function BuyuGuiZePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    Path_game_buyu.atlas_game_ui + "buyu/guize.atlas",
                    Path_game_buyu.atlas_game_ui + "buyu/tongyong.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            BuyuGuiZePage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.buyu.BuYu_GuiZeUI');
                this.addChild(this._viewUI);
                this._viewUI.scale(1.1, 1.1);
                this._isNeedBlack = true;
                this._isClickBlack = true;
            };
            // 页面打开时执行函数
            BuyuGuiZePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.tab_Type.selectHandler = new Handler(this, this.selectHandler);
                this._viewUI.tab_Type.selectedIndex = 0;
                this._viewUI.panel_Content.vScrollBarSkin = "";
                //BOSS
                this._viewUI.list_1.itemRender = this.createChildren("game_ui.buyu.component.BangZhuItem1UI", HelpItem1);
                this._viewUI.list_1.hScrollBarSkin = '';
                this._viewUI.list_1.scrollBar.elasticDistance = 100;
                this._viewUI.list_1.spaceX = 5;
                this._viewUI.list_1.spaceY = 5;
                this._viewUI.list_1.renderHandler = new Handler(this, this.renderHandler1);
                this._viewUI.list_1.array = this.getDataByType(BuyuGuiZePage.TYPE_BOSS);
                //黄金鱼
                this._viewUI.list_2.itemRender = this.createChildren("game_ui.buyu.component.BangZhuItem1UI", HelpItem1);
                this._viewUI.list_2.hScrollBarSkin = '';
                this._viewUI.list_2.scrollBar.elasticDistance = 100;
                this._viewUI.list_2.spaceX = 5;
                this._viewUI.list_2.spaceY = 5;
                this._viewUI.list_2.renderHandler = new Handler(this, this.renderHandler1);
                this._viewUI.list_2.array = this.getDataByType(BuyuGuiZePage.TYPE_GOLD);
                //普通鱼
                this._viewUI.list_3.itemRender = this.createChildren("game_ui.buyu.component.BangZhuItem1UI", HelpItem1);
                this._viewUI.list_3.hScrollBarSkin = '';
                this._viewUI.list_3.repeatY = 2;
                this._viewUI.list_3.scrollBar.elasticDistance = 100;
                this._viewUI.list_3.spaceX = 5;
                this._viewUI.list_3.spaceY = 5;
                this._viewUI.list_3.renderHandler = new Handler(this, this.renderHandler1);
                this._viewUI.list_3.array = this.getDataByType(BuyuGuiZePage.TYPE_NORMAL);
                //特属鱼
                this._viewUI.list_4.itemRender = this.createChildren("game_ui.buyu.component.BangZhuItem2UI", HelpItem2);
                this._viewUI.list_4.hScrollBarSkin = '';
                this._viewUI.list_4.scrollBar.elasticDistance = 100;
                this._viewUI.list_4.spaceX = 5;
                this._viewUI.list_4.spaceY = 5;
                this._viewUI.list_4.renderHandler = new Handler(this, this.renderHandler1);
                this._viewUI.list_4.array = this.getDataByType(BuyuGuiZePage.TYPE_SPECIAL);
            };
            BuyuGuiZePage.prototype.selectHandler = function (index) {
                this._index = index;
                this.updateView();
            };
            BuyuGuiZePage.prototype.renderHandler1 = function (cell, index) {
                if (cell) {
                    cell.setData(cell.dataSource);
                }
            };
            BuyuGuiZePage.prototype.renderHandler2 = function (cell, index) {
                if (cell) {
                    cell.setData(cell.dataSource);
                }
            };
            BuyuGuiZePage.prototype.updateView = function () {
                this._viewUI.box_0.visible = this._index == BuyuGuiZePage.TAB_BS;
                this._viewUI.box_1.visible = this._index == BuyuGuiZePage.TAB_JJ;
            };
            BuyuGuiZePage.prototype.getDataByType = function (type) {
                if (!Template.data)
                    return;
                var dataArr = Template.data['tb_fish'];
                var len = dataArr.length;
                var resultArr = [];
                for (var i = 0; i < len; i++) {
                    var data_1 = dataArr[i];
                    if (!data_1)
                        continue;
                    if (type == BuyuGuiZePage.TYPE_SPECIAL) {
                        if (data_1.type >= BuyuGuiZePage.TYPE_SPECIAL)
                            resultArr.push(data_1);
                    }
                    else {
                        if (data_1.type == type)
                            resultArr.push(data_1);
                    }
                }
                return resultArr;
            };
            // 清理下页面
            BuyuGuiZePage.prototype.close = function () {
                _super.prototype.close.call(this);
            };
            BuyuGuiZePage.TAB_BS = 0; //倍數
            BuyuGuiZePage.TAB_JJ = 1; //简介
            BuyuGuiZePage.TYPE_NORMAL = 1;
            BuyuGuiZePage.TYPE_GOLD = 2;
            BuyuGuiZePage.TYPE_BOSS = 3;
            BuyuGuiZePage.TYPE_SPECIAL = 4;
            return BuyuGuiZePage;
        }(game.gui.base.Page));
        page.BuyuGuiZePage = BuyuGuiZePage;
        var HelpItem1 = /** @class */ (function (_super) {
            __extends(HelpItem1, _super);
            function HelpItem1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            HelpItem1.prototype.setData = function (value) {
                this.label_Name.text = value.name;
                this.label_Rate.text = "倍数:" + value.rate_range[0];
                this.image_Icon.skin = StringU.substitute(Path_game_buyu.ui_buyu + "guize/{0}.png", value.id);
            };
            return HelpItem1;
        }(ui.game_ui.buyu.component.BangZhuItem1UI));
        var HelpItem2 = /** @class */ (function (_super) {
            __extends(HelpItem2, _super);
            function HelpItem2() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            HelpItem2.prototype.setData = function (value) {
                this.label_Name.text = value.name;
                this.label_Rate.text = "倍数:" + value.rate_range[0] + "~" + value.rate_range[1];
                this.label_Desc.text = value.xiangqing;
                this.image_Icon.skin = StringU.substitute(Path_game_buyu.ui_buyu + "guize/{0}.png", value.id);
            };
            return HelpItem2;
        }(ui.game_ui.buyu.component.BangZhuItem2UI));
    })(page = gamebuyu.page || (gamebuyu.page = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=BuyuGuiZePage.js.map