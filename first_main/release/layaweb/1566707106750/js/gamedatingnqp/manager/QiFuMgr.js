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
var gamedatingnqp;
(function (gamedatingnqp) {
    var managers;
    (function (managers) {
        var QiFuMgr = /** @class */ (function (_super) {
            __extends(QiFuMgr, _super);
            function QiFuMgr() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._qifuList = [];
                return _this;
            }
            QiFuMgr.prototype.getQiFuList = function () {
                return this._qifuList;
            };
            QiFuMgr.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_GETPLAYERQIFU) {
                    if (data && data.success == 0) {
                        this._qifuList = data.msg.list;
                        this.event(QiFuMgr.QIFU_CHANGE, 1);
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_PLAYERQIFU) {
                    if (data && data.success == 0) {
                        this._qifuList = data.msg.list;
                        this.event(QiFuMgr.QIFU_CHANGE, 1);
                    }
                }
            };
            Object.defineProperty(QiFuMgr.prototype, "roomPay", {
                get: function () {
                    var story = this._game.sceneGame.sceneObjectMgr.story;
                    if (story && story instanceof StoryRoomCardBase && story.isCardRoomMaster) {
                        return gamedatingnqp.DatingGame.ins.cardRoomMgr.RoomPay;
                    }
                    return 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(QiFuMgr.prototype, "isCanQiFu", {
                get: function () {
                    var mapinfo = this._game.sceneGame.sceneObjectMgr.mapInfo;
                    if (!mapinfo)
                        return false;
                    var gameid = mapinfo.id;
                    if (!gameid)
                        return false;
                    var story = this._game.sceneGame.sceneObjectMgr.story;
                    if (!story)
                        return false;
                    var main_unit = this._game.sceneGame.sceneObjectMgr.mainUnit;
                    if (!main_unit)
                        return false;
                    if (story instanceof StoryNormalBase) { //单人场
                        var pageDef = getPageDef(gameid);
                        if (pageDef && pageDef["__qifulimit"]) {
                            if (main_unit.IsIsDefeated() || main_unit.IsGiveUp()) { //比输或者弃牌可以祈福
                                return true;
                            }
                            if (mapinfo.GetPlayState() == 1) { //游戏进行中不可以祈福
                                return false;
                            }
                        }
                        else if (mapinfo.GetPlayState() == 1) { //游戏进行中不可以祈福
                            return false;
                        }
                    }
                    else if (story instanceof StoryBaiRenBase) { //百人场
                        if (main_unit.GetIndex() == mapinfo.GetBankerSeat()) { //当庄不可以祈福
                            return false;
                        }
                        if (main_unit.IsBet()) { //下过注不可以祈福
                            return false;
                        }
                    }
                    else if (story instanceof StoryRoomCardBase) { //房卡
                    }
                    else if (story instanceof StoryFishBase) { //捕鱼
                    }
                    return true;
                },
                enumerable: true,
                configurable: true
            });
            QiFuMgr.prototype.getData = function () {
                this._game.sceneGame.network.call_get_qifu_list();
            };
            QiFuMgr.prototype.clear = function (fource) {
                if (fource)
                    _super.prototype.clear.call(this, fource);
                this._qifuList = [];
            };
            QiFuMgr.QIFU_CHANGE = "QiFuMgr.changge";
            return QiFuMgr;
        }(gamecomponent.managers.BaseMgr));
        managers.QiFuMgr = QiFuMgr;
    })(managers = gamedatingnqp.managers || (gamedatingnqp.managers = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=QiFuMgr.js.map