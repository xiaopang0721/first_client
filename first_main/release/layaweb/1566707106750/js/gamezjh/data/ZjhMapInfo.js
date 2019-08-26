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
var gamezjh;
(function (gamezjh) {
    var data;
    (function (data) {
        //牌型
        var cardType = ['高牌', '对子', '顺子', '金花', '同花顺', '豹子', '高牌'];
        var ZjhMapInfo = /** @class */ (function (_super) {
            __extends(ZjhMapInfo, _super);
            function ZjhMapInfo(v) {
                return _super.call(this, v, function () { return new data.ZjhData(); }) || this;
            }
            ZjhMapInfo.prototype.onUpdate = function (flags, mask, strmask) {
                _super.prototype.onUpdate.call(this, flags, mask, strmask);
                var isNew = flags & core.obj.OBJ_OPT_NEW;
                if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
                    this._sceneObjectMgr.event(ZjhMapInfo.EVENT_ZJH_STATUS_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
                    this._battleInfoMgr.OnUpdate();
                    this._sceneObjectMgr.event(ZjhMapInfo.EVENT_ZJH_BATTLE_CHECK);
                }
            };
            ZjhMapInfo.prototype.getBattleInfoToString = function () {
                var str = "";
                for (var i = 0; i < this._battleInfoMgr.info.length; i++) {
                    var battleInfo = this._battleInfoMgr.info[i];
                    if (battleInfo.Type == 1) {
                        var info = this._battleInfoMgr.info[i];
                        var name_1 = this.GetPlayerNameFromSeat(info.SeatIndex);
                        var newString = name_1 + "：" + "弃牌";
                        if (str == "") {
                            str = newString;
                        }
                        else {
                            str = str + "#" + newString;
                        }
                    }
                    else if (battleInfo.Type == 2) {
                        var info = this._battleInfoMgr.info[i];
                        var name_2 = this.GetPlayerNameFromSeat(info.SeatIndex);
                        var newString = name_2 + "：" + "跟注，金额是：" + info.BetVal;
                        if (str == "") {
                            str = newString;
                        }
                        else {
                            str = str + "#" + newString;
                        }
                    }
                    else if (battleInfo.Type == 7) {
                        var info = this._battleInfoMgr.info[i];
                        var name_3 = this.GetPlayerNameFromSeat(info.SeatIndex);
                        var newString = name_3 + "：" + "看牌";
                        if (str == "") {
                            str = newString;
                        }
                        else {
                            str = str + "#" + newString;
                        }
                    }
                    else if (battleInfo.Type == 9) {
                        var info = this._battleInfoMgr.info[i];
                        var name_4 = this.GetPlayerNameFromSeat(info.SeatIndex);
                        var newString = name_4 + "：" + "加注，金额是：" + info.BetVal;
                        if (str == "") {
                            str = newString;
                        }
                        else {
                            str = str + "#" + newString;
                        }
                    }
                    else if (battleInfo.Type == 4) {
                        var info = this._battleInfoMgr.info[i];
                        var name1 = this.GetPlayerNameFromSeat(info.SeatIndex);
                        var name2 = this.GetPlayerNameFromSeat(info.TargetIdx);
                        var name3 = this.GetPlayerNameFromSeat(info.WinIdx);
                        var newString = name1 + " 和 " + name2 + " 比牌，" + "胜方：" + name3;
                        if (str == "") {
                            str = newString;
                        }
                        else {
                            str = str + "#" + newString;
                        }
                    }
                    else if (battleInfo.Type == 8) {
                        var info = this._battleInfoMgr.info[i];
                        var name1 = this.GetPlayerNameFromSeat(info.SeatIndex);
                        var name2 = this.GetPlayerNameFromSeat(info.TargetIdx);
                        var name3 = this.GetPlayerNameFromSeat(info.WinIdx);
                        var newString = name1 + " 孤注一掷，和 " + name2 + " 比牌，" + "胜方：" + name3;
                        if (str == "") {
                            str = newString;
                        }
                        else {
                            str = str + "#" + newString;
                        }
                    }
                    else if (battleInfo.Type == 3) {
                        var info = this._battleInfoMgr.info[i];
                        var name_5 = this.GetPlayerNameFromSeat(info.SeatIndex);
                        var newString = name_5 + " 的牌型是：" + cardType[info.CardType - 1];
                        if (str == "") {
                            str = newString;
                        }
                        else {
                            str = str + "#" + newString;
                        }
                    }
                    else if (battleInfo.Type == 11) {
                        var info = this._battleInfoMgr.info[i];
                        var name_6 = this.GetPlayerNameFromSeat(info.SeatIndex);
                        var newString = name_6 + "盈利：" + info.SettleVal;
                        if (str == "") {
                            str = newString;
                        }
                        else {
                            str = str + "#" + newString;
                        }
                    }
                    else if (battleInfo.Type == 14) {
                        var info = this._battleInfoMgr.info[i];
                        var name_7 = this.GetPlayerNameFromSeat(info.SeatIndex);
                        var newString = name_7 + " 获得喜钱：" + info.BetVal;
                        if (str == "") {
                            str = newString;
                        }
                        else {
                            str = str + "#" + newString;
                        }
                    }
                }
                return str;
            };
            //通过座位取玩家名字
            ZjhMapInfo.prototype.GetPlayerNameFromSeat = function (index) {
                var name;
                var users = this._battleInfoMgr.users;
                name = users[index - 1].name;
                return name;
            };
            //地图状态变更
            ZjhMapInfo.EVENT_ZJH_STATUS_CHECK = "ZjhMapInfo.EVENT_ZJH_STATUS_CHECK";
            //战斗体更新
            ZjhMapInfo.EVENT_ZJH_BATTLE_CHECK = "ZjhMapInfo.EVENT_ZJH_BATTLE_CHECK";
            return ZjhMapInfo;
        }(gamecomponent.object.MapInfoT));
        data.ZjhMapInfo = ZjhMapInfo;
    })(data = gamezjh.data || (gamezjh.data = {}));
})(gamezjh || (gamezjh = {}));
//# sourceMappingURL=ZjhMapInfo.js.map