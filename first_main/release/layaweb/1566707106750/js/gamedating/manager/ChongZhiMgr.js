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
* name 充值记录
*/
var gamedating;
(function (gamedating) {
    var managers;
    (function (managers) {
        var ChongZhiMgr = /** @class */ (function (_super) {
            __extends(ChongZhiMgr, _super);
            function ChongZhiMgr(game) {
                var _this = _super.call(this, game) || this;
                _this._random_list = [];
                _this._dataInfo = {};
                _this._dc = 1;
                return _this;
            }
            ChongZhiMgr.prototype.init = function () {
                this._game.sceneGame.network.addHanlder(Protocols.SMSG_SEND_RAMDON_NAME, this, this.onUpdateRandomName);
            };
            ChongZhiMgr.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_PAYDRAWLIST) {
                    if (data && data.success == 0 && this._dc == data.dc) {
                        this._dataInfo[data.msg.page] = data.msg.list;
                        this.event(ChongZhiMgr.EVENT_CHANGE, 1);
                    }
                }
            };
            ChongZhiMgr.prototype.onUpdateRandomName = function (code, s2c) {
                if (s2c && s2c.str) {
                    var arr = void 0;
                    try {
                        s2c.str && (arr = JSON.parse(s2c.str));
                    }
                    catch (error) {
                        logd("解析失败", s2c);
                        localSetItem("client_error", Vesion["_defaultVesion"] + "  " + WebConfig.gwUrl + ": onUpdateRandomName" + (s2c.str));
                    }
                    if (arr) {
                        this._random_list = arr;
                        this.event(ChongZhiMgr.EVENT_CHANGE_RANDOM_NAME);
                    }
                }
            };
            /**
             * 获取随机名字
             */
            ChongZhiMgr.prototype.getRandomNameList = function () {
                return this._random_list;
            };
            Object.defineProperty(ChongZhiMgr.prototype, "dataInfo", {
                get: function () {
                    return this._dataInfo;
                },
                enumerable: true,
                configurable: true
            });
            ChongZhiMgr.prototype.getData = function (page) {
                this._page = page;
                this._game.sceneGame.network.call_get_paydrawlist(page, ChongZhiMgr.PAGE_MAX, this._dc);
            };
            ChongZhiMgr.prototype.clear = function (fource) {
                if (fource)
                    _super.prototype.clear.call(this, fource);
                this._game.sceneGame.network.removeHanlder(Protocols.SMSG_SEND_RAMDON_NAME, this, this.onUpdateRandomName);
                this.clearDataInfo();
            };
            ChongZhiMgr.prototype.clearDataInfo = function () {
                this._dataInfo = {};
            };
            ChongZhiMgr.EVENT_CHANGE = "ChongZhiMgr.EVENT_CHANGE";
            ChongZhiMgr.EVENT_CHANGE_RANDOM_NAME = "ChongZhiMgr.EVENT_CHANGE_RANDOM_NAME";
            ChongZhiMgr.PAGE_MAX = 100;
            return ChongZhiMgr;
        }(gamecomponent.managers.BaseMgr));
        managers.ChongZhiMgr = ChongZhiMgr;
    })(managers = gamedating.managers || (gamedating.managers = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=ChongZhiMgr.js.map