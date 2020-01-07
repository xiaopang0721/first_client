/**
* name 
*/
module game.gui.page {

	/**
	* 加载界面 
	*/
	export class LoadingSP extends game.gui.base.Page {
		private _viewUI: ui.qpapi.dating.Loading_SPUI;
		private _callBack: Handler;
		private _loader: AssetsLoader;
		private _preAssets: any[] = []
		private _nowVesion: number = 0
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			if (!WebConfig.enterGameLocked) {
				this._asset = [
					Path.atlas_ui + "loading.atlas"
				];
			}
			this._isNeedDuang = false;
			this._delta = 500;
			this.mouseThrough = true;
		}

		// 页面初始化函数
		protected init(): void {
			WebConfig.setMyOrientation(false);
			if (Browser.onPC) {
				Laya.stage.screenMode = Stage.SCREEN_NONE;
			} else {
				Laya.stage.screenMode = Stage.SCREEN_VERTICAL;
			}
			this._viewUI = this._view = this.createView('dating.Loading_SPUI');
			this.addChild(this._viewUI);
			if (this._viewUI) {
				this._viewUI.box_main.scaleX = 1.77;
				this._viewUI.box_main.scaleY = 1.77;
			}
			this._viewUI.label_Tips.changeText("正在校验文件,请稍等");
			this._viewUI.bar_jd.value = 0;

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
			if (!callback || !preAssets) return;
			this._callBack = callback;
			this._preAssets = myCheckArray(preAssets);
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
			// if(this._viewUI.bar_jd.value < 1) return;
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

		private readonly ENUM_TIPS: string[] = [
			"三五好友，一起相约来斗地主",
			"听说下雨天更适合打牌哟",
			"对局中牌的顺序都是随机的，不用担心被人猜中！",
			"在哪里跌倒，就换个牌桌躺下",
			"人是铁，牌是钢，一天不玩憋的慌",
			"牌桌上最伤感情的事，就是你拿豹子我拿金花",
			"不要让人发现自己的牌路，牌路就是技术",
			"虽然认输不会死，但我死也不认输"];
		private _lenTips = 0;
		private _changeTime: number = 2500;
		private _lastIndex: number = 0;
		private changeTips(): void {
			if (!this._lenTips) this._lenTips = this.ENUM_TIPS.length;
			if (!this._lastIndex) {
				this._lastIndex = MathU.randomRange(0, this._lenTips - 1);
			} else {
				this._lastIndex = this._lastIndex++ % this._lenTips;
			}
			try {
				this._viewUI.txt_ad.changeText(this.ENUM_TIPS[this._lastIndex]);
			} catch (error) {

			}
		}

		private setJinDu(value: number): void {
			value = value || 0.001;
			if (this._viewUI.bar_jd) {
				this._viewUI.bar_jd.value = value;
				this.progressHandle();
				//暗金版才有的光效
				if (WebConfig.baseplatform == PageDef.BASE_PLATFORM_TYPE_AJQP) {
					this.effBarSetPos(value);
				}
			}
		}

		private effBarSetPos(value: number) {
			let interval = this._viewUI.bar_jd.width * value;
			this._viewUI["eff_bar"].x = -79 + interval; 
		}

		private progressHandle() {
			if (this._viewUI.label_jd) {
				this._viewUI.label_jd.changeText(Math.floor(this._viewUI.bar_jd.value * 100) + "%");
			}
			if (this._viewUI["progress_mask"] && this._viewUI.bar_jd.bar) {
				this._viewUI["progress_mask"].width = this._viewUI.bar_jd.bar.width;
				// logd("xxx" + this._viewUI.bar_jd.bar.width)
			}

			let curnum = Math.floor(this._viewUI.bar_jd.value * this._preAssets.length);
			let totalnum = this._preAssets.length;
			this.setTip(StringU.substitute("{0}/{1}：正在启动游戏", curnum, totalnum))
		}

		// 页面关闭
		close(): void {
			if (this._viewUI) {

				Laya.timer.clearAll(this);
				Laya.Tween.clearAll(this);
				this._callBack = null;
				this._loader = null;
				this._lastIndex = 0;
			}

			super.close();
		}

		createdLoadEffect(): void {
			// 不需要加载特效
		}
	}
}