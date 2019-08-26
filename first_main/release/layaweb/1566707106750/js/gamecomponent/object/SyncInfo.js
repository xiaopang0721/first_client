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
* 同步对象
*/
var gamecomponent;
(function (gamecomponent) {
    var object;
    (function (object) {
        // export class SyncInfo extends SyncField {
        var SyncInfo = /** @class */ (function (_super) {
            __extends(SyncInfo, _super);
            function SyncInfo(v) {
                var _this = _super.call(this) || this;
                // 延迟时间
                _this._pings = [];
                _this._netDelay = SyncInfo.MAX_NETDELAY;
                _this._sceneObjectMgr = v;
                _this._date = new Date();
                _this._after_update = _this.onUpdate;
                // 每2秒ping一次服务器
                Laya.timer.loop(2000, _this, _this.ping);
                return _this;
            }
            Object.defineProperty(SyncInfo.prototype, "netDelay", {
                // 网络延迟
                get: function () {
                    return this._netDelay;
                },
                enumerable: true,
                configurable: true
            });
            SyncInfo.prototype.ping = function () {
                var time = this._date.getTime();
                var timeout = time - SyncInfo.MAX_NETDELAY;
                while (this._pings[0] && this._pings[0].time < timeout) {
                    this._pings.shift();
                }
                var ping = new Ping(time);
                this._pings.push(ping);
                // this._sceneObjectMgr.game.network.call_ping(ping.id);
            };
            SyncInfo.prototype.reply = function (id) {
                for (var i = 0; i < this._pings.length; i++) {
                    var ping = this._pings[i];
                    if (ping.id == id) {
                        this._netDelay = ping.getDelay(this._date.getTime());
                        logd("netDelay:", this._netDelay);
                        this._pings.splice(i, 1);
                        return;
                    }
                }
                this._netDelay = SyncInfo.MAX_NETDELAY;
                logd("netDelay:", this._netDelay);
            };
            SyncInfo.prototype.onUpdate = function (flags, mask, strmask) {
                // if (mask.GetBit(SyncField.SYNC_INT_FIELD_SYNC_ID)) {
                //     this.reply(this.GetSyncID());
                // }
            };
            SyncInfo.prototype.dispose = function () {
                Laya.timer.clear(this, this.ping);
                _super.prototype.dispose.call(this);
            };
            SyncInfo.MAX_NETDELAY = 460;
            return SyncInfo;
        }(core.obj.GuidObject));
        object.SyncInfo = SyncInfo;
        var Ping = /** @class */ (function () {
            function Ping(t) {
                this._id = Ping.lastID++;
                this._time = t;
            }
            Object.defineProperty(Ping.prototype, "id", {
                get: function () {
                    return this._id;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Ping.prototype, "time", {
                get: function () {
                    return this._time;
                },
                enumerable: true,
                configurable: true
            });
            Ping.prototype.getDelay = function (v) {
                return v - this._time;
            };
            Ping.lastID = 0;
            return Ping;
        }());
    })(object = gamecomponent.object || (gamecomponent.object = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=SyncInfo.js.map