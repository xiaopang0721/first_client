/**
* 标签页 
*/
module game.gui.base {
    export class TabPage extends Page {

        //标签页集合
        protected _tabPages: Array<any>;
        protected _selectIdx: number = -1;
        protected _oldSelectIdx: number = 0;
        public tabIndex:number = 0;

        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
        }

        public get selectIdx(): number {
            return this._selectIdx;
        }

        public get curTab(): any {
            return this._tabPages[this._selectIdx];
        }

        //添加标签页
        protected addTabPage(index: number, value: any): void {
            if (!this._tabPages) return;
            this._tabPages[index] = value;
            if (value.setParent) {
                value.setParent(this);
            }
        }

        //UI切换标签接口 继承此类的UI必须重写或重载这个函数！！！
        protected onTabSelect(index: number) {
            this.selectTab(index);
        }

        //选择
        protected selectTab(index: number, isReuse: boolean = false): any {
            if (!this._tabPages) return;
            //防止重复打开页面
            if (!isReuse && this._selectIdx == index) return;
            this._selectIdx = index;
            let len: number = this._tabPages.length;
            let selectChild:any;
            for (let i: number = 0; i < len; i++) {
                let pageChild: any = this._tabPages[i];
                if (!pageChild) continue;
                if (i != index) {
                    this._tabPages[i].close();
                }else {
                    selectChild = this._tabPages[i];
                }
            }
            if(selectChild) selectChild.open();
        }

        // 页面关闭
        public close(): void {
            if (this._tabPages) {
                let len: number = this._tabPages.length;
                for (let i: number = 0; i < len; i++) {
                    if (!this._tabPages[i]) continue;
                    this._tabPages[i].close();
                    this._tabPages[i] = null;
                }
                this._tabPages = null;
                this._oldSelectIdx = 0;
                this._selectIdx = -1;
                this.tabIndex = 0;
            }
            super.close();
        }
    }
}