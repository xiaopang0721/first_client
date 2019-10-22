/**
* 适配类 主要是重载laya引擎函数
*/
module utils {
	export class Adaptive {
		static init() {
			this.ParseParam();
			this.Stage_resetCanvas();
		}

		private static Stage_resetCanvas() {
			let _resetCanvas = Laya.Stage.prototype['_resetCanvas']
			Laya.Stage.prototype['_resetCanvas'] = function () {
				if (!this.screenAdaptationEnabled) return;
				let canvas = Laya.Render._mainCanvas;
				let canvasStyle = canvas.source.style;
				canvas.size(1, 1);
				// laya的坑
				// Laya.timer.once(100,this,this._changeCanvasSize);
				Laya.timer.callLater(this, this._changeCanvasSize);
			}

			/**画布容器，用来盛放画布的容器。方便对画布进行控制*/
			Laya.getset(true, Browser, 'container', function () {
				Browser.__init__();
				if (!Browser["_container"]) {
					Browser["_container"] = Browser.createElement("div");
					Browser["_container"].id = "layaContainer";
					let loadingContainer = Browser.getElementById("loadingContainer");
					if (loadingContainer) {
						Browser.document.body.insertBefore(Browser["_container"], loadingContainer);
					} else {
						Browser.document.body.appendChild(Browser["_container"]);
					}
				}
				return Browser["_container"];
			}, function (value) {
				Browser["_container"] = value;
			});

			Laya.EventDispatcher.prototype["onAPI"] = function (type, caller, listener, args) {
				if(WebConfig.enterGameLocked) return this;
				return this.on(type,caller,listener,args);
			}
			Laya.EventDispatcher.prototype["offAPI"] = function (type,caller,listener,onceOnly) {
				return this.off(type,caller,listener,onceOnly);
			}

		}

		static clearPreloadView() {
			window["__main_min_close"] = true;
		}

		//解析参数
		private static ParseParam() {
			WebConfig.platform = (StringU.getParameter(location.href, "p") || WebConfig.platform).toLowerCase();
			WebConfig.gameid = (StringU.getParameter(location.href, "gameid") || WebConfig.gameid).toLowerCase();
			WebConfig.sessionkey = (StringU.getParameter(location.href, "sessionkey") || WebConfig.sessionkey).toLowerCase();
			WebConfig.params = (StringU.getParameter(location.href, "params") || WebConfig.params).toLowerCase();
			WebConfig.enterGameLocked = WebConfig.gameid && WebConfig.sessionkey ? true : false;
			WebConfig.isSingleEnter = (StringU.getParameter(location.href, "logintype") == Web_operation_fields.ACCOUNT_TYPE_USERNAME.toString()) ? true : false;
			WebConfig.server_name = (StringU.getParameter(location.href, "p") || WebConfig.server_name).toLowerCase();
			WebConfig.gwUrl = WebConfig.gwconf[WebConfig.platform];
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
			!WebConfig.systemInfo && WebConfig.getSystemInfo();//获取手机系统信息
			logd("systemInfo", WebConfig.systemInfo);
			!WebConfig.modelInfo && WebConfig.getModelInfo();//获取机型
			logd("modelInfo", WebConfig.modelInfo);
			!WebConfig._deviceId && WebConfig.getDeviceId();//获取唯一标识
			logd("deviceId", WebConfig._deviceId);
			!WebConfig.deviceToken && WebConfig.getDeviceToken();//获取设备号
			logd("deviceToken", WebConfig.deviceToken);
			!WebConfig.appVersion && WebConfig.getAppVersion();//获取app版本号
			logd("appVersion", WebConfig.appVersion);
			!WebConfig.inviteCode && WebConfig.getInviteCode();//获取邀请码
			logd("inviteCode", WebConfig.inviteCode);
			!WebConfig.webParms && WebConfig.getWebParms();//获取额外参数
			logd("webParms", WebConfig.webParms);
		}


	}
}