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
var gametbniuniu;
(function (gametbniuniu) {
    var data;
    (function (data) {
        var TbniuniuMapInfo = /** @class */ (function (_super) {
            __extends(TbniuniuMapInfo, _super);
            function TbniuniuMapInfo(v) {
                return _super.call(this, v, function () { return new data.TbNiuNiuData(); }) || this;
            }
            //当对象更新发生时
            TbniuniuMapInfo.prototype.onUpdate = function (flags, mask, strmask) {
                _super.prototype.onUpdate.call(this, flags, mask, strmask);
                var isNew = flags & core.obj.OBJ_OPT_NEW;
                if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
                    this._sceneObjectMgr.event(TbniuniuMapInfo.EVENT_STATUS_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
                    this._battleInfoMgr.OnUpdate();
                    this._sceneObjectMgr.event(TbniuniuMapInfo.EVENT_BATTLE_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE1)) {
                    this._sceneObjectMgr.event(TbniuniuMapInfo.EVENT_STATUS_CONTINUE);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_COUNT_DOWN)) {
                    this._sceneObjectMgr.event(TbniuniuMapInfo.EVENT_COUNT_DOWN);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_GAME_NO)) {
                    this._sceneObjectMgr.event(TbniuniuMapInfo.EVENT_GAME_NO);
                }
            };
            TbniuniuMapInfo.prototype.getBattleInfoToString = function () {
                var str = "";
                for (var i = 0; i < this._battleInfoMgr.info.length; i++) {
                    var battleInfo = this._battleInfoMgr.info[i];
                    var name_1 = this.GetPlayerNameFromSeat(battleInfo.SeatIndex);
                    if (battleInfo.Type == 2) {
                        var info = this._battleInfoMgr.info[i];
                        var newString = name_1 + "：" + "下注" + info.BetVal + "倍";
                        str = str + "#" + newString;
                    }
                    else if (battleInfo.Type == 3) {
                        var info = this._battleInfoMgr.info[i];
                        var newString = name_1 + "：" + "摊牌，牌型是：" + TbniuniuMapInfo.cardType[info.CardType - 1];
                        str = str + "#" + newString;
                    }
                    else if (battleInfo.Type == 11) {
                        var info = this._battleInfoMgr.info[i];
                        var newString = name_1 + "盈利：" + info.SettleVal;
                        str = str + "#" + newString;
                    }
                }
                return str;
            };
            //通过座位取玩家名字
            TbniuniuMapInfo.prototype.GetPlayerNameFromSeat = function (index) {
                var name;
                var users = this._battleInfoMgr.users;
                name = users[index - 1].name;
                return name;
            };
            //地图状态变更
            TbniuniuMapInfo.EVENT_STATUS_CHECK = "TbniuniuMapInf.EVENT_STATUS_CHECK";
            //战斗体更新
            TbniuniuMapInfo.EVENT_BATTLE_CHECK = "TbniuniuMapInfo.EVENT_BATTLE_CHECK";
            //继续游戏状态
            TbniuniuMapInfo.EVENT_STATUS_CONTINUE = "TbniuniuMapInfo.EVENT_STATUS_CONTINUE";
            //牌局号
            TbniuniuMapInfo.EVENT_GAME_NO = "TbniuniuMapInfo.EVENT_GAME_NO";
            //倒计时时间戳更新
            TbniuniuMapInfo.EVENT_COUNT_DOWN = "TbniuniuMapInfo.EVENT_COUNT_DOWN";
            //牌型
            TbniuniuMapInfo.cardType = ['没牛', '牛一', '牛二', '牛三', '牛四', '牛五', '牛六', '牛七', '牛八', '牛九', '牛牛', '四花牛', '五花牛', '四炸', '五小牛'];
            return TbniuniuMapInfo;
        }(gamecomponent.object.MapInfoT));
        data.TbniuniuMapInfo = TbniuniuMapInfo;
    })(data = gametbniuniu.data || (gametbniuniu.data = {}));
})(gametbniuniu || (gametbniuniu = {}));
//# sourceMappingURL=TbNiuniuMapInfo.js.map