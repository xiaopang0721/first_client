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
    var dating;
    (function (dating) {
        var BangDingUI = /** @class */ (function (_super) {
            __extends(BangDingUI, _super);
            function BangDingUI() {
                return _super.call(this) || this;
            }
            BangDingUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.BangDingUI.uiView);
            };
            BangDingUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "y": 360, "x": 640, "width": 1280, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "skin": "dating_ui/bangding/tu_3y.png", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 554, "x": 774, "var": "btn_zhuce", "stateNum": 1, "skin": "dating_ui/bangding/btn_llq.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 236, "x": 1046, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/bangding/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 452, "x": 863, "skin": "dating_ui/bangding/tu_yuan.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 361, "width": 284, "var": "box_clip", "height": 160, "centerX": 22 }, "child": [{ "type": "Clip", "props": { "var": "clip", "skin": "dating_ui/bangding/clip_sz.png", "right": 0, "index": 3, "clipX": 10 } }] }] }] };
            return BangDingUI;
        }(View));
        dating.BangDingUI = BangDingUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var BaoBiaoUI = /** @class */ (function (_super) {
            __extends(BaoBiaoUI, _super);
            function BaoBiaoUI() {
                return _super.call(this) || this;
            }
            BaoBiaoUI.prototype.createChildren = function () {
                View.regComponent("ui.dating.component.BaoBiaoTUI", ui.dating.component.BaoBiaoTUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.BaoBiaoUI.uiView);
            };
            BaoBiaoUI.uiView = { "type": "View", "props": { "width": 1280, "skin": "dating_ui/baobiao/btn_bb5.png", "height": 720 }, "child": [{ "type": "Box", "props": { "width": 1280, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 79, "x": 44, "width": 596, "skin": "dating_ui/tongyong/tu_bk1.png", "sizeGrid": "100,50,100,224", "height": 620 } }, { "type": "Image", "props": { "y": 79, "x": 1233, "width": 596, "skin": "dating_ui/tongyong/tu_bk1.png", "sizeGrid": "100,60,100,60", "scaleX": -1, "height": 620 } }, { "type": "Image", "props": { "y": 117, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 111, "x": 643, "skin": "dating_ui/baobiao/BaoBiao.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 158, "x": 68, "width": 1142, "height": 489 }, "child": [{ "type": "Image", "props": { "y": 34, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11", "right": 0, "left": 0 } }, { "type": "Image", "props": { "y": 17, "x": 76, "skin": "dating_ui/baobiao/bb_xh.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 16, "x": 263, "width": 95, "skin": "dating_ui/baobiao/bb_wzlx.png", "height": 29, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 16, "x": 826, "skin": "dating_ui/baobiao/bb_sz.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 16, "x": 561, "skin": "dating_ui/baobiao/bb_wzsj.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 16, "x": 1025, "skin": "dating_ui/baobiao/bb_wzye.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "List", "props": { "x": 0, "width": 1140, "var": "list_bb", "spaceY": -1, "height": 409, "disabled": false, "centerY": -1, "cacheAsBitmap": true, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "BaoBiaoT", "props": { "y": 0, "x": 0, "renderType": "render", "runtime": "ui.dating.component.BaoBiaoTUI" } }] }, { "type": "Label", "props": { "y": 227, "wordWrap": true, "width": 232, "var": "txt_no", "text": "---暂无数据---", "height": 22, "fontSize": 20, "color": "#efda8b", "centerX": 0, "align": "center" } }, { "type": "Image", "props": { "y": 452, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11", "right": 0, "left": 0 } }] }, { "type": "Button", "props": { "y": 119, "x": 1189, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 386, "x": 76, "width": 176, "var": "box_btn", "height": 267 }, "child": [{ "type": "Button", "props": { "var": "btn_0", "stateNum": 1, "skin": "dating_ui/tongyong/btn_rq.png", "sizeGrid": "0,21,0,19", "labelSize": 20, "labelColors": "#fdffd1" } }, { "type": "Button", "props": { "y": 33, "var": "btn_1", "stateNum": 1, "skin": "dating_ui/tongyong/btn_rq.png", "sizeGrid": "0,21,0,19", "labelSize": 20, "labelColors": "#fdffd1" } }, { "type": "Button", "props": { "y": 66, "var": "btn_2", "stateNum": 1, "skin": "dating_ui/tongyong/btn_rq.png", "sizeGrid": "0,21,0,19", "labelSize": 20, "labelColors": "#fdffd1" } }, { "type": "Button", "props": { "y": 99, "var": "btn_3", "stateNum": 1, "skin": "dating_ui/tongyong/btn_rq.png", "sizeGrid": "0,21,0,19", "labelSize": 20, "labelColors": "#fdffd1" } }, { "type": "Button", "props": { "y": 132, "var": "btn_4", "stateNum": 1, "skin": "dating_ui/tongyong/btn_rq.png", "sizeGrid": "0,21,0,19", "labelSize": 20, "labelColors": "#fdffd1" } }, { "type": "Button", "props": { "y": 165, "var": "btn_5", "stateNum": 1, "skin": "dating_ui/tongyong/btn_rq.png", "sizeGrid": "0,21,0,19", "labelSize": 20, "labelColors": "#fdffd1" } }, { "type": "Button", "props": { "y": 198, "var": "btn_6", "stateNum": 1, "skin": "dating_ui/tongyong/btn_rq.png", "sizeGrid": "0,21,0,19", "labelSize": 20, "labelColors": "#fdffd1" } }] }, { "type": "Button", "props": { "y": 617, "x": 75, "width": 179, "var": "btn_select", "stateNum": 1, "skin": "dating_ui/tongyong/btn_rq.png", "sizeGrid": "0,21,0,19", "labelSize": 20, "labelColors": "#fdffd1", "height": 29 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 150, "skin": "dating_ui/tongyong/tu_jtt.png" } }] }, { "type": "Label", "props": { "y": 623, "x": 983, "wordWrap": true, "width": 215, "var": "txt_total", "height": 22, "fontSize": 20, "color": "#efda8b", "align": "right" } }] }] };
            return BaoBiaoUI;
        }(View));
        dating.BaoBiaoUI = BaoBiaoUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var BaoXianXiangUI = /** @class */ (function (_super) {
            __extends(BaoXianXiangUI, _super);
            function BaoXianXiangUI() {
                return _super.call(this) || this;
            }
            BaoXianXiangUI.prototype.createChildren = function () {
                View.regComponent("ui.dating.component.BaoXianXiangTUI", ui.dating.component.BaoXianXiangTUI);
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.BaoXianXiangUI.uiView);
            };
            BaoXianXiangUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "y": 20, "x": 20, "width": 787, "height": 531, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 1, "skin": "dating_ui/tongyong/tu_bk2.png" } }, { "type": "Image", "props": { "y": 0, "x": 785, "skin": "dating_ui/tongyong/tu_bk1.png", "scaleX": -1 } }, { "type": "Image", "props": { "y": 32, "x": 394, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 37, "x": 394, "skin": "dating_ui/tongyong/tit_access.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Tab", "props": { "y": 72, "x": 14, "var": "btn_tab" }, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "stateNum": 3, "skin": "dating_ui/baoxianxiang/btn_cr.png", "name": "item0" } }, { "type": "Button", "props": { "y": 67, "x": 0, "stateNum": 3, "skin": "dating_ui/baoxianxiang/btn_qc.png", "name": "item1" } }, { "type": "Button", "props": { "y": 133, "x": 0, "stateNum": 3, "skin": "dating_ui/baoxianxiang/btn_cqjl.png", "name": "item2" } }] }, { "type": "Box", "props": { "y": 76, "x": 188, "width": 576, "var": "box_record", "height": 406 }, "child": [{ "type": "List", "props": { "y": 37, "x": 1, "width": 575, "var": "list_record", "spaceY": 1, "repeatY": 9, "height": 328, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "BaoXianXiangT", "props": { "y": 0, "x": 0, "renderType": "render", "runtime": "ui.dating.component.BaoXianXiangTUI" } }] }, { "type": "Image", "props": { "y": 33, "x": 0, "width": 580, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11", "height": 3 } }, { "type": "Image", "props": { "y": 15, "x": 78, "skin": "dating_ui/tongyong/tu_dhwz1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 15, "x": 291, "skin": "dating_ui/tongyong/tu_dhwz0.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 15, "x": 495, "skin": "dating_ui/tongyong/tg_zt.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "width": 232, "var": "txt_no", "text": "---暂无数据---", "height": 22, "fontSize": 20, "color": "#efda8b", "centerY": -1, "centerX": 0, "align": "center" } }] }, { "type": "Box", "props": { "y": 75, "x": 188, "width": 577, "var": "box_bxx", "height": 405 }, "child": [{ "type": "Image", "props": { "width": 576, "skin": "dating_ui/baoxianxiang/tu_toplb4.png", "sizeGrid": "11,12,13,11", "height": 70 }, "child": [{ "type": "Text", "props": { "y": 24, "x": 70, "width": 98, "text": "当前金币", "height": 25, "fontSize": 22, "color": "#c8bc9f", "bold": true, "align": "right" } }, { "type": "Image", "props": { "y": 18, "x": 188, "width": 228, "skin": "dating_ui/tongyong/tu_lbk.png", "sizeGrid": "0,19,0,18", "height": 34 } }, { "type": "Image", "props": { "y": 34, "x": 212, "skin": "dating_ui/tongyong/icon_money.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Clip", "props": { "y": 20, "x": 239, "var": "clip_0", "skin": "dating_ui/tongyong/clip_money1.png", "clipX": 11 } }] }, { "type": "Image", "props": { "y": 73, "width": 576, "skin": "dating_ui/baoxianxiang/tu_toplb4.png", "sizeGrid": "11,12,13,11", "height": 70 }, "child": [{ "type": "Text", "props": { "y": 24, "x": 42, "width": 127, "text": "保险箱余额", "height": 25, "fontSize": 22, "color": "#c8bc9f", "bold": true, "align": "right" } }, { "type": "Image", "props": { "y": 18, "x": 188, "width": 228, "skin": "dating_ui/tongyong/tu_lbk.png", "sizeGrid": "0,19,0,18", "height": 34 } }, { "type": "Image", "props": { "y": 34, "x": 212, "skin": "dating_ui/baoxianxiang/icon_baoxiangui.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Clip", "props": { "y": 21, "x": 240, "var": "clip2", "skin": "dating_ui/tongyong/clip_money1.png", "clipX": 11 } }] }, { "type": "TextInput", "props": { "y": 186, "x": 129, "width": 335, "var": "txt_input", "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25", "restrict": "0-9", "promptColor": "#444444", "prompt": "请输入金币数量", "padding": "-1,0,0,16", "maxChars": 16, "height": 50, "fontSize": 24, "editable": false, "color": "#f8ea5e", "anchorY": 0.5, "anchorX": 0, "align": "left" } }, { "type": "Box", "props": { "y": 219, "x": 3, "var": "box_lixi" }, "child": [{ "type": "TextInput", "props": { "y": 25, "x": 125, "width": 336, "var": "txt_rate_money", "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25", "promptColor": "#444444", "prompt": "明日可产生利息", "padding": "-1,0,0,16", "maxChars": 16, "height": 50, "fontSize": 24, "editable": false, "color": "#f8ea5e", "anchorY": 0.5, "anchorX": 0, "align": "left" } }, { "type": "Text", "props": { "y": 10, "width": 118, "text": "利　息：", "stroke": 1, "height": 30, "fontSize": 24, "color": "#c8bc9f", "bold": true, "align": "right" } }, { "type": "Text", "props": { "y": 165, "x": 184, "width": 384, "text": "今日存入的金额，明日24点时可产生利息", "height": 21, "fontSize": 18, "color": "#c8bc9f", "align": "right" } }] }, { "type": "Button", "props": { "y": 303, "x": 48, "width": 92, "var": "btn1", "stateNum": 1, "skin": "dating_ui/baoxianxiang/btn_jp.png", "labelSize": 24, "labelFont": "SimHei", "labelColors": "#efda8b", "labelBold": true, "label": "1", "height": 48, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 303, "x": 144, "width": 92, "var": "btn2", "stateNum": 1, "skin": "dating_ui/baoxianxiang/btn_jp.png", "labelSize": 24, "labelFont": "SimHei", "labelColors": "#efda8b", "labelBold": true, "label": "2", "height": 48, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 303, "x": 241, "width": 92, "var": "btn3", "stateNum": 1, "skin": "dating_ui/baoxianxiang/btn_jp.png", "labelSize": 24, "labelFont": "SimHei", "labelColors": "#efda8b", "labelBold": true, "label": "3", "height": 48, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 303, "x": 337, "width": 92, "var": "btn4", "stateNum": 1, "skin": "dating_ui/baoxianxiang/btn_jp.png", "labelSize": 24, "labelFont": "SimHei", "labelColors": "#efda8b", "labelBold": true, "label": "4", "height": 48, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 303, "x": 433, "width": 92, "var": "btn5", "stateNum": 1, "skin": "dating_ui/baoxianxiang/btn_jp.png", "labelSize": 24, "labelFont": "SimHei", "labelColors": "#efda8b", "labelBold": true, "label": "5", "height": 48, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 357, "x": 48, "width": 92, "var": "btn6", "stateNum": 1, "skin": "dating_ui/baoxianxiang/btn_jp.png", "labelSize": 24, "labelFont": "SimHei", "labelColors": "#efda8b", "labelBold": true, "label": "6", "height": 48, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 357, "x": 144, "width": 92, "var": "btn7", "stateNum": 1, "skin": "dating_ui/baoxianxiang/btn_jp.png", "labelSize": 24, "labelFont": "SimHei", "labelColors": "#efda8b", "labelBold": true, "label": "7", "height": 48, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 357, "x": 241, "width": 92, "var": "btn8", "stateNum": 1, "skin": "dating_ui/baoxianxiang/btn_jp.png", "labelSize": 24, "labelFont": "SimHei", "labelColors": "#efda8b", "labelBold": true, "label": "8", "height": 48, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 357, "x": 337, "width": 92, "var": "btn9", "stateNum": 1, "skin": "dating_ui/baoxianxiang/btn_jp.png", "labelSize": 24, "labelFont": "SimHei", "labelColors": "#efda8b", "labelBold": true, "label": "9", "height": 48, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 357, "x": 433, "width": 92, "var": "btn0", "stateNum": 1, "skin": "dating_ui/baoxianxiang/btn_jp.png", "labelSize": 24, "labelFont": "SimHei", "labelColors": "#efda8b", "labelBold": true, "label": "0", "height": 48, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 171, "x": 4, "width": 118, "var": "txt_type", "text": "存　入：", "stroke": 1, "height": 30, "fontSize": 24, "color": "#c8bc9f", "bold": true, "align": "right" } }, { "type": "Button", "props": { "y": 188, "x": 519, "width": 129, "var": "btn_all", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb2.png", "sizeGrid": "0,27,0,27", "labelSize": 24, "labelPadding": "-4", "labelFont": "SimHei", "labelColors": "#ffffff", "label": "全部", "height": 72, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 303, "x": 527, "width": 92, "var": "btn_pop", "stateNum": 1, "skin": "dating_ui/baoxianxiang/btn_jp.png", "labelSize": 28, "labelFont": "SimHei", "labelColors": "#efda8b", "labelBold": true, "label": "删除", "height": 48, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 357, "x": 527, "width": 92, "var": "btn_enter", "stateNum": 1, "skin": "dating_ui/baoxianxiang/btn_cr1.png", "labelSize": 24, "labelFont": "SimHei", "labelColors": "#efda8b", "labelBold": true, "height": 48, "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Button", "props": { "y": 38, "x": 743, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return BaoXianXiangUI;
        }(View));
        dating.BaoXianXiangUI = BaoXianXiangUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var ChongZhiUI = /** @class */ (function (_super) {
            __extends(ChongZhiUI, _super);
            function ChongZhiUI() {
                return _super.call(this) || this;
            }
            ChongZhiUI.prototype.createChildren = function () {
                View.regComponent("ui.dating.component.ChongZhiT1UI", ui.dating.component.ChongZhiT1UI);
                View.regComponent("ui.dating.component.VipItemRenderUI", ui.dating.component.VipItemRenderUI);
                View.regComponent("ui.dating.component.VipItemRender1UI", ui.dating.component.VipItemRender1UI);
                View.regComponent("ui.dating.component.TabItemRender2UI", ui.dating.component.TabItemRender2UI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.ChongZhiUI.uiView);
            };
            ChongZhiUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "dating_ui/tongyong/tu_bk222.png", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Box", "props": { "y": 360, "x": 640, "width": 1280, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "dating_ui/tongyong/tu_bj.jpg", "right": -160, "left": 200, "height": 720, "bottom": 0 } }, { "type": "Image", "props": { "top": 0, "skin": "dating_ui/tongyong/tu_bk22.png", "sizeGrid": "0,10,0,630", "right": -160, "left": 639, "bottom": 0 } }, { "type": "Box", "props": { "y": 108, "x": 302, "width": 982, "var": "box_zhuanzhang", "height": 589 }, "child": [{ "type": "Box", "props": { "y": -3, "x": -29, "width": 960, "var": "box_record", "height": 568 }, "child": [{ "type": "Image", "props": { "y": 36, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11", "right": 0, "left": 0 } }, { "type": "List", "props": { "y": 41, "x": 44, "width": 898, "var": "list_record", "spaceY": 2, "repeatX": 1, "height": 508 }, "child": [{ "type": "ChongZhiT1", "props": { "renderType": "render", "runtime": "ui.dating.component.ChongZhiT1UI" } }] }, { "type": "Image", "props": { "y": 20, "x": 122, "skin": "dating_ui/tongyong/tu_dhwz1.png", "scaleY": 1.2, "scaleX": 1.2, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 21, "x": 313, "skin": "dating_ui/chongzhi/tu_czfs.png", "scaleY": 1.2, "scaleX": 1.2, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 20, "x": 579, "skin": "dating_ui/chongzhi/tu_czsj.png", "scaleY": 1.2, "scaleX": 1.2, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 20, "x": 850, "skin": "dating_ui/tongyong/tu_dhwz4.png", "scaleY": 1.2, "scaleX": 1.2, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 284, "wordWrap": true, "width": 246, "var": "txt_no", "text": "---暂无数据---", "height": 40, "fontSize": 30, "color": "#efda8b", "centerX": 0, "align": "center" } }] }, { "type": "Box", "props": { "width": 976, "var": "box_cz", "height": 591 }, "child": [{ "type": "Box", "props": { "width": 936, "var": "box_vip", "height": 546 }, "child": [{ "type": "List", "props": { "y": 0, "x": -10, "width": 964, "var": "list_vip", "spaceY": 20, "spaceX": 33, "selectedIndex": -1, "repeatX": 2, "height": 554 }, "child": [{ "type": "VipItemRender", "props": { "renderType": "render", "runtime": "ui.dating.component.VipItemRenderUI" } }] }] }, { "type": "Box", "props": { "y": 6, "x": 4, "width": 930, "var": "box_qudao", "height": 580 }, "child": [{ "type": "List", "props": { "y": 0, "x": 0, "width": 932, "var": "list_qudao", "spaceY": 20, "spaceX": 4, "selectedIndex": -1, "repeatX": 1, "height": 580 }, "child": [{ "type": "VipItemRender1", "props": { "y": 0, "x": 0, "renderType": "render", "runtime": "ui.dating.component.VipItemRender1UI" } }] }] }] }] }, { "type": "Box", "props": { "y": 110, "x": 278, "visible": false, "var": "box_sm" }, "child": [{ "type": "Box", "props": { "y": -5, "x": 29, "width": 932, "var": "box_sm_type", "height": 560 }, "child": [{ "type": "List", "props": { "y": 0, "x": 0, "width": 958, "var": "list_sm", "spaceY": 20, "spaceX": 4, "selectedIndex": -1, "repeatX": 1, "height": 583 }, "child": [{ "type": "VipItemRender1", "props": { "y": 0, "x": 0, "renderType": "render", "runtime": "ui.dating.component.VipItemRender1UI" } }] }] }, { "type": "Box", "props": { "y": -4, "x": 32, "var": "box_sm_cz" }, "child": [{ "type": "Image", "props": { "x": 472, "width": 485, "skin": "dating_ui/chongzhi/tu_hs1.png", "sizeGrid": "4,4,4,4", "height": 340, "alpha": 0.5 } }, { "type": "Image", "props": { "width": 462, "skin": "dating_ui/chongzhi/tu_hs1.png", "sizeGrid": "4,4,4,4", "height": 340, "alpha": 0.5 } }, { "type": "Image", "props": { "y": 51, "x": 597, "width": 235, "skin": "dating_ui/chongzhi/tu_dhdt1.png", "sizeGrid": "0,12,0,11", "scaleY": -1, "height": 51 } }, { "type": "Image", "props": { "y": 51, "x": 112, "width": 235, "skin": "dating_ui/chongzhi/tu_dhdt1.png", "sizeGrid": "0,12,0,11", "scaleY": -1, "height": 51 } }, { "type": "Label", "props": { "y": 9, "x": 650, "wordWrap": true, "width": 125, "text": "收款信息", "leading": 4, "height": 32, "fontSize": 30, "font": "SimHei", "color": "#170000", "align": "left" } }, { "type": "Label", "props": { "y": 9, "x": 151, "wordWrap": true, "width": 158, "text": "扫描二维码", "leading": 4, "height": 32, "fontSize": 30, "font": "SimHei", "color": "#170000", "align": "left" } }, { "type": "Label", "props": { "y": 184, "x": 890, "wordWrap": true, "width": 31, "text": "元", "leading": 24, "height": 35, "fontSize": 26, "color": "#c8bc9f", "align": "left" } }, { "type": "Label", "props": { "y": 139, "x": 865, "wordWrap": true, "width": 56, "var": "btn_sm_copy1", "text": "复制", "leading": 24, "height": 28, "fontSize": 24, "color": "#c8bc9f", "align": "left" } }, { "type": "Label", "props": { "y": 91, "x": 865, "wordWrap": true, "width": 56, "var": "btn_sm_copy0", "text": "复制", "leading": 24, "height": 28, "fontSize": 24, "color": "#c8bc9f", "align": "left" } }, { "type": "Image", "props": { "y": 139, "x": 227, "width": 170, "var": "img_sm_ewm", "scaleY": 1, "scaleX": 1, "height": 170, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 229, "x": 123, "wordWrap": true, "width": 208, "text": "扫描二维码完成支付", "height": 26, "fontSize": 22, "color": "#c8bc9f", "align": "center" } }, { "type": "Button", "props": { "y": 492, "width": 160, "var": "btn_sm_finish", "stateNum": 1, "skin": "dating_ui/tongyong/btn_lq.png", "sizeGrid": "0,11,0,11", "labelSize": 26, "labelFont": "SimHei", "labelColors": "#380c01", "label": "我已转账", "height": 50, "centerX": 321, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 127, "x": 605 }, "child": [{ "type": "Image", "props": { "y": 49, "x": 1, "width": 320, "skin": "dating_ui/chongzhi/textinput_cz.png", "sizeGrid": "0,12,10,11", "scaleY": -1 } }, { "type": "Image", "props": { "y": 99, "x": 0, "width": 320, "skin": "dating_ui/chongzhi/textinput_cz.png", "sizeGrid": "0,12,10,11", "scaleY": -1 } }] }, { "type": "Label", "props": { "y": 132, "x": 605, "width": 318, "var": "txt_sm1", "valign": "middle", "skin": "dating_ui/chongzhi/textinput_cz.png", "sizeGrid": "4,17,12,12", "prompt": "XXX的店铺", "height": 45, "fontSize": 24, "color": "#ffffff" } }, { "type": "Label", "props": { "y": 83, "x": 605, "width": 318, "var": "txt_sm0", "valign": "middle", "skin": "dating_ui/chongzhi/textinput_cz.png", "sizeGrid": "4,17,12,12", "prompt": "XXX的店铺", "height": 45, "fontSize": 24, "color": "#ffffff" } }, { "type": "TextInput", "props": { "y": 180, "x": 605, "width": 318, "var": "txt_sm2", "valign": "middle", "skin": "dating_ui/chongzhi/textinput_cz.png", "sizeGrid": "4,17,12,12", "restrict": "0-9.", "prompt": "请输入扫码转入金额", "height": 45, "fontSize": 24, "color": "#ffffff" } }, { "type": "TextInput", "props": { "y": 229, "x": 605, "width": 318, "var": "txt_sm3", "valign": "middle", "skin": "dating_ui/chongzhi/textinput_cz.png", "sizeGrid": "4,17,12,12", "restrict": "\\u4e00-\\u9fa5A-Za-z0-9", "prompt": "转出账号名称或订单备注信息", "height": 45, "fontSize": 24, "color": "#ffffff" } }, { "type": "Label", "props": { "y": 89, "x": 474, "wordWrap": true, "width": 141, "text": "个人信息：", "leading": 24, "height": 38, "fontSize": 24, "color": "#c8bc9f", "align": "right" } }, { "type": "Label", "props": { "y": 139, "x": 453, "wordWrap": true, "width": 162, "var": "txt_sm_zh", "text": "支付宝账号：", "leading": 24, "height": 38, "fontSize": 24, "color": "#c8bc9f", "align": "right" } }, { "type": "Label", "props": { "y": 188, "x": 474, "wordWrap": true, "width": 141, "text": "存款金额：", "leading": 24, "height": 38, "fontSize": 24, "color": "#c8bc9f", "align": "right" } }, { "type": "Label", "props": { "y": 238, "x": 474, "wordWrap": true, "width": 141, "text": "存款信息：", "leading": 24, "height": 38, "fontSize": 24, "color": "#c8bc9f", "align": "right" } }, { "type": "Box", "props": { "y": 316, "x": -17, "var": "box_wx" }, "child": [{ "type": "Label", "props": { "y": 33, "x": 22, "wordWrap": true, "width": 469, "text": "第一步：保存付款二维码，微信扫码转账到指定微信账号", "leading": 4, "height": 50, "fontSize": 22, "color": "#ffea00", "align": "left" } }, { "type": "Label", "props": { "y": 99, "x": 22, "wordWrap": true, "width": 469, "text": "如何查询订单号：", "leading": 4, "height": 29, "fontSize": 22, "color": "#7cffff", "align": "left" } }, { "type": "Label", "props": { "y": 128, "x": 22, "wordWrap": true, "width": 469, "text": "进入微信右下角“我”,点击钱包，点击右上角“+”。\\n进入“账单”，点击对应的转账信息即可查询订单号。", "leading": 4, "height": 44, "fontSize": 18, "color": "#7cffff", "align": "left" } }, { "type": "Label", "props": { "y": 1, "x": 25, "wordWrap": true, "width": 469, "text": "注：收款信息仅限本次使用！", "leading": 4, "height": 27, "fontSize": 20, "color": "#00ff47", "align": "left" } }, { "type": "Label", "props": { "y": 32, "x": 497, "wordWrap": true, "width": 469, "text": "第二步：填写转账信息，点击我已转账。", "leading": 4, "height": 28, "fontSize": 22, "color": "#ffea00", "align": "left" } }, { "type": "Label", "props": { "y": 0, "x": 497, "wordWrap": true, "width": 463, "text": "注：以上微信账号限本次存款用，账户不定期更换！", "leading": 4, "height": 27, "fontSize": 20, "color": "#00ff47", "align": "left" } }, { "type": "Label", "props": { "y": 64, "x": 499, "wordWrap": true, "width": 471, "text": "如充值未成功无法支付，请您联系在线客服或微信客服进行咨询！", "leading": 4, "height": 20, "fontSize": 22, "color": "#7cffff", "align": "left" } }, { "type": "Label", "props": { "y": -30, "x": 497, "wordWrap": true, "width": 463, "var": "txt_wxsm4", "leading": 4, "height": 27, "fontSize": 20, "color": "#ffea00", "align": "left" } }] }, { "type": "Box", "props": { "y": 286, "x": 3, "width": 957, "var": "box_zfb", "height": 207 }, "child": [{ "type": "Label", "props": { "y": 62, "x": 0, "wordWrap": true, "width": 469, "text": "第一步：保存付款二维码，支付宝扫码转账到指定支付宝账号", "leading": 4, "height": 50, "fontSize": 22, "color": "#ffea00", "align": "left" } }, { "type": "Label", "props": { "y": 128, "x": 0, "wordWrap": true, "width": 469, "text": "如何查询订单号：", "leading": 4, "height": 29, "fontSize": 22, "color": "#7cffff", "align": "left" } }, { "type": "Label", "props": { "y": 157, "x": 0, "wordWrap": true, "width": 469, "text": "进入支付宝右下角“我”,点击钱包，点击右上角“+”。\\n进入“账单”，点击对应的转账信息即可查询订单号。", "leading": 4, "height": 44, "fontSize": 18, "color": "#7cffff", "align": "left" } }, { "type": "Label", "props": { "y": 30, "x": 3, "wordWrap": true, "width": 469, "text": "注：收款信息仅限本次使用！", "leading": 4, "height": 27, "fontSize": 20, "color": "#00ff47", "align": "left" } }, { "type": "Label", "props": { "y": 62, "x": 477, "wordWrap": true, "width": 469, "text": "第二步：填写转账信息，点击我已转账。", "leading": 4, "height": 28, "fontSize": 22, "color": "#ffea00", "align": "left" } }, { "type": "Label", "props": { "y": 30, "x": 477, "wordWrap": true, "width": 480, "text": "注：以上支付宝账号限本次存款用，账户不定期更换！", "leading": 4, "height": 27, "fontSize": 20, "color": "#00ff47", "align": "left" } }, { "type": "Label", "props": { "y": 94, "x": 479, "wordWrap": true, "width": 471, "text": "如充值未成功无法支付，请您联系在线客服或微信客服进行咨询！", "leading": 4, "height": 20, "fontSize": 16, "color": "#7cffff", "align": "left" } }, { "type": "Label", "props": { "y": 0, "x": 477, "wordWrap": true, "width": 480, "var": "txt_zfbsm4", "leading": 4, "height": 27, "fontSize": 20, "color": "#ffea00", "align": "left" } }] }, { "type": "Box", "props": { "y": 316, "x": -17, "var": "box_ysf" }, "child": [{ "type": "Label", "props": { "y": 33, "x": 22, "wordWrap": true, "width": 469, "text": "第一步：保存付款二维码，云闪付扫码转账到指定云闪付账号", "leading": 4, "height": 50, "fontSize": 22, "color": "#ffea00", "align": "left" } }, { "type": "Label", "props": { "y": 99, "x": 22, "wordWrap": true, "width": 469, "text": "如何查询订单号：", "leading": 4, "height": 29, "fontSize": 22, "color": "#7cffff", "align": "left" } }, { "type": "Label", "props": { "y": 128, "x": 22, "wordWrap": true, "width": 469, "text": "进入云闪付右上角“个人信息”,点击我的订单。\\n点击对应的转账信息即可查询订单号。", "leading": 4, "height": 44, "fontSize": 18, "color": "#7cffff", "align": "left" } }, { "type": "Label", "props": { "y": 1, "x": 25, "wordWrap": true, "width": 469, "text": "注：收款信息仅限本次使用！", "leading": 4, "height": 27, "fontSize": 20, "color": "#00ff47", "align": "left" } }, { "type": "Label", "props": { "y": 32, "x": 497, "wordWrap": true, "width": 469, "text": "第二步：填写转账信息，点击我已转账。", "leading": 4, "height": 28, "fontSize": 22, "color": "#ffea00", "align": "left" } }, { "type": "Label", "props": { "y": 0, "x": 497, "wordWrap": true, "width": 482, "text": "注：以上云闪付账号限本次存款用，账户不定期更换！", "leading": 4, "height": 27, "fontSize": 20, "color": "#00ff47", "align": "left" } }, { "type": "Label", "props": { "y": 64, "x": 499, "wordWrap": true, "width": 471, "text": "如充值未成功无法支付，请您联系在线客服或云闪付客服进行咨询！", "leading": 4, "height": 20, "fontSize": 22, "color": "#7cffff", "align": "left" } }, { "type": "Label", "props": { "y": -30, "x": 497, "wordWrap": true, "width": 463, "var": "txt_ysfsm4", "leading": 4, "height": 27, "fontSize": 20, "color": "#ffea00", "align": "left" } }] }, { "type": "Box", "props": { "y": 261, "x": 53, "width": 353, "height": 53 }, "child": [{ "type": "Button", "props": { "y": 25, "x": 80, "width": 160, "var": "btn_save_ewm", "stateNum": 1, "skin": "dating_ui/tongyong/btn_lq.png", "sizeGrid": "0,11,0,11", "labelSize": 26, "labelFont": "SimHei", "labelColors": "#380c01", "label": "保存二维码", "height": 50, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 25, "x": 268, "width": 160, "var": "btn_open_wx", "stateNum": 1, "skin": "dating_ui/tongyong/btn_lq.png", "sizeGrid": "0,11,0,11", "labelSize": 26, "labelFont": "SimHei", "labelColors": "#380c01", "label": "打开微信", "height": 50, "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Button", "props": { "y": 492, "x": 617, "width": 160, "var": "btn_back_sm", "stateNum": 1, "skin": "dating_ui/tongyong/btn_lq.png", "sizeGrid": "0,11,0,11", "labelSize": 26, "labelFont": "SimHei", "labelColors": "#380c01", "label": "返回上一页", "height": 50, "anchorY": 0.5, "anchorX": 0.5 } }] }] }, { "type": "Box", "props": { "y": 108, "x": 325, "width": 937, "visible": false, "var": "box_yh", "height": 578 }, "child": [{ "type": "Box", "props": { "y": 0, "x": -48, "var": "box_yh_cz" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 26, "width": 459, "skin": "dating_ui/chongzhi/tu_hs1.png", "sizeGrid": "4,4,4,4", "height": 340, "alpha": 0.5 } }, { "type": "Image", "props": { "x": 494, "width": 485, "skin": "dating_ui/chongzhi/tu_hs1.png", "sizeGrid": "4,4,4,4", "height": 340, "alpha": 0.5 } }, { "type": "Label", "props": { "y": 344, "x": 31, "wordWrap": true, "width": 469, "text": "第一步：复制收款银行前往充值", "leading": 4, "height": 25, "fontSize": 22, "color": "#ffea00", "align": "left" } }, { "type": "Label", "props": { "y": 374, "x": 31, "wordWrap": true, "width": 470, "text": "第二步：充值完成，填写您的存款信息。最后提交充值", "leading": 4, "height": 22, "fontSize": 22, "color": "#ffea00", "align": "left" } }, { "type": "Image", "props": { "y": 51, "x": 138, "width": 235, "skin": "dating_ui/chongzhi/tu_dhdt1.png", "sizeGrid": "0,12,0,11", "scaleY": -1, "height": 51 } }, { "type": "Image", "props": { "y": 51, "x": 619, "width": 235, "skin": "dating_ui/chongzhi/tu_dhdt1.png", "sizeGrid": "0,12,0,11", "scaleY": -1, "height": 51 } }, { "type": "Label", "props": { "y": 9, "x": 191, "wordWrap": true, "width": 125, "text": "收款银行", "leading": 4, "height": 32, "fontSize": 30, "font": "SimHei", "color": "#170000", "align": "left" } }, { "type": "Label", "props": { "y": 9, "x": 658, "wordWrap": true, "width": 158, "text": "存款信息", "leading": 4, "height": 32, "fontSize": 30, "font": "SimHei", "color": "#170000", "align": "center" } }, { "type": "Label", "props": { "y": 85, "x": 35, "wordWrap": true, "width": 140, "text": "收款银行： \\n　收款人：\\n收款账号：\\n开户支行：", "leading": 40, "height": 243, "fontSize": 24, "color": "#c8bc9f", "align": "left" } }, { "type": "Label", "props": { "y": 143, "x": 416, "wordWrap": true, "width": 56, "var": "btn_yh_copy1", "text": "复制", "leading": 24, "height": 28, "fontSize": 26, "color": "#c8bc9f", "align": "left" } }, { "type": "Label", "props": { "y": 79, "x": 416, "wordWrap": true, "width": 56, "var": "btn_yh_copy0", "text": "复制", "leading": 24, "height": 28, "fontSize": 26, "color": "#c8bc9f", "align": "left" } }, { "type": "Label", "props": { "y": 241, "x": 504, "wordWrap": true, "width": 466, "text": "提示：以上银行账户不定期更换，每次存款前请依照本页所显示的银行账户入款，如入款至已过期账号，无法查收，本公司恕不负责！", "leading": 6, "height": 87, "fontSize": 23, "color": "#00ff47", "align": "left" } }, { "type": "Button", "props": { "y": 523, "x": 747, "width": 160, "var": "btn_yh_tjcz", "stateNum": 1, "skin": "dating_ui/tongyong/btn_lq.png", "sizeGrid": "0,11,0,11", "labelSize": 26, "labelFont": "SimHei", "labelColors": "#380c01", "label": "提交充值", "height": 50, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 273, "x": 416, "wordWrap": true, "width": 56, "var": "btn_yh_copy3", "text": "复制", "leading": 24, "height": 28, "fontSize": 26, "color": "#c8bc9f", "align": "left" } }, { "type": "Label", "props": { "y": 210, "x": 416, "wordWrap": true, "width": 56, "var": "btn_yh_copy2", "text": "复制", "leading": 24, "height": 28, "fontSize": 26, "color": "#c8bc9f", "align": "left" } }, { "type": "Label", "props": { "y": 82, "x": 513, "wordWrap": true, "width": 143, "text": "存款金额： \\n存款信息：", "leading": 40, "height": 113, "fontSize": 26, "color": "#c8bc9f", "align": "left" } }, { "type": "TextInput", "props": { "y": 70, "x": 637, "width": 318, "var": "ingput_yh0", "valign": "middle", "skin": "dating_ui/chongzhi/textinput_cz.png", "sizeGrid": "4,17,12,12", "restrict": "0-9.", "prompt": "请输入转账转入金额", "height": 45, "fontSize": 24, "color": "#ffffff" } }, { "type": "TextInput", "props": { "y": 134, "x": 637, "width": 318, "var": "ingput_yh1", "valign": "middle", "skin": "dating_ui/chongzhi/textinput_cz.png", "sizeGrid": "4,17,12,12", "restrict": "\\u4e00-\\u9fa5A-Za-z0-9", "prompt": "请输入姓名或者卡号后四位", "height": 45, "fontSize": 24, "color": "#ffffff" } }, { "type": "Label", "props": { "y": 278, "x": 142, "width": 270, "var": "txt_yh3", "valign": "middle", "leading": 24, "height": 24, "fontSize": 20, "color": "#ffffff", "align": "left" } }, { "type": "Label", "props": { "y": 209, "x": 142, "width": 270, "var": "txt_yh2", "valign": "middle", "leading": 24, "height": 28, "fontSize": 20, "color": "#ffffff", "align": "left" } }, { "type": "Label", "props": { "y": 144, "x": 142, "width": 270, "var": "txt_yh1", "valign": "middle", "leading": 24, "height": 28, "fontSize": 20, "color": "#ffffff", "align": "left" } }, { "type": "Label", "props": { "y": 83, "x": 142, "width": 270, "var": "txt_yh0", "valign": "middle", "leading": 24, "height": 28, "fontSize": 20, "color": "#ffffff", "align": "left" } }, { "type": "Box", "props": { "y": 114, "x": 138 }, "child": [{ "type": "Image", "props": { "y": 49, "x": 2, "width": 320, "skin": "dating_ui/chongzhi/textinput_cz.png", "sizeGrid": "0,12,10,11", "scaleY": -1 } }, { "type": "Image", "props": { "y": 113, "x": 1, "width": 320, "skin": "dating_ui/chongzhi/textinput_cz.png", "sizeGrid": "0,12,10,11", "scaleY": -1 } }, { "type": "Image", "props": { "y": 179, "width": 320, "skin": "dating_ui/chongzhi/textinput_cz.png", "sizeGrid": "0,12,10,11", "scaleY": -1, "height": 49 } }, { "type": "Image", "props": { "y": 244, "x": 2, "width": 320, "skin": "dating_ui/chongzhi/textinput_cz.png", "sizeGrid": "0,12,10,11", "scaleY": -1 } }] }, { "type": "Label", "props": { "y": 347, "x": 507, "wordWrap": true, "width": 471, "text": "如充值未成功无法支付，请您联系在线客服或微信客服进行咨询！", "leading": 4, "height": 20, "fontSize": 22, "color": "#7cffff", "align": "left" } }, { "type": "Label", "props": { "y": 401, "x": 505, "wordWrap": true, "width": 470, "var": "txt_yh4", "leading": 4, "height": 22, "fontSize": 22, "color": "#ffea00", "align": "left" } }, { "type": "Button", "props": { "y": 523, "x": 247, "width": 160, "var": "btn_back", "stateNum": 1, "skin": "dating_ui/tongyong/btn_lq.png", "sizeGrid": "0,11,0,11", "labelSize": 26, "labelFont": "SimHei", "labelColors": "#380c01", "label": "返回上一页", "height": 50, "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 0, "x": -24, "width": 932, "var": "box_yh_type", "height": 560 }, "child": [{ "type": "List", "props": { "y": 0, "x": 0, "width": 958, "var": "list_yh", "spaceY": 20, "spaceX": 4, "selectedIndex": -1, "repeatX": 1, "height": 583 }, "child": [{ "type": "VipItemRender1", "props": { "y": 0, "x": 0, "renderType": "render", "runtime": "ui.dating.component.VipItemRender1UI" } }] }] }] }, { "type": "Image", "props": { "x": -150, "width": 790, "top": 0, "skin": "dating_ui/tongyong/tu_bk11.png", "sizeGrid": "0,624,0,7", "mouseThrough": true, "bottom": 0 } }, { "type": "Image", "props": { "y": 59, "x": 139, "skin": "dating_ui/chongzhi/tu_czzx.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "List", "props": { "y": 127, "x": 0, "width": 250, "var": "list_tab", "spaceY": 2, "selectedIndex": 0, "selectEnable": true, "height": 565 }, "child": [{ "type": "TabItemRender2", "props": { "renderType": "render", "runtime": "ui.dating.component.TabItemRender2UI" } }] }, { "type": "Image", "props": { "x": 127, "width": 46, "var": "img_prev", "skin": "dating_ui/tongyong/tu_jt.png", "scaleY": 0.5, "scaleX": -0.5, "rotation": 90, "height": 86, "centerY": -225, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 } }, { "type": "Image", "props": { "x": 125, "width": 46, "var": "img_next", "skin": "dating_ui/tongyong/tu_jt.png", "scaleY": 0.5, "scaleX": 0.5, "rotation": 90, "height": 86, "centerY": 341, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 } }, { "type": "Box", "props": { "y": 26, "x": 460, "width": 230, "height": 46 }, "child": [{ "type": "Image", "props": { "y": 4.5, "x": 16, "width": 153, "skin": "dating_ui/tongyong/tu_k1ss.png", "sizeGrid": "0,17,0,14", "scaleY": 1.4, "scaleX": 1.4, "height": 29, "alpha": 1 } }, { "type": "Clip", "props": { "y": 9.5, "x": 48, "var": "clip_money", "skin": "dating_ui/tongyong/clip_money1.png", "index": 0, "clipX": 11 } }, { "type": "Image", "props": { "y": 21.5, "x": 21, "skin": "dating_ui/tongyong/icon_money1.png", "scaleY": 1.1, "scaleX": 1.1, "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Button", "props": { "y": 46, "x": 1225, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_fanhui.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return ChongZhiUI;
        }(View));
        dating.ChongZhiUI = ChongZhiUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var ChongZhi_1UI = /** @class */ (function (_super) {
            __extends(ChongZhi_1UI, _super);
            function ChongZhi_1UI() {
                return _super.call(this) || this;
            }
            ChongZhi_1UI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                View.regComponent("ui.dating.component.MoneyItemRenderUI", ui.dating.component.MoneyItemRenderUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.ChongZhi_1UI.uiView);
            };
            ChongZhi_1UI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 1280, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 79, "x": 130, "width": 510, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "100,0,150,45", "height": 600 } }, { "type": "Image", "props": { "y": 79, "x": 1145, "width": 510, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "100,0,150,52", "scaleX": -1, "height": 600 } }, { "type": "Image", "props": { "y": 115, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 117, "skin": "dating_ui/chongzhi/tit_qd.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 120, "x": 1101, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 465, "x": 321, "width": 135, "text": "充值金额：", "strokeColor": "#5f4801", "stroke": 4, "height": 31, "fontSize": 26, "color": "#fffbb5", "align": "right" } }, { "type": "TextInput", "props": { "y": 481, "x": 461, "width": 358, "var": "txt_input", "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25", "restrict": "0-9", "promptColor": "#777777", "prompt": "充值金额不低于10元", "padding": "-1,0,0,16", "maxChars": 11, "height": 50, "fontSize": 26, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0, "align": "left" } }, { "type": "List", "props": { "y": 206, "width": 932, "var": "list_money", "spaceY": 5, "spaceX": 50, "selectedIndex": -1, "height": 237, "centerX": 0 }, "child": [{ "type": "MoneyItemRender", "props": { "y": 0, "x": 0, "renderType": "render", "runtime": "ui.dating.component.MoneyItemRenderUI" } }] }, { "type": "Button", "props": { "y": 481, "x": 898, "width": 133, "var": "btn_clear", "stateNum": 1, "skin": "dating_ui/tongyong/btn_qc2.png", "height": 59, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 602, "x": 640, "var": "btn_pay", "stateNum": 1, "skin": "dating_ui/chongzhi/btn_cztj.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 171, "x": 162, "width": 135, "var": "txt_name", "height": 31, "fontSize": 26, "color": "#fffbb5", "align": "left" } }, { "type": "Text", "props": { "y": 516, "x": 468, "width": 339, "var": "txt_xe", "height": 31, "fontSize": 26, "color": "#fffbb5", "align": "center" } }] }] };
            return ChongZhi_1UI;
        }(View));
        dating.ChongZhi_1UI = ChongZhi_1UI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var BaoBiaoTUI = /** @class */ (function (_super) {
                __extends(BaoBiaoTUI, _super);
                function BaoBiaoTUI() {
                    return _super.call(this) || this;
                }
                BaoBiaoTUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.BaoBiaoTUI.uiView);
                };
                BaoBiaoTUI.uiView = { "type": "View", "props": { "width": 1140, "height": 42 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 1142, "height": 42 }, "child": [{ "type": "Image", "props": { "var": "img_bg", "skin": "dating_ui/tongyong/tu_bb1.png", "sizeGrid": "0,200,0,200", "right": 0, "left": 0, "height": 42, "alpha": 0.2 } }, { "type": "Label", "props": { "y": 10, "x": 139, "width": 271, "var": "txt_type", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 10, "x": 427, "width": 263, "var": "txt_time", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 10, "x": 710, "width": 232, "var": "txt_money", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 10, "x": 956, "width": 154, "var": "txt_earn", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 10, "x": 27, "width": 94, "var": "txt_index", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }] }] };
                return BaoBiaoTUI;
            }(View));
            component.BaoBiaoTUI = BaoBiaoTUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var BaoXianXiangTUI = /** @class */ (function (_super) {
                __extends(BaoXianXiangTUI, _super);
                function BaoXianXiangTUI() {
                    return _super.call(this) || this;
                }
                BaoXianXiangTUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.BaoXianXiangTUI.uiView);
                };
                BaoXianXiangTUI.uiView = { "type": "View", "props": { "width": 575, "height": 40 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 575, "height": 40 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 575, "var": "img_bg", "skin": "dating_ui/tongyong/tu_bb2.png", "sizeGrid": "0,7,0,6", "height": 40 } }, { "type": "Label", "props": { "y": 9, "x": 173, "width": 240, "var": "txt_time", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 19, "width": 121, "var": "txt_money", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 443, "width": 104, "var": "txt_zt", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }] }] };
                return BaoXianXiangTUI;
            }(View));
            component.BaoXianXiangTUI = BaoXianXiangTUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var ChongZhiTUI = /** @class */ (function (_super) {
                __extends(ChongZhiTUI, _super);
                function ChongZhiTUI() {
                    return _super.call(this) || this;
                }
                ChongZhiTUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.ChongZhiTUI.uiView);
                };
                ChongZhiTUI.uiView = { "type": "View", "props": { "width": 630, "height": 39 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 634, "height": 39 }, "child": [{ "type": "Image", "props": { "y": 0, "var": "img_bg", "skin": "dating_ui/tongyong/tu_bb1.png", "sizeGrid": "0,7,0,6", "right": 0, "left": 0, "height": 42, "alpha": 0.2 } }, { "type": "Label", "props": { "y": 9, "x": 14, "wordWrap": true, "width": 105, "var": "txt_money", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 263, "wordWrap": true, "width": 239, "var": "txt_time", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 134, "wordWrap": true, "width": 113, "var": "txt_type", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 516, "wordWrap": true, "width": 99, "var": "txt_zt", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }] }] };
                return ChongZhiTUI;
            }(View));
            component.ChongZhiTUI = ChongZhiTUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var ChongZhiT1UI = /** @class */ (function (_super) {
                __extends(ChongZhiT1UI, _super);
                function ChongZhiT1UI() {
                    return _super.call(this) || this;
                }
                ChongZhiT1UI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.ChongZhiT1UI.uiView);
                };
                ChongZhiT1UI.uiView = { "type": "View", "props": { "width": 892, "height": 46 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 892, "height": 46 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 892, "var": "img_bg", "skin": "dating_ui/tongyong/tu_bb1.png", "sizeGrid": "0,7,0,6", "height": 46, "alpha": 0.2 } }, { "type": "Label", "props": { "y": 8, "x": 26, "width": 105, "var": "txt_money", "height": 30, "fontSize": 26, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 8, "x": 403, "width": 275, "var": "txt_time", "height": 30, "fontSize": 26, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 8, "x": 204, "width": 130, "var": "txt_type", "height": 30, "fontSize": 26, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 8, "x": 746, "width": 120, "var": "txt_zt", "height": 30, "fontSize": 30, "color": "#cfc9b1", "align": "center" } }] }] };
                return ChongZhiT1UI;
            }(View));
            component.ChongZhiT1UI = ChongZhiT1UI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var ChongZhi_TUI = /** @class */ (function (_super) {
                __extends(ChongZhi_TUI, _super);
                function ChongZhi_TUI() {
                    return _super.call(this) || this;
                }
                ChongZhi_TUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.ChongZhi_TUI.uiView);
                };
                ChongZhi_TUI.uiView = { "type": "View", "props": { "width": 283, "height": 25 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "width": 128, "var": "txt_name", "text": "那边那个用户", "height": 25, "fontSize": 20, "font": "黑体", "color": "#efda8b" } }, { "type": "Label", "props": { "y": 0, "x": 135, "width": 66, "text": "充值了", "height": 25, "fontSize": 20, "font": "黑体", "color": "#c8bc9f" } }, { "type": "Label", "props": { "y": 0, "x": 197, "width": 86, "var": "txt_money", "text": " 10000元", "height": 25, "fontSize": 20, "font": "黑体", "color": "#00ff47" } }] };
                return ChongZhi_TUI;
            }(View));
            component.ChongZhi_TUI = ChongZhi_TUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var FanYongTUI = /** @class */ (function (_super) {
                __extends(FanYongTUI, _super);
                function FanYongTUI() {
                    return _super.call(this) || this;
                }
                FanYongTUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.FanYongTUI.uiView);
                };
                FanYongTUI.uiView = { "type": "View", "props": { "width": 740, "height": 39 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 740, "height": 39 }, "child": [{ "type": "Image", "props": { "y": 0, "width": 738, "var": "img_bg", "skin": "dating_ui/tongyong/tu_bb1.png", "sizeGrid": "0,7,0,6", "left": 0, "height": 39, "alpha": 0.2 } }, { "type": "Label", "props": { "y": 9, "x": 19, "wordWrap": true, "width": 190, "var": "txt_time", "height": 22, "fontSize": 20, "color": "#696291", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 273, "wordWrap": true, "width": 195, "var": "txt_money", "height": 22, "fontSize": 20, "color": "#696291", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 523, "wordWrap": true, "width": 178, "var": "txt_zt", "height": 22, "fontSize": 20, "color": "#ff0000", "align": "center" } }] }] };
                return FanYongTUI;
            }(View));
            component.FanYongTUI = FanYongTUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var FenXiangTUI = /** @class */ (function (_super) {
                __extends(FenXiangTUI, _super);
                function FenXiangTUI() {
                    return _super.call(this) || this;
                }
                FenXiangTUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.FenXiangTUI.uiView);
                };
                FenXiangTUI.uiView = { "type": "View", "props": { "width": 579, "height": 38 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 579, "height": 38 }, "child": [{ "type": "Image", "props": { "y": 0, "width": 579, "var": "img_bg", "skin": "dating_ui/tongyong/tu_bb1.png", "sizeGrid": "0,5,0,4", "right": 0, "left": 0, "height": 38, "alpha": 0.2 } }, { "type": "Label", "props": { "y": 9, "x": 194, "width": 142, "var": "txt_money", "height": 22, "fontSize": 20, "color": "#696291", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 41, "width": 94, "var": "txt_nickname", "height": 22, "fontSize": 20, "color": "#008aff", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 370, "width": 190, "var": "txt_time", "height": 22, "fontSize": 20, "color": "#696291", "align": "center" } }, { "type": "Image", "props": { "y": 20, "x": 204, "visible": false, "var": "img_lock", "skin": "dating_ui/fenxiang/tu_suo.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
                return FenXiangTUI;
            }(View));
            component.FenXiangTUI = FenXiangTUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var FenXiangT1UI = /** @class */ (function (_super) {
                __extends(FenXiangT1UI, _super);
                function FenXiangT1UI() {
                    return _super.call(this) || this;
                }
                FenXiangT1UI.prototype.createChildren = function () {
                    View.regComponent("ui.dating.component.FenXiangT2UI", ui.dating.component.FenXiangT2UI);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.FenXiangT1UI.uiView);
                };
                FenXiangT1UI.uiView = { "type": "View", "props": { "width": 578, "height": 38 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 578, "height": 38 }, "child": [{ "type": "Image", "props": { "y": -1, "width": 579, "var": "img_bg", "skin": "dating_ui/tongyong/tu_dhdt3.png", "sizeGrid": "10,10,14,9", "right": 0, "left": 0, "height": 40 } }, { "type": "Label", "props": { "y": 9, "x": 304, "wordWrap": true, "width": 121, "var": "txt_money", "height": 22, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 20, "wordWrap": true, "width": 190, "var": "txt_time", "height": 22, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Clip", "props": { "y": 9, "x": 542, "skin": "dating_ui/fenxiang/clip_xl.png", "scaleY": 0.75, "scaleX": 0.75, "clipY": 2, "alpha": 0.5 } }] }, { "type": "Box", "props": { "y": 38, "x": 0, "width": 578, "height": 38 }, "child": [{ "type": "Box", "props": { "y": 7, "x": 3 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 38, "wordWrap": true, "width": 77, "text": "用户", "height": 22, "fontSize": 20, "color": "#696291", "align": "center" } }, { "type": "Label", "props": { "y": 0, "x": 165, "wordWrap": true, "width": 77, "text": "业绩", "height": 22, "fontSize": 20, "color": "#696291", "align": "center" } }, { "type": "Label", "props": { "y": 0, "x": 290, "wordWrap": true, "width": 94, "text": "全得佣金", "height": 22, "fontSize": 20, "color": "#696291", "align": "center" } }, { "type": "Label", "props": { "y": 0, "x": 442, "wordWrap": true, "width": 106, "text": "自得佣金", "height": 22, "fontSize": 20, "color": "#696291", "align": "center" } }, { "type": "Image", "props": { "y": 27, "width": 574, "skin": "dating_ui/fenxiang/tu_xx.png" } }] }, { "type": "List", "props": { "y": 37, "x": 0, "width": 579, "height": 44 }, "child": [{ "type": "FenXiangT2", "props": { "renderType": "render", "runtime": "ui.dating.component.FenXiangT2UI" } }] }] }] };
                return FenXiangT1UI;
            }(View));
            component.FenXiangT1UI = FenXiangT1UI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var FenXiangT2UI = /** @class */ (function (_super) {
                __extends(FenXiangT2UI, _super);
                function FenXiangT2UI() {
                    return _super.call(this) || this;
                }
                FenXiangT2UI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.FenXiangT2UI.uiView);
                };
                FenXiangT2UI.uiView = { "type": "View", "props": { "width": 579, "height": 38 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 579, "height": 38 }, "child": [{ "type": "Image", "props": { "y": 36, "width": 576, "var": "img_bg", "skin": "dating_ui/fenxiang/tu_xx.png", "sizeGrid": "0,5,0,4", "left": 1, "height": 2 } }, { "type": "Label", "props": { "y": 9, "x": 14, "wordWrap": true, "width": 130, "var": "txt_money", "height": 22, "fontSize": 20, "color": "#696291", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 159, "wordWrap": true, "width": 100, "var": "txt_type", "height": 22, "fontSize": 20, "color": "#008aff", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 437, "wordWrap": true, "width": 127, "var": "txt_time", "height": 22, "fontSize": 20, "color": "#696291", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 273, "wordWrap": true, "width": 142, "height": 22, "fontSize": 20, "color": "#696291", "align": "center" } }, { "type": "Image", "props": { "y": 18, "x": 55, "skin": "dating_ui/tongyong/tu_top1.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
                return FenXiangT2UI;
            }(View));
            component.FenXiangT2UI = FenXiangT2UI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var FenXiangT3UI = /** @class */ (function (_super) {
                __extends(FenXiangT3UI, _super);
                function FenXiangT3UI() {
                    return _super.call(this) || this;
                }
                FenXiangT3UI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.FenXiangT3UI.uiView);
                };
                FenXiangT3UI.uiView = { "type": "View", "props": { "width": 579, "height": 38 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 579, "height": 38 }, "child": [{ "type": "Image", "props": { "y": 0, "width": 579, "var": "img_bg", "skin": "dating_ui/tongyong/tu_bb1.png", "sizeGrid": "0,5,0,4", "right": 0, "left": 0, "height": 38, "alpha": 0.2 } }, { "type": "Label", "props": { "y": 9, "x": 14, "width": 105, "var": "txt_money", "height": 22, "fontSize": 20, "color": "#696291", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 133, "width": 104, "var": "txt_type", "height": 22, "fontSize": 20, "color": "#008aff", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 370, "width": 190, "var": "txt_time", "height": 22, "fontSize": 20, "color": "#696291", "align": "center" } }, { "type": "Image", "props": { "y": 20, "x": 24, "visible": false, "skin": "dating_ui/fenxiang/tu_suo.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 9, "x": 252, "width": 107, "var": "txt_from_nickname", "height": 22, "fontSize": 20, "color": "#008aff", "align": "center" } }] }] };
                return FenXiangT3UI;
            }(View));
            component.FenXiangT3UI = FenXiangT3UI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var FenXiangT4UI = /** @class */ (function (_super) {
                __extends(FenXiangT4UI, _super);
                function FenXiangT4UI() {
                    return _super.call(this) || this;
                }
                FenXiangT4UI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.FenXiangT4UI.uiView);
                };
                FenXiangT4UI.uiView = { "type": "View", "props": { "width": 579, "height": 38 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 579, "height": 38 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 579, "var": "img_bg", "skin": "dating_ui/tongyong/tu_bb1.png", "sizeGrid": "0,5,0,4", "height": 38, "alpha": 0.2 } }, { "type": "Label", "props": { "y": 8, "x": 14, "width": 130, "var": "txt_nickname", "height": 22, "fontSize": 16, "color": "#696291", "align": "center" } }, { "type": "Label", "props": { "y": 8, "x": 161, "width": 100, "var": "txt_bet", "height": 22, "fontSize": 20, "color": "#008aff", "align": "center" } }, { "type": "Label", "props": { "y": 8, "x": 437, "width": 127, "var": "txt_selffy", "height": 22, "fontSize": 20, "color": "#696291", "align": "center" } }, { "type": "Label", "props": { "y": 8, "x": 278, "width": 142, "var": "txt_allfy", "height": 22, "fontSize": 20, "color": "#696291", "align": "center" } }] }] };
                return FenXiangT4UI;
            }(View));
            component.FenXiangT4UI = FenXiangT4UI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var FenXiangT5UI = /** @class */ (function (_super) {
                __extends(FenXiangT5UI, _super);
                function FenXiangT5UI() {
                    return _super.call(this) || this;
                }
                FenXiangT5UI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.FenXiangT5UI.uiView);
                };
                FenXiangT5UI.uiView = { "type": "View", "props": { "width": 706, "height": 40 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 706, "height": 40 }, "child": [{ "type": "Image", "props": { "y": 1, "width": 579, "var": "img_bg", "skin": "dating_ui/tongyong/tu_bb1.png", "sizeGrid": "0,5,0,4", "right": 0, "left": 0, "height": 38, "alpha": 0.2 } }, { "type": "Label", "props": { "y": 9, "x": 14, "width": 105, "var": "txt_money", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 133, "width": 165, "var": "txt_type", "height": 22, "fontSize": 20, "color": "#008aff", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 500, "width": 190, "var": "txt_time", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Image", "props": { "y": 20, "x": 24, "visible": false, "skin": "dating_ui/fenxiang/tu_suo.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 9, "x": 315, "width": 165, "var": "txt_from_nickname", "height": 22, "fontSize": 20, "color": "#008aff", "align": "center" } }] }] };
                return FenXiangT5UI;
            }(View));
            component.FenXiangT5UI = FenXiangT5UI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var FenXiangT6UI = /** @class */ (function (_super) {
                __extends(FenXiangT6UI, _super);
                function FenXiangT6UI() {
                    return _super.call(this) || this;
                }
                FenXiangT6UI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.FenXiangT6UI.uiView);
                };
                FenXiangT6UI.uiView = { "type": "View", "props": { "width": 706, "height": 40 }, "child": [{ "type": "Box", "props": { "y": 1, "x": 0, "width": 702, "height": 38 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 704, "var": "img_bg", "skin": "dating_ui/tongyong/tu_bb1.png", "sizeGrid": "0,5,0,4", "height": 38, "alpha": 0.2 } }, { "type": "Label", "props": { "y": 8, "x": 14, "width": 130, "var": "txt_nickname", "height": 22, "fontSize": 16, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 8, "x": 167, "width": 160, "var": "txt_bet", "height": 22, "fontSize": 20, "color": "#008aff", "align": "center" } }, { "type": "Label", "props": { "y": 8, "x": 532, "width": 160, "var": "txt_selffy", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 8, "x": 349, "width": 160, "var": "txt_allfy", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }] }] };
                return FenXiangT6UI;
            }(View));
            component.FenXiangT6UI = FenXiangT6UI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var GuangUI = /** @class */ (function (_super) {
                __extends(GuangUI, _super);
                function GuangUI() {
                    return _super.call(this) || this;
                }
                GuangUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.GuangUI.uiView);
                };
                GuangUI.uiView = { "type": "View", "props": { "width": 512, "height": 100 }, "child": [{ "type": "Image", "props": { "y": 49, "x": 1, "skin": "dating_ui/huode/1.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "skin": [{ "value": "dating_ui/huode/1.png", "tweenMethod": "linearNone", "tween": false, "target": 2, "key": "skin", "index": 0 }, { "value": "dating_ui/huode/2.png", "tweenMethod": "linearNone", "tween": false, "target": 2, "key": "skin", "index": 1 }, { "value": "dating_ui/huode/3.png", "tweenMethod": "linearNone", "tween": false, "target": 2, "key": "skin", "index": 2 }, { "value": "dating_ui/huode/4.png", "tweenMethod": "linearNone", "tween": false, "target": 2, "key": "skin", "index": 3 }, { "value": "dating_ui/huode/5.png", "tweenMethod": "linearNone", "tween": false, "target": 2, "key": "skin", "index": 4 }, { "value": "dating_ui/huode/6.png", "tweenMethod": "linearNone", "tween": false, "target": 2, "key": "skin", "index": 5 }, { "value": "dating_ui/huode/7.png", "tweenMethod": "linearNone", "tween": false, "target": 2, "key": "skin", "index": 6 }] } }], "name": "ani1", "id": 1, "frameRate": 12, "action": 2 }] };
                return GuangUI;
            }(View));
            component.GuangUI = GuangUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var Guang1UI = /** @class */ (function (_super) {
                __extends(Guang1UI, _super);
                function Guang1UI() {
                    return _super.call(this) || this;
                }
                Guang1UI.prototype.createChildren = function () {
                    View.regComponent("ui.dating.component.GuangUI", ui.dating.component.GuangUI);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.Guang1UI.uiView);
                };
                Guang1UI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Guang", "props": { "y": 204, "x": 343, "rotation": -148, "anchorY": 0.5, "runtime": "ui.dating.component.GuangUI" } }, { "type": "Guang", "props": { "y": 218, "x": 304, "scaleY": 0.5, "scaleX": 1.3, "rotation": -160, "anchorY": 0.5, "runtime": "ui.dating.component.GuangUI" } }, { "type": "Guang", "props": { "y": 528, "x": 382, "scaleX": 1.3, "rotation": -196, "anchorY": 0.5, "runtime": "ui.dating.component.GuangUI" } }, { "type": "Guang", "props": { "y": 510, "x": 438, "scaleY": 0.5, "scaleX": 1.3, "rotation": -204, "anchorY": 0.5, "runtime": "ui.dating.component.GuangUI" } }, { "type": "Guang", "props": { "y": 420, "x": 302, "scaleY": 0.3, "scaleX": 1.5, "rotation": -183, "anchorY": 0.5, "runtime": "ui.dating.component.GuangUI" } }, { "type": "Guang", "props": { "y": 395, "x": 383, "scaleY": 0.5, "scaleX": 1, "rotation": -180, "anchorY": 0.5, "runtime": "ui.dating.component.GuangUI" } }, { "type": "Guang", "props": { "y": 267, "x": 359, "scaleY": 0.5, "scaleX": 1.3, "rotation": -167, "anchorY": 0.5, "runtime": "ui.dating.component.GuangUI" } }] };
                return Guang1UI;
            }(View));
            component.Guang1UI = Guang1UI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var Guang2UI = /** @class */ (function (_super) {
                __extends(Guang2UI, _super);
                function Guang2UI() {
                    return _super.call(this) || this;
                }
                Guang2UI.prototype.createChildren = function () {
                    View.regComponent("ui.dating.component.GuangUI", ui.dating.component.GuangUI);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.Guang2UI.uiView);
                };
                Guang2UI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Guang", "props": { "y": 218, "x": 466, "rotation": -119, "anchorY": 0.5, "runtime": "ui.dating.component.GuangUI" } }, { "type": "Guang", "props": { "y": 230, "x": 563, "scaleY": 0.5, "rotation": -97, "anchorY": 0.5, "runtime": "ui.dating.component.GuangUI" } }, { "type": "Guang", "props": { "y": 286, "x": 564, "scaleY": 0.5, "rotation": -104, "anchorY": 0.5, "runtime": "ui.dating.component.GuangUI" } }, { "type": "Guang", "props": { "y": 164, "x": 837, "scaleY": 1.3, "rotation": -43, "anchorY": 0.5, "runtime": "ui.dating.component.GuangUI" } }, { "type": "Guang", "props": { "y": 208, "x": 705, "scaleY": 0.7, "rotation": -67, "anchorY": 0.5, "runtime": "ui.dating.component.GuangUI" } }, { "type": "Guang", "props": { "y": 237, "x": 733, "scaleY": 0.4, "rotation": -54, "anchorY": 0.5, "runtime": "ui.dating.component.GuangUI" } }, { "type": "Guang", "props": { "y": 168, "x": 633, "scaleY": 0.7, "rotation": -84, "anchorY": 0.5, "runtime": "ui.dating.component.GuangUI" } }] };
                return Guang2UI;
            }(View));
            component.Guang2UI = Guang2UI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var HeadRenderTUI = /** @class */ (function (_super) {
                __extends(HeadRenderTUI, _super);
                function HeadRenderTUI() {
                    return _super.call(this) || this;
                }
                HeadRenderTUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.HeadRenderTUI.uiView);
                };
                HeadRenderTUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 111, "height": 111 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 111, "var": "img_head", "skin": "dating_ui/touxiang/head_1.png", "height": 111 } }, { "type": "Clip", "props": { "skin": "dating_ui/geren/Clip_xz.png", "right": 0, "name": "selectBox", "clipY": 2, "bottom": 0 } }] };
                return HeadRenderTUI;
            }(View));
            component.HeadRenderTUI = HeadRenderTUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var HudItemRender1UI = /** @class */ (function (_super) {
                __extends(HudItemRender1UI, _super);
                function HudItemRender1UI() {
                    return _super.call(this) || this;
                }
                HudItemRender1UI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.HudItemRender1UI.uiView);
                };
                HudItemRender1UI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 197, "height": 223 }, "child": [{ "type": "Image", "props": { "y": 156, "x": 99, "width": 197, "var": "img_bg", "height": 220, "anchorY": 0.7, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 126, "x": 98, "var": "img_close", "skin": "dating_ui/dating/tu_jqqd.png", "anchorY": 0.5, "anchorX": 0.5 } }] };
                return HudItemRender1UI;
            }(View));
            component.HudItemRender1UI = HudItemRender1UI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var KeFuRenderUI = /** @class */ (function (_super) {
                __extends(KeFuRenderUI, _super);
                function KeFuRenderUI() {
                    return _super.call(this) || this;
                }
                KeFuRenderUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.KeFuRenderUI.uiView);
                };
                KeFuRenderUI.uiView = { "type": "View", "props": { "width": 240, "height": 420 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 240, "skin": "dating_ui/kehu/tu1.png", "sizeGrid": "11,12,13,11", "height": 420 } }, { "type": "Image", "props": { "y": 42, "x": 41, "var": "img_head", "skin": "dating_ui/kehu/tx_1.png" } }, { "type": "Label", "props": { "y": 221, "x": 42, "width": 158, "var": "txt_id", "height": 22, "fontSize": 20, "color": "#f5fbb1", "align": "center" } }, { "type": "Label", "props": { "y": 252, "x": 42, "width": 158, "var": "txt_number", "height": 22, "fontSize": 20, "color": "#f5fbb1", "align": "center" } }, { "type": "Label", "props": { "y": 304, "x": 43, "width": 158, "var": "txt_name", "height": 21, "fontSize": 24, "color": "#ffffff", "align": "center" } }, { "type": "Button", "props": { "y": 344, "x": 39, "width": 164, "var": "btn_link", "stateNum": 1, "skin": "dating_ui/tongyong/btn_wx1.png", "sizeGrid": "0,24,0,31", "labelStrokeColor": "#149928", "labelStroke": 4, "labelSize": 24, "labelPadding": "-1", "labelColors": "#ffffff", "label": "联系客服", "height": 49 } }] };
                return KeFuRenderUI;
            }(View));
            component.KeFuRenderUI = KeFuRenderUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var LoadUI = /** @class */ (function (_super) {
                __extends(LoadUI, _super);
                function LoadUI() {
                    return _super.call(this) || this;
                }
                LoadUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.LoadUI.uiView);
                };
                LoadUI.uiView = { "type": "View", "props": { "width": 25, "height": 120 }, "child": [{ "type": "ProgressBar", "props": { "y": 120, "x": 0, "skin": "dating_ui/dating/progress.png", "sizeGrid": "0,17,0,15", "rotation": -90 } }, { "type": "Image", "props": { "y": 120, "x": 0, "skin": "dating_ui/dating/tu_progress.png", "rotation": -90 } }] };
                return LoadUI;
            }(View));
            component.LoadUI = LoadUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var MoneyItemRenderUI = /** @class */ (function (_super) {
                __extends(MoneyItemRenderUI, _super);
                function MoneyItemRenderUI() {
                    return _super.call(this) || this;
                }
                MoneyItemRenderUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.MoneyItemRenderUI.uiView);
                };
                MoneyItemRenderUI.uiView = { "type": "View", "props": { "width": 196, "height": 116 }, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "var": "btn", "stateNum": 1, "skin": "dating_ui/chongzhi/btn_je1.png", "name": "select", "labelStrokeColor": "#b15a00", "labelStroke": 4, "labelSize": 28, "labelPadding": "-6", "labelColors": "#fed922,#fed922,#fed922", "labelBold": true } }, { "type": "Clip", "props": { "y": 11, "x": 15, "skin": "dating_ui/chongzhi/clip_je2.png", "name": "selectBox", "clipY": 2, "blendMode": "lighter" } }] };
                return MoneyItemRenderUI;
            }(View));
            component.MoneyItemRenderUI = MoneyItemRenderUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var QuKuanTUI = /** @class */ (function (_super) {
                __extends(QuKuanTUI, _super);
                function QuKuanTUI() {
                    return _super.call(this) || this;
                }
                QuKuanTUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.QuKuanTUI.uiView);
                };
                QuKuanTUI.uiView = { "type": "View", "props": { "width": 579, "height": 39 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 579, "height": 39 }, "child": [{ "type": "Image", "props": { "y": 0, "width": 579, "var": "img_bg", "skin": "dating_ui/tongyong/tu_bb1.png", "sizeGrid": "0,7,0,6", "right": 0, "left": 0, "height": 39, "alpha": 0.2 } }, { "type": "Label", "props": { "y": 9, "x": 22, "wordWrap": true, "width": 94, "var": "txt_money", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 151, "wordWrap": true, "width": 94, "var": "txt_type", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 270, "wordWrap": true, "width": 190, "var": "txt_time", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 484, "wordWrap": true, "width": 69, "var": "txt_zt", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }] }] };
                return QuKuanTUI;
            }(View));
            component.QuKuanTUI = QuKuanTUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var TabItemRenderUI = /** @class */ (function (_super) {
                __extends(TabItemRenderUI, _super);
                function TabItemRenderUI() {
                    return _super.call(this) || this;
                }
                TabItemRenderUI.prototype.createChildren = function () {
                    View.regComponent("Text", laya.display.Text);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.TabItemRenderUI.uiView);
                };
                TabItemRenderUI.uiView = { "type": "View", "props": { "width": 175, "height": 58 }, "child": [{ "type": "Clip", "props": { "y": 0, "x": 0, "skin": "dating_ui/tongyong/clip_an1.png", "name": "selectBox", "index": 2, "clipY": 3 } }, { "type": "Text", "props": { "y": 16, "x": 6, "wordWrap": false, "width": 147, "var": "txt_name", "text": "活动内容", "height": 24, "fontSize": 24, "color": "#f7e9c1", "cacheAs": "normal", "align": "center" } }] };
                return TabItemRenderUI;
            }(View));
            component.TabItemRenderUI = TabItemRenderUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var TabItemRender1UI = /** @class */ (function (_super) {
                __extends(TabItemRender1UI, _super);
                function TabItemRender1UI() {
                    return _super.call(this) || this;
                }
                TabItemRender1UI.prototype.createChildren = function () {
                    View.regComponent("Text", laya.display.Text);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.TabItemRender1UI.uiView);
                };
                TabItemRender1UI.uiView = { "type": "View", "props": { "width": 250, "height": 76 }, "child": [{ "type": "Clip", "props": { "y": 0, "x": 0, "skin": "dating_ui/huodong/clip_an1.png", "name": "selectBox", "index": 2, "clipY": 3 } }, { "type": "Text", "props": { "y": 18, "x": -1, "wordWrap": false, "width": 251, "var": "txt_name", "text": "活动内容", "height": 42, "fontSize": 36, "font": "SimHei", "color": "#f7e9c1", "cacheAs": "normal", "align": "center" } }] };
                return TabItemRender1UI;
            }(View));
            component.TabItemRender1UI = TabItemRender1UI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var TabItemRender2UI = /** @class */ (function (_super) {
                __extends(TabItemRender2UI, _super);
                function TabItemRender2UI() {
                    return _super.call(this) || this;
                }
                TabItemRender2UI.prototype.createChildren = function () {
                    View.regComponent("Text", laya.display.Text);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.TabItemRender2UI.uiView);
                };
                TabItemRender2UI.uiView = { "type": "View", "props": { "width": 250, "height": 79 }, "child": [{ "type": "Clip", "props": { "y": 0, "x": 0, "skin": "dating_ui/huodong/clip_an1.png", "name": "selectBox", "index": 2, "clipY": 3 } }, { "type": "Text", "props": { "y": 20, "x": 69, "wordWrap": false, "width": 176, "var": "txt_name", "height": 36, "fontSize": 36, "color": "#f7e9c1", "cacheAs": "normal", "align": "center" } }, { "type": "Image", "props": { "y": 40, "x": 36, "var": "img_icon", "skin": "dating_ui/chongzhi/WXSM.png", "scaleY": 0.6, "scaleX": 0.6, "anchorY": 0.5, "anchorX": 0.5 } }] };
                return TabItemRender2UI;
            }(View));
            component.TabItemRender2UI = TabItemRender2UI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var TextInputUI = /** @class */ (function (_super) {
                __extends(TextInputUI, _super);
                function TextInputUI() {
                    return _super.call(this) || this;
                }
                TextInputUI.prototype.createChildren = function () {
                    View.regComponent("Text", laya.display.Text);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.TextInputUI.uiView);
                };
                TextInputUI.uiView = { "type": "View", "props": { "width": 392, "height": 31 }, "child": [{ "type": "Text", "props": { "var": "prompt", "text": "请输入...", "height": 35, "fontSize": 24, "color": "#777777", "align": "left" } }, { "type": "Text", "props": { "width": 392, "var": "input", "padding": "-1,0,0,16", "height": 35, "fontSize": 26, "color": "#ffffff", "align": "left" } }] };
                return TextInputUI;
            }(View));
            component.TextInputUI = TextInputUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var TopTUI = /** @class */ (function (_super) {
                __extends(TopTUI, _super);
                function TopTUI() {
                    return _super.call(this) || this;
                }
                TopTUI.prototype.createChildren = function () {
                    View.regComponent("Text", laya.display.Text);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.TopTUI.uiView);
                };
                TopTUI.uiView = { "type": "View", "props": { "width": 570, "visible": false, "height": 80 }, "child": [{ "type": "Image", "props": { "y": 1, "x": 1, "width": 570, "var": "img_bg", "skin": "dating_ui/top/tu_toplb4.png", "sizeGrid": "11,12,13,11", "height": 80 }, "child": [{ "type": "Image", "props": { "y": 40, "x": 101, "var": "img_head", "skin": "dating_ui/touxiang/head_1.png", "scaleY": 0.75, "scaleX": 0.75, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 14, "x": 179, "width": 176, "var": "txt_id", "height": 19, "fontSize": 20, "color": "#f5fbb1" } }, { "type": "Image", "props": { "y": 41, "x": 180, "width": 179, "skin": "dating_ui/tongyong/tu_k1ss.png", "sizeGrid": "0,17,0,14", "height": 29, "alpha": 0.5 } }, { "type": "Clip", "props": { "y": 41, "x": 211, "var": "clip_money", "skin": "dating_ui/tongyong/clip_money1.png", "clipX": 11 } }, { "type": "Image", "props": { "y": 54, "x": 191, "skin": "dating_ui/tongyong/icon_money.png", "scaleY": 0.9, "scaleX": 0.9, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 42, "x": 507, "visible": false, "var": "img_rank", "skin": "dating_ui/top/top1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Clip", "props": { "y": 27, "x": 493, "visible": false, "var": "clip_num", "skin": "dating_ui/tongyong/clip_top.png", "index": 9, "clipX": 10 } }, { "type": "Text", "props": { "y": 32, "x": 471, "width": 78, "visible": false, "var": "txt_no", "text": "未上榜", "height": 25, "fontSize": 24, "color": "#efda8b" } }] }] };
                return TopTUI;
            }(View));
            component.TopTUI = TopTUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var TuiGuangDUI = /** @class */ (function (_super) {
                __extends(TuiGuangDUI, _super);
                function TuiGuangDUI() {
                    return _super.call(this) || this;
                }
                TuiGuangDUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.TuiGuangDUI.uiView);
                };
                TuiGuangDUI.uiView = { "type": "View", "props": { "width": 220, "height": 100 }, "child": [{ "type": "Image", "props": { "y": -1, "x": 5, "skin": "dating_ui/dating/tg_ggg.png" }, "compId": 5 }, { "type": "Image", "props": { "y": 50, "x": 111, "skin": "dating_ui/dating/tg_ggg.png", "scaleY": 1.5, "scaleX": 1.5, "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0 }, "compId": 11 }, { "type": "Box", "props": { "y": 81, "x": 177, "width": 42, "height": 70, "anchorY": 1, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 71, "x": 21, "skin": "dating_ui/dating/tg_gg.png", "rotation": 0, "blendMode": "", "anchorY": 1, "anchorX": 0.5 }, "compId": 4 }, { "type": "Image", "props": { "y": 70, "x": 21, "skin": "dating_ui/dating/tg_gg.png", "blendMode": "lighter", "anchorY": 1, "anchorX": 0.5, "alpha": 0 }, "compId": 10 }] }, { "type": "Box", "props": { "y": 51, "x": 134, "width": 89, "height": 82, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 39, "x": 44, "skin": "dating_ui/dating/tg_g.png", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.7 }, "compId": 2 }, { "type": "Image", "props": { "y": 39, "x": 44.5, "skin": "dating_ui/dating/tg_g.png", "scaleY": 1.21, "scaleX": 1.21, "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 }, "compId": 9 }] }, { "type": "Box", "props": { "y": 45, "x": 62, "width": 74, "height": 73, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 39.5, "x": 42, "skin": "dating_ui/dating/tg_t.png", "scaleY": 1.09, "scaleX": 1.09, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 6 }, { "type": "Image", "props": { "y": 39.5, "x": 42, "skin": "dating_ui/dating/tg_t.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.3 }, "compId": 8 }] }], "animations": [{ "nodes": [{ "target": 9, "keyframes": { "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "scaleY", "index": 10 }, { "value": 1.3, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "scaleY", "index": 20 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "scaleY", "index": 30 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "scaleX", "index": 10 }, { "value": 1.3, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "scaleX", "index": 20 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "scaleX", "index": 30 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "alpha", "index": 20 }] } }, { "target": 6, "keyframes": { "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "label": null, "key": "scaleY", "index": 0 }, { "value": 1.3, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "scaleY", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "label": null, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "label": null, "key": "scaleX", "index": 0 }, { "value": 1.3, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "scaleX", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "label": null, "key": "scaleX", "index": 20 }] } }, { "target": 4, "keyframes": { "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "rotation", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "rotation", "index": 20 }, { "value": 10, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "rotation", "index": 25 }, { "value": -10, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "rotation", "index": 30 }, { "value": 10, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "rotation", "index": 35 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "rotation", "index": 40 }], "blendMode": [{ "value": "", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "blendMode", "index": 0 }, { "value": "", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "blendMode", "index": 25 }] } }, { "target": 11, "keyframes": { "scaleY": [{ "value": 1.5, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleY", "index": 0 }, { "value": 1.5, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleY", "index": 20 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleY", "index": 35 }], "scaleX": [{ "value": 1.5, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleX", "index": 0 }, { "value": 1.5, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleX", "index": 20 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "scaleX", "index": 35 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "alpha", "index": 20 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "alpha", "index": 35 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 11, "key": "alpha", "index": 40 }] } }, { "target": 2, "keyframes": { "x": [{ "value": 43.5, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 43.5, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "x", "index": 10 }, { "value": 43.5, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 30 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 20 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 30 }] } }, { "target": 8, "keyframes": { "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "alpha", "index": 10 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 8, "label": null, "key": "alpha", "index": 20 }] } }, { "target": 10, "keyframes": { "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "alpha", "index": 20 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "alpha", "index": 25 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 30 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 35 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 40 }] } }, { "target": 5, "keyframes": {} }], "name": "ani1", "id": 1, "frameRate": 24, "action": 2 }] };
                return TuiGuangDUI;
            }(View));
            component.TuiGuangDUI = TuiGuangDUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var TuiGuangMX_TUI = /** @class */ (function (_super) {
                __extends(TuiGuangMX_TUI, _super);
                function TuiGuangMX_TUI() {
                    return _super.call(this) || this;
                }
                TuiGuangMX_TUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.TuiGuangMX_TUI.uiView);
                };
                TuiGuangMX_TUI.uiView = { "type": "View", "props": { "width": 706, "height": 40 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 706, "height": 40 }, "child": [{ "type": "Image", "props": { "y": 1, "x": 0, "width": 706, "var": "img_bg", "skin": "dating_ui/tongyong/tu_bb1.png", "sizeGrid": "0,7,0,6", "height": 38, "alpha": 0.2 } }, { "type": "Label", "props": { "y": 9, "width": 175, "var": "txt_title", "left": 0, "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 9, "width": 316, "var": "txt_yjed", "height": 22, "fontSize": 20, "color": "#cfc9b1", "centerX": 0, "align": "center" } }, { "type": "Label", "props": { "y": 9, "width": 179, "var": "txt_fyvalue", "right": 0, "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }] }] };
                return TuiGuangMX_TUI;
            }(View));
            component.TuiGuangMX_TUI = TuiGuangMX_TUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var TuiGuangTUI = /** @class */ (function (_super) {
                __extends(TuiGuangTUI, _super);
                function TuiGuangTUI() {
                    return _super.call(this) || this;
                }
                TuiGuangTUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.TuiGuangTUI.uiView);
                };
                TuiGuangTUI.uiView = { "type": "View", "props": { "width": 704, "height": 38 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 704, "height": 38 }, "child": [{ "type": "Image", "props": { "y": 0, "width": 579, "var": "img_bg", "skin": "dating_ui/tongyong/tu_bb1.png", "sizeGrid": "0,5,0,4", "right": 0, "left": 0, "height": 38, "alpha": 0.2 } }, { "type": "Label", "props": { "y": 9, "x": 254, "wordWrap": true, "width": 142, "var": "txt_money", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 61, "wordWrap": true, "width": 53, "var": "txt_type", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 490, "wordWrap": true, "width": 190, "var": "txt_time", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Image", "props": { "y": 20, "x": 86, "skin": "dating_ui/tongyong/tu_top1.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
                return TuiGuangTUI;
            }(View));
            component.TuiGuangTUI = TuiGuangTUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var VipItemRenderUI = /** @class */ (function (_super) {
                __extends(VipItemRenderUI, _super);
                function VipItemRenderUI() {
                    return _super.call(this) || this;
                }
                VipItemRenderUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.VipItemRenderUI.uiView);
                };
                VipItemRenderUI.uiView = { "type": "View", "props": { "width": 462, "height": 132 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 386, "skin": "dating_ui/chongzhi/tu_toplb4.png", "sizeGrid": "0,10,0,8", "scaleY": 1.2, "scaleX": 1.2, "height": 110 } }, { "type": "Button", "props": { "y": 66, "x": 382, "var": "btn_go", "stateNum": 1, "skin": "dating_ui/tongyong/btn_wx3.png", "scaleY": 0.9, "scaleX": 0.9, "labelStrokeColor": "#00841a", "labelSize": 26, "labelPadding": "-4", "labelColors": "#00841a", "labelBold": true, "label": "复制/跳转", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 68, "x": 100, "wordWrap": true, "width": 205, "var": "txt_name", "valign": "top", "leading": 0, "height": 28, "fontSize": 28, "color": "#ffffff", "align": "left" } }, { "type": "Label", "props": { "y": 30, "x": 100, "wordWrap": true, "width": 205, "var": "txt_title", "valign": "middle", "leading": 8, "height": 28, "fontSize": 28, "color": "#ffc100", "align": "left" } }, { "type": "Image", "props": { "y": 68, "x": 54, "var": "img_icon", "skin": "dating_ui/chongzhi/WXSM.png", "scaleY": 0.9, "scaleX": 0.9, "anchorY": 0.5, "anchorX": 0.5 } }] };
                return VipItemRenderUI;
            }(View));
            component.VipItemRenderUI = VipItemRenderUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var VipItemRender1UI = /** @class */ (function (_super) {
                __extends(VipItemRender1UI, _super);
                function VipItemRender1UI() {
                    return _super.call(this) || this;
                }
                VipItemRender1UI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.VipItemRender1UI.uiView);
                };
                VipItemRender1UI.uiView = { "type": "View", "props": { "width": 960, "height": 132 }, "child": [{ "type": "Image", "props": { "y": -1, "x": 0, "width": 800, "skin": "dating_ui/chongzhi/tu_toplb4.png", "sizeGrid": "0,27,0,26", "scaleY": 1.2, "scaleX": 1.2, "height": 110, "anchorY": 0, "anchorX": 0 } }, { "type": "Button", "props": { "y": 67, "x": 796, "var": "btn_go", "stateNum": 1, "skin": "dating_ui/tongyong/btn_wx2.png", "sizeGrid": "0,22,0,25", "labelStrokeColor": "#00841a", "labelSize": 36, "labelPadding": "-7", "labelColors": "#00841a", "labelBold": true, "label": "立即前往", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 69, "x": 136, "width": 529, "var": "txt_name", "valign": "top", "leading": 0, "height": 36, "fontSize": 36, "color": "#ffffff", "bold": true, "align": "left" } }, { "type": "Label", "props": { "y": 24, "x": 136, "width": 511, "var": "txt_title", "valign": "middle", "leading": 8, "height": 36, "fontSize": 36, "color": "#ffc100", "bold": true, "align": "left" } }, { "type": "Image", "props": { "y": 67, "x": 76, "var": "img_icon", "skin": "dating_ui/chongzhi/WXSM.png", "anchorY": 0.5, "anchorX": 0.5 } }] };
                return VipItemRender1UI;
            }(View));
            component.VipItemRender1UI = VipItemRender1UI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var VipLevelRenderUI = /** @class */ (function (_super) {
                __extends(VipLevelRenderUI, _super);
                function VipLevelRenderUI() {
                    return _super.call(this) || this;
                }
                VipLevelRenderUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.VipLevelRenderUI.uiView);
                };
                VipLevelRenderUI.uiView = { "type": "View", "props": { "width": 608, "height": 40 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 608, "var": "img_bg", "skin": "dating_ui/tongyong/tu_bb1.png", "sizeGrid": "0,7,0,6", "height": 40, "alpha": 0.2 } }, { "type": "Label", "props": { "y": 7, "x": 24, "width": 160, "var": "txt_level", "height": 30, "fontSize": 26, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 7, "x": 423, "width": 160, "var": "txt_award", "height": 30, "fontSize": 26, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 7, "x": 222, "width": 160, "var": "txt_leichong", "height": 30, "fontSize": 26, "color": "#cfc9b1", "align": "center" } }] };
                return VipLevelRenderUI;
            }(View));
            component.VipLevelRenderUI = VipLevelRenderUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var VipRenderUI = /** @class */ (function (_super) {
                __extends(VipRenderUI, _super);
                function VipRenderUI() {
                    return _super.call(this) || this;
                }
                VipRenderUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.VipRenderUI.uiView);
                };
                VipRenderUI.uiView = { "type": "View", "props": { "width": 167, "height": 222 }, "child": [{ "type": "Box", "props": {}, "child": [{ "type": "Image", "props": { "skin": "dating_ui/vip/tu_kuang.png" } }, { "type": "Box", "props": { "y": -1, "x": 20, "var": "box_icon" }, "child": [{ "type": "Image", "props": { "y": 2, "skin": "dating_ui/vip/tu_yz.png" } }, { "type": "Image", "props": { "x": 5, "var": "img_vip", "skin": "dating_ui/vip/btn_v2.png" } }] }, { "type": "Box", "props": { "y": 106, "x": 8, "var": "box_recharge" }, "child": [{ "type": "Image", "props": { "x": 37, "skin": "dating_ui/vip/tu_leijichongzhi.png" } }, { "type": "Label", "props": { "y": 21, "width": 152, "var": "txt_leiji", "height": 16, "fontSize": 16, "color": "#0fc5ff", "align": "center" } }] }, { "type": "Box", "props": { "y": 144, "x": 27, "var": "box_award" }, "child": [{ "type": "Image", "props": { "y": 3, "x": 7, "skin": "dating_ui/vip/tu_jiangli.png" } }, { "type": "Image", "props": { "x": 57, "width": 50, "skin": "dating_ui/vip/tu_heiying.png", "height": 23 } }, { "type": "Button", "props": { "y": 26, "var": "btn_get", "stateNum": 1, "skin": "dating_ui/vip/btn_lq.png" } }, { "type": "Label", "props": { "y": 4, "x": 62, "width": 40, "var": "txt_award", "height": 16, "fontSize": 16, "color": "#ffffff", "align": "center" } }, { "type": "Image", "props": { "y": 32, "x": 12, "var": "img_yilingqu", "skin": "dating_ui/vip/btn_ylq.png" } }] }] }] };
                return VipRenderUI;
            }(View));
            component.VipRenderUI = VipRenderUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var XingUI = /** @class */ (function (_super) {
                __extends(XingUI, _super);
                function XingUI() {
                    return _super.call(this) || this;
                }
                XingUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.XingUI.uiView);
                };
                XingUI.uiView = { "type": "View", "props": { "width": 100, "height": 600 }, "child": [{ "type": "Image", "props": { "y": 347.1, "x": 51, "skin": "dating_ui/huode/tu_xx.png", "scaleY": 1.3666666666666667, "scaleX": 1.3666666666666667, "rotation": 33, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 18 }], "animations": [{ "nodes": [{ "target": 18, "keyframes": { "y": [{ "value": 577, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "y", "index": 0 }, { "value": -50, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "y", "index": 30 }], "x": [{ "value": 51, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 0 }, { "value": 51, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 30 }], "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleY", "index": 0 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleY", "index": 30 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleX", "index": 0 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleX", "index": 30 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "rotation", "index": 0 }, { "value": 90, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "rotation", "index": 30 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 2 }] };
                return XingUI;
            }(View));
            component.XingUI = XingUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var Xing1UI = /** @class */ (function (_super) {
                __extends(Xing1UI, _super);
                function Xing1UI() {
                    return _super.call(this) || this;
                }
                Xing1UI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.Xing1UI.uiView);
                };
                Xing1UI.uiView = { "type": "View", "props": { "width": 100, "height": 600 }, "child": [{ "type": "Image", "props": { "y": 577, "x": 51, "skin": "dating_ui/huode/tu_xx.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 18 }], "animations": [{ "nodes": [{ "target": 18, "keyframes": { "y": [{ "value": 368, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "y", "index": 0 }, { "value": -50, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "y", "index": 20 }, { "value": 577, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "y", "index": 21 }, { "value": 388.9, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "y", "index": 30 }], "x": [{ "value": 51, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 0 }, { "value": 51, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 20 }, { "value": 51, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "x", "index": 21 }, { "value": 51, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "x", "index": 30 }], "scaleY": [{ "value": 1.3333333333333333, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleY", "index": 0 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleY", "index": 20 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "scaleY", "index": 21 }, { "value": 1.2999999999999998, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "scaleY", "index": 30 }], "scaleX": [{ "value": 1.3333333333333333, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleX", "index": 0 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleX", "index": 20 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "scaleX", "index": 21 }, { "value": 1.2999999999999998, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "scaleX", "index": 30 }], "rotation": [{ "value": 30, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "rotation", "index": 0 }, { "value": 90, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "rotation", "index": 20 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "rotation", "index": 21 }, { "value": 27, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "rotation", "index": 30 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 2 }] };
                return Xing1UI;
            }(View));
            component.Xing1UI = Xing1UI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var Xing2UI = /** @class */ (function (_super) {
                __extends(Xing2UI, _super);
                function Xing2UI() {
                    return _super.call(this) || this;
                }
                Xing2UI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.Xing2UI.uiView);
                };
                Xing2UI.uiView = { "type": "View", "props": { "width": 100, "height": 600 }, "child": [{ "type": "Image", "props": { "y": 577, "x": 51, "skin": "dating_ui/huode/tu_xx.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 18 }], "animations": [{ "nodes": [{ "target": 18, "keyframes": { "y": [{ "value": 159, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "y", "index": 0 }, { "value": -50, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "y", "index": 10 }, { "value": 577, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "y", "index": 11 }, { "value": 388.9, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "y", "index": 20 }, { "value": 368, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "y", "index": 21 }, { "value": 179.9, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "y", "index": 30 }], "x": [{ "value": 51, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 0 }, { "value": 51, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 10 }, { "value": 51, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "x", "index": 11 }, { "value": 51, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "x", "index": 20 }, { "value": 51, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "x", "index": 21 }, { "value": 51, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "x", "index": 30 }], "scaleY": [{ "value": 1.6666666666666665, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleY", "index": 0 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleY", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "scaleY", "index": 11 }, { "value": 1.2999999999999998, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "scaleY", "index": 20 }, { "value": 1.3333333333333333, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "scaleY", "index": 21 }, { "value": 1.6333333333333333, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "scaleY", "index": 30 }], "scaleX": [{ "value": 1.6666666666666665, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleX", "index": 0 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "scaleX", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "scaleX", "index": 11 }, { "value": 1.2999999999999998, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "scaleX", "index": 20 }, { "value": 1.3333333333333333, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "scaleX", "index": 21 }, { "value": 1.6333333333333333, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "scaleX", "index": 30 }], "rotation": [{ "value": 60, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "rotation", "index": 0 }, { "value": 90, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "rotation", "index": 10 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "rotation", "index": 11 }, { "value": 27, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "rotation", "index": 20 }, { "value": 30, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "rotation", "index": 21 }, { "value": 57, "tweenMethod": "linearNone", "tween": true, "target": 18, "label": null, "key": "rotation", "index": 30 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 2 }] };
                return Xing2UI;
            }(View));
            component.Xing2UI = Xing2UI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var XinXi_lbUI = /** @class */ (function (_super) {
                __extends(XinXi_lbUI, _super);
                function XinXi_lbUI() {
                    return _super.call(this) || this;
                }
                XinXi_lbUI.prototype.createChildren = function () {
                    View.regComponent("Text", laya.display.Text);
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.XinXi_lbUI.uiView);
                };
                XinXi_lbUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 748, "height": 136 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 748, "skin": "dating_ui/xinxi/tu_lb.png", "sizeGrid": "0,16,0,16", "height": 135 } }, { "type": "Image", "props": { "y": 0, "x": 6, "var": "img_head", "skin": "dating_ui/xinxi/tu_gm.png" } }, { "type": "Image", "props": { "y": 69, "x": 137, "width": 228, "skin": "dating_ui/tongyong/tu_lbk.png", "sizeGrid": "0,19,0,18", "height": 34 } }, { "type": "Text", "props": { "y": 11, "x": 136, "width": 184, "var": "txt_title", "height": 19, "fontSize": 20, "color": "#efda8b" } }, { "type": "Text", "props": { "y": 77, "x": 149, "width": 201, "var": "txt_name", "text": "发件人：GM", "height": 19, "fontSize": 20, "color": "#efda8b", "align": "center" } }, { "type": "Text", "props": { "y": 76, "x": 377, "width": 201, "var": "btn_read", "text": "点击阅读查看详情", "height": 19, "fontSize": 20, "color": "#ac8177", "align": "center" } }, { "type": "Text", "props": { "y": 10, "x": 520, "width": 184, "var": "txt_time", "height": 19, "fontSize": 20, "color": "#efda8b", "align": "right" } }, { "type": "Image", "props": { "y": 84, "x": 660, "var": "btn_dingyue", "skin": "dating_ui/xinxi/tu_yy.png", "anchorY": 0.5, "anchorX": 0.5 } }] };
                return XinXi_lbUI;
            }(View));
            component.XinXi_lbUI = XinXi_lbUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var YongHuTUI = /** @class */ (function (_super) {
                __extends(YongHuTUI, _super);
                function YongHuTUI() {
                    return _super.call(this) || this;
                }
                YongHuTUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.YongHuTUI.uiView);
                };
                YongHuTUI.uiView = { "type": "View", "props": { "width": 700, "height": 40 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 700, "height": 40 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 700, "var": "img_bg", "skin": "dating_ui/tongyong/tu_bb1.png", "sizeGrid": "0,2,0,2", "height": 40, "alpha": 0.2 } }, { "type": "Label", "props": { "y": 10, "x": 200, "width": 138, "var": "txt_total", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 10, "x": 385, "width": 124, "var": "txt_tallage", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 10, "x": 557, "width": 134, "var": "txt_count", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 10, "x": 13, "width": 142, "var": "txt_name", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }] }] };
                return YongHuTUI;
            }(View));
            component.YongHuTUI = YongHuTUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var YuEBaoTUI = /** @class */ (function (_super) {
                __extends(YuEBaoTUI, _super);
                function YuEBaoTUI() {
                    return _super.call(this) || this;
                }
                YuEBaoTUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.YuEBaoTUI.uiView);
                };
                YuEBaoTUI.uiView = { "type": "View", "props": { "width": 720, "height": 40 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 730, "height": 40 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 738, "var": "img_bg", "skin": "dating_ui/tongyong/tu_bb2.png", "sizeGrid": "0,7,0,6", "height": 40, "alpha": 0.2 } }, { "type": "Label", "props": { "y": 9, "x": 203, "width": 310, "var": "txt_time", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 19, "width": 121, "var": "txt_money", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 567, "width": 142, "var": "txt_zt", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }] }] };
                return YuEBaoTUI;
            }(View));
            component.YuEBaoTUI = YuEBaoTUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var ZhuanPanTUI = /** @class */ (function (_super) {
                __extends(ZhuanPanTUI, _super);
                function ZhuanPanTUI() {
                    return _super.call(this) || this;
                }
                ZhuanPanTUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.ZhuanPanTUI.uiView);
                };
                ZhuanPanTUI.uiView = { "type": "View", "props": { "width": 20, "height": 20 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "dating_ui/zhuanpan/tu_pb.png", "anchorY": 1, "anchorX": 0.5, "alpha": 0 } }, { "type": "Image", "props": { "y": -173, "x": -3, "visible": false, "var": "img_reward", "skin": "dating_ui/tongyong/jb_4.png", "scaleY": 0.5, "scaleX": 0.5, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": -120, "x": -1, "width": 94, "visible": false, "var": "txt_num", "text": "100", "height": 22, "fontSize": 20, "color": "#5b1d00", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] };
                return ZhuanPanTUI;
            }(View));
            component.ZhuanPanTUI = ZhuanPanTUI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var ZhuanPanT1UI = /** @class */ (function (_super) {
                __extends(ZhuanPanT1UI, _super);
                function ZhuanPanT1UI() {
                    return _super.call(this) || this;
                }
                ZhuanPanT1UI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.ZhuanPanT1UI.uiView);
                };
                ZhuanPanT1UI.uiView = { "type": "View", "props": { "width": 579, "height": 39 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 579, "height": 39 }, "child": [{ "type": "Image", "props": { "y": 0, "width": 579, "var": "img_bg", "skin": "dating_ui/tongyong/tu_bb1.png", "sizeGrid": "0,7,0,6", "right": 0, "left": 0, "height": 39, "alpha": 0.2 } }, { "type": "Label", "props": { "y": 9, "x": 19, "wordWrap": true, "width": 190, "var": "txt_time", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 228, "wordWrap": true, "width": 135, "var": "txt_username", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 381, "wordWrap": true, "width": 94, "var": "txt_type", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 491, "wordWrap": true, "width": 71, "var": "txt_money", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }] }] };
                return ZhuanPanT1UI;
            }(View));
            component.ZhuanPanT1UI = ZhuanPanT1UI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var component;
        (function (component) {
            var ZhuanPanT2UI = /** @class */ (function (_super) {
                __extends(ZhuanPanT2UI, _super);
                function ZhuanPanT2UI() {
                    return _super.call(this) || this;
                }
                ZhuanPanT2UI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.component.ZhuanPanT2UI.uiView);
                };
                ZhuanPanT2UI.uiView = { "type": "View", "props": { "width": 579, "height": 39 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 579, "height": 39 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "img_bg", "skin": "dating_ui/tongyong/tu_bb1.png", "sizeGrid": "0,7,0,6", "right": 0, "left": 0, "height": 42, "alpha": 0.2 } }, { "type": "Label", "props": { "y": 9, "x": 19, "wordWrap": true, "width": 190, "var": "txt_time", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 273, "wordWrap": true, "width": 149, "var": "txt_type", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 9, "x": 475, "wordWrap": true, "width": 87, "var": "txt_money", "height": 22, "fontSize": 20, "color": "#fdf300", "align": "center" } }] }] };
                return ZhuanPanT2UI;
            }(View));
            component.ZhuanPanT2UI = ZhuanPanT2UI;
        })(component = dating.component || (dating.component = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var DaTingUI = /** @class */ (function (_super) {
            __extends(DaTingUI, _super);
            function DaTingUI() {
                return _super.call(this) || this;
            }
            DaTingUI.prototype.createChildren = function () {
                View.regComponent("ui.dating.component.HudItemRender1UI", ui.dating.component.HudItemRender1UI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.DaTingUI.uiView);
            };
            DaTingUI.uiView = { "type": "View", "props": { "width": 1280, "renderType": "render", "height": 720 }, "child": [{ "type": "Image", "props": { "top": -1, "skin": "dating_ui/datingrk/tu_bj.jpg", "right": -1, "left": -1, "bottom": -1 } }, { "type": "Image", "props": { "top": -1, "skin": "dating_ui/dating/tu_d1.png", "sizeGrid": "0,770,0,503", "right": 0, "pivotX": 0, "left": -1 } }, { "type": "Image", "props": { "y": 720, "x": 0, "skin": "dating_ui/dating/tu_hs.png", "right": 0, "left": 0, "height": 80, "bottom": 0, "anchorY": 1, "alpha": 0.2 } }, { "type": "Image", "props": { "skin": "dating_ui/dating/tu_d2.png", "sizeGrid": "0,400,0,50", "right": 0, "left": 0, "bottom": 0, "anchorY": 1 } }, { "type": "Image", "props": { "top": 0, "skin": "ui/logo/logo217.png", "centerX": 0, "anchorY": 0, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 360, "x": 0, "width": 340, "var": "box_avatar", "height": 530, "centerY": 0, "anchorY": 0.5 }, "child": [{ "type": "Panel", "props": { "y": -7, "x": 0, "width": 340, "var": "panel", "height": 530 }, "child": [{ "type": "Clip", "props": { "y": 513, "var": "clip", "skin": "dating_ui/dating/clip_dd.png", "name": "clip", "clipY": 2, "centerX": -15 } }, { "type": "Box", "props": { "y": 7, "x": 0, "width": 340, "var": "box0", "name": "item0", "height": 530, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "dating_ui/dating/tu_lb1.png" } }, { "type": "Button", "props": { "x": 149, "visible": false, "var": "btn_copy", "stateNum": 1, "skin": "ui/logo/logo_wz.png", "centerY": 220, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": -32, "x": 86, "skin": "dating_ui/dating/tu_fz.png" } }] }, { "type": "Image", "props": { "y": 428, "x": 9, "var": "img_lianxi", "skin": "dating_ui/dating/tu_kp.png" } }] }, { "type": "Box", "props": { "y": 7, "x": 340, "width": 340, "var": "box1", "name": "item1", "height": 530, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "img_bang_or_sao", "skin": "dating_ui/dating/tu_lb2.png" } }, { "type": "Image", "props": { "y": 414, "x": 158, "var": "img_bang_bg", "skin": "dating_ui/dating/tu_wz2.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 437, "x": 244, "width": 110, "var": "img_ewm", "height": 110, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 408, "x": 162, "width": 190, "height": 56 }, "child": [{ "type": "Image", "props": { "y": 0, "var": "img_yuan", "skin": "dating_ui/dating/tu_yuan.png", "left": 44 } }, { "type": "Clip", "props": { "y": 4, "var": "clip_bindsendmoney", "skin": "dating_ui/dating/clip_sz.png", "left": 0, "clipX": 10 } }] }] }, { "type": "Box", "props": { "y": 7, "x": 340, "width": 340, "var": "box2", "name": "item2", "height": 530, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "dating_ui/dating/tu_lb3.png" } }, { "type": "Button", "props": { "y": 463, "x": 161, "var": "btn_cunru", "stateNum": 1, "skin": "dating_ui/dating/btn_lb3.png", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 7, "x": 340, "width": 340, "var": "box3", "name": "item3", "height": 530, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "dating_ui/dating/tu_lb5.png" } }, { "type": "Button", "props": { "y": 463, "x": 161, "var": "btn_tuiguang", "stateNum": 1, "skin": "dating_ui/dating/btn_lb5.png", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 7, "x": 340, "width": 340, "var": "box4", "name": "item4", "height": 530, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "dating_ui/dating/tu_lb6.png" } }, { "type": "Button", "props": { "y": 463, "x": 161, "var": "btn_share", "stateNum": 1, "skin": "dating_ui/dating/btn_lb6.png", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 7, "x": 340, "width": 340, "var": "box5", "name": "item5", "height": 530, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "dating_ui/dating/tu_lb7.png" } }, { "type": "Button", "props": { "y": 463, "x": 161, "var": "btn_cardroom", "stateNum": 1, "skin": "dating_ui/dating/btn_lb7.png", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 7, "x": 340, "width": 340, "var": "box6", "name": "item6", "height": 530, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "Image", "props": { "y": 18, "x": 0, "skin": "dating_ui/dating/tu_lb8.png" } }, { "type": "Button", "props": { "y": 422, "x": 35, "var": "btn_vip_ad", "stateNum": 1, "skin": "dating_ui/dating/btn_lb8.png" } }] }] }] }, { "type": "Box", "props": { "var": "box_list", "top": 0, "right": 0, "left": 300, "height": 720, "bottom": 0, "anchorY": 0.5, "anchorX": 1 }, "child": [{ "type": "List", "props": { "var": "list_game", "spaceX": 42, "right": 70, "repeatY": 2, "left": 0, "height": 500, "centerY": 10, "anchorY": 0.5, "anchorX": 0 }, "child": [{ "type": "HudItemRender1", "props": { "y": 150, "x": 100, "width": 197, "renderType": "render", "height": 263, "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.dating.component.HudItemRender1UI" } }] }] }, { "type": "Button", "props": { "y": 654, "x": 1147, "var": "btn_chongzhi", "stateNum": 1, "skin": "dating_ui/dating/btn_chongzhi.png", "right": 10, "bottom": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 360, "width": 50, "visible": false, "var": "box_target", "right": 0, "height": 720, "centerY": 0, "anchorY": 0.5 }, "child": [{ "type": "Box", "props": { "y": 97, "x": 0 }, "child": [{ "type": "Image", "props": { "width": 50, "skin": "dating_ui/dating/tu_yxfl.png", "sizeGrid": "14,7,14,12", "height": 523, "alpha": 0.75 } }, { "type": "Image", "props": { "y": 108, "width": 50, "skin": "dating_ui/dating/tu_yxfl1.png" } }, { "type": "Image", "props": { "y": 210, "width": 50, "skin": "dating_ui/dating/tu_yxfl1.png" } }, { "type": "Image", "props": { "y": 312, "width": 50, "skin": "dating_ui/dating/tu_yxfl1.png" } }, { "type": "Image", "props": { "y": 414, "width": 50, "skin": "dating_ui/dating/tu_yxfl1.png" } }] }, { "type": "Tab", "props": { "width": 50, "var": "tab_target", "selectedIndex": -1, "right": -1, "height": 527, "centerY": 0, "anchorY": 0.5 }, "child": [{ "type": "Button", "props": { "y": 7, "x": -1, "stateNum": 3, "skin": "dating_ui/dating/btn_hot1.png", "name": "item0" } }, { "type": "Button", "props": { "y": 109, "x": -1, "stateNum": 3, "skin": "dating_ui/dating/btn_chess_card1.png", "name": "item1" } }, { "type": "Button", "props": { "y": 211, "x": -1, "stateNum": 3, "skin": "dating_ui/dating/btn_room_card1.png", "name": "item2" } }, { "type": "Button", "props": { "y": 313, "x": -1, "stateNum": 3, "skin": "dating_ui/dating/btn_video_game1.png", "name": "item3" } }, { "type": "Button", "props": { "y": 415, "x": -1, "stateNum": 3, "skin": "dating_ui/dating/btn_room_card2.png", "name": "item4" } }] }] }, { "type": "Box", "props": { "width": 537, "top": 0, "left": 0, "height": 83 }, "child": [{ "type": "Image", "props": { "y": 16, "x": 12, "skin": "dating_ui/tongyong/tu_txk.png" } }, { "type": "Image", "props": { "y": 26, "x": 294, "width": 153, "skin": "dating_ui/tongyong/tu_k1ss.png", "sizeGrid": "0,17,0,14", "scaleY": 1.4, "scaleX": 1.4, "height": 29, "alpha": 0.5 } }, { "type": "Clip", "props": { "y": 30, "x": 326, "var": "clip_money", "skin": "dating_ui/tongyong/clip_money1.png", "index": 0, "clipX": 11 } }, { "type": "Image", "props": { "y": 55, "x": 50, "var": "btn_gren", "skin": "dating_ui/touxiang/head_5.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 52, "x": 50, "var": "img_txk", "skin": "dating_ui/touxiang/tu_v1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 44, "x": 300, "skin": "dating_ui/tongyong/icon_money1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 45, "x": 489, "width": 60, "var": "btn_fresh", "stateNum": 1, "skin": "dating_ui/dating/btn_jq.png", "height": 59, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 30, "x": 190, "width": 192, "var": "txt_name", "overflow": "hidden", "leading": 8, "height": 29, "fontSize": 25, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "left" } }, { "type": "Label", "props": { "y": 60, "x": 190, "width": 192, "var": "txt_id", "leading": 8, "height": 23, "fontSize": 22, "color": "#f5fbb1", "anchorY": 0.5, "anchorX": 0.5, "align": "left" } }] }, { "type": "Image", "props": { "y": 376, "x": 317, "var": "img_prev", "skin": "dating_ui/tongyong/tu_jt.png", "scaleY": 0.8, "scaleX": -0.8, "left": 335, "centerY": 16, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "var": "img_next", "skin": "dating_ui/tongyong/tu_jt.png", "scaleY": 0.8, "scaleX": 0.8, "right": 60, "centerY": 13, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "width": 1044, "var": "box_btn_bottom", "left": 0, "height": 117, "bottom": 0, "anchorY": 1, "anchorX": 0 }, "child": [{ "type": "Button", "props": { "y": 65, "x": 773, "var": "btn_qukuan", "stateNum": 1, "skin": "dating_ui/dating/btn_duihuan.png", "name": "item7", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 65, "x": 263, "var": "btn_new", "stateNum": 1, "skin": "dating_ui/dating/btn_xinxi.png", "name": "item2", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 65, "x": 569, "var": "btn_kefu", "stateNum": 1, "skin": "dating_ui/dating/btn_kehu.png", "name": "item5", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 65, "x": 59, "var": "btn_vip", "stateNum": 1, "skin": "dating_ui/dating/btn_top.png", "name": "item0", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 65, "x": 365, "var": "btn_bxx", "stateNum": 1, "skin": "dating_ui/dating/btn_baoxian.png", "name": "item3", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 65, "x": 161, "var": "btn_gonggao", "stateNum": 1, "skin": "dating_ui/dating/btn_gonggao.png", "name": "item1", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 65, "x": 671, "var": "btn_fenxiang", "stateNum": 1, "skin": "dating_ui/dating/btn_fenxiang1.png", "name": "item6", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 65, "x": 467, "var": "btn_baobiao", "stateNum": 1, "skin": "dating_ui/dating/btn_baobiao.png", "name": "item4", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 65, "x": 875, "var": "btn_shezhi", "stateNum": 1, "skin": "dating_ui/dating/btn_shezhi.png", "name": "item8", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "width": 466, "var": "box_btn_top", "top": 0, "right": 0, "height": 92, "anchorY": 0, "anchorX": 1 }, "child": [{ "type": "Button", "props": { "y": 40, "x": 133, "var": "btn_tkzx", "stateNum": 1, "skin": "dating_ui/dating/btn_tuiguang.png", "name": "item3", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 40, "x": 40, "var": "btn_bdsq", "stateNum": 1, "skin": "dating_ui/dating/btn_bangding.png", "name": "item4", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 40, "x": 410, "var": "btn_yhhd", "stateNum": 1, "skin": "dating_ui/dating/btn_huodong.png", "name": "item0", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 40, "x": 318, "var": "btn_xyzp", "stateNum": 1, "skin": "dating_ui/dating/btn_zhuanpan.png", "name": "item1", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 40, "x": 225, "var": "btn_qd", "stateNum": 1, "skin": "dating_ui/dating/btn_qiandao.png", "name": "item2", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return DaTingUI;
        }(View));
        dating.DaTingUI = DaTingUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var DaTingGgUI = /** @class */ (function (_super) {
            __extends(DaTingGgUI, _super);
            function DaTingGgUI() {
                return _super.call(this) || this;
            }
            DaTingGgUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.DaTingGgUI.uiView);
            };
            DaTingGgUI.uiView = { "type": "View", "props": { "y": 0, "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 500, "var": "box_notice", "top": 87, "height": 46, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": -49, "width": 549, "var": "img_bg", "skin": "dating_ui/dating/tu_ggg.png", "sizeGrid": "0,40,0,40", "height": 45, "alpha": 0.5 } }, { "type": "Image", "props": { "y": 2, "x": -43, "skin": "dating_ui/dating/tu_lb.png" } }, { "type": "Box", "props": { "y": 0, "x": 1, "width": 499, "var": "panel", "height": 45 }, "child": [{ "type": "Panel", "props": { "y": 0, "x": -7, "width": 499, "height": 45 }, "child": [{ "type": "Label", "props": { "wordWrap": false, "width": 600, "var": "txt_label", "valign": "middle", "text": "推广员系统”劲爆来袭 ，一次推广永久受益，月入百万不是梦！", "height": 45, "fontSize": 24, "color": "#ffffff" } }] }] }] }] };
            return DaTingGgUI;
        }(View));
        dating.DaTingGgUI = DaTingGgUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var DengLuUI = /** @class */ (function (_super) {
            __extends(DengLuUI, _super);
            function DengLuUI() {
                return _super.call(this) || this;
            }
            DengLuUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.DengLuUI.uiView);
            };
            DengLuUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 1280, "height": 88, "centerX": 0, "bottom": 100, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Button", "props": { "y": 45, "x": 777, "var": "btn_denglu", "stateNum": 1, "skin": "dating_ui/denglu/btn_login.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 45, "x": 221, "var": "btn_youke", "stateNum": 1, "skin": "dating_ui/denglu/btn_login_visitor.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 45, "x": 499, "var": "btn_wx", "stateNum": 1, "skin": "dating_ui/denglu/btn_weixin.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 44, "x": 1055, "var": "btn_phone", "stateNum": 1, "skin": "dating_ui/denglu/btn_shouji.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return DengLuUI;
        }(View));
        dating.DengLuUI = DengLuUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var DengLuSJUI = /** @class */ (function (_super) {
            __extends(DengLuSJUI, _super);
            function DengLuSJUI() {
                return _super.call(this) || this;
            }
            DengLuSJUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.DengLuSJUI.uiView);
            };
            DengLuSJUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 787, "var": "box", "height": 531, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 395, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "100,60,150,50", "height": 531 } }, { "type": "Image", "props": { "y": 0, "x": 786, "width": 395, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "100,0,150,50", "scaleX": -1, "height": 531 } }, { "type": "Image", "props": { "y": 38, "x": 394, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 39, "skin": "dating_ui/denglu/tit_shoujiDL.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 455, "x": 580, "width": 84, "stroke": 1, "height": 24, "fontSize": 24, "color": "#fffbb5", "align": "right" } }, { "type": "Text", "props": { "y": 112, "x": 274, "width": 211, "height": 24, "fontSize": 24, "color": "#ffffff", "align": "left" } }, { "type": "Button", "props": { "y": 38, "x": 743, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 151, "x": 145, "width": 502, "skin": "dating_ui/denglu/tu_sj.png", "sizeGrid": "0,225,0,116", "height": 151 } }, { "type": "TextInput", "props": { "y": 160, "x": 213, "width": 372, "var": "txt_phone", "type": "text", "restrict": "0-9", "prompt": "请输入手机号…", "maxChars": 11, "height": 35, "fontSize": 26, "color": "#000000" } }, { "type": "TextInput", "props": { "y": 249, "x": 215, "width": 212, "var": "txt_code", "type": "text", "restrict": "0-9", "prompt": "请输入验证码…", "maxChars": 6, "height": 35, "fontSize": 26, "color": "#000000" } }, { "type": "Label", "props": { "y": 341, "width": 213, "text": "首次登录自动注册", "leading": 8, "height": 28, "fontSize": 26, "color": "#c8bc9f", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Button", "props": { "y": 456, "var": "btn_login", "stateNum": 1, "skin": "dating_ui/denglu/btn_dl.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 239, "x": 453, "var": "btn_get_code", "stateNum": 1, "skin": "dating_ui/tongyong/btn_get.png" } }, { "type": "Label", "props": { "y": 388, "width": 273, "var": "btn_tips", "underline": true, "text": "手机号可作为账号登录", "mouseEnabled": true, "leading": 8, "height": 32, "fontSize": 26, "color": "#29dd29", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] }] };
            return DengLuSJUI;
        }(View));
        dating.DengLuSJUI = DengLuSJUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var DengLuSJ1UI = /** @class */ (function (_super) {
            __extends(DengLuSJ1UI, _super);
            function DengLuSJ1UI() {
                return _super.call(this) || this;
            }
            DengLuSJ1UI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.DengLuSJ1UI.uiView);
            };
            DengLuSJ1UI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "y": 10, "x": 10, "width": 787, "var": "box", "height": 531, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 395, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "100,60,150,50", "height": 531 } }, { "type": "Image", "props": { "y": 0, "x": 786, "width": 395, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "100,0,150,50", "scaleX": -1, "height": 531 } }, { "type": "Image", "props": { "y": 38, "x": 394, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 39, "skin": "dating_ui/denglu/tit_shoujiBD.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 38, "x": 743, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 456, "var": "btn_bind", "stateNum": 1, "skin": "dating_ui/tongyong/btn_qd.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 159, "x": 139, "width": 502, "skin": "dating_ui/denglu/tu_sj1.png", "sizeGrid": "0,225,0,116", "height": 151 } }, { "type": "TextInput", "props": { "y": 168, "x": 207, "width": 372, "var": "txt_phone", "type": "text", "restrict": "0-9", "prompt": "请输入手机号…", "maxChars": 11, "height": 35, "fontSize": 26 } }, { "type": "TextInput", "props": { "y": 257, "x": 209, "width": 212, "var": "txt_code", "type": "text", "restrict": "0-9", "prompt": "请输入验证码…", "maxChars": 6, "height": 35, "fontSize": 26 } }, { "type": "Button", "props": { "y": 247, "x": 447, "var": "btn_get_code", "stateNum": 1, "skin": "dating_ui/tongyong/btn_get.png" } }] }] };
            return DengLuSJ1UI;
        }(View));
        dating.DengLuSJ1UI = DengLuSJ1UI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var DengLuZHUI = /** @class */ (function (_super) {
            __extends(DengLuZHUI, _super);
            function DengLuZHUI() {
                return _super.call(this) || this;
            }
            DengLuZHUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.DengLuZHUI.uiView);
            };
            DengLuZHUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 787, "var": "box", "height": 531, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 395, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "100,60,150,50", "height": 531 } }, { "type": "Image", "props": { "y": 0, "x": 786, "width": 395, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "100,0,150,50", "scaleX": -1, "height": 531 } }, { "type": "Image", "props": { "y": 38, "x": 394, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 37, "skin": "dating_ui/denglu/tit_zhanghaoDL.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 455, "x": 580, "width": 84, "stroke": 1, "height": 24, "fontSize": 24, "color": "#fffbb5", "align": "right" } }, { "type": "Text", "props": { "y": 112, "x": 274, "width": 211, "height": 24, "fontSize": 24, "color": "#ffffff", "align": "left" } }, { "type": "Image", "props": { "y": 151, "x": 145, "width": 502, "skin": "dating_ui/denglu/tu_zc.png", "sizeGrid": "0,28,0,116", "height": 151 } }, { "type": "TextInput", "props": { "y": 161, "x": 253, "width": 372, "var": "input_Name", "type": "text", "restrict": "A-Za-z0-9@", "prompt": "请输入账号或手机号…", "overflow": "hidden", "maxChars": 20, "height": 35, "fontSize": 26, "color": "#000000" } }, { "type": "TextInput", "props": { "y": 250, "x": 255, "width": 372, "var": "input_Key", "type": "text", "restrict": "0-9A-Za-z", "prompt": "请输入密码…", "overflow": "hidden", "maxChars": 20, "height": 35, "fontSize": 26, "color": "#000000" } }, { "type": "Button", "props": { "y": 456, "var": "btn_denglu", "stateNum": 1, "skin": "dating_ui/denglu/btn_dl.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 38, "x": 743, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return DengLuZHUI;
        }(View));
        dating.DengLuZHUI = DengLuZHUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var DengLuZH1UI = /** @class */ (function (_super) {
            __extends(DengLuZH1UI, _super);
            function DengLuZH1UI() {
                return _super.call(this) || this;
            }
            DengLuZH1UI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.DengLuZH1UI.uiView);
            };
            DengLuZH1UI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 787, "var": "box", "height": 531, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 395, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "100,60,150,50", "height": 531 } }, { "type": "Image", "props": { "y": 0, "x": 786, "width": 395, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "100,0,150,50", "scaleX": -1, "height": 531 } }, { "type": "Image", "props": { "y": 38, "x": 394, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 37, "skin": "dating_ui/denglu/tit_zhanghaoBD.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 455, "x": 580, "width": 84, "stroke": 1, "height": 24, "fontSize": 24, "color": "#fffbb5", "align": "right" } }, { "type": "Text", "props": { "y": 122, "x": 274, "width": 211, "height": 24, "fontSize": 24, "color": "#ffffff", "align": "left" } }, { "type": "Button", "props": { "y": 38, "x": 743, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 121, "x": 145, "width": 502, "skin": "dating_ui/denglu/tu_zc1.png", "sizeGrid": "0,28,0,116" } }, { "type": "TextInput", "props": { "y": 131, "x": 253, "width": 372, "var": "txt_account", "type": "text", "restrict": "A-Za-z0-9", "prompt": "请输入账号…", "overflow": "hidden", "maxChars": 10, "height": 35, "fontSize": 26, "color": "#000000" } }, { "type": "TextInput", "props": { "y": 220, "x": 255, "width": 372, "var": "txt_mima", "type": "text", "restrict": "0-9A-Za-z", "prompt": "请输入密码…", "overflow": "hidden", "maxChars": 20, "height": 35, "fontSize": 26, "color": "#000000" } }, { "type": "Button", "props": { "y": 456, "var": "btn_bind", "stateNum": 1, "skin": "dating_ui/tongyong/btn_qd.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "TextInput", "props": { "y": 310, "x": 255, "width": 372, "var": "txt_qrxmm", "type": "text", "restrict": "0-9A-Za-z", "prompt": "请输入密码…", "overflow": "hidden", "maxChars": 20, "height": 35, "fontSize": 26, "color": "#000000" } }] }] };
            return DengLuZH1UI;
        }(View));
        dating.DengLuZH1UI = DengLuZH1UI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var FenXiangUI = /** @class */ (function (_super) {
            __extends(FenXiangUI, _super);
            function FenXiangUI() {
                return _super.call(this) || this;
            }
            FenXiangUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.FenXiangUI.uiView);
            };
            FenXiangUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 787, "height": 446, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "skin": "dating_ui/fenxiang/tu_fx.png", "centerY": -40, "centerX": 0 } }, { "type": "Button", "props": { "y": 375, "x": 383, "var": "btn_wxhy", "stateNum": 1, "skin": "dating_ui/fenxiang/btn_fenxiang1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 375, "x": 687, "var": "btn_fxq", "stateNum": 1, "skin": "dating_ui/fenxiang/btn_fenxiang2.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 255, "x": 619, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 100, "x": 199, "var": "img_yuan", "skin": "dating_ui/fenxiang/tu_yuan.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Clip", "props": { "y": 47, "x": 33, "var": "clip_money", "skin": "dating_ui/fenxiang/clip_yuan.png", "index": 1, "clipX": 10 } }] }, { "type": "Button", "props": { "y": 31, "x": 834, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return FenXiangUI;
        }(View));
        dating.FenXiangUI = FenXiangUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var FenXiang1UI = /** @class */ (function (_super) {
            __extends(FenXiang1UI, _super);
            function FenXiang1UI() {
                return _super.call(this) || this;
            }
            FenXiang1UI.prototype.createChildren = function () {
                View.regComponent("ui.dating.component.FenXiangTUI", ui.dating.component.FenXiangTUI);
                View.regComponent("ui.dating.component.FenXiangT4UI", ui.dating.component.FenXiangT4UI);
                View.regComponent("ui.dating.component.FenXiangT3UI", ui.dating.component.FenXiangT3UI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.FenXiang1UI.uiView);
            };
            FenXiang1UI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 1124, "height": 531, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "width": 395, "skin": "dating_ui/tongyong/tu_bk2.png" } }, { "type": "Image", "props": { "y": 0, "x": 785, "width": 395, "skin": "dating_ui/tongyong/tu_bk1.png", "scaleX": -1 } }, { "type": "Image", "props": { "y": 34, "x": 384, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": -178, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 37, "x": 394, "skin": "dating_ui/fenxiang/tit_tuiguang.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 70, "x": 188, "width": 580, "var": "box0", "height": 406 }, "child": [{ "type": "Image", "props": { "y": 35, "x": 0, "width": 580, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11" } }, { "type": "Image", "props": { "y": 21, "x": 88, "skin": "dating_ui/fenxiang/bb_yh.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 21, "x": 265, "skin": "dating_ui/fenxiang/bb_dqjl.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 21, "x": 469, "skin": "dating_ui/fenxiang/bb_dlsj.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "List", "props": { "y": 37, "x": 0, "width": 579, "visible": false, "var": "list0", "height": 364, "cacheAsBitmap": true, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "FenXiangT", "props": { "renderType": "render", "runtime": "ui.dating.component.FenXiangTUI" } }] }, { "type": "Box", "props": { "y": 204, "x": 293, "width": 323, "var": "box_no_0", "height": 178, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 150.5, "wordWrap": true, "width": 329, "text": "暂时没有记录，快去分享给好友吧！", "height": 22, "fontSize": 20, "color": "#efda8b", "align": "center" } }, { "type": "Image", "props": { "y": 68.5, "x": 162, "skin": "dating_ui/fenxiang/tu_hb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] }, { "type": "Box", "props": { "y": 70, "x": 188, "width": 580, "var": "box1", "height": 406 }, "child": [{ "type": "Image", "props": { "y": 35, "x": 0, "width": 580, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11" } }, { "type": "Image", "props": { "y": 21, "x": 82, "skin": "dating_ui/fenxiang/bb_yh.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 21, "x": 502, "skin": "dating_ui/fenxiang/bb_zdyj.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 21, "x": 355, "skin": "dating_ui/fenxiang/bb_qdyj.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 21, "x": 214, "skin": "dating_ui/fenxiang/bb_yj.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "List", "props": { "y": 38, "x": 0, "width": 579, "visible": false, "var": "list1", "height": 364 }, "child": [{ "type": "FenXiangT4", "props": { "renderType": "render", "runtime": "ui.dating.component.FenXiangT4UI" } }] }, { "type": "Box", "props": { "y": 204, "x": 293, "width": 323, "var": "box_no_1", "height": 178, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 150.5, "wordWrap": true, "width": 329, "text": "暂时没有记录，快去分享给好友吧！", "height": 22, "fontSize": 20, "color": "#696291", "align": "center" } }, { "type": "Image", "props": { "y": 68.5, "x": 162, "skin": "dating_ui/fenxiang/tu_hb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] }, { "type": "Box", "props": { "y": 70, "x": 188, "width": 580, "var": "box2", "height": 406 }, "child": [{ "type": "Image", "props": { "y": 35, "x": 0, "width": 580, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11" } }, { "type": "Image", "props": { "y": 20, "x": 61, "skin": "dating_ui/fenxiang/bb_je.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 21, "x": 185, "skin": "dating_ui/fenxiang/bb_lx.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 21, "x": 469, "skin": "dating_ui/fenxiang/bb_sj.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 21, "x": 308, "skin": "dating_ui/fenxiang/bb_ly.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "List", "props": { "y": 38, "x": 0, "width": 579, "visible": false, "var": "list2", "height": 364, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "FenXiangT3", "props": { "renderType": "render", "runtime": "ui.dating.component.FenXiangT3UI" } }] }, { "type": "Box", "props": { "y": 204, "x": 293, "width": 323, "var": "box_no_2", "height": 178, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 150.5, "wordWrap": true, "width": 329, "text": "当前还未领取过奖励哦！", "height": 22, "fontSize": 20, "color": "#efda8b", "align": "center" } }, { "type": "Image", "props": { "y": 68.5, "x": 162, "skin": "dating_ui/fenxiang/tu_hb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] }, { "type": "Box", "props": { "y": 70, "x": 188, "width": 577, "var": "box3", "height": 407 }, "child": [{ "type": "Label", "props": { "y": 390, "x": 4, "wordWrap": true, "width": 558, "text": "*官方拥有一切活动解释权。", "leading": 4, "height": 23, "fontSize": 20, "color": "#fced00", "align": "left" } }, { "type": "Box", "props": { "y": 5, "x": 5, "width": 569, "height": 38, "alpha": 0.5 }, "child": [{ "type": "Image", "props": { "skin": "dating_ui/fenxiang/tu_btd.png" } }, { "type": "Image", "props": { "x": 564, "skin": "dating_ui/fenxiang/tu_btd.png", "scaleX": -1 } }] }, { "type": "Label", "props": { "y": 53, "x": 4, "wordWrap": true, "width": 561, "text": "1．您的好友通过扫描“浏览器专属二维码”，下载注册游戏并登   录成功，即可获得游戏奖励。 \\n2．点击”分享好友“进行分享，好友下载注册游戏并登录成功， 即可获得游戏奖励。", "leading": 8, "height": 112, "fontSize": 20, "color": "#c8bc9f", "align": "left" } }, { "type": "Box", "props": { "y": 178, "x": 5, "width": 569, "height": 38, "alpha": 0.5 }, "child": [{ "type": "Image", "props": { "skin": "dating_ui/fenxiang/tu_btd.png" } }, { "type": "Image", "props": { "x": 564, "skin": "dating_ui/fenxiang/tu_btd.png", "scaleX": -1 } }] }, { "type": "Label", "props": { "y": 226, "x": 4, "wordWrap": true, "width": 563, "text": "1．邀请好友即可获得20元基础奖励，好友在游戏中有任何下注行为，您都可获得0.5%奖励;单个好友奖励满88元后，即可领取该好友产出的任意奖励。 \\n2．活动奖励上不封顶，下注越多,奖励越多,如未满足条件则无法领取。", "leading": 8, "height": 142, "fontSize": 20, "color": "#c8bc9f", "align": "left" } }, { "type": "Label", "props": { "y": 12, "x": 8, "wordWrap": true, "width": 561, "text": "分享方法", "leading": 8, "height": 28, "fontSize": 24, "color": "#fffcc7", "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 184, "x": 8, "wordWrap": true, "width": 561, "text": "奖励说明", "leading": 8, "height": 28, "fontSize": 24, "color": "#fffcc7", "bold": true, "align": "center" } }] }, { "type": "Tab", "props": { "y": 72, "x": 14, "width": 161, "var": "tab", "selectedIndex": -1, "height": 260 }, "child": [{ "type": "Button", "props": { "stateNum": 2, "skin": "dating_ui/fenxiang/btn_wdfx.png", "name": "item0" } }, { "type": "Button", "props": { "y": 66, "x": 0, "stateNum": 2, "skin": "dating_ui/fenxiang/btn_jlmx.png", "name": "item1" } }, { "type": "Button", "props": { "y": 131, "x": 0, "stateNum": 2, "skin": "dating_ui/fenxiang/btn_jljl.png", "name": "item2" } }, { "type": "Button", "props": { "y": 197, "x": 0, "stateNum": 2, "skin": "dating_ui/fenxiang/btn_gzjx.png", "name": "item3" } }] }, { "type": "Box", "props": { "y": -114, "x": 776, "width": 375, "height": 671 }, "child": [{ "type": "Image", "props": { "y": 95, "x": 23, "width": 351, "skin": "dating_ui/fenxiang/tu_qz.png", "sizeGrid": "128,0,168,0", "height": 576 } }, { "type": "Image", "props": { "y": 160, "x": 186, "skin": "dating_ui/fenxiang/tu_mm.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 332, "x": 183, "var": "btn_join", "stateNum": 1, "skin": "dating_ui/fenxiang/btn_jr.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 448, "x": 186, "width": 372, "skin": "dating_ui/fenxiang/tu_qz1.png", "height": 178, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 504, "x": 79, "wordWrap": true, "width": 97, "text": "可领取：", "leading": 8, "height": 27, "fontSize": 24, "color": "#ffffff", "align": "left" } }, { "type": "Label", "props": { "y": 504, "x": 169, "wordWrap": true, "width": 130, "var": "txt_klq", "text": "000000.00", "leading": 8, "height": 27, "fontSize": 26, "color": "#fff1a6", "align": "left" } }, { "type": "Button", "props": { "y": 578, "x": 187, "var": "btn_lq", "stateNum": 1, "skin": "dating_ui/fenxiang/btn_ljlq.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 439, "x": 77, "width": 219, "var": "box_record", "height": 35 }, "child": [{ "type": "Clip", "props": { "var": "clip_record", "skin": "dating_ui/fenxiang/clip_dqjj.png", "clipX": 11, "centerY": 0, "centerX": 0 } }] }] }, { "type": "Button", "props": { "y": 39, "x": 744, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return FenXiang1UI;
        }(View));
        dating.FenXiang1UI = FenXiang1UI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var GeRenUI = /** @class */ (function (_super) {
            __extends(GeRenUI, _super);
            function GeRenUI() {
                return _super.call(this) || this;
            }
            GeRenUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.GeRenUI.uiView);
            };
            GeRenUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 795, "var": "box", "scaleY": 1.25, "scaleX": 1.25, "height": 531, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "width": 400, "skin": "dating_ui/tongyong/tu_bk2.png" } }, { "type": "Image", "props": { "y": 0, "x": 794, "width": 400, "skin": "dating_ui/tongyong/tu_bk1.png", "scaleX": -1 } }, { "type": "Image", "props": { "y": 31, "x": 398, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 35, "x": 398, "skin": "dating_ui/geren/tit_grzx.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 70, "x": 185, "width": 592, "var": "box0", "height": 420 }, "child": [{ "type": "Image", "props": { "width": 3, "top": -126, "skin": "dating_ui/geren/tu_b.png", "scaleY": 1.9, "scaleX": 1, "rotation": 90, "left": 299, "height": 300, "anchorY": 0.5, "alpha": 0.1 } }, { "type": "Image", "props": { "y": 17, "x": 21, "skin": "dating_ui/tongyong/tu_txk.png" } }, { "type": "Image", "props": { "y": 56, "x": 60, "var": "img_head", "skin": "dating_ui/touxiang/head_5.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 51, "x": 60, "var": "img_txk", "skin": "dating_ui/touxiang/tu_v1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 125, "width": 190, "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "0,27,0,24", "height": 40, "centerX": 19, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 79, "width": 191, "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "0,27,0,24", "height": 40, "centerX": 19, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 122, "x": 243, "skin": "dating_ui/tongyong/icon_money.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 113, "x": 120, "width": 100, "text": "金　额：", "height": 24, "fontSize": 22, "color": "#c8bc9f", "align": "right" } }, { "type": "Text", "props": { "y": 65, "x": 120, "width": 100, "text": "用户ID：", "height": 24, "fontSize": 22, "color": "#c8bc9f", "align": "right" } }, { "type": "Text", "props": { "y": 65, "x": 237, "width": 166, "var": "txt_id", "height": 24, "fontSize": 24, "color": "#f8ea5e", "align": "left" } }, { "type": "Text", "props": { "y": 111, "x": 265, "width": 135, "var": "txt_money", "height": 24, "fontSize": 24, "color": "#f8ea5e", "align": "left" } }, { "type": "Button", "props": { "y": 76, "x": 498, "var": "btn_copy", "stateNum": 1, "skin": "dating_ui/geren/btn_fz1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 123, "x": 60, "var": "btn_head", "stateNum": 1, "skin": "dating_ui/geren/btn_xgtx.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 33, "width": 191, "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,20,16,24", "height": 40, "centerX": 18, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 19, "x": 120, "width": 100, "text": "昵　称：", "height": 24, "fontSize": 22, "color": "#c8bc9f", "align": "right" } }, { "type": "Text", "props": { "y": 19, "x": 237, "width": 166, "var": "txt_nickname", "overflow": "hidden", "height": 24, "fontSize": 24, "color": "#f8ea5e", "align": "left" } }, { "type": "Button", "props": { "y": 31, "x": 498, "var": "btn_changge_nc", "stateNum": 1, "skin": "dating_ui/geren/btn_xg1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 173, "x": 23, "var": "box_items" }, "child": [{ "type": "Box", "props": { "width": 570, "var": "box_wx", "name": "item0", "height": 39 }, "child": [{ "type": "Image", "props": { "y": 18.5, "x": 262, "width": 250, "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "0,27,0,24", "height": 40, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 6.5, "width": 135, "text": "微信号：", "height": 24, "fontSize": 22, "color": "#c8bc9f", "align": "right" } }, { "type": "Text", "props": { "y": 6.5, "x": 152, "width": 220, "var": "txt_wx", "height": 24, "fontSize": 24, "color": "#f8ea5e", "align": "left" } }, { "type": "Button", "props": { "y": 20.5, "x": 477, "var": "btn_bindwx", "stateNum": 1, "skin": "dating_ui/geren/btn_bd3.png", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 48, "width": 570, "var": "box_zh", "name": "item1", "height": 43 }, "child": [{ "type": "Image", "props": { "y": 20.5, "x": 262, "width": 250, "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "0,27,0,24", "height": 40, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 13.5, "width": 135, "text": "账　号：", "height": 24, "fontSize": 22, "color": "#c8bc9f", "align": "right" } }, { "type": "Text", "props": { "y": 7.5, "x": 152, "width": 220, "var": "txt_account", "height": 24, "fontSize": 24, "color": "#f8ea5e", "align": "left" } }, { "type": "Button", "props": { "y": 20.5, "x": 477, "var": "btn_bind_account", "stateNum": 1, "skin": "dating_ui/geren/btn_bd3.png", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 96, "width": 570, "var": "box_mobile", "name": "item2", "height": 44 }, "child": [{ "type": "Image", "props": { "y": 20.5, "x": 262, "width": 250, "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "0,27,0,24", "height": 40, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 11.5, "width": 135, "text": "手机号：", "height": 24, "fontSize": 22, "color": "#c8bc9f", "align": "right" } }, { "type": "Text", "props": { "y": 7.5, "x": 152, "width": 220, "var": "txt_phone", "height": 24, "fontSize": 24, "color": "#f8ea5e", "align": "left" } }, { "type": "Button", "props": { "y": 20.5, "x": 477, "var": "btn_bind_phone", "stateNum": 1, "skin": "dating_ui/geren/btn_bd3.png", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 144, "width": 570, "var": "box_yhk", "name": "item3", "height": 43 }, "child": [{ "type": "Image", "props": { "y": 20.5, "x": 262, "width": 250, "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "0,27,0,24", "height": 40, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 11.5, "width": 135, "text": "银行卡：", "height": 24, "fontSize": 22, "color": "#c8bc9f", "align": "right" } }, { "type": "Text", "props": { "y": 8.5, "x": 152, "width": 220, "var": "txt_yhk", "height": 24, "fontSize": 24, "color": "#f8ea5e", "align": "left" } }, { "type": "Button", "props": { "y": 20.5, "x": 477, "var": "btn_bingyhk", "stateNum": 1, "skin": "dating_ui/geren/btn_bd3.png", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 192, "width": 570, "visible": false, "var": "box_zfb", "name": "item4", "height": 42 }, "child": [{ "type": "Image", "props": { "y": 20.5, "x": 262, "width": 250, "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "0,27,0,24", "height": 40, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 8.5, "width": 135, "text": "支付宝：", "height": 24, "fontSize": 22, "color": "#c8bc9f", "align": "right" } }, { "type": "Text", "props": { "y": 8.5, "x": 152, "width": 220, "var": "txt_zfb", "height": 24, "fontSize": 24, "color": "#f8ea5e", "align": "left" } }, { "type": "Button", "props": { "y": 20.5, "x": 477, "var": "btn_bindzfb", "stateNum": 1, "skin": "dating_ui/geren/btn_bd3.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] }, { "type": "Button", "props": { "y": 101, "x": 428, "width": 140, "var": "btn_vip", "stateNum": 1, "skin": "dating_ui/geren/btn_hy.png", "height": 46 } }] }, { "type": "Box", "props": { "y": 70, "x": 185, "width": 592, "var": "box1", "height": 420 }, "child": [{ "type": "Text", "props": { "y": 224, "x": 74, "width": 154, "var": "txt_qxmm", "text": "确认新密码：", "height": 24, "fontSize": 24, "color": "#fffbb5", "align": "right" } }, { "type": "Text", "props": { "y": 165.5, "x": 93, "width": 135, "var": "txt_xmm", "text": "新密码：", "height": 24, "fontSize": 24, "color": "#fffbb5", "align": "right" } }, { "type": "Text", "props": { "y": 103, "x": 40, "width": 188, "var": "txt_jmm", "text": "旧密码：", "height": 24, "fontSize": 24, "color": "#fffbb5", "align": "right" } }, { "type": "Button", "props": { "y": 345, "var": "btn_xiugai", "stateNum": 1, "skin": "dating_ui/geren/btn_xg.png", "centerX": 5, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 115, "x": 398, "width": 297, "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 175, "x": 398, "width": 297, "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 235, "x": 398, "width": 297, "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "TextInput", "props": { "y": 97, "x": 265, "width": 282, "var": "input_jmm", "type": "password", "restrict": "0-9A-Za-z", "promptColor": "#777777", "prompt": "请输入", "maxChars": 10, "height": 35, "fontSize": 24, "color": "#f8ea5e", "align": "left" } }, { "type": "TextInput", "props": { "y": 157, "x": 265, "width": 282, "var": "input_xmm", "type": "password", "restrict": "0-9A-Za-z", "promptColor": "#777777", "prompt": "请输入6至10英文/数字", "maxChars": 10, "height": 35, "fontSize": 24, "color": "#f8ea5e", "align": "left" } }, { "type": "TextInput", "props": { "y": 218, "x": 265, "width": 282, "var": "input_qxmm", "type": "password", "restrict": "0-9A-Za-z", "promptColor": "#777777", "prompt": "请输入6至10英文/数字", "maxChars": 10, "height": 35, "fontSize": 24, "color": "#f8ea5e", "align": "left" } }] }, { "type": "Box", "props": { "y": 67, "x": 197, "width": 580, "var": "box2", "height": 420 }, "child": [{ "type": "Text", "props": { "y": 132, "x": 57, "width": 84, "text": "音效：", "height": 24, "fontSize": 24, "color": "#c8bc9f", "align": "right" } }, { "type": "Text", "props": { "y": 211, "x": 57, "width": 84, "text": "音乐：", "height": 24, "fontSize": 24, "color": "#c8bc9f", "align": "right" } }, { "type": "HSlider", "props": { "y": 131, "x": 137, "width": 374, "var": "hslider0", "value": 50, "tick": 1, "skin": "dating_ui/tongyong/hslider.png", "sizeGrid": "0,20,0,21", "showLabel": false, "min": 0, "max": 100, "height": 31, "allowClickBack": true } }, { "type": "HSlider", "props": { "y": 209, "x": 137, "width": 374, "var": "hslider1", "value": 10, "tick": 1, "skin": "dating_ui/tongyong/hslider.png", "sizeGrid": "0,20,0,21", "showLabel": false, "min": 0, "max": 100, "height": 31, "allowClickBack": true } }, { "type": "Button", "props": { "y": 336, "x": 288, "var": "btn_change", "stateNum": 1, "skin": "dating_ui/shezhi/btn_qh.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "width": 320, "var": "box_vesion", "top": 10, "right": 10, "height": 18 }, "child": [{ "type": "Box", "props": { "y": 1, "x": 0, "var": "box_app" }, "child": [{ "type": "Label", "props": { "y": 0, "x": 120, "width": 49, "var": "txt_appbbh", "underlineColor": "#00ff00", "text": 1.4, "height": 18, "fontSize": 18, "color": "#efda8b", "align": "left" } }, { "type": "Label", "props": { "y": 0, "x": 0, "wordWrap": true, "width": 120, "underlineColor": "#00ff00", "text": "App版本号：", "height": 18, "fontSize": 18, "color": "#efda8b", "align": "right" } }] }, { "type": "Box", "props": { "y": 0, "x": 116, "width": 201, "var": "box_v", "height": 18 }, "child": [{ "type": "Label", "props": { "wordWrap": true, "width": 120, "underlineColor": "#00ff00", "text": "版本号：", "height": 18, "fontSize": 18, "color": "#efda8b", "align": "right" } }, { "type": "Label", "props": { "x": 120, "width": 49, "var": "txt_bbh", "underlineColor": "#00ff00", "text": "1.4.0.000", "height": 18, "fontSize": 18, "color": "#efda8b", "align": "left" } }] }] }, { "type": "Button", "props": { "y": 358, "x": 508, "var": "btn_clear", "stateNum": 1, "skin": "dating_ui/shezhi/btn_ql.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 308, "x": 508, "var": "btn_check", "stateNum": 1, "skin": "dating_ui/shezhi/btn_gx.png", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 79, "x": 191, "width": 580, "var": "box3", "height": 400 }, "child": [{ "type": "Text", "props": { "y": 78, "x": 0, "width": 158, "text": "验证码：", "height": 24, "fontSize": 24, "color": "#fffbb5", "align": "right" } }, { "type": "Text", "props": { "y": 20, "x": 23, "width": 135, "text": "手机号：", "height": 24, "fontSize": 24, "color": "#fffbb5", "align": "right" } }, { "type": "Label", "props": { "y": 249, "x": 71, "wordWrap": true, "width": 371, "underlineColor": "#28ff00", "text": "手机号是您找回密码的凭证", "leading": 4, "height": 24, "fontSize": 20, "color": "#ffffff", "align": "left" } }, { "type": "Image", "props": { "y": 261, "x": 52, "skin": "dating_ui/tongyong/tu_gth.png", "scaleY": 0.8, "scaleX": 0.8, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 135, "x": 0, "width": 158, "text": "密码：", "height": 24, "fontSize": 24, "color": "#fffbb5", "align": "right" } }, { "type": "Text", "props": { "y": 18, "x": 175, "width": 211, "height": 24, "fontSize": 24, "color": "#ffffff", "align": "left" } }, { "type": "Text", "props": { "y": 192, "x": 0, "width": 158, "text": "确认密码：", "height": 24, "fontSize": 24, "color": "#fffbb5", "align": "right" } }, { "type": "Button", "props": { "y": 337, "var": "btn_resetmm", "stateNum": 1, "skin": "dating_ui/geren/btn_czmm.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "TextInput", "props": { "y": 37, "x": 160, "width": 390, "var": "txt_shouji", "type": "text", "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25", "restrict": "0-9", "promptColor": "#777777", "prompt": "仅限中国大陆地区手机号", "padding": "-1,0,0,16", "maxChars": 11, "height": 50, "fontSize": 24, "editable": false, "color": "#f8ea5e", "anchorY": 0.5, "anchorX": 0, "align": "left" } }, { "type": "Button", "props": { "y": 94, "x": 458, "var": "btn_get_code", "stateNum": 1, "skin": "dating_ui/tongyong/btn_get.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 189, "x": 160, "width": 390, "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25" } }, { "type": "Image", "props": { "y": 129, "x": 160, "width": 390, "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25" } }, { "type": "Image", "props": { "y": 69, "x": 160, "width": 191, "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25" } }, { "type": "TextInput", "props": { "y": 76, "x": 173, "width": 172, "var": "txt_code", "type": "text", "restrict": "0-9", "promptColor": "#777777", "prompt": "请输入验证码", "maxChars": 6, "height": 35, "fontSize": 24, "color": "#f8ea5e", "align": "left" } }, { "type": "TextInput", "props": { "y": 137, "x": 174, "width": 376, "var": "txt_mima", "type": "password", "restrict": "0-9A-Za-z", "promptColor": "#777777", "prompt": "请输入6至10英文/数字", "height": 35, "fontSize": 24, "color": "#f8ea5e", "align": "left" } }, { "type": "TextInput", "props": { "y": 195, "x": 174, "width": 376, "var": "txt_mima2", "type": "password", "restrict": "0-9A-Za-z", "promptColor": "#777777", "prompt": "请输入6至10英文/数字", "height": 35, "fontSize": 24, "color": "#f8ea5e", "align": "left" } }] }, { "type": "Tab", "props": { "y": 72, "x": 16, "width": 163, "var": "tab", "selectedIndex": -1, "height": 409 }, "child": [{ "type": "Button", "props": { "y": 29, "x": 87.5, "stateNum": 2, "skin": "dating_ui/geren/btn_xx1.png", "name": "item0", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 94, "x": 87, "stateNum": 2, "skin": "dating_ui/geren/btn_xx2.png", "name": "item1", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 160, "x": 87, "stateNum": 2, "skin": "dating_ui/geren/btn_xx4.png", "name": "item2", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 225, "x": 87.5, "stateNum": 2, "skin": "dating_ui/geren/btn_xx3.png", "name": "item3", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 290, "x": 87, "stateNum": 2, "skin": "dating_ui/geren/btn_sz.png", "name": "item4", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Button", "props": { "y": 38, "x": 746, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return GeRenUI;
        }(View));
        dating.GeRenUI = GeRenUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var GeRenNCUI = /** @class */ (function (_super) {
            __extends(GeRenNCUI, _super);
            function GeRenNCUI() {
                return _super.call(this) || this;
            }
            GeRenNCUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.GeRenNCUI.uiView);
            };
            GeRenNCUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 608, "var": "box", "scaleY": 1.25, "scaleX": 1.25, "height": 358, "centerY": 0, "centerX": 4, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 304, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "100,0,150,0", "height": 380 } }, { "type": "Image", "props": { "x": 604, "width": 304, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "100,0,150,0", "scaleX": -1, "height": 380 } }, { "type": "Image", "props": { "y": 38, "x": 304, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 39, "x": 304, "skin": "dating_ui/geren/tit_ggnc.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 145, "x": 304, "width": 462, "skin": "dating_ui/geren/tu_nc.png", "sizeGrid": "0,25,0,123", "height": 60, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 225, "x": 38, "wordWrap": true, "width": 530, "var": "txt_label", "valign": "middle", "text": "昵称仅限更改一次", "leading": 10, "height": 23, "fontSize": 20, "color": "#c8bc9f", "align": "center" } }, { "type": "Button", "props": { "y": 143, "x": 502, "var": "btn_clear", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 303, "x": 459, "var": "btn_enter", "stateNum": 1, "skin": "dating_ui/tongyong/btn_qd.png", "right": 30, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 303, "x": 150, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_qx.png", "left": 30, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "TextInput", "props": { "y": 124, "x": 135, "width": 334, "var": "txt_name", "type": "text", "restrict": "\\u4e00-\\u9fa5A-Za-z0-9", "prompt": "最多6个汉字或10个英文数字", "overflow": "hidden", "maxChars": 10, "height": 35, "fontSize": 24, "color": "#000000" } }] }] };
            return GeRenNCUI;
        }(View));
        dating.GeRenNCUI = GeRenNCUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var GMPageUI = /** @class */ (function (_super) {
            __extends(GMPageUI, _super);
            function GMPageUI() {
                return _super.call(this) || this;
            }
            GMPageUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.GMPageUI.uiView);
            };
            GMPageUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 784, "var": "box_gm", "height": 56, "centerY": 0, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 1.5, "width": 611, "skin": "dating_ui/tongyong/tu_di8.png", "sizeGrid": "10,10,10,10", "height": 45, "alpha": 0.6 } }, { "type": "TextInput", "props": { "y": 7.5, "x": 18, "width": 582, "var": "txt_gm", "valign": "middle", "promptColor": "#8b8b8b", "prompt": "GM命令调试", "height": 37, "fontSize": 20, "color": "#ffffff", "align": "left" } }, { "type": "Button", "props": { "y": 29, "x": 702, "width": 154, "var": "btn_send", "stateNum": 1, "skin": "dating_ui/tongyong/btn_qd.png", "labelSize": 22, "labelPadding": "15,,,40", "labelFont": "SimHei", "labelColors": "#ffffff", "labelBold": true, "height": 64, "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return GMPageUI;
        }(View));
        dating.GMPageUI = GMPageUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var GongGaoUI = /** @class */ (function (_super) {
            __extends(GongGaoUI, _super);
            function GongGaoUI() {
                return _super.call(this) || this;
            }
            GongGaoUI.prototype.createChildren = function () {
                View.regComponent("ui.dating.component.TabItemRenderUI", ui.dating.component.TabItemRenderUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.GongGaoUI.uiView);
            };
            GongGaoUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 787, "scaleY": 1.25, "scaleX": 1.25, "height": 531, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 1, "skin": "dating_ui/tongyong/tu_bk2.png" } }, { "type": "Image", "props": { "y": 0, "x": 785, "skin": "dating_ui/tongyong/tu_bk1.png", "scaleX": -1 } }, { "type": "Tab", "props": { "y": 47, "x": 394, "width": 222, "var": "tab", "height": 20, "direction": "horizontal", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Button", "props": { "y": -3, "x": 0, "stateNum": 3, "skin": "dating_ui/tongyong/btn_n.png", "name": "item0", "labelStrokeColor": "#32291f", "labelStroke": 2, "labelSize": 26, "labelFont": "SimHei", "labelColors": "#9a8c70,#fdf5dc,#fdf5dc", "label": "热门活动", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": -3, "x": 221, "stateNum": 3, "skin": "dating_ui/tongyong/btn_l.png", "name": "item1", "labelStrokeColor": "32291f", "labelStroke": 2, "labelSize": 26, "labelFont": "SimHei", "labelColors": "#9a8c70,#fdf5dc,#fdf5dc", "label": "游戏公告", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "List", "props": { "y": 72, "x": 14, "width": 175, "var": "list", "spaceY": 10, "height": 409 }, "child": [{ "type": "TabItemRender", "props": { "y": 0, "x": 0, "renderType": "render", "runtime": "ui.dating.component.TabItemRenderUI" } }] }, { "type": "Box", "props": { "y": 78, "x": 190, "var": "box0" }, "child": [{ "type": "Image", "props": { "width": 573, "var": "img0", "height": 398 } }] }, { "type": "Box", "props": { "y": 78, "x": 190, "var": "box1" }, "child": [{ "type": "Box", "props": { "width": 576, "var": "item0", "height": 398 }, "child": [{ "type": "Image", "props": { "skin": "dating_ui/gonggao/tu_xybz.png" } }, { "type": "Image", "props": { "y": 35, "x": 357, "skin": "ui/logo/logo595.png", "scaleY": 0.4, "scaleX": 0.4, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 342, "x": 373, "skin": "ui/logo/tu_wz1.png", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": -15, "x": 2, "var": "item2", "skin": "dating_ui/gonggao/gg2.png" } }, { "type": "Image", "props": { "y": -3, "x": 2, "var": "item1", "skin": "dating_ui/gonggao/gg1.png" } }] }, { "type": "Button", "props": { "y": 38, "x": 743, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return GongGaoUI;
        }(View));
        dating.GongGaoUI = GongGaoUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var GuanWangUI = /** @class */ (function (_super) {
            __extends(GuanWangUI, _super);
            function GuanWangUI() {
                return _super.call(this) || this;
            }
            GuanWangUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.GuanWangUI.uiView);
            };
            GuanWangUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 605, "height": 402, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 304, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "100,0,150,0", "height": 420 } }, { "type": "Image", "props": { "x": 604, "width": 304, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "100,0,150,0", "scaleX": -1, "height": 420 } }, { "type": "Image", "props": { "y": 38, "x": 303, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 39, "x": 304, "skin": "dating_ui/guanwang/tit_guanwang.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 345, "x": 303, "var": "btn_copy", "stateNum": 1, "skin": "dating_ui/guanwang/btn_fzwz.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 37, "x": 561, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 78, "x": 23, "var": "img_guanwang", "skin": "dating_ui/guanwang/tu_gw.png" }, "child": [{ "type": "Image", "props": { "y": 69, "x": 370, "skin": "ui/logo/logo595.png", "scaleY": 0.6, "scaleX": 0.6, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 182, "x": 373, "skin": "ui/logo/logo_wz.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] }] };
            return GuanWangUI;
        }(View));
        dating.GuanWangUI = GuanWangUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var HuoDeUI = /** @class */ (function (_super) {
            __extends(HuoDeUI, _super);
            function HuoDeUI() {
                return _super.call(this) || this;
            }
            HuoDeUI.prototype.createChildren = function () {
                View.regComponent("ui.dating.component.XingUI", ui.dating.component.XingUI);
                View.regComponent("ui.dating.component.Xing1UI", ui.dating.component.Xing1UI);
                View.regComponent("ui.dating.component.Xing2UI", ui.dating.component.Xing2UI);
                View.regComponent("ui.dating.component.Guang1UI", ui.dating.component.Guang1UI);
                View.regComponent("ui.dating.component.Guang2UI", ui.dating.component.Guang2UI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.HuoDeUI.uiView);
            };
            HuoDeUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 1355, "height": 714, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Xing", "props": { "y": 227, "x": 419, "rotation": -52, "anchorY": 1, "anchorX": 0.5, "runtime": "ui.dating.component.XingUI" } }, { "type": "Xing", "props": { "y": 266, "x": 935, "rotation": 70, "anchorY": 1, "anchorX": 0.5, "runtime": "ui.dating.component.XingUI" } }, { "type": "Xing", "props": { "y": 400, "x": 939, "rotation": 101, "anchorY": 1, "anchorX": 0.5, "runtime": "ui.dating.component.XingUI" } }, { "type": "Xing", "props": { "y": 447, "x": 388, "rotation": -105, "anchorY": 1, "anchorX": 0.5, "runtime": "ui.dating.component.XingUI" } }, { "type": "Xing", "props": { "y": 423, "x": 657, "rotation": 535, "anchorY": 1, "anchorX": 0.5, "runtime": "ui.dating.component.XingUI" } }, { "type": "Xing", "props": { "y": 496, "x": 546, "rotation": 216, "anchorY": 1, "anchorX": 0.5, "runtime": "ui.dating.component.XingUI" } }, { "type": "Xing1", "props": { "y": 470, "x": 447, "scaleY": 0.7, "scaleX": 0.7, "rotation": 227, "anchorY": 1, "anchorX": 0.5, "runtime": "ui.dating.component.Xing1UI" } }, { "type": "Xing1", "props": { "y": 463, "x": 894, "scaleY": 1.3, "scaleX": 1.3, "rotation": 130, "anchorY": 1, "anchorX": 0.5, "runtime": "ui.dating.component.Xing1UI" } }, { "type": "Xing", "props": { "y": 480, "x": 680, "scaleY": 0.5, "scaleX": 0.5, "rotation": 165, "anchorY": 1, "anchorX": 0.5, "runtime": "ui.dating.component.XingUI" } }, { "type": "Xing1", "props": { "y": 235, "x": 464, "scaleY": 1.3, "scaleX": 1.3, "rotation": -20, "anchorY": 1, "anchorX": 0.5, "runtime": "ui.dating.component.Xing1UI" } }, { "type": "Xing1", "props": { "y": 320, "x": 329, "scaleY": 0.8, "scaleX": 0.8, "rotation": -85, "anchorY": 1, "anchorX": 0.5, "runtime": "ui.dating.component.Xing1UI" } }, { "type": "Xing2", "props": { "y": 205, "x": 706, "rotation": 23, "anchorY": 1, "anchorX": 0.5, "runtime": "ui.dating.component.Xing2UI" } }, { "type": "Xing2", "props": { "y": 351, "x": 1009, "rotation": 93, "anchorY": 1, "anchorX": 0.5, "runtime": "ui.dating.component.Xing2UI" } }, { "type": "Xing2", "props": { "y": 249, "x": 321, "rotation": 289, "anchorY": 1, "anchorX": 0.5, "runtime": "ui.dating.component.Xing2UI" } }, { "type": "Xing2", "props": { "y": 467, "x": 300, "rotation": 259, "anchorY": 1, "anchorX": 0.5, "runtime": "ui.dating.component.Xing2UI" } }] }, { "type": "Box", "props": { "width": 673, "height": 311, "centerY": -30, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 156, "x": 337, "skin": "dating_ui/huode/tu_hdk.png", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 3, "x": 189, "skin": "dating_ui/huode/tu_hdbt.png" } }, { "type": "Image", "props": { "y": 186, "x": 327, "visible": false, "skin": "dating_ui/huode/tu_gx.png", "rotation": 360, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 183, "x": 332, "var": "img", "skin": "dating_ui/huode/jb_5.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 274, "x": 282, "wordWrap": true, "width": 94, "var": "txt_num", "height": 22, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Label", "props": { "y": 321, "x": 198, "wordWrap": true, "width": 261, "text": "点击空白处关闭", "strokeColor": "#000000", "stroke": 2, "height": 22, "fontSize": 20, "color": "#efda8b", "align": "center" } }] }, { "type": "Box", "props": { "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Guang1", "props": { "x": 2, "runtime": "ui.dating.component.Guang1UI" } }, { "type": "Guang1", "props": { "y": 722, "x": 1283, "scaleY": -1, "scaleX": -1, "runtime": "ui.dating.component.Guang1UI" } }, { "type": "Guang2", "props": { "y": 2, "x": 1, "runtime": "ui.dating.component.Guang2UI" } }, { "type": "Guang2", "props": { "y": 722, "x": 1280, "scaleY": -1, "scaleX": -1, "runtime": "ui.dating.component.Guang2UI" } }] }] };
            return HuoDeUI;
        }(View));
        dating.HuoDeUI = HuoDeUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var huodong;
        (function (huodong) {
            var DaMaUI = /** @class */ (function (_super) {
                __extends(DaMaUI, _super);
                function DaMaUI() {
                    return _super.call(this) || this;
                }
                DaMaUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.huodong.DaMaUI.uiView);
                };
                DaMaUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 1282, "height": 725 }, "child": [{ "type": "Image", "props": { "y": -117.5, "x": -320, "skin": "dating_ui/dama/tu_dama.png", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 151, "x": 1010, "stateNum": 1, "skin": "dating_ui/dama/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "ProgressBar", "props": { "y": 383, "x": 432, "width": 635, "skin": "dating_ui/dama/progress.png", "sizeGrid": "0,50,0,50", "height": 49 } }, { "type": "Box", "props": { "y": 305, "x": 559 }, "child": [{ "type": "Image", "props": { "y": 56, "x": 28, "skin": "dating_ui/dama/tu_lingqu1_1.png" } }, { "type": "Image", "props": { "skin": "dating_ui/dama/tu_2.png" } }, { "type": "Label", "props": { "y": 2, "x": 22, "wordWrap": false, "width": 97, "valign": "middle", "text": "000", "height": 33, "fontSize": 30, "color": "#a92901", "align": "center" } }] }, { "type": "Box", "props": { "y": 305, "x": 741 }, "child": [{ "type": "Image", "props": { "y": 56, "x": 28, "skin": "dating_ui/dama/tu_lingqu1_1.png" } }, { "type": "Image", "props": { "skin": "dating_ui/dama/tu_2.png" } }, { "type": "Label", "props": { "y": 3, "x": 22, "wordWrap": false, "width": 97, "valign": "middle", "text": "000", "height": 33, "fontSize": 30, "color": "#a92901", "align": "center" } }] }, { "type": "Box", "props": { "y": 305, "x": 976, "width": 144, "height": 153 }, "child": [{ "type": "Image", "props": { "y": 103, "x": 70, "skin": "dating_ui/dama/tu_lingqu2_1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "skin": "dating_ui/dama/tu_2.png" } }, { "type": "Label", "props": { "y": 3, "x": 23, "wordWrap": false, "width": 97, "valign": "middle", "text": "000", "height": 33, "fontSize": 30, "color": "#a92901", "align": "center" } }] }, { "type": "Label", "props": { "y": 515, "x": 605, "wordWrap": false, "width": 407, "valign": "middle", "text": "1.在线时长为当天累计在线时长 \\n2.在线时长为当天累计在线时长 \\n3.在线时长为当天累计在线时长", "leading": 10, "height": 122, "fontSize": 30, "color": "#f9e1b3", "align": "left" } }] };
                return DaMaUI;
            }(View));
            huodong.DaMaUI = DaMaUI;
        })(huodong = dating.huodong || (dating.huodong = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var huodong;
        (function (huodong) {
            var ShouChongUI = /** @class */ (function (_super) {
                __extends(ShouChongUI, _super);
                function ShouChongUI() {
                    return _super.call(this) || this;
                }
                ShouChongUI.prototype.createChildren = function () {
                    _super.prototype.createChildren.call(this);
                    this.createView(ui.dating.huodong.ShouChongUI.uiView);
                };
                ShouChongUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 167, "width": 966, "height": 718 }, "child": [{ "type": "Image", "props": { "y": -73, "x": -320, "skin": "dating_ui/shouchong/tu_sc.png", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 119, "x": 902, "width": 89, "stateNum": 1, "skin": "dating_ui/shouchong/btn_gb.png", "pivotY": 35, "pivotX": 45, "height": 89 } }, { "type": "Image", "props": { "y": 304, "x": 781, "skin": "dating_ui/shouchong/tu_100.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Clip", "props": { "y": 303, "x": 643, "skin": "dating_ui/shouchong/clip_sz.png", "clipX": 10, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Clip", "props": { "y": 303, "x": 714, "skin": "dating_ui/shouchong/clip_sz.png", "clipX": 10, "anchorY": 0.5, "anchorX": 0.5 } }] }] };
                return ShouChongUI;
            }(View));
            huodong.ShouChongUI = ShouChongUI;
        })(huodong = dating.huodong || (dating.huodong = {}));
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var HuoDongUI = /** @class */ (function (_super) {
            __extends(HuoDongUI, _super);
            function HuoDongUI() {
                return _super.call(this) || this;
            }
            HuoDongUI.prototype.createChildren = function () {
                View.regComponent("ui.dating.component.TabItemRender1UI", ui.dating.component.TabItemRender1UI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.HuoDongUI.uiView);
            };
            HuoDongUI.uiView = { "type": "View", "props": { "width": 1280, "left": -144, "height": 720 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "dating_ui/tongyong/tu_bk222.png", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Box", "props": { "width": 1280, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "dating_ui/tongyong/tu_bj.jpg", "right": -160, "left": 200, "height": 720, "bottom": 0 } }, { "type": "Image", "props": { "width": 801, "top": 0, "skin": "dating_ui/tongyong/tu_bk22.png", "sizeGrid": "0,10,0,630", "left": 639, "bottom": 0 } }, { "type": "Box", "props": { "y": 120, "x": 291, "var": "myhd0" }, "child": [{ "type": "Image", "props": { "width": 960, "skin": "dating_ui/huodong/tu_bk3.png", "sizeGrid": "20,20,20,20", "height": 546 } }, { "type": "Panel", "props": { "y": 27, "x": 20, "width": 930, "vScrollBarSkin": "dating_ui/tongyong/vscroll.png", "height": 501 }, "child": [{ "type": "Label", "props": { "y": 1, "x": 20, "wordWrap": true, "width": 900, "var": "txt", "text": "1. 所有优惠以人民币为结算金额，以北京时间为准。  \\n2. 参与游戏任何优惠活动，即表示您同意《优惠条款》。  \\n3. 每位玩家﹑每户﹑每一住址 、每一电子邮箱地址﹑每一电话号码﹑相同支付方式(相同借记卡/信用卡/银行账户)及IP地址只能享有一次优惠；若会员有重复申请账号行为，公司保留取消或收回会员优惠彩金的权利。  \\n4. 若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，游戏有权要求会员向我们提供充足有效的文件，用以确认是否享有该优惠的资质。  \\n5. 若符合活动条件，但无法申请（申请按钮不可点击），则说明您的会员账号可能存在风险，暂时拒绝您参与该优惠。 （例：多个相同银行卡的账号、IP下注册多个账号、手机号码错误等原因都可能造成您无法参与首存优惠）  \\n6. 游戏的所有优惠特为玩家而设，如发现任何团体或个人，以不诚实方式套取红利或任何威胁、滥用公司优惠等行为，公司保留冻结、取消该团体或个人账户及账户结余的权利。当参与优惠会员未能完全遵守、或违反、或滥用任何有关公司优惠或推广的条款，又或我们有任何证据有任何团队或个人投下一连串的关联赌注，及以造成无论赛果怎么样都可以确保可以从该存款红利或其他推广活动提供的优惠获利，游戏保留权利向此团队或个人停止、取消优惠或索回已支付的全部优惠红利。此外，公司亦保留权利向这些客户扣取相当于优惠红利价值的行政费用，以补偿我们的行政成本。  \\n7. 每位用户任意的一笔存款，仅限参与一项优惠活动。（例：a会员存入一笔款，a会员的这笔款只能选择一个优惠活动进行参与，选择首存送金即不可选择参与每日首存。）  \\n8. 游戏保留对活动的最终解释权；以及在无通知的情况下修改、终止活动的权利；适用于所有优惠。  \\n9.如系统发生不可预测的技术错误或不可控制的因素, 则游戏保留活动的最终处理权;  \\n10.为避免文字上理解差异, 游戏保留对所有活动的最终解释权和决定权。", "leading": 8, "height": 1227, "fontSize": 30, "color": "#fbe8ba" } }] }] }, { "type": "Box", "props": { "y": 120, "x": 290, "var": "myhd1" }, "child": [{ "type": "Image", "props": { "width": 962, "var": "img_myhd", "skin": "dating_ui/huodong/tu_hd6.png", "height": 200 } }, { "type": "Image", "props": { "y": 206, "x": 1, "width": 960, "skin": "dating_ui/huodong/tu_bk3.png", "sizeGrid": "20,20,20,20", "height": 340 } }, { "type": "Panel", "props": { "y": 220, "x": 25, "width": 920, "vScrollBarSkin": "dating_ui/tongyong/vscroll.png", "height": 305 }, "child": [{ "type": "Label", "props": { "y": 6, "x": 0, "wordWrap": true, "width": 918, "var": "txt_myhd", "text": "1. 所有优惠以人民币为结算金额，以北京时间为准。  \\n2. 参与游戏任何优惠活动，即表示您同意《优惠条款》。  \\n3. 每位玩家﹑每户﹑每一住址 、每一电子邮箱地址﹑每一电话号码﹑相同支付方式(相同借记卡/信用卡/银行账户)及IP地址只能享有一次优惠；若会员有重复申请账号行为，公司保留取消或收回会员优惠彩金的权利。  \\n4. 若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，游戏有权要求会员向我们提供充足有效的文件，用以确认是否享有该优惠的资质。  \\n5. 若符合活动条件，但无法申请（申请按钮不可点击），则说明您的会员账号可能存在风险，暂时拒绝您参与该优惠。 （例：多个相同银行卡的账号、IP下注册多个账号、手机号码错误等原因都可能造成您无法参与首存优惠）  \\n6. 游戏的所有优惠特为玩家而设，如发现任何团体或个人，以不诚实方式套取红利或任何威胁、滥用公司优惠等行为，公司保留冻结、取消该团体或个人账户及账户结余的权利。当参与优惠会员未能完全遵守、或违反、或滥用任何有关公司优惠或推广的条款，又或我们有任何证据有任何团队或个人投下一连串的关联赌注，及以造成无论赛果怎么样都可以确保可以从该存款红利或其他推广活动提供的优惠获利，游戏保留权利向此团队或个人停止、取消优惠或索回已支付的全部优惠红利。此外，公司亦保留权利向这些客户扣取相当于优惠红利价值的行政费用，以补偿我们的行政成本。  \\n7. 每位用户任意的一笔存款，仅限参与一项优惠活动。（例：a会员存入一笔款，a会员的这笔款只能选择一个优惠活动进行参与，选择首存送金即不可选择参与每日首存。）  \\n8. 游戏保留对活动的最终解释权；以及在无通知的情况下修改、终止活动的权利；适用于所有优惠。  \\n9.如系统发生不可预测的技术错误或不可控制的因素, 则游戏保留活动的最终处理权;  \\n10.为避免文字上理解差异, 游戏保留对所有活动的最终解释权和决定权。", "leading": 8, "height": 1238, "fontSize": 30, "color": "#fbe8ba" } }] }] }, { "type": "Button", "props": { "y": 46, "x": 1225, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_fanhui.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "x": -150, "width": 790, "top": 0, "skin": "dating_ui/tongyong/tu_bk11.png", "sizeGrid": "0,624,0,7", "bottom": 0 } }, { "type": "List", "props": { "y": 129, "x": 0, "width": 260, "var": "list_tab", "spaceY": 8, "height": 585 }, "child": [{ "type": "TabItemRender1", "props": { "renderType": "render", "runtime": "ui.dating.component.TabItemRender1UI" } }] }, { "type": "Image", "props": { "x": 136, "width": 46, "var": "img_prev", "skin": "dating_ui/tongyong/tu_jt.png", "scaleY": 0.5, "scaleX": -0.5, "rotation": 90, "height": 86, "centerY": -221, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 } }, { "type": "Image", "props": { "x": 136, "width": 46, "var": "img_next", "skin": "dating_ui/tongyong/tu_jt.png", "scaleY": 0.5, "scaleX": 0.5, "rotation": 90, "height": 86, "centerY": 344, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 } }, { "type": "Image", "props": { "y": 59, "x": 139, "skin": "dating_ui/huodong/tit_huodong.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return HuoDongUI;
        }(View));
        dating.HuoDongUI = HuoDongUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var JianPanUI = /** @class */ (function (_super) {
            __extends(JianPanUI, _super);
            function JianPanUI() {
                return _super.call(this) || this;
            }
            JianPanUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.JianPanUI.uiView);
            };
            JianPanUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 1280, "height": 331, "centerX": 0, "bottom": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 165, "x": 641, "width": 1282, "var": "img_bg", "skin": "dating_ui/baoxianxiang/tu_d1.png", "sizeGrid": "0,2,0,1", "height": 331, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "width": 809, "var": "box_number", "height": 330, "centerY": -1, "centerX": 0 }, "child": [{ "type": "Button", "props": { "y": 40, "x": 100, "width": 200, "var": "btn1", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "1", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 40, "x": 303, "width": 200, "var": "btn2", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "2", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 40, "x": 506, "width": 200, "var": "btn3", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "3", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 82, "x": 709, "width": 200, "var": "btn_pop", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "X", "height": 163, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 123, "x": 100, "width": 200, "var": "btn4", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "4", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 123, "x": 303, "width": 200, "var": "btn5", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "5", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 123, "x": 506, "width": 200, "var": "btn6", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "6", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 206, "x": 100, "width": 200, "var": "btn7", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "7", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 206, "x": 303, "width": 200, "var": "btn8", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "8", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 206, "x": 506, "width": 200, "var": "btn9", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "9", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 249, "x": 709, "width": 200, "var": "btn_enter", "skin": "dating_ui/baoxianxiang/btn_aa1.png", "labelSize": 40, "labelColors": "#ffffff", "label": "确定", "height": 165, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 290, "x": 406, "width": 403, "var": "btn_clear", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "清除", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 290, "x": 101, "width": 200, "var": "btn0", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "0", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 10, "x": 10, "var": "box_english", "right": 0, "left": 0, "height": 330, "centerY": 0 }, "child": [{ "type": "Button", "props": { "y": 287, "x": 121, "width": 182, "var": "btn_change", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 30, "label": "大小写切换", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 287, "x": 1165, "width": 184, "var": "btn_enter1", "skin": "dating_ui/baoxianxiang/btn_aa1.png", "labelSize": 40, "labelColors": "#ffffff", "label": "确定", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 38, "x": 90, "width": 120, "var": "btn_e_1", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "1", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 38, "x": 213, "width": 120, "var": "btn_e_2", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "2", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 38, "x": 336, "width": 120, "var": "btn_e_3", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "3", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 38, "x": 459, "width": 120, "var": "btn_e_4", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "4", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 38, "x": 582, "width": 120, "var": "btn_e_5", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "5", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 38, "x": 705, "width": 120, "var": "btn_e_6", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "6", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 38, "x": 828, "width": 120, "var": "btn_e_7", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "7", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 38, "x": 950, "width": 120, "var": "btn_e_8", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "8", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 38, "x": 1073, "width": 120, "var": "btn_e_9", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "9", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 38, "x": 1196, "width": 120, "var": "btn_e_0", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "0", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 122, "x": 90, "width": 120, "var": "btn_e_10", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "q", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 122, "x": 213, "width": 120, "var": "btn_e_11", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "w", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 122, "x": 336, "width": 120, "var": "btn_e_12", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "e", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 122, "x": 459, "width": 120, "var": "btn_e_13", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "r", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 122, "x": 582, "width": 120, "var": "btn_e_14", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "t", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 122, "x": 705, "width": 120, "var": "btn_e_15", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "y", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 122, "x": 828, "width": 120, "var": "btn_e_16", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "u", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 122, "x": 950, "width": 120, "var": "btn_e_17", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "i", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 122, "x": 1073, "width": 120, "var": "btn_e_18", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "o", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 122, "x": 1196, "width": 120, "var": "btn_e_19", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "p", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 205, "x": 90, "width": 120, "var": "btn_e_20", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "a", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 205, "x": 213, "width": 120, "var": "btn_e_21", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "s", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 205, "x": 336, "width": 120, "var": "btn_e_22", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "d", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 205, "x": 459, "width": 120, "var": "btn_e_23", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "f", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 205, "x": 582, "width": 120, "var": "btn_e_24", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "g", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 205, "x": 705, "width": 120, "var": "btn_e_25", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "h", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 205, "x": 828, "width": 120, "var": "btn_e_26", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "j", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 205, "x": 950, "width": 120, "var": "btn_e_27", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "k", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 205, "x": 1073, "width": 120, "var": "btn_e_28", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "l", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 205, "x": 1196, "width": 120, "var": "btn_pop1", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 30, "label": "删除", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 287, "x": 274, "width": 120, "var": "btn_e_29", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "z", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 287, "x": 397, "width": 120, "var": "btn_e_30", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "x", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 287, "x": 520, "width": 120, "var": "btn_e_31", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "c", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 287, "x": 643, "width": 120, "var": "btn_e_32", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "v", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 287, "x": 766, "width": 120, "var": "btn_e_33", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "b", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 287, "x": 888, "width": 120, "var": "btn_e_34", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "n", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 287, "x": 1011, "width": 120, "var": "btn_e_35", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "m", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }] }] }] };
            return JianPanUI;
        }(View));
        dating.JianPanUI = JianPanUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var JianPan1UI = /** @class */ (function (_super) {
            __extends(JianPan1UI, _super);
            function JianPan1UI() {
                return _super.call(this) || this;
            }
            JianPan1UI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.JianPan1UI.uiView);
            };
            JianPan1UI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "right": 0, "left": 0, "height": 331, "bottom": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 165, "var": "img_bg", "skin": "dating_ui/baoxianxiang/tu_d1.png", "sizeGrid": "0,2,0,1", "right": 0, "left": 0, "height": 331, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "right": 0, "left": 0, "height": 330, "centerY": 0 }, "child": [{ "type": "Button", "props": { "y": 287, "x": 121, "width": 182, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 30, "label": "大小写切换", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 287, "x": 1165, "width": 184, "var": "btn_enter", "skin": "dating_ui/baoxianxiang/btn_aa1.png", "labelSize": 40, "labelColors": "#ffffff", "label": "确定", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 38, "x": 90, "width": 120, "var": "btn1", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "1", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 38, "x": 213, "width": 120, "var": "btn2", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "2", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 38, "x": 336, "width": 120, "var": "btn3", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "3", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 38, "x": 459, "width": 120, "var": "btn4", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "4", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 38, "x": 582, "width": 120, "var": "btn5", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "5", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 38, "x": 705, "width": 120, "var": "btn6", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "6", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 38, "x": 828, "width": 120, "var": "btn7", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "7", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 38, "x": 950, "width": 120, "var": "btn8", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "8", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 38, "x": 1073, "width": 120, "var": "btn9", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "9", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 38, "x": 1196, "width": 120, "var": "btn0", "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "0", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 122, "x": 90, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "q", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 122, "x": 213, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "w", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 122, "x": 336, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "e", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 122, "x": 459, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "r", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 122, "x": 582, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "t", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 122, "x": 705, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "y", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 122, "x": 828, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "u", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 122, "x": 950, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "i", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 122, "x": 1073, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "o", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 122, "x": 1196, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "p", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 205, "x": 90, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "a", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 205, "x": 213, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "s", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 205, "x": 336, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "d", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 205, "x": 459, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "f", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 205, "x": 582, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "g", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 205, "x": 705, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "h", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 205, "x": 828, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "j", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 205, "x": 950, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "k", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 205, "x": 1073, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "l", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 205, "x": 1196, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 30, "label": "删除", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 287, "x": 274, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "z", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 287, "x": 397, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "x", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 287, "x": 520, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "c", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 287, "x": 643, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "v", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 287, "x": 766, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "b", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 287, "x": 888, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "n", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 287, "x": 1011, "width": 120, "skin": "dating_ui/baoxianxiang/btn_aa.png", "labelSize": 40, "label": "m", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }] }] }] };
            return JianPan1UI;
        }(View));
        dating.JianPan1UI = JianPan1UI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var KeHuUI = /** @class */ (function (_super) {
            __extends(KeHuUI, _super);
            function KeHuUI() {
                return _super.call(this) || this;
            }
            KeHuUI.prototype.createChildren = function () {
                View.regComponent("ui.dating.component.KeFuRenderUI", ui.dating.component.KeFuRenderUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.KeHuUI.uiView);
            };
            KeHuUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "y": 30, "x": 30, "width": 1280, "var": "box", "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "dating_ui/tongyong/tu_bj.jpg", "right": -160, "left": 200, "height": 720, "bottom": 0 } }, { "type": "Image", "props": { "width": 801, "top": 0, "skin": "dating_ui/tongyong/tu_bk22.png", "sizeGrid": "0,10,0,630", "left": 639, "bottom": 0 } }, { "type": "Image", "props": { "y": 0, "x": -150, "width": 790, "skin": "dating_ui/tongyong/tu_bk11.png", "sizeGrid": "0,624,0,7", "height": 721 } }, { "type": "Image", "props": { "y": 60, "x": 140, "skin": "dating_ui/kehu/tit_service.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Panel", "props": { "y": 95, "x": 270, "width": 1002, "var": "panel", "vScrollBarSkin": "dating_ui/tongyong/vscroll.png", "height": 570 }, "child": [{ "type": "Box", "props": { "y": -6, "x": 12, "width": 944, "height": 2187 }, "child": [{ "type": "Image", "props": { "skin": "dating_ui/kehu/kehu_1.png", "scaleY": 1.23, "scaleX": 1.23 } }, { "type": "Image", "props": { "y": 748, "x": 0, "skin": "dating_ui/kehu/kehu_2.png", "scaleY": 1.23, "scaleX": 1.23 } }, { "type": "Image", "props": { "y": 1411, "x": 0, "skin": "dating_ui/kehu/kehu_3.png", "scaleY": 1.23, "scaleX": 1.23 } }] }] }, { "type": "Tab", "props": { "y": 130, "x": 0, "width": 260, "var": "tab_kefu", "selectedIndex": 0, "height": 580 }, "child": [{ "type": "Button", "props": { "y": 41, "x": 131, "stateNum": 3, "skin": "dating_ui/kehu/btn_cjwt.png", "name": "item0", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 122, "x": 131, "stateNum": 3, "skin": "dating_ui/kehu/btn_wxkf.png", "name": "item1", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 203, "x": 131, "stateNum": 3, "skin": "dating_ui/kehu/btn_qqkf.png", "name": "item2", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 285, "x": 131, "stateNum": 3, "skin": "dating_ui/kehu/btn_lxkf1.png", "name": "item3", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "List", "props": { "y": 130, "x": 304, "width": 952, "var": "list_kefu", "spaceX": 90, "repeatY": 1, "repeatX": 3, "height": 505, "cacheAsBitmap": true, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "KeFuRender", "props": { "scaleY": 1.2, "scaleX": 1.2, "name": "render", "runtime": "ui.dating.component.KeFuRenderUI" } }] }, { "type": "Image", "props": { "x": 283, "width": 46, "var": "img_prev", "skin": "dating_ui/tongyong/tu_jt.png", "scaleY": 0.5, "scaleX": -0.5, "height": 86, "centerY": 14, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 } }, { "type": "Image", "props": { "x": 1257, "width": 46, "var": "img_next", "skin": "dating_ui/tongyong/tu_jt.png", "scaleY": 0.5, "scaleX": 0.5, "height": 86, "centerY": 14, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 } }, { "type": "Button", "props": { "y": 46, "x": 1225, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_fanhui.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return KeHuUI;
        }(View));
        dating.KeHuUI = KeHuUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var QianDaoUI = /** @class */ (function (_super) {
            __extends(QianDaoUI, _super);
            function QianDaoUI() {
                return _super.call(this) || this;
            }
            QianDaoUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.QianDaoUI.uiView);
            };
            QianDaoUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 833, "height": 607, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Box", "props": { "y": 304.5, "x": 415, "width": 830, "height": 609, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "skin": "dating_ui/qiandao/qd_k.png", "left": 2 } }, { "type": "Image", "props": { "y": 0, "skin": "dating_ui/qiandao/qd_k.png", "scaleX": -1, "right": 417 } }, { "type": "Image", "props": { "y": -58, "x": -73, "skin": "dating_ui/qiandao/tu_qdml.png" } }, { "type": "Image", "props": { "y": 546, "x": 777, "skin": "dating_ui/qiandao/tu_lb.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": -46, "x": 156, "skin": "dating_ui/qiandao/tit_qiandao.png" } }] }, { "type": "Label", "props": { "y": 460, "wordWrap": true, "width": 457, "text": "每日连续签到，礼品更丰盛哦！", "height": 22, "fontSize": 20, "color": "#ffffff", "centerX": 0, "bold": false, "align": "center" } }, { "type": "List", "props": { "y": 109, "x": 61, "width": 709, "var": "list", "height": 341 }, "child": [{ "type": "Box", "props": { "y": 83, "x": 64, "width": 128, "name": "item0", "height": 167, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 82.5, "x": 64.5, "skin": "dating_ui/qiandao/tu_wpk.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 21.5, "skin": "dating_ui/qiandao/tu_d1.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 72, "x": 64, "skin": "dating_ui/qiandao/jl_0.png", "name": "img", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 69, "x": 3, "skin": "dating_ui/qiandao/tu_lq.png", "name": "ylq" } }, { "type": "Label", "props": { "y": 135, "x": 8, "wordWrap": true, "width": 114, "text": "金钱", "name": "txt", "height": 22, "fontSize": 20, "color": "#efda8b", "align": "center" } }] }, { "type": "Box", "props": { "y": 83, "x": 210, "width": 128, "name": "item1", "height": 167, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 82.5, "x": 64.5, "skin": "dating_ui/qiandao/tu_wpk.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 21.5, "skin": "dating_ui/qiandao/tu_d2.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 72, "x": 64, "skin": "dating_ui/qiandao/jl_4.png", "name": "img", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 69, "x": 3, "skin": "dating_ui/qiandao/tu_lq.png", "name": "ylq" } }, { "type": "Label", "props": { "y": 135, "x": 8, "wordWrap": true, "width": 114, "text": "红包", "name": "txt", "height": 22, "fontSize": 20, "color": "#efda8b", "align": "center" } }] }, { "type": "Box", "props": { "y": 83, "x": 355, "width": 128, "name": "item2", "height": 167, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 82.5, "x": 64.5, "skin": "dating_ui/qiandao/tu_wpk.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 21.5, "skin": "dating_ui/qiandao/tu_d3.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 72, "x": 64, "skin": "dating_ui/qiandao/jl_3.png", "name": "img", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 69, "x": 3, "skin": "dating_ui/qiandao/tu_lq.png", "name": "ylq" } }, { "type": "Label", "props": { "y": 135, "x": 8, "wordWrap": true, "width": 114, "text": "礼包", "name": "txt", "height": 22, "fontSize": 20, "color": "#efda8b", "align": "center" } }] }, { "type": "Box", "props": { "y": 257, "x": 64, "width": 128, "name": "item3", "height": 167, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 82.5, "x": 64.5, "skin": "dating_ui/qiandao/tu_wpk.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 21.5, "skin": "dating_ui/qiandao/tu_d4.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 72, "x": 64, "skin": "dating_ui/qiandao/jl_1.png", "name": "img", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 69, "x": 3, "skin": "dating_ui/qiandao/tu_lq.png", "name": "ylq" } }, { "type": "Label", "props": { "y": 135, "x": 8, "wordWrap": true, "width": 114, "text": "金钱", "name": "txt", "height": 22, "fontSize": 20, "color": "#efda8b", "align": "center" } }] }, { "type": "Box", "props": { "y": 257, "x": 210, "width": 128, "name": "item4", "height": 167, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 82.5, "x": 64.5, "skin": "dating_ui/qiandao/tu_wpk.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 21.5, "skin": "dating_ui/qiandao/tu_d5.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 72, "x": 64, "skin": "dating_ui/qiandao/jl_4.png", "name": "img", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 69, "x": 3, "skin": "dating_ui/qiandao/tu_lq.png", "name": "ylq" } }, { "type": "Label", "props": { "y": 135, "x": 8, "wordWrap": true, "width": 114, "text": "红包", "name": "txt", "height": 22, "fontSize": 20, "color": "#efda8b", "align": "center" } }] }, { "type": "Box", "props": { "y": 257, "x": 355, "width": 128, "name": "item5", "height": 167, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 82.5, "x": 64.5, "skin": "dating_ui/qiandao/tu_wpk.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 21.5, "skin": "dating_ui/qiandao/tu_d6.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 72, "x": 64, "skin": "dating_ui/qiandao/jl_5.png", "name": "img", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 69, "x": 3, "skin": "dating_ui/qiandao/tu_lq.png", "name": "ylq" } }, { "type": "Label", "props": { "y": 135, "x": 8, "wordWrap": true, "width": 114, "text": "金钱", "name": "txt", "height": 22, "fontSize": 20, "color": "#efda8b", "align": "center" } }] }, { "type": "Box", "props": { "y": 170, "x": 574, "width": 270, "name": "item6", "height": 339, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 170.5, "x": 135.5, "skin": "dating_ui/qiandao/tu_dqt.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 193, "x": 136, "skin": "dating_ui/qiandao/jl_6.png", "name": "img", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 166.5, "x": 5.5, "skin": "dating_ui/qiandao/tu_lq1.png", "name": "ylq" } }, { "type": "Label", "props": { "y": 305, "x": 16, "wordWrap": true, "width": 240, "text": "超级大礼包", "name": "txt", "height": 22, "fontSize": 20, "color": "#efda8b", "align": "center" } }] }] }, { "type": "Button", "props": { "y": 525.5, "x": 413, "var": "btn_qiandao", "stateNum": 1, "skin": "dating_ui/qiandao/btn_qd.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 107, "x": 807, "var": "btn_xq", "stateNum": 1, "skin": "dating_ui/qiandao/btn_xq.png", "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 85, "x": 768, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return QianDaoUI;
        }(View));
        dating.QianDaoUI = QianDaoUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var QianDao_xqUI = /** @class */ (function (_super) {
            __extends(QianDao_xqUI, _super);
            function QianDao_xqUI() {
                return _super.call(this) || this;
            }
            QianDao_xqUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.QianDao_xqUI.uiView);
            };
            QianDao_xqUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 787, "height": 531, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 395, "skin": "dating_ui/tongyong/tu_bk1.png", "height": 531 } }, { "type": "Image", "props": { "y": 0, "x": 786, "width": 395, "skin": "dating_ui/tongyong/tu_bk1.png", "scaleX": -1, "height": 531 } }, { "type": "Image", "props": { "y": 37, "x": 394, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 37, "x": 394, "skin": "dating_ui/qiandao/tit_xq.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 84, "x": 31, "wordWrap": true, "width": 729, "var": "txt_content", "text": "活动时间：\\n不限 \\n活动规则： \\n1.连续签到活动，中断后需从第一天开始重新签到，连续登录奖品更丰盛。 \\n2.活动时间内，每天一次签到机会 \\n3.本活动最终解释权归本平台所有，相关问题可咨询游戏客服哦！", "leading": 20, "height": 261, "fontSize": 22, "color": "#c8bc9f" } }, { "type": "Button", "props": { "y": 39, "x": 744, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return QianDao_xqUI;
        }(View));
        dating.QianDao_xqUI = QianDao_xqUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var QuKuanUI = /** @class */ (function (_super) {
            __extends(QuKuanUI, _super);
            function QuKuanUI() {
                return _super.call(this) || this;
            }
            QuKuanUI.prototype.createChildren = function () {
                View.regComponent("ui.dating.component.QuKuanTUI", ui.dating.component.QuKuanTUI);
                View.regComponent("Text", laya.display.Text);
                View.regComponent("ui.dating.component.TextInputUI", ui.dating.component.TextInputUI);
                View.regComponent("ui.dating.component.TabItemRenderUI", ui.dating.component.TabItemRenderUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.QuKuanUI.uiView);
            };
            QuKuanUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "y": 20, "x": 20, "width": 787, "var": "box", "scaleY": 1.25, "scaleX": 1.25, "height": 531, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "width": 395, "skin": "dating_ui/tongyong/tu_bk2.png" } }, { "type": "Image", "props": { "y": 0, "x": 786, "width": 395, "skin": "dating_ui/tongyong/tu_bk1.png", "scaleX": -1 } }, { "type": "Image", "props": { "y": 34, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 37, "x": 394, "skin": "dating_ui/qukuan/tit_qukuan.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 77, "x": 186, "width": 580, "var": "box_record", "height": 406 }, "child": [{ "type": "Image", "props": { "y": 36, "x": 0, "width": 580, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11" } }, { "type": "Image", "props": { "y": 21, "x": 68, "skin": "dating_ui/tongyong/tu_dhwz1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 21, "x": 197, "skin": "dating_ui/qukuan/tu_dhwz2.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 21, "x": 365, "skin": "dating_ui/qukuan/tu_dhwz3.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 21, "x": 520, "skin": "dating_ui/tongyong/tu_dhwz4.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "List", "props": { "y": 38, "x": 1, "width": 579, "var": "list_record", "spaceY": 2, "height": 366, "cacheAsBitmap": true, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "QuKuanT", "props": { "y": 0, "x": 0, "renderType": "render", "runtime": "ui.dating.component.QuKuanTUI" } }] }, { "type": "Label", "props": { "y": 210, "x": 170, "wordWrap": true, "width": 232, "var": "txt_no", "text": "---暂无数据---", "height": 22, "fontSize": 20, "color": "#efda8b", "align": "center" } }] }, { "type": "Box", "props": { "y": 75, "x": 188, "width": 577, "var": "box_shoubang", "height": 406 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 576, "skin": "dating_ui/qukuan/tu_dh1.png", "sizeGrid": "11,12,13,11", "renderType": "render", "height": 105 }, "child": [{ "type": "Text", "props": { "y": 15, "x": 60, "width": 98, "text": "当前金币", "height": 25, "fontSize": 22, "color": "#c8bc9f", "bold": true, "align": "left" } }, { "type": "Image", "props": { "y": 9, "x": 164, "width": 228, "skin": "dating_ui/tongyong/tu_lbk.png", "sizeGrid": "0,19,0,18", "height": 34 } }, { "type": "Clip", "props": { "y": 16, "x": 214, "var": "clip_money", "skin": "dating_ui/dating/clip_money.png", "clipX": 11 } }, { "type": "Image", "props": { "y": 25, "x": 188, "skin": "dating_ui/tongyong/icon_money.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 64, "x": 21, "wordWrap": true, "width": 540, "text": "兑换3-5分钟到账，提现前请确认绑定的帐号准确无误", "leading": 2, "height": 25, "fontSize": 20, "color": "#fdf2a7", "align": "left" } }] }, { "type": "Button", "props": { "y": 362, "x": 457, "var": "btn_duihuan", "stateNum": 1, "skin": "dating_ui/qukuan/btn_qc1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 280, "x": 507, "width": 133, "var": "btn_bind", "stateNum": 1, "skin": "dating_ui/qukuan/btn_bd2.png", "height": 59, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 264, "x": 4, "width": 118, "var": "txt_name", "text": "收款支付宝：", "height": 30, "fontSize": 24, "color": "#c8bc9f", "bold": true, "align": "right" } }, { "type": "Image", "props": { "y": 109, "x": 0, "width": 576, "skin": "dating_ui/qukuan/tu_dh2.png", "sizeGrid": "11,12,13,11", "renderType": "render", "height": 128 }, "child": [{ "type": "Image", "props": { "y": 37, "x": 62, "skin": "dating_ui/qukuan/tu_je.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 40, "x": 544, "var": "btn_clear", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 94, "x": 504, "var": "btn_max", "stateNum": 1, "skin": "dating_ui/qukuan/btn_zd1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "HSlider", "props": { "y": 83, "x": 25, "width": 374, "var": "hslider", "value": 105, "tick": 1, "skin": "dating_ui/tongyong/hslider.png", "sizeGrid": "0,20,0,21", "showLabel": true, "min": 100, "max": 200, "height": 31, "allowClickBack": true } }, { "type": "Image", "props": { "y": 19, "x": 114, "width": 396, "skin": "dating_ui/qukuan/textinput_lbk.png", "sizeGrid": "15,24,17,25", "height": 36 } }, { "type": "TextInput", "props": { "y": 26, "x": 125, "width": 370, "var": "txt_money", "runtime": "ui.dating.component.TextInputUI" } }] }, { "type": "Image", "props": { "y": 280, "width": 278, "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "0,27,0,24", "height": 49, "centerX": -7, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 267, "x": 162, "width": 211, "var": "txt_zhanghao", "text": "未绑定支付宝账号", "height": 24, "fontSize": 24, "color": "#777777", "align": "left" } }, { "type": "Text", "props": { "y": 354, "x": 4, "width": 146, "text": "取款密码：", "height": 30, "fontSize": 24, "color": "#c8bc9f", "bold": true, "align": "right" } }, { "type": "Image", "props": { "y": 338, "x": 146, "width": 184, "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25", "height": 50 } }, { "type": "TextInput", "props": { "y": 351, "x": 156, "width": 165, "var": "txt_qkmm", "runtime": "ui.dating.component.TextInputUI" } }] }, { "type": "List", "props": { "y": 74, "x": 14, "var": "list_tab", "spaceY": 10, "selectedIndex": 0, "selectEnable": true, "height": 406 }, "child": [{ "type": "TabItemRender", "props": { "y": 0, "x": 0, "renderType": "render", "runtime": "ui.dating.component.TabItemRenderUI" } }] }, { "type": "Button", "props": { "y": 38, "x": 743, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return QuKuanUI;
        }(View));
        dating.QuKuanUI = QuKuanUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var QuKuan_yhkUI = /** @class */ (function (_super) {
            __extends(QuKuan_yhkUI, _super);
            function QuKuan_yhkUI() {
                return _super.call(this) || this;
            }
            QuKuan_yhkUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.QuKuan_yhkUI.uiView);
            };
            QuKuan_yhkUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 787, "var": "box", "scaleY": 1.25, "scaleX": 1.25, "height": 531, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 395, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "100,0,150,45", "height": 531 } }, { "type": "Image", "props": { "y": 0, "x": 786, "width": 395, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "100,0,150,52", "scaleX": -1, "height": 531 } }, { "type": "Image", "props": { "y": 37, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 38, "skin": "dating_ui/qukuan/tit_yhk.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 456, "var": "btn_bind", "stateNum": 1, "skin": "dating_ui/tongyong/btn_bd1.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 455, "x": 580, "width": 84, "stroke": 1, "height": 24, "fontSize": 24, "color": "#fffbb5", "align": "right" } }, { "type": "Button", "props": { "y": 38, "x": 743, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 465, "x": 587, "wordWrap": true, "width": 90, "var": "btn_close1", "underlineColor": "#28ff00", "underline": true, "text": "暂不绑定", "height": 22, "fontSize": 20, "color": "#00ff47", "align": "center" } }, { "type": "Text", "props": { "y": 90, "x": 99, "width": 158, "text": "真实姓名：", "height": 24, "fontSize": 24, "color": "#c8bc9f", "align": "right" } }, { "type": "Text", "props": { "y": 144, "x": 95, "width": 162, "text": "银行卡账号：", "height": 24, "fontSize": 24, "color": "#c8bc9f", "align": "right" } }, { "type": "TextInput", "props": { "y": 159, "x": 259, "width": 390, "var": "txt_zh", "type": "text", "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25", "restrict": "0-9", "promptColor": "#777777", "prompt": "请输入银行卡账号", "padding": "-1,0,0,16", "maxChars": 25, "height": 50, "fontSize": 24, "color": "#f8ea5e", "anchorY": 0.5, "anchorX": 0, "align": "left" } }, { "type": "Label", "props": { "y": 351, "x": 80, "wordWrap": true, "width": 660, "underlineColor": "#28ff00", "text": "请绑定您正确的银行卡信息，转出时将直接转入此银行账号，为了您的财产安全，绑定后不可私自更改，如需修改请联系客服！", "leading": 4, "height": 50, "fontSize": 20, "color": "#ffffff", "align": "left" } }, { "type": "Image", "props": { "y": 363, "x": 61, "skin": "dating_ui/tongyong/tu_gth.png", "scaleY": 0.8, "scaleX": 0.8, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 199, "x": 99, "width": 158, "text": "开户银行：", "height": 24, "fontSize": 24, "color": "#c8bc9f", "align": "right" } }, { "type": "TextInput", "props": { "y": 214, "x": 259, "width": 390, "var": "txt_khh", "type": "text", "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25", "restrict": "\\u4e00-\\u9fa5A-Za-z", "promptColor": "#777777", "prompt": "请输入开户银行", "padding": "-1,0,0,16", "overflow": "hidden", "maxChars": 25, "height": 50, "fontSize": 24, "color": "#f8ea5e", "anchorY": 0.5, "anchorX": 0, "align": "left" } }, { "type": "Text", "props": { "y": 253, "x": 97, "width": 160, "text": "开户行支行：", "height": 24, "fontSize": 24, "color": "#c8bc9f", "align": "right" } }, { "type": "TextInput", "props": { "y": 268, "x": 259, "width": 390, "var": "txt_khzh", "type": "text", "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25", "restrict": "\\u4e00-\\u9fa5A-Za-z", "promptColor": "#777777", "prompt": "请输入开户行支行名称", "padding": "-1,0,0,16", "maxChars": 25, "height": 50, "fontSize": 24, "color": "#f8ea5e", "anchorY": 0.5, "anchorX": 0, "align": "left" } }, { "type": "Text", "props": { "y": 307, "x": 99, "width": 158, "text": "取款密码：", "height": 24, "fontSize": 24, "color": "#c8bc9f", "align": "right" } }, { "type": "TextInput", "props": { "y": 105, "x": 259, "width": 390, "var": "txt_name", "type": "text", "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25", "restrict": "\\u4e00-\\u9fa5A-Za-z", "promptColor": "#777777", "prompt": "请输入真实姓名", "padding": "-1,0,0,16", "maxChars": 6, "height": 50, "fontSize": 24, "color": "#f8ea5e", "anchorY": 0.5, "anchorX": 0, "align": "left" } }, { "type": "Image", "props": { "y": 322, "x": 259, "width": 390, "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25", "anchorY": 0.5 } }, { "type": "TextInput", "props": { "y": 308, "x": 272, "width": 350, "var": "txt_qkmm", "type": "text", "restrict": "0-9", "promptColor": "#777777", "prompt": "请输入取款密码", "maxChars": 25, "height": 35, "fontSize": 24, "color": "#f8ea5e", "align": "left" } }] }] };
            return QuKuan_yhkUI;
        }(View));
        dating.QuKuan_yhkUI = QuKuan_yhkUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var QuKuan_zfbUI = /** @class */ (function (_super) {
            __extends(QuKuan_zfbUI, _super);
            function QuKuan_zfbUI() {
                return _super.call(this) || this;
            }
            QuKuan_zfbUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.QuKuan_zfbUI.uiView);
            };
            QuKuan_zfbUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 787, "var": "box", "scaleY": 1.25, "scaleX": 1.25, "height": 531, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 395, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "100,0,150,50", "height": 531 } }, { "type": "Image", "props": { "y": 0, "x": 786, "width": 395, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "100,0,150,50", "scaleX": -1, "height": 531 } }, { "type": "Image", "props": { "y": 38, "x": 394, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 39, "skin": "dating_ui/qukuan/tit_zfb.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 456, "var": "btn_bind", "stateNum": 1, "skin": "dating_ui/tongyong/btn_bd1.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 455, "x": 580, "width": 84, "stroke": 1, "height": 24, "fontSize": 24, "color": "#fffbb5", "align": "right" } }, { "type": "Button", "props": { "y": 38, "x": 743, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 465, "x": 587, "wordWrap": true, "width": 90, "var": "btn_close1", "underlineColor": "#28ff00", "underline": true, "text": "暂不绑定", "height": 22, "fontSize": 20, "color": "#00ff47", "align": "center" } }, { "type": "Text", "props": { "y": 197, "x": 99, "width": 158, "text": "支付宝账号：", "height": 24, "fontSize": 24, "color": "#c8bc9f", "align": "right" } }, { "type": "Text", "props": { "y": 134, "x": 122, "width": 135, "text": "真实姓名：", "height": 24, "fontSize": 24, "color": "#c8bc9f", "align": "right" } }, { "type": "Label", "props": { "y": 351, "x": 80, "wordWrap": true, "width": 660, "underlineColor": "#28ff00", "text": "请绑定您正确的支付宝账号和实名信息，转出时将直接转入此支付宝账号，为了您的财产安全，绑定后不可私自更改，如需修改请联系客服！", "leading": 4, "height": 58, "fontSize": 20, "color": "#ffffff", "align": "left" } }, { "type": "Image", "props": { "y": 363, "x": 61, "skin": "dating_ui/tongyong/tu_gth.png", "scaleY": 0.8, "scaleX": 0.8, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 260, "x": 99, "width": 158, "text": "取款密码：", "height": 24, "fontSize": 24, "color": "#c8bc9f", "align": "right" } }, { "type": "TextInput", "props": { "y": 147, "x": 259, "width": 390, "var": "txt_name", "type": "text", "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25", "restrict": "\\u4e00-\\u9fa5A-Za-z", "promptColor": "#777777", "prompt": "请输入真实姓名", "padding": "-1,0,0,16", "maxChars": 6, "height": 50, "fontSize": 24, "color": "#f8ea5e", "anchorY": 0.5, "anchorX": 0, "align": "left" } }, { "type": "Image", "props": { "y": 276, "x": 259, "width": 390, "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25", "anchorY": 0.5 } }, { "type": "TextInput", "props": { "y": 262, "x": 272, "width": 350, "var": "txt_qkmm", "type": "text", "restrict": "0-9", "promptColor": "#777777", "prompt": "请输入6位数字取款密码", "maxChars": 25, "height": 35, "fontSize": 24, "color": "#f8ea5e", "align": "left" } }, { "type": "TextInput", "props": { "y": 213, "x": 259, "width": 390, "var": "txt_zh", "type": "text", "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25", "restrict": "A-Za-z0-9@.", "promptColor": "#777777", "prompt": "请输入有效支付宝账号", "padding": "-1,0,0,16", "maxChars": 25, "height": 50, "fontSize": 24, "color": "#f8ea5e", "anchorY": 0.5, "anchorX": 0, "align": "left" } }] }] };
            return QuKuan_zfbUI;
        }(View));
        dating.QuKuan_zfbUI = QuKuan_zfbUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var TipsUI = /** @class */ (function (_super) {
            __extends(TipsUI, _super);
            function TipsUI() {
                return _super.call(this) || this;
            }
            TipsUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.TipsUI.uiView);
            };
            TipsUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "x": 10, "width": 608, "scaleY": 1.25, "scaleX": 1.25, "height": 358, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 304, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "100,0,150,0", "height": 380 } }, { "type": "Image", "props": { "x": 604, "width": 304, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "100,0,150,0", "scaleX": -1, "height": 380 } }, { "type": "Image", "props": { "y": 37, "x": 304, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 39, "x": 304, "skin": "dating_ui/tongyong/tit_tishi.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 72, "x": 38, "wordWrap": true, "width": 530, "var": "txt_label", "valign": "middle", "overflow": "hidden", "leading": 8, "height": 182, "fontSize": 24, "color": "#c8bc9f", "align": "center" } }, { "type": "Button", "props": { "y": 303, "var": "btn_enter", "stateNum": 1, "skin": "dating_ui/tongyong/btn_qd.png", "right": 30, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 303, "var": "btn_cancle", "stateNum": 1, "skin": "dating_ui/tongyong/btn_qx.png", "left": 30, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 34, "x": 571, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return TipsUI;
        }(View));
        dating.TipsUI = TipsUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var TipsGongGaoUI = /** @class */ (function (_super) {
            __extends(TipsGongGaoUI, _super);
            function TipsGongGaoUI() {
                return _super.call(this) || this;
            }
            TipsGongGaoUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.TipsGongGaoUI.uiView);
            };
            TipsGongGaoUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "x": 10, "width": 608, "scaleY": 1.25, "scaleX": 1.25, "height": 358, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": -1, "width": 304, "skin": "dating_ui/tongyong/tu_bk1.png", "sizeGrid": "100,0,150,0", "height": 358 } }, { "type": "Image", "props": { "y": 0, "x": 605, "width": 304, "skin": "dating_ui/tongyong/tu_bk1.png", "sizeGrid": "100,0,150,0", "scaleX": -1, "height": 358 } }, { "type": "Image", "props": { "y": 37, "x": 304, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 39, "x": 304, "skin": "dating_ui/tongyong/tit_tishi.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 76, "x": 25, "wordWrap": true, "width": 200, "valign": "middle", "text": "亲爱的玩家朋友：", "leading": 8, "fontSize": 24, "color": "#ffffff", "align": "left" } }, { "type": "Label", "props": { "y": 103, "x": 25, "wordWrap": true, "width": 559, "var": "txt_label", "valign": "middle", "leading": 8, "height": 206, "fontSize": 24, "color": "#ffffff", "align": "left" } }] }] };
            return TipsGongGaoUI;
        }(View));
        dating.TipsGongGaoUI = TipsGongGaoUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var TipsXiaLaUI = /** @class */ (function (_super) {
            __extends(TipsXiaLaUI, _super);
            function TipsXiaLaUI() {
                return _super.call(this) || this;
            }
            TipsXiaLaUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.TipsXiaLaUI.uiView);
            };
            TipsXiaLaUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 438, "var": "boxTips", "height": 79, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 37, "width": 352, "var": "image_Bg", "skin": "dating_ui/tongyong/tu_di8.png", "sizeGrid": "12,28,15,28", "height": 43, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 36, "x": 219, "var": "box_tip", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Text", "props": { "y": 0, "x": 0, "width": 842, "var": "txtTips", "height": 24, "fontSize": 24, "color": "#ffffff", "align": "center" } }] }] }] };
            return TipsXiaLaUI;
        }(View));
        dating.TipsXiaLaUI = TipsXiaLaUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var TopUI = /** @class */ (function (_super) {
            __extends(TopUI, _super);
            function TopUI() {
                return _super.call(this) || this;
            }
            TopUI.prototype.createChildren = function () {
                View.regComponent("ui.dating.component.TopTUI", ui.dating.component.TopTUI);
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.TopUI.uiView);
            };
            TopUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "y": 10, "x": 10, "width": 787, "scaleY": 1.25, "scaleX": 1.25, "height": 531, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 1, "skin": "dating_ui/tongyong/tu_bk2.png" } }, { "type": "Image", "props": { "y": 0, "x": 785, "skin": "dating_ui/tongyong/tu_bk1.png", "scaleX": -1 } }, { "type": "Image", "props": { "y": 32, "x": 394, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 37, "x": 394, "skin": "dating_ui/top/tit_ranking.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "List", "props": { "x": 190, "width": 575, "var": "list", "spaceY": 2, "height": 328, "centerY": -26, "cacheAsBitmap": true, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "TopT", "props": { "y": 0, "x": 0, "renderType": "render", "runtime": "ui.dating.component.TopTUI" } }] }, { "type": "Tab", "props": { "y": 72, "x": 14, "var": "tab" }, "child": [{ "type": "Button", "props": { "stateNum": 2, "skin": "dating_ui/top/btn_topfh.png", "name": "item0" } }, { "type": "Button", "props": { "y": 66, "stateNum": 2, "skin": "dating_ui/top/btn_topyj.png", "name": "item1" } }, { "type": "Button", "props": { "y": 133, "stateNum": 2, "skin": "dating_ui/top/btn_xyx.png", "name": "item2" } }] }, { "type": "Box", "props": { "y": 401, "x": 182, "var": "box_my" }, "child": [{ "type": "Image", "props": { "y": 1, "x": 1, "width": 587, "skin": "dating_ui/top/tu_toplb4.png", "sizeGrid": "11,12,13,11", "height": 84 } }, { "type": "Image", "props": { "y": 43, "x": 518, "visible": false, "var": "img_rank", "skin": "dating_ui/top/top1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 41, "x": 109, "var": "img_head", "skin": "dating_ui/touxiang/head_1.png", "scaleY": 0.75, "scaleX": 0.75, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 15, "x": 190, "width": 176, "var": "txt_id", "height": 19, "fontSize": 20, "color": "#efda8b" } }, { "type": "Image", "props": { "y": 42, "x": 191, "width": 179, "skin": "dating_ui/tongyong/tu_k1ss.png", "sizeGrid": "0,17,0,14", "height": 29, "alpha": 0.5 } }, { "type": "Image", "props": { "y": 55, "x": 202, "skin": "dating_ui/tongyong/icon_money.png", "scaleY": 0.9, "scaleX": 0.9, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "skin": "dating_ui/top/tu_zj.png" } }, { "type": "Text", "props": { "y": 35, "x": 483, "width": 78, "visible": false, "var": "txt_no", "text": "未上榜", "height": 25, "fontSize": 24, "color": "#efda8b" } }, { "type": "Clip", "props": { "y": 30, "x": 519, "visible": false, "var": "clip_num", "skin": "dating_ui/tongyong/clip_top.png", "index": 0, "clipX": 10, "anchorX": 0.5 } }, { "type": "Clip", "props": { "y": 42, "x": 220, "var": "clip_money", "skin": "dating_ui/tongyong/clip_money1.png", "clipX": 11 } }] }, { "type": "Button", "props": { "y": 39, "x": 744, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return TopUI;
        }(View));
        dating.TopUI = TopUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var TouXiangUI = /** @class */ (function (_super) {
            __extends(TouXiangUI, _super);
            function TouXiangUI() {
                return _super.call(this) || this;
            }
            TouXiangUI.prototype.createChildren = function () {
                View.regComponent("ui.dating.component.HeadRenderTUI", ui.dating.component.HeadRenderTUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.TouXiangUI.uiView);
            };
            TouXiangUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 722, "height": 438, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 2, "width": 360, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "90,0,160,50", "height": 460 } }, { "type": "Image", "props": { "y": 0, "x": 721, "width": 360, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "90,0,160,50", "scaleX": -1, "height": 460 } }, { "type": "Button", "props": { "y": 386, "var": "btn_change", "stateNum": 1, "skin": "dating_ui/tongyong/btn_qd.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Tab", "props": { "y": 48, "x": 247, "width": 222, "var": "tab", "selectedIndex": -1, "height": 20, "direction": "horizontal", "anchorY": 0.5 }, "child": [{ "type": "Button", "props": { "y": 0, "x": 110, "stateNum": 3, "skin": "dating_ui/tongyong/btn_n.png", "name": "item0", "labelStrokeColor": "#32291f", "labelStroke": 2, "labelSize": 26, "labelFont": "SimHei", "labelColors": "#9a8c70,#fdf5dc,#fdf5dc", "label": "男", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 0, "x": 330, "stateNum": 3, "skin": "dating_ui/tongyong/btn_l.png", "name": "item1", "labelStrokeColor": "32291f", "labelStroke": 2, "labelSize": 26, "labelFont": "SimHei", "labelColors": "#9a8c70,#fdf5dc,#fdf5dc", "label": "女", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "List", "props": { "y": 81, "x": 38, "width": 649, "var": "list", "spaceY": 24, "spaceX": 24, "repeatY": 2, "repeatX": 5, "height": 247, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "HeadRenderT", "props": { "y": 55, "x": 55, "renderType": "render", "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.dating.component.HeadRenderTUI" } }] }, { "type": "Button", "props": { "y": 39, "x": 681, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return TouXiangUI;
        }(View));
        dating.TouXiangUI = TouXiangUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var TuiGuangUI = /** @class */ (function (_super) {
            __extends(TuiGuangUI, _super);
            function TuiGuangUI() {
                return _super.call(this) || this;
            }
            TuiGuangUI.prototype.createChildren = function () {
                View.regComponent("ui.dating.component.TuiGuangMX_TUI", ui.dating.component.TuiGuangMX_TUI);
                View.regComponent("ui.dating.component.FenXiangT5UI", ui.dating.component.FenXiangT5UI);
                View.regComponent("ui.dating.component.FenXiangT6UI", ui.dating.component.FenXiangT6UI);
                View.regComponent("ui.dating.component.YongHuTUI", ui.dating.component.YongHuTUI);
                View.regComponent("ui.dating.component.TuiGuangTUI", ui.dating.component.TuiGuangTUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.TuiGuangUI.uiView);
            };
            TuiGuangUI.uiView = { "type": "View", "props": { "width": 1280, "skin": "ui/dating_ui//tu_wdyh2.png", "height": 720 }, "child": [{ "type": "Box", "props": { "width": 926, "scaleY": 1.25, "scaleX": 1.25, "height": 531, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 1, "width": 462, "skin": "dating_ui/tongyong/tu_bk2.png", "sizeGrid": "90,0,64,200" } }, { "type": "Image", "props": { "y": 0, "x": 923, "width": 462, "skin": "dating_ui/tongyong/tu_bk1.png", "sizeGrid": "90,0,64,40", "scaleX": -1 } }, { "type": "Image", "props": { "y": 34, "x": 463, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 37, "var": "img_type", "skin": "dating_ui/tuiguang/tit_daili.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 74, "x": 192, "width": 711, "var": "box0", "height": 407 }, "child": [{ "type": "Box", "props": { "y": 7, "x": 4 }, "child": [{ "type": "Image", "props": { "width": 334, "skin": "dating_ui/tuiguang/tu_d2.png", "sizeGrid": "20,15,15,12", "height": 193 } }, { "type": "Label", "props": { "y": 17, "x": 171, "wordWrap": true, "width": 150, "var": "txt_szzjl", "text": "0", "height": 22, "fontSize": 20, "color": "#ff6600", "align": "right" } }, { "type": "Label", "props": { "y": 17, "x": 37, "wordWrap": true, "width": 192, "var": "txt_w0", "text": "上周总奖励：", "leading": 16, "height": 24, "fontSize": 20, "color": "#ac8177", "align": "left" } }, { "type": "Label", "props": { "y": 53, "x": 171, "wordWrap": true, "width": 150, "var": "txt_zswjrs", "text": "0", "height": 22, "fontSize": 20, "color": "#ff6600", "align": "right" } }, { "type": "Label", "props": { "y": 89, "x": 171, "wordWrap": true, "width": 150, "var": "txt_qtwjrs", "text": "0", "height": 22, "fontSize": 20, "color": "#ff6600", "align": "right" } }, { "type": "Label", "props": { "y": 124, "x": 171, "wordWrap": true, "width": 150, "var": "txt_szzswjjj", "text": "0", "height": 22, "fontSize": 20, "color": "#ff6600", "align": "right" } }, { "type": "Label", "props": { "y": 160, "x": 171, "wordWrap": true, "width": 150, "var": "txt_szqtwjjj", "text": "0", "height": 22, "fontSize": 20, "color": "#ff6600", "align": "right" } }, { "type": "Image", "props": { "y": 62, "x": 21, "skin": "dating_ui/tuiguang/tu_r.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 99, "x": 21, "width": 22, "skin": "dating_ui/tuiguang/tu_r.png", "height": 27, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 27, "x": 21, "skin": "dating_ui/tuiguang/tu_b.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 137, "x": 21, "skin": "dating_ui/tuiguang/tu_b.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 171, "x": 22, "skin": "dating_ui/tuiguang/tu_b.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 53, "x": 37, "wordWrap": true, "width": 192, "var": "txt_w1", "text": "直属玩家人数：", "leading": 16, "height": 24, "fontSize": 20, "color": "#ac8177", "align": "left" } }, { "type": "Label", "props": { "y": 89, "x": 37, "wordWrap": true, "width": 192, "var": "txt_w2", "text": "其他玩家人数：", "leading": 16, "height": 24, "fontSize": 20, "color": "#ac8177", "align": "left" } }, { "type": "Label", "props": { "y": 124, "x": 37, "wordWrap": true, "width": 192, "var": "txt_w3", "text": "上周直属玩家奖励：", "leading": 16, "height": 24, "fontSize": 20, "color": "#ac8177", "align": "left" } }, { "type": "Label", "props": { "y": 160, "x": 37, "wordWrap": true, "width": 192, "var": "txt_w4", "text": "上周其他玩家奖励：", "leading": 16, "height": 24, "fontSize": 20, "color": "#ac8177", "align": "left" } }] }, { "type": "Box", "props": { "y": 200, "x": 3 }, "child": [{ "type": "Image", "props": { "y": 9, "x": 0, "skin": "dating_ui/tuiguang/tu_d.png" } }, { "type": "Image", "props": { "y": 9, "x": 173, "skin": "dating_ui/tuiguang/tu_d.png" } }, { "type": "Image", "props": { "y": 20, "x": 23, "skin": "dating_ui/tuiguang/wz_1.png" } }, { "type": "Image", "props": { "y": 19, "x": 199, "skin": "dating_ui/tuiguang/wz_2.png" } }, { "type": "Button", "props": { "y": 153, "x": 0, "width": 335, "var": "btn_lq", "stateNum": 1, "skin": "dating_ui/tongyong/btn_lq.png", "sizeGrid": "0,11,0,11", "labelSize": 30, "height": 50 }, "child": [{ "type": "Image", "props": { "skin": "dating_ui/tuiguang/wz_lq.png", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Label", "props": { "y": 122, "x": 6, "wordWrap": true, "width": 150, "var": "txt_record", "text": "0元", "height": 22, "fontSize": 20, "color": "#ff6600", "align": "center" } }, { "type": "Label", "props": { "y": 122, "x": 179, "wordWrap": true, "width": 150, "var": "txt_ktq", "text": "0元", "height": 22, "fontSize": 20, "color": "#ff6600", "align": "center" } }, { "type": "Image", "props": { "y": 44, "x": 30, "skin": "dating_ui/tuiguang/tu_bx1.png" } }, { "type": "Image", "props": { "y": 44, "x": 204, "skin": "dating_ui/tuiguang/tu_bx2.png" } }] }, { "type": "Box", "props": { "y": 6, "x": 346, "width": 360, "height": 396 }, "child": [{ "type": "Button", "props": { "y": 339.5, "x": 273.5, "var": "btn_help", "stateNum": 1, "skin": "dating_ui/tuiguang/btn_bz.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 51.5, "x": 279.5, "var": "btn_wxhy", "stateNum": 1, "skin": "dating_ui/tuiguang/btn_hy.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 339.5, "x": 90.5, "var": "btn_record", "stateNum": 1, "skin": "dating_ui/tuiguang/btn_jl.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 165.5, "x": 279.5, "var": "btn_fxq", "stateNum": 1, "skin": "dating_ui/tuiguang/btn_q.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 1.5, "x": 5.5, "width": 182, "skin": "dating_ui/tuiguang/tu_d1.png", "sizeGrid": "16,14,14,18", "height": 215 } }, { "type": "Image", "props": { "y": 92.5, "x": 96.5, "width": 180, "var": "img_ewm", "scaleY": 0.9, "scaleX": 0.9, "height": 180, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 184.5, "x": 10.5, "wordWrap": true, "width": 171, "text": "点击图片放大", "height": 22, "fontSize": 20, "color": "#696291", "align": "center" } }, { "type": "Box", "props": { "y": 252, "x": 182, "var": "box_share", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "dating_ui/tuiguang/tu_yy.png" } }, { "type": "Label", "props": { "y": 6.5, "x": 228.5, "width": 35, "var": "txt_daysharegivemoney", "text": "20", "strokeColor": "#873900", "stroke": 2, "height": 32, "fontSize": 26, "color": "#fffc00", "bold": true, "align": "center" } }] }, { "type": "Box", "props": { "y": 252, "x": 182, "visible": false, "var": "box_no_share", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "dating_ui/tuiguang/tu_yy1.png" } }, { "type": "Label", "props": { "y": 7, "x": 20, "width": 319, "var": "txt_gw", "text": "http://www.dazhongqp.com", "strokeColor": "#873900", "stroke": 2, "height": 32, "fontSize": 24, "color": "#fffc00", "bold": true, "align": "center" } }] }] }] }, { "type": "Box", "props": { "y": 75, "x": 193, "width": 706, "var": "box1", "height": 406 }, "child": [{ "type": "Image", "props": { "y": 36, "x": -1, "width": 706, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11" } }, { "type": "Image", "props": { "y": 380, "x": -1, "width": 706, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11", "scaleY": -1 } }, { "type": "Box", "props": { "y": 17, "x": -46, "var": "box1_0" }, "child": [{ "type": "Label", "props": { "y": 370, "x": 58, "wordWrap": true, "width": 388, "text": "无限代代理佣金制度表（每次返佣金额累计）", "height": 22, "fontSize": 18, "color": "#c8bc9f", "align": "left" } }, { "type": "Image", "props": { "y": 0, "x": 389, "skin": "dating_ui/tuiguang/tg_1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 0, "x": 130, "skin": "dating_ui/tuiguang/tg_2.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 0, "x": 663, "skin": "dating_ui/tuiguang/tg_3.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "List", "props": { "y": 22, "x": 45, "width": 710, "var": "list_mx", "spaceY": 1, "height": 337 }, "child": [{ "type": "TuiGuangMX_T", "props": { "renderType": "render", "runtime": "ui.dating.component.TuiGuangMX_TUI" } }] }] }, { "type": "Box", "props": { "y": 17, "x": -46, "var": "box1_1" }, "child": [{ "type": "Box", "props": { "y": -11, "x": 46, "width": 704, "height": 30 }, "child": [{ "type": "Image", "props": { "y": 11, "skin": "dating_ui/tuiguang/tg_11.png", "left": 47, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 10, "x": -39.5, "skin": "dating_ui/tuiguang/tg_22.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 10, "x": -39.5, "skin": "dating_ui/tuiguang/tg_33.png", "right": 44, "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "List", "props": { "y": 22, "x": 45, "width": 710, "var": "list_fsmx", "spaceY": 1, "height": 337 }, "child": [{ "type": "TuiGuangMX_T", "props": { "renderType": "render", "runtime": "ui.dating.component.TuiGuangMX_TUI" } }] }] }, { "type": "Label", "props": { "y": 10, "x": 10, "width": 232, "visible": false, "var": "txt_no", "text": "---暂无数据---", "height": 22, "fontSize": 20, "color": "#efda8b", "centerY": -1, "centerX": 0, "align": "center" } }] }, { "type": "Box", "props": { "y": 75, "x": 194, "width": 705, "var": "box2", "height": 406 }, "child": [{ "type": "Image", "props": { "y": 17, "x": 67, "skin": "dating_ui/tuiguang/bb_je.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 18, "x": 214, "skin": "dating_ui/tuiguang/bb_lx.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 18, "x": 591, "skin": "dating_ui/tuiguang/bb_sj.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 18, "x": 393, "skin": "dating_ui/tuiguang/bb_ly.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 35, "x": 0, "width": 706, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11" } }, { "type": "List", "props": { "y": 38, "x": 0, "width": 710, "visible": false, "var": "list2", "spaceY": 1, "height": 334, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "FenXiangT5", "props": { "renderType": "render", "runtime": "ui.dating.component.FenXiangT5UI" } }] }, { "type": "Box", "props": { "width": 323, "var": "box_no_2", "height": 178, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 150.5, "wordWrap": true, "width": 329, "text": "当前还未领取过奖励哦！", "height": 22, "fontSize": 20, "color": "#efda8b", "align": "center" } }, { "type": "Image", "props": { "y": 68.5, "x": 162, "skin": "dating_ui/tuiguang/tu_hb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 379, "x": 0, "width": 706, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11", "scaleY": -1 } }, { "type": "Label", "props": { "y": 386, "x": 13, "wordWrap": true, "width": 679, "text": "玩家通过您分享的链接下载并且充值　　     金额，您即可获得　　    现金奖励", "height": 22, "fontSize": 18, "color": "#c8bc9f", "align": "left" } }, { "type": "Label", "props": { "y": 385, "x": 508, "width": 52, "var": "txt_agency_sharereward", "height": 22, "fontSize": 18, "color": "#28ff00", "align": "center" } }, { "type": "Label", "props": { "y": 385, "x": 303, "width": 57, "var": "txt_agency_shareminpay", "height": 22, "fontSize": 18, "color": "#28ff00", "align": "center" } }] }, { "type": "Box", "props": { "y": 75, "x": 192, "width": 706, "var": "box3", "height": 406 }, "child": [{ "type": "Image", "props": { "y": 35, "x": 0, "width": 706, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11" } }, { "type": "Box", "props": { "y": 3, "x": 0, "width": 710, "var": "box3_0", "height": 408 }, "child": [{ "type": "Image", "props": { "y": 90.5, "x": 82, "skin": "dating_ui/tuiguang/bb_yh.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 90.5, "x": 425, "skin": "dating_ui/tuiguang/bb_qdyj.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 90.5, "x": 244, "skin": "dating_ui/tuiguang/bb_yj.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "List", "props": { "y": 113, "x": 0, "width": 710, "visible": false, "var": "list3", "spaceY": 1, "height": 281 }, "child": [{ "type": "FenXiangT6", "props": { "y": 0, "x": 0, "renderType": "render", "runtime": "ui.dating.component.FenXiangT6UI" } }] }, { "type": "Box", "props": { "y": 14.5, "x": 0 }, "child": [{ "type": "Box", "props": { "y": 21, "x": 0, "width": 702, "height": 38 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 704, "skin": "dating_ui/tongyong/tu_bb1.png", "sizeGrid": "0,5,0,4", "height": 38, "alpha": 0.2 } }, { "type": "Label", "props": { "y": 8, "x": 14, "width": 130, "var": "txt_name1", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 8, "x": 167, "width": 160, "var": "txt_yj", "height": 22, "fontSize": 20, "color": "#008aff", "align": "center" } }, { "type": "Label", "props": { "y": 8, "x": 532, "width": 160, "var": "txt_selffy", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 8, "x": 352, "width": 160, "var": "txt_allfy", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }] }, { "type": "Image", "props": { "y": 0, "x": 82, "skin": "dating_ui/tuiguang/bb_yh.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 0, "x": 612, "skin": "dating_ui/tuiguang/bb_zdyj.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 0, "x": 425, "skin": "dating_ui/tuiguang/bb_qdyj.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 0, "x": 244, "skin": "dating_ui/tuiguang/bb_yj.png", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 108, "x": 10, "width": 706, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11" } }] }, { "type": "Box", "props": { "y": 0, "x": 0, "width": 706, "var": "box3_1", "height": 406 }, "child": [{ "type": "Box", "props": { "y": 17, "x": 0 }, "child": [{ "type": "Image", "props": { "x": 82, "skin": "dating_ui/tuiguang/bb_yh.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "x": 612, "skin": "dating_ui/tuiguang/bb_fs.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "x": 244, "skin": "dating_ui/tuiguang/bb_tz.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 21, "x": 0, "width": 702, "height": 38 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 704, "skin": "dating_ui/tongyong/tu_bb1.png", "sizeGrid": "0,5,0,4", "height": 38, "alpha": 0.2 } }, { "type": "Label", "props": { "y": 8, "x": 14, "width": 130, "var": "txt_name", "height": 22, "fontSize": 16, "color": "#cfc9b1", "align": "center" } }, { "type": "Label", "props": { "y": 8, "x": 167, "width": 160, "var": "txt_validBet", "height": 22, "fontSize": 20, "color": "#008aff", "align": "center" } }, { "type": "Label", "props": { "y": 8, "x": 532, "width": 160, "var": "txt_fanshui", "height": 22, "fontSize": 20, "color": "#cfc9b1", "align": "center" } }] }] }, { "type": "Box", "props": { "y": 94, "x": 0 }, "child": [{ "type": "Image", "props": { "x": 82, "skin": "dating_ui/tuiguang/bb_yh.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 0, "x": 425, "skin": "dating_ui/tuiguang/tg_111.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 0, "x": 611, "skin": "dating_ui/tuiguang/bb_yj1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "x": 244, "skin": "dating_ui/tuiguang/bb_ss.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 18, "width": 706, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11" } }, { "type": "List", "props": { "y": 21, "x": 0, "width": 710, "visible": false, "var": "list_child", "spaceY": 1, "height": 285 }, "child": [{ "type": "FenXiangT6", "props": { "y": 0, "x": 0, "renderType": "render", "runtime": "ui.dating.component.FenXiangT6UI" } }] }] }] }, { "type": "Box", "props": { "width": 323, "var": "box_no_3", "height": 178, "centerY": 20, "centerX": 2, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 150.5, "wordWrap": true, "width": 329, "text": "暂时没有记录，快去分享给好友吧！", "height": 22, "fontSize": 20, "color": "#efda8b", "align": "center" } }, { "type": "Image", "props": { "y": 68.5, "x": 162, "skin": "dating_ui/tuiguang/tu_hb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] }, { "type": "Box", "props": { "y": 74, "x": 188, "width": 715, "var": "box4", "height": 411 }, "child": [{ "type": "Box", "props": { "y": 5, "width": 717, "var": "box4_0", "height": 401 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 1, "width": 716, "height": 459 }, "child": [{ "type": "Image", "props": { "y": 1, "x": 571, "skin": "dating_ui/tuiguang/tu_wdyh5.png" } }, { "type": "Image", "props": { "y": 0, "x": 399, "skin": "dating_ui/tuiguang/tu_wdyh7.png" } }, { "type": "Image", "props": { "x": 217, "skin": "dating_ui/tuiguang/tu_wdyh6.png" } }, { "type": "Image", "props": { "x": 32, "skin": "dating_ui/tuiguang/bb_yh.png" } }, { "type": "Image", "props": { "y": 30, "width": 706, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11" } }, { "type": "Image", "props": { "y": 360, "x": -1, "width": 706, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11", "height": 3 } }] }] }, { "type": "Box", "props": { "y": 5, "x": 0, "width": 717, "var": "box4_1", "height": 401 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 1, "width": 716, "height": 459 }, "child": [{ "type": "Image", "props": { "y": 1, "x": 571, "skin": "dating_ui/tuiguang/tu_wdyh5.png" } }, { "type": "Image", "props": { "y": 0, "x": 396, "skin": "dating_ui/tuiguang/tu_wdyh4.png" } }, { "type": "Image", "props": { "y": 0, "x": 217, "skin": "dating_ui/tuiguang/tu_wdyh3.png" } }, { "type": "Image", "props": { "y": 0, "x": 42, "skin": "dating_ui/tuiguang/bb_yh.png" } }, { "type": "Image", "props": { "y": 30, "width": 706, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11" } }, { "type": "Image", "props": { "y": 373, "x": 10, "width": 706, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11", "height": 3 } }] }] }, { "type": "List", "props": { "y": 33, "x": 0, "width": 706, "var": "list_yonghu", "spaceY": 6, "height": 331 }, "child": [{ "type": "YongHuT", "props": { "y": 3, "x": 0, "renderType": "render", "runtime": "ui.dating.component.YongHuTUI" } }] }, { "type": "Box", "props": { "y": 148, "x": 12, "width": 158, "var": "box_btn", "height": 267 }, "child": [{ "type": "Button", "props": { "y": 0, "x": 27, "width": 100, "var": "btn_0", "stateNum": 1, "skin": "dating_ui/tongyong/btn_rq.png", "sizeGrid": "0,21,0,19", "labelSize": 20, "labelColors": "#fdffd1" } }, { "type": "Button", "props": { "y": 33, "x": 27, "width": 100, "var": "btn_1", "stateNum": 1, "skin": "dating_ui/tongyong/btn_rq.png", "sizeGrid": "0,21,0,19", "labelSize": 20, "labelColors": "#fdffd1" } }, { "type": "Button", "props": { "y": 66, "x": 27, "width": 100, "var": "btn_2", "stateNum": 1, "skin": "dating_ui/tongyong/btn_rq.png", "sizeGrid": "0,21,0,19", "labelSize": 20, "labelColors": "#fdffd1" } }, { "type": "Button", "props": { "y": 99, "x": 27, "width": 100, "var": "btn_3", "stateNum": 1, "skin": "dating_ui/tongyong/btn_rq.png", "sizeGrid": "0,21,0,19", "labelSize": 20, "labelColors": "#fdffd1" } }, { "type": "Button", "props": { "y": 132, "x": 27, "width": 100, "var": "btn_4", "stateNum": 1, "skin": "dating_ui/tongyong/btn_rq.png", "sizeGrid": "0,21,0,19", "labelSize": 20, "labelColors": "#fdffd1" } }, { "type": "Button", "props": { "y": 165, "x": 27, "width": 100, "var": "btn_5", "stateNum": 1, "skin": "dating_ui/tongyong/btn_rq.png", "sizeGrid": "0,21,0,19", "labelSize": 20, "labelColors": "#fdffd1" } }, { "type": "Button", "props": { "y": 198, "x": 27, "width": 100, "var": "btn_6", "stateNum": 1, "skin": "dating_ui/tongyong/btn_rq.png", "sizeGrid": "0,21,0,19", "labelSize": 20, "labelColors": "#fdffd1" } }] }, { "type": "Button", "props": { "y": 379, "x": 40, "width": 100, "var": "btn_select", "stateNum": 1, "skin": "dating_ui/tongyong/btn_rq.png", "sizeGrid": "0,21,0,19", "labelSize": 20, "labelColors": "#fdffd1", "height": 29 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 70, "skin": "dating_ui/tongyong/tu_jtt.png" } }] }, { "type": "Box", "props": { "y": 10, "x": 10, "width": 323, "var": "box_no_4", "height": 178, "centerY": 20, "centerX": 2, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 68.5, "x": 162, "skin": "dating_ui/tuiguang/tu_hb.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 141.5, "x": 0, "wordWrap": true, "width": 329, "text": "---暂无数据---", "height": 22, "fontSize": 20, "color": "#efda8b", "align": "center" } }] }, { "type": "Box", "props": { "y": 379, "x": 200, "width": 490, "var": "box_huizong", "height": 29 }, "child": [{ "type": "Label", "props": { "y": 3, "x": 3, "width": 130, "var": "txt_huizong0", "height": 25, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Label", "props": { "y": 3, "x": 184, "width": 130, "var": "txt_huizong1", "height": 25, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Label", "props": { "y": 3, "x": 358, "width": 130, "var": "txt_huizong2", "height": 25, "fontSize": 20, "color": "#ffffff", "align": "center" } }] }] }, { "type": "Box", "props": { "y": 74, "x": 192, "width": 708, "var": "box5", "height": 407 }, "child": [{ "type": "Box", "props": { "y": 5, "x": 4, "var": "box5_0" }, "child": [{ "type": "Label", "props": { "y": 376, "wordWrap": true, "width": 688, "var": "txt_total", "text": "返佣总合计：26400+24000+10000+6500+27000=93900元", "leading": 4, "height": 22, "fontSize": 20, "color": "#efda8b", "align": "left" } }, { "type": "Label", "props": { "wordWrap": true, "width": 703, "text": "计算方式：总返佣=直属返佣+级别返佣\\n无限代理连接团队所有人产生的业绩=总业绩。按照总业绩获取佣金！\\n120+450+300+100+50=1020万", "leading": 4, "height": 72, "fontSize": 20, "color": "#c8bc9f", "align": "left" } }, { "type": "Image", "props": { "y": 85, "x": 72, "skin": "dating_ui/tuiguang/tu_tg2_1.png" } }, { "type": "Label", "props": { "y": 111, "x": 283, "wordWrap": true, "var": "txt_yeji0", "leading": 4, "height": 22, "fontSize": 20, "color": "#ffffff", "align": "left" } }, { "type": "Label", "props": { "y": 208, "x": 124, "wordWrap": true, "var": "txt_yeji1", "leading": 4, "height": 22, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Label", "props": { "y": 208, "x": 436, "wordWrap": true, "var": "txt_yeji3", "leading": 4, "height": 22, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Label", "props": { "y": 308, "x": 124, "wordWrap": true, "var": "txt_yeji2", "leading": 4, "height": 22, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Label", "props": { "y": 308, "x": 444, "wordWrap": true, "var": "txt_yeji4", "leading": 4, "height": 22, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Label", "props": { "y": 111, "x": 371, "width": 112, "var": "txt_fanyongbili0", "leading": 4, "height": 22, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Label", "props": { "y": 137, "x": 270, "width": 210, "var": "txt_fanyongmoney0", "leading": 4, "height": 22, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Label", "props": { "y": 235, "x": 111, "width": 210, "var": "txt_fanyongmoney1", "leading": 4, "height": 22, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Label", "props": { "y": 235, "x": 421, "width": 210, "var": "txt_fanyongmoney3", "leading": 4, "height": 22, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Label", "props": { "y": 335, "x": 111, "width": 210, "var": "txt_fanyongmoney2", "leading": 4, "height": 22, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Label", "props": { "y": 335, "x": 421, "width": 210, "var": "txt_fanyongmoney4", "leading": 4, "height": 22, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Label", "props": { "y": 208, "x": 214, "width": 112, "var": "txt_fanyongbili1", "leading": 4, "height": 22, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Label", "props": { "y": 208, "x": 524, "width": 112, "var": "txt_fanyongbili3", "leading": 4, "height": 22, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Label", "props": { "y": 308, "x": 213, "width": 112, "var": "txt_fanyongbili2", "leading": 4, "height": 22, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Label", "props": { "y": 308, "x": 523, "width": 112, "var": "txt_fanyongbili4", "leading": 4, "height": 22, "fontSize": 20, "color": "#ffffff", "align": "center" } }] }, { "type": "Box", "props": { "y": 6, "x": 15, "width": 676, "visible": false, "var": "box5_1", "height": 399 }, "child": [{ "type": "Image", "props": { "skin": "dating_ui/tuiguang/tu_tg2_2.png" } }, { "type": "Label", "props": { "y": 56, "x": 329, "wordWrap": true, "width": 42, "var": "txt_percent0", "leading": 4, "height": 21, "fontSize": 20, "color": "#eaff00", "align": "left" } }, { "type": "Label", "props": { "y": 132, "x": 346, "wordWrap": true, "width": 42, "var": "txt_percent1", "leading": 4, "height": 21, "fontSize": 20, "color": "#eaff00", "align": "left" } }, { "type": "Label", "props": { "y": 211, "x": 371, "wordWrap": true, "width": 42, "var": "txt_percent2", "leading": 4, "height": 21, "fontSize": 20, "color": "#eaff00", "align": "left" } }, { "type": "Label", "props": { "y": 303, "x": 502, "wordWrap": true, "width": 34, "var": "txt_percent3", "text": "30%", "leading": 4, "height": 16, "fontSize": 16, "color": "#eaff00", "align": "left" } }, { "type": "Label", "props": { "y": 323, "x": 381, "wordWrap": true, "width": 34, "var": "txt_percent4", "text": "30%", "leading": 4, "height": 16, "fontSize": 16, "color": "#eaff00", "align": "left" } }, { "type": "Label", "props": { "y": 343, "x": 381, "wordWrap": true, "width": 34, "var": "txt_percent5", "text": "30%", "leading": 4, "height": 16, "fontSize": 16, "color": "#eaff00", "align": "left" } }, { "type": "Label", "props": { "y": 343, "x": 430, "wordWrap": true, "width": 34, "var": "txt_percent6", "text": "30%", "leading": 4, "height": 16, "fontSize": 16, "color": "#eaff00", "align": "left" } }, { "type": "Label", "props": { "y": 361, "x": 121, "wordWrap": true, "width": 34, "var": "txt_percent7", "text": "30%", "leading": 4, "height": 16, "fontSize": 16, "color": "#eaff00", "align": "left" } }, { "type": "Label", "props": { "y": 361, "x": 218, "wordWrap": true, "width": 34, "var": "txt_percent8", "text": "30%", "leading": 4, "height": 16, "fontSize": 16, "color": "#eaff00", "align": "left" } }, { "type": "Label", "props": { "y": 361, "x": 267, "wordWrap": true, "width": 34, "var": "txt_percent9", "text": "30%", "leading": 4, "height": 16, "fontSize": 16, "color": "#eaff00", "align": "left" } }] }] }, { "type": "Box", "props": { "y": 75, "x": 193, "width": 706, "var": "box6", "height": 406 }, "child": [{ "type": "Image", "props": { "y": 35, "x": 0, "width": 706, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11" } }, { "type": "Image", "props": { "y": 16, "x": 88, "skin": "dating_ui/tuiguang/tg_pm.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 16, "x": 324, "skin": "dating_ui/tuiguang/tg_xx.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 16, "x": 580, "skin": "dating_ui/tuiguang/tg_fl.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "List", "props": { "y": 40, "x": 1, "width": 704, "var": "list", "height": 369 }, "child": [{ "type": "TuiGuangT", "props": { "renderType": "render", "runtime": "ui.dating.component.TuiGuangTUI" } }] }] }, { "type": "Tab", "props": { "y": 72, "x": 13, "width": 161, "var": "tab", "selectedIndex": -1, "height": 413 }, "child": [{ "type": "Button", "props": { "y": 0, "x": 1, "stateNum": 2, "skin": "dating_ui/tuiguang/btn_fx.png", "name": "item0" } }, { "type": "Button", "props": { "y": 65, "x": 1, "width": 175, "stateNum": 2, "skin": "dating_ui/tuiguang/btn_mx.png", "name": "item1", "height": 60 } }, { "type": "Button", "props": { "y": 130, "x": 1, "stateNum": 2, "skin": "dating_ui/tuiguang/btn_jljl.png", "name": "item2" } }, { "type": "Button", "props": { "y": 195, "x": 1, "stateNum": 2, "skin": "dating_ui/tuiguang/btn_jlmx.png", "name": "item3" } }, { "type": "Button", "props": { "y": 260, "x": 2, "stateNum": 2, "skin": "dating_ui/tuiguang/btn_yh.png", "name": "item4" } }, { "type": "Button", "props": { "y": 325, "x": 1, "stateNum": 2, "skin": "dating_ui/tuiguang/btn_jc.png", "name": "item5" } }, { "type": "Button", "props": { "y": 390, "x": 1, "stateNum": 2, "skin": "dating_ui/tuiguang/btn_zb.png", "name": "item6" } }] }, { "type": "Button", "props": { "y": 39, "x": 884, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return TuiGuangUI;
        }(View));
        dating.TuiGuangUI = TuiGuangUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var TuiGuangHelpUI = /** @class */ (function (_super) {
            __extends(TuiGuangHelpUI, _super);
            function TuiGuangHelpUI() {
                return _super.call(this) || this;
            }
            TuiGuangHelpUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.TuiGuangHelpUI.uiView);
            };
            TuiGuangHelpUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 788, "scaleY": 1.25, "scaleX": 1.25, "height": 531, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "width": 395, "skin": "dating_ui/tongyong/tu_bk1.png" } }, { "type": "Image", "props": { "y": 0, "x": 785, "width": 395, "skin": "dating_ui/tongyong/tu_bk1.png", "scaleX": -1 } }, { "type": "Image", "props": { "y": 37, "x": 394, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 38, "x": 394, "skin": "dating_ui/tuiguang/tit_xx.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 83, "x": 27, "wordWrap": true, "width": 732, "text": "1.新玩家使用您的推广链接或二维码下载游戏并登录，即可成为您的直属玩家。 \\n2.通过您直属玩家的推广链接或维码下载并登录的新玩家，即可成为您的2级(其他)玩家。以此类推您的2级(其他)推广玩家也将与您产生联系哦!", "leading": 20, "height": 112, "fontSize": 20, "color": "#c8bc9f", "align": "left" } }, { "type": "Label", "props": { "y": 198, "x": 27, "wordWrap": false, "width": 732, "var": "txt_more", "text": "3.大众捕鱼、经典水果机的税收=下注的1.5% \\n4.抢庄牛牛、通比牛牛等其余游戏的税收=游戏抽取的服务费。", "leading": 20, "height": 112, "fontSize": 20, "color": "#c8bc9f", "align": "left" } }, { "type": "Button", "props": { "y": 39, "x": 744, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return TuiGuangHelpUI;
        }(View));
        dating.TuiGuangHelpUI = TuiGuangHelpUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var TuiGuangJiLuUI = /** @class */ (function (_super) {
            __extends(TuiGuangJiLuUI, _super);
            function TuiGuangJiLuUI() {
                return _super.call(this) || this;
            }
            TuiGuangJiLuUI.prototype.createChildren = function () {
                View.regComponent("ui.dating.component.FanYongTUI", ui.dating.component.FanYongTUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.TuiGuangJiLuUI.uiView);
            };
            TuiGuangJiLuUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 788, "scaleY": 1.25, "scaleX": 1.25, "height": 531, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "width": 395, "skin": "dating_ui/tongyong/tu_bk1.png" } }, { "type": "Image", "props": { "y": 0, "x": 785, "width": 395, "skin": "dating_ui/tongyong/tu_bk1.png", "scaleX": -1 } }, { "type": "Image", "props": { "y": 38, "x": 394, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 39, "x": 394, "skin": "dating_ui/tuiguang/tit_jilu.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 77, "x": 23, "width": 739, "height": 406 }, "child": [{ "type": "Image", "props": { "y": 36, "x": 0, "width": 740, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11" } }, { "type": "Image", "props": { "y": 19, "x": 112, "skin": "dating_ui/tuiguang/tg_sj.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 19, "x": 368, "skin": "dating_ui/tuiguang/tg_je.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 19, "x": 630, "skin": "dating_ui/tuiguang/tg_zt.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "List", "props": { "y": 38, "x": 1, "width": 737, "var": "list_record", "spaceY": 2, "height": 366, "cacheAsBitmap": true, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "FanYongT", "props": { "renderType": "render", "runtime": "ui.dating.component.FanYongTUI" } }] }, { "type": "Label", "props": { "y": 200, "x": 250, "wordWrap": true, "width": 232, "var": "txt_no", "text": "---暂无数据---", "height": 22, "fontSize": 20, "color": "#efda8b", "align": "center" } }] }, { "type": "Button", "props": { "y": 39, "x": 744, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return TuiGuangJiLuUI;
        }(View));
        dating.TuiGuangJiLuUI = TuiGuangJiLuUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var TuiGuangSaveUI = /** @class */ (function (_super) {
            __extends(TuiGuangSaveUI, _super);
            function TuiGuangSaveUI() {
                return _super.call(this) || this;
            }
            TuiGuangSaveUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.TuiGuangSaveUI.uiView);
            };
            TuiGuangSaveUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 1280, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "skin": "dating_ui/tuiguang/tu_tg3.jpg", "centerX": 0 } }, { "type": "Image", "props": { "y": 491, "x": 671, "width": 140, "var": "img_ewm", "height": 140 } }, { "type": "Label", "props": { "y": 641, "x": 1000, "wordWrap": true, "width": 223, "text": "点击按钮保存图片至相册", "leading": 4, "height": 25, "fontSize": 20, "color": "#ffffff", "align": "left" } }, { "type": "Button", "props": { "y": 546, "x": 993, "var": "btn_save", "stateNum": 1, "skin": "dating_ui/tuiguang/btn_bc.png" } }, { "type": "Button", "props": { "y": 63, "x": 1221, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return TuiGuangSaveUI;
        }(View));
        dating.TuiGuangSaveUI = TuiGuangSaveUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var VIPUI = /** @class */ (function (_super) {
            __extends(VIPUI, _super);
            function VIPUI() {
                return _super.call(this) || this;
            }
            VIPUI.prototype.createChildren = function () {
                View.regComponent("ui.dating.component.VipRenderUI", ui.dating.component.VipRenderUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.VIPUI.uiView);
            };
            VIPUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 847, "scaleY": 1.2, "scaleX": 1.2, "height": 512, "centerY": 5, "centerX": 38, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 3, "width": 421.5, "skin": "dating_ui/tongyong/tu_bk1.png", "height": 530 } }, { "type": "Image", "props": { "y": 3, "x": 834, "width": 421.5, "skin": "dating_ui/tongyong/tu_bk1.png", "scaleX": -1, "height": 530 } }, { "type": "Image", "props": { "y": 35, "x": 424, "skin": "dating_ui/tongyong/tu_bkbt.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 8, "x": 357, "skin": "dating_ui/vip/tu_vip2.png" } }, { "type": "Image", "props": { "y": 225, "x": 15, "width": 802, "skin": "dating_ui/vip/tu_toumingjuxing.png", "height": 271 } }, { "type": "Box", "props": { "y": 106, "x": 521, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "skin": "dating_ui/vip/tu_jindutiao.png" } }, { "type": "Image", "props": { "y": 14, "x": 0, "width": 24, "skin": "dating_ui/vip/tu_guangquan.png", "height": 24, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0 }, "compId": 18 }, { "type": "Image", "props": { "y": -8, "x": 414, "var": "vip_next", "skin": "dating_ui/vip/tu_V2.png" }, "compId": 61 }, { "type": "Image", "props": { "y": -10, "x": -72, "var": "vip_cur", "skin": "dating_ui/vip/tu_V1.png" } }] }, { "type": "ProgressBar", "props": { "y": 140, "x": 130, "width": 500, "var": "bar_jindu", "value": 0, "skin": "dating_ui/vip/progress.png", "sizeGrid": "0,23,0,20", "height": 25 } }, { "type": "Label", "props": { "y": 144, "x": 130, "width": 500, "var": "txt_jindu", "height": 18, "fontSize": 18, "color": "#0fc5ff", "align": "center" } }, { "type": "Button", "props": { "y": 124, "x": 639, "var": "btn_chongzhi", "stateNum": 1, "skin": "dating_ui/vip/btn_cz.png" } }, { "type": "Image", "props": { "y": -47, "x": -74, "width": 281, "skin": "dating_ui/vip/tu_nr.png", "height": 291 } }, { "type": "List", "props": { "y": 249, "x": 38, "width": 757, "var": "list_vip", "spaceX": 30, "repeatX": 4, "height": 219 }, "child": [{ "type": "VipRender", "props": { "renderType": "render", "runtime": "ui.dating.component.VipRenderUI" } }] }, { "type": "Label", "props": { "y": 189, "x": 45, "width": 757, "var": "txt_tip", "height": 25, "fontSize": 25, "color": "#f8ea5e", "align": "center" } }, { "type": "Button", "props": { "y": 236, "x": -55, "var": "btn_help", "stateNum": 1, "skin": "dating_ui/vip/btn_xq.png" } }, { "type": "Button", "props": { "y": 36, "x": 795, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }], "animations": [{ "nodes": [{ "target": 18, "keyframes": { "y": [{ "value": 14, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "y", "index": 0 }, { "value": 15, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "y", "index": 5 }, { "value": 24, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "y", "index": 6 }, { "value": 15, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "y", "index": 7 }, { "value": 15, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "y", "index": 13 }, { "value": 6, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "y", "index": 14 }, { "value": 15, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "y", "index": 15 }, { "value": 15, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "y", "index": 20 }], "x": [{ "value": 5, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 0 }, { "value": 85, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 5 }, { "value": 102, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 6 }, { "value": 116, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 7 }, { "value": 262, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 13 }, { "value": 277, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 14 }, { "value": 293, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 15 }, { "value": 400, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "x", "index": 20 }], "pivotY": [{ "value": 12, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "pivotY", "index": 0 }, { "value": 13, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "pivotY", "index": 5 }, { "value": 13, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "pivotY", "index": 7 }], "pivotX": [{ "value": 12, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "pivotX", "index": 0 }, { "value": 12, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "pivotX", "index": 7 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 18, "key": "alpha", "index": 5 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }, { "nodes": [{ "target": 61, "keyframes": { "y": [{ "value": -8, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "y", "index": 0 }, { "value": -25, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "y", "index": 8 }, { "value": -19, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "y", "index": 10 }, { "value": -8, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "y", "index": 12 }], "x": [{ "value": 414, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "x", "index": 0 }, { "value": 407, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "x", "index": 8 }, { "value": 409, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "x", "index": 10 }, { "value": 414, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "x", "index": 12 }], "width": [{ "value": 50, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "width", "index": 0 }, { "value": 82, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "width", "index": 8 }, { "value": 69, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "width", "index": 10 }, { "value": 49, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "width", "index": 12 }], "height": [{ "value": 47, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "height", "index": 0 }, { "value": 77, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "height", "index": 8 }, { "value": 66, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "height", "index": 10 }, { "value": 47, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "height", "index": 12 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "alpha", "index": 0 }, { "value": 0.2, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "alpha", "index": 8 }, { "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 61, "key": "alpha", "index": 12 }] } }], "name": "ani2", "id": 2, "frameRate": 24, "action": 0 }] };
            return VIPUI;
        }(View));
        dating.VIPUI = VIPUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var VipLevelUI = /** @class */ (function (_super) {
            __extends(VipLevelUI, _super);
            function VipLevelUI() {
                return _super.call(this) || this;
            }
            VipLevelUI.prototype.createChildren = function () {
                View.regComponent("ui.dating.component.VipLevelRenderUI", ui.dating.component.VipLevelRenderUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.VipLevelUI.uiView);
            };
            VipLevelUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 622, "height": 393, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 10, "x": 9, "width": 320, "skin": "dating_ui/tongyong/tu_bk1.png", "sizeGrid": "100,0,150,0", "height": 400 } }, { "type": "Image", "props": { "y": 10, "x": 616, "width": 320, "skin": "dating_ui/tongyong/tu_bk1.png", "sizeGrid": "100,0,150,0", "scaleX": -1, "height": 400 } }, { "type": "Image", "props": { "y": 47, "x": 308, "skin": "dating_ui/tongyong/tu_bkbt.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 20, "x": 210, "skin": "dating_ui/vip/tu_VIPdengjibiao.png" } }, { "type": "Box", "props": {}, "child": [{ "type": "Image", "props": { "y": 117, "x": 52, "width": 517, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11" } }, { "type": "Image", "props": { "y": 90, "x": 259, "skin": "dating_ui/vip/tu_ljcz.png" } }, { "type": "Image", "props": { "y": 90, "x": 465, "skin": "dating_ui/vip/tu_jl.png" } }, { "type": "Image", "props": { "y": 90, "x": 65, "skin": "dating_ui/vip/tu_VIPdengji.png" } }] }, { "type": "List", "props": { "y": 124, "x": 9, "width": 609, "var": "list_vip", "repeatY": 6, "renderType": "render", "height": 242 }, "child": [{ "type": "VipLevelRender", "props": { "renderType": "render", "runtime": "ui.dating.component.VipLevelRenderUI" } }] }, { "type": "Button", "props": { "y": 48, "x": 575, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return VipLevelUI;
        }(View));
        dating.VipLevelUI = VipLevelUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var VipUpUI = /** @class */ (function (_super) {
            __extends(VipUpUI, _super);
            function VipUpUI() {
                return _super.call(this) || this;
            }
            VipUpUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.VipUpUI.uiView);
            };
            VipUpUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 782, "height": 450, "centerY": 9, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 170, "x": 382, "skin": "dating_ui/vip/tu_gongxi.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Clip", "props": { "y": 243, "x": 646, "width": 150, "var": "clip_num", "skin": "dating_ui/vip/clip_1-10.png", "index": 0, "height": 110, "clipX": 10, "clipWidth": 0 } }, { "type": "Image", "props": { "y": 271, "x": 466, "width": 160, "skin": "dating_ui/vip/tu_vip2.png", "height": 80 } }, { "type": "Button", "props": { "y": 374, "x": 394, "var": "btn_goto", "stateNum": 1, "skin": "dating_ui/vip/btn_qwlq.png" } }, { "type": "Button", "props": { "y": 108, "x": 681, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return VipUpUI;
        }(View));
        dating.VipUpUI = VipUpUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var XinXiUI = /** @class */ (function (_super) {
            __extends(XinXiUI, _super);
            function XinXiUI() {
                return _super.call(this) || this;
            }
            XinXiUI.prototype.createChildren = function () {
                View.regComponent("ui.dating.component.XinXi_lbUI", ui.dating.component.XinXi_lbUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.XinXiUI.uiView);
            };
            XinXiUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 788, "scaleY": 1.25, "scaleX": 1.25, "height": 531, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "width": 395, "skin": "dating_ui/tongyong/tu_bk1.png" } }, { "type": "Image", "props": { "y": 0, "x": 785, "width": 395, "skin": "dating_ui/tongyong/tu_bk1.png", "scaleX": -1 } }, { "type": "Image", "props": { "y": 37, "x": 394, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 37, "x": 394, "skin": "dating_ui/xinxi/tit_message.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "List", "props": { "y": 75, "x": 19, "width": 748, "var": "list", "spaceY": 2, "height": 397, "cacheAsBitmap": true, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "XinXi_lb", "props": { "y": 0, "x": 0, "renderType": "render", "runtime": "ui.dating.component.XinXi_lbUI" } }] }, { "type": "Button", "props": { "y": 39, "x": 744, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 255, "wordWrap": true, "width": 232, "var": "txt_no", "text": "---暂无数据---", "height": 22, "fontSize": 20, "color": "#efda8b", "centerX": 0, "align": "center" } }] }] };
            return XinXiUI;
        }(View));
        dating.XinXiUI = XinXiUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var XinXi1UI = /** @class */ (function (_super) {
            __extends(XinXi1UI, _super);
            function XinXi1UI() {
                return _super.call(this) || this;
            }
            XinXi1UI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.XinXi1UI.uiView);
            };
            XinXi1UI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 787, "height": 531, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 395, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "0,0,0,50", "height": 531 } }, { "type": "Image", "props": { "y": 0, "x": 786, "width": 395, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "0,0,0,50", "scaleX": -1, "height": 531 } }, { "type": "Image", "props": { "y": 37, "x": 394, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 37, "x": 394, "skin": "dating_ui/xinxi/tit_xiangqing.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Panel", "props": { "y": 73, "x": 25, "width": 738, "vScrollBarSkin": "dating_ui/tongyong/vscroll.png", "height": 329 }, "child": [{ "type": "Label", "props": { "y": 5, "x": 0, "wordWrap": true, "width": 728, "var": "txt_content", "leading": 8, "height": 529, "fontSize": 22, "color": "#c8bc9f" } }] }, { "type": "Button", "props": { "y": 39, "x": 744, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 456, "var": "btn_shanchu", "stateNum": 1, "skin": "dating_ui/xinxi/btn_sc.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return XinXi1UI;
        }(View));
        dating.XinXi1UI = XinXi1UI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var YanZhengUI = /** @class */ (function (_super) {
            __extends(YanZhengUI, _super);
            function YanZhengUI() {
                return _super.call(this) || this;
            }
            YanZhengUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.YanZhengUI.uiView);
            };
            YanZhengUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "x": 10, "width": 608, "scaleY": 1.25, "scaleX": 1.25, "height": 358, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 304, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "100,0,150,0", "height": 380 } }, { "type": "Image", "props": { "x": 604, "width": 304, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "100,0,150,0", "scaleX": -1, "height": 380 } }, { "type": "Image", "props": { "y": 37, "x": 304, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 39, "x": 304, "skin": "dating_ui/yanzheng/tit_tishi.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 323, "x": 193, "width": 234, "var": "txt_time", "text": "10S后刷新", "height": 24, "fontSize": 20, "color": "#14ff00", "align": "center" } }, { "type": "HSlider", "props": { "y": 289, "x": 25, "width": 560, "var": "hslider", "value": 0, "tick": 1, "skin": "dating_ui/tongyong/hslider.png", "sizeGrid": "0,20,0,21", "showLabel": false, "min": 0, "max": 100, "height": 31, "allowClickBack": true } }, { "type": "Image", "props": { "y": 78, "x": 23, "width": 559, "var": "img_bg", "skin": "dating_ui/yanzheng/tu_yz0.png", "height": 171 } }, { "type": "Button", "props": { "y": 34, "x": 571, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 265, "width": 234, "text": "滑动获取验证码", "height": 24, "fontSize": 20, "color": "#efda8b", "centerX": 0, "align": "center" } }] }] };
            return YanZhengUI;
        }(View));
        dating.YanZhengUI = YanZhengUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var YuEBaoUI = /** @class */ (function (_super) {
            __extends(YuEBaoUI, _super);
            function YuEBaoUI() {
                return _super.call(this) || this;
            }
            YuEBaoUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.YuEBaoUI.uiView);
            };
            YuEBaoUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "y": 20, "x": 20, "width": 787, "scaleY": 1.25, "scaleX": 1.25, "height": 531, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 1, "width": 394, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "80,0,150,50", "height": 531 } }, { "type": "Image", "props": { "y": 0, "x": 785, "width": 392, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "80,0,150,50", "scaleX": -1, "height": 531 } }, { "type": "Image", "props": { "y": 32, "x": 394, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 37, "x": 394, "skin": "dating_ui/tongyong/tit_access.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 80, "x": 3, "width": 779, "height": 415 }, "child": [{ "type": "Text", "props": { "x": 288, "width": 199, "text": "昨日收益（元）", "strokeColor": "#5151a9", "stroke": 1, "height": 35, "fontSize": 30, "color": "#fffbb5", "bold": true, "align": "right" } }, { "type": "Text", "props": { "y": 45, "x": 23, "width": 735, "var": "txt_last", "text": "0.0", "strokeColor": "#5151a9", "stroke": 1, "height": 55, "fontSize": 50, "color": "#fffbb5", "align": "center" } }, { "type": "Text", "props": { "y": 110, "x": 22, "width": 732, "var": "txt_money", "text": "总金额：0", "strokeColor": "#5151a9", "stroke": 1, "height": 28, "fontSize": 26, "color": "#efda8b", "align": "center" } }, { "type": "Text", "props": { "y": 285, "x": 22, "width": 732, "text": "*转入后第二天24点就可以产生收益", "stroke": 1, "height": 29, "fontSize": 24, "color": "#fff400" } }, { "type": "Image", "props": { "y": 148, "width": 779, "skin": "dating_ui/yuebao/noticebg1.png", "sizeGrid": "0,51,0,39", "height": 121, "alpha": 0.5 } }, { "type": "Text", "props": { "y": 158, "x": 30, "width": 217, "text": "累计收益（元）", "strokeColor": "#5151a9", "stroke": 1, "height": 33, "fontSize": 28, "color": "#efda8b", "align": "center" } }, { "type": "Text", "props": { "y": 158, "x": 273, "width": 242, "text": "每日利率（万分比）", "strokeColor": "#5151a9", "stroke": 1, "height": 33, "fontSize": 28, "color": "#efda8b", "align": "center" } }, { "type": "Text", "props": { "y": 158, "x": 536, "width": 217, "text": "每日收益（元）", "strokeColor": "#5151a9", "stroke": 1, "height": 33, "fontSize": 28, "color": "#efda8b", "align": "center" } }, { "type": "Text", "props": { "y": 204, "x": 536, "width": 200, "var": "txt_daily", "text": "0", "strokeColor": "#5151a9", "stroke": 1, "height": 45, "fontSize": 40, "color": "#fffbb5", "align": "center" } }, { "type": "Text", "props": { "y": 204, "x": 304, "width": 170, "var": "txt_rate", "text": "0", "strokeColor": "#5151a9", "stroke": 1, "height": 45, "fontSize": 40, "color": "#fffbb5", "align": "center" } }, { "type": "Text", "props": { "y": 204, "x": 39, "width": 200, "var": "txt_total", "text": "0", "strokeColor": "#5151a9", "stroke": 1, "height": 45, "fontSize": 40, "color": "#fffbb5", "align": "center" } }, { "type": "Button", "props": { "y": 375, "x": 238, "var": "btn_zhuanchu", "stateNum": 1, "skin": "dating_ui/yuebao/btn_zc.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 375, "x": 539, "var": "btn_zhuanru", "stateNum": 1, "skin": "dating_ui/yuebao/btn_zr.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 46, "x": 730, "var": "btn_help", "stateNum": 1, "skin": "dating_ui/yuebao/btn_bz.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 46, "x": 54, "var": "btn_record", "stateNum": 1, "skin": "dating_ui/yuebao/btn_mx.png", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Button", "props": { "y": 38, "x": 743, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return YuEBaoUI;
        }(View));
        dating.YuEBaoUI = YuEBaoUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var YuEBao_BZUI = /** @class */ (function (_super) {
            __extends(YuEBao_BZUI, _super);
            function YuEBao_BZUI() {
                return _super.call(this) || this;
            }
            YuEBao_BZUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.YuEBao_BZUI.uiView);
            };
            YuEBao_BZUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "y": 20, "x": 20, "width": 787, "scaleY": 1.25, "scaleX": 1.25, "height": 531, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 1, "width": 394, "skin": "dating_ui/tongyong/tu_bk1.png", "sizeGrid": "80,0,150,50", "height": 531 } }, { "type": "Image", "props": { "y": 0, "x": 785, "width": 392, "skin": "dating_ui/tongyong/tu_bk1.png", "sizeGrid": "80,0,150,50", "scaleX": -1, "height": 531 } }, { "type": "Image", "props": { "y": 32, "x": 394, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 37, "x": 394, "skin": "dating_ui/yuebao/tit_bz.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 38, "x": 743, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 83, "x": 33, "wordWrap": true, "width": 726, "text": "1.余额宝的收益根据利息来，计算公式如图：\\n\\n\\n2.余额宝为利滚利，所产生的收益将在收益产生日算作当日存入，进行正常计入余额宝流程进行计算 \\n3.利率是指每一元可以产生的收益 \\n4.每日收益=当日以10000元为标准可产生的收益 \\n5.累计收益（元）=你的余额宝历史所产生的收益总和 \\n6.总金额=您的余额宝当前余额", "leading": 20, "height": 393, "fontSize": 22, "color": "#c8bc9f" } }, { "type": "Label", "props": { "y": 136, "x": 49, "wordWrap": true, "width": 387, "text": "收益=存入金额X利率 ", "leading": 20, "height": 48, "fontSize": 40, "color": "#e0ff00", "bold": true } }] }] };
            return YuEBao_BZUI;
        }(View));
        dating.YuEBao_BZUI = YuEBao_BZUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var YuEBao_JLUI = /** @class */ (function (_super) {
            __extends(YuEBao_JLUI, _super);
            function YuEBao_JLUI() {
                return _super.call(this) || this;
            }
            YuEBao_JLUI.prototype.createChildren = function () {
                View.regComponent("ui.dating.component.YuEBaoTUI", ui.dating.component.YuEBaoTUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.YuEBao_JLUI.uiView);
            };
            YuEBao_JLUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "y": 20, "x": 20, "width": 787, "scaleY": 1.25, "scaleX": 1.25, "height": 531, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 1, "width": 394, "skin": "dating_ui/tongyong/tu_bk1.png", "sizeGrid": "80,0,150,50", "height": 531 } }, { "type": "Image", "props": { "y": 0, "x": 785, "width": 392, "skin": "dating_ui/tongyong/tu_bk1.png", "sizeGrid": "80,0,150,50", "scaleX": -1, "height": 531 } }, { "type": "Image", "props": { "y": 32, "x": 394, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 37, "x": 394, "skin": "dating_ui/yuebao/tit_jl.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 76, "x": 23, "width": 738, "var": "box_record", "height": 406 }, "child": [{ "type": "List", "props": { "y": 37, "x": 1, "width": 731, "var": "list_record", "spaceY": 1, "repeatY": 9, "height": 372, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "YuEBaoT", "props": { "y": 2, "x": 0, "renderType": "render", "runtime": "ui.dating.component.YuEBaoTUI" } }] }, { "type": "Image", "props": { "y": 35, "x": 0, "width": 740, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11" } }, { "type": "Image", "props": { "y": 20, "x": 78, "skin": "dating_ui/tongyong/tu_dhwz1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 20, "x": 364, "skin": "dating_ui/tongyong/tu_dhwz0.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 20, "x": 635, "skin": "dating_ui/tongyong/tg_zt.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 191, "x": 254, "width": 232, "var": "txt_no", "text": "---暂无数据---", "height": 22, "fontSize": 20, "color": "#efda8b", "centerY": -1, "centerX": 0, "align": "center" } }] }, { "type": "Button", "props": { "y": 38, "x": 743, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return YuEBao_JLUI;
        }(View));
        dating.YuEBao_JLUI = YuEBao_JLUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var YuEBao_ZRUI = /** @class */ (function (_super) {
            __extends(YuEBao_ZRUI, _super);
            function YuEBao_ZRUI() {
                return _super.call(this) || this;
            }
            YuEBao_ZRUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                View.regComponent("ui.dating.component.TextInputUI", ui.dating.component.TextInputUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.YuEBao_ZRUI.uiView);
            };
            YuEBao_ZRUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 787, "var": "box", "scaleY": 1.25, "scaleX": 1.25, "height": 531, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 2, "x": 0, "width": 394, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "80,0,150,50", "height": 531 } }, { "type": "Image", "props": { "y": 2, "x": 784, "width": 392, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "80,0,150,50", "scaleX": -1, "height": 531 } }, { "type": "Image", "props": { "y": 35, "x": 247, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": -10, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 77, "x": 23, "width": 741, "var": "box_bxx", "height": 417 }, "child": [{ "type": "Box", "props": { "y": 21, "x": 41 }, "child": [{ "type": "Image", "props": { "skin": "dating_ui/yuebao/ru_kk.png" } }, { "type": "Image", "props": { "x": 403, "skin": "dating_ui/yuebao/ru_kk.png" } }, { "type": "Image", "props": { "y": 7, "x": 475, "skin": "dating_ui/yuebao/tu_yeb.png" } }, { "type": "Image", "props": { "y": 4, "x": 72, "skin": "dating_ui/yuebao/tu_jb.png" } }] }, { "type": "Text", "props": { "y": 144, "x": 52, "width": 50, "text": "现金", "strokeColor": "#5151a9", "stroke": 1, "height": 23, "fontSize": 20, "color": "#fffbb5", "align": "center" } }, { "type": "Text", "props": { "y": 144, "x": 460, "width": 50, "text": "余额宝", "strokeColor": "#5151a9", "stroke": 1, "height": 23, "fontSize": 20, "color": "#fffbb5", "align": "center" } }, { "type": "Text", "props": { "y": 144, "x": 174, "width": 102, "var": "txt_money", "text": "0.00", "strokeColor": "#5151a9", "stroke": 1, "height": 23, "fontSize": 20, "color": "#f8ea5e", "align": "right" } }, { "type": "Text", "props": { "y": 144, "x": 579, "width": 102, "var": "txt_yuebao", "text": "0.00", "strokeColor": "#5151a9", "stroke": 1, "height": 23, "fontSize": 20, "color": "#f8ea5e", "align": "right" } }, { "type": "Box", "props": { "y": -73, "x": 24, "width": 719, "var": "box_qu", "height": 399 }, "child": [{ "type": "Image", "props": { "y": 30, "x": 341, "skin": "dating_ui/yuebao/tit_qc.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 168, "x": 338, "skin": "dating_ui/yuebao/tu_jt.png", "scaleX": -1, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 342, "x": 0, "width": 118, "text": "密　码：", "strokeColor": "#5151a9", "stroke": 1, "height": 30, "fontSize": 22, "color": "#fffbb5", "bold": true, "align": "right" } }, { "type": "Image", "props": { "y": 357, "x": 125, "width": 420, "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25", "height": 50, "anchorY": 0.5, "anchorX": 0 } }, { "type": "TextInput", "props": { "y": 343, "x": 143, "var": "txt_key", "runtime": "ui.dating.component.TextInputUI" } }] }, { "type": "Box", "props": { "y": -73, "x": 24, "width": 692, "var": "box_cun", "height": 390 }, "child": [{ "type": "Image", "props": { "y": 30, "x": 341, "skin": "dating_ui/yuebao/tit_zr.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 168, "x": 338, "skin": "dating_ui/yuebao/tu_jt.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 342, "x": 0, "width": 118, "text": "利　息：", "strokeColor": "#5151a9", "stroke": 1, "height": 30, "fontSize": 22, "color": "#fffbb5", "bold": true, "align": "right" } }, { "type": "TextInput", "props": { "y": 357, "x": 125, "width": 420, "var": "txt_rate_money", "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25", "promptColor": "#777777", "prompt": "明日可产生利息", "padding": "-1,0,0,16", "maxChars": 16, "height": 50, "fontSize": 24, "editable": false, "color": "#f8ea5e", "anchorY": 0.5, "anchorX": 0, "align": "left" } }] }, { "type": "Text", "props": { "y": 210, "x": 24, "width": 118, "var": "txt_type", "text": "取　出：", "strokeColor": "#5151a9", "stroke": 1, "height": 30, "fontSize": 22, "color": "#fffbb5", "bold": true, "align": "right" } }, { "type": "Button", "props": { "y": 228, "x": 634, "width": 129, "var": "btn_all", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb2.png", "sizeGrid": "0,27,0,27", "labelSize": 24, "labelPadding": "-4", "labelFont": "SimHei", "labelColors": "#ffffff", "label": "全部", "height": 72, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 225, "x": 149, "width": 420, "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25", "height": 50, "anchorY": 0.5, "anchorX": 0 } }, { "type": "TextInput", "props": { "y": 211, "x": 166, "var": "txt_input", "runtime": "ui.dating.component.TextInputUI" } }] }, { "type": "Button", "props": { "y": 40, "x": 742, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 457, "x": 396, "var": "btn_enter", "stateNum": 1, "skin": "dating_ui/tongyong/btn_qd.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return YuEBao_ZRUI;
        }(View));
        dating.YuEBao_ZRUI = YuEBao_ZRUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var ZhuanPanUI = /** @class */ (function (_super) {
            __extends(ZhuanPanUI, _super);
            function ZhuanPanUI() {
                return _super.call(this) || this;
            }
            ZhuanPanUI.prototype.createChildren = function () {
                View.regComponent("ui.dating.component.ZhuanPanTUI", ui.dating.component.ZhuanPanTUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.ZhuanPanUI.uiView);
            };
            ZhuanPanUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 1280, "top": 0, "right": 0, "left": 0, "height": 720, "bottom": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "top": -2, "skin": "dating_ui/zhuanpan/tu_zpbj.jpg", "sizeGrid": "122,0,0,0", "right": -1, "left": -1, "bottom": -1 } }, { "type": "Image", "props": { "y": -82, "x": -320, "top": 0, "skin": "dating_ui/zhuanpan/tu_bt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "skin": "dating_ui/zhuanpan/tu_zpml.png", "centerY": 0, "centerX": -355, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "width": 540, "height": 540, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Box", "props": { "y": 270, "x": 270, "width": 462, "var": "box_run", "height": 462, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 231, "x": 231, "width": 462, "skin": "dating_ui/zhuanpan/tu_zp3.png", "rotation": 0, "height": 462, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 231, "x": 231, "var": "img_after", "skin": "dating_ui/zhuanpan/tu_zp3_1.png", "centerY": 0, "centerX": 0, "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "List", "props": { "y": 230, "x": 231, "width": 462, "var": "list", "height": 462, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "ZhuanPanT", "props": { "y": 233.32050859876142, "name": "item0", "centerX": 10, "runtime": "ui.dating.component.ZhuanPanTUI" } }, { "type": "ZhuanPanT", "props": { "y": 233.32050859876142, "rotation": 30, "name": "item1", "centerX": 10, "runtime": "ui.dating.component.ZhuanPanTUI" } }, { "type": "ZhuanPanT", "props": { "y": 233.32050859876142, "rotation": 60, "name": "item2", "centerX": 10, "runtime": "ui.dating.component.ZhuanPanTUI" } }, { "type": "ZhuanPanT", "props": { "y": 233.32050859876142, "rotation": 90, "name": "item3", "centerX": 10, "runtime": "ui.dating.component.ZhuanPanTUI" } }, { "type": "ZhuanPanT", "props": { "y": 233.32050859876142, "rotation": 120, "name": "item4", "centerX": 10, "runtime": "ui.dating.component.ZhuanPanTUI" } }, { "type": "ZhuanPanT", "props": { "y": 233.32050859876142, "rotation": 150, "name": "item5", "centerX": 10, "runtime": "ui.dating.component.ZhuanPanTUI" } }, { "type": "ZhuanPanT", "props": { "y": 233.32050859876142, "rotation": 180, "name": "item6", "centerX": 10, "runtime": "ui.dating.component.ZhuanPanTUI" } }, { "type": "ZhuanPanT", "props": { "y": 233.32050859876142, "rotation": 210, "name": "item7", "centerX": 10, "runtime": "ui.dating.component.ZhuanPanTUI" } }, { "type": "ZhuanPanT", "props": { "y": 233.32050859876142, "rotation": 240, "name": "item8", "centerX": 10, "runtime": "ui.dating.component.ZhuanPanTUI" } }, { "type": "ZhuanPanT", "props": { "y": 233.32050859876142, "rotation": 270, "name": "item9", "centerX": 10, "runtime": "ui.dating.component.ZhuanPanTUI" } }, { "type": "ZhuanPanT", "props": { "y": 233.32050859876142, "rotation": 300, "name": "item10", "centerX": 10, "runtime": "ui.dating.component.ZhuanPanTUI" } }, { "type": "ZhuanPanT", "props": { "y": 233.32050859876142, "rotation": 330, "name": "item11", "centerX": 10, "runtime": "ui.dating.component.ZhuanPanTUI" } }] }] }, { "type": "Image", "props": { "y": 279, "x": 267, "var": "img_quan", "skin": "dating_ui/zhuanpan/tu_zp1.png", "centerX": -3, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "width": 35, "var": "img_zhen", "skin": "dating_ui/zhuanpan/tu_zpjt1.png", "pivotY": 127, "pivotX": 18, "height": 75, "centerY": -92, "centerX": 0 } }, { "type": "Button", "props": { "y": 270, "x": 270, "var": "btn_go", "stateNum": 1, "skin": "dating_ui/zhuanpan/btn_zp1.png", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 254, "x": 270, "skin": "dating_ui/zhuanpan/tu_go.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 289, "x": 270, "wordWrap": true, "width": 86, "var": "txt_cost", "text": "1000", "height": 27, "fontSize": 28, "color": "#ffffff", "bold": true, "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Image", "props": { "y": 131, "x": 540, "skin": "dating_ui/zhuanpan/tu_sc1.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 20 }, { "type": "Image", "props": { "y": 262, "x": 659, "skin": "dating_ui/zhuanpan/tu_sc2.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 21 }, { "type": "Image", "props": { "y": 36, "x": 65, "skin": "dating_ui/zhuanpan/tu_sc3.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 22 }, { "type": "Image", "props": { "y": 64, "x": 637, "skin": "dating_ui/zhuanpan/tu_sc4.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 23 }, { "type": "Image", "props": { "y": 449, "x": 589, "skin": "dating_ui/zhuanpan/tu_sc5.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 24 }, { "type": "Image", "props": { "y": 480, "x": 509, "skin": "dating_ui/zhuanpan/tu_dqjf.png" } }, { "type": "Clip", "props": { "y": 482, "x": 663, "var": "clip", "skin": "dating_ui/zhuanpan/clip_jf.png", "clipX": 10 } }, { "type": "Button", "props": { "y": 496, "x": 472, "var": "btn_help", "stateNum": 1, "skin": "dating_ui/zhuanpan/btn_wh.png", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 0, "x": 1280, "width": 96, "var": "btn_close", "top": 0, "right": 0, "height": 92, "anchorY": 0, "anchorX": 1 }, "child": [{ "type": "Button", "props": { "y": 50, "stateNum": 1, "skin": "dating_ui/tongyong/btn_fanhui.png", "right": 14, "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Tab", "props": { "width": 1280, "var": "tab", "height": 82, "centerX": 0, "bottom": 20 }, "child": [{ "type": "Button", "props": { "y": 42.5, "x": 279, "var": "btn_bylp", "stateNum": 2, "skin": "dating_ui/zhuanpan/btn_bj.png", "name": "item0", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 42.5, "x": 640, "var": "btn_hjlp", "stateNum": 2, "skin": "dating_ui/zhuanpan/btn_hj.png", "name": "item1", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 42.5, "x": 1001, "var": "btn_lprecord", "stateNum": 2, "skin": "dating_ui/zhuanpan/btn_jl.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] }], "animations": [{ "nodes": [{ "target": 22, "keyframes": { "y": [{ "value": 36, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 0 }, { "value": 27, "tweenMethod": "linearNone", "tween": true, "target": 22, "key": "y", "index": 25 }, { "value": 36, "tweenMethod": "linearNone", "tween": true, "target": 22, "label": null, "key": "y", "index": 50 }] } }, { "target": 24, "keyframes": { "y": [{ "value": 455.4, "tweenMethod": "linearNone", "tween": true, "target": 24, "key": "y", "index": 0 }, { "value": 459, "tweenMethod": "linearNone", "tween": true, "target": 24, "key": "y", "index": 9 }, { "value": 449, "tweenMethod": "linearNone", "tween": true, "target": 24, "label": null, "key": "y", "index": 34 }, { "value": 455, "tweenMethod": "linearNone", "tween": true, "target": 24, "label": null, "key": "y", "index": 50 }] } }, { "target": 21, "keyframes": { "y": [{ "value": 262, "tweenMethod": "linearNone", "tween": true, "target": 21, "key": "y", "index": 0 }, { "value": 242, "tweenMethod": "linearNone", "tween": true, "target": 21, "key": "y", "index": 25 }, { "value": 262, "tweenMethod": "linearNone", "tween": true, "target": 21, "label": null, "key": "y", "index": 50 }] } }, { "target": 23, "keyframes": { "y": [{ "value": 64, "tweenMethod": "linearNone", "tween": true, "target": 23, "key": "y", "index": 0 }, { "value": 94, "tweenMethod": "linearNone", "tween": true, "target": 23, "key": "y", "index": 25 }, { "value": 79.6, "tweenMethod": "linearNone", "tween": true, "target": 23, "key": "y", "index": 37 }, { "value": 78.39999999999999, "tweenMethod": "linearNone", "tween": true, "target": 23, "key": "y", "index": 38 }, { "value": 64, "tweenMethod": "linearNone", "tween": true, "target": 23, "label": null, "key": "y", "index": 50 }] } }, { "target": 20, "keyframes": { "y": [{ "value": 122.2, "tweenMethod": "linearNone", "tween": true, "target": 20, "key": "y", "index": 0 }, { "value": 111, "tweenMethod": "linearNone", "tween": true, "target": 20, "key": "y", "index": 15 }, { "value": 131, "tweenMethod": "linearNone", "tween": true, "target": 20, "label": null, "key": "y", "index": 40 }, { "value": 123, "tweenMethod": "linearNone", "tween": true, "target": 20, "label": null, "key": "y", "index": 50 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 2 }] };
            return ZhuanPanUI;
        }(View));
        dating.ZhuanPanUI = ZhuanPanUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var ZhuanPan_bzUI = /** @class */ (function (_super) {
            __extends(ZhuanPan_bzUI, _super);
            function ZhuanPan_bzUI() {
                return _super.call(this) || this;
            }
            ZhuanPan_bzUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.ZhuanPan_bzUI.uiView);
            };
            ZhuanPan_bzUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 787, "height": 531, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 395, "skin": "dating_ui/tongyong/tu_bk1.png", "height": 531 } }, { "type": "Image", "props": { "y": 0, "x": 786, "width": 395, "skin": "dating_ui/tongyong/tu_bk1.png", "scaleX": -1, "height": 531 } }, { "type": "Image", "props": { "y": 37, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 39, "x": 394, "skin": "dating_ui/zhuanpan/tit_bangzhu.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 84, "x": 31, "wordWrap": true, "width": 726, "var": "txt_content", "text": "1.今日有效下注会在明日转化为对应的积分 \\n  （有效下注1金币等于1积分） \\n2.如果今日未进行有效下注，则明日积分为0。 \\n3.积分每日0点进行刷新，昨日未使用积分将会清零。 \\n4.不同轮盘，会消耗不同积分进行抽奖，奖励也会不同。", "leading": 20, "height": 211, "fontSize": 22, "color": "#c8bc9f" } }, { "type": "Button", "props": { "y": 39, "x": 744, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return ZhuanPan_bzUI;
        }(View));
        dating.ZhuanPan_bzUI = ZhuanPan_bzUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var ZhuanPan_jlUI = /** @class */ (function (_super) {
            __extends(ZhuanPan_jlUI, _super);
            function ZhuanPan_jlUI() {
                return _super.call(this) || this;
            }
            ZhuanPan_jlUI.prototype.createChildren = function () {
                View.regComponent("ui.dating.component.ZhuanPanT1UI", ui.dating.component.ZhuanPanT1UI);
                View.regComponent("ui.dating.component.ZhuanPanT2UI", ui.dating.component.ZhuanPanT2UI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.ZhuanPan_jlUI.uiView);
            };
            ZhuanPan_jlUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "y": 20, "x": 20, "width": 787, "height": 531, "centerY": 20, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "width": 395, "skin": "dating_ui/tongyong/tu_bk2.png", "sizeGrid": "0,0,0,50" } }, { "type": "Image", "props": { "y": 0, "x": 786, "width": 395, "skin": "dating_ui/tongyong/tu_bk1.png", "sizeGrid": "0,0,0,50", "scaleX": -1 } }, { "type": "Image", "props": { "y": 32, "x": 394, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 37, "x": 394, "skin": "dating_ui/zhuanpan/zhuanpan_jl.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 77, "x": 186, "width": 580, "var": "box_dj", "height": 406 }, "child": [{ "type": "Image", "props": { "y": 371, "x": 0, "width": 580, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11", "scaleY": -1 } }, { "type": "Image", "props": { "y": 35, "x": 0, "width": 580, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11" } }, { "type": "Image", "props": { "y": 18, "x": 112, "skin": "dating_ui/zhuanpan/tu_l1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 18, "x": 298, "skin": "dating_ui/zhuanpan/tu_l2.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 18, "x": 429, "skin": "dating_ui/zhuanpan/tu_l3.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 18, "x": 526, "skin": "dating_ui/zhuanpan/tu_l4.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "List", "props": { "y": 39, "x": 1, "width": 579, "var": "list_dj", "spaceY": 2, "height": 328, "cacheAsBitmap": true, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "ZhuanPanT1", "props": { "renderType": "render", "runtime": "ui.dating.component.ZhuanPanT1UI" } }] }, { "type": "Label", "props": { "y": 190, "x": 170, "width": 232, "visible": false, "var": "txt_no_dj", "text": "---暂无数据---", "height": 22, "fontSize": 20, "color": "#efda8b", "align": "center" } }] }, { "type": "Box", "props": { "y": 77, "x": 186, "width": 580, "var": "box_gr", "height": 406 }, "child": [{ "type": "Image", "props": { "y": 17, "x": 112, "skin": "dating_ui/zhuanpan/tu_l1.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 17, "x": 350, "skin": "dating_ui/zhuanpan/tu_l3.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 17, "x": 520, "skin": "dating_ui/zhuanpan/tu_l4.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "List", "props": { "y": 38, "x": 1, "width": 579, "var": "list_gr", "spaceY": 2, "height": 328, "cacheAsBitmap": true, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "ZhuanPanT2", "props": { "renderType": "render", "runtime": "ui.dating.component.ZhuanPanT2UI" } }] }, { "type": "Label", "props": { "y": 190, "x": 170, "width": 232, "visible": false, "var": "txt_no_gr", "text": "---暂无数据---", "height": 22, "fontSize": 20, "color": "#efda8b", "align": "center" } }, { "type": "Image", "props": { "y": 371, "x": 0, "width": 580, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11", "scaleY": -1 } }, { "type": "Image", "props": { "y": 35, "x": 0, "width": 580, "skin": "dating_ui/tongyong/tu_dhdt4.png", "sizeGrid": "0,12,0,11" } }] }, { "type": "Tab", "props": { "y": 72, "x": 14, "width": 163, "var": "list_tab", "selectedIndex": -1, "height": 193 }, "child": [{ "type": "Button", "props": { "y": 29, "x": 87.5, "stateNum": 2, "skin": "dating_ui/zhuanpan/btn_dj.png", "name": "item0", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 94, "x": 87.5, "stateNum": 2, "skin": "dating_ui/zhuanpan/btn_gr.png", "name": "item1", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Button", "props": { "y": 38, "x": 743, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 457, "x": 197 }, "child": [{ "type": "Label", "props": { "width": 103, "text": "当前积分：", "overflow": "hidden", "height": 22, "fontSize": 20, "color": "#ac8177", "align": "left" } }, { "type": "Label", "props": { "x": 218, "width": 260, "text": "今日有效下注", "overflow": "hidden", "height": 22, "fontSize": 20, "color": "#ac8177", "align": "left" } }, { "type": "Label", "props": { "x": 94, "width": 99, "var": "txt_jifen", "text": "0", "overflow": "hidden", "height": 22, "fontSize": 20, "color": "#efda8b", "align": "left" } }, { "type": "Label", "props": { "x": 469, "width": 95, "var": "txt_mrjf", "text": "0", "overflow": "hidden", "height": 22, "fontSize": 20, "color": "#efda8b", "align": "left" } }, { "type": "Label", "props": { "x": 333, "width": 141, "text": "（明日积分）：", "overflow": "hidden", "height": 22, "fontSize": 20, "color": "#efda8b", "align": "left" } }] }] }] };
            return ZhuanPan_jlUI;
        }(View));
        dating.ZhuanPan_jlUI = ZhuanPan_jlUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
(function (ui) {
    var dating;
    (function (dating) {
        var ZhuCeUI = /** @class */ (function (_super) {
            __extends(ZhuCeUI, _super);
            function ZhuCeUI() {
                return _super.call(this) || this;
            }
            ZhuCeUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dating.ZhuCeUI.uiView);
            };
            ZhuCeUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 608, "height": 593, "centerY": -3, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 304, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "88,0,143,0", "height": 600 } }, { "type": "Image", "props": { "y": 0, "x": 604, "width": 304, "skin": "dating_ui/tongyong/tu_bk.png", "sizeGrid": "88,0,143,0", "scaleX": -1, "height": 600 } }, { "type": "Image", "props": { "y": 37, "x": 304, "skin": "dating_ui/tongyong/tu_bkbt.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 39, "x": 304, "skin": "dating_ui/zhuce/tit_register.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 84, "x": 52, "width": 206, "text": "你正在绑定游戏ID：", "height": 24, "fontSize": 24, "color": "#c8bc9f", "align": "center" } }, { "type": "Text", "props": { "y": 84, "x": 269, "width": 206, "var": "txt_id", "text": "21356489", "height": 24, "fontSize": 24, "color": "#f8ea5e", "align": "left" } }, { "type": "Text", "props": { "y": 187, "x": 36, "width": 135, "text": "手机号：", "height": 24, "fontSize": 24, "color": "#c8bc9f", "align": "right" } }, { "type": "Text", "props": { "y": 247, "x": 36, "width": 135, "text": "验证码：", "height": 24, "fontSize": 24, "color": "#c8bc9f", "align": "right" } }, { "type": "Text", "props": { "y": 306, "x": 36, "width": 135, "text": "密码：", "height": 24, "fontSize": 24, "color": "#c8bc9f", "align": "right" } }, { "type": "Text", "props": { "y": 366, "x": 36, "width": 135, "text": "确定密码：", "height": 24, "fontSize": 24, "color": "#c8bc9f", "align": "right" } }, { "type": "TextInput", "props": { "y": 262, "x": 164, "width": 183, "var": "txt_code", "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25", "restrict": "0-9", "promptColor": "#777777", "prompt": "请输入验证码", "padding": "-1,0,0,16", "maxChars": 8, "height": 50, "fontSize": 24, "color": "#f8ea5e", "anchorY": 0.5, "anchorX": 0, "align": "left" } }, { "type": "TextInput", "props": { "y": 204, "x": 164, "width": 390, "var": "txt_phone", "type": "email", "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25", "restrict": "0-9", "promptColor": "#777777", "prompt": "请输入手机号码", "padding": "-1,0,0,16", "maxChars": 11, "height": 50, "fontSize": 24, "color": "#f8ea5e", "anchorY": 0.5, "anchorX": 0, "align": "left" } }, { "type": "TextInput", "props": { "y": 320, "x": 164, "width": 390, "var": "txt_mima", "type": "password", "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25", "restrict": "a-z0-9_+-A-Z", "promptColor": "#777777", "prompt": "6-12位英文/数字/点减号/下划线", "padding": "-1,0,0,16", "maxChars": 16, "height": 50, "fontSize": 24, "color": "#f8ea5e", "anchorY": 0.5, "anchorX": 0, "align": "left" } }, { "type": "TextInput", "props": { "y": 378, "x": 164, "width": 390, "var": "txt_mima2", "type": "password", "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25", "restrict": "a-z0-9_+-A-Z", "promptColor": "#777777", "prompt": "6-12位英文/数字/点减号/下划线", "padding": "-1,0,0,16", "maxChars": 16, "height": 50, "fontSize": 24, "color": "#f8ea5e", "anchorY": 0.5, "anchorX": 0, "align": "left" } }, { "type": "Button", "props": { "y": 523, "var": "btn_bind", "stateNum": 1, "skin": "dating_ui/tongyong/btn_bd1.png", "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 262, "x": 458, "var": "btn_get_code", "stateNum": 1, "skin": "dating_ui/tongyong/btn_get.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 131, "x": 36, "width": 135, "text": "真实名字：", "height": 24, "fontSize": 24, "color": "#c8bc9f", "align": "right" } }, { "type": "TextInput", "props": { "y": 148, "x": 166, "width": 390, "var": "txt_name", "type": "email", "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25", "restrict": "\\u4e00-\\u9fa5", "promptColor": "#777777", "prompt": "跟银行信息一致，否则无法取款", "padding": "-1,0,0,16", "maxChars": 11, "height": 50, "fontSize": 24, "color": "#f8ea5e", "anchorY": 0.5, "anchorX": 0, "align": "left" } }, { "type": "Button", "props": { "y": 38, "x": 561, "var": "btn_close", "stateNum": 1, "skin": "dating_ui/tongyong/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Text", "props": { "y": 426, "x": 36, "width": 135, "text": "邀请码：", "height": 24, "fontSize": 24, "color": "#c8bc9f", "align": "right" } }, { "type": "TextInput", "props": { "y": 438, "x": 164, "width": 390, "var": "invitor_code", "type": "text", "skin": "dating_ui/tongyong/textinput.png", "sizeGrid": "15,24,17,25", "restrict": "0-9_A-Za-z", "promptColor": "#777777", "prompt": "请输入邀请码（可不填）", "padding": "-1,0,0,16", "maxChars": 6, "height": 50, "fontSize": 24, "color": "#f8ea5e", "anchorY": 0.5, "anchorX": 0, "align": "left" } }] }] };
            return ZhuCeUI;
        }(View));
        dating.ZhuCeUI = ZhuCeUI;
    })(dating = ui.dating || (ui.dating = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map