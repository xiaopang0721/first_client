/**
* 标签的子页面 
*/
module game.gui.base {
	export class TabBox {

		//界面视图
		protected _view: any;
		//子页面
		protected _tabView:any;
		//父级界面
		protected _parent: any;

		get parent() {
			return this._parent;
		}

		setParent(value: any) {
			this._parent = value;
		}

		// 应用程序引用
		protected _game: Game;
		constructor(v: Game, view: any, tabView?:any) {
			this._game = v;
			this._view = view;
			this._tabView = tabView;
		}

		open(): void {
			this.addListener = true;
		}

		protected set addListener(isAdd: boolean) {

		}

		close(): void {
			if (this._view) this.addListener = false;
		}
	}
}