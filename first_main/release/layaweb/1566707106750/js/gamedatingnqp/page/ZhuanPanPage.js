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
* name 转盘
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page_1) {
        var ZhuanPanPage = /** @class */ (function (_super) {
            __extends(ZhuanPanPage, _super);
            function ZhuanPanPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isBoJinUp = true;
                _this._isCompleteAniUp = true;
                _this._isCompleteAniDown = true;
                _this._curSelectIndex = 1;
                _this._total_turn_point = 0;
                _this._gridNum = 8;
                _this._effectStartTime = 1000; //转动开始后的动画开始播放时间
                _this._effectEndTime = 1000; //转动停止前的动画停止播放时间
                _this._asset = [
                    DatingPath.atlas_dating_ui + "zhuanpan.atlas",
                ];
                _this._isNeedDuang = false;
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                return _this;
            }
            // 页面初始化函数
            ZhuanPanPage.prototype.init = function () {
                this._viewUI = this.createView("dating.ZhuanPanUI");
                this.addChild(this._viewUI);
                this.initList();
                this._viewUI.img_get_zs.alpha = 0;
                this._viewUI.img_get_bojin.alpha = 0;
            };
            ZhuanPanPage.prototype.initList = function () {
                this._viewUI.list_zuanshi.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_zuanshi.dataSource = [0, 0, 0, 0, 0, 0, 0, 0];
                this._viewUI.list_bojin.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list_bojin.dataSource = [0, 0, 0, 0, 0, 0, 0, 0];
            };
            ZhuanPanPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.txt_num.text = cell.dataSource.award_value;
                    cell.img_reward.skin = StringU.substitute(DatingPath.ui_dating_tongyong + "{0}.png", cell.dataSource.award_icon || "jb_5");
                    cell.txt_num.visible = true;
                    cell.img_reward.visible = true;
                    cell.visible = cell.dataSource != 0;
                }
            };
            // 页面打开时执行函数
            ZhuanPanPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this.initClip();
                this._viewUI.guanbi.zOrder = 3;
                this._viewUI.bojin.zOrder = 0;
                this._viewUI.box_info.zOrder = 3;
                this._viewUI.bojin_click.zOrder = 3;
                //获取昨天可用来转盘积分
                this._viewUI.guanbi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.bojin_click.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_help.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_go_zuanshi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_go_bojin.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.box_info1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.box_info2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.ani1.addLabel(ZhuanPanPage.LABEL_CHANGE1, 75);
                this._viewUI.ani1.addLabel(ZhuanPanPage.LABEL_CHANGE2, 30);
                this._viewUI.ani1.on(LEvent.LABEL, this, this.updateLunBo);
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this._game.network.call_get_turntableinfo();
                this._game.network.call_get_turntablecfg();
                this._game.network.call_get_turntablelist();
                this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.updateTunrPoint);
                this.getTurneConfig();
                this.updateTunrPoint();
                //当前显示的转盘
                if (this._zuanShiData) {
                    if (this._total_turn_point >= this._zuanShiData[0].turn_point) {
                        this.clickChangePan();
                    }
                    ;
                }
            };
            ZhuanPanPage.prototype.getTurneConfig = function () {
                if (!this._turnConfig)
                    this._turnConfig = { "1": [], "2": [] };
                for (var i = 1001; i < 1024; i++) {
                    var curData = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_TURNTABLECONFIG_C, i);
                    if (!curData)
                        continue;
                    if (i <= 1012) {
                        if (this._turnConfig["1"].indexOf(curData) != -1)
                            continue;
                        this._turnConfig["1"].push(curData);
                    }
                    else {
                        if (this._turnConfig["2"].indexOf(curData) != -1)
                            continue;
                        this._turnConfig["2"].push(curData);
                    }
                }
            };
            ZhuanPanPage.prototype.updateTunrPoint = function () {
                var mainPlayer = this._game.sceneGame.sceneObjectMgr.mainPlayer;
                if (!mainPlayer)
                    return;
                this._total_turn_point = mainPlayer.playerInfo.total_turn_point;
                this.updateBoJinPanUI();
                this.updateZuanShiPanUI();
                this.updateText();
            };
            ZhuanPanPage.prototype.onOptHandler = function (optcode, msg) {
                if (msg.type == Operation_Fields.OPRATE_GAME) { //游戏操作错误类型
                    switch (msg.reason) {
                        case Operation_Fields.OPRATE_GAME_SCORE_LUCKY_DRAW: // 开始旋转
                            //旋转
                            var curData = this._turnConfig[this._curSelectIndex];
                            this._finalIndex = Number(msg.data) - 1;
                            var getView = this._curSelectIndex == 2 ? this._viewUI.img_get_bojin : this._viewUI.img_get_zs;
                            getView.alpha = 0;
                            this.startTurn(this._curSelectIndex, this._finalIndex);
                            this._game.playSound(Path.music_zhuanpan);
                            break;
                    }
                }
            };
            ZhuanPanPage.prototype.initClip = function () {
                if (!this._clipNum1) {
                    this._clipNum1 = new DatingClip(DatingClip.TURANBLE_FONT);
                    this._clipNum1.x = this._viewUI.clip_num1.x;
                    this._clipNum1.y = this._viewUI.clip_num1.y;
                    this._viewUI.clip_num1.parent.addChild(this._clipNum1);
                    this._viewUI.clip_num1.removeSelf();
                }
                if (!this._clipNum2) {
                    this._clipNum2 = new DatingClip(DatingClip.TURANBLE_FONT);
                    this._clipNum2.x = this._viewUI.clip_num2.x;
                    this._clipNum2.y = this._viewUI.clip_num2.y;
                    this._viewUI.clip_num2.parent.addChild(this._clipNum2);
                    this._viewUI.clip_num2.removeSelf();
                }
            };
            ZhuanPanPage.prototype.updateBoJinPanUI = function () {
                this._boJinData = this._turnConfig[1];
                var turn_point = this._boJinData[0].turn_point;
                //可转次数
                this._viewUI.lb_bj_times.text = (~~(this._total_turn_point / turn_point)).toString();
                this._viewUI.lb_bj_times.color = this._total_turn_point >= turn_point ? "#0aff00" : "#ff0400";
                if (this._boJinData) {
                    this._viewUI.list_bojin.dataSource = this._boJinData;
                }
            };
            ZhuanPanPage.prototype.updateZuanShiPanUI = function () {
                this._zuanShiData = this._turnConfig[2];
                //可转次数
                var turn_point = this._zuanShiData[0].turn_point;
                this._viewUI.lb_zs_times.text = (~~(this._total_turn_point / turn_point)).toString();
                this._viewUI.lb_zs_times.color = this._total_turn_point >= turn_point ? "#0aff00" : "#ff0400";
                if (this._zuanShiData) {
                    this._viewUI.list_zuanshi.dataSource = this._zuanShiData;
                }
            };
            //转盘动画
            ZhuanPanPage.prototype.playZhuanPanAni = function (upView, downView) {
                var _this = this;
                var flag = downView == this._viewUI.zuanshipan;
                this._curSelectIndex = flag ? 2 : 1;
                //上面盘-下面
                Laya.Tween.to(upView, { x: 584 }, 200, null, Handler.create(this, function () {
                    Laya.Tween.to(upView, { x: 500, alpha: 0, scaleX: 0.8, scaleY: 0.8 }, 200, null, Handler.create(_this, function () {
                        _this._viewUI.ani4.on(LEvent.COMPLETE, _this, _this.ani4Complete, [flag]);
                        Laya.Tween.to(upView, { x: 819, alpha: 1 }, 350, null, Handler.create(_this, function () {
                            _this._isCompleteAniUp = true;
                        }));
                    }));
                }));
                //下面盘->上面
                Laya.Tween.to(downView, { x: 897, scaleX: 1, scaleY: 1, alpha: 0.8 }, 300, null, Handler.create(this, function () {
                    upView.zOrder = 1;
                    downView.zOrder = 2;
                    Laya.Tween.to(downView, { x: 640, scaleX: 1.05, scaleY: 1.05, alpha: 1 }, 300, null, Handler.create(_this, function () {
                        Laya.Tween.to(downView, { scaleX: 1, scaleY: 1 }, 50, null, Handler.create(_this, function () {
                            _this._isCompleteAniDown = true;
                        }));
                    }));
                }));
                //ani4点击放隐藏动画,ani5轮盘到出来
                this._viewUI.ani4.play(0, false);
                //下面盘-上面边框显示，上面盘-下面盘边框隐藏
                var dowmViewBorder;
                var upViewBorder;
                if (downView == this._viewUI.bojinpan) {
                    dowmViewBorder = this._viewUI.box_border_bojin;
                    upViewBorder = this._viewUI.box_zs_border;
                }
                else if (downView == this._viewUI.zuanshipan) {
                    dowmViewBorder = this._viewUI.box_zs_border;
                    upViewBorder = this._viewUI.box_border_bojin;
                }
                Laya.Tween.to(dowmViewBorder, { alpha: 1 }, 650);
                Laya.Tween.to(upViewBorder, { alpha: 0 }, 750);
                this.updateTunrPoint();
            };
            ;
            ZhuanPanPage.prototype.ani4Complete = function (flag) {
                //按钮图片
                this._viewUI.btn_pan_name.skin = DatingPath.ui_dating + "zhuanpan/" + (flag ? "tu_baijin01.png" : "tu_zuanshi01.png");
                this._viewUI.img_pan_di.skin = DatingPath.ui_dating + "zhuanpan/" + (flag ? "tu_bj.png" : "tu_qh.png");
                this._viewUI.btn_pan_name.x = flag ? 69 : 63;
                //按钮显示动画
                this._viewUI.ani5.play(0, false);
                this._viewUI.ani4.off(LEvent.COMPLETE, this, this.ani4Complete);
            };
            ZhuanPanPage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_TURNTABLELIST) { //积分抽奖获奖记录
                    if (data && data.success == 0) {
                        this._rewardRecords = data;
                        this.updateText();
                    }
                }
            };
            ZhuanPanPage.prototype.updateText = function () {
                //积分显示
                this._viewUI.lb_have.text = this._total_turn_point.toString();
                if (this._turnConfig) {
                    var curDatas = this._turnConfig[this._curSelectIndex];
                    if (curDatas) {
                        var turn_point = curDatas[0].turn_point;
                        this._viewUI.lb_have.color = this._total_turn_point >= turn_point ? "#0aff00" : "#ff0400";
                        this._viewUI.lb_total.text = StringU.substitute("/ {0}", curDatas[0] ? curDatas[0].turn_point : 0);
                        this._viewUI.lb_total.x = this._viewUI.lb_have.x + this._viewUI.lb_have.width + 10;
                        this._viewUI.btn_help.x = this._viewUI.lb_total.x + this._viewUI.lb_total.width + 35;
                    }
                }
                this.updateLunBo(true);
            };
            ZhuanPanPage.prototype.updateLunBo = function (isFirst) {
                if (!this._rewardRecords)
                    return;
                var index = this._viewUI.ani1.index;
                var curOtherReward = this._rewardRecords.msg && this._rewardRecords.msg.all ? this._rewardRecords.msg.all.list : [];
                if (!curOtherReward)
                    return;
                var curReward = curOtherReward[MathU.randomRange(0, curOtherReward.length - 1)];
                var name = EnumToString.getLimitStr(curReward.account, 4);
                //轮播文本
                if (index == 75 || isFirst) {
                    this._viewUI.lb_name1.text = StringU.substitute("「{0}」", name);
                    this._clipNum1.setText(curReward.award_value, true);
                }
                else if (index == 30) {
                    curReward = curOtherReward[MathU.randomRange(0, curOtherReward.length - 1)];
                    name = EnumToString.getLimitStr(curReward.account, 4);
                    this._viewUI.lb_name2.text = StringU.substitute("「{0}」", name);
                    this._clipNum2.setText(curReward.award_value, true);
                }
            };
            ZhuanPanPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.box_info1: //轮盘记录
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_ZHUANPAN_RECORD);
                        break;
                    case this._viewUI.box_info2: //轮盘记录
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_ZHUANPAN_RECORD);
                        break;
                    case this._viewUI.btn_go_zuanshi: //钻石盘开始
                        if (!this.judegeTurnCondition(this._zuanShiData))
                            return;
                        this._viewUI.btn_go_zuanshi.disabled = true;
                        this._viewUI.ani12.stop();
                        this._game.network.call_score_lucky_draw(2);
                        break;
                    case this._viewUI.btn_go_bojin: //铂金盘开始
                        if (!this.judegeTurnCondition(this._boJinData))
                            return;
                        this._viewUI.btn_go_bojin.disabled = true;
                        this._viewUI.ani6.stop();
                        this._game.network.call_score_lucky_draw(1);
                        break;
                    case this._viewUI.guanbi:
                        this.close();
                        break;
                    case this._viewUI.bojin_click:
                        this.clickChangePan();
                        break;
                    case this._viewUI.btn_help: //帮助
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_ZHUANPAN_HELP);
                        break;
                }
            };
            ZhuanPanPage.prototype.clickChangePan = function () {
                if (this._isCompleteAniUp && this._isCompleteAniDown) {
                    this._isCompleteAniUp = false;
                    this._isCompleteAniDown = false;
                    var bojinpan = this._viewUI.bojinpan;
                    var zuanshipan = this._viewUI.zuanshipan;
                    if (this._isBoJinUp) {
                        this.playZhuanPanAni(bojinpan, zuanshipan);
                        this._isBoJinUp = false;
                    }
                    else {
                        this.playZhuanPanAni(zuanshipan, bojinpan);
                        this._isBoJinUp = true;
                    }
                }
            };
            ZhuanPanPage.prototype.judegeTurnCondition = function (curData) {
                if (!curData || curData.length <= 0) {
                    return false;
                }
                if (curData[0].turn_point > this._total_turn_point) {
                    this._game.showTips("积分暂时不够哦，赶紧游戏吧！");
                    return false;
                }
                return true;
            };
            ZhuanPanPage.prototype.startTurn = function (type, index) {
                var _this = this;
                var viewRunBox;
                var curData;
                var getView;
                var aniBorder;
                var aniGet;
                var aniGo;
                var imgGet;
                var img_effect;
                switch (type) {
                    case 1:
                        viewRunBox = this._viewUI.box_run_bojin;
                        curData = this._boJinData;
                        getView = this._viewUI.img_get_bojin;
                        aniBorder = this._viewUI.ani8;
                        aniGet = this._viewUI.ani10;
                        imgGet = this._viewUI.img_get_bojin;
                        aniGo = this._viewUI.ani6;
                        img_effect = this._viewUI.img_effect_bojin;
                        break;
                    case 2:
                        viewRunBox = this._viewUI.box_run_zuanshi;
                        curData = this._zuanShiData;
                        getView = this._viewUI.img_get_zs;
                        aniBorder = this._viewUI.ani9;
                        aniGet = this._viewUI.ani11;
                        imgGet = this._viewUI.img_get_zs;
                        aniGo = this._viewUI.ani12;
                        img_effect = this._viewUI.img_effect_zs;
                        break;
                }
                //开始转
                var r = MathU.randomRange(3, 6);
                var curRotation = viewRunBox.rotation;
                //圈数
                var rotation = curRotation + ((360 - curRotation) + (360 - (360 / this._gridNum * index)) + 360 * r);
                var time = r * 1200;
                //转动动画控制
                Laya.timer.once(this._effectStartTime, this, function () {
                    img_effect.alpha = 1;
                    aniBorder.play(0, true);
                    Laya.timer.once(time - _this._effectStartTime - _this._effectEndTime, _this, function () {
                        aniBorder.stop();
                        img_effect.alpha = 0;
                    });
                });
                //时间
                Laya.Tween.to(viewRunBox, { rotation: rotation }, time, Laya.Ease.strongInOut, Handler.create(this, this.completeTurnAni, [viewRunBox, aniGo, imgGet, aniGet, curData, index, getView]));
            };
            ZhuanPanPage.prototype.completeTurnAni = function (viewRunBox, aniGo, imgGet, aniGet, curData, index, getView) {
                aniGo.play(0, true);
                imgGet.alpha = 1;
                aniGet.play(0, false);
                this._viewUI.btn_go_zuanshi.disabled = false;
                this._viewUI.btn_go_bojin.disabled = false;
                var data = curData[index];
                viewRunBox.rotation = viewRunBox.rotation % 360;
                getView.alpha = 1;
                this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_GET_REWARD, function (page) {
                    var icon = data.award_icon;
                    var skin = StringU.substitute(DatingPath.ui_dating_tongyong + "{0}.png", icon);
                    page.setData(data.award_value, skin);
                });
            };
            ZhuanPanPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                    this._game.stopSound(Path.music_zhuanpan);
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.updateTunrPoint);
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                }
                _super.prototype.close.call(this);
            };
            return ZhuanPanPage;
        }(game.gui.base.Page));
        page_1.ZhuanPanPage = ZhuanPanPage;
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=ZhuanPanPage.js.map