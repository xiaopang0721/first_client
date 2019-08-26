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
var gamebrniuniu;
(function (gamebrniuniu) {
    var story;
    (function (story) {
        var CARDS_COUNT = 5; // 场上共5副数
        var BrniuniuStory = /** @class */ (function (_super) {
            __extends(BrniuniuStory, _super);
            function BrniuniuStory(v, mapid, maplv) {
                var _this = _super.call(this, v, mapid, maplv) || this;
                _this._dealCards = [];
                _this._openCards = [];
                _this.init();
                return _this;
            }
            Object.defineProperty(BrniuniuStory.prototype, "niuMgr", {
                get: function () {
                    return this._niuMgr;
                },
                enumerable: true,
                configurable: true
            });
            BrniuniuStory.prototype.init = function () {
                if (!this._niuMgr) {
                    this._niuMgr = new BrNiuNiuMgr(this._game);
                }
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.on(BrniuniuMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.on(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this.onIntoNewMap();
            };
            BrniuniuStory.prototype.onIntoNewMap = function (info) {
                if (!info)
                    return;
                this.onMapInfoChange();
                this._game.uiRoot.closeAll();
                this._game.uiRoot.HUD.open(BrniuniuPageDef.PAGE_BRNIUNIU_MAP);
            };
            BrniuniuStory.prototype.onMapInfoChange = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._niuMapInfo = mapinfo;
                if (mapinfo) {
                    this.onUpdateState();
                    this.onUpdateBattle();
                }
            };
            BrniuniuStory.prototype.onUpdateState = function () {
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
                    case 2 /* PLAY_STATUS_WASH_CARD */: // 洗牌阶段
                        break;
                    case 3 /* PLAY_STATUS_BET */: // 下注阶段
                        break;
                    case 4 /* PLAY_STATUS_STOP_BET */: // 停止下注阶段
                        break;
                    case 5 /* PLAY_STATUS_PUSH_CARD */: // 发牌阶段
                        this.cardsDeal();
                        break;
                    case 6 /* PLAY_STATUS_SHOW_CARD */: // 开牌阶段
                        for (var i = 0; i < CARDS_COUNT; i++) {
                            var index = i + 1 == 5 ? 0 : i + 1;
                            var cards = [];
                            for (var j = 0; j < 5; j++) {
                                cards.push(this._openCards[index * 5 + j]);
                            }
                            var _cards = this._niuMgr.initCard(cards);
                            this._niuMgr.setValue(_cards, index);
                        }
                        break;
                    case 7 /* PLAY_STATUS_SETTLE */: // 结算阶段
                        break;
                    case 8 /* PLAY_STATUS_SHOW_INFO */: // 显示结算信息阶段
                        break;
                    case 9 /* PLAY_STATUS_RELAX */: // 休息阶段
                        break;
                }
            };
            BrniuniuStory.prototype.createObj = function () {
                var card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, BrNiuNiuData);
                card.pos = new Vector2(900, 177);
                return card;
            };
            //正常游戏发牌
            BrniuniuStory.prototype.cardsDeal = function () {
                var handle = new Handler(this, this.createObj);
                this._niuMgr.Init(this._dealCards, handle);
                this._niuMgr.sort();
                this._niuMgr.fapai();
            };
            //断线重连,重发下牌
            BrniuniuStory.prototype.cardsDraw = function () {
                if (!this._niuMapInfo)
                    return;
                var status = this._niuMapInfo.GetMapState();
                if (status == 5 /* PLAY_STATUS_PUSH_CARD */ && this._dealCards.length == 25) {
                    var handle = new Handler(this, this.createObj);
                    this._niuMgr.Init(this._dealCards, handle);
                    this._niuMgr.sort();
                    this._niuMgr.refapai();
                    this._niuMgr.refanpai();
                    this._niuMgr.isReDrawCards = false;
                    this._niuMgr.event(BrNiuNiuMgr.DEAL_OVER);
                }
                else if (status > 5 /* PLAY_STATUS_PUSH_CARD */ && status < 9 /* PLAY_STATUS_RELAX */ && this._openCards.length == 25) {
                    var handle = new Handler(this, this.createObj);
                    this._niuMgr.Init(this._openCards, handle);
                    this._niuMgr.sort();
                    this._niuMgr.refapai1();
                    this._niuMgr.refanpai();
                    this._niuMgr.isReDrawCards = false;
                    this._niuMgr.event(BrNiuNiuMgr.DEAL_OVER);
                }
            };
            //战斗结构体 出牌
            BrniuniuStory.prototype.onUpdateBattle = function () {
                if (!this._niuMapInfo)
                    return;
                var battleInfoMgr = this._niuMapInfo.battleInfoMgr;
                this._dealCards = [];
                this._openCards = [];
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var info = battleInfoMgr.info[i];
                    if (info instanceof gamecomponent.object.BattleInfoDeal) {
                        var arr = info.Cards.concat();
                        if (this._openCards.length < 25) {
                            this._openCards = this._openCards.concat(arr);
                        }
                        arr[arr.length - 1] = 0;
                        if (this._dealCards.length < 25) {
                            this._dealCards = this._dealCards.concat(arr);
                        }
                    }
                }
                if (this._niuMgr.isReDrawCards) {
                    this.cardsDraw();
                }
            };
            BrniuniuStory.prototype.enterMap = function () {
                //各种判断
                this._game.network.call_match_game(this._mapid, this.maplv);
                return true;
            };
            BrniuniuStory.prototype.leavelMap = function () {
                //各种判断
                this._game.network.call_leave_game();
                return true;
            };
            BrniuniuStory.prototype.clear = function () {
                this._niuMapInfo = null;
                this._game.sceneObjectMgr.off(BrniuniuMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.off(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                if (this._niuMgr) {
                    this._niuMgr.clear();
                    this._niuMgr = null;
                }
            };
            BrniuniuStory.prototype.update = function (diff) {
            };
            return BrniuniuStory;
        }(gamecomponent.story.StoryBaiRenBase));
        story.BrniuniuStory = BrniuniuStory;
    })(story = gamebrniuniu.story || (gamebrniuniu.story = {}));
})(gamebrniuniu || (gamebrniuniu = {}));
//# sourceMappingURL=BrniuniuStory.js.map