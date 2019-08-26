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
*游戏剧情
*/
var gamebairendezhou;
(function (gamebairendezhou) {
    var story;
    (function (story) {
        var BairendezhouStory = /** @class */ (function (_super) {
            __extends(BairendezhouStory, _super);
            function BairendezhouStory(v, mapid, maplv) {
                var _this = _super.call(this, v, mapid, maplv) || this;
                _this._dealCards = [];
                _this._openCards = [];
                _this.init();
                return _this;
            }
            Object.defineProperty(BairendezhouStory.prototype, "bairendezhouMgr", {
                get: function () {
                    return this._bairendezhouMgr;
                },
                enumerable: true,
                configurable: true
            });
            BairendezhouStory.prototype.init = function () {
                if (!this._bairendezhouMgr) {
                    this._bairendezhouMgr = new BairendezhouMgr(this._game);
                }
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.on(BairendezhouMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.on(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this.onIntoNewMap();
            };
            BairendezhouStory.prototype.onIntoNewMap = function (info) {
                if (!info)
                    return;
                this.onMapInfoChange();
                this._game.uiRoot.closeAll();
                this._game.uiRoot.HUD.open(BairendezhouPageDef.PAGE_BAIRENDEZHOU_MAP);
            };
            BairendezhouStory.prototype.onMapInfoChange = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._bairendezhouMapInfo = mapinfo;
                if (mapinfo) {
                    this.onUpdateBattle();
                    this.onUpdateState();
                }
            };
            BairendezhouStory.prototype.onUpdateState = function () {
                if (!this._bairendezhouMapInfo)
                    return;
                var mapStatus = this._bairendezhouMapInfo.GetMapState();
                if (this._curStatus == mapStatus)
                    return;
                this._curStatus = mapStatus;
                switch (this._curStatus) {
                    case 0 /* PLAY_STATUS_NONE */: // 准备阶段
                        this.serverClose();
                        break;
                    case 1 /* PLAY_STATUS_GAMESTART */: // 游戏开始
                        break;
                    case 2 /* PLAY_STATUS_WASH_CARD */: // 洗牌阶段
                        break;
                    case 3 /* PLAY_STATUS_PUSH_CARD */: // 发牌阶段
                        break;
                    case 4 /* PLAY_STATUS_BET */: // 下注阶段
                        break;
                    case 5 /* PLAY_STATUS_STOP_BET */: // 停止下注阶段
                        break;
                    case 6 /* PLAY_STATUS_SHOW_CARD */: // 开牌阶段
                        this.onMoveAndBackCards();
                        break;
                    case 7 /* PLAY_STATUS_SETTLE */: // 结算阶段
                        this.onMoveAndBackCards();
                        break;
                    case 8 /* PLAY_STATUS_SETTLE_SHOW */: // 结算结果展示
                        break;
                    case 9 /* PLAY_STATUS_RELAX */: // 休息阶段
                        break;
                }
            };
            BairendezhouStory.prototype.createObj = function () {
                var card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, BairendezhouData);
                card.pos = new Vector2(956, 215); //牌发出来的位置
                card.rotateAngle = 60;
                return card;
            };
            //打开公共牌
            BairendezhouStory.prototype.openPublicCards = function () {
                var _this = this;
                var count = 1;
                var allCards = this._bairendezhouMgr.initCard(this._openCards);
                var _loop_1 = function (index) {
                    Laya.timer.once(500 * count, this_1, function () {
                        _this._bairendezhouMgr.setValue(allCards[index], index);
                        if (index == allCards.length - 1) {
                            Laya.timer.once(500, _this, function () {
                                _this._bairendezhouMgr.event(BairendezhouMgr.OPEN_ANI);
                            });
                        }
                    });
                    count++;
                };
                var this_1 = this;
                for (var index = 2 * BairendezhouMgr.EACH_CARD_NUM; index < allCards.length; index++) {
                    _loop_1(index);
                }
            };
            //发牌
            BairendezhouStory.prototype.onPushCards = function (cards, refapai) {
                var handle = new Handler(this, this.createObj);
                this._bairendezhouMgr.Init(cards, handle);
                this._bairendezhouMgr.sort();
                if (refapai) {
                    this._bairendezhouMgr.refapai();
                }
                else {
                    this._bairendezhouMgr.fapai();
                }
            };
            //移动牌和归位牌
            BairendezhouStory.prototype.onMoveAndBackCards = function () {
                if (!this._bairendezhouMapInfo)
                    return;
                if (this._openCards.length < 9)
                    return;
                if (this._curStatus == 6 /* PLAY_STATUS_SHOW_CARD */) {
                    this._bairendezhouMgr.movepai();
                    this._bairendezhouMgr.event(BairendezhouMgr.MOVE_CARD);
                    this.openPublicCards();
                    this._bairendezhouMgr.isMoveCards = true;
                }
                else if (this._curStatus == 7 /* PLAY_STATUS_SETTLE */ && this._bairendezhouMgr.isMoveCards) {
                    this._bairendezhouMgr.backpai();
                    this._bairendezhouMgr.event(BairendezhouMgr.BACK_CARD);
                }
            };
            //战斗结构体 出牌
            BairendezhouStory.prototype.onUpdateBattle = function () {
                var _this = this;
                if (!this._bairendezhouMapInfo)
                    return;
                var battleInfoMgr = this._bairendezhouMapInfo.battleInfoMgr;
                this._dealCards = [];
                this._openCards = [];
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var info = battleInfoMgr.info[i];
                    if (info instanceof gamecomponent.object.BattleInfoDeal) {
                        if (info.SeatIndex < 3) {
                            var arr = info.Cards.concat();
                            if (this._dealCards.length < 4) {
                                this._dealCards = this._dealCards.concat(arr);
                            }
                        }
                        else {
                            var arr = info.Cards.concat();
                            if (this._openCards.length < 9) {
                                this._openCards = this._dealCards.concat(arr);
                            }
                        }
                    }
                    if (info instanceof gamecomponent.object.BattleInfoMingPai) {
                        if (this._openCards.length >= 3) {
                            this._openCards[1] = info.Cards[1];
                            this._openCards[3] = info.Cards[3];
                        }
                    }
                }
                //发牌及断线重连发牌
                if (this._dealCards.length >= 4 && !this._bairendezhouMgr.isReDrawCards) {
                    if (this._dealCards.length < 9) {
                        this._dealCards = this._dealCards.concat([1, 1, 1, 1, 1]);
                    }
                    if (this._curStatus == 3 /* PLAY_STATUS_PUSH_CARD */) {
                        this.onPushCards(this._dealCards, false);
                        this._bairendezhouMgr.isReDrawCards = true;
                    }
                    else if (this._curStatus > 3 /* PLAY_STATUS_PUSH_CARD */ && 9 /* PLAY_STATUS_RELAX */) {
                        this.onPushCards(this._dealCards, true);
                        this._bairendezhouMgr.isReDrawCards = true;
                    }
                }
                else {
                }
                //断线重连：开牌阶段及之后进来直接开掉所有牌及显示牌型
                if (this._bairendezhouMgr.isReconnect && this._curStatus >= 6 /* PLAY_STATUS_SHOW_CARD */ && !this._bairendezhouMgr.isMoveCards) {
                    this._bairendezhouMgr.isReconnect = false;
                    var count = 0;
                    var _cards = this._bairendezhouMgr.initCard(this._openCards);
                    for (var i = 0; i < _cards.length; i++) {
                        this._bairendezhouMgr.setValue1(_cards[i], i);
                        count++;
                        if (count >= this._openCards.length) {
                            Laya.timer.once(1000, this, function () {
                                _this._bairendezhouMgr.event(BairendezhouMgr.OPEN_OVER);
                            });
                        }
                    }
                }
            };
            BairendezhouStory.prototype.enterMap = function () {
                //各种判断
                this._game.network.call_match_game(this._mapid, this.maplv);
                return true;
            };
            BairendezhouStory.prototype.leavelMap = function () {
                //各种判断
                this._game.network.call_leave_game();
                return true;
            };
            BairendezhouStory.prototype.clear = function () {
                this._bairendezhouMapInfo = null;
                this._game.sceneObjectMgr.off(BairendezhouMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.off(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                if (this._bairendezhouMgr) {
                    this._bairendezhouMgr = null;
                }
            };
            BairendezhouStory.prototype.update = function (diff) {
            };
            return BairendezhouStory;
        }(gamecomponent.story.StoryBaiRenBase));
        story.BairendezhouStory = BairendezhouStory;
    })(story = gamebairendezhou.story || (gamebairendezhou.story = {}));
})(gamebairendezhou || (gamebairendezhou = {}));
//# sourceMappingURL=BairendezhouStory.js.map