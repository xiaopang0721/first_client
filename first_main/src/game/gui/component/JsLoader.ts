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
		public startLoad(gameIds: string, handle?: Handler) {
			if (!checkGameJsLoad(gameIds)) {
				let id = Laya.Utils.getGID()
				if (!this._jsLoaderCellList) this._jsLoaderCellList = {}
				let jscell = this._jsLoaderCellList[id] = new JsLoaderCell(id)
				jscell.game_list = this.checkoutValue([gameIds]);
				jscell.path_list = [];
				jscell.handle = handle;
				let prePath = WebConfig.isOnline ? "part/bin/game{0}.bin" : "part/js/game{0}.js";
				for (let index = 0; index < jscell.game_list.length; index++) {
					let gameid = jscell.game_list[index];
					let path = StringU.substitute(prePath, gameid);
					jscell.path_list.push(path);
				}
				if (jscell.path_list.length) {
					jscell.assertloader = new AssetsLoader()
					jscell.assertloader.load(jscell.path_list, Handler.create(this, this.jsComplete, [jscell]), true, 4);
				}
			} else {
				let game_list = this.checkoutValue([gameIds]);
				let assetList = []
				for (let index = 0; index < game_list.length; index++) {
					let gameid = game_list[index];
					let asset = getAsset(gameid);
					if (asset && asset.length) {
						assetList = assetList.concat(asset);
					}
				}
				handle && handle.runWith([assetList]);
			}
		}

		//获取进度
		getProgress(gameid: string) {
			if (this._jsLoaderCellList[gameid] || checkGameJsLoad(gameid)) {//如果是正在加载的 内容 那就显示进度
				return 0.01;
			}
			return 0;
		}

		private _gameJsPool: { [key: string]: HTMLElement } = {};
		public get gameJsPool() {
			return this._gameJsPool;
		}
		private jsComplete(jscell: JsLoaderCell) {
			let assetList = []
			for (let index = 0; index < jscell.path_list.length; index++) {
				let path = jscell.path_list[index];
				let gameid = jscell.game_list[index];
				let tempData = Laya.loader.getRes(path);
				jscell.assertloader.release(path, true);

				if (tempData) {
					let dataStr = path.indexOf(".bin") != -1 ? StringU.readZlibData(new ByteArray(tempData)) : tempData;
					let script = document.createElement('script');
					script.async = true;
					script.innerHTML = dataStr;
					document.body.appendChild(script);
					if (gameid.indexOf("dating") == -1 && gameid.indexOf("component") == -1 && gameid.indexOf("tongyong") == -1) {
						this._gameJsPool[gameid] = script;
					}
				}

				let asset = getAsset(gameid);
				if (asset && asset.length) {
					assetList = assetList.concat(asset);
				}
			}

			jscell.handle && jscell.handle.runWith([assetList]);
			jscell.assertloader.clear(true);
			jscell.assertloader = null;
			delete this._jsLoaderCellList[jscell.index];
			this._jsLoaderCellList[jscell.index] = null;
		}

		private checkoutValue(gameid: string[]) {
			if (gameid.indexOf("dating") != -1 && gameid.indexOf("component") == -1) {
				!checkGameJsLoad("component") && gameid.unshift("component");
			}
			if (gameid.indexOf("dating") == -1 && gameid.indexOf("tongyong") == -1 && gameid.indexOf("component") == -1) {
				let GamePageDef = getPageDef("tongyong");
				if (!GamePageDef || !GamePageDef["isinit"]) {
					gameid.unshift("tongyong");
				}
			}
			let game_list = [];
			for (let index = 0; index < gameid.length; index++) {
				let item = gameid[index];
				if (item.indexOf("dating") != -1) {
					item = WebConfig.baseplatform == PageDef.BASE_PLATFORM_TYPE_NQP ? "datingnqp" : "dating";
				}
				game_list.push(item)
			}
			return game_list;
		}

		clear() {
			for (let key in this._jsLoaderCellList) {
				if (this._jsLoaderCellList.hasOwnProperty(key)) {
					let cell = this._jsLoaderCellList[key];
					if (cell) {
						if (cell.assertloader) {
							cell.assertloader.clear();
							cell.assertloader = null;
							cell.handle && cell.handle.recover();
							cell.game_list = null;
							cell.path_list = null;
							cell.index = null;
						}
					}
					cell = null;
				}
			}
			this._jsLoaderCellList = null;
		}
	}

	class JsLoaderCell {
		constructor(index: number) {
			this.index = index;
		}
		index: number;
		handle: Handler;
		assertloader: AssetsLoader;
		game_list: string[];
		path_list: string[];
	}

}