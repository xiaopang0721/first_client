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
        var MapFarLayer = /** @class */ (function (_super) {
            __extends(MapFarLayer, _super);
            function MapFarLayer(txe, v) {
                var _this = _super.call(this, v.game) || this;
                _this._changeSize = true;
                _this._game = v.game;
                _this._scene = v;
                _this._viewPort = new Rectangle();
                return _this;
            }
            MapFarLayer.prototype.load = function (info) {
                var _this = this;
                if (this._mapTexture) {
                    this._mapTexture = null;
                }
                this._info = info;
                this._scene.camera.setMapSize(info.pxWidth, info.pxHeight);
                this._scene.cameraFocus.x = info.logicWidth / 2;
                this._scene.cameraFocus.y = info.logicHeight / 2;
                var imgid = this._info.imgId;
                if (!imgid) {
                    imgid = this._info.id;
                }
                var url = CompoentPath.map_far + "bg_" + imgid + '.jpg';
                var refAsset = RefAsset.Get(url);
                this._mapImageAsset = refAsset;
                refAsset.retain();
                if (!refAsset.parseComplete) {
                    refAsset.once(LEvent.COMPLETE, this, function () {
                        _this.onLoadComplete(Laya.loader.getRes(url));
                    });
                }
                else {
                    this.onLoadComplete(Laya.loader.getRes(url));
                }
            };
            MapFarLayer.prototype.onLoadComplete = function (txe) {
                if (!txe)
                    return;
                this._partWidth = txe.width;
                this._partHeight = txe.height;
                if (this._partWidth >= 1280 && this._partHeight >= 720) {
                    this._mapTexture = txe;
                }
                else {
                    this._mapTexture = null;
                }
                this.width = this._clientWidth;
                this.height = this._clientHeight;
                this._changeSize = true;
                this._scene.event(scene.MapLayer.MAP_LOAD_COMPLETE);
            };
            //设置窗口大小
            MapFarLayer.prototype.resize = function (w, h, realW, realH) {
                if (realW === void 0) { realW = 0; }
                if (realH === void 0) { realH = 0; }
                this._clientWidth = this.width = w;
                this._clientHeight = this.height = h;
                this._clientRealWidth = realW;
                this._clientRealHeight = realH;
                this._changeSize = true;
            };
            // 通过摄像机设置窗口位置
            MapFarLayer.prototype.setViewPortByCamera = function (camera) {
                this._camera = camera;
                this._viewPort.x = camera.bufferLeft + camera.bufferOffsetX;
                this._viewPort.y = camera.bufferTop + camera.bufferOffsetY;
                this._viewPort.width = camera.bufferWidth;
                this._viewPort.height = camera.bufferHeight;
            };
            MapFarLayer.prototype.update = function (diff) {
                if (!this._mapTexture) {
                    return;
                }
                if (!this._changeSize)
                    return;
                this._changeSize = false;
                this.graphics.clear();
                // 绘制的起始&结束位置 
                var startX;
                var startY;
                var endX;
                var endY;
                var partWidth = this._partWidth;
                var partHeight = this._partHeight;
                var state = 2; // 0：铺满视口，1：铺满全屏, 2：单图拉伸
                if (state == 0) {
                    startX = this._viewPort.x;
                    startY = this._viewPort.y;
                    endX = this._viewPort.width + startX;
                    endY = this._viewPort.height + startY;
                }
                else if (state == 1) {
                    startX = this._viewPort.x % this._partWidth - this._partWidth;
                    startY = this._viewPort.y % this._partHeight - this._partHeight;
                    endX = this._camera.width;
                    endY = this._camera.height;
                }
                else if (state == 2) {
                    partWidth = this._camera.width;
                    partHeight = this._camera.height;
                    startX = this._camera.shockOffsetX;
                    startY = this._camera.shockOffsetY;
                    endX = startX + this._camera.width;
                    endY = startY + this._camera.height;
                }
                var width, height;
                while (startX < endX) {
                    var __startY = startY;
                    while (__startY < endY) {
                        this.graphics.drawTexture(this._mapTexture, startX, __startY, partWidth, partHeight);
                        __startY += partHeight;
                    }
                    startX += partWidth;
                }
            };
            // 清理地图
            MapFarLayer.prototype.clear = function () {
                this.graphics.clear();
                this._mapTexture = null;
                if (this._mapImageAsset) {
                    this._mapImageAsset.offAll();
                    this._mapImageAsset.release(true);
                    this._mapImageAsset = null;
                }
            };
            MapFarLayer.MAP_LOAD_COMPLETE = 'MAP_LOAD_COMPLETE';
            return MapFarLayer;
        }(game.base.Container));
        scene.MapFarLayer = MapFarLayer;
    })(scene = gamecomponent.scene || (gamecomponent.scene = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=MapFarLayer.js.map