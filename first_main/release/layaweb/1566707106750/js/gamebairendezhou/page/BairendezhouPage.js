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
* 百人德州
*/
var gamebairendezhou;
(function (gamebairendezhou) {
    var page;
    (function (page) {
        var BairendezhouPage = /** @class */ (function (_super) {
            __extends(BairendezhouPage, _super);
            function BairendezhouPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    Path_game_bairendezhou.atlas_game_ui + "bairendezhou.atlas",
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
            BairendezhouPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.bairendezhou.BaiRenDeZhou_HUDUI', ["game_ui.tongyong.HudUI"]);
                this.addChild(this._viewUI);
                if (!this._bairendezhouHudMgr) {
                    this._bairendezhouHudMgr = new BairendezhouHudMgr(this._game);
                    this._bairendezhouHudMgr.on(BairendezhouHudMgr.EVENT_RETURN_MAPINFO, this, this.onUpdateMapinfo);
                }
                this._listState = [];
                this._listBar = [];
                this._gridEditorList = [];
                var textureTypes = {
                    "L": Path_game_bairendezhou.ui_bairendezhou + "tu_x1.png",
                    "H": Path_game_bairendezhou.ui_bairendezhou + "tu_g1.png",
                    "1": PathGameTongyong.ui_tongyong_general + "plszx_1.png",
                    "2": PathGameTongyong.ui_tongyong_general + "plszx_2.png",
                    "3": PathGameTongyong.ui_tongyong_general + "plszx_3.png",
                    "4": PathGameTongyong.ui_tongyong_general + "plszx_4.png",
                    "5": PathGameTongyong.ui_tongyong_general + "plszx_5.png",
                    "6": PathGameTongyong.ui_tongyong_general + "plszx_6.png",
                    "7": PathGameTongyong.ui_tongyong_general + "plszx_7.png",
                    "8": PathGameTongyong.ui_tongyong_general + "plszx_8.png",
                    "9": PathGameTongyong.ui_tongyong_general + "plszx_9.png",
                };
                for (var index = 0; index < this._viewUI.panel_room.numChildren; index++) {
                    this._listState.push(this._viewUI["txt_status" + index]);
                    this._listBar.push(this._viewUI["bar" + index]);
                    this._gridEditorList.push(new GridEditor(33, 35, 17, 6, textureTypes, false));
                    this._gridEditorList[index].x = 7;
                    this._gridEditorList[index].y = 75;
                    this._listState[index].parent.addChild(this._gridEditorList[index]);
                }
            };
            // 页面打开时执行函数
            BairendezhouPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.box0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.box1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.box2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.box3.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_join.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.view.onOpen(this._game, page.BairendezhouPageDef.GAME_NAME);
                this._viewUI.panel_room.hScrollBarSkin = "";
                this._game.playMusic(Path_game_bairendezhou.music_bairendezhou + "brdz_bgm.mp3");
                for (var index = 0; index < this._viewUI.panel_room.numChildren - 1; index++) {
                    this._viewUI["box" + index].visible = true;
                    Laya.Tween.from(this._viewUI["box" + index], {
                        right: -400
                    }, 200 + index * 100, Laya.Ease.linearNone);
                }
            };
            //帧心跳
            BairendezhouPage.prototype.update = function (diff) {
                if (this._bairendezhouHudMgr) {
                    this._bairendezhouHudMgr.update(diff);
                }
                this.onTime();
            };
            BairendezhouPage.prototype.onUpdateMapinfo = function () {
                var data = this._bairendezhouHudMgr.data;
                for (var i = 0; i < this._listState.length; i++) {
                    if (data[i][2]) {
                        var roadInfo = data[i][2];
                        var posInfo = data[i][3];
                        var arr = [];
                        if (roadInfo && roadInfo.length) {
                            for (var j = 0; j < roadInfo.length; j++) {
                                arr.push(posInfo[j][0]);
                                arr.push(posInfo[j][1]);
                                arr.push(roadInfo[j]);
                            }
                        }
                        this._gridEditorList[i].setData(arr);
                    }
                }
            };
            BairendezhouPage.prototype.onTime = function () {
                if (!this._bairendezhouHudMgr || !this._bairendezhouHudMgr.data || !this._bairendezhouHudMgr.data.length)
                    return;
                var data = this._bairendezhouHudMgr.data;
                for (var i = 0; i < this._listState.length; i++) {
                    var curTime = this._game.sync.serverTimeBys;
                    var endTime = data[i][1];
                    var time = Math.floor(endTime - curTime);
                    var valueBar = void 0;
                    if (data[i][0] >= 2 && data[i][0] <= 3) { //下注中
                        if (time <= 0) {
                            valueBar = 0;
                            this._listState[i].text = "结算中...";
                        }
                        else {
                            valueBar = time / BairendezhouPage.BET_TIME;
                            this._listState[i].text = "下注中..." + time + "s";
                        }
                    }
                    else {
                        valueBar = 0;
                        this._listState[i].text = "结算中...";
                    }
                    this._listBar[i].value = valueBar;
                }
            };
            BairendezhouPage.prototype.onBtnTweenEnd = function (e, target) {
                this._player = this._game.sceneObjectMgr.mainPlayer;
                if (!this._player)
                    return;
                this._playerInfo = this._player.playerInfo;
                switch (target) {
                    //新手场
                    case this._viewUI.box0:
                        this._game.sceneObjectMgr.intoStory(page.BairendezhouPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_BAIRENDEZHOU_1.toString(), true);
                        break;
                    //小资场	
                    case this._viewUI.box1:
                        this._game.sceneObjectMgr.intoStory(page.BairendezhouPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_BAIRENDEZHOU_2.toString(), true);
                        break;
                    //老板场	
                    case this._viewUI.box2:
                        this._game.sceneObjectMgr.intoStory(page.BairendezhouPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_BAIRENDEZHOU_3.toString(), true);
                        break;
                    //富豪场	
                    case this._viewUI.box3:
                        this._game.sceneObjectMgr.intoStory(page.BairendezhouPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_BAIRENDEZHOU_4.toString(), true);
                        break;
                    case this._viewUI.btn_join:
                        var maplv = TongyongUtil.getJoinMapLv(page.BairendezhouPageDef.GAME_NAME, this._playerInfo.money);
                        if (!maplv)
                            return;
                        this._game.sceneObjectMgr.intoStory(page.BairendezhouPageDef.GAME_NAME, maplv.toString(), true);
                        break;
                    default:
                        break;
                }
            };
            BairendezhouPage.prototype.close = function () {
                this._player = null;
                if (this._viewUI) {
                    this._viewUI.box0.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.box1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.box2.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.box3.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_join.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    if (this._bairendezhouHudMgr) {
                        this._bairendezhouHudMgr.off(BairendezhouHudMgr.EVENT_RETURN_MAPINFO, this, this.onUpdateMapinfo);
                        this._bairendezhouHudMgr.clear();
                        this._bairendezhouHudMgr = null;
                    }
                    if (this._gridEditorList) {
                        for (var i = 0; i < this._gridEditorList.length; i++) {
                            this._gridEditorList[i].removeSelf();
                            this._gridEditorList[i].destroy();
                            this._gridEditorList[i] = null;
                        }
                    }
                    this._game.stopMusic();
                    Laya.Tween.clearAll(this);
                }
                _super.prototype.close.call(this);
            };
            BairendezhouPage.BET_TIME = 15; //下注时长
            return BairendezhouPage;
        }(game.gui.base.Page));
        page.BairendezhouPage = BairendezhouPage;
    })(page = gamebairendezhou.page || (gamebairendezhou.page = {}));
})(gamebairendezhou || (gamebairendezhou = {}));
//# sourceMappingURL=BairendezhouPage.js.map