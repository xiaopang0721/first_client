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
    var dazhong;
    (function (dazhong) {
        var dating;
        (function (dating) {
            var Loading_DHUI = /** @class */ (function (_super) {
                __extends(Loading_DHUI, _super);
                function Loading_DHUI() {
                    return _super.call(this) || this;
                }
                Loading_DHUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dazhong.dating.Loading_DHUI.uiView);
                };
                Loading_DHUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "top": -1, "right": -1, "left": -1, "bottom": -1 }, "child": [{ "type": "Image", "props": { "y": 2, "x": 2, "var": "image_Bg", "top": -2, "skin": "ui/loading/tu_bj.jpg", "right": -2, "left": -2, "bottom": -2 } }, { "type": "Box", "props": { "y": -154, "width": 1577, "height": 905, "centerX": 0, "blendMode": "lighter", "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 136.82115020033876, "x": 121.75319111485169, "skin": "ui/loading/tu_gx.png", "rotation": -44, "blendMode": "lighter", "anchorY": 0.07, "anchorX": 0.5 }, "compId": 30 }, { "type": "Image", "props": { "y": 118.82115020033876, "x": 187.7531911148517, "skin": "ui/loading/tu_gx.png", "rotation": -14, "blendMode": "lighter", "anchorY": 0.07, "anchorX": 0.5 }, "compId": 31 }, { "type": "Image", "props": { "y": 135, "x": 1422, "skin": "ui/loading/tu_gx.png", "rotation": 36, "blendMode": "lighter", "anchorY": 0.07, "anchorX": 0.5 }, "compId": 33 }, { "type": "Image", "props": { "y": 110, "x": 1346, "skin": "ui/loading/tu_gx.png", "rotation": 34, "blendMode": "lighter", "anchorY": 0.07, "anchorX": 0.5 }, "compId": 32 }] }, { "type": "Image", "props": { "y": 2, "x": 2, "skin": "ui/logo/logo595.png", "centerY": -40, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 214, "x": 47, "skin": "ui/logo/tu_wz.png" } }] }, { "type": "Label", "props": { "width": 1280, "visible": false, "var": "txt_zhenyan", "text": "抵制不良游戏 拒绝盗版游戏　注意自我保护 谨防受骗上当　适度游戏益脑 沉迷游戏伤身　合理安排时间 享受健康生活", "leading": 8, "height": 38, "fontSize": 20, "color": "#ffffff", "centerX": 0, "bottom": 10, "align": "center" } }, { "type": "Box", "props": { "top": 20, "left": 20 }, "child": [{ "type": "Box", "props": { "y": -1, "x": 170, "var": "box_app", "height": 20 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 103, "width": 50, "var": "txt_appbbh", "underlineColor": "#00ff00", "text": 1.4, "height": 20, "fontSize": 18, "color": "#ffffff", "align": "left" } }, { "type": "Label", "props": { "y": 0, "x": 0, "wordWrap": true, "width": 110, "underlineColor": "#00ff00", "text": "APP版本号:", "height": 20, "fontSize": 18, "color": "#ffffff", "align": "left" } }] }, { "type": "Box", "props": { "y": -1, "x": 0, "var": "box_v", "height": 20 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "wordWrap": true, "width": 80, "underlineColor": "#00ff00", "text": "版本号:", "height": 20, "fontSize": 18, "color": "#ffffff", "align": "left" } }, { "type": "Label", "props": { "y": 0, "x": 66, "width": 80, "var": "txt_bbh", "underlineColor": "#00ff00", "text": "1.4.0.000", "height": 20, "fontSize": 18, "color": "#ffffff", "align": "left" } }] }] }, { "type": "Button", "props": { "var": "btn_kefu", "top": 19, "stateNum": 1, "skin": "ui/loading/btn_kehu.png", "right": 35, "anchorY": 0.5, "anchorX": 0.5 } }] }], "animations": [{ "nodes": [{ "target": 31, "keyframes": { "rotation": [{ "value": -50, "tweenMethod": "linearNone", "tween": true, "target": 31, "key": "rotation", "index": 0 }, { "value": -10, "tweenMethod": "linearNone", "tween": true, "target": 31, "key": "rotation", "index": 40 }, { "value": -50, "tweenMethod": "linearNone", "tween": true, "target": 31, "label": null, "key": "rotation", "index": 80 }] } }, { "target": 30, "keyframes": { "rotation": [{ "value": -42, "tweenMethod": "linearNone", "tween": true, "target": 30, "key": "rotation", "index": 0 }, { "value": -60, "tweenMethod": "linearNone", "tween": true, "target": 30, "key": "rotation", "index": 20 }, { "value": -20, "tweenMethod": "linearNone", "tween": true, "target": 30, "label": null, "key": "rotation", "index": 60 }, { "value": -40, "tweenMethod": "linearNone", "tween": true, "target": 30, "label": null, "key": "rotation", "index": 80 }] } }, { "target": 32, "keyframes": { "rotation": [{ "value": 30, "tweenMethod": "linearNone", "tween": true, "target": 32, "key": "rotation", "index": 0 }, { "value": 50, "tweenMethod": "linearNone", "tween": true, "target": 32, "label": null, "key": "rotation", "index": 20 }, { "value": 10, "tweenMethod": "linearNone", "tween": true, "target": 32, "label": null, "key": "rotation", "index": 60 }, { "value": 29, "tweenMethod": "linearNone", "tween": true, "target": 32, "label": null, "key": "rotation", "index": 80 }] } }, { "target": 33, "keyframes": { "rotation": [{ "value": 40, "tweenMethod": "linearNone", "tween": true, "target": 33, "key": "rotation", "index": 0 }, { "value": 20, "tweenMethod": "linearNone", "tween": true, "target": 33, "label": null, "key": "rotation", "index": 20 }, { "value": 60, "tweenMethod": "linearNone", "tween": true, "target": 33, "label": null, "key": "rotation", "index": 60 }, { "value": 41, "tweenMethod": "linearNone", "tween": true, "target": 33, "label": null, "key": "rotation", "index": 80 }] } }], "name": "ani3", "id": 3, "frameRate": 24, "action": 2 }] };
                return Loading_DHUI;
            }(View));
            dating.Loading_DHUI = Loading_DHUI;
        })(dating = dazhong.dating || (dazhong.dating = {}));
    })(dazhong = ui.dazhong || (ui.dazhong = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI_dazhong.max.all.js.map