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
* name 太棒了界面
*/
var gamebuyu;
(function (gamebuyu) {
    var page;
    (function (page) {
        var BuyuGreatPage = /** @class */ (function (_super) {
            __extends(BuyuGreatPage, _super);
            function BuyuGreatPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._clipArr = [];
                _this._asset = [
                    Path_game_buyu.atlas_game_ui + "buyu/great.atlas",
                    Path_game_buyu.atlas_game_ui + "buyu/tongyong.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            BuyuGreatPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.buyu.BuYu_GreatUI');
                this.addChild(this._viewUI);
                this._isNeedBlack = true;
                this._isClickBlack = true;
                for (var i = 0; i < 5; i++) {
                    var index = i + 1;
                    var clip = new NumClip();
                    this._clipArr.push(clip);
                    var oldClip = this._viewUI['clip_' + index];
                    oldClip.visible = false;
                    this._viewUI.box_Num.addChild(clip);
                    clip.pos(oldClip.x, oldClip.y);
                }
            };
            // 页面打开时执行函数
            BuyuGreatPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.image_Wan.visible = false;
                Laya.timer.once(5000, this, this.close);
            };
            //帧心跳
            BuyuGreatPage.prototype.update = function (diff) {
                _super.prototype.update.call(this, diff);
                if (this._clipArr) {
                    for (var i = 0; i < this._clipArr.length; i++) {
                        this._clipArr[i].update(0);
                    }
                }
            };
            BuyuGreatPage.prototype.setData = function (num) {
                var numStrArr = getSampleNum2(num);
                var start = 0, end = 0;
                if (numStrArr.length > 1) {
                    //有单位
                    this._viewUI.image_Wan.visible = true;
                    this._clipArr[this._clipArr.length - 1].visible = false;
                    end = this._clipArr.length - 2;
                    start = end - numStrArr[0].length + 1;
                }
                else {
                    end = this._clipArr.length - 1;
                    start = end - numStrArr[0].length + 1;
                }
                var timeIdx = 0;
                var index = numStrArr[0].length - 1;
                var _loop_1 = function (i) {
                    var clip = this_1._clipArr[i];
                    if (i >= start && i <= end) {
                        clip.visible = true;
                        Laya.timer.once(BuyuGreatPage.NUM_SHOW_TIME + BuyuGreatPage.NUM_STOP_INTERVAL * (timeIdx++), this_1, function (numChar) {
                            clip.stop(parseInt(numChar == "." ? 10 : numChar));
                        }, [numStrArr[0].charAt(index--)]);
                    }
                    else {
                        clip.visible = false;
                    }
                };
                var this_1 = this;
                for (var i = 4; i >= 0; i--) {
                    _loop_1(i);
                }
            };
            // 清理下页面
            BuyuGreatPage.prototype.close = function () {
                Laya.timer.clearAll(this);
                if (this._clipArr && this._clipArr.length > 0) {
                    for (var _i = 0, _a = this._clipArr; _i < _a.length; _i++) {
                        var clip = _a[_i];
                        clip.destroy();
                    }
                    this._clipArr = null;
                }
                _super.prototype.close.call(this);
            };
            BuyuGreatPage.NUM_SHOW_TIME = 1000; //数字空转多久
            BuyuGreatPage.NUM_STOP_INTERVAL = 500; //数字停留间隔
            return BuyuGreatPage;
        }(game.gui.base.Page));
        page.BuyuGreatPage = BuyuGreatPage;
        var NumClip = /** @class */ (function (_super) {
            __extends(NumClip, _super);
            function NumClip() {
                var _this = _super.call(this) || this;
                _this._clipArr = [];
                //0运动  1收到停止指令  2准备停止 3停止
                _this._state = 0;
                //最终数字
                _this._endNum = 0;
                _this._curNum = 1;
                _this._moveSpeed = 1000;
                _this._stopIndex = 0;
                _this.size(80, 101);
                var clip1 = new laya.ui.Clip(Path_game_buyu.ui_buyu + "great/clip_shuzi.png", 11);
                var clip2 = new laya.ui.Clip(Path_game_buyu.ui_buyu + "great/clip_shuzi.png", 11);
                clip1.size(80, 101);
                clip2.size(80, 101);
                _this._curNum = MathU.randomRange(0, 9);
                clip1.index = 0;
                clip2.index = _this._curNum;
                _this.addChild(clip1);
                _this.addChild(clip2);
                clip2.y = -clip2.height;
                _this._clipArr.push(clip1);
                _this._clipArr.push(clip2);
                return _this;
            }
            NumClip.prototype.stop = function (num) {
                this._state = 1;
                this._endNum = num;
                logd("电鱼结果数字 = ", this._endNum);
            };
            NumClip.prototype.update = function (diff) {
                this.updateClip(20);
            };
            NumClip.prototype.updateClip = function (diff) {
                if (this._state == 3)
                    return;
                var diffY = this._moveSpeed * diff / 1000;
                var max = 0;
                for (var i = 0; i < 2; i++) {
                    var clip = this._clipArr[i];
                    clip.y += diffY;
                }
                this.checkClip();
            };
            NumClip.prototype.checkClip = function () {
                if (this._state == 3)
                    return;
                for (var i = 0; i < 2; i++) {
                    var clip = this._clipArr[i];
                    this.checkState(i);
                    //超出显示区域了
                    if (clip.y >= clip.height) {
                        clip.y = -clip.height;
                    }
                }
            };
            NumClip.prototype.checkState = function (index) {
                var clip = this._clipArr[index];
                switch (this._state) {
                    case 0:
                        this._curNum = (this._curNum + 1) % 10;
                        clip.index = this._curNum;
                        break;
                    case 1:
                        clip.index = this._endNum;
                        this._stopIndex = index;
                        this._state = 2;
                        break;
                    case 2:
                        if (this._stopIndex == index) {
                            this._state = 3;
                            clip.y = 0;
                        }
                        else {
                            clip.visible = false;
                        }
                        break;
                }
            };
            NumClip.prototype.destroy = function () {
                Laya.timer.clearAll(this);
                if (this._clipArr && this._clipArr.length > 0) {
                    for (var _i = 0, _a = this._clipArr; _i < _a.length; _i++) {
                        var clip = _a[_i];
                        clip.destroy(true);
                    }
                    this._clipArr = null;
                }
                _super.prototype.destroy.call(this, true);
            };
            return NumClip;
        }(Laya.Panel));
    })(page = gamebuyu.page || (gamebuyu.page = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=BuyuGreatPage.js.map