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
var gamecomponent;
(function (gamecomponent) {
    var object;
    (function (object) {
        var Unit = /** @class */ (function (_super) {
            __extends(Unit, _super);
            function Unit(v) {
                var _this = _super.call(this) || this;
                _this._sceneObjectMgr = v;
                //更新完毕之后
                _this._after_update = _this.onUpdate;
                return _this;
            }
            Object.defineProperty(Unit.prototype, "sceneObjectMgr", {
                get: function () {
                    return this._sceneObjectMgr;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Unit.prototype, "type", {
                get: function () {
                    return this._type;
                },
                enumerable: true,
                configurable: true
            });
            //当对象更新发生时
            Unit.prototype.onUpdate = function (flags, mask, strmask) {
                var isNew = flags & core.obj.OBJ_OPT_NEW;
                if (isNew || mask.GetBit(UnitField.UNIT_INT_TYPE)) {
                    this._type = this.GetType();
                    this.event(Unit.EVENT_TYPE_CHANGED, this);
                }
                if (isNew || mask.GetBit(UnitField.UNIT_INT_BYTE1)) {
                    this._sceneObjectMgr.event(SceneObjectMgr.EVENT_UNIT_CHANGE);
                }
                if (isNew || mask.GetBit(UnitField.UNIT_INT_BIT1)) {
                    this._sceneObjectMgr.event(SceneObjectMgr.EVENT_UNIT_ACTION);
                }
                if (isNew || mask.GetBit(UnitField.UNIT_INT_MONEY)) {
                    this._sceneObjectMgr.event(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE);
                }
                if (isNew || mask.GetBit(UnitField.UNIT_INT_QI_FU_END_TIME)) {
                    this._sceneObjectMgr.event(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE);
                }
            };
            Unit.prototype.clear = function () {
            };
            Unit.EVENT_TYPE_CHANGED = "Unit.EVENT_TYPE_CHANGED";
            return Unit;
        }(game.object.UnitField));
        object.Unit = Unit;
    })(object = gamecomponent.object || (gamecomponent.object = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=Unit.js.map