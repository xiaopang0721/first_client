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
* 牌信息
*/
var gamebairendezhou;
(function (gamebairendezhou) {
    var data;
    (function (data) {
        var BairendezhouData = /** @class */ (function (_super) {
            __extends(BairendezhouData, _super);
            function BairendezhouData() {
                var _this = _super.call(this) || this;
                //1X轴位置，牌Y轴位置，牌间隔距离
                _this._posList = [[284, 68, 87], [1018, 68, -87], [510, 215, 65]];
                _this._moveposList = [[391, 250, 124], [887, 250, -124], [391, 409, 124]];
                return _this;
            }
            BairendezhouData.prototype.myOwner = function (index) {
                this.size = 0.2;
                this.time_interval = 400;
                this._curIdx = index;
            };
            //发牌
            BairendezhouData.prototype.fapai = function () {
                var posX = this._posList[this._curIdx][0];
                var posY = this._posList[this._curIdx][1];
                var space = this._posList[this._curIdx][2];
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.targe_pos.x = posX + this.index * space;
                this.targe_pos.y = posY;
                var size = this._curIdx == 2 ? 0.5 : 0.7;
                if (!this.pos)
                    return;
                Laya.Tween.clearAll(this.pos);
                Laya.Tween.clearAll(this);
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
                Laya.Tween.to(this, { size: size, rotateAngle: Math.PI * 4 }, this.time_interval);
            };
            //重连发牌
            BairendezhouData.prototype.refapai = function () {
                var posX = this._posList[this._curIdx][0];
                var posY = this._posList[this._curIdx][1];
                var space = this._posList[this._curIdx][2];
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.targe_pos.x = posX + this.index * space;
                this.targe_pos.y = posY;
                this.size = this._curIdx == 2 ? 0.5 : 0.7;
                this.rotateAngle = Math.PI * 4;
                this.time_interval = 0;
                _super.prototype.fapai.call(this);
            };
            //移动位置
            BairendezhouData.prototype.movepai = function () {
                var posX = this._moveposList[this._curIdx][0];
                var posY = this._moveposList[this._curIdx][1];
                var space = this._moveposList[this._curIdx][2];
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.isFinalPos = false;
                this.targe_pos.x = posX + this.index * space;
                this.targe_pos.y = posY;
                this.size = 1;
                this.time_interval = 400;
                if (!this.pos)
                    return;
                Laya.Tween.clearAll(this.pos);
                Laya.Tween.clearAll(this);
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
                Laya.Tween.to(this, { size: this.size }, this.time_interval);
            };
            //返回位置
            BairendezhouData.prototype.backpai = function () {
                var posX = this._posList[this._curIdx][0];
                var posY = this._posList[this._curIdx][1];
                var space = this._posList[this._curIdx][2];
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                if (this._curIdx == 2) {
                    this.index = this.index - 4;
                }
                this.isFinalPos = false;
                this.targe_pos.x = posX + this.index * space;
                this.targe_pos.y = posY;
                this.size = this._curIdx == 2 ? 0.5 : 0.7;
                this.time_interval = 400;
                if (!this.pos)
                    return;
                Laya.Tween.clearAll(this.pos);
                Laya.Tween.clearAll(this);
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
                Laya.Tween.to(this, { size: this.size }, this.time_interval);
            };
            BairendezhouData.prototype.fanpai = function () {
                this.time_interval = 400;
                _super.prototype.fanpai.call(this);
            };
            BairendezhouData.prototype.fanpai1 = function () {
                this.time_interval = 0;
                _super.prototype.fanpai.call(this);
            };
            BairendezhouData.prototype.hidepai = function () {
                this.visible = false;
            };
            BairendezhouData.prototype.showpai = function () {
                this.visible = true;
                this.rotateAngle = Math.PI * 4;
                this.scaleX = 1;
                this.isShow = true;
            };
            return BairendezhouData;
        }(gamecomponent.object.PlayingPuKeCard));
        data.BairendezhouData = BairendezhouData;
    })(data = gamebairendezhou.data || (gamebairendezhou.data = {}));
})(gamebairendezhou || (gamebairendezhou = {}));
//# sourceMappingURL=BairendezhouData.js.map