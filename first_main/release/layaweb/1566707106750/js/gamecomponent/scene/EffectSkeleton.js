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
* 骨骼动画特效（龙骨）
*/
var gamecomponent;
(function (gamecomponent) {
    var scene;
    (function (scene) {
        var EffectSkeleton = /** @class */ (function (_super) {
            __extends(EffectSkeleton, _super);
            function EffectSkeleton() {
                var _this = _super.call(this) || this;
                _this.poolName = "EffectSkeleton";
                // 启用换装
                _this.enableSlot = false;
                // 播放速率
                _this._playRate = 1;
                // 动画名称
                _this._playName = 'Stand';
                _this._skinIndex = 0;
                _this._skinData = {};
                return _this;
            }
            Object.defineProperty(EffectSkeleton.prototype, "armature", {
                get: function () {
                    return this._armature;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(EffectSkeleton.prototype, "currenFrameIndex", {
                /**获取当前帧索引*/
                get: function () {
                    if (!this._armature)
                        return 0;
                    return this._armature.player.currentKeyframeIndex;
                },
                enumerable: true,
                configurable: true
            });
            /**暂停 */
            EffectSkeleton.prototype.paused = function () {
                if (this._armature)
                    this._armature.paused();
            };
            /**恢复 */
            EffectSkeleton.prototype.resume = function () {
                if (this._armature)
                    this._armature.resume();
            };
            /**
             * 进池 （相当于对象dispose函数）
             */
            EffectSkeleton.prototype.intoPool = function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
                this.reset();
            };
            /**
             * 出池 （相当于对象初始化函数）
             */
            EffectSkeleton.prototype.outPool = function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
            };
            Object.defineProperty(EffectSkeleton.prototype, "parent", {
                set: function (v) {
                    if (this._parent == v) {
                        return;
                    }
                    this._parent = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(EffectSkeleton.prototype, "setCompleteFunc", {
                set: function (func) {
                    this._completeFunc = func;
                },
                enumerable: true,
                configurable: true
            });
            // 尽量在设置动画数据时先设置
            EffectSkeleton.prototype.setLoop = function (v) {
                _super.prototype.setLoop.call(this, v);
                if (this._armature) {
                    this._armature.play(0, this._loop);
                }
            };
            Object.defineProperty(EffectSkeleton.prototype, "drawHorizonal", {
                set: function (v) {
                    this._drawHorizonal = v;
                    if (this._armature)
                        this._armature.scale(this._drawHorizonal ? this._scale * -1 : this._scale, this._scale);
                },
                enumerable: true,
                configurable: true
            });
            // 设置数据 fps动画播放速率1为标准速率
            EffectSkeleton.prototype.setData = function (ani, fps) {
                if (fps === void 0) { fps = 1; }
                _super.prototype.setData.call(this, ani, fps);
            };
            EffectSkeleton.prototype.build = function () {
                if (this._refTemplet) {
                    return;
                }
                this._refTemplet = RefTemplet.Get(this._data);
                this._refTemplet.retain();
                if (this._refTemplet.parseComplete) {
                    Laya.timer.callLater(this, this.buildArmature);
                }
                else {
                    this._refTemplet.on(LEvent.COMPLETE, this, this.buildArmature);
                }
            };
            EffectSkeleton.prototype.buildArmature = function () {
                if (!this._refTemplet) {
                    return;
                }
                Laya.timer.clearAll(this);
                this._refTemplet.off(LEvent.COMPLETE, this, this.buildArmature);
                this._armature = this._refTemplet.buildArmature(1); //启用换装
                this._armature.playbackRate(this._fps);
                this._armature.scale(this._drawHorizonal ? this._scale * -1 : this._scale, this._scale);
                this._armature.play(this._playName, this._loop, false);
                if (this._completeFunc)
                    this._completeFunc();
            };
            // 设置皮肤
            EffectSkeleton.prototype.setSkin = function (slot, skin) {
                var _this = this;
                var curRes = this._skinData[slot];
                if (curRes) {
                    if (curRes.url == skin) {
                        // 一样的
                        return;
                    }
                    // 老的
                    this._skinData[slot] = null;
                    curRes.release();
                }
                if (skin == null || skin.length == 0) {
                    return;
                }
                // 新的
                curRes = RefAsset.Get(skin);
                curRes.retain();
                this._skinData[slot] = curRes;
                if (!curRes.parseComplete) {
                    curRes.once(LEvent.COMPLETE, this, function () {
                        _this.__setSkin(slot);
                    });
                }
                else {
                    this.__setSkin(slot);
                }
            };
            EffectSkeleton.prototype.__setSkin = function (slot) {
                if (!this._armature) {
                    return;
                }
                var res = this._skinData[slot];
                if (!res || !res.parseComplete) {
                    return;
                }
                this._armature.setSlotSkin(slot, Laya.loader.getRes(res.url));
            };
            /**设置某插槽的皮肤 */
            EffectSkeleton.prototype.showSlotSkinByIndex = function (slotName, index) {
                if (this._skinIndex == index)
                    return;
                if (this._armature) {
                    this._armature.showSlotSkinByIndex(slotName, index);
                    this._skinIndex = index;
                }
            };
            EffectSkeleton.prototype.play = function (name, loop) {
                this._playName = name;
                this.setLoop(loop);
                if (!this._armature) {
                    return;
                }
                // this._armature.play(this._playName, this._loop, false, Laya.timer.currTimer - this._startTime);
                this._armature.playbackRate(this._fps);
                this._armature.play(this._playName, this._loop, false, 0);
                this.isPlayEnd = false;
            };
            // 绘制
            EffectSkeleton.prototype.onDraw = function (g, camera) {
                if (this.isPlayEnd || !this._armature) {
                    this.updataPos(camera);
                    return;
                }
                if (!this._loop && this._armature.player.state == 0) {
                    this.isPlayEnd = true;
                    return;
                }
                if (!this._parent) {
                    this._armature.parent && this._armature.removeSelf();
                    return;
                }
                this.updataPos(camera);
            };
            EffectSkeleton.prototype.updataPos = function (camera) {
                if (!this._armature)
                    return;
                this.updateTransform(camera);
                if (isNaN(this._drawX) || isNaN(this._drawY)) {
                    return;
                }
                this._armature.x = this._drawX;
                this._armature.y = this._drawY;
                this._armature.parent != this._parent && this._parent.addChildAt(this._armature, 0);
            };
            EffectSkeleton.prototype.reset = function () {
                parent = null;
                Laya.timer.clearAll(this);
                Laya.Tween.clearAll(this);
                if (this._refTemplet) {
                    this._refTemplet.off(LEvent.COMPLETE, this, this.buildArmature);
                    this._refTemplet.release();
                    this._refTemplet = null;
                }
                if (this._armature) {
                    this._armature.destroy(true);
                    this._armature = null;
                }
                Laya.timer.clear(this, this.buildArmature);
                for (var slot in this._skinData) {
                    var res = this._skinData[slot];
                    res.release();
                    this._skinData[slot] = null;
                }
                this._playName = "Stand";
                this._skinIndex = 0;
                _super.prototype.reset.call(this);
            };
            return EffectSkeleton;
        }(gamecomponent.scene.Effect));
        scene.EffectSkeleton = EffectSkeleton;
    })(scene = gamecomponent.scene || (gamecomponent.scene = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=EffectSkeleton.js.map