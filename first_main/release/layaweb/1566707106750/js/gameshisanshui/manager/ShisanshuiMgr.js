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
* 十三水-牌
*/
var gameshisanshui;
(function (gameshisanshui) {
    var manager;
    (function (manager) {
        var MIN_CHECKTIME = 1000; //最小检测时间间隔(毫秒)
        var ShisanshuiMgr = /** @class */ (function (_super) {
            __extends(ShisanshuiMgr, _super);
            function ShisanshuiMgr(game) {
                var _this = _super.call(this, game) || this;
                _this.cardsTemp = []; //牌数据
                _this._partPos = []; //分牌过的位置
                _this._isReDealCard = false;
                _this._totalUnitCount = 4; // 玩家数量
                return _this;
            }
            Object.defineProperty(ShisanshuiMgr.prototype, "unitOffline", {
                get: function () {
                    return this._unitOffline;
                },
                set: function (v) {
                    this._unitOffline = v;
                    this.event(ShisanshuiMgr.MAPINFO_OFFLINE);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ShisanshuiMgr.prototype, "isReDealCard", {
                get: function () {
                    return this._isReDealCard;
                },
                set: function (v) {
                    this._isReDealCard = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ShisanshuiMgr.prototype, "totalUnitCount", {
                get: function () {
                    return this._totalUnitCount;
                },
                set: function (v) {
                    this._totalUnitCount = v;
                },
                enumerable: true,
                configurable: true
            });
            //心跳更新
            ShisanshuiMgr.prototype.update = function (diff) {
                if (this._offsetTime > 0) {
                    this._offsetTime -= diff;
                    return;
                }
                this._offsetTime = MIN_CHECKTIME;
            };
            ShisanshuiMgr.prototype.getCardValue = function (card) {
                var cardValue = 0;
                card = card - 1;
                cardValue = card % 13;
                if (cardValue == 0)
                    cardValue = 13;
                return cardValue;
            };
            //找出一堆牌里N张一样的牌
            ShisanshuiMgr.prototype.findSomeCards = function (cards, count) {
                var temp = [];
                if (cards.length < count)
                    return temp;
                for (var i = 0; i < cards.length - 1; i++) {
                    temp = [];
                    var val = this.getCardValue(cards[i]);
                    for (var k = 0; k < cards.length; k++) {
                        if (this.getCardValue(cards[k]) == val) {
                            temp.push(cards[k]);
                        }
                    }
                    if (temp.length >= count)
                        break;
                }
                if (temp.length >= count) {
                    for (var i = 0; i < temp.length; i++) {
                        for (var k = 0; k < cards.length; k++) {
                            if (temp[i] == cards[k]) {
                                cards.splice(k, 1);
                                break;
                            }
                        }
                    }
                }
                else {
                    temp = [];
                }
                return temp;
            };
            //从手牌里找所有2张以上
            ShisanshuiMgr.prototype.findDuiZi = function (cards) {
                var temp = [];
                if (cards.length < 2)
                    return temp;
                var flag = true;
                while (flag) {
                    var temp1 = this.findSomeCards(cards, 2);
                    if (temp1.length >= 2) {
                        temp.push(temp1);
                    }
                    else {
                        flag = false;
                    }
                }
                return temp;
            };
            //从手牌里找出所有3张以上
            ShisanshuiMgr.prototype.findSanZhang = function (cards) {
                var temp = [];
                if (cards.length < 3)
                    return temp;
                var flag = true;
                while (flag) {
                    var temp1 = this.findSomeCards(cards, 3);
                    if (temp1.length >= 3) {
                        temp.push(temp1);
                    }
                    else {
                        flag = false;
                    }
                }
                return temp;
            };
            //从手牌里找出所有4张
            ShisanshuiMgr.prototype.findTieZhi = function (cards) {
                var temp = [];
                if (cards.length < 4)
                    return temp;
                var flag = true;
                while (flag) {
                    var temp1 = this.findSomeCards(cards, 4);
                    if (temp1.length == 4) {
                        temp.push(temp1);
                    }
                    else {
                        flag = false;
                    }
                }
                return temp;
            };
            //复制数组，1复制到2
            ShisanshuiMgr.prototype.copyTalbe = function (temp1, temp2) {
                for (var i = 0; i < temp1.length; i++) {
                    temp2[i] = temp1[i];
                }
            };
            // 是否对子
            ShisanshuiMgr.prototype.isDouble = function (cards) {
                if (cards.length != 3 && cards.length != 5)
                    return false;
                var copyCards = [];
                this.copyTalbe(cards, copyCards);
                var temp = this.findDuiZi(copyCards);
                //只能有一个对
                if (temp.length != 1)
                    return false;
                //还必须是对子
                if (temp[0].length != 2)
                    return false;
                return true;
            };
            //是否两对
            ShisanshuiMgr.prototype.isTwoDouble = function (cards) {
                if (cards.length != 5)
                    return false;
                var copyCards = [];
                this.copyTalbe(cards, copyCards);
                var temp = this.findDuiZi(copyCards);
                if (temp.length != 2)
                    return false;
                //两对肯定会有一张单张
                if (copyCards.length != 1)
                    return false;
                return true;
            };
            //是否三条
            ShisanshuiMgr.prototype.isSanTiao = function (cards) {
                if (cards.length != 3 && cards.length != 5)
                    return false;
                var copyCards = [];
                this.copyTalbe(cards, copyCards);
                var temp = this.findSanZhang(copyCards);
                //只有一个3张
                if (temp.length != 1)
                    return false;
                if (temp[0].length != 3)
                    return false;
                //如果有剩下的，不能是对子
                if (copyCards.length > 0) {
                    if (this.getCardValue(copyCards[0]) == this.getCardValue(copyCards[1]))
                        return false;
                }
                return true;
            };
            //是否同花
            ShisanshuiMgr.prototype.isTongHua = function (cards) {
                var length = cards.length;
                if (length != 5)
                    return false;
                var color1 = Math.floor((cards[0] - 1) / 13);
                for (var i = 1; i < length; i++) {
                    var color2 = Math.floor((cards[i] - 1) / 13);
                    if (color1 != color2)
                        return false;
                }
                return true;
            };
            //是否顺子
            ShisanshuiMgr.prototype.isShunZi = function (cards) {
                if (cards.length != 5)
                    return false;
                // //去掉同花
                // if (this.isTongHua(cards)) return false;
                var val = this.getCardValue(cards[0]);
                for (var i = 1; i < cards.length; i++) {
                    if (this.getCardValue(cards[i]) + 1 == val) {
                        val = this.getCardValue(cards[i]);
                    }
                    else {
                        //有个特殊的顺子，12345
                        if (this.getCardValue(cards[0]) == 13 && this.getCardValue(cards[1]) == 4 && this.getCardValue(cards[2]) == 3
                            && this.getCardValue(cards[3]) == 2 && this.getCardValue(cards[4]) == 1) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
                return true;
            };
            //是否葫芦
            ShisanshuiMgr.prototype.isHuLu = function (cards) {
                if (cards.length != 5)
                    return false;
                var copyCards = [];
                this.copyTalbe(cards, copyCards);
                var temp = this.findDuiZi(copyCards);
                //2个2张以上的
                if (temp.length != 2)
                    return false;
                //不能剩下单张
                if (copyCards.length > 0)
                    return false;
                return true;
            };
            //是否铁支
            ShisanshuiMgr.prototype.isTieZhi = function (cards) {
                if (cards.length != 5)
                    return false;
                var copyCards = [];
                this.copyTalbe(cards, copyCards);
                var temp = this.findTieZhi(copyCards);
                if (temp.length != 1)
                    return false;
                return true;
            };
            //是否同花顺
            ShisanshuiMgr.prototype.isTongHuaShun = function (cards) {
                if (cards.length != 5)
                    return false;
                if (this.isTongHua(cards) && this.isShunZi(cards))
                    return true;
                return false;
            };
            //对牌进行排序
            ShisanshuiMgr.prototype.sortCards = function (cards) {
                var _this = this;
                if (!cards)
                    return;
                cards.sort(function (a, b) {
                    return _this.getCardValue(b) - _this.getCardValue(a);
                });
            };
            //检查牌型
            ShisanshuiMgr.prototype.checkCardsType = function (cards) {
                this.sortCards(cards);
                var type;
                if (this.isDouble(cards)) {
                    type = 1 /* CARDS_TYPE_DZ */;
                }
                else if (this.isTwoDouble(cards)) {
                    type = 2 /* CARDS_TYPE_LD */;
                }
                else if (this.isSanTiao(cards)) {
                    type = 3 /* CARDS_TYPE_ST */;
                }
                else if (this.isTongHuaShun(cards)) {
                    type = 8 /* CARDS_TYPE_THS */;
                }
                else if (this.isTongHua(cards)) {
                    type = 5 /* CARDS_TYPE_TH */;
                }
                else if (this.isShunZi(cards)) {
                    type = 4 /* CARDS_TYPE_SZ */;
                }
                else if (this.isHuLu(cards)) {
                    type = 6 /* CARDS_TYPE_HL */;
                }
                else if (this.isTieZhi(cards)) {
                    type = 7 /* CARDS_TYPE_TZ */;
                }
                else {
                    type = 0 /* CARDS_TYPE_WL */;
                }
                return type;
            };
            ShisanshuiMgr.prototype.createObj = function (u) {
                var card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, ShisanshuiData);
                card.pos = new Vector2(640, 360);
                return card;
            };
            ShisanshuiMgr.prototype.sort = function () {
                var cards = this._cards;
                var max = 4;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                var idx = mainUnit.GetIndex();
                var count = 0;
                for (var index = 0; index < max; index++) {
                    var posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    if (unit) {
                        for (var i = 0; i < 13; i++) {
                            var card = cards[count * 13 + i];
                            if (card) {
                                card.myOwner(idx, posIdx, i);
                                card.index = i;
                                card.sortScore = -i;
                            }
                        }
                        count++;
                    }
                }
            };
            //发牌
            ShisanshuiMgr.prototype.fapai = function () {
                var _this = this;
                var count = 0;
                var cardIndex = 0;
                for (var index = 0; index < 13; index++) {
                    var _loop_1 = function (i) {
                        var card = this_1._cards[index + i * 13];
                        if (card) {
                            //播音效
                            Laya.timer.once(15 * count, this_1, function () {
                                _this._game.playSound(PathGameTongyong.music_tongyong + "fapai.mp3", false);
                                card.fapai();
                                cardIndex++;
                                if (cardIndex == _this._cards.length)
                                    _this.event(ShisanshuiMgr.DEAL_CARDS);
                            });
                            count++;
                        }
                    };
                    var this_1 = this;
                    for (var i = 0; i < this._cards.length / 13; i++) {
                        _loop_1(i);
                    }
                }
            };
            //重连发牌
            ShisanshuiMgr.prototype.refapai = function () {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    card.refapai();
                }
            };
            //出牌
            ShisanshuiMgr.prototype.playingCard = function (pos) {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    if (card._ownerIdx == pos) {
                        card.playingcard();
                    }
                }
            };
            //给牌赋值
            ShisanshuiMgr.prototype.showCards = function (cards, pos) {
                var mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                if (mainIdx == 0)
                    return;
                for (var index = 0; index < cards.length; index++) {
                    for (var i = 0; i < this._cards.length; i++) {
                        var card = this._cards[i];
                        if (card._ownerIdx == pos && card._cardIndex == index) {
                            card.Init(cards[index]);
                        }
                    }
                }
            };
            //翻牌
            ShisanshuiMgr.prototype.compare = function (index, dun) {
                var mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                if (mainIdx == 0)
                    return;
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    if (dun == 1) {
                        if (card.index < 3 && card._ownerIdx == index) {
                            card.fanpai();
                        }
                    }
                    else if (dun == 2 && card._ownerIdx == index) {
                        if (card.index < 8) {
                            card.fanpai();
                        }
                    }
                    else if (dun == 3 && card._ownerIdx == index) {
                        card.fanpai();
                    }
                }
            };
            //加一张牌
            ShisanshuiMgr.prototype.addCard = function (val, create_fun, ownerIdx, cardIdx) {
                var mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                if (mainIdx == 0)
                    return;
                var card;
                card = create_fun.run();
                this.cardsTemp.push(card);
                card.Init(val);
                card._isPinPai = true;
                card.myOwner(mainIdx, ownerIdx, cardIdx);
            };
            ShisanshuiMgr.prototype.playCard = function () {
                for (var i = 0; i < this.cardsTemp.length; i++) {
                    var card = this.cardsTemp[i];
                    card.sortScore = -i - 13;
                    card.index = i;
                    card._isTouch = false;
                    card.toggleEnable = true;
                    card.pinpai();
                }
            };
            //选择牌型
            ShisanshuiMgr.prototype.xuanpai = function (cards, type) {
                for (var i = 0; i < cards.length; i++) {
                    var card = cards[i];
                    card.sortScore = -type * 5 - i - 13;
                    card.index = i;
                    card._cardType = type;
                    card.xuanpai();
                }
            };
            //隐藏自己的牌
            ShisanshuiMgr.prototype.setCardVisible = function (show) {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var mainIdx = mainUnit.GetIndex();
                if (mainIdx == 0)
                    return;
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    if (card._ownerIdx == mainIdx) {
                        card.visible = show;
                    }
                }
            };
            // 清理指定玩家卡牌对象
            ShisanshuiMgr.prototype.clearCardObject = function () {
                var _this = this;
                this._game.sceneObjectMgr.ForEachObject(function (obj) {
                    if (obj instanceof ShisanshuiData) {
                        if (obj._isPinPai) {
                            _this._game.sceneObjectMgr.clearOfflineObject(obj);
                        }
                    }
                });
            };
            //重置数据
            ShisanshuiMgr.prototype.resetData = function () {
                this.cardsTemp = [];
                this._partPos = []; //分牌过的位置
                this._isReDealCard = false;
                this._totalUnitCount = 4; // 玩家数量
            };
            ShisanshuiMgr.MAPINFO_OFFLINE = "ShisanshuiMgr.MAPINFO_OFFLINE"; //假精灵
            ShisanshuiMgr.DEAL_CARDS = "ShisanshuiMgr.DEAL_CARDS"; //发牌结束
            ShisanshuiMgr.MIN_CARD_SEATS_COUNT = 2; // 房卡模式下最小人数
            ShisanshuiMgr.WXSHARE_TITLE = "十三水]房号:{0}"; // 分享标题
            ShisanshuiMgr.WXSHARE_DESC = "开好房喽,就等你们一起来玩十三水啦!晚了位置就没了哟~"; // 分享内容
            return ShisanshuiMgr;
        }(gamecomponent.managers.PlayingCardMgrBase));
        manager.ShisanshuiMgr = ShisanshuiMgr;
    })(manager = gameshisanshui.manager || (gameshisanshui.manager = {}));
})(gameshisanshui || (gameshisanshui = {}));
//# sourceMappingURL=ShisanshuiMgr.js.map