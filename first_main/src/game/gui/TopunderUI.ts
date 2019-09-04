/**
* 顶层下面的ui
*/
module game.gui {
	export class TopunderUI extends game.gui.base.PageContainer {
		//飘字队列
		private _tipQueue: string[];
		private _nextUpdateTime: number = 0;

		constructor(app: Game) {
			super(app);
			this._tipQueue = [];
		}
		public checkQueue(): void {
			let cur_time: number = Laya.timer.currTimer;
			if (this._nextUpdateTime > 0 && this._nextUpdateTime > cur_time) return;
			this._nextUpdateTime = cur_time + 200;

			// this.showTips("1111111111")
			if (!checkGameJsLoad("dating") || !this._game.datingGame) return;
			if (this._tipQueue.length != 0) {
				let message = this._tipQueue.shift();
				let page = this.getPage(window["DatingPageDef"].PAGE_TIPS);
				this.open(window["DatingPageDef"].PAGE_TIPS, (page: any) => {
					page.dataSource = message;
				}, null, true);
			}
		}
		//显示提示
		public showTips(value: string): void {
			if (!value || value.length <= 0) return;
			if (this._tipQueue)
				this._tipQueue.push(value);
		}

		// 关闭所有页面
		closeAll(ignore?: Array<string>): void {
			super.closeAll(ignore);
			if (ignore && ignore.length) {
				for (let i = 0; i < ignore.length; i++) {
					if (checkGameJsLoad("dating") && ignore[i] == window["DatingPageDef"].PAGE_TIPS) return;
				}
			}
			this._tipQueue.length = 0;
		}

	}
}