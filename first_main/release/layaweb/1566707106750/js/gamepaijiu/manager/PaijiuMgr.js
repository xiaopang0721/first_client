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
* 牌九-牌
*/
var gamepaijiu;
(function (gamepaijiu) {
    var manager;
    (function (manager) {
        var MIN_CHECKTIME = 1000; //最小检测时间间隔(毫秒)
        var PaijiuMgr = /** @class */ (function (_super) {
            __extends(PaijiuMgr, _super);
            function PaijiuMgr(game) {
                var _this = _super.call(this, game) || this;
                _this.isRelogin = false; //是否断线重连
                _this._isReDealCard = false;
                _this._cardConfig = [12, 24, 23, 14, 25, 34, 26, 35, 36, 45, 15, 16, 46, 56, 22, 33, 55, 13, 44, 11, 66]; //牌值对应的牌
                //定下牌的初始位置
                _this._cardPos = [[480, 285, 70], [480, 330, 70], [675, 285, 70], [675, 330, 70]];
                return _this;
            }
            Object.defineProperty(PaijiuMgr.prototype, "unitOffline", {
                get: function () {
                    return this._unitOffline;
                },
                set: function (v) {
                    this._unitOffline = v;
                    this.event(PaijiuMgr.MAPINFO_OFFLINE);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PaijiuMgr.prototype, "isReDealCard", {
                get: function () {
                    return this._isReDealCard;
                },
                set: function (v) {
                    this._isReDealCard = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PaijiuMgr.prototype, "firstPos", {
                get: function () {
                    return this._firstPos;
                },
                set: function (v) {
                    this._firstPos = v;
                },
                enumerable: true,
                configurable: true
            });
            //心跳更新
            PaijiuMgr.prototype.update = function (diff) {
                if (this._offsetTime > 0) {
                    this._offsetTime -= diff;
                    return;
                }
                this._offsetTime = MIN_CHECKTIME;
            };
            PaijiuMgr.prototype.createObj = function (u) {
                var card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.GUPAI_MARK, PaijiuData);
                return card;
            };
            //对牌进行排序 重写不需要排序
            PaijiuMgr.prototype.SortCards = function (cards) {
            };
            //点数
            PaijiuMgr.prototype.cardCount = function (card) {
                var cardCount = Math.floor(card / 10) + card % 10;
                return cardCount;
            };
            // 地高九
            PaijiuMgr.prototype.isDiGaoJiu = function (cards) {
                if (cards.length != 2)
                    return false;
                if (cards[0] != 16)
                    return false;
                if (cards[1] != 11)
                    return false;
                return true;
            };
            // 天高九
            PaijiuMgr.prototype.isTianGaoJiu = function (cards) {
                if (cards.length != 2)
                    return false;
                if (cards[0] != 25)
                    return false;
                if (cards[1] != 66)
                    return false;
                return true;
            };
            // 地杠
            PaijiuMgr.prototype.isDiGang = function (cards) {
                if (cards.length != 2)
                    return false;
                if (cards[0] != 35)
                    return false;
                if (cards[1] != 11)
                    return false;
                return true;
            };
            // 天杠
            PaijiuMgr.prototype.isTianGang = function (cards) {
                if (cards.length != 2)
                    return false;
                if (cards[0] != 35)
                    return false;
                if (cards[1] != 66)
                    return false;
                return true;
            };
            // 地王
            PaijiuMgr.prototype.isDiWang = function (cards) {
                if (cards.length != 2)
                    return false;
                if (cards[0] != 36)
                    return false;
                if (cards[1] != 11)
                    return false;
                return true;
            };
            // 天王
            PaijiuMgr.prototype.isTianWang = function (cards) {
                if (cards.length != 2)
                    return false;
                if (cards[0] != 36)
                    return false;
                if (cards[1] != 66)
                    return false;
                return true;
            };
            // 杂五
            PaijiuMgr.prototype.isZaWu = function (cards) {
                if (cards.length != 2)
                    return false;
                if (cards[0] != 23)
                    return false;
                if (cards[1] != 14)
                    return false;
                return true;
            };
            // 杂七
            PaijiuMgr.prototype.isZaQi = function (cards) {
                if (cards.length != 2)
                    return false;
                if (cards[0] != 25)
                    return false;
                if (cards[1] != 34)
                    return false;
                return true;
            };
            // 杂八
            PaijiuMgr.prototype.isZaBa = function (cards) {
                if (cards.length != 2)
                    return false;
                if (cards[0] != 26)
                    return false;
                if (cards[1] != 35)
                    return false;
                return true;
            };
            // 杂九
            PaijiuMgr.prototype.isZaJiu = function (cards) {
                if (cards.length != 2)
                    return false;
                if (cards[0] != 36)
                    return false;
                if (cards[1] != 45)
                    return false;
                return true;
            };
            // 双零霖
            PaijiuMgr.prototype.isShuangLingLin = function (cards) {
                if (cards.length != 2)
                    return false;
                if (cards[0] != 15)
                    return false;
                if (cards[1] != 15)
                    return false;
                return true;
            };
            // 双高脚
            PaijiuMgr.prototype.isShuangGaoJiao = function (cards) {
                if (cards.length != 2)
                    return false;
                if (cards[0] != 16)
                    return false;
                if (cards[1] != 16)
                    return false;
                return true;
            };
            // 双红头
            PaijiuMgr.prototype.isShuangHongTou = function (cards) {
                if (cards.length != 2)
                    return false;
                if (cards[0] != 46)
                    return false;
                if (cards[1] != 46)
                    return false;
                return true;
            };
            // 双斧头
            PaijiuMgr.prototype.isShuangFuTou = function (cards) {
                if (cards.length != 2)
                    return false;
                if (cards[0] != 56)
                    return false;
                if (cards[1] != 56)
                    return false;
                return true;
            };
            // 双板凳
            PaijiuMgr.prototype.isShuangBanDeng = function (cards) {
                if (cards.length != 2)
                    return false;
                if (cards[0] != 22)
                    return false;
                if (cards[1] != 22)
                    return false;
                return true;
            };
            // 双长三
            PaijiuMgr.prototype.isShuangChangSan = function (cards) {
                if (cards.length != 2)
                    return false;
                if (cards[0] != 33)
                    return false;
                if (cards[1] != 33)
                    return false;
                return true;
            };
            // 双梅
            PaijiuMgr.prototype.isShuangMei = function (cards) {
                if (cards.length != 2)
                    return false;
                if (cards[0] != 55)
                    return false;
                if (cards[1] != 55)
                    return false;
                return true;
            };
            // 双鹅
            PaijiuMgr.prototype.isShuangE = function (cards) {
                if (cards.length != 2)
                    return false;
                if (cards[0] != 13)
                    return false;
                if (cards[1] != 13)
                    return false;
                return true;
            };
            // 双人
            PaijiuMgr.prototype.isShuangRen = function (cards) {
                if (cards.length != 2)
                    return false;
                if (cards[0] != 44)
                    return false;
                if (cards[1] != 44)
                    return false;
                return true;
            };
            // 双地
            PaijiuMgr.prototype.isShuangDi = function (cards) {
                if (cards.length != 2)
                    return false;
                if (cards[0] != 11)
                    return false;
                if (cards[1] != 11)
                    return false;
                return true;
            };
            // 双天
            PaijiuMgr.prototype.isShuangTian = function (cards) {
                if (cards.length != 2)
                    return false;
                if (cards[0] != 66)
                    return false;
                if (cards[1] != 66)
                    return false;
                return true;
            };
            // 至尊
            PaijiuMgr.prototype.isZhiZun = function (cards) {
                if (cards.length != 2)
                    return false;
                if (cards[0] != 24)
                    return false;
                if (cards[1] != 12)
                    return false;
                return true;
            };
            // 看下是什么牌
            PaijiuMgr.prototype.checkCardsType = function (temps) {
                // cards.sort((a, b) => {
                // 	this.getCardValue(cards[b]) > this.getCardValue(cards[a]);
                // })
                var cards = [];
                for (var i = 0; i < temps.length; i++) {
                    var val = temps[i];
                    if (val > 21) {
                        val = temps[i] - 11;
                    }
                    cards.push(this._cardConfig[val - 1]);
                }
                var cardtype = 0 /* CARDS_TYPE_DP */;
                if (this.isDiGaoJiu(cards))
                    cardtype = 1 /* CARDS_TYPE_DGJ */;
                else if (this.isTianGaoJiu(cards))
                    cardtype = 2 /* CARDS_TYPE_TGJ */;
                else if (this.isDiGang(cards))
                    cardtype = 3 /* CARDS_TYPE_DG */;
                else if (this.isTianGang(cards))
                    cardtype = 4 /* CARDS_TYPE_TG */;
                else if (this.isDiWang(cards))
                    cardtype = 5 /* CARDS_TYPE_DW */;
                else if (this.isTianWang(cards))
                    cardtype = 6 /* CARDS_TYPE_TW */;
                else if (this.isZaWu(cards))
                    cardtype = 7 /* CARDS_TYPE_ZW */;
                else if (this.isZaQi(cards))
                    cardtype = 8 /* CARDS_TYPE_ZQ */;
                else if (this.isZaBa(cards))
                    cardtype = 9 /* CARDS_TYPE_ZB */;
                else if (this.isZaJiu(cards))
                    cardtype = 10 /* CARDS_TYPE_ZJ */;
                else if (this.isShuangLingLin(cards))
                    cardtype = 11 /* CARDS_TYPE_SLL */;
                else if (this.isShuangGaoJiao(cards))
                    cardtype = 12 /* CARDS_TYPE_SGJ */;
                else if (this.isShuangHongTou(cards))
                    cardtype = 13 /* CARDS_TYPE_SHT */;
                else if (this.isShuangFuTou(cards))
                    cardtype = 14 /* CARDS_TYPE_SFT */;
                else if (this.isShuangBanDeng(cards))
                    cardtype = 15 /* CARDS_TYPE_SBD */;
                else if (this.isShuangChangSan(cards))
                    cardtype = 16 /* CARDS_TYPE_SCS */;
                else if (this.isShuangMei(cards))
                    cardtype = 17 /* CARDS_TYPE_SM */;
                else if (this.isShuangE(cards))
                    cardtype = 18 /* CARDS_TYPE_SE */;
                else if (this.isShuangRen(cards))
                    cardtype = 19 /* CARDS_TYPE_SR */;
                else if (this.isShuangDi(cards))
                    cardtype = 20 /* CARDS_TYPE_SD */;
                else if (this.isShuangTian(cards))
                    cardtype = 21 /* CARDS_TYPE_ST */;
                else if (this.isZhiZun(cards))
                    cardtype = 22 /* CARDS_TYPE_ZZ */;
                return cardtype;
            };
            // 计算下点数
            PaijiuMgr.prototype.checkCardsCount = function (temps) {
                var cards = [];
                for (var i = 0; i < temps.length; i++) {
                    var val_1 = temps[i];
                    if (val_1 > 21) {
                        val_1 = temps[i] - 11;
                    }
                    cards.push(this._cardConfig[val_1 - 1]);
                }
                var count = 0;
                var val = this.cardCount(cards[0]);
                for (var i = 1; i < cards.length; i++) {
                    val += this.cardCount(cards[i]);
                }
                count = val % 10;
                return count;
            };
            PaijiuMgr.prototype.sort = function () {
                var cards = this._cards;
                var max = 4;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                var mainIdx = mainUnit.GetIndex();
                var count = 0;
                var cardIdx = 0;
                for (var index = 0; index < max; index++) {
                    var posIdx = (this._firstPos + index) % max == 0 ? max : (this._firstPos + index) % max;
                    for (var i = 0; i < 2; i++) {
                        var card = cards[count * 2 + i];
                        if (card) {
                            card.pos = new Vector2(this._cardPos[index][0] + i * this._cardPos[index][2], this._cardPos[index][1]);
                            card.myOwner(mainIdx, posIdx);
                            card.index = i;
                            card.sortScore = cardIdx;
                        }
                        cardIdx++;
                    }
                    count++;
                }
            };
            //发牌
            PaijiuMgr.prototype.fapai = function () {
                var _this = this;
                var count = 1;
                var _loop_1 = function (i) {
                    Laya.timer.once(300 * count, this_1, function () {
                        for (var k = 0; k < 2; k++) {
                            var card = _this._cards[i * 2 + k];
                            //播音效
                            _this._game.playSound(Path.music + "paijiu/qzpj_fapai.mp3", false);
                            card.fapai();
                        }
                    });
                    count++;
                };
                var this_1 = this;
                for (var i = 0; i < this._cards.length / 2; i++) {
                    _loop_1(i);
                }
            };
            //重连发牌
            PaijiuMgr.prototype.refapai = function () {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    card.refapai();
                }
            };
            //翻牌
            PaijiuMgr.prototype.showCards = function (cards, pos) {
                for (var index = 0; index < cards.length; index++) {
                    var cardIdx = (pos + 4 - this._firstPos) % 4;
                    var card = this._cards[cardIdx * 2 + index];
                    if (card) {
                        card.Init(cards[index]);
                        card.fanpai();
                    }
                }
            };
            //重置数据
            PaijiuMgr.prototype.resetData = function () {
                this._firstPos = 0;
            };
            PaijiuMgr.MAPINFO_OFFLINE = "PaijiuMgr.MAPINFO_OFFLINE"; //假精灵
            PaijiuMgr.DEAL_CARDS = "PaijiuMgr.DEAL_CARDS"; //发牌结束
            PaijiuMgr.CONTINUE_MATCH = "PaijiuMgr.CONTINUE_MATCH"; //继续游戏
            return PaijiuMgr;
        }(gamecomponent.managers.PlayingCardMgrBase));
        manager.PaijiuMgr = PaijiuMgr;
    })(manager = gamepaijiu.manager || (gamepaijiu.manager = {}));
})(gamepaijiu || (gamepaijiu = {}));
//# sourceMappingURL=PaijiuMgr.js.map