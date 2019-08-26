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
* 四川麻将
*/
var majiang;
(function (majiang) {
    var page;
    (function (page) {
        var MajiangPageDef = /** @class */ (function (_super) {
            __extends(MajiangPageDef, _super);
            function MajiangPageDef() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MajiangPageDef.myinit = function (str) {
                _super.myinit.call(this, str);
            };
            return MajiangPageDef;
        }(game.gui.page.PageDef));
        page.MajiangPageDef = MajiangPageDef;
    })(page = majiang.page || (majiang.page = {}));
})(majiang || (majiang = {}));
//# sourceMappingURL=MaJiangPageDef.js.map