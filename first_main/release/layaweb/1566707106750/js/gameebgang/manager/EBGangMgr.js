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
* 二八杠-牌
*/
var gameebgang;
(function (gameebgang) {
    var manager;
    (function (manager) {
        var MIN_CHECKTIME = 1000; //最小检测时间间隔(毫秒)
        var EBGangMgr = /** @class */ (function (_super) {
            __extends(EBGangMgr, _super);
            function EBGangMgr(game) {
                var _this = _super.call(this, game) || this;
                _this._firstPos = 0; // 第一个发牌的座位号
                _this._cardsTemp = []; //牌数据
                _this._partPos = []; //分牌过的位置
                _this._totalUnitCount = 4; // 玩家数量
                //定下牌的初始位置
                _this._cardPos = [[540, 350, 30], [600, 350, 30], [660, 350, 30], [720, 350, 30]];
                return _this;
            }
            Object.defineProperty(EBGangMgr.prototype, "unitOffline", {
                get: function () {
                    return this._unitOffline;
                },
                set: function (v) {
                    this._unitOffline = v;
                    this.event(EBGangMgr.MAPINFO_OFFLINE);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(EBGangMgr.prototype, "firstPos", {
                get: function () {
                    return this._firstPos;
                },
                set: function (v) {
                    this._firstPos = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(EBGangMgr.prototype, "totalUnitCount", {
                get: function () {
                    return this._totalUnitCount;
                },
                set: function (v) {
                    this._totalUnitCount = v;
                },
                enumerable: true,
                configurable: true
            });
            //心跳更新
            EBGangMgr.prototype.update = function (diff) {
                if (this._offsetTime > 0) {
                    this._offsetTime -= diff;
                    return;
                }
                this._offsetTime = MIN_CHECKTIME;
            };
            EBGangMgr.prototype.createObj = function (u) {
                var card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.MAHJONG_MARK, EBGangData);
                return card;
            };
            EBGangMgr.prototype.sort = function () {
                var max = EBGangMgr.MAX_SEATS_COUNT;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var mainIdx = mainUnit.GetIndex();
                var cardIdx = 0;
                for (var index = 0; index < max; index++) {
                    var posIdx = (this._firstPos + index) % EBGangMgr.MAX_SEATS_COUNT == 0 ? EBGangMgr.MAX_SEATS_COUNT : (this._firstPos + index) % EBGangMgr.MAX_SEATS_COUNT;
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    if (unit) {
                        for (var i = 0; i < 2; i++) {
                            var card = this._cards[cardIdx * 2 + i];
                            if (card) {
                                card.pos = new Vector2(this._cardPos[cardIdx][0], this._cardPos[cardIdx][1] + i * this._cardPos[cardIdx][2]);
                                card.myOwner(unit, mainUnit == unit, mainIdx, posIdx);
                                card.index = i;
                                card.sortScore = i;
                            }
                        }
                        cardIdx++;
                    }
                }
            };
            //发牌
            EBGangMgr.prototype.fapai = function () {
                var _this = this;
                var count = 1;
                var _loop_1 = function (i) {
                    Laya.timer.once(300 * count, this_1, function () {
                        for (var k = 0; k < 2; k++) {
                            var card = _this._cards[i * 2 + k];
                            //播音效
                            _this._game.playSound(PathGameTongyong.music_tongyong + "fapai.mp3", false);
                            card.fapai();
                        }
                    });
                    count++;
                };
                var this_1 = this;
                for (var i = 0; i < this._cards.length / 2; i++) {
                    _loop_1(i);
                }
            };
            //重连发牌
            EBGangMgr.prototype.refapai = function () {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    card.refapai();
                }
            };
            // 删除指定座位上的牌
            EBGangMgr.prototype.clearSeatCards = function (seatIndex) {
                for (var index = 0; index < this._cards.length; index++) {
                    if (this._cards[index]._ownerIdx == seatIndex) {
                        this._game.sceneObjectMgr.clearOfflineObject(this._cards[index]);
                    }
                }
            };
            //翻牌
            EBGangMgr.prototype.showCards = function (cards, pos) {
                var max = EBGangMgr.MAX_SEATS_COUNT;
                // 和首次摊牌的玩家间隔的座位数 据此来翻牌
                var _diffIdx = 0;
                if (pos != this._firstPos) {
                    // 和第一个发牌的位置偏差多少 
                    for (var index = 1; index <= max; index++) {
                        var seat_idx = (this._firstPos + index) % max;
                        if (seat_idx == 0)
                            seat_idx = max;
                        var unit = this._game.sceneObjectMgr.getUnitByIdx(seat_idx);
                        if (unit) {
                            _diffIdx++;
                            if (pos == seat_idx)
                                break;
                        }
                    }
                }
                // 固定只翻两张牌
                for (var index = 0; index < cards.length; index++) {
                    var cardIdx = _diffIdx * 2 + index;
                    var card = this._cards[cardIdx];
                    if (card) {
                        card.Init(cards[index]);
                        card.fanpai();
                    }
                }
            };
            //重置数据
            EBGangMgr.prototype.resetData = function () {
                this._firstPos = 0;
                this._totalUnitCount = 4;
                this._cardsTemp = [];
            };
            EBGangMgr.MIN_BANKER_NUM = 3; // 最小抢庄倍数
            EBGangMgr.MAX_BANKER_NUM = 200; // 最大抢庄倍数
            EBGangMgr.MAX_SEATS_COUNT = 4; // 最大座位数
            EBGangMgr.MAX_ROUND_COUNT = 5; // 最大局数
            EBGangMgr.CARD_ROOM_CONFIG = "111"; // 房卡模式下房间底注等信息
            EBGangMgr.LEAST_BET_MONEY = [1, 10, 50, 200]; // 底注
            EBGangMgr.LEAST_JOIN_MONEY = [20, 100, 500, 1000]; // 准入
            EBGangMgr.WXSHARE_TITLE = "大众棋牌-游戏邀请"; // 分享标题
            EBGangMgr.WXSHARE_DESC = "开好房喽,就等你们一起来玩二八杠啦!房间号是({0}),晚了位置就没了哟~"; // 分享内容
            // 底注
            EBGangMgr.ROOM_CONFIG = {
                "111": EBGangMgr.LEAST_BET_MONEY[0],
                "112": EBGangMgr.LEAST_BET_MONEY[1],
                "113": EBGangMgr.LEAST_BET_MONEY[2],
                "114": EBGangMgr.LEAST_BET_MONEY[3],
            };
            // 准入
            EBGangMgr.ROOM_JOIN_CONFIG = {
                "111": EBGangMgr.LEAST_JOIN_MONEY[0],
                "112": EBGangMgr.LEAST_JOIN_MONEY[1],
                "113": EBGangMgr.LEAST_JOIN_MONEY[2],
                "114": EBGangMgr.LEAST_JOIN_MONEY[3],
            };
            // 筹码面值
            EBGangMgr.ROOM_CHIP_CONFIG = {
                "111": [1, 5, 10, 20, 50],
                "112": [10, 20, 50, 100, 200],
                "113": [50, 100, 200, 5000, 1000],
                "114": [200, 500, 1000, 2000, 5000],
            };
            // 牌型
            EBGangMgr.EBG_CARDS_TYPE_DOUBLE = 1; // 对子
            EBGangMgr.EBG_CARDS_TYPE_EBGANG = 2; // 二八杠(单张特殊牌 8-2)
            EBGangMgr.EBG_CARDS_TYPE_DIANBAN = 3; //单张中的半牌(九点半)
            EBGangMgr.EBG_CARDS_TYPE_SINGLE = 4; // 单张
            EBGangMgr.EBG_CARDS_TYPE_BIESHI = 5; // 鳖十
            EBGangMgr.EBG_CARDS_TYPE_INVALID = -1; // 无效牌
            EBGangMgr.MAPINFO_OFFLINE = "EBGangMgr.MAPINFO_OFFLINE"; //假精灵
            EBGangMgr.DEAL_CARDS = "EBGangMgr.DEAL_CARDS"; //发牌结束
            EBGangMgr.CONTINUE_GAME = "EBGangMgr.CONTINUE_GAME"; //继续游戏
            return EBGangMgr;
        }(gamecomponent.managers.PlayingCardMgrBase));
        manager.EBGangMgr = EBGangMgr;
    })(manager = gameebgang.manager || (gameebgang.manager = {}));
})(gameebgang || (gameebgang = {}));
//# sourceMappingURL=EBGangMgr.js.map