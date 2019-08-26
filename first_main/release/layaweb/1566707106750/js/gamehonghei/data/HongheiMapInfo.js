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
* 红黑大战地图信息
*/
var gamehonghei;
(function (gamehonghei) {
    var data;
    (function (data) {
        var HongheiMapInfo = /** @class */ (function (_super) {
            __extends(HongheiMapInfo, _super);
            function HongheiMapInfo(v) {
                var _this = _super.call(this, v, function () { return new data.HongheiData(); }) || this;
                _this.areaName = ["红", "黑", "对8以上", "顺子", "金花", "顺金", "豹子"];
                _this.cardType = ["单张", "对子", "顺子", "金花", "顺金", "豹子"];
                return _this;
            }
            //当对象更新发生时
            HongheiMapInfo.prototype.onUpdate = function (flags, mask, strmask) {
                _super.prototype.onUpdate.call(this, flags, mask, strmask);
                var isNew = flags & core.obj.OBJ_OPT_NEW;
                if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
                    this._sceneObjectMgr.event(HongheiMapInfo.EVENT_STATUS_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
                    this._battleInfoMgr.OnUpdate();
                    this._sceneObjectMgr.event(HongheiMapInfo.EVENT_BATTLE_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_COUNT_DOWN)) {
                    this._sceneObjectMgr.event(HongheiMapInfo.EVENT_COUNT_DOWN);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_GAME_NO)) {
                    this._sceneObjectMgr.event(HongheiMapInfo.EVENT_GAME_NO);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_GAME_RECORD)) {
                    this._sceneObjectMgr.event(HongheiMapInfo.EVENT_GAME_RECORD);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_SEATED_LIST)) {
                    this._sceneObjectMgr.event(HongheiMapInfo.EVENT_SEATED_LIST);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_ROAD_RECORD)) {
                    this._sceneObjectMgr.event(HongheiMapInfo.EVENT_ROAD_RECORD);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_CARD_RECORD)) {
                    this._sceneObjectMgr.event(HongheiMapInfo.EVENT_CARD_RECORD);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_ROAD_POS)) {
                    this._sceneObjectMgr.event(HongheiMapInfo.EVENT_ROAD_POS);
                }
            };
            HongheiMapInfo.prototype.getBattleInfoToString = function () {
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
                var betArr = [0, 0, 0, 0, 0, 0, 0];
                var betStr = [];
                var lotteryStr = "";
                var awardStr = "";
                var settleStr = "";
                for (var i = 0; i < infoArr.length; i++) {
                    var info = infoArr[i];
                    if (info.SeatIndex == selfSeat) {
                        //自己的战斗日志
                        if (info instanceof gamecomponent.object.BattleInfoAreaBet) {
                            //下注信息
                            betArr[info.BetIndex - 1] += info.BetVal;
                        }
                        else if (info instanceof gamecomponent.object.BattleInfoSettle) {
                            //结算
                            settleStr = info.SettleVal > 0 ? "+" + EnumToString.getPointBackNum(info.SettleVal, 2) : "" + EnumToString.getPointBackNum(info.SettleVal, 2);
                            break;
                        }
                    }
                    else if (info instanceof gamecomponent.object.BattleLogCardsResult) {
                        for (var j = 0; j < info.Results.length; j++) {
                            if (j < this.areaName.length) {
                                //中奖区域
                                if (info.Results[j] == 0) {
                                    if (!awardStr) {
                                        awardStr = this.areaName[j];
                                    }
                                    else {
                                        awardStr += ", " + this.areaName[j];
                                    }
                                }
                            }
                            else {
                                //开奖详情
                                if (!lotteryStr) {
                                    lotteryStr = "红:" + this.cardType[info.Results[j]];
                                }
                                else {
                                    lotteryStr += ",  " + "黑:" + this.cardType[info.Results[j]];
                                }
                            }
                        }
                    }
                }
                var count = 0;
                var index = 0;
                for (var i = 0; i < betArr.length; i++) {
                    if (betArr[i] > 0) {
                        if (count == 4) {
                            count = 0;
                            index++;
                        }
                        if (!betStr[index]) {
                            betStr[index] = StringU.substitute("{0}({1})", this.areaName[i], betArr[i]);
                        }
                        else {
                            betStr[index] += " , " + StringU.substitute("{0}({1})", this.areaName[i], betArr[i]);
                        }
                        count++;
                    }
                }
                //开奖信息
                totalStr += "开　　奖：|" + lotteryStr + "#";
                //中奖信息
                totalStr += "中　　奖：|" + awardStr + "#";
                //下注信息
                for (var i = 0; i < betStr.length; i++) {
                    if (i == 0) {
                        totalStr += "玩家下注：|" + betStr[i] + "#";
                    }
                    else {
                        totalStr += "|" + betStr[i] + "#";
                    }
                }
                //结算信息
                totalStr += "玩家盈利：|" + settleStr;
                return totalStr;
            };
            //地图状态变更
            HongheiMapInfo.EVENT_STATUS_CHECK = "HongheiMapInfo.EVENT_STATUS_CHECK";
            //战斗体更新
            HongheiMapInfo.EVENT_BATTLE_CHECK = "HongheiMapInfo.EVENT_BATTLE_CHECK";
            //牌局号
            HongheiMapInfo.EVENT_GAME_NO = "HongheiMapInfo.EVENT_GAME_NO";
            //倒计时时间戳更新
            HongheiMapInfo.EVENT_COUNT_DOWN = "HongheiMapInfo.EVENT_COUNT_DOWN";
            //游戏记录更新
            HongheiMapInfo.EVENT_GAME_RECORD = "HongheiMapInfo.EVENT_GAME_RECORD";
            //入座列表更新
            HongheiMapInfo.EVENT_SEATED_LIST = "HongheiMapInfo.EVENT_SEATED_LIST";
            //大路记录变化
            HongheiMapInfo.EVENT_ROAD_RECORD = "HongheiMapInfo.EVENT_ROAD_RECORD";
            //牌型记录变化
            HongheiMapInfo.EVENT_CARD_RECORD = "HongheiMapInfo.EVENT_CARD_RECORD";
            //大路坐标变化
            HongheiMapInfo.EVENT_ROAD_POS = "HongheiMapInfo.EVENT_ROAD_POS";
            return HongheiMapInfo;
        }(gamecomponent.object.MapInfoT));
        data.HongheiMapInfo = HongheiMapInfo;
    })(data = gamehonghei.data || (gamehonghei.data = {}));
})(gamehonghei || (gamehonghei = {}));
//# sourceMappingURL=HongheiMapInfo.js.map