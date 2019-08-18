import Label = Laya.Label;
import Handler = Laya.Handler;
import Loader = Laya.Loader;
import Browser = Laya.Browser;
import Stage = Laya.Stage;
import LEvent = Laya.Event;
import Sprite = Laya.Sprite;
import LImage = Laya.Image;
import Graphics = Laya.Graphics;
import Rectangle = Laya.Rectangle;
import Texture = Laya.Texture;
import Button = Laya.Button;
import Box = Laya.Box;
import Point = Laya.Point;
import CheckBox = Laya.CheckBox;
import Panel = Laya.Panel;
import HttpRequest = Laya.HttpRequest;          //laya.net.HttpRequest;
import Matrix = Laya.Matrix;                    //laya.maths.Matrix;
import ColorFilter = Laya.ColorFilter;
import Dictionary = Laya.Dictionary;
import Skeleton = Laya.Skeleton;
import Templet = Laya.Templet;                  //laya.ani.bone.Templet
import JsLoader = game.gui.component.JsLoader; 


import Network = core.net.Network;
import UpdateMask = core.obj.UpdateMask;
import GuidObject = core.obj.GuidObject;

import Vesion = core.utils.Vesion;
import RandNickname = core.utils.RandNickname;

import Vector2 = core.utils.Vector2;
import Base64 = core.utils.Base64;
import StringU = core.utils.StringU;
import Random = core.utils.Random;
import L = core.utils.L;



import PreLoad = core.resource.PreLoad;
import RefAsset = core.resource.RefAsset;
import RefSound = core.resource.RefSound;

import Path = game.data.Path;

import RefTemplet = core.resource.RefTemplet;
import Protocols = hanlder.Protocols;
import MapField = game.object.MapField;
import UnitField = game.object.UnitField;
import PlayerDataField = game.object.PlayerDataField;


import WaitEffectPage = game.gui.page.WaitEffectPage;



import Template = game.data.Template;
import PageHandle = game.PageHandle;
import UIRoot = game.UIRoot;
import Game = game.Game;
import IUIRoot = game.gui.base.IUIRoot;
import IGame = game.gui.base.IGame;
import Ireg = game.gui.base.Ireg;

import GeneralUI = game.gui.GeneralUI;
import HUD = game.gui.HUD;
import TopUI = game.gui.TopUI;
import TopunderUI = game.gui.TopunderUI;


import PageDef = game.gui.page.PageDef;
import Page = game.gui.base.Page;
import TabPage = game.gui.base.TabPage;
import TabBox = game.gui.base.TabBox;

let firstAlert: boolean;
// 是否iphoneX
let onIPhoneX: boolean = false;
// 本地调试
let isDebug: boolean = false;
let cur_vesion: string = "10086";
//调试信息开关
let isShowDebug: boolean = false;
let api = window["defexternalInterfacePI"];
// 启动程序
class Main {
    // 美术设计画布像素高宽
    widthDesginPixelw: number = 1280;
    heightDesginPixelw: number = 720;
    // 浏览器可视画布像素高宽
    private _clientWidth: number;
    private _clientHeight: number;
    // 浏览器可视高宽（在设备上的像素高宽）
    private _designWidth: number = 0;
    private _designHeight: number = 0;
    // 客户端画布缩放比
    private _clientScale: number = 1;
    // 是否休眠
    isBlur: number = 0;

    private _showStat: boolean = false;
    get showStat(): boolean {
        return this._showStat;
    }
    set showStat(v: boolean) {
        this._showStat = v;
        this._showStat ? Laya.Stat.show() : Laya.Stat.hide();
    }

    private _apps: Game[];
    // 游戏
    private _game: Game;
    get game(): Game {
        return this._game;
    }

