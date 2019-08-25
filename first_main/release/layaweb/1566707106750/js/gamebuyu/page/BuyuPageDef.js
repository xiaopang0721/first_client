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
* //捕鱼
*/
var gamebuyu;
(function (gamebuyu) {
    var page;
    (function (page) {
        var BuyuPageDef = /** @class */ (function (_super) {
            __extends(BuyuPageDef, _super);
            function BuyuPageDef() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BuyuPageDef.myinit = function (str) {
                _super.myinit.call(this, str);
                BuyuClip.init();
                if (WebConfig.baseplatform == PageDef.BASE_PLATFORM_TYPE_NQP) {
                    PageDef._pageClassMap[BuyuPageDef.PAGE_BUYU_HUD] = page.BuyuMainPage;
                }
                else {
                    PageDef._pageClassMap[BuyuPageDef.PAGE_BUYU_HUD] = page.BuyuMainPageOld;
                }
                PageDef._pageClassMap[BuyuPageDef.PAGE_BUYU_MAIN] = page.BuyuSceneHudPage;
                PageDef._pageClassMap[BuyuPageDef.PAGE_BUYU_GUIZE] = page.BuyuGuiZePage;
                PageDef._pageClassMap[BuyuPageDef.PAGE_BUYU_GREAT] = page.BuyuGreatPage;
                PageDef._pageClassMap[BuyuPageDef.PAGE_BUYU_BOSS] = page.BuyuBossPage;
                PageDef._pageClassMap[BuyuPageDef.PAGE_BUYU_FISH] = page.BuyuFishPage;
                PageDef._pageClassMap[BuyuPageDef.PAGE_LOOT] = page.BuyuLootPage;
                this.ROOM_INFO[Web_operation_fields.GAME_ROOM_CONFIG_FISH_1] = { mode: Web_operation_fields.GAME_ROOM_CONFIG_FISH_1, name: "体验场", minGold: 0, rateGold: 1 };
                this.ROOM_INFO[Web_operation_fields.GAME_ROOM_CONFIG_FISH_2] = { mode: Web_operation_fields.GAME_ROOM_CONFIG_FISH_2, name: "小资场", minGold: 1, rateGold: 0.01 };
                this.ROOM_INFO[Web_operation_fields.GAME_ROOM_CONFIG_FISH_3] = { mode: Web_operation_fields.GAME_ROOM_CONFIG_FISH_3, name: "老板场", minGold: 10, rateGold: 0.1 };
                this.ROOM_INFO[Web_operation_fields.GAME_ROOM_CONFIG_FISH_4] = { mode: Web_operation_fields.GAME_ROOM_CONFIG_FISH_4, name: "富豪场", minGold: 100, rateGold: 1 };
                this.ROOM_CONFIG = [
                    Web_operation_fields.GAME_ROOM_CONFIG_FISH_1,
                    Web_operation_fields.GAME_ROOM_CONFIG_FISH_2,
                    Web_operation_fields.GAME_ROOM_CONFIG_FISH_3,
                    Web_operation_fields.GAME_ROOM_CONFIG_FISH_4
                ];
                this["__needLoadAsset"] = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    Path_game_buyu.atlas_game_ui + "buyu/hud.atlas",
                    Path_game_buyu.atlas_game_ui + 'buyu/bosslaixi.atlas',
                    Path_game_buyu.atlas_game_ui + 'buyu/guize.atlas',
                    Path_game_buyu.atlas_game_ui + "buyu/great.atlas",
                    Path_game_buyu.atlas_game_ui + "buyu/tongyong.atlas",
                    Path_game_buyu.atlas_game_ui + "buyu/hudscene.atlas",
                    Path_game_buyu.atlas_game_ui + "buyu/pao.atlas",
                    Path.ui_atlas_effect + "coin.atlas",
                    Path.ui_atlas_effect + "shuzi.atlas",
                    Path.temp + 'fish_group.json',
                    Path.temp + 'template.bin',
                    Path.map_far + 'bg_buyu.jpg',
                    Path.map_far + 'bg_buyu51.jpg',
                    Path.map_far + 'bg_buyu52.jpg',
                    Path.map_far + 'bg_buyu53.jpg',
                    Path.map_far + 'bg_buyu54.jpg',
                    Path.map + 'pz_buyu.png',
                    Path.map + 'pz_buyu51.png',
                    Path.map + 'pz_buyu52.png',
                    Path.map + 'pz_buyu53.png',
                    Path.map + 'pz_buyu54.png',
                    Path.custom_atlas_scene + "bullet.atlas",
                    Path.custom_atlas_scene + "single.atlas",
                    Path.custom_atlas_scene + "lightning.atlas",
                    Path.custom_atlas_scene + "bullet.atlas",
                ];
                if (WebConfig.needMusicPreload) {
                    this["__needLoadAsset"] = this["__needLoadAsset"].concat([
                        Path_game_buyu.music_buyu + "bg.mp3",
                        Path_game_buyu.music_buyu + "boss.mp3",
                        Path_game_buyu.music_buyu + "boss_die1.mp3",
                        Path_game_buyu.music_buyu + "boss_die2.mp3",
                        Path_game_buyu.music_buyu + "boss_die3.mp3",
                        Path_game_buyu.music_buyu + "boss_die4.mp3",
                        Path_game_buyu.music_buyu + "boss_die5.mp3",
                        Path_game_buyu.music_buyu + "boss_die6.mp3",
                        Path_game_buyu.music_buyu + "boss_die7.mp3",
                        Path_game_buyu.music_buyu + "boss_die8.mp3",
                        Path_game_buyu.music_buyu + "boss_die9.mp3",
                        Path_game_buyu.music_buyu + "boss_die10.mp3",
                        Path_game_buyu.music_buyu + "btn.mp3",
                        Path_game_buyu.music_buyu + "close.mp3",
                        Path_game_buyu.music_buyu + "dantoubaozha.mp3",
                        Path_game_buyu.music_buyu + "dianyu.mp3",
                        Path_game_buyu.music_buyu + "fire.mp3",
                        Path_game_buyu.music_buyu + "great.mp3",
                        Path_game_buyu.music_buyu + "huangjinyu.mp3",
                        Path_game_buyu.music_buyu + "jiangli.mp3",
                        Path_game_buyu.music_buyu + "say1.mp3",
                        Path_game_buyu.music_buyu + "say2.mp3",
                        Path_game_buyu.music_buyu + "say3.mp3",
                        Path_game_buyu.music_buyu + "say4.mp3",
                        Path_game_buyu.music_buyu + "say5.mp3",
                        Path_game_buyu.music_buyu + "say6.mp3",
                        Path_game_buyu.music_buyu + "say7.mp3",
                        Path_game_buyu.music_buyu + "say8.mp3",
                        Path_game_buyu.music_buyu + "say9.mp3",
                        Path_game_buyu.music_buyu + "say10.mp3",
                        Path_game_buyu.music_buyu + "say11.mp3",
                        Path_game_buyu.music_buyu + "say12.mp3",
                        Path_game_buyu.music_buyu + "say13.mp3",
                        Path_game_buyu.music_buyu + "say14.mp3",
                        Path_game_buyu.music_buyu + "shouqian.mp3",
                        Path_game_buyu.music_buyu + "showitem.mp3",
                        Path_game_buyu.music_buyu + "taibangle.mp3",
                        Path_game_buyu.music_buyu + "yubaoqian.mp3",
                        Path_game_buyu.music_buyu + "yuchao.mp3",
                        Path_game_buyu.music_buyu + "zhuanpan.mp3",
                    ]);
                }
                for (var i = 0; i < 27; i++) {
                    if (i == 25)
                        continue;
                    this["__needLoadAsset"].push(Path_game_buyu.custom_atlas_fish + (i + 1) + "/move.atlas");
                    if (i >= 17) {
                        this["__needLoadAsset"].push(Path_game_buyu.custom_atlas_fish + (i + 1) + "/top.atlas");
                        this["__needLoadAsset"].push(Path_game_buyu.custom_atlas_fish + (i + 1) + "/bottom.atlas");
                    }
                    if (i < 10) {
                        this["__needLoadAsset"].push(Path.custom_atlas_scene + "yw/" + (i + 1) + ".atlas");
                    }
                }
            };
            BuyuPageDef.parseBuYuData = function (assetsLoader) {
                if (!Template.data) {
                    var tempData = Laya.loader.getRes(Path.temp + "template.bin");
                    assetsLoader.release(Path.temp + 'template.bin', true);
                    if (tempData) {
                        var dataStr = StringU.readZlibData(new ByteArray(tempData));
                        Template.setData(JSON.parse(dataStr));
                    }
                }
                if (!FishGroupPathManager.data) {
                    var fishTemData = Laya.loader.getRes(Path.temp + 'fish_group.json');
                    assetsLoader.release(Path.temp + 'fish_group.json', true);
                    fishTemData && FishGroupPathManager.setData(fishTemData);
                }
            };
            /**
             * 根据模式ID获取房间信息
             * @param mode 模式ID
             */
            BuyuPageDef.getRoomInfoByMode = function (mode) {
                var info = this.ROOM_INFO[mode];
                if (info) {
                    return info;
                }
                return null;
            };
            BuyuPageDef.PAGE_BUYU_HUD = "1"; //捕鱼hud
            BuyuPageDef.PAGE_BUYU_MAIN = "2"; //捕鱼场景主界面
            BuyuPageDef.PAGE_BUYU_GUIZE = "101"; //捕鱼规则
            BuyuPageDef.PAGE_LOOT = "4"; //战利品
            BuyuPageDef.PAGE_BUYU_GREAT = "6"; //捕鱼太棒了
            BuyuPageDef.PAGE_BUYU_BOSS = "7"; //BOSS来袭
            BuyuPageDef.PAGE_BUYU_FISH = "8"; //鱼潮来袭
            /**
              * 捕鱼房间信息
              * name 名字
              * minGold 进入房间最少要多少捕鱼币
              * rateGold 1倍炮要花多少金币
              */
            BuyuPageDef.ROOM_INFO = {};
            BuyuPageDef.ROOM_CONFIG = [];
            return BuyuPageDef;
        }(game.gui.page.PageDef));
        page.BuyuPageDef = BuyuPageDef;
    })(page = gamebuyu.page || (gamebuyu.page = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=BuyuPageDef.js.map