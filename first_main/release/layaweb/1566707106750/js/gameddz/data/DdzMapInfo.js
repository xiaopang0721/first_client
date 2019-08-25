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
* 斗地主
*/
var gameddz;
(function (gameddz) {
    var data;
    (function (data) {
        var DdzMapInfo = /** @class */ (function (_super) {
            __extends(DdzMapInfo, _super);
            function DdzMapInfo(v) {
                var _this = _super.call(this, v, function () { return new data.DdzData(); }) || this;
                _this.isFirst = false; //只是显示详情空行用的
                return _this;
            }
            DdzMapInfo.prototype.onUpdate = function (flags, mask, strmask) {
                _super.prototype.onUpdate.call(this, flags, mask, strmask);
                var isNew = flags & core.obj.OBJ_OPT_NEW;
                if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
                    this._battleInfoMgr.OnUpdate();
                    this._sceneObjectMgr.event(DdzMapInfo.EVENT_DDZ_BATTLE_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
                    this._sceneObjectMgr.event(DdzMapInfo.EVENT_DDZ_STATUS_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_COUNT_DOWN)) {
                    this._sceneObjectMgr.event(DdzMapInfo.EVENT_DDZ_COUNT_DOWN);
                }
            };
            DdzMapInfo.prototype.getBattleInfoToString = function () {
                var str = "";
                for (var i = 0; i < this._battleInfoMgr.info.length; i++) {
                    var battleInfo = this._battleInfoMgr.info[i];
                    var name_1 = this.GetPlayerNameFromSeat(battleInfo.SeatIndex);
                    if (battleInfo.Type == 35) { //定下地主
                        var info = this._battleInfoMgr.info[i];
                        var newString = "地主是：" + name_1;
                        if (!this.isFirst) {
                            this.isFirst = true;
                            if (str == "") {
                                str = newString;
                            }
                            else {
                                str = str + "#" + "" + "#" + newString;
                            }
                        }
                        else {
                            str = str + "#" + newString;
                        }
                    }
                    else if (battleInfo.Type == 11) { //结算
                        var info = this._battleInfoMgr.info[i];
                        var newString = name_1 + "盈利：" + info.SettleVal;
                        str = str + "#" + newString;
                        this.isFirst = false;
                    }
                }
                return str;
            };
            //通过座位取玩家名字
            DdzMapInfo.prototype.GetPlayerNameFromSeat = function (index) {
                var name;
                var users = this._battleInfoMgr.users;
                name = users[index - 1].name;
                return name;
            };
            //地图状态变更
            DdzMapInfo.EVENT_DDZ_STATUS_CHECK = "DdzMapInfo.EVENT_DDZ_STATUS_CHECK";
            //战斗体更新
            DdzMapInfo.EVENT_DDZ_BATTLE_CHECK = "DdzMapInfo.EVENT_DDZ_BATTLE_CHECK";
            //倒计时时间戳更新
            DdzMapInfo.EVENT_DDZ_COUNT_DOWN = "DdzMapInfo.EVENT_DDZ_COUNT_DOWN";
            return DdzMapInfo;
        }(gamecomponent.object.MapInfoT));
        data.DdzMapInfo = DdzMapInfo;
    })(data = gameddz.data || (gameddz.data = {}));
})(gameddz || (gameddz = {}));
//# sourceMappingURL=DdzMapInfo.js.map