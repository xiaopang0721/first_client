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
var gamelonghu;
(function (gamelonghu) {
    var page;
    (function (page) {
        var STATUS_CONFIG = ["准备中", "发牌中", "开始下注", "下注中", "停止下注", "开牌中", "结算中", "显示结算", "准备中"];
        var LonghuPageOld = /** @class */ (function (_super) {
            __extends(LonghuPageOld, _super);
            function LonghuPageOld(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    Path_game_longhu.atlas_game_ui + "longhu.atlas",
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
            LonghuPageOld.prototype.init = function () {
                this._viewUI = this.createView('game_ui.longhu.LongHu_HUDUI', ["game_ui.tongyong.HudUI"]);
                this.addChild(this._viewUI);
                if (!this._longhuHudMgr) {
                    this._longhuHudMgr = new LonghuHudMgr(this._game);
                    this._longhuHudMgr.on(LonghuHudMgr.EVENT_RETURN_MAPINFO, this, this.onUpdateMapinfo);
                }
                this._listState = [];
                this._gridEditorList = [];
                var textureTypes = {
                    "L": Path_game_longhu.ui_longhu + "tu_x1.png",
                    "H": Path_game_longhu.ui_longhu + "tu_g1.png",
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
                for (var index = 0; index < this._viewUI.box_rooms.numChildren; index++) {
                    this._viewUI.box_rooms._childs[index].visible = false;
                    this._listState.push(this._viewUI["txt_status" + index]);
                    this._gridEditorList.push(new GridEditor(19.1, 16.3, 30, 6, textureTypes, false));
                    this._gridEditorList[index].x = 198;
                    this._gridEditorList[index].y = 17;
                    this._listState[index].parent.addChild(this._gridEditorList[index]);
                }
            };
            // 页面打开时执行函数
            LonghuPageOld.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_xinshou.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chuji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zhongji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_gaoji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.view.onOpen(this._game, page.LonghuPageDef.GAME_NAME);
                for (var index = 0; index < this._viewUI.box_rooms.numChildren; index++) {
                    this._viewUI.box_rooms._childs[index].visible = true;
                    Laya.Tween.from(this._viewUI.box_rooms._childs[index], {
                        right: -this._viewUI.box_rooms.width
                    }, 200 + index * 100, Laya.Ease.linearNone);
                }
                this._game.playMusic(Path_game_longhu.music_longhu + "lh_bgm.mp3");
            };
            //帧心跳
            LonghuPageOld.prototype.update = function (diff) {
                if (this._longhuHudMgr) {
                    this._longhuHudMgr.update(diff);
                }
                this.onTime();
            };
            LonghuPageOld.prototype.onUpdateMapinfo = function () {
                var data = this._longhuHudMgr.data;
                for (var i = 0; i < this._gridEditorList.length; i++) {
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
            LonghuPageOld.prototype.onTime = function () {
                if (!this._longhuHudMgr || !this._longhuHudMgr.data || !this._longhuHudMgr.data.length)
                    return;
                var data = this._longhuHudMgr.data;
                for (var i = 0; i < this._listState.length; i++) {
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
            LonghuPageOld.prototype.onBtnTweenEnd = function (e, target) {
                this._player = this._game.sceneObjectMgr.mainPlayer;
                if (!this._player)
                    return;
                this._playerInfo = this._player.playerInfo;
                switch (target) {
                    case this._viewUI.btn_xinshou:
                        this._game.sceneObjectMgr.intoStory(page.LonghuPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_LONGHU_1.toString(), true);
                        break;
                    case this._viewUI.btn_chuji:
                        this._game.sceneObjectMgr.intoStory(page.LonghuPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_LONGHU_2.toString(), true);
                        break;
                    case this._viewUI.btn_zhongji:
                        this._game.sceneObjectMgr.intoStory(page.LonghuPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_LONGHU_3.toString(), true);
                        break;
                    case this._viewUI.btn_gaoji:
                        this._game.sceneObjectMgr.intoStory(page.LonghuPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_LONGHU_4.toString(), true);
                        break;
                    default:
                        break;
                }
            };
            LonghuPageOld.prototype.showTipsBox = function (limit) {
                var _this = this;
                TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", limit), function () {
                    _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                }, function () {
                }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
            };
            LonghuPageOld.prototype.close = function () {
                this._player = null;
                if (this._viewUI) {
                    this._viewUI.btn_xinshou.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_chuji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_zhongji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_gaoji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    if (this._longhuHudMgr) {
                        this._longhuHudMgr.off(LonghuHudMgr.EVENT_RETURN_MAPINFO, this, this.onUpdateMapinfo);
                        this._longhuHudMgr.clear();
                        this._longhuHudMgr = null;
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
            return LonghuPageOld;
        }(game.gui.base.Page));
        page.LonghuPageOld = LonghuPageOld;
    })(page = gamelonghu.page || (gamelonghu.page = {}));
})(gamelonghu || (gamelonghu = {}));
//# sourceMappingURL=LonghuPageOld.js.map