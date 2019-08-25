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
* name avatar操作类
*/
var gamecomponent;
(function (gamecomponent) {
    var scene;
    (function (scene) {
        var AvatarOperator = /** @class */ (function (_super) {
            __extends(AvatarOperator, _super);
            function AvatarOperator(v) {
                var _this = _super.call(this, v) || this;
                _this._avatarOperatorList = [];
                return _this;
            }
            /**
             * 鼠标点击
             */
            AvatarOperator.prototype.onMouseClick = function (xMouse, yMouse) {
                var len = this._avatars.length;
                for (var i = len - 1; i >= 0; i--) {
                    var hitAvatar = this._avatars[i];
                    if (!(hitAvatar instanceof scene.AvatarOperatorCell))
                        continue;
                    if (!hitAvatar || !hitAvatar.baseData || !hitAvatar.baseData.toggleEnable)
                        continue;
                    if (hitAvatar.onMouseClickHit(xMouse, yMouse)) { //自上而下 命中即触发点击
                        return;
                    }
                }
            };
            /**
             * 鼠标区域移动
             */
            AvatarOperator.prototype.onMouseAreaMove = function (area) {
                this.hitTestArea(area, true);
            };
            /**
             * 鼠标区域弹起
             */
            AvatarOperator.prototype.onMouseAreaUp = function (area) {
                this.hitTestArea(area);
                this._avatarOperatorList.length = 0;
            };
            //区域碰撞测试
            AvatarOperator.prototype.hitTestArea = function (area, isMouseMove) {
                var list = [];
                var len = this._avatars.length;
                for (var i = len - 1; i >= 0; i--) {
                    var hitAvatar = this._avatars[i];
                    if (!(hitAvatar instanceof scene.AvatarOperatorCell))
                        continue;
                    if (!hitAvatar || !hitAvatar.baseData || !hitAvatar.baseData.toggleEnable)
                        continue;
                    if (hitAvatar.__hitTest_byArea(area)) {
                        list.push(hitAvatar);
                    }
                }
                if (!list.length) {
                    isMouseMove && this.clearSellect(list);
                    return;
                }
                var pos_list = [];
                var x;
                var y;
                for (var i = 0; i < area.length / 2; i++) {
                    if (!x) {
                        x = area[2 * i];
                    }
                    else {
                        if (area[2 * i] > x) {
                            continue;
                        }
                        if (area[2 * i] < x) {
                            pos_list.length = 0;
                        }
                    }
                    x = area[2 * i];
                    y = area[2 * i + 1];
                    pos_list.push(x);
                    pos_list.push(y);
                }
                var hit_list = [];
                var count = 0;
                for (var i = len - 1; i >= 0; i--) {
                    var hitAvatar = this._avatars[i];
                    if (!(hitAvatar instanceof scene.AvatarOperatorCell))
                        continue;
                    for (var j = 0; j < pos_list.length / 2; j++) {
                        x = pos_list[2 * j];
                        y = pos_list[2 * j + 1];
                        if (hitAvatar.__hitTest_byXY(x, y)) {
                            count++ > 0 && hit_list.push(hitAvatar);
                            break; //进过就break，防止两个点都碰撞
                        }
                    }
                }
                for (var i = 0; i < hit_list.length; i++) {
                    var hitAvatar = hit_list[i];
                    var index = list.indexOf(hitAvatar);
                    if (index != -1) {
                        list.splice(index, 1);
                    }
                }
                var count_hit = 0;
                for (var i = 0; i < list.length; i++) {
                    var hitAvatar = list[i];
                    if (hitAvatar) {
                        if (isMouseMove) {
                            if (hitAvatar.onMouseAreaMoveHit()) {
                                this.collectAvatar(hitAvatar);
                            }
                        }
                        else {
                            hitAvatar.onMouseAreaUpHit();
                            count_hit++;
                        }
                        if (count_hit == list.length) {
                            gamecomponent.SceneGame.ins.mainScene.event(gamecomponent.SceneOperator.AVATAR_MOUSE_UP_HIT_ALL);
                        }
                    }
                }
                isMouseMove && this.clearSellect(list);
            };
            AvatarOperator.prototype.collectAvatar = function (avatar) {
                if (this._avatarOperatorList.indexOf(avatar) == -1) {
                    this._avatarOperatorList.push(avatar);
                }
            };
            AvatarOperator.prototype.clearSellect = function (list) {
                if (list === void 0) { list = []; }
                for (var index = 0; index < this._avatarOperatorList.length; index++) {
                    var avatar = this._avatarOperatorList[index];
                    if (avatar && list.indexOf(avatar) == -1) {
                        avatar.baseData && (avatar.baseData.disable = false);
                        this._avatarOperatorList.splice(index, 1);
                    }
                }
            };
            return AvatarOperator;
        }(gamecomponent.scene.AvatarDrawtor));
        scene.AvatarOperator = AvatarOperator;
    })(scene = gamecomponent.scene || (gamecomponent.scene = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=AvatarOperator.js.map