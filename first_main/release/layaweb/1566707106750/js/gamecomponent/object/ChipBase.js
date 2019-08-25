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
        /**
         * 筹码行为基类
         */
        var ChipBase = /** @class */ (function (_super) {
            __extends(ChipBase, _super);
            function ChipBase() {
                return _super.call(this) || this;
            }
            /**
            * 扔筹码
            */
            ChipBase.prototype.sendChip = function () {
                var _this = this;
                if (this.isCanClear)
                    return; //如果可以清理，则不接受任何缓动回调
                if (!this.pos)
                    return;
                Laya.Tween.clearAll(this.pos);
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, 500, Laya.Ease.circInOut, Handler.create(this, function () {
                    _this.isFinalPos = true;
                }));
            };
            return ChipBase;
        }(gamecomponent.object.ActionBase));
        object.ChipBase = ChipBase;
    })(object = gamecomponent.object || (gamecomponent.object = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=ChipBase.js.map