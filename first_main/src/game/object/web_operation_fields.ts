//-----------------全局定义-----自动生成------------------------------
class Web_operation_fields {
//------------------------START-----------------------------------
    public static USE_MONEY_LOG_TYPE_NONE = 1  //无
    public static USE_MONEY_LOG_TYPE_BET = 2  //下注
    public static USE_MONEY_LOG_TYPE_SETTLEMENT = 3  //结算
    public static USE_MONEY_LOG_TYPE_NEWVALUE = 4  //获得新值
    public static USE_MONEY_LOG_TYPE_API_RECHARGE = 5  //API存入
    public static USE_MONEY_LOG_TYPE_API_DRAWING = 6  //API取出
    public static USE_MONEY_LOG_TYPE_RECHARGE = 7  //第三方充值
    public static USE_MONEY_LOG_TYPE_CASH = 8  //提款
    public static USE_MONEY_LOG_TYPE_TALLAGE = 9  //抽水
    public static USE_MONEY_LOG_TYPE_XIQIAN = 10  //喜钱
    public static USE_MONEY_LOG_TYPE_SIGNIN = 11  //签到奖励
    public static USE_MONEY_LOG_TYPE_TURNTABLE = 12  //转盘奖励
    public static USE_MONEY_LOG_TYPE_RECHARGE_TYMOBILE = 13  //特邀手机赠送
    public static USE_MONEY_LOG_TYPE_HONGBAO = 14  //红包发放
    public static USE_MONEY_LOG_TYPE_RECHARGE_VIP = 15  //VIP充值
    public static USE_MONEY_LOG_TYPE_RECHARGE_RAKEBACK = 16  //佣金池领取
    public static USE_MONEY_LOG_TYPE_RECHARGE_OTHER = 17  //其他加款
    public static USE_MONEY_LOG_TYPE_RECHARGE_CAIJIN = 18  //彩金
    public static USE_MONEY_LOG_TYPE_RECHARGE_CASHFAILD = 19  //提款失败
    public static USE_MONEY_LOG_TYPE_CASH_OTHER = 20  //其他扣款
    public static USE_MONEY_LOG_TYPE_CASH_RECHARGEREEX = 21  //加款重新审核
    public static USE_MONEY_LOG_TYPE_CASH_CASHREEX = 22  //扣款重新审核
    public static USE_MONEY_LOG_TYPE_FISH_RECHARGE = 23  //捕鱼充值
    public static USE_MONEY_LOG_TYPE_FISH_FIRE = 24  //捕鱼开炮
    public static USE_MONEY_LOG_TYPE_FISH_GETFISH = 25  //捕鱼捕获
    public static USE_MONEY_LOG_TYPE_SAFEBOX_OUT = 26  //余额宝转出
    public static USE_MONEY_LOG_TYPE_SAFEBOX_IN = 27  //转入余额宝
    public static USE_MONEY_LOG_TYPE_SAFEBOX_INTEREST = 28  //余额宝利息
    public static USE_MONEY_LOG_TYPE_BIND = 29  //绑定奖励
    public static USE_MONEY_LOG_TYPE_DAILYSHARE = 30  //分享奖励
    public static USE_MONEY_LOG_TYPE_ROOMCARD = 31  //房卡
    public static USE_MONEY_LOG_TYPE_APIREDBAG = 32  //红包
    public static USE_MONEY_LOG_TYPE_APICAIJUAN = 33  //彩券
    public static USE_MONEY_LOG_TYPE_INVALID_BET_MONEY = 34  //无效下注
    public static USE_MONEY_LOG_TYPE_RECHARGE_WEIXIN = 35  //微信充值
    public static USE_MONEY_LOG_TYPE_RECHARGE_ALIPAY = 36  //支付宝充值
    public static USE_MONEY_LOG_TYPE_RECHARGE_BANK = 37  //银行卡充值
    public static USE_MONEY_LOG_TYPE_CASH_ADMIN = 38  //管理员扣款
    public static USE_MONEY_LOG_TYPE_QIFU = 39  //祈福扣款
    public static USE_MONEY_LOG_TYPE_ROOMCARD_BACK = 40  //房卡返还
    public static USE_MONEY_LOG_TYPE_LVAWARE = 41  //VIP等级奖励
    public static USE_MONEY_LOG_TYPE_RECHARGE_YSF = 42  //云闪付加款
    public static USE_MONEY_LOG_TYPE_FIRSTPAY = 43  //首充奖励
    public static USE_MONEY_LOG_TYPE_RECHARGE_WXBANK = 44  //微信转银行
    public static USE_MONEY_LOG_TYPE_RECHARGE_ZFBBANK = 45  //支付宝转银行
    public static USE_MONEY_LOG_TYPE_GUEST_GIVEMONEY = 46  //游客送金
    public static USE_MONEY_LOG_TYPE_WXSLHB_FHB = 47  //微信扫雷红包发红包
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static client_money_logtype_table:{[key:number]:string}={
        1:'无',//无
        2:'下注',//下注
        3:'结算',//结算
        4:'获得新值',//获得新值
        5:'余额兑换游戏币',//余额兑换游戏币
        6:'游戏币兑换余额',//游戏币兑换余额
        7:'第三方充值',//第三方充值
        8:'提款',//提款
        9:'抽水',//抽水
        10:'喜钱',//喜钱
        11:'签到奖励',//签到奖励
        12:'转盘奖励',//转盘奖励
        13:'特邀手机赠送',//特邀手机赠送
        14:'红包发放',//红包发放
        15:'VIP充值',//VIP充值
        16:'佣金池领取',//佣金池领取
        17:'其他加款',//其他加款
        18:'彩金',//彩金
        19:'提款失败',//提款失败
        20:'其他扣款',//其他扣款
        21:'加款重新审核',//加款重新审核
        22:'扣款重新审核',//扣款重新审核
        23:'捕鱼充值',//捕鱼充值
        24:'捕鱼开炮',//捕鱼开炮
        25:'捕鱼捕获',//捕鱼捕获
        26:'余额宝转出',//余额宝转出
        27:'转入余额宝',//转入余额宝
        28:'余额宝利息',//余额宝利息
        29:'绑定奖励',//绑定奖励
        30:'分享奖励',//分享奖励
        31:'房卡',//房卡
        32:'红包',//红包
        33:'彩券',//彩券
        34:'无效下注',//无效下注
        35:'微信加款',//微信加款
        36:'支付宝加款',//支付宝加款
        37:'银行卡加款',//银行卡加款
        38:'管理员扣款',//管理员扣款
        39:'祈福扣款',//祈福扣款
        40:'房卡返还',//房卡返还
        41:'VIP等级奖励',//VIP等级奖励
        42:'云闪付加款',//云闪付加款
        43:'首充奖励',//首充奖励
        44:'微信转银行',//微信转银行
        45:'支付宝转银行',//支付宝转银行
        46:'游客送金',//游客送金
        47:'微信扫雷红包发红包',//微信扫雷红包发红包
	}
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static GAME_SERVER_TYPE_SELF = 1  //自研游戏
    public static GAME_SERVER_TYPE_FISH = 2  //捕鱼
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static GAME_PAYIMG_TYPE_ZFBH5 = 1  //支付宝H5
    public static GAME_PAYIMG_TYPE_ZFBSM = 2  //支付宝扫码
    public static GAME_PAYIMG_TYPE_WXH5 = 3  //微信H5
    public static GAME_PAYIMG_TYPE_WXSM = 4  //微信扫码
    public static GAME_PAYIMG_TYPE_QQH5 = 5  //QQH5
    public static GAME_PAYIMG_TYPE_QQSM = 6  //QQ扫码
    public static GAME_PAYIMG_TYPE_JDSM = 7  //京东扫码
    public static GAME_PAYIMG_TYPE_YLSM = 8  //银联
    public static GAME_PAYIMG_TYPE_VIP = 9  //VIP
    public static GAME_PAYIMG_TYPE_BANKHK = 10  //银行卡转账
    public static GAME_PAYIMG_TYPE_ZFBHK = 11  //支付宝转账
    public static GAME_PAYIMG_TYPE_WXHK = 12  //微信转账
    public static GAME_PAYIMG_TYPE_FAST = 13  //快速充值
    public static GAME_PAYIMG_TYPE_YSF = 14  //云闪付
    public static GAME_PAYIMG_TYPE_YSFSM = 15  //云闪付扫码
    public static GAME_PAYIMG_TYPE_WXBANK = 16  //微信转银行
    public static GAME_PAYIMG_TYPE_ZFBBANK = 17  //支付宝转银行
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static GAME_AGENT_REBATE_TYPE_DAY = 1  //按日返佣
    public static GAME_AGENT_REBATE_TYPE_WEEK = 2  //按周返佣
    public static GAME_AGENT_REBATE_TYPE_MONTH = 3  //按月返佣
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static GAME_AGENT_TYPE_WXDL = 1  //无限代理
    public static GAME_AGENT_TYPE_QMDL = 2  //全民代理
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static GAME_APP_TYPE_1 = 1  //单入口
    public static GAME_APP_TYPE_2 = 2  //多入口
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static GAME_ACTIVITY_TYPE_1 = 1  //绑定有礼
    public static GAME_ACTIVITY_TYPE_2 = 2  //首存送金
    public static GAME_ACTIVITY_TYPE_3 = 3  //每日首存
    public static GAME_ACTIVITY_TYPE_4 = 4  //日进斗金
    public static GAME_ACTIVITY_TYPE_5 = 5  //绑定有礼
    public static GAME_ACTIVITY_TYPE_6 = 6  //优惠条款
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static SEX_MAN = 1  //男
    public static SEX_WOMAN = 2  //女
    public static SEX_GAY = 3  //无
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static WXSCENESESSION = 1  //聊天界面 
    public static WXSCENETIMELINE = 2  //朋友圈 
    public static WXSCENEFAVORITE = 3  //收藏
    public static WXSCENESPECIFIEDSESSION = 4  //指定联系人
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static BANK = 1  //银行卡 
    public static ALIPAY = 2  //支付宝 
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static DEVICE_TYPE_WEB = 1  //网站
    public static DEVICE_TYPE_ANDROID = 2  //安卓
    public static DEVICE_TYPE_IOS = 3  //苹果
    public static DEVICE_TYPE_HUAWEI = 4  //华为
    public static DEVICE_TYPE_XIAOMI = 5  //小米
    public static DEVICE_TYPE_OPPO = 6  //oppo
    public static DEVICE_TYPE_VIVO = 7  //vivo
    public static DEVICE_TYPE_MEIZU = 8  //魅族
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static ACCOUNT_TYPE_GUEST = 1  //游客
    public static ACCOUNT_TYPE_WEIXIN = 2  //微信
    public static ACCOUNT_TYPE_USERNAME = 3  //用户名
    public static ACCOUNT_TYPE_MOBILE = 4  //手机
    public static ACCOUNT_TYPE_ACCOUNT = 5  //用户ID
    public static ACCOUNT_TYPE_MAX = 6  //最大账号类型
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static web_interface_result_table:{[key:number]:string}={
        1:'当前玩家会话已失效，请重新登陆！',//当前玩家会话已失效，请重新登陆！
        2:'您的账号在其他地方登录，如果这不是您本人操作，那么您的密码很可能已经泄露！',//您的账号在其他地方登录，如果这不是您本人操作，那么您的密码很可能已经泄露！
        3:'当前玩家会话不正确，请尝试重新登陆，谢谢！',//当前玩家会话不正确，请尝试重新登陆，谢谢！
        4:'接口执行失败',//接口执行失败
        5:'参数错误',//参数错误
        6:'服务器泥石流了，请尝试重新注册！',//服务器泥石流了，请尝试重新注册！
        7:'注册游戏服出错，请尝试重新注册！',//注册游戏服出错，请尝试重新注册！
        8:'获取游戏公告数据失败，请确认！',//获取游戏公告数据失败，请确认！
        9:'设置版本信息出错，参数不正确，请确认！',//设置版本信息出错，参数不正确，请确认！
        10:'设置版本信息出错，更新失败，请确认！',//设置版本信息出错，更新失败，请确认！
        11:'设置版本信息出错，Token不正确，请确认！',//设置版本信息出错，Token不正确，请确认！
        12:'获取版本信息出错，参数不正确，请确认！',//获取版本信息出错，参数不正确，请确认！
        13:'获取版本信息出错，没有对应的版本信息，请确认！',//获取版本信息出错，没有对应的版本信息，请确认！
        14:'获取游戏列表信息出错，没有对应的数据，请确认！',//获取游戏列表信息出错，没有对应的数据，请确认！
        15:'游客身份出错，参数不正确，请确认！',//游客身份出错，参数不正确，请确认！
        16:'游客身份登陆时出现错误，请确认！',//游客身份登陆时出现错误，请确认！
        17:'游客绑定操作获取身份时出现错误，请确认！',//游客绑定操作获取身份时出现错误，请确认！
        18:'游客绑定出错，当前账号已是正式会员，请确认！',//游客绑定出错，当前账号已是正式会员，请确认！
        19:'该手机号码已被绑定，请确认或更换手机号码！',//该手机号码已被绑定，请确认或更换手机号码！
        20:'游客身份不能执行该操作，请先绑定账号成为正式会员，谢谢！',//游客身份不能执行该操作，请先绑定账号成为正式会员，谢谢！
        21:'绑定操作失败，参数不正确，请确认，谢谢！',//绑定操作失败，参数不正确，请确认，谢谢！
        22:'游客绑定操作失败，密码不一致，请确认，谢谢！',//游客绑定操作失败，密码不一致，请确认，谢谢！
        23:'密码长度不符合要求(至少6位)，请确认！',//密码长度不符合要求(至少6位)，请确认！
        24:'绑定操作失败，手机验证码不正确，请确认，谢谢！',//绑定操作失败，手机验证码不正确，请确认，谢谢！
        25:'绑定操作失败，请联系客服处理，谢谢！',//绑定操作失败，请联系客服处理，谢谢！
        26:'操作失败，手机号码格式不正确，请确认，谢谢！',//操作失败，手机号码格式不正确，请确认，谢谢！
        27:'发送短信验证码时平台配置信息不正确，请确认，谢谢！',//发送短信验证码时平台配置信息不正确，请确认，谢谢！
        28:'发送短信验证码时平台返回错误，请确认，谢谢！',//发送短信验证码时平台返回错误，请确认，谢谢！
        29:'注册失败，该账号已存在，请确认！',//注册失败，该账号已存在，请确认！
        30:'注册失败，生成邀请码发生错误，请确认！',//注册失败，生成邀请码发生错误，请确认！
        31:'密码不能为空，请确认！',//密码不能为空，请确认！
        32:'请输入正确的旧密码！',//请输入正确的旧密码！
        33:'密码错误，请检查！',//密码错误，请检查！
        34:'无此用户，请使用验证码登录/注册',//无此用户，请使用验证码登录/注册
        35:'账号长度不符合要求(至少3位)，请确认！',//账号长度不符合要求(至少3位)，请确认！
        36:'账号已被冻结，请联系客服处理！',//账号已被冻结，请联系客服处理！
        37:'获取玩家邮件数据失败，请确认！',//获取玩家邮件数据失败，请确认！
        38:'更新玩家阅读邮件状态失败，请确认！',//更新玩家阅读邮件状态失败，请确认！
        39:'游戏更新玩家资料时发生错误，请确认！',//游戏更新玩家资料时发生错误，请确认！
        40:'修改玩家金币发生错误，操作流水号不存在，请确认！',//修改玩家金币发生错误，操作流水号不存在，请确认！
        41:'修改玩家金币发生错误，没有需要修改的数据，请确认！',//修改玩家金币发生错误，没有需要修改的数据，请确认！
        42:'修改玩家金币发生错误，没有生成需要储存的信息，请确认！',//修改玩家金币发生错误，没有生成需要储存的信息，请确认！
        43:'修改玩家金币执行失败，请确认！',//修改玩家金币执行失败，请确认！
        44:'当前操作流水号为空，请确认！',//当前操作流水号为空，请确认！
        45:'当前操作流水号格式不正确，请确认！',//当前操作流水号格式不正确，请确认！
        46:'当前操作流水号没有对应的服务器，请确认！',//当前操作流水号没有对应的服务器，请确认！
        47:'当前操作已执行，请勿重复提交！',//当前操作已执行，请勿重复提交！
        48:'当前操作对应的服务器没有执行记录，请确认！',//当前操作对应的服务器没有执行记录，请确认！
        49:'获取验证码失败，账号不能为空，请确认！',//获取验证码失败，账号不能为空，请确认！
        50:'获取验证码过于频繁，请稍候重试！',//获取验证码过于频繁，请稍候重试！
        51:'获取玩家投注记录失败，请稍候重试！',//获取玩家投注记录失败，请稍候重试！
        52:'玩家进入游戏失败，游戏不存在，请确认！',//玩家进入游戏失败，游戏不存在，请确认！
        53:'玩家进入游戏失败，参数不正确，请确认！',//玩家进入游戏失败，参数不正确，请确认！
        54:'玩家进入游戏失败，未正常退出上一局游戏，请稍候重试！',//玩家进入游戏失败，未正常退出上一局游戏，请稍候重试！
        55:'玩家退出游戏失败，参数不正确，请重试！',//玩家退出游戏失败，参数不正确，请重试！
        56:'玩家退出游戏失败，当前游戏ID不正确，请稍候重试！',//玩家退出游戏失败，当前游戏ID不正确，请稍候重试！
        57:'刷新玩家信息失败，玩家当前仍为游戏状态，请稍候重试！',//刷新玩家信息失败，玩家当前仍为游戏状态，请稍候重试！
        58:'玩家游戏结算失败，操作类型不正确，请确认！',//玩家游戏结算失败，操作类型不正确，请确认！
        59:'获取游戏地址失败，参数不正确，请确认！',//获取游戏地址失败，参数不正确，请确认！
        60:'生成登陆游戏数据时发生错误，请确认！',//生成登陆游戏数据时发生错误，请确认！
        61:'获取登陆游戏URL接口发生错误，请确认！',//获取登陆游戏URL接口发生错误，请确认！
        62:'登陆游戏ID不正确，请确认！',//登陆游戏ID不正确，请确认！
        63:'生成接口参数加密出错，请确认！',//生成接口参数加密出错，请确认！
        64:'接口数据返回错误，请确认！',//接口数据返回错误，请确认！
        65:'查询可用游戏余额参数不正确，请确认！',//查询可用游戏余额参数不正确，请确认！
        66:'查询可用游戏余额发生错误，请确认！',//查询可用游戏余额发生错误，请确认！
        67:'兑换游戏币时发生错误，请确认！',//兑换游戏币时发生错误，请确认！
        68:'兑换游戏币时接口返回错误，请确认！',//兑换游戏币时接口返回错误，请确认！
        69:'兑换游戏币成功但更新玩家数据时发生错误，请确认！',//兑换游戏币成功但更新玩家数据时发生错误，请确认！
        70:'兑换游戏币超过当前玩家游戏币上限，请确认！',//兑换游戏币超过当前玩家游戏币上限，请确认！
        71:'查询游戏记录订单出错，订单号不能为空，请确认！',//查询游戏记录订单出错，订单号不能为空，请确认！
        72:'查询玩家游戏状态出错，参数不能为空，请确认！',//查询玩家游戏状态出错，参数不能为空，请确认！
        73:'查询玩家游戏状态接口返回出错，请确认！',//查询玩家游戏状态接口返回出错，请确认！
        74:'查询玩家游戏订单记录出错，参数不能为空，请确认！',//查询玩家游戏订单记录出错，参数不能为空，请确认！
        75:'查询玩家游戏订单接口返回出错，参数不能为空，请确认！',//查询玩家游戏订单接口返回出错，参数不能为空，请确认！
        76:'查询玩家总体信息出错，参数不能为空，请确认！',//查询玩家总体信息出错，参数不能为空，请确认！
        77:'查询玩家总体信息接口返回错误，请确认！',//查询玩家总体信息接口返回错误，请确认！
        78:'踢玩家下线时出现异常，参数不能为空，请确认！',//踢玩家下线时出现异常，参数不能为空，请确认！
        79:'踢玩家下线时接口返回错误，请确认！',//踢玩家下线时接口返回错误，请确认！
        80:'充值通道维护，请确认！',//充值通道维护，请确认！
        81:'操作金额格式不正确，请确认！',//操作金额格式不正确，请确认！
        82:'充值通道级别超限，请确认！',//充值通道级别超限，请确认！
        83:'操作金额超限，请确认！',//操作金额超限，请确认！
        84:'获取支付链接出错，请确认！',//获取支付链接出错，请确认！
        85:'获取支付方式出错，请确认！',//获取支付方式出错，请确认！
        86:'生成支付订单出错，请重试！',//生成支付订单出错，请重试！
        87:'充值订单发送失败，请重试！',//充值订单发送失败，请重试！
        88:'银行卡已绑定，请勿重复绑定！',//银行卡已绑定，请勿重复绑定！
        89:'提现信息未绑定，请先绑定！',//提现信息未绑定，请先绑定！
        90:'银行卡未绑定，请先绑定！',//银行卡未绑定，请先绑定！
        91:'取款密码错误，请确认！',//取款密码错误，请确认！
        92:'银行卡绑定失败，请重试！',//银行卡绑定失败，请重试！
        93:'支付宝已绑定，请勿重复绑定！',//支付宝已绑定，请勿重复绑定！
        94:'支付宝未绑定，请先绑定！',//支付宝未绑定，请先绑定！
        95:'支付宝绑定失败，请重试！',//支付宝绑定失败，请重试！
        96:'可用余额不足，请确认！',//可用余额不足，请确认！
        97:'操作失败，请重试！',//操作失败，请重试！
        98:'当前打码量不足，请确认！',//当前打码量不足，请确认！
        99:'获取记录失败，请重试！',//获取记录失败，请重试！
        100:'取款通道未开启或级别超限，请确认！',//取款通道未开启或级别超限，请确认！
        101:'每日取款次数超限，请确认！',//每日取款次数超限，请确认！
        102:'每日银行卡取款次数超限，请确认！',//每日银行卡取款次数超限，请确认！
        103:'每日支付宝取款次数超限，请确认！',//每日支付宝取款次数超限，请确认！
        104:'注册邀请码对应关系失败，请确认！',//注册邀请码对应关系失败，请确认！
        105:'注册邀请码对应关系出错，参数不正确，请确认！',//注册邀请码对应关系出错，参数不正确，请确认！
        106:'注册邀请码对应关系出错，IP格式不正确，请确认！',//注册邀请码对应关系出错，IP格式不正确，请确认！
        107:'注册邀请码对应关系出错，当前邀请码玩家数据不存在，请确认！',//注册邀请码对应关系出错，当前邀请码玩家数据不存在，请确认！
        108:'设置密码操作失败，验证码不正确，请确认，谢谢！',//设置密码操作失败，验证码不正确，请确认，谢谢！
        109:'设置密码操作失败，请确认，谢谢！',//设置密码操作失败，请确认，谢谢！
        110:'设置密码操作失败，手机号码不匹配，请确认，谢谢！',//设置密码操作失败，手机号码不匹配，请确认，谢谢！
        111:'删除邮件操作失败，请确认，谢谢！',//删除邮件操作失败，请确认，谢谢！
        112:'更改玩家资料失败，参数不正确，请确认，谢谢！',//更改玩家资料失败，参数不正确，请确认，谢谢！
        113:'更改玩家资料失败，请确认，谢谢！',//更改玩家资料失败，请确认，谢谢！
        114:'设置玩家头象失败，参数不正确，请确认，谢谢！',//设置玩家头象失败，参数不正确，请确认，谢谢！
        115:'设置玩家性别失败，内容不正确，请确认，谢谢！',//设置玩家性别失败，内容不正确，请确认，谢谢！
        116:'非调试模式不支持该操作，请确认，谢谢！',//非调试模式不支持该操作，请确认，谢谢！
        117:'GM命令执行失败，请确认，谢谢！',//GM命令执行失败，请确认，谢谢！
        118:'GM命令格式不正确，请确认，谢谢！',//GM命令格式不正确，请确认，谢谢！
        119:'签到失败，没有匹配的签到规则配置，请确认！',//签到失败，没有匹配的签到规则配置，请确认！
        120:'签到失败，玩家签到汇总数据不正确，请确认！',//签到失败，玩家签到汇总数据不正确，请确认！
        121:'签到失败，今日已成功签到，请勿重复签到，谢谢！',//签到失败，今日已成功签到，请勿重复签到，谢谢！
        122:'签到失败，生成签到数据发生错误，请确认！',//签到失败，生成签到数据发生错误，请确认！
        123:'签到失败，更新签到汇总数据发生错误，请确认！',//签到失败，更新签到汇总数据发生错误，请确认！
        124:'签到失败，获得奖励金额不正确，请确认！',//签到失败，获得奖励金额不正确，请确认！
        125:'签到失败，更新玩家数据发生错误，请确认！',//签到失败，更新玩家数据发生错误，请确认！
        126:'捕鱼金币更新失败，没有需要记录的数据，请确认！',//捕鱼金币更新失败，没有需要记录的数据，请确认！
        127:'捕鱼金币更新失败，数据长度不正确，请确认！',//捕鱼金币更新失败，数据长度不正确，请确认！
        128:'捕鱼金币更新失败，日志类型不正确，请确认！',//捕鱼金币更新失败，日志类型不正确，请确认！
        129:'捕鱼金币更新失败，时间格式不正确，请确认！',//捕鱼金币更新失败，时间格式不正确，请确认！
        130:'捕鱼金币更新失败，账号格式不正确，请确认！',//捕鱼金币更新失败，账号格式不正确，请确认！
        131:'捕鱼金币更新失败，变化类型不正确，请确认！',//捕鱼金币更新失败，变化类型不正确，请确认！
        132:'捕鱼金币更新失败，变化数值不正确，请确认！',//捕鱼金币更新失败，变化数值不正确，请确认！
        133:'捕鱼金币更新失败，倍率值不正确，请确认！',//捕鱼金币更新失败，倍率值不正确，请确认！
        134:'捕鱼离开游戏失败，数据不能为空，请确认！',//捕鱼离开游戏失败，数据不能为空，请确认！
        135:'捕鱼离开游戏失败，开始时间不能为空，请确认！',//捕鱼离开游戏失败，开始时间不能为空，请确认！
        136:'捕鱼日志房间类型不能为空，请确认！',//捕鱼日志房间类型不能为空，请确认！
        137:'捕鱼离开游戏失败，金币变化前后不一致，请确认！',//捕鱼离开游戏失败，金币变化前后不一致，请确认！
        138:'获取数据失败，请重试！',//获取数据失败，请重试！
        139:'GM命令执行失败，签到日期变化值不正确，请确认！',//GM命令执行失败，签到日期变化值不正确，请确认！
        140:'GM命令执行失败，该玩家从未签到过，请先执行签到，请确认！',//GM命令执行失败，该玩家从未签到过，请先执行签到，请确认！
        141:'保险箱操作错误，金额变化值不正确，请确认！',//保险箱操作错误，金额变化值不正确，请确认！
        142:'保险箱操作错误，执行失败，请确认！',//保险箱操作错误，执行失败，请确认！
        143:'保险箱操作错误，存取类型不正确，请确认！',//保险箱操作错误，存取类型不正确，请确认！
        144:'保险箱操作错误，存入金额不能大于当前玩家余额，请确认！',//保险箱操作错误，存入金额不能大于当前玩家余额，请确认！
        145:'保险箱操作错误，取出金额不能大于当前保险箱余额，请确认！',//保险箱操作错误，取出金额不能大于当前保险箱余额，请确认！
        146:'保险箱操作错误，游客身份不能执行存取操作，请先绑定成为正式会员，谢谢！',//保险箱操作错误，游客身份不能执行存取操作，请先绑定成为正式会员，谢谢！
        147:'保险箱操作错误，获取记录失败，请稍候重试！',//保险箱操作错误，获取记录失败，请稍候重试！
        148:'转盘抽奖失败，玩家当日数据生成失败，请确认或重试，谢谢！',//转盘抽奖失败，玩家当日数据生成失败，请确认或重试，谢谢！
        149:'转盘抽奖失败，玩家当日数据已存在，不能重复生成，谢谢！',//转盘抽奖失败，玩家当日数据已存在，不能重复生成，谢谢！
        150:'转盘抽奖失败，玩家当日数据不存在无法抽奖，请确认，谢谢！',//转盘抽奖失败，玩家当日数据不存在无法抽奖，请确认，谢谢！
        151:'转盘抽奖失败，当前转盘类型对应数据不存在，谢谢！',//转盘抽奖失败，当前转盘类型对应数据不存在，谢谢！
        152:'转盘抽奖失败，当前转盘积分配置不正确，谢谢！',//转盘抽奖失败，当前转盘积分配置不正确，谢谢！
        153:'转盘抽奖失败，积分暂时不够哦，请先参与游戏，谢谢！',//转盘抽奖失败，积分暂时不够哦，请先参与游戏，谢谢！
        154:'转盘抽奖失败，请稍候重试，谢谢！',//转盘抽奖失败，请稍候重试，谢谢！
        155:'转盘抽奖失败，生成转盘抽奖日志发生错误，请稍候重试！',//转盘抽奖失败，生成转盘抽奖日志发生错误，请稍候重试！
        156:'转盘抽奖失败，获得奖励金额不正确，请确认！',//转盘抽奖失败，获得奖励金额不正确，请确认！
        157:'转盘抽奖失败，更新抽奖当日汇总数据发生错误，请确认！',//转盘抽奖失败，更新抽奖当日汇总数据发生错误，请确认！
        158:'转盘抽奖失败，更新缓存数据时发生错误，请刷新游戏重试！',//转盘抽奖失败，更新缓存数据时发生错误，请刷新游戏重试！
        159:'转盘抽奖失败，更新玩家数据发生错误，请确认！',//转盘抽奖失败，更新玩家数据发生错误，请确认！
        160:'转盘操作错误，获取记录失败，请稍候重试！',//转盘操作错误，获取记录失败，请稍候重试！
        161:'微信登陆错误，登陆相关参数不正确或未配置，请确认！',//微信登陆错误，登陆相关参数不正确或未配置，请确认！
        162:'微信登陆错误，获取用户信息失败，请确认！',//微信登陆错误，获取用户信息失败，请确认！
        163:'玩家登陆错误，登陆类型不正确，请确认！',//玩家登陆错误，登陆类型不正确，请确认！
        164:'验证码错误，请检查！',//验证码错误，请检查！
        165:'玩家登陆错误，更新玩家信息失败，请确认！',//玩家登陆错误，更新玩家信息失败，请确认！
        166:'玩家资料修改失败，昵称只能修改一次，请确认！',//玩家资料修改失败，昵称只能修改一次，请确认！
        167:'账号绑定失败，绑定类型不正确，请确认！',//账号绑定失败，绑定类型不正确，请确认！
        168:'您已成功绑定，无需重复绑定，请确认！',//您已成功绑定，无需重复绑定，请确认！
        169:'账号绑定失败，该账号已被他人使用，请确认！',//账号绑定失败，该账号已被他人使用，请确认！
        170:'账号绑定失败，账号不能为空，请确认！',//账号绑定失败，账号不能为空，请确认！
        171:'账号绑定失败，该微信账号已绑定过其它账号，请确认！',//账号绑定失败，该微信账号已绑定过其它账号，请确认！
        172:'账号绑定失败，该账号已绑定过手机号码，请确认！',//账号绑定失败，该账号已绑定过手机号码，请确认！
        173:'账号绑定失败，该账号已绑定过微信，请确认！',//账号绑定失败，该账号已绑定过微信，请确认！
        174:'账号绑定失败，该账号已绑定过，请确认！',//账号绑定失败，该账号已绑定过，请确认！
        175:'账号绑定失败，该账号已有上级代理或重新绑定的代理与之前不一致，请确认！',//账号绑定失败，该账号已有上级代理或重新绑定的代理与之前不一致，请确认！
        176:'当前玩家账号被禁用，请确认！',//当前玩家账号被禁用，请确认！
        177:'修改密码错误，只有绑定了账号后才可以进行修改密码操作，请先绑定账号谢谢！',//修改密码错误，只有绑定了账号后才可以进行修改密码操作，请先绑定账号谢谢！
        178:'Server地址或端口获取失败，请重新登录！',//Server地址或端口获取失败，请重新登录！
        179:'更新捕鱼库存信息失败！',//更新捕鱼库存信息失败！
        180:'游戏服同步捕鱼库存信息失败！',//游戏服同步捕鱼库存信息失败！
        181:'更新捕鱼库存信息失败，参数不正确！',//更新捕鱼库存信息失败，参数不正确！
        182:'获取资金记录出错！',//获取资金记录出错！
        183:'记录文件不存在！',//记录文件不存在！
        184:'游戏初始不存在！',//游戏初始不存在！
        185:'API加密数据为空！',//API加密数据为空！
        186:'API数据解密失败！',//API数据解密失败！
        187:'API数据解析失败！',//API数据解析失败！
        188:'API参数缺失！',//API参数缺失！
        189:'API注册失败！',//API注册失败！
        190:'奖励金额不正确，请确认！',//奖励金额不正确，请确认！
        191:'奖励类型不正确，请确认！',//奖励类型不正确，请确认！
        192:'添加红包彩券失败，更新玩家数据发生错误，请确认！',//添加红包彩券失败，更新玩家数据发生错误，请确认！
        193:'已存在未审核订单！',//已存在未审核订单！
        194:'未绑定手机,无法进行该操作！',//未绑定手机,无法进行该操作！
        195:'该银行卡绑定次数已超限,请更换银行卡进行绑定！',//该银行卡绑定次数已超限,请更换银行卡进行绑定！
        196:'该支付宝账号绑定次数已超限,请更换支付宝账号进行绑定！',//该支付宝账号绑定次数已超限,请更换支付宝账号进行绑定！
        197:'获取APP下载地址出错！',//获取APP下载地址出错！
        198:'无效手机号！',//无效手机号！
        199:'祈福失败！',//祈福失败！
        200:'获取祈福数据失败！',//获取祈福数据失败！
        201:'获取VIP等级失败！',//获取VIP等级失败！
        202:'领取VIP等级奖励失败！',//领取VIP等级奖励失败！
        203:'当前重复错误次数过多，请60分钟后再试！',//当前重复错误次数过多，请60分钟后再试！
        204:'已生成订单，请等待到账！',//已生成订单，请等待到账！
	}
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static GAME_TYPE_ZJH = 1  //炸金花
    public static GAME_TYPE_DDZ = 2  //斗地主
    public static GAME_TYPE_NIUNIU = 3  //抢庄牛牛
    public static GAME_TYPE_BLACKJACK = 4  //21点
    public static GAME_TYPE_TBNIUNIU = 5  //通比牛牛
    public static GAME_TYPE_FISH = 6  //捕鱼
    public static GAME_TYPE_BRNIUNIU = 7  //百人牛牛
    public static GAME_TYPE_LONGHU = 8  //龙虎斗
    public static GAME_TYPE_SANGONG = 9  //三公
    public static GAME_TYPE_HHDZ = 10  //红黑大战
    public static GAME_TYPE_EBGANG = 11  //二八杠
    public static GAME_TYPE_PAIJIU = 12  //抢庄牌九
    public static GAME_TYPE_SHUIGUOJI = 13  //水果机
    public static GAME_TYPE_BAIJIALE = 14  //百家乐
    public static GAME_TYPE_SHISANSHUI = 15  //十三水
    public static GAME_TYPE_BENCHIBAOMA = 16  //奔驰宝马
    public static GAME_TYPE_BAIRENDEZHOU = 17  //百人德州
    public static GAME_TYPE_TOUBAO = 18  //骰宝
    public static GAME_TYPE_DEZHOU = 19  //德州
    public static GAME_TYPE_ZOO = 20  //飞禽走兽
    public static GAME_TYPE_PAODEKUAI = 21  //跑得快
    public static GAME_TYPE_SCMJ = 22  //四川麻将
    public static GAME_TYPE_ELUOSILUNPAN = 23  //俄罗斯轮盘
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static GAME_ROOM_CONFIG_ZJH_1 = 1  //炸金花新手场
    public static GAME_ROOM_CONFIG_ZJH_2 = 2  //炸金花小资场
    public static GAME_ROOM_CONFIG_ZJH_3 = 3  //炸金花老板场
    public static GAME_ROOM_CONFIG_ZJH_4 = 4  //炸金花富豪场
    public static GAME_ROOM_CONFIG_ZJH_5 = 5  //炸金花场5
    public static GAME_ROOM_CONFIG_ZJH_6 = 6  //炸金花场6
    public static GAME_ROOM_CONFIG_ZJH_7 = 7  //炸金花场7
    public static GAME_ROOM_CONFIG_ZJH_8 = 8  //炸金花场8
    public static GAME_ROOM_CONFIG_ZJH_9 = 9  //炸金花场9
    public static GAME_ROOM_CONFIG_ZJH_10 = 10  //炸金花场10
    public static GAME_ROOM_CONFIG_DDZ_1 = 11  //斗地主新手场
    public static GAME_ROOM_CONFIG_DDZ_2 = 12  //斗地主小资场
    public static GAME_ROOM_CONFIG_DDZ_3 = 13  //斗地主老板场
    public static GAME_ROOM_CONFIG_DDZ_4 = 14  //斗地主富豪场
    public static GAME_ROOM_CONFIG_DDZ_5 = 15  //斗地主场5
    public static GAME_ROOM_CONFIG_DDZ_6 = 16  //斗地主场6
    public static GAME_ROOM_CONFIG_DDZ_7 = 17  //斗地主场7
    public static GAME_ROOM_CONFIG_DDZ_8 = 18  //斗地主场8
    public static GAME_ROOM_CONFIG_DDZ_9 = 19  //斗地主场9
    public static GAME_ROOM_CONFIG_DDZ_10 = 20  //斗地主场10
    public static GAME_ROOM_CONFIG_QIANGZHUANG_NIUNIU_1 = 21  //抢庄牛牛新手场
    public static GAME_ROOM_CONFIG_QIANGZHUANG_NIUNIU_2 = 22  //抢庄牛牛小资场
    public static GAME_ROOM_CONFIG_QIANGZHUANG_NIUNIU_3 = 23  //抢庄牛牛老板场
    public static GAME_ROOM_CONFIG_QIANGZHUANG_NIUNIU_4 = 24  //抢庄牛牛富豪场
    public static GAME_ROOM_CONFIG_QIANGZHUANG_NIUNIU_5 = 25  //抢庄牛牛场5
    public static GAME_ROOM_CONFIG_QIANGZHUANG_NIUNIU_6 = 26  //抢庄牛牛场6
    public static GAME_ROOM_CONFIG_QIANGZHUANG_NIUNIU_7 = 27  //抢庄牛牛场7
    public static GAME_ROOM_CONFIG_QIANGZHUANG_NIUNIU_8 = 28  //抢庄牛牛场8
    public static GAME_ROOM_CONFIG_QIANGZHUANG_NIUNIU_9 = 29  //抢庄牛牛场9
    public static GAME_ROOM_CONFIG_QIANGZHUANG_NIUNIU_10 = 30  //抢庄牛牛场10
    public static GAME_ROOM_CONFIG_BLACKJACK_1 = 31  //21点新手场
    public static GAME_ROOM_CONFIG_BLACKJACK_2 = 32  //21点小资场
    public static GAME_ROOM_CONFIG_BLACKJACK_3 = 33  //21点老板场
    public static GAME_ROOM_CONFIG_BLACKJACK_4 = 34  //21点富豪场
    public static GAME_ROOM_CONFIG_BLACKJACK_5 = 35  //21点场5
    public static GAME_ROOM_CONFIG_BLACKJACK_6 = 36  //21点场6
    public static GAME_ROOM_CONFIG_BLACKJACK_7 = 37  //21点场7
    public static GAME_ROOM_CONFIG_BLACKJACK_8 = 38  //21点场8
    public static GAME_ROOM_CONFIG_BLACKJACK_9 = 39  //21点场9
    public static GAME_ROOM_CONFIG_BLACKJACK_10 = 40  //21点场10
    public static GAME_ROOM_CONFIG_TBNIUNIU_1 = 41  //通比牛牛新手场
    public static GAME_ROOM_CONFIG_TBNIUNIU_2 = 42  //通比牛牛小资场
    public static GAME_ROOM_CONFIG_TBNIUNIU_3 = 43  //通比牛牛老板场
    public static GAME_ROOM_CONFIG_TBNIUNIU_4 = 44  //通比牛牛富豪场
    public static GAME_ROOM_CONFIG_TBNIUNIU_5 = 45  //通比牛牛场5
    public static GAME_ROOM_CONFIG_TBNIUNIU_6 = 46  //通比牛牛6
    public static GAME_ROOM_CONFIG_TBNIUNIU_7 = 47  //通比牛牛7
    public static GAME_ROOM_CONFIG_TBNIUNIU_8 = 48  //通比牛牛8
    public static GAME_ROOM_CONFIG_TBNIUNIU_9 = 49  //通比牛牛9
    public static GAME_ROOM_CONFIG_TBNIUNIU_10 = 50  //通比牛牛10
    public static GAME_ROOM_CONFIG_FISH_1 = 51  //捕鱼体验场
    public static GAME_ROOM_CONFIG_FISH_2 = 52  //捕鱼小资场
    public static GAME_ROOM_CONFIG_FISH_3 = 53  //捕鱼老板场
    public static GAME_ROOM_CONFIG_FISH_4 = 54  //捕鱼富豪场
    public static GAME_ROOM_CONFIG_FISH_5 = 55  //捕鱼场5
    public static GAME_ROOM_CONFIG_FISH_6 = 56  //捕鱼场6
    public static GAME_ROOM_CONFIG_FISH_7 = 57  //捕鱼场7
    public static GAME_ROOM_CONFIG_FISH_8 = 58  //捕鱼场8
    public static GAME_ROOM_CONFIG_FISH_9 = 59  //捕鱼场9
    public static GAME_ROOM_CONFIG_FISH_10 = 60  //捕鱼场10
    public static GAME_ROOM_CONFIG_FISH_11 = 61  //捕鱼场11
    public static GAME_ROOM_CONFIG_FISH_12 = 62  //捕鱼场12
    public static GAME_ROOM_CONFIG_FISH_13 = 63  //捕鱼场13
    public static GAME_ROOM_CONFIG_FISH_14 = 64  //捕鱼场14
    public static GAME_ROOM_CONFIG_FISH_15 = 65  //捕鱼场15
    public static GAME_ROOM_CONFIG_FISH_16 = 66  //捕鱼场16
    public static GAME_ROOM_CONFIG_FISH_17 = 67  //捕鱼场17
    public static GAME_ROOM_CONFIG_FISH_18 = 68  //捕鱼场18
    public static GAME_ROOM_CONFIG_FISH_19 = 69  //捕鱼场19
    public static GAME_ROOM_CONFIG_FISH_20 = 70  //捕鱼场20
    public static GAME_ROOM_CONFIG_BRNIUNIU_1 = 71  //百人牛牛新手场
    public static GAME_ROOM_CONFIG_BRNIUNIU_2 = 72  //百人牛牛小资场
    public static GAME_ROOM_CONFIG_BRNIUNIU_3 = 73  //百人牛牛老板场
    public static GAME_ROOM_CONFIG_BRNIUNIU_4 = 74  //百人牛牛富豪场
    public static GAME_ROOM_CONFIG_BRNIUNIU_5 = 75  //百人牛牛5
    public static GAME_ROOM_CONFIG_BRNIUNIU_6 = 76  //百人牛牛6
    public static GAME_ROOM_CONFIG_BRNIUNIU_7 = 77  //百人牛牛7
    public static GAME_ROOM_CONFIG_BRNIUNIU_8 = 78  //百人牛牛8
    public static GAME_ROOM_CONFIG_BRNIUNIU_9 = 79  //百人牛牛9
    public static GAME_ROOM_CONFIG_BRNIUNIU_10 = 80  //百人牛牛10
    public static GAME_ROOM_CONFIG_LONGHU_1 = 81  //龙虎斗新手场
    public static GAME_ROOM_CONFIG_LONGHU_2 = 82  //龙虎斗小资场
    public static GAME_ROOM_CONFIG_LONGHU_3 = 83  //龙虎斗老板场
    public static GAME_ROOM_CONFIG_LONGHU_4 = 84  //龙虎斗富豪场
    public static GAME_ROOM_CONFIG_LONGHU_5 = 85  //龙虎斗5
    public static GAME_ROOM_CONFIG_LONGHU_6 = 86  //龙虎斗6
    public static GAME_ROOM_CONFIG_LONGHU_7 = 87  //龙虎斗7
    public static GAME_ROOM_CONFIG_LONGHU_8 = 88  //龙虎斗8
    public static GAME_ROOM_CONFIG_LONGHU_9 = 89  //龙虎斗9
    public static GAME_ROOM_CONFIG_LONGHU_10 = 90  //龙虎斗10
    public static GAME_ROOM_CONFIG_SANGONG_1 = 91  //三公新手场
    public static GAME_ROOM_CONFIG_SANGONG_2 = 92  //三公小资场
    public static GAME_ROOM_CONFIG_SANGONG_3 = 93  //三公老板场
    public static GAME_ROOM_CONFIG_SANGONG_4 = 94  //三公富豪场
    public static GAME_ROOM_CONFIG_SANGONG_5 = 95  //三公5
    public static GAME_ROOM_CONFIG_SANGONG_6 = 96  //三公6
    public static GAME_ROOM_CONFIG_SANGONG_7 = 97  //三公7
    public static GAME_ROOM_CONFIG_SANGONG_8 = 98  //三公8
    public static GAME_ROOM_CONFIG_SANGONG_9 = 99  //三公9
    public static GAME_ROOM_CONFIG_SANGONG_10 = 100  //三公10
    public static GAME_ROOM_CONFIG_HHDZ_1 = 101  //红黑大战新手场
    public static GAME_ROOM_CONFIG_HHDZ_2 = 102  //红黑大战小资场
    public static GAME_ROOM_CONFIG_HHDZ_3 = 103  //红黑大战老板场
    public static GAME_ROOM_CONFIG_HHDZ_4 = 104  //红黑大战富豪场
    public static GAME_ROOM_CONFIG_HHDZ_5 = 105  //红黑大战5
    public static GAME_ROOM_CONFIG_HHDZ_6 = 106  //红黑大战6
    public static GAME_ROOM_CONFIG_HHDZ_7 = 107  //红黑大战7
    public static GAME_ROOM_CONFIG_HHDZ_8 = 108  //红黑大战8
    public static GAME_ROOM_CONFIG_HHDZ_9 = 109  //红黑大战9
    public static GAME_ROOM_CONFIG_HHDZ_10 = 110  //红黑大战10
    public static GAME_ROOM_CONFIG_EBGANG_1 = 111  //二八杠新手场
    public static GAME_ROOM_CONFIG_EBGANG_2 = 112  //二八杠小资场
    public static GAME_ROOM_CONFIG_EBGANG_3 = 113  //二八杠老板场
    public static GAME_ROOM_CONFIG_EBGANG_4 = 114  //二八杠富豪场
    public static GAME_ROOM_CONFIG_EBGANG_5 = 115  //二八杠5
    public static GAME_ROOM_CONFIG_EBGANG_6 = 116  //二八杠6
    public static GAME_ROOM_CONFIG_EBGANG_7 = 117  //二八杠7
    public static GAME_ROOM_CONFIG_EBGANG_8 = 118  //二八杠8
    public static GAME_ROOM_CONFIG_EBGANG_9 = 119  //二八杠9
    public static GAME_ROOM_CONFIG_EBGANG_10 = 120  //二八杠10
    public static GAME_ROOM_CONFIG_PAIJIU_1 = 121  //抢庄牌九新手场
    public static GAME_ROOM_CONFIG_PAIJIU_2 = 122  //抢庄牌九小资场
    public static GAME_ROOM_CONFIG_PAIJIU_3 = 123  //抢庄牌九老板场
    public static GAME_ROOM_CONFIG_PAIJIU_4 = 124  //抢庄牌九富豪场
    public static GAME_ROOM_CONFIG_PAIJIU_5 = 125  //抢庄牌九5
    public static GAME_ROOM_CONFIG_PAIJIU_6 = 126  //抢庄牌九6
    public static GAME_ROOM_CONFIG_PAIJIU_7 = 127  //抢庄牌九7
    public static GAME_ROOM_CONFIG_PAIJIU_8 = 128  //抢庄牌九8
    public static GAME_ROOM_CONFIG_PAIJIU_9 = 129  //抢庄牌九9
    public static GAME_ROOM_CONFIG_PAIJIU_10 = 130  //抢庄牌九10
    public static GAME_ROOM_CONFIG_SHUIGUOJI_1 = 131  //水果机1
    public static GAME_ROOM_CONFIG_SHUIGUOJI_2 = 132  //水果机2
    public static GAME_ROOM_CONFIG_SHUIGUOJI_3 = 133  //水果机3
    public static GAME_ROOM_CONFIG_SHUIGUOJI_4 = 134  //水果机4
    public static GAME_ROOM_CONFIG_SHUIGUOJI_5 = 135  //水果机5
    public static GAME_ROOM_CONFIG_SHUIGUOJI_6 = 136  //水果机6
    public static GAME_ROOM_CONFIG_SHUIGUOJI_7 = 137  //水果机7
    public static GAME_ROOM_CONFIG_SHUIGUOJI_8 = 138  //水果机8
    public static GAME_ROOM_CONFIG_SHUIGUOJI_9 = 139  //水果机9
    public static GAME_ROOM_CONFIG_SHUIGUOJI_10 = 140  //水果机10
    public static GAME_ROOM_CONFIG_BAIJIALE_1 = 141  //百家乐新手场
    public static GAME_ROOM_CONFIG_BAIJIALE_2 = 142  //百家乐小资场
    public static GAME_ROOM_CONFIG_BAIJIALE_3 = 143  //百家乐老板场
    public static GAME_ROOM_CONFIG_BAIJIALE_4 = 144  //百家乐富豪场
    public static GAME_ROOM_CONFIG_BAIJIALE_5 = 145  //百家乐5
    public static GAME_ROOM_CONFIG_BAIJIALE_6 = 146  //百家乐6
    public static GAME_ROOM_CONFIG_BAIJIALE_7 = 147  //百家乐7
    public static GAME_ROOM_CONFIG_BAIJIALE_8 = 148  //百家乐8
    public static GAME_ROOM_CONFIG_BAIJIALE_9 = 149  //百家乐9
    public static GAME_ROOM_CONFIG_BAIJIALE_10 = 150  //百家乐10
    public static GAME_ROOM_CONFIG_SHISANSHUI_1 = 151  //十三水新手场
    public static GAME_ROOM_CONFIG_SHISANSHUI_2 = 152  //十三水小资场
    public static GAME_ROOM_CONFIG_SHISANSHUI_3 = 153  //十三水老板场
    public static GAME_ROOM_CONFIG_SHISANSHUI_4 = 154  //十三水富豪场
    public static GAME_ROOM_CONFIG_SHISANSHUI_5 = 155  //十三水5
    public static GAME_ROOM_CONFIG_SHISANSHUI_6 = 156  //十三水6
    public static GAME_ROOM_CONFIG_SHISANSHUI_7 = 157  //十三水7
    public static GAME_ROOM_CONFIG_SHISANSHUI_8 = 158  //十三水8
    public static GAME_ROOM_CONFIG_SHISANSHUI_9 = 159  //十三水9
    public static GAME_ROOM_CONFIG_SHISANSHUI_10 = 160  //十三水10
    public static GAME_ROOM_CONFIG_BENCHIBAOMA_1 = 161  //奔驰宝马新手场
    public static GAME_ROOM_CONFIG_BENCHIBAOMA_2 = 162  //奔驰宝马小资场
    public static GAME_ROOM_CONFIG_BENCHIBAOMA_3 = 163  //奔驰宝马老板场
    public static GAME_ROOM_CONFIG_BENCHIBAOMA_4 = 164  //奔驰宝马富豪场
    public static GAME_ROOM_CONFIG_BENCHIBAOMA_5 = 165  //奔驰宝马5
    public static GAME_ROOM_CONFIG_BENCHIBAOMA_6 = 166  //奔驰宝马6
    public static GAME_ROOM_CONFIG_BENCHIBAOMA_7 = 167  //奔驰宝马7
    public static GAME_ROOM_CONFIG_BENCHIBAOMA_8 = 168  //奔驰宝马8
    public static GAME_ROOM_CONFIG_BENCHIBAOMA_9 = 169  //奔驰宝马9
    public static GAME_ROOM_CONFIG_BENCHIBAOMA_10 = 170  //奔驰宝马10
    public static GAME_ROOM_CONFIG_BAIRENDEZHOU_1 = 171  //百人德州新手场
    public static GAME_ROOM_CONFIG_BAIRENDEZHOU_2 = 172  //百人德州小资场
    public static GAME_ROOM_CONFIG_BAIRENDEZHOU_3 = 173  //百人德州老板场
    public static GAME_ROOM_CONFIG_BAIRENDEZHOU_4 = 174  //百人德州富豪场
    public static GAME_ROOM_CONFIG_BAIRENDEZHOU_5 = 175  //百人德州5
    public static GAME_ROOM_CONFIG_BAIRENDEZHOU_6 = 176  //百人德州6
    public static GAME_ROOM_CONFIG_BAIRENDEZHOU_7 = 177  //百人德州7
    public static GAME_ROOM_CONFIG_BAIRENDEZHOU_8 = 178  //百人德州8
    public static GAME_ROOM_CONFIG_BAIRENDEZHOU_9 = 179  //百人德州9
    public static GAME_ROOM_CONFIG_BAIRENDEZHOU_10 = 180  //百人德州10
    public static GAME_ROOM_CONFIG_TOUBAO_1 = 181  //骰宝新手场
    public static GAME_ROOM_CONFIG_TOUBAO_2 = 182  //骰宝小资场
    public static GAME_ROOM_CONFIG_TOUBAO_3 = 183  //骰宝老板场
    public static GAME_ROOM_CONFIG_TOUBAO_4 = 184  //骰宝富豪场
    public static GAME_ROOM_CONFIG_TOUBAO_5 = 185  //骰宝5
    public static GAME_ROOM_CONFIG_TOUBAO_6 = 186  //骰宝6
    public static GAME_ROOM_CONFIG_TOUBAO_7 = 187  //骰宝7
    public static GAME_ROOM_CONFIG_TOUBAO_8 = 188  //骰宝8
    public static GAME_ROOM_CONFIG_TOUBAO_9 = 189  //骰宝9
    public static GAME_ROOM_CONFIG_TOUBAO_10 = 190  //骰宝10
    public static GAME_ROOM_CONFIG_CARD_ROOM = 191  //房卡模式
    public static GAME_ROOM_CONFIG_DEZHOU_1 = 192  //德州新手场
    public static GAME_ROOM_CONFIG_DEZHOU_2 = 193  //德州小资场
    public static GAME_ROOM_CONFIG_DEZHOU_3 = 194  //德州老板场
    public static GAME_ROOM_CONFIG_DEZHOU_4 = 195  //德州富豪场
    public static GAME_ROOM_CONFIG_DEZHOU_5 = 196  //德州5
    public static GAME_ROOM_CONFIG_DEZHOU_6 = 197  //德州6
    public static GAME_ROOM_CONFIG_DEZHOU_7 = 198  //德州7
    public static GAME_ROOM_CONFIG_DEZHOU_8 = 199  //德州8
    public static GAME_ROOM_CONFIG_DEZHOU_9 = 200  //德州9
    public static GAME_ROOM_CONFIG_DEZHOU_10 = 201  //德州10
    public static GAME_ROOM_CONFIG_ZOO_1 = 202  //飞禽走兽新手场
    public static GAME_ROOM_CONFIG_ZOO_2 = 203  //飞禽走兽小资场
    public static GAME_ROOM_CONFIG_ZOO_3 = 204  //飞禽走兽老板场
    public static GAME_ROOM_CONFIG_ZOO_4 = 205  //飞禽走兽富豪场
    public static GAME_ROOM_CONFIG_ZOO_5 = 206  //飞禽走兽5
    public static GAME_ROOM_CONFIG_ZOO_6 = 207  //飞禽走兽6
    public static GAME_ROOM_CONFIG_ZOO_7 = 208  //飞禽走兽7
    public static GAME_ROOM_CONFIG_ZOO_8 = 209  //飞禽走兽8
    public static GAME_ROOM_CONFIG_ZOO_9 = 210  //飞禽走兽9
    public static GAME_ROOM_CONFIG_ZOO_10 = 211  //飞禽走兽10
    public static GAME_ROOM_CONFIG_PAODEKUAI_1 = 212  //跑得快新手场
    public static GAME_ROOM_CONFIG_PAODEKUAI_2 = 213  //跑得快小资场
    public static GAME_ROOM_CONFIG_PAODEKUAI_3 = 214  //跑得快老板场
    public static GAME_ROOM_CONFIG_PAODEKUAI_4 = 215  //跑得快富豪场
    public static GAME_ROOM_CONFIG_PAODEKUAI_5 = 216  //跑得快5
    public static GAME_ROOM_CONFIG_PAODEKUAI_6 = 217  //跑得快6
    public static GAME_ROOM_CONFIG_PAODEKUAI_7 = 218  //跑得快7
    public static GAME_ROOM_CONFIG_PAODEKUAI_8 = 219  //跑得快8
    public static GAME_ROOM_CONFIG_PAODEKUAI_9 = 220  //跑得快9
    public static GAME_ROOM_CONFIG_PAODEKUAI_10 = 221  //跑得快10
    public static GAME_ROOM_CONFIG_SCMJ_1 = 222  //四川麻将新手场
    public static GAME_ROOM_CONFIG_SCMJ_2 = 223  //四川麻将小资场
    public static GAME_ROOM_CONFIG_SCMJ_3 = 224  //四川麻将老板场
    public static GAME_ROOM_CONFIG_SCMJ_4 = 225  //四川麻将富豪场
    public static GAME_ROOM_CONFIG_SCMJ_5 = 226  //四川麻将5
    public static GAME_ROOM_CONFIG_SCMJ_6 = 227  //四川麻将6
    public static GAME_ROOM_CONFIG_SCMJ_7 = 228  //四川麻将7
    public static GAME_ROOM_CONFIG_SCMJ_8 = 229  //四川麻将8
    public static GAME_ROOM_CONFIG_SCMJ_9 = 230  //四川麻将9
    public static GAME_ROOM_CONFIG_SCMJ_10 = 231  //四川麻将10
    public static GAME_ROOM_CONFIG_ELSLP_1 = 232  //俄罗斯轮盘新手场
    public static GAME_ROOM_CONFIG_ELSLP_2 = 233  //俄罗斯轮盘小资场
    public static GAME_ROOM_CONFIG_ELSLP_3 = 234  //俄罗斯轮盘老板场
    public static GAME_ROOM_CONFIG_ELSLP_4 = 235  //俄罗斯轮盘富豪场
    public static GAME_ROOM_CONFIG_ELSLP_5 = 236  //俄罗斯轮盘5
    public static GAME_ROOM_CONFIG_ELSLP_6 = 237  //俄罗斯轮盘6
    public static GAME_ROOM_CONFIG_ELSLP_7 = 238  //俄罗斯轮盘7
    public static GAME_ROOM_CONFIG_ELSLP_8 = 239  //俄罗斯轮盘8
    public static GAME_ROOM_CONFIG_ELSLP_9 = 240  //俄罗斯轮盘9
    public static GAME_ROOM_CONFIG_ELSLP_10 = 241  //俄罗斯轮盘10
    public static GAME_ROOM_CONFIG_MPNIUNIU_1 = 242  //明牌牛牛新手场
    public static GAME_ROOM_CONFIG_MPNIUNIU_2 = 243  //明牌牛牛小资场
    public static GAME_ROOM_CONFIG_MPNIUNIU_3 = 244  //明牌牛牛老板场
    public static GAME_ROOM_CONFIG_MPNIUNIU_4 = 245  //明牌牛牛富豪场
    public static GAME_ROOM_CONFIG_MPNIUNIU_5 = 246  //明牌牛牛场5
    public static GAME_ROOM_CONFIG_MPNIUNIU_6 = 247  //明牌牛牛场6
    public static GAME_ROOM_CONFIG_MPNIUNIU_7 = 248  //明牌牛牛场7
    public static GAME_ROOM_CONFIG_MPNIUNIU_8 = 249  //明牌牛牛场8
    public static GAME_ROOM_CONFIG_MPNIUNIU_9 = 250  //明牌牛牛场9
    public static GAME_ROOM_CONFIG_MPNIUNIU_10 = 251  //明牌牛牛场10
    public static GAME_ROOM_CONFIG_WXSAOLEIHB_1 = 252  //微信扫雷红包小资场
    public static GAME_ROOM_CONFIG_WXSAOLEIHB_2 = 253  //微信扫雷红包老板场
    public static GAME_ROOM_CONFIG_WXSAOLEIHB_3 = 254  //微信扫雷红包富豪场
    public static GAME_ROOM_CONFIG_WXSAOLEIHB_4 = 255  //微信扫雷红包场4
    public static GAME_ROOM_CONFIG_WXSAOLEIHB_5 = 256  //微信扫雷红包场5
    public static GAME_ROOM_CONFIG_WXSAOLEIHB_6 = 257  //微信扫雷红包场6
    public static GAME_ROOM_CONFIG_WXSAOLEIHB_7 = 258  //微信扫雷红包场7
    public static GAME_ROOM_CONFIG_WXSAOLEIHB_8 = 259  //微信扫雷红包场8
    public static GAME_ROOM_CONFIG_WXSAOLEIHB_9 = 260  //微信扫雷红包场9
    public static GAME_ROOM_CONFIG_WXSAOLEIHB_10 = 261  //微信扫雷红包场10
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static GAME_CARDTYPE_EBGANG_DOUBLE_1 = 1  //一宝
    public static GAME_CARDTYPE_EBGANG_DOUBLE_2 = 2  //二宝
    public static GAME_CARDTYPE_EBGANG_DOUBLE_3 = 3  //三宝
    public static GAME_CARDTYPE_EBGANG_DOUBLE_4 = 4  //四宝
    public static GAME_CARDTYPE_EBGANG_DOUBLE_5 = 5  //五宝
    public static GAME_CARDTYPE_EBGANG_DOUBLE_6 = 6  //六宝
    public static GAME_CARDTYPE_EBGANG_DOUBLE_7 = 7  //七宝
    public static GAME_CARDTYPE_EBGANG_DOUBLE_8 = 8  //八宝
    public static GAME_CARDTYPE_EBGANG_DOUBLE_9 = 9  //九宝
    public static GAME_CARDTYPE_EBGANG_DOUBLE_10 = 10  //天王
    public static GAME_CARDTYPE_EBGANG_DIANBAN_1 = 11  //一点半
    public static GAME_CARDTYPE_EBGANG_DIANBAN_2 = 12  //二点半
    public static GAME_CARDTYPE_EBGANG_DIANBAN_3 = 13  //三点半
    public static GAME_CARDTYPE_EBGANG_DIANBAN_4 = 14  //四点半
    public static GAME_CARDTYPE_EBGANG_DIANBAN_5 = 15  //五点半
    public static GAME_CARDTYPE_EBGANG_DIANBAN_6 = 16  //六点半
    public static GAME_CARDTYPE_EBGANG_DIANBAN_7 = 17  //七点半
    public static GAME_CARDTYPE_EBGANG_DIANBAN_8 = 18  //八点半
    public static GAME_CARDTYPE_EBGANG_DIANBAN_9 = 19  //九点半
    public static GAME_CARDTYPE_EBGANG_BIESHI = 20  //鳖十
    public static GAME_CARDTYPE_EBGANG_SINGLE_1 = 21  //一点
    public static GAME_CARDTYPE_EBGANG_SINGLE_2 = 22  //二点
    public static GAME_CARDTYPE_EBGANG_SINGLE_3 = 23  //三点
    public static GAME_CARDTYPE_EBGANG_SINGLE_4 = 24  //四点
    public static GAME_CARDTYPE_EBGANG_SINGLE_5 = 25  //五点
    public static GAME_CARDTYPE_EBGANG_SINGLE_6 = 26  //六点
    public static GAME_CARDTYPE_EBGANG_SINGLE_7 = 27  //七点
    public static GAME_CARDTYPE_EBGANG_SINGLE_8 = 28  //八点
    public static GAME_CARDTYPE_EBGANG_SINGLE_9 = 29  //九点
    public static GAME_CARDTYPE_EBGANG_ERBAGANG = 30  //二八杠
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static CLIENT_IRCODE_DELMAIL = 1  //delmail
    public static CLIENT_IRCODE_READMAIL = 2  //readMail
    public static CLIENT_IRCODE_MAILS = 3  //mails
    public static CLIENT_IRCODE_NOTICES = 4  //notices
    public static CLIENT_IRCODE_SYNCTIME = 5  //synctime
    public static CLIENT_IRCODE_GETBINDVF = 6  //getbindvf
    public static CLIENT_IRCODE_GETVER = 7  //getver
    public static CLIENT_IRCODE_SERVICEONLINE = 8  //serviceonline
    public static CLIENT_IRCODE_RPWDVF = 9  //rpwdvf
    public static CLIENT_IRCODE_BETLIST = 10  //betlist
    public static CLIENT_IRCODE_RESETPWD = 11  //resetpwd
    public static CLIENT_IRCODE_SETINFO = 12  //setinfo
    public static CLIENT_IRCODE_PAYCHANNEL = 13  //paychannel
    public static CLIENT_IRCODE_PAY = 14  //pay
    public static CLIENT_IRCODE_DRAWCHANNEL = 15  //drawchannel
    public static CLIENT_IRCODE_DRAWING = 16  //drawing
    public static CLIENT_IRCODE_BINGDALIPAY = 17  //bindalipay
    public static CLIENT_IRCODE_BINDBANK = 18  //bindbank
    public static CLIENT_IRCODE_PAYDRAWLIST = 19  //paydrawlist
    public static CLIENT_IRCODE_CHANGEDDRAWPWD = 20  //changedrawpwd
    public static CLIENT_IRCODE_CHANGEPWD = 21  //changepwd
    public static CLIENT_IRCODE_INFO = 22  //info
    public static CLIENT_IRCODE_GETSIGNIN = 23  //getsiginin
    public static CLIENT_IRCODE_SIGIN = 24  //siginin
    public static CLIENT_IRCODE_SIGINCFG = 25  //signincfg
    public static CLIENT_IRCODE_SAVEBOXOUT = 26  //saveboxout
    public static CLIENT_IRCODE_SAVEBOXIN = 27  //saveboxin
    public static CLIENT_IRCODE_SAVEBOXLIST = 28  //saveboxlist
    public static CLIENT_IRCODE_GETRANKINGLIST = 29  //getRankingList
    public static CLIENT_IRCODE_TURNTABLECFG = 30  //turntablecfg
    public static CLIENT_IRCODE_TURNTABLEINFO = 31  //turntableinfo
    public static CLIENT_IRCODE_TURNTABLE = 32  //turntable
    public static CLIENT_IRCODE_TURNTABLELIST = 33  //turntablelist
    public static CLIENT_IRCODE_AGENCYREPORT = 34  //agencyreport
    public static CLIENT_IRCODE_GETRBMONEY = 35  //getrbmoney
    public static CLIENT_IRCODE_GETACTIVELIST = 36  //getactivelist
    public static CLIENT_IRCODE_AGENCYLVLIST = 37  //getagencylvlist
    public static CLIENT_IRCODE_VISIT = 38  //visit
    public static CLIENT_IRCODE_LOGIN = 39  //login
    public static CLIENT_IRCODE_PLAYERBIND = 40  //bind
    public static CLIENT_IRCODE_RETOKEN = 41  //retoken
    public static CLIENT_IRCODE_GETLOGINVF = 42  //getloginvf
    public static CLIENT_IRCODE_GETMYSHARE = 43  //getmyshare
    public static CLIENT_IRCODE_GETAGRLASTWEEK = 44  //getagrlastweek
    public static CLIENT_IRCODE_GETRBMONEYLOG = 45  //getrbmoneylog
    public static CLIENT_IRCODE_SETVER = 46  //setver
    public static CLIENT_IRCODE_GETAPPID = 47  //getappid
    public static CLIENT_IRCODE_BINDGIVEMONEY = 48  //bindgivemoney
    public static CLIENT_IRCODE_DAILYSHARE = 49  //dailyshare
    public static CLIENT_IRCODE_SAVEBOXRATE = 50  //saveboxrate
    public static CLIENT_IRCODE_GETMONEYLOG = 51  //get_moneylog
    public static CLIENT_IRCODE_GETBATTLELOG = 52  //getbattlelog
    public static CLIENT_IRCODE_GETINVENTORY = 53  //getinventory
    public static CLIENT_IRCODE_REMIT = 54  //rechargeremit
    public static CLIENT_IRCODE_GETPROMOLIST = 55  //get_promo_list
    public static CLIENT_IRCODE_GETAPPADDR = 56  //get_app_addr
    public static CLIENT_IRCODE_PLAYERQIFU = 57  //player_qifu
    public static CLIENT_IRCODE_GETPLAYERQIFU = 58  //get_player_qifu
    public static CLIENT_IRCODE_REMIT_NEW = 59  //rechargeremitnew
    public static CLIENT_IRCODE_GET_ROOMCARD_CONFIG = 60  //getroomcardconfig
    public static CLIENT_IRCODE_GET_ROOMCARD_SHARE = 61  //getroomcardshare
    public static CLIENT_IRCODE_AGENCYPLAYEROFFLINEDATA = 62  //getagencyplayerofflinedata
    public static CLIENT_IRCODE_PLAYERLVLIST = 63  //getplayerlevellist
    public static CLIENT_IRCODE_PLAYERLVAWARE = 64  //playerlevelaware
    public static CLIENT_IRCODE_CHECKLOGINVF = 65  //checkloginvf
    public static CLIENT_IRCODE_GETBULLETINLIST = 66  //getbulletinlist
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static CARD_GAME_PAY_TYP_MASTER = 1  //房主付费
    public static CARD_GAME_PAY_TYP_AA = 2  //AA付费
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static NOTICE_TYP_SYSTEM = 1  //系统公告
    public static NOTICE_TYP_GM = 2  //GM公告
    public static NOTICE_TYP_GAME = 3  //游戏公告
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static GAME_CARD_TYPE_ZJH_SINGLE = 1  //高牌
    public static GAME_CARD_TYPE_ZJH_DOUBLE = 2  //对子
    public static GAME_CARD_TYPE_ZJH_STRAIGHT = 3  //顺子
    public static GAME_CARD_TYPE_ZJH_SAMECOLOR = 4  //金花
    public static GAME_CARD_TYPE_ZJH_FLUSH = 5  //同花顺
    public static GAME_CARD_TYPE_ZJH_LEOPARD = 6  //豹子
    public static GAME_CARD_TYPE_ZJH_SPECIAL = 7  //高牌
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static GAME_CARD_TYPE_SANGONG_POINTS_0 = 1  //0点
    public static GAME_CARD_TYPE_SANGONG_POINTS_1 = 2  //1点
    public static GAME_CARD_TYPE_SANGONG_POINTS_2 = 3  //2点
    public static GAME_CARD_TYPE_SANGONG_POINTS_3 = 4  //3点
    public static GAME_CARD_TYPE_SANGONG_POINTS_4 = 5  //4点
    public static GAME_CARD_TYPE_SANGONG_POINTS_5 = 6  //5点
    public static GAME_CARD_TYPE_SANGONG_POINTS_6 = 7  //6点
    public static GAME_CARD_TYPE_SANGONG_POINTS_7 = 8  //7点
    public static GAME_CARD_TYPE_SANGONG_POINTS_8 = 9  //8点
    public static GAME_CARD_TYPE_SANGONG_POINTS_9 = 10  //9点
    public static GAME_CARD_TYPE_SANGONG_SG = 11  //三公
    public static GAME_CARD_TYPE_SANGONG_BOOM = 12  //炸弹
    public static GAME_CARD_TYPE_SANGONG_BAOJIU = 13  //爆玖
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static GAME_CARD_TYPE_PAIJIU_POINTS_0 = 1  //0点
    public static GAME_CARD_TYPE_PAIJIU_POINTS_1 = 2  //1点
    public static GAME_CARD_TYPE_PAIJIU_POINTS_2 = 3  //2点
    public static GAME_CARD_TYPE_PAIJIU_POINTS_3 = 4  //3点
    public static GAME_CARD_TYPE_PAIJIU_POINTS_4 = 5  //4点
    public static GAME_CARD_TYPE_PAIJIU_POINTS_5 = 6  //5点
    public static GAME_CARD_TYPE_PAIJIU_POINTS_6 = 7  //6点
    public static GAME_CARD_TYPE_PAIJIU_POINTS_7 = 8  //7点
    public static GAME_CARD_TYPE_PAIJIU_POINTS_8 = 9  //8点
    public static GAME_CARD_TYPE_PAIJIU_POINTS_9 = 10  //9点
    public static GAME_CARD_TYPE_PAIJIU_DGJ = 11  //地高九
    public static GAME_CARD_TYPE_PAIJIU_TGJ = 12  //天高九
    public static GAME_CARD_TYPE_PAIJIU_DG = 13  //地杠
    public static GAME_CARD_TYPE_PAIJIU_TG = 14  //天杠
    public static GAME_CARD_TYPE_PAIJIU_DW = 15  //地王
    public static GAME_CARD_TYPE_PAIJIU_TW = 16  //天王
    public static GAME_CARD_TYPE_PAIJIU_ZW = 17  //杂五
    public static GAME_CARD_TYPE_PAIJIU_ZQ = 18  //杂七
    public static GAME_CARD_TYPE_PAIJIU_ZB = 19  //杂八
    public static GAME_CARD_TYPE_PAIJIU_ZJ = 20  //杂九
    public static GAME_CARD_TYPE_PAIJIU_SLL = 21  //双零霖
    public static GAME_CARD_TYPE_PAIJIU_SGJ = 22  //双高脚
    public static GAME_CARD_TYPE_PAIJIU_SHT = 23  //双红头
    public static GAME_CARD_TYPE_PAIJIU_SFT = 24  //双斧头
    public static GAME_CARD_TYPE_PAIJIU_SBD = 25  //双板凳
    public static GAME_CARD_TYPE_PAIJIU_SCS = 26  //双长三
    public static GAME_CARD_TYPE_PAIJIU_SM = 27  //双梅
    public static GAME_CARD_TYPE_PAIJIU_SE = 28  //双鹅
    public static GAME_CARD_TYPE_PAIJIU_SR = 29  //双人
    public static GAME_CARD_TYPE_PAIJIU_SD = 30  //双地
    public static GAME_CARD_TYPE_PAIJIU_ST = 31  //双天
    public static GAME_CARD_TYPE_PAIJIU_ZZ = 32  //至尊
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static GAME_CARD_TYPE_BCBM_LBJN_D = 1  //兰博基尼大
    public static GAME_CARD_TYPE_BCBM_BSJ_D = 2  //保时捷大
    public static GAME_CARD_TYPE_BCBM_BC_D = 3  //奔驰大
    public static GAME_CARD_TYPE_BCBM_BM_D = 4  //宝马大
    public static GAME_CARD_TYPE_BCBM_LBJN_X = 5  //兰博基尼小
    public static GAME_CARD_TYPE_BCBM_BSJ_X = 6  //保时捷小
    public static GAME_CARD_TYPE_BCBM_BC_X = 7  //奔驰小
    public static GAME_CARD_TYPE_BCBM_BM_X = 8  //宝马小
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static GAME_CARD_TYPE_NIUNIU_MEINIU = 1  //没牛
    public static GAME_CARD_TYPE_NIUNIU_NIU1 = 2  //牛一
    public static GAME_CARD_TYPE_NIUNIU_NIU2 = 3  //牛二
    public static GAME_CARD_TYPE_NIUNIU_NIU3 = 4  //牛三
    public static GAME_CARD_TYPE_NIUNIU_NIU4 = 5  //牛四
    public static GAME_CARD_TYPE_NIUNIU_NIU5 = 6  //牛五
    public static GAME_CARD_TYPE_NIUNIU_NIU6 = 7  //牛六
    public static GAME_CARD_TYPE_NIUNIU_NIU7 = 8  //牛七
    public static GAME_CARD_TYPE_NIUNIU_NIU8 = 9  //牛八
    public static GAME_CARD_TYPE_NIUNIU_NIU9 = 10  //牛九
    public static GAME_CARD_TYPE_NIUNIU_NIUNIU = 11  //牛牛
    public static GAME_CARD_TYPE_NIUNIU_SIHUANIU = 12  //四花牛
    public static GAME_CARD_TYPE_NIUNIU_WUHUANIU = 13  //五花牛
    public static GAME_CARD_TYPE_NIUNIU_ZHADAN = 14  //炸弹
    public static GAME_CARD_TYPE_NIUNIU_WUXIAONIU = 15  //五小牛
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static GAME_BET_TYPE_SGJ_PG = 1  //苹果
    public static GAME_BET_TYPE_SGJ_CZ = 2  //橙子
    public static GAME_BET_TYPE_SGJ_MG = 3  //芒果
    public static GAME_BET_TYPE_SGJ_LD = 4  //铃铛
    public static GAME_BET_TYPE_SGJ_XG = 5  //西瓜
    public static GAME_BET_TYPE_SGJ_XX = 6  //星星
    public static GAME_BET_TYPE_SGJ_QQ = 7  //七七
    public static GAME_BET_TYPE_SGJ_BAR = 8  //bar
    public static GAME_BET_TYPE_SGJ_CDX_D = 9  //猜大
    public static GAME_BET_TYPE_SGJ_CDX_X = 10  //猜小
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static GAME_CARD_BIG_TYPE_SGJ_QPJ = 1  //全屏奖
    public static GAME_CARD_BIG_TYPE_SGJ_DSY = 2  //大三元
    public static GAME_CARD_BIG_TYPE_SGJ_DSX = 3  //大四喜
    public static GAME_CARD_BIG_TYPE_SGJ_XYJ = 4  //lucky
    public static GAME_CARD_BIG_TYPE_SGJ_PT = 5  //普通
    public static GAME_CARD_BIG_TYPE_SGJ_CDX = 6  //猜大小
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static GAME_CARD_SMALL_TYPE_SGJ_PGD = 1  //苹果大
    public static GAME_CARD_SMALL_TYPE_SGJ_CZD = 2  //橙子大
    public static GAME_CARD_SMALL_TYPE_SGJ_MGD = 3  //芒果大
    public static GAME_CARD_SMALL_TYPE_SGJ_LDD = 4  //铃铛大
    public static GAME_CARD_SMALL_TYPE_SGJ_XGD = 5  //西瓜大
    public static GAME_CARD_SMALL_TYPE_SGJ_XXD = 6  //星星大
    public static GAME_CARD_SMALL_TYPE_SGJ_QQD = 7  //七七大
    public static GAME_CARD_SMALL_TYPE_SGJ_BARD = 8  //bar大
    public static GAME_CARD_SMALL_TYPE_SGJ_XYJD = 9  //幸运大
    public static GAME_CARD_SMALL_TYPE_SGJ_PGX = 10  //苹果小
    public static GAME_CARD_SMALL_TYPE_SGJ_CZX = 11  //橙子小
    public static GAME_CARD_SMALL_TYPE_SGJ_MGX = 12  //芒果小
    public static GAME_CARD_SMALL_TYPE_SGJ_LDX = 13  //铃铛小
    public static GAME_CARD_SMALL_TYPE_SGJ_XGX = 14  //西瓜小
    public static GAME_CARD_SMALL_TYPE_SGJ_XXX = 15  //星星小
    public static GAME_CARD_SMALL_TYPE_SGJ_QQX = 16  //七七小
    public static GAME_CARD_SMALL_TYPE_SGJ_BARX = 17  //bar小
    public static GAME_CARD_SMALL_TYPE_SGJ_XYJX = 18  //幸运小
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static GAME_SERVER_MSG_TYPE_CHANGE_MONEY = 1  //修改金钱
    public static GAME_SERVER_MSG_TYPE_KICKING_PLAYER = 2  //踢人
    public static GAME_SERVER_MSG_TYPE_GAME_LIST = 3  //游戏列表
    public static GAME_SERVER_MSG_TYPE_CARD_CONFIG = 4  //房卡配置
    public static GAME_SERVER_MSG_TYPE_NOTICE_LIST = 5  //公告列表
    public static GAME_SERVER_MSG_TYPE_CHANGE_PDATA = 6  //更新pdata
    public static GAME_SERVER_MSG_TYPE_FREE_STYLE = 7  //配置系统通知
    public static GAME_SERVER_MSG_TYPE_SIGNIN_CONFIG = 8  //签到配置
    public static GAME_SERVER_MSG_TYPE_TURNTABLE_CONFIG = 9  //转盘配置
    public static GAME_SERVER_MSG_TYPE_VIP_CONFIG = 10  //VIP配置
    public static GAME_SERVER_MSG_TYPE_QIFU_CONFIG = 11  //祈福配置
    public static GAME_SERVER_MSG_TYPE_BASE_CONFIG = 12  //基础配置
    public static GAME_SERVER_MSG_TYPE_ORDER_STATUS = 13  //订单状态
    public static GAME_SERVER_MSG_TYPE_CHANGE_FLOW = 14  //修改打码量
    public static GAME_SERVER_MSG_TYPE_ADD_YONGJIN = 15  //添加佣金池金额
    public static GAME_SERVER_MSG_TYPE_NEW_BULLETIN = 16  //新游戏公告通知
    public static GAME_SERVER_MSG_TYPE_LOCK_ACCOUNT = 17  //封号
    public static GAME_SERVER_MSG_TYPE_CHANGE_HONGBAO = 18  //红包通知
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static GAME_QIFU_TYPE_XISHOU = 1  //洗手
    public static GAME_QIFU_TYPE_PIXIU = 2  //貔貅
    public static GAME_QIFU_TYPE_GUANYIN = 3  //观世音
    public static GAME_QIFU_TYPE_GUANGONG = 4  //关公
    public static GAME_QIFU_TYPE_CAISHEN = 5  //财神
    public static GAME_QIFU_TYPE_TUDIGONG = 6  //土地公
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static GAME_QIFU_MONEY_TYPE_ONE_DAY = 1  //祈福1天
    public static GAME_QIFU_MONEY_TYPE_ONE_TIME = 2  //祈福1次
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static GAME_LOGIN_OPENPAGE_TYPE_BINDMONEY = 1  //绑定送钱
    public static GAME_LOGIN_OPENPAGE_TYPE_HUODONG = 2  //优惠活动
    public static GAME_LOGIN_OPENPAGE_TYPE_GONGGAO = 3  //公告
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static GAME_GONGGAO_OPENPAGE_TYPE_NONE = 1  //不跳转
    public static GAME_GONGGAO_OPENPAGE_TYPE_LUNPAN = 2  //轮盘
    public static GAME_GONGGAO_OPENPAGE_TYPE_QIANDAO = 3  //签到
    public static GAME_GONGGAO_OPENPAGE_TYPE_DAILI = 4  //代理
    public static GAME_GONGGAO_OPENPAGE_TYPE_CHONGZHI = 5  //充值
    public static GAME_GONGGAO_OPENPAGE_TYPE_HUODONG = 6  //优惠活动
    public static GAME_GONGGAO_OPENPAGE_TYPE_YUEBAO = 7  //余额宝
    public static GAME_GONGGAO_OPENPAGE_TYPE_FANGKA = 8  //房卡标签
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static GAME_GONGGAO_OPENPAGE_RECHARGE_TYPE_NONE = 1  //不跳转
    public static GAME_GONGGAO_OPENPAGE_RECHARGE_TYPE_VIP = 2  //VIP充值
    public static GAME_GONGGAO_OPENPAGE_RECHARGE_TYPE_YHK = 3  //银行卡转账
    public static GAME_GONGGAO_OPENPAGE_RECHARGE_TYPE_WX = 4  //微信转账
    public static GAME_GONGGAO_OPENPAGE_RECHARGE_TYPE_ZFB = 5  //支付宝转账
    public static GAME_GONGGAO_OPENPAGE_RECHARGE_TYPE_YSF = 6  //云闪付转账
    public static GAME_GONGGAO_OPENPAGE_RECHARGE_TYPE_WXBANK = 7  //微信转银行
    public static GAME_GONGGAO_OPENPAGE_RECHARGE_TYPE_ZFBBANK = 8  //支付宝转银行
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static GAME_SHUISANSHUI_TYPE0 = 1  //乌龙
    public static GAME_SHUISANSHUI_TYPE1 = 2  //对子
    public static GAME_SHUISANSHUI_TYPE2 = 3  //两对
    public static GAME_SHUISANSHUI_TYPE3 = 4  //三条
    public static GAME_SHUISANSHUI_TYPE4 = 5  //顺子
    public static GAME_SHUISANSHUI_TYPE5 = 6  //同花
    public static GAME_SHUISANSHUI_TYPE6 = 7  //葫芦
    public static GAME_SHUISANSHUI_TYPE7 = 8  //铁支
    public static GAME_SHUISANSHUI_TYPE8 = 9  //同花顺
    public static GAME_SHUISANSHUI_TYPE9  = 10  //三同花
    public static GAME_SHUISANSHUI_TYPE10 = 11  //三顺子
    public static GAME_SHUISANSHUI_TYPE11 = 12  //六对半
    public static GAME_SHUISANSHUI_TYPE12 = 13  //五对三条
    public static GAME_SHUISANSHUI_TYPE13 = 14  //四套三条
    public static GAME_SHUISANSHUI_TYPE14 = 15  //凑一色
    public static GAME_SHUISANSHUI_TYPE15 = 16  //全小
    public static GAME_SHUISANSHUI_TYPE16 = 17  //全大
    public static GAME_SHUISANSHUI_TYPE17 = 18  //三分天下
    public static GAME_SHUISANSHUI_TYPE18 = 19  //三同花顺
    public static GAME_SHUISANSHUI_TYPE19 = 20  //十二皇族
    public static GAME_SHUISANSHUI_TYPE20 = 21  //一条龙
    public static GAME_SHUISANSHUI_TYPE21 = 22  //至尊青龙
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static DAILI_YONGHU_TIME_TYPE_SHANGYUE = 1  //上月
    public static DAILI_YONGHU_TIME_TYPE_BENYUE = 2  //本月
    public static DAILI_YONGHU_TIME_TYPE_SHANGZHOU = 3  //上周
    public static DAILI_YONGHU_TIME_TYPE_BENZHOU = 4  //本周
    public static DAILI_YONGHU_TIME_TYPE_QIANRI = 5  //前日
    public static DAILI_YONGHU_TIME_TYPE_ZUORI = 6  //昨日
    public static DAILI_YONGHU_TIME_TYPE_JINRI = 7  //今日
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static FREE_STYLE_TYPES_BASECONFIG_C = "baseconfig_c"  //基础配置
    public static FREE_STYLE_TYPES_VIPLVCONFIG_C = "viplvconfig_c"  //VIP等级配置
    public static FREE_STYLE_TYPES_SIGNINCONFIG_C = "signinconfig_c"  //签到配置
    public static FREE_STYLE_TYPES_TURNTABLECONFIG_C = "turntableconfig_c"  //转盘配置
    public static FREE_STYLE_TYPES_QIFUCONFIG_C = "qifuconfig_c"  //祈福配置
    public static FREE_STYLE_TYPES_FIRSTPAYCONFIG_C = "firstpayconfig_c"  //首充配置
    public static FREE_STYLE_TYPES_GAMEBULLETIN_C = "gamebulletin_c"  //游戏公告
    public static FREE_STYLE_TYPES_GAMEPOPCONFIG_C = "gamepopconfig_c"  //游戏弹窗配置
    public static FREE_STYLE_TYPES_PROMOTIONSCFG_C = "promotionscfg_c"  //优惠活动配置
    public static FREE_STYLE_TYPES_GUANGGAOLUNBO_C = "guanggaolunbo_c"  //首页轮播图片配置
    public static FREE_STYLE_TYPES_GAMEPARAMS = "gameparams"  //游戏参数配置
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static GAME_HOME_AD_LOOP_TYPE_DAILI = 1  //代理
    public static GAME_HOME_AD_LOOP_TYPE_FENXIANG = 2  //分享
    public static GAME_HOME_AD_LOOP_TYPE_GUANWANG = 3  //官网
    public static GAME_HOME_AD_LOOP_TYPE_VIP = 4  //VIP
    public static GAME_HOME_AD_LOOP_TYPE_YUEBAO = 5  //余额宝
    public static GAME_HOME_AD_LOOP_TYPE_ZHUANPAN = 6  //转盘
//------------------------ END -----------------------------------
//------------------------START-----------------------------------
    public static APP_STATE_TYPE_NORMAL = 1  //正常
    public static APP_STATE_TYPE_MINIMIZE = 2  //最小化
//------------------------ END -----------------------------------
}
