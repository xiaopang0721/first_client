let WebConfig: any = {}
let __window: any = window;
let __conf = __window.externalInterfacePI;
WebConfig.isDebug = __conf.isDebug;
WebConfig.jsDebug = __conf.jsDebug;
WebConfig.isOnline = __conf.isOnline;
WebConfig.version = __conf.version;
WebConfig.server_lock = __conf.server_lock;
WebConfig.server_name = __conf.server_name;
WebConfig.gwUrl = __conf.gwUrl;
WebConfig.needMusicPreload = __conf.needMusicPreload;
WebConfig.baseqp = __conf.baseqp;
WebConfig.gwconf = __conf.gwconf;
WebConfig.platform = __conf.platform;//优先href
WebConfig.sub_baseplatform = __conf.sub_baseplatform
WebConfig.baseplatform = __conf.baseplatform
WebConfig.defaultplatform = __conf.defaultplatform;
WebConfig.ai_url = __conf.ai_url;
WebConfig.wxDebug = __conf.wxDebug;
WebConfig.isweihu = __conf.isweihu;
WebConfig.gamelist = null;
WebConfig.account = "";
WebConfig.keyword = "";
WebConfig.yihou = false;
WebConfig.after = false;
WebConfig.info = null;
WebConfig.isConnected = false;
WebConfig.logintype = null;
WebConfig.gameGmOpen = __conf.gameGmOpen;
WebConfig.isPopJianPan = __conf.isPopJianPan;
WebConfig.isSingleEnter = false;
WebConfig.res_url = "rsync_folder/first_res/";
WebConfig.ewmbaseUrl = WebConfig.gwUrl + "/qrcode?urlsize=9&urltext=" + encodeURIComponent(WebConfig.gwUrl) + "?invitecode="
WebConfig.appVersion = "";
WebConfig.downLoadUrl = "";
WebConfig.game_type = 0;
WebConfig.getAppVersion = function (app_vesion) {
	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		if (__window.android && __window.android.getAppVersion) {
			if (WebConfig.appVersion) return WebConfig.appVersion;
			WebConfig.appVersion = __window.android.getAppVersion()
		}
	}
	else if (Laya.Browser.onIOS) {
		if (WebConfig.appVersion) return WebConfig.appVersion;
		__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.getAppVersion && __window.webkit.messageHandlers.getAppVersion.postMessage(null)
	}
}

WebConfig.vConsole = null;
WebConfig.VConsole = function () {
	if (WebConfig.gameGmOpen) {
		if (WebConfig.vConsole) return;
		WebConfig.vConsole = new window["VConsole"]();
		console.log('Hello world');
	}
}
WebConfig.VConsole();

__window.setAppVersion = function (v) {
	if (!WebConfig.appVersion) WebConfig.appVersion = v;
}

WebConfig.hasClosePreload = false;
__window.hasClosePreload = function () {
	WebConfig.hasClosePreload = true;
}

WebConfig.closePreload = function () {
	if (Laya.Browser.onIOS) {
		if (__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.closePreload) {
			__window.webkit.messageHandlers.closePreload.postMessage(null)
		}
	}
}

//打开其他app
WebConfig.openOtherApp = function (url, name) {
	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		if (__window.android && __window.android.openOtherApp) {
			__window.android.openOtherApp(url, name)
		}
	}
	else if (Laya.Browser.onIOS) {
		if (__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.openOtherApp) {
			__window.webkit.messageHandlers.openOtherApp.postMessage([url, name])
		}
	}
}

WebConfig.inviteCode = "";
//获取app包邀请码
WebConfig.getInviteCode = function () {
	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		if (__window.android && __window.android.getInviteCode) {
			if (WebConfig.inviteCode) return WebConfig.inviteCode;
			WebConfig.inviteCode = __window.android.getInviteCode()
		}
	} else if (Laya.Browser.onIOS) {
		if (WebConfig.inviteCode) return WebConfig.inviteCode;
		if (__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.getInviteCode) {
			__window.webkit.messageHandlers.getInviteCode.postMessage(null)
		}
	}
}

__window.setInviteCode = function (v) {
	if (!WebConfig.inviteCode) WebConfig.inviteCode = v
}

WebConfig.systemInfo = null
//获取手机系统信息
WebConfig.getSystemInfo = function () {
	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		if (__window.android && __window.android.getSystemInfo) {
			if (!WebConfig.systemInfo) {
				WebConfig.systemInfo = __window.android.getSystemInfo()
			}
			return WebConfig.systemInfo;
		}
	} else if (Laya.Browser.onIOS) {
		if (__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.getSystemInfo) {
			__window.webkit.messageHandlers.getSystemInfo.postMessage(null)
		}
	}
	return null
}
__window.setSystemInfo = function (v) {
	logd("__window.setSystemInfo:", v)
	WebConfig.systemInfo = v;
}

