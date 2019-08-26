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
* name 个人信息
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page_1) {
        var GeRenXinXiPage = /** @class */ (function (_super) {
            __extends(GeRenXinXiPage, _super);
            function GeRenXinXiPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                //===================个人信息=================
                //更新个人信息下面按钮位置
                _this._box_btn_bottom = {};
                _this._timeList = [];
                _this._isSoundClick = false;
                _this._isMusicCLick = false;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "geren.atlas",
                ];
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                return _this;
            }
            // 页面初始化函数
            GeRenXinXiPage.prototype.init = function () {
                this._viewUI = this.createView("dating.GeRenUI", ["dating.SheZhiUI"]);
                this.addChild(this._viewUI);
                this._viewUI.box_app.visible = WebConfig.appVersion;
                this._viewUI.txt_appbbh.text = WebConfig.appVersion;
                this._viewUI.box_v.visible = Vesion["_defaultVesion"];
                this._viewUI.txt_bbh.text = Vesion["_defaultVesion"];
                this._viewUI.btn_clear.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_change.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set_psd.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_check.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                if (WebConfig.gameGmOpen) {
                    if (!this._gmTxt) {
                        this._gmTxt = new Laya.Label();
                        this._gmTxt.fontSize = 14;
                        this._gmTxt.align = "center";
                        this._gmTxt.bold = true;
                        this._gmTxt.color = "#00ff47";
                        this._gmTxt.text = "点我变魔术";
                        this._gmTxt.left = this._gmTxt.top = 20;
                        this.addChild(this._gmTxt);
                        this._gmTxt.on(LEvent.CLICK, this, this.onMouseGMHandle);
                    }
                }
                else {
                    if (this._gmTxt) {
                        this._gmTxt.removeSelf();
                        this._gmTxt.destroy();
                        this._gmTxt = null;
                    }
                }
            };
            GeRenXinXiPage.prototype.onMouseGMHandle = function () {
                var page = this._game.uiRoot.top.getPage(page_1.DatingPageDef.PAGE_GM);
                if (!page)
                    this._game.uiRoot.top.open(page_1.DatingPageDef.PAGE_GM);
            };
            // 页面打开时执行函数
            GeRenXinXiPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this.initVolume();
                this.initBaoBiaoUI();
                this._viewUI.tab.selectHandler = new Handler(this, this.selectHandler);
                this._viewUI.tab.selectedIndex = this._dataSource || 0;
                this._viewUI.btn_bindwx.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_bind_phone.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_copy.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_changge_nc.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_head.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_recharge.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_select.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_sound.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_music.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                gamedatingnqp.DatingGame.ins.baobiaoMgr.on(BaoBiaoMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);
                this.onUpdateDataInfo();
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this.onUpdatePlayerInfo();
            };
            GeRenXinXiPage.prototype.updatePos = function () {
                var childNum = this._viewUI.box_items.numChildren;
                var total_y = 0;
                for (var index = 0; index < childNum; index++) {
                    var item = void 0;
                    if (!this._box_btn_bottom[index]) //缓存下
                     {
                        this._box_btn_bottom[index] = this._viewUI.box_items.getChildByName("item" + index);
                    }
                    item = this._box_btn_bottom[index];
                    if (!item || !item.visible)
                        continue;
                    item.y = total_y;
                    total_y += item.height + 2;
                }
            };
            //上面信息
            // private _qifuNameStr: string[] = ["xs", "px", "gsy", "gg", "cs", "tdg"];
            GeRenXinXiPage.prototype.onUpdatePlayerInfo = function () {
                var mainPlayer = this._game.sceneGame.sceneObjectMgr.mainPlayer;
                if (!mainPlayer)
                    return;
                var playerInfo = mainPlayer.playerInfo;
                if (!playerInfo)
                    return;
                this._viewUI.img_head.skin = DatingPath.ui_dating + "touxiang/tu_tx" + playerInfo.headimg + ".png";
                this._viewUI.img_txk.skin = DatingPath.ui_dating + "touxiang/tu_txk" + playerInfo.headKuang + ".png";
                // if (playerInfo.qifu_type > 0 && playerInfo.qifu_endtime > this._game.sceneGame.sync.serverTimeBys) {
                // 	this._viewUI.img_head.skin = DatingPath.ui_dating + "touxiang/head_" + this._qifuNameStr[playerInfo.qifu_type - 1] + ".png";
                // }
                this._viewUI.lb_vip.text = StringU.substitute("vip {0}", playerInfo.vip_level);
                this._viewUI.txt_id.text = playerInfo.userid;
                this._viewUI.txt_money.text = playerInfo.money;
                this._viewUI.txt_nickname.text = playerInfo.nickname;
                this._viewUI.btn_changge_nc.visible = !playerInfo.isNicknameChanged;
                // this._viewUI.box_wx.visible = !WebConfig.isSingleEnter && playerInfo.is_wx_open;			
                if (playerInfo.wx_unionid) { //绑定微信
                    this._viewUI.txt_wx.text = playerInfo.wx_unionid;
                    this._viewUI.btn_bindwx.visible = false;
                }
                else {
                    this._viewUI.txt_wx.text = "未绑定微信号";
                    this._viewUI.btn_bindwx.visible = true;
                }
                if (playerInfo.mobile) { //绑定手机
                    this._viewUI.txt_phone.text = playerInfo.mobile;
                    this._viewUI.btn_bind_phone.visible = false;
                }
                else {
                    this._viewUI.txt_phone.text = "未绑定手机号";
                    this._viewUI.btn_bind_phone.visible = true;
                }
                // this._viewUI.img_txk.visible = playerInfo.vip_level > 0;
                // if (playerInfo.vip_level > 0) {
                // 	this._viewUI.img_txk.skin = DatingPath.ui_dating + "touxiang/tu_v" + playerInfo.vip_level + ".png";
                // }
                this.updatePos();
            };
            //===================收支报表===================
            GeRenXinXiPage.prototype.initBaoBiaoUI = function () {
                this._viewUI.box_btn.visible = false;
                this._viewUI.list_bb.visible = false;
                this._viewUI.txt_no.visible = false;
                this.initList();
                this._selectTime = this._game.sceneGame.sync.serverTimeBys;
                this._timeSelectIndex = 6;
                var curSelectedTimeStr = Sync.getTimeStr3(this._selectTime);
                for (var i = 0; i < 7; i++) {
                    this._timeList[i] = this._selectTime - 86400 * (6 - i);
                    var curTimeStr = Sync.getTimeStr3(this._timeList[i]);
                    this._viewUI["lb_" + i].text = curTimeStr;
                    if (curSelectedTimeStr == curTimeStr)
                        this._viewUI["btn_select" + i].selected = true;
                    else
                        this._viewUI["btn_select" + i].selected = false;
                    this._viewUI["btn_" + i].on(LEvent.CLICK, this, this.onMouseHandle, [i]);
                }
                this._viewUI.lb_time.text = curSelectedTimeStr;
            };
            GeRenXinXiPage.prototype.initList = function () {
                this._viewUI.list_bb.vScrollBarSkin = "";
                this._viewUI.list_bb.scrollBar.elasticDistance = 100;
                this._viewUI.list_bb.renderHandler = new Handler(this, this.renderHandler);
            };
            GeRenXinXiPage.prototype.renderHandler = function (cell, index) {
                var data = this._dataInfo[index];
                if (cell) {
                    cell.txt_index.text = data.rank + 1;
                    // this.img_bg.skin = StringU.substitute(DatingPath.ui_dating_tongyong + "tu_bb{0}.png", data.rank % 2 == 0 ? 1 : 2)
                    cell.txt_type.text = data.game_name + Web_operation_fields.client_money_logtype_table[data.type];
                    cell.txt_time.text = Sync.getTimeShortStr(data.time * 1000);
                    cell.txt_money.text = data.shouzhi.toString();
                    cell.txt_money.color = data.shouzhi > 0 ? "#41fe69" : "#ff0000";
                    cell.txt_earn.text = data.money.toString();
                    var page_2 = Math.floor((index + 10) / BaoBiaoMgr.PAGE_MAX) + 1;
                    if (!gamedatingnqp.DatingGame.ins.baobiaoMgr.getDataInfo(this._timeSelectIndex)[page_2]) {
                        if (gamedatingnqp.DatingGame.ins.baobiaoMgr.getDataInfo(this._timeSelectIndex)[page_2 - 1] && gamedatingnqp.DatingGame.ins.baobiaoMgr.getDataInfo(this._timeSelectIndex)[page_2 - 1].length >= BaoBiaoMgr.PAGE_MAX) {
                            gamedatingnqp.DatingGame.ins.baobiaoMgr.getDataInfo(this._timeSelectIndex)[page_2] = {};
                            if (index - this._lastIndex < BaoBiaoMgr.PAGE_MAX * 0.5)
                                return;
                            this._lastIndex = index;
                            gamedatingnqp.DatingGame.ins.baobiaoMgr.getData(page_2, this._selectTime, this._timeSelectIndex);
                        }
                    }
                }
            };
            GeRenXinXiPage.prototype.onMouseHandle = function (index, e) {
                if (index == this._timeSelectIndex)
                    return;
                this._viewUI.list_bb.scrollTo(0);
                this._lastIndex = 0;
                this._timeSelectIndex = index;
                this._selectTime = this._timeList[index]; //选择的时间
                var curSelectedTimeStr = Sync.getTimeStr3(this._selectTime);
                this._viewUI.lb_time.text = curSelectedTimeStr;
                for (var i = 0; i < 7; i++) {
                    var curTimeStr = this._viewUI["lb_" + i].text;
                    if (curSelectedTimeStr == curTimeStr)
                        this._viewUI["btn_select" + i].selected = true;
                    else
                        this._viewUI["btn_select" + i].selected = false;
                }
                this.updateBoxBtnStatus();
                this.onUpdateDataInfo();
            };
            GeRenXinXiPage.prototype.updateBoxBtnStatus = function () {
                this._viewUI.box_btn.visible = false;
            };
            GeRenXinXiPage.prototype.onUpdateDataInfo = function (data) {
                this._dataInfo = [];
                var value = gamedatingnqp.DatingGame.ins.baobiaoMgr.getDataInfo(this._timeSelectIndex);
                var count = 0;
                for (var key in value) {
                    if (value[key] && value[key].length > 0)
                        count++;
                }
                this._viewUI.txt_no.visible = !count;
                this._viewUI.list_bb.visible = count > 0;
                if (!count) {
                    !data && gamedatingnqp.DatingGame.ins.baobiaoMgr.getData(1, this._selectTime, this._timeSelectIndex);
                    return;
                }
                for (var key in value) {
                    if (value.hasOwnProperty(key)) {
                        var cc = value[key];
                        if (cc) {
                            for (var index = 0; index < cc.length; index++) {
                                var aa = cc[index];
                                aa["rank"] = index + parseInt(key) * BaoBiaoMgr.PAGE_MAX - BaoBiaoMgr.PAGE_MAX;
                            }
                            this._dataInfo = this._dataInfo.concat(cc);
                        }
                    }
                }
                this._viewUI.list_bb.dataSource = this._dataInfo;
            };
            //===================游戏设置==================
            //初始化聲音界面
            GeRenXinXiPage.prototype.initVolume = function () {
                this._viewUI.hslider0.min = 0; //设置 this.hslider0 最低位置值。
                this._viewUI.hslider0.max = 1; //设置 this.hslider0 最高位置值。
                this._viewUI.hslider0.tick = 0.1; //设置 this.hslider0 刻度值。
                this._viewUI.hslider0.changeHandler = new Handler(this, this.onChange0); //设置 this.hslider0 位置变化处理器。
                this._viewUI.hslider0.value = Laya.SoundManager.soundVolume; //设置 this.hslider0 当前位置值。
                this._viewUI.hslider1.min = 0; //设置 this.hslider0 最低位置值。
                this._viewUI.hslider1.max = 1; //设置 this.hslider0 最高位置值。
                this._viewUI.hslider1.tick = 0.1; //设置 this.hslider0 刻度值。
                this._viewUI.hslider1.changeHandler = new Handler(this, this.onChange1); //设置 this.hslider0 位置变化处理器。
                this._viewUI.hslider1.value = Laya.SoundManager.musicVolume; //设置 this.hslider0 当前位置值。
            };
            GeRenXinXiPage.prototype.update = function (diff) {
                if (!this._isSoundClick)
                    this._viewUI.btn_sound.disabled = false;
                if (!this._isMusicCLick)
                    this._viewUI.btn_music.disabled = false;
            };
            GeRenXinXiPage.prototype.onChange0 = function (value) {
                if (value > 0) {
                    this._viewUI.btn_sound.selected = true;
                }
                else {
                    this._viewUI.btn_sound.selected = false;
                }
                Laya.SoundManager.setSoundVolume(value);
                localSetItem("soundVolume", value.toString());
                this._isSoundClick = false;
            };
            GeRenXinXiPage.prototype.onChange1 = function (value) {
                if (value > 0) {
                    this._viewUI.btn_music.selected = true;
                }
                else {
                    this._viewUI.btn_music.selected = false;
                }
                Laya.SoundManager.setMusicVolume(value);
                localSetItem("musicVolume", value.toString());
            };
            GeRenXinXiPage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_CHANGEDDRAWPWD) {
                    if (data && data.success == 0) {
                        this._inputNewKey.clearInput();
                        this._inputOldKey.clearInput();
                        this._inputQueRenNewKey.clearInput();
                        this._game.showTips("修改密码成功");
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_CHANGEPWD) {
                    if (data && data.success == 0) {
                        this._inputNewKey.clearInput();
                        this._inputOldKey.clearInput();
                        this._inputQueRenNewKey.clearInput();
                        this._game.showTips("修改密码成功");
                    }
                }
            };
            Object.defineProperty(GeRenXinXiPage.prototype, "dataSource", {
                set: function (v) {
                    this._dataSource = v;
                },
                enumerable: true,
                configurable: true
            });
            GeRenXinXiPage.prototype.selectHandler = function (index) {
                this._viewUI.box0.visible = index == 0;
                this._viewUI.box1.visible = index == 1;
                this._viewUI.box2.visible = index == 2;
            };
            GeRenXinXiPage.prototype.onBtnTweenEnd = function (e, target) {
                var _this = this;
                switch (target) {
                    case this._viewUI.btn_clear: //清理缓存
                        this._game.alert("清理缓存将删除本地数据对此造成的损失，本平台将不承担任何责任。为了您的虚拟财产安全,我们强烈建议您先绑定帐号信息!\n是否清除缓存？", function () {
                            localClear();
                            _this._game.showTips("清理缓存成功!");
                        }, null, false);
                        break;
                    case this._viewUI.btn_change: //切换账号
                        this._game.sceneGame.clear("SettingPage change", true);
                        localRemoveItem("session_key");
                        gamedatingnqp.DatingGame.ins.openLoginPage();
                        this._game.uiRoot.closeAll([page_1.DatingPageDef.PAGE_LOGIN]);
                        break;
                    case this._viewUI.btn_set_psd: //设置密码
                        if (WebConfig.info.isguest || !WebConfig.info.mobile) { //游客要先绑定手机
                            this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDPHONE, function (page) {
                                page.dataSource = 3; //绑定手机类型
                            });
                        }
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDPHONE, function (page) {
                            page.dataSource = page_1.LoginBindPage.TYPE_RESET_PASSWORD; //设置密码类型
                        });
                        break;
                    case this._viewUI.btn_check: //检查更新
                        this._game.datingGame.checkClientVesion(true);
                        break;
                    case this._viewUI.btn_copy: //复制
                        WebConfig.copyTxt(this._viewUI.txt_id.text);
                        this._game.showTips("复制成功");
                        break;
                    case this._viewUI.btn_changge_nc: //修改昵称
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_GENGGAINC);
                        break;
                    case this._viewUI.btn_head: //头像
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_CHANGGE_HEAD);
                        break;
                    case this._viewUI.btn_recharge: //打開充值界面
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_CHONGZHI);
                        break;
                    case this._viewUI.btn_sound: //開關音效
                        if (!this._isSoundClick) {
                            this._isSoundClick = true;
                            this._viewUI.btn_sound.disabled = true;
                            if (this._viewUI.btn_sound.selected) {
                                this._viewUI.hslider0.value = Number(localGetItem("soundVolumeSelf"));
                            }
                            else {
                                //记录当前的音量
                                localSetItem("soundVolumeSelf", localGetItem("soundVolume"));
                                this._viewUI.hslider0.value = 0;
                            }
                        }
                        break;
                    case this._viewUI.btn_music: //開關背景音樂
                        if (!this._isMusicCLick) {
                            this._isMusicCLick = true;
                            this._viewUI.btn_music.disabled = true;
                            if (this._viewUI.btn_music.selected) {
                                this._viewUI.hslider1.value = Number(localGetItem("musicVolumeSelf"));
                                ;
                            }
                            else {
                                localSetItem("musicVolumeSelf", localGetItem("musicVolume"));
                                this._viewUI.hslider1.value = 0;
                            }
                        }
                        break;
                    case this._viewUI.btn_bindwx: //绑定微信
                        this._game.datingGame.wxLogin(true);
                        break;
                    case this._viewUI.btn_bind_phone: //绑定手机
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDPHONE, function (page) {
                            page.dataSource = 3; //绑定手机类型
                        });
                        break;
                    case this._viewUI.btn_select:
                        this._viewUI.box_btn.visible = !this._viewUI.box_btn.visible;
                        this._viewUI.btn_jiantou.rotation = this._viewUI.box_btn.visible ? -180 : 0;
                        // for (let index = 0; index < 7; index++) {
                        // 	let target = index == 6 ? this._viewUI.btn_select : this._viewUI["btn_" + (index + 1)];
                        // 	Laya.Tween.from(this._viewUI["btn_" + index], { y: target.y }, 200, null, null, (6 - index) * 200);
                        // }
                        break;
                    case this._inputCode:
                        this.openJianPan(this._inputCode, this._viewUI, -65);
                        break;
                    case this._inputKey:
                        this.openJianPan(this._inputKey, this._viewUI, -65);
                        break;
                    case this._inputKey1:
                        this.openJianPan(this._inputKey1, this._viewUI, -65);
                        break;
                    case this._inputOldKey:
                        this.openJianPan(this._inputOldKey, this._viewUI, -60);
                        break;
                    case this._inputNewKey:
                        this.openJianPan(this._inputNewKey, this._viewUI, -60);
                        break;
                    case this._inputQueRenNewKey:
                        this.openJianPan(this._inputQueRenNewKey, this._viewUI, -60);
                        break;
                }
            };
            GeRenXinXiPage.prototype.openJianPan = function (textUI, viewUI, centerY) {
                gamedatingnqp.DatingGame.ins.jianPanMgr.openJianPan(textUI, viewUI, centerY);
            };
            GeRenXinXiPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_clear.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_check.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_change.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_set_psd.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    if (this._gmTxt) {
                        this._gmTxt.removeSelf();
                        this._gmTxt.destroy();
                        this._gmTxt = null;
                    }
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                }
                _super.prototype.close.call(this);
            };
            GeRenXinXiPage.TYPE_SHEZHI = 4;
            return GeRenXinXiPage;
        }(game.gui.base.Page));
        page_1.GeRenXinXiPage = GeRenXinXiPage;
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=GeRenXinXiPage.js.map