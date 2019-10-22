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
		private _loader: AssetsLoader;
		private _preAssets: any[] = []
		private _nowVesion: number = 0
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

			if (this._viewUI["progress_mask"]) {
				this._viewUI["progress_mask"].width = 0;
			}

			this.progressHandle();
		}

		protected onOpen(): void {
			super.onOpen();
			utils.Adaptive.clearPreloadView();
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
				this._nowVesion = this._nowVesion || parseInt(WebConfig.appVersion.toString().replace(/\./g, ""));
				let nowVesion = this._nowVesion
				if (nowVesion < 30) {
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
				if (!this._loader) this._loader = LoadingMgr.ins.createAssertLoader("dating", true);
				this._loader.on(LEvent.PROGRESS, this, this.onUpdateProgress);
				this._loader.load(this._preAssets, Handler.create(this, this.onLoadAssetCom), true);
			}
		}

		private onUpdateProgress(v: number): void {
			this.setJinDu(v);
		}

		//资源加载完
		private onLoadAssetCom(): void {
			this.setJinDu(1);
			if (this._callBack != null) {
				this._callBack.run();
				this._callBack = null;
			}
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
			value = value || 0.001;
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

		// 页面关闭
		close(): void {
			if (this._viewUI) {
				if (this._handle) {
					this._handle.recover();
					this._handle = null;
				}
				(this._viewUI.di as LoadingDH).close();

				Laya.timer.clearAll(this);
				Laya.Tween.clearAll(this);
				this._callBack = null;
				this._loader = null;
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
					//loading客服外跳
					let ipconf = WebConfig.ipconf && WebConfig.ipconf[WebConfig.platform];
					logd("客服外跳ip：", ipconf)
					if (ipconf) {
						utils.Request.sendA(ipconf + "/api/get_serviceonline", {}, Handler.create(this, (v) => {
							logd("客服外跳地址：", v.data)
							if (v) {
								WebConfig.openUrl(v.data);
							}
						}));
					} else {
						WebConfig.openUrl(StringU.substitute("{0}/online_service", WebConfig.gwconf[WebConfig.platform]))
					}
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