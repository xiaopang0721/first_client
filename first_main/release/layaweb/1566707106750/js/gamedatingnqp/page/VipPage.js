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
* name vip
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page_1) {
        var VipPage = /** @class */ (function (_super) {
            __extends(VipPage, _super);
            function VipPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._vipList = [];
                _this._asset = [
                    DatingPath.atlas_dating_ui + "vip.atlas",
                ];
                _this._isNeedDuang = true;
                _this._isNeedBlack = true;
                _this._isClickBlack = true;
                return _this;
            }
            // 页面初始化函数
            VipPage.prototype.init = function () {
                this._viewUI = this.createView("dating.VIPUI");
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            VipPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this.initClip();
                if (!this._avatar) {
                    this._avatar = new AvatarUIShow();
                    this._viewUI.box_sk.addChild(this._avatar);
                }
                this._avatar.loadSkeleton(DatingPath.sk_dating + "vip", this._viewUI.box_sk.width / 2 - 10, this._viewUI.box_sk.height / 2 - 10);
                gamedatingnqp.DatingGame.ins.vipMgr.on(VipMgr.EVENT_VIP_CHANGE, this, this.onVipUpdate);
                this._viewUI.btn_close.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_left.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_right.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_lingqu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdateJinDu);
                this.getVipData();
            };
            VipPage.prototype.update = function (diff) {
                if (this._avatar) {
                    this._avatar.onDraw();
                }
            };
            VipPage.prototype.getVipData = function () {
                this._vipList;
                for (var i = 1; i < 11; i++) {
                    this._vipList.push(FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_VIPLVCONFIG_C, i));
                }
                this.onUpdateJinDu();
            };
            VipPage.prototype.onOptHandler = function (optcode, msg) {
                if (msg.type == Operation_Fields.OPRATE_GAME) { //游戏操作错误类型
                    switch (msg.reason) {
                        case Operation_Fields.OPRATE_GAME_VIP_LEVEL_AWARD: // 领取成功
                            this._game.showTips("奖励领取成功哦~");
                            this.onUpdateJinDu();
                            break;
                    }
                }
            };
            VipPage.prototype.initClip = function () {
                if (!this._jinDuNum) {
                    this._jinDuNum = new DatingClip(DatingClip.VIP_FONT);
                    this._jinDuNum.centerX = this._viewUI.clip_jindu.centerX;
                    this._jinDuNum.centerY = this._viewUI.clip_jindu.centerX;
                    this._viewUI.clip_jindu.parent.addChild(this._jinDuNum);
                    this._viewUI.clip_jindu.removeSelf();
                }
                if (!this._lvNum) {
                    this._lvNum = new DatingClip(DatingClip.VIP_FONT0);
                    this._lvNum.centerX = this._viewUI.clip_Lv.centerX;
                    this._lvNum.centerY = this._viewUI.clip_Lv.centerY;
                    this._viewUI.clip_Lv.parent.addChild(this._lvNum);
                    this._viewUI.clip_Lv.removeSelf();
                }
                if (!this._rewardNum) {
                    this._rewardNum = new DatingClip(DatingClip.VIP_FONT0);
                    this._rewardNum.centerX = this._viewUI.clip_Num.centerX;
                    this._rewardNum.centerY = this._viewUI.clip_Num.centerY;
                    this._viewUI.clip_Num.parent.addChild(this._rewardNum);
                    this._viewUI.clip_Num.removeSelf();
                }
            };
            VipPage.prototype.onVipUpdate = function (type) {
                if (type == VipMgr.TYPE_VIP_LEVEL_CHANGE) { //vip等级变更
                    this.onUpdateJinDu();
                }
                else if (type == VipMgr.TYPE_VIP_RECHARGE_CHANGE) { //累充金额变更
                    this.onUpdateJinDu();
                }
                else if (type == VipMgr.TYPE_VIP_RECEIVED_CHANGE) { //vip奖励领取标识变更
                    this.onUpdateJinDu();
                }
            };
            VipPage.prototype.onSucessHandler = function (data) {
                // if (data.code == Web_operation_fields.CLIENT_IRCODE_PLAYERLVLIST) {//获取vip等级列表
                //     if (data && data.success == 0) {
                //         if (data.msg.list && data.msg.list.length > 0) {
                //             this._vipList = data.msg.list.splice(0, 10);
                //             this.onUpdateJinDu();
                //         }
                //     }
                // }
                if (data.code == Web_operation_fields.CLIENT_IRCODE_PLAYERLVAWARE) { //领取vip等级奖励
                    if (data && data.success == 0) {
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_GET_REWARD, function (page) {
                            page.setData(gamedatingnqp.DatingGame.ins.vipMgr.award, DatingPath.ui_dating_tongyong + "jb_2.png");
                        });
                    }
                }
            };
            VipPage.prototype.onUpdateJinDu = function () {
                var mainPlayer = this._game.sceneGame.sceneObjectMgr.mainPlayer;
                if (!mainPlayer)
                    return;
                if (!this._vipList || !this._vipList.length)
                    return;
                var playerInfo = mainPlayer.playerInfo;
                this._curVipLv = playerInfo.vip_level;
                var index = this._curVipLv > 9 ? 9 : playerInfo.vip_level;
                var nextLeiChong = this._vipList[index].min_gems;
                if (this._curVipLv > 9) {
                    this._viewUI.box_jd.visible = false;
                    this._viewUI.lb_max.visible = true;
                }
                else {
                    this._viewUI.box_jd.visible = true;
                    this._viewUI.lb_max.visible = false;
                }
                this._viewUI.vip_cur.skin = StringU.substitute(DatingPath.ui_dating + "vip/tu_vip{0}.png", this._curVipLv);
                this._viewUI.vip_next.skin = StringU.substitute(DatingPath.ui_dating + "vip/tu_vip{0}.png", playerInfo.vip_level + 1 > 10 ? 11 : this._curVipLv + 1);
                this._viewUI.bar_jindu.value = playerInfo.total_recharge / nextLeiChong ? playerInfo.total_recharge / nextLeiChong : 0;
                var zaiChong = nextLeiChong - playerInfo.total_recharge < 0 ? 0 : nextLeiChong - playerInfo.total_recharge;
                this._jinDuNum.setText(zaiChong, true);
                this._viewUI.img_tx1.centerX = this._jinDuNum.centerX - this._jinDuNum.width / 2 - 20;
                this._viewUI.img_tx2.centerX = this._jinDuNum.centerX + this._jinDuNum.width / 2 + 55;
                //传的是当前未领取的标志
                var inNoGetLv = this._game.datingGame.vipMgr.checkVipReceivedIndex();
                this._switchIndex = inNoGetLv;
                this.updateSwitchUI(inNoGetLv);
            };
            VipPage.prototype.switchLR = function (isLeft) {
                if (isLeft === void 0) { isLeft = true; }
                //左右切换内容
                var lv;
                if (this._switchIndex != 0 && !this._switchIndex)
                    this._switchIndex = this._curVipLv;
                lv = this._switchIndex;
                if (isLeft) {
                    lv -= 1;
                    lv = lv < 0 ? 0 : lv;
                }
                else {
                    lv += 1;
                    lv = lv >= 10 ? 10 : lv;
                }
                this._switchIndex = lv;
                this.updateSwitchUI(lv);
            };
            VipPage.prototype.updateSwitchUI = function (lv) {
                var index = lv >= 10 ? 9 : lv; //满级
                var curLvData = this._vipList[index];
                if (!curLvData)
                    return;
                this._lvNum.setText(curLvData.lv, true);
                if (curLvData.aware)
                    this._rewardNum.setText(curLvData.aware, true);
                this._viewUI.img_yuan.x = this._rewardNum.x + this._rewardNum.width + 5;
                //更换奖励
                this._viewUI.img_txk.skin = StringU.substitute(DatingPath.ui_dating + "touxiang/tu_txk{0}.png", curLvData.lv);
                this._viewUI.img_tx.skin = StringU.substitute(DatingPath.ui_dating + "touxiang/tu_tx{0}.png", curLvData.lv);
                this._viewUI.box_hd.visible = false;
                this._viewUI.box_lq.visible = false;
                //先判断等级，在判断是否获得奖励
                this._viewUI.btn_lingqu.disabled = false;
                if (this._curVipLv < curLvData.lv) {
                    //立即获得
                    this._viewUI.box_hd.visible = true;
                    this._viewUI.btn_lingqu.tag = 1;
                }
                else {
                    //领取
                    this._viewUI.box_lq.visible = true;
                    this._viewUI.btn_lingqu.tag = 2;
                    var mainPlayer = this._game.sceneGame.sceneObjectMgr.mainPlayer;
                    if (!mainPlayer)
                        return;
                    var isGet = mainPlayer.GetVipAwardReceived(curLvData.lv - 1);
                    if (isGet) {
                        //获得奖励了
                        this._viewUI.btn_lingqu.disabled = true;
                        //换成已领取标志
                    }
                }
            };
            VipPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_close: //关闭
                        this.close();
                        break;
                    case this._viewUI.btn_lingqu:
                        var tag = this._viewUI.btn_lingqu.tag;
                        if (tag == 1) {
                            //立即获得
                            this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_CHONGZHI);
                        }
                        else {
                            //领取
                            if (this._game) {
                                var curData = this._vipList[this._switchIndex];
                                if (curData) {
                                    this._game.network.call_receive_vip_award(curData.lv);
                                    gamedatingnqp.DatingGame.ins.vipMgr.award = curData.aware;
                                }
                            }
                            break;
                        }
                    case this._viewUI.btn_right:
                        this.switchLR(false);
                        break;
                    case this._viewUI.btn_left:
                        this.switchLR();
                        break;
                }
            };
            VipPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdateJinDu);
                    gamedatingnqp.DatingGame.ins.vipMgr.off(VipMgr.EVENT_VIP_CHANGE, this, this.onVipUpdate);
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                    this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                    this._viewUI.btn_close.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_left.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_right.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_lingqu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                }
                if (this._avatar) {
                    this._avatar.clear();
                    this._avatar.destroy();
                    this._avatar = null;
                }
                if (this._jinDuNum) {
                    this._jinDuNum.removeSelf();
                    this._jinDuNum.destroy();
                    this._jinDuNum = null;
                }
                if (this._lvNum) {
                    this._lvNum.removeSelf();
                    this._lvNum.destroy();
                    this._lvNum = null;
                }
                if (this._rewardNum) {
                    this._rewardNum.removeSelf();
                    this._rewardNum.destroy();
                    this._rewardNum = null;
                }
                _super.prototype.close.call(this);
            };
            return VipPage;
        }(game.gui.base.Page));
        page_1.VipPage = VipPage;
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=VipPage.js.map