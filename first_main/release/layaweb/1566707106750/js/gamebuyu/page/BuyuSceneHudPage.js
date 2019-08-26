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
    (function (page_1) {
        /**
        * 经典模式HUD
        */
        var BuyuSceneHudPage = /** @class */ (function (_super) {
            __extends(BuyuSceneHudPage, _super);
            function BuyuSceneHudPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                //4个炮的对象集合
                _this._gunItemList = [];
                _this._isMenuShow = false;
                _this._tempP = new Point();
                _this._fpsLowTipShowed = false;
                _this._timer = 0;
                //瞄准效果相关
                _this._curFishOid = 0;
                _this._drawDis = 30; //画点的间距
                _this._ignoreButtonUI = []; //不响应舞台鼠标按下UI对象集合
                //////////////////////// 地图事件处理 //////////////////////
                _this._ycTime = 0;
                _this._isCanShowYC = true; //是否能显示鱼潮动画
                _this._nameStrInfo = ["xs", "px", "gsy", "gg", "cs", "tdg"];
                _this._asset = [
                    Path_game_buyu.atlas_game_ui + "buyu/hudscene.atlas",
                    Path_game_buyu.atlas_game_ui + "buyu/tongyong.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                    Path_game_buyu.atlas_game_ui + "buyu/pao.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                    Path.custom_atlas_scene + 'bullet.atlas',
                    Path.custom_atlas_scene + 'single.atlas',
                    Path.custom_atlas_scene + 'lightning.atlas',
                    Path.temp + "template.bin",
                    Path.temp + "fish_group.json",
                ];
                _this._isNeedDuang = false;
                return _this;
            }
            // 页面初始化函数
            BuyuSceneHudPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.buyu.BuYu_SceneHUDUI');
                this.addChild(this._viewUI);
                this.mouseThrough = true;
                this.setMouseThrough(true);
                this._targetV = new Vector2();
                page_1.BuyuPageDef.parseBuYuData(this._assetsLoader);
                this._ignoreButtonUI = [this._viewUI.btn_spread, this._viewUI.btn_qifu, this._viewUI.btn_Exit, this._viewUI.btn_Rule, this._viewUI.btn_Set, this._viewUI.btn_zhanji, this._viewUI.check_Aim, this._viewUI.check_Auto];
            };
            // 页面打开时执行函数
            BuyuSceneHudPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                if (this._game.mainScene) {
                    this._camera = this._game.mainScene.camera;
                }
                //捕鱼数据管理器
                var story = this._game.sceneObjectMgr.story;
                this._buyuMgr = story.buyuMgr;
                if (this._buyuMgr) {
                    this._buyuMgr.on(BuyuMgr.EVENT_CAMER_FZ, this, this.onMainPlayerSitDown);
                    this._buyuMgr.on(BuyuMgr.EVENT_ADD_PLAYER, this, this.checkAddBuyuPlayer);
                    this._buyuMgr.on(BuyuMgr.EVENT_REMOVE_PLAYER, this, this.checkRemoveBuyuPlayer);
                    this._buyuMgr.on(BuyuMgr.EVENT_UPDATE_MAIN_PLAYER, this, this.updateMainPlayer);
                }
                //初始化炮台视图
                this.initPao();
                this.updateMainPlayer();
                //地图实例
                this.onMapInfoChange();
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                this._game.sceneObjectMgr.on(BuyuMapInfo.EVENT_FISH_EVENT, this, this.onUpdateMapEvent);
                this._game.sceneObjectMgr.on(BuyuMapInfo.EVENT_BOSS_EVENT, this, this.onBossEvent);
                this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this._viewUI.box_Left.anchorX = 0;
                this._viewUI.box_Right.anchorX = 1;
                this._viewUI.btn_Exit.anchorX = 1;
                this._viewUI.box_menu.visible = false;
                this._viewUI.image_Mz.visible = false;
                this._viewUI.image_Mz.anchorX = this._viewUI.image_Mz.anchorY = 0.5;
                //按钮监听
                this._viewUI.btn_spread.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_Exit.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_Rule.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_Set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.check_Aim.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.check_Auto.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zhanji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.playMusic(Path.music + "buyu/bg.mp3");
            };
            BuyuSceneHudPage.prototype.onMapInfoChange = function () {
                this._mapInfo = this._game.sceneObjectMgr.mapInfo;
            };
            BuyuSceneHudPage.prototype.onMouseClick = function (e) {
                if (e.target != this._viewUI.btn_spread) {
                    this.showMenu(false);
                }
            };
            BuyuSceneHudPage.prototype.showMenu = function (isShow) {
                var _this = this;
                this._isMenuShow = isShow;
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
            BuyuSceneHudPage.prototype.updateFireType = function () {
                if (!this._mainPlayer)
                    return;
                //锁定
                this._viewUI.check_Aim.selected = this._mainPlayer.fireType == BuyuPlayer.FIRE_TYPE_AIM;
                //自动
                this._viewUI.check_Auto.selected = this._mainPlayer.fireType == BuyuPlayer.FIRE_TYPE_AUTO;
            };
            BuyuSceneHudPage.prototype.update = function (diff) {
                if (!this._viewUI)
                    return;
                var nowServerTime = this._game.sync.serverTimeBys;
                this.updateAim(diff);
                this.checkYC(nowServerTime); //检查鱼潮来了
                this.checkTips(diff);
                this._gunItemList.forEach(function (element) {
                    if (element && element instanceof page_1.BuyuGunItem) {
                        element.update(diff);
                    }
                });
            };
            BuyuSceneHudPage.prototype.checkTips = function (diff) {
                var _this = this;
                if (this._mainPlayer && this._mapInfo && parseInt(this._mapInfo.id) == Web_operation_fields.GAME_ROOM_CONFIG_FISH_1) {
                    //体验场
                    this._timer += diff;
                    if (!this._mainPlayer.isBroke && this._timer >= BuyuSceneHudPage.TIPS_INTERVAL) {
                        TongyongPageDef.ins.alertRecharge("练习了这么久，\n去真正的战场大杀四方吧！", function () {
                            _this._game.sceneObjectMgr.changeStory(function () {
                                _this._game.sceneObjectMgr.intoStory(page_1.BuyuPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_FISH_2.toString(), true);
                            });
                        }, null, false, Path_game_buyu.ui_buyu + "tongyong/btn_qw.png", Path_game_buyu.ui_buyu + "tongyong/btn_jxrs.png");
                        this._timer = 0;
                    }
                }
            };
            BuyuSceneHudPage.prototype.updateAim = function (diff) {
                this._viewUI.graphics.clear();
                var mainPlayer = this._buyuMgr.mainPlayer;
                if (!mainPlayer || mainPlayer.fireType != BuyuPlayer.FIRE_TYPE_AIM || !mainPlayer.selectFish || mainPlayer.fireState == BuyuPlayer.FIRE_STATE_STOP) {
                    if (this._viewUI.image_Mz.visible)
                        this._viewUI.image_Mz.visible = false;
                    this._curFishOid = 0;
                    this._mzTime = 0;
                    return;
                }
                this._mzTime += diff;
                this._viewUI.image_Mz.visible = mainPlayer.selectFish != null;
                if (mainPlayer.selectFish && this._curFishOid != mainPlayer.selectFish.unit.oid) {
                    this._curFishOid = mainPlayer.selectFish.unit.oid;
                }
                if (!this._camera)
                    return;
                var x = this._camera.getScenePxByCellX(mainPlayer.selectFish.pos.x) * this._game.clientScale;
                var y = this._camera.getScenePxByCellY(mainPlayer.selectFish.pos.y) * this._game.clientScale;
                this._tempP.x = x;
                this._tempP.y = y;
                this._tempP = this._viewUI.globalToLocal(this._tempP);
                this._viewUI.image_Mz.pos(this._tempP.x, this._tempP.y);
                this._viewUI.image_Mz.rotation = this._mzTime / 50 % 360;
                this.drawPoint(this._viewUI.graphics, this._tempP.x, this._tempP.y);
            };
            BuyuSceneHudPage.prototype.drawPoint = function (g, targetX, targetY) {
                if (!this._towardV) {
                    this._towardV = new Vector2();
                }
                this._towardV.x = targetX - this._mainGunItem.x;
                this._towardV.y = targetY - this._mainGunItem.y;
                //计算点
                //加上炮管长度
                Vector2.temp.x = this._mainGunItem.x;
                Vector2.temp.y = this._mainGunItem.y;
                Vector2.temp.add(this._towardV.normalize().mul(SceneFishRes.PAO_LONG));
                var dis = MathU.getDistance(Vector2.temp.x, Vector2.temp.y, targetX, targetY);
                var count = Math.floor(dis / this._drawDis);
                //获得画点的间隔矢量
                this._towardV.normalize().mul(this._drawDis);
                for (var i = 0; i < count; i++) {
                    Vector2.temp.add(this._towardV);
                    g.drawCircle(Vector2.temp.x, Vector2.temp.y, 5, "#00ff00");
                }
            };
            BuyuSceneHudPage.prototype.onBtnTweenEnd = function (e, target) {
                var _this = this;
                var mainPlayer = this._buyuMgr.mainPlayer;
                switch (target) {
                    case this._viewUI.btn_spread:
                        this.showMenu(true);
                        break;
                    case this._viewUI.btn_Exit:
                        TongyongPageDef.ins.alertRecharge("确定要离开渔场吗？", function () {
                            // this._game.uiRoot.general.open(BuyuPageDef.PAGE_BUYU_JIESUAN);
                            _this._game.sceneObjectMgr.leaveStory(true);
                        }, null, false);
                        break;
                    case this._viewUI.check_Aim: //瞄准射击
                        if (this._viewUI.check_Aim.selected)
                            mainPlayer && (mainPlayer.fireType = BuyuPlayer.FIRE_TYPE_AIM);
                        else
                            mainPlayer && (mainPlayer.fireType = BuyuPlayer.FIRE_TYPE_HAND);
                        break;
                    case this._viewUI.check_Auto: //自动射击
                        if (this._viewUI.check_Auto.selected)
                            mainPlayer && (mainPlayer.fireType = BuyuPlayer.FIRE_TYPE_AUTO);
                        else
                            mainPlayer && (mainPlayer.fireType = BuyuPlayer.FIRE_TYPE_HAND);
                        break;
                    case this._viewUI.btn_Set:
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING);
                        break;
                    case this._viewUI.btn_Rule:
                        this._game.uiRoot.general.open(page_1.BuyuPageDef.PAGE_BUYU_GUIZE);
                        break;
                    case this._viewUI.btn_zhanji:
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, function (page) {
                            page.dataSource = page_1.BuyuPageDef.GAME_NAME;
                        });
                        break;
                    case this._viewUI.btn_qifu:
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU);
                        break;
                }
            };
            //////////////////// 炮台设置相关 //////////////////
            //初始化炮
            BuyuSceneHudPage.prototype.initPao = function () {
                //1号位 左上
                var item1 = new page_1.BuyuGunItem(1, this._game);
                this._viewUI.addChildAt(item1, 0);
                //2号位 右上
                var item2 = new page_1.BuyuGunItem(2, this._game);
                this._viewUI.addChildAt(item2, 0);
                //3号位 左下
                var item3 = new page_1.BuyuGunItem(3, this._game);
                this._viewUI.addChildAt(item3, 0);
                //4号位 右下
                var item4 = new page_1.BuyuGunItem(4, this._game);
                this._viewUI.addChildAt(item4, 0);
                this._gunItemList.push(item1);
                this._gunItemList.push(item2);
                this._gunItemList.push(item3);
                this._gunItemList.push(item4);
                this.updatePaoPos();
            };
            BuyuSceneHudPage.prototype.updatePaoPos = function () {
                if (!this._camera)
                    return;
                this._camera.update();
                // logd("=========updatePaoPos,", this._camera ? this._camera.flipV : 0, this._game.mainScene.camera ? this._game.mainScene.camera.flipV : 0)
                var scenePosArr = SceneFishRes.PAO_POSDATA;
                if (!this._paoPoint)
                    this._paoPoint = new Point();
                else {
                    this._paoPoint.x = 0;
                    this._paoPoint.y = 0;
                }
                var len = this._gunItemList.length;
                for (var i = 0; i < len; i++) {
                    var logicPos = i + 1;
                    if (this._camera.flipV) {
                        //如果镜头有翻转 那么逻辑位置有变化
                        logicPos = logicPos > 2 ? logicPos - 2 : logicPos + 2;
                    }
                    this._paoPoint.x = this._camera.getScenePxByCellX(scenePosArr[logicPos].x) * this._game.clientScale;
                    this._paoPoint.y = this._camera.getScenePxByCellY(scenePosArr[logicPos].y) * this._game.clientScale;
                    this._paoPoint = this._viewUI.globalToLocal(this._paoPoint);
                    var item = this._gunItemList[i];
                    item.logicPos = logicPos;
                    item.pos(this._paoPoint.x, this._paoPoint.y);
                }
            };
            /**
             * 收到主玩家对象下来
             */
            BuyuSceneHudPage.prototype.updateMainPlayer = function () {
                this._mainPlayer = this._buyuMgr.mainPlayer;
                if (this._mainPlayer) {
                    //等坐下
                    this._buyuMgr.on(BuyuMgr.EVENT_CAMER_FZ, this, this.onMainPlayerSitDown);
                    this._mainPlayer.on(BuyuPlayer.FIRE_TYPE_CHANGED, this, this.updateFireType);
                    this._mainPlayer.on(BuyuPlayer.PLAYER_TIPS, this, this.showPlayerTips);
                    this.onMainPlayerSitDown();
                    this.updateFireType();
                }
            };
            BuyuSceneHudPage.prototype.showPlayerTips = function (str) {
                var _this = this;
                this._game.showTips(str);
                Laya.timer.once(5000, this, function () {
                    if (_this._mainPlayer) {
                        _this._mainPlayer.isShowBulletTip = false;
                    }
                });
            };
            /**
             * 主玩家找到座位坐下了
             */
            BuyuSceneHudPage.prototype.onMainPlayerSitDown = function () {
                if (this._mainPlayer && this._mainPlayer.position > 0) {
                    this.updatePaoPos();
                    //初始化房间内玩家
                    this.initBuyuPlayer();
                    //设置主炮台
                    this._mainGunItem = this.getGunItemByPlayer(this._mainPlayer);
                }
            };
            BuyuSceneHudPage.prototype.onMouseDown = function (e) {
                if (!this._mainPlayer)
                    return;
                if (!this._mainGunItem)
                    return;
                if (this._mainGunItem.hitAddOrDecButton(e.target))
                    return;
                if (this._ignoreButtonUI.indexOf(e.target) != -1)
                    return;
                this._mainPlayer.isDoFireing = true;
                if (this._mainPlayer.fireType == BuyuPlayer.FIRE_TYPE_AUTO) {
                    //更新方向
                    this._mainPlayer.updateFireToward();
                }
                else if (this._mainPlayer.fireType == BuyuPlayer.FIRE_TYPE_AIM) {
                    var mouseX = this._game.mainScene.camera.getCellXByScene(e.stageX / this._game.mainScene.scaleX);
                    var mouseY = this._game.mainScene.camera.getCellYByScene(e.stageY / this._game.mainScene.scaleY);
                    var avatars = this._game.mainScene.avatarLayer.avatars;
                    var len = avatars.length;
                    for (var i = len - 1; i >= 0; i--) {
                        var hitAvatar = avatars[i];
                        if (hitAvatar && hitAvatar instanceof AvatarFish) {
                            if (hitAvatar.hitTest(mouseX, mouseY)) {
                                this.onSelectFish(hitAvatar.fish);
                                return;
                            }
                        }
                    }
                }
            };
            BuyuSceneHudPage.prototype.onMouseUp = function (e) {
                if (this._mainPlayer) {
                    this._mainPlayer.isDoFireing = false;
                }
            };
            BuyuSceneHudPage.prototype.onSelectFish = function (fish) {
                var mainPlayer = this._buyuMgr.mainPlayer;
                if (!mainPlayer)
                    return;
                if (mainPlayer.fireType == BuyuPlayer.FIRE_TYPE_AIM) {
                    //瞄准
                    mainPlayer.selectFish = fish; //手动选择
                    if (!fish) {
                        mainPlayer.findTarget(); //自动选择
                    }
                }
            };
            /**
             * 初始化房间内原有的玩家
             */
            BuyuSceneHudPage.prototype.initBuyuPlayer = function () {
                if (this._gunItemList && this._gunItemList.length > 0) {
                    var len = this._gunItemList.length;
                    for (var i = 0; i < len; i++) {
                        var item = this._gunItemList[i];
                        item.clearUI();
                    }
                }
                var playerList = this._buyuMgr.buyuPlayerList;
                for (var key in playerList) {
                    var player = playerList[key];
                    this.addBuyuPlayer(player);
                }
            };
            /**
             * 检查添加的精灵是否为捕鱼玩家
             * @param unit
             */
            BuyuSceneHudPage.prototype.checkAddBuyuPlayer = function (player) {
                //等坐下了再添加
                player.on(BuyuPlayer.POSITION_CHANGED, this, this.addBuyuPlayer, [player]);
                this.addBuyuPlayer(player);
            };
            /**
             * 增加捕鱼场里的玩家
             */
            BuyuSceneHudPage.prototype.addBuyuPlayer = function (player) {
                var item = this.getGunItemByPlayer(player);
                if (item) {
                    player.off(BuyuPlayer.POSITION_CHANGED, this, this.addBuyuPlayer);
                    item.setData(player);
                }
            };
            /**
             * 检查删除的精灵是否为捕鱼玩家
             * @param unit
             */
            BuyuSceneHudPage.prototype.checkRemoveBuyuPlayer = function (player) {
                this.removeBuyuPlayer(player);
            };
            /**
             * 删除捕鱼场里的玩家
             */
            BuyuSceneHudPage.prototype.removeBuyuPlayer = function (player) {
                var item = this.getGunItemByPlayer(player);
                if (item) {
                    item.clearUI();
                }
            };
            /**
             * 获得炮台显示对象
             * @param player 玩家对象
             */
            BuyuSceneHudPage.prototype.getGunItemByPlayer = function (player) {
                if (!player)
                    return null;
                //找到炮台
                var pos = player.position;
                if (!pos)
                    return null;
                var len = this._gunItemList.length;
                for (var i = 0; i < len; i++) {
                    var item = this._gunItemList[i];
                    if (item.logicPos == pos)
                        return item;
                }
                return null;
            };
            BuyuSceneHudPage.prototype.onUpdateMapEvent = function () {
                logd("================= BuyuSceneHudPage.onUpdateMapEvent");
                if (!this._mapInfo)
                    return;
                this._ycTime = this._mapInfo.GetYuChaoLaiQiTime();
                this._isCanShowYC = false;
            };
            //检查鱼潮
            BuyuSceneHudPage.prototype.checkYC = function (nowTime) {
                !nowTime && (nowTime = this._game.sync.serverTimeBys);
                nowTime = nowTime * 1000;
                if (!this._isCanShowYC && nowTime >= this._ycTime) {
                    this._isCanShowYC = true;
                    if (!this._game.uiRoot.HUD.getPage(page_1.BuyuPageDef.PAGE_BUYU_FISH)) {
                        this._game.uiRoot.HUD.open(page_1.BuyuPageDef.PAGE_BUYU_FISH);
                    }
                    //地图随机
                    var mapAssetInfo = this._game.sceneObjectMgr.mapAssetInfo;
                    if (mapAssetInfo && mapAssetInfo.id && mapAssetInfo.id.length) {
                        mapAssetInfo.imgId = mapAssetInfo.id + MathU.randomRange(Web_operation_fields.GAME_ROOM_CONFIG_FISH_1, Web_operation_fields.GAME_ROOM_CONFIG_FISH_4);
                        this._game.mainScene && this._game.mainScene.changeMap(mapAssetInfo);
                    }
                }
            };
            //BOSS来袭
            BuyuSceneHudPage.prototype.onBossEvent = function (fishID) {
                if (!this._mapInfo)
                    return;
                if (!this._game.uiRoot.HUD.getPage(page_1.BuyuPageDef.PAGE_BUYU_BOSS)) {
                    this._game.uiRoot.HUD.open(page_1.BuyuPageDef.PAGE_BUYU_BOSS, function (page) {
                        page.setType(fishID);
                    });
                }
            };
            // 重新布局
            BuyuSceneHudPage.prototype.layout = function () {
                if (this._view && !onIPhoneX) {
                    this._view.width = this._clientRealWidth;
                }
                _super.prototype.layout.call(this);
                if (this._viewUI) {
                    if (this._game.uiRoot && this._view) {
                        this._viewUI.box_Right.x = this._clientRealWidth - this._game.uiRoot.x - this._view.x - 5;
                        this._viewUI.btn_Exit.x = this._clientRealWidth - this._game.uiRoot.x - this._view.x - 5;
                        // this._viewUI.box_Left.x = -this._game.uiRoot.x - this._view.x;
                        this._viewUI.box_Left.x = -this._game.uiRoot.x - this._view.x + 5;
                    }
                }
                this.updatePaoPos();
            };
            BuyuSceneHudPage.prototype.onOptHandler = function (optcode, msg) {
                if (msg.type == Operation_Fields.OPRATE_GAME) {
                    switch (msg.reason) {
                        case Operation_Fields.OPRATE_GAME_QIFU_SUCCESS_RESULT:
                            var dataInfo = JSON.parse(msg.data);
                            //打开祈福动画界面
                            var qifu_url_1 = StringU.substitute(PathGameTongyong.ui_tongyong_qifu + "f_{0}1.png", this._nameStrInfo[dataInfo.qf_id - 1]);
                            this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU_ANI, function (page) {
                                page.dataSource = qifu_url_1;
                            });
                            break;
                    }
                }
            };
            BuyuSceneHudPage.prototype.close = function () {
                if (this._viewUI) {
                    Laya.timer.clearAll(this);
                    this._viewUI.btn_spread.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_Exit.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_Rule.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_Set.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.check_Aim.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.check_Auto.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_zhanji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    if (this._mainPlayer) {
                        // this._mainPlayer.off(BuyuPlayer.POSITION_CHANGED, this, this.onMainPlayerSitDown);
                        this._mainPlayer.off(BuyuPlayer.FIRE_TYPE_CHANGED, this, this.updateFireType);
                        this._mainPlayer.off(BuyuPlayer.PLAYER_TIPS, this, this.showPlayerTips);
                    }
                    if (this._buyuMgr) {
                        this._buyuMgr.off(BuyuMgr.EVENT_CAMER_FZ, this, this.onMainPlayerSitDown);
                        this._buyuMgr.off(BuyuMgr.EVENT_ADD_PLAYER, this, this.checkAddBuyuPlayer);
                        this._buyuMgr.off(BuyuMgr.EVENT_REMOVE_PLAYER, this, this.checkRemoveBuyuPlayer);
                        this._buyuMgr.off(BuyuMgr.EVENT_UPDATE_MAIN_PLAYER, this, this.updateMainPlayer);
                    }
                    this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
                    this._game.sceneObjectMgr.off(BuyuMapInfo.EVENT_BOSS_EVENT, this, this.onBossEvent);
                    this._game.sceneObjectMgr.off(BuyuMapInfo.EVENT_FISH_EVENT, this, this.onUpdateMapEvent);
                    this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                    if (this._gunItemList && this._gunItemList.length > 0) {
                        var len = this._gunItemList.length;
                        for (var i = 0; i < len; i++) {
                            var item = this._gunItemList[i];
                            item.destroy();
                        }
                        this._gunItemList = null;
                    }
                }
                _super.prototype.close.call(this);
            };
            //体验场提示间隔
            BuyuSceneHudPage.TIPS_INTERVAL = 3 * 60 * 1000;
            return BuyuSceneHudPage;
        }(game.gui.base.Page));
        page_1.BuyuSceneHudPage = BuyuSceneHudPage;
    })(page = gamebuyu.page || (gamebuyu.page = {}));
})(gamebuyu || (gamebuyu = {}));
//# sourceMappingURL=BuyuSceneHudPage.js.map