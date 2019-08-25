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
var gamebuyu;
(function (gamebuyu) {
    var scene;
    (function (scene_1) {
        var AvatarBullet = /** @class */ (function (_super) {
            __extends(AvatarBullet, _super);
            function AvatarBullet(g, v) {
                var _this = _super.call(this, g) || this;
                // 视图旋转角度
                _this._angle = 0;
                // 缩放
                _this._scale = 1;
                _this._bullet = v;
                _this._oid = _this._bullet.oid;
                _this._skin = _this._bullet.skin;
                _this._hitSkin = _this._bullet.hitSkin;
                _this._sortScore = 8;
                // 子弹贴图
                _this._textureZD = Loader.getRes(Path_game_buyu.scene_bullet + _this._skin + '.png');
                _this.texture_url = Path_game_buyu.custom_atlas_yw + _this._hitSkin + '.atlas';
                _this.update(0);
                return _this;
            }
            Object.defineProperty(AvatarBullet.prototype, "oid", {
                get: function () {
                    return this._oid;
                },
                enumerable: true,
                configurable: true
            });
            AvatarBullet.prototype.update = function (diff) {
                if (!this.visible || !this._bullet) {
                    return;
                }
                // 更新位置
                this._pos.set(this._bullet.pos);
                this._scale = this._bullet.scale;
                // 视图朝向
                this._angle = this._bullet.angle;
            };
            // 绘制
            AvatarBullet.prototype.onMultiDraw = function (diff, gArr, scene) {
                if (!this.visible || !this._bullet) {
                    return;
                }
                var bg = gArr[0];
                var fg = gArr[1];
                var pg = gArr[2];
                var ng = gArr[3];
                var hg = gArr[4];
                var texture;
                switch (this._bullet.state) {
                    case gamebuyu.data.BULLET_STATE_FLY:
                        texture = this._textureZD;
                        break;
                    case gamebuyu.data.BULLET_STATE_BOMB:
                        texture = this._textures[1];
                        break;
                }
                if (!texture) {
                    return;
                }
                var drawX = scene.camera.getScenePxByCellX(this._pos.x);
                var drawY = scene.camera.getScenePxByCellY(this._pos.y);
                var tw = texture.sourceWidth;
                var th = texture.sourceHeight;
                var matrix = new Laya.Matrix();
                matrix.tx = -tw / 2;
                matrix.ty = -th / 2;
                matrix.scale(this._scale, this._scale);
                matrix.rotate(this._angle);
                if (scene.camera.flipV) {
                    matrix.scale(1, -1);
                }
                matrix.tx += drawX;
                matrix.ty += drawY;
                fg.drawTexture(texture, 0, 0, tw, th, matrix);
                // this.drawHitPoint(diff, pg, scene);
            };
            // 绘制碰撞点
            AvatarBullet.prototype.drawHitPoint = function (diff, g, scene) {
                var color = '#FF0000';
                var lineWidth = 2;
                var drawX = scene.camera.getScenePxByCellX(this._bullet.pos.x);
                var drawY = scene.camera.getScenePxByCellY(this._bullet.pos.y);
                g.drawCircle(drawX, drawY, this._bullet.pos.radius - lineWidth, null, color, lineWidth);
            };
            AvatarBullet.prototype.clear = function (checkNow) {
                _super.prototype.clear.call(this, checkNow);
                this._bullet = null;
                this._textureZD = null;
            };
            return AvatarBullet;
        }(gamecomponent.scene.AvatarBase));
        scene_1.AvatarBullet = AvatarBullet;
    })(scene = gamebuyu.scene || (gamebuyu.scene = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=AvatarBullet.js.map