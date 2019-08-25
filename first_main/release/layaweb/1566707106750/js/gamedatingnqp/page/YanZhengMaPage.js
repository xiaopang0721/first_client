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
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page) {
        /**
         * 验证码
         */
        var YanZhengMaPage = /** @class */ (function (_super) {
            __extends(YanZhengMaPage, _super);
            function YanZhengMaPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._timeDiff = 0;
                _this._count = 0;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "yanzheng.atlas",
                ];
                _this._isNeedDuang = true;
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                _this._delta = 800;
                return _this;
            }
            YanZhengMaPage.prototype.deltaUpdate = function () {
                var ff = this._timeDiff - Laya.timer.currTimer;
                if (ff > 1000) {
                    this._viewUI.txt_time.text = (Math.floor(ff * .001) + "S后刷新");
                }
                else {
                    this.clearData();
                    this.changeData();
                }
            };
            // 页面初始化函数
            YanZhengMaPage.prototype.init = function () {
                this._viewUI = this.createView("dating.YanZhengUI");
                this.addChild(this._viewUI);
            };
            YanZhengMaPage.prototype.changeData = function () {
                if (this._downSp)
                    return;
                this._count = 0;
                this._viewUI.txt_time.text = ("10S后刷新");
                this._timeDiff = Laya.timer.currTimer + 10000;
                var randomW = MathU.randomRange(60, 70);
                var randomH = MathU.randomRange(60, 70);
                var x = MathU.randomRange(this._viewUI.img_bg.width * 0.5 + randomW + 10, this._viewUI.img_bg.width - randomW - 10);
                var y = MathU.randomRange(randomH + 10, this._viewUI.img_bg.height - randomH - 10);
                this._downSp = new Laya.Sprite();
                this._downSp.blendMode = "lighter";
                this._downSp.alpha = 0.6;
                this._downSp.graphics.drawRect(0, 0, randomW, randomH, this.getRamdomColor());
                this._downSp.x = x;
                this._downSp.y = y;
                this._viewUI.img_bg.skin = StringU.substitute("dating_ui/yanzheng/tu_yz{0}.png", MathU.randomRange(0, 4));
                this._upSp = new Laya.Sprite();
                var text = Laya.loader.getRes(this._viewUI.img_bg.skin);
                this._upSp.texture = Laya.Texture.createFromTexture(text, x, y, randomW, randomH);
                this._upX = this._upSp.x = MathU.randomRange(randomW + 10, Math.min(x - randomW - 10, MathU.randomRange(randomW + 10, this._viewUI.img_bg.width * .5 - randomW - 10)));
                this._upSp.y = y;
                this._viewUI.img_bg.addChild(this._downSp);
                this._viewUI.img_bg.addChild(this._upSp);
                this._viewUI.hslider.min = -this._upSp.x; //设置 this.hslider0 最低位置值。
                this._viewUI.hslider.max = this._viewUI.img_bg.width - this._upSp.x - this._upSp.texture.sourceWidth; //设置 this.hslider0 最高位置值。
                this._viewUI.hslider.tick = 1; //设置 this.hslider0 刻度值。
                this._viewUI.hslider.value = 0; //设置 this.hslider0 当前位置值。
                this._viewUI.hslider.changeHandler = new Handler(this, this.onChange); //设置 this.hslider0 位置变化处理器。
            };
            YanZhengMaPage.prototype.clearData = function () {
                if (this._upSp) {
                    this._upSp.removeSelf();
                    this._upSp.destroy();
                    this._upSp = null;
                }
                if (this._downSp) {
                    this._downSp.removeSelf();
                    this._downSp.destroy();
                    this._downSp = null;
                }
                if (this._viewUI.hslider.changeHandler) {
                    this._viewUI.hslider.changeHandler.clear();
                    this._viewUI.hslider.changeHandler = null;
                }
            };
            YanZhengMaPage.prototype.getRamdomColor = function () {
                var color = "#";
                color += '0123456789abcdef'[Math.floor(Math.random() * 16)];
                color += '0123456789abcdef'[Math.floor(Math.random() * 16)];
                color += '0123456789abcdef'[Math.floor(Math.random() * 16)];
                color += '0123456789abcdef'[Math.floor(Math.random() * 16)];
                color += '0123456789abcdef'[Math.floor(Math.random() * 16)];
                color += '0123456789abcdef'[Math.floor(Math.random() * 16)];
                return color;
            };
            // 页面打开时执行函数
            YanZhengMaPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
            };
            YanZhengMaPage.prototype.onMouseDown = function (e) {
                this._mouseDown = true;
            };
            YanZhengMaPage.prototype.onMouseUp = function (e) {
                this._mouseDown = false;
                if (!this._upSp)
                    return;
                var b = Math.abs(this._upSp.x - this._downSp.x);
                if (b < 4) {
                    if (this._dataSource && this._dataSource instanceof Handler) {
                        this._dataSource.run();
                        this._dataSource = null;
                    }
                    this.close();
                }
                else {
                    if (this._count > 3) {
                        this.clearData();
                        this.changeData();
                        return;
                    }
                    this._upSp.x = this._upX;
                    this._viewUI.hslider.value = 0;
                    this._count++;
                }
            };
            YanZhengMaPage.prototype.onChange = function (value) {
                if (!this._viewUI)
                    return;
                if (!this._mouseDown)
                    return;
                // logd("============", value)
                if (!this._upSp)
                    return;
                this._upSp.x = this._upX + value;
            };
            // 清理下页面
            YanZhengMaPage.prototype.close = function () {
                if (this._viewUI) {
                    this.clearData();
                    if (this._dataSource && this._dataSource instanceof Handler) {
                        this._dataSource.recover();
                        this._dataSource = null;
                    }
                }
                _super.prototype.close.call(this);
            };
            return YanZhengMaPage;
        }(game.gui.base.Page));
        page.YanZhengMaPage = YanZhengMaPage;
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=YanZhengMaPage.js.map