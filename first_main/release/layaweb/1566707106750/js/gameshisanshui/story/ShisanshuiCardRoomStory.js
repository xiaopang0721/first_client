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
* name 十三水-剧情
*/
var gameshisanshui;
(function (gameshisanshui) {
    var story;
    (function (story) {
        var ShisanshuiCardRoomStory = /** @class */ (function (_super) {
            __extends(ShisanshuiCardRoomStory, _super);
            function ShisanshuiCardRoomStory(v, mapid, maplv, dataSource) {
                var _this = _super.call(this, v, mapid, maplv, dataSource) || this;
                _this._cardsTemp = [];
                _this.init();
                return _this;
            }
            ShisanshuiCardRoomStory.prototype.init = function () {
                if (!this._sssMgr) {
                    this._sssMgr = new ShisanshuiMgr(this._game);
                }
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.on(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
            };
            Object.defineProperty(ShisanshuiCardRoomStory.prototype, "sssMgr", {
                get: function () {
                    return this._sssMgr;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ShisanshuiCardRoomStory.prototype, "mapLv", {
                get: function () {
                    return this.maplv;
                },
                set: function (lv) {
                    this.maplv = lv;
                },
                enumerable: true,
                configurable: true
            });
            ShisanshuiCardRoomStory.prototype.onIntoNewMap = function (info) {
                if (!info)
                    return;
                this.onMapInfoChange();
                this._game.uiRoot.closeAll();
                this._game.uiRoot.HUD.open(ShisanshuiPageDef.PAGE_SSS_MAP);
            };
            ShisanshuiCardRoomStory.prototype.onMapInfoChange = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._sssMapInfo = mapinfo;
                if (mapinfo) {
                    this.onUpdateState();
                    this.onUpdateCardInfo();
                }
            };
            ShisanshuiCardRoomStory.prototype.onUpdateState = function () {
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
                    case 4 /* MAP_STATE_DEAL */: //发牌
                        this.updateCardsCount();
                        var handle = new Handler(this, this._sssMgr.createObj);
                        this._sssMgr.Init(this._cardsTemp, handle);
                        this._sssMgr.sort();
                        this._sssMgr.fapai();
                        break;
                }
            };
            //断线重连,重发下牌
            ShisanshuiCardRoomStory.prototype.onUpdateCardInfo = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mapinfo)
                    return;
                if (!mainUnit)
                    return;
                if (mainUnit.GetIndex() == 0)
                    return;
                var statue = mapinfo.GetMapState();
                if (statue >= 3 /* MAP_STATE_SHUFFLE */ && statue <= 11 /* MAP_STATE_WAIT */) {
                    this._sssMgr.isReLogin = true;
                    if (statue > 4 /* MAP_STATE_DEAL */ && !this._sssMgr.isReDealCard) {
                        this._sssMgr.isReDealCard = true;
                        this.updateCardsCount();
                        var handle = new Handler(this, this._sssMgr.createObj);
                        this._sssMgr.Init(this._cardsTemp, handle);
                        this._sssMgr.sort();
                        this._sssMgr.refapai();
                    }
                }
            };
            //算下在场几个人来定牌数
            ShisanshuiCardRoomStory.prototype.updateCardsCount = function () {
                var card = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
                this._cardsTemp = [];
                var maxCount = 4;
                for (var index = 1; index < maxCount + 1; index++) {
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(index);
                    if (unit) {
                        this._cardsTemp = this._cardsTemp.concat(card);
                    }
                }
            };
            ShisanshuiCardRoomStory.prototype.clear = function () {
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.off(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                if (this._sssMgr) {
                    this._sssMgr.clear();
                    this._sssMgr = null;
                }
                this._sssMapInfo = null;
            };
            return ShisanshuiCardRoomStory;
        }(gamecomponent.story.StoryRoomCardBase));
        story.ShisanshuiCardRoomStory = ShisanshuiCardRoomStory;
    })(story = gameshisanshui.story || (gameshisanshui.story = {}));
})(gameshisanshui || (gameshisanshui = {}));
//# sourceMappingURL=ShisanshuiCardRoomStory.js.map