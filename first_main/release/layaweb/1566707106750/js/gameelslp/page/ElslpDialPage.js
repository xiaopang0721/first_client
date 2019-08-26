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
* 转盘
*/
var gameelslp;
(function (gameelslp) {
    var page;
    (function (page) {
        var CENTER_X = 640; //球转动中心X坐标
        var CENTER_Y = 360; //球转动中心Y坐标
        var WAI_RADIUS = 300; //外圈半径
        var NEI_RADIUS = 180; //内圈半径
        var END_RADIUS = 120; //最后停止半径
        var BALL_INWARD_TIME = 40; //球往内滑动需要的时间(帧)
        var NUMBER_POS = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1,
            20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26]; //0-37数字的位置(index就是该数字位置)
        var ElslpDialPage = /** @class */ (function (_super) {
            __extends(ElslpDialPage, _super);
            function ElslpDialPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._subVal = 0; //转盘递减的角度值
                _this._ballSubVal = 0; //小球递减角度
                _this._ballAngle = 0; //球的角度
                _this._subRadius = 0; //半径减小值
                _this._rotationVal = -20; //转盘每帧转动角度
                _this._rotationBall = 20; //球每帧转动角度
                _this._criticalNum = 0; //向内滚动的临界值
                _this._ballRadius = 0; //向内滚动时球转动半径
                _this._ballEndRadius = 0; //小球向卡槽滚动时的半径
                _this._subEndRadius = 0; //小球向卡槽滚动时的速度
                _this._averageAngle = 0; //每个格子的角度
                _this._asset = [
                    Path_game_elslp.atlas_game_ui + "eluosizhuanpan.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            ElslpDialPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.eluosizhuanpan.ZhuanPanUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            ElslpDialPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this.turnDial();
            };
            Object.defineProperty(ElslpDialPage.prototype, "dataSource", {
                set: function (val) {
                    this._rewardNumber = parseInt(val);
                },
                enumerable: true,
                configurable: true
            });
            //转起来
            ElslpDialPage.prototype.turnDial = function () {
                //每个格子平均角度
                this._averageAngle = 360 / 37;
                //奖励数字初始角度
                this._rewardInitialAngle = NUMBER_POS.indexOf(this._rewardNumber) * this._averageAngle;
                //随机下转盘转动减缓速度
                this._subVal = MathU.randomRange(1000, 1500) / 10000;
                //球的向内滚动的速度，改半径
                this._subRadius = (WAI_RADIUS - NEI_RADIUS) / BALL_INWARD_TIME;
                //球滚到卡槽内的速度
                this._subEndRadius = END_RADIUS / BALL_INWARD_TIME;
            };
            ElslpDialPage.prototype.update = function () {
                //转动小球
                if (this._rotationBall > 0) {
                    //球转速开始变慢
                    this._rotationBall -= this._ballSubVal;
                    //看看是不是该滚进去了
                    if (this._rotationBall > this._criticalNum) {
                        this.turnBall();
                    }
                    else {
                        this.ballInward();
                    }
                }
                else { //小球静止后，滚到卡槽
                    if (this._ballEndRadius <= NEI_RADIUS - END_RADIUS) {
                        this.ballToEndPos();
                    }
                }
                //转盘转动
                this._viewUI.img_num.pivot(237, 237);
                if (this._rotationVal < 0) {
                    this._viewUI.img_num.rotation -= this._rotationVal;
                    //转盘越转越慢
                    this._rotationVal += this._subVal;
                    this._rewardEndAngle = (this._viewUI.img_num.rotation + this._rewardInitialAngle) % 360;
                }
                else {
                    if (this._ballSubVal == 0) {
                        //根据球停止时所在的角度，算出递减值，即每帧要减多少
                        var angle = (360 - this._ballAngle % 360) + this._rewardEndAngle - this._averageAngle * 7;
                        this._ballSubVal = this._rotationBall / (2 * angle / this._rotationBall - 1);
                        //球在哪开始往内圈滚
                        this._criticalNum = this._ballSubVal * BALL_INWARD_TIME;
                    }
                }
            };
            //小球转动
            ElslpDialPage.prototype.turnBall = function () {
                this._viewUI.img_qiu.x = CENTER_X + Math.cos(this._ballAngle * Math.PI / 180) * WAI_RADIUS;
                this._viewUI.img_qiu.y = CENTER_Y + Math.sin(this._ballAngle * Math.PI / 180) * WAI_RADIUS;
                this._ballAngle += this._rotationBall;
            };
            //小球往内滚动，改变半径就可以
            ElslpDialPage.prototype.ballInward = function () {
                this._ballRadius += this._subRadius;
                var radius = WAI_RADIUS - this._ballRadius;
                this._viewUI.img_qiu.x = CENTER_X + Math.cos(this._ballAngle * Math.PI / 180) * radius;
                this._viewUI.img_qiu.y = CENTER_Y + Math.sin(this._ballAngle * Math.PI / 180) * radius;
                this._ballAngle += this._rotationBall;
            };
            //小球到卡槽里
            ElslpDialPage.prototype.ballToEndPos = function () {
                this._ballEndRadius += this._subEndRadius;
                var radius = NEI_RADIUS - this._ballEndRadius;
                this._viewUI.img_qiu.x = CENTER_X + Math.cos(this._ballAngle * Math.PI / 180) * radius;
                this._viewUI.img_qiu.y = CENTER_Y + Math.sin(this._ballAngle * Math.PI / 180) * radius;
            };
            ElslpDialPage.prototype.onPlayComplte = function () {
                this.close();
            };
            ElslpDialPage.prototype.close = function () {
                _super.prototype.close.call(this);
            };
            return ElslpDialPage;
        }(game.gui.base.Page));
        page.ElslpDialPage = ElslpDialPage;
    })(page = gameelslp.page || (gameelslp.page = {}));
})(gameelslp || (gameelslp = {}));
//# sourceMappingURL=ElslpDialPage.js.map