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
var gamedezhou;
(function (gamedezhou) {
    var data;
    (function (data) {
        var DezhouData = /** @class */ (function (_super) {
            __extends(DezhouData, _super);
            function DezhouData() {
                var _this = _super.call(this) || this;
                _this.max = 9;
                //发牌位置
                _this._posTemp = [[653, 554, 685, 558], [349, 535, 361, 536], [146, 453, 158, 454], [148, 247, 160, 248],
                    [343, 133, 355, 134], [918, 133, 930, 134], [1119, 247, 1131, 248], [1119, 453, 1131, 454], [916, 535, 928, 536],];
                //公共牌
                _this._publicList = [438, 320, 95];
                //开牌后位置
                _this._openPosTemp = [[654, 564, 22], [370, 560, 22], [167, 472, 22], [167, 277, 22], [362, 160, 22],
                    [885, 160, 22], [1087, 277, 22], [1087, 472, 22], [883, 560, 22]];
                return _this;
            }
            DezhouData.prototype.myOwner = function (v, b, index, seat) {
                this.owner = v;
                this._b = b;
                this.size = 0.2;
                this._mainPlayerIndex = index;
                this._ownerIdx = seat;
            };
            DezhouData.prototype.fapai = function () {
                var posX;
                var posY;
                var size;
                var rotateAngle;
                var addTIME;
                if (!this.owner) {
                    posX = this._publicList[0] + this.index * this._publicList[2];
                    posY = this._publicList[1];
                    rotateAngle = Math.PI * 4;
                    size = 0.8;
                }
                else {
                    var idx = this.owner.GetIndex();
                    var posIdx = (idx - this._mainPlayerIndex + this.max) % this.max;
                    posX = this._posTemp[posIdx][0];
                    posY = this._posTemp[posIdx][1];
                    rotateAngle = Math.PI * 4 - Math.PI / 16;
                    if (this.index == 1) {
                        posX = this._posTemp[posIdx][2];
                        posY = this._posTemp[posIdx][3];
                        rotateAngle = Math.PI * 4 + Math.PI / 16;
                    }
                    size = this._b ? 0.8 : 0.3;
                }
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.targe_pos.x = posX;
                this.targe_pos.y = posY;
                if (this._b)
                    _super.prototype.fanpai.call(this);
                this.time_interval = 400;
                if (!this.pos)
                    return;
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
                Laya.Tween.to(this, { size: size, rotateAngle: rotateAngle }, this.time_interval);
            };
            //重连发牌
            DezhouData.prototype.refapai = function () {
                var posX;
                var posY;
                if (!this.owner) {
                    posX = this._publicList[0] + this.index * this._publicList[2];
                    posY = this._publicList[1];
                    this.rotateAngle = Math.PI * 4;
                    this.size = 0.8;
                }
                else {
                    var idx = this.owner.GetIndex();
                    var posIdx = (idx - this._mainPlayerIndex + this.max) % this.max;
                    posX = this._posTemp[posIdx][0];
                    posY = this._posTemp[posIdx][1];
                    this.rotateAngle = Math.PI * 4 - Math.PI / 16;
                    if (this.index == 1) {
                        posX = this._posTemp[posIdx][2];
                        posY = this._posTemp[posIdx][3];
                        this.rotateAngle = Math.PI * 4 + Math.PI / 16;
                    }
                    this.size = this._b ? 0.8 : 0.3;
                }
                this.pos.y = posY;
                this.pos.x = posX;
                if (this._b)
                    _super.prototype.fanpai.call(this);
                _super.prototype.fapai.call(this);
            };
            DezhouData.prototype.fanpai = function () {
                if (!this._b)
                    return;
                _super.prototype.fanpai.call(this);
            };
            DezhouData.prototype.fanpaiall = function () {
                if (this.owner) {
                    var idx = this.owner.GetIndex();
                    var posIdx = (idx - this._mainPlayerIndex + this.max) % this.max;
                    var posX = this._openPosTemp[posIdx][0] + this.index * this._openPosTemp[posIdx][2];
                    var posY = this._openPosTemp[posIdx][1];
                    if (!this.targe_pos) {
                        this.targe_pos = new Vector2();
                    }
                    this.isFinalPos = false;
                    this.targe_pos.x = posX;
                    this.targe_pos.y = posY;
                    var size = void 0;
                    if (idx != this._mainPlayerIndex) {
                        size = 0.6;
                    }
                    else {
                        size = 0.8;
                    }
                    var rotateAngle = Math.PI * 4;
                    this.time_interval = 400;
                    if (!this.pos)
                        return;
                    Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
                    Laya.Tween.to(this, { size: size, rotateAngle: rotateAngle }, this.time_interval);
                    if (this.isShow)
                        return;
                    if (this.owner.IsGiveUp())
                        return;
                    _super.prototype.fanpai.call(this);
                }
            };
            return DezhouData;
        }(gamecomponent.object.PlayingPuKeCard));
        data.DezhouData = DezhouData;
    })(data = gamedezhou.data || (gamedezhou.data = {}));
})(gamedezhou || (gamedezhou = {}));
//# sourceMappingURL=DezhouData.js.map