WebConfig.modelInfo = null
//获取手机型号信息
WebConfig.getModelInfo = function () {
	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		if (__window.android && __window.android.getModelInfo) {
			if (!WebConfig.modelInfo) {
				WebConfig.modelInfo = __window.android.getModelInfo()
			}
			return WebConfig.modelInfo;
		}
	} else if (Laya.Browser.onIOS) {
		if (__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.getModelInfo) {
			__window.webkit.messageHandlers.getModelInfo.postMessage(null)
		}
	}
	return null
}
__window.setModelInfo = function (v) {
	logd("__window.setModelInfo:", v)
	WebConfig.modelInfo = v;
}

WebConfig.deviceId = null
//获取手机唯一标识
WebConfig.getDeviceId = function () {
	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		if (__window.android && __window.android.getDeviceId) {
			if (WebConfig.deviceId) return WebConfig.deviceId;
			WebConfig.deviceId = __window.android.getDeviceId()
		}
	} else if (Laya.Browser.onIOS) {
		if (__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.getDeviceId) {
			if (WebConfig.deviceId) return WebConfig.deviceId;
			__window.webkit.messageHandlers.getDeviceId.postMessage(null);
		}
	}
	return null;
}
__window.setDeviceId = function (v) {
	logd("__window.setDeviceId:", v)
	if (!WebConfig.deviceId) WebConfig.deviceId = v;
}

WebConfig.asdfghjkl = function () {
	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		if (__window.android && __window.android.asdfghjkl) {
			__window.android.asdfghjkl()
			return 1;
		}
	}
	else if (Laya.Browser.onIOS) {
		if (__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.asdfghjkl) {
			__window.webkit.messageHandlers.asdfghjkl.postMessage(null)
			return 2;
		}
	}
	return 0;
}

WebConfig.deviceToken = "";

__window.setDeviceToken = function (v) {
	WebConfig.wxDebug && WebConfig.alert("setDeviceToken:" + v)
	if (!WebConfig.deviceToken) WebConfig.deviceToken = v;
	WebConfig.update_deviceToken != null && WebConfig.update_deviceToken.run && WebConfig.update_deviceToken.run();
}

WebConfig.getDeviceToken = function () {
	WebConfig.wxDebug && WebConfig.alert("getDeviceToken:")
	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		if (__window.android && __window.android.getDeviceToken) {
			if (WebConfig.deviceToken) return this.WebConfig.deviceToken;
			WebConfig.deviceToken = __window.android.getDeviceToken()
			WebConfig.update_deviceToken != null && WebConfig.update_deviceToken.run && WebConfig.update_deviceToken.run();
		}
	}
	else if (Laya.Browser.onIOS) {
		if (WebConfig.deviceToken) return this.WebConfig.deviceToken;
		__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.getDeviceToken && __window.webkit.messageHandlers.getDeviceToken.postMessage(null)
	}
}

WebConfig.alert = function (url_str) {
	if (Laya.Browser.onPC || Laya.Browser.onAndroid) {
		alert(url_str)
	}
	else if (Laya.Browser.onAndroid) {
		WebConfig.showToast(url_str)
	}
	else if (Laya.Browser.onIOS) {
		WebConfig.showToast(url_str)
	}
}

WebConfig.openUrl = function (url_str) {
	try {
		if (Laya.Browser.onPC) {
			window.open(url_str, "", "location=no,status=no,scrollvars=no")
		}
		else if (Laya.Browser.onAndroid) {
			__window.android && __window.android.openUrl && __window.android.openUrl(url_str)
		}
		else if (Laya.Browser.onIOS) {
			__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.openUrl && __window.webkit.messageHandlers.openUrl.postMessage(url_str)
		}
	} catch (error) {
		localSetItem("client_error", Vesion["_defaultVesion"] + "  " + WebConfig.gwUrl + ": openUrl" + (url_str));
	}
}

WebConfig.copyTxt = function (url_str) {
	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		__window.android && __window.android.copyTxt && __window.android.copyTxt(url_str)
	}
	else if (Laya.Browser.onIOS) {
		__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.copyTxt && __window.webkit.messageHandlers.copyTxt.postMessage(url_str)
	}
}

WebConfig.copyUrl = function (url_str) {
	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		__window.android && __window.android.copyUrl && __window.android.copyUrl(url_str)
	}
	else if (Laya.Browser.onIOS) {
		__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.copyUrl && __window.webkit.messageHandlers.copyUrl.postMessage(url_str)
	}
}

