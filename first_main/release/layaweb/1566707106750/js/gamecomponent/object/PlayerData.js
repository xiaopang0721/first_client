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
var gamecomponent;
(function (gamecomponent) {
    var object;
    (function (object) {
        /**
         * 玩家
         */
        var PlayerData = /** @class */ (function (_super) {
            __extends(PlayerData, _super);
            function PlayerData(v) {
                var _this = _super.call(this) || this;
                _this.NAN = 1; //性别男
                _this.NV = 2; //性别女
                _this.WU = 3; //性别未知
                _this._game = v.game;
                _this._playerInfo = new PlayerInfo();
                _this._sceneObjectMgr = v;
                _this._after_update = _this.onUpdate;
                return _this;
            }
            Object.defineProperty(PlayerData.prototype, "sceneObjectMgr", {
                /**
                 * 场景对象管理器
                 */
                get: function () {
                    return this._sceneObjectMgr;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PlayerData.prototype, "playerInfo", {
                get: function () {
                    return this._playerInfo;
                },
                enumerable: true,
                configurable: true
            });
            PlayerData.prototype.onUpdate = function (flags, mask, strmask) {
                var isNew = flags & core.obj.OBJ_OPT_NEW;
                var ness = 0;
                if (isNew || mask.GetBit(PlayerData.PLAYERDATA_INT_BYTE0)) {
                    this._playerInfo.sex = this.GetSex();
                    ness++;
                }
                if (isNew || mask.GetBit(PlayerData.PLAYERDATA_INT_BIT0)) {
                    this._playerInfo.isguest = this.IsIsGuest();
                    this._playerInfo.isqmdl = this.IsIsQmdl();
                    this._playerInfo.islxqd = this.IsIsLxqd();
                    this._playerInfo.isxylp = this.IsIsXylp();
                    this._playerInfo.is_can_qd = this.IsIsShowRedQianDao();
                    this._playerInfo.is_can_lp = this.IsIsShowRedLunPan();
                    this._playerInfo.is_can_qmdl_lq = this.IsIsShowRedQMDL();
                    this._playerInfo.is_show_alipay = this.IsIsShowAlipay();
                    this._playerInfo.is_show_bank = this.IsIsShowBank();
                    this._playerInfo.is_wx_open = this.IsIsOpenWX();
                    this._playerInfo.is_outer_jump = this.IsIsOuterJump();
                    this._playerInfo.is_need_bank = this.IsIsNeedBank();
                    this._playerInfo.is_can_first_get = this.IsIsFirstPay();
                    this._playerInfo.is_get_fitst_pay = this.IsIsFisrtPayGive();
                    if (!WebConfig.isSingleEnter) {
                        localSetItem("is_wx_open", this._playerInfo.is_wx_open ? "true" : "false");
                    }
                    else {
                        localRemoveItem("is_wx_open");
                    }
                    ness++;
                }
                if (isNew || mask.GetBit(PlayerData.PLAYERDATA_INT_AGENCY_SHAREREWARD)) {
                    this._playerInfo.agency_sharereward = this.GetAgencySharereward();
                    ness++;
                }
                if (isNew || mask.GetBit(PlayerData.PLAYERDATA_INT_AGENCY_SHAREMINPAY)) {
                    this._playerInfo.agency_shareminpay = this.GetAgencyShareminpay();
                    ness++;
                }
                if (isNew || mask.GetBit(PlayerData.PLAYERDATA_INT_DAYSHAREGIVEMONEY)) {
                    this._playerInfo.daysharegivemoney = this.GetDaysharegivemoney();
                    ness++;
                }
                if (isNew || mask.GetBit(PlayerData.PLAYERDATA_INT_LAST_SHARE_TIME)) {
                    this._playerInfo.last_share_time = this.GetLastShareTime();
                    this._playerInfo.isCanFenXiang = !gamecomponent.Sync.getIsToday(this._playerInfo.last_share_time, this._game.sceneGame.sync.serverTimeBys);
                    ness++;
                }
                if (isNew || mask.GetBit(PlayerData.PLAYERDATA_INT_MAP_LEVEL)) {
                    this._playerInfo.map_level = this.GetMapLevel();
                    WebConfig.game_type = this._playerInfo.map_level;
                    ness++;
                }
                if (isNew || strmask.GetBit(PlayerData.PLAYERDATA_STR_GAME_ID)) {
                    this._playerInfo.gameid = this.GetGameId();
                    if (isNew) {
                        WebConfig.isConnected = this._playerInfo.gameid ? true : false;
                    }
                    else {
                        WebConfig.isConnected = false;
                        this._sceneObjectMgr.CallchangeStory();
                    }
                    this._sceneObjectMgr.event(SceneObjectMgr.__EVENT_PLAYER_INFO_GAME_ID);
                    logd("=======================WebConfig.isConnected", WebConfig.isConnected, isNew, "========", this._playerInfo.gameid);
                    ness++;
                }
                if (isNew || strmask.GetBit(PlayerData.PLAYERDATA_STR_WX_UNION_ID)) {
                    this._playerInfo.wx_unionid = this.GetWxUnionId();
                    ness++;
                }
                if (isNew || mask.GetBit(PlayerData.PLAYERDATA_INT_MONEY)) {
                    //下标值获取到后除以100，得到带两位小数点的金币数，GetMoney下标值只有这里能用
                    this._playerInfo.money = EnumToString.getPointBackNum(this.GetMoney() / 100, 2);
                    ness++;
                }
                if (isNew || mask.GetBit(PlayerData.PLAYERDATA_INT_SAVE_BOX_MONEY)) {
                    this._playerInfo.savaBoxMoney = EnumToString.getPointBackNum(this.GetSaveBoxMoney() / 100, 2);
                    ness++;
                }
                if (isNew || mask.GetBit(PlayerData.PLAYERDATA_INT_SAVE_BOX_RATE)) {
                    this._playerInfo.savebox_rate = this.GetSaveBoxRate() * 0.00001;
                    ness++;
                }
                if (isNew || mask.GetBit(PlayerData.PLAYERDATA_INT_SAVE_BOX_MIN)) {
                    this._playerInfo.savebox_min = this.GetSaveBoxMin();
                    ness++;
                }
                if (isNew || mask.GetBit(PlayerData.PLAYERDATA_INT_SAVE_BOX_LAST_PROFIT)) {
                    this._playerInfo.savebox_last_profit = this.GetSaveBoxLastProfit();
                    ness++;
                }
                if (isNew || mask.GetBit(PlayerData.PLAYERDATA_INT_SAVE_BOX_TOTAL_PROFIT)) {
                    this._playerInfo.savebox_total_profit = this.GetSaveBoxTotalProfit();
                    ness++;
                }
                if (isNew || mask.GetBit(PlayerData.PLAYERDATA_INT_TOTAL_RECHARGE)) {
                    this._playerInfo.total_recharge = this.GetTotalRecharge();
                    this._sceneObjectMgr.event(SceneObjectMgr.EVENT_VIP_INFO_UPDATE, 2);
                    ness++;
                }
                if (isNew || mask.GetBit(PlayerData.PLAYERDATA_INT_VIP_LEVEL)) {
                    this._playerInfo.vip_level = this.GetVipLevel();
                    this._sceneObjectMgr.event(SceneObjectMgr.EVENT_VIP_INFO_UPDATE, 1);
                    ness++;
                }
                if (isNew || mask.GetBit(PlayerData.PLAYERDATA_INT_BYTE1)) {
                    this._playerInfo.sign_in_days = this.GetSignInDays();
                    ness++;
                }
                if (isNew || mask.GetBit(PlayerData.PLAYERDATA_INT_LAST_SIGN_IN_TIME)) {
                    this._playerInfo.last_signin_time = this.GetLastSignInTime();
                    ness++;
                }
                if (isNew || mask.GetBit(PlayerData.PLAYERDATA_INT_YESTERDAY_SCORE)) {
                    this._playerInfo.total_turn_point = this.GetYesterdayScore();
                    ness++;
                }
                if (isNew || mask.GetBit(PlayerData.PLAYERDATA_INT_TODAY_SCORE)) {
                    this._playerInfo.today_score = this.GetTodayScore();
                    ness++;
                }
                if (isNew || strmask.GetBit(PlayerData.PLAYERDATA_STR_ACCOUNT)) {
                    this._playerInfo.account = this.GetAccount();
                    ness++;
                }
                if (isNew || strmask.GetBit(PlayerData.PLAYERDATA_STR_NICK_NAME)) {
                    this._playerInfo.nickname = this.GetNickName();
                    ness++;
                }
                if (isNew || mask.GetBit(PlayerData.PLAYERDATA_INT_BIT0)) {
                    this._playerInfo.isNicknameChanged = this.IsNicknameChanged();
                    ness++;
                }
                if (isNew || strmask.GetBit(PlayerData.PLAYERDATA_STR_INVITE_CODE)) {
                    this._playerInfo.invite_code = this.GetInviteCode();
                    WebConfig.ewmbaseUrl = WebConfig.gwUrl + "/qrcode?urlsize=9&urltext=" + encodeURIComponent(WebConfig.gwUrl) + "?invitecode=";
                    WebConfig.ewmUrl = WebConfig.ewmbaseUrl + this._playerInfo.invite_code;
                    WebConfig.downLoadUrl = WebConfig.gwUrl + "?invitecode=" + this._playerInfo.invite_code;
                    ness++;
                }
                if (isNew || strmask.GetBit(PlayerData.PLAYERDATA_STR_MOBILE)) {
                    this._playerInfo.mobile = this.GetMobile();
                    localSetItem("mac_mobile", this._playerInfo.mobile);
                    ness++;
                }
                if (isNew || strmask.GetBit(PlayerData.PLAYERDATA_STR_REAL_NAME)) {
                    this._playerInfo.real_name = this.GetRealName();
                    ness++;
                }
                if (isNew || strmask.GetBit(PlayerData.PLAYERDATA_STR_USER_ID)) {
                    this._playerInfo.userid = this.GetUserId();
                    ness++;
                }
                if (isNew || strmask.GetBit(PlayerData.PLAYERDATA_STR_USER_NAME)) {
                    this._playerInfo.username = this.GetUserName();
                    localSetItem("mac_username", this._playerInfo.username);
                    ness++;
                }
                if (isNew || strmask.GetBit(PlayerData.PLAYERDATA_STR_HEAD_IMG)) {
                    this._playerInfo.headimg = this.GetHeadImg();
                    ness++;
                }
                if (isNew || strmask.GetBit(PlayerData.PLAYERDATA_STR_HEAD_KUANG_IMG)) {
                    this._playerInfo.headKuang = this.GetHeadKuangImg();
                    ness++;
                }
                if (isNew || strmask.GetBit(PlayerData.PLAYERDATA_STR_YING_HANG_KA)) {
                    this._playerInfo.yinhangka = this.GetYingHangKa();
                    ness++;
                }
                if (isNew || strmask.GetBit(PlayerData.PLAYERDATA_STR_ZHI_FU_BAO)) {
                    this._playerInfo.zhifubao = this.GetZhiFuBao();
                    ness++;
                }
                if (isNew || strmask.GetBit(PlayerData.PLAYERDATA_STR_SESSION_KEY)) {
                    this._playerInfo.sessionKey = this.GetSessionKey();
                    localSetItem("session_key", this._playerInfo.sessionKey);
                    logd("==============session_key", this._playerInfo.sessionKey);
                    ness++;
                }
                if (isNew || strmask.GetBit(PlayerData.PLAYERDATA_STR_ANDROID)) {
                    this._playerInfo.app_android = this.GetAndroid();
                    ness++;
                }
                if (isNew || strmask.GetBit(PlayerData.PLAYERDATA_STR_IOS)) {
                    this._playerInfo.app_ios = this.GetIos();
                    ness++;
                }
                if (isNew || strmask.GetBit(PlayerData.PLAYERDATA_STR_LOGIN_POP_UP)) {
                    this._playerInfo.login_popup = this.GetLoginPopUp();
                    ness++;
                }
                if (isNew || strmask.GetBit(PlayerData.PLAYERDATA_STR_CARD_CONFIG)) {
                    this._playerInfo.card_config = this.GetCardConfig();
                    ness++;
                }
                if (isNew || strmask.GetBit(PlayerData.PLAYERDATA_STR_VIP_RECEIVED)) {
                    this._playerInfo.vip_received = this.GetVipReceived();
                    this._sceneObjectMgr.event(SceneObjectMgr.EVENT_VIP_INFO_UPDATE, 3);
                    ness++;
                }
                if (isNew || strmask.GetBit(PlayerData.PLAYERDATA_STR_GW_URL)) {
                    this._playerInfo.gwUrl = this.GetGwUrl();
                    WebConfig.gwUrl = this._playerInfo.gwUrl;
                    WebConfig.ewmbaseUrl = WebConfig.gwUrl + "/qrcode?urlsize=9&urltext=" + encodeURIComponent(WebConfig.gwUrl) + "?invitecode=";
                    WebConfig.ewmUrl = WebConfig.ewmbaseUrl + this._playerInfo.invite_code;
                    WebConfig.downLoadUrl = WebConfig.gwUrl + "?invitecode=" + this._playerInfo.invite_code;
                    ness++;
                }
                if (isNew || strmask.GetBit(PlayerData.PLAYERDATA_STR_GAME_LIST)) {
                    this._playerInfo.gameList = this.GetGameList();
                    logd("游戏列表:", this._playerInfo.gameList);
                    try {
                        this._playerInfo.gameList && (WebConfig.gamelist = JSON.parse(this._playerInfo.gameList));
                    }
                    catch (error) {
                        logd("解析失败", this._playerInfo.gameList);
                        localSetItem("client_error", Vesion["_defaultVesion"] + "  " + WebConfig.gwUrl + ": gameList" + (this._playerInfo.gameList));
                    }
                    if (WebConfig.gamelist) {
                        window["DatingPageDef"].initPageDef();
                        this._game.sceneGame.sceneObjectMgr.event(SceneObjectMgr.EVENT_GAMELIST_UPDATE);
                        ness++;
                    }
                }
                if (isNew || mask.GetBit(PlayerData.PLAYERDATA_INT_DE_ZHOU_MONEY)) {
                    this._playerInfo.dezhouMoney = EnumToString.getPointBackNum(this.GetDeZhouMoney() / 100, 2);
                    this._sceneObjectMgr.event(SceneObjectMgr.EVENT_DEZHOU_MONEY_UPDATE);
                    ness++;
                }
                if (isNew || mask.GetBit(PlayerData.PLAYERDATA_INT_VALID_QI_FU_END_TIME)) {
                    this._playerInfo.qifu_endtime = this.GetValidQiFuEndTime();
                    ness++;
                }
                if (isNew || mask.GetBit(PlayerData.PLAYERDATA_INT_VALID_QI_FU_TYPE)) {
                    this._playerInfo.qifu_type = this.GetValidQiFuType();
                    ness++;
                }
                if (isNew || mask.GetBit(PlayerData.PLAYERDATA_INT_DRAWING_REQUIRED_FLOW)) {
                    this._playerInfo.drawingRequiredFlow = this.GetDrawingRequiredFlow();
                    ness++;
                }
                if (isNew || mask.GetBit(PlayerData.PLAYERDATA_INT_DRAWING_CURRENT_FLOW)) {
                    this._playerInfo.drawingCurrentFlow = this.GetDrawingCurrentFlow();
                    ness++;
                }
                if (isNew || mask.GetBits(PlayerData.PLAYERDATA_INT_PLAYER_CARD_VALUE, 20)) {
                    if (this._playerInfo.cards && this._playerInfo.cards.length) {
                        this._playerInfo.cards = [];
                    }
                    for (var i = 0; i < 20; i++) {
                        var car_value = this.GetPlayerCardValue(i);
                        if (car_value)
                            this._playerInfo.cards[i] = car_value;
                    }
                }
                for (var key in this._playerInfo) { //兼容下
                    if (this._playerInfo.hasOwnProperty(key)) {
                        if (!WebConfig.info)
                            WebConfig.info = {};
                        WebConfig.info[key] = this._playerInfo[key];
                    }
                }
                if (ness) {
                    this._sceneObjectMgr.event(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE);
                }
                if (isNew) {
                    this._sceneObjectMgr.event(SceneObjectMgr.___MAIN_PLAYER_CHANGE);
                }
            };
            PlayerData.prototype.update = function (diff) {
            };
            return PlayerData;
        }(game.object.PlayerDataField));
        object.PlayerData = PlayerData;
        var PlayerInfo = /** @class */ (function () {
            function PlayerInfo() {
                this.map_level = 0; //地图级别
                this.invite_code = ""; //邀请码
                this.cards = []; //玩家牌
            }
            return PlayerInfo;
        }());
        object.PlayerInfo = PlayerInfo;
        var FreeStyle = /** @class */ (function () {
            function FreeStyle() {
            }
            FreeStyle.setData = function (value) {
                try {
                    this.__data = JSON.parse(value);
                }
                catch (error) {
                    logd('parse FreeStyle fail');
                }
            };
            FreeStyle.getData = function (type, key) {
                if (!this.__data || !this.__data[type])
                    return null;
                if (!key) {
                    return this.__data[type];
                }
                if (!this.__data[type][key])
                    return null;
                var data = this.__data[type][key];
                var count = 0;
                if (Object.getOwnPropertyNames(data).length == 1) {
                    for (var mykey in data) {
                        if (data.hasOwnProperty(mykey)) {
                            return data[mykey];
                        }
                    }
                }
                return data;
            };
            return FreeStyle;
        }());
        object.FreeStyle = FreeStyle;
    })(object = gamecomponent.object || (gamecomponent.object = {}));
})(gamecomponent || (gamecomponent = {}));
//# sourceMappingURL=PlayerData.js.map