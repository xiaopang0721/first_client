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
* 捕鱼数据管理器
*/
var gamebuyu;
(function (gamebuyu) {
    var manager;
    (function (manager) {
        var BuyuMgr = /** @class */ (function (_super) {
            __extends(BuyuMgr, _super);
            function BuyuMgr(v) {
                var _this = _super.call(this) || this;
                //活着的鱼个数
                _this.liveFishCount = 0;
                _this._game = v;
                _this._fishList = {};
                _this._buyuPlayerList = {};
                //炮台逻辑位置初始化
                SceneFishRes.PAO_POSDATA = {
                    1: new Vector2(450, 685),
                    2: new Vector2(830, 685),
                    3: new Vector2(450, 35),
                    4: new Vector2(830, 35),
                };
                _this._lightningBallSprite = new Sprite();
                var texture = Loader.getRes(Path.scene + 'lightning/shandian.png');
                if (_this._game.mainScene) {
                    if (texture) {
                        var img = texture.bitmap;
                        img && (img.enableMerageInAtlas = false);
                        _this._lightningSprite = new gamebuyu.render.custom.LightningSprite(texture, _this._game.mainScene.camera, _this._lightningBallSprite);
                        _this._lightningSprite.blendMode = Laya.BlendMode.ADD;
                        _this._lightningSprite.speedX = 0;
                        _this._lightningSprite.speedY = -1.5;
                        _this._lightningSprite.unitHeight = texture.height;
                        _this._lightningSprite.pivot(.5, 0);
                        _this._game.mainScene.addChild(_this._lightningSprite);
                        _this._game.mainScene.addChild(_this._lightningBallSprite);
                    }
                }
                _this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, _this, _this.checkAddBuyuPlayer);
                _this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, _this, _this.checkRemoveBuyuUnit);
                _this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE, _this, _this.updateMainBuyuPlayer);
                _this._game.sceneObjectMgr.on(BuyuPlayer.POSITION_CHANGED, _this, _this.onUpdateMainPos);
                var unitArr = _this._game.sceneObjectMgr.unitDic;
                for (var key in unitArr) {
                    var unit = unitArr[key];
                    _this.checkAddBuyuPlayer(unit);
                }
                _this.resize(_this._game.clientWidth, _this._game.clientHeight);
                //主玩家
                _this.updateMainBuyuPlayer(_this._game.sceneObjectMgr.mainUnit);
                return _this;
            }
            Object.defineProperty(BuyuMgr.prototype, "buyuPlayerList", {
                get: function () {
                    return this._buyuPlayerList;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BuyuMgr.prototype, "fishList", {
                get: function () {
                    return this._fishList;
                },
                enumerable: true,
                configurable: true
            });
            BuyuMgr.prototype.resize = function (w, h) {
                //重置炮台位置
                var ch = (h - main.heightDesginPixelw) / 2;
                var cw = (w - main.widthDesginPixelw) / 2;
                // logd("scene resize",cw,ch,clientWidth,clientHeight,this.scaleX,this.scaleY)
                for (var key in SceneFishRes.PAO_POSDATA) {
                    var pos = SceneFishRes.PAO_POSDATA[key];
                    var idx = parseInt(key);
                    if (idx <= 2) {
                        pos.y = main.heightDesginPixelw + ch - 30;
                    }
                    else {
                        pos.y = -ch + 30;
                    }
                    SceneFishRes.PAO_POSDATA[key] = pos;
                }
                logd("BuyuMgr.resize");
            };
            BuyuMgr.prototype.update = function (diff) {
                this.liveFishCount = 0;
                for (var key in this._fishList) {
                    var fish = this._fishList[key];
                    fish && fish.update(diff);
                    if (fish && fish.unit && fish.lookInCamera2 && !fish.isDied)
                        this.liveFishCount++;
                }
                // console.log("=======鱼",this.liveFishCount)
                for (var key in this._buyuPlayerList) {
                    var player = this._buyuPlayerList[key];
                    player && player.update(diff);
                }
            };
            BuyuMgr.prototype.updateMainBuyuPlayer = function (unit) {
                if (!unit)
                    return;
                //主玩家
                this.mainPlayer = this.getBuyuPlayerByUnit(unit);
                this.onUpdateMainPos();
                this.event(BuyuMgr.EVENT_UPDATE_MAIN_PLAYER);
            };
            BuyuMgr.prototype.onUpdateMainPos = function () {
                if (!this._game.mainScene || !this.mainPlayer)
                    return;
                var idx = this.mainPlayer.position;
                this._game.mainScene.cameraFocus.set(SceneFishRes.getPaoPos(idx));
                isDebug && console.assert(idx < 5 && idx > 0, "Online.onReady 主玩家位置异常：" + idx);
                this._game.mainScene.camera.flipV = idx > 2;
                // logd("=======onUpdateMainPos", idx, this._game.mainScene.camera.flipV)
                this.event(BuyuMgr.EVENT_CAMER_FZ);
            };
            /**
             * 检查Unit是否是BuyuPlayer是的话加入数组
             * @param unit 精灵
             */
            BuyuMgr.prototype.checkAddBuyuPlayer = function (unit) {
                unit.on(Unit.EVENT_TYPE_CHANGED, this, this.addBuyuUnit);
                this.addBuyuUnit(unit);
            };
            BuyuMgr.prototype.addBuyuUnit = function (unit) {
                var type = unit.type;
                // logd("addBuyuPlayer type=",type)
                if (type > 0) {
                    unit.off(Unit.EVENT_TYPE_CHANGED, this, this.addBuyuUnit);
                }
                if (type == Unit.TYPE_ID_PLAYER || type == Unit.TYPE_ID_ROBOT) {
                    //玩家
                    var player = new BuyuPlayer(unit, this._game.sceneObjectMgr);
                    this._buyuPlayerList[unit.oid] = player;
                    this.event(BuyuMgr.EVENT_ADD_PLAYER, player);
                }
                else if (type == Unit.TYPE_ID_FISH) {
                    var fish = new Fish(unit, this._game.sceneObjectMgr);
                    this._fishList[unit.oid] = fish;
                }
            };
            /**
             * 检查Unit是否是BuyuPlayer是的话就从数据里剔除
             * @param unit 精灵
             */
            BuyuMgr.prototype.checkRemoveBuyuUnit = function (unit) {
                var type = unit.type;
                unit.off(Unit.EVENT_TYPE_CHANGED, this, this.addBuyuUnit);
                if (type == Unit.TYPE_ID_PLAYER || type == Unit.TYPE_ID_ROBOT) {
                    var player = this._buyuPlayerList[unit.oid];
                    if (player) {
                        player.clear();
                        delete this._buyuPlayerList[unit.oid];
                        this.event(BuyuMgr.EVENT_REMOVE_PLAYER, player);
                    }
                }
                else if (type == Unit.TYPE_ID_FISH) {
                    var fish = this._fishList[unit.oid];
                    if (fish) {
                        fish.clear();
                        delete this._fishList[unit.oid];
                    }
                }
            };
            /**
             * 通过unit获取玩家精灵
             * @param unit
             */
            BuyuMgr.prototype.getBuyuPlayerByUnit = function (unit) {
                if (!unit)
                    return null;
                var player = this._buyuPlayerList[unit.oid];
                if (player && player.unit) {
                    return player;
                }
                return null;
            };
            /**
             * 通过oid拿到鱼对象
             * @param oid
             */
            BuyuMgr.prototype.getFishByOid = function (oid) {
                var fish = this._fishList[oid];
                if (fish && fish.unit) {
                    return fish;
                }
                return null;
            };
            BuyuMgr.prototype.getPlayeryOid = function (oid) {
                var player = this._buyuPlayerList[oid];
                if (player && player.unit) {
                    return player;
                }
                return null;
            };
            /**
             * 获取倍数最大的鱼
             */
            BuyuMgr.prototype.getMaxOrderFishOid = function () {
                var maxRate = 0;
                var oid;
                for (var key in this._fishList) {
                    var fish = this._fishList[key];
                    var temp = fish.fishTemp ? fish.fishTemp : Template.getFishTempById(fish.entryid);
                    if (!temp)
                        continue;
                    if (!this._game.mainScene.checkInScene(fish.pos.x, fish.pos.y) || !this.checkToward(fish.pos.x, fish.pos.y))
                        continue;
                    var rateAvg = (temp.rate_range[0] + temp.rate_range[1]) / 2;
                    if (rateAvg > maxRate && fish.unit) {
                        oid = fish.unit.oid;
                        maxRate = rateAvg;
                    }
                }
                return oid;
            };
            /**
             * 检查逻辑坐标和主玩家的朝向是否符合标准
             */
            BuyuMgr.prototype.checkToward = function (x, y) {
                var mainPlayer = this.mainPlayer;
                if (mainPlayer) {
                    var posNum = mainPlayer.position;
                    var playerV = SceneFishRes.getPaoPos(posNum);
                    Vector2.temp.x = x - playerV.x;
                    Vector2.temp.y = y - playerV.y;
                    var toward = Vector2.temp.getToward();
                    var min = posNum <= 2 ? SceneFishRes.MIN_TOWARD : Vector2.TowardCount - SceneFishRes.MAX_TOWARD;
                    var max = posNum <= 2 ? SceneFishRes.MAX_TOWARD : Vector2.TowardCount - SceneFishRes.MIN_TOWARD;
                    return toward >= min && toward <= max;
                }
            };
            Object.defineProperty(BuyuMgr.prototype, "nowServerTime", {
                get: function () {
                    return this._game.sync.serverTimeBys;
                },
                enumerable: true,
                configurable: true
            });
            // 电鱼结果
            BuyuMgr.prototype.onDianyuResult = function (msg) {
                var dfish = this.getFishByOid(msg.fish_id);
                if (!dfish) {
                    return;
                }
                var count = 0;
                for (var _i = 0, _a = msg.dead_fishs; _i < _a.length; _i++) {
                    var id = _a[_i];
                    var tfish = this.getFishByOid(id);
                    if (tfish) {
                        this._lightningSprite && this._lightningSprite.add(dfish.pos, tfish.pos, count * 80);
                        count++;
                    }
                }
            };
            // findAvatarByOid(oid: number): gamecomponent.scene.AvatarBase {
            // 	let avatars = this._game.mainScene.avatarLayer.avatars;
            // 	if (oid) {
            // 		let len: number = avatars.length;
            // 		for (let i = 1; i < len; i++) {
            // 			let avatar = avatars[i]
            // 			if (avatar.oid == oid) {
            // 				return avatar;
            // 			}
            // 		}
            // 	}
            // 	return null;
            // }
            BuyuMgr.prototype.clear = function () {
                logd("=====buyumgr clear");
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.checkAddBuyuPlayer);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.checkRemoveBuyuUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE, this, this.updateMainBuyuPlayer);
                this._game.sceneObjectMgr.off(BuyuPlayer.POSITION_CHANGED, this, this.onUpdateMainPos);
                this._game.mainScene.camera.flipV = false;
                for (var key in this._buyuPlayerList) {
                    var player = this._buyuPlayerList[key];
                    if (player) {
                        player.unit && player.unit.off(Unit.EVENT_TYPE_CHANGED, this, this.addBuyuUnit);
                        player.clear();
                        player = null;
                    }
                }
                this._buyuPlayerList = null;
                for (var key in this._fishList) {
                    var fish = this._fishList[key];
                    if (fish) {
                        fish.unit && fish.unit.off(Unit.EVENT_TYPE_CHANGED, this, this.addBuyuUnit);
                        fish.clear();
                        fish = null;
                    }
                }
                this._fishList = null;
                if (this._lightningSprite) {
                    this._lightningSprite.removeSelf();
                    this._lightningSprite.destroy();
                    this._lightningSprite = null;
                }
                if (this._lightningBallSprite) {
                    this._lightningBallSprite.removeSelf();
                    this._lightningBallSprite.destroy();
                    this._lightningBallSprite = null;
                }
                Laya.timer.clearAll(this);
                Laya.Tween.clearAll(this);
                this.offAll();
            };
            BuyuMgr.EVENT_ADD_PLAYER = "BuyuMgr.add_player";
            BuyuMgr.EVENT_REMOVE_PLAYER = "BuyuMgr.remove_player";
            BuyuMgr.EVENT_UPDATE_MAIN_PLAYER = "BuyuMgr.update_main_player";
            BuyuMgr.EVENT_KILL_FISH = "BuyuMgr.kill_fish";
            BuyuMgr.EVENT_CAMER_FZ = "BuyuMgr.camer_fz";
            return BuyuMgr;
        }(Laya.EventDispatcher));
        manager.BuyuMgr = BuyuMgr;
    })(manager = gamebuyu.manager || (gamebuyu.manager = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=BuyuMgr.js.map