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
    var manager;
    (function (manager) {
        var RecordMgr = /** @class */ (function (_super) {
            __extends(RecordMgr, _super);
            function RecordMgr() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._totalList = {};
                _this._dataInfoList = {};
                return _this;
            }
            Object.defineProperty(RecordMgr, "ins", {
                get: function () {
                    if (!this._ins) {
                        this._ins = new RecordMgr();
                    }
                    return this._ins;
                },
                enumerable: true,
                configurable: true
            });
            RecordMgr.prototype.getDataInfo = function (index, first) {
                if (index == 6 && first) {
                    this._dataInfoList[index] = [];
                    this._totalList[index] = 0;
                }
                return this._dataInfoList[index];
            };
            RecordMgr.prototype.getTotalByIndex = function (index) {
                return this._totalList[index];
            };
            RecordMgr.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_BETLIST) {
                    if (data && data.success == 0 && this._game_id == data.game_id) {
                        var index = data.msg.index;
                        if (!this._dataInfoList[index])
                            this._dataInfoList[index] = {};
                        if (!this._totalList[index])
                            this._totalList[index] = 0;
                        if (!data.msg || !data.msg.list || !data.msg.list.length) {
                            return;
                        }
                        this._dataInfoList[index][data.msg.page] = data.msg.list;
                        this._totalList[index] = data.msg.all;
                        this.event(RecordMgr.RECORD_CHANGE, 1);
                    }
                }
            };
            Object.defineProperty(RecordMgr.prototype, "game_id", {
                get: function () {
                    return this._game_id;
                },
                set: function (v) {
                    this._game_id = v;
                },
                enumerable: true,
                configurable: true
            });
            RecordMgr.prototype.getData = function (page, roomId, time, index) {
                var _roomid = roomId && roomId != "" ? Number(roomId) : 0;
                logd(Sync.getTimeStr3(time));
                this._game.network.call_get_bet_list(page, RecordMgr.PAGE_MAX, Sync.getYearMonthDayTime(time), this._game_id, _roomid, index);
            };
            RecordMgr.RECORD_CHANGE = "RecordMgr.changge";
            RecordMgr.PAGE_MAX = 100;
            return RecordMgr;
        }(gamecomponent.managers.BaseMgr));
        manager.RecordMgr = RecordMgr;
    })(manager = gametongyong.manager || (gametongyong.manager = {}));
})(gametongyong || (gametongyong = {}));
//# sourceMappingURL=RecordMgr.js.map