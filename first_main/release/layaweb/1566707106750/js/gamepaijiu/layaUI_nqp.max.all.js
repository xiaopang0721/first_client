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
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var paijiu;
            (function (paijiu) {
                var component;
                (function (component) {
                    var PaiXingUI = /** @class */ (function (_super) {
                        __extends(PaiXingUI, _super);
                        function PaiXingUI() {
                            return _super.call(this) || this;
                        }
                        PaiXingUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.paijiu.component.PaiXingUI.uiView);
                        };
                        PaiXingUI.uiView = { "type": "View", "props": { "width": 160, "height": 80 }, "child": [{ "type": "Image", "props": { "y": 46, "x": 80, "width": 210, "skin": "paijiu_ui/game_ui/paijiu/brnntype_bgimg_1.png", "height": 62, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 2 }, { "type": "Box", "props": { "y": 38, "x": 88, "width": 165, "height": 60, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 6, "child": [{ "type": "Image", "props": { "y": 32, "x": 75, "visible": true, "var": "img_type", "skin": "paijiu_ui/game_ui/paijiu/pjtype_1.png", "scaleY": 1, "scaleX": 1, "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 37, "x": 74, "skin": "paijiu_ui/game_ui/paijiu/tu_g1.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 4 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "x": [{ "value": 60, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 80, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 5 }] } }, { "target": 4, "keyframes": { "y": [{ "value": 37, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 0 }, { "value": 37, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 5 }], "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "visible", "index": 5 }], "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 5 }, { "value": 1.5, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 15 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 5 }, { "value": 1.5, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 15 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 5 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 15 }] } }, { "target": 6, "keyframes": { "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 6, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 6, "key": "visible", "index": 5 }], "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "scaleY", "index": 0 }, { "value": 1.5, "tweenMethod": "backOut", "tween": true, "target": 6, "key": "scaleY", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "scaleY", "index": 15 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "scaleX", "index": 0 }, { "value": 1.5, "tweenMethod": "backOut", "tween": true, "target": 6, "key": "scaleX", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "scaleX", "index": 15 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                        return PaiXingUI;
                    }(View));
                    component.PaiXingUI = PaiXingUI;
                })(component = paijiu.component || (paijiu.component = {}));
            })(paijiu = game_ui.paijiu || (game_ui.paijiu = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var paijiu;
            (function (paijiu) {
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
                            this.createView(ui.nqp.game_ui.paijiu.component.TouXiangUI.uiView);
                        };
                        TouXiangUI.uiView = { "type": "View", "props": { "width": 100, "height": 138 }, "child": [{ "type": "Box", "props": { "y": 1, "x": 1 }, "child": [{ "type": "Image", "props": { "y": -7, "x": -5, "skin": "tongyong_ui/game_ui/tongyong/general/tu_txk1.png" } }, { "type": "Image", "props": { "y": 65, "x": 49, "visible": false, "skin": "tongyong_ui/game_ui/tongyong/touxiang/tu_txk.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 65, "x": 49, "var": "img_head", "skin": "tongyong_ui/game_ui/tongyong/touxiang/head_0.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 14, "x": 2, "var": "img_txk", "skin": "tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png", "scaleY": 0.95, "scaleX": 0.95 } }, { "type": "Text", "props": { "y": 4, "x": 0, "wordWrap": true, "width": 100, "var": "text_name", "text": "玩家名字", "leading": 6, "height": 17, "fontSize": 16, "color": "#efda8b", "align": "center" } }, { "type": "Text", "props": { "y": 108, "x": -7, "wordWrap": true, "width": 110, "var": "text_money", "text": "0", "leading": 6, "height": 24, "fontSize": 20, "color": "#f8ea5e", "align": "center" } }, { "type": "Image", "props": { "y": 0, "x": 0, "var": "img_frame", "skin": "paijiu_ui/game_ui/paijiu/tu_djs.png" }, "child": [{ "type": "Image", "props": { "y": -3, "x": -3, "width": 104, "var": "img_mask", "renderType": "mask", "height": 142 } }] }, { "type": "Image", "props": { "y": 21, "x": 69, "visible": false, "var": "img_qifu", "skin": "tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png" } }, { "type": "Image", "props": { "y": 105, "x": 50, "visible": false, "var": "qifu_type", "skin": "tongyong_ui/game_ui/tongyong/qifu/f_cs2.png", "scaleY": 0.5, "scaleX": 0.5, "anchorY": 1, "anchorX": 0.5 } }] }] };
                        return TouXiangUI;
                    }(View));
                    component.TouXiangUI = TouXiangUI;
                })(component = paijiu.component || (paijiu.component = {}));
            })(paijiu = game_ui.paijiu || (game_ui.paijiu = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var paijiu;
            (function (paijiu) {
                var component;
                (function (component) {
                    var WanJia_LUI = /** @class */ (function (_super) {
                        __extends(WanJia_LUI, _super);
                        function WanJia_LUI() {
                            return _super.call(this) || this;
                        }
                        WanJia_LUI.prototype.createChildren = function () {
                            View.regComponent("ui.nqp.game_ui.paijiu.component.PaiXingUI", ui.nqp.game_ui.paijiu.component.PaiXingUI);
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.paijiu.component.WanJia_LUI.uiView);
                        };
                        WanJia_LUI.uiView = { "type": "View", "props": { "width": 370, "height": 180 }, "child": [{ "type": "PaiXing", "props": { "y": 189, "x": 189, "var": "view_type", "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.nqp.game_ui.paijiu.component.PaiXingUI" } }, { "type": "Box", "props": { "y": 24, "x": 191, "width": 119, "var": "box_betnum", "height": 39, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 21, "x": 58.5, "var": "img_bg", "skin": "paijiu_ui/game_ui/paijiu/tu_bei.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 20, "x": 48, "var": "img_num1", "skin": "paijiu_ui/game_ui/paijiu/bei_0.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 20, "x": 72, "var": "img_num0", "skin": "paijiu_ui/game_ui/paijiu/bei_0.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
                        return WanJia_LUI;
                    }(View));
                    component.WanJia_LUI = WanJia_LUI;
                })(component = paijiu.component || (paijiu.component = {}));
            })(paijiu = game_ui.paijiu || (game_ui.paijiu = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var paijiu;
            (function (paijiu) {
                var component;
                (function (component) {
                    var WanJia_RUI = /** @class */ (function (_super) {
                        __extends(WanJia_RUI, _super);
                        function WanJia_RUI() {
                            return _super.call(this) || this;
                        }
                        WanJia_RUI.prototype.createChildren = function () {
                            View.regComponent("ui.nqp.game_ui.paijiu.component.PaiXingUI", ui.nqp.game_ui.paijiu.component.PaiXingUI);
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.paijiu.component.WanJia_RUI.uiView);
                        };
                        WanJia_RUI.uiView = { "type": "View", "props": { "width": 370, "height": 180 }, "child": [{ "type": "PaiXing", "props": { "y": 190, "x": 181, "var": "view_type", "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.nqp.game_ui.paijiu.component.PaiXingUI" } }, { "type": "Box", "props": { "y": 29, "x": 188, "width": 119, "var": "box_betnum", "height": 39, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 21, "x": 58.5, "var": "img_bg", "skin": "paijiu_ui/game_ui/paijiu/tu_bei.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 20, "x": 48, "var": "img_num1", "skin": "paijiu_ui/game_ui/paijiu/bei_0.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 20, "x": 72, "var": "img_num0", "skin": "paijiu_ui/game_ui/paijiu/bei_0.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
                        return WanJia_RUI;
                    }(View));
                    component.WanJia_RUI = WanJia_RUI;
                })(component = paijiu.component || (paijiu.component = {}));
            })(paijiu = game_ui.paijiu || (game_ui.paijiu = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var paijiu;
            (function (paijiu) {
                var component;
                (function (component) {
                    var YingUI = /** @class */ (function (_super) {
                        __extends(YingUI, _super);
                        function YingUI() {
                            return _super.call(this) || this;
                        }
                        YingUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.paijiu.component.YingUI.uiView);
                        };
                        YingUI.uiView = { "type": "View", "props": { "width": 120, "height": 120 }, "child": [{ "type": "Image", "props": { "var": "img_win", "skin": "paijiu_ui/game_ui/paijiu/tu_ying2.png", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "x": [{ "value": 60, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 60, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 45 }], "scaleY": [{ "value": 2, "tweenMethod": "backOut", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 30 }], "scaleX": [{ "value": 2, "tweenMethod": "backOut", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 30 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                        return YingUI;
                    }(View));
                    component.YingUI = YingUI;
                })(component = paijiu.component || (paijiu.component = {}));
            })(paijiu = game_ui.paijiu || (game_ui.paijiu = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var paijiu;
            (function (paijiu) {
                var component;
                (function (component) {
                    var Ying_1UI = /** @class */ (function (_super) {
                        __extends(Ying_1UI, _super);
                        function Ying_1UI() {
                            return _super.call(this) || this;
                        }
                        Ying_1UI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.paijiu.component.Ying_1UI.uiView);
                        };
                        Ying_1UI.uiView = { "type": "View", "props": { "width": 400, "height": 300 }, "child": [{ "type": "Image", "props": { "y": 194, "x": 197, "skin": "paijiu_ui/game_ui/paijiu/tu_ying.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 2 }, { "type": "Image", "props": { "y": 70, "x": 196, "skin": "paijiu_ui/game_ui/paijiu/tu_ying1.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 3 }, { "type": "Image", "props": { "y": 65, "x": 197, "skin": "paijiu_ui/game_ui/paijiu/effect/yanhua/10001.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 4 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "scaleY": [{ "value": 1.5, "tweenMethod": "backOut", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 1.5, "tweenMethod": "backOut", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 10 }] } }, { "target": 3, "keyframes": { "scaleY": [{ "value": 1, "tweenMethod": "backOut", "tween": true, "target": 3, "key": "scaleY", "index": 0 }, { "value": 0.5, "tweenMethod": "backOut", "tween": true, "target": 3, "key": "scaleY", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 1, "tweenMethod": "backOut", "tween": true, "target": 3, "key": "scaleX", "index": 0 }, { "value": 0.5, "tweenMethod": "backOut", "tween": true, "target": 3, "key": "scaleX", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleX", "index": 10 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 5 }] } }, { "target": 4, "keyframes": { "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "visible", "index": 5 }], "skin": [{ "value": "paijiu_ui/game_ui/paijiu/effect/yanhua/10001.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 0 }, { "value": "paijiu_ui/game_ui/paijiu/effect/yanhua/10002.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 6 }, { "value": "paijiu_ui/game_ui/paijiu/effect/yanhua/10003.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 7 }, { "value": "paijiu_ui/game_ui/paijiu/effect/yanhua/10004.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 8 }, { "value": "paijiu_ui/game_ui/paijiu/effect/yanhua/10005.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 9 }, { "value": "paijiu_ui/game_ui/paijiu/effect/yanhua/10006.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 10 }, { "value": "paijiu_ui/game_ui/paijiu/effect/yanhua/10007.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 11 }, { "value": "paijiu_ui/game_ui/paijiu/effect/yanhua/10008.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 12 }, { "value": "paijiu_ui/game_ui/paijiu/effect/yanhua/10009.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 13 }, { "value": "paijiu_ui/game_ui/paijiu/effect/yanhua/10010.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 14 }, { "value": "paijiu_ui/game_ui/paijiu/effect/yanhua/10011.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 15 }, { "value": "paijiu_ui/game_ui/paijiu/effect/yanhua/10012.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 16 }, { "value": "paijiu_ui/game_ui/paijiu/effect/yanhua/10013.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 17 }, { "value": "paijiu_ui/game_ui/paijiu/effect/yanhua/10014.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 18 }, { "value": "paijiu_ui/game_ui/paijiu/effect/yanhua/10015.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 19 }, { "value": "paijiu_ui/game_ui/paijiu/effect/yanhua/10016.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 20 }, { "value": "paijiu_ui/game_ui/paijiu/effect/yanhua/10017.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 21 }, { "value": "paijiu_ui/game_ui/paijiu/effect/yanhua/10018.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 22 }, { "value": "paijiu_ui/game_ui/paijiu/effect/yanhua/10019.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 23 }, { "value": "paijiu_ui/game_ui/paijiu/effect/yanhua/10020.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 24 }, { "value": "paijiu_ui/game_ui/paijiu/effect/yanhua/10021.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 25 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                        return Ying_1UI;
                    }(View));
                    component.Ying_1UI = Ying_1UI;
                })(component = paijiu.component || (paijiu.component = {}));
            })(paijiu = game_ui.paijiu || (game_ui.paijiu = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var paijiu;
            (function (paijiu) {
                var component;
                (function (component) {
                    var Ying_2UI = /** @class */ (function (_super) {
                        __extends(Ying_2UI, _super);
                        function Ying_2UI() {
                            return _super.call(this) || this;
                        }
                        Ying_2UI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.paijiu.component.Ying_2UI.uiView);
                        };
                        Ying_2UI.uiView = { "type": "View", "props": { "width": 190, "height": 138 }, "child": [{ "type": "Image", "props": { "width": 190, "skin": "paijiu_ui/game_ui/paijiu/tu_ying.png", "sizeGrid": "30,30,30,30", "height": 138, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 2 }, { "type": "Image", "props": { "y": 10, "x": 10, "width": 190, "skin": "paijiu_ui/game_ui/paijiu/tu_ying.png", "sizeGrid": "30,30,30,30", "height": 138, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0 }, "compId": 3 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "scaleY": [{ "value": 2, "tweenMethod": "backInOut", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 5 }, { "value": 1.5, "tweenMethod": "backInOut", "tween": true, "target": 2, "label": null, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 2, "tweenMethod": "backInOut", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 5 }, { "value": 1.5, "tweenMethod": "backInOut", "tween": true, "target": 2, "label": null, "key": "scaleX", "index": 10 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 5 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 10 }] } }, { "target": 3, "keyframes": { "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 15 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                        return Ying_2UI;
                    }(View));
                    component.Ying_2UI = Ying_2UI;
                })(component = paijiu.component || (paijiu.component = {}));
            })(paijiu = game_ui.paijiu || (game_ui.paijiu = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var paijiu;
            (function (paijiu) {
                var JieSuanUI = /** @class */ (function (_super) {
                    __extends(JieSuanUI, _super);
                    function JieSuanUI() {
                        return _super.call(this) || this;
                    }
                    JieSuanUI.prototype.createChildren = function () {
                        View.regComponent("ui.nqp.game_ui.tongyong.JieSuanRender1UI", ui.nqp.game_ui.tongyong.JieSuanRender1UI);
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.nqp.game_ui.paijiu.JieSuanUI.uiView);
                    };
                    JieSuanUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Box", "props": { "width": 810, "height": 602, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 191, "x": 401, "skin": "tongyong_ui/game_ui/tongyong/general/tu_gs.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 44 }, { "type": "Image", "props": { "y": 331, "x": 405, "width": 740, "skin": "tongyong_ui/game_ui/tongyong/general/tu_bk1.png", "sizeGrid": "89,49,71,39", "height": 350, "centerY": 30, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 111, "x": 405, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_sl2.png", "centerY": -190, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 121, "x": 405, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_js.png", "centerY": -180, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 149, "x": 391, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_2.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 461, "x": 409, "wordWrap": true, "width": 495, "var": "lab_xinxi", "text": "50S后开始第00局，本轮共5局", "leading": 6, "height": 23, "fontSize": 20, "color": "#ffff96", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Image", "props": { "y": 220, "x": 40, "width": 725, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_d1.png", "sizeGrid": "0,176,0,164", "height": 38 } }, { "type": "Label", "props": { "y": 241, "x": 151, "wordWrap": true, "width": 63, "text": "昵称", "leading": 6, "height": 23, "fontSize": 18, "color": "#1f2530", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 241, "x": 367, "wordWrap": true, "width": 63, "text": "底分", "leading": 6, "height": 23, "fontSize": 18, "color": "#1f2530", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 241, "x": 563, "wordWrap": true, "width": 92, "text": "下注倍数", "leading": 6, "height": 23, "fontSize": 18, "color": "#1f2530", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 241, "x": 663, "wordWrap": true, "width": 63, "text": "金币", "leading": 6, "height": 23, "fontSize": 18, "color": "#1f2530", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "List", "props": { "y": 265, "x": 38, "width": 725, "var": "list_settle", "spaceY": 5, "repeatY": 4, "height": 169 }, "child": [{ "type": "JieSuanRender1", "props": { "y": 0, "x": 0, "name": "render", "runtime": "ui.nqp.game_ui.tongyong.JieSuanRender1UI" } }] }, { "type": "Label", "props": { "y": 241, "x": 267, "wordWrap": true, "width": 81, "text": "牌型 ", "leading": 6, "height": 23, "fontSize": 18, "color": "#1f2530", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 241, "x": 466, "wordWrap": true, "width": 74, "text": "抢庄倍数", "leading": 6, "height": 23, "fontSize": 18, "color": "#1f2530", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Button", "props": { "y": 531, "x": 405, "width": 240, "var": "btn_continue", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "sizeGrid": "0,20,0,20", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelPadding": "-6", "labelFont": "Microsoft YaHei", "labelColors": "#ffffff", "label": "继续游戏", "height": 59, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] }], "animations": [{ "nodes": [{ "target": 44, "keyframes": { "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 44, "key": "rotation", "index": 0 }, { "value": 360, "tweenMethod": "linearNone", "tween": true, "target": 44, "key": "rotation", "index": 100 }] } }], "name": "ani2", "id": 2, "frameRate": 24, "action": 2 }] };
                    return JieSuanUI;
                }(View));
                paijiu.JieSuanUI = JieSuanUI;
            })(paijiu = game_ui.paijiu || (game_ui.paijiu = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var paijiu;
            (function (paijiu) {
                var PaiJiuUI = /** @class */ (function (_super) {
                    __extends(PaiJiuUI, _super);
                    function PaiJiuUI() {
                        return _super.call(this) || this;
                    }
                    PaiJiuUI.prototype.createChildren = function () {
                        View.regComponent("Text", laya.display.Text);
                        View.regComponent("ui.nqp.game_ui.paijiu.component.TouXiangUI", ui.nqp.game_ui.paijiu.component.TouXiangUI);
                        View.regComponent("ui.nqp.game_ui.tongyong.effect.ZhuangRUI", ui.nqp.game_ui.tongyong.effect.ZhuangRUI);
                        View.regComponent("ui.nqp.game_ui.tongyong.effect.ZhuangLUI", ui.nqp.game_ui.tongyong.effect.ZhuangLUI);
                        View.regComponent("ui.nqp.game_ui.paijiu.component.WanJia_RUI", ui.nqp.game_ui.paijiu.component.WanJia_RUI);
                        View.regComponent("ui.nqp.game_ui.paijiu.component.PaiXingUI", ui.nqp.game_ui.paijiu.component.PaiXingUI);
                        View.regComponent("ui.nqp.game_ui.paijiu.component.WanJia_LUI", ui.nqp.game_ui.paijiu.component.WanJia_LUI);
                        View.regComponent("ui.nqp.game_ui.tongyong.DaoJiShiUI", ui.nqp.game_ui.tongyong.DaoJiShiUI);
                        View.regComponent("ui.nqp.game_ui.tongyong.effect.ShaiZiUI", ui.nqp.game_ui.tongyong.effect.ShaiZiUI);
                        View.regComponent("ui.nqp.game_ui.tongyong.jiangtouUI", ui.nqp.game_ui.tongyong.jiangtouUI);
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.nqp.game_ui.paijiu.PaiJiuUI.uiView);
                    };
                    PaiJiuUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "y": 360, "x": 640, "width": 1280, "var": "box_view", "mouseEnabled": true, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Text", "props": { "y": 655, "x": 23, "width": 333, "var": "text_info", "text": "牌局号：1532315641561321231313 ", "leading": 6, "height": 25, "fontSize": 20, "color": "#ffffff" } }, { "type": "Text", "props": { "y": 680, "x": 23, "width": 323, "var": "text_roomtype", "text": "试玩场：底注：1", "leading": 6, "height": 25, "fontSize": 20, "color": "#ffffff" } }, { "type": "TouXiang", "props": { "y": 508, "var": "view_head0", "centerX": -177, "runtime": "ui.nqp.game_ui.paijiu.component.TouXiangUI" } }, { "type": "TouXiang", "props": { "y": 277, "var": "view_head1", "right": 20, "runtime": "ui.nqp.game_ui.paijiu.component.TouXiangUI" } }, { "type": "TouXiang", "props": { "y": 277, "x": 18, "var": "view_head3", "runtime": "ui.nqp.game_ui.paijiu.component.TouXiangUI" } }, { "type": "TouXiang", "props": { "y": 18, "var": "view_head2", "right": 428, "runtime": "ui.nqp.game_ui.paijiu.component.TouXiangUI" } }, { "type": "ZhuangR", "props": { "y": 273, "x": 1157, "var": "view_banker1", "runtime": "ui.nqp.game_ui.tongyong.effect.ZhuangRUI" } }, { "type": "ZhuangR", "props": { "y": 14, "x": 749, "var": "view_banker2", "runtime": "ui.nqp.game_ui.tongyong.effect.ZhuangRUI" } }, { "type": "ZhuangL", "props": { "y": 504, "x": 409, "var": "view_banker0", "runtime": "ui.nqp.game_ui.tongyong.effect.ZhuangLUI" } }, { "type": "ZhuangL", "props": { "y": 274, "x": 15, "var": "view_banker3", "runtime": "ui.nqp.game_ui.tongyong.effect.ZhuangLUI" } }, { "type": "WanJia_R", "props": { "y": -13, "x": 457, "var": "view_player2", "right": 453, "runtime": "ui.nqp.game_ui.paijiu.component.WanJia_RUI" } }, { "type": "PaiXing", "props": { "y": 663, "var": "view_type", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.nqp.game_ui.paijiu.component.PaiXingUI" } }, { "type": "WanJia_L", "props": { "y": 250, "x": 28, "var": "view_player3", "runtime": "ui.nqp.game_ui.paijiu.component.WanJia_LUI" } }, { "type": "WanJia_R", "props": { "y": 246, "var": "view_player1", "right": 35, "runtime": "ui.nqp.game_ui.paijiu.component.WanJia_RUI" } }, { "type": "Box", "props": { "y": 456, "width": 877, "var": "box_bet", "height": 59, "centerX": -1, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "var": "btn_bet1", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#7e2314", "labelStroke": 2, "labelSize": 26, "labelPadding": "-6", "labelFont": "Microsoft YaHei", "labelColors": "#ffffff", "label": "1倍", "disabled": false } }, { "type": "Button", "props": { "y": 0, "x": 178, "var": "btn_bet2", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelPadding": "-6", "labelFont": "Microsoft YaHei", "labelColors": "#ffffff", "label": "2倍" } }, { "type": "Button", "props": { "y": 0, "x": 355, "var": "btn_bet3", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelPadding": "-6", "labelFont": "Microsoft YaHei", "labelColors": "#ffffff", "label": "3倍" } }, { "type": "Button", "props": { "y": 0, "x": 533, "var": "btn_bet4", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelPadding": "-6", "labelFont": "Microsoft YaHei", "labelColors": "#ffffff", "label": "4倍" } }, { "type": "Button", "props": { "y": 0, "x": 710, "var": "btn_bet5", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelPadding": "-6", "labelFont": "Microsoft YaHei", "labelColors": "#ffffff", "label": "5倍" } }] }, { "type": "Box", "props": { "y": 456, "width": 877, "var": "box_banker", "height": 59, "centerX": -1, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "var": "btn_banker0", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_2.png", "labelStrokeColor": "#7e2314", "labelStroke": 2, "labelSize": 26, "labelPadding": "-6", "labelFont": "Microsoft YaHei", "labelColors": "#ffffff", "label": "不抢", "disabled": false } }, { "type": "Button", "props": { "y": 0, "x": 178, "var": "btn_banker1", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelPadding": "-6", "labelFont": "Microsoft YaHei", "labelColors": "#ffffff", "label": "1倍" } }, { "type": "Button", "props": { "y": 0, "x": 355, "var": "btn_banker2", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelPadding": "-6", "labelFont": "Microsoft YaHei", "labelColors": "#ffffff", "label": "2倍" } }, { "type": "Button", "props": { "y": 0, "x": 533, "var": "btn_banker3", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelPadding": "-6", "labelFont": "Microsoft YaHei", "labelColors": "#ffffff", "label": "3倍" } }, { "type": "Button", "props": { "y": 0, "x": 710, "var": "btn_banker4", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelPadding": "-6", "labelFont": "Microsoft YaHei", "labelColors": "#ffffff", "label": "4倍" } }] }, { "type": "DaoJiShi", "props": { "y": 301, "x": 639, "var": "img_time", "scaleY": 1.2, "scaleX": 1.2, "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.nqp.game_ui.tongyong.DaoJiShiUI" } }, { "type": "Button", "props": { "width": 240, "var": "btn_continue", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "sizeGrid": "0,20,0,20", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelPadding": "-6", "labelFont": "Microsoft YaHei", "labelColors": "#ffffff", "label": "继续游戏", "height": 59, "centerY": 40, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "ShaiZi", "props": { "var": "view_touzi", "centerY": -79, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.nqp.game_ui.tongyong.effect.ShaiZiUI" } }, { "type": "Box", "props": { "y": 498, "x": 639, "width": 119, "var": "box_betnum", "height": 39, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 21, "x": 58.5, "var": "img_bg", "skin": "paijiu_ui/game_ui/paijiu/tu_bei.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 20, "x": 48, "var": "img_num1", "skin": "paijiu_ui/game_ui/paijiu/bei_0.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 20, "x": 72, "var": "img_num0", "skin": "paijiu_ui/game_ui/paijiu/bei_0.png", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "jiangtou", "props": { "y": 586, "x": 533, "var": "view_arrow0", "anchorY": 1, "anchorX": 0.5, "runtime": "ui.nqp.game_ui.tongyong.jiangtouUI" } }, { "type": "jiangtou", "props": { "y": 358, "x": 1140, "var": "view_arrow1", "scaleX": -1, "anchorY": 1, "anchorX": 0.5, "runtime": "ui.nqp.game_ui.tongyong.jiangtouUI" } }, { "type": "jiangtou", "props": { "y": 101, "x": 731, "var": "view_arrow2", "scaleX": -1, "anchorY": 1, "anchorX": 0.5, "runtime": "ui.nqp.game_ui.tongyong.jiangtouUI" } }, { "type": "jiangtou", "props": { "y": 358, "x": 139, "var": "view_arrow3", "anchorY": 1, "anchorX": 0.5, "runtime": "ui.nqp.game_ui.tongyong.jiangtouUI" } }] }, { "type": "Button", "props": { "var": "btn_back", "top": 16, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_fh1.png", "right": 10, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "var": "btn_chongzhi", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_chongzhi.png", "right": 10, "bottom": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "width": 242, "var": "box_cards", "top": 0, "left": 170, "height": 221 }, "child": [{ "type": "Image", "props": { "y": 218, "x": -2, "width": 251, "skin": "paijiu_ui/game_ui/paijiu/tu_kk.png", "sizeGrid": "78,0,24,27", "scaleX": -1, "height": 214, "anchorY": 1, "anchorX": 1 } }, { "type": "Box", "props": { "y": 14, "x": 23 }, "child": [{ "type": "Image", "props": { "x": 51, "var": "img_card31", "skin": "paijiu_ui/game_ui/paijiu/paijiu_11.png" } }, { "type": "Image", "props": { "y": 144, "x": 180, "var": "img_card1", "skin": "paijiu_ui/game_ui/paijiu/paijiu_12.png" } }, { "type": "Image", "props": { "x": 154, "var": "img_card29", "skin": "paijiu_ui/game_ui/paijiu/paijiu_13.png" } }, { "type": "Image", "props": { "y": 144, "x": 103, "var": "img_card4", "skin": "paijiu_ui/game_ui/paijiu/paijiu_14.png" } }, { "type": "Image", "props": { "y": 96, "x": 103, "var": "img_card22", "skin": "paijiu_ui/game_ui/paijiu/paijiu_15.png" } }, { "type": "Image", "props": { "y": 96, "x": 51, "var": "img_card23", "skin": "paijiu_ui/game_ui/paijiu/paijiu_16.png" } }, { "type": "Image", "props": { "y": 48, "x": 103, "var": "img_card26", "skin": "paijiu_ui/game_ui/paijiu/paijiu_22.png" } }, { "type": "Image", "props": { "y": 144, "x": 129, "var": "img_card3", "skin": "paijiu_ui/game_ui/paijiu/paijiu_23.png" } }, { "type": "Image", "props": { "y": 144, "x": 154, "var": "img_card2", "skin": "paijiu_ui/game_ui/paijiu/paijiu_24.png" } }, { "type": "Image", "props": { "y": 144, "x": 77, "var": "img_card5", "skin": "paijiu_ui/game_ui/paijiu/paijiu_25.png" } }, { "type": "Image", "props": { "y": 144, "x": 26, "var": "img_card7", "skin": "paijiu_ui/game_ui/paijiu/paijiu_26.png" } }, { "type": "Image", "props": { "y": 48, "x": 51, "var": "img_card27", "skin": "paijiu_ui/game_ui/paijiu/paijiu_33.png" } }, { "type": "Image", "props": { "y": 144, "x": 51, "var": "img_card6", "skin": "paijiu_ui/game_ui/paijiu/paijiu_34.png" } }, { "type": "Image", "props": { "y": 144, "var": "img_card8", "skin": "paijiu_ui/game_ui/paijiu/paijiu_35.png" } }, { "type": "Image", "props": { "y": 96, "x": 180, "var": "img_card9", "skin": "paijiu_ui/game_ui/paijiu/paijiu_36.png" } }, { "type": "Image", "props": { "x": 103, "var": "img_card30", "skin": "paijiu_ui/game_ui/paijiu/paijiu_44.png" } }, { "type": "Image", "props": { "y": 96, "x": 154, "var": "img_card10", "skin": "paijiu_ui/game_ui/paijiu/paijiu_45.png" } }, { "type": "Image", "props": { "y": 96, "var": "img_card24", "skin": "paijiu_ui/game_ui/paijiu/paijiu_46.png" } }, { "type": "Image", "props": { "y": 48, "var": "img_card28", "skin": "paijiu_ui/game_ui/paijiu/paijiu_55.png" } }, { "type": "Image", "props": { "y": 48, "x": 154, "var": "img_card25", "skin": "paijiu_ui/game_ui/paijiu/paijiu_56.png" } }, { "type": "Image", "props": { "var": "img_card32", "skin": "paijiu_ui/game_ui/paijiu/paijiu_66.png" } }, { "type": "Image", "props": { "x": 26, "var": "img_card21", "skin": "paijiu_ui/game_ui/paijiu/paijiu_66.png" } }, { "type": "Image", "props": { "x": 77, "var": "img_card20", "skin": "paijiu_ui/game_ui/paijiu/paijiu_11.png" } }, { "type": "Image", "props": { "x": 129, "var": "img_card19", "skin": "paijiu_ui/game_ui/paijiu/paijiu_44.png" } }, { "type": "Image", "props": { "x": 180, "var": "img_card18", "skin": "paijiu_ui/game_ui/paijiu/paijiu_13.png" } }, { "type": "Image", "props": { "y": 48, "x": 26, "var": "img_card17", "skin": "paijiu_ui/game_ui/paijiu/paijiu_55.png" } }, { "type": "Image", "props": { "y": 48, "x": 77, "var": "img_card16", "skin": "paijiu_ui/game_ui/paijiu/paijiu_33.png" } }, { "type": "Image", "props": { "y": 48, "x": 129, "var": "img_card15", "skin": "paijiu_ui/game_ui/paijiu/paijiu_22.png" } }, { "type": "Image", "props": { "y": 48, "x": 180, "var": "img_card14", "skin": "paijiu_ui/game_ui/paijiu/paijiu_56.png" } }, { "type": "Image", "props": { "y": 96, "x": 26, "var": "img_card13", "skin": "paijiu_ui/game_ui/paijiu/paijiu_46.png" } }, { "type": "Image", "props": { "y": 96, "x": 77, "var": "img_card12", "skin": "paijiu_ui/game_ui/paijiu/paijiu_16.png" } }, { "type": "Image", "props": { "y": 96, "x": 129, "var": "img_card11", "skin": "paijiu_ui/game_ui/paijiu/paijiu_15.png" } }] }] }, { "type": "Button", "props": { "var": "btn_cards", "top": 16, "stateNum": 1, "skin": "paijiu_ui/game_ui/paijiu/tu_tj1.png", "left": 90, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "var": "btn_menu", "top": 16, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_cd.png", "left": 10, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 0, "x": 10, "width": 180, "var": "img_menu", "top": 0, "skin": "tongyong_ui/game_ui/tongyong/general/cd_1.png", "sizeGrid": "20,20,20,20", "left": 10, "height": 293, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "Image", "props": { "y": 145, "x": 11, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }, { "type": "Image", "props": { "y": 216, "x": 11, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }, { "type": "Image", "props": { "y": 73, "x": 11, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }, { "type": "Button", "props": { "y": 84, "x": 14, "var": "btn_rules", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_gz.png" } }, { "type": "Button", "props": { "y": 13, "x": 14, "var": "btn_cardtype", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_px.png" } }, { "type": "Button", "props": { "y": 226, "x": 14, "var": "btn_set", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_sz.png" } }, { "type": "Button", "props": { "y": 157, "x": 14, "var": "btn_record", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_zj.png" } }] }, { "type": "Button", "props": { "y": 232, "x": 1339, "var": "btn_qifu", "top": 16, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_qf.png", "right": 85, "anchorY": 0.5, "anchorX": 0.5 } }], "animations": [{ "nodes": [{ "target": 105, "keyframes": { "y": [{ "value": 28, "tweenMethod": "linearNone", "tween": true, "target": 105, "key": "y", "index": 0 }, { "value": 28, "tweenMethod": "linearNone", "tween": true, "target": 105, "key": "y", "index": 1 }], "skin": [{ "value": "ui/game_ui/shangong/effect/btn/00001.png", "tweenMethod": "linearNone", "tween": false, "target": 105, "key": "skin", "index": 0 }, { "value": "ui/game_ui/shangong/effect/btn/00002.png", "tweenMethod": "linearNone", "tween": false, "target": 105, "key": "skin", "index": 1 }, { "value": "ui/game_ui/shangong/effect/btn/00003.png", "tweenMethod": "linearNone", "tween": false, "target": 105, "key": "skin", "index": 2 }, { "value": "ui/game_ui/shangong/effect/btn/00004.png", "tweenMethod": "linearNone", "tween": false, "target": 105, "key": "skin", "index": 3 }, { "value": "ui/game_ui/shangong/effect/btn/00005.png", "tweenMethod": "linearNone", "tween": false, "target": 105, "key": "skin", "index": 4 }, { "value": "ui/game_ui/shangong/effect/btn/00006.png", "tweenMethod": "linearNone", "tween": false, "target": 105, "key": "skin", "index": 5 }, { "value": "ui/game_ui/shangong/effect/btn/00007.png", "tweenMethod": "linearNone", "tween": false, "target": 105, "key": "skin", "index": 6 }, { "value": "ui/game_ui/shangong/effect/btn/00008.png", "tweenMethod": "linearNone", "tween": false, "target": 105, "key": "skin", "index": 7 }, { "value": "ui/game_ui/shangong/effect/btn/00009.png", "tweenMethod": "linearNone", "tween": false, "target": 105, "key": "skin", "index": 8 }, { "value": "ui/game_ui/shangong/effect/btn/00010.png", "tweenMethod": "linearNone", "tween": false, "target": 105, "key": "skin", "index": 9 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 105, "key": "alpha", "index": 0 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
                    return PaiJiuUI;
                }(View));
                paijiu.PaiJiuUI = PaiJiuUI;
            })(paijiu = game_ui.paijiu || (game_ui.paijiu = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var paijiu;
            (function (paijiu) {
                var PaiJiu_GuiZeUI = /** @class */ (function (_super) {
                    __extends(PaiJiu_GuiZeUI, _super);
                    function PaiJiu_GuiZeUI() {
                        return _super.call(this) || this;
                    }
                    PaiJiu_GuiZeUI.prototype.createChildren = function () {
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.nqp.game_ui.paijiu.PaiJiu_GuiZeUI.uiView);
                    };
                    PaiJiu_GuiZeUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 787, "scaleY": 1.25, "scaleX": 1.25, "height": 531, "centerY": 1, "centerX": -5, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "skin": "tongyong_ui/game_ui/tongyong/hud/tu_bk4.png" } }, { "type": "Image", "props": { "y": 0, "x": 785, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_bk4.png", "scaleX": -1 } }, { "type": "Image", "props": { "y": 38, "x": 397, "skin": "tongyong_ui/game_ui/tongyong/general/tu_bkbt.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 37, "x": 394, "skin": "tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Tab", "props": { "y": 66, "x": 15, "width": 756, "var": "btn_tab", "space": 4, "skin": "tongyong_ui/game_ui/tongyong/hud/tab_bq.png", "labels": "玩法介绍,牌型大小,牌型说明,单牌大小", "labelSize": 20, "labelColors": "#9a8c70,#fdf5dc,#fdf5dc", "height": 58 } }, { "type": "Panel", "props": { "y": 130, "x": 20, "width": 750, "var": "panel_rule", "height": 355 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "lab_wanfa", "skin": "paijiu_ui/game_ui/paijiu/guize_1.png", "height": 1213 } }] }, { "type": "Panel", "props": { "y": 130, "x": 20, "width": 750, "var": "panel_type", "height": 355 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "lab_type", "skin": "paijiu_ui/game_ui/paijiu/guize_2.png", "height": 703 } }] }, { "type": "Panel", "props": { "y": 130, "x": 20, "width": 750, "var": "panel_daxiao", "height": 355 }, "child": [{ "type": "Box", "props": { "y": 0, "x": -5, "var": "lab_daxiao" }, "child": [{ "type": "Image", "props": { "x": 5, "skin": "paijiu_ui/game_ui/paijiu/guize_3.png" } }, { "type": "Image", "props": { "y": 629, "x": 5, "skin": "paijiu_ui/game_ui/paijiu/guize_3_1.png" } }, { "type": "Image", "props": { "y": 1259, "skin": "paijiu_ui/game_ui/paijiu/guize_3_2.png" } }] }] }, { "type": "Panel", "props": { "y": 130, "x": 20, "width": 750, "var": "panel_jiesuan", "height": 355 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "lab_jiesuan", "skin": "paijiu_ui/game_ui/paijiu/guize_4.png", "height": 428 } }] }, { "type": "Button", "props": { "y": 38, "x": 743, "var": "btn_close", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/hud/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
                    return PaiJiu_GuiZeUI;
                }(View));
                paijiu.PaiJiu_GuiZeUI = PaiJiu_GuiZeUI;
            })(paijiu = game_ui.paijiu || (game_ui.paijiu = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var paijiu;
            (function (paijiu) {
                var PaiJiu_HUDUI = /** @class */ (function (_super) {
                    __extends(PaiJiu_HUDUI, _super);
                    function PaiJiu_HUDUI() {
                        return _super.call(this) || this;
                    }
                    PaiJiu_HUDUI.prototype.createChildren = function () {
                        View.regComponent("ui.nqp.game_ui.tongyong.HudUI", ui.nqp.game_ui.tongyong.HudUI);
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.nqp.game_ui.paijiu.PaiJiu_HUDUI.uiView);
                    };
                    PaiJiu_HUDUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Image", "props": { "top": -1, "skin": "paijiu_ui/game_ui/paijiu/zjh.jpg", "right": -1, "left": -1, "bottom": -1 } }, { "type": "Hud", "props": { "var": "view_hud", "top": 0, "runtime": "ui.nqp.game_ui.tongyong.HudUI", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Box", "props": { "var": "box_normal", "top": 0, "right": 0, "mouseThrough": true, "left": 1, "bottom": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Box", "props": { "width": 1278, "var": "box_right", "height": 465, "centerY": 10, "centerX": -1, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 33, "var": "img_room0", "skin": "paijiu_ui/game_ui/paijiu/difen_04_1.png", "right": 970 }, "child": [{ "type": "Clip", "props": { "y": 304, "x": 143, "width": 15, "var": "txt_least0", "skin": "tongyong_ui/game_ui/tongyong/dating/clip_dizhu3.png", "height": 20, "clipX": 10 } }, { "type": "Clip", "props": { "y": 272, "x": 144, "var": "txt_difen0", "skin": "tongyong_ui/game_ui/tongyong/dating/clip_dizhu3.png", "clipX": 10 } }] }, { "type": "Image", "props": { "y": 34, "var": "img_room1", "skin": "paijiu_ui/game_ui/paijiu/difen_03_1.png", "right": 660 }, "child": [{ "type": "Clip", "props": { "y": 305, "x": 152, "width": 15, "var": "txt_least1", "skin": "tongyong_ui/game_ui/tongyong/dating/clip_dizhu2.png", "height": 20, "clipX": 10 } }, { "type": "Clip", "props": { "y": 270, "x": 150, "var": "txt_difen1", "skin": "tongyong_ui/game_ui/tongyong/dating/clip_dizhu2.png", "clipX": 10 } }] }, { "type": "Image", "props": { "y": 36, "var": "img_room2", "skin": "paijiu_ui/game_ui/paijiu/difen_02.png", "right": 350 }, "child": [{ "type": "Clip", "props": { "y": 301, "x": 148, "width": 15, "var": "txt_least2", "skin": "tongyong_ui/game_ui/tongyong/dating/clip_dizhu1.png", "height": 20, "clipX": 10 } }, { "type": "Clip", "props": { "y": 264, "x": 148, "var": "txt_difen2", "skin": "tongyong_ui/game_ui/tongyong/dating/clip_dizhu1.png", "clipX": 10 } }] }, { "type": "Image", "props": { "y": 36, "var": "img_room3", "skin": "paijiu_ui/game_ui/paijiu/difen_01.png", "right": 40 }, "child": [{ "type": "Clip", "props": { "y": 303, "x": 147, "width": 15, "var": "txt_least3", "skin": "tongyong_ui/game_ui/tongyong/dating/clip_dizhu.png", "height": 20, "clipX": 10 } }, { "type": "Clip", "props": { "y": 265, "x": 144, "var": "txt_difen3", "skin": "tongyong_ui/game_ui/tongyong/dating/clip_dizhu.png", "clipX": 10 } }] }] }] }, { "type": "Image", "props": { "top": 10, "skin": "paijiu_ui/game_ui/paijiu/zjh_title.png", "centerX": 111, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 0, "x": 0, "width": 910, "var": "box_fangka", "top": 0, "right": 0, "mouseThrough": true, "bottom": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Box", "props": { "width": 900, "right": 0, "height": 465, "centerY": 20, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 232, "x": 0, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_fangka.png", "right": 421, "name": "item0", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 14, "x": 43, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_fangka2.png" } }] }, { "type": "Image", "props": { "y": 232, "x": 0, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_fangka1.png", "right": 72, "name": "item1", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 39, "x": 83, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_fangka3.png" } }] }] }] }, { "type": "Button", "props": { "y": 668, "x": 640, "var": "btn_join", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/dating/btn_ksjr.png", "centerX": 0, "bottom": 10, "anchorY": 0.5, "anchorX": 0.5 } }] };
                    return PaiJiu_HUDUI;
                }(View));
                paijiu.PaiJiu_HUDUI = PaiJiu_HUDUI;
            })(paijiu = game_ui.paijiu || (game_ui.paijiu = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI_nqp.max.all.js.map