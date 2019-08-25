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
    (function (page) {
        var MatchPage = /** @class */ (function (_super) {
            __extends(MatchPage, _super);
            function MatchPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                _this._isNeedDuang = false;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            MatchPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.tongyong.PiPeiUI');
                this.addChild(this._viewUI);
                this._viewUI.box.visible = true;
                // this._viewUI.btn_continue.visible = !this._viewUI.box.visible;
            };
            // 页面打开时执行函数
            MatchPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                if (WebConfig.server_close) {
                    page.TongyongPageDef.ins.alertRecharge(StringU.substitute("为了您更好的游戏体验，服务器正在更新中。为避免造成不必要的损失，更新期间无法进入游戏，给您造成的不便我们深表歉意，感谢您的配合。"), function () {
                    }, function () {
                    }, true, PathGameTongyong.ui_tongyong_general + "btn_qd.png");
                    this._game.sceneObjectMgr.leaveStory(true);
                    this.close();
                    return;
                }
                if (this._game.sceneObjectMgr.story instanceof gamecomponent.story.StoryNormalBase) {
                    this._story = this._game.sceneObjectMgr.story;
                    this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                    this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                    this._story.isMatchGame = this._viewUI.box.visible;
                    this._viewUI.btn_cancle.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                    // this._viewUI.btn_continue.on(LEvent.CLICK, this, this.onBtnClickWithTween)
                }
                else {
                    this.close();
                }
            };
            MatchPage.prototype.onUpdateMapInfo = function () {
                if (this._game.sceneObjectMgr.story.mapinfo && this._viewUI.box.visible) {
                    this.dataSource = false;
                    this.close();
                }
            };
            MatchPage.prototype.onBtnTweenEnd = function (e, target) {
                if (target == this._viewUI.btn_cancle) {
                    this._story.isMatchGame = false;
                }
            };
            MatchPage.prototype.onOptHandler = function (optcode, msg) {
                if (msg.type == Operation_Fields.OPRATE_TELEPORT) { //登录操作错误类型
                    switch (msg.reason) {
                        case Operation_Fields.OPRATE_TELEPORT_MAP_MATHCH_JOIN_SUCESS: // 地图匹配加入成功
                            this._viewUI.box.visible = true;
                            break;
                        case Operation_Fields.OPRATE_TELEPORT_MAP_MATHCH_CANCLE_SUCESS: // 地图匹配取消成功
                            this.dataSource = true;
                            this.close();
                            break;
                        case Operation_Fields.OPRATE_TELEPORT_CAN_NOT_JOIN: //加入游戏失败，条件不允许
                            this._game.showTips("匹配失败，请重新匹配");
                            this.dataSource = true;
                            this.close();
                            break;
                    }
                }
            };
            MatchPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                    this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                }
                _super.prototype.close.call(this);
            };
            return MatchPage;
        }(game.gui.base.Page));
        page.MatchPage = MatchPage;
    })(page = gametongyong.page || (gametongyong.page = {}));
})(gametongyong || (gametongyong = {}));
//# sourceMappingURL=MatchPage.js.map