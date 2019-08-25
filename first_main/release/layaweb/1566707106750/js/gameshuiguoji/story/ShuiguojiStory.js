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
* name 水果机剧情
*/
var gameshuiguoji;
(function (gameshuiguoji) {
    var story;
    (function (story) {
        var ShuiguojiStory = /** @class */ (function (_super) {
            __extends(ShuiguojiStory, _super);
            function ShuiguojiStory(v, mapid, maplv) {
                var _this = _super.call(this, v, mapid, maplv) || this;
                _this.init();
                return _this;
            }
            ShuiguojiStory.prototype.init = function () {
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this.onIntoNewMap();
            };
            ShuiguojiStory.prototype.onIntoNewMap = function (info) {
                if (!info)
                    return;
                this.onMapInfoChange();
                this._game.uiRoot.closeAll();
                this._game.uiRoot.HUD.open(ShuiguojiPageDef.PAGE_SHUIGUOJI_MAP);
            };
            ShuiguojiStory.prototype.onMapInfoChange = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                if (mapinfo) {
                    this._sgjMapInfo = mapinfo;
                    this._sgjMapInfo.on(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                    this.onUpdateState();
                }
            };
            ShuiguojiStory.prototype.onUpdateState = function () {
            };
            ShuiguojiStory.prototype.createofflineUnit = function () {
            };
            ShuiguojiStory.prototype.enterMap = function () {
                //各种判断
                this._game.network.call_match_game(this._mapid, this.maplv);
                return true;
            };
            ShuiguojiStory.prototype.leavelMap = function () {
                //各种判断
                this._game.network.call_leave_game();
                return true;
            };
            ShuiguojiStory.prototype.removeListen = function () {
                if (this._sgjMapInfo) {
                    this._sgjMapInfo.off(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                    this._sgjMapInfo = null;
                }
            };
            ShuiguojiStory.prototype.clear = function () {
                this.removeListen();
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.uiRoot.general.close(ShuiguojiPageDef.PAGE_SHUIGUOJI_MAP);
            };
            ShuiguojiStory.prototype.update = function (diff) {
            };
            return ShuiguojiStory;
        }(gamecomponent.story.StoryNormalBase));
        story.ShuiguojiStory = ShuiguojiStory;
    })(story = gameshuiguoji.story || (gameshuiguoji.story = {}));
})(gameshuiguoji || (gameshuiguoji = {}));
//# sourceMappingURL=ShuiguojiStory.js.map