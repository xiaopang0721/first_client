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
            var bairendezhou;
            (function (bairendezhou) {
                var BaiRenDeZhouUI = /** @class */ (function (_super) {
                    __extends(BaiRenDeZhouUI, _super);
                    function BaiRenDeZhouUI() {
                        return _super.call(this) || this;
                    }
                    BaiRenDeZhouUI.prototype.createChildren = function () {
                        View.regComponent("Text", laya.display.Text);
                        View.regComponent("ui.nqp.game_ui.bairendezhou.component.KaiPaiUI", ui.nqp.game_ui.bairendezhou.component.KaiPaiUI);
                        View.regComponent("ui.nqp.game_ui.bairendezhou.component.XuanZhongUI", ui.nqp.game_ui.bairendezhou.component.XuanZhongUI);
                        View.regComponent("ui.nqp.game_ui.bairendezhou.component.XuanZhong4UI", ui.nqp.game_ui.bairendezhou.component.XuanZhong4UI);
                        View.regComponent("ui.nqp.game_ui.bairendezhou.component.XuanZhong1UI", ui.nqp.game_ui.bairendezhou.component.XuanZhong1UI);
                        View.regComponent("ui.nqp.game_ui.bairendezhou.component.XuanZhong2UI", ui.nqp.game_ui.bairendezhou.component.XuanZhong2UI);
                        View.regComponent("ui.nqp.game_ui.bairendezhou.component.XuanZhong3UI", ui.nqp.game_ui.bairendezhou.component.XuanZhong3UI);
                        View.regComponent("ui.nqp.game_ui.tongyong.PaiXeiUI", ui.nqp.game_ui.tongyong.PaiXeiUI);
                        View.regComponent("SkeletonPlayer", laya.ani.bone.Skeleton);
                        View.regComponent("ui.nqp.game_ui.tongyong.DaoJiShiUI", ui.nqp.game_ui.tongyong.DaoJiShiUI);
                        View.regComponent("ui.nqp.game_ui.bairendezhou.component.TouXiangWzUI", ui.nqp.game_ui.bairendezhou.component.TouXiangWzUI);
                        View.regComponent("ui.nqp.game_ui.tongyong.effect.XiPaiUI", ui.nqp.game_ui.tongyong.effect.XiPaiUI);
                        View.regComponent("ui.nqp.game_ui.bairendezhou.component.TouXiangUI", ui.nqp.game_ui.bairendezhou.component.TouXiangUI);
                        View.regComponent("ui.nqp.game_ui.bairendezhou.component.zoushiUI", ui.nqp.game_ui.bairendezhou.component.zoushiUI);
                        View.regComponent("ui.nqp.game_ui.bairendezhou.component.DuiZi1UI", ui.nqp.game_ui.bairendezhou.component.DuiZi1UI);
                        View.regComponent("ui.nqp.game_ui.bairendezhou.component.PaiXingZiUI", ui.nqp.game_ui.bairendezhou.component.PaiXingZiUI);
                        View.regComponent("ui.nqp.game_ui.tongyong.FaPaiUI", ui.nqp.game_ui.tongyong.FaPaiUI);
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.nqp.game_ui.bairendezhou.BaiRenDeZhouUI.uiView);
                    };
                    BaiRenDeZhouUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 1280, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Text", "props": { "y": 234, "x": 940, "width": 126, "var": "txt_beilv0", "text": "1.00", "strokeColor": "#0d4b57", "stroke": 4, "leading": 6, "height": 34, "fontSize": 30, "color": "#00ff99", "align": "right" } }, { "type": "Text", "props": { "y": 234, "x": 213, "width": 126, "var": "txt_beilv1", "text": "1.00", "strokeColor": "#0d4b57", "stroke": 4, "leading": 6, "height": 34, "fontSize": 30, "color": "#00ff99", "align": "left" } }, { "type": "Box", "props": { "y": 158, "x": 638, "width": 174, "scaleY": 0.8, "scaleX": 0.8, "height": 204, "centerX": -2, "anchorY": 1, "anchorX": 0.5 }, "child": [{ "type": "SkeletonPlayer", "props": { "y": 188, "x": 87, "url": "tongyong_ui/game_ui/tongyong/sk/HeGuan.sk" } }] }, { "type": "Box", "props": { "width": 1280, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Box", "props": { "y": 171, "x": 109, "width": 353, "var": "area0", "height": 168 }, "child": [{ "type": "XuanZhong", "props": { "y": 2, "x": 6, "var": "kuang0", "runtime": "ui.nqp.game_ui.bairendezhou.component.XuanZhongUI" } }, { "type": "Text", "props": { "y": 127, "x": 50, "width": 213, "var": "txt_total0", "text": "00000/000000", "strokeColor": "#0d4b57", "stroke": 4, "leading": 6, "height": 34, "fontSize": 30, "color": "#ffd200", "align": "left" } }] }, { "type": "Box", "props": { "y": 172, "x": 815, "width": 353, "var": "area1", "height": 168 }, "child": [{ "type": "XuanZhong", "props": { "y": 0, "x": 347, "var": "kuang1", "scaleX": -1, "runtime": "ui.nqp.game_ui.bairendezhou.component.XuanZhongUI" } }, { "type": "Text", "props": { "y": 128, "x": 100, "width": 213, "var": "txt_total1", "text": "00000/000000", "strokeColor": "#0d4b57", "stroke": 4, "leading": 6, "height": 34, "fontSize": 30, "color": "#ffd200", "align": "right" } }] }, { "type": "Box", "props": { "y": 257, "x": 461, "width": 348, "var": "area2", "height": 86 }, "child": [{ "type": "XuanZhong4", "props": { "y": 2, "x": 3, "var": "kuang2", "runtime": "ui.nqp.game_ui.bairendezhou.component.XuanZhong4UI" } }, { "type": "Text", "props": { "y": 44, "x": 124, "width": 213, "var": "txt_total2", "text": "00000/000000", "strokeColor": "#0d4b57", "stroke": 4, "leading": 6, "height": 34, "fontSize": 30, "color": "#ffd200", "align": "right" } }] }, { "type": "Box", "props": { "y": 346, "x": 77, "width": 251, "var": "area3", "height": 176 }, "child": [{ "type": "XuanZhong1", "props": { "y": -1, "x": 21, "var": "kuang3", "runtime": "ui.nqp.game_ui.bairendezhou.component.XuanZhong1UI" } }, { "type": "Text", "props": { "y": 122, "x": 42, "width": 176, "var": "txt_bet0", "text": "0", "strokeColor": "#0d4b57", "stroke": 4, "leading": 6, "height": 34, "fontSize": 26, "color": "#ffd200", "align": "center" } }, { "type": "Text", "props": { "y": 14, "x": 58, "width": 168, "var": "txt_total3", "text": "0", "strokeColor": "#005846", "stroke": 4, "leading": 6, "height": 31, "fontSize": 26, "color": "#ffffff", "align": "center" } }] }, { "type": "Box", "props": { "y": 346, "x": 317, "width": 220, "var": "area4", "height": 176 }, "child": [{ "type": "XuanZhong2", "props": { "var": "kuang4", "runtime": "ui.nqp.game_ui.bairendezhou.component.XuanZhong2UI" } }, { "type": "Text", "props": { "y": 122, "x": 20, "width": 176, "var": "txt_bet1", "text": "0", "strokeColor": "#0d4b57", "stroke": 4, "leading": 6, "height": 34, "fontSize": 26, "color": "#ffd200", "align": "center" } }, { "type": "Text", "props": { "y": 14, "x": 36, "width": 168, "var": "txt_total4", "text": "0", "strokeColor": "#005846", "stroke": 4, "leading": 6, "height": 31, "fontSize": 26, "color": "#ffffff", "align": "center" } }] }, { "type": "Box", "props": { "y": 345, "x": 532, "width": 215, "var": "area5", "height": 163 }, "child": [{ "type": "XuanZhong3", "props": { "y": 2, "x": 3, "var": "kuang5", "runtime": "ui.nqp.game_ui.bairendezhou.component.XuanZhong3UI" } }, { "type": "Text", "props": { "y": 14, "x": 4, "width": 210, "var": "txt_total5", "text": "0", "strokeColor": "#0d4b57", "stroke": 4, "leading": 6, "height": 34, "fontSize": 26, "color": "#ffffff", "align": "center" } }, { "type": "Text", "props": { "y": 121, "x": 4, "width": 210, "var": "txt_bet2", "text": "0", "strokeColor": "#0d4b57", "stroke": 4, "leading": 6, "height": 34, "fontSize": 26, "color": "#ffd200", "align": "center" } }] }, { "type": "Box", "props": { "y": 346, "x": 744, "width": 208, "var": "area6", "height": 176 }, "child": [{ "type": "XuanZhong2", "props": { "y": 0, "x": 220, "var": "kuang6", "scaleX": -1, "runtime": "ui.nqp.game_ui.bairendezhou.component.XuanZhong2UI" } }, { "type": "Text", "props": { "y": 122, "x": 23, "width": 176, "var": "txt_bet3", "text": "0", "strokeColor": "#0d4b57", "stroke": 4, "leading": 6, "height": 34, "fontSize": 26, "color": "#ffd200", "align": "center" } }, { "type": "Text", "props": { "y": 14, "x": 11, "width": 168, "var": "txt_total6", "text": "0", "strokeColor": "#005846", "stroke": 4, "leading": 6, "height": 31, "fontSize": 26, "color": "#ffffff", "align": "center" } }] }, { "type": "Box", "props": { "y": 346, "x": 953, "width": 234, "var": "area7", "height": 176 }, "child": [{ "type": "XuanZhong1", "props": { "y": 0, "x": 229, "var": "kuang7", "scaleX": -1, "runtime": "ui.nqp.game_ui.bairendezhou.component.XuanZhong1UI" } }, { "type": "Text", "props": { "y": 122, "x": 36, "width": 176, "var": "txt_bet4", "text": "0", "strokeColor": "#0d4b57", "stroke": 4, "leading": 6, "height": 34, "fontSize": 26, "color": "#ffd200", "align": "center" } }, { "type": "Text", "props": { "y": 10, "x": 14, "width": 168, "var": "txt_total7", "text": "0", "strokeColor": "#005846", "stroke": 4, "leading": 6, "height": 31, "fontSize": 26, "color": "#ffffff", "align": "center" } }] }] }, { "type": "Button", "props": { "y": 657, "x": 70, "var": "btn_playerList", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_qtwj.png", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Text", "props": { "y": 67, "x": -23, "wordWrap": true, "width": 132, "var": "txt_online", "text": "在线200人", "strokeColor": "#3b1211", "stroke": 4, "leading": 6, "height": 26, "fontSize": 20, "color": "#ffffff", "align": "center" } }] }, { "type": "PaiXei", "props": { "y": 173, "x": 993, "var": "paixieRight", "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.nqp.game_ui.tongyong.PaiXeiUI" } }, { "type": "Image", "props": { "y": 156, "x": 415, "var": "paixieLeft", "skin": "tongyong_ui/game_ui/tongyong/general/tu_paixei0.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "FaPai", "props": { "y": 177, "x": 932, "var": "ani_deal", "runtime": "ui.nqp.game_ui.tongyong.FaPaiUI" } }, { "type": "DaoJiShi", "props": { "y": 118, "x": 732, "var": "box_time", "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.nqp.game_ui.tongyong.DaoJiShiUI" } }, { "type": "Box", "props": { "left": 20, "centerY": -10 }, "child": [{ "type": "TouXiangWz", "props": { "var": "seat0", "runtime": "ui.nqp.game_ui.bairendezhou.component.TouXiangWzUI" } }, { "type": "TouXiangWz", "props": { "y": 158, "var": "seat1", "runtime": "ui.nqp.game_ui.bairendezhou.component.TouXiangWzUI" } }, { "type": "TouXiangWz", "props": { "y": 316, "var": "seat2", "runtime": "ui.nqp.game_ui.bairendezhou.component.TouXiangWzUI" } }] }, { "type": "Box", "props": { "right": 20, "centerY": -10 }, "child": [{ "type": "TouXiangWz", "props": { "var": "seat3", "runtime": "ui.nqp.game_ui.bairendezhou.component.TouXiangWzUI" } }, { "type": "TouXiangWz", "props": { "y": 158, "var": "seat4", "runtime": "ui.nqp.game_ui.bairendezhou.component.TouXiangWzUI" } }, { "type": "TouXiangWz", "props": { "y": 316, "var": "seat5", "runtime": "ui.nqp.game_ui.bairendezhou.component.TouXiangWzUI" } }] }, { "type": "XiPai", "props": { "y": 310, "x": 640, "var": "xipai", "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.nqp.game_ui.tongyong.effect.XiPaiUI" } }, { "type": "Box", "props": { "y": 720, "x": 641, "width": 948, "height": 147, "bottom": 0, "anchorY": 1, "anchorX": 0.5 }, "child": [{ "type": "Box", "props": { "y": -574, "width": 679, "height": 113, "centerX": -30, "bottom": -20, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Button", "props": { "y": 54.5, "x": 57, "var": "btn_chip0", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/tu_cm1.png", "labelStrokeColor": "#000000", "labelStroke": 3, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "labelBold": true, "label": "50", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 54, "x": 56, "var": "guang0", "skin": "tongyong_ui/game_ui/tongyong/general/tu_cm.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Button", "props": { "y": 54.5, "x": 178, "var": "btn_chip1", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/tu_cm2.png", "labelStrokeColor": "#000000", "labelStroke": 3, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "labelBold": true, "label": "100", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 53, "x": 56, "var": "guang1", "skin": "tongyong_ui/game_ui/tongyong/general/tu_cm.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Button", "props": { "y": 54.5, "x": 300, "var": "btn_chip2", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/tu_cm3.png", "labelStrokeColor": "#000000", "labelStroke": 3, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "labelBold": true, "label": "200", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 54, "x": 55, "var": "guang2", "skin": "tongyong_ui/game_ui/tongyong/general/tu_cm.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Button", "props": { "y": 54.5, "x": 421, "var": "btn_chip3", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/tu_cm4.png", "labelStrokeColor": "#000000", "labelStroke": 3, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "labelBold": true, "label": "500", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 53, "x": 55, "var": "guang3", "skin": "tongyong_ui/game_ui/tongyong/general/tu_cm.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Button", "props": { "y": 54.5, "x": 539, "var": "btn_chip4", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/tu_cm5.png", "labelStrokeColor": "#000000", "labelStroke": 3, "labelSize": 26, "labelPadding": "-2", "labelColors": "#ffffff", "labelBold": true, "label": "1000", "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 53, "x": 55, "var": "guang4", "skin": "tongyong_ui/game_ui/tongyong/general/tu_cm.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 } }] }] }, { "type": "Button", "props": { "y": 96, "var": "btn_repeat", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_xz.png", "sizeGrid": "0,20,0,20", "labelStrokeColor": "#0f5b08", "labelStroke": 4, "labelSize": 28, "labelColors": "#ffffff", "labelBold": true, "label": "重复下注", "centerX": 326, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "TouXiang", "props": { "var": "main_player", "runtime": "ui.nqp.game_ui.bairendezhou.component.TouXiangUI" } }] }, { "type": "Box", "props": { "y": 567, "x": 10, "width": 729, "height": 78, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 37, "width": 727, "skin": "bairendezhou_ui/game_ui/bairendezhou/tu_d4.png", "sizeGrid": "16,23,23,22", "centerX": -2, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.25 } }, { "type": "Button", "props": { "y": 37, "x": 698, "var": "btn_record", "stateNum": 1, "skin": "bairendezhou_ui/game_ui/bairendezhou/btn_zs.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "List", "props": { "x": 14, "width": 654, "var": "list_record0", "spaceX": 23, "repeatY": 1, "repeatX": 12, "renderType": "render", "height": 33, "disabled": false, "centerY": -21, "cacheAsBitmap": true, "anchorY": 0, "anchorX": 0 }, "child": [{ "type": "zoushi", "props": { "y": 0, "x": 0, "name": "render", "runtime": "ui.nqp.game_ui.bairendezhou.component.zoushiUI" } }] }, { "type": "List", "props": { "y": 39, "x": 5, "width": 663, "var": "list_record1", "spaceX": 20, "repeatY": 1, "repeatX": 12, "height": 33 }, "child": [{ "type": "DuiZi1", "props": { "name": "render", "runtime": "ui.nqp.game_ui.bairendezhou.component.DuiZi1UI" } }] }] }, { "type": "PaiXingZi", "props": { "y": 101, "x": 327, "var": "lan_type", "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.nqp.game_ui.bairendezhou.component.PaiXingZiUI" } }, { "type": "PaiXingZi", "props": { "y": 101, "x": 975, "var": "hong_type", "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.nqp.game_ui.bairendezhou.component.PaiXingZiUI" } }, { "type": "KaiPai", "props": { "y": 176, "x": 463.6, "var": "kaipaiLan", "scaleY": 1.808, "scaleX": 1.808, "runtime": "ui.nqp.game_ui.bairendezhou.component.KaiPaiUI" } }, { "type": "KaiPai", "props": { "y": 176, "x": 710.8, "var": "kaipaiHong", "scaleY": 1.808, "scaleX": 1.808, "runtime": "ui.nqp.game_ui.bairendezhou.component.KaiPaiUI" } }, { "type": "Text", "props": { "y": 21, "x": 88, "width": 314, "var": "txt_id", "text": "牌局号：15323156415613212313", "leading": 6, "height": 23, "fontSize": 20, "color": "#d4d4d4" } }] }, { "type": "Button", "props": { "var": "btn_spread", "top": 16, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_cd.png", "left": 10, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "width": 180, "var": "box_menu", "top": 0, "skin": "tongyong_ui/game_ui/tongyong/general/cd_1.png", "sizeGrid": "20,20,20,20", "left": 10, "height": 291 }, "child": [{ "type": "Image", "props": { "y": 75, "x": 11, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }, { "type": "Image", "props": { "y": 145, "x": 11, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }, { "type": "Image", "props": { "y": 214, "x": 11, "width": 160, "skin": "tongyong_ui/game_ui/tongyong/general/cd_2.png" } }, { "type": "Button", "props": { "y": 18, "x": 14, "var": "btn_cardType", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_px.png" } }, { "type": "Button", "props": { "y": 86, "x": 14, "var": "btn_rule", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_gz.png" } }, { "type": "Button", "props": { "y": 225, "x": 14, "var": "btn_set", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_sz.png" } }, { "type": "Button", "props": { "y": 153, "x": 14, "var": "btn_zhanji", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_zj.png" } }] }, { "type": "Button", "props": { "var": "btn_back", "top": 16, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_fh1.png", "right": 10, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "var": "btn_chongzhi", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_chongzhi.png", "right": 10, "bottom": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "var": "btn_qifu", "top": 16, "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_qf.png", "right": 85, "anchorY": 0.5, "anchorX": 0.5 } }] };
                    return BaiRenDeZhouUI;
                }(View));
                bairendezhou.BaiRenDeZhouUI = BaiRenDeZhouUI;
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var bairendezhou;
            (function (bairendezhou) {
                var BaiRenDeZhou_GuiZeUI = /** @class */ (function (_super) {
                    __extends(BaiRenDeZhou_GuiZeUI, _super);
                    function BaiRenDeZhou_GuiZeUI() {
                        return _super.call(this) || this;
                    }
                    BaiRenDeZhou_GuiZeUI.prototype.createChildren = function () {
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.nqp.game_ui.bairendezhou.BaiRenDeZhou_GuiZeUI.uiView);
                    };
                    BaiRenDeZhou_GuiZeUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 787, "scaleY": 1.25, "scaleX": 1.25, "height": 531, "centerY": 1, "centerX": -5, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "skin": "tongyong_ui/game_ui/tongyong/hud/tu_bk4.png" } }, { "type": "Image", "props": { "y": 0, "x": 785, "skin": "tongyong_ui/game_ui/tongyong/hud/tu_bk4.png", "scaleX": -1 } }, { "type": "Image", "props": { "y": 29, "x": 394, "skin": "tongyong_ui/game_ui/tongyong/general/tu_bkbt.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 37, "x": 394, "skin": "tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 38, "x": 743, "var": "btn_close", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/hud/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Tab", "props": { "y": 66, "x": 15, "width": 756, "var": "btn_tab", "space": 4, "skin": "tongyong_ui/game_ui/tongyong/hud/tab_bq.png", "labels": "玩法介绍,牌型算法,结算赔率", "labelSize": 20, "labelColors": "#cacaca,#cacaca,#ffffff", "height": 58 } }, { "type": "Image", "props": { "y": 130, "x": 20, "var": "img_wanfa", "skin": "bairendezhou_ui/game_ui/bairendezhou/guize_1.png" } }, { "type": "Panel", "props": { "y": 140, "x": 20, "width": 740, "var": "panal_wanfa", "height": 332 }, "child": [{ "type": "Image", "props": { "var": "img_paixing", "skin": "bairendezhou_ui/game_ui/bairendezhou/guize_2.png", "height": 486 } }] }, { "type": "Image", "props": { "y": 130, "x": 20, "var": "img_beishu", "skin": "bairendezhou_ui/game_ui/bairendezhou/guize_3.png" } }] }] };
                    return BaiRenDeZhou_GuiZeUI;
                }(View));
                bairendezhou.BaiRenDeZhou_GuiZeUI = BaiRenDeZhou_GuiZeUI;
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var bairendezhou;
            (function (bairendezhou) {
                var BaiRenDeZhou_HUDUI = /** @class */ (function (_super) {
                    __extends(BaiRenDeZhou_HUDUI, _super);
                    function BaiRenDeZhou_HUDUI() {
                        return _super.call(this) || this;
                    }
                    BaiRenDeZhou_HUDUI.prototype.createChildren = function () {
                        View.regComponent("ui.nqp.game_ui.tongyong.HudUI", ui.nqp.game_ui.tongyong.HudUI);
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.nqp.game_ui.bairendezhou.BaiRenDeZhou_HUDUI.uiView);
                    };
                    BaiRenDeZhou_HUDUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Image", "props": { "top": -1, "skin": "bairendezhou_ui/game_ui/bairendezhou/zjh.jpg", "right": -1, "left": -1, "bottom": -1 } }, { "type": "Hud", "props": { "var": "view", "top": -1, "runtime": "ui.nqp.game_ui.tongyong.HudUI", "right": -1, "left": -14, "bottom": -1 } }, { "type": "Panel", "props": { "width": 1450, "var": "panel_room", "height": 500, "centerY": 0, "centerX": 50 }, "child": [{ "type": "Box", "props": { "y": 47, "var": "box0", "right": 796 }, "child": [{ "type": "Image", "props": { "y": -23, "x": -35, "skin": "tongyong_ui/game_ui/tongyong/hud/difen_002.png" } }, { "type": "Label", "props": { "y": 41, "x": 496, "wordWrap": true, "width": 106, "var": "txt_status0", "text": "下注中: 5S", "leading": 6, "height": 19, "fontSize": 20, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 46, "x": 111, "wordWrap": true, "width": 168, "var": "txt_max0", "text": "投注限额：5000", "leading": 6, "height": 21, "fontSize": 20, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Button", "props": { "y": 309, "x": 190, "var": "btn_xinshou", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/hud/btn_xinshou.png" } }, { "type": "ProgressBar", "props": { "y": 63, "x": 6, "width": 562, "var": "bar0", "skin": "tongyong_ui/game_ui/tongyong/dating/progress.png", "height": 13 } }] }, { "type": "Box", "props": { "y": 47, "var": "box1", "right": 186 }, "child": [{ "type": "Image", "props": { "y": -23, "x": -35, "skin": "tongyong_ui/game_ui/tongyong/hud/difen_000.png" } }, { "type": "Label", "props": { "y": 41, "x": 492, "wordWrap": true, "width": 106, "var": "txt_status1", "text": "下注中: 5S", "leading": 6, "height": 19, "fontSize": 20, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 46, "x": 115, "width": 145, "var": "txt_max1", "text": "投注限额：8000", "leading": 6, "height": 21, "fontSize": 20, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Button", "props": { "y": 309, "x": 199, "var": "btn_xiaozichang", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/general/btn_jr.png" } }, { "type": "ProgressBar", "props": { "y": 64, "x": 6, "width": 562, "var": "bar1", "skin": "tongyong_ui/game_ui/tongyong/dating/progress.png", "height": 13 } }] }, { "type": "Box", "props": { "y": 47, "var": "box2", "right": -420 }, "child": [{ "type": "Image", "props": { "y": -23, "x": -35, "skin": "tongyong_ui/game_ui/tongyong/hud/difen_001.png" } }, { "type": "Label", "props": { "y": 41, "x": 500, "wordWrap": true, "width": 106, "var": "txt_status2", "text": "发牌中 :5S", "pivotY": 10, "pivotX": 54, "leading": 6, "height": 19, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Button", "props": { "y": 307, "x": 202, "var": "btn_laoban", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/hud/btn_lbc.png" } }, { "type": "Label", "props": { "y": 45, "x": 125, "width": 154, "var": "txt_max2", "text": "投注限额：25000", "leading": 6, "height": 21, "fontSize": 20, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "ProgressBar", "props": { "y": 65, "x": 8, "width": 562, "var": "bar2", "skin": "tongyong_ui/game_ui/tongyong/dating/progress.png", "height": 13 } }] }, { "type": "Box", "props": { "y": 47, "x": 1910, "var": "box3" }, "child": [{ "type": "Image", "props": { "y": -23, "x": -35, "skin": "tongyong_ui/game_ui/tongyong/hud/difen_003.png" } }, { "type": "Label", "props": { "y": 40, "x": 499, "wordWrap": true, "width": 106, "var": "txt_status3", "text": "发牌中 :5S", "leading": 6, "height": 19, "fontSize": 20, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Label", "props": { "y": 45, "x": 119, "wordWrap": true, "width": 180, "var": "txt_max3", "text": "投注限额：50000", "leading": 6, "height": 21, "fontSize": 20, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Button", "props": { "y": 308, "x": 197, "var": "btn_fuhao", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/hud/btn_fuhao.png" } }, { "type": "ProgressBar", "props": { "y": 65, "x": 6, "width": 562, "var": "bar3", "skin": "tongyong_ui/game_ui/tongyong/dating/progress.png", "height": 13 } }] }] }, { "type": "Image", "props": { "top": 12, "skin": "bairendezhou_ui/game_ui/bairendezhou/brnn_title.png", "centerX": 140, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 668, "x": 640, "var": "btn_join", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/dating/btn_ksjr.png", "centerX": 0, "bottom": 10, "anchorY": 0.5, "anchorX": 0.5 } }] };
                    return BaiRenDeZhou_HUDUI;
                }(View));
                bairendezhou.BaiRenDeZhou_HUDUI = BaiRenDeZhou_HUDUI;
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var bairendezhou;
            (function (bairendezhou) {
                var component;
                (function (component) {
                    var DuiZiUI = /** @class */ (function (_super) {
                        __extends(DuiZiUI, _super);
                        function DuiZiUI() {
                            return _super.call(this) || this;
                        }
                        DuiZiUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.bairendezhou.component.DuiZiUI.uiView);
                        };
                        DuiZiUI.uiView = { "type": "View", "props": { "width": 73, "height": 31 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "img_type", "skin": "tongyong_ui/game_ui/tongyong/general/tu_dzdt.png" } }, { "type": "Label", "props": { "y": 5, "x": 6, "width": 60, "var": "txt_type", "text": "对子", "fontSize": 20, "color": "#ffffff", "align": "center" } }] };
                        return DuiZiUI;
                    }(View));
                    component.DuiZiUI = DuiZiUI;
                })(component = bairendezhou.component || (bairendezhou.component = {}));
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var bairendezhou;
            (function (bairendezhou) {
                var component;
                (function (component) {
                    var DuiZi1UI = /** @class */ (function (_super) {
                        __extends(DuiZi1UI, _super);
                        function DuiZi1UI() {
                            return _super.call(this) || this;
                        }
                        DuiZi1UI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.bairendezhou.component.DuiZi1UI.uiView);
                        };
                        DuiZi1UI.uiView = { "type": "View", "props": { "width": 36, "height": 30 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 1, "width": 51, "var": "img_type", "skin": "tongyong_ui/game_ui/tongyong/general/tu_dzdt.png", "sizeGrid": "10,10,10,10", "height": 30 } }, { "type": "Label", "props": { "y": 7, "x": 3, "width": 47, "var": "txt_type", "text": "对子", "height": 16, "fontSize": 16, "color": "#ffffff", "align": "center" } }] };
                        return DuiZi1UI;
                    }(View));
                    component.DuiZi1UI = DuiZi1UI;
                })(component = bairendezhou.component || (bairendezhou.component = {}));
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var bairendezhou;
            (function (bairendezhou) {
                var component;
                (function (component) {
                    var Go1UI = /** @class */ (function (_super) {
                        __extends(Go1UI, _super);
                        function Go1UI() {
                            return _super.call(this) || this;
                        }
                        Go1UI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.bairendezhou.component.Go1UI.uiView);
                        };
                        Go1UI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "y": 360, "x": 640, "width": 1280, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 350, "x": 650, "skin": "tongyong_ui/game_ui/tongyong/general/gzyz_0.png", "scaleY": 1, "scaleX": 1, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 7 }, { "type": "Image", "props": { "y": 360, "x": 957.4016, "skin": "tongyong_ui/game_ui/tongyong/general/tu_ks1.png", "centerY": 0, "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 }, "compId": 2 }, { "type": "Image", "props": { "y": 360, "x": 317.5984, "skin": "tongyong_ui/game_ui/tongyong/general/tu_ks0.png", "centerY": 0, "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 }, "compId": 4 }, { "type": "Image", "props": { "y": 360, "x": 637, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_2.png", "centerY": 0, "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0 }, "compId": 3 }, { "type": "Image", "props": { "y": 251, "x": 385, "skin": "tongyong_ui/game_ui/tongyong/general/gzyz_3.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 }, "compId": 9 }, { "type": "Image", "props": { "y": 436, "x": 916, "skin": "tongyong_ui/game_ui/tongyong/general/gzyz_3.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 }, "compId": 10 }] }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "x": [{ "value": 1000, "tweenMethod": "strongInOut", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 740, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 10 }, { "value": 740, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "x", "index": 40 }, { "value": 1000, "tweenMethod": "strongInOut", "tween": true, "target": 2, "label": null, "key": "x", "index": 48 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 40 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "alpha", "index": 48 }] } }, { "target": 4, "keyframes": { "x": [{ "value": 275, "tweenMethod": "strongInOut", "tween": true, "target": 4, "key": "x", "index": 0 }, { "value": 535, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "x", "index": 10 }, { "value": 535, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "x", "index": 40 }, { "value": 275, "tweenMethod": "strongInOut", "tween": true, "target": 4, "label": null, "key": "x", "index": 48 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 40 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "alpha", "index": 48 }] } }, { "target": 3, "keyframes": { "x": [{ "value": 637, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 0 }, { "value": 637, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 40 }, { "value": 637, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 48 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 9 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 13 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 40 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 48 }] } }, { "target": 7, "keyframes": { "visible": [{ "value": true, "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "visible", "index": 0 }, { "value": false, "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "visible", "index": 46 }], "scaleY": [{ "value": 0.1, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleY", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleY", "index": 40 }, { "value": 0.1, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleY", "index": 45 }, { "value": 0.1, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleY", "index": 46 }], "scaleX": [{ "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleX", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleX", "index": 40 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleX", "index": 45 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleX", "index": 46 }] } }, { "target": 9, "keyframes": { "y": [{ "value": 251, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "y", "index": 0 }], "x": [{ "value": 385, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "x", "index": 0 }, { "value": 346, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "x", "index": 4 }, { "value": 346, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "x", "index": 10 }, { "value": 937, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "x", "index": 30 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 4 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 9 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 20 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 30 }] } }, { "target": 10, "keyframes": { "y": [{ "value": 436, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "y", "index": 0 }, { "value": 427, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "y", "index": 4 }, { "value": 427, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "y", "index": 10 }, { "value": 425, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "y", "index": 30 }], "x": [{ "value": 916, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "x", "index": 0 }, { "value": 936, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "x", "index": 4 }, { "value": 936, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "x", "index": 10 }, { "value": 343, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "x", "index": 30 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 4 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 9 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 20 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 30 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
                        return Go1UI;
                    }(View));
                    component.Go1UI = Go1UI;
                })(component = bairendezhou.component || (bairendezhou.component = {}));
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var bairendezhou;
            (function (bairendezhou) {
                var component;
                (function (component) {
                    var HongDianUI = /** @class */ (function (_super) {
                        __extends(HongDianUI, _super);
                        function HongDianUI() {
                            return _super.call(this) || this;
                        }
                        HongDianUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.bairendezhou.component.HongDianUI.uiView);
                        };
                        HongDianUI.uiView = { "type": "View", "props": { "width": 18, "height": 18 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "img_record", "skin": "tongyong_ui/game_ui/tongyong/general/tu_hd0.png" } }] }] };
                        return HongDianUI;
                    }(View));
                    component.HongDianUI = HongDianUI;
                })(component = bairendezhou.component || (bairendezhou.component = {}));
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var bairendezhou;
            (function (bairendezhou) {
                var component;
                (function (component) {
                    var HudRoadRenderUI = /** @class */ (function (_super) {
                        __extends(HudRoadRenderUI, _super);
                        function HudRoadRenderUI() {
                            return _super.call(this) || this;
                        }
                        HudRoadRenderUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.bairendezhou.component.HudRoadRenderUI.uiView);
                        };
                        HudRoadRenderUI.uiView = { "type": "View", "props": { "width": 15, "height": 15 }, "child": [{ "type": "Box", "props": { "y": 1, "x": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "img_result", "skin": "bairendezhou_ui/game_ui/bairendezhou/tu_g1.png" } }, { "type": "Image", "props": { "y": 2, "x": 2, "var": "img_he", "skin": "bairendezhou_ui/game_ui/bairendezhou/tu_g5.png" } }] }] };
                        return HudRoadRenderUI;
                    }(View));
                    component.HudRoadRenderUI = HudRoadRenderUI;
                })(component = bairendezhou.component || (bairendezhou.component = {}));
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var bairendezhou;
            (function (bairendezhou) {
                var component;
                (function (component) {
                    var KaiPaiUI = /** @class */ (function (_super) {
                        __extends(KaiPaiUI, _super);
                        function KaiPaiUI() {
                            return _super.call(this) || this;
                        }
                        KaiPaiUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.bairendezhou.component.KaiPaiUI.uiView);
                        };
                        KaiPaiUI.uiView = { "type": "View", "props": { "width": 58, "height": 80 }, "child": [{ "type": "Panel", "props": { "y": 0, "x": 0, "width": 58, "rotation": 0, "height": 81 }, "compId": 9, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "tongyong_ui/game_ui/tongyong/pai/0.png", "scaleY": 0.55, "scaleX": 0.55, "rotation": 0 } }, { "type": "Image", "props": { "y": 1, "x": 1, "width": 55, "visible": false, "skin": "tongyong_ui/game_ui/tongyong/general/effect/kaipai/tu_0.png", "height": 34 }, "compId": 10 }] }, { "type": "Panel", "props": { "y": 34, "x": -1, "width": 58, "visible": false, "rotation": 0, "height": 46 }, "compId": 7, "child": [{ "type": "Image", "props": { "y": 0, "x": 1, "width": 104, "var": "card", "skin": "tongyong_ui/game_ui/tongyong/pai/1.png", "scaleY": 0.55, "scaleX": 0.55, "height": 146 }, "compId": 5 }, { "type": "Image", "props": { "y": 3, "x": 0, "width": 57, "skin": "tongyong_ui/game_ui/tongyong/general/effect/kaipai/tu_0.png", "mouseEnabled": true, "height": 14, "alpha": 1 }, "compId": 8 }] }, { "type": "Image", "props": { "y": 48, "x": -103, "skin": "tongyong_ui/game_ui/tongyong/general/effect/kaipai/tu_shou1.png", "rotation": 0 }, "compId": 3 }, { "type": "Image", "props": { "y": 45, "x": 165, "skin": "tongyong_ui/game_ui/tongyong/general/effect/kaipai/tu_shou1.png", "scaleX": -1 }, "compId": 4 }], "animations": [{ "nodes": [{ "target": 4, "keyframes": { "y": [{ "value": 85, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 0 }, { "value": 33, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 5 }, { "value": 5.307692307692308, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "y", "index": 6 }, { "value": -3, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "y", "index": 19 }, { "value": -13, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "y", "index": 20 }], "x": [{ "value": 163, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "x", "index": 0 }, { "value": 148.83333333333334, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "x", "index": 5 }, { "value": 143, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "x", "index": 6 }, { "value": 143, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "x", "index": 19 }, { "value": 143, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "x", "index": 20 }], "skin": [{ "value": "tongyong_ui/game_ui/tongyong/general/effect/kaipai/tu_shou1.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "skin", "index": 0 }, { "value": "tongyong_ui/game_ui/tongyong/general/effect/kaipai/tu_shou2.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "label": null, "key": "skin", "index": 6 }, { "value": "tongyong_ui/game_ui/tongyong/general/effect/kaipai/tu_shou2.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "label": null, "key": "skin", "index": 19 }, { "value": "tongyong_ui/game_ui/tongyong/general/effect/kaipai/tu_shou2.png", "tweenMethod": "linearNone", "tween": false, "target": 4, "label": null, "key": "skin", "index": 20 }], "scaleX": [{ "value": -1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 0 }, { "value": -1, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "scaleX", "index": 6 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "rotation", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "rotation", "index": 6 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "rotation", "index": 19 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "rotation", "index": 20 }] } }, { "target": 3, "keyframes": { "y": [{ "value": 85, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "y", "index": 0 }, { "value": 32.66666666666667, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "y", "index": 5 }, { "value": 5.307692307692308, "tweenMethod": "linearNone", "tween": true, "target": 3, "label": null, "key": "y", "index": 6 }, { "value": -3, "tweenMethod": "linearNone", "tween": true, "target": 3, "label": null, "key": "y", "index": 19 }, { "value": -13, "tweenMethod": "linearNone", "tween": true, "target": 3, "label": null, "key": "y", "index": 20 }], "x": [{ "value": -103, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 0 }, { "value": -92.33333333333333, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 5 }, { "value": -83, "tweenMethod": "linearNone", "tween": true, "target": 3, "label": null, "key": "x", "index": 6 }, { "value": -83, "tweenMethod": "linearNone", "tween": true, "target": 3, "label": null, "key": "x", "index": 19 }, { "value": -83, "tweenMethod": "linearNone", "tween": true, "target": 3, "label": null, "key": "x", "index": 20 }], "skin": [{ "value": "tongyong_ui/game_ui/tongyong/general/effect/kaipai/tu_shou1.png", "tweenMethod": "linearNone", "tween": false, "target": 3, "key": "skin", "index": 0 }, { "value": "tongyong_ui/game_ui/tongyong/general/effect/kaipai/tu_shou2.png", "tweenMethod": "linearNone", "tween": false, "target": 3, "label": null, "key": "skin", "index": 6 }, { "value": "tongyong_ui/game_ui/tongyong/general/effect/kaipai/tu_shou2.png", "tweenMethod": "linearNone", "tween": false, "target": 3, "label": null, "key": "skin", "index": 19 }, { "value": "tongyong_ui/game_ui/tongyong/general/effect/kaipai/tu_shou2.png", "tweenMethod": "linearNone", "tween": false, "target": 3, "label": null, "key": "skin", "index": 20 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "rotation", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "label": null, "key": "rotation", "index": 6 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "label": null, "key": "rotation", "index": 19 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "label": null, "key": "rotation", "index": 20 }] } }, { "target": 7, "keyframes": { "y": [{ "value": 27, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "y", "index": 0 }, { "value": 34.84615384615385, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "y", "index": 6 }, { "value": 27, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "y", "index": 19 }, { "value": 17, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "y", "index": 20 }], "x": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "x", "index": 6 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 19 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "x", "index": 20 }], "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "visible", "index": 6 }, { "value": true, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "visible", "index": 19 }, { "value": true, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "visible", "index": 20 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "rotation", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "rotation", "index": 6 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "rotation", "index": 19 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "rotation", "index": 20 }], "height": [{ "value": 16, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "height", "index": 0 }, { "value": 28.692307692307693, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "height", "index": 6 }, { "value": 37, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "height", "index": 19 }, { "value": 48, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "height", "index": 20 }] } }, { "target": 9, "keyframes": { "y": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "y", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "y", "index": 5 }, { "value": 6.461538461538462, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "y", "index": 6 }, { "value": 12, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "y", "index": 19 }, { "value": 38, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "y", "index": 20 }], "x": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "x", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "x", "index": 5 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "x", "index": 6 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "x", "index": 19 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "x", "index": 20 }], "width": [{ "value": 58, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "width", "index": 0 }, { "value": 58, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "width", "index": 5 }, { "value": 58.53846153846154, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "width", "index": 6 }, { "value": 59, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "width", "index": 19 }, { "value": 59, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "width", "index": 20 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "rotation", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "rotation", "index": 5 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "rotation", "index": 6 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "rotation", "index": 19 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "rotation", "index": 20 }], "height": [{ "value": 80, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "height", "index": 0 }, { "value": 80, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "height", "index": 5 }, { "value": 57.07692307692308, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "height", "index": 6 }, { "value": 52, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "height", "index": 19 }, { "value": 26, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "height", "index": 20 }] } }, { "target": 10, "keyframes": { "y": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "y", "index": 0 }, { "value": 9.76923076923077, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "y", "index": 6 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "y", "index": 19 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "y", "index": 20 }], "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 10, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "visible", "index": 6 }], "height": [{ "value": 34, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "height", "index": 0 }, { "value": 31.263157894736842, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "height", "index": 6 }, { "value": 30, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "height", "index": 19 }, { "value": 30, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "height", "index": 20 }] } }, { "target": 8, "keyframes": { "y": [{ "value": 3, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "y", "index": 0 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 8, "label": null, "key": "y", "index": 6 }, { "value": 8, "tweenMethod": "linearNone", "tween": true, "target": 8, "label": null, "key": "y", "index": 19 }, { "value": 8, "tweenMethod": "linearNone", "tween": true, "target": 8, "label": null, "key": "y", "index": 20 }], "x": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "x", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 8, "label": null, "key": "x", "index": 19 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 8, "label": null, "key": "x", "index": 20 }], "width": [{ "value": 57, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "width", "index": 0 }, { "value": 58, "tweenMethod": "linearNone", "tween": true, "target": 8, "label": null, "key": "width", "index": 6 }], "mouseEnabled": [{ "value": true, "tweenMethod": "linearNone", "tween": false, "target": 8, "key": "mouseEnabled", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": true, "target": 8, "label": null, "key": "mouseEnabled", "index": 6 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 8, "label": null, "key": "mouseEnabled", "index": 19 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 8, "label": null, "key": "mouseEnabled", "index": 20 }], "height": [{ "value": 14, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "height", "index": 0 }, { "value": 28.5, "tweenMethod": "linearNone", "tween": true, "target": 8, "label": null, "key": "height", "index": 6 }, { "value": 40, "tweenMethod": "linearNone", "tween": true, "target": 8, "label": null, "key": "height", "index": 20 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 8, "label": null, "key": "alpha", "index": 6 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 8, "label": null, "key": "alpha", "index": 19 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 8, "label": null, "key": "alpha", "index": 20 }] } }, { "target": 5, "keyframes": { "x": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "x", "index": 0 }, { "value": -1, "tweenMethod": "linearNone", "tween": true, "target": 5, "label": null, "key": "x", "index": 6 }], "width": [{ "value": 104, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "width", "index": 0 }, { "value": 109, "tweenMethod": "linearNone", "tween": true, "target": 5, "label": null, "key": "width", "index": 6 }] } }], "name": "ani_kaipai", "id": 1, "frameRate": 12, "action": 1 }] };
                        return KaiPaiUI;
                    }(View));
                    component.KaiPaiUI = KaiPaiUI;
                })(component = bairendezhou.component || (bairendezhou.component = {}));
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var bairendezhou;
            (function (bairendezhou) {
                var component;
                (function (component) {
                    var PaiLuHongDianUI = /** @class */ (function (_super) {
                        __extends(PaiLuHongDianUI, _super);
                        function PaiLuHongDianUI() {
                            return _super.call(this) || this;
                        }
                        PaiLuHongDianUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.bairendezhou.component.PaiLuHongDianUI.uiView);
                        };
                        PaiLuHongDianUI.uiView = { "type": "View", "props": { "width": 23, "height": 23 }, "child": [{ "type": "Clip", "props": { "y": 4, "x": 6, "var": "clip_num", "skin": "tongyong_ui/game_ui/tongyong/general/clip_plsz.png", "clipX": 10 } }, { "type": "Image", "props": { "y": 0, "x": 0, "var": "img_road", "skin": "tongyong_ui/game_ui/tongyong/general/tu_hq.png" } }] };
                        return PaiLuHongDianUI;
                    }(View));
                    component.PaiLuHongDianUI = PaiLuHongDianUI;
                })(component = bairendezhou.component || (bairendezhou.component = {}));
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var bairendezhou;
            (function (bairendezhou) {
                var component;
                (function (component) {
                    var PaiXingZiUI = /** @class */ (function (_super) {
                        __extends(PaiXingZiUI, _super);
                        function PaiXingZiUI() {
                            return _super.call(this) || this;
                        }
                        PaiXingZiUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.bairendezhou.component.PaiXingZiUI.uiView);
                        };
                        PaiXingZiUI.uiView = { "type": "View", "props": { "width": 186, "height": 31 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "bairendezhou_ui/game_ui/bairendezhou/tu_l3.png" } }, { "type": "Image", "props": { "y": 1, "x": 27, "var": "img_type", "skin": "bairendezhou_ui/game_ui/bairendezhou/tu_th1.png" } }] };
                        return PaiXingZiUI;
                    }(View));
                    component.PaiXingZiUI = PaiXingZiUI;
                })(component = bairendezhou.component || (bairendezhou.component = {}));
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var bairendezhou;
            (function (bairendezhou) {
                var component;
                (function (component) {
                    var renderUI = /** @class */ (function (_super) {
                        __extends(renderUI, _super);
                        function renderUI() {
                            return _super.call(this) || this;
                        }
                        renderUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.bairendezhou.component.renderUI.uiView);
                        };
                        renderUI.uiView = { "type": "View", "props": { "width": 14, "height": 14 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 14, "var": "img_road", "skin": "bairendezhou_ui/game_ui/bairendezhou/tu_g1.png", "height": 14 } }] }] };
                        return renderUI;
                    }(View));
                    component.renderUI = renderUI;
                })(component = bairendezhou.component || (bairendezhou.component = {}));
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var bairendezhou;
            (function (bairendezhou) {
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
                            this.createView(ui.nqp.game_ui.bairendezhou.component.TouXiangUI.uiView);
                        };
                        TouXiangUI.uiView = { "type": "View", "props": { "width": 100, "height": 137 }, "child": [{ "type": "Box", "props": { "y": 1, "x": 1, "width": 99, "height": 136 }, "child": [{ "type": "Image", "props": { "y": -7, "x": -5, "skin": "tongyong_ui/game_ui/tongyong/general/tu_txk1.png" } }, { "type": "Image", "props": { "y": 64, "x": 49, "var": "img_icon", "skin": "tongyong_ui/game_ui/tongyong/touxiang/head_0.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 14, "x": 2, "var": "img_txk", "skin": "tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png", "scaleY": 0.95, "scaleX": 0.95 } }, { "type": "Text", "props": { "y": 6, "x": -2, "wordWrap": true, "width": 101, "var": "txt_name", "text": "玩家名字", "leading": 6, "height": 17, "fontSize": 16, "color": "#efda8b", "align": "center" } }, { "type": "Text", "props": { "y": 109, "x": -7, "wordWrap": true, "width": 110, "var": "txt_money", "text": "0", "leading": 6, "height": 22, "fontSize": 20, "color": "#f8ea5e", "align": "center" } }, { "type": "Clip", "props": { "y": 1, "x": 37, "var": "clip_money", "skin": "tongyong_ui/game_ui/tongyong/general/clip_num1.png", "clipX": 11 } }, { "type": "Image", "props": { "y": 21, "x": 69, "visible": false, "var": "img_qifu", "skin": "tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png" } }, { "type": "Image", "props": { "y": 105, "x": 50, "visible": false, "var": "qifu_type", "skin": "tongyong_ui/game_ui/tongyong/qifu/f_cs2.png", "scaleY": 0.5, "scaleX": 0.5, "anchorY": 1, "anchorX": 0.5 } }] }] };
                        return TouXiangUI;
                    }(View));
                    component.TouXiangUI = TouXiangUI;
                })(component = bairendezhou.component || (bairendezhou.component = {}));
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var bairendezhou;
            (function (bairendezhou) {
                var component;
                (function (component) {
                    var TouXiangWzUI = /** @class */ (function (_super) {
                        __extends(TouXiangWzUI, _super);
                        function TouXiangWzUI() {
                            return _super.call(this) || this;
                        }
                        TouXiangWzUI.prototype.createChildren = function () {
                            View.regComponent("Text", laya.display.Text);
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.bairendezhou.component.TouXiangWzUI.uiView);
                        };
                        TouXiangWzUI.uiView = { "type": "View", "props": { "width": 100, "height": 137 }, "child": [{ "type": "Box", "props": { "y": 1, "x": 1, "width": 99, "height": 136 }, "child": [{ "type": "Image", "props": { "y": -7, "x": -5, "skin": "tongyong_ui/game_ui/tongyong/general/tu_txk1.png" } }, { "type": "Image", "props": { "y": 62, "x": 50, "var": "img_icon", "skin": "tongyong_ui/game_ui/tongyong/general/tu_weizi.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 12, "x": 3, "var": "img_txk", "skin": "tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png", "scaleY": 0.95, "scaleX": 0.95 } }, { "type": "Text", "props": { "y": 109, "x": -1, "wordWrap": true, "width": 99, "var": "txt_money", "text": "点击入座", "leading": 6, "height": 21, "fontSize": 20, "color": "#b18dff", "align": "center" } }, { "type": "Text", "props": { "y": 2, "x": -2, "wordWrap": true, "width": 101, "var": "txt_name", "text": "玩家名字", "leading": 6, "height": 17, "fontSize": 16, "color": "#12093d", "align": "center" } }, { "type": "Clip", "props": { "y": 0, "x": 36, "var": "clip_money", "skin": "tongyong_ui/game_ui/tongyong/general/clip_num1.png", "clipX": 11 } }, { "type": "Image", "props": { "y": 21, "x": 69, "visible": false, "var": "img_qifu", "skin": "tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png" } }, { "type": "Image", "props": { "y": 105, "x": 50, "visible": false, "var": "qifu_type", "skin": "tongyong_ui/game_ui/tongyong/qifu/f_cs2.png", "scaleY": 0.5, "scaleX": 0.5, "anchorY": 1, "anchorX": 0.5 } }] }] };
                        return TouXiangWzUI;
                    }(View));
                    component.TouXiangWzUI = TouXiangWzUI;
                })(component = bairendezhou.component || (bairendezhou.component = {}));
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var bairendezhou;
            (function (bairendezhou) {
                var component;
                (function (component) {
                    var WanJiaUI = /** @class */ (function (_super) {
                        __extends(WanJiaUI, _super);
                        function WanJiaUI() {
                            return _super.call(this) || this;
                        }
                        WanJiaUI.prototype.createChildren = function () {
                            View.regComponent("Text", laya.display.Text);
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.bairendezhou.component.WanJiaUI.uiView);
                        };
                        WanJiaUI.uiView = { "type": "View", "props": { "width": 200, "height": 80 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 200, "height": 80 }, "child": [{ "type": "Text", "props": { "y": 14, "x": 76, "wordWrap": true, "width": 121, "var": "txt_name", "text": "ID:000000000", "leading": 6, "height": 17, "fontSize": 18, "color": "#9e9bad", "bold": true, "align": "center" } }, { "type": "Text", "props": { "y": 44, "x": 101, "wordWrap": true, "width": 97, "var": "txt_money", "text": "1000000.00", "leading": 6, "height": 17, "fontSize": 18, "color": "#9e9bad", "bold": true, "align": "left" } }, { "type": "Image", "props": { "y": 38, "x": 38, "skin": "tongyong_ui/game_ui/tongyong/touxiang/tu_txk.png", "scaleY": 0.9, "scaleX": 0.9, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 38, "x": 38, "var": "img_icon", "skin": "tongyong_ui/game_ui/tongyong/touxiang/head_1.png", "scaleY": 0.9, "scaleX": 0.9, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 77, "x": 3, "width": 190, "skin": "bairendezhou_ui/game_ui/bairendezhou/tu_xx.png" } }, { "type": "Image", "props": { "y": 52, "x": 87, "skin": "tongyong_ui/game_ui/tongyong/dating/icon_money1.png", "scaleY": 0.55, "scaleX": 0.55, "anchorY": 0.5, "anchorX": 0.5 } }] }] };
                        return WanJiaUI;
                    }(View));
                    component.WanJiaUI = WanJiaUI;
                })(component = bairendezhou.component || (bairendezhou.component = {}));
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var bairendezhou;
            (function (bairendezhou) {
                var component;
                (function (component) {
                    var XuanZhongUI = /** @class */ (function (_super) {
                        __extends(XuanZhongUI, _super);
                        function XuanZhongUI() {
                            return _super.call(this) || this;
                        }
                        XuanZhongUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.bairendezhou.component.XuanZhongUI.uiView);
                        };
                        XuanZhongUI.uiView = { "type": "View", "props": { "width": 350, "height": 170 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "bairendezhou_ui/game_ui/bairendezhou/tu_xz.png", "blendMode": "lighter" }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 10 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                        return XuanZhongUI;
                    }(View));
                    component.XuanZhongUI = XuanZhongUI;
                })(component = bairendezhou.component || (bairendezhou.component = {}));
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var bairendezhou;
            (function (bairendezhou) {
                var component;
                (function (component) {
                    var XuanZhong1UI = /** @class */ (function (_super) {
                        __extends(XuanZhong1UI, _super);
                        function XuanZhong1UI() {
                            return _super.call(this) || this;
                        }
                        XuanZhong1UI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.bairendezhou.component.XuanZhong1UI.uiView);
                        };
                        XuanZhong1UI.uiView = { "type": "View", "props": { "width": 176, "height": 160 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "bairendezhou_ui/game_ui/bairendezhou/tu_xz1.png", "blendMode": "lighter" }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 10 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                        return XuanZhong1UI;
                    }(View));
                    component.XuanZhong1UI = XuanZhong1UI;
                })(component = bairendezhou.component || (bairendezhou.component = {}));
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var bairendezhou;
            (function (bairendezhou) {
                var component;
                (function (component) {
                    var XuanZhong2UI = /** @class */ (function (_super) {
                        __extends(XuanZhong2UI, _super);
                        function XuanZhong2UI() {
                            return _super.call(this) || this;
                        }
                        XuanZhong2UI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.bairendezhou.component.XuanZhong2UI.uiView);
                        };
                        XuanZhong2UI.uiView = { "type": "View", "props": { "width": 190, "height": 164 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "bairendezhou_ui/game_ui/bairendezhou/tu_xz2.png", "blendMode": "lighter" }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 10 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                        return XuanZhong2UI;
                    }(View));
                    component.XuanZhong2UI = XuanZhong2UI;
                })(component = bairendezhou.component || (bairendezhou.component = {}));
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var bairendezhou;
            (function (bairendezhou) {
                var component;
                (function (component) {
                    var XuanZhong3UI = /** @class */ (function (_super) {
                        __extends(XuanZhong3UI, _super);
                        function XuanZhong3UI() {
                            return _super.call(this) || this;
                        }
                        XuanZhong3UI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.bairendezhou.component.XuanZhong3UI.uiView);
                        };
                        XuanZhong3UI.uiView = { "type": "View", "props": { "width": 214, "height": 162 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "bairendezhou_ui/game_ui/bairendezhou/tu_xz3.png", "blendMode": "lighter" }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 10 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                        return XuanZhong3UI;
                    }(View));
                    component.XuanZhong3UI = XuanZhong3UI;
                })(component = bairendezhou.component || (bairendezhou.component = {}));
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var bairendezhou;
            (function (bairendezhou) {
                var component;
                (function (component) {
                    var XuanZhong4UI = /** @class */ (function (_super) {
                        __extends(XuanZhong4UI, _super);
                        function XuanZhong4UI() {
                            return _super.call(this) || this;
                        }
                        XuanZhong4UI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.bairendezhou.component.XuanZhong4UI.uiView);
                        };
                        XuanZhong4UI.uiView = { "type": "View", "props": { "width": 350, "height": 86 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "bairendezhou_ui/game_ui/bairendezhou/tu_xz4.png", "blendMode": "lighter" }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 10 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                        return XuanZhong4UI;
                    }(View));
                    component.XuanZhong4UI = XuanZhong4UI;
                })(component = bairendezhou.component || (bairendezhou.component = {}));
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var bairendezhou;
            (function (bairendezhou) {
                var component;
                (function (component) {
                    var zoushiUI = /** @class */ (function (_super) {
                        __extends(zoushiUI, _super);
                        function zoushiUI() {
                            return _super.call(this) || this;
                        }
                        zoushiUI.prototype.createChildren = function () {
                            _super.prototype.createChildren.call(this);
                            this.createView(ui.nqp.game_ui.bairendezhou.component.zoushiUI.uiView);
                        };
                        zoushiUI.uiView = { "type": "View", "props": { "width": 33, "height": 32 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "img_record", "skin": "bairendezhou_ui/game_ui/bairendezhou/zs_0.png" } }] };
                        return zoushiUI;
                    }(View));
                    component.zoushiUI = zoushiUI;
                })(component = bairendezhou.component || (bairendezhou.component = {}));
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var bairendezhou;
            (function (bairendezhou) {
                var GoUI = /** @class */ (function (_super) {
                    __extends(GoUI, _super);
                    function GoUI() {
                        return _super.call(this) || this;
                    }
                    GoUI.prototype.createChildren = function () {
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.nqp.game_ui.bairendezhou.GoUI.uiView);
                    };
                    GoUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "y": 360, "x": 640, "width": 1280, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 350, "x": 650, "skin": "tongyong_ui/game_ui/tongyong/general/gzyz_0.png", "scaleY": 1, "scaleX": 1, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 7 }, { "type": "Image", "props": { "y": 360, "x": 957.4016, "skin": "tongyong_ui/game_ui/tongyong/general/tu_xz.png", "centerY": 0, "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 }, "compId": 2 }, { "type": "Image", "props": { "y": 360, "x": 317.5984, "skin": "tongyong_ui/game_ui/tongyong/general/tu_ks0.png", "centerY": 0, "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 }, "compId": 4 }, { "type": "Image", "props": { "y": 360, "x": 637, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_2.png", "centerY": 0, "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0 }, "compId": 3 }, { "type": "Image", "props": { "y": 251, "x": 385, "skin": "tongyong_ui/game_ui/tongyong/general/gzyz_3.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 }, "compId": 9 }, { "type": "Image", "props": { "y": 436, "x": 916, "skin": "tongyong_ui/game_ui/tongyong/general/gzyz_3.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 }, "compId": 10 }] }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "x": [{ "value": 1000, "tweenMethod": "strongInOut", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 740, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 10 }, { "value": 740, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "x", "index": 40 }, { "value": 1000, "tweenMethod": "strongInOut", "tween": true, "target": 2, "label": null, "key": "x", "index": 48 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 40 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "alpha", "index": 48 }] } }, { "target": 4, "keyframes": { "x": [{ "value": 275, "tweenMethod": "strongInOut", "tween": true, "target": 4, "key": "x", "index": 0 }, { "value": 535, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "x", "index": 10 }, { "value": 535, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "x", "index": 40 }, { "value": 275, "tweenMethod": "strongInOut", "tween": true, "target": 4, "label": null, "key": "x", "index": 48 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 40 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "alpha", "index": 48 }] } }, { "target": 3, "keyframes": { "x": [{ "value": 637, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 0 }, { "value": 637, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 40 }, { "value": 637, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 48 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 9 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 13 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 40 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 48 }] } }, { "target": 7, "keyframes": { "visible": [{ "value": true, "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "visible", "index": 0 }, { "value": false, "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "visible", "index": 46 }], "scaleY": [{ "value": 0.1, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleY", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleY", "index": 40 }, { "value": 0.1, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleY", "index": 45 }, { "value": 0.1, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleY", "index": 46 }], "scaleX": [{ "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleX", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleX", "index": 40 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleX", "index": 45 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleX", "index": 46 }] } }, { "target": 9, "keyframes": { "y": [{ "value": 251, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "y", "index": 0 }], "x": [{ "value": 385, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "x", "index": 0 }, { "value": 346, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "x", "index": 4 }, { "value": 346, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "x", "index": 10 }, { "value": 937, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "x", "index": 30 }], "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 9, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 9, "key": "visible", "index": 4 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 4 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 9 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 20 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 30 }] } }, { "target": 10, "keyframes": { "y": [{ "value": 436, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "y", "index": 0 }, { "value": 427, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "y", "index": 4 }, { "value": 427, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "y", "index": 10 }, { "value": 425, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "y", "index": 30 }], "x": [{ "value": 916, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "x", "index": 0 }, { "value": 936, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "x", "index": 4 }, { "value": 936, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "x", "index": 10 }, { "value": 343, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "x", "index": 30 }], "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 10, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 10, "key": "visible", "index": 4 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 4 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 9 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 20 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 30 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
                    return GoUI;
                }(View));
                bairendezhou.GoUI = GoUI;
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var bairendezhou;
            (function (bairendezhou) {
                var JieSuanUI = /** @class */ (function (_super) {
                    __extends(JieSuanUI, _super);
                    function JieSuanUI() {
                        return _super.call(this) || this;
                    }
                    JieSuanUI.prototype.createChildren = function () {
                        View.regComponent("Text", laya.display.Text);
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.nqp.game_ui.bairendezhou.JieSuanUI.uiView);
                    };
                    JieSuanUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "width": 1280, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 250, "x": 636, "var": "img_0", "skin": "tongyong_ui/game_ui/tongyong/general/tu_gs.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 44 }, { "type": "Image", "props": { "width": 620, "skin": "tongyong_ui/game_ui/tongyong/hud/game_popout_bg.png", "sizeGrid": "89,49,71,39", "height": 350, "centerY": 30, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "var": "img_1", "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_sl2.png", "centerY": -190, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "var": "img_2", "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_js.png", "centerY": -180, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 208, "x": 626, "var": "img_3", "skin": "bairendezhou_ui/game_ui/bairendezhou/jiesuan_2.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 299, "x": 438, "width": 96, "skin": "tongyong_ui/game_ui/tongyong/general/tu_k3.png", "sizeGrid": "10,10,10,10", "height": 34 } }, { "type": "Text", "props": { "y": 304, "x": 352, "wordWrap": true, "width": 41, "text": "蓝：", "leading": 6, "height": 20, "fontSize": 18, "color": "#fffbb5" } }, { "type": "Text", "props": { "y": 306, "x": 438, "wordWrap": true, "width": 95, "var": "txt_result0", "text": "000000.00", "leading": 6, "height": 20, "fontSize": 18, "color": "#ffffff", "align": "center" } }, { "type": "Image", "props": { "y": 299, "x": 829, "width": 96, "skin": "tongyong_ui/game_ui/tongyong/general/tu_k3.png", "sizeGrid": "10,10,10,10", "height": 34 } }, { "type": "Text", "props": { "y": 304, "x": 725, "wordWrap": true, "width": 41, "text": "红：", "leading": 6, "height": 20, "fontSize": 18, "color": "#fffbb5" } }, { "type": "Text", "props": { "y": 306, "x": 829, "wordWrap": true, "width": 95, "var": "txt_result1", "text": "000000.00", "leading": 6, "height": 20, "fontSize": 18, "color": "#ffffff", "align": "center" } }, { "type": "Image", "props": { "y": 299, "x": 621, "width": 96, "skin": "tongyong_ui/game_ui/tongyong/general/tu_k3.png", "sizeGrid": "10,10,10,10", "height": 34 } }, { "type": "Text", "props": { "y": 304, "x": 540, "wordWrap": true, "width": 41, "text": "和：", "leading": 6, "height": 20, "fontSize": 18, "color": "#fffbb5" } }, { "type": "Text", "props": { "y": 306, "x": 621, "wordWrap": true, "width": 95, "var": "txt_result2", "text": "000000.00", "leading": 6, "height": 20, "fontSize": 18, "color": "#ffffff", "align": "center" } }, { "type": "Image", "props": { "y": 363, "x": 438, "width": 96, "skin": "tongyong_ui/game_ui/tongyong/general/tu_k3.png", "sizeGrid": "10,10,10,10", "height": 34 } }, { "type": "Text", "props": { "y": 368, "x": 352, "wordWrap": true, "width": 61, "text": "一对：", "leading": 6, "height": 20, "fontSize": 18, "color": "#fffbb5" } }, { "type": "Text", "props": { "y": 370, "x": 438, "wordWrap": true, "width": 95, "var": "txt_result3", "text": "000000.00", "leading": 6, "height": 20, "fontSize": 18, "color": "#ffffff", "align": "center" } }, { "type": "Image", "props": { "y": 363, "x": 829, "width": 96, "skin": "tongyong_ui/game_ui/tongyong/general/tu_k3.png", "sizeGrid": "10,10,10,10", "height": 34 } }, { "type": "Text", "props": { "y": 368, "x": 725, "wordWrap": true, "width": 61, "text": "两对：", "leading": 6, "height": 20, "fontSize": 18, "color": "#fffbb5" } }, { "type": "Text", "props": { "y": 370, "x": 829, "wordWrap": true, "width": 95, "var": "txt_result4", "text": "000000.00", "leading": 6, "height": 20, "fontSize": 18, "color": "#ffffff", "align": "center" } }, { "type": "Image", "props": { "y": 418, "x": 438, "width": 96, "skin": "tongyong_ui/game_ui/tongyong/general/tu_k3.png", "sizeGrid": "10,10,10,10", "height": 34 } }, { "type": "Text", "props": { "y": 423, "x": 352, "wordWrap": true, "width": 108, "text": "三条/顺子：", "leading": 6, "height": 20, "fontSize": 18, "color": "#fffbb5" } }, { "type": "Text", "props": { "y": 424, "x": 438, "wordWrap": true, "width": 95, "var": "txt_result5", "text": "000000.00", "leading": 6, "height": 20, "fontSize": 18, "color": "#ffffff", "align": "center" } }, { "type": "Image", "props": { "y": 418, "x": 621, "width": 96, "skin": "tongyong_ui/game_ui/tongyong/general/tu_k3.png", "sizeGrid": "10,10,10,10", "height": 34 } }, { "type": "Text", "props": { "y": 423, "x": 540, "wordWrap": true, "width": 108, "text": "同花/葫芦：", "leading": 6, "height": 20, "fontSize": 18, "color": "#fffbb5" } }, { "type": "Text", "props": { "y": 424, "x": 621, "wordWrap": true, "width": 95, "var": "txt_result6", "text": "000000.00", "leading": 6, "height": 20, "fontSize": 18, "color": "#ffffff", "align": "center" } }, { "type": "Image", "props": { "y": 418, "x": 829, "width": 96, "skin": "tongyong_ui/game_ui/tongyong/general/tu_k3.png", "sizeGrid": "10,10,10,10", "height": 34 } }, { "type": "Text", "props": { "y": 423, "x": 725, "wordWrap": true, "width": 130, "text": "金刚/同花顺：", "leading": 6, "height": 20, "fontSize": 18, "color": "#fffbb5" } }, { "type": "Text", "props": { "y": 424, "x": 829, "wordWrap": true, "width": 95, "var": "txt_result7", "text": "000000.00", "leading": 6, "height": 20, "fontSize": 18, "color": "#ffffff", "align": "center" } }, { "type": "Image", "props": { "y": 475, "x": 621, "width": 96, "skin": "tongyong_ui/game_ui/tongyong/general/tu_k3.png", "sizeGrid": "10,10,10,10", "height": 34 } }, { "type": "Text", "props": { "y": 480, "x": 532, "wordWrap": false, "width": 102, "text": "输赢合计：", "leading": 6, "height": 20, "fontSize": 18, "color": "#fffbb5", "align": "center" } }, { "type": "Text", "props": { "y": 482, "x": 621, "wordWrap": true, "width": 95, "var": "txt_result8", "text": "000000.00", "leading": 6, "height": 20, "fontSize": 18, "color": "#ffffff", "align": "center" } }, { "type": "Image", "props": { "y": 290, "x": 536, "skin": "tongyong_ui/game_ui/tongyong/general/tu_d6.png" } }, { "type": "Image", "props": { "y": 289, "x": 721, "skin": "tongyong_ui/game_ui/tongyong/general/tu_d6.png" } }, { "type": "Image", "props": { "y": 459, "x": 355, "skin": "tongyong_ui/game_ui/tongyong/general/tu_d5.png" } }, { "type": "Image", "props": { "y": 405, "x": 355, "skin": "tongyong_ui/game_ui/tongyong/general/tu_d5.png" } }, { "type": "Image", "props": { "y": 345, "x": 355, "skin": "tongyong_ui/game_ui/tongyong/general/tu_d5.png" } }] }], "animations": [{ "nodes": [{ "target": 44, "keyframes": { "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 44, "key": "rotation", "index": 0 }, { "value": 360, "tweenMethod": "linearNone", "tween": true, "target": 44, "key": "rotation", "index": 100 }] } }], "name": "ani2", "id": 2, "frameRate": 24, "action": 2 }] };
                    return JieSuanUI;
                }(View));
                bairendezhou.JieSuanUI = JieSuanUI;
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var bairendezhou;
            (function (bairendezhou) {
                var StopUI = /** @class */ (function (_super) {
                    __extends(StopUI, _super);
                    function StopUI() {
                        return _super.call(this) || this;
                    }
                    StopUI.prototype.createChildren = function () {
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.nqp.game_ui.bairendezhou.StopUI.uiView);
                    };
                    StopUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "y": 360, "x": 640, "width": 1280, "height": 720, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 350, "x": 650, "visible": false, "skin": "tongyong_ui/game_ui/tongyong/general/gzyz_0.png", "scaleY": 0.1, "scaleX": 2, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 7 }, { "type": "Image", "props": { "y": 360, "x": 1000, "skin": "tongyong_ui/game_ui/tongyong/general/tu_xz.png", "centerY": 0, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0 }, "compId": 2 }, { "type": "Image", "props": { "y": 360, "x": 275, "skin": "tongyong_ui/game_ui/tongyong/general/tu_tz0.png", "centerY": 0, "anchorY": 0.5, "anchorX": 0.5, "alpha": 0 }, "compId": 4 }, { "type": "Image", "props": { "y": 360, "x": 637, "skin": "tongyong_ui/game_ui/tongyong/general/jiesuan_2.png", "centerY": 0, "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0 }, "compId": 3 }, { "type": "Image", "props": { "y": 251, "x": 937, "visible": true, "skin": "tongyong_ui/game_ui/tongyong/general/gzyz_3.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0 }, "compId": 9 }, { "type": "Image", "props": { "y": 425, "x": 343, "visible": true, "skin": "tongyong_ui/game_ui/tongyong/general/gzyz_3.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0 }, "compId": 10 }] }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "x": [{ "value": 1000, "tweenMethod": "strongInOut", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 740, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 10 }, { "value": 740, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "x", "index": 40 }, { "value": 1000, "tweenMethod": "strongInOut", "tween": true, "target": 2, "label": null, "key": "x", "index": 48 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 40 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "alpha", "index": 48 }] } }, { "target": 4, "keyframes": { "x": [{ "value": 275, "tweenMethod": "strongInOut", "tween": true, "target": 4, "key": "x", "index": 0 }, { "value": 535, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "x", "index": 10 }, { "value": 535, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "x", "index": 40 }, { "value": 275, "tweenMethod": "strongInOut", "tween": true, "target": 4, "label": null, "key": "x", "index": 48 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 40 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 4, "label": null, "key": "alpha", "index": 48 }] } }, { "target": 3, "keyframes": { "x": [{ "value": 637, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 0 }, { "value": 637, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 40 }, { "value": 637, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 48 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 9 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 13 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 40 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "alpha", "index": 48 }] } }, { "target": 7, "keyframes": { "visible": [{ "value": true, "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "visible", "index": 0 }, { "value": false, "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "visible", "index": 46 }], "scaleY": [{ "value": 0.1, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleY", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleY", "index": 40 }, { "value": 0.1, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleY", "index": 45 }, { "value": 0.1, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleY", "index": 46 }], "scaleX": [{ "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "scaleX", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleX", "index": 40 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleX", "index": 45 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "scaleX", "index": 46 }] } }, { "target": 9, "keyframes": { "y": [{ "value": 251, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "y", "index": 0 }], "x": [{ "value": 385, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "x", "index": 0 }, { "value": 346, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "x", "index": 4 }, { "value": 346, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "x", "index": 10 }, { "value": 937, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "x", "index": 30 }], "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 9, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 9, "key": "visible", "index": 4 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 4 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 9 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 20 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 9, "label": null, "key": "alpha", "index": 30 }] } }, { "target": 10, "keyframes": { "y": [{ "value": 436, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "y", "index": 0 }, { "value": 427, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "y", "index": 4 }, { "value": 427, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "y", "index": 10 }, { "value": 425, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "y", "index": 30 }], "x": [{ "value": 916, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "x", "index": 0 }, { "value": 936, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "x", "index": 4 }, { "value": 936, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "x", "index": 10 }, { "value": 343, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "x", "index": 30 }], "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 10, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 10, "key": "visible", "index": 4 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 4 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 9 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 20 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "label": null, "key": "alpha", "index": 30 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
                    return StopUI;
                }(View));
                bairendezhou.StopUI = StopUI;
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var bairendezhou;
            (function (bairendezhou) {
                var YingUI = /** @class */ (function (_super) {
                    __extends(YingUI, _super);
                    function YingUI() {
                        return _super.call(this) || this;
                    }
                    YingUI.prototype.createChildren = function () {
                        View.regComponent("ui.nqp.game_ui.tongyong.GuangUI", ui.nqp.game_ui.tongyong.GuangUI);
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.nqp.game_ui.bairendezhou.YingUI.uiView);
                    };
                    YingUI.uiView = { "type": "View", "props": { "width": 600, "height": 600 }, "child": [{ "type": "Box", "props": { "width": 600, "height": 600, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Guang", "props": { "y": 300, "x": 300, "anchorY": 0.5, "anchorX": 0.5, "runtime": "ui.nqp.game_ui.tongyong.GuangUI" }, "compId": 10 }, { "type": "Image", "props": { "y": 332, "x": 202, "visible": true, "skin": "tongyong_ui/game_ui/tongyong/general/effect/bigwin/mai_left.png", "scaleY": 1, "scaleX": 1, "rotation": 0, "anchorY": 1, "anchorX": 1 }, "compId": 5 }, { "type": "Image", "props": { "y": 332, "x": 402, "visible": true, "skin": "tongyong_ui/game_ui/tongyong/general/effect/bigwin/mai_right.png", "scaleY": 1, "scaleX": 1, "rotation": 0, "anchorY": 1 }, "compId": 6 }, { "type": "Image", "props": { "y": 201, "x": 297, "visible": true, "skin": "tongyong_ui/game_ui/tongyong/general/effect/bigwin/hg.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 4 }, { "type": "Image", "props": { "y": 290, "x": 301, "skin": "tongyong_ui/game_ui/tongyong/general/effect/bigwin/piaodai.png", "scaleY": 1, "scaleX": 1, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 3 }, { "type": "Image", "props": { "y": 218, "x": 335, "visible": true, "skin": "tongyong_ui/game_ui/tongyong/general/effect/bigwin/xx2.png", "blendMode": "lighter", "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 }, "compId": 7 }, { "type": "Image", "props": { "y": 296, "x": 294, "visible": true, "var": "img_result", "skin": "bairendezhou_ui/game_ui/bairendezhou/winTxt1.png", "scaleY": 1, "scaleX": 1, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 8 }] }], "animations": [{ "nodes": [{ "target": 3, "keyframes": { "scaleY": [{ "value": 0.5, "tweenMethod": "backOut", "tween": true, "target": 3, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleY", "index": 10 }], "scaleX": [{ "value": 0.2, "tweenMethod": "backOut", "tween": true, "target": 3, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleX", "index": 10 }] } }, { "target": 8, "keyframes": { "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 8, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 8, "key": "visible", "index": 10 }], "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleY", "index": 0 }, { "value": 2, "tweenMethod": "backOut", "tween": true, "target": 8, "key": "scaleY", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleY", "index": 20 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleX", "index": 0 }, { "value": 2, "tweenMethod": "backOut", "tween": true, "target": 8, "key": "scaleX", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 8, "key": "scaleX", "index": 20 }] } }, { "target": 5, "keyframes": { "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 5, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 5, "key": "visible", "index": 15 }], "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 0 }, { "value": 0.5, "tweenMethod": "backOut", "tween": true, "target": 5, "key": "scaleY", "index": 15 }, { "value": 1, "tweenMethod": "backOut", "tween": true, "target": 5, "key": "scaleY", "index": 25 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 0 }, { "value": 0.5, "tweenMethod": "backOut", "tween": true, "target": 5, "key": "scaleX", "index": 15 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 25 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "rotation", "index": 0 }, { "value": -20, "tweenMethod": "backOut", "tween": true, "target": 5, "key": "rotation", "index": 15 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "rotation", "index": 25 }] } }, { "target": 6, "keyframes": { "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 6, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 6, "key": "visible", "index": 15 }], "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "scaleY", "index": 0 }, { "value": 0.5, "tweenMethod": "backOut", "tween": true, "target": 6, "key": "scaleY", "index": 15 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "scaleY", "index": 25 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "scaleX", "index": 0 }, { "value": 0.5, "tweenMethod": "backOut", "tween": true, "target": 6, "key": "scaleX", "index": 15 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "scaleX", "index": 25 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "rotation", "index": 0 }, { "value": 20, "tweenMethod": "backOut", "tween": true, "target": 6, "key": "rotation", "index": 15 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "rotation", "index": 25 }] } }, { "target": 4, "keyframes": { "y": [{ "value": 201, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 0 }, { "value": 281, "tweenMethod": "backOut", "tween": true, "target": 4, "key": "y", "index": 15 }, { "value": 201, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 25 }], "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "visible", "index": 15 }] } }, { "target": 7, "keyframes": { "visible": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "visible", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 7, "key": "visible", "index": 25 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "alpha", "index": 25 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "alpha", "index": 30 }] } }, { "target": 10, "keyframes": { "x": [{ "value": 300, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "x", "index": 0 }, { "value": 300, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "x", "index": 100 }], "staticCache": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 10, "key": "staticCache", "index": 0 }, { "value": true, "tweenMethod": "linearNone", "tween": false, "target": 10, "key": "staticCache", "index": 25 }], "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "scaleY", "index": 0 }, { "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "scaleY", "index": 25 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "scaleY", "index": 35 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "scaleX", "index": 0 }, { "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "scaleX", "index": 25 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "scaleX", "index": 35 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "alpha", "index": 25 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 10, "key": "alpha", "index": 35 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 1 }] };
                    return YingUI;
                }(View));
                bairendezhou.YingUI = YingUI;
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
(function (ui) {
    var nqp;
    (function (nqp) {
        var game_ui;
        (function (game_ui) {
            var bairendezhou;
            (function (bairendezhou) {
                var ZouShiTuUI = /** @class */ (function (_super) {
                    __extends(ZouShiTuUI, _super);
                    function ZouShiTuUI() {
                        return _super.call(this) || this;
                    }
                    ZouShiTuUI.prototype.createChildren = function () {
                        View.regComponent("ui.nqp.game_ui.bairendezhou.component.HongDianUI", ui.nqp.game_ui.bairendezhou.component.HongDianUI);
                        View.regComponent("ui.nqp.game_ui.bairendezhou.component.DuiZiUI", ui.nqp.game_ui.bairendezhou.component.DuiZiUI);
                        _super.prototype.createChildren.call(this);
                        this.createView(ui.nqp.game_ui.bairendezhou.ZouShiTuUI.uiView);
                    };
                    ZouShiTuUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Box", "props": { "y": 175, "x": 705, "width": 787, "scaleY": 1.25, "scaleX": 1.25, "height": 531, "centerY": 1, "centerX": -5, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": -1, "x": 793, "width": 407, "skin": "tongyong_ui/game_ui/tongyong/general/tu_bk2.png", "scaleX": -1, "height": 531 } }, { "type": "Image", "props": { "y": -1, "x": -6, "skin": "tongyong_ui/game_ui/tongyong/general/tu_bk2.png" } }, { "type": "Image", "props": { "y": 29, "x": 394, "skin": "tongyong_ui/game_ui/tongyong/general/tu_bkbt.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 5, "x": 290, "skin": "tongyong_ui/game_ui/tongyong/general/tu_zst.png" } }, { "type": "Button", "props": { "y": 38, "x": 743, "var": "btn_close", "stateNum": 1, "skin": "tongyong_ui/game_ui/tongyong/hud/btn_gb.png", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 79, "x": 12 }, "child": [{ "type": "Image", "props": { "x": 457, "skin": "tongyong_ui/game_ui/tongyong/general/tu_sheng.png" } }, { "type": "Image", "props": { "x": 11, "skin": "tongyong_ui/game_ui/tongyong/general/tu_fu.png" } }, { "type": "Label", "props": { "y": 3, "x": 136, "var": "txt_lan", "text": "50%", "fontSize": 24, "font": "Bahnschrift", "color": "#ffffff" } }, { "type": "Label", "props": { "y": 3, "x": 576, "var": "txt_hong", "text": "50%", "fontSize": 24, "font": "Bahnschrift", "color": "#ffffff" } }, { "type": "Label", "props": { "y": 1, "x": 316, "var": "txt_title", "text": "近20局胜负", "fontSize": 24, "color": "#ffffff" } }, { "type": "Image", "props": { "y": 68, "skin": "tongyong_ui/game_ui/tongyong/general/tu_ditu.png" } }, { "type": "Image", "props": { "y": 71, "x": 352, "skin": "tongyong_ui/game_ui/tongyong/general/tu_pl.png" } }, { "type": "Image", "props": { "y": 297, "skin": "tongyong_ui/game_ui/tongyong/general/tu_ditu.png" } }, { "type": "Image", "props": { "y": 301, "x": 333, "skin": "tongyong_ui/game_ui/tongyong/general/tu_pszs.png" } }, { "type": "Image", "props": { "y": 32, "width": 764, "skin": "tongyong_ui/game_ui/tongyong/general/tu_ditu1.png", "sizeGrid": "5,5,5,5", "height": 32 } }, { "type": "List", "props": { "y": 40, "x": 23, "width": 736, "var": "list_record0", "spaceX": 18, "repeatY": 1, "repeatX": 20, "height": 27 }, "child": [{ "type": "HongDian", "props": { "y": 0, "x": 0, "renderType": "render", "runtime": "ui.nqp.game_ui.bairendezhou.component.HongDianUI" } }] }, { "type": "Image", "props": { "y": 104, "width": 62, "skin": "tongyong_ui/game_ui/tongyong/general/tu_ditu1.png", "sizeGrid": "5,5,5,5", "height": 190 } }, { "type": "Image", "props": { "y": 103, "x": 703, "width": 62, "skin": "tongyong_ui/game_ui/tongyong/general/tu_ditu1.png", "sizeGrid": "5,5,5,5", "height": 190 } }, { "type": "Image", "props": { "y": 103, "x": 64, "skin": "tongyong_ui/game_ui/tongyong/general/tu_pldt.png" } }, { "type": "Image", "props": { "y": 103, "x": 702, "skin": "tongyong_ui/game_ui/tongyong/general/tu_pldt.png", "scaleX": -1 } }, { "type": "List", "props": { "y": 333, "x": 5, "width": 761, "var": "list_record1", "spaceY": 4, "spaceX": 3, "repeatY": 2, "repeatX": 10, "height": 72 }, "child": [{ "type": "DuiZi", "props": { "y": 0, "x": 0, "renderType": "render", "runtime": "ui.nqp.game_ui.bairendezhou.component.DuiZiUI" } }] }] }] }] };
                    return ZouShiTuUI;
                }(View));
                bairendezhou.ZouShiTuUI = ZouShiTuUI;
            })(bairendezhou = game_ui.bairendezhou || (game_ui.bairendezhou = {}));
        })(game_ui = nqp.game_ui || (nqp.game_ui = {}));
    })(nqp = ui.nqp || (ui.nqp = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI_nqp.max.all.js.map