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
    var component;
    (function (component) {
        var PieMask = /** @class */ (function (_super) {
            __extends(PieMask, _super);
            function PieMask() {
                return _super.call(this) || this;
            }
            PieMask.prototype.init = function (width, height, radius, alpha) {
                this.size(width, height);
                this._radius = radius;
                this.alpha = alpha;
            };
            PieMask.prototype.drawCD = function (angle) {
                angle = 360 - angle;
                this.graphics.clear();
                this.graphics.drawPie(this.width / 2, this.height / 2, this._radius, angle - 90, -90, "#000000");
            };
            return PieMask;
        }(Laya.Sprite));
        component.PieMask = PieMask;
    })(component = gamecomponent.component || (gamecomponent.component = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=PieMask.js.map