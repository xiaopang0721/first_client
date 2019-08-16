/**
* HUD
*/
module game.gui {
	export class HUD extends game.gui.base.PageContainer {

		// 关闭所有页面
		closeAll(ignore?: Array<string>): void {
			for (let key in this._pages) {
				if (ignore && ignore.indexOf(key) != -1) {
					continue;
				}
				this.close(key);
			}
		}
	}
}