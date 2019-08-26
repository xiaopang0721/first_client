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
var gameniuniu;
(function (gameniuniu) {
    var story;
    (function (story) {
        var NiuniuStory = /** @class */ (function (_super) {
            __extends(NiuniuStory, _super);
            function NiuniuStory(v, mapid, maplv) {
                var _this = _super.call(this, v, mapid, maplv) || this;
                _this._last_maplv = maplv;
                _this.init();
                return _this;
            }
            Object.defineProperty(NiuniuStory.prototype, "mapLv", {
                get: function () {
                    return this.maplv;
                },
                set: function (lv) {
                    this.maplv = lv;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(NiuniuStory.prototype, "niuMgr", {
                get: function () {
                    return this._niuMgr;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(NiuniuStory.prototype, "isFaPai", {
                get: function () {
                    return this._isFaPai;
                },
                enumerable: true,
                configurable: true
            });
            NiuniuStory.prototype.init = function () {
                _super.prototype.init.call(this);
                if (!this._niuMgr) {
                    this._niuMgr = new NiuMgr(this._game);
                }
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE, this, this.onUpdateCardInfo);
                this._game.sceneObjectMgr.on(NiuniuMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.on(NiuniuMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this.onIntoNewMap();
            };
            NiuniuStory.prototype.createObj = function () {
                var card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, NiuData);
                card.pos = new Vector2(965, 220);
                return card;
            };
            NiuniuStory.prototype.onIntoNewMap = function (info) {
                if (!info)
                    return;
                this.onMapInfoChange();
                this._game.uiRoot.closeAll();
                this._game.uiRoot.HUD.open(NiuniuPageDef.PAGE_NIUNIU_MAP);
            };
            NiuniuStory.prototype.onMapInfoChange = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._niuMapInfo = mapinfo;
                if (mapinfo) {
                    this.onUpdateState();
                    this.onUpdateCardInfo();
                    this.onUpdateBattle();
                }
                else {
                    this._niuMgr.offlineUnit = this._offlineUnit;
                }
            };
            NiuniuStory.prototype.onUpdateState = function () {
                // let mapinfo: niuniu.data.NiuniuMapInfo = this._game.sceneObjectMgr.mapInfo as niuniu.data.NiuniuMapInfo;
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
                    case 0 /* PLAY_STATUS_GAME_NONE */: // 准备阶段
                        break;
                    case 3 /* PLAY_STATUS_GAME_SHUFFLE */: // 洗牌阶段
                        break;
                    case 4 /* PLAY_STATUS_GAME_START */: // 游戏开始
                        break;
                    case 5 /* PLAY_STATUS_GET_BANKER */: // 开始抢庄
                        break;
                    case 6 /* PLAY_STATUS_SET_BANKER */: // 定庄阶段
                        break;
                    case 7 /* PLAY_STATUS_BET */: // 下注阶段
                        this._isFaPai = 0;
                        break;
                    case 8 /* PLAY_STATUS_PUSH_CARD */: // 发牌阶段
                        this.onDealCards();
                        break;
                    case 9 /* PLAY_STATUS_MATCH_POINT */: // 配牛阶段
                        this._niuMgr.setToggleEnable();
                        this._niuMgr.isReKaiPai = false;
                        break;
                    case 10 /* PLAY_STATUS_COMPARE */: // 比牌阶段
                        this._niuMgr.gaipai();
                        this._niuMgr.isShowOver = false;
                        break;
                    case 11 /* PLAY_STATUS_SETTLE */: // 结算阶段
                        break;
                    case 12 /* PLAY_STATUS_SETTLE_INFO */: // 显示结算信息
                        break;
                    case 13 /* PLAY_STATUS_SHOW_GAME */: // 本局展示阶段
                        break;
                }
            };
            //正常发牌
            NiuniuStory.prototype.onDealCards = function () {
                if (!this._niuMapInfo)
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit || !mainUnit.GetIndex())
                    return;
                if (this._isFaPai > 0)
                    return;
                var idx = mainUnit.GetIndex();
                var max = 5;
                var cards = [];
                for (var index = 0; index < max; index++) {
                    var posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    var mainCards = this._game.sceneObjectMgr.mainPlayer.playerInfo.cards;
                    if (unit) {
                        if (unit.GetIdentity() == 1) {
                            this._bankerIndex = index;
                        }
                        if (unit.GetIndex() == idx) {
                            cards = cards.concat(mainCards);
                        }
                        else {
                            cards = cards.concat([0, 0, 0, 0, 0]);
                        }
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
            NiuniuStory.prototype.onUpdateCardInfo = function () {
                if (!this._niuMapInfo)
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit || !mainUnit.GetIndex())
                    return;
                if (this._isFaPai > 0)
                    return;
                var status = this._niuMapInfo.GetMapState();
                if (status >= 8 /* PLAY_STATUS_PUSH_CARD */ && status < 13 /* PLAY_STATUS_SHOW_GAME */) {
                    var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                    var max = 5;
                    var cards = [];
                    for (var index = 0; index < max; index++) {
                        var posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
                        var unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                        var mainCards = this._game.sceneObjectMgr.mainPlayer.playerInfo.cards;
                        if (unit) {
                            if (unit.GetIdentity() == 1) {
                                this._bankerIndex = index;
                            }
                            if (unit.GetIndex() == idx) {
                                cards = cards.concat(mainCards);
                            }
                            else {
                                cards = cards.concat([0, 0, 0, 0, 0]);
                            }
                        }
                    }
                    var handle = new Handler(this, this.createObj);
                    this._niuMgr.Init(cards, handle);
                    this._niuMgr.sort();
                    if (status > 9 /* PLAY_STATUS_MATCH_POINT */) {
                        this._niuMgr.regaipai();
                    }
                    else {
                        if (status == 9 /* PLAY_STATUS_MATCH_POINT */) {
                            this._niuMgr.setToggleEnable();
                        }
                        this._niuMgr.refapai();
                    }
                    this._niuMgr.reloadFanpai();
                    this._isFaPai = 2;
                }
            };
            //战斗结构体 出牌
            NiuniuStory.prototype.onUpdateBattle = function () {
                if (!this._niuMapInfo)
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit || !mainUnit.GetIndex())
                    return;
                var battleInfoMgr = this._niuMapInfo.battleInfoMgr;
                var unitNum = this.getPlayerOnSeat();
                var infos = [];
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var info = battleInfoMgr.info[i];
                    if (info.Type == 3) { //最后出牌动作
                        var info_1 = battleInfoMgr.info[i];
                        infos.push(info_1);
                    }
                }
                if (infos.length < unitNum)
                    return;
                if (this._niuMgr.isReKaiPai && this._curStatus > 9 /* PLAY_STATUS_MATCH_POINT */) {
                    this._niuMgr.resetValue(infos, this._bankerIndex);
                }
                else {
                    this._niuMgr.setValue(infos, this._bankerIndex);
                }
            };
            NiuniuStory.prototype.getPlayerOnSeat = function () {
                var unitNum = 0;
                for (var index = 0; index < 5; index++) {
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(index + 1);
                    if (unit) {
                        unitNum++;
                    }
                }
                return unitNum;
            };
            NiuniuStory.prototype.createofflineUnit = function () {
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
            NiuniuStory.prototype.enterMap = function () {
                //各种判断
                if (this.mapinfo)
                    return false;
                if (!this.maplv) {
                    this.maplv = this._last_maplv;
                }
                this._game.network.call_match_game(this._mapid, this.maplv);
                return true;
            };
            NiuniuStory.prototype.leavelMap = function () {
                //各种判断
                this._game.network.call_leave_game();
                return true;
            };
            NiuniuStory.prototype.clear = function () {
                this._game.sceneObjectMgr.off(NiuniuMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.off(NiuniuMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE, this, this.onUpdateCardInfo);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._niuMapInfo = null;
                if (this._niuMgr) {
                    this._niuMgr.clear();
                    this._niuMgr = null;
                }
            };
            return NiuniuStory;
        }(gamecomponent.story.StoryNormalBase));
        story.NiuniuStory = NiuniuStory;
    })(story = gameniuniu.story || (gameniuniu.story = {}));
})(gameniuniu || (gameniuniu = {}));
//# sourceMappingURL=NiuniuStory.js.map