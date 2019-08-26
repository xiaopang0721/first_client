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
var gamebuyu;
(function (gamebuyu) {
    var manager;
    (function (manager) {
        /**
         * 碰撞管理器
         */
        var CollideManager = /** @class */ (function (_super) {
            __extends(CollideManager, _super);
            function CollideManager(v) {
                var _this = _super.call(this) || this;
                _this._collides = [];
                return _this;
            }
            // 加入碰撞体
            CollideManager.prototype.addCollider = function (obj) {
                (this._collides.indexOf(obj) == -1) && (this._collides[this._collides.length] = obj);
            };
            // 删除碰撞体
            CollideManager.prototype.delCollider = function (obj) {
                var index = this._collides.indexOf(obj);
                if (index >= 0)
                    this._collides.splice(index, 1);
            };
            CollideManager.prototype.update = function (diff) {
                // 让所有的缓存碰撞失效
                this.clearCache();
                for (var _i = 0, _a = this._collides; _i < _a.length; _i++) {
                    var collide = _a[_i];
                    this.checkCollide(collide);
                }
            };
            // 碰撞检测
            CollideManager.prototype.checkCollide = function (collide) {
                var pos = collide.pos;
                isDebug && console.assert(pos.grid);
                var grid = pos.grid;
                var x = grid.x, y = grid.y;
                var x0 = x == 0 ? x : (x - 1);
                var y0 = y == 0 ? y : (y - 1);
                var x1 = x + 1;
                var y1 = y + 1;
                for (var i = x0; i <= x1; i++) {
                    for (var j = y0; j < y1; j++) {
                        var tempGrid = this.__CreateGrid(i, j);
                        var oLen = tempGrid.objs.length;
                        for (var k = 0; k < oLen; k++) {
                            var element = tempGrid.objs[k];
                            if (!element)
                                continue;
                            isDebug && console.assert(element.grid);
                            if (element.owner == null) {
                                // logw('网格碰撞节点泄漏', element.owner);
                                tempGrid.objs.splice(k, 1);
                                k = k <= 0 ? 0 : k - 1;
                                oLen = tempGrid.objs.length;
                            }
                            // 不属于自身 并且碰撞的
                            else if (collide != element.owner && pos.dist(element) < pos.radius + element.radius) {
                                if (collide.OnTriggerEnter2D(element) && collide.colloderOnce) {
                                    return;
                                }
                            }
                        }
                        // tempGrid.objs.forEach((element, index, object) => {
                        // 	isDebug && console.assert(element.grid);
                        // 	if (element.owner == null) {
                        // 		// logw('网格碰撞节点泄漏', element.owner);
                        // 		object.splice(index, 1);
                        // 	}
                        // 	// 不属于自身 并且碰撞的
                        // 	else if (collide != element.owner && pos.dist(element) < pos.radius + element.radius) {
                        // 		if (collide.OnTriggerEnter2D(element) && collide.colloderOnce) {
                        // 			return;
                        // 		}
                        // 	}
                        // });
                    }
                }
            };
            CollideManager.prototype.clear = function () {
                this._collides.length = 0;
            };
            return CollideManager;
        }(manager.GridManager));
        manager.CollideManager = CollideManager;
    })(manager = gamebuyu.manager || (gamebuyu.manager = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=CollideManager.js.map