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
var gamelonghu;
(function (gamelonghu) {
    var page;
    (function (page) {
        var LonghuRoadPage = /** @class */ (function (_super) {
            __extends(LonghuRoadPage, _super);
            function LonghuRoadPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isShenQing = false;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                _this._isNeedDuang = false;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    Path_game_longhu.atlas_game_ui + "longhu.atlas",
                ];
                return _this;
            }
            LonghuRoadPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.longhu.ZouShiTuUI');
                this.addChild(this._viewUI);
                var textureTypes = {
                    "L": PathGameTongyong.ui_tongyong_general + "tu_lq.png",
                    "H": PathGameTongyong.ui_tongyong_general + "tu_yq0.png",
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
                this._game.sceneObjectMgr.on(LonghuMapInfo.EVENT_ROAD_RECORD, this, this.onUpdateRoadInfo); //大路记录变化
                this._game.sceneObjectMgr.on(LonghuMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord); //游戏记录更新
                this.onUpdateRoadInfo();
                this.onUpdateRecord();
            };
            // 页面打开时执行函数
            LonghuRoadPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.list_record.itemRender = this.createChildren("game_ui.longhu.component.RecordRenderUI", MapRecordRender);
                this._viewUI.list_record.renderHandler = new Handler(this, this.renderHandler1);
                this._mapinfo = this._game.sceneObjectMgr.mapInfo;
                if (this._mapinfo) {
                    this.onUpdateRoadInfo();
                    this.onUpdateRecord();
                }
            };
            LonghuRoadPage.prototype.renderHandler1 = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            //最近游戏记录
            LonghuRoadPage.prototype.onUpdateRecord = function () {
                if (!this._mapinfo)
                    return;
                var recordArr = [];
                var gameRecord = this._mapinfo.GetGameRecord();
                if (gameRecord != "") {
                    recordArr = JSON.parse(gameRecord);
                }
                this._viewUI.list_record.dataSource = recordArr;
                var gameNum = 20; //recordArr.length
                this._viewUI.txt_title.text = StringU.substitute("近{0}局胜负", gameNum);
                //计算最近20场胜负
                var longWin = 0;
                var huWin = 0;
                for (var i = 0; i < recordArr.length; i++) {
                    if (recordArr[i] == 2)
                        longWin++;
                    if (recordArr[i] == 3)
                        huWin++;
                }
                this._viewUI.txt_long.text = Math.round(longWin * 100 / gameNum) + "%";
                this._viewUI.txt_hu.text = Math.round(huWin * 100 / gameNum) + "%";
            };
            //大路
            LonghuRoadPage.prototype.onUpdateRoadInfo = function () {
                if (!this._mapinfo)
                    return;
                var recordArr = []; //战绩记录器
                var roadRecord = this._mapinfo.GetRoadRecord();
                if (roadRecord != "") {
                    recordArr = JSON.parse(roadRecord);
                }
                var posArr = []; //坐标记录器
                var roadPos = this._mapinfo.GetRoadPos();
                if (roadPos != "") {
                    posArr = JSON.parse(roadPos);
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
            LonghuRoadPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.sceneObjectMgr.off(LonghuMapInfo.EVENT_ROAD_RECORD, this, this.onUpdateRoadInfo); //大路记录变化
                    this._game.sceneObjectMgr.off(LonghuMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord); //游戏记录更新
                    if (this._gridEditor) {
                        this._gridEditor.removeSelf();
                        this._gridEditor.destroy();
                        this._gridEditor = null;
                    }
                }
                _super.prototype.close.call(this);
            };
            return LonghuRoadPage;
        }(game.gui.base.Page));
        page.LonghuRoadPage = LonghuRoadPage;
        var MapRecordRender = /** @class */ (function (_super) {
            __extends(MapRecordRender, _super);
            function MapRecordRender() {
                return _super.call(this) || this;
            }
            MapRecordRender.prototype.setData = function (game, data) {
                this._game = game;
                this._data = data;
                if (this._data != 1 && this._data != 2 && this._data != 3) {
                    this.visible = false;
                    return;
                }
                this.visible = true;
                this.record.skin = StringU.substitute(Path_game_longhu.ui_longhu + "zs_{0}.png", this._data == 1 ? "2" : this._data == 2 ? "0" : "1");
            };
            MapRecordRender.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            return MapRecordRender;
        }(ui.game_ui.longhu.component.RecordRenderUI));
    })(page = gamelonghu.page || (gamelonghu.page = {}));
})(gamelonghu || (gamelonghu = {}));
//# sourceMappingURL=LonghuRoadPage.js.map