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
* 二八杠-地图
*/
var gameebgang;
(function (gameebgang) {
    var data;
    (function (data) {
        var EbgangMapInfo = /** @class */ (function (_super) {
            __extends(EbgangMapInfo, _super);
            function EbgangMapInfo(v) {
                return _super.call(this, v, function () { return new data.EBGangData(); }) || this;
            }
            EbgangMapInfo.prototype.onUpdate = function (flags, mask, strmask) {
                _super.prototype.onUpdate.call(this, flags, mask, strmask);
                var isNew = flags & core.obj.OBJ_OPT_NEW;
                if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
                    this._battleInfoMgr.OnUpdate();
                    this._sceneObjectMgr.event(EbgangMapInfo.EVENT_EBG_BATTLE_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
                    this._sceneObjectMgr.event(EbgangMapInfo.EVENT_EBG_STATUS_CHECK);
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_COUNT_DOWN)) {
                    this._sceneObjectMgr.event(EbgangMapInfo.EVENT_EBG_COUNT_DOWN);
                }
                if (isNew || mask.GetBit(MapField.MAP_STR_CARD_ROOM_ID)) {
                    this._sceneObjectMgr.event(EbgangMapInfo.EVENT_EBG_CARDROOMID_UPDATE);
                }
            };
            EbgangMapInfo.prototype.getBattleInfoToString = function () {
                var str = "";
                for (var i = 0; i < this._battleInfoMgr.info.length; i++) {
                    var battleInfo = this._battleInfoMgr.info[i];
                    var name_1 = this.GetPlayerNameFromSeat(battleInfo.SeatIndex);
                    if (battleInfo.Type == 12) {
                        var info = this._battleInfoMgr.info[i];
                        var newString = void 0;
                        if (info.BetVal == 0) {
                            newString = name_1 + "：" + "不抢庄";
                        }
                        else {
                            newString = name_1 + "：" + "抢庄" + info.BetVal + "倍";
                        }
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
                    else if (battleInfo.Type == 25) {
                        var info = this._battleInfoMgr.info[i];
                        var newString = name_1 + "：" + "摊牌，牌型是：" + EbgangMapInfo.cardType[this.getCardType(info)];
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
            EbgangMapInfo.prototype.getCardType = function (info) {
                var cards = [];
                for (var index_1 = 0; index_1 < info.Cards.length; index_1++) {
                    var cardValue = info.Cards[index_1] % 10;
                    if (cardValue == 0)
                        cardValue = 10;
                    cards.push(cardValue);
                }
                var num = (cards[0] + cards[1]) % 10;
                var index = 0;
                switch (info.CardType) {
                    // 对子--19-28                
                    case EBGangMgr.EBG_CARDS_TYPE_DOUBLE:
                        index = cards[0] + 18;
                        break;
                    // 单张--1-9
                    case EBGangMgr.EBG_CARDS_TYPE_SINGLE:
                        index = num;
                        break;
                    // 二八杠
                    case EBGangMgr.EBG_CARDS_TYPE_EBGANG:
                        index = 29;
                        break;
                    // 点半--10-18
                    case EBGangMgr.EBG_CARDS_TYPE_DIANBAN:
                        index = cards[1] > cards[0] ? cards[0] + 9 : cards[1] + 9;
                        break;
                    // 鳖十--0
                    case EBGangMgr.EBG_CARDS_TYPE_BIESHI:
                        break;
                    default:
                        break;
                }
                return index;
            };
            //通过座位取玩家名字
            EbgangMapInfo.prototype.GetPlayerNameFromSeat = function (index) {
                var name;
                var users = this._battleInfoMgr.users;
                name = users[index - 1].name;
                return name;
            };
            //地图状态变更
            EbgangMapInfo.EVENT_EBG_STATUS_CHECK = "EbgangMapInfo.EVENT_EBG_STATUS_CHECK";
            //战斗体更新
            EbgangMapInfo.EVENT_EBG_BATTLE_CHECK = "EbgangMapInfo.EVENT_EBG_BATTLE_CHECK";
            //倒计时时间戳更新
            EbgangMapInfo.EVENT_EBG_COUNT_DOWN = "EbgangMapInfo.EVENT_EBG_COUNT_DOWN";
            // 房卡信息更新
            EbgangMapInfo.EVENT_EBG_CARDROOMID_UPDATE = "EbgangMapInfo.EVENT_EBG_CARDROOMID_UPDATE";
            EbgangMapInfo.cardType = ['鳖十', '一点', '二点', '三点', '四点', '五点', '六点', '七点', '八点', '九点', '一点半', '二点半', '三点半', '四点半', '五点半',
                '六点半', '七点半', '八点半', '九点半', '一宝', '二宝', '三宝', '四宝', '五宝', '六宝', '七宝', '八宝', '九宝', '天王', '二八杠'];
            return EbgangMapInfo;
        }(gamecomponent.object.MapInfoT));
        data.EbgangMapInfo = EbgangMapInfo;
    })(data = gameebgang.data || (gameebgang.data = {}));
})(gameebgang || (gameebgang = {}));
//# sourceMappingURL=EBGangMapInfo.js.map