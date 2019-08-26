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
var gamebrniuniu;
(function (gamebrniuniu) {
    var page;
    (function (page) {
        var BrniuniuPageDef = /** @class */ (function (_super) {
            __extends(BrniuniuPageDef, _super);
            function BrniuniuPageDef() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BrniuniuPageDef.myinit = function (str) {
                _super.myinit.call(this, str);
                BrniuniuClip.init();
                if (WebConfig.baseplatform == PageDef.BASE_PLATFORM_TYPE_NQP) {
                    PageDef._pageClassMap[BrniuniuPageDef.PAGE_BRNIUNIU] = page.BrNiuNiuPage;
                }
                else {
                    PageDef._pageClassMap[BrniuniuPageDef.PAGE_BRNIUNIU] = page.BrNiuNiuPageOld;
                }
                PageDef._pageClassMap[BrniuniuPageDef.PAGE_BRNIUNIU_MAP] = page.BrNiuNiuMapPage;
                PageDef._pageClassMap[BrniuniuPageDef.PAGE_BRNIUNIU_BEGIN] = page.BrNiuNiuBeginPage;
                PageDef._pageClassMap[BrniuniuPageDef.PAGE_NIUNIU_TONGSHA] = page.BrNiuNiuTongShaPage;
                PageDef._pageClassMap[BrniuniuPageDef.PAGE_NIUNIU_TONGPEI] = page.BrNiuNiuTongPeiPage;
                PageDef._pageClassMap[BrniuniuPageDef.PAGE_BRNIUNIU_RULE] = page.BrNiuNiuRulePage;
                PageDef._pageClassMap[BrniuniuPageDef.PAGE_BRNIUNIU_PLAYER_LIST] = page.BrNiuNiuPlayerListPage;
                PageDef._pageClassMap[BrniuniuPageDef.PAGE_BRNIUNIU_END] = page.BrNiuNiuEndPage;
                PageDef._pageClassMap[BrniuniuPageDef.PAGE_BRNIUNIU_SZ_LIST] = page.BrNiuNiuSzListPage;
                PageDef._pageClassMap[BrniuniuPageDef.PAGE_BRNIUNIU_SETTLE] = page.BrNiuNiuSettlePage;
                this["__needLoadAsset"] = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    Path_game_brniuniu.atlas_game_ui + "brniuniu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "tuichu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/suiji.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/kaipai.atlas",
                    Path.custom_atlas_scene + 'card.atlas',
                    Path.custom_atlas_scene + 'chip.atlas',
                    Path.map + 'pz_brniuniu.png',
                    Path.map_far + 'bg_brniuniu.jpg'
                ];
                if (WebConfig.needMusicPreload) {
                    this["__needLoadAsset"] = this["__needLoadAsset"].concat([
                        Path_game_brniuniu.music_brniuniu + "nn_bgm.mp3",
                        Path_game_brniuniu.music_brniuniu + "chouma.mp3",
                        Path_game_brniuniu.music_brniuniu + "dingding_end.mp3",
                        Path_game_brniuniu.music_brniuniu + "dingding_start.mp3",
                        Path_game_brniuniu.music_brniuniu + "niu0_nv.mp3",
                        Path_game_brniuniu.music_brniuniu + "niu1_nv.mp3",
                        Path_game_brniuniu.music_brniuniu + "niu2_nv.mp3",
                        Path_game_brniuniu.music_brniuniu + "niu3_nv.mp3",
                        Path_game_brniuniu.music_brniuniu + "niu4_nv.mp3",
                        Path_game_brniuniu.music_brniuniu + "niu5_nv.mp3",
                        Path_game_brniuniu.music_brniuniu + "niu6_nv.mp3",
                        Path_game_brniuniu.music_brniuniu + "niu7_nv.mp3",
                        Path_game_brniuniu.music_brniuniu + "niu8_nv.mp3",
                        Path_game_brniuniu.music_brniuniu + "niu9_nv.mp3",
                        Path_game_brniuniu.music_brniuniu + "niu10_nv.mp3",
                        Path_game_brniuniu.music_brniuniu + "niu11_nv.mp3",
                        Path_game_brniuniu.music_brniuniu + "niu12_nv.mp3",
                        Path_game_brniuniu.music_brniuniu + "niu13_nv.mp3",
                        Path_game_brniuniu.music_brniuniu + "niu14_nv.mp3",
                        Path_game_brniuniu.music_brniuniu + "piaoqian.mp3",
                        Path_game_brniuniu.music_brniuniu + "shouqian.mp3",
                        Path_game_brniuniu.music_brniuniu + "xiazhu_end.mp3",
                        Path_game_brniuniu.music_brniuniu + "xiazhu_start.mp3",
                        Path_game_brniuniu.music_brniuniu + "zjtongchi.mp3",
                    ]);
                }
            };
            //百人牛牛界面
            BrniuniuPageDef.PAGE_BRNIUNIU = "1";
            //百人牛牛地图UI
            BrniuniuPageDef.PAGE_BRNIUNIU_MAP = "2";
            //百人牛牛开始下注界面
            BrniuniuPageDef.PAGE_BRNIUNIU_BEGIN = "3";
            //牛牛游戏通杀界面
            BrniuniuPageDef.PAGE_NIUNIU_TONGSHA = "4";
            //牛牛游戏通赔界面
            BrniuniuPageDef.PAGE_NIUNIU_TONGPEI = "5";
            //百人牛牛游戏规则界面
            BrniuniuPageDef.PAGE_BRNIUNIU_RULE = "101";
            //百人牛牛游戏匹配界面
            BrniuniuPageDef.PAGE_BRNIUNIU_PIPEI = "7";
            //百人牛牛玩家列表界面
            BrniuniuPageDef.PAGE_BRNIUNIU_PLAYER_LIST = "11";
            //百人牛牛停止下注界面
            BrniuniuPageDef.PAGE_BRNIUNIU_END = "12";
            //百人牛牛上庄列表界面
            BrniuniuPageDef.PAGE_BRNIUNIU_SZ_LIST = "13";
            //百人牛牛结算界面
            BrniuniuPageDef.PAGE_BRNIUNIU_SETTLE = "14";
            return BrniuniuPageDef;
        }(game.gui.page.PageDef));
        page.BrniuniuPageDef = BrniuniuPageDef;
    })(page = gamebrniuniu.page || (gamebrniuniu.page = {}));
})(gamebrniuniu || (gamebrniuniu = {}));
//# sourceMappingURL=BrniuniuPageDef.js.map