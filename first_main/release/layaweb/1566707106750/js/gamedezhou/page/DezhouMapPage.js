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
* 炸金花
*/
var gamedezhou;
(function (gamedezhou) {
    var page;
    (function (page_1) {
        var MAX_SEATS_COUNT = 9; // 最大座位数
        var DezhouMapPage = /** @class */ (function (_super) {
            __extends(DezhouMapPage, _super);
            function DezhouMapPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._betVal = 0; //拉霸下注数额
                _this._showCards = []; //就明牌用的
                _this._battleIndex = -1;
                _this._winnerPos = []; //胜利方
                _this._settleGold = [];
                _this._publicCard = [];
                _this._clipList = []; //飘字集合
                _this._cardType = ["高牌", "一对", "两对", "三条", "顺子", "同花", "葫芦", "金刚", "同花顺", "皇家同花顺"];
                _this._mainIdx = 0; //主玩家的座位号
                _this._betChipTemp = [0, 0, 0, 0, 0, 0, 0, 0, 0]; //累计下注
                _this._needChip = {
                    "192": [50],
                    "193": [100],
                    "194": [500],
                    "195": [1000],
                };
                _this._diff = 500;
                _this._timeList = {};
                _this._firstList = {};
                _this._nameStrInfo = ["xs", "px", "gsy", "gg", "cs", "tdg"];
                _this._isNeedDuang = false;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                    Path_game_dezhou.atlas_game_ui + "dezhou.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    Path_game_dezhou.atlas_game_ui + "dezhou/effect/btn.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                ];
                return _this;
            }
            // 页面初始化函数
            DezhouMapPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.dezhou.DeZhouUI');
                this.addChild(this._viewUI);
                if (!this._dezhouMgr) {
                    this._dezhouStory = this._game.sceneObjectMgr.story;
                    this._dezhouMgr = this._dezhouStory.dezhouMgr;
                    this._dezhouMgr.on(DezhouMgr.DEAR_CARD_OVER, this, this.onDealCardOver);
                }
                this._game.playMusic(Path.music + "dezhou/bgplay.mp3", 0);
            };
            // 页面打开时执行函数
            DezhouMapPage.prototype.onOpen = function () {
                var _this = this;
                _super.prototype.onOpen.call(this);
                this.updateViewUI();
                this.onUpdateUnitOffline();
                if (!this._dezhouStory.isReConnected) {
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, function (page) {
                        _this._viewUI.btn_continue.visible = page.dataSource;
                    });
                    this._viewUI.btn_continue.visible = false;
                }
                else {
                    this.onUpdateMap();
                }
                Laya.stage.on(LEvent.CLICK, this, this.onClickHandle);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMap);
                this._game.sceneObjectMgr.on(DezhouMapInfo.EVENT_STATUS_CHECK, this, this.updateMapInfo);
                this._game.sceneObjectMgr.on(DezhouMapInfo.EVENT_BATTLE_CHECK, this, this.updateBattledInfo);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this._viewUI.btn_menu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_add.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_closen.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_giveup.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_call.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_pass.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_enter.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_continue.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rules.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_cardtype.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_record.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.img_take.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            };
            DezhouMapPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_menu: //菜单
                        this._viewUI.img_menu.visible = true;
                        this._viewUI.btn_menu.visible = false;
                        break;
                    case this._viewUI.btn_closen: //返回
                        if (this._game.sceneObjectMgr.mapInfo instanceof MapInfo) {
                            var mainUnit_1 = this._game.sceneObjectMgr.mainUnit;
                            if (!mainUnit_1.IsGiveUp() && !mainUnit_1.IsIsDefeated() && this._game.sceneObjectMgr.mapInfo.GetPlayState() == 1) {
                                this._game.showTips("游戏尚未结束，请先打完这局哦~");
                                return;
                            }
                        }
                        this.clearClips();
                        this.clearListen();
                        // this.close();
                        this._dezhouMgr.clear();
                        this._dezhouStory.clear();
                        this._game.sceneObjectMgr.leaveStory(true);
                        break;
                    case this._viewUI.btn_giveup: //弃牌
                        this._game.network.call_dezhou_discard();
                        break;
                    case this._viewUI.btn_call: //跟注
                        this._game.network.call_dezhou_bet();
                        break;
                    case this._viewUI.btn_add: //加注
                        this._viewUI.add_bet.visible = true;
                        this._viewUI.btn_enter.visible = true;
                        var mainUnit = this._game.sceneObjectMgr.mainUnit;
                        var minValue = this._mapInfo.GetCurChip() - mainUnit.GetCurChip() + 1;
                        var maxValue = EnumToString.getPointBackNum(mainUnit.GetDeZhouMoney() / 100, 2);
                        this._viewUI.hslider_bet.min = minValue;
                        this._viewUI.hslider_bet.max = maxValue;
                        this._viewUI.hslider_bet.value = minValue;
                        this._viewUI.text_bet.text = minValue.toString();
                        break;
                    case this._viewUI.btn_enter: //确定加注
                        if (this._game.sceneObjectMgr.mainPlayer.playerInfo.dezhouMoney < this._betVal) {
                            this._game.showTips("金币不足");
                            return;
                        }
                        this._viewUI.add_bet.visible = false;
                        this._game.network.call_dezhou_addbet(this._betVal);
                        break;
                    case this._viewUI.btn_pass: //过
                        this._game.network.call_dezhou_pass();
                        break;
                    case this._viewUI.btn_continue: //继续游戏
                        //玩家的钱是否大于设置带入的钱
                        var mainPlayer = this._game.sceneObjectMgr.mainPlayer;
                        if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money >= this._needChip[this._dezhouStory.mapLv][0]) {
                            if (mainPlayer.playerInfo.money < mainPlayer.playerInfo.dezhouMoney) {
                                var money = Math.floor(mainPlayer.playerInfo.money);
                                this._game.network.call_dezhou_take_money_to_room(money);
                            }
                            if (this._game.sceneObjectMgr.mapInfo instanceof MapInfo) {
                                this.clearClips();
                                this.resetData();
                                this.updateViewUI();
                                // this.clearListen();
                                this._dezhouMgr.clear();
                                this._game.sceneObjectMgr.leaveStory();
                            }
                            else {
                                this.onUpdateMap();
                            }
                        }
                        else {
                            this.onNotEnoughMoney();
                        }
                        break;
                    case this._viewUI.btn_rules: //规则
                        this._game.uiRoot.general.open(page_1.DezhouPageDef.PAGE_DEZHOU_RULE);
                        break;
                    case this._viewUI.btn_cardtype: //牌型
                        this._game.uiRoot.general.open(page_1.DezhouPageDef.PAGE_DEZHOU_RULE, function (page) {
                            page.dataSource = 2;
                        });
                        break;
                    case this._viewUI.btn_set: //设置
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING);
                        break;
                    case this._viewUI.btn_record: //战绩
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, function (page) {
                            page.dataSource = page_1.DezhouPageDef.GAME_NAME;
                        });
                        break;
                    case this._viewUI.btn_qifu: //祈福
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU);
                        break;
                    case this._viewUI.img_take: //修改带钱
                        var config = ["192", "193", "194", "195"];
                        var val_1 = config.indexOf(this._dezhouStory.mapLv.toString());
                        this._game.uiRoot.general.open(page_1.DezhouPageDef.PAGE_DEZHOU_TAKE, function (page) {
                            page.setdata(val_1);
                        });
                        break;
                    default:
                        break;
                }
            };
            //只是为了隐藏菜单
            DezhouMapPage.prototype.onClickHandle = function (e) {
                if (e.currentTarget != this._viewUI.btn_menu) {
                    this._viewUI.img_menu.visible = false;
                    this._viewUI.btn_menu.visible = true;
                }
            };
            //下注滚动条
            DezhouMapPage.prototype.onChangeHslider = function (value) {
                var mainUint = this._game.sceneObjectMgr.mainUnit;
                if (!mainUint)
                    return;
                this._betVal = value;
                var maxValue = EnumToString.getPointBackNum(mainUint.GetDeZhouMoney() / 100, 2);
                if (this._betVal >= maxValue) {
                    this._betVal = maxValue;
                }
                this._viewUI.text_bet.text = this._betVal == maxValue ? "allin" : this._betVal.toString();
            };
            DezhouMapPage.prototype.onUnitAdd = function (u) {
                this.onUpdateUnit();
            };
            //玩家出去了
            DezhouMapPage.prototype.onUnitRemove = function (u) {
                this.onUpdateUnit();
                //离场清除桌上卡牌
                //this._dezhouMgr.clearCardObject(u.GetIndex());
            };
            DezhouMapPage.prototype.onUpdateUnit = function (qifu_index) {
                var _this = this;
                if (!this._mapInfo)
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                if (mainUnit.GetIndex() == 0)
                    return;
                this._mainIdx = mainUnit.GetIndex();
                var betPos = this._mapInfo.GetCurrentBetPos();
                var _loop_1 = function (index) {
                    var posIdx = (this_1._mainIdx + index) % MAX_SEATS_COUNT == 0 ? MAX_SEATS_COUNT : (this_1._mainIdx + index) % MAX_SEATS_COUNT;
                    var unit = this_1._game.sceneObjectMgr.getUnitByIdx(posIdx);
                    this_1._viewUI["player" + index].visible = unit;
                    if (unit) {
                        var name_1 = getMainPlayerName(unit.GetName());
                        var isOperation = this_1.isOperation(unit);
                        if (!isOperation) {
                            this_1._viewUI["player" + index].text_name.text = name_1;
                        }
                        this_1._viewUI["player" + index].text_money.text = EnumToString.getPointBackNum(unit.GetDeZhouMoney() / 100, 2).toString();
                        //头像框
                        this_1._viewUI["player" + index].img_txk.visible = unit.GetVipLevel() > 0;
                        if (this_1._viewUI["player" + index].img_txk.visible) {
                            this_1._viewUI["player" + index].img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + unit.GetVipLevel() + ".png";
                        }
                        //祈福成功 头像上就有动画
                        if (qifu_index && posIdx == qifu_index) {
                            this_1._viewUI["player" + index].qifu_type.visible = true;
                            this_1._viewUI["player" + index].qifu_type.skin = this_1._qifuTypeImgUrl;
                            this_1.playTween(this_1._viewUI["player" + index].qifu_type, qifu_index);
                        }
                        //时间戳变化 才加上祈福标志
                        if (unit.GetQFEndTime(unit.GetQiFuType() - 1) > this_1._game.sync.serverTimeBys) {
                            if (qifu_index && posIdx == qifu_index) {
                                Laya.timer.once(2500, this_1, function () {
                                    _this._viewUI["player" + index].img_qifu.visible = true;
                                    if (_this._viewUI["player" + index].img_qifu.visible && unit.GetQiFuType()) {
                                        _this._viewUI["player" + index].img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + _this._nameStrInfo[unit.GetQiFuType() - 1] + ".png";
                                    }
                                });
                            }
                            else {
                                this_1._viewUI["player" + index].img_qifu.visible = true;
                                if (this_1._viewUI["player" + index].img_qifu.visible && unit.GetQiFuType()) {
                                    this_1._viewUI["player" + index].img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this_1._nameStrInfo[unit.GetQiFuType() - 1] + ".png";
                                }
                            }
                        }
                        else {
                            this_1._viewUI["player" + index].img_qifu.visible = false;
                            this_1._viewUI["player" + index].img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unit.GetHeadImg() + ".png";
                        }
                    }
                };
                var this_1 = this;
                for (var index = 0; index < MAX_SEATS_COUNT; index++) {
                    _loop_1(index);
                }
            };
            DezhouMapPage.prototype.playTween = function (img, index, isTween) {
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
            DezhouMapPage.prototype.onOptHandler = function (optcode, msg) {
                var _this = this;
                if (msg.type == Operation_Fields.OPRATE_GAME) {
                    switch (msg.reason) {
                        case Operation_Fields.OPRATE_GAME_QIFU_SUCCESS_RESULT:
                            var dataInfo_1 = JSON.parse(msg.data);
                            //打开祈福动画界面
                            this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU_ANI, function (page) {
                                page.dataSource = StringU.substitute(PathGameTongyong.ui_tongyong_qifu + "f_{0}1.png", _this._nameStrInfo[dataInfo_1.qf_id - 1]);
                            });
                            //相对应的玩家精灵做出反应
                            this._qifuTypeImgUrl = StringU.substitute(PathGameTongyong.ui_tongyong_qifu + "f_{0}2.png", this._nameStrInfo[dataInfo_1.qf_id - 1]);
                            this.onUpdateUnit(dataInfo_1.qifu_index);
                            break;
                    }
                }
            };
            //是否有操作过
            DezhouMapPage.prototype.isOperation = function (unit) {
                var flag = false;
                if (unit.IsGiveUp()) {
                    flag = true;
                }
                else if (unit.IsPass()) {
                    flag = true;
                }
                else if (unit.IsAllIn()) {
                    flag = true;
                }
                else if (unit.IsBet()) {
                    flag = true;
                }
                else if (unit.IsPinPai()) {
                    flag = true;
                }
                return flag;
            };
            //地图监听
            DezhouMapPage.prototype.onUpdateMap = function () {
                var _this = this;
                var mapInfo = this._game.sceneObjectMgr.mapInfo;
                this._mapInfo = mapInfo;
                if (mapInfo) {
                    this._viewUI.xipai.ani_xipai.on(LEvent.COMPLETE, this, this.onWashCardOver);
                    this._viewUI.btn_continue.visible = false;
                    if (this._dezhouStory.isReConnected) {
                        this._dezhouStory.mapLv = this._mapInfo.GetMapLevel();
                        this.loginAgainInit();
                    }
                    this.initView();
                    this.updateMapInfo();
                    this._mainIdx = 0;
                }
                else {
                    this.onUpdateUnitOffline();
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, function (page) {
                        _this._viewUI.btn_continue.visible = page.dataSource;
                    });
                    this._viewUI.btn_continue.visible = false;
                }
            };
            DezhouMapPage.prototype.onUpdateUnitOffline = function () {
                if (!this._dezhouMgr.unitOffline)
                    return;
                var unitOffline = this._dezhouMgr.unitOffline;
                var mPlayer = this._game.sceneObjectMgr.mainPlayer;
                if (unitOffline) {
                    this._viewUI.player0.visible = true;
                    var money = void 0;
                    if (mPlayer && mPlayer.playerInfo) {
                        money = mPlayer.playerInfo.dezhouMoney;
                        this._viewUI.player0.text_name.text = getMainPlayerName(mPlayer.playerInfo.nickname);
                        this._viewUI.player0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + mPlayer.playerInfo.headimg + ".png";
                        this._viewUI.player0.img_qifu.visible = mPlayer.GetQiFuEndTime(mPlayer.playerInfo.qifu_type - 1) > this._game.sync.serverTimeBys;
                        if (this._viewUI.player0.img_qifu.visible && mPlayer.playerInfo.qifu_type) {
                            this._viewUI.player0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[mPlayer.playerInfo.qifu_type - 1] + ".png";
                        }
                        //头像框
                        this._viewUI.player0.img_txk.visible = mPlayer.playerInfo.vip_level > 0;
                        if (this._viewUI.player0.img_txk.visible) {
                            this._viewUI.player0.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + mPlayer.playerInfo.vip_level + ".png";
                        }
                    }
                    else {
                        money = unitOffline.GetDeZhouMoney() / 100;
                        this._viewUI.player0.text_name.text = getMainPlayerName(unitOffline.GetName());
                        this._viewUI.player0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unitOffline.GetHeadImg() + ".png";
                        this._viewUI.player0.img_qifu.visible = unitOffline.GetQiFuEndTime() > this._game.sync.serverTimeBys;
                        if (this._viewUI.player0.img_qifu.visible && unitOffline.GetQiFuType()) {
                            this._viewUI.player0.img_head.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[unitOffline.GetQiFuType() - 1] + ".png";
                        }
                        //头像框
                        this._viewUI.player0.img_txk.visible = unitOffline.GetVipLevel() > 0;
                        if (this._viewUI.player0.img_txk.visible) {
                            this._viewUI.player0.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + unitOffline.GetVipLevel() + ".png";
                        }
                    }
                    this._viewUI.player0.text_money.text = EnumToString.getPointBackNum(money, 2).toString();
                }
            };
            //发完牌了
            DezhouMapPage.prototype.onDealCardOver = function () {
                this._viewUI.view_paixie.visible = false;
                this._viewUI.view_paixie.ani1.stop();
            };
            DezhouMapPage.prototype.updateMapInfo = function () {
                if (!this._mapInfo)
                    return;
                var mainUint = this._game.sceneObjectMgr.mainUnit;
                if (!mainUint)
                    return;
                if (mainUint.GetIndex() == 0)
                    return;
                if (this._mainIdx == 0) {
                    this._mainIdx = mainUint.GetIndex();
                }
                this._viewUI.text_money.text = EnumToString.getPointBackNum(this._mapInfo.GetJackpot(), 2).toString();
                this.updateMapUI();
                if (this._mapInfo.GetMapState() > 6 /* MAP_STATE_SETTLE */) {
                    this._viewUI.text_money.text = "0";
                    for (var index = 1; index < 9; index++) {
                        this._viewUI["img_type" + index].visible = false;
                    }
                }
            };
            //根据地图状态刷新界面
            DezhouMapPage.prototype.updateMapUI = function () {
                var _this = this;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                var betPos = this._mapInfo.GetCurrentBetPos();
                var mangZhuPos = this._mapInfo.GetMangZhuPos();
                var statue = this._mapInfo.GetMapState();
                var maxMoney = mainUnit.GetDeZhouMoney() / 100;
                var max = MAX_SEATS_COUNT;
                this._viewUI.btn_add.visible = false;
                this._viewUI.btn_add.disabled = false;
                this._viewUI.btn_call.visible = false;
                this._viewUI.btn_giveup.visible = false;
                this._viewUI.btn_pass.visible = false;
                this._viewUI.add_bet.visible = false;
                this._viewUI.btn_enter.visible = false;
                this._viewUI.img_take.visible = true;
                for (var index = 0; index < max; index++) {
                    this._viewUI["player" + index].img_frame.visible = false;
                    this._viewUI["img_guang" + index].visible = false;
                    this._viewUI["img_mangzhu" + index].visible = false;
                }
                if (!mainUnit.IsGiveUp()) {
                    this._viewUI.btn_continue.visible = false;
                }
                //洗牌
                if (statue == 1 /* MAP_STATE_WASH_CARD */) {
                    this._viewUI.xipai.visible = true;
                    this._viewUI.xipai.ani_xipai.play(1, false);
                }
                else {
                    this._viewUI.xipai.visible = false;
                    this._viewUI.xipai.ani_xipai.stop();
                }
                //发牌
                if (statue == 2 /* MAP_STATE_DEAR_CARD */) {
                    this._viewUI.text_info.visible = true;
                    this._viewUI.text_info.text = "牌局号：" + this._mapInfo.GetGameNo();
                    this._viewUI.text_info.visible = true;
                    this._viewUI.text_roomtype.visible = true;
                    this._viewUI.text_mangzhu.visible = true;
                    this._viewUI.view_paixie.visible = true;
                    this._viewUI.view_paixie.ani1.play(1, true);
                }
                //发完牌了
                if (statue > 2 /* MAP_STATE_DEAR_CARD */) {
                    if (!mainUnit.IsGiveUp() && this._mainIdx == betPos) {
                        this._viewUI.btn_add.visible = true;
                        this._viewUI.btn_giveup.visible = true;
                        if (mainUnit.GetCurChip() < this._mapInfo.GetCurChip()) {
                            this._viewUI.btn_call.visible = true;
                        }
                        else {
                            this._viewUI.btn_pass.visible = true;
                        }
                        if (mainUnit.GetDeZhouMoney() / 100 + mainUnit.GetCurChip() < this._mapInfo.GetCurChip()) {
                            this._viewUI.btn_add.disabled = true;
                        }
                    }
                    //显示盲注位置
                    if (mangZhuPos && statue < 7 /* MAP_STATE_SHOW_GAME */) {
                        var mangPos = (mangZhuPos - this._mainIdx + max) % max;
                        this._viewUI["img_mangzhu" + mangPos].visible = true;
                    }
                }
                //开始
                if (statue == 3 /* MAP_STATE_BEGIN */ && betPos) {
                    var posIdx = (betPos - this._mainIdx + max) % max;
                    this._viewUI["player" + posIdx].img_frame.visible = true;
                    this._viewUI["img_guang" + posIdx].visible = true;
                    var now_time = this._game.sync.serverTimeBys * 1000;
                    this._endTime = this._mapInfo.GetCountDown() * 1000;
                    this._totalTime = this._endTime - now_time;
                }
                //展示
                if (statue == 7 /* MAP_STATE_SHOW_GAME */) {
                    Laya.timer.once(500, this, function () {
                        if (_this._settleGold.length) {
                            _this.addMoneyClip();
                        }
                        _this._viewUI.btn_continue.visible = true;
                        _this.onNotEnoughMoney();
                    });
                }
            };
            //充值弹框
            DezhouMapPage.prototype.onNotEnoughMoney = function () {
                var _this = this;
                if (!this._game.sceneObjectMgr.mainPlayer)
                    return;
                if (this._game.sceneObjectMgr.mainPlayer.GetMoney() < this._needChip[this._dezhouStory.mapLv][0]) {
                    TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", this._needChip[this._dezhouStory.mapLv][0]), function () {
                        _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                    }, function () {
                    }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
                }
            };
            //德州金币不足
            DezhouMapPage.prototype.onNotEnoughDzMoney = function () {
                var _this = this;
                var mainPlayer = this._game.sceneObjectMgr.mainPlayer;
                if (!mainPlayer)
                    return;
                if (this._game.sceneObjectMgr.mainPlayer.GetMoney() < mainPlayer.playerInfo.dezhouMoney) {
                    TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", mainPlayer.playerInfo.dezhouMoney), function () {
                        _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                    }, function () {
                    }, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
                }
            };
            //战斗日志
            DezhouMapPage.prototype.updateBattledInfo = function () {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                if (mainUnit.GetIndex() == 0)
                    return;
                if (this._mainIdx == 0) {
                    this._mainIdx = mainUnit.GetIndex();
                }
                var battleInfoMgr = this._mapInfo.battleInfoMgr;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    var index = battleInfoMgr.info.length;
                    var posIdx = (battleInfo.SeatIndex - this._mainIdx + MAX_SEATS_COUNT) % MAX_SEATS_COUNT;
                    switch (battleInfo.Type) {
                        case 1: { //过牌
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var idx = battleInfo.SeatIndex;
                                var unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                                if (unit) {
                                    if (!this._dezhouStory.isReConnected) {
                                        this._game.playSound(Path_game_dezhou.music_dezhou + "pass.mp3", false);
                                    }
                                    this._viewUI["player" + posIdx].text_name.text = "过牌";
                                    this._viewUI["player" + posIdx].text_name.color = "#2cf11b";
                                }
                            }
                            break;
                        }
                        case 10: { //大小盲注
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var unit = this._game.sceneObjectMgr.getUnitByIdx(info.SeatIndex);
                                if (unit) {
                                    this._betChipTemp[posIdx] = this._betChipTemp[posIdx] + info.BetVal;
                                    this._viewUI["bet" + posIdx].visible = true;
                                    this._viewUI["text_bet" + posIdx].text = EnumToString.getPointBackNum(this._betChipTemp[posIdx], 2).toString();
                                }
                            }
                            break;
                        }
                        case 2: { //跟注
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var unit = this._game.sceneObjectMgr.getUnitByIdx(info.SeatIndex);
                                if (unit) {
                                    if (!this._dezhouStory.isReConnected) {
                                        var type = Math.floor((parseInt(unit.GetHeadImg()) - 1) / 10) + 1;
                                        if (info.SeeCard == 1) {
                                            this._game.playSound(Path_game_dezhou.music_dezhou + "allin_" + type + ".mp3", false);
                                        }
                                        else {
                                            this._game.playSound(Path_game_dezhou.music_dezhou + "genzhu_" + type + ".mp3", false);
                                        }
                                    }
                                    if (info.SeeCard == 1) {
                                        this._viewUI["player" + posIdx].text_name.text = "all in";
                                        this._viewUI["player" + posIdx].text_name.color = "#f1351b";
                                    }
                                    else {
                                        this._viewUI["player" + posIdx].text_name.text = "跟注";
                                        this._viewUI["player" + posIdx].text_name.color = "#e0f11b";
                                    }
                                    this._betChipTemp[posIdx] = this._betChipTemp[posIdx] + info.BetVal;
                                    this._viewUI["bet" + posIdx].visible = true;
                                    this._viewUI["text_bet" + posIdx].text = EnumToString.getPointBackNum(this._betChipTemp[posIdx], 2).toString();
                                }
                            }
                            break;
                        }
                        case 24: { //明牌
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var cards = [];
                                var showCard = [];
                                var info = battleInfoMgr.info[i];
                                for (var index_1 = 0; index_1 < info.Cards.length; index_1++) {
                                    var card = info.Cards[index_1];
                                    cards.push(card);
                                }
                                this._dezhouMgr.showCard(cards, info.SeatIndex);
                                var unit = this._game.sceneObjectMgr.getUnitByIdx(info.SeatIndex);
                                if (unit && unit != mainUnit) {
                                    var offset = this._mainIdx;
                                    var idx = (info.SeatIndex - offset + 9) % 9;
                                    this._viewUI["img_type" + idx].visible = true;
                                    this._viewUI["text_type" + idx].text = this._cardType[info.CardType];
                                }
                            }
                            break;
                        }
                        case 9: { //加注
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var unit = this._game.sceneObjectMgr.getUnitByIdx(info.SeatIndex);
                                if (unit) {
                                    if (!this._dezhouStory.isReConnected) {
                                        var type_1 = Math.floor((parseInt(unit.GetHeadImg()) - 1) / 10) + 1;
                                        if (info.SeeCard == 1) {
                                            this._game.playSound(Path_game_dezhou.music_dezhou + "allin_" + type_1 + ".mp3", false);
                                        }
                                        else {
                                            this._game.playSound(Path_game_dezhou.music_dezhou + "jiazhu_" + type_1 + ".mp3", false);
                                        }
                                    }
                                    var type = Math.floor((parseInt(unit.GetHeadImg()) - 1) / 10) + 1;
                                    if (info.SeeCard == 1) {
                                        this._viewUI["player" + posIdx].text_name.text = "all in";
                                        this._viewUI["player" + posIdx].text_name.color = "#f1351b";
                                    }
                                    else {
                                        this._viewUI["player" + posIdx].text_name.text = "加注";
                                        this._viewUI["player" + posIdx].text_name.color = "#1be8f1";
                                    }
                                    this._betChipTemp[posIdx] = this._betChipTemp[posIdx] + info.BetVal;
                                    this._viewUI["bet" + posIdx].visible = true;
                                    this._viewUI["text_bet" + posIdx].text = EnumToString.getPointBackNum(this._betChipTemp[posIdx], 2).toString();
                                }
                            }
                            break;
                        }
                        case 11: { //结算
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                this._winnerPos.push(info.SeatIndex);
                                this._settleGold.push(info.SettleVal);
                            }
                            break;
                        }
                        case 19: { //发公共牌
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var handle = Handler.create(this, this._dezhouMgr.createObj);
                                this._publicCard.push(info.Card);
                                if (!this._dezhouStory.isReConnected) {
                                    this._dezhouMgr.addCard(info.Card, handle, info.SeatIndex, this._publicCard.length);
                                }
                            }
                            break;
                        }
                        case 29: { //牌型
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var info = battleInfoMgr.info[i];
                                var offset = this._mainIdx;
                                this._viewUI.img_type0.visible = true;
                                this._viewUI.text_type0.text = this._cardType[info.CardsZuhe[offset - 1]];
                            }
                            break;
                        }
                        case 33: { //弃牌
                            if (this._battleIndex < i) {
                                this._battleIndex = i;
                                var idx = battleInfo.SeatIndex;
                                var unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                                if (unit) {
                                    if (!this._dezhouStory.isReConnected) {
                                        if (idx == this._mainIdx) {
                                            this.onNotEnoughMoney();
                                            this._viewUI.btn_continue.visible = true;
                                            this._viewUI.btn_giveup.visible = false;
                                            this._viewUI.btn_call.visible = false;
                                            this._viewUI.btn_add.visible = false;
                                            this._viewUI.btn_add.disabled = false;
                                        }
                                        var type = Math.floor((parseInt(unit.GetHeadImg()) - 1) / 10) + 1;
                                        this._game.playSound(Path_game_dezhou.music_dezhou + "qipai_" + type + ".mp3", false);
                                    }
                                    this._dezhouMgr.setDisabled(true, unit);
                                    this._viewUI["player" + posIdx].text_name.text = "弃牌";
                                    this._viewUI["player" + posIdx].text_name.color = "#ffffff";
                                    this._viewUI["player" + posIdx].img_gray.visible = true;
                                }
                            }
                            break;
                        }
                        default:
                            break;
                    }
                }
            };
            //金币变化 飘字clip
            DezhouMapPage.prototype.addMoneyClip = function () {
                var max = MAX_SEATS_COUNT;
                var preSkin = PathGameTongyong.ui_tongyong_general + "tu_jia.png";
                for (var i = 0; i < this._winnerPos.length; i++) {
                    var valueClip = new DezhouClip(DezhouClip.ADD_MONEY_FONT);
                    valueClip.scale(0.8, 0.8);
                    valueClip.anchorX = 0.5;
                    valueClip.setText(this._settleGold[i], true, false, preSkin);
                    //位置
                    var index = (this._winnerPos[i] - this._mainIdx + max) % max;
                    valueClip.x = this._viewUI["player" + index].clip_money.x;
                    valueClip.y = this._viewUI["player" + index].clip_money.y;
                    this._viewUI["player" + index].clip_money.parent.addChild(valueClip);
                    this._viewUI["player" + index].clip_money.visible = false;
                    this._clipList.push(valueClip);
                    Laya.Tween.clearAll(valueClip);
                    Laya.Tween.to(valueClip, { y: valueClip.y - 30 }, 1500);
                }
            };
            //清理所有飘字clip
            DezhouMapPage.prototype.clearClips = function () {
                if (this._clipList && this._clipList.length) {
                    for (var i = 0; i < this._clipList.length; i++) {
                        var clip = this._clipList[i];
                        clip.removeSelf();
                        clip.destroy(true);
                    }
                }
                this._clipList = [];
            };
            DezhouMapPage.prototype.initView = function () {
                //界面UI
                if (this._dezhouStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_DEZHOU_1) {
                    this._viewUI.text_roomtype.text = "新手场";
                    this._viewUI.text_mangzhu.text = "盲注：1/2";
                }
                else if (this._dezhouStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_DEZHOU_2) {
                    this._viewUI.text_roomtype.text = "小资场";
                    this._viewUI.text_mangzhu.text = "盲注：4/8";
                }
                else if (this._dezhouStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_DEZHOU_3) {
                    this._viewUI.text_roomtype.text = "老板场";
                    this._viewUI.text_mangzhu.text = "盲注：20/40";
                }
                else if (this._dezhouStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_DEZHOU_4) {
                    this._viewUI.text_roomtype.text = "富豪场";
                    this._viewUI.text_mangzhu.text = "盲注：50/100";
                }
            };
            //重连上线的
            DezhouMapPage.prototype.loginAgainInit = function () {
                if (!this._dezhouStory.isReConnected)
                    return;
                this._viewUI.text_info.visible = true;
                this._viewUI.text_roomtype.visible = true;
                var max = MAX_SEATS_COUNT;
                this.onUpdateUnit();
                this._viewUI.text_money.text = EnumToString.getPointBackNum(this._mapInfo.GetJackpot(), 2).toString();
                this._viewUI.text_info.text = "牌局号：" + this._mapInfo.GetGameNo();
                //轮到自己操作时重连
                var betPos = this._mapInfo.GetCurrentBetPos();
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var idx = mainUnit.GetIndex();
                if (idx == 0)
                    return;
                if (idx == betPos) {
                    this._viewUI.btn_add.visible = true;
                    this._viewUI.btn_giveup.visible = true;
                    if (mainUnit.GetCurChip() < this._mapInfo.GetCurChip()) {
                        this._viewUI.btn_call.visible = true;
                    }
                    else {
                        this._viewUI.btn_pass.visible = true;
                    }
                    if (mainUnit.GetDeZhouMoney() / 100 + mainUnit.GetCurChip() < this._mapInfo.GetCurChip()) {
                        this._viewUI.btn_add.disabled = true;
                    }
                }
                //牌型
                var battleInfoMgr = this._mapInfo.battleInfoMgr;
                for (var i = 0; i < battleInfoMgr.info.length; i++) {
                    var battleInfo = battleInfoMgr.info[i];
                    if (battleInfo instanceof gamecomponent.object.BattleInfoBrdzCardsZuhe) {
                        this._viewUI.img_type0.visible = true;
                        this._viewUI.text_type0.text = this._cardType[battleInfo.CardsZuhe[idx - 1]];
                    }
                }
                this._dezhouStory.isReConnected = false;
            };
            //操作倒计时
            DezhouMapPage.prototype.update = function () {
                var mapinfo = this._game.sceneObjectMgr.mapInfo;
                if (!mapinfo)
                    return;
                var mainUint = this._game.sceneObjectMgr.mainUnit;
                if (!mainUint)
                    return;
                if (mainUint.GetIndex() == 0)
                    return;
                var state = mapinfo.GetMapState();
                if (state != 3 /* MAP_STATE_BEGIN */)
                    return;
                var now_time = this._game.sync.serverTimeBys * 1000;
                var remain_time = this._endTime - now_time;
                var max = MAX_SEATS_COUNT;
                if (remain_time > 0) {
                    var angle = remain_time / this._totalTime * 360;
                    angle = 360 - angle;
                    for (var i = 0; i < max; i++) {
                        var imgMask = this._viewUI["player" + i].img_mask;
                        imgMask.graphics.clear();
                        imgMask.graphics.drawPie(imgMask.width / 2, imgMask.height / 2, 200, angle - 90, 360 - 90, "");
                    }
                }
            };
            //洗牌之后
            DezhouMapPage.prototype.onWashCardOver = function () {
                var _this = this;
                Laya.Tween.to(this._viewUI.xipai, { x: 780, y: 190, alpha: 0.05, rotation: -56, scaleX: 0.3, scaleY: 0.3 }, 500, null, Handler.create(this, function () {
                    _this._viewUI.view_paihe.cards.visible = true;
                    _this._viewUI.view_paihe.ani_chupai.play(0, false);
                    _this._viewUI.xipai.visible = false;
                }));
            };
            //初始化UI
            DezhouMapPage.prototype.updateViewUI = function () {
                var max = MAX_SEATS_COUNT;
                for (var i = 0; i < max; i++) {
                    this._viewUI["player" + i].img_frame.visible = false;
                    this._viewUI["player" + i].visible = false;
                    this._viewUI["player" + i].img_gray.visible = false;
                    this._viewUI["player" + i].clip_money.visible = false;
                    this._viewUI["player" + i].text_name.color = WebConfig.baseplatform == PageDef.BASE_PLATFORM_TYPE_DAZHONGQP ? "#12093d" : "#efda8b";
                    this._viewUI["bet" + i].visible = false;
                    this._viewUI["img_guang" + i].visible = false;
                    this._viewUI["img_mangzhu" + i].visible = false;
                }
                //牌型
                for (var i = 1; i < max; i++) {
                    this._viewUI["img_type" + i].visible = false;
                }
                this._viewUI.img_type0.visible = false;
                this._viewUI.text_money.text = "0";
                this._viewUI.btn_giveup.visible = false;
                this._viewUI.btn_call.visible = false;
                this._viewUI.btn_add.visible = false;
                this._viewUI.btn_add.disabled = false;
                this._viewUI.btn_pass.visible = false;
                this._viewUI.btn_enter.visible = false;
                this._viewUI.btn_continue.visible = false;
                this._viewUI.img_menu.visible = false;
                this._viewUI.text_info.visible = false;
                this._viewUI.text_roomtype.visible = false;
                this._viewUI.text_mangzhu.visible = false;
                this._viewUI.view_paixie.visible = false;
                this._viewUI.view_paixie.ani1.stop();
                this._viewUI.view_paihe.cards.visible = false;
                this._viewUI.xipai.visible = false;
                this._viewUI.add_bet.visible = false;
                this._viewUI.hslider_bet.showLabel = false;
                this._viewUI.hslider_bet.changeHandler = new Handler(this, this.onChangeHslider); //设置位置变化处理器。
                this._viewUI.img_take.visible = false;
            };
            DezhouMapPage.prototype.resetData = function () {
                this._winnerPos = [];
                this._settleGold = [];
                this._showCards = [];
                this._battleIndex = -1;
                this._viewUI.xipai.scale(1, 1);
                this._viewUI.xipai.x = 480;
                this._viewUI.xipai.y = 200;
                this._viewUI.xipai.rotation = 0;
                this._viewUI.xipai.alpha = 1;
                this._publicCard = [];
                this._dezhouMgr.isDealCard = false;
                this._betChipTemp = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            };
            DezhouMapPage.prototype.clearListen = function () {
                this._viewUI.xipai.ani_xipai.off(LEvent.COMPLETE, this, this.onWashCardOver);
                this._game.sceneObjectMgr.off(DezhouMapInfo.EVENT_STATUS_CHECK, this, this.updateMapInfo);
                this._game.sceneObjectMgr.off(DezhouMapInfo.EVENT_BATTLE_CHECK, this, this.updateBattledInfo);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                Laya.Tween.clearAll(this);
                Laya.timer.clearAll(this);
            };
            DezhouMapPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_menu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_add.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_closen.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_giveup.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_call.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_pass.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_enter.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_continue.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_rules.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_cardtype.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_set.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_record.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.xipai.ani_xipai.off(LEvent.COMPLETE, this, this.onWashCardOver);
                    this._viewUI.img_take.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._game.sceneObjectMgr.off(DezhouMapInfo.EVENT_STATUS_CHECK, this, this.updateMapInfo);
                    this._game.sceneObjectMgr.off(DezhouMapInfo.EVENT_BATTLE_CHECK, this, this.updateBattledInfo);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMap);
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                    this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                    Laya.Tween.clearAll(this);
                    Laya.timer.clearAll(this);
                    if (this._dezhouMgr) {
                        this._dezhouMgr.off(DezhouMgr.DEAR_CARD_OVER, this, this.onDealCardOver);
                    }
                    this._mapInfo = null;
                    this.clearClips();
                    this.clearListen();
                    this._game.stopMusic();
                    this._game.stopAllSound();
                }
                _super.prototype.close.call(this);
            };
            return DezhouMapPage;
        }(game.gui.base.Page));
        page_1.DezhouMapPage = DezhouMapPage;
    })(page = gamedezhou.page || (gamedezhou.page = {}));
})(gamedezhou || (gamedezhou = {}));
//# sourceMappingURL=DezhouMapPage.js.map