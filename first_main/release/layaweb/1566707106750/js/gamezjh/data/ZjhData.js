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
        var ZjhData = /** @class */ (function (_super) {
            __extends(ZjhData, _super);
            function ZjhData() {
                var _this = _super.call(this) || this;
                _this._posTemp = [[523, 548, 115], [1027, 473, 41], [1027, 275, 41], [166, 275, 41], [166, 473, 41]];
                return _this;
            }
            ZjhData.prototype.myOwner = function (v, b, index, seat) {
                this.owner = v;
                this._b = b;
                this.size = 0.2;
                this._mainPlayerIndex = index;
                this._ownerIdx = seat;
            };
            ZjhData.prototype.fapai = function () {
                var idx = this._ownerIdx;
                var posIdx = (idx - this._mainPlayerIndex + 5) % 5;
                var posX = this._posTemp[posIdx][0];
                var posY = this._posTemp[posIdx][1];
                var space = this._posTemp[posIdx][2];
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.targe_pos.x = posX + this.index * space;
                this.targe_pos.y = posY;
                var size = this._b ? 1 : 0.75;
                this.time_interval = 400;
                if (!this.pos)
                    return;
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
                Laya.Tween.to(this, { size: size, rotateAngle: 4 * Math.PI }, this.time_interval);
            };
            //重连发牌
            ZjhData.prototype.refapai = function () {
                var idx = this._ownerIdx;
                var posIdx = (idx - this._mainPlayerIndex + 5) % 5;
                var posX = this._posTemp[posIdx][0];
                var posY = this._posTemp[posIdx][1];
                var space = this._posTemp[posIdx][2];
                this.size = this._b ? 1 : 0.75;
                this.pos.x = posX + this.index * space;
                this.pos.y = posY;
                if (this._b && this.owner) {
                    if (this.owner.IsSeeCard()) {
                        _super.prototype.fanpai.call(this);
                    }
                }
                _super.prototype.fapai.call(this);
            };
            ZjhData.prototype.fanpai = function () {
                if (!this._b)
                    return;
                _super.prototype.fanpai.call(this);
            };
            ZjhData.prototype.fanpaiall = function () {
                if (this.isShow)
                    return;
                if (this.owner) {
                    if (this.owner.IsGiveUp() || this.owner.GetIndex() == 0)
                        return;
                }
                _super.prototype.fanpai.call(this);
            };
            return ZjhData;
        }(gamecomponent.object.PlayingPuKeCard));
        data.ZjhData = ZjhData;
    })(data = gamezjh.data || (gamezjh.data = {}));
})(gamezjh || (gamezjh = {}));
//# sourceMappingURL=ZjhData.js.map