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
* 按钮放大变小工厂类
*/
var utils;
(function (utils) {
    var ScaleEffectFactory = /** @class */ (function (_super) {
        __extends(ScaleEffectFactory, _super);
        function ScaleEffectFactory() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._list = [];
            _this._listSelf = [];
            return _this;
        }
        ScaleEffectFactory.prototype.add = function (v) {
            var index = this._list.indexOf(v);
            if (index != -1)
                return;
            this._list.push(v);
            this._listSelf.push(new ScaleEffect(v));
        };
        ScaleEffectFactory.prototype.remove = function (v) {
            var index = this._list.indexOf(v);
            if (index == -1)
                return;
            this.removeClear(index);
        };
        ScaleEffectFactory.prototype.removeClear = function (index) {
            this._list.splice(index, 1);
            if (this._listSelf[index]) {
                this._listSelf[index].destroy();
                this._listSelf[index] = null;
            }
            this._listSelf.splice(index, 1);
        };
        ScaleEffectFactory.prototype.clear = function (fource) {
            if (fource)
                _super.prototype.clear.call(this, fource);
            for (var index = 0; index < this._list.length; index++) {
                this.removeClear(index);
            }
            this._list.length = 0;
            this._listSelf.length = 0;
        };
        ScaleEffectFactory.prototype.update = function (diff) {
            for (var index = 0; index < this._list.length; index++) {
                var node = this._list[index];
                if (!node || !node.parent || !node.stage) {
                    this.removeClear(index);
                }
            }
        };
        return ScaleEffectFactory;
    }(gamecomponent.managers.BaseMgr));
    utils.ScaleEffectFactory = ScaleEffectFactory;
    var ScaleEffect = /** @class */ (function () {
        function ScaleEffect(node) {
            //下次时间间隔
            this._nextTime = 120000;
            this._node = node;
            this.playFenXiangTween();
        }
        //开始播放
        ScaleEffect.prototype.playFenXiangTween = function (isTween) {
            var _this = this;
            if (!this._img) {
                this._img = new Laya.Image(this._node.skin);
                this._img.mouseEnabled = false;
                this._img.anchorX = this._node.anchorX;
                this._img.anchorY = this._node.anchorY;
                this._img.x = this._node.x;
                this._img.y = this._node.y;
                this._node.parent.addChild(this._img);
                this._delayFn = function () {
                    _this._img.visible = true;
                };
            }
            else {
                this._img.x = this._node.x;
                this._img.y = this._node.y;
                this._img.visible = false;
            }
            this._img.scaleX = 1;
            this._img.scaleY = 1;
            this._img.alpha = 1;
            Laya.Tween.to(this._img, { scaleY: 1.5, scaleX: 1.5, alpha: 0 }, 1000, Laya.Ease.linearNone, Handler.create(this, this.playFenXiangTween, [true]), (isTween ? this._nextTime : 0));
            isTween && Laya.timer.once(this._nextTime, this, this._delayFn);
        };
        //停止分享动画
        ScaleEffect.prototype.stopFenXiangAni = function () {
            if (this._img) {
                Laya.Tween.clearAll(this._img);
                Laya.timer.clear(this, this._delayFn);
                this._img.removeSelf();
                this._img.destroy();
                this._img = null;
                this._delayFn = null;
            }
        };
        ScaleEffect.prototype.destroy = function () {
            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this);
            this.stopFenXiangAni();
        };
        return ScaleEffect;
    }());
})(utils || (utils = {}));
//# sourceMappingURL=ScaleEffectFactory.js.map