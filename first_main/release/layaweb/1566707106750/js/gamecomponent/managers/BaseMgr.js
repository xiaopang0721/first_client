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
* name 管理器基类
*/
var gamecomponent;
(function (gamecomponent) {
    var managers;
    (function (managers) {
        var BaseMgr = /** @class */ (function (_super) {
            __extends(BaseMgr, _super);
            function BaseMgr(v) {
                var _this = _super.call(this) || this;
                _this._time = 0;
                //帧间隔
                _this._delta = 1000;
                _this._game = v || main.game;
                _this._game.sceneGame.sceneObjectMgr.on(managers.SceneObjectMgr.EVENT_OPRATE_SUCESS, _this, _this.onSucessHandler);
                return _this;
            }
            BaseMgr.prototype.onSucessHandler = function (data) {
            };
            BaseMgr.prototype.init = function () {
            };
            BaseMgr.prototype.update = function (diff) {
                if (this._time < 0) {
                    this.deltaUpdate();
                    this._time = this._delta;
                    return;
                }
                this._time -= diff;
            };
            /**
             * 帧间隔心跳
             */
            BaseMgr.prototype.deltaUpdate = function () {
            };
            BaseMgr.prototype.clear = function (fource) {
                this._game.sceneGame.sceneObjectMgr.off(managers.SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                Laya.timer.clearAll(this);
                Laya.Tween.clearAll(this);
            };
            return BaseMgr;
        }(Laya.EventDispatcher));
        managers.BaseMgr = BaseMgr;
    })(managers = gamecomponent.managers || (gamecomponent.managers = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=BaseMgr.js.map