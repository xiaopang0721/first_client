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
* name
*/
var gamezjh;
(function (gamezjh) {
    var data;
    (function (data) {
        var ZjhChip = /** @class */ (function (_super) {
            __extends(ZjhChip, _super);
            function ZjhChip() {
                var _this = _super.call(this) || this;
                _this._chipPos = [[240, 650], [1200, 473], [1200, 276], [80, 276], [80, 473]]; //筹码位置
                return _this;
            }
            ZjhChip.prototype.setData = function (posId, type, value, index) {
                this.size = 0.5;
                this._PlayerIndex = posId;
                this._type = type;
                this.sortScore = -index;
                this._val = value.toString();
                this.rotateAngle = MathU.randomRange(0, 360);
            };
            ZjhChip.prototype.sendChip = function () {
                var posX = MathU.randomPointInCicle(new Vector2(640, 360), 0, 210).x;
                var posY = MathU.randomPointInCicle(new Vector2(640, 360), 0, 60).y;
                this.pos = new Vector2(this._chipPos[this._PlayerIndex][0], this._chipPos[this._PlayerIndex][1]);
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.targe_pos.x = posX;
                this.targe_pos.y = posY;
                if (!this.pos)
                    return;
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, 300, Laya.Ease.circOut);
            };
            ZjhChip.prototype.flyChip = function (index) {
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.targe_pos.x = this._chipPos[index][0];
                this.targe_pos.y = this._chipPos[index][1];
                if (!this.pos)
                    return;
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, 1000, Laya.Ease.circOut);
            };
            ZjhChip.prototype.drawChip = function () {
                var posX = MathU.randomPointInCicle(new Vector2(640, 360), 0, 210).x;
                var posY = MathU.randomPointInCicle(new Vector2(640, 360), 0, 60).y;
                this.pos = new Vector2(this._chipPos[this._PlayerIndex][0], this._chipPos[this._PlayerIndex][1]);
                this.pos.x = posX;
                this.pos.y = posY;
            };
            return ZjhChip;
        }(gamecomponent.object.PlayingChip));
        data.ZjhChip = ZjhChip;
    })(data = gamezjh.data || (gamezjh.data = {}));
})(gamezjh || (gamezjh = {}));
//# sourceMappingURL=ZjhChip.js.map