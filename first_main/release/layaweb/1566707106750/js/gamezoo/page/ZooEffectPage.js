/**
* 飞禽走兽
*/
var gamezoo;
(function (gamezoo) {
    var page;
    (function (page) {
        var PRIZE_TYPE_NORMAL = 1; //普通
        var ZooEffectPage = /** @class */ (function () {
            function ZooEffectPage(game, box, view) {
                this._imgs = [];
                this._totalNum = 0;
                this._allEff = [];
                this._lotteryIndex = 0;
                this._startTime = 0; //毫秒
                this._prizeType = 0;
                this._completeFun = null;
                this._isEnd = true;
                this._isPlaying = false;
                this._endRewardIdx = [];
                this._startIdx = 0;
                this._endIdx = 0;
                this._curIdx = 0;
                this._curTime = 0;
                this._updateTime = 0;
                this._fsRewardNum = 0;
                this._game = game;
                this._box = box;
                this._grids = [];
                for (var i = 0; i < 100; i++) {
                    var grid = view["box_zoo" + i];
                    if (!grid) {
                        break;
                    }
                    this._grids[i] = grid;
                }
                this._totalNum = this._grids.length;
                this._effContainer = new Laya.Sprite();
                this._box.addChild(this._effContainer);
            }
            ZooEffectPage.prototype.Update = function (diff) {
                var nowTime = this._game.sync.serverTimeBys * 1000;
                this.updateEff(diff, Laya.timer.currTimer);
                this.updateGrid(diff, nowTime);
            };
            //更新特效
            ZooEffectPage.prototype.updateEff = function (diff, nowTime) {
                if (this._allEff.length > 0) {
                    for (var i = this._allEff.length - 1; i >= 0; i--) {
                        var eff = this._allEff[i];
                        if (eff && eff.isPlaying) {
                            eff.Update(diff, nowTime);
                        }
                        else {
                            page.ZooGridEff.ToPool(eff);
                            this._allEff.splice(i, 1);
                        }
                    }
                }
            };
            ZooEffectPage.prototype.addEff = function (type, index, gridTime, completeFun, param1, isNew) {
                if (completeFun === void 0) { completeFun = null; }
                if (param1 === void 0) { param1 = 0; }
                if (isNew === void 0) { isNew = true; }
                var idx = index % this._totalNum;
                var eff = page.ZooGridEff.GetPool();
                eff.play(type, index, gridTime, completeFun, param1);
                eff.x = this._grids[idx].x;
                eff.y = this._grids[idx].y;
                this._effContainer.addChild(eff);
                this._allEff.push(eff);
            };
            ZooEffectPage.prototype.clearEffByIndex = function (index) {
                for (var i = 0; i < this._allEff.length; i++) {
                    var eff = this._allEff[i];
                    if (eff && eff.index == index) {
                        page.ZooGridEff.ToPool(eff);
                        this._allEff.splice(i, 1);
                        return true;
                    }
                }
                return false;
            };
            ZooEffectPage.prototype.clearEff = function () {
                for (var i = 0; i < this._allEff.length; i++) {
                    var eff = this._allEff[i];
                    page.ZooGridEff.ToPool(eff);
                }
                this._allEff = [];
            };
            Object.defineProperty(ZooEffectPage.prototype, "isPlaying", {
                //是否播放特效哦
                get: function () {
                    return this._isPlaying;
                },
                enumerable: true,
                configurable: true
            });
            //更新格子
            ZooEffectPage.prototype.updateGrid = function (diff, nowTime) {
                if (nowTime < this._startTime)
                    return;
                if (!this._isEnd && nowTime >= this._updateTime) {
                    var tt = nowTime - this._curTime;
                    for (var i = this._curIdx; i <= this._endIdx; i++) {
                        var updateInfo = this.calIdxUpdateInfo(this._prizeType, i);
                        if (!updateInfo)
                            continue;
                        tt -= updateInfo.time;
                        var isNew = tt < 0;
                        if (i == this._endIdx) {
                            //结束了
                            this._curIdx = i;
                            this._startIdx = this._endIdx % this._totalNum;
                            if (updateInfo.efftype == page.ZooGridEff.TYPE_FULL_SCREEN)
                                this._fsRewardNum++;
                            if (updateInfo.efftype != -1) {
                                this.addEff(updateInfo.efftype, i, updateInfo.time, null, this._fsRewardNum, isNew);
                                if (this._endRewardIdx.indexOf(i) != -1 || updateInfo.efftype == page.ZooGridEff.TYPE_FULL_SCREEN) {
                                    this.onRewardComplete(i, updateInfo.start, updateInfo.end);
                                }
                            }
                            this.onComplete();
                        }
                        else {
                            if (i > this._curIdx) {
                                if (updateInfo.efftype == page.ZooGridEff.TYPE_FULL_SCREEN)
                                    this._fsRewardNum++;
                                if (updateInfo.efftype != -1) {
                                    this.addEff(updateInfo.efftype, i, updateInfo.time, null, this._fsRewardNum, isNew);
                                    if (this._endRewardIdx.indexOf(i) != -1 || updateInfo.efftype == page.ZooGridEff.TYPE_FULL_SCREEN) {
                                        this.onRewardComplete(i, updateInfo.start, updateInfo.end);
                                    }
                                    else {
                                        this.onGridComplete(i, updateInfo.start, updateInfo.end);
                                    }
                                }
                            }
                            if (tt < 0) {
                                this._curIdx = i;
                                this._curTime = nowTime - tt - updateInfo.time;
                                this._updateTime = this._curTime + updateInfo.time;
                                break;
                            }
                        }
                    }
                }
            };
            ZooEffectPage.prototype.onGridComplete = function (index, start, end) {
                if (this._completeFun) {
                    this._completeFun.runWith([2, this._prizeType, index % this._totalNum, false, index, start, end]);
                }
            };
            ZooEffectPage.prototype.onRewardComplete = function (index, start, end) {
                if (this._completeFun) {
                    var idx = index % this._totalNum;
                    this._completeFun.runWith([1, this._prizeType, idx, false, index, start, end]);
                }
            };
            ZooEffectPage.prototype.onComplete = function () {
                var _this = this;
                this._isEnd = true;
                Laya.timer.once(1500, this, function () {
                    _this._isPlaying = false;
                    if (_this._completeFun) {
                        _this._completeFun.runWith([0, _this._prizeType, 0, false]);
                    }
                });
            };
            ZooEffectPage.prototype.playEff = function (targetIndex, startTime, completeFun) {
                if (completeFun === void 0) { completeFun = null; }
                if (this._isPlaying || targetIndex < 0 || targetIndex >= this._totalNum) {
                    if (!this._isPlaying) {
                        logd("ZooEffectPage.playEff() targetIndex is error:" + targetIndex);
                    }
                    return;
                }
                this.clear();
                this._lotteryIndex = targetIndex;
                this._startTime = startTime * 1000;
                this._prizeType = PRIZE_TYPE_NORMAL;
                this._completeFun = completeFun;
                this._isEnd = false;
                this._isPlaying = true;
                this._endRewardIdx = [];
                this._curIdx = this._startIdx;
                this._curTime = this._startTime;
                this._endIdx = this.calEndIndex(this._prizeType, targetIndex, this._curIdx, this._endRewardIdx);
                var updateInfo = this.calIdxUpdateInfo(this._prizeType, this._curIdx);
                this._updateTime = updateInfo.time;
                this.addEff(updateInfo.efftype, this._curIdx, updateInfo.time);
            };
            //计算结束为止
            ZooEffectPage.prototype.calEndIndex = function (type, targetIndex, startIndex, endIndexs) {
                if (!endIndexs)
                    endIndexs = [];
                var endIndex = startIndex;
                switch (type) {
                    default:
                        //先转两圈
                        endIndex += this._totalNum * 4;
                        var yEndIndex = endIndex % this._totalNum;
                        endIndex += targetIndex - yEndIndex;
                        if (targetIndex <= yEndIndex) {
                            endIndex += this._totalNum;
                        }
                        endIndexs[0] = endIndex;
                        break;
                }
                return endIndex;
            };
            //计算每个位置刷新信息
            ZooEffectPage.prototype.calIdxUpdateInfo = function (type, index) {
                if (index < this._startIdx || index > this._endIdx)
                    return null;
                var info = {
                    time: 0,
                    efftype: page.ZooGridEff.TYPE_TRAIL,
                    start: this._startIdx,
                    end: this._endIdx
                };
                if (index == this._endIdx) {
                    //最后一个
                    info.efftype = page.ZooGridEff.TYPE_TWINKLE;
                    return info;
                }
                var startRewardIdx = this._startIdx;
                var endRewardIdx = -1;
                var curCircle = 0;
                for (var i = 0; i < this._endRewardIdx.length; i++) {
                    if (index < this._endRewardIdx[i]) {
                        curCircle = i;
                        endRewardIdx = this._endRewardIdx[i];
                        if (i > 0)
                            startRewardIdx = this._endRewardIdx[i - 1];
                        break;
                    }
                }
                if (endRewardIdx == -1 || endRewardIdx <= startRewardIdx) {
                    return null;
                }
                info.start = startRewardIdx;
                info.end = endRewardIdx;
                //第一圈
                var chaIdx = 0;
                var beishu = 1;
                if (curCircle == 0) {
                    //头
                    chaIdx = index - startRewardIdx;
                    if (chaIdx < 5) {
                        beishu += (5 - chaIdx) * 3;
                    }
                    else {
                        //尾
                        chaIdx = endRewardIdx - index;
                        if (chaIdx < 10) {
                            beishu += (10 - chaIdx) * 4;
                        }
                    }
                }
                else if (curCircle == 1) {
                    //头
                    chaIdx = index - startRewardIdx;
                    if (chaIdx < 3) {
                        beishu += (3 - chaIdx);
                        if (chaIdx == 0) {
                            info.efftype = page.ZooGridEff.TYPE_TWINKLE;
                            switch (type) {
                                default:
                                    beishu = 50;
                                    break;
                            }
                        }
                    }
                    else {
                        //尾
                        chaIdx = endRewardIdx - index;
                        if (chaIdx < 6) {
                            beishu += (6 - chaIdx) * 3;
                        }
                        if (chaIdx == 1) {
                        }
                    }
                }
                else {
                    //头
                    chaIdx = index - startRewardIdx;
                    if (chaIdx < 3) {
                        beishu += (3 - chaIdx);
                        if (chaIdx == 0) {
                            beishu = 50;
                            info.efftype = page.ZooGridEff.TYPE_TWINKLE;
                        }
                    }
                    else {
                        //尾
                        chaIdx = endRewardIdx - index;
                        if (chaIdx < 6) {
                            beishu += (6 - chaIdx) * 3;
                        }
                    }
                }
                info.time = beishu * page.ZooGridEff.UPDATE_TIME;
                return info;
            };
            //清除
            ZooEffectPage.prototype.clear = function () {
                this._lotteryIndex = 0;
                this._startTime = 0;
                this._prizeType = 0;
                if (this._completeFun) {
                    this._completeFun.recover();
                    this._completeFun = null;
                }
                this._fsRewardNum = 0;
                this._isEnd = true;
                this._isPlaying = false;
                this._endRewardIdx = [];
                Laya.timer.clearAll(this);
                if (this._allEff) {
                    for (var i = 0; i < this._allEff.length; i++) {
                        page.ZooGridEff.ToPool(this._allEff[i]);
                        this._allEff[i] = null;
                    }
                    this._allEff.length = 0;
                }
                this.clearEff();
            };
            // 释放函数
            ZooEffectPage.prototype.destroy = function (destroyChild) {
                this.clear();
                this._box = null;
                this._grids.length = 0;
                this._grids = null;
                this._game = null;
                this._imgs = null;
                if (this._effContainer) {
                    this._effContainer.removeSelf();
                    this._effContainer.destroy();
                    this._effContainer = null;
                }
            };
            return ZooEffectPage;
        }());
        page.ZooEffectPage = ZooEffectPage;
    })(page = gamezoo.page || (gamezoo.page = {}));
})(gamezoo || (gamezoo = {}));
//# sourceMappingURL=ZooEffectPage.js.map