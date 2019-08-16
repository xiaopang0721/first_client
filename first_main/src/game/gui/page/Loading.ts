/**
* name 
*/
module game.gui.page {

	/**
	* 加载界面 
	*/
	export class Loading extends game.gui.base.Page {

		private _viewUI: ui.dating.LoadingUI;
		private _callBack: Handler;
		private _preLoader: PreLoad;
		private _preAssets: any[] = []
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				Path.atlas_ui + "loading.atlas"
			];
			this._isNeedDuang = false;
			this._delta = 500;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this._view = this.createView('dating.LoadingUI', ['dating.Loading_DHUI']);
			this.addChild(this._viewUI);
			this._viewUI.label_Tips.changeText("正在校验文件,请稍等");
			this._viewUI.bar_jd.value = 0;
			this._viewUI.bar_jd["isTween"] = true;
			this._viewUI.box_app.visible = WebConfig.appVersion;
			this._viewUI.txt_appbbh.text = WebConfig.appVersion;
			this._viewUI.box_v.visible = Vesion["_defaultVesion"];
			this._viewUI.txt_bbh.text = Vesion["_defaultVesion"];
		}

		protected onOpen(): void {
			super.onOpen();
			this._viewUI.btn_kefu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			WebConfig.closeHelloImg();
			WebConfig.startJsJump();
			this.changeTips();
		}

		protected onBtnTweenEnd(e: any, target: any): void {
			switch (target) {
				case this._viewUI.btn_kefu:
					WebConfig.openUrl(StringU.substitute("{0}/online_service", WebConfig.gwUrl))
					break;
			}
		}

		//更改提示
		setTip(value: any): void {
			if (!this._viewUI || !value) return;
			let str: string = "";
			let jd: number = -1;
			let showBtn: boolean = false;
			let showSx: boolean = false;
			let addJd: number = 0.05;
			if (typeof (value) == "string") {
				str = value;
			}
			else {
				str = value.length > 0 ? value[0] : "";
				jd = value.length > 1 ? value[1] : -1;
				showBtn = value.length > 2 ? Boolean(value[2]) : false;
				showSx = value.length > 3 ? Boolean(value[3]) : false;
				addJd = value.length > 4 ? value[4] : addJd;
			}
			this._viewUI.label_Tips.changeText(str);
			this._viewUI.label_Tips.autoSize = true;
			this._viewUI.label_Tips.visible = !showBtn;
			this._viewUI.bar_jd.visible = !showBtn;
			this._viewUI.label_jd.visible = !showBtn;
		}

		/**
		 * 
		 * @param str 描述信息
		 * @param value 初始进度
		 * @param add 递增值
		 * @param max 最大值
		 * @param callback 回调
		 * @param preAsset 预加载资源
		 * @param time 心跳间隔
		 */
		setProgress(str: string, callback?: Handler, preAssets?: any[]): void {
			if (!this._viewUI) return;
			this.setTip(str);

			this._callBack = callback;
			this._viewUI.label_Tips.visible = true;
			this._viewUI.bar_jd.visible = true;
			this._viewUI.label_jd.visible = true;
			this._preAssets = preAssets;
			//如果需要加载资源
			this.realLoad();
		}

		private realLoad() {
			if (WebConfig.onIOS) {
				if (!WebConfig.appVersion) return;
				let nowVesion = parseInt(WebConfig.appVersion.toString().replace(/\./g, ""));
				if (nowVesion >= 20) {
					WebConfig.closePreload();
					this._canLoad = WebConfig.hasClosePreload;
				} else {
					this._canLoad = true;
				}
			} else {
				this._canLoad = true;
			}

			if (this._hasLoad || !this._canLoad) return;
			this._hasLoad = true;
			if (this._preAssets && this._preAssets.length) {
				if (!this._preLoader) this._preLoader = new PreLoad();
				this._preLoader.on(LEvent.CHANGED, this, this.onUpdateProgress);
				for (let index = 0; index < this._preAssets.length; index++) {
					let asset = this._preAssets[index];
					let type = asset.indexOf(".sk") == -1 ? RefAsset.GENRAL : RefAsset.TEMPLET;
					this._preLoader.load(asset, type);
				}
			}
		}

		private onUpdateProgress(): void {
			if (this._isClear) return;
			let totalCount = this._preLoader.totalCount;
			let loadCount = this._preLoader.loadCount;
			this.setJinDu(loadCount / totalCount)
			if (loadCount >= totalCount) {
				this.onLoadAssetCom();
			}
		}

		private _isComplete: boolean;
		//资源加载完
		private onLoadAssetCom(): void {
			this.setJinDu(1)
			this._isComplete = true;
		}

		//是否已经加载
		private _hasLoad: boolean;
		//是否可以加载
		private _canLoad: boolean;
		/**
		 * 帧间隔心跳
		 */
		deltaUpdate() {
			this.realLoad();
			if (this._changeTime <= 0) {
				this._changeTime = 2500;
				this.changeTips()
			} else {
				this._changeTime -= 500;
			}
			if (!this._isComplete) return;
			if (!this._viewUI.bar_jd["isTweenEnd"]) return;
			if (this._callBack != null) {
				this._callBack.runWith(this._preLoader);
				this._callBack = null;
			}
		}

		private tips: string[] = [
			"三五好友，一起相约来斗地主",
			"听说下雨天更适合打牌哟",
			"对局中牌的顺序都是随机的，不用担心被人猜中！",
			"在哪里跌倒，就换个牌桌躺下",
			"人是铁，牌是钢，一天不玩憋的慌",
			"牌桌上最伤感情的事，就是你拿豹子我拿金花",
			"不要让人发现自己的牌路，牌路就是技术",
			"虽然认输不会死，但我死也不认输"];
		private _changeTime: number = 2500;
		private _lastIndex: number = 0;
		private changeTips(): void {
			let index = MathU.randomRange(0, this.tips.length - 1);
			if (this._lastIndex == index) {
				this.changeTips();
			} else {
				this._lastIndex = index;
				this._viewUI.txt_ad.text = this.tips[index];
			}
		}

		private setJinDu(value: number): void {
			if (this._viewUI.bar_jd) {
				this._viewUI.bar_jd.value = value;
			}
			if (this._viewUI.label_jd) {
				this._viewUI.label_jd.changeText(Math.floor(value * 100) + "%");
			}
		}

		private _isClear: boolean;
		// 页面关闭
		close(): void {
			if (this._viewUI) {
				this._isClear = true;
				WebConfig.update_appVersion = null;
				Laya.timer.clearAll(this);
				Laya.Tween.clearAll(this);
				this._callBack = null;
				if (this._preLoader) {
					this._preLoader.off(LEvent.CHANGED, this, this.onUpdateProgress);
					this._preLoader.offAll();
					this._preLoader = null;
				}
			}

			super.close();
		}

		createdLoadEffect(): void {
			// 不需要加载特效
		}
	}
}