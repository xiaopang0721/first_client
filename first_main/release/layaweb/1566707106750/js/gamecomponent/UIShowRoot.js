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
    var UIShowRoot = /** @class */ (function (_super) {
        __extends(UIShowRoot, _super);
        function UIShowRoot(v) {
            var _this = _super.call(this, v) || this;
            _this._avatarLayer = new AvatarOperator(_this);
            _this._avatarLayer.mouseEnabled = true;
            _this.addChild(_this._avatarLayer);
            return _this;
        }
        // 鼠标按下事件
        UIShowRoot.prototype.onMouseClick = function (e) {
            if (!this._mapid || this.mapid == "buyu") {
                return;
            }
            _super.prototype.onMouseClick.call(this, e);
        };
        //对象移除
        UIShowRoot.prototype.onDeleteObject = function (obj) {
            _super.prototype.onDeleteObject.call(this, obj);
            if (!this._mapid || this.mapid == "buyu") {
                return;
            }
            obj && this._avatarLayer.outLook(obj, false);
        };
        //设置窗口大小
        UIShowRoot.prototype.resize = function (clientWidth, clientHeight) {
            _super.prototype.resize.call(this, clientWidth, clientHeight);
            if (!this._mapid || this.mapid == "buyu") {
                return;
            }
            //底图层需要设置下宽高 才能接受鼠标事件
            this._avatarLayer && this._avatarLayer.resize(clientWidth, clientHeight);
        };
        UIShowRoot.prototype.update = function (diff) {
            _super.prototype.update.call(this, diff);
            if (!this._mapid || this.mapid == "buyu") {
                return;
            }
            // 更新位置 （更新摄像机之前需要先调用）
            this._avatarLayer.updateAvatarPostion(diff);
            // 摄像机心跳
            var cam = this.camera;
            cam.update();
            this._avatarLayer.update(diff);
            // 绘制形象
            this._avatarLayer.onDraw(diff);
        };
        //地图传送
        UIShowRoot.prototype.onLoadMap = function (info) {
            _super.prototype.onLoadMap.call(this, info);
            if (!this.mapid || this.mapid == "buyu") {
                if (this._avatarLayer) {
                    this._avatarLayer.removeSelf();
                    this._avatarLayer.clear();
                    this._avatarLayer.destroy();
                    this._avatarLayer = null;
                }
            }
            else {
                if (!this._avatarLayer) {
                    this._avatarLayer = new gamecomponent.scene.AvatarOperator(this);
                    this._avatarLayer.mouseEnabled = true;
                    this._avatarLayer.mouseThrough = true;
                    this.addChild(this._avatarLayer);
                }
            }
        };
        UIShowRoot.prototype.clear = function () {
            _super.prototype.clear.call(this);
            //清理avatar
            this._avatarLayer && this._avatarLayer.clear();
        };
        // 释放
        UIShowRoot.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this.clear();
        };
        return UIShowRoot;
    }(gamecomponent.SceneOperator));
    gamecomponent.UIShowRoot = UIShowRoot;
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=UIShowRoot.js.map