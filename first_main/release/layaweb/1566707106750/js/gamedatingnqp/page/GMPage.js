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
* name GM命令
*/
var gamedatingnqp;
(function (gamedatingnqp) {
    var page;
    (function (page) {
        var GMPage = /** @class */ (function (_super) {
            __extends(GMPage, _super);
            function GMPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._asset = [];
                return _this;
            }
            // 页面初始化函数
            GMPage.prototype.init = function () {
                this._viewUI = this.createView('nqp.dating.GMPageUI');
                this.addChild(this._viewUI);
            };
            // 页面打开时执行函数
            GMPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_send.on(LEvent.CLICK, this, this.sendGm);
                this._viewUI.on(LEvent.KEY_DOWN, this, this.onKeyDown);
                this._viewUI.txt_gm.focus = true;
            };
            GMPage.prototype.onKeyDown = function (e) {
                if (e.keyCode == Laya.Keyboard.ENTER) {
                    this.sendGm(e);
                }
            };
            GMPage.prototype.sendGm = function (e) {
                var mess = this._viewUI.txt_gm.text;
                if (mess.indexOf("@") >= 0) {
                    //this._viewUI.input_msg.text = "";
                    //判断gm密码锁是否开启
                    if (mess == "@open") {
                        WebConfig.gameGmOpen = !WebConfig.gameGmOpen;
                        this._game.uiRoot.topUnder.showTips("GM" + (WebConfig.gameGmOpen ? "开启" : "关闭"));
                        return;
                    }
                    //gm命令锁没开
                    if (!WebConfig.gameGmOpen && !isDebug) {
                        this._game.uiRoot.topUnder.showTips("GM未开启");
                        return;
                    }
                    if (mess.indexOf("@c 错误") != -1) {
                        var ss = "模拟堆栈 Uncaught TypeError: Cannot read property 'qpdz/' of undefined";
                        ss += "\nTypeError: Cannot read property 'qpdz/' of undefined";
                        ss += "\nat Function.t.formatURL (http://res.99dianhua.com/libs/all_libs.min.js?v=292:1:739852)";
                        ss += "\nat Function.Laya.URL.formatURL (http://res.99dianhua.com/libs/all_libs.min.js?v=292:1:738976)";
                        ss += "\nat E.e._loadImage (http://res.99dianhua.com/libs/all_libs.min.js?v=292:1:181662)";
                        ss += "\nat E.t (http://res.99dianhua.com/libs/all_libs.min.js?v=292:1:199223)";
                        ss += "\nat n.t.run (http://res.99dianhua.com/libs/all_libs.min.js?v=292:1:11497)";
                        ss += "\nat n.t.event (http://res.99dianhua.com/libs/all_libs.min.js?v=292:1:9156)";
                        ss += "\nat n.e.imageLoaded (http://res.99dianhua.com/libs/all_libs.min.js?v=292:1:198078)";
                        ss += "\nat n.e.workerMessage (http://res.99dianhua.com/libs/all_libs.min.js?v=292:1:197770)";
                        ss += "\nat Worker.worker.onmessage (http://res.99dianhua.com/libs/all_libs.min.js?v=292:1:197632)";
                        var data_1 = { info: ss };
                        var url = WebConfig.ai_url + "/sys/clientError";
                        utils.Request.sendA(url, data_1, Handler.create(this, function () { logd("报错日志回调啊啊啊啊啊"); }));
                        return;
                    }
                    if (mess.indexOf("@调试") == 0) {
                        Laya.Stat.hide();
                        this.close();
                        return;
                    }
                    if (mess.indexOf("@c 掉线") == 0) {
                        this._game.network.close();
                        return;
                    }
                    if (mess.indexOf("@c 断言") == 0) {
                        throw "gm command";
                    }
                    //具体逻辑加这里
                    if (mess.indexOf("@ui") == 0) {
                        // let BuyuPageDef = eval("gamebuyu.page.BuyuPageDef")
                        // BuyuPageDef.myinit("buyu");
                        // let uiInfo = mess.split(" ");
                        // this._game.uiRoot.general.open("buyu" + uiInfo[1]);
                        // this.close();
                        var str = mess.substr(4);
                        this._game.uiRoot.general.open("dating" + str);
                        return;
                    }
                    if (mess.indexOf("@c dd") == 0) {
                        // this._game.uiRoot.topUnder.showConfirmTips("测试弹窗", () => {
                        // 	this._game.uiRoot.topUnder.showTips("点击确定！");
                        // });
                        isShowDebug = !isShowDebug;
                        return;
                    }
                    //发送GM
                    this._game.network.call_gm_command(mess);
                    this._game.uiRoot.topUnder.showTips("发送GM成功");
                }
                else {
                    this._game.uiRoot.topUnder.showTips("无效GM");
                }
                this.close();
            };
            // 清理下页面
            GMPage.prototype.close = function () {
                _super.prototype.close.call(this);
            };
            return GMPage;
        }(game.gui.base.Page));
        page.GMPage = GMPage;
    })(page = gamedatingnqp.page || (gamedatingnqp.page = {}));
})(gamedatingnqp || (gamedatingnqp = {}));
//# sourceMappingURL=GMPage.js.map