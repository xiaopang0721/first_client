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
    (function (page_1) {
        var RecordPage = /** @class */ (function (_super) {
            __extends(RecordPage, _super);
            function RecordPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            RecordPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.tongyong.ZhanJiUI');
                this.addChild(this._viewUI);
                this._viewUI.list_record.visible = false;
                this._viewUI.txt_noRecord.visible = false;
                this._timeList = [];
                this._btnList = [];
                for (var i = 0; i < this._viewUI.list_time.numChildren; i++) {
                    this._btnList.push(this._viewUI["btn_list" + i]);
                    this._btnList[i].on(LEvent.CLICK, this, this.onBtnClick, [i]);
                }
                if (!this._htmlText) {
                    this._htmlText = TextFieldU.createHtmlText(this._viewUI.txt_total);
                }
                this._notStageClickUI = [this._viewUI.btn_list];
            };
            // 页面打开时执行函数
            RecordPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._recordMgr = RecordMgr.ins;
                if (this._dataSource) {
                    if (this._dataSource.hasOwnProperty("isCardRoomType")) {
                        this._gameId = this._recordMgr.game_id = this._dataSource.gameid;
                        this._isCardRoomType = this._dataSource.isCardRoomType;
                    }
                    else {
                        this._gameId = this._recordMgr.game_id = this._dataSource;
                    }
                }
                this.initCardRoomInfo();
                this.onUpdateDataList();
                this.onUpdateDataInfo();
                this._viewUI.list_record.vScrollBarSkin = "";
                this._viewUI.list_record.scrollBar.elasticDistance = 100;
                this._viewUI.list_record.itemRender = this.createChildren("game_ui.tongyong.BaoBiaoTUI", ListRecordItem);
                this._viewUI.list_record.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.img_profit.skin = StringU.substitute(PathGameTongyong.ui_tongyong_general + "{0}.png", this._isCardRoomType ? "bb_jf" : "bb_yl");
                this._viewUI.btn_list.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._recordMgr.on(RecordMgr.RECORD_CHANGE, this, this.onUpdateDataInfo);
            };
            RecordPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource, this._recordMgr.game_id);
                    var page_2 = Math.floor((index + 10) / RecordMgr.PAGE_MAX) + 1;
                    if (!this._recordMgr.getDataInfo(this._timeSelectIndex)[page_2]) {
                        if (this._recordMgr.getDataInfo(this._timeSelectIndex)[page_2 - 1] && this._recordMgr.getDataInfo(this._timeSelectIndex)[page_2 - 1].length >= RecordMgr.PAGE_MAX) {
                            if (index - this._lastIndex < RecordMgr.PAGE_MAX * .5)
                                return;
                            this._lastIndex = index;
                            this._recordMgr.getData(page_2, this._roomId, this._selectTime, this._timeSelectIndex);
                        }
                    }
                }
            };
            RecordPage.prototype.onUpdateDataList = function () {
                this._selectTime = this._game.sync.serverTimeBys;
                this._timeSelectIndex = 6;
                this._timeList = [];
                for (var i = 0; i < 7; i++) {
                    this._timeList.push(this._selectTime - 86400 * (6 - i));
                    this._btnList[i].label = Sync.getTimeStr3(this._timeList[i]);
                }
                this._viewUI.list_time.visible = false;
                this._viewUI.list_time.dataSource = this._timeList;
                this._viewUI.btn_list.label = Sync.getTimeStr3(this._selectTime);
                var str = "<span style='color:{0}'>汇总：{1}</span>";
                var colorHtml = this._viewUI.txt_total.color;
                var innerHtml = StringU.substitute(str, colorHtml, 0);
                this._htmlText.innerHTML = innerHtml;
            };
            RecordPage.prototype.onUpdateDataInfo = function (date) {
                this._dataInfo = [];
                var value = this._recordMgr.getDataInfo(this._timeSelectIndex, !date);
                var count = 0;
                var curPageCount = 0;
                for (var key in value) {
                    if (value[key] && value[key].length > 0)
                        count++;
                }
                this._viewUI.txt_noRecord.visible = !count;
                this._viewUI.list_record.visible = count > 0;
                var str = "<span style='color:{0}'>汇总：{1}</span>";
                var colorHtml = this._viewUI.txt_total.color;
                var innerHtml = "";
                if (!count) {
                    !date && this._recordMgr.getData(1, this._roomId, this._selectTime, this._timeSelectIndex);
                    innerHtml = StringU.substitute(str, colorHtml, 0);
                    this._htmlText.innerHTML = innerHtml;
                    return;
                }
                for (var key in value) {
                    if (value.hasOwnProperty(key)) {
                        var cc = value[key];
                        if (cc) {
                            for (var index = 0; index < cc.length; index++) {
                                var aa = cc[index];
                                aa["rank"] = index + parseInt(key) * RecordMgr.PAGE_MAX - RecordMgr.PAGE_MAX;
                                this._dataInfo.push(aa);
                                if (this._isCardRoomType) {
                                    aa.profit = aa.room_point;
                                }
                            }
                        }
                    }
                }
                this._viewUI.list_record.dataSource = this._dataInfo;
                var all = this._recordMgr.getTotalByIndex(this._timeSelectIndex);
                colorHtml = all > 0 ? this._viewUI.txt_total.color : "#ff0000";
                innerHtml = StringU.substitute(str, colorHtml, EnumToString.getPointBackNum(all, 2));
                this._htmlText.innerHTML = innerHtml;
            };
            //按钮缓动回调
            RecordPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_list:
                        this._viewUI.list_time.visible = !this._viewUI.list_time.visible;
                        break;
                    default:
                        break;
                }
            };
            RecordPage.prototype.onBtnClick = function (index, e) {
                if (index == this._timeSelectIndex)
                    return;
                this._viewUI.list_record.scrollTo(0);
                this._lastIndex = 0;
                this._timeSelectIndex = index;
                this._selectTime = this._timeList[index]; //选择的时间
                this._viewUI.btn_list.label = Sync.getTimeStr3(this._selectTime);
                this.onUpdateDataInfo();
                this.updateBoxBtnStatus();
            };
            RecordPage.prototype.onMouseClick = function (e) {
                if (!this._viewUI.list_time.visible)
                    return;
                for (var index = 0; index < this._notStageClickUI.length; index++) {
                    var v = this._notStageClickUI[index];
                    if (v.contains(e.target)) {
                        return;
                    }
                }
                this.updateBoxBtnStatus();
            };
            RecordPage.prototype.updateBoxBtnStatus = function () {
                this._viewUI.list_time.visible = false;
            };
            RecordPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_list.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    for (var i = 0; i < this._viewUI.list_time.numChildren; i++) {
                        this._btnList[i] && this._btnList[i].off(LEvent.CLICK, this, this.onBtnClick);
                    }
                }
                this._recordMgr.off(RecordMgr.RECORD_CHANGE, this, this.onUpdateDataInfo);
                _super.prototype.close.call(this);
            };
            /** 设置房卡模式战绩查询相关信息 */
            RecordPage.prototype.initCardRoomInfo = function () {
                if (this._isCardRoomType) {
                    this._roomId = Web_operation_fields.GAME_ROOM_CONFIG_CARD_ROOM.toString();
                }
                else {
                    this._roomId = "";
                }
            };
            return RecordPage;
        }(game.gui.base.Page));
        page_1.RecordPage = RecordPage;
        var ListRecordItem = /** @class */ (function (_super) {
            __extends(ListRecordItem, _super);
            function ListRecordItem() {
                var _this = _super.call(this) || this;
                _this.btn_xq.on(LEvent.CLICK, _this, _this.onMouseClick);
                return _this;
            }
            ListRecordItem.prototype.setData = function (game, data, gameId) {
                this._game = game;
                this._gameId = gameId;
                this._data = data;
                this.txt_index.text = data.rank + 1;
                this.txt_id.text = (data.battle_id).toString();
                this.txt_earn.text = data.profit.toString();
                this.img_bg.skin = StringU.substitute(PathGameTongyong.ui_tongyong_general + "tu_bb{0}.png", data.rank % 2 == 0 ? 1 : 2);
                this.txt_earn.color = data.profit > 0 ? "#069e00" : "#ff0000";
                this.txt_type.text = data.room_name.toString();
                this.txt_time.text = Sync.getTimeShortStr(data.end_time * 1000);
                if (this._gameId == "buyu") { //捕鱼没有详情
                    var battleidArr = data.battle_id.split("_");
                    var str = battleidArr.length > 1 ? battleidArr[0] + battleidArr[1] : battleidArr[0];
                    this.txt_id.text = str;
                    this.btn_xq.visible = false;
                }
            };
            ListRecordItem.prototype.onMouseClick = function (e) {
                var _this = this;
                if (this._game && this._data) {
                    this._game.uiRoot.general.open(page_1.TongyongPageDef.PAGE_TONGYONG_BATTER_INFO, function (page) {
                        page.getDataInfo(_this._data.battle_id, _this._gameId, _this._data.end_time);
                    });
                }
            };
            ListRecordItem.prototype.destory = function (destoryChildern) {
                if (destoryChildern === void 0) { destoryChildern = true; }
                _super.prototype.destroy.call(this, destoryChildern);
                this.btn_xq.off(LEvent.CLICK, this, this.onMouseClick);
            };
            return ListRecordItem;
        }(ui.game_ui.tongyong.BaoBiaoTUI));
        page_1.ListRecordItem = ListRecordItem;
    })(page = gametongyong.page || (gametongyong.page = {}));
})(gametongyong || (gametongyong = {}));
//# sourceMappingURL=RecordPage.js.map