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
var gameshuiguoji;
(function (gameshuiguoji) {
    var page;
    (function (page) {
        var Path_game_shuiguoji = gameshuiguoji.data.Path;
        var DATA = [
            {
                icon: Path_game_shuiguoji.ui_shuiguoji + "tu_bar100.png",
                syPer: 0.5,
                curJD: 0,
                totalJD: 20
            },
            {
                icon: Path_game_shuiguoji.ui_shuiguoji + "tu_77_1.png",
                syPer: 0.3,
                curJD: 0,
                totalJD: 20
            },
            {
                icon: Path_game_shuiguoji.ui_shuiguoji + "tu_xx.png",
                syPer: 0.15,
                curJD: 0,
                totalJD: 20
            },
            {
                icon: Path_game_shuiguoji.ui_shuiguoji + "tu_xg.png",
                syPer: 0.05,
                curJD: 0,
                totalJD: 20
            }
        ];
        var ShuiGuoJiJackpotPage = /** @class */ (function (_super) {
            __extends(ShuiGuoJiJackpotPage, _super);
            function ShuiGuoJiJackpotPage() {
                var _this = _super.call(this) || this;
                _this._jacketMoney = 0;
                _this._isPlayEff = false;
                _this._jackpotClip = new ShuiguojiClip(ShuiguojiClip.SGJ_GOLD);
                _this._jackpotClip.x = _this.clip_num.x;
                _this._jackpotClip.y = _this.clip_num.y;
                _this._jackpotClip.scaleX = _this.clip_num.scaleX;
                _this._jackpotClip.scaleY = _this.clip_num.scaleY;
                _this._jackpotClip.anchorX = _this.clip_num.anchorX;
                _this._jackpotClip.anchorY = _this.clip_num.anchorY;
                _this.clip_num.parent.addChild(_this._jackpotClip);
                _this.clip_num.visible = false;
                _this.box_info.visible = false;
                return _this;
            }
            ShuiGuoJiJackpotPage.prototype.onOpen = function (game) {
                this._game = game;
                this.btn_xia.on(LEvent.CLICK, this, this.onBtnClickHandle);
                this.btn_shang.on(LEvent.CLICK, this, this.onBtnClickHandle);
                this.box_info.visible = false;
                this.btn_xia.visible = true;
                this.list_jack.vScrollBarSkin = "";
                this.list_jack.scrollBar.elasticDistance = 100;
                this.list_jack.itemRender = ListJiangCiItem;
                this.list_jack.renderHandler = new Handler(this, this.renderHandler);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE, this, this.updateMainUnit);
                this._game.sceneObjectMgr.on(ShuiguojiMapInfo.EVENT_JACKET_UPDATE, this, this.updateJackpot);
                this._isPlayEff = false;
                this._jacketMoney = 0;
                this.onUpdateMapInfo();
                this.updateMainUnit();
                this.onUpdatePlayerInfo();
                this.updateJackpot();
            };
            ShuiGuoJiJackpotPage.prototype.onUpdateMapInfo = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._sgjMapInfo = mapinfo;
                if (mapinfo) {
                    this.updateJackpot();
                }
            };
            ShuiGuoJiJackpotPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            ShuiGuoJiJackpotPage.prototype.updateJackpot = function () {
                if (this._sgjMapInfo) {
                    this._jackpotClip.setText(EnumToString.getPointBackNum(this._sgjMapInfo.GetJackpot() / 1000 + this._jacketMoney, 2), true);
                }
            };
            ShuiGuoJiJackpotPage.prototype.setJacketMoney = function (val) {
                this._jacketMoney = val;
                this.updateJackpot();
            };
            ShuiGuoJiJackpotPage.prototype.setPlayEff = function (val) {
                this._isPlayEff = val;
                if (!val)
                    this.onUpdatePlayerInfo();
            };
            ShuiGuoJiJackpotPage.prototype.updateMainUnit = function () {
                if (this._mainPlayer) {
                    //先移除旧的
                    this._mainPlayer.removeListene(PlayerDataField.PLAYERDATA_INT_SGJ_COUNT, this, this.onUpdatePlayerInfo);
                }
                this._mainPlayer = this._game.sceneObjectMgr.mainPlayer;
                if (this._mainPlayer) {
                    this._mainPlayer.AddListen(PlayerDataField.PLAYERDATA_INT_SGJ_COUNT, this, this.onUpdatePlayerInfo);
                    this.onUpdatePlayerInfo();
                }
            };
            ShuiGuoJiJackpotPage.prototype.onUpdatePlayerInfo = function (first) {
                if (first === void 0) { first = true; }
                if (!WebConfig.info)
                    return;
                if (this._isPlayEff)
                    return;
                var data = [];
                for (var i = 0; i < DATA.length; i++) {
                    var obj = {
                        curCount: this._mainPlayer ? this._mainPlayer.GetSgjCount(i) : 0,
                        temp: DATA[i]
                    };
                    data.push(obj);
                }
                this.list_jack.dataSource = data;
            };
            ShuiGuoJiJackpotPage.prototype.onBtnClickHandle = function (e) {
                if (!this._game)
                    return;
                this._game.uiRoot.btnTween(e.currentTarget);
                switch (e.currentTarget) {
                    case this.btn_xia:
                        this.box_info.y = -this.box_info.height;
                        this.box_info.visible = true;
                        Laya.Tween.to(this.box_info, { y: 0 }, 400, Laya.Ease.linearNone);
                        this.btn_xia.visible = false;
                        break;
                    case this.btn_shang:
                        this.box_info.y = 0;
                        Laya.Tween.to(this.box_info, { y: -this.box_info.height }, 400, Laya.Ease.linearNone, Handler.create(this, this.shangCOmplete, null, true));
                        break;
                    default:
                        break;
                }
            };
            ShuiGuoJiJackpotPage.prototype.shangCOmplete = function () {
                this.btn_xia.visible = true;
            };
            ShuiGuoJiJackpotPage.prototype.destroy = function () {
                if (this._sgjMapInfo) {
                    this._sgjMapInfo = null;
                }
                if (this._mainPlayer) {
                    //先移除旧的
                    this._mainPlayer.removeListene(PlayerDataField.PLAYERDATA_INT_SGJ_COUNT, this, this.onUpdatePlayerInfo);
                    this._mainPlayer = null;
                }
                if (this._game) {
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE, this, this.updateMainUnit);
                    this._game.sceneObjectMgr.off(ShuiguojiMapInfo.EVENT_JACKET_UPDATE, this, this.updateJackpot);
                }
                this.btn_xia.off(LEvent.CLICK, this, this.onBtnClickHandle);
                this.btn_shang.off(LEvent.CLICK, this, this.onBtnClickHandle);
                if (this._jackpotClip) {
                    this._jackpotClip.removeSelf();
                    this._jackpotClip.destroy();
                    this._jackpotClip = null;
                }
                _super.prototype.destroy.call(this);
            };
            return ShuiGuoJiJackpotPage;
        }(ui.game_ui.shuiguoji.JiangCiUI));
        page.ShuiGuoJiJackpotPage = ShuiGuoJiJackpotPage;
        var ListJiangCiItem = /** @class */ (function (_super) {
            __extends(ListJiangCiItem, _super);
            function ListJiangCiItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ListJiangCiItem.prototype.setData = function (game, data) {
                this._game = game;
                this._data = data;
                var syPer = data.temp.syPer;
                var curJD = data.curCount;
                var totalJD = data.temp.totalJD;
                this.txt_title.text = syPer + "%";
                this.img_icon.skin = data.temp.icon;
                this.txt_jindu.text = curJD + "/" + totalJD;
                this.pro_jindu.value = curJD / totalJD;
            };
            return ListJiangCiItem;
        }(ui.game_ui.shuiguoji.component.JiangCiMiZiUI));
    })(page = gameshuiguoji.page || (gameshuiguoji.page = {}));
})(gameshuiguoji || (gameshuiguoji = {}));
//# sourceMappingURL=ShuiGuoJiJackpotPage.js.map