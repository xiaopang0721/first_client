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
* 飞禽走兽
*/
var gamezoo;
(function (gamezoo) {
    var page;
    (function (page) {
        var ZooPage = /** @class */ (function (_super) {
            __extends(ZooPage, _super);
            function ZooPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._xianhongTmep = [5000, 8000, 25000, 50000];
                _this._xianhongClipList = [];
                _this._asset = [
                    Path_game_zoo.atlas_game_ui + "feiqinzoushou.atlas",
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
            ZooPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.feiqinzoushou.FeiQinZouShou_HUDUI');
                this.addChild(this._viewUI);
                this._game.playMusic(Path.music + "blackjack/black_bgm.mp3");
                for (var index = 0; index < this._viewUI.box_right.numChildren; index++) {
                    this._viewUI.box_right._childs[index].visible = false;
                }
                for (var index = 0; index < 4; index++) {
                    if (!this._xianhongClipList[index]) {
                        this._xianhongClipList[index] = new gamezoo.ClipUtil(gamezoo.ClipUtil.HUD_FONT);
                        this._xianhongClipList[index].x = this._viewUI["clip_xianhong" + index].x;
                        this._xianhongClipList[index].y = this._viewUI["clip_xianhong" + index].y;
                        this._viewUI["clip_xianhong" + index].parent && this._viewUI["clip_xianhong" + index].parent.addChild(this._xianhongClipList[index]);
                        this._viewUI["clip_xianhong" + index].removeSelf();
                    }
                }
            };
            // 页面打开时执行函数
            ZooPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this.initPlayerInfo();
                this._viewUI.view_hud.onOpen(this._game, page.ZooPageDef.GAME_NAME);
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
            ZooPage.prototype.onBtnTweenEnd = function (e, target) {
                this._player = this._game.sceneObjectMgr.mainPlayer;
                if (!this._player)
                    return;
                switch (target) {
                    case this._viewUI.img_room0:
                        this._game.sceneObjectMgr.intoStory(page.ZooPageDef.GAME_NAME, (Web_operation_fields.GAME_ROOM_CONFIG_ZOO_1).toString(), true);
                        break;
                    case this._viewUI.img_room1:
                        this._game.sceneObjectMgr.intoStory(page.ZooPageDef.GAME_NAME, (Web_operation_fields.GAME_ROOM_CONFIG_ZOO_2).toString(), true);
                        break;
                    case this._viewUI.img_room2:
                        this._game.sceneObjectMgr.intoStory(page.ZooPageDef.GAME_NAME, (Web_operation_fields.GAME_ROOM_CONFIG_ZOO_3).toString(), true);
                        break;
                    case this._viewUI.img_room3:
                        this._game.sceneObjectMgr.intoStory(page.ZooPageDef.GAME_NAME, (Web_operation_fields.GAME_ROOM_CONFIG_ZOO_4).toString(), true);
                        break;
                    default:
                        break;
                }
            };
            ZooPage.prototype.showTipsBox = function (limit) {
                var _this = this;
                TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", limit), function () {
                    _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                }, function () {
                }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
            };
            ZooPage.prototype.initPlayerInfo = function () {
                for (var index = 0; index < this._xianhongClipList.length; index++) {
                    this._xianhongClipList[index].setText(this._xianhongTmep[index], true);
                }
            };
            ZooPage.prototype.close = function () {
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
            return ZooPage;
        }(game.gui.base.Page));
        page.ZooPage = ZooPage;
    })(page = gamezoo.page || (gamezoo.page = {}));
})(gamezoo || (gamezoo = {}));
//# sourceMappingURL=ZooPage.js.map