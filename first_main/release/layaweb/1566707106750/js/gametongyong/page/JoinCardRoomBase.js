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
* 加入房间
*/
var gametongyong;
(function (gametongyong) {
    var page;
    (function (page) {
        var JoinCardRoomBase = /** @class */ (function (_super) {
            __extends(JoinCardRoomBase, _super);
            function JoinCardRoomBase(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "jiaru.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                ];
                _this._isNeedBlack = true;
                return _this;
            }
            // 页面初始化函数
            JoinCardRoomBase.prototype.init = function () {
                this._viewUI = this.createView("game_ui.tongyong.JiaRuUI");
                this.addChild(this._viewUI);
                this._game.cardRoomMgr.clear();
                this._game.cardRoomMgr.RoomType = 2;
                this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
            };
            // 页面打开时执行函数
            JoinCardRoomBase.prototype.onOpen = function () {
                if (!this._game_id || this._game_id == "") {
                    throw "加入房间失败,请确认游戏类型及房间信息是否正确!";
                }
                _super.prototype.onOpen.call(this);
                this.initClipState();
                this.setButtonEvent(true);
            };
            JoinCardRoomBase.prototype.initClipState = function () {
                for (var index = 1; index < 7; index++) {
                    this._viewUI["clip_" + index].visible = false;
                }
            };
            JoinCardRoomBase.prototype.setButtonEvent = function (isOn) {
                if (isOn) {
                    for (var index = 0; index < 10; index++) {
                        this._viewUI["btn_" + index].on(LEvent.CLICK, this, this.onBtnClick, [index]);
                    }
                    this._viewUI.btn_re.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_del.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                }
                else {
                    for (var index = 0; index < 10; index++) {
                        this._viewUI["btn_" + index].off(LEvent.CLICK, this, this.onBtnClick);
                    }
                    this._viewUI.btn_re.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_del.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                }
            };
            JoinCardRoomBase.prototype.onBtnClick = function (i, e) {
                var len = this._game.cardRoomMgr.RoomID.length;
                this._game.cardRoomMgr.RoomID += i.toString();
                this._viewUI["clip_" + (len + 1)].index = i;
                this._viewUI["clip_" + (len + 1)].visible = true;
                if (this._game.cardRoomMgr.RoomID.length >= 6) {
                    this._game.cardRoomMgr.RoomType = 2;
                    // 输入完毕后自动寻找房间 加入成功后关闭当前页面
                    this._game.sceneObjectMgr.intoStory(this._game_id, Web_operation_fields.GAME_ROOM_CONFIG_CARD_ROOM.toString(), true, this._game.cardRoomMgr);
                }
            };
            JoinCardRoomBase.prototype.delRoomNo = function () {
                if (this._game.cardRoomMgr.RoomID.length == 0)
                    return;
                var len = this._game.cardRoomMgr.RoomID.length;
                if (len > 1) {
                    this._game.cardRoomMgr.RoomID = this._game.cardRoomMgr.RoomID.slice(0, -1);
                }
                else {
                    this._game.cardRoomMgr.RoomID = "";
                }
                this._viewUI["clip_" + len].visible = false;
            };
            JoinCardRoomBase.prototype.onOptHandler = function (optcode, msg) {
                var _this = this;
                if (msg.type == Operation_Fields.OPRATE_CARDROOM) {
                    switch (msg.reason) {
                        case Operation_Fields.OPRATE_CARDROOM_INST_NOT_FOUND:
                            this._game.setIsLockGame(false, false, "StoryBase.OPRATE_CARDROOM_INST_NOT_FOUND");
                            this._game.showTips("该房间不存在，请输入正确的房号");
                            this._game.sceneObjectMgr.leaveStory(true);
                            this._game.uiRoot.general.open(this._open_id);
                            break;
                        case Operation_Fields.OPRATE_CARDROOM_CAN_NOT_JOIN:
                            this._game.setIsLockGame(false, false, "StoryBase.OPRATE_CARDROOM_CAN_NOT_JOIN");
                            this._game.showTips("该房间已经满员啦，请加入其他房间");
                            this._game.sceneObjectMgr.leaveStory(true);
                            this._game.uiRoot.general.open(this._open_id);
                            break;
                        case Operation_Fields.OPRATE_CARDROOM_DISS_ROOM:
                            this._game.setIsLockGame(false, false, "StoryBase.OPRATE_CARDROOM_DISS_ROOM");
                            this._game.showTips("该房间已经解散啦，请加入其他房间");
                            this._game.sceneObjectMgr.leaveStory(true);
                            this._game.uiRoot.general.open(this._open_id);
                            break;
                        case Operation_Fields.OPRATE_CARDROOM_GAME_START:
                            this._game.setIsLockGame(false, false, "StoryBase.OPRATE_CARDROOM_GAME_START");
                            this._game.showTips("该房间已经开始游戏了，请加入其他房间");
                            this._game.sceneObjectMgr.leaveStory(true);
                            this._game.uiRoot.general.open(this._open_id);
                            break;
                        case Operation_Fields.OPRATE_CARDROOM_GAME_OVER:
                            this._game.setIsLockGame(false, false, "StoryBase.OPRATE_CARDROOM_GAME_OVER");
                            this._game.showTips("该房间的牌局已经结束了，请加入其他房间");
                            this._game.sceneObjectMgr.leaveStory(true);
                            this._game.uiRoot.general.open(this._open_id);
                            break;
                        case Operation_Fields.OPRATE_CARDROOM_JOIN_ROOM_NOT_MONEY:
                            this._game.setIsLockGame(false, false, "StoryBase.OPRATE_CARDROOM_JOIN_ROOM_NOT_MONEY");
                            page.TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币不足哦~\n补充点金币去大杀四方吧~"), function () {
                                _this._game.sceneObjectMgr.leaveStory(true);
                                _this._game.uiRoot.general.open(_this._open_id);
                            }, function () {
                            }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
                            break;
                    }
                }
                else if (msg.type == Operation_Fields.OPRATE_TELEPORT) {
                    switch (msg.reason) {
                        case Operation_Fields.OPRATE_TELEPORT_MAP_JOIN_ROOM_SUCCESS:
                            this.close();
                            break;
                    }
                }
            };
            //按钮点击
            JoinCardRoomBase.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_re:
                        this._game.cardRoomMgr.RoomID = "";
                        this.initClipState();
                        break;
                    case this._viewUI.btn_del:
                        this.delRoomNo();
                        break;
                    default:
                        break;
                }
            };
            JoinCardRoomBase.prototype.close = function () {
                this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this.setButtonEvent(false);
                _super.prototype.close.call(this);
            };
            return JoinCardRoomBase;
        }(game.gui.base.Page));
        page.JoinCardRoomBase = JoinCardRoomBase;
    })(page = gametongyong.page || (gametongyong.page = {}));
})(gametongyong || (gametongyong = {}));
//# sourceMappingURL=JoinCardRoomBase.js.map