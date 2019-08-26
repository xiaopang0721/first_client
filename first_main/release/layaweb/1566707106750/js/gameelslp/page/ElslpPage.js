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
* 俄罗斯轮盘
*/
var gameelslp;
(function (gameelslp) {
    var page;
    (function (page) {
        var ElslpPage = /** @class */ (function (_super) {
            __extends(ElslpPage, _super);
            function ElslpPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._leastTmep = [5000, 8000, 25000, 50000];
                _this._asset = [
                    Path_game_elslp.atlas_game_ui + "eluosizhuanpan.atlas",
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
            ElslpPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.eluosizhuanpan.ELuoSiZguabPan_HUDUI', ["game_ui.tongyong.HudUI"]);
                this.addChild(this._viewUI);
                this._game.playMusic(Path_game_elslp.music_elslp + "BGM_1.mp3");
                for (var index = 0; index < this._viewUI.box_right.numChildren; index++) {
                    this._viewUI.box_right._childs[index].visible = false;
                }
            };
            // 页面打开时执行函数
            ElslpPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this.initPlayerInfo();
                this._viewUI.view_hud.onOpen(this._game, page.ElslpPageDef.GAME_NAME);
                for (var index = 0; index < this._viewUI.box_right.numChildren; index++) {
                    this._viewUI.box_right._childs[index].visible = true;
                    Laya.Tween.from(this._viewUI.box_right._childs[index], {
                        right: -300
                    }, 200 + index * 100, Laya.Ease.linearNone);
                }
                this._viewUI.img_room0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.img_room1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.img_room2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.img_room3.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            };
            ElslpPage.prototype.onBtnTweenEnd = function (e, target) {
                this._player = this._game.sceneObjectMgr.mainPlayer;
                if (!this._player)
                    return;
                switch (target) {
                    case this._viewUI.img_room0:
                        this._game.sceneObjectMgr.intoStory(page.ElslpPageDef.GAME_NAME, (Web_operation_fields.GAME_ROOM_CONFIG_ELSLP_1).toString(), true);
                        break;
                    case this._viewUI.img_room1:
                        this._game.sceneObjectMgr.intoStory(page.ElslpPageDef.GAME_NAME, (Web_operation_fields.GAME_ROOM_CONFIG_ELSLP_2).toString(), true);
                        break;
                    case this._viewUI.img_room2:
                        this._game.sceneObjectMgr.intoStory(page.ElslpPageDef.GAME_NAME, (Web_operation_fields.GAME_ROOM_CONFIG_ELSLP_3).toString(), true);
                        break;
                    case this._viewUI.img_room3:
                        this._game.sceneObjectMgr.intoStory(page.ElslpPageDef.GAME_NAME, (Web_operation_fields.GAME_ROOM_CONFIG_ELSLP_4).toString(), true);
                        break;
                    default:
                        break;
                }
            };
            ElslpPage.prototype.showTipsBox = function (limit) {
                var _this = this;
                TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", limit), function () {
                    _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                }, function () {
                }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
            };
            ElslpPage.prototype.initPlayerInfo = function () {
                // for (let index = 0; index < 4; index++) {
                // 	this._viewUI["lab_least" + index].text = "限红: " + this._leastTmep[index];
                // this._viewUI["lab_money" + index].text = "准入: " + this._needMoney[index];
                // }
            };
            ElslpPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.img_room0.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.img_room1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.img_room2.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.img_room3.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    for (var index = 0; index < this._viewUI.box_right.numChildren; index++) {
                        Laya.timer.clearAll(this._viewUI.box_right._childs[index]);
                    }
                }
                this._player = null;
                this._game.stopMusic();
                _super.prototype.close.call(this);
            };
            return ElslpPage;
        }(game.gui.base.Page));
        page.ElslpPage = ElslpPage;
    })(page = gameelslp.page || (gameelslp.page = {}));
})(gameelslp || (gameelslp = {}));
//# sourceMappingURL=ElslpPage.js.map