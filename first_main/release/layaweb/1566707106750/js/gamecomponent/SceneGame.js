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
    var SceneGame = /** @class */ (function (_super) {
        __extends(SceneGame, _super);
        function SceneGame() {
            var _this = _super.call(this, main.game) || this;
            _this.ExitGmeTimes = 0;
            _this._scenes = [];
            //注册后台地址
            RandomUrlFactory.ins.getUrl(Handler.create(_this, function (obj) {
                if (!obj)
                    return;
                WebConfig.setPlatformUrl(obj.url);
            }));
            CompoentPath.map_far = StringU.substitute(Path.map_far, WebConfig.baseplatform);
            CompoentPath.map = StringU.substitute(Path.map, WebConfig.baseplatform);
            _this.tryCreatedSceneRoot();
            _this.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, _this, _this.onIntoNewMap);
            return _this;
        }
        Object.defineProperty(SceneGame, "ins", {
            get: function () {
                if (!this._ins) {
                    this._ins = new SceneGame();
                }
                return this._ins;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SceneGame.prototype, "uiRoot", {
            get: function () {
                return this._game.uiRoot;
            },
            enumerable: true,
            configurable: true
        });
        /**进入新地图 */
        SceneGame.prototype.onIntoNewMap = function (info) {
            LoadingMgr.ins.cancleUnLoads(); //进出地图取消掉未加载完成的
            JsLoader.ins.clear();
            if (typeof info == "string") {
                this.inScene = false;
                updateGameJS();
            }
            else {
                this.inScene = true;
                clearJSGame(info.id);
            }
        };
        Object.defineProperty(SceneGame.prototype, "scenes", {
            /**
             * 场景
             */
            get: function () {
                return this._scenes;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SceneGame.prototype, "scenesWithOperator", {
            /**
             * 场景
             */
            get: function () {
                return this._scenes;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SceneGame.prototype, "mainScene", {
            get: function () {
                return this._scenes[0];
            },
            enumerable: true,
            configurable: true
        });
        /**
      * 弹窗提示
      * @param str  字符串
      * @param ecb 确定
      * @param ccb 取消
      * @param isOnlyOK  是否只有一个按钮 =》确定
      * @param okSkin 确定的皮肤
      */
        SceneGame.prototype.alert = function (str, ecb, ccb, isOnlyOK, okSkin, cancleSkin) {
            if (ecb === void 0) { ecb = null; }
            if (ccb === void 0) { ccb = null; }
            if (isOnlyOK === void 0) { isOnlyOK = true; }
            this._game.alert(str, ecb, ccb, isOnlyOK, okSkin, cancleSkin);
        };
        /**
        * 提示
        * @param str
        * @param isTop 是否顶层
        */
        SceneGame.prototype.showTips = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this._game.showTips(args);
        };
        Object.defineProperty(SceneGame.prototype, "scaleEffectFactory", {
            get: function () {
                if (!this._scaleEffectFactory) {
                    this._scaleEffectFactory = new ScaleEffectFactory(this._game);
                }
                return this._scaleEffectFactory;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SceneGame.prototype, "cardRoomMgr", {
            get: function () {
                if (!this._cardRoomMgr) {
                    this._cardRoomMgr = new CardRoomMgr(this._game);
                }
                return this._cardRoomMgr;
            },
            enumerable: true,
            configurable: true
        });
        SceneGame.prototype.onUpdate = function (diff) {
            _super.prototype.onUpdate.call(this, diff);
            this._scaleEffectFactory && this._scaleEffectFactory.update(diff);
        };
        // 尝试初始化场景
        SceneGame.prototype.tryCreatedSceneRoot = function () {
            //初始化场景
            if (!this._scenes.length) {
                var scene_1;
                var sceneCount = 1;
                var sceneScle = 1;
                for (var i = 0; i < sceneCount; i++) {
                    scene_1 = new gamecomponent.SceneRoot(this);
                    scene_1.selfScale = sceneScle;
                    Laya.stage.addChildAt(scene_1, 0);
                    this._scenes.push(scene_1);
                }
                for (var i = 0; i < sceneCount; i++) {
                    scene_1 = new gamecomponent.UIShowRoot(this);
                    scene_1.selfScale = sceneScle;
                    Laya.stage.addChild(scene_1);
                    this._scenes.push(scene_1);
                }
                this._game.onResize(this._game.clientWidth, this._game.clientHeight, this._game.clientScale);
            }
        };
        Object.defineProperty(SceneGame.prototype, "isLockGame", {
            get: function () {
                return this._isLockGame;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 游戏掉线锁屏
         */
        SceneGame.prototype.setIsLockGame = function (v, playAni, sign) {
            if (v) {
                logd("====================锁定===========", sign);
            }
            else {
                logd("====================解锁===========", sign);
            }
            this._isLockGame = v;
            if (v) {
                var page = this.uiRoot.general.getPage(PageDef.PAGE_WAITEFFECT);
                if (page && page.isOpened) {
                    (page && playAni) ? page.playAni() : page.closeAni();
                }
                else {
                    this.uiRoot.general.open(PageDef.PAGE_WAITEFFECT, function (page) {
                        (page && playAni) ? page.playAni() : page.closeAni();
                    });
                }
            }
            else {
                this.uiRoot.general.close(PageDef.PAGE_WAITEFFECT);
            }
        };
        SceneGame.prototype.clearMgr = function () {
            if (this._scaleEffectFactory) {
                this._scaleEffectFactory.clear(true);
                this._scaleEffectFactory = null;
            }
            if (this._cardRoomMgr) {
                this._cardRoomMgr.clear(true);
                this._cardRoomMgr = null;
            }
        };
        return SceneGame;
    }(GameBase));
    gamecomponent.SceneGame = SceneGame;
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=SceneGame.js.map