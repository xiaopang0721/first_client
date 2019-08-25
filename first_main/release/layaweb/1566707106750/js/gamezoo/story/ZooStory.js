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
* name 飞禽走兽剧情
*/
var gamezoo;
(function (gamezoo) {
    var story;
    (function (story) {
        var ZooStory = /** @class */ (function (_super) {
            __extends(ZooStory, _super);
            function ZooStory(v, mapid, maplv) {
                var _this = _super.call(this, v, mapid, maplv) || this;
                _this._isReconnect = true;
                _this.init();
                return _this;
            }
            Object.defineProperty(ZooStory.prototype, "isReconnect", {
                get: function () {
                    return this._isReconnect;
                },
                set: function (v) {
                    this._isReconnect = v;
                },
                enumerable: true,
                configurable: true
            });
            ZooStory.prototype.init = function () {
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.on(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this.onIntoNewMap();
            };
            ZooStory.prototype.onIntoNewMap = function (info) {
                if (!info)
                    return;
                this.onMapInfoChange();
                this._game.uiRoot.closeAll();
                this._game.uiRoot.HUD.open(ZooPageDef.PAGE_ZOO_MAP);
            };
            ZooStory.prototype.onMapInfoChange = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._zooMapInfo = mapinfo;
                if (mapinfo) {
                    this.onUpdateState();
                }
            };
            ZooStory.prototype.onUpdateState = function () {
                if (!this._zooMapInfo)
                    return;
                var mapStatus = this._zooMapInfo.GetMapState();
                if (this._curStatus == mapStatus)
                    return;
                this._curStatus = mapStatus;
                switch (this._curStatus) {
                    case 0 /* PLAY_STATUS_NONE */: // 准备阶段
                        this.serverClose();
                        break;
                }
            };
            ZooStory.prototype.createofflineUnit = function () {
                //创建假的地图和精灵
                var unitOffline = new UnitOffline(this._game.sceneObjectMgr);
                if (this._game.sceneObjectMgr.mainPlayer) {
                    unitOffline.SetStr(UnitField.UNIT_STR_NAME, this._game.sceneObjectMgr.mainPlayer.playerInfo.nickname);
                    unitOffline.SetDouble(UnitField.UNIT_INT_MONEY, this._game.sceneObjectMgr.mainPlayer.playerInfo.money);
                    unitOffline.SetUInt32(UnitField.UNIT_INT_QI_FU_END_TIME, this._game.sceneObjectMgr.mainPlayer.playerInfo.qifu_endtime);
                }
                unitOffline.SetUInt16(UnitField.UNIT_INT_UINT16, 0, 1);
            };
            ZooStory.prototype.enterMap = function () {
                //各种判断
                this._game.network.call_match_game(this._mapid, this.maplv);
                return true;
            };
            ZooStory.prototype.leavelMap = function () {
                //各种判断
                this._game.network.call_leave_game();
                return true;
            };
            ZooStory.prototype.clear = function () {
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.off(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this._zooMapInfo = null;
            };
            ZooStory.prototype.update = function (diff) {
            };
            return ZooStory;
        }(gamecomponent.story.StoryBaiRenBase));
        story.ZooStory = ZooStory;
    })(story = gamezoo.story || (gamezoo.story = {}));
})(gamezoo || (gamezoo = {}));
//# sourceMappingURL=ZooStory.js.map