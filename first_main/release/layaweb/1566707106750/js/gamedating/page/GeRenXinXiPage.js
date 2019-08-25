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
var gamedating;
(function (gamedating) {
    var page;
    (function (page_1) {
        var GeRenXinXiPage = /** @class */ (function (_super) {
            __extends(GeRenXinXiPage, _super);
            function GeRenXinXiPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._box_btn_bottom = {};
                _this._qifuNameStr = ["xs", "px", "gsy", "gg", "cs", "tdg"];
                _this._asset = [
                    DatingPath.atlas_dating_ui + "geren.atlas",
                    DatingPath.atlas_dating_ui + "touxiang.atlas",
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
                this._viewUI.btn_clear.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_change.on(LEvent.CLICK, this, this.onBtnClickWithTween);
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
                //以下特殊处理
                if (WebConfig.isSingleEnter) {
                    this._viewUI.box_wx.visible = false;
                    // this._viewUI.box_mobile.visible = false;
                    var item1 = this._viewUI.tab._childs[1];
                    item1.visible = false;
                    var item2 = this._viewUI.tab._childs[2];
                    item2.visible = false;
                }
                else {
                    if (!this._inputCode) {
                        this._inputCode = new page_1.MyTextInput();
                        this._inputCode.x = this._viewUI.txt_code.x;
                        this._inputCode.y = this._viewUI.txt_code.y + 5;
                        this._inputCode.width = this._viewUI.txt_code.width;
                        this._viewUI.txt_code.parent.addChild(this._inputCode);
                        this._viewUI.txt_code.removeSelf();
                    }
                    if (!this._inputKey) {
                        this._inputKey = new page_1.MyTextInput();
                        this._inputKey.x = this._viewUI.txt_mima.x;
                        this._inputKey.y = this._viewUI.txt_mima.y + 5;
                        this._inputKey.width = this._viewUI.txt_mima.width;
                        this._viewUI.txt_mima.parent.addChild(this._inputKey);
                        this._viewUI.txt_mima.removeSelf();
                    }
                    if (!this._inputKey1) {
                        this._inputKey1 = new page_1.MyTextInput();
                        this._inputKey1.x = this._viewUI.txt_mima2.x;
                        this._inputKey1.y = this._viewUI.txt_mima2.y + 5;
                        this._inputKey1.width = this._viewUI.txt_mima2.width;
                        this._viewUI.txt_mima2.parent.addChild(this._inputKey1);
                        this._viewUI.txt_mima2.removeSelf();
                    }
                }
                if (!this._inputOldKey) {
                    this._inputOldKey = new page_1.MyTextInput();
                    this._inputOldKey.x = this._viewUI.input_jmm.x;
                    this._inputOldKey.y = this._viewUI.input_jmm.y + 5;
                    this._inputOldKey.width = this._viewUI.input_jmm.width;
                    this._viewUI.input_jmm.parent.addChild(this._inputOldKey);
                    this._viewUI.input_jmm.removeSelf();
                }
                if (!this._inputNewKey) {
                    this._inputNewKey = new page_1.MyTextInput();
                    this._inputNewKey.x = this._viewUI.input_xmm.x;
                    this._inputNewKey.y = this._viewUI.input_xmm.y + 5;
                    this._inputNewKey.width = this._viewUI.input_xmm.width;
                    this._viewUI.input_xmm.parent.addChild(this._inputNewKey);
                    this._viewUI.input_xmm.removeSelf();
                }
                if (!this._inputQueRenNewKey) {
                    this._inputQueRenNewKey = new page_1.MyTextInput();
                    this._inputQueRenNewKey.x = this._viewUI.input_qxmm.x;
                    this._inputQueRenNewKey.y = this._viewUI.input_qxmm.y + 5;
                    this._inputQueRenNewKey.width = this._viewUI.input_qxmm.width;
                    this._viewUI.input_qxmm.parent.addChild(this._inputQueRenNewKey);
                    this._viewUI.input_qxmm.removeSelf();
                }
                this._promptColor = WebConfig.baseplatform == page_1.DatingPageDef.BASE_PLATFORM_TYPE_DZQP ? "#777777" : "#444444";
                this._inputColor = WebConfig.baseplatform == page_1.DatingPageDef.BASE_PLATFORM_TYPE_DZQP ? "#f8ea5e" : "#ffffff";
                this.updateTabPos();
            };
            GeRenXinXiPage.prototype.updateTabPos = function () {
                var total = this._viewUI.tab._childs[0].y;
                for (var index = 0; index < this._viewUI.tab.numChildren; index++) {
                    var btn = this._viewUI.tab._childs[index];
                    if (!btn || !btn.visible)
                        continue;
                    btn.y = total;
                    total += btn.height + 4;
                }
            };
            // 页面打开时执行函数
            GeRenXinXiPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.hslider0.min = 0; //设置 this.hslider0 最低位置值。
                this._viewUI.hslider0.max = 1; //设置 this.hslider0 最高位置值。
                this._viewUI.hslider0.tick = 0.1; //设置 this.hslider0 刻度值。
                this._viewUI.hslider0.value = Laya.SoundManager.soundVolume; //设置 this.hslider0 当前位置值。
                this._viewUI.hslider0.changeHandler = new Handler(this, this.onChange0); //设置 this.hslider0 位置变化处理器。
                this._viewUI.hslider1.min = 0; //设置 this.hslider0 最低位置值。
                this._viewUI.hslider1.max = 1; //设置 this.hslider0 最高位置值。
                this._viewUI.hslider1.tick = 0.1; //设置 this.hslider0 刻度值。
                this._viewUI.hslider1.value = Laya.SoundManager.musicVolume; //设置 this.hslider0 当前位置值。
                this._viewUI.hslider1.changeHandler = new Handler(this, this.onChange1); //设置 this.hslider0 位置变化处理器。
                this._viewUI.tab.selectHandler = new Handler(this, this.selectHandler);
                this._viewUI.tab.selectedIndex = this._dataSource || 0;
                this._viewUI.btn_bindwx.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_bind_account.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_bind_phone.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_bingyhk.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_get_code.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_resetmm.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_bindzfb.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_copy.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_changge_nc.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_xiugai.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_head.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_vip.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._inputOldKey.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._inputNewKey.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._inputQueRenNewKey.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._notStageClickUI = [this._inputNewKey, this._inputOldKey, this._inputQueRenNewKey];
                if (!WebConfig.isSingleEnter) {
                    this._inputCode.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._inputKey.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._inputKey1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._inputCode.settext(this._game, this._promptColor, "请输入验证码…", this._inputColor, 24, 6, page_1.MyTextInput.TYPE_INPUT_NUMBER);
                    this._inputKey.settext(this._game, this._promptColor, "请输入密码…", this._inputColor, 24, 20, page_1.MyTextInput.TYPE_INPUT_ENGLISH, true);
                    this._inputKey1.settext(this._game, this._promptColor, "请确认密码…", this._inputColor, 24, 20, page_1.MyTextInput.TYPE_INPUT_ENGLISH, true);
                    this._notStageClickUI = [this._inputCode, this._inputKey, this._inputKey1, this._inputNewKey, this._inputOldKey, this._inputQueRenNewKey];
                }
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this.onUpdatePlayerInfo();
                this._game.datingGame.redPointCheckMgr.addCheckInfo(this, this._viewUI.btn_vip, this, this.checkout, WebConfig.baseplatform == page_1.DatingPageDef.BASE_PLATFORM_TYPE_DZQP ? new Point(125, -25) : new Point(105, -25), 1, null, [this._viewUI.btn_vip]);
            };
            GeRenXinXiPage.prototype.onChange0 = function (value) {
                // Laya.SoundManager.soundVolume = value;
                Laya.SoundManager.setSoundVolume(value);
                localSetItem("soundVolume", value.toString());
            };
            GeRenXinXiPage.prototype.onChange1 = function (value) {
                Laya.SoundManager.setMusicVolume(value);
                localSetItem("musicVolume", value.toString());
            };
            GeRenXinXiPage.prototype.onMouseGMHandle = function () {
                var page = this._game.uiRoot.top.getPage(page_1.DatingPageDef.PAGE_GM);
                if (!page)
                    this._game.uiRoot.top.open(page_1.DatingPageDef.PAGE_GM);
            };
            GeRenXinXiPage.prototype.checkout = function (btn) {
                switch (btn) {
                    case this._viewUI.btn_vip:
                        return gamedating.DatingGame.ins.vipMgr.checkVipReceived();
                }
            };
            GeRenXinXiPage.prototype.onMouseClick = function (e) {
                for (var index = 0; index < this._notStageClickUI.length; index++) {
                    var v = this._notStageClickUI[index];
                    if (v.contains(e.target)) {
                        return;
                    }
                }
                if (this._viewUI != gamedating.DatingGame.ins.jianPanMgr.pageUI)
                    return;
                gamedating.DatingGame.ins.jianPanMgr.closeJianPan();
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
            GeRenXinXiPage.prototype.onSucessHandler = function (data) {
                var _this = this;
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
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_RPWDVF) {
                    if (data && data.success == 0) {
                        this._viewUI.btn_get_code.disabled = true;
                        Laya.timer.once(60000, this, function () {
                            _this._viewUI.btn_get_code.disabled = false;
                        });
                        this._game.showTips("获取验证码成功");
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_RESETPWD) {
                    if (data && data.success == 0) {
                        if (!WebConfig.isSingleEnter) {
                            this._inputCode.clearInput();
                            this._inputKey.clearInput();
                            this._inputKey1.clearInput();
                        }
                        else {
                            this._viewUI.txt_code.text =
                                this._viewUI.txt_mima.text =
                                    this._viewUI.txt_mima2.text = "";
                        }
                        this._game.showTips("重置密码成功");
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
                if (index == 1) {
                    this._inputOldKey.settext(this._game, this._promptColor, "登录旧密码：", this._inputColor, 24, 20, page_1.MyTextInput.TYPE_INPUT_ENGLISH, true);
                    this._inputNewKey.settext(this._game, this._promptColor, "请输入6至10英文/数字", this._inputColor, 24, 10, page_1.MyTextInput.TYPE_INPUT_ENGLISH, true);
                    this._inputQueRenNewKey.settext(this._game, this._promptColor, "请输入6至10英文/数字", this._inputColor, 24, 10, page_1.MyTextInput.TYPE_INPUT_ENGLISH, true);
                }
                else {
                    this._inputOldKey.settext(this._game, this._promptColor, "取款旧密码：", this._inputColor, 24, 6, page_1.MyTextInput.TYPE_INPUT_NUMBER, true);
                    this._inputNewKey.settext(this._game, this._promptColor, "请输入6位数字", this._inputColor, 24, 6, page_1.MyTextInput.TYPE_INPUT_NUMBER, true);
                    this._inputQueRenNewKey.settext(this._game, this._promptColor, "请输入6位数字", this._inputColor, 24, 6, page_1.MyTextInput.TYPE_INPUT_NUMBER, true);
                }
                this._inputOldKey.clearInput();
                this._inputNewKey.clearInput();
                this._inputQueRenNewKey.clearInput();
                this._viewUI.box0.visible = index == 0;
                this._viewUI.box1.visible = index == 1 || index == 3;
                this._viewUI.box2.visible = index == 4;
                this._viewUI.box3.visible = index == 2;
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
                        gamedating.DatingGame.ins.openLoginPage();
                        this._game.uiRoot.closeAll([page_1.DatingPageDef.PAGE_LOGIN]);
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
                    case this._viewUI.btn_vip: //vip
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_VIP);
                        break;
                    case this._viewUI.btn_xiugai: //修改
                        if (WebConfig.info && !WebConfig.info.username) {
                            // this._game.showTips("请先绑定")
                            this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDACCOUNT);
                            return;
                        }
                        if (!this._inputOldKey.password || !this._inputNewKey.password || !this._inputQueRenNewKey.password) {
                            this._game.showTips("密码不能为空");
                            return;
                        }
                        if (this._inputNewKey.password.length < 6) {
                            this._game.showTips("密码不足6位");
                            return;
                        }
                        if (this._inputNewKey.password != this._inputQueRenNewKey.password) {
                            this._game.showTips("新密码不一致");
                            return;
                        }
                        if (this._viewUI.tab.selectedIndex == 1) {
                            this._game.network.call_changepwd(this._inputOldKey.password, this._inputNewKey.password, this._inputQueRenNewKey.password);
                        }
                        else {
                            this._game.network.call_changedrawpwd(this._inputOldKey.password, this._inputNewKey.password, this._inputQueRenNewKey.password);
                        }
                        break;
                    case this._viewUI.btn_bindwx: //绑定微信
                        this._game.datingGame.wxLogin(true);
                        break;
                    case this._viewUI.btn_bind_account: //绑定账号
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDACCOUNT);
                        break;
                    case this._viewUI.btn_bind_phone: //绑定手机
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDPHONE);
                        break;
                    case this._viewUI.btn_bingyhk: //绑定银行卡
                        if (!WebConfig.info)
                            return;
                        if (WebConfig.info.isguest) {
                            this._game.alert("游客不允许绑定银行卡！\n请先绑定为正式账号\n是否前往绑定手机号？", function () {
                                _this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDPHONE);
                            }, function () {
                            }, false, DatingPath.ui_dating_tongyong + "btn_qw.png");
                            return;
                        }
                        if (WebConfig.info.mobile) {
                            this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDYHK);
                        }
                        else {
                            this._game.showTips("请先绑定手机号码！");
                            this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDPHONE);
                        }
                        break;
                    case this._viewUI.btn_bindzfb: //绑定支付宝
                        if (!WebConfig.info)
                            return;
                        if (WebConfig.info.isguest) {
                            this._game.alert("游客不允许绑定支付宝！\n请先绑定为正式账号\n是否前往绑定手机号？", function () {
                                _this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDPHONE);
                            }, function () {
                            }, false, DatingPath.ui_dating_tongyong + "btn_qw.png");
                        }
                        if (WebConfig.info.mobile) {
                            this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDZFB);
                        }
                        else {
                            this._game.showTips("请先绑定手机号码！");
                            this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDPHONE);
                        }
                        break;
                    case this._viewUI.btn_get_code: //获取验证码
                        if (WebConfig.info && !WebConfig.info.username) {
                            // this._game.showTips("请先绑定")
                            this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDACCOUNT);
                            return;
                        }
                        if (WebConfig.info && !WebConfig.info.mobile) {
                            // this._game.showTips("请先绑定")
                            this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDPHONE);
                            return;
                        }
                        if (!this._viewUI.txt_phone.text || this._viewUI.txt_phone.text.length < 11) {
                            this._game.showTips("请输入正确手机号码！");
                            return;
                        }
                        this._game.network.call_get_reset_code();
                        break;
                    case this._viewUI.btn_resetmm: //重置密码
                        if (WebConfig.info && !WebConfig.info.username) {
                            // this._game.showTips("请先绑定")
                            this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDACCOUNT);
                            return;
                        }
                        if (WebConfig.info && !WebConfig.info.mobile) {
                            // this._game.showTips("请先绑定")
                            this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_BINDPHONE);
                            return;
                        }
                        if (!this._viewUI.txt_phone.text || this._viewUI.txt_phone.text.length < 11) {
                            this._game.showTips("请输入正确手机号码！");
                            return;
                        }
                        if (!WebConfig.isSingleEnter) {
                            if (!this._inputCode.input.text) {
                                this._game.showTips("验证码不能为空");
                                return;
                            }
                            if (!this._inputKey.password) {
                                this._game.showTips("密码不能为空");
                                return;
                            }
                            if (this._inputKey.password.length < 6) {
                                this._game.showTips("密码不能少于6位");
                                return;
                            }
                            if (this._inputKey.password != this._inputKey1.password) {
                                this._game.showTips("两次密码不一致");
                                return;
                            }
                            var data2 = {
                                server_name: WebConfig.server_name,
                                mobile: this._viewUI.txt_phone.text,
                                vfcode: this._inputCode.input.text,
                                pwd1: this._inputKey.password,
                                pwd2: this._inputKey1.password,
                            };
                            this._game.network.call_reset_pwd(data2.vfcode, data2.pwd1, data2.pwd2);
                        }
                        else {
                            if (!this._viewUI.txt_code.text) {
                                this._game.showTips("验证码不能为空");
                                return;
                            }
                            if (!this._viewUI.txt_mima.text) {
                                this._game.showTips("密码不能为空");
                                return;
                            }
                            if (this._viewUI.txt_mima.text.length < 6) {
                                this._game.showTips("密码不能少于6位");
                                return;
                            }
                            if (this._viewUI.txt_mima.text != this._viewUI.txt_mima2.text) {
                                this._game.showTips("两次密码不一致");
                                return;
                            }
                            var data2 = {
                                server_name: WebConfig.server_name,
                                mobile: this._viewUI.txt_phone.text,
                                vfcode: this._viewUI.txt_code.text,
                                pwd1: this._viewUI.txt_mima.text,
                                pwd2: this._viewUI.txt_mima2.text,
                            };
                            this._game.network.call_reset_pwd(data2.vfcode, data2.pwd1, data2.pwd2);
                        }
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
                gamedating.DatingGame.ins.jianPanMgr.openJianPan(textUI, viewUI, centerY);
            };
            GeRenXinXiPage.prototype.onUpdatePlayerInfo = function () {
                if (!WebConfig.info)
                    return;
                this._viewUI.img_head.skin = DatingPath.ui_dating + "touxiang/head_" + WebConfig.info.headimg + ".png";
                if (WebConfig.info.qifu_type > 0 && WebConfig.info.qifu_endtime > this._game.sceneGame.sync.serverTimeBys) {
                    this._viewUI.img_head.skin = DatingPath.ui_dating + "touxiang/head_" + this._qifuNameStr[WebConfig.info.qifu_type - 1] + ".png";
                }
                this._viewUI.txt_id.text = WebConfig.info.userid;
                this._viewUI.txt_money.text = WebConfig.info.money;
                this._viewUI.txt_nickname.text = WebConfig.info.nickname;
                this._viewUI.btn_changge_nc.visible = !WebConfig.info.isNicknameChanged;
                if (WebConfig.info.wx_unionid) { //绑定微信
                    this._viewUI.txt_wx.text = "已绑定";
                    this._viewUI.btn_bindwx.visible = false;
                }
                else {
                    this._viewUI.txt_wx.text = "未绑定";
                    this._viewUI.btn_bindwx.visible = true;
                }
                if (WebConfig.info.username) { //绑定账号
                    this._viewUI.txt_account.text = WebConfig.info.username;
                    this._viewUI.btn_bind_account.visible = false;
                }
                else {
                    this._viewUI.txt_account.text = "未绑定";
                    this._viewUI.btn_bind_account.visible = true;
                }
                if (WebConfig.info.mobile) { //绑定手机
                    this._viewUI.txt_shouji.text = this._viewUI.txt_phone.text = WebConfig.info.mobile;
                    this._viewUI.btn_bind_phone.visible = false;
                }
                else {
                    this._viewUI.txt_shouji.text = this._viewUI.txt_phone.text = "未绑定";
                    // if (WebConfig.logintype && WebConfig.logintype.indexOf(Web_operation_fields.ACCOUNT_TYPE_MOBILE) == -1) {
                    // 	this._viewUI.btn_bind_phone.visible = false;
                    // } else {
                    this._viewUI.btn_bind_phone.visible = true;
                    // }
                }
                if (WebConfig.info.yinhangka) { //绑定银行卡
                    this._viewUI.txt_yhk.text = "已绑定";
                    this._viewUI.btn_bingyhk.visible = false;
                }
                else {
                    this._viewUI.txt_yhk.text = "未绑定";
                    this._viewUI.btn_bingyhk.visible = true;
                }
                if (WebConfig.info.zhifubao) { //绑定支付宝
                    this._viewUI.txt_zfb.text = "已绑定";
                    this._viewUI.btn_bindzfb.visible = false;
                }
                else {
                    this._viewUI.txt_zfb.text = "未绑定";
                    this._viewUI.btn_bindzfb.visible = true;
                }
                this._viewUI.box_zfb.visible = WebConfig.info.is_show_alipay;
                this._viewUI.box_yhk.visible = WebConfig.info.is_show_bank;
                this._viewUI.box_wx.visible = !WebConfig.isSingleEnter && WebConfig.info.is_wx_open;
                this._viewUI.img_txk.visible = WebConfig.info.vip_level > 0;
                if (WebConfig.info.vip_level > 0) {
                    this._viewUI.img_txk.skin = DatingPath.ui_dating + "touxiang/tu_v" + WebConfig.info.vip_level + ".png";
                }
                this.updatePos();
            };
            GeRenXinXiPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_clear.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_check.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_change.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    if (this._gmTxt) {
                        this._gmTxt.removeSelf();
                        this._gmTxt.destroy();
                        this._gmTxt = null;
                    }
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                    if (!WebConfig.isSingleEnter) {
                        this._inputOldKey.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                        this._inputOldKey.destroy();
                        this._inputOldKey = null;
                        this._inputNewKey.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                        this._inputNewKey.destroy();
                        this._inputNewKey = null;
                        this._inputQueRenNewKey.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                        this._inputQueRenNewKey.destroy();
                        this._inputQueRenNewKey = null;
                        this._inputCode.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                        this._inputCode.destroy();
                        this._inputCode = null;
                        this._inputKey.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                        this._inputKey.destroy();
                        this._inputKey = null;
                        this._inputKey1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                        this._inputKey1.destroy();
                        this._inputKey1 = null;
                    }
                }
                _super.prototype.close.call(this);
            };
            GeRenXinXiPage.TYPE_SHEZHI = 4;
            return GeRenXinXiPage;
        }(game.gui.base.Page));
        page_1.GeRenXinXiPage = GeRenXinXiPage;
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=GeRenXinXiPage.js.map