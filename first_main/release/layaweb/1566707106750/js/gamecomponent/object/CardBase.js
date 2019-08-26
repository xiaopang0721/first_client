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
* name 卡牌base
*/
var gamecomponent;
(function (gamecomponent) {
    var object;
    (function (object) {
        var CardBase = /** @class */ (function (_super) {
            __extends(CardBase, _super);
            function CardBase() {
                var _this = _super.call(this) || this;
                _this.time_interval = 500; //发牌or翻牌时长
                return _this;
            }
            CardBase.prototype.update = function (diff) {
            };
            /**
            * 翻牌
            */
            CardBase.prototype.fanpai = function () {
                var _this = this;
                var handle = Handler.create(this, function () {
                    if (_this.scaleX >= 0) {
                        _this.isShow = true;
                    }
                }, null, false);
                Laya.Tween.to(this, { scaleX: 1, update: handle }, this.time_interval, Laya.Ease.linearNone, Handler.create(this, function () {
                    handle.recover();
                    handle = null;
                }));
            };
            /**
            * 盖牌
            */
            CardBase.prototype.gaipai = function () {
                var _this = this;
                var handle = Handler.create(this, function () {
                    if (_this.scaleX < 0) {
                        _this.isShow = false;
                    }
                }, null, false);
                Laya.Tween.to(this, { scaleX: -1, update: handle }, this.time_interval, Laya.Ease.linearNone, Handler.create(this, function () {
                    handle.recover();
                    handle = null;
                }));
            };
            /**
             * 发牌
             */
            CardBase.prototype.fapai = function () {
                var _this = this;
                if (!this.targe_pos)
                    return;
                if (!this.pos)
                    return;
                Laya.Tween.clearAll(this.pos);
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval, null, Handler.create(this, function () {
                    _this.isFinalPos = true;
                }));
            };
            /**
             * 整理牌
             */
            CardBase.prototype.sort = function () {
            };
            CardBase.prototype.clear = function () {
                _super.prototype.clear.call(this);
            };
            return CardBase;
        }(gamecomponent.object.ActionBase));
        object.CardBase = CardBase;
    })(object = gamecomponent.object || (gamecomponent.object = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=CardBase.js.map