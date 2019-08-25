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
var gametoubao;
(function (gametoubao) {
    var data;
    (function (data) {
        var ToubaoChip = /** @class */ (function (_super) {
            __extends(ToubaoChip, _super);
            function ToubaoChip() {
                var _this = _super.call(this) || this;
                //筹码起始位置(主玩家，其他玩家，庄家，座位0，座位1，座位2，座位3，座位4，座位5)  
                _this._chipStart = [[190, 610], [70, 657], [635, 85],
                    [85, 200], [85, 325], [85, 500], [1225, 180], [1225, 345], [1225, 500]];
                //筹码终点位置
                _this._chipEnd = [[285, 220], [1000, 220], [645, 225], [373, 225], [447, 225], [527, 225], [750, 225], [830, 225], [900, 225],
                    [215, 310], [280, 310], [343, 310], [410, 310], [475, 310], [540, 310], [605, 310], [675, 310], [740, 310], [810, 310], [870, 310], [940, 310], [1005, 310], [1067, 310],
                    [230, 415], [395, 415], [555, 415], [720, 415], [880, 415], [1050, 415]]; //第三行(单骰1~单骰6)
                return _this;
            }
            //初始位置，终点位置，筹码类型，筹码大小，筹码层级
            ToubaoChip.prototype.setData = function (startIdx, targetIdx, type, value, index, unitIndex) {
                this.size = 0.3;
                this.sortScore = -index;
                this.pos = new Vector2(this._chipStart[startIdx][0], this._chipStart[startIdx][1]);
                this._val = value.toString();
                this._type = type;
                this._startIndex = startIdx;
                this._targetIndex = targetIdx - 1;
                this.rotateAngle = MathU.randomRange(0, 360);
                this._seatIndex = unitIndex;
                this._radiusX = targetIdx <= 2 ? 30 : targetIdx <= 9 ? 28 : targetIdx <= 23 ? 10 : 40;
                this._radiusY = targetIdx <= 2 ? 35 : targetIdx <= 9 ? 25 : targetIdx <= 23 ? 8 : 33;
            };
            ToubaoChip.prototype.sendChip = function () {
                var posX = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, this._radiusX).x;
                var posY = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, this._radiusY).y;
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.targe_pos.x = posX;
                this.targe_pos.y = posY;
                _super.prototype.sendChip.call(this);
            };
            ToubaoChip.prototype.flyChip = function (index, isBanker, count, game) {
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
            ToubaoChip.prototype.drawChip = function () {
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
            return ToubaoChip;
        }(gamecomponent.object.PlayingChip));
        data.ToubaoChip = ToubaoChip;
    })(data = gametoubao.data || (gametoubao.data = {}));
})(gametoubao || (gametoubao = {}));
//# sourceMappingURL=ToubaoChip.js.map