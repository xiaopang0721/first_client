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
* 十三水
*/
var gameshisanshui;
(function (gameshisanshui) {
    var data;
    (function (data) {
        var ShisanshuiData = /** @class */ (function (_super) {
            __extends(ShisanshuiData, _super);
            function ShisanshuiData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._posTemp = [[525, 550, 26], [1087, 309, -26], [725, 4, -26], [155, 309, 26]]; //初始牌的位置
                _this._cardsPosTemp = {
                    0: [[598, 518], [633, 516], [654, 518], [562, 591], [599, 578], [632, 577], [656, 578], [687, 591], [562, 651], [599, 638], [632, 637], [656, 638], [687, 651]],
                    1: [[963, 312], [998, 310], [1019, 312], [927, 385], [964, 372], [997, 371], [1021, 372], [1052, 385], [927, 445], [964, 432], [997, 431], [1021, 432], [1052, 445]],
                    2: [[598, 68], [633, 66], [654, 68], [562, 141], [599, 128], [632, 127], [656, 128], [687, 141], [562, 201], [599, 188], [632, 187], [656, 188], [687, 201]],
                    3: [[226, 312], [261, 310], [282, 312], [190, 385], [227, 372], [260, 371], [284, 372], [315, 385], [190, 445], [227, 432], [260, 431], [284, 432], [315, 445]],
                };
                _this._cardsRotaTionTemp = [-16, -1, 16, -31, -15, 1, 15, 31, -31, -15, 3, 15, 31]; //出牌后各个位置各张牌的旋转角度
                _this._playingTemp = [205, 635, 70]; //拼牌界面牌的位置
                _this._cardTypePos = {
                    1: [[419, 191], [469, 191], [519, 191]],
                    2: [[369, 291], [419, 291], [469, 291], [519, 291], [569, 291]],
                    3: [[329, 389], [399, 389], [469, 389], [539, 389], [609, 389]]
                };
                _this._isPinPai = false; //是不是拼牌界面的
                return _this;
            }
            ShisanshuiData.prototype.myOwner = function (index, seat, cardIndex) {
                this.size = 0.8;
                this._mainPlayerIndex = index;
                this._ownerIdx = seat;
                this._cardIndex = cardIndex;
                this.scaleX = -1;
            };
            ShisanshuiData.prototype.Analyze = function () {
                this._card_val = this._val % 13;
                if (this._card_val == 0)
                    this._card_val = 13;
                this._card_color = Math.floor(this._val / 13);
            };
            ShisanshuiData.prototype.fapai = function () {
                var idx = this._ownerIdx;
                var posIdx = (idx - this._mainPlayerIndex + 4) % 4;
                var posX = this._posTemp[posIdx][0];
                var posY = this._posTemp[posIdx][1];
                var space = this._posTemp[posIdx][2];
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.targe_pos.x = posX + this.index * space;
                this.targe_pos.y = posY + 80;
                this.time_interval = 400;
                if (!this.pos)
                    return;
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
            };
            ShisanshuiData.prototype.pinpai = function () {
                var posX = this._playingTemp[0];
                var posY = this._playingTemp[1];
                var space = this._playingTemp[2];
                this.size = 1;
                this.isUIShow = true;
                this.pos.x = posX + this.index * space;
                this.pos.y = posY;
                this.fanpai();
            };
            ShisanshuiData.prototype.xuanpai = function () {
                var posX = this._cardTypePos[this._cardType][this.index][0];
                var posY = this._cardTypePos[this._cardType][this.index][1];
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.isFinalPos = false;
                this.targe_pos.x = posX;
                this.targe_pos.y = posY;
                this.time_interval = 400;
                if (!this.pos)
                    return;
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
            };
            //出牌，改变牌的位置
            ShisanshuiData.prototype.playingcard = function () {
                var idx = this._ownerIdx;
                var posIdx = (idx - this._mainPlayerIndex + 4) % 4;
                var posX = this._cardsPosTemp[posIdx][this._cardIndex][0];
                var posY = this._cardsPosTemp[posIdx][this._cardIndex][1];
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.isFinalPos = false;
                this.targe_pos.x = posX;
                this.targe_pos.y = posY;
                this.rotateAngle = this._cardsRotaTionTemp[this._cardIndex] * Math.PI / 180;
                this.time_interval = 400;
                if (!this.pos)
                    return;
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
            };
            //重连发牌
            ShisanshuiData.prototype.refapai = function () {
                var idx = this._ownerIdx;
                var posIdx = (idx - this._mainPlayerIndex + 4) % 4;
                var posX = this._posTemp[posIdx][0];
                var posY = this._posTemp[posIdx][1];
                var space = this._posTemp[posIdx][2];
                this.pos.x = posX + this.index * space;
                this.pos.y = posY;
            };
            ShisanshuiData.prototype.fanpai = function () {
                _super.prototype.fanpai.call(this);
            };
            return ShisanshuiData;
        }(gamecomponent.object.PlayingPoker));
        data.ShisanshuiData = ShisanshuiData;
    })(data = gameshisanshui.data || (gameshisanshui.data = {}));
})(gameshisanshui || (gameshisanshui = {}));
//# sourceMappingURL=ShisanshuiData.js.map