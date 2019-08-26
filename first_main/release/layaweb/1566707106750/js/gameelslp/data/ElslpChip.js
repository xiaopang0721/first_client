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
var gameelslp;
(function (gameelslp) {
    var data;
    (function (data) {
        var ElslpChip = /** @class */ (function (_super) {
            __extends(ElslpChip, _super);
            function ElslpChip() {
                var _this = _super.call(this) || this;
                //筹码起始位置(主玩家，其他玩家，庄家，座位0，座位1，座位2，座位3，座位4，座位5)  
                _this._chipStart = [[200, 610], [70, 657], [640, -100],
                    [85, 200], [85, 325], [85, 500], [1225, 180], [1225, 345], [1225, 500]];
                _this._chipEnd = [[300, 180], [440, 180], [570, 180], [710, 180], [850, 180], [990, 180], [1095, 270], [1095, 350], [1095, 450], [920, 520], [645, 520],
                    [370, 520], [200, 350], [270, 450], [270, 350], [270, 270], [340, 450], [340, 350], [340, 270], [410, 450], [410, 350], [410, 270], [480, 450], [480, 350],
                    [480, 270], [550, 450], [550, 350], [550, 270], [615, 450], [615, 350], [615, 270], [685, 450], [685, 350], [685, 270], [755, 450], [755, 350], [755, 270],
                    [825, 450], [825, 350], [825, 270], [895, 450], [895, 350], [895, 270], [960, 450], [960, 350], [960, 270], [1030, 450], [1030, 350], [1030, 270]]; //筹码终点位置
                return _this;
            }
            //初始位置，终点位置，筹码类型，筹码大小，筹码层级
            ElslpChip.prototype.setData = function (startIdx, targetIdx, type, value, index, unitIndex) {
                this.size = 0.4;
                this.sortScore = 999 - index;
                this.pos = new Vector2(this._chipStart[startIdx][0], this._chipStart[startIdx][1]);
                this._val = value.toString();
                this._type = type;
                this._targetIndex = targetIdx - 1;
                this.rotateAngle = MathU.randomRange(0, 360);
                this._seatIndex = unitIndex;
            };
            ElslpChip.prototype.sendChip = function () {
                var posX = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, 6).x;
                var posY = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, 9).y;
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.targe_pos.x = posX;
                this.targe_pos.y = posY;
                _super.prototype.sendChip.call(this);
            };
            ElslpChip.prototype.flyChip = function (index, isBanker, count, game) {
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
                Laya.Tween.clearAll(this.pos);
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, 500 + count * 15, Laya.Ease.backIn, Handler.create(this, function () {
                    _this.isFinalPos = true;
                    game.sceneObjectMgr.clearOfflineObject(_this);
                }));
            };
            ElslpChip.prototype.drawChip = function () {
                var posX = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, 6).x;
                var posY = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, 9).y;
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.targe_pos.x = posX;
                this.targe_pos.y = posY;
                if (!this.pos) {
                    this.pos = new Vector2(posX, posY);
                }
                else {
                    this.pos.x = posX;
                    this.pos.y = posY;
                }
            };
            return ElslpChip;
        }(gamecomponent.object.PlayingChip));
        data.ElslpChip = ElslpChip;
    })(data = gameelslp.data || (gameelslp.data = {}));
})(gameelslp || (gameelslp = {}));
//# sourceMappingURL=ElslpChip.js.map