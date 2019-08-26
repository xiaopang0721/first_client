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
var gamelonghu;
(function (gamelonghu) {
    var data;
    (function (data) {
        var LonghuMapInfo = /** @class */ (function (_super) {
            __extends(LonghuMapInfo, _super);
            function LonghuMapInfo(v) {
                var _this = _super.call(this, v, function () { return new data.LonghuData(); }) || this;
                _this.areaName = ["和", "龙", "虎", "龙黑", "龙红", "龙梅", "龙方", "虎黑", "虎红", "虎梅", "虎方"];
                return _this;
            }
            //当对象更新发生时
            LonghuMapInfo.prototype.onUpdate = function (flags, mask, strmask) {
                _super.prototype.onUpdate.call(this, flags, mask, strmask);
                var isNew = flags & core.obj.OBJ_OPT_NEW;
                if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
                    this._sceneObjectMgr.event(LonghuMapInfo.EVENT_STATUS_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
                    this._battleInfoMgr.OnUpdate();
                    this._sceneObjectMgr.event(LonghuMapInfo.EVENT_BATTLE_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE1)) {
                    this._sceneObjectMgr.event(LonghuMapInfo.EVENT_GAME_TURN_CHANGE);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_COUNT_DOWN)) {
                    this._sceneObjectMgr.event(LonghuMapInfo.EVENT_COUNT_DOWN);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_MAP_UINT16)) {
                    this._sceneObjectMgr.event(LonghuMapInfo.EVENT_MAP_BANKER_CHANGE, 1);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_MAP_UINT16)) {
                    this._sceneObjectMgr.event(LonghuMapInfo.EVENT_CARD_POOL_CHANGE);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_GAME_NO)) {
                    this._sceneObjectMgr.event(LonghuMapInfo.EVENT_GAME_NO);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_GAME_RECORD)) {
                    this._sceneObjectMgr.event(LonghuMapInfo.EVENT_GAME_RECORD);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_SZ_LIST)) {
                    this._sceneObjectMgr.event(LonghuMapInfo.EVENT_SZ_LIST);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_SEATED_LIST)) {
                    this._sceneObjectMgr.event(LonghuMapInfo.EVENT_SEATED_LIST);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_ROAD_RECORD)) {
                    this._sceneObjectMgr.event(LonghuMapInfo.EVENT_ROAD_RECORD);
                }
            };
            LonghuMapInfo.prototype.getBattleInfoToString = function () {
                var playerArr = this._battleInfoMgr.users;
                if (!playerArr)
                    return "";
                var selfSeat = -1;
                for (var i = 0; i < playerArr.length; i++) {
                    var player = playerArr[i];
                    if (player && this._sceneObjectMgr.mainPlayer.GetAccount() == player.account) {
                        //找到自己了
                        selfSeat = i + 1;
                        break;
                    }
                }
                if (selfSeat == -1)
                    return "";
                var infoArr = this._battleInfoMgr.info;
                if (!infoArr)
                    return "";
                var totalStr = "";
                var lotteryStr = "";
                var settleStr = "";
                var cardsStr = "";
                var betStr = [];
                var betInfo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (var i = 0; i < infoArr.length; i++) {
                    var info = infoArr[i];
                    if (info.SeatIndex == selfSeat) { //百人场只取出自己的战斗信息
                        if (info instanceof gamecomponent.object.BattleInfoAreaBet) { //下注
                            betInfo[info.BetIndex - 1] += info.BetVal;
                        }
                        else if (info instanceof gamecomponent.object.BattleInfoSettle) { //结算
                            //结算
                            settleStr = info.SettleVal == 0 ? "0" : info.SettleVal > 0 ? "+" + EnumToString.getPointBackNum(info.SettleVal, 2) : "" + EnumToString.getPointBackNum(info.SettleVal, 2);
                            //结算信息都出来了，就不再继续找了
                            break;
                        }
                    }
                    if (info instanceof gamecomponent.object.BattleInfoDeal) { //开牌
                        if (!cardsStr)
                            cardsStr = info.SeatIndex == 2 ? "龙:" + info.CardType + "点" : "虎:" + info.CardType + "点";
                        else
                            cardsStr += info.SeatIndex == 2 ? " , " + "龙:" + info.CardType + "点" : " , " + "虎:" + info.CardType + "点";
                    }
                    else if (info instanceof gamecomponent.object.BattleLogCardsResult) { //中奖区域
                        for (var i_1 = 0; i_1 < info.Results.length; i_1++) {
                            if (!lotteryStr)
                                lotteryStr = this.areaName[info.Results[i_1] - 1];
                            else
                                lotteryStr += " , " + this.areaName[info.Results[i_1] - 1];
                        }
                    }
                }
                var count = 0;
                var index = 0;
                for (var i = 0; i < betInfo.length; i++) {
                    if (betInfo[i] > 0) {
                        if (count == 4) {
                            count = 0;
                            index++;
                        }
                        if (!betStr[index]) {
                            betStr[index] = StringU.substitute("{0}({1})", this.areaName[i], betInfo[i]);
                        }
                        else {
                            betStr[index] += " , " + StringU.substitute("{0}({1})", this.areaName[i], betInfo[i]);
                        }
                        count++;
                    }
                }
                //开奖信息
                totalStr += "开    奖：|" + cardsStr + "#";
                //中奖区域信息
                totalStr += "中    奖：|" + lotteryStr + "#";
                //下注信息
                for (var i = 0; i < betStr.length; i++) {
                    if (i == 0) {
                        totalStr += "下    注：|" + betStr[i] + "#";
                    }
                    else {
                        totalStr += "|" + betStr[i] + "#";
                    }
                }
                //结算信息
                totalStr += "结    算：|" + settleStr;
                return totalStr;
            };
            //地图状态变更
            LonghuMapInfo.EVENT_STATUS_CHECK = "LonghuMapInfo.EVENT_STATUS_CHECK";
            //战斗体更新
            LonghuMapInfo.EVENT_BATTLE_CHECK = "LonghuMapInfo.EVENT_BATTLE_CHECK";
            //回合数变化
            LonghuMapInfo.EVENT_GAME_TURN_CHANGE = "LonghuMapInfo.EVENT_GAME_TURN_CHANGE";
            //牌局号
            LonghuMapInfo.EVENT_GAME_NO = "LonghuMapInfo.EVENT_GAME_NO";
            //倒计时时间戳更新
            LonghuMapInfo.EVENT_COUNT_DOWN = "LonghuMapInfo.EVENT_COUNT_DOWN";
            //游戏记录更新
            LonghuMapInfo.EVENT_GAME_RECORD = "LonghuMapInfo.EVENT_GAME_RECORD";
            //上庄列表更新
            LonghuMapInfo.EVENT_SZ_LIST = "LonghuMapInfo.EVENT_SZ_LIST";
            //入座列表更新
            LonghuMapInfo.EVENT_SEATED_LIST = "LonghuMapInfo.EVENT_SEATED_LIST";
            //地图庄家改变
            LonghuMapInfo.EVENT_MAP_BANKER_CHANGE = "LonghuMapInfo.EVENT_MAP_BANKER_CHANGE";
            //牌库数量变化
            LonghuMapInfo.EVENT_CARD_POOL_CHANGE = "LonghuMapInfo.EVENT_CARD_POOL_CHANGE";
            //大路记录变化
            LonghuMapInfo.EVENT_ROAD_RECORD = "LonghuMapInfo.EVENT_ROAD_RECORD";
            return LonghuMapInfo;
        }(gamecomponent.object.MapInfoT));
        data.LonghuMapInfo = LonghuMapInfo;
    })(data = gamelonghu.data || (gamelonghu.data = {}));
})(gamelonghu || (gamelonghu = {}));
//# sourceMappingURL=LonghuMapInfo.js.map