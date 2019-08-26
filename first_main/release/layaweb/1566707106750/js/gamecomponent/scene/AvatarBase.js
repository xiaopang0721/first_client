var gamecomponent;
(function (gamecomponent) {
    var scene;
    (function (scene_1) {
        var AvatarBase = /** @class */ (function () {
            function AvatarBase(v) {
                this._pivotX = 0;
                this._pivotY = 0;
                // 旋转角度
                this._skew_x = 0;
                this._skew_y = 0;
                // 旋转角度
                this._rotateAngle = 0;
                // 是否水平翻转
                this._isFlipH = false;
                // 渲染矩阵
                this._matrix = new Matrix();
                this._sortScore = 0;
                // 缩放
                this._textures = {};
                // 透明度
                this._alpha = 1;
                // 缩放
                this._scaleX = 1;
                this._scaleY = 1;
                this._scale = 1;
                this._oid = 0;
                this._mouseEnabled = false;
                this._pos = new Vector2;
                this._visible = true;
                this._sortScore = 0;
                this._game = v;
                this._camera = scene_1.Camera.ins;
            }
            Object.defineProperty(AvatarBase.prototype, "baseData", {
                get: function () {
                    return this._baseData;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AvatarBase.prototype, "pos", {
                get: function () {
                    return this._pos;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AvatarBase.prototype, "visible", {
                get: function () {
                    return this._visible;
                },
                set: function (v) {
                    this._visible = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AvatarBase.prototype, "lookPos", {
                // 摄像机使用的位置
                get: function () {
                    return this._pos;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AvatarBase.prototype, "sortScore", {
                /**
                 * 排序评分
                 */
                get: function () {
                    return this._sortScore;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AvatarBase.prototype, "drawX", {
                get: function () {
                    return this._drawX;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AvatarBase.prototype, "drawY", {
                get: function () {
                    return this._drawY;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AvatarBase.prototype, "alpha", {
                /**
                 * 透明度
                 */
                get: function () {
                    return this._alpha;
                },
                set: function (v) {
                    this._alpha = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AvatarBase.prototype, "scale", {
                set: function (v) {
                    this._scale = v;
                    this._scaleX = this._scaleX * this._scale;
                    this._scaleY = this._scaleY * this._scale;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AvatarBase.prototype, "oid", {
                get: function () {
                    return this._oid;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AvatarBase.prototype, "mouseEnabled", {
                /**
                 * 鼠标响应
                 */
                set: function (v) {
                    this._mouseEnabled = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AvatarBase.prototype, "texture_url", {
                set: function (url) {
                    this._texture_url = url;
                    this.startLoadTexture();
                },
                enumerable: true,
                configurable: true
            });
            // 加载贴图
            AvatarBase.prototype.startLoadTexture = function () {
                var _this = this;
                var url = this._texture_url;
                if (!url)
                    return;
                if (this._refAssetComplete)
                    return;
                if (!this._refAsset) {
                    this._refAsset = RefAsset.Get(url);
                    this._refAsset.retain();
                }
                var refAsset = this._refAsset;
                if (!refAsset.parseComplete) {
                    refAsset.once(LEvent.COMPLETE, this, function () {
                        _this.initTexture();
                    });
                }
                else {
                    this.initTexture();
                }
                this._refAssetComplete = false;
            };
            AvatarBase.prototype.initTexture = function () {
                // 获取贴图
                var url = this._texture_url;
                if (!url)
                    return;
                if (this._refAssetComplete)
                    return;
                var atlas = Loader.getAtlas(url);
                for (var index = 0; index < atlas.length; index++) {
                    var a = atlas[index];
                    var name_1 = a.substring(a.lastIndexOf("/") + 1, a.lastIndexOf(".png"));
                    this._textures[name_1] = Loader.getRes(a);
                }
                this._refAssetComplete = true;
            };
            AvatarBase.prototype.update = function (diff) {
                if (this._refAsset && !this._refAssetComplete && !this._refAsset.hasListener(LEvent.COMPLETE) && !(this instanceof scene_1.AvatarChip)) {
                    this.startLoadTexture();
                }
                if (!this._baseData || !this._pos)
                    return;
                if (this._baseData.isFinalPos && this._baseData.targe_pos) {
                    this._pos.x = this._baseData.targe_pos.x;
                    this._pos.y = this._baseData.targe_pos.y;
                }
                this._drawX = this._camera.getScenePxByCellX(this._pos.x);
                this._drawY = this._camera.getScenePxByCellY(this._pos.y);
            };
            AvatarBase.prototype.onDraw = function (diff, bg, scene) {
                if (!this._texture || !this._visible || !this._baseData)
                    return;
                if (!this._drawW) {
                    this._drawW = this._texture.sourceWidth;
                }
                if (!this._drawH) {
                    this._drawH = this._texture.sourceHeight;
                }
                var w = this._drawW;
                var h = this._drawH;
                var halfw = w / 2;
                var halfh = h / 2;
                var matrix = this._matrix;
                matrix.identity();
                matrix.tx = -halfw;
                matrix.ty = -halfh;
                matrix.scale(this._scaleX, this._scaleY);
                if (this instanceof scene_1.AvatarChip) {
                    matrix.rotate(0);
                }
                else {
                    matrix.rotate(this._rotateAngle);
                }
                matrix.skew(this._skew_x, this._skew_y);
                matrix.tx += this._drawX;
                matrix.ty += (this._drawY + (this._baseData.toggle ? this._baseData.toggleDistance : 0));
                bg.drawTexture(this._texture, 0, 0, this._drawW, this._drawH, matrix, this._alpha);
                var thitx = this._camera.getCellXByScene(matrix.tx);
                var thity = this._camera.getCellYByScene(matrix.ty);
                var drawW = this._drawW * this._scaleX;
                var drawH = this._drawH * this._scaleY;
                this._hitArea = [
                    thitx, thity,
                    thitx + drawW, thity,
                    thitx + drawW, thity + drawH,
                    thitx, thity + drawH
                ];
                if (this._disable) {
                    bg.drawTexture(this._textures[scene_1.SceneRes.GRAY], 0, 0, this._drawW, this._drawH, matrix, this._alpha);
                }
                if (this._light) {
                    bg.drawTexture(this._textures[scene_1.SceneRes.LIGHT], 0, 0, this._drawW, this._drawH, matrix, this._alpha);
                }
            };
            AvatarBase.prototype.onMultiDraw = function (diff, gArr, scene) {
            };
            AvatarBase.prototype.clear = function (checkNow) {
                this.hasClear = true;
                this._texture = null;
                this._textures = null;
                this._refAssetComplete = false;
                this._texture_url = null;
                if (this._refAsset) {
                    this._refAsset.offAll();
                    this._refAsset.release(true);
                    this._refAsset = null;
                }
            };
            AvatarBase.prototype.drawHitArea = function (area, g, x, y, dx, dy) {
                if (!area) {
                    return;
                }
                var hitArea = [];
                for (var i = 0; i < area.length;) {
                    hitArea.push(area[i] - x, area[i + 1] - y);
                    i += 2;
                }
                var cls = ['#000', , '#00FF00', '#FF0000', '#0000FF'];
                if (!this._hitAreaColor) {
                    this._hitAreaColor = cls[Math.floor(Math.random() * cls.length)];
                }
                g.drawPoly(dx, dy, hitArea, null, this._hitAreaColor, 2);
            };
            return AvatarBase;
        }());
        scene_1.AvatarBase = AvatarBase;
    })(scene = gamecomponent.scene || (gamecomponent.scene = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=AvatarBase.js.map