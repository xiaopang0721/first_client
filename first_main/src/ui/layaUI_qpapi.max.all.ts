
module ui.qpapi.dating {
    export class Effect_txUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":150,"height":50},"child":[{"type":"Image","props":{"skin":"ui/loading/sx10000.png"},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"ui/loading/sx10000.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"ui/loading/sx10001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":2},{"value":"ui/loading/sx10002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"ui/loading/sx10003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"ui/loading/sx10004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":8},{"value":"ui/loading/sx10005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":10},{"value":"ui/loading/sx10006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":12},{"value":"ui/loading/sx10007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":14},{"value":"ui/loading/sx10008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":16},{"value":"ui/loading/sx10009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":18},{"value":"ui/loading/sx10010.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":20}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.qpapi.dating.Effect_txUI.uiView);
        }
    }
}

module ui.qpapi.dating {
    export class LoadingUI extends View {
		public bar_jd:Laya.ProgressBar;
		public label_jd:laya.display.Text;
		public label_Tips:laya.display.Text;
		public eff_bar:ui.qpapi.dating.Effect_txUI;
		public txt_ad:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"top":-1,"right":-1,"left":-1,"bottom":-1},"child":[{"type":"Image","props":{"top":0,"skin":"ui/loading/tu_bj.jpg","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":503,"x":16,"skin":"ui/loading/tu_di1.png","bottom":0}},{"type":"Image","props":{"y":111,"x":19,"skin":"ui/loading/tu_di.png"}},{"type":"Image","props":{"y":235,"x":601,"skin":"ui/loading/tu_logo.png"}}]},{"type":"Box","props":{"width":1280,"height":92,"centerX":0,"bottom":43,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ProgressBar","props":{"width":964,"var":"bar_jd","skin":"ui/loading/progress.png","height":22,"centerY":20,"centerX":0}},{"type":"Text","props":{"y":53,"x":160,"width":959,"visible":false,"var":"label_jd","text":"0%","strokeColor":"#7c4913","stroke":3,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":22,"x":186,"width":911,"var":"label_Tips","text":"{0}/{1}：正在启动游戏","height":25,"fontSize":22,"color":"#d9d9d9","bold":true,"align":"center"}},{"type":"Effect_tx","props":{"y":40,"x":40,"var":"eff_bar","blendMode":"lighter","runtime":"ui.qpapi.dating.Effect_txUI"}}]},{"type":"Label","props":{"width":1280,"var":"txt_ad","text":"听说下雨天打牌更配哦","height":38,"fontSize":18,"color":"#d9d9d9","centerX":0,"bottom":-7,"bold":true,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.qpapi.dating.Effect_txUI",ui.qpapi.dating.Effect_txUI);

            super.createChildren();
            this.createView(ui.qpapi.dating.LoadingUI.uiView);
        }
    }
}

module ui.qpapi.dating {
    export class Loading_SPUI extends View {
		public box_main:Laya.Box;
		public bar_jd:Laya.ProgressBar;
		public label_jd:laya.display.Text;
		public label_Tips:laya.display.Text;
		public eff_bar:ui.qpapi.dating.Effect_txUI;
		public txt_ad:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Box","props":{"y":640,"x":360,"var":"box_main","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":0,"skin":"ui/loading/tu_bj1.jpg","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Image","props":{"x":68,"skin":"ui/loading/tu_di1SP.png","bottom":0}},{"type":"Image","props":{"x":75,"skin":"ui/loading/tu_di.png","bottom":235}},{"type":"Image","props":{"y":225,"x":91,"skin":"ui/loading/tu_logo.png"}}]},{"type":"Box","props":{"width":720,"height":92,"centerX":0,"bottom":79,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ProgressBar","props":{"width":665,"var":"bar_jd","skin":"ui/loading/progress.png","sizeGrid":"10,20,10,20","height":22,"centerY":20,"centerX":0}},{"type":"Text","props":{"y":53,"x":0,"width":720,"visible":false,"var":"label_jd","text":"0%","strokeColor":"#7c4913","stroke":3,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":22,"x":0,"width":720,"var":"label_Tips","text":"{0}/{1}：正在启动游戏","height":25,"fontSize":22,"color":"#d9d9d9","bold":true,"align":"center"}},{"type":"Effect_tx","props":{"y":41,"x":-79,"var":"eff_bar","blendMode":"lighter","runtime":"ui.qpapi.dating.Effect_txUI"}}]},{"type":"Label","props":{"width":720,"var":"txt_ad","text":"听说下雨天打牌更配哦","height":38,"fontSize":18,"color":"#d9d9d9","centerX":0,"bottom":24,"bold":true,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.qpapi.dating.Effect_txUI",ui.qpapi.dating.Effect_txUI);

            super.createChildren();
            this.createView(ui.qpapi.dating.Loading_SPUI.uiView);
        }
    }
}
