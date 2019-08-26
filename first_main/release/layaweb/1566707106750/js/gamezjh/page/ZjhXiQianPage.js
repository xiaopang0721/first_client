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
* 炸金花
*/
var gamezjh;
(function (gamezjh) {
    var page;
    (function (page) {
        var ZjhXiQianPage = /** @class */ (function (_super) {
            __extends(ZjhXiQianPage, _super);
            function ZjhXiQianPage(val, ZjhMgr) {
                var _this = _super.call(this) || this;
                _this.clip_num0.interval = 50;
                _this.clip_num1.interval = 50;
                _this.clip_num2.interval = 50;
                _this.clip_num0.play();
                _this.clip_num1.play();
                _this.clip_num2.play();
                _this._zjhMgr = ZjhMgr;
                _this.updateUI(val);
                return _this;
            }
            //更新
            ZjhXiQianPage.prototype.updateUI = function (val) {
                var _this = this;
                var val0 = Math.floor(val / 100);
                var val1 = Math.floor(val % 100 / 10);
                var val2 = val % 10;
                Laya.timer.once(1000, this, function () {
                    _this.clip_num0.index = val0;
                    _this.clip_num0.stop();
                });
                Laya.timer.once(1500, this, function () {
                    _this.clip_num1.index = val1;
                    _this.clip_num1.stop();
                });
                Laya.timer.once(2000, this, function () {
                    _this.clip_num2.index = val2;
                    _this.clip_num2.stop();
                });
                Laya.timer.once(3000, this, function () {
                    _this._zjhMgr.event(ZjhMgr.XIQIAN_END);
                    _this.close();
                });
            };
            ZjhXiQianPage.prototype.close = function () {
                Laya.timer.clearAll(this);
                this.removeSelf();
                this.destroy();
            };
            return ZjhXiQianPage;
        }(ui.game_ui.zhajinhua.component.XiQianUI));
        page.ZjhXiQianPage = ZjhXiQianPage;
    })(page = gamezjh.page || (gamezjh.page = {}));
})(gamezjh || (gamezjh = {}));
//# sourceMappingURL=ZjhXiQianPage.js.map