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
var gametbniuniu;
(function (gametbniuniu) {
    var story;
    (function (story) {
        var MAX_SEATS_COUNT = 6; // 最大座位数
        var TbniuniuStory = /** @class */ (function (_super) {
            __extends(TbniuniuStory, _super);
            function TbniuniuStory(v, mapid, maplv) {
                var _this = _super.call(this, v, mapid, maplv) || this;
                _this._infoList = [];
                //战斗结构体 出牌
                _this._index = 0;
                _this._last_maplv = maplv;
                _this.init();
                return _this;
            }
            Object.defineProperty(TbniuniuStory.prototype, "mapLv", {
                get: function () {
                    return this.maplv;
                },
                set: function (lv) {
                    this.maplv = lv;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TbniuniuStory.prototype, "niuMgr", {
                get: function () {
                    return this._niuMgr;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TbniuniuStory.prototype, "isFaPai", {
                get: function () {
                    return this._isFaPai;
                },
                enumerable: true,
                configurable: true
            });
            TbniuniuStory.prototype.init = function () {
                _super.prototype.init.call(this);
                if (!this._niuMgr) {
                    this._niuMgr = new TbNiuNiuMgr(this._game);
                }
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.on(TbniuniuMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.on(TbniuniuMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this.onIntoNewMap();
            };
            TbniuniuStory.prototype.createObj = function () {
                var card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, TbNiuNiuData);
                card.pos = new Vector2(825, 220);
                return card;
            };
            TbniuniuStory.prototype.onIntoNewMap = function (info) {
                if (!info)
                    return;
                this.onMapInfoChange();
                this._game.uiRoot.closeAll();
                this._game.uiRoot.HUD.open(TbniuniuPageDef.PAGE_TBNIUNIU_MAP);
            };
            TbniuniuStory.prototype.onMapInfoChange = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._niuMapInfo = mapinfo;
                if (mapinfo) {
                    this.onUpdateBattle();
                    this.onUpdateState();
                    this.onUpdateCardInfo();
                    this.onUpdateFanPai();
                }
                else {
                    this._niuMgr.offlineUnit = this._offlineUnit;
                }
            };
            TbniuniuStory.prototype.onUpdateState = function () {
                if (!this._niuMapInfo)
                    return;
                var mapStatus = this._niuMapInfo.GetMapState();
                if (this._curStatus == mapStatus)
                    return;
                this._curStatus = mapStatus;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit || !mainUnit.GetIndex())
                    return;
                switch (this._curStatus) {
                    case 0 /* PLAY_STATUS_NONE */: // 准备阶段
                        break;
                    case 1 /* PLAY_STATUS_GAMESTART */: // 游戏开始
                        break;
                    case 2 /* PLAY_STATUS_BET */: // 下注阶段
                        break;
                    case 3 /* PLAY_STATUS_PUSH_CARD */: // 发牌阶段
                        this.cardsDeal();
                        break;
                    case 4 /* PLAY_STATUS_SHOW_CARDS */: // 摊牌阶段
                        break;
                    case 5 /* PLAY_STATUS_COMPARE */: // 比牌阶段
                        this._niuMgr.gaipai();
                        break;
                    case 6 /* PLAY_STATUS_SETTLE */: // 结算阶段
                        break;
                    case 7 /* PLAY_STATUS_SHOW_GAME */: // 本局展示阶段
                        this._isFaPai = 0;
                        this._index = 0;
                        this._niuMgr.resetCardsIndex();
                        break;
                }
            };
            //正常游戏发牌
            TbniuniuStory.prototype.cardsDeal = function () {
                if (!this._game.sceneObjectMgr.mainUnit)
                    return;
                if (this._isFaPai)
                    return;
                var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var max = MAX_SEATS_COUNT;
                var cards = [];
                for (var index = 0; index < max; index++) {
                    var posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    var mainCards = this._game.sceneObjectMgr.mainPlayer.playerInfo.cards;
                    if (unit) {
                        if (unit.GetIndex() == idx) {
                            cards = cards.concat(mainCards);
                        }
                        else {
                            cards = cards.concat([0, 0, 0, 0, 0]);
                        }
                        this._niuMgr.setCardsIndex(unit.GetIndex());
                    }
                }
                var handle = new Handler(this, this.createObj);
                this._niuMgr.Init(cards, handle);
                this._niuMgr.sort();
                this._niuMgr.fapai();
                this._niuMgr.fanpai();
                this._isFaPai = 1;
            };
            //断线重连,重发下牌
            TbniuniuStory.prototype.onUpdateCardInfo = function () {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!this._niuMapInfo)
                    return;
                if (!mainUnit || !mainUnit.GetIndex())
                    return;
                if (this._isFaPai)
                    return;
                var status = this._niuMapInfo.GetMapState();
                if (status >= 3 /* PLAY_STATUS_PUSH_CARD */ && status < 7 /* PLAY_STATUS_SHOW_GAME */) {
                    var idx = mainUnit.GetIndex();
                    var max = MAX_SEATS_COUNT;
                    var cards = [];
                    for (var index = 0; index < max; index++) {
                        var posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
                        var unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                        var mainCards = this._game.sceneObjectMgr.mainPlayer.playerInfo.cards;
                        if (unit) {
                            if (unit.GetIndex() == idx) {
                                cards = cards.concat(mainCards);
                            }
                            else {
                                cards = cards.concat([0, 0, 0, 0, 0]);
                            }
                            this._niuMgr.setCardsIndex(unit.GetIndex());
                        }
                    }
                    var handle = new Handler(this, this.createObj);
                    this._niuMgr.Init(cards, handle);
                    this._niuMgr.sort();
                    if (status > 4 /* PLAY_STATUS_SHOW_CARDS */) {
                        this._niuMgr.regaipai();
                    }
                    else {
                        this._niuMgr.refapai();
                    }
                    this._niuMgr.reloadFanpai();
                    this._isFaPai = 2;
                }
            };
            TbniuniuStory.prototype.onUpdateBattle = function () {
                if (!this._niuMapInfo)
                    return;
                var battleInfoMgr = this._niuMapInfo.battleInfoMgr;
                var unitNum = this.getPlayerOnSeat();
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var info = battleInfoMgr.info[i];
                    if (info instanceof gamecomponent.object.BattleInfoPlayCard) {
                        if (i > this._index) {
                            this._infoList.push(info);
                            this._niuMgr.setValue(info);
                            this._index = i;
                        }
                    }
                }
            };
            //断线重连,重发翻牌
            TbniuniuStory.prototype.onUpdateFanPai = function () {
                if (!this.isReConnected)
                    return;
                if (!this._infoList.length)
                    return;
                if (this._isFanPai)
                    return;
                for (var i = 0; i < this._infoList.length; i++) {
                    this._niuMgr.setValue(this._infoList[i]);
                }
                this._isFanPai = true;
            };
            TbniuniuStory.prototype.getPlayerOnSeat = function () {
                var unitNum = 0;
                for (var index = 0; index < MAX_SEATS_COUNT; index++) {
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(index + 1);
                    if (unit) {
                        unitNum++;
                    }
                }
                return unitNum;
            };
            TbniuniuStory.prototype.createofflineUnit = function () {
                //创建假的地图和精灵
                var unitOffline = new UnitOffline(this._game.sceneObjectMgr);
                if (this._game.sceneObjectMgr.mainPlayer) {
                    unitOffline.SetStr(UnitField.UNIT_STR_NAME, this._game.sceneObjectMgr.mainPlayer.playerInfo.nickname);
                    unitOffline.SetStr(UnitField.UNIT_STR_HEAD_IMG, this._game.sceneObjectMgr.mainPlayer.playerInfo.headimg);
                    unitOffline.SetDouble(UnitField.UNIT_INT_MONEY, this._game.sceneObjectMgr.mainPlayer.playerInfo.money);
                    unitOffline.SetUInt32(UnitField.UNIT_INT_QI_FU_END_TIME, this._game.sceneObjectMgr.mainPlayer.playerInfo.qifu_endtime);
                    unitOffline.SetUInt32(UnitField.UNIT_INT_QI_FU_TYPE, this._game.sceneObjectMgr.mainPlayer.playerInfo.qifu_type);
                    unitOffline.SetUInt32(UnitField.UNIT_INT_VIP_LEVEL, this._game.sceneObjectMgr.mainPlayer.playerInfo.vip_level);
                }
                unitOffline.SetUInt16(UnitField.UNIT_INT_UINT16, 0, 1);
                this._offlineUnit = unitOffline;
            };
            TbniuniuStory.prototype.enterMap = function () {
                //各种判断
                if (!this.maplv) {
                    this.maplv = this._last_maplv;
                }
                this._game.network.call_match_game(this._mapid, this.maplv);
                return true;
            };
            TbniuniuStory.prototype.leavelMap = function () {
                //各种判断
                this._game.network.call_leave_game();
                return true;
            };
            TbniuniuStory.prototype.clear = function () {
                _super.prototype.clear.call(this);
                this._game.sceneObjectMgr.off(TbniuniuMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.off(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                if (this._niuMgr) {
                    this._niuMgr.clear();
                    this._niuMgr = null;
                }
                this._niuMapInfo = null;
            };
            return TbniuniuStory;
        }(gamecomponent.story.StoryNormalBase));
        story.TbniuniuStory = TbniuniuStory;
    })(story = gametbniuniu.story || (gametbniuniu.story = {}));
})(gametbniuniu || (gametbniuniu = {}));
//# sourceMappingURL=TbNiuniuStory.js.map