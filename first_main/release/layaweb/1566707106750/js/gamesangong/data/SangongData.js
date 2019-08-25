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
* 三公
*/
var gamesangong;
(function (gamesangong) {
    var data;
    (function (data) {
        var SangongData = /** @class */ (function (_super) {
            __extends(SangongData, _super);
            function SangongData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._posTemp = [[523, 630, 115], [1027, 423, 41], [1027, 235, 41], [166, 235, 41], [166, 423, 41]];
                return _this;
            }
            SangongData.prototype.myOwner = function (v, b, index, seat) {
                this.owner = v;
                this._b = b;
                this.size = 0.2;
                this._mainPlayerIndex = index;
                this._ownerIdx = seat;
            };
            SangongData.prototype.fapai = function () {
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
            SangongData.prototype.refapai = function () {
                var idx = this._ownerIdx;
                var posIdx = (idx - this._mainPlayerIndex + 5) % 5;
                var posX = this._posTemp[posIdx][0];
                var posY = this._posTemp[posIdx][1];
                var space = this._posTemp[posIdx][2];
                this.size = this._b ? 1 : 0.75;
                this.pos.x = posX + this.index * space;
                this.pos.y = posY;
                _super.prototype.fapai.call(this);
            };
            SangongData.prototype.fanpai = function () {
                _super.prototype.fanpai.call(this);
            };
            SangongData.prototype.fanpaiall = function () {
                if (this.isShow)
                    return;
                if (!this.owner.IsCompare())
                    if (this.owner.IsGiveUp())
                        return;
                _super.prototype.fanpai.call(this);
            };
            return SangongData;
        }(gamecomponent.object.PlayingPuKeCard));
        data.SangongData = SangongData;
    })(data = gamesangong.data || (gamesangong.data = {}));
})(gamesangong || (gamesangong = {}));
//# sourceMappingURL=SangongData.js.map