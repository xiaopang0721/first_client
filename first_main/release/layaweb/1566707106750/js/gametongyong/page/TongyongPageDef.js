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
* 通用
*/
var gametongyong;
(function (gametongyong) {
    var page;
    (function (page) {
        var TongyongPageDef = /** @class */ (function (_super) {
            __extends(TongyongPageDef, _super);
            function TongyongPageDef() {
                var _this = _super.call(this) || this;
                _this._game = main.game;
                return _this;
            }
            Object.defineProperty(TongyongPageDef, "GAME_NAME", {
                get: function () {
                    this.ins;
                    return "tongyong";
                },
                enumerable: true,
                configurable: true
            });
            ;
            Object.defineProperty(TongyongPageDef, "PAGE_TONGYONG_BATTER_INFO", {
                get: function () {
                    this.ins;
                    return this.GAME_NAME + "1";
                },
                enumerable: true,
                configurable: true
            });
            ;
            Object.defineProperty(TongyongPageDef, "PAGE_TONGYONG_CLOSE_TIPS", {
                get: function () {
                    this.ins;
                    return this.GAME_NAME + "2";
                },
                enumerable: true,
                configurable: true
            });
            ;
            Object.defineProperty(TongyongPageDef, "PAGE_TONGYONG_QIFU_ANI", {
                get: function () {
                    this.ins;
                    return this.GAME_NAME + "3";
                },
                enumerable: true,
                configurable: true
            });
            ;
            Object.defineProperty(TongyongPageDef, "PAGE_TONGYONG_QIFU", {
                get: function () {
                    this.ins;
                    return this.GAME_NAME + "4";
                },
                enumerable: true,
                configurable: true
            });
            ;
            Object.defineProperty(TongyongPageDef, "PAGE_TONGYONG_SETTING", {
                get: function () {
                    this.ins;
                    return this.GAME_NAME + "5";
                },
                enumerable: true,
                configurable: true
            });
            ;
            Object.defineProperty(TongyongPageDef, "PAGE_TONGYONG_RECORD", {
                get: function () {
                    this.ins;
                    return this.GAME_NAME + "6";
                },
                enumerable: true,
                configurable: true
            });
            ;
            Object.defineProperty(TongyongPageDef, "PAGE_TONGYONG_TIPS", {
                get: function () {
                    this.ins;
                    return this.GAME_NAME + "7";
                },
                enumerable: true,
                configurable: true
            });
            ;
            Object.defineProperty(TongyongPageDef, "PAGE_TONGYONG_MATCH", {
                get: function () {
                    this.ins;
                    return this.GAME_NAME + "8";
                },
                enumerable: true,
                configurable: true
            });
            ;
            Object.defineProperty(TongyongPageDef, "PAGE_TONGYONG_SETTLE", {
                get: function () {
                    this.ins;
                    return this.GAME_NAME + "9";
                },
                enumerable: true,
                configurable: true
            });
            ;
            Object.defineProperty(TongyongPageDef, "ins", {
                get: function () {
                    if (!this._ins) {
                        this._ins = new TongyongPageDef();
                        this.myinit(this.GAME_NAME);
                    }
                    return this._ins;
                },
                enumerable: true,
                configurable: true
            });
            TongyongPageDef.myinit = function (str) {
                _super.myinit.call(this, str);
                if (WebConfig.baseplatform == PageDef.BASE_PLATFORM_TYPE_NQP) {
                    View.regViewRuntime("ui.nqp.game_ui.tongyong.HudUI", page.TongyongHudNqpPage);
                }
                else {
                    View.regViewRuntime("ui.game_ui.tongyong.HudUI", page.TongyongHudPage);
                }
                PageDef._pageClassMap[this.PAGE_TONGYONG_RECORD] = page.RecordPage;
                PageDef._pageClassMap[this.PAGE_TONGYONG_BATTER_INFO] = page.PaiJuInfoPage;
                PageDef._pageClassMap[this.PAGE_TONGYONG_CLOSE_TIPS] = page.CloseTipsPage;
                PageDef._pageClassMap[this.PAGE_TONGYONG_QIFU_ANI] = page.QiFuPlayAniPage;
                PageDef._pageClassMap[this.PAGE_TONGYONG_QIFU] = page.QiFuPage;
                PageDef._pageClassMap[this.PAGE_TONGYONG_SETTING] = page.SettingPage;
                PageDef._pageClassMap[this.PAGE_TONGYONG_TIPS] = page.TipsPage;
                PageDef._pageClassMap[this.PAGE_TONGYONG_MATCH] = page.MatchPage;
                PageDef._pageClassMap[this.PAGE_TONGYONG_SETTLE] = page.SettlePage;
            };
            /**
             * 退出弹窗提示
             * @param ecb 确定
             * @param ccb 取消
             * @param gameId 游戏id
             */
            TongyongPageDef.prototype.alertClose = function (gameId, caller, ecb, ccb) {
                this._game.uiRoot.top.close(TongyongPageDef.PAGE_TONGYONG_CLOSE_TIPS);
                this._game.uiRoot.top.open(TongyongPageDef.PAGE_TONGYONG_CLOSE_TIPS, function (tip) {
                    if (ccb) {
                        tip.setInfo(gameId, Handler.create(caller, ecb), Handler.create(caller, ccb));
                    }
                    else {
                        tip.setInfo(gameId, Handler.create(caller, ecb));
                    }
                });
            };
            /**
             * 弹窗提示
             * @param str  字符串
             * @param ecb 确定
             * @param ccb 取消
             * @param isOnlyOK  是否只有一个按钮 =》确定
             * @param okSkin 确定的皮肤
             */
            TongyongPageDef.prototype.alertRecharge = function (str, ecb, ccb, isOnlyOK, okSkin, cancleSkin) {
                if (ecb === void 0) { ecb = null; }
                if (ccb === void 0) { ccb = null; }
                if (isOnlyOK === void 0) { isOnlyOK = true; }
                this._game.uiRoot.top.close(TongyongPageDef.PAGE_TONGYONG_TIPS);
                this._game.uiRoot.top.open(TongyongPageDef.PAGE_TONGYONG_TIPS, function (tip) {
                    tip.isOnlyOK = isOnlyOK;
                    tip.setInfo(str, ecb, ccb, okSkin);
                });
            };
            return TongyongPageDef;
        }(game.gui.page.PageDef));
        page.TongyongPageDef = TongyongPageDef;
    })(page = gametongyong.page || (gametongyong.page = {}));
})(gametongyong || (gametongyong = {}));
//# sourceMappingURL=TongyongPageDef.js.map