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
* 斗地主-加入房间
*/
var gameddz;
(function (gameddz) {
    var page;
    (function (page) {
        var DdzJoinRoomPage = /** @class */ (function (_super) {
            __extends(DdzJoinRoomPage, _super);
            function DdzJoinRoomPage() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._game_id = "ddz";
                _this._open_id = page.DdzPageDef.PAGE_DDZ_JOIN_CARDROOM;
                return _this;
            }
            return DdzJoinRoomPage;
        }(gametongyong.page.JoinCardRoomBase));
        page.DdzJoinRoomPage = DdzJoinRoomPage;
    })(page = gameddz.page || (gameddz.page = {}));
})(gameddz || (gameddz = {}));
//# sourceMappingURL=DdzJoinRoomPage.js.map