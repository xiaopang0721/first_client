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
* name 牌九剧情
*/
var gamepaijiu;
(function (gamepaijiu) {
    var story;
    (function (story) {
        var PaijiuStory = /** @class */ (function (_super) {
            __extends(PaijiuStory, _super);
            function PaijiuStory(v, mapid, maplv) {
                var _this = _super.call(this, v, mapid, maplv) || this;
                _this._cardsTemp = [];
                _this.init();
                return _this;
            }
            PaijiuStory.prototype.init = function () {
                _super.prototype.init.call(this);
                if (!this._paijiuMgr) {
                    this._paijiuMgr = new PaijiuMgr(this._game);
                }
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.on(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this.onIntoNewMap();
            };
            Object.defineProperty(PaijiuStory.prototype, "paijiuMgr", {
                get: function () {
                    return this._paijiuMgr;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PaijiuStory.prototype, "mapLv", {
                get: function () {
                    return this.maplv;
                },
                set: function (lv) {
                    this.maplv = lv;
                },
                enumerable: true,
                configurable: true
            });
            PaijiuStory.prototype.onIntoNewMap = function (info) {
                if (!info)
                    return;
                this.onMapInfoChange();
                this._game.uiRoot.closeAll();
                this._game.uiRoot.HUD.open(PaijiuPageDef.PAGE_PAIJIU_MAP);
            };
            PaijiuStory.prototype.onMapInfoChange = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._paijiuMapInfo = mapinfo;
                if (mapinfo) {
                    this.updateBattledInfo();
                    this.onUpdateState();
                    this.onUpdateCardInfo();
                }
                else {
                    this._paijiuMgr.unitOffline = this._offlineUnit;
                }
            };
            PaijiuStory.prototype.onUpdateState = function () {
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
                    case 5 /* MAP_STATE_DEAL */: //发牌
                        if (this._paijiuMgr.isReDealCard)
                            return;
                        this.updateCardsCount();
                        var handle = new Handler(this, this._paijiuMgr.createObj);
                        this._paijiuMgr.Init(this._cardsTemp, handle);
                        this._paijiuMgr.sort();
                        this._paijiuMgr.fapai();
                        this._paijiuMgr.isReDealCard = true;
                        break;
                }
            };
            //断线重连,
            PaijiuStory.prototype.onUpdateCardInfo = function () {
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
                if (statue > 0 /* MAP_STATE_NONE */ && statue < 11 /* MAP_STATE_END */) {
                    if (this.checkReconect)
                        return;
                    this._paijiuMgr.isRelogin = true;
                    if (statue > 5 /* MAP_STATE_DEAL */) {
                        this.checkReconect = true;
                    }
                }
            };
            //重发下牌
            PaijiuStory.prototype.reDealCards = function () {
                if (this._paijiuMgr.isReDealCard)
                    return;
                this.updateCardsCount();
                var handle = new Handler(this, this._paijiuMgr.createObj);
                this._paijiuMgr.Init(this._cardsTemp, handle);
                this._paijiuMgr.sort();
                this._paijiuMgr.refapai();
                this._paijiuMgr.isReDealCard = true;
            };
            //算下在场几个人来定牌数
            PaijiuStory.prototype.updateCardsCount = function () {
                var card = [1, 2];
                this._cardsTemp = [];
                for (var index = 1; index < 5; index++) {
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(index);
                    if (unit) {
                        this._cardsTemp = this._cardsTemp.concat(card);
                    }
                }
            };
            PaijiuStory.prototype.updateBattledInfo = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mapinfo)
                    return;
                if (!mainUnit)
                    return;
                var battleInfoMgr = this._paijiuMapInfo.battleInfoMgr;
                var mainIdx = mainUnit.GetIndex();
                if (!mainIdx)
                    return;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    if (battleInfo instanceof gamecomponent.object.BattleInfoBet) {
                        //找下庄家
                        var bankerIdx = void 0;
                        for (var k = 1; k < 5; k++) {
                            var unit = this._game.sceneObjectMgr.getUnitByIdx(k);
                            if (unit) {
                                if (unit.GetIdentity() == 1) {
                                    bankerIdx = k;
                                }
                            }
                        }
                        var pos = (battleInfo.BetVal + battleInfo.SeeCard - 1) % 4 + bankerIdx;
                        if (pos > 4) {
                            pos = pos - 4;
                        }
                        this._paijiuMgr.firstPos = pos;
                    }
                }
            };
            PaijiuStory.prototype.createofflineUnit = function () {
                //创建假的地图和精灵
                var unitOffline = new UnitOffline(this._game.sceneObjectMgr);
                if (this._game.sceneObjectMgr.mainPlayer) {
                    unitOffline.SetStr(UnitField.UNIT_STR_NAME, this._game.sceneObjectMgr.mainPlayer.playerInfo.nickname);
                    unitOffline.SetStr(UnitField.UNIT_STR_HEAD_IMG, this._game.sceneObjectMgr.mainPlayer.playerInfo.headimg);
                    unitOffline.SetDouble(UnitField.UNIT_INT_MONEY, this._game.sceneObjectMgr.mainPlayer.playerInfo.money);
                    unitOffline.SetUInt32(UnitField.UNIT_INT_QI_FU_END_TIME, this._game.sceneObjectMgr.mainPlayer.playerInfo.qifu_endtime);
                    unitOffline.SetUInt32(UnitField.UNIT_INT_QI_FU_TYPE, this._game.sceneObjectMgr.mainPlayer.playerInfo.qifu_type);
                    unitOffline.SetUInt32(UnitField.UNIT_INT_VIP_LEVEL, this._game.sceneObjectMgr.mainPlayer.playerInfo.vip_level);
                }
                unitOffline.SetUInt16(UnitField.UNIT_INT_UINT16, 0, 1);
                this._offlineUnit = unitOffline;
            };
            PaijiuStory.prototype.enterMap = function () {
                //各种判断
                if (this.mapinfo)
                    return false;
                this._game.network.call_match_game(this._mapid, this.maplv);
                return true;
            };
            PaijiuStory.prototype.leavelMap = function () {
                //各种判断
                this._game.network.call_leave_game();
                return true;
            };
            PaijiuStory.prototype.clear = function () {
                _super.prototype.clear.call(this);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.off(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                if (this._paijiuMgr) {
                    this._paijiuMgr.clear();
                    this._paijiuMgr = null;
                }
                this._paijiuMapInfo = null;
            };
            return PaijiuStory;
        }(gamecomponent.story.StoryNormalBase));
        story.PaijiuStory = PaijiuStory;
    })(story = gamepaijiu.story || (gamepaijiu.story = {}));
})(gamepaijiu || (gamepaijiu = {}));
//# sourceMappingURL=PaijiuStory.js.map