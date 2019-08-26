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
        var LonghuData = /** @class */ (function (_super) {
            __extends(LonghuData, _super);
            function LonghuData() {
                var _this = _super.call(this) || this;
                _this._isFan = false;
                //牌X轴位置，牌Y轴位置
                _this._posList = [[420, 160], [460, 270], [811, 270]];
                _this._size = 0.8; //牌尺寸
                return _this;
            }
            LonghuData.prototype.Init = function (v) {
                //8副牌
                if (v < 0 || v > 52 * 8) {
                    throw "PlayingCard v < 0 || v > 52 * 8," + v;
                }
                this._val = v - 1;
                this.Analyze();
                this.time_interval = 400;
            };
            LonghuData.prototype.Analyze = function () {
                var val = this._val % 52;
                this._card_val = val % 13 + 1;
                this._card_color = Math.floor(val / 13);
                this._isFan = this._val < 0 ? false : true;
            };
            LonghuData.prototype.myOwner = function (index) {
                this.size = 0.2;
                this._curIdx = index;
                this.rotateAngle = Math.PI / 6;
            };
            LonghuData.prototype.fapai = function () {
                var posX = this._posList[this._curIdx][0];
                var posY = this._posList[this._curIdx][1];
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.targe_pos.x = posX;
                this.targe_pos.y = posY;
                this.scaleX = -1;
                _super.prototype.fapai.call(this);
                Laya.Tween.to(this, { size: this._curIdx == 0 ? 0.2 : this._size }, this.time_interval);
                Laya.Tween.to(this, { rotateAngle: Math.PI * 4 }, this.time_interval);
            };
            LonghuData.prototype.refapai = function () {
                var posX = this._posList[this._curIdx][0];
                var posY = this._posList[this._curIdx][1];
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.pos.x = posX;
                this.pos.y = posY;
                this.targe_pos.x = posX;
                this.targe_pos.y = posY;
                this.scaleX = -1;
                this.size = this._curIdx == 0 ? 0.2 : this._size;
                this.rotateAngle = Math.PI * 4;
                _super.prototype.fapai.call(this);
            };
            LonghuData.prototype.fanpai = function () {
                if (!this._isFan)
                    return;
                _super.prototype.fanpai.call(this);
            };
            LonghuData.prototype.kaipai = function () {
                if (!this._isFan)
                    return;
                this.scaleX = 1;
                this.isShow = true;
            };
            return LonghuData;
        }(gamecomponent.object.PlayingPuKeCard));
        data.LonghuData = LonghuData;
    })(data = gamelonghu.data || (gamelonghu.data = {}));
})(gamelonghu || (gamelonghu = {}));
//# sourceMappingURL=LonghuData.js.map