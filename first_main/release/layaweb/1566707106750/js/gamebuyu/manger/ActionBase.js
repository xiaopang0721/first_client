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
    var manager;
    (function (manager) {
        var ActionBase = /** @class */ (function () {
            function ActionBase() {
                this.isFinal = false;
                this.timers = [];
            }
            // 增加定时器
            ActionBase.prototype.addTimer = function (t) {
                // 重复次数至少是1次
                if (t.delay == null)
                    t.delay = 0;
                if (t.repeatCount == null)
                    t.repeatCount = 1;
                t.__prevTime = 0;
                t.__currentCount = 0;
                return t;
            };
            // 更新定时器
            ActionBase.prototype.updateTimer = function (deltaTime) {
                var len = this.timers.length;
                for (var i = 0; i < len; i++) {
                    var timer = this.timers[i];
                    timer.__prevTime += deltaTime;
                    if (timer.__prevTime >= timer.delay) {
                        timer.__prevTime -= timer.delay;
                        timer.__currentCount += 1;
                        timer.func(timer.arg);
                    }
                    // 移除定时器
                    if (timer.__currentCount >= timer.repeatCount) {
                        this.timers.splice(i, 1);
                        i = i <= 0 ? 0 : i - 1;
                        len = this.timers.length;
                    }
                }
            };
            // 删除定时器
            ActionBase.prototype.remoteTimer = function (t) {
                var len = this.timers.length;
                for (var i = 0; i < len; i++) {
                    var ele = this.timers[i];
                    if (ele == t) {
                        this.timers.splice(i, 1);
                        return true;
                    }
                }
                return false;
            };
            // 初始化，返回子类是否有继续执行的必要
            ActionBase.prototype.initialize = function () {
                return true;
            };
            // 释放
            ActionBase.prototype.finalize = function () {
                this.isFinal = true;
                if (this.onFinalize != null) {
                    this.onFinalize();
                    this.onFinalize = null;
                }
                return true;
            };
            // -- 返回true行为执行完毕 
            ActionBase.prototype.update = function (deltaTime) {
                this.updateTimer(deltaTime);
                return true;
            };
            return ActionBase;
        }());
        manager.ActionBase = ActionBase;
        // 移动栈
        // @target		有值时追踪目标
        // @distance 	接近距离
        var ActionMoveTarget = /** @class */ (function (_super) {
            __extends(ActionMoveTarget, _super);
            function ActionMoveTarget(owner, target) {
                var _this = _super.call(this) || this;
                _this._owner = owner;
                _this.setTarget(target);
                return _this;
            }
            // 更新到新的移动目标
            ActionMoveTarget.prototype.setTarget = function (target) {
                var distance = Vector2.temp.set(this._owner.pos).sub(target).len;
                this._endTime = this._owner.sceneObjectMgr.game.sync.serverTimeBys + distance / this._owner.moveSpeed;
                if (!this._target) {
                    this._target = target.clone();
                }
                else {
                    this._target.set(target);
                }
            };
            ActionMoveTarget.prototype.clearTarget = function () {
                this._endTime = 0;
                this._target = null;
            };
            ActionMoveTarget.prototype.update = function (deltaTime) {
                _super.prototype.update.call(this, deltaTime);
                if (this._target == null)
                    return true;
                if (this._owner.pos.dist(this._target) < this._owner.moveSpeed / 30) {
                    return true;
                }
                Vector2.temp.set(this._target).sub(this._owner.pos);
                this._owner.turnToward(Vector2.temp);
                if (this._endTime > this._owner.sceneObjectMgr.game.sync.serverTimeBys) {
                    return false;
                }
                return true;
            };
            ActionMoveTarget.prototype.finalize = function () {
                this._owner = null;
                this._target = null;
                return _super.prototype.finalize.call(this);
            };
            return ActionMoveTarget;
        }(ActionBase));
        manager.ActionMoveTarget = ActionMoveTarget;
        var ActionMovePath = /** @class */ (function (_super) {
            __extends(ActionMovePath, _super);
            function ActionMovePath(owner, path) {
                var _this = _super.call(this) || this;
                _this._owner = owner;
                _this._path = path;
                return _this;
            }
            ActionMovePath.prototype.update = function (deltaTime) {
                _super.prototype.update.call(this, deltaTime);
                if (!this._path || !this._path.length)
                    return true;
                this._owner.actionManager.push(new ActionMoveTarget(this._owner, this._path.shift()));
                return false;
            };
            ActionMovePath.prototype.finalize = function () {
                this._owner = null;
                this._path = null;
                return _super.prototype.finalize.call(this);
            };
            return ActionMovePath;
        }(ActionBase));
        manager.ActionMovePath = ActionMovePath;
    })(manager = gamebuyu.manager || (gamebuyu.manager = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=ActionBase.js.map