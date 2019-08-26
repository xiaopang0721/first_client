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
* 十三水
*/
var gameshisanshui;
(function (gameshisanshui) {
    var page;
    (function (page) {
        var ShisanshuiPageDef = /** @class */ (function (_super) {
            __extends(ShisanshuiPageDef, _super);
            function ShisanshuiPageDef() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ShisanshuiPageDef.myinit = function (str) {
                _super.myinit.call(this, str);
                ShisanshuiClip.init();
                PageDef._pageClassMap[ShisanshuiPageDef.PAGE_SSS] = page.ShisanshuiPage;
                PageDef._pageClassMap[ShisanshuiPageDef.PAGE_SSS_MAP] = page.ShisanshuiMapPage;
                PageDef._pageClassMap[ShisanshuiPageDef.PAGE_SSS_RULE] = page.ShisanshuiRulePage;
                PageDef._pageClassMap[ShisanshuiPageDef.PAGE_SSS_PLAYING] = page.ShisanshuiPlayingPage;
                PageDef._pageClassMap[ShisanshuiPageDef.PAGE_SSS_QUANLEIDA] = page.ShisanshuiQuanLeiDa;
                PageDef._pageClassMap[ShisanshuiPageDef.PAGE_SSS_SPECIAL] = page.ShisanshuiSpecial;
                PageDef._pageClassMap[ShisanshuiPageDef.PAGE_SSS_CREATE_CARDROOM] = page.ShisanshuiCreadRoomPage;
                PageDef._pageClassMap[ShisanshuiPageDef.PAGE_SSS_JOIN_CARDROOM] = page.ShisanshuiJoinRoomPage;
                PageDef._pageClassMap[ShisanshuiPageDef.PAGE_SSS_CARDROOM_SETTLE] = page.ShisanshuiRoomSettlePage;
                this["__needLoadAsset"] = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    Path_game_shisanshui.atlas_game_ui + "shisanshui.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                    Path_game_shisanshui.atlas_game_ui + "shisanshui/effect/paixing.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "jiaru.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
                    Path.custom_atlas_scene + 'card.atlas',
                    Path.map + 'pz_shisanshui.png',
                    Path.map_far + 'bg_shisanshui.jpg'
                ];
                if (WebConfig.needMusicPreload) {
                    this["__needLoadAsset"] = this["__needLoadAsset"].concat([
                        Path_game_shisanshui.music_shisanshui + "13s_bgm.mp3",
                        Path_game_shisanshui.music_shisanshui + "all_nan.mp3",
                        Path_game_shisanshui.music_shisanshui + "all_nv.mp3",
                        Path_game_shisanshui.music_shisanshui + "daqiang.mp3",
                        Path_game_shisanshui.music_shisanshui + "daqiang_nan.mp3",
                        Path_game_shisanshui.music_shisanshui + "daqiang_nv.mp3",
                        Path_game_shisanshui.music_shisanshui + "piaoqian.mp3",
                        Path_game_shisanshui.music_shisanshui + "special_poker_type.mp3",
                        Path_game_shisanshui.music_shisanshui + "start_bipai.mp3",
                        Path_game_shisanshui.music_shisanshui + "start_chupai.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_1_nan.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_1_nv.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_2_nan.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_2_nv.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_3_nan.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_3_nv.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_4_nan.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_4_nv.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_5_nan.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_5_nv.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_6_nan.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_6_nv.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_7_nan.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_7_nv.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_8_nan.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_8_nv.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_9_nan.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_9_nv.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_10_nan.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_10_nv.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_11_nan.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_11_nv.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_12_nan.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_12_nv.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_13_nan.mp3",
                        Path_game_shisanshui.music_shisanshui + "tesu_13_nv.mp3",
                    ]);
                }
            };
            //界面
            ShisanshuiPageDef.PAGE_SSS = "1"; //HUD界面
            ShisanshuiPageDef.PAGE_SSS_MAP = "2"; //地图界面
            ShisanshuiPageDef.PAGE_SSS_RULE = "101"; //规则界面
            ShisanshuiPageDef.PAGE_SSS_PLAYING = "8"; //拼牌界面
            ShisanshuiPageDef.PAGE_SSS_QUANLEIDA = "9"; //全垒打
            ShisanshuiPageDef.PAGE_SSS_SPECIAL = "10"; //特殊牌界面
            ShisanshuiPageDef.PAGE_SSS_CREATE_CARDROOM = "11"; // 创建房间
            ShisanshuiPageDef.PAGE_SSS_CARDROOM_SETTLE = "13"; // 房卡结算页
            ShisanshuiPageDef.PAGE_SSS_JOIN_CARDROOM = "100"; // 加入房间
            return ShisanshuiPageDef;
        }(game.gui.page.PageDef));
        page.ShisanshuiPageDef = ShisanshuiPageDef;
    })(page = gameshisanshui.page || (gameshisanshui.page = {}));
})(gameshisanshui || (gameshisanshui = {}));
//# sourceMappingURL=ShisanshuiPageDef.js.map