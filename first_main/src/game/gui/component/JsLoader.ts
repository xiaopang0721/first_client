/**
* name 
*/
module game.gui.component {
	export class JsLoader extends AssetsLoader {
		private _gameId: string;
		private _path: string;
		private _preAssets: string[];
		constructor(gameId: string) {
			super();
			this._gameId = gameId;
			this._path = StringU.substitute("game{0}.js");
		}

		public startLoad() {
			this.load([this._path], Handler.create(this, this.jsComplete), true);
		}

		private jsComplete() {
			let tempData = Laya.loader.getRes(this._path);
			this.release(this._path, true);
			if (tempData) {
				let dataStr = StringU.readZlibData(new ByteArray(tempData));
				let script = document.createElement('script');
				script.innerHTML = dataStr;
				document.body.appendChild(script);
			}
			if (this._gameId.indexOf("dating") != -1) {
				let DatingPageDef = eval("DatingPageDef");
				DatingPageDef.myinit(this._gameId);
				this._preAssets = DatingPageDef["__needLoadAsset"];
			} else {
				let GamePageDef = getPageDef(this._gameId);
				GamePageDef.myinit(this._gameId);
				this._preAssets = GamePageDef["__needLoadAsset"];
			}
			this.event(LEvent.COMPLETE, this._preAssets);
		}
	}
}