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
    var page;
    (function (page_1) {
        /**
        * 经典模式战利品掉落
        */
        var BuyuLootPage = /** @class */ (function (_super) {
            __extends(BuyuLootPage, _super);
            function BuyuLootPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                //上边界
                _this._top = 0;
                //下边界
                _this._bottom = 0;
                //左边界
                _this._left = 0;
                //右边界
                _this._right = 0;
                _this._nextUpdateTime = 0;
                _this._timeDelta = 0;
                _this._asset = [
                    Path.ui_atlas_effect + "coin.atlas",
                    Path.ui_atlas_effect + "shuzi.atlas",
                ];
                _this._loots = [];
                _this._nums = [];
                _this._fireMgr = new FireMgr(v, _this, "setLoot");
                var story = _this._game.sceneObjectMgr.story;
                _this._buyuMgr = story.buyuMgr;
                return _this;
            }
            BuyuLootPage.prototype.createdLoadEffect = function () {
                // 不需要加载特效
            };
            // 页面初始化函数
            BuyuLootPage.prototype.init = function () {
                this._viewUI = this.createView(Sprite);
                this._viewUI.size(main.widthDesginPixelw, main.heightDesginPixelw);
                this.addChild(this._viewUI);
                this._bornV = new Vector2();
                this._targetV = new Vector2();
                this._tempP = new Point();
                this._right = main.widthDesginPixelw;
                this._bottom = main.heightDesginPixelw;
            };
            // 页面打开时执行函数
            BuyuLootPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._game.sceneObjectMgr.on(BuyuMgr.EVENT_KILL_FISH, this, this.onKillFish);
            };
            BuyuLootPage.prototype.getTargetPos = function (player) {
                var page = this._game.uiRoot.HUD.getPage(page_1.BuyuPageDef.PAGE_BUYU_MAIN);
                if (!page)
                    return;
                var item = page.getGunItemByPlayer(player);
                if (!item)
                    return;
                this._tempP = item.getGoldGlobalPos(this._tempP);
                this._tempP = this._viewUI.globalToLocal(this._tempP);
                return this._tempP;
            };
            // private getTargetPos2(posNum: number) {
            //     let page = this._game.uiRoot.HUD.getPage(BuyuPageDef.PAGE_CLASSICAL_HUD) as ClassicalHudPage;
            //     if (!page) return;
            //     let item = page.paoDic.get(posNum) as gui.component.ClassicalGunItem;
            //     let p: Point = item.getGoldGlobalPos();
            //     p = this._lootLayer.globalToLocal(p);
            //     return new Vector2(p.x, p.y);
            // }
            //鱼死亡监听
            BuyuLootPage.prototype.onKillFish = function (fish, killOid, fishTemp) {
                if (!this._game.mainScene)
                    return;
                var oid = fish.killer;
                if (!oid && killOid)
                    oid = killOid;
                ;
                var player = this._buyuMgr.getPlayeryOid(oid);
                if (!player)
                    return;
                var isSelf = player.isMainPlayer;
                // if (!isSelf) return;
                var temp = fishTemp ? fishTemp : fish.fishTemp;
                if (!temp)
                    return;
                var camera = this._game.mainScene.camera;
                //炮台位置(结束点)
                var targetX, targetY;
                var p = this.getTargetPos(player);
                if (!p)
                    return;
                targetX = p.x;
                targetY = p.y;
                //鱼的位置(出生点)
                this._tempP.x = camera.getScenePxByCellX(fish.pos.x) * this._game.clientScale;
                this._tempP.y = camera.getScenePxByCellY(fish.pos.y) * this._game.clientScale;
                this._tempP = this._viewUI.globalToLocal(this._tempP);
                var bornX = this._tempP.x;
                var bornY = this._tempP.y;
                var rate = temp.rate_range[0];
                //计算奖励
                var awardGold = this.getAwards(fish);
                //1.飘金币
                //计算金币数量 打底2个，每4倍额外增加一个
                var coinCount = 2 + Math.ceil(rate / 4);
                coinCount = coinCount > BuyuLootPage.MAX_COIN ? BuyuLootPage.MAX_COIN : coinCount;
                if (awardGold > 0) {
                    this.setLoots(LootDrawtor.TYPE_COIN, coinCount, bornX, bornY, targetX, targetY, null, player);
                }
                //2.飘字
                var mainPlayer = this._buyuMgr.mainPlayer;
                var numType = mainPlayer && mainPlayer.unit.oid == fish.killer ? NumDrawtor.TYPE_SELF : NumDrawtor.TYPE_OTHER;
                var groupID = fish.groupID;
                var fishIndex = fish.position;
                var groupTemp = FishGroupPathManager.getFishGroupTempById(groupID);
                //是否是一网打尽
                var isYwdj = groupTemp && groupTemp.group_typ == 4;
                //是否是BOSS
                var isBoss = groupTemp && groupTemp.group_typ == 6 && groupTemp.boss > 0 && fishIndex == groupTemp.boss - 1;
                //是否显示
                var isShow = temp && temp.show == 1;
                if (isShow || isYwdj || isBoss) {
                    this._game.mainScene.camera.shock(750);
                    this._fireMgr && this._fireMgr.start(bornX, bornY);
                    //微信震动接口
                    // let api = window['externalInterfacePI'];
                    // if (api && api.wxShock) {
                    //     api.wxShock(true);
                    // }
                    //随机播放死亡语音
                    if (MathU.randomRange(1, 3) == 1 && temp.great != 1 && !isYwdj)
                        this._game.playSound(Path_game_buyu.music_buyu + "boss_die" + MathU.randomRange(1, 10) + ".mp3");
                    else
                        this._game.playSound(Path_game_buyu.music_buyu + "huangjinyu.mp3");
                }
                else {
                    this._game.playSound(Path_game_buyu.music_buyu + "yubaoqian.mp3");
                }
                if (awardGold > 0) {
                    var rowNum = Math.ceil(coinCount / BuyuLootPage.MAX_PER_LINE);
                    this.setNum(numType, awardGold, bornX, bornY);
                    player && player.event(BuyuPlayer.GOLD_CHANGED, [awardGold]);
                    bornY += rowNum * 50;
                }
            };
            /**
             * 获取奖励
             */
            BuyuLootPage.prototype.getAwards = function (fish) {
                if (!fish)
                    return 0;
                return fish.lootMoney;
            };
            BuyuLootPage.prototype.setLoots = function (type, count, bornX, bornY, targetX, targetY, itemID, player) {
                var _this = this;
                var maxCount = 10;
                var width = 70;
                var height = 75;
                switch (type) {
                    case LootDrawtor.TYPE_COIN:
                        maxCount = BuyuLootPage.MAX_COIN;
                        width = 70;
                        height = 80;
                        break;
                }
                count = count > maxCount ? maxCount : count;
                var diffY = 0;
                var countPerLine = count > BuyuLootPage.MAX_PER_LINE ? BuyuLootPage.MAX_PER_LINE : count;
                var index = -countPerLine / 2;
                var _loop_1 = function (i) {
                    var x = bornX + index * width;
                    var y = bornY + diffY;
                    Laya.timer.once(50 * i, this_1, function () {
                        _this.setLoot(type, x, y, targetX, targetY, itemID);
                    });
                    if ((i + 1) % BuyuLootPage.MAX_PER_LINE == 0) {
                        diffY += height;
                        index = -countPerLine / 2;
                    }
                    else {
                        index++;
                    }
                };
                var this_1 = this;
                for (var i = 0; i < count; i++) {
                    _loop_1(i);
                }
            };
            BuyuLootPage.prototype.setLoot = function (type, bornX, bornY, targetX, targetY, itemID) {
                //限制下最大个数吧、
                var len = this._loots.length;
                if (len > 50)
                    return;
                this._bornV.x = bornX;
                this._bornV.y = bornY;
                this._targetV.x = targetX;
                this._targetV.y = targetY;
                var lootDw = LootDrawtor.create(type, this._bornV, this._targetV, itemID);
                this._loots[len] = lootDw;
            };
            BuyuLootPage.prototype.setNum = function (type, num, bornX, bornY, showBz) {
                var len = this._nums.length;
                if (len > 12)
                    return;
                this._bornV.x = bornX;
                this._bornV.y = bornY;
                var numDw = NumDrawtor.create(type, num, this._bornV, showBz);
                this._nums[len] = numDw;
            };
            BuyuLootPage.prototype.update = function (diff) {
                //如果是小游戏上并且处于后台 就不执行了
                if (!this._viewUI)
                    return;
                this._viewUI.graphics.clear();
                this._loots.sort(this.lootSort);
                var i = 0;
                var len = this._loots.length;
                for (i = 0; i < len; i++) {
                    var loot = this._loots[i];
                    if (!loot)
                        continue;
                    if (loot.isDestroy || loot.curPos.x < this._left || loot.curPos.x > this._right || loot.curPos.y < this._top || loot.curPos.y > this._bottom) {
                        ObjectPools.free(loot);
                        this._loots.splice(i, 1);
                        i = i <= 0 ? 0 : i - 1;
                        len = this._loots.length;
                    }
                    else {
                        loot.onDraw(diff, this._viewUI.graphics);
                    }
                }
                len = this._nums.length;
                for (i = 0; i < len; i++) {
                    var num = this._nums[i];
                    if (num.isDestroy) {
                        ObjectPools.free(num);
                        this._nums.splice(i, 1);
                        i = i <= 0 ? 0 : i - 1;
                        len = this._nums.length;
                    }
                    else {
                        num.onDraw(diff, this._viewUI.graphics);
                    }
                }
                this._fireMgr && this._fireMgr.update(diff);
            };
            BuyuLootPage.prototype.lootSort = function (a, b) {
                return b.type - a.type;
            };
            BuyuLootPage.prototype.close = function () {
                this._fireMgr && this._fireMgr.destroy();
                if (this._viewUI) {
                    Laya.timer.clearAll(this);
                    this._game.sceneObjectMgr.off(BuyuMgr.EVENT_KILL_FISH, this, this.onKillFish);
                }
                _super.prototype.close.call(this);
            };
            //金币上限
            BuyuLootPage.MAX_COIN = 15;
            //钻石上限
            BuyuLootPage.MAX_DIAMOND = 5;
            //每行显示的数量
            BuyuLootPage.MAX_PER_LINE = 5;
            return BuyuLootPage;
        }(game.gui.base.Page));
        page_1.BuyuLootPage = BuyuLootPage;
        //发射器
        var FireMgr = /** @class */ (function () {
            function FireMgr(game, caller, fireFun) {
                this.firePoint = new Vector2();
                this._diffPoint = new Vector2();
                this._timer = 0;
                this._game = game;
                this._caller = caller;
                this._fireFun = fireFun;
            }
            FireMgr.prototype.start = function (bornX, bornY) {
                this._timer = 500;
                this.firePoint.x = bornX;
                this.firePoint.y = bornY;
                this._startTime = this._game.sync.serverTimeBys * 1000 + 500;
            };
            FireMgr.prototype.update = function (diff) {
                var _this = this;
                var nowTime = this._game.sync.serverTimeBys * 1000;
                if (!this._startTime || nowTime - this._startTime > FireMgr.TOTAL_TIME)
                    return;
                this._timer += diff;
                if (this._timer >= FireMgr.INTERVAL) {
                    //随机本次发射数量
                    var count = MathU.randomRange(FireMgr.MIN_COUNT, FireMgr.MAX_COUNT);
                    for (var i = 0; i < count; i++) {
                        var bx = void 0, by = void 0, tx = void 0, ty = void 0;
                        var bornV = this.getRandomPoint(0, FireMgr.BORN_RADIUS);
                        bx = this._diffPoint.x;
                        by = this._diffPoint.y;
                        var targetV = this.getRandomPoint(3 * FireMgr.BORN_RADIUS, FireMgr.FLY_RADIUS);
                        tx = this._diffPoint.x;
                        ty = this._diffPoint.y;
                        if (this._caller && this._fireFun) {
                            var delay = MathU.randomRange(0, FireMgr.INTERVAL);
                            Laya.timer.once(delay, this, function (v0, v1, v2, v3) {
                                _this._caller[_this._fireFun](LootDrawtor.TYPE_COIN2, v0, v1, v2, v3);
                            }, [bx, by, tx, ty]);
                        }
                    }
                    this._timer = 0;
                }
            };
            /**
             * 距离发射点一定半径内，随机坐标点
             * @param startRadius
             * @param endRadius
             */
            FireMgr.prototype.getRandomPoint = function (startRadius, endRadius) {
                var randomRadius = MathU.randomRange(startRadius, endRadius);
                //随机角度
                var radius = startRadius + randomRadius;
                var randomAngle = MathU.randomRange(0, 360);
                var diffX = radius * Math.cos(randomAngle);
                var diffY = radius * Math.sin(randomAngle);
                this._diffPoint.x = this.firePoint.x + diffX;
                this._diffPoint.y = this.firePoint.y + diffY;
            };
            FireMgr.prototype.destroy = function () {
                Laya.timer.clearAll(this);
                this.firePoint = null;
            };
            //总发射时间
            FireMgr.TOTAL_TIME = 500;
            //发射间隔
            FireMgr.INTERVAL = 250;
            //出生随机半径
            FireMgr.BORN_RADIUS = 100;
            //扩散随机半径
            FireMgr.FLY_RADIUS = 800;
            //每次随机最小
            FireMgr.MIN_COUNT = 20;
            //每次随机最大
            FireMgr.MAX_COUNT = 40;
            return FireMgr;
        }());
        //战利品绘制
        var LootDrawtor = /** @class */ (function () {
            function LootDrawtor() {
                this.poolName = "LootDrawtor";
                this._curPos = new Vector2(); //当前位置
                this._bornPos = new Vector2(); //出生的位置
                this._targetPos = new Vector2(); //目标位置
                this._easeObjs = [];
                this._textures = [];
                this._guangTueW = 0;
                this._guangTueH = 0;
                /*动画总时间*/
                this._totalTime = 0;
                /*最后一次绘制到现在的时间*/
                this._runTime = 0;
                /*帧率*/
                this._frameRate = 12;
                /*帧时间 帧/ms*/
                this._frameTime = 0;
                /*帧数量*/
                this._frameCount = 0;
                /*是否循环 */
                this._loop = true;
                /*动画最后一帧索引*/
                this._frameLastIdx = 0;
                /**当前帧 */
                this._frameCurIdx = 0;
                this.isDestroy = false;
                //当前缩放
                this._scale = 1;
                this._alpha = 1;
                this._guangAlpha = 1;
                //随机帧数
                this._randomFrameCount = 0;
                this._assetLoader = new AssetsLoader();
            }
            Object.defineProperty(LootDrawtor.prototype, "curPos", {
                get: function () {
                    return this._curPos;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LootDrawtor.prototype, "isDropEnd", {
                // 是否结束
                get: function () {
                    return this._runTime > this._bornTimer;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LootDrawtor.prototype, "type", {
                get: function () {
                    return this._type;
                },
                enumerable: true,
                configurable: true
            });
            LootDrawtor.create = function (type, v1, v2, itemID) {
                var obj = ObjectPools.malloc(LootDrawtor);
                obj.create(type, v1, v2, itemID);
                return obj;
            };
            LootDrawtor.prototype.create = function (type, bornV, targetV, itemID, isMain) {
                if (isMain === void 0) { isMain = false; }
                this._type = type;
                this._bornPos.set(bornV);
                this._curPos.set(bornV);
                this._targetPos.set(targetV);
                this.isDestroy = false;
                this.initTexture(type, itemID);
            };
            LootDrawtor.prototype.initTexture = function (type, itemID) {
                if (type == LootDrawtor.TYPE_COIN || type == LootDrawtor.TYPE_COIN2) {
                    var idx = 1;
                    var texture = void 0;
                    do {
                        var url = Path.ui_atlas_effect + 'coin/' + idx + '.png';
                        texture = Loader.getRes(url);
                        if (texture) {
                            this._textures[idx - 1] = texture;
                            idx++;
                        }
                        else {
                            break;
                        }
                    } while (true);
                    this.calInfo();
                }
            };
            LootDrawtor.prototype.calInfo = function () {
                this._frameCount = this._textures.length;
                this._frameLastIdx = this._frameCount - 1;
                this._frameTime = 1000 / this._frameRate;
                this._totalTime = this._frameTime * this._frameCount;
                if (this._type == LootDrawtor.TYPE_COIN2) {
                    //随机一个初始和结束缩放 
                    //起始 0.2 - 0.8
                    this._scale = this._startScale = 0.1 + 0.2 * Math.random();
                    //结束 1 - 3
                    this._endScale = 1 + 2 * Math.random();
                    //随机帧数
                    this._randomFrameCount = MathU.randomRange(5, 10);
                    this.creatEff(LootDrawtor.TYPE_BORN2);
                }
                else {
                    this._scale = 0.6;
                    this.creatEff(LootDrawtor.TYPE_BORN);
                }
            };
            LootDrawtor.prototype.creatEff = function (type) {
                var duration;
                var sx, sy; //已上一阶段的差值
                var ex, ey;
                var st, et;
                var ss, es;
                var als, ale;
                this.clearEase();
                switch (type) {
                    case LootDrawtor.TYPE_BORN:
                        st = 0, et = 2 * this._frameTime; // 向上
                        sy = 0;
                        ey = -60;
                        this.createEase(st, et - st, sy, ey, laya.utils.Ease.linearNone, this.easeY);
                        st = et, et = 6 * this._frameTime; // 掉下来
                        sy = ey;
                        ey = 50;
                        this.createEase(st, et - st, sy, ey, laya.utils.Ease.bounceOut, this.easeY);
                        st = et, et = 15 * this._frameTime; //原地待命
                        this.createEase(st, et - st, 0, 0, laya.utils.Ease.linearNone, null);
                        st = et, et = 30 * this._frameTime; //飞到目的地
                        sx = 0, ex = this._targetPos.x - this._curPos.x;
                        sy = ey, ey = this._targetPos.y - this._curPos.y;
                        ss = this._scale;
                        es = 0.3;
                        this.createEase(st, et - st, sx, ex, laya.utils.Ease.backIn, this.easeX);
                        this.createEase(st, et - st, sy, ey, laya.utils.Ease.backIn, this.easeY);
                        this.createEase(st, et - st, ss, es, laya.utils.Ease.backIn, this.easeScale);
                        duration = 30 * this._frameTime;
                        break;
                    case LootDrawtor.TYPE_BORN2: //炸出金币
                        st = 0, et = this._randomFrameCount * this._frameTime; //飞到目的地
                        sx = 0, ex = this._targetPos.x - this._curPos.x;
                        sy = 0, ey = this._targetPos.y - this._curPos.y;
                        ss = 0, es = this._endScale - this._startScale;
                        this.createEase(st, et - st, sx, ex, laya.utils.Ease.linearNone, this.easeX);
                        this.createEase(st, et - st, sy, ey, laya.utils.Ease.linearNone, this.easeY);
                        this.createEase(st, et - st, ss, es, laya.utils.Ease.expoOut, this.easeScale);
                        //alpha
                        st = (this._randomFrameCount - 2) * this._frameTime;
                        et = this._randomFrameCount * this._frameTime;
                        als = 1, ale = 0;
                        this.createEase(st, et - st, als, ale, laya.utils.Ease.linearNone, this.easeAlpha);
                        duration = this._randomFrameCount * this._frameTime;
                        break;
                }
                this._bornTimer = duration;
            };
            LootDrawtor.prototype.easeX = function (v) {
                this._curPos.x = this._bornPos.x + v;
            };
            LootDrawtor.prototype.easeY = function (v) {
                this._curPos.y = this._bornPos.y + v;
            };
            LootDrawtor.prototype.easeScale = function (v) {
                this._scale = v;
            };
            LootDrawtor.prototype.easeAlpha = function (v) {
                this._alpha = v;
            };
            LootDrawtor.prototype.createEase = function (startTimer, duration, startValue, endValue, easeFunc, callbackFunc) {
                var easeObj = EaseObj.create(startTimer, duration, startValue, endValue, easeFunc, Handler.create(this, callbackFunc, null, false));
                this._easeObjs[this._easeObjs.length] = easeObj;
            };
            LootDrawtor.prototype.clearEase = function () {
                for (var _i = 0, _a = this._easeObjs; _i < _a.length; _i++) {
                    var obj = _a[_i];
                    ObjectPools.free(obj);
                }
                this._easeObjs.length = 0;
            };
            // 获得当前帧
            LootDrawtor.prototype.getCurrentIdx = function () {
                //如果不循环，并且时间超过了动画总长，则直接给出最后一张图x
                if (this._loop || (this._runTime < this._totalTime)) {
                    //获得无限完整动画循环之后剩余的时间
                    var frameYu = this._runTime % this._totalTime;
                    //定位到帧位置
                    var idx = Math.floor(frameYu / this._frameTime);
                    if (idx >= this._frameCount)
                        return this._frameLastIdx;
                    return idx;
                }
                else {
                    return this._frameLastIdx;
                }
            };
            LootDrawtor.prototype.onDraw = function (diff, g) {
                this._runTime += diff;
                if (!this._textures || this._textures.length <= 0)
                    return;
                //更新动作帧
                if (!this.isDropEnd)
                    this.showDrop();
                else {
                    //结束
                    this.isDestroy = true;
                }
                //特效
                if (this._guangTexture) {
                    var matrix = new Laya.Matrix();
                    matrix.tx = -this._guangTueW / 2;
                    matrix.ty = -this._guangTueH / 2;
                    matrix.rotate(this._runTime / 800 % 360);
                    matrix.scale(this._scale, this._scale);
                    matrix.tx += this._curPos.x;
                    matrix.ty += this._curPos.y;
                    if (this._runTime >= 20 * this._frameTime) {
                        this._guangAlpha -= 50 * diff / 1000;
                        this._guangAlpha = this._guangAlpha < 0 ? 0 : this._guangAlpha;
                    }
                    else {
                        this._guangAlpha = 0.5 + 0.5 * Math.abs(Math.sin(this._runTime / 150));
                    }
                    g.drawTexture(this._guangTexture, 0, 0, this._guangTueW, this._guangTueH, matrix, this._guangAlpha);
                }
                // 更新动画帧
                this._frameCurIdx = this.getCurrentIdx();
                var texture = this._textures[this._frameCurIdx];
                if (texture) {
                    // this._curPos.y += Math.sin(this._runTime / 150);
                    var width = void 0;
                    var height = void 0;
                    var tw = texture.sourceWidth;
                    var th = texture.sourceHeight;
                    width = tw;
                    height = th;
                    var matrix = new Laya.Matrix();
                    matrix.tx = -tw / 2;
                    matrix.ty = -th / 2;
                    matrix.scale(this._scale, this._scale);
                    matrix.tx += this._curPos.x;
                    matrix.ty += this._curPos.y;
                    g.drawTexture(texture, 0, 0, width, height, matrix, this._alpha);
                }
            };
            //掉落心跳
            LootDrawtor.prototype.showDrop = function () {
                if (this.isDropEnd) {
                    return;
                }
                var __runtime = this._runTime;
                for (var _i = 0, _a = this._easeObjs; _i < _a.length; _i++) {
                    var obj = _a[_i];
                    obj.update(__runtime);
                }
            };
            /**
             * 进池 （相当于对象dispose函数）
             */
            LootDrawtor.prototype.intoPool = function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
                this._easeObjs.length = 0;
                this._textures.length = 0;
                this._guangTexture = null;
                this._guangTueW = this._guangTueH = 0;
                this._scale = 1;
                this._alpha = 1;
                this._guangAlpha = 1;
                this._runTime = 0;
                if (this._assetLoader) {
                    this._assetLoader.clear();
                }
            };
            /**
             * 出池 （相当于对象初始化函数）
             */
            LootDrawtor.prototype.outPool = function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
            };
            ;
            //战利品类型
            LootDrawtor.TYPE_COIN = 0; //金币
            LootDrawtor.TYPE_COIN2 = 1; //金币新动画
            LootDrawtor.TYPE_BORN = 1; //第一种出生方式
            LootDrawtor.TYPE_BORN2 = 2; //第二种出生方式
            LootDrawtor.STAY_TIME = 600; //出生之后暂停的时间
            return LootDrawtor;
        }());
        //数字绘制
        var NumDrawtor = /** @class */ (function () {
            function NumDrawtor() {
                this.poolName = "NumDrawtor";
                this.isDestroy = false;
                this._bornPos = new Vector2();
                this._curPos = new Vector2();
                this._textures = [];
                this._easeObjs = [];
                this._runTime = 0;
                this._frameTime = 0;
                this._frameRate = 12;
                this._scale = 0;
                this._haveBaozha = false;
            }
            Object.defineProperty(NumDrawtor.prototype, "isShowEnd", {
                get: function () {
                    return this._runTime >= this._bornTime;
                },
                enumerable: true,
                configurable: true
            });
            NumDrawtor.create = function (type, num, v1, showBz) {
                if (showBz === void 0) { showBz = false; }
                var obj = ObjectPools.malloc(NumDrawtor);
                obj.create(type, num, v1, showBz);
                return obj;
            };
            NumDrawtor.prototype.create = function (type, num, bornV, showBz) {
                if (showBz === void 0) { showBz = false; }
                this._textures.length = 0;
                this._runTime = 0;
                this._scale = 0;
                this._bornPos.set(bornV);
                this._curPos.set(bornV);
                this.isDestroy = false;
                this.initTexture(type, num, showBz);
            };
            NumDrawtor.prototype.initTexture = function (type, num, showBz) {
                if (showBz === void 0) { showBz = false; }
                var isSelf = type == NumDrawtor.TYPE_SELF;
                this._haveBaozha = showBz;
                var texture;
                // if (showBz) {
                //     texture = Loader.getRes(Path.ui + 'tongyong/baozha.png');
                //     this._textures.push(texture);
                // }
                var addName = (isSelf ? "js_10" : "ys_10") + ".png";
                texture = Loader.getRes(Path.ui_atlas_effect + 'shuzi/' + addName);
                this._textures.push(texture);
                var upNum = Math.ceil(num);
                var numStr = "";
                var len = numStr.length;
                if (upNum == num) {
                    numStr = num.toString();
                }
                else {
                    numStr = EnumToString.getPointBackNum(num, 2).toString();
                }
                len = numStr.length;
                var name = "";
                for (var i = 0; i < len; i++) {
                    var char = numStr[i];
                    if (char == ".") {
                        name = (isSelf ? "js_" : "ys_") + "11";
                    }
                    else {
                        name = (isSelf ? "js_" : "ys_") + char;
                    }
                    var url = Path.ui_atlas_effect + 'shuzi/' + name + '.png';
                    texture = Loader.getRes(url);
                    if (texture) {
                        this._textures.push(texture);
                    }
                }
                // do {
                //     let idx = num % 10;
                //     num = Math.floor(num / 10);
                //     let name = (isSelf ? "js_" : "ys_") + idx;
                //     let url = Path.ui + 'shuzi/' + name + '.png';
                //     texture = Loader.getRes(url);
                //     if (texture) {
                //         this._textures.push(texture);
                //     }
                //     if (num == 0)
                //         break;
                // } while (true);
                this._frameTime = 1000 / this._frameRate;
                this.creatEff(NumDrawtor.TYPE_BORN);
            };
            NumDrawtor.prototype.creatEff = function (type) {
                var duration;
                var sx, sy; //已上一阶段的差值
                var ex, ey;
                var st, et;
                var ss, es;
                this.clearEase();
                switch (type) {
                    case NumDrawtor.TYPE_BORN:
                        st = 0, et = 8 * this._frameTime; // 出现
                        ss = 0;
                        es = 1.8;
                        this.createEase(st, et - st, ss, es, laya.utils.Ease.elasticOut, this.easeScale);
                        st = 16 * this._frameTime, et = 18 * this._frameTime; // 消失
                        ss = 1;
                        es = 0;
                        this.createEase(st, et - st, ss, es, laya.utils.Ease.linearNone, this.easeScale);
                        duration = 18 * this._frameTime;
                        break;
                }
                this._bornTime = duration;
            };
            NumDrawtor.prototype.easeScale = function (v) {
                this._scale = v;
            };
            NumDrawtor.prototype.createEase = function (startTimer, duration, startValue, endValue, easeFunc, callbackFunc) {
                var easeObj = EaseObj.create(startTimer, duration, startValue, endValue, easeFunc, Handler.create(this, callbackFunc, null, false));
                this._easeObjs[this._easeObjs.length] = easeObj;
            };
            NumDrawtor.prototype.clearEase = function () {
                for (var _i = 0, _a = this._easeObjs; _i < _a.length; _i++) {
                    var obj = _a[_i];
                    ObjectPools.free(obj);
                }
                this._easeObjs.length = 0;
            };
            //缩放心跳
            NumDrawtor.prototype.updateScale = function () {
                if (this.isShowEnd) {
                    return;
                }
                var __runtime = this._runTime;
                for (var _i = 0, _a = this._easeObjs; _i < _a.length; _i++) {
                    var obj = _a[_i];
                    obj.update(__runtime);
                }
            };
            NumDrawtor.prototype.onDraw = function (diff, g) {
                this._runTime += diff;
                if (!this.isShowEnd)
                    this.updateScale();
                else
                    this.isDestroy = true;
                var len = this._textures.length;
                var end = len;
                for (var i = 0; i < end; i++) {
                    var texture = this._textures[i];
                    if (!texture)
                        continue;
                    var index = i;
                    var tw = texture.sourceWidth;
                    var th = texture.sourceHeight;
                    var matrix = new Laya.Matrix();
                    matrix.tx = -tw / 2;
                    matrix.ty = -th / 2;
                    matrix.scale(this._scale, this._scale);
                    matrix.tx += this._curPos.x + 50 * index + (this._haveBaozha && i == 0 ? 150 : 0);
                    matrix.ty += this._curPos.y;
                    g.drawTexture(texture, 0, 0, tw, th, matrix);
                }
            };
            /**
             * 进池 （相当于对象dispose函数）
             */
            NumDrawtor.prototype.intoPool = function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
                this._easeObjs.length = 0;
                this._textures.length = 0;
                this._runTime = 0;
                this._scale = 0;
            };
            /**
             * 出池 （相当于对象初始化函数）
             */
            NumDrawtor.prototype.outPool = function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
            };
            ;
            NumDrawtor.TYPE_SELF = 0; //自己
            NumDrawtor.TYPE_OTHER = 1; //他人
            NumDrawtor.TYPE_BORN = 0;
            return NumDrawtor;
        }());
        page_1.NumDrawtor = NumDrawtor;
        var EaseObj = /** @class */ (function () {
            function EaseObj() {
                this.poolName = 'EaseObj';
            }
            /**
             * 进池 （相当于对象dispose函数）
             */
            EaseObj.prototype.intoPool = function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
                this.reset();
            };
            /**
             * 出池 （相当于对象初始化函数）
             */
            EaseObj.prototype.outPool = function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
            };
            ;
            EaseObj.create = function (startTimer, duration, startValue, endValue, easeFunc, hander) {
                var obj = ObjectPools.malloc(EaseObj);
                obj.create(startTimer, duration, startValue, endValue, easeFunc, hander);
                return obj;
            };
            EaseObj.prototype.create = function (startTimer, duration, startValue, endValue, easeFunc, hander) {
                this._startTimer = startTimer;
                this._duration = duration;
                this._endTime = this._startTimer + this._duration;
                this._startValue = startValue;
                this._changeValue = endValue - startValue;
                this._easeFunc = easeFunc;
                this._hander = hander;
            };
            EaseObj.prototype.update = function (runtime) {
                if (!this._easeFunc)
                    return;
                if (runtime < this._startTimer) {
                    // 还没开始
                    return;
                }
                if (runtime > this._endTime) {
                    // 结束了
                    return;
                }
                var v = this._easeFunc(runtime - this._startTimer, this._startValue, this._changeValue, this._duration);
                this._hander.runWith(v);
            };
            EaseObj.prototype.reset = function () {
                this._easeFunc = null;
                if (this._hander) {
                    this._hander.recover();
                    this._hander = null;
                }
            };
            return EaseObj;
        }());
    })(page = gamebuyu.page || (gamebuyu.page = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=BuyuLootPage.js.map