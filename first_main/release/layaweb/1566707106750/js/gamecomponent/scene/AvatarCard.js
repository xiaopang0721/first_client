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
        var AvatarCard = /** @class */ (function (_super) {
            __extends(AvatarCard, _super);
            function AvatarCard(g, v) {
                var _this = _super.call(this, g) || this;
                _this._baseData = v;
                _this.texture_url = CompoentPath.custom_atlas_scene + 'card.atlas';
                return _this;
            }
            Object.defineProperty(AvatarCard.prototype, "card", {
                get: function () {
                    return this._baseData;
                },
                enumerable: true,
                configurable: true
            });
            AvatarCard.prototype.update = function (diff) {
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
                this._light = this._baseData.light;
                this.visible = this._baseData.visible;
                this._value = this.card.GetVal();
            };
            AvatarCard.prototype.onDraw = function (diff, bg, scene) {
                this._texture = this.card.isShow ? this._textures["card_" + this._value] : this._textures["card_0"];
                if (!this._texture) {
                    return;
                }
                // let thitx = this._drawX - this._drawW * 0.5;
                // let thity = this._drawY - this._drawH * 0.5;
                // let drawW = this._drawW * this._scale;
                // let drawH = this._drawH * this._scale;
                // this._hitArea = [
                // 	thitx, thity,
                // 	thitx + drawW, thity,
                // 	thitx + drawW, thity + drawH,
                // 	thitx, thity + drawH
                // ];
                _super.prototype.onDraw.call(this, diff, bg, scene);
                // this.drawHitArea(this._hitArea, bg, this.pos.x, this.pos.y, this._drawX, this._drawY);
            };
            AvatarCard.prototype.clear = function (checkNow) {
                this._baseData = null;
                _super.prototype.clear.call(this, checkNow);
            };
            return AvatarCard;
        }(scene_1.AvatarOperatorCell));
        scene_1.AvatarCard = AvatarCard;
    })(scene = gamecomponent.scene || (gamecomponent.scene = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=AvatarCard.js.map