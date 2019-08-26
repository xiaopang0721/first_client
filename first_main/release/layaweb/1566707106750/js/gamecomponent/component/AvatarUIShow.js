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
* ui形象展示
*/
var gamecomponent;
(function (gamecomponent) {
    var component;
    (function (component) {
        var AvatarUIShow = /** @class */ (function (_super) {
            __extends(AvatarUIShow, _super);
            function AvatarUIShow() {
                var _this = _super.call(this) || this;
                _this.mouseEnabled = false;
                return _this;
            }
            /**
             * 加载
             * @param fullName 完整名称
             *
             */
            AvatarUIShow.prototype.loadSkeleton = function (path, x, y, drawHorizonal, completeFunc) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (drawHorizonal === void 0) { drawHorizonal = false; }
                if (this._skeleton) {
                    ObjectPools.free(this._skeleton);
                }
                this._skeleton = ObjectPools.malloc(EffectSkeleton);
                this._skeleton.scale = 1; //根据表显示缩放
                this._skeleton.enableSlot = true;
                this._skeleton.is_uiShow = true;
                this.pos(x, y);
                this._skeleton.anchorPostion = new Vector2(0, 0);
                this._skeleton.setCompleteFunc = completeFunc;
                this._skeleton.setData(path + ".sk", 2);
                this._skeleton.setLoop(true);
                this._skeleton.drawHorizonal = drawHorizonal;
                this._skeleton.build();
            };
            Object.defineProperty(AvatarUIShow.prototype, "SetScale", {
                /**设置缩放 */
                set: function (v) {
                    if (this._skeleton)
                        this._skeleton.scale = v;
                },
                enumerable: true,
                configurable: true
            });
            /*是否播放进行中*/
            AvatarUIShow.prototype.isActionPlaying = function () {
                // TODO
                // return this._runTime < this._totalTime || this._drawInfoInvalided;
                return !this._skeleton.isPlayEnd;
            };
            AvatarUIShow.prototype.onDraw = function () {
                if (!this.visible)
                    return;
                if (this._skeleton) {
                    this._skeleton.onDraw(this.graphics, null);
                    this._skeleton.parent = this;
                }
            };
            AvatarUIShow.prototype.play = function (name, loop) {
                if (this._skeleton)
                    this._skeleton.play(name, loop);
            };
            Object.defineProperty(AvatarUIShow.prototype, "rotation", {
                get: function () {
                    return this._skeleton.armature.rotation;
                },
                set: function (v) {
                    if (this._skeleton.armature)
                        this._skeleton.armature.rotation = v;
                },
                enumerable: true,
                configurable: true
            });
            /**暂停 */
            AvatarUIShow.prototype.paused = function () {
                if (this._skeleton)
                    this._skeleton.paused();
            };
            /**恢复 */
            AvatarUIShow.prototype.resume = function () {
                if (this._skeleton)
                    this._skeleton.resume();
            };
            AvatarUIShow.prototype.clear = function (dispsoe) {
                if (dispsoe === void 0) { dispsoe = true; }
                if (dispsoe) {
                    if (this._skeleton) {
                        ObjectPools.free(this._skeleton);
                    }
                }
                this._skeleton = null;
            };
            return AvatarUIShow;
        }(Laya.Sprite));
        component.AvatarUIShow = AvatarUIShow;
    })(component = gamecomponent.component || (gamecomponent.component = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=AvatarUIShow.js.map