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
var gametongyong;
(function (gametongyong) {
    var page;
    (function (page_1) {
        var TongyongHudPage = /** @class */ (function (_super) {
            __extends(TongyongHudPage, _super);
            function TongyongHudPage() {
                var _this = _super.call(this) || this;
                _this.RULE_PAGE = 101;
                _this._qifuNameStr = ["xs", "px", "gsy", "gg", "cs", "tdg"];
                return _this;
            }
            /**
             *
             * @param game
             * @param gameId 游戏id
             * @param isCardRoomType 是否房卡类型
             */
            TongyongHudPage.prototype.onOpen = function (game, gameId, isCardRoomType) {
                this._game = game;
                this._gameId = gameId;
                this._isCardRoomType = isCardRoomType;
                this.btn_record.on(LEvent.CLICK, this, this.onBtnClickHandle);
                this.btn_help.on(LEvent.CLICK, this, this.onBtnClickHandle);
                this.btn_gren.on(LEvent.CLICK, this, this.onBtnClickHandle);
                this.btn_back.on(LEvent.CLICK, this, this.onBtnClickHandle);
                this.btn_fresh.on(LEvent.CLICK, this, this.onBtnClickHandle);
                // this.btn_vip.on(LEvent.CLICK, this, this.onBtnClickHandle);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                this.onUpdatePlayerInfo();
            };
            TongyongHudPage.prototype.onUpdatePlayerInfo = function (first) {
                if (first === void 0) { first = true; }
                if (!this._game)
                    return;
                if (!WebConfig.info)
                    return;
                var mainPlayer = this._game.sceneObjectMgr.mainPlayer;
                if (!mainPlayer)
                    return;
                var playerInfo = this._game.sceneObjectMgr.mainPlayer.playerInfo;
                this.clip_id.text = "ID:" + playerInfo.userid;
                this.txt_name.text = playerInfo.nickname;
                if (!this._clip_money) {
                    this._clip_money = new TongyongClip(TongyongClip.MONEY_FONT2);
                    this._clip_money.x = this.clip_money.x;
                    this._clip_money.y = this.clip_money.y;
                    this.clip_money.parent && this.clip_money.parent.addChild(this._clip_money);
                    this.clip_money.removeSelf();
                }
                this._clip_money.setText(EnumToString.getPointBackNum(playerInfo.money, 2) + "", true, false, playerInfo.money < 0 ? PathGameTongyong.ui_tongyong_general + "tu_jianhao.png" : null);
                if (playerInfo.headimg) {
                    this.btn_gren.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + playerInfo.headimg + ".png";
                    if (playerInfo.qifu_type > 0 && mainPlayer.GetQiFuEndTime(playerInfo.qifu_type - 1) > this._game.sync.serverTimeBys) {
                        this.btn_gren.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._qifuNameStr[playerInfo.qifu_type - 1] + ".png";
                    }
                }
                this.img_txk.visible = playerInfo.vip_level > 0;
                if (this.img_txk.visible) {
                    this.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + playerInfo.vip_level + ".png";
                }
            };
            TongyongHudPage.prototype.onBtnClickHandle = function (e) {
                var _this = this;
                if (!this._game)
                    return;
                this._game.uiRoot.btnTween(e.currentTarget);
                switch (e.currentTarget) {
                    case this.btn_help: //规则
                        this._game.uiRoot.general.open(this._gameId + this.RULE_PAGE);
                        break;
                    case this.btn_gren: //个人信息
                        this._game.uiRoot.general.open(DatingPageDef.PAGE_XINXI);
                        break;
                    case this.btn_fresh: //充值
                        this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                        break;
                    // case this.btn_vip://VIP
                    // 	this._game.uiRoot.general.open(DatingPageDef.PAGE_VIP);
                    // 	break;
                    case this.btn_record: //战绩
                        this._game.uiRoot.general.open(page_1.TongyongPageDef.PAGE_TONGYONG_RECORD, function (page) {
                            page.dataSource = {
                                isCardRoomType: _this._isCardRoomType,
                                gameid: _this._gameId
                            };
                        });
                        break;
                    case this.btn_back: //返回大厅
                        this._game.uiRoot.HUD.closeAll();
                        this._game.uiRoot.HUD.open(DatingPageDef.PAGE_HUD);
                        break;
                    default:
                        break;
                }
            };
            TongyongHudPage.prototype.destroy = function () {
                if (this._game && this._game.sceneObjectMgr) {
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                }
                this.btn_record.off(LEvent.CLICK, this, this.onBtnClickHandle);
                this.btn_help.off(LEvent.CLICK, this, this.onBtnClickHandle);
                this.btn_gren.off(LEvent.CLICK, this, this.onBtnClickHandle);
                this.btn_back.off(LEvent.CLICK, this, this.onBtnClickHandle);
                this.btn_fresh.off(LEvent.CLICK, this, this.onBtnClickHandle);
                // this.btn_vip.off(LEvent.CLICK, this, this.onBtnClickHandle);
                if (this._clip_money) {
                    this._clip_money.removeSelf();
                    this._clip_money.destroy();
                    this._clip_money = null;
                }
                _super.prototype.destroy.call(this);
            };
            return TongyongHudPage;
        }(ui.game_ui.tongyong.HudUI));
        page_1.TongyongHudPage = TongyongHudPage;
    })(page = gametongyong.page || (gametongyong.page = {}));
})(gametongyong || (gametongyong = {}));
//# sourceMappingURL=TongyongHudPage.js.map