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
var gamebuyu;
(function (gamebuyu) {
    var page;
    (function (page) {
        /**
        * 经典玩家炮组件
        */
        var BuyuGunItem = /** @class */ (function (_super) {
            __extends(BuyuGunItem, _super);
            /**
             * 初始化炮台
             * @param showPos 显示位置
             * @param game
             */
            function BuyuGunItem(showPos, game) {
                var _this = _super.call(this) || this;
                //主炮是否打开选项
                _this._isOpen = false;
                //是否是主玩家
                _this._isMainPlayer = false;
                //倍数
                _this._awardObjList = [];
                //转盘
                _this._isShowZhuanPan = false;
                _this._timer = 0;
                //飘金币
                _this._upGoldEffArr = [];
                //提示钱不够
                _this._checkMoneyTimer = 0;
                _this._isShowTips = false;
                _this._showPos = showPos;
                _this._game = game;
                //视图对象
                _this._viewUI = new ui.game_ui.buyu.component.BuYu_GunItemUI();
                _this.addChild(_this._viewUI);
                _this.size(_this._viewUI.width, _this._viewUI.height);
                //初始化UI
                _this.initGunView();
                //注册点击事件
                _this._viewUI.btn_Add.on(LEvent.MOUSE_DOWN, _this, _this.onClickDown);
                _this._viewUI.btn_Dec.on(LEvent.MOUSE_DOWN, _this, _this.onClickDown);
                _this._viewUI.image_Tips.visible = false;
                _this.mouseThrough = true;
                _this._viewUI.mouseThrough = true;
                _this._viewUI.box_Root.mouseThrough = true;
                _this._viewUI.box_Player.mouseThrough = true;
                if (!_this._paoAnim) {
                    _this._paoAnim = ObjectPools.malloc(UIFrameAnimation, [60], 60);
                    _this._paoAnim.addTarget(_this._viewUI.image_PaoSkin, [{ height: 152, y: 100 }, { height: 133, y: 124 }, { height: 152, y: 100 }], [{ frame: 0 }, { frame: 3 }, { frame: 8 }]); //显示动画
                }
                if (!_this._clip) {
                    _this._clip = new BuyuClip(BuyuClip.ZHUANPAN_FONT);
                    _this._viewUI.box_ZhuanPan.addChild(_this._clip);
                    _this._clip.y = 90;
                    _this._clip.centerX = -5;
                    _this._clip.anchorX = _this._clip.anchorY = 0.5;
                }
                if (!_this._goldClip) {
                    _this._goldClip = new BuyuClip(BuyuClip.MONEY_FONT2);
                    _this._viewUI.box_Gold.addChild(_this._goldClip);
                    _this._goldClip.pos(_this._viewUI.clip_Gold.x, _this._viewUI.clip_Gold.y);
                    _this._viewUI.clip_Gold.removeSelf();
                }
                _this._mapLv = _this._game.sceneObjectMgr.story.maplv;
                var story = _this._game.sceneObjectMgr.story;
                _this._buyuMgr = story.buyuMgr;
                return _this;
            }
            Object.defineProperty(BuyuGunItem.prototype, "logicPos", {
                get: function () {
                    return this._logicPos;
                },
                set: function (value) {
                    this._logicPos = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BuyuGunItem.prototype, "showPos", {
                get: function () {
                    return this._showPos;
                },
                enumerable: true,
                configurable: true
            });
            //心跳
            BuyuGunItem.prototype.update = function (diff) {
                if (!this._player)
                    return;
                this.updateToward(diff);
                this.updateZhuanPan(diff);
                this.checkTipsMoney(diff);
            };
            BuyuGunItem.prototype.hitAddOrDecButton = function (target) {
                if (target.contains(this._viewUI.btn_Add) || target.contains(this._viewUI.btn_Dec)) {
                    return true;
                }
                return false;
            };
            /**
             * 点击事件
             */
            BuyuGunItem.prototype.onClickDown = function (e) {
                this._game.uiRoot.btnTween(e.currentTarget);
                switch (e.currentTarget) {
                    case this._viewUI.btn_Add:
                        if (this._player) {
                            this.changeRate(this._player.fireLevel + 1);
                        }
                        break;
                    case this._viewUI.btn_Dec:
                        if (this._player) {
                            this.changeRate(this._player.fireLevel - 1);
                        }
                        break;
                }
            };
            /**
             * 改变炮倍数
             * @param rate
             */
            BuyuGunItem.prototype.changeRate = function (rate) {
                if (rate < 1)
                    rate = 10;
                if (rate > 10)
                    rate = 1;
                this._game.network.call_change_fire_lv(rate);
            };
            /**
             * 设置炮变形
             */
            BuyuGunItem.prototype.initGunView = function () {
                this.clearUI();
                switch (this._showPos) {
                    case 1: //左下
                        //UI默认是左下 不处理
                        break;
                    case 2: //右下
                        this._viewUI.box_Gold.x = -3;
                        this._viewUI.label_Name.x = -15;
                        this._viewUI.image_InfoBG.scaleX = -1;
                        this._viewUI.image_InfoBG.x = 225;
                        this._viewUI.box_Player.x = 0;
                        this._viewUI.box_Gold.x = 47;
                        this._viewUI.label_Name.x = 25;
                        this._viewUI.box_ZhuanPan.x = 322;
                        this._viewUI.label_Name.align = "right";
                        break;
                    case 3: //左上
                        this._viewUI.image_Pao.scaleY = -1;
                        this._viewUI.image_Pao.y = 34;
                        this._viewUI.box_PlayerBottom.scaleY = -1;
                        this._viewUI.box_PlayerBottom.y = 75;
                        this._viewUI.image_InfoBG.scaleY = -1;
                        this._viewUI.image_InfoBG.y = 77;
                        this._viewUI.box_Gold.y = 6;
                        this._viewUI.label_Name.y = 54;
                        this._viewUI.box_PlayerInfo.y = 0;
                        this._viewUI.image_PoChan.y = 23;
                        this._viewUI.box_ZhuanPan.y = 224;
                        this._viewUI.box_DengDai.y = 19;
                        this._viewUI.box_Rate.y = 0;
                        break;
                    case 4: //右上
                        this._viewUI.image_Pao.scaleY = -1;
                        this._viewUI.image_Pao.y = 34;
                        this._viewUI.box_PlayerBottom.y = 75;
                        this._viewUI.box_PlayerBottom.scaleY = -1;
                        this._viewUI.image_InfoBG.scaleY = -1;
                        this._viewUI.image_InfoBG.y = 77;
                        this._viewUI.box_Gold.y = 10;
                        this._viewUI.label_Name.y = 54;
                        this._viewUI.box_PlayerInfo.y = 0;
                        this._viewUI.image_PoChan.y = 23;
                        this._viewUI.box_Rate.y = 0;
                        this._viewUI.label_Name.align = "right";
                        this._viewUI.box_Gold.x = -3;
                        this._viewUI.label_Name.x = -15;
                        this._viewUI.image_InfoBG.scaleX = -1;
                        this._viewUI.image_InfoBG.x = 186;
                        this._viewUI.box_Player.x = 0;
                        this._viewUI.box_ZhuanPan.x = 322;
                        this._viewUI.box_ZhuanPan.y = 224;
                        this._viewUI.box_DengDai.y = 19;
                        break;
                }
                //计算锚点
                var p = new Point(this._viewUI.image_Pao.x, this._viewUI.image_Pao.y);
                p = this._viewUI.box_Player.localToGlobal(p);
                p = this.globalToLocal(p);
                this.pivot(p.x, p.y);
                //转盘隐藏
                this._viewUI.box_ZhuanPan.visible = false;
                //位置提示
                this._viewUI.box_Wz.visible = false;
                //破产
                this._viewUI.image_PoChan.visible = true;
                this.updateGunView();
            };
            BuyuGunItem.prototype.hideWz = function () {
                this._viewUI.ani4.clear();
                this._viewUI.box_Wz.visible = false;
            };
            /**
             * 通过是否是主炮来变换形态
             */
            BuyuGunItem.prototype.updateGunView = function () {
                this._viewUI.image_PlayerBottom.skin = this._isMainPlayer ? Path_game_buyu.ui_buyu + "hudscene/ptd.png" : Path_game_buyu.ui_buyu + "hudscene/ptd1.png";
                this._viewUI.btn_Add.visible = this._isMainPlayer;
                this._viewUI.btn_Dec.visible = this._isMainPlayer;
                switch (this._showPos) {
                    case 1: //左下
                        //UI默认是左下 不处理
                        this._viewUI.box_PlayerInfo.x = this._isMainPlayer ? 7 : 35;
                        break;
                    case 2: //右下
                        this._viewUI.box_PlayerInfo.x = this._isMainPlayer ? 235 : 208;
                        break;
                    case 3: //左上
                        this._viewUI.box_PlayerInfo.x = this._isMainPlayer ? 7 : 35;
                        break;
                    case 4: //右上
                        this._viewUI.box_PlayerInfo.x = this._isMainPlayer ? 273 : 247;
                        break;
                }
            };
            /**
             * 设置数据
             * @param player
             */
            BuyuGunItem.prototype.setData = function (player) {
                if (this._player == player)
                    return;
                this.clearUI();
                if (!player)
                    return;
                this._player = player;
                this._viewUI.box_DengDai.visible = false;
                this._viewUI.box_Player.visible = true;
                this._viewUI.box_PlayerInfo.visible = true;
                this.onMainPlayer();
                //UI信息
                this.updateInfo();
                //下标监听
                this._player.on(BuyuPlayer.GOLD_CHANGED, this, this.updateGold);
                this._player.on(BuyuPlayer.BROKE_STATE_CHANGED, this, this.updateBroke);
                this._player.on(BuyuPlayer.FIRE_LEVEL_CHANGED, this, this.updateRate);
                this._player.on(BuyuPlayer.QIFU_ENDTIME_CHANGED, this, this.updateQiFu);
                this._player.on(BuyuPlayer.FIRE_IT, this, this.playFireAnim);
                this._player.on(BuyuPlayer.FIRE_TYPE_CHANGED, this, this.updateFireType);
                this._game.sceneObjectMgr.on(BuyuMgr.EVENT_KILL_FISH, this, this.onKillFish);
                this._buyuMgr.on(BuyuMgr.EVENT_UPDATE_MAIN_PLAYER, this, this.onMainPlayer);
            };
            BuyuGunItem.prototype.onMainPlayer = function () {
                this._isMainPlayer = this._player == this._buyuMgr.mainPlayer;
                //炮变换
                this.updateGunView();
                //主玩家操作
                if (this._isMainPlayer) {
                    //位置提示
                    if (!this._firstAlert) {
                        if (this._mapLv == Web_operation_fields.GAME_ROOM_CONFIG_FISH_1) {
                            //体验场提示
                            this.showTips();
                        }
                        this._firstAlert = true;
                        this._viewUI.box_Wz.visible = true;
                        Laya.timer.once(5000, this, this.hideWz);
                    }
                }
            };
            BuyuGunItem.prototype.onKillFish = function (fish, killOid) {
                var killer = fish.killer;
                if (!killer && killOid)
                    killer = killOid;
                if (this._player.unit && this._player.unit.oid == killer) {
                    //判断转盘
                    var lootMoney_1 = EnumToString.getPointBackNum(fish.lootMoney, 2);
                    var temp = fish.fishTemp;
                    var groupID = fish.groupID;
                    var groupTemp = FishGroupPathManager.getFishGroupTempById(groupID);
                    var isYwdj = groupTemp && groupTemp.group_typ == 4;
                    var fishIndex = fish.position;
                    var isBoss = groupTemp && groupTemp.group_typ == 6 && groupTemp.boss > 0 && fishIndex == groupTemp.boss - 1;
                    if (temp && temp.show == 1 || isYwdj || isBoss) {
                        this._clip.setText(lootMoney_1, false, false);
                        if (isYwdj) {
                            this._viewUI.image_Name.skin = Path_game_buyu.ui_buyu + "hudscene/ywdj.png";
                        }
                        else {
                            this._viewUI.image_Name.skin = Path_game_buyu.ui_buyu + "hudscene/ym_" + temp.id + ".png";
                        }
                        this.isShowZhuanPan = true;
                    }
                    //判断获得金币
                    if (this._isMainPlayer) {
                        this.upGoldEff(lootMoney_1);
                        //太棒了
                        if (isBoss || isYwdj || temp.type == 5) {
                            this._game.uiRoot.general.open(page.BuyuPageDef.PAGE_BUYU_GREAT, function (p) {
                                p.setData(lootMoney_1);
                            });
                        }
                    }
                }
            };
            Object.defineProperty(BuyuGunItem.prototype, "isShowZhuanPan", {
                set: function (value) {
                    this._viewUI.box_ZhuanPan.visible = value;
                    if (value) {
                        this._isShowZhuanPan = true;
                        this._timer = Laya.timer.currTimer;
                        this._viewUI.box_ZhuanPan.scale(2, 2);
                        this._viewUI.ani3.play(0, true);
                        Laya.Tween.to(this._viewUI.box_ZhuanPan, { scaleX: 1, scaleY: 1 }, 800, Laya.Ease.elasticOut);
                        this.shakeClip1();
                        this._game.playSound(Path.music + "zhuanpan.mp3");
                    }
                    else {
                        this._isShowZhuanPan = false;
                        this._timer = 0;
                        this._viewUI.image_ZhuanPan.rotation = 0;
                        Laya.Tween.clearAll(this._clip);
                        this._viewUI.ani3.clear();
                        this._game.stopSound(Path.music + "zhuanpan.mp3");
                    }
                },
                enumerable: true,
                configurable: true
            });
            BuyuGunItem.prototype.shakeClip1 = function () {
                Laya.Tween.clearAll(this._clip);
                Laya.Tween.to(this._clip, { rotation: 15 }, 200, null, Handler.create(this, this.shakeClip2));
            };
            BuyuGunItem.prototype.shakeClip2 = function () {
                Laya.Tween.clearAll(this._clip);
                Laya.Tween.to(this._clip, { rotation: -15 }, 200, null, Handler.create(this, this.shakeClip1));
            };
            BuyuGunItem.prototype.upGoldEff = function (value) {
                value = EnumToString.getPointBackNum(value, 2);
                var valueClip = value >= 0 ? new BuyuClip(BuyuClip.ADD_MONEY_FONT) : new BuyuClip(BuyuClip.SUB_MONEY_FONT);
                var preSkin = value >= 0 ? (PathGameTongyong.ui_tongyong_general + "tu_jia.png") : (PathGameTongyong.ui_tongyong_general + "tu_jian.png");
                valueClip.scale(1, 1);
                valueClip.anchorX = 0.5;
                valueClip.anchorY = 0.5;
                valueClip.setText(Math.abs(value), true, false, preSkin);
                valueClip.x = this._viewUI.box_Gold.x + this._viewUI.box_Gold.width * (this._showPos == 1 || this._showPos == 3 ? 2 : 1) / 3;
                valueClip.y = this._viewUI.box_Gold.y + (this._showPos == 3 || this._showPos == 4 ? 0 : this._viewUI.box_Gold.height);
                this._viewUI.box_Gold.parent.addChild(valueClip);
                this._upGoldEffArr.push(valueClip);
                Laya.Tween.clearAll(valueClip);
                var targetPosY = 0;
                if (this._showPos == 3 || this._showPos == 4) {
                    targetPosY = valueClip.y + 80;
                }
                else {
                    targetPosY = valueClip.y - 80;
                }
                Laya.Tween.to(valueClip, { y: targetPosY }, 1000, Laya.Ease.cubicOut, Handler.create(this, this.onUpGoldEffComplete, [valueClip]));
            };
            BuyuGunItem.prototype.onUpGoldEffComplete = function (valueClip) {
                if (valueClip) {
                    var index = this._upGoldEffArr.indexOf(valueClip);
                    if (index != -1)
                        this._upGoldEffArr.splice(index, 1);
                    Laya.Tween.clearAll(valueClip);
                    valueClip.removeSelf();
                    valueClip.destroy(true);
                    valueClip = null;
                }
            };
            BuyuGunItem.prototype.clearAllUpGoldEff = function () {
                for (var i = 0; i < this._upGoldEffArr.length; i++) {
                    var clip = this._upGoldEffArr[i];
                    clip.removeSelf();
                    clip.destroy(true);
                    clip = null;
                }
                this._upGoldEffArr.length = 0;
            };
            BuyuGunItem.prototype.clearUI = function () {
                this._viewUI.box_DengDai.visible = true;
                this._viewUI.box_Player.visible = false;
                this._viewUI.box_PlayerInfo.visible = false;
                this._game.sceneObjectMgr.off(BuyuMgr.EVENT_KILL_FISH, this, this.onKillFish);
                this._buyuMgr && this._buyuMgr.off(BuyuMgr.EVENT_UPDATE_MAIN_PLAYER, this, this.onMainPlayer);
                if (this._player) {
                    this._player.off(BuyuPlayer.GOLD_CHANGED, this, this.updateGold);
                    this._player.off(BuyuPlayer.BROKE_STATE_CHANGED, this, this.updateBroke);
                    this._player.off(BuyuPlayer.FIRE_LEVEL_CHANGED, this, this.updateRate);
                    this._player.off(BuyuPlayer.QIFU_ENDTIME_CHANGED, this, this.updateQiFu);
                    this._player.off(BuyuPlayer.FIRE_IT, this, this.playFireAnim);
                    this._player.off(BuyuPlayer.FIRE_TYPE_CHANGED, this, this.updateFireType);
                    this._player = null;
                }
            };
            /**
             * 更新信息
             */
            BuyuGunItem.prototype.updateInfo = function () {
                if (!this._player)
                    return;
                //名字
                this._viewUI.label_Name.text = this._player.unit.GetName();
                //炮台金币
                this.updateGold();
                //破产标志
                this.updateBroke();
                //炮台倍数
                this.updateRate();
                //祈福状态
                this.updateQiFu();
            };
            //金币
            BuyuGunItem.prototype.updateGold = function () {
                if (this._goldClip) {
                    var gold = this._player.gold;
                    gold = EnumToString.getPointBackNum(gold, 2);
                    // let goldStr = gold.toString();
                    this._goldClip.setText(gold, true);
                }
            };
            //显示破产
            BuyuGunItem.prototype.updateBroke = function () {
                if (!this._player)
                    return;
                this._viewUI.image_PoChan.visible = this._player.isBroke;
            };
            BuyuGunItem.prototype.checkTipsMoney = function (diff) {
                var _this = this;
                if (this._isShowTips || !this._isMainPlayer)
                    return;
                this._checkMoneyTimer += diff;
                if (this._checkMoneyTimer >= 1000 && this._player.bulletCount <= 0 && this._player.isBroke) {
                    this._checkMoneyTimer = 0;
                    this._isShowTips = true;
                    //在付费场就让他滚出去
                    if (this._mapLv != Web_operation_fields.GAME_ROOM_CONFIG_FISH_1) {
                        //破产
                        TongyongPageDef.ins.alertRecharge("您的余额不足，已被请出渔场，是否前往充值？", function () {
                            _this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                        }, function () {
                            _this._game.sceneObjectMgr.leaveStory(true);
                        }, null, null);
                    }
                    else {
                        //体验场 
                        var temp = Template.getConfigTempById(1);
                        if (temp) {
                            var str = StringU.substitute("您的捕鱼币用完了，这是系统赠送给您的{0}捕鱼币！", getSampleNum(temp.pochan));
                            TongyongPageDef.ins.alertRecharge(str, function () {
                                //领取协议
                                _this._game.network.call_fish_get_dole();
                                _this._isShowTips = false;
                            }, function () {
                                //领取协议
                                _this._game.network.call_fish_get_dole();
                                _this._isShowTips = false;
                            }, true, Path_game_buyu.ui_buyu + "tongyong/btn_lq.png");
                        }
                    }
                }
            };
            BuyuGunItem.prototype.showTips = function () {
                var _this = this;
                this._viewUI.image_Tips.visible = true;
                Laya.timer.once(3000, this, function () {
                    _this._viewUI.image_Tips.visible = false;
                });
            };
            //改变朝向
            BuyuGunItem.prototype.updateToward = function (diff) {
                if (!this._player)
                    return;
                //判断是否是立即模式
                var flag = this._player.updateOrientation(diff, true);
                if (!flag) {
                    if (this._player) {
                        var ori = this._player.curOri.clone();
                        if (this._showPos > 2) {
                            ori.x = -ori.x;
                        }
                        var angle = ori.angle(Vector2.right) + Math.PI;
                        this._viewUI.image_Pao.rotation = MathU.getRotation(angle);
                    }
                }
            };
            //改变炮台倍数
            BuyuGunItem.prototype.updateRate = function () {
                var mlv = this._mapLv;
                var info = page.BuyuPageDef.ROOM_INFO[mlv];
                if (!info)
                    return;
                this._viewUI.label_Rate.text = EnumToString.getPointBackNum((info.rateGold * this._player.fireLevel), 2) + "";
                this.updatePaoSkin();
            };
            //改变炮台皮肤
            BuyuGunItem.prototype.updatePaoSkin = function () {
                if (!this._player)
                    return;
                var rate = this._player.fireLevel;
                this._viewUI.image_PaoSkin.skin = Path_game_buyu.ui_buyu + "pao/" + SceneFishRes.getSkin(rate) + ".png";
            };
            //改变祈福状态
            BuyuGunItem.prototype.updateQiFu = function (qifu_endtime) {
                if (!this._player)
                    return;
                this._viewUI.img_qifu.visible = this._player.qifu_endTime > this._game.sync.serverTimeBys;
            };
            BuyuGunItem.prototype.playFireAnim = function () {
                if (!this._player)
                    return;
                if (this._paoAnim) {
                    this._paoAnim.play();
                }
            };
            //转盘
            BuyuGunItem.prototype.updateZhuanPan = function (diff) {
                var now = Laya.timer.currTimer;
                if (this._isShowZhuanPan) {
                    if (now - this._timer >= BuyuGunItem.ZHUANPAN_TIME) {
                        this.isShowZhuanPan = false;
                    }
                }
            };
            /**
             * 获取金币栏位的全局位置
             */
            BuyuGunItem.prototype.getGoldGlobalPos = function (p) {
                if (!p)
                    p = new Point(this._viewUI.box_Gold.x, this._viewUI.box_Gold.y);
                else {
                    p.x = this._viewUI.box_Gold.x;
                    p.y = this._viewUI.box_Gold.y;
                }
                p = this._viewUI.box_PlayerInfo.localToGlobal(p);
                return p;
            };
            //改变开火状态
            BuyuGunItem.prototype.updateFireType = function () {
                if (!this._player)
                    return;
                this.updatePaoSkin();
                var ori = this._player.curOri;
                var angle = ori.angle(Vector2.right) + Math.PI;
                this._viewUI.image_Pao.rotation = MathU.getRotation(angle);
            };
            BuyuGunItem.prototype.destroy = function () {
                Laya.timer.clearAll(this);
                if (this._viewUI) {
                    this.clearUI();
                    this.clearAllUpGoldEff();
                    if (this._clip) {
                        this._clip.destroy(true);
                        this._clip = null;
                    }
                    if (this._goldClip) {
                        this._goldClip.destroy(true);
                        this._goldClip = null;
                    }
                    if (this._paoAnim) {
                        ObjectPools.free(this._paoAnim);
                    }
                    Laya.Tween.clearAll(this._viewUI);
                    this._viewUI.destroy(true);
                }
                _super.prototype.destroy.call(this, true);
            };
            //转盘速度
            BuyuGunItem.ROTATION_SPEED = 600;
            //光转速度
            BuyuGunItem.GUANG_ROTATION_SPEED = 30;
            //转盘时间
            BuyuGunItem.ZHUANPAN_TIME = 5000;
            //延迟显示增加金币的时间
            BuyuGunItem.DELAY_TIME = 2500;
            //增加金币消失时间
            BuyuGunItem.HIDE_TIME = 2000;
            //获得奖励提示出现的时间
            BuyuGunItem.AWARD_SHOW_TIME = 5;
            return BuyuGunItem;
        }(Laya.Box));
        page.BuyuGunItem = BuyuGunItem;
    })(page = gamebuyu.page || (gamebuyu.page = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=BuyuGunItem.js.map