WebConfig.showToast = function (str) {
	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		__window.android && __window.android.showToast && __window.android.showToast(str)
	}
	else if (Laya.Browser.onIOS) {
		__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.showToast && __window.webkit.messageHandlers.showToast.postMessage(str)
	}
}

WebConfig.closeHelloImg = function () {
	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		__window.android && __window.android.closeHelloImg && __window.android.closeHelloImg()
	}
	else if (Laya.Browser.onIOS) {
		__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.closeHelloImg && __window.webkit.messageHandlers.closeHelloImg.postMessage(null)
	}
}

WebConfig.openHelloImg = function () {
	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		__window.android && __window.android.openHelloImg && __window.android.openHelloImg()
	}
	else if (Laya.Browser.onIOS) {
		__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.openHelloImg && __window.webkit.messageHandlers.openHelloImg.postMessage(null)
	}
}

WebConfig.isJsJump = false;
WebConfig.startJsJump = function () {
	WebConfig.isJsJump = true;
	logd("startJsJump")
	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		__window.android && __window.android.startJsJump && __window.android.startJsJump()
	}
	else if (Laya.Browser.onIOS) {
		__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.startJsJump && __window.webkit.messageHandlers.startJsJump.postMessage(null)
	}
}

WebConfig.stopJsJump = function () {
	logd("stopJsJump")
	WebConfig.isJsJump = false;
	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		__window.android && __window.android.stopJsJump && __window.android.stopJsJump()
	}
	else if (Laya.Browser.onIOS) {
		__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.stopJsJump && __window.webkit.messageHandlers.stopJsJump.postMessage(null)
	}
}

WebConfig.setNotificationInfo = function (str) {
	if (Laya.Browser.onAndroid) {
		__window.android && __window.android.setNotificationInfo && __window.android.setNotificationInfo(str)
	}
}

WebConfig.saveHttpImage = function (url_str) {
	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		__window.android && __window.android.saveHttpImage && __window.android.saveHttpImage(url_str)
	}
	else if (Laya.Browser.onIOS) {
		__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.saveHttpImage && __window.webkit.messageHandlers.saveHttpImage.postMessage(url_str)
	}
}

/**
 * 保存合成图
 */
WebConfig.saveQrcodeImage = function (back_url, b_w, b_h, url, x, y, w, h) {
	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		__window.android && __window.android.saveQrcodeImage && __window.android.saveQrcodeImage(back_url, b_w, b_h, url, x, y, w, h);
	}
	else if (Laya.Browser.onIOS) {
		__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.saveQrcodeImage && __window.webkit.messageHandlers.saveQrcodeImage.postMessage([back_url, b_w, b_h, url, x, y, w, h])
	}
}

/**
 * app错误返回
 */
__window.appSetErrorInfo = function (str) {
	localSetItem("appSetErrorInfo", str);
}

WebConfig.wxShareCallBack = function () {

}

/**
 * app关闭返回
 */
__window.appClose = function (success) {
	if (WebConfig.appCloseCallBack != null) {
		WebConfig.appCloseCallBack.runWith && WebConfig.appCloseCallBack.runWith([success]);
	}
}

WebConfig.appCloseCallBack = function () {

}

//关闭app
WebConfig.closeApp = function () {
	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		__window.android && __window.android.closeApp && __window.android.closeApp();
	}
	else if (Laya.Browser.onIOS) {

	}
}

/**
 * 微信分享回调
 */
__window.wxShareCallBack = function (success) {
	WebConfig.wxDebug && WebConfig.alert("微信分享回调" + success)
	if (WebConfig.wxShareCallBack != null) {
		WebConfig.wxShareCallBack.runWith && WebConfig.wxShareCallBack.runWith([success]);
	}
}

/**
 * 微信登陆成功
 */
__window.wxLoginSuccess = function (wx_unionid) {
	WebConfig.wxDebug && WebConfig.alert("微信登陆成功 wx_unionid: " + wx_unionid)
	if (WebConfig.wxLoginCallBack != null) {
		WebConfig.wxLoginCallBack.runWith && WebConfig.wxLoginCallBack.runWith([true, wx_unionid])
	}
}

__window.keyBoardShow = function (height) {
	if (WebConfig.keyBoardShowCallBack != null) {
		WebConfig.keyBoardShowCallBack.runWith && WebConfig.keyBoardShowCallBack.runWith([height])
	}
}

__window.keyBoardHide = function (height) {
	if (WebConfig.keyBoardHideCallBack != null) {
		WebConfig.keyBoardHideCallBack.runWith && WebConfig.keyBoardHideCallBack.runWith([height])
	}
}

