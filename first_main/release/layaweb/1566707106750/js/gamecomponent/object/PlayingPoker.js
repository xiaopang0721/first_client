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
         * 扑克牌-不能滑动选牌
         */
        var PlayingPoker = /** @class */ (function (_super) {
            __extends(PlayingPoker, _super);
            function PlayingPoker(v) {
                return _super.call(this, v) || this;
            }
            PlayingPoker.prototype.Init = function (v) {
                if (v < 1 || v > 54) {
                    throw "PlayingCard v < 1 || v > 54," + v;
                }
                this._val = v - 1;
                this.Analyze();
            };
            PlayingPoker.prototype.Analyze = function () {
                if (this._val == 52) {
                    this._card_val = 100;
                    this._card_color = 3;
                }
                else if (this._val == 53) {
                    this._card_val = 100;
                    this._card_color = 4;
                }
                else {
                    this._card_val = this._val % 13;
                    this._card_color = Math.floor(this._val / 13);
                }
            };
            /**
             * 两张牌交换位置
             */
            PlayingPoker.prototype.exchangeCard = function (card) {
                //重新赋值一下，其他属性不用改
                var val1 = this.GetVal();
                var val2 = card.GetVal();
                this.Init(val2);
                card.Init(val1);
            };
            return PlayingPoker;
        }(gamecomponent.object.PlayingCard));
        object.PlayingPoker = PlayingPoker;
    })(object = gamecomponent.object || (gamecomponent.object = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=PlayingPoker.js.map