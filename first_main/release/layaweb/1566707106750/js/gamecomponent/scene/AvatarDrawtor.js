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
var gamecomponent;
(function (gamecomponent) {
    var scene;
    (function (scene) {
        var AvatarDrawtor = /** @class */ (function (_super) {
            __extends(AvatarDrawtor, _super);
            function AvatarDrawtor(v) {
                var _this = _super.call(this, v.game) || this;
                _this.avatarInited = false;
                _this._layerArr = [];
                _this._layerGraghics = [];
                _this._updateRunTime = 0;
                // 进入视野队列
                _this._inLookQueue = [];
                _this._scene = v;
                _this.mouseEnabled = false;
                _this._isUiShow = _this._scene instanceof gamecomponent.UIShowRoot;
                // 通用层
                _this._commonLayer = new Sprite();
                _this._commonLayer.mouseEnabled = false;
                _this.addChild(_this._commonLayer);
                //avatar集合
                _this._avatars = new Array();
                return _this;
            }
            Object.defineProperty(AvatarDrawtor.prototype, "avatars", {
                get: function () {
                    return this._avatars;
                },
                enumerable: true,
                configurable: true
            });
            AvatarDrawtor.prototype.setLayerConfigArr = function (values) {
                this._layerArr = values;
                var len = this._layerArr && this._layerArr.length ? this._layerArr.length : [];
                if (len > 0) {
                    for (var index = 0; index < len; index++) {
                        var layer = this._layerArr[index];
                        if (layer && !layer.parent) {
                            this._layerGraghics[index] = layer.graphics;
                            this.addChildAt(layer, index + 1);
                        }
                    }
                    this._isMultiLayer = true;
                }
                else {
                    for (var index = 0; index < len; index++) {
                        var layer = this._layerArr[index];
                        if (layer) {
                            layer.removeSelf();
                            layer.destroy();
                            layer = null;
                        }
                    }
                    this._layerArr = null;
                    this._isMultiLayer = false;
                }
            };
            // 更新位置 （更新摄像机之前需要先调用）
            AvatarDrawtor.prototype.updateAvatarPostion = function (diff) {
                var len = this._avatars.length;
                for (var i = 0; i < len; i++) {
                    !this._avatars[i].hasClear && this._avatars[i].update(diff);
                }
            };
            // 心跳
            AvatarDrawtor.prototype.updateInLook = function (diff) {
                var _this = this;
                this._updateRunTime += diff;
                if (this._updateRunTime < 200)
                    return;
                this._updateRunTime = 0;
                var objMgr = this._game.sceneGame.sceneObjectMgr;
                objMgr.ForEachObject(function (obj) {
                    if (obj instanceof PlayerData || obj instanceof GlobalData || obj instanceof MapInfo)
                        return; //这些都不处理视图
                    if (_this._isUiShow && (obj instanceof gamecomponent.object.ActionBase) && !obj.isUIShow)
                        return; //ui上层 但是不是UI上层显示的 不处理
                    if (obj instanceof Unit && _this._scene.mapid != "buyu")
                        return; //除了捕鱼 其他精灵对象不需要做视图处理
                    var story = _this._game.sceneGame.sceneObjectMgr.story;
                    if (story) {
                        var str = story.updateInLook(obj);
                        if (str == gamecomponent.SceneRoot.INLOOK) {
                            _this.inLook(obj);
                        }
                        else if (str == gamecomponent.SceneRoot.OUTLOOK) {
                            _this.outLook(obj, false);
                        }
                        else {
                            _this.inLook(obj);
                        }
                    }
                });
            };
            AvatarDrawtor.prototype.update = function (diff) {
                var len = this._avatars.length;
                for (var i = 0; i < len; i++) {
                    !this._avatars[i].hasClear && this._avatars[i].update(diff);
                }
            };
            /**
             * 对象在视野内
             */
            AvatarDrawtor.prototype.inLook = function (obj) {
                if (obj.userData && this._avatars.indexOf(obj.userData) != -1) {
                    return;
                }
                if (obj.isFocus) {
                    // 焦点对象直接初始化
                    this.__inLook(obj, true);
                }
                else {
                    // 其他形象进入队列
                    var idx = this._inLookQueue.indexOf(obj);
                    if (idx == -1) {
                        this._inLookQueue[this._inLookQueue.length] = obj;
                    }
                }
            };
            AvatarDrawtor.prototype.updateInLookQueue = function () {
                var inLookBatchCount = 4;
                var count = 0;
                while (count < inLookBatchCount && this._inLookQueue.length) {
                    count++;
                    var obj = this._inLookQueue.shift();
                    this.__inLook(obj);
                }
            };
            AvatarDrawtor.prototype.__inLook = function (obj, isFollow) {
                if (isFollow === void 0) { isFollow = false; }
                var avatar = obj.userData;
                if (!avatar) {
                    if (obj instanceof gamecomponent.object.PlayingPuKeCard) {
                        avatar = new scene.AvatarCard(this._game, obj);
                    }
                    else if (obj instanceof gamecomponent.object.PlayingChip) {
                        avatar = new scene.AvatarChip(this._game, obj);
                    }
                    else if (obj instanceof gamecomponent.object.PlayingGuPai) {
                        avatar = new scene.AvatarGuPai(this._game, obj);
                    }
                    else if (obj instanceof gamecomponent.object.PlayingMahjong) {
                        avatar = new scene.AvatarMahjong(this._game, obj);
                    }
                    else if (obj instanceof gamecomponent.object.PlayingPoker) {
                        avatar = new scene.AvatarPoker(this._game, obj);
                    }
                    else {
                        var story_1 = this._game.sceneGame.sceneObjectMgr.story;
                        if (story_1) {
                            avatar = story_1.inLook(obj, isFollow);
                        }
                    }
                    obj.userData = avatar;
                }
                if (avatar) {
                    this.join(avatar);
                    //直接跟随玩家的真实坐标
                    if (isFollow) {
                        this._scene.camera.focusPos.x = avatar.lookPos.x;
                        this._scene.camera.focusPos.y = avatar.lookPos.y;
                    }
                }
            };
            /**
             * 对象不在视野内
             */
            AvatarDrawtor.prototype.outLook = function (obj, checkNow) {
                var idx = this._inLookQueue.indexOf(obj);
                if (idx != -1) {
                    this._inLookQueue.splice(idx, 1);
                }
                var avatar = obj.userData;
                if (avatar) {
                    this.leave(avatar, checkNow);
                    if (this._scene.camera.isFocus(avatar.pos)) {
                        this._scene.camera.focusPos.x = avatar.pos.x;
                        this._scene.camera.focusPos.y = avatar.pos.y;
                    }
                    obj.userData = null;
                    obj = obj;
                    if (obj) {
                        obj.isCanClear = true;
                        obj.clear();
                        obj = null;
                    }
                }
            };
            /**
             * 形象加入
             */
            AvatarDrawtor.prototype.join = function (avatar) {
                // logd("roc.scene.AvatarDrawtor.join[", avatar.name, ",", avatar.guid, "]");
                if (this._avatars.indexOf(avatar) == -1) {
                    this._avatars[this._avatars.length] = avatar;
                }
            };
            /**
             * 形象离开
             */
            AvatarDrawtor.prototype.leave = function (avatar, checkNow) {
                // logd("roc.scene.AvatarDrawtor.leave[", avatar.name, ",", avatar.guid, "]");
                //Avatar从列表中删除
                var idx = this._avatars.indexOf(avatar);
                if (idx >= 0) {
                    this._avatars.splice(idx, 1);
                }
                avatar.clear(checkNow);
                avatar = null;
            };
            AvatarDrawtor.prototype.onDraw = function (diff) {
                //avatar渲染器心跳，主要为了剔除
                this.updateInLook(diff);
                this.updateInLookQueue();
                if (this._isMultiLayer) {
                    for (var _i = 0, _a = this._layerGraghics; _i < _a.length; _i++) {
                        var layer = _a[_i];
                        layer.clear();
                    }
                }
                else {
                    var bG = this._commonLayer.graphics;
                    //清理画布
                    bG.clear();
                }
                //深度排序,绘制
                this._avatars.sort(this.worldObjectDeepCmp);
                var len = this._avatars.length;
                for (var i = 0; i < len; i++) {
                    //运算位置
                    var avatar = this._avatars[i];
                    if (!avatar.visible || avatar.hasClear)
                        continue;
                    //绘制
                    if (this._isMultiLayer) {
                        avatar.onMultiDraw(diff, this._layerGraghics, this._scene);
                    }
                    else {
                        avatar.onDraw(diff, this._commonLayer.graphics, this._scene);
                    }
                }
            };
            /*深度比较排序*/
            AvatarDrawtor.prototype.worldObjectDeepCmp = function (a, b) {
                if (b.sortScore != a.sortScore) {
                    return b.sortScore - a.sortScore;
                }
                return b.oid - a.oid;
            };
            // 绘制边框
            AvatarDrawtor.prototype.drawBorder = function (g) {
                var color = "#000000";
                var camera = this._scene.camera;
                if (camera.bufferOffsetX > 0) {
                    g.drawRect(0, 0, camera.bufferOffsetX, camera.height, color);
                }
                var w = camera.width - camera.bufferOffsetX - camera.bufferWidth;
                if (w > 0) {
                    g.drawRect(camera.bufferOffsetX + camera.bufferWidth, 0, w, camera.height, color);
                }
                if (camera.bufferOffsetY > 0) {
                    g.drawRect(0, 0, camera.width, camera.bufferOffsetY, color);
                }
                var h = camera.height - camera.bufferOffsetY - camera.bufferHeight;
                if (h > 0) {
                    g.drawRect(0, camera.bufferOffsetY + camera.bufferHeight, camera.width, h, color);
                }
            };
            //设置窗口大小
            AvatarDrawtor.prototype.resize = function (clientWidth, clientHeight) {
                _super.prototype.resize.call(this, clientWidth, clientHeight);
            };
            //通过oid找形象
            AvatarDrawtor.prototype.findAvatarByOid = function (oid) {
                if (oid) {
                    var len = this._avatars.length;
                    for (var i = 1; i < len; i++) {
                        var avatar = this._avatars[i];
                        if (avatar.oid == oid) {
                            return avatar;
                        }
                    }
                }
                return null;
            };
            /**
             * 清理
             */
            AvatarDrawtor.prototype.clear = function () {
                var len = this._avatars.length;
                for (var i = 0; i < len; i++) {
                    this._avatars[i].clear(true);
                }
                this._avatars.length = 0;
                this._inLookQueue.length = 0;
                var fG = this._commonLayer.graphics;
                //清理画布
                fG.clear();
                len = this._layerGraghics ? this._layerGraghics.length : 0;
                for (var index = 0; index < len; index++) {
                    this._layerGraghics[index] && this._layerGraghics[index].clear();
                }
            };
            return AvatarDrawtor;
        }(game.base.Container));
        scene.AvatarDrawtor = AvatarDrawtor;
    })(scene = gamecomponent.scene || (gamecomponent.scene = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=AvatarDrawtor.js.map