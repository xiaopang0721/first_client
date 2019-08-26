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
var gameshuiguoji;
(function (gameshuiguoji) {
    var page;
    (function (page) {
        var ShuiguojiPageDef = /** @class */ (function (_super) {
            __extends(ShuiguojiPageDef, _super);
            function ShuiguojiPageDef() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ShuiguojiPageDef.myinit = function (str) {
                _super.myinit.call(this, str);
                ShuiguojiClip.init();
                PageDef._pageClassMap[ShuiguojiPageDef.PAGE_SHUIGUOJI_MAP] = page.ShuiGuoJiMapPage;
                PageDef._pageClassMap[ShuiguojiPageDef.PAGE_SHUIGUOJI_RULE] = page.ShuiGuoJiRulePage;
                PageDef._pageClassMap[ShuiguojiPageDef.PAGE_SHUIGUOJI_TIP_EFFECT] = page.ShuiGuoJiTipEffectPage;
                PageDef._pageClassMap[ShuiguojiPageDef.PAGE_SHUIGUOJI_PRIZE] = page.ShuiGuoJiPrizePage;
                this["__needLoadAsset"] = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    Path_game_shuiguoji.atlas_game_ui + "shuiguoji.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/suiji.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/bigwin.atlas",
                    Path_game_shuiguoji.atlas_game_ui + "shuiguoji/effect/jinbi0.atlas",
                    Path_game_shuiguoji.atlas_game_ui + "shuiguoji/effect/jinbi1.atlas",
                    Path_game_shuiguoji.atlas_game_ui + "shuiguoji/effect/zhongjiang.atlas",
                    Path.custom_atlas_scene + 'chip.atlas',
                    Path.map + 'pz_shuiguoji.png',
                    Path.map_far + 'bg_shuiguoji.jpg'
                ];
                if (WebConfig.needMusicPreload) {
                    this["__needLoadAsset"] = this["__needLoadAsset"].concat([
                        Path_game_shuiguoji.music_shuiguoji + "sgj_BGM.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "Bidaxiao.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "Bidaxiao_lose.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "Bidaxiao_win.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "composite3.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "dingzhuang.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "Jackpot.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "Lucky.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "pressed_fruit_1.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "pressed_fruit_2.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "pressed_fruit_3.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "pressed_fruit_4.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "pressed_fruit_5.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "pressed_fruit_6.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "pressed_fruit_7.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "pressed_fruit_8.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "slot_begin_2.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "slot_begin1.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "slot_begin2.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "slot_begin3.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "slot_begin4.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "slot_begin5.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "slot_begin6.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "slot_begin7.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "slot_end.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "slot_fast.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "slot_hit1.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "slot_slowdown.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "slot_z_77.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "slot_z_apple.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "slot_z_bar.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "slot_z_bell.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "slot_z_big_slam.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "slot_z_big_three.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "slot_z_four.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "slot_z_mango.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "slot_z_orange.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "slot_z_star.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "slot_z_water.mp3",
                        Path_game_shuiguoji.music_shuiguoji + "Win.mp3",
                    ]);
                }
                this["__enterMapLv"] = Web_operation_fields.GAME_ROOM_CONFIG_SHUIGUOJI_1;
            };
            //水果机地图UI
            ShuiguojiPageDef.PAGE_SHUIGUOJI_MAP = "1";
            //水果机规则
            ShuiguojiPageDef.PAGE_SHUIGUOJI_RULE = "101";
            //水果机特效提示
            ShuiguojiPageDef.PAGE_SHUIGUOJI_TIP_EFFECT = "5";
            //水果机中奖金额
            ShuiguojiPageDef.PAGE_SHUIGUOJI_PRIZE = "6";
            return ShuiguojiPageDef;
        }(game.gui.page.PageDef));
        page.ShuiguojiPageDef = ShuiguojiPageDef;
    })(page = gameshuiguoji.page || (gameshuiguoji.page = {}));
})(gameshuiguoji || (gameshuiguoji = {}));
//# sourceMappingURL=ShuiguojiPageDef.js.map