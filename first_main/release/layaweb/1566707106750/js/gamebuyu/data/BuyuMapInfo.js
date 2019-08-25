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
var gamebuyu;
(function (gamebuyu) {
    var data;
    (function (data) {
        var BuyuMapInfo = /** @class */ (function (_super) {
            __extends(BuyuMapInfo, _super);
            function BuyuMapInfo(v) {
                var _this = _super.call(this, v) || this;
                _this._yclxTime = 0;
                _this._sceneObjectMgr = v;
                //更新完毕之后
                _this._after_update = _this.onUpdate;
                return _this;
            }
            Object.defineProperty(BuyuMapInfo.prototype, "yclxTime", {
                /**
                 * 鱼潮来袭时间
                 */
                get: function () {
                    return this._yclxTime;
                },
                enumerable: true,
                configurable: true
            });
            BuyuMapInfo.prototype.init = function () {
            };
            //当对象更新发生时
            BuyuMapInfo.prototype.onUpdate = function (flags, mask, strmask) {
                _super.prototype.onUpdate.call(this, flags, mask, strmask);
                var isNew = flags & core.obj.OBJ_OPT_NEW;
                // 鱼潮来袭
                if (isNew || mask.GetBit(MapField.MAP_INT_YU_CHAO_LAI_QI_TIME)) {
                    this._yclxTime = this.GetYuChaoLaiQiTime();
                    // logd("================= BuyuMapInfo.onUpdate " + this._yclxTime);
                    this._sceneObjectMgr.event(BuyuMapInfo.EVENT_FISH_EVENT);
                }
            };
            BuyuMapInfo.prototype.update = function (diff) {
            };
            //BOSS来袭
            BuyuMapInfo.EVENT_BOSS_EVENT = "BuyuMapInfo.EVENT_BOSS_EVENT";
            //鱼潮来袭
            BuyuMapInfo.EVENT_FISH_EVENT = "BuyuMapInfo.EVENT_FISH_EVENT";
            return BuyuMapInfo;
        }(gamecomponent.object.MapInfo));
        data.BuyuMapInfo = BuyuMapInfo;
    })(data = gamebuyu.data || (gamebuyu.data = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=BuyuMapInfo.js.map