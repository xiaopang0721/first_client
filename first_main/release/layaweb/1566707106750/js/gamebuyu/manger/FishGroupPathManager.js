/**
* name
*/
var gamebuyu;
(function (gamebuyu) {
    var manager;
    (function (manager) {
        var FishGroupPathManager = /** @class */ (function () {
            function FishGroupPathManager() {
            }
            Object.defineProperty(FishGroupPathManager, "data", {
                get: function () {
                    return this._data;
                },
                enumerable: true,
                configurable: true
            });
            FishGroupPathManager.setData = function (v) {
                this._data = v;
                this._tempVec2 = new Vector2();
                //鱼群模板
                this._fishGroupTemp = {};
                var tb_fish_group = this._data["tb_fish_group"];
                for (var _i = 0, tb_fish_group_1 = tb_fish_group; _i < tb_fish_group_1.length; _i++) {
                    var item = tb_fish_group_1[_i];
                    if (item && item.id) {
                        this._fishGroupTemp[item.id] = item;
                    }
                }
                //碰撞模板
                this._fishCollisionTemp = {};
                var tb_fish_collision = this._data["tb_fish_collision"];
                for (var _a = 0, tb_fish_collision_1 = tb_fish_collision; _a < tb_fish_collision_1.length; _a++) {
                    var item = tb_fish_collision_1[_a];
                    if (item && item.id) {
                        this._fishCollisionTemp[item.id] = item;
                    }
                }
                //鱼线模板
                this._fishLineTemp = [];
                var tb_fish_line = this._data["tb_fish_line"];
                for (var _b = 0, tb_fish_line_1 = tb_fish_line; _b < tb_fish_line_1.length; _b++) {
                    var item = tb_fish_line_1[_b];
                    if (item && item.id) {
                        this._fishLineTemp[item.id] = item;
                    }
                }
            };
            /**
             * tb_fish_group根据对应id取数据
             *	id:int	鱼群id
             *	group_typ:int	鱼群类型
             *	long:int	鱼的中心点补充长度
             *	entrys:array	鱼的模版id
             *	points:array	鱼群坐标
             *	boss:int	boss序号
             *	x:int	父级坐标x
             *	y:int	父级坐标y
            */
            FishGroupPathManager.getFishGroupTempById = function (groupID) {
                if (!this._fishGroupTemp)
                    return;
                var fish_group = this._fishGroupTemp[groupID];
                if (!fish_group)
                    throw new Error("找不到鱼群，groupID：" + groupID);
                if (!fish_group.vec2) {
                    fish_group.vec2 = this.updateVector2FromPoints(fish_group.points);
                }
                return fish_group;
            };
            /**
             * tb_fish_collision根据对应id取数据
             *	id:int	鱼id
             *	points:array	碰撞坐标
            
            */
            FishGroupPathManager.getCollisionTempById = function (id) {
                var fish_group = this._fishCollisionTemp[id];
                // if (!fish_group)
                // throw new Error("找不到鱼碰撞模版，ID：" + id);
                return fish_group;
            };
            /**
             * tb_fish_line根据对应id取数据
             *	id:int	路线id
             *	time:int	路线的时间
             *	points:array	路线坐标
             *	x:int	父级坐标x
             *	y:int	父级坐标y
            */
            FishGroupPathManager.getFishLineTempById = function (lineID) {
                var line = this._fishLineTemp[lineID];
                if (!line)
                    return;
                if (!line.vec2) {
                    line.vec2 = this.updateVector2FromPoints(line.points);
                    // 计算一下速度
                    var len = 0;
                    // 前置节点
                    var prev = this._tempVec2.set(line.vec2[0]);
                    // 节点数量
                    var count = line.vec2.length;
                    for (var i = 1; i < count; i++) {
                        var cur = line.vec2[i];
                        var cur_len = prev.sub(cur).len;
                        len = len + cur_len;
                        // 设置一下前置节点
                        prev.set(cur);
                    }
                    // 所有的路程除于耗时,得到速度
                    line.speed = len / line.time;
                }
                return line;
            };
            /**
             * 获取移动路线坐标
             * @param lineID
             */
            FishGroupPathManager.getLinePointsById = function (lineID) {
                // let line:tb_fish_line = Template.getSingeTempDataById(this._data["tb_fish_line"], lineID) as tb_fish_line;
                var line = this.getFishLineTempById(lineID);
                return line.points;
            };
            /**
             * 获取路线的移动速度
             * @param lineID
             */
            FishGroupPathManager.getSpeedFromLineID = function (lineID) {
                var line = this.getFishLineTempById(lineID);
                return line && line.speed;
            };
            /**
             * 获取路线的时间
             * @param lineID
             */
            FishGroupPathManager.getTimeFromLineID = function (lineID) {
                var line = this.getFishLineTempById(lineID);
                return line.time;
            };
            /**
             * 鱼群关联路径(测试用)
             */
            FishGroupPathManager.testGroupRelateLines = function () {
                var arr = Template.data["tb_fish_group_line"];
                var len = arr.length;
                for (var i = 0; i < len; i++) {
                    var obj = arr[i];
                    if (!obj)
                        continue;
                    var group = this.getFishGroupTempById(obj.group_id);
                    if (group) {
                        group.lines = obj.lines_id;
                    }
                }
            };
            // 从节点数组组织成向量
            FishGroupPathManager.updateVector2FromPoints = function (points) {
                var vecter2Array = [];
                var plen = points.length;
                for (var i = 0; i < plen; i = i + 2) {
                    var v = new Vector2(points[i], points[i + 1]);
                    vecter2Array[vecter2Array.length] = v;
                }
                return vecter2Array;
            };
            FishGroupPathManager.buildPath = function (info, index, line, outPath) {
                outPath.length = 0;
                // 根据鱼身生成新的出生点(往右边扩展)插入路径
                var l = info.len_head;
                // 如果是沿着路线行走的,则需要补上偏移
                var offsetInGroup = this._tempVec2;
                if (info.along_line) {
                    // 沿路线走的话加上偏移
                    l += info.vec2[index].len;
                    // 如果沿路线移动不需要鱼群偏移
                    offsetInGroup.set(Vector2.zero);
                }
                else {
                    offsetInGroup.set(info.vec2[index]);
                }
                var idx = 0;
                var startPos = Vector2.right.clone().mul(l);
                startPos.add(line.vec2[0]).add(offsetInGroup);
                outPath[idx] = startPos;
                idx++;
                // 这条鱼在鱼群中的偏移位置
                line.vec2.forEach(function (v) {
                    // if(line.id == 35001){
                    // 	logd("==================vec",v.x,v.y)
                    // }
                    outPath[idx] = v.clone().add(offsetInGroup);
                    idx++;
                });
            };
            FishGroupPathManager.findPosInPath = function (path, len, outPos) {
                var total = 0;
                var plen = path.length;
                for (var i = 1; i < plen; i++) {
                    var prev = path[i - 1];
                    var cur = path[i];
                    var dist = prev.dist(cur);
                    total += dist;
                    if (len < total) {
                        var t = 1 - (total - len) / dist;
                        outPos.set(prev).lerp(cur, t);
                        return i - 1;
                    }
                }
                outPos.set(path[plen - 1]);
                return -1;
            };
            /**
             * 根据经过的时间及鱼群ID和线路ID取得坐标
             * @param groupID 鱼群模版ID
             * @param index 鱼在鱼群中的索引
             * @param lineID
             * @param moveSeconds
             * @param outPos 返回鱼的位置
             * @param outOri 返回鱼的朝向
             * @param outPath 返回接下来鱼的移动路径
             */
            FishGroupPathManager.getPostion = function (groupID, index, lineID, moveSeconds, outPos, outOri, outPath) {
                var info = this.getFishGroupTempById(groupID);
                var line = this.getFishLineTempById(lineID);
                // 生成这条的移动路线
                this.buildPath(info, index, line, outPath);
                // if(lineID == 35001){
                // 	for (let poss of outPath) {
                // 		logd("outPath:",poss.x,poss.y,info.len_head);
                // 	}
                // }
                // 取得当前鱼所有的路线节点
                var i = this.findPosInPath(outPath, moveSeconds * line.speed, outPos);
                // 根据节点所在位置剃除节点
                if (i >= 0) {
                    outPath.splice(0, i + 1);
                    outOri.set(outPath[0]).sub(outPos).normalize();
                }
                else {
                    var length_1 = outPath.length;
                    var dist = outPath[length_1 - 2].dist(outPath[length_1 - 1]);
                    outOri.set(outPath[length_1 - 1]).sub(outPath[length_1 - 2]).normalize();
                    outPath.splice(0, length_1 - 1);
                    Vector2.temp.set(outOri).len = dist;
                    outPath[0].add(Vector2.temp);
                }
            };
            FishGroupPathManager.DEBUG_LINES = [];
            return FishGroupPathManager;
        }());
        manager.FishGroupPathManager = FishGroupPathManager;
    })(manager = gamebuyu.manager || (gamebuyu.manager = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=FishGroupPathManager.js.map