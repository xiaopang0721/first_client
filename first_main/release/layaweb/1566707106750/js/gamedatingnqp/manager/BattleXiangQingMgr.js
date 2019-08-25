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
        var BattleXiangQingMgr = /** @class */ (function (_super) {
            __extends(BattleXiangQingMgr, _super);
            function BattleXiangQingMgr() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._dataInfoList = {};
                _this._mapInfoList = {};
                return _this;
            }
            Object.defineProperty(BattleXiangQingMgr, "ins", {
                get: function () {
                    if (!this._ins) {
                        this._ins = new BattleXiangQingMgr();
                    }
                    return this._ins;
                },
                enumerable: true,
                configurable: true
            });
            BattleXiangQingMgr.prototype.getDataInfo = function (battle_id, game_id, time) {
                if (this._dataInfoList[battle_id])
                    return this._dataInfoList[battle_id];
                this._game.sceneGame.network.call_get_battle_log(battle_id, game_id, time);
                return null;
            };
            BattleXiangQingMgr.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_GETBATTLELOG) {
                    if (data && data.success == 0) {
                        var index = data.msg.index;
                        if (!data.msg) {
                            return;
                        }
                        this._dataInfoList[data.msg.battle_id] = this.GetBattleInfoToString(data.msg.game_id, data.msg.battle_log);
                        this.event(BattleXiangQingMgr.RECORD_CHANGE, [data.msg.battle_id, this._dataInfoList[data.msg.battle_id]]);
                    }
                }
            };
            //战斗日志转成字符串
            BattleXiangQingMgr.prototype.GetBattleInfoToString = function (game_id, battle_log) {
                if (!this._mapInfoList[game_id]) {
                    var mapid = game_id.substr(0, 1).toUpperCase() + game_id.substr(1, game_id.length);
                    var comm = StringU.substitute("new game{0}.data.{1}MapInfo({2})", game_id, mapid, "this._game.sceneGame.sceneObjectMgr");
                    this._mapInfoList[game_id] = eval(comm);
                }
                this._mapInfoList[game_id].battleInfoMgr.ResetData(battle_log);
                return this._mapInfoList[game_id].getBattleInfoToString();
            };
            BattleXiangQingMgr.RECORD_CHANGE = "BattleXiangQingMgr.changge";
            return BattleXiangQingMgr;
        }(gamecomponent.managers.BaseMgr));
        managers.BattleXiangQingMgr = BattleXiangQingMgr;
    })(managers = gamedatingnqp.managers || (gamedatingnqp.managers = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=BattleXiangQingMgr.js.map