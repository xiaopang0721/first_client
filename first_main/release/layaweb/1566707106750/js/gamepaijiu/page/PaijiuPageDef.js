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
* 牌九
*/
var gamepaijiu;
(function (gamepaijiu) {
    var page;
    (function (page) {
        var PaijiuPageDef = /** @class */ (function (_super) {
            __extends(PaijiuPageDef, _super);
            function PaijiuPageDef() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PaijiuPageDef.myinit = function (str) {
                _super.myinit.call(this, str);
                PaijiuClip.init();
                if (WebConfig.baseplatform == PageDef.BASE_PLATFORM_TYPE_NQP) {
                    PageDef._pageClassMap[PaijiuPageDef.PAGE_PAIJIU] = page.PaijiuPage;
                }
                else {
                    PageDef._pageClassMap[PaijiuPageDef.PAGE_PAIJIU] = page.PaijiuPageOld;
                }
                PageDef._pageClassMap[PaijiuPageDef.PAGE_PAIJIU_MAP] = page.PaijiuMapPage;
                PageDef._pageClassMap[PaijiuPageDef.PAGE_PAIJIU_RULE] = page.PaijiuRulePage;
                PageDef._pageClassMap[PaijiuPageDef.PAGE_PAIJIU_SETTLE] = page.PaijiuSettlePage;
                this["__needLoadAsset"] = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    Path_game_paijiu.atlas_game_ui + "paijiu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/shaizi.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/hulu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_2.atlas",
                    Path.custom_atlas_scene + 'gupai.atlas',
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    Path_game_paijiu.atlas_game_ui + "paijiu/gupai.atlas",
                    Path.map + 'pz_paijiu.png',
                    Path.map_far + 'bg_paijiu.jpg'
                ];
                if (WebConfig.needMusicPreload) {
                    this["__needLoadAsset"] = this["__needLoadAsset"].concat([
                        Path_game_paijiu.music_paijiu + "qzpj_bgm.mp3",
                        Path_game_paijiu.music_paijiu + "dingzhuang.mp3",
                        Path_game_paijiu.music_paijiu + "piaoqian.mp3",
                        Path_game_paijiu.music_paijiu + "qzpj_fapai.mp3",
                        Path_game_paijiu.music_paijiu + "qzpj_playcard.mp3",
                        Path_game_paijiu.music_paijiu + "suijizhuangjia.mp3",
                        Path_game_paijiu.music_paijiu + "yaotouzi.mp3",
                    ]);
                }
            };
            //21点界面
            PaijiuPageDef.PAGE_PAIJIU = "1"; //HUD界面
            PaijiuPageDef.PAGE_PAIJIU_MAP = "2"; //房间地图
            PaijiuPageDef.PAGE_PAIJIU_RULE = "101"; //规则界面
            PaijiuPageDef.PAGE_PAIJIU_SETTLE = "8"; //结算界面
            return PaijiuPageDef;
        }(game.gui.page.PageDef));
        page.PaijiuPageDef = PaijiuPageDef;
    })(page = gamepaijiu.page || (gamepaijiu.page = {}));
})(gamepaijiu || (gamepaijiu = {}));
//# sourceMappingURL=PaijiuPageDef.js.map