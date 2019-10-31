/**
* UI
*/
module game {
	export class UIRoot extends game.base.Container implements game.gui.base.IUIRoot {
		// 顶层ui
		private _topUI: TopUI;
		//提示层
		private _topUnderUI: TopunderUI;
		// 一般UI层
		private _generalUI: GeneralUI;
		// HUD层
		private _HUD: HUD;

		get top(): TopUI {
			return this._topUI;
		}

		get topUnder(): TopunderUI {
			return this._topUnderUI;
		}

		get general(): GeneralUI {
			return this._generalUI;
		}

		get HUD(): HUD {
			return this._HUD;
		}

		constructor(v: Game) {
			super(v);
			PageDef.init();
			// 顶层ui
			this._topUI = new TopUI(v);
			// 一般UI层
			this._generalUI = new GeneralUI(v);
			// HUD层
			this._HUD = new HUD(v);
			//提示层
			this._topUnderUI = new TopunderUI(v);
			//HUD挪动到UIRoot层级之下
			Laya.stage.addChildAt(this._HUD, 0);
			this.addChild(this._generalUI);
			this.addChild(this._topUnderUI);
			this.addChild(this._topUI);
		}

		/**
		 * 显示加载进度条
		 * @param str 描述信息
		 * @param value 初始进度
		 * @param add 递增值
		 * @param max 最大值
		 * @param callback 回调
		 * @param preAsset 预加载资源
		 * @param time 心跳间隔
		 */
		showLoadProgress(str: string, callback?: Handler, preAsset?: any[], desc?: string): void {
			let loading = this._HUD.getPage(PageDef.PAGE_LOADING) as game.gui.page.Loading;
			if (!loading) {
				loading = this._HUD.open(PageDef.PAGE_LOADING, (page: game.gui.page.Loading) => {
					page.setProgress(str, callback, preAsset, desc);
				}) as game.gui.page.Loading;
			}
			else {
				loading.setProgress(str, callback, preAsset, desc);
			}
		}

		// 关闭加载进度条
		closeLoadProgress(): void {
			this._HUD.close(PageDef.PAGE_LOADING);
		}

		//进场景干掉所有
		closeAll(ignore?: Array<string>) {
			this.top.closeAll(ignore);
			this.topUnder.closeAll(ignore);
			this.HUD.closeAll(ignore);
			this.general.closeAll(ignore);
		}

		update(diff: number): void {
			this.topUnder.checkQueue();
			PageHandle.update(diff);

			for (let key in this._generalUI.pages) {
				let item = this._generalUI.pages[key];
				item && item.isOpened && item.__update(diff);
			}
			for (let key in this._HUD.pages) {
				let item = this._HUD.pages[key];
				item && item.isOpened && item.__update(diff);
			}
			for (let key in this._topUI.pages) {
				let item = this._topUI.pages[key];
				item && item.isOpened && item.__update(diff);
			}
			for (let key in this._topUnderUI.pages) {
				let item = this._topUnderUI.pages[key];
				item && item.isOpened && item.__update(diff);
			}
		}

		/**
		 * 弹窗提示
		 * @param str  字符串
		 * @param ecb 确定
		 * @param ccb 取消
		 * @param isOnlyOK  是否只有一个按钮 =》确定
		 * @param okSkin 确定的皮肤
		 */
		alert(str: string, ecb: Function = null, ccb: Function = null, isOnlyOK: boolean = true, okSkin?: string, cancleSkin?: string, titleSkin?: string): void {
			this.top.close(window["DatingPageDef"].PAGE_TIP);
			this.top.open(window["DatingPageDef"].PAGE_TIP, (tip: any) => {
				tip.isOnlyOK = isOnlyOK;
				tip.setInfo(str, ecb, ccb, okSkin, cancleSkin, titleSkin);
			});
		}

		private _tweeningBtns = [];
		/**
		 * 
		 * @param btn 对象
		 * @param caller 域 
		 * @param callback 回掉 
		 * @param args 参数
		 * @param defaultPath  默认声音url
		 * @param scaleX 缩放x
		 * @param scaleY 缩放y
		 */
		public btnTween(btn: any, caller?: any, callback?: Function, args?: any, defaultPath?: string, scaleX: number = 1, scaleY: number = 1): void {
			if (!btn || btn == Laya.stage) return;
			if (this._tweeningBtns.indexOf(btn) != -1) {
				return;
			}
			let delayTime = 80;
			this._tweeningBtns.push(btn);
			Laya.timer.once(delayTime * 2 + 20, this, () => {
				let idx = this._tweeningBtns.indexOf(btn);
				this._tweeningBtns.splice(idx, 1);
			})

			if (!btn.anchorX) {
				if (btn.centerX || btn.centerX == 0) {
					btn.centerX = btn.centerX;
				} else {
					btn.x = btn.x + btn.width * 0.5;
				}
				btn.anchorX = 0.5
			}
			if (!btn.anchorY) {
				if (btn.centerY || btn.centerY == 0) {
					btn.centerY = btn.centerY;
				} else {
					btn.y = btn.y + btn.height * 0.5;
				}
				btn.anchorY = 0.5
			}

			if (btn.scaleX < 0 && scaleX == 1) scaleX = -1;
			if (btn.scaleY < 0 && scaleY == 1) scaleY = -1;
			if (btn.scaleX > 0 && btn.scaleX < 1) scaleX = btn.scaleX;
			if (btn.scaleY > 0 && btn.scaleY < 1) scaleY = btn.scaleY;
			let props: any = { scaleX: scaleX * 0.85, scaleY: scaleY * 0.85 };
			Laya.Tween.clearAll(btn);
			Laya.Tween.to(btn, props, delayTime, null, Handler.create(this, () => {
				Laya.Tween.to(btn, { scaleX: scaleX, scaleY: scaleY }, delayTime, null, Handler.create(this, () => {
					if (callback) {
						if (caller)
							callback.call(caller, args, btn);
						else
							callback(args, btn);
					}
				}));
			}));
			this._game.playSound(defaultPath || Path.music_btn);
		}


