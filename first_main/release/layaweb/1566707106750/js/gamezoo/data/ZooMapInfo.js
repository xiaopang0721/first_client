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
var gamezoo;
(function (gamezoo) {
    var data;
    (function (data) {
        var ANIMAL_NAME = {
            1: "孔雀、飞禽",
            2: "鸽子、飞禽",
            5: "猴子、走兽",
            6: "熊猫、走兽",
            7: "燕子、飞禽",
            8: "老鹰、飞禽",
            10: "兔子、走兽",
            11: "狮子、走兽",
            12: "通吃",
            13: "通赔",
            99: "金鲨",
            100: "银鲨",
        };
        var BET_NAME = {
            1: "孔雀",
            2: "鸽子",
            3: "飞禽",
            4: "走兽",
            5: "猴子",
            6: "熊猫",
            7: "燕子",
            8: "老鹰",
            9: "鲨鱼",
            10: "兔子",
            11: "狮子",
        };
        var ZooMapInfo = /** @class */ (function (_super) {
            __extends(ZooMapInfo, _super);
            function ZooMapInfo(v) {
                return _super.call(this, v, function () { return new gamecomponent.object.MapInfoLogObject(); }) || this;
            }
            //当对象更新发生时
            ZooMapInfo.prototype.onUpdate = function (flags, mask, strmask) {
                _super.prototype.onUpdate.call(this, flags, mask, strmask);
                var isNew = flags & core.obj.OBJ_OPT_NEW;
                if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
                    this._sceneObjectMgr.event(ZooMapInfo.EVENT_STATUS_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
                    this._battleInfoMgr.OnUpdate();
                    this._sceneObjectMgr.event(ZooMapInfo.EVENT_BATTLE_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE1)) {
                    this._sceneObjectMgr.event(ZooMapInfo.EVENT_STATUS_CONTINUE);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_COUNT_DOWN)) {
                    this._sceneObjectMgr.event(ZooMapInfo.EVENT_COUNT_DOWN);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_GAME_NO)) {
                    this._sceneObjectMgr.event(ZooMapInfo.EVENT_GAME_NO);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_GAME_RECORD)) {
                    this._sceneObjectMgr.event(ZooMapInfo.EVENT_GAME_RECORD);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_SEATED_LIST)) {
                    this._sceneObjectMgr.event(ZooMapInfo.EVENT_SEATED_LIST);
                }
            };
            ZooMapInfo.prototype.getBattleInfoToString = function () {
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
                var betArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                var lotteryStr = "";
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
                            //结算信息都出来了，就不再继续找了
                            break;
                        }
                    }
                    if (info instanceof gamecomponent.object.BattleInfoBCBMLottery) {
                        //开奖信息
                        lotteryStr = ANIMAL_NAME[info.lotteryIndex];
                    }
                }
                var betStrArr = [];
                for (var i = 0; i < betArr.length; i++) {
                    if (betArr[i] > 0) {
                        betStrArr.push(BET_NAME[i + 1] + "(" + betArr[i] + ")");
                    }
                }
                //开奖信息
                totalStr += "开　　奖：|" + lotteryStr + "#";
                //中奖信息
                totalStr += "中　　奖：|" + lotteryStr + "#";
                //下注信息
                var betStr = this.getBattleStrByArr(betStrArr, "玩家下注：", 3);
                totalStr += betStr;
                //结算信息
                totalStr += "玩家盈利：|" + settleStr;
                return totalStr;
            };
            ZooMapInfo.prototype.getBattleStrByArr = function (arr, title, num) {
                if (num === void 0) { num = 3; }
                var str = "";
                var len = Math.ceil(arr.length / num);
                for (var i = 0; i < len; i++) {
                    if (i == 0) {
                        str += title + "|";
                    }
                    else {
                        str += "   |";
                    }
                    for (var j = 0; j < num; j++) {
                        var index = i * num + j;
                        if (index < arr.length) {
                            str += arr[index] + " , ";
                        }
                    }
                    str = str.substr(0, str.length - 3);
                    str += "#";
                }
                return str;
            };
            //地图状态变更
            ZooMapInfo.EVENT_STATUS_CHECK = "ZooMapInfo.EVENT_STATUS_CHECK";
            //战斗体更新
            ZooMapInfo.EVENT_BATTLE_CHECK = "ZooMapInfo.EVENT_BATTLE_CHECK";
            //继续游戏状态
            ZooMapInfo.EVENT_STATUS_CONTINUE = "ZooMapInfo.EVENT_STATUS_CONTINUE";
            //牌局号
            ZooMapInfo.EVENT_GAME_NO = "ZooMapInfo.EVENT_GAME_NO";
            //倒计时时间戳更新
            ZooMapInfo.EVENT_COUNT_DOWN = "ZooMapInfo.EVENT_COUNT_DOWN";
            //游戏记录更新
            ZooMapInfo.EVENT_GAME_RECORD = "ZooMapInfo.EVENT_GAME_RECORD";
            //入座列表更新
            ZooMapInfo.EVENT_SEATED_LIST = "ZooMapInfo.EVENT_SEATED_LIST";
            return ZooMapInfo;
        }(gamecomponent.object.MapInfoT));
        data.ZooMapInfo = ZooMapInfo;
    })(data = gamezoo.data || (gamezoo.data = {}));
})(gamezoo || (gamezoo = {}));
//# sourceMappingURL=ZooMapInfo.js.map