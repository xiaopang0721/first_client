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
var gameniuniu;
(function (gameniuniu) {
    var manager;
    (function (manager) {
        var NiuMgr = /** @class */ (function (_super) {
            __extends(NiuMgr, _super);
            function NiuMgr(game) {
                var _this = _super.call(this, game) || this;
                _this._isShowOver = false;
                _this._isReKaiPai = true;
                _this._isReconnect = true;
                _this._totalUnitCount = 5; // 玩家数量
                return _this;
            }
            Object.defineProperty(NiuMgr.prototype, "offlineUnit", {
                get: function () {
                    return this._offlineUnit;
                },
                set: function (v) {
                    this._offlineUnit = v;
                    this.event(NiuMgr.MAPINFO_OFFLINE);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(NiuMgr.prototype, "isReconnect", {
                get: function () {
                    return this._isReconnect;
                },
                set: function (v) {
                    this._isReconnect = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(NiuMgr.prototype, "isReKaiPai", {
                get: function () {
                    return this._isReKaiPai;
                },
                set: function (v) {
                    this._isReKaiPai = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(NiuMgr.prototype, "isShowOver", {
                get: function () {
                    return this._isShowOver;
                },
                set: function (v) {
                    this._isShowOver = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(NiuMgr.prototype, "totalUnitCount", {
                get: function () {
                    return this._totalUnitCount;
                },
                set: function (v) {
                    this._totalUnitCount = v;
                },
                enumerable: true,
                configurable: true
            });
            //对牌进行排序
            NiuMgr.prototype.SortCards = function (cards) {
                if (!cards)
                    return;
                cards.sort(function (a, b) {
                    return a.Compare(b, true);
                });
            };
            // 根据牌获取牌型
            // 获得牛数
            NiuMgr.prototype.getNiubyCards = function (cards) {
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
            NiuMgr.prototype.checkCardsRate = function (cardtype) {
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
            NiuMgr.prototype.checkCardsType = function (cards) {
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
            NiuMgr.prototype.is_small_niu = function (cards) {
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
            NiuMgr.prototype.is_bomb = function (cards) {
                if (cards[0].GetCardVal() == cards[3].GetCardVal())
                    return true;
                else if (cards[1].GetCardVal() == cards[4].GetCardVal())
                    return true;
                else
                    return false;
            };
            // 是否五花牛
            NiuMgr.prototype.is_gold_niu = function (cards) {
                if (cards[4].GetCardVal() > 10)
                    return true;
                else
                    return false;
            };
            // 是否四花牛
            NiuMgr.prototype.is_silver_niu = function (cards) {
                if (cards[3].GetCardVal() > 10 && cards[4].GetCardVal() == 10)
                    return true;
                else
                    return false;
            };
            // 自己的牌型
            NiuMgr.prototype.checkMyCards = function () {
                var cards = [];
                var type = 0;
                for (var i = 0; i < 5; i++) {
                    cards.push(this._cards[i]);
                }
                type = this.checkCardsType(cards);
                return type;
            };
            NiuMgr.prototype.sort = function () {
                var cards = this._cards; //牌堆
                var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var max = 5;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                var count = 0;
                for (var index = 0; index < max; index++) { //ui座位
                    var posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    if (unit) {
                        for (var i = 0; i < max; i++) { //手牌
                            var card = cards[count * max + i];
                            if (card) {
                                card.myOwner(posIdx, mainUnit == unit, mainUnit.GetIndex());
                                card.index = i;
                                card.sortScore = max - i;
                            }
                        }
                        count++;
                    }
                }
            };
            NiuMgr.prototype.setValue = function (infos, bankerIndex) {
                if (!this._cards.length)
                    return;
                if (this._isShowOver)
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit || !mainUnit.GetIndex())
                    return;
                var cards = this._cards; //牌堆
                var idx = mainUnit.GetIndex();
                var max = 5;
                var count = 0;
                this._unitIndexOnTable = [];
                this._bankerIndex = bankerIndex;
                for (var index = 0; index < max; index++) { //ui座位
                    var posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    if (unit) {
                        this._unitIndexOnTable.push(index);
                        for (var i = 0; i < infos.length; i++) {
                            if (unit.GetIndex() == infos[i].SeatIndex) {
                                var _cardsInfo = infos[i].Cards;
                                var _cards = [];
                                for (var k = 0; k < _cardsInfo.length; k++) {
                                    _cards.push(_cardsInfo[k]); //用新数组存下来，方便调整牌序
                                }
                                var isNiu = this.checkCardsType(_cards);
                                _cards = this.sortCardsToNiu(_cards);
                                for (var j = 0; j < max; j++) { //手牌
                                    var card = cards[count * max + j];
                                    var _card = _cards[j];
                                    if (card) {
                                        card.Init(_card.GetVal());
                                        card.index = j;
                                        card.sortScore = max - j;
                                        if (isNiu && j > 2) {
                                            if (!card.targe_pos) {
                                                card.targe_pos = new Vector2();
                                            }
                                            card.isFinalPos = false;
                                            card.targe_pos.y = card.targe_pos.y + 20;
                                        }
                                    }
                                }
                                count++;
                            }
                        }
                    }
                }
                this.kaipai();
                this.moveCard();
                this._isShowOver = true;
            };
            NiuMgr.prototype.resetValue = function (infos, bankerIndex) {
                if (!this._cards.length)
                    return;
                if (this._isShowOver)
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit || !mainUnit.GetIndex())
                    return;
                if (!this._cards.length)
                    return;
                var cards = this._cards; //牌堆
                var idx = mainUnit.GetIndex();
                var max = 5;
                var count = 0;
                this._unitIndexOnTable = [];
                this._bankerIndex = bankerIndex;
                for (var index = 0; index < max; index++) { //ui座位
                    var posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    if (unit) {
                        this._unitIndexOnTable.push(index);
                        for (var i = 0; i < infos.length; i++) {
                            if (unit.GetIndex() == infos[i].SeatIndex) {
                                var _cardsInfo = infos[i].Cards;
                                var _cards = [];
                                for (var k = 0; k < _cardsInfo.length; k++) {
                                    _cards.push(_cardsInfo[k]); //用新数组存下来，方便调整牌序
                                }
                                var isNiu = this.checkCardsType(_cards);
                                _cards = this.sortCardsToNiu(_cards);
                                for (var j = 0; j < max; j++) { //手牌
                                    var card = cards[count * max + j];
                                    var _card = _cards[j];
                                    card.Init(_card.GetVal());
                                    card.index = j;
                                    card.sortScore = max - j;
                                    if (isNiu && j > 2) {
                                        if (!card.targe_pos) {
                                            card.targe_pos = new Vector2();
                                        }
                                        card.isFinalPos = false;
                                        card.targe_pos.y = card.targe_pos.y + 20;
                                    }
                                }
                                count++;
                            }
                        }
                    }
                }
                this.rekaipai();
                this.removeCard();
                this._isShowOver = true;
            };
            NiuMgr.prototype.sortCardsToNiu = function (cards) {
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
            NiuMgr.prototype.fapai = function () {
                var _this = this;
                var count = 0;
                var counter = 0;
                var _loop_1 = function (j) {
                    var _loop_2 = function (i) {
                        Laya.timer.once(150 * count, this_1, function () {
                            _this._game.playSound(PathGameTongyong.music_tongyong + "fapai.mp3", false);
                            var card = _this._cards[i * 5 + j];
                            if (!card)
                                return;
                            card.fapai();
                            counter++;
                            if (counter >= _this._cards.length) {
                                _this.event(NiuMgr.DEAL_OVER);
                            }
                        });
                        count++;
                    };
                    for (var i = 0; i < this_1._cards.length / 5; i++) {
                        _loop_2(i);
                    }
                };
                var this_1 = this;
                for (var j = 0; j < 5; j++) {
                    _loop_1(j);
                }
            };
            //断线重连，重新发牌(主玩家大牌)
            NiuMgr.prototype.refapai = function () {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    if (!card)
                        return;
                    card.refapai();
                }
            };
            //断线重连，重新发牌(主玩家小牌)
            NiuMgr.prototype.regaipai = function () {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    if (!card)
                        return;
                    card.regaipai();
                }
            };
            //可以点了
            NiuMgr.prototype.setToggleEnable = function () {
                for (var i = 0; i < 5; i++) {
                    var card = this._cards[i];
                    if (!card)
                        return;
                    card.toggleEnable = true;
                }
            };
            //盖牌
            NiuMgr.prototype.gaipai = function () {
                for (var i = 0; i < 5; i++) {
                    var card = this._cards[i];
                    if (!card)
                        return;
                    card.yipai();
                    card.gaipai();
                }
            };
            //翻牌
            NiuMgr.prototype.fanpai = function () {
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
            NiuMgr.prototype.reloadFanpai = function () {
                var count = 0;
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    if (!card)
                        return;
                    card.fanpai();
                }
            };
            //开牌
            NiuMgr.prototype.kaipai = function () {
                var _this = this;
                //获取庄家下一家的逻辑位置，即为第一个开牌的位置
                var begin = this._unitIndexOnTable.indexOf(this._bankerIndex) + 1;
                var len = this._unitIndexOnTable.length;
                begin = begin >= len ? 0 : begin;
                var cardLen = this._cards.length / 5;
                var _loop_3 = function (i) {
                    var index = begin + i >= cardLen ? begin + i - cardLen : begin + i;
                    Laya.timer.once(500 + i * 1000, this_2, function () {
                        for (var j = 0; j < 5; j++) {
                            var card = _this._cards[5 * index + j];
                            if (!card)
                                return;
                            card.fanpai();
                        }
                    });
                };
                var this_2 = this;
                for (var i = 0; i < cardLen; i++) {
                    _loop_3(i);
                }
            };
            //断线重连开牌
            NiuMgr.prototype.rekaipai = function () {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    if (!card)
                        return;
                    card.kaipai();
                }
            };
            //牛牌最后两张向下移动
            NiuMgr.prototype.moveCard = function () {
                var _this = this;
                //获取庄家下一家的逻辑位置，即为第一个开牌的位置
                var begin = this._unitIndexOnTable.indexOf(this._bankerIndex) + 1;
                var len = this._unitIndexOnTable.length;
                begin = begin >= len ? 0 : begin;
                var cardLen = this._cards.length / 5;
                var _loop_4 = function (i) {
                    var index = begin + i >= cardLen ? begin + i - cardLen : begin + i;
                    Laya.timer.once(500 + i * 1000, this_3, function () {
                        for (var j = 0; j < 5; j++) {
                            var card = _this._cards[5 * index + j];
                            if (!card)
                                return;
                            card.moveCard();
                        }
                    });
                };
                var this_3 = this;
                for (var i = 0; i < cardLen; i++) {
                    _loop_4(i);
                }
            };
            //牛牌最后两张向下移动（断线重连）
            NiuMgr.prototype.removeCard = function () {
                //获取庄家下一家的逻辑位置，即为第一个开牌的位置
                var begin = this._unitIndexOnTable.indexOf(this._bankerIndex) + 1;
                var len = this._unitIndexOnTable.length;
                begin = begin >= len ? 0 : begin;
                var cardLen = this._cards.length / 5;
                for (var i = 0; i < cardLen; i++) {
                    var index = begin + i >= cardLen ? begin + i - cardLen : begin + i;
                    for (var j = 0; j < 5; j++) {
                        var card = this._cards[5 * index + j];
                        if (!card)
                            return;
                        card.moveCard();
                    }
                }
            };
            // 清理指定玩家卡牌对象
            NiuMgr.prototype.clearCardObject = function (index) {
                var _this = this;
                this._game.sceneObjectMgr.ForEachObject(function (obj) {
                    if (obj instanceof NiuData) {
                        if (obj.GetOwnerIdx() == index) {
                            _this._game.sceneObjectMgr.clearOfflineObject(obj);
                        }
                    }
                });
            };
            NiuMgr.MAPINFO_OFFLINE = "NiuMgr.MAPINFO_OFFLINE"; //假精灵
            NiuMgr.DEAL_OVER = "NiuMgr.DEAL_OVER"; //发牌结束
            NiuMgr.WXSHARE_TITLE = "抢庄牛牛]房号:{0}"; // 分享标题
            NiuMgr.WXSHARE_DESC = "开好房喽,就等你们一起来玩抢庄牛牛啦!晚了位置就没了哟~"; // 分享内容
            NiuMgr.MIN_CARD_SEATS_COUNT = 2; // 房卡模式下最小人数
            NiuMgr.MAX_NUM = 5; //最大人数
            return NiuMgr;
        }(gamecomponent.managers.PlayingCardMgrBase));
        manager.NiuMgr = NiuMgr;
    })(manager = gameniuniu.manager || (gameniuniu.manager = {}));
})(gameniuniu || (gameniuniu = {}));
//# sourceMappingURL=NiuMgr.js.map