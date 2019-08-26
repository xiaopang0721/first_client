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
var gamedatingnqp;
(function (gamedatingnqp) {
    var managers;
    (function (managers) {
        var VipMgr = /** @class */ (function (_super) {
            __extends(VipMgr, _super);
            function VipMgr(game) {
                var _this = _super.call(this, game) || this;
                _this._vipLevel = WebConfig.info ? WebConfig.info.vip_level : 0;
                _this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_VIP_INFO_UPDATE, _this, _this.onVipUpdate);
                return _this;
            }
            Object.defineProperty(VipMgr.prototype, "award", {
                get: function () {
                    return this._award;
                },
                set: function (v) {
                    this._award = v;
                },
                enumerable: true,
                configurable: true
            });
            VipMgr.prototype.onVipUpdate = function (type) {
                if (type == 1) { //vip等级变更
                    this.event(VipMgr.EVENT_VIP_CHANGE, VipMgr.TYPE_VIP_LEVEL_CHANGE);
                    var mainPlayer = this._game.sceneGame.sceneObjectMgr.mainPlayer;
                    if (mainPlayer && !this._game.sceneGame.sceneObjectMgr.mapInfo && this._vipLevel != mainPlayer.playerInfo.vip_level) {
                        this._game.uiRoot.general.open(DatingPageDef.PAGE_VIP_UP);
                        this._vipLevel = mainPlayer.playerInfo.vip_level;
                    }
                }
                else if (type == 2) { //累充金额变更
                    this.event(VipMgr.EVENT_VIP_CHANGE, VipMgr.TYPE_VIP_RECHARGE_CHANGE);
                }
                else { //vip奖励领取标识变更
                    this.event(VipMgr.EVENT_VIP_CHANGE, VipMgr.TYPE_VIP_RECEIVED_CHANGE);
                }
            };
            VipMgr.prototype.checkVipReceivedIndex = function () {
                if (!WebConfig.info)
                    return 0;
                //vip是否有未领取奖励，有的话返回true
                var mainPlayer = this._game.sceneGame.sceneObjectMgr.mainPlayer;
                if (!mainPlayer)
                    return 0;
                var level = mainPlayer.playerInfo.vip_level;
                for (var i = 1; i <= level; i++) {
                    if (!mainPlayer.GetVipAwardReceived(i - 1)) {
                        return i;
                    }
                }
                return 0;
            };
            VipMgr.prototype.clear = function (fource) {
                if (fource)
                    _super.prototype.clear.call(this, fource);
                this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_VIP_INFO_UPDATE, this, this.onVipUpdate);
            };
            VipMgr.EVENT_VIP_CHANGE = "VipMgr.change";
            VipMgr.TYPE_VIP_LEVEL_CHANGE = 1;
            VipMgr.TYPE_VIP_RECHARGE_CHANGE = 2;
            VipMgr.TYPE_VIP_RECEIVED_CHANGE = 3;
            return VipMgr;
        }(gamecomponent.managers.BaseMgr));
        managers.VipMgr = VipMgr;
    })(managers = gamedatingnqp.managers || (gamedatingnqp.managers = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=VipMgr.js.map