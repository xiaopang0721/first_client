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
var gamehonghei;
(function (gamehonghei) {
    var manager;
    (function (manager) {
        var HongheiMgr = /** @class */ (function (_super) {
            __extends(HongheiMgr, _super);
            function HongheiMgr(game) {
                var _this = _super.call(this, game) || this;
                _this._isCancel = false;
                _this._isReConnect = true;
                _this._isOpenCards = false;
                _this._cardsIndex = []; //牌的归属位置
                return _this;
            }
            Object.defineProperty(HongheiMgr.prototype, "unitOffline", {
                get: function () {
                    return this._unitOffline;
                },
                set: function (v) {
                    this._unitOffline = v;
                    this.event(HongheiMgr.MAPINFO_OFFLINE);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(HongheiMgr.prototype, "isCancel", {
                get: function () {
                    return this._isCancel;
                },
                set: function (v) {
                    this._isCancel = v;
                    this.event(HongheiMgr.MAPINFO_OFFLINE);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(HongheiMgr.prototype, "isReconnect", {
                get: function () {
                    return this._isReConnect;
                },
                set: function (v) {
                    this._isReConnect = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(HongheiMgr.prototype, "cardIndex", {
                set: function (v) {
                    this._cardsIndex = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(HongheiMgr.prototype, "allCards", {
                get: function () {
                    return this._cards;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(HongheiMgr.prototype, "isOpenCards", {
                get: function () {
                    return this._isOpenCards;
                },
                set: function (v) {
                    this._isOpenCards = v;
                },
                enumerable: true,
                configurable: true
            });
            //对牌进行排序 重写不需要排序
            HongheiMgr.prototype.SortCards = function (cards) {
            };
            //管理器自己的排序
            HongheiMgr.prototype.sortCards = function (cards) {
                if (!cards)
                    return;
                cards.sort(function (a, b) {
                    return a.Compare(b);
                });
            };
            HongheiMgr.prototype.initCard = function (all_val) {
                var card_arr = [];
                for (var i = 0; i < all_val.length; i++) {
                    var card = void 0;
                    card = new HongheiData();
                    card.Init(all_val[i]);
                    card_arr.push(card);
                }
                return card_arr;
            };
            HongheiMgr.prototype.setValue = function (_cards, i, fanpai) {
                if (!this._cards.length)
                    return;
                if (!_cards)
                    return;
                var card = this._cards[i];
                if (card) {
                    card.Init(_cards.GetVal());
                    card.index = i;
                    card.sortScore = i;
                    if (fanpai) {
                        card.fanpai();
                    }
                }
            };
            HongheiMgr.prototype.setValue1 = function (_cards, i, fanpai) {
                if (!this._cards.length)
                    return;
                if (!_cards)
                    return;
                var card = this._cards[i];
                card.Init(_cards.GetVal());
                card.index = i;
                card.sortScore = i;
                if (fanpai) {
                    card.fanpai1();
                }
            };
            HongheiMgr.prototype.sort = function () {
                var cards = this._cards; //牌堆
                for (var index = 0; index < HongheiMgr.CARDS_NUM; index++) { //循环两手牌
                    for (var i = 0; i < HongheiMgr.MAX_CARD_COUNT; i++) { //循环三张牌
                        var card = cards[index * HongheiMgr.MAX_CARD_COUNT + i];
                        if (card) {
                            card.myOwner(index);
                            card.index = i;
                            card.sortScore = -i;
                            card.scaleX = -1;
                        }
                    }
                }
            };
            //发牌
            HongheiMgr.prototype.fapai = function () {
                var _this = this;
                var count = 0;
                var counter = 0;
                var _loop_1 = function (j) {
                    var _loop_2 = function (i) {
                        Laya.timer.once(150 * count, this_1, function () {
                            _this._game.playSound(PathGameTongyong.music_tongyong + "fapai.mp3", false);
                            var card = _this._cards[i * HongheiMgr.MAX_CARD_COUNT + j];
                            if (!card)
                                return;
                            card.fapai();
                            counter++;
                            if (counter >= _this._cards.length) {
                                _this.event(HongheiMgr.DEAL_OVER);
                            }
                        });
                        count++;
                    };
                    for (var i = 0; i < this_1._cards.length / HongheiMgr.MAX_CARD_COUNT; i++) {
                        _loop_2(i);
                    }
                };
                var this_1 = this;
                for (var j = 0; j < HongheiMgr.MAX_CARD_COUNT; j++) {
                    _loop_1(j);
                }
            };
            //重连发牌
            HongheiMgr.prototype.refapai = function () {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    if (!card)
                        return;
                    card.refapai();
                }
            };
            //翻牌
            HongheiMgr.prototype.fanpai = function () {
                var _this = this;
                var count = 1;
                var _loop_3 = function (j) {
                    var _loop_4 = function (i) {
                        Laya.timer.once(500 * count, this_2, function () {
                            var card = _this._cards[i * HongheiMgr.CARDS_NUM + j];
                            if (!card)
                                return;
                            card.fanpai();
                        });
                        count++;
                    };
                    for (var i = 0; i < this_2._cards.length / HongheiMgr.CARDS_NUM; i++) {
                        _loop_4(i);
                    }
                };
                var this_2 = this;
                for (var j = 0; j < HongheiMgr.CARDS_NUM; j++) {
                    _loop_3(j);
                }
            };
            //翻牌（断线重连）
            HongheiMgr.prototype.refanpai = function () {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    if (!card)
                        return;
                    card.fanpai();
                }
            };
            //隐藏第三张
            HongheiMgr.prototype.hidecard = function (index) {
                var card = this._cards[3 * (index - 1) + 2];
                if (!card)
                    return;
                card.hidecard();
            };
            //显示第三张
            HongheiMgr.prototype.showcard = function (index) {
                var card = this._cards[3 * (index - 1) + 2];
                if (!card)
                    return;
                card.showcard();
            };
            HongheiMgr.CARDS_NUM = 2; //场上共2副牌
            HongheiMgr.MAX_CARD_COUNT = 3; //最大手牌数
            HongheiMgr.MAPINFO_OFFLINE = "HongheiMgr.MAPINFO_OFFLINE"; //假精灵
            HongheiMgr.DEAL_OVER = "HongheiMgr.DEAL_OVER"; //发牌结束
            HongheiMgr.OPEN_OVER = "HongheiMgr.OPEN_OVER"; //开牌结束
            HongheiMgr.OPEN_OVER1 = "HongheiMgr.OPEN_OVER1"; //开牌结束1
            return HongheiMgr;
        }(gamecomponent.managers.PlayingCardMgrBase));
        manager.HongheiMgr = HongheiMgr;
    })(manager = gamehonghei.manager || (gamehonghei.manager = {}));
})(gamehonghei || (gamehonghei = {}));
//# sourceMappingURL=HongheiMgr.js.map