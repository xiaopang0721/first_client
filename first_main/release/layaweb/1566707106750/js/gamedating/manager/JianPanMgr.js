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
/**
* name
*/
var gamedating;
(function (gamedating) {
    var managers;
    (function (managers) {
        var JianPanMgr = /** @class */ (function (_super) {
            __extends(JianPanMgr, _super);
            function JianPanMgr(game) {
                var _this = _super.call(this, game) || this;
                //是否大写锁定
                _this._capsLock = false;
                _this._inputTxt = ""; //当前选中的文本框内容
                Laya.stage.on(LEvent.KEY_DOWN, _this, _this.onKeyDown);
                _this._code = new JianPanCode();
                return _this;
            }
            JianPanMgr.prototype.onKeyDown = function (e) {
                if (!this._inputTextUI)
                    return;
                var inputStr = this.inputTxt;
                if (e.keyCode == Laya.Keyboard.BACKSPACE) { //退格
                    if (inputStr.length > 0)
                        inputStr = inputStr.slice(0, -1);
                }
                else if (e.keyCode == Laya.Keyboard.SPACE) { //空格
                    this.closeJianPan(); //关闭键盘
                }
                else if (e.keyCode == Laya.Keyboard.CAPS_LOCK) { //大写锁定
                    this.capsLock = !this._capsLock;
                }
                else {
                    var code = this._capsLock ? this._code.KEYBOARD_BLOCK_LETTER : this._code.KEYBOARD_LOWER_CASE;
                    if (code[e.keyCode] && inputStr.length < this._inputTextUI.maxChars) {
                        inputStr += code[e.keyCode];
                    }
                }
                this.inputTxt = inputStr;
                this.event(JianPanMgr.EVENT_KEY_DOWN);
            };
            Object.defineProperty(JianPanMgr.prototype, "capsLock", {
                get: function () {
                    return this._capsLock;
                },
                set: function (b) {
                    this._capsLock = b;
                    this.event(JianPanMgr.EVENT_CAPS_LOCK);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(JianPanMgr.prototype, "inputTxt", {
                get: function () {
                    return this._inputTxt;
                },
                set: function (v) {
                    this._inputTxt = v;
                    this.event(JianPanMgr.EVENT_CHANGE);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(JianPanMgr.prototype, "inputTextUI", {
                get: function () {
                    return this._inputTextUI;
                },
                set: function (view) {
                    if (view.isPassword) {
                        this._inputTxt = view.password;
                    }
                    else {
                        this._inputTxt = view.input.text;
                    }
                    this.event(JianPanMgr.EVENT_CHANGE_TYPE, view.inputType); //键盘类型变化
                    if (view && !view.input.text)
                        view.prompt.text = "";
                    this._inputTextUI = view;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(JianPanMgr.prototype, "pageUI", {
                get: function () {
                    return this._pageUI;
                },
                set: function (viewUI) {
                    this._pageUI = viewUI;
                },
                enumerable: true,
                configurable: true
            });
            JianPanMgr.prototype.openJianPan = function (textUI, viewUI, centerY) {
                gamedating.DatingGame.ins.jianPanMgr.inputTextUI = textUI;
                if (!Browser.onPC || WebConfig.isPopJianPan) {
                    gamedating.DatingGame.ins.jianPanMgr.pageUI = viewUI;
                    gamedating.DatingGame.ins.jianPanMgr.pageUI.box.centerY = centerY;
                    this._game.uiRoot.top.open(DatingPageDef.PAGE_JIANPAN, function (page) {
                        page.dataSource = textUI.inputType;
                    }, function () {
                        if (gamedating.DatingGame.ins.jianPanMgr.pageUI && gamedating.DatingGame.ins.jianPanMgr.pageUI.box) {
                            gamedating.DatingGame.ins.jianPanMgr.pageUI.box.centerY = 20;
                        }
                    });
                }
            };
            JianPanMgr.prototype.closeJianPan = function () {
                this._game.uiRoot.top.close(DatingPageDef.PAGE_JIANPAN);
            };
            JianPanMgr.prototype.clear = function (fource) {
                if (fource)
                    _super.prototype.clear.call(this, fource);
                Laya.stage.off(LEvent.KEY_DOWN, this, this.onKeyDown);
                this._inputTxt = "";
                this._inputTextUI = null;
            };
            Object.defineProperty(JianPanMgr.prototype, "LOWER_CASE", {
                get: function () {
                    return this._code.LOWER_CASE;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(JianPanMgr.prototype, "BLOCK_LETTER", {
                get: function () {
                    return this._code.BLOCK_LETTER;
                },
                enumerable: true,
                configurable: true
            });
            JianPanMgr.EVENT_CHANGE = "JianPanMgr.changge";
            JianPanMgr.EVENT_CHANGE_TYPE = "JianPanMgr.changgeType";
            JianPanMgr.EVENT_CAPS_LOCK = "JianPanMgr.capsLock";
            JianPanMgr.EVENT_KEY_DOWN = "JianPanMgr.keyDown";
            JianPanMgr.EVENT_KEYBOARD_SHOW = "JianPanMgr.EVENT_KEYBOARD_SHOW";
            JianPanMgr.EVENT_KEYBOARD_HIDE = "JianPanMgr.EVENT_KEYBOARD_HIDE";
            JianPanMgr.TYPE_LOWER_CASE = 1; //小写字母
            JianPanMgr.TYPE_BLOCK_LETTER = 2; //大写字母
            return JianPanMgr;
        }(gamecomponent.managers.BaseMgr));
        managers.JianPanMgr = JianPanMgr;
        var JianPanCode = /** @class */ (function () {
            function JianPanCode() {
                this.KEYBOARD_0 = "0";
                this.KEYBOARD_1 = "1";
                this.KEYBOARD_2 = "2";
                this.KEYBOARD_3 = "3";
                this.KEYBOARD_4 = "4";
                this.KEYBOARD_5 = "5";
                this.KEYBOARD_6 = "6";
                this.KEYBOARD_7 = "7";
                this.KEYBOARD_8 = "8";
                this.KEYBOARD_9 = "9";
                this.KEYBOARD_a = "a";
                this.KEYBOARD_b = "b";
                this.KEYBOARD_c = "c";
                this.KEYBOARD_d = "d";
                this.KEYBOARD_e = "e";
                this.KEYBOARD_f = "f";
                this.KEYBOARD_g = "g";
                this.KEYBOARD_h = "h";
                this.KEYBOARD_i = "i";
                this.KEYBOARD_j = "j";
                this.KEYBOARD_k = "k";
                this.KEYBOARD_l = "l";
                this.KEYBOARD_m = "m";
                this.KEYBOARD_n = "n";
                this.KEYBOARD_o = "o";
                this.KEYBOARD_p = "p";
                this.KEYBOARD_q = "q";
                this.KEYBOARD_r = "r";
                this.KEYBOARD_s = "s";
                this.KEYBOARD_t = "t";
                this.KEYBOARD_u = "u";
                this.KEYBOARD_v = "v";
                this.KEYBOARD_w = "w";
                this.KEYBOARD_x = "x";
                this.KEYBOARD_y = "y";
                this.KEYBOARD_z = "z";
                this.KEYBOARD_A = "A";
                this.KEYBOARD_B = "B";
                this.KEYBOARD_C = "C";
                this.KEYBOARD_D = "D";
                this.KEYBOARD_E = "E";
                this.KEYBOARD_F = "F";
                this.KEYBOARD_G = "G";
                this.KEYBOARD_H = "H";
                this.KEYBOARD_I = "I";
                this.KEYBOARD_J = "J";
                this.KEYBOARD_K = "K";
                this.KEYBOARD_L = "L";
                this.KEYBOARD_M = "M";
                this.KEYBOARD_N = "N";
                this.KEYBOARD_O = "O";
                this.KEYBOARD_P = "P";
                this.KEYBOARD_Q = "Q";
                this.KEYBOARD_R = "R";
                this.KEYBOARD_S = "S";
                this.KEYBOARD_T = "T";
                this.KEYBOARD_U = "U";
                this.KEYBOARD_V = "V";
                this.KEYBOARD_W = "W";
                this.KEYBOARD_X = "X";
                this.KEYBOARD_Y = "Y";
                this.KEYBOARD_Z = "Z";
                this.KEYBOARD_LOWER_CASE = {
                    "48": this.KEYBOARD_0,
                    "49": this.KEYBOARD_1,
                    "50": this.KEYBOARD_2,
                    "51": this.KEYBOARD_3,
                    "52": this.KEYBOARD_4,
                    "53": this.KEYBOARD_5,
                    "54": this.KEYBOARD_6,
                    "55": this.KEYBOARD_7,
                    "56": this.KEYBOARD_8,
                    "57": this.KEYBOARD_9,
                    "96": this.KEYBOARD_0,
                    "97": this.KEYBOARD_1,
                    "98": this.KEYBOARD_2,
                    "99": this.KEYBOARD_3,
                    "100": this.KEYBOARD_4,
                    "101": this.KEYBOARD_5,
                    "102": this.KEYBOARD_6,
                    "103": this.KEYBOARD_7,
                    "104": this.KEYBOARD_8,
                    "105": this.KEYBOARD_9,
                    "65": this.KEYBOARD_a,
                    "66": this.KEYBOARD_b,
                    "67": this.KEYBOARD_c,
                    "68": this.KEYBOARD_d,
                    "69": this.KEYBOARD_e,
                    "70": this.KEYBOARD_f,
                    "71": this.KEYBOARD_g,
                    "72": this.KEYBOARD_h,
                    "73": this.KEYBOARD_i,
                    "74": this.KEYBOARD_j,
                    "75": this.KEYBOARD_k,
                    "76": this.KEYBOARD_l,
                    "77": this.KEYBOARD_m,
                    "78": this.KEYBOARD_n,
                    "79": this.KEYBOARD_o,
                    "80": this.KEYBOARD_p,
                    "81": this.KEYBOARD_q,
                    "82": this.KEYBOARD_r,
                    "83": this.KEYBOARD_s,
                    "84": this.KEYBOARD_t,
                    "85": this.KEYBOARD_u,
                    "86": this.KEYBOARD_v,
                    "87": this.KEYBOARD_w,
                    "88": this.KEYBOARD_x,
                    "89": this.KEYBOARD_y,
                    "90": this.KEYBOARD_z,
                };
                this.KEYBOARD_BLOCK_LETTER = {
                    "48": this.KEYBOARD_0,
                    "49": this.KEYBOARD_1,
                    "50": this.KEYBOARD_2,
                    "51": this.KEYBOARD_3,
                    "52": this.KEYBOARD_4,
                    "53": this.KEYBOARD_5,
                    "54": this.KEYBOARD_6,
                    "55": this.KEYBOARD_7,
                    "56": this.KEYBOARD_8,
                    "57": this.KEYBOARD_9,
                    "96": this.KEYBOARD_0,
                    "97": this.KEYBOARD_1,
                    "98": this.KEYBOARD_2,
                    "99": this.KEYBOARD_3,
                    "100": this.KEYBOARD_4,
                    "101": this.KEYBOARD_5,
                    "102": this.KEYBOARD_6,
                    "103": this.KEYBOARD_7,
                    "104": this.KEYBOARD_8,
                    "105": this.KEYBOARD_9,
                    "65": this.KEYBOARD_A,
                    "66": this.KEYBOARD_B,
                    "67": this.KEYBOARD_C,
                    "68": this.KEYBOARD_D,
                    "69": this.KEYBOARD_E,
                    "70": this.KEYBOARD_F,
                    "71": this.KEYBOARD_G,
                    "72": this.KEYBOARD_H,
                    "73": this.KEYBOARD_I,
                    "74": this.KEYBOARD_J,
                    "75": this.KEYBOARD_K,
                    "76": this.KEYBOARD_L,
                    "77": this.KEYBOARD_M,
                    "78": this.KEYBOARD_N,
                    "79": this.KEYBOARD_O,
                    "80": this.KEYBOARD_P,
                    "81": this.KEYBOARD_Q,
                    "82": this.KEYBOARD_R,
                    "83": this.KEYBOARD_S,
                    "84": this.KEYBOARD_T,
                    "85": this.KEYBOARD_U,
                    "86": this.KEYBOARD_V,
                    "87": this.KEYBOARD_W,
                    "88": this.KEYBOARD_X,
                    "89": this.KEYBOARD_Y,
                    "90": this.KEYBOARD_Z,
                };
                this.LOWER_CASE = {
                    "0": this.KEYBOARD_0,
                    "1": this.KEYBOARD_1,
                    "2": this.KEYBOARD_2,
                    "3": this.KEYBOARD_3,
                    "4": this.KEYBOARD_4,
                    "5": this.KEYBOARD_5,
                    "6": this.KEYBOARD_6,
                    "7": this.KEYBOARD_7,
                    "8": this.KEYBOARD_8,
                    "9": this.KEYBOARD_9,
                    "20": this.KEYBOARD_a,
                    "33": this.KEYBOARD_b,
                    "31": this.KEYBOARD_c,
                    "22": this.KEYBOARD_d,
                    "12": this.KEYBOARD_e,
                    "23": this.KEYBOARD_f,
                    "24": this.KEYBOARD_g,
                    "25": this.KEYBOARD_h,
                    "17": this.KEYBOARD_i,
                    "26": this.KEYBOARD_j,
                    "27": this.KEYBOARD_k,
                    "28": this.KEYBOARD_l,
                    "35": this.KEYBOARD_m,
                    "34": this.KEYBOARD_n,
                    "18": this.KEYBOARD_o,
                    "19": this.KEYBOARD_p,
                    "10": this.KEYBOARD_q,
                    "13": this.KEYBOARD_r,
                    "21": this.KEYBOARD_s,
                    "14": this.KEYBOARD_t,
                    "16": this.KEYBOARD_u,
                    "32": this.KEYBOARD_v,
                    "11": this.KEYBOARD_w,
                    "30": this.KEYBOARD_x,
                    "15": this.KEYBOARD_y,
                    "29": this.KEYBOARD_z,
                };
                this.BLOCK_LETTER = {
                    "0": this.KEYBOARD_0,
                    "1": this.KEYBOARD_1,
                    "2": this.KEYBOARD_2,
                    "3": this.KEYBOARD_3,
                    "4": this.KEYBOARD_4,
                    "5": this.KEYBOARD_5,
                    "6": this.KEYBOARD_6,
                    "7": this.KEYBOARD_7,
                    "8": this.KEYBOARD_8,
                    "9": this.KEYBOARD_9,
                    "20": this.KEYBOARD_A,
                    "33": this.KEYBOARD_B,
                    "31": this.KEYBOARD_C,
                    "22": this.KEYBOARD_D,
                    "12": this.KEYBOARD_E,
                    "23": this.KEYBOARD_F,
                    "24": this.KEYBOARD_G,
                    "25": this.KEYBOARD_H,
                    "17": this.KEYBOARD_I,
                    "26": this.KEYBOARD_J,
                    "27": this.KEYBOARD_K,
                    "28": this.KEYBOARD_L,
                    "35": this.KEYBOARD_M,
                    "34": this.KEYBOARD_N,
                    "18": this.KEYBOARD_O,
                    "19": this.KEYBOARD_P,
                    "10": this.KEYBOARD_Q,
                    "13": this.KEYBOARD_R,
                    "21": this.KEYBOARD_S,
                    "14": this.KEYBOARD_T,
                    "16": this.KEYBOARD_U,
                    "32": this.KEYBOARD_V,
                    "11": this.KEYBOARD_W,
                    "30": this.KEYBOARD_X,
                    "15": this.KEYBOARD_Y,
                    "29": this.KEYBOARD_Z,
                };
            }
            return JianPanCode;
        }());
    })(managers = gamedating.managers || (gamedating.managers = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=JianPanMgr.js.map