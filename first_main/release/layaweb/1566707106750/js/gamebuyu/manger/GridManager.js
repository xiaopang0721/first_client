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
        // 网格边长
        var kGridWidth = 800;
        // --为了可以1维转2维存储网格，所以定义一下超大的列		
        var kMaxGridColumn = 65536;
        /**
         * 网格对象,除了有网格坐标也包含该网格所有对象
         */
        var Grid = /** @class */ (function () {
            function Grid(id, x, y) {
                this.objs = [];
                this.id = id;
                this.x = x;
                this.y = y;
            }
            /**
             * 2维转1维坐标算法
             * @param x
             * @param y
             */
            Grid.makeID = function (x, y) {
                var id = y * kMaxGridColumn + x;
                return id;
            };
            return Grid;
        }());
        manager.Grid = Grid;
        var Vector2GridObject = /** @class */ (function (_super) {
            __extends(Vector2GridObject, _super);
            function Vector2GridObject(x, y) {
                var _this = _super.call(this, x, y) || this;
                // 池名称 
                _this.poolName = 'Vector2GridObject';
                _this.cacheObjs = [];
                return _this;
            }
            /**
             * 进池 （相当于对象dispose函数）
             */
            Vector2GridObject.prototype.intoPool = function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
                // this.oid = 0;
                // this.index = 0;
                // this.tag = '';
                this.owner = null;
                isDebug && console.assert(this.grid == null);
                // this.grid = null;
                this.cacheObjs.length = 0;
            };
            /**
             * 出池 （相当于对象初始化函数）
             */
            Vector2GridObject.prototype.outPool = function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
                this.x = arg[0];
                this.y = arg[1];
            };
            Vector2GridObject.prototype.dist = function (o) {
                return _super.prototype.dist.call(this, o);
            };
            Vector2GridObject.prototype.clone = function () {
                return ObjectPools.malloc(Vector2GridObject, null, this.x, this.y);
            };
            return Vector2GridObject;
        }(core.utils.Vector2));
        manager.Vector2GridObject = Vector2GridObject;
        /**
         * 网格管理器,用于碰撞检测以及蛇的AI
         */
        var GridManager = /** @class */ (function () {
            function GridManager() {
                this._updateTick = 0;
                this._grids = {};
            }
            /**
             * addObject 将节点坐标加入网格对象
             */
            GridManager.prototype.addObject = function (pos) {
                isDebug && console.assert(pos.owner);
                //  --新网格坐标
                var grid = this.__FindGridByPos(pos.x, pos.y);
                pos.grid = grid;
                isDebug && console.assert(pos.grid != null, L.GetLang(123));
                // 检查一下重复插入
                grid.objs.indexOf(pos) == -1 && (grid.objs[grid.objs.length] = pos);
                // console.log("addObject ", pos.owner.oid, "grid:", grid.x, grid.y);
            };
            /**
             * updateObject
             */
            GridManager.prototype.updateObject = function (pos) {
                isDebug && console.assert(pos.grid != null, L.GetLang(124));
                var oldGrid = pos.grid;
                // 新网格坐标
                var newGrid = this.__FindGridByPos(pos.x, pos.y);
                if (oldGrid != newGrid) {
                    isDebug && console.assert(oldGrid.x != newGrid.x || oldGrid.y != newGrid.y, "updateObject  oldGrid != newGrid");
                    // 从老的地方删除
                    var index = oldGrid.objs.indexOf(pos);
                    if (index >= -1)
                        oldGrid.objs.splice(index, 1);
                    pos.grid = null;
                    // 加入新的网格
                    //TODO:注意检查一下重复插入
                    newGrid.objs[newGrid.objs.length] = pos;
                    pos.grid = newGrid;
                    //console.log("updateObject ",pos.oid, pos.tag, pos.index, "oldGrid:", oldGrid.x, oldGrid.y,  "newGrid:", newGrid.x, newGrid.y);
                }
            };
            /**
             * delObject 从网格管理器里面移除该对象
             */
            GridManager.prototype.delObject = function (pos) {
                var grid = pos.grid;
                if (grid == null)
                    return false;
                var idx = grid.objs.indexOf(pos);
                idx != -1 && grid.objs.splice(idx, 1);
                pos.grid = null;
                pos.cacheObjs.length = 0;
                // console.log("delObject ", pos.owner.oid, pos.x, pos.y, "grid:", grid.x, grid.y);
                return true;
            };
            /**
             * clearCache 心跳计算+1,让缓存失效
             */
            GridManager.prototype.clearCache = function () {
                this._updateTick += 1;
            };
            /**
             * FindObject 传入节点查找,旁边的节点
             */
            GridManager.prototype.findObject = function (pos, dist) {
                if (dist === void 0) { dist = 4; }
                if (pos.updateTick == this._updateTick && pos.cacheObjs) {
                    return pos.cacheObjs;
                }
                var grid = pos.grid;
                var x = grid.x, y = grid.y;
                // --离我最近的关节
                // let node:IGridPosObject = null
                // let dist:number = Number.MAX_VALUE;
                var list = pos.cacheObjs;
                list.length = 0; //清空一下
                for (var i = (x == 0 ? x : (x - 1)); i <= x + 1; i++) {
                    for (var j = (y == 0 ? y : (y - 1)); j < y + 1; j++) {
                        var tempGrid = this.__CreateGrid(i, j);
                        tempGrid.objs.forEach(function (element, index, object) {
                            isDebug && console.assert(element.grid);
                            if (element.owner == null) {
                                // logw('网格碰撞节点泄漏', element.tag, element.oid);
                                object.splice(index, 1);
                            }
                            // 不属于自身 并且 如果距离小于1 则记录下来
                            else if (pos.owner != element.owner && pos.dist(element) < dist) {
                                list.push(element);
                            }
                        });
                    }
                }
                // 缓存检索结果
                pos.updateTick = this._updateTick;
                return list;
            };
            // 根据坐标找到所在的网格
            GridManager.prototype.__FindGridByPos = function (x, y) {
                var gridX = Math.floor(x / kGridWidth);
                var gridY = Math.floor(y / kGridWidth);
                return this.__CreateGrid(gridX, gridY);
            };
            // 创建或者查找网格对象s
            GridManager.prototype.__CreateGrid = function (gridX, gridY) {
                var id = Grid.makeID(gridX, gridY);
                var grid = this._grids[id];
                if (grid == null) {
                    grid = new Grid(id, gridX, gridY);
                    this._grids[id] = grid;
                }
                return grid;
            };
            return GridManager;
        }());
        manager.GridManager = GridManager;
    })(manager = gamebuyu.manager || (gamebuyu.manager = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=GridManager.js.map