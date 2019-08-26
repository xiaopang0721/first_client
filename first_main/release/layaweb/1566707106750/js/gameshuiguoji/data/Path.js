/**
* 路径配置
*/
var gameshuiguoji;
(function (gameshuiguoji) {
    var data;
    (function (data) {
        var Path = /** @class */ (function () {
            function Path() {
            }
            Path.music_shuiguoji = 'music/shuiguoji/';
            Path.ui_shuiguoji = "shuiguoji_ui/game_ui/shuiguoji/";
            Path.ui_shuiguoji_effect = Path.ui_shuiguoji + "effect/";
            Path.ui_shuiguoji_effect_zhongjiang = Path.ui_shuiguoji_effect + "zhongjiang/";
            Path.atlas_game_ui = "shuiguoji_res/atlas/shuiguoji_ui/game_ui/";
            return Path;
        }());
        data.Path = Path;
    })(data = gameshuiguoji.data || (gameshuiguoji.data = {}));
})(gameshuiguoji || (gameshuiguoji = {}));
//# sourceMappingURL=Path.js.map