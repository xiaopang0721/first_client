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
* 输入文本组件
*/
var gamedating;
(function (gamedating) {
    var page;
    (function (page) {
        var MyTextInput = /** @class */ (function (_super) {
            __extends(MyTextInput, _super);
            function MyTextInput() {
                return _super.call(this) || this;
            }
            Object.defineProperty(MyTextInput.prototype, "maxChars", {
                get: function () {
                    return this._maxChars;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MyTextInput.prototype, "password", {
                get: function () {
                    return this._password;
                },
                set: function (v) {
                    this._password = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MyTextInput.prototype, "isPassword", {
                get: function () {
                    return this._isPassword;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MyTextInput.prototype, "inputType", {
                get: function () {
                    return this._inputType;
                },
                enumerable: true,
                configurable: true
            });
            /**
            *
            * @param promptColor 提示符颜色
            * @param promptText 提示符内容
            * @param inputColor 文本颜色
            * @param fontSize 字体大小
            * @param maxChars 最大字符数
            * @param inputType 文本类型
            * @param isPassword 是否显示为密码字符
            */
            MyTextInput.prototype.settext = function (game, promptColor, promptText, inputColor, fontSize, maxChars, inputType, isPassword) {
                this.prompt.color = promptColor;
                this.prompt.text = promptText;
                this.prompt.fontSize = fontSize;
                this._prompt = promptText;
                this.input.color = inputColor;
                this.input.fontSize = fontSize;
                this._maxChars = maxChars;
                this._inputType = inputType;
                this._isPassword = isPassword;
                this._game = game;
                gamedating.DatingGame.ins.jianPanMgr.on(JianPanMgr.EVENT_CHANGE, this, this.onUpdateInput);
                gamedating.DatingGame.ins.jianPanMgr.on(JianPanMgr.EVENT_CHANGE_TYPE, this, this.onInputChange);
                this.initInput();
            };
            MyTextInput.prototype.initInput = function () {
                if (!this.input.text) {
                    this.prompt.text = this._prompt;
                    if (this._isPassword) {
                        this._password = "";
                    }
                }
                else {
                    this.prompt.text = "";
                    if (this._isPassword) {
                        this._password = this.input.text;
                        var keyStr = "";
                        for (var i = 0; i < this.input.text.length; i++) {
                            keyStr += "●";
                        }
                        this.input.text = keyStr;
                    }
                }
            };
            MyTextInput.prototype.onInputChange = function () {
                if (!this.input.text) {
                    this.prompt.text = this._prompt;
                }
            };
            MyTextInput.prototype.onUpdateInput = function () {
                if (this != gamedating.DatingGame.ins.jianPanMgr.inputTextUI) {
                    return;
                }
                if (!gamedating.DatingGame.ins.jianPanMgr.inputTxt) {
                    this.prompt.text = this._prompt;
                    this.input.text = gamedating.DatingGame.ins.jianPanMgr.inputTxt;
                    this._password = gamedating.DatingGame.ins.jianPanMgr.inputTxt;
                }
                else {
                    this.prompt.text = "";
                    if (this.isPassword) { //是否密码类型
                        this._password = gamedating.DatingGame.ins.jianPanMgr.inputTxt;
                        var keyStr = "";
                        for (var i = 0; i < gamedating.DatingGame.ins.jianPanMgr.inputTxt.length; i++) {
                            keyStr += "●";
                        }
                        this.input.text = keyStr;
                    }
                    else {
                        this.input.text = gamedating.DatingGame.ins.jianPanMgr.inputTxt;
                    }
                }
            };
            MyTextInput.prototype.clearInput = function () {
                this.input.text = "";
                this._password = "";
                this.prompt.text = this._prompt;
            };
            MyTextInput.prototype.destroy = function () {
                if (this._game) {
                    gamedating.DatingGame.ins.jianPanMgr.off(JianPanMgr.EVENT_CHANGE, this, this.onUpdateInput);
                    gamedating.DatingGame.ins.jianPanMgr.off(JianPanMgr.EVENT_CHANGE_TYPE, this, this.onInputChange);
                }
                _super.prototype.destroy.call(this);
            };
            MyTextInput.TYPE_INPUT_NUMBER = 1; //纯数字类型
            MyTextInput.TYPE_INPUT_ENGLISH = 2; //英文类型
            return MyTextInput;
        }(ui.dating.component.TextInputUI));
        page.MyTextInput = MyTextInput;
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=MyTextInput.js.map