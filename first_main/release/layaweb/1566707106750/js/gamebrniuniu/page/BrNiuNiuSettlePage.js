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
var gamebrniuniu;
(function (gamebrniuniu) {
    var page;
    (function (page) {
        var BrNiuNiuSettlePage = /** @class */ (function (_super) {
            __extends(BrNiuNiuSettlePage, _super);
            function BrNiuNiuSettlePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._imgList = [];
                // 页面打开时执行函数
                _this._qifuNameStr = ["xs", "px", "gsy", "gg", "cs", "tdg"];
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                _this._asset = [
                    Path_game_brniuniu.atlas_game_ui + "brniuniu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            BrNiuNiuSettlePage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.brniuniu.JieSuanUI');
                this.addChild(this._viewUI);
            };
            BrNiuNiuSettlePage.prototype.onOpen = function () {
                var _this = this;
                _super.prototype.onOpen.call(this);
                var mainPlayer = this._game.sceneObjectMgr.mainPlayer;
                //主玩家
                this._viewUI.img_head0.skin = StringU.substitute(PathGameTongyong.ui_tongyong_touxiang + "head_{0}.png", mainPlayer.playerInfo.headimg);
                if (mainPlayer.playerInfo.qifu_type && mainPlayer.GetQiFuEndTime(mainPlayer.playerInfo.qifu_type - 1) > this._game.sync.serverTimeBys) {
                    this._viewUI.img_head0.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._qifuNameStr[mainPlayer.playerInfo.qifu_type - 1] + ".png";
                }
                this._viewUI.txt_name0.text = mainPlayer.playerInfo.nickname;
                this._viewUI.txt_bet0.text = this.dataSource.myBet.toString();
                this._viewUI.txt_benefit0.text = this.dataSource.myBenefit.toString();
                this._viewUI.img_txk0.visible = mainPlayer.playerInfo.vip_level > 0;
                if (this._viewUI.img_txk0.visible) {
                    this._viewUI.img_txk0.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + mainPlayer.playerInfo.vip_level + ".png";
                }
                //庄家
                this._viewUI.img_head1.skin = this.dataSource.bankerHead;
                if (mainPlayer.playerInfo.qifu_type && mainPlayer.GetQiFuEndTime(mainPlayer.playerInfo.qifu_type - 1) > this._game.sync.serverTimeBys) {
                    this._viewUI.img_head0.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._qifuNameStr[mainPlayer.playerInfo.qifu_type - 1] + ".png";
                }
                this._viewUI.txt_name1.text = this.dataSource.bankerName;
                this._viewUI.txt_bet1.text = this.dataSource.allBet.toString();
                this._viewUI.txt_benefit1.text = this.dataSource.bankerBenefit.toString();
                this._viewUI.img_txk1.visible = mainPlayer.playerInfo.vip_level > 0;
                if (this._viewUI.img_txk1.visible) {
                    this._viewUI.img_txk1.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + mainPlayer.playerInfo.vip_level + ".png";
                }
                for (var i = 0; i < 4; i++) {
                    this._imgList[i] = this._viewUI["img_" + i];
                    this._imgList[i].disabled = this.dataSource.myBenefit < 0;
                }
                Laya.timer.once(3000, this, function () {
                    _this.close();
                });
            };
            BrNiuNiuSettlePage.prototype.close = function () {
                if (this._viewUI) {
                    if (this._imgList) {
                        this._imgList = null;
                    }
                }
                Laya.timer.clearAll(this);
                _super.prototype.close.call(this);
            };
            return BrNiuNiuSettlePage;
        }(game.gui.base.Page));
        page.BrNiuNiuSettlePage = BrNiuNiuSettlePage;
    })(page = gamebrniuniu.page || (gamebrniuniu.page = {}));
})(gamebrniuniu || (gamebrniuniu = {}));
//# sourceMappingURL=BrNiuNiuSettlePage.js.map