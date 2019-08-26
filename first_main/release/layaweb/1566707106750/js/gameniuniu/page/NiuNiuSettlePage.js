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
* name
*/
var gameniuniu;
(function (gameniuniu) {
    var page;
    (function (page) {
        var NiuNiuSettlePage = /** @class */ (function (_super) {
            __extends(NiuNiuSettlePage, _super);
            function NiuNiuSettlePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            NiuNiuSettlePage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.niuniu.JieSuanUI');
                this.addChild(this._viewUI);
                this._niuStory = this._game.sceneObjectMgr.story;
                this._niuMgr = this._niuStory.niuMgr;
            };
            // 页面打开时执行函数
            NiuNiuSettlePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.list_settle.vScrollBarSkin = "";
                this._viewUI.list_settle.scrollBar.elasticDistance = 100;
                this._viewUI.list_settle.itemRender = this.createChildren("game_ui.niuniu.component.JieSuanCardRenderUI", ListRecordItem);
                this._viewUI.list_settle.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_settle.dataSource = this.dataSource[3];
                this._endTime = this.dataSource[2];
                this._viewUI.lab_xinxi.visible = this.dataSource[0];
                this._viewUI.btn_create_room.visible = false;
                this._viewUI.btn_back_hud.visible = false;
                this._viewUI.btn_create_room.visible = this.dataSource[0] == this.dataSource[1];
                this._viewUI.btn_back_hud.visible = this.dataSource[0] == this.dataSource[1];
                this._viewUI.btn_create_room.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back_hud.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            };
            //按钮点击
            NiuNiuSettlePage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_create_room:
                        this._game.uiRoot.general.open(page.NiuniuPageDef.PAGE_NIUNIU_CREATE_CARDROOM);
                        this.close();
                        break;
                    case this._viewUI.btn_back_hud:
                        this._game.sceneObjectMgr.leaveStory(true);
                        this.close();
                        break;
                }
            };
            NiuNiuSettlePage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            NiuNiuSettlePage.prototype.deltaUpdate = function () {
                if (!this._viewUI)
                    return;
                var curTime = this._game.sync.serverTimeBys;
                var time = Math.floor(this._endTime - curTime) + 1;
                if (time > 0) {
                    var str = time + "s后开始第" + (this.dataSource[0] + 1) + "局，本轮共" + this.dataSource[1] + "局";
                    this._viewUI.lab_xinxi.text = str;
                }
                else {
                    if (!this._viewUI.btn_create_room.visible) {
                        this.close();
                    }
                    else {
                        var str = "游戏结束，本轮共" + this.dataSource[1] + "局";
                        this._viewUI.lab_xinxi.text = str;
                    }
                }
            };
            NiuNiuSettlePage.prototype.close = function () {
                this._viewUI.btn_create_room.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back_hud.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                _super.prototype.close.call(this);
            };
            return NiuNiuSettlePage;
        }(game.gui.base.Page));
        page.NiuNiuSettlePage = NiuNiuSettlePage;
        var ListRecordItem = /** @class */ (function (_super) {
            __extends(ListRecordItem, _super);
            function ListRecordItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ListRecordItem.prototype.setData = function (game, data) {
                this._game = game;
                this._data = data;
                this.img_bg.visible = this._data.isMain;
                this.img_banker.visible = this._data.isbanker;
                this.lab_name.text = this._data.name;
                this.lab_difen.text = this._data.difen.toString();
                this.lab_betRate.text = this._data.betRate;
                this.lab_bankerRate.text = this._data.bankerRate;
                this.lab_jifen.text = this._data.jiFen.toString();
                this.lab_totalJiFen.text = this._data.totalJiFen.toString();
                this.lab_cardtype.text = this._data.cardtype;
                this.lab_name.color = this._data.isMain ? "#cc90ff" : "#ffffff";
                this.lab_difen.color = this._data.isMain ? "#cc90ff" : "#ffffff";
                this.lab_betRate.color = this._data.isMain ? "#cc90ff" : "#ffffff";
                this.lab_jifen.color = parseFloat(this._data.jiFen) >= 0 ? "#069e00" : "#ff0000";
                this.lab_totalJiFen.color = parseFloat(this._data.totalJiFen) >= 0 ? "#069e00" : "#ff0000";
                this.lab_bankerRate.color = this._data.isMain ? "#cc90ff" : "#ffffff";
                this.lab_cardtype.color = this._data.isMain ? "#cc90ff" : "#ffffff";
            };
            ListRecordItem.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            return ListRecordItem;
        }(ui.game_ui.niuniu.component.JieSuanCardRenderUI));
    })(page = gameniuniu.page || (gameniuniu.page = {}));
})(gameniuniu || (gameniuniu = {}));
//# sourceMappingURL=NiuNiuSettlePage.js.map