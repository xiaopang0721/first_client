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
* 位图切片生成工具
*/
var gameddz;
(function (gameddz) {
    var ClipUtil = /** @class */ (function (_super) {
        __extends(ClipUtil, _super);
        function ClipUtil(font) {
            var _this = _super.call(this) || this;
            _this._clip = ObjectPools.malloc(ClipCell, [_this, font]);
            _this.setFont(font);
            _this.setContainer(_this);
            return _this;
        }
        ClipUtil.init = function () {
            this.MONEY_FONT2 = {
                source: DatingPath.atlas_dating_ui + "tongyong.atlas",
                url: DatingPath.ui_dating + 'tongyong/clip_money1.png',
                clipWidth: 16,
                clipHeight: 22,
                clipX: 11,
                space: 0
            };
            //加钱飘字
            this.ADD_MONEY_FONT = {
                source: PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                url: PathGameTongyong.ui_tongyong_general + 'clip_num1.png',
                clipWidth: 25,
                clipHeight: 32,
                clipX: 11,
                space: -8
            };
            //扣钱飘字
            this.SUB_MONEY_FONT = {
                source: PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                url: PathGameTongyong.ui_tongyong_general + 'clip_num.png',
                clipWidth: 25,
                clipHeight: 32,
                clipX: 11,
                space: -8
            };
            //斗地主倍数
            this.DDZ_BEISHU = {
                source: Path_game_ddz.atlas_game_ui + "doudizhu.atlas",
                url: Path_game_ddz.ui_ddz + 'clip_xq.png',
                clipWidth: 32,
                clipHeight: 36,
                clipX: 10,
                space: 0
            };
        };
        /**
         * 设置文本
         * @param str 文本
         * @param needZero 是否需要0
         * @param isTween  是否缓动
         * @param preSkin
         * @param postSkin
         */
        ClipUtil.prototype.setText = function (str, needZero, isTween, preSkin, postSkin) {
            if (needZero === void 0) { needZero = false; }
            if (isTween === void 0) { isTween = false; }
            if (preSkin === void 0) { preSkin = null; }
            if (postSkin === void 0) { postSkin = null; }
            this._clip.setText(str, needZero, isTween, preSkin, postSkin);
        };
        /**
         * 播放缓动
         * @param numStr 文本
         */
        ClipUtil.prototype.playTween = function (numStr) {
            this._clip.playTween(numStr);
        };
        /**
         * 设置字体
         * @param font 字体枚举
         */
        ClipUtil.prototype.setFont = function (font) {
            this._clip.setFont(font);
        };
        /**
         * 设置容器
         * @param font 字体枚举
         */
        ClipUtil.prototype.setContainer = function (container) {
            this._clip.setContainer(container);
        };
        /**
         * 销毁
         * @param destroyChild
         */
        ClipUtil.prototype.destroy = function (destroyChild) {
            if (this._clip) {
                ObjectPools.free(this._clip);
            }
            this._clip = null;
            _super.prototype.destroy.call(this, destroyChild);
        };
        return ClipUtil;
    }(Laya.Box));
    gameddz.ClipUtil = ClipUtil;
    var ClipCell = /** @class */ (function () {
        function ClipCell(container, font) {
            this.poolName = "ClipCell";
            //设置
            this._txtStr = "";
            this._needZero = false;
            this._isTween = false;
            this._preSkin = null;
            this._postSkin = null;
            this.setContainer(container);
            this.setFont(font);
            this._stopArray = [];
            this._clipArray = [];
        }
        /**
         * 进池 （相当于对象dispose函数）
         */
        ClipCell.prototype.intoPool = function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            this.reset();
        };
        /**
         * 出池 （相当于对象初始化函数）
         */
        ClipCell.prototype.outPool = function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            // this._container = arg[0]
            // this.setFont(arg[1])
        };
        ClipCell.prototype.setContainer = function (container) {
            this._container = container;
        };
        ClipCell.prototype.setFont = function (font) {
            if (this._curFont == font)
                return;
            this._curFont = font;
            if (font.source) {
                var refTexture = RefAsset.Get(font.source);
                refTexture.retain();
            }
            if (this._clipArray) {
                for (var _i = 0, _a = this._clipArray; _i < _a.length; _i++) {
                    var clip = _a[_i];
                    clip.destroy(true);
                }
                this._clipArray = [];
            }
        };
        ClipCell.prototype.setText = function (str, needZero, isTween, preSkin, postSkin) {
            var _this = this;
            if (needZero === void 0) { needZero = false; }
            if (isTween === void 0) { isTween = false; }
            if (preSkin === void 0) { preSkin = null; }
            if (postSkin === void 0) { postSkin = null; }
            if (this._num == str && this._needZero == needZero && this._isTween == isTween && this._preSkin == preSkin && this._postSkin == postSkin) {
                return;
            }
            this._num = str;
            Laya.timer.clearAll(this);
            str = str.toString();
            if (!this._curFont) {
                loge("Font not found!");
            }
            this._txtStr = str;
            this._needZero = needZero;
            this._isTween = isTween;
            this._preSkin = preSkin;
            this._postSkin = postSkin;
            if (!this._refTexture) {
                this._refTexture = RefAsset.Get(this._curFont.source);
                if (!this._refTexture.parseComplete) {
                    this._refTexture.once(LEvent.COMPLETE, this, function () {
                        _this.onAssetParseComplete();
                    });
                }
            }
            if (this._refTexture.parseComplete) {
                this.onAssetParseComplete();
            }
        };
        ClipCell.prototype.onAssetParseComplete = function () {
            var posX = 0;
            //前置图片
            if (this._preSkin) {
                if (!this._preImage) {
                    this._preImage = new LImage();
                    this._container.addChild(this._preImage);
                }
                this._preImage.skin = this._preSkin;
                this._preImage.x = posX;
                this._preImage.centerY = 0;
                posX += this._preImage.width + this._curFont.space;
            }
            else {
                if (this._preImage) {
                    this._preImage.destroy();
                    this._preImage = null;
                }
            }
            //清理
            for (var _i = 0, _a = this._clipArray; _i < _a.length; _i++) {
                var clip = _a[_i];
                clip.removeSelf();
            }
            if (this._txtStr && (((!this._needZero && this._txtStr > "0") || this._needZero))) {
                var len = this._txtStr.length;
                for (var i = 0; i < len; i++) {
                    var clip = this._clipArray[i];
                    var indexStr = this._txtStr.charAt(i).toString();
                    var index = (indexStr == ".") ? 10 : parseInt(indexStr);
                    if (!clip) {
                        clip = this.createClip(index);
                        this._container.addChild(clip);
                        clip.x = posX;
                        clip.y = 0;
                        this._clipArray[this._clipArray.length] = clip;
                    }
                    else {
                        clip.index = index;
                        if (!clip.parent)
                            this._container.addChild(clip);
                        clip.x = posX;
                        clip.y = 0;
                    }
                    posX += this._curFont.clipWidth + this._curFont.space;
                    clip.visible = true;
                }
                // this.isShowClip(true);
            }
            else {
                this.isShowClip(false);
            }
            //后置图片
            if (this._postSkin) {
                if (!this._postImage) {
                    this._postImage = new LImage();
                    this._container.addChild(this._postImage);
                }
                this._postImage.skin = this._postSkin;
                this._postImage.x = posX;
                this._postImage.centerY = 0;
                posX += this._postImage.width;
            }
            else {
                if (this._postImage) {
                    this._postImage.destroy();
                    this._postImage = null;
                }
            }
            this._container.size(posX, this._curFont.clipHeight);
            //需要播放滚动特效
            if (this._isTween) {
                this.playTween(this._txtStr);
            }
        };
        //是否显示
        ClipCell.prototype.isShowClip = function (isShow) {
            for (var _i = 0, _a = this._clipArray; _i < _a.length; _i++) {
                var clip = _a[_i];
                clip.visible = isShow;
            }
        };
        //滚数字表现
        ClipCell.prototype.playTween = function (numStr) {
            var _this = this;
            Laya.timer.frameLoop(1, this, this.showTween, [parseInt(numStr)]);
            var _loop_1 = function (i) {
                if (this_1._stopArray[i]) {
                    this_1._stopArray[i] = false;
                }
                else {
                    this_1._stopArray.push(false);
                }
                Laya.timer.once(500 + 500 * i, this_1, function () {
                    _this.stopTween(i);
                });
            };
            var this_1 = this;
            for (var i = 0; i < numStr.length; i++) {
                _loop_1(i);
            }
        };
        //停止滚数字
        ClipCell.prototype.stopTween = function (index) {
            this._stopArray[index] = true;
            if (index == this._num.toString().length - 1) {
                this._container.event(ClipCell.TWEEN_END);
            }
        };
        ClipCell.prototype.showTween = function (num) {
            var numStr = num.toString();
            for (var i = 0; i < numStr.length; i++) {
                var child = this._container.getChildAt(i);
                var index = child.index;
                index++;
                if (child) {
                    if (this._stopArray[i]) {
                        child.index = parseInt(numStr[i]);
                        if (i >= numStr.length - 1)
                            Laya.timer.clearAll(this);
                    }
                    else {
                        child.index = index % 10;
                    }
                }
            }
        };
        //创建位图切片
        ClipCell.prototype.createClip = function (index) {
            var clip = new laya.ui.Clip(this._curFont.url);
            clip.clipWidth = (clip.width / this._curFont.clipX) || this._curFont.clipWidth;
            clip.clipX = this._curFont.clipX;
            clip.index = index;
            this._container.addChild(clip);
            return clip;
        };
        //释放
        ClipCell.prototype.reset = function () {
            this._num = null;
            Laya.timer.clearAll(this);
            if (this._refTexture) {
                this._refTexture.offAll();
                this._refTexture.release();
                this._refTexture = null;
            }
            if (this._curFont.source) {
                this._curFont = null;
            }
            if (this._preImage) {
                this._preImage.destroy(true);
                this._preImage = null;
            }
            if (this._postImage) {
                this._postImage.destroy(true);
                this._postImage = null;
            }
            if (this._clipArray) {
                for (var _i = 0, _a = this._clipArray; _i < _a.length; _i++) {
                    var clip = _a[_i];
                    clip.destroy(true);
                }
            }
            this._clipArray = [];
            this._stopArray = [];
        };
        //滚数字结束
        ClipCell.TWEEN_END = "tween_end";
        return ClipCell;
    }());
})(gameddz || (gameddz = {}));
//# sourceMappingURL=ClipUtil.js.map