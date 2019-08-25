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
var gamebrniuniu;
(function (gamebrniuniu) {
    var data;
    (function (data) {
        var BrNiuNiuData = /** @class */ (function (_super) {
            __extends(BrNiuNiuData, _super);
            function BrNiuNiuData() {
                var _this = _super.call(this) || this;
                _this._card_count = 0;
                _this._isFan = false;
                //牌X轴位置，前四张牌Y轴位置，第五张牌Y轴位置，牌间隔距离
                _this._posList = [[555, 45, 55, 35], [210, 485, 495, 30], [458, 485, 495, 30], [705, 485, 495, 30], [950, 485, 495, 30]];
                _this._maxCards = 5; //场上共5副牌
                return _this;
            }
            BrNiuNiuData.prototype.Init = function (v) {
                if (v < 0 || v > 52) {
                    throw "PlayingCard v < 0 || v > 52," + v;
                }
                this._val = v - 1;
                this.time_interval = 300;
                this.Analyze();
            };
            BrNiuNiuData.prototype.Analyze = function () {
                this._card_val = this._val % 13 + 1;
                this._card_color = Math.floor(this._val / 13);
                if (this._card_val > 10)
                    this._card_count = 10;
                else
                    this._card_count = this._card_val;
                this._isFan = this._val < 0 ? false : true;
            };
            //获取牛牛牌值
            BrNiuNiuData.prototype.GetCount = function () {
                return this._card_count;
            };
            BrNiuNiuData.prototype.myOwner = function (index) {
                this.size = 0.2;
                this._curIdx = index;
                this.rotateAngle = Math.PI / 6;
            };
            BrNiuNiuData.prototype.fapai = function () {
                var posX = this._posList[this._curIdx][0];
                var posY = this._posList[this._curIdx][1];
                if (this.index == 4) {
                    posY = this._posList[this._curIdx][2];
                }
                var space = this._posList[this._curIdx][3];
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.targe_pos.x = posX + this.index * space;
                this.targe_pos.y = posY;
                this.scaleX = -1;
                _super.prototype.fapai.call(this);
                Laya.Tween.clearAll(this);
                Laya.Tween.to(this, { size: 0.55 }, this.time_interval);
                Laya.Tween.to(this, { rotateAngle: this.index == 4 ? Math.PI * 4.5 : Math.PI * 4 }, this.time_interval, null, Handler.create(this, this.fanpai));
            };
            BrNiuNiuData.prototype.refapai = function () {
                var posX = this._posList[this._curIdx][0];
                var posY = this._posList[this._curIdx][1];
                if (this.index == 4) {
                    posY = this._posList[this._curIdx][2];
                }
                var space = this._posList[this._curIdx][3];
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.pos.x = posX + this.index * space;
                this.pos.y = posY;
                this.targe_pos.x = posX + this.index * space;
                this.targe_pos.y = posY;
                this.size = 0.55;
                this.rotateAngle = this.index == 4 ? Math.PI * 4.5 : Math.PI * 4;
                _super.prototype.fapai.call(this);
            };
            BrNiuNiuData.prototype.refapai1 = function () {
                var posX = this._posList[this._curIdx][0];
                var posY = this._posList[this._curIdx][1];
                var space = this._posList[this._curIdx][3];
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.pos.x = posX + this.index * space;
                this.pos.y = posY;
                this.targe_pos.x = posX + this.index * space;
                this.targe_pos.y = posY;
                this.size = 0.55;
                this.rotateAngle = Math.PI * 4;
                _super.prototype.fapai.call(this);
            };
            BrNiuNiuData.prototype.fanpai = function () {
                if (!this._isFan)
                    return;
                _super.prototype.fanpai.call(this);
            };
            BrNiuNiuData.prototype.kaipai = function () {
                if (!this._isFan)
                    return;
                this.visible = true;
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.targe_pos.y = this._posList[this._curIdx][1];
                this.rotateAngle = Math.PI * 4;
                this.scaleX = 1;
                this.isShow = true;
                this.pos.y = this.targe_pos.y;
                // super.fanpai();
            };
            BrNiuNiuData.prototype.yincangpai = function () {
                this.visible = false;
            };
            BrNiuNiuData.prototype.moveCard = function () {
                _super.prototype.fapai.call(this);
            };
            BrNiuNiuData.prototype.goUp = function () {
                this.targe_pos.y = this.targe_pos.y + 20;
                _super.prototype.fapai.call(this);
            };
            BrNiuNiuData.prototype.goDown = function () {
                this.targe_pos.y = this.targe_pos.y - 20;
                _super.prototype.fapai.call(this);
            };
            return BrNiuNiuData;
        }(gamecomponent.object.PlayingPuKeCard));
        data.BrNiuNiuData = BrNiuNiuData;
    })(data = gamebrniuniu.data || (gamebrniuniu.data = {}));
})(gamebrniuniu || (gamebrniuniu = {}));
//# sourceMappingURL=BrNiuNiuData.js.map