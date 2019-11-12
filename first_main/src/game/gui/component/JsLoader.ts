/**
* name 
*/
module game.gui.component {
	export class JsLoader {
		private static _ins: JsLoader;
		static get ins() {
			return this._ins = this._ins || new JsLoader();
		}

		private _jsLoaderCellList: { [key: string]: JsLoaderCell } = {}
		private _waitList: string[] = [];
		private _jsCellLock: JsLoaderCell;
		/**
		 * 
		 * @param game_id 游戏id
		 * @param need_load 是否需要加载资源
		 * @param handle 回调
		 */
		public startLoad(game_id: string, need_load?: boolean, handle?: Handler) {
			if (LoadingMgr.ins.isLoaded(game_id)) {
				this.clear();
			}
			if (!this._jsLoaderCellList) this._jsLoaderCellList = {}
			let jscell = this._jsLoaderCellList[game_id];
			if (!jscell) {
				jscell = new JsLoaderCell(game_id);
				jscell.path_list = [];
				jscell.handle = handle;
				jscell.need_load = need_load;
				jscell.game_list = this.checkoutValue([game_id]);
				this._jsLoaderCellList[game_id] = jscell;
			} else {
				handle && handle.recover();
			}


			if (this._waitList.indexOf(game_id) == -1) {
				logd("进入队列", game_id);
				this._waitList.push(game_id);
			}
			
			this.doLoadNext();
		}

		//是否是等待加载
		public isWaitLoad(gameid: string) {
			if (this._waitList.indexOf(gameid) != -1) {
				return true;
			}

			return false;
		}



		private doLoadNext() {
			if (this._jsCellLock) {
				logd("队列中");
				return;
			}

			if (!this._waitList.length) {
				logd("队列中2");
				return;
			}

			let gameid = this._waitList.shift();
			logd("开始加载js", gameid);

			let jscell = this._jsLoaderCellList[gameid]
			if (jscell) {
				this._jsCellLock = jscell;
			} else {
				this._jsCellLock = null;
				return;
			}
			let prePath = WebConfig.isOnline ? "part/bin/game{0}.bin" : "part/js/game{0}.js";
			for (let index = 0; index < jscell.game_list.length; index++) {
				let gameid = jscell.game_list[index];
				let path = StringU.substitute(prePath, gameid);
				if (jscell.path_list.indexOf(path) == -1) {
					jscell.path_list.push(path);
				}
			}

			let jsload = checkGameJsLoad(gameid);
			if (jsload) {
				this.jsComplete(jscell, jsload);
			} else {
				if (jscell.path_list.length) {
					jscell.assertloader.load(jscell.path_list, Handler.create(this, this.jsComplete, [jscell, jsload]), false, 4);
				}
			}
		}

		//获取进度
		getProgress(gameid: string) {
			if (this._jsCellLock && this._jsCellLock.gameid == gameid) {//如果是正在加载的 内容 那就显示进度
				return 0.001;
			}
			return 0;
		}

		private _gameJsPool: { [key: string]: HTMLScriptElement } = {};
		public get gameJsPool(): { [key: string]: HTMLScriptElement } {
			return this._gameJsPool;
		}
		private jsComplete(jscell: JsLoaderCell, jsload?: boolean) {
			logd("js回调", jscell.gameid)
			let assetList = []
			for (let index = 0; index < jscell.path_list.length; index++) {
				let path = jscell.path_list[index];
				let gameid = jscell.game_list[index];
				jscell.assertloader.release(path, true);

				if (!jsload) {
					logd("解析JS", gameid)
					let tempData = Laya.loader.getRes(path);
					let dataStr = path.indexOf(".bin") != -1 ? StringU.readZlibData(new ByteArray(tempData)) : tempData;
					let script = document.createElement('script');
					// script.type = "module";
					script.async = false;
					script.defer = true;
					script.innerHTML = dataStr;
					document.body.appendChild(script);
					if (gameid.indexOf("dating") == -1 && gameid.indexOf("component") == -1 && gameid.indexOf("tongyong") == -1) {
						this._gameJsPool[gameid] = script;
					}
				}

				let asset = getAsset(gameid);
				if (asset && asset.length) {
					assetList = laya.utils.Utils.concatArray(assetList, asset);
				}
			}

			logd("资源列表回调", jscell.gameid)

			assetList = myCheckArray(assetList);
			if (jscell.need_load) {
				logd("开始加载资源", jscell.gameid)
				LoadingMgr.ins.load(jscell.gameid, assetList, Handler.create(this, () => {
					this.runCallBack(jscell);
				}));
			} else {
				this.runCallBack(jscell, assetList);
			}
		}

		private runCallBack(jscell: JsLoaderCell, assetList?) {
			logd("完成资源加载开始回调", jscell.gameid)
			if (jscell.handle != null) {
				if (assetList && assetList.length) {
					jscell.handle.runWith([assetList]);
				} else {
					jscell.handle.run();
				}
			}

			jscell.assertloader && jscell.assertloader.clear(true);
			jscell.assertloader = null;
			if (this._jsLoaderCellList) {
				this._jsLoaderCellList[jscell.gameid] = null;
				delete this._jsLoaderCellList[jscell.gameid];
			}
			this._jsCellLock = null;
			this.doLoadNext();
		}

		private checkoutValue(arr: string[]) {
			let games = arr.concat();
			if (games.indexOf("dating") != -1 && games.indexOf("component") == -1) {
				!checkGameJsLoad("component") && games.unshift("component");
			}
			if (games.indexOf("dating") == -1 && games.indexOf("tongyong") == -1 && games.indexOf("component") == -1) {
				let GamePageDef = getPageDef("tongyong");
				if (!GamePageDef || !GamePageDef["isinit"]) {
					games.unshift("tongyong");
				}
			}
			let game_list = [];
			for (let index = 0; index < games.length; index++) {
				let item = games[index];
				if (item && game_list.indexOf(item) == -1) {
					game_list.push(item);
				}
			}
			return game_list;
		}

		clear() {
			LoadingMgr.ins.cancleUnLoads(false);
			if (this._jsLoaderCellList) {
				for (let key in this._jsLoaderCellList) {
					if (this._jsLoaderCellList.hasOwnProperty(key)) {
						let cell = this._jsLoaderCellList[key];
						if (cell) {
							if (cell.assertloader) {
								cell.assertloader.clear(true);
								cell.assertloader = null;
								cell.handle && cell.handle.recover();
								cell.game_list = null;
								cell.path_list = null;
								cell.gameid = null;
							}
						}
						cell = null;
						this._jsLoaderCellList[key] = null;
						delete this._jsLoaderCellList[key];
					}
				}
			}
			this._jsLoaderCellList = null;
			this._jsCellLock = null;
			this._waitList.length = 0;
		}
	}

	class JsLoaderCell {
		constructor(gameid?: string) {
			this.gameid = gameid;
		}
		gameid: string;
		handle: Handler;
		assertloader: AssetsLoader = new AssetsLoader();
		game_list: string[];
		path_list: string[];
		need_load: boolean;
	}

}