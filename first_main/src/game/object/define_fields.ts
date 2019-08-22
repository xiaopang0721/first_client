module game.object {
////////////////////////全局定义///////////////////////////////////
export class GlobalDef{
public static TYPE_GLOBAL:string = "global" //世界对象guid前缀
public static TYPE_PLAYER:string = "playerdata" //玩家对象guid前缀
public static TYPE_CLIENTDATA:string = "clientdata" //远程存储对象guid前缀
public static TYPE_MAP:string = "m" //地图对象guid前缀
public static TYPE_UNIT:string = "u" //unit对象guid前缀
public static LOG_TYPE_CREATE:string = "create" //角色创建时间
public static LOG_TYPE_LOGIN_OUT_TIME:string = "login_out_time" //最后在线时间
public static kLiveStatusDie:number = 0 //挂掉的状态
public static kLiveStatusOk:number = 1 //活活着
public static kLiveStandby:number = 2 //待机状态
public static kMapStateNormal:number = 0 //正常状态
public static kMapStateBoss:number = 1 //BOSS来袭
public static kMapStateFishGroup:number = 2 //鱼潮来袭
public static kGroupTypLittle:number = 1 //鱼群类型-小鱼
public static kGroupTypMiddle:number = 2 //鱼群类型-中鱼
public static kGroupTypLarge:number = 3 //鱼群类型-大鱼
public static kGroupTypYWDJ:number = 4 //鱼群类型-一网打尽
public static kGroupTypDian:number = 5 //鱼群类型-电鱼
public static kGroupTypShouling:number = 6 //鱼群类型-首领鱼
public static kGroupTypYuChao:number = 7 //鱼群类型-鱼潮来袭
public static kGroupTypBoss:number = 8 //鱼群类型-Boss鱼
public static kGroupTypHuaFei:number = 9 //鱼群类型-话费鱼
}


////////////////////////////////////////////////////////////////
   //GlobalObject def
////////////////////////////////////////////////////////////////
export class GlobalObjectField extends core.obj.GuidObject{
   // define

   // int field

   // string field


//////////////////////////////////////str function

}////////////////////////////////////////////////////////////////
   //PlayerData def
////////////////////////////////////////////////////////////////
export class PlayerDataField extends core.obj.GuidObject{
   // define
	public static MONEY_TYPE_GOLD:number = 1 //元宝
	public static ONLINE_STATUS_OFFLINE:number = 0 //离线状态
	public static ONLINE_STATUS_ONLINE:number = 1 //在线状态

   // int field
	public static PLAYERDATA_INT_REG_TIME:number = 0 //玩家创建时间
	public static PLAYERDATA_INT_LAST_LOGIN_TIME:number = 1 //最后一次登录时间
	public static PLAYERDATA_INT_ONLINE_TIME:number = 2 //在线时长，分钟
	public static PLAYERDATA_INT_ZERO_RESET_TIME:number = 3 //0点重置时间
	public static PLAYERDATA_INT_BYTE0:number = 4 //0.性别
	public static PLAYERDATA_INT_BIT0:number = 5 //0.是否游客,1.是否可以修改昵称,2.全民代理,3.连续签到,4.幸运轮盘,5.签到小红点,6.轮盘小红点,7.全面代理小红点,8.支付宝,9.IsShowBank,10.微信开关,11.在线客服是否外跳,12.今日是否分享,13.是否需要判断绑定银行卡,14.是否领取绑定赠送,15.是否已提交过取款订单,16.是否已提交过汇款订单,17.首充小红点,18.是否已领取首充奖励
	public static PLAYERDATA_INT_MONEY:number = 6 //金币
	public static PLAYERDATA_INT_PLAYER_CARD_VALUE:number = 7 //玩家的牌
	public static PLAYERDATA_INT_SAVE_BOX_MONEY:number = 27 //余额宝金钱
	public static PLAYERDATA_INT_BIND_SEND_MONEY:number = 28 //绑定送钱
	public static PLAYERDATA_INT_LAST_SHARE_TIME:number = 29 //上次分享时间
	public static PLAYERDATA_INT_SAVE_BOX_MIN:number = 30 //产生利息最低金额
	public static PLAYERDATA_INT_SAVE_BOX_RATE:number = 31 //余额宝利率
	public static PLAYERDATA_INT_SGJ_COUNT:number = 32 //0 bar中奖次数， 1 77中奖次数， 2 星星中奖次数， 3 西瓜中奖次数
	public static PLAYERDATA_INT_DE_ZHOU_MONEY:number = 33 //德州带入的金币
	public static PLAYERDATA_INT_AGENCY_SHAREREWARD:number = 34 //分享20块钱
	public static PLAYERDATA_INT_AGENCY_SHAREMINPAY:number = 35 //分享20块钱需要的充值金额
	public static PLAYERDATA_INT_DAYSHAREGIVEMONEY:number = 36 //分享1块钱
	public static PLAYERDATA_INT_BANK_RATE:number = 37 //银行卡优惠比例
	public static PLAYERDATA_INT_ALIPAY_RATE:number = 38 //支付宝优惠比例
	public static PLAYERDATA_INT_WX_RATE:number = 39 //微信优惠比例
	public static PLAYERDATA_INT_MAP_LEVEL:number = 40 //玩家所在地图级别
	public static PLAYERDATA_INT_SAVE_BOX_LAST_PROFIT:number = 41 //余额宝昨日收益
	public static PLAYERDATA_INT_SAVE_BOX_TOTAL_PROFIT:number = 42 //余额宝累计收益
	public static PLAYERDATA_INT_VALID_QI_FU_END_TIME:number = 43 //有效祈福的结束时间
	public static PLAYERDATA_INT_VALID_QI_FU_TYPE:number = 44 //有效祈福类型
	public static PLAYERDATA_INT_PLAYER_UNIT16:number = 45 //0.房卡免费次数 1.玩家房卡房主次数
	public static PLAYERDATA_INT_TOTAL_RECHARGE:number = 46 //玩家累计充值金额
	public static PLAYERDATA_INT_VIP_LEVEL:number = 47 //玩家vip等级
	public static PLAYERDATA_INT_LAST_SIGN_IN_TIME:number = 48 //上次签到时间
	public static PLAYERDATA_INT_BYTE1:number = 49 //0.连续签到天数 1.今日取款次数
	public static PLAYERDATA_INT_EFFECTIVE_SAVE_MONEY:number = 50 //有效的余额宝存款
	public static PLAYERDATA_INT_YESTERDAY_SAVE_MONEY:number = 51 //前一天存款
	public static PLAYERDATA_INT_TODAY_SAVE_MONEY:number = 52 //当天存款
	public static PLAYERDATA_INT_YESTERDAY_SCORE:number = 53 //昨日轮盘积分
	public static PLAYERDATA_INT_TODAY_SCORE:number = 54 //今日轮盘积分
	public static PLAYERDATA_INT_VIP_AWARD_RECEIVED:number = 55 //vip等级奖励领取标识
	public static PLAYERDATA_INT_TOTAL_YONG_JIN:number = 56 //佣金历史总奖励
	public static PLAYERDATA_INT_CAN_TAKE_YONG_JIN:number = 57 //可提取佣金
	public static PLAYERDATA_INT_QI_FU_END_TIME:number = 58 //不同祈福的结束时间
	public static PLAYERDATA_INT_DRAWING_REQUIRED_FLOW:number = 64 //取款所需打码
	public static PLAYERDATA_INT_DRAWING_CURRENT_FLOW:number = 65 //当前已打码
	public static PLAYERDATA_INT_TODAY_DRAWING_NUM:number = 66 //今日玩家取款次数
	public static PLAYERDATA_INT_DRAW_MONEY_ERROR_C_D:number = 67 //玩家取款密码错误冻结时间或间隔时间
	public static PLAYERDATA_INT_FIRST_PAY_MONEY:number = 68 //首充金额

   // string field
	public static PLAYERDATA_STR_ACCOUNT:number = 0 //账号信息
	public static PLAYERDATA_STR_SESSION_KEY:number = 1 //登录秘钥
	public static PLAYERDATA_STR_NAME:number = 2 //玩家名字
	public static PLAYERDATA_STR_CREATE_I_P:number = 3 //玩家创建角色IP
	public static PLAYERDATA_STR_INVITE_CODE:number = 4 //邀请码
	public static PLAYERDATA_STR_MOBILE:number = 5 //手机
	public static PLAYERDATA_STR_REAL_NAME:number = 6 //真实姓名
	public static PLAYERDATA_STR_USER_ID:number = 7 //用户id
	public static PLAYERDATA_STR_HEAD_IMG:number = 8 //头像
	public static PLAYERDATA_STR_YING_HANG_KA:number = 9 //银行卡
	public static PLAYERDATA_STR_ZHI_FU_BAO:number = 10 //支付宝
	public static PLAYERDATA_STR_GAME_ID:number = 11 //游戏id
	public static PLAYERDATA_STR_WX_UNION_ID:number = 12 //微信id
	public static PLAYERDATA_STR_NICK_NAME:number = 13 //昵称
	public static PLAYERDATA_STR_USER_NAME:number = 14 //用户名
	public static PLAYERDATA_STR_GAME_LIST:number = 15 //游戏列表
	public static PLAYERDATA_STR_ANDROID:number = 16 //App安卓版本
	public static PLAYERDATA_STR_IOS:number = 17 //App苹果版本
	public static PLAYERDATA_STR_GW_URL:number = 18 //官网地址
	public static PLAYERDATA_STR_LOGIN_POP_UP:number = 19 //登录弹窗信息
	public static PLAYERDATA_STR_CARD_CONFIG:number = 20 //房卡配置
	public static PLAYERDATA_STR_VIP_RECEIVED:number = 21 //vip奖励已领取标识
	public static PLAYERDATA_STR_TAKE_PASSWORD:number = 22 //取款密码
	public static PLAYERDATA_STR_HEAD_KUANG_IMG:number = 23 //头像框


	public GetRegTime():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_REG_TIME);
    }


	public GetLastLoginTime():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_LAST_LOGIN_TIME);
    }


	public GetOnlineTime():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_ONLINE_TIME);
    }


	public GetZeroResetTime():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_ZERO_RESET_TIME);
    }


	public GetByte0(offset:number):number{
       return this.GetByte(PlayerDataField.PLAYERDATA_INT_BYTE0, offset);
    }



	//性别
	public GetSex():number{
       return this.GetByte(PlayerDataField.PLAYERDATA_INT_BYTE0,0);
    }
	public SetSex(val:number):void{
       this.SetByte(PlayerDataField.PLAYERDATA_INT_BYTE0,0, val);
    }


	//取款错误次数
	public GetDrawMoneyErrorTimes():number{
       return this.GetByte(PlayerDataField.PLAYERDATA_INT_BYTE0,1);
    }
	public SetDrawMoneyErrorTimes(val:number):void{
       this.SetByte(PlayerDataField.PLAYERDATA_INT_BYTE0,1, val);
    }

	public GetBit0(offset:number):boolean{
       return this.GetBit(PlayerDataField.PLAYERDATA_INT_BIT0, offset);
    }



	//是否游客
	public IsIsGuest():boolean{
       return this.GetBit(PlayerDataField.PLAYERDATA_INT_BIT0,0);
    }


	//是否可以修改昵称
	public IsNicknameChanged():boolean{
       return this.GetBit(PlayerDataField.PLAYERDATA_INT_BIT0,1);
    }


	//全民代理
	public IsIsQmdl():boolean{
       return this.GetBit(PlayerDataField.PLAYERDATA_INT_BIT0,2);
    }


	//连续签到
	public IsIsLxqd ():boolean{
       return this.GetBit(PlayerDataField.PLAYERDATA_INT_BIT0,3);
    }


	//幸运轮盘
	public IsIsXylp():boolean{
       return this.GetBit(PlayerDataField.PLAYERDATA_INT_BIT0,4);
    }


	//签到小红点
	public IsIsShowRedQianDao():boolean{
       return this.GetBit(PlayerDataField.PLAYERDATA_INT_BIT0,5);
    }


	//轮盘小红点
	public IsIsShowRedLunPan():boolean{
       return this.GetBit(PlayerDataField.PLAYERDATA_INT_BIT0,6);
    }


	//全面代理小红点
	public IsIsShowRedQMDL():boolean{
       return this.GetBit(PlayerDataField.PLAYERDATA_INT_BIT0,7);
    }


	//支付宝
	public IsIsShowAlipay():boolean{
       return this.GetBit(PlayerDataField.PLAYERDATA_INT_BIT0,8);
    }


	//银行卡
	public IsIsShowBank():boolean{
       return this.GetBit(PlayerDataField.PLAYERDATA_INT_BIT0,9);
    }


	//微信开关
	public IsIsOpenWX():boolean{
       return this.GetBit(PlayerDataField.PLAYERDATA_INT_BIT0,10);
    }


	//在线客服是否外跳
	public IsIsOuterJump():boolean{
       return this.GetBit(PlayerDataField.PLAYERDATA_INT_BIT0,11);
    }


	//今日是否分享
	public IsIsShare():boolean{
       return this.GetBit(PlayerDataField.PLAYERDATA_INT_BIT0,12);
    }


	//是否需要判断绑定银行卡
	public IsIsNeedBank():boolean{
       return this.GetBit(PlayerDataField.PLAYERDATA_INT_BIT0,13);
    }


	//是否领取绑定赠送
	public IsGetBindReward():boolean{
       return this.GetBit(PlayerDataField.PLAYERDATA_INT_BIT0,14);
    }


	//是否已提交过取款订单
	public IsIsDrawing():boolean{
       return this.GetBit(PlayerDataField.PLAYERDATA_INT_BIT0,15);
    }


	//是否已提交过汇款订单
	public IsIsRemiting():boolean{
       return this.GetBit(PlayerDataField.PLAYERDATA_INT_BIT0,16);
    }


	//首充小红点
	public IsIsFirstPay():boolean{
       return this.GetBit(PlayerDataField.PLAYERDATA_INT_BIT0,17);
    }


	//是否已领取首充奖励
	public IsIsFisrtPayGive():boolean{
       return this.GetBit(PlayerDataField.PLAYERDATA_INT_BIT0,18);
    }

	public GetMoney():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_MONEY);
    }


	public GetPlayerCardValue(index:number):number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_PLAYER_CARD_VALUE+index);
    }


	public GetSaveBoxMoney():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_SAVE_BOX_MONEY);
    }


	public GetBindSendMoney():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_BIND_SEND_MONEY);
    }


	public GetLastShareTime():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_LAST_SHARE_TIME);
    }


	public GetSaveBoxMin():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_SAVE_BOX_MIN);
    }


	public GetSaveBoxRate():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_SAVE_BOX_RATE);
    }


	public GetSgjCount(offset:number):number{
       return this.GetByte(PlayerDataField.PLAYERDATA_INT_SGJ_COUNT, offset);
    }



	//bar中奖次数，
	public GetBarCount():number{
       return this.GetByte(PlayerDataField.PLAYERDATA_INT_SGJ_COUNT,0);
    }
	public SetBarCount(val:number):void{
       this.SetByte(PlayerDataField.PLAYERDATA_INT_SGJ_COUNT,0, val);
    }


	//77中奖次数，
	public GetQiQiCount():number{
       return this.GetByte(PlayerDataField.PLAYERDATA_INT_SGJ_COUNT,1);
    }
	public SetQiQiCount(val:number):void{
       this.SetByte(PlayerDataField.PLAYERDATA_INT_SGJ_COUNT,1, val);
    }


	//星星中奖次数，
	public GetXingXingCount():number{
       return this.GetByte(PlayerDataField.PLAYERDATA_INT_SGJ_COUNT,2);
    }
	public SetXingXingCount(val:number):void{
       this.SetByte(PlayerDataField.PLAYERDATA_INT_SGJ_COUNT,2, val);
    }


	//西瓜中奖次数
	public GetXiGuaCount():number{
       return this.GetByte(PlayerDataField.PLAYERDATA_INT_SGJ_COUNT,3);
    }
	public SetXiGuaCount(val:number):void{
       this.SetByte(PlayerDataField.PLAYERDATA_INT_SGJ_COUNT,3, val);
    }

	public GetDeZhouMoney():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_DE_ZHOU_MONEY);
    }


	public GetAgencySharereward():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_AGENCY_SHAREREWARD);
    }


	public GetAgencyShareminpay():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_AGENCY_SHAREMINPAY);
    }


	public GetDaysharegivemoney():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_DAYSHAREGIVEMONEY);
    }


	public GetBankRate():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_BANK_RATE);
    }


	public GetAlipayRate():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_ALIPAY_RATE);
    }


	public GetWxRate():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_WX_RATE);
    }


	public GetMapLevel():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_MAP_LEVEL);
    }


	public GetSaveBoxLastProfit():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_SAVE_BOX_LAST_PROFIT);
    }


	public GetSaveBoxTotalProfit():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_SAVE_BOX_TOTAL_PROFIT);
    }


	public GetValidQiFuEndTime():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_VALID_QI_FU_END_TIME);
    }


	public GetValidQiFuType():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_VALID_QI_FU_TYPE);
    }


	public GetPlayerUnit16(offset:number):number{
       return this.GetInt16(PlayerDataField.PLAYERDATA_INT_PLAYER_UNIT16, offset);
    }



	//房卡免费次数
	public GetCardFreeCount():number{
       return this.GetInt16(PlayerDataField.PLAYERDATA_INT_PLAYER_UNIT16,0);
    }
	public SetCardFreeCount(val:number):void{
       this.SetInt16(PlayerDataField.PLAYERDATA_INT_PLAYER_UNIT16,0, val);
    }


	//玩家房卡房主次数
	public GetCardCreateCount():number{
       return this.GetInt16(PlayerDataField.PLAYERDATA_INT_PLAYER_UNIT16,1);
    }
	public SetCardCreateCount(val:number):void{
       this.SetInt16(PlayerDataField.PLAYERDATA_INT_PLAYER_UNIT16,1, val);
    }

	public GetTotalRecharge():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_TOTAL_RECHARGE);
    }


	public GetVipLevel():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_VIP_LEVEL);
    }


	public GetLastSignInTime():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_LAST_SIGN_IN_TIME);
    }


	public GetByte1(offset:number):number{
       return this.GetByte(PlayerDataField.PLAYERDATA_INT_BYTE1, offset);
    }



	//连续签到天数
	public GetSignInDays():number{
       return this.GetByte(PlayerDataField.PLAYERDATA_INT_BYTE1,0);
    }
	public SetSignInDays(val:number):void{
       this.SetByte(PlayerDataField.PLAYERDATA_INT_BYTE1,0, val);
    }


	//今日已取款次数
	public GetTodayDrawginCount():number{
       return this.GetByte(PlayerDataField.PLAYERDATA_INT_BYTE1,1);
    }
	public SetTodayDrawginCount(val:number):void{
       this.SetByte(PlayerDataField.PLAYERDATA_INT_BYTE1,1, val);
    }

	public GetEffectiveSaveMoney():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_EFFECTIVE_SAVE_MONEY);
    }


	public GetYesterdaySaveMoney():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_YESTERDAY_SAVE_MONEY);
    }


	public GetTodaySaveMoney():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_TODAY_SAVE_MONEY);
    }


	public GetYesterdayScore():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_YESTERDAY_SCORE);
    }


	public GetTodayScore():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_TODAY_SCORE);
    }


	public GetVipAwardReceived(offset:number):boolean{
       return this.GetBit(PlayerDataField.PLAYERDATA_INT_VIP_AWARD_RECEIVED, offset);
    }


	public GetTotalYongJin():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_TOTAL_YONG_JIN);
    }


	public GetCanTakeYongJin():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_CAN_TAKE_YONG_JIN);
    }


	public GetQiFuEndTime(index:number):number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_QI_FU_END_TIME+index);
    }


	public GetDrawingRequiredFlow():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_DRAWING_REQUIRED_FLOW);
    }


	public GetDrawingCurrentFlow():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_DRAWING_CURRENT_FLOW);
    }


	public GetTodayDrawingNum():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_TODAY_DRAWING_NUM);
    }


	public GetDrawMoneyErrorCD():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_DRAW_MONEY_ERROR_C_D);
    }


	public GetFirstPayMoney():number{
       return this.GetInt32(PlayerDataField.PLAYERDATA_INT_FIRST_PAY_MONEY);
    }


