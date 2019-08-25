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
var gamebenchibaoma;
(function (gamebenchibaoma) {
    var page;
    (function (page) {
        var BenchibaomaPageDef = /** @class */ (function (_super) {
            __extends(BenchibaomaPageDef, _super);
            function BenchibaomaPageDef() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BenchibaomaPageDef.myinit = function (str) {
                _super.myinit.call(this, str);
                BenchibaomaClip.init();
                if (WebConfig.baseplatform == PageDef.BASE_PLATFORM_TYPE_NQP) {
                    PageDef._pageClassMap[BenchibaomaPageDef.PAGE_BCBM] = page.BcbmPage;
                }
                else {
                    PageDef._pageClassMap[BenchibaomaPageDef.PAGE_BCBM] = page.BcbmPageOld;
                }
                PageDef._pageClassMap[BenchibaomaPageDef.PAGE_BCBM_MAP] = page.BcbmMapPage;
                PageDef._pageClassMap[BenchibaomaPageDef.PAGE_BCBM_BEGIN] = page.BcbmBeginPage;
                PageDef._pageClassMap[BenchibaomaPageDef.PAGE_BCBM_TONGSHA] = page.BcbmTongShaPage;
                PageDef._pageClassMap[BenchibaomaPageDef.PAGE_BCBM_TONGPEI] = page.BcbmTongPeiPage;
                PageDef._pageClassMap[BenchibaomaPageDef.PAGE_BCBM_RULE] = page.BcbmRulePage;
                PageDef._pageClassMap[BenchibaomaPageDef.PAGE_BCBM_PLAYER_LIST] = page.BcbmPlayerListPage;
                PageDef._pageClassMap[BenchibaomaPageDef.PAGE_BCBM_END] = page.BcbmEndPage;
                this["__needLoadAsset"] = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    Path_game_benchibaoma.atlas_game_ui + "benchibaoma.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "tuichu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/suiji.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/kaipai.atlas",
                    Path.custom_atlas_scene + 'chip.atlas',
                    Path.map + 'pz_benchibaoma.png',
                    Path.map_far + 'bg_benchibaoma.jpg'
                ];
                if (WebConfig.needMusicPreload) {
                    this["__needLoadAsset"] = this["__needLoadAsset"].concat([
                        Path_game_benchibaoma.music_benchibaoma + "BGM_1.mp3",
                        Path_game_benchibaoma.music_benchibaoma + "call_start.mp3",
                        Path_game_benchibaoma.music_benchibaoma + "car_bgm.mp3",
                        Path_game_benchibaoma.music_benchibaoma + "dingding_end.mp3",
                        Path_game_benchibaoma.music_benchibaoma + "paoche.mp3",
                        Path_game_benchibaoma.music_benchibaoma + "xiazhu_end.mp3",
                        Path_game_benchibaoma.music_benchibaoma + "xiazhu_start.mp3",
                        Path_game_benchibaoma.music_benchibaoma + "zhuandong.mp3",
                        Path_game_benchibaoma.music_benchibaoma + "chouma.mp3",
                        Path_game_benchibaoma.music_benchibaoma + "dingding_start.mp3",
                        Path_game_benchibaoma.music_benchibaoma + "piaoqian.mp3",
                    ]);
                }
            };
            //奔驰宝马界面
            BenchibaomaPageDef.PAGE_BCBM = "1";
            //奔驰宝马地图UI
            BenchibaomaPageDef.PAGE_BCBM_MAP = "2";
            //奔驰宝马开始下注界面
            BenchibaomaPageDef.PAGE_BCBM_BEGIN = "3";
            //奔驰宝马游戏通杀界面
            BenchibaomaPageDef.PAGE_BCBM_TONGSHA = "4";
            //奔驰宝马游戏通赔界面
            BenchibaomaPageDef.PAGE_BCBM_TONGPEI = "5";
            //奔驰宝马游戏规则界面
            BenchibaomaPageDef.PAGE_BCBM_RULE = "101";
            //奔驰宝马玩家列表界面
            BenchibaomaPageDef.PAGE_BCBM_PLAYER_LIST = "10";
            //奔驰宝马停止下注界面
            BenchibaomaPageDef.PAGE_BCBM_END = "11";
            return BenchibaomaPageDef;
        }(game.gui.page.PageDef));
        page.BenchibaomaPageDef = BenchibaomaPageDef;
    })(page = gamebenchibaoma.page || (gamebenchibaoma.page = {}));
})(gamebenchibaoma || (gamebenchibaoma = {}));
//# sourceMappingURL=BenchibaomaPageDef.js.map