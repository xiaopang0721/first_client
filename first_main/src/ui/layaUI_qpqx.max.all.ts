
module ui.qpqx.dating {
    export class LoadingUI extends View {
		public ani1:Laya.FrameAnimation;
		public di:ui.qpqx.dating.Loading_DHUI;
		public bar_jd:Laya.ProgressBar;
		public label_jd:laya.display.Text;
		public label_Tips:laya.display.Text;
		public txt_ad:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"top":-1,"right":-1,"left":-1,"bottom":-1},"child":[{"type":"Loading_DH","props":{"var":"di","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorX":0.5,"runtime":"ui.qpqx.dating.Loading_DHUI"}},{"type":"Box","props":{"width":1280,"height":111,"centerX":0,"bottom":60,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ProgressBar","props":{"y":57,"x":283,"width":706,"var":"bar_jd","skin":"ui/loading/progress.png","sizeGrid":"0,23,0,20","height":9}},{"type":"Image","props":{"y":22.5,"skin":"ui/loading/tu_1.png","centerX":-200,"anchorY":0.5,"anchorX":0.5,"alpha":0.5},"compId":8},{"type":"Image","props":{"y":22.5,"skin":"ui/loading/tu_2.png","centerX":-130,"anchorY":0.5,"anchorX":0.5,"alpha":0.5},"compId":9},{"type":"Image","props":{"y":22.5,"skin":"ui/loading/tu_3.png","centerX":130,"anchorY":0.5,"anchorX":0.5,"alpha":0.5},"compId":10},{"type":"Image","props":{"y":22.5,"skin":"ui/loading/tu_4.png","centerX":200,"anchorY":0.5,"anchorX":0.5,"alpha":0.5},"compId":11},{"type":"Text","props":{"y":49,"x":187,"width":911,"var":"label_jd","text":"0%","strokeColor":"#7c4913","stroke":3,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":10,"x":186,"width":911,"var":"label_Tips","text":"正在校验文件,请稍等","height":25,"fontSize":20,"color":"#f6ff30","align":"center"}}]},{"type":"Label","props":{"width":1280,"var":"txt_ad","text":"听说下雨天打牌更配哦","height":38,"fontSize":20,"color":"#ffffff","centerX":0,"bottom":10,"align":"center"}}]}],"animations":[{"nodes":[{"target":8,"keyframes":{"x":[{"value":560,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":0},{"value":560,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":50}],"centerX":[{"value":-200,"tweenMethod":"linearNone","tween":false,"target":8,"key":"centerX","index":0},{"value":-200,"tweenMethod":"linearNone","tween":true,"target":8,"key":"centerX","index":50}],"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":10},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"alpha","index":20}]}},{"target":9,"keyframes":{"x":[{"value":615,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":0},{"value":615,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":50}],"centerX":[{"value":-130,"tweenMethod":"linearNone","tween":false,"target":9,"key":"centerX","index":0},{"value":-130,"tweenMethod":"linearNone","tween":true,"target":9,"key":"centerX","index":50}],"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":20},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":30}]}},{"target":10,"keyframes":{"x":[{"value":669,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":0},{"value":669,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":50}],"centerX":[{"value":130,"tweenMethod":"linearNone","tween":true,"target":10,"key":"centerX","index":0}],"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":20},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":30},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":40}]}},{"target":11,"keyframes":{"x":[{"value":724,"tweenMethod":"linearNone","tween":true,"target":11,"key":"x","index":0}],"centerX":[{"value":200,"tweenMethod":"linearNone","tween":true,"target":11,"key":"centerX","index":0}],"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":11,"label":null,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":11,"key":"alpha","index":30},{"value":1,"tweenMethod":"linearNone","tween":true,"target":11,"key":"alpha","index":40},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":11,"key":"alpha","index":50}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.qpqx.dating.Loading_DHUI",ui.qpqx.dating.Loading_DHUI);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.qpqx.dating.LoadingUI.uiView);
        }
    }
}

module ui.qpqx.dating {
    export class Loading_DHUI extends View {
		public ani1:Laya.FrameAnimation;
		public image_Bg:Laya.Image;
		public txt_zhenyan:Laya.Label;
		public box_app:Laya.Box;
		public txt_appbbh:Laya.Label;
		public box_v:Laya.Box;
		public txt_bbh:Laya.Label;
		public btn_kefu:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"x":640,"width":1280,"height":720,"anchorX":0.5},"child":[{"type":"Box","props":{"top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":361,"x":641,"var":"image_Bg","top":-1,"skin":"ui/loading/tu_bj.jpg","right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":673,"x":0,"width":1280,"visible":false,"var":"txt_zhenyan","text":"抵制不良游戏 拒绝盗版游戏　注意自我保护 谨防受骗上当　适度游戏益脑 沉迷游戏伤身　合理安排时间 享受健康生活","leading":8,"height":38,"fontSize":20,"color":"#ffffff","centerX":0,"bottom":10,"align":"center"}},{"type":"Box","props":{"y":19,"x":19,"top":20,"left":20},"child":[{"type":"Box","props":{"y":-1,"x":170,"var":"box_app","height":20},"child":[{"type":"Label","props":{"y":0,"x":103,"width":50,"var":"txt_appbbh","underlineColor":"#00ff00","text":1.4,"height":20,"fontSize":18,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":110,"underlineColor":"#00ff00","text":"APP版本号:","height":20,"fontSize":18,"color":"#ffffff","align":"left"}}]},{"type":"Box","props":{"y":-1,"x":0,"var":"box_v","height":20},"child":[{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":80,"underlineColor":"#00ff00","text":"版本号:","height":20,"fontSize":18,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":0,"x":66,"width":80,"var":"txt_bbh","underlineColor":"#00ff00","text":"1.4.0.000","height":20,"fontSize":18,"color":"#ffffff","align":"left"}}]}]},{"type":"Box","props":{"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":0.6},"child":[{"type":"Image","props":{"y":359.9520525675617,"x":403.1381190013442,"width":188,"skin":"ui/logo/zhaoshe.png","scaleY":1.3,"scaleX":1.3,"rotation":-7.210526315789473,"pivotY":45,"pivotX":103,"height":712,"blendMode":"lighter"},"compId":60},{"type":"Image","props":{"y":369.9520525675617,"x":413.1381190013442,"width":188,"skin":"ui/logo/zhaoshe.png","scaleY":1.3,"scaleX":1.3,"rotation":18,"pivotY":45,"pivotX":103,"height":712,"blendMode":"lighter"},"compId":61},{"type":"Image","props":{"y":456.9520525675617,"x":391.1381190013442,"skin":"ui/logo/zhaoshe.png","scaleY":2,"scaleX":2,"rotation":-1,"blendMode":"lighter","anchorY":0.3,"anchorX":0.5},"compId":62}]},{"type":"Box","props":{"top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":25.4,"x":154,"skin":"ui/logo/guang01.png","scaleY":0.4,"scaleX":0.6,"rotation":17.962962962962962,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.18181818181818182},"compId":68},{"type":"Image","props":{"y":227,"x":242,"skin":"ui/logo/dapuke.png","scaleY":1.1199999999999999,"scaleX":1.1199999999999999,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.2},"compId":67},{"type":"Image","props":{"y":238.6,"x":242,"skin":"ui/logo/dapuke.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":59}]},{"type":"Box","props":{"top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":433.8,"x":864,"skin":"ui/logo/xiaopuke.png","scaleY":1,"scaleX":1,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":58},{"type":"Image","props":{"y":429,"x":864,"skin":"ui/logo/xiaopuke.png","scaleY":1,"scaleX":1,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":70}]},{"type":"Button","props":{"y":55,"x":1215,"var":"btn_kefu","top":19,"stateNum":1,"skin":"ui/loading/btn_kehu.png","right":35,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":900,"top":100,"left":230,"height":500,"anchorY":0.5,"anchorX":0.5},"compId":93,"child":[{"type":"Image","props":{"skin":"ui/logo/tu_qx.png","centerX":0,"bottom":170,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"skin":"ui/logo/zt10006.png","right":90,"bottom":120,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":87},{"type":"Image","props":{"top":8,"skin":"ui/logo/10013.png","left":-50,"anchorY":0.5,"anchorX":0.5,"alpha":0.6923076923076923},"compId":88},{"type":"Image","props":{"y":31,"x":290,"skin":"ui/logo/tu_gx1.png","blendMode":"lighter","alpha":0},"compId":89},{"type":"Image","props":{"y":309,"x":100,"skin":"ui/logo/tu_x1.png","scaleY":1.24,"scaleX":1.24,"blendMode":"lighter","anchorY":0.4,"anchorX":0.55,"alpha":0.4},"compId":99},{"type":"Image","props":{"y":-35,"x":-325,"skin":"ui/logo/tu_gx2.png","blendMode":"lighter","alpha":0.6923076923076923},"compId":90},{"type":"Image","props":{"y":56,"x":262,"skin":"ui/logo/tu_gx3.png","blendMode":"lighter","alpha":0},"compId":91},{"type":"Image","props":{"y":107,"x":369,"skin":"ui/logo/tu_x6.png","scaleY":1.5,"scaleX":1.5,"blendMode":"lighter","anchorY":0.5,"anchorX":0.6,"alpha":0},"compId":94},{"type":"Image","props":{"y":80,"x":318,"skin":"ui/logo/tu_x5.png","scaleY":1.3,"scaleX":1.3,"blendMode":"lighter","anchorY":0.48,"anchorX":0.58,"alpha":0},"compId":95},{"type":"Image","props":{"y":72,"x":236,"skin":"ui/logo/tu_x4.png","scaleY":1.3,"scaleX":1.3,"blendMode":"lighter","anchorY":0.48,"anchorX":0.66,"alpha":0},"compId":96},{"type":"Image","props":{"y":110,"x":162,"skin":"ui/logo/tu_x3.png","scaleY":1.3,"scaleX":1.3,"blendMode":"lighter","anchorY":0.45,"anchorX":0.6,"alpha":0},"compId":97},{"type":"Image","props":{"y":192,"x":104,"skin":"ui/logo/tu_x2.png","scaleY":1.4,"scaleX":1.4,"blendMode":"lighter","anchorY":0.5,"anchorX":0.55,"alpha":0},"compId":98},{"type":"Image","props":{"y":237,"x":437,"skin":"ui/logo/tu_guang.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.39622641509433965},"compId":100},{"type":"Image","props":{"top":316,"skin":"ui/logo/tu_zt.png","left":260,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":278,"x":178,"blendMode":"lighter","alpha":0.5},"child":[{"type":"Image","props":{"y":50,"x":50,"skin":"ui/logo/tu_sgg.png","scaleX":1.3,"rotation":10,"renderType":"mask","anchorY":0.5,"anchorX":0.5},"compId":101},{"type":"Image","props":{"y":53,"x":241,"skin":"ui/logo/tu_zt.png","anchorY":0.5,"anchorX":0.5,"alpha":1}}]}]}]}],"animations":[{"nodes":[{"target":67,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":67,"key":"scaleY","index":0},{"value":1.15,"tweenMethod":"linearNone","tween":true,"target":67,"key":"scaleY","index":40}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":67,"key":"scaleX","index":0},{"value":1.15,"tweenMethod":"linearNone","tween":true,"target":67,"key":"scaleX","index":40}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":67,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":67,"key":"alpha","index":10},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":67,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":67,"key":"alpha","index":40}]}},{"target":59,"keyframes":{"y":[{"value":229,"tweenMethod":"linearNone","tween":true,"target":59,"key":"y","index":0},{"value":241,"tweenMethod":"linearNone","tween":true,"target":59,"key":"y","index":40},{"value":229,"tweenMethod":"linearNone","tween":true,"target":59,"label":null,"key":"y","index":80}]}},{"target":68,"keyframes":{"y":[{"value":3,"tweenMethod":"linearNone","tween":true,"target":68,"key":"y","index":0},{"value":31,"tweenMethod":"linearNone","tween":true,"target":68,"key":"y","index":40},{"value":3,"tweenMethod":"linearNone","tween":true,"target":68,"label":null,"key":"y","index":80}],"rotation":[{"value":-108,"tweenMethod":"linearNone","tween":true,"target":68,"key":"rotation","index":0},{"value":-108,"tweenMethod":"linearNone","tween":true,"target":68,"label":null,"key":"rotation","index":13},{"value":71,"tweenMethod":"linearNone","tween":true,"target":68,"key":"rotation","index":40}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":68,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":68,"key":"alpha","index":13},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":68,"key":"alpha","index":18},{"value":0,"tweenMethod":"linearNone","tween":true,"target":68,"key":"alpha","index":40}]}},{"target":58,"keyframes":{"y":[{"value":429,"tweenMethod":"linearNone","tween":true,"target":58,"key":"y","index":0},{"value":435,"tweenMethod":"linearNone","tween":true,"target":58,"key":"y","index":40},{"value":429,"tweenMethod":"linearNone","tween":true,"target":58,"label":null,"key":"y","index":80}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":58,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":58,"label":null,"key":"scaleY","index":40},{"value":1,"tweenMethod":"linearNone","tween":true,"target":58,"label":null,"key":"scaleY","index":80}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":58,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":58,"label":null,"key":"scaleX","index":40},{"value":1,"tweenMethod":"linearNone","tween":true,"target":58,"label":null,"key":"scaleX","index":80}]}},{"target":70,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":70,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":70,"label":null,"key":"scaleY","index":40},{"value":1.08,"tweenMethod":"linearNone","tween":true,"target":70,"key":"scaleY","index":56},{"value":1.09,"tweenMethod":"linearNone","tween":true,"target":70,"key":"scaleY","index":77}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":70,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":70,"label":null,"key":"scaleX","index":40},{"value":1.08,"tweenMethod":"linearNone","tween":true,"target":70,"key":"scaleX","index":56},{"value":1.09,"tweenMethod":"linearNone","tween":true,"target":70,"key":"scaleX","index":77}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":70,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":70,"label":null,"key":"alpha","index":40},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":70,"key":"alpha","index":48},{"value":0.25,"tweenMethod":"linearNone","tween":true,"target":70,"key":"alpha","index":56},{"value":0,"tweenMethod":"linearNone","tween":true,"target":70,"key":"alpha","index":64}]}},{"target":60,"keyframes":{"rotation":[{"value":-35,"tweenMethod":"linearNone","tween":true,"target":60,"key":"rotation","index":0},{"value":-2,"tweenMethod":"linearNone","tween":true,"target":60,"key":"rotation","index":38},{"value":-28,"tweenMethod":"linearNone","tween":true,"target":60,"key":"rotation","index":68},{"value":-35,"tweenMethod":"linearNone","tween":true,"target":60,"key":"rotation","index":80}]}},{"target":61,"keyframes":{"rotation":[{"value":-12,"tweenMethod":"linearNone","tween":true,"target":61,"key":"rotation","index":0},{"value":23,"tweenMethod":"linearNone","tween":true,"target":61,"key":"rotation","index":24},{"value":-12,"tweenMethod":"linearNone","tween":true,"target":61,"key":"rotation","index":80}]}},{"target":62,"keyframes":{"rotation":[{"value":24,"tweenMethod":"linearNone","tween":true,"target":62,"key":"rotation","index":0},{"value":8,"tweenMethod":"linearNone","tween":true,"target":62,"key":"rotation","index":14},{"value":-7,"tweenMethod":"linearNone","tween":true,"target":62,"key":"rotation","index":44},{"value":24,"tweenMethod":"linearNone","tween":true,"target":62,"key":"rotation","index":80}]}},{"target":88,"keyframes":{"skin":[{"value":"ui/logo/10001.png","tweenMethod":"linearNone","tween":false,"target":88,"key":"skin","index":0},{"value":"ui/logo/10002.png","tweenMethod":"linearNone","tween":false,"target":88,"key":"skin","index":2},{"value":"ui/logo/10003.png","tweenMethod":"linearNone","tween":false,"target":88,"key":"skin","index":4},{"value":"ui/logo/10004.png","tweenMethod":"linearNone","tween":false,"target":88,"key":"skin","index":6},{"value":"ui/logo/10005.png","tweenMethod":"linearNone","tween":false,"target":88,"key":"skin","index":8},{"value":"ui/logo/10006.png","tweenMethod":"linearNone","tween":false,"target":88,"key":"skin","index":10},{"value":"ui/logo/10007.png","tweenMethod":"linearNone","tween":false,"target":88,"key":"skin","index":12},{"value":"ui/logo/10008.png","tweenMethod":"linearNone","tween":false,"target":88,"key":"skin","index":14},{"value":"ui/logo/10009.png","tweenMethod":"linearNone","tween":false,"target":88,"key":"skin","index":16},{"value":"ui/logo/10010.png","tweenMethod":"linearNone","tween":false,"target":88,"key":"skin","index":18},{"value":"ui/logo/10011.png","tweenMethod":"linearNone","tween":false,"target":88,"key":"skin","index":20},{"value":"ui/logo/10012.png","tweenMethod":"linearNone","tween":false,"target":88,"key":"skin","index":22},{"value":"ui/logo/10013.png","tweenMethod":"linearNone","tween":false,"target":88,"key":"skin","index":24}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":88,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":88,"key":"alpha","index":24},{"value":0,"tweenMethod":"linearNone","tween":true,"target":88,"key":"alpha","index":50}]}},{"target":90,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":90,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":90,"key":"alpha","index":22},{"value":1,"tweenMethod":"linearNone","tween":true,"target":90,"key":"alpha","index":24},{"value":0,"tweenMethod":"linearNone","tween":true,"target":90,"key":"alpha","index":50}]}},{"target":94,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":94,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":94,"label":null,"key":"scaleY","index":4},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":94,"key":"scaleY","index":14}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":94,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":94,"label":null,"key":"scaleX","index":4},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":94,"key":"scaleX","index":14}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":94,"key":"alpha","index":0},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":94,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":94,"key":"alpha","index":14}]}},{"target":95,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":95,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":95,"key":"scaleY","index":9},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":95,"key":"scaleY","index":19}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":95,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":95,"key":"scaleX","index":9},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":95,"key":"scaleX","index":19}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":95,"key":"alpha","index":0},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":95,"key":"alpha","index":9},{"value":0,"tweenMethod":"linearNone","tween":true,"target":95,"key":"alpha","index":19}]}},{"target":96,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":96,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":96,"label":null,"key":"scaleY","index":14},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":96,"key":"scaleY","index":24}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":96,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":96,"label":null,"key":"scaleX","index":14},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":96,"key":"scaleX","index":24}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":96,"key":"alpha","index":0},{"value":0.4,"tweenMethod":"linearNone","tween":true,"target":96,"key":"alpha","index":14},{"value":0,"tweenMethod":"linearNone","tween":true,"target":96,"key":"alpha","index":24}]}},{"target":97,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":97,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":97,"key":"scaleY","index":18},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":97,"key":"scaleY","index":28}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":97,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":97,"key":"scaleX","index":18},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":97,"key":"scaleX","index":28}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":97,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":97,"key":"alpha","index":18},{"value":0,"tweenMethod":"linearNone","tween":true,"target":97,"key":"alpha","index":28}]}},{"target":98,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":98,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":98,"label":null,"key":"scaleY","index":22},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":98,"key":"scaleY","index":32}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":98,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":98,"label":null,"key":"scaleX","index":22},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":98,"key":"scaleX","index":32}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":98,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":98,"key":"alpha","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":98,"key":"alpha","index":32}]}},{"target":99,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":99,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":99,"label":null,"key":"scaleY","index":26},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":99,"key":"scaleY","index":36}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":99,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":99,"label":null,"key":"scaleX","index":26},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":99,"key":"scaleX","index":36}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":99,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":99,"label":null,"key":"alpha","index":26},{"value":0,"tweenMethod":"linearNone","tween":true,"target":99,"key":"alpha","index":36}]}},{"target":87,"keyframes":{"skin":[{"value":"ui/logo/zt10006.png","tweenMethod":"linearNone","tween":false,"target":87,"key":"skin","index":0},{"value":"ui/logo/zt10001.png","tweenMethod":"linearNone","tween":false,"target":87,"key":"skin","index":37},{"value":"ui/logo/zt10002.png","tweenMethod":"linearNone","tween":false,"target":87,"key":"skin","index":39},{"value":"ui/logo/zt10003.png","tweenMethod":"linearNone","tween":false,"target":87,"key":"skin","index":41},{"value":"ui/logo/zt10004.png","tweenMethod":"linearNone","tween":false,"target":87,"key":"skin","index":43},{"value":"ui/logo/zt10005.png","tweenMethod":"linearNone","tween":false,"target":87,"key":"skin","index":45},{"value":"ui/logo/zt10006.png","tweenMethod":"linearNone","tween":false,"target":87,"key":"skin","index":47},{"value":"ui/logo/zt10007.png","tweenMethod":"linearNone","tween":false,"target":87,"key":"skin","index":49},{"value":"ui/logo/zt10008.png","tweenMethod":"linearNone","tween":false,"target":87,"key":"skin","index":51},{"value":"ui/logo/zt10009.png","tweenMethod":"linearNone","tween":false,"target":87,"key":"skin","index":53},{"value":"ui/logo/zt10010.png","tweenMethod":"linearNone","tween":false,"target":87,"key":"skin","index":55},{"value":"ui/logo/zt10011.png","tweenMethod":"linearNone","tween":false,"target":87,"key":"skin","index":57},{"value":"ui/logo/zt10012.png","tweenMethod":"linearNone","tween":false,"target":87,"key":"skin","index":59},{"value":"ui/logo/zt10013.png","tweenMethod":"linearNone","tween":false,"target":87,"key":"skin","index":61}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":87,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":87,"key":"alpha","index":37},{"value":1,"tweenMethod":"linearNone","tween":true,"target":87,"key":"alpha","index":61},{"value":0,"tweenMethod":"linearNone","tween":true,"target":87,"key":"alpha","index":62}]}},{"target":89,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":89,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":89,"key":"alpha","index":40},{"value":1,"tweenMethod":"linearNone","tween":true,"target":89,"key":"alpha","index":44},{"value":0,"tweenMethod":"linearNone","tween":true,"target":89,"key":"alpha","index":50}]}},{"target":91,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":91,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":91,"label":null,"key":"alpha","index":47},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":91,"key":"alpha","index":55},{"value":0,"tweenMethod":"linearNone","tween":true,"target":91,"key":"alpha","index":66}]}},{"target":100,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":100,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":100,"key":"alpha","index":53},{"value":1,"tweenMethod":"linearNone","tween":true,"target":100,"key":"alpha","index":58},{"value":1,"tweenMethod":"linearNone","tween":true,"target":100,"label":null,"key":"alpha","index":62},{"value":0,"tweenMethod":"linearNone","tween":true,"target":100,"key":"alpha","index":71}]}},{"target":101,"keyframes":{"x":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":101,"key":"x","index":0},{"value":30,"tweenMethod":"linearNone","tween":true,"target":101,"label":null,"key":"x","index":40},{"value":441,"tweenMethod":"linearNone","tween":true,"target":101,"key":"x","index":80}]}},{"target":93,"keyframes":{"top":[{"value":100,"tweenMethod":"linearNone","tween":true,"target":93,"key":"top","index":0},{"value":90,"tweenMethod":"linearNone","tween":true,"target":93,"key":"top","index":40},{"value":100,"tweenMethod":"linearNone","tween":true,"target":93,"label":null,"key":"top","index":80}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.qpqx.dating.Loading_DHUI.uiView);
        }
    }
}
