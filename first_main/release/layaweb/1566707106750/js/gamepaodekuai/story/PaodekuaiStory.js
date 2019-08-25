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
* name 跑得快-剧情
*/
var gamepaodekuai;
(function (gamepaodekuai) {
    var story;
    (function (story) {
        var PaodekuaiStory = /** @class */ (function (_super) {
            __extends(PaodekuaiStory, _super);
            function PaodekuaiStory(v, mapid, maplv) {
                var _this = _super.call(this, v, mapid, maplv) || this;
                _this._cardsTemp = [];
                _this._battleIndex = -1;
                _this.init();
                return _this;
            }
            PaodekuaiStory.prototype.init = function () {
                if (!this._paodekuaiMgr) {
                    this._paodekuaiMgr = new PaodekuaiMgr(this._game);
                }
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.on(PaodekuaiMapInfo.EVENT_PDK_BATTLE_CHECK, this, this.updateBattledInfo);
                this.onIntoNewMap();
                _super.prototype.init.call(this);
            };
            Object.defineProperty(PaodekuaiStory.prototype, "paodekuaiMgr", {
                get: function () {
                    return this._paodekuaiMgr;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PaodekuaiStory.prototype, "mapLv", {
                get: function () {
                    return this.maplv;
                },
                set: function (lv) {
                    this.maplv = lv;
                },
                enumerable: true,
                configurable: true
            });
            PaodekuaiStory.prototype.onIntoNewMap = function (info) {
                if (!info)
                    return;
                this.onMapInfoChange();
                this._game.uiRoot.closeAll();
                this._game.uiRoot.HUD.open(PaodekuaiPageDef.PAGE_PDK_MAP);
            };
            PaodekuaiStory.prototype.onMapInfoChange = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._paodekuaiMapInfo = mapinfo;
                if (mapinfo) {
                    this.onUpdateCardInfo();
                }
                else {
                    this._paodekuaiMgr.unitOffline = this._offlineUnit;
                }
            };
            PaodekuaiStory.prototype.updateBattledInfo = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var battleInfoMgr = mapinfo.battleInfoMgr;
                var mainIdx = mainUnit.GetIndex();
                if (!mainIdx)
                    return;
                if (this._paodekuaiMgr.isReDealCard)
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
                            var handle = new Handler(this, this._paodekuaiMgr.createObj);
                            this._paodekuaiMgr.Init(this._cardsTemp, handle);
                            this._paodekuaiMgr.sort();
                            if (this._paodekuaiMgr.isReLogin) {
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
            PaodekuaiStory.prototype.onUpdateCardInfo = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mapinfo)
                    return;
                if (!mainUnit)
                    return;
                if (!mainUnit.GetIndex())
                    return;
                var statue = mapinfo.GetMapState();
                if (statue >= 3 /* MAP_STATE_SHUFFLE */ && statue <= 10 /* MAP_STATE_WAIT */) {
                    this._paodekuaiMgr.isReLogin = true;
                    if (statue > 4 /* MAP_STATE_DEAL */) {
                        this.updateBattledInfo();
                    }
                }
            };
            PaodekuaiStory.prototype.createofflineUnit = function () {
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
            PaodekuaiStory.prototype.enterMap = function () {
                //各种判断
                if (this.mapinfo)
                    return false;
                if (!this.maplv) {
                    this.maplv = this._last_maplv;
                }
                this._game.network.call_match_game(this._mapid, this.maplv);
                return true;
            };
            PaodekuaiStory.prototype.leavelMap = function () {
                //各种判断
                this._game.network.call_leave_game();
                return true;
            };
            PaodekuaiStory.prototype.clear = function () {
                _super.prototype.clear.call(this);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.off(PaodekuaiMapInfo.EVENT_PDK_BATTLE_CHECK, this, this.updateBattledInfo);
                if (this._paodekuaiMgr) {
                    this._paodekuaiMgr.clear();
                    this._paodekuaiMgr = null;
                }
                this._paodekuaiMapInfo = null;
            };
            return PaodekuaiStory;
        }(gamecomponent.story.StoryNormalBase));
        story.PaodekuaiStory = PaodekuaiStory;
    })(story = gamepaodekuai.story || (gamepaodekuai.story = {}));
})(gamepaodekuai || (gamepaodekuai = {}));
//# sourceMappingURL=PaodekuaiStory.js.map