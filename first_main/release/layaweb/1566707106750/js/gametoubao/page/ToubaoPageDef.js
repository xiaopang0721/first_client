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
var gametoubao;
(function (gametoubao) {
    var page;
    (function (page) {
        var ToubaoPageDef = /** @class */ (function (_super) {
            __extends(ToubaoPageDef, _super);
            function ToubaoPageDef() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ToubaoPageDef.myinit = function (str) {
                _super.myinit.call(this, str);
                ToubaoClip.init();
                if (WebConfig.baseplatform == PageDef.BASE_PLATFORM_TYPE_NQP) {
                    PageDef._pageClassMap[ToubaoPageDef.PAGE_TOUBAO] = page.ToubaoPage;
                }
                else {
                    PageDef._pageClassMap[ToubaoPageDef.PAGE_TOUBAO] = page.ToubaoPageOld;
                }
                PageDef._pageClassMap[ToubaoPageDef.PAGE_TOUBAO_MAP] = page.ToubaoMapPage;
                PageDef._pageClassMap[ToubaoPageDef.PAGE_TOUBAO_BEGIN] = page.ToubaoBeginPage;
                PageDef._pageClassMap[ToubaoPageDef.PAGE_TOUBAO_RULE] = page.ToubaoRulePage;
                PageDef._pageClassMap[ToubaoPageDef.PAGE_TOUBAO_PLAYER_LIST] = page.ToubaoPlayerListPage;
                PageDef._pageClassMap[ToubaoPageDef.PAGE_TOUBAO_END] = page.ToubaoEndPage;
                PageDef._pageClassMap[ToubaoPageDef.PAGE_TOUBAO_ROAD] = page.ToubaoRoadPage;
                this["__needLoadAsset"] = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    Path_game_toubao.atlas_game_ui + "toubao.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "tuichu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/shaizi.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/hulu1.atlas",
                    Path.custom_atlas_scene + 'chip.atlas',
                    Path.map + 'pz_toubao.png',
                    Path.map_far + 'bg_toubao.jpg'
                ];
                if (WebConfig.needMusicPreload) {
                    this["__needLoadAsset"] = this["__needLoadAsset"].concat([
                        Path_game_toubao.music_toubao + "toubao_bgm.mp3",
                        Path_game_toubao.music_toubao + "chouma.mp3",
                        Path_game_toubao.music_toubao + "da.mp3",
                        Path_game_toubao.music_toubao + "dan1.mp3",
                        Path_game_toubao.music_toubao + "dan2.mp3",
                        Path_game_toubao.music_toubao + "dan3.mp3",
                        Path_game_toubao.music_toubao + "dan4.mp3",
                        Path_game_toubao.music_toubao + "dan5.mp3",
                        Path_game_toubao.music_toubao + "dan6.mp3",
                        Path_game_toubao.music_toubao + "dian4.mp3",
                        Path_game_toubao.music_toubao + "dian5.mp3",
                        Path_game_toubao.music_toubao + "dian6.mp3",
                        Path_game_toubao.music_toubao + "dian7.mp3",
                        Path_game_toubao.music_toubao + "dian8.mp3",
                        Path_game_toubao.music_toubao + "dian9.mp3",
                        Path_game_toubao.music_toubao + "dian10.mp3",
                        Path_game_toubao.music_toubao + "dian11.mp3",
                        Path_game_toubao.music_toubao + "dian12.mp3",
                        Path_game_toubao.music_toubao + "dian13.mp3",
                        Path_game_toubao.music_toubao + "dian14.mp3",
                        Path_game_toubao.music_toubao + "dian15.mp3",
                        Path_game_toubao.music_toubao + "dian16.mp3",
                        Path_game_toubao.music_toubao + "dian17.mp3",
                        Path_game_toubao.music_toubao + "dingding_end.mp3",
                        Path_game_toubao.music_toubao + "dingding_start.mp3",
                        Path_game_toubao.music_toubao + "piaoqian.mp3",
                        Path_game_toubao.music_toubao + "shouqian.mp3",
                        Path_game_toubao.music_toubao + "weitou.mp3",
                        Path_game_toubao.music_toubao + "chouma.mp3",
                        Path_game_toubao.music_toubao + "xiao.mp3",
                        Path_game_toubao.music_toubao + "xiazhu_end.mp3",
                        Path_game_toubao.music_toubao + "xiazhu_start.mp3",
                        Path_game_toubao.music_toubao + "yaotouzi.mp3",
                        Path_game_toubao.music_toubao + "zjtongchi.mp3",
                    ]);
                }
            };
            //骰宝界面
            ToubaoPageDef.PAGE_TOUBAO = "1";
            //骰宝地图UI
            ToubaoPageDef.PAGE_TOUBAO_MAP = "2";
            //骰宝开始下注界面
            ToubaoPageDef.PAGE_TOUBAO_BEGIN = "3";
            //骰宝游戏规则界面
            ToubaoPageDef.PAGE_TOUBAO_RULE = "101";
            //骰宝玩家列表界面
            ToubaoPageDef.PAGE_TOUBAO_PLAYER_LIST = "10";
            //骰宝停止下注界面
            ToubaoPageDef.PAGE_TOUBAO_END = "11";
            //骰宝走势图界面
            ToubaoPageDef.PAGE_TOUBAO_ROAD = "12";
            return ToubaoPageDef;
        }(game.gui.page.PageDef));
        page.ToubaoPageDef = ToubaoPageDef;
    })(page = gametoubao.page || (gametoubao.page = {}));
})(gametoubao || (gametoubao = {}));
//# sourceMappingURL=ToubaoPageDef.js.map