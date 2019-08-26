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
* 十三水-地图
*/
var gameshisanshui;
(function (gameshisanshui) {
    var data;
    (function (data) {
        //十三水牌型
        var cardType = ["乌龙", "对子", "两对", "三条", "顺子", "同花", "葫芦", "铁枝", "同花顺", "三同花", "三顺子", "六对半", "五对三条",
            "四套三条", "凑一色", "全小", "全大", "三分天下", "三同花顺", "十二皇族", "一条龙", "至尊青龙"];
        var ShisanshuiMapInfo = /** @class */ (function (_super) {
            __extends(ShisanshuiMapInfo, _super);
            function ShisanshuiMapInfo(v) {
                var _this = _super.call(this, v, function () { return new data.ShisanshuiData(); }) || this;
                _this.isFirst = false; //只是显示详情空行用的
                return _this;
            }
            ShisanshuiMapInfo.prototype.onUpdate = function (flags, mask, strmask) {
                _super.prototype.onUpdate.call(this, flags, mask, strmask);
                var isNew = flags & core.obj.OBJ_OPT_NEW;
                if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
                    this._battleInfoMgr.OnUpdate();
                    this._sceneObjectMgr.event(ShisanshuiMapInfo.EVENT_SSS_BATTLE_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
                    this._sceneObjectMgr.event(ShisanshuiMapInfo.EVENT_SSS_STATUS_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_COUNT_DOWN)) {
                    this._sceneObjectMgr.event(ShisanshuiMapInfo.EVENT_SSS_COUNT_DOWN);
                }
            };
            ShisanshuiMapInfo.prototype.getBattleInfoToString = function () {
                var str = "";
                for (var i = 0; i < this._battleInfoMgr.info.length; i++) {
                    var battleInfo = this._battleInfoMgr.info[i];
                    var name_1 = this.GetPlayerNameFromSeat(battleInfo.SeatIndex);
                    if (battleInfo.Type == 39) { //牌型
                        var info = this._battleInfoMgr.info[i];
                        var typeStr = "";
                        for (var index = 0; index < info.typeVal.length; index++) {
                            if (typeStr == "") {
                                typeStr = cardType[info.typeVal[index] - 1];
                            }
                            else {
                                typeStr = typeStr + "," + cardType[info.typeVal[index] - 1];
                            }
                        }
                        var newString = name_1 + "的牌型是：" + typeStr;
                        if (!this.isFirst) {
                            if (str == "") {
                                str = newString;
                            }
                            else {
                                str = str + "#" + "" + "#" + newString;
                            }
                            this.isFirst = true;
                        }
                        else {
                            str = str + "#" + newString;
                        }
                    }
                    else if (battleInfo.Type == 5) { //明牌
                        var info = this._battleInfoMgr.info[i];
                        var cardStr = "";
                        for (var index = 0; index < info.Cards.length; index++) {
                            var cardVal = info.Cards[index];
                            var card = this.GetCardVal(cardVal);
                            if (cardStr == "") {
                                cardStr = card + ",";
                            }
                            else {
                                cardStr = cardStr + card + ",";
                            }
                            if (index == 2 || index == 7) {
                                cardStr = cardStr + "   ";
                            }
                        }
                        var newString = name_1 + "的手牌是：" + cardStr;
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
            ShisanshuiMapInfo.prototype.GetPlayerNameFromSeat = function (index) {
                var name;
                var users = this._battleInfoMgr.users;
                name = users[index - 1].name;
                return name;
            };
            //根据牌号返回牌
            ShisanshuiMapInfo.prototype.GetCardVal = function (card_val) {
                var cardVal = "";
                var valArr = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
                var val = card_val % 13;
                if (val == 0) {
                    val = 13;
                }
                cardVal = valArr[val - 1];
                return cardVal;
            };
            //地图状态变更
            ShisanshuiMapInfo.EVENT_SSS_STATUS_CHECK = "ShisanshuiMapInfo.EVENT_SSS_STATUS_CHECK";
            //战斗体更新
            ShisanshuiMapInfo.EVENT_SSS_BATTLE_CHECK = "ShisanshuiMapInfo.EVENT_SSS_BATTLE_CHECK";
            //倒计时时间戳更新
            ShisanshuiMapInfo.EVENT_SSS_COUNT_DOWN = "ShisanshuiMapInfo.EVENT_SSS_COUNT_DOWN";
            return ShisanshuiMapInfo;
        }(gamecomponent.object.MapInfoT));
        data.ShisanshuiMapInfo = ShisanshuiMapInfo;
    })(data = gameshisanshui.data || (gameshisanshui.data = {}));
})(gameshisanshui || (gameshisanshui = {}));
//# sourceMappingURL=ShisanshuiMapInfo.js.map