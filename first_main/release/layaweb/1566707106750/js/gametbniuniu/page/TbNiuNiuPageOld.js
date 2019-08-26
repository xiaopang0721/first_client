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
var gametbniuniu;
(function (gametbniuniu) {
    var page;
    (function (page) {
        var TbNiuNiuPageOld = /** @class */ (function (_super) {
            __extends(TbNiuNiuPageOld, _super);
            function TbNiuNiuPageOld(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._difenTmep = [1, 10, 50, 100];
                _this._leastTmep = [50, 200, 500, 1000];
                _this._asset = [
                    Path_game_tbniuniu.atlas_game_ui + "tbniuniu.atlas",
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
            TbNiuNiuPageOld.prototype.init = function () {
                this._viewUI = this.createView('game_ui.tbniuniu.TongBiNN_HUDUI', ["game_ui.tongyong.HudUI"]);
                this.addChild(this._viewUI);
                this._viewUI.box_room.visible = false;
                for (var index = 0; index < this._viewUI.box_right.numChildren; index++) {
                    this._viewUI.box_right._childs[index].visible = false;
                }
            };
            // 页面打开时执行函数
            TbNiuNiuPageOld.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this.initRoomInfo();
                this._viewUI.btn_xinshou.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chuji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zhongji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_gaoji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.view.onOpen(this._game, page.TbniuniuPageDef.GAME_NAME);
                for (var index = 0; index < this._viewUI.box_right.numChildren; index++) {
                    this._viewUI.box_right._childs[index].visible = true;
                    Laya.Tween.from(this._viewUI.box_right._childs[index], {
                        right: -300
                    }, 200 + index * 100, Laya.Ease.linearNone);
                }
                this._game.playMusic(Path_game_tbniuniu.music_tbniuniu + "tbnn_bgm.mp3");
            };
            TbNiuNiuPageOld.prototype.initRoomInfo = function () {
                for (var index = 0; index < 4; index++) {
                    this._viewUI["txt_least" + index] && (this._viewUI["txt_least" + index].text = "准入: " + this._leastTmep[index]);
                    this._viewUI["txt_difen" + index] && (this._viewUI["txt_difen" + index].text = "底分: " + this._difenTmep[index]);
                }
            };
            TbNiuNiuPageOld.prototype.onBtnTweenEnd = function (e, target) {
                this._player = this._game.sceneObjectMgr.mainPlayer;
                if (!this._player)
                    return;
                this._playerInfo = this._player.playerInfo;
                if (this.chkPlayerIsGuest())
                    return;
                switch (target) {
                    case this._viewUI.btn_xinshou:
                        if (this._player.playerInfo.money < this._leastTmep[0]) {
                            this.showTipsBox(this._leastTmep[0]);
                            return;
                        }
                        this._game.sceneObjectMgr.intoStory(page.TbniuniuPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_TBNIUNIU_1.toString());
                        break;
                    case this._viewUI.btn_chuji:
                        if (this._player.playerInfo.money < this._leastTmep[1]) {
                            this.showTipsBox(this._leastTmep[1]);
                            return;
                        }
                        this._game.sceneObjectMgr.intoStory(page.TbniuniuPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_TBNIUNIU_2.toString());
                        break;
                    case this._viewUI.btn_zhongji:
                        if (this._player.playerInfo.money < this._leastTmep[2]) {
                            this.showTipsBox(this._leastTmep[2]);
                            return;
                        }
                        this._game.sceneObjectMgr.intoStory(page.TbniuniuPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_TBNIUNIU_3.toString());
                        break;
                    case this._viewUI.btn_gaoji:
                        if (this._player.playerInfo.money < this._leastTmep[3]) {
                            this.showTipsBox(this._leastTmep[3]);
                            return;
                        }
                        this._game.sceneObjectMgr.intoStory(page.TbniuniuPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_TBNIUNIU_4.toString());
                        break;
                    default:
                        break;
                }
            };
            TbNiuNiuPageOld.prototype.chkPlayerIsGuest = function () {
                var _this = this;
                var result = false;
                if (this._player.playerInfo.isguest) {
                    TongyongPageDef.ins.alertRecharge("亲爱的玩家，您正使用游客模式进行游戏，该模式下的游戏数据（包括付费数据）在删除游戏、更换设备后清空！对此造成的损失，本平台将不承担任何责任。为保障您的虚拟财产安全，我们强力建议您绑定手机号升级为正式账号。", function () {
                        _this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDPHONE);
                    }, function () {
                    }, false, PathGameTongyong.ui_tongyong_general + "btn_qw.png");
                    result = true;
                }
                return result;
            };
            TbNiuNiuPageOld.prototype.showTipsBox = function (limit) {
                var _this = this;
                TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", limit), function () {
                    _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                }, function () {
                }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
            };
            TbNiuNiuPageOld.prototype.close = function () {
                this._player = null;
                if (this._viewUI) {
                    this._viewUI.btn_xinshou.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_chuji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_zhongji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_gaoji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                }
                this._game.stopMusic();
                _super.prototype.close.call(this);
            };
            return TbNiuNiuPageOld;
        }(game.gui.base.Page));
        page.TbNiuNiuPageOld = TbNiuNiuPageOld;
    })(page = gametbniuniu.page || (gametbniuniu.page = {}));
})(gametbniuniu || (gametbniuniu = {}));
//# sourceMappingURL=TbNiuNiuPageOld.js.map