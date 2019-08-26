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
var gameebgang;
(function (gameebgang) {
    var data;
    (function (data) {
        var EBGangChip = /** @class */ (function (_super) {
            __extends(EBGangChip, _super);
            function EBGangChip() {
                var _this = _super.call(this) || this;
                //筹码起始位置(主玩家，座位0，座位1，座位2)  
                _this._chipStart = [[450, 620, 70], [1190, 350, 70], [770, 90, 70], [70, 320, 70]];
                _this._chipEnd = [650, 340]; //筹码终点位置  只需要一个中心点
                _this._radius = 110; // 圆的半径
                return _this;
            }
            //初始位置，终点位置，筹码类型，筹码大小，筹码层级
            EBGangChip.prototype.setData = function (startIdx, targetIdx, type, value, index, unitIndex) {
                this.size = 0.4;
                this.sortScore = 999 - index;
                this.pos = new Vector2(this._chipStart[startIdx][0], this._chipStart[startIdx][1]);
                this._val = value.toString();
                this._type = type;
                this._startIndex = startIdx;
                this._targetIndex = targetIdx - 1;
                this.rotateAngle = MathU.randomRange(0, 360);
                this._seatIndex = unitIndex;
            };
            EBGangChip.prototype.sendChip = function () {
                if (!this.pos) {
                    this.pos = new Vector2(this._chipStart[this._startIndex][0], this._chipStart[this._startIndex][1]);
                }
                var posX = MathU.randomPointInCicle(new Vector2(this._chipEnd[0], this._chipEnd[1]), 0, this._radius).x;
                var posY = MathU.randomPointInCicle(new Vector2(this._chipEnd[0], this._chipEnd[1]), 0, this._radius).y;
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.targe_pos.x = posX;
                this.targe_pos.y = posY;
                _super.prototype.sendChip.call(this);
            };
            EBGangChip.prototype.flyChip = function (index, isBanker, count) {
                var _this = this;
                if (!this.pos) {
                    this.pos = new Vector2(this._chipStart[this._startIndex][0], this._chipStart[this._startIndex][1]);
                }
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.isFinalPos = false;
                var target = isBanker ? this._chipEnd : this._chipStart;
                this.targe_pos.x = target[index][0];
                this.targe_pos.y = target[index][1];
                if (!this.pos)
                    return;
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, 500 + count * 15, Laya.Ease.backIn, Handler.create(this, function () {
                    _this.isFinalPos = true;
                }));
            };
            EBGangChip.prototype.backFlyChip = function (index, isClear) {
                var _this = this;
                if (!this.pos) {
                    this.pos = new Vector2(this._chipStart[this._startIndex][0], this._chipStart[this._startIndex][1]);
                }
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.isFinalPos = false;
                this.targe_pos.x = this._chipStart[index][0];
                this.targe_pos.y = this._chipStart[index][1];
                this.isCanClear = isClear;
                if (!this.pos)
                    return;
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, 700, Laya.Ease.backIn, Handler.create(this, function () {
                    _this.isFinalPos = true;
                }));
            };
            EBGangChip.prototype.drawChip = function () {
                var posX = MathU.randomPointInCicle(new Vector2(this._chipEnd[0], this._chipEnd[1]), 0, this._radius).x;
                var posY = MathU.randomPointInCicle(new Vector2(this._chipEnd[0], this._chipEnd[1]), 0, this._radius).y;
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2(posX, posY);
                }
                if (!this.pos) {
                    this.pos = new Vector2(posX, posY);
                }
                this.pos.x = posX;
                this.pos.y = posY;
            };
            return EBGangChip;
        }(gamecomponent.object.PlayingChip));
        data.EBGangChip = EBGangChip;
    })(data = gameebgang.data || (gameebgang.data = {}));
})(gameebgang || (gameebgang = {}));
//# sourceMappingURL=EBGangChip.js.map