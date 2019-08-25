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
* name 捕鱼剧情
*/
var gamebuyu;
(function (gamebuyu) {
    var story;
    (function (story) {
        var BuyuStory = /** @class */ (function (_super) {
            __extends(BuyuStory, _super);
            function BuyuStory(v, mapid, maplv) {
                var _this = _super.call(this, v, mapid, maplv) || this;
                // 开火返回
                _this._bullets = [];
                _this._firePosV0 = new Vector2();
                _this._firePosV1 = new Vector2();
                _this._tempStartFireMsg = new hanlder.s2c_start_fire_result();
                _this.init();
                return _this;
            }
            Object.defineProperty(BuyuStory.prototype, "buyuMgr", {
                get: function () {
                    return this._buyuMgr;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BuyuStory.prototype, "gridMgr", {
                /**
                 * 网格管理器
                 */
                get: function () {
                    return this._gridMgr;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BuyuStory.prototype, "mapUrl", {
                //地图对应资源id
                get: function () {
                    return this.mapid + this.maplv;
                },
                enumerable: true,
                configurable: true
            });
            //初始化
            BuyuStory.prototype.init = function () {
                if (!this._buyuMgr) {
                    this._buyuMgr = new BuyuMgr(this._game);
                }
                if (!this._gridMgr) {
                    this._gridMgr = new CollideManager(this._game.sceneObjectMgr);
                }
                if (!this._layerList) {
                    this._layerList = [];
                    this._layerList.push(new Layer());
                    this._layerList.push(new Layer());
                    this._layerList.push(new Layer());
                    this._layerList.push(new Layer());
                    this._layerList.push(new Layer());
                    this._game.mainScene && this._game.mainScene.setLayerConfigArr(this._layerList);
                }
                // this._game.mainScene.setLayerConfigArr([
                // 	"new game.scene.Layer()",
                // 	"new game.scene.Layer()",
                // 	"new game.scene.Layer()",
                // 	"new game.scene.Layer()",
                // 	"new game.scene.Layer(false,0.8,Laya.BlendMode.ADD)",
                // ]);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
            };
            BuyuStory.prototype.resize = function (w, h) {
                this._buyuMgr && this._buyuMgr.resize(w, h);
            };
            //进入地图回调
            BuyuStory.prototype.onIntoNewMap = function (info) {
                if (!info || !info.id)
                    return;
                this._game.network.addHanlder(Protocols.SMSG_START_FIRE_RESULT, this, this.onStartFireResult);
                this._game.network.addHanlder(Protocols.SMSG_DIANYU_RESULT, this, this.onDianyuResult);
                this._game.uiRoot.closeAll();
                this._game.uiRoot.HUD.open(BuyuPageDef.PAGE_BUYU_MAIN);
                this._game.uiRoot.HUD.open(BuyuPageDef.PAGE_LOOT);
            };
            //发送进入地图协议
            BuyuStory.prototype.enterMap = function () {
                //各种判断
                this._game.network.call_match_game(this._mapid, this.maplv);
                return true;
            };
            //视图对象创建
            BuyuStory.prototype.inLook = function (obj, isFollow) {
                if (isFollow === void 0) { isFollow = false; }
                var avatar;
                if (obj instanceof Unit && obj.type == UnitField.TYPE_ID_FISH) {
                    var fish = this._buyuMgr.getFishByOid(obj.oid);
                    if (fish) {
                        avatar = new AvatarFish(this._game, fish);
                    }
                }
                else if (obj instanceof Bullet) {
                    avatar = new AvatarBullet(this._game, obj);
                }
                if (avatar)
                    return avatar;
                return _super.prototype.inLook.call(this, obj, isFollow);
            };
            //更新视图对象
            BuyuStory.prototype.updateInLook = function (obj) {
                if (!this._game.mainScene)
                    return;
                if (obj instanceof Unit && obj.type == UnitField.TYPE_ID_FISH) {
                    //鱼的剔除判断
                    var fish = this._buyuMgr.getFishByOid(obj.oid);
                    if (fish) {
                        fish.lookInCamera = this._game.mainScene.camera.lookIn(fish.pos);
                        fish.lookInCamera2 = false;
                        if (fish.lookInCamera) {
                            fish.lookInCamera2 = this._game.mainScene.camera.lookIn2(fish.pos);
                            fish.visible = true;
                            return SceneRoot.INLOOK;
                        }
                        else {
                            fish.visible = false;
                            return SceneRoot.OUTLOOK;
                        }
                    }
                }
                return _super.prototype.updateInLook.call(this, obj);
            };
            //创建假精灵
            BuyuStory.prototype.createofflineUnit = function () {
            };
            //离开地图
            BuyuStory.prototype.leavelMap = function () {
                //各种判断
                this._game.network.removeHanlder(Protocols.SMSG_START_FIRE_RESULT, this, this.onStartFireResult);
                this._game.network.removeHanlder(Protocols.SMSG_DIANYU_RESULT, this, this.onDianyuResult);
                this._game.network.call_leave_game();
                return true;
            };
            BuyuStory.prototype.clear = function () {
                this._game.network.removeHanlder(Protocols.SMSG_START_FIRE_RESULT, this, this.onStartFireResult);
                this._game.network.removeHanlder(Protocols.SMSG_DIANYU_RESULT, this, this.onDianyuResult);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                if (this._buyuMgr) {
                    this._buyuMgr.clear();
                    this._buyuMgr = null;
                }
                if (this._gridMgr) {
                    this._gridMgr.clear();
                    this._gridMgr = null;
                }
                if (this._layerList) {
                    var len = this._layerList && this._layerList.length > 0 ? this._layerList.length : 0;
                    for (var index = 0; index < len; index++) {
                        var layer = this._layerList[index];
                        if (layer) {
                            layer.removeSelf();
                            layer.destroy();
                            layer = null;
                        }
                    }
                    this._layerList = null;
                }
                this._game.mainScene.setLayerConfigArr();
                this._game.sceneObjectMgr.clearOfflineObject();
                this._bullets.length = 0;
                this._firePosV0 = null;
                this._firePosV1 = null;
            };
            BuyuStory.prototype.update = function (diff) {
                this._buyuMgr && this._buyuMgr.update(diff);
                this._gridMgr && this._gridMgr.update(diff);
            };
            /**
             * 开火
             * @param toward 朝向
             * @param target 锁定目标
             * @param isSend 是否发协议
             * @param isBoom 是否是特殊子弹 0普通子弹 1特殊子弹 2划鱼
             */
            BuyuStory.prototype.startFire = function (player, toward, target, isSend, isBoom) {
                if (isSend === void 0) { isSend = true; }
                if (isBoom === void 0) { isBoom = 0; }
                if (isSend) {
                    if (player.isRobot) {
                        //如果没有鱼 不发
                        if (player.unit && this._buyuMgr && this._buyuMgr.liveFishCount > 0)
                            !this._game.isLockGame && this._game.network.call_robot_start_fire(player.unit.oid, toward, target);
                        return;
                    }
                    else {
                        !this._game.isLockGame && this._game.network.call_start_fire(toward, target, isBoom);
                    }
                }
                this._tempStartFireMsg.toward = toward;
                this._tempStartFireMsg.oid = player.unit.oid;
                this._tempStartFireMsg.target_oid = target;
                this._tempStartFireMsg.is_boom = isBoom;
                this.onStartFireResult(0, this._tempStartFireMsg, true);
            };
            BuyuStory.prototype.onStartFireResult = function (optcode, msg, fromClient) {
                if (!this._buyuMgr)
                    return;
                var objectMgr = this._game.sceneObjectMgr;
                var isSelf = objectMgr.mainUnit && objectMgr.mainUnit.oid == msg.oid;
                if (!fromClient && isSelf) {
                    // 主玩家的不管客户端优先模拟
                    return;
                }
                //帧率低 就只显示自己的
                var player = isSelf ? this._buyuMgr.mainPlayer : this._buyuMgr.getPlayeryOid(msg.oid);
                if (player instanceof BuyuPlayer) {
                    // 炮台位置
                    var posNum = player.position;
                    var pos = SceneFishRes.getPaoPos(posNum);
                    this._firePosV0.x = pos.x;
                    this._firePosV0.y = pos.y;
                    var bullet = objectMgr.createOfflineObject(Bullet.TYPE, Bullet);
                    bullet.canColloder = msg.target_oid == 0; // 全部客户端碰撞（锁定的不参与碰撞）
                    bullet.pos.radius = 16;
                    var rate = player.fireLevel;
                    bullet.skin = SceneFishRes.getBulletSkin(rate);
                    bullet.hitSkin = SceneFishRes.getHitEffect(rate);
                    Vector2.temp.fromToward(msg.toward);
                    this._firePosV1.x = Vector2.temp.x;
                    this._firePosV1.y = Vector2.temp.y;
                    player.ori = this._firePosV1;
                    if (posNum > 2) {
                        player.ori.y = -player.ori.y;
                    }
                    Vector2.temp.mul(SceneFishRes.PAO_LONG);
                    this._firePosV0.add(Vector2.temp);
                    bullet.init(msg.oid, this._firePosV0.x, this._firePosV0.y, this._firePosV1, msg.target_oid);
                    this._bullets.push(bullet);
                    player.event(BuyuPlayer.FIRE_IT);
                }
            };
            // 电鱼结果
            BuyuStory.prototype.onDianyuResult = function (optcode, msg) {
                logd("==================== 电鱼结果！！！！");
                this._game instanceof Game && this._buyuMgr && this._buyuMgr.onDianyuResult(msg);
            };
            BuyuStory.MAP_STATE_NOMAL = 0; //初始化
            BuyuStory.MAP_STATE_BEGIN = 1; //开始
            BuyuStory.MAP_STATE_END = 2; //结束
            return BuyuStory;
        }(gamecomponent.story.StoryFishBase));
        story.BuyuStory = BuyuStory;
    })(story = gamebuyu.story || (gamebuyu.story = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=BuyuStory.js.map