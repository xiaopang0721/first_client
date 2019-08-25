/**
 * 小红点检测管理器
*/
var gamedating;
(function (gamedating) {
    var managers;
    (function (managers) {
        var RedPointCheckMgr = /** @class */ (function () {
            function RedPointCheckMgr(v) {
                this._game = v;
                this._url = DatingPath.ui_dating_tongyong + "tu_hd.png";
                this._checkInfos = [];
                this._offsetTime = this._nextIndex = 0;
            }
            /**
             * 添加检测数据
             * @param page 父级面板(当面板关闭时，移除检测)
             * @param parent 父级容器
             * @param caller 执行域
             * @param checkFun 检测函数
             * @param cPos 小气泡中心位置:默认parent右上角(parent.width-5, 5)
             * @param checkTime 检测间隔时间
             * @param checkView 指定检测的红点对象
             * @param args    检测函数的参数
             */
            RedPointCheckMgr.prototype.addCheckInfo = function (page, parent, caller, checkFun, cPos, checkTime, checkView, args, scale, url) {
                if (cPos === void 0) { cPos = null; }
                if (checkTime === void 0) { checkTime = 1; }
                if (checkView === void 0) { checkView = null; }
                if (scale === void 0) { scale = 1; }
                cPos = cPos || new Point(parent.width, -20);
                var info;
                for (var i = 0; i < this._checkInfos.length; i++) {
                    info = this._checkInfos[i];
                    if (info.checkFun == checkFun && info.parent == parent && info.cPos.x == cPos.x && info.cPos.y == cPos.y) { //已存在
                        logd("addCheckInfo", "该检测数据已存在");
                        return info.index;
                    }
                }
                info = new RedPointCheckInfo();
                info.index = this._nextIndex;
                info.caller = caller;
                info.checkFun = checkFun;
                info.parent = parent;
                info.checkTime = checkTime;
                info.cPos = cPos;
                info.scale = scale;
                info.page = page;
                info.checkView = checkView;
                info.args = args;
                info.url = url;
                info.imgPoint = new LImage();
                this._checkInfos[this._checkInfos.length] = info;
                this._nextIndex++;
                return info.index;
            };
            /**通过index获得对象 */
            RedPointCheckMgr.prototype.getInfoByIndex = function (index) {
                for (var i = 0; i < this._checkInfos.length; i++) {
                    if (this._checkInfos[i].index != index)
                        continue;
                    return this._checkInfos[i];
                }
                return null;
            };
            /**立即检测指定对象*/
            RedPointCheckMgr.prototype.checkTargetNow = function (index) {
                for (var i = 0; i < this._checkInfos.length; i++) {
                    if (this._checkInfos[i].index != index)
                        continue;
                    this._checkInfos[i].curTime = 0;
                    this.checkSingleInfo(this._checkInfos[i]);
                    break;
                }
            };
            RedPointCheckMgr.prototype.update = function (diff) {
                if (this._offsetTime > 0) {
                    this._offsetTime -= diff;
                    return;
                }
                this._offsetTime = RedPointCheckMgr.MIN_CHECKTIME;
                if (!this._checkInfos.length)
                    return;
                var len = this._checkInfos.length;
                for (var i = 0; i < len; i++) {
                    this.checkSingleInfo(this._checkInfos[i]);
                    if (len != this._checkInfos.length) {
                        len = this._checkInfos.length;
                        i--;
                    }
                }
            };
            RedPointCheckMgr.prototype.clear = function () {
            };
            /*检测单一对象*/
            RedPointCheckMgr.prototype.checkSingleInfo = function (info) {
                if (!info)
                    return;
                if (info.page && !info.page.isOpened) {
                    this.removeCheckInfo(info.index);
                    return;
                }
                if (!info.parent.parent || !info.parent.visible) { //对象看不见
                    if (info.imgPoint)
                        info.imgPoint.removeSelf();
                    info.curTime = 0;
                    return;
                }
                info.curTime--;
                if (info.curTime > 0)
                    return; //检测时间未到
                info.curTime = info.checkTime;
                if (info.caller == null || info.checkFun == null)
                    return;
                var handler = Handler.create(info.caller, info.checkFun, info.args);
                if (!handler.runWith(info.parent)) { //检测条件不足
                    if (info.imgPoint)
                        info.imgPoint.removeSelf();
                    return;
                }
                if (!info.imgPoint) {
                    if (!info.checkView) { //默认红点图片
                        var skin = info.url ? info.url : this._url;
                        info.imgPoint = new LImage(skin);
                        info.imgPoint.mouseEnabled = false;
                        info.imgPoint.x = info.cPos.x - 10;
                        info.imgPoint.y = info.cPos.y + 10;
                        // if (!info.url)
                        // 	this.playTween1(info.imgPoint);
                    }
                    else {
                        info.imgPoint = new info.checkView();
                        info.imgPoint.x = info.cPos.x;
                        info.imgPoint.y = info.cPos.y;
                        if (info.imgPoint.hasOwnProperty("ani1"))
                            info.imgPoint.ani1.play(0, true);
                    }
                    info.imgPoint.scale(info.scale, info.scale);
                }
                if (!info.imgPoint.parent)
                    info.parent.addChild(info.imgPoint);
            };
            RedPointCheckMgr.prototype.playTween1 = function (img) {
                var diffX = 13 * img.scaleX;
                var diffY = 1 * img.scaleY;
                Laya.Tween.clearAll(img);
                Laya.Tween.to(img, { x: img.x + diffX, y: img.y + diffY, rotation: 15 }, 150, null, Handler.create(this, this.playTween2, [img], false));
            };
            RedPointCheckMgr.prototype.playTween2 = function (img) {
                var diffX = -13 * img.scaleX;
                var diffY = -1 * img.scaleY;
                Laya.Tween.clearAll(img);
                Laya.Tween.to(img, { x: img.x + diffX, y: img.y + diffY, rotation: 0 }, 150, null, Handler.create(this, this.playTween1, [img], false));
            };
            /*移除检测数量*/
            RedPointCheckMgr.prototype.removeCheckInfo = function (index) {
                var info;
                for (var i = 0; i < this._checkInfos.length; i++) {
                    if (this._checkInfos[i].index != index)
                        continue;
                    info = this._checkInfos[i];
                    if (!info.imgPoint)
                        continue;
                    Laya.Tween.clearAll(info.imgPoint);
                    info.imgPoint.removeSelf();
                    info.imgPoint = null;
                    this._checkInfos.splice(i, 1);
                    break;
                }
            };
            RedPointCheckMgr.MIN_CHECKTIME = 1000; //最小检测时间间隔(毫秒)
            return RedPointCheckMgr;
        }());
        managers.RedPointCheckMgr = RedPointCheckMgr;
        /**检测数据结构*/
        var RedPointCheckInfo = /** @class */ (function () {
            function RedPointCheckInfo() {
                this.scale = 1; //小红点缩放
            }
            return RedPointCheckInfo;
        }());
        managers.RedPointCheckInfo = RedPointCheckInfo;
    })(managers = gamedating.managers || (gamedating.managers = {}));
})(gamedating || (gamedating = {}));
//# sourceMappingURL=RedPointCheckMgr.js.map