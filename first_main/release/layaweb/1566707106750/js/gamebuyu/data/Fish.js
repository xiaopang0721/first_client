/**
* name
*/
var gamebuyu;
(function (gamebuyu) {
    var data;
    (function (data) {
        // 鱼的基础移动速度500/s
        var FISH_BASE_MOVE_SPEED = 50;
        // 神灯鱼的出生延迟2秒
        var GOLD_FISH_BORN_DELAY = 2;
        var Fish = /** @class */ (function () {
            function Fish(unit, v) {
                // 是否死亡
                this._isDied = false;
                this._isStandby = false;
                // 缩放
                this._scale = 1;
                this._angle = 0;
                //是否死于炸金币
                this.isBoom = false;
                // 是否于潮来袭(跑掉的)
                this._isYuchaolaixi = false;
                // 是否鱼潮来袭得鱼
                this._inYuchao = false;
                //boss鱼
                this._isBoss = false;
                // 出生时间
                this._bornTime = 0;
                this._waitBorn = false;
                this._lastBeatenTime = 0;
                this._lastSayTime = 0;
                /**
                 * 鱼群id
                 */
                this._groupId = 0;
                /**
                 * 鱼线id
                 */
                this._lineId = 0;
                /**
                 * 鱼索引
                 */
                this._position = 0;
                this._formLeft = false;
                this._isChangePos = false;
                this._sceneObjectMgr = v;
                this._buyuStory = v.story;
                this._unit = unit;
                this._actionManager = new ActionManager();
                this._pos = new Vector2();
                this._ori = new Vector2();
                this._wantToOri = new Vector2();
                this.speedScale = 1;
                unit.AddListen(UnitField.UNIT_INT_ENTRY, this, this.updateEntry);
                unit.AddListen(UnitField.UNIT_INT_BORN_TIME, this, this.updateInfo);
                unit.AddListen(UnitField.UNIT_INT_LINE_I_D, this, this.updateInfo);
                unit.AddListen(UnitField.UNIT_INT_GROUP_I_D, this, this.updateInfo);
                unit.AddListen(UnitField.UNIT_INT_U160, this, this.updateInfo);
                unit.AddListen(UnitField.UNIT_INT_LOOT_MONEY, this, this.updateLoot);
                unit.AddListen(UnitField.UNIT_INT_KILL_BY, this, this.updateKiller);
                unit.AddListen(UnitField.UNIT_INT_BYTE2, this, this.updateCheckLive);
                this.updateEntry();
                this.updateInfo();
                this.updateLoot();
                this.updateKiller();
                this.updateCheckLive();
            }
            Object.defineProperty(Fish.prototype, "unit", {
                get: function () {
                    return this._unit;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Fish.prototype, "sceneObjectMgr", {
                get: function () {
                    return this._sceneObjectMgr;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Fish.prototype, "actionManager", {
                get: function () {
                    return this._actionManager;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Fish.prototype, "isDied", {
                get: function () {
                    return this._isDied;
                },
                set: function (v) {
                    if (this._isDied == v) {
                        return;
                    }
                    this._isDied = v;
                    // logd("鱼死了",v ? true : false);
                    if (this._isDied)
                        this._actionManager.clear();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Fish.prototype, "isStandby", {
                /**
                 * 是否待机状态
                 */
                get: function () {
                    return this._isStandby;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Fish.prototype, "pos", {
                get: function () {
                    return this._pos;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Fish.prototype, "scale", {
                get: function () {
                    return this._scale;
                },
                set: function (v) {
                    this._scale = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Fish.prototype, "ori", {
                get: function () {
                    return this._ori;
                },
                set: function (v) {
                    this._ori.set(v);
                    this._angle = this._ori.angle(Vector2.right) + Math.PI / 2;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Fish.prototype, "angle", {
                get: function () {
                    return this._angle;
                },
                enumerable: true,
                configurable: true
            });
            // 转向
            Fish.prototype.turnToward = function (v) {
                this._wantToOri.set(v).normalize();
                if (this._isYuchaolaixi) {
                    this.ori = this._wantToOri;
                }
            };
            Object.defineProperty(Fish.prototype, "moveSpeed", {
                get: function () {
                    return this._moveSpeed;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Fish.prototype, "speedScale", {
                /**
                 * 速度倍率
                 */
                get: function () {
                    return this._speedScale;
                },
                set: function (v) {
                    this._speedScale = v;
                    this._moveSpeed = FISH_BASE_MOVE_SPEED * v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Fish.prototype, "killer", {
                get: function () {
                    return this._killer;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Fish.prototype, "killTimer", {
                get: function () {
                    return this._killTimer;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Fish.prototype, "lootMoney", {
                get: function () {
                    return this._lootMoney;
                },
                set: function (v) {
                    this._lootMoney = v;
                    if (v) {
                        this._killTimer = Laya.timer.currTimer;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Fish.prototype, "bornTime", {
                set: function (value) {
                    this._bornTime = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Fish.prototype, "waitBorn", {
                /**
                 * 是否出生等待
                 */
                get: function () {
                    return this._waitBorn;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Fish.prototype, "lastBeatenTime", {
                /**
                 * 最后一次被打的时间
                 */
                get: function () {
                    return this._lastBeatenTime;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Fish.prototype, "groupID", {
                get: function () {
                    return this._groupId;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Fish.prototype, "lineID", {
                get: function () {
                    return this._lineId;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Fish.prototype, "position", {
                get: function () {
                    return this._position;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Fish.prototype, "buyuStory", {
                get: function () {
                    return this._buyuStory;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Fish.prototype, "isChangePos", {
                set: function (v) {
                    this._isChangePos = v;
                },
                enumerable: true,
                configurable: true
            });
            Fish.prototype.updateEntry = function () {
                if (!this._unit)
                    return;
                // 校验模板
                this.entryid = this._unit.GetEntry();
                if (Template.data)
                    this.fishTemp = Template.getFishTempById(this.entryid);
            };
            Fish.prototype.updateInfo = function () {
                if (!this._unit)
                    return;
                // 初始坐标需要重算
                this._isChangePos = true;
                this._isBoss = false;
                this._lineId = this._unit.GetLineID();
                this._position = this._unit.GetFishPosition();
                this._bornTime = this._unit.GetBornTime();
                var groupId = this._unit.GetGroupID();
                if (this._groupId != groupId) {
                    this._groupId = groupId;
                    //判断BOSS来袭事件
                    this._groupTemp = this._groupId ? FishGroupPathManager.getFishGroupTempById(this._groupId) : null;
                    if (this._groupTemp && this._groupTemp.group_typ == 8) {
                        this._isBoss = true;
                        this.updateEntry();
                        this._sceneObjectMgr.event(data.BuyuMapInfo.EVENT_BOSS_EVENT, this.entryid);
                    }
                }
            };
            Fish.prototype.updateLoot = function () {
                // 校验战利品
                this.lootMoney = this._unit.GetLootMoney();
                this.checkFishDie();
            };
            Fish.prototype.updateKiller = function () {
                // 击杀者
                this._killer = this._unit.GetKillBy();
                this.checkFishDie();
            };
            Fish.prototype.updateCheckLive = function () {
                this.checkLiveStatus();
                this.checkFishDie();
            };
            Fish.prototype.checkFishDie = function () {
                if (this.isDied && this._killer && this.lootMoney) {
                    // 鱼死了
                    this._sceneObjectMgr.event(BuyuMgr.EVENT_KILL_FISH, this);
                }
            };
            // 更新行为
            Fish.prototype.updateAction = function (deltaTime) {
                this._actionManager.updateActions(deltaTime);
            };
            // 校验生存状态
            Fish.prototype.checkLiveStatus = function () {
                var status = this._unit.GetLiveStatus();
                this.isDied = status == GlobalDef.kLiveStatusDie;
                this._isStandby = status == GlobalDef.kLiveStandby;
            };
            // 校验坐标
            Fish.prototype.checkPosition = function () {
                var groupID = this.groupID;
                var lineID = this.lineID;
                var index = this.position;
                if (this._isDied) {
                    // 死鱼一条
                    this.dieEnd();
                    return;
                }
                // 是否鱼潮的鱼
                this._inYuchao = this._groupTemp ? this._groupTemp.group_typ == GlobalDef.kGroupTypYuChao : false;
                // 是否鱼潮来袭跑掉的鱼
                this._isYuchaolaixi = false;
                // 重算坐标前,先重置一下移动速度
                this._moveSpeed = FishGroupPathManager.getSpeedFromLineID(lineID);
                this._oldMoveSpeed = this._moveSpeed;
                // 移动的路径
                var path = [];
                // 服务器的秒数 单位用秒
                var game = this._sceneObjectMgr.game;
                var now = Math.ceil(game.sync.serverTimeBys);
                var moveTime = now - this._bornTime;
                if (moveTime < 0) {
                    moveTime = 0;
                }
                // if (this._inYuchao) {
                //     logd("this._bornTime", this._bornTime)
                // }
                // 获取移动路径
                FishGroupPathManager.getPostion(groupID, index, lineID, moveTime, this.pos, this._wantToOri, path);
                // 是否翻转路径
                this._formLeft = this._unit.GetFromLeft() != 0;
                // this._formLeft = true;
                if (this._formLeft) {
                    // path = [new Vector2(300,500),new Vector2(1000,500),new Vector2(300,500)];
                    var centerX = this._sceneObjectMgr.mapAssetInfo.logicWidth / 2;
                    // 坐标
                    this._pos.x -= (this._pos.x - centerX) * 2;
                    // 方向
                    this._wantToOri.x *= -1;
                    // 路径
                    for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
                        var poss = path_1[_i];
                        poss.x -= (poss.x - centerX) * 2;
                    }
                }
                // logd("=============fish move",this._bornTime,now,moveTime,this._moveSpeed,path,lineID,groupID,this._pos);
                // 直接同步方向,不需要做缓动
                this.ori = this._wantToOri;
                // 将坐标同步到ai那边去
                var action = new ActionMovePath(this, path);
                this._actionManager.exec(action);
                this.LinePosList = [this._pos.clone()];
                this.LinePosList = this.LinePosList.concat(path);
            };
            Fish.prototype.update = function (diff) {
                // 如果服务端坐标有发生变化
                if (this._isChangePos) {
                    this.checkPosition();
                    this._isChangePos = false;
                }
                var isRealDied = this._isDied /*&& (this._killer > 0 || !this.lookInCamera)*/;
                if (!isRealDied) {
                    //不是被人打死的 速度加快 游出视线吧
                    // if(this._isDied && this._oldMoveSpeed) this._moveSpeed = this._oldMoveSpeed * 8;
                    var nowTime = this._sceneObjectMgr.game.sync.serverTimeBys;
                    this._waitBorn = nowTime < this._bornTime;
                    var mapInfo = this._sceneObjectMgr.mapInfo;
                    if (!this._waitBorn && mapInfo) {
                        if (!this._inYuchao) {
                            if (!this._isYuchaolaixi) {
                                // 校验一下是否需要触发鱼潮来袭
                                if (this._bornTime < mapInfo.yclxTime) {
                                    this.yuchaolaixi();
                                }
                                else if (this._bornTime == mapInfo.yclxTime) {
                                    this.isDied = true;
                                    this.dieEnd();
                                }
                            }
                        }
                        // 更新节点位置
                        var deltaTime = diff / 1000;
                        this.updateLocal(deltaTime);
                        this.updateAction(deltaTime);
                    }
                }
                // else {
                // 	this._actionManager.clear();
                // }
            };
            Fish.prototype.yuchaolaixi = function () {
                this._isYuchaolaixi = true;
                // 速度提高x倍 这里看下是否需要缓动
                this._moveSpeed *= 8;
            };
            // 更新每帧的位置
            Fish.prototype.updateLocal = function (delateTime) {
                if (!this.ori.equal(this._wantToOri)) {
                    // let wantAngle:number = this._wantToOri.angle(Vector2.right) + Math.PI / 2;
                    // let diffAngle:number =  Math.abs(wantAngle - this._angle);
                    //如果角度大于
                    if (this._isBoss && (this.pos.x < 0 || this.pos.x > main.widthDesginPixelw)) {
                        this.ori = this._wantToOri;
                    }
                    else {
                        this.ori.lerp(this._wantToOri, delateTime).normalize();
                        this.ori = this._ori;
                    }
                }
                var offset = this._moveSpeed * delateTime;
                Vector2.temp.set(this._ori).len = offset;
                this._pos.add(Vector2.temp);
            };
            // 被打
            Fish.prototype.onBeaten = function () {
                var nowTiime = Laya.timer.currTimer;
                this._lastBeatenTime = nowTiime;
                //被打的时候叫一下,3秒内，只会叫一次
                if (this._lastSayTime < nowTiime && this.entryid && this.fishTemp && this.fishTemp.show_dead == 1 && MathU.randomRange(1, 100) <= 5) {
                    this._sceneObjectMgr.game.playSound(Path_game_buyu.music_buyu + "say" + MathU.randomRange(1, 14) + ".mp3");
                    this._lastSayTime = nowTiime + 5000;
                }
            };
            // 死亡结束后
            Fish.prototype.dieEnd = function () {
                this._pos.x = -3000;
                this.isBoom = false;
            };
            Fish.prototype.clear = function () {
                if (this._unit) {
                    this._unit.removeListene(UnitField.UNIT_INT_ENTRY, this, this.updateEntry);
                    this._unit.removeListene(UnitField.UNIT_INT_BORN_TIME, this, this.updateInfo);
                    this._unit.removeListene(UnitField.UNIT_INT_LINE_I_D, this, this.updateInfo);
                    this._unit.removeListene(UnitField.UNIT_INT_GROUP_I_D, this, this.updateInfo);
                    this._unit.removeListene(UnitField.UNIT_INT_U160, this, this.updateInfo);
                    this._unit.removeListene(UnitField.UNIT_INT_LOOT_MONEY, this, this.updateLoot);
                    this._unit.removeListene(UnitField.UNIT_INT_KILL_BY, this, this.updateKiller);
                    this._unit.removeListene(UnitField.UNIT_INT_BYTE2, this, this.updateCheckLive);
                }
                this._isDied = false;
                // this.hasBeaten = false;
                this._isChangePos = false;
                // this._unit = null;
            };
            return Fish;
        }());
        data.Fish = Fish;
    })(data = gamebuyu.data || (gamebuyu.data = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=Fish.js.map