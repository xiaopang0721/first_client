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
var gamelonghu;
(function (gamelonghu) {
    var data;
    (function (data) {
        var LonghuChip = /** @class */ (function (_super) {
            __extends(LonghuChip, _super);
            function LonghuChip() {
                var _this = _super.call(this) || this;
                //筹码起始位置(主玩家，其他玩家，庄家，座位0，座位1，座位2，座位3，座位4，座位5)  
                _this._chipStart = [[190, 610], [70, 657], [642, 111],
                    [85, 200], [85, 325], [85, 500], [1225, 180], [1225, 345], [1225, 500]];
                _this._chipEnd = [[625, 275], [295, 265], [980, 265], [180, 465], [310, 465], [445, 465], [575, 465], [700, 465], [835, 465], [965, 465], [1095, 465]]; //筹码终点位置
                return _this;
            }
            //初始位置，终点位置，筹码类型，筹码大小，筹码层级
            LonghuChip.prototype.setData = function (startIdx, targetIdx, type, value, index, unitIndex) {
                this.size = 0.4;
                this.sortScore = -index;
                this.pos = new Vector2(this._chipStart[startIdx][0], this._chipStart[startIdx][1]);
                this._val = value.toString();
                this._type = type;
                this._startIndex = startIdx;
                this._targetIndex = targetIdx - 1;
                this.rotateAngle = MathU.randomRange(0, 360);
                this._seatIndex = unitIndex;
                this._radiusX = targetIdx <= 1 ? 85 : targetIdx <= 3 ? 100 : 30;
                this._radiusY = targetIdx <= 1 ? 40 : targetIdx <= 3 ? 45 : 30;
            };
            LonghuChip.prototype.sendChip = function () {
                var posX = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, this._radiusX).x;
                var posY = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, this._radiusY).y;
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.targe_pos.x = posX;
                this.targe_pos.y = posY;
                _super.prototype.sendChip.call(this);
            };
            LonghuChip.prototype.flyChip = function (index, isBanker, count, game) {
                var _this = this;
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
                    game.sceneObjectMgr.clearOfflineObject(_this);
                }));
            };
            LonghuChip.prototype.drawChip = function () {
                var posX = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, this._radiusX).x;
                var posY = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, this._radiusY).y;
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.pos.x = posX;
                this.pos.y = posY;
                this.targe_pos.x = posX;
                this.targe_pos.y = posY;
            };
            return LonghuChip;
        }(gamecomponent.object.PlayingChip));
        data.LonghuChip = LonghuChip;
    })(data = gamelonghu.data || (gamelonghu.data = {}));
})(gamelonghu || (gamelonghu = {}));
//# sourceMappingURL=LonghuChip.js.map