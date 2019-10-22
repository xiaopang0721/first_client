/**
* ui页面
*/
module game.gui.base {

	export class Page extends game.base.Container {

		/**
		 * 查找多语言对应视图类型
		 */
		static FindClass(v: string | any): any {

			let vv: any;
			if (typeof v === 'string') {
				let vPath = v.split(".");
				Vesion.foreachSearchPath((lang: string, isend: boolean) => {
					vv = this.FindLang(vPath, lang);
					if (vv) vv["lang"] = lang;
					return vv;
				})
				if (!vv) {
					vv = this.FindLang(vPath);
				}
			}
			else {
				vv = v;
			}
			return vv;
		}

		public static FindLang(vPath: any, lang?: string) {
			let vs;
			let langObj;
			if (!lang) {
				langObj = ui;
			} else {
				lang = lang.substring(0, lang.length - 1);
				langObj = ui[lang];
			}
			if (langObj) {
				let pathLen = vPath.length;
				let idx = 0;
				let obj = langObj;
				do {
					obj = obj[vPath[idx]]
					if (!obj) {
						break;
					}
					idx++;
				}
				while (idx < pathLen)
				if (obj) {
					vs = obj;
				}
			}
			return vs;
		}

		//视图控制
		protected _pageHandle: PageHandle;
		// 视图
		protected _view: Sprite | any;
		// 素材配置
		protected _asset: Array<string>;
		// 页面打开时执行函数
		private _onOpenFunc: Function;
		// 页面关闭时执行函数
		private _onCloseFunc: Function;
		// 贴图加载器
		protected _assetsLoader: AssetsLoader = new AssetsLoader();
		// 是否打开
		public isOpened: boolean = false;
		// onOpen开关
		private _isOnOpenComplete: boolean = false;
		// 是否初始化完成
		public isInitialize: boolean = false;
		// 是否关闭中
		protected _isCloseing: boolean = false;
		// 页面加载效果
		// private _loadEffect: component.LoadEffect;
		//是否模态窗
		protected _isModal: boolean = false;
		//是否要duang
		protected _isNeedDuang: boolean = true;
		get isModal(): boolean {
			return this._isModal;
		}
		protected _dataSource: any;
		/**数据*/
		get dataSource(): any {
			return this._dataSource;
		}
		/**数据*/
		set dataSource(v: any) {
			this._dataSource = v;
		}
		/**当前面板位置*/
		get viewPos(): [number, number] {
			return [this._view.x, this._view.y];
		}

