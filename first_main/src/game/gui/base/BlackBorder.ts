/**
* 自适应黑底
*/
module game.gui.base {
    export class BlackBorder extends game.gui.base.PageContainer {
        // private 
        constructor(game: Game) {
            super(game);
        }

        update(diff: number): void {

        }

        resize(w: number, h: number): void {
            super.resize(w, h);
            if (!main) return;

            let borderWidth = (w - main.widthDesginPixelw) / 2;
            let borderHeight = (h - main.heightDesginPixelw) / 2;
            this.graphics.clear();
            if (borderWidth) {
                this.graphics.drawRect(0, 0, borderWidth, main.heightDesginPixelw, "#000000");
                this.graphics.drawRect(w - borderWidth, 0, w, h, "#000000");
            }
            if (borderHeight) {
                this.graphics.drawRect(0, 0, w, borderHeight, "#000000");
                this.graphics.drawRect(0, h - borderHeight, w, h, "#000000");
            }
        }
    }
}