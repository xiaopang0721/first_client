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
var gameshuiguoji;
(function (gameshuiguoji) {
    var page;
    (function (page) {
        var ShuiGuoJiPrizePage = /** @class */ (function (_super) {
            __extends(ShuiGuoJiPrizePage, _super);
            function ShuiGuoJiPrizePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    Path_game_shuiguoji.atlas_game_ui + "shuiguoji.atlas",
                    Path.custom_atlas_scene + 'chip.atlas',
                ];
                return _this;
            }
            // 页面初始化函数
            ShuiGuoJiPrizePage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.shuiguoji.ZhongJiangLUI');
                this.addChild(this._viewUI);
                this._goldClip = new ShuiguojiClip(ShuiguojiClip.SGJ_PRIZE_GOLD);
                this._goldClip.scaleX = this._viewUI.clip_num.scaleX;
                this._goldClip.scaleY = this._viewUI.clip_num.scaleY;
                this._goldClip.anchorX = 0.5;
                this._goldClip.centerX = 0;
                this._goldClip.centerY = 0;
                this._viewUI.clip_num.parent.addChild(this._goldClip);
                this._viewUI.clip_num.visible = false;
            };
            // 页面打开时执行函数
            ShuiGuoJiPrizePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                if (this.dataSource.jacketContent.length > 0) {
                    this._viewUI.img_type.skin = Path_game_shuiguoji.ui_shuiguoji + "win_3.png";
                }
                else {
                    var beishu = this.callBeishu();
                    this.showCoinEff(beishu >= 20);
                    if (beishu < 10) {
                        this._viewUI.img_type.skin = Path_game_shuiguoji.ui_shuiguoji + "win_0.png";
                    }
                    else if (beishu < 31) {
                        this._viewUI.img_type.skin = Path_game_shuiguoji.ui_shuiguoji + "win_1.png";
                    }
                    else {
                        this._viewUI.img_type.skin = Path_game_shuiguoji.ui_shuiguoji + "win_2.png";
                    }
                }
                this._goldClip.setText(this.dataSource.prizeTotalMoney, true);
                if (this._viewUI["ani1"]) {
                    this._viewUI["ani1"].on(LEvent.COMPLETE, this, this.onPlayComplte);
                    this._viewUI["ani1"].play(1, false);
                }
                else {
                    Laya.timer.once(1200, this, this.close);
                }
            };
            ShuiGuoJiPrizePage.prototype.showCoinEff = function (val) {
                this._viewUI.ui_coin_0.visible = val;
                this._viewUI.ui_coin_1.visible = val;
                this._viewUI.ui_coin_2.visible = val;
                this._viewUI.ui_coin_3.visible = val;
            };
            ShuiGuoJiPrizePage.prototype.callBeishu = function () {
                var all = this.dataSource.prizeContent;
                if (!all)
                    return 0;
                var beishu = 0;
                for (var i = 0; i < all.length; i++) {
                    var obj = all[i];
                    beishu += page.ShuiGuoJiMapPage.ALL_FIRUT_BS[obj.index];
                }
                return beishu;
            };
            ShuiGuoJiPrizePage.prototype.onPlayComplte = function () {
                this.close();
            };
            ShuiGuoJiPrizePage.prototype.close = function () {
                if (this._viewUI) {
                    if (this._viewUI["ani1"]) {
                        this._viewUI["ani1"].off(LEvent.COMPLETE, this, this.onPlayComplte);
                    }
                    if (this._goldClip) {
                        this._goldClip.removeSelf();
                        this._goldClip.destroy();
                        this._goldClip = null;
                    }
                }
                Laya.timer.clearAll(this);
                _super.prototype.close.call(this);
            };
            return ShuiGuoJiPrizePage;
        }(game.gui.base.Page));
        page.ShuiGuoJiPrizePage = ShuiGuoJiPrizePage;
    })(page = gameshuiguoji.page || (gameshuiguoji.page = {}));
})(gameshuiguoji || (gameshuiguoji = {}));
//# sourceMappingURL=ShuiGuoJiPrizePage.js.map