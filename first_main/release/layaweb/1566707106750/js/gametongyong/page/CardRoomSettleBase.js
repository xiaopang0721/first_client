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
* 房卡类型游戏结算页面
*/
var gametongyong;
(function (gametongyong) {
    var page;
    (function (page) {
        var CardRoomSettleBase = /** @class */ (function (_super) {
            __extends(CardRoomSettleBase, _super);
            function CardRoomSettleBase(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isGameEnd = false; //是否结束
                //倒计时
                _this._endTime = _this._game.sync.serverTimeBys + 5;
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            CardRoomSettleBase.prototype.init = function () {
                this._viewUI = this.createView('game_ui.tongyong.JieSuan_FangKaUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            CardRoomSettleBase.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.list_settle.vScrollBarSkin = "";
                this._viewUI.list_settle.scrollBar.elasticDistance = 100;
                this._viewUI.list_settle.itemRender = this.createChildren("game_ui.tongyong.JieSuanRender2UI", ListRecordItem);
                this._viewUI.list_settle.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_settle.dataSource = this.dataSource[3];
                this._isGameEnd = (Number(this.dataSource[0]) + 1) == Number(this.dataSource[4]);
                this.setGameEndBtnState(this._isGameEnd);
            };
            //按钮点击
            CardRoomSettleBase.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_create_room:
                        if (!this._create_room_page_id || this._create_room_page_id == "")
                            throw "创建房间失败,请确认游戏类型及房间信息是否正确!";
                        this._game.uiRoot.general.open(this.create_room_page_id);
                        this.close();
                        break;
                    case this._viewUI.btn_back_hud:
                        this._game.sceneObjectMgr.leaveStory(true);
                        break;
                    default:
                        break;
                }
            };
            // 设置最后结束时的按纽状态
            CardRoomSettleBase.prototype.setGameEndBtnState = function (isEventOn) {
                this._viewUI.lab_xinxi.visible = !this._isGameEnd;
                this._viewUI.btn_create_room.visible = this._isGameEnd;
                this._viewUI.btn_back_hud.visible = this._isGameEnd;
                if (isEventOn) {
                    this._viewUI.btn_create_room.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_back_hud.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                }
                else {
                    this._viewUI.btn_create_room.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_back_hud.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                }
            };
            CardRoomSettleBase.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            CardRoomSettleBase.prototype.onBlackSpriteClick = function () {
                if (!this._isGameEnd)
                    return;
                _super.prototype.onBlackSpriteClick.call(this);
            };
            CardRoomSettleBase.prototype.deltaUpdate = function () {
                var curTime = this._game.sync.serverTimeBys;
                var time = Math.floor(this._endTime - curTime) + 1;
                if (time > 0) {
                    var str = this.dataSource[1] ? "有玩家余额不足，本轮游戏结束" : time + "S后开始第" + (this.dataSource[0] + 2) + "局，本轮共" + this.dataSource[4] + "局";
                    this._viewUI.lab_xinxi.text = str;
                }
                else {
                    // 最后一局不自动关闭
                    this._isClickBlack = true;
                    if (!this._isGameEnd)
                        this.close();
                }
            };
            Object.defineProperty(CardRoomSettleBase.prototype, "game_id", {
                get: function () {
                    return this._game_id;
                },
                set: function (v) {
                    this._game_id = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(CardRoomSettleBase.prototype, "create_room_page_id", {
                get: function () {
                    return this._create_room_page_id;
                },
                set: function (v) {
                    this._create_room_page_id = v;
                },
                enumerable: true,
                configurable: true
            });
            CardRoomSettleBase.prototype.close = function () {
                this.setGameEndBtnState(false);
                _super.prototype.close.call(this);
            };
            return CardRoomSettleBase;
        }(game.gui.base.Page));
        page.CardRoomSettleBase = CardRoomSettleBase;
        var ListRecordItem = /** @class */ (function (_super) {
            __extends(ListRecordItem, _super);
            function ListRecordItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ListRecordItem.prototype.setData = function (game, data) {
                this._game = game;
                this._data = data;
                this.img_bg.visible = this._data.isMain;
                this.img_banker.visible = this._data.isbanker;
                this.lab_name.text = this._data.name;
                this.lab_chip.text = this._data.point;
                this.lab_multiple.text = String(this._data.betmultiple);
                this.lab_point.text = this._data.money;
                this.lbl_totalpoint.text = String(this._data.totalPoint);
                this.lab_name.color = this._data.isMain ? "#cc90ff" : "#ffffff";
                this.lab_chip.color = this._data.isMain ? "#cc90ff" : "#ffffff";
                this.lab_multiple.color = this._data.isMain ? "#cc90ff" : "#ffffff";
                this.lab_point.color = parseFloat(this._data.money) >= 0 ? "#069e00" : "#ff0000";
                this.lbl_totalpoint.color = parseFloat(this._data.money) >= 0 ? "#069e00" : "#ff0000";
            };
            ListRecordItem.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            return ListRecordItem;
        }(ui.game_ui.tongyong.JieSuanRender2UI));
    })(page = gametongyong.page || (gametongyong.page = {}));
})(gametongyong || (gametongyong = {}));
//# sourceMappingURL=CardRoomSettleBase.js.map