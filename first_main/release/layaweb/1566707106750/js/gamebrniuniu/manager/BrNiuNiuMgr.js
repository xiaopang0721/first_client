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
    var manager;
    (function (manager) {
        var CARDS_NUM = 5; //场上共5副牌
        var MAX_CARD_COUNT = 5; //最大手牌数
        var BrNiuNiuMgr = /** @class */ (function (_super) {
            __extends(BrNiuNiuMgr, _super);
            function BrNiuNiuMgr(game) {
                var _this = _super.call(this, game) || this;
                _this._isCancel = false;
                _this._isReDrawCards = true;
                _this._cardsIndex = []; //牌的归属位置
                return _this;
            }
            Object.defineProperty(BrNiuNiuMgr.prototype, "offlineUnit", {
                get: function () {
                    return this._offlineUnit;
                },
                set: function (v) {
                    this._offlineUnit = v;
                    this.event(BrNiuNiuMgr.MAPINFO_OFFLINE);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BrNiuNiuMgr.prototype, "isCancel", {
                get: function () {
                    return this._isCancel;
                },
                set: function (v) {
                    this._isCancel = v;
                    this.event(BrNiuNiuMgr.MAPINFO_OFFLINE);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BrNiuNiuMgr.prototype, "isReDrawCards", {
                get: function () {
                    return this._isReDrawCards;
                },
                set: function (v) {
                    this._isReDrawCards = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BrNiuNiuMgr.prototype, "allCards", {
                get: function () {
                    return this._cards;
                },
                enumerable: true,
                configurable: true
            });
            //对牌进行排序 重写不需要排序
            BrNiuNiuMgr.prototype.SortCards = function (cards) {
            };
            //管理器自己的排序
            BrNiuNiuMgr.prototype.sortCards = function (cards) {
                if (!cards)
                    return;
                cards.sort(function (a, b) {
                    return a.Compare(b, true);
                });
            };
            BrNiuNiuMgr.prototype.initCard = function (all_val) {
                var card_arr = [];
                for (var i = 0; i < all_val.length; i++) {
                    var card = void 0;
                    card = new BrNiuNiuData();
                    card.Init(all_val[i]);
                    card_arr.push(card);
                }
                return card_arr;
            };
            //banker_Cards  庄家
            //other_Cards  闲家
            //return 庄家是否赢
            BrNiuNiuMgr.prototype.bankeriswin = function (banker_Cards, other_Cards) {
                var new_bankerCards = [];
                var new_otherCards = [];
                for (var i = 0; i < banker_Cards.length; i++) {
                    new_bankerCards[i] = banker_Cards[i];
                    new_otherCards[i] = other_Cards[i];
                }
                this.sortCards(new_bankerCards);
                this.sortCards(new_otherCards);
                var banker_Cards_Type = this.checkCardsType(new_bankerCards);
                var other_Cards_Type = this.checkCardsType(new_otherCards);
                var result = 0;
                if (banker_Cards_Type != other_Cards_Type) {
                    if (banker_Cards_Type > other_Cards_Type) {
                        result = 1;
                    }
                    else {
                        result = -1;
                    }
                    return result;
                }
                if (banker_Cards_Type == 14 /* SMALL_NIU */) {
                    result = new_bankerCards[0].Compare(new_otherCards[0], true) * -1;
                    return result;
                }
                if (banker_Cards_Type == 13 /* BOMB */) {
                    result = new_bankerCards[2].card_val > new_otherCards[2].card_val ? 1 : -1;
                    return result;
                }
                if (banker_Cards_Type == 12 /* GOLD_NIU */) {
                    result = new_bankerCards[0].Compare(new_otherCards[0], true) * -1;
                    return result;
                }
                if (banker_Cards_Type == 11 /* SILVER_NIU */) {
                    result = new_bankerCards[0].Compare(new_otherCards[0], true) * -1;
                    return result;
                }
                if (banker_Cards_Type >= 1 /* NIU_1 */ && banker_Cards_Type <= 10 /* NIU_NIU */) {
                    result = new_bankerCards[0].Compare(new_otherCards[0], true) * -1;
                    return result;
                }
                if (banker_Cards_Type == 0 /* NOT_NIU */) {
                    result = new_bankerCards[0].Compare(new_otherCards[0], true) * -1;
                    return result;
                }
                return result;
            };
            // 根据牌获取牌型
            // 获得牛数
            BrNiuNiuMgr.prototype.getNiubyCards = function (cards) {
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
            BrNiuNiuMgr.prototype.checkCardsRate = function (cardtype) {
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
            BrNiuNiuMgr.prototype.checkCardsType = function (cards) {
                var new_cards = [];
                for (var i = 0; i < cards.length; i++) {
                    new_cards[i] = cards[i];
                }
                this.sortCards(new_cards);
                var cardtype = 0 /* NOT_NIU */;
                if (this.is_small_niu(new_cards)) {
                    cardtype = 14 /* SMALL_NIU */;
                    return cardtype;
                }
                else if (this.is_bomb(new_cards)) {
                    cardtype = 13 /* BOMB */;
                    return cardtype;
                }
                else if (this.is_gold_niu(new_cards)) {
                    cardtype = 12 /* GOLD_NIU */;
                    return cardtype;
                }
                else if (this.is_silver_niu(new_cards)) {
                    cardtype = 11 /* SILVER_NIU */;
                    return cardtype;
                }
                cardtype = this.getNiubyCards(new_cards);
                return cardtype;
            };
            // 是否五小牛
            BrNiuNiuMgr.prototype.is_small_niu = function (cards) {
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
            BrNiuNiuMgr.prototype.is_bomb = function (cards) {
                if (cards[0].GetCardVal() == cards[3].GetCardVal())
                    return true;
                else if (cards[1].GetCardVal() == cards[4].GetCardVal())
                    return true;
                else
                    return false;
            };
            // 是否五花牛
            BrNiuNiuMgr.prototype.is_gold_niu = function (cards) {
                if (cards[4].GetCardVal() > 10)
                    return true;
                else
                    return false;
            };
            // 是否四花牛
            BrNiuNiuMgr.prototype.is_silver_niu = function (cards) {
                if (cards[3].GetCardVal() > 10 && cards[4].GetCardVal() == 10)
                    return true;
                else
                    return false;
            };
            BrNiuNiuMgr.prototype.sort = function () {
                var cards = this._cards; //牌堆
                var count = 0;
                for (var index = 0; index < CARDS_NUM; index++) { //循环五副牌
                    for (var i = 0; i < MAX_CARD_COUNT; i++) { //循环五张牌
                        var card = cards[index * MAX_CARD_COUNT + i];
                        if (card) {
                            card.myOwner(index);
                            card.index = i;
                            card.sortScore = -i;
                        }
                    }
                }
            };
            BrNiuNiuMgr.prototype.setValue = function (_cards, index) {
                if (!this._cards.length)
                    return;
                for (var j = 0; j < MAX_CARD_COUNT; j++) { //手牌
                    var card = this._cards[index * MAX_CARD_COUNT + j];
                    var _card = _cards[j];
                    if (card) {
                        card.Init(_card.GetVal());
                        card.index = j;
                        card.sortScore = -j;
                    }
                }
                this.kaipai(index);
            };
            BrNiuNiuMgr.prototype.sortCardsToNiu = function (cards) {
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
                    return [];
                return [index1, index2];
            };
            //发牌
            BrNiuNiuMgr.prototype.fapai = function () {
                var _this = this;
                var count = 0;
                var counter = 0;
                var _loop_1 = function (j) {
                    var _loop_2 = function (i) {
                        Laya.timer.once(150 * count, this_1, function () {
                            _this._game.playSound(PathGameTongyong.music_tongyong + "fapai.mp3", false);
                            var card = _this._cards[i * CARDS_NUM + j];
                            if (!card)
                                return;
                            card.fapai();
                            counter++;
                            if (counter >= _this._cards.length) {
                                _this.event(BrNiuNiuMgr.DEAL_OVER);
                            }
                        });
                        count++;
                    };
                    for (var i = 0; i < this_1._cards.length / CARDS_NUM; i++) {
                        _loop_2(i);
                    }
                };
                var this_1 = this;
                for (var j = 0; j < CARDS_NUM; j++) {
                    _loop_1(j);
                }
            };
            //重新发牌（最后一张牌旋转）
            BrNiuNiuMgr.prototype.refapai = function () {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    if (!card)
                        return;
                    card.refapai();
                }
            };
            //重新发牌（正常）
            BrNiuNiuMgr.prototype.refapai1 = function () {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    if (!card)
                        return;
                    card.refapai1();
                }
            };
            //翻牌
            BrNiuNiuMgr.prototype.fanpai = function () {
                var _this = this;
                var count = 1;
                var _loop_3 = function (j) {
                    var _loop_4 = function (i) {
                        Laya.timer.once(500 * count, this_2, function () {
                            var card = _this._cards[i * CARDS_NUM + j];
                            if (!card)
                                return;
                            card.fanpai();
                        });
                        count++;
                    };
                    for (var i = 0; i < this_2._cards.length / CARDS_NUM; i++) {
                        _loop_4(i);
                    }
                };
                var this_2 = this;
                for (var j = 0; j < CARDS_NUM; j++) {
                    _loop_3(j);
                }
            };
            //翻牌（断线重连）
            BrNiuNiuMgr.prototype.refanpai = function () {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    if (!card)
                        return;
                    card.fanpai();
                }
            };
            //搓牌隐藏第四张
            BrNiuNiuMgr.prototype.yincang = function (index) {
                var card = this._cards[5 * index + 4];
                if (!card)
                    return;
                card.yincangpai();
            };
            //开牌
            BrNiuNiuMgr.prototype.kaipai = function (index) {
                var _this = this;
                var idx = index == 0 ? 4 : index - 1;
                Laya.timer.once(1700 + idx * 1800, this, function () {
                    var card = _this._cards[5 * index + 4];
                    if (!card)
                        return;
                    card.kaipai();
                });
            };
            //两张牛牌向上移动
            BrNiuNiuMgr.prototype.moveCard = function (index, niuIndex) {
                var _this = this;
                Laya.timer.once(1700 + index * 1900, this, function () {
                    for (var i = 0; i < niuIndex.length; i++) {
                        if (i == niuIndex[i]) {
                            var card = _this._cards[5 * index + 4];
                            if (!card)
                                return;
                            card.targe_pos.y = card.targe_pos.y - 20;
                            card.moveCard();
                        }
                    }
                });
            };
            BrNiuNiuMgr.MAPINFO_OFFLINE = "BrNiuNiuMgr.MAPINFO_OFFLINE"; //假精灵
            BrNiuNiuMgr.CANCEL_MATCH = "BrNiuNiuMgr.CANCEL_MATCH"; //取消匹配
            BrNiuNiuMgr.DEAL_OVER = "BrNiuNiuMgr.DEAL_OVER"; //发牌结束
            BrNiuNiuMgr.SEE_CARD_OVER = "BrNiuNiuMgr.SEE_CARD_OVER"; //搓牌动作结束
            return BrNiuNiuMgr;
        }(gamecomponent.managers.PlayingCardMgrBase));
        manager.BrNiuNiuMgr = BrNiuNiuMgr;
    })(manager = gamebrniuniu.manager || (gamebrniuniu.manager = {}));
})(gamebrniuniu || (gamebrniuniu = {}));
//# sourceMappingURL=BrNiuNiuMgr.js.map