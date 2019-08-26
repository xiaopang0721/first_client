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
* 斗地主
*/
var gameddz;
(function (gameddz) {
    var story;
    (function (story) {
        var DdzCardRoomStory = /** @class */ (function (_super) {
            __extends(DdzCardRoomStory, _super);
            function DdzCardRoomStory(v, mapid, maplv, dataSource) {
                var _this = _super.call(this, v, mapid, maplv, dataSource) || this;
                _this._cardsTemp = [];
                _this._battleIndex = -1;
                _this.init();
                return _this;
            }
            DdzCardRoomStory.prototype.init = function () {
                if (!this._ddzMgr) {
                    this._ddzMgr = new DdzMgr(this._game);
                }
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.on(DdzMapInfo.EVENT_DDZ_BATTLE_CHECK, this, this.updateBattledInfo);
            };
            Object.defineProperty(DdzCardRoomStory.prototype, "ddzMgr", {
                get: function () {
                    return this._ddzMgr;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DdzCardRoomStory.prototype, "mapLv", {
                get: function () {
                    return this.maplv;
                },
                set: function (lv) {
                    this.maplv = lv;
                },
                enumerable: true,
                configurable: true
            });
            DdzCardRoomStory.prototype.onIntoNewMap = function (info) {
                if (!info)
                    return;
                this.onMapInfoChange();
                this._game.uiRoot.closeAll();
                this._game.uiRoot.HUD.open(DdzPageDef.PAGE_DDZ_MAP);
            };
            DdzCardRoomStory.prototype.onMapInfoChange = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._ddzMapInfo = mapinfo;
                if (mapinfo) {
                    this.resetBattleIdx();
                    this.onUpdateCardInfo();
                }
            };
            //重连之后，战斗日志从哪开始刷
            DdzCardRoomStory.prototype.resetBattleIdx = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                if (!mapinfo)
                    return;
                var battleInfoMgr = mapinfo.battleInfoMgr;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    if (battleInfo instanceof gamecomponent.object.BattleInfoShowCards) {
                        this._battleIndex = i;
                    }
                }
            };
            DdzCardRoomStory.prototype.updateBattledInfo = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var battleInfoMgr = mapinfo.battleInfoMgr;
                var mainIdx = mainUnit.GetIndex();
                if (mainIdx == 0)
                    return;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    if (battleInfo instanceof gamecomponent.object.BattleInfoMingPai && this._battleIndex < i) { //发牌
                        this._battleIndex = i;
                        var idx = battleInfo.SeatIndex;
                        if (idx == mainIdx) {
                            this._ddzMgr.allCards = [];
                            for (var k = 0; k < battleInfo.Cards.length; k++) {
                                var card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, DdzData);
                                card.pos = new Vector2(981, 113);
                                card.Init(battleInfo.Cards[k]);
                                this._ddzMgr.allCards.push(card);
                            }
                            this._ddzMgr.sort();
                            if (this._ddzMgr.isReLogin) {
                                this._ddzMgr.refapai();
                            }
                            else {
                                this._ddzMgr.fapai();
                            }
                            this._ddzMgr.dealEndCards();
                        }
                    }
                    else if (battleInfo instanceof gamecomponent.object.BattleInfoSeeCard && this._battleIndex < i) { //重新开始
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            // this._ddzMgr.reStart = true;
                            this._ddzMgr.isShowCards = false;
                            this._ddzMgr.allCards = [];
                            this._ddzMgr.endCards = [];
                            this._ddzMgr.clearCardObject();
                        }
                    }
                    else if (battleInfo instanceof gamecomponent.object.BattleInfoSimpleCard && this._battleIndex < i) { //给地主底牌
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            //显示下底牌
                            this._ddzMgr.showEndCards(battleInfo.Cards);
                            if (battleInfo.SeatIndex == mainIdx) {
                                for (var k = 0; k < battleInfo.Cards.length; k++) {
                                    var card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, DdzData);
                                    if (this._ddzMgr.isReLogin) {
                                        card.pos = new Vector2(640, 625);
                                    }
                                    else {
                                        card.pos = new Vector2(640, 360);
                                    }
                                    card.Init(battleInfo.Cards[k].GetVal());
                                    if (card) {
                                        this._ddzMgr.allCards.push(card);
                                        card.isShow = true;
                                    }
                                    this._ddzMgr.tidyCard();
                                }
                            }
                        }
                    }
                }
            };
            //断线重连,重发下牌
            DdzCardRoomStory.prototype.onUpdateCardInfo = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mapinfo)
                    return;
                if (!mainUnit)
                    return;
                var statue = mapinfo.GetMapState();
                if (statue >= 3 /* MAP_STATE_SHUFFLE */ && statue <= 10 /* MAP_STATE_WAIT */) {
                    this._ddzMgr.isReLogin = true;
                    if (statue > 4 /* MAP_STATE_DEAL */) {
                        this.updateBattledInfo();
                    }
                }
            };
            DdzCardRoomStory.prototype.clear = function () {
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.off(DdzMapInfo.EVENT_DDZ_BATTLE_CHECK, this, this.updateBattledInfo);
                if (this._ddzMgr) {
                    this._ddzMgr.clear();
                    this._ddzMgr = null;
                }
                this._ddzMapInfo = null;
            };
            return DdzCardRoomStory;
        }(gamecomponent.story.StoryRoomCardBase));
        story.DdzCardRoomStory = DdzCardRoomStory;
    })(story = gameddz.story || (gameddz.story = {}));
})(gameddz || (gameddz = {}));
//# sourceMappingURL=DdzCardRoomStory.js.map