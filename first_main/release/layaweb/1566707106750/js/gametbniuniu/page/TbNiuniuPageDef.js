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
var gametbniuniu;
(function (gametbniuniu) {
    var page;
    (function (page) {
        var TbniuniuPageDef = /** @class */ (function (_super) {
            __extends(TbniuniuPageDef, _super);
            function TbniuniuPageDef() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TbniuniuPageDef.myinit = function (str) {
                _super.myinit.call(this, str);
                TbniuniuClip.init();
                if (WebConfig.baseplatform == PageDef.BASE_PLATFORM_TYPE_NQP) {
                    PageDef._pageClassMap[TbniuniuPageDef.PAGE_TBNIUNIU] = page.TbNiuNiuPage;
                }
                else {
                    PageDef._pageClassMap[TbniuniuPageDef.PAGE_TBNIUNIU] = page.TbNiuNiuPageOld;
                }
                PageDef._pageClassMap[TbniuniuPageDef.PAGE_TBNIUNIU_MAP] = page.TbNiuNiuMapPage;
                PageDef._pageClassMap[TbniuniuPageDef.PAGE_TBNIUNIU_BEGIN] = page.TbNiuNiuBeginPage;
                PageDef._pageClassMap[TbniuniuPageDef.PAGE_TBNIUNIU_WIN] = page.TbNiuNiuWinPage;
                PageDef._pageClassMap[TbniuniuPageDef.PAGE_TBNIUNIU_LOSE] = page.TbNiuNiuLosePage;
                PageDef._pageClassMap[TbniuniuPageDef.PAGE_TBNIUNIU_RULE] = page.TbNiuNiuRulePage;
                PageDef._pageClassMap[TbniuniuPageDef.PAGE_TBNIUNIU_TUOGUAN] = page.TbNiuNiuTuoGuanPage;
                this["__needLoadAsset"] = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    Path_game_tbniuniu.atlas_game_ui + "tbniuniu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/suiji.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                    Path.custom_atlas_scene + 'card.atlas',
                    Path.map + 'pz_tbniuniu.png',
                    Path.map_far + 'bg_tbniuniu.jpg'
                ];
                if (WebConfig.needMusicPreload) {
                    this["__needLoadAsset"] = this["__needLoadAsset"].concat([
                        Path_game_tbniuniu.music_tbniuniu + "kaishi.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu0_nan.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu0_nv.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu1_nan.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu1_nv.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu2_nan.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu2_nv.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu3_nan.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu3_nv.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu4_nan.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu4_nv.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu5_nan.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu5_nv.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu6_nan.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu6_nv.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu7_nan.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu7_nv.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu8_nan.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu8_nv.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu9_nan.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu9_nv.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu10_nan.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu10_nv.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu11_nan.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu11_nv.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu12_nan.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu12_nv.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu13_nan.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu13_nv.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu14_nan.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "niu14_nv.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "piaoqian.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "shengli.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "shibai.mp3",
                        Path_game_tbniuniu.music_tbniuniu + "tbnn_bgm.mp3",
                    ]);
                }
            };
            //通比牛牛界面
            TbniuniuPageDef.PAGE_TBNIUNIU = "1";
            //通比牛牛地图UI
            TbniuniuPageDef.PAGE_TBNIUNIU_MAP = "2";
            //通比牛牛开始游戏动画界面
            TbniuniuPageDef.PAGE_TBNIUNIU_BEGIN = "3";
            //通比牛牛胜利动画界面
            TbniuniuPageDef.PAGE_TBNIUNIU_WIN = "4";
            //通比牛牛失败动画界面
            TbniuniuPageDef.PAGE_TBNIUNIU_LOSE = "5";
            //通比牛牛游戏规则界面
            TbniuniuPageDef.PAGE_TBNIUNIU_RULE = "101";
            //通比牛牛托管界面
            TbniuniuPageDef.PAGE_TBNIUNIU_TUOGUAN = "11";
            return TbniuniuPageDef;
        }(game.gui.page.PageDef));
        page.TbniuniuPageDef = TbniuniuPageDef;
    })(page = gametbniuniu.page || (gametbniuniu.page = {}));
})(gametbniuniu || (gametbniuniu = {}));
//# sourceMappingURL=TbNiuniuPageDef.js.map