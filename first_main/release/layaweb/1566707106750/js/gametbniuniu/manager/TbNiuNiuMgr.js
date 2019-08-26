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
var gametbniuniu;
(function (gametbniuniu) {
    var manager;
    (function (manager) {
        var MAX_SEATS_COUNT = 6; //最大座位数
        var MAX_CARDS_COUNT = 5; //最大手牌数
        var TbNiuNiuMgr = /** @class */ (function (_super) {
            __extends(TbNiuNiuMgr, _super);
            function TbNiuNiuMgr(game) {
                var _this = _super.call(this, game) || this;
                _this._isGaiPai = false;
                _this._isTuoGuan = 0;
                _this._cardsIndex = []; //牌的归属位置
                return _this;
            }
            Object.defineProperty(TbNiuNiuMgr.prototype, "offlineUnit", {
                get: function () {
                    return this._offlineUnit;
                },
                set: function (v) {
                    this._offlineUnit = v;
                    this.event(TbNiuNiuMgr.MAPINFO_OFFLINE);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TbNiuNiuMgr.prototype, "isTuoGuan", {
                get: function () {
                    return this._isTuoGuan;
                },
                set: function (v) {
                    this._isTuoGuan = v;
                    this.event(TbNiuNiuMgr.TUOGUAN_GAME);
                },
                enumerable: true,
                configurable: true
            });
            //对牌进行排序
            TbNiuNiuMgr.prototype.SortCards = function (cards) {
                if (!cards)
                    return;
                cards.sort(function (a, b) {
                    return a.Compare(b, true);
                });
            };
            // 根据牌获取牌型
            // 获得牛数
            TbNiuNiuMgr.prototype.getNiubyCards = function (cards) {
                var lave = 0; //余数
                for (var i = 0; i < cards.length; i++) {
                    lave = lave + cards[i].GetCount();
                }
                lave = lave % 10;
                for (var i = 0; i < cards.length - 1; i++) {
                    for (var j = i + 1; j < cards.length; j++) {
                        if ((cards[i].GetCount() + cards[j].GetCount()) % 10 == lave) {
                            if (lave == 0) {
                                return 10;
                            }
                            else {
                                return lave;
                            }
                        }
                    }
                }
                return 0;
            };
            TbNiuNiuMgr.prototype.checkCardsRate = function (cardtype) {
                var cardRate = 1 /* RATE_1 */;
                if (cardtype == 14) {
                    cardRate = 6 /* RATE_6 */;
                    return cardRate;
                }
                if (cardtype == 12 || cardtype == 13) {
                    cardRate = 5 /* RATE_5 */;
                    return cardRate;
                }
                if (cardtype == 10 || cardtype == 11) {
                    cardRate = 4 /* RATE_4 */;
                    return cardRate;
                }
                if (cardtype == 9) {
                    cardRate = 3 /* RATE_3 */;
                    return cardRate;
                }
                if (cardtype > 6 && cardtype < 9) {
                    cardRate = 2 /* RATE_2 */;
                    return cardRate;
                }
                return cardRate;
            };
            TbNiuNiuMgr.prototype.checkCardsType = function (cards) {
                this.SortCards(cards);
                var cardtype = 0 /* NOT_NIU */;
                if (this.is_small_niu(cards)) {
                    cardtype = 14 /* SMALL_NIU */;
                    return cardtype;
                }
                else if (this.is_bomb(cards)) {
                    cardtype = 13 /* BOMB */;
                    return cardtype;
                }
                else if (this.is_gold_niu(cards)) {
                    cardtype = 12 /* GOLD_NIU */;
                    return cardtype;
                }
                else if (this.is_silver_niu(cards)) {
                    cardtype = 11 /* SILVER_NIU */;
                    return cardtype;
                }
                cardtype = this.getNiubyCards(cards);
                return cardtype;
            };
            // 是否五小牛
            TbNiuNiuMgr.prototype.is_small_niu = function (cards) {
                var sum = 0;
                for (var i = 0; i < cards.length; i++) {
                    sum = sum + cards[i].GetCount();
                }
                if (sum <= 10)
                    return true;
                else
                    return false;
            };
            // 是否炸弹
            TbNiuNiuMgr.prototype.is_bomb = function (cards) {
                if (cards[0].GetCardVal() == cards[3].GetCardVal())
                    return true;
                else if (cards[1].GetCardVal() == cards[4].GetCardVal())
                    return true;
                else
                    return false;
            };
            // 是否五花牛
            TbNiuNiuMgr.prototype.is_gold_niu = function (cards) {
                if (cards[4].GetCardVal() > 10)
                    return true;
                else
                    return false;
            };
            // 是否四花牛
            TbNiuNiuMgr.prototype.is_silver_niu = function (cards) {
                if (cards[3].GetCardVal() > 10 && cards[4].GetCardVal() == 10)
                    return true;
                else
                    return false;
            };
            // 自己的牌型
            TbNiuNiuMgr.prototype.checkMyCards = function () {
                var cards = [];
                var type = 0;
                for (var i = 0; i < MAX_CARDS_COUNT; i++) {
                    cards.push(this._cards[i]);
                }
                type = this.checkCardsType(cards);
                return type;
            };
            TbNiuNiuMgr.prototype.sort = function () {
                var cards = this._cards; //牌堆
                var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var max = MAX_SEATS_COUNT;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                var count = 0;
                for (var index = 0; index < max; index++) { //ui座位
                    var posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    if (unit) {
                        for (var i = 0; i < MAX_CARDS_COUNT; i++) { //手牌
                            var card = cards[count * MAX_CARDS_COUNT + i];
                            if (card) {
                                card.myOwner(posIdx, mainUnit == unit, mainUnit.GetIndex());
                                card.index = i;
                                card.sortScore = MAX_CARDS_COUNT - i;
                            }
                        }
                        count++;
                    }
                }
            };
            TbNiuNiuMgr.prototype.setCardsIndex = function (index) {
                this._cardsIndex.push(this.getUnitUIPos(index));
            };
            TbNiuNiuMgr.prototype.resetCardsIndex = function () {
                this._cardsIndex = [];
                this._isGaiPai = false;
            };
            TbNiuNiuMgr.prototype.setValue = function (info) {
                if (!this._cards.length)
                    return;
                var cards = this._cards; //牌堆
                var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var max = MAX_SEATS_COUNT;
                for (var index = 0; index < max; index++) { //ui座位
                    var posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    if (unit && unit.GetIndex() == info.SeatIndex) {
                        var _cardsInfo = info.Cards;
                        var _cards = [];
                        for (var k = 0; k < _cardsInfo.length; k++) {
                            _cards.push(_cardsInfo[k]); //用新数组存下来，方便调整牌序
                        }
                        var isNiu = this.checkCardsType(_cards);
                        var uiPos = this._cardsIndex.indexOf(this.getUnitUIPos(unit.GetIndex()));
                        _cards = this.sortCardsToNiu(_cards);
                        for (var j = 0; j < MAX_CARDS_COUNT; j++) { //手牌
                            var card = cards[uiPos * MAX_CARDS_COUNT + j];
                            var _card = _cards[j];
                            if (card) {
                                card.Init(_card.GetVal());
                                card.index = j;
                                card.sortScore = MAX_CARDS_COUNT - j;
                                if (isNiu && j > 2) {
                                    if (!card.targe_pos) {
                                        card.targe_pos = new Vector2();
                                    }
                                    card.isFinalPos = false;
                                    card.targe_pos.y = card.targe_pos.y + 20;
                                }
                            }
                        }
                        this.kaipai(uiPos);
                        this.moveCard(uiPos);
                    }
                }
            };
            //获取座位上的玩家数量
            TbNiuNiuMgr.prototype.getPlayerOnSeat = function () {
                var unitNum = 0;
                for (var index = 0; index < MAX_SEATS_COUNT; index++) {
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(index + 1);
                    if (unit) {
                        unitNum++;
                    }
                }
                return unitNum;
            };
            //根据实际位置获取精灵在UI上的逻辑位置
            TbNiuNiuMgr.prototype.getUnitUIPos = function (_index) {
                //主玩家的座位
                var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var max = MAX_SEATS_COUNT;
                for (var index = 0; index < max; index++) {
                    var posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    if (unit && posIdx == _index) {
                        return index;
                    }
                }
                return -1;
            };
            TbNiuNiuMgr.prototype.sortCardsToNiu = function (cards) {
                var lave = 0; //余数
                var index1 = 0;
                var index2 = 0;
                var newCards = cards;
                for (var i = 0; i < newCards.length; i++) {
                    lave = lave + newCards[i].GetCount();
                }
                lave = lave % 10;
                for (var i = 0; i < newCards.length - 1; i++) {
                    for (var j = i + 1; j < newCards.length; j++) {
                        if ((newCards[i].GetCount() + newCards[j].GetCount()) % 10 == lave) {
                            index1 = i;
                            index2 = j;
                        }
                    }
                }
                if (index1 + index2 == 0)
                    return newCards;
                if (index1 < 3 && index2 < 3) {
                    var a = newCards[3];
                    newCards[3] = newCards[index1];
                    newCards[index1] = a;
                    a = newCards[4];
                    newCards[4] = newCards[index2];
                    newCards[index2] = a;
                }
                if (index1 < 3 && index2 >= 3) {
                    var index = 0;
                    if (index2 == 3) {
                        index = 4;
                    }
                    else if (index2 == 4) {
                        index = 3;
                    }
                    var a = newCards[index];
                    newCards[index] = newCards[index1];
                    newCards[index1] = a;
                }
                if (index2 < 3 && index1 >= 3) {
                    var index = 0;
                    if (index1 == 3) {
                        index = 4;
                    }
                    else if (index1 == 4) {
                        index = 3;
                    }
                    var a = newCards[index];
                    newCards[index] = newCards[index2];
                    newCards[index2] = a;
                }
                return newCards;
            };
            //发牌
            TbNiuNiuMgr.prototype.fapai = function () {
                var _this = this;
                var count = 0;
                var counter = 0;
                var _loop_1 = function (j) {
                    var _loop_2 = function (i) {
                        Laya.timer.once(150 * count, this_1, function () {
                            _this._game.playSound(PathGameTongyong.music_tongyong + "fapai.mp3", false);
                            var card = _this._cards[i * MAX_CARDS_COUNT + j];
                            if (!card)
                                return;
                            card.fapai();
                            counter++;
                            if (counter >= _this._cards.length) {
                                _this.event(TbNiuNiuMgr.DEAL_OVER);
                            }
                        });
                        count++;
                    };
                    for (var i = 0; i < this_1._cards.length / MAX_CARDS_COUNT; i++) {
                        _loop_2(i);
                    }
                };
                var this_1 = this;
                for (var j = 0; j < MAX_CARDS_COUNT; j++) {
                    _loop_1(j);
                }
            };
            //断线重连，重新发牌(主玩家大牌)
            TbNiuNiuMgr.prototype.refapai = function () {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    if (!card)
                        return;
                    card.refapai();
                }
            };
            //断线重连，重新发牌(主玩家小牌)
            TbNiuNiuMgr.prototype.regaipai = function () {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    if (!card)
                        return;
                    card.regaipai();
                }
            };
            //盖牌
            TbNiuNiuMgr.prototype.gaipai = function () {
                if (this._isGaiPai)
                    return;
                for (var i = 0; i < MAX_CARDS_COUNT; i++) {
                    var card = this._cards[i];
                    if (!card)
                        return;
                    card.yipai();
                }
                this._isGaiPai = true;
            };
            //翻牌
            TbNiuNiuMgr.prototype.fanpai = function () {
                var _this = this;
                Laya.timer.once(150 * this._cards.length, this, function () {
                    for (var i = 0; i < 5; i++) {
                        var card = _this._cards[i];
                        if (!card)
                            return;
                        card.fanpai();
                    }
                });
            };
            //翻牌(断线重连后)
            TbNiuNiuMgr.prototype.reloadFanpai = function () {
                var count = 0;
                for (var i = 0; i < 5; i++) {
                    var card = this._cards[i];
                    if (!card)
                        return;
                    card.fanpai();
                }
            };
            //开牌
            TbNiuNiuMgr.prototype.kaipai = function (index) {
                for (var i = 0; i < MAX_CARDS_COUNT; i++) {
                    var card = this._cards[MAX_CARDS_COUNT * index + i];
                    if (!card)
                        return;
                    card.fanpai();
                }
            };
            //摊牌
            TbNiuNiuMgr.prototype.tanpai = function (index) {
                for (var i = 0; i < MAX_CARDS_COUNT; i++) {
                    var card = this._cards[MAX_CARDS_COUNT * index + i];
                    if (!card)
                        return;
                    card.isShow = true;
                    card.scaleX = 1;
                }
            };
            //牛牌最后两张向下移动
            TbNiuNiuMgr.prototype.moveCard = function (index) {
                var _this = this;
                Laya.timer.once(500, this, function () {
                    for (var i = 0; i < MAX_CARDS_COUNT; i++) {
                        var card = _this._cards[MAX_CARDS_COUNT * index + i];
                        if (!card)
                            return;
                        card.moveCard();
                    }
                });
            };
            // 清理指定玩家卡牌对象
            TbNiuNiuMgr.prototype.clearCardObject = function (index) {
                var _this = this;
                this._game.sceneObjectMgr.ForEachObject(function (obj) {
                    if (obj instanceof TbNiuNiuData) {
                        if (obj.GetOwnerIdx() == index) {
                            _this._game.sceneObjectMgr.clearOfflineObject(obj);
                        }
                    }
                });
            };
            TbNiuNiuMgr.MAPINFO_OFFLINE = "TbNiuNiuMgr.MAPINFO_OFFLINE"; //假精灵
            TbNiuNiuMgr.TUOGUAN_GAME = "TbNiuNiuMgr.TUOGUAN_GAME"; //托管游戏
            TbNiuNiuMgr.DEAL_OVER = "TbNiuNiuMgr.DEAL_OVER"; //发牌结束
            return TbNiuNiuMgr;
        }(gamecomponent.managers.PlayingCardMgrBase));
        manager.TbNiuNiuMgr = TbNiuNiuMgr;
    })(manager = gametbniuniu.manager || (gametbniuniu.manager = {}));
})(gametbniuniu || (gametbniuniu = {}));
//# sourceMappingURL=TbNiuNiuMgr.js.map