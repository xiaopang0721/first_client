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
* 跑得快-加入房间
*/
var gamepaodekuai;
(function (gamepaodekuai) {
    var page;
    (function (page) {
        var PaodekuaiJoinRoomPage = /** @class */ (function (_super) {
            __extends(PaodekuaiJoinRoomPage, _super);
            function PaodekuaiJoinRoomPage() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._game_id = "paodekuai";
                _this._open_id = page.PaodekuaiPageDef.PAGE_PDK_JOIN_CARDROOM;
                return _this;
            }
            return PaodekuaiJoinRoomPage;
        }(gametongyong.page.JoinCardRoomBase));
        page.PaodekuaiJoinRoomPage = PaodekuaiJoinRoomPage;
    })(page = gamepaodekuai.page || (gamepaodekuai.page = {}));
})(gamepaodekuai || (gamepaodekuai = {}));
//# sourceMappingURL=PaodekuaiJoinRoomPage.js.map