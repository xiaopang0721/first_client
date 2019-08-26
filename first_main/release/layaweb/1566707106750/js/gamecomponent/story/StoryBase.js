/**
* 剧情基类
*/
var gamecomponent;
(function (gamecomponent) {
    var story;
    (function (story) {
        var StoryBase = /** @class */ (function () {
            /**
             *
             * @param v
             * @param mapid 游戏id
             * @param mapLv 游戏等级
             */
            function StoryBase(v, mapid, mapLv) {
                this._game = v;
                this._mapid = mapid;
                this.maplv = mapLv;
                this.init();
            }
            Object.defineProperty(StoryBase.prototype, "isReConnected", {
                get: function () {
                    return this._isReConnected;
                },
                set: function (v) {
                    this._isReConnected = v;
                },
                enumerable: true,
                configurable: true
            });
            StoryBase.prototype.setMapinfo = function (mapf) {
                this._mapinfo = mapf;
                this.updateMapLv();
            };
            StoryBase.prototype.clearMapInfo = function () {
                if (this._mapinfo) {
                    this._game.sceneObjectMgr.off(MapInfo.EVENT_MAP_INT_MAP_BYTE, this, this.updateMapLv);
                    this._mapinfo = null;
                    this._game.sceneObjectMgr.event(SceneObjectMgr.EVENT_MAPINFO_CHANGE);
                }
            };
            StoryBase.prototype.updateMapLv = function () {
                var mapLv = this._mapinfo.GetMapLevel();
                this.maplv = this.maplv || mapLv;
                if (this.maplv) {
                    this._game.sceneObjectMgr.off(MapInfo.EVENT_MAP_INT_MAP_BYTE, this, this.updateMapLv);
                    this._game.sceneObjectMgr.event(SceneObjectMgr.EVENT_MAPINFO_CHANGE);
                }
                else {
                    this._game.sceneObjectMgr.on(MapInfo.EVENT_MAP_INT_MAP_BYTE, this, this.updateMapLv);
                }
            };
            Object.defineProperty(StoryBase.prototype, "mapUrl", {
                //地图对应资源
                get: function () {
                    return null;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(StoryBase.prototype, "mapid", {
                get: function () {
                    return this._mapid;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(StoryBase.prototype, "mapinfo", {
                get: function () {
                    return this._mapinfo;
                },
                enumerable: true,
                configurable: true
            });
            StoryBase.prototype.update = function (diff) {
            };
            // 清理
            StoryBase.prototype.dispose = function () {
                this._game.sceneObjectMgr.off(MapInfo.EVENT_MAP_INT_MAP_BYTE, this, this.updateMapLv);
                this.clear();
                this.clearMapInfo();
                this._mapid = null;
                this.maplv = null;
                Laya.timer.clearAll(this);
                Laya.Tween.clearAll(this);
                this._game.sceneObjectMgr.clearOfflineObject();
            };
            //视图对象创建
            StoryBase.prototype.inLook = function (obj, isFollow) {
                if (isFollow === void 0) { isFollow = false; }
                return null;
            };
            //更新视图对象
            StoryBase.prototype.updateInLook = function (obj) {
                return null;
            };
            return StoryBase;
        }());
        story.StoryBase = StoryBase;
    })(story = gamecomponent.story || (gamecomponent.story = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=StoryBase.js.map