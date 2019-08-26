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
var gamelonghu;
(function (gamelonghu) {
    var manager;
    (function (manager) {
        var LonghuMgr = /** @class */ (function (_super) {
            __extends(LonghuMgr, _super);
            function LonghuMgr(game) {
                var _this = _super.call(this, game) || this;
                _this._isCancel = false;
                _this._isReConnect = true;
                _this._cardsIndex = []; //牌的归属位置
                return _this;
            }
            Object.defineProperty(LonghuMgr.prototype, "offlineUnit", {
                get: function () {
                    return this._offlineUnit;
                },
                set: function (v) {
                    this._offlineUnit = v;
                    this.event(LonghuMgr.MAPINFO_OFFLINE);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LonghuMgr.prototype, "isCancel", {
                get: function () {
                    return this._isCancel;
                },
                set: function (v) {
                    this._isCancel = v;
                    this.event(LonghuMgr.MAPINFO_OFFLINE);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LonghuMgr.prototype, "isReConnect", {
                get: function () {
                    return this._isReConnect;
                },
                set: function (v) {
                    this._isReConnect = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LonghuMgr.prototype, "allCards", {
                get: function () {
                    return this._cards;
                },
                enumerable: true,
                configurable: true
            });
            //对牌进行排序 重写不需要排序
            LonghuMgr.prototype.SortCards = function (cards) {
            };
            LonghuMgr.prototype.sort = function () {
                var cards = this._cards; //牌堆
                var count = 0;
                for (var i = 0; i < this._cards.length; i++) {
                    var card = cards[i];
                    if (card) {
                        card.myOwner(i);
                        card.index = i;
                        card.sortScore = i;
                    }
                }
            };
            LonghuMgr.prototype.initCard = function (all_val) {
                var card_arr = [];
                for (var i = 0; i < all_val.length; i++) {
                    var card = void 0;
                    card = new LonghuData();
                    card.Init(all_val[i]);
                    card_arr.push(card);
                }
                return card_arr;
            };
            LonghuMgr.prototype.setValue = function (_cards, i) {
                if (!this._cards.length)
                    return;
                if (!_cards)
                    return;
                var card = this._cards[i + 1];
                if (card) {
                    card.Init(_cards.GetVal());
                    card.index = i;
                    card.sortScore = i;
                    card.visible = true;
                    card.kaipai();
                }
            };
            //播放搓牌动画隐藏场景牌
            LonghuMgr.prototype.yincang = function (index) {
                var card;
                card = this._cards[index];
                if (!card)
                    return;
                card.visible = false;
            };
            //发牌
            LonghuMgr.prototype.fapai = function () {
                var _this = this;
                var _loop_1 = function (i) {
                    Laya.timer.once(200 * i, this_1, function () {
                        _this._game.playSound(PathGameTongyong.music_tongyong + "fapai.mp3", false);
                        var card = _this._cards[i];
                        if (!card)
                            return;
                        card.fapai();
                    });
                };
                var this_1 = this;
                // let counter = 0;
                for (var i = 0; i < this._cards.length; i++) {
                    _loop_1(i);
                }
            };
            //重新发牌（正常）
            LonghuMgr.prototype.refapai = function () {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    if (!card)
                        return;
                    card.refapai();
                }
            };
            //翻牌
            LonghuMgr.prototype.fanpai = function () {
                var _this = this;
                var count = 1;
                var _loop_2 = function (i) {
                    Laya.timer.once(500 * i, this_2, function () {
                        var card = _this._cards[i];
                        if (!card)
                            return;
                        card.fanpai();
                    });
                    count++;
                };
                var this_2 = this;
                for (var i = 0; i < this._cards.length; i++) {
                    _loop_2(i);
                }
            };
            //翻牌（断线重连）
            LonghuMgr.prototype.refanpai = function () {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    if (!card)
                        return;
                    card.fanpai();
                }
            };
            LonghuMgr.MAPINFO_OFFLINE = "LonghuMgr.MAPINFO_OFFLINE"; //假精灵
            LonghuMgr.DEAL_OVER = "LonghuMgr.DEAL_OVER"; //发牌结束
            LonghuMgr.SHOW_OVER = "LonghuMgr.SHOW_OVER"; //开牌结束
            return LonghuMgr;
        }(gamecomponent.managers.PlayingCardMgrBase));
        manager.LonghuMgr = LonghuMgr;
    })(manager = gamelonghu.manager || (gamelonghu.manager = {}));
})(gamelonghu || (gamelonghu = {}));
//# sourceMappingURL=LonghuMgr.js.map