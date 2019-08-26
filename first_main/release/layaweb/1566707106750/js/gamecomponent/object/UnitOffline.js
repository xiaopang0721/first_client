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
* name 假的精灵
*/
var gamecomponent;
(function (gamecomponent) {
    var object;
    (function (object) {
        var UnitOffline = /** @class */ (function (_super) {
            __extends(UnitOffline, _super);
            function UnitOffline(v) {
                return _super.call(this, v) || this;
            }
            return UnitOffline;
        }(object.Unit));
        object.UnitOffline = UnitOffline;
    })(object = gamecomponent.object || (gamecomponent.object = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=UnitOffline.js.map