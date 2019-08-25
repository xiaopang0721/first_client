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
* name 排行榜
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var managers;
    (function (managers) {
        var TopMgr = /** @class */ (function (_super) {
            __extends(TopMgr, _super);
            function TopMgr(game) {
                var _this = _super.call(this, game) || this;
                _this._dataInfo = {};
                return _this;
            }
            Object.defineProperty(TopMgr.prototype, "myData", {
                get: function () {
                    if (!this._myData) {
                        this._myData = new MyTopData();
                    }
                    return this._myData;
                },
                enumerable: true,
                configurable: true
            });
            TopMgr.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_GETRANKINGLIST) {
                    if (data && data.success == 0) {
                        this._dataInfo[this._type] = data.msg.list;
                        this.myData.mymoney = data.mymoney < 0 ? 0 : data.mymoney;
                        this.myData.myrank = 0;
                        if (data.msg.list) {
                            for (var index = 0; index < data.msg.list.length; index++) {
                                var topdata = data.msg.list[index];
                                if (topdata && topdata.userid.toString() == WebConfig.info.userid) {
                                    this.myData.myrank = topdata.num;
                                    break;
                                }
                            }
                            this.event(TopMgr.EVENT_CHANGE, 1);
                        }
                    }
                }
            };
            Object.defineProperty(TopMgr.prototype, "rankingInfo", {
                get: function () {
                    return this._dataInfo;
                },
                enumerable: true,
                configurable: true
            });
            TopMgr.prototype.getRankingList = function (type) {
                this._type = type;
                this._game.sceneGame.network.call_get_ranking_list(type + 1);
            };
            TopMgr.prototype.clear = function (fource) {
                if (fource)
                    _super.prototype.clear.call(this, fource);
                this._dataInfo = {};
            };
            TopMgr.EVENT_CHANGE = "TopMgr.changge";
            TopMgr.PAGE_MAX = 100;
            return TopMgr;
        }(gamecomponent.managers.BaseMgr));
        managers.TopMgr = TopMgr;
        var TopData = /** @class */ (function () {
            function TopData() {
            }
            return TopData;
        }());
        var MyTopData = /** @class */ (function () {
            function MyTopData() {
                this.mymoney = 0;
                this.myrank = 0;
            }
            return MyTopData;
        }());
    })(managers = gamedatingnqp.managers || (gamedatingnqp.managers = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=TopMgr.js.map