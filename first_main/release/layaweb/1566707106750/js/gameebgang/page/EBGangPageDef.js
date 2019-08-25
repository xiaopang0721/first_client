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
* 二八杠 该页面限制了类名首字母为大写其它为小写 Ebgang
*/
var gameebgang;
(function (gameebgang) {
    var page;
    (function (page) {
        var EbgangPageDef = /** @class */ (function (_super) {
            __extends(EbgangPageDef, _super);
            function EbgangPageDef() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EbgangPageDef.myinit = function (str) {
                _super.myinit.call(this, str);
                EbgangClip.init();
                if (WebConfig.baseplatform == PageDef.BASE_PLATFORM_TYPE_NQP) {
                    PageDef._pageClassMap[EbgangPageDef.PAGE_EBG] = page.EBGangPage;
                }
                else {
                    PageDef._pageClassMap[EbgangPageDef.PAGE_EBG] = page.EBGangPageOld;
                }
                PageDef._pageClassMap[EbgangPageDef.PAGE_EBG_MAP] = page.EBGangMapPage;
                PageDef._pageClassMap[EbgangPageDef.PAGE_EBG_RULE] = page.EBGangRulePage;
                PageDef._pageClassMap[EbgangPageDef.PAGE_EBG_BEGIN] = page.EBGangBeginPage;
                PageDef._pageClassMap[EbgangPageDef.PAGE_EBG_SETTLEMENT] = page.EBGangSettle;
                this["__needLoadAsset"] = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    Path_game_ebgang.atlas_game_ui + "ebgang.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "jiaru.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    Path_game_ebgang.atlas_game_ui + "ebgang/effect/yanhua.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/shaizi.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/hulu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
                    Path.custom_atlas_scene + 'mahjong.atlas',
                    Path.map + 'pz_ebgang.png',
                    Path.map_far + 'bg_ebgang.jpg',
                ];
                if (WebConfig.needMusicPreload) {
                    this["__needLoadAsset"] = this["__needLoadAsset"].concat([
                        Path_game_ebgang.music_ebgang + "28g_BGM.mp3",
                        Path_game_ebgang.music_ebgang + "bar_open_card.mp3",
                        Path_game_ebgang.music_ebgang + "bar_send_card.mp3",
                        Path_game_ebgang.music_ebgang + "bar_throw_dice.mp3",
                        Path_game_ebgang.music_ebgang + "chouma_fly.mp3",
                        Path_game_ebgang.music_ebgang + "dingzhuang.mp3",
                        Path_game_ebgang.music_ebgang + "start.mp3",
                        Path_game_ebgang.music_ebgang + "suijizhuangjia.mp3",
                        Path_game_ebgang.music_ebgang + "chouma.mp3",
                    ]);
                }
            };
            EbgangPageDef.PAGE_EBG = "1"; // HUD
            EbgangPageDef.PAGE_EBG_MAP = "2"; // 游戏场景
            EbgangPageDef.PAGE_EBG_RULE = "101"; // 规则
            EbgangPageDef.PAGE_EBG_BEGIN = "8"; // 开始动画
            EbgangPageDef.PAGE_EBG_SETTLEMENT = "9"; // 结算页
            return EbgangPageDef;
        }(game.gui.page.PageDef));
        page.EbgangPageDef = EbgangPageDef;
    })(page = gameebgang.page || (gameebgang.page = {}));
})(gameebgang || (gameebgang = {}));
//# sourceMappingURL=EBGangPageDef.js.map