		private __time: number = 0;
		protected _delta: number = 800;
		private _key: string = "";
		/**
		 * 是否需要阴影
		 */
		protected _isNeedBlack: boolean = false;
		protected _isClickBlack: boolean = true;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v);
			this._onOpenFunc = onOpenFunc;
			this._onCloseFunc = onCloseFunc;
			// this.mouseThrough = true;
		}


		/**
		 * 
		 * @param v 
		 * @param list 
		 * @param default_lang 默认 
		 */
		protected createView(v: string | any, list?: string[]): any {
			if (!this._view) {
				let vv = Page.FindClass(v);
				list && list.forEach(children => {
					this.createChildren(children, vv["lang"])
				});
				if (vv instanceof Laya.Node) {
					this._view = vv;
				} else {
					this._view = new vv();
				}
			}
			return this._view;
		}

		protected createChildren(vPath: any, cls?: any): any {
			return Page.__createChildren(vPath, cls);
		}

		public static __createChildren(vPath: any, cls?: any): any {
			let v = Page.FindClass(vPath)
			vPath = vPath.split(".");
			let obj_plat;
			if (typeof cls === "string") {
				obj_plat = Page.FindLang(vPath, cls)
				if (obj_plat && obj_plat.__proto__ && obj_plat.__proto__.uiView) 
					obj_plat.__proto__.uiView = v.uiView;
			}
			else if (typeof cls === 'function') {
				if (cls.__proto__ && cls.__proto__.uiView)
					cls.__proto__.uiView = v.uiView;
			}
			return cls;
		}

		private onLoaded(): void {
			if (!this.isOpened) return;
			this.init();
			this.layout();
			this.onOpen();
			if(WebConfig.enterGameLocked) this.onApiHandle();
			this.isInitialize = true;
			if (this._view instanceof View) {
				this._view.mouseThrough = this._mouseThrough;
				this._view.cacheAs = "normal";
				this._view.centerX = 0.5;
				this._view.centerY = 0.5;
			}
			this.clearLoadEffect();
		}

		// 页面初始化函数
		protected init(): void {

		}

		// 页面打开函数
		open(key: string): void {
			this.clear();
			this._key = key;
			this.isOpened = true;
			this._isCloseing = false;
			this.isInitialize = false;
			this.createdLoadEffect();
			this._assetsLoader.load(this._asset, Handler.create(this, this.onLoaded));
		}

		createdLoadEffect(): void {
			// this._loadEffect = new component.LoadEffect(this);
			// this._loadEffect.width = this._clientWidth;
			// this._loadEffect.height = this._clientHeight;
		}

		clearLoadEffect(): void {
			// if (this._loadEffect) {
			// 	this._loadEffect.destroy();
			// 	this._loadEffect = null;
			// }
		}

		//帧心跳
		__update(diff: number) {
			// if (this._loadEffect) {
			// 	this._loadEffect.update(diff);
			// }

			if (this._isOnOpenComplete) {
				this.update(diff);
			}
		}

		//舞台鼠标点击 不可重写
		__onMouseClick(e: LEvent) {
			if (!this._isOnOpenComplete) return false;
			return this.onMouseClick(e) as boolean;
		}

		//舞台鼠标按下 不可重写
		__onMouseDown(e: LEvent) {
			if (!this._isOnOpenComplete) return false;
			return this.onMouseDown(e) as boolean;
		}

		//舞台鼠标弹起 不可重写
		__onMouseUp(e: LEvent) {
			if (!this._isOnOpenComplete) return false;
			return this.onMouseUp(e) as boolean;
		}

		//舞台鼠标移动 不可重写
		__onMouseMove(e: LEvent) {
			if (!this._isOnOpenComplete) return false;
			return this.onMouseMove(e) as boolean;
		}

		protected onMouseClick(e: LEvent): any {
			return false;
		}

		protected onMouseDown(e: LEvent): any {
			return false;
		}

		protected onMouseUp(e: LEvent): any {
			return false;
		}

		protected onMouseMove(e: LEvent): any {
			return false;
		}

		update(diff: number) {
			if (this.__time <= 0) {
				this.deltaUpdate();
				this.__time = this._delta;
				return;
			}
			this.__time -= diff;
		}

		/**
	  * 帧间隔心跳
	  */
		deltaUpdate() {

		}


		private _mouseThrough = true;
		setMouseThrough(v: boolean): void {
			this._mouseThrough = v;
			if (this._view instanceof View) {
				this._view.mouseThrough = this._mouseThrough;
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			this._isOnOpenComplete = true;
			this._onOpenFunc && this._onOpenFunc(this);
			if (this._view) this._view.mouseEnabled = true;
			if (this._view && this._view.hasOwnProperty("btn_close"))
				this._view.btn_close.on(LEvent.CLICK, this, this.onClose);//更多
			if (this._view && this._view.hasOwnProperty("btn_close1"))
				this._view.btn_close1.on(LEvent.CLICK, this, this.onClose);//更多

			if (this._isNeedBlack)
				this.drawBlack();
			if (this._view) {
				if (this._isNeedDuang) {
					Laya.Tween.from(this._view, { scaleX: 0, scaleY: 0, alpha: 0 }, 200, Laya.Ease.backOut);
				}
			}

		}

		/**
		 * api操作接口
		 */
		protected onApiHandle()
		{

		}

		private onClose(): void {
			if (this._view && (this._view.hasOwnProperty("btn_close") || this._view.hasOwnProperty("btn_close1"))) {
				if (this._view) this._view.mouseEnabled = false;
				this.btnTween(this._view.btn_close, this, this.closeTween);
			}
		}

		//外部接口 缓动关闭效果
		public closeWithTween(target: any) {
			this.btnTween(target, this, this.closeTween);
		}

		private closeTween() {
			if (this._view) {
				if (this._isNeedDuang) {
					Laya.Tween.to(this._view, { scaleX: 0, scaleY: 0, alpha: 0 }, 200, Laya.Ease.backIn, Handler.create(this, this.close));
				} else {
					this.close();
				}
			}
		}

		//按钮动画列表
		private _btnTweenList: any[];
		/**
		 * 按钮点击动画
		 * @param btn 按钮
		 * @param callback 回调
		 * @param args 回调参数
		 * @param scaleX 原始缩放x
		 * @param scaleY 原始缩放y
		 */
		private btnTween(btn: any, caller?: any, callback?: Function, args?: any, defaultPath?: string, scaleX: number = 1, scaleY: number = 1): void {
			if (!btn || btn == Laya.stage) return;
			this._game.playSound(Path.music + "btn.mp3");
			this._game.uiRoot.btnTween(btn, caller, callback, args, defaultPath, scaleX, scaleY);

			//进队列
			if (!this._btnTweenList) this._btnTweenList = [];
			if (this._btnTweenList.indexOf(btn) < 0) {
				this._btnTweenList.push(this._btnTweenList);
			}
		}

		/**按钮点击事件 带缓动 */
		protected onBtnClickWithTween(...agrs): void {
			if (agrs[0] instanceof LEvent) {
				let e = agrs[0] as LEvent;
				this.btnTween(e.currentTarget, this, this.onBtnTweenEnd, e);
			} else {
				let e = agrs[1] as LEvent;
				this.onBtnTweenEnd(null, e.currentTarget)
			}
		}
		/**按钮点击事件缓动完 回调 该做啥就做啥 */
		protected onBtnTweenEnd(e: any, target: any): void {
			//重载
		}

		/**
		 * 通过名字获取对应组件
		 * @param componentName 
		 */
		public getViewComponentPos(componentName: string): Sprite {
			let component = this._view[componentName];
			if (component) {
				return component;
			}
			return null;
		}

		// 打开其他页面
		protected openOtherPage(key: string, container?: PageContainer, onOpenFunc?: Function, onCloseFunc?: Function): Page {
			if (!container) {
				container = this.parent as PageContainer;
			}
			if (!container) {
				return null;
			}
			return container.open(key, onOpenFunc, onCloseFunc);
		}

		// 清理下页面
		protected clear(): void {
			this.clearLoadEffect();
			if (this._view) {
				for (let key in this._view) {
					let node = this._view[key];
					if (node instanceof Sprite && !node.parent) {
						node.destroy(true);
					}
				}
				this._view.destroy(true);
				this._view = null;
			}
			this._assetsLoader.offAll();
			this._assetsLoader.clear();
		}

		// 重新布局
		protected layout(): void {
			if (this._view) {
				this._view.width = this._clientRealWidth;
				this._view.height = this._clientRealHeight;
			}
		}


		// 页面关闭
		close(): void {
			if (this._isCloseing) {
				return;
			}
			this._isCloseing = true;
			this._isOnOpenComplete = false;
			this._key = "";
			this.clearBlack();
			if (this._view && this._view.hasOwnProperty("btn_close"))
				this._view.btn_close.off(LEvent.CLICK, this, this.close);//更多
			//清理按钮缓动
			if (this._btnTweenList) {
				let blen: number = this._btnTweenList.length;
				for (let i: number = 0; i < blen; i++) {
					let btn = this._btnTweenList[i];
					if (btn) Laya.Tween.clearAll(btn);
				}
				this._btnTweenList = null;
			}

			//移除页面相关监听
			if (this._view) {
				this.mouseEnabled = true;
				this._view.mouseEnabled = true;
			}

			if (this._pageHandle) {
				this._pageHandle.destroy();
				this._pageHandle = null;
			}
			Laya.timer.clearAll(this);
			Laya.Tween.clearAll(this);
			this._isCloseing = false;
			this.isOpened = false;
			this._onCloseFunc && this._onCloseFunc(this);

			this.destroy();
		}

		private _blackSprite: Sprite;
		/**
		 * 绘制黑底
		 */
		private drawBlack(): void {
			// if (!this._isModal)
			// 	return;
			if (!this._blackSprite) {
				this._blackSprite = new Sprite();
				this._blackSprite.alpha = 0.7;
				this._blackSprite.mouseEnabled = true;
				this._blackSprite.on(LEvent.CLICK, this, this.onBlackSpriteClick);
				this.addChildAt(this._blackSprite, 0);
			}
			this._blackSprite.x = -this._game.uiRoot.x;
			this._blackSprite.y = -this._game.uiRoot.y;
			let w: number = main.widthDesginPixelw;
			let h: number = main.heightDesginPixelw;
			this._blackSprite.scale(this._clientRealWidth / w, this._clientRealHeight / h);
			this._blackSprite.size(this._clientRealWidth, this._clientRealHeight);
			this._blackSprite.graphics.clear();
			this._blackSprite.graphics.drawRect(0, 0, this._clientRealWidth, this._clientRealHeight, "#000000");
		}

		/**
		 * 黑底点击事件
		 */
		protected onBlackSpriteClick(): void {
			if (this._isClickBlack)
				this.closeTween();
		}
		/**
		 * 清理黑底
		 */
		private clearBlack(): void {
			// if (!this._isModal)
			// 	return;
			if (this._blackSprite) {
				this._blackSprite.off(LEvent.CLICK, this, this.onBlackSpriteClick);
				this._blackSprite.graphics.clear();
				this._blackSprite.destroy();
				this._blackSprite = null;
			}
		}

		public resize(w: number, h: number, realW: number, realH: number, isLayout: boolean = true): void {
			super.resize(w, h, realW, realH);
			isLayout && this.layout();
			// if (this._loadEffect) {
			// 	this._loadEffect.width = this._clientWidth;
			// 	this._loadEffect.height = this._clientHeight;
			// }
			if (this._isNeedBlack)
				this.drawBlack();
		}

		// 释放函数
		destroy(destroyChild?: boolean): void {
			this.clear();
			super.destroy(destroyChild);
		}
	}

}