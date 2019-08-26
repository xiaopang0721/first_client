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
var gamebrniuniu;
(function (gamebrniuniu) {
    var manager;
    (function (manager) {
        var BrNiuNiuHudMgr = /** @class */ (function (_super) {
            __extends(BrNiuNiuHudMgr, _super);
            function BrNiuNiuHudMgr(game) {
                var _this = _super.call(this, game) || this;
                _this._data = [];
                _this._delta = 3000;
                _this._game.network.addHanlder(Protocols.SMSG_BRNN_RETURN_MAPINFO, _this, _this.onOptHandler);
                return _this;
            }
            Object.defineProperty(BrNiuNiuHudMgr.prototype, "data", {
                get: function () {
                    return this._data;
                },
                enumerable: true,
                configurable: true
            });
            BrNiuNiuHudMgr.prototype.onOptHandler = function (optcode, msg) {
                var mapRecord1 = [];
                if (msg.record1 != "")
                    mapRecord1 = JSON.parse(msg.record1);
                for (var i = 0; i < mapRecord1.length / 2; i++) {
                    var val = mapRecord1[i];
                    mapRecord1[i] = mapRecord1[mapRecord1.length - 1 - i];
                    mapRecord1[mapRecord1.length - 1 - i] = val;
                }
                var data1 = [msg.status1, msg.countdown1, mapRecord1];
                var mapRecord2 = [];
                if (msg.record2 != "")
                    mapRecord2 = JSON.parse(msg.record2);
                for (var i = 0; i < mapRecord2.length / 2; i++) {
                    var val = mapRecord2[i];
                    mapRecord2[i] = mapRecord2[mapRecord2.length - 1 - i];
                    mapRecord2[mapRecord2.length - 1 - i] = val;
                }
                var data2 = [msg.status2, msg.countdown2, mapRecord2];
                var mapRecord3 = [];
                if (msg.record3 != "")
                    mapRecord3 = JSON.parse(msg.record3);
                for (var i = 0; i < mapRecord3.length / 2; i++) {
                    var val = mapRecord3[i];
                    mapRecord3[i] = mapRecord3[mapRecord3.length - 1 - i];
                    mapRecord3[mapRecord3.length - 1 - i] = val;
                }
                var data3 = [msg.status3, msg.countdown3, mapRecord3];
                var mapRecord4 = [];
                if (msg.record4 != "")
                    mapRecord4 = JSON.parse(msg.record4);
                for (var i = 0; i < mapRecord4.length / 2; i++) {
                    var val = mapRecord4[i];
                    mapRecord4[i] = mapRecord4[mapRecord4.length - 1 - i];
                    mapRecord4[mapRecord4.length - 1 - i] = val;
                }
                var data4 = [msg.status4, msg.countdown4, mapRecord4];
                this._data = [data1, data2, data3, data4];
                this.event(BrNiuNiuHudMgr.EVENT_RETURN_MAPINFO);
            };
            /**
             * 帧间隔心跳
             */
            BrNiuNiuHudMgr.prototype.deltaUpdate = function () {
                this._game.network.call_brnn_get_mapinfo();
            };
            BrNiuNiuHudMgr.prototype.clear = function () {
                Laya.timer.clearAll(this);
                this._game.network.removeHanlder(Protocols.SMSG_BRNN_RETURN_MAPINFO, this, this.onOptHandler);
                _super.prototype.clear.call(this);
            };
            BrNiuNiuHudMgr.EVENT_RETURN_MAPINFO = "BrNiuNiuHudMgr.RETURN_MAPINFO";
            return BrNiuNiuHudMgr;
        }(gamecomponent.managers.BaseMgr));
        manager.BrNiuNiuHudMgr = BrNiuNiuHudMgr;
    })(manager = gamebrniuniu.manager || (gamebrniuniu.manager = {}));
})(gamebrniuniu || (gamebrniuniu = {}));
//# sourceMappingURL=BrNiuNiuHudMgr.js.map