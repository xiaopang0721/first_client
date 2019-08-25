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
/*
name 设置
    **/
var gametongyong;
(function (gametongyong) {
    var page;
    (function (page_1) {
        var SettingPage = /** @class */ (function (_super) {
            __extends(SettingPage, _super);
            function SettingPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._isNeedBlack = true;
                _this._isClickBlack = false;
                _this._asset = [
                    PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                    PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                ];
                return _this;
            }
            SettingPage.prototype.init = function () {
                this._viewUI = this.createView('game_ui.tongyong.SheZhiUI');
                this.addChild(this._viewUI);
                this._viewUI.box_app.visible = WebConfig.appVersion;
                this._viewUI.txt_appbbh.text = WebConfig.appVersion;
                this._viewUI.box_v.visible = Vesion["_defaultVesion"];
                this._viewUI.txt_bbh.text = Vesion["_defaultVesion"];
                this._viewUI.btn_clear.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_change.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_check.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                if (WebConfig.gameGmOpen) {
                    if (!this._gmTxt) {
                        this._gmTxt = new Laya.Label();
                        this._gmTxt.fontSize = 14;
                        this._gmTxt.align = "center";
                        this._gmTxt.bold = true;
                        this._gmTxt.color = "#00ff47";
                        this._gmTxt.text = "点我变魔术";
                        this._gmTxt.left = this._gmTxt.top = 20;
                        this.addChild(this._gmTxt);
                        this._gmTxt.on(LEvent.CLICK, this, this.onMouseGMHandle);
                    }
                }
                else {
                    if (this._gmTxt) {
                        this._gmTxt.removeSelf();
                        this._gmTxt.destroy();
                        this._gmTxt = null;
                    }
                }
            };
            // 页面打开时执行函数
            SettingPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.hslider0.min = 0; //设置 this.hslider0 最低位置值。
                this._viewUI.hslider0.max = 1; //设置 this.hslider0 最高位置值。
                this._viewUI.hslider0.tick = 0.1; //设置 this.hslider0 刻度值。
                this._viewUI.hslider0.value = Laya.SoundManager.soundVolume; //设置 this.hslider0 当前位置值。
                this._viewUI.hslider0.changeHandler = new Handler(this, this.onChange0); //设置 this.hslider0 位置变化处理器。
                this._viewUI.hslider1.min = 0; //设置 this.hslider0 最低位置值。
                this._viewUI.hslider1.max = 1; //设置 this.hslider0 最高位置值。
                this._viewUI.hslider1.tick = 0.1; //设置 this.hslider0 刻度值。
                this._viewUI.hslider1.value = Laya.SoundManager.musicVolume; //设置 this.hslider0 当前位置值。
                this._viewUI.hslider1.changeHandler = new Handler(this, this.onChange1); //设置 this.hslider0 位置变化处理器。
            };
            SettingPage.prototype.onChange0 = function (value) {
                // Laya.SoundManager.soundVolume = value;
                Laya.SoundManager.setSoundVolume(value);
                localSetItem("soundVolume", value.toString());
            };
            SettingPage.prototype.onChange1 = function (value) {
                Laya.SoundManager.setMusicVolume(value);
                localSetItem("musicVolume", value.toString());
            };
            SettingPage.prototype.close = function () {
                if (this._viewUI) {
                    this._viewUI.btn_check.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_clear.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    this._viewUI.btn_change.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                    WebConfig.update_appVersion = null;
                    _super.prototype.close.call(this);
                }
            };
            SettingPage.prototype.onBtnTweenEnd = function (e, target) {
                var _this = this;
                switch (target) {
                    case this._viewUI.btn_clear: //清理缓存
                        page_1.TongyongPageDef.ins.alertRecharge("清理缓存将删除本地数据对此造成的损失，本平台将不承担任何责任。为了您的虚拟财产安全,我们强烈建议您先绑定帐号信息!\n是否清除缓存？", function () {
                            localClear();
                            _this._game.showTips("清理缓存成功!");
                        }, null, false);
                        break;
                    case this._viewUI.btn_change: //切换账号
                        this.close();
                        break;
                    case this._viewUI.btn_check: //检查更新
                        this._game.checkClientVesion(true);
                        break;
                }
            };
            SettingPage.prototype.onMouseGMHandle = function () {
                var page = this._game.uiRoot.top.getPage(DatingPageDef.PAGE_GM);
                if (!page)
                    this._game.uiRoot.top.open(DatingPageDef.PAGE_GM);
            };
            return SettingPage;
        }(game.gui.base.Page));
        page_1.SettingPage = SettingPage;
    })(page = gametongyong.page || (gametongyong.page = {}));
})(gametongyong || (gametongyong = {}));
//# sourceMappingURL=SettingPage.js.map