    constructor() {
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
        Laya.SoundManager.useAudioMusic = false
        logd('location.href', location.href);
        let erralert = 0;
        Browser.window.onerror = function (msg, url, line, column, detail) {
            if (erralert++ < 5 && detail) {
                // alert("出错啦，请把此信息截图给研发商\n" + msg + "\n" + detail.stack || detail);
                WebConfig.copyTxt(msg + "\n" + detail.stack || detail)
                let data = { error: msg + "\n" + detail.stack || detail }
                if (isDebug) {
                    throw new Error(data.error.toString());
                } else {
                    localSetItem("client_error", Vesion["_defaultVesion"] + ",devicetype:" + WebConfig.vtype + "," + WebConfig.appVersion + ",SystemInfo:" + WebConfig.systemInfo + ",ModelInfo:" + WebConfig.modelInfo + ",DeviceId:" + WebConfig.deviceId + ",userid:" + WebConfig.info.userid + ",gameid:" + WebConfig.info.gameid + "," + WebConfig.gwUrl + ":" + data.error);
                }
            }
        }

        // 是否wss判断
        let Network_isWss = Network.prototype.isWss;
        Network.prototype.isWss = function (): boolean {
            let isWss = Network_isWss.call(this);
            return isWss;
        }

        isDebug = WebConfig.isDebug;
        //调试信息
        this.showStat = isDebug;
        window["showStatInfo"] = false;
        // 抗锯齿
        Config.isAntialias = true;
        core.utils.Log.LEVEL = 4;

        Vesion.defaultPath = "common/";
        if (WebConfig.isOnline) {
            Vesion.assetUrl = WebConfig.res_url;//远程资源地址
        } else {
            Vesion.assetUrl = ""
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
        let url = WebConfig.version;
        let arr = url.split("?v=");
        cur_vesion = arr && arr.length == 2 ? arr[1].toString() : "10086";
        let v = localGetItem("client_vesion");
        if (v != cur_vesion) {
            localRemoveItem("gameLoadedList");
            localRemoveItem("RefAsset_keys");
            localSetItem("client_vesion", cur_vesion)
        }

        WebConfig.platform = (StringU.getParameter(location.href, "p") || WebConfig.platform).toLowerCase();
        WebConfig.server_name = ((!WebConfig.server_lock && StringU.getParameter(location.href, "p")) || WebConfig.server_name).toLowerCase();
        WebConfig.gwUrl = WebConfig.gwconf[WebConfig.platform];
        WebConfig.ewmbaseUrl = WebConfig.gwUrl + "/qrcode?urlsize=9&urltext=" + encodeURIComponent(WebConfig.gwUrl) + "?invitecode="
        Vesion.addSearchPath(WebConfig.platform + "/", "langpack_1000.bin");
        WebConfig.baseplatform = WebConfig.baseqp[WebConfig.platform];
        logd("platform：", WebConfig.platform, 'baseplatform', WebConfig.baseplatform);
        if (WebConfig.baseplatform) {
            Vesion.addSearchPath(WebConfig.baseplatform + "/", "langpack_1000.bin");
        } else {
            WebConfig.baseplatform = WebConfig.defaultplatform;
        }
        Path.map_far = StringU.substitute(Path.map_far, WebConfig.baseplatform);
        Path.map = StringU.substitute(Path.map, WebConfig.baseplatform);
        WebConfig.logintype = StringU.getParameter(location.href, "logintype") || null;
        !WebConfig.systemInfo && WebConfig.getSystemInfo();//获取手机系统信息
        !WebConfig.modelInfo && WebConfig.getModelInfo();//获取机型
        !WebConfig.deviceId && WebConfig.getDeviceId();//获取唯一标识

        Vesion.once(Vesion.LOAD_VESION_COMPLETE, this, () => {
            this.init();
        });
        Vesion.loadVesionFile("version_h5.bin?v=" + cur_vesion);

        //开启使用WorkerLoader来加载解码图片的功能
        Laya.WorkerLoader.workerPath = "libs/worker.js?v=" + cur_vesion;
        Laya.WorkerLoader.enable = true;

        logd('game_start');
    }

    private init(): void {
        if (Vesion["_defaultVesion"] == "1" || Vesion["_defaultVesion"] == 1)//兼容
        {
            Vesion["_defaultVesion"] = "1.0.0"
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
        window.addEventListener("orientationchange", (e) => {
            this.onResize();
        });
        this.onResize();
    }

    // 心跳更新
    private onUpdate(): void {
        let diff = Laya.timer.delta;
        if (!diff) {
            return;
        }

        // 这样做才能防止白边
        this.checkClientSize();
        // 心跳
        if (this._apps) {
            for (let app of this._apps) {
                app.onUpdate(diff);
            }
        }
        // 对象池
        ObjectPools.update(diff);

        if (this._checkPingTime < 0) {
            this._checkPingTime = 1000;
            WebConfig.asdfghjkl();
        } else {
            this._checkPingTime -= diff;
        }
    }

    private _checkPingTime: number = 0;
    private _lastTarget: Laya.Node;
    //鼠标按钮声音 全局控制
    private onMouseClick(e: LEvent): void {
        this._game && this._game.onMouseClick(e);
    }

    // 鼠标按下
    private onMouseDown(e: LEvent): void {
        this._game && this._game.onMouseDown(e);
    }
    // 鼠标按下
    private onMouseMove(e: LEvent): void {
        this._game && this._game.onMouseMove(e);
    }

    // 鼠标弹起
    private onMouseUp(e: LEvent): void {
        this._game && this._game.onMouseUp(e);
    }

    // 休眠
    private onBlur(e: LEvent): void {
        if (WebConfig.onAndroid || WebConfig.onIOS) {
            this._game && this._game.uiRoot && this._game.onAppBlur && this._game.onAppBlur(e);
        }
    }

    // 激活
    private onFocus(e: LEvent): void {
        if (WebConfig.onAndroid || WebConfig.onIOS) {
            this._game && this._game.uiRoot && this._game.onAppFous && this._game.onAppFous(e);
        }
    }

    // 游戏窗口尺寸发生变化
    onResize(): void {
        // logd('Browser:', Browser.width, Browser.height, Browser.clientWidth, Browser.clientHeight, Browser.pixelRatio)
        // logd('window:', window.innerWidth, window.innerHeight, window.outerWidth, window.outerHeight, window.devicePixelRatio)
        // logd('screen:', screen.width, screen.height, screen.availWidth, screen.availHeight, screen.deviceXDPI, screen.deviceYDPI, screen.pixelDepth)
        // logd('onIPhoneX', onIPhoneX)
        this.checkClientSize();
        let clientScale = this._clientScale;
        let clientWidth = this._clientWidth;
        let clientHeight = this._clientHeight;
        if (this._game)
            this._game.onResize(clientWidth, clientHeight, clientScale);
    }


    // 浏览器可视原始高宽
    private _browserClientWidth: number = 0;
    private _browserClientHeight: number = 0;
    private _prevBrowserClientWidth: number;
    private _prevBrowserClientHeight: number;

    private _lockOrientation: boolean = true;
    private set lockOrientation(v: boolean) {
        this._lockOrientation = v;
    }
    // 校验浏览器可视屏幕像素
    private checkClientSize(): void {
        // this._game && this._game.showTips("checkClientSize",true);
        let browser_clientWidth = Browser.clientWidth;
        let browser_clientHeight = Browser.clientHeight;
        let onPc: boolean = Browser.onPC;
        if (!onPc && !Browser.onIPhone && this._prevBrowserClientWidth) {
            if ((browser_clientWidth == this._prevBrowserClientWidth
                && browser_clientHeight != this._prevBrowserClientHeight)
                || (browser_clientHeight == this._prevBrowserClientHeight
                    && browser_clientWidth != this._prevBrowserClientWidth)) {
                return;
            }
        }

        let __width = browser_clientWidth;
        let __height = browser_clientHeight;
        let diffw: number = 0;
        let diffh: number = 0;
        let oldW: number = 0;
        let oldH: number = 0;
        switch (Laya.stage.screenMode) {
            case Stage.SCREEN_VERTICAL:
                oldH = browser_clientHeight = Math.max(__width, __height);
                oldW = browser_clientWidth = Math.min(__width, __height);
                break;
            case Stage.SCREEN_HORIZONTAL:
                if (Browser.onIPhone) {
                    if (window.orientation == 0) diffw = - 1;
                    else diffh = -1;
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
        let wScale = this._designWidth / this.widthDesginPixelw;
        let hScale = this._designHeight / this.heightDesginPixelw;

        this._clientScale = Math.min(wScale, hScale);

        if (wScale > hScale) {
            this._clientWidth = this.heightDesginPixelw * (this._designWidth / this._designHeight);
            this._clientHeight = this.heightDesginPixelw;
        }
        else {
            this._clientWidth = this.widthDesginPixelw;
            this._clientHeight = this.widthDesginPixelw * (this._designHeight / this._designWidth);
        }
    }
}

let main = new Main();
