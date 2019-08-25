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
* name 二八杠剧情
*/
var gameebgang;
(function (gameebgang) {
    var story;
    (function (story) {
        var EbgangStory = /** @class */ (function (_super) {
            __extends(EbgangStory, _super);
            function EbgangStory(v, mapid, mapLv) {
                var _this = _super.call(this, v, mapid, mapLv) || this;
                _this._cardsTemp = [];
                _this._isDealCard = false; //是否发过牌了
                _this._isSortCard = false;
                _this.init();
                return _this;
            }
            EbgangStory.prototype.init = function () {
                _super.prototype.init.call(this);
                if (!this._ebgMgr) {
                    this._ebgMgr = new EBGangMgr(this._game);
                }
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.on(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this.onIntoNewMap();
            };
            Object.defineProperty(EbgangStory.prototype, "ebgMgr", {
                get: function () {
                    return this._ebgMgr;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(EbgangStory.prototype, "mapLv", {
                get: function () {
                    return this.maplv;
                },
                set: function (lv) {
                    this.maplv = lv;
                },
                enumerable: true,
                configurable: true
            });
            EbgangStory.prototype.onIntoNewMap = function (info) {
                if (!info)
                    return;
                this.onMapInfoChange();
                this._game.uiRoot.closeAll();
                this._game.uiRoot.general.open(EBGPageDef.PAGE_EBG_MAP);
            };
            EbgangStory.prototype.enterMap = function () {
                //各种判断
                if (this.mapinfo)
                    return false;
                if (!this.maplv) {
                    this.maplv = this._last_maplv;
                }
                this._game.network.call_match_game(this._mapid, this.maplv);
                return true;
            };
            EbgangStory.prototype.onMapInfoChange = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._ebgMapInfo = mapinfo;
                if (mapinfo) {
                    this.onUpdateState();
                    this.onUpdateCardInfo();
                }
                else {
                    this._ebgMgr.unitOffline = this._offlineUnit;
                }
            };
            EbgangStory.prototype.onUpdateState = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                if (!mapinfo)
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                if (!mainUnit.GetIndex())
                    return;
                var state = mapinfo.GetMapState();
                switch (state) {
                    case 10 /* MAP_STATE_SORT_SHOW_CARDS */: //摆牌,准备开牌
                        if (this._isSortCard)
                            return;
                        this.updateCardsCount();
                        var handle = new Handler(this, this._ebgMgr.createObj);
                        this._ebgMgr.Init(this._cardsTemp, handle);
                        this._ebgMgr.sort();
                        this._isSortCard = true;
                        break;
                    case 11 /* MAP_STATE_BEFORE_SHOW_CARDS */: //发牌
                        this._ebgMgr.fapai();
                        break;
                    default:
                        break;
                }
            };
            //重发下牌
            EbgangStory.prototype.reDealCards = function () {
                if (this._isSortCard)
                    return;
                this.updateCardsCount();
                var handle = new Handler(this, this.ebgMgr.createObj);
                this.ebgMgr.Init(this._cardsTemp, handle);
                this.ebgMgr.sort();
                this.ebgMgr.refapai();
                this._isSortCard = true;
            };
            //断线重连,重发下牌
            EbgangStory.prototype.onUpdateCardInfo = function () {
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
                var state = mapinfo.GetMapState();
                if (state > 0 /* MAP_STATE_NONE */ && state < 17 /* MAP_STATE_END */) {
                    if (this._isDealCard)
                        return;
                    if (state > 10 /* MAP_STATE_SORT_SHOW_CARDS */) {
                        this._isDealCard = true;
                    }
                }
            };
            //算下在场几个人来定牌数
            EbgangStory.prototype.updateCardsCount = function () {
                var card = [1, 2];
                this._cardsTemp = [];
                for (var index = 1; index < 5; index++) {
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(index);
                    if (unit) {
                        this._cardsTemp = this._cardsTemp.concat(card);
                    }
                }
            };
            EbgangStory.prototype.createofflineUnit = function () {
                //创建假的地图和精灵
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
            EbgangStory.prototype.leavelMap = function () {
                //各种判断
                this._game.network.call_leave_game();
                return true;
            };
            EbgangStory.prototype.clear = function () {
                _super.prototype.clear.call(this);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.off(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                if (this._ebgMgr) {
                    this._ebgMgr.clear();
                    this._ebgMgr = null;
                }
                this._ebgMapInfo = null;
            };
            return EbgangStory;
        }(gamecomponent.story.StoryNormalBase));
        story.EbgangStory = EbgangStory;
    })(story = gameebgang.story || (gameebgang.story = {}));
})(gameebgang || (gameebgang = {}));
//# sourceMappingURL=EBGangStory.js.map