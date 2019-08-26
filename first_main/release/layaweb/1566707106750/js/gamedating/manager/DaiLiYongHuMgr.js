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
        var DaiLiYongHuMgr = /** @class */ (function (_super) {
            __extends(DaiLiYongHuMgr, _super);
            function DaiLiYongHuMgr(game) {
                var _this = _super.call(this, game) || this;
                _this._dataHuiZong = {};
                _this._dataInfoList = {};
                return _this;
            }
            DaiLiYongHuMgr.prototype.agencyType = function () {
                return this._agencyType;
            };
            DaiLiYongHuMgr.prototype.getDataHuiZong = function (index) {
                return this._dataHuiZong[index];
            };
            DaiLiYongHuMgr.prototype.getDataInfo = function (index) {
                return this._dataInfoList[index];
            };
            DaiLiYongHuMgr.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_AGENCYPLAYEROFFLINEDATA) {
                    if (data && data.success == 0) {
                        var index = data.msg.index - 1;
                        if (!this._dataInfoList[index])
                            this._dataInfoList[index] = {};
                        if (!this._dataHuiZong[index])
                            this._dataHuiZong[index] = {};
                        if (!data.msg || !data.msg.list || !data.msg.list.length) {
                            return;
                        }
                        this._agencyType = data.msg.agencytype;
                        this._dataHuiZong[index][0] = data.msg.all_teamyj;
                        this._dataHuiZong[index][1] = data.msg.all_selfyj;
                        this._dataHuiZong[index][2] = data.msg.all_teamregnum;
                        this._dataInfoList[index][data.msg.page] = data.msg.list;
                        this.event(DaiLiYongHuMgr.EVENT_CHANGE, 1);
                    }
                }
            };
            DaiLiYongHuMgr.prototype.getData = function (date_type) {
                this._game.sceneGame.network.call_get_daili_yonghu(date_type + 1);
            };
            DaiLiYongHuMgr.prototype.clear = function (fource) {
                if (fource)
                    _super.prototype.clear.call(this, fource);
                for (var key in this._dataInfoList) {
                    this._dataInfoList[key] = [];
                }
            };
            DaiLiYongHuMgr.EVENT_CHANGE = "DaiLiYongHuMgr.changge";
            DaiLiYongHuMgr.PAGE_MAX = 100;
            return DaiLiYongHuMgr;
        }(gamecomponent.managers.BaseMgr));
        managers.DaiLiYongHuMgr = DaiLiYongHuMgr;
    })(managers = gamedating.managers || (gamedating.managers = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=DaiLiYongHuMgr.js.map