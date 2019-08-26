/**
* 奔驰宝马
*/
var gamebenchibaoma;
(function (gamebenchibaoma) {
    var page;
    (function (page) {
        var PRIZE_TYPE_NORMAL = 1; //普通
        var PRIZE_TYPE_NUM = 1; //几种奖励类型
        var FIRST_CIRCLE_TIME = 9000; //第一圈总时间
        var OTHER_CIRCLE_TIME = 3000; //其他圈总时间
        var BcbmEffectPage = /** @class */ (function () {
            function BcbmEffectPage(game, box, view) {
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
                this._endTime = 0;
                this._circleGridTimeList = [];
                this._gridUpdateInfoList = [];
                this._fsRewardNum = 0;
                this._game = game;
                this._box = box;
                this._grids = [];
                for (var i = 0; i < 100; i++) {
                    var grid = view["box_che" + i];
                    if (!grid) {
                        break;
                    }
                    this._grids[i] = grid;
                }
                this._totalNum = this._grids.length;
                this._effContainer = new Laya.Sprite();
                this._box.addChild(this._effContainer);
                this._carPage = new page.BcbmCarPage(game, view);
                this._bcbmStory = this._game.sceneObjectMgr.story;
            }
            BcbmEffectPage.prototype.Update = function (diff) {
                var nowTime = this._game.sync.serverTimeBys * 1000;
                this.updateEff(diff, Laya.timer.currTimer);
                this.updateGrid(diff, nowTime);
            };
            //更新特效
            BcbmEffectPage.prototype.updateEff = function (diff, nowTime) {
                if (this._allEff.length > 0) {
                    for (var i = this._allEff.length - 1; i >= 0; i--) {
                        var eff = this._allEff[i];
                        if (eff && eff.isPlaying) {
                            eff.Update(diff, nowTime);
                        }
                        else {
                            page.BcbmGridEff.ToPool(eff);
                            this._allEff.splice(i, 1);
                        }
                    }
                }
            };
            BcbmEffectPage.prototype.addEff = function (type, index, gridTime, completeFun, param1, isNew) {
                if (completeFun === void 0) { completeFun = null; }
                if (param1 === void 0) { param1 = 0; }
                if (isNew === void 0) { isNew = true; }
                var idx = index % this._totalNum;
                var eff = page.BcbmGridEff.GetPool();
                eff.play(type, index, gridTime, completeFun, param1);
                eff.x = this._grids[idx].x;
                eff.y = this._grids[idx].y;
                this._effContainer.addChild(eff);
                this._allEff.push(eff);
            };
            BcbmEffectPage.prototype.clearEffByIndex = function (index) {
                for (var i = 0; i < this._allEff.length; i++) {
                    var eff = this._allEff[i];
                    if (eff && eff.index == index) {
                        page.BcbmGridEff.ToPool(eff);
                        this._allEff.splice(i, 1);
                        return true;
                    }
                }
                return false;
            };
            BcbmEffectPage.prototype.clearEff = function () {
                for (var i = 0; i < this._allEff.length; i++) {
                    var eff = this._allEff[i];
                    page.BcbmGridEff.ToPool(eff);
                }
                this._allEff = [];
            };
            Object.defineProperty(BcbmEffectPage.prototype, "isPlaying", {
                //是否播放特效哦
                get: function () {
                    return this._isPlaying;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BcbmEffectPage.prototype, "gameTime", {
                //获取游戏时间
                get: function () {
                    var nowTime = this._game.sync.serverTimeBys * 1000;
                    if (nowTime < this._startTime)
                        return 0;
                    if (nowTime > this._endTime)
                        nowTime = this._endTime;
                    var time = nowTime - this._startTime;
                    return time;
                },
                enumerable: true,
                configurable: true
            });
            //更新格子
            BcbmEffectPage.prototype.updateGrid = function (diff, nowTime) {
                if (nowTime < this._startTime)
                    return;
                if (!this._isEnd && nowTime >= this._updateTime) {
                    var tt = nowTime - this._curTime;
                    for (var i = this._curIdx; i <= this._endIdx; i++) {
                        var updateInfo = this.calIdxUpdateInfoByIndex(i);
                        if (!updateInfo)
                            continue;
                        tt -= updateInfo.time;
                        var isNew = tt < 0;
                        if (i == this._endIdx) {
                            //结束了
                            this._curIdx = i;
                            this._startIdx = this._endIdx % this._totalNum;
                            if (updateInfo.efftype == page.BcbmGridEff.TYPE_FULL_SCREEN)
                                this._fsRewardNum++;
                            if (updateInfo.efftype != -1) {
                                this.addEff(updateInfo.efftype, i, updateInfo.time, null, this._fsRewardNum, isNew);
                                if (this._endRewardIdx.indexOf(i) != -1 || updateInfo.efftype == page.BcbmGridEff.TYPE_FULL_SCREEN) {
                                    this.onRewardComplete(i, updateInfo.start, updateInfo.end);
                                }
                                this._carPage.onDataChange(i, 0, 0, false, true);
                            }
                            this.onComplete();
                        }
                        else {
                            if (i > this._curIdx) {
                                if (updateInfo.efftype == page.BcbmGridEff.TYPE_FULL_SCREEN)
                                    this._fsRewardNum++;
                                if (updateInfo.efftype != -1) {
                                    this.addEff(updateInfo.efftype, i, updateInfo.time, null, this._fsRewardNum, isNew);
                                    if (this._endRewardIdx.indexOf(i) != -1 || updateInfo.efftype == page.BcbmGridEff.TYPE_FULL_SCREEN) {
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
                                this._carPage.onDataChange(i, nowTime - this._curTime, updateInfo.time, false, false);
                                break;
                            }
                        }
                    }
                }
                if (!this._isEnd && nowTime >= this._curTime) {
                    var tt = nowTime - this._curTime;
                    this._carPage.updateCar(tt);
                }
                if (this._isPlaying && nowTime >= this._endTime) {
                    this.onCompletePlay();
                }
            };
            BcbmEffectPage.prototype.onGridComplete = function (index, start, end) {
                if (this._completeFun) {
                    this._completeFun.runWith([2, this._prizeType, index % this._totalNum, false, index, start, end]);
                }
            };
            BcbmEffectPage.prototype.onRewardComplete = function (index, start, end) {
                if (this._completeFun) {
                    var idx = index % this._totalNum;
                    this._completeFun.runWith([1, this._prizeType, idx, false, index, start, end]);
                }
            };
            BcbmEffectPage.prototype.onComplete = function () {
                this._isEnd = true;
            };
            BcbmEffectPage.prototype.onCompletePlay = function () {
                this._isPlaying = false;
                if (this._completeFun) {
                    this._completeFun.runWith([0, this._prizeType, 0, false]);
                }
            };
            BcbmEffectPage.prototype.playEff = function (targetIndex, startTime, completeFun) {
                if (completeFun === void 0) { completeFun = null; }
                if (this._isPlaying || targetIndex < 0 || targetIndex >= this._totalNum) {
                    if (!this._isPlaying) {
                        logd("BcbmEffectPage.playEff() targetIndex is error:" + targetIndex);
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
                // console.log("------------------------------:" + this._curTime);
                this._endIdx = this.calEndIndex(this._prizeType, targetIndex, this._curIdx, this._endRewardIdx);
                this._endTime = this._startTime + this.calUpdateInfoList(this._startIdx, this._endIdx);
                var updateInfo = this.calIdxUpdateInfoByIndex(this._curIdx);
                this._updateTime = updateInfo.time;
                if (!this._bcbmStory.isReconnect) {
                    this.addEff(updateInfo.efftype, this._curIdx, updateInfo.time);
                    this._carPage.onDataChange(this._curIdx, 0, updateInfo.time, true, false);
                }
                else {
                    //游戏开始后，断线重连进来，就直接出结果
                    this._curIdx = this._endIdx;
                    this._startIdx = this._endIdx % this._totalNum;
                    var updateInfo_1 = this.calIdxUpdateInfoByIndex(this._curIdx);
                    this.addEff(updateInfo_1.efftype, this._curIdx, updateInfo_1.time, null, this._fsRewardNum, true);
                    this._carPage.onDataChange(this._curIdx, 0, 0, false, true);
                    this._carPage.updateCar(updateInfo_1.time);
                    this._isEnd = true;
                    this.onCompletePlay();
                }
            };
            //计算结束为止
            BcbmEffectPage.prototype.calEndIndex = function (type, targetIndex, startIndex, endIndexs) {
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
            //计算格子更新信息列表
            BcbmEffectPage.prototype.calUpdateInfoList = function (startindex, endindex) {
                this._circleGridTimeList = [];
                this._gridUpdateInfoList = [];
                for (var i = startindex; i < endindex; i++) {
                    var updateInfo = this.calIdxUpdateInfo(this._prizeType, i);
                    this._gridUpdateInfoList.push(updateInfo);
                    if (!this._circleGridTimeList[updateInfo.curCircle]) {
                        this._circleGridTimeList[updateInfo.curCircle] = 0;
                    }
                    this._circleGridTimeList[updateInfo.curCircle] += updateInfo.beishu;
                }
                //计算时间
                var totalTimeMs = 0;
                for (var i = 0; i < this._circleGridTimeList.length; i++) {
                    var time = OTHER_CIRCLE_TIME;
                    if (i == 0) {
                        time = FIRST_CIRCLE_TIME;
                    }
                    totalTimeMs += time;
                    this._circleGridTimeList[i] = time / this._circleGridTimeList[i];
                }
                for (var i = 0; i < this._gridUpdateInfoList.length; i++) {
                    var updateInfo = this._gridUpdateInfoList[i];
                    updateInfo.time = updateInfo.beishu * this._circleGridTimeList[updateInfo.curCircle];
                }
                totalTimeMs += 1500; //结束后停留时间
                return totalTimeMs;
            };
            //计算每个位置刷新信息
            BcbmEffectPage.prototype.calIdxUpdateInfoByIndex = function (index) {
                if (index < this._startIdx || index > this._endIdx)
                    return null;
                if (index == this._endIdx) {
                    //最后一个
                    var info = {
                        time: 0,
                        start: this._startIdx,
                        end: this._endIdx,
                        efftype: page.BcbmGridEff.TYPE_TWINKLE,
                        curCircle: this._endRewardIdx.length,
                    };
                    return info;
                }
                return this._gridUpdateInfoList[index - this._startIdx];
            };
            //计算每个位置刷新信息
            BcbmEffectPage.prototype.calIdxUpdateInfo = function (type, index) {
                if (index < this._startIdx || index > this._endIdx)
                    return null;
                var info = {
                    time: 0,
                    efftype: page.BcbmGridEff.TYPE_TRAIL,
                    start: this._startIdx,
                    end: this._endIdx
                };
                if (index == this._endIdx) {
                    //最后一个
                    info.efftype = page.BcbmGridEff.TYPE_TWINKLE;
                    info.curCircle = this._endRewardIdx.length;
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
                info.curCircle = curCircle;
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
                        if (chaIdx < 15) {
                            beishu += (15 - chaIdx) * 2;
                        }
                    }
                }
                else if (curCircle == 1) {
                    //头
                    chaIdx = index - startRewardIdx;
                    if (chaIdx < 3) {
                        beishu += (3 - chaIdx);
                        if (chaIdx == 0) {
                            info.efftype = page.BcbmGridEff.TYPE_TWINKLE;
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
                            info.efftype = page.BcbmGridEff.TYPE_TWINKLE;
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
                info.beishu = beishu /** BcbmGridEff.UPDATE_TIME*/;
                return info;
            };
            //清除
            BcbmEffectPage.prototype.clear = function () {
                this._lotteryIndex = 0;
                this._startTime = 0;
                this._prizeType = 0;
                if (this._completeFun) {
                    this._completeFun.recover();
                    this._completeFun = null;
                }
                this._gridUpdateInfoList = [];
                this._fsRewardNum = 0;
                this._isEnd = true;
                this._isPlaying = false;
                this._endRewardIdx = [];
                this.clearEff();
            };
            // 释放函数
            BcbmEffectPage.prototype.destroy = function (destroyChild) {
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
                this._carPage.destroy();
                this._carPage = null;
            };
            return BcbmEffectPage;
        }());
        page.BcbmEffectPage = BcbmEffectPage;
    })(page = gamebenchibaoma.page || (gamebenchibaoma.page = {}));
})(gamebenchibaoma || (gamebenchibaoma = {}));
//# sourceMappingURL=BcbmEffectPage.js.map