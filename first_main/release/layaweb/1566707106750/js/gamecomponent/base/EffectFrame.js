/**
* 序列帧特效
*/
var gamecomponent;
(function (gamecomponent) {
    var base;
    (function (base) {
        var EffectFrame = /** @class */ (function () {
            function EffectFrame() {
                this.poolName = 'EffectFrame';
                this._total = 0;
                // 每帧时长 (直接固定死)
                this._frameTime = 83;
                //是否播放完毕停留在最后一帧
                this._isStopLastFrame = false;
                // 延迟时间
                this._delayTimer = 0;
                this._isMouseEnabled = false;
                this.anchorPosX = 0;
                this.anchorPosY = 0;
                this._regX = 0;
                this._regY = 0;
                this._scale = 1;
                this._offsetX = 0;
                this._offsetY = 0;
                this._startIdx = 0;
                //设置大小差值
                this._offsetW = 0;
                this._offsetH = 0;
                if (!EffectFrame._tempMix) {
                    EffectFrame._tempMix = new Matrix();
                }
                this.reset();
                this._assetsLoader = new AssetsLoader();
                this.setAssetPath(CompoentPath.custom_atlas);
            }
            Object.defineProperty(EffectFrame.prototype, "__ROOT_ID", {
                //根贴图编码
                get: function () {
                    return this._texture ? this._texture["__ROOT_ID"] : 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(EffectFrame.prototype, "delayTimer", {
                set: function (v) {
                    this._delayTimer = v;
                    this._startTime = Laya.timer.currTimer + this._delayTimer;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(EffectFrame.prototype, "loop", {
                //是否循环
                get: function () {
                    return this._loop;
                },
                enumerable: true,
                configurable: true
            });
            EffectFrame.prototype.setLoop = function (v) {
                this._loop = v;
            };
            EffectFrame.prototype.setStopLastFrame = function (v) {
                this._isStopLastFrame = v;
            };
            EffectFrame.prototype.getStopLastFrame = function () {
                return this._isStopLastFrame;
            };
            EffectFrame.prototype.setRotation = function (v) {
                this._rotation = v;
            };
            EffectFrame.prototype.setMouseEnabled = function (value) {
                if (this._isMouseEnabled == value)
                    return;
                this._isMouseEnabled = value;
                if (this._isMouseEnabled) {
                    if (!this._hitRect) {
                        this._hitRect = new Rectangle();
                    }
                }
                else {
                    this._hitRect = null;
                }
            };
            /**
             * 进池 （相当于对象dispose函数）
             */
            EffectFrame.prototype.intoPool = function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
                this.reset();
            };
            /**
             * 出池 （相当于对象初始化函数）
             */
            EffectFrame.prototype.outPool = function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
                this._total = arg[0];
                this._fps = arg[1];
                this._callBack = arg.length > 2 ? arg[2] : null;
                this.setFps(this._fps);
                this.setAssetPath('ui/');
            };
            /**
             * 设置默认路径
             * @param value
             */
            EffectFrame.prototype.setAssetPath = function (value) {
                this._assetPath = value;
            };
            // 设置数据
            EffectFrame.prototype.setData = function (data, fps, startIdx, dataFix, reverse) {
                if (fps === void 0) { fps = 12; }
                if (startIdx === void 0) { startIdx = 10000; }
                if (dataFix === void 0) { dataFix = ""; }
                if (reverse === void 0) { reverse = false; }
                this._data = data;
                this._startIdx = startIdx;
                this.setFps(fps);
                this._assetsLoader.load([CompoentPath.custom_atlas + this._assetPath + data + '.atlas'], Handler.create(this, this.onAssetsLoaded, [data, dataFix, startIdx, reverse]));
            };
            // 设置数据
            EffectFrame.prototype.setFps = function (v) {
                this._fps = v;
                this._frameTime = Math.floor(1000 / v);
                this._startTime = Laya.timer.currTimer + this._delayTimer;
            };
            Object.defineProperty(EffectFrame.prototype, "scale", {
                set: function (v) {
                    this._scale = v;
                },
                enumerable: true,
                configurable: true
            });
            // 设置偏移
            EffectFrame.prototype.setOffset = function (x, y) {
                this._offsetX = x;
                this._offsetY = y;
            };
            EffectFrame.prototype.setSize = function (x, y) {
                this._offsetW = x;
                this._offsetH = y;
            };
            EffectFrame.prototype.onAssetsLoaded = function (data, dataFix, startIdx, reverse) {
                if (dataFix === void 0) { dataFix = ""; }
                if (startIdx === void 0) { startIdx = 10000; }
                if (reverse === void 0) { reverse = false; }
                this.setFrames(this._assetPath + data + '/' + dataFix + "{0}.png", startIdx, reverse);
            };
            EffectFrame.prototype.setFrames = function (img, start, reverse) {
                if (start === void 0) { start = 0; }
                if (reverse === void 0) { reverse = false; }
                var frames = CompoentPath.getSeqFrames(img, this._total, start, reverse);
                var empty = true;
                this._textures = [];
                var flen = frames ? frames.length : 0;
                for (var i = 0; i < flen; i++) {
                    var texture = Loader.getRes(frames[i]);
                    if (texture) {
                        empty = false;
                        if (!this.centrePoint) {
                            // 没有设置中心点的话默认首张图的中心点为特效中心点
                            this.centrePoint = new Vector2();
                            this.centrePoint.x = -texture.sourceWidth / 2;
                            this.centrePoint.y = -texture.sourceHeight / 2;
                        }
                        this._textures.push(texture);
                    }
                }
                if (empty) {
                    this.isPlayEnd = true;
                }
                else {
                    this._frameCount = this._textures.length;
                    this._duration = this._frameCount * this._frameTime;
                }
            };
            EffectFrame.prototype.updateTexture = function () {
                if (!this._textures)
                    return;
                var currTimer = Laya.timer.currTimer;
                var diff = currTimer - this._startTime;
                if (diff < 0) {
                    return;
                }
                //判断播放时间是否结束，循环的除外
                if (!this._loop && diff >= this._duration) {
                    this.isPlayEnd = true;
                    this._callBack && this._callBack(this); //播完有回调的话
                    return;
                }
                //获得无限完整动画循环之后剩余的时间
                var totalTime = this._frameTime * this._frameCount;
                var frameYu = diff % totalTime;
                //定位到帧位置
                this._curFrameIndex = MathU.parseInt(frameYu / this._frameTime);
                if (this._curFrameIndex >= this._frameCount) {
                    this._curFrameIndex = this._frameCount - 1;
                }
                if (this.isPlayEnd) {
                    return;
                }
                this._texture = this._textures[this._curFrameIndex];
                var point;
                this._centrePoints && (point = this._centrePoints[this._curFrameIndex]);
                if (point) {
                    this._regX = point.x;
                    this._regY = point.y;
                }
                else {
                    this._regX = this.centrePoint.x;
                    this._regY = this.centrePoint.y;
                }
            };
            // 更新变换信息
            EffectFrame.prototype.updateTransform = function () {
                var posX, posY;
                if (this.anchorPosX >= 0 && this.anchorPosY >= 0) {
                    posX = this.anchorPosX;
                    posY = this.anchorPosY;
                }
                this._drawX = posX + this._offsetX;
                this._drawY = posY + this._offsetY;
                if (this._texture) {
                    this._drawW = this._texture.sourceWidth + this._offsetW;
                    this._drawH = this._texture.sourceHeight + this._offsetH;
                }
                if (this._scale == 1) {
                    this._drawX += this._regX;
                    this._drawY += this._regY;
                }
                else {
                    this._drawW = this._drawW * this._scale;
                    this._drawH = this._drawH * this._scale;
                    this._drawX += this._regX * this._scale;
                    this._drawY += this._regY * this._scale;
                }
                if (this._rotation != undefined) {
                    this._drawMix = new Matrix();
                    this._drawMix.tx = -this._drawW / 2;
                    this._drawMix.ty = -this._drawH / 2;
                    this._drawMix.rotate(this._rotation);
                    this._drawMix.tx += this._drawX;
                    this._drawMix.ty += this._drawY;
                    this._drawX = 0;
                    this._drawY = 0;
                }
            };
            EffectFrame.prototype.updateHitRect = function (texture) {
                if (!this._isMouseEnabled || !this._hitRect)
                    return;
                var rect = this._hitRect;
                rect.setTo(0, 0, 0, 0);
                if (!texture) {
                    return;
                }
                rect.width = texture.width * this._scale;
                rect.height = texture.height * this._scale;
                rect.x = this._drawX;
                rect.y = this._drawY;
            };
            // 设置数据(不打包)
            EffectFrame.prototype.setDataFrames = function (data, loadArr, fps, startIdx, dataFix) {
                if (fps === void 0) { fps = 12; }
                if (startIdx === void 0) { startIdx = 10000; }
                if (dataFix === void 0) { dataFix = ""; }
                this._data = data;
                this._startIdx = startIdx;
                this.setFps(fps);
                this._assetsLoader.load(loadArr, Handler.create(this, this.onAssetsLoadedFrame, [data, dataFix, startIdx]));
            };
            EffectFrame.prototype.onAssetsLoadedFrame = function (data, dataFix, startIdx) {
                if (dataFix === void 0) { dataFix = ""; }
                if (startIdx === void 0) { startIdx = 10000; }
                this.setFrames(this._assetPath + data + '/' + dataFix + "{0}.jpg", startIdx);
            };
            // 绘制
            EffectFrame.prototype.onDraw = function (g) {
                if (this.isPlayEnd && this._isStopLastFrame) {
                    this._texture = this._textures[this._frameCount - 1];
                }
                if (!this._texture || this._startTime > Laya.timer.currTimer) {
                    return;
                }
                this.updateTransform();
                // g.drawRect(this._drawX, this._drawY, this._drawW, this._drawH, "#000000");
                g.drawTexture(this._texture, this._drawX, this._drawY, this._drawW, this._drawH, this._drawMix);
                this.updateHitRect(this._texture);
                this._texture = null;
                this._drawMix = null;
            };
            /**
             * 鼠标碰撞检测
             */
            EffectFrame.prototype.hitTest = function (xMouse, yMouse) {
                if (this._isMouseEnabled && this._hitRect) {
                    return this._hitRect.contains(xMouse, yMouse);
                }
                return false;
            };
            EffectFrame.prototype.reset = function () {
                this.anchorPosX = 0;
                this.anchorPosY = 0;
                this._textures = null;
                this._centrePoints = null;
                this.centrePoint = null;
                this._total = 0;
                this._assetsLoader && this._assetsLoader.clear();
                this._loop = false;
                this.isPlayEnd = false;
                this._duration = 600000;
                this._startTime = 0;
                this._delayTimer = 0;
                this._frameCount = 0;
                this._curFrameIndex = 0;
                this._regX = 0;
                this._regY = 0;
                this._scale = 1;
                this._drawX = 0;
                this._drawY = 0;
                this._drawH = 0;
                this._drawW = 0;
                this._offsetX = 0;
                this._offsetY = 0;
                this._rotation = undefined;
                this._offsetW = 0;
                this._offsetH = 0;
                this._texture = null;
                this._drawMix = null;
                this._data = null;
                this._isMouseEnabled = false;
                this._hitRect = null;
                this._callBack = null;
                this._isStopLastFrame = false;
                this._assetPath = "";
            };
            return EffectFrame;
        }());
        base.EffectFrame = EffectFrame;
    })(base = gamecomponent.base || (gamecomponent.base = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=EffectFrame.js.map