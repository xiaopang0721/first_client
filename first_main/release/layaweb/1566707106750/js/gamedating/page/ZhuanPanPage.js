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
* name 转盘
*/
var gamedating;
(function (gamedating) {
    var page;
    (function (page_1) {
        var ZhuanPanPage = /** @class */ (function (_super) {
            __extends(ZhuanPanPage, _super);
            function ZhuanPanPage(v, onOpenFunc, onCloseFunc) {
                var _this = _super.call(this, v, onOpenFunc, onCloseFunc) || this;
                _this._totalTime = 0;
                _this._times = [1.5, 1.5, 1.5];
                _this._rotations = [30 * 20, 30 * 40, 30 * 20];
                _this._index = 0;
                _this._lastRotation = 0;
                _this._asset = [
                    DatingPath.atlas_dating_ui + "zhuanpan.atlas",
                ];
                _this._isNeedDuang = false;
                return _this;
            }
            // 页面初始化函数
            ZhuanPanPage.prototype.init = function () {
                this._viewUI = this.createView("dating.ZhuanPanUI");
                this.addChild(this._viewUI);
                this._viewUI.list.renderHandler = new Handler(this, this.renderHandler);
                this._viewUI.list.dataSource = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                this._viewUI.list.visible = false;
                this._viewUI.img_after.alpha = 0;
                if (!this._clipJf) {
                    this._clipJf = new DatingClip(DatingClip.LUNPAN_FONT);
                    this._clipJf.x = this._viewUI.clip.x;
                    this._clipJf.y = this._viewUI.clip.y;
                    this._viewUI.clip.parent.addChild(this._clipJf);
                    this._viewUI.clip.removeSelf();
                }
            };
            ZhuanPanPage.prototype.renderHandler = function (cell, index) {
                if (cell) {
                    cell.txt_num.text = cell.dataSource.award_value;
                    cell.img_reward.skin = StringU.substitute(DatingPath.ui_dating_tongyong + "{0}.png", cell.dataSource.icon || "jb_4");
                    cell.txt_num.visible = true;
                    cell.img_reward.visible = true;
                    cell.visible = cell.dataSource != 0;
                }
            };
            // 页面打开时执行函数
            ZhuanPanPage.prototype.onOpen = function () {
                _super.prototype.onOpen.call(this);
                this._viewUI.btn_bylp.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_hjlp.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_lprecord.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_help.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_go.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.tab.selectHandler = new Handler(this, this.tabselectHandler);
                this._viewUI.tab.selectedIndex = 0;
                this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this._game.network.call_get_turntableinfo();
                this._game.network.call_get_turntablecfg();
            };
            ZhuanPanPage.prototype.onSucessHandler = function (data) {
                if (data.code == Web_operation_fields.CLIENT_IRCODE_TURNTABLECFG) { //获取转盘配置
                    if (data && data.success == 0) {
                        this._turnConfig = data.msg.list;
                        this.updateTurnConfig();
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_TURNTABLEINFO) { //获取玩家当前积分余额信息
                    if (data && data.success == 0) {
                        this._total_turn_point = data.msg.total_turn_point;
                        this._clipJf.setText(data.msg.total_turn_point, true);
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_TURNTABLE) { //积分抽奖
                    if (data && data.success == 0) {
                        var selectedIndex = this._viewUI.tab.selectedIndex;
                        var dd = this._turnConfig[selectedIndex];
                        var id = data.msg.id;
                        this._award_value = data.msg.award_value;
                        this._total_turn_point = data.msg.total_turn_point;
                        this._clipJf.setText(data.msg.total_turn_point, true);
                        if (dd.config) {
                            for (var index = 0; index < dd.config.length; index++) {
                                var cc = dd.config[index];
                                if (cc.id == id) {
                                    this._finalIndex = index;
                                    break;
                                }
                            }
                        }
                        logd("位置", this._finalIndex);
                        var finalIndex = 12 - this._finalIndex;
                        this._viewUI.img_after.alpha = 0;
                        this._viewUI.img_after.rotation = -finalIndex * 30 + 360;
                        this._times = [1, 0.8, 0.6, 0.5, 0.6, 0.8, 1, 1.2 + 1.2 / 360 * finalIndex * 30];
                        this._rotations = [30 * 12, 30 * 12, 30 * 12, 30 * 12, 30 * 12, 30 * 12, 30 * 12, 30 * 12 + finalIndex * 30];
                        this._viewUI.box_run.rotation = 0;
                        this._isRun = true;
                        this._game.playSound(Path.music_zhuanpan);
                    }
                }
                else if (data.code == Web_operation_fields.CLIENT_IRCODE_TURNTABLELIST) { //积分抽奖获奖记录
                    if (data && data.success == 0) {
                    }
                }
            };
            ZhuanPanPage.prototype.updateTurnConfig = function () {
                if (!this._turnConfig)
                    return;
                var index = this._viewUI.tab.selectedIndex;
                var data = this._turnConfig[index];
                if (data) {
                    this._viewUI.list.dataSource = data.config;
                }
                this._viewUI.list.visible = data && data.config && data.config.length > 0;
                this._viewUI.img_quan.skin = StringU.substitute(DatingPath.ui_dating + "zhuanpan/tu_zp{0}.png", index + 1);
                this._viewUI.img_zhen.skin = StringU.substitute(DatingPath.ui_dating + "zhuanpan/tu_zpjt{0}.png", index + 1);
                this._viewUI.btn_go.skin = StringU.substitute(DatingPath.ui_dating + "zhuanpan/btn_zp{0}.png", index + 1);
                this._viewUI.txt_cost.text = data.turn_point;
                // this._viewUI.box_run.rotation = Math.floor(MathU.randomRange(30, 330) / 30) * 30;
            };
            ZhuanPanPage.prototype.tabselectHandler = function (index) {
                this.updateTurnConfig();
            };
            ZhuanPanPage.prototype.onBtnTweenEnd = function (e, target) {
                switch (target) {
                    case this._viewUI.btn_bylp: //白银轮盘
                        break;
                    case this._viewUI.btn_hjlp: //黄金轮盘
                        break;
                    case this._viewUI.btn_lprecord: //轮盘记录
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_ZHUANPAN_RECORD);
                        break;
                    case this._viewUI.btn_go: //开始
                        if (this._isRun || !this._turnConfig || this._turnConfig.length != 2) {
                            return;
                        }
                        var index = this._viewUI.tab.selectedIndex;
                        var data_1 = this._turnConfig[index];
                        if (data_1.turn_point > this._total_turn_point) {
                            this._game.showTips("积分暂时不够哦，赶紧游戏吧！");
                            return;
                        }
                        this._viewUI.btn_bylp.disabled = index == 1;
                        this._viewUI.btn_hjlp.disabled = index == 0;
                        this._viewUI.btn_go.disabled = true;
                        this._game.network.call_turntable(data_1.type_id);
                        break;
                    case this._viewUI.btn_help: //帮助
                        this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_ZHUANPAN_HELP);
                        break;
                }
            };
            ZhuanPanPage.prototype.update = function (diff) {
                var _this = this;
                if (!this._isRun)
                    return;
                if (!this._turnConfig)
                    return;
                var time = this._times[this._index];
                var endRotation = this._rotations[this._index];
                this._totalTime += (diff * .001);
                var t = this._totalTime / time;
                if (t >= 1) {
                    this._totalTime = 0;
                    this._lastRotation = this._rotations[this._index];
                    this._index++;
                    if (this._times.length <= this._index) {
                        this._game.stopSound(Path.music_zhuanpan);
                        this._isRun = false;
                        this._index = 0;
                        this._lastRotation = 0;
                        this._viewUI.btn_bylp.disabled = false;
                        this._viewUI.btn_hjlp.disabled = false;
                        this._viewUI.btn_go.disabled = false;
                        this._viewUI.img_after.alpha = 1;
                        var endRotion = this._viewUI.img_after.rotation + 360;
                        Laya.Tween.to(this._viewUI.img_after, { rotation: endRotion }, 500, Laya.Ease.linearNone, Handler.create(this, function () {
                            Laya.Tween.to(_this._viewUI.img_after, { alpha: 0 }, 500);
                        }));
                        logd("角度", endRotation % 360);
                        Laya.timer.once(1000, this, function () {
                            _this._game.uiRoot.general.open(page_1.DatingPageDef.PAGE_GET_REWARD, function (page) {
                                var icon = _this._turnConfig[_this._viewUI.tab.selectedIndex].config[_this._finalIndex].icon;
                                var skin = StringU.substitute(DatingPath.ui_dating_tongyong + "{0}.png", icon);
                                page.setData(_this._award_value, skin);
                            });
                        });
                    }
                    this._rotations[this._index] += this._lastRotation;
                }
                this._viewUI.box_run.rotation = MathU.lerp(this._lastRotation, endRotation, t);
            };
            ZhuanPanPage.prototype.close = function () {
                if (this._viewUI) {
                    this._game.stopSound(Path.music_zhuanpan);
                    this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                    if (this._clipJf) {
                        this._clipJf.removeSelf();
                        this._clipJf.destroy();
                        this._clipJf = null;
                    }
                }
                _super.prototype.close.call(this);
            };
            return ZhuanPanPage;
        }(game.gui.base.Page));
        page_1.ZhuanPanPage = ZhuanPanPage;
    })(page = gamedating.page || (gamedating.page = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=ZhuanPanPage.js.map