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
* 红黑大战牌信息
*/
var gamehonghei;
(function (gamehonghei) {
    var data;
    (function (data) {
        var HongheiData = /** @class */ (function (_super) {
            __extends(HongheiData, _super);
            function HongheiData() {
                var _this = _super.call(this) || this;
                //前两张牌X轴位置，牌Y轴位置，牌间隔距离
                _this._posList = [[165, 75, 85], [1115, 75, -85]];
                return _this;
            }
            HongheiData.prototype.myOwner = function (index) {
                this.size = 0.2;
                this.time_interval = 400;
                this._curIdx = index;
            };
            //发牌
            HongheiData.prototype.fapai = function () {
                var posX = this._posList[this._curIdx][0];
                var posY = this._posList[this._curIdx][1];
                var space = this._posList[this._curIdx][2];
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.targe_pos.x = posX + this.index * space;
                this.targe_pos.y = posY;
                var size = 0.7;
                if (!this.pos)
                    return;
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
                Laya.Tween.to(this, { size: size, rotateAngle: Math.PI * 4 }, this.time_interval);
            };
            //重连发牌
            HongheiData.prototype.refapai = function () {
                var posX = this._posList[this._curIdx][0];
                var posY = this._posList[this._curIdx][1];
                var space = this._posList[this._curIdx][2];
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.targe_pos.x = posX + this.index * space;
                this.targe_pos.y = posY;
                this.size = 0.7;
                this.rotateAngle = Math.PI * 4;
                this.time_interval = 0;
                _super.prototype.fapai.call(this);
            };
            HongheiData.prototype.hidecard = function () {
                this.visible = false;
            };
            HongheiData.prototype.showcard = function () {
                this.visible = true;
                this.rotateAngle = Math.PI * 4;
                this.scaleX = 1;
                this.isShow = true;
            };
            HongheiData.prototype.fanpai = function () {
                this.time_interval = 400;
                _super.prototype.fanpai.call(this);
            };
            HongheiData.prototype.fanpai1 = function () {
                this.time_interval = 0;
                _super.prototype.fanpai.call(this);
            };
            return HongheiData;
        }(gamecomponent.object.PlayingPuKeCard));
        data.HongheiData = HongheiData;
    })(data = gamehonghei.data || (gamehonghei.data = {}));
})(gamehonghei || (gamehonghei = {}));
//# sourceMappingURL=HongheiData.js.map