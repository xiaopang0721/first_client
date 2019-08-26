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
* 地砖格子工具
*/
var gamecomponent;
(function (gamecomponent) {
    var component;
    (function (component) {
        var GridEditor = /** @class */ (function (_super) {
            __extends(GridEditor, _super);
            /**
             * if (!this._gridEditor) {
                        this._gridEditor = new GridEditor(60, 80, 50, 50, { 1: PathGameTongyong.ui_tongyong_general + "tu_g.png", 2: PathGameTongyong.ui_tongyong_general + "tu_hq.png" }, true);
                        this._gridEditor.setData([19, 1, [1, 2]])
                        this.addChild(this._gridEditor);
                    }
             * @param gridW 格子宽
             * @param gridH 格子高
             * @param countX X格子数
             * @param countY Y格子数
             * @param textureTypes {"type1":url,"type2":url}
             * @param showPos 调试模式 有辅助线啊 可以看位置 可以画出来看看啊
             */
            function GridEditor(gridW, gridH, countX, countY, textureTypes, showPos) {
                var _this = _super.call(this) || this;
                //是否显示坐标点 调试开关 画辅助线
                _this._showPos = false;
                //是否可以拖拽
                _this._enableDragSet = false;
                //清理模式
                _this._isCleanMode = false;
                //长
                _this._gridWidth = 20;
                //宽
                _this._gridHeight = 20;
                //尺寸X
                _this._countX = 20;
                //尺寸Y
                _this._countY = 20;
                //绘制内容
                _this._value = 1;
                //线颜色
                _this._lineColor = "#ff0000";
                //文本颜色
                _this._textColor = "#00ff00";
                //线粗
                _this._lineWidth = 1;
                //数据
                _this._data = [];
                //拖拽选中
                _this._isDragSelect = false;
                _this._selectLineLayer = null;
                _this.mouseEnabled = true;
                _this._gridWidth = gridW;
                _this._gridHeight = gridH;
                _this._countX = countX;
                _this._countY = countY;
                _this._textureTypes = textureTypes;
                _this._showPos = showPos;
                _this._selectLineLayer = new Sprite();
                _this.addChild(_this._selectLineLayer);
                if (!_this._tipText) {
                    _this._tipText = new Laya.Text();
                    _this._tipText.color = "#ffffff";
                    _this._tipText.align = "center";
                }
                _this._wordSpace = new Point();
                _this._ijPosPoint = new Point();
                _this._preMousePos = new Point();
                _this._preMyPos = new Point();
                _this._gridIJ = new Point();
                _this.on(LEvent.ADDED, _this, _this.renderMe);
                if (_this._showPos) {
                    _this.on(LEvent.MOUSE_DOWN, _this, _this.mouseDownH);
                    _this.updateTipState();
                }
                return _this;
            }
            GridEditor.prototype.updateTipState = function () {
                this.off(LEvent.MOUSE_MOVE, this, this.myMouseMove);
                this.off(LEvent.MOUSE_OUT, this, this.myMouseOut);
                this.off(LEvent.MOUSE_OVER, this, this.myMouseOver);
                if (this._showPos) {
                    this.on(LEvent.MOUSE_MOVE, this, this.myMouseMove);
                    this.on(LEvent.MOUSE_OUT, this, this.myMouseOut);
                    this.on(LEvent.MOUSE_OVER, this, this.myMouseOver);
                }
                else { }
            };
            GridEditor.prototype.myMouseOver = function () {
                this.addChild(this._tipText);
            };
            GridEditor.prototype.myMouseOut = function () {
                this._tipText.removeSelf();
            };
            GridEditor.prototype.myMouseMove = function () {
                if (this._tipText && this._tipText.parent) {
                    var pos = void 0;
                    pos = this.getMousePoint();
                    this._tipText.pos(pos.x, pos.y + 20);
                    this._tipText.text = "(" + this.getGridIJ(pos.x, pos.y).toString() + ")";
                }
                else {
                    if (this._tipText) {
                        this.addChild(this._tipText);
                    }
                }
            };
            GridEditor.prototype.getPointsByStr = function (str) {
                var pointArr;
                pointArr = str.split(",");
                var i = 0, len = 0;
                len = pointArr.length;
                for (i = 0; i < len; i++) {
                    pointArr[i] = parseFloat(pointArr[i]);
                    if (pointArr[i].toString() == "NaN") {
                        pointArr[i] = 0;
                    }
                }
                if (pointArr.length % 3 != 0) {
                    len = pointArr.length % 3;
                    for (i = 0; i < len; i++)
                        pointArr.push(0);
                }
                return pointArr;
            };
            /**
             * 塞数据
             * @param data [0,0,type,0,1,type,...]
             */
            GridEditor.prototype.setData = function (data) {
                this._data = data;
                this.renderMe();
            };
            GridEditor.prototype.renderMe = function () {
                var _this = this;
                this.graphics.clear();
                this.size(this._gridWidth * this._countX, this._gridHeight * this._countY);
                var i = 0, j = 0;
                var tX = NaN;
                var tY = NaN;
                if (this._showPos) //要不要画线
                 {
                    for (i = 0; i <= this._countY; i++) {
                        tY = i * this._gridHeight;
                        this.graphics.drawLine(0, tY, this.width, tY, this._lineColor, this._lineWidth);
                    }
                    for (i = 0; i <= this._countX; i++) {
                        tX = i * this._gridWidth;
                        this.graphics.drawLine(tX, 0, tX, this.height, this._lineColor, this._lineWidth);
                    }
                }
                if (!this._data)
                    this._data = [];
                var p;
                var len = 0;
                len = this._data.length;
                var hasChange = false;
                for (i = len - 3; i >= 0; i -= 3) {
                    if (this._data[i] < this._countX && this._data[i + 1] < this._countY) {
                        p = this.getIJPos(this._data[i], this._data[i + 1]);
                        if (this._textureTypes) {
                            if (typeof this._data[i + 2] === 'number') {
                                var texture = Loader.getRes(this._textureTypes[this._data[i + 2]]);
                                if (texture) {
                                    this.graphics.drawTexture(texture, p.x - texture.sourceWidth * .5, p.y - texture.sourceHeight * .5);
                                }
                                else {
                                    this.graphics.fillText(this._data[i + 2] + "", p.x, p.y - 5, null, this._textColor, "center");
                                }
                            }
                            else if (this._data[i + 2] instanceof Array) {
                                this._data[i + 2].forEach(function (element) {
                                    var texture = Loader.getRes(_this._textureTypes[element]);
                                    if (texture) {
                                        _this.graphics.drawTexture(texture, p.x - texture.sourceWidth * .5, p.y - texture.sourceHeight * .5);
                                    }
                                    else {
                                        _this.graphics.fillText(element + "", p.x, p.y - 5, null, _this._textColor, "center");
                                    }
                                });
                            }
                        }
                        else {
                            this.graphics.fillText(this._data[i + 2] + "", p.x, p.y - 5, null, this._textColor, "center");
                        }
                    }
                    else {
                        this._data.splice(i, 3);
                        hasChange = true;
                    }
                }
                if (hasChange)
                    this.noticeChange();
            };
            GridEditor.prototype.getIJPos = function (i, j) {
                var p;
                p = this._ijPosPoint;
                p.x = i * this._gridWidth + 0.5 * this._gridWidth;
                p.y = j * this._gridHeight + 0.5 * this._gridHeight;
                return p;
            };
            GridEditor.prototype.mouseDownH = function () {
                this._preMousePos.setTo(Laya.stage.mouseX, Laya.stage.mouseY);
                this._preMyPos.setTo(this.mouseX, this.mouseY);
                this._isDragSelect = false;
                this._selectLineLayer.graphics.clear();
                Laya.stage.on(LEvent.MOUSE_MOVE, this, this.onStageMouseMove);
                Laya.stage.on(LEvent.MOUSE_UP, this, this.onStageMouseUp);
            };
            /**移动组件*/
            GridEditor.prototype.onStageMouseMove = function (e) {
                if (!this._enableDragSet)
                    return;
                if (this._isDragSelect) {
                    this._selectLineLayer.graphics.clear();
                    this._selectLineLayer.graphics.drawRect(this._preMyPos.x, this._preMyPos.y, this.mouseX - this._preMyPos.x, this.mouseY - this._preMyPos.y, null, "#ff0000");
                }
                else {
                    if (Math.abs(this._preMousePos.x - Laya.stage.mouseX) + Math.abs(this._preMousePos.y - Laya.stage.mouseY) > 5) {
                        this._isDragSelect = true;
                    }
                }
            };
            GridEditor.prototype.onStageMouseUp = function (e) {
                Laya.stage.off(LEvent.MOUSE_MOVE, this, this.onStageMouseMove);
                Laya.stage.off(LEvent.MOUSE_UP, this, this.onStageMouseUp);
                if (this._isDragSelect) {
                    this._isDragSelect = false;
                    this.multiSelect();
                    this._selectLineLayer.graphics.clear();
                }
                else {
                    this.click();
                }
            };
            GridEditor.prototype.multiSelect = function () {
                var i = 0, iLen = 0;
                var j = 0, jLen = 0;
                var tGrid;
                var range;
                var rec;
                rec = this._selectLineLayer.getBounds();
                range = this.getWrapGrid(rec.x, rec.y, rec.width, rec.height);
                iLen = range[3] + 1;
                jLen = range[2] + 1;
                range[0] = range[0] > 0 ? range[0] : 0;
                range[1] = range[1] > 0 ? range[1] : 0;
                iLen = iLen < this._countY ? iLen : this._countY;
                jLen = jLen < this._countX ? jLen : this._countX;
                var index = 0;
                var hasChange = false;
                for (i = range[1]; i < iLen; i++) {
                    for (j = range[0]; j < jLen; j++) {
                        this.changeGridValue(j, i, this._value, true, this._isCleanMode);
                        hasChange = true;
                    }
                }
                if (hasChange)
                    this.noticeChange();
            };
            GridEditor.prototype.click = function () {
                if (Math.abs(this._preMousePos.x - Laya.stage.mouseX) + Math.abs(this._preMousePos.y - Laya.stage.mouseY) > 5)
                    return;
                var p;
                p = this.getGridIJ(this.mouseX, this.mouseY);
                logd(p.toString());
                this.changeGridValue(p.x, p.y, this._value);
                this.noticeChange();
            };
            GridEditor.prototype.noticeChange = function () {
                this.renderMe();
            };
            GridEditor.prototype.changeGridValue = function (i, j, value, force, isClean) {
                (force === void 0) && (force = false);
                (isClean === void 0) && (isClean = false);
                var ii = 0;
                var len = 0;
                len = this._data.length;
                for (ii = 0; ii < len; ii += 3) {
                    if (this._data[ii] == i && this._data[ii + 1] == j) {
                        if (!force) {
                            if (this._data[ii + 2] == value) {
                                this._data.splice(ii, 3);
                                return;
                            }
                        }
                        else {
                            if (isClean) {
                                this._data.splice(ii, 3);
                                return;
                            }
                        }
                        this._data[ii + 2] = value;
                        return;
                    }
                }
                if (isClean) {
                    return;
                }
                this._data.push(i, j, value);
            };
            GridEditor.prototype.getWrapGrid = function (x, y, width, height) {
                var rst;
                rst = [];
                rst.length = 4;
                var tP;
                tP = this.getGridIJ(x, y);
                rst[0] = tP.x;
                rst[1] = tP.y;
                tP = this.getGridIJ(x + width, y + height);
                rst[2] = tP.x;
                rst[3] = tP.y;
                return rst;
            };
            GridEditor.prototype.getGridIJ = function (x, y) {
                x -= this._wordSpace.x;
                y -= this._wordSpace.y;
                var i = 0;
                i = Math.floor(x / this._gridWidth);
                var j = 0;
                j = Math.floor(y / this._gridHeight);
                if (i < 0)
                    i = 0;
                if (j < 0)
                    j = 0;
                this._gridIJ.setTo(i, j);
                return this._gridIJ;
            };
            GridEditor.prototype.destroy = function (destroyChild) {
                if (this._tipText) {
                    this._tipText.removeSelf();
                    this._tipText.destroy();
                    this._tipText = null;
                }
                this._wordSpace = null;
                this._ijPosPoint = null;
                this._preMousePos = null;
                this._preMyPos = null;
                this._gridIJ = null;
                this.offAll();
                _super.prototype.destroy.call(this, destroyChild);
            };
            return GridEditor;
        }(laya.display.Sprite));
        component.GridEditor = GridEditor;
    })(component = gamecomponent.component || (gamecomponent.component = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=GridEditor.js.map