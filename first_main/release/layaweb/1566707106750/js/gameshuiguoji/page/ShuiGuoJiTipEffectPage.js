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
        var ShuiGuoJiTipEffectPage = /** @class */ (function (_super) {
            __extends(ShuiGuoJiTipEffectPage, _super);
            function ShuiGuoJiTipEffectPage(v, onOpenFunc, onCloseFunc) {
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
            ShuiGuoJiTipEffectPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.shuiguoji.DaSanYuanUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            ShuiGuoJiTipEffectPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                if (this.dataSource == page.ShuiGuoJiEffectPage.PRIZE_TYPE_DA_SAN_YUAN) {
                    this._viewUI.img_result.skin = Path_game_shuiguoji.ui_shuiguoji + "tu_dsy.png";
                }
                else if (this.dataSource == page.ShuiGuoJiEffectPage.PRIZE_TYPE_DA_SI_XI) {
                    this._viewUI.img_result.skin = Path_game_shuiguoji.ui_shuiguoji + "tu_dsx.png";
                }
                else {
                    this._viewUI.img_result.skin = Path_game_shuiguoji.ui_shuiguoji + "tu_mth.png";
                }
                this._viewUI.ani1.on(LEvent.COMPLETE, this, this.onPlayComplte);
                this._viewUI.ani1.play(1, false);
            };
            ShuiGuoJiTipEffectPage.prototype.onPlayComplte = function () {
                this.close();
            };
            ShuiGuoJiTipEffectPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.ani1.off(LEvent.COMPLETE, this, this.onPlayComplte);
                }
                Laya.timer.clearAll(this);
                _super.prototype.close.call(this);
            };
            return ShuiGuoJiTipEffectPage;
        }(game.gui.base.Page));
        page.ShuiGuoJiTipEffectPage = ShuiGuoJiTipEffectPage;
    })(page = gameshuiguoji.page || (gameshuiguoji.page = {}));
})(gameshuiguoji || (gameshuiguoji = {}));
//# sourceMappingURL=ShuiGuoJiTipEffectPage.js.map