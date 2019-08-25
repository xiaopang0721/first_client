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
* name 三公剧情
*/
var gamesangong;
(function (gamesangong) {
    var story;
    (function (story) {
        var SangongStory = /** @class */ (function (_super) {
            __extends(SangongStory, _super);
            function SangongStory(v, mapid, maplv) {
                var _this = _super.call(this, v, mapid, maplv) || this;
                _this._cardsTemp = [];
                _this.isDealCard = false; //是否发过牌了
                _this.init();
                return _this;
            }
            SangongStory.prototype.init = function () {
                _super.prototype.init.call(this);
                if (!this._sgMgr) {
                    this._sgMgr = new SangongMgr(this._game);
                }
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.on(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this.onIntoNewMap();
            };
            Object.defineProperty(SangongStory.prototype, "sgMgr", {
                get: function () {
                    return this._sgMgr;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SangongStory.prototype, "mapLv", {
                get: function () {
                    return this.maplv;
                },
                set: function (lv) {
                    this.maplv = lv;
                },
                enumerable: true,
                configurable: true
            });
            SangongStory.prototype.onIntoNewMap = function (info) {
                if (!info)
                    return;
                this.onMapInfoChange();
                this._game.uiRoot.closeAll();
                this._game.uiRoot.HUD.open(SgPageDef.PAGE_SG_MAP);
            };
            SangongStory.prototype.onMapInfoChange = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._sgMapInfo = mapinfo;
                if (mapinfo) {
                    this.onUpdateState();
                    this.onUpdateCardInfo();
                }
                else {
                    this._sgMgr.unitOffline = this._offlineUnit;
                }
            };
            SangongStory.prototype.onUpdateState = function () {
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
                    case 2 /* MAP_STATE_DEAL */: //发牌
                        if (this.isDealCard)
                            return;
                        this.updateCardsCount();
                        var handle = new Handler(this, this._sgMgr.createObj);
                        this._sgMgr.Init(this._cardsTemp, handle);
                        this._sgMgr.sort();
                        this._sgMgr.fapai();
                        this.isDealCard = true;
                        break;
                }
            };
            //断线重连,重发下牌
            SangongStory.prototype.onUpdateCardInfo = function () {
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
                if (statue > 0 /* MAP_STATE_NONE */ && statue < 8 /* MAP_STATE_SETTLE */) {
                    this._sgMgr.isReLogin = true;
                    if (this.isDealCard)
                        return;
                    if (statue > 3 /* MAP_STATE_DEA_END */) {
                        this.isDealCard = true;
                        this.updateCardsCount();
                        var handle = new Handler(this, this._sgMgr.createObj);
                        this._sgMgr.Init(this._cardsTemp, handle);
                        this._sgMgr.sort();
                        this._sgMgr.refapai();
                    }
                }
            };
            //算下在场几个人来定牌数
            SangongStory.prototype.updateCardsCount = function () {
                var card = [1, 2, 3];
                this._cardsTemp = [];
                for (var index = 1; index < 6; index++) {
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(index);
                    if (unit) {
                        this._cardsTemp = this._cardsTemp.concat(card);
                    }
                }
            };
            SangongStory.prototype.createofflineUnit = function () {
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
            SangongStory.prototype.enterMap = function () {
                //各种判断
                if (this.mapinfo)
                    return false;
                if (!this.maplv) {
                    this.maplv = this._last_maplv;
                }
                this._game.network.call_match_game(this._mapid, this.maplv);
                return true;
            };
            SangongStory.prototype.leavelMap = function () {
                //各种判断
                this._game.network.call_leave_game();
                return true;
            };
            SangongStory.prototype.clear = function () {
                _super.prototype.clear.call(this);
                this._game.sceneObjectMgr.off(SangongMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                if (this._sgMgr) {
                    this._sgMgr.clear();
                    this._sgMgr = null;
                }
                this._sgMapInfo = null;
            };
            return SangongStory;
        }(gamecomponent.story.StoryNormalBase));
        story.SangongStory = SangongStory;
    })(story = gamesangong.story || (gamesangong.story = {}));
})(gamesangong || (gamesangong = {}));
//# sourceMappingURL=SangongStory.js.map