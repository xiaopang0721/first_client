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
var gamebenchibaoma;
(function (gamebenchibaoma) {
    var data;
    (function (data) {
        var BenChiBaoMaChip = /** @class */ (function (_super) {
            __extends(BenChiBaoMaChip, _super);
            function BenChiBaoMaChip() {
                var _this = _super.call(this) || this;
                //筹码起始位置(主玩家，其他玩家，庄家，座位0，座位1，座位2，座位3，座位4，座位5)  
                _this._chipStart = [[200, 610], [70, 657], [640, -100],
                    [85, 200], [85, 325], [85, 500], [1225, 180], [1225, 345], [1225, 500]];
                _this._chipEnd = [[355, 210], [550, 210], [745, 210], [920, 210],
                    [355, 375], [550, 375], [745, 375], [920, 375]]; //筹码终点位置
                return _this;
            }
            //初始位置，终点位置，筹码类型，筹码大小，筹码层级
            BenChiBaoMaChip.prototype.setData = function (startIdx, targetIdx, type, value, index, unitIndex) {
                this.size = 0.4;
                this.sortScore = 999 - index;
                this.pos = new Vector2(this._chipStart[startIdx][0], this._chipStart[startIdx][1]);
                this._val = value.toString();
                this._type = type;
                this._targetIndex = targetIdx - 1;
                this.rotateAngle = MathU.randomRange(0, 360);
                this._seatIndex = unitIndex;
            };
            BenChiBaoMaChip.prototype.sendChip = function () {
                var posX = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, 50).x;
                var posY = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, 30).y;
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.targe_pos.x = posX;
                this.targe_pos.y = posY;
                _super.prototype.sendChip.call(this);
            };
            BenChiBaoMaChip.prototype.flyChip = function (index, isBanker, count, game) {
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
            BenChiBaoMaChip.prototype.drawChip = function () {
                var posX = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, 30).x;
                var posY = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, 30).y;
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
            return BenChiBaoMaChip;
        }(gamecomponent.object.PlayingChip));
        data.BenChiBaoMaChip = BenChiBaoMaChip;
    })(data = gamebenchibaoma.data || (gamebenchibaoma.data = {}));
})(gamebenchibaoma || (gamebenchibaoma = {}));
//# sourceMappingURL=BenChiBaoMaChip.js.map