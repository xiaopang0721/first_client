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
* 跑得快
*/
var gamepaodekuai;
(function (gamepaodekuai) {
    var data;
    (function (data) {
        var PaodekuaiMapInfo = /** @class */ (function (_super) {
            __extends(PaodekuaiMapInfo, _super);
            function PaodekuaiMapInfo(v) {
                var _this = _super.call(this, v, function () { return new data.PaodekuaiData(); }) || this;
                _this.isFirst = false; //只是显示详情空行用的
                return _this;
            }
            PaodekuaiMapInfo.prototype.onUpdate = function (flags, mask, strmask) {
                _super.prototype.onUpdate.call(this, flags, mask, strmask);
                var isNew = flags & core.obj.OBJ_OPT_NEW;
                if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
                    this._battleInfoMgr.OnUpdate();
                    this._sceneObjectMgr.event(PaodekuaiMapInfo.EVENT_PDK_BATTLE_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
                    this._sceneObjectMgr.event(PaodekuaiMapInfo.EVENT_PDK_STATUS_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_COUNT_DOWN)) {
                    this._sceneObjectMgr.event(PaodekuaiMapInfo.EVENT_PDK_COUNT_DOWN);
                }
            };
            PaodekuaiMapInfo.prototype.getBattleInfoToString = function () {
                var str = "";
                for (var i = 0; i < this._battleInfoMgr.info.length; i++) {
                    var battleInfo = this._battleInfoMgr.info[i];
                    var name_1 = this.GetPlayerNameFromSeat(battleInfo.SeatIndex);
                    if (battleInfo.Type == 10) { //抢关
                        var info = this._battleInfoMgr.info[i];
                        var newString = info.BetVal == 1 ? name_1 + "：抢关" : name_1 + "：不抢";
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
                    else if (battleInfo.Type == 7) { //先手
                        var info = this._battleInfoMgr.info[i];
                        var newString = "先出是：" + name_1;
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
                    else if (battleInfo.Type == 2) { //余牌
                        var info = this._battleInfoMgr.info[i];
                        var newString = name_1 + "余牌：" + info.BetVal;
                        str = str + "#" + newString;
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
            PaodekuaiMapInfo.prototype.GetPlayerNameFromSeat = function (index) {
                var name;
                var users = this._battleInfoMgr.users;
                name = users[index - 1].name;
                return name;
            };
            //地图状态变更
            PaodekuaiMapInfo.EVENT_PDK_STATUS_CHECK = "PaodekuaiMapInfo.EVENT_PDK_STATUS_CHECK";
            //战斗体更新
            PaodekuaiMapInfo.EVENT_PDK_BATTLE_CHECK = "PaodekuaiMapInfo.EVENT_PDK_BATTLE_CHECK";
            //倒计时时间戳更新
            PaodekuaiMapInfo.EVENT_PDK_COUNT_DOWN = "PaodekuaiMapInfo.EVENT_PDK_COUNT_DOWN";
            return PaodekuaiMapInfo;
        }(gamecomponent.object.MapInfoT));
        data.PaodekuaiMapInfo = PaodekuaiMapInfo;
    })(data = gamepaodekuai.data || (gamepaodekuai.data = {}));
})(gamepaodekuai || (gamepaodekuai = {}));
//# sourceMappingURL=PaodekuaiMapInfo.js.map