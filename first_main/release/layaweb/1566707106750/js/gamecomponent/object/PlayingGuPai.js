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
         * 骨牌基类
         */
        var PlayingGuPai = /** @class */ (function (_super) {
            __extends(PlayingGuPai, _super);
            function PlayingGuPai(v) {
                var _this = _super.call(this, v) || this;
                _this._card_config = [12, 24, 23, 14, 25, 34, 26, 35, 36, 45, 15, 16, 46, 56, 22, 33, 55, 13, 44, 11, 66];
                return _this;
            }
            PlayingGuPai.prototype.Init = function (v) {
                if (v < 1 || v > 32) {
                    throw "PlayingGuPai v < 1 || v > 32," + v;
                }
                this._val = v - 1;
                this.Analyze();
            };
            PlayingGuPai.prototype.Analyze = function () {
                var val = this._val;
                if (val > 20) {
                    val = this._val - 11;
                }
                this._card_val = this._card_config[val];
            };
            return PlayingGuPai;
        }(gamecomponent.object.PlayingCard));
        object.PlayingGuPai = PlayingGuPai;
    })(object = gamecomponent.object || (gamecomponent.object = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=PlayingGuPai.js.map