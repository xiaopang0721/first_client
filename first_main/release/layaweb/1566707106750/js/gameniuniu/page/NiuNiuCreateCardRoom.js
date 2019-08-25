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
* name
*/
var gameniuniu;
(function (gameniuniu) {
    var page;
    (function (page) {
        var NiuNiuCreateCardRoom = /** @class */ (function (_super) {
            __extends(NiuNiuCreateCardRoom, _super);
            function NiuNiuCreateCardRoom() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.game_id = "niuniu";
                return _this;
            }
            return NiuNiuCreateCardRoom;
        }(gametongyong.page.CreateCardRoomBase));
        page.NiuNiuCreateCardRoom = NiuNiuCreateCardRoom;
    })(page = gameniuniu.page || (gameniuniu.page = {}));
})(gameniuniu || (gameniuniu = {}));
//# sourceMappingURL=NiuNiuCreateCardRoom.js.map