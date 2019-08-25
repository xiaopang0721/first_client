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
var gamelonghu;
(function (gamelonghu) {
    var story;
    (function (story) {
        var LonghuStory = /** @class */ (function (_super) {
            __extends(LonghuStory, _super);
            function LonghuStory(v, mapid, maplv) {
                var _this = _super.call(this, v, mapid, maplv) || this;
                _this._openCards = [];
                //战斗结构体 出牌
                _this._index = 0;
                _this.init();
                return _this;
            }
            Object.defineProperty(LonghuStory.prototype, "longhuMgr", {
                get: function () {
                    return this._longhuMgr;
                },
                enumerable: true,
                configurable: true
            });
            LonghuStory.prototype.init = function () {
                if (!this._longhuMgr) {
                    this._longhuMgr = new LonghuMgr(this._game);
                }
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.on(LonghuMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.on(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this.onUpdateBattle();
            };
            LonghuStory.prototype.onIntoNewMap = function (info) {
                if (!info)
                    return;
                this.onMapInfoChange();
                this._game.uiRoot.closeAll();
                this._game.uiRoot.HUD.open(LonghuPageDef.PAGE_LONGHU_MAP);
            };
            LonghuStory.prototype.onMapInfoChange = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._niuMapInfo = mapinfo;
                if (mapinfo) {
                    this.onUpdateState();
                    this.onUpdateBattle();
                }
            };
            LonghuStory.prototype.onUpdateState = function () {
                if (!this._niuMapInfo)
                    return;
                var mapStatus = this._niuMapInfo.GetMapState();
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
                        this.cardsReDeal();
                        break;
                    case 4 /* PLAY_STATUS_STOP_BET */: // 停止下注阶段
                        this._longhuMgr.isReConnect = false;
                        break;
                    case 5 /* PLAY_STATUS_SHOW_CARD */: // 开牌阶段
                        this.cardsReDeal();
                        break;
                    case 6 /* PLAY_STATUS_SETTLE */: // 结算阶段
                        this.cardsReDeal();
                        break;
                    case 7 /* PLAY_STATUS_SHOW_INFO */: // 显示结算信息阶段
                        this.cardsReDeal();
                        break;
                    case 8 /* PLAY_STATUS_RELAX */: // 休息阶段
                        this._isShow = false;
                        this._openCards = [];
                        break;
                }
            };
            LonghuStory.prototype.createObj = function () {
                var card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, LonghuData);
                card.pos = new Vector2(850, 175);
                return card;
            };
            //正常游戏发牌
            LonghuStory.prototype.cardsDeal = function () {
                if (!this._niuMapInfo)
                    return;
                if (this._longhuMgr.allCards.length)
                    return;
                var cards = [0, 0, 0];
                var handle = new Handler(this, this.createObj);
                this._longhuMgr.Init(cards, handle);
                this._longhuMgr.sort();
                this._longhuMgr.fapai();
            };
            //断线重连,重发下牌
            LonghuStory.prototype.cardsReDeal = function () {
                if (!this._niuMapInfo)
                    return;
                if (this._longhuMgr.allCards.length)
                    return;
                var cards = [0, 0, 0];
                var handle = new Handler(this, this.createObj);
                this._longhuMgr.Init(cards, handle);
                this._longhuMgr.sort();
                this._longhuMgr.refapai();
                // if (status <= LonghuStory.PLAY_STATUS_SHOW_CARD) {
                // 	this._longhuMgr.isReConnect = false;
                // }
                // this._longhuMgr.event(LonghuMgr.DEAL_OVER);
            };
            LonghuStory.prototype.onUpdateBattle = function () {
                var _this = this;
                if (!this._niuMapInfo)
                    return;
                var battleInfoMgr = this._niuMapInfo.battleInfoMgr;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var info = battleInfoMgr.info[i];
                    if (info instanceof gamecomponent.object.BattleInfoDeal) {
                        var arr = this._longhuMgr.initCard(info.Cards).concat();
                        if (this._openCards.length < 2) {
                            this._openCards = this._openCards.concat(arr);
                        }
                    }
                }
                if (this._longhuMgr.isReConnect && this._curStatus >= 5 /* PLAY_STATUS_SHOW_CARD */) {
                    if (this._openCards && this._openCards.length > 0) {
                        for (var i = 0; i < this._openCards.length; i++) {
                            this._longhuMgr.setValue(this._openCards[i], i);
                        }
                        if (!this._isShow) {
                            if (this._longhuMgr) {
                                this._longhuMgr.event(LonghuMgr.SHOW_OVER);
                            }
                            this._isShow = true;
                        }
                    }
                }
                else {
                    if (this._openCards && this._openCards.length > 0) {
                        var _loop_1 = function (i) {
                            Laya.timer.once(1800 + 1500 * i, this_1, function () {
                                if (_this._longhuMgr) {
                                    _this._longhuMgr.setValue(_this._openCards[i], i);
                                }
                            });
                        };
                        var this_1 = this;
                        for (var i = 0; i < this._openCards.length; i++) {
                            _loop_1(i);
                        }
                        if (!this._isShow) {
                            Laya.timer.once(4500, this, function () {
                                if (_this._longhuMgr) {
                                    _this._longhuMgr.event(LonghuMgr.SHOW_OVER);
                                }
                                _this._isShow = true;
                            });
                        }
                    }
                }
            };
            LonghuStory.prototype.enterMap = function () {
                //各种判断
                this._game.network.call_match_game(this._mapid, this.maplv);
                return true;
            };
            LonghuStory.prototype.leavelMap = function () {
                //各种判断
                this._game.network.call_leave_game();
                return true;
            };
            LonghuStory.prototype.clear = function () {
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.off(LonghuMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.off(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                if (this._longhuMgr) {
                    this._longhuMgr.clear();
                    this._longhuMgr = null;
                }
                this._niuMapInfo = null;
            };
            LonghuStory.prototype.update = function (diff) {
            };
            return LonghuStory;
        }(gamecomponent.story.StoryBaiRenBase));
        story.LonghuStory = LonghuStory;
    })(story = gamelonghu.story || (gamelonghu.story = {}));
})(gamelonghu || (gamelonghu = {}));
//# sourceMappingURL=LonghuStory.js.map