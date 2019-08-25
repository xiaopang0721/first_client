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
var gameniuniu;
(function (gameniuniu) {
    var data;
    (function (data) {
        var NiuData = /** @class */ (function (_super) {
            __extends(NiuData, _super);
            function NiuData() {
                var _this = _super.call(this) || this;
                _this._card_count = 0;
                _this._isFan = false;
                _this._posList = [[430, 630, 110], [980, 370, 28], [780, 230, 28], [405, 230, 28], [220, 370, 28]];
                return _this;
            }
            NiuData.prototype.Init = function (v) {
                if (v < 0 || v > 52) {
                    throw "PlayingCard v < 0 || v > 52," + v;
                }
                this._val = v - 1;
                this.time_interval = 350;
                this.Analyze();
            };
            NiuData.prototype.Analyze = function () {
                this._card_val = this._val % 13 + 1;
                this._card_color = Math.floor(this._val / 13);
                if (this._card_val > 10)
                    this._card_count = 10;
                else
                    this._card_count = this._card_val;
                this._isFan = this._val < 0 ? false : true;
            };
            //获取牌的归属座位
            NiuData.prototype.GetOwnerIdx = function () {
                return this._ownerIdx;
            };
            //获取牛牛牌值
            NiuData.prototype.GetCount = function () {
                return this._card_count;
            };
            NiuData.prototype.myOwner = function (v, b, index) {
                this._ownerIdx = v;
                this._b = b;
                this.size = 0.2;
                this._mainIdx = index;
                this.rotateAngle = Math.PI / 6;
                this.toggleDistance = 0;
            };
            NiuData.prototype.fapai = function () {
                var idx = this._ownerIdx;
                var posIdx = (idx - this._mainIdx + 5) % 5;
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
            NiuData.prototype.refapai = function () {
                var idx = this._ownerIdx;
                var posIdx = (idx - this._mainIdx + 5) % 5;
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
            NiuData.prototype.regaipai = function () {
                var idx = this._ownerIdx;
                var posIdx = (idx - this._mainIdx + 5) % 5;
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
            NiuData.prototype.yipai = function () {
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.toggleEnable = false;
                this.isFinalPos = false;
                this.targe_pos.x = 590 + this.index * 28;
                this.targe_pos.y = 485;
                this.size = 0.65;
                if (!this.pos)
                    return;
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
            };
            NiuData.prototype.fanpai = function () {
                if (!this._isFan)
                    return;
                _super.prototype.fanpai.call(this);
            };
            NiuData.prototype.kaipai = function () {
                this.scaleX = 1;
                this.isShow = true;
            };
            NiuData.prototype.gaipai = function () {
                _super.prototype.gaipai.call(this);
            };
            NiuData.prototype.moveCard = function () {
                this.isFinalPos = false;
                _super.prototype.fapai.call(this);
            };
            return NiuData;
        }(gamecomponent.object.PlayingPoker));
        data.NiuData = NiuData;
    })(data = gameniuniu.data || (gameniuniu.data = {}));
})(gameniuniu || (gameniuniu = {}));
//# sourceMappingURL=NiuData.js.map