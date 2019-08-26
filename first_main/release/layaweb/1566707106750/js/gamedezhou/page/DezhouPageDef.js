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
    (function (page) {
        var DezhouPageDef = /** @class */ (function (_super) {
            __extends(DezhouPageDef, _super);
            function DezhouPageDef() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DezhouPageDef.myinit = function (str) {
                _super.myinit.call(this, str);
                DezhouClip.init();
                if (WebConfig.baseplatform == PageDef.BASE_PLATFORM_TYPE_NQP) {
                    PageDef._pageClassMap[DezhouPageDef.PAGE_DEZHOU] = page.DezhouPage;
                }
                else {
                    PageDef._pageClassMap[DezhouPageDef.PAGE_DEZHOU] = page.DezhouPageOld;
                }
                PageDef._pageClassMap[DezhouPageDef.PAGE_DEZHOU_MAP] = page.DezhouMapPage;
                PageDef._pageClassMap[DezhouPageDef.PAGE_DEZHOU_RULE] = page.DezhouRulePage;
                PageDef._pageClassMap[DezhouPageDef.PAGE_DEZHOU_TAKE] = page.DezhouTakePage;
                this["__needLoadAsset"] = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    Path_game_dezhou.atlas_game_ui + "dezhou.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                    Path_game_dezhou.atlas_game_ui + "dezhou/effect/btn.atlas",
                    Path.custom_atlas_scene + 'card.atlas',
                    Path.custom_atlas_scene + 'chip.atlas',
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
                    PathGameTongyong.ui_tongyong_sk + "HeGuan2.sk",
                    PathGameTongyong.ui_tongyong_sk + "HeGuan2.png",
                    Path.map + 'pz_dezhou.png',
                    Path.map_far + 'bg_dezhou.jpg'
                ];
                if (WebConfig.needMusicPreload) {
                    this["__needLoadAsset"] = this["__needLoadAsset"].concat([
                        Path_game_dezhou.music_dezhou + "allin_1.mp3",
                        Path_game_dezhou.music_dezhou + "allin_2.mp3",
                        Path_game_dezhou.music_dezhou + "genzhu_1.mp3",
                        Path_game_dezhou.music_dezhou + "genzhu_2.mp3",
                        Path_game_dezhou.music_dezhou + "jiazhu_1.mp3",
                        Path_game_dezhou.music_dezhou + "jiazhu_2.mp3",
                        Path_game_dezhou.music_dezhou + "pass.mp3",
                        Path_game_dezhou.music_dezhou + "qipai_1.mp3",
                        Path_game_dezhou.music_dezhou + "qipai_2.mp3",
                        Path_game_dezhou.music_dezhou + "bgplay.mp3",
                    ]);
                }
                this["__qifulimit"] = true;
            };
            DezhouPageDef.PAGE_DEZHOU = "1";
            DezhouPageDef.PAGE_DEZHOU_MAP = "2";
            DezhouPageDef.PAGE_DEZHOU_RULE = "101";
            DezhouPageDef.PAGE_DEZHOU_TAKE = "8";
            return DezhouPageDef;
        }(game.gui.page.PageDef));
        page.DezhouPageDef = DezhouPageDef;
    })(page = gamedezhou.page || (gamedezhou.page = {}));
})(gamedezhou || (gamedezhou = {}));
//# sourceMappingURL=DezhouPageDef.js.map