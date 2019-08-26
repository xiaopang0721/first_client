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
        var sangong;
        (function (sangong) {
            var component;
            (function (component) {
                var PaiXingUI = /** @class */ (function (_super) {
                    __extends(PaiXingUI, _super);
                    function PaiXingUI() {
                        return _super.call(this) || this;
                    }
                    PaiXingUI.prototype.createChildren = function () {
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.game_ui.sangong.component.PaiXingUI.uiView);
                    };
                    PaiXingUI.uiView = { "type": "View", "props": { "width": 160, "height": 80 }, "child": [{ "type": "Image", "props": { "y": 46, "x": 80, "width": 210, "var": "img_bg", "skin": "sangong_ui/game_ui/sangong/brnntype_bgimg_0.png", "height": 62, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 2 }, { "type": "Box", "props": { "y": 38, "x": 88, "width": 165, "height": 60, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 6, "child": [{ "type": "Image", "props": { "y": 32, "x": 55, "visible": true, "var": "img_type", "skin": "sangong_ui/game_ui/sangong/brnntype_normal_12.png", "scaleY": 1, "scaleX": 1, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 7, "x": 100, "var": "img_num", "skin": "sangong_ui/game_ui/sangong/tu_x5.png" } }] }, { "type": "Image", "props": { "y": 37, "x": 74, "skin": "sangong_ui/game_ui/sangong/tu_g1.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 4 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "x": [{ "value": 60, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 80, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 5 }] } }, { "target": 4, "keyframes": { "y": [{ "value": 37, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 0 }, { "value": 37, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 5 }], "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "visible", "index": 5 }], "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 5 }, { "value": 1.5, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 15 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 5 }, { "value": 1.5, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 15 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 5 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 15 }] } }, { "target": 6, "keyframes": { "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 6, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 6, "key": "visible", "index": 5 }], "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "scaleY", "index": 0 }, { "value": 1.5, "tweenMethod": "backOut", "tween": true, "target": 6, "key": "scaleY", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "scaleY", "index": 15 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "scaleX", "index": 0 }, { "value": 1.5, "tweenMethod": "backOut", "tween": true, "target": 6, "key": "scaleX", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "scaleX", "index": 15 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                    return PaiXingUI;
                }(View));
                component.PaiXingUI = PaiXingUI;
            })(component = sangong.component || (sangong.component = {}));
        })(sangong = game_ui.sangong || (game_ui.sangong = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var sangong;
        (function (sangong) {
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
                        this.createView(ui.game_ui.sangong.component.TouXiangUI.uiView);
                    };
                    TouXiangUI.uiView = { "type": "View", "props": { "width": 100, "height": 138 }, "child": [{ "type": "Box", "props": { "y": 1, "x": 1 }, "child": [{ "type": "Image", "props": { "y": -7, "x": -5, "skin": "tongyong_ui/game_ui/tongyong/general/tu_txk1.png" } }, { "type": "Image", "props": { "y": 65, "x": 49, "visible": false, "skin": "tongyong_ui/game_ui/tongyong/touxiang/tu_txk.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 65, "x": 49, "var": "img_head", "skin": "tongyong_ui/game_ui/tongyong/touxiang/head_0.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 14, "x": 2, "var": "img_txk", "skin": "tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png", "scaleY": 0.95, "scaleX": 0.95 } }, { "type": "Text", "props": { "y": 4, "x": 0, "wordWrap": true, "width": 100, "var": "text_name", "text": "玩家名字", "leading": 6, "height": 17, "fontSize": 16, "color": "#efda8b", "align": "center" } }, { "type": "Text", "props": { "y": 108, "x": -7, "wordWrap": true, "width": 110, "var": "text_money", "text": "0", "leading": 6, "height": 24, "fontSize": 20, "color": "#f8ea5e", "align": "center" } }, { "type": "Image", "props": { "y": 0, "x": 0, "var": "img_frame", "skin": "sangong_ui/game_ui/sangong/tu_djs.png" }, "child": [{ "type": "Image", "props": { "y": -3, "x": -3, "width": 104, "var": "img_mask", "renderType": "mask", "height": 142 } }] }, { "type": "Image", "props": { "y": 21, "x": 69, "visible": false, "var": "img_qifu", "skin": "tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png" } }, { "type": "Image", "props": { "y": 105, "x": 50, "visible": false, "var": "qifu_type", "skin": "tongyong_ui/game_ui/tongyong/qifu/f_cs2.png", "scaleY": 0.5, "scaleX": 0.5, "anchorY": 1, "anchorX": 0.5 } }] }] };
                    return TouXiangUI;
                }(View));
                component.TouXiangUI = TouXiangUI;
            })(component = sangong.component || (sangong.component = {}));
        })(sangong = game_ui.sangong || (game_ui.sangong = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var sangong;
        (function (sangong) {
            var component;
            (function (component) {
                var WanJia_LUI = /** @class */ (function (_super) {
                    __extends(WanJia_LUI, _super);
                    function WanJia_LUI() {
                        return _super.call(this) || this;
                    }
                    WanJia_LUI.prototype.createChildren = function () {
                        View.regComponent("ui.game_ui.sangong.component.Ying_2UI", ui.game_ui.sangong.component.Ying_2UI);
                        View.regComponent("ui.game_ui.sangong.component.PaiXingUI", ui.game_ui.sangong.component.PaiXingUI);
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.game_ui.sangong.component.WanJia_LUI.uiView);
                    };
                    WanJia_LUI.uiView = { "type": "View", "props": { "width": 370, "height": 180 }, "child": [{ "type": "Ying_2", "props": { "y": 43, "x": 94, "var": "img_frame", "runtime": "ui.game_ui.sangong.component.Ying_2UI" } }, { "type": "Image", "props": { "y": 28, "x": 138, "var": "img_banker", "skin": "sangong_ui/game_ui/sangong/qiang_0.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "PaiXing", "props": { "y": 135, "x": 189, "var": "view_type", "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.game_ui.sangong.component.PaiXingUI" } }, { "type": "Box", "props": { "y": 26, "x": 191, "width": 119, "var": "box_betnum", "height": 39, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 21, "x": 58.5, "skin": "sangong_ui/game_ui/sangong/tu_bei.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 20, "x": 48, "var": "img_num1", "skin": "sangong_ui/game_ui/sangong/bei_0.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 20, "x": 72, "var": "img_num0", "skin": "sangong_ui/game_ui/sangong/bei_0.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
                    return WanJia_LUI;
                }(View));
                component.WanJia_LUI = WanJia_LUI;
            })(component = sangong.component || (sangong.component = {}));
        })(sangong = game_ui.sangong || (game_ui.sangong = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var sangong;
        (function (sangong) {
            var component;
            (function (component) {
                var WanJia_RUI = /** @class */ (function (_super) {
                    __extends(WanJia_RUI, _super);
                    function WanJia_RUI() {
                        return _super.call(this) || this;
                    }
                    WanJia_RUI.prototype.createChildren = function () {
                        View.regComponent("ui.game_ui.sangong.component.Ying_2UI", ui.game_ui.sangong.component.Ying_2UI);
                        View.regComponent("ui.game_ui.sangong.component.PaiXingUI", ui.game_ui.sangong.component.PaiXingUI);
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.game_ui.sangong.component.WanJia_RUI.uiView);
                    };
                    WanJia_RUI.uiView = { "type": "View", "props": { "width": 370, "height": 180 }, "child": [{ "type": "Ying_2", "props": { "y": 43, "x": 87, "var": "img_frame", "runtime": "ui.game_ui.sangong.component.Ying_2UI" } }, { "type": "Image", "props": { "y": 28, "x": 233, "var": "img_banker", "skin": "sangong_ui/game_ui/sangong/qiang_0.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "PaiXing", "props": { "y": 137, "x": 181, "var": "view_type", "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.game_ui.sangong.component.PaiXingUI" } }, { "type": "Box", "props": { "y": 26, "x": 185, "width": 119, "var": "box_betnum", "height": 39, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 21, "x": 58.5, "skin": "sangong_ui/game_ui/sangong/tu_bei.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 20, "x": 48, "var": "img_num1", "skin": "sangong_ui/game_ui/sangong/bei_0.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 20, "x": 72, "var": "img_num0", "skin": "sangong_ui/game_ui/sangong/bei_0.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
                    return WanJia_RUI;
                }(View));
                component.WanJia_RUI = WanJia_RUI;
            })(component = sangong.component || (sangong.component = {}));
        })(sangong = game_ui.sangong || (game_ui.sangong = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var sangong;
        (function (sangong) {
            var component;
            (function (component) {
                var YingUI = /** @class */ (function (_super) {
                    __extends(YingUI, _super);
                    function YingUI() {
                        return _super.call(this) || this;
                    }
                    YingUI.prototype.createChildren = function () {
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.game_ui.sangong.component.YingUI.uiView);
                    };
                    YingUI.uiView = { "type": "View", "props": { "width": 120, "height": 120 }, "child": [{ "type": "Image", "props": { "var": "img_win", "skin": "sangong_ui/game_ui/sangong/tu_ying2.png", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "x": [{ "value": 60, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 60, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 45 }], "scaleY": [{ "value": 2, "tweenMethod": "backOut", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 30 }], "scaleX": [{ "value": 2, "tweenMethod": "backOut", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 30 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                    return YingUI;
                }(View));
                component.YingUI = YingUI;
            })(component = sangong.component || (sangong.component = {}));
        })(sangong = game_ui.sangong || (game_ui.sangong = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var sangong;
        (function (sangong) {
            var component;
            (function (component) {
                var Ying_1UI = /** @class */ (function (_super) {
                    __extends(Ying_1UI, _super);
                    function Ying_1UI() {
                        return _super.call(this) || this;
                    }
                    Ying_1UI.prototype.createChildren = function () {
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.game_ui.sangong.component.Ying_1UI.uiView);
                    };
                    Ying_1UI.uiView = { "type": "View", "props": { "width": 400, "height": 300 }, "child": [{ "type": "Image", "props": { "y": 194, "x": 197, "skin": "sangong_ui/game_ui/sangong/tu_ying.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 2 }, { "type": "Image", "props": { "y": 70, "x": 196, "skin": "sangong_ui/game_ui/sangong/tu_ying1.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 3 }, { "type": "Image", "props": { "y": 65, "x": 197, "skin": "sangong_ui/game_ui/sangong/effect/yanhua/10001.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 4 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "scaleY": [{ "value": 1.5, "tweenMethod": "backOut", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 1.5, "tweenMethod": "backOut", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 10 }] } }, { "target": 3, "keyframes": { "scaleY": [{ "value": 1, "tweenMethod": "backOut", "tween": true, "target": 3, "key": "scaleY", "index": 0 }, { "value": 0.5, "tweenMethod": "backOut", "tween": true, "target": 3, "key": "scaleY", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 1, "tweenMethod": "backOut", "tween": true, "target": 3, "key": "scaleX", "index": 0 }, { "value": 0.5, "tweenMethod": "backOut", "tween": true, "target": 3, "key": "scaleX", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleX", "index": 10 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 5 }] } }, { "target": 4, "keyframes": { "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "visible", "index": 5 }], "skin": [{ "value": "sangong_ui/game_ui/sangong/effect/yanhua/10001.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 0 }, { "value": "sangong_ui/game_ui/sangong/effect/yanhua/10002.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 6 }, { "value": "sangong_ui/game_ui/sangong/effect/yanhua/10003.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 7 }, { "value": "sangong_ui/game_ui/sangong/effect/yanhua/10004.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 8 }, { "value": "sangong_ui/game_ui/sangong/effect/yanhua/10005.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 9 }, { "value": "sangong_ui/game_ui/sangong/effect/yanhua/10006.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 10 }, { "value": "sangong_ui/game_ui/sangong/effect/yanhua/10007.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 11 }, { "value": "sangong_ui/game_ui/sangong/effect/yanhua/10008.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 12 }, { "value": "sangong_ui/game_ui/sangong/effect/yanhua/10009.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 13 }, { "value": "sangong_ui/game_ui/sangong/effect/yanhua/10010.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 14 }, { "value": "sangong_ui/game_ui/sangong/effect/yanhua/10011.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 15 }, { "value": "sangong_ui/game_ui/sangong/effect/yanhua/10012.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 16 }, { "value": "sangong_ui/game_ui/sangong/effect/yanhua/10013.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 17 }, { "value": "sangong_ui/game_ui/sangong/effect/yanhua/10014.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 18 }, { "value": "sangong_ui/game_ui/sangong/effect/yanhua/10015.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 19 }, { "value": "sangong_ui/game_ui/sangong/effect/yanhua/10016.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 20 }, { "value": "sangong_ui/game_ui/sangong/effect/yanhua/10017.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 21 }, { "value": "sangong_ui/game_ui/sangong/effect/yanhua/10018.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 22 }, { "value": "sangong_ui/game_ui/sangong/effect/yanhua/10019.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 23 }, { "value": "sangong_ui/game_ui/sangong/effect/yanhua/10020.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 24 }, { "value": "sangong_ui/game_ui/sangong/effect/yanhua/10021.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 25 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                    return Ying_1UI;
                }(View));
                component.Ying_1UI = Ying_1UI;
            })(component = sangong.component || (sangong.component = {}));
        })(sangong = game_ui.sangong || (game_ui.sangong = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var sangong;
        (function (sangong) {
            var component;
            (function (component) {
                var Ying_2UI = /** @class */ (function (_super) {
                    __extends(Ying_2UI, _super);
                    function Ying_2UI() {
                        return _super.call(this) || this;
                    }
                    Ying_2UI.prototype.createChildren = function () {
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.game_ui.sangong.component.Ying_2UI.uiView);
                    };
                    Ying_2UI.uiView = { "type": "View", "props": { "width": 190, "height": 138 }, "child": [{ "type": "Image", "props": { "width": 190, "skin": "sangong_ui/game_ui/sangong/tu_ying.png", "sizeGrid": "30,30,30,30", "height": 138, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 2 }, { "type": "Image", "props": { "y": 10, "x": 10, "width": 190, "skin": "sangong_ui/game_ui/sangong/tu_ying.png", "sizeGrid": "30,30,30,30", "height": 138, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0 }, "compId": 3 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "scaleY": [{ "value": 2, "tweenMethod": "backInOut", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 5 }, { "value": 1.5, "tweenMethod": "backInOut", "tween": true, "target": 2, "label": null, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 2, "tweenMethod": "backInOut", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 5 }, { "value": 1.5, "tweenMethod": "backInOut", "tween": true, "target": 2, "label": null, "key": "scaleX", "index": 10 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 5 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 10 }] } }, { "target": 3, "keyframes": { "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 15 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                    return Ying_2UI;
                }(View));
                component.Ying_2UI = Ying_2UI;
            })(component = sangong.component || (sangong.component = {}));
        })(sangong = game_ui.sangong || (game_ui.sangong = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var sangong;
        (function (sangong) {
            var JieSuan_1UI = /** @class */ (function (_super) {
                __extends(JieSuan_1UI, _super);
                function JieSuan_1UI() {
                    return _super.call(this) || this;
                }
                JieSuan_1UI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.game_ui.sangong.JieSuan_1UI.uiView);
                };
                JieSuan_1UI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 1280, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 330, "x": 640, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_1.png", "scaleY": 1, "scaleX": 1, "centerY": -30, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 8 }, { "type": "Image", "props": { "y": -105.5, "x": -320, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_sl2.png", "centerY": -50, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 4 }, { "type": "Image", "props": { "y": -105.5, "x": -320, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_sl.png", "centerY": -40, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 5 }, { "type": "Image", "props": { "y": 348, "x": 626, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_2.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 6 }] }], "animations": [{ "nodes": [{ "target": 4, "keyframes": { "scaleY": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 0 }, { "value": 1.2, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 7 }], "scaleX": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 0 }, { "value": 1.2, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 7 }] } }, { "target": 5, "keyframes": { "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 0 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 5 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 8 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 0 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 5 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 8 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 10 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "alpha", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "alpha", "index": 5 }] } }, { "target": 6, "keyframes": { "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "alpha", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "alpha", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "alpha", "index": 10 }] } }, { "target": 8, "keyframes": { "scaleY": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleX", "index": 10 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                return JieSuan_1UI;
            }(View));
            sangong.JieSuan_1UI = JieSuan_1UI;
        })(sangong = game_ui.sangong || (game_ui.sangong = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var sangong;
        (function (sangong) {
            var JieSuan_2UI = /** @class */ (function (_super) {
                __extends(JieSuan_2UI, _super);
                function JieSuan_2UI() {
                    return _super.call(this) || this;
                }
                JieSuan_2UI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.game_ui.sangong.JieSuan_2UI.uiView);
                };
                JieSuan_2UI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 1280, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 330, "x": 640, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_1.png", "scaleY": 1, "scaleX": 1, "gray": true, "centerY": -30, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 8 }, { "type": "Image", "props": { "y": -105.5, "x": -320, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_sb2.png", "centerY": -50, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 4 }, { "type": "Image", "props": { "y": -105.5, "x": -320, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_sb.png", "centerY": -40, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 5 }, { "type": "Image", "props": { "y": 348, "x": 626, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_2.png", "gray": true, "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 6 }] }], "animations": [{ "nodes": [{ "target": 4, "keyframes": { "scaleY": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 0 }, { "value": 1.2, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 7 }], "scaleX": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 0 }, { "value": 1.2, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 7 }] } }, { "target": 5, "keyframes": { "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 0 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 5 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 8 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 0 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 5 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 8 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 10 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "alpha", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "alpha", "index": 5 }] } }, { "target": 6, "keyframes": { "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "alpha", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "alpha", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "alpha", "index": 10 }] } }, { "target": 8, "keyframes": { "scaleY": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleX", "index": 10 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                return JieSuan_2UI;
            }(View));
            sangong.JieSuan_2UI = JieSuan_2UI;
        })(sangong = game_ui.sangong || (game_ui.sangong = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var sangong;
        (function (sangong) {
            var SanGongUI = /** @class */ (function (_super) {
                __extends(SanGongUI, _super);
                function SanGongUI() {
                    return _super.call(this) || this;
                }
                SanGongUI.prototype.createChildren = function () {
                    View.regComponent("SkeletonPlayer", laya.ani.bone.Skeleton);
                    View.regComponent("ui.game_ui.tongyong.FaPaiUI", ui.game_ui.tongyong.FaPaiUI);
                    View.regComponent("Text", laya.display.Text);
                    View.regComponent("ui.game_ui.sangong.component.TouXiangUI", ui.game_ui.sangong.component.TouXiangUI);
                    View.regComponent("ui.game_ui.tongyong.effect.ZhuangRUI", ui.game_ui.tongyong.effect.ZhuangRUI);
                    View.regComponent("ui.game_ui.tongyong.effect.ZhuangLUI", ui.game_ui.tongyong.effect.ZhuangLUI);
                    View.regComponent("ui.game_ui.tongyong.PaiXeiUI", ui.game_ui.tongyong.PaiXeiUI);
                    View.regComponent("ui.game_ui.sangong.component.WanJia_RUI", ui.game_ui.sangong.component.WanJia_RUI);
                    View.regComponent("ui.game_ui.sangong.component.PaiXingUI", ui.game_ui.sangong.component.PaiXingUI);
                    View.regComponent("ui.game_ui.tongyong.DaoJiShiUI", ui.game_ui.tongyong.DaoJiShiUI);
                    View.regComponent("ui.game_ui.tongyong.effect.XiPaiUI", ui.game_ui.tongyong.effect.XiPaiUI);
                    View.regComponent("ui.game_ui.sangong.component.WanJia_LUI", ui.game_ui.sangong.component.WanJia_LUI);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.game_ui.sangong.SanGongUI.uiView);
                };
                SanGongUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "y": 360, "x": 640, "width": 1280, "var": "box_view", "mouseEnabled": true, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Box", "props": { "y": 186, "x": 640, "width": 174, "height": 204, "centerX": 0, "anchorY": 1, "anchorX": 0.5 }, "child": [{ "type": "SkeletonPlayer", "props": { "y": 188, "x": 87, "url": "tongyong_ui/game_ui/tongyong/sk/HeGuan.sk" } }] }, { "type": "PaiXei", "props": { "y": 111, "x": 798, "var": "view_paixie", "runtime": "ui.game_ui.tongyong.PaiXeiUI" } }, { "type": "Text", "props": { "y": 23, "x": 87, "width": 333, "var": "text_info", "text": "牌局号：1532315641561321231313 ", "leading": 6, "height": 25, "fontSize": 20, "color": "#dadada" } }, { "type": "Text", "props": { "y": 48, "x": 87, "width": 212, "var": "text_roomtype", "text": "试玩场：底注：1", "leading": 6, "height": 25, "fontSize": 20, "color": "#dadada" } }, { "type": "TouXiang", "props": { "y": 569, "var": "view_head0", "centerX": -240, "runtime": "ui.game_ui.sangong.component.TouXiangUI" } }, { "type": "TouXiang", "props": { "y": 340, "var": "view_head1", "right": 20, "runtime": "ui.game_ui.sangong.component.TouXiangUI" } }, { "type": "TouXiang", "props": { "y": 151, "var": "view_head2", "right": 20, "runtime": "ui.game_ui.sangong.component.TouXiangUI" } }, { "type": "TouXiang", "props": { "y": 151, "x": 18, "var": "view_head3", "runtime": "ui.game_ui.sangong.component.TouXiangUI" } }, { "type": "TouXiang", "props": { "y": 340, "x": 18, "var": "view_head4", "runtime": "ui.game_ui.sangong.component.TouXiangUI" } }, { "type": "ZhuangR", "props": { "y": 336, "x": 1156, "var": "view_banker1", "runtime": "ui.game_ui.tongyong.effect.ZhuangRUI" } }, { "type": "ZhuangL", "props": { "y": 565, "x": 346, "var": "view_banker0", "runtime": "ui.game_ui.tongyong.effect.ZhuangLUI" } }, { "type": "WanJia_L", "props": { "y": 121, "x": 17, "var": "view_player3", "runtime": "ui.game_ui.sangong.component.WanJia_LUI" } }, { "type": "WanJia_L", "props": { "y": 309, "x": 17, "var": "view_player4", "runtime": "ui.game_ui.sangong.component.WanJia_LUI" } }, { "type": "WanJia_R", "props": { "y": 309, "var": "view_player1", "right": 25, "runtime": "ui.game_ui.sangong.component.WanJia_RUI" } }, { "type": "WanJia_R", "props": { "y": 121, "var": "view_player2", "right": 25, "runtime": "ui.game_ui.sangong.component.WanJia_RUI" } }, { "type": "Button", "props": { "y": 628, "var": "btn_show", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelColors": "#ffffff", "label": "摊牌", "centerX": 269, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 516, "width": 877, "var": "box_bet", "height": 59, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "var": "btn_bet1", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelColors": "#ffffff", "label": "1倍", "disabled": false } }, { "type": "Button", "props": { "y": 0, "x": 178, "var": "btn_bet2", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelColors": "#ffffff", "label": "2倍" } }, { "type": "Button", "props": { "y": 0, "x": 355, "var": "btn_bet3", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelColors": "#ffffff", "label": "3倍" } }, { "type": "Button", "props": { "y": 0, "x": 533, "var": "btn_bet4", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelColors": "#ffffff", "label": "4倍" } }, { "type": "Button", "props": { "y": 0, "x": 710, "var": "btn_bet5", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelColors": "#ffffff", "label": "5倍" } }] }, { "type": "Box", "props": { "y": 628, "x": 910, "width": 172, "var": "box_banker", "height": 128, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Button", "props": { "y": 96, "var": "btn_qiang", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_2.png", "labelStrokeColor": "#7e2314", "labelStroke": 2, "labelSize": 26, "labelColors": "#ffffff", "label": "抢庄", "centerX": -1, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 30, "var": "btn_buqiang", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_3.png", "labelStrokeColor": "#007500", "labelStroke": 2, "labelSize": 26, "labelColors": "#ffffff", "label": "不抢", "centerX": -1, "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 547, "x": 398, "var": "img_qiang", "skin": "sangong_ui/game_ui/sangong/qiang_0.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "PaiXing", "props": { "y": 671, "x": 635, "width": 160, "var": "view_type", "height": 80, "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.game_ui.sangong.component.PaiXingUI" } }, { "type": "DaoJiShi", "props": { "y": 239, "x": 638, "var": "img_time", "scaleY": 1.2, "scaleX": 1.2, "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.game_ui.tongyong.DaoJiShiUI" } }, { "type": "Box", "props": { "width": 687, "visible": false, "height": 43, "centerY": -50, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 20.5, "x": 319.5, "skin": "sangong_ui/game_ui/sangong/tu_h.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 } }, { "type": "Text", "props": { "y": 6, "x": 178, "wordWrap": true, "width": 336, "text": "正在进入房间", "strokeColor": "#00ffc1", "leading": 6, "height": 26, "fontSize": 26, "color": "#dadada", "align": "center" } }] }, { "type": "XiPai", "props": { "y": 290, "x": 640, "var": "view_xipai", "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.game_ui.tongyong.effect.XiPaiUI" } }, { "type": "Button", "props": { "width": 240, "var": "btn_continue", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "sizeGrid": "0,20,0,20", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelColors": "#ffffff", "label": "继续游戏", "height": 59, "centerY": 40, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "ZhuangR", "props": { "y": 146, "x": 1156, "var": "view_banker2", "runtime": "ui.game_ui.tongyong.effect.ZhuangRUI" } }, { "type": "ZhuangL", "props": { "y": 148, "x": 15, "var": "view_banker3", "runtime": "ui.game_ui.tongyong.effect.ZhuangLUI" } }, { "type": "ZhuangL", "props": { "y": 336, "x": 15, "var": "view_banker4", "runtime": "ui.game_ui.tongyong.effect.ZhuangLUI" } }, { "type": "FaPai", "props": { "y": 183, "x": 790, "var": "view_fapai", "runtime": "ui.game_ui.tongyong.FaPaiUI" } }, { "type": "Box", "props": { "y": 516, "x": 630, "width": 119, "var": "box_betnum", "height": 39, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 21, "x": 58.5, "skin": "sangong_ui/game_ui/sangong/tu_bei.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 20, "x": 49.5, "var": "img_num1", "skin": "sangong_ui/game_ui/sangong/bei_0.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 20, "x": 72, "var": "img_num0", "skin": "sangong_ui/game_ui/sangong/bei_0.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] }, { "type": "Image", "props": { "width": 180, "var": "img_menu", "top": 0, "skin": "tongyong_ui/game_ui/tongyong/general/cd_1.png", "sizeGrid": "20,20,20,20", "left": 10, "height": 293, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "Image", "props": { "y": 75, "x": 11, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }, { "type": "Image", "props": { "y": 147, "x": 11, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }, { "type": "Image", "props": { "y": 218, "x": 11, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }, { "type": "Button", "props": { "y": 86, "x": 14, "var": "btn_rules", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_gz.png" } }, { "type": "Button", "props": { "y": 16, "x": 14, "var": "btn_cardtype", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_px.png" } }, { "type": "Button", "props": { "y": 227, "x": 14, "var": "btn_set", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_sz.png" } }, { "type": "Button", "props": { "y": 157, "x": 14, "var": "btn_record", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_zj.png" } }] }, { "type": "Button", "props": { "var": "btn_chongzhi", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_chongzhi.png", "right": 10, "bottom": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "var": "btn_back", "top": 16, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_fh1.png", "right": 10, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "var": "btn_menu", "top": 16, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_cd.png", "left": 10, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 172, "x": 1279, "var": "btn_qifu", "top": 16, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_qf.png", "right": 85, "anchorY": 0.5, "anchorX": 0.5 } }], "animations": [{ "nodes": [{ "target": 105, "keyframes": { "y": [{ "value": 28, "tweenMethod": "linearNone", "tween": true, "target": 105, "key": "y", "index": 0 }, { "value": 28, "tweenMethod": "linearNone", "tween": true, "target": 105, "key": "y", "index": 1 }], "skin": [{ "value": "ui/game_ui/shangong/effect/btn/00001.png", "tweenMethod": "linearNone", "tween": false, "target": 105, "key": "skin", "index": 0 }, { "value": "ui/game_ui/shangong/effect/btn/00002.png", "tweenMethod": "linearNone", "tween": false, "target": 105, "key": "skin", "index": 1 }, { "value": "ui/game_ui/shangong/effect/btn/00003.png", "tweenMethod": "linearNone", "tween": false, "target": 105, "key": "skin", "index": 2 }, { "value": "ui/game_ui/shangong/effect/btn/00004.png", "tweenMethod": "linearNone", "tween": false, "target": 105, "key": "skin", "index": 3 }, { "value": "ui/game_ui/shangong/effect/btn/00005.png", "tweenMethod": "linearNone", "tween": false, "target": 105, "key": "skin", "index": 4 }, { "value": "ui/game_ui/shangong/effect/btn/00006.png", "tweenMethod": "linearNone", "tween": false, "target": 105, "key": "skin", "index": 5 }, { "value": "ui/game_ui/shangong/effect/btn/00007.png", "tweenMethod": "linearNone", "tween": false, "target": 105, "key": "skin", "index": 6 }, { "value": "ui/game_ui/shangong/effect/btn/00008.png", "tweenMethod": "linearNone", "tween": false, "target": 105, "key": "skin", "index": 7 }, { "value": "ui/game_ui/shangong/effect/btn/00009.png", "tweenMethod": "linearNone", "tween": false, "target": 105, "key": "skin", "index": 8 }, { "value": "ui/game_ui/shangong/effect/btn/00010.png", "tweenMethod": "linearNone", "tween": false, "target": 105, "key": "skin", "index": 9 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 105, "key": "alpha", "index": 0 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
                return SanGongUI;
            }(View));
            sangong.SanGongUI = SanGongUI;
        })(sangong = game_ui.sangong || (game_ui.sangong = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var sangong;
        (function (sangong) {
            var SanGong_GuiZeUI = /** @class */ (function (_super) {
                __extends(SanGong_GuiZeUI, _super);
                function SanGong_GuiZeUI() {
                    return _super.call(this) || this;
                }
                SanGong_GuiZeUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.game_ui.sangong.SanGong_GuiZeUI.uiView);
                };
                SanGong_GuiZeUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 787, "scaleY": 1.25, "scaleX": 1.25, "height": 531, "centerY": 1, "centerX": -5, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 1, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_bk4.png" } }, { "type": "Image", "props": { "y": 0, "x": 785, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_bk4.png", "scaleX": -1 } }, { "type": "Image", "props": { "y": 29, "x": 393, "skin": "tongyong_ui/game_ui/tongyong/general/tu_bkbt.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 37, "x": 394, "skin": "tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Tab", "props": { "y": 66, "x": 15, "width": 756, "var": "btn_tab", "space": 4, "skin": "tongyong_ui/game_ui/tongyong/hud/tab_bq.png", "labels": "玩法介绍,牌型说明,牌型大小,牌型倍数", "labelSize": 20, "labelColors": "#cacaca,#cacaca,#ffffff", "height": 58 } }, { "type": "Panel", "props": { "y": 130, "x": 20, "width": 750, "var": "panel_rule", "height": 355 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "lab_wanfa", "skin": "sangong_ui/game_ui/sangong/guize_1.png", "height": 1048 } }] }, { "type": "Image", "props": { "y": 130, "x": 20, "var": "lab_type", "skin": "sangong_ui/game_ui/sangong/guize_2.png" } }, { "type": "Image", "props": { "y": 130, "x": 20, "var": "lab_daxiao", "skin": "sangong_ui/game_ui/sangong/guize_3.png" } }, { "type": "Image", "props": { "y": 130, "x": 20, "var": "lab_jiesuan", "skin": "sangong_ui/game_ui/sangong/guize_4.png" } }, { "type": "Button", "props": { "y": 38, "x": 743, "var": "btn_close", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/hud/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
                return SanGong_GuiZeUI;
            }(View));
            sangong.SanGong_GuiZeUI = SanGong_GuiZeUI;
        })(sangong = game_ui.sangong || (game_ui.sangong = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
(function (ui) {
    var game_ui;
    (function (game_ui) {
        var sangong;
        (function (sangong) {
            var SanGong_HUDUI = /** @class */ (function (_super) {
                __extends(SanGong_HUDUI, _super);
                function SanGong_HUDUI() {
                    return _super.call(this) || this;
                }
                SanGong_HUDUI.prototype.createChildren = function () {
                    View.regComponent("ui.game_ui.tongyong.HudUI", ui.game_ui.tongyong.HudUI);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.game_ui.sangong.SanGong_HUDUI.uiView);
                };
                SanGong_HUDUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Image", "props": { "top": -1, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_bj.png", "right": -1, "left": -1, "bottom": -1 } }, { "type": "Hud", "props": { "var": "view_hud", "top": 0, "runtime": "ui.game_ui.tongyong.HudUI", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "y": 43, "x": 640, "top": 24, "skin": "sangong_ui/game_ui/sangong/zjh_title.png", "scaleY": 1, "scaleX": 1, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "var": "box_fangka", "top": 0, "right": 0, "mouseThrough": true, "left": 0, "height": 720, "bottom": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Box", "props": { "width": 900, "right": 0, "height": 465, "centerY": 20, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 232, "x": 0, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_fangka.png", "right": 421, "name": "item0", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 14, "x": 43, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_fangka2.png" } }] }, { "type": "Image", "props": { "y": 232, "x": 0, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_fangka1.png", "right": 72, "name": "item1", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 39, "x": 83, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_fangka3.png" } }] }] }] }, { "type": "Box", "props": { "var": "box_normal", "top": 0, "right": 0, "mouseThrough": true, "left": 0, "bottom": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Box", "props": { "width": 1280, "var": "box_right", "height": 465, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 232, "var": "img_room0", "skin": "tongyong_ui/game_ui/tongyong/hud/difen_00.png", "right": 961, "name": "item0", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 358, "x": 127, "wordWrap": true, "width": 180, "var": "lab_least0", "text": "底分：1", "leading": 6, "height": 31, "fontSize": 24, "color": "#a9d6c1", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 400, "x": 127, "wordWrap": true, "width": 180, "var": "lab_money0", "text": "准入：6", "leading": 6, "height": 31, "fontSize": 24, "color": "#a9d6c1", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Image", "props": { "y": 134, "x": 125, "skin": "tongyong_ui/game_ui/tongyong/hud/difen_02_1.png", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 232, "var": "img_room1", "skin": "tongyong_ui/game_ui/tongyong/hud/difen_01.png", "right": 664, "name": "item1", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 359, "x": 127, "wordWrap": true, "width": 180, "var": "lab_least1", "text": "底分：10", "leading": 6, "height": 31, "fontSize": 24, "color": "#80adc8", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 399, "x": 127, "wordWrap": true, "width": 180, "var": "lab_money1", "text": "准入：60", "leading": 6, "height": 31, "fontSize": 26, "color": "#80adc8", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Image", "props": { "y": 137, "x": 127, "skin": "tongyong_ui/game_ui/tongyong/hud/difen_01_1.png", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 232, "var": "img_room2", "skin": "tongyong_ui/game_ui/tongyong/hud/difen_02.png", "right": 367, "name": "item2", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 131, "x": 134, "skin": "sangong_ui/game_ui/sangong/difen_03_1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 358, "x": 126, "wordWrap": true, "width": 180, "var": "lab_least2", "text": "底分：50", "leading": 6, "height": 31, "fontSize": 24, "color": "#9d77aa", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 400, "x": 126, "wordWrap": true, "width": 180, "var": "lab_money2", "text": "准入：300", "leading": 6, "height": 31, "fontSize": 24, "color": "#9d77aa", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] }, { "type": "Image", "props": { "y": 232, "var": "img_room3", "skin": "tongyong_ui/game_ui/tongyong/hud/difen_03.png", "right": 70, "name": "item3", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 131, "x": 135, "skin": "sangong_ui/game_ui/sangong/difen_04_1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 400, "x": 125, "wordWrap": true, "width": 180, "var": "lab_money3", "text": "准入：600", "leading": 6, "height": 31, "fontSize": 24, "color": "#c19a81", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 358, "x": 124, "wordWrap": true, "width": 180, "var": "lab_least3", "text": "底分：100", "leading": 6, "height": 31, "fontSize": 24, "color": "#c19a81", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] }] }] }] };
                return SanGong_HUDUI;
            }(View));
            sangong.SanGong_HUDUI = SanGong_HUDUI;
        })(sangong = game_ui.sangong || (game_ui.sangong = {}));
    })(game_ui = ui.game_ui || (ui.game_ui = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map