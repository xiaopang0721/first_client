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
* 水果机
*/
var gameshuiguoji;
(function (gameshuiguoji) {
    var page;
    (function (page) {
        var Path_game_shuiguoji = gameshuiguoji.data.Path;
        var SKIN_COLOR = {
            SKIN_YELLOW: Path_game_shuiguoji.ui_shuiguoji + "tu_xz.png",
            SKIN_PURPLE: Path_game_shuiguoji.ui_shuiguoji + "tu_xz1.png",
        };
        var IMG_WIDTH = 90;
        var IMG_HEIGHT = 90;
        var ShuiGuoJiGridEff = /** @class */ (function (_super) {
            __extends(ShuiGuoJiGridEff, _super);
            function ShuiGuoJiGridEff() {
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
            Object.defineProperty(ShuiGuoJiGridEff.prototype, "type", {
                get: function () {
                    return this._type;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ShuiGuoJiGridEff.prototype, "index", {
                get: function () {
                    return this._index;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ShuiGuoJiGridEff.prototype, "isPlaying", {
                get: function () {
                    return this._isPlaying;
                },
                enumerable: true,
                configurable: true
            });
            ShuiGuoJiGridEff.prototype.Update = function (diff, nowTime) {
                if (this._isPlaying) {
                    switch (this._type) {
                        case ShuiGuoJiGridEff.TYPE_GRID_TIME_SHOW:
                            if (nowTime > this._gridEndTime) {
                                this.onComplete();
                            }
                            break;
                        case ShuiGuoJiGridEff.TYPE_TRAIL:
                            if (nowTime > this._gridEndTime) {
                                if (this._gridTime < ShuiGuoJiGridEff.TRAIL_TIME_LIMIT) {
                                    //产生拖尾
                                    if (nowTime > this._trailEndTime) {
                                        this.onComplete();
                                    }
                                    else {
                                        var tt = this._trailEndTime - nowTime;
                                        var per = tt / ShuiGuoJiGridEff.TRAIL_TIME;
                                        this._img.alpha = per;
                                    }
                                }
                                else {
                                    this.onComplete();
                                }
                            }
                            break;
                        case ShuiGuoJiGridEff.TYPE_TWINKLE:
                            this.updateTwinkle();
                            break;
                        case ShuiGuoJiGridEff.TYPE_FULL_SCREEN:
                            if (nowTime > this._psTwinkleTime) {
                                //开始闪烁
                                var tt = nowTime % (ShuiGuoJiGridEff.UPDATE_TIME * 6);
                                if (tt < ShuiGuoJiGridEff.UPDATE_TIME * 3) {
                                    this._img.skin = this._index % 2 == 0 ? SKIN_COLOR.SKIN_YELLOW : SKIN_COLOR.SKIN_PURPLE;
                                }
                                else {
                                    this._img.skin = this._index % 2 != 0 ? SKIN_COLOR.SKIN_YELLOW : SKIN_COLOR.SKIN_PURPLE;
                                }
                            }
                            break;
                        case ShuiGuoJiGridEff.TYPE_SHORT_SHOW:
                            if (nowTime > this._gridEndTime) {
                                this.onComplete();
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
            ShuiGuoJiGridEff.prototype.play = function (type, index, gridTime, completeFun, param1) {
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
                    case ShuiGuoJiGridEff.TYPE_GRID_TIME_SHOW:
                        this.gridTimeShowEff();
                        break;
                    case ShuiGuoJiGridEff.TYPE_TRAIL:
                        this.trailEff();
                        break;
                    case ShuiGuoJiGridEff.TYPE_TWINKLE:
                        this.twinkleEff();
                        break;
                    case ShuiGuoJiGridEff.TYPE_FULL_SCREEN:
                        this.pullScreenEff();
                        break;
                    case ShuiGuoJiGridEff.TYPE_SHORT_SHOW:
                        this.gridShortShowEff();
                        break;
                    default:
                        this._type = ShuiGuoJiGridEff.TYPE_NORMAL;
                        this.normalEff();
                        break;
                }
                return this;
            };
            ShuiGuoJiGridEff.prototype.normalEff = function () {
                this._img.skin = SKIN_COLOR.SKIN_YELLOW;
            };
            ShuiGuoJiGridEff.prototype.gridTimeShowEff = function () {
                this._img.skin = SKIN_COLOR.SKIN_YELLOW;
                this._gridEndTime = this._startTime + this._gridTime;
            };
            ShuiGuoJiGridEff.prototype.trailEff = function () {
                this._img.skin = SKIN_COLOR.SKIN_YELLOW;
                this._gridEndTime = this._startTime + this._gridTime;
                this._trailEndTime = this._gridEndTime + ShuiGuoJiGridEff.TRAIL_TIME;
            };
            ShuiGuoJiGridEff.prototype.twinkleEff = function () {
                this.updateTwinkle();
            };
            ShuiGuoJiGridEff.prototype.updateTwinkle = function () {
                var time = Laya.timer.currTimer % 1000;
                var idx = Math.floor(time / 100);
                this._img.skin = Path_game_shuiguoji.ui_shuiguoji_effect_zhongjiang + (10000 + idx) + ".png";
            };
            ShuiGuoJiGridEff.prototype.pullScreenEff = function () {
                this._img.skin = SKIN_COLOR.SKIN_YELLOW;
                if (this._param1 < 1)
                    this._param1 = 1;
                this._psTwinkleTime = this._startTime + ShuiGuoJiGridEff.UPDATE_TIME * (3 + 2 / this._param1);
            };
            ShuiGuoJiGridEff.prototype.gridShortShowEff = function () {
                this._img.skin = SKIN_COLOR.SKIN_YELLOW;
                this._gridEndTime = this._startTime + 6;
            };
            ShuiGuoJiGridEff.prototype.onComplete = function () {
                if (this._completeFun) {
                    this._completeFun.runWith([this, this._index, this._type]);
                }
                this.clear();
            };
            //闪烁系数函数
            ShuiGuoJiGridEff.prototype.twinkleRatio = function (tt, cycleTime) {
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
            ShuiGuoJiGridEff.prototype.clear = function () {
                this._img.visible = false;
                this._img.alpha = 1;
                this._img.scale(1, 1);
                this._img.skin = "";
                this._type = ShuiGuoJiGridEff.TYPE_NORMAL;
                this._index = -1;
                this._isPlaying = false;
                this._completeFun = null;
            };
            ShuiGuoJiGridEff.GetPool = function () {
                var eff;
                if (ShuiGuoJiGridEff._pool.length > 0) {
                    eff = ShuiGuoJiGridEff._pool.shift();
                }
                else {
                    eff = new ShuiGuoJiGridEff();
                }
                return eff;
            };
            ShuiGuoJiGridEff.ToPool = function (eff) {
                if (!eff)
                    return;
                eff.clear();
                eff.removeSelf();
                if (ShuiGuoJiGridEff._pool.length > 8) {
                    eff.destroy(true);
                }
                else {
                    ShuiGuoJiGridEff._pool.push(eff);
                }
            };
            ShuiGuoJiGridEff.UPDATE_TIME = 30; //刷新时间单位（毫秒) 
            ShuiGuoJiGridEff.TRAIL_TIME = ShuiGuoJiGridEff.UPDATE_TIME * 6; //拖尾持续时间
            ShuiGuoJiGridEff.TRAIL_TIME_LIMIT = ShuiGuoJiGridEff.UPDATE_TIME * 2; //低于这个时间就产生拖尾效果
            ShuiGuoJiGridEff.TYPE_NORMAL = 0; //正常显示
            ShuiGuoJiGridEff.TYPE_GRID_TIME_SHOW = 1; //格子时间内显示
            ShuiGuoJiGridEff.TYPE_TRAIL = 2; //拖尾
            ShuiGuoJiGridEff.TYPE_TWINKLE = 3; //闪烁
            ShuiGuoJiGridEff.TYPE_FULL_SCREEN = 4; //全屏奖效果
            ShuiGuoJiGridEff.TYPE_SHORT_SHOW = 5; //短显
            ShuiGuoJiGridEff._pool = [];
            return ShuiGuoJiGridEff;
        }(Laya.Sprite));
        page.ShuiGuoJiGridEff = ShuiGuoJiGridEff;
    })(page = gameshuiguoji.page || (gameshuiguoji.page = {}));
})(gameshuiguoji || (gameshuiguoji = {}));
//# sourceMappingURL=ShuiGuoJiGridEff.js.map