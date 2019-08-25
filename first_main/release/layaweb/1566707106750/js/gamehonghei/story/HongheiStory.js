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
*红黑大战剧情
*/
var gamehonghei;
(function (gamehonghei) {
    var story;
    (function (story) {
        var HongheiStory = /** @class */ (function (_super) {
            __extends(HongheiStory, _super);
            function HongheiStory(v, mapid, maplv) {
                var _this = _super.call(this, v, mapid, maplv) || this;
                _this._openCards = [];
                _this._isFaPai = false;
                _this.init();
                return _this;
            }
            Object.defineProperty(HongheiStory.prototype, "hongheiMgr", {
                get: function () {
                    return this._hongheiMgr;
                },
                enumerable: true,
                configurable: true
            });
            HongheiStory.prototype.init = function () {
                if (!this._hongheiMgr) {
                    this._hongheiMgr = new HongheiMgr(this._game);
                }
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.on(HongheiMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.on(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this.onIntoNewMap();
            };
            HongheiStory.prototype.onIntoNewMap = function (info) {
                if (!info)
                    return;
                this.onMapInfoChange();
                this._game.uiRoot.closeAll();
                this._game.uiRoot.HUD.open(HongheiPageDef.PAGE_HHDZ_MAP);
            };
            HongheiStory.prototype.onMapInfoChange = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._hongheiMapInfo = mapinfo;
                if (mapinfo) {
                    this.onUpdateBattle();
                    this.onUpdateState();
                }
            };
            HongheiStory.prototype.onUpdateState = function () {
                if (!this._hongheiMapInfo)
                    return;
                var mapStatus = this._hongheiMapInfo.GetMapState();
                if (this._curStatus == mapStatus)
                    return;
                this._curStatus = mapStatus;
                switch (this._curStatus) {
                    case 0 /* PLAY_STATUS_NONE */: // 准备阶段
                        this.serverClose();
                        break;
                    case 1 /* PLAY_STATUS_GAMESTART */: // 游戏开始
                        this._openCards = [];
                        break;
                    case 2 /* PLAY_STATUS_WASH_CARD */: // 洗牌阶段
                        break;
                    case 3 /* PLAY_STATUS_PUSH_CARD */: // 发牌阶段
                        this.cardsDeal();
                        break;
                    case 4 /* PLAY_STATUS_BET */: // 下注阶段
                        this.cardsReDeal();
                        break;
                    case 5 /* PLAY_STATUS_STOP_BET */: // 停止下注阶段
                        this.cardsReDeal();
                        break;
                    case 6 /* PLAY_STATUS_SHOW_CARD */: // 开牌阶段
                        this.cardsReDeal();
                        break;
                    case 7 /* PLAY_STATUS_SETTLE */: // 结算阶段
                        this.cardsReDeal();
                        break;
                    case 8 /* PLAY_STATUS_SETTLE_SHOW */: //结算结果展示
                        this.cardsReDeal();
                        break;
                    case 9 /* PLAY_STATUS_RELAX */: // 休息阶段
                        this._openCards = [];
                        this._hongheiMgr.clear();
                        this._isFaPai = false;
                        break;
                }
            };
            HongheiStory.prototype.createObj = function () {
                var card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, HongheiData);
                card.pos = new Vector2(835, 187); //牌发出来的位置
                card.rotateAngle = 60;
                return card;
            };
            //开牌
            HongheiStory.prototype.cardsOpen = function () {
                var _this = this;
                var count = 1;
                var counter = 0;
                var _loop_1 = function (i) {
                    var _loop_2 = function (j) {
                        Laya.timer.once(400 * count, this_1, function () {
                            if (_this._hongheiMgr) {
                                var index = j * HongheiMgr.MAX_CARD_COUNT + i;
                                var fanpai = (index == 2 || index == 5) ? false : true;
                                _this._hongheiMgr.setValue(_this._openCards[index], index, fanpai);
                                counter++;
                                if (counter >= _this._openCards.length) {
                                    _this.hongheiMgr.event(HongheiMgr.OPEN_OVER);
                                }
                            }
                        });
                        count++;
                    };
                    for (var j = 0; j < HongheiMgr.CARDS_NUM; j++) {
                        _loop_2(j);
                    }
                };
                var this_1 = this;
                for (var i = 0; i < HongheiMgr.MAX_CARD_COUNT; i++) {
                    _loop_1(i);
                }
            };
            //正常游戏发牌
            HongheiStory.prototype.cardsDeal = function () {
                if (this._isFaPai)
                    return;
                this._isFaPai = true;
                var cards = [1, 1, 1, 1, 1, 1];
                var handle = new Handler(this, this.createObj);
                this._hongheiMgr.Init(cards, handle);
                this._hongheiMgr.sort();
                this._hongheiMgr.fapai();
            };
            //断线重连,重发下牌
            HongheiStory.prototype.cardsReDeal = function () {
                if (!this._hongheiMapInfo)
                    return;
                var status = this._game.sceneObjectMgr.mapInfo.GetMapState();
                if (this._openCards.length >= 6) {
                    if (status == 6 /* PLAY_STATUS_SHOW_CARD */) {
                        this.cardsOpen();
                        this._hongheiMgr.isOpenCards = true;
                    }
                }
                else {
                    if (this._isFaPai)
                        return;
                    this._isFaPai = true;
                    var cards = [1, 1, 1, 1, 1, 1];
                    var handle = new Handler(this, this.createObj);
                    this._hongheiMgr.Init(cards, handle);
                    this._hongheiMgr.sort();
                    this._hongheiMgr.refapai();
                }
            };
            //战斗结构体 出牌
            HongheiStory.prototype.onUpdateBattle = function () {
                var _this = this;
                if (!this._hongheiMapInfo)
                    return;
                var battleInfoMgr = this._hongheiMapInfo.battleInfoMgr;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var info = battleInfoMgr.info[i];
                    if (info instanceof gamecomponent.object.BattleInfoDeal) {
                        var arr = this._hongheiMgr.initCard(info.Cards).concat();
                        if (this._openCards.length < 6) {
                            this._openCards = this._openCards.concat(arr);
                        }
                    }
                }
                if (this._hongheiMgr.isReconnect && this._curStatus >= 6 /* PLAY_STATUS_SHOW_CARD */ && !this._hongheiMgr.isOpenCards) {
                    this._hongheiMgr.isReconnect = false;
                    var count = 0;
                    for (var i = 0; i < this._openCards.length; i++) {
                        this._hongheiMgr.setValue1(this._openCards[i], i, true);
                        count++;
                        if (count >= this._openCards.length) {
                            Laya.timer.once(1000, this, function () {
                                _this.hongheiMgr.event(HongheiMgr.OPEN_OVER1);
                            });
                        }
                    }
                }
            };
            HongheiStory.prototype.enterMap = function () {
                //各种判断
                this._game.network.call_match_game(this._mapid, this.maplv);
                return true;
            };
            HongheiStory.prototype.leavelMap = function () {
                //各种判断
                this._game.network.call_leave_game();
                return true;
            };
            HongheiStory.prototype.clear = function () {
                this._hongheiMapInfo = null;
                this._game.sceneObjectMgr.off(HongheiMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.off(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                if (this._hongheiMgr) {
                    this._hongheiMgr = null;
                }
            };
            HongheiStory.prototype.update = function (diff) {
            };
            /**房间场次信息*/
            HongheiStory.ROOM_INFO_LEVEL = "ROOM_INFO_LEVEL";
            return HongheiStory;
        }(gamecomponent.story.StoryBaiRenBase));
        story.HongheiStory = HongheiStory;
    })(story = gamehonghei.story || (gamehonghei.story = {}));
})(gamehonghei || (gamehonghei = {}));
//# sourceMappingURL=HongheiStory.js.map