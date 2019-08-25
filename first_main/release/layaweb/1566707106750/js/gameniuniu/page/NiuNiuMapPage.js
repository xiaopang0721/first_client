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
* 牛牛
*/
var gameniuniu;
(function (gameniuniu) {
    var page;
    (function (page_1) {
        var MONEY_NUM = 50; // 特效金币数量
        var MONEY_FLY_TIME = 30; // 金币飞行时间间隔
        // 下注倍率配置
        var RATE_LIST = {
            "1": [1],
            "2": [1, 2],
            "3": [1, 2, 3],
            "4": [1, 2, 3, 4],
            "5": [1, 2, 3, 5],
            "6": [1, 2, 4, 6],
            "7": [1, 3, 5, 7],
            "8": [1, 3, 5, 8],
            "9": [1, 3, 6, 9],
            "10": [1, 3, 6, 10],
            "11": [1, 4, 7, 11],
            "12": [1, 4, 8, 12],
            "13": [1, 4, 9, 13],
            "14": [1, 5, 10, 14],
            "15": [1, 5, 10, 15],
        };
        // 房间底注和限入配置
        var ROOM_CONFIG = {
            "21": [1, 20],
            "22": [10, 200],
            "23": [50, 500],
            "24": [100, 1000],
            "191": [1, 0],
        };
        var CARD_TYPE = ["没牛", "牛一", "牛二", "牛三", "牛四", "牛五", "牛六", "牛七", "牛八", "牛九", "牛牛", "四花牛", "五花牛", "炸弹", "五小牛"]; //牌型
        var NiuNiuMapPage = /** @class */ (function (_super) {
            __extends(NiuNiuMapPage, _super);
            function NiuNiuMapPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._bankerList = []; //抢庄倍率集合
                _this._betList = []; //下注倍率集合
                _this._playerList = []; //精灵UI集合
                _this._unitIndexOnTable = []; //精灵位置集合
                _this._bankerWinInfo = []; //庄家赢牌信息集合
                _this._bankerLoseInfo = []; //庄家输牌信息集合
                _this._bankerRateInfo = []; //抢最大同倍庄集合
                _this._clipList = []; //飘字集合
                _this._room_config = []; //房间等级底注信息
                _this._isPlayXiPai = false; //播放洗牌
                _this._getBankerCount = 0; //抢庄日志计数
                // 房卡系列
                _this._totalPoint = [0, 0, 0, 0, 0]; // 当前玩家累计积分 分别是座位号-积分值 
                _this._isPlaying = false; //是否进行中
                _this._isGameEnd = false; //是否本局游戏结束
                _this._diff = 500;
                _this._timeList = {};
                _this._firstList = {};
                _this.count = 0;
                _this.curIndex = 0;
                //战斗结构体更新
                _this._battleIndex = -1;
                _this._bankerRate = 0;
                _this._bankerRateList = [];
                //打开房卡结算界面
                _this._betTemps = [0, 0, 0, 0, 0]; //各个精灵下注倍数
                _this._settleInfo = [0, 0, 0, 0, 0]; //各个精灵结算收益
                _this._allType = [-1, -1, -1, -1, -1]; //各个精灵牌型
                _this._nameStrInfo = ["xs", "px", "gsy", "gg", "cs", "tdg"];
                _this._isNeedDuang = false;
                _this._delta = 1000;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    Path_game_niuniu.atlas_game_ui + "niuniu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/suiji.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            NiuNiuMapPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.niuniu.QiangZhuangNNUI');
                this.addChild(this._viewUI);
                this.initView();
                if (!this._pageHandle) {
                    this._pageHandle = PageHandle.Get("NiuNiuMapPage"); //额外界面控制器
                }
                if (!this._niuMgr) {
                    this._niuStory = this._game.sceneObjectMgr.story;
                    this._niuMgr = this._niuStory.niuMgr;
                    this._niuMgr.on(NiuMgr.DEAL_OVER, this, this.onUpdateAniDeal);
                }
                this._game.playMusic(Path_game_niuniu.music_niuniu + "nn_bgm.mp3");
            };
            // 页面打开时执行函数
            NiuNiuMapPage.prototype.onOpen = function () {
                var _this = this;
                _super.prototype.onOpen.call(this);
                //是否断线重连
                if (this._niuStory instanceof gamecomponent.story.StoryRoomCardBase) {
                    this.onUpdateMapInfo();
                }
                else if (!this._niuStory.isReConnected) {
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, function (page) {
                        _this._viewUI.btn_continue.visible = page.dataSource;
                    });
                }
                else {
                    this.onUpdateMapInfo();
                }
                this.onUpdateUnitOffline(); //初始化假的主玩家
                //所有监听
                this._viewUI.btn_spread.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_cardType.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rule.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chongzhi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_continue.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_bankerRate0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_bankerRate1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_bankerRate2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_bankerRate3.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_betRate1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_betRate2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_betRate3.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_betRate4.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_niu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_notNiu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zhanji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.view_card.btn_start.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.view_card.btn_invite.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.view_card.btn_dismiss.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE, this, this.updateCardRoomDisplayInfo);
                this._game.sceneObjectMgr.on(NiuniuMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
                this._game.sceneObjectMgr.on(NiuniuMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.on(NiuniuMapInfo.EVENT_GAME_ROUND_CHANGE, this, this.onUpdateGameRound);
                this._game.sceneObjectMgr.on(NiuniuMapInfo.EVENT_GAME_NO, this, this.onUpdateGameNo); //牌局号
                this._game.sceneObjectMgr.on(NiuniuMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown); //倒计时更新
                this._viewUI.xipai.ani_xipai.on(LEvent.COMPLETE, this, this.onWashCardOver);
                this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this._game.mainScene && this._game.mainScene.on(SceneOperator.AVATAR_MOUSE_CLICK_HIT, this, this.onUpdatePoint);
            };
            //帧间隔心跳
            NiuNiuMapPage.prototype.deltaUpdate = function () {
                if (!(this._niuMapInfo instanceof NiuniuMapInfo))
                    return;
                if (!this._viewUI)
                    return;
                if (this._curStatus == 6 /* PLAY_STATUS_SET_BANKER */ || this._curStatus == 4 /* PLAY_STATUS_GAME_START */ || this._curStatus == 8 /* PLAY_STATUS_PUSH_CARD */
                    || this._curStatus == 10 /* PLAY_STATUS_COMPARE */ || this._curStatus == 3 /* PLAY_STATUS_GAME_SHUFFLE */ || this._curStatus == 11 /* PLAY_STATUS_SETTLE */) {
                    return;
                }
                var curTime = this._game.sync.serverTimeBys;
                var time = Math.floor(this._countDown - curTime);
                if (time > 0) {
                    this._viewUI.box_timer.visible = true;
                    this._viewUI.box_timer.txt_time.text = time.toString();
                }
                else {
                    this._viewUI.box_timer.visible = false;
                }
            };
            Object.defineProperty(NiuNiuMapPage.prototype, "isCardRoomType", {
                /******************************房卡专用****************************** */
                get: function () {
                    return this._niuStory instanceof gamecomponent.story.StoryRoomCardBase;
                },
                enumerable: true,
                configurable: true
            });
            NiuNiuMapPage.prototype.updateCardRoomDisplayInfo = function () {
                if (!this._niuMapInfo)
                    return;
                if (!this._game.sceneObjectMgr.mainUnit)
                    return;
                this.onUpdateUnit();
                if (this._niuMapInfo.GetCardRoomId() && !this._isPlaying && !this._isGameEnd) {
                    this.setCardRoomBtnVisible();
                }
            };
            // 房卡按纽及状态
            NiuNiuMapPage.prototype.setCardRoomBtnVisible = function () {
                if (this._isPlaying)
                    return;
                this._viewUI.view_card.visible = this.isCardRoomType;
                this._viewUI.text_cardroomid.visible = this.isCardRoomType;
                if (this.isCardRoomType) {
                    this._viewUI.text_cardroomid.text = "房间号：" + this._niuMapInfo.GetCardRoomId();
                    this._viewUI.view_card.btn_invite.visible = true;
                    this._viewUI.view_card.btn_invite.x = this._niuStory.isCardRoomMaster() ? 420 : this._viewUI.view_card.btn_start.x;
                    this._viewUI.view_card.btn_dismiss.visible = this._niuStory.isCardRoomMaster();
                    this._viewUI.view_card.btn_start.visible = this._niuStory.isCardRoomMaster();
                }
            };
            // 是否可以提前终止游戏
            NiuNiuMapPage.prototype.canEndCardGame = function () {
                if (this._isPlaying) {
                    TongyongPageDef.ins.alertRecharge(StringU.substitute("游戏中禁止退出，请先完成本轮" + this._niuMapInfo.GetCardRoomGameNumber() + "局游戏哦~~"), function () {
                    }, function () {
                    }, true, PathGameTongyong.ui_tongyong_general + "btn_qd.png");
                    return false;
                }
                return !this._isPlaying;
            };
            // 房卡模式解散游戏,是否需要房主限制
            NiuNiuMapPage.prototype.masterDismissCardGame = function () {
                var _this = this;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                if (mainUnit.GetRoomMaster() != 1) {
                    TongyongPageDef.ins.alertRecharge(StringU.substitute("只有房主才可以解散房间哦"), function () {
                    }, function () {
                    }, true, PathGameTongyong.ui_tongyong_general + "btn_qd.png");
                }
                else {
                    if (!this._isGameEnd) {
                        TongyongPageDef.ins.alertRecharge("游戏未开始，解散房间不会扣除金币！\n是否解散房间？", function () {
                            _this._niuStory.endRoomCardGame(mainUnit.GetIndex(), _this._niuMapInfo.GetCardRoomId());
                            _this._game.sceneObjectMgr.leaveStory(true);
                        }, null, false, PathGameTongyong.ui_tongyong_general + "btn_tx.png");
                    }
                }
            };
            NiuNiuMapPage.prototype.getUnitCount = function () {
                var count = 0;
                var unitDic = this._game.sceneObjectMgr.unitDic;
                if (unitDic) {
                    for (var key in unitDic) {
                        count++;
                    }
                }
                return count;
            };
            NiuNiuMapPage.prototype.setCardGameStart = function () {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                if (!mapinfo)
                    return;
                if (mapinfo.GetPlayState())
                    return;
                if (mainUnit.GetRoomMaster() != 1) {
                    TongyongPageDef.ins.alertRecharge(StringU.substitute("只有房主才可以选择开始游戏哦"), function () {
                    }, function () {
                    }, true, PathGameTongyong.ui_tongyong_general + "btn_qd.png");
                    return;
                }
                this._niuMgr.totalUnitCount = this.getUnitCount();
                if (this._niuMgr.totalUnitCount < NiuMgr.MIN_CARD_SEATS_COUNT) {
                    TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，再等等嘛，需要两个人才可以开始"), function () {
                    }, function () {
                    }, true, PathGameTongyong.ui_tongyong_general + "btn_qd.png");
                    return;
                }
                this._niuStory.startRoomCardGame(mainUnit.guid, this._niuMapInfo.GetCardRoomId());
            };
            /******************************************************************** */
            //玩家进来了
            NiuNiuMapPage.prototype.onUnitAdd = function (u) {
                this.onUpdateUnit();
            };
            //玩家出去了
            NiuNiuMapPage.prototype.onUnitRemove = function (u) {
                this.onUpdateUnit();
                //离场清除桌上卡牌
                this._niuMgr.clearCardObject(u.GetIndex());
            };
            //更新发牌动画
            NiuNiuMapPage.prototype.onUpdateAniDeal = function (status) {
                this._viewUI.ani_deal.ani1.stop();
                this._viewUI.ani_deal.visible = false;
            };
            NiuNiuMapPage.prototype.onWashCardOver = function () {
                var _this = this;
                if (!this._isPlayXiPai)
                    return;
                Laya.Tween.to(this._viewUI.xipai, { x: 1007, y: 165, alpha: 0, rotation: -30, scaleX: 0.35, scaleY: 0.35 }, 500);
                Laya.timer.once(500, this, function () {
                    _this._viewUI.paixie.cards.visible = true;
                    _this._viewUI.paixie.ani_chupai.play(0, false);
                    _this._isPlayXiPai = false;
                });
            };
            NiuNiuMapPage.prototype.onUpdateMapInfo = function () {
                var _this = this;
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._niuMapInfo = mapinfo;
                if (mapinfo) {
                    this.onUpdateStatus();
                    this.resetBattleIdx();
                    this.onUpdateUnit();
                    this.onUpdateBattle();
                    this.onUpdateCountDown();
                    if (this._curStatus > 0 /* PLAY_STATUS_GAME_NONE */) {
                        this._viewUI.paixie.cards.visible = true;
                    }
                    this._viewUI.btn_continue.visible = false;
                    if (this._niuStory.isReConnected) {
                        this._niuStory.mapLv = mapinfo.GetMapLevel();
                        this._isGameEnd = false;
                        this.initRoomConfig();
                        this.onUpdateGameNo();
                        this.onUpdateGameRound();
                    }
                    if (this.isCardRoomType) {
                        this.initRoomConfig();
                        this.updateCardRoomDisplayInfo();
                    }
                }
                else {
                    this.onUpdateUnitOffline();
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, function (page) {
                        _this._viewUI.btn_continue.visible = page.dataSource;
                    });
                    this._viewUI.btn_continue.visible = false;
                }
            };
            NiuNiuMapPage.prototype.onUpdateUnitOffline = function () {
                if (!this._niuMgr.offlineUnit)
                    return;
                var unitOffline = this._niuMgr.offlineUnit;
                var mPlayer = this._game.sceneObjectMgr.mainPlayer;
                if (unitOffline) {
                    this._viewUI.view0.visible = true;
                    var money = void 0;
                    if (mPlayer) {
                        if (!mPlayer.playerInfo)
                            return;
                        money = mPlayer.playerInfo.money;
                        this._viewUI.view0.view_icon.txt_name.text = getMainPlayerName(mPlayer.playerInfo.nickname);
                        this._viewUI.view0.view_icon.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + mPlayer.playerInfo.headimg + ".png";
                        this._viewUI.view0.view_icon.img_qifu.visible = mPlayer.playerInfo.qifu_endtime > this._game.sync.serverTimeBys;
                        if (this._viewUI.view0.view_icon.img_qifu.visible && mPlayer.playerInfo.qifu_type) {
                            this._viewUI.view0.view_icon.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[mPlayer.playerInfo.qifu_type - 1] + ".png";
                        }
                        //头像框
                        this._viewUI.view0.view_icon.img_txk.visible = mPlayer.playerInfo.vip_level > 0;
                        if (this._viewUI.view0.view_icon.img_txk.visible) {
                            this._viewUI.view0.view_icon.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + mPlayer.playerInfo.vip_level + ".png";
                        }
                    }
                    else {
                        money = unitOffline.GetMoney();
                        this._viewUI.view0.view_icon.txt_name.text = getMainPlayerName(unitOffline.GetName());
                        this._viewUI.view0.view_icon.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unitOffline.GetHeadImg() + ".png";
                        this._viewUI.view0.view_icon.img_qifu.visible = unitOffline.GetQiFuEndTime() > this._game.sync.serverTimeBys;
                        if (this._viewUI.view0.view_icon.img_qifu.visible && unitOffline.GetQiFuType()) {
                            this._viewUI.view0.view_icon.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[unitOffline.GetQiFuType() - 1] + ".png";
                        }
                        //头像框
                        this._viewUI.view0.view_icon.img_txk.visible = unitOffline.GetVipLevel() > 0;
                        if (this._viewUI.view0.view_icon.img_txk.visible) {
                            this._viewUI.view0.view_icon.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + unitOffline.GetVipLevel() + ".png";
                        }
                    }
                    this._viewUI.view0.view_icon.txt_money.text = EnumToString.getPointBackNum(money, 2).toString();
                }
            };
            NiuNiuMapPage.prototype.onUpdateUnit = function (qifu_index) {
                var _this = this;
                if (!this._niuMapInfo)
                    return;
                var battleInfoMgr = this._niuMapInfo.battleInfoMgr;
                this._unitIndexOnTable = [];
                //主玩家的座位
                if (!this._game.sceneObjectMgr.mainUnit)
                    return;
                var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var _loop_1 = function (index) {
                    var posIdx = (idx + index) % NiuMgr.MAX_NUM == 0 ? NiuMgr.MAX_NUM : (idx + index) % NiuMgr.MAX_NUM;
                    var unit = this_1._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    this_1._playerList[index].visible = unit;
                    if (unit) {
                        this_1._unitIndexOnTable.push(index);
                        var iconUrl = PathGameTongyong.ui_tongyong_touxiang + "head_" + unit.GetHeadImg() + ".png";
                        if (unit.type == UnitField.TYPE_ID_PLAYER) {
                            if (unit.GetIndex() == idx) {
                                iconUrl = PathGameTongyong.ui_tongyong_touxiang + "head_" + this_1._game.sceneObjectMgr.mainPlayer.playerInfo.headimg + ".png";
                            }
                        }
                        this_1._playerList[index].view_icon.txt_name.text = getMainPlayerName(unit.GetName());
                        this_1._playerList[index].view_icon.img_icon.skin = iconUrl;
                        if ((this_1._curStatus != 10 /* PLAY_STATUS_COMPARE */ && this_1._curStatus != 11 /* PLAY_STATUS_SETTLE */) || this_1._niuStory.isReConnected) {
                            this_1.updateMoney();
                        }
                        // this._playerList[index].img_isReady.visible = unit.IsReady() && status < 1;
                        if (unit.GetIdentity() == 1) {
                            this_1._bankerIndex = index;
                            if (this_1._niuStory.isReConnected && this_1._curStatus > 5 /* PLAY_STATUS_GET_BANKER */ && this_1._bankerRateList[index]) {
                                this_1._playerList[index].box_bankerRate.visible = true;
                                this_1._playerList[index].box_notBet.visible = false;
                                this_1._playerList[index].img_bankerRate.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "bei_{0}.png", this_1._bankerRateList[index]);
                                this_1._playerList[index].view_icon.img_banker.visible = true;
                            }
                            if (unit.GetIndex() == idx)
                                this_1._viewUI.box_betRate.visible = false;
                        }
                        else {
                            if (this_1._niuStory.isReConnected && this_1._curStatus > 5 /* PLAY_STATUS_GET_BANKER */) {
                                this_1._playerList[index].box_bankerRate.visible = false;
                                this_1._playerList[index].box_notBet.visible = false;
                            }
                        }
                        //头像框
                        this_1._playerList[index].view_icon.img_txk.visible = unit.GetVipLevel() > 0;
                        if (this_1._playerList[index].view_icon.img_txk.visible) {
                            this_1._playerList[index].view_icon.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + unit.GetVipLevel() + ".png";
                        }
                        //祈福成功 头像上就有动画
                        if (qifu_index && posIdx == qifu_index) {
                            this_1._playerList[index].view_icon.qifu_type.visible = true;
                            this_1._playerList[index].view_icon.qifu_type.skin = this_1._qifuTypeImgUrl;
                            this_1.playTween(this_1._playerList[index].view_icon.qifu_type, qifu_index);
                        }
                        //时间戳变化 才加上祈福标志
                        if (unit.GetQiFuEndTime() > this_1._game.sync.serverTimeBys) {
                            if (qifu_index && posIdx == qifu_index) {
                                Laya.timer.once(2500, this_1, function () {
                                    _this._playerList[index].view_icon.img_qifu.visible = true;
                                    if (_this._playerList[index].view_icon.img_qifu.visible && unit.GetQiFuType()) {
                                        _this._playerList[index].view_icon.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + _this._nameStrInfo[unit.GetQiFuType() - 1] + ".png";
                                    }
                                });
                            }
                            else {
                                this_1._playerList[index].view_icon.img_qifu.visible = true;
                                if (this_1._playerList[index].view_icon.img_qifu.visible && unit.GetQiFuType()) {
                                    this_1._playerList[index].view_icon.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this_1._nameStrInfo[unit.GetQiFuType() - 1] + ".png";
                                }
                            }
                        }
                        else {
                            this_1._playerList[index].view_icon.img_qifu.visible = false;
                        }
                    }
                };
                var this_1 = this;
                for (var index = 0; index < NiuMgr.MAX_NUM; index++) {
                    _loop_1(index);
                }
            };
            NiuNiuMapPage.prototype.playTween = function (img, index, isTween) {
                if (!img)
                    return;
                if (!this._timeList[index]) {
                    this._timeList[index] = 0;
                }
                if (this._timeList[index] >= 2500) {
                    this._timeList[index] = 0;
                    this._firstList[index] = 0;
                    img.visible = false;
                    return;
                }
                Laya.Tween.to(img, { alpha: isTween ? 1 : 0.2 }, this._diff, Laya.Ease.linearNone, Handler.create(this, this.playTween, [img, index, !isTween]), this._firstList[index] ? this._diff : 0);
                this._timeList[index] += this._diff;
                this._firstList[index] = 1;
            };
            NiuNiuMapPage.prototype.updateMoney = function () {
                if (!this._game.sceneObjectMgr.mainUnit)
                    return;
                var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                for (var index = 0; index < NiuMgr.MAX_NUM; index++) {
                    var posIdx = (idx + index) % NiuMgr.MAX_NUM == 0 ? NiuMgr.MAX_NUM : (idx + index) % NiuMgr.MAX_NUM;
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    this._playerList[index].visible = unit;
                    if (unit) {
                        var momey = EnumToString.getPointBackNum(unit.GetMoney(), 2).toString();
                        this._playerList[index].view_icon.txt_money.text = momey;
                    }
                }
            };
            //庄家赢钱，部分闲家输钱  表现
            NiuNiuMapPage.prototype.addBankerWinEff = function () {
                if (!this._bankerWinInfo)
                    return;
                if (this._bankerWinInfo.length == 2) { //庄家全输
                    return;
                }
                this._game.playSound(Path_game_niuniu.music_niuniu + "piaoqian.mp3", false);
                var bankerPos = this._bankerIndex;
                for (var i = 0; i < this._bankerWinInfo.length / 2; i++) {
                    var index = i * 2;
                    var unitPos = this.getUnitUIPos(this._bankerWinInfo[index]);
                    var unitBenefit = this._bankerWinInfo[index + 1];
                    if (unitPos == -1)
                        continue;
                    if (i < this._bankerWinInfo.length / 2 - 1) {
                        this.addMoneyFly(unitPos, bankerPos);
                        this.addMoneyClip(unitBenefit, unitPos);
                    }
                }
                if (this._bankerBenefit >= 0) {
                    this.addMoneyClip(this._bankerBenefit, bankerPos);
                }
            };
            //庄家输钱，部分闲家赢钱  表现
            NiuNiuMapPage.prototype.addBankerLoseEff = function () {
                if (!this._bankerLoseInfo)
                    return;
                if (this._bankerLoseInfo.length == 2) { //庄家通杀
                    return;
                }
                this._game.playSound(Path_game_niuniu.music_niuniu + "piaoqian.mp3", false);
                var bankerPos = this._bankerIndex;
                for (var i = 0; i < this._bankerLoseInfo.length / 2; i++) {
                    var index = i * 2;
                    var unitPos = this.getUnitUIPos(this._bankerLoseInfo[index]);
                    var unitBenefit = this._bankerLoseInfo[index + 1];
                    if (unitPos == -1)
                        continue;
                    if (i < this._bankerLoseInfo.length / 2 - 1) {
                        this.addMoneyFly(bankerPos, unitPos);
                        this.addMoneyClip(unitBenefit, unitPos);
                    }
                }
                if (this._bankerBenefit < 0) {
                    this.addMoneyClip(this._bankerBenefit, bankerPos);
                }
            };
            //根据实际位置获取精灵在UI上的逻辑位置
            NiuNiuMapPage.prototype.getUnitUIPos = function (_index) {
                //主玩家的座位
                var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                for (var index = 0; index < NiuMgr.MAX_NUM; index++) {
                    var posIdx = (idx + index) % NiuMgr.MAX_NUM == 0 ? NiuMgr.MAX_NUM : (idx + index) % NiuMgr.MAX_NUM;
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    if (unit && posIdx == _index) {
                        return index;
                    }
                }
                return -1;
            };
            NiuNiuMapPage.prototype.addKuangView = function (_info) {
                this._bankerList = _info;
                this._viewUI.addChild(this._kuangView);
                this._kuangView.ani1.gotoAndStop(0);
                this.count = 0;
                Laya.timer.loop(150, this, this.ranEffPos);
                this.ranEffPos();
            };
            NiuNiuMapPage.prototype.ranEffPos = function () {
                var _this = this;
                if (!this._game.mainScene || !this._game.mainScene.camera)
                    return;
                if (this.curIndex >= this._bankerList.length) {
                    this.curIndex = 0;
                }
                var randIndex = this.getUnitUIPos(this._bankerList[this.curIndex]);
                var posX = this._game.mainScene.camera.getScenePxByCellX(this._playerList[randIndex].x + this._playerList[randIndex].view_icon.x - 26);
                var posY = this._game.mainScene.camera.getScenePxByCellY(this._playerList[randIndex].y + this._playerList[randIndex].view_icon.y - 23);
                this._kuangView.pos(posX, posY);
                this._game.playSound(Path_game_niuniu.music_niuniu + "suiji.mp3", false);
                if (randIndex == this._bankerIndex) {
                    if (this.count >= 25) {
                        this._kuangView.ani1.play(0, false);
                        Laya.timer.once(1000, this, function () {
                            _this._game.playSound(Path_game_niuniu.music_niuniu + "suidao.mp3", false);
                            _this._playerList[_this._bankerIndex].view_icon.img_banker.visible = true;
                        });
                        Laya.timer.clear(this, this.ranEffPos);
                        return;
                    }
                }
                this.curIndex++;
                this.count++;
            };
            //下注倍数按钮更新
            NiuNiuMapPage.prototype.onUpdateBetBtn = function (a, b, c) {
                var bankerMoney = a;
                var playerMoney = this._game.sceneObjectMgr.mainPlayer.playerInfo.money;
                var bankerRate = b;
                var base = c;
                var maxBetRate = Math.round(Math.min(bankerMoney / (9 * bankerRate * base), playerMoney / (bankerRate * base)));
                maxBetRate = maxBetRate > 15 ? 15 : maxBetRate == 0 ? 1 : maxBetRate;
                if (this.isCardRoomType)
                    maxBetRate = 15;
                this._betList = RATE_LIST[maxBetRate.toString()];
                this._viewUI.btn_betRate1.label = this._betList[0] + "倍";
                if (this._betList[1]) {
                    this._viewUI.btn_betRate2.label = this._betList[1] + "倍";
                    this._viewUI.btn_betRate2.visible = true;
                }
                else {
                    this._viewUI.btn_betRate2.visible = false;
                }
                if (this._betList[2]) {
                    this._viewUI.btn_betRate3.label = this._betList[2] + "倍";
                    this._viewUI.btn_betRate3.visible = true;
                }
                else {
                    this._viewUI.btn_betRate3.visible = false;
                }
                if (this._betList[3]) {
                    this._viewUI.btn_betRate4.label = this._betList[3] + "倍";
                    this._viewUI.btn_betRate4.visible = true;
                }
                else {
                    this._viewUI.btn_betRate4.visible = false;
                }
            };
            //配牛点数更新
            NiuNiuMapPage.prototype.onUpdatePoint = function (hitAvatar) {
                if (this._curStatus != 9 /* PLAY_STATUS_MATCH_POINT */) {
                    return;
                }
                if (hitAvatar.card.GetOwnerIdx() != this._game.sceneObjectMgr.mainUnit.GetIndex()) {
                    return;
                }
                var cardCount = hitAvatar.card.GetCount();
                if (!hitAvatar.card._isTouch) {
                    if (this._viewUI.txt_pointTotal.text) {
                        return;
                    }
                    this._game.playSound(Path_game_niuniu.music_niuniu + "dianjipai.mp3", false);
                    hitAvatar.card._isTouch = true;
                    if (!this._viewUI.txt_point0.text) {
                        this._viewUI.txt_point0.text = cardCount.toString();
                    }
                    else if (!this._viewUI.txt_point1.text) {
                        this._viewUI.txt_point1.text = cardCount.toString();
                    }
                    else if (!this._viewUI.txt_point2.text) {
                        this._viewUI.txt_point2.text = cardCount.toString();
                    }
                    if (this._viewUI.txt_point0.text && this._viewUI.txt_point1.text && this._viewUI.txt_point2.text) {
                        var pointTotal = parseInt(this._viewUI.txt_point0.text) + parseInt(this._viewUI.txt_point1.text) + parseInt(this._viewUI.txt_point2.text);
                        this._viewUI.txt_pointTotal.text = pointTotal.toString();
                    }
                }
                else {
                    hitAvatar.card._isTouch = false;
                    this._viewUI.txt_pointTotal.text = "";
                    for (var i = 0; i < 3; i++) {
                        if (parseInt(this._viewUI["txt_point" + i].text) == cardCount) {
                            this._viewUI["txt_point" + i].text = "";
                            break;
                        }
                    }
                }
            };
            //重连之后，战斗日志从哪开始刷
            NiuNiuMapPage.prototype.resetBattleIdx = function () {
                if (!this._niuMapInfo)
                    return;
                //不是房卡模式，就不用算
                if (!this.isCardRoomType)
                    return;
                if (!this._niuStory.isReConnected)
                    return;
                var battleInfoMgr = this._niuMapInfo.battleInfoMgr;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    var index = 0;
                    if (battleInfo instanceof gamecomponent.object.BattleInfoBanker) {
                        index = i;
                    }
                    var index1 = 0;
                    if (battleInfo instanceof gamecomponent.object.BattleInfoSettle) {
                        index1 = i;
                    }
                    if (index < index1) {
                        this._battleIndex = index - 1;
                    }
                    else {
                        this._battleIndex = index1;
                    }
                }
            };
            NiuNiuMapPage.prototype.onUpdateBattle = function () {
                if (!this._niuMapInfo)
                    return;
                var battleInfoMgr = this._niuMapInfo.battleInfoMgr;
                if (!battleInfoMgr)
                    return;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    if (battleInfo instanceof gamecomponent.object.BattleInfoBanker) //抢庄
                     {
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            this._bankerRateInfo.push([battleInfo.SeatIndex, battleInfo.BetVal]);
                            this.onBattleBanker(battleInfo);
                            this._getBankerCount++;
                            if (this._getBankerCount == this.getUnitCount()) {
                                if (!this._niuStory.isReConnected)
                                    this.setBanker();
                            }
                        }
                    }
                    else if (battleInfo instanceof gamecomponent.object.BattleInfoBetRate) //定闲家下注倍数
                     {
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            this.onUpdateBetBtn(battleInfo.BankerMoney, battleInfo.BankerRate, battleInfo.Antes);
                        }
                    }
                    else if (battleInfo instanceof gamecomponent.object.BattleInfoBet) //下注
                     {
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            this.onBattleBet(battleInfo);
                        }
                    }
                    else if (battleInfo instanceof gamecomponent.object.BattleInfoPass) //拼牌
                     {
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            this.onBattlePinPai(battleInfo, this._niuMapInfo.GetMapState());
                        }
                    }
                    else if (battleInfo instanceof gamecomponent.object.BattleInfoPlayCard) //出牌
                     {
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            this.onBattlePlayCard(battleInfo);
                        }
                    }
                    else if (battleInfo instanceof gamecomponent.object.BattleInfoSettle) //结算
                     {
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            this.onBattleSettle(battleInfo);
                        }
                    }
                }
            };
            NiuNiuMapPage.prototype.setBanker = function () {
                var _this = this;
                var indexList = [];
                var index = 1;
                this._bankerRate = 0;
                for (var i = 0; i < this._bankerRateInfo.length; i++) {
                    if (this._bankerRateInfo[i][1] > this._bankerRate) {
                        this._bankerRate = this._bankerRateInfo[i][1];
                        indexList = [];
                        indexList.push(this._bankerRateInfo[i][0]);
                    }
                    else if (this._bankerRateInfo[i][1] == this._bankerRate) {
                        indexList.push(this._bankerRateInfo[i][0]);
                    }
                }
                if (indexList.length == 1) {
                    this._viewUI.addChild(this._kuangView);
                    this._kuangView.ani1.play(0, false);
                    var zhuangIndex_1 = this.getUnitUIPos(indexList[0]);
                    if (this._game.mainScene.camera) {
                        var posX = this._game.mainScene.camera.getScenePxByCellX(this._playerList[zhuangIndex_1].x + this._playerList[zhuangIndex_1].view_icon.x - 26);
                        var posY = this._game.mainScene.camera.getScenePxByCellY(this._playerList[zhuangIndex_1].y + this._playerList[zhuangIndex_1].view_icon.y - 23);
                        this._kuangView.pos(posX, posY);
                        Laya.timer.once(1000, this, function () {
                            _this._game.playSound(Path_game_niuniu.music_niuniu + "suidao.mp3", false);
                            _this._playerList[zhuangIndex_1].view_icon.img_banker.visible = true;
                        });
                    }
                }
                else {
                    this.addKuangView(indexList);
                }
            };
            NiuNiuMapPage.prototype.onBattleBanker = function (info) {
                var flag = info.BetVal > 0;
                var index = this.getUnitUIPos(info.SeatIndex);
                this._bankerRateList[index] = info.BetVal ? info.BetVal : 1;
                if (this._niuStory.isReConnected && this._curStatus > 5 /* PLAY_STATUS_GET_BANKER */) {
                    if (index == this._bankerIndex) {
                        this._playerList[index].img_bankerRate.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "bei_{0}.png", this._bankerRateList[index]);
                    }
                }
                else {
                    this._playerList[index].box_notBet.visible = !flag;
                    this._playerList[index].box_bankerRate.visible = flag;
                    this._playerList[index].img_bankerRate.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "bei_{0}.png", info.BetVal);
                }
            };
            NiuNiuMapPage.prototype.onBattleBet = function (info) {
                var index = this.getUnitUIPos(info.SeatIndex);
                this._playerList[index].box_betRate.visible = true;
                this._betTemps[info.SeatIndex - 1] = info.BetVal;
                this.setBetRate(index, info.BetVal);
            };
            NiuNiuMapPage.prototype.onBattlePinPai = function (info, status) {
                var index = this.getUnitUIPos(info.SeatIndex);
                if (index == 0) {
                    this._viewUI.img_yiwancheng.visible = true;
                }
                else {
                    this._playerList[index].img_yiwancheng.visible = true;
                    if (status == 9 /* PLAY_STATUS_MATCH_POINT */) {
                        this._game.playSound(Path_game_niuniu.music_niuniu + "gaipai.mp3", false);
                    }
                }
            };
            NiuNiuMapPage.prototype.onBattleSettle = function (info) {
                this._settleInfo[info.SeatIndex - 1] = info.SettleVal;
                if (this._game.sceneObjectMgr.mainUnit.GetIndex() == info.SeatIndex) {
                    this._mainPlayerBenefit = parseFloat(info.SettleVal);
                }
                if (this.getUnitUIPos(info.SeatIndex) == this._bankerIndex) {
                    this._bankerBenefit = parseFloat(info.SettleVal);
                    this._bankerWinInfo.push(parseFloat(info.SeatIndex));
                    this._bankerWinInfo.push(parseFloat(info.SettleVal));
                    this._bankerLoseInfo.push(parseFloat(info.SeatIndex));
                    this._bankerLoseInfo.push(parseFloat(info.SettleVal));
                }
                else {
                    //庄家赢钱部分
                    if (info.SettleVal < 0) {
                        this._bankerWinInfo.push(parseFloat(info.SeatIndex));
                        this._bankerWinInfo.push(parseFloat(info.SettleVal));
                    }
                    //庄家输钱部分
                    if (info.SettleVal > 0) {
                        this._bankerLoseInfo.push(parseFloat(info.SeatIndex));
                        this._bankerLoseInfo.push(parseFloat(info.SettleVal));
                    }
                }
            };
            NiuNiuMapPage.prototype.onBattlePlayCard = function (info) {
                var unitNum = this.getUnitCount();
                var cardType = this._niuMgr.checkCardsType(info.Cards);
                var playerIndex = this.getUnitUIPos(info.SeatIndex); //玩家真实位置转换为UI位置
                var begin = this.getBeginIndex(); //第一个开牌的位置（庄家下一位）
                var headImg = this._game.sceneObjectMgr.getUnitByIdx(info.SeatIndex).GetHeadImg();
                var sex = parseInt(headImg) <= 10 ? 1 : 2;
                this._allType[info.SeatIndex - 1] = cardType;
                for (var i = 0; i < unitNum; i++) {
                    var index = begin + i >= unitNum ? begin + i - unitNum : begin + i;
                    var curIndex = this._unitIndexOnTable[index];
                    if (curIndex == playerIndex) {
                        if (curIndex == 0) { //主玩家
                            if (this._curStatus > 9 /* PLAY_STATUS_MATCH_POINT */) {
                                if (this._niuMgr.isReKaiPai) {
                                    this.reShowMainCardType(i, cardType, sex);
                                }
                                else {
                                    this.showMainCardType(i, cardType, sex);
                                }
                            }
                        }
                        else { //其他玩家
                            if (this._curStatus > 9 /* PLAY_STATUS_MATCH_POINT */) {
                                if (this._niuMgr.isReKaiPai) {
                                    this.reShowOtherCardType(curIndex, i, cardType, sex);
                                }
                                else {
                                    this.showOtherCardType(curIndex, i, cardType, sex);
                                }
                            }
                        }
                    }
                }
            };
            //显示主玩家牌型
            NiuNiuMapPage.prototype.showMainCardType = function (i, cardType, sex) {
                var _this = this;
                this._viewUI.img_yiwancheng.visible = false;
                Laya.timer.once(1000 + 1000 * i, this, function () {
                    _this._viewUI.box_showCard.visible = true;
                    _this._viewUI.box_typeNiu.box_notNiu.visible = cardType == 0;
                    _this._viewUI.box_bigNiu.visible = cardType > 7;
                    _this._viewUI.box_typeNiu.box_niu.visible = cardType > 0;
                    _this._viewUI.box_bigNiu.ani1.play(0, false);
                    cardType > 0 && _this._viewUI.box_typeNiu.ani1.play(0, false);
                    _this._game.playSound(Path_game_niuniu.music_niuniu + "" + StringU.substitute("niu{0}_{1}.mp3", cardType, sex), false);
                });
                if (cardType >= 10) {
                    this._viewUI.box_typeNiu.img_type.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "n_{0}.png", cardType);
                    this._viewUI.box_typeNiu.img_x.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "sz1_x.png");
                    this._viewUI.box_typeNiu.img_rate.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "sz1_{0}.png", this._niuMgr.checkCardsRate(cardType));
                }
                else {
                    this._viewUI.box_typeNiu.img_type.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "n_{0}.png", cardType);
                    this._viewUI.box_typeNiu.img_x.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "sz_x.png");
                    this._viewUI.box_typeNiu.img_rate.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "sz_{0}.png", this._niuMgr.checkCardsRate(cardType));
                }
            };
            //显示主玩家牌型（断线重连）
            NiuNiuMapPage.prototype.reShowMainCardType = function (i, cardType, sex) {
                this._viewUI.img_yiwancheng.visible = false;
                this._viewUI.box_showCard.visible = true;
                this._viewUI.box_typeNiu.box_notNiu.visible = cardType == 0;
                this._viewUI.box_bigNiu.visible = cardType > 7;
                this._viewUI.box_typeNiu.box_niu.visible = cardType > 0;
                this._viewUI.box_bigNiu.ani1.play(0, false);
                cardType > 0 && this._viewUI.box_typeNiu.ani1.play(0, false);
                this._game.playSound(Path_game_niuniu.music_niuniu + "" + StringU.substitute("niu{0}_{1}.mp3", cardType, sex), false);
                if (cardType >= 10) {
                    this._viewUI.box_typeNiu.img_type.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "n_{0}.png", cardType);
                    this._viewUI.box_typeNiu.img_x.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "sz1_x.png");
                    this._viewUI.box_typeNiu.img_rate.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "sz1_{0}.png", this._niuMgr.checkCardsRate(cardType));
                }
                else {
                    this._viewUI.box_typeNiu.img_type.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "n_{0}.png", cardType);
                    this._viewUI.box_typeNiu.img_x.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "sz_x.png");
                    this._viewUI.box_typeNiu.img_rate.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "sz_{0}.png", this._niuMgr.checkCardsRate(cardType));
                }
            };
            //显示其他玩家牌型
            NiuNiuMapPage.prototype.showOtherCardType = function (curIndex, i, cardType, sex) {
                var _this = this;
                this._playerList[curIndex].img_yiwancheng.visible = false;
                Laya.timer.once(1000 + 1000 * i, this, function () {
                    _this._playerList[curIndex].box_cardType.visible = true;
                    _this._playerList[curIndex].box_typeNiu.box_notNiu.visible = cardType == 0;
                    _this._playerList[curIndex].box_bigNiu.visible = cardType > 7;
                    _this._playerList[curIndex].box_typeNiu.box_niu.visible = cardType > 0;
                    _this._playerList[curIndex].box_bigNiu.ani1.play(0, false);
                    cardType > 0 && _this._playerList[curIndex].box_typeNiu.ani1.play(0, false);
                    _this._game.playSound(Path_game_niuniu.music_niuniu + "" + StringU.substitute("niu{0}_{1}.mp3", cardType, sex), false);
                });
                if (cardType >= 10) {
                    this._playerList[curIndex].box_typeNiu.img_type.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "n_{0}.png", cardType);
                    this._playerList[curIndex].box_typeNiu.img_x.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "sz1_x.png");
                    this._playerList[curIndex].box_typeNiu.img_rate.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "sz1_{0}.png", this._niuMgr.checkCardsRate(cardType));
                }
                else {
                    this._playerList[curIndex].box_typeNiu.img_type.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "n_{0}.png", cardType);
                    this._playerList[curIndex].box_typeNiu.img_x.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "sz_x.png");
                    this._playerList[curIndex].box_typeNiu.img_rate.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "sz_{0}.png", this._niuMgr.checkCardsRate(cardType));
                }
            };
            //显示其他玩家牌型（断线重连）
            NiuNiuMapPage.prototype.reShowOtherCardType = function (curIndex, i, cardType, sex) {
                this._playerList[curIndex].img_yiwancheng.visible = false;
                this._playerList[curIndex].box_cardType.visible = true;
                this._playerList[curIndex].box_typeNiu.box_notNiu.visible = cardType == 0;
                this._playerList[curIndex].box_bigNiu.visible = cardType > 7;
                this._playerList[curIndex].box_typeNiu.box_niu.visible = cardType > 0;
                this._playerList[curIndex].box_bigNiu.ani1.play(0, false);
                cardType > 0 && this._playerList[curIndex].box_typeNiu.ani1.play(0, false);
                this._game.playSound(Path_game_niuniu.music_niuniu + "" + StringU.substitute("niu{0}_{1}.mp3", cardType, sex), false);
                if (cardType >= 10) {
                    this._playerList[curIndex].box_typeNiu.img_type.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "n_{0}.png", cardType);
                    this._playerList[curIndex].box_typeNiu.img_x.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "sz1_x.png");
                    this._playerList[curIndex].box_typeNiu.img_rate.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "sz1_{0}.png", this._niuMgr.checkCardsRate(cardType));
                }
                else {
                    this._playerList[curIndex].box_typeNiu.img_type.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "n_{0}.png", cardType);
                    this._playerList[curIndex].box_typeNiu.img_x.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "sz_x.png");
                    this._playerList[curIndex].box_typeNiu.img_rate.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "sz_{0}.png", this._niuMgr.checkCardsRate(cardType));
                }
            };
            NiuNiuMapPage.prototype.getBeginIndex = function () {
                var index = this._unitIndexOnTable.indexOf(this._bankerIndex) + 1;
                if (index >= this._unitIndexOnTable.length)
                    index = 0;
                return index;
            };
            //金币变化 飘金币特效
            NiuNiuMapPage.prototype.addMoneyFly = function (fromPos, tarPos) {
                if (!this._game.mainScene || !this._game.mainScene.camera)
                    return;
                var fromX = this._game.mainScene.camera.getScenePxByCellX(this._playerList[fromPos].x + this._playerList[fromPos].view_icon.x);
                var fromY = this._game.mainScene.camera.getScenePxByCellY(this._playerList[fromPos].y + this._playerList[fromPos].view_icon.y);
                var tarX = this._game.mainScene.camera.getScenePxByCellX(this._playerList[tarPos].x + this._playerList[tarPos].view_icon.x);
                var tarY = this._game.mainScene.camera.getScenePxByCellY(this._playerList[tarPos].y + this._playerList[tarPos].view_icon.y);
                var _loop_2 = function (i) {
                    var posBeginX = MathU.randomRange(fromX + 23, fromX + 70);
                    var posBeginY = MathU.randomRange(fromY + 23, fromY + 70);
                    var posEndX = MathU.randomRange(tarX + 23, tarX + 65);
                    var posEndY = MathU.randomRange(tarY + 23, tarY + 65);
                    var moneyImg = new LImage(PathGameTongyong.ui_tongyong_general + "icon_money.png");
                    moneyImg.scale(0.7, 0.7);
                    if (!moneyImg.parent)
                        this_2._viewUI.addChild(moneyImg);
                    moneyImg.pos(posBeginX, posBeginY);
                    // Laya.Bezier 贝塞尔曲线  取得点
                    Laya.Tween.to(moneyImg, { x: posEndX }, i * MONEY_FLY_TIME, null);
                    Laya.Tween.to(moneyImg, { y: posEndY }, i * MONEY_FLY_TIME, null, Handler.create(this_2, function () {
                        moneyImg.removeSelf();
                    }));
                };
                var this_2 = this;
                for (var i = 0; i < MONEY_NUM; i++) {
                    _loop_2(i);
                }
            };
            //金币变化 飘字clip
            NiuNiuMapPage.prototype.addMoneyClip = function (value, pos) {
                var valueClip = value >= 0 ? new NiuniuClip(NiuniuClip.ADD_MONEY_FONT) : new NiuniuClip(NiuniuClip.SUB_MONEY_FONT);
                var preSkin = value >= 0 ? PathGameTongyong.ui_tongyong_general + "tu_jia.png" : PathGameTongyong.ui_tongyong_general + "tu_jian.png";
                valueClip.scale(0.8, 0.8);
                valueClip.anchorX = 0.5;
                valueClip.setText(Math.abs(value), true, false, preSkin);
                var playerIcon = this._playerList[pos].view_icon;
                valueClip.x = playerIcon.clip_money.x;
                valueClip.y = playerIcon.clip_money.y;
                playerIcon.clip_money.parent.addChild(valueClip);
                playerIcon.clip_money.visible = false;
                this._clipList.push(valueClip);
                Laya.Tween.clearAll(valueClip);
                Laya.Tween.to(valueClip, { y: valueClip.y - 30 }, 1500);
            };
            //清理所有飘字clip
            NiuNiuMapPage.prototype.clearClips = function () {
                if (this._clipList && this._clipList.length) {
                    for (var i = 0; i < this._clipList.length; i++) {
                        var clip = this._clipList[i];
                        clip.removeSelf();
                        clip.destroy(true);
                    }
                }
                this._clipList = [];
            };
            //更新倒计时时间戳
            NiuNiuMapPage.prototype.onUpdateCountDown = function () {
                if (!this._niuMapInfo)
                    return;
                this._countDown = this._niuMapInfo.GetCountDown();
            };
            //设置下注倍数
            NiuNiuMapPage.prototype.setBetRate = function (i, val) {
                var num1 = 0;
                var num2 = 0;
                if (val >= 10) {
                    num1 = 1;
                    num2 = val % 10;
                    this._playerList[i].img_betRate2.visible = true;
                }
                else {
                    num1 = val;
                    this._playerList[i].img_betRate2.visible = false;
                }
                this._playerList[i].img_betRate1.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "bei_{0}.png", num1);
                this._playerList[i].img_betRate2.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "bei_{0}.png", num2);
            };
            //更新地图状态
            NiuNiuMapPage.prototype.onUpdateStatus = function () {
                var _this = this;
                if (!this._niuMapInfo)
                    return;
                if (this._curStatus == this._niuMapInfo.GetMapState())
                    return;
                this._curStatus = this._niuMapInfo.GetMapState();
                this._viewUI.btn_continue.visible = this._curStatus == 13 /* PLAY_STATUS_SHOW_GAME */ && !this.isCardRoomType;
                this._viewUI.box_bankerRate.visible = this._curStatus == 5 /* PLAY_STATUS_GET_BANKER */;
                if (this._curStatus == 6 /* PLAY_STATUS_SET_BANKER */ || this._curStatus == 4 /* PLAY_STATUS_GAME_START */ || this._curStatus == 8 /* PLAY_STATUS_PUSH_CARD */
                    || this._curStatus == 10 /* PLAY_STATUS_COMPARE */ || this._curStatus == 11 /* PLAY_STATUS_SETTLE */ || this._curStatus == 3 /* PLAY_STATUS_GAME_SHUFFLE */) {
                    this._viewUI.box_timer.visible = false;
                }
                if (this._curStatus > 0 /* PLAY_STATUS_GAME_NONE */ && this._curStatus < 13 /* PLAY_STATUS_SHOW_GAME */) {
                    this._pageHandle.pushClose({ id: TongyongPageDef.PAGE_TONGYONG_MATCH, parent: this._game.uiRoot.HUD });
                }
                if (this._curStatus != 9 /* PLAY_STATUS_MATCH_POINT */) {
                    this._viewUI.box_matchPoint.visible = false;
                }
                this._viewUI.ani_deal.visible = this._curStatus == 8 /* PLAY_STATUS_PUSH_CARD */ && this._niuStory.isFaPai == 1;
                this._isPlaying = this._curStatus >= 3 /* PLAY_STATUS_GAME_SHUFFLE */ && this._curStatus < 13 /* PLAY_STATUS_SHOW_GAME */;
                //房卡按钮屏蔽
                this._viewUI.view_card.visible = this._curStatus == 1 /* PLAY_STATUS_CARDROOM_CREATED */ || this._curStatus == 2 /* PLAY_STATUS_CARDROOM_WAIT */;
                this._viewUI.text_cardroomid.visible = this._curStatus == 1 /* PLAY_STATUS_CARDROOM_CREATED */ || this._curStatus == 2 /* PLAY_STATUS_CARDROOM_WAIT */;
                switch (this._curStatus) {
                    case 0 /* PLAY_STATUS_GAME_NONE */: // 准备阶段
                        this.initRoomConfig();
                        break;
                    case 3 /* PLAY_STATUS_GAME_SHUFFLE */: // 洗牌阶段
                        if (this.isCardRoomType) {
                            this._pageHandle.pushClose({ id: page_1.NiuniuPageDef.PAGE_NIUNIU_CARDROOM_SETTLE, parent: this._game.uiRoot.HUD });
                            this.clearClips();
                            this.resetUI();
                            this.resetData();
                            this._game.sceneObjectMgr.clearOfflineObject();
                        }
                        this._viewUI.xipai.x = 640;
                        this._viewUI.xipai.y = 310;
                        this._viewUI.xipai.scaleX = 1;
                        this._viewUI.xipai.scaleY = 1;
                        this._viewUI.xipai.alpha = 1;
                        this._viewUI.xipai.rotation = 0;
                        this._viewUI.xipai.visible = true;
                        this._viewUI.xipai.ani_xipai.play(0, false);
                        this._isPlayXiPai = true;
                        break;
                    case 4 /* PLAY_STATUS_GAME_START */: // 游戏开始
                        this._pageHandle.pushOpen({ id: page_1.NiuniuPageDef.PAGE_NIUNIU_BEGIN, parent: this._game.uiRoot.HUD });
                        this._game.playSound(Path_game_niuniu.music_niuniu + "kaishi.mp3", false);
                        this._viewUI.box_tips.visible = false;
                        break;
                    case 5 /* PLAY_STATUS_GET_BANKER */: // 开始抢庄
                        this._pageHandle.pushClose({ id: page_1.NiuniuPageDef.PAGE_NIUNIU_BEGIN, parent: this._game.uiRoot.HUD });
                        this._viewUI.txt_status.text = "开始抢庄";
                        break;
                    case 6 /* PLAY_STATUS_SET_BANKER */: // 定庄阶段
                        this._viewUI.box_bankerRate.visible = false;
                        this._viewUI.box_tips.visible = false;
                        break;
                    case 7 /* PLAY_STATUS_BET */: // 下注阶段
                        Laya.timer.clear(this, this.ranEffPos);
                        this._kuangView.removeSelf();
                        for (var i = 0; i < NiuMgr.MAX_NUM; i++) {
                            if (this._bankerIndex == i) {
                                if (this._playerList[i].box_notBet.visible) {
                                    this._playerList[i].box_bankerRate.visible = true;
                                    this._playerList[i].box_notBet.visible = false;
                                    this._playerList[i].img_bankerRate.skin = StringU.substitute(Path_game_niuniu.ui_niuniu + "bei_1.png");
                                }
                            }
                            else {
                                this._playerList[i].box_bankerRate.visible = false;
                                this._playerList[i].box_notBet.visible = false;
                            }
                        }
                        this._viewUI.box_betRate.visible = this._bankerIndex != 0;
                        this._viewUI.txt_status.text = "开始下注";
                        break;
                    case 8 /* PLAY_STATUS_PUSH_CARD */: // 发牌阶段
                        this._viewUI.ani_deal.ani1.play(0, true);
                        this._viewUI.box_bankerRate.visible = false;
                        this._viewUI.box_betRate.visible = false;
                        this._viewUI.box_tips.visible = false;
                        break;
                    case 9 /* PLAY_STATUS_MATCH_POINT */: // 配牛阶段
                        this._viewUI.box_btn.visible = true;
                        this._viewUI.box_matchPoint.visible = true;
                        this._niuMgr.isReKaiPai = false;
                        break;
                    case 10 /* PLAY_STATUS_COMPARE */: // 比牌阶段
                        this._viewUI.txt_status.text = "比牌中";
                        this._viewUI.box_btn.visible = false;
                        this._viewUI.box_tips.visible = false;
                        this._viewUI.box_xinshou.visible = false;
                        break;
                    case 11 /* PLAY_STATUS_SETTLE */: // 结算阶段
                        this._viewUI.txt_status.text = "结算中";
                        this._viewUI.box_tips.visible = false;
                        this._viewUI.box_matchPoint.visible = false;
                        this.addBankerWinEff();
                        var timeInternal = MONEY_NUM * MONEY_FLY_TIME;
                        Laya.timer.once(timeInternal, this, function () {
                            _this.addBankerLoseEff();
                            _this.updateMoney();
                        });
                        Laya.timer.once(2000, this, function () {
                            if (_this._bankerLoseInfo.length == 2) { //庄家通杀
                                _this._game.playSound(Path_game_niuniu.music_niuniu + "zjtongchi.mp3", false);
                                _this._game.uiRoot.HUD.open(page_1.NiuniuPageDef.PAGE_NIUNIU_TONGSHA);
                            }
                            else if (_this._mainPlayerBenefit > 0) {
                                var rand = MathU.randomRange(1, 3);
                                _this._game.playSound(StringU.substitute(PathGameTongyong.music_tongyong + "win{0}.mp3", rand), true);
                                _this._game.uiRoot.HUD.open(page_1.NiuniuPageDef.PAGE_NIUNIU_WIN);
                            }
                            else {
                                var rand = MathU.randomRange(1, 4);
                                _this._game.playSound(StringU.substitute(PathGameTongyong.music_tongyong + "lose{0}.mp3", rand), true);
                                _this._game.uiRoot.HUD.open(page_1.NiuniuPageDef.PAGE_NIUNIU_LOSE);
                            }
                        });
                        break;
                    case 12 /* PLAY_STATUS_SETTLE_INFO */: // 显示结算信息
                        this.openCardSettlePage();
                        this._niuStory.isReConnected = false;
                        break;
                    case 13 /* PLAY_STATUS_SHOW_GAME */: // 本局展示阶段
                        if (this.isCardRoomType && this._niuMapInfo.GetRound() == this._niuMapInfo.GetCardRoomGameNumber()) {
                            this.openCardSettlePage();
                        }
                        this._pageHandle.pushClose({ id: page_1.NiuniuPageDef.PAGE_NIUNIU_TONGSHA, parent: this._game.uiRoot.HUD });
                        if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < this._room_config[1]) {
                            TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", this._room_config[1]), function () {
                                _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                            }, function () {
                            }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
                        }
                        break;
                }
                this._pageHandle.updatePageHandle(); //更新额外界面的开关状态
                this._pageHandle.reset(); //清空额外界面存储数组
            };
            NiuNiuMapPage.prototype.chargeArgs = function (temp, flag) {
                for (var i = 0; i < temp.length; i++) {
                    if (flag) {
                        if (temp[i] != -1) {
                            return true;
                        }
                    }
                    else {
                        if (temp[i] != 0) {
                            return true;
                        }
                    }
                }
                return false;
            };
            NiuNiuMapPage.prototype.openCardSettlePage = function () {
                if (!this.chargeArgs(this._betTemps, false))
                    return;
                if (!this.chargeArgs(this._settleInfo, false))
                    return;
                if (!this.chargeArgs(this._allType, true))
                    return;
                if (!this._niuMapInfo)
                    return;
                var temps = [];
                var infoTemps = [];
                for (var i = 0; i < 5; i++) {
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(i + 1);
                    if (unit) {
                        var betNum = this._betTemps[i]; //下注倍数
                        var jifen = this._settleInfo[i]; //结算金币
                        var cardType = CARD_TYPE[this._allType[i]]; //牌型
                        var identity = unit.GetIdentity(); //身份
                        var name_1 = unit.GetName(); //名字
                        var totalJiFen = unit.GetMoney(); //积分
                        if (unit) {
                            var obj = {
                                isMain: this._game.sceneObjectMgr.mainUnit.GetIndex() == i + 1,
                                isbanker: identity == 1,
                                name: name_1,
                                difen: ROOM_CONFIG[this._niuStory.mapLv][0],
                                betRate: betNum ? "" + betNum : "",
                                bankerRate: identity == 1 ? this._bankerRate == 0 ? "1" : "" + this._bankerRate : "",
                                jiFen: EnumToString.getPointBackNum(jifen, 2),
                                totalJiFen: EnumToString.getPointBackNum(totalJiFen, 2),
                                cardtype: cardType,
                            };
                            temps.push(obj);
                        }
                    }
                }
                infoTemps.push(this._niuMapInfo.GetRound());
                infoTemps.push(this._niuMapInfo.GetCardRoomGameNumber());
                infoTemps.push(this._niuMapInfo.GetCountDown());
                infoTemps.push(temps);
                this._pageHandle.pushOpen({ id: page_1.NiuniuPageDef.PAGE_NIUNIU_CARDROOM_SETTLE, dataSource: infoTemps, parent: this._game.uiRoot.HUD });
            };
            //按钮缓动回调
            NiuNiuMapPage.prototype.onBtnTweenEnd = function (e, target) {
                var _this = this;
                switch (target) {
                    case this._viewUI.btn_spread: //菜单
                        this.showMenu(true);
                        break;
                    case this._viewUI.btn_cardType: //牌型
                        this._game.uiRoot.general.open(page_1.NiuniuPageDef.PAGE_NIUNIU_RULE, function (page) {
                            page.dataSource = 1;
                        });
                        break;
                    case this._viewUI.btn_rule: //规则
                        this._game.uiRoot.general.open(page_1.NiuniuPageDef.PAGE_NIUNIU_RULE);
                        break;
                    case this._viewUI.btn_chongzhi: //充值
                        this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                        break;
                    case this._viewUI.btn_set: //设置
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING);
                        break;
                    case this._viewUI.btn_niu: //有牛
                        if (!this._viewUI.txt_pointTotal.text) {
                            this._game.uiRoot.topUnder.showTips("拼牌错误");
                            return;
                        }
                        if (parseInt(this._viewUI.txt_pointTotal.text) % 10 != 0) {
                            this._game.uiRoot.topUnder.showTips("拼牌错误");
                            return;
                        }
                        this._game.playSound(Path_game_niuniu.music_niuniu + "pingpaiwancheng.mp3", false);
                        this._niuMgr.gaipai();
                        // Laya.timer.once(500, this, () => {
                        //     this._viewUI.img_yiwancheng.visible = true;
                        // })
                        this._game.network.call_niuniu_pinpai();
                        this._viewUI.box_matchPoint.visible = false;
                        this._viewUI.box_btn.visible = false;
                        this._viewUI.box_xinshou.visible = false;
                        this._viewUI.box_tips.visible = true;
                        this._viewUI.txt_tips.text = "等待其他玩家拼牌";
                        break;
                    case this._viewUI.btn_notNiu: //没牛
                        var type = this._niuMgr.checkMyCards();
                        if (type) {
                            this._game.uiRoot.topUnder.showTips("拼牌错误");
                            return;
                        }
                        this._game.playSound(Path_game_niuniu.music_niuniu + "pingpaiwancheng.mp3", false);
                        this._niuMgr.gaipai();
                        // Laya.timer.once(500, this, () => {
                        //     this._viewUI.img_yiwancheng.visible = true;
                        // })
                        this._game.network.call_niuniu_pinpai();
                        this._viewUI.box_matchPoint.visible = false;
                        this._viewUI.box_btn.visible = false;
                        this._viewUI.box_xinshou.visible = false;
                        this._viewUI.box_tips.visible = true;
                        this._viewUI.txt_tips.text = "等待其他玩家拼牌";
                        break;
                    case this._viewUI.btn_zhanji: //战绩
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, function (page) {
                            page.dataSource = {
                                gameid: page_1.NiuniuPageDef.GAME_NAME,
                                isCardRoomType: _this._niuMapInfo.GetMapLevel() == Web_operation_fields.GAME_ROOM_CONFIG_CARD_ROOM,
                            };
                        });
                        break;
                    case this._viewUI.btn_qifu: //祈福
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU);
                        break;
                    case this._viewUI.btn_back: //返回
                        if (this.isCardRoomType) {
                            if (!this.canEndCardGame())
                                return;
                            if (this._niuStory.isCardRoomMaster()) {
                                this.masterDismissCardGame();
                                return;
                            }
                        }
                        else {
                            if (this._niuMapInfo && this._niuMapInfo.GetPlayState() == 1) {
                                this._game.showTips("游戏尚未结束，请先打完这局哦~");
                                return;
                            }
                        }
                        this.clearClips();
                        this.resetData();
                        this.clearMapInfoListen();
                        this._game.sceneObjectMgr.leaveStory(true);
                        logd("玩家发送离开地图协议，离开房间");
                        // this.close();
                        break;
                    case this._viewUI.btn_continue: //继续游戏
                        if (this._game.sceneObjectMgr.mainUnit) {
                            if (this._game.sceneObjectMgr.mainUnit.GetMoney() < this._room_config[1]) {
                                TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", this._room_config[1]), function () {
                                    _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                                }, function () {
                                }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
                                return;
                            }
                        }
                        if (this._niuMapInfo instanceof MapInfo) {
                            this.clearClips();
                            this.resetUI();
                            this.resetData();
                            this._game.sceneObjectMgr.leaveStory();
                            logd("玩家发送离开地图协议");
                        }
                        else {
                            this.onUpdateMapInfo();
                        }
                        break;
                    case this._viewUI.btn_bankerRate0: //不抢庄
                        this._game.network.call_niuniu_banker(0);
                        this._viewUI.box_bankerRate.visible = false;
                        this._viewUI.box_tips.visible = true;
                        this._viewUI.txt_tips.text = "等待其他玩家抢庄";
                        break;
                    case this._viewUI.btn_bankerRate1: //抢庄倍数1
                        this._game.network.call_niuniu_banker(1);
                        this._viewUI.box_bankerRate.visible = false;
                        this._viewUI.box_tips.visible = true;
                        this._viewUI.txt_tips.text = "等待其他玩家抢庄";
                        break;
                    case this._viewUI.btn_bankerRate2: //抢庄倍数2
                        this._game.network.call_niuniu_banker(2);
                        this._viewUI.box_bankerRate.visible = false;
                        this._viewUI.box_tips.visible = true;
                        this._viewUI.txt_tips.text = "等待其他玩家抢庄";
                        break;
                    case this._viewUI.btn_bankerRate3: //抢庄倍数3
                        this._game.network.call_niuniu_banker(3);
                        this._viewUI.box_bankerRate.visible = false;
                        this._viewUI.box_tips.visible = true;
                        this._viewUI.txt_tips.text = "等待其他玩家抢庄";
                        break;
                    case this._viewUI.btn_betRate1: //下注倍数1
                        this._game.network.call_niuniu_bet(this._betList[0]);
                        this._viewUI.box_betRate.visible = false;
                        this._viewUI.box_tips.visible = true;
                        this._viewUI.txt_tips.text = "等待其他玩家下注";
                        break;
                    case this._viewUI.btn_betRate2: //下注倍数2
                        this._game.network.call_niuniu_bet(this._betList[1]);
                        this._viewUI.box_betRate.visible = false;
                        this._viewUI.box_tips.visible = true;
                        this._viewUI.txt_tips.text = "等待其他玩家下注";
                        break;
                    case this._viewUI.btn_betRate3: //下注倍数3
                        this._game.network.call_niuniu_bet(this._betList[2]);
                        this._viewUI.box_betRate.visible = false;
                        this._viewUI.box_tips.visible = true;
                        this._viewUI.txt_tips.text = "等待其他玩家下注";
                        break;
                    case this._viewUI.btn_betRate4: //下注倍数4
                        this._game.network.call_niuniu_bet(this._betList[3]);
                        this._viewUI.box_betRate.visible = false;
                        this._viewUI.box_tips.visible = true;
                        this._viewUI.txt_tips.text = "等待其他玩家下注";
                        break;
                    case this._viewUI.view_card.btn_invite: //房卡邀请
                        // 微信邀请玩家参与房卡游戏
                        logd("btn_invite:", this._niuMapInfo.GetCardRoomId());
                        if (this.isCardRoomType && this._niuMapInfo.GetCardRoomId()) {
                            this._game.network.call_get_roomcard_share(page_1.NiuniuPageDef.GAME_NAME);
                        }
                        break;
                    case this._viewUI.view_card.btn_dismiss: //房卡解散
                        this.masterDismissCardGame();
                        break;
                    case this._viewUI.view_card.btn_start: ////房卡开始
                        this.setCardGameStart();
                        break;
                    default:
                        break;
                }
            };
            NiuNiuMapPage.prototype.onMouseClick = function (e) {
                if (e.target != this._viewUI.btn_spread) {
                    this.showMenu(false);
                }
            };
            NiuNiuMapPage.prototype.showMenu = function (isShow) {
                var _this = this;
                if (isShow) {
                    this._viewUI.box_menu.visible = true;
                    this._viewUI.btn_spread.visible = false;
                    this._viewUI.box_menu.y = -this._viewUI.box_menu.height;
                    Laya.Tween.to(this._viewUI.box_menu, { y: 10 }, 300, Laya.Ease.circIn);
                }
                else {
                    if (this._viewUI.box_menu.y >= 0) {
                        Laya.Tween.to(this._viewUI.box_menu, { y: -this._viewUI.box_menu.height }, 300, Laya.Ease.circIn, Handler.create(this, function () {
                            _this._viewUI.btn_spread.visible = true;
                            _this._viewUI.box_menu.visible = false;
                        }));
                    }
                }
            };
            NiuNiuMapPage.prototype.onUpdateGameRound = function () {
                if (!this._niuMapInfo)
                    return;
                if (this._niuMapInfo.GetRound() && this._niuMapInfo.GetCardRoomGameNumber()) {
                    this._viewUI.txt_round.visible = true;
                    this._viewUI.txt_round.text = StringU.substitute("局数：{0}/{1}", this._niuMapInfo.GetRound(), this._niuMapInfo.GetCardRoomGameNumber());
                }
                else {
                    this._viewUI.txt_round.visible = false;
                }
            };
            NiuNiuMapPage.prototype.onUpdateGameNo = function () {
                if (!this._niuMapInfo)
                    return;
                if (this._niuMapInfo.GetGameNo()) {
                    this._viewUI.box_id.visible = true;
                    this._viewUI.txt_id.text = "牌局号：" + this._niuMapInfo.GetGameNo();
                    // if (this.isCardRoomType)
                    //     this._viewUI.txt_id.text = "房间号：" + this._niuMapInfo.GetCardRoomId();
                }
            };
            NiuNiuMapPage.prototype.onOptHandler = function (optcode, msg) {
                var _this = this;
                if (msg.type == Operation_Fields.OPRATE_GAME) {
                    switch (msg.reason) {
                        case Operation_Fields.OPRATE_GAME_QIFU_SUCCESS_RESULT:
                            var dataInfo_1 = JSON.parse(msg.data);
                            //打开祈福动画界面
                            this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU_ANI, function (page) {
                                page.dataSource = StringU.substitute(PathGameTongyong.ui_tongyong_qifu + "f_{0}1.png", _this._nameStrInfo[dataInfo_1.msg.qf_id - 1]);
                            });
                            //相对应的玩家精灵做出反应
                            this._qifuTypeImgUrl = StringU.substitute(PathGameTongyong.ui_tongyong_qifu + "f_{0}2.png", this._nameStrInfo[dataInfo_1.msg.qf_id - 1]);
                            this.onUpdateUnit(dataInfo_1.qifu_index);
                            break;
                    }
                }
                else if (msg.type == Operation_Fields.OPRATE_TELEPORT) {
                    switch (msg.reason) {
                        case Operation_Fields.OPRATE_TELEPORT_MAP_CREATE_ROOM_SUCCESS: //在地图中重新创建房间成功
                            this.clearClips();
                            this.resetUI();
                            this.resetData();
                            this._battleIndex = -1;
                            this._game.sceneObjectMgr.clearOfflineObject();
                            break;
                    }
                }
            };
            NiuNiuMapPage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_GET_ROOMCARD_SHARE) {
                    if (data && data.success == 0) {
                        var img_url = data.msg.img_url;
                        var wx_context = data.msg.context || NiuMgr.WXSHARE_DESC;
                        var wx_title = data.msg.title + this._niuMapInfo.GetCardRoomId() || StringU.substitute(NiuMgr.WXSHARE_TITLE, this._niuMapInfo.GetCardRoomId());
                        this._game.wxShareUrl(wx_title, wx_context, img_url);
                    }
                }
            };
            NiuNiuMapPage.prototype.initView = function () {
                //界面UI
                this._kuangView = new ui.game_ui.tongyong.effect.SuiJiUI();
                this._viewUI.box_tips.visible = false;
                this._viewUI.box_status.visible = false;
                this._viewUI.box_bankerRate.visible = false;
                this._viewUI.box_betRate.visible = false;
                this._viewUI.box_timer.visible = false;
                this._viewUI.box_xinshou.visible = false;
                this._viewUI.box_id.visible = false;
                this._viewUI.xipai.visible = false;
                this._viewUI.ani_deal.visible = false;
                this._viewUI.ani_deal.ani1.stop();
                this._viewUI.paixie.cards.visible = false;
                this._viewUI.paixie.ani_chupai.stop();
                this._viewUI.box_menu.visible = false;
                this._viewUI.box_menu.zOrder = 99;
                this._viewUI.txt_round.visible = false;
                this._playerList = [];
                for (var i = 0; i < NiuMgr.MAX_NUM; i++) {
                    this._playerList.push(this._viewUI["view" + i]);
                }
                for (var i = 0; i < NiuMgr.MAX_NUM; i++) {
                    this._playerList[i].visible = false;
                    this._playerList[i].box_bankerRate.visible = false;
                    this._playerList[i].box_betRate.visible = false;
                    this._playerList[i].box_notBet.visible = false;
                    this._playerList[i].img_isReady.visible = false;
                    this._playerList[i].view_icon.clip_money.visible = false;
                    this._playerList[i].view_icon.img_banker.visible = false;
                    if (i > 0) {
                        this._playerList[i].box_cardType.visible = false;
                        this._playerList[i].img_yiwancheng.visible = false;
                    }
                }
                //主玩家UI
                this._viewUI.box_showCard.visible = false;
                this._viewUI.box_btn.visible = false;
                this._viewUI.box_matchPoint.visible = false;
                this._viewUI.img_yiwancheng.visible = false;
                this._viewUI.txt_point0.text = "";
                this._viewUI.txt_point1.text = "";
                this._viewUI.txt_point2.text = "";
                this._viewUI.txt_pointTotal.text = "";
                this._viewUI.btn_continue.visible = false;
            };
            NiuNiuMapPage.prototype.initRoomConfig = function () {
                if (this._niuStory.maplv) {
                    this._room_config = ROOM_CONFIG[this._niuStory.maplv];
                    var str = "";
                    if (this._niuStory.maplv == Web_operation_fields.GAME_ROOM_CONFIG_QIANGZHUANG_NIUNIU_1) {
                        str = "房间：新手场  底注：";
                    }
                    else if (this._niuStory.maplv == Web_operation_fields.GAME_ROOM_CONFIG_QIANGZHUANG_NIUNIU_2) {
                        str = "房间：小资场  底注：";
                    }
                    else if (this._niuStory.maplv == Web_operation_fields.GAME_ROOM_CONFIG_QIANGZHUANG_NIUNIU_3) {
                        str = "房间：老板场  底注：";
                    }
                    else if (this._niuStory.maplv == Web_operation_fields.GAME_ROOM_CONFIG_QIANGZHUANG_NIUNIU_4) {
                        str = "房间：富豪场  底注：";
                    }
                    else if (this._niuStory.maplv == Web_operation_fields.GAME_ROOM_CONFIG_CARD_ROOM) {
                        str = "房卡模式  底注：";
                    }
                    this._viewUI.txt_base.text = str + this._room_config[0];
                    if (this._niuStory.maplv != Web_operation_fields.GAME_ROOM_CONFIG_CARD_ROOM) {
                        var playerMoney = this._game.sceneObjectMgr.mainPlayer.playerInfo.money;
                        this._viewUI.btn_bankerRate1.disabled = !(playerMoney >= this._room_config[0] * 30);
                        this._viewUI.btn_bankerRate2.disabled = !(playerMoney >= this._room_config[0] * 60);
                        this._viewUI.btn_bankerRate3.disabled = !(playerMoney >= this._room_config[0] * 90);
                    }
                }
            };
            //重置UI
            NiuNiuMapPage.prototype.resetUI = function () {
                for (var i = 0; i < NiuMgr.MAX_NUM; i++) {
                    this._playerList[i].box_bankerRate.visible = false;
                    this._playerList[i].box_betRate.visible = false;
                    this._playerList[i].box_notBet.visible = false;
                    this._playerList[i].img_isReady.visible = false;
                    this._playerList[i].view_icon.clip_money.visible = false;
                    this._playerList[i].view_icon.img_banker.visible = false;
                    if (i > 0) {
                        if (!this.isCardRoomType) {
                            this._playerList[i].visible = false;
                        }
                        this._playerList[i].box_cardType.visible = false;
                        this._playerList[i].img_yiwancheng.visible = false;
                    }
                }
                //主玩家UI
                this._viewUI.box_showCard.visible = false;
                this._viewUI.box_btn.visible = false;
                this._viewUI.box_matchPoint.visible = false;
                this._viewUI.img_yiwancheng.visible = false;
                this._viewUI.txt_point0.text = "";
                this._viewUI.txt_point1.text = "";
                this._viewUI.txt_point2.text = "";
                this._viewUI.txt_pointTotal.text = "";
                this._viewUI.btn_continue.visible = false;
                //界面UI
                this._viewUI.box_tips.visible = false;
                this._viewUI.box_bankerRate.visible = false;
                this._viewUI.box_betRate.visible = false;
                this._viewUI.box_timer.visible = false;
                this._viewUI.box_xinshou.visible = false;
                this._viewUI.paixie.cards.visible = false;
                this._viewUI.paixie.ani_chupai.stop();
                if (!this.isCardRoomType) {
                    this._viewUI.box_id.visible = false;
                }
            };
            NiuNiuMapPage.prototype.resetData = function () {
                //不是房卡模式，才会去设置
                if (!this.isCardRoomType) {
                    this._battleIndex = -1;
                }
                this._getBankerCount = 0;
                this._bankerRateInfo = [];
                this._bankerWinInfo = [];
                this._bankerLoseInfo = [];
                this._betList = [];
                this._bankerList = [];
                this._room_config = [];
                this._betTemps = [0, 0, 0, 0, 0];
                this._settleInfo = [0, 0, 0, 0, 0];
                this._allType = [0, 0, 0, 0, 0];
            };
            NiuNiuMapPage.prototype.clearMapInfoListen = function () {
                this._game.sceneObjectMgr.off(NiuniuMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
                this._game.sceneObjectMgr.off(NiuniuMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.off(NiuniuMapInfo.EVENT_GAME_ROUND_CHANGE, this, this.onUpdateGameRound);
                this._game.sceneObjectMgr.off(NiuniuMapInfo.EVENT_GAME_NO, this, this.onUpdateGameNo); //牌局号
                this._game.sceneObjectMgr.off(NiuniuMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown); //倒计时更新
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE, this, this.updateCardRoomDisplayInfo);
                this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                Laya.Tween.clearAll(this);
                Laya.timer.clearAll(this);
            };
            NiuNiuMapPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_spread.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_cardType.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_back.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_rule.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_chongzhi.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_set.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_continue.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_bankerRate0.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_bankerRate1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_bankerRate2.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_bankerRate3.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_betRate1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_betRate2.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_betRate3.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_betRate4.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_niu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_notNiu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_zhanji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.view_card.btn_start.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.view_card.btn_invite.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.view_card.btn_dismiss.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                    this._viewUI.xipai.ani_xipai.off(LEvent.COMPLETE, this, this.onWashCardOver);
                    this._game.mainScene.off(SceneOperator.AVATAR_MOUSE_CLICK_HIT, this, this.onUpdatePoint);
                    if (this._niuMgr) {
                        this._niuMgr.off(NiuMgr.DEAL_OVER, this, this.onUpdateAniDeal);
                    }
                    this._game.sceneObjectMgr.off(NiuniuMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
                    this._game.sceneObjectMgr.off(NiuniuMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                    this._game.sceneObjectMgr.off(NiuniuMapInfo.EVENT_GAME_ROUND_CHANGE, this, this.onUpdateUnit); //继续游戏状态改变后
                    this._game.sceneObjectMgr.off(NiuniuMapInfo.EVENT_GAME_NO, this, this.onUpdateGameNo); //牌局号
                    this._game.sceneObjectMgr.off(NiuniuMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown); //倒计时更新
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE, this, this.updateCardRoomDisplayInfo);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                    this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                    Laya.Tween.clearAll(this);
                    Laya.timer.clearAll(this);
                    this.clearClips();
                    this.resetData();
                    this.clearMapInfoListen();
                    this._game.stopAllSound();
                    this._game.stopMusic();
                    this._kuangView && this._kuangView.removeSelf();
                }
                _super.prototype.close.call(this);
            };
            return NiuNiuMapPage;
        }(game.gui.base.Page));
        page_1.NiuNiuMapPage = NiuNiuMapPage;
    })(page = gameniuniu.page || (gameniuniu.page = {}));
})(gameniuniu || (gameniuniu = {}));
//# sourceMappingURL=NiuNiuMapPage.js.map