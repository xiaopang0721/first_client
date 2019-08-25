/**
* name 发牌管理器
*/
var gamecomponent;
(function (gamecomponent) {
    var managers;
    (function (managers) {
        var PlayCardMgr = /** @class */ (function () {
            function PlayCardMgr(g) {
                this.max_card = 3;
                this._cards = [];
                this._game = g;
            }
            PlayCardMgr.prototype.init = function () {
                for (var index = 0; index < 1; index++) {
                    var card = this._game.sceneObjectMgr.createOfflineObject(gamecomponent.SceneRoot.CARD_MARK, PlayingChip);
                    card.pos = new Vector2(640, 360);
                    card.size = 0.5;
                    card["_val"] = "1000000";
                    this._cards.push(card);
                }
            };
            PlayCardMgr.prototype.update = function (diff) {
                this._cards.forEach(function (card) {
                    card && card.update(diff);
                });
            };
            return PlayCardMgr;
        }());
        managers.PlayCardMgr = PlayCardMgr;
    })(managers = gamecomponent.managers || (gamecomponent.managers = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=PlayCardMgr.js.map