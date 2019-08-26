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
var gamelonghu;
(function (gamelonghu) {
    var page;
    (function (page) {
        var LonghuSzListPage = /** @class */ (function (_super) {
            __extends(LonghuSzListPage, _super);
            function LonghuSzListPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isShenQing = false;
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                ];
                return _this;
            }
            LonghuSzListPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.tongyong.ShangZhuangLBUI');
                this.addChild(this._viewUI);
                this._game.sceneObjectMgr.on(LonghuMapInfo.EVENT_MAP_BANKER_CHANGE, this, this.onUpdateSZList); //地图庄家变更
                this._game.sceneObjectMgr.on(LonghuMapInfo.EVENT_SZ_LIST, this, this.onUpdateSZList); //上庄列表更新
                this.onUpdateSZList();
            };
            // 页面打开时执行函数
            LonghuSzListPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.list_player.vScrollBarSkin = "";
                this._viewUI.list_player.scrollBar.autoHide = false;
                this._viewUI.list_player.scrollBar.elasticDistance = 100;
                this._viewUI.list_player.itemRender = this.createChildren("game_ui.tongyong.WanJia1UI", SzItemRender);
                this._viewUI.list_player.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.btn_shangzhuang.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                var mapInfo = this._game.sceneObjectMgr.mapInfo;
                if (mapInfo) {
                    this.onUpdateSZList();
                }
                this._viewUI.list_player.dataSource = this.dataSource;
            };
            //按钮缓动回调
            LonghuSzListPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_shangzhuang: //申请上庄
                        var money = this._game.sceneObjectMgr.mainUnit.GetMoney();
                        if (money < this.dataSource) {
                            this._game.uiRoot.topUnder.showTips("金币不足");
                            return;
                        }
                        var mapinfo = this._game.sceneObjectMgr.mapInfo;
                        var mainIndex = this._game.sceneObjectMgr.mainUnit.GetIndex();
                        if (mainIndex == mapinfo.GetBankerSeat()) { //申请下庄
                            this._game.network.call_longhu_xiazhuang();
                            this._game.uiRoot.topUnder.showTips("已经成功申请下庄");
                            this.close();
                        }
                        else if (this._isShenQing) { //取消申请
                            this._game.network.call_longhu_xiazhuang();
                            this._game.uiRoot.topUnder.showTips("已经取消申请上庄");
                            this.close();
                        }
                        else { //申请上庄
                            this._game.network.call_longhu_shangzhuang();
                            this._game.uiRoot.topUnder.showTips("已经成功申请上庄");
                            this.close();
                        }
                        break;
                }
            };
            LonghuSzListPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            LonghuSzListPage.prototype.onUpdateSZList = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                if (!mapinfo)
                    return;
                var unitSz = [];
                var szList = mapinfo.GetSzList();
                if (szList == "") {
                    return;
                }
                var limitMoney = page.LonghuMapPage.MONEY_LIMIT_CONFIG[mapinfo.GetMapLevel()][0];
                this._viewUI.txt_limit.text = "上庄需要 " + limitMoney;
                unitSz = JSON.parse(szList);
                this._viewUI.list_player.dataSource = unitSz;
                var mainIndex = this._game.sceneObjectMgr.mainUnit.GetIndex();
                for (var i = 0; i < unitSz.length; i++) {
                    var unitIndex = unitSz[i][0];
                    if (mainIndex == unitIndex) {
                        this._isShenQing = true;
                    }
                    else {
                        this._isShenQing = false;
                    }
                }
                if (!unitSz.length)
                    this._isShenQing = false;
                var url = this._isShenQing ? PathGameTongyong.ui_tongyong_general + "btn_qxsq.png" : PathGameTongyong.ui_tongyong_general + "btn_sqsz.png";
                if (mainIndex == mapinfo.GetBankerSeat())
                    url = PathGameTongyong.ui_tongyong_general + "btn_sqxz.png";
                this._viewUI.btn_shangzhuang.skin = url;
            };
            LonghuSzListPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.list_player.vScrollBarSkin = null;
                    this._viewUI.btn_shangzhuang.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                }
                this._game.sceneObjectMgr.off(LonghuMapInfo.EVENT_MAP_BANKER_CHANGE, this, this.onUpdateSZList); //地图庄家变更
                this._game.sceneObjectMgr.off(LonghuMapInfo.EVENT_SZ_LIST, this, this.onUpdateSZList); //上庄列表更新
                _super.prototype.close.call(this);
            };
            return LonghuSzListPage;
        }(game.gui.base.Page));
        page.LonghuSzListPage = LonghuSzListPage;
        var SzItemRender = /** @class */ (function (_super) {
            __extends(SzItemRender, _super);
            function SzItemRender() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SzItemRender.prototype.setData = function (game, data) {
                this._game = game;
                this._unit = this._game.sceneObjectMgr.getUnitByIdx(data[0]);
                this._unitHeadImg = this._unit.GetHeadImg();
                this.txt_name.text = this._unit.GetName();
                if (this._unitHeadImg) {
                    this.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._unitHeadImg + ".png";
                }
                if (!this._clipMoney) {
                    this._clipMoney = new LonghuClip(LonghuClip.MONEY_FONT2);
                    this._clipMoney.x = this.clip_money.x;
                    this._clipMoney.y = this.clip_money.y;
                    this.clip_money.parent.addChild(this._clipMoney);
                    this.clip_money.visible = false;
                }
                this._clipMoney.setText(EnumToString.getPointBackNum(this._unit.GetMoney(), 2) + "", true, false);
            };
            return SzItemRender;
        }(ui.game_ui.tongyong.WanJia1UI));
    })(page = gamelonghu.page || (gamelonghu.page = {}));
})(gamelonghu || (gamelonghu = {}));
//# sourceMappingURL=LonghuSzListPage.js.map