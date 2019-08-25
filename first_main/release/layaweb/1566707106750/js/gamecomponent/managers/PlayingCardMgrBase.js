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
    var managers;
    (function (managers) {
        /**
         * 牌管理器基类
         */
        var PlayingCardMgrBase = /** @class */ (function (_super) {
            __extends(PlayingCardMgrBase, _super);
            function PlayingCardMgrBase(v) {
                var _this = _super.call(this) || this;
                _this._cards = [];
                _this._game = v;
                return _this;
            }
            //重新初始化牌
            PlayingCardMgrBase.prototype.Init = function (all_val, create_fun) {
                this._cards.length = 0;
                for (var i = 0; i < all_val.length; i++) {
                    var card = void 0;
                    card = create_fun.run();
                    card.Init(all_val[i]);
                    card.index = i;
                    this._cards.push(card);
                }
                create_fun.recover();
                create_fun = null;
                this.SortCards(this._cards);
            };
            //对牌进行排序
            PlayingCardMgrBase.prototype.SortCards = function (cards) {
                if (!cards)
                    return;
                cards.sort(function (a, b) {
                    return a.Compare(b);
                });
            };
            //校验相等的牌
            PlayingCardMgrBase.prototype.CheckEqualCards = function (cards, start, end) {
                var len = cards instanceof Array ? cards.length : 0;
                if (len < 2)
                    return false;
                if (!start) {
                    console.assert(!end);
                    start = 1;
                }
                if (!end) {
                    end = len;
                }
                console.assert(end > start && start > -1 && len >= end);
                var val = cards[start - 1].GetCardVal();
                for (var i = start; i < end; i++) {
                    if (cards[i].GetCardVal() != val) {
                        return false;
                    }
                }
                return true;
            };
            //洗牌，max_val牌的张数，后面两个是洗牌的力度，越小洗的越乱
            PlayingCardMgrBase.prototype.Shuffle = function (max_val, rand_min_val, rand_max_val) {
                max_val = max_val || 54;
                rand_min_val = rand_min_val || 1;
                rand_max_val = rand_max_val || 1;
                console.assert(rand_min_val <= rand_max_val);
                //先把整副牌弄出来
                var card_temp = [];
                for (var i = 0; i < max_val; i++) {
                    card_temp.push(new PlayingCard(i));
                }
                var result = [];
                do {
                    var rd = MathU.randomRange(1, card_temp.length);
                    //根据随机力度，适当的让牌好看一些吧
                    var rand_val = MathU.randomRange(rand_min_val, rand_max_val);
                    for (var i = 0; i < rand_val; i++) {
                        if (card_temp.length == 0) {
                            break;
                        }
                        if (card_temp.length < rd) {
                            rd = 0;
                        }
                        result.push(card_temp.splice(rd, 1));
                    }
                } while (card_temp.length != 0);
                return result;
            };
            //校验顺子
            PlayingCardMgrBase.prototype.CheckShunZi = function (cards) {
                var len = cards instanceof Array ? cards.length : 0;
                if (len < 3)
                    return false;
                var val = cards[0].GetCardVal();
                for (var i = 1; i < len; i++) {
                    var val2 = cards[i].GetCardVal();
                    if (val2 - val != 1) {
                        return false;
                    }
                    val = val2;
                }
                return true;
            };
            PlayingCardMgrBase.prototype.clear = function () {
                Laya.timer.clearAll(this);
                Laya.Tween.clearAll(this);
                this._game.sceneObjectMgr.clearOfflineObject();
                this._cards.length = 0;
            };
            PlayingCardMgrBase.prototype.fanpai = function () {
                throw new Error("not init");
            };
            PlayingCardMgrBase.prototype.fapai = function () {
                throw new Error("not init");
            };
            PlayingCardMgrBase.prototype.sort = function () {
                throw new Error("not init");
            };
            return PlayingCardMgrBase;
        }(Laya.EventDispatcher));
        managers.PlayingCardMgrBase = PlayingCardMgrBase;
    })(managers = gamecomponent.managers || (gamecomponent.managers = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=PlayingCardMgrBase.js.map