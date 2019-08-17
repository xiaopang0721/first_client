/**
* 页面加载效果 
*/
module game.gui.component {
	export class LoadEffect {
		private static _list: Array<LoadEffect> = [];
		private static add(v: LoadEffect): void {
			for (let effect of this._list) {
				effect.isTop = false;
			}
			v.isTop = true;
			this._list.push(v);
		}
		private static remove(v: LoadEffect): void {
			let idx = this._list.indexOf(v);
			if (idx != -1) {
				this._list.splice(idx, 1);
			}
			let count = this._list.length;
			if (count > 0 && v.isTop) {
				this._list[count - 1].isTop = true;
			}
		}
		private _parent: game.gui.base.Page;
		private _createdTimer: number;
		private _view: any;
		private _imgLoad: ui.dating.Loading1UI;
		private _black: Sprite;
		private _clientWidth: number;
		private _clientHeight: number;

		// 是否在顶层 只显示顶层的加载效果
		private _isTop: boolean = false;
		set isTop(v: boolean) {
			this._isTop = v;
			this._view && (this._view.visible = v);
		}

		constructor(parent: game.gui.base.Page) {
			this._parent = parent;
			this._createdTimer = Laya.timer.currTimer;
			this._updateEnable = true;
			LoadEffect.add(this);
		}

		set width(v: number) {
			this._clientWidth = v;
			Laya.timer.callLater(this, this.layout);
		}

		set height(v: number) {
			this._clientHeight = v;
			Laya.timer.callLater(this, this.layout);
		}

		private layout(): void {
			if (this._view) {
				this._view.width = this._clientWidth;
				this._view.height = this._clientHeight;
				if (this._black) {
					this._black.graphics.clear();
					this._black.graphics.drawRect(0, 0, this._clientWidth, this._clientHeight, "#0");
				}
				if (this._imgLoad) {
					this._imgLoad.x = this._clientWidth / 2;
					this._imgLoad.y = this._clientHeight / 2;
				}
				if (this._text) {
					this._text.x = this._clientWidth / 2;
					this._text.y = this._clientHeight / 2;
				}
			}
		}

		private createView(v: string | any): any {
			let view;
			let vv = Page.FindClass(v);
			if (vv instanceof Laya.Node) {
				view = vv;
			} else {
				view = new vv();
			}
			return view;
		}

		private _text: Laya.Label;
		private initView(): void {
			if (this._view) return;
			this._view = new Sprite();
			if (!this._black) {
				this._black = new Sprite();
				this._black.alpha = 0.5;
				this._black.mouseEnabled = true;
				this._view.addChildAt(this._black, 0);
			}
			this._black.graphics.clear();
			this._black.graphics.drawRect(0, 0, this._clientWidth, this._clientHeight, "#000000");
			this._view.on(LEvent.CLICK, this, this.onBlackSpriteClick);

			this._imgLoad = this.createView("dating.Loading1UI");
			this._imgLoad.ani1.play();
			this._imgLoad.anchorX = 0.5;
			this._imgLoad.anchorY = 0.5;
			this._view.addChild(this._imgLoad);

			this._text = new Laya.Label();
			this._text.anchorX = 0.5;
			this._text.anchorY = -1.2;
			this._text.color = '#FFFFFF';
			this._text.strokeColor = '#000000';
			this._text.stroke = 4;
			this._text.fontSize = 24;
			this._text.align = 'center';
			this._text.text = "正在打开页面\n(点击关闭界面)"
			this._view.addChild(this._text);
			this._view.visible = this._isTop;
			this._parent.addChild(this._view);
			this.layout();
		}

		/**
		 * 黑底点击事件
		 */
		protected onBlackSpriteClick(): void {
			let timer: number = Laya.timer.currTimer - this._createdTimer;
			//如果3s还没进去，让他关掉
			if (this._parent && timer > 3000) {
				this._parent.close();
			}
		}

		private _updateEnable: boolean;
		update(diff: number): void {
			if (!this._updateEnable) return;
			let timer: number = Laya.timer.currTimer - this._createdTimer;
			if (timer > 500) {
				if (!this._view) {
					this.initView();
				}
				if (timer > 6000) {
					this._updateEnable = false;
				}
			}
		}

		destroy(): void {
			if (this._imgLoad) {
				this._imgLoad.removeSelf();
				this._imgLoad.destroy();
				this._imgLoad = null;
			}

			if (this._text) {
				this._text.removeSelf();
				this._text.destroy();
				this._text = null;
			}

			if (this._black) {
				this._black.removeSelf();
				this._black.destroy();
				this._black = null;
			}
			if (this._view) {
				this._view.off(LEvent.CLICK, this, this.onBlackSpriteClick);
				this._view.removeSelf();
				this._view.destroy();
				this._view = null;
			}

			this._createdTimer = 0;
			this._updateEnable = false;
			Laya.timer.clearAll(this);
			Laya.Tween.clearAll(this);
			LoadEffect.remove(this);
		}
	}
}