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
var gamedating;
(function (gamedating) {
    var page;
    (function (page) {
        /**
         * 下拉提示
         * name
         */
        var TipsPage = /** @class */ (function (_super) {
            __extends(TipsPage, _super);
            function TipsPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._index = 0;
                _this._nextCheckTween = -1;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "tongyong.atlas",
                ];
                _this._delta = 100;
                return _this;
            }
            Object.defineProperty(TipsPage.prototype, "dataSource", {
                /**数据*/
                set: function (v) {
                    // logd("================tip dataSource",v)
                    this._dataSource = v;
                    this._message = v;
                    if (this.isOpened)
                        this.updateView();
                },
                enumerable: true,
                configurable: true
            });
            // 页面初始化函数
            TipsPage.prototype.init = function () {
                this._viewUI = this._view = this.createView("dating.TipsXiaLaUI");
                this._viewUI.mouseEnabled = false;
                this.addChild(this._viewUI);
                this._frames = [{ scaleX: 0.9, scaleY: 0.9, alpha: 0, centerY: 0 }, { scaleX: 1, scaleY: 1, alpha: 1, centerY: 0 }, { scaleX: 1, scaleY: 1, alpha: 1, centerY: 0 }, { scaleX: 1, scaleY: 1, alpha: 0, centerY: -67 }];
                this._times = [0, 5, 25, 35];
            };
            // 页面打开时执行函数
            TipsPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                // this.updateView();
            };
            TipsPage.prototype.deltaUpdate = function () {
                _super.prototype.deltaUpdate.call(this);
                if (this._nextCheckTween > 0 && Laya.timer.currTimer - this._nextCheckTween > 200) {
                    if (this._index >= 0 && this._index < this._frames.length) {
                        this.showAniShow();
                    }
                    else {
                        this.close();
                    }
                }
            };
            TipsPage.prototype.close = function () {
                // logd("================tip close")
                if (this._viewUI) {
                    this.clearAll();
                }
                _super.prototype.close.call(this);
            };
            //更新界面
            TipsPage.prototype.updateView = function () {
                if (!this._viewUI)
                    return;
                //置顶
                if (this.parent && this.parent.numChildren)
                    this.parent.setChildIndex(this, this.parent.numChildren - 1);
                this._viewUI.visible = true;
                this._viewUI.txtTips.text = this._message;
                this._viewUI.txtTips.width = this._viewUI.txtTips.textWidth + 20;
                this.showAniShow();
            };
            //展示显示动画
            TipsPage.prototype.showAniShow = function () {
                Laya.Tween.clearAll(this._viewUI.boxTips);
                this._viewUI.boxTips.scale(0.9, 0.9);
                this._viewUI.boxTips.alpha = 0;
                this._viewUI.boxTips.centerY = 0;
                this._viewUI.boxTips.width = this._viewUI.image_Bg.width = this._viewUI.box_tip.width = this._viewUI.txtTips.width;
                this._index = 0;
                this._nextCheckTween = -1;
                this.updateTween();
            };
            TipsPage.prototype.updateTween = function () {
                if (!this._viewUI || this._index < 0 || this._index >= this._frames.length) {
                    //结束了
                    this.close();
                    this.clearAll();
                    return;
                }
                var frame = this._frames[this._index];
                var prev = this._index > 0 ? this._times[this._index - 1] : this._times[0];
                var time = (this._times[this._index] - prev) * 1000 / 20;
                this._nextCheckTween = Laya.timer.currTimer + time;
                this._index++;
                Laya.Tween.to(this._viewUI.boxTips, frame, time, Laya.Ease.linearNone, Handler.create(this, this.updateTween));
            };
            TipsPage.prototype.clearAll = function () {
                if (this._viewUI) {
                    if (this._viewUI) {
                        this._viewUI.txtTips.text = null;
                    }
                    Laya.Tween.clearAll(this._viewUI.boxTips);
                    this._viewUI.visible = false;
                }
            };
            return TipsPage;
        }(game.gui.base.Page));
        page.TipsPage = TipsPage;
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=TipsPage.js.map