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
* 捕鱼玩家对象
*/
var gamebuyu;
(function (gamebuyu) {
    var data;
    (function (data) {
        var BuyuPlayer = /** @class */ (function (_super) {
            __extends(BuyuPlayer, _super);
            function BuyuPlayer(unit, v) {
                var _this = _super.call(this) || this;
                _this.isShowBulletTip = false;
                _this._lastFireTime = 0;
                /**
                 * 是否是主玩家
                 */
                _this._isMainPlayer = false;
                //子弹计数
                _this._bulletCount = 0;
                /**
                 * 获取炮台编号
                 */
                _this._position = 0;
                /**
                 * 是否机器人
                 */
                _this._isRobot = false;
                /**
                 * 当前炮倍数
                 */
                _this._fireLevel = 0;
                /**
                 * 金币
                 */
                _this._gold = 0;
                /**
                 * 祈福结束时间
                 */
                _this._qifu_endTime = 0;
                //炮射速间隔
                _this._fireSpeed = 1000 / 5;
                //开火状态
                _this._fireState = 0;
                //开火方式
                _this._fireType = 0;
                _this._isStartHua = false;
                /**
                 * 是否破产
                 */
                _this._isBroke = false;
                _this._isDoFireing = false;
                _this._unit = unit;
                _this._sceneObjectMgr = v;
                _this._game = _this._sceneObjectMgr.game;
                _this._story = v.story;
                _this._ori = new Vector2(0, -1);
                _this._curOri = new Vector2(0, -1);
                _this._targetV = new Vector2();
                _this.curToward = -1;
                _this._isRobot = unit.type == Unit.TYPE_ID_ROBOT;
                unit.on(Unit.EVENT_TYPE_CHANGED, _this, _this.updateType);
                unit.AddListen(Unit.UNIT_INT_MONEY, _this, _this.updateGold);
                unit.AddListen(Unit.UNIT_INT_BYTE3, _this, _this.checkUpdate);
                unit.AddListen(Unit.UNIT_INT_BYTE2, _this, _this.checkUpdate2);
                unit.AddListen(Unit.UNIT_INT_BYTE1, _this, _this.updatePosition);
                unit.AddListen(Unit.UNIT_INT_QI_FU_END_TIME, _this, _this.updateQiFu);
                _this.updateType();
                _this.updatePosition();
                _this.updateGold();
                _this.updateQiFu();
                _this.checkUpdate();
                _this.checkUpdate2();
                _this._buyuMgr = _this._story.buyuMgr;
                if (_this._buyuMgr) {
                    _this._buyuMgr.on(BuyuMgr.EVENT_UPDATE_MAIN_PLAYER, _this, _this.updateMainPlayer);
                }
                _this.updateMainPlayer();
                return _this;
            }
            Object.defineProperty(BuyuPlayer.prototype, "unit", {
                get: function () {
                    return this._unit;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BuyuPlayer.prototype, "sceneObjectMgr", {
                get: function () {
                    return this._sceneObjectMgr;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BuyuPlayer.prototype, "isMainPlayer", {
                get: function () {
                    return this._isMainPlayer;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BuyuPlayer.prototype, "bulletCount", {
                get: function () {
                    return this._bulletCount;
                },
                set: function (value) {
                    this._bulletCount = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BuyuPlayer.prototype, "position", {
                get: function () {
                    return this._position;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BuyuPlayer.prototype, "isRobot", {
                get: function () {
                    return this._isRobot;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BuyuPlayer.prototype, "isRoomMaster", {
                get: function () {
                    return this._isRoomMaster;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BuyuPlayer.prototype, "fireLevel", {
                get: function () {
                    return this._fireLevel;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BuyuPlayer.prototype, "gold", {
                get: function () {
                    return this._gold;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BuyuPlayer.prototype, "qifu_endTime", {
                get: function () {
                    return this._qifu_endTime;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BuyuPlayer.prototype, "fireState", {
                get: function () {
                    return this._fireState;
                },
                set: function (value) {
                    if (this._fireState != value) {
                        this._fireState = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BuyuPlayer.prototype, "fireType", {
                get: function () {
                    return this._fireType;
                },
                set: function (value) {
                    if (this._fireType != value) {
                        if (this._fireType == BuyuPlayer.FIRE_TYPE_AIM) {
                            this.selectFish = null;
                        }
                        this._fireType = value;
                        this.event(BuyuPlayer.FIRE_TYPE_CHANGED);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BuyuPlayer.prototype, "ori", {
                get: function () {
                    return this._ori;
                },
                set: function (v) {
                    this._ori.set(v);
                    this._ori.normalize();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BuyuPlayer.prototype, "curOri", {
                get: function () {
                    return this._curOri;
                },
                enumerable: true,
                configurable: true
            });
            BuyuPlayer.prototype.resetOri = function () {
                this._curOri.x = 0;
                this._curOri.y = -1;
                this._ori.x = 0;
                this._ori.y = -1;
            };
            Object.defineProperty(BuyuPlayer.prototype, "isStartHua", {
                get: function () {
                    return this._isStartHua;
                },
                set: function (value) {
                    this._isStartHua = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BuyuPlayer.prototype, "isBroke", {
                get: function () {
                    return this._isBroke;
                },
                set: function (value) {
                    if (this._isBroke != value) {
                        this._isBroke = value;
                        this.event(BuyuPlayer.BROKE_STATE_CHANGED);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BuyuPlayer.prototype, "isDoFireing", {
                get: function () {
                    return this._isDoFireing;
                },
                // 是否主动开火
                set: function (v) {
                    this._isDoFireing = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BuyuPlayer.prototype, "buyuMgr", {
                get: function () {
                    return this._buyuMgr;
                },
                enumerable: true,
                configurable: true
            });
            BuyuPlayer.prototype.updateType = function () {
                if (!this._unit)
                    return;
                this._isRobot = this._unit.type == Unit.TYPE_ID_ROBOT;
            };
            /**
             * 更新位置
             */
            BuyuPlayer.prototype.updatePosition = function () {
                if (!this._unit)
                    return;
                //炮台位置
                var pos = this._unit.GetIndex();
                this._position = pos;
                this._sceneObjectMgr.event(BuyuPlayer.POSITION_CHANGED);
            };
            /**
             * 更新祈福时间
             */
            BuyuPlayer.prototype.updateQiFu = function () {
                if (!this._unit)
                    return;
                var curEndTime = this._unit.GetQFEndTime(this._unit.GetQiFuType() - 1);
                if (this._qifu_endTime != curEndTime) {
                    this._qifu_endTime = curEndTime;
                    this.event(BuyuPlayer.QIFU_ENDTIME_CHANGED);
                }
            };
            /**
             * 检查下标变化
             */
            BuyuPlayer.prototype.checkUpdate = function () {
                if (!this._unit)
                    return;
                //炮台倍数
                var curLv = this._unit.GetFireLevel();
                if (this._fireLevel != curLv) {
                    this._fireLevel = curLv;
                    this.event(BuyuPlayer.FIRE_LEVEL_CHANGED);
                }
            };
            /**
             * 检查下标变化
             */
            BuyuPlayer.prototype.checkUpdate2 = function () {
                if (!this._unit)
                    return;
                //是否房主
                var flag = this._unit.GetRoomMaster();
                // logd("房主",flag)
                this._isRoomMaster = flag > 0;
            };
            BuyuPlayer.prototype.updateMainPlayer = function () {
                if (!this._buyuMgr || !this._buyuMgr.mainPlayer)
                    return;
                this._isMainPlayer = this == this._buyuMgr.mainPlayer;
            };
            BuyuPlayer.prototype.updateGold = function () {
                if (!this._unit)
                    return;
                this._gold = this._unit.GetMoney();
                this.checkBroke();
                this.event(BuyuPlayer.GOLD_CHANGED);
            };
            /**
             * 检查破产
             */
            BuyuPlayer.prototype.checkBroke = function () {
                if (!this._story)
                    return;
                var maplv = this._story.maplv;
                var info = BuyuPageDef.getRoomInfoByMode(maplv);
                if (info)
                    this.isBroke = this._gold < info.rateGold;
            };
            // 更新蛇的朝向,用于补间
            BuyuPlayer.prototype.updateOrientation = function (delateTime, isImmediately) {
                if (isImmediately === void 0) { isImmediately = false; }
                if (isImmediately) {
                    var isEual = this._curOri.equal(this._ori);
                    this._curOri.x = this._ori.x;
                    this._curOri.y = this._ori.y;
                    return isEual;
                }
                else {
                    //转成秒
                    delateTime = delateTime / 1000;
                    if (!this._curOri.equal(this._ori)) {
                        this._curOri.lerp(this._ori, 8 * delateTime).normalize();
                    }
                }
                // --该返回值只对客户端有效
                return this._curOri.equal(this._ori);
            };
            BuyuPlayer.prototype.update = function (diff) {
                //检查是否需要托管 机器人由房主驱动
                var haveAction = this._isRobot && this._buyuMgr.mainPlayer && this._buyuMgr.mainPlayer.isRoomMaster;
                if (haveAction) {
                    if (!this._actionManager) {
                        this._actionManager = new ActionManager();
                        var action = new gamebuyu.manager.ActionRobot(this);
                        this._actionManager.exec(action);
                    }
                    this._actionManager.updateActions(diff * 0.001);
                }
                else {
                    if (this._actionManager) {
                        this._actionManager.clear();
                        this._actionManager = null;
                    }
                }
                //如果是机器人 或 主玩家 才需要选择目标和开火
                if (this._isRobot || this._isMainPlayer) {
                    //瞄准
                    if (this._fireType == BuyuPlayer.FIRE_TYPE_AIM) {
                        //如果是瞄准 要拿到瞄准的ID
                        this.checkTarget();
                    }
                    this.checkFire();
                }
            };
            BuyuPlayer.prototype.checkTarget = function () {
                if (!this.selectFish
                    || this.selectFish.isDied
                    || (this._game.mainScene && !this._game.mainScene.camera.lookIn2(this.selectFish.pos))) {
                    this.findTarget();
                }
            };
            //自动寻找目标
            BuyuPlayer.prototype.findTarget = function () {
                var oid = this._buyuMgr.getMaxOrderFishOid();
                this.selectFish = this._buyuMgr.getFishByOid(oid);
            };
            BuyuPlayer.prototype.checkFire = function () {
                //是否停止开火
                var isStop = this._fireState == BuyuPlayer.FIRE_STATE_STOP;
                //手动开火
                var isCanHand = this._fireType == BuyuPlayer.FIRE_STATE_HAND && this._isDoFireing;
                //自动开火
                var isCanAuto = this._fireType == BuyuPlayer.FIRE_TYPE_AUTO;
                //瞄准
                var isCanAim = this._fireType == BuyuPlayer.FIRE_TYPE_AIM && this.selectFish != null;
                //是否能开火
                var isCanFire = !isStop && !this._isBroke && (isCanHand || isCanAim || isCanAuto);
                if (isCanFire) {
                    //--------------检查条件--------------
                    //判断最大子弹
                    var maxCount = BuyuPlayer.MAX_BULLET;
                    var isMaxCount = this.bulletCount >= maxCount;
                    if (isMaxCount && this._isDoFireing) {
                        if (!this.isShowBulletTip) {
                            this._isMainPlayer && this.event(BuyuPlayer.PLAYER_TIPS, ["您已经发射太多子弹了,休息一下吧"]);
                            this.isShowBulletTip = true;
                        }
                        return;
                    }
                    //金钱是否足够发射这个炮倍的子弹
                    var isRate = this.checkCurFireRateMoney();
                    if (!isRate) {
                        if (!this.isShowBulletTip) {
                            this._isMainPlayer && this.event(BuyuPlayer.PLAYER_TIPS, ["您的捕鱼币不足以使用该倍率的炮台，请切换低倍率炮台"]);
                            this.isShowBulletTip = true;
                        }
                        return;
                    }
                    var nowTime = this._buyuMgr.nowServerTime;
                    //发射炮
                    var diff = (nowTime - this._lastFireTime) * 1000;
                    if (diff >= this._fireSpeed) {
                        //开火吧少年！
                        this.fire();
                        this._game.playSound(Path_game_buyu.music_buyu + "fire.mp3");
                        this._lastFireTime = nowTime;
                    }
                }
            };
            /**
             * 判断金钱是否足够发射当前倍数的子弹
             */
            BuyuPlayer.prototype.checkCurFireRateMoney = function () {
                //TODO断线重连没有mapLv
                var maplv = this._story.maplv || 51;
                var info = BuyuPageDef.getRoomInfoByMode(maplv);
                return this._gold >= this._fireLevel * info.rateGold;
            };
            //开火
            BuyuPlayer.prototype.fire = function () {
                var buyuStory = this._sceneObjectMgr.story;
                if (buyuStory && buyuStory.startFire) {
                    //先计算下朝向
                    this.updateFireToward();
                    //射击或者瞄准
                    var oid = this._fireType == BuyuPlayer.FIRE_TYPE_AIM && this.selectFish ? this.selectFish.unit.oid : 0;
                    buyuStory.startFire(this, this._curToward, oid, true, 0);
                }
            };
            /**
             * 开火方向
             */
            BuyuPlayer.prototype.updateFireToward = function () {
                if (this.selectFish) {
                    this._targetV.set(this.selectFish.pos);
                }
                else if (this.isDoFireing) {
                    var camera = this._game.mainScene.camera;
                    if (!camera)
                        return;
                    var x = camera.getCellXByScene(Laya.stage.mouseX / this._game.mainScene.scaleX);
                    var y = camera.getCellYByScene(Laya.stage.mouseY / this._game.mainScene.scaleY);
                    //点到屏幕外不管
                    if (!this._game.mainScene.checkInScene(x, y)) {
                        return;
                    }
                    this._targetV.x = x;
                    this._targetV.y = y;
                }
                if (this._targetV) {
                    this.towardTarget(this._targetV);
                }
            };
            BuyuPlayer.prototype.towardTarget = function (targetPos) {
                var pos = this._position;
                var paoV = SceneFishRes.PAO_POSDATA[pos];
                Vector2.temp.set(targetPos);
                var toward = Vector2.temp.sub(paoV).getToward();
                var min = pos <= 2 ? SceneFishRes.MIN_TOWARD : Vector2.TowardCount - SceneFishRes.MAX_TOWARD;
                var max = pos <= 2 ? SceneFishRes.MAX_TOWARD : Vector2.TowardCount - SceneFishRes.MIN_TOWARD;
                if (pos <= 2) {
                    if (toward < 32)
                        toward = 128;
                }
                else {
                    if (toward > 96)
                        toward = 0;
                }
                toward = toward < min ? min : toward;
                toward = toward > max ? max : toward;
                this.curToward = toward;
            };
            Object.defineProperty(BuyuPlayer.prototype, "curToward", {
                get: function () {
                    return this._curToward;
                },
                // 朝向 -1用下标朝向
                set: function (v) {
                    if (v == -1) {
                        var initOri = void 0;
                        if (this._position > 2)
                            initOri = Vector2.up;
                        else
                            initOri = Vector2.down;
                        v = initOri.getToward();
                    }
                    this._curToward = v;
                    // this._curOri.fromToward(this._curToward);
                },
                enumerable: true,
                configurable: true
            });
            BuyuPlayer.prototype.clear = function () {
                if (this._unit) {
                    this._unit.off(Unit.EVENT_TYPE_CHANGED, this, this.updateType);
                    this._unit.removeListene(Unit.UNIT_INT_MONEY, this, this.updateGold);
                    this._unit.removeListene(Unit.UNIT_INT_BYTE3, this, this.checkUpdate);
                    this._unit.removeListene(Unit.UNIT_INT_BYTE2, this, this.checkUpdate2);
                    this._unit.removeListene(Unit.UNIT_INT_BYTE1, this, this.updatePosition);
                    this._unit.removeListene(Unit.UNIT_INT_QI_FU_END_TIME, this, this.updateQiFu);
                }
                if (this._buyuMgr) {
                    this._buyuMgr.off(BuyuMgr.EVENT_UPDATE_MAIN_PLAYER, this, this.updateMainPlayer);
                }
                this._unit = null;
            };
            //------------ 事件 ---------------
            BuyuPlayer.POSITION_CHANGED = "position_changed";
            BuyuPlayer.FIRE_TYPE_CHANGED = "fire_type_changed";
            BuyuPlayer.FIRE_STATE_CHANGED = "fire_state_changed";
            BuyuPlayer.FIRE_LEVEL_CHANGED = "fire_level_changed";
            BuyuPlayer.QIFU_ENDTIME_CHANGED = "qifu_endtime_changed";
            BuyuPlayer.GOLD_CHANGED = "gold_changed";
            BuyuPlayer.BROKE_STATE_CHANGED = "broke_state_changed";
            BuyuPlayer.FIRE_IT = "fire_it";
            BuyuPlayer.PLAYER_TIPS = "player_tips";
            //------------ 开火状态 ---------------
            BuyuPlayer.FIRE_STATE_HAND = 0; //手动开火
            BuyuPlayer.FIRE_STATE_STOP = 1; //停止开火
            //------------ 开火类型 ---------------
            BuyuPlayer.FIRE_TYPE_HAND = 0; //手动射击
            BuyuPlayer.FIRE_TYPE_AUTO = 1; //自动开火
            BuyuPlayer.FIRE_TYPE_AIM = 3; //瞄准
            /**
             * 允许存在场景的属于主玩家的最大子弹数
             */
            BuyuPlayer.MAX_BULLET = 30;
            return BuyuPlayer;
        }(Laya.EventDispatcher));
        data.BuyuPlayer = BuyuPlayer;
    })(data = gamebuyu.data || (gamebuyu.data = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=BuyuPlayer.js.map