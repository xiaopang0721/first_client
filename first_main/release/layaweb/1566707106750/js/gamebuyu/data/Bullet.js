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
* 子弹
*/
var gamebuyu;
(function (gamebuyu) {
    var data;
    (function (data) {
        // 子弹状态
        data.BULLET_STATE_FLY = 1; // 飞行中
        data.BULLET_STATE_BOMB = 2; // 爆炸
        data.BULLET_STATE_OUT = 3; // 消失
        data.BULLET_TYPE_NORMAL = 0; //普通子弹
        data.BULLET_TYPE_BOOM = 1; //特殊子弹 炸金币
        data.BULLET_TYPE_DANTOU = 3; //弹头子弹
        // 子弹飞行速度 逻辑格
        var BULLET_FLY_SPEED = 1000;
        // 张网时间
        var BULLET_ZW_TIME = 150;
        // 消失时间
        var BULLET_OUT_TIME = 500;
        // 子弹超时时间
        var BULLET_TIME_OUT = 8000;
        var Bullet = /** @class */ (function (_super) {
            __extends(Bullet, _super);
            function Bullet(v) {
                var _this = _super.call(this) || this;
                _this._canColloder = false;
                // 倍率
                _this.valueRate = 1;
                //是否是特殊炸金币
                _this.isSpecial = false;
                // 缩放
                _this._scale = 1;
                // 是否启用碰撞
                _this._colliderEnabled = false;
                _this._updateGridTime = 0;
                _this._sceneObjectMgr = v;
                _this._pos = new Vector2GridObject();
                _this._pos.owner = _this;
                _this._pos.radius = 2; // 子弹碰撞半径2像素
                _this._ori = new Vector2();
                _this.valueRate = 1;
                _this._flySpeed = BULLET_FLY_SPEED;
                _this._scale = 1;
                var story = _this._sceneObjectMgr.story;
                _this._buyuMgr = story.buyuMgr;
                _this._gridMgr = story.gridMgr;
                return _this;
            }
            Object.defineProperty(Bullet.prototype, "colloderOnce", {
                // 碰撞是否单次
                get: function () {
                    return true;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Bullet.prototype, "canColloder", {
                /**
                 * 是否可参与碰撞
                 */
                set: function (v) {
                    this._canColloder = v;
                    if (!v) {
                        this._timeout = Laya.timer.currTimer + BULLET_TIME_OUT;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Bullet.prototype, "pos", {
                get: function () {
                    return this._pos;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Bullet.prototype, "ori", {
                get: function () {
                    return this._ori;
                },
                set: function (v) {
                    this._ori.set(v);
                    this._angle = this._ori.angle(Vector2.right) + Math.PI;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Bullet.prototype, "angle", {
                get: function () {
                    return this._angle;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Bullet.prototype, "scale", {
                get: function () {
                    return this._scale;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Bullet.prototype, "state", {
                get: function () {
                    return this._state;
                },
                set: function (v) {
                    var _this = this;
                    if (!this._ownerPlayer)
                        return;
                    if (this._state == v)
                        return;
                    switch (v) {
                        case data.BULLET_STATE_FLY:
                            // 飞行状态
                            this._scale = 1;
                            this.colliderEnabled = true;
                            break;
                        case data.BULLET_STATE_BOMB:
                            this.colliderEnabled = false;
                            // 爆炸状态
                            this._scale = .1;
                            Laya.Tween.to(this, { '_scale': 1 }, BULLET_ZW_TIME, Laya.Ease.backInOut);
                            Laya.timer.once(BULLET_OUT_TIME, this, function () {
                                _this.state = data.BULLET_STATE_OUT;
                            });
                            break;
                        case data.BULLET_STATE_OUT:
                            if (this._state != v)
                                this.delSlef();
                            break;
                    }
                    this._state = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Bullet.prototype, "colliderEnabled", {
                set: function (v) {
                    if (!this._canColloder || this._colliderEnabled == v) {
                        return;
                    }
                    this._colliderEnabled = v;
                    if (v) {
                        this._gridMgr.addObject(this._pos);
                        this._gridMgr.addCollider(this);
                    }
                    else {
                        this._gridMgr.delObject(this._pos);
                        this._gridMgr.delCollider(this);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Bullet.prototype, "owner", {
                get: function () {
                    return this._owner;
                },
                enumerable: true,
                configurable: true
            });
            Bullet.prototype.init = function (owner, x, y, ori, target, isTouch) {
                this._owner = owner;
                this._pos.x = x;
                this._pos.y = y;
                this.ori = ori;
                this._target = target;
                var mainPlayer = this._buyuMgr.mainPlayer;
                if (mainPlayer && this._owner == mainPlayer.unit.oid) {
                    this._ownerPlayer = mainPlayer;
                }
                else {
                    var player = this._buyuMgr.getPlayeryOid(this._owner);
                    if (player instanceof data.BuyuPlayer)
                        this._ownerPlayer = player;
                }
                this.updateBulletCount(true);
                if (isTouch) {
                    this.state = 0;
                    var touchTarget = this._buyuMgr.getFishByOid(this._target);
                    if (touchTarget) {
                        this._pos.x = touchTarget.pos.x;
                        this._pos.y = touchTarget.pos.y;
                        this.onBomb(touchTarget);
                        this.state = data.BULLET_STATE_OUT;
                    }
                }
                else {
                    this.state = data.BULLET_STATE_FLY;
                }
            };
            Bullet.prototype.update = function (diff) {
                switch (this._state) {
                    case data.BULLET_STATE_FLY:
                        if (this._timeout && this._timeout < Laya.timer.currTimer) {
                            this.state = data.BULLET_STATE_OUT;
                            return;
                        }
                        // 飞行状态向前推进
                        var distance = diff / 1000 * this._flySpeed;
                        this.advance(distance);
                        // 更新网格位置
                        this.updateGrid(diff);
                        break;
                    case data.BULLET_STATE_BOMB:
                        // 爆炸状态
                        break;
                }
            };
            // 更新网格位置
            Bullet.prototype.updateGrid = function (diff) {
                this._updateGridTime -= diff;
                if (this._updateGridTime > 0) {
                    return;
                }
                // 500毫秒更新一次
                this._updateGridTime += 500;
                this._colliderEnabled && this._gridMgr.updateObject(this._pos);
            };
            Bullet.prototype.advance = function (distance) {
                var vec = this._pos;
                if (this._target && !this._targetFish)
                    this._targetFish = this._buyuMgr.getFishByOid(this._target);
                if (this._targetFish) {
                    if (this._targetFish.isDied) {
                        // 如果追踪目标死了
                        this._targetFish = null;
                        this._target = null;
                        // 转为普通子弹
                        this.canColloder = true;
                        this.colliderEnabled = true;
                    }
                    else {
                        if (vec.dist(this._targetFish.pos) < distance) {
                            vec.set(this._targetFish.pos);
                            // 炸
                            this.onBomb(this._targetFish);
                            return;
                        }
                        else {
                            // 朝向追踪目标
                            Vector2.temp.set(this._targetFish.pos).sub(vec).normalize();
                            this._ori.set(Vector2.temp);
                        }
                    }
                }
                vec.add(Vector2.temp.set(this._ori).mul(distance));
                if (!this._targetFish) {
                    // 计算反弹
                    var map = this._sceneObjectMgr.mapAssetInfo;
                    var lw = this._sceneObjectMgr.game.clientWidth > map.logicWidth ? this._sceneObjectMgr.game.clientWidth : map.logicWidth;
                    var lh = this._sceneObjectMgr.game.clientHeight > map.logicHeight ? this._sceneObjectMgr.game.clientHeight : map.logicHeight;
                    var diffw = (lw - map.logicWidth) * 0.5;
                    var diffh = (lh - map.logicHeight) * 0.5;
                    // 计算反弹
                    if (vec.x < (0 - diffw)) {
                        vec.x = (0 - 2 * diffw) - vec.x;
                        this._ori.x = -this._ori.x;
                    }
                    if (vec.y < (0 - diffh)) {
                        vec.y = (0 - 2 * diffh) - vec.y;
                        this._ori.y = -this._ori.y;
                    }
                    var mw = map.logicWidth + diffw;
                    if (vec.x > mw) {
                        vec.x = mw * 2 - vec.x;
                        this._ori.x = -this._ori.x;
                    }
                    var mh = map.logicHeight + diffh;
                    if (vec.y > mh) {
                        vec.y = mh * 2 - vec.y;
                        this._ori.y = -this._ori.y;
                    }
                }
                this.ori = this._ori;
            };
            // 触发碰撞
            Bullet.prototype.OnTriggerEnter2D = function (go) {
                // console.log("OnTriggerEnter2D", go.owner);
                var owner = go.owner;
                if (owner instanceof data.Fish) {
                    this.onBomb(owner);
                    return true;
                }
                return false;
            };
            // 炸鱼
            Bullet.prototype.onBomb = function (target) {
                if (!target && !this._sceneObjectMgr.mapInfo)
                    return;
                this.state = data.BULLET_STATE_BOMB;
                var mainPlayer = this._buyuMgr.mainPlayer;
                //特殊处理下弹头
                if (mainPlayer && mainPlayer.unit && this._owner == mainPlayer.unit.oid) {
                    !this._sceneObjectMgr.game.isLockGame && this._sceneObjectMgr.game.network.call_fire_at(target.unit.oid);
                }
                else if (this._ownerPlayer && this._ownerPlayer.isRobot && target.unit) {
                    !this._sceneObjectMgr.game.isLockGame && this._sceneObjectMgr.game.network.call_robot_fire_at(this._owner, target.unit.oid);
                }
                target.onBeaten();
            };
            Bullet.prototype.delSlef = function () {
                Laya.timer.clear(this, this.delSlef);
                this.colliderEnabled = false;
                this._target = null;
                this.isSpecial = false;
                this.updateBulletCount(false);
                this._sceneObjectMgr.clearOfflineObject(this);
            };
            Bullet.prototype.updateBulletCount = function (isAdd) {
                if (!this._ownerPlayer)
                    return;
                isAdd ? this._ownerPlayer.bulletCount++ : this._ownerPlayer.bulletCount--;
            };
            Bullet.prototype.dispose = function () {
                this.colliderEnabled = false;
                this._target = null;
                this._targetFish = null;
                this._ownerPlayer = null;
                Laya.Tween.clearAll(this);
                Laya.timer.clear(this, this.delSlef);
                this._buyuMgr = null;
                _super.prototype.dispose.call(this);
            };
            Bullet.prototype.clear = function () {
                this.dispose();
            };
            Bullet.TYPE = 'Bullet';
            return Bullet;
        }(core.obj.GuidObject));
        data.Bullet = Bullet;
    })(data = gamebuyu.data || (gamebuyu.data = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=Bullet.js.map