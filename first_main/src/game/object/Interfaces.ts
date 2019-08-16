/**
* name 
*/
module game.object {
	export interface IGame {
		init(): void;
		onMouseClick(e: LEvent): void;
		onMouseDown(e: LEvent): void;
		onMouseMove(e: LEvent): void;
		onMouseUp(e: LEvent): void;
		onUpdate(diff: number): void;
		onResize(width: number, height: number, clientScale: number): void
		clearMgr(): void;
	}
}