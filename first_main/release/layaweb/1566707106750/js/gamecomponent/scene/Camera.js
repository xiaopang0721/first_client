var gamecomponent;
(function (gamecomponent) {
    var scene;
    (function (scene) {
        var Camera = /** @class */ (function () {
            function Camera() {
                /*地震*/
                this._earthShock = new scene.Shock();
                /*摄像机位置*/
                this._worldPostion = new Vector2();
                this._flipV = false;
                this.focusOffsetX = 0;
                this.focusOffsetY = 0;
                // viewPort宽度 	
                this.width = 800;
                // viewPort高度 
                this.height = 600;
                // 地图像素总宽度
                this.map_width_px = 0;
                // 地图像素总高度
                this.map_height_px = 0;
                // buffer的偏移（小图时有用 ）
                this.bufferOffsetX = 0;
                this.bufferOffsetY = 0;
                // 摄像头的位置x，y,z
                this._x = 0;
                this._y = 0;
                // 是否启用滤镜 	
                this.enableFilter = true;
            }
            Object.defineProperty(Camera, "ins", {
                get: function () {
                    if (!this._ins) {
                        this._ins = new Camera();
                    }
                    return this._ins;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Camera.prototype, "worldPostion", {
                get: function () {
                    return this._worldPostion;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Camera.prototype, "flipV", {
                /**
                 * 镜头是否垂直翻转
                 */
                get: function () {
                    return this._flipV;
                },
                set: function (v) {
                    this._flipV = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Camera.prototype, "focusPos", {
                get: function () {
                    return this._focusPos;
                },
                set: function (pos) {
                    this._focusPos = pos;
                },
                enumerable: true,
                configurable: true
            });
            Camera.prototype.isFocus = function (pos) {
                return this._focusPos.equal(pos);
            };
            Object.defineProperty(Camera.prototype, "isResize", {
                // 镜头产生移动 
                get: function () {
                    return this._sizeFlag >= Laya.timer.currFrame;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 设置摄像机可视大小
             * @param newWidth 新高
             * @param newHeight 新宽
             */
            Camera.prototype.setSize = function (newWidth, newHeight) {
                this.width = newWidth;
                this.height = newHeight;
                this.updateModeFollow();
                /*
                enableFilter =
                    Starling.current.viewPort.width <= 1920 &&
                    Starling.current.viewPort.height <= 1080 &&
                    bufferWidth < Starling.current.maxTextureSize &&
                    bufferHeight < Starling.current.maxTextureSize;
                    */
            };
            /**
             * 设置地图像素总大小
             * @param newWidth 新高
             * @param newHeight 新宽
             */
            Camera.prototype.setMapSize = function (newWidth, newHeight) {
                this.map_width_px = newWidth;
                this.map_height_px = newHeight;
            };
            /*内部函数，设置位置*/
            Camera.prototype.__location = function (newX, newY) {
                this._x = newX;
                this._y = newY;
                //得出视口的大小
                var bw = Math.min(this.width, this.map_width_px);
                var bh = Math.min(this.height, this.map_height_px);
                //判断窗口是否发生改变
                if (bw != this.bufferWidth || bh != this.bufferHeight)
                    this._sizeFlag = Laya.timer.currFrame;
                //设置窗口大小
                this.bufferWidth = bw;
                this.bufferHeight = bh;
                this.centerPointX = Math.round(this.bufferWidth / 2) + this.focusOffsetX;
                this.centerPointY = Math.round(this.bufferHeight / 2) + this.focusOffsetY;
                //左线
                this.bufferLeft = this._x - this.centerPointX;
                //右线
                this.bufferRight = this.bufferLeft + this.bufferWidth;
                //上线
                this.bufferTop = this._y - this.centerPointY;
                //下线
                this.bufferBottom = this.bufferTop + this.bufferHeight;
                this.bufferOffsetX = 0;
                this.bufferOffsetY = 0;
                if (this.width > this.map_width_px) {
                    this.bufferLeft = 0;
                    this.bufferRight = this.bufferLeft + this.map_width_px;
                    this.bufferOffsetX = (this.width - this.map_width_px) / 2;
                }
                else {
                    //控制画面不得超过地图区域
                    if (this.bufferLeft < 0) {
                        this.bufferLeft = 0;
                        this.bufferRight = this.bufferWidth;
                    }
                    if (this.bufferRight > this.map_width_px) {
                        this.bufferRight = this.map_width_px;
                        this.bufferLeft = this.bufferRight - this.bufferWidth;
                    }
                }
                if (this.height > this.map_height_px) {
                    this.bufferTop = 0;
                    this.bufferBottom = this.bufferTop + this.map_height_px;
                    this.bufferOffsetY = (this.height - this.map_height_px) / 2;
                }
                else {
                    if (this.bufferTop < 0) {
                        this.bufferTop = 0;
                        this.bufferBottom = this.bufferHeight;
                    }
                    if (this.bufferBottom > this.map_height_px) {
                        this.bufferBottom = this.map_height_px;
                        this.bufferTop = this.bufferBottom - this.bufferHeight;
                    }
                }
            };
            Object.defineProperty(Camera.prototype, "shockOffsetX", {
                /**
                 * 震屏x
                 */
                get: function () {
                    return this._shockOffsetX;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Camera.prototype, "shockOffsetY", {
                /**
                 * 震屏y
                 */
                get: function () {
                    return this._shockOffsetY;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 更新摄像机
             * @param diff 时差
             * @param width 摄像机宽度
             * @param height 摄像机高度
             */
            Camera.prototype.update = function () {
                this.updateModeFollow();
                //震动效果
                if (this._earthShock.update()) {
                    this._shockOffsetX = this._earthShock.offsetX;
                    this._shockOffsetY = this._earthShock.offsetY;
                    this.bufferLeft += this._shockOffsetX;
                    this.bufferRight += this._shockOffsetX;
                    this.bufferTop += this._shockOffsetY;
                    this.bufferBottom += this._shockOffsetY;
                }
                else {
                    this._shockOffsetX = 0;
                    this._shockOffsetY = 0;
                }
                //逻辑坐标范围
                this.logicLeft = this.bufferLeft / scene.SceneRes.CELL_WIDTH;
                this.logicRight = this.bufferRight / scene.SceneRes.CELL_WIDTH;
                this.logicTop = this.bufferTop / scene.SceneRes.CELL_HEIGHT;
                this.logicBottom = this.bufferBottom / scene.SceneRes.CELL_HEIGHT;
                //更新逻辑范围，用于lookIn函数
                this.look_logicLeft = this.logicLeft - Camera.LOGIC_INNER_LOOK;
                this.look_logicRight = this.logicRight + Camera.LOGIC_INNER_LOOK;
                this.look_logicTop = this.logicTop - Camera.LOGIC_INNER_LOOK;
                this.look_logicBottom = this.logicBottom + Camera.LOGIC_INNER_LOOK;
            };
            /**
             * 获得基于屏幕的X像素位置，通过逻辑X
             * @param x 逻辑x
             * @return
             */
            Camera.prototype.getScenePxByCellX = function (x) {
                if (!x)
                    return -100000;
                return x * scene.SceneRes.CELL_WIDTH - this.bufferLeft + this.bufferOffsetX;
            };
            /**
             * 获得基于屏幕的Y像素位置，通过逻辑Y
             * @param y 逻辑y
             * @return
             */
            Camera.prototype.getScenePxByCellY = function (y) {
                if (!y)
                    return -100000;
                var v = y * scene.SceneRes.CELL_HEIGHT - this.bufferTop + this.bufferOffsetY;
                if (this._flipV) {
                    v -= 2 * ((v - this.bufferOffsetY) - this.bufferHeight / 2);
                }
                return v;
            };
            /*通过实际像素获得相对于屏幕的位置*/
            Camera.prototype.getSceneX = function (xPX) {
                return xPX - this.bufferLeft - this.bufferOffsetX;
            };
            /*通过实际像素获得相对于屏幕的位置*/
            Camera.prototype.getSceneY = function (yPX) {
                return yPX - this.bufferTop - this.bufferOffsetY;
            };
            /**
             * 通过当前屏幕的像素x获得逻辑位置x
             * @param x
             * @return
             */
            Camera.prototype.getCellXByScene = function (x) {
                var v = x - this.bufferLeft - this.bufferOffsetX;
                return v / scene.SceneRes.CELL_WIDTH;
            };
            /**
             * 通过当前屏幕的像素y获得逻辑位置y
             * @param y
             * @return
             */
            Camera.prototype.getCellYByScene = function (y, checkFlipV) {
                if (checkFlipV === void 0) { checkFlipV = true; }
                var v = y - this.bufferTop - this.bufferOffsetY;
                if (checkFlipV && this._flipV) {
                    v = this.bufferHeight - v;
                }
                return v / scene.SceneRes.CELL_HEIGHT;
            };
            /*更新跟随模式*/
            Camera.prototype.updateModeFollow = function () {
                if (!this._focusPos) {
                    //逻辑坐标范围
                    this.bufferLeft = NaN;
                    this.bufferRight = NaN;
                    this.bufferTop = NaN;
                    this.bufferBottom = NaN;
                    //logd('!this._followPostion', this._worldPostion.x, this._worldPostion.y)
                    return;
                }
                this._worldPostion.x = this._focusPos.x;
                this._worldPostion.y = this._focusPos.y;
                //通过主玩家的实际坐标位置，得到屏幕中央偏移及格子中央偏移			
                var srX = this._worldPostion.x * scene.SceneRes.CELL_WIDTH;
                var srY = this._worldPostion.y * scene.SceneRes.CELL_HEIGHT;
                //设置窗口位置
                this.__location(srX, srY);
            };
            Camera.prototype.lookIn = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var look = false;
                var postionX, postionY;
                switch (args.length) {
                    case 1:
                        var pos = args[0];
                        if (pos instanceof Vector2) {
                            postionX = pos.x;
                            postionY = pos.y;
                            look = !(this.look_logicLeft > postionX || this.look_logicRight < postionX || this.look_logicTop > postionY || this.look_logicBottom < postionY);
                        }
                        break;
                    case 2:
                        if (!isNaN(args[0]) && !isNaN(args[1])) {
                            postionX = args[0];
                            postionY = args[1];
                            look = !(this.look_logicLeft > postionX || this.look_logicRight < postionX || this.look_logicTop > postionY || this.look_logicBottom < postionY);
                        }
                        break;
                }
                return look;
            };
            Camera.prototype.lookIn2 = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var look = false;
                var postionX, postionY;
                switch (args.length) {
                    case 1:
                        var pos = args[0];
                        if (pos instanceof Vector2) {
                            postionX = pos.x;
                            postionY = pos.y;
                            look = !(this.logicLeft > postionX || this.logicRight < postionX || this.logicTop > postionY || this.logicBottom < postionY);
                        }
                        break;
                    case 2:
                        if (!isNaN(args[0]) && !isNaN(args[1])) {
                            postionX = args[0];
                            postionY = args[1];
                            look = !(this.logicLeft > postionX || this.logicRight < postionX || this.logicTop > postionY || this.logicBottom < postionY);
                        }
                        break;
                }
                return look;
            };
            Camera.prototype.lookInBuffer = function (x1, y1, width, height) {
                // 判断两矩形是否相交、原理狠简单、如果相交、肯定其中一个矩形的顶点在另一个顶点内、
                var x2 = x1 + width;
                var y2 = y1 + height;
                var x3 = this.bufferLeft;
                var y3 = this.bufferTop;
                var x4 = this.bufferRight;
                var y4 = this.bufferBottom;
                return (((x1 >= x3 && x1 < x4) || (x3 >= x1 && x3 <= x2)) &&
                    ((y1 >= y3 && y1 < y4) || (y3 >= y1 && y3 <= y2))) ? true : false;
            };
            /**
             * 屏幕震动
             * @param duration 持续时间，默认500ms
             */
            Camera.prototype.shock = function (duration) {
                if (duration === void 0) { duration = 250; }
                this._earthShock.start(duration);
            };
            /**
             * 停止屏幕震动
             */
            Camera.prototype.shockStop = function () {
                this._earthShock.stop();
            };
            Camera.prototype.clear = function () {
            };
            /*查看范围扩充*/
            Camera.LOGIC_INNER_LOOK = 450;
            return Camera;
        }());
        scene.Camera = Camera;
    })(scene = gamecomponent.scene || (gamecomponent.scene = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=Camera.js.map