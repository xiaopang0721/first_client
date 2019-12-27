
module ui.qpapi.dating {
    export class LoadingUI extends View {
		public bar_jd:Laya.ProgressBar;
		public label_jd:laya.display.Text;
		public label_Tips:laya.display.Text;
		public txt_ad:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"top":-1,"right":-1,"left":-1,"bottom":-1},"child":[{"type":"Image","props":{"top":0,"skin":"ui/loading/tu_bj.jpg","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":503,"x":16,"skin":"ui/loading/tu_di1.png","bottom":0}},{"type":"Image","props":{"y":111,"x":19,"skin":"ui/loading/tu_di.png"}},{"type":"Image","props":{"y":235,"x":601,"skin":"ui/loading/tu_logo.png"}}]},{"type":"Box","props":{"width":1280,"height":111,"centerX":0,"bottom":14,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ProgressBar","props":{"width":964,"var":"bar_jd","skin":"ui/loading/progress.png","height":22,"centerY":4,"centerX":0}},{"type":"Text","props":{"y":49,"x":187,"width":911,"var":"label_jd","text":"0%","strokeColor":"#7c4913","stroke":3,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":13,"x":186,"width":911,"var":"label_Tips","text":"{0}/{1}：正在启动游戏","height":25,"fontSize":22,"color":"#d9d9d9","bold":true,"align":"center"}}]},{"type":"Label","props":{"width":1280,"var":"txt_ad","text":"听说下雨天打牌更配哦","height":38,"fontSize":18,"color":"#d9d9d9","centerX":0,"bottom":-7,"bold":true,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.qpapi.dating.LoadingUI.uiView);
        }
    }
}
