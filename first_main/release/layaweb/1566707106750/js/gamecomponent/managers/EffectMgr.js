/**
* UI效果
*/
var gamecomponent;
(function (gamecomponent) {
    var managers;
    (function (managers) {
        var EffectMgr = /** @class */ (function () {
            function EffectMgr() {
            }
            EffectMgr.init = function () {
                //特效配置示例
                // this.EFFECT_GONGGAO = {
                //     source: "gonggao",                 
                //     sourcePath:"ui/",// 对应资源文件名
                //     fileName: "",//资源图片前缀
                //     frameCount: 12,//资源图片个数
                //     interval: 12,//帧率
                //     start:10001,//图片起始索引
                // };
            };
            return EffectMgr;
        }());
        managers.EffectMgr = EffectMgr;
    })(managers = gamecomponent.managers || (gamecomponent.managers = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=EffectMgr.js.map