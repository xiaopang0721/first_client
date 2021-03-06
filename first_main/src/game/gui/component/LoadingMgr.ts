/**
* name 加载资源管理器
*/
module game.gui.component {
	export class LoadingMgr {

		private static _ins: LoadingMgr;
		private _map: { [key: string]: string } = {}
		private _hasLoad: { [key: string]: string } = {}
		static get ins(): LoadingMgr {
			if (!this._ins) {
				this._ins = new LoadingMgr();
				let gameLoadedObj = localGetItem("gameLoadedObj");
				if (gameLoadedObj) {
					this._ins._hasLoad = JSON.parse(gameLoadedObj) || {};
				}
			}
			return this._ins;
		}

		//是否加载完成
		public isLoaded(gameid: string) {
			return this._hasLoad[gameid] == findGameVesion(gameid);
		}

		public isInLoadList(gameid: string) {
			return this._map[gameid] == findGameVesion(gameid);
		}

		private _preLoader: LoadingRender;
		private _waitList: LoadingRender[] = []
		load(gameid: string, preAsset: any[], handle?: Handler, priority: number = 4) {
			if (this.isLoaded(gameid) || this.isInLoadList(gameid)) {
				return false;
			}
			this._map[gameid] = findGameVesion(gameid);
			if (this.isLoading) {//加载中 进入等待列表
				let preLoader = new LoadingRender(gameid, preAsset, handle, priority);
				if (priority == 0) {
					this._waitList.unshift(preLoader);
				} else {
					this._waitList.push(preLoader);
				}
				return true;
			}

			if (preAsset && preAsset.length) {
				if (!this._preLoader) {
					this._preLoader = new LoadingRender(gameid, preAsset, handle, priority);
					if (this._preLoader.startLoad()) {
						return true;
					}
				}

			}
			return false;
		}

		//是否在加载中
		get isLoading() {
			return this._preLoader || this._waitList && this._waitList.length > 0;
		}

		private _assetsLoader: { [key: string]: AssetsLoader } = {};
		//创建缓存池
		public createAssertLoader(gameId: string, createNew?: boolean) {
			if (!this._assetsLoader[gameId] && createNew) {
				this._assetsLoader[gameId] = new AssetsLoader();
			}
			return this._assetsLoader[gameId];
		}

		public clearGameAsset(gameId: string, checknow?: boolean) {
			for (let key in this._assetsLoader) {
				if (this._assetsLoader.hasOwnProperty(key)) {
					if (gameId != key) continue;
					let assertloader = this._assetsLoader[key];
					assertloader && assertloader.offAll();
					assertloader && assertloader.clear(checknow);
					assertloader = null;
					this._assetsLoader[key] = null;
					delete this._assetsLoader[key];
				}
			}
		}

		/**
		 * 重新hold住游戏
		 * @param gameId 
		 * @param handle 
		 */
		public retain(gameId: string, assets: Array<string>, handle: Handler) {
			let assertloader = this.createAssertLoader(gameId);
			if (assertloader) {
				assertloader.retain(assets, handle);
			}
		}

		public update(diff: number) {
			this._assetsLoader
		}

		/**
		 * 清理
		 * @param ignore 忽略id
		 */
		public clearAssert(ignore?: string[] | string) {
			for (let key in this._assetsLoader) {
				if (this._assetsLoader.hasOwnProperty(key)) {
					if (ignore && ignore.indexOf(key) != -1) continue;
					let assertloader = this._assetsLoader[key];
					if (assertloader) {
						assertloader.offAll()
						assertloader.clear();
						assertloader = null;
					}
					this._assetsLoader[key] = null;
					delete this._assetsLoader[key];
				}
			}
		}

		//获取进度
		getProgress(gameid: string) {
			if (this._preLoader && this._preLoader.gameId == gameid) {//如果是正在加载的 内容 那就显示进度
				return this._preLoader.progress;
			}

			return 0;
		}

