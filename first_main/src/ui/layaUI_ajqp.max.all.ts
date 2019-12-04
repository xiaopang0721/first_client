
module ui.ajqp.dating {
    export class LoadingUI extends View {
		public di:ui.ajqp.dating.Loading_DHUI;
		public bar_jd:Laya.ProgressBar;
		public label_Tips:laya.display.Text;
		public label_jd:laya.display.Text;
		public txt_ad:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"top":-1,"right":-1,"left":-1,"bottom":-1},"child":[{"type":"Loading_DH","props":{"var":"di","top":0,"right":0,"left":0,"bottom":0,"runtime":"ui.ajqp.dating.Loading_DHUI"}},{"type":"Box","props":{"x":641,"width":1280,"height":92,"centerX":0,"bottom":43,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ProgressBar","props":{"x":-89,"var":"bar_jd","value":0.1,"skin":"ui/loading/progress.png","sizeGrid":"0,20,0,20","centerY":20,"centerX":0}},{"type":"Text","props":{"y":22,"x":186,"width":911,"visible":false,"var":"label_Tips","text":"11/11：正在启动游戏","height":25,"fontSize":21,"color":"#f3d7ad","align":"center"}},{"type":"Text","props":{"y":53,"x":187,"width":911,"visible":false,"var":"label_jd","text":"0%","height":25,"fontSize":20,"align":"center"}}]},{"type":"Label","props":{"width":1280,"visible":false,"var":"txt_ad","text":"听说下雨天打牌更配哦","height":38,"fontSize":21,"centerX":0,"bottom":-7,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.dating.Loading_DHUI",ui.ajqp.dating.Loading_DHUI);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.dating.LoadingUI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class Loading1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":147,"height":147,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":1,"x":1,"skin":"ui/logo/tu_di.png","centerY":0,"centerX":0}},{"type":"Image","props":{"x":73,"skin":"ui/logo/tu.png","centerY":-15,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":6},{"type":"Image","props":{"y":119,"x":33,"skin":"ui/logo/tu_d.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":119,"x":60,"skin":"ui/logo/tu_d.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":119,"x":87,"skin":"ui/logo/tu_d.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":119,"x":114,"skin":"ui/logo/tu_d.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":119,"x":33,"skin":"ui/logo/tu_ld.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":12},{"type":"Image","props":{"y":119,"x":60,"skin":"ui/logo/tu_ld.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":13},{"type":"Image","props":{"y":119,"x":87,"skin":"ui/logo/tu_ld.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":14},{"type":"Image","props":{"y":119,"x":114,"skin":"ui/logo/tu_ld.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":15}]}],"animations":[{"nodes":[{"target":6,"keyframes":{"skin":[{"value":"ui/logo/tu.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":0},{"value":"ui/logo/tu_ht.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":10},{"value":"ui/logo/tu_ht.png","tweenMethod":"linearNone","tween":false,"target":6,"label":null,"key":"skin","index":13},{"value":"ui/logo/tu_hx.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":53},{"value":"ui/logo/tu_hx.png","tweenMethod":"linearNone","tween":false,"target":6,"label":null,"key":"skin","index":56},{"value":"ui/logo/tu.png","tweenMethod":"linearNone","tween":false,"target":6,"label":null,"key":"skin","index":98},{"value":"ui/logo/tu.png","tweenMethod":"linearNone","tween":false,"target":6,"label":null,"key":"skin","index":120}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"scaleX","index":13},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":33},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":53},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"scaleX","index":56},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":78},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":98},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"scaleX","index":118}]}},{"target":15,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":15,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":15,"key":"alpha","index":44},{"value":1,"tweenMethod":"linearNone","tween":true,"target":15,"key":"alpha","index":45},{"value":0,"tweenMethod":"linearNone","tween":true,"target":15,"key":"alpha","index":60},{"value":0,"tweenMethod":"linearNone","tween":true,"target":15,"label":null,"key":"alpha","index":105},{"value":1,"tweenMethod":"linearNone","tween":true,"target":15,"label":null,"key":"alpha","index":106},{"value":0,"tweenMethod":"linearNone","tween":true,"target":15,"label":null,"key":"alpha","index":120}]}},{"target":14,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":14,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":14,"key":"alpha","index":29},{"value":1,"tweenMethod":"linearNone","tween":true,"target":14,"key":"alpha","index":30},{"value":0,"tweenMethod":"linearNone","tween":true,"target":14,"key":"alpha","index":45},{"value":0,"tweenMethod":"linearNone","tween":true,"target":14,"label":null,"key":"alpha","index":90},{"value":1,"tweenMethod":"linearNone","tween":true,"target":14,"label":null,"key":"alpha","index":91},{"value":0,"tweenMethod":"linearNone","tween":true,"target":14,"label":null,"key":"alpha","index":106}]}},{"target":13,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":13,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":13,"key":"alpha","index":14},{"value":1,"tweenMethod":"linearNone","tween":true,"target":13,"key":"alpha","index":15},{"value":0,"tweenMethod":"linearNone","tween":true,"target":13,"key":"alpha","index":30},{"value":0,"tweenMethod":"linearNone","tween":true,"target":13,"label":null,"key":"alpha","index":75},{"value":1,"tweenMethod":"linearNone","tween":true,"target":13,"label":null,"key":"alpha","index":76},{"value":0,"tweenMethod":"linearNone","tween":true,"target":13,"label":null,"key":"alpha","index":91}]}},{"target":12,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":12,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":12,"key":"alpha","index":15},{"value":0,"tweenMethod":"linearNone","tween":true,"target":12,"key":"alpha","index":59},{"value":1,"tweenMethod":"linearNone","tween":true,"target":12,"key":"alpha","index":60},{"value":0,"tweenMethod":"linearNone","tween":true,"target":12,"key":"alpha","index":75}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.Loading1UI.uiView);
        }
    }
}

module ui.ajqp.dating {
    export class Loading_DHUI extends View {
		public ani1:Laya.FrameAnimation;
		public image_Bg:Laya.Image;
		public txt_zhenyan:Laya.Label;
		public box_app:Laya.Box;
		public txt_appbbh:Laya.Label;
		public box_v:Laya.Box;
		public txt_bbh:Laya.Label;
		public btn_kefu:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"top":-1,"right":-1,"left":-1,"bottom":-1},"child":[{"type":"Image","props":{"y":2,"x":2,"var":"image_Bg","top":-2,"skin":"ui/loading/tu_bj.jpg","right":-2,"left":-2,"bottom":-2}},{"type":"Label","props":{"width":1280,"visible":false,"var":"txt_zhenyan","text":"抵制不良游戏 拒绝盗版游戏　注意自我保护 谨防受骗上当　适度游戏益脑 沉迷游戏伤身　合理安排时间 享受健康生活","leading":8,"height":17,"fontSize":17,"color":"#d9d9d9","centerX":0,"bottom":10,"bold":true,"align":"center"}},{"type":"Box","props":{"top":20,"left":20},"child":[{"type":"Box","props":{"y":-1,"x":170,"var":"box_app","height":20},"child":[{"type":"Label","props":{"y":0,"x":103,"width":50,"var":"txt_appbbh","underlineColor":"#00ff00","text":1.4,"height":20,"fontSize":18,"color":"#d9d9d9","align":"left"}},{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":110,"underlineColor":"#00ff00","text":"APP版本号:","height":20,"fontSize":18,"color":"#d9d9d9","align":"left"}}]},{"type":"Box","props":{"y":-1,"x":0,"var":"box_v","height":20},"child":[{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":80,"underlineColor":"#00ff00","text":"版本号:","height":20,"fontSize":18,"color":"#d9d9d9","align":"left"}},{"type":"Label","props":{"y":0,"x":66,"width":80,"var":"txt_bbh","underlineColor":"#00ff00","text":"1.4.0.000","height":20,"fontSize":18,"color":"#d9d9d9","align":"left"}}]}]},{"type":"Button","props":{"var":"btn_kefu","top":25,"stateNum":1,"skin":"ui/loading/btn_kehu.png","right":35,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"x":641,"skin":"ui/logo/tu_dz.png","centerX":0,"bottom":163,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":15,"width":1000,"height":600,"centerX":0},"child":[{"type":"Image","props":{"y":315,"x":491,"skin":"ui/logo/tu_fg.png","rotation":-0.7894736842105263,"blendMode":"lighter","anchorY":0.8,"anchorX":0.5,"alpha":0.45454545454545453},"compId":61},{"type":"Image","props":{"y":358,"x":497,"skin":"ui/logo/tu_shu.png","rotation":-0.7894736842105263,"anchorY":1,"anchorX":0.5},"compId":49},{"type":"Image","props":{"y":326.2903225806452,"x":492,"skin":"ui/logo/tu_z.png","anchorY":0.5,"anchorX":0.5},"compId":45},{"type":"Image","props":{"y":133.29032258064515,"x":192,"skin":"ui/logo/tu_g2.png","blendMode":"lighter"},"compId":46},{"type":"Image","props":{"y":339.2903225806452,"x":542,"skin":"ui/logo/tu_g.png","blendMode":"lighter"},"compId":47},{"type":"Image","props":{"y":309.2903225806452,"x":3,"skin":"ui/logo/tu_g1.png","blendMode":"lighter"},"compId":48},{"type":"Image","props":{"y":312,"x":485,"skin":"ui/logo/10020.png","scaleY":0.96,"scaleX":0.96,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":50},{"type":"Image","props":{"y":254.29032258064515,"x":386,"skin":"ui/logo/tu_hx1.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.41935483870967744},"compId":52},{"type":"Image","props":{"y":300.2903225806452,"x":452,"skin":"ui/logo/tu_lx.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.5806451612903225},"compId":53},{"type":"Image","props":{"y":56,"x":254,"skin":"ui/logo/tu_hd.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":54},{"type":"Image","props":{"y":185,"x":271,"skin":"ui/logo/tu_hd.png","scaleY":0.5,"scaleX":0.5,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":55},{"type":"Image","props":{"y":357,"x":310,"skin":"ui/logo/tu_hd.png","scaleY":0.8,"scaleX":0.8,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":56},{"type":"Image","props":{"y":480,"x":442,"skin":"ui/logo/tu_hd.png","scaleY":1,"scaleX":1,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0.2727272727272727},"compId":57},{"type":"Image","props":{"y":458,"x":279,"skin":"ui/logo/tu_ldd.png","alpha":0.8461538461538461},"compId":58},{"type":"Image","props":{"y":451,"x":180,"skin":"ui/logo/tu_ldd1.png","anchorY":0.5,"anchorX":0.5,"alpha":0.17647058823529413},"compId":59},{"type":"Image","props":{"y":357,"x":164,"skin":"ui/logo/tu_ldd.png","scaleY":0.5,"scaleX":0.5}}]},{"type":"Box","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":606,"x":94,"skin":"ui/logo/zhaoshe.png","scaleY":0.8838709677419355,"rotation":-133.61290322580646,"anchorY":0.05,"anchorX":0.55,"alpha":1},"compId":63},{"type":"Image","props":{"y":631,"x":1179,"skin":"ui/logo/zhaoshe.png","scaleY":0.8838709677419355,"rotation":130.61290322580646,"anchorY":0.05,"anchorX":0.55},"compId":64},{"type":"Image","props":{"y":830,"x":1047,"skin":"ui/logo/zhaoshe.png","scaleY":0.8838709677419355,"rotation":138.51612903225808,"anchorY":0.05,"anchorX":0.55},"compId":65},{"type":"Image","props":{"y":820,"x":305,"skin":"ui/logo/zhaoshe.png","scaleY":0.8838709677419355,"rotation":212.06451612903226,"anchorY":0.05,"anchorX":0.55},"compId":66}]}]}],"animations":[{"nodes":[{"target":50,"keyframes":{"y":[{"value":327,"tweenMethod":"linearNone","tween":true,"target":50,"key":"y","index":0},{"value":312,"tweenMethod":"linearNone","tween":true,"target":50,"key":"y","index":39}],"skin":[{"value":"ui/logo/10000.png","tweenMethod":"linearNone","tween":false,"target":50,"key":"skin","index":0},{"value":"ui/logo/10001.png","tweenMethod":"linearNone","tween":false,"target":50,"key":"skin","index":2},{"value":"ui/logo/10002.png","tweenMethod":"linearNone","tween":false,"target":50,"key":"skin","index":4},{"value":"ui/logo/10003.png","tweenMethod":"linearNone","tween":false,"target":50,"key":"skin","index":6},{"value":"ui/logo/10004.png","tweenMethod":"linearNone","tween":false,"target":50,"key":"skin","index":8},{"value":"ui/logo/10005.png","tweenMethod":"linearNone","tween":false,"target":50,"key":"skin","index":10},{"value":"ui/logo/10006.png","tweenMethod":"linearNone","tween":false,"target":50,"key":"skin","index":12},{"value":"ui/logo/10007.png","tweenMethod":"linearNone","tween":false,"target":50,"key":"skin","index":14},{"value":"ui/logo/10008.png","tweenMethod":"linearNone","tween":false,"target":50,"key":"skin","index":16},{"value":"ui/logo/10009.png","tweenMethod":"linearNone","tween":false,"target":50,"key":"skin","index":18},{"value":"ui/logo/10010.png","tweenMethod":"linearNone","tween":false,"target":50,"key":"skin","index":20},{"value":"ui/logo/10011.png","tweenMethod":"linearNone","tween":false,"target":50,"key":"skin","index":22},{"value":"ui/logo/10012.png","tweenMethod":"linearNone","tween":false,"target":50,"key":"skin","index":24},{"value":"ui/logo/10013.png","tweenMethod":"linearNone","tween":false,"target":50,"key":"skin","index":26},{"value":"ui/logo/10014.png","tweenMethod":"linearNone","tween":false,"target":50,"key":"skin","index":28},{"value":"ui/logo/10015.png","tweenMethod":"linearNone","tween":false,"target":50,"key":"skin","index":30},{"value":"ui/logo/10016.png","tweenMethod":"linearNone","tween":false,"target":50,"key":"skin","index":32},{"value":"ui/logo/10017.png","tweenMethod":"linearNone","tween":false,"target":50,"key":"skin","index":34},{"value":"ui/logo/10018.png","tweenMethod":"linearNone","tween":false,"target":50,"key":"skin","index":36},{"value":"ui/logo/10019.png","tweenMethod":"linearNone","tween":false,"target":50,"key":"skin","index":38},{"value":"ui/logo/10020.png","tweenMethod":"linearNone","tween":false,"target":50,"key":"skin","index":40},{"value":"ui/logo/10020.png","tweenMethod":"linearNone","tween":false,"target":50,"label":null,"key":"skin","index":70}]}},{"target":61,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":61,"key":"rotation","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":61,"key":"rotation","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":61,"key":"rotation","index":37},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":61,"key":"rotation","index":56},{"value":0,"tweenMethod":"linearNone","tween":true,"target":61,"label":null,"key":"rotation","index":70}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":61,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":61,"key":"alpha","index":37},{"value":1,"tweenMethod":"linearNone","tween":true,"target":61,"key":"alpha","index":70}]}},{"target":55,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":55,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":55,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":55,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":55,"label":null,"key":"alpha","index":12},{"value":0,"tweenMethod":"linearNone","tween":true,"target":55,"label":null,"key":"alpha","index":17},{"value":0,"tweenMethod":"linearNone","tween":true,"target":55,"label":null,"key":"alpha","index":24},{"value":1,"tweenMethod":"linearNone","tween":true,"target":55,"label":null,"key":"alpha","index":28},{"value":0,"tweenMethod":"linearNone","tween":true,"target":55,"label":null,"key":"alpha","index":34},{"value":0,"tweenMethod":"linearNone","tween":true,"target":55,"label":null,"key":"alpha","index":42},{"value":1,"tweenMethod":"linearNone","tween":true,"target":55,"label":null,"key":"alpha","index":45},{"value":0,"tweenMethod":"linearNone","tween":true,"target":55,"label":null,"key":"alpha","index":51},{"value":0,"tweenMethod":"linearNone","tween":true,"target":55,"label":null,"key":"alpha","index":58},{"value":1,"tweenMethod":"linearNone","tween":true,"target":55,"label":null,"key":"alpha","index":61},{"value":0,"tweenMethod":"linearNone","tween":true,"target":55,"label":null,"key":"alpha","index":68}]}},{"target":54,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":54,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":54,"key":"alpha","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":54,"key":"alpha","index":12},{"value":0,"tweenMethod":"linearNone","tween":true,"target":54,"key":"alpha","index":17},{"value":0,"tweenMethod":"linearNone","tween":true,"target":54,"label":null,"key":"alpha","index":35},{"value":1,"tweenMethod":"linearNone","tween":true,"target":54,"label":null,"key":"alpha","index":39},{"value":0,"tweenMethod":"linearNone","tween":true,"target":54,"label":null,"key":"alpha","index":44},{"value":0,"tweenMethod":"linearNone","tween":true,"target":54,"label":null,"key":"alpha","index":60},{"value":1,"tweenMethod":"linearNone","tween":true,"target":54,"label":null,"key":"alpha","index":65},{"value":0,"tweenMethod":"linearNone","tween":true,"target":54,"label":null,"key":"alpha","index":70}]}},{"target":56,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":56,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":56,"key":"alpha","index":12},{"value":1,"tweenMethod":"linearNone","tween":true,"target":56,"key":"alpha","index":17},{"value":0,"tweenMethod":"linearNone","tween":true,"target":56,"key":"alpha","index":23},{"value":0,"tweenMethod":"linearNone","tween":true,"target":56,"label":null,"key":"alpha","index":36},{"value":1,"tweenMethod":"linearNone","tween":true,"target":56,"label":null,"key":"alpha","index":41},{"value":0,"tweenMethod":"linearNone","tween":true,"target":56,"label":null,"key":"alpha","index":47},{"value":0,"tweenMethod":"linearNone","tween":true,"target":56,"label":null,"key":"alpha","index":55},{"value":1,"tweenMethod":"linearNone","tween":true,"target":56,"label":null,"key":"alpha","index":60},{"value":0,"tweenMethod":"linearNone","tween":true,"target":56,"label":null,"key":"alpha","index":66}]}},{"target":57,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":57,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":57,"key":"alpha","index":6},{"value":0,"tweenMethod":"linearNone","tween":true,"target":57,"label":null,"key":"alpha","index":12},{"value":1,"tweenMethod":"linearNone","tween":true,"target":57,"key":"alpha","index":17},{"value":0,"tweenMethod":"linearNone","tween":true,"target":57,"key":"alpha","index":23},{"value":0,"tweenMethod":"linearNone","tween":true,"target":57,"label":null,"key":"alpha","index":33},{"value":1,"tweenMethod":"linearNone","tween":true,"target":57,"key":"alpha","index":44},{"value":0,"tweenMethod":"linearNone","tween":true,"target":57,"label":null,"key":"alpha","index":55}]}},{"target":58,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":58,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":58,"key":"alpha","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":58,"key":"alpha","index":15},{"value":0,"tweenMethod":"linearNone","tween":true,"target":58,"key":"alpha","index":24},{"value":0,"tweenMethod":"linearNone","tween":true,"target":58,"key":"alpha","index":40},{"value":1,"tweenMethod":"linearNone","tween":true,"target":58,"key":"alpha","index":50},{"value":0,"tweenMethod":"linearNone","tween":true,"target":58,"key":"alpha","index":63}]}},{"target":59,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":59,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":59,"key":"alpha","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":59,"key":"alpha","index":34},{"value":0,"tweenMethod":"linearNone","tween":true,"target":59,"key":"alpha","index":49},{"value":1,"tweenMethod":"linearNone","tween":true,"target":59,"key":"alpha","index":66}]}},{"target":63,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":63,"key":"scaleY","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":63,"key":"scaleY","index":39},{"value":1,"tweenMethod":"linearNone","tween":true,"target":63,"key":"scaleY","index":70}],"rotation":[{"value":-140,"tweenMethod":"linearNone","tween":true,"target":63,"key":"rotation","index":0},{"value":-129,"tweenMethod":"linearNone","tween":true,"target":63,"key":"rotation","index":39},{"value":-140,"tweenMethod":"linearNone","tween":true,"target":63,"label":null,"key":"rotation","index":70}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":63,"key":"alpha","index":0}]}},{"target":45,"keyframes":{"y":[{"value":335,"tweenMethod":"linearNone","tween":true,"target":45,"key":"y","index":0},{"value":320,"tweenMethod":"linearNone","tween":true,"target":45,"key":"y","index":39},{"value":335,"tweenMethod":"linearNone","tween":true,"target":45,"label":null,"key":"y","index":70}]}},{"target":46,"keyframes":{"y":[{"value":142,"tweenMethod":"linearNone","tween":true,"target":46,"key":"y","index":0},{"value":127,"tweenMethod":"linearNone","tween":true,"target":46,"key":"y","index":39},{"value":142,"tweenMethod":"linearNone","tween":true,"target":46,"label":null,"key":"y","index":70}]}},{"target":47,"keyframes":{"y":[{"value":348,"tweenMethod":"linearNone","tween":true,"target":47,"key":"y","index":0},{"value":333,"tweenMethod":"linearNone","tween":true,"target":47,"key":"y","index":39},{"value":348,"tweenMethod":"linearNone","tween":true,"target":47,"label":null,"key":"y","index":70}]}},{"target":48,"keyframes":{"y":[{"value":318,"tweenMethod":"linearNone","tween":true,"target":48,"key":"y","index":0},{"value":303,"tweenMethod":"linearNone","tween":true,"target":48,"key":"y","index":39},{"value":318,"tweenMethod":"linearNone","tween":true,"target":48,"label":null,"key":"y","index":70}]}},{"target":52,"keyframes":{"y":[{"value":263,"tweenMethod":"linearNone","tween":true,"target":52,"key":"y","index":0},{"value":248,"tweenMethod":"linearNone","tween":true,"target":52,"key":"y","index":39},{"value":263,"tweenMethod":"linearNone","tween":true,"target":52,"label":null,"key":"y","index":70}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":52,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":52,"key":"alpha","index":39},{"value":1,"tweenMethod":"linearNone","tween":true,"target":52,"key":"alpha","index":70}]}},{"target":53,"keyframes":{"y":[{"value":309,"tweenMethod":"linearNone","tween":true,"target":53,"key":"y","index":0},{"value":294,"tweenMethod":"linearNone","tween":true,"target":53,"key":"y","index":39},{"value":309,"tweenMethod":"linearNone","tween":true,"target":53,"label":null,"key":"y","index":70}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":53,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":53,"key":"alpha","index":39},{"value":0,"tweenMethod":"linearNone","tween":true,"target":53,"key":"alpha","index":70}]}},{"target":49,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":49,"key":"rotation","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":49,"key":"rotation","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":49,"key":"rotation","index":37},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":49,"key":"rotation","index":56},{"value":0,"tweenMethod":"linearNone","tween":true,"target":49,"label":null,"key":"rotation","index":70}]}},{"target":64,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":64,"key":"scaleY","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":64,"key":"scaleY","index":39},{"value":1,"tweenMethod":"linearNone","tween":true,"target":64,"label":null,"key":"scaleY","index":70}],"rotation":[{"value":137,"tweenMethod":"linearNone","tween":true,"target":64,"key":"rotation","index":0},{"value":126,"tweenMethod":"linearNone","tween":true,"target":64,"key":"rotation","index":39},{"value":137,"tweenMethod":"linearNone","tween":true,"target":64,"label":null,"key":"rotation","index":70}]}},{"target":65,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":65,"key":"scaleY","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":65,"key":"scaleY","index":39},{"value":1,"tweenMethod":"linearNone","tween":true,"target":65,"label":null,"key":"scaleY","index":70}],"rotation":[{"value":142,"tweenMethod":"linearNone","tween":true,"target":65,"key":"rotation","index":0},{"value":136,"tweenMethod":"linearNone","tween":true,"target":65,"key":"rotation","index":39},{"value":142,"tweenMethod":"linearNone","tween":true,"target":65,"label":null,"key":"rotation","index":70}]}},{"target":66,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":66,"key":"scaleY","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":66,"key":"scaleY","index":39},{"value":1,"tweenMethod":"linearNone","tween":true,"target":66,"label":null,"key":"scaleY","index":70}],"rotation":[{"value":208,"tweenMethod":"linearNone","tween":true,"target":66,"key":"rotation","index":0},{"value":215,"tweenMethod":"linearNone","tween":true,"target":66,"key":"rotation","index":39},{"value":208,"tweenMethod":"linearNone","tween":true,"target":66,"label":null,"key":"rotation","index":70}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.dating.Loading_DHUI.uiView);
        }
    }
}
