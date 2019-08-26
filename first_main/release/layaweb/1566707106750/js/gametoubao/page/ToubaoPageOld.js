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
* 牛牛
*/
var gametoubao;
(function (gametoubao) {
    var page;
    (function (page) {
        var ToubaoPageOld = /** @class */ (function (_super) {
            __extends(ToubaoPageOld, _super);
            function ToubaoPageOld(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    Path_game_toubao.atlas_game_ui + "toubao.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
                ];
                _this._isNeedDuang = false;
                return _this;
            }
            // 页面初始化函数
            ToubaoPageOld.prototype.init = function () {
                this._viewUI = this.createView('game_ui.toubao.TouBao_HUDUI', ["game_ui.tongyong.HudUI"]);
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            ToubaoPageOld.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_xinshou.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chuji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zhongji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_gaoji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.view.onOpen(this._game, page.ToubaoPageDef.GAME_NAME);
                for (var index = 0; index < this._viewUI.box_right.numChildren; index++) {
                    this._viewUI.box_right._childs[index].visible = true;
                    Laya.Tween.from(this._viewUI.box_right._childs[index], {
                        right: -300
                    }, 200 + index * 100, Laya.Ease.linearNone);
                }
                this._game.playMusic(Path_game_toubao.music_toubao + "toubao_bgm.mp3");
            };
            ToubaoPageOld.prototype.onBtnTweenEnd = function (e, target) {
                this._player = this._game.sceneObjectMgr.mainPlayer;
                if (!this._player)
                    return;
                this._playerInfo = this._player.playerInfo;
                switch (target) {
                    case this._viewUI.btn_xinshou:
                        this._game.sceneObjectMgr.intoStory(page.ToubaoPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_TOUBAO_1.toString(), true);
                        break;
                    case this._viewUI.btn_chuji:
                        this._game.sceneObjectMgr.intoStory(page.ToubaoPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_TOUBAO_2.toString(), true);
                        break;
                    case this._viewUI.btn_zhongji:
                        this._game.sceneObjectMgr.intoStory(page.ToubaoPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_TOUBAO_3.toString(), true);
                        break;
                    case this._viewUI.btn_gaoji:
                        this._game.sceneObjectMgr.intoStory(page.ToubaoPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_TOUBAO_4.toString(), true);
                        break;
                    default:
                        break;
                }
            };
            ToubaoPageOld.prototype.showTipsBox = function (limit) {
                var _this = this;
                TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", limit), function () {
                    _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                }, function () {
                }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
            };
            ToubaoPageOld.prototype.close = function () {
                this._player = null;
                if (this._viewUI) {
                    this._viewUI.btn_xinshou.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_chuji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_zhongji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_gaoji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                }
                this._game.stopMusic();
                Laya.Tween.clearAll(this);
                _super.prototype.close.call(this);
            };
            return ToubaoPageOld;
        }(game.gui.base.Page));
        page.ToubaoPageOld = ToubaoPageOld;
    })(page = gametoubao.page || (gametoubao.page = {}));
})(gametoubao || (gametoubao = {}));
//# sourceMappingURL=ToubaoPageOld.js.map