/**
 * 微信登陆失败
 */
__window.wxLoginFail = function () {
	WebConfig.wxDebug && WebConfig.alert("微信登陆失败")
	if (WebConfig.wxLoginCallBack != null) {
		WebConfig.wxLoginCallBack.runWith && WebConfig.wxLoginCallBack.runWith([false])
	}
}

WebConfig.wxLoginCallBack = function () {

}

/**
 * 微信登陆
 */
WebConfig.wxLogin = function () {

	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		__window.android && __window.android.wxLogin && __window.android.wxLogin()
	}
	else if (Laya.Browser.onIOS) {
		__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.wxLogin && __window.webkit.messageHandlers.wxLogin.postMessage(null)
	}
}

/**
 * 打开微信
 */
WebConfig.wxOpen = function () {
	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		__window.android && __window.android.wxOpen && __window.android.wxOpen()
	}
	else if (Laya.Browser.onIOS) {
		__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.wxOpen && __window.webkit.messageHandlers.wxOpen.postMessage(null)
	}
}

/**
 * 微信登陆注册
 */
WebConfig.wxReg = function (appid) {
	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		__window.android && __window.android.wxReg && __window.android.wxReg(appid)
	}
	else if (Laya.Browser.onIOS) {
		__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.wxReg && __window.webkit.messageHandlers.wxReg.postMessage(appid)
	}
}

/**
 * 注册后台地址
 */
WebConfig.setPlatformUrl = function (url) {
	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		__window.android && __window.android.setPlatformUrl && __window.android.setPlatformUrl(url)
	}
	else if (Laya.Browser.onIOS) {

	}
}

/**
 * 微信分享文字
 * scene 1会话, 2朋友圈, 3收藏
 */
WebConfig.wxShareText = function (txt, scene) {
	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		__window.wxShareCallBack(__window.android && __window.android.wxShareText && __window.android.wxShareText(txt, scene));
	}
	else if (Laya.Browser.onIOS) {
		__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.wxShareText && __window.webkit.messageHandlers.wxShareText.postMessage([txt, scene])
	}
}

/**
 * 微信分享图文
 * scene 1会话, 2朋友圈, 3收藏
 */
WebConfig.wxShareImage = function (url, title, description, scene) {
	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		__window.wxShareCallBack(__window.android && __window.android.wxShareImage && __window.android.wxShareImage(url, title, description, scene));
	}
	else if (Laya.Browser.onIOS) {
		__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.wxShareImage && __window.webkit.messageHandlers.wxShareImage.postMessage([url, title, description, scene])
	}
}

/**
 * 微信分享url
 * scene 1会话, 2朋友圈, 3收藏
 */
WebConfig.wxShareUrl = function (url, title, description, icon_url, scene) {
	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		__window.android && __window.android.wxShareUrl && __window.android.wxShareUrl(url, title, description, icon_url, scene);
	}
	else if (Laya.Browser.onIOS) {
		__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.wxShareUrl && __window.webkit.messageHandlers.wxShareUrl.postMessage([url, title, description, icon_url, scene])
	}
}

/**
 * 微信分享合成图 + 文
 * scene 1会话, 2朋友圈, 3收藏
 */
WebConfig.wxShareQrcodeImg = function (back_url, b_w, b_h, url, x, y, w, h, title, description, scene) {
	if (Laya.Browser.onPC) {

	}
	else if (Laya.Browser.onAndroid) {
		__window.wxShareCallBack(__window.android && __window.android.wxShareQrcodeImg && __window.android.wxShareQrcodeImg(back_url, b_w, b_h, url, x, y, w, h, title, description, scene));
	}
	else if (Laya.Browser.onIOS) {
		__window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.wxShareQrcodeImg && __window.webkit.messageHandlers.wxShareQrcodeImg.postMessage([back_url, b_w, b_h, url, x, y, w, h, title, description, scene])
	}
}


WebConfig.onAndroid = __window.android;
WebConfig.onIOS = __window.webkit && __window.webkit.messageHandlers && __window.webkit.messageHandlers.closeHelloImg && __window.webkit.messageHandlers.openHelloImg;
WebConfig.vtype = WebConfig.onAndroid ? "ANDROID" : (WebConfig.onIOS ? "IOS" : "CLIENT");
WebConfig.device = (WebConfig.onAndroid ? Web_operation_fields.DEVICE_TYPE_ANDROID : (WebConfig.onIOS ? Web_operation_fields.DEVICE_TYPE_IOS : Web_operation_fields.DEVICE_TYPE_WEB)).toString()
WebConfig.app_type = Web_operation_fields.GAME_APP_TYPE_2;
