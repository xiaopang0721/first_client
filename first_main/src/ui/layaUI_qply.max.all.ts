
module ui.qply.dating {
    export class Loading_DHUI extends View {
		public ani2:Laya.FrameAnimation;
		public ani3:Laya.FrameAnimation;
		public image_Bg:Laya.Image;
		public txt_zhenyan:Laya.Label;
		public box_app:Laya.Box;
		public txt_appbbh:Laya.Label;
		public box_v:Laya.Box;
		public txt_bbh:Laya.Label;
		public btn_kefu:Laya.Button;
		public btn_guanwang:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"top":-1,"right":-1,"left":-1,"bottom":-1},"child":[{"type":"Image","props":{"y":2,"x":2,"var":"image_Bg","top":-2,"skin":"ui/loading/tu_bj.jpg","right":-2,"left":-2,"bottom":-2}},{"type":"Box","props":{"width":1074,"visible":true,"height":723,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":430.5,"x":71.5,"skin":"ui/loading/tu_p1.png","anchorY":0.5,"anchorX":0.5},"compId":15},{"type":"Image","props":{"y":99.83333333333333,"x":320.5,"skin":"ui/loading/tu_p2.png","anchorY":0.5,"anchorX":0.5},"compId":16},{"type":"Image","props":{"y":117.5,"x":798.5,"skin":"ui/loading/tu_p3.png","anchorY":0.5,"anchorX":0.5},"compId":17},{"type":"Image","props":{"y":615.1666666666666,"x":381.5,"skin":"ui/loading/tu_p4.png","anchorY":0.5,"anchorX":0.5},"compId":18},{"type":"Image","props":{"y":643.8333333333334,"x":787.5,"skin":"ui/loading/tu_p5.png","anchorY":0.5,"anchorX":0.5},"compId":19},{"type":"Image","props":{"y":277.5,"x":1037.5,"skin":"ui/loading/tu_p6.png","anchorY":0.5,"anchorX":0.5},"compId":20}]},{"type":"Box","props":{"y":-154,"width":1577,"height":905,"centerX":0,"blendMode":"lighter","anchorX":0.5},"child":[{"type":"Image","props":{"y":136.82115020033876,"x":121.75319111485169,"skin":"ui/loading/tu_gx.png","rotation":-44,"blendMode":"lighter","anchorY":0.07,"anchorX":0.5},"compId":30},{"type":"Image","props":{"y":118.82115020033876,"x":187.7531911148517,"skin":"ui/loading/tu_gx.png","rotation":-14,"blendMode":"lighter","anchorY":0.07,"anchorX":0.5},"compId":31},{"type":"Image","props":{"y":135,"x":1422,"skin":"ui/loading/tu_gx.png","rotation":36,"blendMode":"lighter","anchorY":0.07,"anchorX":0.5},"compId":33},{"type":"Image","props":{"y":110,"x":1346,"skin":"ui/loading/tu_gx.png","rotation":34,"blendMode":"lighter","anchorY":0.07,"anchorX":0.5},"compId":32}]},{"type":"Image","props":{"skin":"ui/logo/logo595.png","centerY":-88,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":214,"x":47,"skin":"ui/logo/tu_wz.png"}}]},{"type":"Label","props":{"width":1280,"visible":false,"var":"txt_zhenyan","text":"抵制不良游戏 拒绝盗版游戏　注意自我保护 谨防受骗上当　适度游戏益脑 沉迷游戏伤身　合理安排时间 享受健康生活","leading":8,"height":38,"fontSize":20,"color":"#ffffff","centerX":0,"bottom":10,"align":"center"}},{"type":"Box","props":{"top":20,"left":20},"child":[{"type":"Box","props":{"y":-1,"x":170,"var":"box_app","height":20},"child":[{"type":"Label","props":{"y":0,"x":103,"width":50,"var":"txt_appbbh","underlineColor":"#00ff00","text":1.4,"height":20,"fontSize":18,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":110,"underlineColor":"#00ff00","text":"APP版本号:","height":20,"fontSize":18,"color":"#ffffff","align":"left"}}]},{"type":"Box","props":{"y":-1,"x":0,"var":"box_v","height":20},"child":[{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":80,"underlineColor":"#00ff00","text":"版本号:","height":20,"fontSize":18,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":0,"x":66,"width":80,"var":"txt_bbh","underlineColor":"#00ff00","text":"1.4.0.000","height":20,"fontSize":18,"color":"#ffffff","align":"left"}}]}]},{"type":"Button","props":{"var":"btn_kefu","top":19,"stateNum":1,"skin":"ui/loading/btn_kehu.png","right":35,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"var":"btn_guanwang","top":23,"stateNum":1,"skin":"ui/loading/btn_guanwang.png","right":120,"anchorY":0.5,"anchorX":0.5}}]}],"animations":[{"nodes":[{"target":15,"keyframes":{"y":[{"value":401.5,"tweenMethod":"linearNone","tween":true,"target":15,"key":"y","index":0},{"value":431.5,"tweenMethod":"linearNone","tween":true,"target":15,"key":"y","index":30},{"value":401.5,"tweenMethod":"linearNone","tween":true,"target":15,"label":null,"key":"y","index":60}]}},{"target":16,"keyframes":{"y":[{"value":101.16666666666667,"tweenMethod":"linearNone","tween":true,"target":16,"key":"y","index":0},{"value":110.5,"tweenMethod":"linearNone","tween":true,"target":16,"key":"y","index":15},{"value":100.5,"tweenMethod":"linearNone","tween":true,"target":16,"key":"y","index":30},{"value":90.5,"tweenMethod":"linearNone","tween":true,"target":16,"label":null,"key":"y","index":45},{"value":100.5,"tweenMethod":"linearNone","tween":true,"target":16,"label":null,"key":"y","index":60}]}},{"target":19,"keyframes":{"y":[{"value":624.5,"tweenMethod":"linearNone","tween":true,"target":19,"key":"y","index":0},{"value":634.5,"tweenMethod":"linearNone","tween":true,"target":19,"key":"y","index":15},{"value":644.5,"tweenMethod":"linearNone","tween":true,"target":19,"key":"y","index":30},{"value":634.5,"tweenMethod":"linearNone","tween":true,"target":19,"key":"y","index":45},{"value":624.5,"tweenMethod":"linearNone","tween":true,"target":19,"label":null,"key":"y","index":60}]}},{"target":18,"keyframes":{"y":[{"value":613.8333333333334,"tweenMethod":"linearNone","tween":true,"target":18,"key":"y","index":0},{"value":604.5,"tweenMethod":"linearNone","tween":true,"target":18,"key":"y","index":15},{"value":614.5,"tweenMethod":"linearNone","tween":true,"target":18,"key":"y","index":30},{"value":624.5,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"y","index":45},{"value":614.5,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"y","index":60}]}},{"target":20,"keyframes":{"y":[{"value":265.5,"tweenMethod":"linearNone","tween":true,"target":20,"key":"y","index":0},{"value":256.5,"tweenMethod":"linearNone","tween":true,"target":20,"key":"y","index":10},{"value":286.5,"tweenMethod":"linearNone","tween":true,"target":20,"label":null,"key":"y","index":40},{"value":266.5,"tweenMethod":"linearNone","tween":true,"target":20,"label":null,"key":"y","index":60}]}},{"target":17,"keyframes":{"y":[{"value":99.5,"tweenMethod":"linearNone","tween":true,"target":17,"key":"y","index":0},{"value":123.5,"tweenMethod":"linearNone","tween":true,"target":17,"key":"y","index":25},{"value":93.5,"tweenMethod":"linearNone","tween":true,"target":17,"label":null,"key":"y","index":55},{"value":98.5,"tweenMethod":"linearNone","tween":true,"target":17,"label":null,"key":"y","index":60}]}}],"name":"ani2","id":2,"frameRate":24,"action":2},{"nodes":[{"target":31,"keyframes":{"rotation":[{"value":-50,"tweenMethod":"linearNone","tween":true,"target":31,"key":"rotation","index":0},{"value":-10,"tweenMethod":"linearNone","tween":true,"target":31,"key":"rotation","index":40},{"value":-50,"tweenMethod":"linearNone","tween":true,"target":31,"label":null,"key":"rotation","index":80}]}},{"target":30,"keyframes":{"rotation":[{"value":-42,"tweenMethod":"linearNone","tween":true,"target":30,"key":"rotation","index":0},{"value":-60,"tweenMethod":"linearNone","tween":true,"target":30,"key":"rotation","index":20},{"value":-20,"tweenMethod":"linearNone","tween":true,"target":30,"label":null,"key":"rotation","index":60},{"value":-40,"tweenMethod":"linearNone","tween":true,"target":30,"label":null,"key":"rotation","index":80}]}},{"target":32,"keyframes":{"rotation":[{"value":30,"tweenMethod":"linearNone","tween":true,"target":32,"key":"rotation","index":0},{"value":50,"tweenMethod":"linearNone","tween":true,"target":32,"label":null,"key":"rotation","index":20},{"value":10,"tweenMethod":"linearNone","tween":true,"target":32,"label":null,"key":"rotation","index":60},{"value":29,"tweenMethod":"linearNone","tween":true,"target":32,"label":null,"key":"rotation","index":80}]}},{"target":33,"keyframes":{"rotation":[{"value":40,"tweenMethod":"linearNone","tween":true,"target":33,"key":"rotation","index":0},{"value":20,"tweenMethod":"linearNone","tween":true,"target":33,"label":null,"key":"rotation","index":20},{"value":60,"tweenMethod":"linearNone","tween":true,"target":33,"label":null,"key":"rotation","index":60},{"value":41,"tweenMethod":"linearNone","tween":true,"target":33,"label":null,"key":"rotation","index":80}]}}],"name":"ani3","id":3,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.qply.dating.Loading_DHUI.uiView);
        }
    }
}
