var gamecomponent;
(function (gamecomponent) {
    var scene;
    (function (scene) {
        var SceneRes = /** @class */ (function () {
            function SceneRes() {
            }
            SceneRes.CELL_WIDTH = 1;
            SceneRes.CELL_HEIGHT = 1;
            SceneRes.GRAY = "gray";
            SceneRes.LIGHT = "light";
            return SceneRes;
        }());
        scene.SceneRes = SceneRes;
    })(scene = gamecomponent.scene || (gamecomponent.scene = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=SceneRes.js.map