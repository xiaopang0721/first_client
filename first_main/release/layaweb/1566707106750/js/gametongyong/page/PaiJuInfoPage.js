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
var gametongyong;
(function (gametongyong) {
    var page;
    (function (page) {
        var PaiJuInfoPage = /** @class */ (function (_super) {
            __extends(PaiJuInfoPage, _super);
            function PaiJuInfoPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            PaiJuInfoPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.tongyong.PaiJu_xqUI');
                this.addChild(this._viewUI);
                this._viewUI.list_info.dataSource = [];
            };
            // 页面打开时执行函数
            PaiJuInfoPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                BattleXiangQingMgr.ins.on(BattleXiangQingMgr.RECORD_CHANGE, this, this.onUpdateInfo);
                this._viewUI.list_info.vScrollBarSkin = "";
                this._viewUI.list_info.scrollBar.elasticDistance = 100;
                this._viewUI.list_info.itemRender = this.createChildren("game_ui.tongyong.PaiJu_xqTUI", PaiJuItemRender);
                this._viewUI.list_info.renderHandler = new Handler(this, this.renderHandler);
            };
            PaiJuInfoPage.prototype.renderHandler = function (cell, index) {
                // if (index == 0) {
                // 	this._h = 0;
                // }
                // cell.y = this._h
                // this._h += cell.height
            };
            PaiJuInfoPage.prototype.getDataInfo = function (battle_id, game_id, time) {
                this._battle_id = battle_id;
                this._game_id = game_id;
                this._time = time;
                var data = BattleXiangQingMgr.ins.getDataInfo(this._battle_id, this._game_id, this._time);
                this.onUpdateInfo(battle_id, data);
            };
            PaiJuInfoPage.prototype.onUpdateInfo = function (battleid, data) {
                if (!data || battleid != this._battle_id)
                    return;
                var allArr = data.split("#");
                if (allArr.length == 1) {
                    this._viewUI.txt_info.text = allArr[0];
                    this._viewUI.list_info.visible = false;
                    this._viewUI.txt_info.visible = true;
                    this._viewUI.txt_request.visible = false;
                }
                else {
                    this._viewUI.list_info.dataSource = allArr;
                    this._viewUI.list_info.visible = true;
                    this._viewUI.txt_info.visible = false;
                    this._viewUI.txt_request.visible = false;
                }
            };
            PaiJuInfoPage.prototype.close = function () {
                if (this._viewUI) {
                    BattleXiangQingMgr.ins.off(BattleXiangQingMgr.RECORD_CHANGE, this, this.onUpdateInfo);
                }
                _super.prototype.close.call(this);
            };
            return PaiJuInfoPage;
        }(game.gui.base.Page));
        page.PaiJuInfoPage = PaiJuInfoPage;
        var PaiJuItemRender = /** @class */ (function (_super) {
            __extends(PaiJuItemRender, _super);
            function PaiJuItemRender() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(PaiJuItemRender.prototype, "dataSource", {
                set: function (v) {
                    if (!v || v == "") {
                        this.visible = false;
                        return;
                    }
                    this.visible = true;
                    var infoArr = v.split("|");
                    this.txt_title.text = "";
                    this.txt_info.text = "";
                    if (infoArr.length == 1) {
                        //没有标题信息
                        this.txt_info.x = 0;
                        this.txt_info.text = infoArr[0];
                    }
                    else {
                        this.txt_info.x = 110;
                        this.txt_title.text = infoArr[0];
                        this.txt_info.text = infoArr[1];
                    }
                    this.height = this.txt_info.textField.height;
                },
                enumerable: true,
                configurable: true
            });
            return PaiJuItemRender;
        }(ui.game_ui.tongyong.PaiJu_xqTUI));
    })(page = gametongyong.page || (gametongyong.page = {}));
})(gametongyong || (gametongyong = {}));
//# sourceMappingURL=PaiJuInfoPage.js.map