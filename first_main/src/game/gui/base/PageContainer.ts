/**
* 页面容器 
*/
module game.gui.base {

	export interface PageMap {
		[index: string]: Page;
	}

	export class PageContainer extends game.base.Container {

		// 页面集合
		protected _pages: PageMap = {};
		//页面集合
		get pages() {
			return this._pages;
		}
		constructor(v: Game) {
			super(v);
			//鼠标能穿过层
			this.mouseThrough = true;
		}

		// 打开页面
		open(key: string, onOpenFunc?: Function, onCloseFunc?: Function, index:number = -1): Page {
			key = key.toString()
			let page: Page = this._pages[key];
			if (!page) {
				let pageClass: any = PageDef.getPageClass(key);
				page = new pageClass(this._game, onOpenFunc, () => {
					onCloseFunc && onCloseFunc(page);
					delete this._pages[key];
				});
				page.resize(this._clientWidth, this._clientHeight, this._clientRealWidth, this._clientRealHeight, false);
				this._pages[key] = page;
				if (index >= 0) this.addChildAt(page, index);
				else this.addChild(page);
				page.open(key);
			}
			else {
				page.parent && page.parent.setChildIndex(page, page.parent.numChildren - 1);
			}

			return page;
		}

		// 获取页面
		getPage(key: string): Page {
			return this._pages[key];
		}

		//界面是否打开
		isOpened(key: string): boolean {
			if (!this._pages[key]) return false;
			return this._pages[key].isOpened;
		}

		//调下层级
		setPageIndex(page: any): void {
			page && page.parent && page.parent.setChildIndex(page, page.parent.numChildren - 1);
		}

		// 关闭页面
		close(key: string): void {
			let page: Page = this._pages[key];
			if (page) {
				page.close();
			}
		}

		// 关闭所有页面
		closeAll(ignore?: Array<string>): void {
			for (let key in this._pages) {
				if (ignore && ignore.indexOf(key) != -1) {
					continue;
				}
				this.close(key);
			}
		}

		//获取最上页面的key
		getTopKey(): string {
			if (this.numChildren) {
				let top: Page = this.getChildAt(this.numChildren - 1) as Page;
				if (top) {
					for (let key in this._pages) {
						if (this._pages[key] == top)
							return key;
					}
				}
			}
		}



		resize(w: number, h: number, realW: number = 0, realH: number = 0): void {
			super.resize(w, h, realW, realH);
			for (let key in this._pages) {
				let page: Page = this._pages[key];
				if (page) {
					page.resize(w, h, realW, realH);
				}
			}
		}

		// 释放函数
		destroy(destroyChild?: boolean): void {
			this.closeAll();
			this._pages = null;
			super.destroy(destroyChild);
		}
	}
}