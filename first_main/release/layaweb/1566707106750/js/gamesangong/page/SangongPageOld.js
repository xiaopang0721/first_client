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
* 三公HUD
*/
var gamesangong;
(function (gamesangong) {
    var page;
    (function (page) {
        var SangongPageOld = /** @class */ (function (_super) {
            __extends(SangongPageOld, _super);
            function SangongPageOld(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._leastTmep = [1, 5, 20, 100];
                _this._needMoney = [50, 200, 500, 1000];
                _this._asset = [
                    Path_game_sangong.atlas_game_ui + "sangong.atlas",
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
            SangongPageOld.prototype.init = function () {
                this._viewUI = this.createView('game_ui.sangong.SanGong_HUDUI', ["game_ui.tongyong.HudUI"]);
                this.addChild(this._viewUI);
                this._game.playMusic(Path.music + "sangong/sg_bgm.mp3");
                this._sgMgr = new SangongMgr(this._game);
                this._viewUI.box_fangka.visible = false;
                for (var index = 0; index < this._viewUI.box_right.numChildren; index++) {
                    this._viewUI.box_right._childs[index].visible = false;
                }
            };
            // 页面打开时执行函数
            SangongPageOld.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this.initPlayerInfo();
                this._viewUI.view_hud.onOpen(this._game, page.SangongPageDef.GAME_NAME);
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
            SangongPageOld.prototype.onBtnTweenEnd = function (e, target) {
                var _this = this;
                this._player = this._game.sceneObjectMgr.mainPlayer;
                if (!this._player)
                    return;
                if (this._player.playerInfo.isguest) {
                    TongyongPageDef.ins.alertRecharge("您选择了游客模式登录游戏，由于该模式下的游戏数据(包括付费数据)在删除游戏、更换设备后将被清空!对此造成的损失，本平台将不承担任何责任。为了您的虚拟财产安全,我们强烈建议您使用微信登录和账号登录游戏!", function () {
                        _this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDPHONE);
                    }, function () {
                    }, false, PathGameTongyong.ui_tongyong_general + "btn_qw.png");
                    return;
                }
                this._playerInfo = this._player.playerInfo;
                switch (target) {
                    case this._viewUI.img_room0:
                        if (this._player.playerInfo.money < this._needMoney[0]) {
                            this.showTipsBox(this._needMoney[0]);
                            return;
                        }
                        this._game.sceneObjectMgr.intoStory(page.SangongPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_SANGONG_1.toString());
                        break;
                    case this._viewUI.img_room1:
                        if (this._player.playerInfo.money < this._needMoney[1]) {
                            this.showTipsBox(this._needMoney[1]);
                            return;
                        }
                        this._game.sceneObjectMgr.intoStory(page.SangongPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_SANGONG_2.toString());
                        break;
                    case this._viewUI.img_room2:
                        if (this._player.playerInfo.money < this._needMoney[2]) {
                            this.showTipsBox(this._needMoney[2]);
                            return;
                        }
                        this._game.sceneObjectMgr.intoStory(page.SangongPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_SANGONG_3.toString());
                        break;
                    case this._viewUI.img_room3:
                        if (this._player.playerInfo.money < this._needMoney[3]) {
                            this.showTipsBox(this._needMoney[3]);
                            return;
                        }
                        this._game.sceneObjectMgr.intoStory(page.SangongPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_SANGONG_4.toString());
                        break;
                    default:
                        break;
                }
            };
            SangongPageOld.prototype.showTipsBox = function (limit) {
                var _this = this;
                TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", limit), function () {
                    _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                }, function () {
                }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
            };
            SangongPageOld.prototype.initPlayerInfo = function () {
                for (var index = 0; index < 4; index++) {
                    this._viewUI["lab_least" + index].text = "底分: " + this._leastTmep[index];
                    this._viewUI["lab_money" + index].text = "准入: " + this._needMoney[index];
                }
            };
            SangongPageOld.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.img_room0.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.img_room1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.img_room2.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.img_room3.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                }
                this._game.stopMusic();
                _super.prototype.close.call(this);
            };
            return SangongPageOld;
        }(game.gui.base.Page));
        page.SangongPageOld = SangongPageOld;
    })(page = gamesangong.page || (gamesangong.page = {}));
})(gamesangong || (gamesangong = {}));
//# sourceMappingURL=SangongPageOld.js.map