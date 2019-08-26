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
* name 报表管理器
*/
var gamedating;
(function (gamedating) {
    var managers;
    (function (managers) {
        var BaoBiaoMgr = /** @class */ (function (_super) {
            __extends(BaoBiaoMgr, _super);
            function BaoBiaoMgr(game) {
                var _this = _super.call(this, game) || this;
                _this._totalList = {};
                _this._dataInfoList = {};
                return _this;
            }
            BaoBiaoMgr.prototype.getDataInfo = function (index) {
                return this._dataInfoList[index];
            };
            BaoBiaoMgr.prototype.getTotalByIndex = function (index) {
                return this._totalList[index];
            };
            BaoBiaoMgr.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_GETMONEYLOG) {
                    if (data && data.success == 0) {
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
                        this.event(BaoBiaoMgr.EVENT_CHANGE, 1);
                    }
                }
            };
            BaoBiaoMgr.prototype.getData = function (page, time, index) {
                logd(Sync.getTimeStr3(time));
                this._game.sceneGame.network.call_get_moneylog(page, BaoBiaoMgr.PAGE_MAX, Sync.getYearMonthDayTime(time), index);
            };
            BaoBiaoMgr.prototype.clear = function (fource) {
                if (fource)
                    _super.prototype.clear.call(this, fource);
                this._dataInfoList[6] = [];
                this._totalList[6] = 0;
            };
            BaoBiaoMgr.EVENT_CHANGE = "BaoBiaoMgr.changge";
            BaoBiaoMgr.PAGE_MAX = 100;
            return BaoBiaoMgr;
        }(gamecomponent.managers.BaseMgr));
        managers.BaoBiaoMgr = BaoBiaoMgr;
    })(managers = gamedating.managers || (gamedating.managers = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=BaoBiaoMgr.js.map