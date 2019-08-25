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
var gametbniuniu;
(function (gametbniuniu) {
    var page;
    (function (page_1) {
        var MONEY_NUM = 50; // 特效金币数量
        var MONEY_FLY_TIME = 30; // 金币飞行时间间隔
        var MAX_SEATS_COUNT = 6; // 最大座位数
        var ROOM_CONFIG = {
            "41": [1, 50],
            "42": [10, 200],
            "43": [50, 500],
            "44": [100, 1000],
        };
        var TbNiuNiuMapPage = /** @class */ (function (_super) {
            __extends(TbNiuNiuMapPage, _super);
            function TbNiuNiuMapPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._settleInfo = []; //结算信息集合
                _this._clipList = []; //飘字集合
                _this._isPlayXiPai = false; //播放洗牌
                _this._diff = 500;
                _this._timeList = {};
                _this._firstList = {};
                _this._nameStrInfo = ["xs", "px", "gsy", "gg", "cs", "tdg"];
                //战斗结构体更新
                _this._battleIndex = -1;
                _this._isNeedDuang = false;
                _this._delta = 1000;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    Path_game_tbniuniu.atlas_game_ui + "tbniuniu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/suiji.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            TbNiuNiuMapPage.prototype.init = function () {
                var _this = this;
                this._viewUI = this.createView('game_ui.tbniuniu.TongBiNNUI');
                this.addChild(this._viewUI);
                this.initView();
                if (!this._pageHandle) {
                    this._pageHandle = PageHandle.Get("TbNiuNiuMapPage"); //额外界面控制器
                }
                if (!this._niuMgr) {
                    this._niuStory = this._game.sceneObjectMgr.story;
                    this._niuMgr = this._niuStory.niuMgr;
                    this._niuMgr.on(TbNiuNiuMgr.TUOGUAN_GAME, this, this.onUpdateBtnTuoGuan);
                    this._niuMgr.on(TbNiuNiuMgr.DEAL_OVER, this, this.onUpdateAniDeal);
                }
                this._game.playMusic(Path_game_tbniuniu.music_tbniuniu + "tbnn_bgm.mp3");
                if (!this._niuStory.isReConnected) {
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, function (page) {
                        _this.showContinue(page.dataSource);
                    });
                }
                else {
                    this.onUpdateMapInfo();
                }
            };
            // 页面打开时执行函数
            TbNiuNiuMapPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_spread.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_cardType.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rule.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chongzhi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_continue.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_betRate1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_betRate2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_betRate3.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_betRate4.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_betRate5.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_tuoguan.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_tanpai.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zhanji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.xipai.ani_xipai.on(LEvent.COMPLETE, this, this.onWashCardOver);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(TbniuniuMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
                this._game.sceneObjectMgr.on(TbniuniuMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.on(TbniuniuMapInfo.EVENT_STATUS_CONTINUE, this, this.onUpdateUnit); //继续游戏状态改变后
                this._game.sceneObjectMgr.on(TbniuniuMapInfo.EVENT_GAME_NO, this, this.onUpdateGameNo); //牌局号
                this._game.sceneObjectMgr.on(TbniuniuMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown); //倒计时时间戳更新
                this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this.onUpdateUnitOffline();
            };
            //帧间隔心跳
            TbNiuNiuMapPage.prototype.deltaUpdate = function () {
                if (!this._viewUI)
                    return;
                if (!(this._niuMapInfo instanceof TbniuniuMapInfo))
                    return;
                if (this._curStatus == 1 /* PLAY_STATUS_GAMESTART */ || this._curStatus == 5 /* PLAY_STATUS_COMPARE */
                    || this._curStatus == 0 /* PLAY_STATUS_NONE */ || this._curStatus == 6 /* PLAY_STATUS_SETTLE */
                    || this._curStatus == 3 /* PLAY_STATUS_PUSH_CARD */) {
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
            //玩家进来了
            TbNiuNiuMapPage.prototype.onUnitAdd = function (u) {
                this.onUpdateUnit();
            };
            //玩家出去了
            TbNiuNiuMapPage.prototype.onUnitRemove = function (u) {
                this.onUpdateUnit();
                //离场清除桌上卡牌
                this._niuMgr.clearCardObject(u.GetIndex());
            };
            //更新托管按钮
            TbNiuNiuMapPage.prototype.onUpdateBtnTuoGuan = function () {
                var _this = this;
                this._viewUI.btn_tuoguan.skin = this._niuMgr.isTuoGuan > 0 ? Path_game_tbniuniu.ui_tbniuniu + "btn_tg1.png" : Path_game_tbniuniu.ui_tbniuniu + "btn_tg0.png";
                if (this._niuMgr.isTuoGuan == 0)
                    return;
                if (this._niuMapInfo && this._curStatus == 7 /* PLAY_STATUS_SHOW_GAME */) {
                    if (this._game.sceneObjectMgr.mainPlayer.GetMoney() < this._room_config[1])
                        return;
                    this.continueGame();
                    this._game.sceneObjectMgr.leaveStory();
                }
                else if (!this._niuMapInfo) {
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, function (page) {
                        _this.showContinue(page.dataSource);
                        if (!_this._game.sceneObjectMgr.story.mapinfo) {
                            _this._niuMgr.isTuoGuan = 0;
                        }
                    });
                    this._viewUI.btn_continue.visible = false;
                    this.continueGame();
                }
            };
            //是否显示继续游戏
            TbNiuNiuMapPage.prototype.showContinue = function (data) {
                this._viewUI.btn_continue.visible = data;
            };
            //控制发牌动画
            TbNiuNiuMapPage.prototype.onUpdateAniDeal = function () {
                this._viewUI.ani_deal.ani1.stop();
                this._viewUI.ani_deal.visible = false;
            };
            TbNiuNiuMapPage.prototype.onWashCardOver = function () {
                var _this = this;
                if (!this._isPlayXiPai)
                    return;
                Laya.Tween.to(this._viewUI.xipai, { x: 865, y: 135, alpha: 0, rotation: -30, scaleX: 0.35, scaleY: 0.35 }, 500);
                Laya.timer.once(500, this, function () {
                    _this._viewUI.paixie.cards.visible = true;
                    _this._viewUI.paixie.ani_chupai.play(0, false);
                    _this._isPlayXiPai = false;
                });
            };
            TbNiuNiuMapPage.prototype.onUpdateMapInfo = function () {
                var _this = this;
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                this._niuMapInfo = mapinfo;
                if (mapinfo) {
                    this._viewUI.btn_continue.visible = false;
                    this.onUpdateStatus();
                    this.onUpdateUnit();
                    this.onUpdateBattle();
                    this.onUpdateCountDown();
                    if (this._niuStory.isReConnected) {
                        this._niuStory.mapLv = mapinfo.GetMapLevel();
                        this.initRoomConfig();
                        if (this._curStatus > 0 /* PLAY_STATUS_NONE */) {
                            this._viewUI.paixie.cards.visible = true;
                        }
                    }
                }
                else {
                    this.onUpdateUnitOffline();
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, function (page) {
                        _this.showContinue(page.dataSource);
                        if (!_this._game.sceneObjectMgr.story.mapinfo) {
                            _this._niuMgr.isTuoGuan = 0;
                        }
                    });
                    this._viewUI.btn_continue.visible = false;
                }
            };
            TbNiuNiuMapPage.prototype.onUpdateUnitOffline = function () {
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
                    money = EnumToString.getPointBackNum(money, 2).toString();
                    this._viewUI.view0.view_icon.txt_money.text = money;
                }
            };
            TbNiuNiuMapPage.prototype.onUpdateUnit = function (qifu_index) {
                var _this = this;
                if (!this._niuMapInfo)
                    return;
                var battleInfoMgr = this._niuMapInfo.battleInfoMgr;
                this._unitIndexOnTable = [];
                //主玩家的座位
                if (!this._game.sceneObjectMgr.mainUnit)
                    return;
                var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var max = MAX_SEATS_COUNT;
                var _loop_1 = function (index) {
                    var posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
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
                        if (this_1._curStatus != 6 /* PLAY_STATUS_SETTLE */ || this_1._niuStory.isReConnected) {
                            this_1.updateMoney();
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
                for (var index = 0; index < max; index++) {
                    _loop_1(index);
                }
            };
            TbNiuNiuMapPage.prototype.playTween = function (img, index, isTween) {
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
            TbNiuNiuMapPage.prototype.onOptHandler = function (optcode, msg) {
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
            };
            TbNiuNiuMapPage.prototype.updateMoney = function () {
                if (!this._game.sceneObjectMgr.mainUnit)
                    return;
                var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var max = MAX_SEATS_COUNT;
                for (var index = 0; index < max; index++) {
                    var posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    this._playerList[index].visible = unit;
                    if (unit) {
                        var money = EnumToString.getPointBackNum(unit.GetMoney(), 2).toString();
                        this._playerList[index].view_icon.txt_money.text = money;
                    }
                }
            };
            //结算表现
            TbNiuNiuMapPage.prototype.addSettleEff = function () {
                if (!this._settleInfo)
                    return;
                for (var i = 0; i < this._settleInfo.length / 2; i++) {
                    var index = i * 2;
                    var unitPos = this.getUnitUIPos(this._settleInfo[index]);
                    var unitBenefit = this._settleInfo[index + 1];
                    if (unitPos == -1)
                        continue;
                    if (i < this._settleInfo.length / 2 - 1) {
                        this.addMoneyFly(unitPos, this._winnerIndex);
                        this.addMoneyClip(unitBenefit, unitPos);
                    }
                    else {
                        this.addMoneyClip(unitBenefit, this._winnerIndex);
                    }
                }
            };
            //根据实际位置获取精灵在UI上的逻辑位置
            TbNiuNiuMapPage.prototype.getUnitUIPos = function (_index) {
                //主玩家的座位
                var idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                var max = MAX_SEATS_COUNT;
                for (var index = 0; index < max; index++) {
                    var posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    if (unit && posIdx == _index) {
                        return index;
                    }
                }
                return -1;
            };
            //下注倍数按钮更新
            TbNiuNiuMapPage.prototype.onUpdateBetBtn = function () {
                var playerMoney = this._game.sceneObjectMgr.mainPlayer.playerInfo.money;
                var antes = this._room_config[0];
                if (playerMoney > antes * 10) {
                    this._maxBetRate = 5;
                    this._viewUI.btn_betRate4.disabled = false;
                    this._viewUI.btn_betRate5.disabled = false;
                }
                else if (playerMoney >= antes * 8 && playerMoney < antes * 10) {
                    this._maxBetRate = 4;
                    this._viewUI.btn_betRate4.disabled = false;
                    this._viewUI.btn_betRate5.disabled = true;
                }
                else if (playerMoney >= antes * 6 && playerMoney < antes * 8) {
                    this._maxBetRate = 3;
                    this._viewUI.btn_betRate4.disabled = true;
                    this._viewUI.btn_betRate5.disabled = true;
                }
            };
            TbNiuNiuMapPage.prototype.onUpdateBattle = function () {
                if (!this._niuMapInfo)
                    return;
                var battleInfoMgr = this._niuMapInfo.battleInfoMgr;
                if (!battleInfoMgr)
                    return;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    switch (battleInfo.Type) {
                        case 2: { //下注
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                this.onBattleBet(info);
                            }
                            break;
                        }
                        case 3: { //出牌
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                this.onBattlePlayCard(info);
                            }
                            break;
                        }
                        case 11: { //结算
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                this.onBattleSettle(info);
                            }
                            break;
                        }
                        default:
                            break;
                    }
                }
            };
            TbNiuNiuMapPage.prototype.onBattleBet = function (info) {
                var index = this.getUnitUIPos(info.SeatIndex);
                this._playerList[index].box_betRate.visible = true;
                this.setBetRate(index, info.BetVal);
            };
            TbNiuNiuMapPage.prototype.onBattleSettle = function (info) {
                if (this._game.sceneObjectMgr.mainUnit.GetIndex() == info.SeatIndex) {
                    this._mainPlayerBenefit = parseFloat(info.SettleVal);
                }
                if (info.SettleVal > 0) {
                    this._winnerIndex = this.getUnitUIPos(info.SeatIndex);
                    this._playerList[this._winnerIndex].view_icon.img_banker.visible = true;
                    this._playerList[this._winnerIndex].view_icon.img_banker.ani1.play(0, false);
                }
                this._settleInfo.push(parseFloat(info.SeatIndex));
                this._settleInfo.push(parseFloat(info.SettleVal));
            };
            TbNiuNiuMapPage.prototype.onBattlePlayCard = function (info) {
                var _this = this;
                var unitNum = this.getPlayerOnSeat();
                var cardType = this._niuMgr.checkCardsType(info.Cards);
                var playerIndex = this.getUnitUIPos(info.SeatIndex); //玩家真实位置转换为UI位置
                var headImg = this._game.sceneObjectMgr.getUnitByIdx(info.SeatIndex).GetHeadImg();
                var sex = parseInt(headImg) <= 10 ? "nan" : "nv";
                if (playerIndex == 0) {
                    Laya.timer.once(350, this, function () {
                        _this._viewUI.box_showCard.visible = true;
                        _this._viewUI.box_typeNiu.box_notNiu.visible = cardType == 0;
                        _this._viewUI.box_bigNiu.visible = cardType > 7;
                        _this._viewUI.box_typeNiu.box_niu.visible = cardType > 0;
                        _this._viewUI.box_bigNiu.ani1.play(0, false);
                        cardType > 0 && _this._viewUI.box_typeNiu.ani1.play(0, false);
                        _this._game.playSound(Path_game_tbniuniu.music_tbniuniu + "" + StringU.substitute("niu{0}_{1}.mp3", cardType, sex), false);
                    });
                    if (cardType >= 10) {
                        this._viewUI.box_typeNiu.img_type.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "n_{0}.png", cardType);
                        this._viewUI.box_typeNiu.img_x.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "sz1_x.png");
                        this._viewUI.box_typeNiu.img_rate.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "sz1_{0}.png", this._niuMgr.checkCardsRate(cardType));
                    }
                    else {
                        this._viewUI.box_typeNiu.img_type.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "n_{0}.png", cardType);
                        this._viewUI.box_typeNiu.img_x.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "sz_x.png");
                        this._viewUI.box_typeNiu.img_rate.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "sz_{0}.png", this._niuMgr.checkCardsRate(cardType));
                    }
                }
                else {
                    Laya.timer.once(350, this, function () {
                        _this._playerList[playerIndex].box_cardType.visible = true;
                        _this._playerList[playerIndex].box_typeNiu.box_notNiu.visible = cardType == 0;
                        _this._playerList[playerIndex].box_bigNiu.visible = cardType > 7;
                        _this._playerList[playerIndex].box_typeNiu.box_niu.visible = cardType > 0;
                        _this._playerList[playerIndex].box_bigNiu.ani1.play(0, false);
                        cardType > 0 && _this._playerList[playerIndex].box_typeNiu.ani1.play(0, false);
                        _this._game.playSound(Path_game_tbniuniu.music_tbniuniu + "" + StringU.substitute("niu{0}_{1}.mp3", cardType, sex), false);
                    });
                    if (cardType >= 10) {
                        this._playerList[playerIndex].box_typeNiu.img_type.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "n_{0}.png", cardType);
                        this._playerList[playerIndex].box_typeNiu.img_x.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "sz1_x.png");
                        this._playerList[playerIndex].box_typeNiu.img_rate.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "sz1_{0}.png", this._niuMgr.checkCardsRate(cardType));
                    }
                    else {
                        this._playerList[playerIndex].box_typeNiu.img_type.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "n_{0}.png", cardType);
                        this._playerList[playerIndex].box_typeNiu.img_x.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "sz_x.png");
                        this._playerList[playerIndex].box_typeNiu.img_rate.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "sz_{0}.png", this._niuMgr.checkCardsRate(cardType));
                    }
                }
            };
            TbNiuNiuMapPage.prototype.getBeginIndex = function () {
                var index = this._unitIndexOnTable.indexOf(this._winnerIndex) + 1;
                if (index >= this._unitIndexOnTable.length)
                    index = 0;
                return index;
            };
            //金币变化 飘金币特效
            TbNiuNiuMapPage.prototype.addMoneyFly = function (fromPos, tarPos) {
                if (!this._game.mainScene || !this._game.mainScene.camera)
                    return;
                var fromX = this._game.mainScene.camera.getScenePxByCellX(this._playerList[fromPos].x + this._playerList[fromPos].view_icon.x);
                var fromY = this._game.mainScene.camera.getScenePxByCellY(this._playerList[fromPos].y + this._playerList[fromPos].view_icon.y);
                var tarX = this._game.mainScene.camera.getScenePxByCellX(this._playerList[tarPos].x + this._playerList[tarPos].view_icon.x);
                var tarY = this._game.mainScene.camera.getScenePxByCellY(this._playerList[tarPos].y + this._playerList[tarPos].view_icon.y);
                this._game.playSound(Path_game_tbniuniu.music_tbniuniu + "piaoqian.mp3", false);
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
            TbNiuNiuMapPage.prototype.addMoneyClip = function (value, pos) {
                var valueClip = value >= 0 ? new TbniuniuClip(TbniuniuClip.ADD_MONEY_FONT) : new TbniuniuClip(TbniuniuClip.SUB_MONEY_FONT);
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
            TbNiuNiuMapPage.prototype.clearClips = function () {
                if (this._clipList && this._clipList.length) {
                    for (var i = 0; i < this._clipList.length; i++) {
                        var clip = this._clipList[i];
                        clip.removeSelf();
                        clip.destroy(true);
                    }
                }
                this._clipList = [];
            };
            //获取座位上的玩家数量
            TbNiuNiuMapPage.prototype.getPlayerOnSeat = function () {
                var unitNum = 0;
                for (var index = 0; index < MAX_SEATS_COUNT; index++) {
                    var unit = this._game.sceneObjectMgr.getUnitByIdx(index + 1);
                    if (unit) {
                        unitNum++;
                    }
                }
                return unitNum;
            };
            //设置下注倍数
            TbNiuNiuMapPage.prototype.setBetRate = function (i, val) {
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
                this._playerList[i].img_betRate1.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "bei_{0}.png", num1);
                this._playerList[i].img_betRate2.skin = StringU.substitute(Path_game_tbniuniu.ui_tbniuniu + "bei_{0}.png", num2);
            };
            //更新地图状态
            TbNiuNiuMapPage.prototype.onUpdateStatus = function () {
                var _this = this;
                if (!this._niuMapInfo)
                    return;
                var mapStatus = this._niuMapInfo.GetMapState();
                if (this._curStatus == mapStatus)
                    return;
                this._curStatus = mapStatus;
                this._viewUI.btn_continue.visible = this._curStatus == 7 /* PLAY_STATUS_SHOW_GAME */;
                if (this._curStatus == 1 /* PLAY_STATUS_GAMESTART */ || this._curStatus == 5 /* PLAY_STATUS_COMPARE */ || this._curStatus == 0 /* PLAY_STATUS_NONE */
                    || this._curStatus == 6 /* PLAY_STATUS_SETTLE */ || this._curStatus == 3 /* PLAY_STATUS_PUSH_CARD */) {
                    this._viewUI.box_timer.visible = false;
                }
                if (this._curStatus > 0 /* PLAY_STATUS_NONE */ && this._curStatus < 7 /* PLAY_STATUS_SHOW_GAME */) {
                    this._pageHandle.pushClose({ id: TongyongPageDef.PAGE_TONGYONG_MATCH, parent: this._game.uiRoot.HUD });
                }
                this._viewUI.ani_deal.visible = this._curStatus == 3 /* PLAY_STATUS_PUSH_CARD */ && this._niuStory.isFaPai == 1;
                switch (this._curStatus) {
                    case 0 /* PLAY_STATUS_NONE */: // 准备阶段
                        this.initRoomConfig();
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
                    case 1 /* PLAY_STATUS_GAMESTART */: // 游戏开始
                        this._pageHandle.pushOpen({ id: page_1.TbniuniuPageDef.PAGE_TBNIUNIU_BEGIN, parent: this._game.uiRoot.HUD });
                        this._game.playSound(Path_game_tbniuniu.music_tbniuniu + "kaishi.mp3", false);
                        this._viewUI.box_status.visible = false;
                        this._viewUI.box_timer.visible = false;
                        this._viewUI.box_tips.visible = false;
                        break;
                    case 2 /* PLAY_STATUS_BET */: // 下注阶段
                        this._pageHandle.pushClose({ id: page_1.TbniuniuPageDef.PAGE_TBNIUNIU_BEGIN, parent: this._game.uiRoot.HUD });
                        this._viewUI.box_betRate.visible = true;
                        this._viewUI.txt_status.text = "开始下注";
                        Laya.timer.once(1500, this, function () {
                            if (_this._niuMgr.isTuoGuan > 0) { //托管
                                if (_this._maxBetRate < _this._niuMgr.isTuoGuan) { //玩家金币不足以继续下高倍注，默认当前可下的最大注
                                    _this._niuMgr.isTuoGuan = _this._maxBetRate;
                                }
                                _this._game.network.call_tbniuniu_bet(_this._niuMgr.isTuoGuan);
                                _this._viewUI.box_betRate.visible = false;
                            }
                        });
                        break;
                    case 3 /* PLAY_STATUS_PUSH_CARD */: // 发牌阶段
                        this._viewUI.ani_deal.ani1.play(0, true);
                        this._viewUI.box_betRate.visible = false;
                        this._viewUI.box_status.visible = false;
                        this._viewUI.box_tips.visible = false;
                        break;
                    case 4 /* PLAY_STATUS_SHOW_CARDS */: // 摊牌阶段
                        this._viewUI.btn_tanpai.visible = true;
                        Laya.timer.once(1500, this, function () {
                            if (_this._niuMgr.isTuoGuan > 0) { //托管
                                _this._game.network.call_tbniuniu_showcard();
                                _this._niuMgr.gaipai();
                                _this._viewUI.btn_tanpai.visible = false;
                            }
                        });
                        break;
                    case 5 /* PLAY_STATUS_COMPARE */: // 比牌阶段
                        this._viewUI.btn_tanpai.visible = false;
                        this._viewUI.box_tips.visible = false;
                        break;
                    case 6 /* PLAY_STATUS_SETTLE */: // 结算阶段
                        this._viewUI.box_tips.visible = false;
                        Laya.timer.once(1500, this, function () {
                            _this.addSettleEff();
                            _this.updateMoney();
                        });
                        Laya.timer.once(3500, this, function () {
                            if (_this._mainPlayerBenefit > 0) {
                                var rand = MathU.randomRange(1, 3);
                                _this._game.playSound(StringU.substitute(PathGameTongyong.music_tongyong + "win{0}.mp3", rand), true);
                                _this._game.uiRoot.HUD.open(page_1.TbniuniuPageDef.PAGE_TBNIUNIU_WIN);
                            }
                            else {
                                var rand = MathU.randomRange(1, 4);
                                _this._game.playSound(StringU.substitute(PathGameTongyong.music_tongyong + "lose{0}.mp3", rand), true);
                                _this._game.uiRoot.HUD.open(page_1.TbniuniuPageDef.PAGE_TBNIUNIU_LOSE);
                            }
                        });
                        if (this._room_config && this._game.sceneObjectMgr.mainPlayer.GetMoney() < this._room_config[1]) {
                            Laya.timer.once(5500, this, function () {
                                TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", _this._room_config[1]), function () {
                                    _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                                }, function () {
                                }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
                            });
                            if (this._niuMgr.isTuoGuan > 0) {
                                this._niuMgr.isTuoGuan = 0;
                                this._viewUI.btn_tuoguan.skin = Path_game_tbniuniu.ui_tbniuniu + "btn_tg0.png";
                            }
                        }
                        break;
                    case 7 /* PLAY_STATUS_SHOW_GAME */: // 本局展示阶段
                        this._pageHandle.pushClose({ id: page_1.TbniuniuPageDef.PAGE_TBNIUNIU_WIN, parent: this._game.uiRoot.HUD });
                        this._pageHandle.pushClose({ id: page_1.TbniuniuPageDef.PAGE_TBNIUNIU_LOSE, parent: this._game.uiRoot.HUD });
                        if (this._niuMgr.isTuoGuan > 0) { //托管
                            if (this._viewUI.box_menu.y >= 0) { //每局重新开始把菜单收起来
                                this._viewUI.box_menu.y = -this._viewUI.box_menu.height;
                                this._viewUI.box_menu.visible = false;
                                this._viewUI.btn_spread.visible = true;
                            }
                            if (this._niuMapInfo instanceof MapInfo) {
                                this.continueGame();
                                this._game.sceneObjectMgr.leaveStory();
                            }
                        }
                        break;
                }
                this._pageHandle.updatePageHandle(); //更新额外界面的开关状态
                this._pageHandle.reset(); //清空额外界面存储数组
            };
            //按钮缓动回调
            TbNiuNiuMapPage.prototype.onBtnTweenEnd = function (e, target) {
                var _this = this;
                switch (target) {
                    case this._viewUI.btn_spread: //菜单
                        this.showMenu(true);
                        break;
                    case this._viewUI.btn_cardType: //牌型
                        this._game.uiRoot.general.open(page_1.TbniuniuPageDef.PAGE_TBNIUNIU_RULE, function (page) {
                            page.dataSource = 1;
                        });
                        break;
                    case this._viewUI.btn_rule: //规则
                        this._game.uiRoot.general.open(page_1.TbniuniuPageDef.PAGE_TBNIUNIU_RULE);
                        break;
                    case this._viewUI.btn_chongzhi: //充值
                        this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                        break;
                    case this._viewUI.btn_set: //设置
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING);
                        break;
                    case this._viewUI.btn_qifu: //祈福
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU);
                        break;
                    case this._viewUI.btn_tanpai: //摊牌
                        this._viewUI.txt_tips.text = "等待其他玩家摊牌";
                        this._game.network.call_tbniuniu_showcard();
                        this._niuMgr.gaipai();
                        this._viewUI.btn_tanpai.visible = false;
                        this._niuMgr.isTuoGuan = 0;
                        break;
                    case this._viewUI.btn_zhanji: //战绩
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, function (page) {
                            page.dataSource = page_1.TbniuniuPageDef.GAME_NAME;
                        });
                        break;
                    case this._viewUI.btn_back: //返回
                        if (this._niuMapInfo && this._niuMapInfo.GetPlayState() == 1) {
                            this._game.showTips("游戏尚未结束，请先打完这局哦~");
                            return;
                        }
                        this.continueGame();
                        this.clearSceneObjMgr();
                        this._game.sceneObjectMgr.leaveStory(true);
                        // this.close();
                        break;
                    case this._viewUI.btn_continue: //继续游戏
                        if (this._room_config) {
                            var mainPlayer = this._game.sceneObjectMgr.mainPlayer;
                            if (mainPlayer && mainPlayer.GetMoney() < this._room_config[1]) {
                                TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", this._room_config[1]), function () {
                                    _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                                }, function () {
                                }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
                                return;
                            }
                        }
                        // this._viewUI.btn_continue.visible = false;
                        if (this._niuMapInfo instanceof MapInfo) {
                            this.continueGame();
                            this._game.sceneObjectMgr.leaveStory();
                        }
                        else {
                            this.onUpdateMapInfo();
                        }
                        break;
                    case this._viewUI.btn_betRate1: //下注倍率1
                        this._game.network.call_tbniuniu_bet(1);
                        this._viewUI.box_betRate.visible = false;
                        this._viewUI.box_tips.visible = true;
                        this._niuMgr.isTuoGuan = 0;
                        this._viewUI.txt_tips.text = "等待其他玩家下注";
                        break;
                    case this._viewUI.btn_betRate2: //下注倍率2
                        this._game.network.call_tbniuniu_bet(2);
                        this._viewUI.box_betRate.visible = false;
                        this._viewUI.box_tips.visible = true;
                        this._niuMgr.isTuoGuan = 0;
                        this._viewUI.txt_tips.text = "等待其他玩家下注";
                        break;
                    case this._viewUI.btn_betRate3: //下注倍率3
                        this._game.network.call_tbniuniu_bet(3);
                        this._viewUI.box_betRate.visible = false;
                        this._viewUI.box_tips.visible = true;
                        this._niuMgr.isTuoGuan = 0;
                        this._viewUI.txt_tips.text = "等待其他玩家下注";
                        break;
                    case this._viewUI.btn_betRate4: //下注倍率4
                        this._game.network.call_tbniuniu_bet(4);
                        this._viewUI.box_betRate.visible = false;
                        this._viewUI.box_tips.visible = true;
                        this._niuMgr.isTuoGuan = 0;
                        this._viewUI.txt_tips.text = "等待其他玩家下注";
                        break;
                    case this._viewUI.btn_betRate5: //下注倍率5
                        this._game.network.call_tbniuniu_bet(5);
                        this._viewUI.box_betRate.visible = false;
                        this._viewUI.box_tips.visible = true;
                        this._niuMgr.isTuoGuan = 0;
                        this._viewUI.txt_tips.text = "等待其他玩家下注";
                        break;
                    case this._viewUI.btn_tuoguan: //托管
                        if (this._niuMgr.isTuoGuan > 0) {
                            this._niuMgr.isTuoGuan = 0;
                        }
                        else {
                            if (this._niuMapInfo && this._room_config) {
                                var mainPlayer = this._game.sceneObjectMgr.mainPlayer;
                                if (mainPlayer && mainPlayer.GetMoney() < this._room_config[1]) {
                                    TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", this._room_config[1]), function () {
                                        _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                                    }, function () {
                                    }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
                                    return;
                                }
                            }
                            this._game.uiRoot.general.open(page_1.TbniuniuPageDef.PAGE_TBNIUNIU_TUOGUAN);
                        }
                        break;
                    default:
                        break;
                }
            };
            TbNiuNiuMapPage.prototype.onMouseClick = function (e) {
                if (e.target != this._viewUI.btn_spread) {
                    this.showMenu(false);
                }
            };
            TbNiuNiuMapPage.prototype.showMenu = function (isShow) {
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
            TbNiuNiuMapPage.prototype.continueGame = function () {
                this.clearClips();
                this._battleIndex = -1;
                this._settleInfo = [];
                // this._game.network.call_tbniuniu_continue();
                this.resetUI();
            };
            TbNiuNiuMapPage.prototype.clearSceneObjMgr = function () {
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(TbniuniuMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
                this._game.sceneObjectMgr.off(TbniuniuMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                this._game.sceneObjectMgr.off(TbniuniuMapInfo.EVENT_STATUS_CONTINUE, this, this.onUpdateUnit); //继续游戏状态改变后
                this._game.sceneObjectMgr.off(TbniuniuMapInfo.EVENT_GAME_NO, this, this.onUpdateGameNo); //牌局号
                this._game.sceneObjectMgr.off(TbniuniuMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown); //倒计时时间戳更新
            };
            TbNiuNiuMapPage.prototype.onUpdateGameNo = function () {
                var gameNo = this._niuMapInfo.GetGameNo();
                if (gameNo) {
                    this._viewUI.box_id.visible = true;
                    this._viewUI.txt_id.text = "牌局号：" + gameNo;
                }
            };
            TbNiuNiuMapPage.prototype.onUpdateCountDown = function () {
                if (!this._niuMapInfo)
                    return;
                this._countDown = this._niuMapInfo.GetCountDown();
            };
            TbNiuNiuMapPage.prototype.initView = function () {
                //所有玩家UI
                this._viewUI.box_menu.visible = false;
                this._viewUI.box_menu.zOrder = 99;
                this._playerList = [];
                for (var i = 0; i < MAX_SEATS_COUNT; i++) {
                    this._playerList.push(this._viewUI["view" + i]);
                }
                for (var i = 0; i < MAX_SEATS_COUNT; i++) {
                    this._playerList[i].visible = false;
                    this._playerList[i].box_betRate.visible = false;
                    this._playerList[i].view_icon.clip_money.visible = false;
                    this._playerList[i].view_icon.img_banker.visible = false;
                    if (i > 0) {
                        this._playerList[i].box_cardType.visible = false;
                    }
                }
                //主玩家UI
                this._viewUI.box_showCard.visible = false;
                this._viewUI.btn_continue.visible = false;
                //界面UI
                this._viewUI.box_tips.visible = false;
                this._viewUI.box_status.visible = false;
                this._viewUI.box_betRate.visible = false;
                this._viewUI.box_timer.visible = false;
                this._viewUI.box_id.visible = false;
                this._viewUI.btn_tanpai.visible = false;
                this._viewUI.ani_deal.ani1.stop();
                this._viewUI.ani_deal.visible = false;
                this._viewUI.xipai.visible = false;
                this._viewUI.paixie.cards.visible = false;
                this._viewUI.paixie.ani_chupai.stop();
            };
            TbNiuNiuMapPage.prototype.initRoomConfig = function () {
                if (this._niuStory.maplv) {
                    this._room_config = ROOM_CONFIG[this._niuStory.maplv];
                    var str = "";
                    if (this._niuStory.maplv == Web_operation_fields.GAME_ROOM_CONFIG_TBNIUNIU_1) {
                        str = "房间：新手场  底注：";
                    }
                    else if (this._niuStory.maplv == Web_operation_fields.GAME_ROOM_CONFIG_TBNIUNIU_2) {
                        str = "房间：小资场  底注：";
                    }
                    else if (this._niuStory.maplv == Web_operation_fields.GAME_ROOM_CONFIG_TBNIUNIU_3) {
                        str = "房间：老板场  底注：";
                    }
                    else if (this._niuStory.maplv == Web_operation_fields.GAME_ROOM_CONFIG_TBNIUNIU_4) {
                        str = "房间：富豪场  底注：";
                    }
                    this._viewUI.txt_base.text = str + this._room_config[0];
                    this.onUpdateBetBtn();
                }
            };
            //重置UI
            TbNiuNiuMapPage.prototype.resetUI = function () {
                for (var i = 0; i < MAX_SEATS_COUNT; i++) {
                    this._playerList[i].box_betRate.visible = false;
                    this._playerList[i].view_icon.clip_money.visible = false;
                    this._playerList[i].view_icon.img_banker.visible = false;
                    if (i > 0) {
                        this._playerList[i].visible = false;
                        this._playerList[i].box_cardType.visible = false;
                    }
                }
                //主玩家UI
                this._viewUI.box_showCard.visible = false;
                this._viewUI.btn_continue.visible = false;
                //界面UI
                this._viewUI.box_tips.visible = false;
                this._viewUI.box_status.visible = false;
                this._viewUI.box_betRate.visible = false;
                this._viewUI.box_timer.visible = false;
                this._viewUI.box_id.visible = false;
                this._viewUI.btn_tanpai.visible = false;
                this._viewUI.paixie.cards.visible = false;
                this._viewUI.paixie.ani_chupai.stop();
            };
            TbNiuNiuMapPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_spread.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_cardType.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_back.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_rule.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_chongzhi.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_set.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_continue.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_betRate1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_betRate2.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_betRate3.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_betRate4.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_betRate5.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_tuoguan.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_tanpai.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_zhanji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.xipai.ani_xipai.off(LEvent.COMPLETE, this, this.onWashCardOver);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(TbniuniuMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
                    this._game.sceneObjectMgr.off(TbniuniuMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
                    this._game.sceneObjectMgr.off(TbniuniuMapInfo.EVENT_STATUS_CONTINUE, this, this.onUpdateUnit); //继续游戏状态改变后
                    this._game.sceneObjectMgr.off(TbniuniuMapInfo.EVENT_GAME_NO, this, this.onUpdateGameNo); //牌局号
                    this._game.sceneObjectMgr.off(TbniuniuMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown); //倒计时时间戳更新
                    this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                    if (this._niuMgr) {
                        this._niuMgr.off(TbNiuNiuMgr.TUOGUAN_GAME, this, this.onUpdateBtnTuoGuan);
                        this._niuMgr.off(TbNiuNiuMgr.DEAL_OVER, this, this.onUpdateAniDeal);
                    }
                    this._game.stopAllSound();
                    this._game.stopMusic();
                    Laya.Tween.clearAll(this);
                    Laya.timer.clearAll(this);
                    this.clearClips();
                    this._niuMgr.clear();
                    this._battleIndex = -1;
                    this._settleInfo = [];
                }
                _super.prototype.close.call(this);
            };
            return TbNiuNiuMapPage;
        }(game.gui.base.Page));
        page_1.TbNiuNiuMapPage = TbNiuNiuMapPage;
    })(page = gametbniuniu.page || (gametbniuniu.page = {}));
})(gametbniuniu || (gametbniuniu = {}));
//# sourceMappingURL=TbNiuNiuMapPage.js.map