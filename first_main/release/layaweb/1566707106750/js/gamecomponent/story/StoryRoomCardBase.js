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
* 房卡剧情基类
*/
var gamecomponent;
(function (gamecomponent) {
    var story;
    (function (story) {
        var StoryRoomCardBase = /** @class */ (function (_super) {
            __extends(StoryRoomCardBase, _super);
            /**
             *
             * @param v
             * @param mapid 游戏id
             * @param mapLv 游戏等级
             * @param roomId 房间id
             * @param roomType 房间类型
             * @param dataSource 额外数据 需要加额外参数
             */
            function StoryRoomCardBase(v, mapid, mapLv, dataSource) {
                var _this = _super.call(this, v, mapid, mapLv) || this;
                if (dataSource) {
                    _this.RoomID = dataSource.RoomID;
                    _this.RoomType = dataSource.RoomType;
                    _this.RoomRound = dataSource.RoomRound;
                    _this.PayType = dataSource.PayType;
                    _this.Agrs = dataSource.Agrs;
                }
                _this._game.sceneObjectMgr.on(MapInfo.EVENT_MAP_STR_CARD_ROOM_ID, _this, _this.onUpdateRoomId);
                _this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, _this, _this.onOptHandler);
                _this.init();
                return _this;
            }
            StoryRoomCardBase.prototype.onUpdateRoomId = function () {
                if (!this._mapinfo)
                    return;
                this.RoomID = this._mapinfo.roomId;
            };
            StoryRoomCardBase.prototype.createRoom = function () {
                //各种判断
                this._game.network.call_create_room(this._mapid, this.maplv, this.RoomRound, this.PayType, this.Agrs);
                this._game.setIsLockGame(true, false, "StoryRoomCardBase.createRoom");
                return true;
            };
            StoryRoomCardBase.prototype.joinRoom = function () {
                // 这边maplv当成房间号来用
                if (this.mapinfo)
                    return false;
                this._game.network.call_join_room(this._mapid, this.RoomID);
                this._game.setIsLockGame(true, false, "StoryRoomCardBase.joinRoom");
                return true;
            };
            StoryRoomCardBase.prototype.enterMap = function () {
                //各种判断
                if (this.mapinfo)
                    return false;
                if (this.RoomType == 1) {
                    return this.createRoom();
                }
                else if (this.RoomType == 2) {
                    return this.joinRoom();
                }
                return false;
            };
            StoryRoomCardBase.prototype.leavelMap = function () {
                //各种判断
                this._game.network.call_leave_game();
                return true;
            };
            StoryRoomCardBase.prototype.startRoomCardGame = function (guid, card_id) {
                if (WebConfig.server_close) {
                    this._game.sceneObjectMgr.leaveStory(true);
                    this._game.alert(StringU.substitute("为了您更好的游戏体验，服务器正在更新中。为避免造成不必要的损失，更新期间无法进入游戏，给您造成的不便我们深表歉意，感谢您的配合。"), function () {
                    }, function () {
                    }, true);
                    return;
                }
                this._game.network.call_start_roomcard_game(this._mapid, this.maplv, guid, card_id);
            };
            StoryRoomCardBase.prototype.endRoomCardGame = function (seatIndex, card_id) {
                this._game.network.call_end_roomcard_game(this._mapid, parseInt(this.RoomID), seatIndex, card_id);
            };
            // 是否房卡游戏里的房主
            StoryRoomCardBase.prototype.isCardRoomMaster = function () {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return false;
                return mainUnit.GetRoomMaster() == 1;
            };
            StoryRoomCardBase.prototype.onOptHandler = function (optcode, msg) {
                if (msg.type == Operation_Fields.OPRATE_TELEPORT) { //登录操作错误类型
                    switch (msg.reason) {
                        case Operation_Fields.OPRATE_TELEPORT_MAP_CREATE_ROOM_SUCCESS: // 地图创建房间成功
                            this._game.setIsLockGame(false, false, "StoryBase.OPRATE_TELEPORT_MAP_MATHCH_JOIN_SUCESS");
                            this._status = msg.reason;
                            break;
                        case Operation_Fields.OPRATE_TELEPORT_MAP_JOIN_ROOM_SUCCESS: // 地图加入房间成功
                            this._game.setIsLockGame(false, false, "StoryBase.OPRATE_TELEPORT_MAP_MATHCH_CANCLE_SUCESS");
                            this._status = msg.reason;
                            break;
                    }
                }
                else if (msg.type == Operation_Fields.OPRATE_CARDROOM) { //房卡操作错误类型
                    this._game.setIsLockGame(false, false, "StoryBase.OPRATE_TELEPORT_MAP_MATHCH_CANCLE_SUCESS");
                    switch (msg.reason) {
                        case Operation_Fields.OPRATE_CARDROOM_DISMISSED: // 房主解散房间
                            this._game.showTips("该房间已解散");
                            break;
                    }
                }
            };
            StoryRoomCardBase.prototype.dispose = function () {
                _super.prototype.dispose.call(this);
                this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this._game.sceneObjectMgr.off(MapInfo.EVENT_MAP_STR_CARD_ROOM_ID, this, this.onUpdateRoomId);
            };
            return StoryRoomCardBase;
        }(gamecomponent.story.StoryBase));
        story.StoryRoomCardBase = StoryRoomCardBase;
    })(story = gamecomponent.story || (gamecomponent.story = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=StoryRoomCardBase.js.map