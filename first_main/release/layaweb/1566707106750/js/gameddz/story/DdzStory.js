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
* name 斗地主-剧情
*/
var gameddz;
(function (gameddz) {
    var story;
    (function (story) {
        var DdzStory = /** @class */ (function (_super) {
            __extends(DdzStory, _super);
            function DdzStory(v, mapid, maplv) {
                var _this = _super.call(this, v, mapid, maplv) || this;
                _this._cardsTemp = [];
                _this._battleIndex = -1;
                _this.init();
                return _this;
            }
            DdzStory.prototype.init = function () {
                if (!this._ddzMgr) {
                    this._ddzMgr = new DdzMgr(this._game);
                }
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.on(DdzMapInfo.EVENT_DDZ_BATTLE_CHECK, this, this.updateBattledInfo);
                this.onIntoNewMap();
                _super.prototype.init.call(this);
            };
            Object.defineProperty(DdzStory.prototype, "ddzMgr", {
                get: function () {
                    return this._ddzMgr;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DdzStory.prototype, "mapLv", {
                get: function () {
                    return this.maplv;
                },
                set: function (lv) {
                    this.maplv = lv;
                },
                enumerable: true,
                configurable: true
            });
            DdzStory.prototype.onIntoNewMap = function (info) {
                if (!info)
                    return;
                this.onMapInfoChange();
                this._game.uiRoot.closeAll();
                this._game.uiRoot.HUD.open(DdzPageDef.PAGE_DDZ_MAP);
            };
            DdzStory.prototype.onMapInfoChange = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._ddzMapInfo = mapinfo;
                if (mapinfo) {
                    this.onUpdateCardInfo();
                }
                else {
                    this._ddzMgr.unitOffline = this._offlineUnit;
                }
            };
            DdzStory.prototype.updateBattledInfo = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var battleInfoMgr = mapinfo.battleInfoMgr;
                var mainIdx = mainUnit.GetIndex();
                if (!mainIdx)
                    return;
                //好几局，用这个区分一下
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    if (battleInfo.Type == 11) {
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
                        }
                    }
                }
            };
            //断线重连,重发下牌
            DdzStory.prototype.onUpdateCardInfo = function () {
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
            DdzStory.prototype.createofflineUnit = function () {
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
            DdzStory.prototype.enterMap = function () {
                //各种判断
                if (this.mapinfo)
                    return false;
                if (!this.maplv) {
                    this.maplv = this._last_maplv;
                }
                this._game.network.call_match_game(this._mapid, this.maplv);
                return true;
            };
            DdzStory.prototype.leavelMap = function () {
                //各种判断
                this._game.network.call_leave_game();
                return true;
            };
            DdzStory.prototype.clear = function () {
                _super.prototype.clear.call(this);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.off(DdzMapInfo.EVENT_DDZ_BATTLE_CHECK, this, this.updateBattledInfo);
                if (this._ddzMgr) {
                    this._ddzMgr.clear();
                    this._ddzMgr = null;
                }
                this._ddzMapInfo = null;
            };
            return DdzStory;
        }(gamecomponent.story.StoryNormalBase));
        story.DdzStory = DdzStory;
    })(story = gameddz.story || (gameddz.story = {}));
})(gameddz || (gameddz = {}));
//# sourceMappingURL=DdzStory.js.map