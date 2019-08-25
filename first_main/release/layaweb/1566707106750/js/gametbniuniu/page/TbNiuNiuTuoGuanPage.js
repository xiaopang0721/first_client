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
var gametbniuniu;
(function (gametbniuniu) {
    var page;
    (function (page) {
        var TbNiuNiuTuoGuanPage = /** @class */ (function (_super) {
            __extends(TbNiuNiuTuoGuanPage, _super);
            function TbNiuNiuTuoGuanPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            TbNiuNiuTuoGuanPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.tbniuniu.TuoGuanUI');
                this.addChild(this._viewUI);
                this._checkBoxList = [];
                for (var i = 0; i < 5; i++) {
                    this._checkBoxList.push(this._viewUI["checkBox" + i]);
                }
                this._niuStory = this._game.sceneObjectMgr.story;
                this._niuMgr = this._niuStory.niuMgr;
                if (this._niuMgr && this._niuMgr.isTuoGuan) {
                    this.selectRate(this._niuMgr.isTuoGuan - 1);
                }
                else {
                    this.selectRate(0);
                }
            };
            // 页面打开时执行函数
            TbNiuNiuTuoGuanPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_cancel.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_enter.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.box_rate0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.box_rate1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.box_rate2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.box_rate3.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.box_rate4.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            };
            TbNiuNiuTuoGuanPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_cancel:
                        this.close();
                        break;
                    case this._viewUI.btn_enter:
                        this._niuMgr.isTuoGuan = this._tuoGuanRate;
                        this.close();
                        break;
                    case this._viewUI.box_rate0:
                        this.selectRate(0);
                        break;
                    case this._viewUI.box_rate1:
                        this.selectRate(1);
                        break;
                    case this._viewUI.box_rate2:
                        this.selectRate(2);
                        break;
                    case this._viewUI.box_rate3:
                        this.selectRate(3);
                        break;
                    case this._viewUI.box_rate4:
                        this.selectRate(4);
                        break;
                }
            };
            TbNiuNiuTuoGuanPage.prototype.selectRate = function (rate) {
                for (var i = 0; i < this._checkBoxList.length; i++) {
                    this._checkBoxList[i].selected = rate == i;
                }
                this._tuoGuanRate = rate + 1;
            };
            TbNiuNiuTuoGuanPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_cancel.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_enter.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.box_rate0.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.box_rate1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.box_rate2.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.box_rate3.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.box_rate4.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                }
                _super.prototype.close.call(this);
            };
            return TbNiuNiuTuoGuanPage;
        }(game.gui.base.Page));
        page.TbNiuNiuTuoGuanPage = TbNiuNiuTuoGuanPage;
    })(page = gametbniuniu.page || (gametbniuniu.page = {}));
})(gametbniuniu || (gametbniuniu = {}));
//# sourceMappingURL=TbNiuNiuTuoGuanPage.js.map