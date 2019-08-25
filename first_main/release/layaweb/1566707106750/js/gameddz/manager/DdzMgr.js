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
* 斗地主
*/
var gameddz;
(function (gameddz) {
    var manager;
    (function (manager) {
        var MIN_CHECKTIME = 1000; //最小检测时间间隔(毫秒)
        var DdzMgr = /** @class */ (function (_super) {
            __extends(DdzMgr, _super);
            function DdzMgr(game) {
                var _this = _super.call(this, game) || this;
                _this.isShowCards = false; //是否翻牌
                _this.allCards = []; //手牌
                _this.maxCardVal = 0; //所选牌型最大牌值
                _this.endCards = []; //底牌
                _this._cardsTemp = [[], [], [], []]; //玩家出牌数据
                _this._reStart = false; //是否重开游戏
                _this._totalUnitCount = 3; // 玩家数量
                _this._centerPosTemp = [640, 410, 36]; //主玩家出牌中间那张牌的位置
                _this._centerPlayPosTemp = [700, 625, 50]; //主玩家手牌中间那张牌的位置
                _this._playCardsPos = [[1040, 280, -22], [240, 280, 22]]; //其他人出牌第一张位置,3人场
                _this._endCardPos = [551, 75, 88]; //三张底牌的第一张位置
                return _this;
            }
            Object.defineProperty(DdzMgr.prototype, "unitOffline", {
                get: function () {
                    return this._unitOffline;
                },
                set: function (v) {
                    this._unitOffline = v;
                    this.event(DdzMgr.MAPINFO_OFFLINE);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DdzMgr.prototype, "totalUnitCount", {
                get: function () {
                    return this._totalUnitCount;
                },
                set: function (v) {
                    this._totalUnitCount = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DdzMgr.prototype, "reStart", {
                get: function () {
                    return this._reStart;
                },
                set: function (b) {
                    this._reStart = b;
                },
                enumerable: true,
                configurable: true
            });
            //心跳更新
            DdzMgr.prototype.update = function (diff) {
                if (this._offsetTime > 0) {
                    this._offsetTime -= diff;
                    return;
                }
                this._offsetTime = MIN_CHECKTIME;
                //测试用的记得删掉
                var len = this._cards.length;
            };
            //判断对子
            DdzMgr.prototype.isDuiZi = function (cards) {
                if (cards.length != 2)
                    return false;
                if (cards[0].GetCardVal() != cards[1].GetCardVal())
                    return false;
                this.maxCardVal = cards[0].GetCardVal();
                return true;
            };
            //判断3张
            DdzMgr.prototype.isSanZhang = function (cards) {
                if (cards.length != 3)
                    return false;
                if (cards[0].GetCardVal() != cards[2].GetCardVal())
                    return false;
                this.maxCardVal = cards[0].GetCardVal();
                return true;
            };
            //判断3带1
            DdzMgr.prototype.isSanDaiYi = function (cards) {
                if (cards.length != 4)
                    return false;
                var copyCards = [];
                this.copyTalbe(cards, copyCards);
                var temp = this.findSomeCards(copyCards, 3);
                if (temp.length != 3)
                    return false;
                this.maxCardVal = temp[0].GetCardVal();
                return true;
            };
            //判断3带2
            DdzMgr.prototype.isSanDaiEr = function (cards) {
                if (cards.length != 5)
                    return false;
                var copyCards = [];
                this.copyTalbe(cards, copyCards);
                var temp = this.findSomeCards(copyCards, 3);
                if (temp.length != 3)
                    return false;
                if (copyCards[0].GetCardVal() != copyCards[1].GetCardVal())
                    return false;
                this.maxCardVal = temp[0].GetCardVal();
                return true;
            };
            //判断顺子
            DdzMgr.prototype.isShunZi = function (cards) {
                var copyCards = [];
                this.copyTalbe(cards, copyCards);
                if (copyCards[0].GetCardVal() == 14) {
                    return false;
                }
                if (copyCards.length < 5)
                    return false;
                var val1 = copyCards[0].GetCardVal();
                for (var i = 1; i < copyCards.length; i++) {
                    var val2 = copyCards[i].GetCardVal();
                    if (val2 + 1 != val1)
                        return false;
                    val1 = val2;
                }
                this.maxCardVal = copyCards[0].GetCardVal();
                return true;
            };
            //判断炸弹
            DdzMgr.prototype.isBomb = function (cards) {
                if (cards.length != 2 && cards.length != 4)
                    return false;
                //2张就是王炸
                if (cards.length == 2) {
                    if (cards[0].GetCardVal() != 100 || cards[1].GetCardVal() != 99)
                        return false;
                }
                else {
                    if (cards[0].GetCardVal() != cards[cards.length - 1].GetCardVal())
                        return false;
                }
                this.maxCardVal = cards[0].GetCardVal();
                return true;
            };
            //判断连对
            DdzMgr.prototype.isLianDui = function (cards) {
                //3连对开始
                if (cards.length < 6)
                    return false;
                if (cards.length % 2 != 0)
                    return false;
                if (cards[0].GetCardVal() == 14) {
                    return false;
                }
                var val1 = cards[0].GetCardVal();
                //隔着一张的牌是不是连续的
                for (var i = 1; i < cards.length / 2; i++) {
                    var val2 = cards[i * 2].GetCardVal();
                    if (val2 + 1 != val1)
                        return false;
                    val1 = val2;
                }
                //相邻的牌是不是对子
                for (var i = 0; i < cards.length / 2; i++) {
                    if (cards[i * 2].GetCardVal() != cards[i * 2 + 1].GetCardVal())
                        return false;
                }
                this.maxCardVal = cards[0].GetCardVal();
                return true;
            };
            //判断四带二
            DdzMgr.prototype.isSiDaiEr = function (cards) {
                if (cards.length != 6)
                    return false;
                var copyCards = [];
                this.copyTalbe(cards, copyCards);
                var temp = this.findSomeCards(copyCards, 4);
                if (temp.length != 4)
                    return false;
                this.maxCardVal = temp[0].GetCardVal();
                return true;
            };
            //判断四带二对
            DdzMgr.prototype.isSiDaiDui = function (cards) {
                if (cards.length != 8)
                    return false;
                var copyCards = [];
                this.copyTalbe(cards, copyCards);
                var temp = this.findSomeCards(copyCards, 4);
                if (temp.length != 4)
                    return false;
                var temp1 = this.findDuiZi(copyCards);
                if (temp1.length != 2)
                    return false;
                if (copyCards.length > 0)
                    return false;
                this.maxCardVal = temp[0].GetCardVal();
                return true;
            };
            //判断飞机
            DdzMgr.prototype.isFeiJi = function (cards) {
                //飞机怎么也要6张
                if (cards.length < 6)
                    return false;
                if (cards.length % 3 != 0)
                    return false;
                //有没有2
                if (cards[0].GetCardVal() == 14)
                    return false;
                var copyCards = [];
                this.copyTalbe(cards, copyCards);
                //需要N个3张
                var szCount = cards.length / 3;
                var temp = this.findSanZhang(copyCards);
                if (temp.length != szCount)
                    return false;
                var val = temp[0][0].GetCardVal();
                //看下是不是连续的3张
                for (var i = 1; i < temp.length; i++) {
                    if (temp[i][0].GetCardVal() + 1 != val)
                        return false;
                    val = temp[i][0].GetCardVal();
                }
                this.maxCardVal = temp[0][0].GetCardVal();
                return true;
            };
            //判断飞机带翅膀-单张
            DdzMgr.prototype.isFeiJiDan = function (cards) {
                //最少也要8张
                if (cards.length < 8)
                    return false;
                if (cards.length % 4 != 0)
                    return false;
                var copyCards = [];
                this.copyTalbe(cards, copyCards);
                //需要N个4张
                var szCount = cards.length / 4;
                var temp1 = this.findSanZhang(copyCards);
                if (temp1.length < szCount)
                    return false;
                var val = temp1[0][0].GetCardVal();
                var temp = [];
                //找出飞机
                while (temp1.length >= szCount && temp.length == 0) {
                    var val_1 = temp1[0][0].GetCardVal();
                    var newTemp = [temp1[0]];
                    for (var i = 1; i < temp1.length; i++) {
                        if (temp1[i][0].GetCardVal() + 1 == val_1 && temp1[i][0].GetCardVal() != 14) {
                            val_1 = temp1[i][0].GetCardVal();
                            newTemp.push(temp1[i]);
                        }
                        else {
                            break;
                        }
                    }
                    if (newTemp.length >= szCount) {
                        for (var i = 0; i < szCount; i++) {
                            for (var k = 0; k < 3; k++) {
                                temp.push(newTemp[i][k]);
                            }
                        }
                    }
                    for (var i = 0; i < newTemp.length; i++) {
                        for (var k = 0; k < temp1.length; k++) {
                            if (newTemp[i][0].GetVal() == temp1[k][0].GetVal()) {
                                temp1.splice(k, 1);
                            }
                        }
                    }
                }
                if (temp.length == 0)
                    return false;
                this.maxCardVal = temp[0].GetCardVal();
                return true;
            };
            //判断飞机带翅膀-带对
            DdzMgr.prototype.isFeiJiDui = function (cards) {
                //最少也要10张
                if (cards.length < 10)
                    return false;
                if (cards.length % 5 != 0)
                    return false;
                var copyCards = [];
                this.copyTalbe(cards, copyCards);
                //需要N个5张
                var szCount = cards.length / 5;
                var temp1 = this.findSanZhang(copyCards);
                if (temp1.length < szCount)
                    return false;
                var val = temp1[0][0].GetCardVal();
                var temp = [];
                //找出飞机
                while (temp1.length >= szCount && temp.length == 0) {
                    var val_2 = temp1[0][0].GetCardVal();
                    var newTemp = [temp1[0]];
                    for (var i = 1; i < temp1.length; i++) {
                        if (temp1[i][0].GetCardVal() + 1 == val_2 && temp1[i][0].GetCardVal() != 14) {
                            val_2 = temp1[i][0].GetCardVal();
                            newTemp.push(temp1[i]);
                        }
                        else {
                            break;
                        }
                    }
                    if (newTemp.length >= szCount) {
                        for (var i = 0; i < szCount; i++) {
                            for (var k = 0; k < 3; k++) {
                                temp.push(newTemp[i][k]);
                            }
                        }
                    }
                    for (var i = 0; i < newTemp.length; i++) {
                        for (var k = 0; k < temp1.length; k++) {
                            if (newTemp[i][0].GetVal() == temp1[k][0].GetVal()) {
                                temp1.splice(k, 1);
                            }
                        }
                    }
                }
                //剩下必须都是对子
                if (temp.length > 0) {
                    var temp2 = this.findDuiZi(copyCards);
                    //抽出对子了，还有没有单张
                    if (copyCards.length > 0)
                        return false;
                }
                if (temp.length == 0)
                    return false;
                this.maxCardVal = temp[0].GetCardVal();
                return true;
            };
            //找出一堆牌里N张一样的牌
            DdzMgr.prototype.findSomeCards = function (cards, count) {
                var temp = [];
                if (cards.length < count)
                    return temp;
                for (var i = 0; i < cards.length - 1; i++) {
                    temp = [];
                    var val = cards[i].GetCardVal();
                    for (var k = 0; k < cards.length; k++) {
                        if (cards[k].GetCardVal() == val) {
                            temp.push(cards[k]);
                        }
                    }
                    if (temp.length >= count)
                        break;
                }
                if (temp.length >= count) {
                    for (var i = 0; i < temp.length; i++) {
                        for (var k = 0; k < cards.length; k++) {
                            if (temp[i].GetVal() == cards[k].GetVal()) {
                                cards.splice(k, 1);
                                break;
                            }
                        }
                    }
                }
                else {
                    temp = [];
                }
                return temp;
            };
            //复制数组，1复制到2
            DdzMgr.prototype.copyTalbe = function (temp1, temp2) {
                for (var i = 0; i < temp1.length; i++) {
                    temp2[i] = temp1[i];
                }
            };
            //检查一堆牌是什么类型的
            DdzMgr.prototype.checkCardsType = function (cards) {
                var cardLen = cards.length;
                if (cardLen == 0)
                    return 0 /* CARDS_TYPE_WUXIAO */; //无效牌
                if (cardLen == 1) {
                    this.maxCardVal = cards[0].GetCardVal();
                    return 1 /* CARDS_TYPE_DAN */; //单张
                }
                var result = false;
                result = this.isDuiZi(cards);
                if (result)
                    return 2 /* CARDS_TYPE_DUI */; //对子
                result = this.isSanZhang(cards);
                if (result)
                    return 3 /* CARDS_TYPE_SAN */; //三张
                result = this.isSanDaiYi(cards);
                if (result)
                    return 4 /* CARDS_TYPE_SANDAIYI */; //三带一
                result = this.isSanDaiEr(cards);
                if (result)
                    return 5 /* CARDS_TYPE_SANDAIER */; //三带一对
                result = this.isShunZi(cards);
                if (result)
                    return 6 /* CARDS_TYPE_SHUN */; //顺子
                result = this.isBomb(cards);
                if (result)
                    return 7 /* CARDS_TYPE_BOMB */; //炸弹
                result = this.isLianDui(cards);
                if (result)
                    return 8 /* CARDS_TYPE_LIANDUI */; //连对
                result = this.isSiDaiEr(cards);
                if (result)
                    return 9 /* CARDS_TYPE_SIDAIER */; //四带二
                result = this.isSiDaiDui(cards);
                if (result)
                    return 10 /* CARDS_TYPE_SIDAIDUI */; //四带二对
                result = this.isFeiJi(cards);
                if (result)
                    return 11 /* CARDS_TYPE_FEIJI */; //飞机
                result = this.isFeiJiDan(cards);
                if (result)
                    return 12 /* CARDS_TYPE_FEIJI_DAN */; //飞机带单
                result = this.isFeiJiDui(cards);
                if (result)
                    return 13 /* CARDS_TYPE_FEIJI_DUI */; //飞机带对
                return 0 /* CARDS_TYPE_WUXIAO */;
            };
            //从手牌里找所有顺子
            DdzMgr.prototype.findShunZi = function (cards) {
                var temp = [];
                var copyCards = [];
                this.copyTalbe(cards, copyCards);
                if (copyCards.length < 5)
                    return temp;
                //找完2张以上的牌，剩下的都是单张了
                var temp1 = this.findDuiZi(copyCards);
                var temp2 = [];
                for (var i = 0; i < temp1.length; i++) {
                    temp2.push(temp1[i][0]);
                }
                //已经没有重复的牌了
                temp2 = temp2.concat(copyCards);
                this.SortCards(temp2);
                for (var i = 0; i < temp2.length; i++) {
                    if (temp2[i].GetCardVal() == 14) {
                        temp2.splice(i, 1);
                    }
                }
                while (temp2.length >= 5) {
                    var val = temp2[0].GetCardVal();
                    var szTemp = [temp2[0]];
                    for (var k = 1; k < temp2.length; k++) {
                        if (temp2[k].GetCardVal() + 1 == val) {
                            val = temp2[k].GetCardVal();
                            szTemp.push(temp2[k]);
                        }
                        else {
                            break;
                        }
                    }
                    if (szTemp.length >= 5) {
                        temp.push(szTemp);
                    }
                    for (var i = 0; i < szTemp.length; i++) {
                        for (var k = 0; k < temp2.length; k++) {
                            if (szTemp[i].GetVal() == temp2[k].GetVal()) {
                                temp2.splice(k, 1);
                                break;
                            }
                        }
                    }
                }
                return temp;
            };
            //从手牌里找所有2张以上
            DdzMgr.prototype.findDuiZi = function (cards) {
                var temp = [];
                if (cards.length < 2)
                    return temp;
                var flag = true;
                while (flag) {
                    var temp1 = this.findSomeCards(cards, 2);
                    if (temp1.length >= 2) {
                        temp.push(temp1);
                    }
                    else {
                        flag = false;
                    }
                }
                return temp;
            };
            //从手牌里找出所有3张以上
            DdzMgr.prototype.findSanZhang = function (cards) {
                var temp = [];
                if (cards.length < 3)
                    return temp;
                var flag = true;
                while (flag) {
                    var temp1 = this.findSomeCards(cards, 3);
                    if (temp1.length >= 3) {
                        temp.push(temp1);
                    }
                    else {
                        flag = false;
                    }
                }
                return temp;
            };
            //从手牌里找出所有炸弹
            DdzMgr.prototype.findBomb = function (cards) {
                var temp = [];
                if (cards.length < 4)
                    return temp;
                var flag = true;
                while (flag) {
                    var temp1 = this.findSomeCards(cards, 4);
                    if (temp1.length == 4) {
                        temp.push(temp1);
                    }
                    else {
                        flag = false;
                    }
                }
                return temp;
            };
            //提示按钮找牌
            DdzMgr.prototype.promptBtn = function (cards, type, length, max_val, is_move) {
                var allCardsArray = [];
                if (cards.length < length && cards.length < 2)
                    return allCardsArray;
                var copyCards = [];
                this.copyTalbe(cards, copyCards);
                this.SortCardsSmall(copyCards);
                if (type == 1 /* CARDS_TYPE_DAN */) { //找单张
                    var temp1 = this.findDuiZi(copyCards);
                    //先找出所有单张
                    for (var i = 0; i < copyCards.length; i++) {
                        var temp = [];
                        if (copyCards[i].GetCardVal() > max_val) {
                            temp.push(copyCards[i]);
                            allCardsArray.push(temp);
                        }
                    }
                    //再去找多张的
                    if (temp1.length > 0) {
                        for (var i = 0; i < temp1.length; i++) {
                            var temp = [];
                            if (temp1[i][0].GetCardVal() > max_val && temp1[i].length < 4) {
                                temp.push(temp1[i][0]);
                                allCardsArray.push(temp);
                            }
                        }
                    }
                }
                else if (type == 2 /* CARDS_TYPE_DUI */) { //找出对子
                    var temp1 = this.findDuiZi(copyCards);
                    if (temp1.length > 0) {
                        for (var i = 0; i < temp1.length; i++) {
                            if (temp1[i][0].GetCardVal() > max_val && temp1[i].length == 2) {
                                var temp = temp1[i];
                                allCardsArray.push(temp);
                            }
                        }
                        for (var i = 0; i < temp1.length; i++) {
                            var temp = [];
                            if (temp1[i][0].GetCardVal() > max_val && temp1[i].length == 3) {
                                for (var k = 0; k < 2; k++) {
                                    temp.push(temp1[i][k]);
                                }
                                allCardsArray.push(temp);
                            }
                        }
                    }
                }
                else if (type == 3 /* CARDS_TYPE_SAN */) { //3根
                    var temp1 = this.findSanZhang(copyCards);
                    if (temp1.length > 0) {
                        for (var i = 0; i < temp1.length; i++) {
                            if (temp1[i][0].GetCardVal() > max_val && temp1[i].length == 3) {
                                var temp = temp1[i];
                                allCardsArray.push(temp);
                            }
                        }
                    }
                }
                else if (type == 4 /* CARDS_TYPE_SANDAIYI */) { //三带一
                    var allCards = [];
                    this.copyTalbe(cards, allCards);
                    this.SortCardsSmall(allCards);
                    var temp1 = this.findSanZhang(copyCards);
                    if (temp1.length > 0) {
                        for (var i = 0; i < temp1.length; i++) {
                            if (temp1[i][0].GetCardVal() > max_val && temp1[i].length == 3) {
                                var temp = temp1[i];
                                allCardsArray.push(temp);
                            }
                        }
                        if (allCardsArray.length > 0) { //再找单张
                            var temp2 = this.findDuiZi(allCards);
                            for (var i = 0; i < temp2.length; i++) {
                                if (temp2[i].length < 4) {
                                    allCards.push(temp2[i][0]);
                                }
                            }
                            //把单张和3张拼上
                            for (var i = 0; i < allCardsArray.length; i++) {
                                for (var k = 0; k < allCards.length; k++) {
                                    if (allCardsArray[i][0].GetCardVal() != allCards[k].GetCardVal()) {
                                        allCardsArray[i].push(allCards[k]);
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    if (allCardsArray.length > 0) {
                        if (allCardsArray[0].length != length) {
                            allCardsArray = [];
                        }
                    }
                }
                else if (type == 5 /* CARDS_TYPE_SANDAIER */) { //三带一对
                    var allCards = [];
                    this.copyTalbe(cards, allCards);
                    this.SortCardsSmall(allCards);
                    var temp1 = this.findSanZhang(copyCards);
                    if (temp1.length > 0) {
                        for (var i = 0; i < temp1.length; i++) {
                            if (temp1[i][0].GetCardVal() > max_val && temp1[i].length == 3) {
                                var temp = temp1[i];
                                allCardsArray.push(temp);
                            }
                        }
                        if (allCardsArray.length > 0) { //再找对子
                            var dz_temp = [];
                            var temp2 = this.findDuiZi(allCards);
                            for (var i = 0; i < temp2.length; i++) {
                                if (temp2[i].length < 4) {
                                    var temp = [];
                                    temp.push(temp2[i][0]);
                                    temp.push(temp2[i][1]);
                                    dz_temp.push(temp);
                                }
                            }
                            //把3条和对子拼上
                            for (var i = 0; i < allCardsArray.length; i++) {
                                for (var k = 0; k < dz_temp.length; k++) {
                                    if (allCardsArray[i][0].GetCardVal() != dz_temp[k][0].GetCardVal()) {
                                        allCardsArray[i].push(dz_temp[k][0]);
                                        allCardsArray[i].push(dz_temp[k][1]);
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    if (allCardsArray.length > 0) {
                        if (allCardsArray[0].length != length) {
                            allCardsArray = [];
                        }
                    }
                }
                else if (type == 7 /* CARDS_TYPE_BOMB */) { //找出所有炸弹
                    var temp1 = this.findBomb(copyCards);
                    if (temp1.length > 0) {
                        for (var i = 0; i < temp1.length; i++) {
                            if (temp1[i][0].GetCardVal() > max_val) {
                                allCardsArray.push(temp1[i]);
                            }
                        }
                    }
                    //找下王炸
                    if (cards[0].GetCardVal() == 100 && cards[1].GetCardVal() == 99) {
                        var temp = [];
                        temp.push(cards[0]);
                        temp.push(cards[1]);
                        allCardsArray.push(temp);
                    }
                }
                else if (type == 9 /* CARDS_TYPE_SIDAIER */ || type == 10 /* CARDS_TYPE_SIDAIDUI */) { //找4带2
                    var temp1 = this.findBomb(copyCards);
                    if (temp1.length > 0) {
                        for (var i = 0; i < temp1.length; i++) {
                            allCardsArray.push(temp1[i]);
                        }
                    }
                    //找下王炸
                    if (cards[0].GetCardVal() == 100 && cards[1].GetCardVal() == 99) {
                        var temp = [];
                        temp.push(cards[0]);
                        temp.push(cards[1]);
                        allCardsArray.push(temp);
                    }
                }
                else if (type == 8 /* CARDS_TYPE_LIANDUI */) { //找下连对
                    var temp1 = this.findDuiZi(copyCards);
                    var min_val = max_val - length / 2 + 1;
                    for (var i = 0; i < temp1.length - 1; i++) {
                        var val = temp1[i][0].GetCardVal();
                        var ld_temp = [];
                        ld_temp.push(temp1[i][0]);
                        ld_temp.push(temp1[i][1]);
                        if (temp1[i].length < 4 && val != 14 && val > min_val) {
                            for (var k = i + 1; k < temp1.length; k++) {
                                var new_val = temp1[k][0].GetCardVal();
                                if (val + 1 == new_val && temp1[k].length < 4 && new_val != 14) {
                                    val = new_val;
                                    ld_temp.push(temp1[k][0]);
                                    ld_temp.push(temp1[k][1]);
                                    if (ld_temp.length == length) {
                                        allCardsArray.push(ld_temp);
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
                else if (type == 6 /* CARDS_TYPE_SHUN */) { //找顺子
                    var temp1 = this.findDuiZi(copyCards);
                    var min_val = max_val - length + 1;
                    for (var i = 0; i < temp1.length; i++) {
                        if (temp1[i].length < 4) {
                            copyCards.push(temp1[i][0]); //所有牌都抽一张出来
                        }
                    }
                    this.SortCardsSmall(copyCards);
                    for (var i = 0; i < copyCards.length - 1; i++) {
                        var val = copyCards[i].GetCardVal();
                        var sz_temp = [copyCards[i]];
                        if (val < 14 && val > min_val) {
                            for (var k = i + 1; k < copyCards.length; k++) {
                                var new_val = copyCards[k].GetCardVal();
                                if (val + 1 == new_val && new_val < 14) {
                                    val = new_val;
                                    sz_temp.push(copyCards[k]);
                                    if (sz_temp.length == length) {
                                        allCardsArray.push(sz_temp);
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
                else if (type == 11 /* CARDS_TYPE_FEIJI */) { //找飞机
                    var temp1 = this.findSanZhang(copyCards);
                    for (var i = 0; i < temp1.length - 1; i++) {
                        var val = temp1[i][0].GetCardVal();
                        var st_temp = [];
                        st_temp.push(temp1[i][0]);
                        st_temp.push(temp1[i][1]);
                        st_temp.push(temp1[i][2]);
                        if (temp1[i].length < 4 && val != 14 && val > max_val) {
                            for (var k = i + 1; k < temp1.length; k++) {
                                var new_val = temp1[k][0].GetCardVal();
                                if (val + 1 == new_val && temp1[k].length < 4 && new_val != 14) {
                                    val = new_val;
                                    st_temp.push(temp1[k][0]);
                                    st_temp.push(temp1[k][1]);
                                    st_temp.push(temp1[k][2]);
                                    if (st_temp.length == length) {
                                        allCardsArray.push(st_temp);
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
                else if (type == 12 /* CARDS_TYPE_FEIJI_DAN */) { //飞机带单
                    var temp1 = this.findSanZhang(copyCards);
                    var szCount = length / 4;
                    for (var i = 0; i < temp1.length - 1; i++) {
                        var val = temp1[i][0].GetCardVal();
                        var st_temp = [];
                        st_temp.push(temp1[i][0]);
                        st_temp.push(temp1[i][1]);
                        st_temp.push(temp1[i][2]);
                        if (temp1[i].length < 4 && val != 14 && val > max_val) {
                            for (var k = i + 1; k < temp1.length; k++) {
                                var new_val = temp1[k][0].GetCardVal();
                                if (val + 1 == new_val && temp1[k].length < 4 && new_val != 14) {
                                    val = new_val;
                                    st_temp.push(temp1[k][0]);
                                    st_temp.push(temp1[k][1]);
                                    st_temp.push(temp1[k][2]);
                                    if (st_temp.length == szCount * 3) {
                                        allCardsArray.push(st_temp);
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    if (allCardsArray.length > 0) { //找下单张
                        var allCards = [];
                        this.copyTalbe(cards, allCards);
                        this.SortCardsSmall(allCards);
                        var temp2 = this.findDuiZi(allCards);
                        //先把对子以上的牌拼成一个数组
                        var dz_temp = allCards;
                        var new_temp = [];
                        for (var i = 0; i < temp2.length; i++) {
                            new_temp = new_temp.concat(temp2[i]);
                        }
                        //开始找牌做单张用
                        for (var i = 0; i < new_temp.length; i++) {
                            dz_temp.push(new_temp[i]);
                        }
                        //拼下飞机带单
                        for (var i = 0; i < allCardsArray.length; i++) {
                            for (var k = 0; k < dz_temp.length; k++) {
                                var val = dz_temp[k].GetCardVal();
                                var is_exist = false;
                                //找出的单张，是否是飞机里的牌
                                for (var l = 0; l < allCardsArray[i].length; l++) {
                                    if (val == allCardsArray[i][l].GetCardVal()) {
                                        is_exist = true;
                                        break;
                                    }
                                }
                                if (!is_exist) {
                                    allCardsArray[i].push(dz_temp[k]);
                                    if (allCardsArray[i].length == length) {
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    if (allCardsArray.length > 0) {
                        if (allCardsArray[0].length != length) {
                            allCardsArray = [];
                        }
                    }
                }
                else if (type == 13 /* CARDS_TYPE_FEIJI_DUI */) { //飞机带对子
                    var temp1 = this.findSanZhang(copyCards);
                    var szCount = length / 5;
                    for (var i = 0; i < temp1.length - 1; i++) {
                        var val = temp1[i][0].GetCardVal();
                        var st_temp = [];
                        st_temp.push(temp1[i][0]);
                        st_temp.push(temp1[i][1]);
                        st_temp.push(temp1[i][2]);
                        if (temp1[i].length < 4 && val != 14 && val > max_val) {
                            for (var k = i + 1; k < temp1.length; k++) {
                                var new_val = temp1[k][0].GetCardVal();
                                if (val + 1 == new_val && temp1[k].length < 4 && new_val != 14) {
                                    val = new_val;
                                    st_temp.push(temp1[k][0]);
                                    st_temp.push(temp1[k][1]);
                                    st_temp.push(temp1[k][2]);
                                    if (st_temp.length == szCount * 3) {
                                        allCardsArray.push(st_temp);
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    if (allCardsArray.length > 0) { //找下对子
                        var dz_temp = [];
                        var allCards = [];
                        this.copyTalbe(cards, allCards);
                        this.SortCardsSmall(allCards);
                        var temp2 = this.findDuiZi(allCards);
                        for (var i = 0; i < temp2.length; i++) {
                            //先找下对子
                            if (temp2[i].length == 2) {
                                dz_temp = dz_temp.concat(temp2[i]);
                            }
                        }
                        //去三条里拆
                        for (var i = 0; i < temp2.length; i++) {
                            if (temp2[i].length == 3) {
                                dz_temp.push(temp2[i][0]);
                                dz_temp.push(temp2[i][1]);
                            }
                        }
                        //拼下飞机带对
                        for (var i = 0; i < allCardsArray.length; i++) {
                            for (var k = 0; k < dz_temp.length; k++) {
                                var val = dz_temp[k].GetCardVal();
                                var is_exist = false;
                                //找出的牌，是否是飞机里的牌
                                for (var l = 0; l < allCardsArray[i].length; l++) {
                                    if (val == allCardsArray[i][l].GetCardVal()) {
                                        is_exist = true;
                                        break;
                                    }
                                }
                                if (!is_exist) {
                                    allCardsArray[i].push(dz_temp[k]);
                                    if (allCardsArray[i].length == length) {
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    if (allCardsArray.length > 0) {
                        if (allCardsArray[0].length != length) {
                            allCardsArray = [];
                        }
                    }
                }
                //那看下自己有没炸弹
                if (!is_move) { //滑动选牌的话，就不需要再判断炸弹了
                    if (type != 7 /* CARDS_TYPE_BOMB */) {
                        var allCards = [];
                        this.copyTalbe(cards, allCards);
                        this.SortCardsSmall(allCards);
                        var temp1 = this.findBomb(allCards);
                        for (var i = 0; i < temp1.length; i++) {
                            allCardsArray.push(temp1[i]);
                        }
                        if (cards.length > 1) {
                            if (cards[0].GetCardVal() == 100 && cards[1].GetCardVal() == 99) {
                                var temp = [];
                                temp.push(cards[0]);
                                temp.push(cards[1]);
                                allCardsArray.push(temp);
                            }
                        }
                    }
                }
                return allCardsArray;
            };
            //充值弹框
            DdzMgr.prototype.alert = function (str, ecb, ccb, isOnlyOK, okSkin) {
                if (ecb === void 0) { ecb = null; }
                if (ccb === void 0) { ccb = null; }
                if (isOnlyOK === void 0) { isOnlyOK = true; }
                if (!this._game.uiRoot.general.isOpened(TongyongPageDef.PAGE_TONGYONG_TIPS)) {
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_TIPS, function (tip) {
                        tip.isOnlyOK = isOnlyOK;
                        tip.setInfo(str, ecb, ccb, okSkin);
                    });
                }
            };
            DdzMgr.prototype.sort = function () {
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var idx = mainUnit.GetIndex();
                if (idx == 0)
                    return;
                var count = 0;
                for (var i = 0; i < this.allCards.length; i++) {
                    var card = this.allCards[i];
                    if (card) {
                        card.myOwner(idx, idx, i);
                        card.index = i;
                        card.sortScore = -i;
                    }
                }
            };
            //对牌进行排序,大到小
            DdzMgr.prototype.SortCards = function (cards) {
                if (!cards)
                    return;
                cards.sort(function (a, b) {
                    return a.Compare(b, true);
                });
            };
            //对牌进行排序,小到大
            DdzMgr.prototype.SortCardsSmall = function (cards) {
                if (!cards)
                    return;
                cards.sort(function (a, b) {
                    return b.Compare(a, true);
                });
            };
            //发牌
            DdzMgr.prototype.fapai = function () {
                var _this = this;
                var cardsPos = this.getCardsPosTemp(this.allCards.length, true);
                var count = 0;
                var cardIndex = 0;
                var _loop_1 = function (i) {
                    var card = this_1.allCards[i];
                    if (card) {
                        //播音效
                        Laya.timer.once(50 * count, this_1, function () {
                            _this._game.playSound(PathGameTongyong.music_tongyong + "fapai.mp3", false);
                            var posX = cardsPos[i][0];
                            var posY = cardsPos[i][1];
                            card.mingpai(posX, posY);
                            cardIndex++;
                        });
                        count++;
                    }
                };
                var this_1 = this;
                for (var i = 0; i < this.allCards.length; i++) {
                    _loop_1(i);
                }
            };
            //发底牌
            DdzMgr.prototype.dealEndCards = function () {
                this.endCards = [];
                for (var i = 0; i < 3; i++) {
                    var card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, DdzData);
                    var posX = this._endCardPos[0] + this._endCardPos[2] * i;
                    var posY = this._endCardPos[1];
                    card.pos = new Vector2(posX, posY);
                    card.Init(1);
                    card.sortScore = -i;
                    card.size = 0.8;
                    this.endCards.push(card);
                }
            };
            //重连发牌
            DdzMgr.prototype.refapai = function () {
                var cardsPos = this.getCardsPosTemp(this.allCards.length, true);
                for (var i = 0; i < this.allCards.length; i++) {
                    var card = this.allCards[i];
                    var posX = cardsPos[i][0];
                    var posY = cardsPos[i][1];
                    if (card) {
                        card.refapai(posX, posY);
                    }
                }
            };
            //显示底牌
            DdzMgr.prototype.showEndCards = function (cards) {
                for (var i = 0; i < this.endCards.length; i++) {
                    var card = this.endCards[i];
                    card.Init(cards[i].GetVal());
                    if (card) {
                        card.fapai();
                    }
                }
            };
            //出牌
            DdzMgr.prototype.playingCard = function (seat, cards) {
                if (cards.length < 1)
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var mainIdx = mainUnit.GetIndex();
                if (mainIdx == 0)
                    return;
                this.clearPlayingCard(seat);
                if (seat == mainIdx) {
                    var cardsPos = this.getCardsPosTemp(cards.length, false);
                    for (var i = 0; i < cards.length; i++) {
                        var card = void 0;
                        for (var k = 0; k < this.allCards.length; k++) {
                            if (cards[i].GetVal() == this.allCards[k].GetVal()) {
                                card = this.allCards[k];
                                break;
                            }
                        }
                        var posX = cardsPos[i][0];
                        var posY = cardsPos[i][1];
                        if (card) {
                            card.sortScore = -i;
                            card.toggle = false;
                            card._isPlaying = true;
                            card.playingcard(posX, posY);
                            this.delCard(card);
                            this._cardsTemp[seat - 1].push(card);
                        }
                    }
                    this.tidyCard();
                }
                else {
                    var posIdx = (seat - mainIdx + this._totalUnitCount) % this._totalUnitCount;
                    for (var i = 0; i < cards.length; i++) {
                        var posX = this._playCardsPos[posIdx - 1][0] + i * this._playCardsPos[posIdx - 1][2];
                        var posY = this._playCardsPos[posIdx - 1][1];
                        var card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, DdzData);
                        card.pos = new Vector2(posX, posY);
                        card.Init(cards[i].GetVal());
                        if (card) {
                            if (posIdx == 1) {
                                card.sortScore = i;
                            }
                            else {
                                card.sortScore = -i;
                            }
                            card.otherPlayCard();
                            this.delCard(card);
                            this._cardsTemp[seat - 1].push(card);
                        }
                    }
                }
            };
            //结束后摊牌
            DdzMgr.prototype.showCards = function (seat, cards) {
                if (cards.length < 1)
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var mainIdx = mainUnit.GetIndex();
                if (mainIdx == 0)
                    return;
                this.clearPlayingCard(seat);
                var posIdx = (seat - mainIdx + this._totalUnitCount) % this._totalUnitCount;
                for (var i = 0; i < cards.length; i++) {
                    var posX = this._playCardsPos[posIdx - 1][0] + i * this._playCardsPos[posIdx - 1][2];
                    var posY = this._playCardsPos[posIdx - 1][1];
                    var card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, DdzData);
                    card.pos = new Vector2(posX, posY);
                    card.Init(cards[i]);
                    if (card) {
                        if (posIdx == 1) {
                            card.sortScore = i;
                        }
                        else {
                            card.sortScore = -i;
                        }
                        card.otherPlayCard();
                    }
                }
            };
            DdzMgr.prototype.getCardsPosTemp = function (val, shoupai) {
                var temp = [];
                var cardTemp;
                if (shoupai) {
                    cardTemp = this._centerPlayPosTemp;
                }
                else {
                    cardTemp = this._centerPosTemp;
                }
                var space = cardTemp[2];
                var posX = cardTemp[0];
                var posY = cardTemp[1];
                for (var i = 1; i <= val; i++) {
                    var spaceVal = Math.floor(i / 2);
                    var posTemp = [];
                    if (i % 2 == 0) {
                        posTemp = [posX - space * spaceVal, posY];
                    }
                    else {
                        posTemp = [posX + space * spaceVal, posY];
                    }
                    temp.push(posTemp);
                }
                temp.sort(function (a, b) {
                    return a[0] - b[0];
                });
                return temp;
            };
            //翻牌
            DdzMgr.prototype.showMainCards = function () {
                for (var i = 0; i < this.allCards.length; i++) {
                    var card = this.allCards[i];
                    if (card) {
                        card.fanpai();
                    }
                }
                this.isShowCards = true;
            };
            //从手牌中删除
            DdzMgr.prototype.delCard = function (card) {
                for (var i = 0; i < this.allCards.length; i++) {
                    if (this.allCards[i].GetVal() == card.GetVal()) {
                        this.allCards.splice(i, 1);
                        break;
                    }
                }
            };
            //整理下手牌
            DdzMgr.prototype.tidyCard = function () {
                this.SortCards(this.allCards);
                var cardsPos = this.getCardsPosTemp(this.allCards.length, true);
                for (var i = 0; i < this.allCards.length; i++) {
                    var card = this.allCards[i];
                    if (card) {
                        card.sortScore = -i;
                        card.index = i;
                        card.toggle = false;
                        card.disable = false;
                        var posX = cardsPos[i][0];
                        var posY = cardsPos[i][1];
                        card.mingpai(posX, posY, true);
                    }
                }
            };
            // 清理卡牌对象
            DdzMgr.prototype.clearCardObject = function () {
                var _this = this;
                this._game.sceneObjectMgr.ForEachObject(function (obj) {
                    if (obj instanceof DdzData) {
                        _this._game.sceneObjectMgr.clearOfflineObject(obj);
                    }
                });
                this._cards = [];
            };
            //清除打出去的卡牌
            DdzMgr.prototype.clearPlayingCard = function (seat) {
                for (var i = 0; i < this._cardsTemp[seat - 1].length; i++) {
                    var card = this._cardsTemp[seat - 1][i];
                    if (card) {
                        this._game.sceneObjectMgr.clearOfflineObject(card);
                    }
                }
                this._cardsTemp[seat - 1] = [];
            };
            //重置数据
            DdzMgr.prototype.resetData = function () {
                this._cardsTemp = [[], [], [], []];
                this.isShowCards = false;
                this.allCards = [];
                this.endCards = [];
                this.clearCardObject();
            };
            DdzMgr.MAPINFO_OFFLINE = "DdzMgr.MAPINFO_OFFLINE"; //假精灵
            DdzMgr.DEAL_CARDS = "DdzMgr.DEAL_CARDS"; //发牌结束
            DdzMgr.WXSHARE_TITLE = "斗地主]房号:{0}"; // 分享标题
            DdzMgr.WXSHARE_DESC = "开好房喽,就等你们一起来玩斗地主啦!晚了位置就没了哟~"; // 分享内容
            return DdzMgr;
        }(gamecomponent.managers.PlayingCardMgrBase));
        manager.DdzMgr = DdzMgr;
    })(manager = gameddz.manager || (gameddz.manager = {}));
})(gameddz || (gameddz = {}));
//# sourceMappingURL=DdzMgr.js.map