//////////////////////////////////////str function

	public GetAccount():string{
       return this.GetStr(PlayerDataField.PLAYERDATA_STR_ACCOUNT);
    }


	public GetSessionKey():string{
       return this.GetStr(PlayerDataField.PLAYERDATA_STR_SESSION_KEY);
    }


	public GetName():string{
       return this.GetStr(PlayerDataField.PLAYERDATA_STR_NAME);
    }


	public GetCreateIP():string{
       return this.GetStr(PlayerDataField.PLAYERDATA_STR_CREATE_I_P);
    }


	public GetInviteCode():string{
       return this.GetStr(PlayerDataField.PLAYERDATA_STR_INVITE_CODE);
    }


	public GetMobile():string{
       return this.GetStr(PlayerDataField.PLAYERDATA_STR_MOBILE);
    }


	public GetRealName():string{
       return this.GetStr(PlayerDataField.PLAYERDATA_STR_REAL_NAME);
    }


	public GetUserId():string{
       return this.GetStr(PlayerDataField.PLAYERDATA_STR_USER_ID);
    }


	public GetHeadImg():string{
       return this.GetStr(PlayerDataField.PLAYERDATA_STR_HEAD_IMG);
    }


	public GetYingHangKa():string{
       return this.GetStr(PlayerDataField.PLAYERDATA_STR_YING_HANG_KA);
    }


	public GetZhiFuBao():string{
       return this.GetStr(PlayerDataField.PLAYERDATA_STR_ZHI_FU_BAO);
    }


	public GetGameId():string{
       return this.GetStr(PlayerDataField.PLAYERDATA_STR_GAME_ID);
    }


	public GetWxUnionId():string{
       return this.GetStr(PlayerDataField.PLAYERDATA_STR_WX_UNION_ID);
    }


	public GetNickName():string{
       return this.GetStr(PlayerDataField.PLAYERDATA_STR_NICK_NAME);
    }


	public GetUserName():string{
       return this.GetStr(PlayerDataField.PLAYERDATA_STR_USER_NAME);
    }


	public GetGameList():string{
       return this.GetStr(PlayerDataField.PLAYERDATA_STR_GAME_LIST);
    }


	public GetAndroid():string{
       return this.GetStr(PlayerDataField.PLAYERDATA_STR_ANDROID);
    }


	public GetIos():string{
       return this.GetStr(PlayerDataField.PLAYERDATA_STR_IOS);
    }


	public GetGwUrl():string{
       return this.GetStr(PlayerDataField.PLAYERDATA_STR_GW_URL);
    }


	public GetLoginPopUp():string{
       return this.GetStr(PlayerDataField.PLAYERDATA_STR_LOGIN_POP_UP);
    }


	public GetCardConfig():string{
       return this.GetStr(PlayerDataField.PLAYERDATA_STR_CARD_CONFIG);
    }


	public GetVipReceived():string{
       return this.GetStr(PlayerDataField.PLAYERDATA_STR_VIP_RECEIVED);
    }


	public GetTakePassword():string{
       return this.GetStr(PlayerDataField.PLAYERDATA_STR_TAKE_PASSWORD);
    }


	public GetHeadKuangImg():string{
       return this.GetStr(PlayerDataField.PLAYERDATA_STR_HEAD_KUANG_IMG);
    }


}////////////////////////////////////////////////////////////////
   //Map def
