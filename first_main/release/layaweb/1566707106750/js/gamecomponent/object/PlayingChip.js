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
         * 筹码数据基类
         */
        var PlayingChip = /** @class */ (function (_super) {
            __extends(PlayingChip, _super);
            function PlayingChip() {
                var _this = _super.call(this) || this;
                _this._type = 0;
                return _this;
            }
            //获取筹码
            PlayingChip.prototype.GetCardVal = function () {
                return this._val;
            };
            //获取筹码类型
            PlayingChip.prototype.GetCardType = function () {
                return this._type;
            };
            return PlayingChip;
        }(gamecomponent.object.ChipBase));
        object.PlayingChip = PlayingChip;
    })(object = gamecomponent.object || (gamecomponent.object = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=PlayingChip.js.map