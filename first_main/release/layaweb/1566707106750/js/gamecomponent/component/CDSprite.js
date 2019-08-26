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
var gamecomponent;
(function (gamecomponent) {
    var component;
    (function (component) {
        /**
         * CD冷却
         */
        var CDSprite = /** @class */ (function (_super) {
            __extends(CDSprite, _super);
            function CDSprite() {
                var _this = _super.call(this) || this;
                //是否在冷却中
                _this.isCooling = false;
                return _this;
            }
            Object.defineProperty(CDSprite.prototype, "cdmask", {
                get: function () {
                    return this._cdSprite;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 初始化CD信息
             * @param width 宽度
             * @param height 高度
             * @param radius CD半径
             * @param alpha 透明度
             * @param isNeedText 是否需要显示倒计时文本
             */
            CDSprite.prototype.init = function (v, width, height, radius, alpha, isNeedText) {
                if (isNeedText === void 0) { isNeedText = true; }
                this._game = v;
                this.width = width;
                this.height = height;
                this._radius = radius;
                if (!this._cdSprite) {
                    this._cdSprite = new Sprite();
                    this._cdSprite.size(width, height);
                    this.addChild(this._cdSprite);
                    this._cdSprite.alpha = alpha;
                }
                //需要显示文本
                if (isNeedText) {
                    if (!this._labelCD) {
                        this._labelCD = new Label();
                        this._labelCD.font = "Helvetica";
                        this._labelCD.fontSize = 28;
                        this._labelCD.color = "#ffffff";
                        this._labelCD.stroke = 2;
                        this._labelCD.strokeColor = "#000000";
                        this._labelCD.bold = true;
                        this._labelCD.align = "center";
                        this._labelCD.width = this.width;
                    }
                    if (!this._labelCD.parent) {
                        this.addChild(this._labelCD);
                        this._labelCD.pos(0, this.height / 2 - 15);
                    }
                }
            };
            /**
             * 开始cd
             * @param endTime CD时长(毫秒)
             * @param isWeb 是否是web时间
             */
            CDSprite.prototype.startCD = function (endTime, isWeb) {
                if (isWeb === void 0) { isWeb = true; }
                if (endTime <= 0 || this.isCooling)
                    return;
                this._isWeb = isWeb;
                if (this._cdSprite) {
                    this._cdSprite.visible = true;
                }
                //开始CD的时间
                this._startTime = isWeb ? this._game.sceneGame.sync.serverWebTimeBys * 1000 : this._game.sceneGame.sync.serverTimeBys * 1000;
                this._endTime = endTime;
                this._totalTime = endTime - this._startTime;
                this.isCooling = true;
                if (this._labelCD) {
                    this._labelCD.text = Math.floor(this._totalTime / 1000).toString();
                }
            };
            //cd心跳
            CDSprite.prototype.updateCD = function () {
                if (!this.isCooling)
                    return;
                var now_time = this._isWeb ? this._game.sceneGame.sync.serverWebTimeBys * 1000 : this._game.sceneGame.sync.serverTimeBys * 1000;
                var remain_time = this._endTime - now_time;
                if (remain_time <= 0) {
                    //时间到了
                    this.stopCD();
                }
                else {
                    this.drawCD(remain_time / this._totalTime * 360);
                    if (remain_time > 0) {
                        if (this._labelCD)
                            this._labelCD.text = Math.floor(remain_time / 1000).toString();
                    }
                }
            };
            //绘制cd
            CDSprite.prototype.drawCD = function (angle) {
                angle = 360 - angle;
                if (this._cdSprite) {
                    this._cdSprite.graphics.clear();
                    this._cdSprite.graphics.drawPie(this.width / 2, this.height / 2, this._radius, angle - 90, -90, "#000000");
                }
            };
            //停止cd 
            CDSprite.prototype.stopCD = function () {
                if (!this.isCooling)
                    return;
                this.isCooling = false;
                this._endTime = 0;
                this._startTime = 0;
                Laya.timer.clear(this, this.updateCD);
                if (this._cdSprite) {
                    this._cdSprite.visible = false;
                }
                if (this._labelCD) {
                    this._labelCD.text = "";
                }
                this.event(CDSprite.END_CD);
            };
            CDSprite.prototype.destroy = function () {
                if (this._cdSprite) {
                    this._cdSprite.destroy(true);
                    this._cdSprite = null;
                }
                if (this._labelCD) {
                    this._labelCD.destroy(true);
                    this._labelCD = null;
                }
                _super.prototype.destroy.call(this, true);
            };
            CDSprite.END_CD = "end_cd";
            return CDSprite;
        }(Laya.Sprite));
        component.CDSprite = CDSprite;
    })(component = gamecomponent.component || (gamecomponent.component = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=CDSprite.js.map