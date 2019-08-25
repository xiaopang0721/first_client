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
* 牌九
*/
var gamepaijiu;
(function (gamepaijiu) {
    var data;
    (function (data) {
        var PaijiuData = /** @class */ (function (_super) {
            __extends(PaijiuData, _super);
            function PaijiuData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._posTemp = [[610, 580, 70], [1030, 360, 70], [610, 100, 70], [180, 360, 70]];
                return _this;
            }
            PaijiuData.prototype.myOwner = function (index, seat) {
                this.size = 1;
                this._mainPlayerIndex = index;
                this._ownerIdx = seat;
            };
            PaijiuData.prototype.fapai = function () {
                var idx = this._ownerIdx;
                var posIdx = (idx - this._mainPlayerIndex + 4) % 4;
                var posX = this._posTemp[posIdx][0];
                var posY = this._posTemp[posIdx][1];
                var space = this._posTemp[posIdx][2];
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.targe_pos.x = posX + this.index * space;
                this.targe_pos.y = posY;
                this.time_interval = 400;
                if (!this.pos)
                    return;
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
            };
            //重连发牌
            PaijiuData.prototype.refapai = function () {
                var idx = this._ownerIdx;
                var posIdx = (idx - this._mainPlayerIndex + 4) % 4;
                var posX = this._posTemp[posIdx][0];
                var posY = this._posTemp[posIdx][1];
                var space = this._posTemp[posIdx][2];
                this.pos.x = posX + this.index * space;
                this.pos.y = posY;
            };
            PaijiuData.prototype.fanpai = function () {
                _super.prototype.fanpai.call(this);
            };
            return PaijiuData;
        }(gamecomponent.object.PlayingGuPai));
        data.PaijiuData = PaijiuData;
    })(data = gamepaijiu.data || (gamepaijiu.data = {}));
})(gamepaijiu || (gamepaijiu = {}));
//# sourceMappingURL=PaijiuData.js.map