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
        var AvatarPoker = /** @class */ (function (_super) {
            __extends(AvatarPoker, _super);
            function AvatarPoker(g, v) {
                var _this = _super.call(this, g) || this;
                _this._baseData = v;
                _this.texture_url = CompoentPath.custom_atlas_scene + 'card.atlas';
                return _this;
            }
            Object.defineProperty(AvatarPoker.prototype, "card", {
                get: function () {
                    return this._baseData;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 鼠标移动命中
             */
            AvatarPoker.prototype.onMouseAreaMoveHit = function () {
            };
            /**
             * 鼠标弹起命中
             */
            AvatarPoker.prototype.onMouseAreaUpHit = function () {
            };
            AvatarPoker.prototype.update = function (diff) {
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
            AvatarPoker.prototype.onDraw = function (diff, bg, scene) {
                this._texture = this.card.isShow ? this._textures["card_" + this._value] : this._textures["card_0"];
                if (!this._texture) {
                    return;
                }
                _super.prototype.onDraw.call(this, diff, bg, scene);
            };
            AvatarPoker.prototype.clear = function (checkNow) {
                this._baseData = null;
                _super.prototype.clear.call(this, checkNow);
            };
            return AvatarPoker;
        }(scene_1.AvatarOperatorCell));
        scene_1.AvatarPoker = AvatarPoker;
    })(scene = gamecomponent.scene || (gamecomponent.scene = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=AvatarPoker.js.map