////////////////////////////////////////////////////////////////
export class MapField extends core.obj.GuidObject{
   // define
	public static PLAY_STATUS_NONE:number = 0 //初始化
	public static PLAY_STATUS_START:number = 1 //游戏开始
	public static MAP_STATE_READY:number = 0 //准备
	public static MAP_STATE_BEGIN:number = 1 //开始

   // int field
	public static MAP_INT_START_TIME:number = 0 //开始时间
	public static MAP_INT_END_TIME:number = 1 //结束时间
	public static MAP_INT_MAP_BYTE:number = 2 //地图Byte,0游戏运行状态,1地图状态,2下注玩家位置,3.地图级别
	public static MAP_INT_MAP_BYTE1:number = 3 //0.回合数 1.继续游戏 2.房卡付费类型 3.房卡局数
	public static MAP_INT_JACKPOT:number = 4 //奖池
	public static MAP_INT_COUNT_DOWN:number = 5 //倒计时
	public static MAP_INT_CUR_CHIP:number = 6 //当前下注筹码
	public static MAP_INT_BANKER_BENEFIT:number = 7 //庄家收益
	public static MAP_INT_MAP_UINT16:number = 8 //0.牌库数量 1.百人地图庄家座位
	public static MAP_INT_MAP_BYTE2:number = 9 //0.补牌类型 1.最后操作的玩家 2.盲注位置 3.预留
	public static MAP_INT_MONEY:number = 10 //系统庄金币
	public static MAP_INT_YU_CHAO_LAI_QI_TIME:number = 12 //鱼潮来袭时间戳
	public static MAP_INT_BATTLE_INDEX:number = 13 //战斗结构体当前使用的最后一个下标
	public static MAP_INT_BATTLE_BEING:number = 14 //战斗开始下标
	public static MAP_INT_BATTLE_END:number = 50014 //战斗结束下标

