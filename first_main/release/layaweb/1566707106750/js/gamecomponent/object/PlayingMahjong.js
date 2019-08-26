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
         * 扑克牌基类
         */
        var PlayingMahjong = /** @class */ (function (_super) {
            __extends(PlayingMahjong, _super);
            function PlayingMahjong(v) {
                return _super.call(this, v) || this;
            }
            PlayingMahjong.prototype.Init = function (v) {
                if (v < 1 || v > 40) {
                    throw "PlayingMahjong v < 1 || v > 40," + v;
                }
                this._val = v;
                this.Analyze();
            };
            PlayingMahjong.prototype.Analyze = function () {
                this._card_val = this._val % 10;
                if (this._card_val == 0)
                    this._card_val = 10;
                this._card_color = Math.floor(this._val / 10);
            };
            //获取牌号
            PlayingMahjong.prototype.GetVal = function () {
                return this._val;
            };
            return PlayingMahjong;
        }(gamecomponent.object.PlayingCard));
        object.PlayingMahjong = PlayingMahjong;
    })(object = gamecomponent.object || (gamecomponent.object = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=PlayingMahjong.js.map