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
var gameddz;
(function (gameddz) {
    var page;
    (function (page) {
        var DdzCreadRoomPage = /** @class */ (function (_super) {
            __extends(DdzCreadRoomPage, _super);
            function DdzCreadRoomPage() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.game_id = "ddz";
                return _this;
            }
            return DdzCreadRoomPage;
        }(gametongyong.page.CreateCardRoomBase));
        page.DdzCreadRoomPage = DdzCreadRoomPage;
    })(page = gameddz.page || (gameddz.page = {}));
})(gameddz || (gameddz = {}));
//# sourceMappingURL=DdzCreadRoomPage.js.map