   // string field
	public static MAP_STR_INSTANCE_I_D:number = 0 //地图实例ID
	public static MAP_STR_MAP_I_D:number = 1 //地图模板ID
	public static MAP_STR_GAME_NO:number = 2 //牌局号
	public static MAP_STR_CARD_ROOM_ID:number = 3 //房卡id
	public static MAP_STR_GAME_RECORD:number = 4 //游戏最近记录
	public static MAP_STR_SZ_LIST:number = 5 //游戏上庄玩家列表
	public static MAP_STR_SEATED_LIST:number = 6 //游戏入座玩家列表
	public static MAP_STR_ROAD_RECORD:number = 7 //大路游戏记录
	public static MAP_STR_CARD_RECORD:number = 8 //游戏牌型记录
	public static MAP_STR_ROAD_POS:number = 9 //大路坐标记录
	public static MAP_STR_CARD_ROOM_EXTRA:number = 10 //房卡模式其他参数


	public GetStartTime():number{
       return this.GetUInt32(MapField.MAP_INT_START_TIME);
    }


	public GetEndTime():number{
       return this.GetUInt32(MapField.MAP_INT_END_TIME);
    }


	public GetMapByte(offset:number):number{
       return this.GetByte(MapField.MAP_INT_MAP_BYTE, offset);
    }



