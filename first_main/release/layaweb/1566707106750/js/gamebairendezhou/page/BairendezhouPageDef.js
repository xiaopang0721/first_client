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
* 界面总览
*/
var gamebairendezhou;
(function (gamebairendezhou) {
    var page;
    (function (page) {
        var BairendezhouPageDef = /** @class */ (function (_super) {
            __extends(BairendezhouPageDef, _super);
            function BairendezhouPageDef() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BairendezhouPageDef.myinit = function (str) {
                _super.myinit.call(this, str);
                BairendezhouiClip.init();
                if (WebConfig.baseplatform == PageDef.BASE_PLATFORM_TYPE_NQP) {
                    PageDef._pageClassMap[BairendezhouPageDef.PAGE_BAIRENDEZHOU] = page.BairendezhouPage;
                }
                else {
                    PageDef._pageClassMap[BairendezhouPageDef.PAGE_BAIRENDEZHOU] = page.BairendezhouPageOld;
                }
                PageDef._pageClassMap[BairendezhouPageDef.PAGE_BAIRENDEZHOU_MAP] = page.BairendezhouMapPage;
                PageDef._pageClassMap[BairendezhouPageDef.PAGE_BAIRENDEZHOU_BEGIN] = page.BairendezhouBeginPage;
                PageDef._pageClassMap[BairendezhouPageDef.PAGE_BAIRENDEZHOU_RULE] = page.BairendezhouRulePage;
                PageDef._pageClassMap[BairendezhouPageDef.PAGE_BAIRENDEZHOU_PLAYER_LIST] = page.BairendezhouPlayerListPage;
                PageDef._pageClassMap[BairendezhouPageDef.PAGE_BAIRENDEZHOU_END] = page.BairendezhouEndPage;
                PageDef._pageClassMap[BairendezhouPageDef.PAGE_BAIRENDEZHOU_ZOUSHI] = page.BairendezhouZoushiPage;
                PageDef._pageClassMap[BairendezhouPageDef.PAGE_BAIRENDEZHOU_RESULT] = page.BairendezhouResultPage;
                this["__needLoadAsset"] = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "tuichu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    Path_game_bairendezhou.atlas_game_ui + "bairendezhou.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/suiji.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/kaipai.atlas",
                    Path.custom_atlas_scene + 'card.atlas',
                    Path.custom_atlas_scene + 'chip.atlas',
                    PathGameTongyong.ui_tongyong_sk + "HeGuan.sk",
                    PathGameTongyong.ui_tongyong_sk + "HeGuan.png",
                    Path.map + 'pz_bairendezhou.png',
                    Path.map_far + 'bg_bairendezhou.jpg'
                ];
                if (WebConfig.needMusicPreload) {
                    this["__needLoadAsset"] = this["__needLoadAsset"].concat([
                        Path_game_bairendezhou.music_bairendezhou + "brdz_bgm.mp3",
                        Path_game_bairendezhou.music_bairendezhou + "card_type0.mp3",
                        Path_game_bairendezhou.music_bairendezhou + "card_type1.mp3",
                        Path_game_bairendezhou.music_bairendezhou + "card_type2.mp3",
                        Path_game_bairendezhou.music_bairendezhou + "card_type3.mp3",
                        Path_game_bairendezhou.music_bairendezhou + "card_type4.mp3",
                        Path_game_bairendezhou.music_bairendezhou + "card_type5.mp3",
                        Path_game_bairendezhou.music_bairendezhou + "card_type6.mp3",
                        Path_game_bairendezhou.music_bairendezhou + "card_type7.mp3",
                        Path_game_bairendezhou.music_bairendezhou + "card_type8.mp3",
                        Path_game_bairendezhou.music_bairendezhou + "chouma.mp3",
                        Path_game_bairendezhou.music_bairendezhou + "dingding_end.mp3",
                        Path_game_bairendezhou.music_bairendezhou + "dingding_start.mp3",
                        Path_game_bairendezhou.music_bairendezhou + "he.mp3",
                        Path_game_bairendezhou.music_bairendezhou + "piaoqian.mp3",
                        Path_game_bairendezhou.music_bairendezhou + "win_blue.mp3",
                        Path_game_bairendezhou.music_bairendezhou + "win_red.mp3",
                        Path_game_bairendezhou.music_bairendezhou + "xiazhu_end.mp3",
                        Path_game_bairendezhou.music_bairendezhou + "xiazhu_start.mp3",
                    ]);
                }
            };
            //游戏界面
            BairendezhouPageDef.PAGE_BAIRENDEZHOU = "1";
            //地图UI
            BairendezhouPageDef.PAGE_BAIRENDEZHOU_MAP = "2";
            //开始下注界面
            BairendezhouPageDef.PAGE_BAIRENDEZHOU_BEGIN = "3";
            //规则界面
            BairendezhouPageDef.PAGE_BAIRENDEZHOU_RULE = "101";
            //战玩家列表界面
            BairendezhouPageDef.PAGE_BAIRENDEZHOU_PLAYER_LIST = "8";
            //停止下注界面
            BairendezhouPageDef.PAGE_BAIRENDEZHOU_END = "9";
            //走势界面
            BairendezhouPageDef.PAGE_BAIRENDEZHOU_ZOUSHI = "11";
            //结果
            BairendezhouPageDef.PAGE_BAIRENDEZHOU_RESULT = "12";
            return BairendezhouPageDef;
        }(game.gui.page.PageDef));
        page.BairendezhouPageDef = BairendezhouPageDef;
    })(page = gamebairendezhou.page || (gamebairendezhou.page = {}));
})(gamebairendezhou || (gamebairendezhou = {}));
//# sourceMappingURL=BairendezhouPageDef.js.map