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
var gamecomponent;
(function (gamecomponent) {
    var SceneRoot = /** @class */ (function (_super) {
        __extends(SceneRoot, _super);
        function SceneRoot(v) {
            var _this = _super.call(this, v) || this;
            //底层对象
            _this._bottomTableMapLayer = new MapFarLayer(null, _this);
            _this._bottomTableMapLayer.mouseEnabled = false; //开启鼠标事件
            _this.mouseEnabled = true;
            //底层对象
            _this._bottomMapLayer = new MapLayer(null, _this);
            _this._bottomMapLayer.mouseEnabled = false; //开启鼠标事件
            _this.mouseEnabled = true;
            //底层特效
            _this._effectMapLayer = new EffectLayer(_this);
            _this._effectMapLayer.mouseEnabled = false;
            // this._effectMapLayer.blendMode = Laya.BlendMode.ADD;
            //avatar渲染器
            _this._avatarLayer = new gamecomponent.scene.AvatarOperator(_this);
            _this._avatarLayer.mouseEnabled = true;
            // this._avatarLayer.mouseThrough = false;
            //添加到场景
            _this.addChild(_this._bottomTableMapLayer);
            _this.addChild(_this._bottomMapLayer);
            _this.addChild(_this._avatarLayer);
            _this.addChild(_this._effectMapLayer);
            return _this;
        }
        Object.defineProperty(SceneRoot.prototype, "avatarLayer", {
            get: function () {
                return this._avatarLayer;
            },
            enumerable: true,
            configurable: true
        });
        //记得清理
        SceneRoot.prototype.setLayerConfigArr = function (value) {
            if (value === void 0) { value = null; }
            if (this._avatarLayer)
                this._avatarLayer.setLayerConfigArr(value);
        };
        Object.defineProperty(SceneRoot.prototype, "sceneFontSize", {
            //场景字码
            get: function () {
                return 24;
            },
            enumerable: true,
            configurable: true
        });
        //对象移除
        SceneRoot.prototype.onDeleteObject = function (obj) {
            _super.prototype.onDeleteObject.call(this, obj);
            obj && this._avatarLayer.outLook(obj, false);
        };
        //地图传送
        SceneRoot.prototype.onLoadMap = function (info) {
            _super.prototype.onLoadMap.call(this, info);
            if (!this._mapid) {
                return; //无效地图id
            }
            this._bottomMapLayer.load(info);
            this._bottomTableMapLayer.load(info);
        };
        //更换地图
        SceneRoot.prototype.changeMap = function (info) {
            //清理地图层
            this._bottomMapLayer.clear();
            this._bottomTableMapLayer.clear();
            this._bottomMapLayer.load(info);
            this._bottomTableMapLayer.load(info);
        };
        //设置窗口大小
        SceneRoot.prototype.resize = function (clientWidth, clientHeight) {
            _super.prototype.resize.call(this, clientWidth, clientHeight);
            //底图层需要设置下宽高 才能接受鼠标事件
            if (this._bottomMapLayer) {
                this._bottomMapLayer.resize(clientWidth, clientHeight);
            }
            if (this._bottomTableMapLayer) {
                this._bottomTableMapLayer.resize(clientWidth, clientHeight);
            }
            this._effectMapLayer && this._effectMapLayer.resize(clientWidth, clientHeight);
            this._avatarLayer.resize(clientWidth, clientHeight);
        };
        SceneRoot.prototype.update = function (diff) {
            _super.prototype.update.call(this, diff);
            if (!this._mapid) {
                return;
            }
            // 更新位置 （更新摄像机之前需要先调用）
            this._avatarLayer.updateAvatarPostion(diff);
            // 摄像机心跳
            var cam = this.camera;
            cam.update();
            // 地图层心跳
            this._bottomMapLayer.setViewPortByCamera(cam);
            this._bottomTableMapLayer.setViewPortByCamera(cam);
            this._bottomMapLayer.update(diff);
            this._bottomTableMapLayer.update(diff);
            this._effectMapLayer.onDraw(diff);
            this._avatarLayer.update(diff);
            // 地图特效心跳
            this._bottomMapLayer.onDraw(diff);
            // 绘制形象
            this._avatarLayer.onDraw(diff);
        };
        /**
        * 检查逻辑坐标是否在场景里
        * @param x
        * @param y
        */
        SceneRoot.prototype.checkInScene = function (x, y) {
            var offx = Math.max(this.game.clientWidth - this._game.sceneGame.sceneObjectMgr.mapAssetInfo.logicWidth, 0) * 0.5;
            var logicWidth = this._game.sceneGame.sceneObjectMgr.mapAssetInfo.logicWidth + offx;
            var logicHeight = this._game.sceneGame.sceneObjectMgr.mapAssetInfo.logicHeight;
            return x >= -offx && x <= logicWidth && y >= 0 && y <= logicHeight;
        };
        SceneRoot.prototype.clear = function () {
            _super.prototype.clear.call(this);
            //清理地图层
            this._bottomMapLayer.clear();
            this._bottomTableMapLayer.clear();
            //清理avatar
            this._avatarLayer.clear();
            //特效
            this._effectMapLayer.clear();
        };
        // 释放
        SceneRoot.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this.clear();
        };
        return SceneRoot;
    }(gamecomponent.SceneOperator));
    gamecomponent.SceneRoot = SceneRoot;
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=SceneRoot.js.map