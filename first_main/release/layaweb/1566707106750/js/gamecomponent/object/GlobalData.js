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
        var GlobalData = /** @class */ (function (_super) {
            __extends(GlobalData, _super);
            function GlobalData(v) {
                var _this = _super.call(this) || this;
                _this._game = v;
                _this._after_update = _this.onUpdate;
                _this._globalInfo = new GlobalInfo();
                return _this;
            }
            GlobalData.prototype.onUpdate = function (flags, mask, strmask) {
                var isNew = flags & core.obj.OBJ_OPT_NEW;
                var ness = 0;
            };
            return GlobalData;
        }(game.object.GlobalObjectField));
        object.GlobalData = GlobalData;
        var GlobalInfo = /** @class */ (function () {
            function GlobalInfo() {
            }
            return GlobalInfo;
        }());
    })(object = gamecomponent.object || (gamecomponent.object = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=GlobalData.js.map