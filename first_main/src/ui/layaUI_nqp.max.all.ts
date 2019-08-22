
module ui.nqp.dating {
    export class LoadingUI extends View {
		public ani1:Laya.FrameAnimation;
		public di:ui.nqp.dating.Loading_DHUI;
		public bar_jd:Laya.ProgressBar;
		public label_jd:laya.display.Text;
		public label_Tips:laya.display.Text;
		public txt_ad:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"top":-1,"right":-1,"left":-1,"bottom":-1},"child":[{"type":"Loading_DH","props":{"var":"di","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorX":0.5,"runtime":"ui.nqp.dating.Loading_DHUI"}},{"type":"Box","props":{"width":1280,"height":111,"centerX":0,"bottom":60,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ProgressBar","props":{"y":57,"x":283,"width":706,"var":"bar_jd","skin":"ui/loading/progress.png","sizeGrid":"0,23,0,20","height":9}},{"type":"Image","props":{"y":22.5,"skin":"ui/loading/tu_1.png","centerX":-200,"anchorY":0.5,"anchorX":0.5,"alpha":0.5},"compId":8},{"type":"Image","props":{"y":22.5,"skin":"ui/loading/tu_2.png","centerX":-130,"anchorY":0.5,"anchorX":0.5,"alpha":0.5},"compId":9},{"type":"Image","props":{"y":22.5,"skin":"ui/loading/tu_3.png","centerX":130,"anchorY":0.5,"anchorX":0.5,"alpha":0.5},"compId":10},{"type":"Image","props":{"y":22.5,"skin":"ui/loading/tu_4.png","centerX":200,"anchorY":0.5,"anchorX":0.5,"alpha":0.5},"compId":11},{"type":"Text","props":{"y":49,"x":187,"width":911,"var":"label_jd","text":"0%","strokeColor":"#7c4913","stroke":3,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":10,"x":186,"width":911,"var":"label_Tips","text":"正在校验文件,请稍等","height":25,"fontSize":20,"color":"#f6ff30","align":"center"}}]},{"type":"Label","props":{"width":1280,"var":"txt_ad","text":"听说下雨天打牌更配哦","height":38,"fontSize":20,"color":"#ffffff","centerX":0,"bottom":10,"align":"center"}}]}],"animations":[{"nodes":[{"target":8,"keyframes":{"x":[{"value":560,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":0},{"value":560,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":50}],"centerX":[{"value":-200,"tweenMethod":"linearNone","tween":false,"target":8,"key":"centerX","index":0},{"value":-200,"tweenMethod":"linearNone","tween":true,"target":8,"key":"centerX","index":50}],"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":10},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"alpha","index":20}]}},{"target":9,"keyframes":{"x":[{"value":615,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":0},{"value":615,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":50}],"centerX":[{"value":-130,"tweenMethod":"linearNone","tween":false,"target":9,"key":"centerX","index":0},{"value":-130,"tweenMethod":"linearNone","tween":true,"target":9,"key":"centerX","index":50}],"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":20},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":30}]}},{"target":10,"keyframes":{"x":[{"value":669,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":0},{"value":669,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":50}],"centerX":[{"value":130,"tweenMethod":"linearNone","tween":true,"target":10,"key":"centerX","index":0}],"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":20},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":30},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":40}]}},{"target":11,"keyframes":{"x":[{"value":724,"tweenMethod":"linearNone","tween":true,"target":11,"key":"x","index":0}],"centerX":[{"value":200,"tweenMethod":"linearNone","tween":true,"target":11,"key":"centerX","index":0}],"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":11,"label":null,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":11,"key":"alpha","index":30},{"value":1,"tweenMethod":"linearNone","tween":true,"target":11,"key":"alpha","index":40},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":11,"key":"alpha","index":50}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.dating.Loading_DHUI",ui.nqp.dating.Loading_DHUI);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.dating.LoadingUI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class Loading1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"ui/logo/yuabdi.png"}},{"type":"Image","props":{"y":64,"x":73,"skin":"ui/logo/taoxin.png","scaleX":-0.5833333333333333,"anchorY":0.5,"anchorX":0.5},"compId":7},{"type":"Image","props":{"y":116,"x":63,"skin":"ui/logo/heidi.png"}},{"type":"Image","props":{"y":116,"x":92,"skin":"ui/logo/heidi.png"}},{"type":"Image","props":{"y":116,"x":34,"skin":"ui/logo/heidi.png"}},{"type":"Image","props":{"y":98,"x":17,"skin":"ui/logo/liangdian.png","alpha":0},"compId":9},{"type":"Image","props":{"y":98,"x":46,"skin":"ui/logo/liangdian.png","alpha":0},"compId":15},{"type":"Image","props":{"y":98,"x":75,"skin":"ui/logo/liangdian.png","alpha":0.875},"compId":16}]}],"animations":[{"nodes":[{"target":7,"keyframes":{"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":0},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":24},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":26},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":52},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":54}]}},{"target":9,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":8},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":25},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":26},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":34},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":35},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":36}]}},{"target":15,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":15,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":15,"key":"alpha","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":15,"key":"alpha","index":8},{"value":0,"tweenMethod":"linearNone","tween":true,"target":15,"key":"alpha","index":16},{"value":0,"tweenMethod":"linearNone","tween":true,"target":15,"key":"alpha","index":35},{"value":1,"tweenMethod":"linearNone","tween":true,"target":15,"key":"alpha","index":36},{"value":0,"tweenMethod":"linearNone","tween":true,"target":15,"key":"alpha","index":44}]}},{"target":16,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":16,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":16,"key":"alpha","index":17},{"value":1,"tweenMethod":"linearNone","tween":true,"target":16,"key":"alpha","index":18},{"value":0,"tweenMethod":"linearNone","tween":true,"target":16,"key":"alpha","index":26},{"value":0,"tweenMethod":"linearNone","tween":true,"target":16,"key":"alpha","index":43},{"value":1,"tweenMethod":"linearNone","tween":true,"target":16,"key":"alpha","index":44},{"value":0,"tweenMethod":"linearNone","tween":true,"target":16,"key":"alpha","index":54}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.Loading1UI.uiView);
        }
    }
}

module ui.nqp.dating {
    export class Loading_DHUI extends View {
		public ani1:Laya.FrameAnimation;
		public image_Bg:Laya.Image;
		public txt_zhenyan:Laya.Label;
		public box_app:Laya.Box;
		public txt_appbbh:Laya.Label;
		public box_v:Laya.Box;
		public txt_bbh:Laya.Label;
		public btn_kefu:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"var":"image_Bg","top":-1,"skin":"ui/loading/tu_bj.jpg","right":-140,"left":-140,"bottom":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":673,"x":0,"width":1280,"visible":false,"var":"txt_zhenyan","text":"抵制不良游戏 拒绝盗版游戏　注意自我保护 谨防受骗上当　适度游戏益脑 沉迷游戏伤身　合理安排时间 享受健康生活","leading":8,"height":38,"fontSize":20,"color":"#ffffff","centerX":0,"bottom":10,"align":"center"}},{"type":"Box","props":{"y":19,"x":19,"top":20,"left":20},"child":[{"type":"Box","props":{"y":-1,"x":170,"var":"box_app","height":20},"child":[{"type":"Label","props":{"y":0,"x":103,"width":50,"var":"txt_appbbh","underlineColor":"#00ff00","text":1.4,"height":20,"fontSize":18,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":110,"underlineColor":"#00ff00","text":"APP版本号:","height":20,"fontSize":18,"color":"#ffffff","align":"left"}}]},{"type":"Box","props":{"y":-1,"x":0,"var":"box_v","height":20},"child":[{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":80,"underlineColor":"#00ff00","text":"版本号:","height":20,"fontSize":18,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":0,"x":66,"width":80,"var":"txt_bbh","underlineColor":"#00ff00","text":"1.4.0.000","height":20,"fontSize":18,"color":"#ffffff","align":"left"}}]}]},{"type":"Button","props":{"y":55,"x":1215,"var":"btn_kefu","top":19,"stateNum":1,"skin":"ui/loading/btn_kehu.png","right":35,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":292,"x":640,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":66,"child":[{"type":"Image","props":{"y":11,"x":155.5,"skin":"ui/logo/di.png"}},{"type":"Image","props":{"y":332,"x":243.5,"skin":"ui/logo/dadeng.png","blendMode":"lighter","alpha":1},"compId":37},{"type":"Image","props":{"y":333,"x":350.5,"skin":"ui/logo/dadeng.png","blendMode":"lighter","alpha":1}},{"type":"Image","props":{"y":330,"x":543.5,"skin":"ui/logo/dadeng.png","blendMode":"lighter"}},{"type":"Image","props":{"y":332,"x":459.5,"skin":"ui/logo/dadeng.png","blendMode":"lighter","alpha":1}},{"type":"Image","props":{"y":85,"x":236.5,"skin":"ui/logo/dadeng.png","blendMode":"lighter","alpha":1}},{"type":"Image","props":{"y":22,"x":343.5,"skin":"ui/logo/dadeng.png","blendMode":"lighter","alpha":1}},{"type":"Image","props":{"y":16,"x":439.5,"skin":"ui/logo/dadeng.png","blendMode":"lighter","alpha":1},"compId":43},{"type":"Image","props":{"y":78,"x":540.5,"skin":"ui/logo/dadeng.png","blendMode":"lighter","alpha":0}},{"type":"Image","props":{"y":338,"x":295.5,"skin":"ui/logo/xiaodeng.png","blendMode":"lighter","alpha":1},"compId":45},{"type":"Image","props":{"y":337,"x":404.5,"skin":"ui/logo/xiaodeng.png","blendMode":"lighter","alpha":1},"compId":46},{"type":"Image","props":{"y":336,"x":506.5,"skin":"ui/logo/xiaodeng.png","blendMode":"lighter"}},{"type":"Image","props":{"y":51,"x":289.5,"skin":"ui/logo/xiaodeng.png","blendMode":"lighter","alpha":1},"compId":48},{"type":"Image","props":{"y":51,"x":497.5,"skin":"ui/logo/xiaodeng.png","blendMode":"lighter","alpha":1},"compId":49},{"type":"Image","props":{"x":396.5,"skin":"ui/logo/xiaodeng.png","blendMode":"lighter","alpha":1},"compId":50},{"type":"Image","props":{"y":53,"x":67.5,"skin":"ui/logo/ziti.png"}},{"type":"Image","props":{"y":298,"x":239.5,"skin":"ui/logo/xiaodeng.png","blendMode":"lighter"}},{"type":"Image","props":{"y":299,"x":560.5,"skin":"ui/logo/xiaodeng.png","blendMode":"lighter","alpha":1},"compId":54},{"type":"Image","props":{"y":259,"x":122.5,"skin":"ui/logo/guang.png","scaleY":1,"scaleX":1,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":55},{"type":"Image","props":{"y":101,"x":563.5,"skin":"ui/logo/guang.png","scaleY":1,"scaleX":1,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":57},{"type":"Image","props":{"y":118,"x":165.5,"skin":"ui/logo/hongguang.png","blendMode":"lighter"}},{"type":"Image","props":{"y":65,"x":344.5,"skin":"ui/logo/hongdeng01.png","blendMode":"lighter"}},{"type":"Image","props":{"y":37,"x":18.5,"skin":"ui/logo/10000.png","blendMode":"lighter","alpha":0},"compId":65}]},{"type":"Box","props":{"y":486,"x":640,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":359.9520525675617,"x":403.1381190013442,"width":188,"skin":"ui/logo/zhaoshe.png","scaleY":1.3,"scaleX":1.3,"rotation":-35,"pivotY":45,"pivotX":103,"height":712,"blendMode":"lighter"},"compId":60},{"type":"Image","props":{"y":369.9520525675617,"x":413.1381190013442,"width":188,"skin":"ui/logo/zhaoshe.png","scaleY":1.3,"scaleX":1.3,"rotation":-12,"pivotY":45,"pivotX":103,"height":712,"blendMode":"lighter"},"compId":61},{"type":"Image","props":{"y":456.9520525675617,"x":391.1381190013442,"skin":"ui/logo/zhaoshe.png","scaleY":2,"scaleX":2,"rotation":24,"blendMode":"lighter","anchorY":0.3,"anchorX":0.5},"compId":62}]},{"type":"Box","props":{"y":534,"x":640,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":3,"x":154,"skin":"ui/logo/guang01.png","scaleY":0.4,"scaleX":0.6,"rotation":-108,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":68},{"type":"Image","props":{"y":227,"x":242,"skin":"ui/logo/dapuke.png","scaleY":1,"scaleX":1,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":67},{"type":"Image","props":{"y":229,"x":242,"skin":"ui/logo/dapuke.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":59}]},{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":429,"x":864,"skin":"ui/logo/xiaopuke.png","scaleY":1,"scaleX":1,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":58},{"type":"Image","props":{"y":429,"x":864,"skin":"ui/logo/xiaopuke.png","scaleY":1,"scaleX":1,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":70}]}]}],"animations":[{"nodes":[{"target":65,"keyframes":{"skin":[{"value":"ui/logo/10000.png","tweenMethod":"linearNone","tween":false,"target":65,"key":"skin","index":0},{"value":"ui/logo/10000.png","tweenMethod":"linearNone","tween":false,"target":65,"label":null,"key":"skin","index":2},{"value":"ui/logo/10001.png","tweenMethod":"linearNone","tween":false,"target":65,"key":"skin","index":4},{"value":"ui/logo/10002.png","tweenMethod":"linearNone","tween":false,"target":65,"key":"skin","index":6},{"value":"ui/logo/10003.png","tweenMethod":"linearNone","tween":false,"target":65,"key":"skin","index":8},{"value":"ui/logo/10004.png","tweenMethod":"linearNone","tween":false,"target":65,"key":"skin","index":10},{"value":"ui/logo/10005.png","tweenMethod":"linearNone","tween":false,"target":65,"key":"skin","index":12},{"value":"ui/logo/10006.png","tweenMethod":"linearNone","tween":false,"target":65,"key":"skin","index":14},{"value":"ui/logo/10007.png","tweenMethod":"linearNone","tween":false,"target":65,"key":"skin","index":16},{"value":"ui/logo/10008.png","tweenMethod":"linearNone","tween":false,"target":65,"key":"skin","index":18},{"value":"ui/logo/10009.png","tweenMethod":"linearNone","tween":false,"target":65,"key":"skin","index":20},{"value":"ui/logo/10010.png","tweenMethod":"linearNone","tween":false,"target":65,"key":"skin","index":22},{"value":"ui/logo/10011.png","tweenMethod":"linearNone","tween":false,"target":65,"key":"skin","index":24},{"value":"ui/logo/10012.png","tweenMethod":"linearNone","tween":false,"target":65,"key":"skin","index":26},{"value":"ui/logo/10013.png","tweenMethod":"linearNone","tween":false,"target":65,"key":"skin","index":28},{"value":"ui/logo/10014.png","tweenMethod":"linearNone","tween":false,"target":65,"key":"skin","index":30},{"value":"ui/logo/10015.png","tweenMethod":"linearNone","tween":false,"target":65,"key":"skin","index":32},{"value":"ui/logo/10016.png","tweenMethod":"linearNone","tween":false,"target":65,"key":"skin","index":34},{"value":"ui/logo/10017.png","tweenMethod":"linearNone","tween":false,"target":65,"key":"skin","index":36},{"value":"ui/logo/10018.png","tweenMethod":"linearNone","tween":false,"target":65,"key":"skin","index":38},{"value":"ui/logo/10019.png","tweenMethod":"linearNone","tween":false,"target":65,"key":"skin","index":40},{"value":"ui/logo/10020.png","tweenMethod":"linearNone","tween":false,"target":65,"key":"skin","index":42}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":65,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":65,"key":"alpha","index":2},{"value":0,"tweenMethod":"linearNone","tween":false,"target":65,"key":"alpha","index":43}]}},{"target":55,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":55,"key":"scaleY","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":55,"key":"scaleY","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":55,"key":"scaleY","index":32}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":55,"key":"scaleX","index":0},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":55,"key":"scaleX","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":55,"key":"scaleX","index":32}]}},{"target":57,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":57,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":57,"label":null,"key":"scaleY","index":6},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":57,"key":"scaleY","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":57,"key":"scaleY","index":44}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":57,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":57,"label":null,"key":"scaleX","index":6},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":57,"key":"scaleX","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":57,"key":"scaleX","index":44}]}},{"target":37,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":37,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":37,"key":"alpha","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":37,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":37,"key":"alpha","index":16}]}},{"target":43,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":43,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":43,"key":"alpha","index":27},{"value":0,"tweenMethod":"linearNone","tween":true,"target":43,"key":"alpha","index":34},{"value":1,"tweenMethod":"linearNone","tween":true,"target":43,"key":"alpha","index":43}]}},{"target":45,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":45,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":45,"key":"alpha","index":33},{"value":0,"tweenMethod":"linearNone","tween":true,"target":45,"key":"alpha","index":40},{"value":1,"tweenMethod":"linearNone","tween":true,"target":45,"key":"alpha","index":50}]}},{"target":46,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":46,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":46,"key":"alpha","index":19},{"value":0,"tweenMethod":"linearNone","tween":true,"target":46,"key":"alpha","index":28},{"value":1,"tweenMethod":"linearNone","tween":true,"target":46,"key":"alpha","index":38}]}},{"target":48,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":48,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":48,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":48,"key":"alpha","index":47},{"value":1,"tweenMethod":"linearNone","tween":true,"target":48,"key":"alpha","index":57}]}},{"target":49,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":49,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":49,"key":"alpha","index":54},{"value":0,"tweenMethod":"linearNone","tween":true,"target":49,"key":"alpha","index":61},{"value":1,"tweenMethod":"linearNone","tween":true,"target":49,"key":"alpha","index":70}]}},{"target":50,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":50,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":50,"key":"alpha","index":62},{"value":0,"tweenMethod":"linearNone","tween":true,"target":50,"key":"alpha","index":70},{"value":1,"tweenMethod":"linearNone","tween":true,"target":50,"key":"alpha","index":80}]}},{"target":54,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":54,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":54,"key":"alpha","index":57},{"value":0,"tweenMethod":"linearNone","tween":true,"target":54,"key":"alpha","index":64},{"value":1,"tweenMethod":"linearNone","tween":true,"target":54,"key":"alpha","index":74}]}},{"target":66,"keyframes":{"y":[{"value":292,"tweenMethod":"linearNone","tween":true,"target":66,"key":"y","index":0},{"value":280,"tweenMethod":"linearNone","tween":true,"target":66,"key":"y","index":40},{"value":292,"tweenMethod":"linearNone","tween":true,"target":66,"label":null,"key":"y","index":80}]}},{"target":67,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":67,"key":"scaleY","index":0},{"value":1.15,"tweenMethod":"linearNone","tween":true,"target":67,"key":"scaleY","index":40}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":67,"key":"scaleX","index":0},{"value":1.15,"tweenMethod":"linearNone","tween":true,"target":67,"key":"scaleX","index":40}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":67,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":67,"key":"alpha","index":10},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":67,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":67,"key":"alpha","index":40}]}},{"target":59,"keyframes":{"y":[{"value":229,"tweenMethod":"linearNone","tween":true,"target":59,"key":"y","index":0},{"value":241,"tweenMethod":"linearNone","tween":true,"target":59,"key":"y","index":40},{"value":229,"tweenMethod":"linearNone","tween":true,"target":59,"label":null,"key":"y","index":80}]}},{"target":68,"keyframes":{"y":[{"value":3,"tweenMethod":"linearNone","tween":true,"target":68,"key":"y","index":0},{"value":31,"tweenMethod":"linearNone","tween":true,"target":68,"key":"y","index":40},{"value":3,"tweenMethod":"linearNone","tween":true,"target":68,"label":null,"key":"y","index":80}],"rotation":[{"value":-108,"tweenMethod":"linearNone","tween":true,"target":68,"key":"rotation","index":0},{"value":-108,"tweenMethod":"linearNone","tween":true,"target":68,"label":null,"key":"rotation","index":13},{"value":71,"tweenMethod":"linearNone","tween":true,"target":68,"key":"rotation","index":40}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":68,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":68,"key":"alpha","index":13},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":68,"key":"alpha","index":18},{"value":0,"tweenMethod":"linearNone","tween":true,"target":68,"key":"alpha","index":40}]}},{"target":58,"keyframes":{"y":[{"value":429,"tweenMethod":"linearNone","tween":true,"target":58,"key":"y","index":0},{"value":435,"tweenMethod":"linearNone","tween":true,"target":58,"key":"y","index":40},{"value":429,"tweenMethod":"linearNone","tween":true,"target":58,"label":null,"key":"y","index":80}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":58,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":58,"label":null,"key":"scaleY","index":40},{"value":1,"tweenMethod":"linearNone","tween":true,"target":58,"label":null,"key":"scaleY","index":80}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":58,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":58,"label":null,"key":"scaleX","index":40},{"value":1,"tweenMethod":"linearNone","tween":true,"target":58,"label":null,"key":"scaleX","index":80}]}},{"target":70,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":70,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":70,"label":null,"key":"scaleY","index":40},{"value":1.08,"tweenMethod":"linearNone","tween":true,"target":70,"key":"scaleY","index":56},{"value":1.09,"tweenMethod":"linearNone","tween":true,"target":70,"key":"scaleY","index":77}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":70,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":70,"label":null,"key":"scaleX","index":40},{"value":1.08,"tweenMethod":"linearNone","tween":true,"target":70,"key":"scaleX","index":56},{"value":1.09,"tweenMethod":"linearNone","tween":true,"target":70,"key":"scaleX","index":77}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":70,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":70,"label":null,"key":"alpha","index":40},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":70,"key":"alpha","index":48},{"value":0.25,"tweenMethod":"linearNone","tween":true,"target":70,"key":"alpha","index":56},{"value":0,"tweenMethod":"linearNone","tween":true,"target":70,"key":"alpha","index":64}]}},{"target":60,"keyframes":{"rotation":[{"value":-35,"tweenMethod":"linearNone","tween":true,"target":60,"key":"rotation","index":0},{"value":-2,"tweenMethod":"linearNone","tween":true,"target":60,"key":"rotation","index":38},{"value":-28,"tweenMethod":"linearNone","tween":true,"target":60,"key":"rotation","index":68},{"value":-35,"tweenMethod":"linearNone","tween":true,"target":60,"key":"rotation","index":80}]}},{"target":61,"keyframes":{"rotation":[{"value":-12,"tweenMethod":"linearNone","tween":true,"target":61,"key":"rotation","index":0},{"value":23,"tweenMethod":"linearNone","tween":true,"target":61,"key":"rotation","index":24},{"value":-12,"tweenMethod":"linearNone","tween":true,"target":61,"key":"rotation","index":80}]}},{"target":62,"keyframes":{"rotation":[{"value":24,"tweenMethod":"linearNone","tween":true,"target":62,"key":"rotation","index":0},{"value":8,"tweenMethod":"linearNone","tween":true,"target":62,"key":"rotation","index":14},{"value":-7,"tweenMethod":"linearNone","tween":true,"target":62,"key":"rotation","index":44},{"value":24,"tweenMethod":"linearNone","tween":true,"target":62,"key":"rotation","index":80}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.dating.Loading_DHUI.uiView);
        }
    }
}
