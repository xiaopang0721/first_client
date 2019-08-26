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
* name 行为基类
*/
var gamecomponent;
(function (gamecomponent) {
    var object;
    (function (object) {
        var ActionBase = /** @class */ (function (_super) {
            __extends(ActionBase, _super);
            function ActionBase() {
                var _this = _super.call(this) || this;
                _this.skew_x = 0; //斜旋转x
                _this.skew_y = 0; //斜旋转y
                _this.rotateAngle = 0; //旋转角度
                _this.scaleX = 1;
                _this.scaleY = 1;
                _this.size = 1;
                _this.sortScore = 0; //
                _this.visible = true; //隐藏
                _this.toggleDistance = -20; //toggle 距离
                return _this;
            }
            Object.defineProperty(ActionBase.prototype, "pos", {
                get: function () {
                    return this._pos;
                },
                set: function (v) {
                    if (this._pos && v) {
                        throw new Error("为什么要new 那么多次");
                    }
                    this._pos = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ActionBase.prototype, "targe_pos", {
                get: function () {
                    return this._targe_pos;
                },
                set: function (v) {
                    if (this._targe_pos && v) {
                        throw new Error("为什么要new 那么多次");
                    }
                    this._targe_pos = v;
                },
                enumerable: true,
                configurable: true
            });
            ActionBase.prototype.update = function (diff) {
            };
            ActionBase.prototype.clear = function () {
                if (!this.isCanClear) {
                    throw new Error("可以清了吗？");
                }
                Laya.timer.clearAll(this);
                Laya.Tween.clearAll(this);
                this._targe_pos = null;
                this._pos = null;
                this.owner = null;
            };
            return ActionBase;
        }(core.obj.GuidObject));
        object.ActionBase = ActionBase;
    })(object = gamecomponent.object || (gamecomponent.object = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=ActionBase.js.map