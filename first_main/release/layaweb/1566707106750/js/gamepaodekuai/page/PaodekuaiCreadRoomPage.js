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
* 跑得快-创建房间
*/
var gamepaodekuai;
(function (gamepaodekuai) {
    var page;
    (function (page) {
        var PaodekuaiCreadRoomPage = /** @class */ (function (_super) {
            __extends(PaodekuaiCreadRoomPage, _super);
            function PaodekuaiCreadRoomPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._round_count = [5, 10, 15, 20]; // 游戏局数
                _this._pay_money = [3, 6, 9, 12]; // 不同局数的支付金额
                _this._playersTemp = [3, 4]; //可选人数
                _this._cardsTemp = [16, 15, 13, 12]; //可选牌数
                _this._cardsInfo = ["去掉大小王、3个2、1个A", "去掉大小王、3个2、3个A、 1个K", "去掉大小王", "去掉大小王、3个2、1个A"];
                _this._shunTemp = [5, 6]; //顺子几张起
                _this._playerCount = 0; //人数
                _this._cardCount = 0; //牌数
                _this._qiangGuan = 0; //是否抢关
                _this._first = 0; //先手
                _this._shunZiCount = 0; //顺子张数
                _this._guanShang = 0; //是否管上
                _this._baoDi = 0; //报单保底
                _this._siDaiSan = 0; //四带三
                _this._zhaDanA = 0; //3A炸弹
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "jiaru.atlas",
                ];
                _this._isNeedBlack = true;
                return _this;
            }
            // 页面初始化函数
            PaodekuaiCreadRoomPage.prototype.init = function () {
                this._viewUI = this.createView("game_ui.paodekuai.FangKa_ChuangJianUI");
                this.addChild(this._viewUI);
                this._game.cardRoomMgr.clear();
                this.setCardConfig();
                this._game.cardRoomMgr.RoomRound = this._round_count[0];
                this._game.cardRoomMgr.PayType = 1;
                this._game.cardRoomMgr.RoomType = 1;
                for (var i = 0; i < this._round_count.length; i++) {
                    this._viewUI["txt_round" + i].text = this._round_count[i] + "局";
                }
            };
            PaodekuaiCreadRoomPage.prototype.setCardConfig = function () {
                if (!WebConfig.info)
                    return;
                var card_config = JSON.parse(WebConfig.info.card_config);
                var game_config = card_config["paodekuai"];
                var count = 0;
                for (var key in game_config) {
                    this._round_count[count] = parseFloat(key);
                    this._pay_money[count] = game_config[key].money;
                    count++;
                }
            };
            PaodekuaiCreadRoomPage.prototype.onCheckboxClick = function (name, i, max_num) {
                for (var index = 0; index < max_num; index++) {
                    this._viewUI[name + index].selected = false;
                }
                this._viewUI[name + i].selected = true;
            };
            PaodekuaiCreadRoomPage.prototype.onRoundCheckboxClick = function (name, i, max_num, e) {
                this.onCheckboxClick(name, i, max_num);
                this._game.cardRoomMgr.RoomRound = this._round_count[i];
                this._viewUI.txt_money.text = this._pay_money[i].toString();
            };
            PaodekuaiCreadRoomPage.prototype.onPayCheckboxClick = function (name, i, max_num, e) {
                this.onCheckboxClick(name, i, max_num);
                this._game.cardRoomMgr.PayType = i + 1;
            };
            PaodekuaiCreadRoomPage.prototype.onPlayerCheckboxClick = function (name, i, max_num, e) {
                this.onCheckboxClick(name, i, max_num);
                this._playerCount = this._playersTemp[i];
                //3人只有15和16张，4人只有12和13张
                if (this._playerCount == 3) {
                    this._viewUI.cb_cards0.selected = true;
                    this._viewUI.cb_cards1.selected = false;
                    this._viewUI.cb_cards2.selected = false;
                    this._viewUI.cb_cards3.selected = false;
                    this._viewUI.box_cards0.disabled = false;
                    this._viewUI.box_cards1.disabled = false;
                    this._viewUI.box_cards2.disabled = true;
                    this._viewUI.box_cards3.disabled = true;
                    this._cardCount = this._cardsTemp[0];
                    this._viewUI.txt_info.text = this._cardsInfo[0];
                }
                else if (this._playerCount == 4) {
                    this._viewUI.cb_cards2.selected = true;
                    this._viewUI.cb_cards0.selected = false;
                    this._viewUI.cb_cards1.selected = false;
                    this._viewUI.cb_cards3.selected = false;
                    this._viewUI.box_cards0.disabled = true;
                    this._viewUI.box_cards1.disabled = true;
                    this._viewUI.box_cards2.disabled = false;
                    this._viewUI.box_cards3.disabled = false;
                    this._cardCount = this._cardsTemp[2];
                    this._viewUI.txt_info.text = this._cardsInfo[2];
                    this._viewUI.cb_other3.selected = false;
                    this._viewUI.box_other3.disabled = true;
                    this._zhaDanA = 0;
                }
            };
            PaodekuaiCreadRoomPage.prototype.onCardsCheckboxClick = function (name, i, max_num, e) {
                this.onCheckboxClick(name, i, max_num);
                this._cardCount = this._cardsTemp[i];
                this._viewUI.txt_info.text = this._cardsInfo[i];
                //牌数不够，要把3A炸弹禁用了
                if (this._cardCount == 15 || this._cardCount == 13) {
                    this._viewUI.cb_other3.selected = false;
                    this._viewUI.box_other3.disabled = true;
                    this._zhaDanA = 0;
                }
                else {
                    this._viewUI.box_other3.disabled = false;
                    this._zhaDanA = 0;
                }
            };
            PaodekuaiCreadRoomPage.prototype.onQiangGuanCheckboxClick = function (name, i, max_num, e) {
                this.onCheckboxClick(name, i, max_num);
                this._qiangGuan = i == 0 ? 1 : 0;
            };
            PaodekuaiCreadRoomPage.prototype.onFirstCheckboxClick = function (name, i, max_num, e) {
                this.onCheckboxClick(name, i, max_num);
                this._first = i;
            };
            PaodekuaiCreadRoomPage.prototype.onShunCheckboxClick = function (name, i, max_num, e) {
                this.onCheckboxClick(name, i, max_num);
                this._shunZiCount = this._shunTemp[i];
            };
            PaodekuaiCreadRoomPage.prototype.onOtherCheckboxClick = function (i, e) {
                this._viewUI["cb_other" + i].selected = !this._viewUI["cb_other" + i].selected;
                this._guanShang = this._viewUI.cb_other0.selected == true ? 1 : 0;
                this._baoDi = this._viewUI.cb_other1.selected == true ? 1 : 0;
                this._siDaiSan = this._viewUI.cb_other2.selected == true ? 1 : 0;
                this._zhaDanA = this._viewUI.cb_other3.selected == true ? 1 : 0;
            };
            //局数监听
            PaodekuaiCreadRoomPage.prototype.setRoundCheckboxEvent = function (isOn) {
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
            //支付方式监听
            PaodekuaiCreadRoomPage.prototype.setPaytypeCheckboxEvent = function (isOn) {
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
            //人数监听
            PaodekuaiCreadRoomPage.prototype.setPlayerCheckboxEvent = function (isOn) {
                var name = "box_player";
                var name1 = "cb_player";
                var max_num = 2;
                if (isOn) {
                    for (var index = 0; index < max_num; index++) {
                        this._viewUI[name + index].on(LEvent.CLICK, this, this.onPlayerCheckboxClick, [name1, index, max_num]);
                    }
                }
                else {
                    for (var index = 0; index < max_num; index++) {
                        this._viewUI[name + index].off(LEvent.CLICK, this, this.onPlayerCheckboxClick, [name1, index, max_num]);
                    }
                }
            };
            //牌数监听
            PaodekuaiCreadRoomPage.prototype.setCardsCheckboxEvent = function (isOn) {
                var name = "box_cards";
                var name1 = "cb_cards";
                var max_num = 4;
                if (isOn) {
                    for (var index = 0; index < max_num; index++) {
                        this._viewUI[name + index].on(LEvent.CLICK, this, this.onCardsCheckboxClick, [name1, index, max_num]);
                    }
                }
                else {
                    for (var index = 0; index < max_num; index++) {
                        this._viewUI[name + index].off(LEvent.CLICK, this, this.onCardsCheckboxClick, [name1, index, max_num]);
                    }
                }
            };
            //抢关监听
            PaodekuaiCreadRoomPage.prototype.setQiangGuanCheckboxEvent = function (isOn) {
                var name = "box_qiang";
                var name1 = "cb_qiang";
                var max_num = 2;
                if (isOn) {
                    for (var index = 0; index < max_num; index++) {
                        this._viewUI[name + index].on(LEvent.CLICK, this, this.onQiangGuanCheckboxClick, [name1, index, max_num]);
                    }
                }
                else {
                    for (var index = 0; index < max_num; index++) {
                        this._viewUI[name + index].off(LEvent.CLICK, this, this.onQiangGuanCheckboxClick, [name1, index, max_num]);
                    }
                }
            };
            //首发监听
            PaodekuaiCreadRoomPage.prototype.setFirstCheckboxEvent = function (isOn) {
                var name = "box_first";
                var name1 = "cb_first";
                var max_num = 2;
                if (isOn) {
                    for (var index = 0; index < max_num; index++) {
                        this._viewUI[name + index].on(LEvent.CLICK, this, this.onFirstCheckboxClick, [name1, index, max_num]);
                    }
                }
                else {
                    for (var index = 0; index < max_num; index++) {
                        this._viewUI[name + index].off(LEvent.CLICK, this, this.onFirstCheckboxClick, [name1, index, max_num]);
                    }
                }
            };
            //顺子监听
            PaodekuaiCreadRoomPage.prototype.setShunCheckboxEvent = function (isOn) {
                var name = "box_shun";
                var name1 = "cb_shun";
                var max_num = 2;
                if (isOn) {
                    for (var index = 0; index < max_num; index++) {
                        this._viewUI[name + index].on(LEvent.CLICK, this, this.onShunCheckboxClick, [name1, index, max_num]);
                    }
                }
                else {
                    for (var index = 0; index < max_num; index++) {
                        this._viewUI[name + index].off(LEvent.CLICK, this, this.onShunCheckboxClick, [name1, index, max_num]);
                    }
                }
            };
            //其他规则监听
            PaodekuaiCreadRoomPage.prototype.setOtherCheckboxEvent = function (isOn) {
                var name = "box_other";
                var max_num = 4;
                if (isOn) {
                    for (var index = 0; index < max_num; index++) {
                        this._viewUI[name + index].on(LEvent.CLICK, this, this.onOtherCheckboxClick, [index]);
                    }
                }
                else {
                    for (var index = 0; index < max_num; index++) {
                        this._viewUI[name + index].off(LEvent.CLICK, this, this.onOtherCheckboxClick, [index]);
                    }
                }
            };
            //充值弹框
            PaodekuaiCreadRoomPage.prototype.chkEnoughMoney = function () {
                var _this = this;
                if (!this._game.sceneObjectMgr.mainPlayer)
                    return false;
                if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < parseInt(this._viewUI.txt_money.text)) {
                    TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币不足开房间哦~\n补充点金币去大杀四方吧~"), function () {
                        _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                    }, function () {
                    }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
                    return false;
                }
                return true;
            };
            //按钮点击
            PaodekuaiCreadRoomPage.prototype.onBtnTweenEnd = function (e, target) {
                var _this = this;
                switch (target) {
                    case this._viewUI.btn_create:
                        if (!this.chkEnoughMoney())
                            return;
                        var temp = {
                            unit_count: this._playerCount,
                            cards_count: this._cardCount,
                            qiangguan: this._qiangGuan,
                            first: this._first,
                            shunzi: this._shunZiCount,
                            guanshang: this._guanShang,
                            baodi: this._baoDi,
                            sidaisan: this._siDaiSan,
                            bombA: this._zhaDanA,
                        };
                        this._game.cardRoomMgr.RoomType = 1;
                        this._game.cardRoomMgr.Agrs = JSON.stringify(temp);
                        if (this._game.sceneObjectMgr.story) {
                            this._game.sceneObjectMgr.changeStory(function () {
                                _this._game.sceneObjectMgr.intoStory("paodekuai", Web_operation_fields.GAME_ROOM_CONFIG_CARD_ROOM.toString(), true, _this._game.cardRoomMgr);
                            });
                        }
                        else {
                            this._game.sceneObjectMgr.intoStory("paodekuai", Web_operation_fields.GAME_ROOM_CONFIG_CARD_ROOM.toString(), true, this._game.cardRoomMgr);
                            this.close();
                        }
                        break;
                    default:
                        break;
                }
            };
            //地图监听
            PaodekuaiCreadRoomPage.prototype.onUpdateMapInfo = function () {
                var mapInfo = this._game.sceneObjectMgr.mapInfo;
                if (!mapInfo) {
                    this.setCardRoomData();
                }
                else {
                    this.close();
                }
            };
            //地图中创建房间
            PaodekuaiCreadRoomPage.prototype.setCardRoomData = function () {
                var story = this._game.sceneObjectMgr.story;
                if (story) {
                    story.enterMap();
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                }
            };
            PaodekuaiCreadRoomPage.prototype.onOptHandler = function (optcode, msg) {
                var _this = this;
                if (msg.type == Operation_Fields.OPRATE_CARDROOM)
                    switch (msg.reason) {
                        case Operation_Fields.OPRATE_CARDROOM_NOT_CARD_ID:
                            TongyongPageDef.ins.alertRecharge(StringU.substitute("创建房间失败,没有多余的房间可用,请确认!"), function () {
                            }, function () {
                            }, true, PathGameTongyong.ui_tongyong_general + "btn_qd.png");
                            break;
                        case Operation_Fields.OPRATE_CARDROOM_CREATE_ROOM_NOT_MONEY:
                            TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币不足哦~\n补充点金币去大杀四方吧~"), function () {
                                _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                            }, function () {
                            }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
                            break;
                        default:
                            break;
                    }
            };
            // 页面打开时执行函数
            PaodekuaiCreadRoomPage.prototype.onOpen = function () {
                if (!this._round_count || this._round_count.length <= 0 ||
                    !this._pay_money || this._pay_money.length <= 0)
                    throw "创建房间失败,请确认游戏类型及房间信息是否正确!";
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_create.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this.setRoundCheckboxEvent(true);
                this.setPaytypeCheckboxEvent(true);
                this.setPlayerCheckboxEvent(true);
                this.setCardsCheckboxEvent(true);
                this.setQiangGuanCheckboxEvent(true);
                this.setFirstCheckboxEvent(true);
                this.setShunCheckboxEvent(true);
                this.setOtherCheckboxEvent(true);
                this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this.updateViewUI();
                this._viewUI.panel_para.vScrollBarSkin = "";
                this._viewUI.panel_para.vScrollBar.autoHide = true;
                this._viewUI.panel_para.vScrollBar.elasticDistance = 100;
            };
            PaodekuaiCreadRoomPage.prototype.updateViewUI = function () {
                this._viewUI.cb_round0.selected = true;
                this._viewUI.cb_pay0.selected = true;
                this._viewUI.cb_player0.selected = true;
                this._playerCount = 3;
                this._viewUI.cb_cards0.selected = true;
                this._cardCount = 16;
                this._viewUI.txt_info.text = "去掉大小王、3个2、1个A";
                this._viewUI.cb_qiang1.selected = true;
                this._qiangGuan = 0;
                this._viewUI.cb_first0.selected = true;
                this._first = 0;
                this._viewUI.cb_shun0.selected = true;
                this._shunZiCount = 5;
                this._viewUI.cb_other0.selected = true;
                this._guanShang = 1;
                this._viewUI.cb_other2.selected = true;
                this._baoDi = 0;
                this._siDaiSan = 1;
                this._zhaDanA = 0;
                this._viewUI.txt_money.text = this._pay_money[0].toString();
                this._viewUI.box_cards2.disabled = true;
                this._viewUI.box_cards3.disabled = true;
                //存起来
                var temp = {
                    unit_count: this._playerCount,
                    cards_count: this._cardCount,
                    qiangguan: this._qiangGuan,
                    first: this._first,
                    shunzi: this._shunZiCount,
                    guanshang: this._guanShang,
                    baodi: this._baoDi,
                    sidaisan: this._siDaiSan,
                    bombA: this._zhaDanA,
                };
                this._game.cardRoomMgr.Agrs = JSON.stringify(temp);
            };
            PaodekuaiCreadRoomPage.prototype.onMapOutSuccess = function () {
                TongyongPageDef.ins.alertRecharge("房间已解散!", function () {
                }, function () {
                }, true, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
            };
            PaodekuaiCreadRoomPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                    this.setRoundCheckboxEvent(false);
                    this.setPaytypeCheckboxEvent(false);
                    this.setPlayerCheckboxEvent(false);
                    this.setCardsCheckboxEvent(false);
                    this.setQiangGuanCheckboxEvent(false);
                    this.setFirstCheckboxEvent(false);
                    this.setShunCheckboxEvent(false);
                    this.setOtherCheckboxEvent(false);
                }
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                _super.prototype.close.call(this);
            };
            return PaodekuaiCreadRoomPage;
        }(game.gui.base.Page));
        page.PaodekuaiCreadRoomPage = PaodekuaiCreadRoomPage;
    })(page = gamepaodekuai.page || (gamepaodekuai.page = {}));
})(gamepaodekuai || (gamepaodekuai = {}));
//# sourceMappingURL=PaodekuaiCreadRoomPage.js.map