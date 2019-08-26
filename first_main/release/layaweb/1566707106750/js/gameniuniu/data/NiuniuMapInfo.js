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
var gameniuniu;
(function (gameniuniu) {
    var data;
    (function (data) {
        var NiuniuMapInfo = /** @class */ (function (_super) {
            __extends(NiuniuMapInfo, _super);
            function NiuniuMapInfo(v) {
                var _this = _super.call(this, v, function () { return new data.NiuData(); }) || this;
                _this._settleCount = 0; //结算计数，方便房卡不同局分割开
                return _this;
            }
            //当对象更新发生时
            NiuniuMapInfo.prototype.onUpdate = function (flags, mask, strmask) {
                _super.prototype.onUpdate.call(this, flags, mask, strmask);
                var isNew = flags & core.obj.OBJ_OPT_NEW;
                if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
                    this._sceneObjectMgr.event(NiuniuMapInfo.EVENT_STATUS_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
                    this._battleInfoMgr.OnUpdate();
                    this._sceneObjectMgr.event(NiuniuMapInfo.EVENT_BATTLE_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE1)) {
                    this._sceneObjectMgr.event(NiuniuMapInfo.EVENT_GAME_ROUND_CHANGE);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_COUNT_DOWN)) {
                    this._sceneObjectMgr.event(NiuniuMapInfo.EVENT_COUNT_DOWN);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_GAME_NO)) {
                    this._sceneObjectMgr.event(NiuniuMapInfo.EVENT_GAME_NO);
                }
            };
            NiuniuMapInfo.prototype.getBattleInfoToString = function () {
                var str = "";
                for (var i = 0; i < this._battleInfoMgr.info.length; i++) {
                    var battleInfo = this._battleInfoMgr.info[i];
                    var name_1 = this.GetPlayerNameFromSeat(battleInfo.SeatIndex);
                    if (battleInfo.Type == 12) {
                        var info = this._battleInfoMgr.info[i];
                        var newString = void 0;
                        if (info.BetVal == 0) {
                            newString = name_1 + "：" + "不抢庄";
                        }
                        else {
                            newString = name_1 + "：" + "抢庄" + info.BetVal + "倍";
                        }
                        if (str == "") {
                            str = newString;
                        }
                        else {
                            str = str + "#" + newString;
                        }
                    }
                    else if (battleInfo.Type == 13) {
                        var info = this._battleInfoMgr.info[i];
                        var newString = "庄家是：" + name_1;
                        str = str + "#" + newString;
                    }
                    else if (battleInfo.Type == 2) {
                        var info = this._battleInfoMgr.info[i];
                        var newString = name_1 + "：" + "下注" + info.BetVal + "倍";
                        str = str + "#" + newString;
                    }
                    else if (battleInfo.Type == 3) {
                        var info = this._battleInfoMgr.info[i];
                        var newString = name_1 + "：" + "摊牌，牌型是：" + NiuniuMapInfo.cardType[info.CardType - 1];
                        str = str + "#" + newString;
                    }
                    else if (battleInfo.Type == 11) {
                        var info = this._battleInfoMgr.info[i];
                        var newString = name_1 + "盈利：" + info.SettleVal;
                        this._settleCount++;
                        str = str + "#" + newString;
                        if (this._settleCount == this.GetPlayerNumFromSeat()) {
                            str = str + "#";
                            this._settleCount = 0;
                        }
                    }
                }
                return str;
            };
            //通过座位取玩家名字
            NiuniuMapInfo.prototype.GetPlayerNameFromSeat = function (index) {
                var name;
                var users = this._battleInfoMgr.users;
                name = users[index - 1].name;
                return name;
            };
            //遍历座位获取玩家总数
            NiuniuMapInfo.prototype.GetPlayerNumFromSeat = function () {
                var num = 0;
                for (var i = 0; i < this._battleInfoMgr.users.length; i++) {
                    var user = this._battleInfoMgr.users[i];
                    if (user.name)
                        num++;
                }
                return num;
            };
            //地图状态变更
            NiuniuMapInfo.EVENT_STATUS_CHECK = "NiuniuMapInfo.EVENT_STATUS_CHECK";
            //战斗体更新
            NiuniuMapInfo.EVENT_BATTLE_CHECK = "NiuniuMapInfo.EVENT_BATTLE_CHECK";
            //房卡局数更新
            NiuniuMapInfo.EVENT_GAME_ROUND_CHANGE = "NiuniuMapInfo.EVENT_GAME_ROUND_CHANGE";
            //牌局号
            NiuniuMapInfo.EVENT_GAME_NO = "NiuniuMapInfo.EVENT_GAME_NO";
            //倒计时时间戳更新
            NiuniuMapInfo.EVENT_COUNT_DOWN = "NiuniuMapInfo.EVENT_COUNT_DOWN";
            //牌型
            NiuniuMapInfo.cardType = ['没牛', '牛一', '牛二', '牛三', '牛四', '牛五', '牛六', '牛七', '牛八', '牛九', '牛牛', '四花牛', '五花牛', '四炸', '五小牛'];
            return NiuniuMapInfo;
        }(gamecomponent.object.MapInfoT));
        data.NiuniuMapInfo = NiuniuMapInfo;
    })(data = gameniuniu.data || (gameniuniu.data = {}));
})(gameniuniu || (gameniuniu = {}));
//# sourceMappingURL=NiuniuMapInfo.js.map