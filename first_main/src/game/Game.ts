module game {
	export class Game implements IGame {
		// 客户端画布缩放比
		protected _clientScale: number = 1;
		// 浏览器可视画布像素高宽
		protected _clientWidth: number = 0;
		protected _clientHeight: number = 0;
		//debug缩放比例
		sceneScaleDiff: number = 0;
		// 场景基础缩放比(基于客户端画布缩放比)
		protected _sceneScale: number = 1;
		// 场景当前缩放比
		protected _sceneCurScale: number = 0;
		// 场景缩放速率
		private _sceneScaleSpeed: number = 0;
		get clientScale(): number {
			return this._clientScale;
		}

		get clientWidth() {
			return this._clientWidth;
		}

		get clientHeight() {
			return this._clientHeight;
		}
		get sceneScale(): number {
			return this._sceneScale * (1 + this.sceneScaleDiff * 0.01);
		}
		set sceneScale(v: number) {
			this._sceneScale = v;
		}

		get sceneCurScale(): number {
			return this._sceneCurScale;
		}
		set sceneCurScale(v: number) {
			this._sceneCurScale = v;
		}

		set sceneScaleSpeed(v: number) {
			this._sceneScaleSpeed = v;
		}

		// 判断是否全面屏
		get isFullScreen(): boolean {
			// logd('********************', this._clientWidth, this._clientHeight, this._clientWidth / this._clientHeight);
			let rate: number = this._clientWidth / this._clientHeight;
			return rate >= 1.8;
		}

		// ui
		protected _uiRoot: UIRoot;
		get uiRoot(): UIRoot {
			return this._uiRoot;
		}

		constructor() {
			this.init();
		}

		// 初始化函数
		protected init(): void {
			// 初始化ui
			this._uiRoot = new UIRoot(this);
			Laya.stage.addChild(this._uiRoot);

			let assetsLoader: AssetsLoader = new AssetsLoader();
			let assetList: any = [
				Path.atlas_ui + 'logo.atlas',
				Path.atlas_ui + 'loading.atlas',
			]

			assetsLoader.load(assetList, Handler.create(this, () => {
				this.loadNeedAsset();
			}), false, 0);

			let soundVolume: string = localGetItem("soundVolume")
			let musicVolume: string = localGetItem("musicVolume")
			Laya.SoundManager.setSoundVolume(soundVolume == null ? 1 : parseFloat(soundVolume));
			Laya.SoundManager.setMusicVolume(musicVolume == null ? 1 : parseFloat(musicVolume));
		}

		// 加载必要素材
		protected loadNeedAsset(): void {
			this._uiRoot.showLoadProgress("资源加载中...");
			JsLoader.ins.startLoad("component", Handler.create(this, (asserts) => {
				JsLoader.ins.startLoad("dating", Handler.create(this, (asserts) => {
					if (WebConfig.enterGameLocked) {
						JsLoader.ins.startLoad(WebConfig.gameid, Handler.create(this, (asserts) => {
							this._uiRoot.showLoadProgress("资源加载中...", Handler.create(this, this.onNeedAssetLoaded), asserts);
						}));
					} else {
						this._uiRoot.showLoadProgress("资源加载中...", Handler.create(this, this.onNeedAssetLoaded), asserts);
						let gameid = localGetItem("local_game_id");
						if (gameid) {
							updateGameJS(gameid);
						}
					}
				}));

			}));
		}

		public onAppBlur(e?: any) {
			if (!this.__gamedating) return;
			this.datingGame.onAppBlur(e);
		}

		public onAppFous(e?: any) {
			if (!this.__gamedating) return;
			this.datingGame.onAppFous(e);
		}

		private _isLoadComplete: boolean;
		public get isLoadComplete() {
			return this._isLoadComplete;
		}
		//资源是否加载完毕
		private onNeedAssetLoaded(): void {
			this._isLoadComplete = true;
			//是否测试版本
			Laya.stage.event(LEvent.RESIZE);
			if (WebConfig.enterGameLocked) {
				this.sceneGame.connectSoctet(() => {
					this.network.call_get_session(WebConfig.sessionkey, "", "");
				}, "call_get_session");
			} else {
				if (isDebug) {
					this.closeProssgress();
					this.openLoginPage();
				} else {
					this.sceneGame.login("Game onNeedAssetLoaded");
				}
			}
		}

		showLoadProgress(): void {
			this._uiRoot && this._uiRoot.showLoadProgress("正在连接中...");
		}

		private closeProssgress(): void {
			this._uiRoot.closeLoadProgress();
		}

		// 鼠标点击
		onMouseClick(e: LEvent): void {
			if (this._uiRoot && this._uiRoot.onMouseClick(e)) {
				return;
			}
		}
		// 鼠标按下
		onMouseDown(e: LEvent): void {
			if (this._uiRoot && this._uiRoot.onMouseDown(e)) {
				return;
			}

			if (this.__gamecomponent) {
				for (let scene of this.sceneGame.scenesWithOperator) {
					if (scene instanceof this.__gamecomponent.SceneOperator) {
						scene.onMouseDown(e);
					}
				}
			}
		}

		private _gamecomponent: any;
		get __gamecomponent() {
			if (!this._isLoadComplete) return null;
			return this._gamecomponent = this._gamecomponent || checkGameJsLoad("component");
		}

		get sceneGame() {
			if (!this._isLoadComplete) return null;
			return this.__gamecomponent.SceneGame.ins;
		}

		get sceneObjectMgr() {
			return this.sceneGame.sceneObjectMgr;
		}

		get sync() {
			return this.sceneGame.sync;
		}

		get network() {
			return this.sceneGame.network;
		}

		copyUrl() {
			if (!this.__gamedating) return;
			this.datingGame.copyUrl();
		}

		get mainScene() {
			return this.sceneGame.mainScene;
		}


		/**
		 * 播放音效
		 * @param url 音效
		 * @param isOnlyOne 是否只有一个
		 */
		private _lastSoundTime: number;
		playSound(url: string, isOnlyOne: boolean = true): void {
			if (url == Path.music_btn && Laya.timer.currTimer - this._lastSoundTime < 500) {
				return;
			}
			this._lastSoundTime = Laya.timer.currTimer;
			//为什么先取音量再设置音量？
			let volume = Laya.SoundManager.soundVolume;
			Laya.SoundManager.setSoundVolume(volume);
			if (volume <= 0) return;
			isOnlyOne && this.stopSound(url);
			Laya.timer.frameOnce(1, this, () => {
				Laya.SoundManager.playSound(url);
			})
		}

		/**
		 * 关闭所以音效
		 */
		stopAllSound(): void {
			Laya.SoundManager.stopAllSound()
		}

		/**
		 * 关闭url音效
		 * @param url 
		 */
		stopSound(url: string): void {
			Laya.SoundManager.stopSound(url)
		}

		private _musicUrl: string = "";
		public get musicUrl(): string {
			return this._musicUrl;
		}

		/**
		 * 播放音乐
		 * @param url 
		 * @param loops 
		 * @param complete 
		 * @param startTime 
		 */
		playMusic(url: string, loops: number = 0, complete?: Handler, startTime?: number): Laya.SoundChannel {
			if (this._musicUrl != "")
				this.stopMusic();
			this._musicUrl = url;
			Laya.timer.frameOnce(1, this, () => {
				let volume = Laya.SoundManager.musicVolume;
				Laya.SoundManager.musicMuted = false;
				let channel = Laya.SoundManager.playMusic(url, loops, complete, startTime);
				Laya.SoundManager.setMusicVolume(volume);
				return channel;
			})
			return null;
		}

		/**
		 * 停止音乐
		 */
		stopMusic(): void {
			Laya.SoundManager.stopMusic();
			if (this._musicUrl != "")
				Laya.SoundManager.destroySound(this._musicUrl);
		}

		private _gamedating: any;
		get __gamedating() {
			if (!this._isLoadComplete) return null;
			return this._gamedating = this._gamedating || checkGameJsLoad("dating");
		}

		get datingGame() {
			if (!this._isLoadComplete) return null;
			return this.__gamedating.DatingGame.ins;
		}

		get isLockGame(): boolean {
			return this.sceneGame.isLockGame;
		}

		public get cardRoomMgr() {
			return this.sceneGame.cardRoomMgr;
		}

		public get qifuMgr() {
			return this.datingGame.qifuMgr;
		}

		public checkClientVesion(isShowTips?: boolean) {
			this.datingGame.checkClientVesion(isShowTips)
		}

		public wxShareUrl(title: string, description: string, img_url: string) {
			if (!this.__gamedating) return;
			this.datingGame.wxShareUrl(title, description, img_url);
		}

		public wxOpen() {
			if (!this.__gamedating) return;
			this.datingGame.wxOpen();
		}

		setIsLockGame(v: boolean, playAni?: boolean, sign?: string) {
			if (this.__gamecomponent) {
				this.sceneGame.setIsLockGame(v, playAni, sign);
			}
		}

		// 鼠标按下
		onMouseMove(e: LEvent): void {
			if (this._uiRoot && this._uiRoot.onMouseMove(e)) {
				return;
			}

			if (this.__gamecomponent) {
				for (let scene of this.sceneGame.scenesWithOperator) {
					if (scene instanceof this.__gamecomponent.SceneOperator) {
						scene.onMouseMove(e);
					}
				}
			}
		}

		// 鼠标弹起
		onMouseUp(e: LEvent): void {
			if (this._uiRoot && this._uiRoot.onMouseUp(e)) {
				return;
			}

			if (this.__gamecomponent) {
				for (let scene of this.sceneGame.scenesWithOperator) {
					if (scene instanceof this.__gamecomponent.SceneOperator) {
						scene.onMouseUp(e);
					}
				}
			}
		}

		clearMgr(): void {
			if (this.__gamecomponent) {
				this.sceneGame.clearMgr();
			}
			if (this.__gamedating) {
				this.datingGame.clearMgr();
			}
		}

		//打开登陆界面
		public openLoginPage() {
			if (!this.__gamedating) return;
			this.datingGame.openLoginPage();
		}

		// 心跳更新
		onUpdate(diff: number): void {
			this._uiRoot && this._uiRoot.update(diff);
			if (this.__gamedating && this.datingGame) {
				this.datingGame.onUpdate(diff)
			}

			if (this.__gamecomponent) {
				this.sceneGame.onUpdate(diff)
				for (let scene of this.sceneGame.scenes) {
					if (this._sceneCurScale != this.sceneScale) {
						if (this._sceneCurScale <= 0) {
							this._sceneCurScale = this.sceneScale;
						}
						else {
							let d = this.sceneScale - this._sceneCurScale;
							if (Math.abs(d) < 0.002) {
								this._sceneCurScale = this.sceneScale;
							}
							else {
								let scaleSpeed = this._sceneScaleSpeed;
								if (!scaleSpeed) {
									scaleSpeed = d / 10;
								}
								this._sceneCurScale += scaleSpeed;
							}
						}

						this.sceneResize(this._sceneCurScale)
					}
					scene.update(diff);
				}
			}


			//素材管理心跳
			RefAsset.update(diff);
			RefSound.update(diff);
		}

		private sceneResize(scale: number): void {
			let sceneScle = this._clientScale * scale;
			let sceneWidth = this._clientWidth / scale;
			let sceneHeight = this._clientHeight / scale;
			let x = 0, y = 0, maxHeight = 0;

			if (this.__gamecomponent) {
				for (let scene of this.sceneGame.scenes) {
					x = 0
					y = 0
					maxHeight = 0
					scene.scale(sceneScle, sceneScle);
					scene.resize(sceneWidth, sceneHeight);
					let w = sceneWidth * sceneScle * scene.selfScale;
					let h = sceneHeight * sceneScle * scene.selfScale;
					if (x + w > Laya.stage.width) {
						x = 0;
						y += maxHeight;
					}
					scene.x = x;
					scene.y = y;
					x += w;
					maxHeight = Math.max(maxHeight, h);
				}
			}
		}


		/**
		 * 弹窗提示
		 * @param str  字符串
		 * @param ecb 确定
		 * @param ccb 取消
		 * @param isOnlyOK  是否只有一个按钮 =》确定
		 * @param okSkin 确定的皮肤
		 */
		public alert(str: string, ecb: Function, ccb: Function, isOnlyOK: boolean = true, okSkin?: string, cancleSkin?: string, titleSkin?: string): void {
			this._uiRoot.alert(str, ecb, ccb, isOnlyOK, okSkin, cancleSkin, titleSkin)
		}


		/**
	  * 提示
	  * @param str 
	  * @param isTop 是否顶层
	  */
		public showTips(...agrs): void {
			let _args = agrs;
			if (isDebug) {
				core.utils.Log.DATE.setTime(Date.now());
				_args.unshift(core.utils.Log.DATE.getHours() + ":" + (core.utils.Log.DATE.getMinutes() + 1) + ":" + core.utils.Log.DATE.getSeconds() + ":" + core.utils.Log.DATE.getMilliseconds());
				_args.unshift("[D]");
			}
			let str = _args.join(" ");
			if (!str) return;
			this._uiRoot && this._uiRoot.topUnder.showTips(str);
		}

		// 游戏窗口尺寸发生变化
		onResize(width: number, height: number, clientScale: number): void {
			this._clientWidth = width;
			this._clientHeight = height;
			this._clientScale = clientScale;

			let x = 0, y = 0;
			//判断IPhoneX
			if (onIPhoneX) {
				//Iphone X 安全区域距离顶部
				const IPHONEX_TOP: number = 44 / 812;
				//Iphone X 安全区域距离底部
				const IPHONEX_BOTTOM: number = 34 / 812;
				if (Laya.stage.screenMode == Stage.SCREEN_HORIZONTAL) {
					//正横屏 
					width = width * (1 - IPHONEX_TOP - IPHONEX_BOTTOM);
					// x偏移
					x = width * IPHONEX_TOP * clientScale;
				}
				else if (Laya.stage.screenMode == Stage.SCREEN_VERTICAL) {
					// 竖屏
					height = height * (1 - IPHONEX_TOP - IPHONEX_BOTTOM);
					// y偏移
					y = height * IPHONEX_TOP * clientScale;
				} else {
					if (window.orientation == 0) {
						// 竖屏
						height = height * (1 - IPHONEX_TOP - IPHONEX_BOTTOM);
						// y偏移
						y = height * IPHONEX_TOP * clientScale;
					} else if (window.orientation == 90) {
						//正横屏 
						width = width * (1 - IPHONEX_TOP - IPHONEX_BOTTOM);
						// x偏移
						x = width * IPHONEX_TOP * clientScale;
					} else if (window.orientation == -90) {
						//反横屏
						width = width * (1 - IPHONEX_TOP - IPHONEX_BOTTOM);
						// x偏移
						x = width * IPHONEX_BOTTOM * clientScale;
					}
				}
			}
			this._sceneCurScale == this.sceneScale && this.sceneResize(this._sceneCurScale);

			if (this._uiRoot) {
				this._uiRoot.x = x;
				this._uiRoot.y = y;
				this._uiRoot.scale(clientScale, clientScale);
				this._uiRoot.resize(width, height, this._clientWidth, this._clientHeight);
			}
		}
	}
}
