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
* 跑得快
*/
var gamepaodekuai;
(function (gamepaodekuai) {
    var story;
    (function (story) {
        var PaodekuaiCardRoomStory = /** @class */ (function (_super) {
            __extends(PaodekuaiCardRoomStory, _super);
            function PaodekuaiCardRoomStory(v, mapid, maplv, dataSource) {
                var _this = _super.call(this, v, mapid, maplv, dataSource) || this;
                _this._cardsTemp = [];
                _this._battleIndex = -1;
                _this.init();
                return _this;
            }
            PaodekuaiCardRoomStory.prototype.init = function () {
                if (!this._paodekuaiMgr) {
                    this._paodekuaiMgr = new PaodekuaiMgr(this._game);
                }
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.on(PaodekuaiMapInfo.EVENT_PDK_BATTLE_CHECK, this, this.updateBattledInfo);
            };
            Object.defineProperty(PaodekuaiCardRoomStory.prototype, "paodekuaiMgr", {
                get: function () {
                    return this._paodekuaiMgr;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PaodekuaiCardRoomStory.prototype, "mapLv", {
                get: function () {
                    return this.maplv;
                },
                set: function (lv) {
                    this.maplv = lv;
                },
                enumerable: true,
                configurable: true
            });
            PaodekuaiCardRoomStory.prototype.onIntoNewMap = function (info) {
                if (!info)
                    return;
                this.onMapInfoChange();
                this._game.uiRoot.closeAll();
                this._game.uiRoot.HUD.open(PaodekuaiPageDef.PAGE_PDK_MAP);
            };
            PaodekuaiCardRoomStory.prototype.onMapInfoChange = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._paodekuaiMapInfo = mapinfo;
                if (mapinfo) {
                    this.onUpdateCardInfo();
                }
            };
            PaodekuaiCardRoomStory.prototype.updateBattledInfo = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var battleInfoMgr = mapinfo.battleInfoMgr;
                var mainIdx = mainUnit.GetIndex();
                if (mainIdx == 0)
                    return;
                if (this._paodekuaiMgr.isReDealCard)
                    return;
                //好几局，用这个区分一下
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    if (battleInfo.Type == 24) {
                        this._battleIndex = i;
                    }
                }
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    if (battleInfo instanceof gamecomponent.object.BattleInfoMingPai && this._battleIndex < i) { //发牌
                        var idx = battleInfo.SeatIndex;
                        if (idx == mainIdx) {
                            this._cardsTemp = [];
                            for (var k = 0; k < battleInfo.Cards.length; k++) {
                                this._cardsTemp.push(battleInfo.Cards[k]);
                            }
                            var handle = new Handler(this, this._paodekuaiMgr.createObj);
                            this._paodekuaiMgr.Init(this._cardsTemp, handle);
                            this._paodekuaiMgr.sort();
                            if (this._paodekuaiMgr.isReLogin) {
                                this._paodekuaiMgr.isShowCards = true;
                                this._paodekuaiMgr.refapai();
                            }
                            else {
                                this._paodekuaiMgr.fapai();
                            }
                            this._paodekuaiMgr.isReDealCard = true;
                        }
                    }
                }
            };
            //断线重连,重发下牌
            PaodekuaiCardRoomStory.prototype.onUpdateCardInfo = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mapinfo)
                    return;
                if (!mainUnit)
                    return;
                var statue = mapinfo.GetMapState();
                if (statue >= 3 /* MAP_STATE_SHUFFLE */ && statue <= 10 /* MAP_STATE_WAIT */) {
                    this._paodekuaiMgr.isReLogin = true;
                    if (statue > 4 /* MAP_STATE_DEAL */) {
                        this.updateBattledInfo();
                    }
                }
            };
            PaodekuaiCardRoomStory.prototype.clear = function () {
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.off(PaodekuaiMapInfo.EVENT_PDK_BATTLE_CHECK, this, this.updateBattledInfo);
                if (this._paodekuaiMgr) {
                    this._paodekuaiMgr.clear();
                    this._paodekuaiMgr = null;
                }
                this._paodekuaiMapInfo = null;
            };
            return PaodekuaiCardRoomStory;
        }(gamecomponent.story.StoryRoomCardBase));
        story.PaodekuaiCardRoomStory = PaodekuaiCardRoomStory;
    })(story = gamepaodekuai.story || (gamepaodekuai.story = {}));
})(gamepaodekuai || (gamepaodekuai = {}));
//# sourceMappingURL=PaodekuaiCardRoomStory.js.map