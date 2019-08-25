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
var gamedezhou;
(function (gamedezhou) {
    var page;
    (function (page_1) {
        var DezhouPage = /** @class */ (function (_super) {
            __extends(DezhouPage, _super);
            function DezhouPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._leastTmep = ["1/2", "5/10", "20/40", "50/100"];
                _this._needMoney = [50, 100, 500, 1000];
                _this._difenClipList = [];
                _this._leastClipList = [];
                _this._mapLvConfig = [192, 193, 194, 195];
                _this._asset = [
                    Path_game_dezhou.atlas_game_ui + "dezhou.atlas",
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
            DezhouPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.dezhou.DeZhou_HUDUI', ["game_ui.tongyong.HudUI"]);
                this.addChild(this._viewUI);
                this._game.playMusic(Path.music + "dezhou/bgplay.mp3", 0);
                this._dezhouMgr = new DezhouMgr(this._game);
                for (var index = 0; index < this._viewUI.box_right.numChildren; index++) {
                    this._viewUI.box_right._childs[index].visible = false;
                }
                for (var index = 0; index < 4; index++) {
                    if (!this._difenClipList[index]) {
                        this._difenClipList[index] = new gamedezhou.ClipUtil(gamedezhou.ClipUtil.HUD_FONT);
                        this._difenClipList[index].x = this._viewUI["txt_difen" + index].x;
                        this._difenClipList[index].y = this._viewUI["txt_difen" + index].y;
                        this._viewUI["txt_difen" + index].parent && this._viewUI["txt_difen" + index].parent.addChild(this._difenClipList[index]);
                        this._viewUI["txt_difen" + index].removeSelf();
                    }
                    if (!this._leastClipList[index]) {
                        this._leastClipList[index] = new gamedezhou.ClipUtil(gamedezhou.ClipUtil.HUD_FONT);
                        this._leastClipList[index].x = this._viewUI["txt_least" + index].x;
                        this._leastClipList[index].y = this._viewUI["txt_least" + index].y;
                        this._leastClipList[index].scale(0.8, 0.8);
                        this._viewUI["txt_least" + index].parent && this._viewUI["txt_least" + index].parent.addChild(this._leastClipList[index]);
                        this._viewUI["txt_least" + index].removeSelf();
                    }
                }
            };
            // 页面打开时执行函数
            DezhouPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this.initPlayerInfo();
                this._viewUI.img_room0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.img_room1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.img_room2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.img_room3.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_join.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.view_hud.onOpen(this._game, page_1.DezhouPageDef.GAME_NAME);
                for (var index = 0; index < this._viewUI.box_right.numChildren; index++) {
                    this._viewUI.box_right._childs[index].visible = true;
                    Laya.Tween.from(this._viewUI.box_right._childs[index], {
                        right: -300
                    }, 200 + index * 100, Laya.Ease.linearNone);
                }
            };
            DezhouPage.prototype.onBtnTweenEnd = function (e, target) {
                var _this = this;
                this._player = this._game.sceneObjectMgr.mainPlayer;
                if (!this._player)
                    return;
                switch (target) {
                    case this._viewUI.img_room0:
                        if (this._player.playerInfo.money < this._needMoney[0]) {
                            this.showTipsBox(this._needMoney[0]);
                            return;
                        }
                        this._game.uiRoot.HUD.open(page_1.DezhouPageDef.PAGE_DEZHOU_TAKE, function (page) { page.dataSource = 0; });
                        break;
                    case this._viewUI.img_room1:
                        if (this._player.playerInfo.money < this._needMoney[1]) {
                            this.showTipsBox(this._needMoney[1]);
                            return;
                        }
                        this._game.uiRoot.HUD.open(page_1.DezhouPageDef.PAGE_DEZHOU_TAKE, function (page) { page.dataSource = 1; });
                        break;
                    case this._viewUI.img_room2:
                        if (this._player.playerInfo.money < this._needMoney[2]) {
                            this.showTipsBox(this._needMoney[2]);
                            return;
                        }
                        this._game.uiRoot.HUD.open(page_1.DezhouPageDef.PAGE_DEZHOU_TAKE, function (page) { page.dataSource = 2; });
                        break;
                    case this._viewUI.img_room3:
                        if (this._player.playerInfo.money < this._needMoney[3]) {
                            this.showTipsBox(this._needMoney[3]);
                            return;
                        }
                        this._game.uiRoot.HUD.open(page_1.DezhouPageDef.PAGE_DEZHOU_TAKE, function (page) { page.dataSource = 3; });
                        break;
                    case this._viewUI.btn_join:
                        var maplv_1 = TongyongUtil.getJoinMapLv(page_1.DezhouPageDef.GAME_NAME, this._player.playerInfo.money);
                        if (!maplv_1)
                            return;
                        this._game.uiRoot.HUD.open(page_1.DezhouPageDef.PAGE_DEZHOU_TAKE, function (page) { page.dataSource = _this._mapLvConfig.indexOf(maplv_1); });
                        break;
                    default:
                        break;
                }
            };
            DezhouPage.prototype.initPlayerInfo = function () {
                for (var index = 0; index < this._difenClipList.length; index++) {
                    this._difenClipList[index].setText(this._leastTmep[index], true);
                }
                for (var index = 0; index < this._leastClipList.length; index++) {
                    this._leastClipList[index].setText(this._needMoney[index], true);
                }
            };
            DezhouPage.prototype.showTipsBox = function (limit) {
                var _this = this;
                TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", limit), function () {
                    _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                }, function () {
                }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
            };
            DezhouPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.img_room0.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.img_room1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.img_room2.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.img_room3.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_join.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                }
                this._game.stopMusic();
                _super.prototype.close.call(this);
            };
            return DezhouPage;
        }(game.gui.base.Page));
        page_1.DezhouPage = DezhouPage;
    })(page = gamedezhou.page || (gamedezhou.page = {}));
})(gamedezhou || (gamedezhou = {}));
//# sourceMappingURL=DezhouPage.js.map