	//游戏运行状态
	public GetPlayState():number{
       return this.GetByte(MapField.MAP_INT_MAP_BYTE,0);
    }
	public SetPlayState(val:number):void{
       this.SetByte(MapField.MAP_INT_MAP_BYTE,0, val);
    }


	//地图状态
	public GetMapState():number{
       return this.GetByte(MapField.MAP_INT_MAP_BYTE,1);
    }
	public SetMapState(val:number):void{
       this.SetByte(MapField.MAP_INT_MAP_BYTE,1, val);
    }


	//下注玩家位置
	public GetCurrentBetPos():number{
       return this.GetByte(MapField.MAP_INT_MAP_BYTE,2);
    }
	public SetCurrentBetPos(val:number):void{
       this.SetByte(MapField.MAP_INT_MAP_BYTE,2, val);
    }


	//地图级别
	public GetMapLevel():number{
       return this.GetByte(MapField.MAP_INT_MAP_BYTE,3);
    }
	public SetMapLevel(val:number):void{
       this.SetByte(MapField.MAP_INT_MAP_BYTE,3, val);
    }

	public GetMapByte1(offset:number):number{
       return this.GetByte(MapField.MAP_INT_MAP_BYTE1, offset);
    }



	//回合数
	public GetRound():number{
       return this.GetByte(MapField.MAP_INT_MAP_BYTE1,0);
    }
	public SetRound(val:number):void{
       this.SetByte(MapField.MAP_INT_MAP_BYTE1,0, val);
    }


