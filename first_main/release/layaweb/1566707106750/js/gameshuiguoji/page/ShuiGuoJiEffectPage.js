/**
* 水果机
*/
var gameshuiguoji;
(function (gameshuiguoji) {
    var page;
    (function (page) {
        var PRIZE_TYPE_NUM = 5; //几种奖励类型
        var LUCKEY_INDEXS = [6, 18];
        var ShuiGuoJiEffectPage = /** @class */ (function () {
            function ShuiGuoJiEffectPage(game, box, view) {
                this._imgs = [];
                this._totalNum = 0;
                this._allEff = [];
                this._lottery = null;
                this._prizeType = 0;
                this._prizes = [];
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
                    var grid = view["box_friut_" + (i + 1)];
                    if (!grid) {
                        break;
                    }
                    this._grids[i] = grid;
                }
                this._totalNum = this._grids.length;
                this._effContainer = new Laya.Sprite();
                this._box.addChild(this._effContainer);
            }
            ShuiGuoJiEffectPage.prototype.Update = function (diff) {
                var nowTime = Laya.timer.currTimer;
                this.updateEff(diff, nowTime);
                this.updateGrid(diff, nowTime);
            };
            //更新特效
            ShuiGuoJiEffectPage.prototype.updateEff = function (diff, nowTime) {
                if (this._allEff.length > 0) {
                    for (var i = this._allEff.length - 1; i >= 0; i--) {
                        var eff = this._allEff[i];
                        if (eff && eff.isPlaying) {
                            eff.Update(diff, nowTime);
                        }
                        else {
                            page.ShuiGuoJiGridEff.ToPool(eff);
                            this._allEff.splice(i, 1);
                        }
                    }
                }
            };
            ShuiGuoJiEffectPage.prototype.addEff = function (type, index, gridTime, completeFun, param1, isNew) {
                if (completeFun === void 0) { completeFun = null; }
                if (param1 === void 0) { param1 = 0; }
                if (isNew === void 0) { isNew = true; }
                var idx = index % this._totalNum;
                var eff = page.ShuiGuoJiGridEff.GetPool();
                eff.play(type, index, gridTime, completeFun, param1);
                eff.x = this._grids[idx].x;
                eff.y = this._grids[idx].y;
                this._effContainer.addChild(eff);
                this._allEff.push(eff);
            };
            ShuiGuoJiEffectPage.prototype.clearEffByIndex = function (index) {
                for (var i = 0; i < this._allEff.length; i++) {
                    var eff = this._allEff[i];
                    if (eff && eff.index == index) {
                        page.ShuiGuoJiGridEff.ToPool(eff);
                        this._allEff.splice(i, 1);
                        return true;
                    }
                }
                return false;
            };
            ShuiGuoJiEffectPage.prototype.clearEff = function () {
                for (var i = 0; i < this._allEff.length; i++) {
                    var eff = this._allEff[i];
                    page.ShuiGuoJiGridEff.ToPool(eff);
                }
                this._allEff = [];
            };
            Object.defineProperty(ShuiGuoJiEffectPage.prototype, "isPlaying", {
                //是否播放特效哦
                get: function () {
                    return this._isPlaying;
                },
                enumerable: true,
                configurable: true
            });
            //更新格子
            ShuiGuoJiEffectPage.prototype.updateGrid = function (diff, nowTime) {
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
                            if (updateInfo.efftype == page.ShuiGuoJiGridEff.TYPE_FULL_SCREEN)
                                this._fsRewardNum++;
                            if (updateInfo.efftype != -1) {
                                this.addEff(updateInfo.efftype, i, updateInfo.time, null, this._fsRewardNum, isNew);
                                if (this._endRewardIdx.indexOf(i) != -1 || updateInfo.efftype == page.ShuiGuoJiGridEff.TYPE_FULL_SCREEN) {
                                    this.onRewardComplete(i, updateInfo.start, updateInfo.end);
                                }
                            }
                            this.onComplete();
                        }
                        else {
                            if (i > this._curIdx) {
                                if (updateInfo.efftype == page.ShuiGuoJiGridEff.TYPE_FULL_SCREEN)
                                    this._fsRewardNum++;
                                if (updateInfo.efftype != -1) {
                                    this.addEff(updateInfo.efftype, i, updateInfo.time, null, this._fsRewardNum, isNew);
                                    if (this._endRewardIdx.indexOf(i) != -1 || updateInfo.efftype == page.ShuiGuoJiGridEff.TYPE_FULL_SCREEN) {
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
            ShuiGuoJiEffectPage.prototype.onGridComplete = function (index, start, end) {
                if (this._completeFun) {
                    this._completeFun.runWith([2, this._prizeType, index % this._totalNum, false, index, start, end]);
                }
            };
            ShuiGuoJiEffectPage.prototype.onRewardComplete = function (index, start, end) {
                if (this._completeFun) {
                    var idx = index % this._totalNum;
                    var isFirst = this._prizes[0].index == idx;
                    if (this._prizeType == ShuiGuoJiEffectPage.PRIZE_TYPE_PULL_SCREEN) {
                        isFirst = this._fsRewardNum == 1;
                    }
                    this._completeFun.runWith([1, this._prizeType, idx, isFirst, index, start, end]);
                }
            };
            ShuiGuoJiEffectPage.prototype.onComplete = function () {
                var _this = this;
                this._isEnd = true;
                Laya.timer.once(1500, this, function () {
                    _this._isPlaying = false;
                    if (_this._completeFun) {
                        _this._completeFun.runWith([0, _this._prizeType, 0, false]);
                    }
                    _this.clearEff();
                    if (_this._prizeType == ShuiGuoJiEffectPage.PRIZE_TYPE_PULL_SCREEN) {
                        for (var i = 0; i < _this._totalNum; i++) {
                            _this.addEff(page.ShuiGuoJiGridEff.TYPE_TWINKLE, i, 0);
                        }
                    }
                    else {
                        for (var i = 0; i < _this._prizes.length; i++) {
                            _this.addEff(page.ShuiGuoJiGridEff.TYPE_TWINKLE, _this._prizes[i].index, 0);
                        }
                    }
                });
            };
            ShuiGuoJiEffectPage.prototype.checkLotteryInfo = function (info) {
                if (!info || !info.prizeContent || !info.prizeType)
                    return false;
                if (info.prizeType < 1 || info.prizeType > PRIZE_TYPE_NUM)
                    return false;
                return info.prizeContent.length > 0;
            };
            ShuiGuoJiEffectPage.prototype.playEff = function (info, completeFun) {
                if (completeFun === void 0) { completeFun = null; }
                if (this._isPlaying || !this.checkLotteryInfo(info)) {
                    if (!this._isPlaying) {
                        logd("ShuiGuoJiEffectPage.playEff() info is error" + info);
                    }
                    return;
                }
                this.clear();
                this._lottery = info;
                this._prizeType = info.prizeType;
                this._prizes = info.prizeContent;
                this._completeFun = completeFun;
                this._isEnd = false;
                this._isPlaying = true;
                this._endRewardIdx = [];
                this._curIdx = this._startIdx;
                this._curTime = Laya.timer.currTimer;
                this._endIdx = this.calEndIndex(this._prizeType, this._prizes, this._curIdx, this._endRewardIdx);
                var updateInfo = this.calIdxUpdateInfo(this._prizeType, this._curIdx);
                this._updateTime = updateInfo.time;
                this.addEff(updateInfo.efftype, this._curIdx, updateInfo.time);
            };
            //计算结束为止
            ShuiGuoJiEffectPage.prototype.calEndIndex = function (type, prizes, startIndex, endIndexs) {
                if (!prizes || prizes.length == 0) {
                    return startIndex;
                }
                if (!endIndexs)
                    endIndexs = [];
                var endIndex = startIndex;
                switch (type) {
                    case ShuiGuoJiEffectPage.PRIZE_TYPE_PULL_SCREEN:
                        //全屏奖
                        endIndex += this._totalNum * 4 + this.randomPSRewardIdx();
                        endIndexs[0] = endIndex;
                        break;
                    default:
                        for (var i = 0; i < prizes.length; i++) {
                            //先转两圈
                            endIndex += this._totalNum * 1;
                            var yEndIndex = endIndex % this._totalNum;
                            endIndex += prizes[i].index - yEndIndex;
                            if (prizes[i].index <= yEndIndex) {
                                endIndex += this._totalNum;
                            }
                            if (i == 0) {
                                //第一个奖励多转一圈
                                endIndex += this._totalNum * 3;
                            }
                            endIndexs[i] = endIndex;
                        }
                        break;
                }
                return endIndex;
            };
            //随机一个全屏开始中奖项
            ShuiGuoJiEffectPage.prototype.randomPSRewardIdx = function () {
                var ranArr = [];
                for (var i = 0; i < this._totalNum; i++) {
                    if (!this.isLuckeyIndex(i)) {
                        ranArr.push(i);
                    }
                }
                var ran = Math.floor(Math.random() * ranArr.length);
                return ranArr[ran];
            };
            //lucky索引
            ShuiGuoJiEffectPage.prototype.isLuckeyIndex = function (index) {
                index %= this._totalNum;
                return LUCKEY_INDEXS.indexOf(index) != -1;
            };
            //计算每个位置刷新信息
            ShuiGuoJiEffectPage.prototype.calIdxUpdateInfo = function (type, index) {
                if (index < this._startIdx || index > this._endIdx)
                    return null;
                var info = {
                    time: 0,
                    efftype: page.ShuiGuoJiGridEff.TYPE_TRAIL,
                    start: this._startIdx,
                    end: this._endIdx
                };
                if (index == this._endIdx) {
                    //最后一个
                    if (type == ShuiGuoJiEffectPage.PRIZE_TYPE_PULL_SCREEN) {
                        info.efftype = page.ShuiGuoJiGridEff.TYPE_FULL_SCREEN;
                    }
                    else {
                        info.efftype = page.ShuiGuoJiGridEff.TYPE_TWINKLE;
                    }
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
                    if (chaIdx < 3) {
                        beishu += (3 - chaIdx);
                    }
                    else {
                        //尾
                        chaIdx = endRewardIdx - index;
                        if (type == ShuiGuoJiEffectPage.PRIZE_TYPE_PULL_SCREEN) {
                            //全屏奖
                            if (chaIdx == this._totalNum - 1) {
                                //弹满堂红特效，时间长点
                                beishu = 3500 / page.ShuiGuoJiGridEff.UPDATE_TIME + 5;
                            }
                            else if (chaIdx < this._totalNum - 1) {
                                beishu = 1.5;
                            }
                            else if (chaIdx < this._totalNum + 5) {
                                beishu += (this._totalNum + 5 - chaIdx) * 3;
                            }
                            if (chaIdx < this._totalNum) {
                                info.efftype = page.ShuiGuoJiGridEff.TYPE_FULL_SCREEN;
                            }
                            //特殊处理luckey
                            // if (this.isLuckeyIndex(index)){
                            //     info.time = 0;
                            //     info.efftype = -1;
                            // }
                        }
                        else {
                            if (chaIdx < 6) {
                                beishu += (6 - chaIdx) * 3;
                            }
                        }
                    }
                }
                else if (curCircle == 1) {
                    //头
                    beishu = 0.4;
                    info.efftype = page.ShuiGuoJiGridEff.TYPE_GRID_TIME_SHOW;
                    chaIdx = index - startRewardIdx;
                    if (chaIdx < 3) {
                        beishu += (3 - chaIdx) * 0.4;
                        if (chaIdx == 0) {
                            info.efftype = page.ShuiGuoJiGridEff.TYPE_TWINKLE;
                            switch (type) {
                                case ShuiGuoJiEffectPage.PRIZE_TYPE_DA_SAN_YUAN:
                                case ShuiGuoJiEffectPage.PRIZE_TYPE_DA_SI_XI:
                                    //弹大三元和大四喜特效时间长点
                                    beishu = 3500 / page.ShuiGuoJiGridEff.UPDATE_TIME + 5;
                                    break;
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
                            beishu += (6 - chaIdx) * 1.2;
                        }
                        if (chaIdx == 1) {
                        }
                    }
                }
                else {
                    //头
                    beishu = 0.4;
                    info.efftype = page.ShuiGuoJiGridEff.TYPE_GRID_TIME_SHOW;
                    chaIdx = index - startRewardIdx;
                    if (chaIdx < 3) {
                        beishu += (3 - chaIdx) * 0.4;
                        if (chaIdx == 0) {
                            beishu = 50;
                            info.efftype = page.ShuiGuoJiGridEff.TYPE_TWINKLE;
                        }
                    }
                    else {
                        //尾
                        chaIdx = endRewardIdx - index;
                        if (chaIdx < 6) {
                            beishu += (6 - chaIdx) * 1.2;
                        }
                    }
                }
                info.time = beishu * page.ShuiGuoJiGridEff.UPDATE_TIME;
                return info;
            };
            //清除
            ShuiGuoJiEffectPage.prototype.clear = function () {
                this._lottery = null;
                this._prizeType = 0;
                this._prizes = [];
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
                        page.ShuiGuoJiGridEff.ToPool(this._allEff[i]);
                        this._allEff[i] = null;
                    }
                    this._allEff.length = 0;
                }
                this.clearEff();
            };
            // 释放函数
            ShuiGuoJiEffectPage.prototype.destroy = function (destroyChild) {
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
            ShuiGuoJiEffectPage.PRIZE_TYPE_PULL_SCREEN = 1; //全屏奖
            ShuiGuoJiEffectPage.PRIZE_TYPE_DA_SAN_YUAN = 2; //大三元
            ShuiGuoJiEffectPage.PRIZE_TYPE_DA_SI_XI = 3; //大四喜
            ShuiGuoJiEffectPage.PRIZE_TYPE_LUCKEY = 4; //luckey
            return ShuiGuoJiEffectPage;
        }());
        page.ShuiGuoJiEffectPage = ShuiGuoJiEffectPage;
    })(page = gameshuiguoji.page || (gameshuiguoji.page = {}));
})(gameshuiguoji || (gameshuiguoji = {}));
//# sourceMappingURL=ShuiGuoJiEffectPage.js.map