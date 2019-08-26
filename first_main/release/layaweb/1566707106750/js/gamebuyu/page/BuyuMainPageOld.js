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
* 游戏大厅
*/
var gamebuyu;
(function (gamebuyu) {
    var page;
    (function (page) {
        var BuyuMainPageOld = /** @class */ (function (_super) {
            __extends(BuyuMainPageOld, _super);
            function BuyuMainPageOld(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    Path_game_buyu.atlas_game_ui + "buyu/hud.atlas",
                    Path_game_buyu.atlas_game_ui + "buyu/tongyong.atlas",
                    Path_game_buyu.atlas_game_ui + "buyu/hudscene.atlas",
                    Path.temp + "template.bin",
                    Path.temp + "fish_group.json",
                ];
                _this._isNeedDuang = false;
                return _this;
            }
            // 页面初始化函数
            BuyuMainPageOld.prototype.init = function () {
                this._viewUI = this.createView('game_ui.buyu.BuYu_HUDUI', ["game_ui.tongyong.HudUI"]);
                this.addChild(this._viewUI);
                for (var index = 0; index < this._viewUI.box_right.numChildren; index++) {
                    this._viewUI.box_right._childs[index].visible = true;
                    Laya.Tween.from(this._viewUI.box_right._childs[index], {
                        right: -300
                    }, 200 + index * 100, Laya.Ease.linearNone);
                }
                page.BuyuPageDef.parseBuYuData(this._assetsLoader);
            };
            // 页面打开时执行函数
            BuyuMainPageOld.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.view_hud.onOpen(this._game, page.BuyuPageDef.GAME_NAME);
                //按钮监听
                this._viewUI.img_room0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.img_room1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.img_room2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.img_room3.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                //房间条件
                var len = page.BuyuPageDef.ROOM_CONFIG.length;
                for (var index = 0; index < len; index++) {
                    if (index == 0)
                        continue;
                    var idx = page.BuyuPageDef.ROOM_CONFIG[index];
                    var info = page.BuyuPageDef.ROOM_INFO[idx];
                    var labelLeast = this._viewUI['lab_least' + index];
                    var labelMoney = this._viewUI['lab_money' + index];
                    if (labelLeast) {
                        labelLeast.text = "底分：" + info.rateGold;
                    }
                    if (labelMoney) {
                        labelMoney.text = "准入：" + info.minGold;
                    }
                }
                this._game.playMusic(Path.music + "buyu/bg.mp3");
            };
            // 重新布局
            BuyuMainPageOld.prototype.layout = function () {
                _super.prototype.layout.call(this);
            };
            /**按钮点击事件缓动完 回调 该做啥就做啥 */
            BuyuMainPageOld.prototype.onBtnTweenEnd = function (e, target) {
                var mainPlayer = this._game.sceneObjectMgr.mainPlayer;
                if (!mainPlayer)
                    return;
                switch (target) {
                    case this._viewUI.img_room0: //体验场
                        this.checkMoneyToStory(Web_operation_fields.GAME_ROOM_CONFIG_FISH_1);
                        break;
                    case this._viewUI.img_room1: //0.01元场
                        this.checkMoneyToStory(Web_operation_fields.GAME_ROOM_CONFIG_FISH_2);
                        break;
                    case this._viewUI.img_room2: //0.1元场
                        this.checkMoneyToStory(Web_operation_fields.GAME_ROOM_CONFIG_FISH_3);
                        break;
                    case this._viewUI.img_room3: //1元场
                        this.checkMoneyToStory(Web_operation_fields.GAME_ROOM_CONFIG_FISH_4);
                        break;
                }
            };
            /**
             * 检查进入房间的条件
             * @param mode
             */
            BuyuMainPageOld.prototype.checkMoneyToStory = function (mode) {
                var _this = this;
                var mainPlayer = this._game.sceneObjectMgr.mainPlayer;
                if (!mainPlayer)
                    return;
                if (mainPlayer.playerInfo.isguest && mode != Web_operation_fields.GAME_ROOM_CONFIG_FISH_1) {
                    TongyongPageDef.ins.alertRecharge("亲爱的玩家，您正使用游客模式进行游戏，该模式下的游戏数据（包括付费数据）在删除游戏、更换设备后清空！对此造成的损失，本平台将不承担任何责任。为保障您的虚拟财产安全，我们强力建议您绑定手机号升级为正式账号。", function () {
                        _this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDPHONE);
                    }, function () {
                    }, false, PathGameTongyong.ui_tongyong_general + "btn_qw.png");
                    return;
                }
                var haveMoney = this._game.sceneObjectMgr.mainPlayer.GetMoney();
                var roomInfo = page.BuyuPageDef.getRoomInfoByMode(mode);
                if (haveMoney < roomInfo.minGold) {
                    var str = StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", roomInfo.minGold);
                    this.gotoRecharge(str);
                }
                else {
                    //进入
                    this._game.sceneObjectMgr.intoStory(page.BuyuPageDef.GAME_NAME, mode.toString(), true);
                }
            };
            /**
             * 走！咱们充钱去
             * @param str
             * @param ecb
             * @param ccb
             */
            BuyuMainPageOld.prototype.gotoRecharge = function (str, ecb, ccb) {
                var _this = this;
                if (ecb === void 0) { ecb = null; }
                if (ccb === void 0) { ccb = null; }
                TongyongPageDef.ins.alertRecharge(str, function () {
                    if (ecb) {
                        ecb();
                    }
                    _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                }, function () {
                    if (ccb) {
                        ccb();
                    }
                }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
            };
            BuyuMainPageOld.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.img_room0.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.img_room1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.img_room2.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.img_room3.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                }
                _super.prototype.close.call(this);
            };
            return BuyuMainPageOld;
        }(game.gui.base.Page));
        page.BuyuMainPageOld = BuyuMainPageOld;
    })(page = gamebuyu.page || (gamebuyu.page = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=BuyuMainPageOld.js.map