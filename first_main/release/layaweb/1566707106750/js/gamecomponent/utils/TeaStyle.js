/**文本样式工具
* name
*/
var utils;
(function (utils) {
    var TeaStyle = /** @class */ (function () {
        function TeaStyle() {
        }
        /**
         * 获取品质颜色
         * @param quality
         */
        TeaStyle.getQualityColor = function (quality) {
            if (quality <= 0 || quality > TeaStyle.COLOR_QUALITYS.length)
                return null;
            return TeaStyle.COLOR_QUALITYS[quality];
        };
        /*=====文本颜色(格式:COLOR_XXX)=====*/
        TeaStyle.COLOR_DEFAULT = "#d6f3ff"; //黑色、默认
        TeaStyle.COLOR_GREEN = "#41fe69"; //绿色、链接
        TeaStyle.COLOR_RED = "#ff2400"; //红色、提醒
        TeaStyle.COLOR_GRAY = "#8b8b8b"; //灰色、禁用
        TeaStyle.COLOR_YELLOW = "#ffff00"; //黄色、进行中
        TeaStyle.COLOR_BLACK = "#000000"; //纯黑色
        TeaStyle.COLOR_WHITE = "#ffffff"; //纯白色
        TeaStyle.COLOR_INPUT_DEFAULT = "#5597d2"; //输入框默认颜色值
        /**=品质颜色：白、绿、蓝、紫、橙=*/
        TeaStyle.COLOR_QUALITYS = ["#d6f3ff", "#00ff2a", "#00baff", "#ae00ff", "#ffa200", "#ff2400"];
        return TeaStyle;
    }());
    utils.TeaStyle = TeaStyle;
})(utils || (utils = {}));
//# sourceMappingURL=TeaStyle.js.map