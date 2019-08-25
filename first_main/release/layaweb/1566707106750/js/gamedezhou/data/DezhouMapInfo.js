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
var gamedezhou;
(function (gamedezhou) {
    var data;
    (function (data) {
        var DezhouMapInfo = /** @class */ (function (_super) {
            __extends(DezhouMapInfo, _super);
            function DezhouMapInfo(v) {
                var _this = _super.call(this, v, function () { return new data.DezhouData(); }) || this;
                _this.cardType = ["高牌", "一对", "两对", "三条", "顺子", "同花", "葫芦", "金刚", "同花顺", "皇家同花顺"];
                return _this;
            }
            //当对象更新发生时
            DezhouMapInfo.prototype.onUpdate = function (flags, mask, strmask) {
                _super.prototype.onUpdate.call(this, flags, mask, strmask);
                var isNew = flags & core.obj.OBJ_OPT_NEW;
                if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
                    this._sceneObjectMgr.event(DezhouMapInfo.EVENT_STATUS_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
                    this._battleInfoMgr.OnUpdate();
                    this._sceneObjectMgr.event(DezhouMapInfo.EVENT_BATTLE_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE1)) {
                    this._sceneObjectMgr.event(DezhouMapInfo.EVENT_STATUS_CONTINUE);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_COUNT_DOWN)) {
                    this._sceneObjectMgr.event(DezhouMapInfo.EVENT_COUNT_DOWN);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_GAME_NO)) {
                    this._sceneObjectMgr.event(DezhouMapInfo.EVENT_GAME_NO);
                }
            };
            DezhouMapInfo.prototype.getBattleInfoToString = function () {
                var str = "";
                var count = 1;
                var round = 0;
                for (var i = 0; i < this._battleInfoMgr.info.length; i++) {
                    var battleInfo = this._battleInfoMgr.info[i];
                    if (battleInfo.Type == 1) {
                        //过牌
                        var name_1 = this.GetPlayerNameFromSeat(battleInfo.SeatIndex);
                        var info = this._battleInfoMgr.info[i];
                        var newString = name_1 + "：" + "过牌";
                        str = str + "#" + newString;
                    }
                    else if (battleInfo.Type == 2) {
                        //跟注
                        var name_2 = this.GetPlayerNameFromSeat(battleInfo.SeatIndex);
                        var info = this._battleInfoMgr.info[i];
                        var newString = name_2 + "：" + "跟注" + info.BetVal;
                        str = str + "#" + newString;
                    }
                    else if (battleInfo.Type == 9) {
                        //加注
                        var name_3 = this.GetPlayerNameFromSeat(battleInfo.SeatIndex);
                        var info = this._battleInfoMgr.info[i];
                        var newString = name_3 + "：" + "加注" + info.BetVal;
                        str = str + "#" + newString;
                    }
                    else if (battleInfo.Type == 10) {
                        //大小盲注
                        var info = this._battleInfoMgr.info[i];
                        var name_4 = this.GetPlayerNameFromSeat(battleInfo.SeatIndex);
                        var newString = name_4 + "：" + "小盲注下注" + info.BetVal;
                        if (count % 2 == 0) {
                            newString = name_4 + "：" + "大盲注下注" + info.BetVal;
                        }
                        if (!str) {
                            str = newString;
                        }
                        else {
                            str = str + "#" + newString;
                        }
                        count++;
                    }
                    else if (battleInfo.Type == 11) {
                        //结算
                        var name_5 = this.GetPlayerNameFromSeat(battleInfo.SeatIndex);
                        var info = this._battleInfoMgr.info[i];
                        var newString = name_5 + "盈利：" + info.SettleVal;
                        str = str + "#" + newString;
                    }
                    else if (battleInfo.Type == 24) {
                        //开牌
                        var name_6 = this.GetPlayerNameFromSeat(battleInfo.SeatIndex);
                        var info = this._battleInfoMgr.info[i];
                        var newString = name_6 + "：" + "开牌，牌型是：" + this.cardType[info.CardType];
                        str = str + "#" + newString;
                    }
                    else if (battleInfo.Type == 33) {
                        //弃牌
                        var name_7 = this.GetPlayerNameFromSeat(battleInfo.SeatIndex);
                        var info = this._battleInfoMgr.info[i];
                        var newString = name_7 + "：" + "弃牌";
                        str = str + "#" + newString;
                    }
                }
                return str;
            };
            //通过座位取玩家名字
            DezhouMapInfo.prototype.GetPlayerNameFromSeat = function (index) {
                var name;
                var users = this._battleInfoMgr.users;
                name = users[index - 1].name;
                return name;
            };
            //地图状态变更
            DezhouMapInfo.EVENT_STATUS_CHECK = "DezhouMapInfo.EVENT_STATUS_CHECK";
            //战斗体更新
            DezhouMapInfo.EVENT_BATTLE_CHECK = "DezhouMapInfo.EVENT_BATTLE_CHECK";
            //继续游戏状态
            DezhouMapInfo.EVENT_STATUS_CONTINUE = "DezhouMapInfo.EVENT_STATUS_CONTINUE";
            //牌局号
            DezhouMapInfo.EVENT_GAME_NO = "DezhouMapInfo.EVENT_GAME_NO";
            //倒计时时间戳更新
            DezhouMapInfo.EVENT_COUNT_DOWN = "DezhouMapInfo.EVENT_COUNT_DOWN";
            return DezhouMapInfo;
        }(gamecomponent.object.MapInfoT));
        data.DezhouMapInfo = DezhouMapInfo;
    })(data = gamedezhou.data || (gamedezhou.data = {}));
})(gamedezhou || (gamedezhou = {}));
//# sourceMappingURL=DezhouMapInfo.js.map