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
* name 提取记录
*/
var gamedating;
(function (gamedating) {
    var page;
    (function (page_1) {
        var TiQuJiLvPage = /** @class */ (function (_super) {
            __extends(TiQuJiLvPage, _super);
            function TiQuJiLvPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "tuiguang.atlas",
                ];
                _this._isNeedBlack = true;
                return _this;
            }
            // 页面初始化函数
            TiQuJiLvPage.prototype.init = function () {
                this._viewUI = this.createView("dating.TuiGuangJiLuUI");
                this.addChild(this._viewUI);
                this._viewUI.list_record.vScrollBarSkin = "";
                this._viewUI.list_record.scrollBar.elasticDistance = 100;
                this._viewUI.list_record.itemRender = this.createChildren("dating.component.FanYongTUI", FanYongT);
                this._viewUI.list_record.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_record.visible = false;
            };
            TiQuJiLvPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                    var page_2 = Math.floor((index + 10) / FanYongMgr.PAGE_MAX) + 1;
                    if (!gamedating.DatingGame.ins.fanYongMgr.dataInfo[page_2]) {
                        if (gamedating.DatingGame.ins.fanYongMgr.dataInfo[page_2 - 1] && gamedating.DatingGame.ins.fanYongMgr.dataInfo[page_2 - 1].length >= FanYongMgr.PAGE_MAX) {
                            gamedating.DatingGame.ins.fanYongMgr.dataInfo[page_2] = {};
                            gamedating.DatingGame.ins.fanYongMgr.getData(page_2);
                        }
                    }
                }
            };
            // 页面打开时执行函数
            TiQuJiLvPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                gamedating.DatingGame.ins.fanYongMgr.on(FanYongMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);
                this.onUpdateDataInfo();
            };
            TiQuJiLvPage.prototype.onUpdateDataInfo = function (data) {
                this._dataInfo = [];
                var value = gamedating.DatingGame.ins.fanYongMgr.dataInfo;
                var count = 0;
                for (var key in value) {
                    if (value[key] && value[key].length > 0)
                        count++;
                }
                this._viewUI.txt_no.visible = !count;
                this._viewUI.list_record.visible = count > 0;
                if (!count) {
                    if (!data)
                        gamedating.DatingGame.ins.fanYongMgr.getData(1);
                    return;
                }
                for (var key in value) {
                    if (value.hasOwnProperty(key)) {
                        var cc = value[key];
                        if (cc) {
                            for (var index = 0; index < cc.length; index++) {
                                var aa = cc[index];
                                aa["rank"] = index + parseInt(key) * FanYongMgr.PAGE_MAX - FanYongMgr.PAGE_MAX;
                            }
                            this._dataInfo = this._dataInfo.concat(cc);
                        }
                    }
                }
                this._viewUI.list_record.dataSource = this._dataInfo;
            };
            TiQuJiLvPage.prototype.onBtnTweenEnd = function (e, target) {
            };
            TiQuJiLvPage.prototype.close = function () {
                if (this._viewUI) {
                    gamedating.DatingGame.ins.fanYongMgr.on(FanYongMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);
                }
                _super.prototype.close.call(this);
            };
            return TiQuJiLvPage;
        }(game.gui.base.Page));
        page_1.TiQuJiLvPage = TiQuJiLvPage;
        var FanYongT = /** @class */ (function (_super) {
            __extends(FanYongT, _super);
            function FanYongT() {
                var _this = _super.call(this) || this;
                _this._itemX = _this.x;
                return _this;
            }
            /**
             *
             * @param game
             * id:"21"
                lv:"1"
                maxmoney:"50000"
                minmoney:"1"
                name:"支付宝"
                paytype:"ZFBH5"
             * @param data
             */
            FanYongT.prototype.setData = function (game, data) {
                this.dataSource = data;
                this.txt_time.text = Sync.getTimeStr(data.create_time * 1000);
                this.txt_zt.text = data.status;
                this.txt_money.text = data.money || "0";
                this.img_bg.skin = StringU.substitute(DatingPath.ui_dating_tongyong + "tu_bb{0}.png", data.rank % 2 == 0 ? 1 : 2);
                this.visible = true;
                Laya.Tween.clearAll(this);
                if (!this._isTween) {
                    this.visible = true;
                    var x = this.x;
                    this.x = this.width + 10;
                    Laya.Tween.to(this, {
                        x: x
                    }, 500, Laya.Ease.linearIn, null, data.rank * 200);
                    this._isTween = true;
                }
                else {
                    this.x = this._itemX;
                }
            };
            return FanYongT;
        }(ui.dating.component.FanYongTUI));
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=TiQuJiLvPage.js.map