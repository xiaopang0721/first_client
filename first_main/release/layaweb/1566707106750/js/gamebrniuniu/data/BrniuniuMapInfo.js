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
var gamebrniuniu;
(function (gamebrniuniu) {
    var data;
    (function (data) {
        var BrniuniuMapInfo = /** @class */ (function (_super) {
            __extends(BrniuniuMapInfo, _super);
            function BrniuniuMapInfo(v) {
                var _this = _super.call(this, v, function () { return new data.BrNiuNiuData(); }) || this;
                // 牌型
                _this.cards_type = ["没牛", "牛一", "牛二", "牛三", "牛四", "牛五", "牛六", "牛七", "牛八", "牛九", "牛牛", "四花牛", "五花牛", "炸弹", "五小牛"];
                _this.areaName = ["天", "地", "玄", "黄"];
                return _this;
            }
            //当对象更新发生时
            BrniuniuMapInfo.prototype.onUpdate = function (flags, mask, strmask) {
                _super.prototype.onUpdate.call(this, flags, mask, strmask);
                var isNew = flags & core.obj.OBJ_OPT_NEW;
                if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
                    this._sceneObjectMgr.event(BrniuniuMapInfo.EVENT_STATUS_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
                    this._battleInfoMgr.OnUpdate();
                    this._sceneObjectMgr.event(BrniuniuMapInfo.EVENT_BATTLE_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_COUNT_DOWN)) {
                    this._sceneObjectMgr.event(BrniuniuMapInfo.EVENT_COUNT_DOWN);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_MAP_UINT16)) {
                    this._sceneObjectMgr.event(BrniuniuMapInfo.EVENT_MAP_BANKER_CHANGE, 1);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_MONEY)) {
                    this._sceneObjectMgr.event(BrniuniuMapInfo.EVENT_SYSTEM_MONEY_CHANGE);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_GAME_NO)) {
                    this._sceneObjectMgr.event(BrniuniuMapInfo.EVENT_GAME_NO);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_GAME_RECORD)) {
                    this._sceneObjectMgr.event(BrniuniuMapInfo.EVENT_GAME_RECORD);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_SZ_LIST)) {
                    this._sceneObjectMgr.event(BrniuniuMapInfo.EVENT_SZ_LIST);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_SEATED_LIST)) {
                    this._sceneObjectMgr.event(BrniuniuMapInfo.EVENT_SEATED_LIST);
                }
                if (isNew || strmask.GetBit(MapField.MAP_STR_ROAD_RECORD)) {
                    this._sceneObjectMgr.event(BrniuniuMapInfo.EVENT_ROAD_RECORD_CHANGE);
                }
            };
            BrniuniuMapInfo.prototype.getBattleInfoToString = function () {
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
                var settleStr = "";
                var cardsStrZhuang = "";
                var cardsStrXian = "";
                var betStr = [];
                var betMain = 0;
                var betOther = 0;
                var betMainInfo = [0, 0, 0, 0]; //自己下注
                var betOtherInfo = [0, 0, 0, 0]; //其他人下注
                for (var i = 0; i < infoArr.length; i++) {
                    var info = infoArr[i];
                    if (info.SeatIndex == selfSeat) { //百人场只取出自己的战斗信息
                        if (info instanceof gamecomponent.object.BattleInfoAreaBet) { //自己下注
                            betMainInfo[info.BetIndex - 1] += info.BetVal;
                            betMain += info.BetVal;
                        }
                    }
                    else {
                        if (info instanceof gamecomponent.object.BattleInfoAreaBet) { //其他人下注
                            betOtherInfo[info.BetIndex - 1] += info.BetVal;
                            betOther += info.BetVal;
                        }
                    }
                    if (info.SeatIndex == selfSeat) { //百人场只取出自己的战斗信息
                        if (info instanceof gamecomponent.object.BattleInfoSettle) { //结算
                            //结算
                            settleStr = info.SettleVal > 0 ? "+" + EnumToString.getPointBackNum(info.SettleVal, 2) : "" + EnumToString.getPointBackNum(info.SettleVal, 2);
                            //结算信息都出来了，就不再继续找了
                            break;
                        }
                    }
                    if (info instanceof gamecomponent.object.BattleInfoDeal) { //开牌
                        if (info.SeatIndex == 1) {
                            cardsStrZhuang = "庄家：" + this.cards_type[info.CardType - 1];
                        }
                        else if (info.SeatIndex == 2) {
                            cardsStrXian = "天:" + this.cards_type[info.CardType - 1];
                        }
                        else if (info.SeatIndex == 3) {
                            cardsStrXian += " , 地:" + this.cards_type[info.CardType - 1];
                        }
                        else if (info.SeatIndex == 4) {
                            cardsStrXian += " , 玄:" + this.cards_type[info.CardType - 1];
                        }
                        else if (info.SeatIndex == 5) {
                            cardsStrXian += " , 黄:" + this.cards_type[info.CardType - 1];
                        }
                    }
                }
                var count = 0;
                var index = 0;
                var betInfo = [];
                if (betMain > 0) {
                    betInfo = betMainInfo;
                }
                else {
                    cardsStrZhuang += "(自己当庄)";
                    betInfo = betOtherInfo;
                }
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
                totalStr += "开    牌：|" + cardsStrZhuang + "#";
                totalStr += "|" + cardsStrXian + "#";
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
            BrniuniuMapInfo.EVENT_STATUS_CHECK = "BrniuniuMapInfo.EVENT_STATUS_CHECK";
            //战斗体更新
            BrniuniuMapInfo.EVENT_BATTLE_CHECK = "BrniuniuMapInfo.EVENT_BATTLE_CHECK";
            //牌局号
            BrniuniuMapInfo.EVENT_GAME_NO = "BrniuniuMapInfo.EVENT_GAME_NO";
            //倒计时时间戳更新
            BrniuniuMapInfo.EVENT_COUNT_DOWN = "BrniuniuMapInfo.EVENT_COUNT_DOWN";
            //游戏记录更新
            BrniuniuMapInfo.EVENT_GAME_RECORD = "BrniuniuMapInfo.EVENT_GAME_RECORD";
            //上庄列表更新
            BrniuniuMapInfo.EVENT_SZ_LIST = "BrniuniuMapInfo.EVENT_SZ_LIST";
            //入座列表更新
            BrniuniuMapInfo.EVENT_SEATED_LIST = "BrniuniuMapInfo.EVENT_SEATED_LIST";
            //地图庄家改变
            BrniuniuMapInfo.EVENT_MAP_BANKER_CHANGE = "BrniuniuMapInfo.EVENT_MAP_BANKER_CHANGE";
            //系统庄金币变化
            BrniuniuMapInfo.EVENT_SYSTEM_MONEY_CHANGE = "BrniuniuMapInfo.EVENT_SYSTEM_MONEY_CHANGE";
            //大路信息变化
            BrniuniuMapInfo.EVENT_ROAD_RECORD_CHANGE = "BrniuniuMapInfo.EVENT_ROAD_RECORD_CHANGE";
            return BrniuniuMapInfo;
        }(gamecomponent.object.MapInfoT));
        data.BrniuniuMapInfo = BrniuniuMapInfo;
    })(data = gamebrniuniu.data || (gamebrniuniu.data = {}));
})(gamebrniuniu || (gamebrniuniu = {}));
//# sourceMappingURL=BrniuniuMapInfo.js.map