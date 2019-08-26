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
* 奔驰宝马
*/
var gamebenchibaoma;
(function (gamebenchibaoma) {
    var page;
    (function (page) {
        var Path_game_benchibaoma = gamebenchibaoma.data.Path;
        var SKIN_COLOR = {
            SKIN_YELLOW: Path_game_benchibaoma.ui_benchibaoma + "tu_xz.png",
            SKIN_PURPLE: Path_game_benchibaoma.ui_benchibaoma + "tu_xz1.png",
        };
        var UPDATE_TIME = 20; //刷新时间单位（毫秒)
        var TRAIL_TIME = UPDATE_TIME * 6; //拖尾持续时间
        var TRAIL_TIME_LIMIT = UPDATE_TIME * 2; //低于这个时间就产生拖尾效果
        var IMG_WIDTH = 63;
        var IMG_HEIGHT = 63;
        var BcbmGridEff = /** @class */ (function (_super) {
            __extends(BcbmGridEff, _super);
            function BcbmGridEff() {
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
            Object.defineProperty(BcbmGridEff.prototype, "type", {
                get: function () {
                    return this._type;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BcbmGridEff.prototype, "index", {
                get: function () {
                    return this._index;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BcbmGridEff.prototype, "isPlaying", {
                get: function () {
                    return this._isPlaying;
                },
                enumerable: true,
                configurable: true
            });
            BcbmGridEff.prototype.Update = function (diff, nowTime) {
                if (this._isPlaying) {
                    // let nowTime:number = Laya.timer.currTimer;
                    switch (this._type) {
                        case BcbmGridEff.TYPE_GRID_TIME_SHOW:
                            if (nowTime > this._gridEndTime) {
                                this.onComplete();
                            }
                            break;
                        case BcbmGridEff.TYPE_TRAIL:
                            if (nowTime > this._gridEndTime) {
                                if (this._gridTime < TRAIL_TIME_LIMIT) {
                                    //产生拖尾
                                    if (nowTime > this._trailEndTime) {
                                        this.onComplete();
                                    }
                                    else {
                                        var tt = this._trailEndTime - nowTime;
                                        var per = tt / TRAIL_TIME;
                                        this._img.alpha = per;
                                    }
                                }
                                else {
                                    this.onComplete();
                                }
                            }
                            break;
                        case BcbmGridEff.TYPE_TWINKLE:
                            this.updateTwinkle();
                            break;
                        case BcbmGridEff.TYPE_FULL_SCREEN:
                            if (nowTime > this._psTwinkleTime) {
                                //开始闪烁
                                var tt = nowTime % (UPDATE_TIME * 6);
                                if (tt < UPDATE_TIME * 3) {
                                    this._img.skin = this._index % 2 == 0 ? SKIN_COLOR.SKIN_YELLOW : SKIN_COLOR.SKIN_PURPLE;
                                }
                                else {
                                    this._img.skin = this._index % 2 != 0 ? SKIN_COLOR.SKIN_YELLOW : SKIN_COLOR.SKIN_PURPLE;
                                }
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
            BcbmGridEff.prototype.play = function (type, index, gridTime, completeFun, param1) {
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
                    case BcbmGridEff.TYPE_GRID_TIME_SHOW:
                        this.gridTimeShowEff();
                        break;
                    case BcbmGridEff.TYPE_TRAIL:
                        this.trailEff();
                        break;
                    case BcbmGridEff.TYPE_TWINKLE:
                        this.twinkleEff();
                        break;
                    case BcbmGridEff.TYPE_FULL_SCREEN:
                        this.pullScreenEff();
                        break;
                    default:
                        this._type = BcbmGridEff.TYPE_NORMAL;
                        this.normalEff();
                        break;
                }
                return this;
            };
            BcbmGridEff.prototype.normalEff = function () {
                this._img.skin = SKIN_COLOR.SKIN_YELLOW;
            };
            BcbmGridEff.prototype.gridTimeShowEff = function () {
                this._img.skin = SKIN_COLOR.SKIN_YELLOW;
                this._gridEndTime = this._startTime + this._gridTime;
            };
            BcbmGridEff.prototype.trailEff = function () {
                this._img.skin = SKIN_COLOR.SKIN_YELLOW;
                this._gridEndTime = this._startTime + this._gridTime;
                this._trailEndTime = this._gridEndTime + TRAIL_TIME;
            };
            BcbmGridEff.prototype.twinkleEff = function () {
                this._img.skin = SKIN_COLOR.SKIN_YELLOW;
                this.updateTwinkle();
            };
            BcbmGridEff.prototype.updateTwinkle = function () {
                var per = this.twinkleRatio(Laya.timer.currTimer, 500);
                // this._img.scaleX = 0.9+0.1*per;
                // this._img.scaleY = 0.9+0.1*per;
                this._img.alpha = per;
            };
            BcbmGridEff.prototype.pullScreenEff = function () {
                this._img.skin = SKIN_COLOR.SKIN_YELLOW;
                if (this._param1 < 1)
                    this._param1 = 1;
                this._psTwinkleTime = this._startTime + UPDATE_TIME * (3 + 2 / this._param1);
            };
            BcbmGridEff.prototype.onComplete = function () {
                if (this._completeFun) {
                    this._completeFun.runWith([this, this._index, this._type]);
                }
                this.clear();
            };
            //闪烁系数函数
            BcbmGridEff.prototype.twinkleRatio = function (tt, cycleTime) {
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
            BcbmGridEff.prototype.clear = function () {
                this._img.visible = false;
                this._img.alpha = 1;
                this._img.scale(1, 1);
                this._img.skin = "";
                this._type = BcbmGridEff.TYPE_NORMAL;
                this._index = -1;
                this._isPlaying = false;
                this._completeFun = null;
            };
            BcbmGridEff.GetPool = function () {
                var eff;
                if (BcbmGridEff._pool.length > 0) {
                    eff = BcbmGridEff._pool.shift();
                }
                else {
                    eff = new BcbmGridEff();
                }
                return eff;
            };
            BcbmGridEff.ToPool = function (eff) {
                if (!eff)
                    return;
                eff.clear();
                eff.removeSelf();
                if (BcbmGridEff._pool.length > 8) {
                    eff.destroy(true);
                }
                else {
                    BcbmGridEff._pool.push(eff);
                }
            };
            BcbmGridEff.TYPE_NORMAL = 0; //正常显示
            BcbmGridEff.TYPE_GRID_TIME_SHOW = 1; //格子时间内显示
            BcbmGridEff.TYPE_TRAIL = 2; //拖尾
            BcbmGridEff.TYPE_TWINKLE = 3; //闪烁
            BcbmGridEff.TYPE_FULL_SCREEN = 4; //全屏奖效果
            BcbmGridEff._pool = [];
            return BcbmGridEff;
        }(Laya.Sprite));
        page.BcbmGridEff = BcbmGridEff;
    })(page = gamebenchibaoma.page || (gamebenchibaoma.page = {}));
})(gamebenchibaoma || (gamebenchibaoma = {}));
//# sourceMappingURL=BcbmGridEff.js.map