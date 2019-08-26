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
* name 推广
*/
var gamedating;
(function (gamedating) {
    var page;
    (function (page) {
        var SharePage = /** @class */ (function (_super) {
            __extends(SharePage, _super);
            function SharePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "fenxiang.atlas",
                ];
                _this._isNeedBlack = true;
                return _this;
            }
            // 页面初始化函数
            SharePage.prototype.init = function () {
                this._viewUI = this.createView("dating.FenXiang1UI");
                this.addChild(this._viewUI);
                //我的分享
                this._viewUI.list0.vScrollBarSkin = "";
                this._viewUI.list0.scrollBar.elasticDistance = 100;
                this._viewUI.list0.itemRender = this.createChildren("dating.component.FenXiangTUI", MyFenXiangT);
                this._viewUI.list0.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list0.visible = false;
                //上周记录
                this._viewUI.list1.vScrollBarSkin = "";
                this._viewUI.list1.scrollBar.elasticDistance = 100;
                this._viewUI.list1.itemRender = this.createChildren("dating.component.FenXiangT4UI", FenXiangLastWeekT);
                this._viewUI.list1.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list1.visible = false;
                //奖励记录
                this._viewUI.list2.vScrollBarSkin = "";
                this._viewUI.list2.scrollBar.elasticDistance = 100;
                this._viewUI.list2.itemRender = this.createChildren("dating.component.FenXiangT3UI", FenXiangRecord);
                this._viewUI.list2.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list2.visible = false;
                if (!this._clipJf) {
                    this._clipJf = new DatingClip(DatingClip.SHARE_FONT);
                    this._clipJf.x = this._viewUI.clip_record.x;
                    this._clipJf.y = this._viewUI.clip_record.y;
                    this._clipJf.centerX = 0;
                    this._viewUI.clip_record.parent.addChild(this._clipJf);
                    this._viewUI.clip_record.removeSelf();
                }
            };
            SharePage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.dataSource["index"] = index;
                    cell.setData(this._game, cell.dataSource);
                }
            };
            SharePage.prototype.selectHandler = function (index) {
                for (var indx = 0; indx < 4; indx++) {
                    this._viewUI["box" + indx].visible = index == indx;
                }
                if (index == 0) {
                    this._game.sceneGame.network.call_get_myshare();
                }
                else if (index == 1) {
                    this._game.sceneGame.network.call_get_agrlastweek();
                }
                else if (index == 2) {
                    this._game.sceneGame.network.call_get_rbmoneylog();
                }
            };
            // 页面打开时执行函数
            SharePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this._viewUI.tab.selectHandler = new Handler(this, this.selectHandler);
                this._viewUI.tab.selectedIndex = 0;
                this._viewUI.btn_join.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_lq.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            };
            SharePage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_GETMYSHARE) { //我的分享
                    if (data && data.success == 0) {
                        this._clipJf.setText(data.rb_money_history, true);
                        data.rb_money && (this._viewUI.txt_klq.text = data.rb_money.toString());
                        if (data.msg) {
                            this._viewUI.list0.dataSource = data.msg.list;
                        }
                        else {
                            this._viewUI.list0.dataSource = [];
                        }
                        this._viewUI.list0.visible = data.msg && data.msg.list && data.msg.list.length > 0;
                        this._viewUI.box_no_0.visible = !this._viewUI.list0.visible;
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_GETAGRLASTWEEK) { //分享奖励明细
                    if (data && data.success == 0) {
                        if (data.msg) {
                            this._viewUI.list1.dataSource = data.msg.list;
                        }
                        else {
                            this._viewUI.list1.dataSource = [];
                        }
                        this._viewUI.list1.visible = data.msg && data.msg.list && data.msg.list.length > 0;
                        this._viewUI.box_no_1.visible = !this._viewUI.list1.visible;
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_GETRBMONEYLOG) { //分享奖励记录
                    if (data && data.success == 0) {
                        if (data.msg) {
                            this._viewUI.list2.dataSource = data.msg.list;
                        }
                        else {
                            this._viewUI.list2.dataSource = [];
                        }
                        this._viewUI.list2.visible = data.msg && data.msg.list && data.msg.list.length > 0;
                        this._viewUI.box_no_2.visible = !this._viewUI.list2.visible;
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_GETRBMONEY) {
                    if (data && data.success == 0) {
                        if (data.msg.rb_money_history) {
                            this._clipJf.setText(data.msg.rb_money_history, true);
                        }
                        if (data.msg.rb_money) {
                            this._viewUI.txt_klq.text = data.msg.rb_money.toString();
                        }
                        // this._game.uiRoot.general.open(DatingPageDef.PAGE_GET_REWARD,(page:RewardPage)=>{
                        // 	page.setData(data.msg.award,this._icons[this._days - 1].skin);
                        // })
                    }
                }
            };
            SharePage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_join:
                        this._game.uiRoot.general.open(page.DatingPageDef.PAGE_QUANMINDAILI);
                        break;
                    case this._viewUI.btn_lq:
                        if (!this._viewUI.txt_klq.text || !parseInt(this._viewUI.txt_klq.text)) {
                            this._game.showTips("当前剩余可领取金额不足");
                            return;
                        }
                        this._game.sceneGame.network.call_get_rbmoney();
                        break;
                }
            };
            SharePage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                    if (this._clipJf) {
                        this._clipJf.removeSelf();
                        this._clipJf.destroy();
                        this._clipJf = null;
                    }
                }
                _super.prototype.close.call(this);
            };
            return SharePage;
        }(game.gui.base.Page));
        page.SharePage = SharePage;
        //我的分享
        var MyFenXiangT = /** @class */ (function (_super) {
            __extends(MyFenXiangT, _super);
            function MyFenXiangT() {
                var _this = _super.call(this) || this;
                _this._itemX = _this.x;
                return _this;
            }
            /**
             *
             * @param game
             * @param data
             */
            MyFenXiangT.prototype.setData = function (game, data) {
                this._data = data;
                this.txt_time.text = Sync.getTimeStr(data.last_login_time * 1000);
                this.txt_money.text = data.money;
                this.txt_nickname.text = data.nickname;
                this.img_lock.visible = data.is_lock > 0;
                this.visible = true;
                Laya.Tween.clearAll(this);
                if (!this._isTween) {
                    this.visible = true;
                    var x = this.x;
                    this.x = this.width + 10;
                    Laya.Tween.to(this, {
                        x: x
                    }, 500, Laya.Ease.linearIn, null, data.index * 200);
                    this._isTween = true;
                }
                else {
                    this.x = this._itemX;
                }
            };
            return MyFenXiangT;
        }(ui.dating.component.FenXiangTUI));
        //上周记录
        var FenXiangLastWeekT = /** @class */ (function (_super) {
            __extends(FenXiangLastWeekT, _super);
            function FenXiangLastWeekT() {
                var _this = _super.call(this) || this;
                _this._itemX = _this.x;
                return _this;
            }
            /**
             *
             * @param game
             * @param data
             */
            FenXiangLastWeekT.prototype.setData = function (game, data) {
                this._data = data;
                this.txt_selffy.text = data.selffy;
                this.txt_allfy.text = data.allfy;
                this.txt_bet.text = data.bet;
                this.txt_nickname.text = data.nickname;
                this.visible = true;
                Laya.Tween.clearAll(this);
                if (!this._isTween) {
                    this.visible = true;
                    var x = this.x;
                    this.x = this.width + 10;
                    Laya.Tween.to(this, {
                        x: x
                    }, 500, Laya.Ease.linearIn, null, data.index * 200);
                    this._isTween = true;
                }
                else {
                    this.x = this._itemX;
                }
            };
            return FenXiangLastWeekT;
        }(ui.dating.component.FenXiangT4UI));
        //记录
        var FenXiangRecord = /** @class */ (function (_super) {
            __extends(FenXiangRecord, _super);
            function FenXiangRecord() {
                var _this = _super.call(this) || this;
                _this._itemX = _this.x;
                return _this;
            }
            /**
             *
             * @param game
             * @param data
             */
            FenXiangRecord.prototype.setData = function (game, data) {
                this._data = data;
                this.txt_time.text = Sync.getTimeStr(data.addtime * 1000);
                this.txt_money.text = data.money;
                this.txt_type.text = data.rb_type;
                this.txt_from_nickname.text = data.from_nikename;
                this.visible = true;
                Laya.Tween.clearAll(this);
                if (!this._isTween) {
                    this.visible = true;
                    var x = this.x;
                    this.x = this.width + 10;
                    Laya.Tween.to(this, {
                        x: x
                    }, 500, Laya.Ease.linearIn, null, data.index * 200);
                    this._isTween = true;
                }
                else {
                    this.x = this._itemX;
                }
            };
            return FenXiangRecord;
        }(ui.dating.component.FenXiangT3UI));
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=SharePage.js.map