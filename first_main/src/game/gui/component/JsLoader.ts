/**
* name 
*/
module game.gui.component {
	export class JsLoader {
		private static _ins: JsLoader;
		static get ins() {
			return this._ins = this._ins || new JsLoader();
		}

		private static _index: number = 0;
		private _jsLoaderCellList: { [key: string]: JsLoaderCell } = {}
		public startLoad(gameIds: string[], handle: Handler) {
			JsLoader._index++;
			let jscell = this._jsLoaderCellList[JsLoader._index] = new JsLoaderCell(JsLoader._index)
			jscell.game_list = this.datingcheck(gameIds);
			jscell.path_list = [];
			jscell.game_list = gameIds;
			jscell.handle = handle;
			let ness = WebConfig.isOnline ? ".bin" : ".js";
			for (let index = 0; index < jscell.game_list.length; index++) {
				let gameid = jscell.game_list[index];
				if (checkGameJsLoad(gameid)) continue;
				let path = StringU.substitute("part/js/game{0}{1}", gameid, ness);
				jscell.path_list.push(path);
			}
			if (jscell.path_list.length) {
				jscell.assertloader = new AssetsLoader()
				jscell.assertloader.load(jscell.path_list, Handler.create(this, this.jsComplete, [jscell]), true);
			}
		}

		private datingcheck(gameid: string[]) {
			gameid && gameid.forEach(element => {
				if (WebConfig.platform == PageDef.BASE_PLATFORM_TYPE_NQP) {
					element = element.replace("dating", "datingnqp");
				}
			});
			return gameid;
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
					script.innerHTML = dataStr;
					document.body.appendChild(script);
				}
				let asset = [];
				if (gameid.indexOf("component") != -1) {
					continue;
				}
				else if (gameid.indexOf("dating") != -1) {
					let DatingPageDef = eval("DatingPageDef");
					DatingPageDef.myinit(gameid);
					asset = DatingPageDef["__needLoadAsset"];
				} else {
					let GamePageDef = getPageDef(gameid);
					GamePageDef.myinit(gameid);
					asset = GamePageDef["__needLoadAsset"];
				}
				assetList = assetList.concat(asset);
			}

			jscell.handle.runWith([assetList]);
			jscell.assertloader.clear(true);
			jscell.assertloader = null;
			delete this._jsLoaderCellList[jscell.index];
		}

		clear() {
			for (let key in this._jsLoaderCellList) {
				if (this._jsLoaderCellList.hasOwnProperty(key)) {
					let cell = this._jsLoaderCellList[key];
					if (cell) {
						if (cell.assertloader) {
							cell.assertloader.clear();
							cell.assertloader = null;
							cell.handle.recover();
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