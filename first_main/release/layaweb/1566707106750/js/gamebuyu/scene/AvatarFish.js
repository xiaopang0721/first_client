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
var gamebuyu;
(function (gamebuyu) {
    var scene;
    (function (scene_1) {
        // 动作
        var FISH_ACTION_MOVE = 1;
        var FISH_ACTION_LEISURE = 2;
        var FISH_ACTION_BEATEN = 3;
        var FISH_ACTION_DIE = 4;
        var FISH_ACTION_BOTTOM = 5;
        var FISH_ACTION_TOP = 6;
        var FISH_ACTION_TOPADD = 7;
        var FISH_ACTION = {
            1: 'move',
            2: 'leisure',
            3: 'beaten',
            4: 'die',
            5: 'bottom',
            6: 'top',
            7: 'topAdd'
        };
        // 死亡时长
        var FADE_DURATION = 1500;
        // 受击时长
        var BEATEN_DURATION = 500;
        // 帧率
        var AVATAR_FRAMERATE = 12;
        // 死亡帧率
        var AVATAR_FRAMERATE_DIE = 30;
        var AvatarFish = /** @class */ (function (_super) {
            __extends(AvatarFish, _super);
            function AvatarFish(g, v) {
                var _this = _super.call(this, g) || this;
                //是否BOSS鱼
                _this._isBoss = false;
                //鱼的缩放比例
                _this._fish_scale = 0;
                _this._entry = 0;
                //是否死亡展示爆金币
                _this._isPlayGold = false;
                // 显示排序
                _this._showOrder = 0;
                // 死亡效果
                _this._showDead = false;
                // 是否被打
                _this._hasBeaten = false;
                // 视图旋转角度
                _this._angle = 0;
                _this._effectWidth = 0;
                _this._effectHeight = 0;
                _this._shadowWidth = 0;
                _this._shadowHeight = 0;
                _this._hitPoints = [];
                _this._updateGridTime = 0;
                /*启用休闲动作*/
                _this._enableLeisureAction = false;
                /*下一次休闲动作启动的时间*/
                _this._nextLeisureStartTime = 0;
                _this._needBottomTex = false;
                _this._needTopTex = false;
                _this._needTopAddTex = false;
                _this._needStar = false;
                _this._needCircle = false;
                /*最后一次绘制到现在的时间*/
                _this._runTime = 0;
                // 是否循环
                _this._loop = true;
                /*帧率*/
                _this._frameRate = 1;
                /*帧时间 帧/ms*/
                _this._frameTime = 0;
                /*帧数量*/
                _this._frameCount = 0;
                /*动画最后一帧索引*/
                _this._frameLastIdx = 0;
                // 动画当前帧
                _this._frameCurIdx = 0;
                /*动画总时间*/
                _this._totalTime = 0;
                /*速度*/
                _this._animationSpeed = 1.0;
                //绘制黄金鱼死亡
                // private _frameCurIdx2: number;
                // private _goldRunTime: number = 0;
                // private drawGold(fg: Graphics, drawX: number, drawY: number, diff: number): void {
                //     if (this._textureGolds.length <= 0) return;
                //     if (!this._frameCurIdx2) {
                //         this._frameCurIdx2 = this._frameCurIdx;
                //     }
                //     let index = this._frameCurIdx - this._frameCurIdx2;
                //     let texture = this._textureGolds[index];
                //     if (!texture) return;
                //     this._goldRunTime += diff;
                //     let tw: number = texture.sourceWidth;
                //     let th: number = texture.sourceHeight;
                //     let matrix = new Laya.Matrix();
                //     matrix.tx = - tw / 2;
                //     matrix.ty = - th / 2;
                //     matrix.scale(50 * this._goldRunTime / 1000, 50 * this._goldRunTime / 1000);
                //     matrix.tx += drawX;
                //     matrix.ty += drawY;
                //     fg.drawTexture(texture, 0, 0, tw, th, matrix);
                // }
                //播放光纤特效
                _this._lineArray = [];
                _this._fish = v;
                _this._oid = _this._fish.unit.oid;
                _this._fishTemp = _this._fish.fishTemp;
                var name = _this._fishTemp ? _this._fishTemp.name : L.GetLang(125);
                _this._name = "G:" + _this._fish.groupID + " L:" + _this._fish.lineID + " N:" + name;
                _this._sortScore = 10;
                _this._frameRate = AVATAR_FRAMERATE;
                _this._assets = [];
                _this._textures = {};
                _this.update(0);
                return _this;
            }
            Object.defineProperty(AvatarFish.prototype, "fish", {
                get: function () {
                    return this._fish;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AvatarFish.prototype, "oid", {
                get: function () {
                    return this._oid;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AvatarFish.prototype, "entry", {
                set: function (v) {
                    if (this._entry == v) {
                        return;
                    }
                    for (var key in this._assets) {
                        var refAsset = this._assets[key];
                        if (refAsset instanceof RefAsset) {
                            // logd("AvatarFish clear:" + key + " " + ref.url);
                            refAsset.release();
                            this._assets[key] = null;
                        }
                    }
                    this.resetFade();
                    this._fishTemp = this._fish ? this._fish.fishTemp : null;
                    if (this._fishTemp) {
                        this.showOrder = this._fishTemp.show_order;
                        this._showDead = this._fishTemp.show_dead != 0;
                        this._fish_scale = this._fishTemp.fish_scale * 0.01;
                        var groupID = this._fish.groupID;
                        var fishIndex = this._fish.position;
                        var groupTemp = groupID ? FishGroupPathManager.getFishGroupTempById(groupID) : null;
                        if (groupTemp && (groupTemp.group_typ == 4 || groupTemp.group_typ == 6 && groupTemp.boss > 0 && fishIndex == groupTemp.boss - 1) && !this._effectTexture) {
                            this._groupType = groupTemp.group_typ;
                            this.initEffectTexture();
                            //一网打尽 和 首领鱼要播放爆金币
                            this._isPlayGold = true;
                        }
                        else if (groupTemp && groupTemp.group_typ == 8) {
                            this._isBoss = true;
                        }
                        if (this._fishTemp.show == 1)
                            this._isPlayGold = true;
                        this.initShadowTexture();
                        if (this._fishTemp.type == 2) {
                            // this._needBottomTex = true;
                            this._needTopTex = true;
                        }
                        else {
                            this._needBottomTex = this._fishTemp.b_effect == 1;
                            this._needTopTex = this._fishTemp.t_effect == 1;
                            this._needTopAddTex = this._fishTemp.t_overlay == 1;
                            this._needStar = this._fishTemp.t_tuowei == 1;
                        }
                    }
                    else {
                        this.showOrder = 0;
                        this._showDead = false;
                        this._fish_scale = 0;
                        this._isBoss = false;
                        this._needBottomTex = false;
                        this._needTopTex = false;
                        this._needTopAddTex = false;
                        this._needStar = false;
                        this._needCircle = false;
                    }
                    this._textures = {};
                    // 移除碰撞点
                    this.removeHitPoints();
                    this._entry = v;
                    if (this._entry) {
                        this.loadTexture();
                        if (this._needBottomTex)
                            this.loadTexture(FISH_ACTION_BOTTOM);
                        if (this._needTopTex)
                            this.loadTexture(FISH_ACTION_TOP);
                        if (this._needTopAddTex)
                            this.loadTexture(FISH_ACTION_TOPADD);
                        // if (this._needStar) {
                        // 	this.loadTexture3(Path.custom_atlas_scene + "goldFish.atlas", Path.scene + "goldFish/", (arr) => {
                        // 		this._starEffectTexures = arr;
                        // 	});
                        // }
                        // 初始化碰撞数据
                        this.initHitData();
                        // 如果没数据使用自动碰撞点
                        if (!this._hitData) {
                            if (!this._autoHitPoint) {
                                this._autoHitPoint = new Vector2GridObject();
                                this._autoHitPoint.owner = this._fish;
                                this._fish.buyuStory.gridMgr.addObject(this._autoHitPoint);
                            }
                        }
                        else {
                            for (var _i = 0, _a = this._hitData; _i < _a.length; _i++) {
                                var point = _a[_i];
                                var hitPoint = point.clone();
                                hitPoint.radius = point.radius;
                                hitPoint.owner = this._fish;
                                this._fish.buyuStory.gridMgr.addObject(hitPoint);
                                this._hitPoints.push(hitPoint);
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AvatarFish.prototype, "showOrder", {
                set: function (v) {
                    this._showOrder = v;
                    this.updateSortScore();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AvatarFish.prototype, "action", {
                get: function () {
                    return this._action;
                },
                set: function (v) {
                    if (this._action == v) {
                        return;
                    }
                    this._action = v;
                    this.loadTexture2(this._action);
                    // 重置消失信息
                    this.resetFade();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AvatarFish.prototype, "visible", {
                // 是否可见
                get: function () {
                    if (!this._fish || !this._fish.visible)
                        return false;
                    return this._fish.waitBorn ? false : this._visible;
                },
                set: function (v) {
                    this._visible = v;
                },
                enumerable: true,
                configurable: true
            });
            AvatarFish.prototype.updateSortScore = function () {
                this._sortScore = 10 + this._showOrder * 10 + this._action;
            };
            // 加载贴图
            AvatarFish.prototype.loadTexture = function (key) {
                if (key) {
                    this.loadTexture2(key);
                }
                else {
                    this.loadTexture2(FISH_ACTION_MOVE);
                    // this.loadTexture2(FISH_ACTION_DIE);
                }
            };
            AvatarFish.prototype.loadTexture2 = function (key) {
                var _this = this;
                var refAsset = this._assets[key];
                if (!refAsset) {
                    var url = Path_game_buyu.custom_atlas_fish + this._entry.toFixed(0) + '/' + FISH_ACTION[key] + '.atlas';
                    refAsset = RefAsset.Get(url);
                    refAsset.retain();
                    this._assets[key] = refAsset;
                    if (!refAsset.parseComplete) {
                        refAsset.once(LEvent.COMPLETE, this, function () {
                            _this.loadTexture2Over(key);
                        });
                    }
                }
                if (refAsset.parseComplete) {
                    this.loadTexture2Over(key);
                }
            };
            AvatarFish.prototype.loadTexture2Over = function (key) {
                if (this._action == key) {
                    // 让显示失效
                    this.drawInfoInvalided = true;
                }
                else {
                    switch (key) {
                        case FISH_ACTION_BOTTOM:
                            this._texturesBottom = this.cacheTexures(this.getFishTxePreUrl(FISH_ACTION_BOTTOM));
                            break;
                        case FISH_ACTION_TOP:
                            this._texturesTop = this.cacheTexures(this.getFishTxePreUrl(FISH_ACTION_TOP));
                            break;
                        case FISH_ACTION_TOPADD:
                            this._texturesTopAdd = this.cacheTexures(this.getFishTxePreUrl(FISH_ACTION_TOPADD));
                            break;
                    }
                }
            };
            AvatarFish.prototype.getFishTxePreUrl = function (key) {
                return Path_game_buyu.fish + this._entry.toFixed(0) + '/' + FISH_ACTION[key] + "/";
            };
            AvatarFish.prototype.loadTexture3 = function (url, preUrl, callFun) {
                var _this = this;
                var refAsset = this._assets[url];
                if (!refAsset) {
                    refAsset = RefAsset.Get(url);
                    refAsset.retain();
                    this._assets[url] = refAsset;
                    if (!refAsset.parseComplete) {
                        refAsset.once(LEvent.COMPLETE, this, function () {
                            _this.loadTexture3Over(refAsset, url, preUrl, callFun);
                        });
                    }
                }
                if (refAsset.parseComplete) {
                    this.loadTexture3Over(refAsset, url, preUrl, callFun);
                }
            };
            AvatarFish.prototype.loadTexture3Over = function (refAsset, url, preUrl, callFun) {
                var arr = this.cacheTexures(preUrl);
                callFun && callFun(arr);
            };
            //初始化特效贴图
            AvatarFish.prototype.initEffectTexture = function () {
                var url;
                if (this._groupType == 6)
                    url = Path_game_buyu.scene_single + 'tu_sly.png';
                else if (this._groupType == 4)
                    url = Path_game_buyu.scene_single + 'tu_ywdj.png';
                this._effectTexture = url ? Loader.getRes(url) : null;
                if (this._effectTexture) {
                    this._effectWidth = this._effectTexture.sourceWidth;
                    this._effectHeight = this._effectTexture.sourceHeight;
                }
            };
            //初始化阴影贴图
            AvatarFish.prototype.initShadowTexture = function () {
                this._shadowTexture = Loader.getRes(Path_game_buyu.scene_single + "shadow.png");
                if (this._shadowTexture) {
                    this._shadowWidth = this._shadowTexture.sourceWidth;
                    this._shadowHeight = this._shadowTexture.sourceHeight;
                }
            };
            Object.defineProperty(AvatarFish.prototype, "autoHitPoint", {
                /**
                 * 自动碰撞点
                 */
                get: function () {
                    return this._autoHitPoint;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AvatarFish.prototype, "hitPoints", {
                /**
                 * 自定义碰撞点
                 */
                get: function () {
                    return this._hitPoints;
                },
                enumerable: true,
                configurable: true
            });
            // 初始化碰撞数据
            AvatarFish.prototype.initHitData = function () {
                this._hitData = null;
                // TODO碰撞数据 从模板里取
                var template = FishGroupPathManager.getCollisionTempById(this._fish.entryid);
                if (template) {
                    var hitValue = template.points;
                    var data_1 = [];
                    var len = hitValue.length / 3;
                    for (var i = 0; i < len; i++) {
                        var sidx = i * 3;
                        var point = new Vector2GridObject(hitValue[sidx], hitValue[sidx + 1]);
                        point.radius = hitValue[sidx + 2];
                        data_1.push(point);
                    }
                    if (data_1.length) {
                        this._hitData = data_1;
                    }
                }
            };
            /**
             * 更新碰撞信息
             * @param idx
             */
            AvatarFish.prototype.updateHitPoint = function (radius) {
                this._autoHitPoint.radius = radius * this._scale;
                this._autoHitPoint.set(this._pos);
            };
            /**
             * 更新碰撞信息
             * @param idx
             */
            AvatarFish.prototype.updateHitPoints = function (flipV) {
                if (!this._hitData || !this._hitPoints)
                    return;
                var pi2 = Math.PI / 2;
                var pi3 = pi2 * 3;
                var len = this._hitPoints.length;
                var matrix = new Laya.Matrix();
                for (var i = 0; i < len; i++) {
                    var point = this._hitPoints[i];
                    var hiteData = this._hitData[i];
                    point.radius = hiteData.radius * this._scale;
                    matrix.identity();
                    matrix.tx = hiteData.x;
                    matrix.ty = hiteData.y;
                    matrix.scale(this._scale, this._scale);
                    if (this._angle > pi2 && this._angle < pi3) {
                        matrix.scale(1, -1);
                    }
                    if (flipV) { //反向计算
                        matrix.rotate(-this._angle);
                        matrix.scale(1, -1);
                    }
                    else {
                        matrix.rotate(this._angle);
                    }
                    point.x = matrix.tx + this._pos.x;
                    point.y = matrix.ty + this._pos.y;
                }
            };
            // 更新网格位置
            AvatarFish.prototype.updateGrid = function (diff) {
                this._updateGridTime -= diff;
                if (this._updateGridTime > 0) {
                    return;
                }
                // 500毫秒更新一次
                this._updateGridTime += 500;
                if (this._autoHitPoint) {
                    // 更新网格位置
                    this._fish.buyuStory.gridMgr.updateObject(this._autoHitPoint);
                }
                else {
                    // 移除多余的
                    var pointsLen = this._hitPoints.length;
                    for (var i = 0; i < pointsLen; i++) {
                        this._fish.buyuStory.gridMgr.updateObject(this._hitPoints[i]);
                    }
                }
            };
            AvatarFish.prototype.update = function (diff) {
                if (!this._fish || !this.visible) {
                    return;
                }
                this.entry = this._fish.entryid;
                // 更新位置
                this._pos.set(this._fish.pos);
                var realScale = this._fish_scale != 0 ? (this._fish.scale * this._fish_scale) : this._fish.scale;
                //被玩家杀死的鱼才播放特效
                if (this._fish.isDied && this._fish.killer && this._showDead) {
                    // 死亡放大
                    this._scale = realScale * 1.5;
                    this._angle += Math.PI / 300 * diff;
                }
                else {
                    // 更新缩放
                    this._scale = realScale;
                    // 更新方向
                    this._angle = this._fish.angle;
                }
                // 更新动画帧
                this._frameCurIdx = this.getCurrentIdx() + 1;
                // 更新动作
                this.updateAction(diff);
                this._hasBeaten = false;
                if (this._fish.isDied) {
                    //！！！！特殊修改，如果不是被玩家打死的鱼让他继续游吧
                    // if (this._fish.killer) {
                    if (this.getfadeing()) {
                        // 消失过程中
                        this.updateFade(diff);
                    }
                    else {
                        // 死亡动作播放结束后触发消失
                        this.startFade();
                    }
                    // }
                    // 移除碰撞
                    this.removeHitPoints();
                }
                else {
                    // 更新碰撞
                    this.updateGrid(diff);
                    // 是否受击中
                    this._hasBeaten = this._fish.lastBeatenTime + BEATEN_DURATION > Laya.timer.currTimer;
                }
            };
            // 重置消失信息
            AvatarFish.prototype.resetFade = function () {
                this._fadeTime = -1;
            };
            // 开始消失
            AvatarFish.prototype.startFade = function () {
                this._fadeTime = FADE_DURATION;
                // logd("startFade")
            };
            // 结束消失
            AvatarFish.prototype.endFade = function () {
                this.resetFade();
                this._fish.dieEnd();
            };
            // 是否消失中
            AvatarFish.prototype.getfadeing = function () {
                return this._fadeTime != -1;
            };
            // 更新消失信息
            AvatarFish.prototype.updateFade = function (diff) {
                this._fadeTime -= diff;
                if (this._fadeTime < 0) {
                    this.endFade();
                }
            };
            // 更新动作
            AvatarFish.prototype.updateAction = function (diff) {
                if (!this._fish)
                    return;
                if (this._fish.isDied) {
                    // 死亡优先级最高
                    this._runTime = this._runTime % this._totalTime;
                    this._loop = false;
                }
                this.action = FISH_ACTION_MOVE; // 只有移动动作
            };
            /*是否播放进行中*/
            AvatarFish.prototype.isActionPlaying = function () {
                return this._runTime < this._totalTime || this._drawInfoInvalided;
            };
            // 随机播放休闲动作
            AvatarFish.prototype.ranLeisureAction = function () {
                //启用休闲动作，则随机时间+ 随机动作，随机方向
                if (this._enableLeisureAction && Laya.timer.currTimer > this._nextLeisureStartTime) {
                    //随机下一次启动的时间
                    this._nextLeisureStartTime = MathU.randomRange(5000, 10000) + Laya.timer.currTimer;
                    return true;
                }
                return false;
            };
            Object.defineProperty(AvatarFish.prototype, "drawInfoInvalided", {
                set: function (v) {
                    this._drawInfoInvalided = v;
                    v && this.updateSortScore();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AvatarFish.prototype, "animationSpeed", {
                get: function () {
                    return this._animationSpeed;
                },
                set: function (value) {
                    if (this._animationSpeed == value) {
                        return;
                    }
                    this._animationSpeed = value;
                    this._runTime = this._frameCurIdx ? this._frameCurIdx * this._frameTime : 0;
                    //计算出每帧的消耗时间
                    this._frameTime = 1000 / this._frameRate * this._animationSpeed;
                    //完整动画时长
                    this._totalTime = this._frameTime * this._frameCount;
                },
                enumerable: true,
                configurable: true
            });
            // 获得当前帧
            AvatarFish.prototype.getCurrentIdx = function () {
                // if (this._fish.isDied){
                // 	// 死的最后一帧
                // 	return this._frameLastIdx;
                // }
                if (this._loop || (this._runTime < this._totalTime)) {
                    //获得无限完整动画循环之后剩余的时间
                    var frameYu = this._runTime % this._totalTime;
                    //定位到帧位置
                    var idx = Math.floor(frameYu / this._frameTime);
                    if (isNaN(idx))
                        return 1;
                    if (idx >= this._frameCount)
                        return this._frameLastIdx;
                    return idx;
                }
                // 最后一帧
                return this._frameLastIdx;
            };
            // 绘制信息计算 
            AvatarFish.prototype.drawInfoCalculate = function () {
                var ref = this._assets[this._action];
                if (!ref || !ref.parseComplete) {
                    return;
                }
                this._drawInfoInvalided = false;
                // 获取贴图
                var textures = this.cacheTexures(this.getFishTxePreUrl(this._action));
                if (!textures)
                    return;
                // 重置绘制时间 TODO看是否需要计算已消耗得时间
                this._runTime = 0;
                this.animationSpeed = 0;
                this._loop = false;
                this._frameCount = 0;
                this._frameLastIdx = 0;
                if (!textures || textures == {}) {
                    return;
                }
                this._textures = textures;
                // 设置帧长
                this._frameCount = Object.keys(this._textures).length;
                this._frameLastIdx = this._frameCount - 1;
                this._frameCurIdx = 0;
                // this._frameCurIdx2 = 0;
                // 移动动作需要循环播放
                this._loop = this._action == FISH_ACTION_MOVE;
                this.animationSpeed = this._fish.speedScale;
            };
            //缓存纹理
            AvatarFish.prototype.cacheTexures = function (preUrl) {
                // 获取贴图
                var textures = {};
                var texture;
                var idx = 1;
                do {
                    var url = preUrl + idx + '.png';
                    texture = Loader.getRes(url);
                    if (texture) {
                        textures[idx.toString()] = texture;
                        idx++;
                    }
                    else {
                        break;
                    }
                } while (true);
                return textures;
            };
            // 绘制
            AvatarFish.prototype.onMultiDraw = function (diff, gArr, scene) {
                //运行时间累计
                if (!this._fish || this._fish.entryid <= 0 || !this._fish.sceneObjectMgr.mapInfo) {
                    return;
                }
                this._runTime += diff;
                if (!this.visible)
                    return;
                var bg = gArr[0];
                var fg = gArr[1];
                var pg = gArr[2];
                var ng = gArr[3];
                var hg = gArr[4];
                //绘制信息是否失效
                if (this._drawInfoInvalided) {
                    this.drawInfoCalculate();
                }
                // 绘制
                var drawX = scene.camera.getScenePxByCellX(this._pos.x);
                var drawY = scene.camera.getScenePxByCellY(this._pos.y);
                // 碰撞信息
                // let rect = this._hitRect;
                // rect.setTo(0, 0, 0, 0);
                var texture = this._textures[this._frameCurIdx];
                if (!texture) {
                    isShowDebug && this.drawNotTexture(ng, hg, scene, drawX, drawY, this._angle, this._scale);
                    return;
                }
                var tsw = texture.sourceWidth;
                var tsh = texture.sourceHeight;
                var tw = texture.width;
                var th = texture.height;
                // rect.width = texture.width * this._scale;
                // rect.height = texture.height * this._scale;
                // rect.x = drawX;
                // rect.y = drawY;
                // 更新一下碰撞数据
                if (this._autoHitPoint) {
                    this.updateHitPoint(Math.max(tw, th) / 2);
                }
                else {
                    this.updateHitPoints(scene.camera.flipV);
                }
                // 播放速度
                this.animationSpeed = this._fish.speedScale;
                //绘制特效
                this.drawEffect(bg, ng, texture, tsw, tsh, drawX, drawY);
                //底层特效
                var textureBottom = this._texturesBottom ? this._texturesBottom[this._frameCurIdx] : null;
                if (textureBottom) {
                    var scale = this._fishTemp.type == 3 ? 2 : 1;
                    var tbsw = textureBottom.sourceWidth * scale;
                    var tbsh = textureBottom.sourceHeight * scale;
                    fg.drawTexture(textureBottom, 0, 0, tbsw, tbsh, this.getMatrix(scene, textureBottom, tbsw, tbsh, drawX, drawY, .5));
                }
                // 绘制形象
                if (this._hasBeaten) {
                    this.drawBeaten(fg, drawX, drawY, texture, tsw, tsh, tw, th, scene);
                }
                else {
                    //实体
                    fg.drawTexture(texture, 0, 0, tsw, tsh, this.getMatrix(scene, texture, tsw, tsh, drawX, drawY, .5));
                }
                //顶层叠加特效
                // let textureTopAdd = this._texturesTopAdd ? this._texturesTopAdd[this._frameCurIdx] : null;
                // if (textureTopAdd && main.canShowFishEffect) {
                // 	let ttasw: number = textureTopAdd.sourceWidth;
                // 	let ttash: number = textureTopAdd.sourceHeight;
                // 	let args = fg.drawTexture(textureTopAdd, 0, 0, ttasw * 2, ttash * 2, this.getMatrix(scene, textureTopAdd, ttasw, ttash, drawX, drawY));
                // 	if (fg.cmds[fg.cmds.length - 1] == args) {
                // 		fg.cmds.pop();
                // 		args.unshift(args['callee'])
                // 		fg._saveToCmd(this.customRenderAdd, args);
                // 	}
                // }
                //顶层特效
                var textureTop = this._texturesTop ? this._texturesTop[this._frameCurIdx] : null;
                if (textureTop) {
                    var scale = this._fishTemp.type == 3 ? 2 : 1;
                    var ttsw = textureTop.sourceWidth * scale;
                    var ttsh = textureTop.sourceHeight * scale;
                    fg.drawTexture(textureTop, 0, 0, ttsw, ttsh, this.getMatrix(scene, textureTop, ttsw, ttsh, drawX, drawY, .5));
                }
                if (this._fish.isDied) {
                    if (this._frameRate != AVATAR_FRAMERATE_DIE) {
                        this._frameRate = AVATAR_FRAMERATE_DIE;
                        this._animationSpeed = 0;
                    }
                    // if (this._fish.killer && this._isPlayGold) {
                    //     this.drawGold(bg, drawX, drawY, diff);
                    //     // this.drawGoldLine(bg, drawX, drawY);
                    // }
                }
                else {
                    if (this._frameRate != AVATAR_FRAMERATE) {
                        this._frameRate = AVATAR_FRAMERATE;
                        this._animationSpeed = 0;
                    }
                    if (this._needStar) {
                        this.drawStarEffect(scene, fg, texture, tsw, tsh, drawX, drawY);
                    }
                    // let diffY = tsh / 2 + 5;
                    // diffY += 45;
                    // this.drawShadow(bg, drawX, drawY, diffY, scene);
                }
                if (isShowDebug) {
                    // 调试信息
                    this.drawHitPoints(diff, pg, scene);
                    this.drawName(ng, null, scene, drawX, drawY, 0, 0.2, 20);
                    if (FishGroupPathManager.DEBUG_LINES.indexOf(this._fish.lineID) >= 0)
                        this.drawLine(ng, scene);
                }
            };
            //鱼身变形
            AvatarFish.prototype.getMatrix = function (scene, texture, tsw, tsh, drawX, drawY, rate) {
                if (rate === void 0) { rate = 1; }
                var matrix = new Laya.Matrix();
                matrix.tx = -tsw * rate;
                matrix.ty = -tsh * rate;
                matrix.scale(this._scale, this._scale);
                var pi2 = Math.PI / 2;
                if (this._angle > pi2 && this._angle < pi2 * 3) {
                    if (this._fishTemp && this._fishTemp.type == 7)
                        this._angle -= Math.PI;
                    else
                        matrix.scale(1, -1);
                }
                if (scene.camera.flipV) {
                    matrix.scale(1, -1);
                }
                matrix.rotate(this._angle);
                if (scene.camera.flipV) {
                    matrix.scale(1, -1);
                }
                matrix.tx += drawX;
                matrix.ty += drawY;
                return matrix;
            };
            //叠加效果
            AvatarFish.prototype.customRenderAdd = function (x, y, cmd) {
                var func = cmd.shift();
                var webGLContext = laya.renders.Render.context.ctx;
                var oldBlendType = webGLContext.globalCompositeOperation;
                var curBlendType = Laya.BlendMode.ADD;
                curBlendType && (webGLContext.globalCompositeOperation = curBlendType);
                if (func instanceof Function && func.apply instanceof Function)
                    func.apply(this, [x, y, cmd]);
                curBlendType && (webGLContext.globalCompositeOperation = oldBlendType);
            };
            //绘制点点特效
            AvatarFish.prototype.drawStarEffect = function (scene, fg, fishTexture, tsw, tsh, fishDrawX, fishDrawY) {
                if (!this._starEffectTexures)
                    return; //帧率过低
                var len = this._starEffectTexures.length;
                if (len <= 0)
                    return;
                var curIndex = Math.floor(this._runTime / this._frameTime) % len;
                var texture = this._starEffectTexures[curIndex];
                if (!texture)
                    return;
                var tw = texture.sourceWidth;
                var th = texture.sourceHeight;
                var matrix = new Matrix();
                matrix.tx = -tw / 2 - tsw / 4;
                matrix.ty = -th / 2;
                matrix.scale(this._scale, this._scale);
                var pi2 = Math.PI / 2;
                if (this._angle > pi2 && this._angle < pi2 * 3) {
                    matrix.scale(1, -1);
                }
                if (scene.camera.flipV) {
                    matrix.scale(1, -1);
                }
                matrix.rotate(this._angle);
                if (scene.camera.flipV) {
                    matrix.scale(1, -1);
                }
                matrix.tx += fishDrawX;
                matrix.ty += fishDrawY;
                fg.drawTexture(texture, 0, 0, tw, th, matrix);
            };
            //绘制阴影
            AvatarFish.prototype.drawShadow = function (bg, fishDrawX, fishDrawY, diffY, scene) {
                if (!this._shadowTexture)
                    return; //帧率过低
                var y = scene.camera.height / 3;
                if (fishDrawY + diffY * 0.8 < y)
                    return;
                var dx = fishDrawX - this._shadowWidth / 2;
                var dy = fishDrawY + diffY;
                bg.drawTexture(this._shadowTexture, dx, dy, this._shadowWidth, this._shadowHeight, null, 0.75);
            };
            AvatarFish.prototype.drawBeaten = function (fg, drawX, drawY, texture, tsw, tsh, tw, th, scene) {
                if (!this._shaderValue) {
                    this._shaderValue = new gamebuyu.render.custom.FELightSweepShaderValue();
                    this._shaderValue.A = 1;
                    this._shaderValue.B = .5;
                    this._shaderValue.dx = 6;
                    this._shaderValue.dy = 0;
                    this._shaderValue.radius = .3;
                    this._shaderValue.shineFactor = 3;
                }
                // 时间
                this._shaderValue.time = (Laya.timer.currTimer - this._fish.lastBeatenTime) / 1000 % 1;
                // 贴图信息
                this._shaderValue.textureHost = texture;
                this._shaderValue.UV = texture.uv;
                // 画布大小
                var canvasWidth = Laya.Render._mainCanvas.width;
                var canvasHeight = Laya.Render._mainCanvas.height;
                var parent = scene.avatarLayer;
                // 大小(全局缩放&换算屏幕比) 注意：顶点映射到全屏的单位为2
                var pivotX = (tsw / 2 - texture.offsetX) / tw;
                var pivotY = (tsh / 2 - texture.offsetY) / th;
                this._shaderValue.v_size[0] = tw * parent.globalScaleX * this._scale / canvasWidth;
                this._shaderValue.v_size[1] = th * parent.globalScaleY * this._scale / canvasHeight;
                // 视图转换
                var pi2 = Math.PI / 2;
                if (this._angle > pi2 && this._angle < pi2 * 3) {
                    this._shaderValue.v_size[1] *= -1;
                }
                // 同步角度
                var angle = scene.camera.flipV ? this._angle : 2 * Math.PI - this._angle;
                // 位置
                var p = Point.TEMP.setTo(drawX, drawY);
                parent.localToGlobal(p);
                // 转换到顶点坐标系
                p.y = -p.y;
                // 换算屏幕比&转UI坐标系&计算锚点
                var w = this._shaderValue.v_size[0] * 2;
                var h = this._shaderValue.v_size[1] * 2;
                this._shaderValue.pos[0] = -1 + p.x / (canvasWidth / 2) + (.5 - pivotX) * w;
                this._shaderValue.pos[1] = 1 + p.y / (canvasHeight / 2) + (-.5 + pivotY) * h;
                // 锚点
                this._shaderValue.pivot[0] = pivotX;
                this._shaderValue.pivot[1] = pivotY;
                // 角度
                this._shaderValue.angle = angle;
                // 屏幕高宽比
                this._shaderValue.aspect_ratio = canvasHeight / canvasWidth;
                // 绘制命令
                fg._saveToCmd(this.customRender, [this._shaderValue]);
            };
            AvatarFish.prototype.customRender = function (x, y, cmd) {
                var webGLContext = laya.renders.Render.context.ctx;
                var vertexBuffer = gamebuyu.render.custom.CSprite.getVertexBuffer();
                var indexBuffer = gamebuyu.render.custom.CSprite.getIndexBuffer();
                var shader = gamebuyu.render.custom.FELightSweepShader.shader;
                (typeof webGLContext.setIBVB === 'function') && webGLContext.setIBVB(0, 0, indexBuffer, vertexBuffer, 6, null, shader, cmd[0], 0, 0);
            };
            AvatarFish.prototype.drawGoldLine = function (fg, drawX, drawY) {
                if (this._lineArray.length <= 0) {
                    this.playLine(drawX, drawY);
                }
                //光线
                var len = this._lineArray.length;
                for (var i = 0; i < len; i++) {
                    var line = this._lineArray[i];
                    line.updateTexture();
                    line.onDraw(fg);
                }
            };
            AvatarFish.prototype.playLine = function (drawX, drawY) {
                //随机区域分散
                var count = 8;
                var angle = 360 / count;
                for (var i = 0; i < count; i++) {
                    var startAngle = angle * i;
                    var endAngle = angle * (i + 1);
                    this.randomLine(startAngle, endAngle, drawX, drawY);
                }
            };
            AvatarFish.prototype.randomLine = function (start, end, centerX, centerY) {
                var count = MathU.randomRange(4, 6);
                for (var i = 0; i < count; i++) {
                    //随机旋转
                    var rotation = MathU.randomRange(start, end);
                    //距离中心点多少半径生成光线
                    var radius = 500;
                    var d = Math.PI * rotation / 180;
                    //出生点
                    var sourceX = centerX + radius * Math.cos(d);
                    var sourceY = centerY + radius * Math.sin(d);
                    var line = ObjectPools.malloc(EffectFrame, null, 7, 12, null);
                    line.setAssetPath(Path.scene);
                    line.setData("line", 12, 1);
                    line.setLoop(true);
                    line.centrePoint = new Vector2(0, 0);
                    line.setOffset(sourceX, sourceY);
                    line.setRotation(d);
                    var height = MathU.randomRange(-50, 30);
                    line.setSize(1280, height);
                    this._lineArray[this._lineArray.length] = line;
                }
            };
            //绘制特效
            AvatarFish.prototype.drawEffect = function (fg, ng, texture, tsw, tsh, drawX, drawY) {
                if (!this._effectTexture)
                    return;
                var matrix = new Laya.Matrix();
                matrix.tx = -this._effectWidth / 2;
                matrix.ty = -this._effectHeight / 2;
                var scaleW = tsw / this._effectWidth;
                var scaleH = tsh / this._effectHeight;
                var scale;
                var g;
                if (this._groupType == 4) {
                    scale = this._fish_scale * (Math.max(scaleW, scaleH) + 0.5);
                    matrix.scale(scale, scale);
                    matrix.rotate(this._runTime / 1000 % 360);
                    g = fg;
                }
                else {
                    scale = this._fish_scale * (Math.max(scaleW, scaleH) + .01) * 2;
                    matrix.scale(scale, scale);
                    g = fg;
                }
                matrix.tx += drawX;
                matrix.ty += drawY;
                g.drawTexture(this._effectTexture, 0, 0, this._effectWidth, this._effectHeight, matrix);
            };
            //绘制路线
            AvatarFish.prototype.drawLine = function (g, scene) {
                var lines = [];
                for (var index = 0; index < this._fish.LinePosList.length; index++) {
                    var element = this._fish.LinePosList[index];
                    lines.push(scene.camera.getScenePxByCellX(element.x));
                    lines.push(scene.camera.getScenePxByCellY(element.y));
                }
                var lineId = this._fish.lineID;
                var color = "#FFFF00";
                for (var i = 0; i < lines.length / 4; i++) {
                    var fromX = lines[4 * i + 2];
                    var fromY = lines[4 * i + 3];
                    var targetX = lines[4 * i];
                    var targetY = lines[4 * i + 1];
                    var x = (targetX + fromX) / 2;
                    var y = (targetY + fromY) / 2;
                    g.fillBorderText("LineID:" + lineId, x, y, 20 + "px SimHei", color, color, 1, "center");
                }
                g.drawLines(0, 0, lines, color, 2);
            };
            AvatarFish.prototype.drawNotTexture = function (g, hg, scene, x, y, ori, scale) {
                var size = Math.ceil(scene.sceneFontSize * (scale < 1 ? 1 : scale));
                g.fillBorderText(this._entry + '：缺资源', x, y, size + "px SimHei", "#FF0000", "#000000", 2, "center");
            };
            // 绘制名字
            AvatarFish.prototype.drawName = function (g, hg, scene, x, y, ori, scale, headHeight) {
                // 偏移像素
                var offsetY = headHeight * scale + 20;
                var size = 16; //
                // let size = Math.ceil(scene.sceneFontSize * (scale < 1 ? 1 : scale));
                if (this._name) {
                    offsetY += size;
                    //test 坐标一起打进去
                    // name += "|" + this._snake.PosInfo.head.toString();
                    g.fillBorderText(this._name + "S:" + this._sortScore + " D:" + this._oid, x, y - offsetY, size + "px SimHei", "#FFFFFF", "#000000", 2, "center");
                }
                return offsetY;
            };
            // 绘制碰撞点
            AvatarFish.prototype.drawHitPoints = function (diff, g, scene) {
                var color = '#00FF00';
                var lineWidth = 2;
                var drawX;
                var drawY;
                if (this._autoHitPoint) {
                    drawX = scene.camera.getScenePxByCellX(this._autoHitPoint.x);
                    drawY = scene.camera.getScenePxByCellY(this._autoHitPoint.y);
                    g.drawCircle(drawX, drawY, this._autoHitPoint.radius - lineWidth, null, color, lineWidth);
                }
                else {
                    for (var _i = 0, _a = this.hitPoints; _i < _a.length; _i++) {
                        var element = _a[_i];
                        drawX = scene.camera.getScenePxByCellX(element.x);
                        drawY = scene.camera.getScenePxByCellY(element.y);
                        g.drawCircle(drawX, drawY, element.radius - lineWidth, null, color, lineWidth);
                    }
                }
            };
            // 移除碰撞点
            AvatarFish.prototype.removeHitPoints = function () {
                if (this._autoHitPoint) {
                    this._fish.buyuStory.gridMgr.delObject(this._autoHitPoint);
                    this._autoHitPoint = null;
                }
                var pointsLen = this._hitPoints.length;
                for (var i = 0; i < pointsLen; i++) {
                    this._fish.buyuStory.gridMgr.delObject(this._hitPoints[i]);
                }
                this._hitPoints.length = 0;
            };
            /**
             * 鼠标碰撞检测
             */
            AvatarFish.prototype.hitTest = function (x, y) {
                Vector2.temp.x = x;
                Vector2.temp.y = y;
                var hitPoint = this._autoHitPoint;
                if (hitPoint) {
                    return hitPoint.dist(Vector2.temp) < hitPoint.radius;
                }
                var hitPoints = this._hitPoints;
                if (hitPoints && hitPoints.length) {
                    for (var _i = 0, hitPoints_1 = hitPoints; _i < hitPoints_1.length; _i++) {
                        var point = hitPoints_1[_i];
                        if (point.dist(Vector2.temp) < point.radius) {
                            return true;
                        }
                    }
                }
                return false;
            };
            AvatarFish.prototype.clear = function (checkNow) {
                this.entry = 0;
                this._fish = null;
                this._assets = null;
                this._textures = null;
                this._texturesBottom = null;
                this._texturesTop = null;
                this._texturesTopAdd = null;
                this._effectTexture = null;
                this._shadowTexture = null;
                this._starEffectTexures = null;
                this._isBoss = false;
                this._needBottomTex = false;
                this._needTopTex = false;
                this._needTopAddTex = false;
                this._needStar = false;
                if (this._lineArray && this._lineArray.length > 0) {
                    for (var _i = 0, _a = this._lineArray; _i < _a.length; _i++) {
                        var line = _a[_i];
                        ObjectPools.free(line);
                    }
                    this._lineArray.length = 0;
                }
                this.resetFade();
                _super.prototype.clear.call(this, checkNow);
            };
            return AvatarFish;
        }(gamecomponent.scene.AvatarBase));
        scene_1.AvatarFish = AvatarFish;
    })(scene = gamebuyu.scene || (gamebuyu.scene = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=AvatarFish.js.map