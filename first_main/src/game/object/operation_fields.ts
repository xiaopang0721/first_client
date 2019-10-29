//-----------------全局定义-----自动生成------------------------------
class Operation_Fields {
	//操作错误类型
	public static OPRATE_LOGIN:number = 1 //登录操作错误类型
	public static OPRATE_LOGIN_SUCCESS:number = 1 //成功
	public static OPRATE_LOGIN_TIMEOUT:number = 2 //超时
	public static OPRATE_LOGIN_SEX_ERR:number = 3 //性别错误
	public static OPRATE_LOGIN_NAME_ERR:number = 4 //昵称错误
	public static OPRATE_LOGIN_NAME_FUCK_PINGBI:number = 5 //昵称有非法词
	public static OPRATE_LOGIN_NAME_EXIST:number = 6 //昵称已存在
	public static OPRATE_LOGIN_OTHER_ONLINE:number = 7 //其他在线中
	public static OPRATE_LOGIN_RECONNECTION:number = 8 //断线重连
	public static OPRATE_LOGIN_KICK_PLAYER:number = 9 //踢下线
	public static OPRATE_LOGIN_LOCK_IP:number = 10 //封IP
	public static OPRATE_LOGIN_LOCK_INFO:number = 11 //封账号
	public static OPRATE_LOGIN_NOTICE_OTHER_LOGIN1:number = 12 //提示他人自己登陆当前账号
	public static OPRATE_LOGIN_NOTICE_OTHER_LOGIN2:number = 13 //提示自己其他人登陆当前账号
	public static OPRATE_LOGIN_NETWORK_NOT_GOOD:number = 14 //当前网络不通畅，需要重新连接
	public static OPRATE_LOGIN_MAX_PLAYER:number = 15 //非常抱歉，当前服务器人数已满，请尝试其他服务器登录吧
	public static OPRATE_LOGIN_GAME_LIST:number = 16 //游戏列表
	public static OPRATE_LOGIN_MOBILE_VF:number = 17 //手机验证码
	public static OPRATE_LOGIN_CALL_SESSION_KEY:number = 18 //sessionkey
	//操作错误类型
	public static OPRATE_CLOSE:number = 2 //关闭客户端操作错误类型
	public static OPRATE_CLOSE_LOGOUT:number = 1 //客戶端退出登录
	public static OPRATE_CLOSE_LOCK_INFO:number = 2 //封账号
	public static OPRATE_CLOSE_LOCK_IP:number = 3 //封IP
	public static OPRATE_CLOSE_KICK_PLAYER:number = 4 //踢下线
	public static OPRATE_CLOSE_SIGN_ERR:number = 5 //sign错误
	public static OPRATE_CLOSE_ACCOUNT_ERR:number = 6 //账号错误
	public static OPRATE_CLOSE_GET_PLAYER_ERR:number = 7 //从后台获取玩家数据异常
	public static OPRATE_CLOSE_GET_SESSIONKEY_ERR:number = 8 //从后台获取sessionkey异常
	public static OPRATE_CLOSE_SESSIONKEY_MISS_PARA:number = 9 //sessionkey参数缺失
	public static OPRATE_CLOSE_SERVER_NAME_NOT_FOUND:number = 10 //找不到这个平台
	public static OPRATE_CLOSE_SIGN_SERVER_NAME_INCONFORMITY:number = 11 //sing与server_name不一致
	public static OPRATE_CLOSE_RELOGIN:number = 12 //重复登录
	public static OPRATE_CLOSE_TIMEOUT:number = 13 //超时
	public static OPRATE_CLOSE_FORCE_RELOGIN:number = 14 //允许强制重新登陆
	public static OPRATE_CLOSE_OTHER_ONLINE:number = 15 //其他在线中
	public static OPRATE_CLOSE_WEB_GET_INFO_ERR:number = 16 //web请求失败
	public static OPRATE_CLOSE_WEB_CRASH:number = 17 //web崩溃
	public static OPRATE_CLOSE_ON_PKT_STATUS_NOVER_ERR:number = 18 //还没登陆就发了错误的包上来
	public static OPRATE_CLOSE_RECEIVE_TIME_OUT:number = 19 //太久没收到网络包
	//操作错误类型
	public static OPRATE_TELEPORT:number = 3 //传送操作错误类型
	public static OPRATE_TELEPORT_FAIL:number = 1 //传送失败
	public static OPRATE_TELEPORT_LEAVE_MAP_FAIL:number = 2 //离开地图失败
	public static OPRATE_TELEPORT_LEAVE_MAP_PLAYING:number = 3 //游戏进行中，不允许离开地图
	public static OPRATE_TELEPORT_IN_OTHER_ROOM:number = 4 //玩家还没离开原来的房间
	public static OPRATE_TELEPORT_NOT_THIS_GAME:number = 5 //当前服务器没有这个游戏
	public static OPRATE_TELEPORT_SWITCH_SEAT_FAIL:number = 6 //换座失败
	public static OPRATE_TELEPORT_CAN_NOT_JOIN:number = 7 //加入游戏失败，条件不允许
	public static OPRATE_TELEPORT_MAP_MATHCH_JOIN_SUCESS:number = 8 //地图匹配加入成功
	public static OPRATE_TELEPORT_MAP_MATHCH_CANCLE_SUCESS:number = 9 //地图匹配取消成功
	public static OPRATE_TELEPORT_MAP_CREATE_ROOM_SUCCESS:number = 10 //地图创建房间成功
	public static OPRATE_TELEPORT_MAP_JOIN_ROOM_SUCCESS:number = 11 //地图加入房间成功
	//操作错误类型
	public static OPRATE_PLAYING:number = 4 //打牌操作错误类型
	public static OPRATE_PLAYING_BANKER:number = 1 //庄家信息
	public static OPRATE_PLAYING_COMPARE:number = 2 //比牌
	public static OPRATE_PLAYING_WINNER:number = 3 //胜利方
	public static OPRATE_PLAYING_SETTLEMENT:number = 4 //结算
	public static OPRATE_PLAYING_SAME_BANKER_RATE:number = 5 //多人抢同倍庄
	public static OPRATE_PLAYING_SETTLEMENT_GOLD:number = 6 //结算金币
	public static OPRATE_PLAYING_DAO_SHUI:number = 7 //十三水倒水
	//操作错误类型
	public static OPRATE_WEB:number = 5 //与web交互操作错误类型
	public static OPRATE_WEB_FAIL_RESULT_INFO:number = 1 //web返回的错误信息
	public static OPRATE_WEB_SUCESS_RESULT_INFO:number = 2 //web成功返回的信息
	public static OPRATE_WEB_FAIL_RESULT:number = 3 //web返回的错误信息
	public static OPRATE_WEB_BIND_SUCCESS:number = 4 //绑定账号成功
	public static OPRATE_WEB_RECHARGE_SUCCESS:number = 5 //充值成功
	public static OPRATE_WEB_CASH_SUCCESS:number = 6 //提款成功
	public static OPRATE_WEB_SPECIAL_PLAYER_SUCCESS:number = 7 //特邀用户给与奖励成功
	//操作错误类型
	public static OPRATE_CARDROOM:number = 6 //房卡操作错误类型
	public static OPRATE_CARDROOM_NOT_CARD_ROOM:number = 1 //该游戏不是房卡游戏
	public static OPRATE_CARDROOM_CREATE_ROOM_NOT_MONEY:number = 2 //创建房间余额不足
	public static OPRATE_CARDROOM_JOIN_ROOM_NOT_MONEY:number = 3 //加入房间余额不足
	public static OPRATE_CARDROOM_PAY_TYP_ERR:number = 4 //付费类型参数无效
	public static OPRATE_CARDROOM_INST_NOT_FOUND:number = 5 //找不到这个房间
	public static OPRATE_CARDROOM_NOT_CARD_ID:number = 6 //没有剩余的房卡ID可发放
	public static OPRATE_CARDROOM_CAN_NOT_JOIN:number = 7 //该房间已满员，或者已结束
	public static OPRATE_CARDROOM_DISMISSED:number = 8 //该房间已解散
	public static OPRATE_CARDROOM_PARAS_ERROR:number = 9 //玩法参数错误
	public static OPRATE_CARDROOM_FULL_PLAYER:number = 10 //房间已满员
	public static OPRATE_CARDROOM_DISS_ROOM:number = 11 //房间已经解散
	public static OPRATE_CARDROOM_GAME_START:number = 12 //游戏已经开始
	public static OPRATE_CARDROOM_GAME_OVER:number = 13 //游戏已经结束
	public static OPRATE_CARDROOM_GAME_ID_RETURN:number = 14 //返回游戏id
	//操作错误类型
	public static OPRATE_BUYU:number = 7 //捕鱼操作错误类型
	public static OPRATE_BUYU_NOT_MONEY:number = 1 //钱币不足
	public static OPRATE_BUYU_NOT_BULLET:number = 2 //子弹不足
	//操作错误类型
	public static OPRATE_GAME:number = 8 //游戏操作错误类型
	public static OPRATE_GAME_QIFU_SUCCESS_RESULT:number = 1 //祈福成功返回的信息
	public static OPRATE_GAME_DEVICE_PUSH_INFO:number = 2 //推送消息
	public static OPRATE_GAME_READY_CLOSE:number = 3 //服务器准备更新关闭
	public static OPRATE_GAME_SIGN_IN_SUCCESS:number = 4 //签到成功
	public static OPRATE_GAME_SCORE_LUCKY_DRAW:number = 5 //积分抽奖奖励
	public static OPRATE_GAME_VIP_LEVEL_AWARD:number = 6 //VIP等级奖励
	public static OPRATE_GAME_PWD_ERROR:number = 7 //密码错误
	public static OPRATE_GAME_PWD_ERROR_3_TIMES:number = 8 //密码错误超过3次
	public static OPRATE_GAME_PWD_SUCCESS:number = 9 //取款密码设置成功
	public static OPRATE_GAME_POWER_YUEBAO_OUT_SUCCESS:number = 10 //余额宝取出成功
	public static OPRATE_GAME_FIRST_PAY_SUCCESS:number = 11 //首充领取成功
	public static OPRATE_GAME_POWER_YUEBAO_IN_SUCCESS:number = 12 //余额宝存入成功
	public static OPRATE_GAME_DAILY_SHARE_SUCCESS:number = 13 //每日分享成功
	public static OPRATE_GAME_BIND_GIFT_SUCCESS:number = 14 //绑定送金成功
	public static OPRATE_GAME_FIRST_PAY_CAN_GET:number = 15 //首充可领取弹窗
	public static OPRATE_GAME_DRAW_FAIL_LEFT_MA:number = 16 //剩余打码量不为0
	public static OPRATE_GAME_GET_HONGBAO_SUCCESS:number = 17 //红包领取成功
	public static OPRATE_GAME_GET_HONGBAO_FAILED:number = 18 //红包领取失败
	//错误提示
	private static OPRATE_STRING:{[key:string]:string} = {
		'1':'登录操作错误类型',//登录操作错误类型
		'1_1':'成功',//成功
		'1_2':'超时',//超时
		'1_3':'性别错误',//性别错误
		'1_4':'昵称错误',//昵称错误
		'1_5':'昵称有非法词',//昵称有非法词
		'1_6':'昵称已存在',//昵称已存在
		'1_7':'其他在线中',//其他在线中
		'1_8':'断线重连',//断线重连
		'1_9':'踢下线',//踢下线
		'1_10':'封IP',//封IP
		'1_11':'封账号',//封账号
		'1_12':'提示他人自己登陆当前账号',//提示他人自己登陆当前账号
		'1_13':'提示自己其他人登陆当前账号',//提示自己其他人登陆当前账号
		'1_14':'当前网络不通畅，需要重新连接',//当前网络不通畅，需要重新连接
		'1_15':'非常抱歉，当前服务器人数已满，请尝试其他服务器登录吧',//非常抱歉，当前服务器人数已满，请尝试其他服务器登录吧
		'1_16':'游戏列表',//游戏列表
		'1_17':'手机验证码',//手机验证码
		'1_18':'sessionkey',//sessionkey
		'2':'关闭客户端操作错误类型',//关闭客户端操作错误类型
		'2_1':'客戶端退出登录',//客戶端退出登录
		'2_2':'封账号',//封账号
		'2_3':'封IP',//封IP
		'2_4':'踢下线',//踢下线
		'2_5':'sign错误',//sign错误
		'2_6':'账号错误',//账号错误
		'2_7':'从后台获取玩家数据异常',//从后台获取玩家数据异常
		'2_8':'从后台获取sessionkey异常',//从后台获取sessionkey异常
		'2_9':'sessionkey参数缺失',//sessionkey参数缺失
		'2_10':'找不到这个平台',//找不到这个平台
		'2_11':'sing与server_name不一致',//sing与server_name不一致
		'2_12':'重复登录',//重复登录
		'2_13':'超时',//超时
		'2_14':'允许强制重新登陆',//允许强制重新登陆
		'2_15':'其他在线中',//其他在线中
		'2_16':'web请求失败',//web请求失败
		'2_17':'web崩溃',//web崩溃
		'2_18':'还没登陆就发了错误的包上来',//还没登陆就发了错误的包上来
		'2_19':'太久没收到网络包',//太久没收到网络包
		'3':'传送操作错误类型',//传送操作错误类型
		'3_1':'传送失败',//传送失败
		'3_2':'离开地图失败',//离开地图失败
		'3_3':'游戏进行中，不允许离开地图',//游戏进行中，不允许离开地图
		'3_4':'玩家还没离开原来的房间',//玩家还没离开原来的房间
		'3_5':'当前服务器没有这个游戏',//当前服务器没有这个游戏
		'3_6':'换座失败',//换座失败
		'3_7':'加入游戏失败，条件不允许',//加入游戏失败，条件不允许
		'3_8':'地图匹配加入成功',//地图匹配加入成功
		'3_9':'地图匹配取消成功',//地图匹配取消成功
		'3_10':'地图创建房间成功',//地图创建房间成功
		'3_11':'地图加入房间成功',//地图加入房间成功
		'4':'打牌操作错误类型',//打牌操作错误类型
		'4_1':'庄家信息',//庄家信息
		'4_2':'比牌',//比牌
		'4_3':'胜利方',//胜利方
		'4_4':'结算',//结算
		'4_5':'多人抢同倍庄',//多人抢同倍庄
		'4_6':'结算金币',//结算金币
		'4_7':'十三水倒水',//十三水倒水
		'5':'与web交互操作错误类型',//与web交互操作错误类型
		'5_1':'web返回的错误信息',//web返回的错误信息
		'5_2':'web成功返回的信息',//web成功返回的信息
		'5_3':'web返回的错误信息',//web返回的错误信息
		'5_4':'绑定账号成功',//绑定账号成功
		'5_5':'充值成功',//充值成功
		'5_6':'提款成功',//提款成功
		'5_7':'特邀用户给与奖励成功',//特邀用户给与奖励成功
		'6':'房卡操作错误类型',//房卡操作错误类型
		'6_1':'该游戏不是房卡游戏',//该游戏不是房卡游戏
		'6_2':'创建房间余额不足',//创建房间余额不足
		'6_3':'加入房间余额不足',//加入房间余额不足
		'6_4':'付费类型参数无效',//付费类型参数无效
		'6_5':'找不到这个房间',//找不到这个房间
		'6_6':'没有剩余的房卡ID可发放',//没有剩余的房卡ID可发放
		'6_7':'该房间已满员，或者已结束',//该房间已满员，或者已结束
		'6_8':'该房间已解散',//该房间已解散
		'6_9':'玩法参数错误',//玩法参数错误
		'6_10':'房间已满员',//房间已满员
		'6_11':'房间已经解散',//房间已经解散
		'6_12':'游戏已经开始',//游戏已经开始
		'6_13':'游戏已经结束',//游戏已经结束
		'6_14':'返回游戏id',//返回游戏id
		'7':'捕鱼操作错误类型',//捕鱼操作错误类型
		'7_1':'钱币不足',//钱币不足
		'7_2':'子弹不足',//子弹不足
		'8':'游戏操作错误类型',//游戏操作错误类型
		'8_1':'祈福成功返回的信息',//祈福成功返回的信息
		'8_2':'推送消息',//推送消息
		'8_3':'服务器准备更新关闭',//服务器准备更新关闭
		'8_4':'签到成功',//签到成功
		'8_5':'积分抽奖奖励',//积分抽奖奖励
		'8_6':'VIP等级奖励',//VIP等级奖励
		'8_7':'密码错误',//密码错误
		'8_8':'密码错误超过3次',//密码错误超过3次
		'8_9':'取款密码设置成功',//取款密码设置成功
		'8_10':'余额宝取出成功',//余额宝取出成功
		'8_11':'首充领取成功',//首充领取成功
		'8_12':'余额宝存入成功',//余额宝存入成功
		'8_13':'每日分享成功',//每日分享成功
		'8_14':'绑定送金成功',//绑定送金成功
		'8_15':'首充可领取弹窗',//首充可领取弹窗
		'8_16':'剩余打码量不为0',//剩余打码量不为0
		'8_17':'红包领取成功',//红包领取成功
		'8_18':'红包领取失败',//红包领取失败

	}
	//获取错误提示
	public static getOpateMsg(type:number,reason?:number)
	{
		return Operation_Fields.OPRATE_STRING[type + (reason? ('_' + reason) : '')]
	}
}
