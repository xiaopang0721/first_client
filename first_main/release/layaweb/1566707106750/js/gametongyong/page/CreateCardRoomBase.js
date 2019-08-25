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
* 创建房间
*/
var gametongyong;
(function (gametongyong) {
    var page;
    (function (page) {
        var CreateCardRoomBase = /** @class */ (function (_super) {
            __extends(CreateCardRoomBase, _super);
            function CreateCardRoomBase(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._round_count = [5, 10, 15, 20]; // 游戏局数
                _this._pay_money = [3, 6, 9, 12]; // 不同局数的支付金额
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "jiaru.atlas",
                ];
                _this._isNeedBlack = true;
                return _this;
            }
            // 页面初始化函数
            CreateCardRoomBase.prototype.init = function () {
                this._viewUI = this.createView("game_ui.tongyong.FangKa_ChuangJianUI");
                this.addChild(this._viewUI);
                this._game.cardRoomMgr.clear();
                this.setCardConfig();
                this._game.cardRoomMgr.RoomRound = this._round_count[0];
                this._game.cardRoomMgr.RoomPay = this._pay_money[0];
                this._game.cardRoomMgr.PayType = 1;
                this._game.cardRoomMgr.RoomType = 1;
                for (var i = 0; i < this._round_count.length; i++) {
                    this._viewUI["txt_round" + i].text = this._round_count[i] + "局";
                }
            };
            // 页面打开时执行函数
            CreateCardRoomBase.prototype.onOpen = function () {
                if (!this._game_id || this._game_id == "" || !this._round_count || this._round_count.length <= 0 ||
                    !this._pay_money || this._pay_money.length <= 0)
                    throw "创建房间失败,请确认游戏类型及房间信息是否正确!";
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_create.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this.setRoundCheckboxEvent(true);
                this.setPaytypeCheckboxEvent(true);
                this._viewUI.cb_round0.selected = true;
                this._viewUI.cb_pay0.selected = true;
                this._viewUI.txt_money.text = this._pay_money[0].toString();
            };
            CreateCardRoomBase.prototype.setCardConfig = function () {
                if (!WebConfig.info || !WebConfig.info.card_config)
                    return;
                var card_config = JSON.parse(WebConfig.info.card_config);
                var game_config = card_config[this.game_id];
                var count = 0;
                for (var key in game_config) {
                    this._round_count[count] = parseFloat(key);
                    this._pay_money[count] = game_config[key].money;
                    count++;
                }
            };
            CreateCardRoomBase.prototype.onCheckboxClick = function (name, i, max_num) {
                for (var index = 0; index < max_num; index++) {
                    this._viewUI[name + index].selected = false;
                }
                this._viewUI[name + i].selected = true;
            };
            CreateCardRoomBase.prototype.onRoundCheckboxClick = function (name, i, max_num, e) {
                this.onCheckboxClick(name, i, max_num);
                this._game.cardRoomMgr.RoomRound = this._round_count[i];
                this._game.cardRoomMgr.RoomPay = this._pay_money[i];
                this._viewUI.txt_money.text = this._pay_money[i].toString();
            };
            CreateCardRoomBase.prototype.onPayCheckboxClick = function (name, i, max_num, e) {
                this.onCheckboxClick(name, i, max_num);
                this._game.cardRoomMgr.PayType = i + 1;
            };
            CreateCardRoomBase.prototype.setRoundCheckboxEvent = function (isOn) {
                var name = "box_round";
                var name1 = "cb_round";
                var max_num = 4;
                if (isOn) {
                    for (var index = 0; index < max_num; index++) {
                        this._viewUI[name + index].on(LEvent.CLICK, this, this.onRoundCheckboxClick, [name1, index, max_num]);
                    }
                }
                else {
                    for (var index = 0; index < max_num; index++) {
                        this._viewUI[name + index].off(LEvent.CLICK, this, this.onRoundCheckboxClick, [name1, index, max_num]);
                    }
                }
            };
            CreateCardRoomBase.prototype.setPaytypeCheckboxEvent = function (isOn) {
                var name = "box_pay";
                var name1 = "cb_pay";
                var max_num = 2;
                if (isOn) {
                    for (var index = 0; index < max_num; index++) {
                        this._viewUI[name + index].on(LEvent.CLICK, this, this.onPayCheckboxClick, [name1, index, max_num]);
                    }
                }
                else {
                    for (var index = 0; index < max_num; index++) {
                        this._viewUI[name + index].off(LEvent.CLICK, this, this.onPayCheckboxClick, [name1, index, max_num]);
                    }
                }
            };
            //充值弹框
            CreateCardRoomBase.prototype.chkEnoughMoney = function () {
                var _this = this;
                if (!this._game.sceneObjectMgr.mainPlayer)
                    return false;
                if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < parseInt(this._viewUI.txt_money.text)) {
                    page.TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币不足开房间哦~\n补充点金币去大杀四方吧~"), function () {
                        _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                    }, function () {
                    }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
                    return false;
                }
                return true;
            };
            //按钮点击
            CreateCardRoomBase.prototype.onBtnTweenEnd = function (e, target) {
                var _this = this;
                switch (target) {
                    case this._viewUI.btn_create:
                        if (!this.chkEnoughMoney())
                            return;
                        if (this._game.sceneObjectMgr.story) {
                            this._game.sceneObjectMgr.changeStory(function () {
                                _this._game.sceneObjectMgr.intoStory(_this._game_id, Web_operation_fields.GAME_ROOM_CONFIG_CARD_ROOM.toString(), true, _this._game.cardRoomMgr);
                            });
                        }
                        else {
                            this._game.sceneObjectMgr.intoStory(this._game_id, Web_operation_fields.GAME_ROOM_CONFIG_CARD_ROOM.toString(), true, this._game.cardRoomMgr);
                        }
                        break;
                    default:
                        break;
                }
            };
            CreateCardRoomBase.prototype.onOptHandler = function (optcode, msg) {
                var _this = this;
                if (msg.type == Operation_Fields.OPRATE_CARDROOM) {
                    switch (msg.reason) {
                        case Operation_Fields.OPRATE_CARDROOM_NOT_CARD_ID:
                            page.TongyongPageDef.ins.alertRecharge(StringU.substitute("创建房间失败,没有多余的房间可用,请确认!"), function () {
                            }, function () {
                            }, true, PathGameTongyong.ui_tongyong_general + "btn_qd.png");
                            break;
                        case Operation_Fields.OPRATE_CARDROOM_CREATE_ROOM_NOT_MONEY:
                            page.TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币不足哦~\n补充点金币去大杀四方吧~"), function () {
                                _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                            }, function () {
                            }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
                            break;
                        case Operation_Fields.OPRATE_TELEPORT_MAP_CREATE_ROOM_SUCCESS:
                            this.close();
                            break;
                    }
                }
                else if (msg.type == Operation_Fields.OPRATE_TELEPORT) {
                    switch (msg.reason) {
                        case Operation_Fields.OPRATE_TELEPORT_MAP_CREATE_ROOM_SUCCESS:
                            this.close();
                            break;
                    }
                }
            };
            Object.defineProperty(CreateCardRoomBase.prototype, "game_id", {
                get: function () {
                    return this._game_id;
                },
                set: function (v) {
                    this._game_id = v;
                },
                enumerable: true,
                configurable: true
            });
            CreateCardRoomBase.prototype.onMapOutSuccess = function () {
                page.TongyongPageDef.ins.alertRecharge("房间已解散!", function () {
                }, function () {
                }, true, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
            };
            CreateCardRoomBase.prototype.close = function () {
                if (this._viewUI) {
                    this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                    this.setRoundCheckboxEvent(false);
                    this.setPaytypeCheckboxEvent(false);
                }
                _super.prototype.close.call(this);
            };
            return CreateCardRoomBase;
        }(game.gui.base.Page));
        page.CreateCardRoomBase = CreateCardRoomBase;
    })(page = gametongyong.page || (gametongyong.page = {}));
})(gametongyong || (gametongyong = {}));
//# sourceMappingURL=CreateCardRoomBase.js.map