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
			this.mouseThrough = true;
		}

		// 页面初始化函数
		protected init(): void {
			if (WebConfig.platform == PageDef.BASE_PLATFORM_TYPE_DAZHONGQP) {
				View.regViewRuntime("ui.dating.Loading_DHUI", LoadingDH);
			} else {

				View.regViewRuntime(StringU.substitute("ui.{0}.dating.Loading_DHUI", WebConfig.platform), LoadingDH);
			}
			this._viewUI = this._view = this.createView('dating.LoadingUI', ['dating.Loading_DHUI']);
			this.addChild(this._viewUI);
			(this._viewUI.di as LoadingDH).onOpen(this._game);

			this._viewUI.label_Tips.changeText("正在校验文件,请稍等");
			this._viewUI.bar_jd.value = 0;

			if (!this._handle) {
				this._handle = Handler.create(this, this.progressHandle, null, false);
			}
			this.progressHandle();
		}

		protected onOpen(): void {
			super.onOpen();

			WebConfig.closeHelloImg();
			WebConfig.startJsJump();
			this.changeTips();
		}

		//更改提示
		private setTip(value: any): void {
			if (!this._viewUI || !value) return;
			this._viewUI.label_Tips.changeText(value);
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
			if (this._preAssets && this._preAssets.length) {
				this._hasLoad = true;
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
				this._changeTime -= this._delta;
			}
			if (!this._isComplete) return;
			// if (!this._viewUI.bar_jd.isTweenEnd) return;
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

		private _handle: Handler;
		private setJinDu(value: number): void {
			if (this._viewUI.bar_jd) {
				Laya.Tween.clearAll(this);
				Laya.Tween.to(this._viewUI.bar_jd, { value: value, update: this._handle }, 200);
			}
		}

		private progressHandle() {
			if (this._viewUI.label_jd) {
				this._viewUI.label_jd.changeText(Math.floor(this._viewUI.bar_jd.value * 100) + "%");
			}
			if (this._viewUI["progress_mask"] && this._viewUI.bar_jd.bar) {
				this._viewUI["progress_mask"].width = this._viewUI.bar_jd.bar.width;
				// logd("xxx" + this._viewUI.bar_jd.bar.width)
			}
		}

		private _isClear: boolean;
		// 页面关闭
		close(): void {
			if (this._viewUI) {
				if (this._handle) {
					this._handle.recover();
					this._handle = null;
				}
				(this._viewUI.di as LoadingDH).close();
				this._isClear = true;
				WebConfig.update_appVersion = null;
				Laya.timer.clearAll(this);
				Laya.Tween.clearAll(this);
				this._callBack = null;
				if (this._preLoader) {
					this._preLoader.off(LEvent.CHANGED, this, this.onUpdateProgress);
					this._preLoader.offAll();
					//预加载清理
					// for (let key in this._preLoader["_loadMap"]) {
					// 	if (this._preLoader["_loadMap"].hasOwnProperty(key)) {
					// 		let asset = this._preLoader["_loadMap"][key];
					// 		asset && asset.release();
					// 	}
					// }

					this._preLoader = null;
				}
			}

			super.close();
		}

		createdLoadEffect(): void {
			// 不需要加载特效
		}
	}

	/**
* 加载界面 
*/
	export class LoadingDH extends ui.dating.Loading_DHUI {
		constructor(isHud?) {
			super();
			this.txt_zhenyan.visible = isHud;
			for (let index = 0; index < 10; index++) {
				let ani = this["ani" + index];
				if (!ani) continue;
				ani.stop();
				let start = 0;
				if (window.hasOwnProperty("LoadingDH.index" + index)) {
					start = window["LoadingDH.index" + index];
					!ani.isPlaying && ani.play(window["LoadingDH.index" + index])
				} else {
					start = 0;
					!ani.isPlaying && ani.play();
				}
				// logd("开始" + start)
			}
		}

		onOpen(game: Game): void {
			this.box_app.visible = WebConfig.appVersion;
			this.txt_appbbh.text = WebConfig.appVersion;
			this.box_v.visible = Vesion["_defaultVesion"];
			this.txt_bbh.text = Vesion["_defaultVesion"];
			this.btn_kefu.on(LEvent.CLICK, this, this.onMouseHandle);
		}

		private onMouseHandle(e: LEvent): void {
			switch (e.currentTarget) {
				case this.btn_kefu:
					WebConfig.openUrl(StringU.substitute("{0}/online_service", WebConfig.gwUrl))
					break;
			}
		}

		// 页面关闭
		close(): void {
			this.btn_kefu.off(LEvent.CLICK, this, this.onMouseHandle);
			for (let index = 0; index < 10; index++) {
				let ani = this["ani" + index];
				if (!ani) continue;
				ani.stop();
				window["LoadingDH.index" + index] = ani.index;
				// logd("结束" + window["LoadingDH.index" + index])
			}
		}
	}
}