
module ui.dating {
    export class LoadingUI extends View {
		public ani1:Laya.FrameAnimation;
		public di:ui.dating.Loading_DHUI;
		public btn_kefu:Laya.Button;
		public bar_jd:Laya.ProgressBar;
		public label_jd:laya.display.Text;
		public label_Tips:laya.display.Text;
		public txt_ad:laya.display.Text;
		public box_app:Laya.Box;
		public txt_appbbh:Laya.Label;
		public box_v:Laya.Box;
		public txt_bbh:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"top":-1,"right":-1,"left":-1,"bottom":-1},"child":[{"type":"Loading_DH","props":{"var":"di","top":0,"right":0,"left":0,"bottom":0,"runtime":"ui.dating.Loading_DHUI"}},{"type":"Button","props":{"y":102,"x":1266,"var":"btn_kefu","top":16,"stateNum":1,"skin":"ui/loading/btn_kehu.png","right":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":567,"x":641,"width":1280,"height":111,"centerX":0,"bottom":100,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ProgressBar","props":{"y":45.5,"x":-89,"width":926,"var":"bar_jd","value":0,"skin":"ui/loading/progress.png","sizeGrid":"0,23,0,20","height":25,"centerX":0}},{"type":"Image","props":{"y":22.5,"skin":"ui/loading/tu_1.png","centerX":-200,"anchorY":0.5,"anchorX":0.5,"alpha":0.5},"compId":8},{"type":"Image","props":{"y":22.5,"skin":"ui/loading/tu_2.png","centerX":-130,"anchorY":0.5,"anchorX":0.5,"alpha":0.5},"compId":9},{"type":"Image","props":{"y":22.5,"skin":"ui/loading/tu_3.png","centerX":130,"anchorY":0.5,"anchorX":0.5,"alpha":0.5},"compId":10},{"type":"Image","props":{"y":22.5,"skin":"ui/loading/tu_4.png","centerX":200,"anchorY":0.5,"anchorX":0.5,"alpha":0.5},"compId":11},{"type":"Text","props":{"y":47,"x":187,"width":911,"var":"label_jd","text":"0%","strokeColor":"#7c4913","stroke":3,"height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":10,"x":186,"width":911,"var":"label_Tips","text":"正在校验文件,请稍等","height":25,"fontSize":20,"color":"#f6ff30","align":"center"}},{"type":"Text","props":{"y":84,"x":190,"width":911,"var":"txt_ad","text":"听说下雨天打牌更配哦","height":25,"fontSize":20,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"top":40,"right":130},"child":[{"type":"Box","props":{"y":0,"x":-30,"var":"box_app"},"child":[{"type":"Label","props":{"y":0,"x":120,"width":49,"var":"txt_appbbh","underlineColor":"#00ff00","text":"1.4 ","height":18,"fontSize":18,"color":"#efda8b","align":"left"}},{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":120,"underlineColor":"#00ff00","text":"App版本号：","height":18,"fontSize":18,"color":"#efda8b","align":"right"}}]},{"type":"Box","props":{"y":22,"x":20,"var":"box_v"},"child":[{"type":"Label","props":{"y":0,"x":-50,"wordWrap":true,"width":120,"underlineColor":"#00ff00","text":"版本号：","height":18,"fontSize":18,"color":"#efda8b","align":"right"}},{"type":"Label","props":{"y":0,"x":70,"width":49,"var":"txt_bbh","underlineColor":"#00ff00","text":"1.4.0.000","height":18,"fontSize":18,"color":"#efda8b","align":"left"}}]}]}]}],"animations":[{"nodes":[{"target":8,"keyframes":{"x":[{"value":560,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":0},{"value":560,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":50}],"centerX":[{"value":-200,"tweenMethod":"linearNone","tween":false,"target":8,"key":"centerX","index":0},{"value":-200,"tweenMethod":"linearNone","tween":true,"target":8,"key":"centerX","index":50}],"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":10},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"alpha","index":20}]}},{"target":9,"keyframes":{"x":[{"value":615,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":0},{"value":615,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":50}],"centerX":[{"value":-130,"tweenMethod":"linearNone","tween":false,"target":9,"key":"centerX","index":0},{"value":-130,"tweenMethod":"linearNone","tween":true,"target":9,"key":"centerX","index":50}],"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":20},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":30}]}},{"target":10,"keyframes":{"x":[{"value":669,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":0},{"value":669,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":50}],"centerX":[{"value":130,"tweenMethod":"linearNone","tween":true,"target":10,"key":"centerX","index":0}],"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":20},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":30},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":40}]}},{"target":11,"keyframes":{"x":[{"value":724,"tweenMethod":"linearNone","tween":true,"target":11,"key":"x","index":0}],"centerX":[{"value":200,"tweenMethod":"linearNone","tween":true,"target":11,"key":"centerX","index":0}],"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":11,"label":null,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":11,"key":"alpha","index":30},{"value":1,"tweenMethod":"linearNone","tween":true,"target":11,"key":"alpha","index":40},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":11,"key":"alpha","index":50}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.dating.Loading_DHUI",ui.dating.Loading_DHUI);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.dating.LoadingUI.uiView);
        }
    }
}

module ui.dating {
    export class Loading1UI extends View {
		public ani1:Laya.FrameAnimation;
		public ani:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":80,"height":80},"child":[{"type":"Box","props":{"width":80,"var":"ani","height":80,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"ui/logo/load0000.png","rotation":75.78947368421052,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":3},{"type":"Image","props":{"width":101,"skin":"ui/logo/load0001.png","height":108,"centerY":3,"centerX":3,"anchorY":0.5,"anchorX":0.5},"compId":2}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"ui/logo/load0001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"ui/logo/load0002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":1},{"value":"ui/logo/load0003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":2},{"value":"ui/logo/load0004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"ui/logo/load0005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"ui/logo/load0006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":5},{"value":"ui/logo/load0007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"ui/logo/load0008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":7},{"value":"ui/logo/load0009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":8},{"value":"ui/logo/load0010.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":9},{"value":"ui/logo/load0011.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":10},{"value":"ui/logo/load0012.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":11},{"value":"ui/logo/load0013.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":12},{"value":"ui/logo/load0014.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":13},{"value":"ui/logo/load0015.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":14},{"value":"ui/logo/load0016.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":15},{"value":"ui/logo/load0017.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":16},{"value":"ui/logo/load0018.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":17},{"value":"ui/logo/load0019.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":18},{"value":"ui/logo/load0020.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":19}]}},{"target":3,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":19}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dating.Loading1UI.uiView);
        }
    }
}

