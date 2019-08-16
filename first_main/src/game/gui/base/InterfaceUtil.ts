/**
* name game抽象接口
*/
module game.gui.base {
	export interface IGame {
		onMouseClick(e: LEvent): void;
		onMouseDown(e: LEvent): void;
		onMouseMove(e: LEvent): void;
		onMouseUp(e: LEvent): void;
		onUpdate(diff: number): void;
		onResize(width: number, height: number, clientScale: number): void
		clearMgr(): void;
	}

	export interface IUIRoot {
		onMouseClick(e: LEvent): void;
		onMouseDown(e: LEvent): void;
		onMouseMove(e: LEvent): void;
		onMouseUp(e: LEvent): void;
		update(diff: number): void;
		resize(w: number, h: number, realW: number, realH: number): void
		clear(): void;
	}

	export interface Ireg<T> {
		registered(reg: T);
		// unregistered(reg: T);
	}

}