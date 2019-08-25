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
* 21点-牌
*/
var gameblackjack;
(function (gameblackjack) {
    var manager;
    (function (manager) {
        var CARDS_TYPE_BLACKJACK = 100; //黑杰克
        var CARDS_TYPE_WUXIAOLONG = 99; //五小龙
        var MIN_CHECKTIME = 1000; //最小检测时间间隔(毫秒)
        var BlackjackMgr = /** @class */ (function (_super) {
            __extends(BlackjackMgr, _super);
            function BlackjackMgr(game) {
                var _this = _super.call(this, game) || this;
                _this.isReLogin = false; //是否断线重连
                _this._cardsTemp = []; //牌数据
                _this._partPos = []; //分牌过的位置
                return _this;
            }
            Object.defineProperty(BlackjackMgr.prototype, "unitOffline", {
                get: function () {
                    return this._unitOffline;
                },
                set: function (v) {
                    this._unitOffline = v;
                    this.event(BlackjackMgr.MAPINFO_OFFLINE);
                },
                enumerable: true,
                configurable: true
            });
            //心跳更新
            BlackjackMgr.prototype.update = function (diff) {
                if (this._offsetTime > 0) {
                    this._offsetTime -= diff;
                    return;
                }
                this._offsetTime = MIN_CHECKTIME;
            };
            BlackjackMgr.prototype.createObj = function (u) {
                var card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, BlackjackData);
                card.pos = new Vector2(950, 160);
                return card;
            };
            //加一张牌
            BlackjackMgr.prototype.addCard = function (val, create_fun, ownerIdx, cardIdx, isPart) {
                var mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var card;
                card = create_fun.run();
                this._cards.push(card);
                card.Init(val);
                card.sortScore = -cardIdx;
                if (!isPart) {
                    if (cardIdx == 2) {
                        cardIdx = 3;
                    }
                    else if (cardIdx == 3) {
                        for (var i = 0; i < this._cards.length; i++) {
                            var card_1 = this._cards[i];
                            if (card_1._ownerIdx == ownerIdx) {
                                card_1._cardIdx = card_1._cardIdx - 1;
                                card_1 && card_1.fapai();
                            }
                        }
                    }
                }
                else {
                    if (cardIdx == 1 && ownerIdx % 10 == 1) {
                        card.disable = true;
                    }
                }
                card.myOwner(null, mainIdx, ownerIdx, cardIdx, isPart);
                card && card.fapai();
            };
            BlackjackMgr.prototype.cardCount = function (card) {
                var cardCount = 0;
                card = card - 1;
                var val = card % 52;
                var cardVal = val % 13 + 1;
                if (cardVal > 10)
                    cardCount = 10;
                else
                    cardCount = cardVal;
                return cardCount;
            };
            // 黑杰克
            BlackjackMgr.prototype.isBlackJack = function (cards, isPart) {
                //分牌的不算
                if (isPart)
                    return false;
                //2张牌，A和10以上
                if (cards.length != 2)
                    return false;
                if (cards[0] != 1)
                    return false;
                if (cards[1] != 10)
                    return false;
                return true;
            };
            //五小龙
            BlackjackMgr.prototype.isWuXiaoLong = function (cards) {
                //必须是5张牌
                if (cards.length != 5)
                    return false;
                //总点数低于22点
                var count = cards[0];
                for (var i = 1; i < cards.length; i++) {
                    count = count + cards[i];
                }
                if (count > 21)
                    return false;
                return true;
            };
            // 计算下点数
            BlackjackMgr.prototype.checkCardsType = function (cards, isPart) {
                var newCards = [];
                for (var index = 0; index < cards.length; index++) {
                    newCards.push(this.cardCount(cards[index]));
                }
                newCards.sort(function (a, b) {
                    return a - b;
                });
                var count = [0, 0];
                //特殊牌
                if (this.isBlackJack(newCards, isPart)) {
                    count[0] = CARDS_TYPE_BLACKJACK;
                }
                else if (this.isWuXiaoLong(newCards)) {
                    count[0] = CARDS_TYPE_WUXIAOLONG;
                }
                else {
                    var val = newCards[0];
                    for (var i = 1; i < newCards.length; i++) {
                        val = val + newCards[i];
                    }
                    count[0] = val;
                    //如果有A
                    if (newCards[0] == 1) {
                        if (val <= 11) {
                            val = val + 10;
                            count[1] = val;
                        }
                    }
                    //爆牌了
                    if (val > 21) {
                        val = 0;
                        count[0] = val;
                    }
                }
                return count;
            };
            BlackjackMgr.prototype.sort = function () {
                var mainiIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var cardIndex = 0;
                for (var index = 0; index < this._cardsTemp.length; index++) {
                    for (var i = 0; i < this._cardsTemp[index].cards.length; i++) {
                        var card = this._cards[cardIndex];
                        var isPart = false;
                        if (this._partPos.indexOf(Math.floor(this._cardsTemp[index].idx / 10)) >= 0) {
                            isPart = true;
                        }
                        var cardIdx = i;
                        if (!isPart) {
                            if (this._cardsTemp[index].cards.length < 4) {
                                cardIdx = i + 1;
                            }
                        }
                        card.Init(this._cardsTemp[index].cards[i]);
                        card.myOwner(null, mainiIdx, this._cardsTemp[index].idx, cardIdx, isPart);
                        card.sortScore = -i;
                        cardIndex++;
                    }
                }
                //还有张特殊的牌
                if (cardIndex == this._cards.length - 1) {
                    var card = this._cards[cardIndex];
                    card.Init(0);
                    card.myOwner(null, mainiIdx, 60, 2, false);
                    card.sortScore = -1;
                }
            };
            //发牌
            BlackjackMgr.prototype.fapai = function () {
                var _this = this;
                var count = 0;
                var cardCount = 0;
                for (var index = 0; index < 2; index++) {
                    var _loop_1 = function (i) {
                        var card = this_1._cards[index + i * 2];
                        //播音效
                        if (card) {
                            Laya.timer.once(200 * count, this_1, function () {
                                _this._game.playSound(PathGameTongyong.music_tongyong + "fapai.mp3", false);
                                card.fapai();
                                cardCount++;
                                if (cardCount == _this._cards.length)
                                    _this.event(BlackjackMgr.DEAL_CARDS);
                            });
                            count++;
                        }
                    };
                    var this_1 = this;
                    for (var i = 0; i < this._cardsTemp.length; i++) {
                        _loop_1(i);
                    }
                }
            };
            //重连发牌
            BlackjackMgr.prototype.refapai = function () {
                var isFan = false;
                //到庄家打牌了
                if (this._game.sceneObjectMgr.mapInfo.GetMapState() >= 8) {
                    isFan = true;
                }
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    card && card.refapai(isFan);
                }
            };
            //翻牌
            BlackjackMgr.prototype.fanpaiOne = function () {
                for (var index = 0; index < this._cards.length; index++) {
                    var element = this._cards[index];
                    element.fanpaiOne();
                }
            };
            //发牌了
            BlackjackMgr.prototype.isDealCard = function () {
                this._cardsTemp = [];
                var mapInfo = this._game.sceneObjectMgr.mapInfo;
                var battleInfoMgr = mapInfo.battleInfoMgr;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    if (battleInfo instanceof gamecomponent.object.BattleInfoDeal) { //发牌
                        //新整一个数组
                        var cardsTemp = [];
                        for (var cardIdx = 0; cardIdx < battleInfo.Cards.length; cardIdx++) {
                            cardsTemp.push(battleInfo.Cards[cardIdx]);
                        }
                        var obj = {
                            idx: battleInfo.SeatIndex,
                            cards: cardsTemp,
                        };
                        this._cardsTemp.push(obj);
                    }
                }
            };
            //分牌
            BlackjackMgr.prototype.partCard = function (ownerIdx) {
                var mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    if (card._ownerIdx == ownerIdx) {
                        if (card._cardIdx == 1) {
                            card.myOwner(null, mainIdx, ownerIdx, 0, true);
                        }
                        else if (card._cardIdx == 2) {
                            card.myOwner(null, mainIdx, ownerIdx + 1, 0, true);
                        }
                        card.sortScore = 0;
                        card.scaleX = 1;
                        card.fenpai();
                    }
                }
            };
            //断线重连
            BlackjackMgr.prototype.reDealCard = function () {
                this._cardsTemp = [];
                var mapInfo = this._game.sceneObjectMgr.mapInfo;
                var battleInfoMgr = mapInfo.battleInfoMgr;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    if (battleInfo instanceof gamecomponent.object.BattleInfoDeal) { //发牌
                        //新整一个数组
                        var cardsTemp = [];
                        for (var cardIdx = 0; cardIdx < battleInfo.Cards.length; cardIdx++) {
                            cardsTemp.push(battleInfo.Cards[cardIdx]);
                        }
                        var obj = {
                            idx: battleInfo.SeatIndex,
                            cards: cardsTemp,
                        };
                        this._cardsTemp.push(obj);
                    }
                    else if (battleInfo instanceof gamecomponent.object.BattleInfoPart) { //分牌
                        this._partPos.push(battleInfo.Pos / 10);
                        for (var k = 0; k < this._cardsTemp.length; k++) {
                            if (battleInfo.Pos == this._cardsTemp[k].idx) {
                                var card = [];
                                card.push(this._cardsTemp[k].cards[1]);
                                var obj = {
                                    idx: battleInfo.Pos + 1,
                                    cards: card,
                                };
                                this._cardsTemp.push(obj);
                                this._cardsTemp[k].cards.splice(1, 1);
                            }
                        }
                    }
                    else if (battleInfo instanceof gamecomponent.object.BattleInfoAsk) { //要牌
                        for (var i_1 = 0; i_1 < this._cardsTemp.length; i_1++) {
                            if (this._cardsTemp[i_1].idx == battleInfo.SeatIndex) {
                                this._cardsTemp[i_1].cards.push(battleInfo.Card);
                            }
                        }
                    }
                    else if (battleInfo instanceof gamecomponent.object.BattleInfoFanPai) { //庄家翻牌
                        for (var i_2 = 0; i_2 < this._cardsTemp.length; i_2++) {
                            if (this._cardsTemp[i_2].idx == battleInfo.SeatIndex) {
                                this._cardsTemp[i_2].cards.push(battleInfo.Card);
                            }
                        }
                    }
                }
            };
            //牌置灰
            BlackjackMgr.prototype.setDisabled = function (ownerIdx, isPart) {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    if (!isPart) {
                        card.disable = false;
                    }
                    else {
                        if (Math.floor(card._ownerIdx / 10) == Math.floor(ownerIdx / 10) && card._ownerIdx != ownerIdx) {
                            card.disable = true;
                        }
                        else {
                            card.disable = false;
                        }
                    }
                }
            };
            //重置数据
            BlackjackMgr.prototype.resetData = function () {
                this._cardsTemp = [];
            };
            //庄家第二张牌设值
            BlackjackMgr.prototype.setCardVal = function (val) {
                for (var index = 0; index < this._cards.length; index++) {
                    var card = this._cards[index];
                    if (card._ownerIdx == 60 && card._cardIdx == 2) {
                        card.Init(val);
                    }
                }
            };
            BlackjackMgr.MAPINFO_OFFLINE = "BlackjackMgr.MAPINFO_OFFLINE"; //假精灵
            BlackjackMgr.DEAL_CARDS = "BlackjackMgr.DEAL_CARDS"; //发牌结束
            return BlackjackMgr;
        }(gamecomponent.managers.PlayingCardMgrBase));
        manager.BlackjackMgr = BlackjackMgr;
    })(manager = gameblackjack.manager || (gameblackjack.manager = {}));
})(gameblackjack || (gameblackjack = {}));
//# sourceMappingURL=BlackjackMgr.js.map