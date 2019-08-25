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
        var EffectLayer = /** @class */ (function (_super) {
            __extends(EffectLayer, _super);
            function EffectLayer(v) {
                var _this = _super.call(this, v.game) || this;
                _this._scene = v;
                _this._camera = v.camera;
                return _this;
            }
            EffectLayer.prototype.load = function (info) {
                if (this._effect) {
                    ObjectPools.free(this._effect);
                    this._effect = null;
                }
                //添加特效
                this._effect = ObjectPools.malloc(EffectFrame, null, 9, 50, null);
                this._effect.setAssetPath(CompoentPath.mapEffect);
                var url = CompoentPath.mapEffect + "1/{0}.jpg";
                this._effect.setDataFrames(info.imgId.toString(), CompoentPath.getSeqFrames(url, 19, 1), 9, 1);
                this._effect.isPlayEnd = false;
                this._effect.setLoop(true);
                this._effect.centrePoint = new Vector2(0, 0);
                this._effect.scale = 1.75;
                this._effect.setOffset(100, 0);
                //气泡
                // url = CompoentPath.scene_single + "bubble.png";
                // this._bubbleTexure = Laya.loader.getRes(url);
            };
            EffectLayer.prototype.onDraw = function (diff) {
                //视口
                if (isShowDebug) {
                    var startX = this._camera.bufferLeft + this._camera.bufferOffsetX;
                    var startY = this._camera.bufferTop + this._camera.bufferOffsetY;
                    var endX = startX + this._camera.bufferWidth;
                    var endY = startY + this._camera.bufferHeight;
                    this.graphics.drawRect(startX, startY, 5, this._game.clientHeight, "#000000");
                    this.graphics.drawRect(endX, startY, 5, this._game.clientHeight, "#000000");
                    this.graphics.drawRect(startX, startY, this._game.clientWidth, 5, "#000000");
                    this.graphics.drawRect(startX, endY, this._game.clientWidth, 5, "#000000");
                }
            };
            EffectLayer.prototype.clear = function () {
                if (this._effect) {
                    ObjectPools.free(this._effect);
                    this._effect = null;
                }
                this.graphics.clear();
            };
            return EffectLayer;
        }(game.base.Container));
        scene.EffectLayer = EffectLayer;
    })(scene = gamecomponent.scene || (gamecomponent.scene = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=EffectLayer.js.map