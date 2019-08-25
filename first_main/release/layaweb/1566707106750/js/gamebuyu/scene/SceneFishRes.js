var gamebuyu;
(function (gamebuyu) {
    var scene;
    (function (scene) {
        var SceneFishRes = /** @class */ (function () {
            function SceneFishRes() {
            }
            /**
             * 获取炮台位置
             * @param idx
             */
            SceneFishRes.getPaoPos = function (idx) {
                return this.PAO_POSDATA[idx];
            };
            /**
             * 获取炮台皮肤
             * @param 炮台倍数
             */
            SceneFishRes.getSkin = function (rate) {
                return "pao" + rate;
            };
            /**
             * 获取子弹皮肤
             * @param rate 炮台倍数
             */
            SceneFishRes.getBulletSkin = function (rate) {
                return "zd_" + rate;
            };
            /**
             * 获取子弹击中效果
             * @param isHuaYu 是否是划鱼
             * @param rate 炮台倍数
             */
            SceneFishRes.getHitEffect = function (rate) {
                return rate.toString();
            };
            /**
             * 炮管长度
             */
            SceneFishRes.PAO_LONG = 100;
            /**
             * 炮最小朝向
             */
            SceneFishRes.MIN_TOWARD = 65;
            /**
             * 炮最大朝向
             */
            SceneFishRes.MAX_TOWARD = 127;
            return SceneFishRes;
        }());
        scene.SceneFishRes = SceneFishRes;
    })(scene = gamebuyu.scene || (gamebuyu.scene = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=SceneFishRes.js.map