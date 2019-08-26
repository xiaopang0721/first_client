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
* 十三水-拼牌界面
*/
var gameshisanshui;
(function (gameshisanshui) {
    var page;
    (function (page) {
        var ShisanshuiSpecial = /** @class */ (function (_super) {
            __extends(ShisanshuiSpecial, _super);
            function ShisanshuiSpecial(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._cards = []; //当前拼牌界面的牌
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                _this._asset = [
                    Path_game_shisanshui.atlas_game_ui + "shisanshui.atlas",
                    Path_game_shisanshui.atlas_game_ui + "shisanshui/effect/paixing.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            ShisanshuiSpecial.prototype.init = function () {
                this._viewUI = this.createView('game_ui.shisanshui.TipsUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            ShisanshuiSpecial.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                var mapInfo = this._game.sceneObjectMgr.mapInfo;
                if (mapInfo) {
                    this._mapInfo = mapInfo;
                    this.updateBattledInfo();
                }
                this._viewUI.btn_cancle.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_enter.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            };
            ShisanshuiSpecial.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_enter:
                        var str = JSON.stringify(this._cards);
                        this._game.network.call_shisanshui_playing(str, 1);
                        break;
                    case this._viewUI.btn_cancle:
                        this._game.network.call_sss_cancel_special();
                        this.close();
                        break;
                    default:
                        break;
                }
            };
            //战斗日志
            ShisanshuiSpecial.prototype.updateBattledInfo = function () {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var battleInfoMgr = this._mapInfo.battleInfoMgr;
                var mainIdx = mainUnit.GetIndex();
                if (mainIdx == 0)
                    return;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    if (battleInfo.Type == 3) {
                        var info = battleInfoMgr.info[i];
                        var idx = info.SeatIndex;
                        if (idx == mainIdx) {
                            for (var index = 0; index < info.Cards.length; index++) {
                                var card = info.Cards[index];
                                this._cards.push(card.GetVal());
                            }
                            if (info.CardType > 0) {
                                this._viewUI.img_type.skin = Path_game_shisanshui.ui_shisanshui + "effect/paixing/tu_paix" + info.CardType + ".png";
                            }
                        }
                    }
                }
            };
            ShisanshuiSpecial.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_cancle.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_enter.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                }
                this._mapInfo = null;
                _super.prototype.close.call(this);
            };
            return ShisanshuiSpecial;
        }(game.gui.base.Page));
        page.ShisanshuiSpecial = ShisanshuiSpecial;
    })(page = gameshisanshui.page || (gameshisanshui.page = {}));
})(gameshisanshui || (gameshisanshui = {}));
//# sourceMappingURL=ShisanshuiSpecial.js.map