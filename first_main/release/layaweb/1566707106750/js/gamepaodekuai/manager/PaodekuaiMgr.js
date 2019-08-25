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
* 跑得快
*/
var gamepaodekuai;
(function (gamepaodekuai) {
    var manager;
    (function (manager) {
        var MIN_CHECKTIME = 1000; //最小检测时间间隔(毫秒)
        var PaodekuaiMgr = /** @class */ (function (_super) {
            __extends(PaodekuaiMgr, _super);
            function PaodekuaiMgr(game) {
                var _this = _super.call(this, game) || this;
                _this.isShowCards = false; //是否翻牌
                _this.allCards = []; //手牌
                _this.maxCardVal = 0; //所选牌型最大牌值
                _this.shunziCount = 5; //几张起顺
                _this.bombA = 0; //3A是否炸弹
                _this.siDaiSan = 1; //是否可以四带三
                _this._cardsTemp = [[], [], [], []]; //玩家出牌数据
                _this._isReDealCard = false;
                _this._totalUnitCount = 3; // 玩家数量
                _this._centerPosTemp = [640, 410, 36]; //主玩家出牌中间那张牌的位置
                _this._centerPlayPosTemp = [670, 625, 50]; //主玩家手牌中间那张牌的位置
                _this._playCardsPos1 = [[1040, 270, -22], [700, 110, 22], [240, 270, 22]]; //其他人出牌第一张位置,4人场
                _this._playCardsPos2 = [[1040, 270, -22], [240, 270, 22]]; //其他人出牌第一张位置,3人场
                return _this;
            }
            Object.defineProperty(PaodekuaiMgr.prototype, "unitOffline", {
                get: function () {
                    return this._unitOffline;
                },
                set: function (v) {
                    this._unitOffline = v;
                    this.event(PaodekuaiMgr.MAPINFO_OFFLINE);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PaodekuaiMgr.prototype, "isReDealCard", {
                get: function () {
                    return this._isReDealCard;
                },
                set: function (v) {
                    this._isReDealCard = v;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PaodekuaiMgr.prototype, "totalUnitCount", {
                get: function () {
                    return this._totalUnitCount;
                },
                set: function (v) {
                    this._totalUnitCount = v;
                },
                enumerable: true,
                configurable: true
            });
            //心跳更新
            PaodekuaiMgr.prototype.update = function (diff) {
                if (this._offsetTime > 0) {
                    this._offsetTime -= diff;
                    return;
                }
                this._offsetTime = MIN_CHECKTIME;
            };
            //判断对子
            PaodekuaiMgr.prototype.isDuiZi = function (cards) {
                if (cards.length != 2)
                    return false;
                if (cards[0].GetCardVal() != cards[1].GetCardVal())
                    return false;
                this.maxCardVal = cards[0].GetCardVal();
                return true;
            };
            //判断3带2
            PaodekuaiMgr.prototype.isSanDaiEr = function (cards) {
                if (this.allCards.length >= 5) {
                    if (cards.length != 5)
                        return false;
                }
                else {
                    if (cards.length != this.allCards.length)
                        return false;
                    if (this.allCards.length < 3)
                        return false;
                }
                var copyCards = [];
                this.copyTalbe(cards, copyCards);
                var temp = this.findSomeCards(copyCards, 3);
                if (temp.length != 3)
                    return false;
                this.maxCardVal = temp[0].GetCardVal();
                return true;
            };
            //判断顺子
            PaodekuaiMgr.prototype.isShunZi = function (cards) {
                var copyCards = [];
                this.copyTalbe(cards, copyCards);
                if (copyCards[0].GetCardVal() == 14) {
                    return false;
                }
                if (copyCards.length < this.shunziCount)
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
            PaodekuaiMgr.prototype.isBomb = function (cards) {
                //特殊牌3A是不是炸弹
                if (this.bombA == 1) {
                    if (cards[0].GetCardVal() == 13) {
                        if (cards.length != 3)
                            return false;
                    }
                    else {
                        if (cards.length != 4)
                            return false;
                    }
                }
                else {
                    if (cards.length != 4)
                        return false;
                }
                if (cards[0].GetCardVal() != cards[cards.length - 1].GetCardVal())
                    return false;
                this.maxCardVal = cards[0].GetCardVal();
                return true;
            };
            //判断连对
            PaodekuaiMgr.prototype.isLianDui = function (cards) {
                if (cards.length < 4)
                    return false;
                if (cards.length % 2 != 0)
                    return false;
                if (cards[0].GetCardVal() == 14) {
                    return false;
                }
                var val1 = cards[0].GetCardVal();
                for (var i = 1; i < cards.length / 2; i++) {
                    var val2 = cards[i * 2].GetCardVal();
                    if (val2 + 1 != val1)
                        return false;
                    val1 = val2;
                }
                for (var i = 0; i < cards.length / 2; i++) {
                    if (cards[i * 2].GetCardVal() != cards[i * 2 + 1].GetCardVal())
                        return false;
                }
                this.maxCardVal = cards[0].GetCardVal();
                return true;
            };
            //判断两连飞机
            PaodekuaiMgr.prototype.isTwoFeiJi = function (cards) {
                if (this.allCards.length >= 10) {
                    if (cards.length != 10)
                        return false;
                }
                else {
                    if (cards.length != this.allCards.length)
                        return false;
                    if (this.allCards.length < 6)
                        return false;
                }
                var copyCards = [];
                this.copyTalbe(cards, copyCards);
                //先干掉2
                var exist = true;
                while (exist) {
                    if (copyCards[0].GetCardVal() == 14) {
                        copyCards.splice(0, 1);
                    }
                    if (copyCards[0].GetCardVal() == 14) {
                        exist = true;
                    }
                    else {
                        exist = false;
                    }
                }
                var temp1 = this.findSomeCards(copyCards, 3);
                if (temp1.length < 3)
                    return false;
                var temp2 = this.findSomeCards(copyCards, 3);
                if (temp2.length < 3)
                    return false;
                //已经有2个3张了,看看其他几张的牌
                var temp3 = this.findSomeCards(copyCards, 3);
                //如果还存在一个3张，那就要看看哪两个可以凑成飞机
                if (temp3.length < 3) {
                    if (temp1[0].GetCardVal() - 1 == temp2[0].GetCardVal()) {
                        this.maxCardVal = temp1[0].GetCardVal();
                        return true;
                    }
                }
                else {
                    if (temp1[0].GetCardVal() - 1 == temp2[0].GetCardVal()) {
                        this.maxCardVal = temp1[0].GetCardVal();
                        return true;
                    }
                    else if (temp2[0].GetCardVal() - 1 == temp3[0].GetCardVal()) {
                        this.maxCardVal = temp2[0].GetCardVal();
                        return true;
                    }
                }
                return false;
            };
            //判断四带三
            PaodekuaiMgr.prototype.isSiDaiSan = function (cards) {
                if (this.siDaiSan == 0)
                    return false;
                if (this.allCards.length >= 7) {
                    if (cards.length != 7)
                        return false;
                }
                else {
                    if (cards.length != this.allCards.length)
                        return false;
                    if (this.allCards.length < 5)
                        return false;
                }
                var copyCards = [];
                this.copyTalbe(cards, copyCards);
                var temp = this.findSomeCards(copyCards, 4);
                if (temp.length != 4)
                    return false;
                this.maxCardVal = temp[0].GetCardVal();
                return true;
            };
            //判断3连飞机
            PaodekuaiMgr.prototype.isThreeFeiJi = function (cards) {
                if (this.allCards.length >= 15) {
                    if (cards.length != 15)
                        return false;
                }
                else {
                    if (cards.length != this.allCards.length)
                        return false;
                    if (this.allCards.length < 9)
                        return false;
                }
                var copyCards = [];
                this.copyTalbe(cards, copyCards);
                //先干掉2
                var exist = true;
                while (exist) {
                    if (copyCards[0].GetCardVal() == 14) {
                        copyCards.splice(0, 1);
                    }
                    if (copyCards[0].GetCardVal() == 14) {
                        exist = true;
                    }
                    else {
                        exist = false;
                    }
                }
                //需要至少3个3张
                var temp1 = this.findSomeCards(copyCards, 3);
                if (temp1.length < 3)
                    return false;
                var temp2 = this.findSomeCards(copyCards, 3);
                if (temp2.length < 3)
                    return false;
                var temp3 = this.findSomeCards(copyCards, 3);
                if (temp3.length < 3)
                    return false;
                //剩下的牌里看下有没有3张
                var temp4 = this.findSomeCards(copyCards, 3);
                var temp5 = this.findSomeCards(copyCards, 3);
                if (temp4.length < 3) {
                    if (temp1[0].GetCardVal() - 1 == temp2[0].GetCardVal() && temp2[0].GetCardVal() - 1 == temp3[0].GetCardVal()) {
                        this.maxCardVal = temp1[0].GetCardVal();
                        return true;
                    }
                }
                else {
                    if (temp5.length < 3) {
                        if (temp1[0].GetCardVal() - 1 == temp2[0].GetCardVal() && temp2[0].GetCardVal() - 1 == temp3[0].GetCardVal()) {
                            this.maxCardVal = temp1[0].GetCardVal();
                            return true;
                        }
                        else if (temp2[0].GetCardVal() - 1 == temp3[0].GetCardVal() && temp3[0].GetCardVal() - 1 == temp4[0].GetCardVal()) {
                            this.maxCardVal = temp2[0].GetCardVal();
                            return true;
                        }
                    }
                    else {
                        if (temp1[0].GetCardVal() - 1 == temp2[0].GetCardVal() && temp2[0].GetCardVal() - 1 == temp3[0].GetCardVal()) {
                            this.maxCardVal = temp1[0].GetCardVal();
                            return true;
                        }
                        else if (temp2[0].GetCardVal() - 1 == temp3[0].GetCardVal() && temp3[0].GetCardVal() - 1 == temp4[0].GetCardVal()) {
                            this.maxCardVal = temp2[0].GetCardVal();
                            return true;
                        }
                        else if (temp3[0].GetCardVal() - 1 == temp4[0].GetCardVal() && temp4[0].GetCardVal() - 1 == temp5[0].GetCardVal()) {
                            this.maxCardVal = temp3[0].GetCardVal();
                            return true;
                        }
                    }
                }
                return false;
            };
            //判断4连飞机
            PaodekuaiMgr.prototype.isFourFeiJi = function (cards) {
                if (cards.length != this.allCards.length)
                    return false;
                var copyCards = [];
                this.copyTalbe(cards, copyCards);
                //先干掉2
                var exist = true;
                while (exist) {
                    if (copyCards[0].GetCardVal() == 14) {
                        copyCards.splice(0, 1);
                    }
                    if (copyCards[0].GetCardVal() == 14) {
                        exist = true;
                    }
                    else {
                        exist = false;
                    }
                }
                //需要至少3个3张
                var temp1 = this.findSomeCards(copyCards, 3);
                if (temp1.length < 3)
                    return false;
                var temp2 = this.findSomeCards(copyCards, 3);
                if (temp2.length < 3)
                    return false;
                var temp3 = this.findSomeCards(copyCards, 3);
                if (temp3.length < 3)
                    return false;
                var temp4 = this.findSomeCards(copyCards, 3);
                if (temp4.length < 3)
                    return false;
                //剩下的牌里看下有没有3张
                var temp5 = this.findSomeCards(copyCards, 3);
                if (temp5.length < 3) {
                    if (temp1[0].GetCardVal() - 1 == temp2[0].GetCardVal() && temp2[0].GetCardVal() - 1 == temp3[0].GetCardVal()
                        && temp3[0].GetCardVal() - 1 == temp4[0].GetCardVal()) {
                        this.maxCardVal = temp1[0].GetCardVal();
                        return true;
                    }
                }
                else {
                    if (temp1[0].GetCardVal() - 1 == temp2[0].GetCardVal() && temp2[0].GetCardVal() - 1 == temp3[0].GetCardVal()
                        && temp3[0].GetCardVal() - 1 == temp4[0].GetCardVal()) {
                        this.maxCardVal = temp1[0].GetCardVal();
                        return true;
                    }
                    else if (temp2[0].GetCardVal() - 1 == temp3[0].GetCardVal() && temp3[0].GetCardVal() - 1 == temp4[0].GetCardVal()
                        && temp4[0].GetCardVal() - 1 == temp5[0].GetCardVal()) {
                        this.maxCardVal = temp2[0].GetCardVal();
                        return true;
                    }
                }
                return false;
            };
            //找出一堆牌里N张一样的牌
            PaodekuaiMgr.prototype.findSomeCards = function (cards, count) {
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
            PaodekuaiMgr.prototype.copyTalbe = function (temp1, temp2) {
                for (var i = 0; i < temp1.length; i++) {
                    temp2[i] = temp1[i];
                }
            };
            //检查一堆牌是什么类型的
            PaodekuaiMgr.prototype.checkCardsType = function (cards) {
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
                result = this.isSanDaiEr(cards);
                if (result)
                    return 3 /* CARDS_TYPE_SAN */; //3带2
                result = this.isShunZi(cards);
                if (result)
                    return 4 /* CARDS_TYPE_SHUN */; //顺子
                result = this.isBomb(cards);
                if (result)
                    return 5 /* CARDS_TYPE_BOMB */; //炸弹
                result = this.isLianDui(cards);
                if (result)
                    return 6 /* CARDS_TYPE_LIANDUI */; //连对
                result = this.isTwoFeiJi(cards);
                if (result)
                    return 7 /* CARDS_TYPE_TWO_FEIJI */; //两连飞机
                result = this.isSiDaiSan(cards);
                if (result)
                    return 8 /* CARDS_TYPE_SIDAISAN */; //四带三
                result = this.isThreeFeiJi(cards);
                if (result)
                    return 9 /* CARDS_TYPE_THREE_FEIJI */; //三连飞机
                result = this.isFourFeiJi(cards);
                if (result)
                    return 10 /* CARDS_TYPE_FOUR_FEIJI */; //四连飞机
                return 0 /* CARDS_TYPE_WUXIAO */;
            };
            //从手牌里找所有顺子
            PaodekuaiMgr.prototype.findShunZi = function (cards) {
                var temp = [];
                var copyCards = [];
                this.copyTalbe(cards, copyCards);
                if (copyCards.length < this.shunziCount)
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
                if (temp2[0].GetCardVal() == 14) {
                    temp2.splice(0, 1);
                }
                while (temp2.length >= this.shunziCount) {
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
                    if (szTemp.length >= this.shunziCount) {
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
            PaodekuaiMgr.prototype.findDuiZi = function (cards) {
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
            PaodekuaiMgr.prototype.findSanZhang = function (cards) {
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
            PaodekuaiMgr.prototype.findBomb = function (cards) {
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
            //从手牌里去找下想要找的牌型
            PaodekuaiMgr.prototype.promptBtn = function (cards, type, length, max_val, is_move) {
                var allCardsArray = [];
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
                else if (type == 2 /* CARDS_TYPE_DUI */) { //找出对子，只要2张以上都可以
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
                else if (type == 3 /* CARDS_TYPE_SAN */) { //找出所有的3根
                    var temp1 = this.findSanZhang(copyCards);
                    if (temp1.length > 0) {
                        for (var i = 0; i < temp1.length; i++) {
                            if (temp1[i][0].GetCardVal() > max_val && temp1[i].length == 3) {
                                var temp = temp1[i];
                                allCardsArray.push(temp);
                            }
                        }
                    }
                    if (allCardsArray.length > 0) { //有了3根，再配2根
                        var dz_temp = [];
                        var allCards = [];
                        this.copyTalbe(cards, allCards);
                        this.SortCardsSmall(allCards);
                        if (allCards.length <= 5) { //手牌5张以下，还带有3张的，就全选了
                            for (var i = 0; i < allCardsArray.length; i++) {
                                allCardsArray[i] = allCards;
                            }
                        }
                        else {
                            var temp2 = this.findDuiZi(allCards);
                            //先把对子以上的牌拼成一个数组
                            var dz_temp_1 = allCards;
                            var new_temp = [];
                            for (var i = 0; i < temp2.length; i++) {
                                new_temp = new_temp.concat(temp2[i]);
                            }
                            //开始找牌做单张用
                            for (var i = 0; i < new_temp.length; i++) {
                                dz_temp_1.push(new_temp[i]);
                            }
                            //拼下牌
                            for (var k = 0; k < allCardsArray.length; k++) { //找下和3张不一样的单张
                                for (var i = 0; i < dz_temp_1.length; i++) {
                                    var val = dz_temp_1[i].GetCardVal();
                                    if (val != allCardsArray[k][0].GetCardVal()) {
                                        allCardsArray[k].push(dz_temp_1[i]);
                                        if (allCardsArray[k].length == 5) {
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                else if (type == 5 /* CARDS_TYPE_BOMB */) { //找出所有炸弹
                    var temp1 = this.findBomb(copyCards);
                    if (temp1.length > 0) {
                        for (var i = 0; i < temp1.length; i++) {
                            if (temp1[i][0].GetCardVal() > max_val) {
                                allCardsArray.push(temp1[i]);
                            }
                        }
                    }
                    //还有个3A炸弹
                    if (this.bombA == 1) {
                        var allCards = [];
                        this.copyTalbe(cards, allCards);
                        var temp2 = this.findSanZhang(allCards);
                        if (temp2.length > 0) {
                            if (temp2[0][0].GetCardVal() == 13) { //是3个A
                                allCardsArray.push(temp2[0]);
                            }
                        }
                    }
                }
                else if (type == 8 /* CARDS_TYPE_SIDAISAN */) { //四带三
                    var temp1 = this.findBomb(copyCards);
                    if (temp1.length > 0) {
                        for (var i = 0; i < temp1.length; i++) {
                            allCardsArray.push(temp1[i]);
                        }
                    }
                    //还有个3A炸弹
                    if (this.bombA == 1) {
                        var allCards = [];
                        this.copyTalbe(cards, allCards);
                        var temp2 = this.findSanZhang(allCards);
                        if (temp2.length > 0) {
                            if (temp2[0][0].GetCardVal() == 13) { //是3个A
                                allCardsArray.push(temp2[0]);
                            }
                        }
                    }
                }
                else if (type == 6 /* CARDS_TYPE_LIANDUI */) { //找下连对
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
                else if (type == 4 /* CARDS_TYPE_SHUN */) { //找顺子
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
                else if (type == 7 /* CARDS_TYPE_TWO_FEIJI */) { //两连飞机，找出3张去判断
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
                                    if (st_temp.length == 6) {
                                        allCardsArray.push(st_temp);
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    if (allCardsArray.length > 0) { //有了3根，再配2根
                        var allCards = [];
                        this.copyTalbe(cards, allCards);
                        this.SortCardsSmall(allCards);
                        if (allCards.length <= 10) { //手牌10张以下，就全选了
                            for (var i = 0; i < allCardsArray.length; i++) {
                                allCardsArray[i] = allCards;
                            }
                        }
                        else {
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
                            //拼下牌
                            for (var k = 0; k < allCardsArray.length; k++) { //找下和飞机不一样的单张
                                for (var i = 0; i < dz_temp.length; i++) {
                                    var val = dz_temp[i].GetCardVal();
                                    if (val != allCardsArray[k][0].GetCardVal() && val != allCardsArray[k][3].GetCardVal()) {
                                        allCardsArray[k].push(dz_temp[i]);
                                        if (allCardsArray[k].length == 10) {
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                else if (type == 9 /* CARDS_TYPE_THREE_FEIJI */) { //3连飞机
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
                                    if (st_temp.length == 9) {
                                        allCardsArray.push(st_temp);
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    if (allCardsArray.length > 0) { //有了3根，再配2根
                        var allCards = [];
                        this.copyTalbe(cards, allCards);
                        this.SortCardsSmall(allCards);
                        if (allCards.length <= 15) { //手牌15张以下，就全选了
                            for (var i = 0; i < allCardsArray.length; i++) {
                                allCardsArray[i] = allCards;
                            }
                        }
                        else {
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
                            //拼下牌
                            for (var k = 0; k < allCardsArray.length; k++) { //找下和飞机不一样的单张
                                for (var i = 0; i < dz_temp.length; i++) {
                                    var val = dz_temp[i].GetCardVal();
                                    if (val != allCardsArray[k][0].GetCardVal() && val != allCardsArray[k][3].GetCardVal() && val != allCardsArray[k][6].GetCardVal()) {
                                        allCardsArray[k].push(dz_temp[i]);
                                        if (allCardsArray[k].length == 15) {
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                //没找到牌，那看下自己有没炸弹
                if (!is_move) { //滑动选牌的话，就不需要再判断炸弹了
                    if (type != 5 /* CARDS_TYPE_BOMB */) {
                        var allCards = [];
                        this.copyTalbe(cards, allCards);
                        this.SortCardsSmall(allCards);
                        var temp1 = this.findBomb(allCards);
                        if (temp1.length > 0) {
                            allCardsArray.push(temp1[0]);
                        }
                        //还有个3A炸弹
                        if (this.bombA == 1) {
                            var newCards = [];
                            this.copyTalbe(cards, newCards);
                            var temp1_1 = this.findSanZhang(newCards);
                            if (temp1_1.length > 0) {
                                if (temp1_1[0][0].GetCardVal() == 13) { //是3个A
                                    allCardsArray.push(temp1_1[0]);
                                }
                            }
                        }
                    }
                }
                return allCardsArray;
            };
            //充值弹框
            PaodekuaiMgr.prototype.alert = function (str, ecb, ccb, isOnlyOK, okSkin) {
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
            PaodekuaiMgr.prototype.createObj = function () {
                var card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, PaodekuaiData);
                card.pos = new Vector2(965, 80);
                return card;
            };
            PaodekuaiMgr.prototype.sort = function () {
                for (var i = 0; i < this._cards.length; i++) {
                    var card = this._cards[i];
                    this.allCards.push(card);
                }
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
            PaodekuaiMgr.prototype.SortCards = function (cards) {
                if (!cards)
                    return;
                cards.sort(function (a, b) {
                    return a.Compare(b, true);
                });
            };
            //对牌进行排序,小到大
            PaodekuaiMgr.prototype.SortCardsSmall = function (cards) {
                if (!cards)
                    return;
                cards.sort(function (a, b) {
                    return b.Compare(a, true);
                });
            };
            //发牌
            PaodekuaiMgr.prototype.fapai = function () {
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
                            if (cardIndex == _this.allCards.length)
                                _this.event(PaodekuaiMgr.DEAL_CARDS);
                        });
                        count++;
                    }
                };
                var this_1 = this;
                for (var i = 0; i < this.allCards.length; i++) {
                    _loop_1(i);
                }
            };
            //重连发牌
            PaodekuaiMgr.prototype.refapai = function () {
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
            //出牌
            PaodekuaiMgr.prototype.playingCard = function (seat, cards) {
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
                    var temp = [];
                    if (this._totalUnitCount == 3) {
                        temp = this._playCardsPos2;
                    }
                    else if (this._totalUnitCount == 4) {
                        temp = this._playCardsPos1;
                    }
                    var posIdx = (seat - mainIdx + this._totalUnitCount) % this._totalUnitCount;
                    for (var i = 0; i < cards.length; i++) {
                        var posX = temp[posIdx - 1][0] + i * temp[posIdx - 1][2];
                        var posY = temp[posIdx - 1][1];
                        var card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, PaodekuaiData);
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
            PaodekuaiMgr.prototype.showCards = function (seat, cards) {
                if (cards.length < 1)
                    return;
                var mainUnit = this._game.sceneObjectMgr.mainUnit;
                if (!mainUnit)
                    return;
                var mainIdx = mainUnit.GetIndex();
                if (mainIdx == 0)
                    return;
                this.clearPlayingCard(seat);
                var temp = [];
                if (this._totalUnitCount == 3) {
                    temp = this._playCardsPos2;
                }
                else if (this._totalUnitCount == 4) {
                    temp = this._playCardsPos1;
                }
                var posIdx = (seat - mainIdx + this._totalUnitCount) % this._totalUnitCount;
                for (var i = 0; i < cards.length; i++) {
                    var posX = temp[posIdx - 1][0] + i * temp[posIdx - 1][2];
                    var posY = temp[posIdx - 1][1];
                    var card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, PaodekuaiData);
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
            PaodekuaiMgr.prototype.getCardsPosTemp = function (val, shoupai) {
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
            PaodekuaiMgr.prototype.showMainCards = function () {
                for (var i = 0; i < this.allCards.length; i++) {
                    var card = this.allCards[i];
                    if (card) {
                        card.fanpai();
                    }
                }
                this.isShowCards = true;
            };
            //从手牌中删除
            PaodekuaiMgr.prototype.delCard = function (card) {
                for (var i = 0; i < this.allCards.length; i++) {
                    if (this.allCards[i].GetVal() == card.GetVal()) {
                        this.allCards.splice(i, 1);
                        break;
                    }
                }
            };
            //整理下手牌
            PaodekuaiMgr.prototype.tidyCard = function () {
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
            // 清理指定玩家卡牌对象
            PaodekuaiMgr.prototype.clearCardObject = function () {
                var _this = this;
                this._game.sceneObjectMgr.ForEachObject(function (obj) {
                    if (obj instanceof PaodekuaiData) {
                        _this._game.sceneObjectMgr.clearOfflineObject(obj);
                    }
                });
            };
            //清除打出去的卡牌
            PaodekuaiMgr.prototype.clearPlayingCard = function (seat) {
                for (var i = 0; i < this._cardsTemp[seat - 1].length; i++) {
                    var card = this._cardsTemp[seat - 1][i];
                    if (card) {
                        this._game.sceneObjectMgr.clearOfflineObject(card);
                    }
                }
                this._cardsTemp[seat - 1] = [];
            };
            //重置数据
            PaodekuaiMgr.prototype.resetData = function () {
                this._cardsTemp = [[], [], [], []];
                this._isReDealCard = false;
                this.isShowCards = false;
                this.allCards = [];
                this.clearCardObject();
            };
            PaodekuaiMgr.MAPINFO_OFFLINE = "PaodekuaiMgr.MAPINFO_OFFLINE"; //假精灵
            PaodekuaiMgr.DEAL_CARDS = "PaodekuaiMgr.DEAL_CARDS"; //发牌结束
            PaodekuaiMgr.WXSHARE_TITLE = "跑得快]房号:{0}"; // 分享标题
            PaodekuaiMgr.WXSHARE_DESC = "开好房喽,就等你们一起来玩跑得快啦!晚了位置就没了哟~"; // 分享内容
            return PaodekuaiMgr;
        }(gamecomponent.managers.PlayingCardMgrBase));
        manager.PaodekuaiMgr = PaodekuaiMgr;
    })(manager = gamepaodekuai.manager || (gamepaodekuai.manager = {}));
})(gamepaodekuai || (gamepaodekuai = {}));
//# sourceMappingURL=PaodekuaiMgr.js.map