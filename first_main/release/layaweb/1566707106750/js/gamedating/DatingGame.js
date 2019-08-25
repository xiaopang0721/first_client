/**
* name
*/
var gamedating;
(function (gamedating) {
    var DatingGame = /** @class */ (function () {
        function DatingGame() {
            // 主玩家数据下来了
            this._isLogined = false;
            this._shareCd = 0;
            this._checkPingTime = 0;
            this._checkVesionTime = 60000;
            this._game = main.game;
            DatingPageDef.myinit(DatingPageDef.GAME_NAME);
            //按鍵监听
            if (Browser.onPC) {
                Laya.stage.on(LEvent.KEY_DOWN, this, this.onKeyDown);
                Laya.stage.on(LEvent.KEY_UP, this, this.onKeyUp);
            }
            this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
            this._game.sceneObjectMgr.on(SceneObjectMgr.__EVENT_PLAYER_CARDROOM_CHUANGE, this, this.onChangeCardRoom);
            this._game.sceneObjectMgr.on(SceneObjectMgr.__EVENT_PLAYER_INFO_GAME_ID, this, this.onUpdateReConnectStatus);
            this._game.sceneObjectMgr.on(SceneObjectMgr.___MAIN_PLAYER_CHANGE, this, this.onMainUnitChange);
            //微信登陆回调
            WebConfig.wxLoginCallBack = Handler.create(this, this.wxLoginCallBack, null, false);
            //键盘隐藏
            WebConfig.keyBoardHideCallBack = Handler.create(this, this.keyBoardHideCallBack, null, false);
            //键盘显示
            WebConfig.keyBoardShowCallBack = Handler.create(this, this.keyBoardShowCallBack, null, false);
            //ios推送
            WebConfig.update_deviceToken = Handler.create(this, this.update_deviceToken, null, false);
            //微信分享回调
            WebConfig.wxShareCallBack = Handler.create(this, this.update_wxShareCallBack, null, false);
        }
        Object.defineProperty(DatingGame, "ins", {
            get: function () {
                if (!this._ins) {
                    this._ins = new DatingGame();
                }
                return this._ins;
            },
            enumerable: true,
            configurable: true
        });
        DatingGame.prototype.initMgr = function () {
            this.noticeMgr.init();
            this.chongZhiMgr.init();
        };
        DatingGame.prototype.onUpdateReConnectStatus = function () {
            if (WebConfig.isConnected) { //第一进来 如果是断线重连进来的 先锁掉
                this._game.setIsLockGame(true, true, "UIRoot.onUpdateReConnectStatus");
            }
        };
        //主玩家下来了
        DatingGame.prototype.onMainUnitChange = function () {
            this.onMPlayerData();
        };
        DatingGame.prototype.onMPlayerData = function () {
            if (!this._game.sceneObjectMgr.mainPlayer || !WebConfig.info) {
                this._isLogined = false;
                this._game.setIsLockGame(true, true, "UIRoot.onMPlayerData");
                return;
            }
            if (this._isLogined) {
                return;
            }
            this._game.setIsLockGame(false, false, "UIRoot.onMPlayerData");
            this._isLogined = true;
            //界面上什么都没有 就打开hud
            if (!this._game.uiRoot.HUD.isOpened(DatingPageDef.PAGE_HUD)) {
                this._game.uiRoot.HUD.open(DatingPageDef.PAGE_HUD);
            }
            this._game.uiRoot.closeAll([DatingPageDef.PAGE_HUD, DatingPageDef.PAGE_BINDMONEY, DatingPageDef.PAGE_HUODONGGONGGAO, DatingPageDef.PAGE_HUODONG, DatingPageDef.PAGE_VIP_UP]);
            WebConfig.getDeviceToken(); //获取deviceToken
            !WebConfig.appVersion && WebConfig.getAppVersion(); //获取app版本号
            this.initMgr();
            this._game.uiRoot.closeLoadProgress();
            //客户端报告错误信息
            var str = localGetItem("client_error");
            if (str) {
                localRemoveItem("client_error");
                var data_1 = { info: str };
                var url = WebConfig.ai_url + "/sys/clientError";
                utils.Request.sendA(url, data_1);
            }
            ////报告APP错误信息
            var appstr = localGetItem("appSetErrorInfo");
            if (appstr) {
                localRemoveItem("appSetErrorInfo");
                var data_2 = { info: appstr };
                var url = WebConfig.ai_url + "/sys/clientError";
                utils.Request.sendA(url, data_2);
            }
            //设置下设备类型
            this._game.network.call_set_info("", "", WebConfig.deviceToken || "", WebConfig.device || "", "", "");
        };
        //键盘隐藏
        DatingGame.prototype.keyBoardHideCallBack = function (height) {
            this.jianPanMgr.event(JianPanMgr.EVENT_KEYBOARD_HIDE, height);
            logd("keyBoardHideCallBack", height);
        };
        //键盘显示
        DatingGame.prototype.keyBoardShowCallBack = function (height) {
            this.jianPanMgr.event(JianPanMgr.EVENT_KEYBOARD_SHOW, height);
            logd("keyBoardShowCallBack", height);
        };
        DatingGame.prototype.onAppBlur = function (e) {
            if (this._game.uiRoot.HUD.isOpened(PageDef.PAGE_LOADING) || this._game.uiRoot.HUD.isOpened(DatingPageDef.PAGE_LOGIN))
                return;
            if (this._game.sceneGame.network.connected)
                return;
            this._game.sceneGame.clear("UIRoot onAppBlur", true);
            // this._game.showTips("onAppBlur")
            this._game.stopAllSound();
            this._game.stopMusic();
        };
        DatingGame.prototype.onAppFous = function (e) {
            if (this._game.uiRoot.HUD.isOpened(PageDef.PAGE_LOADING) || this._game.uiRoot.HUD.isOpened(DatingPageDef.PAGE_LOGIN))
                return;
            if (this._game.sceneGame.network.connected)
                return;
            // this._game.showTips("onAppFous")
            this._game.playMusic(this._game.musicUrl);
            this._game.sceneGame.clear("UIRoot onAppFous", true);
            this._game.sceneGame.login("UIRoot onAppFous");
        };
        //房卡类型单项变更
        DatingGame.prototype.onChangeCardRoom = function () {
            WebConfig.hudtabIndex = WebConfig.hudgametype = PageDef.TYPE_CARD;
        };
        //微信分享回调
        DatingGame.prototype.update_wxShareCallBack = function (success) {
            if (!WebConfig.info) {
                return;
            }
            if (success && WebConfig.info.isCanFenXiang) //可以分享
             {
                if (Laya.timer.currTimer - this._shareCd < 3000)
                    return;
                this._shareCd = Laya.timer.currTimer + 3000;
                this._game.sceneGame.network.call_get_dailyshare();
            }
        };
        //ios推送回掉
        DatingGame.prototype.update_deviceToken = function () {
            if (!this._game.sceneGame.sceneObjectMgr.mainPlayer)
                return;
            WebConfig.wxDebug && WebConfig.alert("setDeviceToken:" + WebConfig.deviceToken);
            WebConfig.wxDebug && WebConfig.alert("device:" + WebConfig.device);
            WebConfig.wxDebug && WebConfig.alert("vtype:" + WebConfig.vtype);
            this._game.sceneGame.network.call_set_info("", "", WebConfig.deviceToken || "", WebConfig.device || "", "", "");
        };
        //微信登陆回掉
        DatingGame.prototype.wxLoginCallBack = function (isSucess, unionId) {
            WebConfig.wxDebug && WebConfig.alert("微信登陆回调" + isSucess);
            if (isSucess) {
                if (this._game.sceneGame.network.connected && this._isBind) {
                    WebConfig.wxDebug && WebConfig.alert("微信绑定");
                    if (WebConfig.info) {
                        this._game.sceneGame.network.call_bind(WebConfig.account, Web_operation_fields.ACCOUNT_TYPE_WEIXIN, unionId, "", "", "", "", "", WebConfig.device, WebConfig.info.invite_code || "");
                    }
                }
                else {
                    WebConfig.wxDebug && WebConfig.alert("微信登陆");
                    this._game.sceneGame.login("UIRoot wxLoginCallBack", Web_operation_fields.ACCOUNT_TYPE_WEIXIN, unionId);
                }
            }
        };
        /**
         * 微信login
         */
        DatingGame.prototype.wxLogin = function (isbind) {
            if (isbind === void 0) { isbind = false; }
            this._isBind = isbind;
            var data2 = {};
            WebConfig.wxDebug && WebConfig.alert("微信注册1");
            WebConfig.wxDebug && WebConfig.alert("微信登陆");
            WebConfig.wxLogin();
        };
        /**
         * 微信分享图文
         */
        DatingGame.prototype.wxShareImage = function (url, title, description, scene) {
            var data2 = {};
            WebConfig.wxDebug && WebConfig.alert("微信注册1");
            WebConfig.wxDebug && WebConfig.alert("微信分享图文");
            WebConfig.wxShareImage(url, title, description, scene - 1);
        };
        /**
         * 分享url
         * @param url 分享点击的地址
         * @param title 内容
         * @param description 描述
         * @param icon_url 右边图标
         * @param scene
         */
        DatingGame.prototype.wxShareUrl = function (title, description, img_url) {
            var iconUrl = img_url || Laya.URL.formatURL(DatingPath.ui_dating + "logo/app_100.png");
            WebConfig.wxShareUrl(WebConfig.downLoadUrl, title, description, iconUrl, Web_operation_fields.WXSCENESESSION - 1);
        };
        /**
         * 微信分享合成图 + 文
         */
        DatingGame.prototype.wxShareQrcodeImg = function (title, description, scene) {
            if (title === void 0) { title = ""; }
            if (description === void 0) { description = ""; }
            if (!WebConfig.info)
                return;
            if (!WebConfig.info.mobile) {
                this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDPHONE);
                return;
            }
            if (WebConfig.info && WebConfig.info.is_need_bank && !WebConfig.info.yinhangka) {
                this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDYHK);
                return;
            }
            var data2 = {};
            WebConfig.wxDebug && WebConfig.alert("微信注册1");
            WebConfig.wxDebug && WebConfig.alert("微信分享合成图 + 文");
            WebConfig.wxShareQrcodeImg(Laya.URL.formatURL(DatingPath.ui_dating + "tuiguang/tu_tg3.jpg"), 405, 720, WebConfig.ewmUrl, 233, 491, 140, 140, title, description, scene - 1);
            if (WebConfig.info.isCanFenXiang) //可以分享
             {
                if (Laya.timer.currTimer - this._shareCd < 3000)
                    return;
                this._shareCd = Laya.timer.currTimer + 3000;
                this._game.sceneGame.network.call_get_dailyshare();
            }
        };
        /**
         * 保存合成图片
         */
        DatingGame.prototype.saveQrcodeImage = function () {
            WebConfig.saveQrcodeImage(Laya.URL.formatURL(DatingPath.ui_dating + "tuiguang/tu_tg3.jpg"), 405, 720, WebConfig.ewmUrl, 233, 491, 140, 140);
        };
        /**
         * 微信分享文字
         */
        DatingGame.prototype.wxShareText = function (txt, scene) {
            var data2 = {};
            WebConfig.wxDebug && WebConfig.alert("微信注册1");
            WebConfig.wxDebug && WebConfig.alert("微信分享文字");
            WebConfig.wxShareText(txt, scene - 1);
        };
        /**
         * 微信登陆
         */
        DatingGame.prototype.wxOpen = function () {
            var data2 = {};
            WebConfig.wxDebug && WebConfig.alert("微信登陆");
            WebConfig.wxDebug && WebConfig.alert("微信登陆");
            WebConfig.wxOpen();
        };
        /**
         * qq登陆
         */
        DatingGame.prototype.qqOpen = function (qqNum) {
            WebConfig.copyTxt(qqNum.toString());
            this._game.showTips("QQ号码已复制成功");
            var url = "mqqwpa://im/chat?chat_type=wpa&uin={0}&version=1&src_type=web&web_src=oicqzone.com";
            WebConfig.openOtherApp(StringU.substitute(url, qqNum), "QQ");
        };
        /**
         * 复制地址
         */
        DatingGame.prototype.copyUrl = function () {
            WebConfig.copyTxt(WebConfig.gwUrl);
            this._game.playSound(Path.music_copy);
            this._game.showTips("官方地址已复制成功,欢迎推荐给您的朋友,快来赚赚钱!");
        };
        DatingGame.prototype.showIframe = function (url, x, y, w, h) {
            if (WebConfig.iframe)
                return;
            if (!Browser.onPC) {
                x = x / Browser.pixelRatio;
                y = y / Browser.pixelRatio;
                w = w / Browser.pixelRatio;
                h = h / Browser.pixelRatio;
            }
            var iframe = WebConfig.iframe = Laya.Browser.window.document.createElement('iframe');
            iframe.setAttribute('src', url);
            iframe.setAttribute('frameborder', 0);
            iframe.setAttribute('scrolling', 'no');
            iframe.setAttribute('allowfullscreen', true);
            iframe.setAttribute('name', "kefu");
            var body = laya.utils.Browser.window.document.getElementsByTagName("body")[0];
            body.appendChild(iframe);
            //适配处理
            var styleStr = "position: absolute;left: {0}px; top: {1}px; z-index: 100009;"; //laya 的index是100000
            var str = StringU.substitute(styleStr, x, y);
            iframe.setAttribute('width', w);
            iframe.setAttribute('height', h);
            iframe.setAttribute('style', str);
        };
        /**
         *
         * @param b true 显示
         */
        DatingGame.prototype.visibleIframe = function (b) {
            if (!WebConfig.iframe)
                return;
            var iframe = WebConfig.iframe;
            if (b) {
                if (iframe.parentNode)
                    return;
                var body = laya.utils.Browser.window.document.getElementsByTagName("body")[0];
                body.appendChild(iframe);
            }
            else {
                iframe.parentNode && iframe.parentNode.removeChild(iframe);
            }
        };
        DatingGame.prototype.closeIframe = function () {
            if (!WebConfig.iframe)
                return;
            var iframe = WebConfig.iframe;
            //把iframe指向空白页面，这样可以释放大部分内存。 
            iframe.src = 'about:blank';
            try {
                iframe.contentWindow.document.write('');
                iframe.contentWindow.document.clear();
            }
            catch (error) {
            }
            //把iframe从页面移除 
            iframe.parentNode && iframe.parentNode.removeChild(iframe);
            WebConfig.iframe = null;
        };
        DatingGame.prototype.resizeIframe = function (x, y, w, h) {
            if (!WebConfig.iframe)
                return;
            if (!Browser.onPC) {
                x = x / Browser.pixelRatio;
                y = y / Browser.pixelRatio;
                w = w / Browser.pixelRatio;
                h = h / Browser.pixelRatio;
            }
            var iframe = WebConfig.iframe;
            var styleStr = "position: absolute;left: {0}px; top: {1}px; z-index: 100009"; //laya 的index是100000
            var str = StringU.substitute(styleStr, x, y);
            iframe.setAttribute('width', w);
            iframe.setAttribute('height', h);
            iframe.setAttribute('style', str);
        };
        DatingGame.prototype.onOptHandler = function (optcode, msg) {
            if (msg.type == Operation_Fields.OPRATE_GAME) { //游戏操作错误类型
                switch (msg.reason) {
                    case Operation_Fields.OPRATE_GAME_DEVICE_PUSH_INFO: // 推送消息
                        WebConfig.setNotificationInfo(msg.data);
                        break;
                    case Operation_Fields.OPRATE_GAME_READY_CLOSE: //服务器准备更新关闭
                        WebConfig.server_close = true;
                        if (this instanceof Game) {
                            this.noticeMgr.makeNotice("亲爱的玩家，为了您更好的游戏体验，我们正在更新游戏，预计本次更新需要一分钟时间，请耐心等待。对您造成的不便，我们深表歉意！");
                        }
                        break;
                }
            }
        };
        Object.defineProperty(DatingGame.prototype, "redPointCheckMgr", {
            get: function () {
                if (!this._redPointCheckMgr) {
                    this._redPointCheckMgr = new RedPointCheckMgr(this._game);
                }
                return this._redPointCheckMgr;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DatingGame.prototype, "noticeMgr", {
            get: function () {
                if (!this._noticeMgr) {
                    this._noticeMgr = new NoticesMgr(this._game);
                }
                return this._noticeMgr;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DatingGame.prototype, "mailMgr", {
            get: function () {
                if (!this._mailMgr) {
                    this._mailMgr = new MailMgr(this._game);
                }
                return this._mailMgr;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DatingGame.prototype, "baobiaoMgr", {
            get: function () {
                if (!this._baobiaoMgr) {
                    this._baobiaoMgr = new BaoBiaoMgr(this._game);
                }
                return this._baobiaoMgr;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DatingGame.prototype, "dailiyonghuMgr", {
            get: function () {
                if (!this._dailiyonghuMgr) {
                    this._dailiyonghuMgr = new DaiLiYongHuMgr(this._game);
                }
                return this._dailiyonghuMgr;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DatingGame.prototype, "cardRoomMgr", {
            get: function () {
                if (!this._cardRoomMgr) {
                    this._cardRoomMgr = new CardRoomMgr(this._game);
                }
                return this._cardRoomMgr;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DatingGame.prototype, "jianPanMgr", {
            get: function () {
                if (!this._jianPanMgr) {
                    this._jianPanMgr = new JianPanMgr(this._game);
                }
                return this._jianPanMgr;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DatingGame.prototype, "cunQuMgr", {
            get: function () {
                if (!this._quKuanMgr) {
                    this._quKuanMgr = new CunQuMgr(this._game);
                }
                return this._quKuanMgr;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DatingGame.prototype, "chongZhiMgr", {
            get: function () {
                if (!this._chongZhiMgr) {
                    this._chongZhiMgr = new ChongZhiMgr(this._game);
                }
                return this._chongZhiMgr;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DatingGame.prototype, "fanYongMgr", {
            get: function () {
                if (!this._fanYongMgr) {
                    this._fanYongMgr = new FanYongMgr(this._game);
                }
                return this._fanYongMgr;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DatingGame.prototype, "topMgr", {
            get: function () {
                if (!this._topMgr) {
                    this._topMgr = new TopMgr(this._game);
                }
                return this._topMgr;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DatingGame.prototype, "qifuMgr", {
            get: function () {
                if (!this._qifuMgr) {
                    this._qifuMgr = new QiFuMgr(this._game);
                }
                return this._qifuMgr;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DatingGame.prototype, "vipMgr", {
            get: function () {
                if (!this._vipMgr) {
                    this._vipMgr = new VipMgr(this._game);
                }
                return this._vipMgr;
            },
            enumerable: true,
            configurable: true
        });
        DatingGame.prototype.onKeyDown = function (e) {
            if (!Browser.onPC)
                return;
            if (!isDebug)
                return;
            if (e.keyCode == Laya.Keyboard.ENTER) {
                var page_1 = this._game.uiRoot.top.getPage(DatingPageDef.PAGE_GM);
                if (!page_1)
                    this._game.uiRoot.top.open(DatingPageDef.PAGE_GM);
            }
            else if (e.keyCode == Laya.Keyboard.Q) {
                this._game.sceneGame.sceneObjectMgr.cancleMathch();
            }
            else if (e.keyCode == Laya.Keyboard.W) {
                this._game.sceneGame.sceneObjectMgr.leaveStory(true);
            }
        };
        DatingGame.prototype.onKeyUp = function (e) {
            if (!Browser.onPC)
                return;
        };
        //打开登陆界面
        DatingGame.prototype.openLoginPage = function () {
            this._game.uiRoot.closeAll([DatingPageDef.PAGE_LOGIN, DatingPageDef.PAGE_TIPS]);
            var isOpened = this._game.uiRoot.HUD.isOpened(DatingPageDef.PAGE_LOGIN);
            !isOpened && this._game.uiRoot.HUD.open(DatingPageDef.PAGE_LOGIN);
        };
        /**进入新地图 */
        DatingGame.prototype.onIntoNewMap = function (info) {
            var _this = this;
            if (typeof info == "string") {
                this._game.uiRoot.top.closeAll([DatingPageDef.PAGE_GONGGAO, DatingPageDef.PAGE_TIP]);
                this._game.uiRoot.general.closeAll();
                this._game.uiRoot.HUD.closeAll();
                var pageDef = getPageDef(info);
                if (pageDef && !pageDef["__enterMapLv"]) {
                    this._game.uiRoot.HUD.open(info + "1", function (page) {
                        page.dataSource = WebConfig.hudgametype || 0;
                    }, function (page) {
                        if (_this._game.sceneObjectMgr.mainPlayer && !_this._game.sceneGame.inScene) {
                            _this._game.uiRoot.HUD.open(DatingPageDef.PAGE_HUD, null, null, false, 0);
                        }
                    });
                }
                else {
                    this._game.uiRoot.HUD.open(DatingPageDef.PAGE_HUD);
                }
            }
            else {
                this._game.uiRoot.HUD.close(DatingPageDef.PAGE_HUD);
            }
            LoadingMgr.ins.cancleUnLoads(); //进出地图取消掉未加载完成的
            JsLoader.ins.clear();
            this._game.setIsLockGame(!this._isLogined, true, "UIRoot.onIntoNewMap");
        };
        DatingGame.prototype.onUpdate = function (diff) {
            if (!this._game.sceneGame.inScene) {
                this._mailMgr && this._mailMgr.update(diff);
                this._redPointCheckMgr && this._redPointCheckMgr.update(diff);
            }
            if (this._checkVesionTime < 0) {
                this._checkVesionTime = 60000;
                this.checkClientVesion();
            }
            else {
                this._checkVesionTime -= diff;
            }
            !WebConfig.appVersion && WebConfig.getAppVersion(); //获取app版本号
        };
        DatingGame.prototype.checkClientVesion = function (isShowTips) {
            var _this = this;
            if (isDebug)
                return;
            if (this._game.sceneGame.inScene)
                return;
            if (!this._game.isLoadComplete)
                return;
            if (isShowTips) {
                if (this._checkLoack) {
                    this._game.showTips("操作太频繁,请稍后重试!");
                    return;
                }
                this._checkLoack = true;
            }
            if ((WebConfig.onAndroid || WebConfig.onIOS) && !WebConfig.after && WebConfig.info && WebConfig.appVersion) {
                var app_version_1 = WebConfig.onAndroid ? WebConfig.info.app_android : WebConfig.info.app_ios;
                if (app_version_1 && WebConfig.appVersion != app_version_1) {
                    var newbb = 0, oldbb = 0;
                    var ch = void 0;
                    try {
                        newbb = parseInt(app_version_1.toString().replace(/\./g, ""));
                        oldbb = parseInt(WebConfig.appVersion.toString().replace(/\./g, ""));
                    }
                    catch (error) {
                        ch = true;
                    }
                    if (ch || newbb > oldbb) {
                        var data_3 = {};
                        data_3["invitecode"] = WebConfig.getInviteCode() || "";
                        data_3["is_dan"] = WebConfig.isSingleEnter ? Web_operation_fields.GAME_APP_TYPE_1 : Web_operation_fields.GAME_APP_TYPE_2;
                        var url = WebConfig.gwUrl + (Laya.Browser.onAndroid ? "/game/packAndroid" : "/game/packIos");
                        utils.Request.sendA(url, data_3, Handler.create(this, function (value) {
                            _this._checkLoack = false;
                            if (value && value.success == 0) {
                                if (Laya.Browser.onAndroid && !value.path) { //android没获取到path就等待下个CD
                                    return;
                                }
                                else {
                                    _this._game.alert(StringU.substitute("检测到App有最新版本{0}，当前版本{1}，是否需要重新下载更新?", app_version_1, WebConfig.appVersion), function () {
                                        WebConfig.openUrl(value.path || WebConfig.gwUrl);
                                    }, function (isclose) {
                                        !isclose && (WebConfig.after = true);
                                    }, false, DatingPath.ui_dating_tongyong + "btn_liji.png", DatingPath.ui_dating_tongyong + "btn_shaohou.png");
                                }
                            }
                            // else {
                            // WebConfig.openUrl(WebConfig.gwUrl)
                            // }
                        }));
                        return;
                    }
                }
            }
            if (WebConfig.yihou)
                return;
            Laya.loader.load("version_h5_min.bin?v=" + MathU.randomRange(1, 1000000), Handler.create(this, function (data) {
                _this._checkLoack = false;
                if (!data)
                    return;
                if (!_this._vesion_byteArray)
                    _this._vesion_byteArray = new ByteArray();
                _this._vesion_byteArray.clear();
                _this._vesion_byteArray.buffer = data;
                var conf_url_value = StringU.readZlibData(_this._vesion_byteArray);
                var arr = conf_url_value.split("\n");
                if (!arr || arr.length < 2)
                    return;
                var client_version = arr[1].replace("\r", "");
                var defaultVesion = Vesion["_defaultVesion"];
                if (client_version && defaultVesion && defaultVesion != client_version) {
                    var newbb = 0, oldbb = 0;
                    var ch = void 0;
                    try {
                        newbb = parseInt(client_version.toString().replace(/\./g, ""));
                        oldbb = parseInt(defaultVesion.toString().replace(/\./g, ""));
                    }
                    catch (error) {
                        ch = true;
                    }
                    if (ch || newbb > oldbb) {
                        _this._game.alert(StringU.substitute("检测到有最新版本{0}，当前版本{1}，是否需要重新加载更新?", client_version, defaultVesion), function () {
                            WebConfig.openHelloImg();
                            location.reload(true);
                        }, function (isclose) {
                            !isclose && (WebConfig.yihou = true);
                        }, false, DatingPath.ui_dating_tongyong + "btn_gengxin.png", DatingPath.ui_dating_tongyong + "btn_yihou.png");
                        return;
                    }
                    else if (newbb < oldbb) {
                        _this._game.alert("检测到当前版本有变更，请重新加载！！！", function () {
                            WebConfig.openHelloImg();
                            location.reload(true);
                        }, function (isclose) {
                            !isclose && (WebConfig.yihou = true);
                        }, false, DatingPath.ui_dating_tongyong + "btn_gengxin.png", DatingPath.ui_dating_tongyong + "btn_yihou.png");
                        return;
                    }
                }
                isShowTips && _this._game.showTips("当前已经是最新版本");
                _this._checkLoack = false;
            }));
        };
        DatingGame.prototype.clearMgr = function () {
            this.firstAlert = false;
            if (this._redPointCheckMgr) {
                this._redPointCheckMgr.clear();
                this._redPointCheckMgr = null;
            }
            if (this._baobiaoMgr) {
                this._baobiaoMgr.clear(true);
                this._baobiaoMgr = null;
            }
            if (this._cardRoomMgr) {
                this._cardRoomMgr.clear(true);
                this._cardRoomMgr = null;
            }
            if (this._quKuanMgr) {
                this._quKuanMgr.clear(true);
                this._quKuanMgr = null;
            }
            if (this._chongZhiMgr) {
                this._chongZhiMgr.clear(true);
                this._chongZhiMgr = null;
            }
            if (this._topMgr) {
                this._topMgr.clear(true);
                this._topMgr = null;
            }
            if (this._fanYongMgr) {
                this._fanYongMgr.clear(true);
                this._fanYongMgr = null;
            }
            if (this._mailMgr) {
                this._mailMgr.clear(true);
                this._mailMgr = null;
            }
            if (this._noticeMgr) {
                this._noticeMgr.clear(true);
                this._noticeMgr = null;
            }
            if (this._jianPanMgr) {
                this._jianPanMgr.clear(true);
                this._jianPanMgr = null;
            }
            if (this._qifuMgr) {
                this._qifuMgr.clear(true);
                this._qifuMgr = null;
            }
            if (this._vipMgr) {
                this._vipMgr.clear(true);
                this._vipMgr = null;
            }
        };
        return DatingGame;
    }());
    gamedating.DatingGame = DatingGame;
})(gamedating || (gamedating = {}));
//# sourceMappingURL=DatingGame.js.map