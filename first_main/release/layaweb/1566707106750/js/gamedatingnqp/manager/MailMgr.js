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
* name 邮件管理器
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var managers;
    (function (managers) {
        var MailMgr = /** @class */ (function (_super) {
            __extends(MailMgr, _super);
            function MailMgr(game) {
                var _this = _super.call(this, game) || this;
                _this._mails = [];
                _this.checkNow = false;
                _this._delta = 60000;
                return _this;
            }
            MailMgr.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_MAILS) {
                    if (data && data.success == 0) {
                        if (data.msg) {
                            this._mails = data.msg.list;
                            this.event(MailMgr.EVENT_CHANGE);
                        }
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_DELMAIL) {
                    if (data && data.success == 0) {
                        if (this._delFun != null) {
                            this._delFun();
                            this._delFun = null;
                        }
                        if (this._mails) {
                            for (var index = 0; index < this._mails.length; index++) {
                                var maildata = this._mails[index];
                                if (maildata && maildata.id == this._del_id) {
                                    this._mails.splice(index, 1);
                                    this.event(MailMgr.EVENT_CHANGE);
                                    return;
                                }
                            }
                        }
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_READMAIL) {
                    if (data && data.success == 0) {
                        this.checkNow = true;
                    }
                }
            };
            MailMgr.prototype.delMail = function (id, fun) {
                this._del_id = id;
                this._delFun = fun;
                this._game.sceneGame.network.call_del_mail(id);
            };
            MailMgr.prototype.readMail = function (id, fun) {
                this._read_id = id;
                this._readFun = fun;
                this._game.sceneGame.network.call_read_mail(id);
            };
            Object.defineProperty(MailMgr.prototype, "mails", {
                get: function () {
                    return this._mails;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MailMgr.prototype, "isShowRed", {
                get: function () {
                    for (var index = 0; index < this._mails.length; index++) {
                        var mail = this._mails[index];
                        if (!mail.isread)
                            return true;
                    }
                    return false;
                },
                enumerable: true,
                configurable: true
            });
            MailMgr.prototype.update = function (diff) {
                if (!this.checkNow) {
                    _super.prototype.update.call(this, diff);
                    return;
                }
                this.deltaUpdate();
                this.checkNow = false;
            };
            MailMgr.prototype.deltaUpdate = function () {
                this._game.sceneGame.network.call_get_mails();
            };
            MailMgr.EVENT_CHANGE = "MailMgr.changge";
            return MailMgr;
        }(gamecomponent.managers.BaseMgr));
        managers.MailMgr = MailMgr;
    })(managers = gamedatingnqp.managers || (gamedatingnqp.managers = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=MailMgr.js.map