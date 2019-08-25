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
* name 返佣
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var managers;
    (function (managers) {
        var FanYongMgr = /** @class */ (function (_super) {
            __extends(FanYongMgr, _super);
            function FanYongMgr(game) {
                var _this = _super.call(this, game) || this;
                _this._dataInfo = {};
                _this._dc = 3;
                return _this;
            }
            FanYongMgr.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_PAYDRAWLIST) {
                    if (data && data.success == 0 && this._dc == data.dc) {
                        this._dataInfo[data.msg.page] = data.msg.list;
                        this.event(FanYongMgr.EVENT_CHANGE, 1);
                    }
                }
            };
            Object.defineProperty(FanYongMgr.prototype, "dataInfo", {
                get: function () {
                    return this._dataInfo;
                },
                enumerable: true,
                configurable: true
            });
            FanYongMgr.prototype.getData = function (page) {
                this._page = page;
                this._game.sceneGame.network.call_get_paydrawlist(page, FanYongMgr.PAGE_MAX, this._dc);
            };
            FanYongMgr.prototype.clear = function (fource) {
                if (fource)
                    _super.prototype.clear.call(this, fource);
                this._dataInfo = {};
            };
            FanYongMgr.EVENT_CHANGE = "FanYongMgr.changge";
            FanYongMgr.PAGE_MAX = 100;
            return FanYongMgr;
        }(gamecomponent.managers.BaseMgr));
        managers.FanYongMgr = FanYongMgr;
    })(managers = gamedatingnqp.managers || (gamedatingnqp.managers = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=FanYongMgr.js.map