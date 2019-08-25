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
        var PlayingCard = /** @class */ (function (_super) {
            __extends(PlayingCard, _super);
            function PlayingCard(v) {
                var _this = _super.call(this, v) || this;
                _this._val = 0;
                _this._card_val = 0;
                _this._card_color = 0;
                return _this;
            }
            PlayingCard.prototype.Init = function (v) {
                throw new Error("not init");
            };
            //获取牌号
            PlayingCard.prototype.GetVal = function () {
                return this._val + 1;
            };
            //获取牌值
            PlayingCard.prototype.GetCardVal = function () {
                return this._card_val;
            };
            //获取牌色
            PlayingCard.prototype.GetCardColor = function () {
                return this._card_color;
            };
            //比较单张牌大小
            PlayingCard.prototype.Compare = function (card, compare_color) {
                if (compare_color === void 0) { compare_color = false; }
                var result = Laya.MathUtil.sortBigFirst(this.GetCardVal(), card.GetCardVal());
                if (result == 0 && compare_color) {
                    result = Laya.MathUtil.sortBigFirst(this.GetCardColor(), card.GetCardColor());
                }
                return result;
            };
            return PlayingCard;
        }(gamecomponent.object.MapInfoLogObject));
        object.PlayingCard = PlayingCard;
    })(object = gamecomponent.object || (gamecomponent.object = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=PlayingCard.js.map