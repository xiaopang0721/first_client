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
    var scene;
    (function (scene) {
        var AvatarOperatorCell = /** @class */ (function (_super) {
            __extends(AvatarOperatorCell, _super);
            function AvatarOperatorCell() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * 鼠标点击命中
             */
            AvatarOperatorCell.prototype.onMouseClickHit = function (xMouse, yMouse) {
                if (areaContains(this._hitArea, xMouse, yMouse)) {
                    this.setToggle();
                    gamecomponent.SceneGame.ins.mainScene.event(gamecomponent.SceneOperator.AVATAR_MOUSE_CLICK_HIT, this);
                    return true;
                }
                return false;
            };
            /**
             * 鼠标移动命中
             */
            AvatarOperatorCell.prototype.onMouseAreaMoveHit = function () {
                if (this._baseData.disable)
                    return false;
                this._baseData.disable = true;
                gamecomponent.SceneGame.ins.mainScene.event(gamecomponent.SceneOperator.AVATAR_MOUSE_MOVE_HIT, this);
                return true;
            };
            /**
             * 鼠标弹起命中
             */
            AvatarOperatorCell.prototype.onMouseAreaUpHit = function () {
                this.setToggle();
                this._baseData.disable = false;
                gamecomponent.SceneGame.ins.mainScene.event(gamecomponent.SceneOperator.AVATAR_MOUSE_UP_HIT, this);
            };
            /**
            * 鼠标碰撞检测
            */
            AvatarOperatorCell.prototype.__hitTest_byXY = function (xMouse, yMouse) {
                if (areaContains(this._hitArea, xMouse, yMouse)) {
                    return true;
                }
                return false;
            };
            /**
             * 鼠标碰撞检测
             */
            AvatarOperatorCell.prototype.__hitTest_byArea = function (area) {
                var hint = areaContains2(area, this._hitArea);
                return hint;
            };
            AvatarOperatorCell.prototype.setToggle = function () {
                this._baseData.toggle = !this._baseData.toggle;
            };
            return AvatarOperatorCell;
        }(gamecomponent.scene.AvatarBase));
        scene.AvatarOperatorCell = AvatarOperatorCell;
    })(scene = gamecomponent.scene || (gamecomponent.scene = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=AvatarOperatorCell.js.map