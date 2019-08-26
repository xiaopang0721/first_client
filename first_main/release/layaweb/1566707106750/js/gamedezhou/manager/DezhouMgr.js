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
var gamedezhou;
(function (gamedezhou) {
    var manager;
    (function (manager) {
        var MIN_CHECKTIME = 1000; //最小检测时间间隔(毫秒)
        var DezhouMgr = /** @class */ (function (_super) {
            __extends(DezhouMgr, _super);
            function DezhouMgr(game) {
                var _this = _super.call(this, game) || this;
                _this._isDealCard = false;
                _this._pubCards = [];
                _this._startNum = 0;
                return _this;
            }
            Object.defineProperty(DezhouMgr.prototype, "unitOffline", {
                get: function () {
                    return this._unitOffline;
                },
                set: function (v) {
                    this._unitOffline = v;
                    this.event(DezhouMgr.MAPINFO_OFFLINE);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DezhouMgr.prototype, "isDealCard", {
                get: function () {
                    return this._isDealCard;
                },
                set: function (v) {
                    this._isDealCard = v;
                },
                enumerable: true,
                configurable: true
            });
            //初始化牌
            DezhouMgr.prototype.Init = function (all_val, create_fun) {
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
            };
            //心跳更新
            DezhouMgr.prototype.update = function (diff) {
                if (this._offsetTime > 0) {
                    this._offsetTime -= diff;
                    return;
                }
                this._offsetTime = MIN_CHECKTIME;
            };
            //加公共牌
            DezhouMgr.prototype.addCard = function (val, create_fun, ownerIdx, cardIdx) {
                var mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var card;
                card = create_fun.run();
                this._cards.push(card);
                card.Init(val);
                card.index = cardIdx - 1;
                card.sortScore = -cardIdx;
                card.scaleX = 1;
                card.isShow = true;
                card.myOwner(null, false, ownerIdx, cardIdx);
                this._pubCards.push(card);
                this.fapaiPub();
            };
            //发公共牌
            DezhouMgr.prototype.fapaiPub = function () {
                var _this = this;
                var _loop_1 = function (i) {
                    var card = this_1._pubCards[i];
                    if (card) {
                        Laya.timer.once(100 * this_1._startNum, this_1, function () {
                            _this._game.playSound(PathGameTongyong.music_tongyong + "fapai.mp3", false);
                            card.fapai();
                        });
                        this_1._startNum++;
                    }
                };
                var this_1 = this;
                for (var i = this._startNum; i < this._pubCards.length; i++) {
                    _loop_1(i);
                }
            };
            DezhouMgr.prototype.createObj = function (u) {
                var card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, DezhouData);
                card.pos = new Vector2(782, 185);
                card.rotateAngle = 65;
                return card;
            };
            DezhouMgr.prototype.sort = function () {
                var allcards = this._cards;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                var idx = mainUnit.GetIndex();
                var max = 9;
                var count = 0;
                var length = allcards.length;
                for (var index = 0; index < max; index++) {
                    var posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    if (unit) {
                        for (var i = 0; i < 2; i++) {
                            var card = allcards[count * 2 + i];
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
                //有发公共牌
                if (length > 2 * count) {
                    for (var i = count * 2; i < length; i++) {
                        var card = allcards[i];
                        var cardIdx = i - count * 2 + 1;
                        if (card) {
                            card.index = cardIdx - 1;
                            card.sortScore = -cardIdx;
                            card.scaleX = 1;
                            card.isShow = true;
                            card.myOwner(null, false, 10, cardIdx);
                            this._startNum++;
                        }
                    }
                }
            };
            //发牌
            DezhouMgr.prototype.fapai = function () {
                var _this = this;
                var count = 0;
                var counter = 0;
                var allcards = this._cards;
                for (var index = 0; index < 2; index++) {
                    var _loop_2 = function (i) {
                        var card = allcards[index + i * 2];
                        Laya.timer.once(100 * count, this_2, function () {
                            _this._game.playSound(PathGameTongyong.music_tongyong + "fapai.mp3", false);
                            card.fapai();
                            counter++;
                            if (counter >= allcards.length) {
                                _this.event(DezhouMgr.DEAR_CARD_OVER);
                            }
                        });
                        count++;
                    };
                    var this_2 = this;
                    for (var i = 0; i < allcards.length / 2; i++) {
                        _loop_2(i);
                    }
                }
            };
            //重连发牌
            DezhouMgr.prototype.refapai = function () {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    card.refapai();
                }
            };
            //明牌
            DezhouMgr.prototype.showCard = function (v, pos) {
                var length = this._cards.length;
                if (length % 2 == 1) {
                    length = length - 5;
                }
                for (var i = 0; i < length; i++) {
                    var card = this._cards[i];
                    card.sortScore = 2 - i;
                    if (card.owner && card._ownerIdx == pos) {
                        var index = i % 2;
                        card.Init(v[index]);
                        card.fanpaiall();
                    }
                }
            };
            //牌置灰
            DezhouMgr.prototype.setDisabled = function (show, unit) {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    if (card.owner == unit) {
                        card.disable = show;
                    }
                }
            };
            // 清理指定玩家卡牌对象
            DezhouMgr.prototype.clearCardObject = function (index) {
                var _this = this;
                this._game.sceneObjectMgr.ForEachObject(function (obj) {
                    if (obj instanceof DezhouData) {
                        if (obj.owner && obj.owner.GetIndex() == index) {
                            _this._game.sceneObjectMgr.clearOfflineObject(obj);
                        }
                    }
                });
            };
            DezhouMgr.DEAR_CARD_OVER = "DezhouMgr.DEAR_CARD_OVER";
            DezhouMgr.MAPINFO_OFFLINE = "DezhouMgr.MAPINFO_OFFLINE"; //假精灵
            return DezhouMgr;
        }(gamecomponent.managers.PlayingCardMgrBase));
        manager.DezhouMgr = DezhouMgr;
    })(manager = gamedezhou.manager || (gamedezhou.manager = {}));
})(gamedezhou || (gamedezhou = {}));
//# sourceMappingURL=DezhouMgr.js.map