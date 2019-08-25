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
var gamebaijiale;
(function (gamebaijiale) {
    var page;
    (function (page) {
        var BaijialeRoadPage = /** @class */ (function (_super) {
            __extends(BaijialeRoadPage, _super);
            function BaijialeRoadPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isShenQing = false;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                _this._isNeedDuang = false;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    Path_game_baijiale.atlas_game_ui + "baijiale.atlas",
                ];
                return _this;
            }
            BaijialeRoadPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.baijiale.ZouShiTuUI');
                this.addChild(this._viewUI);
                var textureTypes = {
                    "X": PathGameTongyong.ui_tongyong_general + "tu_lq.png",
                    "Z": PathGameTongyong.ui_tongyong_general + "tu_yq2.png",
                    "1": PathGameTongyong.ui_tongyong_general + "plsz_1.png",
                    "2": PathGameTongyong.ui_tongyong_general + "plsz_2.png",
                    "3": PathGameTongyong.ui_tongyong_general + "plsz_3.png",
                    "4": PathGameTongyong.ui_tongyong_general + "plsz_4.png",
                    "5": PathGameTongyong.ui_tongyong_general + "plsz_5.png",
                    "6": PathGameTongyong.ui_tongyong_general + "plsz_6.png",
                    "7": PathGameTongyong.ui_tongyong_general + "plsz_7.png",
                    "8": PathGameTongyong.ui_tongyong_general + "plsz_8.png",
                    "9": PathGameTongyong.ui_tongyong_general + "plsz_9.png",
                };
                this._gridEditor = new GridEditor(31.93, 31.7, 20, 6, textureTypes, false);
                this._gridEditor.x = 74;
                this._gridEditor.y = 191;
                this._viewUI.list_record.parent.addChild(this._gridEditor);
                this._game.sceneObjectMgr.on(BaijialeMapInfo.EVENT_ROAD_RECORD, this, this.onUpdateRoadInfo);
                this._game.sceneObjectMgr.on(BaijialeMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord);
                this.onUpdateRoadInfo();
                this.onUpdateRecord();
            };
            // 页面打开时执行函数
            BaijialeRoadPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.list_record.itemRender = this.createChildren("game_ui.baijiale.component.RecordRenderUI", MapRecordRender);
                this._viewUI.list_record.renderHandler = new Handler(this, this.renderHandler1);
                this._mapinfo = this._game.sceneObjectMgr.mapInfo;
                if (this._mapinfo) {
                    this.onUpdateRoadInfo();
                    this.onUpdateRecord();
                }
            };
            BaijialeRoadPage.prototype.renderHandler1 = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            //最近游戏记录
            BaijialeRoadPage.prototype.onUpdateRecord = function () {
                if (!this._mapinfo)
                    return;
                var recordArr = [];
                if (this._mapinfo.GetGameRecord() != "") {
                    recordArr = JSON.parse(this._mapinfo.GetGameRecord());
                }
                this._viewUI.list_record.dataSource = recordArr;
                var gameNum = 20; //recordArr.length
                this._viewUI.txt_title.text = StringU.substitute("近{0}局胜负", gameNum);
                //计算最近20场胜负
                var xianWin = 0;
                var zhuangWin = 0;
                for (var i = 0; i < recordArr.length; i++) {
                    if (recordArr[i] == 0)
                        xianWin++;
                    if (recordArr[i] == 1)
                        zhuangWin++;
                }
                this._viewUI.txt_xian.text = Math.round(xianWin * 100 / gameNum) + "%";
                this._viewUI.txt_zhuang.text = Math.round(zhuangWin * 100 / gameNum) + "%";
            };
            //大路
            BaijialeRoadPage.prototype.onUpdateRoadInfo = function () {
                if (!this._mapinfo)
                    return;
                var recordArr = []; //战绩记录器
                if (this._mapinfo.GetRoadRecord() != "") {
                    recordArr = JSON.parse(this._mapinfo.GetRoadRecord());
                }
                var posArr = []; //坐标记录器
                if (this._mapinfo.GetRoadPos() != "") {
                    posArr = JSON.parse(this._mapinfo.GetRoadPos());
                }
                var arr = [];
                if (recordArr && recordArr.length) {
                    for (var i = 0; i < recordArr.length; i++) {
                        arr.push(posArr[i][0]);
                        arr.push(posArr[i][1]);
                        arr.push(recordArr[i]);
                    }
                }
                this._gridEditor.setData(arr);
            };
            BaijialeRoadPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.sceneObjectMgr.off(BaijialeMapInfo.EVENT_ROAD_RECORD, this, this.onUpdateRoadInfo);
                    this._game.sceneObjectMgr.off(BaijialeMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord);
                    this._mapinfo = null;
                }
                _super.prototype.close.call(this);
            };
            return BaijialeRoadPage;
        }(game.gui.base.Page));
        page.BaijialeRoadPage = BaijialeRoadPage;
        var MapRecordRender = /** @class */ (function (_super) {
            __extends(MapRecordRender, _super);
            function MapRecordRender() {
                return _super.call(this) || this;
            }
            MapRecordRender.prototype.setData = function (game, data) {
                this._game = game;
                this._data = data;
                if (this._data != 0 && this._data != 1 && this._data != 2) {
                    this.visible = false;
                    return;
                }
                this.visible = true;
                this.record.skin = StringU.substitute(Path_game_baijiale.ui_baijiale + "zs_{0}.png", this._data);
            };
            MapRecordRender.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            return MapRecordRender;
        }(ui.game_ui.baijiale.component.RecordRenderUI));
    })(page = gamebaijiale.page || (gamebaijiale.page = {}));
})(gamebaijiale || (gamebaijiale = {}));
//# sourceMappingURL=BaijialeRoadPage.js.map