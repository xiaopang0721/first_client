/**
* name 小红点检查管理器
*/
var gamedating;
(function (gamedating) {
    var managers;
    (function (managers) {
        var RedCheckMgr = /** @class */ (function () {
            function RedCheckMgr(game) {
                this._game = game;
                this._event = new Laya.EventDispatcher();
            }
            RedCheckMgr.prototype.update = function (diff) {
            };
            Object.defineProperty(RedCheckMgr.prototype, "event", {
                get: function () {
                    return this._event;
                },
                enumerable: true,
                configurable: true
            });
            RedCheckMgr.prototype.checkTargetNow = function () {
                this.event.event(RedCheckMgr.EVENT_CHECK);
            };
            RedCheckMgr.EVENT_CHECK = "RedCheckMgr.EVENT_CHECK";
            return RedCheckMgr;
        }());
        managers.RedCheckMgr = RedCheckMgr;
    })(managers = gamedating.managers || (gamedating.managers = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=RedCheckMgr.js.map