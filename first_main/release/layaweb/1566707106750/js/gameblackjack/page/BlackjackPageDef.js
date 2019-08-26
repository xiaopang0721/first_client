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
* 21点
*/
var gameblackjack;
(function (gameblackjack) {
    var page;
    (function (page) {
        var BlackjackPageDef = /** @class */ (function (_super) {
            __extends(BlackjackPageDef, _super);
            function BlackjackPageDef() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BlackjackPageDef.myinit = function (str) {
                _super.myinit.call(this, str);
                BlackjackClip.init();
                if (WebConfig.baseplatform == PageDef.BASE_PLATFORM_TYPE_NQP) {
                    PageDef._pageClassMap[BlackjackPageDef.PAGE_BLACKJACK] = page.BlackjackPage;
                }
                else {
                    PageDef._pageClassMap[BlackjackPageDef.PAGE_BLACKJACK] = page.BlackjackPageOld;
                }
                PageDef._pageClassMap[BlackjackPageDef.PAGE_BLACKJACK_MAP] = page.BlackjackMapPage;
                PageDef._pageClassMap[BlackjackPageDef.PAGE_BLACKJACK_RULE] = page.BlackjackRulePage;
                PageDef._pageClassMap[BlackjackPageDef.PAGE_BLACKJACK_BAODIAN] = page.BlackjackBaoDianPage;
                this["__needLoadAsset"] = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    Path_game_blackjack.atlas_game_ui + "ershiyidian.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    Path_game_blackjack.atlas_game_ui + "ershiyidian/effect.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_2.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                    Path.custom_atlas_scene + 'card.atlas',
                    Path.custom_atlas_scene + 'chip.atlas',
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
                    Path.map + 'pz_blackjack.png',
                    Path.map_far + 'bg_blackjack.jpg'
                ];
                if (WebConfig.needMusicPreload) {
                    this["__needLoadAsset"] = this["__needLoadAsset"].concat([
                        Path_game_blackjack.music_blackjack + "black_bgm.mp3",
                        Path_game_blackjack.music_blackjack + "baopai.mp3",
                        Path_game_blackjack.music_blackjack + "chouma.mp3",
                        Path_game_blackjack.music_blackjack + "kais.mp3",
                        Path_game_blackjack.music_blackjack + "tesupai.mp3",
                    ]);
                }
            };
            //21点界面
            BlackjackPageDef.PAGE_BLACKJACK = "1";
            BlackjackPageDef.PAGE_BLACKJACK_MAP = "2";
            BlackjackPageDef.PAGE_BLACKJACK_RULE = "101";
            BlackjackPageDef.PAGE_BLACKJACK_BAODIAN = "7";
            return BlackjackPageDef;
        }(game.gui.page.PageDef));
        page.BlackjackPageDef = BlackjackPageDef;
    })(page = gameblackjack.page || (gameblackjack.page = {}));
})(gameblackjack || (gameblackjack = {}));
//# sourceMappingURL=BlackjackPageDef.js.map