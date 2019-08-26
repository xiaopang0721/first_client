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
var gametbniuniu;
(function (gametbniuniu) {
    var data;
    (function (data) {
        var TbNiuNiuData = /** @class */ (function (_super) {
            __extends(TbNiuNiuData, _super);
            function TbNiuNiuData() {
                var _this = _super.call(this) || this;
                _this._card_count = 0;
                _this._isFan = false;
                _this._posList = [[400, 640, 110], [955, 420, 28], [955, 215, 28], [615, 130, 28], [230, 215, 28], [230, 420, 28]];
                _this._maxSeats = 6;
                return _this;
            }
            TbNiuNiuData.prototype.Init = function (v) {
                if (v < 0 || v > 52) {
                    throw "PlayingCard v < 0 || v > 52," + v;
                }
                this._val = v - 1;
                this.time_interval = 350;
                this.Analyze();
            };
            TbNiuNiuData.prototype.Analyze = function () {
                this._card_val = this._val % 13 + 1;
                this._card_color = Math.floor(this._val / 13);
                if (this._card_val > 10)
                    this._card_count = 10;
                else
                    this._card_count = this._card_val;
                this._isFan = this._val < 0 ? false : true;
            };
            //获取牌的归属座位
            TbNiuNiuData.prototype.GetOwnerIdx = function () {
                return this._ownerIdx;
            };
            //获取牛牛牌值
            TbNiuNiuData.prototype.GetCount = function () {
                return this._card_count;
            };
            TbNiuNiuData.prototype.myOwner = function (v, b, index) {
                this._ownerIdx = v;
                this._b = b;
                this.size = 0.2;
                this._mainIdx = index;
                this.rotateAngle = Math.PI / 6;
            };
            TbNiuNiuData.prototype.fapai = function () {
                var idx = this._ownerIdx;
                var posIdx = (idx - this._mainIdx + this._maxSeats) % this._maxSeats;
                var posX = this._posList[posIdx][0];
                var posY = this._posList[posIdx][1];
                var space = this._posList[posIdx][2];
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.targe_pos.x = posX + this.index * space;
                this.targe_pos.y = posY;
                this.scaleX = -1;
                _super.prototype.fapai.call(this);
                Laya.Tween.to(this, { size: this._b ? 1 : 0.65 }, this.time_interval);
                Laya.Tween.to(this, { rotateAngle: Math.PI * 4 }, this.time_interval);
            };
            TbNiuNiuData.prototype.refapai = function () {
                var idx = this._ownerIdx;
                var posIdx = (idx - this._mainIdx + this._maxSeats) % this._maxSeats;
                var posX = this._posList[posIdx][0];
                var posY = this._posList[posIdx][1];
                var space = this._posList[posIdx][2];
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.pos.x = posX + this.index * space;
                this.pos.y = posY;
                this.targe_pos.x = posX + this.index * space;
                this.targe_pos.y = posY;
                this.scaleX = -1;
                this.size = this._b ? 1 : 0.65;
                this.rotateAngle = Math.PI * 4;
                _super.prototype.fapai.call(this);
            };
            TbNiuNiuData.prototype.regaipai = function () {
                var idx = this._ownerIdx;
                var posIdx = (idx - this._mainIdx + this._maxSeats) % this._maxSeats;
                var posX = posIdx == 0 ? 590 : this._posList[posIdx][0];
                var posY = posIdx == 0 ? 485 : this._posList[posIdx][1];
                var space = posIdx == 0 ? 28 : this._posList[posIdx][2];
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.isFinalPos = false;
                this.size = 0.65;
                this.pos.x = posX + this.index * space;
                this.pos.y = posY;
                this.targe_pos.x = posX + this.index * space;
                this.targe_pos.y = posY;
                this.scaleX = -1;
                this.rotateAngle = Math.PI * 4;
                _super.prototype.fapai.call(this);
            };
            TbNiuNiuData.prototype.yipai = function () {
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.isFinalPos = false;
                this.targe_pos.x = 590 + this.index * 28;
                this.targe_pos.y = 485;
                this.size = 0.65;
                if (!this.pos)
                    return;
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
            };
            TbNiuNiuData.prototype.fanpai = function () {
                if (!this._isFan)
                    return;
                _super.prototype.fanpai.call(this);
            };
            TbNiuNiuData.prototype.gaipai = function () {
                _super.prototype.gaipai.call(this);
            };
            TbNiuNiuData.prototype.moveCard = function () {
                this.isFinalPos = false;
                _super.prototype.fapai.call(this);
            };
            return TbNiuNiuData;
        }(gamecomponent.object.PlayingPuKeCard));
        data.TbNiuNiuData = TbNiuNiuData;
    })(data = gametbniuniu.data || (gametbniuniu.data = {}));
})(gametbniuniu || (gametbniuniu = {}));
//# sourceMappingURL=TbNiuNiuData.js.map