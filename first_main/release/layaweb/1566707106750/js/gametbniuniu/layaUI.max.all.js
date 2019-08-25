var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ui;
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var tbniuniu;
        (function (tbniuniu) {
            var component;
            (function (component) {
                var NiuNiuUI = /** @class */ (function (_super) {
                    __extends(NiuNiuUI, _super);
                    function NiuNiuUI() {
                        return _super.call(this) || this;
                    }
                    NiuNiuUI.prototype.createChildren = function () {
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.game_ui.tbniuniu.component.NiuNiuUI.uiView);
                    };
                    NiuNiuUI.uiView = { "type": "View", "props": { "width": 200, "height": 200 }, "child": [{ "type": "Image", "props": { "y": 83, "x": 88, "skin": "tbniuniu_ui/game_ui/tbniuniu/tu_nt.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "y": [{ "value": 112, "tweenMethod": "backIn", "tween": true, "target": 2, "key": "y", "index": 0 }, { "value": 85, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 10 }], "x": [{ "value": 121, "tweenMethod": "backIn", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 88, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 10 }], "scaleY": [{ "value": 0.5, "tweenMethod": "backIn", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 0.5, "tweenMethod": "backIn", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 10 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 10 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 15 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                    return NiuNiuUI;
                }(View));
                component.NiuNiuUI = NiuNiuUI;
            })(component = tbniuniu.component || (tbniuniu.component = {}));
        })(tbniuniu = game_ui.tbniuniu || (game_ui.tbniuniu = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var tbniuniu;
        (function (tbniuniu) {
            var component;
            (function (component) {
                var NiuPaiUI = /** @class */ (function (_super) {
                    __extends(NiuPaiUI, _super);
                    function NiuPaiUI() {
                        return _super.call(this) || this;
                    }
                    NiuPaiUI.prototype.createChildren = function () {
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.game_ui.tbniuniu.component.NiuPaiUI.uiView);
                    };
                    NiuPaiUI.uiView = { "type": "View", "props": { "width": 220, "height": 80 }, "child": [{ "type": "Box", "props": { "y": 2, "x": -1, "width": 220, "var": "box_niu", "height": 77 }, "child": [{ "type": "Box", "props": { "y": 30, "x": 87, "scaleY": 1, "scaleX": 1, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 8, "child": [{ "type": "Image", "props": { "y": 10, "var": "img_type", "skin": "tbniuniu_ui/game_ui/tbniuniu/n_5.png" } }, { "type": "Image", "props": { "y": 5, "x": 97, "var": "img_x", "skin": "tbniuniu_ui/game_ui/tbniuniu/sz_x.png" } }, { "type": "Image", "props": { "x": 125, "var": "img_rate", "skin": "tbniuniu_ui/game_ui/tbniuniu/sz_0.png" } }] }, { "type": "Image", "props": { "y": 42, "x": 110, "skin": "tbniuniu_ui/game_ui/tbniuniu/tu_1.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 } }] }, { "type": "Box", "props": { "y": 8, "x": 42, "var": "box_notNiu", "gray": true }, "child": [{ "type": "Image", "props": { "skin": "tbniuniu_ui/game_ui/tbniuniu/n_0.png" } }] }], "animations": [{ "nodes": [{ "target": 8, "keyframes": { "scaleY": [{ "value": 2.5, "tweenMethod": "backInOut", "tween": true, "target": 8, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 2.5, "tweenMethod": "backInOut", "tween": true, "target": 8, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleX", "index": 10 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                    return NiuPaiUI;
                }(View));
                component.NiuPaiUI = NiuPaiUI;
            })(component = tbniuniu.component || (tbniuniu.component = {}));
        })(tbniuniu = game_ui.tbniuniu || (game_ui.tbniuniu = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var tbniuniu;
        (function (tbniuniu) {
            var component;
            (function (component) {
                var PaoUI = /** @class */ (function (_super) {
                    __extends(PaoUI, _super);
                    function PaoUI() {
                        return _super.call(this) || this;
                    }
                    PaoUI.prototype.createChildren = function () {
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.game_ui.tbniuniu.component.PaoUI.uiView);
                    };
                    PaoUI.uiView = { "type": "View", "props": { "width": 570, "height": 58 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 260, "skin": "tbniuniu_ui/game_ui/tbniuniu/tu_pao1.png", "sizeGrid": "0,2,0,12", "height": 44 } }, { "type": "Image", "props": { "y": 29, "x": 284, "skin": "tbniuniu_ui/game_ui/tbniuniu/tu_pao2.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 0, "x": 306, "width": 260, "skin": "tbniuniu_ui/game_ui/tbniuniu/tu_pao3.png", "sizeGrid": "0,12,0,2" } }, { "type": "Label", "props": { "y": 7, "x": 62, "wordWrap": true, "width": 447, "text": "点选三张点击之和为10的倍数的牌，然后点击有牛", "leading": 6, "height": 23, "fontSize": 20, "color": "#ffffff", "align": "center" } }] };
                    return PaoUI;
                }(View));
                component.PaoUI = PaoUI;
            })(component = tbniuniu.component || (tbniuniu.component = {}));
        })(tbniuniu = game_ui.tbniuniu || (game_ui.tbniuniu = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var tbniuniu;
        (function (tbniuniu) {
            var component;
            (function (component) {
                var TouXiangUI = /** @class */ (function (_super) {
                    __extends(TouXiangUI, _super);
                    function TouXiangUI() {
                        return _super.call(this) || this;
                    }
                    TouXiangUI.prototype.createChildren = function () {
                        View.regComponent("Text", laya.display.Text);
                        View.regComponent("ui.game_ui.tbniuniu.component.YingUI", ui.game_ui.tbniuniu.component.YingUI);
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.game_ui.tbniuniu.component.TouXiangUI.uiView);
                    };
                    TouXiangUI.uiView = { "type": "View", "props": { "width": 100, "height": 140 }, "child": [{ "type": "Box", "props": { "y": 1, "x": 1, "width": 100, "height": 140 }, "child": [{ "type": "Image", "props": { "y": -7, "x": -5, "skin": "tongyong_ui/game_ui/tongyong/general/tu_txk1.png" } }, { "type": "Image", "props": { "y": 66, "x": 49, "visible": false, "skin": "tongyong_ui/game_ui/tongyong/touxiang/tu_txk.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 63, "x": 49, "var": "img_icon", "skin": "tongyong_ui/game_ui/tongyong/touxiang/head_0.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 14, "x": 2, "var": "img_txk", "skin": "tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png", "scaleY": 0.95, "scaleX": 0.95 } }, { "type": "Text", "props": { "y": 5, "x": -3, "wordWrap": true, "width": 105, "var": "txt_name", "text": "玩家名字", "leading": 6, "height": 17, "fontSize": 16, "color": "#efda8b", "align": "center" } }, { "type": "Text", "props": { "y": 109, "x": -7, "wordWrap": true, "width": 110, "var": "txt_money", "text": "0", "leading": 6, "height": 20, "fontSize": 20, "color": "#f8ea5e", "align": "center" } }, { "type": "Ying", "props": { "y": -13, "x": -11, "var": "img_banker", "runtime": "ui.game_ui.tbniuniu.component.YingUI" } }, { "type": "Clip", "props": { "y": 1, "x": 39, "var": "clip_money", "skin": "tongyong_ui/game_ui/tongyong/general/clip_num1.png", "clipX": 11 } }, { "type": "Image", "props": { "y": 21, "x": 69, "visible": false, "var": "img_qifu", "skin": "tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png" } }, { "type": "Image", "props": { "y": 105, "x": 50, "visible": false, "var": "qifu_type", "skin": "tongyong_ui/game_ui/tongyong/qifu/f_cs2.png", "scaleY": 0.5, "scaleX": 0.5, "anchorY": 1, "anchorX": 0.5 } }] }] };
                    return TouXiangUI;
                }(View));
                component.TouXiangUI = TouXiangUI;
            })(component = tbniuniu.component || (tbniuniu.component = {}));
        })(tbniuniu = game_ui.tbniuniu || (game_ui.tbniuniu = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var tbniuniu;
        (function (tbniuniu) {
            var component;
            (function (component) {
                var WanJia_LUI = /** @class */ (function (_super) {
                    __extends(WanJia_LUI, _super);
                    function WanJia_LUI() {
                        return _super.call(this) || this;
                    }
                    WanJia_LUI.prototype.createChildren = function () {
                        View.regComponent("ui.game_ui.tbniuniu.component.TouXiangUI", ui.game_ui.tbniuniu.component.TouXiangUI);
                        View.regComponent("ui.game_ui.tbniuniu.component.NiuPaiUI", ui.game_ui.tbniuniu.component.NiuPaiUI);
                        View.regComponent("ui.game_ui.tbniuniu.component.NiuNiuUI", ui.game_ui.tbniuniu.component.NiuNiuUI);
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.game_ui.tbniuniu.component.WanJia_LUI.uiView);
                    };
                    WanJia_LUI.uiView = { "type": "View", "props": { "width": 370, "height": 180 }, "child": [{ "type": "TouXiang", "props": { "y": 29, "x": 4, "var": "view_icon", "runtime": "ui.game_ui.tbniuniu.component.TouXiangUI" } }, { "type": "Box", "props": { "y": 0, "x": 112, "visible": false, "var": "box_cardType" }, "child": [{ "type": "NiuPai", "props": { "y": 132, "var": "box_typeNiu", "runtime": "ui.game_ui.tbniuniu.component.NiuPaiUI" } }, { "type": "NiuNiu", "props": { "x": 3, "var": "box_bigNiu", "runtime": "ui.game_ui.tbniuniu.component.NiuNiuUI" } }] }, { "type": "Box", "props": { "y": 0, "x": 111, "var": "box_betRate" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 4, "skin": "tbniuniu_ui/game_ui/tbniuniu/tu_x.png" } }, { "type": "Image", "props": { "x": 32, "var": "img_betRate1", "skin": "tbniuniu_ui/game_ui/tbniuniu/bei_1.png" } }, { "type": "Image", "props": { "y": 0, "x": 55, "var": "img_betRate2", "skin": "tbniuniu_ui/game_ui/tbniuniu/bei_5.png" } }] }] };
                    return WanJia_LUI;
                }(View));
                component.WanJia_LUI = WanJia_LUI;
            })(component = tbniuniu.component || (tbniuniu.component = {}));
        })(tbniuniu = game_ui.tbniuniu || (game_ui.tbniuniu = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var tbniuniu;
        (function (tbniuniu) {
            var component;
            (function (component) {
                var WanJia_L1UI = /** @class */ (function (_super) {
                    __extends(WanJia_L1UI, _super);
                    function WanJia_L1UI() {
                        return _super.call(this) || this;
                    }
                    WanJia_L1UI.prototype.createChildren = function () {
                        View.regComponent("ui.game_ui.tbniuniu.component.TouXiangUI", ui.game_ui.tbniuniu.component.TouXiangUI);
                        View.regComponent("ui.game_ui.tbniuniu.component.NiuPaiUI", ui.game_ui.tbniuniu.component.NiuPaiUI);
                        View.regComponent("ui.game_ui.tbniuniu.component.NiuNiuUI", ui.game_ui.tbniuniu.component.NiuNiuUI);
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.game_ui.tbniuniu.component.WanJia_L1UI.uiView);
                    };
                    WanJia_L1UI.uiView = { "type": "View", "props": { "width": 250, "height": 300 }, "child": [{ "type": "TouXiang", "props": { "y": 28, "x": 46, "var": "view_icon", "runtime": "ui.game_ui.tbniuniu.component.TouXiangUI" } }, { "type": "Box", "props": { "y": 115, "x": 6, "var": "box_cardType" }, "child": [{ "type": "NiuPai", "props": { "y": 134, "var": "box_typeNiu", "runtime": "ui.game_ui.tbniuniu.component.NiuPaiUI" } }, { "type": "NiuNiu", "props": { "var": "box_bigNiu", "runtime": "ui.game_ui.tbniuniu.component.NiuNiuUI" } }] }, { "type": "Box", "props": { "y": 47, "x": 151, "var": "box_betRate" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 4, "skin": "tbniuniu_ui/game_ui/tbniuniu/tu_x.png" } }, { "type": "Image", "props": { "x": 32, "var": "img_betRate1", "skin": "tbniuniu_ui/game_ui/tbniuniu/bei_1.png" } }, { "type": "Image", "props": { "y": 0, "x": 55, "var": "img_betRate2", "skin": "tbniuniu_ui/game_ui/tbniuniu/bei_5.png" } }] }] };
                    return WanJia_L1UI;
                }(View));
                component.WanJia_L1UI = WanJia_L1UI;
            })(component = tbniuniu.component || (tbniuniu.component = {}));
        })(tbniuniu = game_ui.tbniuniu || (game_ui.tbniuniu = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var tbniuniu;
        (function (tbniuniu) {
            var component;
            (function (component) {
                var Wanjia_MainUI = /** @class */ (function (_super) {
                    __extends(Wanjia_MainUI, _super);
                    function Wanjia_MainUI() {
                        return _super.call(this) || this;
                    }
                    Wanjia_MainUI.prototype.createChildren = function () {
                        View.regComponent("ui.game_ui.tbniuniu.component.TouXiangUI", ui.game_ui.tbniuniu.component.TouXiangUI);
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.game_ui.tbniuniu.component.Wanjia_MainUI.uiView);
                    };
                    Wanjia_MainUI.uiView = { "type": "View", "props": { "width": 370, "height": 180 }, "child": [{ "type": "TouXiang", "props": { "y": 29, "x": 14, "var": "view_icon", "runtime": "ui.game_ui.tbniuniu.component.TouXiangUI" } }, { "type": "Box", "props": { "y": 0, "x": 117, "var": "box_betRate" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 4, "skin": "tbniuniu_ui/game_ui/tbniuniu/tu_x.png" } }, { "type": "Image", "props": { "x": 32, "var": "img_betRate1", "skin": "tbniuniu_ui/game_ui/tbniuniu/bei_1.png" } }, { "type": "Image", "props": { "y": 0, "x": 55, "var": "img_betRate2", "skin": "tbniuniu_ui/game_ui/tbniuniu/bei_5.png" } }] }] };
                    return Wanjia_MainUI;
                }(View));
                component.Wanjia_MainUI = Wanjia_MainUI;
            })(component = tbniuniu.component || (tbniuniu.component = {}));
        })(tbniuniu = game_ui.tbniuniu || (game_ui.tbniuniu = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var tbniuniu;
        (function (tbniuniu) {
            var component;
            (function (component) {
                var WanJia_RUI = /** @class */ (function (_super) {
                    __extends(WanJia_RUI, _super);
                    function WanJia_RUI() {
                        return _super.call(this) || this;
                    }
                    WanJia_RUI.prototype.createChildren = function () {
                        View.regComponent("ui.game_ui.tbniuniu.component.TouXiangUI", ui.game_ui.tbniuniu.component.TouXiangUI);
                        View.regComponent("ui.game_ui.tbniuniu.component.NiuNiuUI", ui.game_ui.tbniuniu.component.NiuNiuUI);
                        View.regComponent("ui.game_ui.tbniuniu.component.NiuPaiUI", ui.game_ui.tbniuniu.component.NiuPaiUI);
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.game_ui.tbniuniu.component.WanJia_RUI.uiView);
                    };
                    WanJia_RUI.uiView = { "type": "View", "props": { "width": 370, "height": 180 }, "child": [{ "type": "TouXiang", "props": { "y": 29, "x": 252, "var": "view_icon", "runtime": "ui.game_ui.tbniuniu.component.TouXiangUI" } }, { "type": "Box", "props": { "y": 1, "x": 63, "var": "box_cardType" }, "child": [{ "type": "NiuNiu", "props": { "var": "box_bigNiu", "runtime": "ui.game_ui.tbniuniu.component.NiuNiuUI" } }, { "type": "NiuPai", "props": { "y": 132, "x": -7, "var": "box_typeNiu", "runtime": "ui.game_ui.tbniuniu.component.NiuPaiUI" } }] }, { "type": "Box", "props": { "y": 1, "x": 160, "var": "box_betRate" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 4, "skin": "tbniuniu_ui/game_ui/tbniuniu/tu_x.png" } }, { "type": "Image", "props": { "x": 32, "var": "img_betRate1", "skin": "tbniuniu_ui/game_ui/tbniuniu/bei_1.png" } }, { "type": "Image", "props": { "y": 0, "x": 55, "var": "img_betRate2", "skin": "tbniuniu_ui/game_ui/tbniuniu/bei_5.png" } }] }] };
                    return WanJia_RUI;
                }(View));
                component.WanJia_RUI = WanJia_RUI;
            })(component = tbniuniu.component || (tbniuniu.component = {}));
        })(tbniuniu = game_ui.tbniuniu || (game_ui.tbniuniu = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var tbniuniu;
        (function (tbniuniu) {
            var component;
            (function (component) {
                var YingUI = /** @class */ (function (_super) {
                    __extends(YingUI, _super);
                    function YingUI() {
                        return _super.call(this) || this;
                    }
                    YingUI.prototype.createChildren = function () {
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.game_ui.tbniuniu.component.YingUI.uiView);
                    };
                    YingUI.uiView = { "type": "View", "props": { "width": 120, "height": 160 }, "child": [{ "type": "Image", "props": { "skin": "tbniuniu_ui/game_ui/tbniuniu/tu_zhuang.png", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 2 }, { "type": "Image", "props": { "skin": "tbniuniu_ui/game_ui/tbniuniu/tu_zhuang.png", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 3 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "scaleY": [{ "value": 1.5, "tweenMethod": "backInOut", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 1.5, "tweenMethod": "backInOut", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 10 }] } }, { "target": 3, "keyframes": { "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleY", "index": 0 }, { "value": 1.3, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleY", "index": 15 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleX", "index": 0 }, { "value": 1.3, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleX", "index": 15 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 9 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 10 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 15 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
                    return YingUI;
                }(View));
                component.YingUI = YingUI;
            })(component = tbniuniu.component || (tbniuniu.component = {}));
        })(tbniuniu = game_ui.tbniuniu || (game_ui.tbniuniu = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var tbniuniu;
        (function (tbniuniu) {
            var GoUI = /** @class */ (function (_super) {
                __extends(GoUI, _super);
                function GoUI() {
                    return _super.call(this) || this;
                }
                GoUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.game_ui.tbniuniu.GoUI.uiView);
                };
                GoUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "y": 360, "x": 640, "width": 1280, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 350, "x": 650, "skin": "tongyong_ui/game_ui/tongyong/general/gzyz_0.png", "scaleY": 1, "scaleX": 1, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 7 }, { "type": "Image", "props": { "y": 360, "x": 957.4016, "skin": "tongyong_ui/game_ui/tongyong/general/tu_ks1.png", "centerY": 0, "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 }, "compId": 2 }, { "type": "Image", "props": { "y": 360, "x": 317.5984, "skin": "tongyong_ui/game_ui/tongyong/general/tu_ks0.png", "centerY": 0, "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 }, "compId": 4 }, { "type": "Image", "props": { "y": 360, "x": 637, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_2.png", "centerY": 0, "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0 }, "compId": 3 }, { "type": "Image", "props": { "y": 251, "x": 385, "skin": "tongyong_ui/game_ui/tongyong/general/gzyz_3.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 }, "compId": 9 }, { "type": "Image", "props": { "y": 436, "x": 916, "skin": "tongyong_ui/game_ui/tongyong/general/gzyz_3.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 }, "compId": 10 }] }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "x": [{ "value": 1000, "tweenMethod": "strongInOut", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 740, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 10 }, { "value": 740, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "x", "index": 40 }, { "value": 1000, "tweenMethod": "strongInOut", "tween": true, "target": 2, "label": null, "key": "x", "index": 48 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 40 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "alpha", "index": 48 }] } }, { "target": 4, "keyframes": { "x": [{ "value": 275, "tweenMethod": "strongInOut", "tween": true, "target": 4, "key": "x", "index": 0 }, { "value": 535, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "x", "index": 10 }, { "value": 535, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "x", "index": 40 }, { "value": 275, "tweenMethod": "strongInOut", "tween": true, "target": 4, "label": null, "key": "x", "index": 48 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 40 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "alpha", "index": 48 }] } }, { "target": 3, "keyframes": { "x": [{ "value": 637, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 0 }, { "value": 637, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 40 }, { "value": 637, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 48 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 9 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 13 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 40 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 48 }] } }, { "target": 7, "keyframes": { "visible": [{ "value": true, "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "visible", "index": 0 }, { "value": false, "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "visible", "index": 46 }], "scaleY": [{ "value": 0.1, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleY", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleY", "index": 40 }, { "value": 0.1, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleY", "index": 45 }, { "value": 0.1, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleY", "index": 46 }], "scaleX": [{ "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleX", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleX", "index": 40 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleX", "index": 45 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleX", "index": 46 }] } }, { "target": 9, "keyframes": { "y": [{ "value": 251, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "y", "index": 0 }], "x": [{ "value": 385, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "x", "index": 0 }, { "value": 346, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "x", "index": 4 }, { "value": 346, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "x", "index": 10 }, { "value": 937, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "x", "index": 30 }], "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 9, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 9, "key": "visible", "index": 4 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 4 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 9 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 20 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 30 }] } }, { "target": 10, "keyframes": { "y": [{ "value": 436, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "y", "index": 0 }, { "value": 427, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "y", "index": 4 }, { "value": 427, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "y", "index": 10 }, { "value": 425, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "y", "index": 30 }], "x": [{ "value": 916, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "x", "index": 0 }, { "value": 936, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "x", "index": 4 }, { "value": 936, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "x", "index": 10 }, { "value": 343, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "x", "index": 30 }], "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 10, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 10, "key": "visible", "index": 4 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 4 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 9 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 20 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 30 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
                return GoUI;
            }(View));
            tbniuniu.GoUI = GoUI;
        })(tbniuniu = game_ui.tbniuniu || (game_ui.tbniuniu = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var tbniuniu;
        (function (tbniuniu) {
            var JieSuan_1UI = /** @class */ (function (_super) {
                __extends(JieSuan_1UI, _super);
                function JieSuan_1UI() {
                    return _super.call(this) || this;
                }
                JieSuan_1UI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.game_ui.tbniuniu.JieSuan_1UI.uiView);
                };
                JieSuan_1UI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 1280, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 330, "x": 640, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_1.png", "scaleY": 1, "scaleX": 1, "centerY": -30, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 8 }, { "type": "Image", "props": { "y": -105.5, "x": -320, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_sl1.png", "centerY": -50, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 4 }, { "type": "Image", "props": { "y": -105.5, "x": -320, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_sl.png", "centerY": -40, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 5 }, { "type": "Image", "props": { "y": 348, "x": 626, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_2.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 6 }] }], "animations": [{ "nodes": [{ "target": 4, "keyframes": { "scaleY": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 0 }, { "value": 1.2, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 7 }], "scaleX": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 0 }, { "value": 1.2, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 7 }] } }, { "target": 5, "keyframes": { "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 0 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 5 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 8 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 0 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 5 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 8 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 10 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "alpha", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "alpha", "index": 5 }] } }, { "target": 6, "keyframes": { "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "alpha", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "alpha", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "alpha", "index": 10 }] } }, { "target": 8, "keyframes": { "scaleY": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleX", "index": 10 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                return JieSuan_1UI;
            }(View));
            tbniuniu.JieSuan_1UI = JieSuan_1UI;
        })(tbniuniu = game_ui.tbniuniu || (game_ui.tbniuniu = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var tbniuniu;
        (function (tbniuniu) {
            var JieSuan_2UI = /** @class */ (function (_super) {
                __extends(JieSuan_2UI, _super);
                function JieSuan_2UI() {
                    return _super.call(this) || this;
                }
                JieSuan_2UI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.game_ui.tbniuniu.JieSuan_2UI.uiView);
                };
                JieSuan_2UI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 1280, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 330, "x": 640, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_1.png", "scaleY": 1, "scaleX": 1, "gray": true, "centerY": -30, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 8 }, { "type": "Image", "props": { "y": -105.5, "x": -320, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_sb1.png", "centerY": -50, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 4 }, { "type": "Image", "props": { "y": -105.5, "x": -320, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_sb.png", "centerY": -40, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 5 }, { "type": "Image", "props": { "y": 348, "x": 626, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_2.png", "gray": true, "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 6 }] }], "animations": [{ "nodes": [{ "target": 4, "keyframes": { "scaleY": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 0 }, { "value": 1.2, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 7 }], "scaleX": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 0 }, { "value": 1.2, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 7 }] } }, { "target": 5, "keyframes": { "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 0 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 5 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 8 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 0 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 5 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 8 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 10 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "alpha", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "alpha", "index": 5 }] } }, { "target": 6, "keyframes": { "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "alpha", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "alpha", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "alpha", "index": 10 }] } }, { "target": 8, "keyframes": { "scaleY": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleX", "index": 10 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                return JieSuan_2UI;
            }(View));
            tbniuniu.JieSuan_2UI = JieSuan_2UI;
        })(tbniuniu = game_ui.tbniuniu || (game_ui.tbniuniu = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var tbniuniu;
        (function (tbniuniu) {
            var TongBiNNUI = /** @class */ (function (_super) {
                __extends(TongBiNNUI, _super);
                function TongBiNNUI() {
                    return _super.call(this) || this;
                }
                TongBiNNUI.prototype.createChildren = function () {
                    View.regComponent("ui.game_ui.tongyong.PaiXeiUI", ui.game_ui.tongyong.PaiXeiUI);
                    View.regComponent("ui.game_ui.tongyong.FaPaiUI", ui.game_ui.tongyong.FaPaiUI);
                    View.regComponent("ui.game_ui.tbniuniu.component.NiuPaiUI", ui.game_ui.tbniuniu.component.NiuPaiUI);
                    View.regComponent("ui.game_ui.tbniuniu.component.NiuNiuUI", ui.game_ui.tbniuniu.component.NiuNiuUI);
                    View.regComponent("Text", laya.display.Text);
                    View.regComponent("ui.game_ui.tbniuniu.component.WanJia_LUI", ui.game_ui.tbniuniu.component.WanJia_LUI);
                    View.regComponent("ui.game_ui.tbniuniu.component.WanJia_RUI", ui.game_ui.tbniuniu.component.WanJia_RUI);
                    View.regComponent("ui.game_ui.tbniuniu.component.Wanjia_MainUI", ui.game_ui.tbniuniu.component.Wanjia_MainUI);
                    View.regComponent("ui.game_ui.tongyong.DaoJiShiUI", ui.game_ui.tongyong.DaoJiShiUI);
                    View.regComponent("ui.game_ui.tongyong.effect.XiPaiUI", ui.game_ui.tongyong.effect.XiPaiUI);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.game_ui.tbniuniu.TongBiNNUI.uiView);
                };
                TongBiNNUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "y": 360, "x": 640, "width": 1280, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "PaiXei", "props": { "y": 110, "x": 805, "var": "paixie", "runtime": "ui.game_ui.tongyong.PaiXeiUI" } }, { "type": "FaPai", "props": { "y": 178, "x": 797, "var": "ani_deal", "runtime": "ui.game_ui.tongyong.FaPaiUI" } }, { "type": "Button", "props": { "width": 240, "var": "btn_continue", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "sizeGrid": "0,20,0,20", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelColors": "#ffffff", "labelBold": true, "label": "继续游戏", "centerY": 40, "centerX": 0 } }, { "type": "Box", "props": { "y": 448, "x": 540, "width": 181, "var": "box_showCard", "height": 137 }, "child": [{ "type": "NiuPai", "props": { "y": 57, "x": 1, "var": "box_typeNiu", "runtime": "ui.game_ui.tbniuniu.component.NiuPaiUI" } }, { "type": "NiuNiu", "props": { "y": -85, "x": -1, "var": "box_bigNiu", "runtime": "ui.game_ui.tbniuniu.component.NiuNiuUI" } }] }, { "type": "Box", "props": { "y": 389, "x": 654, "width": 687, "var": "box_status", "height": 43, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 20.5, "x": 319.5, "skin": "tbniuniu_ui/game_ui/tbniuniu/tu_h.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 } }, { "type": "Text", "props": { "y": 6, "x": 158, "wordWrap": true, "width": 336, "var": "txt_status", "text": "正在进入房间", "strokeColor": "#00ffc1", "leading": 6, "height": 26, "fontSize": 26, "color": "#dadada", "align": "center" } }] }, { "type": "Box", "props": { "y": 511, "x": 300, "width": 687, "var": "box_tips", "height": 43, "anchorY": 0.5 }, "child": [{ "type": "Image", "props": { "y": 20.5, "x": 319.5, "skin": "tbniuniu_ui/game_ui/tbniuniu/tu_h.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 } }, { "type": "Text", "props": { "y": 9, "x": 176, "wordWrap": true, "width": 336, "var": "txt_tips", "text": "等待下一局", "strokeColor": "#00ffc1", "leading": 6, "height": 21, "fontSize": 20, "color": "#dadada", "align": "center" } }] }, { "type": "WanJia_L", "props": { "y": 302, "x": 66, "var": "view5", "runtime": "ui.game_ui.tbniuniu.component.WanJia_LUI" } }, { "type": "WanJia_R", "props": { "y": 302, "x": 860, "var": "view1", "runtime": "ui.game_ui.tbniuniu.component.WanJia_RUI" } }, { "type": "WanJia_R", "props": { "y": 99, "x": 860, "var": "view2", "runtime": "ui.game_ui.tbniuniu.component.WanJia_RUI" } }, { "type": "Panel", "props": { "y": 7, "x": 10, "width": 184, "mouseThrough": true, "height": 287 } }, { "type": "Wanjia_Main", "props": { "y": 523, "x": 207, "var": "view0", "runtime": "ui.game_ui.tbniuniu.component.Wanjia_MainUI" } }, { "type": "Box", "props": { "y": 472, "x": 640, "width": 877, "var": "box_betRate", "height": 59, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "var": "btn_betRate1", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelColors": "#ffffff", "labelBold": true, "label": "1倍", "disabled": false } }, { "type": "Button", "props": { "y": 0, "x": 178, "var": "btn_betRate2", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelColors": "#ffffff", "labelBold": true, "label": "2倍" } }, { "type": "Button", "props": { "y": 0, "x": 355, "var": "btn_betRate3", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelColors": "#ffffff", "labelBold": true, "label": "3倍" } }, { "type": "Button", "props": { "y": 0, "x": 533, "var": "btn_betRate4", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelColors": "#ffffff", "labelBold": true, "label": "4倍" } }, { "type": "Button", "props": { "y": 0, "x": 710, "var": "btn_betRate5", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelColors": "#ffffff", "labelBold": true, "label": "5倍" } }] }, { "type": "Box", "props": { "y": 20, "x": 84, "var": "box_id" }, "child": [{ "type": "Text", "props": { "y": 0, "x": 0, "width": 302, "var": "txt_id", "text": "牌局号：15323156415613212313", "leading": 6, "height": 24, "fontSize": 20, "color": "#ffffff" } }, { "type": "Text", "props": { "y": 30, "x": 0, "width": 157, "var": "txt_base", "text": "试玩场：底注：1 ", "leading": 6, "height": 25, "fontSize": 20, "color": "#ffffff" } }] }, { "type": "Button", "props": { "y": 597, "x": 900, "var": "btn_tanpai", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_3.png", "labelStrokeColor": "#309d26", "labelStroke": 2, "labelSize": 26, "labelColors": "#ffffff", "labelBold": true, "label": "摊牌" } }, { "type": "WanJia_L", "props": { "y": 99, "x": 66, "var": "view4", "runtime": "ui.game_ui.tbniuniu.component.WanJia_LUI" } }, { "type": "WanJia_L", "props": { "y": 13, "x": 455, "var": "view3", "runtime": "ui.game_ui.tbniuniu.component.WanJia_LUI" } }, { "type": "Button", "props": { "y": 662, "x": 78, "var": "btn_tuoguan", "stateNum": 1, "skin": "tbniuniu_ui/game_ui/tbniuniu/btn_tg0.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "DaoJiShi", "props": { "y": 325, "var": "box_timer", "scaleY": 1.2, "scaleX": 1.2, "centerX": -3, "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.game_ui.tongyong.DaoJiShiUI" } }, { "type": "XiPai", "props": { "y": 310, "x": 640, "var": "xipai", "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.game_ui.tongyong.effect.XiPaiUI" } }] }, { "type": "Button", "props": { "var": "btn_back", "top": 16, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_fh1.png", "right": 16, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "var": "btn_chongzhi", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_chongzhi.png", "right": 10, "bottom": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "var": "btn_spread", "top": 10, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_cd.png", "left": 16, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "width": 180, "var": "box_menu", "top": 0, "skin": "tongyong_ui/game_ui/tongyong/general/cd_1.png", "sizeGrid": "20,20,20,20", "left": 10, "height": 287 }, "child": [{ "type": "Image", "props": { "y": 71, "x": 11, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }, { "type": "Image", "props": { "y": 142, "x": 11, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }, { "type": "Image", "props": { "y": 212, "x": 11, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }, { "type": "Button", "props": { "y": 84, "x": 14, "var": "btn_rule", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_gz.png" } }, { "type": "Button", "props": { "y": 14, "x": 14, "var": "btn_cardType", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_px.png" } }, { "type": "Button", "props": { "y": 224, "x": 14, "var": "btn_set", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_sz.png" } }, { "type": "Button", "props": { "y": 154, "x": 14, "var": "btn_zhanji", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_zj.png" } }] }, { "type": "Button", "props": { "y": 202, "x": 1309, "var": "btn_qifu", "top": 16, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_qf.png", "right": 85, "anchorY": 0.5, "anchorX": 0.5 } }] };
                return TongBiNNUI;
            }(View));
            tbniuniu.TongBiNNUI = TongBiNNUI;
        })(tbniuniu = game_ui.tbniuniu || (game_ui.tbniuniu = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var tbniuniu;
        (function (tbniuniu) {
            var TongBiNN_GuiZeUI = /** @class */ (function (_super) {
                __extends(TongBiNN_GuiZeUI, _super);
                function TongBiNN_GuiZeUI() {
                    return _super.call(this) || this;
                }
                TongBiNN_GuiZeUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.game_ui.tbniuniu.TongBiNN_GuiZeUI.uiView);
                };
                TongBiNN_GuiZeUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 787, "scaleY": 1.25, "scaleX": 1.25, "height": 531, "centerY": 1, "centerX": -5, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 1, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_bk4.png" } }, { "type": "Image", "props": { "y": 0, "x": 785, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_bk4.png", "scaleX": -1 } }, { "type": "Image", "props": { "y": 38, "x": 397, "skin": "tongyong_ui/game_ui/tongyong/general/tu_bkbt.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 37, "x": 394, "skin": "tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Tab", "props": { "y": 66, "x": 15, "width": 756, "var": "btn_tab", "space": 4, "skin": "tongyong_ui/game_ui/tongyong/hud/tab_bq.png", "labels": "玩法介绍,牌型说明,牌型大小,牌型倍数", "labelSize": 20, "labelColors": "#9a8c70,#fdf5dc,#fdf5dc", "height": 58 } }, { "type": "Panel", "props": { "y": 135, "x": 25, "width": 734, "var": "panel_wanfa", "height": 340 }, "child": [{ "type": "Image", "props": { "y": -6, "x": -5, "skin": "tbniuniu_ui/game_ui/tbniuniu/guize_1.png", "height": 784 } }] }, { "type": "Image", "props": { "y": 130, "x": 20, "var": "txt_leixing", "skin": "tbniuniu_ui/game_ui/tbniuniu/guize_2.png" } }, { "type": "Image", "props": { "y": 130, "x": 20, "var": "txt_daxiao", "skin": "tbniuniu_ui/game_ui/tbniuniu/guize_3.png" } }, { "type": "Image", "props": { "y": 130, "x": 20, "var": "txt_beishu", "skin": "tbniuniu_ui/game_ui/tbniuniu/guize_4.png" } }, { "type": "Button", "props": { "y": 38, "x": 745, "var": "btn_close", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/hud/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
                return TongBiNN_GuiZeUI;
            }(View));
            tbniuniu.TongBiNN_GuiZeUI = TongBiNN_GuiZeUI;
        })(tbniuniu = game_ui.tbniuniu || (game_ui.tbniuniu = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var tbniuniu;
        (function (tbniuniu) {
            var TongBiNN_HUDUI = /** @class */ (function (_super) {
                __extends(TongBiNN_HUDUI, _super);
                function TongBiNN_HUDUI() {
                    return _super.call(this) || this;
                }
                TongBiNN_HUDUI.prototype.createChildren = function () {
                    View.regComponent("ui.game_ui.tongyong.HudUI", ui.game_ui.tongyong.HudUI);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.game_ui.tbniuniu.TongBiNN_HUDUI.uiView);
                };
                TongBiNN_HUDUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Image", "props": { "top": -1, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_bj.png", "right": -1, "left": -1, "bottom": -1 } }, { "type": "Hud", "props": { "var": "view", "top": -1, "runtime": "ui.game_ui.tongyong.HudUI", "right": -1, "left": -1, "bottom": -1 } }, { "type": "Box", "props": { "top": 0, "right": 0, "mouseThrough": true, "left": 0, "bottom": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Box", "props": { "width": 1278, "var": "box_right", "height": 465, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 234, "var": "btn_xinshou", "skin": "tongyong_ui/game_ui/tongyong/hud/difen_00.png", "right": 961, "name": "item0", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 358, "x": 126, "wordWrap": true, "width": 180, "var": "txt_difen0", "text": "底分：1", "leading": 6, "height": 31, "fontSize": 24, "color": "#a9d6c1", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 399, "x": 126, "wordWrap": true, "width": 180, "var": "txt_least0", "text": "准入：6", "leading": 6, "height": 31, "fontSize": 24, "color": "#a9d6c1", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Image", "props": { "y": 16, "x": 20, "skin": "tbniuniu_ui/game_ui/tbniuniu/difen_01_1.png" } }] }, { "type": "Image", "props": { "y": 232, "var": "btn_chuji", "skin": "tongyong_ui/game_ui/tongyong/hud/difen_01.png", "right": 664, "name": "item1", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 358, "x": 128, "wordWrap": true, "width": 180, "var": "txt_difen1", "text": "底分：10", "leading": 6, "height": 31, "fontSize": 24, "color": "#80adc8", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 403, "x": 128, "wordWrap": true, "width": 180, "var": "txt_least1", "text": "准入：60", "leading": 6, "height": 31, "fontSize": 24, "color": "#80adc8", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Image", "props": { "y": 122, "x": 124, "skin": "tbniuniu_ui/game_ui/tbniuniu/difen_02_1.png", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 232, "var": "btn_zhongji", "skin": "tongyong_ui/game_ui/tongyong/hud/difen_02.png", "right": 367, "name": "item2", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 131, "x": 127, "skin": "tbniuniu_ui/game_ui/tbniuniu/difen_03_1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 357, "x": 126, "wordWrap": true, "width": 180, "var": "txt_difen2", "text": "底分：50", "leading": 6, "height": 31, "fontSize": 24, "color": "#9d77aa", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 402, "x": 126, "wordWrap": true, "width": 180, "var": "txt_least2", "text": "准入：300", "leading": 6, "height": 31, "fontSize": 24, "color": "#9d77aa", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] }, { "type": "Image", "props": { "y": 232, "var": "btn_gaoji", "skin": "tongyong_ui/game_ui/tongyong/hud/difen_03.png", "right": 70, "name": "item3", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 131, "x": 118, "skin": "tbniuniu_ui/game_ui/tbniuniu/difen_04_1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 358, "x": 126, "wordWrap": true, "width": 180, "var": "txt_difen3", "text": "底分：100", "leading": 6, "height": 31, "fontSize": 24, "color": "#c19a81", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 401, "x": 127, "wordWrap": true, "width": 180, "var": "txt_least3", "text": "准入：600", "leading": 6, "height": 31, "fontSize": 24, "color": "#c19a81", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] }] }] }, { "type": "Image", "props": { "top": 24, "skin": "tbniuniu_ui/game_ui/tbniuniu/qznn_title.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 0, "x": 0, "width": 910, "var": "box_room", "top": 0, "right": 0, "mouseThrough": true, "bottom": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Box", "props": { "width": 900, "right": 0, "height": 465, "centerY": 20, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 232, "x": 0, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_fangka.png", "right": 421, "name": "item0", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 14, "x": 43, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_fangka2.png" } }] }, { "type": "Image", "props": { "y": 232, "x": 0, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_fangka1.png", "right": 72, "name": "item1", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 39, "x": 83, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_fangka3.png" } }] }] }] }] };
                return TongBiNN_HUDUI;
            }(View));
            tbniuniu.TongBiNN_HUDUI = TongBiNN_HUDUI;
        })(tbniuniu = game_ui.tbniuniu || (game_ui.tbniuniu = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var tbniuniu;
        (function (tbniuniu) {
            var TuoGuanUI = /** @class */ (function (_super) {
                __extends(TuoGuanUI, _super);
                function TuoGuanUI() {
                    return _super.call(this) || this;
                }
                TuoGuanUI.prototype.createChildren = function () {
                    View.regComponent("Text", laya.display.Text);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.game_ui.tbniuniu.TuoGuanUI.uiView);
                };
                TuoGuanUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 608, "height": 358, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 304, "skin": "tongyong_ui/game_ui/tongyong/general/tu_bk.png", "sizeGrid": "100,0,150,0", "height": 380 } }, { "type": "Image", "props": { "x": 604, "width": 304, "skin": "tongyong_ui/game_ui/tongyong/general/tu_bk.png", "sizeGrid": "100,0,150,0", "scaleX": -1, "height": 380 } }, { "type": "Image", "props": { "y": 33, "x": 296, "skin": "tongyong_ui/game_ui/tongyong/general/tu_bkbt.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 35, "x": 304, "skin": "tongyong_ui/game_ui/tongyong/general/tit_tgtishi.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 77, "x": 38, "wordWrap": true, "width": 530, "valign": "middle", "text": "托管后由系统自动执行下注 摊牌 继续游戏操作。确定要进行托管吗？", "leading": 10, "height": 62, "fontSize": 24, "color": "#ffffff", "align": "left" } }, { "type": "Button", "props": { "y": 303, "var": "btn_enter", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_qd.png", "right": 30, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 303, "var": "btn_cancel", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_qx.png", "left": 30, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 151, "x": 38, "wordWrap": true, "width": 530, "valign": "middle", "text": "请选择下注倍数：", "leading": 10, "height": 31, "fontSize": 24, "color": "#f7ffbc", "align": "left" } }, { "type": "Text", "props": { "y": 230, "x": 46, "wordWrap": true, "width": 514, "valign": "middle", "text": "（如果最大可下注倍数小于设定倍数，那么押最大可下注倍数）", "leading": 10, "height": 24, "fontSize": 18, "color": "#00ff1e", "align": "center" } }, { "type": "Image", "props": { "y": 144, "x": 22, "width": 560, "skin": "tongyong_ui/game_ui/tongyong/dating/tu_a.png", "height": 2, "gray": false } }, { "type": "Box", "props": { "y": 187, "x": 40, "var": "box_rate0" }, "child": [{ "type": "CheckBox", "props": { "var": "checkBox0", "skin": "tongyong_ui/game_ui/tongyong/hud/checkbox_1.png" } }, { "type": "Text", "props": { "y": 0, "x": 40, "wordWrap": true, "width": 50, "text": "1倍", "leading": 6, "height": 28, "fontSize": 26, "color": "#f7ffbc", "align": "left" } }] }, { "type": "Box", "props": { "y": 187, "x": 148, "var": "box_rate1" }, "child": [{ "type": "CheckBox", "props": { "var": "checkBox1", "skin": "tongyong_ui/game_ui/tongyong/hud/checkbox_1.png" } }, { "type": "Text", "props": { "y": 0, "x": 40, "wordWrap": true, "width": 50, "text": "2倍", "leading": 6, "height": 28, "fontSize": 26, "color": "#f7ffbc", "align": "left" } }] }, { "type": "Box", "props": { "y": 187, "x": 256, "var": "box_rate2" }, "child": [{ "type": "CheckBox", "props": { "var": "checkBox2", "skin": "tongyong_ui/game_ui/tongyong/hud/checkbox_1.png" } }, { "type": "Text", "props": { "y": 0, "x": 40, "wordWrap": true, "width": 50, "text": "3倍", "leading": 6, "height": 28, "fontSize": 26, "color": "#f7ffbc", "align": "left" } }] }, { "type": "Box", "props": { "y": 187, "x": 363, "var": "box_rate3" }, "child": [{ "type": "CheckBox", "props": { "var": "checkBox3", "skin": "tongyong_ui/game_ui/tongyong/hud/checkbox_1.png" } }, { "type": "Text", "props": { "y": 0, "x": 40, "wordWrap": true, "width": 50, "text": "4倍", "leading": 6, "height": 28, "fontSize": 26, "color": "#f7ffbc", "align": "left" } }] }, { "type": "Box", "props": { "y": 187, "x": 471, "var": "box_rate4" }, "child": [{ "type": "CheckBox", "props": { "var": "checkBox4", "skin": "tongyong_ui/game_ui/tongyong/hud/checkbox_1.png" } }, { "type": "Text", "props": { "y": 0, "x": 40, "wordWrap": true, "width": 50, "text": "5倍", "leading": 6, "height": 28, "fontSize": 26, "color": "#f7ffbc", "align": "left" } }] }] }] };
                return TuoGuanUI;
            }(View));
            tbniuniu.TuoGuanUI = TuoGuanUI;
        })(tbniuniu = game_ui.tbniuniu || (game_ui.tbniuniu = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map