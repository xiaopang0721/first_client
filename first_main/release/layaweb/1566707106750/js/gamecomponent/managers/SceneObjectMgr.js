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
* 场景对象管理器
*/
var gamecomponent;
(function (gamecomponent) {
    var managers;
    (function (managers) {
        var SceneObjectMgr = /** @class */ (function (_super) {
            __extends(SceneObjectMgr, _super);
            function SceneObjectMgr(v) {
                var _this = _super.call(this) || this;
                _this._game = v;
                _this._mapAssetInfo = new MapAssetInfo();
                _this._unitDic = {};
                return _this;
            }
            Object.defineProperty(SceneObjectMgr.prototype, "mapInfo", {
                /**
                 * 地图对象
                 */
                get: function () {
                    if (!this._story)
                        return null;
                    return this._story.mapinfo;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SceneObjectMgr.prototype, "unitDic", {
                get: function () {
                    return this._unitDic;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 通过位置获取精灵
             */
            SceneObjectMgr.prototype.getUnitByIdx = function (idx) {
                for (var key in this._unitDic) {
                    if (this._unitDic.hasOwnProperty(key)) {
                        var unit = this._unitDic[key];
                        if (unit && unit.GetIndex() == idx) {
                            return unit;
                        }
                    }
                }
                return null;
            };
            Object.defineProperty(SceneObjectMgr.prototype, "mapAssetInfo", {
                /**
                 * 地图信息
                 */
                get: function () {
                    return this._mapAssetInfo;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SceneObjectMgr.prototype, "game", {
                get: function () {
                    return this._game;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SceneObjectMgr.prototype, "sceneGame", {
                get: function () {
                    return this._game.sceneGame;
                },
                enumerable: true,
                configurable: true
            });
            SceneObjectMgr.prototype.update = function (diff) {
                var _this = this;
                this._story && this._story.update(diff);
                this.ForEachObject(function (guidObject) {
                    guidObject && guidObject.update && guidObject.update(diff);
                });
                if (this._story) {
                    //捕鱼 且地图没下来 不进
                    if (this._story instanceof StoryFishBase && !this._story.mapinfo)
                        return;
                    //房卡 且地图没下来 不进
                    if (this._story instanceof StoryRoomCardBase && !this._story.mapinfo)
                        return;
                    //百人场 且地图没下来 不进
                    if (this._story instanceof StoryBaiRenBase && !this._story.mapinfo)
                        return;
                    var newMapid = this._story.mapid;
                    if (newMapid && newMapid != this._mapid) {
                        this._mapid = newMapid;
                        //加载素材信息
                        this._mapAssetInfo.onLoadedComplete = function () {
                            //触发传送事件
                            _this.ForEachObject(function (obj) {
                            });
                            _this.event(SceneObjectMgr.EVENT_LOAD_MAP, _this._mapAssetInfo);
                        };
                        this._mapAssetInfo.load(newMapid, this._story.mapUrl, this._story.maplv);
                    }
                }
            };
            // 创建对象
            SceneObjectMgr.prototype.CreateObject = function (k, u) {
                // logd("SceneObjectMgr:CreateObject guid:" + k + ", oid:" + u);
                //地图这块要修改要知会下
                var obj;
                var prefix = getPrefix(k);
                switch (prefix) {
                    case GlobalDef.TYPE_MAP:
                        logd("create map info", k, u);
                        var startIdx = k.indexOf(".");
                        var endIdx = k.lastIndexOf("_");
                        var map_id = k.substr(startIdx + 1, endIdx - 2);
                        var mapid = map_id.substr(0, 1).toUpperCase() + map_id.substr(1, map_id.length);
                        var comm = StringU.substitute("new game{0}.data.{1}MapInfo({2})", map_id, mapid, "this");
                        var mapinfo = eval(comm);
                        var isNew = !this._story;
                        this.intoStory(map_id, mapinfo.GetMapLevel(), undefined, undefined, true);
                        this._story.isReConnected = isNew || WebConfig.isConnected;
                        this._story.setMapinfo(mapinfo);
                        obj = mapinfo;
                        break;
                    case GlobalDef.TYPE_UNIT:
                        obj = new Unit(this);
                        this._unitDic[k] = obj;
                        this.event(SceneObjectMgr.EVENT_ADD_UNIT, obj);
                        break;
                    case GlobalDef.TYPE_PLAYER:
                        obj = new PlayerData(this);
                        this.setMainPlayer(obj);
                        break;
                    case "globalobject":
                        obj = new GlobalData(this._game);
                        this.setGloabel(obj);
                        break;
                    default:
                        obj = new GuidObject();
                        break;
                }
                obj.guid = k;
                obj.oid = u;
                this.AttachObject(obj);
                return obj;
            };
            SceneObjectMgr.prototype.ReleaseObject = function (o) {
                if (!o)
                    return;
                // logd("SceneObjectMgr:ReleaseObject guid:" + k);
                if (this._story && o == this._story.mapinfo) {
                    this._story.clearMapInfo();
                    if (this._story instanceof StoryNormalBase) {
                        this._story.destroyed && this.clearStory();
                    }
                    else {
                        this.clearStory();
                    }
                }
                else if (o == this._mainPlayer) {
                    this.setMainPlayer(null);
                }
                if (o instanceof Unit) {
                    delete this._unitDic[o.guid];
                    this.event(SceneObjectMgr.EVENT_REMOVE_UNIT, o);
                }
                //事件触发
                this.event(SceneObjectMgr.__DELETE_OBJECT, o);
                _super.prototype.ReleaseObject.call(this, o);
            };
            /**
             * 通过oid查找对象
             * @param oid
             */
            SceneObjectMgr.prototype.findByOid = function (oid) {
                return this.Get(this._u_2_guid[oid]);
            };
            Object.defineProperty(SceneObjectMgr.prototype, "mainPlayer", {
                /**
                 * 主玩家对象
                 */
                get: function () {
                    return this._mainPlayer;
                },
                enumerable: true,
                configurable: true
            });
            // 设置主玩家对象
            SceneObjectMgr.prototype.setMainPlayer = function (v) {
                this._mainPlayer = v;
                v && logd("setMainPlayer");
                this.event(SceneObjectMgr.___MAIN_PLAYER_CHANGE, v);
            };
            Object.defineProperty(SceneObjectMgr.prototype, "gloabel", {
                /**
                 * 主玩家对象
                 */
                get: function () {
                    return this._gloabel;
                },
                enumerable: true,
                configurable: true
            });
            // 设置主玩家对象
            SceneObjectMgr.prototype.setGloabel = function (v) {
                this._gloabel = v;
            };
            Object.defineProperty(SceneObjectMgr.prototype, "mainUnitGuid", {
                /**
                 * 主玩家精灵guid
                 */
                get: function () {
                    return this._mainUnitGuid;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SceneObjectMgr.prototype, "mainUnit", {
                /**
                 * 主玩家精灵对象
                 */
                get: function () {
                    return this._mainUnit;
                },
                enumerable: true,
                configurable: true
            });
            // 设置主玩家精灵对象
            SceneObjectMgr.prototype.setMainUnit = function (v) {
                this._mainUnit = v;
                this.event(SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE, v);
            };
            /**
             * 当主玩家加入时
             * @param guid
             */
            SceneObjectMgr.prototype.onMainUnitJoin = function (guid) {
                this._mainUnitGuid = guid;
                var mainUnit = this.Get(guid);
                this.setMainUnit(mainUnit);
            };
            // 清理
            SceneObjectMgr.prototype.clear = function () {
                this.clearObjs();
                this.clearStory(true);
                this._mainPlayer = null;
            };
            // 清理对象	
            SceneObjectMgr.prototype.clearObjs = function () {
                var _this = this;
                this.ForEachObject(function (other) {
                    //事件触发
                    _this.event(SceneObjectMgr.__DELETE_OBJECT, other);
                });
                this._unitDic = {};
                _super.prototype.clearObjs.call(this);
            };
            Object.defineProperty(SceneObjectMgr.prototype, "story", {
                /******************************剧情对应接口*************************************** */
                /**
                 * 剧情信息
                 */
                get: function () {
                    return this._story;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 进入剧情
             * @param mapid 地图id枚举 BrniuniuPageDef.GAME_NAME
             * @param maplv 地图等级枚举 Web_operation_fields.GAME_ROOM_CONFIG_BRNIUNIU_1
             * @param enterMap 是否直接进入地图
             */
            SceneObjectMgr.prototype.intoStory = function (mapid, maplv, enterMap, dataSource, fource) {
                if (!fource && WebConfig.isConnected) {
                    this._game.showTips("正在断线重连中...");
                    return; //你需要断线重连
                }
                if (WebConfig.server_close) {
                    this._game.alert(StringU.substitute("为了您更好的游戏体验，服务器正在更新中。为避免造成不必要的损失，更新期间无法进入游戏，给您造成的不便我们深表歉意，感谢您的配合。"), function () {
                    }, function () {
                    }, true, window["DatingPageDef"].ui_dating_tongyong + "btn_qd.png");
                    return; //服务器更新重启
                }
                if (this._story)
                    return;
                var map_id = mapid.substr(0, 1).toUpperCase() + mapid.substr(1, mapid.length);
                if (fource) { //断线重连进来的
                    if (WebConfig.game_type == Web_operation_fields.GAME_ROOM_CONFIG_CARD_ROOM) { //房卡类型
                        var comm = StringU.substitute("new game{0}.story.{1}CardRoomStory({2},{3},{4},{5})", map_id.toLocaleLowerCase(), map_id, "this._game", "mapid", "maplv", "dataSource");
                        this._story = eval(comm);
                    }
                    else {
                        var comm = StringU.substitute("new game{0}.story.{1}Story({2},{3},{4})", map_id.toLocaleLowerCase(), map_id, "this._game", "mapid", "maplv");
                        this._story = eval(comm);
                    }
                }
                else { //手动点进去的
                    var pageDef = getPageDef(mapid);
                    if (WebConfig.hudgametype == window["DatingPageDef"].TYPE_CARD && !pageDef["__enterMapLv"]) { //房卡类型
                        var comm = StringU.substitute("new game{0}.story.{1}CardRoomStory({2},{3},{4},{5})", map_id.toLocaleLowerCase(), map_id, "this._game", "mapid", "maplv", "dataSource");
                        this._story = eval(comm);
                    }
                    else {
                        var comm = StringU.substitute("new game{0}.story.{1}Story({2},{3},{4})", map_id.toLocaleLowerCase(), map_id, "this._game", "mapid", "maplv");
                        this._story = eval(comm);
                    }
                }
                enterMap && this.enterMap();
            };
            SceneObjectMgr.prototype.enterMap = function () {
                if (this._story) {
                    if (!this._story.mapinfo) //没有mapinfo 才需要发协议
                     {
                        if (this._story.enterMap()) {
                            return true;
                        }
                    }
                }
                return false;
            };
            //取消匹配
            SceneObjectMgr.prototype.cancleMathch = function () {
                if (this._story) {
                    if (!this._story.mapinfo) {
                        this._game.network.call_cancel_match();
                        return true;
                    }
                }
                return false;
            };
            /**
             * 离开地图
             * @param needStroy 是否离开场景 (有些可能还需要在场景 里面)
             */
            SceneObjectMgr.prototype.leaveStory = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (this._story) {
                    if (args && args.length && this._story instanceof gamecomponent.story.StoryNormalBase) {
                        this._story.destroyed = args[0];
                    }
                    if (this._story.mapinfo) {
                        if (this._story.leavelMap()) {
                            this._game.setIsLockGame(true, false, "SceneObjectMgr.leaveStory");
                        }
                    }
                    else {
                        this.clearStory();
                    }
                }
            };
            /**
            * 改变剧情
            * @param mapid 地图id枚举 BrniuniuPageDef.GAME_NAME
            * @param maplv 地图等级枚举 Web_operation_fields.GAME_ROOM_CONFIG_BRNIUNIU_1
            * @param enterMap 是否直接进入地图
            */
            SceneObjectMgr.prototype.changeStory = function (callBack) {
                //如果当前有剧情
                this.leaveStory(true);
                this._changeStoryCallBack = function () {
                    callBack && callBack();
                    callBack = null;
                };
            };
            //离开场景 
            SceneObjectMgr.prototype.clearStory = function (force) {
                if (!this._story)
                    return;
                //断线强制清理
                if (force || !this._story.mapinfo) { //mapinfo还在 不能清剧情 
                    var old_mapid = this._story.mapid;
                    this._mapid = "";
                    this._story.dispose();
                    this._story = null;
                    this.event(SceneObjectMgr.EVENT_LOAD_MAP, old_mapid);
                    //游戏退出计数
                    this._game.sceneGame.ExitGmeTimes++;
                    if (force) {
                        this._changeStoryCallBack = null;
                    }
                    else {
                        this.CallchangeStory();
                    }
                }
            };
            SceneObjectMgr.prototype.CallchangeStory = function () {
                if (WebConfig.isConnected)
                    return;
                if (this._changeStoryCallBack != null) //需要就回调
                 {
                    this._changeStoryCallBack();
                    this._changeStoryCallBack = null;
                }
            };
            // 创建假unit对象
            SceneObjectMgr.prototype.createOfflineObject = function (prefix, myObject) {
                // if (object && !(object instanceof GuidObject)) {
                //     throw new Error("对象类型不对")
                // }
                SceneObjectMgr._offlineLastUID--;
                var obj;
                var uid = SceneObjectMgr._offlineLastUID;
                var guid = makeGuid(prefix, uid);
                if (myObject) {
                    obj = new myObject(this);
                    obj.guid = guid;
                    obj.oid = uid;
                    this.AttachObject(obj);
                    return obj;
                }
                else {
                    obj = this.CreateObject(guid, uid);
                }
                return obj;
            };
            /**
             *  清理假unit对象
             * @param obj 传单个 不传 清所有
             */
            SceneObjectMgr.prototype.clearOfflineObject = function (obj) {
                var _this = this;
                if (obj && !(obj instanceof GuidObject)) {
                    throw new Error("对象类型不对");
                }
                if (obj) {
                    if (obj.oid >= SceneObjectMgr._offlineLastUID) {
                        this.ReleaseObject(obj);
                    }
                    else {
                        throw new Error("不是假对象你不能清");
                    }
                }
                else {
                    this.ForEachObject(function (obj) {
                        if (obj instanceof GuidObject) {
                            obj.oid >= SceneObjectMgr._offlineLastUID && _this.ReleaseObject(obj);
                        }
                    });
                }
            };
            /***************自定义事件******************* */
            SceneObjectMgr.EVENT_OPRATE_SUCESS = "SceneObjectMgr.EVENT_OPRATE_SUCESS";
            /*************专用勿用*********** */
            //对象被移除
            SceneObjectMgr.__DELETE_OBJECT = "SceneObjectMgr.__DELETE_OBJECT";
            //主玩家有变化 防止监听错误
            SceneObjectMgr.___MAIN_PLAYER_CHANGE = "SceneObjectMgr.___MAIN_PLAYER_CHANGE";
            //mapinfo游戏id
            SceneObjectMgr.__EVENT_PLAYER_INFO_GAME_ID = "SceneObjectMgr.__EVENT_PLAYER_INFO_GAME_ID";
            //房卡类型变更
            SceneObjectMgr.__EVENT_PLAYER_CARDROOM_CHUANGE = "SceneObjectMgr.__EVENT_PLAYER_CARDROOM_CHUANGE";
            /***************场景事件******************** */
            //地图传送
            SceneObjectMgr.EVENT_LOAD_MAP = "SceneObjectMgr.EVENT_LOAD_MAP";
            //地图精灵变更
            SceneObjectMgr.EVENT_UNIT_CHANGE = "SceneObjectMgr.EVENT_UNIT_CHANGE";
            //地图精灵行为有变化
            SceneObjectMgr.EVENT_UNIT_ACTION = "SceneObjectMgr.EVENT_UNIT_ACTION";
            //地图精灵金币有变化
            SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE = "SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE";
            //地图精灵祈福时间有变化
            SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE = "SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE";
            //mapinfo改变
            SceneObjectMgr.EVENT_MAPINFO_CHANGE = "SceneObjectMgr.EVENT_MAPINFO_CHANGE";
            //主玩家更新
            SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE = "SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE";
            //游戏列表变更
            SceneObjectMgr.EVENT_GAMELIST_UPDATE = "SceneObjectMgr.EVENT_GAMELIST_UPDATE";
            //主玩家精灵有变化
            SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE = "SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE";
            //精灵信息变化
            SceneObjectMgr.EVENT_ADD_UNIT = "SceneObjectMgr.EVENT_ADD_UNIT";
            //移除精灵
            SceneObjectMgr.EVENT_REMOVE_UNIT = "SceneObjectMgr.EVENT_REMOVE_UNIT";
            //德州带入金币变化
            SceneObjectMgr.EVENT_DEZHOU_MONEY_UPDATE = "SceneObjectMgr.EVENT_DEZHOU_MONEY_UPDATE";
            //vip信息变更
            SceneObjectMgr.EVENT_VIP_INFO_UPDATE = "SceneObjectMgr.EVENT_VIP_INFO_UPDATE";
            /********************************************************************* */
            /********************************************************************* */
            // 客户端模拟的对象uid
            SceneObjectMgr._offlineLastUID = 4294967295;
            return SceneObjectMgr;
        }(core.obj.GuidObjectTable));
        managers.SceneObjectMgr = SceneObjectMgr;
    })(managers = gamecomponent.managers || (gamecomponent.managers = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=SceneObjectMgr.js.map