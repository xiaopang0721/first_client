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
* 财神到
*/
var gamecaishendao;
(function (gamecaishendao) {
    var page;
    (function (page) {
        var CaishendaoPageDef = /** @class */ (function (_super) {
            __extends(CaishendaoPageDef, _super);
            function CaishendaoPageDef() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CaishendaoPageDef.myinit = function (str) {
                _super.myinit.call(this, str);
            };
            return CaishendaoPageDef;
        }(game.gui.page.PageDef));
        page.CaishendaoPageDef = CaishendaoPageDef;
    })(page = gamecaishendao.page || (gamecaishendao.page = {}));
})(gamecaishendao || (gamecaishendao = {}));
//# sourceMappingURL=CaiShenDaoPageDef.js.map