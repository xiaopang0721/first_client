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
* name 21点剧情
*/
var gameblackjack;
(function (gameblackjack) {
    var story;
    (function (story) {
        var BlackjackStory = /** @class */ (function (_super) {
            __extends(BlackjackStory, _super);
            function BlackjackStory(v, mapid, maplv) {
                var _this = _super.call(this, v, mapid, maplv) || this;
                _this._cardsTemp = [];
                _this._isDealCard = false; //是否发过牌了
                _this.init();
                return _this;
            }
            BlackjackStory.prototype.init = function () {
                _super.prototype.init.call(this);
                if (!this._blackjackMgr) {
                    this._blackjackMgr = new BlackjackMgr(this._game);
                }
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.on(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this.onIntoNewMap();
            };
            Object.defineProperty(BlackjackStory.prototype, "blackjackMgr", {
                get: function () {
                    return this._blackjackMgr;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BlackjackStory.prototype, "mapLv", {
                get: function () {
                    return this.maplv;
                },
                set: function (lv) {
                    this.maplv = lv;
                },
                enumerable: true,
                configurable: true
            });
            BlackjackStory.prototype.onIntoNewMap = function (info) {
                if (!info)
                    return;
                this.onMapInfoChange();
                this._game.uiRoot.closeAll();
                this._game.uiRoot.HUD.open(BlackjackPageDef.PAGE_BLACKJACK_MAP);
            };
            BlackjackStory.prototype.onMapInfoChange = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._blackjackMapInfo = mapinfo;
                if (mapinfo) {
                    this.onUpdateState();
                    this.onUpdateCardInfo();
                }
                else {
                    this._blackjackMgr.unitOffline = this._offlineUnit;
                }
            };
            BlackjackStory.prototype.onUpdateState = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mapinfo)
                    return;
                if (!mainUnit)
                    return;
                if (!mainUnit.GetIndex())
                    return;
                var statue = mapinfo.GetMapState();
                switch (statue) {
                    case 4 /* MAP_STATE_DEALING */: //发牌
                        if (this._isDealCard)
                            return;
                        var handle = new Handler(this, this._blackjackMgr.createObj);
                        this.updateCardsCount();
                        this._blackjackMgr.Init(this._cardsTemp, handle);
                        this._blackjackMgr.isDealCard();
                        this._blackjackMgr.sort();
                        this._blackjackMgr.fapai();
                        this._isDealCard = true;
                        break;
                }
            };
            //断线重连,重发下牌
            BlackjackStory.prototype.onUpdateCardInfo = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mapinfo)
                    return;
                if (!mainUnit)
                    return;
                if (!mainUnit.GetIndex())
                    return;
                if (!this.isReConnected)
                    return;
                var statue = mapinfo.GetMapState();
                if (statue > 0 /* MAP_STATE_NONE */ && statue < 11 /* MAP_STATE_SETTLEING */) {
                    this._blackjackMgr.isReLogin = true;
                    if (this._isDealCard)
                        return;
                    if (statue > 3 /* MAP_STATE_DEAL */) {
                        this.calculateCards();
                        var handle = new Handler(this, this._blackjackMgr.createObj);
                        this._blackjackMgr.Init(this._cardsTemp, handle);
                        this._blackjackMgr.reDealCard();
                        this._blackjackMgr.sort();
                        this._blackjackMgr.refapai();
                        this._isDealCard = true;
                    }
                }
            };
            //根据下注来发牌
            BlackjackStory.prototype.updateCardsCount = function () {
                var mapInfo = this._game.sceneObjectMgr.mapInfo;
                var battleInfoMgr = mapInfo.battleInfoMgr;
                var card = [1, 2];
                this._cardsTemp = [];
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    if (battleInfo instanceof gamecomponent.object.BattleInfoDeal) { //发牌
                        this._cardsTemp = this._cardsTemp.concat(card);
                    }
                }
            };
            //断线重连算下牌数
            BlackjackStory.prototype.calculateCards = function () {
                var mapInfo = this._game.sceneObjectMgr.mapInfo;
                var battleInfoMgr = mapInfo.battleInfoMgr;
                var card = [1, 2];
                this._cardsTemp = [];
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    if (battleInfo instanceof gamecomponent.object.BattleInfoDeal) { //发牌
                        this._cardsTemp = this._cardsTemp.concat(card);
                    }
                    else if (battleInfo instanceof gamecomponent.object.BattleInfoAsk) { //要牌
                        this._cardsTemp.push(1);
                    }
                    else if (battleInfo instanceof gamecomponent.object.BattleInfoFanPai) { //庄家翻牌
                        this._cardsTemp.push(1);
                    }
                }
            };
            BlackjackStory.prototype.createofflineUnit = function () {
                //创建假精灵
                var unitOffline = new UnitOffline(this._game.sceneObjectMgr);
                var mainPlayer = this._game.sceneObjectMgr.mainPlayer;
                if (mainPlayer) {
                    unitOffline.SetStr(UnitField.UNIT_STR_NAME, mainPlayer.playerInfo.nickname);
                    unitOffline.SetStr(UnitField.UNIT_STR_HEAD_IMG, mainPlayer.playerInfo.headimg);
                    unitOffline.SetDouble(UnitField.UNIT_INT_MONEY, mainPlayer.playerInfo.money);
                    unitOffline.SetUInt32(UnitField.UNIT_INT_QI_FU_END_TIME, mainPlayer.GetQiFuEndTime(mainPlayer.playerInfo.qifu_type - 1));
                    unitOffline.SetUInt32(UnitField.UNIT_INT_QI_FU_TYPE, mainPlayer.playerInfo.qifu_type);
                    unitOffline.SetUInt32(UnitField.UNIT_INT_VIP_LEVEL, mainPlayer.playerInfo.vip_level);
                }
                unitOffline.SetUInt16(UnitField.UNIT_INT_UINT16, 0, 1);
                this._offlineUnit = unitOffline;
            };
            BlackjackStory.prototype.enterMap = function () {
                //各种判断
                if (this.mapinfo)
                    return false;
                if (!this.maplv) {
                    this.maplv = this._last_maplv;
                }
                this._game.network.call_match_game(this._mapid, this.maplv);
                return true;
            };
            BlackjackStory.prototype.leavelMap = function () {
                //各种判断
                this._game.network.call_leave_game();
                return true;
            };
            BlackjackStory.prototype.clear = function () {
                _super.prototype.clear.call(this);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.off(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                if (this._blackjackMgr) {
                    this._blackjackMgr.clear();
                    this._blackjackMgr = null;
                }
                this._blackjackMapInfo = null;
            };
            return BlackjackStory;
        }(gamecomponent.story.StoryNormalBase));
        story.BlackjackStory = BlackjackStory;
    })(story = gameblackjack.story || (gameblackjack.story = {}));
})(gameblackjack || (gameblackjack = {}));
//# sourceMappingURL=BlackjackStory.js.map