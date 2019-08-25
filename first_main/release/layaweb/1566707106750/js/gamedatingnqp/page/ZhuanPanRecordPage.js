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
* name 转盘
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page) {
        var ZhuanPanRecordPage = /** @class */ (function (_super) {
            __extends(ZhuanPanRecordPage, _super);
            function ZhuanPanRecordPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._data = null;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "zhuanpan.atlas",
                ];
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                return _this;
            }
            // 页面初始化函数
            ZhuanPanRecordPage.prototype.init = function () {
                this._viewUI = this.createView("dating.ZhuanPan_jlUI");
                this.addChild(this._viewUI);
                this._viewUI.list_gr.vScrollBarSkin = "";
                this._viewUI.list_gr.scrollBar.elasticDistance = 100;
                this._viewUI.list_gr.itemRender = this.createChildren("dating.component.ZhuanPanT2UI", ZhuanPanGrT);
                this._viewUI.list_gr.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.check_self.on(LEvent.CLICK, this, this.updateView);
            };
            // 页面打开时执行函数
            ZhuanPanRecordPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this._game.network.call_get_turntablelist();
                this._game.network.call_get_turntableinfo();
                var mainPlayer = this._game.sceneGame.sceneObjectMgr.mainPlayer;
                if (!mainPlayer)
                    return;
                var playerInfo = mainPlayer.playerInfo;
                this._viewUI.txt_jifen.text = playerInfo.total_turn_point.toString();
                this._viewUI.txt_mrjf.text = playerInfo.today_score.toString();
            };
            ZhuanPanRecordPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            ZhuanPanRecordPage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_TURNTABLELIST) { //积分抽奖获奖记录
                    if (data && data.success == 0) {
                        this._data = data;
                        this.updateView();
                    }
                }
            };
            ZhuanPanRecordPage.prototype.updateView = function () {
                if (!this._data)
                    return;
                var flag = this._viewUI.check_self.selected;
                this._selfData = this._data.msg && this._data.msg.self ? this._data.msg.self.list : [];
                this._allData = this._data.msg && this._data.msg.all ? this._data.msg.all.list : [];
                var curData;
                if (flag) {
                    //仅自己
                    curData = this._selfData;
                    this._viewUI.list_gr.dataSource = this._selfData;
                }
                else {
                    //其他人
                    curData = this._allData;
                }
                if (curData && curData.length > 0) {
                    this._viewUI.box_gr.visible = true;
                    this._viewUI.box_no.visible = false;
                    this._viewUI.list_gr.dataSource = curData;
                }
                else {
                    this._viewUI.box_gr.visible = false;
                    this._viewUI.box_no.visible = true;
                }
            };
            ZhuanPanRecordPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                }
            };
            ZhuanPanRecordPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                }
                _super.prototype.close.call(this);
            };
            return ZhuanPanRecordPage;
        }(game.gui.base.Page));
        page.ZhuanPanRecordPage = ZhuanPanRecordPage;
        // class ZhuanPanDjT extends ui.nqp.dating.component.ZhuanPanT1UI {
        // 	private _game: Game;
        // 	private _data: any;//"ddz","niuniu","zjh"
        // 	private _isTween: boolean;
        // 	setData(game: Game, data: any) {
        // 		this._game = game;
        // 		this._data = data;
        // 		this.txt_time.text = Sync.getTimeStr(data.turn_time * 1000);
        // 		this.txt_username.text = data.account;
        // 		this.txt_type.text = data.turn_name;
        // 		this.txt_money.text = data.award_value;
        // 	}
        // }
        var ZhuanPanGrT = /** @class */ (function (_super) {
            __extends(ZhuanPanGrT, _super);
            function ZhuanPanGrT() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ZhuanPanGrT.prototype.setData = function (game, data) {
                this._game = game;
                this._data = data;
                this.txt_username.text = data.account;
                this.txt_time.text = Sync.getTimeStr(data.turn_time * 1000);
                this.txt_type.text = data.turn_name;
                this.txt_money.text = data.award_value;
            };
            return ZhuanPanGrT;
        }(ui.nqp.dating.component.ZhuanPanT2UI));
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=ZhuanPanRecordPage.js.map