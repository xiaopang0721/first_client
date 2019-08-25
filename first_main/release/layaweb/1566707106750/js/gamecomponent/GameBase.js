/*
* name;
*/
var GameBase = /** @class */ (function () {
    function GameBase(v) {
        //重新连接开关
        this._isCanReconnect = false;
        //重新连接cd
        this._reconnectTimer = 0;
        //重试次数
        this._reconectTryCount = 0;
        //连接计数
        this._connectTime = 0;
        //下次登陆时间
        this._nextLoginTime = 0;
        //强制登陆
        this._isReconnectIng = false;
        //连接失败提示cd
        this._errTime = 0;
        this._game = v;
    }
    Object.defineProperty(GameBase.prototype, "sceneObjectMgr", {
        get: function () {
            if (!this._sceneObjectMgr) {
                this._sceneObjectMgr = new SceneObjectMgr(this._game);
            }
            return this._sceneObjectMgr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameBase.prototype, "network", {
        get: function () {
            if (!this._network) {
                this._network = new Protocols("gameNetwork");
            }
            return this._network;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameBase.prototype, "sync", {
        get: function () {
            if (!this._sync) {
                this._sync = new Sync(main.game);
            }
            return this._sync;
        },
        enumerable: true,
        configurable: true
    });
    //登陆
    GameBase.prototype.login = function (desc, type, data) {
        this._login_type = type;
        this._login_data = data;
        this._login_desc = desc;
        switch (type) {
            case Web_operation_fields.ACCOUNT_TYPE_GUEST: //游客登陆
                if (WebConfig.isDebug) { //内网调试
                    data = { device: WebConfig.device, server_name: WebConfig.server_name, type: type, account: '', pwd: '' };
                    this.realLogin("login Web_operation_fields.ACCOUNT_TYPE_GUEST", data);
                    return;
                }
                WebConfig.session_key = localGetItem("session_key");
                if (WebConfig.session_key) {
                    data = { device: WebConfig.device, server_name: WebConfig.server_name, account: "", pwd: WebConfig.session_key, type: Web_operation_fields.ACCOUNT_TYPE_ACCOUNT };
                    this.realLogin("login Web_operation_fields.ACCOUNT_TYPE_GUEST", data);
                    return;
                }
                if (!WebConfig.isSingleEnter) //多入口才能游客登录
                 {
                    data = { device: WebConfig.device, server_name: WebConfig.server_name, type: type, account: '', pwd: '' };
                    this.realLogin("login Web_operation_fields.ACCOUNT_TYPE_GUEST", data);
                    return;
                }
                break;
            case Web_operation_fields.ACCOUNT_TYPE_WEIXIN: //微信登陆
                data = { device: WebConfig.device, server_name: WebConfig.server_name, account: data, type: type, pwd: '' };
                this.realLogin("login Web_operation_fields.ACCOUNT_TYPE_WEIXIN", data);
                return;
            case Web_operation_fields.ACCOUNT_TYPE_USERNAME: //用户名登陆
                data = { device: WebConfig.device, server_name: WebConfig.server_name, account: data.account, pwd: data.pwd, type: type };
                this.realLogin("login Web_operation_fields.ACCOUNT_TYPE_USERNAME", data);
                return;
            case Web_operation_fields.ACCOUNT_TYPE_MOBILE: //手机登陆
                data = { device: WebConfig.device, server_name: WebConfig.server_name, account: data.mobile, pwd: data.code, type: type };
                this.realLogin("login Web_operation_fields.ACCOUNT_TYPE_MOBILE", data);
                return;
            default: //用户ID
                WebConfig.session_key = localGetItem("session_key");
                if (WebConfig.session_key) {
                    data = { device: WebConfig.device, server_name: WebConfig.server_name, account: "", pwd: WebConfig.session_key, type: Web_operation_fields.ACCOUNT_TYPE_ACCOUNT };
                    this.realLogin("login Web_operation_fields.ACCOUNT_TYPE_ACCOUNT", data);
                    return;
                }
                break;
        }
        this._game.openLoginPage();
    };
    //登陆
    GameBase.prototype.realLogin = function (desc, data) {
        var _this = this;
        logd("realLogin", "desc:", desc);
        WebConfig.wxDebug && WebConfig.alert("realLogin登陆" + JSON.stringify(data));
        if (data.type == Web_operation_fields.ACCOUNT_TYPE_ACCOUNT) {
            this.connectSoctet(function () {
                _this.network.call_get_session(WebConfig.session_key, "", "");
            }, "call_get_session");
            return;
        }
        if (!this.network.connected) {
            this.connectSoctet(function () {
                _this.login(_this._login_desc, _this._login_type, _this._login_data);
            }, desc);
        }
        else {
            this.network.call_login_parameter(data.type, data.server_name, data.account, data.pwd, WebConfig.getInviteCode() || "", WebConfig.systemInfo || "", WebConfig.modelInfo || "", WebConfig.deviceId || "");
            logd("realLogin", 'SystemInfo:', WebConfig.systemInfo || "", 'ModelInfo:', WebConfig.modelInfo || "", 'DeviceId:', WebConfig.deviceId || "");
        }
    };
    // 心跳更新
    GameBase.prototype.onUpdate = function (diff) {
        this._sceneObjectMgr && this._sceneObjectMgr.update(diff);
        this._sync && this._sync.update(diff);
        if (this._networkState == GameBase.NETWORK_STATE_DROP || this._networkState == GameBase.NETWORK_STATE_FORCERELOGIN) {
            this.updateReConnect(diff);
        }
        if (this._nextLoginTime && Laya.timer.currTimer > this._nextLoginTime) {
            this._nextLoginTime = 0;
            if (this.network.connected)
                return;
            this.clear("onErrorHandle", true);
            this.connectSoctet(null, "onErrorHandle retry");
        }
    };
    GameBase.prototype.onCloseHandler = function (optcode, msg) {
        this.lockConnectSoctet = false;
        logd("GameApp.onCloseHandler", 'optcode', optcode, 'msg:', msg, this._networkState);
        //连接关闭 断线了要准备重连
        switch (this._networkState) {
            case GameBase.NETWORK_STATE_LOGIN: // 掉线了
            case GameBase.NETWORK_STATE_DROP: // 掉线了
                // 断线重连
                this._networkState = GameBase.NETWORK_STATE_DROP;
                this.clear("onCloseHandler", true); //关闭连接
                this._game.uiRoot.top.closeAll();
                WebConfig.server_close = false;
                this._isCanReconnect = true;
                this.reconnectLogin();
                break;
            case GameBase.NETWORK_STATE_FORCERELOGIN:
                this.clear("onCloseHandler", true);
                this._isCanReconnect = true;
                this.reconnectLogin();
                break;
            case GameBase.NETWORK_STATE_FORCE: //被顶号了
                this.clear("onCloseHandler", true);
                this._isCanReconnect = false;
                this._game.showTips("当前账号被其他人强登了", true);
                break;
            case GameBase.NETWORK_STATE_INIT: //
                // this._game.showTips("当前账号被其他人强登了", true);
                this._isCanReconnect = false;
                this.clear("onCloseHandler", true);
                break;
            default:
                this._networkState = GameBase.NETWORK_STATE_DROP;
                this.clear("onCloseHandler", true, true);
                this._isCanReconnect = true;
                //重连超过5次后就不再重试了(一次都没进成功的就式3次就号)
                if (this._reconectTryCount >= 5) {
                    this._isCanReconnect = false;
                    this._game.showTips("服务器被挤爆啦~~~~~,请给他喘气下", true);
                    return;
                }
                this._reconnectTimer = 3000; // 10秒尝试重新连接
                break;
        }
    };
    GameBase.prototype.reconnectLogin = function (showtip) {
        if (showtip === void 0) { showtip = false; }
        this._isReconnectIng = true;
        this.clear("reconnectLogin", false, showtip);
        if (!this.sceneObjectMgr.mainPlayer) {
            this.sceneObjectMgr.on(SceneObjectMgr.___MAIN_PLAYER_CHANGE, this, this.checkMainPlayerReady);
        }
        this.checkMainPlayerReady();
        this.connectSoctet(null, "GameBase reconnectLogin");
        this._isReconnectIng = false;
    };
    Object.defineProperty(GameBase.prototype, "lockConnectSoctet", {
        get: function () {
            return this._lockConnectSoctet;
        },
        set: function (v) {
            this._lockConnectSoctet = v;
            this._handle && this._handle.recover();
            this._handle = null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameBase.prototype, "game", {
        get: function () {
            return this._game;
        },
        enumerable: true,
        configurable: true
    });
    GameBase.prototype.connectSoctet = function (sucess, desc) {
        var _this = this;
        logd("GameApp connectSoctet ", "desc:", desc);
        this._connectSucessCallBack = this._connectSucessCallBack || sucess;
        if (this.network.connected) {
            if (this._connectSucessCallBack != null) {
                this._connectSucessCallBack();
                this._connectSucessCallBack = null;
            }
            return;
        }
        if (this.lockConnectSoctet)
            return;
        this.lockConnectSoctet = true;
        this._handle = Handler.create(this, function (handleData) {
            _this._handleData = handleData;
            if (!handleData || !handleData.url) {
                _this.connectSoctet(_this._connectSucessCallBack, desc);
                return;
            }
            var host = handleData.url.substr(0, handleData.url.lastIndexOf(":"));
            var port = parseInt(handleData.url.substr(handleData.url.lastIndexOf(":") + 1));
            logd('start connect', host, port);
            _this.network.setRemotePoint(host, port);
            _this._networkState = GameBase.NETWORK_STATE_INIT;
            _this.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, _this, _this.onOptHandler);
            _this.network.addHanlder(Protocols.SMSG_UD_OBJECT, _this, _this.onObjHandler);
            _this.network.addHanlder(Protocols.SMSG_JOIN_GAME_RESULT, _this, _this.onJoinGameResult);
            _this.network.addHanlder(Protocols.SMSG_GRID_UPDATE_DATA, _this, _this.onObjHandler);
            _this.network.addHanlder(Protocols.CMSG_FREE_SYTLE_SYNC, _this, _this.onFreeStyleUpdate);
            _this.network.addHanlder(core.net.EV_CONNECT, _this, _this.onConnectHandler);
            _this.network.addHanlder(core.net.EV_CLOSED, _this, _this.onCloseHandler);
            _this.network.addHanlder(core.net.EV_ERROR, _this, _this.onErrorHandle);
            _this.network.timeout = 3000;
            _this.network.connect();
            _this._connectTime++;
            logd("GameApp connectSoctet ", "connectTime:", _this._connectTime);
            WebConfig.wxDebug && WebConfig.alert("connect");
        }, null, false);
        RandomUrlFactory.ins.getUrl(this._handle);
        core.obj.SyncEvent.init();
        this.sync.init();
    };
    GameBase.prototype.onJoinGameResult = function (optcode, msg) {
        this.sceneObjectMgr.onMainUnitJoin(msg.guid);
    };
    // 清理
    GameBase.prototype.clear = function (desc, isAll, showtip) {
        if (isAll === void 0) { isAll = false; }
        if (showtip === void 0) { showtip = false; }
        if (isAll) {
            WebConfig.info = null;
        }
        this._game.clearMgr();
        this._reconectTryCount = 0;
        this.closeNetwork(desc, showtip);
        this.sync.dispose();
        //这个记得要清啊！！！死人的！
        this.sceneObjectMgr.off(SceneObjectMgr.___MAIN_PLAYER_CHANGE, this, this.checkMainPlayerReady);
        this.sceneObjectMgr.clear();
    };
    GameBase.prototype.checkMainPlayerReady = function () {
        logd("===================== GameBase.checkMainPlayerReady");
        if (!this.sceneObjectMgr.mainPlayer) {
            if (this._networkState == GameBase.NETWORK_STATE_LOGIN) {
                this._networkState = GameBase.NETWORK_STATE_DROP;
            }
            return;
        }
        this._networkState = GameBase.NETWORK_STATE_LOGIN;
        this.onMainPlayerReady();
        this._reconectTryCount = 0;
    };
    GameBase.prototype.onMainPlayerReady = function () {
        logd("===================== GameBase.onMainPlayerReady");
        if (!this.sceneObjectMgr.mainPlayer) {
            return;
        }
        this.sceneObjectMgr.off(SceneObjectMgr.___MAIN_PLAYER_CHANGE, this, this.checkMainPlayerReady);
    };
    //关闭网络连接
    GameBase.prototype.closeNetwork = function (desc, showtip) {
        if (showtip === void 0) { showtip = false; }
        logd("GameApp closeNetwork", "desc:", desc);
        if (this.lockConnectSoctet)
            return;
        this.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
        this.network.removeHanlder(Protocols.SMSG_UD_OBJECT, this, this.onObjHandler);
        this.network.removeHanlder(Protocols.SMSG_JOIN_GAME_RESULT, this, this.onJoinGameResult);
        this.network.removeHanlder(Protocols.SMSG_GRID_UPDATE_DATA, this, this.onObjHandler);
        this.network.removeHanlder(Protocols.CMSG_FREE_SYTLE_SYNC, this, this.onFreeStyleUpdate);
        this.network.removeHanlder(core.net.EV_CONNECT, this, this.onConnectHandler);
        this.network.removeHanlder(core.net.EV_CLOSED, this, this.onCloseHandler);
        this.network.removeHanlder(core.net.EV_ERROR, this, this.onErrorHandle);
        logd("GameApp closeNetwork", "closenetwork");
        if (this.network.connected) {
            logd("GameApp closeNetwork", "call_logout");
            this.network.call_logout();
        }
        this.network.close(); //关闭连接
        if (this._networkState != GameBase.NETWORK_STATE_INIT) {
            showtip && this._game.showTips("正在连接服务器...");
            this._game.setIsLockGame(true, true, "GameBase.closeNetwork");
        }
    };
    GameBase.prototype.onFreeStyleUpdate = function (optcode, msg) {
        FreeStyle.setData(msg.data);
    };
    GameBase.prototype.onObjHandler = function (optcode, msg) {
        this.sceneObjectMgr.ApplyBlock(msg);
    };
    GameBase.prototype.onConnectHandler = function (optcode, msg, sucess) {
        logd('connect sucess');
        this.lockConnectSoctet = false;
        this._connectTime = 0;
        this._isCanReconnect = false;
        if (!this.sceneObjectMgr.mainPlayer) {
            this.sceneObjectMgr.on(SceneObjectMgr.___MAIN_PLAYER_CHANGE, this, this.checkMainPlayerReady);
        }
        this.checkMainPlayerReady();
        WebConfig.wxDebug && WebConfig.alert("gettsion");
        if (this._connectSucessCallBack != null) {
            this._connectSucessCallBack();
            this._connectSucessCallBack = null;
        }
        else {
            WebConfig.session_key = localGetItem("session_key");
            if (WebConfig.session_key) {
                this.login("GameBase onConnectHandler");
            }
            else {
                this.login("GameBase onConnectHandler", this._login_type, this._login_data);
            }
        }
    };
    ;
    GameBase.prototype.onErrorHandle = function (optcode, msg) {
        logd('connect Error ', optcode, msg);
        this.lockConnectSoctet = false;
        this.clear("onErrorHandle", true);
        if (this._handleData) {
            RandomUrlFactory.ins.recoverUrl(this._handleData.url);
            this._handleData = null;
        }
        if (Laya.timer.currTimer - this._errTime > 1000) {
            this._game.showTips("连接服务器...");
            this._errTime = Laya.timer.currTimer;
        }
        this._nextLoginTime = Laya.timer.currTimer + 1000;
    };
    GameBase.prototype.onOptHandler = function (optcode, msg) {
        var _this = this;
        msg.type != Operation_Fields.OPRATE_WEB && logd("GameApp.onOptHandler", 'optcode', optcode, 'msg:', msg.type, msg.reason, msg.data);
        if (msg.type != Operation_Fields.OPRATE_PLAYING)
            // this._game.showTips(Operation_Fields.getOpateMsg(msg.type, msg.reason));
            if (msg.type == Operation_Fields.OPRATE_LOGIN) { //登录操作错误类型
                switch (msg.reason) {
                    case Operation_Fields.OPRATE_LOGIN_SUCCESS: // 登录成功
                        logd("登陆成功");
                        break;
                    case Operation_Fields.OPRATE_LOGIN_TIMEOUT: // 超时
                        break;
                    case Operation_Fields.OPRATE_LOGIN_SEX_ERR: // 性别错误
                        break;
                    case Operation_Fields.OPRATE_LOGIN_NAME_ERR: // 昵称错误
                        break;
                    case Operation_Fields.OPRATE_LOGIN_NAME_FUCK_PINGBI: // 昵称有非法词
                        break;
                    case Operation_Fields.OPRATE_LOGIN_NAME_EXIST: // 昵称已存在
                        break;
                    case Operation_Fields.OPRATE_LOGIN_OTHER_ONLINE: // 其他在线中
                        this._isCanReconnect = false;
                        this._networkState = GameBase.NETWORK_STATE_INIT;
                        this.sceneObjectMgr.clearObjs();
                        break;
                    case Operation_Fields.OPRATE_LOGIN_RECONNECTION: // 断线重连
                        this._isCanReconnect = true;
                        // 需要清理下对象
                        this.sceneObjectMgr.clearObjs();
                        break;
                    case Operation_Fields.OPRATE_LOGIN_KICK_PLAYER: // 踢下线
                        this._isCanReconnect = false;
                        break;
                    case Operation_Fields.OPRATE_LOGIN_LOCK_IP: // 封IP
                        this._isCanReconnect = false;
                        break;
                    case Operation_Fields.OPRATE_LOGIN_LOCK_INFO: // 封账号
                        this._isCanReconnect = false;
                        this.sceneObjectMgr.clearObjs();
                        break;
                    case Operation_Fields.OPRATE_LOGIN_NOTICE_OTHER_LOGIN1: // 提示他人,自己登陆当前账号
                        this._game.showTips("当前账号被强制登陆！");
                        this._isCanReconnect = false;
                        break;
                    case Operation_Fields.OPRATE_LOGIN_NOTICE_OTHER_LOGIN2: // 提示自己,其他人登陆当前账号
                        this._isCanReconnect = false;
                        this.fourceLogin();
                        // this._game.openLoginPage();
                        break;
                    case Operation_Fields.OPRATE_LOGIN_NETWORK_NOT_GOOD: // 当前网络不通畅，需要重新连接
                        break;
                    case Operation_Fields.OPRATE_LOGIN_MAX_PLAYER: // 非常抱歉，当前服务器人数已满，请尝试其他服务器登录吧
                        break;
                    case Operation_Fields.OPRATE_LOGIN_CALL_SESSION_KEY: // sessionkey
                        if (msg.data) {
                            localSetItem("session_key", msg.data);
                            this.connectSoctet(function () {
                                _this.network.call_get_session(msg.data, "", "");
                            }, "call_get_session");
                        }
                        break;
                }
            }
            else if (msg.type == Operation_Fields.OPRATE_WEB) { //与web交互操作错误类型
                switch (msg.reason) {
                    case Operation_Fields.OPRATE_WEB_FAIL_RESULT: // web返回的错误信息
                        this._game.showTips(Web_operation_fields.web_interface_result_table[msg.data]);
                        break;
                    case Operation_Fields.OPRATE_WEB_RECHARGE_SUCCESS: // 充值成功
                        this._game.showTips("充值成功");
                        break;
                    case Operation_Fields.OPRATE_WEB_CASH_SUCCESS: // 提款成功
                        this._game.showTips("提款成功");
                        break;
                    case Operation_Fields.OPRATE_WEB_FAIL_RESULT_INFO: // web返回的错误信息
                        logd("web有问题");
                        break;
                    case Operation_Fields.OPRATE_WEB_SUCESS_RESULT_INFO: // web成功返回的信息
                        if (msg && msg.data) {
                            var obj = void 0;
                            try {
                                obj = JSON.parse(msg.data);
                            }
                            catch (error) {
                                logd("解析失败", msg.data);
                                localSetItem("client_error", Vesion["_defaultVesion"] + "  " + WebConfig.gwUrl + ": web成功返回的信息" + (msg.data));
                            }
                            if (obj) {
                                this._sceneObjectMgr.event(SceneObjectMgr.EVENT_OPRATE_SUCESS, obj);
                            }
                        }
                        break;
                }
            }
            else if (msg.type == Operation_Fields.OPRATE_CLOSE) { //关闭客户端操作错误类型
                switch (msg.reason) {
                    case Operation_Fields.OPRATE_CLOSE_WEB_GET_INFO_ERR: // 封账号
                        this._networkState = GameBase.NETWORK_STATE_INIT;
                        this.clear("GameApp.onOptHandler OPRATE_CLOSE_WEB_GET_INFO_ERR", true);
                        localRemoveItem("session_key");
                        if (msg && msg.data) {
                            var obj = void 0;
                            try {
                                obj = JSON.parse(msg.data);
                            }
                            catch (error) {
                                logd("解析失败", msg.data);
                                localSetItem("client_error", Vesion["_defaultVesion"] + "  " + WebConfig.gwUrl + ": OPRATE_CLOSE_WEB_GET_INFO_ERR" + (msg.data));
                            }
                            if (obj) {
                                this._sceneObjectMgr.event(SceneObjectMgr.EVENT_OPRATE_SUCESS, obj);
                                obj.success && this._game.showTips(Web_operation_fields.web_interface_result_table[obj.success]);
                            }
                        }
                        this._game.openLoginPage();
                        break;
                    case Operation_Fields.OPRATE_CLOSE_LOCK_INFO: // 封账号
                        localRemoveItem("session_key");
                        this.clear("GameApp.onOptHandler OPRATE_CLOSE_SIGN_SERVER_NAME_INCONFORMITY", true);
                        this._game.showTips("网络连接错误，请重新登陆!!![500]");
                        this._game.openLoginPage();
                        break;
                    case Operation_Fields.OPRATE_CLOSE_LOCK_IP: // 封IP
                        localRemoveItem("session_key");
                        this.clear("GameApp.onOptHandler OPRATE_CLOSE_SIGN_SERVER_NAME_INCONFORMITY", true);
                        this._game.showTips("网络连接错误，请重新登陆!!![500]");
                        this._game.openLoginPage();
                        break;
                    case Operation_Fields.OPRATE_CLOSE_KICK_PLAYER: // 踢下线
                        localRemoveItem("session_key");
                        this.clear("GameApp.onOptHandler OPRATE_CLOSE_SIGN_SERVER_NAME_INCONFORMITY", true);
                        this._game.showTips("网络连接错误，请重新登陆!!![404]");
                        this._game.openLoginPage();
                        break;
                    case Operation_Fields.OPRATE_CLOSE_SERVER_NAME_NOT_FOUND: // 找不到这个平台
                        this._game.showTips("找不到这个平台,请重新登陆!");
                        localRemoveItem("session_key");
                        this.clear("GameApp.onOptHandler OPRATE_CLOSE_SERVER_NAME_NOT_FOUND", true);
                        this._game.openLoginPage();
                        break;
                    case Operation_Fields.OPRATE_CLOSE_SIGN_SERVER_NAME_INCONFORMITY: // sing与server_name不一致
                        this._game.showTips("sing与server_name不一致,请重新登陆!");
                        localRemoveItem("session_key");
                        this.clear("GameApp.onOptHandler OPRATE_CLOSE_SIGN_SERVER_NAME_INCONFORMITY", true);
                        this._game.openLoginPage();
                        break;
                    case Operation_Fields.OPRATE_CLOSE_SIGN_ERR: // sign错误
                        this.clear("GameApp.onOptHandler OPRATE_CLOSE_SIGN_ERR", true);
                        this._game.openLoginPage();
                        break;
                    case Operation_Fields.OPRATE_CLOSE_ACCOUNT_ERR: // 账号错误
                    case Operation_Fields.OPRATE_CLOSE_TIMEOUT: // 	超时
                        this._game.showTips("账号过期,请重新登陆!");
                        localRemoveItem("session_key");
                        this.clear("GameApp.onOptHandler OPRATE_CLOSE_TIMEOUT", true);
                        this._game.openLoginPage();
                        break;
                    case Operation_Fields.OPRATE_CLOSE_FORCE_RELOGIN: // 	允许强制重新登陆
                        // localRemoveItem("session_key")
                        this.clear("GameApp.onOptHandler OPRATE_CLOSE_FORCE_RELOGIN", true);
                        this._isCanReconnect = true;
                        this._reconnectTimer = 1000;
                        this._networkState = GameBase.NETWORK_STATE_FORCERELOGIN;
                        break;
                    case Operation_Fields.OPRATE_CLOSE_OTHER_ONLINE: // 	其他在线中
                        this._isCanReconnect = false;
                        this._networkState = GameBase.NETWORK_STATE_FORCE;
                        this.clear("GameApp.onOptHandler OPRATE_CLOSE_OTHER_ONLINE", true);
                        localRemoveItem("session_key");
                        this._game.showTips("被他人顶号了！");
                        this._game.openLoginPage();
                        break;
                }
            }
        if (msg.type == Operation_Fields.OPRATE_GAME) {
            var obj = '';
            try {
                obj = JSON.parse(msg.data);
            }
            catch (error) {
                logd("解析失败", msg.data);
                // localSetItem("client_error", Vesion["_defaultVesion"] + "  " + WebConfig.gwUrl + ": web成功返回的信息" + (msg.data));
            }
            this._sceneObjectMgr.event(SceneObjectMgr.EVENT_OPRATE_SUCESS, msg);
        }
    };
    GameBase.prototype.fourceLogin = function () {
        var _this = this;
        if (this._login_data && this._login_type) {
            if (this._login_data.account && this._login_type == Web_operation_fields.ACCOUNT_TYPE_USERNAME && (localGetItem("mac_username") == this._login_data.account || localGetItem("mac_mobile") == this._login_data.account)) {
                this.connectSoctet(function () {
                    _this.network.call_forced_into();
                }, "fourceLogin");
                return;
            }
            else if (this._login_data.mobile && this._login_type == Web_operation_fields.ACCOUNT_TYPE_MOBILE && localGetItem("mac_mobile") == this._login_data.mobile) {
                this.connectSoctet(function () {
                    _this.network.call_forced_into();
                }, "fourceLogin");
                return;
            }
        }
        else {
            WebConfig.session_key = localGetItem("session_key");
            if (WebConfig.session_key) {
                this.connectSoctet(function () {
                    _this.network.call_forced_into();
                }, "fourceLogin");
                return;
            }
        }
        this._game.alert("由于网络波动的影响，您已登出游戏\n是否重新登录游戏？", function () {
            _this.connectSoctet(function () {
                _this.network.call_forced_into();
            }, "fourceLogin");
        }, function () {
        }, false);
    };
    // 更新断线重连
    GameBase.prototype.updateReConnect = function (diff) {
        if (!this._isCanReconnect) {
            return;
        }
        // 掉线了
        if (this._reconnectTimer > diff) {
            this._reconnectTimer -= diff;
            return;
        }
        this._reconnectTimer = 3000; // 10秒尝试重新连接
        //开始连接
        this.reconnectLogin(true);
        this._reconectTryCount++;
    };
    GameBase.NETWORK_STATE_INIT = 1; // 初始 
    GameBase.NETWORK_STATE_LOGIN = 2; // 登录了
    GameBase.NETWORK_STATE_DROP = 3; // 掉线了
    GameBase.NETWORK_STATE_FORCE = 4; // 顶号
    GameBase.NETWORK_STATE_FORCERELOGIN = 5; //强制登陆
    return GameBase;
}());
//# sourceMappingURL=GameBase.js.map