/**
* 路径配置
*/
var gamecomponent;
(function (gamecomponent) {
    var data;
    (function (data) {
        var Path = /** @class */ (function () {
            function Path() {
            }
            /**
             * 获得一直序列帧地址
             * @param path 图片路径
             * @param count 帧数
             * @param start 起始位置
             * @param reverse 是否倒序播放
             */
            Path.getSeqFrames = function (path, count, start, reverse) {
                if (start === void 0) { start = 0; }
                if (reverse === void 0) { reverse = false; }
                var paths = [];
                if (reverse)
                    for (var i = count - 1; i >= start; i--) {
                        paths.push(StringU.substitute(path, i));
                    }
                else
                    for (var i = start; i < start + count; i++) {
                        paths.push(StringU.substitute(path, i));
                    }
                return paths;
            };
            Path.map = "map/{0}/";
            Path.map_far = "map/{0}/far/";
            Path.mapEffect = "mapEffect/";
            Path.music = "music/";
            Path.data = 'data/';
            Path.temp = 'data/temp/';
            Path.ui_atlas_effect = "custom_atlas/ui/";
            Path.custom_atlas = "custom_atlas/";
            Path.sk_dating = 'dating_ui/sk/';
            Path.music_bg = Path.music + 'bg.mp3';
            Path.music_btn = Path.music + 'btn.mp3';
            Path.music_copy = Path.music + 'copy.mp3';
            Path.music_kefu = Path.music + 'kefu.mp3';
            Path.music_tuiguang = Path.music + 'tuiguang.mp3';
            Path.music_zhuanpan = Path.music + 'zhuanpan.mp3';
            Path.scene = 'scene/';
            Path.custom_atlas_scene = 'custom_atlas/scene/';
            return Path;
        }());
        data.Path = Path;
    })(data = gamecomponent.data || (gamecomponent.data = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=Path.js.map