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
* name 修改头像
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page) {
        var HeadChangePage = /** @class */ (function (_super) {
            __extends(HeadChangePage, _super);
            function HeadChangePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "geren.atlas",
                    DatingPath.atlas_dating_ui + "tongyong.atlas",
                ];
                _this._isNeedDuang = true;
                return _this;
            }
            // 页面初始化函数
            HeadChangePage.prototype.init = function () {
                this._viewUI = this.createView("dating.TouXiangUI");
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            HeadChangePage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.list.vScrollBarSkin = "";
                this._viewUI.list.itemRender = HeadItemRender;
                this._viewUI.list.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.tab.selectHandler = new Handler(this, this.tabselectHandler);
                this._viewUI.tab.selectedIndex = this._selectIndex = 0;
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdateInfo);
            };
            HeadChangePage.prototype.onUpdateInfo = function () {
                this.tabselectHandler(this._selectIndex);
            };
            HeadChangePage.prototype.tabselectHandler = function (index) {
                this._selectIndex = index;
                if (!this._arr) {
                    this._arr = [];
                    for (var indx = 0; indx < 11; indx++) {
                        this._arr.push(indx + 1);
                    }
                }
                this._viewUI.list.dataSource = this._arr;
            };
            HeadChangePage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource, index, this._viewUI, this._viewUI.tab.selectedIndex);
                }
            };
            HeadChangePage.prototype.onBtnTweenEnd = function (e, target) {
            };
            HeadChangePage.prototype.close = function () {
                if (this._viewUI) {
                }
                _super.prototype.close.call(this);
            };
            return HeadChangePage;
        }(game.gui.base.Page));
        page.HeadChangePage = HeadChangePage;
        var HeadItemRender = /** @class */ (function (_super) {
            __extends(HeadItemRender, _super);
            function HeadItemRender() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            HeadItemRender.prototype.setData = function (game, data, index, view, selectedIndex) {
                this._game = game;
                this._data = data;
                this._index = index;
                this._viewUI = view;
                this._selectIndex = selectedIndex;
                var mainPlayer = this._game.sceneGame.sceneObjectMgr.mainPlayer;
                if (!mainPlayer)
                    return;
                var playerInfo = mainPlayer.playerInfo;
                var skin;
                var headInfo;
                if (this._selectIndex == 0) {
                    skin = DatingPath.ui_dating + "touxiang/tu_tx";
                    headInfo = playerInfo.headimg;
                }
                else {
                    skin = DatingPath.ui_dating + "touxiang/tu_txk";
                    headInfo = playerInfo.headKuang;
                }
                this.img_head.skin = skin + data + ".png";
                if (headInfo == data.toString()) {
                    this.img_select.visible = true;
                }
                else {
                    this.img_select.visible = false;
                }
                ;
                var isGet = this.judgeGet(Number(index));
                if (!isGet) {
                    this.img_suo.visible = true;
                }
                else {
                    this.img_suo.visible = false;
                }
                this.on(LEvent.CLICK, this, this.onBtnClick, [index]);
            };
            HeadItemRender.prototype.judgeGet = function (index) {
                var isGet = false;
                var mainPlayer = this._game.sceneGame.sceneObjectMgr.mainPlayer;
                if (!mainPlayer)
                    return;
                var playerInfo = mainPlayer.playerInfo;
                if (index >= 10) {
                    //首充获得的
                    isGet = playerInfo.is_get_fitst_pay;
                }
                else {
                    //是否获得
                    //vip获得的头像 
                    isGet = mainPlayer.GetVipAwardReceived(index);
                }
                return isGet;
            };
            HeadItemRender.prototype.onBtnClick = function (index) {
                if (!this.judgeGet(index)) {
                    this._game.showTips("还未获得哦~");
                    return;
                }
                //0表示头像 1表示头像框
                this._game.network.call_set_role_info(this._viewUI.tab.selectedIndex, this._data.toString());
            };
            return HeadItemRender;
        }(ui.nqp.dating.component.HeadRenderTUI));
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=HeadChangePage.js.map