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
* 创建房间
*/
var gameshisanshui;
(function (gameshisanshui) {
    var page;
    (function (page) {
        var ShisanshuiCreadRoomPage = /** @class */ (function (_super) {
            __extends(ShisanshuiCreadRoomPage, _super);
            function ShisanshuiCreadRoomPage() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.game_id = "shisanshui";
                return _this;
            }
            return ShisanshuiCreadRoomPage;
        }(gametongyong.page.CreateCardRoomBase));
        page.ShisanshuiCreadRoomPage = ShisanshuiCreadRoomPage;
    })(page = gameshisanshui.page || (gameshisanshui.page = {}));
})(gameshisanshui || (gameshisanshui = {}));
//# sourceMappingURL=ShisanshuiCreadRoomPage.js.map