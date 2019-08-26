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
* 走势界面
*/
var gamebairendezhou;
(function (gamebairendezhou) {
    var page;
    (function (page) {
        var BairendezhouZoushiPage = /** @class */ (function (_super) {
            __extends(BairendezhouZoushiPage, _super);
            function BairendezhouZoushiPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                _this._isNeedDuang = false;
                _this._asset = [
                    Path_game_bairendezhou.atlas_game_ui + "bairendezhou.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            BairendezhouZoushiPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.bairendezhou.ZouShiTuUI');
                this.addChild(this._viewUI);
                var textureTypes = {
                    "L": PathGameTongyong.ui_tongyong_general + "tu_lq.png",
                    "H": PathGameTongyong.ui_tongyong_general + "tu_hq.png",
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
                this._gridEditor.x = 63;
                this._gridEditor.y = 102;
                this._viewUI.list_record0.parent.addChild(this._gridEditor);
            };
            // 页面打开时执行函数
            BairendezhouZoushiPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.list_record0.itemRender = this.createChildren("game_ui.bairendezhou.component.HongDianUI", RecordRender);
                this._viewUI.list_record0.renderHandler = new Handler(this, this.renderHandler1);
                this._viewUI.list_record1.itemRender = this.createChildren("game_ui.bairendezhou.component.DuiZiUI", CardRecordRender);
                this._viewUI.list_record1.renderHandler = new Handler(this, this.renderHandler2);
                this._game.sceneObjectMgr.on(BairendezhouMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord); //游戏记录更新
                this._game.sceneObjectMgr.on(BairendezhouMapInfo.EVENT_CARD_RECORD, this, this.onUpdateCardRecord); //牌型更新
                this._game.sceneObjectMgr.on(BairendezhouMapInfo.EVENT_ROAD_RECORD, this, this.onUpdateRoadRecord); //大路更新
                this.onUpdateRecord();
                this.onUpdateCardRecord();
                this.onUpdateRoadRecord();
                this._bairendezhouMapInfo = this._game.sceneObjectMgr.mapInfo;
                if (this._bairendezhouMapInfo) {
                    this.onUpdateRecord();
                    this.onUpdateCardRecord();
                    this.onUpdateRoadRecord();
                }
            };
            BairendezhouZoushiPage.prototype.close = function () {
                if (this._viewUI) {
                    if (this._gridEditor) {
                        this._gridEditor.removeSelf();
                        this._gridEditor.destroy();
                        this._gridEditor = null;
                    }
                    this._game.sceneObjectMgr.off(BairendezhouMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord); //游戏记录更新
                    this._game.sceneObjectMgr.off(BairendezhouMapInfo.EVENT_CARD_RECORD, this, this.onUpdateCardRecord); //牌型更新
                    this._game.sceneObjectMgr.off(BairendezhouMapInfo.EVENT_ROAD_RECORD, this, this.onUpdateRoadRecord); //大路更新
                }
                _super.prototype.close.call(this);
            };
            BairendezhouZoushiPage.prototype.renderHandler1 = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            BairendezhouZoushiPage.prototype.renderHandler2 = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            //胜负结果
            BairendezhouZoushiPage.prototype.onUpdateRecord = function () {
                if (!this._bairendezhouMapInfo)
                    return;
                var recordArr = [];
                if (this._bairendezhouMapInfo.GetGameRecord() != "") {
                    recordArr = JSON.parse(this._bairendezhouMapInfo.GetGameRecord());
                }
                this._viewUI.list_record0.dataSource = recordArr;
                // this._viewUI.txt_title.text = StringU.substitute("近{0}局胜负", recordArr.length);
                var length = recordArr.length;
                var totalLenth = 20;
                //计算最近20场胜负
                var temp_lan = 0;
                var temp_hong = 0;
                var temp_he = 0;
                for (var i = 0; i < length; i++) {
                    if (recordArr[i] == 1) {
                        temp_lan += 1;
                    }
                    else if (recordArr[i] == -1) {
                        temp_hong += 1;
                    }
                    else {
                        temp_he += 1;
                    }
                }
                var lan_num = Math.round(temp_lan * 100 / totalLenth);
                var he_num = Math.round(temp_he * 100 / totalLenth);
                var hong_num = Math.round(temp_hong * 100 / totalLenth);
                if (length >= totalLenth) {
                    hong_num = 100 - lan_num - he_num;
                }
                this._viewUI.txt_lan.text = lan_num + "%";
                this._viewUI.txt_hong.text = hong_num + "%";
            };
            //牌型
            BairendezhouZoushiPage.prototype.onUpdateCardRecord = function () {
                if (!this._bairendezhouMapInfo)
                    return;
                var recordArr = [];
                if (this._bairendezhouMapInfo.GetCardRecord() != "") {
                    recordArr = JSON.parse(this._bairendezhouMapInfo.GetCardRecord());
                }
                this._viewUI.list_record1.dataSource = recordArr;
            };
            //牌路
            BairendezhouZoushiPage.prototype.onUpdateRoadRecord = function () {
                if (!this._bairendezhouMapInfo)
                    return;
                var recordArr = []; //战绩记录器
                if (this._bairendezhouMapInfo.GetRoadRecord() != "") {
                    recordArr = JSON.parse(this._bairendezhouMapInfo.GetRoadRecord());
                }
                var posArr = []; //坐标记录器
                if (this._bairendezhouMapInfo.GetRoadPos() != "") {
                    posArr = JSON.parse(this._bairendezhouMapInfo.GetRoadPos());
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
            return BairendezhouZoushiPage;
        }(game.gui.base.Page));
        page.BairendezhouZoushiPage = BairendezhouZoushiPage;
        var RecordRender = /** @class */ (function (_super) {
            __extends(RecordRender, _super);
            function RecordRender() {
                return _super.call(this) || this;
            }
            RecordRender.prototype.setData = function (game, data) {
                this._game = game;
                this._data = data;
                if (this._data != -1 && this._data != 1 && this._data != 0) {
                    this.visible = false;
                    return;
                }
                this.visible = true;
                this.img_record.skin = StringU.substitute(PathGameTongyong.ui_tongyong_general + "tu_hd{0}.png", this._data == 0 ? "4" : this._data == 1 ? "2" : "0");
            };
            RecordRender.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            return RecordRender;
        }(ui.game_ui.bairendezhou.component.HongDianUI));
        var CardRecordRender = /** @class */ (function (_super) {
            __extends(CardRecordRender, _super);
            function CardRecordRender() {
                return _super.call(this) || this;
            }
            CardRecordRender.prototype.setData = function (game, data) {
                this._game = game;
                this._data = data;
                if (!this._data) {
                    this.visible = false;
                    return;
                }
                this.visible = true;
                if (this._data == 1) {
                    this.txt_type.text = "高牌";
                }
                else if (this._data == 2) {
                    this.txt_type.text = "一对";
                }
                else if (this._data == 3) {
                    this.txt_type.text = "两对";
                }
                else if (this._data == 4) {
                    this.txt_type.text = "三条";
                }
                else if (this._data == 5) {
                    this.txt_type.text = "顺子";
                }
                else if (this._data == 6) {
                    this.txt_type.text = "同花";
                }
                else if (this._data == 7) {
                    this.txt_type.text = "葫芦";
                }
                else if (this._data == 8) {
                    this.txt_type.text = "金刚";
                }
                else if (this._data == 9 || this._data == 10) {
                    this.txt_type.text = "同花顺";
                }
            };
            CardRecordRender.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            return CardRecordRender;
        }(ui.game_ui.bairendezhou.component.DuiZiUI));
    })(page = gamebairendezhou.page || (gamebairendezhou.page = {}));
})(gamebairendezhou || (gamebairendezhou = {}));
//# sourceMappingURL=BairendezhouZoushiPage.js.map