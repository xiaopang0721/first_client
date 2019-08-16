/**
* 顶层ui
*/
module game.gui {
	export class TopUI extends game.gui.base.PageContainer {

		constructor(app: Game) {
			super(app);
		}

		// 关闭所有页面
		closeAll(ignore?: Array<string>): void {
			ignore = ignore || []
			// if(ignore.indexOf(PageDef.PAGE_GONGGAO) == -1)
			// {	
			// 	ignore.push(PageDef.PAGE_GONGGAO);
			// }
			// if(ignore.indexOf(PageDef.PAGE_TIP) == -1)
			// {	
			// 	ignore.push(PageDef.PAGE_TIP);
			// }
			super.closeAll(ignore);
		}
	}
}