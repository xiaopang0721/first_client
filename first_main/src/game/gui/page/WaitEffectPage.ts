/**
* name 进入等待动画
*/
module game.gui.page {
	export class WaitEffectPage extends game.gui.base.Page {
		private _viewUI: ui.dating.Loading1UI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				// Path.atlas_dating_ui + "kefu.atlas",
			];
			this._isNeedBlack = true;
			this._isClickBlack = false;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.Loading1UI");
			this.addChild(this._viewUI);
			this._viewUI.visible = false;
			this._viewUI.ani1.stop();
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this.on(LEvent.MOUSE_DOWN, this, this.onMouseHandle);
		}

		closeAni() {
			if (!this._viewUI.visible) return;
			this._viewUI.visible = false;
			this._viewUI.ani1.stop();
		}

		playAni() {
			if (this._viewUI.visible) return;
			this._viewUI.visible = true;
			this._viewUI.ani1.play(0, true);
		}

		private onMouseHandle(e: LEvent) {
			if (this._game.sceneGame.network.connected) {
				if (this._game.sceneGame.sceneObjectMgr && this._game.sceneGame.sceneObjectMgr.story instanceof this._game.__gamecomponent.story.StoryBaiRenBase) {
					this.close();
				}
			} else {
				this._game.sceneGame.clear("WaitEffectPage onMouseHandle", true);
				this._game.sceneGame.login("WaitEffectPage onMouseHandle");
			}
		}

		public close(): void {

			if (this._viewUI) {
				this._viewUI.ani1.stop();
			}
			super.close();
		}
	}


}