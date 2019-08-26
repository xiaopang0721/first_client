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
var gamezjh;
(function (gamezjh) {
    var page;
    (function (page) {
        var ZjhPageDef = /** @class */ (function (_super) {
            __extends(ZjhPageDef, _super);
            function ZjhPageDef() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ZjhPageDef.myinit = function (str) {
                _super.myinit.call(this, str);
                ZjhClip.init();
                if (WebConfig.baseplatform == PageDef.BASE_PLATFORM_TYPE_NQP) {
                    PageDef._pageClassMap[ZjhPageDef.PAGE_ZHAJINHUA] = page.ZhaJinHuaPage;
                }
                else {
                    PageDef._pageClassMap[ZjhPageDef.PAGE_ZHAJINHUA] = page.ZhaJinHuaPageOld;
                }
                PageDef._pageClassMap[ZjhPageDef.PAGE_ZHAJINHUA_MAP] = page.ZjhMapPage;
                PageDef._pageClassMap[ZjhPageDef.PAGE_ZHAJINHUA_RULE] = page.ZjhRulePage;
                PageDef._pageClassMap[ZjhPageDef.PAGE_ZHAJINHUA_XIQIAN] = page.ZjhXiQianPage;
                this["__needLoadAsset"] = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    Path_game_zjh.atlas_game_ui + "zhajinhua.atlas",
                    Path_game_zjh.atlas_game_ui + "zhajinhua/effect/yanhua.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    Path_game_zjh.atlas_game_ui + "zhajinhua/effect/btn.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    Path_game_zjh.atlas_game_ui + "zhajinhua/effect/bipai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                    Path.custom_atlas_scene + 'card.atlas',
                    Path.custom_atlas_scene + 'chip.atlas',
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    PathGameTongyong.ui_tongyong_sk + "HeGuan2.sk",
                    PathGameTongyong.ui_tongyong_sk + "HeGuan2.png",
                    Path.map + 'pz_zjh.png',
                    Path.map_far + 'bg_zjh.jpg'
                ];
                if (WebConfig.needMusicPreload) {
                    this["__needLoadAsset"] = this["__needLoadAsset"].concat([
                        Path_game_zjh.music_zjh + "PK.mp3",
                        Path_game_zjh.music_zjh + "bgroom.mp3",
                        Path_game_zjh.music_zjh + "bipaishu.mp3",
                        Path_game_zjh.music_zjh + "biwin.mp3",
                        Path_game_zjh.music_zjh + "bpl_1.mp3",
                        Path_game_zjh.music_zjh + "bpl_2.mp3",
                        Path_game_zjh.music_zjh + "chouma.mp3",
                        Path_game_zjh.music_zjh + "genzhu.mp3",
                        Path_game_zjh.music_zjh + "genzhu_1.mp3",
                        Path_game_zjh.music_zjh + "genzhu_2.mp3",
                        Path_game_zjh.music_zjh + "guzhuyizhi_1.mp3",
                        Path_game_zjh.music_zjh + "guzhuyizhi_2.mp3",
                        Path_game_zjh.music_zjh + "jiazhu_1.mp3",
                        Path_game_zjh.music_zjh + "jiazhu_2.mp3",
                        Path_game_zjh.music_zjh + "kanpai_1.mp3",
                        Path_game_zjh.music_zjh + "kanpai_2.mp3",
                        Path_game_zjh.music_zjh + "PK.mp3",
                        Path_game_zjh.music_zjh + "qipai_1.mp3",
                        Path_game_zjh.music_zjh + "qipai_2.mp3",
                        Path_game_zjh.music_zjh + "shouqian.mp3",
                    ]);
                }
                this["__qifulimit"] = true;
            };
            //炸金花界面
            ZjhPageDef.PAGE_ZHAJINHUA = "1";
            ZjhPageDef.PAGE_ZHAJINHUA_MAP = "2";
            ZjhPageDef.PAGE_ZHAJINHUA_RULE = "101";
            ZjhPageDef.PAGE_ZHAJINHUA_XIQIAN = "5";
            return ZjhPageDef;
        }(game.gui.page.PageDef));
        page.ZjhPageDef = ZjhPageDef;
    })(page = gamezjh.page || (gamezjh.page = {}));
})(gamezjh || (gamezjh = {}));
//# sourceMappingURL=ZjhPageDef.js.map