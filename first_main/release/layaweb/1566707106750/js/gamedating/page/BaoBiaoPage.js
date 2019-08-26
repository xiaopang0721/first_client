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
* name 报表界面
*/
var gamedating;
(function (gamedating) {
    var page;
    (function (page_1) {
        var BaoBiaoPage = /** @class */ (function (_super) {
            __extends(BaoBiaoPage, _super);
            function BaoBiaoPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._timeList = [];
                _this._asset = [
                    DatingPath.atlas_dating_ui + "baobiao.atlas",
                ];
                _this._isNeedBlack = true;
                return _this;
            }
            // 页面初始化函数
            BaoBiaoPage.prototype.init = function () {
                this._viewUI = this.createView("dating.BaoBiaoUI");
                this.addChild(this._viewUI);
                this._viewUI.list_bb.visible = false;
                this._viewUI.txt_no.visible = false;
                this._selectTime = this._game.sceneGame.sync.serverTimeBys;
                this._timeSelectIndex = 6;
                for (var i = 0; i < 7; i++) {
                    this._timeList[i] = this._selectTime - 86400 * (6 - i);
                    this._viewUI["btn_" + i].label = Sync.getTimeStr3(this._timeList[i]);
                    this._viewUI["btn_" + i].on(LEvent.CLICK, this, this.onMouseHandle, [i]);
                }
                if (!this._htmlText) {
                    this._htmlText = TextFieldU.createHtmlText(this._viewUI.txt_total);
                }
                this._viewUI.btn_select.label = Sync.getTimeStr3(this._selectTime);
                var str = "<span style='color:{0}'>汇总：{1}</span>";
                var colorHtml = this._viewUI.txt_total.color;
                var innerHtml = StringU.substitute(str, colorHtml, 0);
                this._htmlText.innerHTML = innerHtml;
                this._viewUI.box_btn.visible = false;
                this._notStageClickUI = [this._viewUI.btn_select];
            };
            BaoBiaoPage.prototype.onMouseClick = function (e) {
                if (!this._viewUI.box_btn.visible)
                    return;
                for (var index = 0; index < this._notStageClickUI.length; index++) {
                    var v = this._notStageClickUI[index];
                    if (v.contains(e.target)) {
                        return;
                    }
                }
                this.updateBoxBtnStatus();
            };
            BaoBiaoPage.prototype.updateBoxBtnStatus = function () {
                this._viewUI.box_btn.visible = false;
            };
            BaoBiaoPage.prototype.onMouseHandle = function (index, e) {
                if (index == this._timeSelectIndex)
                    return;
                this._viewUI.list_bb.scrollTo(0);
                this._lastIndex = 0;
                this._timeSelectIndex = index;
                this._selectTime = this._timeList[index]; //选择的时间
                this._viewUI.btn_select.label = Sync.getTimeStr3(this._selectTime);
                this.updateBoxBtnStatus();
                this.onUpdateDataInfo();
            };
            // 页面打开时执行函数
            BaoBiaoPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.list_bb.vScrollBarSkin = "";
                this._viewUI.list_bb.scrollBar.elasticDistance = 100;
                this._viewUI.list_bb.itemRender = this.createChildren("dating.component.BaoBiaoTUI", BaoBiaoItemRender);
                this._viewUI.list_bb.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.btn_select.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                gamedating.DatingGame.ins.baobiaoMgr.on(BaoBiaoMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);
                this.onUpdateDataInfo();
            };
            //按钮缓动回调
            BaoBiaoPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_select:
                        this._viewUI.box_btn.visible = !this._viewUI.box_btn.visible;
                        // for (let index = 0; index < 7; index++) {
                        // 	let target = index == 6 ? this._viewUI.btn_select : this._viewUI["btn_" + (index + 1)];
                        // 	Laya.Tween.from(this._viewUI["btn_" + index], { y: target.y }, 200, null, null, (6 - index) * 200);
                        // }
                        break;
                    default:
                        break;
                }
            };
            BaoBiaoPage.prototype.onUpdateDataInfo = function (data) {
                this._dataInfo = [];
                var value = gamedating.DatingGame.ins.baobiaoMgr.getDataInfo(this._timeSelectIndex);
                var count = 0;
                for (var key in value) {
                    if (value[key] && value[key].length > 0)
                        count++;
                }
                this._viewUI.txt_no.visible = !count;
                this._viewUI.list_bb.visible = count > 0;
                var str = "<span style='color:{0}'>汇总：{1}</span>";
                var colorHtml = this._viewUI.txt_total.color;
                var innerHtml = "";
                if (!count) {
                    !data && gamedating.DatingGame.ins.baobiaoMgr.getData(1, this._selectTime, this._timeSelectIndex);
                    innerHtml = StringU.substitute(str, colorHtml, 0);
                    this._htmlText.innerHTML = innerHtml;
                    return;
                }
                for (var key in value) {
                    if (value.hasOwnProperty(key)) {
                        var cc = value[key];
                        if (cc) {
                            for (var index = 0; index < cc.length; index++) {
                                var aa = cc[index];
                                aa["rank"] = index + parseInt(key) * BaoBiaoMgr.PAGE_MAX - BaoBiaoMgr.PAGE_MAX;
                            }
                            this._dataInfo = this._dataInfo.concat(cc);
                        }
                    }
                }
                this._viewUI.list_bb.dataSource = this._dataInfo;
                var all = gamedating.DatingGame.ins.baobiaoMgr.getTotalByIndex(this._timeSelectIndex);
                colorHtml = all > 0 ? this._viewUI.txt_total.color : "#ff0000";
                innerHtml = StringU.substitute(str, colorHtml, EnumToString.getPointBackNum(all, 2));
                this._htmlText.innerHTML = innerHtml;
            };
            BaoBiaoPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                    var page_2 = Math.floor((index + 10) / BaoBiaoMgr.PAGE_MAX) + 1;
                    if (!gamedating.DatingGame.ins.baobiaoMgr.getDataInfo(this._timeSelectIndex)[page_2]) {
                        if (gamedating.DatingGame.ins.baobiaoMgr.getDataInfo(this._timeSelectIndex)[page_2 - 1] && gamedating.DatingGame.ins.baobiaoMgr.getDataInfo(this._timeSelectIndex)[page_2 - 1].length >= BaoBiaoMgr.PAGE_MAX) {
                            gamedating.DatingGame.ins.baobiaoMgr.getDataInfo(this._timeSelectIndex)[page_2] = {};
                            if (index - this._lastIndex < BaoBiaoMgr.PAGE_MAX * 0.5)
                                return;
                            this._lastIndex = index;
                            gamedating.DatingGame.ins.baobiaoMgr.getData(page_2, this._selectTime, this._timeSelectIndex);
                        }
                    }
                }
            };
            BaoBiaoPage.prototype.close = function () {
                if (this._viewUI) {
                    gamedating.DatingGame.ins.baobiaoMgr.clear();
                    gamedating.DatingGame.ins.baobiaoMgr.off(BaoBiaoMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);
                }
                _super.prototype.close.call(this);
            };
            return BaoBiaoPage;
        }(game.gui.base.Page));
        page_1.BaoBiaoPage = BaoBiaoPage;
        var BaoBiaoItemRender = /** @class */ (function (_super) {
            __extends(BaoBiaoItemRender, _super);
            function BaoBiaoItemRender() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BaoBiaoItemRender.prototype.setData = function (game, data) {
                this._game = game;
                this._data = data;
                this.txt_index.text = data.rank + 1;
                this.img_bg.skin = StringU.substitute(DatingPath.ui_dating_tongyong + "tu_bb{0}.png", data.rank % 2 == 0 ? 1 : 2);
                this.txt_type.text = data.game_name + Web_operation_fields.client_money_logtype_table[data.type];
                this.txt_time.text = Sync.getTimeStr(data.time * 1000);
                this.txt_money.text = data.shouzhi.toString();
                this.txt_money.color = data.shouzhi > 0 ? "#069e00" : "#ff0000";
                this.txt_earn.text = data.money.toString();
            };
            return BaoBiaoItemRender;
        }(ui.dating.component.BaoBiaoTUI));
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=BaoBiaoPage.js.map