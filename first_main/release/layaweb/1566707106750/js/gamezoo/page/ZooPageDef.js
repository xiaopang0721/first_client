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
var gamezoo;
(function (gamezoo) {
    var page;
    (function (page) {
        var ZooPageDef = /** @class */ (function (_super) {
            __extends(ZooPageDef, _super);
            function ZooPageDef() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ZooPageDef.myinit = function (str) {
                _super.myinit.call(this, str);
                ZooClip.init();
                PageDef._pageClassMap[ZooPageDef.PAGE_ZOO] = page.ZooPage;
                PageDef._pageClassMap[ZooPageDef.PAGE_ZOO_MAP] = page.ZooMapPage;
                PageDef._pageClassMap[ZooPageDef.PAGE_ZOO_BEGIN] = page.ZooBeginPage;
                PageDef._pageClassMap[ZooPageDef.PAGE_ZOO_TONGSHA] = page.ZooTongShaPage;
                PageDef._pageClassMap[ZooPageDef.PAGE_ZOO_TONGPEI] = page.ZooTongPeiPage;
                PageDef._pageClassMap[ZooPageDef.PAGE_ZOO_RULE] = page.ZooRulePage;
                PageDef._pageClassMap[ZooPageDef.PAGE_ZOO_PLAYER_LIST] = page.ZooPlayerListPage;
                PageDef._pageClassMap[ZooPageDef.PAGE_ZOO_END] = page.ZooEndPage;
                this["__needLoadAsset"] = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    Path_game_zoo.atlas_game_ui + "feiqinzoushou.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/suiji.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/kaipai.atlas",
                    Path.custom_atlas_scene + 'chip.atlas',
                    Path.map + 'pz_zoo.png',
                    Path.map_far + 'bg_zoo.jpg'
                ];
                if (WebConfig.needMusicPreload) {
                    this["__needLoadAsset"] = this["__needLoadAsset"].concat([
                        Path_game_zoo.music_zoo + "animal_1.mp3",
                        Path_game_zoo.music_zoo + "animal_2.mp3",
                        Path_game_zoo.music_zoo + "animal_5.mp3",
                        Path_game_zoo.music_zoo + "animal_6.mp3",
                        Path_game_zoo.music_zoo + "animal_7.mp3",
                        Path_game_zoo.music_zoo + "animal_8.mp3",
                        Path_game_zoo.music_zoo + "animal_10.mp3",
                        Path_game_zoo.music_zoo + "animal_11.mp3",
                        Path_game_zoo.music_zoo + "animal_99.mp3",
                        Path_game_zoo.music_zoo + "animal_100.mp3",
                        Path_game_zoo.music_zoo + "call_start.mp3",
                        Path_game_zoo.music_zoo + "chouma.mp3",
                        Path_game_zoo.music_zoo + "chouma_fly.mp3",
                        Path_game_zoo.music_zoo + "dingding_end.mp3",
                        Path_game_zoo.music_zoo + "xiazhu_end.mp3",
                        Path_game_zoo.music_zoo + "xiazhu_start.mp3",
                    ]);
                }
            };
            //飞禽走兽界面
            ZooPageDef.PAGE_ZOO = "1";
            //飞禽走兽地图UI
            ZooPageDef.PAGE_ZOO_MAP = "2";
            //飞禽走兽开始下注界面
            ZooPageDef.PAGE_ZOO_BEGIN = "3";
            //飞禽走兽游戏通杀界面
            ZooPageDef.PAGE_ZOO_TONGSHA = "4";
            //飞禽走兽游戏通赔界面
            ZooPageDef.PAGE_ZOO_TONGPEI = "5";
            //飞禽走兽游戏规则界面
            ZooPageDef.PAGE_ZOO_RULE = "101";
            //飞禽走兽玩家列表界面
            ZooPageDef.PAGE_ZOO_PLAYER_LIST = "10";
            //飞禽走兽停止下注界面
            ZooPageDef.PAGE_ZOO_END = "11";
            return ZooPageDef;
        }(game.gui.page.PageDef));
        page.ZooPageDef = ZooPageDef;
    })(page = gamezoo.page || (gamezoo.page = {}));
})(gamezoo || (gamezoo = {}));
//# sourceMappingURL=ZooPageDef.js.map