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
    var manager;
    (function (manager) {
        var ZjhMgr = /** @class */ (function (_super) {
            __extends(ZjhMgr, _super);
            function ZjhMgr(game) {
                var _this = _super.call(this, game) || this;
                _this.isReLogin = false; //是否断线重连
                _this._cardIndex = 0; //发牌监听用
                return _this;
            }
            Object.defineProperty(ZjhMgr.prototype, "unitOffline", {
                get: function () {
                    return this._unitOffline;
                },
                set: function (v) {
                    this._unitOffline = v;
                    this.event(ZjhMgr.MAPINFO_OFFLINE);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ZjhMgr.prototype, "cardIndex", {
                set: function (v) {
                    this._cardIndex = v;
                },
                enumerable: true,
                configurable: true
            });
            //心跳更新
            ZjhMgr.prototype.update = function (diff) {
                if (this._offsetTime > 0) {
                    this._offsetTime -= diff;
                    return;
                }
                this._offsetTime = ZjhMgr.MIN_CHECKTIME;
            };
            ZjhMgr.prototype.getCardValue = function (card) {
                var cardValue = 0;
                card = card - 1;
                cardValue = card % 13;
                if (cardValue == 0)
                    cardValue = 13;
                return cardValue;
            };
            // 看下是什么牌
            ZjhMgr.prototype.checkCardsType = function (cards) {
                var _this = this;
                var cardtype = 0 /* CARDS_TYPE_SINGLE */;
                cards.sort(function (a, b) {
                    _this.getCardValue(cards[b]) > _this.getCardValue(cards[a]);
                });
                if (this.isSameColor(cards)) {
                    if (this.isStraight(cards))
                        cardtype = 4 /* CARDS_TYPE_FLUSH */;
                    else
                        cardtype = 3 /* CARDS_TYPE_SAMECOLOR */;
                }
                else {
                    if (this.isLeopard(cards))
                        cardtype = 5 /* CARDS_TYPE_LEOPARD */;
                    else if (this.isStraight(cards))
                        cardtype = 2 /* CARDS_TYPE_STRAIGHT */;
                    else if (this.isDouble(cards))
                        cardtype = 1 /* CARDS_TYPE_DOUBLE */;
                    else if (this.isSpecialCards(cards))
                        cardtype = 6 /* CARDS_TYPE_SPECIAL */;
                }
                return cardtype;
            };
            // 是否对子
            ZjhMgr.prototype.isDouble = function (cards) {
                var length = cards.length;
                for (var i = 0; i < length; i++) {
                    if (this.getCardValue(cards[0]) == this.getCardValue(cards[2])) {
                        return false;
                    }
                    if (this.getCardValue(cards[0]) != this.getCardValue(cards[1]) && this.getCardValue(cards[1]) != this.getCardValue(cards[2])) {
                        return false;
                    }
                }
                return true;
            };
            // 是否顺子
            ZjhMgr.prototype.isStraight = function (cards) {
                if (this.getCardValue(cards[1]) - this.getCardValue(cards[0]) == 1 && this.getCardValue(cards[2]) - this.getCardValue(cards[1]) == 1) {
                    return true;
                }
                else {
                    if (this.getCardValue(cards[2]) == 13 && this.getCardValue(cards[1]) == 2 && this.getCardValue(cards[0]) == 1) {
                        return true;
                    }
                }
                return false;
            };
            // 是否豹子
            ZjhMgr.prototype.isLeopard = function (cards) {
                var length = cards.length;
                for (var i = 0; i < length; i++) {
                    if (this.getCardValue(cards[0]) != this.getCardValue(cards[length - 1]))
                        return false;
                }
                return true;
            };
            // 是否同花
            ZjhMgr.prototype.isSameColor = function (cards) {
                var length = cards.length;
                var color1 = Math.floor((cards[0] - 1) / 13);
                for (var i = 1; i < length; i++) {
                    var color2 = Math.floor((cards[i] - 1) / 13);
                    if (color1 != color2)
                        return false;
                }
                return true;
            };
            //是否是235
            ZjhMgr.prototype.isSpecialCards = function (cards) {
                if (this.getCardValue(cards[2]) != 4 || this.getCardValue(cards[1]) != 2 || this.getCardValue(cards[0]) != 1)
                    return false;
                return true;
            };
            ZjhMgr.prototype.sort = function () {
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
                                if (unit == mainUnit) {
                                    var val = this._game.sceneObjectMgr.mainPlayer.playerInfo.cards;
                                    card.Init(val[i]);
                                }
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
            ZjhMgr.prototype.fapai = function () {
                var _this = this;
                var count = 0;
                for (var index = 0; index < 3; index++) {
                    var _loop_1 = function (i) {
                        var card = this_1._cards[index + i * 3];
                        //播音效
                        Laya.timer.once(100 * count, this_1, function () {
                            _this._game.playSound(PathGameTongyong.music_tongyong + "fapai.mp3", false);
                            card.fapai();
                            _this._cardIndex++;
                            if (_this._cardIndex == _this._cards.length)
                                _this.event(ZjhMgr.EVENT_CHECK);
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
            ZjhMgr.prototype.refapai = function () {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    card.refapai();
                }
            };
            //翻牌
            ZjhMgr.prototype.fanpai = function () {
                for (var index = 0; index < this._cards.length; index++) {
                    var element = this._cards[index];
                    element.fanpai();
                }
            };
            //明牌
            ZjhMgr.prototype.showCard = function (v, pos) {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    card.sortScore = 3 - i;
                    if (card._ownerIdx == pos) {
                        var index = i % 3;
                        card.Init(v[index]);
                        card.fanpaiall();
                    }
                }
            };
            //牌置灰
            ZjhMgr.prototype.setDisabled = function (show, unit) {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    if (card.owner == unit) {
                        card.disable = show;
                    }
                }
            };
            // 清理筹码
            ZjhMgr.prototype.clearCardObject = function () {
                var _this = this;
                this._game.sceneObjectMgr.ForEachObject(function (obj) {
                    if (obj instanceof gamezjh.data.ZjhChip) {
                        _this._game.sceneObjectMgr.ReleaseObject(obj);
                    }
                });
            };
            ZjhMgr.MIN_CHECKTIME = 1000; //最小检测时间间隔(毫秒)
            ZjhMgr.EVENT_CHECK = "ZjhMgr.ZjhMgr.EVENT_CHECK";
            ZjhMgr.MAPINFO_OFFLINE = "ZjhMgr.MAPINFO_OFFLINE"; //假精灵
            ZjhMgr.XIQIAN_END = "ZjhMgr.XIQIAN_END"; //喜钱播放结束
            return ZjhMgr;
        }(gamecomponent.managers.PlayingCardMgrBase));
        manager.ZjhMgr = ZjhMgr;
    })(manager = gamezjh.manager || (gamezjh.manager = {}));
})(gamezjh || (gamezjh = {}));
//# sourceMappingURL=ZjhMgr.js.map