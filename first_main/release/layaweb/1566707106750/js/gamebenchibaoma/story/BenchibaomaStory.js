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
* name 奔驰宝马剧情
*/
var gamebenchibaoma;
(function (gamebenchibaoma) {
    var story;
    (function (story) {
        var BenchibaomaStory = /** @class */ (function (_super) {
            __extends(BenchibaomaStory, _super);
            function BenchibaomaStory(v, mapid, maplv) {
                var _this = _super.call(this, v, mapid, maplv) || this;
                _this._isReconnect = true;
                _this.init();
                return _this;
            }
            Object.defineProperty(BenchibaomaStory.prototype, "isReconnect", {
                get: function () {
                    return this._isReconnect;
                },
                set: function (v) {
                    this._isReconnect = v;
                },
                enumerable: true,
                configurable: true
            });
            BenchibaomaStory.prototype.init = function () {
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.on(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this.onIntoNewMap();
            };
            BenchibaomaStory.prototype.onIntoNewMap = function (info) {
                if (!info)
                    return;
                this.onMapInfoChange();
                this._game.uiRoot.closeAll();
                this._game.uiRoot.HUD.open(BenchibaomaPageDef.PAGE_BCBM_MAP);
            };
            BenchibaomaStory.prototype.onMapInfoChange = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._bcbmMapInfo = mapinfo;
                if (mapinfo) {
                    this.onUpdateState();
                }
            };
            BenchibaomaStory.prototype.onUpdateState = function () {
                if (!this._bcbmMapInfo)
                    return;
                var mapStatus = this._bcbmMapInfo.GetMapState();
                if (this._curStatus == mapStatus)
                    return;
                this._curStatus = mapStatus;
                switch (this._curStatus) {
                    case 0 /* PLAY_STATUS_NONE */: // 准备阶段
                        this.serverClose();
                        break;
                    case 1 /* PLAY_STATUS_GAMESTART */: // 游戏开始
                        break;
                    case 2 /* PLAY_STATUS_WASH_CARD */: // 洗牌阶段
                        break;
                    case 3 /* PLAY_STATUS_BET */: // 下注阶段
                        break;
                    case 4 /* PLAY_STATUS_STOP_BET */: // 停止下注阶段
                        break;
                    case 6 /* PLAY_STATUS_SHOW_CARD */: // 开牌阶段
                        break;
                    case 7 /* PLAY_STATUS_SETTLE */: // 结算阶段
                        break;
                    case 8 /* PLAY_STATUS_SHOW_INFO */: // 显示结算阶段
                        break;
                    case 9 /* PLAY_STATUS_RELAX */: // 休息阶段
                        break;
                }
            };
            BenchibaomaStory.prototype.enterMap = function () {
                //各种判断
                this._game.network.call_match_game(this._mapid, this.maplv);
                return true;
            };
            BenchibaomaStory.prototype.leavelMap = function () {
                //各种判断
                this._game.network.call_leave_game();
                return true;
            };
            BenchibaomaStory.prototype.clear = function () {
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.off(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this._bcbmMapInfo = null;
            };
            BenchibaomaStory.prototype.update = function (diff) {
            };
            /**房间场次信息*/
            BenchibaomaStory.ROOM_INFO_LEVEL = "ROOM_INFO_LEVEL";
            return BenchibaomaStory;
        }(gamecomponent.story.StoryBaiRenBase));
        story.BenchibaomaStory = BenchibaomaStory;
    })(story = gamebenchibaoma.story || (gamebenchibaoma.story = {}));
})(gamebenchibaoma || (gamebenchibaoma = {}));
//# sourceMappingURL=BenchibaomaStory.js.map