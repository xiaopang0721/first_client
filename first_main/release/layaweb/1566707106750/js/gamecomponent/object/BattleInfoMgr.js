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
var gamecomponent;
(function (gamecomponent) {
    var object;
    (function (object) {
        var BATTLE_TYPE_PASS = 1; //过~~
        var BATTLE_TYPE_BET = 2; //下注
        var BATTLE_TYPE_PLAY_CARD = 3; //出牌(斗地主和跑得快出牌)
        var BATTLE_TYPE_COMPARE = 4; //比牌
        var BATTLE_TYPE_MING_PAI = 5; //明牌(斗地主发牌)
        var BATTLE_TYPE_JIAODIZHU = 6; //叫地主
        var BATTLE_TYPE_SEE_CARD = 7; //看牌(斗地主没地主重新开始,跑得快先手)
        var BATTLE_TYPE_GUZHUYIZHI = 8; //孤注一掷
        var BATTLE_TYPE_ADD_CHIP = 9; //加注
        var BATTLE_TYPE_START = 10; //游戏开始下底注(跑得快抢关)
        var BATTLE_TYPE_SETTLEMENT = 11; //结算
        var BATTLE_TYPE_BANKER = 12; //抢庄
        var BATTLE_TYPE_BETRATE = 13; //定闲家可下注倍数
        var BATTLE_TYPE_XIQIAN = 14; //喜钱
        var BATTLE_TYPE_DEAL = 15; //发牌
        var BATTLE_TYPE_BUY = 16; //买保险
        var BATTLE_TYPE_DOUBLE = 17; //双倍下注
        var BATTLE_TYPE_PART = 18; //分牌
        var BATTLE_TYPE_ASK = 19; //要牌
        var BATTLE_TYPE_STOP = 20; //停牌
        var BATTLE_TYPE_AREA_BET = 21; //按区域下注
        var BATTLE_TYPE_BLACKJACK_BET = 22; //21点下注
        var BATTLE_TYPE_SHUIGUOJI_LOTTERY = 23; //水果机开奖
        var BATTLE_TYPE_SHOW_CARD = 24; //牌九明牌
        var BATTLE_TYPE_SHOW_EBGANG = 25; //二八杠明牌
        var BATTLE_TYPE_BCBM_LOTTERY = 26; //奔驰宝马开奖
        var BATTLE_TYPE_ROLL_DICE = 27; //摇骰子
        var BATTLE_TYPE_CARDS_RESULT = 28; //游戏开牌结果
        var BATTLE_TYPE_BAIRENDEZHOU_CARD_ZUHE = 29; //百人德州牌型组合
        var BATTLE_TYPE_SHISANSHUI_COMPARE = 30; //十三水比牌
        var BATTLE_TYPE_ZOO_LOTTERY = 31; //飞禽走兽开奖
        var BATTLE_TYPE_SHISANSHUI_DAQIANG = 32; //十三水打枪
        var BATTLE_TYPE_DISCARD = 33; //弃牌
        var BATTLE_TYPE_FANPAI = 34; //21点翻牌
        var BATTLE_TYPE_SIMPLE_CARD = 35; //十三水简易牌型(斗地主底牌)
        var BATTLE_TYPE_QUANLEIDA = 36; //全垒打结算
        var BATTLE_TYPE_SPECIAL = 37; //特殊牌结算(跑得快炸弹现结)
        var BATTLE_TYPE_SPECIAL_CARD = 38; //特殊牌型
        var BATTLE_TYPE_SSS_CARD_TYPE = 39; //十三水结算牌型
        var BattleInfoBase = /** @class */ (function () {
            function BattleInfoBase(typ, index) {
                this._typ = typ;
                this._index = index;
            }
            Object.defineProperty(BattleInfoBase.prototype, "Type", {
                get: function () {
                    return this._typ;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoBase.prototype, "SeatIndex", {
                get: function () {
                    return this._index;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoBase;
        }());
        object.BattleInfoBase = BattleInfoBase;
        var BattleInfoPass = /** @class */ (function (_super) {
            __extends(BattleInfoPass, _super);
            function BattleInfoPass(index) {
                return _super.call(this, BATTLE_TYPE_PASS, index) || this;
            }
            return BattleInfoPass;
        }(BattleInfoBase));
        object.BattleInfoPass = BattleInfoPass;
        var BattleInfoBet = /** @class */ (function (_super) {
            __extends(BattleInfoBet, _super);
            function BattleInfoBet(index, bet_val, see_card, round) {
                var _this = _super.call(this, BATTLE_TYPE_BET, index) || this;
                _this._bet_val = bet_val;
                _this._see_card = see_card;
                _this._round = round;
                return _this;
            }
            Object.defineProperty(BattleInfoBet.prototype, "BetVal", {
                get: function () {
                    return this._bet_val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoBet.prototype, "SeeCard", {
                get: function () {
                    return this._see_card;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoBet.prototype, "round", {
                get: function () {
                    return this._round;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoBet;
        }(BattleInfoBase));
        object.BattleInfoBet = BattleInfoBet;
        var BattleInfoPlayCard = /** @class */ (function (_super) {
            __extends(BattleInfoPlayCard, _super);
            function BattleInfoPlayCard(index, typ, len, val, round, lunshu) {
                var _this = _super.call(this, BATTLE_TYPE_PLAY_CARD, index) || this;
                _this._cards = new Array();
                _this._cardtyp = typ;
                _this._len = len;
                _this._val = val;
                _this._round = round;
                _this._lunshu = lunshu;
                return _this;
            }
            Object.defineProperty(BattleInfoPlayCard.prototype, "Cards", {
                get: function () {
                    return this._cards;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoPlayCard.prototype, "CardType", {
                get: function () {
                    return this._cardtyp;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoPlayCard.prototype, "Len", {
                get: function () {
                    return this._len;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoPlayCard.prototype, "Val", {
                get: function () {
                    return this._val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoPlayCard.prototype, "Round", {
                get: function () {
                    return this._round;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoPlayCard.prototype, "LunShu", {
                get: function () {
                    return this._lunshu;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoPlayCard;
        }(BattleInfoBase));
        object.BattleInfoPlayCard = BattleInfoPlayCard;
        var BattleInfoSimpleCard = /** @class */ (function (_super) {
            __extends(BattleInfoSimpleCard, _super);
            function BattleInfoSimpleCard(index, tou, zhong, wei, round, lunshu) {
                var _this = _super.call(this, BATTLE_TYPE_SIMPLE_CARD, index) || this;
                _this._cards = new Array();
                _this._tou = tou;
                _this._zhong = zhong;
                _this._wei = wei;
                _this._round = round;
                _this._lunshu = lunshu;
                return _this;
            }
            Object.defineProperty(BattleInfoSimpleCard.prototype, "Cards", {
                get: function () {
                    return this._cards;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoSimpleCard.prototype, "TouDun", {
                get: function () {
                    return this._tou;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoSimpleCard.prototype, "ZhongDun", {
                get: function () {
                    return this._zhong;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoSimpleCard.prototype, "WeiDun", {
                get: function () {
                    return this._wei;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoSimpleCard.prototype, "Round", {
                get: function () {
                    return this._round;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoSimpleCard.prototype, "LunShu", {
                get: function () {
                    return this._lunshu;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoSimpleCard;
        }(BattleInfoBase));
        object.BattleInfoSimpleCard = BattleInfoSimpleCard;
        var BattleInfoShowEBGCard = /** @class */ (function (_super) {
            __extends(BattleInfoShowEBGCard, _super);
            function BattleInfoShowEBGCard(index, typ, len, val) {
                var _this = _super.call(this, BATTLE_TYPE_SHOW_EBGANG, index) || this;
                _this._cards = new Array();
                _this._cardtyp = typ;
                _this._len = len;
                _this._val = val;
                return _this;
            }
            Object.defineProperty(BattleInfoShowEBGCard.prototype, "Cards", {
                get: function () {
                    return this._cards;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoShowEBGCard.prototype, "CardType", {
                get: function () {
                    return this._cardtyp;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoShowEBGCard.prototype, "Len", {
                get: function () {
                    return this._len;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoShowEBGCard.prototype, "Val", {
                get: function () {
                    return this._val;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoShowEBGCard;
        }(BattleInfoBase));
        object.BattleInfoShowEBGCard = BattleInfoShowEBGCard;
        var BattleInfoBetRate = /** @class */ (function (_super) {
            __extends(BattleInfoBetRate, _super);
            function BattleInfoBetRate(index, money, rate, antes, round) {
                var _this = _super.call(this, BATTLE_TYPE_BETRATE, index) || this;
                _this._bankerMoney = money;
                _this._bankerRate = rate;
                _this._antes = antes;
                _this._round = round;
                return _this;
            }
            Object.defineProperty(BattleInfoBetRate.prototype, "BankerMoney", {
                get: function () {
                    return this._bankerMoney;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoBetRate.prototype, "BankerRate", {
                get: function () {
                    return this._bankerRate;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoBetRate.prototype, "Antes", {
                get: function () {
                    return this._antes;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoBetRate.prototype, "Round", {
                get: function () {
                    return this._round;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoBetRate;
        }(BattleInfoBase));
        object.BattleInfoBetRate = BattleInfoBetRate;
        var BattleInfoCompare = /** @class */ (function (_super) {
            __extends(BattleInfoCompare, _super);
            function BattleInfoCompare(index, index1, bet_val, index2, see_card) {
                var _this = _super.call(this, BATTLE_TYPE_COMPARE, index) || this;
                _this._bet_val = bet_val;
                _this._target_idx = index1;
                _this._win_idx = index2;
                _this._see_card = see_card;
                return _this;
            }
            Object.defineProperty(BattleInfoCompare.prototype, "BetVal", {
                get: function () {
                    return this._bet_val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoCompare.prototype, "TargetIdx", {
                get: function () {
                    return this._target_idx;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoCompare.prototype, "WinIdx", {
                get: function () {
                    return this._win_idx;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoCompare.prototype, "SeeCard", {
                get: function () {
                    return this._see_card;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoCompare;
        }(BattleInfoBase));
        object.BattleInfoCompare = BattleInfoCompare;
        var BattleInfoSeeCard = /** @class */ (function (_super) {
            __extends(BattleInfoSeeCard, _super);
            function BattleInfoSeeCard(index, round) {
                var _this = _super.call(this, BATTLE_TYPE_SEE_CARD, index) || this;
                _this._round = round;
                return _this;
            }
            Object.defineProperty(BattleInfoSeeCard.prototype, "round", {
                get: function () {
                    return this._round;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoSeeCard;
        }(BattleInfoBase));
        object.BattleInfoSeeCard = BattleInfoSeeCard;
        var BattleInfoGuzhuyizhi = /** @class */ (function (_super) {
            __extends(BattleInfoGuzhuyizhi, _super);
            function BattleInfoGuzhuyizhi(index, target_idx, index2) {
                var _this = _super.call(this, BATTLE_TYPE_GUZHUYIZHI, index) || this;
                _this._target_idx = target_idx;
                _this._win_idx = index2;
                return _this;
            }
            Object.defineProperty(BattleInfoGuzhuyizhi.prototype, "TargetIdx", {
                get: function () {
                    return this._target_idx;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoGuzhuyizhi.prototype, "WinIdx", {
                get: function () {
                    return this._win_idx;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoGuzhuyizhi;
        }(BattleInfoBase));
        object.BattleInfoGuzhuyizhi = BattleInfoGuzhuyizhi;
        var BattleInfoAddChip = /** @class */ (function (_super) {
            __extends(BattleInfoAddChip, _super);
            function BattleInfoAddChip(index, bet_val, see_card) {
                var _this = _super.call(this, BATTLE_TYPE_ADD_CHIP, index) || this;
                _this._bet_val = bet_val;
                _this._see_card = see_card;
                return _this;
            }
            Object.defineProperty(BattleInfoAddChip.prototype, "BetVal", {
                get: function () {
                    return this._bet_val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoAddChip.prototype, "SeeCard", {
                get: function () {
                    return this._see_card;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoAddChip;
        }(BattleInfoBase));
        object.BattleInfoAddChip = BattleInfoAddChip;
        var BattleInfoStart = /** @class */ (function (_super) {
            __extends(BattleInfoStart, _super);
            function BattleInfoStart(index, bet_val, round) {
                var _this = _super.call(this, BATTLE_TYPE_START, index) || this;
                _this._bet_val = bet_val;
                _this._round = round;
                return _this;
            }
            Object.defineProperty(BattleInfoStart.prototype, "BetVal", {
                get: function () {
                    return this._bet_val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoStart.prototype, "round", {
                get: function () {
                    return this._round;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoStart;
        }(BattleInfoBase));
        object.BattleInfoStart = BattleInfoStart;
        var BattleInfoBanker = /** @class */ (function (_super) {
            __extends(BattleInfoBanker, _super);
            function BattleInfoBanker(index, bet_val, round) {
                var _this = _super.call(this, BATTLE_TYPE_BANKER, index) || this;
                _this._bet_val = bet_val;
                _this._round = round;
                return _this;
            }
            Object.defineProperty(BattleInfoBanker.prototype, "BetVal", {
                get: function () {
                    return this._bet_val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoBanker.prototype, "Round", {
                get: function () {
                    return this._round;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoBanker;
        }(BattleInfoBase));
        object.BattleInfoBanker = BattleInfoBanker;
        var BattleInfoSettle = /** @class */ (function (_super) {
            __extends(BattleInfoSettle, _super);
            function BattleInfoSettle(index, bet_val, round, lunshu) {
                var _this = _super.call(this, BATTLE_TYPE_SETTLEMENT, index) || this;
                _this._bet_val = bet_val / 100;
                _this._round = round;
                _this._lunshu = lunshu;
                return _this;
            }
            Object.defineProperty(BattleInfoSettle.prototype, "SettleVal", {
                get: function () {
                    return this._bet_val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoSettle.prototype, "round", {
                get: function () {
                    return this._round;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoSettle.prototype, "LunShu", {
                get: function () {
                    return this._lunshu;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoSettle;
        }(BattleInfoBase));
        object.BattleInfoSettle = BattleInfoSettle;
        var BattleInfoSssCardType = /** @class */ (function (_super) {
            __extends(BattleInfoSssCardType, _super);
            function BattleInfoSssCardType(index, tou_val, zhong_val, wei_val, round) {
                var _this = _super.call(this, BATTLE_TYPE_SSS_CARD_TYPE, index) || this;
                _this._tou_val = tou_val;
                _this._zhong_val = zhong_val;
                _this._wei_val = wei_val;
                _this._round = round;
                return _this;
            }
            Object.defineProperty(BattleInfoSssCardType.prototype, "typeVal", {
                get: function () {
                    return this._tou_val >= 10 ? [this._tou_val] : [this._tou_val, this._zhong_val, this._wei_val];
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoSssCardType.prototype, "round", {
                get: function () {
                    return this._round;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoSssCardType;
        }(BattleInfoBase));
        object.BattleInfoSssCardType = BattleInfoSssCardType;
        var BattleInfoSpecial = /** @class */ (function (_super) {
            __extends(BattleInfoSpecial, _super);
            function BattleInfoSpecial(index, val, round) {
                var _this = _super.call(this, BATTLE_TYPE_SPECIAL, index) || this;
                _this._val = val;
                _this._round = round;
                return _this;
            }
            Object.defineProperty(BattleInfoSpecial.prototype, "SpecialVal", {
                get: function () {
                    return this._val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoSpecial.prototype, "round", {
                get: function () {
                    return this._round;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoSpecial;
        }(BattleInfoBase));
        object.BattleInfoSpecial = BattleInfoSpecial;
        var BattleInfoSpecialCard = /** @class */ (function (_super) {
            __extends(BattleInfoSpecialCard, _super);
            function BattleInfoSpecialCard(index, cardType) {
                var _this = _super.call(this, BATTLE_TYPE_SPECIAL_CARD, index) || this;
                _this._cardType = cardType;
                return _this;
            }
            Object.defineProperty(BattleInfoSpecialCard.prototype, "cardType", {
                get: function () {
                    return this._cardType;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoSpecialCard;
        }(BattleInfoBase));
        object.BattleInfoSpecialCard = BattleInfoSpecialCard;
        var BattleInfoXiQian = /** @class */ (function (_super) {
            __extends(BattleInfoXiQian, _super);
            function BattleInfoXiQian(index, bet_val) {
                var _this = _super.call(this, BATTLE_TYPE_XIQIAN, index) || this;
                _this._bet_val = bet_val;
                return _this;
            }
            Object.defineProperty(BattleInfoXiQian.prototype, "BetVal", {
                get: function () {
                    return this._bet_val;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoXiQian;
        }(BattleInfoBase));
        object.BattleInfoXiQian = BattleInfoXiQian;
        var BattleInfoDeal = /** @class */ (function (_super) {
            __extends(BattleInfoDeal, _super);
            function BattleInfoDeal(index, type) {
                var _this = _super.call(this, BATTLE_TYPE_DEAL, index) || this;
                _this._cards = new Array();
                _this._card_type = type;
                return _this;
            }
            Object.defineProperty(BattleInfoDeal.prototype, "Cards", {
                get: function () {
                    return this._cards;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoDeal.prototype, "CardType", {
                get: function () {
                    return this._card_type;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoDeal;
        }(BattleInfoBase));
        object.BattleInfoDeal = BattleInfoDeal;
        var BattleInfoRollDice = /** @class */ (function (_super) {
            __extends(BattleInfoRollDice, _super);
            function BattleInfoRollDice(index) {
                var _this = _super.call(this, BATTLE_TYPE_ROLL_DICE, index) || this;
                _this._dices = new Array();
                return _this;
            }
            Object.defineProperty(BattleInfoRollDice.prototype, "Dices", {
                get: function () {
                    return this._dices;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoRollDice;
        }(BattleInfoBase));
        object.BattleInfoRollDice = BattleInfoRollDice;
        var BattleInfoBuy = /** @class */ (function (_super) {
            __extends(BattleInfoBuy, _super);
            function BattleInfoBuy(index, pos, opt_type, bet_val) {
                var _this = _super.call(this, BATTLE_TYPE_BUY, index) || this;
                _this._pos = pos;
                _this._opt_type = opt_type;
                _this._bet_val = bet_val;
                return _this;
            }
            Object.defineProperty(BattleInfoBuy.prototype, "Pos", {
                get: function () {
                    return this._pos;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoBuy.prototype, "OptType", {
                get: function () {
                    return this._opt_type;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoBuy.prototype, "BetVal", {
                get: function () {
                    return this._bet_val;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoBuy;
        }(BattleInfoBase));
        object.BattleInfoBuy = BattleInfoBuy;
        var BattleInfoDouble = /** @class */ (function (_super) {
            __extends(BattleInfoDouble, _super);
            function BattleInfoDouble(index, pos, bet_val) {
                var _this = _super.call(this, BATTLE_TYPE_DOUBLE, index) || this;
                _this._pos = pos;
                _this._bet_val = bet_val;
                return _this;
            }
            Object.defineProperty(BattleInfoDouble.prototype, "Pos", {
                get: function () {
                    return this._pos;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoDouble.prototype, "BetVal", {
                get: function () {
                    return this._bet_val;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoDouble;
        }(BattleInfoBase));
        object.BattleInfoDouble = BattleInfoDouble;
        var BattleInfoPart = /** @class */ (function (_super) {
            __extends(BattleInfoPart, _super);
            function BattleInfoPart(index, pos, bet_val) {
                var _this = _super.call(this, BATTLE_TYPE_PART, index) || this;
                _this._pos = pos;
                _this._bet_val = bet_val;
                return _this;
            }
            Object.defineProperty(BattleInfoPart.prototype, "Pos", {
                get: function () {
                    return this._pos;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoPart.prototype, "BetVal", {
                get: function () {
                    return this._bet_val;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoPart;
        }(BattleInfoBase));
        object.BattleInfoPart = BattleInfoPart;
        var BattleInfoStop = /** @class */ (function (_super) {
            __extends(BattleInfoStop, _super);
            function BattleInfoStop(index, pos) {
                var _this = _super.call(this, BATTLE_TYPE_STOP, index) || this;
                _this._pos = pos;
                return _this;
            }
            Object.defineProperty(BattleInfoStop.prototype, "Pos", {
                get: function () {
                    return this._pos;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoStop;
        }(BattleInfoBase));
        object.BattleInfoStop = BattleInfoStop;
        var BattleInfoAsk = /** @class */ (function (_super) {
            __extends(BattleInfoAsk, _super);
            function BattleInfoAsk(index, card, type) {
                var _this = _super.call(this, BATTLE_TYPE_ASK, index) || this;
                _this._card = card;
                _this._card_type = type;
                return _this;
            }
            Object.defineProperty(BattleInfoAsk.prototype, "Card", {
                get: function () {
                    return this._card;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoAsk.prototype, "CardType", {
                get: function () {
                    return this._card_type;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoAsk;
        }(BattleInfoBase));
        object.BattleInfoAsk = BattleInfoAsk;
        var BattleInfoFanPai = /** @class */ (function (_super) {
            __extends(BattleInfoFanPai, _super);
            function BattleInfoFanPai(index, card, type) {
                var _this = _super.call(this, BATTLE_TYPE_FANPAI, index) || this;
                _this._card = card;
                _this._card_type = type;
                return _this;
            }
            Object.defineProperty(BattleInfoFanPai.prototype, "Card", {
                get: function () {
                    return this._card;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoFanPai.prototype, "CardType", {
                get: function () {
                    return this._card_type;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoFanPai;
        }(BattleInfoBase));
        object.BattleInfoFanPai = BattleInfoFanPai;
        var BattleInfoAreaBet = /** @class */ (function (_super) {
            __extends(BattleInfoAreaBet, _super);
            function BattleInfoAreaBet(index, bet_val, bet_index) {
                var _this = _super.call(this, BATTLE_TYPE_AREA_BET, index) || this;
                _this._bet_val = bet_val;
                _this._bet_index = bet_index;
                return _this;
            }
            Object.defineProperty(BattleInfoAreaBet.prototype, "BetVal", {
                get: function () {
                    return this._bet_val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoAreaBet.prototype, "BetIndex", {
                get: function () {
                    return this._bet_index;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoAreaBet;
        }(BattleInfoBase));
        object.BattleInfoAreaBet = BattleInfoAreaBet;
        var BattleInfoBlackJackBet = /** @class */ (function (_super) {
            __extends(BattleInfoBlackJackBet, _super);
            function BattleInfoBlackJackBet(index, bet_val, pos) {
                var _this = _super.call(this, BATTLE_TYPE_BLACKJACK_BET, index) || this;
                _this._bet_val = bet_val;
                _this._pos = pos;
                return _this;
            }
            Object.defineProperty(BattleInfoBlackJackBet.prototype, "BetVal", {
                get: function () {
                    return this._bet_val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoBlackJackBet.prototype, "Pos", {
                get: function () {
                    return this._pos;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoBlackJackBet;
        }(BattleInfoBase));
        object.BattleInfoBlackJackBet = BattleInfoBlackJackBet;
        var BattleInfoShowCards = /** @class */ (function (_super) {
            __extends(BattleInfoShowCards, _super);
            function BattleInfoShowCards(index, card_type) {
                var _this = _super.call(this, BATTLE_TYPE_SHOW_CARD, index) || this;
                _this._cards = new Array();
                _this._card_type = card_type;
                return _this;
            }
            Object.defineProperty(BattleInfoShowCards.prototype, "Cards", {
                get: function () {
                    return this._cards;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoShowCards.prototype, "CardType", {
                get: function () {
                    return this._card_type;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoShowCards;
        }(BattleInfoBase));
        object.BattleInfoShowCards = BattleInfoShowCards;
        var BattleInfoSGJ = /** @class */ (function (_super) {
            __extends(BattleInfoSGJ, _super);
            function BattleInfoSGJ(index) {
                var _this = _super.call(this, BATTLE_TYPE_SHUIGUOJI_LOTTERY, index) || this;
                _this._prizeContent = [];
                _this._jacketContent = [];
                return _this;
            }
            Object.defineProperty(BattleInfoSGJ.prototype, "prizeType", {
                get: function () {
                    return this._prizeType;
                },
                set: function (val) {
                    this._prizeType = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoSGJ.prototype, "prizeTotalMoney", {
                get: function () {
                    return this._prizeTotalMoney;
                },
                set: function (val) {
                    this._prizeTotalMoney = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoSGJ.prototype, "prizeContent", {
                get: function () {
                    return this._prizeContent;
                },
                enumerable: true,
                configurable: true
            });
            BattleInfoSGJ.prototype.addPrizeContent = function (obj) {
                this._prizeContent.push(obj);
            };
            Object.defineProperty(BattleInfoSGJ.prototype, "jacketContent", {
                get: function () {
                    return this._jacketContent;
                },
                enumerable: true,
                configurable: true
            });
            BattleInfoSGJ.prototype.addJacketContent = function (obj) {
                this._jacketContent.push(obj);
            };
            return BattleInfoSGJ;
        }(BattleInfoBase));
        object.BattleInfoSGJ = BattleInfoSGJ;
        var BattleLogCardsResult = /** @class */ (function (_super) {
            __extends(BattleLogCardsResult, _super);
            function BattleLogCardsResult(index) {
                var _this = _super.call(this, BATTLE_TYPE_CARDS_RESULT, index) || this;
                _this._results = new Array();
                return _this;
            }
            Object.defineProperty(BattleLogCardsResult.prototype, "Results", {
                get: function () {
                    return this._results;
                },
                enumerable: true,
                configurable: true
            });
            return BattleLogCardsResult;
        }(BattleInfoBase));
        object.BattleLogCardsResult = BattleLogCardsResult;
        var BattleInfoBCBMLottery = /** @class */ (function (_super) {
            __extends(BattleInfoBCBMLottery, _super);
            function BattleInfoBCBMLottery(index, lotteryIndex, pos, startTime) {
                var _this = _super.call(this, BATTLE_TYPE_BCBM_LOTTERY, index) || this;
                _this._lotteryIndex = lotteryIndex;
                _this._lotteryPos = pos;
                _this._startTime = startTime;
                return _this;
            }
            Object.defineProperty(BattleInfoBCBMLottery.prototype, "lotteryIndex", {
                get: function () {
                    return this._lotteryIndex;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoBCBMLottery.prototype, "lotteryPos", {
                get: function () {
                    return this._lotteryPos;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoBCBMLottery.prototype, "startTime", {
                get: function () {
                    return this._startTime;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoBCBMLottery;
        }(BattleInfoBase));
        object.BattleInfoBCBMLottery = BattleInfoBCBMLottery;
        var BattleInfoZooLottery = /** @class */ (function (_super) {
            __extends(BattleInfoZooLottery, _super);
            function BattleInfoZooLottery(index, lotteryIndex, startTime) {
                var _this = _super.call(this, BATTLE_TYPE_ZOO_LOTTERY, index) || this;
                _this._lotteryIndex = lotteryIndex;
                _this._startTime = startTime;
                return _this;
            }
            Object.defineProperty(BattleInfoZooLottery.prototype, "lotteryIndex", {
                get: function () {
                    return this._lotteryIndex;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoZooLottery.prototype, "startTime", {
                get: function () {
                    return this._startTime;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoZooLottery;
        }(BattleInfoBase));
        object.BattleInfoZooLottery = BattleInfoZooLottery;
        var BattleInfoMingPai = /** @class */ (function (_super) {
            __extends(BattleInfoMingPai, _super);
            function BattleInfoMingPai(index, round, lunshu) {
                var _this = _super.call(this, BATTLE_TYPE_MING_PAI, index) || this;
                _this._cards = new Array();
                _this._round = round;
                _this._lunshu = lunshu;
                return _this;
            }
            Object.defineProperty(BattleInfoMingPai.prototype, "Cards", {
                get: function () {
                    return this._cards;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoMingPai.prototype, "round", {
                get: function () {
                    return this._round;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoMingPai.prototype, "lunshu", {
                get: function () {
                    return this._lunshu;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoMingPai;
        }(BattleInfoBase));
        object.BattleInfoMingPai = BattleInfoMingPai;
        var BattleInfoJiaoDiZhu = /** @class */ (function (_super) {
            __extends(BattleInfoJiaoDiZhu, _super);
            function BattleInfoJiaoDiZhu(index, opt_type) {
                var _this = _super.call(this, BATTLE_TYPE_JIAODIZHU, index) || this;
                _this._opt_type = opt_type;
                return _this;
            }
            Object.defineProperty(BattleInfoJiaoDiZhu.prototype, "OptType", {
                get: function () {
                    return this._opt_type;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoJiaoDiZhu;
        }(BattleInfoBase));
        object.BattleInfoJiaoDiZhu = BattleInfoJiaoDiZhu;
        var BattleInfoBrdzCardsZuhe = /** @class */ (function (_super) {
            __extends(BattleInfoBrdzCardsZuhe, _super);
            function BattleInfoBrdzCardsZuhe(index) {
                var _this = _super.call(this, BATTLE_TYPE_BAIRENDEZHOU_CARD_ZUHE, index) || this;
                _this._cardszuhe = new Array();
                return _this;
            }
            Object.defineProperty(BattleInfoBrdzCardsZuhe.prototype, "CardsZuhe", {
                get: function () {
                    return this._cardszuhe;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoBrdzCardsZuhe;
        }(BattleInfoBase));
        object.BattleInfoBrdzCardsZuhe = BattleInfoBrdzCardsZuhe;
        var BattleInfoShiSanShuiCompare = /** @class */ (function (_super) {
            __extends(BattleInfoShiSanShuiCompare, _super);
            function BattleInfoShiSanShuiCompare(index, dun, val) {
                var _this = _super.call(this, BATTLE_TYPE_SHISANSHUI_COMPARE, index) || this;
                _this._dun = dun;
                _this._val = val;
                return _this;
            }
            Object.defineProperty(BattleInfoShiSanShuiCompare.prototype, "Dun", {
                get: function () {
                    return this._dun;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoShiSanShuiCompare.prototype, "Val", {
                get: function () {
                    return this._val;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoShiSanShuiCompare;
        }(BattleInfoBase));
        object.BattleInfoShiSanShuiCompare = BattleInfoShiSanShuiCompare;
        var BattleInfoQuanLeiDa = /** @class */ (function (_super) {
            __extends(BattleInfoQuanLeiDa, _super);
            function BattleInfoQuanLeiDa(index, tou, zhong, wei) {
                var _this = _super.call(this, BATTLE_TYPE_QUANLEIDA, index) || this;
                _this._touDun = tou;
                _this._zhongDun = zhong;
                _this._weiDun = wei;
                return _this;
            }
            Object.defineProperty(BattleInfoQuanLeiDa.prototype, "touDun", {
                get: function () {
                    return this._touDun;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoQuanLeiDa.prototype, "zhongDun", {
                get: function () {
                    return this._zhongDun;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoQuanLeiDa.prototype, "weiDun", {
                get: function () {
                    return this._weiDun;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoQuanLeiDa;
        }(BattleInfoBase));
        object.BattleInfoQuanLeiDa = BattleInfoQuanLeiDa;
        var BattleInfoShiSanShuiDaQiang = /** @class */ (function (_super) {
            __extends(BattleInfoShiSanShuiDaQiang, _super);
            function BattleInfoShiSanShuiDaQiang(index, attacker, touVal, zhongVal, weiVal) {
                var _this = _super.call(this, BATTLE_TYPE_SHISANSHUI_DAQIANG, index) || this;
                _this._attacker = attacker;
                _this._touVal = touVal;
                _this._zhongVal = zhongVal;
                _this._weiVal = weiVal;
                return _this;
            }
            Object.defineProperty(BattleInfoShiSanShuiDaQiang.prototype, "attacker", {
                get: function () {
                    return this._attacker;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoShiSanShuiDaQiang.prototype, "touVal", {
                get: function () {
                    return this._touVal;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoShiSanShuiDaQiang.prototype, "zhongVal", {
                get: function () {
                    return this._zhongVal;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoShiSanShuiDaQiang.prototype, "weiVal", {
                get: function () {
                    return this._weiVal;
                },
                enumerable: true,
                configurable: true
            });
            return BattleInfoShiSanShuiDaQiang;
        }(BattleInfoBase));
        object.BattleInfoShiSanShuiDaQiang = BattleInfoShiSanShuiDaQiang;
        var BattleInfoDisCard = /** @class */ (function (_super) {
            __extends(BattleInfoDisCard, _super);
            function BattleInfoDisCard(index) {
                return _super.call(this, BATTLE_TYPE_DISCARD, index) || this;
            }
            return BattleInfoDisCard;
        }(BattleInfoBase));
        object.BattleInfoDisCard = BattleInfoDisCard;
        var BattleInfoMgr = /** @class */ (function () {
            function BattleInfoMgr(map_info, create_card_fun) {
                this._map_info = map_info;
                this._index = 0;
                this._infos = new Array();
                this._create_card_fun = create_card_fun;
            }
            Object.defineProperty(BattleInfoMgr.prototype, "info", {
                get: function () {
                    return this._infos;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BattleInfoMgr.prototype, "users", {
                get: function () {
                    return this._users;
                },
                enumerable: true,
                configurable: true
            });
            BattleInfoMgr.prototype.ResetData = function (log) {
                if (log == "" || log == null) {
                    throw "battle log is null";
                }
                //解析前先清掉旧数据
                this._infos.length = 0;
                this._index = 0;
                this.loadDataFormLog(log);
            };
            BattleInfoMgr.prototype.loadDataFormLog = function (log) {
                if (log == "") {
                    return;
                }
                var arr = log.split("#");
                if (arr.length == 0) {
                    throw "bad battle log str:" + log;
                }
                this._users = JSON.parse(arr[0]);
                var end_index = parseInt("0x" + arr[1]);
                this._map_info.Reset();
                this._map_info.SetUInt32(object.MapInfo.MAP_INT_BATTLE_INDEX, end_index);
                for (var i = 0; i <= end_index; i++) {
                    this._map_info.SetUInt32(object.MapInfo.MAP_INT_BATTLE_BEING + i, parseInt("0x" + arr[2 + i]));
                }
                this.OnUpdate();
            };
            BattleInfoMgr.prototype.OnUpdate = function () {
                //重写一下GetFloat
                var __getfloat = this._map_info.GetFloat;
                this._map_info.GetFloat = function (index) {
                    var val = this.GetInt32(index);
                    return val / 100;
                };
                var index = this._index;
                if (this._map_info.GetBattleIndex() == 0) {
                    this._infos.length = 0;
                    this._index = 0;
                    return;
                }
                while (this._map_info.GetBattleIndex() > index) {
                    var seatIndex = this._map_info.GetUInt16(object.MapInfo.MAP_INT_BATTLE_BEING + index, 0);
                    var typ = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 0);
                    var len = this._map_info.GetUInt16(object.MapInfo.MAP_INT_BATTLE_BEING + index, 1);
                    switch (typ) {
                        case BATTLE_TYPE_PASS: {
                            var obj = new BattleInfoPass(seatIndex);
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_BET: {
                            var see_card = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var round = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 2);
                            var bet_val = this._map_info.GetUInt32(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2);
                            var obj = new BattleInfoBet(seatIndex, bet_val, see_card, round);
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_PLAY_CARD: {
                            var _typ = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2, 0);
                            var _len = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2, 1);
                            var _val = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2, 2);
                            var round = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var lunshu = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 2);
                            var obj = new BattleInfoPlayCard(seatIndex, _typ, _len, _val, round, lunshu);
                            var cards_len = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2, 3);
                            for (var i = 0; i < cards_len; i++) {
                                var val = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 3 + Math.floor(i / 4), i % 4);
                                var card = this._create_card_fun();
                                card.Init(val);
                                obj.Cards.push(card);
                            }
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_SIMPLE_CARD: {
                            var round = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var lunshu = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 2);
                            var _tou = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2, 0);
                            var _zhong = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2, 1);
                            var _wei = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2, 2);
                            var obj = new BattleInfoSimpleCard(seatIndex, _tou, _zhong, _wei, round, lunshu);
                            var cards_len = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2, 3);
                            for (var i = 0; i < cards_len; i++) {
                                var val = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 3 + Math.floor(i / 4), i % 4);
                                var card = this._create_card_fun();
                                card.Init(val);
                                obj.Cards.push(card);
                            }
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_SHOW_EBGANG: {
                            var _typ = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var cards_len = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 2);
                            var rule_type = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 3);
                            var obj = new BattleInfoShowEBGCard(seatIndex, _typ, cards_len, rule_type);
                            for (var i = 0; i < cards_len; i++) {
                                var val = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2 + Math.floor(i / 4), i % 4);
                                obj.Cards.push(val);
                            }
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_JIAODIZHU: {
                            var obj = new BattleInfoJiaoDiZhu(seatIndex, this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1));
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_COMPARE: {
                            var _target_idx = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var _win_idx = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 2);
                            var _see_card = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 3);
                            var _val = this._map_info.GetUInt32(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2);
                            var obj = new BattleInfoCompare(seatIndex, _target_idx, _val, _win_idx, _see_card);
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_BETRATE: {
                            var _rate = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var _antes = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 2);
                            var _round = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 3);
                            var _money = this._map_info.GetUInt32(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2);
                            var obj = new BattleInfoBetRate(seatIndex, _money, _rate, _antes, _round);
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_SEE_CARD: {
                            var round = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var obj = new BattleInfoSeeCard(seatIndex, round);
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_GUZHUYIZHI: {
                            var target_idx = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var win_idx = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 2);
                            var obj = new BattleInfoGuzhuyizhi(seatIndex, target_idx, win_idx);
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_ADD_CHIP: {
                            var see_card = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var bet_val = this._map_info.GetUInt32(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2);
                            var obj = new BattleInfoAddChip(seatIndex, bet_val, see_card);
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_START: {
                            var round = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var obj = new BattleInfoStart(seatIndex, this._map_info.GetUInt32(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2), round);
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_BANKER: {
                            var round = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var obj = new BattleInfoBanker(seatIndex, this._map_info.GetUInt32(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2), round);
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_SETTLEMENT: {
                            var round = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var lunshu = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 2);
                            var obj = new BattleInfoSettle(seatIndex, this._map_info.GetInt32(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2), round, lunshu);
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_SPECIAL: {
                            var round = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var obj = new BattleInfoSpecial(seatIndex, this._map_info.GetInt32(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2), round);
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_SSS_CARD_TYPE: {
                            var tou_val = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var zhong_val = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 2);
                            var wei_val = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 3);
                            var round = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2, 0);
                            var obj = new BattleInfoSssCardType(seatIndex, tou_val, zhong_val, wei_val, round);
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_SPECIAL_CARD: {
                            var obj = new BattleInfoSpecialCard(seatIndex, this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1));
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_XIQIAN: {
                            var obj = new BattleInfoXiQian(seatIndex, this._map_info.GetUInt32(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2));
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_QUANLEIDA: {
                            var tou = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var zhong = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 2);
                            var wei = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 3);
                            var obj = new BattleInfoQuanLeiDa(seatIndex, tou, zhong, wei);
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_DEAL: {
                            var type = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 2);
                            var obj = new BattleInfoDeal(seatIndex, type);
                            var cards_len = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            for (var i = 0; i < cards_len; i++) {
                                var val = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2 + Math.floor(i / 4), i % 4);
                                // let card = this._create_card_fun();
                                // card.Init(val);                    
                                obj.Cards.push(val + 1);
                            }
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_ROLL_DICE: {
                            var obj = new BattleInfoRollDice(seatIndex);
                            for (var i = 1; i <= 3; i++) {
                                var val = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, i);
                                obj.Dices.push(val);
                            }
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_BUY: {
                            var pos = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var optType = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 2);
                            var bet_val = this._map_info.GetFloat(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2);
                            var obj = new BattleInfoBuy(seatIndex, pos, optType, bet_val);
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_DOUBLE: {
                            var pos = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var bet_val = this._map_info.GetUInt32(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2);
                            var obj = new BattleInfoDouble(seatIndex, pos, bet_val);
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_PART: {
                            var pos = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var bet_val = this._map_info.GetUInt32(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2);
                            var obj = new BattleInfoPart(seatIndex, pos, bet_val);
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_STOP: {
                            var pos = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var obj = new BattleInfoStop(seatIndex, pos);
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_ASK: {
                            var card = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var type = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 2);
                            var obj = new BattleInfoAsk(seatIndex, card + 1, type);
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_FANPAI: {
                            var card = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var type = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 2);
                            var obj = new BattleInfoFanPai(seatIndex, card + 1, type);
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_AREA_BET: {
                            var bet_index = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var bet_val = this._map_info.GetUInt32(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2);
                            var obj = new BattleInfoAreaBet(seatIndex, bet_val, bet_index);
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_BLACKJACK_BET: {
                            var pos = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var bet_val = this._map_info.GetFloat(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2);
                            var obj = new BattleInfoBlackJackBet(seatIndex, bet_val, pos);
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_SHOW_CARD: {
                            var cards_len = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var care_type = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 2);
                            var obj = new BattleInfoShowCards(seatIndex, care_type);
                            for (var i = 0; i < cards_len; i++) {
                                var val = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2 + Math.floor(i / 4), i % 4);
                                obj.Cards.push(val);
                            }
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_SHUIGUOJI_LOTTERY: {
                            var obj = new BattleInfoSGJ(seatIndex);
                            obj.prizeType = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var prizeNum = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 2);
                            obj.prizeTotalMoney = this._map_info.GetUInt32(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2);
                            var indexNum = Math.ceil(prizeNum / 4);
                            for (var i = 0; i < prizeNum; i++) {
                                var idx = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 3 + Math.floor(i / 4), i % 4);
                                var money = this._map_info.GetUInt32(object.MapInfo.MAP_INT_BATTLE_BEING + index + 3 + indexNum + indexNum + i);
                                var type = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + indexNum + 3 + Math.floor(i / 4), i % 4);
                                var prizeObj = {
                                    index: idx - 1,
                                    money: money,
                                    type: type
                                };
                                obj.addPrizeContent(prizeObj);
                            }
                            var totalLen = 3 + prizeNum + indexNum + indexNum;
                            prizeNum = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 3);
                            if (prizeNum > 0) {
                                indexNum = Math.ceil(prizeNum / 4);
                                for (var i = 0; i < prizeNum; i++) {
                                    var type = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + totalLen + Math.floor(i / 4), i % 4);
                                    var money = this._map_info.GetUInt32(object.MapInfo.MAP_INT_BATTLE_BEING + index + totalLen + indexNum + i);
                                    var prizeObj = {
                                        type: type,
                                        money: money
                                    };
                                    obj.addJacketContent(prizeObj);
                                }
                            }
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_CARDS_RESULT: {
                            var obj = new BattleLogCardsResult(seatIndex);
                            var val_len = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            for (var i = 0; i < val_len; i++) {
                                var val = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2 + Math.floor(i / 4), i % 4);
                                obj.Results.push(val);
                            }
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_BCBM_LOTTERY: {
                            var lotteryIndex = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var lotteryPos = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 2);
                            var time = this._map_info.GetUInt32(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2);
                            var obj = new BattleInfoBCBMLottery(seatIndex, lotteryIndex, lotteryPos, time);
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_ZOO_LOTTERY: {
                            var lotteryIndex = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var time = this._map_info.GetUInt32(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2);
                            var obj = new BattleInfoZooLottery(seatIndex, lotteryIndex, time);
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_MING_PAI: {
                            var round = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 2);
                            var lunshu = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 3);
                            var obj = new BattleInfoMingPai(seatIndex, round, lunshu);
                            var cards_len = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            for (var i = 0; i < cards_len; i++) {
                                var val = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2 + Math.floor(i / 4), i % 4);
                                obj.Cards.push(val);
                            }
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_BAIRENDEZHOU_CARD_ZUHE: {
                            var obj = new BattleInfoBrdzCardsZuhe(seatIndex);
                            var val_len = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            for (var i = 0; i < val_len; i++) {
                                var val = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2 + Math.floor(i / 4), i % 4);
                                obj.CardsZuhe.push(val);
                            }
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_SHISANSHUI_COMPARE: {
                            var dun = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var val = this._map_info.GetInt16(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var obj = new BattleInfoShiSanShuiCompare(seatIndex, dun, val);
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_SHISANSHUI_DAQIANG: {
                            var _attacker = this._map_info.GetByte(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var _touVal = this._map_info.GetInt16(object.MapInfo.MAP_INT_BATTLE_BEING + index + 1, 1);
                            var _zhongVal = this._map_info.GetInt16(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2, 0);
                            var _weiVal = this._map_info.GetInt16(object.MapInfo.MAP_INT_BATTLE_BEING + index + 2, 1);
                            var obj = new BattleInfoShiSanShuiDaQiang(seatIndex, _attacker, _touVal, _zhongVal, _weiVal);
                            this._infos.push(obj);
                            break;
                        }
                        case BATTLE_TYPE_DISCARD: {
                            var obj = new BattleInfoDisCard(seatIndex);
                            this._infos.push(obj);
                            break;
                        }
                        default: {
                            break;
                        }
                    }
                    index += len;
                }
                this._index = this._map_info.GetBattleIndex();
                this._map_info.GetFloat = __getfloat;
            };
            return BattleInfoMgr;
        }());
        object.BattleInfoMgr = BattleInfoMgr;
    })(object = gamecomponent.object || (gamecomponent.object = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=BattleInfoMgr.js.map