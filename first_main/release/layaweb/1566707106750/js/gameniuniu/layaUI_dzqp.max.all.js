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
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var niuniu;
            (function (niuniu) {
                var component;
                (function (component) {
                    var JieSuanCardRenderUI = /** @class */ (function (_super) {
                        __extends(JieSuanCardRenderUI, _super);
                        function JieSuanCardRenderUI() {
                            return _super.call(this) || this;
                        }
                        JieSuanCardRenderUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.dzqp.game_ui.niuniu.component.JieSuanCardRenderUI.uiView);
                        };
                        JieSuanCardRenderUI.uiView = { "type": "View", "props": { "width": 725, "height": 38 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 725, "renderType": "render", "height": 38 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 1, "width": 725, "var": "img_bg", "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_zj.png", "scaleX": 1, "height": 38 } }, { "type": "Label", "props": { "y": 21, "x": 118, "width": 141, "var": "lab_name", "leading": 6, "height": 23, "fontSize": 18, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 21, "x": 287, "width": 40, "var": "lab_difen", "leading": 6, "height": 23, "fontSize": 18, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 21, "x": 438, "width": 50, "var": "lab_betRate", "leading": 6, "height": 23, "fontSize": 18, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 21, "x": 526, "width": 60, "var": "lab_jifen", "leading": 6, "height": 23, "fontSize": 18, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Image", "props": { "y": 19, "x": 23, "var": "img_banker", "skin": "tongyong_ui/game_ui/tongyong/general/tu_zhuang.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 21, "x": 227, "width": 63, "var": "lab_cardtype", "leading": 6, "height": 23, "fontSize": 18, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 21, "x": 354, "width": 40, "var": "lab_bankerRate", "leading": 6, "height": 23, "fontSize": 18, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 21, "x": 616, "width": 60, "var": "lab_totalJiFen", "leading": 6, "height": 23, "fontSize": 18, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] }] };
                        return JieSuanCardRenderUI;
                    }(View));
                    component.JieSuanCardRenderUI = JieSuanCardRenderUI;
                })(component = niuniu.component || (niuniu.component = {}));
            })(niuniu = game_ui.niuniu || (game_ui.niuniu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var niuniu;
            (function (niuniu) {
                var component;
                (function (component) {
                    var NiuNiuUI = /** @class */ (function (_super) {
                        __extends(NiuNiuUI, _super);
                        function NiuNiuUI() {
                            return _super.call(this) || this;
                        }
                        NiuNiuUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.dzqp.game_ui.niuniu.component.NiuNiuUI.uiView);
                        };
                        NiuNiuUI.uiView = { "type": "View", "props": { "width": 200, "height": 200 }, "child": [{ "type": "Image", "props": { "y": 83, "x": 88, "skin": "niuniu_ui/game_ui/niuniu/tu_nt.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "y": [{ "value": 112, "tweenMethod": "backIn", "tween": true, "target": 2, "key": "y", "index": 0 }, { "value": 85, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 10 }], "x": [{ "value": 121, "tweenMethod": "backIn", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 88, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 10 }], "scaleY": [{ "value": 0.5, "tweenMethod": "backIn", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 0.5, "tweenMethod": "backIn", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 10 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 10 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 15 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                        return NiuNiuUI;
                    }(View));
                    component.NiuNiuUI = NiuNiuUI;
                })(component = niuniu.component || (niuniu.component = {}));
            })(niuniu = game_ui.niuniu || (game_ui.niuniu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var niuniu;
            (function (niuniu) {
                var component;
                (function (component) {
                    var NiuPaiUI = /** @class */ (function (_super) {
                        __extends(NiuPaiUI, _super);
                        function NiuPaiUI() {
                            return _super.call(this) || this;
                        }
                        NiuPaiUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.dzqp.game_ui.niuniu.component.NiuPaiUI.uiView);
                        };
                        NiuPaiUI.uiView = { "type": "View", "props": { "width": 220, "height": 80 }, "child": [{ "type": "Box", "props": { "y": 2, "x": -1, "width": 220, "var": "box_niu", "height": 77 }, "child": [{ "type": "Box", "props": { "y": 30, "x": 87, "scaleY": 1, "scaleX": 1, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 8, "child": [{ "type": "Image", "props": { "y": 10, "var": "img_type", "skin": "niuniu_ui/game_ui/niuniu/n_5.png" } }, { "type": "Image", "props": { "y": 5, "x": 97, "var": "img_x", "skin": "niuniu_ui/game_ui/niuniu/sz_x.png" } }, { "type": "Image", "props": { "x": 125, "var": "img_rate", "skin": "niuniu_ui/game_ui/niuniu/sz_0.png" } }] }, { "type": "Image", "props": { "y": 42, "x": 110, "skin": "niuniu_ui/game_ui/niuniu/tu_1.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 } }] }, { "type": "Box", "props": { "y": 8, "x": 42, "var": "box_notNiu", "gray": true }, "child": [{ "type": "Image", "props": { "skin": "niuniu_ui/game_ui/niuniu/n_0.png" } }] }], "animations": [{ "nodes": [{ "target": 8, "keyframes": { "scaleY": [{ "value": 2.5, "tweenMethod": "backInOut", "tween": true, "target": 8, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 2.5, "tweenMethod": "backInOut", "tween": true, "target": 8, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleX", "index": 10 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                        return NiuPaiUI;
                    }(View));
                    component.NiuPaiUI = NiuPaiUI;
                })(component = niuniu.component || (niuniu.component = {}));
            })(niuniu = game_ui.niuniu || (game_ui.niuniu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var niuniu;
            (function (niuniu) {
                var component;
                (function (component) {
                    var PaoUI = /** @class */ (function (_super) {
                        __extends(PaoUI, _super);
                        function PaoUI() {
                            return _super.call(this) || this;
                        }
                        PaoUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.dzqp.game_ui.niuniu.component.PaoUI.uiView);
                        };
                        PaoUI.uiView = { "type": "View", "props": { "width": 570, "height": 58 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 260, "skin": "niuniu_ui/game_ui/niuniu/tu_pao1.png", "sizeGrid": "0,2,0,12", "height": 44 } }, { "type": "Image", "props": { "y": 29, "x": 284, "skin": "niuniu_ui/game_ui/niuniu/tu_pao2.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 0, "x": 307, "width": 260, "skin": "niuniu_ui/game_ui/niuniu/tu_pao3.png", "sizeGrid": "0,12,0,2" } }, { "type": "Label", "props": { "y": 7, "x": 62, "wordWrap": true, "width": 447, "text": "点选三张点击之和为10的倍数的牌，然后点击有牛", "leading": 6, "height": 23, "fontSize": 20, "color": "#ffffff", "align": "center" } }] };
                        return PaoUI;
                    }(View));
                    component.PaoUI = PaoUI;
                })(component = niuniu.component || (niuniu.component = {}));
            })(niuniu = game_ui.niuniu || (game_ui.niuniu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var niuniu;
            (function (niuniu) {
                var component;
                (function (component) {
                    var TouXiangUI = /** @class */ (function (_super) {
                        __extends(TouXiangUI, _super);
                        function TouXiangUI() {
                            return _super.call(this) || this;
                        }
                        TouXiangUI.prototype.createChildren = function () {
                            View.regComponent("Text", laya.display.Text);
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.dzqp.game_ui.niuniu.component.TouXiangUI.uiView);
                        };
                        TouXiangUI.uiView = { "type": "View", "props": { "width": 100, "height": 140 }, "child": [{ "type": "Box", "props": { "y": 1, "x": 1, "width": 100, "height": 140 }, "child": [{ "type": "Image", "props": { "y": -7, "x": -5, "skin": "tongyong_ui/game_ui/tongyong/general/tu_txk1.png" } }, { "type": "Image", "props": { "y": 64, "x": 49, "var": "img_icon", "skin": "tongyong_ui/game_ui/tongyong/touxiang/head_0.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 14, "x": 3, "var": "img_txk", "skin": "tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png", "scaleY": 0.95, "scaleX": 0.95 } }, { "type": "Text", "props": { "y": 4, "x": 0, "wordWrap": true, "width": 100, "var": "txt_name", "text": "玩家名字", "leading": 6, "height": 17, "fontSize": 16, "color": "#12093d", "align": "center" } }, { "type": "Text", "props": { "y": 108, "x": -7, "wordWrap": true, "width": 110, "var": "txt_money", "text": "0", "leading": 6, "height": 24, "fontSize": 20, "color": "#b18dff", "align": "center" } }, { "type": "Clip", "props": { "y": 1, "x": 39, "var": "clip_money", "skin": "tongyong_ui/game_ui/tongyong/general/clip_num1.png", "clipX": 11 } }, { "type": "Image", "props": { "y": 52, "x": 50, "var": "img_banker", "skin": "niuniu_ui/game_ui/niuniu/tu_zhuang.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 21, "x": 69, "visible": false, "var": "img_qifu", "skin": "tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png" } }, { "type": "Image", "props": { "y": 105, "x": 50, "visible": false, "var": "qifu_type", "skin": "tongyong_ui/game_ui/tongyong/qifu/f_cs2.png", "scaleY": 0.5, "scaleX": 0.5, "anchorY": 1, "anchorX": 0.5 } }] }] };
                        return TouXiangUI;
                    }(View));
                    component.TouXiangUI = TouXiangUI;
                })(component = niuniu.component || (niuniu.component = {}));
            })(niuniu = game_ui.niuniu || (game_ui.niuniu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var niuniu;
            (function (niuniu) {
                var component;
                (function (component) {
                    var WanJia_LUI = /** @class */ (function (_super) {
                        __extends(WanJia_LUI, _super);
                        function WanJia_LUI() {
                            return _super.call(this) || this;
                        }
                        WanJia_LUI.prototype.createChildren = function () {
                            View.regComponent("ui.dzqp.game_ui.niuniu.component.TouXiangUI", ui.dzqp.game_ui.niuniu.component.TouXiangUI);
                            View.regComponent("ui.dzqp.game_ui.niuniu.component.NiuPaiUI", ui.dzqp.game_ui.niuniu.component.NiuPaiUI);
                            View.regComponent("ui.dzqp.game_ui.niuniu.component.NiuNiuUI", ui.dzqp.game_ui.niuniu.component.NiuNiuUI);
                            View.regComponent("Text", laya.display.Text);
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.dzqp.game_ui.niuniu.component.WanJia_LUI.uiView);
                        };
                        WanJia_LUI.uiView = { "type": "View", "props": { "width": 370, "height": 180 }, "child": [{ "type": "TouXiang", "props": { "y": 29, "x": 4, "var": "view_icon", "runtime": "ui.dzqp.game_ui.niuniu.component.TouXiangUI" } }, { "type": "Box", "props": { "y": 16, "x": 118, "var": "box_bankerRate" }, "child": [{ "type": "Image", "props": { "y": 3, "skin": "niuniu_ui/game_ui/niuniu/qiang_1.png" } }, { "type": "Image", "props": { "x": 32, "skin": "niuniu_ui/game_ui/niuniu/tu_x.png" } }, { "type": "Image", "props": { "x": 58, "var": "img_bankerRate", "skin": "niuniu_ui/game_ui/niuniu/bei_0.png" } }] }, { "type": "Box", "props": { "y": 0, "x": 112, "visible": false, "var": "box_cardType" }, "child": [{ "type": "NiuPai", "props": { "y": 132, "var": "box_typeNiu", "runtime": "ui.dzqp.game_ui.niuniu.component.NiuPaiUI" } }, { "type": "NiuNiu", "props": { "x": 3, "var": "box_bigNiu", "runtime": "ui.dzqp.game_ui.niuniu.component.NiuNiuUI" } }] }, { "type": "Button", "props": { "y": 21, "var": "img_isReady", "stateNum": 1, "skin": "niuniu_ui/game_ui/niuniu/tu_zb.png", "labelStrokeColor": "#7e2314", "labelStroke": 2, "labelSize": 26, "labelPadding": "-6", "labelFont": "Microsoft YaHei", "labelColors": "#ffffff", "labelBold": true, "centerX": -13 } }, { "type": "Box", "props": { "y": 20, "x": 128, "var": "box_notBet" }, "child": [{ "type": "Image", "props": { "skin": "niuniu_ui/game_ui/niuniu/qiang_0.png" } }] }, { "type": "Box", "props": { "y": 16, "x": 121, "var": "box_betRate" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 4, "skin": "niuniu_ui/game_ui/niuniu/tu_x.png" } }, { "type": "Image", "props": { "x": 32, "var": "img_betRate1", "skin": "niuniu_ui/game_ui/niuniu/bei_1.png" } }, { "type": "Image", "props": { "y": 0, "x": 55, "var": "img_betRate2", "skin": "niuniu_ui/game_ui/niuniu/bei_5.png" } }] }, { "type": "Box", "props": { "y": 126, "x": 217, "width": 252, "var": "img_yiwancheng", "height": 43, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 22, "width": 194, "skin": "niuniu_ui/game_ui/niuniu/tu_h.png", "height": 41, "centerX": 3, "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 } }, { "type": "Text", "props": { "y": 7, "x": 76, "wordWrap": true, "width": 106, "text": "已完成", "strokeColor": "#00ffc1", "leading": 6, "height": 26, "fontSize": 26, "color": "#dadada", "align": "center" } }] }] };
                        return WanJia_LUI;
                    }(View));
                    component.WanJia_LUI = WanJia_LUI;
                })(component = niuniu.component || (niuniu.component = {}));
            })(niuniu = game_ui.niuniu || (game_ui.niuniu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var niuniu;
            (function (niuniu) {
                var component;
                (function (component) {
                    var WanJia_L1UI = /** @class */ (function (_super) {
                        __extends(WanJia_L1UI, _super);
                        function WanJia_L1UI() {
                            return _super.call(this) || this;
                        }
                        WanJia_L1UI.prototype.createChildren = function () {
                            View.regComponent("ui.dzqp.game_ui.niuniu.component.TouXiangUI", ui.dzqp.game_ui.niuniu.component.TouXiangUI);
                            View.regComponent("ui.dzqp.game_ui.niuniu.component.NiuPaiUI", ui.dzqp.game_ui.niuniu.component.NiuPaiUI);
                            View.regComponent("ui.dzqp.game_ui.niuniu.component.NiuNiuUI", ui.dzqp.game_ui.niuniu.component.NiuNiuUI);
                            View.regComponent("Text", laya.display.Text);
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.dzqp.game_ui.niuniu.component.WanJia_L1UI.uiView);
                        };
                        WanJia_L1UI.uiView = { "type": "View", "props": { "width": 250, "height": 300 }, "child": [{ "type": "TouXiang", "props": { "y": 28, "x": 46, "var": "view_icon", "runtime": "ui.dzqp.game_ui.niuniu.component.TouXiangUI" } }, { "type": "Box", "props": { "y": 48, "x": 152, "var": "box_bankerRate" }, "child": [{ "type": "Image", "props": { "y": 3, "skin": "niuniu_ui/game_ui/niuniu/qiang_1.png" } }, { "type": "Image", "props": { "x": 32, "skin": "niuniu_ui/game_ui/niuniu/tu_x.png" } }, { "type": "Image", "props": { "x": 58, "var": "img_bankerRate", "skin": "niuniu_ui/game_ui/niuniu/bei_0.png" } }] }, { "type": "Box", "props": { "y": 115, "x": -4, "var": "box_cardType" }, "child": [{ "type": "NiuPai", "props": { "y": 134, "var": "box_typeNiu", "runtime": "ui.dzqp.game_ui.niuniu.component.NiuPaiUI" } }, { "type": "NiuNiu", "props": { "var": "box_bigNiu", "runtime": "ui.dzqp.game_ui.niuniu.component.NiuNiuUI" } }] }, { "type": "Button", "props": { "y": 52, "var": "img_isReady", "stateNum": 1, "skin": "niuniu_ui/game_ui/niuniu/tu_zb.png", "labelStrokeColor": "#7e2314", "labelStroke": 2, "labelSize": 26, "labelPadding": "-6", "labelFont": "Microsoft YaHei", "labelColors": "#ffffff", "labelBold": true, "centerX": 73 } }, { "type": "Box", "props": { "y": 51, "x": 160, "var": "box_notBet" }, "child": [{ "type": "Image", "props": { "skin": "niuniu_ui/game_ui/niuniu/qiang_0.png" } }] }, { "type": "Box", "props": { "y": 47, "x": 151, "var": "box_betRate" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 4, "skin": "niuniu_ui/game_ui/niuniu/tu_x.png" } }, { "type": "Image", "props": { "x": 32, "var": "img_betRate1", "skin": "niuniu_ui/game_ui/niuniu/bei_1.png" } }, { "type": "Image", "props": { "y": 0, "x": 55, "var": "img_betRate2", "skin": "niuniu_ui/game_ui/niuniu/bei_5.png" } }] }, { "type": "Box", "props": { "y": 245, "x": 94, "width": 252, "var": "img_yiwancheng", "height": 43, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 22, "width": 194, "skin": "niuniu_ui/game_ui/niuniu/tu_h.png", "height": 41, "centerX": 3, "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 } }, { "type": "Text", "props": { "y": 7, "x": 76, "wordWrap": true, "width": 106, "text": "已完成", "strokeColor": "#00ffc1", "leading": 6, "height": 26, "fontSize": 26, "color": "#dadada", "align": "center" } }] }] };
                        return WanJia_L1UI;
                    }(View));
                    component.WanJia_L1UI = WanJia_L1UI;
                })(component = niuniu.component || (niuniu.component = {}));
            })(niuniu = game_ui.niuniu || (game_ui.niuniu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var niuniu;
            (function (niuniu) {
                var component;
                (function (component) {
                    var Wanjia_MainUI = /** @class */ (function (_super) {
                        __extends(Wanjia_MainUI, _super);
                        function Wanjia_MainUI() {
                            return _super.call(this) || this;
                        }
                        Wanjia_MainUI.prototype.createChildren = function () {
                            View.regComponent("ui.dzqp.game_ui.niuniu.component.TouXiangUI", ui.dzqp.game_ui.niuniu.component.TouXiangUI);
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.dzqp.game_ui.niuniu.component.Wanjia_MainUI.uiView);
                        };
                        Wanjia_MainUI.uiView = { "type": "View", "props": { "width": 370, "height": 180 }, "child": [{ "type": "TouXiang", "props": { "y": 29, "x": 14, "var": "view_icon", "runtime": "ui.dzqp.game_ui.niuniu.component.TouXiangUI" } }, { "type": "Box", "props": { "y": 26, "x": 128, "var": "box_bankerRate" }, "child": [{ "type": "Image", "props": { "y": 3, "skin": "niuniu_ui/game_ui/niuniu/qiang_1.png" } }, { "type": "Image", "props": { "x": 32, "skin": "niuniu_ui/game_ui/niuniu/tu_x.png" } }, { "type": "Image", "props": { "x": 58, "var": "img_bankerRate", "skin": "niuniu_ui/game_ui/niuniu/bei_0.png" } }] }, { "type": "Button", "props": { "y": 31, "var": "img_isReady", "stateNum": 1, "skin": "niuniu_ui/game_ui/niuniu/tu_zb.png", "labelStrokeColor": "#7e2314", "labelStroke": 2, "labelSize": 26, "labelPadding": "-6", "labelFont": "Microsoft YaHei", "labelColors": "#ffffff", "labelBold": true, "centerX": -5 } }, { "type": "Box", "props": { "y": 30, "x": 138, "var": "box_notBet" }, "child": [{ "type": "Image", "props": { "skin": "niuniu_ui/game_ui/niuniu/qiang_0.png" } }] }, { "type": "Box", "props": { "y": 26, "x": 128, "var": "box_betRate" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 4, "skin": "niuniu_ui/game_ui/niuniu/tu_x.png" } }, { "type": "Image", "props": { "x": 32, "var": "img_betRate1", "skin": "niuniu_ui/game_ui/niuniu/bei_1.png" } }, { "type": "Image", "props": { "y": 0, "x": 55, "var": "img_betRate2", "skin": "niuniu_ui/game_ui/niuniu/bei_5.png" } }] }] };
                        return Wanjia_MainUI;
                    }(View));
                    component.Wanjia_MainUI = Wanjia_MainUI;
                })(component = niuniu.component || (niuniu.component = {}));
            })(niuniu = game_ui.niuniu || (game_ui.niuniu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var niuniu;
            (function (niuniu) {
                var component;
                (function (component) {
                    var WanJia_RUI = /** @class */ (function (_super) {
                        __extends(WanJia_RUI, _super);
                        function WanJia_RUI() {
                            return _super.call(this) || this;
                        }
                        WanJia_RUI.prototype.createChildren = function () {
                            View.regComponent("ui.dzqp.game_ui.niuniu.component.TouXiangUI", ui.dzqp.game_ui.niuniu.component.TouXiangUI);
                            View.regComponent("ui.dzqp.game_ui.niuniu.component.NiuNiuUI", ui.dzqp.game_ui.niuniu.component.NiuNiuUI);
                            View.regComponent("ui.dzqp.game_ui.niuniu.component.NiuPaiUI", ui.dzqp.game_ui.niuniu.component.NiuPaiUI);
                            View.regComponent("Text", laya.display.Text);
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.dzqp.game_ui.niuniu.component.WanJia_RUI.uiView);
                        };
                        WanJia_RUI.uiView = { "type": "View", "props": { "width": 370, "height": 180 }, "child": [{ "type": "TouXiang", "props": { "y": 29, "x": 252, "var": "view_icon", "runtime": "ui.dzqp.game_ui.niuniu.component.TouXiangUI" } }, { "type": "Box", "props": { "y": 1, "x": 63, "var": "box_cardType" }, "child": [{ "type": "NiuNiu", "props": { "var": "box_bigNiu", "runtime": "ui.dzqp.game_ui.niuniu.component.NiuNiuUI" } }, { "type": "NiuPai", "props": { "y": 132, "x": -7, "var": "box_typeNiu", "runtime": "ui.dzqp.game_ui.niuniu.component.NiuPaiUI" } }] }, { "type": "Button", "props": { "y": 16, "var": "img_isReady", "stateNum": 1, "skin": "niuniu_ui/game_ui/niuniu/tu_zb.png", "labelStrokeColor": "#7e2314", "labelStroke": 2, "labelSize": 26, "labelPadding": "-6", "labelFont": "Microsoft YaHei", "labelColors": "#ffffff", "labelBold": true, "centerX": -8 } }, { "type": "Box", "props": { "y": 11, "x": 140, "var": "box_bankerRate" }, "child": [{ "type": "Image", "props": { "y": 3, "skin": "niuniu_ui/game_ui/niuniu/qiang_1.png" } }, { "type": "Image", "props": { "x": 32, "skin": "niuniu_ui/game_ui/niuniu/tu_x.png" } }, { "type": "Image", "props": { "x": 58, "var": "img_bankerRate", "skin": "niuniu_ui/game_ui/niuniu/bei_0.png" } }] }, { "type": "Box", "props": { "y": 15, "x": 148, "var": "box_notBet" }, "child": [{ "type": "Image", "props": { "skin": "niuniu_ui/game_ui/niuniu/qiang_0.png" } }] }, { "type": "Box", "props": { "y": 11, "x": 130, "var": "box_betRate" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 4, "skin": "niuniu_ui/game_ui/niuniu/tu_x.png" } }, { "type": "Image", "props": { "x": 32, "var": "img_betRate1", "skin": "niuniu_ui/game_ui/niuniu/bei_1.png" } }, { "type": "Image", "props": { "y": 0, "x": 55, "var": "img_betRate2", "skin": "niuniu_ui/game_ui/niuniu/bei_5.png" } }] }, { "type": "Box", "props": { "y": 124, "x": 153, "width": 252, "var": "img_yiwancheng", "height": 43, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 22, "width": 194, "skin": "niuniu_ui/game_ui/niuniu/tu_h.png", "height": 41, "centerX": 3, "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 } }, { "type": "Text", "props": { "y": 7, "x": 76, "wordWrap": true, "width": 106, "text": "已完成", "strokeColor": "#00ffc1", "leading": 6, "height": 26, "fontSize": 26, "color": "#dadada", "align": "center" } }] }] };
                        return WanJia_RUI;
                    }(View));
                    component.WanJia_RUI = WanJia_RUI;
                })(component = niuniu.component || (niuniu.component = {}));
            })(niuniu = game_ui.niuniu || (game_ui.niuniu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var niuniu;
            (function (niuniu) {
                var GoUI = /** @class */ (function (_super) {
                    __extends(GoUI, _super);
                    function GoUI() {
                        return _super.call(this) || this;
                    }
                    GoUI.prototype.createChildren = function () {
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.dzqp.game_ui.niuniu.GoUI.uiView);
                    };
                    GoUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "y": 360, "x": 640, "width": 1280, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 350, "x": 650, "skin": "tongyong_ui/game_ui/tongyong/general/gzyz_0.png", "scaleY": 1, "scaleX": 1, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 7 }, { "type": "Image", "props": { "y": 360, "x": 957.4016, "skin": "tongyong_ui/game_ui/tongyong/general/tu_ks1.png", "centerY": 0, "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 }, "compId": 2 }, { "type": "Image", "props": { "y": 360, "x": 317.5984, "skin": "tongyong_ui/game_ui/tongyong/general/tu_ks0.png", "centerY": 0, "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 }, "compId": 4 }, { "type": "Image", "props": { "y": 360, "x": 637, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_2.png", "centerY": 0, "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0 }, "compId": 3 }, { "type": "Image", "props": { "y": 251, "x": 385, "skin": "tongyong_ui/game_ui/tongyong/general/gzyz_3.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 }, "compId": 9 }, { "type": "Image", "props": { "y": 436, "x": 916, "skin": "tongyong_ui/game_ui/tongyong/general/gzyz_3.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 }, "compId": 10 }] }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "x": [{ "value": 1000, "tweenMethod": "strongInOut", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 740, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 10 }, { "value": 740, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "x", "index": 40 }, { "value": 1000, "tweenMethod": "strongInOut", "tween": true, "target": 2, "label": null, "key": "x", "index": 48 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 40 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "alpha", "index": 48 }] } }, { "target": 4, "keyframes": { "x": [{ "value": 275, "tweenMethod": "strongInOut", "tween": true, "target": 4, "key": "x", "index": 0 }, { "value": 535, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "x", "index": 10 }, { "value": 535, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "x", "index": 40 }, { "value": 275, "tweenMethod": "strongInOut", "tween": true, "target": 4, "label": null, "key": "x", "index": 48 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 40 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "alpha", "index": 48 }] } }, { "target": 3, "keyframes": { "x": [{ "value": 637, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 0 }, { "value": 637, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 40 }, { "value": 637, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 48 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 9 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 13 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 40 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 48 }] } }, { "target": 7, "keyframes": { "visible": [{ "value": true, "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "visible", "index": 0 }, { "value": false, "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "visible", "index": 46 }], "scaleY": [{ "value": 0.1, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleY", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleY", "index": 40 }, { "value": 0.1, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleY", "index": 45 }, { "value": 0.1, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleY", "index": 46 }], "scaleX": [{ "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleX", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleX", "index": 40 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleX", "index": 45 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleX", "index": 46 }] } }, { "target": 9, "keyframes": { "y": [{ "value": 251, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "y", "index": 0 }], "x": [{ "value": 385, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "x", "index": 0 }, { "value": 346, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "x", "index": 4 }, { "value": 346, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "x", "index": 10 }, { "value": 937, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "x", "index": 30 }], "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 9, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 9, "key": "visible", "index": 4 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 4 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 9 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 20 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 30 }] } }, { "target": 10, "keyframes": { "y": [{ "value": 436, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "y", "index": 0 }, { "value": 427, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "y", "index": 4 }, { "value": 427, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "y", "index": 10 }, { "value": 425, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "y", "index": 30 }], "x": [{ "value": 916, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "x", "index": 0 }, { "value": 936, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "x", "index": 4 }, { "value": 936, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "x", "index": 10 }, { "value": 343, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "x", "index": 30 }], "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 10, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 10, "key": "visible", "index": 4 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 4 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 9 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 20 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 30 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
                    return GoUI;
                }(View));
                niuniu.GoUI = GoUI;
            })(niuniu = game_ui.niuniu || (game_ui.niuniu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var niuniu;
            (function (niuniu) {
                var JieSuanUI = /** @class */ (function (_super) {
                    __extends(JieSuanUI, _super);
                    function JieSuanUI() {
                        return _super.call(this) || this;
                    }
                    JieSuanUI.prototype.createChildren = function () {
                        View.regComponent("ui.dzqp.game_ui.niuniu.component.JieSuanCardRenderUI", ui.dzqp.game_ui.niuniu.component.JieSuanCardRenderUI);
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.dzqp.game_ui.niuniu.JieSuanUI.uiView);
                    };
                    JieSuanUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Box", "props": { "width": 810, "height": 602, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 181, "x": 401, "skin": "tongyong_ui/game_ui/tongyong/general/tu_gs.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 44 }, { "type": "Image", "props": { "width": 740, "skin": "tongyong_ui/game_ui/tongyong/general/tu_bk1.png", "sizeGrid": "89,49,71,39", "height": 385, "centerY": 38, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_sl2.png", "centerY": -200, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_js.png", "centerY": -190, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 139, "x": 391, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_2.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 487, "x": 409, "wordWrap": true, "width": 495, "var": "lab_xinxi", "text": "50S后开始第00局，本轮共5局", "leading": 6, "height": 23, "fontSize": 20, "color": "#ffff96", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Image", "props": { "y": 210, "x": 40, "width": 725, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_d1.png", "sizeGrid": "0,176,0,164", "height": 38 } }, { "type": "Label", "props": { "y": 231, "x": 151, "wordWrap": true, "width": 63, "text": "昵称", "leading": 6, "height": 23, "fontSize": 18, "color": "#1f2530", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 231, "x": 324, "wordWrap": true, "width": 63, "text": "底分", "leading": 6, "height": 23, "fontSize": 18, "color": "#1f2530", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 231, "x": 473, "wordWrap": true, "width": 92, "text": "下注倍数", "leading": 6, "height": 23, "fontSize": 18, "color": "#1f2530", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "List", "props": { "y": 255, "x": 38, "width": 725, "var": "list_settle", "spaceY": 5, "repeatY": 5, "height": 214 }, "child": [{ "type": "JieSuanCardRender", "props": { "name": "render", "runtime": "ui.dzqp.game_ui.niuniu.component.JieSuanCardRenderUI" } }] }, { "type": "Label", "props": { "y": 231, "x": 265, "wordWrap": true, "width": 81, "text": "牌型 ", "leading": 6, "height": 23, "fontSize": 18, "color": "#1f2530", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 231, "x": 391, "wordWrap": true, "width": 74, "text": "抢庄倍数", "leading": 6, "height": 23, "fontSize": 18, "color": "#1f2530", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 231, "x": 563, "wordWrap": true, "width": 63, "text": "积分", "leading": 6, "height": 23, "fontSize": 18, "color": "#1f2530", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 231, "x": 652, "wordWrap": true, "width": 84, "text": "累计积分", "leading": 6, "height": 23, "fontSize": 18, "color": "#1f2530", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Button", "props": { "y": 554, "x": 252, "width": 200, "visible": false, "var": "btn_create_room", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_2.png", "sizeGrid": "0,20,0,20", "labelStrokeColor": "#9d4725", "labelStroke": 2, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "labelBold": true, "label": "创建房间", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 554, "x": 542, "width": 200, "visible": false, "var": "btn_back_hud", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_3.png", "sizeGrid": "0,20,0,20", "labelStrokeColor": "#397119", "labelStroke": 2, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "labelBold": true, "label": "返回大厅", "anchorY": 0.5, "anchorX": 0.5 } }] }], "animations": [{ "nodes": [{ "target": 44, "keyframes": { "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 44, "key": "rotation", "index": 0 }, { "value": 360, "tweenMethod": "linearNone", "tween": true, "target": 44, "key": "rotation", "index": 100 }] } }], "name": "ani2", "id": 2, "frameRate": 24, "action": 2 }] };
                    return JieSuanUI;
                }(View));
                niuniu.JieSuanUI = JieSuanUI;
            })(niuniu = game_ui.niuniu || (game_ui.niuniu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var niuniu;
            (function (niuniu) {
                var JieSuan_1UI = /** @class */ (function (_super) {
                    __extends(JieSuan_1UI, _super);
                    function JieSuan_1UI() {
                        return _super.call(this) || this;
                    }
                    JieSuan_1UI.prototype.createChildren = function () {
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.dzqp.game_ui.niuniu.JieSuan_1UI.uiView);
                    };
                    JieSuan_1UI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 1280, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 330, "x": 640, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_1.png", "scaleY": 1, "scaleX": 1, "centerY": -30, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 8 }, { "type": "Image", "props": { "y": -105.5, "x": -320, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_sl1.png", "centerY": -50, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 4 }, { "type": "Image", "props": { "y": -105.5, "x": -320, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_sl.png", "centerY": -40, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 5 }, { "type": "Image", "props": { "y": 348, "x": 626, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_2.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 6 }] }], "animations": [{ "nodes": [{ "target": 4, "keyframes": { "scaleY": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 0 }, { "value": 1.2, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 7 }], "scaleX": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 0 }, { "value": 1.2, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 7 }] } }, { "target": 5, "keyframes": { "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 0 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 5 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 8 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 0 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 5 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 8 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 10 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "alpha", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "alpha", "index": 5 }] } }, { "target": 6, "keyframes": { "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "alpha", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "alpha", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "alpha", "index": 10 }] } }, { "target": 8, "keyframes": { "scaleY": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleX", "index": 10 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                    return JieSuan_1UI;
                }(View));
                niuniu.JieSuan_1UI = JieSuan_1UI;
            })(niuniu = game_ui.niuniu || (game_ui.niuniu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var niuniu;
            (function (niuniu) {
                var JieSuan_2UI = /** @class */ (function (_super) {
                    __extends(JieSuan_2UI, _super);
                    function JieSuan_2UI() {
                        return _super.call(this) || this;
                    }
                    JieSuan_2UI.prototype.createChildren = function () {
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.dzqp.game_ui.niuniu.JieSuan_2UI.uiView);
                    };
                    JieSuan_2UI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 1280, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 330, "x": 640, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_1.png", "scaleY": 1, "scaleX": 1, "gray": true, "centerY": -30, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 8 }, { "type": "Image", "props": { "y": -105.5, "x": -320, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_sb1.png", "centerY": -50, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 4 }, { "type": "Image", "props": { "y": -105.5, "x": -320, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_sb.png", "centerY": -40, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 5 }, { "type": "Image", "props": { "y": 348, "x": 626, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_2.png", "gray": true, "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 6 }] }], "animations": [{ "nodes": [{ "target": 4, "keyframes": { "scaleY": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 0 }, { "value": 1.2, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 7 }], "scaleX": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 0 }, { "value": 1.2, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 7 }] } }, { "target": 5, "keyframes": { "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 0 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 5 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 8 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 0 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 5 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 8 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 10 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "alpha", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "alpha", "index": 5 }] } }, { "target": 6, "keyframes": { "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "alpha", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "alpha", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "alpha", "index": 10 }] } }, { "target": 8, "keyframes": { "scaleY": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleX", "index": 10 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                    return JieSuan_2UI;
                }(View));
                niuniu.JieSuan_2UI = JieSuan_2UI;
            })(niuniu = game_ui.niuniu || (game_ui.niuniu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var niuniu;
            (function (niuniu) {
                var QiangZhuangNNUI = /** @class */ (function (_super) {
                    __extends(QiangZhuangNNUI, _super);
                    function QiangZhuangNNUI() {
                        return _super.call(this) || this;
                    }
                    QiangZhuangNNUI.prototype.createChildren = function () {
                        View.regComponent("ui.dzqp.game_ui.tongyong.PaiXeiUI", ui.dzqp.game_ui.tongyong.PaiXeiUI);
                        View.regComponent("ui.dzqp.game_ui.tongyong.FangKa_GoUI", ui.dzqp.game_ui.tongyong.FangKa_GoUI);
                        View.regComponent("ui.dzqp.game_ui.niuniu.component.NiuPaiUI", ui.dzqp.game_ui.niuniu.component.NiuPaiUI);
                        View.regComponent("ui.dzqp.game_ui.niuniu.component.NiuNiuUI", ui.dzqp.game_ui.niuniu.component.NiuNiuUI);
                        View.regComponent("Text", laya.display.Text);
                        View.regComponent("ui.dzqp.game_ui.niuniu.component.WanJia_L1UI", ui.dzqp.game_ui.niuniu.component.WanJia_L1UI);
                        View.regComponent("ui.dzqp.game_ui.tongyong.DaoJiShiUI", ui.dzqp.game_ui.tongyong.DaoJiShiUI);
                        View.regComponent("ui.dzqp.game_ui.niuniu.component.WanJia_RUI", ui.dzqp.game_ui.niuniu.component.WanJia_RUI);
                        View.regComponent("ui.dzqp.game_ui.niuniu.component.Wanjia_MainUI", ui.dzqp.game_ui.niuniu.component.Wanjia_MainUI);
                        View.regComponent("ui.dzqp.game_ui.niuniu.component.PaoUI", ui.dzqp.game_ui.niuniu.component.PaoUI);
                        View.regComponent("ui.dzqp.game_ui.tongyong.FaPaiUI", ui.dzqp.game_ui.tongyong.FaPaiUI);
                        View.regComponent("ui.dzqp.game_ui.tongyong.effect.XiPaiUI", ui.dzqp.game_ui.tongyong.effect.XiPaiUI);
                        View.regComponent("ui.dzqp.game_ui.niuniu.component.WanJia_LUI", ui.dzqp.game_ui.niuniu.component.WanJia_LUI);
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.dzqp.game_ui.niuniu.QiangZhuangNNUI.uiView);
                    };
                    QiangZhuangNNUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "y": 360, "x": 640, "width": 1280, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "PaiXei", "props": { "y": 105, "x": 952, "var": "paixie", "runtime": "ui.dzqp.game_ui.tongyong.PaiXeiUI" } }, { "type": "DaoJiShi", "props": { "y": 322, "var": "box_timer", "scaleY": 1.2, "scaleX": 1.2, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.dzqp.game_ui.tongyong.DaoJiShiUI" } }, { "type": "Button", "props": { "width": 240, "var": "btn_continue", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "sizeGrid": "0,20,0,20", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "labelBold": true, "label": "继续游戏", "centerY": 40, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 448, "x": 540, "width": 181, "var": "box_showCard", "height": 137 }, "child": [{ "type": "NiuPai", "props": { "y": 57, "x": 1, "var": "box_typeNiu", "runtime": "ui.dzqp.game_ui.niuniu.component.NiuPaiUI" } }, { "type": "NiuNiu", "props": { "y": -85, "x": -1, "var": "box_bigNiu", "runtime": "ui.dzqp.game_ui.niuniu.component.NiuNiuUI" } }] }, { "type": "Box", "props": { "y": 389, "x": 654, "width": 687, "var": "box_status", "height": 43, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 20.5, "x": 319.5, "skin": "niuniu_ui/game_ui/niuniu/tu_h.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 } }, { "type": "Text", "props": { "y": 6, "x": 158, "wordWrap": true, "width": 336, "var": "txt_status", "text": "正在进入房间", "strokeColor": "#00ffc1", "leading": 6, "height": 26, "fontSize": 26, "color": "#dadada", "align": "center" } }] }, { "type": "Box", "props": { "y": 572, "x": 300, "width": 687, "var": "box_tips", "height": 43, "anchorY": 0.5 }, "child": [{ "type": "Image", "props": { "y": 20.5, "x": 319.5, "skin": "niuniu_ui/game_ui/niuniu/tu_h.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 } }, { "type": "Text", "props": { "y": 9, "x": 176, "wordWrap": true, "width": 336, "var": "txt_tips", "text": "等待下一局", "strokeColor": "#00ffc1", "leading": 6, "height": 21, "fontSize": 20, "color": "#dadada", "align": "center" } }] }, { "type": "WanJia_L1", "props": { "y": 2, "x": 361, "var": "view3", "runtime": "ui.dzqp.game_ui.niuniu.component.WanJia_L1UI" } }, { "type": "WanJia_L1", "props": { "y": 2, "x": 740, "var": "view2", "runtime": "ui.dzqp.game_ui.niuniu.component.WanJia_L1UI" } }, { "type": "WanJia_L", "props": { "y": 260, "x": 55, "var": "view4", "runtime": "ui.dzqp.game_ui.niuniu.component.WanJia_LUI" } }, { "type": "WanJia_R", "props": { "y": 260, "x": 880, "var": "view1", "runtime": "ui.dzqp.game_ui.niuniu.component.WanJia_RUI" } }, { "type": "Wanjia_Main", "props": { "y": 525, "x": 157, "var": "view0", "runtime": "ui.dzqp.game_ui.niuniu.component.Wanjia_MainUI" } }, { "type": "Box", "props": { "y": 567, "x": 952, "var": "box_btn" }, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "width": 120, "var": "btn_niu", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_3.png", "sizeGrid": "0,20,0,20", "labelStrokeColor": "#309d26", "labelStroke": 2, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "labelBold": true, "label": "有牛" } }, { "type": "Button", "props": { "y": 73, "width": 120, "var": "btn_notNiu", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "sizeGrid": "0,20,0,20", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "labelBold": true, "label": "没牛", "height": 59 } }] }, { "type": "Box", "props": { "y": 493, "x": 280, "width": 719, "var": "box_betRate", "height": 59 }, "child": [{ "type": "Button", "props": { "y": 0, "var": "btn_betRate1", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "labelBold": true, "label": "1倍", "centerX": -275 } }, { "type": "Button", "props": { "y": 0, "var": "btn_betRate2", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "labelBold": true, "label": "4倍", "centerX": -88 } }, { "type": "Button", "props": { "y": 0, "var": "btn_betRate3", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "labelBold": true, "label": "7倍", "centerX": 92 } }, { "type": "Button", "props": { "y": 0, "var": "btn_betRate4", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "labelBold": true, "label": "14倍", "centerX": 272 } }] }, { "type": "Box", "props": { "y": 493, "x": 280, "width": 719, "var": "box_bankerRate", "height": 59 }, "child": [{ "type": "Button", "props": { "y": 0, "var": "btn_bankerRate0", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_2.png", "labelStrokeColor": "#7e2314", "labelStroke": 2, "labelSize": 26, "labelPadding": "-6", "labelFont": "Microsoft YaHei", "labelColors": "#ffffff", "labelBold": true, "label": "不抢", "centerX": -275 } }, { "type": "Button", "props": { "y": 0, "var": "btn_bankerRate1", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelPadding": "-6", "labelFont": "Microsoft YaHei", "labelColors": "#ffffff", "labelBold": true, "label": "1倍", "centerX": -88 } }, { "type": "Button", "props": { "y": 0, "var": "btn_bankerRate2", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelPadding": "-6", "labelFont": "Microsoft YaHei", "labelColors": "#ffffff", "labelBold": true, "label": "2倍", "centerX": 92 } }, { "type": "Button", "props": { "y": 0, "var": "btn_bankerRate3", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelPadding": "-6", "labelFont": "Microsoft YaHei", "labelColors": "#ffffff", "labelBold": true, "label": "3倍", "centerX": 272 } }] }, { "type": "Box", "props": { "y": 521, "x": 640, "width": 478, "var": "box_matchPoint", "height": 50, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Box", "props": { "y": 26, "x": 240, "width": 481, "height": 52, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 25, "x": 237.5, "width": 475, "skin": "niuniu_ui/game_ui/niuniu/tu_k.png", "sizeGrid": "0,12,0,11", "height": 50, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.2 } }, { "type": "Image", "props": { "y": 25, "x": 237.5, "skin": "niuniu_ui/game_ui/niuniu/tu_j.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 25, "x": 46.5, "skin": "niuniu_ui/game_ui/niuniu/tu_k1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 25, "x": 366.5, "skin": "niuniu_ui/game_ui/niuniu/tu_dy.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 25, "x": 174.5, "skin": "niuniu_ui/game_ui/niuniu/tu_k1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 25, "x": 301.5, "skin": "niuniu_ui/game_ui/niuniu/tu_k1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 25, "x": 429.5, "skin": "niuniu_ui/game_ui/niuniu/tu_k1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 25, "x": 110.5, "skin": "niuniu_ui/game_ui/niuniu/tu_j.png", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Text", "props": { "y": 7, "x": 7.5, "wordWrap": true, "width": 76, "var": "txt_point0", "text": "5", "leading": 6, "height": 38, "fontSize": 34, "color": "#dadada", "align": "center" } }, { "type": "Text", "props": { "y": 7, "x": 135.5, "wordWrap": true, "width": 76, "var": "txt_point1", "text": "5", "leading": 6, "height": 38, "fontSize": 34, "color": "#dadada", "align": "center" } }, { "type": "Text", "props": { "y": 7, "x": 263.5, "wordWrap": true, "width": 76, "var": "txt_point2", "text": "5", "leading": 6, "height": 38, "fontSize": 34, "color": "#dadada", "align": "center" } }, { "type": "Text", "props": { "y": 7, "x": 391.5, "wordWrap": true, "width": 76, "var": "txt_pointTotal", "text": "5", "leading": 6, "height": 38, "fontSize": 34, "color": "#dadada", "align": "center" } }] }, { "type": "Box", "props": { "y": 515, "x": 634, "width": 252, "var": "img_yiwancheng", "height": 43, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 22, "width": 194, "skin": "niuniu_ui/game_ui/niuniu/tu_h.png", "height": 41, "centerX": 3, "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 } }, { "type": "Text", "props": { "y": 7, "x": 76, "wordWrap": true, "width": 106, "text": "已完成", "strokeColor": "#00ffc1", "leading": 6, "height": 26, "fontSize": 26, "color": "#dadada", "align": "center" } }] }, { "type": "Pao", "props": { "y": 457, "x": 355, "var": "box_xinshou", "runtime": "ui.dzqp.game_ui.niuniu.component.PaoUI" } }, { "type": "Box", "props": { "y": 22, "x": 88, "var": "box_id" }, "child": [{ "type": "Text", "props": { "var": "txt_id", "text": "牌局号：15323156415613212313", "leading": 6, "fontSize": 20, "color": "#dadada" } }, { "type": "Text", "props": { "y": 30, "var": "txt_base", "text": "试玩场：底注：1 ", "leading": 6, "fontSize": 20, "color": "#dadada" } }, { "type": "Text", "props": { "y": 30, "x": 197, "width": 106, "visible": false, "var": "txt_round", "text": "局数：0/15", "leading": 6, "fontSize": 20, "color": "#dadada", "align": "right" } }] }, { "type": "FaPai", "props": { "y": 173, "x": 944, "var": "ani_deal", "runtime": "ui.dzqp.game_ui.tongyong.FaPaiUI" } }, { "type": "XiPai", "props": { "y": 310, "x": 640, "var": "xipai", "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.dzqp.game_ui.tongyong.effect.XiPaiUI" } }, { "type": "FangKa_Go", "props": { "y": 10, "x": 10, "visible": false, "var": "view_card", "runtime": "ui.dzqp.game_ui.tongyong.FangKa_GoUI" } }, { "type": "Text", "props": { "y": 283, "x": 520, "width": 250, "visible": false, "var": "text_cardroomid", "text": "房间号：", "leading": 6, "height": 41, "fontSize": 35, "color": "#ffffff", "align": "left" } }] }, { "type": "Button", "props": { "var": "btn_back", "top": 16, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_fh1.png", "right": 10, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "var": "btn_chongzhi", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_chongzhi.png", "right": 10, "bottom": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "var": "btn_spread", "top": 16, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_cd.png", "left": 10, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 0, "x": 10, "width": 180, "var": "box_menu", "top": 0, "skin": "tongyong_ui/game_ui/tongyong/general/cd_1.png", "sizeGrid": "20,20,20,20", "left": 10, "height": 287 }, "child": [{ "type": "Image", "props": { "y": 73, "x": 11, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }, { "type": "Image", "props": { "y": 143, "x": 11, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }, { "type": "Image", "props": { "y": 212, "x": 11, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }, { "type": "Button", "props": { "y": 85, "x": 14, "var": "btn_rule", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_gz.png" } }, { "type": "Button", "props": { "y": 17, "x": 14, "var": "btn_cardType", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_px.png" } }, { "type": "Button", "props": { "y": 223, "x": 14, "var": "btn_set", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_sz.png" } }, { "type": "Button", "props": { "y": 151, "x": 14, "var": "btn_zhanji", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_zj.png" } }, { "type": "Button", "props": { "y": 85, "x": 14, "visible": false, "var": "btn_dismiss", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_js.png" } }] }, { "type": "Button", "props": { "y": 20, "x": 20, "var": "btn_qifu", "top": 16, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_qf.png", "right": 85, "anchorY": 0.5, "anchorX": 0.5 } }] };
                    return QiangZhuangNNUI;
                }(View));
                niuniu.QiangZhuangNNUI = QiangZhuangNNUI;
            })(niuniu = game_ui.niuniu || (game_ui.niuniu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var niuniu;
            (function (niuniu) {
                var QiangZhuangNN_GuiZeUI = /** @class */ (function (_super) {
                    __extends(QiangZhuangNN_GuiZeUI, _super);
                    function QiangZhuangNN_GuiZeUI() {
                        return _super.call(this) || this;
                    }
                    QiangZhuangNN_GuiZeUI.prototype.createChildren = function () {
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.dzqp.game_ui.niuniu.QiangZhuangNN_GuiZeUI.uiView);
                    };
                    QiangZhuangNN_GuiZeUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 787, "scaleY": 1.25, "scaleX": 1.25, "height": 531, "centerY": 1, "centerX": -5, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_bk4.png" } }, { "type": "Image", "props": { "y": 0, "x": 785, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_bk4.png", "scaleX": -1 } }, { "type": "Image", "props": { "y": 29, "x": 394, "skin": "tongyong_ui/game_ui/tongyong/general/tu_bkbt.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 37, "x": 394, "skin": "tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Tab", "props": { "y": 66, "x": 15, "width": 756, "var": "btn_tab", "space": 4, "skin": "tongyong_ui/game_ui/tongyong/hud/tab_bq.png", "labels": "玩法介绍,牌型说明,牌型大小,牌型倍数", "labelSize": 20, "labelColors": "#cacaca,#cacaca,#ffffff", "height": 58 } }, { "type": "Panel", "props": { "y": 140, "x": 25, "width": 734, "var": "panel_wanfa", "height": 335 }, "child": [{ "type": "Image", "props": { "y": -10, "x": -5, "skin": "niuniu_ui/game_ui/niuniu/guize_1.png", "height": 766 } }] }, { "type": "Image", "props": { "y": 130, "x": 20, "var": "txt_beishu", "skin": "niuniu_ui/game_ui/niuniu/guize_4.png" } }, { "type": "Image", "props": { "y": 130, "x": 20, "var": "txt_leixing", "skin": "niuniu_ui/game_ui/niuniu/guize_2.png" } }, { "type": "Image", "props": { "y": 130, "x": 20, "var": "txt_daxiao", "skin": "niuniu_ui/game_ui/niuniu/guize_3.png" } }, { "type": "Button", "props": { "y": 40, "x": 746, "var": "btn_close", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/hud/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
                    return QiangZhuangNN_GuiZeUI;
                }(View));
                niuniu.QiangZhuangNN_GuiZeUI = QiangZhuangNN_GuiZeUI;
            })(niuniu = game_ui.niuniu || (game_ui.niuniu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var niuniu;
            (function (niuniu) {
                var QiangZhuangNN_HUDUI = /** @class */ (function (_super) {
                    __extends(QiangZhuangNN_HUDUI, _super);
                    function QiangZhuangNN_HUDUI() {
                        return _super.call(this) || this;
                    }
                    QiangZhuangNN_HUDUI.prototype.createChildren = function () {
                        View.regComponent("ui.dzqp.game_ui.tongyong.HudUI", ui.dzqp.game_ui.tongyong.HudUI);
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.dzqp.game_ui.niuniu.QiangZhuangNN_HUDUI.uiView);
                    };
                    QiangZhuangNN_HUDUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Image", "props": { "top": -1, "skin": "niuniu_ui/game_ui/niuniu/zjh.jpg", "right": -1, "left": -1, "bottom": -1 } }, { "type": "Image", "props": { "y": 360, "var": "img_mn", "skin": "niuniu_ui/game_ui/niuniu/zjh_rw.png", "left": -60, "bottom": 0, "anchorY": 0.5, "anchorX": 0 } }, { "type": "Hud", "props": { "var": "view", "top": -1, "runtime": "ui.dzqp.game_ui.tongyong.HudUI", "right": -1, "left": -1, "bottom": -1 } }, { "type": "Box", "props": { "width": 910, "var": "box_normal", "top": 0, "right": 0, "mouseThrough": true, "bottom": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Box", "props": { "width": 900, "var": "box_right", "right": 0, "height": 465, "centerY": 20, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "Image", "props": { "y": 112, "var": "btn_xinshou", "skin": "tongyong_ui/game_ui/tongyong/hud/difen_00.png", "right": 610, "name": "item0", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 59, "x": 133, "wordWrap": true, "width": 140, "var": "txt_difen0", "text": "底分：1", "leading": 6, "height": 31, "fontSize": 24, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 105, "x": 133, "wordWrap": true, "width": 196, "var": "txt_least0", "text": "准入：6", "leading": 6, "height": 31, "fontSize": 26, "color": "#122452", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] }, { "type": "Image", "props": { "y": 352, "var": "btn_chuji", "skin": "tongyong_ui/game_ui/tongyong/hud/difen_01.png", "right": 610, "name": "item1", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 58, "x": 133, "wordWrap": true, "width": 140, "var": "txt_difen1", "text": "底分：10", "leading": 6, "height": 31, "fontSize": 24, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 103, "x": 133, "wordWrap": true, "width": 196, "var": "txt_least1", "text": "准入：60", "leading": 6, "height": 31, "fontSize": 26, "color": "#361147", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] }, { "type": "Image", "props": { "y": 232, "var": "btn_zhongji", "skin": "tongyong_ui/game_ui/tongyong/hud/difen_02.png", "right": 330, "name": "item2", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 131, "x": 134, "skin": "niuniu_ui/game_ui/niuniu/difen_03_1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 298, "x": 135, "wordWrap": true, "width": 140, "var": "txt_difen2", "text": "底分：50", "leading": 6, "height": 31, "fontSize": 24, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 343, "x": 135, "wordWrap": true, "width": 196, "var": "txt_least2", "text": "准入：300", "leading": 6, "height": 31, "fontSize": 26, "color": "#0a4121", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] }, { "type": "Image", "props": { "y": 232, "var": "btn_gaoji", "skin": "tongyong_ui/game_ui/tongyong/hud/difen_03.png", "right": 50, "name": "item3", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 131, "x": 135, "skin": "niuniu_ui/game_ui/niuniu/difen_04_1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 298, "x": 136, "wordWrap": true, "width": 140, "var": "txt_difen3", "text": "底分：100", "leading": 6, "height": 31, "fontSize": 24, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 343, "x": 137, "wordWrap": true, "width": 196, "var": "txt_least3", "text": "准入：600", "leading": 6, "height": 31, "fontSize": 26, "color": "#5d360d", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] }] }] }, { "type": "Image", "props": { "top": 24, "skin": "niuniu_ui/game_ui/niuniu/qznn_title.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 0, "x": 0, "width": 910, "var": "box_room", "top": 0, "right": 0, "mouseThrough": true, "bottom": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Box", "props": { "width": 900, "right": 0, "height": 465, "centerY": 20, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "Image", "props": { "y": 232, "x": 0, "var": "img_room_create", "skin": "tongyong_ui/game_ui/tongyong/hud/tu_fangka.png", "right": 421, "name": "item0", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 14, "x": 43, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_fangka2.png" } }] }, { "type": "Image", "props": { "y": 232, "x": 0, "var": "img_room_join", "skin": "tongyong_ui/game_ui/tongyong/hud/tu_fangka1.png", "right": 72, "name": "item1", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 39, "x": 83, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_fangka3.png" } }] }] }] }] };
                    return QiangZhuangNN_HUDUI;
                }(View));
                niuniu.QiangZhuangNN_HUDUI = QiangZhuangNN_HUDUI;
            })(niuniu = game_ui.niuniu || (game_ui.niuniu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI_dzqp.max.all.js.map