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
var gamelonghu;
(function (gamelonghu) {
    var page;
    (function (page) {
        var LonghuPageDef = /** @class */ (function (_super) {
            __extends(LonghuPageDef, _super);
            function LonghuPageDef() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LonghuPageDef.myinit = function (str) {
                _super.myinit.call(this, str);
                LonghuClip.init();
                if (WebConfig.baseplatform == PageDef.BASE_PLATFORM_TYPE_NQP) {
                    PageDef._pageClassMap[LonghuPageDef.PAGE_LONGHU] = page.LonghuPage;
                }
                else {
                    PageDef._pageClassMap[LonghuPageDef.PAGE_LONGHU] = page.LonghuPageOld;
                }
                PageDef._pageClassMap[LonghuPageDef.PAGE_LONGHU_MAP] = page.LonghuMapPage;
                PageDef._pageClassMap[LonghuPageDef.PAGE_LONGHU_BEGIN] = page.LonghuBeginPage;
                PageDef._pageClassMap[LonghuPageDef.PAGE_LONGHU_RULE] = page.LonghuRulePage;
                PageDef._pageClassMap[LonghuPageDef.PAGE_LONGHU_VS] = page.LonghuVSPage;
                PageDef._pageClassMap[LonghuPageDef.PAGE_LONGHU_PLAYER_LIST] = page.LonghuPlayerListPage;
                PageDef._pageClassMap[LonghuPageDef.PAGE_LONGHU_END] = page.LonghuEndPage;
                PageDef._pageClassMap[LonghuPageDef.PAGE_LONGHU_SZ_LIST] = page.LonghuSzListPage;
                PageDef._pageClassMap[LonghuPageDef.PAGE_LONGHU_ROAD] = page.LonghuRoadPage;
                this["__needLoadAsset"] = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    Path_game_longhu.atlas_game_ui + "longhu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "tuichu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    Path_game_longhu.atlas_game_ui + "longhu/effect/bipai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/suiji.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/kaipai.atlas",
                    Path.custom_atlas_scene + 'card.atlas',
                    Path.custom_atlas_scene + 'chip.atlas',
                    PathGameTongyong.ui_tongyong_sk + "HeGuan.sk",
                    PathGameTongyong.ui_tongyong_sk + "HeGuan.png",
                    Path.map + 'pz_longhu.png',
                    Path.map_far + 'bg_longhu.jpg'
                ];
                if (WebConfig.needMusicPreload) {
                    this["__needLoadAsset"] = this["__needLoadAsset"].concat([
                        Path_game_longhu.music_longhu + "lh_bgm.mp3",
                        Path_game_longhu.music_longhu + "chouma.mp3",
                        Path_game_longhu.music_longhu + "dian1.mp3",
                        Path_game_longhu.music_longhu + "dian2.mp3",
                        Path_game_longhu.music_longhu + "dian3.mp3",
                        Path_game_longhu.music_longhu + "dian4.mp3",
                        Path_game_longhu.music_longhu + "dian5.mp3",
                        Path_game_longhu.music_longhu + "dian6.mp3",
                        Path_game_longhu.music_longhu + "dian7.mp3",
                        Path_game_longhu.music_longhu + "dian8.mp3",
                        Path_game_longhu.music_longhu + "dian9.mp3",
                        Path_game_longhu.music_longhu + "dian10.mp3",
                        Path_game_longhu.music_longhu + "dian11.mp3",
                        Path_game_longhu.music_longhu + "dian12.mp3",
                        Path_game_longhu.music_longhu + "dian13.mp3",
                        Path_game_longhu.music_longhu + "dingding_end.mp3",
                        Path_game_longhu.music_longhu + "dingding_start.mp3",
                        Path_game_longhu.music_longhu + "he.mp3",
                        Path_game_longhu.music_longhu + "hu_win.mp3",
                        Path_game_longhu.music_longhu + "long_win.mp3",
                        Path_game_longhu.music_longhu + "paoxiao.mp3",
                        Path_game_longhu.music_longhu + "piaoqian.mp3",
                        Path_game_longhu.music_longhu + "shouqian.mp3",
                        Path_game_longhu.music_longhu + "xiazhu_end.mp3",
                        Path_game_longhu.music_longhu + "xiazhu_start.mp3",
                    ]);
                }
            };
            //龙虎斗界面
            LonghuPageDef.PAGE_LONGHU = "1";
            //龙虎斗地图UI
            LonghuPageDef.PAGE_LONGHU_MAP = "2";
            //龙虎斗开始下注界面
            LonghuPageDef.PAGE_LONGHU_BEGIN = "3";
            //龙虎斗游戏规则界面
            LonghuPageDef.PAGE_LONGHU_RULE = "101";
            //龙虎斗游戏VS界面
            LonghuPageDef.PAGE_LONGHU_VS = "6";
            //龙虎斗玩家列表界面
            LonghuPageDef.PAGE_LONGHU_PLAYER_LIST = "10";
            //龙虎斗停止下注界面
            LonghuPageDef.PAGE_LONGHU_END = "11";
            //龙虎斗上庄列表界面
            LonghuPageDef.PAGE_LONGHU_SZ_LIST = "12";
            //龙虎斗大路界面
            LonghuPageDef.PAGE_LONGHU_ROAD = "13";
            return LonghuPageDef;
        }(game.gui.page.PageDef));
        page.LonghuPageDef = LonghuPageDef;
    })(page = gamelonghu.page || (gamelonghu.page = {}));
})(gamelonghu || (gamelonghu = {}));
//# sourceMappingURL=LonghuPageDef.js.map