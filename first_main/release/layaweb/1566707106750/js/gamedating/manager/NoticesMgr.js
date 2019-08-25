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
* name 公告管理器
*/
var gamedating;
(function (gamedating) {
    var managers;
    (function (managers) {
        var NoticesMgr = /** @class */ (function (_super) {
            __extends(NoticesMgr, _super);
            function NoticesMgr(game) {
                var _this = _super.call(this, game) || this;
                //客户端制造公告接口 停服公告专用
                _this._content = "";
                _this._notices = [];
                _this._delta = 10000;
                return _this;
            }
            NoticesMgr.prototype.init = function () {
                this._game.sceneGame.network.addHanlder(Protocols.SMSG_SEND_NOTICES, this, this.onNoticesUpdate);
            };
            NoticesMgr.prototype.onNoticesUpdate = function (code, s2c) {
                var _this = this;
                if (WebConfig.server_close)
                    return; //更新期间拒收其他公告
                if (!s2c || !s2c.content || s2c.content.length > 100)
                    return;
                if (this._notices.length > 100) {
                    this._notices.length = 0;
                }
                this._notices[this._notices.length] = s2c.content;
                if (this._game.uiRoot.top.isOpened(DatingPageDef.PAGE_GONGGAO)) {
                    this.event(NoticesMgr.EVENT_CHANGE);
                }
                else {
                    this._game.uiRoot.top.open(DatingPageDef.PAGE_GONGGAO, function (page) {
                        page.setSpeed(_this._notices.length);
                    });
                }
            };
            NoticesMgr.prototype.makeNotice = function (content) {
                var _this = this;
                Laya.timer.loop(20000, this, this.onLoopNotice);
                this._content = content;
                this._notices[this._notices.length] = this._content;
                if (this._game.uiRoot.top.isOpened(DatingPageDef.PAGE_GONGGAO)) {
                    this.event(NoticesMgr.EVENT_CHANGE);
                }
                else {
                    this._game.uiRoot.top.open(DatingPageDef.PAGE_GONGGAO, function (page) {
                        page.setSpeed(_this._notices.length);
                    });
                }
            };
            NoticesMgr.prototype.onLoopNotice = function () {
                var _this = this;
                this._notices[this._notices.length] = this._content;
                if (this._game.uiRoot.top.isOpened(DatingPageDef.PAGE_GONGGAO)) {
                    this.event(NoticesMgr.EVENT_CHANGE);
                }
                else {
                    this._game.uiRoot.top.open(DatingPageDef.PAGE_GONGGAO, function (page) {
                        page.setSpeed(_this._notices.length);
                    });
                }
            };
            NoticesMgr.prototype.getNotice = function () {
                if (this._notices.length > 0) {
                    return this._notices.shift();
                }
                return null;
            };
            NoticesMgr.prototype.clear = function (fource) {
                this._game.sceneGame.network.removeHanlder(Protocols.SMSG_SEND_NOTICES, this, this.onNoticesUpdate);
                Laya.timer.clearAll(this);
            };
            NoticesMgr.EVENT_CHANGE = "NoticesMgr.changge";
            return NoticesMgr;
        }(gamecomponent.managers.BaseMgr));
        managers.NoticesMgr = NoticesMgr;
    })(managers = gamedating.managers || (gamedating.managers = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=NoticesMgr.js.map