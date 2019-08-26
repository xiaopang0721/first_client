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
* name 牛牛剧情
*/
var gamebaijiale;
(function (gamebaijiale) {
    var story;
    (function (story) {
        var BaijialeStory = /** @class */ (function (_super) {
            __extends(BaijialeStory, _super);
            function BaijialeStory(v, mapid, maplv) {
                var _this = _super.call(this, v, mapid, maplv) || this;
                _this._dealCards = [];
                _this._openCards = [];
                _this._cardsTemp = []; //牌数据
                //战斗结构体 出牌
                _this._index = 0;
                _this.init();
                return _this;
            }
            Object.defineProperty(BaijialeStory.prototype, "baijialeMgr", {
                get: function () {
                    return this._baijialeMgr;
                },
                enumerable: true,
                configurable: true
            });
            BaijialeStory.prototype.init = function () {
                if (!this._baijialeMgr) {
                    this._baijialeMgr = new BaijialeMgr(this._game);
                }
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.on(BaijialeMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.on(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this._game.sceneObjectMgr.on(BaijialeMapInfo.EVENT_ADD_CARD_TYPE, this, this.onUpdateCardType); //补牌类型
                this.onIntoNewMap();
            };
            BaijialeStory.prototype.onIntoNewMap = function (info) {
                if (!info)
                    return;
                this.onMapInfoChange();
                this._game.uiRoot.closeAll();
                this._game.uiRoot.HUD.open(BaijialePageDef.PAGE_BAIJIALE_MAP);
            };
            BaijialeStory.prototype.onMapInfoChange = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._baijialeMapInfo = mapinfo;
                if (mapinfo) {
                    this.onUpdateState();
                    this.cardsReDeal();
                    this.onUpdateBattle();
                }
            };
            BaijialeStory.prototype.onUpdateState = function () {
                if (!this._baijialeMapInfo)
                    return;
                var mapStatus = this._baijialeMapInfo.GetMapState();
                if (this._curStatus == mapStatus)
                    return;
                this._curStatus = mapStatus;
                switch (this._curStatus) {
                    case 0 /* PLAY_STATUS_NONE */: // 准备阶段
                        this.serverClose();
                        break;
                    case 1 /* PLAY_STATUS_GAMESTART */: // 游戏开始
                        break;
                    case 2 /* PLAY_STATUS_PUSH_CARD */: // 发牌阶段
                        this.cardsDeal();
                        break;
                    case 3 /* PLAY_STATUS_BET */: // 下注阶段
                        this._baijialeMgr.isReConnect = false;
                        this.cardsReDeal();
                        break;
                    case 4 /* PLAY_STATUS_SHOW_CARD */: // 开牌阶段
                        this.cardsReDeal();
                        break;
                    case 5 /* PLAY_STATUS_ADD_CARD */: // 补牌阶段
                        this.cardsReDeal();
                        break;
                    case 6 /* PLAY_STATUS_SETTLE */: // 结算阶段
                        this.cardsReDeal();
                        break;
                    case 7 /* PLAY_STATUS_SHOW_INFO */: // 显示结算信息阶段
                        this.cardsReDeal();
                        break;
                    case 8 /* PLAY_STATUS_RELAX */: // 休息阶段
                        this._index = 0;
                        this._isFaPai = false;
                        break;
                }
            };
            BaijialeStory.prototype.onUpdateCardType = function () {
                this._addCardType = this._baijialeMapInfo.GetAddCardType();
            };
            BaijialeStory.prototype.createObj = function () {
                var card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, BaijialeData);
                card.pos = new Vector2(850, 175);
                return card;
            };
            //正常游戏发牌
            BaijialeStory.prototype.cardsDeal = function () {
                if (this._isFaPai)
                    return;
                var cards = [0, 0, 0, 0];
                var handle = new Handler(this, this.createObj);
                this._baijialeMgr.Init(cards, handle);
                this._baijialeMgr.isDealCard();
                this._baijialeMgr.sort();
                this._baijialeMgr.fapai();
                this._isFaPai = true;
            };
            //断线重连,重发下牌
            BaijialeStory.prototype.cardsReDeal = function () {
                if (!this._baijialeMapInfo)
                    return;
                if (this._isFaPai)
                    return;
                var status = this._game.sceneObjectMgr.mapInfo.GetMapState();
                //未开牌前，只发4张
                if (status > 2 /* PLAY_STATUS_PUSH_CARD */ && status < 8 /* PLAY_STATUS_RELAX */) {
                    this._cardsTemp = [0, 0, 0, 0];
                    var handle = new Handler(this, this.createObj);
                    this._baijialeMgr.Init(this._cardsTemp, handle);
                    this._baijialeMgr.isDealCard();
                    this._baijialeMgr.sort();
                    this._baijialeMgr.refapai();
                    this._isFaPai = true;
                }
            };
            BaijialeStory.prototype.onUpdateBattle = function () {
                var _this = this;
                if (!this._baijialeMapInfo)
                    return;
                var battleInfoMgr = this._baijialeMapInfo.battleInfoMgr;
                var handle = new Handler(this, this.createObj);
                this._openCards = [];
                var _loop_1 = function (i) {
                    if (i < this_1._index)
                        return "continue";
                    var battleInfo = battleInfoMgr.info[i];
                    if (battleInfo instanceof gamecomponent.object.BattleInfoDeal) { //发牌
                        var cards_1 = battleInfo.Cards;
                        var index_1 = battleInfo.SeatIndex - 1;
                        if (this_1._baijialeMgr.isReConnect && this_1._curStatus >= 4 /* PLAY_STATUS_SHOW_CARD */) {
                            this_1._baijialeMgr.setValue(cards_1, index_1);
                        }
                        else {
                            Laya.timer.once(1200 + 500 * index_1, this_1, function () {
                                if (_this._baijialeMgr) {
                                    _this._baijialeMgr.setOneValue(cards_1, index_1, 0);
                                }
                            });
                            Laya.timer.once(1700 + 1800 * battleInfo.SeatIndex, this_1, function () {
                                if (_this._baijialeMgr) {
                                    _this._baijialeMgr.setOneValue(cards_1, index_1, 1);
                                }
                            });
                        }
                    }
                    else if (battleInfo instanceof gamecomponent.object.BattleInfoAsk) { //补牌
                        var card_1 = battleInfo.Card;
                        var cardIdx_1 = battleInfo.SeatIndex;
                        var timeCount = battleInfo.SeatIndex;
                        if (this_1._addCardType == 1 || this_1._addCardType == 2) {
                            timeCount = 1;
                        }
                        if (this_1._baijialeMgr.isReConnect && this_1._curStatus >= 5 /* PLAY_STATUS_ADD_CARD */) {
                            this_1._baijialeMgr.addCard(card_1, handle, cardIdx_1, 2, true);
                        }
                        else {
                            Laya.timer.once(2500 * (timeCount - 1), this_1, function () {
                                if (_this._baijialeMgr) {
                                    _this._baijialeMgr.addCard(card_1, handle, cardIdx_1, 2, false);
                                }
                                _this._game.playSound(StringU.substitute(Path_game_baijiale.music_baijiale + "{0}.mp3", cardIdx_1 == 1 ? "xian" : "zhuang"), false);
                            });
                            Laya.timer.once(500 + 2500 * (timeCount - 1), this_1, function () {
                                _this._game.playSound(Path_game_baijiale.music_baijiale + "bupai.mp3", false);
                            });
                        }
                    }
                    this_1._index++;
                };
                var this_1 = this;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    _loop_1(i);
                }
            };
            BaijialeStory.prototype.enterMap = function () {
                //各种判断
                this._game.network.call_match_game(this._mapid, this.maplv);
                return true;
            };
            BaijialeStory.prototype.leavelMap = function () {
                //各种判断
                this._game.network.call_leave_game();
                return true;
            };
            BaijialeStory.prototype.clear = function () {
                this._game.sceneObjectMgr.off(BaijialeMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.off(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this._game.sceneObjectMgr.off(BaijialeMapInfo.EVENT_ADD_CARD_TYPE, this, this.onUpdateCardType); //补牌类型
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                if (this._baijialeMgr) {
                    this._baijialeMgr.clear();
                    this._baijialeMgr = null;
                }
                this._baijialeMapInfo = null;
            };
            BaijialeStory.prototype.update = function (diff) {
            };
            return BaijialeStory;
        }(gamecomponent.story.StoryBaiRenBase));
        story.BaijialeStory = BaijialeStory;
    })(story = gamebaijiale.story || (gamebaijiale.story = {}));
})(gamebaijiale || (gamebaijiale = {}));
//# sourceMappingURL=BaijialeStory.js.map