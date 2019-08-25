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
* name 房卡管理器数据单元
*/
var gamecomponent;
(function (gamecomponent) {
    var managers;
    (function (managers) {
        var CardRoomMgr = /** @class */ (function (_super) {
            __extends(CardRoomMgr, _super);
            function CardRoomMgr(g) {
                return _super.call(this, g) || this;
            }
            CardRoomMgr.prototype.init = function () {
            };
            CardRoomMgr.prototype.update = function (diff) {
            };
            CardRoomMgr.prototype.deltaUpdate = function () {
            };
            CardRoomMgr.prototype.clear = function (fource) {
                _super.prototype.clear.call(this, fource);
                //房间ID
                this.RoomID = "";
                //房间类型
                this.RoomType = 0;
                //房间回合
                this.RoomRound = 0;
                //房卡费用
                this.RoomPay = 0;
                //付费类型
                this.PayType = 0;
                //额外参数
                this.Agrs = "";
            };
            return CardRoomMgr;
        }(gamecomponent.managers.BaseMgr));
        managers.CardRoomMgr = CardRoomMgr;
    })(managers = gamecomponent.managers || (gamecomponent.managers = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=CardRoomMgr.js.map