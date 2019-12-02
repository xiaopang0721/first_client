
module ui.qpae.dating {
    export class LoadingUI extends View {
		public bar_jd:Laya.ProgressBar;
		public label_jd:laya.display.Text;
		public label_Tips:laya.display.Text;
		public txt_ad:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"top":-1,"right":-1,"left":-1,"bottom":-1},"child":[{"type":"Image","props":{"top":0,"skin":"ui/loading/tu_bj.jpg","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"skin":"ui/loading/tu_aeqp.png","centerY":-100,"centerX":0}},{"type":"Box","props":{"width":1280,"height":111,"centerX":0,"bottom":14,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ProgressBar","props":{"y":57,"x":283,"width":706,"var":"bar_jd","skin":"ui/loading/progress.png","sizeGrid":"0,23,0,20","height":9}},{"type":"Text","props":{"y":49,"x":187,"width":911,"var":"label_jd","text":"0%","strokeColor":"#7c4913","stroke":3,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":10,"x":186,"width":911,"var":"label_Tips","text":"{0}/{1}：正在启动游戏","height":25,"fontSize":21,"color":"#ffffff","bold":true,"align":"center"}}]},{"type":"Label","props":{"width":1280,"var":"txt_ad","text":"听说下雨天打牌更配哦","height":38,"fontSize":21,"color":"#ffffff","centerX":0,"bottom":-6,"bold":true,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.qpae.dating.LoadingUI.uiView);
        }
    }
}
