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
var gametoubao;
(function (gametoubao) {
    var manager;
    (function (manager) {
        var ToubaoMgr = /** @class */ (function (_super) {
            __extends(ToubaoMgr, _super);
            function ToubaoMgr(game) {
                var _this = _super.call(this, game) || this;
                _this._isCancel = false;
                _this._isReConnect = true;
                return _this;
            }
            Object.defineProperty(ToubaoMgr.prototype, "offlineUnit", {
                get: function () {
                    return this._offlineUnit;
                },
                set: function (v) {
                    this._offlineUnit = v;
                    this.event(ToubaoMgr.MAPINFO_OFFLINE);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ToubaoMgr.prototype, "isReConnect", {
                get: function () {
                    return this._isReConnect;
                },
                set: function (v) {
                    this._isReConnect = v;
                },
                enumerable: true,
                configurable: true
            });
            ToubaoMgr.MAPINFO_OFFLINE = "ToubaoMgr.MAPINFO_OFFLINE"; //假精灵
            return ToubaoMgr;
        }(gamecomponent.managers.BaseMgr));
        manager.ToubaoMgr = ToubaoMgr;
    })(manager = gametoubao.manager || (gametoubao.manager = {}));
})(gametoubao || (gametoubao = {}));
//# sourceMappingURL=ToubaoMgr.js.map