	//继续游戏
	public GetContinueGame():number{
       return this.GetByte(MapField.MAP_INT_MAP_BYTE1,1);
    }
	public SetContinueGame(val:number):void{
       this.SetByte(MapField.MAP_INT_MAP_BYTE1,1, val);
    }


	//房卡付费类型
	public GetCardRoomPayTyp():number{
       return this.GetByte(MapField.MAP_INT_MAP_BYTE1,2);
    }
	public SetCardRoomPayTyp(val:number):void{
       this.SetByte(MapField.MAP_INT_MAP_BYTE1,2, val);
    }


	//房卡局数
	public GetCardRoomGameNumber():number{
       return this.GetByte(MapField.MAP_INT_MAP_BYTE1,3);
    }
	public SetCardRoomGameNumber(val:number):void{
       this.SetByte(MapField.MAP_INT_MAP_BYTE1,3, val);
    }

	public GetJackpot():number{
       return this.GetUInt32(MapField.MAP_INT_JACKPOT);
    }


	public GetCountDown():number{
       return this.GetUInt32(MapField.MAP_INT_COUNT_DOWN);
    }


	public GetCurChip():number{
       return this.GetUInt32(MapField.MAP_INT_CUR_CHIP);
    }


	public GetBankerBenefit():number{
       return this.GetInt32(MapField.MAP_INT_BANKER_BENEFIT);
    }


	public GetMapUint16(offset:number):number{
       return this.GetUInt16(MapField.MAP_INT_MAP_UINT16, offset);
    }



	//牌库数量
	public GetCardPoolCount():number{
       return this.GetUInt16(MapField.MAP_INT_MAP_UINT16,0);
    }
	public SetCardPoolCount(val:number):void{
       this.SetUInt16(MapField.MAP_INT_MAP_UINT16,0, val);
    }


	//百人地图庄家座位
	public GetBankerSeat():number{
       return this.GetUInt16(MapField.MAP_INT_MAP_UINT16,1);
    }
	public SetBankerSeat(val:number):void{
       this.SetUInt16(MapField.MAP_INT_MAP_UINT16,1, val);
    }

	public GetMapByte2(offset:number):number{
       return this.GetByte(MapField.MAP_INT_MAP_BYTE2, offset);
    }



	//补牌类型
	public GetAddCardType():number{
       return this.GetByte(MapField.MAP_INT_MAP_BYTE2,0);
    }
	public SetAddCardType(val:number):void{
       this.SetByte(MapField.MAP_INT_MAP_BYTE2,0, val);
    }


	//最后操作的玩家
	public GetLastOptPlayer():number{
       return this.GetByte(MapField.MAP_INT_MAP_BYTE2,1);
    }
	public SetLastOptPlayer(val:number):void{
       this.SetByte(MapField.MAP_INT_MAP_BYTE2,1, val);
    }


	//盲注位置
	public GetMangZhuPos():number{
       return this.GetByte(MapField.MAP_INT_MAP_BYTE2,2);
    }
	public SetMangZhuPos(val:number):void{
       this.SetByte(MapField.MAP_INT_MAP_BYTE2,2, val);
    }

	public GetMoney():number{
       return this.GetDouble(MapField.MAP_INT_MONEY);
    }


	public GetYuChaoLaiQiTime():number{
       return this.GetUInt32(MapField.MAP_INT_YU_CHAO_LAI_QI_TIME);
    }


	public GetBattleIndex():number{
       return this.GetUInt32(MapField.MAP_INT_BATTLE_INDEX);
    }


	public GetBattleBeing(index:number):number{
       return this.GetUInt32(MapField.MAP_INT_BATTLE_BEING+index);
    }


	public GetBattleEnd():number{
       return this.GetUInt32(MapField.MAP_INT_BATTLE_END);
    }


//////////////////////////////////////str function

	public GetInstanceID():string{
       return this.GetStr(MapField.MAP_STR_INSTANCE_I_D);
    }


	public GetMapID():string{
       return this.GetStr(MapField.MAP_STR_MAP_I_D);
    }


	public GetGameNo():string{
       return this.GetStr(MapField.MAP_STR_GAME_NO);
    }


	public GetCardRoomId():string{
       return this.GetStr(MapField.MAP_STR_CARD_ROOM_ID);
    }


	public GetGameRecord():string{
       return this.GetStr(MapField.MAP_STR_GAME_RECORD);
    }


	public GetSzList():string{
       return this.GetStr(MapField.MAP_STR_SZ_LIST);
    }


	public GetSeatedList():string{
       return this.GetStr(MapField.MAP_STR_SEATED_LIST);
    }


	public GetRoadRecord():string{
       return this.GetStr(MapField.MAP_STR_ROAD_RECORD);
    }


	public GetCardRecord():string{
       return this.GetStr(MapField.MAP_STR_CARD_RECORD);
    }


	public GetRoadPos():string{
       return this.GetStr(MapField.MAP_STR_ROAD_POS);
    }


	public GetCardRoomExtra():string{
       return this.GetStr(MapField.MAP_STR_CARD_ROOM_EXTRA);
    }


}////////////////////////////////////////////////////////////////
   //Unit def
////////////////////////////////////////////////////////////////
export class UnitField extends core.obj.GuidObject{
   // define
	public static TYPE_ID_PLAYER:number = 1 //玩家
	public static TYPE_ID_FISH:number = 2 //鱼
	public static TYPE_ID_ROBOT:number = 3 //机器人

