
module ui.qpae.dating {
    export class LoadingUI extends View {
		public ani1:Laya.FrameAnimation;
		public bar_jd:Laya.ProgressBar;
		public progress_mask:Laya.Image;
		public label_Tips:laya.display.Text;
		public label_jd:Laya.Label;
		public txt_ad:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"top":-1,"right":-1,"left":-1,"bottom":-1},"child":[{"type":"Image","props":{"skin":"ui/loading/gamehall_loadingBg_dark.jpg","centerY":0,"centerX":0}},{"type":"Image","props":{"skin":"ui/loading/tu_008qp.png","centerY":-55,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":1280,"height":111,"centerX":0,"bottom":60,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ProgressBar","props":{"y":40,"width":606,"var":"bar_jd","value":0.5,"skin":"ui/loading/progress.png","sizeGrid":"0,50,0,50","height":43,"centerX":0}},{"type":"Box","props":{"y":40,"width":643,"height":34,"centerX":0},"child":[{"type":"Image","props":{"y":8,"x":10,"width":633,"skin":"ui/loading/tu_t.png","height":26},"compId":49},{"type":"Image","props":{"y":12,"x":20,"width":588,"skin":"ui/loading/tu_gg.png","height":21}},{"type":"Image","props":{"y":0,"x":20,"width":255,"var":"progress_mask","skin":"ui/loading/progress$bar.png","sizeGrid":"0,50,0,50","renderType":"mask","height":43}}]},{"type":"Text","props":{"y":10,"x":186,"width":911,"visible":false,"var":"label_Tips","text":"正在校验文件,请稍等","height":25,"fontSize":20,"color":"#f6ff30","align":"center"}},{"type":"Box","props":{"y":10,"width":146,"height":25,"centerX":0},"child":[{"type":"Label","props":{"y":0,"width":146,"text":"加载中","left":0,"height":25,"fontSize":20,"color":"#ffffff","align":"left"},"child":[{"type":"Label","props":{"y":0,"x":154,"width":20,"text":"...","right":0,"height":25,"fontSize":20,"color":"#ffffff","align":"right"}}]},{"type":"Label","props":{"y":0,"width":67,"var":"label_jd","text":"100%","height":25,"fontSize":20,"color":"#ffffff","centerX":17,"align":"center"}}]}]},{"type":"Label","props":{"width":1280,"var":"txt_ad","text":"听说下雨天打牌更配哦","height":38,"fontSize":20,"color":"#ffffff","centerX":0,"bottom":10,"align":"center"}}]}],"animations":[{"nodes":[{"target":49,"keyframes":{"x":[{"value":20,"tweenMethod":"linearNone","tween":true,"target":49,"key":"x","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":49,"key":"x","index":5}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.qpae.dating.LoadingUI.uiView);
        }
    }
}
