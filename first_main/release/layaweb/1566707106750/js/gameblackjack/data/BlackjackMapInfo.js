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
* 21点-地图
*/
var gameblackjack;
(function (gameblackjack) {
    var data;
    (function (data) {
        var BlackjackMapInfo = /** @class */ (function (_super) {
            __extends(BlackjackMapInfo, _super);
            function BlackjackMapInfo(v) {
                return _super.call(this, v, function () { return new data.BlackjackData(); }) || this;
            }
            BlackjackMapInfo.prototype.onUpdate = function (flags, mask, strmask) {
                _super.prototype.onUpdate.call(this, flags, mask, strmask);
                var isNew = flags & core.obj.OBJ_OPT_NEW;
                if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
                    this._battleInfoMgr.OnUpdate();
                    this._sceneObjectMgr.event(BlackjackMapInfo.EVENT_BLACKJACK_BATTLE_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
                    this._sceneObjectMgr.event(BlackjackMapInfo.EVENT_BLACKJACK_STATUS_CHECK);
                }
            };
            BlackjackMapInfo.prototype.getBattleInfoToString = function () {
                var str = "";
                var str1 = ""; //庄家发第二张牌前的字符串
                var str2 = ""; //庄家发第二张牌的字符串
                var str3 = ""; //庄家发第二张牌后的字符串
                var isDouble = false;
                var isPartTemp = [];
                var partCount = 0;
                for (var i = 0; i < this._battleInfoMgr.info.length; i++) {
                    var battleInfo = this._battleInfoMgr.info[i];
                    if (battleInfo.Type == 22) {
                        var info = this._battleInfoMgr.info[i];
                        var name_1 = this.GetPlayerNameFromSeat(info.SeatIndex);
                        var newString = name_1 + "：" + "在" + Math.floor(info.Pos / 10) + "号座位下注了" + info.BetVal;
                        if (str1 == "") {
                            str1 = newString;
                        }
                        else {
                            str1 = str1 + "#" + newString;
                        }
                    }
                    else if (battleInfo.Type == 1) {
                        var info = this._battleInfoMgr.info[i];
                        var name_2 = this.GetPlayerNameFromSeat(info.SeatIndex);
                        var newString = name_2 + "：" + "下注完成";
                        str1 = str1 + "#" + newString;
                    }
                    else if (battleInfo.Type == 16) {
                        var info = this._battleInfoMgr.info[i];
                        var name_3 = this.GetPlayerNameFromSeat(info.SeatIndex);
                        var newString = name_3 + "：" + "在" + info.Pos / 10 + "号座位买保险";
                        str1 = str1 + "#" + newString;
                    }
                    else if (battleInfo.Type == 15) {
                        var info = this._battleInfoMgr.info[i];
                        var type = void 0;
                        if (info.CardType == 99) {
                            type = "点数是：五小龙";
                        }
                        else if (info.CardType == 100) {
                            type = "点数是：黑杰克";
                        }
                        else if (info.CardType == 0) {
                            type = "爆牌";
                        }
                        else {
                            type = "点数是：" + info.CardType.toString();
                        }
                        var posStr = void 0;
                        if (info.SeatIndex == 60) {
                            posStr = "庄家";
                            str2 = "给" + posStr + "发牌，";
                        }
                        else {
                            posStr = Math.floor(info.SeatIndex / 10) + "号座位";
                            var newString = "给" + posStr + "发牌，" + type;
                            str1 = str1 + "#" + newString;
                        }
                    }
                    else if (battleInfo.Type == 18) {
                        var info = this._battleInfoMgr.info[i];
                        isPartTemp.push(info.Pos / 10);
                        partCount = 2;
                    }
                    else if (battleInfo.Type == 17) {
                        isDouble = true;
                    }
                    else if (battleInfo.Type == 19) {
                        var info = this._battleInfoMgr.info[i];
                        var type = void 0;
                        if (info.CardType == 99) {
                            type = "点数是：五小龙";
                        }
                        else if (info.CardType == 100) {
                            type = "点数是：黑杰克";
                        }
                        else if (info.CardType == 0) {
                            type = "爆牌";
                        }
                        else {
                            type = "点数是：" + info.CardType.toString();
                        }
                        var index = Math.floor(info.SeatIndex / 10);
                        var posStr = isPartTemp.indexOf(index) >= 0 ? index + "号座位，牌" + (info.SeatIndex % 10 + 1) : index + "号座位";
                        var newString = void 0;
                        if (isDouble && info.SeatIndex != 60) {
                            newString = posStr + "双倍下注，" + type;
                            isDouble = false;
                        }
                        else {
                            if (partCount == 0) {
                                if (info.SeatIndex == 60) {
                                    posStr = "庄家";
                                }
                                newString = posStr + "要牌，" + type;
                            }
                            else {
                                newString = index + "号座位分牌，牌" + (info.SeatIndex % 10 + 1) + type;
                                partCount--;
                            }
                        }
                        if (str3 == "") {
                            str3 = newString;
                        }
                        else {
                            str3 = str3 + "#" + newString;
                        }
                    }
                    else if (battleInfo.Type == 20) {
                        var info = this._battleInfoMgr.info[i];
                        var index = Math.floor(info.Pos / 10);
                        var posStr = isPartTemp.indexOf(index) >= 0 ? index + "号座位，牌" + (info.Pos % 10 + 1) : index + "号座位";
                        var newString = posStr + "停牌";
                        str3 = str3 + "#" + newString;
                    }
                    else if (battleInfo.Type == 11) {
                        var info = this._battleInfoMgr.info[i];
                        var name_4 = this.GetPlayerNameFromSeat(info.SeatIndex);
                        var newString = name_4 + "盈利：" + info.SettleVal;
                        str3 = str3 + "#" + newString;
                        isDouble = false;
                        isPartTemp = [];
                        partCount = 0;
                    }
                    else if (battleInfo.Type == 34) {
                        var info = this._battleInfoMgr.info[i];
                        if (info.SeatIndex == 60) {
                            var type = void 0;
                            if (info.CardType == 99) {
                                type = "点数是：五小龙";
                            }
                            else if (info.CardType == 100) {
                                type = "点数是：黑杰克";
                            }
                            else if (info.CardType == 0) {
                                type = "爆牌";
                            }
                            else {
                                type = "点数是：" + info.CardType.toString();
                            }
                            str2 = str2 + type;
                        }
                    }
                }
                str = str1 + "#" + str2 + "#" + str3;
                return str;
            };
            //通过座位取玩家名字
            BlackjackMapInfo.prototype.GetPlayerNameFromSeat = function (index) {
                var name;
                var users = this._battleInfoMgr.users;
                name = users[index - 1].name;
                return name;
            };
            //地图状态变更
            BlackjackMapInfo.EVENT_BLACKJACK_STATUS_CHECK = "BlackjackMapInfo.EVENT_BLACKJACK_STATUS_CHECK";
            //战斗体更新
            BlackjackMapInfo.EVENT_BLACKJACK_BATTLE_CHECK = "BlackjackMapInfo.EVENT_BLACKJACK_BATTLE_CHECK";
            return BlackjackMapInfo;
        }(gamecomponent.object.MapInfoT));
        data.BlackjackMapInfo = BlackjackMapInfo;
    })(data = gameblackjack.data || (gameblackjack.data = {}));
})(gameblackjack || (gameblackjack = {}));
//# sourceMappingURL=BlackjackMapInfo.js.map