   // int field
	public static UNIT_INT_TYPE:number = 0 //类型
	public static UNIT_INT_MONEY:number = 1 //金币
	public static UNIT_INT_BYTE1:number = 3 //0预留,1庄闲,2特殊座位,3连庄次数
	public static UNIT_INT_BIT1:number = 4 //0.是否准备,1.是否下注,2.是否明牌,3.是否放弃,4.是否离线,5.是否比输,6.是否抢庄,7.是否拼牌,8.是否比过牌,9.是否下注完成,10.是否摊牌,11.是否过牌,12.是否同意结束,13.是否ALLIN
	public static UNIT_INT_TOTAL_CHIP:number = 5 //当前总下注筹码
	public static UNIT_INT_UINT16:number = 6 //0.座位,1.预留
	public static UNIT_INT_U160:number = 7 //鱼出生位置,鱼群的索引
	public static UNIT_INT_ENTRY:number = 8 //生物模板ID
	public static UNIT_INT_BORN_TIME:number = 9 //出生时间
	public static UNIT_INT_LOOT_MONEY:number = 10 //战利品摇出钱数
	public static UNIT_INT_KILL_BY:number = 12 //被杀的oid
	public static UNIT_INT_GROUP_I_D:number = 13 //鱼群ID
	public static UNIT_INT_LINE_I_D:number = 14 //路线ID
	public static UNIT_INT_BYTE2:number = 15 //0生存状态
	public static UNIT_INT_FLAG:number = 16 //bit位
	public static UNIT_INT_BYTE3:number = 17 //0 玩家的炮台位置, 1 是不是机器人, 2 划鱼状态 3当前炮倍数
	public static UNIT_INT_AIM_AT_I_D:number = 18 //瞄准某只鱼oid
	public static UNIT_INT_CUR_CHIP:number = 19 //当前下注筹码
	public static UNIT_INT_DE_ZHOU_MONEY:number = 20 //德州带入的金币
	public static UNIT_INT_QI_FU_END_TIME:number = 21 //祈福结束时间
	public static UNIT_INT_QI_FU_TYPE:number = 22 //祈福类型
	public static UNIT_INT_VIP_LEVEL:number = 23 //VIP等级
	public static UNIT_INT_Q_F_END_TIME:number = 24 //不同祈福的结束时间

   // string field
	public static UNIT_STR_NAME:number = 0 //玩家名字
	public static UNIT_STR_HEAD_IMG:number = 1 //头像
	public static UNIT_STR_INSTANCE_I_D:number = 2 //地图实例ID


	public GetType():number{
       return this.GetUInt32(UnitField.UNIT_INT_TYPE);
    }


	public GetMoney():number{
       return this.GetDouble(UnitField.UNIT_INT_MONEY);
    }


	public GetByte1(offset:number):number{
       return this.GetByte(UnitField.UNIT_INT_BYTE1, offset);
    }



	//预留
	public GetResever():number{
       return this.GetByte(UnitField.UNIT_INT_BYTE1,0);
    }
	public SetResever(val:number):void{
       this.SetByte(UnitField.UNIT_INT_BYTE1,0, val);
    }


	//身份，庄家或者闲家之类的
	public GetIdentity():number{
       return this.GetByte(UnitField.UNIT_INT_BYTE1,1);
    }
	public SetIdentity(val:number):void{
       this.SetByte(UnitField.UNIT_INT_BYTE1,1, val);
    }


	//特殊座位
	public GetSeat():number{
       return this.GetByte(UnitField.UNIT_INT_BYTE1,2);
    }
	public SetSeat(val:number):void{
       this.SetByte(UnitField.UNIT_INT_BYTE1,2, val);
    }


	//连庄次数
	public GetLzNum():number{
       return this.GetByte(UnitField.UNIT_INT_BYTE1,3);
    }
	public SetLzNum(val:number):void{
       this.SetByte(UnitField.UNIT_INT_BYTE1,3, val);
    }

	public GetBit1(offset:number):boolean{
       return this.GetBit(UnitField.UNIT_INT_BIT1, offset);
    }



	//是否准备
	public IsReady():boolean{
       return this.GetBit(UnitField.UNIT_INT_BIT1,0);
    }


	//是否下注
	public IsBet():boolean{
       return this.GetBit(UnitField.UNIT_INT_BIT1,1);
    }


	//是否明牌
	public IsSeeCard():boolean{
       return this.GetBit(UnitField.UNIT_INT_BIT1,2);
    }


	//是否放弃
	public IsGiveUp():boolean{
       return this.GetBit(UnitField.UNIT_INT_BIT1,3);
    }


	//是否离线
	public IsOffline():boolean{
       return this.GetBit(UnitField.UNIT_INT_BIT1,4);
    }


	//是否比输
	public IsIsDefeated():boolean{
       return this.GetBit(UnitField.UNIT_INT_BIT1,5);
    }


	//是否抢庄
	public IsBankerRate():boolean{
       return this.GetBit(UnitField.UNIT_INT_BIT1,6);
    }


	//是否拼牌
	public IsPinPai():boolean{
       return this.GetBit(UnitField.UNIT_INT_BIT1,7);
    }


	//是否比过牌
	public IsCompare():boolean{
       return this.GetBit(UnitField.UNIT_INT_BIT1,8);
    }


	//是否下注完成
	public IsBetComplete():boolean{
       return this.GetBit(UnitField.UNIT_INT_BIT1,9);
    }


	//是否摊牌
	public IsShowCards():boolean{
       return this.GetBit(UnitField.UNIT_INT_BIT1,10);
    }


	//是否过牌
	public IsPass():boolean{
       return this.GetBit(UnitField.UNIT_INT_BIT1,11);
    }


	//是否同意结束
	public IsAgreeEnd():boolean{
       return this.GetBit(UnitField.UNIT_INT_BIT1,12);
    }


	//是否ALLIN
	public IsAllIn():boolean{
       return this.GetBit(UnitField.UNIT_INT_BIT1,13);
    }

