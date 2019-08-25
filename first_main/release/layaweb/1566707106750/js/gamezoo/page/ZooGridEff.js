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
* 飞禽走兽
*/
var gamezoo;
(function (gamezoo) {
    var page;
    (function (page) {
        var Path_game_zoo = gamezoo.data.Path;
        var SKIN_COLOR = {
            SKIN_YELLOW: Path_game_zoo.ui_zoo + "tu_xz.png",
        };
        var IMG_WIDTH = 119;
        var IMG_HEIGHT = 85;
        var ZooGridEff = /** @class */ (function (_super) {
            __extends(ZooGridEff, _super);
            function ZooGridEff() {
                var _this = _super.call(this) || this;
                _this._type = 0;
                _this._index = -1;
                _this._isPlaying = false;
                _this._startTime = 0;
                _this._gridTime = 0;
                _this._completeFun = null;
                _this._param1 = 0;
                _this._gridEndTime = 0;
                _this._trailEndTime = 0;
                _this._psTwinkleTime = 0;
                _this.width = IMG_WIDTH;
                _this.height = IMG_HEIGHT;
                _this._img = new Laya.Image(SKIN_COLOR.SKIN_YELLOW);
                _this._img.anchorX = 0.5;
                _this._img.anchorY = 0.5;
                _this._img.centerX = 0;
                _this._img.centerY = 0;
                _this._img.blendMode = Laya.BlendMode.LIGHT;
                _this._img.visible = false;
                _this.addChild(_this._img);
                return _this;
            }
            Object.defineProperty(ZooGridEff.prototype, "type", {
                get: function () {
                    return this._type;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ZooGridEff.prototype, "index", {
                get: function () {
                    return this._index;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ZooGridEff.prototype, "isPlaying", {
                get: function () {
                    return this._isPlaying;
                },
                enumerable: true,
                configurable: true
            });
            ZooGridEff.prototype.Update = function (diff, nowTime) {
                if (this._isPlaying) {
                    switch (this._type) {
                        case ZooGridEff.TYPE_GRID_TIME_SHOW:
                            if (nowTime > this._gridEndTime) {
                                this.onComplete();
                            }
                            break;
                        case ZooGridEff.TYPE_TRAIL:
                            if (nowTime > this._gridEndTime) {
                                if (this._gridTime < ZooGridEff.TRAIL_TIME_LIMIT) {
                                    //产生拖尾
                                    if (nowTime > this._trailEndTime) {
                                        this.onComplete();
                                    }
                                    else {
                                        var tt = this._trailEndTime - nowTime;
                                        var per = tt / ZooGridEff.TRAIL_TIME;
                                        this._img.alpha = per;
                                    }
                                }
                                else {
                                    this.onComplete();
                                }
                            }
                            break;
                        case ZooGridEff.TYPE_TWINKLE:
                            this.updateTwinkle();
                            break;
                        case ZooGridEff.TYPE_FULL_SCREEN:
                            if (nowTime > this._psTwinkleTime) {
                                //开始闪烁
                                this._img.skin = SKIN_COLOR.SKIN_YELLOW;
                            }
                            break;
                    }
                }
            };
            /*
            ** 播放接口play
            ** type--特效类型
            ** gridTime--格子存在时间（毫秒）
            ** completeFun--回调函数
            */
            ZooGridEff.prototype.play = function (type, index, gridTime, completeFun, param1) {
                if (completeFun === void 0) { completeFun = null; }
                if (param1 === void 0) { param1 = 0; }
                if (this._isPlaying)
                    return;
                this.clear();
                this._type = type;
                this._index = index;
                this._isPlaying = true;
                this._img.visible = true;
                this._gridTime = gridTime;
                this._completeFun = completeFun;
                this._startTime = Laya.timer.currTimer;
                this._param1 = param1;
                switch (type) {
                    case ZooGridEff.TYPE_GRID_TIME_SHOW:
                        this.gridTimeShowEff();
                        break;
                    case ZooGridEff.TYPE_TRAIL:
                        this.trailEff();
                        break;
                    case ZooGridEff.TYPE_TWINKLE:
                        this.twinkleEff();
                        break;
                    case ZooGridEff.TYPE_FULL_SCREEN:
                        this.pullScreenEff();
                        break;
                    default:
                        this._type = ZooGridEff.TYPE_NORMAL;
                        this.normalEff();
                        break;
                }
                return this;
            };
            ZooGridEff.prototype.normalEff = function () {
                this._img.skin = SKIN_COLOR.SKIN_YELLOW;
            };
            ZooGridEff.prototype.gridTimeShowEff = function () {
                this._img.skin = SKIN_COLOR.SKIN_YELLOW;
                this._gridEndTime = this._startTime + this._gridTime;
            };
            ZooGridEff.prototype.trailEff = function () {
                this._img.skin = SKIN_COLOR.SKIN_YELLOW;
                this._gridEndTime = this._startTime + this._gridTime;
                this._trailEndTime = this._gridEndTime + ZooGridEff.TRAIL_TIME;
            };
            ZooGridEff.prototype.twinkleEff = function () {
                this._img.skin = SKIN_COLOR.SKIN_YELLOW;
                this.updateTwinkle();
            };
            ZooGridEff.prototype.updateTwinkle = function () {
                var per = this.twinkleRatio(Laya.timer.currTimer, 500);
                this._img.alpha = per;
            };
            ZooGridEff.prototype.pullScreenEff = function () {
                this._img.skin = SKIN_COLOR.SKIN_YELLOW;
                if (this._param1 < 1)
                    this._param1 = 1;
                this._psTwinkleTime = this._startTime + ZooGridEff.UPDATE_TIME * (3 + 2 / this._param1);
            };
            ZooGridEff.prototype.onComplete = function () {
                if (this._completeFun) {
                    this._completeFun.runWith([this, this._index, this._type]);
                }
                this.clear();
            };
            //闪烁系数函数
            ZooGridEff.prototype.twinkleRatio = function (tt, cycleTime) {
                if (cycleTime <= 0)
                    return 0;
                tt %= cycleTime;
                var halfCycleTime = cycleTime / 2;
                if (tt < halfCycleTime) {
                    var per = tt / halfCycleTime;
                    return 1 - per;
                }
                else {
                    tt -= halfCycleTime;
                    var per = tt / halfCycleTime;
                    return per;
                }
            };
            ZooGridEff.prototype.clear = function () {
                this._img.visible = false;
                this._img.alpha = 1;
                this._img.scale(1, 1);
                this._img.skin = "";
                this._type = ZooGridEff.TYPE_NORMAL;
                this._index = -1;
                this._isPlaying = false;
                this._completeFun = null;
            };
            ZooGridEff.GetPool = function () {
                var eff;
                if (ZooGridEff._pool.length > 0) {
                    eff = ZooGridEff._pool.shift();
                }
                else {
                    eff = new ZooGridEff();
                }
                return eff;
            };
            ZooGridEff.ToPool = function (eff) {
                if (!eff)
                    return;
                eff.clear();
                eff.removeSelf();
                if (ZooGridEff._pool.length > 8) {
                    eff.destroy(true);
                }
                else {
                    ZooGridEff._pool.push(eff);
                }
            };
            ZooGridEff.UPDATE_TIME = 20; //刷新时间单位（毫秒)
            ZooGridEff.TRAIL_TIME = ZooGridEff.UPDATE_TIME * 6; //拖尾持续时间
            ZooGridEff.TRAIL_TIME_LIMIT = ZooGridEff.UPDATE_TIME * 2; //低于这个时间就产生拖尾效果
            ZooGridEff.TYPE_NORMAL = 0; //正常显示
            ZooGridEff.TYPE_GRID_TIME_SHOW = 1; //格子时间内显示
            ZooGridEff.TYPE_TRAIL = 2; //拖尾
            ZooGridEff.TYPE_TWINKLE = 3; //闪烁
            ZooGridEff.TYPE_FULL_SCREEN = 4; //全屏奖效果
            ZooGridEff._pool = [];
            return ZooGridEff;
        }(Laya.Sprite));
        page.ZooGridEff = ZooGridEff;
    })(page = gamezoo.page || (gamezoo.page = {}));
})(gamezoo || (gamezoo = {}));
//# sourceMappingURL=ZooGridEff.js.map