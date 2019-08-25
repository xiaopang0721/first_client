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
var gametoubao;
(function (gametoubao) {
    var page;
    (function (page) {
        var ToubaoRoadPage = /** @class */ (function (_super) {
            __extends(ToubaoRoadPage, _super);
            function ToubaoRoadPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isShenQing = false;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                _this._isNeedDuang = false;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    Path_game_toubao.atlas_game_ui + "toubao.atlas",
                ];
                return _this;
            }
            ToubaoRoadPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.toubao.TouBao_ZouShiTuUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            ToubaoRoadPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.list_record.itemRender = this.createChildren("game_ui.toubao.component.RecordRenderUI", MapRecordRender);
                this._viewUI.list_record.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_result.itemRender = this.createChildren("game_ui.toubao.component.ZouShiDaXiaoUI", ResultRender);
                this._viewUI.list_result.renderHandler = new Handler(this, this.renderHandler1);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.on(ToubaoMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord); //游戏记录更新
                this.onUpdateMapInfo();
                this.onUpdateRecord();
            };
            ToubaoRoadPage.prototype.onUpdateMapInfo = function () {
                this._mapinfo = this._game.sceneObjectMgr.mapInfo;
                if (this._mapinfo) {
                    this._mapinfo.on(ToubaoMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord); //游戏记录更新
                    this.onUpdateRecord();
                }
            };
            ToubaoRoadPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            ToubaoRoadPage.prototype.renderHandler1 = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            //最近游戏记录
            ToubaoRoadPage.prototype.onUpdateRecord = function () {
                if (!this._mapinfo)
                    return;
                var recordArr = [];
                if (this._mapinfo.GetGameRecord() != "") {
                    var data_1 = JSON.parse(this._mapinfo.GetGameRecord());
                    if (data_1.length > 10) {
                        for (var i = 0; i < 10; i++) {
                            recordArr[9 - i] = data_1[data_1.length - 1 - i];
                        }
                    }
                    else {
                        recordArr = data_1;
                    }
                }
                this._viewUI.list_record.dataSource = recordArr;
                "";
                var gameNum = 10; //recordArr.length
                this._viewUI.txt_title.text = StringU.substitute("近{0}局胜负", gameNum);
                //计算最近10场胜负
                var resultArr = [];
                var xiaoWin = 0;
                var daWin = 0;
                for (var i = 0; i < recordArr.length; i++) {
                    var arr = recordArr[i].split(",");
                    var diceA = parseInt(arr[0]);
                    var diceB = parseInt(arr[1]);
                    var diceC = parseInt(arr[2]);
                    var count = diceA + diceB + diceC;
                    if (diceA == diceB && diceA == diceC && diceC == diceB) {
                        resultArr.push(3);
                    }
                    else if (count >= 4 && count <= 10) {
                        resultArr.push(1);
                    }
                    else if (count >= 11 && count <= 17) {
                        resultArr.push(2);
                    }
                }
                for (var i = 0; i < resultArr.length; i++) {
                    if (resultArr[i] == 1)
                        xiaoWin++;
                    if (resultArr[i] == 2)
                        daWin++;
                }
                this._viewUI.txt_xiao.text = Math.round(xiaoWin * 100 / gameNum) + "%";
                this._viewUI.txt_da.text = Math.round(daWin * 100 / gameNum) + "%";
                this._viewUI.list_result.dataSource = resultArr;
            };
            ToubaoRoadPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.list_record.hScrollBarSkin = null;
                }
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.off(ToubaoMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord); //游戏记录更新
                _super.prototype.close.call(this);
            };
            return ToubaoRoadPage;
        }(game.gui.base.Page));
        page.ToubaoRoadPage = ToubaoRoadPage;
        var MapRecordRender = /** @class */ (function (_super) {
            __extends(MapRecordRender, _super);
            function MapRecordRender() {
                return _super.call(this) || this;
            }
            MapRecordRender.prototype.setData = function (game, data) {
                this._game = game;
                this._data = data;
                if (!this._data) {
                    this.visible = false;
                    return;
                }
                this.visible = true;
                var arr = this._data.split(",");
                this.dice0.skin = StringU.substitute(Path_game_toubao.ui_toubao + "tu_sz{0}.png", arr[0]);
                this.dice1.skin = StringU.substitute(Path_game_toubao.ui_toubao + "tu_sz{0}.png", arr[1]);
                this.dice2.skin = StringU.substitute(Path_game_toubao.ui_toubao + "tu_sz{0}.png", arr[2]);
                var count = 0;
                for (var i = 0; i < arr.length; i++) {
                    count += parseInt(arr[i]);
                }
                this.txt_num.text = count.toString();
            };
            MapRecordRender.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            return MapRecordRender;
        }(ui.game_ui.toubao.component.RecordRenderUI));
        var ResultRender = /** @class */ (function (_super) {
            __extends(ResultRender, _super);
            function ResultRender() {
                return _super.call(this) || this;
            }
            ResultRender.prototype.setData = function (game, data) {
                this._game = game;
                this._data = data;
                if (!this._data) {
                    this.visible = false;
                    return;
                }
                this.visible = true;
                var zi = this._data == 3 ? "围" : this._data == 2 ? "大" : "小";
                this.txt_zi.text = zi;
            };
            ResultRender.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            return ResultRender;
        }(ui.game_ui.toubao.component.ZouShiDaXiaoUI));
    })(page = gametoubao.page || (gametoubao.page = {}));
})(gametoubao || (gametoubao = {}));
//# sourceMappingURL=ToubaoRoadPage.js.map