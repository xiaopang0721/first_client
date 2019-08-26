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
    var story;
    (function (story) {
        var DezhouStory = /** @class */ (function (_super) {
            __extends(DezhouStory, _super);
            function DezhouStory(v, mapid, maplv) {
                var _this = _super.call(this, v, mapid, maplv) || this;
                _this._cardsTemp = [];
                _this._openCards = [];
                _this.init();
                return _this;
            }
            DezhouStory.prototype.init = function () {
                _super.prototype.init.call(this);
                if (!this._dezhouMgr) {
                    this._dezhouMgr = new DezhouMgr(this._game);
                }
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.on(DezhouMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this.onIntoNewMap();
            };
            Object.defineProperty(DezhouStory.prototype, "dezhouMgr", {
                get: function () {
                    return this._dezhouMgr;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DezhouStory.prototype, "mapLv", {
                get: function () {
                    return this.maplv;
                },
                set: function (lv) {
                    this.maplv = lv;
                },
                enumerable: true,
                configurable: true
            });
            DezhouStory.prototype.createObj = function (u) {
                var card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, DezhouData);
                card.pos = new Vector2(782, 185);
                card.rotateAngle = 65;
                return card;
            };
            DezhouStory.prototype.onIntoNewMap = function (info) {
                if (!info)
                    return;
                this.onMapInfoChange();
                this._game.uiRoot.closeAll();
                this._game.uiRoot.HUD.open(DezhouPageDef.PAGE_DEZHOU_MAP);
            };
            DezhouStory.prototype.onMapInfoChange = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._dezhouMapInfo = mapinfo;
                if (!mapinfo) {
                    this._dezhouMgr.unitOffline = this._offlineUnit;
                }
                else {
                    if (mapinfo.GetMapState() == 7 /* MAP_STATE_SHOW_GAME */) {
                        this._game.network.call_dezhou_continue();
                    }
                    this.onUpdateState();
                    this.onUpdateCardInfo();
                }
            };
            DezhouStory.prototype.onUpdateState = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mapinfo)
                    return;
                if (!mainUnit)
                    return;
                if (mainUnit.GetIndex() == 0)
                    return;
                var statue = mapinfo.GetMapState();
                switch (statue) {
                    case 2 /* MAP_STATE_DEAR_CARD */: //发牌
                        if (this._dezhouMgr.isDealCard)
                            return;
                        this.updateCardsCount();
                        var handle = new Handler(this, this.createObj);
                        this._dezhouMgr.Init(this._cardsTemp, handle);
                        this._dezhouMgr.sort();
                        this._dezhouMgr.fapai();
                        this._dezhouMgr.isDealCard = true;
                        break;
                }
            };
            //断线重连,重发下牌
            DezhouStory.prototype.onUpdateCardInfo = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mapinfo)
                    return;
                if (!mainUnit)
                    return;
                if (mainUnit.GetIndex() == 0)
                    return;
                var statue = mapinfo.GetMapState();
                if (statue > 0 /* MAP_STATE_READY */ && statue < 7 /* MAP_STATE_SHOW_GAME */) {
                    this.calculateCards();
                    this.isReConnected = true;
                    if (this._dezhouMgr.isDealCard)
                        return;
                    if (statue > 2 /* MAP_STATE_DEAR_CARD */) {
                        var handle = new Handler(this, this.createObj);
                        this._dezhouMgr.Init(this._cardsTemp, handle);
                        this._dezhouMgr.sort();
                        this._dezhouMgr.refapai();
                        this._dezhouMgr.isDealCard = true;
                    }
                }
            };
            //算下在场几个人来定牌数
            DezhouStory.prototype.updateCardsCount = function () {
                var card = [1, 2];
                this._cardsTemp = [];
                for (var index = 1; index < 10; index++) {
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(index);
                    if (unit) {
                        this._cardsTemp = this._cardsTemp.concat(card);
                    }
                }
            };
            //断线重连算下牌数
            DezhouStory.prototype.calculateCards = function () {
                var mapInfo = this._game.sceneObjectMgr.mapInfo;
                var battleInfoMgr = mapInfo.battleInfoMgr;
                var card = [1, 2];
                this._cardsTemp = [];
                for (var index = 1; index < 10; index++) {
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(index);
                    if (unit) {
                        this._cardsTemp = this._cardsTemp.concat(card);
                    }
                }
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    if (battleInfo instanceof gamecomponent.object.BattleInfoAsk) { //公共牌
                        this._cardsTemp.push(battleInfo.Card);
                    }
                }
            };
            DezhouStory.prototype.createofflineUnit = function () {
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
            DezhouStory.prototype.enterMap = function () {
                //各种判断
                if (this.mapinfo)
                    return false;
                if (!this.maplv) {
                    this.maplv = this._last_maplv;
                }
                this._game.network.call_match_game(this._mapid, this.maplv);
                return true;
            };
            DezhouStory.prototype.leavelMap = function () {
                //各种判断
                this._game.network.call_leave_game();
                return true;
            };
            DezhouStory.prototype.clear = function () {
                _super.prototype.clear.call(this);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.off(DezhouMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this._dezhouMapInfo = null;
                if (this._dezhouMgr) {
                    this._dezhouMgr.clear();
                    this._dezhouMgr = null;
                }
            };
            return DezhouStory;
        }(gamecomponent.story.StoryNormalBase));
        story.DezhouStory = DezhouStory;
    })(story = gamedezhou.story || (gamedezhou.story = {}));
})(gamedezhou || (gamedezhou = {}));
//# sourceMappingURL=DezhouStory.js.map