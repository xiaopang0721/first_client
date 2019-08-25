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
            var ebgang;
            (function (ebgang) {
                var component;
                (function (component) {
                    var PaiXingUI = /** @class */ (function (_super) {
                        __extends(PaiXingUI, _super);
                        function PaiXingUI() {
                            return _super.call(this) || this;
                        }
                        PaiXingUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.ebgang.component.PaiXingUI.uiView);
                        };
                        PaiXingUI.uiView = { "type": "View", "props": { "width": 160, "height": 80 }, "child": [{ "type": "Image", "props": { "y": 46, "x": 80, "width": 210, "var": "img_bg", "skin": "ebgang_ui/game_ui/ebgang/brnntype_bgimg_0.png", "height": 62, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 2 }, { "type": "Box", "props": { "y": 38, "x": 88, "width": 165, "height": 60, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 6, "child": [{ "type": "Image", "props": { "y": 32, "x": 75, "visible": true, "var": "img_type", "skin": "ebgang_ui/game_ui/ebgang/brnntype_normal_1.png", "scaleY": 1, "scaleX": 1, "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 37, "x": 74, "skin": "ebgang_ui/game_ui/ebgang/tu_g1.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 4 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "x": [{ "value": 60, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 80, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 5 }] } }, { "target": 4, "keyframes": { "y": [{ "value": 37, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 0 }, { "value": 37, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 5 }], "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "visible", "index": 5 }], "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 5 }, { "value": 1.5, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 15 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 5 }, { "value": 1.5, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 15 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 5 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 15 }] } }, { "target": 6, "keyframes": { "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 6, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 6, "key": "visible", "index": 5 }], "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "scaleY", "index": 0 }, { "value": 1.5, "tweenMethod": "backOut", "tween": true, "target": 6, "key": "scaleY", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "scaleY", "index": 15 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "scaleX", "index": 0 }, { "value": 1.5, "tweenMethod": "backOut", "tween": true, "target": 6, "key": "scaleX", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "scaleX", "index": 15 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                        return PaiXingUI;
                    }(View));
                    component.PaiXingUI = PaiXingUI;
                })(component = ebgang.component || (ebgang.component = {}));
            })(ebgang = game_ui.ebgang || (game_ui.ebgang = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var ebgang;
            (function (ebgang) {
                var component;
                (function (component) {
                    var TouXiangUI = /** @class */ (function (_super) {
                        __extends(TouXiangUI, _super);
                        function TouXiangUI() {
                            return _super.call(this) || this;
                        }
                        TouXiangUI.prototype.createChildren = function () {
                            View.regComponent("Text", laya.display.Text);
                            View.regComponent("ui.nqp.game_ui.tongyong.effect.ZhuangLUI", ui.nqp.game_ui.tongyong.effect.ZhuangLUI);
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.ebgang.component.TouXiangUI.uiView);
                        };
                        TouXiangUI.uiView = { "type": "View", "props": { "width": 100, "height": 138 }, "child": [{ "type": "Box", "props": { "y": 1, "x": 1 }, "child": [{ "type": "Image", "props": { "y": -7, "x": -5, "skin": "tongyong_ui/game_ui/tongyong/general/tu_txk1.png" } }, { "type": "Image", "props": { "y": 65, "x": 49, "visible": false, "skin": "tongyong_ui/game_ui/tongyong/touxiang/tu_txk.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 65, "x": 49, "var": "img_head", "skin": "tongyong_ui/game_ui/tongyong/touxiang/head_0.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 14, "x": 2, "var": "img_txk", "skin": "tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png", "scaleY": 0.95, "scaleX": 0.95 } }, { "type": "Text", "props": { "y": 4, "x": 0, "wordWrap": false, "width": 100, "var": "text_name", "text": "玩家名字", "leading": 6, "height": 17, "fontSize": 16, "color": "#efda8b", "align": "center" } }, { "type": "Text", "props": { "y": 108, "x": -7, "wordWrap": false, "width": 110, "var": "text_money", "text": "0", "leading": 6, "height": 24, "fontSize": 20, "color": "#f8ea5e", "align": "center" } }, { "type": "Image", "props": { "y": 0, "x": 0, "var": "img_frame", "skin": "ebgang_ui/game_ui/ebgang/tu_djs.png" }, "child": [{ "type": "Image", "props": { "y": -3, "x": -3, "width": 104, "var": "img_mask", "renderType": "mask", "height": 142 } }] }, { "type": "Image", "props": { "y": 105, "x": 50, "visible": false, "var": "qifu_type", "skin": "tongyong_ui/game_ui/tongyong/qifu/f_cs2.png", "scaleY": 0.5, "scaleX": 0.5, "anchorY": 1, "anchorX": 0.5 } }, { "type": "ZhuangL", "props": { "y": -4, "x": -4, "var": "view_banker", "runtime": "ui.nqp.game_ui.tongyong.effect.ZhuangLUI" } }, { "type": "Image", "props": { "y": 21, "x": 69, "visible": false, "var": "img_qifu", "skin": "tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png" } }] }] };
                        return TouXiangUI;
                    }(View));
                    component.TouXiangUI = TouXiangUI;
                })(component = ebgang.component || (ebgang.component = {}));
            })(ebgang = game_ui.ebgang || (game_ui.ebgang = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var ebgang;
            (function (ebgang) {
                var component;
                (function (component) {
                    var WanJia_LUI = /** @class */ (function (_super) {
                        __extends(WanJia_LUI, _super);
                        function WanJia_LUI() {
                            return _super.call(this) || this;
                        }
                        WanJia_LUI.prototype.createChildren = function () {
                            View.regComponent("ui.nqp.game_ui.ebgang.component.Ying_2UI", ui.nqp.game_ui.ebgang.component.Ying_2UI);
                            View.regComponent("ui.nqp.game_ui.ebgang.component.PaiXingUI", ui.nqp.game_ui.ebgang.component.PaiXingUI);
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.ebgang.component.WanJia_LUI.uiView);
                        };
                        WanJia_LUI.uiView = { "type": "View", "props": { "width": 370, "height": 180 }, "child": [{ "type": "Ying_2", "props": { "y": 43, "x": 94, "var": "img_frame", "runtime": "ui.nqp.game_ui.ebgang.component.Ying_2UI" } }, { "type": "Image", "props": { "y": 188, "x": 35, "var": "img_banker", "skin": "ebgang_ui/game_ui/ebgang/qiang_0.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "PaiXing", "props": { "y": 135, "x": 189, "var": "view_type", "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.nqp.game_ui.ebgang.component.PaiXingUI" } }, { "type": "Box", "props": { "y": 168, "x": -2, "visible": true, "var": "box_betRate" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 4, "visible": true, "var": "img_betRateX", "skin": "ebgang_ui/game_ui/ebgang/tu_x.png" } }, { "type": "Image", "props": { "y": 0, "x": 22, "var": "img_betRate1", "skin": "ebgang_ui/game_ui/ebgang/bei_1.png" } }, { "type": "Image", "props": { "y": 0, "x": 44, "var": "img_betRate2", "skin": "ebgang_ui/game_ui/ebgang/bei_5.png" } }, { "type": "Image", "props": { "y": 0, "x": 69, "visible": false, "var": "img_betRate3", "skin": "ebgang_ui/game_ui/ebgang/bei_5.png" } }] }] };
                        return WanJia_LUI;
                    }(View));
                    component.WanJia_LUI = WanJia_LUI;
                })(component = ebgang.component || (ebgang.component = {}));
            })(ebgang = game_ui.ebgang || (game_ui.ebgang = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var ebgang;
            (function (ebgang) {
                var component;
                (function (component) {
                    var WanJia_RUI = /** @class */ (function (_super) {
                        __extends(WanJia_RUI, _super);
                        function WanJia_RUI() {
                            return _super.call(this) || this;
                        }
                        WanJia_RUI.prototype.createChildren = function () {
                            View.regComponent("ui.nqp.game_ui.ebgang.component.Ying_2UI", ui.nqp.game_ui.ebgang.component.Ying_2UI);
                            View.regComponent("ui.nqp.game_ui.ebgang.component.PaiXingUI", ui.nqp.game_ui.ebgang.component.PaiXingUI);
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.ebgang.component.WanJia_RUI.uiView);
                        };
                        WanJia_RUI.uiView = { "type": "View", "props": { "width": 370, "height": 180 }, "child": [{ "type": "Ying_2", "props": { "y": 43, "x": 87, "visible": false, "var": "img_frame", "runtime": "ui.nqp.game_ui.ebgang.component.Ying_2UI" } }, { "type": "Image", "props": { "y": 193, "x": 333, "visible": true, "var": "img_banker", "skin": "ebgang_ui/game_ui/ebgang/qiang_0.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "PaiXing", "props": { "y": 137, "x": 181, "visible": false, "var": "view_type", "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.nqp.game_ui.ebgang.component.PaiXingUI" } }, { "type": "Box", "props": { "y": 173, "x": 287, "visible": true, "var": "box_betRate" }, "child": [{ "type": "Image", "props": { "y": 0, "x": -11, "visible": true, "var": "img_betRateX", "skin": "ebgang_ui/game_ui/ebgang/tu_x.png" } }, { "type": "Image", "props": { "y": 0, "x": 11, "var": "img_betRate1", "skin": "ebgang_ui/game_ui/ebgang/bei_1.png" } }, { "type": "Image", "props": { "y": 0, "x": 33, "var": "img_betRate2", "skin": "ebgang_ui/game_ui/ebgang/bei_5.png" } }, { "type": "Image", "props": { "y": 0, "x": 57, "visible": false, "var": "img_betRate3", "skin": "ebgang_ui/game_ui/ebgang/bei_5.png" } }] }] };
                        return WanJia_RUI;
                    }(View));
                    component.WanJia_RUI = WanJia_RUI;
                })(component = ebgang.component || (ebgang.component = {}));
            })(ebgang = game_ui.ebgang || (game_ui.ebgang = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var ebgang;
            (function (ebgang) {
                var component;
                (function (component) {
                    var YingUI = /** @class */ (function (_super) {
                        __extends(YingUI, _super);
                        function YingUI() {
                            return _super.call(this) || this;
                        }
                        YingUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.ebgang.component.YingUI.uiView);
                        };
                        YingUI.uiView = { "type": "View", "props": { "width": 120, "height": 120 }, "child": [{ "type": "Image", "props": { "var": "img_win", "skin": "ebgang_ui/game_ui/ebgang/tu_ying2.png", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "x": [{ "value": 60, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 60, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 45 }], "scaleY": [{ "value": 2, "tweenMethod": "backOut", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 30 }], "scaleX": [{ "value": 2, "tweenMethod": "backOut", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 30 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                        return YingUI;
                    }(View));
                    component.YingUI = YingUI;
                })(component = ebgang.component || (ebgang.component = {}));
            })(ebgang = game_ui.ebgang || (game_ui.ebgang = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var ebgang;
            (function (ebgang) {
                var component;
                (function (component) {
                    var Ying_1UI = /** @class */ (function (_super) {
                        __extends(Ying_1UI, _super);
                        function Ying_1UI() {
                            return _super.call(this) || this;
                        }
                        Ying_1UI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.ebgang.component.Ying_1UI.uiView);
                        };
                        Ying_1UI.uiView = { "type": "View", "props": { "width": 400, "height": 300 }, "child": [{ "type": "Image", "props": { "y": 194, "x": 197, "skin": "ebgang_ui/game_ui/ebgang/tu_ying.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 2 }, { "type": "Image", "props": { "y": 70, "x": 196, "skin": "ebgang_ui/game_ui/ebgang/tu_ying1.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 3 }, { "type": "Image", "props": { "y": 65, "x": 197, "skin": "ebgang_ui/game_ui/ebgang/effect/yanhua/10001.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 4 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "scaleY": [{ "value": 1.5, "tweenMethod": "backOut", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 1.5, "tweenMethod": "backOut", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 10 }] } }, { "target": 3, "keyframes": { "scaleY": [{ "value": 1, "tweenMethod": "backOut", "tween": true, "target": 3, "key": "scaleY", "index": 0 }, { "value": 0.5, "tweenMethod": "backOut", "tween": true, "target": 3, "key": "scaleY", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 1, "tweenMethod": "backOut", "tween": true, "target": 3, "key": "scaleX", "index": 0 }, { "value": 0.5, "tweenMethod": "backOut", "tween": true, "target": 3, "key": "scaleX", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleX", "index": 10 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 5 }] } }, { "target": 4, "keyframes": { "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "visible", "index": 5 }], "skin": [{ "value": "ebgang_ui/game_ui/ebgang/effect/yanhua/10001.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 0 }, { "value": "ebgang_ui/game_ui/ebgang/effect/yanhua/10002.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 6 }, { "value": "ebgang_ui/game_ui/ebgang/effect/yanhua/10003.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 7 }, { "value": "ebgang_ui/game_ui/ebgang/effect/yanhua/10004.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 8 }, { "value": "ebgang_ui/game_ui/ebgang/effect/yanhua/10005.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 9 }, { "value": "ebgang_ui/game_ui/ebgang/effect/yanhua/10006.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 10 }, { "value": "ebgang_ui/game_ui/ebgang/effect/yanhua/10007.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 11 }, { "value": "ebgang_ui/game_ui/ebgang/effect/yanhua/10008.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 12 }, { "value": "ebgang_ui/game_ui/ebgang/effect/yanhua/10009.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 13 }, { "value": "ebgang_ui/game_ui/ebgang/effect/yanhua/10010.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 14 }, { "value": "ebgang_ui/game_ui/ebgang/effect/yanhua/10011.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 15 }, { "value": "ebgang_ui/game_ui/ebgang/effect/yanhua/10012.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 16 }, { "value": "ebgang_ui/game_ui/ebgang/effect/yanhua/10013.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 17 }, { "value": "ebgang_ui/game_ui/ebgang/effect/yanhua/10014.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 18 }, { "value": "ebgang_ui/game_ui/ebgang/effect/yanhua/10015.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 19 }, { "value": "ebgang_ui/game_ui/ebgang/effect/yanhua/10016.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 20 }, { "value": "ebgang_ui/game_ui/ebgang/effect/yanhua/10017.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 21 }, { "value": "ebgang_ui/game_ui/ebgang/effect/yanhua/10018.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 22 }, { "value": "ebgang_ui/game_ui/ebgang/effect/yanhua/10019.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 23 }, { "value": "ebgang_ui/game_ui/ebgang/effect/yanhua/10020.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 24 }, { "value": "ebgang_ui/game_ui/ebgang/effect/yanhua/10021.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 25 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                        return Ying_1UI;
                    }(View));
                    component.Ying_1UI = Ying_1UI;
                })(component = ebgang.component || (ebgang.component = {}));
            })(ebgang = game_ui.ebgang || (game_ui.ebgang = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var ebgang;
            (function (ebgang) {
                var component;
                (function (component) {
                    var Ying_2UI = /** @class */ (function (_super) {
                        __extends(Ying_2UI, _super);
                        function Ying_2UI() {
                            return _super.call(this) || this;
                        }
                        Ying_2UI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.ebgang.component.Ying_2UI.uiView);
                        };
                        Ying_2UI.uiView = { "type": "View", "props": { "width": 190, "height": 138 }, "child": [{ "type": "Image", "props": { "width": 190, "skin": "ebgang_ui/game_ui/ebgang/tu_ying.png", "sizeGrid": "30,30,30,30", "height": 138, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 2 }, { "type": "Image", "props": { "y": 10, "x": 10, "width": 190, "skin": "ebgang_ui/game_ui/ebgang/tu_ying.png", "sizeGrid": "30,30,30,30", "height": 138, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0 }, "compId": 3 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "scaleY": [{ "value": 2, "tweenMethod": "backInOut", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 5 }, { "value": 1.5, "tweenMethod": "backInOut", "tween": true, "target": 2, "label": null, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 2, "tweenMethod": "backInOut", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 5 }, { "value": 1.5, "tweenMethod": "backInOut", "tween": true, "target": 2, "label": null, "key": "scaleX", "index": 10 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 5 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 10 }] } }, { "target": 3, "keyframes": { "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 15 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                        return Ying_2UI;
                    }(View));
                    component.Ying_2UI = Ying_2UI;
                })(component = ebgang.component || (ebgang.component = {}));
            })(ebgang = game_ui.ebgang || (game_ui.ebgang = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var ebgang;
            (function (ebgang) {
                var EBGangUI = /** @class */ (function (_super) {
                    __extends(EBGangUI, _super);
                    function EBGangUI() {
                        return _super.call(this) || this;
                    }
                    EBGangUI.prototype.createChildren = function () {
                        View.regComponent("Text", laya.display.Text);
                        View.regComponent("ui.nqp.game_ui.ebgang.component.TouXiangUI", ui.nqp.game_ui.ebgang.component.TouXiangUI);
                        View.regComponent("ui.nqp.game_ui.ebgang.component.PaiXingUI", ui.nqp.game_ui.ebgang.component.PaiXingUI);
                        View.regComponent("ui.nqp.game_ui.ebgang.component.WanJia_RUI", ui.nqp.game_ui.ebgang.component.WanJia_RUI);
                        View.regComponent("ui.nqp.game_ui.ebgang.component.WanJia_LUI", ui.nqp.game_ui.ebgang.component.WanJia_LUI);
                        View.regComponent("ui.nqp.game_ui.tongyong.jiangtouUI", ui.nqp.game_ui.tongyong.jiangtouUI);
                        View.regComponent("ui.nqp.game_ui.tongyong.DaoJiShiUI", ui.nqp.game_ui.tongyong.DaoJiShiUI);
                        View.regComponent("ui.nqp.game_ui.tongyong.effect.ShaiZiUI", ui.nqp.game_ui.tongyong.effect.ShaiZiUI);
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.nqp.game_ui.ebgang.EBGangUI.uiView);
                    };
                    EBGangUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "y": 360, "x": 640, "width": 1280, "var": "box_view", "mouseEnabled": true, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Text", "props": { "y": 600, "x": 13, "wordWrap": false, "width": 386, "var": "text_info", "text": "牌局号：1532315641561321231313 ", "leading": 6, "height": 25, "fontSize": 24, "color": "#ffffff" } }, { "type": "Text", "props": { "y": 650, "x": 13, "wordWrap": false, "width": 200, "var": "text_roomtype", "text": "底注：1", "leading": 6, "height": 25, "fontSize": 24, "color": "#ffffff" } }, { "type": "Text", "props": { "y": 650, "x": 240, "wordWrap": false, "width": 157, "visible": true, "var": "text_round", "text": "局数：X/Y", "leading": 6, "height": 25, "fontSize": 24, "color": "#ffffff", "align": "left" } }, { "type": "TouXiang", "props": { "y": 568, "var": "view_head0", "centerX": -176, "runtime": "ui.nqp.game_ui.ebgang.component.TouXiangUI" } }, { "type": "TouXiang", "props": { "y": 277, "var": "view_head1", "right": 20, "runtime": "ui.nqp.game_ui.ebgang.component.TouXiangUI" } }, { "type": "TouXiang", "props": { "y": 38, "var": "view_head2", "right": 438, "runtime": "ui.nqp.game_ui.ebgang.component.TouXiangUI" } }, { "type": "TouXiang", "props": { "y": 277, "x": 18, "var": "view_head3", "runtime": "ui.nqp.game_ui.ebgang.component.TouXiangUI" } }, { "type": "PaiXing", "props": { "y": 674, "x": 614, "width": 160, "var": "view_player0", "height": 80, "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.nqp.game_ui.ebgang.component.PaiXingUI" } }, { "type": "WanJia_R", "props": { "y": 246, "var": "view_player1", "right": 35, "runtime": "ui.nqp.game_ui.ebgang.component.WanJia_RUI" } }, { "type": "WanJia_R", "props": { "y": 7, "var": "view_player2", "right": 453, "runtime": "ui.nqp.game_ui.ebgang.component.WanJia_RUI" } }, { "type": "WanJia_L", "props": { "y": 250, "x": 28, "var": "view_player3", "runtime": "ui.nqp.game_ui.ebgang.component.WanJia_LUI" } }, { "type": "jiangtou", "props": { "y": 650, "x": 536, "var": "view_showcard0", "anchorY": 1, "anchorX": 0.5, "runtime": "ui.nqp.game_ui.tongyong.jiangtouUI" } }, { "type": "jiangtou", "props": { "y": 354, "x": 1140, "var": "view_showcard1", "scaleX": -1, "anchorY": 1, "anchorX": 0.5, "runtime": "ui.nqp.game_ui.tongyong.jiangtouUI" } }, { "type": "jiangtou", "props": { "y": 92, "x": 719, "var": "view_showcard2", "rotation": -180, "anchorY": 1, "anchorX": 0.5, "runtime": "ui.nqp.game_ui.tongyong.jiangtouUI" } }, { "type": "jiangtou", "props": { "y": 354, "x": 140, "var": "view_showcard3", "anchorY": 1, "anchorX": 0.5, "runtime": "ui.nqp.game_ui.tongyong.jiangtouUI" } }, { "type": "Box", "props": { "y": 518, "width": 877, "var": "box_banker", "height": 59, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "var": "btn_banker_no", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_2.png", "labelStrokeColor": "#7e2314", "labelStroke": 2, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "label": "不抢庄", "disabled": false } }, { "type": "Button", "props": { "y": 0, "x": 178, "var": "btn_banker1", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "label": "3倍抢庄" } }, { "type": "Button", "props": { "y": 0, "x": 355, "var": "btn_banker2", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "label": "4倍抢庄" } }, { "type": "Button", "props": { "y": 0, "x": 533, "var": "btn_banker3", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "label": "5倍抢庄" } }, { "type": "Button", "props": { "y": 0, "x": 710, "var": "btn_banker4", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "label": "6倍抢庄" } }] }, { "type": "Box", "props": { "y": 516, "width": 877, "var": "box_bet", "height": 59, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "var": "btn_bet1", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelColors": "#ffffff", "label": "1倍", "disabled": false } }, { "type": "Button", "props": { "y": 0, "x": 178, "var": "btn_bet2", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelColors": "#ffffff", "label": "2倍" } }, { "type": "Button", "props": { "y": 0, "x": 355, "var": "btn_bet3", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelColors": "#ffffff", "label": "3倍" } }, { "type": "Button", "props": { "y": 0, "x": 533, "var": "btn_bet4", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelColors": "#ffffff", "label": "4倍" } }, { "type": "Button", "props": { "y": 0, "x": 710, "var": "btn_bet5", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelColors": "#ffffff", "label": "5倍" } }] }, { "type": "Box", "props": { "y": 542, "width": 154, "var": "box_banker_tip0", "height": 35, "centerX": -163, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": -1, "x": -2, "var": "img_banker_qiang0", "skin": "ebgang_ui/game_ui/ebgang/tu_bei1.png" } }, { "type": "Image", "props": { "y": -1, "x": 107, "var": "img_banker_bei0", "skin": "ebgang_ui/game_ui/ebgang/tu_bei2.png" } }, { "type": "Image", "props": { "y": -5, "x": 29, "var": "img_banker_num1_0", "skin": "ebgang_ui/game_ui/ebgang/bei_0.png" } }, { "type": "Image", "props": { "y": -5, "x": 53, "var": "img_banker_num2_0", "skin": "ebgang_ui/game_ui/ebgang/bei_0.png" } }, { "type": "Image", "props": { "y": -5, "x": 77, "var": "img_banker_num3_0", "skin": "ebgang_ui/game_ui/ebgang/bei_0.png" } }] }, { "type": "Box", "props": { "y": 251, "width": 154, "var": "box_banker_tip1", "height": 35, "centerX": 567, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": -1, "x": 8, "var": "img_banker_qiang1", "skin": "ebgang_ui/game_ui/ebgang/tu_bei1.png" } }, { "type": "Image", "props": { "y": -1, "x": 117, "var": "img_banker_bei1", "skin": "ebgang_ui/game_ui/ebgang/tu_bei2.png" } }, { "type": "Image", "props": { "y": -5, "x": 39, "var": "img_banker_num1_1", "skin": "ebgang_ui/game_ui/ebgang/bei_0.png" } }, { "type": "Image", "props": { "y": -5, "x": 63, "var": "img_banker_num2_1", "skin": "ebgang_ui/game_ui/ebgang/bei_0.png" } }, { "type": "Image", "props": { "y": -5, "x": 87, "var": "img_banker_num3_1", "skin": "ebgang_ui/game_ui/ebgang/bei_0.png" } }] }, { "type": "Box", "props": { "y": 201, "width": 154, "var": "box_banker_tip2", "height": 35, "centerX": 160, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": -1, "x": -2, "var": "img_banker_qiang2", "skin": "ebgang_ui/game_ui/ebgang/tu_bei1.png" } }, { "type": "Image", "props": { "y": -1, "x": 107, "var": "img_banker_bei2", "skin": "ebgang_ui/game_ui/ebgang/tu_bei2.png" } }, { "type": "Image", "props": { "y": -5, "x": 29, "var": "img_banker_num1_2", "skin": "ebgang_ui/game_ui/ebgang/bei_0.png" } }, { "type": "Image", "props": { "y": -5, "x": 53, "var": "img_banker_num2_2", "skin": "ebgang_ui/game_ui/ebgang/bei_0.png" } }, { "type": "Image", "props": { "y": -5, "x": 77, "var": "img_banker_num3_2", "skin": "ebgang_ui/game_ui/ebgang/bei_0.png" } }] }, { "type": "Box", "props": { "y": 257, "width": 154, "var": "box_banker_tip3", "height": 35, "centerX": -568, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": -1, "x": 8, "var": "img_banker_qiang3", "skin": "ebgang_ui/game_ui/ebgang/tu_bei1.png" } }, { "type": "Image", "props": { "y": -1, "x": 117, "var": "img_banker_bei3", "skin": "ebgang_ui/game_ui/ebgang/tu_bei2.png" } }, { "type": "Image", "props": { "y": -5, "x": 39, "var": "img_banker_num1_3", "skin": "ebgang_ui/game_ui/ebgang/bei_0.png" } }, { "type": "Image", "props": { "y": -5, "x": 63, "var": "img_banker_num2_3", "skin": "ebgang_ui/game_ui/ebgang/bei_0.png" } }, { "type": "Image", "props": { "y": -5, "x": 87, "var": "img_banker_num3_3", "skin": "ebgang_ui/game_ui/ebgang/bei_0.png" } }] }, { "type": "Image", "props": { "y": 546, "x": 463, "visible": false, "var": "img_qiang", "skin": "ebgang_ui/game_ui/ebgang/qiang_0.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "DaoJiShi", "props": { "y": 241, "x": 639, "var": "img_time", "scaleY": 1.2, "scaleX": 1.2, "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.nqp.game_ui.tongyong.DaoJiShiUI" } }, { "type": "Box", "props": { "y": 460, "width": 687, "visible": false, "var": "box_tip", "height": 43, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 20.5, "x": 319.5, "var": "img_tip", "skin": "ebgang_ui/game_ui/ebgang/tu_h.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 } }, { "type": "Text", "props": { "y": 6, "x": 78, "width": 520, "var": "txt_tip", "text": "正在进入房间", "strokeColor": "#00ffc1", "leading": 6, "height": 26, "fontSize": 26, "color": "#dadada", "align": "center" } }] }, { "type": "Button", "props": { "width": 240, "var": "btn_continue", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "sizeGrid": "0,20,0,20", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelColors": "#ffffff", "label": "继续游戏", "height": 59, "centerY": 40, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "ShaiZi", "props": { "var": "view_dice", "centerY": -100, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.nqp.game_ui.tongyong.effect.ShaiZiUI" } }, { "type": "Box", "props": { "y": 564, "x": 324, "visible": true, "var": "box_betRate" }, "child": [{ "type": "Image", "props": { "y": 0, "x": -11, "visible": true, "var": "img_betRateX", "skin": "ebgang_ui/game_ui/ebgang/tu_x.png" } }, { "type": "Image", "props": { "y": 0, "x": 12, "var": "img_betRate1", "skin": "ebgang_ui/game_ui/ebgang/bei_1.png" } }, { "type": "Image", "props": { "y": 0, "x": 34, "var": "img_betRate2", "skin": "ebgang_ui/game_ui/ebgang/bei_5.png" } }, { "type": "Image", "props": { "y": 0, "x": 58, "visible": false, "var": "img_betRate3", "skin": "ebgang_ui/game_ui/ebgang/bei_5.png" } }] }] }, { "type": "Box", "props": { "width": 253, "var": "box_cards", "top": 0, "left": 170, "height": 141 }, "child": [{ "type": "Image", "props": { "y": 140, "width": 260, "skin": "ebgang_ui/game_ui/ebgang/tu_kk.png", "sizeGrid": "78,0,24,27", "scaleX": -1, "height": 140, "anchorY": 1, "anchorX": 1 } }, { "type": "Image", "props": { "y": 14, "x": 28, "skin": "ebgang_ui/game_ui/ebgang/tu_tj.png" } }, { "type": "Box", "props": { "y": 104, "x": 48, "var": "box_text_card1" }, "child": [{ "type": "Text", "props": { "x": 168, "wordWrap": true, "width": 18, "var": "text_cards0", "text": "0", "strokeColor": "#7c3600", "stroke": 4, "leading": 6, "height": 24, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Text", "props": { "x": 126, "wordWrap": true, "width": 18, "var": "text_cards1", "text": "0", "strokeColor": "#7c3600", "stroke": 4, "leading": 6, "height": 24, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Text", "props": { "x": 85, "wordWrap": true, "width": 18, "var": "text_cards2", "text": "0", "strokeColor": "#7c3600", "stroke": 4, "leading": 6, "height": 24, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Text", "props": { "x": 42, "wordWrap": true, "width": 18, "var": "text_cards3", "text": "0", "strokeColor": "#7c3600", "stroke": 4, "leading": 6, "height": 24, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Text", "props": { "wordWrap": true, "width": 18, "var": "text_cards4", "text": "0", "strokeColor": "#7c3600", "stroke": 4, "leading": 6, "height": 24, "fontSize": 20, "color": "#ffffff", "align": "center" } }] }, { "type": "Box", "props": { "y": 45, "x": 48, "var": "box_text_card2" }, "child": [{ "type": "Text", "props": { "x": 168, "wordWrap": true, "width": 18, "var": "text_cards5", "text": "0", "strokeColor": "#7c3600", "stroke": 4, "leading": 6, "height": 24, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Text", "props": { "x": 126, "wordWrap": true, "width": 18, "var": "text_cards6", "text": "0", "strokeColor": "#7c3600", "stroke": 4, "leading": 6, "height": 24, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Text", "props": { "x": 85, "wordWrap": true, "width": 18, "var": "text_cards7", "text": "0", "strokeColor": "#7c3600", "stroke": 4, "leading": 6, "height": 24, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Text", "props": { "x": 42, "wordWrap": true, "width": 18, "var": "text_cards8", "text": "0", "strokeColor": "#7c3600", "stroke": 4, "leading": 6, "height": 24, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Text", "props": { "wordWrap": true, "width": 18, "var": "text_cards9", "text": "0", "strokeColor": "#7c3600", "stroke": 4, "leading": 6, "height": 24, "fontSize": 20, "color": "#ffffff", "align": "center" } }] }] }, { "type": "Button", "props": { "var": "btn_cards", "top": 16, "stateNum": 1, "skin": "ebgang_ui/game_ui/ebgang/tu_tj1.png", "left": 90, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "var": "btn_menu", "top": 16, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_cd.png", "left": 10, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "var": "btn_back", "top": 16, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_fh1.png", "right": 10, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "var": "btn_chongzhi", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_chongzhi.png", "right": 10, "bottom": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 0, "x": 10, "width": 180, "var": "img_menu", "skin": "tongyong_ui/game_ui/tongyong/general/cd_1.png", "sizeGrid": "20,20,20,20", "height": 293, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "Image", "props": { "y": 74, "x": 9, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }, { "type": "Image", "props": { "y": 217, "x": 9, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }, { "type": "Button", "props": { "y": 86, "x": 14, "var": "btn_rules", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_gz.png" } }, { "type": "Button", "props": { "y": 16, "x": 14, "var": "btn_cardtype", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_px.png" } }, { "type": "Button", "props": { "y": 227, "x": 14, "var": "btn_set", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_sz.png" } }, { "type": "Button", "props": { "y": 157, "x": 14, "var": "btn_record", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_zj.png" } }, { "type": "Image", "props": { "y": 145, "x": 9, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }] }, { "type": "Button", "props": { "y": 122, "x": 1229, "var": "btn_qifu", "top": 16, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_qf.png", "right": 85, "anchorY": 0.5, "anchorX": 0.5 } }] };
                    return EBGangUI;
                }(View));
                ebgang.EBGangUI = EBGangUI;
            })(ebgang = game_ui.ebgang || (game_ui.ebgang = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var ebgang;
            (function (ebgang) {
                var EBGang_GuiZeUI = /** @class */ (function (_super) {
                    __extends(EBGang_GuiZeUI, _super);
                    function EBGang_GuiZeUI() {
                        return _super.call(this) || this;
                    }
                    EBGang_GuiZeUI.prototype.createChildren = function () {
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.nqp.game_ui.ebgang.EBGang_GuiZeUI.uiView);
                    };
                    EBGang_GuiZeUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 787, "scaleY": 1.25, "scaleX": 1.25, "height": 531, "centerY": 1, "centerX": -5, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "skin": "tongyong_ui/game_ui/tongyong/hud/tu_bk4.png" } }, { "type": "Image", "props": { "y": 0, "x": 785, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_bk4.png", "scaleX": -1 } }, { "type": "Image", "props": { "y": 29, "x": 393, "skin": "tongyong_ui/game_ui/tongyong/general/tu_bkbt.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 37, "x": 394, "skin": "tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Tab", "props": { "y": 66, "x": 15, "width": 756, "var": "btn_tab", "space": 4, "skin": "tongyong_ui/game_ui/tongyong/hud/tab_bq.png", "labels": "玩法介绍,牌型大小,结算计分", "labelSize": 20, "labelColors": "#cacaca,#cacaca,#ffffff", "height": 58 } }, { "type": "Panel", "props": { "y": 130, "x": 20, "width": 750, "var": "panel_rule", "height": 355 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "lab_wanfa", "skin": "ebgang_ui/game_ui/ebgang/guize_1.png" } }] }, { "type": "Panel", "props": { "y": 130, "x": 20, "width": 750, "var": "panel_type", "height": 355 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "lab_type", "skin": "ebgang_ui/game_ui/ebgang/guize_2.png", "height": 695 } }] }, { "type": "Image", "props": { "y": 130, "x": 20, "var": "lab_settle", "skin": "ebgang_ui/game_ui/ebgang/guize_3.png" } }, { "type": "Image", "props": { "y": 130, "x": 20, "var": "lab_daxiao", "skin": "ebgang_ui/game_ui/ebgang/guize_4.png" } }, { "type": "Button", "props": { "y": 38, "x": 743, "var": "btn_close", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/hud/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
                    return EBGang_GuiZeUI;
                }(View));
                ebgang.EBGang_GuiZeUI = EBGang_GuiZeUI;
            })(ebgang = game_ui.ebgang || (game_ui.ebgang = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var ebgang;
            (function (ebgang) {
                var EBGang_HUDUI = /** @class */ (function (_super) {
                    __extends(EBGang_HUDUI, _super);
                    function EBGang_HUDUI() {
                        return _super.call(this) || this;
                    }
                    EBGang_HUDUI.prototype.createChildren = function () {
                        View.regComponent("ui.nqp.game_ui.tongyong.HudUI", ui.nqp.game_ui.tongyong.HudUI);
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.nqp.game_ui.ebgang.EBGang_HUDUI.uiView);
                    };
                    EBGang_HUDUI.uiView = { "type": "View", "props": { "width": 1280, "staticCache": false, "height": 720 }, "child": [{ "type": "Image", "props": { "top": -1, "skin": "ebgang_ui/game_ui/ebgang/zjh.jpg", "right": -1, "left": -1, "bottom": -1 } }, { "type": "Hud", "props": { "y": 0, "x": 0, "var": "view_hud", "top": 0, "runtime": "ui.nqp.game_ui.tongyong.HudUI", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Box", "props": { "width": 1281, "var": "box_right", "height": 465, "centerY": -11, "centerX": 4, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 90, "var": "img_room0", "skin": "ebgang_ui/game_ui/ebgang/difen_05.png", "right": 960 }, "child": [{ "type": "Clip", "props": { "y": 269, "x": 150, "width": 15, "var": "txt_least0", "skin": "tongyong_ui/game_ui/tongyong/dating/clip_dizhu3.png", "height": 20, "clipX": 10 } }, { "type": "Clip", "props": { "y": 236, "x": 149, "var": "txt_difen0", "skin": "tongyong_ui/game_ui/tongyong/dating/clip_dizhu3.png", "clipX": 10 } }] }, { "type": "Image", "props": { "y": 86, "var": "img_room1", "skin": "ebgang_ui/game_ui/ebgang/difen_02.png", "right": 650 }, "child": [{ "type": "Clip", "props": { "y": 272, "x": 151, "width": 15, "var": "txt_least1", "skin": "tongyong_ui/game_ui/tongyong/dating/clip_dizhu2.png", "height": 20, "clipX": 10 } }, { "type": "Clip", "props": { "y": 234, "x": 149, "var": "txt_difen1", "skin": "tongyong_ui/game_ui/tongyong/dating/clip_dizhu2.png", "clipX": 10 } }] }, { "type": "Image", "props": { "y": 83, "var": "img_room2", "skin": "ebgang_ui/game_ui/ebgang/difen_00.png", "right": 340 }, "child": [{ "type": "Clip", "props": { "y": 272, "x": 145, "width": 15, "var": "txt_least2", "skin": "tongyong_ui/game_ui/tongyong/dating/clip_dizhu1.png", "height": 20, "clipX": 10 } }, { "type": "Clip", "props": { "y": 235, "x": 145, "var": "txt_difen2", "skin": "tongyong_ui/game_ui/tongyong/dating/clip_dizhu1.png", "clipX": 10 } }] }, { "type": "Image", "props": { "y": 86, "var": "img_room3", "skin": "ebgang_ui/game_ui/ebgang/difen_01.png", "right": 20 }, "child": [{ "type": "Clip", "props": { "y": 270, "x": 150, "width": 15, "var": "txt_least3", "skin": "tongyong_ui/game_ui/tongyong/dating/clip_dizhu.png", "height": 20, "clipX": 10 } }, { "type": "Clip", "props": { "y": 238, "x": 153, "var": "txt_difen3", "skin": "tongyong_ui/game_ui/tongyong/dating/clip_dizhu.png", "clipX": 10 } }] }] }, { "type": "Image", "props": { "top": 10, "skin": "ebgang_ui/game_ui/ebgang/zjh_title.png", "centerX": 130, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 668, "x": 640, "var": "btn_join", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/dating/btn_ksjr.png", "centerX": 0, "bottom": 10, "anchorY": 0.5, "anchorX": 0.5 } }] };
                    return EBGang_HUDUI;
                }(View));
                ebgang.EBGang_HUDUI = EBGang_HUDUI;
            })(ebgang = game_ui.ebgang || (game_ui.ebgang = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var ebgang;
            (function (ebgang) {
                var GoUI = /** @class */ (function (_super) {
                    __extends(GoUI, _super);
                    function GoUI() {
                        return _super.call(this) || this;
                    }
                    GoUI.prototype.createChildren = function () {
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.nqp.game_ui.ebgang.GoUI.uiView);
                    };
                    GoUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "y": 360, "x": 640, "width": 1280, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 350, "x": 650, "skin": "tongyong_ui/game_ui/tongyong/general/gzyz_0.png", "scaleY": 1, "scaleX": 1, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 7 }, { "type": "Image", "props": { "y": 360, "x": 957.4016, "skin": "tongyong_ui/game_ui/tongyong/general/tu_ks1.png", "centerY": 0, "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 }, "compId": 2 }, { "type": "Image", "props": { "y": 360, "x": 317.5984, "skin": "tongyong_ui/game_ui/tongyong/general/tu_ks0.png", "centerY": 0, "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 }, "compId": 4 }, { "type": "Image", "props": { "y": 360, "x": 637, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_2.png", "centerY": 0, "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0 }, "compId": 3 }, { "type": "Image", "props": { "y": 251, "x": 385, "skin": "tongyong_ui/game_ui/tongyong/general/gzyz_3.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 }, "compId": 9 }, { "type": "Image", "props": { "y": 436, "x": 916, "skin": "tongyong_ui/game_ui/tongyong/general/gzyz_3.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 }, "compId": 10 }] }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "x": [{ "value": 1000, "tweenMethod": "strongInOut", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 740, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 10 }, { "value": 740, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "x", "index": 40 }, { "value": 1000, "tweenMethod": "strongInOut", "tween": true, "target": 2, "label": null, "key": "x", "index": 48 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 40 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "alpha", "index": 48 }] } }, { "target": 4, "keyframes": { "x": [{ "value": 275, "tweenMethod": "strongInOut", "tween": true, "target": 4, "key": "x", "index": 0 }, { "value": 535, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "x", "index": 10 }, { "value": 535, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "x", "index": 40 }, { "value": 275, "tweenMethod": "strongInOut", "tween": true, "target": 4, "label": null, "key": "x", "index": 48 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 40 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "alpha", "index": 48 }] } }, { "target": 3, "keyframes": { "x": [{ "value": 637, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 0 }, { "value": 637, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 40 }, { "value": 637, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 48 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 9 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 13 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 40 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 48 }] } }, { "target": 7, "keyframes": { "visible": [{ "value": true, "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "visible", "index": 0 }, { "value": false, "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "visible", "index": 46 }], "scaleY": [{ "value": 0.1, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleY", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleY", "index": 40 }, { "value": 0.1, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleY", "index": 45 }, { "value": 0.1, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleY", "index": 46 }], "scaleX": [{ "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleX", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleX", "index": 40 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleX", "index": 45 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleX", "index": 46 }] } }, { "target": 9, "keyframes": { "y": [{ "value": 251, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "y", "index": 0 }], "x": [{ "value": 385, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "x", "index": 0 }, { "value": 346, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "x", "index": 4 }, { "value": 346, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "x", "index": 10 }, { "value": 937, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "x", "index": 30 }], "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 9, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 9, "key": "visible", "index": 4 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 4 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 9 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 20 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 30 }] } }, { "target": 10, "keyframes": { "y": [{ "value": 436, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "y", "index": 0 }, { "value": 427, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "y", "index": 4 }, { "value": 427, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "y", "index": 10 }, { "value": 425, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "y", "index": 30 }], "x": [{ "value": 916, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "x", "index": 0 }, { "value": 936, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "x", "index": 4 }, { "value": 936, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "x", "index": 10 }, { "value": 343, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "x", "index": 30 }], "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 10, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 10, "key": "visible", "index": 4 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 4 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 9 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 20 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 30 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
                    return GoUI;
                }(View));
                ebgang.GoUI = GoUI;
            })(ebgang = game_ui.ebgang || (game_ui.ebgang = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var ebgang;
            (function (ebgang) {
                var JieSuanUI = /** @class */ (function (_super) {
                    __extends(JieSuanUI, _super);
                    function JieSuanUI() {
                        return _super.call(this) || this;
                    }
                    JieSuanUI.prototype.createChildren = function () {
                        View.regComponent("ui.nqp.game_ui.tongyong.JieSuanRenderUI", ui.nqp.game_ui.tongyong.JieSuanRenderUI);
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.nqp.game_ui.ebgang.JieSuanUI.uiView);
                    };
                    JieSuanUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Box", "props": { "width": 656, "height": 448, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 117, "x": 326, "skin": "tongyong_ui/game_ui/tongyong/general/tu_gs.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 44 }, { "type": "Image", "props": { "width": 620, "skin": "tongyong_ui/game_ui/tongyong/general/tu_bk1.png", "sizeGrid": "89,49,71,39", "height": 350, "centerY": 33, "centerX": 3, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_sl2.png", "centerY": -187, "centerX": 3, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_js.png", "centerY": -177, "centerX": 3, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 75, "x": 316, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_2.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 386, "x": 334, "wordWrap": true, "width": 495, "var": "lab_xinxi", "text": "50S后开始第00局，本轮共5局", "leading": 6, "height": 23, "fontSize": 20, "color": "#ffff96", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Image", "props": { "y": 146, "x": 28, "width": 599, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_d1.png", "sizeGrid": "0,176,0,164", "height": 38 } }, { "type": "Label", "props": { "y": 168, "x": 145, "wordWrap": true, "width": 63, "text": "昵称", "leading": 6, "height": 23, "fontSize": 18, "color": "#1f2530", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 168, "x": 271, "wordWrap": true, "width": 63, "text": "底分", "leading": 6, "height": 23, "fontSize": 18, "color": "#1f2530", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 168, "x": 398, "wordWrap": true, "width": 63, "text": "倍数", "leading": 6, "height": 23, "fontSize": 18, "color": "#1f2530", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 168, "x": 524, "wordWrap": true, "width": 63, "text": "金币", "leading": 6, "height": 23, "fontSize": 18, "color": "#1f2530", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "List", "props": { "y": 190, "x": 27, "width": 600, "var": "list_settle", "spaceY": 8, "repeatY": 4, "height": 180 }, "child": [{ "type": "JieSuanRender", "props": { "y": 0, "x": 0, "name": "render", "runtime": "ui.nqp.game_ui.tongyong.JieSuanRenderUI" } }] }, { "type": "Button", "props": { "y": 456, "width": 240, "var": "btn_continue", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "sizeGrid": "0,20,0,20", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelPadding": "-6", "labelFont": "Microsoft YaHei", "labelColors": "#ffffff", "label": "继续游戏", "height": 59, "centerX": 3, "anchorY": 0.5, "anchorX": 0.5 } }] }], "animations": [{ "nodes": [{ "target": 44, "keyframes": { "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 44, "key": "rotation", "index": 0 }, { "value": 360, "tweenMethod": "linearNone", "tween": true, "target": 44, "key": "rotation", "index": 100 }] } }], "name": "ani2", "id": 2, "frameRate": 24, "action": 2 }] };
                    return JieSuanUI;
                }(View));
                ebgang.JieSuanUI = JieSuanUI;
            })(ebgang = game_ui.ebgang || (game_ui.ebgang = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI_nqp.max.all.js.map