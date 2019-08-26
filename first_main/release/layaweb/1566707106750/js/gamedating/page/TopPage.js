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
* name 签到
*/
var gamedating;
(function (gamedating) {
    var page;
    (function (page) {
        var TopPage = /** @class */ (function (_super) {
            __extends(TopPage, _super);
            function TopPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                //更新自己排行榜
                _this._qifuNameStr = ["xs", "px", "gsy", "gg", "cs", "tdg"];
                _this._asset = [
                    DatingPath.atlas_dating_ui + "top.atlas",
                    DatingPath.atlas_dating_ui + "touxiang.atlas",
                ];
                _this._isNeedDuang = true;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                return _this;
            }
            // 页面初始化函数
            TopPage.prototype.init = function () {
                this._viewUI = this.createView("dating.TopUI");
                this.addChild(this._viewUI);
                if (!this._clip_money) {
                    this._clip_money = new DatingClip(DatingClip.MONEY_FONT2);
                    this._clip_money.x = this._viewUI.clip_money.x;
                    this._clip_money.y = this._viewUI.clip_money.y;
                    this._viewUI.clip_money.parent.addChild(this._clip_money);
                    this._viewUI.clip_money.removeSelf();
                }
                if (!this._clip_rank) {
                    this._clip_rank = new DatingClip(DatingClip.RANK_FONT2);
                    this._clip_rank.x = this._viewUI.clip_num.x;
                    this._clip_rank.y = this._viewUI.clip_num.y;
                    this._viewUI.clip_num.parent.addChild(this._clip_rank);
                    this._viewUI.clip_num.removeSelf();
                    this._rankX = this._clip_rank.x;
                }
                this._viewUI.list.vScrollBarSkin = "";
                this._viewUI.list.scrollBar.elasticDistance = 100;
                this._viewUI.list.itemRender = this.createChildren("dating.component.TopTUI", TopItemRender);
                this._viewUI.list.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list.visible = false;
                gamedating.DatingGame.ins.topMgr.on(TopMgr.EVENT_CHANGE, this, this.onUpdateInfo);
                this._viewUI.tab.selectHandler = new Handler(this, this.tbselectHandler);
                this._viewUI.tab.selectedIndex = 0;
            };
            TopPage.prototype.onUpdateInfo = function () {
                var list = gamedating.DatingGame.ins.topMgr.rankingInfo[this._viewUI.tab.selectedIndex];
                if (list) {
                    this._viewUI.list.dataSource = list;
                }
                this._viewUI.list.visible = list != null;
                this.updateMyRank();
            };
            TopPage.prototype.tbselectHandler = function (index) {
                gamedating.DatingGame.ins.topMgr.getRankingList(index);
            };
            TopPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            // 页面打开时执行函数
            TopPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
            };
            TopPage.prototype.updateMyRank = function () {
                this._viewUI.img_head.skin = DatingPath.ui_dating + "touxiang/head_" + WebConfig.info.headimg + ".png";
                if (WebConfig.info.qifu_type > 0 && WebConfig.info.qifu_endtime > this._game.sceneGame.sync.serverTimeBys) {
                    this._viewUI.img_head.skin = DatingPath.ui_dating + "touxiang/head_" + this._qifuNameStr[WebConfig.info.qifu_type - 1] + ".png";
                }
                this._viewUI.txt_id.text = WebConfig.info.nickname;
                var myrank = gamedating.DatingGame.ins.topMgr.myData.myrank;
                var mymoney = gamedating.DatingGame.ins.topMgr.myData.mymoney;
                this._clip_money.setText(mymoney, true, false);
                this._viewUI.img_rank.visible = myrank > 0 && myrank <= 3;
                this._viewUI.txt_no.visible = myrank == 0;
                this._clip_rank.visible = myrank > 3;
                if (myrank > 0 && myrank <= 3) {
                    this._viewUI.img_rank.skin = StringU.substitute(DatingPath.ui_dating + "top/top{0}.png", myrank);
                }
                else if (myrank > 3) {
                    this._clip_rank.setText(myrank, true, false);
                    this._clip_rank.x = myrank > 9 ? this._rankX - 25 : this._rankX - 15;
                }
            };
            TopPage.prototype.onBtnTweenEnd = function (e, target) {
            };
            TopPage.prototype.close = function () {
                if (this._viewUI) {
                    gamedating.DatingGame.ins.topMgr.off(TopMgr.EVENT_CHANGE, this, this.onUpdateInfo);
                    if (this._clip_money) {
                        this._clip_money.removeSelf();
                        this._clip_money.destroy();
                        this._clip_money = null;
                    }
                    if (this._clip_rank) {
                        this._clip_rank.removeSelf();
                        this._clip_rank.destroy();
                        this._clip_rank = null;
                    }
                }
                _super.prototype.close.call(this);
            };
            return TopPage;
        }(game.gui.base.Page));
        page.TopPage = TopPage;
        var TopItemRender = /** @class */ (function (_super) {
            __extends(TopItemRender, _super);
            function TopItemRender() {
                var _this = _super.call(this) || this;
                _this._qifuNameStr = ["xs", "px", "gsy", "gg", "cs", "tdg"];
                if (!_this._clip_money) {
                    _this._clip_money = new DatingClip(DatingClip.MONEY_FONT2);
                    _this._clip_money.x = _this.clip_money.x;
                    _this._clip_money.y = _this.clip_money.y;
                    _this.clip_money.parent.addChild(_this._clip_money);
                    _this.clip_money.removeSelf();
                }
                if (!_this._clip_rank) {
                    _this._clip_rank = new DatingClip(DatingClip.RANK_FONT2);
                    _this._clip_rank.x = _this.clip_num.x;
                    _this._clip_rank.y = _this.clip_num.y;
                    _this.clip_num.parent.addChild(_this._clip_rank);
                    _this.clip_num.removeSelf();
                    _this._rankX = _this._clip_rank.x;
                }
                _this._itemX = _this.x;
                return _this;
            }
            TopItemRender.prototype.setData = function (game, data) {
                this._game = game;
                this.visible = data != null;
                if (!data)
                    return;
                this.txt_id.text = data.nickname;
                this._clip_money.setText(data.money, true, false);
                this.img_rank.visible = data.num <= 3;
                this._clip_rank.visible = !this.img_rank.visible;
                this.img_head.skin = DatingPath.ui_dating + "touxiang/head_" + data.headimg + ".png";
                if (data.userid == WebConfig.info.userid && WebConfig.info.qifu_type > 0 && WebConfig.info.qifu_endtime > this._game.sceneGame.sync.serverTimeBys) {
                    this.img_head.skin = DatingPath.ui_dating + "touxiang/head_" + this._qifuNameStr[WebConfig.info.qifu_type - 1] + ".png";
                }
                var idx = data.num < 4 ? data.num : 4;
                this.img_bg.skin = StringU.substitute(DatingPath.ui_dating + "top/tu_toplb{0}.png", idx);
                this.txt_no.visible = false;
                if (data.num <= 3) {
                    this.img_rank.skin = StringU.substitute(DatingPath.ui_dating + "top/top{0}.png", data.num);
                }
                else {
                    this._clip_rank.setText(data.num, true, false);
                    this._clip_rank.x = data.num > 9 ? this._rankX - 15 : this._rankX;
                }
                Laya.Tween.clearAll(this);
                if (!this._isTween) {
                    this.visible = true;
                    var x = this.x;
                    this.x = this.width + 10;
                    Laya.Tween.to(this, {
                        x: x
                    }, this.width, Laya.Ease.linearIn, null, data.num * 200);
                    this._isTween = true;
                }
                else {
                    this.x = this._itemX;
                }
            };
            TopItemRender.prototype.destroy = function () {
                if (this._clip_money) {
                    this._clip_money.removeSelf();
                    this._clip_money.destroy();
                    this._clip_money = null;
                }
                if (this._clip_rank) {
                    this._clip_rank.removeSelf();
                    this._clip_rank.destroy();
                    this._clip_rank = null;
                }
                _super.prototype.destroy.call(this);
            };
            return TopItemRender;
        }(ui.dating.component.TopTUI));
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=TopPage.js.map