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
var gameelslp;
(function (gameelslp) {
    var page;
    (function (page) {
        var HONG_NUMBER = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]; //红的数字
        var HEI_NUMBER = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35]; //黑的数字
        var ElslpRoadPage = /** @class */ (function (_super) {
            __extends(ElslpRoadPage, _super);
            function ElslpRoadPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isShenQing = false;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                _this._isNeedDuang = false;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    Path_game_elslp.atlas_game_ui + "eluosizhuanpan.atlas",
                ];
                return _this;
            }
            ElslpRoadPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.eluosizhuanpan.ZouShiTuUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            ElslpRoadPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.list_record.itemRender = this.createChildren("game_ui.eluosizhuanpan.component.AnNiu1UI", MapRecordRender);
                this._viewUI.list_record.renderHandler = new Handler(this, this.renderHandler);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.on(ElslpMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord); //游戏记录更新
                this.onUpdateMapInfo();
                this.onUpdateRecord();
            };
            ElslpRoadPage.prototype.onUpdateMapInfo = function () {
                this._mapinfo = this._game.sceneObjectMgr.mapInfo;
                if (this._mapinfo) {
                    this._mapinfo.on(ElslpMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord); //游戏记录更新
                    this.onUpdateRecord();
                }
            };
            ElslpRoadPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            //最近游戏记录
            ElslpRoadPage.prototype.onUpdateRecord = function () {
                if (!this._mapinfo)
                    return;
                var recordArr = [];
                if (this._mapinfo.GetGameRecord() != "") {
                    var data_1 = JSON.parse(this._mapinfo.GetGameRecord());
                    for (var i = 0; i < data_1.length; i++) {
                        recordArr.push(data_1[i] + 1);
                    }
                }
                this._viewUI.list_record.dataSource = recordArr;
                var gameNum = 20; //recordArr.length
                this._viewUI.txt_title0.text = StringU.substitute("近{0}局大小", gameNum);
                this._viewUI.txt_title1.text = StringU.substitute("近{0}局单双", gameNum);
                this._viewUI.txt_title2.text = StringU.substitute("近{0}局红黑", gameNum);
                //计算最近20场胜负
                var resultArr = [];
                var xiaoWin = 0;
                var daWin = 0;
                var danWin = 0;
                var shuangWin = 0;
                var hongWin = 0;
                var heiWin = 0;
                for (var i = 0; i < recordArr.length; i++) {
                    var count = recordArr[i] - 1;
                    //大小
                    if (count >= 1 && count <= 18) {
                        xiaoWin++;
                    }
                    else if (count >= 19 && count <= 36) {
                        daWin++;
                    }
                    //单双
                    if (count > 0) {
                        if (count % 2 == 1) {
                            danWin++;
                        }
                        else {
                            shuangWin++;
                        }
                    }
                    //红黑
                    if (HONG_NUMBER.indexOf(count) >= 0) {
                        hongWin++;
                    }
                    else if (HEI_NUMBER.indexOf(count) >= 0) {
                        heiWin++;
                    }
                }
                this._viewUI.txt_xiao.text = Math.round(xiaoWin * 100 / gameNum) + "%";
                this._viewUI.txt_da.text = Math.round(daWin * 100 / gameNum) + "%";
                this._viewUI.txt_dan.text = Math.round(danWin * 100 / gameNum) + "%";
                this._viewUI.txt_shuang.text = Math.round(shuangWin * 100 / gameNum) + "%";
                this._viewUI.txt_hong.text = Math.round(hongWin * 100 / gameNum) + "%";
                this._viewUI.txt_hei.text = Math.round(heiWin * 100 / gameNum) + "%";
            };
            ElslpRoadPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.list_record.hScrollBarSkin = null;
                }
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.off(ElslpMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord); //游戏记录更新
                _super.prototype.close.call(this);
            };
            return ElslpRoadPage;
        }(game.gui.base.Page));
        page.ElslpRoadPage = ElslpRoadPage;
        //按钮颜色
        var NUMBER_SKIN = ["zs_lv", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui",
            "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen",
            "zs_hui", "zs_fen", "zs_hui", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen", "zs_hui", "zs_fen"];
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
                var count = this._data - 1;
                this.txt_count.text = count.toString();
                this.ing_type.skin = Path_game_elslp.ui_elslp + NUMBER_SKIN[count] + ".png";
            };
            MapRecordRender.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            return MapRecordRender;
        }(ui.game_ui.eluosizhuanpan.component.AnNiu1UI));
    })(page = gameelslp.page || (gameelslp.page = {}));
})(gameelslp || (gameelslp = {}));
//# sourceMappingURL=ElslpRoadPage.js.map