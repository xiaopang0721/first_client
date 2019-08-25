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
* 21点-筹码
*/
var gameblackjack;
(function (gameblackjack) {
    var data;
    (function (data) {
        var BlackjackChip = /** @class */ (function (_super) {
            __extends(BlackjackChip, _super);
            function BlackjackChip() {
                var _this = _super.call(this) || this;
                _this._unitPos = {
                    0: [630, 480],
                    1: [340, 430],
                    2: [130, 300],
                    3: [1130, 300],
                    4: [920, 430],
                };
                _this._chipTargePos = {
                    10: [640, 415],
                    20: [390, 375],
                    30: [210, 280],
                    40: [1075, 280],
                    50: [895, 380],
                };
                _this._chipTargePosPart = {
                    10: [620, 415],
                    11: [660, 415],
                    20: [373, 370],
                    21: [409, 390],
                    30: [195, 268],
                    31: [225, 297],
                    40: [1055, 290],
                    41: [1090, 263],
                    50: [867, 390],
                    51: [911, 373],
                };
                _this._chipPos = {
                    0: [640, 268],
                    1: [500, 249],
                    2: [420, 215],
                    3: [860, 215],
                    4: [780, 249],
                };
                _this._chipType = [[10, 0], [25, 1], [55, 2], [70, 3], [85, 4], [100, 5]]; //筹码类型
                _this._bankerChipPos = [640, 140]; //庄家筹码位置
                return _this;
            }
            BlackjackChip.prototype.setData = function (optType, posId, mainIdx, index, isPart, ownerIdx, val) {
                this.size = 0.3;
                this._chipIdx = index;
                this._posIndex = posId;
                this.sortScore = -index - 5;
                this._isPart = isPart;
                this._ownerIdx = ownerIdx;
                this._mainIdx = mainIdx;
                this._optType = optType;
                this._val = "t";
                this.rotateAngle = 0;
                var type;
                for (var i = 0; i < this._chipType.length; i++) {
                    if (val <= this._chipType[i][0]) {
                        type = this._chipType[i][1];
                        break;
                    }
                }
                this._type = type;
            };
            //发筹码
            BlackjackChip.prototype.sendChip = function () {
                var idx = (this._ownerIdx - this._mainIdx + 5) % 5;
                this.pos = new Vector2(this._unitPos[idx][0], this._unitPos[idx][1]);
                var temp = this._chipTargePos;
                if (this._isPart) {
                    temp = this._chipTargePosPart;
                }
                var index = (this._posIndex - this._mainIdx * 10 + 50) % 50 + 10;
                var posX = temp[index][0];
                var posY = temp[index][1] - this._chipIdx * 2;
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.targe_pos.x = posX;
                this.targe_pos.y = posY;
                _super.prototype.sendChip.call(this);
            };
            //发保险筹码
            BlackjackChip.prototype.sendinsuranceChip = function () {
                var index = (this._posIndex - this._mainIdx + 5) % 5;
                var posX = this._chipPos[index][0];
                var posY = this._chipPos[index][1] - this._chipIdx * 2;
                var idx = (this._ownerIdx - this._mainIdx + 5) % 5;
                this.pos = new Vector2(this._unitPos[idx][0], this._unitPos[idx][1]);
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                // this.isFinalPos = false;
                this.targe_pos.x = posX;
                this.targe_pos.y = posY;
                if (!this.pos)
                    return;
                Laya.Tween.clearAll(this.pos);
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, 500, Laya.Ease.circInOut);
            };
            //分牌移动筹码
            BlackjackChip.prototype.moveChip = function (index) {
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.isFinalPos = false;
                var idx = (index - this._mainIdx * 10 + 50) % 50 + 10;
                this.targe_pos.x = this._chipTargePosPart[idx][0];
                this.targe_pos.y = this._chipTargePosPart[idx][1] - this._chipIdx * 2;
                if (!this.pos)
                    return;
                Laya.Tween.clearAll(this.pos);
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, 500, Laya.Ease.circInOut);
            };
            //结算的时候飘筹码
            BlackjackChip.prototype.loseFlyChip = function (posId) {
                if (posId != this._posIndex)
                    return;
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.isFinalPos = false;
                this.targe_pos.x = this._bankerChipPos[0];
                this.targe_pos.y = this._bankerChipPos[1];
                if (!this.pos)
                    return;
                Laya.Tween.clearAll(this.pos);
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, 1500, Laya.Ease.circInOut, Handler.create(this, this.setvisible));
            };
            BlackjackChip.prototype.winFlyChip = function (posId, isPart) {
                if (posId != this._posIndex)
                    return;
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                // this.isFinalPos = false;
                this.pos = new Vector2(this._bankerChipPos[0], this._bankerChipPos[1]);
                var temp = this._chipTargePos;
                if (isPart) {
                    temp = this._chipTargePosPart;
                }
                var idx = (posId - this._mainIdx * 10 + 50) % 50 + 10;
                this.targe_pos.x = temp[idx][0];
                this.targe_pos.y = temp[idx][1] - this._chipIdx * 2;
                if (!this.pos)
                    return;
                Laya.Tween.clearAll(this.pos);
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, 1500, Laya.Ease.circInOut);
            };
            BlackjackChip.prototype.flyAllChip = function (posId, ownerIdx) {
                if (posId != this._posIndex)
                    return;
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.isFinalPos = false;
                var idx = (this._ownerIdx - this._mainIdx + 5) % 5;
                this.targe_pos.x = this._unitPos[idx][0];
                this.targe_pos.y = this._unitPos[idx][1];
                if (!this.pos)
                    return;
                Laya.Tween.clearAll(this.pos);
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, 1000, Laya.Ease.backIn, Handler.create(this, this.setvisible));
            };
            //保险飘筹码
            BlackjackChip.prototype.loseBaoXianChip = function () {
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.isFinalPos = false;
                this.targe_pos.x = this._bankerChipPos[0];
                this.targe_pos.y = this._bankerChipPos[1];
                if (!this.pos)
                    return;
                Laya.Tween.clearAll(this.pos);
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, 1500, Laya.Ease.circInOut, Handler.create(this, this.setvisible));
            };
            BlackjackChip.prototype.sendHjkChip = function () {
                var index = (this._posIndex - this._mainIdx + 5) % 5;
                var posX = this._chipPos[index][0];
                var posY = this._chipPos[index][1] - this._chipIdx * 2;
                var idx = (this._ownerIdx - this._mainIdx + 5) % 5;
                this.pos = new Vector2(this._bankerChipPos[0], this._bankerChipPos[1]);
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.isFinalPos = false;
                this.targe_pos.x = posX;
                this.targe_pos.y = posY;
                if (!this.pos)
                    return;
                Laya.Tween.clearAll(this.pos);
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, 500, Laya.Ease.circInOut);
            };
            //隐藏筹码
            BlackjackChip.prototype.setvisible = function () {
                this.visible = false;
            };
            //画筹码，断线重连用
            BlackjackChip.prototype.drawChip = function () {
                var temp = this._chipTargePos;
                if (this._isPart) {
                    temp = this._chipTargePosPart;
                }
                var index = (this._posIndex - this._mainIdx * 10 + 50) % 50 + 10;
                var posX = temp[index][0];
                var posY = temp[index][1];
                this.pos = new Vector2(posX, posY);
            };
            return BlackjackChip;
        }(gamecomponent.object.PlayingChip));
        data.BlackjackChip = BlackjackChip;
    })(data = gameblackjack.data || (gameblackjack.data = {}));
})(gameblackjack || (gameblackjack = {}));
//# sourceMappingURL=BlackjackChip.js.map