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
* 跑得快
*/
var gamepaodekuai;
(function (gamepaodekuai) {
    var page;
    (function (page) {
        var PaodekuaiPageDef = /** @class */ (function (_super) {
            __extends(PaodekuaiPageDef, _super);
            function PaodekuaiPageDef() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PaodekuaiPageDef.myinit = function (str) {
                _super.myinit.call(this, str);
                PaodekuaiClip.init();
                PageDef._pageClassMap[PaodekuaiPageDef.PAGE_PDK] = page.PaodekuaiPage;
                PageDef._pageClassMap[PaodekuaiPageDef.PAGE_PDK_MAP] = page.PaodekuaiMapPage;
                PageDef._pageClassMap[PaodekuaiPageDef.PAGE_PDK_RULE] = page.PaodekuaiRulePage;
                PageDef._pageClassMap[PaodekuaiPageDef.PAGE_PDK_CREATE_CARDROOM] = page.PaodekuaiCreadRoomPage;
                PageDef._pageClassMap[PaodekuaiPageDef.PAGE_PDK_JOIN_CARDROOM] = page.PaodekuaiJoinRoomPage;
                PageDef._pageClassMap[PaodekuaiPageDef.PAGE_PDK_CARDROOM_SETTLE] = page.PaodekuaiRoomSettlePage;
                this["__needLoadAsset"] = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    Path_game_paodekuai.atlas_game_ui + "paodekuai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                    Path_game_paodekuai.atlas_game_ui + "paodekuai/effect/quanguan.atlas",
                    Path_game_paodekuai.atlas_game_ui + "paodekuai/effect/feiji.atlas",
                    Path_game_paodekuai.atlas_game_ui + "paodekuai/effect/shunzi.atlas",
                    Path_game_paodekuai.atlas_game_ui + "paodekuai/effect/boom.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "jiaru.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
                    Path.custom_atlas_scene + 'card.atlas',
                    Path.map + 'pz_paodekuai.png',
                    Path.map_far + 'bg_paodekuai.jpg'
                ];
                if (WebConfig.needMusicPreload) {
                    this["__needLoadAsset"] = this["__needLoadAsset"].concat([
                        Path_game_paodekuai.music_paodekuai + "baozha.mp3",
                        Path_game_paodekuai.music_paodekuai + "chupai.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_1_2.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_1_3.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_1_4.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_1_5.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_1_6.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_1_7.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_1_8.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_1_9.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_1_10.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_1_11.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_1_12.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_1_13.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_1_14.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_2_2.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_2_3.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_2_4.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_2_5.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_2_6.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_2_7.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_2_8.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_2_9.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_2_10.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_2_11.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_2_12.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_2_13.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_2_14.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_3.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_4.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_5.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_6.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_7.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_8.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_pass1.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_pass2.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_pass3.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_pass4.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_yizhang.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_buqiang.mp3",
                        Path_game_paodekuai.music_paodekuai + "nan_woqiang.mp3",
                        Path_game_paodekuai.music_paodekuai + "pdk_BGM.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_1_2.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_1_3.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_1_4.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_1_5.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_1_6.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_1_7.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_1_8.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_1_9.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_1_10.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_1_11.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_1_12.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_1_13.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_1_14.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_2_2.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_2_3.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_2_4.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_2_5.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_2_6.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_2_7.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_2_8.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_2_9.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_2_10.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_2_11.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_2_12.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_2_13.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_2_14.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_3.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_4.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_5.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_6.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_7.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_8.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_pass1.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_pass2.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_pass3.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_pass4.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_yizhang.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_buqiang.mp3",
                        Path_game_paodekuai.music_paodekuai + "nv_woqiang.mp3",
                    ]);
                }
            };
            //界面
            PaodekuaiPageDef.PAGE_PDK = "1"; //HUD界面
            PaodekuaiPageDef.PAGE_PDK_MAP = "2"; //地图界面
            PaodekuaiPageDef.PAGE_PDK_RULE = "101"; //规则界面
            PaodekuaiPageDef.PAGE_PDK_CREATE_CARDROOM = "8"; // 创建房间
            PaodekuaiPageDef.PAGE_PDK_CARDROOM_SETTLE = "10"; // 房卡结算页
            PaodekuaiPageDef.PAGE_PDK_JOIN_CARDROOM = "100"; // 加入房间
            return PaodekuaiPageDef;
        }(game.gui.page.PageDef));
        page.PaodekuaiPageDef = PaodekuaiPageDef;
    })(page = gamepaodekuai.page || (gamepaodekuai.page = {}));
})(gamepaodekuai || (gamepaodekuai = {}));
//# sourceMappingURL=PaodekuaiPageDef.js.map