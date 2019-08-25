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
* 红黑大战走势界面
*/
var gamehonghei;
(function (gamehonghei) {
    var page;
    (function (page) {
        var HongheiZoushiPage = /** @class */ (function (_super) {
            __extends(HongheiZoushiPage, _super);
            function HongheiZoushiPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                _this._isNeedDuang = false;
                _this._asset = [
                    Path_game_honghei.atlas_game_ui + "honghei.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            HongheiZoushiPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.honghei.HongHeiZouShiTuUI');
                this.addChild(this._viewUI);
                var textureTypes = {
                    "R": PathGameTongyong.ui_tongyong_general + "tu_yq2.png",
                    "B": PathGameTongyong.ui_tongyong_general + "tu_yq1.png",
                };
                this._gridEditor = new GridEditor(31.93, 31.7, 20, 6, textureTypes, false);
                this._gridEditor.x = 63;
                this._gridEditor.y = 103;
                this._viewUI.list_game_result.parent.addChild(this._gridEditor);
            };
            HongheiZoushiPage.prototype.renderHandler1 = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            HongheiZoushiPage.prototype.renderHandler2 = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            // 页面打开时执行函数
            HongheiZoushiPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.list_game_result.itemRender = this.createChildren("game_ui.honghei.component.HongHeiHongDianUI", MapRecordRender1);
                this._viewUI.list_game_result.renderHandler = new Handler(this, this.renderHandler1);
                this._viewUI.list_card_type.itemRender = this.createChildren("game_ui.honghei.component.DuiZiUI", MapRecordRender2);
                this._viewUI.list_card_type.renderHandler = new Handler(this, this.renderHandler2);
                this._game.sceneObjectMgr.on(HongheiMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord); //游戏记录更新
                this._game.sceneObjectMgr.on(HongheiMapInfo.EVENT_CARD_RECORD, this, this.onUpdateCardRecord); //牌型更新
                this._game.sceneObjectMgr.on(HongheiMapInfo.EVENT_ROAD_RECORD, this, this.onUpdateRoadRecord); //大路游戏更新
                this._game.sceneObjectMgr.on(HongheiMapInfo.EVENT_ROAD_POS, this, this.onUpdateRoadRecord); //大路坐标更新
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo); //大路坐标更新
                this.onUpdateMapInfo();
                this.onUpdateRecord();
                this.onUpdateCardRecord();
                this.onUpdateRoadRecord();
            };
            HongheiZoushiPage.prototype.onUpdateMapInfo = function () {
                this._hongheiMapInfo = this._game.sceneObjectMgr.mapInfo;
                if (this._hongheiMapInfo) {
                    this.onUpdateRecord();
                    this.onUpdateCardRecord();
                    this.onUpdateRoadRecord();
                }
            };
            HongheiZoushiPage.prototype.close = function () {
                this._game.sceneObjectMgr.off(HongheiMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord); //游戏记录更新
                this._game.sceneObjectMgr.off(HongheiMapInfo.EVENT_CARD_RECORD, this, this.onUpdateCardRecord); //牌型更新
                this._game.sceneObjectMgr.off(HongheiMapInfo.EVENT_ROAD_RECORD, this, this.onUpdateRoadRecord); //大路游戏更新
                this._game.sceneObjectMgr.off(HongheiMapInfo.EVENT_ROAD_POS, this, this.onUpdateRoadRecord); //大路坐标更新
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo); //大路坐标更新
                _super.prototype.close.call(this);
            };
            //胜负结果
            HongheiZoushiPage.prototype.onUpdateRecord = function () {
                if (!this._hongheiMapInfo)
                    return;
                var recordArr = [];
                if (this._hongheiMapInfo.GetGameRecord() != "") {
                    recordArr = JSON.parse(this._hongheiMapInfo.GetGameRecord());
                }
                this._viewUI.list_game_result.dataSource = recordArr;
                // this._viewUI.txt_total.text = StringU.substitute("近{0}局胜负",recordArr.length);
                var length = recordArr.length;
                var totalLenth = 20;
                //计算最近20场胜负
                var temp_hong = 0;
                var temp_hei = 0;
                for (var i = 0; i < length; i++) {
                    if (recordArr[i] == 1) {
                        temp_hong += 1;
                    }
                    else {
                        temp_hei += 1;
                    }
                }
                var hong_num = Math.round(temp_hong * 100 / totalLenth);
                var hei_num = Math.round(temp_hei * 100 / totalLenth);
                if (length >= totalLenth) {
                    hei_num = 100 - hong_num;
                }
                this._viewUI.txt_hong.text = hong_num + "%";
                this._viewUI.txt_hei.text = hei_num + "%";
            };
            //牌型
            HongheiZoushiPage.prototype.onUpdateCardRecord = function () {
                if (!this._hongheiMapInfo)
                    return;
                var recordArr = [];
                if (this._hongheiMapInfo.GetCardRecord() != "") {
                    recordArr = JSON.parse(this._hongheiMapInfo.GetCardRecord());
                }
                this._viewUI.list_card_type.dataSource = recordArr;
            };
            //牌路
            HongheiZoushiPage.prototype.onUpdateRoadRecord = function () {
                if (!this._hongheiMapInfo)
                    return;
                var recordArr = []; //大路游戏记录
                var posArr = []; //大路坐标记录
                if (this._hongheiMapInfo.GetRoadRecord() != "") {
                    recordArr = JSON.parse(this._hongheiMapInfo.GetRoadRecord());
                }
                if (this._hongheiMapInfo.GetRoadPos() != "") {
                    posArr = JSON.parse(this._hongheiMapInfo.GetRoadPos());
                }
                var arr = [];
                if (recordArr && recordArr.length && posArr && posArr.length) {
                    for (var i = 0; i < recordArr.length; i++) {
                        arr.push(posArr[i][0]);
                        arr.push(posArr[i][1]);
                        arr.push(recordArr[i]);
                    }
                }
                this._gridEditor.setData(arr);
            };
            return HongheiZoushiPage;
        }(game.gui.base.Page));
        page.HongheiZoushiPage = HongheiZoushiPage;
        var MapRecordRender1 = /** @class */ (function (_super) {
            __extends(MapRecordRender1, _super);
            function MapRecordRender1() {
                return _super.call(this) || this;
            }
            MapRecordRender1.prototype.setData = function (game, data) {
                this._game = game;
                this._data = data;
                if (!this._data) {
                    this.visible = false;
                    return;
                }
                this.visible = true;
                this.img.skin = StringU.substitute(PathGameTongyong.ui_tongyong_general + "tu_hd{0}.png", this._data == 1 ? "0" : "1");
            };
            MapRecordRender1.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            return MapRecordRender1;
        }(ui.game_ui.honghei.component.HongHeiHongDianUI));
        var MapRecordRender2 = /** @class */ (function (_super) {
            __extends(MapRecordRender2, _super);
            function MapRecordRender2() {
                return _super.call(this) || this;
            }
            MapRecordRender2.prototype.setData = function (game, data) {
                this._game = game;
                this._data = data;
                if (!this._data) {
                    this.visible = false;
                    return;
                }
                this.visible = true;
                if (this._data == 1 || this._data == 7) {
                    this.txt_cardType.text = "单张";
                }
                else if (this._data == 2 || this._data == 8) {
                    this.txt_cardType.text = "对子";
                }
                else if (this._data == 3) {
                    this.txt_cardType.text = "顺子";
                }
                else if (this._data == 4) {
                    this.txt_cardType.text = "金花";
                }
                else if (this._data == 5) {
                    this.txt_cardType.text = "顺金";
                }
                else if (this._data == 6) {
                    this.txt_cardType.text = "豹子";
                }
                if (this._data == 1 || this._data == 2 || this._data == 7) {
                    this.img.skin = PathGameTongyong.ui_tongyong_general + "tu_dzdt.png";
                }
                else {
                    this.img.skin = PathGameTongyong.ui_tongyong_general + "tu_dzdt1.png";
                }
            };
            MapRecordRender2.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            return MapRecordRender2;
        }(ui.game_ui.honghei.component.DuiZiUI));
    })(page = gamehonghei.page || (gamehonghei.page = {}));
})(gamehonghei || (gamehonghei = {}));
//# sourceMappingURL=HongheiZoushiPage.js.map