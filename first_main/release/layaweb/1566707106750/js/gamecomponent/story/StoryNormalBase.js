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
* 普通场剧情基类
*/
var gamecomponent;
(function (gamecomponent) {
    var story;
    (function (story) {
        var StoryNormalBase = /** @class */ (function (_super) {
            __extends(StoryNormalBase, _super);
            /**
             *
             * @param v
             * @param mapid 游戏id
             * @param mapLv 游戏等级
             * @param roomId 房间id
             * @param roomType 房间类型
             * @param dataSource 额外数据 需要加额外参数
             */
            function StoryNormalBase(v, mapid, mapLv) {
                var _this = _super.call(this, v, mapid, mapLv) || this;
                _this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, _this, _this.onOptHandler);
                return _this;
            }
            StoryNormalBase.prototype.init = function () {
                this.createofflineUnit();
            };
            StoryNormalBase.prototype.clearMapInfo = function () {
                if (this._mapinfo) {
                    this._game.setIsLockGame(false, false, "StoryBase.clearMapInfo");
                }
                _super.prototype.clearMapInfo.call(this);
            };
            StoryNormalBase.prototype.updateMapLv = function () {
                _super.prototype.updateMapLv.call(this);
                if (this.maplv) {
                    this._game.setIsLockGame(false, false, "StoryBase.updateMapLv");
                }
            };
            Object.defineProperty(StoryNormalBase.prototype, "isMatchGame", {
                set: function (v) {
                    if (v) {
                        if (!this.mapinfo) {
                            if (this._game.sceneObjectMgr.enterMap()) {
                                this._game.setIsLockGame(true, false, "StoryBase.isMatchGame");
                            }
                            logd("开始匹配");
                        }
                        else {
                            logd("=========================已经匹配了");
                        }
                    }
                    else {
                        if (this._status == Operation_Fields.OPRATE_TELEPORT_MAP_MATHCH_JOIN_SUCESS) { //加入成功才能取消
                            if (this._game.sceneObjectMgr.cancleMathch()) {
                                this._game.setIsLockGame(true, false, "StoryBase.isMatchGame");
                            }
                            logd("取消匹配");
                        }
                        else {
                            logd("等待取消匹配返回");
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            StoryNormalBase.prototype.onOptHandler = function (optcode, msg) {
                if (msg.type == Operation_Fields.OPRATE_TELEPORT) { //登录操作错误类型
                    switch (msg.reason) {
                        case Operation_Fields.OPRATE_TELEPORT_MAP_MATHCH_JOIN_SUCESS: // 地图匹配加入成功
                            this._game.setIsLockGame(false, false, "StoryBase.OPRATE_TELEPORT_MAP_MATHCH_JOIN_SUCESS");
                            this._status = msg.reason;
                            break;
                        case Operation_Fields.OPRATE_TELEPORT_MAP_MATHCH_CANCLE_SUCESS: // 地图匹配取消成功
                            this._game.setIsLockGame(false, false, "StoryBase.OPRATE_TELEPORT_MAP_MATHCH_CANCLE_SUCESS");
                            this._status = msg.reason;
                            break;
                    }
                }
            };
            StoryNormalBase.prototype.dispose = function () {
                this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this._last_maplv = null;
                this._offlineUnit = null;
                _super.prototype.dispose.call(this);
            };
            StoryNormalBase.prototype.clear = function () {
                this.destroyed = false;
            };
            return StoryNormalBase;
        }(gamecomponent.story.StoryBase));
        story.StoryNormalBase = StoryNormalBase;
    })(story = gamecomponent.story || (gamecomponent.story = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=StoryNormalBase.js.map