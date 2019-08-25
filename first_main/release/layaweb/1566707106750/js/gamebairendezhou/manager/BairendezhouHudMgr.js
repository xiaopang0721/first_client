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
var gamebairendezhou;
(function (gamebairendezhou) {
    var manager;
    (function (manager) {
        var BairendezhouHudMgr = /** @class */ (function (_super) {
            __extends(BairendezhouHudMgr, _super);
            function BairendezhouHudMgr(game) {
                var _this = _super.call(this, game) || this;
                _this._data = [];
                _this._delta = 3000;
                _this._game.network.addHanlder(Protocols.SMSG_BAIRENDEZHOU_RETURN_MAPINFO, _this, _this.onOptHandler);
                return _this;
            }
            Object.defineProperty(BairendezhouHudMgr.prototype, "data", {
                get: function () {
                    return this._data;
                },
                enumerable: true,
                configurable: true
            });
            BairendezhouHudMgr.prototype.onOptHandler = function (optcode, msg) {
                var mapRecord1 = [];
                if (msg.record1 != "")
                    mapRecord1 = JSON.parse(msg.record1);
                var mapPos1 = [];
                if (msg.pos1 != "")
                    mapPos1 = JSON.parse(msg.pos1);
                var data1 = [msg.status1, msg.countdown1, mapRecord1, mapPos1];
                var mapRecord2 = [];
                if (msg.record2 != "")
                    mapRecord2 = JSON.parse(msg.record2);
                var mapPos2 = [];
                if (msg.pos2 != "")
                    mapPos2 = JSON.parse(msg.pos2);
                var data2 = [msg.status2, msg.countdown2, mapRecord2, mapPos2];
                var mapRecord3 = [];
                if (msg.record3 != "")
                    mapRecord3 = JSON.parse(msg.record3);
                var mapPos3 = [];
                if (msg.pos3 != "")
                    mapPos3 = JSON.parse(msg.pos3);
                var data3 = [msg.status3, msg.countdown3, mapRecord3, mapPos3];
                var mapRecord4 = [];
                if (msg.record4 != "")
                    mapRecord4 = JSON.parse(msg.record4);
                var mapPos4 = [];
                if (msg.pos4 != "")
                    mapPos4 = JSON.parse(msg.pos4);
                var data4 = [msg.status4, msg.countdown4, mapRecord4, mapPos4];
                this._data = [data1, data2, data3, data4];
                this.event(BairendezhouHudMgr.EVENT_RETURN_MAPINFO);
            };
            /**
             * 帧间隔心跳
             */
            BairendezhouHudMgr.prototype.deltaUpdate = function () {
                this._game.network.call_bairendezhou_get_mapinfo();
            };
            BairendezhouHudMgr.prototype.clear = function () {
                Laya.timer.clearAll(this);
                this._game.network.removeHanlder(Protocols.SMSG_BAIRENDEZHOU_RETURN_MAPINFO, this, this.onOptHandler);
                _super.prototype.clear.call(this);
            };
            BairendezhouHudMgr.EVENT_RETURN_MAPINFO = "BairendezhouHudMgr.RETURN_MAPINFO";
            BairendezhouHudMgr.PAGE_MAX = 100;
            return BairendezhouHudMgr;
        }(gamecomponent.managers.BaseMgr));
        manager.BairendezhouHudMgr = BairendezhouHudMgr;
    })(manager = gamebairendezhou.manager || (gamebairendezhou.manager = {}));
})(gamebairendezhou || (gamebairendezhou = {}));
//# sourceMappingURL=BairendezhouHudMgr.js.map