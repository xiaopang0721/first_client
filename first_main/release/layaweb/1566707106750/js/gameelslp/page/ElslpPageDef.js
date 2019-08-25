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
var gameelslp;
(function (gameelslp) {
    var page;
    (function (page) {
        var ElslpPageDef = /** @class */ (function (_super) {
            __extends(ElslpPageDef, _super);
            function ElslpPageDef() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ElslpPageDef.myinit = function (str) {
                _super.myinit.call(this, str);
                ElslpClip.init();
                PageDef._pageClassMap[ElslpPageDef.PAGE_ELSLP] = page.ElslpPage;
                PageDef._pageClassMap[ElslpPageDef.PAGE_ELSLP_MAP] = page.ElslpMapPage;
                PageDef._pageClassMap[ElslpPageDef.PAGE_ELSLP_BEGIN] = page.ElslpBeginPage;
                PageDef._pageClassMap[ElslpPageDef.PAGE_ELSLP_RULE] = page.ElslpRulePage;
                PageDef._pageClassMap[ElslpPageDef.PAGE_ELSLP_PLAYER_LIST] = page.ElslpPlayerListPage;
                PageDef._pageClassMap[ElslpPageDef.PAGE_ELSLP_END] = page.ElslpEndPage;
                PageDef._pageClassMap[ElslpPageDef.PAGE_ELSLP_DIAL] = page.ElslpDialPage;
                PageDef._pageClassMap[ElslpPageDef.PAGE_ELSLP_ROAD] = page.ElslpRoadPage;
                this["__needLoadAsset"] = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    Path_game_elslp.atlas_game_ui + "eluosizhuanpan.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "tuichu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/suiji.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/kaipai.atlas",
                    Path.custom_atlas_scene + 'chip.atlas',
                    Path_game_elslp.ui_elslp + "bg_1.png",
                    Path_game_elslp.ui_elslp + "guize_1.png",
                    Path_game_elslp.ui_elslp + "guize_2.png",
                    Path.map + 'pz_elslp.png',
                    Path.map_far + 'bg_elslp.jpg'
                ];
                if (WebConfig.needMusicPreload) {
                    this["__needLoadAsset"] = this["__needLoadAsset"].concat([
                    // Path_game_elslp.music_elslp + "BGM_1.mp3",
                    // Path_game_elslp.music_elslp + "call_start.mp3",
                    // Path_game_elslp.music_elslp + "car_bgm.mp3",
                    // Path_game_elslp.music_elslp + "dingding_end.mp3",
                    // Path_game_elslp.music_elslp + "paoche.mp3",
                    // Path_game_elslp.music_elslp + "xiazhu_end.mp3",
                    // Path_game_elslp.music_elslp + "xiazhu_start.mp3",
                    // Path_game_elslp.music_elslp + "zhuandong.mp3",
                    ]);
                }
            };
            //俄罗斯轮盘界面
            ElslpPageDef.PAGE_ELSLP = "1";
            //俄罗斯轮盘地图UI
            ElslpPageDef.PAGE_ELSLP_MAP = "2";
            //俄罗斯轮盘开始下注界面
            ElslpPageDef.PAGE_ELSLP_BEGIN = "3";
            //俄罗斯轮盘游戏规则界面
            ElslpPageDef.PAGE_ELSLP_RULE = "101";
            //俄罗斯轮盘玩家列表界面
            ElslpPageDef.PAGE_ELSLP_PLAYER_LIST = "10";
            //俄罗斯轮盘停止下注界面
            ElslpPageDef.PAGE_ELSLP_END = "11";
            //俄罗斯轮盘转盘
            ElslpPageDef.PAGE_ELSLP_DIAL = "13";
            //俄罗斯轮盘走势图
            ElslpPageDef.PAGE_ELSLP_ROAD = "14";
            return ElslpPageDef;
        }(game.gui.page.PageDef));
        page.ElslpPageDef = ElslpPageDef;
    })(page = gameelslp.page || (gameelslp.page = {}));
})(gameelslp || (gameelslp = {}));
//# sourceMappingURL=ElslpPageDef.js.map