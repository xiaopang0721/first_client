var gamecomponent;
(function (gamecomponent) {
    var data;
    (function (data) {
        var MapAssetInfo = /** @class */ (function () {
            function MapAssetInfo() {
                //场次
                this.maplv = 0;
            }
            MapAssetInfo.prototype.load = function (mapid, mapUrl, mlv) {
                if (mlv === void 0) { mlv = 0; }
                this.clear();
                this.id = mapid;
                this.imgId = mapUrl;
                this.maplv = mlv;
                this.pxWidth = 1280;
                this.pxHeight = 720;
                this.logicWidth = this.pxWidth / SceneRes.CELL_WIDTH;
                this.logicHeight = this.pxHeight / SceneRes.CELL_HEIGHT;
                if (this.onLoadedComplete)
                    this.onLoadedComplete();
            };
            MapAssetInfo.prototype.clear = function () {
                // 地图ID
                this.id = "";
                // 地图资源id
                this.imgId = "";
                // 地图名称 
                this.name = '';
                // 地图像素宽 
                this.pxWidth = 0;
                // 地图像素高 
                this.pxHeight = 0;
                // 地图逻辑宽 
                this.logicWidth = 0;
                // 地图逻辑高 
                this.logicHeight = 0;
                // 场景音乐
                this.sound = '';
            };
            return MapAssetInfo;
        }());
        data.MapAssetInfo = MapAssetInfo;
    })(data = gamecomponent.data || (gamecomponent.data = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=MapAseetInfo.js.map