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
* 房卡类型游戏结算页面
*/
var gameshisanshui;
(function (gameshisanshui) {
    var page;
    (function (page) {
        var ShisanshuiRoomSettlePage = /** @class */ (function (_super) {
            __extends(ShisanshuiRoomSettlePage, _super);
            function ShisanshuiRoomSettlePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isGameEnd = false; //是否结束
                //倒计时
                _this._endTime = _this._game.sync.serverTimeBys + 5;
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            ShisanshuiRoomSettlePage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.shisanshui.JieSuan_FangKaUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            ShisanshuiRoomSettlePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.list_settle.itemRender = this.createChildren("game_ui.tongyong.JieSuanRender3UI", ListRecordItem);
                this._viewUI.list_settle.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_settle.dataSource = this.dataSource[2];
                this._isGameEnd = (Number(this.dataSource[0])) == Number(this.dataSource[1]);
                this.setGameEndBtnState(this._isGameEnd);
            };
            //按钮点击
            ShisanshuiRoomSettlePage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_create_room:
                        this._game.uiRoot.general.open(page.ShisanshuiPageDef.PAGE_SSS_CREATE_CARDROOM);
                        this.close();
                        break;
                    case this._viewUI.btn_back_hud:
                        this._game.sceneObjectMgr.leaveStory(true);
                        break;
                    default:
                        break;
                }
            };
            // 设置最后结束时的按纽状态
            ShisanshuiRoomSettlePage.prototype.setGameEndBtnState = function (isEventOn) {
                this._viewUI.lab_xinxi.visible = !this._isGameEnd;
                this._viewUI.btn_create_room.visible = this._isGameEnd;
                this._viewUI.btn_back_hud.visible = this._isGameEnd;
                if (isEventOn) {
                    this._viewUI.btn_create_room.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_back_hud.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                }
                else {
                    this._viewUI.btn_create_room.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_back_hud.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                }
            };
            ShisanshuiRoomSettlePage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            ShisanshuiRoomSettlePage.prototype.onBlackSpriteClick = function () {
                if (!this._isGameEnd)
                    return;
                _super.prototype.onBlackSpriteClick.call(this);
            };
            ShisanshuiRoomSettlePage.prototype.deltaUpdate = function () {
                var curTime = this._game.sync.serverTimeBys;
                var time = Math.floor(this._endTime - curTime) + 1;
                if (time > 0) {
                    var str = time + "S后开始第" + (this.dataSource[0] + 1) + "局，本轮共" + this.dataSource[1] + "局";
                    this._viewUI.lab_xinxi.text = str;
                }
                else {
                    // 最后一局不自动关闭
                    if (!this._isGameEnd)
                        this.close();
                }
            };
            ShisanshuiRoomSettlePage.prototype.close = function () {
                this.setGameEndBtnState(false);
                _super.prototype.close.call(this);
            };
            return ShisanshuiRoomSettlePage;
        }(game.gui.base.Page));
        page.ShisanshuiRoomSettlePage = ShisanshuiRoomSettlePage;
        var ListRecordItem = /** @class */ (function (_super) {
            __extends(ListRecordItem, _super);
            function ListRecordItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ListRecordItem.prototype.setData = function (game, data) {
                this._game = game;
                this._data = data;
                this.img_bg.visible = this._data.isMain;
                this.lab_name.text = this._data.name;
                this.lab_point.text = this._data.score.toString();
                this.lbl_totalpoint.text = this._data.totalPoint.toString();
                this.lab_name.color = this._data.isMain ? "#cc90ff" : "#ffffff";
                this.lab_point.color = parseFloat(this._data.score) >= 0 ? "#069e00" : "#ff0000";
                this.lbl_totalpoint.color = parseFloat(this._data.totalPoint) >= 0 ? "#069e00" : "#ff0000";
                for (var i = 0; i < 13; i++) {
                    this["img_card" + i].skin = PathGameTongyong.ui_tongyong_pai + this._data.cardtype[i] + ".png";
                }
            };
            ListRecordItem.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            return ListRecordItem;
        }(ui.game_ui.tongyong.JieSuanRender3UI));
    })(page = gameshisanshui.page || (gameshisanshui.page = {}));
})(gameshisanshui || (gameshisanshui = {}));
//# sourceMappingURL=ShisanshuiRoomSettlePage.js.map