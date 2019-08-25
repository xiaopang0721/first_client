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
* 加入房间
*/
var gameshisanshui;
(function (gameshisanshui) {
    var page;
    (function (page) {
        var ShisanshuiJoinRoomPage = /** @class */ (function (_super) {
            __extends(ShisanshuiJoinRoomPage, _super);
            function ShisanshuiJoinRoomPage() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._game_id = "shisanshui";
                _this._open_id = page.ShisanshuiPageDef.PAGE_SSS_JOIN_CARDROOM;
                return _this;
            }
            return ShisanshuiJoinRoomPage;
        }(gametongyong.page.JoinCardRoomBase));
        page.ShisanshuiJoinRoomPage = ShisanshuiJoinRoomPage;
    })(page = gameshisanshui.page || (gameshisanshui.page = {}));
})(gameshisanshui || (gameshisanshui = {}));
//# sourceMappingURL=ShisanshuiJoinRoomPage.js.map