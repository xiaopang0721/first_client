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
var gametongyong;
(function (gametongyong) {
    var page;
    (function (page) {
        var QiFuPage = /** @class */ (function (_super) {
            __extends(QiFuPage, _super);
            function QiFuPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._nameInfo = ["洗手", "貔貅", "观世音", "关公", "财神", "土地公"];
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            QiFuPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.tongyong.QiFuUI');
                this.addChild(this._viewUI);
                this._imgTypeUI = [];
                this._txtMoneyUI = [];
                for (var i = 0; i < 6; i++) {
                    this._imgTypeUI[i] = this._viewUI["img_type" + i];
                    this._imgTypeUI[i].on(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._txtMoneyUI[i] = this._viewUI["txt_money" + i];
                }
            };
            // 页面打开时执行函数
            QiFuPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._game.qifuMgr.on(QiFuMgr.QIFU_CHANGE, this, this.onUpdateDataInfo);
                this._game.qifuMgr.getData();
                this.onUpdateDataInfo();
            };
            QiFuPage.prototype.onUpdateDataInfo = function (date) {
                this._dataInfo = [];
                var value = this._game.qifuMgr.getQiFuList();
                var count = 0;
                for (var i = 0; i < value.length; i++) {
                    if (value[i]) {
                        for (var key in value[i]) {
                            count++;
                        }
                    }
                }
                if (!count)
                    return;
                this._dataInfo = value;
                for (var i = 0; i < this._dataInfo.length; i++) {
                    var type = value[i].qf_type == 1 ? "/天" : "/次";
                    this._txtMoneyUI[i].text = value[i].qf_money + type;
                }
            };
            QiFuPage.prototype.onMouseDown = function (e) {
                return true;
            };
            QiFuPage.prototype.onBtnTweenEnd = function (e, target) {
                var _this = this;
                if (!this._game.qifuMgr.isCanQiFu) {
                    this._game.uiRoot.topUnder.showTips("老板，当前不可以祈福哦~");
                    return;
                }
                var idx = this._imgTypeUI.indexOf(target);
                var mainplayer = this._game.sceneObjectMgr.mainPlayer;
                if (!mainplayer)
                    return;
                if (!this._dataInfo || !this._dataInfo.length)
                    return;
                if (idx != -1) {
                    var qfendTime = this._dataInfo[idx].end_time;
                    var qftype_1 = this._dataInfo[idx].qf_type;
                    var qfid_1 = this._dataInfo[idx].qf_id;
                    var qfname_1 = this._nameInfo[idx];
                    if (mainplayer.playerInfo.money - this._game.qifuMgr.roomPay < this._dataInfo[idx].qf_money) {
                        this._game.uiRoot.topUnder.showTips("老板，您的金币不够祈福哦~");
                        return;
                    }
                    var curTime = this._game.sync.serverTimeBys;
                    if (curTime < qfendTime) {
                        this._game.uiRoot.topUnder.showTips(StringU.substitute("老板，距离下一次祈福还要{0}哦~", Sync.getTimeShortStr6(qfendTime - curTime)));
                        return;
                    }
                    page.TongyongPageDef.ins.alertRecharge("老板，您是否确定要祈福？", function () {
                        _this._game.network.call_player_qifu(qftype_1, qfid_1, qfname_1);
                        _this.close();
                    }, function () {
                    }, false, PathGameTongyong.ui_tongyong_general + "btn_qd.png");
                }
            };
            QiFuPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.qifuMgr.off(QiFuMgr.QIFU_CHANGE, this, this.onUpdateDataInfo);
                    this._game.qifuMgr.clear();
                }
                _super.prototype.close.call(this);
            };
            return QiFuPage;
        }(game.gui.base.Page));
        page.QiFuPage = QiFuPage;
    })(page = gametongyong.page || (gametongyong.page = {}));
})(gametongyong || (gametongyong = {}));
//# sourceMappingURL=QiFuPage.js.map