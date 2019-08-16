/**
* 适配类 主要是重载laya引擎函数
*/
module utils {
	export class Adaptive {
		static init() {
			this.Stage_resetCanvas();
		}

		static Stage_resetCanvas() {
			let _resetCanvas = Laya.Stage.prototype['_resetCanvas']
			Laya.Stage.prototype['_resetCanvas'] = function () {
				if (!this.screenAdaptationEnabled) return;
				let canvas = Laya.Render._mainCanvas;
				let canvasStyle = canvas.source.style;
				canvas.size(1, 1);
				// laya的坑
				// Laya.timer.once(100,this,this._changeCanvasSize);
				Laya.timer.callLater(this, this._changeCanvasSize);
			}
		}
	}
}