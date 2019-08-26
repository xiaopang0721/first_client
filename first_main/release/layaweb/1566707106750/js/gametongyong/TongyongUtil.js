var gametongyong;
(function (gametongyong) {
    var game_config = {
        "zjh": [[4, 1000], [3, 500], [2, 200], [1, 20]],
        "ddz": [[14, 1000], [13, 500], [12, 200], [11, 20]],
        "niuniu": [[24, 1000], [23, 500], [22, 200], [21, 20]],
        "blackjack": [[34, 1000], [33, 500], [32, 200], [31, 20]],
        "tbniuniu": [[44, 1000], [43, 500], [42, 200], [41, 20]],
        "buyu": [[54, 1000], [53, 500], [52, 200], [51, 20]],
        "brniuniu": [[74, 1000], [73, 500], [72, 200], [71, 20]],
        "longhu": [[84, 1000], [83, 500], [82, 200], [81, 20]],
        "sangong": [[94, 1000], [93, 500], [92, 200], [91, 20]],
        "honghei": [[104, 1000], [103, 500], [102, 200], [101, 20]],
        "ebgang": [[114, 1000], [113, 500], [112, 200], [111, 20]],
        "paijiu": [[124, 1000], [123, 500], [122, 200], [121, 20]],
        "shuiguoji": [[134, 1000], [133, 500], [132, 200], [131, 20]],
        "baijiale": [[144, 1000], [143, 500], [142, 200], [141, 20]],
        "shisanshui": [[154, 1000], [153, 500], [152, 200], [151, 20]],
        "benchibaoma": [[164, 1000], [163, 500], [162, 200], [161, 20]],
        "bairendezhou": [[174, 1000], [173, 500], [172, 200], [171, 20]],
        "toubao": [[184, 1000], [183, 500], [182, 200], [181, 20]],
        "dezhou": [[195, 1000], [194, 500], [193, 200], [192, 20]],
        "zoo": [[205, 1000], [204, 500], [203, 200], [202, 20]],
        "paodekuai": [[215, 1000], [214, 500], [213, 200], [212, 20]],
        "majiang": [[225, 1000], [224, 500], [223, 200], [222, 20]],
        "elslp": [[235, 1000], [234, 500], [233, 200], [232, 20]],
    };
    var TongyongUtil = /** @class */ (function () {
        function TongyongUtil() {
        }
        /**
         * 根据game_id和身上金币，返回快速加入游戏的maplv
         * @param game_id 游戏名
         * @param money 身上的金币
         */
        TongyongUtil.getJoinMapLv = function (game_id, money) {
            var maplv;
            var obj = game_config[game_id];
            if (!obj)
                return maplv;
            for (var i = 0; i < obj.length; i++) {
                if (obj[i][1] < money) {
                    maplv = obj[i][0];
                    break;
                }
            }
            return maplv;
        };
        return TongyongUtil;
    }());
    gametongyong.TongyongUtil = TongyongUtil;
})(gametongyong || (gametongyong = {}));
//# sourceMappingURL=TongyongUtil.js.map