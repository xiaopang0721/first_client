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
* 三公-牌
*/
var gamesangong;
(function (gamesangong) {
    var manager;
    (function (manager) {
        var MIN_CHECKTIME = 1000; //最小检测时间间隔(毫秒)
        var SangongMgr = /** @class */ (function (_super) {
            __extends(SangongMgr, _super);
            function SangongMgr(game) {
                var _this = _super.call(this, game) || this;
                _this.isReLogin = false; //是否断线重连
                _this._cardsTemp = []; //牌数据
                _this._partPos = []; //分牌过的位置
                return _this;
            }
            Object.defineProperty(SangongMgr.prototype, "unitOffline", {
                get: function () {
                    return this._unitOffline;
                },
                set: function (v) {
                    this._unitOffline = v;
                    this.event(SangongMgr.MAPINFO_OFFLINE);
                },
                enumerable: true,
                configurable: true
            });
            //心跳更新
            SangongMgr.prototype.update = function (diff) {
                if (this._offsetTime > 0) {
                    this._offsetTime -= diff;
                    return;
                }
                this._offsetTime = MIN_CHECKTIME;
            };
            SangongMgr.prototype.createObj = function (u) {
                var card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, SangongData);
                card.pos = new Vector2(840, 190);
                return card;
            };
            //牌值
            SangongMgr.prototype.getCardValue = function (card) {
                var cardValue = 0;
                card = card - 1;
                cardValue = card % 13 + 1;
                return cardValue;
            };
            //点数
            SangongMgr.prototype.cardCount = function (card) {
                var cardCount = 0;
                card = card - 1;
                var cardVal = card % 13 + 1;
                if (cardVal > 10)
                    cardCount = 10;
                else
                    cardCount = cardVal;
                return cardCount;
            };
            // 爆玖
            SangongMgr.prototype.isBaoJiu = function (cards) {
                //3张3
                if (cards.length != 3)
                    return false;
                if (this.cardCount(cards[0]) != 3)
                    return false;
                if (this.cardCount(cards[1]) != 3)
                    return false;
                if (this.cardCount(cards[2]) != 3)
                    return false;
                return true;
            };
            //炸弹
            SangongMgr.prototype.isBoom = function (cards) {
                //3张牌一样，3除外
                if (cards.length != 3)
                    return false;
                if (this.cardCount(cards[0]) == 3)
                    return false;
                if (this.getCardValue(cards[0]) != this.getCardValue(cards[2]))
                    return false;
                return true;
            };
            // 三公
            SangongMgr.prototype.isSanGong = function (cards) {
                //3张大于10的
                if (cards.length != 3)
                    return false;
                if (this.getCardValue(cards[0]) <= 10)
                    return false;
                if (this.getCardValue(cards[1]) <= 10)
                    return false;
                if (this.getCardValue(cards[2]) <= 10)
                    return false;
                return true;
            };
            // 看下是什么牌
            SangongMgr.prototype.checkCardsType = function (cards) {
                var cardtype = 0;
                if (this.isBaoJiu(cards))
                    cardtype = 4 /* CARDS_TYPE_BAOJIU */;
                else if (this.isBoom(cards))
                    cardtype = 3 /* CARDS_TYPE_BOOM */;
                else if (this.isSanGong(cards))
                    cardtype = 2 /* CARDS_TYPE_SG */;
                else
                    cardtype = 1 /* CARDS_TYPE_POINTS */;
                return cardtype;
            };
            // 计算下点数
            SangongMgr.prototype.checkCardsCount = function (cards) {
                var count = 0;
                var val = this.cardCount(cards[0]);
                for (var i = 1; i < cards.length; i++) {
                    val += this.cardCount(cards[i]);
                }
                count = val % 10;
                return count;
            };
            SangongMgr.prototype.sort = function () {
                var cards = this._cards;
                var max = 5;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                var idx = mainUnit.GetIndex();
                var count = 0;
                for (var index = 0; index < max; index++) {
                    var posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    if (unit) {
                        for (var i = 0; i < 3; i++) {
                            var card = cards[count * 3 + i];
                            if (card) {
                                card.myOwner(unit, mainUnit == unit, idx, posIdx);
                                card.index = i;
                                card.sortScore = -i;
                            }
                        }
                        count++;
                    }
                }
            };
            //发牌
            SangongMgr.prototype.fapai = function () {
                var _this = this;
                var count = 0;
                var cardIndex = 0;
                for (var index = 0; index < 3; index++) {
                    var _loop_1 = function (i) {
                        var card = this_1._cards[index + i * 3];
                        //播音效
                        Laya.timer.once(130 * count, this_1, function () {
                            _this._game.playSound(PathGameTongyong.music_tongyong + "fapai.mp3", false);
                            card.fapai();
                            cardIndex++;
                            if (cardIndex == _this._cards.length)
                                _this.event(SangongMgr.DEAL_CARDS);
                        });
                        count++;
                    };
                    var this_1 = this;
                    for (var i = 0; i < this._cards.length / 3; i++) {
                        _loop_1(i);
                    }
                }
            };
            //重连发牌
            SangongMgr.prototype.refapai = function () {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    card.refapai();
                }
            };
            //翻牌
            SangongMgr.prototype.showCards = function (cards, pos) {
                var mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                if (!mainIdx)
                    return;
                for (var index = 0; index < cards.length; index++) {
                    var cardIdx = (pos + 5 - mainIdx) % 5;
                    var card = this._cards[cardIdx * 3 + index];
                    card.Init(cards[index]);
                    card.fanpai();
                }
            };
            //重置数据
            SangongMgr.prototype.resetData = function () {
                this._cardsTemp = [];
            };
            SangongMgr.MAPINFO_OFFLINE = "SangongMgr.MAPINFO_OFFLINE"; //假精灵
            SangongMgr.DEAL_CARDS = "SangongMgr.DEAL_CARDS"; //发牌结束
            return SangongMgr;
        }(gamecomponent.managers.PlayingCardMgrBase));
        manager.SangongMgr = SangongMgr;
    })(manager = gamesangong.manager || (gamesangong.manager = {}));
})(gamesangong || (gamesangong = {}));
//# sourceMappingURL=SangongMgr.js.map