		//鼠标点击事件
		onMouseClick(e: LEvent): boolean {
			for (let key in this._topUI.pages) {
				let item = this._topUI.pages[key];
				if (item && item.isOpened) {
					if (item.__onMouseClick(e)) return true;
				}
			}
			for (let key in this._generalUI.pages) {
				let item = this._generalUI.pages[key];
				if (item && item.isOpened) {
					if (item.__onMouseClick(e)) return true;
				}
			}
			for (let key in this._HUD.pages) {
				let item = this._HUD.pages[key];
				if (item && item.isOpened) {
					if (item.__onMouseClick(e)) return true;
				}

			}
			return false;
		}

		// 鼠标按下事件
		onMouseDown(e: LEvent): boolean {
			for (let key in this._topUI.pages) {
				let item = this._topUI.pages[key];
				if (item && item.isOpened) {
					if (item.__onMouseDown(e)) return true;
				}
			}
			for (let key in this._generalUI.pages) {
				let item = this._generalUI.pages[key];
				if (item && item.isOpened) {
					if (item.__onMouseDown(e)) return true;
				}
			}
			for (let key in this._HUD.pages) {
				let item = this._HUD.pages[key];
				if (item && item.isOpened) {
					if (item.__onMouseDown(e)) return true;
				}

			}
			return false;
		}
		// 鼠标移动事件
		onMouseMove(e: LEvent): boolean {
			for (let key in this._topUI.pages) {
				let item = this._topUI.pages[key];
				if (item && item.isOpened) {
					if (item.__onMouseMove(e)) return true;
				}
			}
			for (let key in this._generalUI.pages) {
				let item = this._generalUI.pages[key];
				if (item && item.isOpened) {
					if (item.__onMouseMove(e)) return true;
				}
			}
			for (let key in this._HUD.pages) {
				let item = this._HUD.pages[key];
				if (item && item.isOpened) {
					if (item.__onMouseMove(e)) return true;
				}

			}
			return false;
		}

		// 鼠标弹起事件
		onMouseUp(e: LEvent): boolean {
			for (let key in this._topUI.pages) {
				let item = this._topUI.pages[key];
				if (item && item.isOpened) {
					if (item.__onMouseUp(e)) return true;
				}
			}
			for (let key in this._generalUI.pages) {
				let item = this._generalUI.pages[key];
				if (item && item.isOpened) {
					if (item.__onMouseUp(e)) return true;
				}
			}
			for (let key in this._HUD.pages) {
				let item = this._HUD.pages[key];
				if (item && item.isOpened) {
					if (item.__onMouseUp(e)) return true;
				}

			}
			return false;
		}

		resize(w: number, h: number, realW: number, realH: number): void {
			this._clientWidth = w;
			this._clientHeight = h;
			this._clientRealWidth = realW;
			this._clientRealHeight = realH;
			this._HUD.size(this.x, this.y);
			this._HUD.scale(this.scaleX, this.scaleY);
			this._HUD.resize(w, h, realW, realH);
			this._topUI.resize(w, h, realW, realH);
			this._generalUI.resize(w, h, realW, realH);
			this._topUnderUI.resize(w, h, realW, realH);
		}


		public clear() {
			Laya.Tween.clearAll(this);
			Laya.timer.clearAll(this);
			if (this._tweeningBtns) {
				this._tweeningBtns.forEach(btn => {
					Laya.Tween.clearAll(btn);
				});
			}
			this._tweeningBtns = null;
		}
	}
	export class PageHandle {
		private static _mapList: { [key: string]: PageHandle } = {};
		/**
			* 创建对象
			* @param sign 标识
			*/
		static Get(sign: string) {
			if (this._mapList[sign] && !this._mapList[sign].destroy) {
				throw new Error("sssss");
			}

			this._mapList[sign] = new PageHandle();
			return this._mapList[sign]
		}

		static update(diff) {
			let map = this._mapList
			for (let key in map) {
				let obj = map[key]
				if (obj.isdestoryed) {
					delete map[key]
				}
			}
		}


		public pushOpen(obj: IPageHandle | any) {
			if (!obj.id) {
				throw new Error("aaa")
			}
			if (this._openList[obj.id]) {
				return;
			}

			this._openList[obj.id] = obj;
		}

		public pushClose(obj: IPageHandle) {
			if (!obj.id) {
				throw new Error("aaa")
			}
			if (this._openList[obj.id]) {
				delete this._openList[obj.id]
			}
			if (this._closeList[obj.id]) return;
			this._closeList[obj.id] = obj;
		}


		public updatePageHandle() {
			for (let key in this._openList) {
				let obj = this._openList[key];
				obj.parent.open(obj.id, (page: game.gui.base.Page) => {
					obj.dataSource && (page.dataSource = obj.dataSource)
				});
			}
			for (let key in this._closeList) {
				let obj = this._closeList[key];
				obj.parent.close(obj.id);
			}
		}


		private _openList: { [key: string]: any } = {};
		private _closeList: { [key: string]: any } = {};
		private _isdestoryed: boolean;
		get isdestoryed() {
			return this._isdestoryed;
		}
		destroy() {
			if (this._isdestoryed) return;
			this._openList = null;
			this._closeList = null;
			this._isdestoryed = true;
		}

		reset() {
			this._openList = {};
			this._closeList = {};
		}
	}

	export interface IPageHandle {
		id: string;
		dataSource?: any;
		parent: game.gui.base.PageContainer;
	}
}