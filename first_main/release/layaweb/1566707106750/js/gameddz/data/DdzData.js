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
    var data;
    (function (data) {
        var DdzData = /** @class */ (function (_super) {
            __extends(DdzData, _super);
            function DdzData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._isPlaying = false; //是不是打出的牌
                _this._endCardPos = [515, 10, 85]; //三张底牌的位置
                return _this;
            }
            DdzData.prototype.myOwner = function (index, seat, cardIndex) {
                this._mainPlayerIndex = index;
                this._ownerIdx = seat;
                this._cardIndex = cardIndex;
                this.scaleX = -1;
                this.size = 0.2;
            };
            DdzData.prototype.Analyze = function () {
                if (this._val == 52) {
                    this._card_val = 99;
                    this._card_color = 3;
                }
                else if (this._val == 53) {
                    this._card_val = 100;
                    this._card_color = 4;
                }
                else {
                    this._card_val = this._val % 13;
                    if (this._card_val == 0)
                        this._card_val = 13;
                    if (this._card_val == 1)
                        this._card_val = 14;
                    this._card_color = Math.floor(this._val / 13);
                }
            };
            DdzData.prototype.fapai = function () {
                this.toggleEnable = false;
                this.isFinalPos = true;
                this.size = 0.8;
                this.time_interval = 500;
                this.fanpai();
            };
            DdzData.prototype.mingpai = function (posX, posY, isSort) {
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.toggleEnable = true;
                this.targe_pos.x = posX;
                this.targe_pos.y = posY;
                this.time_interval = 200;
                this.isFinalPos = false;
                if (isSort) {
                    this.size = 1.1;
                }
                else {
                    Laya.Tween.to(this, { size: 1.1 }, this.time_interval);
                }
                if (!this.pos)
                    return;
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
            };
            DdzData.prototype.playingcard = function (posX, posY) {
                this.size = 0.7;
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.toggleEnable = false;
                this.isShow = true;
                this.scaleX = 1;
                this.isFinalPos = true;
                this.targe_pos.x = posX;
                this.targe_pos.y = posY;
                this.time_interval = 150;
                this.disable = false;
                if (!this.pos)
                    return;
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
            };
            DdzData.prototype.otherPlayCard = function () {
                this.size = 0.7;
                this.isFinalPos = true;
                this._isPlaying = true;
                this.isShow = true;
                this.toggleEnable = false;
                this.disable = false;
            };
            //重连发牌
            DdzData.prototype.refapai = function (posX, posY) {
                this.size = 1.1;
                this.pos.x = posX;
                this.pos.y = posY;
                this.isShow = true;
                this.scaleX = 1;
                this.isFinalPos = false;
                this.toggleEnable = true;
            };
            DdzData.prototype.fanpai = function () {
                _super.prototype.fanpai.call(this);
            };
            return DdzData;
        }(gamecomponent.object.PlayingPuKeCard));
        data.DdzData = DdzData;
    })(data = gameddz.data || (gameddz.data = {}));
})(gameddz || (gameddz = {}));
//# sourceMappingURL=DdzData.js.map