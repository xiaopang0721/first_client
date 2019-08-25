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
var gamebairendezhou;
(function (gamebairendezhou) {
    var manager;
    (function (manager) {
        var DEAR_CARD_ROUND = 3; //发牌轮数 1：蓝红各一张 2：蓝红各一张 3：公共五张
        var PUBLIC_CARD_COUNT = 5; //公共牌5张
        var BairendezhouMgr = /** @class */ (function (_super) {
            __extends(BairendezhouMgr, _super);
            function BairendezhouMgr(game) {
                var _this = _super.call(this, game) || this;
                _this._isCancel = false;
                _this._isReConnect = true;
                _this._isReDrawCards = false;
                _this._isMoveCards = false;
                _this._cardsIndex = []; //牌的归属位置
                return _this;
            }
            Object.defineProperty(BairendezhouMgr.prototype, "unitOffline", {
                get: function () {
                    return this._unitOffline;
                },
                set: function (v) {
                    this._unitOffline = v;
                    this.event(BairendezhouMgr.MAPINFO_OFFLINE);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BairendezhouMgr.prototype, "isCancel", {
                get: function () {
                    return this._isCancel;
                },
                set: function (v) {
                    this._isCancel = v;
                    this.event(BairendezhouMgr.MAPINFO_OFFLINE);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BairendezhouMgr.prototype, "isReconnect", {
                get: function () {
                    return this._isReConnect;
                },
                set: function (v) {
                    this._isReConnect = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BairendezhouMgr.prototype, "cardIndex", {
                set: function (v) {
                    this._cardsIndex = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BairendezhouMgr.prototype, "isReDrawCards", {
                get: function () {
                    return this._isReDrawCards;
                },
                set: function (v) {
                    this._isReDrawCards = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BairendezhouMgr.prototype, "allCards", {
                get: function () {
                    return this._cards;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BairendezhouMgr.prototype, "isMoveCards", {
                get: function () {
                    return this._isMoveCards;
                },
                set: function (v) {
                    this._isMoveCards = v;
                },
                enumerable: true,
                configurable: true
            });
            //对牌进行排序 重写不需要排序
            BairendezhouMgr.prototype.SortCards = function (cards) {
            };
            //管理器自己的排序
            BairendezhouMgr.prototype.sortCards = function (cards) {
                if (!cards)
                    return;
                cards.sort(function (a, b) {
                    return a.Compare(b);
                });
            };
            BairendezhouMgr.prototype.getCardValue = function (card) {
                var cardValue = 0;
                card = card - 1;
                cardValue = card % 13;
                if (cardValue == 0)
                    cardValue = 13;
                return cardValue;
            };
            BairendezhouMgr.prototype.initCard = function (all_val) {
                var card_arr = [];
                for (var i = 0; i < all_val.length; i++) {
                    var card = void 0;
                    card = new BairendezhouData();
                    card.Init(all_val[i]);
                    card_arr.push(card);
                    //换牌,重新赋值
                    if (i == 1 || i == 3) {
                        this._cards[i].Init(all_val[i]);
                    }
                }
                return card_arr;
            };
            BairendezhouMgr.prototype.setValue = function (_cards, i) {
                if (!this._cards.length)
                    return;
                if (!_cards)
                    return;
                var card = this._cards[i];
                if (card) {
                    card.Init(_cards.GetVal());
                    card.index = i;
                    card.sortScore = i;
                    card.fanpai();
                }
            };
            BairendezhouMgr.prototype.setValue1 = function (_cards, i) {
                if (!this._cards.length)
                    return;
                if (!_cards)
                    return;
                var card = this._cards[i];
                card.Init(_cards.GetVal());
                card.index = i;
                card.sortScore = i;
                card.fanpai1();
            };
            BairendezhouMgr.prototype.sort = function () {
                //发3牌轮 1：蓝红各一张 2：蓝红各一张 3：公共五张
                var allcards = this._cards;
                for (var i = 0; i < DEAR_CARD_ROUND; i++) {
                    var index = i == 2 ? PUBLIC_CARD_COUNT : BairendezhouMgr.EACH_CARD_NUM;
                    for (var j = 0; j < index; j++) {
                        var card = allcards[i * BairendezhouMgr.EACH_CARD_NUM + j];
                        //公共牌
                        if (index == PUBLIC_CARD_COUNT) {
                            card = allcards[i * BairendezhouMgr.EACH_CARD_NUM + j];
                        }
                        if (card) {
                            card.myOwner(i);
                            card.index = j;
                            card.sortScore = -j;
                            if (j == 0 && (i == 0 || i == 1)) {
                                card.scaleX = 1;
                                card.isShow = true;
                            }
                            else {
                                card.scaleX = -1;
                            }
                        }
                    }
                }
            };
            //发牌
            BairendezhouMgr.prototype.fapai = function () {
                var _this = this;
                var allcards = this._cards;
                var count = 0;
                var counter = 0;
                var _loop_1 = function (i) {
                    var index = i == 2 ? PUBLIC_CARD_COUNT : BairendezhouMgr.EACH_CARD_NUM;
                    var _loop_2 = function (j) {
                        Laya.timer.once(200 * count, this_1, function () {
                            _this._game.playSound(PathGameTongyong.music_tongyong + "fapai.mp3", false);
                            var card = allcards[j * BairendezhouMgr.EACH_CARD_NUM + i];
                            //公共牌
                            if (index == PUBLIC_CARD_COUNT) {
                                card = allcards[i * BairendezhouMgr.EACH_CARD_NUM + j];
                            }
                            if (!card)
                                return;
                            card.fapai();
                            counter++;
                            if (counter >= allcards.length) {
                                _this.event(BairendezhouMgr.DEAL_OVER);
                            }
                        });
                        count++;
                    };
                    for (var j = 0; j < index; j++) {
                        _loop_2(j);
                    }
                };
                var this_1 = this;
                for (var i = 0; i < DEAR_CARD_ROUND; i++) {
                    _loop_1(i);
                }
            };
            //重连发牌
            BairendezhouMgr.prototype.refapai = function () {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    if (!card)
                        return;
                    card.refapai();
                }
            };
            //移动位置
            BairendezhouMgr.prototype.movepai = function () {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    if (!card)
                        return;
                    card.movepai();
                }
            };
            //移动位置
            BairendezhouMgr.prototype.backpai = function () {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    if (!card)
                        return;
                    card.backpai();
                }
            };
            //置灰牌
            BairendezhouMgr.prototype.zhihui = function (zhihui) {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    if (!card)
                        return;
                    card.disable = zhihui;
                }
            };
            //置灰牌
            BairendezhouMgr.prototype.zhihuiByIndex = function (index) {
                var card = this._cards[index];
                if (!card)
                    return;
                card.disable = false;
            };
            //牌发光
            BairendezhouMgr.prototype.light = function (light) {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    if (!card)
                        return;
                    card.light = light;
                }
            };
            //牌发光
            BairendezhouMgr.prototype.lightByIndex = function (index) {
                var card = this._cards[index];
                if (!card)
                    return;
                card.light = true;
            };
            //隐藏牌
            BairendezhouMgr.prototype.hidepai = function (index) {
                var card = this._cards[index];
                if (!card)
                    return;
                card.hidepai();
            };
            //显示牌
            BairendezhouMgr.prototype.showpai = function (index) {
                var card = this._cards[index];
                if (!card)
                    return;
                card.showpai();
            };
            BairendezhouMgr.EACH_CARD_NUM = 2; //左右各一手牌
            BairendezhouMgr.MAPINFO_OFFLINE = "BairendezhouMgr.MAPINFO_OFFLINE"; //假精灵
            BairendezhouMgr.DEAL_OVER = "BairendezhouMgr.DEAL_OVER"; //发牌结束
            BairendezhouMgr.OPEN_OVER = "BairendezhouMgr.OPEN_OVER"; //开牌结束
            BairendezhouMgr.MOVE_CARD = "BairendezhouMgr.MOVE_CARD"; //移牌结束
            BairendezhouMgr.BACK_CARD = "BairendezhouMgr.BACK_CARD"; //牌归位结束
            BairendezhouMgr.OPEN_ANI = "BairendezhouMgr.OPEN_ANI"; //开牌动画
            return BairendezhouMgr;
        }(gamecomponent.managers.PlayingCardMgrBase));
        manager.BairendezhouMgr = BairendezhouMgr;
    })(manager = gamebairendezhou.manager || (gamebairendezhou.manager = {}));
})(gamebairendezhou || (gamebairendezhou = {}));
//# sourceMappingURL=BairendezhouMgr.js.map