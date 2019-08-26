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
* 奔驰宝马
*/
var gamebenchibaoma;
(function (gamebenchibaoma) {
    var page;
    (function (page) {
        var BCBM_CURVES = [
            // [400,92, 489,89, 538,117, 598,171, 636,171, 676,173, 740,117, 786,89, 884,92, ],
            [400, 92, 642, 92, 884, 92],
            [884, 92, 1050, 112, 1060, 291, 1050, 464, 884, 486],
            [884, 486, 642, 486, 400, 486],
            [400, 486, 226, 473, 206, 297, 219, 114, 400, 92]
        ];
        var BCBM_CURVES_PARAM = [
            // [6, 4],
            [6, 1],
            [15, 3],
            [6, 1],
            [15, 3]
        ];
        var BcbmCarPage = /** @class */ (function (_super) {
            __extends(BcbmCarPage, _super);
            function BcbmCarPage(game, view) {
                var _this = _super.call(this) || this;
                _this._totalNum = 0;
                _this._curIndex = 0;
                _this._isFirst = false;
                _this._isEnd = false;
                _this._curTotalTime = 0;
                _this._onePer = 0;
                _this._game = game;
                BcbmCarPage.initBcbmPoint();
                if (BcbmCarPage.BCBM_IS_DRAW) {
                    BcbmCarPage.DrawPoint(view.box_small_car.parent.graphics);
                }
                // BcbmCarPage.LogAngle();
                _this._points = BcbmCarPage.BCBM_ALL_POINTS;
                _this._angles = BcbmCarPage.BCBM_ALL_ANGLES;
                _this._totalNum = _this._points.length;
                _this._boxCar = view.box_small_car;
                ;
                _this._uiDeng = view.ui_small_car;
                _this._uiDeng.ani1.gotoAndStop(1);
                _this._uiDeng.visible = false;
                _this._boxCar.x = BcbmCarPage.BCBM_ALL_POINTS[0][0].x;
                _this._boxCar.y = BcbmCarPage.BCBM_ALL_POINTS[0][0].y;
                _this._boxCar.rotation = BcbmCarPage.BCBM_ALL_ANGLES[0][1] - 180;
                return _this;
            }
            BcbmCarPage.initBcbmPoint = function () {
                if (this.BCBM_IS_INIT_POINT)
                    return;
                for (var i = 0; i < BCBM_CURVES.length; i++) {
                    var curves = BCBM_CURVES[i];
                    var params = BCBM_CURVES_PARAM[i];
                    var ppp = Laya.Bezier.I.getBezierPoints(curves, params[0]);
                    if (params[0] != 9) {
                        var relen = Math.floor(curves.length / 4);
                        for (var j = relen; j > 0; j--) {
                            ppp.splice((params[0] + 1) * j * 2 - 2, 2);
                        }
                    }
                    var zulen = 2 * params[1];
                    var zu = ppp.length / zulen;
                    if (ppp.length % zulen != 0) {
                        throw ("BcbmCarPage.initBcbmPoint error--index:" + i);
                    }
                    for (var k = 0; k < zu; k++) {
                        var arr = [];
                        for (var j = 0; j < params[1]; j++) {
                            var idx = zulen * k + j * 2;
                            arr.push(new Vector2(ppp[idx], ppp[idx + 1]));
                        }
                        this.BCBM_ALL_POINTS.push(arr);
                    }
                }
                if (this.BCBM_ALL_POINTS.length < 3) {
                    throw ("BcbmCarPage.initBcbmPoint error--points length:" + this.BCBM_ALL_POINTS.length);
                }
                //每组头尾相连
                for (var i = 0; i < this.BCBM_ALL_POINTS.length; i++) {
                    var arr = this.BCBM_ALL_POINTS[i];
                    var nextArr = void 0;
                    if (i >= this.BCBM_ALL_POINTS.length - 1) {
                        //最后一组
                        nextArr = this.BCBM_ALL_POINTS[0];
                    }
                    else {
                        nextArr = this.BCBM_ALL_POINTS[i + 1];
                    }
                    arr.push(nextArr[0]);
                }
                //算下角度
                for (var i = 0; i < this.BCBM_ALL_POINTS.length; i++) {
                    var arr = this.BCBM_ALL_POINTS[i];
                    var arrAng = [];
                    arrAng.push(0);
                    for (var j = 0; j < arr.length - 1; j++) {
                        var point1 = arr[j];
                        var point2 = arr[j + 1];
                        var angle = Math.atan2(point2.y - point1.y, point2.x - point1.x);
                        angle = angle * 180 / Math.PI;
                        arrAng.push(angle);
                    }
                    this.BCBM_ALL_ANGLES.push(arrAng);
                }
                for (var i = 0; i < this.BCBM_ALL_ANGLES.length; i++) {
                    var arr = this.BCBM_ALL_ANGLES[i];
                    var lastArr = void 0;
                    if (i == 0) {
                        lastArr = this.BCBM_ALL_ANGLES[this.BCBM_ALL_ANGLES.length - 1];
                    }
                    else {
                        lastArr = this.BCBM_ALL_ANGLES[i - 1];
                    }
                    arr[0] = lastArr[lastArr.length - 1];
                }
                this.BCBM_IS_INIT_POINT = true;
            };
            BcbmCarPage.DrawPoint = function (gra) {
                if (!gra)
                    return;
                for (var i = 0; i < BCBM_CURVES.length; i++) {
                    var fillColor = i % 2 == 0 ? "#ff0000" : "#0000ff";
                    var arr = BCBM_CURVES[i];
                    for (var j = 0; j < arr.length; j += 2) {
                        gra.drawCircle(arr[j], arr[j + 1], 8, fillColor);
                    }
                }
                for (var i = 0; i < this.BCBM_ALL_POINTS.length; i++) {
                    var fillColor = i % 2 == 0 ? "#00fff4" : "#c100ff";
                    var arr = this.BCBM_ALL_POINTS[i];
                    for (var j = 0; j < arr.length - 1; j++) {
                        gra.drawCircle(arr[j].x, arr[j].y, j == 0 ? 6 : 4, j == 0 ? "#00ff00" : fillColor);
                    }
                }
            };
            //打印角度
            BcbmCarPage.LogAngle = function () {
                for (var i = 0; i < this.BCBM_ALL_ANGLES.length; i++) {
                    console.log("BcbmCarPage--angle index:" + i);
                    var arr = this.BCBM_ALL_ANGLES[i];
                    for (var j = 0; j < arr.length; j++) {
                        console.log("BcbmCarPage--angle：" + arr[j]);
                    }
                }
            };
            BcbmCarPage.prototype.onDataChange = function (index, curTime, time, isStart, isEnd) {
                if (isStart === void 0) { isStart = false; }
                if (isEnd === void 0) { isEnd = false; }
                this._curIndex = index % this._points.length;
                this._isFirst = index == 0;
                this._isEnd = isEnd;
                this._curTotalTime = time;
                this._curPoints = this._points[this._curIndex];
                this._onePer = 1 / (this._curPoints.length - 1);
                this._targetAngle = this._angles[this._curIndex];
                this._uiDeng.visible = isEnd;
                if (isEnd) {
                    this._uiDeng.ani1.play(1, true);
                }
                else {
                    this._uiDeng.ani1.gotoAndStop(1);
                }
                this.updateCar(curTime);
            };
            BcbmCarPage.prototype.updateCar = function (time) {
                if (!this._curPoints || this._curPoints.length < 1)
                    return;
                var per = time / this._curTotalTime;
                if (per > 1)
                    return;
                if (this._isEnd)
                    per = 0;
                var curPoint;
                var nextPoint;
                if (per == 1) {
                    curPoint = this._curPoints[this._curPoints.length - 1];
                    this._boxCar.x = curPoint.x;
                    this._boxCar.y = curPoint.y;
                    this._boxCar.rotation = this._targetAngle[this._targetAngle.length - 1] - 180;
                }
                else {
                    var angle = 0;
                    var idx = Math.floor(per / this._onePer);
                    var idxPer = (per % this._onePer) / this._onePer;
                    curPoint = this._curPoints[idx];
                    nextPoint = this._curPoints[idx + 1];
                    var posx = nextPoint.x * idxPer + (1 - idxPer) * curPoint.x;
                    var posy = nextPoint.y * idxPer + (1 - idxPer) * curPoint.y;
                    this._boxCar.x = posx;
                    this._boxCar.y = posy;
                    if (this._boxCar.rotation != this._targetAngle[idx + 1]) {
                        var curangle = this._targetAngle[idx] - 180;
                        var nextangle = this._targetAngle[idx + 1] - 180;
                        if (this._isFirst)
                            curangle = nextangle;
                        if (Math.abs(curangle - nextangle) > 320)
                            curangle = curangle < nextangle ? curangle + 360 : curangle - 360;
                        curangle = nextangle * idxPer + (1 - idxPer) * curangle;
                        this._boxCar.rotation = curangle;
                    }
                }
            };
            //清除
            BcbmCarPage.prototype.clear = function () {
            };
            // 释放函数
            BcbmCarPage.prototype.destroy = function (destroyChild) {
                this.clear();
                this._points = null;
                this._angles = null;
                this._boxCar = null;
                this._uiDeng = null;
                this._game = null;
            };
            BcbmCarPage.BCBM_IS_INIT_POINT = false;
            BcbmCarPage.BCBM_ALL_POINTS = [];
            BcbmCarPage.BCBM_ALL_ANGLES = [];
            //绘制点
            BcbmCarPage.BCBM_IS_DRAW = false;
            return BcbmCarPage;
        }(Laya.EventDispatcher));
        page.BcbmCarPage = BcbmCarPage;
    })(page = gamebenchibaoma.page || (gamebenchibaoma.page = {}));
})(gamebenchibaoma || (gamebenchibaoma = {}));
//# sourceMappingURL=BcbmCarPage.js.map