module ui.dating {
    export class Loading_DHUI extends View {
		public ani2:Laya.FrameAnimation;
		public ani3:Laya.FrameAnimation;
		public ani4:Laya.FrameAnimation;
		public image_Bg:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"top":-1,"right":-1,"left":-1,"bottom":-1},"child":[{"type":"Image","props":{"y":2,"x":2,"var":"image_Bg","top":-2,"skin":"ui/loading/tu_bj.jpg","right":-2,"left":-2,"bottom":-2}},{"type":"Image","props":{"y":300,"skin":"ui/logo/logo595.png","centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":7,"child":[{"type":"Image","props":{"y":130,"x":186,"skin":"ui/logo/tu_wz.png"}}]},{"type":"Box","props":{"width":1074,"visible":false,"height":723,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":282.6666666666667,"x":40,"skin":"ui/loading/tu_p1.png","anchorY":0.5,"anchorX":0.5},"compId":15},{"type":"Image","props":{"y":103.65555555555557,"x":320.5,"skin":"ui/loading/tu_p2.png","anchorY":0.5,"anchorX":0.5},"compId":16},{"type":"Image","props":{"y":103.34,"x":798.5,"skin":"ui/loading/tu_p3.png","anchorY":0.5,"anchorX":0.5},"compId":17},{"type":"Image","props":{"y":611.3444444444444,"x":381.5,"skin":"ui/loading/tu_p4.png","anchorY":0.5,"anchorX":0.5},"compId":18},{"type":"Image","props":{"y":627.1666666666666,"x":787.5,"skin":"ui/loading/tu_p5.png","anchorY":0.5,"anchorX":0.5},"compId":19},{"type":"Image","props":{"y":261.9,"x":1037.5,"skin":"ui/loading/tu_p6.png","anchorY":0.5,"anchorX":0.5},"compId":20}]},{"type":"Box","props":{"y":-154,"width":1577,"height":905,"centerX":0,"blendMode":"lighter","anchorX":0.5},"child":[{"type":"Image","props":{"y":136.82115020033876,"x":121.75319111485169,"skin":"ui/loading/tu_gx.png","rotation":-44,"blendMode":"lighter","anchorY":0.07,"anchorX":0.5},"compId":30},{"type":"Image","props":{"y":118.82115020033876,"x":187.7531911148517,"skin":"ui/loading/tu_gx.png","rotation":-14,"blendMode":"lighter","anchorY":0.07,"anchorX":0.5},"compId":31},{"type":"Image","props":{"y":135,"x":1422,"skin":"ui/loading/tu_gx.png","rotation":36,"blendMode":"lighter","anchorY":0.07,"anchorX":0.5},"compId":33},{"type":"Image","props":{"y":110,"x":1346,"skin":"ui/loading/tu_gx.png","rotation":34,"blendMode":"lighter","anchorY":0.07,"anchorX":0.5},"compId":32}]},{"type":"Label","props":{"wordWrap":true,"width":1280,"text":"抵制不良游戏 拒绝盗版游戏　注意自我保护 谨防受骗上当　适度游戏益脑 沉迷游戏伤身　合理安排时间 享受健康生活","leading":8,"height":38,"fontSize":22,"color":"#ffffff","centerX":0,"bottom":0,"align":"center"}}]}],"animations":[{"nodes":[{"target":15,"keyframes":{"y":[{"value":280,"tweenMethod":"linearNone","tween":true,"target":15,"key":"y","index":0},{"value":300,"tweenMethod":"linearNone","tween":true,"target":15,"label":null,"key":"y","index":30},{"value":280,"tweenMethod":"linearNone","tween":true,"target":15,"label":null,"key":"y","index":60}],"x":[{"value":40,"tweenMethod":"linearNone","tween":true,"target":15,"key":"x","index":0},{"value":40,"tweenMethod":"linearNone","tween":true,"target":15,"label":null,"key":"x","index":30},{"value":40,"tweenMethod":"linearNone","tween":true,"target":15,"label":null,"key":"x","index":60}]}},{"target":16,"keyframes":{"y":[{"value":101.16666666666667,"tweenMethod":"linearNone","tween":true,"target":16,"key":"y","index":0},{"value":110.5,"tweenMethod":"linearNone","tween":true,"target":16,"key":"y","index":15},{"value":100.5,"tweenMethod":"linearNone","tween":true,"target":16,"key":"y","index":30},{"value":90.5,"tweenMethod":"linearNone","tween":true,"target":16,"label":null,"key":"y","index":45},{"value":100.5,"tweenMethod":"linearNone","tween":true,"target":16,"label":null,"key":"y","index":60}]}},{"target":19,"keyframes":{"y":[{"value":624.5,"tweenMethod":"linearNone","tween":true,"target":19,"key":"y","index":0},{"value":634.5,"tweenMethod":"linearNone","tween":true,"target":19,"key":"y","index":15},{"value":644.5,"tweenMethod":"linearNone","tween":true,"target":19,"key":"y","index":30},{"value":634.5,"tweenMethod":"linearNone","tween":true,"target":19,"key":"y","index":45},{"value":624.5,"tweenMethod":"linearNone","tween":true,"target":19,"label":null,"key":"y","index":60}]}},{"target":18,"keyframes":{"y":[{"value":613.8333333333334,"tweenMethod":"linearNone","tween":true,"target":18,"key":"y","index":0},{"value":604.5,"tweenMethod":"linearNone","tween":true,"target":18,"key":"y","index":15},{"value":614.5,"tweenMethod":"linearNone","tween":true,"target":18,"key":"y","index":30},{"value":624.5,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"y","index":45},{"value":614.5,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"y","index":60}]}},{"target":20,"keyframes":{"y":[{"value":265.5,"tweenMethod":"linearNone","tween":true,"target":20,"key":"y","index":0},{"value":256.5,"tweenMethod":"linearNone","tween":true,"target":20,"key":"y","index":10},{"value":286.5,"tweenMethod":"linearNone","tween":true,"target":20,"label":null,"key":"y","index":40},{"value":266.5,"tweenMethod":"linearNone","tween":true,"target":20,"label":null,"key":"y","index":60}]}},{"target":17,"keyframes":{"y":[{"value":99.5,"tweenMethod":"linearNone","tween":true,"target":17,"key":"y","index":0},{"value":123.5,"tweenMethod":"linearNone","tween":true,"target":17,"key":"y","index":25},{"value":93.5,"tweenMethod":"linearNone","tween":true,"target":17,"label":null,"key":"y","index":55},{"value":98.5,"tweenMethod":"linearNone","tween":true,"target":17,"label":null,"key":"y","index":60}]}}],"name":"ani2","id":2,"frameRate":24,"action":2},{"nodes":[{"target":31,"keyframes":{"rotation":[{"value":-50,"tweenMethod":"linearNone","tween":true,"target":31,"key":"rotation","index":0},{"value":-10,"tweenMethod":"linearNone","tween":true,"target":31,"key":"rotation","index":40},{"value":-50,"tweenMethod":"linearNone","tween":true,"target":31,"label":null,"key":"rotation","index":80}]}},{"target":30,"keyframes":{"rotation":[{"value":-42,"tweenMethod":"linearNone","tween":true,"target":30,"key":"rotation","index":0},{"value":-60,"tweenMethod":"linearNone","tween":true,"target":30,"key":"rotation","index":20},{"value":-20,"tweenMethod":"linearNone","tween":true,"target":30,"label":null,"key":"rotation","index":60},{"value":-40,"tweenMethod":"linearNone","tween":true,"target":30,"label":null,"key":"rotation","index":80}]}},{"target":32,"keyframes":{"rotation":[{"value":30,"tweenMethod":"linearNone","tween":true,"target":32,"key":"rotation","index":0},{"value":50,"tweenMethod":"linearNone","tween":true,"target":32,"label":null,"key":"rotation","index":20},{"value":10,"tweenMethod":"linearNone","tween":true,"target":32,"label":null,"key":"rotation","index":60},{"value":29,"tweenMethod":"linearNone","tween":true,"target":32,"label":null,"key":"rotation","index":80}]}},{"target":33,"keyframes":{"rotation":[{"value":40,"tweenMethod":"linearNone","tween":true,"target":33,"key":"rotation","index":0},{"value":20,"tweenMethod":"linearNone","tween":true,"target":33,"label":null,"key":"rotation","index":20},{"value":60,"tweenMethod":"linearNone","tween":true,"target":33,"label":null,"key":"rotation","index":60},{"value":41,"tweenMethod":"linearNone","tween":true,"target":33,"label":null,"key":"rotation","index":80}]}}],"name":"ani3","id":3,"frameRate":24,"action":2},{"nodes":[{"target":7,"keyframes":{"y":[{"value":300,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":0},{"value":340,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":30},{"value":300,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"y","index":60}]}}],"name":"ani4","id":4,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dating.Loading_DHUI.uiView);
        }
    }
}
