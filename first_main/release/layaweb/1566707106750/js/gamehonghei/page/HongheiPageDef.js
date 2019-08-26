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
var gamehonghei;
(function (gamehonghei) {
    var page;
    (function (page) {
        var HongheiPageDef = /** @class */ (function (_super) {
            __extends(HongheiPageDef, _super);
            function HongheiPageDef() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            HongheiPageDef.myinit = function (str) {
                _super.myinit.call(this, str);
                HongheiClip.init();
                if (WebConfig.baseplatform == PageDef.BASE_PLATFORM_TYPE_NQP) {
                    PageDef._pageClassMap[HongheiPageDef.PAGE_HHDZ] = page.HongheiPage;
                }
                else {
                    PageDef._pageClassMap[HongheiPageDef.PAGE_HHDZ] = page.HongheiPageOld;
                }
                PageDef._pageClassMap[HongheiPageDef.PAGE_HHDZ_MAP] = page.HongheiMapPage;
                PageDef._pageClassMap[HongheiPageDef.PAGE_HHDZ_BEGIN] = page.HongheiBeginPage;
                PageDef._pageClassMap[HongheiPageDef.PAGE_HHDZ_RULE] = page.HongheiRulePage;
                PageDef._pageClassMap[HongheiPageDef.PAGE_HHDZ_PLAYER_LIST] = page.HongheiPlayerListPage;
                PageDef._pageClassMap[HongheiPageDef.PAGE_HHDZ_END] = page.HongheiEndPage;
                PageDef._pageClassMap[HongheiPageDef.PAGE_HHDZ_START] = page.HongheiStartPage;
                PageDef._pageClassMap[HongheiPageDef.PAGE_HHDZ_ZOUSHI] = page.HongheiZoushiPage;
                PageDef._pageClassMap[HongheiPageDef.PAGE_HHDZ_RESULT] = page.HongheiResultPage;
                this["__needLoadAsset"] = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    Path_game_honghei.atlas_game_ui + "honghei.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "tuichu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    Path_game_honghei.atlas_game_ui + "honghei/effect/bipai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/suiji.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/kaipai.atlas",
                    Path.custom_atlas_scene + 'card.atlas',
                    Path.custom_atlas_scene + 'chip.atlas',
                    Path.map + 'pz_honghei.png',
                    Path.map_far + 'bg_honghei.jpg'
                ];
                if (WebConfig.needMusicPreload) {
                    this["__needLoadAsset"] = this["__needLoadAsset"].concat([
                        Path_game_honghei.music_honghei + "honghei_bgm.mp3",
                        Path_game_honghei.music_honghei + "chouma.mp3",
                        Path_game_honghei.music_honghei + "dingding_end.mp3",
                        Path_game_honghei.music_honghei + "dingding_start.mp3",
                        Path_game_honghei.music_honghei + "piaoqian.mp3",
                        Path_game_honghei.music_honghei + "type0.mp3",
                        Path_game_honghei.music_honghei + "type1.mp3",
                        Path_game_honghei.music_honghei + "type2.mp3",
                        Path_game_honghei.music_honghei + "type3.mp3",
                        Path_game_honghei.music_honghei + "type4.mp3",
                        Path_game_honghei.music_honghei + "type5.mp3",
                        Path_game_honghei.music_honghei + "win_black.mp3",
                        Path_game_honghei.music_honghei + "win_red.mp3",
                        Path_game_honghei.music_honghei + "xiazhu_end.mp3",
                        Path_game_honghei.music_honghei + "xiazhu_start.mp3",
                    ]);
                }
            };
            //红黑大战界面
            HongheiPageDef.PAGE_HHDZ = "1";
            //红黑大战地图UI
            HongheiPageDef.PAGE_HHDZ_MAP = "2";
            //红黑大战开始下注界面
            HongheiPageDef.PAGE_HHDZ_BEGIN = "3";
            //红黑大战规则界面
            HongheiPageDef.PAGE_HHDZ_RULE = "101";
            //红黑大战玩家列表界面
            HongheiPageDef.PAGE_HHDZ_PLAYER_LIST = "8";
            //红黑大战停止下注界面
            HongheiPageDef.PAGE_HHDZ_END = "9";
            //红黑大战开始界面
            HongheiPageDef.PAGE_HHDZ_START = "11";
            //红黑大战走势
            HongheiPageDef.PAGE_HHDZ_ZOUSHI = "12";
            //红黑大战结果
            HongheiPageDef.PAGE_HHDZ_RESULT = "13";
            return HongheiPageDef;
        }(game.gui.page.PageDef));
        page.HongheiPageDef = HongheiPageDef;
    })(page = gamehonghei.page || (gamehonghei.page = {}));
})(gamehonghei || (gamehonghei = {}));
//# sourceMappingURL=HongheiPageDef.js.map