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
var gamecomponent;
(function (gamecomponent) {
    var object;
    (function (object) {
        var MapInfo = /** @class */ (function (_super) {
            __extends(MapInfo, _super);
            function MapInfo(v) {
                var _this = _super.call(this) || this;
                _this._roomId = "null";
                _this._sceneObjectMgr = v;
                //更新完毕之后
                _this._after_update = _this.onUpdate;
                return _this;
            }
            Object.defineProperty(MapInfo.prototype, "mapState", {
                get: function () {
                    return this._mapState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MapInfo.prototype, "id", {
                get: function () {
                    return this._id;
                },
                set: function (v) {
                    this._id = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MapInfo.prototype, "width", {
                get: function () {
                    return this._width;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MapInfo.prototype, "height", {
                get: function () {
                    return this._height;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MapInfo.prototype, "mapEndTime", {
                get: function () {
                    return this._mapEndTime;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MapInfo.prototype, "roomId", {
                /**
                 * 房间id
                 */
                get: function () {
                    return this._roomId;
                },
                enumerable: true,
                configurable: true
            });
            //当对象更新发生时
            MapInfo.prototype.onUpdate = function (flags, mask, strmask) {
                var isNew = flags & core.obj.OBJ_OPT_NEW;
                if (isNew || strmask.GetBit(MapField.MAP_STR_INSTANCE_I_D)) {
                    this._id = this.GetMapID();
                }
                if (isNew || mask.GetBit(MapField.MAP_STR_CARD_ROOM_ID)) {
                    var roomId = this.GetCardRoomId();
                    if (this._roomId != roomId) {
                        this._roomId = roomId;
                        this._sceneObjectMgr.event(MapInfo.EVENT_MAP_STR_CARD_ROOM_ID);
                        roomId && this._sceneObjectMgr.event(SceneObjectMgr.__EVENT_PLAYER_CARDROOM_CHUANGE);
                    }
                }
                if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
                    this._sceneObjectMgr.event(MapInfo.EVENT_MAP_INT_MAP_BYTE);
                    var mapState = this.GetMapState();
                    if (this._mapState != mapState) {
                        this._mapState = mapState;
                        this._sceneObjectMgr.event(MapInfo.EVENT_STATUS_CHECK);
                    }
                }
            };
            MapInfo.prototype.update = function (diff) {
            };
            //地图状态变更
            MapInfo.EVENT_STATUS_CHECK = "MapInfo.EVENT_STATUS_CHECK";
            MapInfo.EVENT_MAP_INT_MAP_BYTE = "MapInfo.MAP_INT_MAP_BYTE";
            MapInfo.EVENT_MAP_STR_CARD_ROOM_ID = "MapInfo.MAP_STR_CARD_ROOM_ID";
            return MapInfo;
        }(game.object.MapField));
        object.MapInfo = MapInfo;
        var MapInfoT = /** @class */ (function (_super) {
            __extends(MapInfoT, _super);
            function MapInfoT(v, create_card_fun) {
                var _this = _super.call(this, v) || this;
                _this._sceneObjectMgr = v;
                _this._battleInfoMgr = new object.BattleInfoMgr(_this, create_card_fun);
                //更新完毕之后
                _this._after_update = _this.onUpdate;
                return _this;
            }
            Object.defineProperty(MapInfoT.prototype, "battleInfoMgr", {
                get: function () {
                    return this._battleInfoMgr;
                },
                enumerable: true,
                configurable: true
            });
            //当对象更新发生时
            MapInfoT.prototype.onUpdate = function (flags, mask, strmask) {
                _super.prototype.onUpdate.call(this, flags, mask, strmask);
                var isNew = flags & core.obj.OBJ_OPT_NEW;
                if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
                    this._battleInfoMgr.OnUpdate();
                }
            };
            //战斗日志转成字符串
            MapInfoT.prototype.getBattleInfoToString = function () {
                throw "not implement";
            };
            return MapInfoT;
        }(MapInfo));
        object.MapInfoT = MapInfoT;
    })(object = gamecomponent.object || (gamecomponent.object = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=MapInfo.js.map