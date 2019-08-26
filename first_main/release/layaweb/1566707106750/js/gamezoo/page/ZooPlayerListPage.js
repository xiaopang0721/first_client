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
var gamezoo;
(function (gamezoo) {
    var page;
    (function (page) {
        var ZooPlayerListPage = /** @class */ (function (_super) {
            __extends(ZooPlayerListPage, _super);
            function ZooPlayerListPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                ];
                return _this;
            }
            ZooPlayerListPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.tongyong.WanJiaLBUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            ZooPlayerListPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.list_player.vScrollBarSkin = "";
                this._viewUI.list_player.scrollBar.autoHide = false;
                this._viewUI.list_player.scrollBar.elasticDistance = 100;
                this._viewUI.list_player.itemRender = this.createChildren("game_ui.tongyong.WanJiaUI", PlayerItemRender);
                this._viewUI.list_player.renderHandler = new Handler(this, this.renderHandler);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUpdateUnit);
                this.onUpdateUnit();
                this._viewUI.list_player.dataSource = this.dataSource;
            };
            ZooPlayerListPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            ZooPlayerListPage.prototype.onUpdateUnit = function () {
                var unitList = [];
                for (var key in this._game.sceneObjectMgr.unitDic) {
                    if (this._game.sceneObjectMgr.unitDic.hasOwnProperty(key)) {
                        var unit = this._game.sceneObjectMgr.unitDic[key];
                        if (unit) {
                            unitList.push(unit);
                        }
                    }
                }
                unitList.sort(function (a, b) {
                    return a.GetMoney() > b.GetMoney() ? -1 : 1;
                });
                var len = unitList.length > 20 ? 20 : unitList.length;
                var playerList = [];
                for (var i = 0; i < len; i++) {
                    var obj = { unit: unitList[i], index: i + 1 };
                    playerList.push(obj);
                }
                this._viewUI.list_player.dataSource = playerList;
            };
            ZooPlayerListPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.list_player.vScrollBarSkin = null;
                }
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUpdateUnit);
                _super.prototype.close.call(this);
            };
            return ZooPlayerListPage;
        }(game.gui.base.Page));
        page.ZooPlayerListPage = ZooPlayerListPage;
        var PlayerItemRender = /** @class */ (function (_super) {
            __extends(PlayerItemRender, _super);
            function PlayerItemRender() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._nameStrInfo = ["xs", "px", "gsy", "gg", "cs", "tdg"];
                return _this;
            }
            PlayerItemRender.prototype.setData = function (game, data) {
                this._game = game;
                this._unit = data.unit;
                this._index = data.index;
                this.txt_name.text = this._unit.GetName();
                this.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._unit.GetHeadImg() + ".png";
                if (this._unit.GetQiFuType() && this._unit.GetQiFuEndTime() > this._game.sync.serverTimeBys) {
                    this.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[this._unit.GetQiFuType() - 1] + ".png";
                }
                this.img_txk.visible = this._unit.GetVipLevel() > 0;
                if (this.img_txk.visible) {
                    this.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + this._unit.GetVipLevel() + ".png";
                }
                if (!this._clipNum) {
                    this._clipNum = new ZooClip(ZooClip.RANK_FONT2);
                    this._clipNum.x = this.clip_num.x;
                    this._clipNum.y = this.clip_num.y;
                    this.clip_num.parent.addChild(this._clipNum);
                    this.clip_num.visible = false;
                }
                this._clipNum.setText(this._index + "", true, false);
                if (!this._clipMoney) {
                    this._clipMoney = new ZooClip(ZooClip.MONEY_FONT2);
                    this._clipMoney.x = this.clip_money.x;
                    this._clipMoney.y = this.clip_money.y;
                    this.clip_money.parent.addChild(this._clipMoney);
                    this.clip_money.visible = false;
                }
                this._clipMoney.setText(EnumToString.getPointBackNum(this._unit.GetMoney(), 2).toString(), true, false);
            };
            return PlayerItemRender;
        }(ui.game_ui.tongyong.WanJiaUI));
    })(page = gamezoo.page || (gamezoo.page = {}));
})(gamezoo || (gamezoo = {}));
//# sourceMappingURL=ZooPlayerListPage.js.map