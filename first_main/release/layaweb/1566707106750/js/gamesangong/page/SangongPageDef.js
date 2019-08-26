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
* 三公
*/
var gamesangong;
(function (gamesangong) {
    var page;
    (function (page) {
        var SangongPageDef = /** @class */ (function (_super) {
            __extends(SangongPageDef, _super);
            function SangongPageDef() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SangongPageDef.myinit = function (str) {
                _super.myinit.call(this, str);
                SangongClip.init();
                if (WebConfig.baseplatform == PageDef.BASE_PLATFORM_TYPE_NQP) {
                    PageDef._pageClassMap[SangongPageDef.PAGE_SG] = page.SangongPage;
                }
                else {
                    PageDef._pageClassMap[SangongPageDef.PAGE_SG] = page.SangongPageOld;
                }
                PageDef._pageClassMap[SangongPageDef.PAGE_SG_MAP] = page.SangongMapPage;
                PageDef._pageClassMap[SangongPageDef.PAGE_SG_RULE] = page.SangongRulePage;
                PageDef._pageClassMap[SangongPageDef.PAGE_SG_LOSE] = page.SangongLosePage;
                PageDef._pageClassMap[SangongPageDef.PAGE_SG_WIN] = page.SangongWinPage;
                this["__needLoadAsset"] = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    Path_game_sangong.atlas_game_ui + "sangong.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    Path_game_sangong.atlas_game_ui + "sangong/effect/yanhua.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_2.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                    Path.custom_atlas_scene + 'card.atlas',
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    PathGameTongyong.ui_tongyong_sk + "HeGuan.sk",
                    PathGameTongyong.ui_tongyong_sk + "HeGuan.png",
                    Path.map + 'pz_sangong.png',
                    Path.map_far + 'bg_sangong.jpg'
                ];
                if (WebConfig.needMusicPreload) {
                    this["__needLoadAsset"] = this["__needLoadAsset"].concat([
                        Path_game_sangong.music_sangong + "sg_bgm.mp3",
                        Path_game_sangong.music_sangong + "dingzhuang.mp3",
                        Path_game_sangong.music_sangong + "sg_female_0.mp3",
                        Path_game_sangong.music_sangong + "sg_female_1.mp3",
                        Path_game_sangong.music_sangong + "sg_female_2.mp3",
                        Path_game_sangong.music_sangong + "sg_female_3.mp3",
                        Path_game_sangong.music_sangong + "sg_female_4.mp3",
                        Path_game_sangong.music_sangong + "sg_female_5.mp3",
                        Path_game_sangong.music_sangong + "sg_female_6.mp3",
                        Path_game_sangong.music_sangong + "sg_female_7.mp3",
                        Path_game_sangong.music_sangong + "sg_female_8.mp3",
                        Path_game_sangong.music_sangong + "sg_female_9.mp3",
                        Path_game_sangong.music_sangong + "sg_female_10.mp3",
                        Path_game_sangong.music_sangong + "sg_female_11.mp3",
                        Path_game_sangong.music_sangong + "sg_female_12.mp3",
                        Path_game_sangong.music_sangong + "sg_male_0.mp3",
                        Path_game_sangong.music_sangong + "sg_male_1.mp3",
                        Path_game_sangong.music_sangong + "sg_male_2.mp3",
                        Path_game_sangong.music_sangong + "sg_male_3.mp3",
                        Path_game_sangong.music_sangong + "sg_male_4.mp3",
                        Path_game_sangong.music_sangong + "sg_male_5.mp3",
                        Path_game_sangong.music_sangong + "sg_male_6.mp3",
                        Path_game_sangong.music_sangong + "sg_male_7.mp3",
                        Path_game_sangong.music_sangong + "sg_male_8.mp3",
                        Path_game_sangong.music_sangong + "sg_male_9.mp3",
                        Path_game_sangong.music_sangong + "sg_male_10.mp3",
                        Path_game_sangong.music_sangong + "sg_male_11.mp3",
                        Path_game_sangong.music_sangong + "sg_male_12.mp3",
                        Path_game_sangong.music_sangong + "suijizhuangjia.mp3",
                    ]);
                }
            };
            //21点界面
            SangongPageDef.PAGE_SG = "1";
            SangongPageDef.PAGE_SG_MAP = "2";
            SangongPageDef.PAGE_SG_RULE = "101";
            SangongPageDef.PAGE_SG_LOSE = "8";
            SangongPageDef.PAGE_SG_WIN = "9";
            return SangongPageDef;
        }(game.gui.page.PageDef));
        page.SangongPageDef = SangongPageDef;
    })(page = gamesangong.page || (gamesangong.page = {}));
})(gamesangong || (gamesangong = {}));
//# sourceMappingURL=SangongPageDef.js.map