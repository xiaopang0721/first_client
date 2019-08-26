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
* name 牛牛剧情
*/
var gametoubao;
(function (gametoubao) {
    var story;
    (function (story) {
        var ToubaoStory = /** @class */ (function (_super) {
            __extends(ToubaoStory, _super);
            function ToubaoStory(v, mapid, maplv) {
                var _this = _super.call(this, v, mapid, maplv) || this;
                _this._openCards = [];
                //战斗结构体 出牌
                _this._index = 0;
                _this.init();
                return _this;
            }
            Object.defineProperty(ToubaoStory.prototype, "toubaoMgr", {
                get: function () {
                    return this._toubaoMgr;
                },
                enumerable: true,
                configurable: true
            });
            ToubaoStory.prototype.init = function () {
                if (!this._toubaoMgr) {
                    this._toubaoMgr = new ToubaoMgr(this._game);
                }
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.on(ToubaoMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.on(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this.onIntoNewMap();
            };
            ToubaoStory.prototype.onIntoNewMap = function (info) {
                if (!info)
                    return;
                this.onMapInfoChange();
                this._game.uiRoot.closeAll();
                this._game.uiRoot.HUD.open(ToubaoPageDef.PAGE_TOUBAO_MAP);
            };
            ToubaoStory.prototype.onMapInfoChange = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._niuMapInfo = mapinfo;
                if (mapinfo) {
                    this.onUpdateState();
                    this.onUpdateBattle();
                }
            };
            ToubaoStory.prototype.onUpdateState = function () {
                if (!this._niuMapInfo)
                    return;
                var mapStatus = this._niuMapInfo.GetMapState();
                if (this._curStatus == mapStatus)
                    return;
                this._curStatus = mapStatus;
                switch (this._curStatus) {
                    case ToubaoStory.PLAY_STATUS_NONE: // 准备阶段      
                        this.serverClose();
                        break;
                    case ToubaoStory.PLAY_STATUS_GAMESTART: // 游戏开始
                        break;
                    case ToubaoStory.PLAY_STATUS_PUSH_CARD: // 发牌阶段
                        break;
                    case ToubaoStory.PLAY_STATUS_BET: // 下注阶段
                        break;
                    case ToubaoStory.PLAY_STATUS_STOP_BET: // 停止下注阶段
                        break;
                    case ToubaoStory.PLAY_STATUS_SHOW_CARD: // 开牌阶段
                        break;
                    case ToubaoStory.PLAY_STATUS_SETTLE: // 结算阶段
                        break;
                    case ToubaoStory.PLAY_STATUS_SHOW_INFO: // 显示结算信息阶段
                        break;
                    case ToubaoStory.PLAY_STATUS_RELAX: // 休息阶段
                        break;
                }
            };
            ToubaoStory.prototype.onUpdateBattle = function () {
                if (!this._niuMapInfo)
                    return;
                var battleInfoMgr = this._niuMapInfo.battleInfoMgr;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var info = battleInfoMgr.info[i];
                }
            };
            ToubaoStory.prototype.createofflineUnit = function () {
                //创建假的地图和精灵
                var unitOffline = new UnitOffline(this._game.sceneObjectMgr);
                if (this._game.sceneObjectMgr.mainPlayer) {
                    unitOffline.SetStr(UnitField.UNIT_STR_NAME, this._game.sceneObjectMgr.mainPlayer.playerInfo.nickname);
                    unitOffline.SetDouble(UnitField.UNIT_INT_MONEY, this._game.sceneObjectMgr.mainPlayer.playerInfo.money);
                    unitOffline.SetUInt32(UnitField.UNIT_INT_QI_FU_END_TIME, this._game.sceneObjectMgr.mainPlayer.playerInfo.qifu_endtime);
                }
                unitOffline.SetUInt16(UnitField.UNIT_INT_UINT16, 0, 1);
            };
            ToubaoStory.prototype.enterMap = function () {
                //各种判断
                this._game.network.call_match_game(this._mapid, this.maplv);
                return true;
            };
            ToubaoStory.prototype.leavelMap = function () {
                //各种判断
                this._game.network.call_leave_game();
                return true;
            };
            ToubaoStory.prototype.clear = function () {
                this._game.sceneObjectMgr.off(ToubaoMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.off(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                if (this._toubaoMgr) {
                    this._toubaoMgr.clear();
                    this._toubaoMgr = null;
                }
            };
            ToubaoStory.prototype.update = function (diff) {
            };
            ToubaoStory.PLAY_STATUS_NONE = 0; // 准备阶段
            ToubaoStory.PLAY_STATUS_GAMESTART = 1; // 游戏开始
            ToubaoStory.PLAY_STATUS_PUSH_CARD = 2; // 发牌阶段
            ToubaoStory.PLAY_STATUS_BET = 3; // 下注阶段
            ToubaoStory.PLAY_STATUS_STOP_BET = 4; // 停止下注阶段
            ToubaoStory.PLAY_STATUS_SHOW_CARD = 5; // 开牌阶段
            ToubaoStory.PLAY_STATUS_SETTLE = 6; // 结算阶段
            ToubaoStory.PLAY_STATUS_SHOW_INFO = 7; // 显示结算信息阶段
            ToubaoStory.PLAY_STATUS_RELAX = 8; // 休息阶段
            /**房间场次信息*/
            ToubaoStory.ROOM_INFO_LEVEL = "ROOM_INFO_LEVEL";
            return ToubaoStory;
        }(gamecomponent.story.StoryBaiRenBase));
        story.ToubaoStory = ToubaoStory;
    })(story = gametoubao.story || (gametoubao.story = {}));
})(gametoubao || (gametoubao = {}));
//# sourceMappingURL=ToubaoStory.js.map