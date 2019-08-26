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
* name 经典模式BOSS来袭地图事件特效
*  Author：AnswerHom
*/
var gamebuyu;
(function (gamebuyu) {
    var page;
    (function (page) {
        var BuyuBossPage = /** @class */ (function (_super) {
            __extends(BuyuBossPage, _super);
            function BuyuBossPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    Path_game_buyu.atlas_game_ui + 'buyu/bosslaixi.atlas',
                    Path_game_buyu.atlas_game_ui + 'buyu/guize.atlas',
                ];
                return _this;
            }
            // 页面初始化函数
            BuyuBossPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.buyu.BuYu_BossUI');
                this.addChild(this._viewUI);
                this._viewUI.image_Name.visible = false;
                this._viewUI.ani1.stop();
            };
            // 页面打开时执行函数
            BuyuBossPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.ani1.on(LEvent.COMPLETE, this, this.close);
                this._viewUI.image_Icon.scale(-3, 3);
                this._viewUI.box_Bo.visible = false;
            };
            BuyuBossPage.prototype.setType = function (fishID) {
                this._game.playSound(Path_game_buyu.music_buyu + "boss.mp3");
                this.loadTexture(fishID);
            };
            BuyuBossPage.prototype.loadTexture = function (fishID) {
                this.onLoad(fishID);
            };
            BuyuBossPage.prototype.onLoad = function (fishID) {
                this._viewUI.image_Icon.skin = StringU.substitute(Path_game_buyu.ui_buyu + "guize/{0}.png", fishID);
                this._viewUI.image_Name.visible = true;
                this._viewUI.ani1.play(0, false);
                var path = null;
                switch (fishID) {
                    case 23:
                        path = Path_game_buyu.ui_buyu + "bosslaixi/wz_300jl.png";
                        break;
                    case 24:
                        path = Path_game_buyu.ui_buyu + "bosslaixi/wz_500jl.png";
                        break;
                    case 25:
                        path = Path_game_buyu.ui_buyu + "bosslaixi/wz_1000jl.png";
                        break;
                }
                this._viewUI.image_Name.skin = path;
            };
            BuyuBossPage.prototype.close = function () {
                if (this._viewUI) {
                    if (this._bossCome) {
                        this._bossCome.destroy();
                        this._bossCome = null;
                    }
                    this._viewUI.ani1.off(LEvent.COMPLETE, this, this.close);
                }
                _super.prototype.close.call(this);
            };
            return BuyuBossPage;
        }(game.gui.base.Page));
        page.BuyuBossPage = BuyuBossPage;
    })(page = gamebuyu.page || (gamebuyu.page = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=BuyuBossPage.js.map