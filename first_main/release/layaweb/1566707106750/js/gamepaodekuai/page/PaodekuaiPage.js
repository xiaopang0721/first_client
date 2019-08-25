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
* 跑得快-HUD
*/
var gamepaodekuai;
(function (gamepaodekuai) {
    var page;
    (function (page_1) {
        var PaodekuaiPage = /** @class */ (function (_super) {
            __extends(PaodekuaiPage, _super);
            function PaodekuaiPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isRoomcardType = false;
                _this._asset = [
                    Path_game_paodekuai.atlas_game_ui + "paodekuai.atlas",
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
            PaodekuaiPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.paodekuai.PaoDeKuai_HUDUI', ["game_ui.tongyong.HudUI"]);
                this.addChild(this._viewUI);
                this._game.playMusic(Path.music + "paodekuai/pdk_BGM.mp3");
                this._paodekuaiMgr = new PaodekuaiMgr(this._game);
                for (var index = 0; index < this._viewUI.box_right.numChildren; index++) {
                    this._viewUI.box_right._childs[index].visible = false;
                }
            };
            Object.defineProperty(PaodekuaiPage.prototype, "dataSource", {
                /**数据*/
                set: function (v) {
                    this._dataSource = v;
                    this._isRoomcardType = this._dataSource == PageDef.TYPE_CARD;
                },
                enumerable: true,
                configurable: true
            });
            // 页面打开时执行函数
            PaodekuaiPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.box_normal.visible = !this._isRoomcardType;
                this._viewUI.box_roomcard.visible = this._isRoomcardType;
                this._viewUI.view_hud.onOpen(this._game, page_1.PaodekuaiPageDef.GAME_NAME, this._isRoomcardType);
                if (this._isRoomcardType) {
                    for (var index = 0; index < this._viewUI.box_roomcard.numChildren; index++) {
                        this._viewUI.box_right._childs[index].visible = true;
                        Laya.Tween.from(this._viewUI.box_right._childs[index], {
                            right: -300
                        }, 200 + index * 100, Laya.Ease.linearNone);
                    }
                }
                else {
                    for (var index = 0; index < this._viewUI.box_right.numChildren; index++) {
                        this._viewUI.box_right._childs[index].visible = true;
                        Laya.Tween.from(this._viewUI.box_right._childs[index], {
                            right: -300
                        }, 200 + index * 100, Laya.Ease.linearNone);
                    }
                }
                this._viewUI.img_room0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.img_room1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.img_room2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.img_room3.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.img_room_create.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.img_room_join.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            };
            PaodekuaiPage.prototype.onBtnTweenEnd = function (e, target) {
                this._player = this._game.sceneObjectMgr.mainPlayer;
                if (!this._player)
                    return;
                if (this.chkPlayerIsGuest())
                    return;
                switch (target) {
                    case this._viewUI.img_room_create:
                        this._game.uiRoot.general.open(page_1.PaodekuaiPageDef.PAGE_PDK_CREATE_CARDROOM);
                        break;
                    case this._viewUI.img_room_join:
                        this._game.uiRoot.general.open(page_1.PaodekuaiPageDef.PAGE_PDK_JOIN_CARDROOM);
                        break;
                    default:
                        break;
                }
            };
            PaodekuaiPage.prototype.chkPlayerIsGuest = function () {
                var _this = this;
                var result = false;
                if (this._player.playerInfo.isguest) {
                    TongyongPageDef.ins.alertRecharge("您选择了游客模式登录游戏，由于该模式下的游戏数据(包括付费数据)在删除游戏、更换设备后将被清空!对此造成的损失，本平台将不承担任何责任。为了您的虚拟财产安全,我们强烈建议您使用微信登录和账号登录游戏!", function () {
                        _this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDPHONE, function (page) {
                            page.dataSource = 3; //绑定手机类型
                        });
                    }, function () {
                    }, false, PathGameTongyong.ui_tongyong_general + "btn_qw.png");
                    result = true;
                }
                return result;
            };
            PaodekuaiPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.img_room0.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.img_room1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.img_room2.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.img_room3.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.img_room_create.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.img_room_join.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                }
                this._game.stopMusic();
                _super.prototype.close.call(this);
            };
            return PaodekuaiPage;
        }(game.gui.base.Page));
        page_1.PaodekuaiPage = PaodekuaiPage;
    })(page = gamepaodekuai.page || (gamepaodekuai.page = {}));
})(gamepaodekuai || (gamepaodekuai = {}));
//# sourceMappingURL=PaodekuaiPage.js.map