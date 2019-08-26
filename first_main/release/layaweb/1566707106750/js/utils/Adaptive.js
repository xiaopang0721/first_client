/**
* 适配类 主要是重载laya引擎函数
*/
var utils;
(function (utils) {
    var Adaptive = /** @class */ (function () {
        function Adaptive() {
        }
        Adaptive.init = function () {
            this.Stage_resetCanvas();
        };
        Adaptive.Stage_resetCanvas = function () {
            var _resetCanvas = Laya.Stage.prototype['_resetCanvas'];
            Laya.Stage.prototype['_resetCanvas'] = function () {
                if (!this.screenAdaptationEnabled)
                    return;
                var canvas = Laya.Render._mainCanvas;
                var canvasStyle = canvas.source.style;
                canvas.size(1, 1);
                // laya的坑
                // Laya.timer.once(100,this,this._changeCanvasSize);
                Laya.timer.callLater(this, this._changeCanvasSize);
            };
        };
        return Adaptive;
    }());
    utils.Adaptive = Adaptive;
})(utils || (utils = {}));
//# sourceMappingURL=Adaptive.js.map