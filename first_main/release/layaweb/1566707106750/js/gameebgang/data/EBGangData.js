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
* 二八杠
*/
var gameebgang;
(function (gameebgang) {
    var data;
    (function (data) {
        var EBGangData = /** @class */ (function (_super) {
            __extends(EBGangData, _super);
            function EBGangData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._posTemp = [[580, 615, 70], [1040, 320, 70], [610, 80, 70], [170, 320, 70]];
                return _this;
            }
            EBGangData.prototype.myOwner = function (v, b, index, seat) {
                this.owner = v;
                this._b = b;
                this.size = 0.8;
                this._mainPlayerIndex = index;
                this._ownerIdx = seat;
            };
            EBGangData.prototype.Analyze = function () {
                this._card_val = this._val % 10;
                if (this._card_val == 0)
                    this._card_val = 10;
                this._card_color = Math.floor(this._val / 10);
            };
            EBGangData.prototype.fapai = function () {
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
                if (!this.pos) {
                    logd("EBGang DATA fapai fail...this pos is nil");
                    return;
                }
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
            };
            //重连发牌
            EBGangData.prototype.refapai = function () {
                var idx = this._ownerIdx;
                var posIdx = (idx - this._mainPlayerIndex + 4) % 4;
                var posX = this._posTemp[posIdx][0];
                var posY = this._posTemp[posIdx][1];
                var space = this._posTemp[posIdx][2];
                this.pos.x = posX + this.index * space;
                this.pos.y = posY;
                if (this._b) {
                    if (this.owner.IsSeeCard()) {
                        _super.prototype.fanpai.call(this);
                    }
                }
            };
            EBGangData.prototype.fanpai = function () {
                _super.prototype.fanpai.call(this);
            };
            EBGangData.prototype.fanpaiall = function () {
                if (this.isShow)
                    return;
                if (!this.owner.IsCompare())
                    if (this.owner.IsGiveUp())
                        return;
                _super.prototype.fanpai.call(this);
            };
            return EBGangData;
        }(gamecomponent.object.PlayingMahjong));
        data.EBGangData = EBGangData;
    })(data = gameebgang.data || (gameebgang.data = {}));
})(gameebgang || (gameebgang = {}));
//# sourceMappingURL=EBGangData.js.map