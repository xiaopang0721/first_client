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
var gamecomponent;
(function (gamecomponent) {
    var scene;
    (function (scene_1) {
        var AvatarGuPai = /** @class */ (function (_super) {
            __extends(AvatarGuPai, _super);
            function AvatarGuPai(g, v) {
                var _this = _super.call(this, g) || this;
                _this._baseData = v;
                _this.texture_url = CompoentPath.custom_atlas_scene + 'gupai.atlas';
                return _this;
            }
            Object.defineProperty(AvatarGuPai.prototype, "card", {
                get: function () {
                    return this._baseData;
                },
                enumerable: true,
                configurable: true
            });
            AvatarGuPai.prototype.update = function (diff) {
                _super.prototype.update.call(this, diff);
                if (!this._baseData)
                    return;
                this.scale = this._baseData.size;
                this._scaleX = this._baseData.scaleX * this._scale;
                this._scaleY = this._baseData.scaleY * this._scale;
                this._pos.x = this._baseData.pos.x;
                this._pos.y = this._baseData.pos.y;
                this._skew_x = this._baseData.skew_x;
                this._skew_y = this._baseData.skew_y;
                this._rotateAngle = this._baseData.rotateAngle;
                this._sortScore = this._baseData.sortScore;
                this._disable = this._baseData.disable;
                this.visible = this.card.visible;
                this._value = this.card.GetCardVal();
            };
            AvatarGuPai.prototype.onDraw = function (diff, bg, scene) {
                this._texture = this.card.isShow ? this._textures["paijiu_" + this._value] : this._textures["paijiu_0"];
                if (!this._texture) {
                    return;
                }
                var thitx = this._pos.x - this._drawW * 0.5;
                var thity = this._pos.y - this._drawH * 0.5;
                var drawW = this._drawW * this._scale;
                var drawH = this._drawH * this._scale;
                this._hitArea = [
                    thitx, thity,
                    thitx + drawW, thity,
                    thitx + drawW, thity + drawH,
                    thitx, thity + drawH
                ];
                _super.prototype.onDraw.call(this, diff, bg, scene);
                // this.drawHitArea(this._hitArea, bg, this.pos.x, this.pos.y, this._drawX, this._drawY);
            };
            AvatarGuPai.prototype.clear = function (checkNow) {
                this._baseData = null;
                _super.prototype.clear.call(this, checkNow);
            };
            return AvatarGuPai;
        }(scene_1.AvatarBase));
        scene_1.AvatarGuPai = AvatarGuPai;
    })(scene = gamecomponent.scene || (gamecomponent.scene = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=AvatarGuPai.js.map