		cancleUnLoads(checknow?: boolean) {
			//重置 其实就是清掉未加载的gameid
			this._map = {};
			for (let key in this._hasLoad) {
				if (this._hasLoad.hasOwnProperty(key)) {
					this._map[key] = this._hasLoad[key];
				}
			}
			if (this._preLoader) {
				clearJSGame(this._preLoader.gameId);
				this._preLoader.preAsset && Laya.loader.cancelLoadByUrls(this._preLoader.preAsset);
				this._preLoader.clearLoadingRender(checknow);
				this._preLoader = null;
			}
			for (let index = 0; index < this._waitList.length; index++) {
				let preLoader = this._waitList[index];
				if (preLoader) {
					preLoader.preAsset && Laya.loader.cancelLoadByUrls(preLoader.preAsset);
					preLoader.clearLoadingRender(checknow);
					preLoader = null;
				}
			}

			this._waitList.length = 0;//等待列表清空
		}

		freeAndLoadNext() {
			if (this._preLoader) {
				let gameID = this._preLoader.gameId;
				let nowVesion = findGameVesion(gameID);
				if (gameID && nowVesion && this._hasLoad[gameID] != nowVesion) {
					this._hasLoad[gameID] = nowVesion;
				}
				//再去清理
				this._preLoader.clearLoadingRender();
				this._preLoader = null;
			}
			if (this._waitList.length > 0) {
				this._preLoader = this._waitList.shift();
				this._preLoader && this._preLoader.startLoad();
			}
		}
	}

	export class LoadingRender {
		private _gameId: string;
		private _preAssets: any[];
		private _priority: number;
		private _handle: Handler;
		constructor(gameid?: string, preAssets?: any[], handle?: Handler, priority?: number) {
			this._gameId = gameid;
			this._preAssets = preAssets;
			this._priority = priority;
			this._handle = handle;
		}

		get progress() {
			return this._obj.progress || 0.001;
		}

		get gameId() {
			return this._gameId;
		}

		private _formatUrl: string[] = []
		get preAsset() {
			if (!this._formatUrl.length) {
				this._preAssets.forEach(url => {
					this._formatUrl.push(Laya.URL.formatURL(url));
				});
			}
			return this._formatUrl;
		}

		private _assertloader: AssetsLoader;
		startLoad(): boolean {
			if (this._assertloader) return false;
			if (!this._assertloader) {
				this._assertloader = LoadingMgr.ins.createAssertLoader(this._gameId, true);
			}
			this._assertloader.on(LEvent.PROGRESS, this, this.onUpdateProgress);
			this._assertloader.load(this._preAssets, Handler.create(this, this.onLoadAssetCom), true, this._priority);
			return true;
		}

		private _obj: any = { progress: 0.001 }
		private onUpdateProgress(v: number): void {
			if (v && this._obj.progress && this._obj.progress == v) return;
			this._obj.progress = v;
			if (this._obj.progress >= 1)
				this.onLoadAssetCom();
		}

		//资源加载完
		private onLoadAssetCom(): void {
			let gameLoadedObj = localGetItem("gameLoadedObj");
			let obj: { [key: string]: string } = {};
			if (gameLoadedObj) {
				obj = JSON.parse(gameLoadedObj) || {}
			}
			obj[this._gameId] = findGameVesion(this._gameId);
			gameLoadedObj = JSON.stringify(obj);
			localSetItem("gameLoadedObj", gameLoadedObj);
			let name = PageDef.getNameById(this._gameId);
			name && main.game.showTips(name + "更新完成！")
			this._handle && this._handle.run();
			this._handle = null;
			LoadingMgr.ins.freeAndLoadNext();
			this.clearLoadingRender();
			main.game.sceneObjectMgr.event("SceneObjectMgr.__EVENT_JOIN_CARDROOM_GAME_UPDATE");
		}

		clearLoadingRender(checknow?: boolean) {
			if (this._assertloader) {
				LoadingMgr.ins.clearGameAsset(this._gameId, checknow);
				this._assertloader = null;
			}
			if (this._handle != null) {
				this._handle.recover();
				this._handle = null;
			}
			this._preAssets = null;
			this._formatUrl = null;
			this._gameId = null;
		}
	}

}