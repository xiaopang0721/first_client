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
            var doudizhu;
            (function (doudizhu) {
                var component;
                (function (component) {
                    var BaoDanUI = /** @class */ (function (_super) {
                        __extends(BaoDanUI, _super);
                        function BaoDanUI() {
                            return _super.call(this) || this;
                        }
                        BaoDanUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.dzqp.game_ui.doudizhu.component.BaoDanUI.uiView);
                        };
                        BaoDanUI.uiView = { "type": "View", "props": { "width": 80, "height": 80 }, "child": [{ "type": "Image", "props": { "skin": "ddz_ui/game_ui/doudizhu/effect/baodan/baodan0.png", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "skin": [{ "value": "ddz_ui/game_ui/doudizhu/effect/baodan/baodan0.png", "tweenMethod": "linearNone", "tween": false, "target": 2, "key": "skin", "index": 0 }, { "value": "ddz_ui/game_ui/doudizhu/effect/baodan/baodan1.png", "tweenMethod": "linearNone", "tween": false, "target": 2, "key": "skin", "index": 1 }, { "value": "ddz_ui/game_ui/doudizhu/effect/baodan/baodan2.png", "tweenMethod": "linearNone", "tween": false, "target": 2, "key": "skin", "index": 2 }, { "value": "ddz_ui/game_ui/doudizhu/effect/baodan/baodan3.png", "tweenMethod": "linearNone", "tween": false, "target": 2, "key": "skin", "index": 3 }] } }], "name": "ani1", "id": 1, "frameRate": 8, "action": 0 }] };
                        return BaoDanUI;
                    }(View));
                    component.BaoDanUI = BaoDanUI;
                })(component = doudizhu.component || (doudizhu.component = {}));
            })(doudizhu = game_ui.doudizhu || (game_ui.doudizhu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var doudizhu;
            (function (doudizhu) {
                var component;
                (function (component) {
                    var bombUI = /** @class */ (function (_super) {
                        __extends(bombUI, _super);
                        function bombUI() {
                            return _super.call(this) || this;
                        }
                        bombUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.dzqp.game_ui.doudizhu.component.bombUI.uiView);
                        };
                        bombUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Image", "props": { "y": 290, "x": 640, "skin": "ddz_ui/game_ui/doudizhu/effect/boom/img_boom.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 2 }, { "type": "Image", "props": { "y": 290, "x": 640, "skin": "ddz_ui/game_ui/doudizhu/effect/boom/img_boom3.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 3 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "y": [{ "value": -370, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 5 }], "visible": [{ "value": true, "tweenMethod": "linearNone", "tween": false, "target": 2, "key": "visible", "index": 0 }, { "value": false, "tweenMethod": "linearNone", "tween": false, "target": 2, "key": "visible", "index": 6 }], "skin": [{ "value": "ddz_ui/game_ui/doudizhu/effect/boom/img_boom.png", "tweenMethod": "linearNone", "tween": false, "target": 2, "key": "skin", "index": 0 }] } }, { "target": 3, "keyframes": { "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 3, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 3, "key": "visible", "index": 6 }, { "value": false, "tweenMethod": "linearNone", "tween": false, "target": 3, "key": "visible", "index": 13 }], "skin": [{ "value": "ddz_ui/game_ui/doudizhu/effect/boom/img_boom3.png", "tweenMethod": "linearNone", "tween": false, "target": 3, "key": "skin", "index": 0 }, { "value": "ddz_ui/game_ui/doudizhu/effect/boom/img_boom4.png", "tweenMethod": "linearNone", "tween": false, "target": 3, "key": "skin", "index": 7 }, { "value": "ddz_ui/game_ui/doudizhu/effect/boom/img_boom5.png", "tweenMethod": "linearNone", "tween": false, "target": 3, "key": "skin", "index": 8 }, { "value": "ddz_ui/game_ui/doudizhu/effect/boom/img_boom6.png", "tweenMethod": "linearNone", "tween": false, "target": 3, "key": "skin", "index": 9 }, { "value": "ddz_ui/game_ui/doudizhu/effect/boom/img_boom7.png", "tweenMethod": "linearNone", "tween": false, "target": 3, "key": "skin", "index": 10 }, { "value": "ddz_ui/game_ui/doudizhu/effect/boom/img_boom8.png", "tweenMethod": "linearNone", "tween": false, "target": 3, "key": "skin", "index": 11 }, { "value": "ddz_ui/game_ui/doudizhu/effect/boom/img_boom9.png", "tweenMethod": "linearNone", "tween": false, "target": 3, "key": "skin", "index": 12 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
                        return bombUI;
                    }(View));
                    component.bombUI = bombUI;
                })(component = doudizhu.component || (doudizhu.component = {}));
            })(doudizhu = game_ui.doudizhu || (game_ui.doudizhu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var doudizhu;
            (function (doudizhu) {
                var component;
                (function (component) {
                    var ChunTianUI = /** @class */ (function (_super) {
                        __extends(ChunTianUI, _super);
                        function ChunTianUI() {
                            return _super.call(this) || this;
                        }
                        ChunTianUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.dzqp.game_ui.doudizhu.component.ChunTianUI.uiView);
                        };
                        ChunTianUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 751, "height": 423, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 87, "x": 374, "skin": "ddz_ui/game_ui/doudizhu/effect/chuntian/chuntian_3.png", "scaleY": 0.4, "scaleX": 0.4, "rotation": 34, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 15 }, { "type": "Image", "props": { "y": 124, "x": 453, "skin": "ddz_ui/game_ui/doudizhu/effect/chuntian/chuntian_6.png", "scaleY": 0.3, "scaleX": -0.3, "rotation": -273, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 19 }, { "type": "Image", "props": { "y": 195, "x": 255, "skin": "ddz_ui/game_ui/doudizhu/effect/chuntian/chuntian_6.png", "scaleY": 0.4, "scaleX": 0.4, "rotation": -164, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 12 }, { "type": "Image", "props": { "y": 215, "x": 459, "skin": "ddz_ui/game_ui/doudizhu/effect/chuntian/chuntian_6.png", "scaleY": 0.4, "scaleX": -0.4, "rotation": -208, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 13 }, { "type": "Image", "props": { "y": 127, "x": 488, "skin": "ddz_ui/game_ui/doudizhu/effect/chuntian/chuntian_4.png", "scaleY": 0.2, "scaleX": 0.2, "rotation": 0, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 11 }, { "type": "Image", "props": { "y": 121, "x": 260.5, "skin": "ddz_ui/game_ui/doudizhu/effect/chuntian/chuntian_4.png", "scaleY": 0.2, "scaleX": -0.2, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 10 }, { "type": "Image", "props": { "y": 142, "x": 472, "skin": "ddz_ui/game_ui/doudizhu/effect/chuntian/chuntian_3.png", "scaleY": 0.25, "scaleX": 0.25, "rotation": -72, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 9 }, { "type": "Image", "props": { "skin": "ddz_ui/game_ui/doudizhu/effect/chuntian/chuntian_1.png", "scaleY": 0.4, "scaleX": 0.4, "centerY": -76, "centerX": -12, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 2 }, { "type": "Image", "props": { "y": 214, "x": 427, "skin": "ddz_ui/game_ui/doudizhu/effect/chuntian/chuntian_3.png", "scaleY": 0.25, "scaleX": 0.25, "rotation": -5, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 6 }, { "type": "Image", "props": { "y": 185, "x": 452, "skin": "ddz_ui/game_ui/doudizhu/effect/chuntian/chuntian_3.png", "scaleY": 0.25, "scaleX": 0.25, "rotation": -21, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 7 }, { "type": "Image", "props": { "y": 178, "x": 410, "skin": "ddz_ui/game_ui/doudizhu/effect/chuntian/chuntian_3.png", "scaleY": 0.3, "scaleX": 0.3, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 5 }, { "type": "Image", "props": { "y": 177, "x": 269, "skin": "ddz_ui/game_ui/doudizhu/effect/chuntian/chuntian_2.png", "scaleY": 0.25, "scaleX": 0.25, "rotation": -93, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 8 }, { "type": "Image", "props": { "y": 200, "x": 300, "skin": "ddz_ui/game_ui/doudizhu/effect/chuntian/chuntian_3.png", "scaleY": 0.3, "scaleX": 0.3, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 4 }, { "type": "Image", "props": { "y": 209, "x": 369, "skin": "ddz_ui/game_ui/doudizhu/effect/chuntian/chuntian_2.png", "scaleY": 0.4, "scaleX": 0.4, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 3 }, { "type": "Box", "props": { "y": 120, "x": 475, "width": 114, "scaleY": 0.3, "scaleX": 0.3, "rotation": -35, "height": 53, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 18, "child": [{ "type": "Image", "props": { "y": 25, "x": 57, "skin": "ddz_ui/game_ui/doudizhu/effect/chuntian/chuntian_7.png", "anchorY": 0.5, "anchorX": 1 }, "compId": 16 }, { "type": "Image", "props": { "y": 25, "x": 54, "skin": "ddz_ui/game_ui/doudizhu/effect/chuntian/chuntian_7.png", "scaleX": -1, "anchorY": 0.5, "anchorX": 1 }, "compId": 17 }] }] }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "x": [{ "value": 364, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 364, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 60 }], "scaleY": [{ "value": 0.4, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 0.4, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 10 }] } }, { "target": 15, "keyframes": { "y": [{ "value": 87, "tweenMethod": "linearNone", "tween": true, "target": 15, "key": "y", "index": 0 }, { "value": 13, "tweenMethod": "linearNone", "tween": true, "target": 15, "key": "y", "index": 15 }], "x": [{ "value": 374, "tweenMethod": "linearNone", "tween": true, "target": 15, "key": "x", "index": 0 }, { "value": 383, "tweenMethod": "linearNone", "tween": true, "target": 15, "key": "x", "index": 15 }], "scaleY": [{ "value": 0.4, "tweenMethod": "linearNone", "tween": true, "target": 15, "key": "scaleY", "index": 0 }, { "value": 0.2, "tweenMethod": "linearNone", "tween": true, "target": 15, "label": null, "key": "scaleY", "index": 5 }, { "value": 0.9, "tweenMethod": "linearNone", "tween": true, "target": 15, "key": "scaleY", "index": 15 }], "scaleX": [{ "value": 0.4, "tweenMethod": "linearNone", "tween": true, "target": 15, "key": "scaleX", "index": 0 }, { "value": 0.2, "tweenMethod": "linearNone", "tween": true, "target": 15, "label": null, "key": "scaleX", "index": 5 }, { "value": 0.9, "tweenMethod": "linearNone", "tween": true, "target": 15, "key": "scaleX", "index": 15 }] } }, { "target": 10, "keyframes": { "y": [{ "value": 121, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "y", "index": 0 }, { "value": 138, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "y", "index": 2 }, { "value": 145, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "y", "index": 10 }, { "value": 107, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "y", "index": 18 }], "x": [{ "value": 260.5, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "x", "index": 0 }, { "value": 254, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "x", "index": 2 }, { "value": 127, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "x", "index": 10 }, { "value": 72, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "x", "index": 18 }], "scaleY": [{ "value": 0.2, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "scaleY", "index": 0 }, { "value": 0.2, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "scaleY", "index": 2 }, { "value": 0.9, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "scaleY", "index": 18 }], "scaleX": [{ "value": -0.2, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "scaleX", "index": 0 }, { "value": -0.2, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "scaleX", "index": 2 }, { "value": -0.9, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "scaleX", "index": 18 }] } }, { "target": 8, "keyframes": { "y": [{ "value": 177, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "y", "index": 0 }, { "value": 218, "tweenMethod": "linearNone", "tween": true, "target": 8, "label": null, "key": "y", "index": 8 }, { "value": 216, "tweenMethod": "linearNone", "tween": true, "target": 8, "label": null, "key": "y", "index": 18 }], "x": [{ "value": 269, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "x", "index": 0 }, { "value": 151, "tweenMethod": "linearNone", "tween": true, "target": 8, "label": null, "key": "x", "index": 8 }, { "value": 105, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "x", "index": 18 }], "scaleY": [{ "value": 0.25, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleY", "index": 0 }, { "value": 0.15, "tweenMethod": "linearNone", "tween": true, "target": 8, "label": null, "key": "scaleY", "index": 8 }, { "value": 0.6, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleY", "index": 18 }], "scaleX": [{ "value": 0.25, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleX", "index": 0 }, { "value": 0.15, "tweenMethod": "linearNone", "tween": true, "target": 8, "label": null, "key": "scaleX", "index": 8 }, { "value": 0.6, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleX", "index": 18 }] } }, { "target": 12, "keyframes": { "y": [{ "value": 195, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "y", "index": 0 }, { "value": 225, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "y", "index": 10 }, { "value": 241, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "y", "index": 18 }, { "value": 264, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "y", "index": 25 }], "x": [{ "value": 255, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "x", "index": 0 }, { "value": 145, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "x", "index": 10 }, { "value": 105, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "x", "index": 18 }, { "value": 72, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "x", "index": 25 }], "scaleY": [{ "value": 0.4, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "scaleY", "index": 0 }, { "value": 0.3, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "scaleY", "index": 10 }, { "value": 0.6, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "scaleY", "index": 18 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "scaleY", "index": 25 }], "scaleX": [{ "value": 0.4, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "scaleX", "index": 0 }, { "value": 0.3, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "scaleX", "index": 10 }, { "value": 0.6, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "scaleX", "index": 18 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 12, "key": "scaleX", "index": 25 }] } }, { "target": 4, "keyframes": { "y": [{ "value": 200, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 0 }, { "value": 285, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 20 }], "x": [{ "value": 300, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "x", "index": 0 }, { "value": 187, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "x", "index": 20 }], "scaleY": [{ "value": 0.3, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 0 }, { "value": 0.15, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": 0.3, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 0 }, { "value": 0.15, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 20 }] } }, { "target": 3, "keyframes": { "y": [{ "value": 209, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "y", "index": 0 }, { "value": 303, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "y", "index": 17 }], "x": [{ "value": 369, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 0 }, { "value": 376, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 7 }, { "value": 383, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 17 }], "scaleY": [{ "value": 0.4, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleY", "index": 0 }, { "value": 0.3, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleY", "index": 7 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleY", "index": 17 }], "scaleX": [{ "value": 0.4, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleX", "index": 0 }, { "value": 0.3, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleX", "index": 7 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleX", "index": 17 }] } }, { "target": 5, "keyframes": { "y": [{ "value": 178, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "y", "index": 0 }, { "value": 199, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "y", "index": 5 }, { "value": 242, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "y", "index": 15 }], "x": [{ "value": 410, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "x", "index": 0 }, { "value": 432, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "x", "index": 5 }, { "value": 485, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "x", "index": 15 }], "scaleY": [{ "value": 0.3, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 0 }, { "value": 0.25, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 5 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 15 }], "scaleX": [{ "value": 0.3, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 0 }, { "value": 0.25, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 5 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 15 }] } }, { "target": 6, "keyframes": { "y": [{ "value": 214, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "y", "index": 0 }, { "value": 235, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "y", "index": 6 }, { "value": 317, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "y", "index": 17 }], "x": [{ "value": 427, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "x", "index": 0 }, { "value": 465, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "x", "index": 6 }, { "value": 513, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "x", "index": 17 }], "scaleY": [{ "value": 0.25, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "scaleY", "index": 0 }, { "value": 0.2, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "scaleY", "index": 6 }, { "value": 0.7, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "scaleY", "index": 17 }], "scaleX": [{ "value": 0.25, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "scaleX", "index": 0 }, { "value": 0.2, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "scaleX", "index": 6 }, { "value": 0.7, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "scaleX", "index": 17 }] } }, { "target": 7, "keyframes": { "y": [{ "value": 185, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "y", "index": 0 }, { "value": 229, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "y", "index": 8 }, { "value": 241, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "y", "index": 18 }], "x": [{ "value": 452, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 0 }, { "value": 545, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "x", "index": 8 }, { "value": 596, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 18 }], "scaleY": [{ "value": 0.25, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleY", "index": 0 }, { "value": 0.2, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleY", "index": 8 }, { "value": 0.6, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleY", "index": 18 }], "scaleX": [{ "value": 0.25, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleX", "index": 0 }, { "value": 0.2, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleX", "index": 8 }, { "value": 0.6, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleX", "index": 18 }] } }, { "target": 9, "keyframes": { "y": [{ "value": 142, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "y", "index": 0 }, { "value": 166, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "y", "index": 20 }], "x": [{ "value": 472, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "x", "index": 0 }, { "value": 633, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "x", "index": 20 }], "scaleY": [{ "value": 0.25, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "scaleY", "index": 0 }, { "value": 0.2, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "scaleY", "index": 5 }, { "value": 0.6, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": 0.25, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "scaleX", "index": 0 }, { "value": 0.2, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "scaleX", "index": 5 }, { "value": 0.6, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "scaleX", "index": 20 }] } }, { "target": 18, "keyframes": { "y": [{ "value": 120, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "y", "index": 0 }, { "value": 105, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "y", "index": 18 }], "x": [{ "value": 475, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 0 }, { "value": 643, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 18 }], "scaleY": [{ "value": 0.3, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleY", "index": 18 }], "scaleX": [{ "value": 0.3, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleX", "index": 18 }] } }, { "target": 11, "keyframes": { "y": [{ "value": 127, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "y", "index": 0 }, { "value": 142, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "y", "index": 12 }, { "value": 125, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "y", "index": 23 }], "x": [{ "value": 488, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "x", "index": 0 }, { "value": 539, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "x", "index": 12 }, { "value": 670, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "x", "index": 23 }], "scaleY": [{ "value": 0.2, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleY", "index": 0 }, { "value": 0.3, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleY", "index": 12 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleY", "index": 23 }], "scaleX": [{ "value": 0.2, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleX", "index": 0 }, { "value": 0.3, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleX", "index": 12 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleX", "index": 23 }] } }, { "target": 13, "keyframes": { "y": [{ "value": 215, "tweenMethod": "linearNone", "tween": true, "target": 13, "key": "y", "index": 0 }, { "value": 233, "tweenMethod": "linearNone", "tween": true, "target": 13, "key": "y", "index": 10 }, { "value": 233, "tweenMethod": "linearNone", "tween": true, "target": 13, "label": null, "key": "y", "index": 14 }, { "value": 272, "tweenMethod": "linearNone", "tween": true, "target": 13, "key": "y", "index": 15 }, { "value": 321, "tweenMethod": "linearNone", "tween": true, "target": 13, "key": "y", "index": 25 }], "x": [{ "value": 459, "tweenMethod": "linearNone", "tween": true, "target": 13, "key": "x", "index": 0 }, { "value": 557, "tweenMethod": "linearNone", "tween": true, "target": 13, "key": "x", "index": 10 }, { "value": 557, "tweenMethod": "linearNone", "tween": true, "target": 13, "label": null, "key": "x", "index": 14 }, { "value": 515, "tweenMethod": "linearNone", "tween": true, "target": 13, "key": "x", "index": 15 }, { "value": 583, "tweenMethod": "linearNone", "tween": true, "target": 13, "key": "x", "index": 25 }], "scaleY": [{ "value": 0.4, "tweenMethod": "linearNone", "tween": true, "target": 13, "key": "scaleY", "index": 0 }, { "value": 0.3, "tweenMethod": "linearNone", "tween": true, "target": 13, "key": "scaleY", "index": 10 }, { "value": 0.3, "tweenMethod": "linearNone", "tween": true, "target": 13, "label": null, "key": "scaleY", "index": 14 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 13, "key": "scaleY", "index": 25 }], "scaleX": [{ "value": -0.4, "tweenMethod": "linearNone", "tween": true, "target": 13, "key": "scaleX", "index": 0 }, { "value": -0.3, "tweenMethod": "linearNone", "tween": true, "target": 13, "key": "scaleX", "index": 10 }, { "value": -0.3, "tweenMethod": "linearNone", "tween": true, "target": 13, "label": null, "key": "scaleX", "index": 14 }, { "value": -1, "tweenMethod": "linearNone", "tween": true, "target": 13, "key": "scaleX", "index": 25 }] } }, { "target": 19, "keyframes": { "y": [{ "value": 124, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "y", "index": 0 }, { "value": 163, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "y", "index": 10 }, { "value": 121, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "y", "index": 20 }], "x": [{ "value": 453, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "x", "index": 0 }, { "value": 541, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "x", "index": 10 }, { "value": 586, "tweenMethod": "linearNone", "tween": true, "target": 19, "label": null, "key": "x", "index": 20 }], "scaleY": [{ "value": 0.3, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "scaleY", "index": 0 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "scaleY", "index": 10 }, { "value": 0.8, "tweenMethod": "linearNone", "tween": true, "target": 19, "label": null, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": -0.3, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "scaleX", "index": 0 }, { "value": -0.8, "tweenMethod": "linearNone", "tween": true, "target": 19, "key": "scaleX", "index": 10 }, { "value": -0.8, "tweenMethod": "linearNone", "tween": true, "target": 19, "label": null, "key": "scaleX", "index": 20 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }, { "nodes": [{ "target": 16, "keyframes": { "y": [{ "value": 27, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "y", "index": 0 }, { "value": 26, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "y", "index": 2 }, { "value": 27, "tweenMethod": "linearNone", "tween": true, "target": 16, "label": null, "key": "y", "index": 5 }], "x": [{ "value": 64, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "x", "index": 0 }, { "value": 64, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "x", "index": 2 }, { "value": 64, "tweenMethod": "linearNone", "tween": true, "target": 16, "label": null, "key": "x", "index": 5 }], "width": [{ "value": 36, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "width", "index": 0 }, { "value": 52, "tweenMethod": "linearNone", "tween": true, "target": 16, "key": "width", "index": 2 }, { "value": 36, "tweenMethod": "linearNone", "tween": true, "target": 16, "label": null, "key": "width", "index": 5 }] } }, { "target": 17, "keyframes": { "y": [{ "value": 26, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "y", "index": 0 }, { "value": 25, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "y", "index": 2 }, { "value": 26, "tweenMethod": "linearNone", "tween": true, "target": 17, "label": null, "key": "y", "index": 5 }], "x": [{ "value": 61, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "x", "index": 0 }, { "value": 61, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "x", "index": 2 }, { "value": 61, "tweenMethod": "linearNone", "tween": true, "target": 17, "label": null, "key": "x", "index": 5 }], "width": [{ "value": 36, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "width", "index": 0 }, { "value": 52, "tweenMethod": "linearNone", "tween": true, "target": 17, "key": "width", "index": 2 }, { "value": 36, "tweenMethod": "linearNone", "tween": true, "target": 17, "label": null, "key": "width", "index": 5 }] } }], "name": "ani2", "id": 2, "frameRate": 24, "action": 2 }] };
                        return ChunTianUI;
                    }(View));
                    component.ChunTianUI = ChunTianUI;
                })(component = doudizhu.component || (doudizhu.component = {}));
            })(doudizhu = game_ui.doudizhu || (game_ui.doudizhu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var doudizhu;
            (function (doudizhu) {
                var component;
                (function (component) {
                    var feijiUI = /** @class */ (function (_super) {
                        __extends(feijiUI, _super);
                        function feijiUI() {
                            return _super.call(this) || this;
                        }
                        feijiUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.dzqp.game_ui.doudizhu.component.feijiUI.uiView);
                        };
                        feijiUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Image", "props": { "y": 324, "x": 170, "skin": "ddz_ui/game_ui/doudizhu/effect/feiji/img_feiji_1.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "y": [{ "value": 140, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 0 }, { "value": 646, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "y", "index": 30 }], "x": [{ "value": -216, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 1596, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "x", "index": 30 }], "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 1.6, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 30 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 1.6, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 30 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
                        return feijiUI;
                    }(View));
                    component.feijiUI = feijiUI;
                })(component = doudizhu.component || (doudizhu.component = {}));
            })(doudizhu = game_ui.doudizhu || (game_ui.doudizhu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var doudizhu;
            (function (doudizhu) {
                var component;
                (function (component) {
                    var HuoJianUI = /** @class */ (function (_super) {
                        __extends(HuoJianUI, _super);
                        function HuoJianUI() {
                            return _super.call(this) || this;
                        }
                        HuoJianUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.dzqp.game_ui.doudizhu.component.HuoJianUI.uiView);
                        };
                        HuoJianUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Image", "props": { "y": 421, "x": 607, "skin": "ddz_ui/game_ui/doudizhu/effect/huojian/huojianwei-1.png", "anchorY": 0, "anchorX": 0.5 }, "compId": 4 }, { "type": "Box", "props": { "y": 136, "x": 493, "width": 226, "height": 372 }, "compId": 6, "child": [{ "type": "Image", "props": { "y": 398.5, "x": 112, "skin": "ddz_ui/game_ui/doudizhu/effect/huojian/huomiao.png", "rotation": 180, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 5 }, { "type": "Image", "props": { "y": 190.5, "x": 115, "skin": "ddz_ui/game_ui/doudizhu/effect/huojian/huojian.png", "anchorY": 0.5, "anchorX": 0.5 } }] }], "animations": [{ "nodes": [{ "target": 4, "keyframes": { "y": [{ "value": 421, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 0 }, { "value": 431, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 1 }, { "value": 408, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 2 }, { "value": 521, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 3 }, { "value": 521, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "y", "index": 4 }], "x": [{ "value": 607, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "x", "index": 0 }, { "value": 610, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "x", "index": 2 }, { "value": 609, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "x", "index": 3 }, { "value": 609, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "x", "index": 4 }], "visible": [{ "value": true, "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "visible", "index": 0 }, { "value": false, "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "visible", "index": 4 }], "skin": [{ "value": "ddz_ui/game_ui/doudizhu/effect/huojian/huojianwei-1.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 0 }, { "value": "ddz_ui/game_ui/doudizhu/effect/huojian/huojianwei-2.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 1 }, { "value": "ddz_ui/game_ui/doudizhu/effect/huojian/huojianwei-3.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 2 }, { "value": "ddz_ui/game_ui/doudizhu/effect/huojian/huojianwei-4.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 3 }, { "value": "ddz_ui/game_ui/doudizhu/effect/huojian/huojianwei-4.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "label": null, "key": "skin", "index": 4 }], "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 0 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 0 }] } }, { "target": 5, "keyframes": { "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 5, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 5, "key": "visible", "index": 3 }] } }, { "target": 6, "keyframes": { "y": [{ "value": 136, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "y", "index": 0 }, { "value": 66, "tweenMethod": "quadIn", "tween": true, "target": 6, "key": "y", "index": 3 }, { "value": -484, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "y", "index": 30 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
                        return HuoJianUI;
                    }(View));
                    component.HuoJianUI = HuoJianUI;
                })(component = doudizhu.component || (doudizhu.component = {}));
            })(doudizhu = game_ui.doudizhu || (game_ui.doudizhu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var doudizhu;
            (function (doudizhu) {
                var component;
                (function (component) {
                    var menuUI = /** @class */ (function (_super) {
                        __extends(menuUI, _super);
                        function menuUI() {
                            return _super.call(this) || this;
                        }
                        menuUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.dzqp.game_ui.doudizhu.component.menuUI.uiView);
                        };
                        menuUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 180, "skin": "tongyong_ui/game_ui/tongyong/general/cd_1.png", "sizeGrid": "20,20,20,20", "height": 337, "anchorY": 0 }, "child": [{ "type": "Image", "props": { "y": 57, "x": 11, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }, { "type": "Image", "props": { "y": 223, "x": 11, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }, { "type": "Image", "props": { "y": 279, "x": 11, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }, { "type": "Image", "props": { "y": 112, "x": 11, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }, { "type": "Image", "props": { "y": 168, "x": 11, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }, { "type": "Button", "props": { "y": 9, "x": 14, "var": "btn_back", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_fh.png" } }, { "type": "Button", "props": { "y": 118, "x": 14, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_fz.png" } }, { "type": "Button", "props": { "y": 228, "x": 14, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_gz.png" } }, { "type": "Button", "props": { "y": 173, "x": 14, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_px.png" } }, { "type": "Button", "props": { "y": 63, "x": 14, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_zq.png" } }, { "type": "Button", "props": { "y": 282, "x": 14, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_sz.png" } }] }] };
                        return menuUI;
                    }(View));
                    component.menuUI = menuUI;
                })(component = doudizhu.component || (doudizhu.component = {}));
            })(doudizhu = game_ui.doudizhu || (game_ui.doudizhu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var doudizhu;
            (function (doudizhu) {
                var component;
                (function (component) {
                    var shunziUI = /** @class */ (function (_super) {
                        __extends(shunziUI, _super);
                        function shunziUI() {
                            return _super.call(this) || this;
                        }
                        shunziUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.dzqp.game_ui.doudizhu.component.shunziUI.uiView);
                        };
                        shunziUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Image", "props": { "y": 193, "x": 1289, "skin": "ddz_ui/game_ui/doudizhu/effect/shunzi/img_shunzi_2.png" }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "x": [{ "value": 1289, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": -211, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 40 }] } }], "name": "ani1", "id": 2, "frameRate": 24, "action": 0 }] };
                        return shunziUI;
                    }(View));
                    component.shunziUI = shunziUI;
                })(component = doudizhu.component || (doudizhu.component = {}));
            })(doudizhu = game_ui.doudizhu || (game_ui.doudizhu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var doudizhu;
            (function (doudizhu) {
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
                            this.createView(ui.dzqp.game_ui.doudizhu.component.TouXiangUI.uiView);
                        };
                        TouXiangUI.uiView = { "type": "View", "props": { "width": 100, "height": 138 }, "child": [{ "type": "Box", "props": { "y": 1, "x": 1 }, "child": [{ "type": "Image", "props": { "y": -7, "x": -5, "skin": "tongyong_ui/game_ui/tongyong/general/tu_txk1.png" } }, { "type": "Image", "props": { "y": 65, "x": 49, "var": "img_head", "skin": "tongyong_ui/game_ui/tongyong/touxiang/head_0.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 4, "x": -1, "wordWrap": true, "width": 99, "var": "txt_name", "text": "玩家名字", "leading": 6, "height": 17, "fontSize": 16, "color": "#12093d", "align": "center" } }, { "type": "Text", "props": { "y": 109, "x": -7, "wordWrap": true, "width": 110, "var": "txt_money", "text": "000000.00", "leading": 6, "height": 22, "fontSize": 20, "color": "#b18dff", "align": "center" } }, { "type": "Image", "props": { "y": -17, "x": 50, "var": "img_dizhu", "skin": "ddz_ui/game_ui/doudizhu/tu_dizhu.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 27, "x": 13, "visible": false, "var": "img_tuoguan", "skin": "ddz_ui/game_ui/doudizhu/tu_tg0.png" } }, { "type": "Image", "props": { "y": 14, "x": 3, "var": "img_txk", "skin": "tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png", "scaleY": 0.95, "scaleX": 0.95 } }, { "type": "Image", "props": { "y": 21, "x": 69, "visible": false, "var": "img_qifu", "skin": "tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png" } }, { "type": "Image", "props": { "y": 105, "x": 50, "visible": false, "var": "qifu_type", "skin": "tongyong_ui/game_ui/tongyong/qifu/f_cs2.png", "scaleY": 0.5, "scaleX": 0.5, "anchorY": 1, "anchorX": 0.5 } }] }] };
                        return TouXiangUI;
                    }(View));
                    component.TouXiangUI = TouXiangUI;
                })(component = doudizhu.component || (doudizhu.component = {}));
            })(doudizhu = game_ui.doudizhu || (game_ui.doudizhu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var doudizhu;
            (function (doudizhu) {
                var component;
                (function (component) {
                    var WanJia_LUI = /** @class */ (function (_super) {
                        __extends(WanJia_LUI, _super);
                        function WanJia_LUI() {
                            return _super.call(this) || this;
                        }
                        WanJia_LUI.prototype.createChildren = function () {
                            View.regComponent("ui.dzqp.game_ui.doudizhu.component.TouXiangUI", ui.dzqp.game_ui.doudizhu.component.TouXiangUI);
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.dzqp.game_ui.doudizhu.component.WanJia_LUI.uiView);
                        };
                        WanJia_LUI.uiView = { "type": "View", "props": { "width": 370, "height": 180 }, "child": [{ "type": "TouXiang", "props": { "y": 32, "x": 24, "runtime": "ui.dzqp.game_ui.doudizhu.component.TouXiangUI" } }, { "type": "Box", "props": { "y": 96, "x": 143, "width": 53, "height": 73 }, "child": [{ "type": "Image", "props": { "skin": "tongyong_ui/game_ui/tongyong/pai/0.png", "scaleY": 0.5, "scaleX": 0.5 } }, { "type": "Label", "props": { "y": 37, "x": 26, "wordWrap": true, "width": 46, "text": "00", "overflow": "visible", "leading": 6, "height": 42, "fontSize": 36, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] }, { "type": "Box", "props": { "y": 54, "x": 212, "width": 276, "height": 116, "centerX": 165 }, "child": [{ "type": "Image", "props": { "y": 58.400000000000006, "x": 41.60000000000002, "skin": "tongyong_ui/game_ui/tongyong/pai/1.png", "scaleY": 0.8, "scaleX": 0.8, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 58.400000000000006, "x": 72.60000000000002, "skin": "tongyong_ui/game_ui/tongyong/pai/1.png", "scaleY": 0.8, "scaleX": 0.8, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 58.400000000000006, "x": 103.60000000000002, "skin": "tongyong_ui/game_ui/tongyong/pai/1.png", "scaleY": 0.8, "scaleX": 0.8, "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 81, "x": 251, "skin": "ddz_ui/game_ui/doudizhu/tu_buchu.png", "anchorY": 0.5, "anchorX": 0.5 } }] };
                        return WanJia_LUI;
                    }(View));
                    component.WanJia_LUI = WanJia_LUI;
                })(component = doudizhu.component || (doudizhu.component = {}));
            })(doudizhu = game_ui.doudizhu || (game_ui.doudizhu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var doudizhu;
            (function (doudizhu) {
                var component;
                (function (component) {
                    var WanJia_RUI = /** @class */ (function (_super) {
                        __extends(WanJia_RUI, _super);
                        function WanJia_RUI() {
                            return _super.call(this) || this;
                        }
                        WanJia_RUI.prototype.createChildren = function () {
                            View.regComponent("ui.dzqp.game_ui.doudizhu.component.TouXiangUI", ui.dzqp.game_ui.doudizhu.component.TouXiangUI);
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.dzqp.game_ui.doudizhu.component.WanJia_RUI.uiView);
                        };
                        WanJia_RUI.uiView = { "type": "View", "props": { "width": 370, "height": 180 }, "child": [{ "type": "TouXiang", "props": { "y": 31, "x": 250, "runtime": "ui.dzqp.game_ui.doudizhu.component.TouXiangUI" } }, { "type": "Image", "props": { "y": 17, "x": 235, "skin": "ui/game_ui/zhajinhua/tu_xian.png", "pivotY": 0.5, "pivotX": 0.5 } }, { "type": "Box", "props": { "y": 95, "x": 178, "width": 53, "height": 73 }, "child": [{ "type": "Image", "props": { "skin": "tongyong_ui/game_ui/tongyong/pai/0.png", "scaleY": 0.5, "scaleX": 0.5 } }, { "type": "Label", "props": { "y": 37, "x": 26, "wordWrap": true, "width": 46, "text": "00", "overflow": "visible", "leading": 6, "height": 42, "fontSize": 36, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] }, { "type": "Box", "props": { "y": 53, "width": 285, "height": 116, "centerX": -165, "anchorX": 1 }, "child": [{ "type": "Image", "props": { "y": 58.400000000000006, "x": 181.60000000000002, "skin": "tongyong_ui/game_ui/tongyong/pai/1.png", "scaleY": 0.8, "scaleX": 0.8, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 58.400000000000006, "x": 212.60000000000002, "skin": "tongyong_ui/game_ui/tongyong/pai/1.png", "scaleY": 0.8, "scaleX": 0.8, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 58.400000000000006, "x": 243.60000000000002, "skin": "tongyong_ui/game_ui/tongyong/pai/1.png", "scaleY": 0.8, "scaleX": 0.8, "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 79, "x": 125, "skin": "ddz_ui/game_ui/doudizhu/tu_buchu.png", "anchorY": 0.5, "anchorX": 0.5 } }] };
                        return WanJia_RUI;
                    }(View));
                    component.WanJia_RUI = WanJia_RUI;
                })(component = doudizhu.component || (doudizhu.component = {}));
            })(doudizhu = game_ui.doudizhu || (game_ui.doudizhu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var doudizhu;
            (function (doudizhu) {
                var DouDiZhuUI = /** @class */ (function (_super) {
                    __extends(DouDiZhuUI, _super);
                    function DouDiZhuUI() {
                        return _super.call(this) || this;
                    }
                    DouDiZhuUI.prototype.createChildren = function () {
                        View.regComponent("Text", laya.display.Text);
                        View.regComponent("ui.dzqp.game_ui.doudizhu.component.TouXiangUI", ui.dzqp.game_ui.doudizhu.component.TouXiangUI);
                        View.regComponent("ui.dzqp.game_ui.doudizhu.component.BaoDanUI", ui.dzqp.game_ui.doudizhu.component.BaoDanUI);
                        View.regComponent("ui.dzqp.game_ui.tongyong.DaoJiShiUI", ui.dzqp.game_ui.tongyong.DaoJiShiUI);
                        View.regComponent("ui.dzqp.game_ui.doudizhu.component.ChunTianUI", ui.dzqp.game_ui.doudizhu.component.ChunTianUI);
                        View.regComponent("ui.dzqp.game_ui.tongyong.FangKa_GoUI", ui.dzqp.game_ui.tongyong.FangKa_GoUI);
                        View.regComponent("ui.dzqp.game_ui.tongyong.PaiXeiUI", ui.dzqp.game_ui.tongyong.PaiXeiUI);
                        View.regComponent("ui.dzqp.game_ui.tongyong.FaPaiUI", ui.dzqp.game_ui.tongyong.FaPaiUI);
                        View.regComponent("ui.dzqp.game_ui.tongyong.effect.XiPaiUI", ui.dzqp.game_ui.tongyong.effect.XiPaiUI);
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.dzqp.game_ui.doudizhu.DouDiZhuUI.uiView);
                    };
                    DouDiZhuUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "y": 360, "x": 640, "width": 1280, "var": "box_view", "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Text", "props": { "y": 27, "x": 88, "wordWrap": true, "width": 350, "var": "txt_roomno", "text": "牌局号：1532315641561321231313", "leading": 6, "height": 24, "fontSize": 20, "color": "#ffffff" } }, { "type": "Label", "props": { "y": 278, "x": 510, "width": 260, "var": "text_cardroomid", "text": "房间号：", "height": 41, "fontSize": 35, "color": "#ffffff", "align": "left" } }, { "type": "Label", "props": { "y": 57, "x": 88, "width": 268, "var": "text_round", "text": "局数：", "height": 24, "fontSize": 20, "color": "#d4d4d4", "align": "left" } }, { "type": "TouXiang", "props": { "y": 561, "x": 24, "var": "view_player0", "runtime": "ui.dzqp.game_ui.doudizhu.component.TouXiangUI" } }, { "type": "Box", "props": { "y": 196, "x": 985, "var": "box_player1" }, "child": [{ "type": "TouXiang", "props": { "x": 174, "var": "view_player1", "runtime": "ui.dzqp.game_ui.doudizhu.component.TouXiangUI" } }, { "type": "Box", "props": { "y": 63, "x": 103, "width": 53, "var": "box_count1", "height": 73 }, "child": [{ "type": "Image", "props": { "skin": "tongyong_ui/game_ui/tongyong/pai/0.png", "scaleY": 0.5, "scaleX": 0.5 } }, { "type": "Label", "props": { "y": 37, "x": 26, "wordWrap": true, "width": 46, "var": "lab_count1", "text": "00", "overflow": "visible", "leading": 6, "height": 42, "fontSize": 36, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] }, { "type": "Image", "props": { "y": 107, "x": 47, "var": "img_tishi1", "skin": "ddz_ui/game_ui/doudizhu/tu_buchu.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 95, "x": -130, "var": "img_type1", "skin": "ddz_ui/game_ui/doudizhu/px_11.png" } }, { "type": "BaoDan", "props": { "y": 27, "x": 128, "var": "view_baodan1", "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.dzqp.game_ui.doudizhu.component.BaoDanUI" } }] }, { "type": "Box", "props": { "y": 196, "x": 24, "var": "box_player2" }, "child": [{ "type": "TouXiang", "props": { "var": "view_player2", "runtime": "ui.dzqp.game_ui.doudizhu.component.TouXiangUI" } }, { "type": "Box", "props": { "y": 63, "x": 119, "width": 53, "var": "box_count2", "height": 73 }, "child": [{ "type": "Image", "props": { "skin": "tongyong_ui/game_ui/tongyong/pai/0.png", "scaleY": 0.5, "scaleX": 0.5 } }, { "type": "Label", "props": { "y": 37, "x": 26, "wordWrap": true, "width": 46, "var": "lab_count2", "text": "00", "overflow": "visible", "leading": 6, "height": 42, "fontSize": 36, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] }, { "type": "Image", "props": { "y": 107, "x": 228, "var": "img_tishi2", "skin": "ddz_ui/game_ui/doudizhu/tu_buchu.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 96, "x": 181, "var": "img_type2", "skin": "ddz_ui/game_ui/doudizhu/px_10.png" } }, { "type": "BaoDan", "props": { "y": 27, "x": 145, "var": "view_baodan2", "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.dzqp.game_ui.doudizhu.component.BaoDanUI" } }] }, { "type": "Box", "props": { "y": 461, "x": 520, "width": 350, "var": "box_qiang", "height": 60 }, "child": [{ "type": "Button", "props": { "y": 30, "x": 84, "var": "btn_buqiang", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_2.png", "labelStrokeColor": "#7e2314", "labelStroke": 2, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "labelBold": true, "label": "不抢", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 30, "x": 267, "var": "btn_qiang", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_3.png", "labelStrokeColor": "#9d8c27", "labelStroke": 2, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "labelBold": true, "label": "抢地主", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 461, "x": 363, "width": 533, "var": "box_btn", "height": 61 }, "child": [{ "type": "Button", "props": { "y": 30, "x": 84, "var": "btn_tishi", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_5.png", "labelStrokeColor": "#7e2314", "labelStroke": 2, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "labelBold": true, "label": "提示", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 30, "x": 84, "var": "img_tishi", "skin": "tongyong_ui/game_ui/tongyong/general/tu_btnhh.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 30, "x": 267, "var": "btn_pass", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_2.png", "labelStrokeColor": "#7e2314", "labelStroke": 2, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "labelBold": true, "label": "过", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 30, "x": 267, "var": "img_pass", "skin": "tongyong_ui/game_ui/tongyong/general/tu_btnhh.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 30, "x": 449, "var": "btn_chupai", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_3.png", "labelStrokeColor": "#289e3b", "labelStroke": 2, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "labelBold": true, "label": "出牌", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 30, "x": 449, "var": "img_chupai", "skin": "tongyong_ui/game_ui/tongyong/general/tu_btnhh.png", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "DaoJiShi", "props": { "y": 490, "x": 276, "var": "view_time", "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.dzqp.game_ui.tongyong.DaoJiShiUI" } }, { "type": "Image", "props": { "y": 431, "var": "img_tishi0", "skin": "ddz_ui/game_ui/doudizhu/tu_buchu.png", "centerX": -6, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 420, "x": 574, "var": "img_type0", "skin": "ddz_ui/game_ui/doudizhu/px_10.png" } }, { "type": "ChunTian", "props": { "y": 0, "x": 0, "var": "view_chuntian", "runtime": "ui.dzqp.game_ui.doudizhu.component.ChunTianUI" } }, { "type": "FangKa_Go", "props": { "y": 0, "x": 0, "visible": false, "var": "view_cardroom", "runtime": "ui.dzqp.game_ui.tongyong.FangKa_GoUI" } }, { "type": "PaiXei", "props": { "y": 113, "x": 981, "var": "view_paixie", "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.dzqp.game_ui.tongyong.PaiXeiUI" } }, { "type": "FaPai", "props": { "y": 117, "x": 920, "var": "view_fapai", "runtime": "ui.dzqp.game_ui.tongyong.FaPaiUI" } }, { "type": "XiPai", "props": { "y": 310, "x": 640, "var": "view_xipai", "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.dzqp.game_ui.tongyong.effect.XiPaiUI" } }] }, { "type": "Button", "props": { "y": 52, "x": 47, "var": "btn_menu", "top": 16, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_cd.png", "left": 10, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 52, "x": 1234, "var": "btn_back", "top": 16, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_fh1.png", "right": 10, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 0, "x": 10, "width": 180, "var": "img_menu", "top": 0, "skin": "tongyong_ui/game_ui/tongyong/general/cd_1.png", "sizeGrid": "20,20,20,20", "left": 10, "height": 293, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "Image", "props": { "y": 74, "x": 11, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }, { "type": "Image", "props": { "y": 216, "x": 11, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }, { "type": "Image", "props": { "y": 145, "x": 11, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }, { "type": "Button", "props": { "y": 86, "x": 14, "var": "btn_rules", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_gz.png" } }, { "type": "Button", "props": { "y": 16, "x": 14, "var": "btn_cardtype", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_px.png" } }, { "type": "Button", "props": { "y": 227, "x": 14, "var": "btn_set", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_sz.png" } }, { "type": "Button", "props": { "y": 157, "x": 14, "var": "btn_record", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_zj.png" } }] }, { "type": "Button", "props": { "var": "btn_tuoguan", "stateNum": 1, "skin": "ddz_ui/game_ui/doudizhu/btn_tg0.png", "right": 40, "bottom": 40, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 52, "x": 1159, "var": "btn_qifu", "top": 16, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_qf.png", "right": 85, "anchorY": 0.5, "anchorX": 0.5 } }] };
                    return DouDiZhuUI;
                }(View));
                doudizhu.DouDiZhuUI = DouDiZhuUI;
            })(doudizhu = game_ui.doudizhu || (game_ui.doudizhu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var doudizhu;
            (function (doudizhu) {
                var DouDiZhu_GuiZeUI = /** @class */ (function (_super) {
                    __extends(DouDiZhu_GuiZeUI, _super);
                    function DouDiZhu_GuiZeUI() {
                        return _super.call(this) || this;
                    }
                    DouDiZhu_GuiZeUI.prototype.createChildren = function () {
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.dzqp.game_ui.doudizhu.DouDiZhu_GuiZeUI.uiView);
                    };
                    DouDiZhu_GuiZeUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 787, "scaleY": 1.25, "scaleX": 1.25, "height": 531, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 2, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_bk4.png" } }, { "type": "Image", "props": { "y": 0, "x": 784, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_bk4.png", "scaleX": -1 } }, { "type": "Image", "props": { "y": 29, "x": 394, "skin": "tongyong_ui/game_ui/tongyong/general/tu_bkbt.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 37, "x": 394, "skin": "tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 38, "x": 743, "var": "btn_close", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/hud/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Tab", "props": { "y": 66, "x": 15, "width": 756, "var": "btn_tab", "space": 4, "skin": "tongyong_ui/game_ui/tongyong/hud/tab_bq.png", "labels": "玩法介绍,牌型说明,牌型大小,牌型倍数,结算计分", "labelSize": 20, "labelColors": "#cacaca,#cacaca,#ffffff", "height": 58 } }, { "type": "Image", "props": { "y": 140, "x": 20, "var": "img_wanfa", "skin": "ddz_ui/game_ui/doudizhu/guize_1.png" } }, { "type": "Image", "props": { "y": 140, "x": 20, "var": "img_type", "skin": "ddz_ui/game_ui/doudizhu/guize_2.png" } }, { "type": "Image", "props": { "y": 140, "x": 20, "var": "img_daxiao", "skin": "ddz_ui/game_ui/doudizhu/guize_3.png" } }, { "type": "Image", "props": { "y": 140, "x": 20, "var": "img_beishu", "skin": "ddz_ui/game_ui/doudizhu/guize_4.png" } }, { "type": "Image", "props": { "y": 140, "x": 20, "var": "img_point", "skin": "ddz_ui/game_ui/doudizhu/guize_4.png" } }] }] };
                    return DouDiZhu_GuiZeUI;
                }(View));
                doudizhu.DouDiZhu_GuiZeUI = DouDiZhu_GuiZeUI;
            })(doudizhu = game_ui.doudizhu || (game_ui.doudizhu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var doudizhu;
            (function (doudizhu) {
                var DouDiZhu_HUDUI = /** @class */ (function (_super) {
                    __extends(DouDiZhu_HUDUI, _super);
                    function DouDiZhu_HUDUI() {
                        return _super.call(this) || this;
                    }
                    DouDiZhu_HUDUI.prototype.createChildren = function () {
                        View.regComponent("ui.dzqp.game_ui.tongyong.HudUI", ui.dzqp.game_ui.tongyong.HudUI);
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.dzqp.game_ui.doudizhu.DouDiZhu_HUDUI.uiView);
                    };
                    DouDiZhu_HUDUI.uiView = { "type": "View", "props": { "width": 1280, "top": 24, "height": 720, "centerX": 0 }, "child": [{ "type": "Image", "props": { "top": -1, "skin": "ddz_ui/game_ui/doudizhu/zjh.jpg", "right": -1, "left": -1, "bottom": -1 } }, { "type": "Image", "props": { "y": 360, "var": "img_mn", "skin": "ddz_ui/game_ui/doudizhu/zjh_rw.png", "left": -100, "bottom": 0, "anchorY": 0.5 } }, { "type": "Hud", "props": { "var": "view_hud", "top": 0, "runtime": "ui.dzqp.game_ui.tongyong.HudUI", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Box", "props": { "y": 40, "x": 40, "width": 910, "var": "box_normal", "top": 0, "right": 0, "bottom": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Box", "props": { "width": 900, "var": "box_right", "height": 465, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 112, "var": "img_room0", "skin": "tongyong_ui/game_ui/tongyong/hud/difen_00.png", "right": 610, "name": "item0", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 59, "x": 133, "wordWrap": true, "width": 140, "var": "lab_least0", "text": "底分：00", "leading": 6, "height": 31, "fontSize": 24, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 105, "x": 133, "wordWrap": true, "width": 196, "var": "lab_money0", "text": "准入：00", "leading": 6, "height": 31, "fontSize": 26, "color": "#122452", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] }, { "type": "Image", "props": { "y": 352, "var": "img_room1", "skin": "tongyong_ui/game_ui/tongyong/hud/difen_01.png", "right": 610, "name": "item1", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 58, "x": 133, "wordWrap": true, "width": 140, "var": "lab_least1", "text": "底分：00", "leading": 6, "height": 31, "fontSize": 24, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 103, "x": 133, "wordWrap": true, "width": 196, "var": "lab_money1", "text": "准入：00", "leading": 6, "height": 31, "fontSize": 26, "color": "#361147", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] }, { "type": "Image", "props": { "y": 232, "var": "img_room2", "skin": "tongyong_ui/game_ui/tongyong/hud/difen_02.png", "right": 330, "name": "item2", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 150, "x": 145, "skin": "ddz_ui/game_ui/doudizhu/difen_03_1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 298, "x": 135, "wordWrap": true, "width": 140, "var": "lab_least2", "text": "底分：00", "leading": 6, "height": 31, "fontSize": 24, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 343, "x": 135, "wordWrap": true, "width": 196, "var": "lab_money2", "text": "准入：00", "leading": 6, "height": 31, "fontSize": 26, "color": "#0a4121", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] }, { "type": "Image", "props": { "y": 232, "var": "img_room3", "skin": "tongyong_ui/game_ui/tongyong/hud/difen_03.png", "right": 50, "name": "item3", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 131, "x": 135, "skin": "ddz_ui/game_ui/doudizhu/difen_04_1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 343, "x": 137, "wordWrap": true, "width": 196, "var": "lab_money3", "text": "准入：00", "leading": 6, "height": 31, "fontSize": 26, "color": "#5d360d", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 298, "x": 136, "wordWrap": true, "width": 140, "var": "lab_least3", "text": "底分：00", "leading": 6, "height": 31, "fontSize": 24, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] }] }] }, { "type": "Image", "props": { "top": 24, "skin": "ddz_ui/game_ui/doudizhu/ddz_title.png", "scaleY": 1, "scaleX": 1, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 30, "x": 30, "width": 910, "visible": false, "var": "box_roomcard", "top": 0, "right": 0, "mouseThrough": true, "bottom": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Box", "props": { "width": 900, "right": 0, "height": 465, "centerY": 20, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 232, "var": "img_room_create", "skin": "tongyong_ui/game_ui/tongyong/hud/tu_fangka.png", "right": 421, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 14, "x": 43, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_fangka2.png" } }] }, { "type": "Image", "props": { "y": 232, "var": "img_room_join", "skin": "tongyong_ui/game_ui/tongyong/hud/tu_fangka1.png", "right": 72, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 39, "x": 83, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_fangka3.png" } }] }] }] }] };
                    return DouDiZhu_HUDUI;
                }(View));
                doudizhu.DouDiZhu_HUDUI = DouDiZhu_HUDUI;
            })(doudizhu = game_ui.doudizhu || (game_ui.doudizhu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var dzqp;
    (function (dzqp) {
        var game_ui;
        (function (game_ui) {
            var doudizhu;
            (function (doudizhu) {
                var JieSuan_FangKaUI = /** @class */ (function (_super) {
                    __extends(JieSuan_FangKaUI, _super);
                    function JieSuan_FangKaUI() {
                        return _super.call(this) || this;
                    }
                    JieSuan_FangKaUI.prototype.createChildren = function () {
                        View.regComponent("ui.dzqp.game_ui.tongyong.JieSuanRender2UI", ui.dzqp.game_ui.tongyong.JieSuanRender2UI);
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.dzqp.game_ui.doudizhu.JieSuan_FangKaUI.uiView);
                    };
                    JieSuan_FangKaUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Box", "props": { "width": 726, "height": 527, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 154, "x": 359, "skin": "tongyong_ui/game_ui/tongyong/general/tu_gs.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 44 }, { "type": "Image", "props": { "y": 294, "x": 363, "width": 700, "skin": "tongyong_ui/game_ui/tongyong/general/tu_bk1.png", "sizeGrid": "89,49,71,39", "height": 350, "centerY": 30, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 74, "x": 363, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_sl2.png", "centerY": -190, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 84, "x": 363, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_js.png", "centerY": -180, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 112, "x": 349, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_2.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 423, "x": 367, "wordWrap": true, "width": 495, "var": "lab_xinxi", "text": "5S后开始第1局，本轮共5局", "leading": 6, "height": 23, "fontSize": 20, "color": "#ffff96", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Image", "props": { "y": 183, "x": 20, "width": 681, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_d1.png", "sizeGrid": "0,176,0,164", "height": 38 } }, { "type": "Label", "props": { "y": 204, "x": 138, "wordWrap": true, "width": 63, "text": "昵称", "leading": 6, "height": 23, "fontSize": 18, "color": "#1f2530", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 204, "x": 254, "wordWrap": true, "width": 63, "text": "倍数", "leading": 6, "height": 23, "fontSize": 18, "color": "#1f2530", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 204, "x": 365, "wordWrap": true, "width": 82, "text": "剩余牌数", "leading": 6, "height": 23, "fontSize": 18, "color": "#1f2530", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 204, "x": 493, "wordWrap": true, "width": 63, "text": "积分", "leading": 6, "height": 23, "fontSize": 18, "color": "#1f2530", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "List", "props": { "y": 227, "x": 18, "width": 683, "var": "list_settle", "spaceY": 8, "repeatY": 4, "height": 180 }, "child": [{ "type": "JieSuanRender2", "props": { "name": "render", "runtime": "ui.dzqp.game_ui.tongyong.JieSuanRender2UI" } }] }, { "type": "Label", "props": { "y": 204, "x": 610, "wordWrap": true, "width": 84, "text": "累计积分", "leading": 6, "height": 23, "fontSize": 18, "color": "#1f2530", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Button", "props": { "y": 494, "x": 218, "width": 200, "visible": false, "var": "btn_create_room", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_2.png", "sizeGrid": "0,20,0,20", "labelStrokeColor": "#9d4725", "labelStroke": 2, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "labelBold": true, "label": "创建房间", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 494, "x": 508, "width": 200, "visible": false, "var": "btn_back_hud", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_3.png", "sizeGrid": "0,20,0,20", "labelStrokeColor": "#397119", "labelStroke": 2, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "labelBold": true, "label": "返回大厅", "anchorY": 0.5, "anchorX": 0.5 } }] }], "animations": [{ "nodes": [{ "target": 44, "keyframes": { "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 44, "key": "rotation", "index": 0 }, { "value": 360, "tweenMethod": "linearNone", "tween": true, "target": 44, "key": "rotation", "index": 100 }] } }], "name": "ani2", "id": 2, "frameRate": 24, "action": 2 }] };
                    return JieSuan_FangKaUI;
                }(View));
                doudizhu.JieSuan_FangKaUI = JieSuan_FangKaUI;
            })(doudizhu = game_ui.doudizhu || (game_ui.doudizhu = {}));
        })(game_ui = dzqp.game_ui || (dzqp.game_ui = {}));
    })(dzqp = ui.dzqp || (ui.dzqp = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI_dzqp.max.all.js.map