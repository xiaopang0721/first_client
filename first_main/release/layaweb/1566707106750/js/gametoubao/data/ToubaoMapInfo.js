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
var gametoubao;
(function (gametoubao) {
    var data;
    (function (data) {
        var ToubaoMapInfo = /** @class */ (function (_super) {
            __extends(ToubaoMapInfo, _super);
            function ToubaoMapInfo(v) {
                var _this = _super.call(this, v, function () { return new gamecomponent.object.MapInfoLogObject(); }) || this;
                _this.areaName = ["小", "大", "任一围骰", "围骰一", "围骰二", "围骰三", "围骰四", "围骰五", "围骰六",
                    "四点", "五点", "六点", "七点", "八点", "九点", "十点", "十一点", "十二点", "十三点", "十四点", "十五点", "十六点", "十七点",
                    "单骰一", "单骰二", "单骰三", "单骰四", "单骰五", "单骰六"];
                return _this;
            }
            //当对象更新发生时
            ToubaoMapInfo.prototype.onUpdate = function (flags, mask, strmask) {
                _super.prototype.onUpdate.call(this, flags, mask, strmask);
                var isNew = flags & core.obj.OBJ_OPT_NEW;
                if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
                    this._sceneObjectMgr.event(ToubaoMapInfo.EVENT_STATUS_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
                    this._battleInfoMgr.OnUpdate();
                    this._sceneObjectMgr.event(ToubaoMapInfo.EVENT_BATTLE_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE1)) {
                    this._sceneObjectMgr.event(ToubaoMapInfo.EVENT_GAME_TURN_CHANGE);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_COUNT_DOWN)) {
                    this._sceneObjectMgr.event(ToubaoMapInfo.EVENT_COUNT_DOWN);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_GAME_NO)) {
                    this._sceneObjectMgr.event(ToubaoMapInfo.EVENT_GAME_NO);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_GAME_RECORD)) {
                    this._sceneObjectMgr.event(ToubaoMapInfo.EVENT_GAME_RECORD);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_CARD_RECORD)) {
                    this._sceneObjectMgr.event(ToubaoMapInfo.EVENT_DICE_RECORD);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_SEATED_LIST)) {
                    this._sceneObjectMgr.event(ToubaoMapInfo.EVENT_SEATED_LIST);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_ROAD_RECORD)) {
                    this._sceneObjectMgr.event(ToubaoMapInfo.EVENT_BET_WIN_AREA);
                }
            };
            ToubaoMapInfo.prototype.getBattleInfoToString = function () {
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
                var diceStr = "";
                var betStr = [];
                var betInfo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (var i = 0; i < infoArr.length; i++) {
                    var info = infoArr[i];
                    if (info.SeatIndex == selfSeat) { //百人场只取出自己的战斗信息
                        if (info instanceof gamecomponent.object.BattleInfoAreaBet) { //下注
                            betInfo[info.BetIndex - 1] += info.BetVal;
                        }
                        else if (info instanceof gamecomponent.object.BattleInfoSettle) { //结算
                            //结算
                            settleStr = info.SettleVal > 0 ? "+" + EnumToString.getPointBackNum(info.SettleVal, 2) : "" + EnumToString.getPointBackNum(info.SettleVal, 2);
                            //结算信息都出来了，就不再继续找了
                            break;
                        }
                    }
                    if (info instanceof gamecomponent.object.BattleInfoRollDice) { //开骰子
                        for (var i_1 = 0; i_1 < info.Dices.length; i_1++) {
                            if (!diceStr)
                                diceStr = "骰子：" + info.Dices[i_1];
                            else
                                diceStr += " , " + info.Dices[i_1];
                        }
                    }
                    else if (info instanceof gamecomponent.object.BattleLogCardsResult) { //中奖区域
                        for (var i_2 = 0; i_2 < info.Results.length; i_2++) {
                            if (!lotteryStr)
                                lotteryStr = this.areaName[info.Results[i_2] - 1];
                            else
                                lotteryStr += " , " + this.areaName[info.Results[i_2] - 1];
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
                totalStr += "开    奖：|" + diceStr + "#";
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
            ToubaoMapInfo.EVENT_STATUS_CHECK = "ToubaoMapInfo.EVENT_STATUS_CHECK";
            //战斗体更新
            ToubaoMapInfo.EVENT_BATTLE_CHECK = "ToubaoMapInfo.EVENT_BATTLE_CHECK";
            //回合数变化
            ToubaoMapInfo.EVENT_GAME_TURN_CHANGE = "ToubaoMapInfo.EVENT_GAME_TURN_CHANGE";
            //牌局号
            ToubaoMapInfo.EVENT_GAME_NO = "ToubaoMapInfo.EVENT_GAME_NO";
            //倒计时时间戳更新
            ToubaoMapInfo.EVENT_COUNT_DOWN = "ToubaoMapInfo.EVENT_COUNT_DOWN";
            //游戏记录更新
            ToubaoMapInfo.EVENT_GAME_RECORD = "ToubaoMapInfo.EVENT_GAME_RECORD";
            //本局牌型更新
            ToubaoMapInfo.EVENT_DICE_RECORD = "ToubaoMapInfo.EVENT_DICE_RECORD";
            //入座列表更新
            ToubaoMapInfo.EVENT_SEATED_LIST = "ToubaoMapInfo.EVENT_SEATED_LIST";
            //本局中奖区域更新
            ToubaoMapInfo.EVENT_BET_WIN_AREA = "ToubaoMapInfo.EVENT_BET_WIN_AREA";
            return ToubaoMapInfo;
        }(gamecomponent.object.MapInfoT));
        data.ToubaoMapInfo = ToubaoMapInfo;
    })(data = gametoubao.data || (gametoubao.data = {}));
})(gametoubao || (gametoubao = {}));
//# sourceMappingURL=ToubaoMapInfo.js.map