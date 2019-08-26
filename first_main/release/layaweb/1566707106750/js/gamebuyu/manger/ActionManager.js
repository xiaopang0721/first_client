/**
* 机器蛇行为管理器
*/
var gamebuyu;
(function (gamebuyu) {
    var manager;
    (function (manager) {
        var ActionManager = /** @class */ (function () {
            function ActionManager() {
                this._actions = [];
            }
            Object.defineProperty(ActionManager.prototype, "isEmpty", {
                get: function () {
                    return !this._actions.length;
                },
                enumerable: true,
                configurable: true
            });
            // 行为更新
            ActionManager.prototype.updateActions = function (deltaTime) {
                //--取得栈顶进行心跳
                var top = this._actions.length - 1;
                var action = this._actions[top];
                if (action != null && action.update(deltaTime)) {
                    action.finalize();
                    this._actions.splice(top, 1);
                }
            };
            // 执行行为
            ActionManager.prototype.exec = function (action) {
                this.clear();
                this._actions.push(action);
            };
            // 插入行为
            ActionManager.prototype.push = function (action) {
                this._actions.push(action);
                //-- 如果初始化失败，则移除
                if (!action.initialize()) {
                    action.finalize();
                    this._actions.splice(this._actions.length - 1, 1);
                }
            };
            // 清理
            ActionManager.prototype.clear = function () {
                var len = this._actions.length;
                if (len > 0) {
                    for (var i = len; i > 0; i--) {
                        var element = this._actions[i - 1];
                        element && element.finalize();
                    }
                    this._actions.length = 0;
                }
            };
            return ActionManager;
        }());
        manager.ActionManager = ActionManager;
    })(manager = gamebuyu.manager || (gamebuyu.manager = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=ActionManager.js.map