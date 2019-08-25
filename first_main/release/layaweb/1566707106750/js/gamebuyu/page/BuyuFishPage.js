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
* name 经典模式鱼潮来袭地图事件特效
*  Author：AnswerHom
*/
var gamebuyu;
(function (gamebuyu) {
    var page;
    (function (page) {
        var BuyuFishPage = /** @class */ (function (_super) {
            __extends(BuyuFishPage, _super);
            function BuyuFishPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    Path_game_buyu.atlas_game_ui + 'buyu/bosslaixi.atlas',
                ];
                return _this;
            }
            // 页面初始化函数
            BuyuFishPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.buyu.BuYu_BossUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            BuyuFishPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.ani1.play(0, false);
                this._viewUI.ani1.on(LEvent.COMPLETE, this, this.close);
                this._game.playSound(Path_game_buyu.music_buyu + "boss.mp3");
                this._viewUI.box_Bo.visible = true;
                this._viewUI.box_Bo.x = main.widthDesginPixelw;
                this.playBo();
            };
            //播放海浪动画
            BuyuFishPage.prototype.playBo = function () {
                Laya.Tween.to(this._viewUI.box_Bo, { x: -this._viewUI.box_Bo.width }, 1000, null, Handler.create(this, this.onEndBo, null));
            };
            BuyuFishPage.prototype.onEndBo = function () {
                this._viewUI.box_Bo.visible = false;
            };
            BuyuFishPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.ani1.off(LEvent.COMPLETE, this, this.close);
                    Laya.Tween.clearAll(this._viewUI.box_Bo);
                }
                _super.prototype.close.call(this);
            };
            return BuyuFishPage;
        }(game.gui.base.Page));
        page.BuyuFishPage = BuyuFishPage;
    })(page = gamebuyu.page || (gamebuyu.page = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=BuyuFishPage.js.map