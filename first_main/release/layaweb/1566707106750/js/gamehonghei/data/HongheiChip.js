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
* 红黑大战筹码信息
*/
var gamehonghei;
(function (gamehonghei) {
    var data;
    (function (data) {
        var HongheiChip = /** @class */ (function (_super) {
            __extends(HongheiChip, _super);
            function HongheiChip() {
                var _this = _super.call(this) || this;
                //筹码起始位置(主玩家，其他玩家，红赢位置，座位0，座位1，座位2，座位3，座位4，座位5,黑赢位置)  
                _this._chipStart = [[200, 620], [67, 661], [165, 75], [85, 200], [85, 365], [85, 530], [1225, 200], [1225, 365], [1225, 530], [1115, 75]];
                //筹码终点位置
                _this._chipEnd = [[265, 340], [1015, 340], [633, 225], [468, 420], [582, 420], [696, 420], [810, 420]];
                return _this;
            }
            //初始位置，终点位置，筹码类型，筹码大小，筹码层级
            HongheiChip.prototype.setData = function (startIdx, targetIdx, type, value, index, unitIndex) {
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
            HongheiChip.prototype.sendChip = function () {
                var dstX = 20;
                var dstY = 50;
                if (this._targetIndex == 0 || this._targetIndex == 1) {
                    dstX = 80;
                    dstY = 100;
                }
                else if (this._targetIndex == 2) {
                    dstX = 100;
                    dstY = 20;
                }
                var posX = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, dstX).x;
                var posY = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, dstY).y;
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.targe_pos.x = posX;
                this.targe_pos.y = posY;
                _super.prototype.sendChip.call(this);
            };
            HongheiChip.prototype.flyChip = function (index, isBanker, count, game) {
                var _this = this;
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.isFinalPos = false;
                var target = isBanker ? this._chipEnd : this._chipStart;
                this.targe_pos.x = target[index][0];
                this.targe_pos.y = target[index][1];
                if (!this.pos) {
                    return;
                }
                if (!this.pos)
                    return;
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, 500 + count * 15, Laya.Ease.backIn, Handler.create(this, function () {
                    _this.isFinalPos = true;
                    game.sceneObjectMgr.clearOfflineObject(_this);
                }));
            };
            HongheiChip.prototype.drawChip = function () {
                var dstX = 20;
                var dstY = 50;
                if (this._targetIndex == 0 || this._targetIndex == 1) {
                    dstX = 80;
                    dstY = 100;
                }
                else if (this._targetIndex == 2) {
                    dstX = 100;
                    dstY = 20;
                }
                var posX = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, dstX).x;
                var posY = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, dstY).y;
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.pos.x = posX;
                this.pos.y = posY;
                this.targe_pos.x = posX;
                this.targe_pos.y = posY;
            };
            return HongheiChip;
        }(gamecomponent.object.PlayingChip));
        data.HongheiChip = HongheiChip;
    })(data = gamehonghei.data || (gamehonghei.data = {}));
})(gamehonghei || (gamehonghei = {}));
//# sourceMappingURL=HongheiChip.js.map