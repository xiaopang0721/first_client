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
        var StoryFishBase = /** @class */ (function (_super) {
            __extends(StoryFishBase, _super);
            /**
             *
             * @param v
             * @param mapid 游戏id
             * @param mapLv 游戏等级
             * @param roomId 房间id
             * @param roomType 房间类型
             * @param dataSource 额外数据 需要加额外参数
             */
            function StoryFishBase(v, mapid, mapLv) {
                var _this = _super.call(this, v, mapid, mapLv) || this;
                _this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, _this, _this.onOptHandler);
                return _this;
            }
            StoryFishBase.prototype.onOptHandler = function (optcode, msg) {
                if (msg.type == Operation_Fields.OPRATE_TELEPORT) { //登录操作错误类型
                    switch (msg.reason) {
                        case Operation_Fields.OPRATE_TELEPORT_MAP_MATHCH_JOIN_SUCESS: // 地图匹配加入成功
                            this._game.setIsLockGame(true, false, "StoryBase.OPRATE_TELEPORT_MAP_MATHCH_JOIN_SUCESS");
                            break;
                    }
                }
            };
            StoryFishBase.prototype.dispose = function () {
                this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                _super.prototype.dispose.call(this);
            };
            return StoryFishBase;
        }(gamecomponent.story.StoryBase));
        story.StoryFishBase = StoryFishBase;
    })(story = gamecomponent.story || (gamecomponent.story = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=StoryFishBase.js.map