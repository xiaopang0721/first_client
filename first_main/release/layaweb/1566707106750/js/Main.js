var Label = Laya.Label;
var Handler = Laya.Handler;
var Loader = Laya.Loader;
var Browser = Laya.Browser;
var Stage = Laya.Stage;
var LEvent = Laya.Event;
var Sprite = Laya.Sprite;
var LImage = Laya.Image;
var Graphics = Laya.Graphics;
var Rectangle = Laya.Rectangle;
var Texture = Laya.Texture;
var Button = Laya.Button;
var Box = Laya.Box;
var Point = Laya.Point;
var CheckBox = Laya.CheckBox;
var Panel = Laya.Panel;
var HttpRequest = Laya.HttpRequest; //laya.net.HttpRequest;
var Matrix = Laya.Matrix; //laya.maths.Matrix;
var ColorFilter = Laya.ColorFilter;
var Dictionary = Laya.Dictionary;
var Skeleton = Laya.Skeleton;
var Templet = Laya.Templet; //laya.ani.bone.Templet
var JsLoader = game.gui.component.JsLoader;
var Network = core.net.Network;
var UpdateMask = core.obj.UpdateMask;
var GuidObject = core.obj.GuidObject;
var Vesion = core.utils.Vesion;
var RandNickname = core.utils.RandNickname;
var Vector2 = core.utils.Vector2;
var Base64 = core.utils.Base64;
var StringU = core.utils.StringU;
var Random = core.utils.Random;
var L = core.utils.L;
var PreLoad = core.resource.PreLoad;
var RefAsset = core.resource.RefAsset;
var RefSound = core.resource.RefSound;
var Path = game.data.Path;
var RefTemplet = core.resource.RefTemplet;
var Protocols = hanlder.Protocols;
var MapField = game.object.MapField;
var UnitField = game.object.UnitField;
var PlayerDataField = game.object.PlayerDataField;
var WaitEffectPage = game.gui.page.WaitEffectPage;
var Template = game.data.Template;
var PageHandle = game.PageHandle;
var UIRoot = game.UIRoot;
var Game = game.Game;
var GeneralUI = game.gui.GeneralUI;
var HUD = game.gui.HUD;
var TopUI = game.gui.TopUI;
var TopunderUI = game.gui.TopunderUI;
var PageDef = game.gui.page.PageDef;
var Page = game.gui.base.Page;
var TabPage = game.gui.base.TabPage;
var TabBox = game.gui.base.TabBox;
var LoadingDH = game.gui.page.LoadingDH;
// 是否iphoneX
var onIPhoneX = false;
// 本地调试
var isDebug = false;
var cur_vesion = "10086";
//调试信息开关
var isShowDebug = false;
var api = window["defexternalInterfacePI"];
// 启动程序
var Main = /** @class */ (function () {
    function Main() {
        var _this = this;
        // 美术设计画布像素高宽
        this.widthDesginPixelw = 1280;
        this.heightDesginPixelw = 720;
        // 浏览器可视高宽（在设备上的像素高宽）
        this._designWidth = 0;
        this._designHeight = 0;
        // 客户端画布缩放比
        this._clientScale = 1;
        // 是否休眠
        this.isBlur = 0;
        this._showStat = false;
        this._checkPingTime = 0;
        // 浏览器可视原始高宽
        this._browserClientWidth = 0;
        this._browserClientHeight = 0;
        this._lockOrientation = true;
        // 是否IPhoneX
        if (Browser.onIPhone && Math.abs(Browser.pixelRatio - 3) < 0.01) {
            onIPhoneX = (Browser.clientWidth == 375 && Browser.clientHeight == 812) || (Browser.clientWidth == 812 && Browser.clientHeight == 375);
        }
        if (onIPhoneX) {
            //初始化引擎
            Laya.init(Browser.clientWidth * Browser.pixelRatio, Browser.clientHeight * Browser.pixelRatio, Laya.WebGL);
        }
        else {
            //初始化引擎
            Laya.init(this.widthDesginPixelw, this.heightDesginPixelw, Laya.WebGL);
        }
        // 屏幕适配
        utils.Adaptive.init();
        Laya.SoundManager.useAudioMusic = false;
        logd('location.href', location.href);
        var erralert = 0;
        Browser.window.onerror = function (msg, url, line, column, detail) {
            if (erralert++ < 5 && detail) {
                // alert("出错啦，请把此信息截图给研发商\n" + msg + "\n" + detail.stack || detail);
                WebConfig.copyTxt(msg + "\n" + detail.stack || detail);
                var data = { error: msg + "\n" + detail.stack || detail };
                if (isDebug) {
                    throw new Error(data.error.toString());
                }
                else {
                    localSetItem("client_error", Vesion["_defaultVesion"] + ",devicetype:" + WebConfig.vtype + "," + WebConfig.appVersion + ",SystemInfo:" + WebConfig.systemInfo + ",ModelInfo:" + WebConfig.modelInfo + ",DeviceId:" + WebConfig.deviceId + ",userid:" + WebConfig.info.userid + ",gameid:" + WebConfig.info.gameid + "," + WebConfig.gwUrl + ":" + data.error);
                }
            }
        };
        // 是否wss判断
        var Network_isWss = Network.prototype.isWss;
        Network.prototype.isWss = function () {
            var isWss = Network_isWss.call(this);
            return isWss;
        };
        isDebug = WebConfig.isDebug;
        //调试信息
        this.showStat = isDebug;
        window["showStatInfo"] = false;
        // 抗锯齿
        Config.isAntialias = true;
        core.utils.Log.LEVEL = isDebug ? 4 : 0;
        Vesion.defaultPath = "common/";
        if (WebConfig.isOnline) {
            Vesion.assetUrl = WebConfig.res_url; //远程资源地址
        }
        else {
            Vesion.assetUrl = "";
        }
        Vector2.TowardCount = 128;
        Laya.loader.maxLoader = 5;
        Laya.loader.retryNum = 3;
        Laya.loader.retryDelay = 3000;
        Loader.maxTimeOut = 15000;
        Loader.typeMap["data"] = Loader.BUFFER;
        Loader.typeMap["bin"] = Loader.BUFFER;
        Laya.stage.bgColor = "#000000";
        //设置适配模式
        Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
        //设置横竖屏
        Laya.stage.screenMode = Stage.SCREEN_HORIZONTAL;
        //设置水平对齐
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        //设置垂直对齐
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        // 休眠（浏览器）
        Laya.stage.on(LEvent.BLUR, this, this.onBlur);
        // 激活（浏览器）
        Laya.stage.on(LEvent.FOCUS, this, this.onFocus);
        var url = WebConfig.version;
        var arr = url.split("?v=");
        cur_vesion = arr && arr.length == 2 ? arr[1].toString() : "10086";
        var v = localGetItem("client_vesion");
        if (v != cur_vesion) {
            localSetItem("client_vesion", cur_vesion);
        }
        WebConfig.platform = (StringU.getParameter(location.href, "p") || WebConfig.platform).toLowerCase();
        WebConfig.isSingleEnter = (StringU.getParameter(location.href, "logintype") == Web_operation_fields.ACCOUNT_TYPE_USERNAME.toString()) ? true : false;
        WebConfig.server_name = (StringU.getParameter(location.href, "p") || WebConfig.server_name).toLowerCase();
        WebConfig.gwUrl = WebConfig.gwconf[WebConfig.platform];
        WebConfig.ewmbaseUrl = WebConfig.gwUrl + "/qrcode?urlsize=9&urltext=" + encodeURIComponent(WebConfig.gwUrl) + "?invitecode=";
        Vesion.addSearchPath(WebConfig.platform + "/", "langpack_1000.bin");
        WebConfig.baseplatform = WebConfig.baseqp[WebConfig.platform];
        logd("platform：", WebConfig.platform, 'baseplatform', WebConfig.baseplatform);
        if (WebConfig.baseplatform) {
            Vesion.addSearchPath(WebConfig.baseplatform + "/", "langpack_1000.bin");
        }
        else {
            WebConfig.baseplatform = WebConfig.defaultplatform;
        }
        Path.map_far = StringU.substitute(Path.map_far, WebConfig.baseplatform);
        Path.map = StringU.substitute(Path.map, WebConfig.baseplatform);
        WebConfig.logintype = StringU.getParameter(location.href, "logintype") || null;
        !WebConfig.systemInfo && WebConfig.getSystemInfo(); //获取手机系统信息
        !WebConfig.modelInfo && WebConfig.getModelInfo(); //获取机型
        !WebConfig.deviceId && WebConfig.getDeviceId(); //获取唯一标识
        Vesion.once(Vesion.LOAD_VESION_COMPLETE, this, function () {
            _this.init();
        });
        Vesion.loadVesionFile("version_h5.bin?v=" + cur_vesion);
        //开启使用WorkerLoader来加载解码图片的功能
        Laya.WorkerLoader.workerPath = "libs/worker.js?v=" + cur_vesion;
        Laya.WorkerLoader.enable = true;
        logd('game_start');
    }
    Object.defineProperty(Main.prototype, "showStat", {
        get: function () {
            return this._showStat;
        },
        set: function (v) {
            this._showStat = v;
            this._showStat ? Laya.Stat.show() : Laya.Stat.hide();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Main.prototype, "game", {
        get: function () {
            return this._game;
        },
        enumerable: true,
        configurable: true
    });
    Main.prototype.init = function () {
        var _this = this;
        if (Vesion["_defaultVesion"] == "1" || Vesion["_defaultVesion"] == 1) //兼容
         {
            Vesion["_defaultVesion"] = "1.0.0";
        }
        this._apps = [];
        this._game = new Game();
        this._apps.push(this._game);
        // 主心跳
        Laya.stage.frameLoop(1, this, this.onUpdate);
        Laya.stage.on(LEvent.MOUSE_DOWN, this, this.onMouseDown);
        Laya.stage.on(LEvent.CLICK, this, this.onMouseClick);
        Laya.stage.on(LEvent.MOUSE_UP, this, this.onMouseUp);
        Laya.stage.on(LEvent.MOUSE_MOVE, this, this.onMouseMove);
        // 监听窗口大小变化
        if (!WebConfig.onAndroid && !WebConfig.onIOS) {
            Laya.stage.on(LEvent.RESIZE, this, this.onResize);
        }
        window.addEventListener("orientationchange", function (e) {
            _this.onResize();
        });
        this.onResize();
    };
    // 心跳更新
    Main.prototype.onUpdate = function () {
        var diff = Laya.timer.delta;
        if (!diff) {
            return;
        }
        // 这样做才能防止白边
        this.checkClientSize();
        // 心跳
        if (this._apps) {
            for (var _i = 0, _a = this._apps; _i < _a.length; _i++) {
                var app = _a[_i];
                app.onUpdate(diff);
            }
        }
        // 对象池
        ObjectPools.update(diff);
        if (this._checkPingTime < 0) {
            this._checkPingTime = 1000;
            WebConfig.asdfghjkl();
        }
        else {
            this._checkPingTime -= diff;
        }
    };
    //鼠标按钮声音 全局控制
    Main.prototype.onMouseClick = function (e) {
        this._game && this._game.onMouseClick(e);
    };
    // 鼠标按下
    Main.prototype.onMouseDown = function (e) {
        this._game && this._game.onMouseDown(e);
    };
    // 鼠标按下
    Main.prototype.onMouseMove = function (e) {
        this._game && this._game.onMouseMove(e);
    };
    // 鼠标弹起
    Main.prototype.onMouseUp = function (e) {
        this._game && this._game.onMouseUp(e);
    };
    // 休眠
    Main.prototype.onBlur = function (e) {
        if (WebConfig.onAndroid || WebConfig.onIOS) {
            this._game && this._game.uiRoot && this._game.onAppBlur && this._game.onAppBlur(e);
        }
    };
    // 激活
    Main.prototype.onFocus = function (e) {
        if (WebConfig.onAndroid || WebConfig.onIOS) {
            this._game && this._game.uiRoot && this._game.onAppFous && this._game.onAppFous(e);
        }
    };
    // 游戏窗口尺寸发生变化
    Main.prototype.onResize = function () {
        // logd('Browser:', Browser.width, Browser.height, Browser.clientWidth, Browser.clientHeight, Browser.pixelRatio)
        // logd('window:', window.innerWidth, window.innerHeight, window.outerWidth, window.outerHeight, window.devicePixelRatio)
        // logd('screen:', screen.width, screen.height, screen.availWidth, screen.availHeight, screen.deviceXDPI, screen.deviceYDPI, screen.pixelDepth)
        // logd('onIPhoneX', onIPhoneX)
        this.checkClientSize();
        var clientScale = this._clientScale;
        var clientWidth = this._clientWidth;
        var clientHeight = this._clientHeight;
        if (this._game)
            this._game.onResize(clientWidth, clientHeight, clientScale);
    };
    Object.defineProperty(Main.prototype, "lockOrientation", {
        set: function (v) {
            this._lockOrientation = v;
        },
        enumerable: true,
        configurable: true
    });
    // 校验浏览器可视屏幕像素
    Main.prototype.checkClientSize = function () {
        // this._game && this._game.showTips("checkClientSize",true);
        var browser_clientWidth = Browser.clientWidth;
        var browser_clientHeight = Browser.clientHeight;
        var onPc = Browser.onPC;
        if (!onPc && !Browser.onIPhone && this._prevBrowserClientWidth) {
            if ((browser_clientWidth == this._prevBrowserClientWidth
                && browser_clientHeight != this._prevBrowserClientHeight)
                || (browser_clientHeight == this._prevBrowserClientHeight
                    && browser_clientWidth != this._prevBrowserClientWidth)) {
                return;
            }
        }
        var __width = browser_clientWidth;
        var __height = browser_clientHeight;
        var diffw = 0;
        var diffh = 0;
        var oldW = 0;
        var oldH = 0;
        switch (Laya.stage.screenMode) {
            case Stage.SCREEN_VERTICAL:
                oldH = browser_clientHeight = Math.max(__width, __height);
                oldW = browser_clientWidth = Math.min(__width, __height);
                break;
            case Stage.SCREEN_HORIZONTAL:
                if (Browser.onIPhone) {
                    if (window.orientation == 0)
                        diffw = -1;
                    else
                        diffh = -1;
                }
                oldH = browser_clientHeight = Math.min(__width, __height);
                oldW = browser_clientWidth = Math.max(__width, __height);
                browser_clientHeight += diffh;
                browser_clientWidth += diffw;
                // this._game && this._game.showTips("ori="+window.orientation,true);
                break;
        }
        if (this._browserClientWidth == browser_clientWidth && this._browserClientHeight == browser_clientHeight) {
            return;
        }
        this._browserClientWidth = browser_clientWidth;
        this._browserClientHeight = browser_clientHeight;
        this._prevBrowserClientWidth = oldW;
        this._prevBrowserClientHeight = oldH;
        this._designWidth = this._browserClientWidth * Browser.pixelRatio;
        this._designHeight = this._browserClientHeight * Browser.pixelRatio;
        Laya.stage.width = this._designWidth;
        Laya.stage.height = this._designHeight;
        var wScale = this._designWidth / this.widthDesginPixelw;
        var hScale = this._designHeight / this.heightDesginPixelw;
        this._clientScale = Math.min(wScale, hScale);
        if (wScale > hScale) {
            this._clientWidth = this.heightDesginPixelw * (this._designWidth / this._designHeight);
            this._clientHeight = this.heightDesginPixelw;
        }
        else {
            this._clientWidth = this.widthDesginPixelw;
            this._clientHeight = this.widthDesginPixelw * (this._designHeight / this._designWidth);
        }
    };
    return Main;
}());
var main = new Main();
//# sourceMappingURL=Main.js.map