	public GetTotalChip():number{
       return this.GetUInt32(UnitField.UNIT_INT_TOTAL_CHIP);
    }


	public GetUint16(offset:number):number{
       return this.GetUInt16(UnitField.UNIT_INT_UINT16, offset);
    }



	//座位
	public GetIndex():number{
       return this.GetUInt16(UnitField.UNIT_INT_UINT16,0);
    }
	public SetIndex(val:number):void{
       this.SetUInt16(UnitField.UNIT_INT_UINT16,0, val);
    }

	public GetU160(offset:number):number{
       return this.GetUInt16(UnitField.UNIT_INT_U160, offset);
    }



	//鱼在鱼群里的位置
	public GetFishPosition():number{
       return this.GetUInt16(UnitField.UNIT_INT_U160,0);
    }
	public SetFishPosition(val:number):void{
       this.SetUInt16(UnitField.UNIT_INT_U160,0, val);
    }


	//鱼群的实例ID
	public GetTeamID():number{
       return this.GetUInt16(UnitField.UNIT_INT_U160,1);
    }
	public SetTeamID(val:number):void{
       this.SetUInt16(UnitField.UNIT_INT_U160,1, val);
    }

	public GetEntry():number{
       return this.GetUInt32(UnitField.UNIT_INT_ENTRY);
    }


	public GetBornTime():number{
       return this.GetUInt32(UnitField.UNIT_INT_BORN_TIME);
    }


	public GetLootMoney():number{
       return this.GetDouble(UnitField.UNIT_INT_LOOT_MONEY);
    }


	public GetKillBy():number{
       return this.GetUInt32(UnitField.UNIT_INT_KILL_BY);
    }


	public GetGroupID():number{
       return this.GetUInt32(UnitField.UNIT_INT_GROUP_I_D);
    }


	public GetLineID():number{
       return this.GetUInt32(UnitField.UNIT_INT_LINE_I_D);
    }


	public GetByte2(offset:number):number{
       return this.GetByte(UnitField.UNIT_INT_BYTE2, offset);
    }



	//生存状态
	public GetLiveStatus():number{
       return this.GetByte(UnitField.UNIT_INT_BYTE2,0);
    }
	public SetLiveStatus(val:number):void{
       this.SetByte(UnitField.UNIT_INT_BYTE2,0, val);
    }


	//1代表从左边出生
	public GetFromLeft():number{
       return this.GetByte(UnitField.UNIT_INT_BYTE2,1);
    }
	public SetFromLeft(val:number):void{
       this.SetByte(UnitField.UNIT_INT_BYTE2,1, val);
    }


	//倍率
	public GetRate():number{
       return this.GetByte(UnitField.UNIT_INT_BYTE2,2);
    }
	public SetRate(val:number):void{
       this.SetByte(UnitField.UNIT_INT_BYTE2,2, val);
    }


	//房主
	public GetRoomMaster():number{
       return this.GetByte(UnitField.UNIT_INT_BYTE2,3);
    }
	public SetRoomMaster(val:number):void{
       this.SetByte(UnitField.UNIT_INT_BYTE2,3, val);
    }

	public GetFlag(offset:number):boolean{
       return this.GetBit(UnitField.UNIT_INT_FLAG, offset);
    }


	public GetByte3(offset:number):number{
       return this.GetByte(UnitField.UNIT_INT_BYTE3, offset);
    }



	//玩家的炮台位置
	public GetPosition():number{
       return this.GetByte(UnitField.UNIT_INT_BYTE3,0);
    }
	public SetPosition(val:number):void{
       this.SetByte(UnitField.UNIT_INT_BYTE3,0, val);
    }


	//是不是机器人
	public GetIsRobot():number{
       return this.GetByte(UnitField.UNIT_INT_BYTE3,1);
    }
	public SetIsRobot(val:number):void{
       this.SetByte(UnitField.UNIT_INT_BYTE3,1, val);
    }


	//划鱼状态
	public GetBulletState():number{
       return this.GetByte(UnitField.UNIT_INT_BYTE3,2);
    }
	public SetBulletState(val:number):void{
       this.SetByte(UnitField.UNIT_INT_BYTE3,2, val);
    }


	//1当前炮倍数
	public GetFireLevel():number{
       return this.GetByte(UnitField.UNIT_INT_BYTE3,3);
    }
	public SetFireLevel(val:number):void{
       this.SetByte(UnitField.UNIT_INT_BYTE3,3, val);
    }

	public GetAimAtID():number{
       return this.GetUInt32(UnitField.UNIT_INT_AIM_AT_I_D);
    }


	public GetCurChip():number{
       return this.GetUInt32(UnitField.UNIT_INT_CUR_CHIP);
    }


	public GetDeZhouMoney():number{
       return this.GetUInt32(UnitField.UNIT_INT_DE_ZHOU_MONEY);
    }


	public GetQiFuEndTime():number{
       return this.GetUInt32(UnitField.UNIT_INT_QI_FU_END_TIME);
    }


	public GetQiFuType():number{
       return this.GetUInt32(UnitField.UNIT_INT_QI_FU_TYPE);
    }


	public GetVipLevel():number{
       return this.GetUInt32(UnitField.UNIT_INT_VIP_LEVEL);
    }


	public GetQFEndTime(index:number):number{
       return this.GetUInt32(UnitField.UNIT_INT_Q_F_END_TIME+index);
    }


//////////////////////////////////////str function

	public GetName():string{
       return this.GetStr(UnitField.UNIT_STR_NAME);
    }


	public GetHeadImg():string{
       return this.GetStr(UnitField.UNIT_STR_HEAD_IMG);
    }


	public GetInstanceID():string{
       return this.GetStr(UnitField.UNIT_STR_INSTANCE_I_D);
    }


}}