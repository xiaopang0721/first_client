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
    var SceneRootBase = /** @class */ (function (_super) {
        __extends(SceneRootBase, _super);
        function SceneRootBase(v) {
            var _this = _super.call(this) || this;
            // 自身缩放
            _this.selfScale = 1;
            _this._game = v.game;
            // 摄像机
            if (!_this.camera.focusPos) {
                _this.cameraFocus = new Vector2();
                _this.camera.focusPos = _this.cameraFocus;
            }
            else {
                _this.cameraFocus = _this.camera.focusPos;
            }
            /////////////// 事件监听 ///////////////////
            var objMgr = v.sceneObjectMgr;
            objMgr.on(SceneObjectMgr.__DELETE_OBJECT, _this, _this.onDeleteObject);
            objMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, _this, _this.onLoadMap);
            return _this;
        }
        Object.defineProperty(SceneRootBase.prototype, "camera", {
            /*摄像机*/
            get: function () {
                return Camera.ins;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SceneRootBase.prototype, "game", {
            get: function () {
                return this._game;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SceneRootBase.prototype, "mapid", {
            get: function () {
                return this._mapid;
            },
            enumerable: true,
            configurable: true
        });
        SceneRootBase.prototype.scale = function (scaleX, scaleY, speedMode) {
            return _super.prototype.scale.call(this, scaleX * this.selfScale, scaleY * this.selfScale, speedMode);
        };
        //对象移除
        SceneRootBase.prototype.onDeleteObject = function (obj) {
        };
        //地图传送
        SceneRootBase.prototype.onLoadMap = function (info) {
            //清理对象
            this.clear();
            if (!info || !info.id)
                return;
            this._mapid = info.id;
        };
        //设置窗口大小
        SceneRootBase.prototype.resize = function (clientWidth, clientHeight) {
            this.camera.setSize(clientWidth, clientHeight);
            if (this._game.sceneObjectMgr.story instanceof gamecomponent.story.StoryFishBase) {
                this._game.sceneObjectMgr.story && this._game.sceneObjectMgr.story.resize(clientWidth, clientHeight);
            }
        };
        SceneRootBase.prototype.update = function (diff) {
        };
        /**
        * 检查逻辑坐标是否在场景里
        * @param x
        * @param y
        */
        SceneRootBase.prototype.checkInScene = function (x, y) {
            var offx = Math.max(this.game.clientWidth - this._game.sceneObjectMgr.mapAssetInfo.logicWidth, 0) * 0.5;
            var logicWidth = this._game.sceneObjectMgr.mapAssetInfo.logicWidth + offx;
            var logicHeight = this._game.sceneObjectMgr.mapAssetInfo.logicHeight;
            return x >= -offx && x <= logicWidth && y >= 0 && y <= logicHeight;
        };
        SceneRootBase.prototype.clear = function () {
            this._mapid = "";
            this._game.stopMusic();
            this._game.stopAllSound();
            this.camera.clear();
            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this);
            this.offAll();
        };
        // 释放
        SceneRootBase.prototype.dispose = function () {
            this.clear();
        };
        SceneRootBase.CARD_MARK = "card"; //牌
        SceneRootBase.CHIP_MARK = "chip"; //筹码
        SceneRootBase.GUPAI_MARK = "gupai"; //骨牌，牌九用的
        SceneRootBase.MAHJONG_MARK = "mahjong"; //麻将, 二八杠用的
        SceneRootBase.INLOOK = "inLook"; //进入视图枚举
        SceneRootBase.OUTLOOK = "outLook"; //离开视图枚举
        return SceneRootBase;
    }(Laya.Sprite));
    gamecomponent.SceneRootBase = SceneRootBase;
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=SceneRootBase.js.map