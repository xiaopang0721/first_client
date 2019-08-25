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
* 捕鱼数据管理器
*/
var gamecomponent;
(function (gamecomponent) {
    var scene;
    (function (scene) {
        var Layer = /** @class */ (function (_super) {
            __extends(Layer, _super);
            function Layer(mouseEnabled, alpha, blendMode) {
                if (mouseEnabled === void 0) { mouseEnabled = false; }
                if (alpha === void 0) { alpha = 1; }
                if (blendMode === void 0) { blendMode = null; }
                var _this = _super.call(this) || this;
                _this.mouseEnabled = mouseEnabled;
                _this.alpha = alpha;
                _this.blendMode = blendMode;
                return _this;
            }
            return Layer;
        }(Laya.Sprite));
        scene.Layer = Layer;
    })(scene = gamecomponent.scene || (gamecomponent.scene = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=Layer.js.map