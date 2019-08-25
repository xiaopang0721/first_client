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
var gamelonghu;
(function (gamelonghu) {
    var page;
    (function (page) {
        var LonghuVSPage = /** @class */ (function (_super) {
            __extends(LonghuVSPage, _super);
            function LonghuVSPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                _this._asset = [
                    Path_game_longhu.atlas_game_ui + "longhu.atlas",
                    Path_game_longhu.atlas_game_ui + "longhu/effect/bipai.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            LonghuVSPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.longhu.BiPaiUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            LonghuVSPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._clip = new LonghuClip(LonghuClip.JU_FONT);
                this._clip.anchorX = 0.5;
                this._clip.anchorY = 0.5;
                this._clip.setText(this._game.sceneObjectMgr.mapInfo.GetRound() + "", true, false);
                this._clip.x = this._viewUI.clip_turn.x;
                this._clip.y = this._viewUI.clip_turn.y;
                this._viewUI.clip_turn.parent.addChild(this._clip);
                this._viewUI.clip_turn.visible = false;
                this._viewUI.ani1.on(LEvent.COMPLETE, this, this.onPlayComplte);
                this._viewUI.ani1.play(0, false);
            };
            LonghuVSPage.prototype.onPlayComplte = function () {
                this.close();
            };
            LonghuVSPage.prototype.close = function () {
                if (this._viewUI) {
                }
                _super.prototype.close.call(this);
            };
            return LonghuVSPage;
        }(game.gui.base.Page));
        page.LonghuVSPage = LonghuVSPage;
    })(page = gamelonghu.page || (gamelonghu.page = {}));
})(gamelonghu || (gamelonghu = {}));
//# sourceMappingURL=LonghuVSPage.js.map