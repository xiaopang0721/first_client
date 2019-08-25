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
* name 炸金花剧情
*/
var gamezjh;
(function (gamezjh) {
    var story;
    (function (story) {
        var ZjhStory = /** @class */ (function (_super) {
            __extends(ZjhStory, _super);
            function ZjhStory(v, mapid, maplv) {
                var _this = _super.call(this, v, mapid, maplv) || this;
                _this._cardsTemp = [];
                _this._isGiveUp = false; //是否弃牌
                _this.isDealCard = false; //是否发过牌了
                _this.checkReconect = false; //检查重连
                _this.init();
                return _this;
            }
            ZjhStory.prototype.init = function () {
                _super.prototype.init.call(this);
                if (!this._zjhMgr) {
                    this._zjhMgr = new ZjhMgr(this._game);
                }
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.on(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this.onIntoNewMap();
            };
            Object.defineProperty(ZjhStory.prototype, "zjhMgr", {
                get: function () {
                    return this._zjhMgr;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ZjhStory.prototype, "mapLv", {
                get: function () {
                    return this.maplv;
                },
                set: function (lv) {
                    this.maplv = lv;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ZjhStory.prototype, "isGiveUp", {
                set: function (v) {
                    this._isGiveUp = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ZjhStory.prototype, "mapinfo", {
                get: function () {
                    if (this._mapinfo && this._isGiveUp)
                        return null;
                    return this._mapinfo;
                },
                enumerable: true,
                configurable: true
            });
            ZjhStory.prototype.createObj = function (u) {
                var card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, ZjhData);
                card.pos = new Vector2(850, 200);
                return card;
            };
            ZjhStory.prototype.onIntoNewMap = function (info) {
                if (!info)
                    return;
                this.onMapInfoChange();
                this._game.uiRoot.closeAll();
                this._game.uiRoot.HUD.open(ZjhPageDef.PAGE_ZHAJINHUA_MAP);
            };
            ZjhStory.prototype.onMapInfoChange = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._zjhMapInfo = mapinfo;
                if (mapinfo) {
                    if (mapinfo.GetMapState() == 7 /* MAP_STATE_SHOW */) {
                        this._game.network.call_zjh_continue();
                    }
                    this.onUpdateState();
                    this.onUpdateCardInfo();
                }
                else {
                    this._zjhMgr.unitOffline = this._offlineUnit;
                }
            };
            ZjhStory.prototype.onUpdateState = function () {
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
                    case 3 /* MAP_STATE_CARD */: //发牌
                        if (this.isDealCard)
                            return;
                        this.updateCardsCount();
                        var handle = new Handler(this, this.createObj);
                        this._zjhMgr.Init(this._cardsTemp, handle);
                        this._zjhMgr.sort();
                        this._zjhMgr.fapai();
                        this.isDealCard = true;
                        break;
                }
            };
            //断线重连,重发下牌
            ZjhStory.prototype.onUpdateCardInfo = function () {
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
                if (this.checkReconect)
                    return;
                if (statue > 0 /* MAP_STATE_READY */ && statue < 7 /* MAP_STATE_SHOW */) {
                    this.updateCardsCount();
                    this._zjhMgr.isReLogin = true;
                    this.checkReconect = true;
                    if (this.isDealCard)
                        return;
                    if (statue > 3 /* MAP_STATE_CARD */) {
                        var handle = new Handler(this, this.createObj);
                        this._zjhMgr.Init(this._cardsTemp, handle);
                        this._zjhMgr.sort();
                        this._zjhMgr.refapai();
                        this.isDealCard = true;
                    }
                }
            };
            //算下在场几个人来定牌数
            ZjhStory.prototype.updateCardsCount = function () {
                var card = [1, 2, 3];
                this._cardsTemp = [];
                for (var index = 1; index < 6; index++) {
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(index);
                    if (unit) {
                        this._cardsTemp = this._cardsTemp.concat(card);
                    }
                }
            };
            ZjhStory.prototype.createofflineUnit = function () {
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
            ZjhStory.prototype.enterMap = function () {
                //各种判断
                if (this.mapinfo)
                    return false;
                if (!this.maplv) {
                    this.maplv = this._last_maplv;
                }
                this._game.network.call_match_game(this._mapid, this.maplv);
                return true;
            };
            ZjhStory.prototype.leavelMap = function () {
                //各种判断
                this._game.network.call_leave_game();
                return true;
            };
            ZjhStory.prototype.clear = function () {
                _super.prototype.clear.call(this);
                this._game.sceneObjectMgr.off(ZjhMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                if (this._zjhMgr) {
                    this._zjhMgr.clear();
                    this._zjhMgr = null;
                }
            };
            return ZjhStory;
        }(gamecomponent.story.StoryNormalBase));
        story.ZjhStory = ZjhStory;
    })(story = gamezjh.story || (gamezjh.story = {}));
})(gamezjh || (gamezjh = {}));
//# sourceMappingURL=ZjhStory.js.map