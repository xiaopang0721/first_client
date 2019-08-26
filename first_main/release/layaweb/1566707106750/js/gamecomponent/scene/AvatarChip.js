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
* name 筹码
*/
var gamecomponent;
(function (gamecomponent) {
    var scene;
    (function (scene_1) {
        var AvatarChip = /** @class */ (function (_super) {
            __extends(AvatarChip, _super);
            function AvatarChip(g, v) {
                var _this = _super.call(this, g) || this;
                _this._baseData = v;
                _this.texture_url = CompoentPath.custom_atlas_scene + 'chip.atlas';
                return _this;
            }
            Object.defineProperty(AvatarChip.prototype, "clip", {
                get: function () {
                    return this._baseData;
                },
                enumerable: true,
                configurable: true
            });
            AvatarChip.prototype.update = function (diff) {
                _super.prototype.update.call(this, diff);
                if (!this._baseData)
                    return;
                this.scale = this._baseData.size;
                this._scaleX = this._baseData.scaleX * this._scale;
                this._scaleY = this._baseData.scaleY * this._scale;
                this._pos.x = this._baseData.pos.x;
                this._pos.y = this._baseData.pos.y;
                this._rotateAngle = this._baseData.rotateAngle;
                this._sortScore = this._baseData.sortScore;
                this.visible = this._baseData.visible;
                this._valueStr = this.clip.GetCardVal();
                this._type = this.clip.GetCardType();
            };
            AvatarChip.prototype.onDraw = function (diff, bg, scene) {
                this._texture = this._textures["cm_" + this._type];
                if (!this._texture) {
                    return;
                }
                _super.prototype.onDraw.call(this, diff, bg, scene);
                //处理筹码数字
                this.onDrawSZ(diff, bg, scene);
                // let thitx = this._pos.x - this._drawW * 0.5;
                // let thity = this._pos.y - this._drawH * 0.5;
                // let drawW = this._drawW * this._scale;
                // let drawH = this._drawH * this._scale;
                // this._hitArea = [
                // 	thitx, thity,
                // 	thitx + drawW, thity,
                // 	thitx + drawW, thity + drawH,
                // 	thitx, thity + drawH
                // ];
                // this.drawHitArea(this._hitArea, bg, this.pos.x, this.pos.y, this._drawX, this._drawY);
            };
            AvatarChip.prototype.onDrawSZ = function (diff, bg, scene) {
                if (!this._valueStr)
                    return;
                var value_str = this._valueStr.toString(); //字符化
                var value_num = parseInt(value_str);
                if (value_num >= 1000 && value_num % 1000 == 0) {
                    value_str = value_num / 1000 + "k";
                }
                var len = value_str.length; //取字符串长度
                var c_inx = (len - 1) * 0.5; //获取相对位置
                var scale = value_str.length == 1 ? 1.2 : (value_str.length == 2 ? 1.1 : 1.0);
                if (value_str.indexOf("k") >= 2) {
                    scale = 0.9;
                }
                for (var index = 0; index < len; index++) {
                    var str = value_str.charAt(index);
                    var texture = this._textures["sz_" + str];
                    var drawW = texture.sourceWidth * scale;
                    var drawH = texture.sourceHeight * scale;
                    var w = drawW;
                    var h = drawH;
                    var halfw = w / 2;
                    var halfh = h / 2;
                    var matrix = new Laya.Matrix();
                    matrix.tx = -halfw;
                    matrix.ty = -halfh;
                    matrix.scale(this._scaleX, this._scaleY);
                    matrix.rotate(this._rotateAngle);
                    matrix.skew(this._skew_x, this._skew_y);
                    matrix.tx += this._drawX;
                    matrix.ty += this._drawY;
                    matrix.ty -= 3;
                    bg.drawTexture(texture, (index - c_inx) * drawW, 0, drawW, drawH, matrix, this._alpha);
                }
            };
            AvatarChip.prototype.clear = function (checkNow) {
                this._baseData = null;
                _super.prototype.clear.call(this, checkNow);
            };
            return AvatarChip;
        }(scene_1.AvatarBase));
        scene_1.AvatarChip = AvatarChip;
    })(scene = gamecomponent.scene || (gamecomponent.scene = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=AvatarChip.js.map