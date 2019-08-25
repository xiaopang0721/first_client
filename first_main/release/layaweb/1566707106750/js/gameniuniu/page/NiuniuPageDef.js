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
var gameniuniu;
(function (gameniuniu) {
    var page;
    (function (page) {
        var NiuniuPageDef = /** @class */ (function (_super) {
            __extends(NiuniuPageDef, _super);
            function NiuniuPageDef() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            NiuniuPageDef.myinit = function (str) {
                _super.myinit.call(this, str);
                NiuniuClip.init();
                if (WebConfig.baseplatform == PageDef.BASE_PLATFORM_TYPE_NQP) {
                    PageDef._pageClassMap[NiuniuPageDef.PAGE_NIUNIU] = page.NiuNiuPage;
                }
                else {
                    PageDef._pageClassMap[NiuniuPageDef.PAGE_NIUNIU] = page.NiuNiuPageOld;
                }
                PageDef._pageClassMap[NiuniuPageDef.PAGE_NIUNIU_MAP] = page.NiuNiuMapPage;
                PageDef._pageClassMap[NiuniuPageDef.PAGE_NIUNIU_BEGIN] = page.NiuNiuBeginPage;
                PageDef._pageClassMap[NiuniuPageDef.PAGE_NIUNIU_WIN] = page.NiuNiuWinPage;
                PageDef._pageClassMap[NiuniuPageDef.PAGE_NIUNIU_LOSE] = page.NiuNiuLosePage;
                PageDef._pageClassMap[NiuniuPageDef.PAGE_NIUNIU_RULE] = page.NiuNiuRulePage;
                PageDef._pageClassMap[NiuniuPageDef.PAGE_NIUNIU_TONGSHA] = page.NiuNiuTongShaPage;
                PageDef._pageClassMap[NiuniuPageDef.PAGE_NIUNIU_TONGPEI] = page.NiuNiuTongPeiPage;
                PageDef._pageClassMap[NiuniuPageDef.PAGE_NIUNIU_CREATE_CARDROOM] = page.NiuNiuCreateCardRoom;
                PageDef._pageClassMap[NiuniuPageDef.PAGE_NIUNIU_JOIN_CARDROOM] = page.NiuNiuJoinCardRoom;
                PageDef._pageClassMap[NiuniuPageDef.PAGE_NIUNIU_CARDROOM_SETTLE] = page.NiuNiuSettlePage;
                this["__needLoadAsset"] = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    Path_game_niuniu.atlas_game_ui + "niuniu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/suiji.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "jiaru.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
                    Path.custom_atlas_scene + 'card.atlas',
                    Path.map + 'pz_niuniu.png',
                    Path.map_far + 'bg_niuniu.jpg',
                ];
                if (WebConfig.needMusicPreload) {
                    this["__needLoadAsset"] = this["__needLoadAsset"].concat([
                        Path_game_niuniu.music_niuniu + "nn_bgm.mp3",
                        Path_game_niuniu.music_niuniu + "dianjipai.mp3",
                        Path_game_niuniu.music_niuniu + "gaipai.mp3",
                        Path_game_niuniu.music_niuniu + "kaishi.mp3",
                        Path_game_niuniu.music_niuniu + "niu0_1.mp3",
                        Path_game_niuniu.music_niuniu + "niu0_2.mp3",
                        Path_game_niuniu.music_niuniu + "niu1_1.mp3",
                        Path_game_niuniu.music_niuniu + "niu1_2.mp3",
                        Path_game_niuniu.music_niuniu + "niu2_1.mp3",
                        Path_game_niuniu.music_niuniu + "niu2_2.mp3",
                        Path_game_niuniu.music_niuniu + "niu3_1.mp3",
                        Path_game_niuniu.music_niuniu + "niu3_2.mp3",
                        Path_game_niuniu.music_niuniu + "niu4_1.mp3",
                        Path_game_niuniu.music_niuniu + "niu4_2.mp3",
                        Path_game_niuniu.music_niuniu + "niu5_1.mp3",
                        Path_game_niuniu.music_niuniu + "niu5_2.mp3",
                        Path_game_niuniu.music_niuniu + "niu6_1.mp3",
                        Path_game_niuniu.music_niuniu + "niu6_2.mp3",
                        Path_game_niuniu.music_niuniu + "niu7_1.mp3",
                        Path_game_niuniu.music_niuniu + "niu7_2.mp3",
                        Path_game_niuniu.music_niuniu + "niu8_1.mp3",
                        Path_game_niuniu.music_niuniu + "niu8_2.mp3",
                        Path_game_niuniu.music_niuniu + "niu9_1.mp3",
                        Path_game_niuniu.music_niuniu + "niu9_2.mp3",
                        Path_game_niuniu.music_niuniu + "niu10_1.mp3",
                        Path_game_niuniu.music_niuniu + "niu10_2.mp3",
                        Path_game_niuniu.music_niuniu + "niu11_1.mp3",
                        Path_game_niuniu.music_niuniu + "niu11_2.mp3",
                        Path_game_niuniu.music_niuniu + "niu12_1.mp3",
                        Path_game_niuniu.music_niuniu + "niu12_2.mp3",
                        Path_game_niuniu.music_niuniu + "niu13_1.mp3",
                        Path_game_niuniu.music_niuniu + "niu13_2.mp3",
                        Path_game_niuniu.music_niuniu + "niu14_1.mp3",
                        Path_game_niuniu.music_niuniu + "niu14_2.mp3",
                        Path_game_niuniu.music_niuniu + "piaoqian.mp3",
                        Path_game_niuniu.music_niuniu + "pingpaiwancheng.mp3",
                        Path_game_niuniu.music_niuniu + "shengli.mp3",
                        Path_game_niuniu.music_niuniu + "shibai.mp3",
                        Path_game_niuniu.music_niuniu + "suidao.mp3",
                        Path_game_niuniu.music_niuniu + "suiji.mp3",
                        Path_game_niuniu.music_niuniu + "zjtongchi.mp3",
                    ]);
                }
            };
            //牛牛界面
            NiuniuPageDef.PAGE_NIUNIU = "1";
            //牛牛地图UI
            NiuniuPageDef.PAGE_NIUNIU_MAP = "2";
            //牛牛开始游戏动画界面
            NiuniuPageDef.PAGE_NIUNIU_BEGIN = "3";
            //牛牛胜利动画界面
            NiuniuPageDef.PAGE_NIUNIU_WIN = "4";
            //牛牛失败动画界面
            NiuniuPageDef.PAGE_NIUNIU_LOSE = "5";
            //牛牛游戏规则界面
            NiuniuPageDef.PAGE_NIUNIU_RULE = "101";
            //牛牛游戏通杀界面
            NiuniuPageDef.PAGE_NIUNIU_TONGSHA = "8";
            //牛牛游戏通赔界面
            NiuniuPageDef.PAGE_NIUNIU_TONGPEI = "9";
            //房卡系列
            NiuniuPageDef.PAGE_NIUNIU_CREATE_CARDROOM = "14"; // 创建房间
            NiuniuPageDef.PAGE_NIUNIU_CARDROOM_SETTLE = "16"; // 房卡结算页
            NiuniuPageDef.PAGE_NIUNIU_JOIN_CARDROOM = "100"; // 加入房间
            return NiuniuPageDef;
        }(game.gui.page.PageDef));
        page.NiuniuPageDef = NiuniuPageDef;
    })(page = gameniuniu.page || (gameniuniu.page = {}));
})(gameniuniu || (gameniuniu = {}));
//# sourceMappingURL=NiuniuPageDef.js.map