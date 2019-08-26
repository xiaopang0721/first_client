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
* 三公-地图
*/
var gamesangong;
(function (gamesangong) {
    var data;
    (function (data) {
        var SangongMapInfo = /** @class */ (function (_super) {
            __extends(SangongMapInfo, _super);
            function SangongMapInfo(v) {
                return _super.call(this, v, function () { return new data.SangongData(); }) || this;
            }
            SangongMapInfo.prototype.onUpdate = function (flags, mask, strmask) {
                _super.prototype.onUpdate.call(this, flags, mask, strmask);
                var isNew = flags & core.obj.OBJ_OPT_NEW;
                if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
                    this._battleInfoMgr.OnUpdate();
                    this._sceneObjectMgr.event(SangongMapInfo.EVENT_SG_BATTLE_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
                    this._sceneObjectMgr.event(SangongMapInfo.EVENT_SG_STATUS_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_COUNT_DOWN)) {
                    this._sceneObjectMgr.event(SangongMapInfo.EVENT_SG_COUNT_DOWN);
                }
            };
            SangongMapInfo.prototype.getBattleInfoToString = function () {
                var str = "";
                for (var i = 0; i < this._battleInfoMgr.info.length; i++) {
                    var battleInfo = this._battleInfoMgr.info[i];
                    var name_1 = this.GetPlayerNameFromSeat(battleInfo.SeatIndex);
                    if (battleInfo.Type == 12) {
                        var info = this._battleInfoMgr.info[i];
                        var isQiang = info.BetVal == 1 ? "抢庄" : "不抢庄";
                        var newString = name_1 + "：" + isQiang;
                        if (str == "") {
                            str = newString;
                        }
                        else {
                            str = str + "#" + newString;
                        }
                    }
                    else if (battleInfo.Type == 1) {
                        var info = this._battleInfoMgr.info[i];
                        var newString = "庄家是：" + name_1;
                        str = str + "#" + newString;
                    }
                    else if (battleInfo.Type == 13) {
                        var info = this._battleInfoMgr.info[i];
                        var newString = name_1 + "：" + "下注" + info.BankerRate + "倍";
                        str = str + "#" + newString;
                    }
                    else if (battleInfo.Type == 3) {
                        var info = this._battleInfoMgr.info[i];
                        var newString = name_1 + "：" + "摊牌，牌型是：" + SangongMapInfo.cardType[info.CardType - 1];
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
            SangongMapInfo.prototype.GetPlayerNameFromSeat = function (index) {
                var name;
                var users = this._battleInfoMgr.users;
                name = users[index - 1].name;
                return name;
            };
            //地图状态变更
            SangongMapInfo.EVENT_SG_STATUS_CHECK = "SangongMapInfo.EVENT_SG_STATUS_CHECK";
            //战斗体更新
            SangongMapInfo.EVENT_SG_BATTLE_CHECK = "SangongMapInfo.EVENT_SG_BATTLE_CHECK";
            //倒计时时间戳更新
            SangongMapInfo.EVENT_SG_COUNT_DOWN = "SangongMapInfo.EVENT_SG_COUNT_DOWN";
            //牌型
            SangongMapInfo.cardType = ['0点', '1点', '2点', '3点', '4点', '5点', '6点', '7点', '8点', '9点', '三公', '炸弹', '爆玖'];
            return SangongMapInfo;
        }(gamecomponent.object.MapInfoT));
        data.SangongMapInfo = SangongMapInfo;
    })(data = gamesangong.data || (gamesangong.data = {}));
})(gamesangong || (gamesangong = {}));
//# sourceMappingURL=SangongMapInfo.js.map