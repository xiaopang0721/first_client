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
var gamedating;
(function (gamedating) {
    var page;
    (function (page) {
        var JianPanPage = /** @class */ (function (_super) {
            __extends(JianPanPage, _super);
            function JianPanPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._numbtns = [];
                _this._engbtns = [];
                _this._code = {};
                _this._asset = [
                    DatingPath.atlas_dating_ui + "baoxianxiang.atlas",
                ];
                _this._isNeedDuang = false;
                _this._isNeedBlack = false;
                _this.mouseThrough = true;
                return _this;
            }
            // 页面初始化函数
            JianPanPage.prototype.init = function () {
                this._viewUI = this.createView("dating.JianPanUI");
                this.addChild(this._viewUI);
            };
            //重新布局
            JianPanPage.prototype.layout = function () {
                _super.prototype.layout.call(this);
                this._viewUI.img_bg.width = this._clientWidth;
            };
            // 页面打开时执行函数
            JianPanPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._str = gamedating.DatingGame.ins.jianPanMgr.inputTxt;
                //数字键盘
                this._viewUI.btn_pop.on(LEvent.CLICK, this, this.onClickHandle);
                this._viewUI.btn_enter.on(LEvent.CLICK, this, this.onClickHandle);
                this._viewUI.btn_clear.on(LEvent.CLICK, this, this.onClickHandle);
                for (var index = 0; index < 10; index++) {
                    this._numbtns[index] = this._viewUI["btn" + index];
                    this._viewUI["btn" + index].on(LEvent.CLICK, this, this.onClickHandle);
                }
                //英文键盘
                this._viewUI.btn_pop1.on(LEvent.CLICK, this, this.onClickHandle);
                this._viewUI.btn_enter1.on(LEvent.CLICK, this, this.onClickHandle);
                this._viewUI.btn_change.on(LEvent.CLICK, this, this.onClickHandle);
                for (var index = 0; index < 36; index++) {
                    this._engbtns[index] = this._viewUI["btn_e_" + index];
                    this._viewUI["btn_e_" + index].on(LEvent.CLICK, this, this.onClickHandle);
                }
                this._viewUI.box_number.visible = this.dataSource == JianPanPage.TYPE_INPUT_NUMBER;
                this._viewUI.box_english.visible = this.dataSource == JianPanPage.TYPE_INPUT_ENGLISH;
                this._letterCase = JianPanMgr.TYPE_LOWER_CASE;
                gamedating.DatingGame.ins.jianPanMgr.on(JianPanMgr.EVENT_CHANGE_TYPE, this, this.onUpdateType);
                gamedating.DatingGame.ins.jianPanMgr.on(JianPanMgr.EVENT_CAPS_LOCK, this, this.onUpdateCapsLock);
                gamedating.DatingGame.ins.jianPanMgr.on(JianPanMgr.EVENT_KEY_DOWN, this, this.onUpdateKeyDown);
                this.onUpdateCapsLock();
            };
            JianPanPage.prototype.onUpdateKeyDown = function () {
                this._str = gamedating.DatingGame.ins.jianPanMgr.inputTxt;
            };
            JianPanPage.prototype.onUpdateCapsLock = function () {
                if (gamedating.DatingGame.ins.jianPanMgr.capsLock) { //打开大写锁定
                    this._code = gamedating.DatingGame.ins.jianPanMgr.BLOCK_LETTER;
                }
                else {
                    this._code = gamedating.DatingGame.ins.jianPanMgr.LOWER_CASE;
                }
                for (var i = 0; i < this._engbtns.length; i++) {
                    this._engbtns[i].label = this._code[i.toString()];
                }
            };
            JianPanPage.prototype.onUpdateType = function (type) {
                if (type == JianPanPage.TYPE_INPUT_NUMBER) { //纯数字
                    this._viewUI.box_number.visible = true;
                    this._viewUI.box_english.visible = false;
                    this.dataSource = JianPanPage.TYPE_INPUT_NUMBER;
                }
                else { //英文
                    this._viewUI.box_number.visible = false;
                    this._viewUI.box_english.visible = true;
                    this.dataSource = JianPanPage.TYPE_INPUT_ENGLISH;
                }
                this._str = gamedating.DatingGame.ins.jianPanMgr.inputTxt;
            };
            JianPanPage.prototype.onMouseClick = function (e) {
                return this._viewUI.contains(e.target);
            };
            JianPanPage.prototype.onClickHandle = function (e) {
                if (!this._game)
                    return;
                this._game.uiRoot.btnTween(e.currentTarget);
                this._str = gamedating.DatingGame.ins.jianPanMgr.inputTxt;
                if (e.currentTarget == this._viewUI.btn_clear) {
                    this._str = "";
                }
                else if (e.currentTarget == this._viewUI.btn_pop) {
                    if (this._str.length > 0)
                        this._str = this._str.slice(0, -1);
                }
                else if (e.currentTarget == this._viewUI.btn_enter) {
                    this.close();
                    return;
                }
                else if (e.currentTarget == this._viewUI.btn_pop1) {
                    if (this._str.length > 0)
                        this._str = this._str.slice(0, -1);
                }
                else if (e.currentTarget == this._viewUI.btn_enter1) {
                    this.close();
                    return;
                }
                else if (e.currentTarget == this._viewUI.btn_change) {
                    gamedating.DatingGame.ins.jianPanMgr.capsLock = !gamedating.DatingGame.ins.jianPanMgr.capsLock;
                }
                else {
                    if (this.dataSource == JianPanPage.TYPE_INPUT_NUMBER) {
                        var numIdx = this._numbtns.indexOf(e.currentTarget);
                        if (numIdx != -1) {
                            //如果有小数点，并且已经到达小数点后两位，则不允许输入
                            // if (this._str.indexOf(".") != -1 && this._str.length - this._str.indexOf(".") > 2) {
                            // 	this._game.showTips("超出小数点可取范围")
                            // 	return;
                            // }
                            if (this._str.length >= gamedating.DatingGame.ins.jianPanMgr.inputTextUI.maxChars)
                                return;
                            this._str += numIdx.toString();
                        }
                    }
                    else if (this.dataSource == JianPanPage.TYPE_INPUT_ENGLISH) {
                        var engIdx = this._engbtns.indexOf(e.currentTarget);
                        if (engIdx != -1) {
                            if (this._str.length >= gamedating.DatingGame.ins.jianPanMgr.inputTextUI.maxChars)
                                return;
                            this._str += this._code[engIdx.toString()];
                        }
                    }
                }
                if (e.currentTarget != this._viewUI.btn_change) {
                    gamedating.DatingGame.ins.jianPanMgr.inputTxt = this._str;
                }
            };
            JianPanPage.prototype.close = function () {
                if (this._viewUI) {
                    gamedating.DatingGame.ins.jianPanMgr.inputTxt = this._str;
                    gamedating.DatingGame.ins.jianPanMgr.off(JianPanMgr.EVENT_CHANGE_TYPE, this, this.onUpdateType);
                    gamedating.DatingGame.ins.jianPanMgr.off(JianPanMgr.EVENT_CAPS_LOCK, this, this.onUpdateCapsLock);
                    gamedating.DatingGame.ins.jianPanMgr.off(JianPanMgr.EVENT_KEY_DOWN, this, this.onUpdateKeyDown);
                }
                _super.prototype.close.call(this);
            };
            JianPanPage.TYPE_INPUT_NUMBER = 1; //数字类型
            JianPanPage.TYPE_INPUT_ENGLISH = 2; //英文类型
            return JianPanPage;
        }(game.gui.base.Page));
        page.JianPanPage = JianPanPage;
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=JianPanPage.js.map