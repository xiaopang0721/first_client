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
* 牛牛
*/
var gamebrniuniu;
(function (gamebrniuniu) {
    var page;
    (function (page) {
        var STATUS_CONFIG = ["准备中", "洗牌中", "开始下注", "下注中", "停止下注", "发牌中", "开牌中", "结算中", "显示结算", "准备中"];
        var BrNiuNiuPageOld = /** @class */ (function (_super) {
            __extends(BrNiuNiuPageOld, _super);
            function BrNiuNiuPageOld(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    Path_game_brniuniu.atlas_game_ui + "brniuniu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
                ];
                _this._isNeedDuang = false;
                return _this;
            }
            // 页面初始化函数
            BrNiuNiuPageOld.prototype.init = function () {
                this._viewUI = this.createView('game_ui.brniuniu.BaiRenNN_HUDUI', ["game_ui.tongyong.HudUI"]);
                this.addChild(this._viewUI);
                if (!this._niuHudMgr) {
                    this._niuHudMgr = new BrNiuNiuHudMgr(this._game);
                    this._niuHudMgr.on(BrNiuNiuHudMgr.EVENT_RETURN_MAPINFO, this, this.onUpdateMapinfo);
                }
                this._listArr = [];
                this._listState = [];
                for (var index = 0; index < this._viewUI.box_rooms.numChildren; index++) {
                    this._viewUI.box_rooms._childs[index].visible = false;
                    this._listState.push(this._viewUI["txt_status" + index]);
                    this._listArr.push(this._viewUI["list_record" + index]);
                    this._listArr[index].itemRender = this.createChildren("game_ui.brniuniu.component.HudRenderUI", HudRecordRender);
                    this._listArr[index].renderHandler = new Handler(this, this.renderHandler);
                    this._listArr[index].dataSource = [];
                }
            };
            BrNiuNiuPageOld.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            // 页面打开时执行函数
            BrNiuNiuPageOld.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_xinshou.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chuji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zhongji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_gaoji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.view.onOpen(this._game, page.BrniuniuPageDef.GAME_NAME);
                for (var index = 0; index < this._viewUI.box_rooms.numChildren; index++) {
                    this._viewUI.box_rooms._childs[index].visible = true;
                    Laya.Tween.from(this._viewUI.box_rooms._childs[index], {
                        right: -this._viewUI.box_rooms.width
                    }, 200 + index * 100, Laya.Ease.linearNone);
                }
                this._game.playMusic(Path_game_brniuniu.music_brniuniu + "nn_bgm.mp3");
            };
            //帧心跳
            BrNiuNiuPageOld.prototype.update = function (diff) {
                if (this._niuHudMgr) {
                    this._niuHudMgr.update(diff);
                }
                this.onTime();
            };
            BrNiuNiuPageOld.prototype.onUpdateMapinfo = function () {
                var data = this._niuHudMgr.data;
                for (var i = 0; i < this._listArr.length; i++) {
                    this._listArr[i].dataSource = data[i][2];
                }
            };
            BrNiuNiuPageOld.prototype.onTime = function () {
                if (!this._niuHudMgr || !this._niuHudMgr.data || !this._niuHudMgr.data.length)
                    return;
                var data = this._niuHudMgr.data;
                for (var i = 0; i < this._listArr.length; i++) {
                    var curTime = this._game.sync.serverTimeBys;
                    var endTime = data[i][1] + 2;
                    var time = Math.floor(endTime - curTime);
                    if (time <= 0) {
                        this._listState[i].text = "刷新中...";
                    }
                    else {
                        this._listState[i].text = STATUS_CONFIG[data[i][0]] + time + "s";
                    }
                }
            };
            BrNiuNiuPageOld.prototype.onBtnTweenEnd = function (e, target) {
                this._player = this._game.sceneObjectMgr.mainPlayer;
                if (!this._player)
                    return;
                this._playerInfo = this._player.playerInfo;
                switch (target) {
                    case this._viewUI.btn_xinshou:
                        this._game.sceneObjectMgr.intoStory(page.BrniuniuPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_BRNIUNIU_1.toString(), true);
                        break;
                    case this._viewUI.btn_chuji:
                        this._game.sceneObjectMgr.intoStory(page.BrniuniuPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_BRNIUNIU_2.toString(), true);
                        break;
                    case this._viewUI.btn_zhongji:
                        this._game.sceneObjectMgr.intoStory(page.BrniuniuPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_BRNIUNIU_3.toString(), true);
                        break;
                    case this._viewUI.btn_gaoji:
                        this._game.sceneObjectMgr.intoStory(page.BrniuniuPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_BRNIUNIU_4.toString(), true);
                        break;
                    default:
                        break;
                }
            };
            BrNiuNiuPageOld.prototype.showTipsBox = function (limit) {
                var _this = this;
                TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", limit), function () {
                    _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                }, function () {
                }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
            };
            BrNiuNiuPageOld.prototype.close = function () {
                this._player = null;
                if (this._viewUI) {
                    this._viewUI.btn_xinshou.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_chuji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_zhongji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_gaoji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                }
                if (this._niuHudMgr) {
                    this._niuHudMgr.off(BrNiuNiuHudMgr.EVENT_RETURN_MAPINFO, this, this.onUpdateMapinfo);
                    this._niuHudMgr.clear();
                    this._niuHudMgr = null;
                }
                this._game.stopMusic();
                Laya.Tween.clearAll(this);
                _super.prototype.close.call(this);
            };
            return BrNiuNiuPageOld;
        }(game.gui.base.Page));
        page.BrNiuNiuPageOld = BrNiuNiuPageOld;
        var HudRecordRender = /** @class */ (function (_super) {
            __extends(HudRecordRender, _super);
            function HudRecordRender() {
                return _super.call(this) || this;
            }
            HudRecordRender.prototype.setData = function (game, data) {
                this._game = game;
                this._data = data;
                if (!this._data) {
                    this.visible = false;
                    return;
                }
                this.visible = true;
                this.tian.skin = StringU.substitute(Path_game_brniuniu.ui_brniuniu + "tu_{0}.png", this._data[0] == -1 ? "g1" : "x1");
                this.di.skin = StringU.substitute(Path_game_brniuniu.ui_brniuniu + "tu_{0}.png", this._data[1] == -1 ? "g1" : "x1");
                this.xuan.skin = StringU.substitute(Path_game_brniuniu.ui_brniuniu + "tu_{0}.png", this._data[2] == -1 ? "g1" : "x1");
                this.huang.skin = StringU.substitute(Path_game_brniuniu.ui_brniuniu + "tu_{0}.png", this._data[3] == -1 ? "g1" : "x1");
            };
            HudRecordRender.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            return HudRecordRender;
        }(ui.game_ui.brniuniu.component.HudRenderUI));
    })(page = gamebrniuniu.page || (gamebrniuniu.page = {}));
})(gamebrniuniu || (gamebrniuniu = {}));
//# sourceMappingURL=BrNiuNiuPageOld.js.map