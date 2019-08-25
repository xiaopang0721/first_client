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
* 奔驰宝马
*/
var gamebenchibaoma;
(function (gamebenchibaoma) {
    var page;
    (function (page) {
        var BcbmPage = /** @class */ (function (_super) {
            __extends(BcbmPage, _super);
            function BcbmPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._xianhongTmep = [5000, 8000, 25000, 50000];
                _this._needMoney = [0, 0, 0, 0];
                _this._xianhongClipList = [];
                _this._asset = [
                    Path_game_benchibaoma.atlas_game_ui + "benchibaoma.atlas",
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
            BcbmPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.benchibaoma.BenChiBaoMa_HUDUI', ["game_ui.tongyong.HudUI"]);
                this.addChild(this._viewUI);
                this._game.playMusic(Path_game_benchibaoma.music_benchibaoma + "BGM_1.mp3");
                for (var index = 0; index < this._viewUI.box_right.numChildren; index++) {
                    this._viewUI.box_right._childs[index].visible = false;
                }
                for (var index = 0; index < 4; index++) {
                    if (!this._xianhongClipList[index]) {
                        this._xianhongClipList[index] = new gamebenchibaoma.ClipUtil(gamebenchibaoma.ClipUtil.HUD_FONT);
                        this._xianhongClipList[index].x = this._viewUI["clip_xianhong" + index].x;
                        this._xianhongClipList[index].y = this._viewUI["clip_xianhong" + index].y;
                        this._viewUI["clip_xianhong" + index].parent && this._viewUI["clip_xianhong" + index].parent.addChild(this._xianhongClipList[index]);
                        this._viewUI["clip_xianhong" + index].removeSelf();
                    }
                }
            };
            // 页面打开时执行函数
            BcbmPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this.initPlayerInfo();
                this._viewUI.view_hud.onOpen(this._game, page.BenchibaomaPageDef.GAME_NAME);
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
                this._viewUI.btn_join.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            };
            BcbmPage.prototype.onBtnTweenEnd = function (e, target) {
                this._player = this._game.sceneObjectMgr.mainPlayer;
                if (!this._player)
                    return;
                switch (target) {
                    case this._viewUI.img_room0:
                        this.EnterRoom(0);
                        break;
                    case this._viewUI.img_room1:
                        this.EnterRoom(1);
                        break;
                    case this._viewUI.img_room2:
                        this.EnterRoom(2);
                        break;
                    case this._viewUI.img_room3:
                        this.EnterRoom(3);
                        break;
                    case this._viewUI.btn_join:
                        var maplv = TongyongUtil.getJoinMapLv(page.BenchibaomaPageDef.GAME_NAME, this._player.playerInfo.money);
                        if (!maplv)
                            return;
                        this._game.sceneObjectMgr.intoStory(page.BenchibaomaPageDef.GAME_NAME, maplv.toString(), true);
                        break;
                    default:
                        break;
                }
            };
            BcbmPage.prototype.EnterRoom = function (index) {
                if (index < 0 || index >= this._needMoney.length) {
                    loge("BcbmPage.EnterRoom--index is error:" + index);
                    return;
                }
                if (this._player.playerInfo.money < this._needMoney[index]) {
                    this.showTipsBox(this._needMoney[index]);
                    return;
                }
                this._game.sceneObjectMgr.intoStory(page.BenchibaomaPageDef.GAME_NAME, (Web_operation_fields.GAME_ROOM_CONFIG_BENCHIBAOMA_1 + index).toString(), true);
            };
            BcbmPage.prototype.showTipsBox = function (limit) {
                var _this = this;
                TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", limit), function () {
                    _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                }, function () {
                }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
            };
            BcbmPage.prototype.initPlayerInfo = function () {
                for (var index = 0; index < this._xianhongClipList.length; index++) {
                    this._xianhongClipList[index].setText(this._xianhongTmep[index], true);
                }
                // this._viewUI["lab_money" + index].text = "准入: " + this._needMoney[index];
            };
            BcbmPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.img_room0.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.img_room1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.img_room2.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.img_room3.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_join.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    for (var index = 0; index < this._viewUI.box_right.numChildren; index++) {
                        Laya.timer.clearAll(this._viewUI.box_right._childs[index]);
                    }
                }
                this._player = null;
                this._game.stopMusic();
                _super.prototype.close.call(this);
            };
            return BcbmPage;
        }(game.gui.base.Page));
        page.BcbmPage = BcbmPage;
    })(page = gamebenchibaoma.page || (gamebenchibaoma.page = {}));
})(gamebenchibaoma || (gamebenchibaoma = {}));
//# sourceMappingURL=BcbmPage.js.map