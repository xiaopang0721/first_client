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
    var data;
    (function (data) {
        var PaodekuaiData = /** @class */ (function (_super) {
            __extends(PaodekuaiData, _super);
            function PaodekuaiData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._cardsPosTemp = [247, 625, 45]; //自己手牌第一张牌的位置
                _this._isPlaying = false; //是不是打出的牌
                return _this;
            }
            PaodekuaiData.prototype.myOwner = function (index, seat, cardIndex) {
                this._mainPlayerIndex = index;
                this._ownerIdx = seat;
                this._cardIndex = cardIndex;
                this.scaleX = -1;
                this.size = 0.2;
            };
            PaodekuaiData.prototype.Analyze = function () {
                this._card_val = this._val % 13;
                if (this._card_val == 0)
                    this._card_val = 13;
                if (this._card_val == 1)
                    this._card_val = 14;
                this._card_color = Math.floor(this._val / 13);
            };
            PaodekuaiData.prototype.fapai = function () {
                var posX = this._cardsPosTemp[0];
                var posY = this._cardsPosTemp[1];
                var space = this._cardsPosTemp[2];
                if (!this.targe_pos) {
                    this.targe_pos = new Vector2();
                }
                this.targe_pos.x = posX + this.index * space;
                this.targe_pos.y = posY;
                this.time_interval = 400;
                this.isFinalPos = false;
                if (!this.pos)
                    return;
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
            };
            PaodekuaiData.prototype.mingpai = function (posX, posY, isSort) {
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
            PaodekuaiData.prototype.playingcard = function (posX, posY) {
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
                this.disable = false;
                this.time_interval = 150;
                if (!this.pos)
                    return;
                Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
            };
            PaodekuaiData.prototype.otherPlayCard = function () {
                this.size = 0.7;
                this.isFinalPos = true;
                this._isPlaying = true;
                this.isShow = true;
                this.toggleEnable = false;
                this.disable = false;
            };
            //重连发牌
            PaodekuaiData.prototype.refapai = function (posX, posY) {
                this.size = 1.1;
                this.pos.x = posX;
                this.pos.y = posY;
                this.isShow = true;
                this.scaleX = 1;
                this.isFinalPos = false;
                this.toggleEnable = true;
            };
            PaodekuaiData.prototype.fanpai = function () {
                _super.prototype.fanpai.call(this);
            };
            return PaodekuaiData;
        }(gamecomponent.object.PlayingPuKeCard));
        data.PaodekuaiData = PaodekuaiData;
    })(data = gamepaodekuai.data || (gamepaodekuai.data = {}));
})(gamepaodekuai || (gamepaodekuai = {}));
//# sourceMappingURL=PaodekuaiData.js.map