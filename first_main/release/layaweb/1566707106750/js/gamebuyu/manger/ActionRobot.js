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
* 金币赛机器人
*/
var gamebuyu;
(function (gamebuyu) {
    var manager;
    (function (manager) {
        var ActionRobot = /** @class */ (function (_super) {
            __extends(ActionRobot, _super);
            function ActionRobot(owner) {
                var _this = _super.call(this) || this;
                _this._owner = owner;
                _this._restTime = 0;
                _this._lastRestTimer = 0;
                _this._findTime = 0;
                return _this;
            }
            ActionRobot.prototype.update = function (deltaTime) {
                _super.prototype.update.call(this, deltaTime);
                if (this._owner && this._owner.fireType == BuyuPlayer.FIRE_TYPE_AIM) {
                    // 瞄准状态不管
                    return false;
                }
                this._owner.isDoFireing = false;
                if (this._restTime) {
                    // 休息中
                    this._restTime -= deltaTime;
                    if (this._restTime < 0) {
                        this._restTime = 0;
                    }
                    return false;
                }
                if (Math.random() < 0.0008) {
                    // 几率非常的低 随机休息1~4秒
                    this._restTime = Math.random() * 3 + 1;
                    return false;
                }
                // 找鱼
                this.findFindTarget(deltaTime);
                if (this._target) {
                    this._owner.selectFish = this._target;
                    this._owner.isDoFireing = true;
                    this._owner.fireType = gamebuyu.data.BuyuPlayer.FIRE_STATE_HAND;
                    this._owner.towardTarget(this._target.pos);
                }
                return false;
            };
            ActionRobot.prototype.findFindTarget = function (deltaTime) {
                if (this._target) {
                    if (!this._target.lookInCamera2 || this._target.isDied || Math.random() < 0.02) {
                        // 目标死亡 或1/50的几率更换目标
                        this._target = null;
                    }
                }
                this._findTime -= deltaTime;
                if (this._findTime > 0) {
                    return;
                }
                this._findTime = 500 / 1000;
                if (!this._target) {
                    // 这里写找鱼规则
                    var fishs = [];
                    var list = this._owner.buyuMgr ? this._owner.buyuMgr.fishList : null;
                    for (var key in list) {
                        var obj = list[key];
                        if (obj instanceof Fish && !obj.isDied && obj.lookInCamera2) {
                            fishs.push(obj);
                        }
                    }
                    if (fishs.length) {
                        this._target = fishs[Math.floor(Math.random() * fishs.length)];
                    }
                }
            };
            ActionRobot.prototype.finalize = function () {
                this._owner = null;
                return _super.prototype.finalize.call(this);
            };
            return ActionRobot;
        }(manager.ActionBase));
        manager.ActionRobot = ActionRobot;
    })(manager = gamebuyu.manager || (gamebuyu.manager = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=ActionRobot.js.map