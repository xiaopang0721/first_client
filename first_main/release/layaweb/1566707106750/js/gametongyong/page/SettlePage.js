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
* 通用百人场游戏结算界面（无庄家）
*/
var gametongyong;
(function (gametongyong) {
    var page;
    (function (page) {
        var SettlePage = /** @class */ (function (_super) {
            __extends(SettlePage, _super);
            function SettlePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._imgList = [];
                // 页面打开时执行函数
                _this._nameStrInfo = ["xs", "px", "gsy", "gg", "cs", "tdg"];
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                _this._isNeedDuang = false;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            SettlePage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.tongyong.JieSuanUI');
                this.addChild(this._viewUI);
                if (!this._htmlText) {
                    this._htmlText = TextFieldU.createHtmlText(this._viewUI.txt_result);
                }
            };
            SettlePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                //主玩家
                var mainPlayer = this._game.sceneObjectMgr.mainPlayer;
                this._viewUI.img_head.skin = StringU.substitute(PathGameTongyong.ui_tongyong_touxiang + "head_{0}.png", mainPlayer.playerInfo.headimg);
                if (mainPlayer.playerInfo.qifu_type && mainPlayer.playerInfo.qifu_endtime > this._game.sync.serverTimeBys) {
                    this._viewUI.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[mainPlayer.playerInfo.qifu_type - 1] + ".png";
                }
                this._viewUI.img_txk.visible = mainPlayer.playerInfo.vip_level > 0;
                if (this._viewUI.img_txk.visible) {
                    this._viewUI.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + mainPlayer.playerInfo.vip_level + ".png";
                }
                this._viewUI.txt_name.text = this._game.sceneObjectMgr.mainPlayer.playerInfo.nickname;
                this._viewUI.txt_bet.text = this.dataSource.myBet ? this.dataSource.myBet.toString() : 0;
                this._viewUI.txt_benefit.text = this.dataSource.myBenefit ? this.dataSource.myBenefit.toString() : 0;
                var preStr = StringU.substitute("<span style='color:#fffbb5'>开奖结果： </span>");
                var innerHtml = preStr + StringU.substitute("<span style='color:#ffffff'>{0}</span>", this.dataSource.lottery);
                this._htmlText.innerHTML = innerHtml;
                // this._viewUI.txt_result.text = this.dataSource.lottery.toString();
                for (var i = 0; i < 4; i++) {
                    this._imgList[i] = this._viewUI["img_" + i];
                    this._imgList[i].disabled = this.dataSource.myBenefit < 0;
                }
                this._viewUI.ani2.on(LEvent.COMPLETE, this, this.onPlayComplte);
                this._viewUI.ani2.play(0, false);
            };
            SettlePage.prototype.onPlayComplte = function () {
                this.close();
            };
            SettlePage.prototype.close = function () {
                if (this._viewUI) {
                    if (this._viewUI) {
                        if (this._imgList) {
                            this._imgList = null;
                        }
                        this._viewUI.ani2.off(LEvent.COMPLETE, this, this.onPlayComplte);
                    }
                }
                Laya.timer.clearAll(this);
                _super.prototype.close.call(this);
            };
            return SettlePage;
        }(game.gui.base.Page));
        page.SettlePage = SettlePage;
    })(page = gametongyong.page || (gametongyong.page = {}));
})(gametongyong || (gametongyong = {}));
//# sourceMappingURL=SettlePage.js.map