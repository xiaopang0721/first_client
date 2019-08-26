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
* name 鼠标操作
*/
var gamecomponent;
(function (gamecomponent) {
    var SceneOperator = /** @class */ (function (_super) {
        __extends(SceneOperator, _super);
        function SceneOperator(v) {
            var _this = _super.call(this, v) || this;
            _this._selectLineLayer = null;
            _this._selectLineLayer = new Sprite();
            _this.addChild(_this._selectLineLayer);
            _this._preMousePos = new Point();
            _this._preMyPos = new Point();
            return _this;
        }
        // 鼠标按下事件
        SceneOperator.prototype.onMouseDown = function (e) {
            if (!this._mapid)
                return;
            this.event(SceneOperator.MOUSE_DOWN, e);
            if (this._isMouseDown)
                return;
            this._isMouseDown = true;
            this._preMousePos.setTo(Laya.stage.mouseX, Laya.stage.mouseY);
            this._preMyPos.setTo(this.mouseX, this.mouseY);
            this._isDragSelect = false;
            this._selectLineLayer.graphics.clear();
        };
        //鼠标滑动事件
        SceneOperator.prototype.onMouseMove = function (e) {
            if (!this._mapid)
                return;
            this.event(SceneOperator.MOUSE_MOVE, e);
            if (!this._isMouseDown)
                return;
            if (this._isDragSelect) {
                this._selectLineLayer.graphics.clear();
                this._selectLineLayer.graphics.drawRect(this._preMyPos.x, this._preMyPos.y, this.mouseX - this._preMyPos.x, this.mouseY - this._preMyPos.y, null, "#ff0000");
                var rect = Laya.Rectangle._getBoundPointS(this._preMyPos.x, this._preMyPos.y, this.mouseX - this._preMyPos.x, (this.mouseY - this._preMyPos.y) || 1);
                rect && this.onMouseAreaMove(rect);
            }
            else {
                if (Math.abs(this._preMousePos.x - Laya.stage.mouseX) + Math.abs(this._preMousePos.y - Laya.stage.mouseY) > 5) {
                    this._isDragSelect = true;
                }
            }
        };
        // 鼠标弹起事件
        SceneOperator.prototype.onMouseUp = function (e) {
            if (!this._mapid)
                return;
            this.event(SceneOperator.MOUSE_UP, e);
            if (!this._isMouseDown)
                return;
            this._isMouseDown = false;
            if (this._isDragSelect) {
                this._isDragSelect = false;
                this._selectLineLayer.graphics.clear();
                var rect = Laya.Rectangle._getBoundPointS(this._preMyPos.x, this._preMyPos.y, this.mouseX - this._preMyPos.x, (this.mouseY - this._preMyPos.y) || 1);
                rect && this.onMouseAreaUp(rect);
            }
            else {
                this.onMouseClick(e);
            }
        };
        // 鼠标点击事件
        SceneOperator.prototype.onMouseClick = function (e) {
            if (!this._mapid)
                return;
            var mouseX = this.camera.getCellXByScene(e.stageX / this.scaleX);
            var mouseY = this.camera.getCellYByScene(e.stageY / this.scaleY);
            this._avatarLayer.onMouseClick(mouseX, mouseY);
        };
        /**
         * 鼠标区域弹起
         */
        SceneOperator.prototype.onMouseAreaUp = function (area) {
            for (var index = 0; index < area.length / 2; index++) {
                area[2 * index] = this.camera.getCellXByScene(area[2 * index]);
                area[2 * index + 1] = this.camera.getCellYByScene(area[2 * index + 1]);
            }
            this._avatarLayer.onMouseAreaUp(area);
        };
        /**
         * 鼠标区域移动
         */
        SceneOperator.prototype.onMouseAreaMove = function (area) {
            for (var index = 0; index < area.length / 2; index++) {
                area[2 * index] = this.camera.getCellXByScene(area[2 * index]);
                area[2 * index + 1] = this.camera.getCellYByScene(area[2 * index + 1]);
            }
            this._avatarLayer.onMouseAreaMove(area);
        };
        SceneOperator.AVATAR_MOUSE_CLICK_HIT = 'SceneRoot.AVATAR_MOUSE_CLICK_HIT';
        SceneOperator.AVATAR_MOUSE_MOVE_HIT = "SceneRoot.AVATAR_MOUSE_MOVE_HIT"; //滑动选牌
        SceneOperator.AVATAR_MOUSE_UP_HIT = "SceneRoot.AVATAR_MOUSE_UP_HIT"; //滑动选牌 单张弹起
        SceneOperator.AVATAR_MOUSE_UP_HIT_ALL = "SceneRoot.AVATAR_MOUSE_UP_HIT_ALL"; //滑动选牌 全选弹起
        SceneOperator.MOUSE_CLICK = "SceneRoot.MOUSE_CLICK"; //鼠标点击事件
        SceneOperator.MOUSE_DOWN = "SceneRoot.MOUSE_DOWN"; //鼠标按下事件
        SceneOperator.MOUSE_MOVE = "SceneRoot.MOUSE_MOVE"; //鼠标滑动事件
        SceneOperator.MOUSE_UP = "SceneRoot.MOUSE_UP"; //鼠标弹起事件
        return SceneOperator;
    }(gamecomponent.SceneRootBase));
    gamecomponent.SceneOperator = SceneOperator;
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=SceneOperator.js.map