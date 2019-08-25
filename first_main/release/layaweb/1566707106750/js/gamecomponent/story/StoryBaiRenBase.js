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
* 百人场剧情基类
*/
var gamecomponent;
(function (gamecomponent) {
    var story;
    (function (story) {
        var StoryBaiRenBase = /** @class */ (function (_super) {
            __extends(StoryBaiRenBase, _super);
            /**
             * @param mapid 游戏id
             * @param mapLv 游戏等级
             */
            function StoryBaiRenBase(v, mapid, mapLv) {
                var _this = _super.call(this, v, mapid, mapLv) || this;
                _this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, _this, _this.onOptHandler);
                return _this;
            }
            StoryBaiRenBase.prototype.onOptHandler = function (optcode, msg) {
                if (msg.type == Operation_Fields.OPRATE_TELEPORT) { //登录操作错误类型
                    switch (msg.reason) {
                        case Operation_Fields.OPRATE_TELEPORT_MAP_MATHCH_JOIN_SUCESS: // 地图匹配加入成功
                            this._game.setIsLockGame(true, false, "StoryBase.OPRATE_TELEPORT_MAP_MATHCH_JOIN_SUCESS");
                            break;
                    }
                }
            };
            StoryBaiRenBase.prototype.serverClose = function () {
                if (!WebConfig.server_close)
                    return;
                this._game.sceneObjectMgr.leaveStory(true);
                this._game.alert(StringU.substitute("为了您更好的游戏体验，服务器正在更新中。为避免造成不必要的损失，更新期间无法进入游戏，给您造成的不便我们深表歉意，感谢您的配合。"), function () {
                }, function () {
                }, true);
            };
            StoryBaiRenBase.prototype.dispose = function () {
                this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                _super.prototype.dispose.call(this);
            };
            return StoryBaiRenBase;
        }(gamecomponent.story.StoryBase));
        story.StoryBaiRenBase = StoryBaiRenBase;
    })(story = gamecomponent.story || (gamecomponent.story = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=StoryBaiRenBase.js.map