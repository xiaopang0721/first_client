/**
* 容器
*/
module game.base {
	export class Container extends Laya.Sprite {
		protected _clientWidth: number;
		protected _clientHeight: number;
		protected _clientRealWidth: number;
		protected _clientRealHeight: number;
		// 应用程序引用
		protected _game: Game;
		constructor(v: Game) {
			super();
			this._game = v;
		}

		resize(w: number, h: number, realW: number = 0, realH: number = 0): void {
			this._clientWidth = this.width = w;
			this._clientHeight = this.height = h;
			this._clientRealWidth = realW;
			this._clientRealHeight = realH;
		}
	}

	
}