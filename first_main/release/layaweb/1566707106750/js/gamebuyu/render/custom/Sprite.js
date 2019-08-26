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
    var render;
    (function (render) {
        var custom;
        (function (custom) {
            var IndexBuffer2D = Laya.IndexBuffer2D;
            var VertexBuffer2D = Laya.VertexBuffer2D;
            // 自定义
            var CSprite = /** @class */ (function (_super) {
                __extends(CSprite, _super);
                function CSprite(texture) {
                    var _this = _super.call(this) || this;
                    _this.indexNum = 0;
                    _this._scaleX = 1;
                    _this._scaleY = 1;
                    /**旋转角度，默认值为0。以角度为单位。*/
                    _this._rotation = 0;
                    _this.customRenderEnable = true;
                    if (texture)
                        _this.initData(texture);
                    return _this;
                }
                // 公用的顶点&纹理坐标缓冲区
                CSprite.getVertexBuffer = function () {
                    if (!this._vertexBuffer) {
                        this._vertexBuffer = VertexBuffer2D.create();
                        this._vertexBuffer.append(new Float32Array([
                            -1, 1, 0, 0, 1, 1, 1, 1,
                            1, 1, 1, 0, 1, 1, 1, 1,
                            1, -1, 1, 1, 1, 1, 1, 1,
                            -1, -1, 0, 1, 1, 1, 1, 1,
                        ]));
                    }
                    return this._vertexBuffer;
                };
                // 公用的顶点缓冲区
                CSprite.getIndexBuffer = function () {
                    if (!this._indexBuffer) {
                        this._indexBuffer = IndexBuffer2D.create();
                        this._indexBuffer.append(new Uint16Array([0, 1, 2, 0, 2, 3]));
                    }
                    return this._indexBuffer;
                };
                Object.defineProperty(CSprite.prototype, "vertexBuffer", {
                    get: function () {
                        if (!this._vertexBuffer) {
                            if (this._vertices) {
                                this._vertexBuffer = VertexBuffer2D.create();
                                this._vertexBuffer.append(new Float32Array(this._vertices));
                            }
                            else {
                                this._vertexBuffer = CSprite.getVertexBuffer();
                            }
                        }
                        return this._vertexBuffer;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CSprite.prototype, "indexBuffer", {
                    get: function () {
                        if (!this._indexBuffer) {
                            if (this._indexs) {
                                this._indexBuffer = IndexBuffer2D.create();
                                this._indexBuffer.append(new Uint16Array(this._indexs));
                            }
                            else {
                                this._indexBuffer = CSprite.getIndexBuffer();
                            }
                        }
                        return this._indexBuffer;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CSprite.prototype, "scaleX", {
                    get: function () {
                        return this._scaleX;
                    },
                    set: function (v) {
                        this._scaleX = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CSprite.prototype, "scaleY", {
                    get: function () {
                        return this._scaleY;
                    },
                    set: function (v) {
                        this._scaleY = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                CSprite.prototype.scale = function (scaleX, scaleY, speedMode) {
                    this._scaleX = scaleX;
                    this._scaleY = scaleY;
                    return this;
                };
                Object.defineProperty(CSprite.prototype, "rotation", {
                    get: function () {
                        return this._rotation;
                    },
                    set: function (v) {
                        this._rotation = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * 初始化数据
                 */
                CSprite.prototype.initData = function (texture) {
                    this.indexNum = 6;
                    this._width = texture.sourceWidth;
                    this._height = texture.sourceHeight;
                    this._shader = this.createShader();
                    this._shaderValue = this.createShaderValue();
                    this._shaderValue.textureHost = texture;
                };
                CSprite.prototype.createShader = function () {
                    return custom.UIShader.shader;
                };
                CSprite.prototype.createShaderValue = function () {
                    return new custom.UIShaderValue();
                };
                CSprite.prototype.customRender = function (context, x, y) {
                    // 只要自定义渲染
                    this._renderType = laya.renders.RenderSprite.CUSTOM;
                    this.update();
                    var webGLContext = context.ctx;
                    var oldBlendType = webGLContext.globalCompositeOperation;
                    var curBlendType = (this._shaderValue && this._shaderValue.blendMode) || this.blendMode;
                    curBlendType && (webGLContext.globalCompositeOperation = curBlendType);
                    this._shaderValue && webGLContext.setIBVB && (typeof webGLContext.setIBVB === 'function') && webGLContext.setIBVB(0, 0, this.indexBuffer, this.vertexBuffer, this.indexNum, null, this._shader, this._shaderValue, 0, 0);
                    curBlendType && (webGLContext.globalCompositeOperation = oldBlendType);
                };
                CSprite.prototype.update = function () {
                    this.updateTransform();
                };
                /**
                 * 更新变换信息
                 */
                CSprite.prototype.updateTransform = function (x, y, width, height, angle, alpha, shaderValue) {
                    !x && (x = 0);
                    !y && (y = 0);
                    !width && (width = this._width);
                    !height && (height = this._height);
                    !angle && (angle = 2 * Math.PI - Math.PI * Number(this.rotation / 180));
                    !alpha && (alpha = this.alpha);
                    !shaderValue && (shaderValue = this._shaderValue);
                    if (!shaderValue)
                        return;
                    // 画布大小
                    var canvasWidth = Laya.Render._mainCanvas.width;
                    var canvasHeight = Laya.Render._mainCanvas.height;
                    var parent = this.parent;
                    // 大小(全局缩放&换算屏幕比) 注意：顶点映射到全屏的单位为2   
                    shaderValue.v_size[0] = width * parent.globalScaleX * this._scaleX / canvasWidth;
                    shaderValue.v_size[1] = height * parent.globalScaleY * this._scaleY / canvasHeight;
                    // 位置
                    var p = Point.TEMP.setTo(x, y);
                    this.localToGlobal(p);
                    // 转换到顶点坐标系
                    p.y = -p.y;
                    // 换算屏幕比&转UI坐标系&计算锚点
                    var w = shaderValue.v_size[0] * 2;
                    var h = shaderValue.v_size[1] * 2;
                    shaderValue.pos[0] = -1 + p.x / (canvasWidth / 2) + (.5 - this.pivotX) * w;
                    shaderValue.pos[1] = 1 + p.y / (canvasHeight / 2) + (-.5 + this.pivotY) * h;
                    // 锚点
                    shaderValue.pivot[0] = this.pivotX;
                    shaderValue.pivot[1] = this.pivotY;
                    // 角度
                    shaderValue.angle = angle;
                    // 透明度
                    shaderValue.v_alpha = alpha;
                    // 屏幕高宽比
                    shaderValue.aspect_ratio = canvasHeight / canvasWidth;
                };
                /**
                 * 释放
                 */
                CSprite.prototype.dispose = function () {
                    if (this._shaderValue) {
                        this._shaderValue.clear();
                        this._shaderValue = null;
                    }
                };
                return CSprite;
            }(Laya.Sprite));
            custom.CSprite = CSprite;
            // UV动画
            var UVMovSprite = /** @class */ (function (_super) {
                __extends(UVMovSprite, _super);
                function UVMovSprite(texture) {
                    var _this = _super.call(this, texture) || this;
                    _this._speedX = 1;
                    _this._speedY = 1;
                    _this._startTimer = Laya.timer.currTimer;
                    return _this;
                }
                Object.defineProperty(UVMovSprite.prototype, "speedX", {
                    /**
                     * x轴速度 百分比/s
                     */
                    set: function (v) {
                        this._speedX = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UVMovSprite.prototype, "speedY", {
                    /**
                     * y轴速度 百分比/s
                     */
                    set: function (v) {
                        this._speedY = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UVMovSprite.prototype, "unitWidth", {
                    /**
                     * 设置滚动的单位宽度（控制贴图被拉长）
                     */
                    set: function (v) {
                        var value = this._shaderValue;
                        value.ratio_x = this.width / v;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UVMovSprite.prototype, "unitHeight", {
                    /**
                     * 设置滚动的单位高度（控制贴图被拉长）
                     */
                    set: function (v) {
                        var value = this._shaderValue;
                        value.ratio_y = this.height / v;
                    },
                    enumerable: true,
                    configurable: true
                });
                UVMovSprite.prototype.createShader = function () {
                    return custom.UVMovShader.shader;
                };
                UVMovSprite.prototype.createShaderValue = function () {
                    return new custom.UVMovShaderValue();
                };
                UVMovSprite.prototype.update = function () {
                    _super.prototype.update.call(this);
                    var time = Laya.timer.currTimer - this._startTimer;
                    var value = this._shaderValue;
                    value.mov_x = time * this._speedX / 1000;
                    value.mov_y = time * this._speedY / 1000;
                    value.mov_x -= Math.floor(value.mov_x);
                    value.mov_y -= Math.floor(value.mov_y);
                };
                return UVMovSprite;
            }(CSprite));
            custom.UVMovSprite = UVMovSprite;
            // 水波
            var WaveSprite = /** @class */ (function (_super) {
                __extends(WaveSprite, _super);
                function WaveSprite(texture) {
                    var _this = _super.call(this, texture) || this;
                    _this._needWave = true;
                    _this._motion = 0;
                    _this._needWave = true;
                    return _this;
                }
                Object.defineProperty(WaveSprite.prototype, "needWave", {
                    /**是否波动 */
                    set: function (value) {
                        this._needWave = value;
                        if (!value) {
                            this._motion = 0;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                WaveSprite.prototype.createShader = function () {
                    return custom.WaveShader.shader;
                };
                WaveSprite.prototype.createShaderValue = function () {
                    return new custom.WaveShaderValue();
                };
                WaveSprite.prototype.update = function () {
                    _super.prototype.update.call(this);
                    var value = this._shaderValue;
                    if (value && this._needWave) { //帧率过低水波就不动了
                        value.motion = this._motion;
                        this._motion += 0.05;
                        if (this._motion > 1.0e20) {
                            this._motion = 0.0;
                        }
                    }
                };
                return WaveSprite;
            }(CSprite));
            custom.WaveSprite = WaveSprite;
            var Lightning = /** @class */ (function () {
                function Lightning() {
                }
                return Lightning;
            }());
            // 电层
            var LightningSprite = /** @class */ (function (_super) {
                __extends(LightningSprite, _super);
                function LightningSprite(texture, camera, ballsSprite) {
                    var _this = _super.call(this, texture) || this;
                    _this._datas = [];
                    _this._drawStarPoss = [];
                    _this._sbTextures = [];
                    _this._dbTextures = [];
                    _this._ballsSprite = ballsSprite;
                    _this._ballsSprite.blendMode = Laya.BlendMode.ADD;
                    _this._camera = camera;
                    // 获取贴图
                    var tex;
                    var idx = 1;
                    do {
                        var url = Path.scene + 'lightning/sb_' + idx + '.png';
                        tex = Loader.getRes(url);
                        if (tex) {
                            _this._sbTextures.push(tex);
                            idx++;
                        }
                        else {
                            break;
                        }
                    } while (true);
                    idx = 1;
                    do {
                        var url = Path.scene + 'lightning/db_' + idx + '.png';
                        tex = Loader.getRes(url);
                        if (tex) {
                            _this._dbTextures.push(tex);
                            idx++;
                        }
                        else {
                            break;
                        }
                    } while (true);
                    _this.frameLoop(1, _this, _this.drawBalls);
                    return _this;
                }
                Object.defineProperty(LightningSprite.prototype, "unitWidth", {
                    /**
                     * 设置滚动的单位宽度（控制贴图被拉长）
                     */
                    set: function (v) {
                        this._unitWidth = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LightningSprite.prototype, "unitHeight", {
                    /**
                     * 设置滚动的单位高度（控制贴图被拉长）
                     */
                    set: function (v) {
                        this._unitHeight = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                LightningSprite.prototype.createShader = function () {
                    return custom.UVMovShader.shader;
                };
                LightningSprite.prototype.createShaderValue = function () {
                    return new custom.UVMovShaderValue();
                };
                LightningSprite.prototype.add = function (startPos, endPos, delay) {
                    var data = new Lightning();
                    data.startPos = startPos;
                    data.endPos = endPos;
                    data.startTime = Laya.timer.currTimer + delay;
                    data.endTime = data.startTime + LightningSprite._time;
                    data.shaderValue = new custom.UVMovShaderValue();
                    data.shaderValue.blendMode = Laya.BlendMode.ADD;
                    data.shaderValue.textureHost = this._shaderValue.textureHost;
                    this._datas.push(data);
                };
                LightningSprite.prototype.drawBalls = function () {
                    var currTimer = Laya.timer.currTimer;
                    this._ballsSprite.graphics.clear();
                    for (var i = 0; i < this._datas.length;) {
                        var data_1 = this._datas[i];
                        if (!data_1)
                            continue;
                        if (data_1.endTime < currTimer) {
                            this._datas.splice(i, 1);
                        }
                        else if (currTimer < data_1.startTime) {
                            i++;
                            continue;
                        }
                        else {
                            var idx = Math.floor((currTimer - data_1.startTime) / LightningSprite._frameTime);
                            var dx = void 0, dy = void 0;
                            var tw = 0, th = 0;
                            var texture = void 0;
                            // 绘制原始球
                            if (this._drawStarPoss.indexOf(data_1.startPos) == -1) {
                                this._drawStarPoss.push(data_1.startPos);
                                texture = this._sbTextures[idx % this._sbTextures.length];
                                if (texture) {
                                    tw = texture.sourceWidth;
                                    th = texture.sourceHeight;
                                    dx = this._camera.getScenePxByCellX(data_1.startPos.x) - tw / 2;
                                    dy = this._camera.getScenePxByCellY(data_1.startPos.y) - th / 2;
                                    this._ballsSprite.graphics.drawTexture(texture, dx, dy, tw, th);
                                }
                            }
                            // 绘制目标球
                            texture = this._dbTextures[idx % this._dbTextures.length];
                            if (texture) {
                                tw = texture.sourceWidth;
                                th = texture.sourceHeight;
                                dx = this._camera.getScenePxByCellX(data_1.endPos.x) - tw / 2;
                                dy = this._camera.getScenePxByCellY(data_1.endPos.y) - th / 2;
                                this._ballsSprite.graphics.drawTexture(texture, dx, dy, tw, th);
                            }
                            i++;
                        }
                    }
                    this._drawStarPoss.length = 0;
                };
                LightningSprite.prototype.update = function () {
                    var currTimer = Laya.timer.currTimer;
                    var time = currTimer - this._startTimer;
                    var speedx = time * this._speedX / 1000;
                    var speedy = time * this._speedY / 1000;
                    speedx -= Math.floor(speedx);
                    speedy -= Math.floor(speedy);
                    // 更新数据
                    var len = this._datas ? this._datas.length : 0;
                    for (var i = 0; i < len; i++) {
                        var data_2 = this._datas[i];
                        if (!data_2)
                            continue;
                        if (currTimer < data_2.startTime) {
                            continue;
                        }
                        data_2.shaderValue.mov_x = speedx;
                        data_2.shaderValue.mov_y = speedy;
                        data_2.shaderValue.UV = data_2.shaderValue.textureHost.uv;
                        var x = this._camera.getScenePxByCellX(data_2.startPos.x);
                        var y = this._camera.getScenePxByCellY(data_2.startPos.y);
                        var height = data_2.startPos.dist(data_2.endPos);
                        Vector2.temp.set(data_2.startPos).sub(data_2.endPos);
                        if (!this._camera.flipV) {
                            Vector2.temp.y = -Vector2.temp.y;
                        }
                        this._unitWidth && (data_2.shaderValue.ratio_x = data_2.shaderValue.textureHost.width / this._unitWidth);
                        this._unitHeight && (data_2.shaderValue.ratio_y = height / this._unitHeight);
                        this.updateTransform(x, y, null, height, Vector2.temp.angle(Vector2.down) + Math.PI / 2, null, data_2.shaderValue);
                        var webGLContext = laya.renders.Render.context.ctx;
                        var oldBlendType = webGLContext.globalCompositeOperation;
                        var curBlendType = this._shaderValue.blendMode || this.blendMode;
                        curBlendType && (webGLContext.globalCompositeOperation = curBlendType);
                        (typeof webGLContext.setIBVB === 'function') && webGLContext.setIBVB(0, 0, this.indexBuffer, this.vertexBuffer, this.indexNum, null, this._shader, data_2.shaderValue, 0, 0);
                        curBlendType && (webGLContext.globalCompositeOperation = oldBlendType);
                    }
                };
                LightningSprite.prototype.customRender = function (context, x, y) {
                    // 只要自定义渲染
                    this._renderType = laya.renders.RenderSprite.CUSTOM;
                    this.update();
                };
                LightningSprite._time = 1200;
                LightningSprite._frameTime = 1000 / 12;
                return LightningSprite;
            }(UVMovSprite));
            custom.LightningSprite = LightningSprite;
            // 扫光
            var FELightSweepSprite = /** @class */ (function (_super) {
                __extends(FELightSweepSprite, _super);
                function FELightSweepSprite(texture) {
                    return _super.call(this, texture) || this;
                }
                FELightSweepSprite.prototype.createShader = function () {
                    return custom.FELightSweepShader.shader;
                };
                FELightSweepSprite.prototype.createShaderValue = function () {
                    return new custom.FELightSweepShaderValue();
                };
                FELightSweepSprite.prototype.initData = function (texture) {
                    _super.prototype.initData.call(this, texture);
                    var value = this._shaderValue;
                    value.A = 1;
                    value.B = .5;
                    value.dx = 6;
                    value.dy = 0;
                    value.radius = .2;
                    value.shineFactor = 1.75;
                };
                FELightSweepSprite.prototype.update = function () {
                    _super.prototype.update.call(this);
                    var value = this._shaderValue;
                    value.time = Laya.timer.currTimer / 1000 % 1;
                };
                return FELightSweepSprite;
            }(CSprite));
            custom.FELightSweepSprite = FELightSweepSprite;
        })(custom = render.custom || (render.custom = {}));
    })(render = gamebuyu.render || (gamebuyu.render = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=Sprite.js.map