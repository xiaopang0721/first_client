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
var gamedating;
(function (gamedating) {
    var page;
    (function (page) {
        var HeadChangePage = /** @class */ (function (_super) {
            __extends(HeadChangePage, _super);
            function HeadChangePage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "touxiang.atlas",
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
                this._viewUI.list.hScrollBarSkin = "";
                this._viewUI.list.itemRender = HeadItemRender;
                this._viewUI.list.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.tab.selectHandler = new Handler(this, this.tabselectHandler);
                this._viewUI.tab.selectedIndex = 0;
                this._viewUI.btn_change.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
            };
            HeadChangePage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_SETINFO) {
                    if (data && data.success == 0) {
                        this.close();
                    }
                }
            };
            HeadChangePage.prototype.tabselectHandler = function (index) {
                var arr = [];
                for (var indx = 0; indx < 10; indx++) {
                    arr.push(index * 10 + indx + 1);
                }
                this._viewUI.list.dataSource = arr;
                this._viewUI.list.selectedIndex = -1;
            };
            HeadChangePage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.setData(this._game, cell.dataSource);
                }
            };
            HeadChangePage.prototype.onBtnTweenEnd = function (e, target) {
                if (this._viewUI.btn_change == target) {
                    if (!this._viewUI.list.selectedItem) {
                        this._game.showTips("未选择头像");
                        return;
                    }
                    this._game.network.call_set_info(this._viewUI.list.selectedItem.toString(), (this._viewUI.tab.selectedIndex + 1).toString(), "", "", "", "");
                }
            };
            HeadChangePage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
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
            HeadItemRender.prototype.setData = function (game, data) {
                this._game = game;
                this._data = data;
                this.img_head.skin = DatingPath.ui_dating + "touxiang/head_" + data + ".png";
            };
            return HeadItemRender;
        }(ui.dating.component.HeadRenderTUI));
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=HeadChangePage.js.map